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
import { deepClone } from 'common';
import * as i0 from "@angular/core";
import * as i1 from "../../services/api/graphql-api/api.collection.get";
const initialState = {
    configs: {},
    loading: false
};
let internalState = deepClone(initialState);
let cache$ = null;
class SystemConfigStore {
    collectionGQL;
    configs$;
    loading$;
    store = new BehaviorSubject(internalState);
    state$ = this.store.asObservable();
    resourceName = 'systemConfigs';
    fieldsMetadata = {
        fields: [
            'id',
            '_id',
            'value',
            'items'
        ]
    };
    constructor(collectionGQL) {
        this.collectionGQL = collectionGQL;
        this.configs$ = this.state$.pipe(map(state => state.configs), distinctUntilChanged());
        this.loading$ = this.state$.pipe(map(state => state.loading));
    }
    /**
     * Public Api
     */
    /**
     * Get system config value by key
     *
     * @param {string} configKey of the config
     * @returns {{}|string} config value
     */
    getConfigValue(configKey) {
        if (!internalState.configs || !internalState.configs[configKey]) {
            return null;
        }
        if (internalState.configs[configKey].value !== null) {
            return internalState.configs[configKey].value;
        }
        return internalState.configs[configKey].items;
    }
    /**
     * Get ui config value by key
     *
     * @param {string} configKey of the ui config
     * @returns {{}|string} config value
     */
    getUi(configKey) {
        const ui = this.getConfigValue('ui') ?? {};
        return ui[configKey] ?? null;
    }
    getHomePage() {
        let defaultModule = 'home';
        const defaultModuleConfig = this.getConfigValue('default_module');
        if (defaultModuleConfig) {
            defaultModule = defaultModuleConfig;
        }
        return defaultModule;
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
    /**
     * Initial SystemConfigs load if not cached and update state.
     * Returns observable to be used in resolver if needed
     *
     * @returns {Observable<{}>} observable
     */
    load() {
        this.updateState({ ...internalState, loading: true });
        return this.getSystemConfigs().pipe(tap(configs => {
            this.updateState({ ...internalState, configs, loading: false });
        }));
    }
    /**
     * Check if loaded
     */
    isCached() {
        return cache$ !== null;
    }
    /**
     * Set pre-loaded configs and cache
     */
    set(configs) {
        cache$ = of(configs).pipe(shareReplay(1));
        this.updateState({ ...internalState, configs, loading: false });
    }
    /**
     * Internal API
     */
    /**
     * Update the state
     *
     * @param {{}} state new state
     */
    updateState(state) {
        this.store.next(internalState = state);
    }
    /**
     * Get SystemConfigs cached Observable or call the backend
     *
     * @returns {Observable<{}>} observable
     */
    getSystemConfigs() {
        if (cache$ == null) {
            cache$ = this.fetch().pipe(shareReplay(1));
        }
        return cache$;
    }
    /**
     * Fetch the App strings from the backend
     *
     * @returns {Observable<{}>} observable
     */
    fetch() {
        return this.collectionGQL
            .fetchAll(this.resourceName, this.fieldsMetadata).pipe(map(({ data }) => {
            const configs = {};
            if (data.systemConfigs && data.systemConfigs.edges) {
                data.systemConfigs.edges.forEach((edge) => {
                    // eslint-disable-next-line no-underscore-dangle
                    configs[edge.node._id] = edge.node;
                });
            }
            return configs;
        }));
    }
    static ɵfac = function SystemConfigStore_Factory(t) { return new (t || SystemConfigStore)(i0.ɵɵinject(i1.CollectionGQL)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SystemConfigStore, factory: SystemConfigStore.ɵfac, providedIn: 'root' });
}
export { SystemConfigStore };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SystemConfigStore, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.CollectionGQL }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzdGVtLWNvbmZpZy5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9zdG9yZS9zeXN0ZW0tY29uZmlnL3N5c3RlbS1jb25maWcuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGVBQWUsRUFBYyxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFDLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFHM0UsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLFFBQVEsQ0FBQzs7O0FBbUJqQyxNQUFNLFlBQVksR0FBa0I7SUFDaEMsT0FBTyxFQUFFLEVBQUU7SUFDWCxPQUFPLEVBQUUsS0FBSztDQUNqQixDQUFDO0FBRUYsSUFBSSxhQUFhLEdBQWtCLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUUzRCxJQUFJLE1BQU0sR0FBb0IsSUFBSSxDQUFDO0FBRW5DLE1BR2EsaUJBQWlCO0lBaUJOO0lBZnBCLFFBQVEsQ0FBOEI7SUFDdEMsUUFBUSxDQUFzQjtJQUNwQixLQUFLLEdBQUcsSUFBSSxlQUFlLENBQWdCLGFBQWEsQ0FBQyxDQUFDO0lBQzFELE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ25DLFlBQVksR0FBRyxlQUFlLENBQUM7SUFDL0IsY0FBYyxHQUFHO1FBQ3ZCLE1BQU0sRUFBRTtZQUNKLElBQUk7WUFDSixLQUFLO1lBQ0wsT0FBTztZQUNQLE9BQU87U0FDVjtLQUNKLENBQUM7SUFHRixZQUFvQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QyxJQUFJ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TyxnQkFBZ0I7UUFFdEIsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ2hCLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUN0QixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQ2pCLENBQUM7U0FDTDtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7OztPQUlHO0lBQ08sS0FBSztRQUVYLE9BQU8sSUFBSSxDQUFDLGFBQWE7YUFDcEIsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUU7WUFDbEUsTUFBTSxPQUFPLEdBQW9CLEVBQUUsQ0FBQztZQUVwQyxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7Z0JBQ2hELElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO29CQUN0QyxnREFBZ0Q7b0JBQ2hELE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ3ZDLENBQUMsQ0FBQyxDQUFDO2FBQ047WUFFRCxPQUFPLE9BQU8sQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1osQ0FBQzsyRUFoS1EsaUJBQWlCO2dFQUFqQixpQkFBaUIsV0FBakIsaUJBQWlCLG1CQUZkLE1BQU07O1NBRVQsaUJBQWlCO3VGQUFqQixpQkFBaUI7Y0FIN0IsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIG9mfSBmcm9tICdyeGpzJztcbmltcG9ydCB7ZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCwgc2hhcmVSZXBsYXksIHRhcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge0NvbGxlY3Rpb25HUUx9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwaS9ncmFwaHFsLWFwaS9hcGkuY29sbGVjdGlvbi5nZXQnO1xuaW1wb3J0IHtkZWVwQ2xvbmV9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge1N0YXRlU3RvcmV9IGZyb20gJy4uL3N0YXRlJztcblxuZXhwb3J0IGludGVyZmFjZSBTeXN0ZW1Db25maWcge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgX2lkOiBzdHJpbmc7XG4gICAgdmFsdWU6IHN0cmluZztcbiAgICBpdGVtczogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTeXN0ZW1Db25maWdNYXAge1xuICAgIFtrZXk6IHN0cmluZ106IFN5c3RlbUNvbmZpZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTeXN0ZW1Db25maWdzIHtcbiAgICBjb25maWdzOiBTeXN0ZW1Db25maWdNYXA7XG4gICAgbG9hZGluZzogYm9vbGVhbjtcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBTeXN0ZW1Db25maWdzID0ge1xuICAgIGNvbmZpZ3M6IHt9LFxuICAgIGxvYWRpbmc6IGZhbHNlXG59O1xuXG5sZXQgaW50ZXJuYWxTdGF0ZTogU3lzdGVtQ29uZmlncyA9IGRlZXBDbG9uZShpbml0aWFsU3RhdGUpO1xuXG5sZXQgY2FjaGUkOiBPYnNlcnZhYmxlPGFueT4gPSBudWxsO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTeXN0ZW1Db25maWdTdG9yZSBpbXBsZW1lbnRzIFN0YXRlU3RvcmUge1xuXG4gICAgY29uZmlncyQ6IE9ic2VydmFibGU8U3lzdGVtQ29uZmlnTWFwPjtcbiAgICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBwcm90ZWN0ZWQgc3RvcmUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFN5c3RlbUNvbmZpZ3M+KGludGVybmFsU3RhdGUpO1xuICAgIHByb3RlY3RlZCBzdGF0ZSQgPSB0aGlzLnN0b3JlLmFzT2JzZXJ2YWJsZSgpO1xuICAgIHByb3RlY3RlZCByZXNvdXJjZU5hbWUgPSAnc3lzdGVtQ29uZmlncyc7XG4gICAgcHJvdGVjdGVkIGZpZWxkc01ldGFkYXRhID0ge1xuICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgICdpZCcsXG4gICAgICAgICAgICAnX2lkJyxcbiAgICAgICAgICAgICd2YWx1ZScsXG4gICAgICAgICAgICAnaXRlbXMnXG4gICAgICAgIF1cbiAgICB9O1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbGxlY3Rpb25HUUw6IENvbGxlY3Rpb25HUUwpIHtcbiAgICAgICAgdGhpcy5jb25maWdzJCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLmNvbmZpZ3MpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nJCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLmxvYWRpbmcpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaWMgQXBpXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBHZXQgc3lzdGVtIGNvbmZpZyB2YWx1ZSBieSBrZXlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWdLZXkgb2YgdGhlIGNvbmZpZ1xuICAgICAqIEByZXR1cm5zIHt7fXxzdHJpbmd9IGNvbmZpZyB2YWx1ZVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRDb25maWdWYWx1ZShjb25maWdLZXk6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGlmICghaW50ZXJuYWxTdGF0ZS5jb25maWdzIHx8ICFpbnRlcm5hbFN0YXRlLmNvbmZpZ3NbY29uZmlnS2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW50ZXJuYWxTdGF0ZS5jb25maWdzW2NvbmZpZ0tleV0udmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBpbnRlcm5hbFN0YXRlLmNvbmZpZ3NbY29uZmlnS2V5XS52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnRlcm5hbFN0YXRlLmNvbmZpZ3NbY29uZmlnS2V5XS5pdGVtcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdWkgY29uZmlnIHZhbHVlIGJ5IGtleVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZ0tleSBvZiB0aGUgdWkgY29uZmlnXG4gICAgICogQHJldHVybnMge3t9fHN0cmluZ30gY29uZmlnIHZhbHVlXG4gICAgICovXG4gICAgcHVibGljIGdldFVpKGNvbmZpZ0tleTogc3RyaW5nKTogYW55IHtcbiAgICAgICAgY29uc3QgdWkgPSB0aGlzLmdldENvbmZpZ1ZhbHVlKCd1aScpID8/IHt9O1xuICAgICAgICByZXR1cm4gdWlbY29uZmlnS2V5XSA/PyBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRIb21lUGFnZSgpOiBzdHJpbmcge1xuXG4gICAgICAgIGxldCBkZWZhdWx0TW9kdWxlID0gJ2hvbWUnO1xuICAgICAgICBjb25zdCBkZWZhdWx0TW9kdWxlQ29uZmlnID0gdGhpcy5nZXRDb25maWdWYWx1ZSgnZGVmYXVsdF9tb2R1bGUnKTtcblxuICAgICAgICBpZiAoZGVmYXVsdE1vZHVsZUNvbmZpZykge1xuICAgICAgICAgICAgZGVmYXVsdE1vZHVsZSA9IGRlZmF1bHRNb2R1bGVDb25maWc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGVmYXVsdE1vZHVsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBzdGF0ZVxuICAgICAqL1xuICAgIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcbiAgICAgICAgY2FjaGUkID0gbnVsbDtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShkZWVwQ2xvbmUoaW5pdGlhbFN0YXRlKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyQXV0aEJhc2VkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbCBTeXN0ZW1Db25maWdzIGxvYWQgaWYgbm90IGNhY2hlZCBhbmQgdXBkYXRlIHN0YXRlLlxuICAgICAqIFJldHVybnMgb2JzZXJ2YWJsZSB0byBiZSB1c2VkIGluIHJlc29sdmVyIGlmIG5lZWRlZFxuICAgICAqXG4gICAgICogQHJldHVybnMge09ic2VydmFibGU8e30+fSBvYnNlcnZhYmxlXG4gICAgICovXG4gICAgcHVibGljIGxvYWQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHsuLi5pbnRlcm5hbFN0YXRlLCBsb2FkaW5nOiB0cnVlfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3lzdGVtQ29uZmlncygpLnBpcGUoXG4gICAgICAgICAgICB0YXAoY29uZmlncyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7Li4uaW50ZXJuYWxTdGF0ZSwgY29uZmlncywgbG9hZGluZzogZmFsc2V9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgbG9hZGVkXG4gICAgICovXG4gICAgcHVibGljIGlzQ2FjaGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gY2FjaGUkICE9PSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBwcmUtbG9hZGVkIGNvbmZpZ3MgYW5kIGNhY2hlXG4gICAgICovXG4gICAgcHVibGljIHNldChjb25maWdzOiBTeXN0ZW1Db25maWdNYXApOiB2b2lkIHtcbiAgICAgICAgY2FjaGUkID0gb2YoY29uZmlncykucGlwZShzaGFyZVJlcGxheSgxKSk7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoey4uLmludGVybmFsU3RhdGUsIGNvbmZpZ3MsIGxvYWRpbmc6IGZhbHNlfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgQVBJXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHN0YXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3t9fSBzdGF0ZSBuZXcgc3RhdGVcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgdXBkYXRlU3RhdGUoc3RhdGU6IFN5c3RlbUNvbmZpZ3MpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdG9yZS5uZXh0KGludGVybmFsU3RhdGUgPSBzdGF0ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IFN5c3RlbUNvbmZpZ3MgY2FjaGVkIE9ic2VydmFibGUgb3IgY2FsbCB0aGUgYmFja2VuZFxuICAgICAqXG4gICAgICogQHJldHVybnMge09ic2VydmFibGU8e30+fSBvYnNlcnZhYmxlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldFN5c3RlbUNvbmZpZ3MoKTogT2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgICAgICBpZiAoY2FjaGUkID09IG51bGwpIHtcbiAgICAgICAgICAgIGNhY2hlJCA9IHRoaXMuZmV0Y2goKS5waXBlKFxuICAgICAgICAgICAgICAgIHNoYXJlUmVwbGF5KDEpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNhY2hlJDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGZXRjaCB0aGUgQXBwIHN0cmluZ3MgZnJvbSB0aGUgYmFja2VuZFxuICAgICAqXG4gICAgICogQHJldHVybnMge09ic2VydmFibGU8e30+fSBvYnNlcnZhYmxlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGZldGNoKCk6IE9ic2VydmFibGU8YW55PiB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbkdRTFxuICAgICAgICAgICAgLmZldGNoQWxsKHRoaXMucmVzb3VyY2VOYW1lLCB0aGlzLmZpZWxkc01ldGFkYXRhKS5waXBlKG1hcCgoe2RhdGF9KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29uZmlnczogU3lzdGVtQ29uZmlnTWFwID0ge307XG5cbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5zeXN0ZW1Db25maWdzICYmIGRhdGEuc3lzdGVtQ29uZmlncy5lZGdlcykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLnN5c3RlbUNvbmZpZ3MuZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWdzW2VkZ2Uubm9kZS5faWRdID0gZWRnZS5ub2RlO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gY29uZmlncztcbiAgICAgICAgICAgIH0pKTtcbiAgICB9XG5cbn1cbiJdfQ==