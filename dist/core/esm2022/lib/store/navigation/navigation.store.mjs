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
import { BehaviorSubject, combineLatestWith, of } from 'rxjs';
import { distinctUntilChanged, map, shareReplay, tap } from 'rxjs/operators';
import { deepClone } from 'common';
import * as i0 from "@angular/core";
import * as i1 from "../../services/api/graphql-api/api.entity.get";
const initialState = {
    tabs: [],
    groupedTabs: [],
    modules: {},
    userActionMenu: [],
    quickActions: [],
    maxTabs: 0
};
let internalState = deepClone(initialState);
let cache$ = null;
class NavigationStore {
    recordGQL;
    /**
     * Public long-lived observable streams
     */
    tabs$;
    groupedTabs$;
    modules$;
    userActionMenu$;
    maxTabs$;
    quickActions$;
    /**
     * ViewModel that resolves once all the data is ready (or updated)...
     */
    vm$;
    store = new BehaviorSubject(internalState);
    state$ = this.store.asObservable();
    resourceName = 'navbar';
    fieldsMetadata = {
        fields: [
            'tabs',
            'groupedTabs',
            'modules',
            'userActionMenu',
            'maxTabs'
        ]
    };
    constructor(recordGQL) {
        this.recordGQL = recordGQL;
        this.tabs$ = this.state$.pipe(map(state => state.tabs), distinctUntilChanged());
        this.groupedTabs$ = this.state$.pipe(map(state => state.groupedTabs), distinctUntilChanged());
        this.modules$ = this.state$.pipe(map(state => state.modules), distinctUntilChanged());
        this.userActionMenu$ = this.state$.pipe(map(state => state.userActionMenu), distinctUntilChanged());
        this.maxTabs$ = this.state$.pipe(map(state => state.maxTabs), distinctUntilChanged());
        this.quickActions$ = this.state$.pipe(map(state => state.quickActions), distinctUntilChanged());
        this.vm$ = this.tabs$.pipe(combineLatestWith(this.groupedTabs$, this.modules$, this.userActionMenu$, this.maxTabs$, this.quickActions$), map(([tabs, groupedTabs, modules, userActionMenu, maxTabs, quickActions]) => ({
            tabs, groupedTabs, modules, userActionMenu, maxTabs, quickActions
        })));
    }
    /**
     * Public Api
     */
    /**
     * Clear state
     */
    clear() {
        cache$ = null;
        this.updateState(deepClone(initialState));
    }
    clearAuthBased() {
        this.clear();
    }
    /**
     * Initial Navigation load if not cached and update state.
     * Returns observable to be used in resolver if needed
     *
     * @returns {{}} Observable<any>
     */
    load() {
        return this.getNavigation().pipe(tap(navigation => {
            this.updateState({
                ...internalState,
                tabs: navigation.tabs,
                groupedTabs: navigation.groupedTabs,
                userActionMenu: navigation.userActionMenu,
                modules: navigation.modules,
                maxTabs: navigation.maxTabs,
                quickActions: navigation?.quickActions ?? []
            });
        }));
    }
    /**
     * Check if loaded
     */
    isCached() {
        return cache$ !== null;
    }
    /**
     * Set pre-loaded navigation and cache
     */
    set(navigation) {
        cache$ = of(navigation).pipe(shareReplay(1));
        this.updateState({
            ...internalState,
            tabs: navigation.tabs,
            groupedTabs: navigation.groupedTabs,
            userActionMenu: navigation.userActionMenu,
            modules: navigation.modules,
            maxTabs: navigation.maxTabs,
            quickActions: navigation?.quickActions ?? []
        });
    }
    /**
     * Internal API
     */
    /**
     * Update the state
     *
     * @param {{}} state to set
     */
    updateState(state) {
        this.store.next(internalState = state);
    }
    /**
     * Get Navigation cached Observable or call the backend
     *
     * @returns {{}} Observable<any>
     */
    getNavigation() {
        const user = '1';
        if (cache$ === null) {
            cache$ = this.fetch(user).pipe(shareReplay(1));
        }
        return cache$;
    }
    /**
     * Fetch the Navigation from the backend
     *
     * @param {string} userId to use
     * @returns {{}} Observable<any>
     */
    fetch(userId) {
        return this.recordGQL
            .fetch(this.resourceName, `/api/navbars/${userId}`, this.fieldsMetadata)
            .pipe(map(({ data }) => {
            let navigation = null;
            if (data && data.navbar) {
                navigation = {
                    tabs: data.navbar.tabs,
                    groupedTabs: data.navbar.groupedTabs,
                    userActionMenu: data.navbar.userActionMenu,
                    modules: data.navbar.modules,
                    maxTabs: data.navbar.maxTabs,
                    quickActions: data?.navbar?.quickActions ?? [],
                };
            }
            return navigation;
        }));
    }
    static ɵfac = function NavigationStore_Factory(t) { return new (t || NavigationStore)(i0.ɵɵinject(i1.EntityGQL)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NavigationStore, factory: NavigationStore.ɵfac, providedIn: 'root' });
}
export { NavigationStore };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavigationStore, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.EntityGQL }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9zdG9yZS9uYXZpZ2F0aW9uL25hdmlnYXRpb24uc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGVBQWUsRUFBRSxpQkFBaUIsRUFBYyxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDeEUsT0FBTyxFQUFDLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFJM0UsT0FBTyxFQUFDLFNBQVMsRUFBWSxNQUFNLFFBQVEsQ0FBQzs7O0FBb0Q1QyxNQUFNLFlBQVksR0FBZTtJQUM3QixJQUFJLEVBQUUsRUFBRTtJQUNSLFdBQVcsRUFBRSxFQUFFO0lBQ2YsT0FBTyxFQUFFLEVBQUU7SUFDWCxjQUFjLEVBQUUsRUFBRTtJQUNsQixZQUFZLEVBQUUsRUFBRTtJQUNoQixPQUFPLEVBQUUsQ0FBQztDQUNiLENBQUM7QUFFRixJQUFJLGFBQWEsR0FBZSxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7QUFFeEQsSUFBSSxNQUFNLEdBQW9CLElBQUksQ0FBQztBQUVuQyxNQUdhLGVBQWU7SUE4Qko7SUE1QnBCOztPQUVHO0lBQ0gsS0FBSyxDQUF1QjtJQUM1QixZQUFZLENBQTJCO0lBQ3ZDLFFBQVEsQ0FBOEI7SUFDdEMsZUFBZSxDQUErQjtJQUM5QyxRQUFRLENBQXFCO0lBQzdCLGFBQWEsQ0FBNkI7SUFFMUM7O09BRUc7SUFDSCxHQUFHLENBQXlCO0lBRWxCLEtBQUssR0FBRyxJQUFJLGVBQWUsQ0FBYSxhQUFhLENBQUMsQ0FBQztJQUN2RCxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUss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O09BS0c7SUFDTyxLQUFLLENBQUMsTUFBYztRQUMxQixPQUFPLElBQUksQ0FBQyxTQUFTO2FBQ2hCLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLGdCQUFnQixNQUFNLEVBQUUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDO2FBQ3ZFLElBQUksQ0FDRCxHQUFHLENBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUU7WUFDWCxJQUFJLFVBQVUsR0FBZSxJQUFJLENBQUM7WUFFbEMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDckIsVUFBVSxHQUFHO29CQUNULElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7b0JBQ3RCLFdBQVcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVc7b0JBQ3BDLGNBQWMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWM7b0JBQzFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87b0JBQzVCLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87b0JBQzVCLFlBQVksRUFBRyxJQUFJLEVBQUUsTUFBTSxFQUFFLFlBQVksSUFBSSxFQUFFO2lCQUNsRCxDQUFDO2FBRUw7WUFFRCxPQUFPLFVBQVUsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FDTCxDQUFDO0lBQ1YsQ0FBQzt5RUEzS1EsZUFBZTtnRUFBZixlQUFlLFdBQWYsZUFBZSxtQkFGWixNQUFNOztTQUVULGVBQWU7dUZBQWYsZUFBZTtjQUgzQixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgY29tYmluZUxhdGVzdFdpdGgsIE9ic2VydmFibGUsIG9mfSBmcm9tICdyeGpzJztcbmltcG9ydCB7ZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCwgc2hhcmVSZXBsYXksIHRhcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge0VudGl0eUdRTH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpL2dyYXBocWwtYXBpL2FwaS5lbnRpdHkuZ2V0JztcbmltcG9ydCB7U3RhdGVTdG9yZX0gZnJvbSAnLi4vc3RhdGUnO1xuaW1wb3J0IHtkZWVwQ2xvbmUsIE9iamVjdE1hcH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7UGFyYW1zfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdmlnYXRpb24ge1xuICAgIHRhYnM6IHN0cmluZ1tdO1xuICAgIGdyb3VwZWRUYWJzOiBHcm91cGVkVGFiW107XG4gICAgbW9kdWxlczogTmF2YmFyTW9kdWxlTWFwO1xuICAgIHF1aWNrQWN0aW9uczogTW9kdWxlQWN0aW9uW107XG4gICAgdXNlckFjdGlvbk1lbnU6IFVzZXJBY3Rpb25NZW51W107XG4gICAgbWF4VGFiczogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5hdmJhck1vZHVsZU1hcCB7XG4gICAgW2tleTogc3RyaW5nXTogTmF2YmFyTW9kdWxlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5hdmJhck1vZHVsZSB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHBhdGg6IHN0cmluZztcbiAgICBkZWZhdWx0Um91dGU6IHN0cmluZztcbiAgICBsYWJlbEtleTogc3RyaW5nO1xuICAgIG1lbnU6IE1vZHVsZUFjdGlvbltdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdyb3VwZWRUYWIge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBsYWJlbEtleTogc3RyaW5nO1xuICAgIG1vZHVsZXM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJBY3Rpb25NZW51IHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgbGFiZWxLZXk6IHN0cmluZztcbiAgICB1cmw6IHN0cmluZztcbiAgICBpY29uOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9kdWxlQWN0aW9uIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgbGFiZWxLZXk6IHN0cmluZztcbiAgICBhY3Rpb25MYWJlbEtleT86IHN0cmluZztcbiAgICBsYWJlbD86IHN0cmluZztcbiAgICB1cmw6IHN0cmluZztcbiAgICBwYXJhbXM/OiBzdHJpbmcgfCBQYXJhbXM7XG4gICAgaWNvbjogc3RyaW5nO1xuICAgIG1vZHVsZT86IHN0cmluZztcbiAgICBzdWJsaW5rcz86IE9iamVjdE1hcDtcbiAgICBxdWlja0FjdGlvbj86IGJvb2xlYW47XG4gICAgdHlwZT86IHN0cmluZztcbiAgICBwcm9jZXNzPzogc3RyaW5nO1xufVxuXG5jb25zdCBpbml0aWFsU3RhdGU6IE5hdmlnYXRpb24gPSB7XG4gICAgdGFiczogW10sXG4gICAgZ3JvdXBlZFRhYnM6IFtdLFxuICAgIG1vZHVsZXM6IHt9LFxuICAgIHVzZXJBY3Rpb25NZW51OiBbXSxcbiAgICBxdWlja0FjdGlvbnM6IFtdLFxuICAgIG1heFRhYnM6IDBcbn07XG5cbmxldCBpbnRlcm5hbFN0YXRlOiBOYXZpZ2F0aW9uID0gZGVlcENsb25lKGluaXRpYWxTdGF0ZSk7XG5cbmxldCBjYWNoZSQ6IE9ic2VydmFibGU8YW55PiA9IG51bGw7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25TdG9yZSBpbXBsZW1lbnRzIFN0YXRlU3RvcmUge1xuXG4gICAgLyoqXG4gICAgICogUHVibGljIGxvbmctbGl2ZWQgb2JzZXJ2YWJsZSBzdHJlYW1zXG4gICAgICovXG4gICAgdGFicyQ6IE9ic2VydmFibGU8c3RyaW5nW10+O1xuICAgIGdyb3VwZWRUYWJzJDogT2JzZXJ2YWJsZTxHcm91cGVkVGFiW10+O1xuICAgIG1vZHVsZXMkOiBPYnNlcnZhYmxlPE5hdmJhck1vZHVsZU1hcD47XG4gICAgdXNlckFjdGlvbk1lbnUkOiBPYnNlcnZhYmxlPFVzZXJBY3Rpb25NZW51W10+O1xuICAgIG1heFRhYnMkOiBPYnNlcnZhYmxlPG51bWJlcj47XG4gICAgcXVpY2tBY3Rpb25zJDogT2JzZXJ2YWJsZTxNb2R1bGVBY3Rpb25bXT47XG5cbiAgICAvKipcbiAgICAgKiBWaWV3TW9kZWwgdGhhdCByZXNvbHZlcyBvbmNlIGFsbCB0aGUgZGF0YSBpcyByZWFkeSAob3IgdXBkYXRlZCkuLi5cbiAgICAgKi9cbiAgICB2bSQ6IE9ic2VydmFibGU8TmF2aWdhdGlvbj47XG5cbiAgICBwcm90ZWN0ZWQgc3RvcmUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE5hdmlnYXRpb24+KGludGVybmFsU3RhdGUpO1xuICAgIHByb3RlY3RlZCBzdGF0ZSQgPSB0aGlzLnN0b3JlLmFzT2JzZXJ2YWJsZSgpO1xuICAgIHByb3RlY3RlZCByZXNvdXJjZU5hbWUgPSAnbmF2YmFyJztcbiAgICBwcm90ZWN0ZWQgZmllbGRzTWV0YWRhdGEgPSB7XG4gICAgICAgIGZpZWxkczogW1xuICAgICAgICAgICAgJ3RhYnMnLFxuICAgICAgICAgICAgJ2dyb3VwZWRUYWJzJyxcbiAgICAgICAgICAgICdtb2R1bGVzJyxcbiAgICAgICAgICAgICd1c2VyQWN0aW9uTWVudScsXG4gICAgICAgICAgICAnbWF4VGFicydcbiAgICAgICAgXVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlY29yZEdRTDogRW50aXR5R1FMKSB7XG5cbiAgICAgICAgdGhpcy50YWJzJCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLnRhYnMpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgICAgICAgdGhpcy5ncm91cGVkVGFicyQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5ncm91cGVkVGFicyksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICAgICAgICB0aGlzLm1vZHVsZXMkID0gdGhpcy5zdGF0ZSQucGlwZShtYXAoc3RhdGUgPT4gc3RhdGUubW9kdWxlcyksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICAgICAgICB0aGlzLnVzZXJBY3Rpb25NZW51JCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLnVzZXJBY3Rpb25NZW51KSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMubWF4VGFicyQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5tYXhUYWJzKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMucXVpY2tBY3Rpb25zJCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLnF1aWNrQWN0aW9ucyksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuXG5cbiAgICAgICAgdGhpcy52bSQgPSB0aGlzLnRhYnMkLnBpcGUoXG4gICAgICAgICAgICAgICAgY29tYmluZUxhdGVzdFdpdGgodGhpcy5ncm91cGVkVGFicyQsIHRoaXMubW9kdWxlcyQsIHRoaXMudXNlckFjdGlvbk1lbnUkLCB0aGlzLm1heFRhYnMkLCAgdGhpcy5xdWlja0FjdGlvbnMkKSxcbiAgICAgICAgICAgICAgICBtYXAoKFt0YWJzLCBncm91cGVkVGFicywgbW9kdWxlcywgdXNlckFjdGlvbk1lbnUsIG1heFRhYnMsIHF1aWNrQWN0aW9uc10pID0+ICh7XG4gICAgICAgICAgICAgICAgICAgIHRhYnMsIGdyb3VwZWRUYWJzLCBtb2R1bGVzLCB1c2VyQWN0aW9uTWVudSwgbWF4VGFicywgcXVpY2tBY3Rpb25zXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUHVibGljIEFwaVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgc3RhdGVcbiAgICAgKi9cbiAgICBwdWJsaWMgY2xlYXIoKTogdm9pZCB7XG4gICAgICAgIGNhY2hlJCA9IG51bGw7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoZGVlcENsb25lKGluaXRpYWxTdGF0ZSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhckF1dGhCYXNlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWwgTmF2aWdhdGlvbiBsb2FkIGlmIG5vdCBjYWNoZWQgYW5kIHVwZGF0ZSBzdGF0ZS5cbiAgICAgKiBSZXR1cm5zIG9ic2VydmFibGUgdG8gYmUgdXNlZCBpbiByZXNvbHZlciBpZiBuZWVkZWRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt7fX0gT2JzZXJ2YWJsZTxhbnk+XG4gICAgICovXG4gICAgcHVibGljIGxvYWQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgICAgICByZXR1cm4gdGhpcy5nZXROYXZpZ2F0aW9uKCkucGlwZShcbiAgICAgICAgICAgIHRhcChuYXZpZ2F0aW9uID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgLi4uaW50ZXJuYWxTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgdGFiczogbmF2aWdhdGlvbi50YWJzLFxuICAgICAgICAgICAgICAgICAgICBncm91cGVkVGFiczogbmF2aWdhdGlvbi5ncm91cGVkVGFicyxcbiAgICAgICAgICAgICAgICAgICAgdXNlckFjdGlvbk1lbnU6IG5hdmlnYXRpb24udXNlckFjdGlvbk1lbnUsXG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZXM6IG5hdmlnYXRpb24ubW9kdWxlcyxcbiAgICAgICAgICAgICAgICAgICAgbWF4VGFiczogbmF2aWdhdGlvbi5tYXhUYWJzLFxuICAgICAgICAgICAgICAgICAgICBxdWlja0FjdGlvbnM6IG5hdmlnYXRpb24/LnF1aWNrQWN0aW9ucyA/PyBbXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBsb2FkZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgaXNDYWNoZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBjYWNoZSQgIT09IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHByZS1sb2FkZWQgbmF2aWdhdGlvbiBhbmQgY2FjaGVcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0KG5hdmlnYXRpb246IE5hdmlnYXRpb24pOiB2b2lkIHtcbiAgICAgICAgY2FjaGUkID0gb2YobmF2aWdhdGlvbikucGlwZShzaGFyZVJlcGxheSgxKSk7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgICAgICAgLi4uaW50ZXJuYWxTdGF0ZSxcbiAgICAgICAgICAgIHRhYnM6IG5hdmlnYXRpb24udGFicyxcbiAgICAgICAgICAgIGdyb3VwZWRUYWJzOiBuYXZpZ2F0aW9uLmdyb3VwZWRUYWJzLFxuICAgICAgICAgICAgdXNlckFjdGlvbk1lbnU6IG5hdmlnYXRpb24udXNlckFjdGlvbk1lbnUsXG4gICAgICAgICAgICBtb2R1bGVzOiBuYXZpZ2F0aW9uLm1vZHVsZXMsXG4gICAgICAgICAgICBtYXhUYWJzOiBuYXZpZ2F0aW9uLm1heFRhYnMsXG4gICAgICAgICAgICBxdWlja0FjdGlvbnM6IG5hdmlnYXRpb24/LnF1aWNrQWN0aW9ucyA/PyBbXVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBBUElcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgc3RhdGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7e319IHN0YXRlIHRvIHNldFxuICAgICAqL1xuICAgIHByb3RlY3RlZCB1cGRhdGVTdGF0ZShzdGF0ZTogTmF2aWdhdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLnN0b3JlLm5leHQoaW50ZXJuYWxTdGF0ZSA9IHN0YXRlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgTmF2aWdhdGlvbiBjYWNoZWQgT2JzZXJ2YWJsZSBvciBjYWxsIHRoZSBiYWNrZW5kXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7e319IE9ic2VydmFibGU8YW55PlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXROYXZpZ2F0aW9uKCk6IE9ic2VydmFibGU8YW55PiB7XG5cbiAgICAgICAgY29uc3QgdXNlciA9ICcxJztcblxuICAgICAgICBpZiAoY2FjaGUkID09PSBudWxsKSB7XG4gICAgICAgICAgICBjYWNoZSQgPSB0aGlzLmZldGNoKHVzZXIpLnBpcGUoXG4gICAgICAgICAgICAgICAgc2hhcmVSZXBsYXkoMSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2FjaGUkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZldGNoIHRoZSBOYXZpZ2F0aW9uIGZyb20gdGhlIGJhY2tlbmRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VySWQgdG8gdXNlXG4gICAgICogQHJldHVybnMge3t9fSBPYnNlcnZhYmxlPGFueT5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZmV0Y2godXNlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWNvcmRHUUxcbiAgICAgICAgICAgIC5mZXRjaCh0aGlzLnJlc291cmNlTmFtZSwgYC9hcGkvbmF2YmFycy8ke3VzZXJJZH1gLCB0aGlzLmZpZWxkc01ldGFkYXRhKVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgbWFwKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5hdmlnYXRpb246IE5hdmlnYXRpb24gPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhICYmIGRhdGEubmF2YmFyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYnM6IGRhdGEubmF2YmFyLnRhYnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBlZFRhYnM6IGRhdGEubmF2YmFyLmdyb3VwZWRUYWJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJBY3Rpb25NZW51OiBkYXRhLm5hdmJhci51c2VyQWN0aW9uTWVudSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGVzOiBkYXRhLm5hdmJhci5tb2R1bGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFRhYnM6IGRhdGEubmF2YmFyLm1heFRhYnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVpY2tBY3Rpb25zIDogZGF0YT8ubmF2YmFyPy5xdWlja0FjdGlvbnMgPz8gW10sXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmF2aWdhdGlvbjtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=