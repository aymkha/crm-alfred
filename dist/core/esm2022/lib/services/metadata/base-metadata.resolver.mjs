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
import { concatAll, map, take, tap, toArray } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../../store/system-config/system-config.store";
import * as i2 from "../../store/language/language.store";
import * as i3 from "../../store/navigation/navigation.store";
import * as i4 from "../../store/user-preference/user-preference.store";
import * as i5 from "../../store/theme-images/theme-images.store";
import * as i6 from "../../store/app-state/app-state.store";
import * as i7 from "../navigation/module-name-mapper/module-name-mapper.service";
import * as i8 from "../message/message.service";
import * as i9 from "../../store/app-metadata/app-metadata.store.service";
import * as i10 from "../auth/auth.service";
class BaseMetadataResolver {
    systemConfigStore;
    languageStore;
    navigationStore;
    userPreferenceStore;
    themeImagesStore;
    appState;
    moduleNameMapper;
    messageService;
    appMetadata;
    auth;
    constructor(systemConfigStore, languageStore, navigationStore, userPreferenceStore, themeImagesStore, appState, moduleNameMapper, messageService, appMetadata, auth) {
        this.systemConfigStore = systemConfigStore;
        this.languageStore = languageStore;
        this.navigationStore = navigationStore;
        this.userPreferenceStore = userPreferenceStore;
        this.themeImagesStore = themeImagesStore;
        this.appState = appState;
        this.moduleNameMapper = moduleNameMapper;
        this.messageService = messageService;
        this.appMetadata = appMetadata;
        this.auth = auth;
    }
    resolve(route) {
        const module = this.calculateActiveModule(route);
        return this.appMetadata.load(module).pipe(tap(() => {
            if (this.auth.isLoggedIn()) {
                setTimeout(() => {
                    this.appMetadata.loadModuleMetadata(module).pipe(take(1)).subscribe();
                }, 0);
            }
        }));
    }
    /**
     * @param route
     */
    sequentialLoad(route) {
        const streams$ = {};
        if (this.isToLoadNavigation(route)) {
            streams$.navigation = this.navigationStore.load();
        }
        if (this.isToLoadConfigs(route)) {
            let configs$ = this.systemConfigStore.load();
            if (this.isToLoadLanguageStrings(route)) {
                const langStrings = this.getLanguagesToLoad(route);
                configs$ = configs$.pipe(map((configs) => {
                    let language = configs.default_language.value;
                    const storedLanguage = this.languageStore.getCurrentLanguage();
                    if (storedLanguage) {
                        language = storedLanguage;
                    }
                    return this.languageStore.load(language, langStrings);
                }), concatAll(), toArray());
            }
            streams$.configs = configs$;
        }
        if (this.isToLoadUserPreferences(route)) {
            streams$.preferences = this.userPreferenceStore.load();
        }
        const parallelStream$ = forkJoin(streams$);
        return parallelStream$.pipe(map((data) => {
            let theme = null;
            if (this.systemConfigStore.getConfigValue('default_theme')) {
                theme = this.systemConfigStore.getConfigValue('default_theme');
            }
            if (this.userPreferenceStore.getUserPreference('user_theme')) {
                theme = this.userPreferenceStore.getUserPreference('user_theme');
            }
            if (this.themeImagesStore.getTheme()) {
                theme = this.themeImagesStore.getTheme();
            }
            if (theme !== null) {
                return this.themeImagesStore.load(theme);
            }
            return data;
        }), concatAll(), toArray(), tap(() => this.appState.setLoaded(true)));
    }
    /**
     * Get Languages to Load
     *
     * @param {{}} route activated
     * @returns {string[]} languages
     */
    getLanguagesToLoad(route) {
        let langStrings = this.languageStore.getAvailableStringsTypes();
        if (this.isToLoadNavigation(route)) {
            return langStrings;
        }
        if (!route.data || !route.data.load) {
            return [];
        }
        if (Array.isArray(route.data.load.languageStrings)) {
            langStrings = route.data.load.languageStrings;
        }
        return langStrings;
    }
    /**
     * Should load language strings. True if navigation is to load
     *
     * @param {{}} route activated
     * @returns {boolean} is to load
     */
    isToLoadLanguageStrings(route) {
        if (this.isToLoadNavigation(route)) {
            return true;
        }
        if (!route.data || !route.data.load) {
            return false;
        }
        return Array.isArray(route.data.load.languageStrings) || route.data.load.languageStrings === true;
    }
    /**
     * Should load navigation. If not set defaults to true
     *
     * @param {{}} route activated
     * @returns {boolean} is to load
     */
    isToLoadConfigs(route) {
        if (!route.data || !route.data.load) {
            return true;
        }
        return route.data.load.configs !== false;
    }
    /**
     * Should load navigation, If not set defaults to true
     *
     * @param {{}} route activated
     * @returns {boolean} is to load
     */
    isToLoadNavigation(route) {
        if (!route.data || !route.data.load) {
            return true;
        }
        return route.data.load.navigation !== false;
    }
    /**
     * Should load user preferences. If not set defaults to true
     *
     * @param {{}} route activated
     * @returns {boolean} is to load
     */
    isToLoadUserPreferences(route) {
        if (!route.data || !route.data.load) {
            return true;
        }
        return route.data.load.preferences !== false;
    }
    addMetadataLoadErrorMessage() {
        let message = this.languageStore.getAppString('LBL_ERROR_FETCHING_METADATA');
        if (!message) {
            message = 'Error occurred while fetching metadata';
        }
        this.messageService.addDangerMessage(message);
    }
    /**
     * Calculate the active module
     *
     * @param {{}} route active
     * @returns {string} active module
     */
    calculateActiveModule(route) {
        let module = route.params.module;
        if (!module) {
            module = route.data.module;
        }
        const rootPath = route?.url[0]?.path ?? '';
        if (!module && rootPath !== '') {
            module = rootPath;
        }
        const parentModuleParam = this.getParentModuleMap()[module] || '';
        const parentModule = route.queryParams[parentModuleParam] || '';
        if (parentModule) {
            module = this.moduleNameMapper.toFrontend(parentModule);
        }
        return module;
    }
    /**
     * Get Parent Module Map
     *
     * @returns {{}} parent module map
     */
    getParentModuleMap() {
        return {
            'merge-records': 'return_module',
            import: 'import_module'
        };
    }
    static ɵfac = function BaseMetadataResolver_Factory(t) { return new (t || BaseMetadataResolver)(i0.ɵɵinject(i1.SystemConfigStore), i0.ɵɵinject(i2.LanguageStore), i0.ɵɵinject(i3.NavigationStore), i0.ɵɵinject(i4.UserPreferenceStore), i0.ɵɵinject(i5.ThemeImagesStore), i0.ɵɵinject(i6.AppStateStore), i0.ɵɵinject(i7.ModuleNameMapper), i0.ɵɵinject(i8.MessageService), i0.ɵɵinject(i9.AppMetadataStore), i0.ɵɵinject(i10.AuthService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: BaseMetadataResolver, factory: BaseMetadataResolver.ɵfac, providedIn: 'root' });
}
export { BaseMetadataResolver };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseMetadataResolver, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: i1.SystemConfigStore }, { type: i2.LanguageStore }, { type: i3.NavigationStore }, { type: i4.UserPreferenceStore }, { type: i5.ThemeImagesStore }, { type: i6.AppStateStore }, { type: i7.ModuleNameMapper }, { type: i8.MessageService }, { type: i9.AppMetadataStore }, { type: i10.AuthService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1tZXRhZGF0YS5yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9zZXJ2aWNlcy9tZXRhZGF0YS9iYXNlLW1ldGFkYXRhLnJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFDLFFBQVEsRUFBYSxNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7O0FBYzFDLE1BQ2Esb0JBQW9CO0lBR2Y7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFWZCxZQUNjLGlCQUFvQyxFQUNwQyxhQUE0QixFQUM1QixlQUFnQyxFQUNoQyxtQkFBd0MsRUFDeEMsZ0JBQWtDLEVBQ2xDLFFBQXVCLEVBQ3ZCLGdCQUFrQyxFQUNsQyxjQUE4QixFQUM5QixXQUE2QixFQUM3QixJQUFpQjtRQVRqQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQUN2QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFDN0IsU0FBSSxHQUFKLElBQUksQ0FBYTtJQUUvQixDQUFDO0lBRUQsT0FB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U3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWN0aXZhdGVkUm91dGVTbmFwc2hvdH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7Y29uY2F0QWxsLCBtYXAsIHRha2UsIHRhcCwgdG9BcnJheX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtmb3JrSm9pbiwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7U3lzdGVtQ29uZmlnU3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL3N5c3RlbS1jb25maWcvc3lzdGVtLWNvbmZpZy5zdG9yZSc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7TmF2aWdhdGlvblN0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9uYXZpZ2F0aW9uL25hdmlnYXRpb24uc3RvcmUnO1xuaW1wb3J0IHtVc2VyUHJlZmVyZW5jZVN0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS91c2VyLXByZWZlcmVuY2UvdXNlci1wcmVmZXJlbmNlLnN0b3JlJztcbmltcG9ydCB7VGhlbWVJbWFnZXNTdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvdGhlbWUtaW1hZ2VzL3RoZW1lLWltYWdlcy5zdG9yZSc7XG5pbXBvcnQge0FwcFN0YXRlU3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL2FwcC1zdGF0ZS9hcHAtc3RhdGUuc3RvcmUnO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSAnLi4vbWVzc2FnZS9tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHtNb2R1bGVOYW1lTWFwcGVyfSBmcm9tICcuLi9uYXZpZ2F0aW9uL21vZHVsZS1uYW1lLW1hcHBlci9tb2R1bGUtbmFtZS1tYXBwZXIuc2VydmljZSc7XG5pbXBvcnQge0FwcE1ldGFkYXRhU3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL2FwcC1tZXRhZGF0YS9hcHAtbWV0YWRhdGEuc3RvcmUuc2VydmljZSc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi9hdXRoL2F1dGguc2VydmljZSc7XG5cblxuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgQmFzZU1ldGFkYXRhUmVzb2x2ZXIgIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgc3lzdGVtQ29uZmlnU3RvcmU6IFN5c3RlbUNvbmZpZ1N0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2VTdG9yZTogTGFuZ3VhZ2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIG5hdmlnYXRpb25TdG9yZTogTmF2aWdhdGlvblN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgdXNlclByZWZlcmVuY2VTdG9yZTogVXNlclByZWZlcmVuY2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHRoZW1lSW1hZ2VzU3RvcmU6IFRoZW1lSW1hZ2VzU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBhcHBTdGF0ZTogQXBwU3RhdGVTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIG1vZHVsZU5hbWVNYXBwZXI6IE1vZHVsZU5hbWVNYXBwZXIsXG4gICAgICAgIHByb3RlY3RlZCBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBhcHBNZXRhZGF0YTogQXBwTWV0YWRhdGFTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGF1dGg6IEF1dGhTZXJ2aWNlXG4gICAgKSB7XG4gICAgfVxuXG4gICAgcmVzb2x2ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IHRoaXMuY2FsY3VsYXRlQWN0aXZlTW9kdWxlKHJvdXRlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwTWV0YWRhdGEubG9hZChtb2R1bGUpLnBpcGUoXG4gICAgICAgICAgICB0YXAoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmF1dGguaXNMb2dnZWRJbigpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBNZXRhZGF0YS5sb2FkTW9kdWxlTWV0YWRhdGEobW9kdWxlKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICB9LCAwKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHJvdXRlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHNlcXVlbnRpYWxMb2FkKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KSB7XG4gICAgICAgIGNvbnN0IHN0cmVhbXMkOiB7IFtrZXk6IHN0cmluZ106IE9ic2VydmFibGU8YW55PiB9ID0ge307XG5cbiAgICAgICAgaWYgKHRoaXMuaXNUb0xvYWROYXZpZ2F0aW9uKHJvdXRlKSkge1xuICAgICAgICAgICAgc3RyZWFtcyQubmF2aWdhdGlvbiA9IHRoaXMubmF2aWdhdGlvblN0b3JlLmxvYWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzVG9Mb2FkQ29uZmlncyhyb3V0ZSkpIHtcblxuICAgICAgICAgICAgbGV0IGNvbmZpZ3MkID0gdGhpcy5zeXN0ZW1Db25maWdTdG9yZS5sb2FkKCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmlzVG9Mb2FkTGFuZ3VhZ2VTdHJpbmdzKHJvdXRlKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhbmdTdHJpbmdzID0gdGhpcy5nZXRMYW5ndWFnZXNUb0xvYWQocm91dGUpO1xuXG4gICAgICAgICAgICAgICAgY29uZmlncyQgPSBjb25maWdzJC5waXBlKFxuICAgICAgICAgICAgICAgICAgICBtYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAoY29uZmlnczogYW55KSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGFuZ3VhZ2UgPSBjb25maWdzLmRlZmF1bHRfbGFuZ3VhZ2UudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RvcmVkTGFuZ3VhZ2UgPSB0aGlzLmxhbmd1YWdlU3RvcmUuZ2V0Q3VycmVudExhbmd1YWdlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RvcmVkTGFuZ3VhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2UgPSBzdG9yZWRMYW5ndWFnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sYW5ndWFnZVN0b3JlLmxvYWQobGFuZ3VhZ2UsIGxhbmdTdHJpbmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIGNvbmNhdEFsbCgpLFxuICAgICAgICAgICAgICAgICAgICB0b0FycmF5KClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdHJlYW1zJC5jb25maWdzID0gY29uZmlncyQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc1RvTG9hZFVzZXJQcmVmZXJlbmNlcyhyb3V0ZSkpIHtcblxuICAgICAgICAgICAgc3RyZWFtcyQucHJlZmVyZW5jZXMgPSB0aGlzLnVzZXJQcmVmZXJlbmNlU3RvcmUubG9hZCgpO1xuICAgICAgICB9XG5cblxuICAgICAgICBjb25zdCBwYXJhbGxlbFN0cmVhbSQgPSBmb3JrSm9pbihzdHJlYW1zJCk7XG5cbiAgICAgICAgcmV0dXJuIHBhcmFsbGVsU3RyZWFtJC5waXBlKFxuICAgICAgICAgICAgbWFwKChkYXRhOiBhbnkpID0+IHtcblxuICAgICAgICAgICAgICAgIGxldCB0aGVtZSA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zeXN0ZW1Db25maWdTdG9yZS5nZXRDb25maWdWYWx1ZSgnZGVmYXVsdF90aGVtZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoZW1lID0gdGhpcy5zeXN0ZW1Db25maWdTdG9yZS5nZXRDb25maWdWYWx1ZSgnZGVmYXVsdF90aGVtZScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVzZXJQcmVmZXJlbmNlU3RvcmUuZ2V0VXNlclByZWZlcmVuY2UoJ3VzZXJfdGhlbWUnKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGVtZSA9IHRoaXMudXNlclByZWZlcmVuY2VTdG9yZS5nZXRVc2VyUHJlZmVyZW5jZSgndXNlcl90aGVtZScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRoZW1lSW1hZ2VzU3RvcmUuZ2V0VGhlbWUoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGVtZSA9IHRoaXMudGhlbWVJbWFnZXNTdG9yZS5nZXRUaGVtZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGVtZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50aGVtZUltYWdlc1N0b3JlLmxvYWQodGhlbWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBjb25jYXRBbGwoKSxcbiAgICAgICAgICAgIHRvQXJyYXkoKSxcbiAgICAgICAgICAgIHRhcCgoKSA9PiB0aGlzLmFwcFN0YXRlLnNldExvYWRlZCh0cnVlKSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgTGFuZ3VhZ2VzIHRvIExvYWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7e319IHJvdXRlIGFjdGl2YXRlZFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmdbXX0gbGFuZ3VhZ2VzXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldExhbmd1YWdlc1RvTG9hZChyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IHN0cmluZ1tdIHtcbiAgICAgICAgbGV0IGxhbmdTdHJpbmdzOiBzdHJpbmdbXSA9IHRoaXMubGFuZ3VhZ2VTdG9yZS5nZXRBdmFpbGFibGVTdHJpbmdzVHlwZXMoKTtcblxuICAgICAgICBpZiAodGhpcy5pc1RvTG9hZE5hdmlnYXRpb24ocm91dGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gbGFuZ1N0cmluZ3M7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJvdXRlLmRhdGEgfHwgIXJvdXRlLmRhdGEubG9hZCkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocm91dGUuZGF0YS5sb2FkLmxhbmd1YWdlU3RyaW5ncykpIHtcbiAgICAgICAgICAgIGxhbmdTdHJpbmdzID0gcm91dGUuZGF0YS5sb2FkLmxhbmd1YWdlU3RyaW5ncztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsYW5nU3RyaW5ncztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG91bGQgbG9hZCBsYW5ndWFnZSBzdHJpbmdzLiBUcnVlIGlmIG5hdmlnYXRpb24gaXMgdG8gbG9hZFxuICAgICAqXG4gICAgICogQHBhcmFtIHt7fX0gcm91dGUgYWN0aXZhdGVkXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IGlzIHRvIGxvYWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaXNUb0xvYWRMYW5ndWFnZVN0cmluZ3Mocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuIHtcblxuICAgICAgICBpZiAodGhpcy5pc1RvTG9hZE5hdmlnYXRpb24ocm91dGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcm91dGUuZGF0YSB8fCAhcm91dGUuZGF0YS5sb2FkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShyb3V0ZS5kYXRhLmxvYWQubGFuZ3VhZ2VTdHJpbmdzKSB8fCByb3V0ZS5kYXRhLmxvYWQubGFuZ3VhZ2VTdHJpbmdzID09PSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3VsZCBsb2FkIG5hdmlnYXRpb24uIElmIG5vdCBzZXQgZGVmYXVsdHMgdG8gdHJ1ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHt7fX0gcm91dGUgYWN0aXZhdGVkXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IGlzIHRvIGxvYWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaXNUb0xvYWRDb25maWdzKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghcm91dGUuZGF0YSB8fCAhcm91dGUuZGF0YS5sb2FkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByb3V0ZS5kYXRhLmxvYWQuY29uZmlncyAhPT0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvdWxkIGxvYWQgbmF2aWdhdGlvbiwgSWYgbm90IHNldCBkZWZhdWx0cyB0byB0cnVlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3t9fSByb3V0ZSBhY3RpdmF0ZWRcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gaXMgdG8gbG9hZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBpc1RvTG9hZE5hdmlnYXRpb24ocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCFyb3V0ZS5kYXRhIHx8ICFyb3V0ZS5kYXRhLmxvYWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJvdXRlLmRhdGEubG9hZC5uYXZpZ2F0aW9uICE9PSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG91bGQgbG9hZCB1c2VyIHByZWZlcmVuY2VzLiBJZiBub3Qgc2V0IGRlZmF1bHRzIHRvIHRydWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7e319IHJvdXRlIGFjdGl2YXRlZFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBpcyB0byBsb2FkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGlzVG9Mb2FkVXNlclByZWZlcmVuY2VzKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghcm91dGUuZGF0YSB8fCAhcm91dGUuZGF0YS5sb2FkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByb3V0ZS5kYXRhLmxvYWQucHJlZmVyZW5jZXMgIT09IGZhbHNlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhZGRNZXRhZGF0YUxvYWRFcnJvck1lc3NhZ2UoKTogdm9pZCB7XG4gICAgICAgIGxldCBtZXNzYWdlID0gdGhpcy5sYW5ndWFnZVN0b3JlLmdldEFwcFN0cmluZygnTEJMX0VSUk9SX0ZFVENISU5HX01FVEFEQVRBJyk7XG5cbiAgICAgICAgaWYgKCFtZXNzYWdlKSB7XG4gICAgICAgICAgICBtZXNzYWdlID0gJ0Vycm9yIG9jY3VycmVkIHdoaWxlIGZldGNoaW5nIG1ldGFkYXRhJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkRGFuZ2VyTWVzc2FnZShtZXNzYWdlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGUgdGhlIGFjdGl2ZSBtb2R1bGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7e319IHJvdXRlIGFjdGl2ZVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IGFjdGl2ZSBtb2R1bGVcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgY2FsY3VsYXRlQWN0aXZlTW9kdWxlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogc3RyaW5nIHtcblxuICAgICAgICBsZXQgbW9kdWxlID0gcm91dGUucGFyYW1zLm1vZHVsZTtcblxuICAgICAgICBpZiAoIW1vZHVsZSkge1xuICAgICAgICAgICAgbW9kdWxlID0gcm91dGUuZGF0YS5tb2R1bGU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByb290UGF0aCA9IHJvdXRlPy51cmxbMF0/LnBhdGggPz8gJyc7XG4gICAgICAgIGlmICghbW9kdWxlICYmIHJvb3RQYXRoICE9PSAnJykge1xuICAgICAgICAgICAgbW9kdWxlID0gcm9vdFBhdGg7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXJlbnRNb2R1bGVQYXJhbSA9IHRoaXMuZ2V0UGFyZW50TW9kdWxlTWFwKClbbW9kdWxlXSB8fCAnJztcbiAgICAgICAgY29uc3QgcGFyZW50TW9kdWxlID0gcm91dGUucXVlcnlQYXJhbXNbcGFyZW50TW9kdWxlUGFyYW1dIHx8ICcnO1xuXG4gICAgICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcbiAgICAgICAgICAgIG1vZHVsZSA9IHRoaXMubW9kdWxlTmFtZU1hcHBlci50b0Zyb250ZW5kKHBhcmVudE1vZHVsZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1vZHVsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgUGFyZW50IE1vZHVsZSBNYXBcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt7fX0gcGFyZW50IG1vZHVsZSBtYXBcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0UGFyZW50TW9kdWxlTWFwKCk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ21lcmdlLXJlY29yZHMnOiAncmV0dXJuX21vZHVsZScsXG4gICAgICAgICAgICBpbXBvcnQ6ICdpbXBvcnRfbW9kdWxlJ1xuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==