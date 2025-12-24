/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2021 SalesAgility Ltd.
 *
 * This program is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License version 3 as published by the
 * Free Software Foundation with the addition of the following permission added
 * to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK
 * IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE
 * WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * In accordance with Section 7(b) of the GNU Affero General Public License
 * version 3, these Appropriate Legal Notices must retain the display of the
 * "Supercharged by SuiteCRM" logo. If the display of the logos is not reasonably
 * feasible for technical reasons, the Appropriate Legal Notices must display
 * the words "Supercharged by SuiteCRM".
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatestWith } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { deepClone, isVoid } from 'common';
import * as i0 from "@angular/core";
import * as i1 from "../../services/ui/loading-buffer/loading-buffer.factory";
import * as i2 from "../system-config/system-config.store";
const initialState = {
    loading: false,
    initialAppLoading: true,
    module: null,
    view: null,
    loaded: false,
    routeUrl: null,
    preLoginUrl: null,
    currentUser: null,
    activeRequests: 0,
};
let internalState = deepClone(initialState);
class AppStateStore {
    loadingBufferFactory;
    configs;
    /**
     * Public long-lived observable streams
     */
    loading$;
    module$;
    view$;
    initialAppLoading$;
    activeRequests$;
    /**
     * ViewModel that resolves once all the data is ready (or updated)...
     */
    vm$;
    store = new BehaviorSubject(internalState);
    state$ = this.store.asObservable();
    loadingQueue = {};
    loadingBuffer;
    subs = [];
    constructor(loadingBufferFactory, configs) {
        this.loadingBufferFactory = loadingBufferFactory;
        this.configs = configs;
        this.loading$ = this.state$.pipe(map(state => state.loading), distinctUntilChanged());
        this.module$ = this.state$.pipe(map(state => state.module), distinctUntilChanged());
        this.view$ = this.state$.pipe(map(state => state.view), distinctUntilChanged());
        this.initialAppLoading$ = this.state$.pipe(map(state => state.initialAppLoading), distinctUntilChanged());
        this.activeRequests$ = this.state$.pipe(map(state => state.activeRequests), distinctUntilChanged());
        this.vm$ = this.loading$.pipe(combineLatestWith(this.module$, this.view$, this.initialAppLoading$), map(([loading, module, view, initialAppLoading]) => ({
            loading,
            module,
            view,
            loaded: internalState.loaded,
            initialAppLoading
        })));
    }
    /**
     * Public Api
     */
    /**
     * Clear state
     */
    clear() {
        this.loadingQueue = {};
        this.updateState(deepClone(initialState));
        this.subs.forEach(sub => sub.unsubscribe());
    }
    clearAuthBased() {
    }
    init() {
        this.initLoadingBuffer();
    }
    /**
     * Check if is logged in
     */
    isLoggedIn() {
        return !!(internalState.currentUser ?? false);
    }
    /**
     * Get current user
     */
    getCurrentUser() {
        return internalState.currentUser;
    }
    /**
     * Set current user
     * @param user
     */
    setCurrentUser(user) {
        if (!isVoid(user)) {
            this.onLogin();
        }
        else {
            this.onLogout();
        }
        this.updateState({ ...internalState, currentUser: user });
    }
    /**
     * On login handlers
     * @protected
     */
    onLogin() {
    }
    /**
     * On logout handlers
     * @protected
     */
    onLogout() {
        this.updateState({ ...internalState, preLoginUrl: null });
    }
    /**
     * Get number of active requests
     */
    getActiveRequests() {
        return internalState.activeRequests;
    }
    /**
     * Add active request to counter
     */
    addActiveRequest() {
        let activeRequests = internalState.activeRequests;
        if (isVoid(activeRequests)) {
            activeRequests = 0;
        }
        activeRequests++;
        this.updateState({ ...internalState, activeRequests });
    }
    /**
     * Remove active request to counter
     */
    removeActiveRequest() {
        let activeRequests = internalState.activeRequests;
        if (isVoid(activeRequests)) {
            activeRequests = 0;
        }
        else {
            activeRequests--;
        }
        if (activeRequests < 0) {
            activeRequests = 0;
        }
        this.updateState({ ...internalState, activeRequests });
    }
    /**
     * Update loading status for given key
     *
     * @param {string} key to update
     * @param {boolean} loading status to set
     * @param {boolean} delay
     */
    updateLoading(key, loading, delay = true) {
        this.initLoadingBuffer();
        if (loading === true) {
            this.addToLoadingQueue(key);
            this.loadingBuffer.updateLoading(loading);
            if (!delay) {
                this.updateState({ ...internalState, loading });
            }
            return;
        }
        this.removeFromLoadingQueue(key);
        if (this.hasActiveLoading()) {
            this.loadingBuffer.updateLoading(loading);
            this.updateState({ ...internalState, loading });
        }
    }
    /**
     * Update loading status for given key
     *
     * @param {boolean} initialAppLoading status to set
     */
    updateInitialAppLoading(initialAppLoading) {
        this.updateState({ ...internalState, initialAppLoading });
    }
    /**
     * Has app been initially loaded
     *
     * @returns {boolean} is loaded
     */
    isLoaded() {
        return internalState.loaded;
    }
    /**
     * Set initial app load status
     *
     * @param {string} loaded flag
     */
    setLoaded(loaded) {
        this.updateState({ ...internalState, loaded });
    }
    /**
     * Set current module
     *
     * @param {string} module to set as current module
     */
    setModule(module) {
        this.updateState({ ...internalState, module });
    }
    /**
     * Get the current module
     *
     * @returns {string} current view
     */
    getModule() {
        return internalState?.module ?? '';
    }
    /**
     * Set current View
     *
     * @param {string} view to set as current view
     */
    setView(view) {
        this.updateState({ ...internalState, view });
    }
    /**
     * Get the current view
     *
     * @returns {string} current view
     */
    getView() {
        return internalState.view;
    }
    /**
     * Set route url
     *
     * @param {string} routeUrl to set
     */
    setRouteUrl(routeUrl) {
        this.updateState({ ...internalState, routeUrl });
    }
    /**
     * Get the route ulr
     *
     * @returns {string} current route url
     */
    getRouteUrl() {
        return internalState.routeUrl;
    }
    /**
     * set pre login url
     *
     * @param preLoginUrl
     */
    setPreLoginUrl(preLoginUrl) {
        this.updateState({ ...internalState, preLoginUrl });
    }
    /**
     * get pre login url
     *
     * @returns string
     */
    getPreLoginUrl() {
        return internalState.preLoginUrl ?? '';
    }
    /**
     * Internal API
     */
    /**
     * Init loading buffer
     * @protected
     */
    initLoadingBuffer() {
        if (!this.loadingBuffer) {
            this.loadingBuffer = this.loadingBufferFactory.create();
            this.subs.push(this.loadingBuffer.loading$.subscribe((loading) => {
                this.updateState({ ...internalState, loading });
            }));
        }
    }
    /**
     *  Check if there are still active loadings
     *
     *  @returns {boolean} active loading
     */
    hasActiveLoading() {
        return Object.keys(this.loadingQueue).length < 1;
    }
    /**
     * Remove key from loading queue
     *
     * @param {string} key to remove
     */
    removeFromLoadingQueue(key) {
        if (this.loadingQueue[key]) {
            delete this.loadingQueue[key];
        }
    }
    /**
     * Add key to loading queue
     *
     * @param {string} key to add
     */
    addToLoadingQueue(key) {
        this.loadingQueue[key] = true;
    }
    /**
     * Update the state
     *
     * @param {{}} state app state
     */
    updateState(state) {
        this.store.next(internalState = state);
    }
    static ɵfac = function AppStateStore_Factory(t) { return new (t || AppStateStore)(i0.ɵɵinject(i1.LoadingBufferFactory), i0.ɵɵinject(i2.SystemConfigStore)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AppStateStore, factory: AppStateStore.ɵfac, providedIn: 'root' });
}
export { AppStateStore };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppStateStore, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.LoadingBufferFactory }, { type: i2.SystemConfigStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXN0YXRlLnN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3N0b3JlL2FwcC1zdGF0ZS9hcHAtc3RhdGUuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGVBQWUsRUFBRSxpQkFBaUIsRUFBMkIsTUFBTSxNQUFNLENBQUM7QUFDbEYsT0FBTyxFQUFDLG9CQUFvQixFQUFFLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFPLE1BQU0sUUFBUSxDQUFDOzs7O0FBa0IvQyxNQUFNLFlBQVksR0FBYTtJQUMzQixPQUFPLEVBQUUsS0FBSztJQUNkLGlCQUFpQixFQUFFLElBQUk7SUFDdkIsTUFBTSxFQUFFLElBQUk7SUFDWixJQUFJLEVBQUUsSUFBSTtJQUNWLE1BQU0sRUFBRSxLQUFLO0lBQ2IsUUFBUSxFQUFFLElBQUk7SUFDZCxXQUFXLEVBQUUsSUFBSTtJQUNqQixXQUFXLEVBQUUsSUFBSTtJQUNqQixjQUFjLEVBQUUsQ0FBQztDQUNwQixDQUFDO0FBRUYsSUFBSSxhQUFhLEdBQWEsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBRXRELE1BR2EsYUFBYTtJQXVCUjtJQUNBO0lBdEJkOztPQUVHO0lBQ0gsUUFBUSxDQUFzQjtJQUM5QixPQUFPLENBQXFCO0lBQzVCLEtBQUssQ0FBcUI7SUFDMUIsa0JBQWtCLENBQXNCO0lBQ3hDLGVBQWUsQ0FBcUI7SUFFcEM7O09BRUc7SUFDSCxHQUFHLENBQXVCO0lBRWhCLEtBQUssR0FBRyxJQUFJLGVBQWUsQ0FBVyxhQUFhLENBQUMsQ0FBQztJQUNyRCxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUss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OztPQUlHO0lBQ08sZ0JBQWdCO1FBQ3RCLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNPLHNCQUFzQixDQUFDLEdBQVc7UUFDeEMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3hCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQztJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ08saUJBQWlCLENBQUMsR0FBVztRQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUNsQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNPLFdBQVcsQ0FBQyxLQUFlO1FBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDO3VFQXZVUSxhQUFhO2dFQUFiLGFBQWEsV0FBYixhQUFhLG1CQUZWLE1BQU07O1NBRVQsYUFBYTt1RkFBYixhQUFhO2NBSHpCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBjb21iaW5lTGF0ZXN0V2l0aCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7ZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtkZWVwQ2xvbmUsIGlzVm9pZCwgVXNlcn0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7U3RhdGVTdG9yZX0gZnJvbSAnLi4vc3RhdGUnO1xuaW1wb3J0IHtMb2FkaW5nQnVmZmVyRmFjdG9yeX0gZnJvbSAnLi4vLi4vc2VydmljZXMvdWkvbG9hZGluZy1idWZmZXIvbG9hZGluZy1idWZmZXIuZmFjdG9yeSc7XG5pbXBvcnQge0xvYWRpbmdCdWZmZXJ9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VpL2xvYWRpbmctYnVmZmVyL2xvYWRpbmctYnVmZmVyLnNlcnZpY2UnO1xuaW1wb3J0IHtTeXN0ZW1Db25maWdTdG9yZX0gZnJvbSAnLi4vc3lzdGVtLWNvbmZpZy9zeXN0ZW0tY29uZmlnLnN0b3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBBcHBTdGF0ZSB7XG4gICAgbG9hZGluZz86IGJvb2xlYW47XG4gICAgaW5pdGlhbEFwcExvYWRpbmc/OiBib29sZWFuO1xuICAgIG1vZHVsZT86IHN0cmluZztcbiAgICB2aWV3Pzogc3RyaW5nO1xuICAgIGxvYWRlZD86IGJvb2xlYW47XG4gICAgcm91dGVVcmw/OiBzdHJpbmc7XG4gICAgcHJlTG9naW5Vcmw/OiBzdHJpbmc7XG4gICAgY3VycmVudFVzZXI/OiBVc2VyO1xuICAgIGFjdGl2ZVJlcXVlc3RzPzogbnVtYmVyO1xufVxuXG5jb25zdCBpbml0aWFsU3RhdGU6IEFwcFN0YXRlID0ge1xuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIGluaXRpYWxBcHBMb2FkaW5nOiB0cnVlLFxuICAgIG1vZHVsZTogbnVsbCxcbiAgICB2aWV3OiBudWxsLFxuICAgIGxvYWRlZDogZmFsc2UsXG4gICAgcm91dGVVcmw6IG51bGwsXG4gICAgcHJlTG9naW5Vcmw6IG51bGwsXG4gICAgY3VycmVudFVzZXI6IG51bGwsXG4gICAgYWN0aXZlUmVxdWVzdHM6IDAsXG59O1xuXG5sZXQgaW50ZXJuYWxTdGF0ZTogQXBwU3RhdGUgPSBkZWVwQ2xvbmUoaW5pdGlhbFN0YXRlKTtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXBwU3RhdGVTdG9yZSBpbXBsZW1lbnRzIFN0YXRlU3RvcmUge1xuXG4gICAgLyoqXG4gICAgICogUHVibGljIGxvbmctbGl2ZWQgb2JzZXJ2YWJsZSBzdHJlYW1zXG4gICAgICovXG4gICAgbG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgbW9kdWxlJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIHZpZXckOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gICAgaW5pdGlhbEFwcExvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIGFjdGl2ZVJlcXVlc3RzJDogT2JzZXJ2YWJsZTxudW1iZXI+O1xuXG4gICAgLyoqXG4gICAgICogVmlld01vZGVsIHRoYXQgcmVzb2x2ZXMgb25jZSBhbGwgdGhlIGRhdGEgaXMgcmVhZHkgKG9yIHVwZGF0ZWQpLi4uXG4gICAgICovXG4gICAgdm0kOiBPYnNlcnZhYmxlPEFwcFN0YXRlPjtcblxuICAgIHByb3RlY3RlZCBzdG9yZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8QXBwU3RhdGU+KGludGVybmFsU3RhdGUpO1xuICAgIHByb3RlY3RlZCBzdGF0ZSQgPSB0aGlzLnN0b3JlLmFzT2JzZXJ2YWJsZSgpO1xuICAgIHByb3RlY3RlZCBsb2FkaW5nUXVldWUgPSB7fTtcbiAgICBwcm90ZWN0ZWQgbG9hZGluZ0J1ZmZlcjogTG9hZGluZ0J1ZmZlcjtcbiAgICBwcm90ZWN0ZWQgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgbG9hZGluZ0J1ZmZlckZhY3Rvcnk6IExvYWRpbmdCdWZmZXJGYWN0b3J5LFxuICAgICAgICBwcm90ZWN0ZWQgY29uZmlnczogU3lzdGVtQ29uZmlnU3RvcmVcbiAgICApIHtcblxuICAgICAgICB0aGlzLmxvYWRpbmckID0gdGhpcy5zdGF0ZSQucGlwZShtYXAoc3RhdGUgPT4gc3RhdGUubG9hZGluZyksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICAgICAgICB0aGlzLm1vZHVsZSQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5tb2R1bGUpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgICAgICAgdGhpcy52aWV3JCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLnZpZXcpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgICAgICAgdGhpcy5pbml0aWFsQXBwTG9hZGluZyQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5pbml0aWFsQXBwTG9hZGluZyksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICAgICAgICB0aGlzLmFjdGl2ZVJlcXVlc3RzJCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLmFjdGl2ZVJlcXVlc3RzKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG5cbiAgICAgICAgdGhpcy52bSQgPSB0aGlzLmxvYWRpbmckLnBpcGUoXG4gICAgICAgICAgICBjb21iaW5lTGF0ZXN0V2l0aCh0aGlzLm1vZHVsZSQsIHRoaXMudmlldyQsIHRoaXMuaW5pdGlhbEFwcExvYWRpbmckKSxcbiAgICAgICAgICAgIG1hcCgoW2xvYWRpbmcsIG1vZHVsZSwgdmlldywgaW5pdGlhbEFwcExvYWRpbmddKSA9PiAoe1xuICAgICAgICAgICAgICAgIGxvYWRpbmcsXG4gICAgICAgICAgICAgICAgbW9kdWxlLFxuICAgICAgICAgICAgICAgIHZpZXcsXG4gICAgICAgICAgICAgICAgbG9hZGVkOiBpbnRlcm5hbFN0YXRlLmxvYWRlZCxcbiAgICAgICAgICAgICAgICBpbml0aWFsQXBwTG9hZGluZ1xuICAgICAgICAgICAgfSkpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHVibGljIEFwaVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgc3RhdGVcbiAgICAgKi9cbiAgICBwdWJsaWMgY2xlYXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubG9hZGluZ1F1ZXVlID0ge307XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoZGVlcENsb25lKGluaXRpYWxTdGF0ZSkpO1xuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhckF1dGhCYXNlZCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbml0TG9hZGluZ0J1ZmZlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGlzIGxvZ2dlZCBpblxuICAgICAqL1xuICAgIGlzTG9nZ2VkSW4oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhIShpbnRlcm5hbFN0YXRlLmN1cnJlbnRVc2VyID8/IGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgY3VycmVudCB1c2VyXG4gICAgICovXG4gICAgZ2V0Q3VycmVudFVzZXIoKTogVXNlciB7XG4gICAgICAgIHJldHVybiBpbnRlcm5hbFN0YXRlLmN1cnJlbnRVc2VyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBjdXJyZW50IHVzZXJcbiAgICAgKiBAcGFyYW0gdXNlclxuICAgICAqL1xuICAgIHNldEN1cnJlbnRVc2VyKHVzZXI6IFVzZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKCFpc1ZvaWQodXNlcikpIHtcbiAgICAgICAgICAgIHRoaXMub25Mb2dpbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vbkxvZ291dCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoey4uLmludGVybmFsU3RhdGUsIGN1cnJlbnRVc2VyOiB1c2VyfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT24gbG9naW4gaGFuZGxlcnNcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIG9uTG9naW4oKTogdm9pZCB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT24gbG9nb3V0IGhhbmRsZXJzXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBvbkxvZ291dCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7Li4uaW50ZXJuYWxTdGF0ZSwgcHJlTG9naW5Vcmw6IG51bGx9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgbnVtYmVyIG9mIGFjdGl2ZSByZXF1ZXN0c1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXRBY3RpdmVSZXF1ZXN0cygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gaW50ZXJuYWxTdGF0ZS5hY3RpdmVSZXF1ZXN0cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYWN0aXZlIHJlcXVlc3QgdG8gY291bnRlclxuICAgICAqL1xuICAgIHB1YmxpYyBhZGRBY3RpdmVSZXF1ZXN0KCk6IHZvaWQge1xuICAgICAgICBsZXQgYWN0aXZlUmVxdWVzdHMgPSBpbnRlcm5hbFN0YXRlLmFjdGl2ZVJlcXVlc3RzO1xuICAgICAgICBpZiAoaXNWb2lkKGFjdGl2ZVJlcXVlc3RzKSkge1xuICAgICAgICAgICAgYWN0aXZlUmVxdWVzdHMgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGFjdGl2ZVJlcXVlc3RzKys7XG5cbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7Li4uaW50ZXJuYWxTdGF0ZSwgYWN0aXZlUmVxdWVzdHN9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYWN0aXZlIHJlcXVlc3QgdG8gY291bnRlclxuICAgICAqL1xuICAgIHB1YmxpYyByZW1vdmVBY3RpdmVSZXF1ZXN0KCk6IHZvaWQge1xuICAgICAgICBsZXQgYWN0aXZlUmVxdWVzdHMgPSBpbnRlcm5hbFN0YXRlLmFjdGl2ZVJlcXVlc3RzO1xuICAgICAgICBpZiAoaXNWb2lkKGFjdGl2ZVJlcXVlc3RzKSkge1xuICAgICAgICAgICAgYWN0aXZlUmVxdWVzdHMgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWN0aXZlUmVxdWVzdHMtLTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhY3RpdmVSZXF1ZXN0cyA8IDApIHtcbiAgICAgICAgICAgIGFjdGl2ZVJlcXVlc3RzID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoey4uLmludGVybmFsU3RhdGUsIGFjdGl2ZVJlcXVlc3RzfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGxvYWRpbmcgc3RhdHVzIGZvciBnaXZlbiBrZXlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdG8gdXBkYXRlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBsb2FkaW5nIHN0YXR1cyB0byBzZXRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGRlbGF5XG4gICAgICovXG4gICAgcHVibGljIHVwZGF0ZUxvYWRpbmcoa2V5OiBzdHJpbmcsIGxvYWRpbmc6IGJvb2xlYW4sIGRlbGF5ID0gdHJ1ZSk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMuaW5pdExvYWRpbmdCdWZmZXIoKTtcblxuICAgICAgICBpZiAobG9hZGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5hZGRUb0xvYWRpbmdRdWV1ZShrZXkpO1xuXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdCdWZmZXIudXBkYXRlTG9hZGluZyhsb2FkaW5nKTtcbiAgICAgICAgICAgIGlmICghZGVsYXkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHsuLi5pbnRlcm5hbFN0YXRlLCBsb2FkaW5nfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVtb3ZlRnJvbUxvYWRpbmdRdWV1ZShrZXkpO1xuXG4gICAgICAgIGlmICh0aGlzLmhhc0FjdGl2ZUxvYWRpbmcoKSkge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nQnVmZmVyLnVwZGF0ZUxvYWRpbmcobG9hZGluZyk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHsuLi5pbnRlcm5hbFN0YXRlLCBsb2FkaW5nfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgbG9hZGluZyBzdGF0dXMgZm9yIGdpdmVuIGtleVxuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSBpbml0aWFsQXBwTG9hZGluZyBzdGF0dXMgdG8gc2V0XG4gICAgICovXG4gICAgcHVibGljIHVwZGF0ZUluaXRpYWxBcHBMb2FkaW5nKGluaXRpYWxBcHBMb2FkaW5nOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoey4uLmludGVybmFsU3RhdGUsIGluaXRpYWxBcHBMb2FkaW5nfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFzIGFwcCBiZWVuIGluaXRpYWxseSBsb2FkZWRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBpcyBsb2FkZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgaXNMb2FkZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBpbnRlcm5hbFN0YXRlLmxvYWRlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgaW5pdGlhbCBhcHAgbG9hZCBzdGF0dXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsb2FkZWQgZmxhZ1xuICAgICAqL1xuICAgIHB1YmxpYyBzZXRMb2FkZWQobG9hZGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoey4uLmludGVybmFsU3RhdGUsIGxvYWRlZH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBjdXJyZW50IG1vZHVsZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZHVsZSB0byBzZXQgYXMgY3VycmVudCBtb2R1bGVcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0TW9kdWxlKG1vZHVsZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoey4uLmludGVybmFsU3RhdGUsIG1vZHVsZX0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY3VycmVudCBtb2R1bGVcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IGN1cnJlbnQgdmlld1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXRNb2R1bGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGludGVybmFsU3RhdGU/Lm1vZHVsZSA/PyAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgY3VycmVudCBWaWV3XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmlldyB0byBzZXQgYXMgY3VycmVudCB2aWV3XG4gICAgICovXG4gICAgcHVibGljIHNldFZpZXcodmlldzogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoey4uLmludGVybmFsU3RhdGUsIHZpZXd9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGN1cnJlbnQgdmlld1xuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ30gY3VycmVudCB2aWV3XG4gICAgICovXG4gICAgcHVibGljIGdldFZpZXcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGludGVybmFsU3RhdGUudmlldztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgcm91dGUgdXJsXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcm91dGVVcmwgdG8gc2V0XG4gICAgICovXG4gICAgcHVibGljIHNldFJvdXRlVXJsKHJvdXRlVXJsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7Li4uaW50ZXJuYWxTdGF0ZSwgcm91dGVVcmx9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHJvdXRlIHVsclxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ30gY3VycmVudCByb3V0ZSB1cmxcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0Um91dGVVcmwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGludGVybmFsU3RhdGUucm91dGVVcmw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc2V0IHByZSBsb2dpbiB1cmxcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwcmVMb2dpblVybFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRQcmVMb2dpblVybChwcmVMb2dpblVybDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoey4uLmludGVybmFsU3RhdGUsIHByZUxvZ2luVXJsfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZ2V0IHByZSBsb2dpbiB1cmxcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHN0cmluZ1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXRQcmVMb2dpblVybCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gaW50ZXJuYWxTdGF0ZS5wcmVMb2dpblVybCA/PyAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBBUElcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEluaXQgbG9hZGluZyBidWZmZXJcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGluaXRMb2FkaW5nQnVmZmVyKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMubG9hZGluZ0J1ZmZlcikge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nQnVmZmVyID0gdGhpcy5sb2FkaW5nQnVmZmVyRmFjdG9yeS5jcmVhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMubG9hZGluZ0J1ZmZlci5sb2FkaW5nJC5zdWJzY3JpYmUoKGxvYWRpbmcpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHsuLi5pbnRlcm5hbFN0YXRlLCBsb2FkaW5nfSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAgQ2hlY2sgaWYgdGhlcmUgYXJlIHN0aWxsIGFjdGl2ZSBsb2FkaW5nc1xuICAgICAqXG4gICAgICogIEByZXR1cm5zIHtib29sZWFufSBhY3RpdmUgbG9hZGluZ1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBoYXNBY3RpdmVMb2FkaW5nKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5sb2FkaW5nUXVldWUpLmxlbmd0aCA8IDE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGtleSBmcm9tIGxvYWRpbmcgcXVldWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdG8gcmVtb3ZlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHJlbW92ZUZyb21Mb2FkaW5nUXVldWUoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubG9hZGluZ1F1ZXVlW2tleV0pIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmxvYWRpbmdRdWV1ZVtrZXldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGtleSB0byBsb2FkaW5nIHF1ZXVlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRvIGFkZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBhZGRUb0xvYWRpbmdRdWV1ZShrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmxvYWRpbmdRdWV1ZVtrZXldID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHN0YXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3t9fSBzdGF0ZSBhcHAgc3RhdGVcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgdXBkYXRlU3RhdGUoc3RhdGU6IEFwcFN0YXRlKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RvcmUubmV4dChpbnRlcm5hbFN0YXRlID0gc3RhdGUpO1xuICAgIH1cbn1cbiJdfQ==