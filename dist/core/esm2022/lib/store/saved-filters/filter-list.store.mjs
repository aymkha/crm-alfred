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
import { RecordListStore } from '../record-list/record-list.store';
import * as i0 from "@angular/core";
import * as i1 from "./graphql/api.list.get";
import * as i2 from "../system-config/system-config.store";
import * as i3 from "../user-preference/user-preference.store";
import * as i4 from "../language/language.store";
import * as i5 from "../../services/message/message.service";
import * as i6 from "../../services/auth/auth.service";
import * as i7 from "../../services/navigation/module-name-mapper/module-name-mapper.service";
class FilterListStore extends RecordListStore {
    listGQL;
    configs;
    preferences;
    language;
    message;
    auth;
    moduleNameMapper;
    moduleName = 'saved-search';
    filterFields = {
        module: 'search_module',
        user: 'assigned_user_id',
    };
    /**
     * Constructor
     * @param listGQL
     * @param configs
     * @param preferences
     * @param language
     * @param message
     * @param auth
     * @param moduleNameMapper
     */
    constructor(listGQL, configs, preferences, language, message, auth, moduleNameMapper) {
        super(listGQL, configs, preferences, language, message);
        this.listGQL = listGQL;
        this.configs = configs;
        this.preferences = preferences;
        this.language = language;
        this.message = message;
        this.auth = auth;
        this.moduleNameMapper = moduleNameMapper;
    }
    /**
     * Initialize store
     * @param module
     */
    init(module) {
        const result$ = super.init(this.moduleName, false);
        this.initCriteria(module);
        return result$;
    }
    /**
     * Load / reload records using current pagination and criteria
     *
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<RecordList>
     */
    load(useCache = true) {
        return super.load(useCache);
    }
    /**
     * Get current list of saved filters
     */
    getFilters() {
        return this.records;
    }
    /**
     * Add new filter to list
     * @param filter
     */
    addFilter(filter) {
        let isNew = true;
        const filters = this.records;
        const newList = [];
        filters.forEach(record => {
            if (record.id === filter.id) {
                newList.push(filter);
                isNew = false;
                return;
            }
            newList.push(record);
        });
        if (isNew) {
            newList.push(filter);
        }
        this.updateState({
            ...this.internalState,
            records: newList,
        });
    }
    /**
     * Remove existing filter
     * @param filter
     */
    removeFilter(filter) {
        if (!filter || !filter.id) {
            return;
        }
        const filters = this.records;
        const newList = [];
        filters.forEach(record => {
            if (record.id === filter.id) {
                return;
            }
            newList.push(record);
        });
        this.updateState({
            ...this.internalState,
            records: newList,
        });
    }
    /**
     * Initialize criteria
     * @param module
     */
    initCriteria(module) {
        const criteria = this.criteria;
        criteria.filters[this.filterFields.module] = {
            field: this.filterFields.module,
            operator: '=',
            values: [this.moduleNameMapper.toLegacy(module)]
        };
        criteria.filters[this.filterFields.user] = {
            field: this.filterFields.user,
            operator: '=',
            values: [this.auth.getCurrentUser().id]
        };
        this.updateSearchCriteria(criteria, false);
    }
    static ɵfac = function FilterListStore_Factory(t) { return new (t || FilterListStore)(i0.ɵɵinject(i1.FiltersListGQL), i0.ɵɵinject(i2.SystemConfigStore), i0.ɵɵinject(i3.UserPreferenceStore), i0.ɵɵinject(i4.LanguageStore), i0.ɵɵinject(i5.MessageService), i0.ɵɵinject(i6.AuthService), i0.ɵɵinject(i7.ModuleNameMapper)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FilterListStore, factory: FilterListStore.ɵfac });
}
export { FilterListStore };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterListStore, [{
        type: Injectable
    }], function () { return [{ type: i1.FiltersListGQL }, { type: i2.SystemConfigStore }, { type: i3.UserPreferenceStore }, { type: i4.LanguageStore }, { type: i5.MessageService }, { type: i6.AuthService }, { type: i7.ModuleNameMapper }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWxpc3Quc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc3RvcmUvc2F2ZWQtZmlsdGVycy9maWx0ZXItbGlzdC5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUl6QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sa0NBQWtDLENBQUM7Ozs7Ozs7OztBQVNqRSxNQUNhLGVBQWdCLFNBQVEsZUFBZTtJQW1CbEM7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUF2QkosVUFBVSxHQUFHLGNBQWMsQ0FBQztJQUM1QixZQUFZLEdBQWM7UUFDaEMsTUFBTSxFQUFFLGVBQWU7UUFDdkIsSUFBSSxFQUFFLGtCQUFrQjtLQUMzQixDQUFDO0lBRUY7Ozs7Ozs7OztPQVNHO0lBQ0gsWUFDYyxPQUF1QixFQUN2QixPQUEwQixFQUMxQixXQUFnQyxFQUNoQyxRQUF1QixFQUN2QixPQUF1QixFQUN2QixJQUFpQixFQUNqQixnQkFBa0M7UUFFNUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQVI5QyxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUMxQixnQkFBVyxHQUFYLFdBQVcsQ0FBcUI7UUFDaEMsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQUN2QixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixTQUFJLEdBQUosSUFBSSxDQUFhO1FBQ2pCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFHaEQsQ0FBQztJQUVEOzs7T0FHRztJQUNILElBQUksQ0FBQyxNQUFjO1FBQ2YsTUFBTSxPQUFPLEdBQUcsS0FB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QTFJUSxlQUFlO2dFQUFmLGVBQWUsV0FBZixlQUFlOztTQUFmLGVBQWU7dUZBQWYsZUFBZTtjQUQzQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTdHJpbmdNYXB9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aC9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHtSZWNvcmRMaXN0U3RvcmV9IGZyb20gJy4uL3JlY29yZC1saXN0L3JlY29yZC1saXN0LnN0b3JlJztcbmltcG9ydCB7U2F2ZWRGaWx0ZXIsIFNhdmVkRmlsdGVyTGlzdH0gZnJvbSAnLi9zYXZlZC1maWx0ZXIubW9kZWwnO1xuaW1wb3J0IHtNb2R1bGVOYW1lTWFwcGVyfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL21vZHVsZS1uYW1lLW1hcHBlci9tb2R1bGUtbmFtZS1tYXBwZXIuc2VydmljZSc7XG5pbXBvcnQge1N5c3RlbUNvbmZpZ1N0b3JlfSBmcm9tICcuLi9zeXN0ZW0tY29uZmlnL3N5c3RlbS1jb25maWcuc3RvcmUnO1xuaW1wb3J0IHtVc2VyUHJlZmVyZW5jZVN0b3JlfSBmcm9tICcuLi91c2VyLXByZWZlcmVuY2UvdXNlci1wcmVmZXJlbmNlLnN0b3JlJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvbWVzc2FnZS9tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHtGaWx0ZXJzTGlzdEdRTH0gZnJvbSAnLi9ncmFwaHFsL2FwaS5saXN0LmdldCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWx0ZXJMaXN0U3RvcmUgZXh0ZW5kcyBSZWNvcmRMaXN0U3RvcmUge1xuXG4gICAgcHJvdGVjdGVkIG1vZHVsZU5hbWUgPSAnc2F2ZWQtc2VhcmNoJztcbiAgICBwcm90ZWN0ZWQgZmlsdGVyRmllbGRzOiBTdHJpbmdNYXAgPSB7XG4gICAgICAgIG1vZHVsZTogJ3NlYXJjaF9tb2R1bGUnLFxuICAgICAgICB1c2VyOiAnYXNzaWduZWRfdXNlcl9pZCcsXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIGxpc3RHUUxcbiAgICAgKiBAcGFyYW0gY29uZmlnc1xuICAgICAqIEBwYXJhbSBwcmVmZXJlbmNlc1xuICAgICAqIEBwYXJhbSBsYW5ndWFnZVxuICAgICAqIEBwYXJhbSBtZXNzYWdlXG4gICAgICogQHBhcmFtIGF1dGhcbiAgICAgKiBAcGFyYW0gbW9kdWxlTmFtZU1hcHBlclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgbGlzdEdRTDogRmlsdGVyc0xpc3RHUUwsXG4gICAgICAgIHByb3RlY3RlZCBjb25maWdzOiBTeXN0ZW1Db25maWdTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHByZWZlcmVuY2VzOiBVc2VyUHJlZmVyZW5jZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBtZXNzYWdlOiBNZXNzYWdlU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGF1dGg6IEF1dGhTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgbW9kdWxlTmFtZU1hcHBlcjogTW9kdWxlTmFtZU1hcHBlclxuICAgICkge1xuICAgICAgICBzdXBlcihsaXN0R1FMLCBjb25maWdzLCBwcmVmZXJlbmNlcywgbGFuZ3VhZ2UsIG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgc3RvcmVcbiAgICAgKiBAcGFyYW0gbW9kdWxlXG4gICAgICovXG4gICAgaW5pdChtb2R1bGU6IHN0cmluZyk6IE9ic2VydmFibGU8U2F2ZWRGaWx0ZXJMaXN0PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCQgPSBzdXBlci5pbml0KHRoaXMubW9kdWxlTmFtZSwgZmFsc2UpO1xuICAgICAgICB0aGlzLmluaXRDcml0ZXJpYShtb2R1bGUpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWQgLyByZWxvYWQgcmVjb3JkcyB1c2luZyBjdXJyZW50IHBhZ2luYXRpb24gYW5kIGNyaXRlcmlhXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHVzZUNhY2hlIGlmIHRvIHVzZSBjYWNoZVxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE9ic2VydmFibGU8UmVjb3JkTGlzdD5cbiAgICAgKi9cbiAgICBsb2FkKHVzZUNhY2hlID0gdHJ1ZSk6IE9ic2VydmFibGU8U2F2ZWRGaWx0ZXJMaXN0PiB7XG4gICAgICAgIHJldHVybiBzdXBlci5sb2FkKHVzZUNhY2hlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgY3VycmVudCBsaXN0IG9mIHNhdmVkIGZpbHRlcnNcbiAgICAgKi9cbiAgICBnZXRGaWx0ZXJzKCk6IFNhdmVkRmlsdGVyW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWNvcmRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXcgZmlsdGVyIHRvIGxpc3RcbiAgICAgKiBAcGFyYW0gZmlsdGVyXG4gICAgICovXG4gICAgYWRkRmlsdGVyKGZpbHRlcjogU2F2ZWRGaWx0ZXIpOiB2b2lkIHtcblxuICAgICAgICBsZXQgaXNOZXcgPSB0cnVlO1xuICAgICAgICBjb25zdCBmaWx0ZXJzID0gdGhpcy5yZWNvcmRzO1xuXG4gICAgICAgIGNvbnN0IG5ld0xpc3QgPSBbXTtcblxuICAgICAgICBmaWx0ZXJzLmZvckVhY2gocmVjb3JkID0+IHtcbiAgICAgICAgICAgIGlmIChyZWNvcmQuaWQgPT09IGZpbHRlci5pZCkge1xuICAgICAgICAgICAgICAgIG5ld0xpc3QucHVzaChmaWx0ZXIpO1xuICAgICAgICAgICAgICAgIGlzTmV3ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuZXdMaXN0LnB1c2gocmVjb3JkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGlzTmV3KSB7XG4gICAgICAgICAgICBuZXdMaXN0LnB1c2goZmlsdGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgICAgICAgLi4udGhpcy5pbnRlcm5hbFN0YXRlLFxuICAgICAgICAgICAgcmVjb3JkczogbmV3TGlzdCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGV4aXN0aW5nIGZpbHRlclxuICAgICAqIEBwYXJhbSBmaWx0ZXJcbiAgICAgKi9cbiAgICByZW1vdmVGaWx0ZXIoZmlsdGVyOiBTYXZlZEZpbHRlcik6IHZvaWQge1xuXG5cbiAgICAgICAgaWYgKCFmaWx0ZXIgfHwgIWZpbHRlci5pZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmlsdGVycyA9IHRoaXMucmVjb3JkcztcblxuICAgICAgICBjb25zdCBuZXdMaXN0ID0gW107XG5cbiAgICAgICAgZmlsdGVycy5mb3JFYWNoKHJlY29yZCA9PiB7XG4gICAgICAgICAgICBpZiAocmVjb3JkLmlkID09PSBmaWx0ZXIuaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5ld0xpc3QucHVzaChyZWNvcmQpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgIC4uLnRoaXMuaW50ZXJuYWxTdGF0ZSxcbiAgICAgICAgICAgIHJlY29yZHM6IG5ld0xpc3QsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgY3JpdGVyaWFcbiAgICAgKiBAcGFyYW0gbW9kdWxlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGluaXRDcml0ZXJpYShtb2R1bGU6IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IGNyaXRlcmlhID0gdGhpcy5jcml0ZXJpYTtcbiAgICAgICAgY3JpdGVyaWEuZmlsdGVyc1t0aGlzLmZpbHRlckZpZWxkcy5tb2R1bGVdID0ge1xuICAgICAgICAgICAgZmllbGQ6IHRoaXMuZmlsdGVyRmllbGRzLm1vZHVsZSxcbiAgICAgICAgICAgIG9wZXJhdG9yOiAnPScsXG4gICAgICAgICAgICB2YWx1ZXM6IFt0aGlzLm1vZHVsZU5hbWVNYXBwZXIudG9MZWdhY3kobW9kdWxlKV1cbiAgICAgICAgfTtcblxuICAgICAgICBjcml0ZXJpYS5maWx0ZXJzW3RoaXMuZmlsdGVyRmllbGRzLnVzZXJdID0ge1xuICAgICAgICAgICAgZmllbGQ6IHRoaXMuZmlsdGVyRmllbGRzLnVzZXIsXG4gICAgICAgICAgICBvcGVyYXRvcjogJz0nLFxuICAgICAgICAgICAgdmFsdWVzOiBbdGhpcy5hdXRoLmdldEN1cnJlbnRVc2VyKCkuaWRdXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy51cGRhdGVTZWFyY2hDcml0ZXJpYShjcml0ZXJpYSwgZmFsc2UpO1xuICAgIH1cblxufVxuIl19