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
import { catchError, map, shareReplay, tap } from 'rxjs/operators';
import { deepClone, emptyObject } from 'common';
import * as i0 from "@angular/core";
import * as i1 from "../../services/api/graphql-api/api.entity.get";
import * as i2 from "../metadata/metadata.store.service";
import * as i3 from "../language/language.store";
import * as i4 from "../theme-images/theme-images.store";
import * as i5 from "../system-config/system-config.store";
import * as i6 from "../user-preference/user-preference.store";
import * as i7 from "../navigation/navigation.store";
import * as i8 from "../admin-metadata/admin-metadata.store";
const initialState = {
    systemConfig: false,
    userPreferences: false,
    appStrings: false,
    appListStrings: false,
    modStrings: false,
    themeImages: false,
    navigation: false,
    moduleMetadata: false,
    adminMetadata: false
};
let internalState = deepClone(initialState);
let cache$ = null;
class AppMetadataStore {
    recordGQL;
    metadata;
    language;
    themeImages;
    config;
    preferences;
    navigation;
    adminMetadataStore;
    /**
     * Public long-lived observable streams
     */
    metadata$;
    store = new BehaviorSubject(internalState);
    state$ = this.store.asObservable();
    resourceName = 'appMetadata';
    fieldsMetadata = {
        fields: [
            'id',
            '_id',
        ]
    };
    types = [
        'systemConfig',
        'userPreferences',
        'language',
        'themeImages',
        'navigation',
        'moduleMetadata',
        'adminMetadata'
    ];
    constructor(recordGQL, metadata, language, themeImages, config, preferences, navigation, adminMetadataStore) {
        this.recordGQL = recordGQL;
        this.metadata = metadata;
        this.language = language;
        this.themeImages = themeImages;
        this.config = config;
        this.preferences = preferences;
        this.navigation = navigation;
        this.adminMetadataStore = adminMetadataStore;
        this.metadata$ = this.state$;
    }
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
    get() {
        return internalState;
    }
    /**
     * Initial AppMetadata load if not cached and update state.
     *
     * @returns any data
     */
    load(module = 'login', types = [], useCache = true) {
        const notLoaded = this.getNotLoadedTypes();
        useCache = useCache && notLoaded.length < 1;
        if (!types || types.length < 1) {
            types = notLoaded;
            types.push('minimalModuleMetadata');
        }
        return this.getMetadata(module, types, useCache).pipe(tap((metadata) => {
            this.updateState(metadata);
        }));
    }
    /**
     * Initial AppMetadata load if not cached and update state.
     *
     * @returns any data
     */
    loadModuleMetadata(module = 'login', useCache = true) {
        let isLoaded = internalState?.moduleMetadata ?? false;
        useCache = useCache && isLoaded;
        return this.getMetadata(module, ['moduleMetadata'], useCache).pipe(tap((metadata) => {
            this.updateState(metadata);
        }));
    }
    /**
     * Get metadata cached Observable or call the backend
     *
     * @returns {object} Observable<AppMetadataFlags>
     */
    getMetadata(module = 'app', types = [], useCache = true) {
        if (!types || types.length < 1) {
            types = [...this.types];
        }
        if (cache$ == null || useCache !== true) {
            cache$ = this.fetch(module, types).pipe(shareReplay(1));
        }
        return cache$;
    }
    getNotLoadedTypes() {
        const types = [];
        if (!this.isNavigationLoaded()) {
            types.push('navigation');
        }
        if (!this.arePreferencesLoaded()) {
            types.push('userPreferences');
        }
        if (!this.areSystemConfigsLoaded()) {
            types.push('systemConfig');
        }
        if (!this.areAllLanguageStringsLoaded()) {
            types.push('language');
        }
        if (!this.areThemeImagesLoaded()) {
            types.push('themeImages');
        }
        if (!this.isAdminMetadataLoaded()) {
            types.push('adminMetadata');
        }
        return types;
    }
    areAllLanguageStringsLoaded() {
        return this.language.areAllCached();
    }
    arePreferencesLoaded() {
        return this.preferences.isCached();
    }
    areSystemConfigsLoaded() {
        return this.config.isCached();
    }
    areThemeImagesLoaded() {
        return this.themeImages.isCached();
    }
    isNavigationLoaded() {
        return this.navigation.isCached();
    }
    isAdminMetadataLoaded() {
        return !!(internalState.adminMetadata ?? false);
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
     * Fetch the Metadata from the backend
     *
     * @returns {object} Observable<{}>
     */
    fetch(module, types = []) {
        const fieldsToRetrieve = {
            fields: [
                ...this.fieldsMetadata.fields,
                ...types
            ]
        };
        return this.recordGQL.fetch(this.resourceName, `/api/app-metadata/${module}`, fieldsToRetrieve)
            .pipe(catchError(() => {
            return of({});
        }), map(({ data }) => {
            const result = data?.appMetadata;
            const appMetadata = { ...internalState };
            if (emptyObject(result)) {
                return appMetadata;
            }
            this.setConfig(appMetadata, result);
            this.setPreferences(appMetadata, result);
            this.setThemeImages(appMetadata, result);
            this.setNavigation(appMetadata, result);
            this.setLanguages(appMetadata, result);
            this.setModuleMetadata(appMetadata, result);
            this.setAdminMetadata(appMetadata, result);
            return appMetadata;
        }));
    }
    setModuleMetadata(currentMetadata, appMetadata) {
        let moduleMetadata = appMetadata?.moduleMetadata ?? {};
        let metaKey = 'moduleMetadata';
        if (emptyObject(moduleMetadata)) {
            moduleMetadata = appMetadata?.minimalModuleMetadata ?? {};
            metaKey = 'minimalModuleMetadata';
        }
        if (!emptyObject(moduleMetadata)) {
            currentMetadata[metaKey] = true;
            Object.keys(moduleMetadata).forEach(module => {
                const meta = moduleMetadata[module] ?? {};
                if (!emptyObject(meta)) {
                    const parsedMeta = this.metadata.mapMetadata(module, moduleMetadata[module]);
                    if (this.metadata.getModule() !== module) {
                        this.metadata.setModuleMetadata(module, parsedMeta);
                    }
                    else if (!this.metadata.isCached(module)) {
                        this.metadata.set(module, parsedMeta);
                    }
                }
            });
        }
    }
    setLanguages(currentMetadata, appMetadata) {
        const lang = appMetadata?.language ?? {};
        if (!emptyObject(lang)) {
            const languageStrings = {};
            languageStrings.languageKey = lang.id ?? '';
            languageStrings.appStrings = lang?.appStrings?.items ?? {};
            languageStrings.appListStrings = lang?.appListStrings?.items ?? {};
            languageStrings.modStrings = lang?.modStrings?.items ?? {};
            currentMetadata.appStrings = !emptyObject(languageStrings.appStrings);
            currentMetadata.appListStrings = !emptyObject(languageStrings.appListStrings);
            currentMetadata.modStrings = !emptyObject(languageStrings.modStrings);
            this.language.set(languageStrings.languageKey, languageStrings);
        }
    }
    setNavigation(currentMetadata, appMetadata) {
        const navigation = appMetadata?.navigation ?? {};
        if (!emptyObject(navigation)) {
            currentMetadata.navigation = true;
            this.navigation.set(navigation);
        }
    }
    setThemeImages(currentMetadata, appMetadata) {
        const themeImages = appMetadata?.themeImages ?? {};
        const images = themeImages?.items ?? {};
        if (!emptyObject(themeImages) && !emptyObject(images)) {
            currentMetadata.themeImages = true;
            const theme = themeImages.id;
            this.themeImages.set(theme, images);
        }
    }
    setPreferences(currentMetadata, appMetadata) {
        const prefs = appMetadata?.userPreferences ?? {};
        if (!emptyObject(prefs)) {
            currentMetadata.userPreferences = true;
            const userPreferences = this.mapPreferences(prefs);
            this.preferences.set(userPreferences);
        }
    }
    setConfig(currentMetadata, appMetadata) {
        const configs = appMetadata?.systemConfig ?? {};
        if (!emptyObject(configs)) {
            currentMetadata.systemConfig = true;
            this.config.set(configs);
        }
    }
    setAdminMetadata(currentMetadata, appMetadata) {
        const adminMetadata = appMetadata?.adminMetadata ?? {};
        if (!emptyObject(adminMetadata)) {
            currentMetadata.adminMetadata = true;
            this.adminMetadataStore.set(adminMetadata);
        }
    }
    mapPreferences(preferences) {
        const userPreferences = {};
        Object.keys(preferences).forEach((prefKey) => {
            if (!preferences[prefKey].items) {
                return;
            }
            Object.keys(preferences[prefKey].items).forEach(key => {
                userPreferences[key] = preferences[prefKey].items[key];
            });
        });
        return userPreferences;
    }
    static ɵfac = function AppMetadataStore_Factory(t) { return new (t || AppMetadataStore)(i0.ɵɵinject(i1.EntityGQL), i0.ɵɵinject(i2.MetadataStore), i0.ɵɵinject(i3.LanguageStore), i0.ɵɵinject(i4.ThemeImagesStore), i0.ɵɵinject(i5.SystemConfigStore), i0.ɵɵinject(i6.UserPreferenceStore), i0.ɵɵinject(i7.NavigationStore), i0.ɵɵinject(i8.AdminMetadataStore)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AppMetadataStore, factory: AppMetadataStore.ɵfac, providedIn: 'root' });
}
export { AppMetadataStore };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppMetadataStore, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.EntityGQL }, { type: i2.MetadataStore }, { type: i3.LanguageStore }, { type: i4.ThemeImagesStore }, { type: i5.SystemConfigStore }, { type: i6.UserPreferenceStore }, { type: i7.NavigationStore }, { type: i8.AdminMetadataStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLW1ldGFkYXRhLnN0b3JlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc3RvcmUvYXBwLW1ldGFkYXRhL2FwcC1tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxlQUFlLEVBQWMsRUFBRSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRSxPQUFPLEVBQUMsU0FBUyxFQUFFLFdBQVcsRUFBWSxNQUFNLFFBQVEsQ0FBQzs7Ozs7Ozs7OztBQXdDekQsTUFBTSxZQUFZLEdBQXFCO0lBQ25DLFlBQVksRUFBRSxLQUFLO0lBQ25CLGVBQWUsRUFBRSxLQUFLO0lBQ3RCLFVBQVUsRUFBRSxLQUFLO0lBQ2pCLGNBQWMsRUFBRSxLQUFLO0lBQ3JCLFVBQVUsRUFBRSxLQUFLO0lBQ2pCLFdBQVcsRUFBRSxLQUFLO0lBQ2xCLFVBQVUsRUFBRSxLQUFLO0lBQ2pCLGNBQWMsRUFBRSxLQUFLO0lBQ3JCLGFBQWEsRUFBRSxLQUFLO0NBQ3ZCLENBQUM7QUFFRixJQUFJLGFBQWEsR0FBcUIsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBRTlELElBQUksTUFBTSxHQUFpQyxJQUFJLENBQUM7QUFFaEQsTUFHYSxnQkFBZ0I7SUEyQlg7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQWhDZDs7T0FFRztJQUNILFNBQVMsQ0FBK0I7SUFFOUIsS0FBSyxHQUFHLElBQUksZUFBZSxDQUFtQixhQUFhLENBQUMsQ0FBQztJQUM3RCxNQUFNLEdB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LEtBQUssRUFBRTtnQkFDN0IsT0FBTzthQUNWO1lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNsRCxlQUFlLENBQUMsR0FBRyxDQUFDLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMzRCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxlQUFlLENBQUM7SUFDM0IsQ0FBQzswRUFqVVEsZ0JBQWdCO2dFQUFoQixnQkFBZ0IsV0FBaEIsZ0JBQWdCLG1CQUZiLE1BQU07O1NBRVQsZ0JBQWdCO3VGQUFoQixnQkFBZ0I7Y0FINUIsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIG9mfSBmcm9tICdyeGpzJztcbmltcG9ydCB7Y2F0Y2hFcnJvciwgbWFwLCBzaGFyZVJlcGxheSwgdGFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0VudGl0eUdRTH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpL2dyYXBocWwtYXBpL2FwaS5lbnRpdHkuZ2V0JztcbmltcG9ydCB7ZGVlcENsb25lLCBlbXB0eU9iamVjdCwgT2JqZWN0TWFwfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtTdGF0ZVN0b3JlfSBmcm9tICcuLi9zdGF0ZSc7XG5pbXBvcnQge0FwcFN0YXRlU3RvcmV9IGZyb20gJy4uL2FwcC1zdGF0ZS9hcHAtc3RhdGUuc3RvcmUnO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlLCBMYW5ndWFnZVN0cmluZ3N9IGZyb20gJy4uL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7U3lzdGVtQ29uZmlnU3RvcmV9IGZyb20gJy4uL3N5c3RlbS1jb25maWcvc3lzdGVtLWNvbmZpZy5zdG9yZSc7XG5pbXBvcnQge1RoZW1lSW1hZ2VzU3RvcmV9IGZyb20gJy4uL3RoZW1lLWltYWdlcy90aGVtZS1pbWFnZXMuc3RvcmUnO1xuaW1wb3J0IHtVc2VyUHJlZmVyZW5jZU1hcCwgVXNlclByZWZlcmVuY2VTdG9yZX0gZnJvbSAnLi4vdXNlci1wcmVmZXJlbmNlL3VzZXItcHJlZmVyZW5jZS5zdG9yZSc7XG5pbXBvcnQge05hdmlnYXRpb25TdG9yZX0gZnJvbSAnLi4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLnN0b3JlJztcbmltcG9ydCB7TWV0YWRhdGEsIE1ldGFkYXRhTWFwLCBNZXRhZGF0YVN0b3JlfSBmcm9tICcuLi9tZXRhZGF0YS9tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7QXBvbGxvUXVlcnlSZXN1bHR9IGZyb20gJ0BhcG9sbG8vY2xpZW50L2NvcmUnO1xuaW1wb3J0IHtBZG1pbk1ldGFkYXRhU3RvcmV9IGZyb20gJy4uL2FkbWluLW1ldGFkYXRhL2FkbWluLW1ldGFkYXRhLnN0b3JlJztcbmltcG9ydCB7QWRtaW5NZXRhZGF0YX0gZnJvbSAnLi4vYWRtaW4tbWV0YWRhdGEvYWRtaW4tbWV0YWRhdGEubW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFwcE1ldGFkYXRhIHtcbiAgICBsb2FkZWQ/OiBib29sZWFuO1xuICAgIG1vZHVsZU1ldGFkYXRhTG9hZGVkPzogYm9vbGVhbjtcbiAgICBzeXN0ZW1Db25maWc/OiBhbnk7XG4gICAgdXNlclByZWZlcmVuY2VzPzogYW55O1xuICAgIGxhbmd1YWdlPzogYW55O1xuICAgIHRoZW1lSW1hZ2VzPzogYW55O1xuICAgIG5hdmlnYXRpb24/OiBhbnk7XG4gICAgbW9kdWxlTWV0YWRhdGE/OiBNZXRhZGF0YU1hcDtcbiAgICBtaW5pbWFsTW9kdWxlTWV0YWRhdGE/OiBNZXRhZGF0YU1hcDtcbiAgICBhZG1pbk1ldGFkYXRhPzogQWRtaW5NZXRhZGF0YTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcHBNZXRhZGF0YUZsYWdzIHtcbiAgICBzeXN0ZW1Db25maWc/OiBib29sZWFuO1xuICAgIHVzZXJQcmVmZXJlbmNlcz86IGJvb2xlYW47XG4gICAgYXBwU3RyaW5ncz86IGJvb2xlYW47XG4gICAgYXBwTGlzdFN0cmluZ3M/OiBib29sZWFuO1xuICAgIG1vZFN0cmluZ3M/OiBib29sZWFuO1xuICAgIHRoZW1lSW1hZ2VzPzogYm9vbGVhbjtcbiAgICBuYXZpZ2F0aW9uPzogYm9vbGVhbjtcbiAgICBtb2R1bGVNZXRhZGF0YT86IGJvb2xlYW47XG4gICAgbWluaW1hbE1vZHVsZU1ldGFkYXRhPzogYm9vbGVhbjtcbiAgICBhZG1pbk1ldGFkYXRhPzogYm9vbGVhbjtcbn1cblxuXG5jb25zdCBpbml0aWFsU3RhdGU6IEFwcE1ldGFkYXRhRmxhZ3MgPSB7XG4gICAgc3lzdGVtQ29uZmlnOiBmYWxzZSxcbiAgICB1c2VyUHJlZmVyZW5jZXM6IGZhbHNlLFxuICAgIGFwcFN0cmluZ3M6IGZhbHNlLFxuICAgIGFwcExpc3RTdHJpbmdzOiBmYWxzZSxcbiAgICBtb2RTdHJpbmdzOiBmYWxzZSxcbiAgICB0aGVtZUltYWdlczogZmFsc2UsXG4gICAgbmF2aWdhdGlvbjogZmFsc2UsXG4gICAgbW9kdWxlTWV0YWRhdGE6IGZhbHNlLFxuICAgIGFkbWluTWV0YWRhdGE6IGZhbHNlXG59O1xuXG5sZXQgaW50ZXJuYWxTdGF0ZTogQXBwTWV0YWRhdGFGbGFncyA9IGRlZXBDbG9uZShpbml0aWFsU3RhdGUpO1xuXG5sZXQgY2FjaGUkOiBPYnNlcnZhYmxlPEFwcE1ldGFkYXRhRmxhZ3M+ID0gbnVsbDtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXBwTWV0YWRhdGFTdG9yZSBpbXBsZW1lbnRzIFN0YXRlU3RvcmUge1xuXG4gICAgLyoqXG4gICAgICogUHVibGljIGxvbmctbGl2ZWQgb2JzZXJ2YWJsZSBzdHJlYW1zXG4gICAgICovXG4gICAgbWV0YWRhdGEkOiBPYnNlcnZhYmxlPEFwcE1ldGFkYXRhRmxhZ3M+O1xuXG4gICAgcHJvdGVjdGVkIHN0b3JlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxBcHBNZXRhZGF0YUZsYWdzPihpbnRlcm5hbFN0YXRlKTtcbiAgICBwcm90ZWN0ZWQgc3RhdGUkID0gdGhpcy5zdG9yZS5hc09ic2VydmFibGUoKTtcbiAgICBwcm90ZWN0ZWQgcmVzb3VyY2VOYW1lID0gJ2FwcE1ldGFkYXRhJztcbiAgICBwcm90ZWN0ZWQgZmllbGRzTWV0YWRhdGEgPSB7XG4gICAgICAgIGZpZWxkczogW1xuICAgICAgICAgICAgJ2lkJyxcbiAgICAgICAgICAgICdfaWQnLFxuICAgICAgICBdXG4gICAgfTtcbiAgICBwcm90ZWN0ZWQgdHlwZXMgPSBbXG4gICAgICAgICdzeXN0ZW1Db25maWcnLFxuICAgICAgICAndXNlclByZWZlcmVuY2VzJyxcbiAgICAgICAgJ2xhbmd1YWdlJyxcbiAgICAgICAgJ3RoZW1lSW1hZ2VzJyxcbiAgICAgICAgJ25hdmlnYXRpb24nLFxuICAgICAgICAnbW9kdWxlTWV0YWRhdGEnLFxuICAgICAgICAnYWRtaW5NZXRhZGF0YSdcbiAgICBdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCByZWNvcmRHUUw6IEVudGl0eUdRTCxcbiAgICAgICAgcHJvdGVjdGVkIG1ldGFkYXRhOiBNZXRhZGF0YVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCB0aGVtZUltYWdlczogVGhlbWVJbWFnZXNTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGNvbmZpZzogU3lzdGVtQ29uZmlnU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBwcmVmZXJlbmNlczogVXNlclByZWZlcmVuY2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIG5hdmlnYXRpb246IE5hdmlnYXRpb25TdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGFkbWluTWV0YWRhdGFTdG9yZTpBZG1pbk1ldGFkYXRhU3RvcmVcbiAgICApIHtcbiAgICAgICAgdGhpcy5tZXRhZGF0YSQgPSB0aGlzLnN0YXRlJDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBzdGF0ZVxuICAgICAqL1xuICAgIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcbiAgICAgICAgY2FjaGUkID0gbnVsbDtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShkZWVwQ2xvbmUoaW5pdGlhbFN0YXRlKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyQXV0aEJhc2VkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCgpOiBBcHBNZXRhZGF0YUZsYWdzIHtcbiAgICAgICAgcmV0dXJuIGludGVybmFsU3RhdGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbCBBcHBNZXRhZGF0YSBsb2FkIGlmIG5vdCBjYWNoZWQgYW5kIHVwZGF0ZSBzdGF0ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIGFueSBkYXRhXG4gICAgICovXG4gICAgcHVibGljIGxvYWQobW9kdWxlOiBzdHJpbmcgPSAnbG9naW4nLCB0eXBlczogc3RyaW5nW10gPSBbXSwgdXNlQ2FjaGUgPSB0cnVlKTogT2JzZXJ2YWJsZTxBcHBNZXRhZGF0YUZsYWdzPiB7XG5cbiAgICAgICAgY29uc3Qgbm90TG9hZGVkID0gdGhpcy5nZXROb3RMb2FkZWRUeXBlcygpO1xuICAgICAgICB1c2VDYWNoZSA9IHVzZUNhY2hlICYmIG5vdExvYWRlZC5sZW5ndGggPCAxO1xuXG4gICAgICAgIGlmICghdHlwZXMgfHwgdHlwZXMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgdHlwZXMgPSBub3RMb2FkZWQ7XG4gICAgICAgICAgICB0eXBlcy5wdXNoKCdtaW5pbWFsTW9kdWxlTWV0YWRhdGEnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmdldE1ldGFkYXRhKG1vZHVsZSwgdHlwZXMsIHVzZUNhY2hlKS5waXBlKFxuICAgICAgICAgICAgdGFwKChtZXRhZGF0YTogQXBwTWV0YWRhdGFGbGFncykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUobWV0YWRhdGEpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsIEFwcE1ldGFkYXRhIGxvYWQgaWYgbm90IGNhY2hlZCBhbmQgdXBkYXRlIHN0YXRlLlxuICAgICAqXG4gICAgICogQHJldHVybnMgYW55IGRhdGFcbiAgICAgKi9cbiAgICBwdWJsaWMgbG9hZE1vZHVsZU1ldGFkYXRhKG1vZHVsZTogc3RyaW5nID0gJ2xvZ2luJywgdXNlQ2FjaGUgPSB0cnVlKTogT2JzZXJ2YWJsZTxBcHBNZXRhZGF0YUZsYWdzPiB7XG4gICAgICAgIGxldCBpc0xvYWRlZCA9IGludGVybmFsU3RhdGU/Lm1vZHVsZU1ldGFkYXRhID8/IGZhbHNlO1xuXG4gICAgICAgIHVzZUNhY2hlID0gdXNlQ2FjaGUgJiYgaXNMb2FkZWQ7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TWV0YWRhdGEobW9kdWxlLCBbJ21vZHVsZU1ldGFkYXRhJ10sIHVzZUNhY2hlKS5waXBlKFxuICAgICAgICAgICAgdGFwKChtZXRhZGF0YTogQXBwTWV0YWRhdGFGbGFncykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUobWV0YWRhdGEpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgbWV0YWRhdGEgY2FjaGVkIE9ic2VydmFibGUgb3IgY2FsbCB0aGUgYmFja2VuZFxuICAgICAqXG4gICAgICogQHJldHVybnMge29iamVjdH0gT2JzZXJ2YWJsZTxBcHBNZXRhZGF0YUZsYWdzPlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRNZXRhZGF0YShtb2R1bGU6IHN0cmluZyA9ICdhcHAnLCB0eXBlczogc3RyaW5nW10gPSBbXSwgdXNlQ2FjaGUgPSB0cnVlKTogT2JzZXJ2YWJsZTxBcHBNZXRhZGF0YUZsYWdzPiB7XG5cbiAgICAgICAgaWYgKCF0eXBlcyB8fCB0eXBlcy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICB0eXBlcyA9IFsuLi50aGlzLnR5cGVzXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjYWNoZSQgPT0gbnVsbCB8fCB1c2VDYWNoZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgY2FjaGUkID0gdGhpcy5mZXRjaChtb2R1bGUsIHR5cGVzKS5waXBlKFxuICAgICAgICAgICAgICAgIHNoYXJlUmVwbGF5KDEpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNhY2hlJDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0Tm90TG9hZGVkVHlwZXMoKTogc3RyaW5nW10ge1xuICAgICAgICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gICAgICAgIGlmICghdGhpcy5pc05hdmlnYXRpb25Mb2FkZWQoKSkge1xuICAgICAgICAgICAgdHlwZXMucHVzaCgnbmF2aWdhdGlvbicpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuYXJlUHJlZmVyZW5jZXNMb2FkZWQoKSkge1xuICAgICAgICAgICAgdHlwZXMucHVzaCgndXNlclByZWZlcmVuY2VzJylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5hcmVTeXN0ZW1Db25maWdzTG9hZGVkKCkpIHtcbiAgICAgICAgICAgIHR5cGVzLnB1c2goJ3N5c3RlbUNvbmZpZycpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuYXJlQWxsTGFuZ3VhZ2VTdHJpbmdzTG9hZGVkKCkpIHtcbiAgICAgICAgICAgIHR5cGVzLnB1c2goJ2xhbmd1YWdlJylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5hcmVUaGVtZUltYWdlc0xvYWRlZCgpKSB7XG4gICAgICAgICAgICB0eXBlcy5wdXNoKCd0aGVtZUltYWdlcycpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuaXNBZG1pbk1ldGFkYXRhTG9hZGVkKCkpIHtcbiAgICAgICAgICAgIHR5cGVzLnB1c2goJ2FkbWluTWV0YWRhdGEnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0eXBlcztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYXJlQWxsTGFuZ3VhZ2VTdHJpbmdzTG9hZGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5sYW5ndWFnZS5hcmVBbGxDYWNoZWQoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYXJlUHJlZmVyZW5jZXNMb2FkZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnByZWZlcmVuY2VzLmlzQ2FjaGVkKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFyZVN5c3RlbUNvbmZpZ3NMb2FkZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5pc0NhY2hlZCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhcmVUaGVtZUltYWdlc0xvYWRlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGhlbWVJbWFnZXMuaXNDYWNoZWQoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaXNOYXZpZ2F0aW9uTG9hZGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5uYXZpZ2F0aW9uLmlzQ2FjaGVkKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGlzQWRtaW5NZXRhZGF0YUxvYWRlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICEhKGludGVybmFsU3RhdGUuYWRtaW5NZXRhZGF0YSA/PyBmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgQVBJXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHN0YXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gc3RhdGUgdG8gc2V0XG4gICAgICovXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVN0YXRlKHN0YXRlOiBBcHBNZXRhZGF0YUZsYWdzKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RvcmUubmV4dChpbnRlcm5hbFN0YXRlID0gc3RhdGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZldGNoIHRoZSBNZXRhZGF0YSBmcm9tIHRoZSBiYWNrZW5kXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBPYnNlcnZhYmxlPHt9PlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBmZXRjaChtb2R1bGU6IHN0cmluZywgdHlwZXM6IHN0cmluZ1tdID0gW10pOiBPYnNlcnZhYmxlPEFwcE1ldGFkYXRhRmxhZ3M+IHtcbiAgICAgICAgY29uc3QgZmllbGRzVG9SZXRyaWV2ZSA9IHtcbiAgICAgICAgICAgIGZpZWxkczogW1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuZmllbGRzTWV0YWRhdGEuZmllbGRzLFxuICAgICAgICAgICAgICAgIC4uLnR5cGVzXG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVjb3JkR1FMLmZldGNoKHRoaXMucmVzb3VyY2VOYW1lLCBgL2FwaS9hcHAtbWV0YWRhdGEvJHttb2R1bGV9YCwgZmllbGRzVG9SZXRyaWV2ZSlcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2Yoe30gYXMgQXBvbGxvUXVlcnlSZXN1bHQ8YW55Pik7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgbWFwKCh7ZGF0YX0pID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBkYXRhPy5hcHBNZXRhZGF0YSBhcyBBcHBNZXRhZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXBwTWV0YWRhdGEgPSB7Li4uaW50ZXJuYWxTdGF0ZX0gYXMgQXBwTWV0YWRhdGFGbGFncztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVtcHR5T2JqZWN0KHJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhcHBNZXRhZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Q29uZmlnKGFwcE1ldGFkYXRhLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFByZWZlcmVuY2VzKGFwcE1ldGFkYXRhLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFRoZW1lSW1hZ2VzKGFwcE1ldGFkYXRhLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldE5hdmlnYXRpb24oYXBwTWV0YWRhdGEsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0TGFuZ3VhZ2VzKGFwcE1ldGFkYXRhLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldE1vZHVsZU1ldGFkYXRhKGFwcE1ldGFkYXRhLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFkbWluTWV0YWRhdGEoYXBwTWV0YWRhdGEscmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFwcE1ldGFkYXRhO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZXRNb2R1bGVNZXRhZGF0YShjdXJyZW50TWV0YWRhdGE6IEFwcE1ldGFkYXRhRmxhZ3MsIGFwcE1ldGFkYXRhOiBBcHBNZXRhZGF0YSkge1xuICAgICAgICBsZXQgbW9kdWxlTWV0YWRhdGEgPSBhcHBNZXRhZGF0YT8ubW9kdWxlTWV0YWRhdGEgPz8ge307XG4gICAgICAgIGxldCBtZXRhS2V5ID0gJ21vZHVsZU1ldGFkYXRhJztcblxuICAgICAgICBpZiAoZW1wdHlPYmplY3QobW9kdWxlTWV0YWRhdGEpKSB7XG4gICAgICAgICAgICBtb2R1bGVNZXRhZGF0YSA9IGFwcE1ldGFkYXRhPy5taW5pbWFsTW9kdWxlTWV0YWRhdGEgPz8ge307XG4gICAgICAgICAgICBtZXRhS2V5ID0gJ21pbmltYWxNb2R1bGVNZXRhZGF0YSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWVtcHR5T2JqZWN0KG1vZHVsZU1ldGFkYXRhKSkge1xuXG4gICAgICAgICAgICBjdXJyZW50TWV0YWRhdGFbbWV0YUtleV0gPSB0cnVlO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhtb2R1bGVNZXRhZGF0YSkuZm9yRWFjaChtb2R1bGUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1ldGEgPSBtb2R1bGVNZXRhZGF0YVttb2R1bGVdID8/IHt9IGFzIE1ldGFkYXRhO1xuICAgICAgICAgICAgICAgIGlmICghZW1wdHlPYmplY3QobWV0YSkpIHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRNZXRhID0gdGhpcy5tZXRhZGF0YS5tYXBNZXRhZGF0YShtb2R1bGUsIG1vZHVsZU1ldGFkYXRhW21vZHVsZV0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1ldGFkYXRhLmdldE1vZHVsZSgpICE9PSBtb2R1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWV0YWRhdGEuc2V0TW9kdWxlTWV0YWRhdGEobW9kdWxlLCBwYXJzZWRNZXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5tZXRhZGF0YS5pc0NhY2hlZChtb2R1bGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1ldGFkYXRhLnNldChtb2R1bGUsIHBhcnNlZE1ldGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2V0TGFuZ3VhZ2VzKGN1cnJlbnRNZXRhZGF0YTogQXBwTWV0YWRhdGFGbGFncywgYXBwTWV0YWRhdGE6IEFwcE1ldGFkYXRhKSB7XG4gICAgICAgIGNvbnN0IGxhbmcgPSBhcHBNZXRhZGF0YT8ubGFuZ3VhZ2UgPz8ge307XG4gICAgICAgIGlmICghZW1wdHlPYmplY3QobGFuZykpIHtcbiAgICAgICAgICAgIGNvbnN0IGxhbmd1YWdlU3RyaW5ncyA9IHt9IGFzIExhbmd1YWdlU3RyaW5ncztcbiAgICAgICAgICAgIGxhbmd1YWdlU3RyaW5ncy5sYW5ndWFnZUtleSA9IGxhbmcuaWQgPz8gJyc7XG4gICAgICAgICAgICBsYW5ndWFnZVN0cmluZ3MuYXBwU3RyaW5ncyA9IGxhbmc/LmFwcFN0cmluZ3M/Lml0ZW1zID8/IHt9O1xuICAgICAgICAgICAgbGFuZ3VhZ2VTdHJpbmdzLmFwcExpc3RTdHJpbmdzID0gbGFuZz8uYXBwTGlzdFN0cmluZ3M/Lml0ZW1zID8/IHt9O1xuICAgICAgICAgICAgbGFuZ3VhZ2VTdHJpbmdzLm1vZFN0cmluZ3MgPSBsYW5nPy5tb2RTdHJpbmdzPy5pdGVtcyA/PyB7fTtcblxuICAgICAgICAgICAgY3VycmVudE1ldGFkYXRhLmFwcFN0cmluZ3MgPSAhZW1wdHlPYmplY3QobGFuZ3VhZ2VTdHJpbmdzLmFwcFN0cmluZ3MpO1xuICAgICAgICAgICAgY3VycmVudE1ldGFkYXRhLmFwcExpc3RTdHJpbmdzID0gIWVtcHR5T2JqZWN0KGxhbmd1YWdlU3RyaW5ncy5hcHBMaXN0U3RyaW5ncyk7XG4gICAgICAgICAgICBjdXJyZW50TWV0YWRhdGEubW9kU3RyaW5ncyA9ICFlbXB0eU9iamVjdChsYW5ndWFnZVN0cmluZ3MubW9kU3RyaW5ncyk7XG5cbiAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2Uuc2V0KGxhbmd1YWdlU3RyaW5ncy5sYW5ndWFnZUtleSwgbGFuZ3VhZ2VTdHJpbmdzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZXROYXZpZ2F0aW9uKGN1cnJlbnRNZXRhZGF0YTogQXBwTWV0YWRhdGFGbGFncywgYXBwTWV0YWRhdGE6IEFwcE1ldGFkYXRhKSB7XG4gICAgICAgIGNvbnN0IG5hdmlnYXRpb24gPSBhcHBNZXRhZGF0YT8ubmF2aWdhdGlvbiA/PyB7fTtcbiAgICAgICAgaWYgKCFlbXB0eU9iamVjdChuYXZpZ2F0aW9uKSkge1xuICAgICAgICAgICAgY3VycmVudE1ldGFkYXRhLm5hdmlnYXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5uYXZpZ2F0aW9uLnNldChuYXZpZ2F0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZXRUaGVtZUltYWdlcyhjdXJyZW50TWV0YWRhdGE6IEFwcE1ldGFkYXRhRmxhZ3MsIGFwcE1ldGFkYXRhOiBBcHBNZXRhZGF0YSkge1xuICAgICAgICBjb25zdCB0aGVtZUltYWdlcyA9IGFwcE1ldGFkYXRhPy50aGVtZUltYWdlcyA/PyB7fTtcbiAgICAgICAgY29uc3QgaW1hZ2VzID0gdGhlbWVJbWFnZXM/Lml0ZW1zID8/IHt9O1xuICAgICAgICBpZiAoIWVtcHR5T2JqZWN0KHRoZW1lSW1hZ2VzKSAmJiAhZW1wdHlPYmplY3QoaW1hZ2VzKSkge1xuICAgICAgICAgICAgY3VycmVudE1ldGFkYXRhLnRoZW1lSW1hZ2VzID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnN0IHRoZW1lID0gdGhlbWVJbWFnZXMuaWQ7XG4gICAgICAgICAgICB0aGlzLnRoZW1lSW1hZ2VzLnNldCh0aGVtZSwgaW1hZ2VzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZXRQcmVmZXJlbmNlcyhjdXJyZW50TWV0YWRhdGE6IEFwcE1ldGFkYXRhRmxhZ3MsIGFwcE1ldGFkYXRhOiBBcHBNZXRhZGF0YSkge1xuICAgICAgICBjb25zdCBwcmVmcyA9IGFwcE1ldGFkYXRhPy51c2VyUHJlZmVyZW5jZXMgPz8ge307XG4gICAgICAgIGlmICghZW1wdHlPYmplY3QocHJlZnMpKSB7XG4gICAgICAgICAgICBjdXJyZW50TWV0YWRhdGEudXNlclByZWZlcmVuY2VzID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJQcmVmZXJlbmNlcyA9IHRoaXMubWFwUHJlZmVyZW5jZXMocHJlZnMpO1xuICAgICAgICAgICAgdGhpcy5wcmVmZXJlbmNlcy5zZXQodXNlclByZWZlcmVuY2VzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZXRDb25maWcoY3VycmVudE1ldGFkYXRhOiBBcHBNZXRhZGF0YUZsYWdzLCBhcHBNZXRhZGF0YTogQXBwTWV0YWRhdGEpIHtcbiAgICAgICAgY29uc3QgY29uZmlncyA9IGFwcE1ldGFkYXRhPy5zeXN0ZW1Db25maWcgPz8ge307XG4gICAgICAgIGlmICghZW1wdHlPYmplY3QoY29uZmlncykpIHtcbiAgICAgICAgICAgIGN1cnJlbnRNZXRhZGF0YS5zeXN0ZW1Db25maWcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jb25maWcuc2V0KGNvbmZpZ3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldEFkbWluTWV0YWRhdGEoY3VycmVudE1ldGFkYXRhOiBBcHBNZXRhZGF0YUZsYWdzLCBhcHBNZXRhZGF0YTogQXBwTWV0YWRhdGEpIHtcbiAgICAgICAgY29uc3QgYWRtaW5NZXRhZGF0YSA9IGFwcE1ldGFkYXRhPy5hZG1pbk1ldGFkYXRhID8/IHt9O1xuICAgICAgICBpZiAoIWVtcHR5T2JqZWN0KGFkbWluTWV0YWRhdGEpKSB7XG4gICAgICAgICAgICBjdXJyZW50TWV0YWRhdGEuYWRtaW5NZXRhZGF0YSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmFkbWluTWV0YWRhdGFTdG9yZS5zZXQoYWRtaW5NZXRhZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWFwUHJlZmVyZW5jZXMocHJlZmVyZW5jZXM6IGFueSk6IFVzZXJQcmVmZXJlbmNlTWFwIHtcbiAgICAgICAgY29uc3QgdXNlclByZWZlcmVuY2VzOiBVc2VyUHJlZmVyZW5jZU1hcCA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhwcmVmZXJlbmNlcykuZm9yRWFjaCgocHJlZktleSkgPT4ge1xuXG4gICAgICAgICAgICBpZiAoIXByZWZlcmVuY2VzW3ByZWZLZXldLml0ZW1zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhwcmVmZXJlbmNlc1twcmVmS2V5XS5pdGVtcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIHVzZXJQcmVmZXJlbmNlc1trZXldID0gcHJlZmVyZW5jZXNbcHJlZktleV0uaXRlbXNba2V5XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHVzZXJQcmVmZXJlbmNlcztcbiAgICB9XG59XG4iXX0=