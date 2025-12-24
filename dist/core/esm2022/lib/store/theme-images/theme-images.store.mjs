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
import { BehaviorSubject, of } from 'rxjs';
import { distinctUntilChanged, map, shareReplay, tap } from 'rxjs/operators';
import { deepClone, emptyObject } from 'common';
import * as i0 from "@angular/core";
import * as i1 from "../../services/api/graphql-api/api.entity.get";
import * as i2 from "../app-state/app-state.store";
import * as i3 from "angular-svg-icon";
const initialState = {
    theme: null,
    images: {}
};
let internalState = deepClone(initialState);
let cachedTheme = null;
let cache$ = null;
class ThemeImagesStore {
    recordGQL;
    appStateStore;
    iconRegistry;
    /**
     * Public long-lived observable streams
     */
    images$;
    store = new BehaviorSubject(internalState);
    state$ = this.store.asObservable();
    resourceName = 'themeImages';
    frontendName = 'theme-images';
    fieldsMetadata = {
        fields: [
            'id',
            '_id',
            'items'
        ]
    };
    constructor(recordGQL, appStateStore, iconRegistry) {
        this.recordGQL = recordGQL;
        this.appStateStore = appStateStore;
        this.iconRegistry = iconRegistry;
        this.images$ = this.state$.pipe(map(state => state.images), distinctUntilChanged());
    }
    /**
     * Public Api
     */
    /**
     * Clear state
     */
    clear() {
        cachedTheme = null;
        cache$ = null;
        this.updateState(deepClone(initialState));
    }
    clearAuthBased() {
    }
    /**
     * Change the current theme
     *
     * @param {string} theme to set
     */
    changeTheme(theme) {
        this.appStateStore.updateLoading('change-theme', true);
        this.load(theme).pipe(tap(() => this.appStateStore.updateLoading('change-theme', false))).subscribe();
    }
    /**
     * Returns the currently active image theme
     *
     * @returns {string} the theme
     */
    getTheme() {
        return internalState.theme;
    }
    /**
     * Initial ThemeImages load if not cached and update state.
     * Returns observable to be used in resolver if needed
     *
     * @param {string} theme to load
     * @returns {object} Observable<any>
     */
    load(theme) {
        return this.getThemeImages(theme).pipe(tap(images => {
            this.updateState({ ...internalState, images, theme });
        }));
    }
    /**
     * Check if loaded
     */
    isCached() {
        return cache$ !== null;
    }
    /**
     * Set pre-loaded theme images and cache
     */
    set(theme, images) {
        cachedTheme = theme;
        this.registerSvgs(images);
        cache$ = of(images).pipe(shareReplay(1));
        this.updateState({ ...internalState, images });
    }
    /**
     * Internal API
     */
    /**
     * Update the state
     *
     * @param {object} state to set
     */
    updateState(state) {
        this.store.next(internalState = state);
    }
    /**
     * Get theme images cached Observable or call the backend
     *
     * @param {string} theme to retrieve
     * @returns {object} Observable<any>
     */
    getThemeImages(theme) {
        if (cachedTheme !== theme || cache$ === null) {
            cachedTheme = theme;
            cache$ = this.fetch(theme).pipe(shareReplay(1));
        }
        return cache$;
    }
    registerSvgs(images) {
        Object.keys(images).forEach(key => {
            const image = images[key];
            const content = image['content'] ?? '';
            const name = image['name'] ?? '';
            if (content === '' || name === '') {
                return;
            }
            this.iconRegistry.addSvg(name, content);
        });
    }
    /**
     * Fetch the theme images from the backend
     *
     * @param {string} theme to load
     * @returns {object} Observable<any>
     */
    fetch(theme) {
        return this.recordGQL
            .fetch(this.resourceName, `/api/${this.frontendName}/${theme}`, this.fieldsMetadata)
            .pipe(map(({ data }) => {
            let images = {};
            if (data && data.themeImages) {
                images = data.themeImages.items;
            }
            if (!emptyObject(images)) {
                const parsedImages = {};
                this.registerSvgs(images);
                Object.keys(images).forEach(key => {
                    const { content, ...image } = images[key] ?? {};
                    parsedImages[key] = image;
                });
                return parsedImages;
            }
            return images;
        }));
    }
    static ɵfac = function ThemeImagesStore_Factory(t) { return new (t || ThemeImagesStore)(i0.ɵɵinject(i1.EntityGQL), i0.ɵɵinject(i2.AppStateStore), i0.ɵɵinject(i3.SvgIconRegistryService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ThemeImagesStore, factory: ThemeImagesStore.ɵfac, providedIn: 'root' });
}
export { ThemeImagesStore };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ThemeImagesStore, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.EntityGQL }, { type: i2.AppStateStore }, { type: i3.SvgIconRegistryService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtaW1hZ2VzLnN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3N0b3JlL3RoZW1lLWltYWdlcy90aGVtZS1pbWFnZXMuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGVBQWUsRUFBYyxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFDLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFLM0UsT0FBTyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUMsTUFBTSxRQUFRLENBQUM7Ozs7O0FBbUI5QyxNQUFNLFlBQVksR0FBZ0I7SUFDOUIsS0FBSyxFQUFFLElBQUk7SUFDWCxNQUFNLEVBQUUsRUFBRTtDQUNiLENBQUM7QUFFRixJQUFJLGFBQWEsR0FBZ0IsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBRXpELElBQUksV0FBVyxHQUFHLElBQUksQ0FBQztBQUN2QixJQUFJLE1BQU0sR0FBb0IsSUFBSSxDQUFDO0FBRW5DLE1BR2EsZ0JBQWdCO0lBb0JYO0lBQ0E7SUFDQTtJQXBCZDs7T0FFRztJQUNILE9BQU8sQ0FBNEI7SUFFekIsS0FBSyxHQUFHLElBQUksZUFBZSxDQUFjLGFBQWEsQ0FBQyxDQUFDO0lBQ3hELE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ25DLFlBQVksR0FBRyxhQUFhLENBQUM7SUFDN0IsWUFBWSxHQUFHLGNBQWMsQ0FBQztJQUM5QixjQUFjLEdBQUc7UUFDdkIsTUFBTSxFQUFFO1lBQ0osSUFBSTtZQUNKLEtBQUs7WUFDTCxPQUFPO1NBQ1Y7S0FDSixD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R0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUM5QixDQUFDLENBQUMsQ0FBQztnQkFFSCxPQUFPLFlBQVksQ0FBQzthQUN2QjtZQUVELE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUNMLENBQUM7SUFDVixDQUFDOzBFQXRMUSxnQkFBZ0I7Z0VBQWhCLGdCQUFnQixXQUFoQixnQkFBZ0IsbUJBRmIsTUFBTTs7U0FFVCxnQkFBZ0I7dUZBQWhCLGdCQUFnQjtjQUg1QixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgb2Z9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwLCBzaGFyZVJlcGxheSwgdGFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7RW50aXR5R1FMfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGkvZ3JhcGhxbC1hcGkvYXBpLmVudGl0eS5nZXQnO1xuaW1wb3J0IHtBcHBTdGF0ZVN0b3JlfSBmcm9tICcuLi9hcHAtc3RhdGUvYXBwLXN0YXRlLnN0b3JlJztcbmltcG9ydCB7U3RhdGVTdG9yZX0gZnJvbSAnLi4vc3RhdGUnO1xuaW1wb3J0IHtkZWVwQ2xvbmUsIGVtcHR5T2JqZWN0fSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtTdmdJY29uUmVnaXN0cnlTZXJ2aWNlfSBmcm9tICdhbmd1bGFyLXN2Zy1pY29uJztcblxuZXhwb3J0IGludGVyZmFjZSBUaGVtZUltYWdlIHtcbiAgICBwYXRoOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHR5cGU6IHN0cmluZztcbiAgICBjb250ZW50Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRoZW1lSW1hZ2VzIHtcbiAgICB0aGVtZTogc3RyaW5nO1xuICAgIGltYWdlczogVGhlbWVJbWFnZU1hcDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUaGVtZUltYWdlTWFwIHtcbiAgICBba2V5OiBzdHJpbmddOiBUaGVtZUltYWdlO1xufVxuXG5jb25zdCBpbml0aWFsU3RhdGU6IFRoZW1lSW1hZ2VzID0ge1xuICAgIHRoZW1lOiBudWxsLFxuICAgIGltYWdlczoge31cbn07XG5cbmxldCBpbnRlcm5hbFN0YXRlOiBUaGVtZUltYWdlcyA9IGRlZXBDbG9uZShpbml0aWFsU3RhdGUpO1xuXG5sZXQgY2FjaGVkVGhlbWUgPSBudWxsO1xubGV0IGNhY2hlJDogT2JzZXJ2YWJsZTxhbnk+ID0gbnVsbDtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVGhlbWVJbWFnZXNTdG9yZSBpbXBsZW1lbnRzIFN0YXRlU3RvcmUge1xuXG4gICAgLyoqXG4gICAgICogUHVibGljIGxvbmctbGl2ZWQgb2JzZXJ2YWJsZSBzdHJlYW1zXG4gICAgICovXG4gICAgaW1hZ2VzJDogT2JzZXJ2YWJsZTxUaGVtZUltYWdlTWFwPjtcblxuICAgIHByb3RlY3RlZCBzdG9yZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8VGhlbWVJbWFnZXM+KGludGVybmFsU3RhdGUpO1xuICAgIHByb3RlY3RlZCBzdGF0ZSQgPSB0aGlzLnN0b3JlLmFzT2JzZXJ2YWJsZSgpO1xuICAgIHByb3RlY3RlZCByZXNvdXJjZU5hbWUgPSAndGhlbWVJbWFnZXMnO1xuICAgIHByb3RlY3RlZCBmcm9udGVuZE5hbWUgPSAndGhlbWUtaW1hZ2VzJztcbiAgICBwcm90ZWN0ZWQgZmllbGRzTWV0YWRhdGEgPSB7XG4gICAgICAgIGZpZWxkczogW1xuICAgICAgICAgICAgJ2lkJyxcbiAgICAgICAgICAgICdfaWQnLFxuICAgICAgICAgICAgJ2l0ZW1zJ1xuICAgICAgICBdXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgcmVjb3JkR1FMOiBFbnRpdHlHUUwsXG4gICAgICAgIHByb3RlY3RlZCBhcHBTdGF0ZVN0b3JlOiBBcHBTdGF0ZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgaWNvblJlZ2lzdHJ5OiBTdmdJY29uUmVnaXN0cnlTZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VzJCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLmltYWdlcyksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUHVibGljIEFwaVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgc3RhdGVcbiAgICAgKi9cbiAgICBwdWJsaWMgY2xlYXIoKTogdm9pZCB7XG4gICAgICAgIGNhY2hlZFRoZW1lID0gbnVsbDtcbiAgICAgICAgY2FjaGUkID0gbnVsbDtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShkZWVwQ2xvbmUoaW5pdGlhbFN0YXRlKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyQXV0aEJhc2VkKCk6IHZvaWQge1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB0aGUgY3VycmVudCB0aGVtZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRoZW1lIHRvIHNldFxuICAgICAqL1xuICAgIHB1YmxpYyBjaGFuZ2VUaGVtZSh0aGVtZTogc3RyaW5nKTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy5hcHBTdGF0ZVN0b3JlLnVwZGF0ZUxvYWRpbmcoJ2NoYW5nZS10aGVtZScsIHRydWUpO1xuXG4gICAgICAgIHRoaXMubG9hZCh0aGVtZSkucGlwZShcbiAgICAgICAgICAgIHRhcCgoKSA9PiB0aGlzLmFwcFN0YXRlU3RvcmUudXBkYXRlTG9hZGluZygnY2hhbmdlLXRoZW1lJywgZmFsc2UpKVxuICAgICAgICApLnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnRseSBhY3RpdmUgaW1hZ2UgdGhlbWVcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSB0aGVtZVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRUaGVtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gaW50ZXJuYWxTdGF0ZS50aGVtZTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWwgVGhlbWVJbWFnZXMgbG9hZCBpZiBub3QgY2FjaGVkIGFuZCB1cGRhdGUgc3RhdGUuXG4gICAgICogUmV0dXJucyBvYnNlcnZhYmxlIHRvIGJlIHVzZWQgaW4gcmVzb2x2ZXIgaWYgbmVlZGVkXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGhlbWUgdG8gbG9hZFxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE9ic2VydmFibGU8YW55PlxuICAgICAqL1xuICAgIHB1YmxpYyBsb2FkKHRoZW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgICAgIHJldHVybiB0aGlzLmdldFRoZW1lSW1hZ2VzKHRoZW1lKS5waXBlKFxuICAgICAgICAgICAgdGFwKGltYWdlcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7Li4uaW50ZXJuYWxTdGF0ZSwgaW1hZ2VzLCB0aGVtZX0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBsb2FkZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgaXNDYWNoZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBjYWNoZSQgIT09IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHByZS1sb2FkZWQgdGhlbWUgaW1hZ2VzIGFuZCBjYWNoZVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQodGhlbWU6IHN0cmluZywgaW1hZ2VzOiBUaGVtZUltYWdlTWFwKTogdm9pZCB7XG5cbiAgICAgICAgY2FjaGVkVGhlbWUgPSB0aGVtZTtcbiAgICAgICAgdGhpcy5yZWdpc3RlclN2Z3MoaW1hZ2VzKTtcblxuICAgICAgICBjYWNoZSQgPSBvZihpbWFnZXMpLnBpcGUoc2hhcmVSZXBsYXkoMSkpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHsuLi5pbnRlcm5hbFN0YXRlLCBpbWFnZXN9KTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEludGVybmFsIEFQSVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBzdGF0ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHN0YXRlIHRvIHNldFxuICAgICAqL1xuICAgIHByb3RlY3RlZCB1cGRhdGVTdGF0ZShzdGF0ZTogVGhlbWVJbWFnZXMpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdG9yZS5uZXh0KGludGVybmFsU3RhdGUgPSBzdGF0ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZW1lIGltYWdlcyBjYWNoZWQgT2JzZXJ2YWJsZSBvciBjYWxsIHRoZSBiYWNrZW5kXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGhlbWUgdG8gcmV0cmlldmVcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBPYnNlcnZhYmxlPGFueT5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0VGhlbWVJbWFnZXModGhlbWU6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG5cbiAgICAgICAgaWYgKGNhY2hlZFRoZW1lICE9PSB0aGVtZSB8fCBjYWNoZSQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNhY2hlZFRoZW1lID0gdGhlbWU7XG4gICAgICAgICAgICBjYWNoZSQgPSB0aGlzLmZldGNoKHRoZW1lKS5waXBlKFxuICAgICAgICAgICAgICAgIHNoYXJlUmVwbGF5KDEpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNhY2hlJDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVnaXN0ZXJTdmdzKGltYWdlczogVGhlbWVJbWFnZU1hcCkge1xuICAgICAgICBPYmplY3Qua2V5cyhpbWFnZXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gaW1hZ2VzW2tleV07XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gaW1hZ2VbJ2NvbnRlbnQnXSA/PyAnJztcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBpbWFnZVsnbmFtZSddID8/ICcnO1xuXG4gICAgICAgICAgICBpZiAoY29udGVudCA9PT0gJycgfHwgbmFtZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuaWNvblJlZ2lzdHJ5LmFkZFN2ZyhuYW1lLCBjb250ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmV0Y2ggdGhlIHRoZW1lIGltYWdlcyBmcm9tIHRoZSBiYWNrZW5kXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGhlbWUgdG8gbG9hZFxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE9ic2VydmFibGU8YW55PlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBmZXRjaCh0aGVtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgICAgICByZXR1cm4gdGhpcy5yZWNvcmRHUUxcbiAgICAgICAgICAgIC5mZXRjaCh0aGlzLnJlc291cmNlTmFtZSwgYC9hcGkvJHt0aGlzLmZyb250ZW5kTmFtZX0vJHt0aGVtZX1gLCB0aGlzLmZpZWxkc01ldGFkYXRhKVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgbWFwKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGltYWdlcyA9IHt9O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhICYmIGRhdGEudGhlbWVJbWFnZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlcyA9IGRhdGEudGhlbWVJbWFnZXMuaXRlbXM7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWVtcHR5T2JqZWN0KGltYWdlcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZEltYWdlcyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RlclN2Z3MoaW1hZ2VzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoaW1hZ2VzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qge2NvbnRlbnQsIC4uLmltYWdlfSA9IGltYWdlc1trZXldID8/IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZEltYWdlc1trZXldID0gaW1hZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlZEltYWdlcztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpbWFnZXM7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgfVxufVxuIl19