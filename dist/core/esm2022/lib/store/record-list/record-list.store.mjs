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
import { deepClone, emptyObject, PageSelection, SelectionStatus, SortDirection } from 'common';
import { BehaviorSubject, combineLatestWith, of } from 'rxjs';
import { catchError, distinctUntilChanged, map, shareReplay, take, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./graphql/api.list.get";
import * as i2 from "../system-config/system-config.store";
import * as i3 from "../user-preference/user-preference.store";
import * as i4 from "../language/language.store";
import * as i5 from "../../services/message/message.service";
const initialFilter = {
    key: 'default',
    module: 'saved-search',
    attributes: {
        contents: ''
    },
    criteria: {
        name: 'default',
        filters: {}
    }
};
const initialFilters = {
    'default': deepClone(initialFilter)
};
const initialSearchCriteria = {
    filters: {}
};
const initialListSort = {
    orderBy: '',
    sortOrder: SortDirection.DESC
};
const initialSelection = {
    all: false,
    status: SelectionStatus.NONE,
    selected: {},
    count: 0
};
const initialState = {
    module: '',
    records: [],
    criteria: deepClone(initialSearchCriteria),
    activeFilters: deepClone(initialFilters),
    sort: deepClone(initialListSort),
    pagination: {
        pageSize: 5,
        current: 0,
        previous: 0,
        next: 5,
        last: 0,
        total: 0,
        pageFirst: 0,
        pageLast: 0
    },
    selection: deepClone(initialSelection),
    openFilter: deepClone(initialFilter),
    loading: false,
    meta: {}
};
class RecordListStore {
    listGQL;
    configStore;
    preferencesStore;
    languageStore;
    message;
    /**
     * Public long-lived observable streams
     */
    records$;
    criteria$;
    sort$;
    pagination$;
    selection$;
    selectedCount$;
    selectedStatus$;
    activeFilters$;
    openFilter$;
    loading$;
    /** Internal Properties */
    cache$ = null;
    internalState = deepClone(initialState);
    store = new BehaviorSubject(this.internalState);
    state$ = this.store.asObservable();
    preferencesSub;
    preferenceKey;
    baseFilter;
    baseFilterMap;
    constructor(listGQL, configStore, preferencesStore, languageStore, message) {
        this.listGQL = listGQL;
        this.configStore = configStore;
        this.preferencesStore = preferencesStore;
        this.languageStore = languageStore;
        this.message = message;
        this.records$ = this.state$.pipe(map(state => state.records), distinctUntilChanged());
        this.criteria$ = this.state$.pipe(map(state => state.criteria), distinctUntilChanged());
        this.sort$ = this.state$.pipe(map(state => state.sort), distinctUntilChanged());
        this.pagination$ = this.state$.pipe(map(state => state.pagination), distinctUntilChanged());
        this.selection$ = this.state$.pipe(map(state => state.selection), distinctUntilChanged());
        this.selectedCount$ = this.state$.pipe(map(state => state.selection.count), distinctUntilChanged());
        this.selectedStatus$ = this.state$.pipe(map(state => state.selection.status), distinctUntilChanged());
        this.activeFilters$ = this.state$.pipe(map(state => state.activeFilters), distinctUntilChanged());
        this.openFilter$ = this.state$.pipe(map(state => state.openFilter), distinctUntilChanged());
        this.loading$ = this.state$.pipe(map(state => state.loading));
    }
    connect() {
        return this.records$;
    }
    disconnect() {
    }
    get criteria() {
        if (!this.internalState.criteria) {
            return deepClone(initialSearchCriteria);
        }
        return deepClone(this.internalState.criteria);
    }
    set criteria(criteria) {
        this.updateState({
            ...this.internalState,
            criteria
        });
    }
    get activeFilters() {
        return deepClone(this.internalState.activeFilters);
    }
    get sort() {
        if (!this.internalState.sort) {
            return deepClone(initialListSort);
        }
        return deepClone(this.internalState.sort);
    }
    set sort(sort) {
        this.updateState({
            ...this.internalState,
            sort
        });
    }
    get selection() {
        if (!this.internalState.selection) {
            return deepClone(initialSelection);
        }
        return deepClone(this.internalState.selection);
    }
    get records() {
        if (!this.internalState.records) {
            return [];
        }
        return this.internalState.records;
    }
    getModule() {
        return this.internalState.module;
    }
    getRecord(id) {
        let record = null;
        this.records.some(item => {
            if (item.id === id) {
                record = item;
                return true;
            }
        });
        return record;
    }
    /**
     * Clean destroy
     */
    destroy() {
        this.clear();
    }
    /**
     * Initial list records load if not cached and update state.
     * Returns observable to be used in resolver if needed
     *
     * @param {string} module to use
     * @param {boolean} load if to load
     * @param {string} pageSizeConfigKey string
     * @param filter
     * @param preferenceKey
     * @returns {object} Observable<any>
     */
    init(module, load = true, pageSizeConfigKey = 'list_max_entries_per_page', filter = deepClone(initialFilter), preferenceKey = '') {
        this.internalState.module = module;
        this.preferenceKey = preferenceKey;
        if (pageSizeConfigKey) {
            this.watchPageSize(pageSizeConfigKey);
        }
        this.setBaseFilter(filter);
        this.loadCurrentFilter(module);
        if (load === false) {
            return null;
        }
        return this.load();
    }
    setBaseFilter(filter) {
        this.baseFilterMap = { 'default': deepClone(filter) };
        this.baseFilter = deepClone(filter);
        this.updateState({ ...this.internalState, activeFilters: deepClone(this.baseFilterMap), openFilter: deepClone(this.baseFilter) });
    }
    /**
     * Load current filter
     * @param module
     * @protected
     */
    loadCurrentFilter(module) {
        const activeFiltersPref = this.loadPreference(module, 'current-filters') ?? this.baseFilterMap;
        if (!activeFiltersPref || emptyObject(activeFiltersPref)) {
            return;
        }
        let currentSort = this.loadPreference(module, 'current-sort');
        if (!currentSort && emptyObject(currentSort)) {
            currentSort = null;
        }
        this.setFilters(activeFiltersPref, false, currentSort);
    }
    /**
     * Set active filters
     *
     * @param {object} filters to set
     * @param {boolean} reload flag
     * @param sort
     */
    setFilters(filters, reload = true, sort = null) {
        const filterKey = Object.keys(filters).shift();
        const filter = filters[filterKey];
        this.updateState({ ...this.internalState, activeFilters: deepClone(filters), openFilter: deepClone(filter) });
        if (filter.criteria) {
            let orderBy = filter.criteria.orderBy ?? '';
            const sortOrder = filter.criteria.sortOrder ?? 'desc';
            let direction = this.mapSortOrder(sortOrder);
            if (sort !== null) {
                orderBy = sort.orderBy;
                direction = sort.sortOrder;
            }
            this.updateSorting(orderBy, direction, false);
            this.updateSortLocalStorage();
            this.updateSearchCriteria(filter.criteria, reload);
        }
        this.updateFilterLocalStorage();
    }
    updateFilterLocalStorage() {
        const module = this.internalState.module;
        this.savePreference(module, 'current-filters', this.internalState.activeFilters);
    }
    updateSortLocalStorage() {
        const module = this.internalState.module;
        this.savePreference(module, 'current-sort', this.sort);
    }
    /**
     * Load / reload records using current pagination and criteria
     *
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<ListViewState>
     */
    load(useCache = true) {
        this.updateState({
            ...this.internalState,
            loading: true
        });
        return this.getRecords(this.internalState.module, this.internalState.criteria, this.internalState.sort, this.internalState.pagination, useCache).pipe(catchError(() => {
            this.message.addDangerMessageByKey('LBL_GET_RECORD_LIST_ERROR');
            return of({
                records: [],
                criteria: deepClone(initialSearchCriteria),
                sort: deepClone(initialListSort),
                pagination: {
                    pageSize: 5,
                    current: 0,
                    previous: 0,
                    next: 5,
                    last: 0,
                    total: 0,
                    pageFirst: 0,
                    pageLast: 0
                },
                openFilter: deepClone(this.baseFilter),
                activeFilters: deepClone(this.baseFilterMap),
                selection: deepClone(initialSelection),
                meta: {}
            });
        }), tap((data) => {
            this.calculatePageCount(data.records, data.pagination);
            this.updateState({
                ...this.internalState,
                records: data.records,
                pagination: data.pagination,
                loading: false,
                meta: data.meta ?? {}
            });
        }));
    }
    /**
     * Update the search criteria
     *
     * @param {object} criteria to set
     * @param {boolean} reload flag
     */
    updateSearchCriteria(criteria, reload = true) {
        this.updateState({ ...this.internalState, criteria });
        if (reload) {
            this.updateSelection(SelectionStatus.NONE);
            // Reset pagination to default first page
            this.resetPagination();
        }
    }
    /**
     * Reset search criteria
     * @param {boolean} reload flag
     */
    resetSearchCriteria(reload = true) {
        this.updateSearchCriteria(deepClone(initialSearchCriteria), reload);
    }
    /**
     * Update current list view sorting
     *
     * @param {string} orderBy to set
     * @param {string} sortOrder to set
     * @param {boolean} reload flag
     */
    updateSorting(orderBy, sortOrder, reload = true) {
        if (sortOrder === SortDirection.NONE) {
            orderBy = '';
            sortOrder = SortDirection.DESC;
        }
        const sort = { orderBy, sortOrder };
        this.updateState({ ...this.internalState, sort });
        if (reload) {
            this.load(false).pipe(take(1)).subscribe();
        }
    }
    /**
     * Map sort order to SortDirection enum
     * @param {string} sortOrder to map
     * @returns {string} SortDirection
     */
    mapSortOrder(sortOrder) {
        let direction = SortDirection.NONE;
        const sort = sortOrder.toLowerCase();
        if (sort === 'asc') {
            direction = SortDirection.ASC;
        }
        else if (sort === 'desc') {
            direction = SortDirection.DESC;
        }
        return direction;
    }
    /**
     * Update the pagination
     *
     * @param {number} current to set
     */
    updatePagination(current) {
        const pagination = { ...this.internalState.pagination, current };
        this.updateState({ ...this.internalState, pagination });
        this.load(false).pipe(take(1)).subscribe();
    }
    /**
     * Set open filters
     *
     * @param {object} filter to set
     */
    setOpenFilter(filter) {
        this.updateState({ ...this.internalState, openFilter: deepClone(filter) });
    }
    /**
     * Reset active filters
     *
     * @param {boolean} reload flag
     */
    resetFilters(reload = true) {
        this.updateState({
            ...this.internalState,
            activeFilters: deepClone(this.baseFilterMap),
            openFilter: deepClone(this.baseFilter),
        });
        this.clearSort();
        this.updateSortLocalStorage();
        this.updateFilterLocalStorage();
        this.updateSearchCriteria(this.baseFilter.criteria, reload);
    }
    /**
     * Save ui user preference
     * @param module
     * @param storageKey
     * @param value
     * @protected
     */
    savePreference(module, storageKey, value) {
        const preferenceKey = this.preferenceKey ?? null;
        if (!preferenceKey) {
            return null;
        }
        const key = `${preferenceKey}${storageKey}`;
        this.preferencesStore.setUi(module, key, value);
    }
    /**
     * Load ui user preference
     * @param module
     * @param storageKey
     * @protected
     */
    loadPreference(module, storageKey) {
        const preferenceKey = this.preferenceKey ?? null;
        if (!preferenceKey) {
            return null;
        }
        const key = `${preferenceKey}${storageKey}`;
        return this.preferencesStore.getUi(module, key);
    }
    /**
     * Reset/Clear the pagination
     */
    resetPagination() {
        this.updatePagination(0);
    }
    /**
     * Clear observable cache
     */
    clear() {
        this.cache$ = null;
        this.store.unsubscribe();
        this.preferencesSub.unsubscribe();
    }
    clearAuthBased() {
        this.clear();
    }
    /**
     * Selection public api
     */
    getSelectionStatus() {
        return this.selectedStatus$;
    }
    getSelectedCount() {
        return this.selectedCount$;
    }
    updateSelection(state) {
        if (state === SelectionStatus.NONE) {
            this.clearSelection();
            return;
        }
        if (state === SelectionStatus.ALL) {
            this.selectAll();
            return;
        }
        if (state === SelectionStatus.PAGE) {
            this.selectPage();
            return;
        }
    }
    clearSelection() {
        this.updateState({
            ...this.internalState,
            selection: deepClone(initialSelection)
        });
    }
    clearSort() {
        this.updateState({
            ...this.internalState,
            sort: deepClone(initialListSort)
        });
    }
    selectAll() {
        const total = this.internalState.pagination.total;
        this.updateState({
            ...this.internalState,
            selection: {
                all: true,
                status: SelectionStatus.ALL,
                selected: {},
                count: total
            }
        });
    }
    selectPage() {
        const selected = { ...this.internalState.selection.selected };
        if (this.internalState.records && this.internalState.records.length) {
            this.internalState.records.forEach(value => {
                if (value && value.id) {
                    selected[value.id] = value.id;
                }
            });
        }
        this.updateState({
            ...this.internalState,
            selection: {
                all: false,
                status: SelectionStatus.SOME,
                selected,
                count: Object.keys(selected).length
            }
        });
    }
    toggleSelection(id) {
        const selection = deepClone(this.internalState.selection);
        if (selection.selected[id]) {
            delete selection.selected[id];
        }
        else {
            selection.selected[id] = id;
        }
        selection.count = Object.keys(selection.selected).length;
        if (selection.count === 0) {
            selection.status = SelectionStatus.NONE;
        }
        else {
            selection.status = SelectionStatus.SOME;
        }
        this.updateState({
            ...this.internalState,
            selection
        });
    }
    /**
     * Pagination Public API
     */
    getPaginationCount() {
        return this.pagination$.pipe(map(pagination => ({
            pageFirst: pagination.pageFirst,
            pageLast: pagination.pageLast,
            total: pagination.total
        })), distinctUntilChanged());
    }
    getPagination() {
        return this.store.value.pagination;
    }
    getMeta() {
        return this.store.value.meta;
    }
    changePage(page) {
        let pageToLoad = 0;
        const pageMap = {};
        pageMap[PageSelection.FIRST] = 0;
        pageMap[PageSelection.PREVIOUS] = this.internalState.pagination.previous;
        pageMap[PageSelection.NEXT] = this.internalState.pagination.next;
        pageMap[PageSelection.LAST] = this.internalState.pagination.last;
        if (page in pageMap && pageMap[page] >= 0) {
            pageToLoad = pageMap[page];
            if (Number(pageToLoad) > this.internalState.pagination.last) {
                return;
            }
            if (pageToLoad < 0) {
                return;
            }
            this.updatePagination(pageToLoad);
        }
    }
    /**
     * Set Pagination page size
     *
     * @param {number} pageSize to set
     */
    setPageSize(pageSize) {
        const pagination = { ...this.internalState.pagination, pageSize };
        this.updateState({ ...this.internalState, pagination });
    }
    /**
     * Get Pagination page size
     */
    getPageSize() {
        return this?.internalState?.pagination?.pageSize ?? 10;
    }
    /**
     * Internal API
     */
    /**
     * Subscribe to page size changes
     *
     * @param {string} pageSizeConfigKey key
     */
    watchPageSize(pageSizeConfigKey) {
        const pageSizePreference = this.preferencesStore.getUserPreference(pageSizeConfigKey);
        const pageSizeConfig = this.configStore.getConfigValue(pageSizeConfigKey);
        this.determinePageSize(pageSizePreference, pageSizeConfig);
        this.preferencesSub = this.configStore.configs$.pipe(combineLatestWith(this.preferencesStore.userPreferences$), tap(([configs, preferences]) => {
            const key = pageSizeConfigKey;
            const sizePreference = (preferences && preferences[key]) || null;
            const sizeConfig = (configs && configs[key] && configs[key].value) || null;
            this.determinePageSize(sizePreference, sizeConfig);
        })).subscribe();
    }
    /**
     * Determine page size to use
     *
     * @param {} pageSizePreference to use
     * @param {string} pageSizeConfig to use
     */
    determinePageSize(pageSizePreference, pageSizeConfig) {
        let size = 20;
        if (pageSizePreference) {
            size = pageSizePreference;
        }
        else if (pageSizeConfig) {
            size = parseInt(pageSizeConfig, 10);
        }
        this.setPageSize(size);
    }
    /**
     * Update the state
     *
     * @param {object} state to set
     */
    updateState(state) {
        this.store.next(this.internalState = state);
    }
    /**
     * Calculate page count
     *
     * @param {object} records list
     * @param {object} pagination info
     */
    calculatePageCount(records, pagination) {
        const recordCount = (records && records.length) || 0;
        let pageFirst = 0;
        let pageLast = 0;
        if (recordCount > 0) {
            pageFirst = pagination.current + 1;
            pageLast = pagination.current + recordCount;
        }
        pagination.pageFirst = pageFirst;
        pagination.pageLast = pageLast;
    }
    /**
     * Get records cached Observable or call the backend
     *
     * @param {string} module to use
     * @param {object} criteria to use
     * @param {object} sort to use
     * @param {object} pagination to use
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<any>
     */
    getRecords(module, criteria, sort, pagination, useCache = true) {
        if (this.cache$ == null || useCache === false) {
            this.cache$ = this.listGQL.get(module, criteria, sort, pagination).pipe(shareReplay(1));
        }
        return this.cache$;
    }
    static ɵfac = function RecordListStore_Factory(t) { return new (t || RecordListStore)(i0.ɵɵinject(i1.ListGQL), i0.ɵɵinject(i2.SystemConfigStore), i0.ɵɵinject(i3.UserPreferenceStore), i0.ɵɵinject(i4.LanguageStore), i0.ɵɵinject(i5.MessageService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordListStore, factory: RecordListStore.ɵfac });
}
export { RecordListStore };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordListStore, [{
        type: Injectable
    }], function () { return [{ type: i1.ListGQL }, { type: i2.SystemConfigStore }, { type: i3.UserPreferenceStore }, { type: i4.LanguageStore }, { type: i5.MessageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLWxpc3Quc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc3RvcmUvcmVjb3JkLWxpc3QvcmVjb3JkLWxpc3Quc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFDSCxTQUFTLEVBQ1QsV0FBVyxFQUVYLGFBQWEsRUFRYixlQUFlLEVBQ2YsYUFBYSxFQUVoQixNQUFNLFFBQVEsQ0FBQztBQUNoQixPQUFPLEVBQUMsZUFBZSxFQUFpQixpQkFBaUIsRUFBYyxFQUFFLEVBQWUsTUFBTSxNQUFNLENBQUM7QUFDckcsT0FBTyxFQUFDLFVBQVUsRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUc3RixPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0FBU3pDLE1BQU0sYUFBYSxHQUFnQjtJQUMvQixHQUFHLEVBQUUsU0FBUztJQUNkLE1BQU0sRUFBRSxjQUFjO0lBQ3RCLFVBQVUsRUFBRTtRQUNSLFFBQVEsRUFBRSxFQUFFO0tBQ2Y7SUFDRCxRQUFRLEVBQUU7UUFDTixJQUFJLEVBQUUsU0FBUztRQUNmLE9BQU8sRUFBRSxFQUFFO0tBQ2Q7Q0FDSixDQUFDO0FBRUYsTUFBTSxjQUFjLEdBQW1CO0lBQ25DLFNBQVMsRUFBRSxTQUFTLENBQUMsYUFBYSxDQUFDO0NBQ3RDLENBQUM7QUFFRixNQUFNLHFCQUFxQixHQUFHO0lBQzFCLE9BQU8sRUFBRSxFQUFFO0NBQ2QsQ0FBQztBQUVGLE1BQU0sZUFBZSxHQUFHO0lBQ3BCLE9BQU8sRUFBRSxFQUFFO0lBQ1gsU0FBUyxFQUFFLGFBQWEsQ0FBQyxJQUFJO0NBQ2hDLENBQUM7QUFFRixNQUFNLGdCQUFnQixHQUFvQjtJQUN0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Q08sVUFBVSxDQUNoQixNQUFjLEVBQ2QsUUFBd0IsRUFDeEIsSUFBc0IsRUFDdEIsVUFBc0IsRUFDdEIsUUFBUSxHQUFHLElBQUk7UUFHZixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxJQUFJLFFBQVEsS0FBSyxLQUFLLEVBQUU7WUFDM0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQ25FLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FDakIsQ0FBQztTQUNMO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7eUVBbHNCUSxlQUFlO2dFQUFmLGVBQWUsV0FBZixlQUFlOztTQUFmLGVBQWU7dUZBQWYsZUFBZTtjQUQzQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge1xuICAgIGRlZXBDbG9uZSxcbiAgICBlbXB0eU9iamVjdCxcbiAgICBPYmplY3RNYXAsXG4gICAgUGFnZVNlbGVjdGlvbixcbiAgICBQYWdpbmF0aW9uLFxuICAgIFBhZ2luYXRpb25Db3VudCxcbiAgICBQYWdpbmF0aW9uRGF0YVNvdXJjZSxcbiAgICBSZWNvcmQsXG4gICAgUmVjb3JkU2VsZWN0aW9uLFxuICAgIFNlYXJjaENyaXRlcmlhLFxuICAgIFNlbGVjdGlvbkRhdGFTb3VyY2UsXG4gICAgU2VsZWN0aW9uU3RhdHVzLFxuICAgIFNvcnREaXJlY3Rpb24sXG4gICAgU29ydGluZ1NlbGVjdGlvblxufSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIGNvbWJpbmVMYXRlc3QsIGNvbWJpbmVMYXRlc3RXaXRoLCBPYnNlcnZhYmxlLCBvZiwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7Y2F0Y2hFcnJvciwgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCwgc2hhcmVSZXBsYXksIHRha2UsIHRhcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtTdGF0ZVN0b3JlfSBmcm9tICcuLi9zdGF0ZSc7XG5pbXBvcnQge0RhdGFTb3VyY2V9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtMaXN0R1FMfSBmcm9tICcuL2dyYXBocWwvYXBpLmxpc3QuZ2V0JztcbmltcG9ydCB7U3lzdGVtQ29uZmlnTWFwLCBTeXN0ZW1Db25maWdTdG9yZX0gZnJvbSAnLi4vc3lzdGVtLWNvbmZpZy9zeXN0ZW0tY29uZmlnLnN0b3JlJztcbmltcG9ydCB7VXNlclByZWZlcmVuY2VzLCBVc2VyUHJlZmVyZW5jZVN0b3JlfSBmcm9tICcuLi91c2VyLXByZWZlcmVuY2UvdXNlci1wcmVmZXJlbmNlLnN0b3JlJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvbWVzc2FnZS9tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHtTYXZlZEZpbHRlciwgU2F2ZWRGaWx0ZXJNYXB9IGZyb20gXCIuLi9zYXZlZC1maWx0ZXJzL3NhdmVkLWZpbHRlci5tb2RlbFwiO1xuXG5cbmNvbnN0IGluaXRpYWxGaWx0ZXI6IFNhdmVkRmlsdGVyID0ge1xuICAgIGtleTogJ2RlZmF1bHQnLFxuICAgIG1vZHVsZTogJ3NhdmVkLXNlYXJjaCcsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgICBjb250ZW50czogJydcbiAgICB9LFxuICAgIGNyaXRlcmlhOiB7XG4gICAgICAgIG5hbWU6ICdkZWZhdWx0JyxcbiAgICAgICAgZmlsdGVyczoge31cbiAgICB9XG59O1xuXG5jb25zdCBpbml0aWFsRmlsdGVyczogU2F2ZWRGaWx0ZXJNYXAgPSB7XG4gICAgJ2RlZmF1bHQnOiBkZWVwQ2xvbmUoaW5pdGlhbEZpbHRlcilcbn07XG5cbmNvbnN0IGluaXRpYWxTZWFyY2hDcml0ZXJpYSA9IHtcbiAgICBmaWx0ZXJzOiB7fVxufTtcblxuY29uc3QgaW5pdGlhbExpc3RTb3J0ID0ge1xuICAgIG9yZGVyQnk6ICcnLFxuICAgIHNvcnRPcmRlcjogU29ydERpcmVjdGlvbi5ERVNDXG59O1xuXG5jb25zdCBpbml0aWFsU2VsZWN0aW9uOiBSZWNvcmRTZWxlY3Rpb24gPSB7XG4gICAgYWxsOiBmYWxzZSxcbiAgICBzdGF0dXM6IFNlbGVjdGlvblN0YXR1cy5OT05FLFxuICAgIHNlbGVjdGVkOiB7fSxcbiAgICBjb3VudDogMFxufTtcblxuXG5leHBvcnQgaW50ZXJmYWNlIFJlY29yZExpc3Qge1xuICAgIHJlY29yZHM6IFJlY29yZFtdO1xuICAgIHBhZ2luYXRpb24/OiBQYWdpbmF0aW9uO1xuICAgIGNyaXRlcmlhPzogU2VhcmNoQ3JpdGVyaWE7XG4gICAgYWN0aXZlRmlsdGVycz86IFNhdmVkRmlsdGVyTWFwLFxuICAgIG9wZW5GaWx0ZXI/OiBTYXZlZEZpbHRlcjtcbiAgICBzb3J0PzogU29ydGluZ1NlbGVjdGlvbjtcbiAgICBtZXRhPzogT2JqZWN0TWFwO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlY29yZExpc3RTdGF0ZSB7XG4gICAgbW9kdWxlOiBzdHJpbmc7XG4gICAgcmVjb3JkczogUmVjb3JkW107XG4gICAgcGFnaW5hdGlvbj86IFBhZ2luYXRpb247XG4gICAgY3JpdGVyaWE/OiBTZWFyY2hDcml0ZXJpYTtcbiAgICBzb3J0PzogU29ydGluZ1NlbGVjdGlvbjtcbiAgICBzZWxlY3Rpb246IFJlY29yZFNlbGVjdGlvbjtcbiAgICBhY3RpdmVGaWx0ZXJzPzogU2F2ZWRGaWx0ZXJNYXAsXG4gICAgb3BlbkZpbHRlcj86IFNhdmVkRmlsdGVyO1xuICAgIGxvYWRpbmc6IGJvb2xlYW47XG4gICAgbWV0YT86IE9iamVjdE1hcDtcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBSZWNvcmRMaXN0U3RhdGUgPSB7XG4gICAgbW9kdWxlOiAnJyxcbiAgICByZWNvcmRzOiBbXSxcbiAgICBjcml0ZXJpYTogZGVlcENsb25lKGluaXRpYWxTZWFyY2hDcml0ZXJpYSksXG4gICAgYWN0aXZlRmlsdGVyczogZGVlcENsb25lKGluaXRpYWxGaWx0ZXJzKSxcbiAgICBzb3J0OiBkZWVwQ2xvbmUoaW5pdGlhbExpc3RTb3J0KSxcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIHBhZ2VTaXplOiA1LFxuICAgICAgICBjdXJyZW50OiAwLFxuICAgICAgICBwcmV2aW91czogMCxcbiAgICAgICAgbmV4dDogNSxcbiAgICAgICAgbGFzdDogMCxcbiAgICAgICAgdG90YWw6IDAsXG4gICAgICAgIHBhZ2VGaXJzdDogMCxcbiAgICAgICAgcGFnZUxhc3Q6IDBcbiAgICB9LFxuICAgIHNlbGVjdGlvbjogZGVlcENsb25lKGluaXRpYWxTZWxlY3Rpb24pLFxuICAgIG9wZW5GaWx0ZXI6IGRlZXBDbG9uZShpbml0aWFsRmlsdGVyKSxcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBtZXRhOiB7fVxufTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlY29yZExpc3RTdG9yZSBpbXBsZW1lbnRzIFN0YXRlU3RvcmUsIERhdGFTb3VyY2U8UmVjb3JkPiwgU2VsZWN0aW9uRGF0YVNvdXJjZSwgUGFnaW5hdGlvbkRhdGFTb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogUHVibGljIGxvbmctbGl2ZWQgb2JzZXJ2YWJsZSBzdHJlYW1zXG4gICAgICovXG4gICAgcmVjb3JkcyQ6IE9ic2VydmFibGU8UmVjb3JkW10+O1xuICAgIGNyaXRlcmlhJDogT2JzZXJ2YWJsZTxTZWFyY2hDcml0ZXJpYT47XG4gICAgc29ydCQ6IE9ic2VydmFibGU8U29ydGluZ1NlbGVjdGlvbj47XG4gICAgcGFnaW5hdGlvbiQ6IE9ic2VydmFibGU8UGFnaW5hdGlvbj47XG4gICAgc2VsZWN0aW9uJDogT2JzZXJ2YWJsZTxSZWNvcmRTZWxlY3Rpb24+O1xuICAgIHNlbGVjdGVkQ291bnQkOiBPYnNlcnZhYmxlPG51bWJlcj47XG4gICAgc2VsZWN0ZWRTdGF0dXMkOiBPYnNlcnZhYmxlPFNlbGVjdGlvblN0YXR1cz47XG4gICAgYWN0aXZlRmlsdGVycyQ6IE9ic2VydmFibGU8U2F2ZWRGaWx0ZXJNYXA+O1xuICAgIG9wZW5GaWx0ZXIkOiBPYnNlcnZhYmxlPFNhdmVkRmlsdGVyPjtcbiAgICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICAgIC8qKiBJbnRlcm5hbCBQcm9wZXJ0aWVzICovXG4gICAgcHJvdGVjdGVkIGNhY2hlJDogT2JzZXJ2YWJsZTxhbnk+ID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgaW50ZXJuYWxTdGF0ZTogUmVjb3JkTGlzdFN0YXRlID0gZGVlcENsb25lKGluaXRpYWxTdGF0ZSk7XG4gICAgcHJvdGVjdGVkIHN0b3JlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxSZWNvcmRMaXN0U3RhdGU+KHRoaXMuaW50ZXJuYWxTdGF0ZSk7XG4gICAgcHJvdGVjdGVkIHN0YXRlJCA9IHRoaXMuc3RvcmUuYXNPYnNlcnZhYmxlKCk7XG4gICAgcHJvdGVjdGVkIHByZWZlcmVuY2VzU3ViOiBTdWJzY3JpcHRpb247XG5cbiAgICBwcmVmZXJlbmNlS2V5OiBzdHJpbmc7XG4gICAgYmFzZUZpbHRlcjogU2F2ZWRGaWx0ZXI7XG4gICAgYmFzZUZpbHRlck1hcDogU2F2ZWRGaWx0ZXJNYXA7XG5cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgbGlzdEdRTDogTGlzdEdRTCxcbiAgICAgICAgcHJvdGVjdGVkIGNvbmZpZ1N0b3JlOiBTeXN0ZW1Db25maWdTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHByZWZlcmVuY2VzU3RvcmU6IFVzZXJQcmVmZXJlbmNlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBsYW5ndWFnZVN0b3JlOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbWVzc2FnZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgKSB7XG4gICAgICAgIHRoaXMucmVjb3JkcyQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5yZWNvcmRzKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMuY3JpdGVyaWEkID0gdGhpcy5zdGF0ZSQucGlwZShtYXAoc3RhdGUgPT4gc3RhdGUuY3JpdGVyaWEpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgICAgICAgdGhpcy5zb3J0JCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLnNvcnQpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uJCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLnBhZ2luYXRpb24pLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24kID0gdGhpcy5zdGF0ZSQucGlwZShtYXAoc3RhdGUgPT4gc3RhdGUuc2VsZWN0aW9uKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDb3VudCQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5zZWxlY3Rpb24uY291bnQpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFN0YXR1cyQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5zZWxlY3Rpb24uc3RhdHVzKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMuYWN0aXZlRmlsdGVycyQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5hY3RpdmVGaWx0ZXJzKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMub3BlbkZpbHRlciQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5vcGVuRmlsdGVyKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMubG9hZGluZyQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5sb2FkaW5nKSk7XG4gICAgfVxuXG4gICAgY29ubmVjdCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWNvcmRzJDtcbiAgICB9XG5cbiAgICBkaXNjb25uZWN0KCk6IHZvaWQge1xuICAgIH1cblxuICAgIGdldCBjcml0ZXJpYSgpOiBTZWFyY2hDcml0ZXJpYSB7XG4gICAgICAgIGlmICghdGhpcy5pbnRlcm5hbFN0YXRlLmNyaXRlcmlhKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVlcENsb25lKGluaXRpYWxTZWFyY2hDcml0ZXJpYSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGVlcENsb25lKHRoaXMuaW50ZXJuYWxTdGF0ZS5jcml0ZXJpYSk7XG4gICAgfVxuXG4gICAgc2V0IGNyaXRlcmlhKGNyaXRlcmlhOiBTZWFyY2hDcml0ZXJpYSkge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgIC4uLnRoaXMuaW50ZXJuYWxTdGF0ZSxcbiAgICAgICAgICAgIGNyaXRlcmlhXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldCBhY3RpdmVGaWx0ZXJzKCk6IFNhdmVkRmlsdGVyTWFwIHtcbiAgICAgICAgcmV0dXJuIGRlZXBDbG9uZSh0aGlzLmludGVybmFsU3RhdGUuYWN0aXZlRmlsdGVycyk7XG4gICAgfVxuXG4gICAgZ2V0IHNvcnQoKTogU29ydGluZ1NlbGVjdGlvbiB7XG4gICAgICAgIGlmICghdGhpcy5pbnRlcm5hbFN0YXRlLnNvcnQpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWVwQ2xvbmUoaW5pdGlhbExpc3RTb3J0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkZWVwQ2xvbmUodGhpcy5pbnRlcm5hbFN0YXRlLnNvcnQpO1xuICAgIH1cblxuICAgIHNldCBzb3J0KHNvcnQ6IFNvcnRpbmdTZWxlY3Rpb24pIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICAgICAgICAuLi50aGlzLmludGVybmFsU3RhdGUsXG4gICAgICAgICAgICBzb3J0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldCBzZWxlY3Rpb24oKTogUmVjb3JkU2VsZWN0aW9uIHtcbiAgICAgICAgaWYgKCF0aGlzLmludGVybmFsU3RhdGUuc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVlcENsb25lKGluaXRpYWxTZWxlY3Rpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRlZXBDbG9uZSh0aGlzLmludGVybmFsU3RhdGUuc2VsZWN0aW9uKTtcbiAgICB9XG5cbiAgICBnZXQgcmVjb3JkcygpOiBSZWNvcmRbXSB7XG4gICAgICAgIGlmICghdGhpcy5pbnRlcm5hbFN0YXRlLnJlY29yZHMpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsU3RhdGUucmVjb3JkcztcbiAgICB9XG5cbiAgICBnZXRNb2R1bGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxTdGF0ZS5tb2R1bGU7XG4gICAgfVxuXG4gICAgZ2V0UmVjb3JkKGlkOiBzdHJpbmcpOiBSZWNvcmQge1xuICAgICAgICBsZXQgcmVjb3JkOiBSZWNvcmQgPSBudWxsO1xuICAgICAgICB0aGlzLnJlY29yZHMuc29tZShpdGVtID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIHJlY29yZCA9IGl0ZW07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZWNvcmQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYW4gZGVzdHJveVxuICAgICAqL1xuICAgIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbCBsaXN0IHJlY29yZHMgbG9hZCBpZiBub3QgY2FjaGVkIGFuZCB1cGRhdGUgc3RhdGUuXG4gICAgICogUmV0dXJucyBvYnNlcnZhYmxlIHRvIGJlIHVzZWQgaW4gcmVzb2x2ZXIgaWYgbmVlZGVkXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kdWxlIHRvIHVzZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbG9hZCBpZiB0byBsb2FkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhZ2VTaXplQ29uZmlnS2V5IHN0cmluZ1xuICAgICAqIEBwYXJhbSBmaWx0ZXJcbiAgICAgKiBAcGFyYW0gcHJlZmVyZW5jZUtleVxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE9ic2VydmFibGU8YW55PlxuICAgICAqL1xuICAgIHB1YmxpYyBpbml0KG1vZHVsZTogc3RyaW5nLCBsb2FkID0gdHJ1ZSwgcGFnZVNpemVDb25maWdLZXkgPSAnbGlzdF9tYXhfZW50cmllc19wZXJfcGFnZScsIGZpbHRlciA9IGRlZXBDbG9uZShpbml0aWFsRmlsdGVyKSwgcHJlZmVyZW5jZUtleSA9ICcnKTogT2JzZXJ2YWJsZTxSZWNvcmRMaXN0PiB7XG4gICAgICAgIHRoaXMuaW50ZXJuYWxTdGF0ZS5tb2R1bGUgPSBtb2R1bGU7XG4gICAgICAgIHRoaXMucHJlZmVyZW5jZUtleSA9IHByZWZlcmVuY2VLZXk7XG5cbiAgICAgICAgaWYgKHBhZ2VTaXplQ29uZmlnS2V5KSB7XG4gICAgICAgICAgICB0aGlzLndhdGNoUGFnZVNpemUocGFnZVNpemVDb25maWdLZXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0QmFzZUZpbHRlcihmaWx0ZXIpO1xuICAgICAgICB0aGlzLmxvYWRDdXJyZW50RmlsdGVyKG1vZHVsZSk7XG5cbiAgICAgICAgaWYgKGxvYWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmxvYWQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0QmFzZUZpbHRlcihmaWx0ZXIpIHtcblxuICAgICAgICB0aGlzLmJhc2VGaWx0ZXJNYXAgPSB7J2RlZmF1bHQnOiBkZWVwQ2xvbmUoZmlsdGVyKX07XG4gICAgICAgIHRoaXMuYmFzZUZpbHRlciA9IGRlZXBDbG9uZShmaWx0ZXIpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoey4uLnRoaXMuaW50ZXJuYWxTdGF0ZSwgYWN0aXZlRmlsdGVyczogZGVlcENsb25lKHRoaXMuYmFzZUZpbHRlck1hcCksIG9wZW5GaWx0ZXI6IGRlZXBDbG9uZSh0aGlzLmJhc2VGaWx0ZXIpfSk7XG5cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWQgY3VycmVudCBmaWx0ZXJcbiAgICAgKiBAcGFyYW0gbW9kdWxlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHB1YmxpYyBsb2FkQ3VycmVudEZpbHRlcihtb2R1bGU6IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IGFjdGl2ZUZpbHRlcnNQcmVmID0gdGhpcy5sb2FkUHJlZmVyZW5jZShtb2R1bGUsICdjdXJyZW50LWZpbHRlcnMnKSA/PyB0aGlzLmJhc2VGaWx0ZXJNYXA7XG5cbiAgICAgICAgaWYgKCFhY3RpdmVGaWx0ZXJzUHJlZiB8fCBlbXB0eU9iamVjdChhY3RpdmVGaWx0ZXJzUHJlZikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjdXJyZW50U29ydCA9IHRoaXMubG9hZFByZWZlcmVuY2UobW9kdWxlLCAnY3VycmVudC1zb3J0JykgYXMgU29ydGluZ1NlbGVjdGlvbjtcbiAgICAgICAgaWYgKCFjdXJyZW50U29ydCAmJiBlbXB0eU9iamVjdChjdXJyZW50U29ydCkpIHtcbiAgICAgICAgICAgIGN1cnJlbnRTb3J0ID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0RmlsdGVycyhhY3RpdmVGaWx0ZXJzUHJlZiwgZmFsc2UsIGN1cnJlbnRTb3J0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgYWN0aXZlIGZpbHRlcnNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBmaWx0ZXJzIHRvIHNldFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVsb2FkIGZsYWdcbiAgICAgKiBAcGFyYW0gc29ydFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRGaWx0ZXJzKGZpbHRlcnM6IFNhdmVkRmlsdGVyTWFwLCByZWxvYWQgPSB0cnVlLCBzb3J0OiBTb3J0aW5nU2VsZWN0aW9uID0gbnVsbCk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IGZpbHRlcktleSA9IE9iamVjdC5rZXlzKGZpbHRlcnMpLnNoaWZ0KCk7XG4gICAgICAgIGNvbnN0IGZpbHRlciA9IGZpbHRlcnNbZmlsdGVyS2V5XTtcblxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHsuLi50aGlzLmludGVybmFsU3RhdGUsIGFjdGl2ZUZpbHRlcnM6IGRlZXBDbG9uZShmaWx0ZXJzKSwgb3BlbkZpbHRlcjogZGVlcENsb25lKGZpbHRlcil9KTtcblxuICAgICAgICBpZiAoZmlsdGVyLmNyaXRlcmlhKSB7XG4gICAgICAgICAgICBsZXQgb3JkZXJCeSA9IGZpbHRlci5jcml0ZXJpYS5vcmRlckJ5ID8/ICcnO1xuICAgICAgICAgICAgY29uc3Qgc29ydE9yZGVyID0gZmlsdGVyLmNyaXRlcmlhLnNvcnRPcmRlciA/PyAnZGVzYyc7XG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9uID0gdGhpcy5tYXBTb3J0T3JkZXIoc29ydE9yZGVyKTtcblxuICAgICAgICAgICAgaWYgKHNvcnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBvcmRlckJ5ID0gc29ydC5vcmRlckJ5O1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9IHNvcnQuc29ydE9yZGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNvcnRpbmcob3JkZXJCeSwgZGlyZWN0aW9uLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNvcnRMb2NhbFN0b3JhZ2UoKTtcblxuICAgICAgICAgICAgdGhpcy51cGRhdGVTZWFyY2hDcml0ZXJpYShmaWx0ZXIuY3JpdGVyaWEsIHJlbG9hZCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZUZpbHRlckxvY2FsU3RvcmFnZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVGaWx0ZXJMb2NhbFN0b3JhZ2UoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IHRoaXMuaW50ZXJuYWxTdGF0ZS5tb2R1bGU7XG5cbiAgICAgICAgdGhpcy5zYXZlUHJlZmVyZW5jZShtb2R1bGUsICdjdXJyZW50LWZpbHRlcnMnLCB0aGlzLmludGVybmFsU3RhdGUuYWN0aXZlRmlsdGVycyk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZVNvcnRMb2NhbFN0b3JhZ2UoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IHRoaXMuaW50ZXJuYWxTdGF0ZS5tb2R1bGU7XG5cbiAgICAgICAgdGhpcy5zYXZlUHJlZmVyZW5jZShtb2R1bGUsICdjdXJyZW50LXNvcnQnLCB0aGlzLnNvcnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWQgLyByZWxvYWQgcmVjb3JkcyB1c2luZyBjdXJyZW50IHBhZ2luYXRpb24gYW5kIGNyaXRlcmlhXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHVzZUNhY2hlIGlmIHRvIHVzZSBjYWNoZVxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE9ic2VydmFibGU8TGlzdFZpZXdTdGF0ZT5cbiAgICAgKi9cbiAgICBwdWJsaWMgbG9hZCh1c2VDYWNoZSA9IHRydWUpOiBPYnNlcnZhYmxlPFJlY29yZExpc3Q+IHtcblxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgIC4uLnRoaXMuaW50ZXJuYWxTdGF0ZSxcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmVjb3JkcyhcbiAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxTdGF0ZS5tb2R1bGUsXG4gICAgICAgICAgICB0aGlzLmludGVybmFsU3RhdGUuY3JpdGVyaWEsXG4gICAgICAgICAgICB0aGlzLmludGVybmFsU3RhdGUuc29ydCxcbiAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxTdGF0ZS5wYWdpbmF0aW9uLFxuICAgICAgICAgICAgdXNlQ2FjaGVcbiAgICAgICAgKS5waXBlKFxuICAgICAgICAgICAgY2F0Y2hFcnJvcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlLmFkZERhbmdlck1lc3NhZ2VCeUtleSgnTEJMX0dFVF9SRUNPUkRfTElTVF9FUlJPUicpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvZih7XG4gICAgICAgICAgICAgICAgICAgIHJlY29yZHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICBjcml0ZXJpYTogZGVlcENsb25lKGluaXRpYWxTZWFyY2hDcml0ZXJpYSksXG4gICAgICAgICAgICAgICAgICAgIHNvcnQ6IGRlZXBDbG9uZShpbml0aWFsTGlzdFNvcnQpLFxuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZTogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91czogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ6IDUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWw6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlRmlyc3Q6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlTGFzdDogMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvcGVuRmlsdGVyOiBkZWVwQ2xvbmUodGhpcy5iYXNlRmlsdGVyKSxcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlRmlsdGVyczogZGVlcENsb25lKHRoaXMuYmFzZUZpbHRlck1hcCksXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbjogZGVlcENsb25lKGluaXRpYWxTZWxlY3Rpb24pLFxuICAgICAgICAgICAgICAgICAgICBtZXRhOiB7fVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB0YXAoXG4gICAgICAgICAgICAgICAgKGRhdGE6IFJlY29yZExpc3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVQYWdlQ291bnQoZGF0YS5yZWNvcmRzLCBkYXRhLnBhZ2luYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuaW50ZXJuYWxTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY29yZHM6IGRhdGEucmVjb3JkcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IGRhdGEucGFnaW5hdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0YTogZGF0YS5tZXRhID8/IHt9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBzZWFyY2ggY3JpdGVyaWFcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjcml0ZXJpYSB0byBzZXRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlbG9hZCBmbGFnXG4gICAgICovXG4gICAgcHVibGljIHVwZGF0ZVNlYXJjaENyaXRlcmlhKGNyaXRlcmlhOiBTZWFyY2hDcml0ZXJpYSwgcmVsb2FkID0gdHJ1ZSk6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHsuLi50aGlzLmludGVybmFsU3RhdGUsIGNyaXRlcmlhfSk7XG5cbiAgICAgICAgaWYgKHJlbG9hZCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTZWxlY3Rpb24oU2VsZWN0aW9uU3RhdHVzLk5PTkUpO1xuICAgICAgICAgICAgLy8gUmVzZXQgcGFnaW5hdGlvbiB0byBkZWZhdWx0IGZpcnN0IHBhZ2VcbiAgICAgICAgICAgIHRoaXMucmVzZXRQYWdpbmF0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCBzZWFyY2ggY3JpdGVyaWFcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlbG9hZCBmbGFnXG4gICAgICovXG4gICAgcHVibGljIHJlc2V0U2VhcmNoQ3JpdGVyaWEocmVsb2FkID0gdHJ1ZSk6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVNlYXJjaENyaXRlcmlhKGRlZXBDbG9uZShpbml0aWFsU2VhcmNoQ3JpdGVyaWEpLCByZWxvYWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBjdXJyZW50IGxpc3QgdmlldyBzb3J0aW5nXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3JkZXJCeSB0byBzZXRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc29ydE9yZGVyIHRvIHNldFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVsb2FkIGZsYWdcbiAgICAgKi9cbiAgICB1cGRhdGVTb3J0aW5nKG9yZGVyQnk6IHN0cmluZywgc29ydE9yZGVyOiBTb3J0RGlyZWN0aW9uLCByZWxvYWQgPSB0cnVlKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKHNvcnRPcmRlciA9PT0gU29ydERpcmVjdGlvbi5OT05FKSB7XG4gICAgICAgICAgICBvcmRlckJ5ID0gJyc7XG4gICAgICAgICAgICBzb3J0T3JkZXIgPSBTb3J0RGlyZWN0aW9uLkRFU0M7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzb3J0ID0ge29yZGVyQnksIHNvcnRPcmRlcn0gYXMgU29ydGluZ1NlbGVjdGlvbjtcblxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHsuLi50aGlzLmludGVybmFsU3RhdGUsIHNvcnR9KTtcblxuICAgICAgICBpZiAocmVsb2FkKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWQoZmFsc2UpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYXAgc29ydCBvcmRlciB0byBTb3J0RGlyZWN0aW9uIGVudW1cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc29ydE9yZGVyIHRvIG1hcFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IFNvcnREaXJlY3Rpb25cbiAgICAgKi9cbiAgICBwdWJsaWMgbWFwU29ydE9yZGVyKHNvcnRPcmRlcjogc3RyaW5nKTogU29ydERpcmVjdGlvbiB7XG4gICAgICAgIGxldCBkaXJlY3Rpb24gPSBTb3J0RGlyZWN0aW9uLk5PTkU7XG4gICAgICAgIGNvbnN0IHNvcnQgPSBzb3J0T3JkZXIudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICBpZiAoc29ydCA9PT0gJ2FzYycpIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IFNvcnREaXJlY3Rpb24uQVNDXG4gICAgICAgIH0gZWxzZSBpZiAoc29ydCA9PT0gJ2Rlc2MnKSB7XG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBTb3J0RGlyZWN0aW9uLkRFU0NcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkaXJlY3Rpb247XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBwYWdpbmF0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY3VycmVudCB0byBzZXRcbiAgICAgKi9cbiAgICBwdWJsaWMgdXBkYXRlUGFnaW5hdGlvbihjdXJyZW50OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcGFnaW5hdGlvbiA9IHsuLi50aGlzLmludGVybmFsU3RhdGUucGFnaW5hdGlvbiwgY3VycmVudH07XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoey4uLnRoaXMuaW50ZXJuYWxTdGF0ZSwgcGFnaW5hdGlvbn0pO1xuXG4gICAgICAgIHRoaXMubG9hZChmYWxzZSkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgb3BlbiBmaWx0ZXJzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZmlsdGVyIHRvIHNldFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRPcGVuRmlsdGVyKGZpbHRlcjogU2F2ZWRGaWx0ZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7Li4udGhpcy5pbnRlcm5hbFN0YXRlLCBvcGVuRmlsdGVyOiBkZWVwQ2xvbmUoZmlsdGVyKX0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0IGFjdGl2ZSBmaWx0ZXJzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlbG9hZCBmbGFnXG4gICAgICovXG4gICAgcHVibGljIHJlc2V0RmlsdGVycyhyZWxvYWQgPSB0cnVlKTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICAgICAgICAuLi50aGlzLmludGVybmFsU3RhdGUsXG4gICAgICAgICAgICBhY3RpdmVGaWx0ZXJzOiBkZWVwQ2xvbmUodGhpcy5iYXNlRmlsdGVyTWFwKSxcbiAgICAgICAgICAgIG9wZW5GaWx0ZXI6IGRlZXBDbG9uZSh0aGlzLmJhc2VGaWx0ZXIpLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNsZWFyU29ydCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNvcnRMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgdGhpcy51cGRhdGVGaWx0ZXJMb2NhbFN0b3JhZ2UoKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZVNlYXJjaENyaXRlcmlhKHRoaXMuYmFzZUZpbHRlci5jcml0ZXJpYSwgcmVsb2FkKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNhdmUgdWkgdXNlciBwcmVmZXJlbmNlXG4gICAgICogQHBhcmFtIG1vZHVsZVxuICAgICAqIEBwYXJhbSBzdG9yYWdlS2V5XG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBzYXZlUHJlZmVyZW5jZShtb2R1bGU6IHN0cmluZywgc3RvcmFnZUtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHByZWZlcmVuY2VLZXkgPSB0aGlzLnByZWZlcmVuY2VLZXkgPz8gbnVsbDtcbiAgICAgICAgaWYgKCFwcmVmZXJlbmNlS2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBrZXkgPSBgJHtwcmVmZXJlbmNlS2V5fSR7c3RvcmFnZUtleX1gO1xuICAgICAgICB0aGlzLnByZWZlcmVuY2VzU3RvcmUuc2V0VWkobW9kdWxlLCBrZXksIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIHVpIHVzZXIgcHJlZmVyZW5jZVxuICAgICAqIEBwYXJhbSBtb2R1bGVcbiAgICAgKiBAcGFyYW0gc3RvcmFnZUtleVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgbG9hZFByZWZlcmVuY2UobW9kdWxlOiBzdHJpbmcsIHN0b3JhZ2VLZXk6IHN0cmluZyk6IGFueSB7XG5cbiAgICAgICAgY29uc3QgcHJlZmVyZW5jZUtleSA9IHRoaXMucHJlZmVyZW5jZUtleSA/PyBudWxsO1xuICAgICAgICBpZiAoIXByZWZlcmVuY2VLZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGtleSA9IGAke3ByZWZlcmVuY2VLZXl9JHtzdG9yYWdlS2V5fWA7XG4gICAgICAgIHJldHVybiB0aGlzLnByZWZlcmVuY2VzU3RvcmUuZ2V0VWkobW9kdWxlLCBrZXkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0L0NsZWFyIHRoZSBwYWdpbmF0aW9uXG4gICAgICovXG4gICAgcHVibGljIHJlc2V0UGFnaW5hdGlvbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVQYWdpbmF0aW9uKDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFyIG9ic2VydmFibGUgY2FjaGVcbiAgICAgKi9cbiAgICBwdWJsaWMgY2xlYXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2FjaGUkID0gbnVsbDtcbiAgICAgICAgdGhpcy5zdG9yZS51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLnByZWZlcmVuY2VzU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyQXV0aEJhc2VkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0aW9uIHB1YmxpYyBhcGlcbiAgICAgKi9cblxuICAgIGdldFNlbGVjdGlvblN0YXR1cygpOiBPYnNlcnZhYmxlPFNlbGVjdGlvblN0YXR1cz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZFN0YXR1cyQ7XG4gICAgfVxuXG4gICAgZ2V0U2VsZWN0ZWRDb3VudCgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZENvdW50JDtcbiAgICB9XG5cbiAgICB1cGRhdGVTZWxlY3Rpb24oc3RhdGU6IFNlbGVjdGlvblN0YXR1cyk6IHZvaWQge1xuICAgICAgICBpZiAoc3RhdGUgPT09IFNlbGVjdGlvblN0YXR1cy5OT05FKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhdGUgPT09IFNlbGVjdGlvblN0YXR1cy5BTEwpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0QWxsKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhdGUgPT09IFNlbGVjdGlvblN0YXR1cy5QQUdFKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdFBhZ2UoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFyU2VsZWN0aW9uKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgIC4uLnRoaXMuaW50ZXJuYWxTdGF0ZSxcbiAgICAgICAgICAgIHNlbGVjdGlvbjogZGVlcENsb25lKGluaXRpYWxTZWxlY3Rpb24pXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsZWFyU29ydCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICAgICAgICAuLi50aGlzLmludGVybmFsU3RhdGUsXG4gICAgICAgICAgICBzb3J0OiBkZWVwQ2xvbmUoaW5pdGlhbExpc3RTb3J0KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZWxlY3RBbGwoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRvdGFsID0gdGhpcy5pbnRlcm5hbFN0YXRlLnBhZ2luYXRpb24udG90YWw7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgICAgICAgLi4udGhpcy5pbnRlcm5hbFN0YXRlLFxuICAgICAgICAgICAgc2VsZWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgYWxsOiB0cnVlLFxuICAgICAgICAgICAgICAgIHN0YXR1czogU2VsZWN0aW9uU3RhdHVzLkFMTCxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDoge30sXG4gICAgICAgICAgICAgICAgY291bnQ6IHRvdGFsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNlbGVjdFBhZ2UoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gey4uLnRoaXMuaW50ZXJuYWxTdGF0ZS5zZWxlY3Rpb24uc2VsZWN0ZWR9O1xuXG4gICAgICAgIGlmICh0aGlzLmludGVybmFsU3RhdGUucmVjb3JkcyAmJiB0aGlzLmludGVybmFsU3RhdGUucmVjb3Jkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxTdGF0ZS5yZWNvcmRzLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5pZCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFt2YWx1ZS5pZF0gPSB2YWx1ZS5pZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgICAgICAgLi4udGhpcy5pbnRlcm5hbFN0YXRlLFxuICAgICAgICAgICAgc2VsZWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgYWxsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzdGF0dXM6IFNlbGVjdGlvblN0YXR1cy5TT01FLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkLFxuICAgICAgICAgICAgICAgIGNvdW50OiBPYmplY3Qua2V5cyhzZWxlY3RlZCkubGVuZ3RoXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRvZ2dsZVNlbGVjdGlvbihpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGRlZXBDbG9uZSh0aGlzLmludGVybmFsU3RhdGUuc2VsZWN0aW9uKTtcblxuICAgICAgICBpZiAoc2VsZWN0aW9uLnNlbGVjdGVkW2lkXSkge1xuICAgICAgICAgICAgZGVsZXRlIHNlbGVjdGlvbi5zZWxlY3RlZFtpZF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxlY3Rpb24uc2VsZWN0ZWRbaWRdID0gaWQ7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxlY3Rpb24uY291bnQgPSBPYmplY3Qua2V5cyhzZWxlY3Rpb24uc2VsZWN0ZWQpLmxlbmd0aDtcblxuICAgICAgICBpZiAoc2VsZWN0aW9uLmNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICBzZWxlY3Rpb24uc3RhdHVzID0gU2VsZWN0aW9uU3RhdHVzLk5PTkU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxlY3Rpb24uc3RhdHVzID0gU2VsZWN0aW9uU3RhdHVzLlNPTUU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgIC4uLnRoaXMuaW50ZXJuYWxTdGF0ZSxcbiAgICAgICAgICAgIHNlbGVjdGlvblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYWdpbmF0aW9uIFB1YmxpYyBBUElcbiAgICAgKi9cblxuICAgIGdldFBhZ2luYXRpb25Db3VudCgpOiBPYnNlcnZhYmxlPFBhZ2luYXRpb25Db3VudD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5wYWdpbmF0aW9uJC5waXBlKG1hcChwYWdpbmF0aW9uID0+ICh7XG4gICAgICAgICAgICBwYWdlRmlyc3Q6IHBhZ2luYXRpb24ucGFnZUZpcnN0LFxuICAgICAgICAgICAgcGFnZUxhc3Q6IHBhZ2luYXRpb24ucGFnZUxhc3QsXG4gICAgICAgICAgICB0b3RhbDogcGFnaW5hdGlvbi50b3RhbFxuICAgICAgICB9IGFzIFBhZ2luYXRpb25Db3VudCkpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgICB9XG5cbiAgICBnZXRQYWdpbmF0aW9uKCk6IFBhZ2luYXRpb24ge1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS52YWx1ZS5wYWdpbmF0aW9uO1xuICAgIH1cblxuICAgIGdldE1ldGEoKTogT2JqZWN0TWFwIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUudmFsdWUubWV0YTtcbiAgICB9XG5cbiAgICBjaGFuZ2VQYWdlKHBhZ2U6IFBhZ2VTZWxlY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgbGV0IHBhZ2VUb0xvYWQgPSAwO1xuXG4gICAgICAgIGNvbnN0IHBhZ2VNYXAgPSB7fTtcbiAgICAgICAgcGFnZU1hcFtQYWdlU2VsZWN0aW9uLkZJUlNUXSA9IDA7XG4gICAgICAgIHBhZ2VNYXBbUGFnZVNlbGVjdGlvbi5QUkVWSU9VU10gPSB0aGlzLmludGVybmFsU3RhdGUucGFnaW5hdGlvbi5wcmV2aW91cztcbiAgICAgICAgcGFnZU1hcFtQYWdlU2VsZWN0aW9uLk5FWFRdID0gdGhpcy5pbnRlcm5hbFN0YXRlLnBhZ2luYXRpb24ubmV4dDtcbiAgICAgICAgcGFnZU1hcFtQYWdlU2VsZWN0aW9uLkxBU1RdID0gdGhpcy5pbnRlcm5hbFN0YXRlLnBhZ2luYXRpb24ubGFzdDtcblxuICAgICAgICBpZiAocGFnZSBpbiBwYWdlTWFwICYmIHBhZ2VNYXBbcGFnZV0gPj0gMCkge1xuICAgICAgICAgICAgcGFnZVRvTG9hZCA9IHBhZ2VNYXBbcGFnZV07XG5cbiAgICAgICAgICAgIGlmIChOdW1iZXIocGFnZVRvTG9hZCkgPiB0aGlzLmludGVybmFsU3RhdGUucGFnaW5hdGlvbi5sYXN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocGFnZVRvTG9hZCA8IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudXBkYXRlUGFnaW5hdGlvbihwYWdlVG9Mb2FkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBQYWdpbmF0aW9uIHBhZ2Ugc2l6ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBhZ2VTaXplIHRvIHNldFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRQYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHBhZ2luYXRpb24gPSB7Li4udGhpcy5pbnRlcm5hbFN0YXRlLnBhZ2luYXRpb24sIHBhZ2VTaXplfTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7Li4udGhpcy5pbnRlcm5hbFN0YXRlLCBwYWdpbmF0aW9ufSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IFBhZ2luYXRpb24gcGFnZSBzaXplXG4gICAgICovXG4gICAgcHVibGljIGdldFBhZ2VTaXplKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzPy5pbnRlcm5hbFN0YXRlPy5wYWdpbmF0aW9uPy5wYWdlU2l6ZSA/PyAxMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBBUElcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZSB0byBwYWdlIHNpemUgY2hhbmdlc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhZ2VTaXplQ29uZmlnS2V5IGtleVxuICAgICAqL1xuICAgIHByb3RlY3RlZCB3YXRjaFBhZ2VTaXplKHBhZ2VTaXplQ29uZmlnS2V5OiBzdHJpbmcpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBwYWdlU2l6ZVByZWZlcmVuY2UgPSB0aGlzLnByZWZlcmVuY2VzU3RvcmUuZ2V0VXNlclByZWZlcmVuY2UocGFnZVNpemVDb25maWdLZXkpO1xuICAgICAgICBjb25zdCBwYWdlU2l6ZUNvbmZpZyA9IHRoaXMuY29uZmlnU3RvcmUuZ2V0Q29uZmlnVmFsdWUocGFnZVNpemVDb25maWdLZXkpO1xuICAgICAgICB0aGlzLmRldGVybWluZVBhZ2VTaXplKHBhZ2VTaXplUHJlZmVyZW5jZSwgcGFnZVNpemVDb25maWcpO1xuXG4gICAgICAgIHRoaXMucHJlZmVyZW5jZXNTdWIgPSB0aGlzLmNvbmZpZ1N0b3JlLmNvbmZpZ3MkLnBpcGUoXG4gICAgICAgICAgICBjb21iaW5lTGF0ZXN0V2l0aCh0aGlzLnByZWZlcmVuY2VzU3RvcmUudXNlclByZWZlcmVuY2VzJCksXG4gICAgICAgICAgICAgICAgdGFwKChbY29uZmlncywgcHJlZmVyZW5jZXNdOiBbU3lzdGVtQ29uZmlnTWFwLCBVc2VyUHJlZmVyZW5jZXNdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IHBhZ2VTaXplQ29uZmlnS2V5O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaXplUHJlZmVyZW5jZSA9IChwcmVmZXJlbmNlcyAmJiBwcmVmZXJlbmNlc1trZXldKSB8fCBudWxsO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaXplQ29uZmlnID0gKGNvbmZpZ3MgJiYgY29uZmlnc1trZXldICYmIGNvbmZpZ3Nba2V5XS52YWx1ZSkgfHwgbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRldGVybWluZVBhZ2VTaXplKHNpemVQcmVmZXJlbmNlLCBzaXplQ29uZmlnKTtcblxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGVybWluZSBwYWdlIHNpemUgdG8gdXNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge30gcGFnZVNpemVQcmVmZXJlbmNlIHRvIHVzZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYWdlU2l6ZUNvbmZpZyB0byB1c2VcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZGV0ZXJtaW5lUGFnZVNpemUocGFnZVNpemVQcmVmZXJlbmNlOiBhbnksIHBhZ2VTaXplQ29uZmlnOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgbGV0IHNpemUgPSAyMDtcblxuICAgICAgICBpZiAocGFnZVNpemVQcmVmZXJlbmNlKSB7XG4gICAgICAgICAgICBzaXplID0gcGFnZVNpemVQcmVmZXJlbmNlO1xuICAgICAgICB9IGVsc2UgaWYgKHBhZ2VTaXplQ29uZmlnKSB7XG4gICAgICAgICAgICBzaXplID0gcGFyc2VJbnQocGFnZVNpemVDb25maWcsIDEwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0UGFnZVNpemUoc2l6ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBzdGF0ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHN0YXRlIHRvIHNldFxuICAgICAqL1xuICAgIHByb3RlY3RlZCB1cGRhdGVTdGF0ZShzdGF0ZTogUmVjb3JkTGlzdFN0YXRlKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RvcmUubmV4dCh0aGlzLmludGVybmFsU3RhdGUgPSBzdGF0ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIHBhZ2UgY291bnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZWNvcmRzIGxpc3RcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcGFnaW5hdGlvbiBpbmZvXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGNhbGN1bGF0ZVBhZ2VDb3VudChyZWNvcmRzOiBSZWNvcmRbXSwgcGFnaW5hdGlvbjogUGFnaW5hdGlvbik6IHZvaWQge1xuICAgICAgICBjb25zdCByZWNvcmRDb3VudCA9IChyZWNvcmRzICYmIHJlY29yZHMubGVuZ3RoKSB8fCAwO1xuICAgICAgICBsZXQgcGFnZUZpcnN0ID0gMDtcbiAgICAgICAgbGV0IHBhZ2VMYXN0ID0gMDtcblxuICAgICAgICBpZiAocmVjb3JkQ291bnQgPiAwKSB7XG4gICAgICAgICAgICBwYWdlRmlyc3QgPSBwYWdpbmF0aW9uLmN1cnJlbnQgKyAxO1xuICAgICAgICAgICAgcGFnZUxhc3QgPSBwYWdpbmF0aW9uLmN1cnJlbnQgKyByZWNvcmRDb3VudDtcbiAgICAgICAgfVxuICAgICAgICBwYWdpbmF0aW9uLnBhZ2VGaXJzdCA9IHBhZ2VGaXJzdDtcbiAgICAgICAgcGFnaW5hdGlvbi5wYWdlTGFzdCA9IHBhZ2VMYXN0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCByZWNvcmRzIGNhY2hlZCBPYnNlcnZhYmxlIG9yIGNhbGwgdGhlIGJhY2tlbmRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2R1bGUgdG8gdXNlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGNyaXRlcmlhIHRvIHVzZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzb3J0IHRvIHVzZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwYWdpbmF0aW9uIHRvIHVzZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXNlQ2FjaGUgaWYgdG8gdXNlIGNhY2hlXG4gICAgICogQHJldHVybnMge29iamVjdH0gT2JzZXJ2YWJsZTxhbnk+XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldFJlY29yZHMoXG4gICAgICAgIG1vZHVsZTogc3RyaW5nLFxuICAgICAgICBjcml0ZXJpYTogU2VhcmNoQ3JpdGVyaWEsXG4gICAgICAgIHNvcnQ6IFNvcnRpbmdTZWxlY3Rpb24sXG4gICAgICAgIHBhZ2luYXRpb246IFBhZ2luYXRpb24sXG4gICAgICAgIHVzZUNhY2hlID0gdHJ1ZVxuICAgICk6IE9ic2VydmFibGU8UmVjb3JkTGlzdD4ge1xuXG4gICAgICAgIGlmICh0aGlzLmNhY2hlJCA9PSBudWxsIHx8IHVzZUNhY2hlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5jYWNoZSQgPSB0aGlzLmxpc3RHUUwuZ2V0KG1vZHVsZSwgY3JpdGVyaWEsIHNvcnQsIHBhZ2luYXRpb24pLnBpcGUoXG4gICAgICAgICAgICAgICAgc2hhcmVSZXBsYXkoMSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGUkO1xuICAgIH1cbn1cbiJdfQ==