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
import { of } from 'rxjs';
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
        if (!this.configs || !this.preferences) {
            // Defensive fallback to avoid crashing when DI is missing configs
            return of({ records: [], pagination: null, criteria: null });
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWxpc3Quc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc3RvcmUvc2F2ZWQtZmlsdGVycy9maWx0ZXItbGlzdC5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQWEsRUFBRSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRXBDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQzs7Ozs7Ozs7O0FBU2pFLE1BQ2EsZUFBZ0IsU0FBUSxlQUFlO0lBbUJsQztJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQXZCSixVQUFVLEdBQUcsY0FBYyxDQUFDO0lBQzVCLFlBQVksR0FBYztRQUNoQyxNQUFNLEVBQUUsZUFBZTtRQUN2QixJQUFJLEVBQUUsa0JBQWtCO0tBQzNCLENBQUM7SUFFRjs7Ozs7Ozs7O09BU0c7SUFDSCxZQUNjLE9BQXVCLEVBQ3ZCLE9BQTBCLEVBQzFCLFdBQWdDLEVBQ2hDLFFBQXVCLEVBQ3ZCLE9BQXVCLEVBQ3ZCLElBQWlCLEVBQ2pCLGdCQUFrQztRQUU1QyxLQUFLLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBUjlDLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBQzFCLGdCQUFXLEdBQVgsV0FBVyxDQUFxQjtRQUNoQyxhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLFNBQUksR0FBSixJQUFJLENBQWE7UUFDakIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUdoRCxDQUFDO0lBRUQ7OztPQUdHO0lB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QUFJLENBQUMsR0FBRztZQUN2QyxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJO1lBQzdCLFFBQVEsRUFBRSxHQUFHO1lBQ2IsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDMUMsQ0FBQztRQUVGLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDL0MsQ0FBQzt5RUE3SVEsZUFBZTtnRUFBZixlQUFlLFdBQWYsZUFBZTs7U0FBZixlQUFlO3VGQUFmLGVBQWU7Y0FEM0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U3RyaW5nTWFwfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBvZn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoL2F1dGguc2VydmljZSc7XG5pbXBvcnQge1JlY29yZExpc3RTdG9yZX0gZnJvbSAnLi4vcmVjb3JkLWxpc3QvcmVjb3JkLWxpc3Quc3RvcmUnO1xuaW1wb3J0IHtTYXZlZEZpbHRlciwgU2F2ZWRGaWx0ZXJMaXN0fSBmcm9tICcuL3NhdmVkLWZpbHRlci5tb2RlbCc7XG5pbXBvcnQge01vZHVsZU5hbWVNYXBwZXJ9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25hdmlnYXRpb24vbW9kdWxlLW5hbWUtbWFwcGVyL21vZHVsZS1uYW1lLW1hcHBlci5zZXJ2aWNlJztcbmltcG9ydCB7U3lzdGVtQ29uZmlnU3RvcmV9IGZyb20gJy4uL3N5c3RlbS1jb25maWcvc3lzdGVtLWNvbmZpZy5zdG9yZSc7XG5pbXBvcnQge1VzZXJQcmVmZXJlbmNlU3RvcmV9IGZyb20gJy4uL3VzZXItcHJlZmVyZW5jZS91c2VyLXByZWZlcmVuY2Uuc3RvcmUnO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQge0ZpbHRlcnNMaXN0R1FMfSBmcm9tICcuL2dyYXBocWwvYXBpLmxpc3QuZ2V0JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpbHRlckxpc3RTdG9yZSBleHRlbmRzIFJlY29yZExpc3RTdG9yZSB7XG5cbiAgICBwcm90ZWN0ZWQgbW9kdWxlTmFtZSA9ICdzYXZlZC1zZWFyY2gnO1xuICAgIHByb3RlY3RlZCBmaWx0ZXJGaWVsZHM6IFN0cmluZ01hcCA9IHtcbiAgICAgICAgbW9kdWxlOiAnc2VhcmNoX21vZHVsZScsXG4gICAgICAgIHVzZXI6ICdhc3NpZ25lZF91c2VyX2lkJyxcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0gbGlzdEdRTFxuICAgICAqIEBwYXJhbSBjb25maWdzXG4gICAgICogQHBhcmFtIHByZWZlcmVuY2VzXG4gICAgICogQHBhcmFtIGxhbmd1YWdlXG4gICAgICogQHBhcmFtIG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gYXV0aFxuICAgICAqIEBwYXJhbSBtb2R1bGVOYW1lTWFwcGVyXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBsaXN0R1FMOiBGaWx0ZXJzTGlzdEdRTCxcbiAgICAgICAgcHJvdGVjdGVkIGNvbmZpZ3M6IFN5c3RlbUNvbmZpZ1N0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgcHJlZmVyZW5jZXM6IFVzZXJQcmVmZXJlbmNlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBsYW5ndWFnZTogTGFuZ3VhZ2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIG1lc3NhZ2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgYXV0aDogQXV0aFNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBtb2R1bGVOYW1lTWFwcGVyOiBNb2R1bGVOYW1lTWFwcGVyXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKGxpc3RHUUwsIGNvbmZpZ3MsIHByZWZlcmVuY2VzLCBsYW5ndWFnZSwgbWVzc2FnZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSBzdG9yZVxuICAgICAqIEBwYXJhbSBtb2R1bGVcbiAgICAgKi9cbiAgICBpbml0KG1vZHVsZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxTYXZlZEZpbHRlckxpc3Q+IHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZ3MgfHwgIXRoaXMucHJlZmVyZW5jZXMpIHtcbiAgICAgICAgICAgIC8vIERlZmVuc2l2ZSBmYWxsYmFjayB0byBhdm9pZCBjcmFzaGluZyB3aGVuIERJIGlzIG1pc3NpbmcgY29uZmlnc1xuICAgICAgICAgICAgcmV0dXJuIG9mKHtyZWNvcmRzOiBbXSwgcGFnaW5hdGlvbjogbnVsbCwgY3JpdGVyaWE6IG51bGx9IGFzIHVua25vd24gYXMgU2F2ZWRGaWx0ZXJMaXN0KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXN1bHQkID0gc3VwZXIuaW5pdCh0aGlzLm1vZHVsZU5hbWUsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5pbml0Q3JpdGVyaWEobW9kdWxlKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZCAvIHJlbG9hZCByZWNvcmRzIHVzaW5nIGN1cnJlbnQgcGFnaW5hdGlvbiBhbmQgY3JpdGVyaWFcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXNlQ2FjaGUgaWYgdG8gdXNlIGNhY2hlXG4gICAgICogQHJldHVybnMge29iamVjdH0gT2JzZXJ2YWJsZTxSZWNvcmRMaXN0PlxuICAgICAqL1xuICAgIGxvYWQodXNlQ2FjaGUgPSB0cnVlKTogT2JzZXJ2YWJsZTxTYXZlZEZpbHRlckxpc3Q+IHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmxvYWQodXNlQ2FjaGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBjdXJyZW50IGxpc3Qgb2Ygc2F2ZWQgZmlsdGVyc1xuICAgICAqL1xuICAgIGdldEZpbHRlcnMoKTogU2F2ZWRGaWx0ZXJbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlY29yZHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5ldyBmaWx0ZXIgdG8gbGlzdFxuICAgICAqIEBwYXJhbSBmaWx0ZXJcbiAgICAgKi9cbiAgICBhZGRGaWx0ZXIoZmlsdGVyOiBTYXZlZEZpbHRlcik6IHZvaWQge1xuXG4gICAgICAgIGxldCBpc05ldyA9IHRydWU7XG4gICAgICAgIGNvbnN0IGZpbHRlcnMgPSB0aGlzLnJlY29yZHM7XG5cbiAgICAgICAgY29uc3QgbmV3TGlzdCA9IFtdO1xuXG4gICAgICAgIGZpbHRlcnMuZm9yRWFjaChyZWNvcmQgPT4ge1xuICAgICAgICAgICAgaWYgKHJlY29yZC5pZCA9PT0gZmlsdGVyLmlkKSB7XG4gICAgICAgICAgICAgICAgbmV3TGlzdC5wdXNoKGZpbHRlcik7XG4gICAgICAgICAgICAgICAgaXNOZXcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5ld0xpc3QucHVzaChyZWNvcmQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoaXNOZXcpIHtcbiAgICAgICAgICAgIG5ld0xpc3QucHVzaChmaWx0ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICAgICAgICAuLi50aGlzLmludGVybmFsU3RhdGUsXG4gICAgICAgICAgICByZWNvcmRzOiBuZXdMaXN0LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZXhpc3RpbmcgZmlsdGVyXG4gICAgICogQHBhcmFtIGZpbHRlclxuICAgICAqL1xuICAgIHJlbW92ZUZpbHRlcihmaWx0ZXI6IFNhdmVkRmlsdGVyKTogdm9pZCB7XG5cblxuICAgICAgICBpZiAoIWZpbHRlciB8fCAhZmlsdGVyLmlkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmaWx0ZXJzID0gdGhpcy5yZWNvcmRzO1xuXG4gICAgICAgIGNvbnN0IG5ld0xpc3QgPSBbXTtcblxuICAgICAgICBmaWx0ZXJzLmZvckVhY2gocmVjb3JkID0+IHtcbiAgICAgICAgICAgIGlmIChyZWNvcmQuaWQgPT09IGZpbHRlci5pZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmV3TGlzdC5wdXNoKHJlY29yZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgICAgICAgLi4udGhpcy5pbnRlcm5hbFN0YXRlLFxuICAgICAgICAgICAgcmVjb3JkczogbmV3TGlzdCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSBjcml0ZXJpYVxuICAgICAqIEBwYXJhbSBtb2R1bGVcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaW5pdENyaXRlcmlhKG1vZHVsZTogc3RyaW5nKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgY3JpdGVyaWEgPSB0aGlzLmNyaXRlcmlhO1xuICAgICAgICBjcml0ZXJpYS5maWx0ZXJzW3RoaXMuZmlsdGVyRmllbGRzLm1vZHVsZV0gPSB7XG4gICAgICAgICAgICBmaWVsZDogdGhpcy5maWx0ZXJGaWVsZHMubW9kdWxlLFxuICAgICAgICAgICAgb3BlcmF0b3I6ICc9JyxcbiAgICAgICAgICAgIHZhbHVlczogW3RoaXMubW9kdWxlTmFtZU1hcHBlci50b0xlZ2FjeShtb2R1bGUpXVxuICAgICAgICB9O1xuXG4gICAgICAgIGNyaXRlcmlhLmZpbHRlcnNbdGhpcy5maWx0ZXJGaWVsZHMudXNlcl0gPSB7XG4gICAgICAgICAgICBmaWVsZDogdGhpcy5maWx0ZXJGaWVsZHMudXNlcixcbiAgICAgICAgICAgIG9wZXJhdG9yOiAnPScsXG4gICAgICAgICAgICB2YWx1ZXM6IFt0aGlzLmF1dGguZ2V0Q3VycmVudFVzZXIoKS5pZF1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnVwZGF0ZVNlYXJjaENyaXRlcmlhKGNyaXRlcmlhLCBmYWxzZSk7XG4gICAgfVxuXG59XG4iXX0=