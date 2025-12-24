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
import { BehaviorSubject, combineLatestWith, forkJoin, of } from 'rxjs';
import { distinctUntilChanged, first, map, shareReplay, take, tap } from 'rxjs/operators';
import { deepClone, emptyObject } from 'common';
import { isString } from 'lodash-es';
import * as i0 from "@angular/core";
import * as i1 from "../../services/api/graphql-api/api.entity.get";
import * as i2 from "../../services/local-storage/local-storage.service";
import * as i3 from "../../services/process/process.service";
import * as i4 from "../system-config/system-config.store";
const initialState = {
    appStrings: {},
    appListStrings: {},
    modStrings: {},
    languageKey: 'en_us',
    loaded: {},
    hasChanged: false
};
let internalState = deepClone(initialState);
const initialCache = {
    appStrings: {},
    appListStrings: {},
    modStrings: {},
};
let loadedLanguages = {};
let cache = deepClone(initialCache);
class LanguageStore {
    recordGQL;
    localStorage;
    processService;
    configs;
    /**
     * Public long-lived observable streams
     */
    appStrings$;
    appListStrings$;
    modStrings$;
    languageKey$;
    /**
     * ViewModel that resolves once all the data is ready (or updated)...
     */
    vm$;
    store = new BehaviorSubject(internalState);
    state$ = this.store.asObservable();
    config = {
        appStrings: {
            fetch: 'fetchAppStrings',
            resourceName: 'appStrings',
            metadata: {
                fields: [
                    'id',
                    '_id',
                    'items'
                ]
            }
        },
        appListStrings: {
            fetch: 'fetchAppListStrings',
            resourceName: 'appListStrings',
            metadata: {
                fields: [
                    'id',
                    '_id',
                    'items'
                ]
            }
        },
        modStrings: {
            fetch: 'fetchModStrings',
            resourceName: 'modStrings',
            metadata: {
                fields: [
                    'id',
                    '_id',
                    'items'
                ]
            }
        },
    };
    constructor(recordGQL, localStorage, processService, configs) {
        this.recordGQL = recordGQL;
        this.localStorage = localStorage;
        this.processService = processService;
        this.configs = configs;
        this.appStrings$ = this.state$.pipe(map(state => state.appStrings), distinctUntilChanged());
        this.appListStrings$ = this.state$.pipe(map(state => state.appListStrings), distinctUntilChanged());
        this.modStrings$ = this.state$.pipe(map(state => state.modStrings), distinctUntilChanged());
        this.languageKey$ = this.state$.pipe(map(state => state.languageKey), distinctUntilChanged());
        this.vm$ = this.appStrings$
            .pipe(combineLatestWith(this.appListStrings$, this.modStrings$, this.languageKey$), map(([appStrings, appListStrings, modStrings, languageKey]) => ({ appStrings, appListStrings, modStrings, languageKey })));
    }
    /**
     * Public Api
     */
    /**
     * Clear state
     */
    clear() {
        loadedLanguages = {};
        cache = deepClone(initialCache);
        this.updateState(deepClone(initialState));
    }
    clearAuthBased() {
        const keysToClear = ['modStrings', 'appListStrings'];
        keysToClear.forEach(type => {
            if (loadedLanguages && loadedLanguages[type]) {
                delete loadedLanguages[type];
            }
        });
        cache.modStrings = {};
        cache.appListStrings = {};
    }
    /**
     * Update the language strings toe the given language
     *
     * @param {string} languageKey language key
     * @param {boolean} reload
     */
    changeLanguage(languageKey, reload = false) {
        const types = [];
        Object.keys(loadedLanguages).forEach(type => loadedLanguages[type] && types.push(type));
        internalState.hasChanged = true;
        return this.load(languageKey, types, reload).pipe(tap(() => {
            this.localStorage.set('selected_language', languageKey, true);
        }));
    }
    /**
     * Get All languageStrings label by key
     *
     * @returns {object} LanguageStrings
     */
    getLanguageStrings() {
        if (!internalState) {
            return null;
        }
        return {
            appStrings: internalState.appStrings,
            appListStrings: internalState.appListStrings,
            modStrings: internalState.modStrings,
            languageKey: internalState.languageKey
        };
    }
    /**
     * Get AppStrings label by key
     *
     * @param {string} labelKey to fetch
     * @returns {string} label
     */
    getAppString(labelKey) {
        if (!internalState.appStrings || !internalState.appStrings[labelKey]) {
            return null;
        }
        return internalState.appStrings[labelKey];
    }
    /**
     * Get AppListStrings label by key
     *
     * @param {string} labelKey to fetch
     * @returns {string|{}} app strings
     */
    getAppListString(labelKey) {
        if (!internalState.appListStrings || !internalState.appListStrings[labelKey]) {
            return null;
        }
        return internalState.appListStrings[labelKey];
    }
    /**
     * Get ModStrings label by key
     *
     * @param {string} labelKey to fetch
     * @returns {string|{}} mod strings
     */
    getModString(labelKey) {
        if (!internalState.modStrings || !internalState.modStrings[labelKey]) {
            return null;
        }
        return internalState.modStrings[labelKey];
    }
    /**
     * Get field label
     *
     * @param {string} labelKey to fetch
     * @param {string} module to use
     * @param {object} lang to use
     * @returns {string} label
     */
    getFieldLabel(labelKey, module = null, lang = null) {
        let languages = lang;
        if (!lang) {
            languages = this.getLanguageStrings();
        }
        if (!languages || !languages.modStrings || !labelKey) {
            return '';
        }
        let label = '';
        if (module) {
            label = languages.modStrings[module] && languages.modStrings[module][labelKey];
        }
        if (!label) {
            label = languages.appStrings && languages.appStrings[labelKey];
        }
        return label || '';
    }
    /**
     * Get list label
     *
     * @param {string} listKey to fetch
     * @param {string} labelKey to fetch
     * @returns {string} label
     */
    getListLabel(listKey, labelKey) {
        if (!listKey || !labelKey) {
            return '';
        }
        const listStrings = this.getAppListString(listKey);
        if (!listStrings) {
            return '';
        }
        return listStrings[labelKey] || '';
    }
    /**
     * Get all available string types
     *
     * @returns {string[]} string types
     */
    getAvailableStringsTypes() {
        return Object.keys(this.config);
    }
    /**
     * Returns whether the language has changed manually
     *
     * @returns {boolean} has changed
     */
    hasLanguageChanged() {
        return internalState.hasChanged;
    }
    /**
     * Returns the currently active language
     *
     * @returns {string} current language key
     */
    getCurrentLanguage() {
        const storedLanguage = this.localStorage.get('selected_language');
        if (storedLanguage) {
            return storedLanguage;
        }
        return internalState.languageKey ?? 'en_us';
    }
    /**
     * Returns the active language
     *
     * @returns {string} active language key
     */
    getActiveLanguage() {
        return internalState.languageKey ?? '';
    }
    /**
     * Returns the selected language
     *
     * @returns {string} selected language key
     */
    getSelectedLanguage() {
        return this.localStorage.get('selected_language') ?? '';
    }
    /**
     * Check if language is enabled
     * @param currentLanguage
     */
    isLanguageEnabled(currentLanguage) {
        if (!currentLanguage) {
            return false;
        }
        const languages = this.configs.getConfigValue('languages') ?? {};
        const disabled = this.getDisabledLanguages();
        const languageKeys = Object.keys(languages);
        if (!languageKeys.length) {
            return false;
        }
        return languageKeys.includes(currentLanguage) && !disabled.includes(currentLanguage);
    }
    /**
     * Get disabled languages
     */
    getDisabledLanguages() {
        const disabledConfig = this.configs.getConfigValue('disabled_languages') ?? '';
        if (!isString(disabledConfig) || disabledConfig === '') {
            return [];
        }
        return disabledConfig.replace(' ', '').split(',');
    }
    /**
     * Get enabled languages
     */
    getEnabledLanguages() {
        const languages = this.configs.getConfigValue('languages') ?? {};
        const disabled = this.getDisabledLanguages();
        const enabled = {};
        const enabledKeys = Object.keys(languages).filter(value => !disabled.includes(value));
        enabledKeys.forEach(key => {
            enabled[key] = languages[key];
        });
        return enabled;
    }
    /**
     * Get fist language in list
     * @private
     */
    getFirstLanguage() {
        const languages = this.configs.getConfigValue('languages') ?? {};
        const languageKeys = Object.keys(languages);
        return languageKeys.sort()[0] ?? '';
    }
    /**
     * Initial Language Strings Load for given language and types if not cached and update state.
     * Returns observable to be used in resolver if needed
     *
     * @param {string} languageKey to load
     * @param {string[]} types to load
     * @param {boolean} reload
     * @returns {object} Observable
     */
    load(languageKey, types, reload = false) {
        const streams$ = [];
        types.forEach(type => streams$.push(this.getStrings(languageKey, type, reload)));
        return forkJoin(streams$).pipe(first(), tap(result => {
            const stateUpdate = { ...internalState, languageKey };
            types.forEach((type, index) => {
                stateUpdate[type] = result[index];
                loadedLanguages[type] = true;
            });
            this.updateState(stateUpdate);
        }));
    }
    /**
     * Check if loaded
     */
    areAllCached() {
        let isCached = true;
        isCached = isCached && !emptyObject(cache?.appStrings ?? {});
        isCached = isCached && !emptyObject(cache?.appListStrings ?? {});
        isCached = isCached && !emptyObject(cache?.modStrings ?? {});
        return isCached;
    }
    /**
     * Set pre-loaded strings and cache
     */
    set(languageKey, languageStrings) {
        const stateUpdate = { ...internalState, languageKey };
        if (languageStrings.appStrings && !emptyObject(languageStrings.appStrings)) {
            cache['appStrings'][languageKey] = of(languageStrings.appStrings).pipe(shareReplay(1));
            stateUpdate['appStrings'] = languageStrings.appStrings;
            loadedLanguages['appStrings'] = true;
        }
        if (languageStrings.appListStrings && !emptyObject(languageStrings.appListStrings)) {
            cache['appListStrings'][languageKey] = of(languageStrings.appListStrings).pipe(shareReplay(1));
            stateUpdate['appListStrings'] = languageStrings.appListStrings;
            loadedLanguages['appListStrings'] = true;
        }
        if (languageStrings.modStrings && !emptyObject(languageStrings.modStrings)) {
            cache['modStrings'][languageKey] = of(languageStrings.modStrings).pipe(shareReplay(1));
            stateUpdate['modStrings'] = languageStrings.modStrings;
            loadedLanguages['modStrings'] = true;
        }
        this.updateState(stateUpdate);
    }
    /**
     * Set session language
     */
    setSessionLanguage() {
        const processType = 'set-session-language';
        const options = {
            language: internalState.languageKey
        };
        return this.processService.submit(processType, options).pipe(take(1));
    }
    /**
     * Internal API
     */
    /**
     * Update internal state cache and emit from store...
     *
     * @param {{}} state to set
     */
    updateState(state) {
        this.store.next(internalState = state);
    }
    /**
     * Get given $type of strings Observable from cache  or call the backend
     *
     * @param {string} language to load
     * @param {string} type load
     * @param {boolean} reload
     * @returns {object} Observable<any>
     */
    getStrings(language, type, reload = false) {
        const stringsCache = cache[type];
        const fetchMethod = this.config[type].fetch;
        if (stringsCache[language] && reload === false) {
            return stringsCache[language];
        }
        stringsCache[language] = this[fetchMethod](language).pipe(shareReplay(1));
        return stringsCache[language];
    }
    /**
     * Fetch the App strings from the backend
     *
     * @param {string} language to fetch
     * @returns {{}} Observable<{}>
     */
    fetchAppStrings(language) {
        const resourceName = this.config.appStrings.resourceName;
        const fields = this.config.appStrings.metadata;
        return this.recordGQL.fetch(resourceName, `/api/app-strings/${language}`, fields)
            .pipe(map(({ data }) => {
            let items = {};
            if (data.appStrings) {
                items = data.appStrings.items;
            }
            return items;
        }));
    }
    /**
     * Fetch the App list strings from the backend
     *
     * @param {string} language to fetch
     * @returns {{}} Observable<{}>
     */
    fetchAppListStrings(language) {
        const resourceName = this.config.appListStrings.resourceName;
        const fields = this.config.appListStrings.metadata;
        return this.recordGQL.fetch(resourceName, `/api/app-list-strings/${language}`, fields)
            .pipe(map(({ data }) => {
            let items = {};
            if (data.appListStrings) {
                items = data.appListStrings.items;
            }
            return items;
        }));
    }
    /**
     * Fetch the Mod strings from the backend
     *
     * @param {string} language to fetch
     * @returns {{}} Observable<{}>
     */
    fetchModStrings(language) {
        const resourceName = this.config.modStrings.resourceName;
        const fields = this.config.modStrings.metadata;
        return this.recordGQL.fetch(resourceName, `/api/mod-strings/${language}`, fields)
            .pipe(map(({ data }) => {
            let items = {};
            if (data.modStrings) {
                items = data.modStrings.items;
            }
            return items;
        }));
    }
    static ɵfac = function LanguageStore_Factory(t) { return new (t || LanguageStore)(i0.ɵɵinject(i1.EntityGQL), i0.ɵɵinject(i2.LocalStorageService), i0.ɵɵinject(i3.ProcessService), i0.ɵɵinject(i4.SystemConfigStore)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LanguageStore, factory: LanguageStore.ɵfac, providedIn: 'root' });
}
export { LanguageStore };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LanguageStore, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.EntityGQL }, { type: i2.LocalStorageService }, { type: i3.ProcessService }, { type: i4.SystemConfigStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2Uuc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFDLGVBQWUsRUFBaUIsaUJBQWlCLEVBQUUsUUFBUSxFQUFjLEVBQUUsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUNqRyxPQUFPLEVBQUMsb0JBQW9CLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRXhGLE9BQU8sRUFBQyxTQUFTLEVBQUUsV0FBVyxFQUFZLE1BQU0sUUFBUSxDQUFDO0FBS3pELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxXQUFXLENBQUM7Ozs7OztBQW9DbkMsTUFBTSxZQUFZLEdBQWtCO0lBQ2hDLFVBQVUsRUFBRSxFQUFFO0lBQ2QsY0FBYyxFQUFFLEVBQUU7SUFDbEIsVUFBVSxFQUFFLEVBQUU7SUFDZCxXQUFXLEVBQUUsT0FBTztJQUNwQixNQUFNLEVBQUUsRUFBRTtJQUNWLFVBQVUsRUFBRSxLQUFLO0NBQ3BCLENBQUM7QUFFRixJQUFJLGFBQWEsR0FBa0IsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBRTNELE1BQU0sWUFBWSxHQUFrQjtJQUNoQyxVQUFVLEVBQUUsRUFBRTtJQUNkLGNBQWMsRUFBRSxFQUFFO0lBQ2xCLFVBQVUsRUFBRSxFQUFFO0NBQ2pCLENBQUM7QUFFRixJQUFJLGVBQWUsR0FBRyxFQUFFLENBQUM7QUFDekIsSUFBSSxLQUFLLEdBQWtCLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUVuRCxNQUdhLGFBQWE7SUF1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LENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQztRQUN6RCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDL0MsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsb0JBQW9CLFFBQVEsRUFBRSxFQUFFLE1BQU0sQ0FBQzthQUM1RSxJQUFJLENBQ0QsR0FBRyxDQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFFO1lBQ1gsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBRWYsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNqQixLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7YUFDakM7WUFFRCxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FDTCxDQUFDO0lBQ1YsQ0FBQzt1RUFwaUJRLGFBQWE7Z0VBQWIsYUFBYSxXQUFiLGFBQWEsbUJBRlYsTUFBTTs7U0FFVCxhQUFhO3VGQUFiLGFBQWE7Y0FIekIsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgY29tYmluZUxhdGVzdCwgY29tYmluZUxhdGVzdFdpdGgsIGZvcmtKb2luLCBPYnNlcnZhYmxlLCBvZn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2Rpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaXJzdCwgbWFwLCBzaGFyZVJlcGxheSwgdGFrZSwgdGFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0VudGl0eUdRTH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpL2dyYXBocWwtYXBpL2FwaS5lbnRpdHkuZ2V0JztcbmltcG9ydCB7ZGVlcENsb25lLCBlbXB0eU9iamVjdCwgU3RyaW5nTWFwfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtTdGF0ZVN0b3JlfSBmcm9tICcuLi9zdGF0ZSc7XG5pbXBvcnQge0xvY2FsU3RvcmFnZVNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xvY2FsLXN0b3JhZ2UvbG9jYWwtc3RvcmFnZS5zZXJ2aWNlJztcbmltcG9ydCB7UHJvY2VzcywgUHJvY2Vzc1NlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3Byb2Nlc3MvcHJvY2Vzcy5zZXJ2aWNlJztcbmltcG9ydCB7U3lzdGVtQ29uZmlnU3RvcmV9IGZyb20gJy4uL3N5c3RlbS1jb25maWcvc3lzdGVtLWNvbmZpZy5zdG9yZSc7XG5pbXBvcnQge2lzU3RyaW5nfSBmcm9tICdsb2Rhc2gtZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExhbmd1YWdlU3RyaW5nTWFwIHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGFuZ3VhZ2VMaXN0U3RyaW5nTWFwIHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBMYW5ndWFnZVN0cmluZ01hcDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRMYW5ndWFnZVN0cmluZ01hcCB7XG4gICAgW2tleTogc3RyaW5nXTogTGFuZ3VhZ2VTdHJpbmdNYXA7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGFuZ3VhZ2VTdGF0ZSB7XG4gICAgYXBwU3RyaW5nczogTGFuZ3VhZ2VTdHJpbmdNYXA7XG4gICAgYXBwTGlzdFN0cmluZ3M6IExhbmd1YWdlTGlzdFN0cmluZ01hcDtcbiAgICBtb2RTdHJpbmdzOiBMYW5ndWFnZUxpc3RTdHJpbmdNYXA7XG4gICAgbGFuZ3VhZ2VLZXk6IHN0cmluZztcbiAgICBsb2FkZWQ/OiBMb2FkZWRMYW5ndWFnZVN0cmluZ01hcDtcbiAgICBoYXNDaGFuZ2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExhbmd1YWdlU3RyaW5ncyB7XG4gICAgYXBwU3RyaW5nczogTGFuZ3VhZ2VTdHJpbmdNYXA7XG4gICAgYXBwTGlzdFN0cmluZ3M6IExhbmd1YWdlTGlzdFN0cmluZ01hcDtcbiAgICBtb2RTdHJpbmdzOiBMYW5ndWFnZUxpc3RTdHJpbmdNYXA7XG4gICAgbGFuZ3VhZ2VLZXk6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMYW5ndWFnZUNhY2hlIHtcbiAgICBba2V5OiBzdHJpbmddOiB7XG4gICAgICAgIFtrZXk6IHN0cmluZ106IE9ic2VydmFibGU8YW55PjtcbiAgICB9O1xufVxuXG5jb25zdCBpbml0aWFsU3RhdGU6IExhbmd1YWdlU3RhdGUgPSB7XG4gICAgYXBwU3RyaW5nczoge30sXG4gICAgYXBwTGlzdFN0cmluZ3M6IHt9LFxuICAgIG1vZFN0cmluZ3M6IHt9LFxuICAgIGxhbmd1YWdlS2V5OiAnZW5fdXMnLFxuICAgIGxvYWRlZDoge30sXG4gICAgaGFzQ2hhbmdlZDogZmFsc2Vcbn07XG5cbmxldCBpbnRlcm5hbFN0YXRlOiBMYW5ndWFnZVN0YXRlID0gZGVlcENsb25lKGluaXRpYWxTdGF0ZSk7XG5cbmNvbnN0IGluaXRpYWxDYWNoZTogTGFuZ3VhZ2VDYWNoZSA9IHtcbiAgICBhcHBTdHJpbmdzOiB7fSxcbiAgICBhcHBMaXN0U3RyaW5nczoge30sXG4gICAgbW9kU3RyaW5nczoge30sXG59O1xuXG5sZXQgbG9hZGVkTGFuZ3VhZ2VzID0ge307XG5sZXQgY2FjaGU6IExhbmd1YWdlQ2FjaGUgPSBkZWVwQ2xvbmUoaW5pdGlhbENhY2hlKTtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTGFuZ3VhZ2VTdG9yZSBpbXBsZW1lbnRzIFN0YXRlU3RvcmUge1xuXG4gICAgLyoqXG4gICAgICogUHVibGljIGxvbmctbGl2ZWQgb2JzZXJ2YWJsZSBzdHJlYW1zXG4gICAgICovXG4gICAgYXBwU3RyaW5ncyQ6IE9ic2VydmFibGU8TGFuZ3VhZ2VTdHJpbmdNYXA+O1xuICAgIGFwcExpc3RTdHJpbmdzJDogT2JzZXJ2YWJsZTxMYW5ndWFnZUxpc3RTdHJpbmdNYXA+O1xuICAgIG1vZFN0cmluZ3MkOiBPYnNlcnZhYmxlPExhbmd1YWdlTGlzdFN0cmluZ01hcD47XG4gICAgbGFuZ3VhZ2VLZXkkOiBPYnNlcnZhYmxlPHN0cmluZz47XG5cbiAgICAvKipcbiAgICAgKiBWaWV3TW9kZWwgdGhhdCByZXNvbHZlcyBvbmNlIGFsbCB0aGUgZGF0YSBpcyByZWFkeSAob3IgdXBkYXRlZCkuLi5cbiAgICAgKi9cbiAgICB2bSQ6IE9ic2VydmFibGU8TGFuZ3VhZ2VTdHJpbmdzPjtcblxuICAgIHByb3RlY3RlZCBzdG9yZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TGFuZ3VhZ2VTdGF0ZT4oaW50ZXJuYWxTdGF0ZSk7XG4gICAgcHJvdGVjdGVkIHN0YXRlJCA9IHRoaXMuc3RvcmUuYXNPYnNlcnZhYmxlKCk7XG5cbiAgICBwcm90ZWN0ZWQgY29uZmlnID0ge1xuICAgICAgICBhcHBTdHJpbmdzOiB7XG4gICAgICAgICAgICBmZXRjaDogJ2ZldGNoQXBwU3RyaW5ncycsXG4gICAgICAgICAgICByZXNvdXJjZU5hbWU6ICdhcHBTdHJpbmdzJyxcbiAgICAgICAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICAgICAgICAgICdpZCcsXG4gICAgICAgICAgICAgICAgICAgICdfaWQnLFxuICAgICAgICAgICAgICAgICAgICAnaXRlbXMnXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhcHBMaXN0U3RyaW5nczoge1xuICAgICAgICAgICAgZmV0Y2g6ICdmZXRjaEFwcExpc3RTdHJpbmdzJyxcbiAgICAgICAgICAgIHJlc291cmNlTmFtZTogJ2FwcExpc3RTdHJpbmdzJyxcbiAgICAgICAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICAgICAgICAgICdpZCcsXG4gICAgICAgICAgICAgICAgICAgICdfaWQnLFxuICAgICAgICAgICAgICAgICAgICAnaXRlbXMnXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb2RTdHJpbmdzOiB7XG4gICAgICAgICAgICBmZXRjaDogJ2ZldGNoTW9kU3RyaW5ncycsXG4gICAgICAgICAgICByZXNvdXJjZU5hbWU6ICdtb2RTdHJpbmdzJyxcbiAgICAgICAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICAgICAgICAgICdpZCcsXG4gICAgICAgICAgICAgICAgICAgICdfaWQnLFxuICAgICAgICAgICAgICAgICAgICAnaXRlbXMnXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIHJlY29yZEdRTDogRW50aXR5R1FMLFxuICAgICAgICBwcm90ZWN0ZWQgbG9jYWxTdG9yYWdlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgcHJvY2Vzc1NlcnZpY2U6IFByb2Nlc3NTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgY29uZmlnczogU3lzdGVtQ29uZmlnU3RvcmVcbiAgICApIHtcblxuICAgICAgICB0aGlzLmFwcFN0cmluZ3MkID0gdGhpcy5zdGF0ZSQucGlwZShtYXAoc3RhdGUgPT4gc3RhdGUuYXBwU3RyaW5ncyksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICAgICAgICB0aGlzLmFwcExpc3RTdHJpbmdzJCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLmFwcExpc3RTdHJpbmdzKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMubW9kU3RyaW5ncyQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5tb2RTdHJpbmdzKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMubGFuZ3VhZ2VLZXkkID0gdGhpcy5zdGF0ZSQucGlwZShtYXAoc3RhdGUgPT4gc3RhdGUubGFuZ3VhZ2VLZXkpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcblxuICAgICAgICB0aGlzLnZtJCA9IHRoaXMuYXBwU3RyaW5ncyRcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIGNvbWJpbmVMYXRlc3RXaXRoKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcExpc3RTdHJpbmdzJCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RTdHJpbmdzJCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5ndWFnZUtleSRcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIG1hcCgoXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcFN0cmluZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBMaXN0U3RyaW5ncyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZFN0cmluZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZUtleVxuICAgICAgICAgICAgICAgICAgICBdKSA9PiAoe2FwcFN0cmluZ3MsIGFwcExpc3RTdHJpbmdzLCBtb2RTdHJpbmdzLCBsYW5ndWFnZUtleX0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaWMgQXBpXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBzdGF0ZVxuICAgICAqL1xuICAgIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcbiAgICAgICAgbG9hZGVkTGFuZ3VhZ2VzID0ge307XG4gICAgICAgIGNhY2hlID0gZGVlcENsb25lKGluaXRpYWxDYWNoZSk7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoZGVlcENsb25lKGluaXRpYWxTdGF0ZSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhckF1dGhCYXNlZCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qga2V5c1RvQ2xlYXIgPSBbJ21vZFN0cmluZ3MnLCAnYXBwTGlzdFN0cmluZ3MnXTtcblxuICAgICAgICBrZXlzVG9DbGVhci5mb3JFYWNoKHR5cGUgPT4ge1xuICAgICAgICAgICAgaWYgKGxvYWRlZExhbmd1YWdlcyAmJiBsb2FkZWRMYW5ndWFnZXNbdHlwZV0pIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgbG9hZGVkTGFuZ3VhZ2VzW3R5cGVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjYWNoZS5tb2RTdHJpbmdzID0ge307XG4gICAgICAgIGNhY2hlLmFwcExpc3RTdHJpbmdzID0ge307XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBsYW5ndWFnZSBzdHJpbmdzIHRvZSB0aGUgZ2l2ZW4gbGFuZ3VhZ2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZUtleSBsYW5ndWFnZSBrZXlcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlbG9hZFxuICAgICAqL1xuICAgIHB1YmxpYyBjaGFuZ2VMYW5ndWFnZShsYW5ndWFnZUtleTogc3RyaW5nLCByZWxvYWQgPSBmYWxzZSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIGNvbnN0IHR5cGVzID0gW107XG5cbiAgICAgICAgT2JqZWN0LmtleXMobG9hZGVkTGFuZ3VhZ2VzKS5mb3JFYWNoKHR5cGUgPT4gbG9hZGVkTGFuZ3VhZ2VzW3R5cGVdICYmIHR5cGVzLnB1c2godHlwZSkpO1xuXG4gICAgICAgIGludGVybmFsU3RhdGUuaGFzQ2hhbmdlZCA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubG9hZChsYW5ndWFnZUtleSwgdHlwZXMsIHJlbG9hZCkucGlwZShcbiAgICAgICAgICAgIHRhcCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2Uuc2V0KCdzZWxlY3RlZF9sYW5ndWFnZScsIGxhbmd1YWdlS2V5LCB0cnVlKTtcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgQWxsIGxhbmd1YWdlU3RyaW5ncyBsYWJlbCBieSBrZXlcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IExhbmd1YWdlU3RyaW5nc1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXRMYW5ndWFnZVN0cmluZ3MoKTogTGFuZ3VhZ2VTdHJpbmdzIHtcbiAgICAgICAgaWYgKCFpbnRlcm5hbFN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhcHBTdHJpbmdzOiBpbnRlcm5hbFN0YXRlLmFwcFN0cmluZ3MsXG4gICAgICAgICAgICBhcHBMaXN0U3RyaW5nczogaW50ZXJuYWxTdGF0ZS5hcHBMaXN0U3RyaW5ncyxcbiAgICAgICAgICAgIG1vZFN0cmluZ3M6IGludGVybmFsU3RhdGUubW9kU3RyaW5ncyxcbiAgICAgICAgICAgIGxhbmd1YWdlS2V5OiBpbnRlcm5hbFN0YXRlLmxhbmd1YWdlS2V5XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IEFwcFN0cmluZ3MgbGFiZWwgYnkga2V5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGFiZWxLZXkgdG8gZmV0Y2hcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBsYWJlbFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRBcHBTdHJpbmcobGFiZWxLZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGlmICghaW50ZXJuYWxTdGF0ZS5hcHBTdHJpbmdzIHx8ICFpbnRlcm5hbFN0YXRlLmFwcFN0cmluZ3NbbGFiZWxLZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW50ZXJuYWxTdGF0ZS5hcHBTdHJpbmdzW2xhYmVsS2V5XTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgQXBwTGlzdFN0cmluZ3MgbGFiZWwgYnkga2V5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGFiZWxLZXkgdG8gZmV0Y2hcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfHt9fSBhcHAgc3RyaW5nc1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXRBcHBMaXN0U3RyaW5nKGxhYmVsS2V5OiBzdHJpbmcpOiBzdHJpbmcgfCBMYW5ndWFnZVN0cmluZ01hcCB7XG5cbiAgICAgICAgaWYgKCFpbnRlcm5hbFN0YXRlLmFwcExpc3RTdHJpbmdzIHx8ICFpbnRlcm5hbFN0YXRlLmFwcExpc3RTdHJpbmdzW2xhYmVsS2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW50ZXJuYWxTdGF0ZS5hcHBMaXN0U3RyaW5nc1tsYWJlbEtleV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IE1vZFN0cmluZ3MgbGFiZWwgYnkga2V5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGFiZWxLZXkgdG8gZmV0Y2hcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfHt9fSBtb2Qgc3RyaW5nc1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXRNb2RTdHJpbmcobGFiZWxLZXk6IHN0cmluZyk6IHN0cmluZyB8IExhbmd1YWdlU3RyaW5nTWFwIHtcblxuICAgICAgICBpZiAoIWludGVybmFsU3RhdGUubW9kU3RyaW5ncyB8fCAhaW50ZXJuYWxTdGF0ZS5tb2RTdHJpbmdzW2xhYmVsS2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW50ZXJuYWxTdGF0ZS5tb2RTdHJpbmdzW2xhYmVsS2V5XTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgZmllbGQgbGFiZWxcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbEtleSB0byBmZXRjaFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2R1bGUgdG8gdXNlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGxhbmcgdG8gdXNlXG4gICAgICogQHJldHVybnMge3N0cmluZ30gbGFiZWxcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0RmllbGRMYWJlbChsYWJlbEtleTogc3RyaW5nLCBtb2R1bGU6IHN0cmluZyA9IG51bGwsIGxhbmc6IExhbmd1YWdlU3RyaW5ncyA9IG51bGwpOiBzdHJpbmcge1xuICAgICAgICBsZXQgbGFuZ3VhZ2VzID0gbGFuZztcblxuICAgICAgICBpZiAoIWxhbmcpIHtcbiAgICAgICAgICAgIGxhbmd1YWdlcyA9IHRoaXMuZ2V0TGFuZ3VhZ2VTdHJpbmdzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWxhbmd1YWdlcyB8fCAhbGFuZ3VhZ2VzLm1vZFN0cmluZ3MgfHwgIWxhYmVsS2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbGFiZWwgPSAnJztcblxuICAgICAgICBpZiAobW9kdWxlKSB7XG4gICAgICAgICAgICBsYWJlbCA9IGxhbmd1YWdlcy5tb2RTdHJpbmdzW21vZHVsZV0gJiYgbGFuZ3VhZ2VzLm1vZFN0cmluZ3NbbW9kdWxlXVtsYWJlbEtleV07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWxhYmVsKSB7XG4gICAgICAgICAgICBsYWJlbCA9IGxhbmd1YWdlcy5hcHBTdHJpbmdzICYmIGxhbmd1YWdlcy5hcHBTdHJpbmdzW2xhYmVsS2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsYWJlbCB8fCAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgbGlzdCBsYWJlbFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxpc3RLZXkgdG8gZmV0Y2hcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGFiZWxLZXkgdG8gZmV0Y2hcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBsYWJlbFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRMaXN0TGFiZWwobGlzdEtleTogc3RyaW5nLCBsYWJlbEtleTogc3RyaW5nKTogc3RyaW5nIHtcblxuICAgICAgICBpZiAoIWxpc3RLZXkgfHwgIWxhYmVsS2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsaXN0U3RyaW5ncyA9IHRoaXMuZ2V0QXBwTGlzdFN0cmluZyhsaXN0S2V5KTtcblxuICAgICAgICBpZiAoIWxpc3RTdHJpbmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGlzdFN0cmluZ3NbbGFiZWxLZXldIHx8ICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhbGwgYXZhaWxhYmxlIHN0cmluZyB0eXBlc1xuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ1tdfSBzdHJpbmcgdHlwZXNcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0QXZhaWxhYmxlU3RyaW5nc1R5cGVzKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuY29uZmlnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIGxhbmd1YWdlIGhhcyBjaGFuZ2VkIG1hbnVhbGx5XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gaGFzIGNoYW5nZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgaGFzTGFuZ3VhZ2VDaGFuZ2VkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gaW50ZXJuYWxTdGF0ZS5oYXNDaGFuZ2VkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnRseSBhY3RpdmUgbGFuZ3VhZ2VcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IGN1cnJlbnQgbGFuZ3VhZ2Uga2V5XG4gICAgICovXG4gICAgcHVibGljIGdldEN1cnJlbnRMYW5ndWFnZSgpOiBzdHJpbmcge1xuXG4gICAgICAgIGNvbnN0IHN0b3JlZExhbmd1YWdlID0gdGhpcy5sb2NhbFN0b3JhZ2UuZ2V0KCdzZWxlY3RlZF9sYW5ndWFnZScpO1xuXG4gICAgICAgIGlmIChzdG9yZWRMYW5ndWFnZSkge1xuICAgICAgICAgICAgcmV0dXJuIHN0b3JlZExhbmd1YWdlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGludGVybmFsU3RhdGUubGFuZ3VhZ2VLZXkgPz8gJ2VuX3VzJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBhY3RpdmUgbGFuZ3VhZ2VcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IGFjdGl2ZSBsYW5ndWFnZSBrZXlcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0QWN0aXZlTGFuZ3VhZ2UoKTogc3RyaW5nIHtcblxuICAgICAgICByZXR1cm4gaW50ZXJuYWxTdGF0ZS5sYW5ndWFnZUtleSA/PyAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBzZWxlY3RlZCBsYW5ndWFnZVxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ30gc2VsZWN0ZWQgbGFuZ3VhZ2Uga2V5XG4gICAgICovXG4gICAgcHVibGljIGdldFNlbGVjdGVkTGFuZ3VhZ2UoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxTdG9yYWdlLmdldCgnc2VsZWN0ZWRfbGFuZ3VhZ2UnKSA/PyAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBsYW5ndWFnZSBpcyBlbmFibGVkXG4gICAgICogQHBhcmFtIGN1cnJlbnRMYW5ndWFnZVxuICAgICAqL1xuICAgIHB1YmxpYyBpc0xhbmd1YWdlRW5hYmxlZChjdXJyZW50TGFuZ3VhZ2U6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIWN1cnJlbnRMYW5ndWFnZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxhbmd1YWdlcyA9IHRoaXMuY29uZmlncy5nZXRDb25maWdWYWx1ZSgnbGFuZ3VhZ2VzJykgPz8ge307XG4gICAgICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5nZXREaXNhYmxlZExhbmd1YWdlcygpO1xuICAgICAgICBjb25zdCBsYW5ndWFnZUtleXMgPSBPYmplY3Qua2V5cyhsYW5ndWFnZXMpO1xuXG4gICAgICAgIGlmICghbGFuZ3VhZ2VLZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxhbmd1YWdlS2V5cy5pbmNsdWRlcyhjdXJyZW50TGFuZ3VhZ2UpICYmICFkaXNhYmxlZC5pbmNsdWRlcyhjdXJyZW50TGFuZ3VhZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBkaXNhYmxlZCBsYW5ndWFnZXNcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0RGlzYWJsZWRMYW5ndWFnZXMoKTogc3RyaW5nW10ge1xuICAgICAgICBjb25zdCBkaXNhYmxlZENvbmZpZyA9IHRoaXMuY29uZmlncy5nZXRDb25maWdWYWx1ZSgnZGlzYWJsZWRfbGFuZ3VhZ2VzJykgPz8gJyc7XG4gICAgICAgIGlmICghaXNTdHJpbmcoZGlzYWJsZWRDb25maWcpIHx8IGRpc2FibGVkQ29uZmlnID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkaXNhYmxlZENvbmZpZy5yZXBsYWNlKCcgJywgJycpLnNwbGl0KCcsJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGVuYWJsZWQgbGFuZ3VhZ2VzXG4gICAgICovXG4gICAgcHVibGljIGdldEVuYWJsZWRMYW5ndWFnZXMoKTogU3RyaW5nTWFwIHtcbiAgICAgICAgY29uc3QgbGFuZ3VhZ2VzID0gdGhpcy5jb25maWdzLmdldENvbmZpZ1ZhbHVlKCdsYW5ndWFnZXMnKSA/PyB7fTtcbiAgICAgICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmdldERpc2FibGVkTGFuZ3VhZ2VzKCk7XG5cbiAgICAgICAgY29uc3QgZW5hYmxlZCA9IHt9O1xuICAgICAgICBjb25zdCBlbmFibGVkS2V5cyA9IE9iamVjdC5rZXlzKGxhbmd1YWdlcykuZmlsdGVyKHZhbHVlID0+ICFkaXNhYmxlZC5pbmNsdWRlcyh2YWx1ZSkpO1xuICAgICAgICBlbmFibGVkS2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBlbmFibGVkW2tleV0gPSBsYW5ndWFnZXNba2V5XTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGVuYWJsZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGZpc3QgbGFuZ3VhZ2UgaW4gbGlzdFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgcHVibGljIGdldEZpcnN0TGFuZ3VhZ2UoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgbGFuZ3VhZ2VzID0gdGhpcy5jb25maWdzLmdldENvbmZpZ1ZhbHVlKCdsYW5ndWFnZXMnKSA/PyB7fTtcbiAgICAgICAgY29uc3QgbGFuZ3VhZ2VLZXlzID0gT2JqZWN0LmtleXMobGFuZ3VhZ2VzKTtcbiAgICAgICAgcmV0dXJuIGxhbmd1YWdlS2V5cy5zb3J0KClbMF0gPz8gJyc7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsIExhbmd1YWdlIFN0cmluZ3MgTG9hZCBmb3IgZ2l2ZW4gbGFuZ3VhZ2UgYW5kIHR5cGVzIGlmIG5vdCBjYWNoZWQgYW5kIHVwZGF0ZSBzdGF0ZS5cbiAgICAgKiBSZXR1cm5zIG9ic2VydmFibGUgdG8gYmUgdXNlZCBpbiByZXNvbHZlciBpZiBuZWVkZWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZUtleSB0byBsb2FkXG4gICAgICogQHBhcmFtIHtzdHJpbmdbXX0gdHlwZXMgdG8gbG9hZFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVsb2FkXG4gICAgICogQHJldHVybnMge29iamVjdH0gT2JzZXJ2YWJsZVxuICAgICAqL1xuICAgIHB1YmxpYyBsb2FkKGxhbmd1YWdlS2V5OiBzdHJpbmcsIHR5cGVzOiBzdHJpbmdbXSwgcmVsb2FkID0gZmFsc2UpOiBPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgICAgIGNvbnN0IHN0cmVhbXMkOiBBcnJheTxPYnNlcnZhYmxlPGFueT4+ID0gW107XG5cbiAgICAgICAgdHlwZXMuZm9yRWFjaCh0eXBlID0+IHN0cmVhbXMkLnB1c2godGhpcy5nZXRTdHJpbmdzKGxhbmd1YWdlS2V5LCB0eXBlLCByZWxvYWQpKSk7XG5cbiAgICAgICAgcmV0dXJuIGZvcmtKb2luKHN0cmVhbXMkKS5waXBlKFxuICAgICAgICAgICAgZmlyc3QoKSxcbiAgICAgICAgICAgIHRhcChyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlVXBkYXRlID0gey4uLmludGVybmFsU3RhdGUsIGxhbmd1YWdlS2V5fTtcblxuICAgICAgICAgICAgICAgIHR5cGVzLmZvckVhY2goKHR5cGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlVXBkYXRlW3R5cGVdID0gcmVzdWx0W2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVkTGFuZ3VhZ2VzW3R5cGVdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShzdGF0ZVVwZGF0ZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGxvYWRlZFxuICAgICAqL1xuICAgIHB1YmxpYyBhcmVBbGxDYWNoZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBpc0NhY2hlZCA9IHRydWU7XG4gICAgICAgIGlzQ2FjaGVkID0gaXNDYWNoZWQgJiYgIWVtcHR5T2JqZWN0KGNhY2hlPy5hcHBTdHJpbmdzID8/IHt9KTtcbiAgICAgICAgaXNDYWNoZWQgPSBpc0NhY2hlZCAmJiAhZW1wdHlPYmplY3QoY2FjaGU/LmFwcExpc3RTdHJpbmdzID8/IHt9KTtcbiAgICAgICAgaXNDYWNoZWQgPSBpc0NhY2hlZCAmJiAhZW1wdHlPYmplY3QoY2FjaGU/Lm1vZFN0cmluZ3MgPz8ge30pO1xuXG4gICAgICAgIHJldHVybiBpc0NhY2hlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgcHJlLWxvYWRlZCBzdHJpbmdzIGFuZCBjYWNoZVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQobGFuZ3VhZ2VLZXk6IHN0cmluZywgbGFuZ3VhZ2VTdHJpbmdzOiBMYW5ndWFnZVN0cmluZ3MpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBzdGF0ZVVwZGF0ZSA9IHsuLi5pbnRlcm5hbFN0YXRlLCBsYW5ndWFnZUtleX07XG5cbiAgICAgICAgaWYgKGxhbmd1YWdlU3RyaW5ncy5hcHBTdHJpbmdzICYmICFlbXB0eU9iamVjdChsYW5ndWFnZVN0cmluZ3MuYXBwU3RyaW5ncykpIHtcbiAgICAgICAgICAgIGNhY2hlWydhcHBTdHJpbmdzJ11bbGFuZ3VhZ2VLZXldID0gb2YobGFuZ3VhZ2VTdHJpbmdzLmFwcFN0cmluZ3MpLnBpcGUoc2hhcmVSZXBsYXkoMSkpO1xuICAgICAgICAgICAgc3RhdGVVcGRhdGVbJ2FwcFN0cmluZ3MnXSA9IGxhbmd1YWdlU3RyaW5ncy5hcHBTdHJpbmdzO1xuICAgICAgICAgICAgbG9hZGVkTGFuZ3VhZ2VzWydhcHBTdHJpbmdzJ10gPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxhbmd1YWdlU3RyaW5ncy5hcHBMaXN0U3RyaW5ncyAmJiAhZW1wdHlPYmplY3QobGFuZ3VhZ2VTdHJpbmdzLmFwcExpc3RTdHJpbmdzKSkge1xuICAgICAgICAgICAgY2FjaGVbJ2FwcExpc3RTdHJpbmdzJ11bbGFuZ3VhZ2VLZXldID0gb2YobGFuZ3VhZ2VTdHJpbmdzLmFwcExpc3RTdHJpbmdzKS5waXBlKHNoYXJlUmVwbGF5KDEpKTtcbiAgICAgICAgICAgIHN0YXRlVXBkYXRlWydhcHBMaXN0U3RyaW5ncyddID0gbGFuZ3VhZ2VTdHJpbmdzLmFwcExpc3RTdHJpbmdzO1xuICAgICAgICAgICAgbG9hZGVkTGFuZ3VhZ2VzWydhcHBMaXN0U3RyaW5ncyddID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsYW5ndWFnZVN0cmluZ3MubW9kU3RyaW5ncyAmJiAhZW1wdHlPYmplY3QobGFuZ3VhZ2VTdHJpbmdzLm1vZFN0cmluZ3MpKSB7XG4gICAgICAgICAgICBjYWNoZVsnbW9kU3RyaW5ncyddW2xhbmd1YWdlS2V5XSA9IG9mKGxhbmd1YWdlU3RyaW5ncy5tb2RTdHJpbmdzKS5waXBlKHNoYXJlUmVwbGF5KDEpKTtcbiAgICAgICAgICAgIHN0YXRlVXBkYXRlWydtb2RTdHJpbmdzJ10gPSBsYW5ndWFnZVN0cmluZ3MubW9kU3RyaW5ncztcbiAgICAgICAgICAgIGxvYWRlZExhbmd1YWdlc1snbW9kU3RyaW5ncyddID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoc3RhdGVVcGRhdGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBzZXNzaW9uIGxhbmd1YWdlXG4gICAgICovXG4gICAgcHVibGljIHNldFNlc3Npb25MYW5ndWFnZSgpOiBPYnNlcnZhYmxlPFByb2Nlc3M+IHtcblxuICAgICAgICBjb25zdCBwcm9jZXNzVHlwZSA9ICdzZXQtc2Vzc2lvbi1sYW5ndWFnZSc7XG5cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGxhbmd1YWdlOiBpbnRlcm5hbFN0YXRlLmxhbmd1YWdlS2V5XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc1NlcnZpY2Uuc3VibWl0KHByb2Nlc3NUeXBlLCBvcHRpb25zKS5waXBlKHRha2UoMSkpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgQVBJXG4gICAgICovXG5cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBpbnRlcm5hbCBzdGF0ZSBjYWNoZSBhbmQgZW1pdCBmcm9tIHN0b3JlLi4uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3t9fSBzdGF0ZSB0byBzZXRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgdXBkYXRlU3RhdGUoc3RhdGU6IExhbmd1YWdlU3RhdGUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdG9yZS5uZXh0KGludGVybmFsU3RhdGUgPSBzdGF0ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGdpdmVuICR0eXBlIG9mIHN0cmluZ3MgT2JzZXJ2YWJsZSBmcm9tIGNhY2hlICBvciBjYWxsIHRoZSBiYWNrZW5kXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2UgdG8gbG9hZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIGxvYWRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlbG9hZFxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE9ic2VydmFibGU8YW55PlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRTdHJpbmdzKGxhbmd1YWdlOiBzdHJpbmcsIHR5cGU6IHN0cmluZywgcmVsb2FkID0gZmFsc2UpOiBPYnNlcnZhYmxlPHt9PiB7XG5cbiAgICAgICAgY29uc3Qgc3RyaW5nc0NhY2hlID0gY2FjaGVbdHlwZV07XG4gICAgICAgIGNvbnN0IGZldGNoTWV0aG9kID0gdGhpcy5jb25maWdbdHlwZV0uZmV0Y2g7XG5cbiAgICAgICAgaWYgKHN0cmluZ3NDYWNoZVtsYW5ndWFnZV0gJiYgcmVsb2FkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ3NDYWNoZVtsYW5ndWFnZV07XG4gICAgICAgIH1cblxuICAgICAgICBzdHJpbmdzQ2FjaGVbbGFuZ3VhZ2VdID0gdGhpc1tmZXRjaE1ldGhvZF0obGFuZ3VhZ2UpLnBpcGUoXG4gICAgICAgICAgICBzaGFyZVJlcGxheSgxKSxcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gc3RyaW5nc0NhY2hlW2xhbmd1YWdlXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGZXRjaCB0aGUgQXBwIHN0cmluZ3MgZnJvbSB0aGUgYmFja2VuZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlIHRvIGZldGNoXG4gICAgICogQHJldHVybnMge3t9fSBPYnNlcnZhYmxlPHt9PlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBmZXRjaEFwcFN0cmluZ3MobGFuZ3VhZ2U6IHN0cmluZyk6IE9ic2VydmFibGU8e30+IHtcbiAgICAgICAgY29uc3QgcmVzb3VyY2VOYW1lID0gdGhpcy5jb25maWcuYXBwU3RyaW5ncy5yZXNvdXJjZU5hbWU7XG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IHRoaXMuY29uZmlnLmFwcFN0cmluZ3MubWV0YWRhdGE7XG4gICAgICAgIHJldHVybiB0aGlzLnJlY29yZEdRTC5mZXRjaChyZXNvdXJjZU5hbWUsIGAvYXBpL2FwcC1zdHJpbmdzLyR7bGFuZ3VhZ2V9YCwgZmllbGRzKVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgbWFwKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1zID0ge307XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuYXBwU3RyaW5ncykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMgPSBkYXRhLmFwcFN0cmluZ3MuaXRlbXM7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbXM7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmV0Y2ggdGhlIEFwcCBsaXN0IHN0cmluZ3MgZnJvbSB0aGUgYmFja2VuZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlIHRvIGZldGNoXG4gICAgICogQHJldHVybnMge3t9fSBPYnNlcnZhYmxlPHt9PlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBmZXRjaEFwcExpc3RTdHJpbmdzKGxhbmd1YWdlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgICAgIGNvbnN0IHJlc291cmNlTmFtZSA9IHRoaXMuY29uZmlnLmFwcExpc3RTdHJpbmdzLnJlc291cmNlTmFtZTtcbiAgICAgICAgY29uc3QgZmllbGRzID0gdGhpcy5jb25maWcuYXBwTGlzdFN0cmluZ3MubWV0YWRhdGE7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVjb3JkR1FMLmZldGNoKHJlc291cmNlTmFtZSwgYC9hcGkvYXBwLWxpc3Qtc3RyaW5ncy8ke2xhbmd1YWdlfWAsIGZpZWxkcylcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIG1hcCgoe2RhdGF9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtcyA9IHt9O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmFwcExpc3RTdHJpbmdzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcyA9IGRhdGEuYXBwTGlzdFN0cmluZ3MuaXRlbXM7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbXM7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmV0Y2ggdGhlIE1vZCBzdHJpbmdzIGZyb20gdGhlIGJhY2tlbmRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZSB0byBmZXRjaFxuICAgICAqIEByZXR1cm5zIHt7fX0gT2JzZXJ2YWJsZTx7fT5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZmV0Y2hNb2RTdHJpbmdzKGxhbmd1YWdlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgICAgIGNvbnN0IHJlc291cmNlTmFtZSA9IHRoaXMuY29uZmlnLm1vZFN0cmluZ3MucmVzb3VyY2VOYW1lO1xuICAgICAgICBjb25zdCBmaWVsZHMgPSB0aGlzLmNvbmZpZy5tb2RTdHJpbmdzLm1ldGFkYXRhO1xuICAgICAgICByZXR1cm4gdGhpcy5yZWNvcmRHUUwuZmV0Y2gocmVzb3VyY2VOYW1lLCBgL2FwaS9tb2Qtc3RyaW5ncy8ke2xhbmd1YWdlfWAsIGZpZWxkcylcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIG1hcCgoe2RhdGF9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtcyA9IHt9O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLm1vZFN0cmluZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zID0gZGF0YS5tb2RTdHJpbmdzLml0ZW1zO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ==