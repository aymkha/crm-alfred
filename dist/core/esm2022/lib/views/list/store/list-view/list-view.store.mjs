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
import { isArray, isEmpty, union } from 'lodash-es';
import { deepClone, emptyObject, isTrue } from 'common';
import { BehaviorSubject, combineLatestWith } from 'rxjs';
import { distinctUntilChanged, map, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ViewStore } from '../../../../store/view/view.store';
import { ColumnChooserComponent } from "../../../../components/columnchooser/columnchooser.component";
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/app-state/app-state.store";
import * as i2 from "../../../../store/language/language.store";
import * as i3 from "../../../../store/navigation/navigation.store";
import * as i4 from "../../../../services/navigation/module-navigation/module-navigation.service";
import * as i5 from "../../../../store/metadata/metadata.store.service";
import * as i6 from "../../../../services/local-storage/local-storage.service";
import * as i7 from "../../../../services/message/message.service";
import * as i8 from "../../../../store/record-list/record-list.store.factory";
import * as i9 from "@ng-bootstrap/ng-bootstrap";
import * as i10 from "../../../../store/saved-filters/filter-list.store.factory";
import * as i11 from "../../../../services/modals/confirmation-modal.service";
import * as i12 from "../../../../store/user-preference/user-preference.store";
import * as i13 from "@angular/router";
import * as i14 from "../../services/list-view-url-query.service";
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
const initialState = {
    module: '',
    widgets: true,
    actionPanel: '',
    showSidebarWidgets: false,
    recordPanelConfig: {},
    activeFilters: deepClone(initialFilters),
    openFilter: deepClone(initialFilter)
};
class ListViewStore extends ViewStore {
    appStateStore;
    languageStore;
    navigationStore;
    moduleNavigation;
    metadataStore;
    localStorage;
    message;
    listStoreFactory;
    modalService;
    filterListStoreFactory;
    confirmation;
    preferences;
    route;
    listViewUrlQueryService;
    /**
     * Public long-lived observable streams
     */
    moduleName$;
    columns;
    columns$;
    lineActions$;
    tableActions$;
    records$;
    criteria$;
    context$;
    sort$;
    pagination$;
    selection$;
    selectedCount$;
    selectedStatus$;
    loading$;
    widgets$;
    showSidebarWidgets$;
    displayFilters$;
    actionPanel$;
    recordList;
    dataUpdate$;
    dataSetUpdate$;
    activeFilters$;
    openFilter$;
    filterList;
    /**
     * View-model that resolves once all the data is ready (or updated).
     */
    vm$;
    vm;
    data;
    /** Internal Properties */
    cache$ = null;
    internalState = deepClone(initialState);
    store = new BehaviorSubject(this.internalState);
    state$ = this.store.asObservable();
    dataUpdateState;
    subs = [];
    constructor(appStateStore, languageStore, navigationStore, moduleNavigation, metadataStore, localStorage, message, listStoreFactory, modalService, filterListStoreFactory, confirmation, preferences, route, listViewUrlQueryService) {
        super(appStateStore, languageStore, navigationStore, moduleNavigation, metadataStore);
        this.appStateStore = appStateStore;
        this.languageStore = languageStore;
        this.navigationStore = navigationStore;
        this.moduleNavigation = moduleNavigation;
        this.metadataStore = metadataStore;
        this.localStorage = localStorage;
        this.message = message;
        this.listStoreFactory = listStoreFactory;
        this.modalService = modalService;
        this.filterListStoreFactory = filterListStoreFactory;
        this.confirmation = confirmation;
        this.preferences = preferences;
        this.route = route;
        this.listViewUrlQueryService = listViewUrlQueryService;
        this.recordList = this.listStoreFactory.create();
        this.columns$ = metadataStore.listViewColumns$;
        this.lineActions$ = metadataStore.listViewLineActions$;
        this.tableActions$ = metadataStore.listViewTableActions$;
        this.records$ = this.recordList.records$;
        this.criteria$ = this.recordList.criteria$;
        this.context$ = this.recordList.criteria$.pipe(map(() => this.getViewContext()));
        this.sort$ = this.recordList.sort$;
        this.pagination$ = this.recordList.pagination$;
        this.selection$ = this.recordList.selection$;
        this.selectedCount$ = this.recordList.selectedCount$;
        this.selectedStatus$ = this.recordList.selectedStatus$;
        this.loading$ = this.recordList.loading$;
        this.moduleName$ = this.state$.pipe(map(state => state.module), distinctUntilChanged());
        this.widgets$ = this.state$.pipe(map(state => state.widgets), distinctUntilChanged());
        this.showSidebarWidgets$ = this.state$.pipe(map(state => state.showSidebarWidgets));
        this.displayFilters$ = this.state$.pipe(map(state => state.actionPanel === 'filters'), distinctUntilChanged());
        this.actionPanel$ = this.state$.pipe(map(state => state.actionPanel), distinctUntilChanged());
        this.activeFilters$ = this.state$.pipe(map(state => state.activeFilters), distinctUntilChanged());
        this.openFilter$ = this.state$.pipe(map(state => state.openFilter), distinctUntilChanged());
        const data$ = this.records$.pipe(combineLatestWith(this.criteria$, this.pagination$, this.selection$, this.loading$), map(([records, criteria, pagination, selection, loading]) => {
            this.data = { records, criteria, pagination, selection, loading };
            return this.data;
        }));
        this.vm$ = data$.pipe(combineLatestWith(this.appData$, this.metadata$), map(([data, appData, metadata]) => {
            this.vm = { data, appData, metadata };
            return this.vm;
        }));
        this.columns = new BehaviorSubject([]);
        this.columns$ = this.columns.asObservable();
        this.initDataUpdateState();
        this.initDataSetUpdatedState();
        this.filterList = this.filterListStoreFactory.create();
    }
    get actionPanel() {
        return this.internalState.actionPanel;
    }
    get showFilters() {
        return this.internalState.actionPanel === 'filters';
    }
    set showFilters(show) {
        this.updateState({
            ...this.internalState,
            actionPanel: show ? 'filters' : ''
        });
    }
    get widgets() {
        return this.internalState.widgets;
    }
    set widgets(show) {
        this.updateState({
            ...this.internalState,
            widgets: show
        });
    }
    get showSidebarWidgets() {
        return this.internalState.showSidebarWidgets;
    }
    set showSidebarWidgets(show) {
        this.savePreference(this.getModuleName(), 'show-sidebar-widgets', show);
        this.updateState({
            ...this.internalState,
            showSidebarWidgets: show
        });
    }
    get recordPanelConfig() {
        return this.internalState.recordPanelConfig;
    }
    isRecordPanelOpen() {
        return this.internalState.actionPanel === 'recordPanel';
    }
    openRecordPanel(config) {
        this.updateState({
            ...this.internalState,
            actionPanel: 'recordPanel',
            recordPanelConfig: config
        });
    }
    closeRecordPanel() {
        this.updateState({
            ...this.internalState,
            actionPanel: '',
            recordPanelConfig: {}
        });
    }
    getModuleName() {
        return this.internalState.module;
    }
    getViewContext() {
        const context = {
            module: this.getModuleName(),
        };
        context.criteria = this.recordList.criteria;
        context.sort = this.recordList.sort;
        return context;
    }
    /**
     * Clean destroy
     */
    destroy() {
        this.clear();
        this.subs.forEach(sub => sub.unsubscribe());
    }
    /**
     * get active filters
     *
     * @returns {object} active filters
     */
    get activeFilters() {
        return deepClone(this.internalState.activeFilters);
    }
    /**
     * Clear observable cache
     */
    clear() {
        this.cache$ = null;
        this.updateState(deepClone(initialState));
        this.recordList.clear();
    }
    clearAuthBased() {
        this.clear();
        this.recordList.clearAuthBased();
    }
    /**
     * Initial list records load if not cached and update state.
     * Returns observable to be used in resolver if needed
     *
     * @param {string} module to use
     * @returns {object} Observable<any>
     */
    init(module) {
        this.internalState.module = module;
        this.recordList.init(module, false);
        this.filterList.init(module);
        this.filterList.load(false).pipe(take(1)).subscribe();
        this.calculateShowWidgets();
        this.recordList.sort = {
            orderBy: this?.metadata?.listView?.orderBy ?? '',
            sortOrder: this?.metadata?.listView?.sortOrder ?? 'NONE'
        };
        const queryParams = this.route?.snapshot?.queryParams ?? {};
        let filterType = '';
        if (isTrue(queryParams['query'])) {
            filterType = 'query';
        }
        switch (filterType) {
            case 'query':
                this.loadQueryFilter(module, queryParams);
                break;
            default:
                this.loadCurrentFilter(module);
                this.loadCurrentSort(module);
        }
        this.loadCurrentDisplayedColumns();
        return this.load();
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
     * Toggle Quick filter
     *
     * @param filter
     * @param {boolean} reload flag
     */
    toggleQuickFilter(filter, reload = true) {
        let activeFilters = this.getActiveQuickFilters();
        const isActive = Object.keys(activeFilters).some(key => key === filter.key);
        if (isActive) {
            let { [filter.key]: removedFilters, ...newFilters } = activeFilters;
            activeFilters = newFilters;
        }
        else {
            activeFilters = {};
            activeFilters[filter.key] = filter;
        }
        if (emptyObject(activeFilters)) {
            this.resetFilters(reload);
            return;
        }
        if (Object.keys(activeFilters).length === 1) {
            this.setFilters(activeFilters);
            return;
        }
        this.updateState({
            ...this.internalState,
            activeFilters: deepClone(activeFilters),
        });
        this.updateSearchCriteria(reload);
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
            const sortOrder = filter.criteria.sortOrder ?? '';
            let direction = this.recordList.mapSortOrder(sortOrder);
            if (sort !== null) {
                orderBy = sort.orderBy;
                direction = sort.sortOrder;
            }
            this.recordList.updateSorting(orderBy, direction, false);
            this.updateSortLocalStorage();
        }
        this.updateSearchCriteria(reload);
    }
    /**
     * Update filters
     *
     * @param {object} filter to set
     */
    addSavedFilter(filter) {
        const newState = { ...this.internalState };
        const activeFilters = this.activeFilters;
        if (filter.key && activeFilters[filter.key]) {
            activeFilters[filter.key] = filter;
            newState.activeFilters = activeFilters;
        }
        newState.openFilter = filter;
        this.filterList.addFilter(filter);
        this.updateState(newState);
    }
    /**
     * Update filters
     *
     * @param {object} filter to set
     */
    removeSavedFilter(filter) {
        if (!filter || !filter.key) {
            return;
        }
        this.filterList.removeFilter(filter);
        const newState = { ...this.internalState };
        if (newState.openFilter && newState.openFilter.key === filter.key) {
            this.resetFilters(true);
        }
    }
    /**
     * Reset active filters
     *
     * @param {boolean} reload flag
     */
    resetFilters(reload = true) {
        this.updateState({
            ...this.internalState,
            activeFilters: deepClone(initialFilters),
            openFilter: deepClone(initialFilter),
        });
        this.recordList.clearSort();
        this.updateSortLocalStorage();
        this.updateSearchCriteria(reload);
    }
    /**
     * Update the search criteria
     *
     * @param {boolean} reload flag
     */
    updateSearchCriteria(reload = true) {
        const filters = { ...this.internalState.activeFilters };
        let criteria = this.mergeCriteria(filters);
        this.recordList.updateSearchCriteria(criteria, reload);
        this.updateFilterLocalStorage();
    }
    updateFilterLocalStorage() {
        const module = this.internalState.module;
        this.savePreference(module, 'current-filters', this.internalState.activeFilters);
    }
    updateSortLocalStorage() {
        const module = this.internalState.module;
        this.savePreference(module, 'current-sort', this.recordList.sort);
    }
    /**
     * Updated displayed columns' ui user preference
     * @param display
     */
    updateDisplayedColumnsPreference(display) {
        const module = this.internalState.module;
        this.savePreference(module, 'displayed-columns', display);
    }
    /**
     * Get displayed columns' ui user preference
     */
    getDisplayedColumnsPreference() {
        const module = this.internalState.module;
        const displayedColumns = this.loadPreference(module, 'displayed-columns');
        if (!isArray(displayedColumns) || !displayedColumns || !displayedColumns.length) {
            return null;
        }
        return displayedColumns;
    }
    triggerDataUpdate() {
        this.dataUpdateState.next(true);
    }
    /**
     * Load / reload records using current pagination and criteria
     *
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<ListViewState>
     */
    load(useCache = true) {
        const module = this.internalState.module;
        this.savePreference(module, 'current-filters', this.internalState.activeFilters);
        this.savePreference(module, 'current-sort', this.recordList.sort);
        return this.recordList.load(useCache);
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
        this.store.next(this.internalState = state);
    }
    /**
     * Get Active quick filters
     * @protected
     */
    getActiveQuickFilters() {
        let { 'default': defaultFilter, ...currentQuickFilters } = this.activeFilters;
        let activeFilters = {};
        Object.keys(currentQuickFilters).forEach(key => {
            const activeFilter = currentQuickFilters[key] ?? null;
            if (!key) {
                return;
            }
            const isQuickFilter = activeFilter?.attributes?.quick_filter ?? false;
            if (isQuickFilter) {
                activeFilters[key] = activeFilter;
            }
        });
        return activeFilters;
    }
    /**
     * Merge Criteria
     * @protected
     */
    mergeCriteria(filters) {
        let criteria = {};
        const keys = Object.keys(filters ?? {}) ?? [];
        keys.forEach(key => {
            const filter = filters[key] ?? null;
            const filterCriteria = filter?.criteria ?? null;
            const filterCriteriaKeys = Object.keys(filterCriteria?.filters ?? {});
            if (filterCriteria === null || (filterCriteriaKeys && !filterCriteriaKeys.length)) {
                return;
            }
            if (emptyObject(criteria)) {
                criteria = deepClone(filterCriteria);
                return;
            }
            filterCriteriaKeys.forEach(criteriaKey => {
                const filterCriteriaContent = filterCriteria?.filters[criteriaKey] ?? null;
                const criteriaContent = criteria?.filters[criteriaKey] ?? null;
                if (!filterCriteriaContent) {
                    return;
                }
                const criteriaOperator = criteriaContent?.operator ?? null;
                if (!criteriaContent || !criteriaOperator) {
                    criteria.filters[criteriaKey] = deepClone(filterCriteriaContent);
                    return;
                }
                const filterCriteriaOperator = filterCriteriaContent?.operator ?? null;
                if (filterCriteriaOperator !== criteriaOperator || filterCriteriaOperator !== '=') {
                    delete criteria.filters[criteriaKey];
                    return;
                }
                criteriaContent.values = union(criteriaContent.values ?? [], filterCriteriaContent.values ?? []);
            });
        });
        return criteria;
    }
    /**
     * Open columns chooser modal
     */
    openColumnChooserDialog() {
        const modalRef = this.modalService.open(ColumnChooserComponent, {
            ariaLabelledBy: 'modal-basic-title',
            centered: true,
            size: 'lg',
            windowClass: 'column-chooser-modal'
        });
        const displayedColumns = this.columns.getValue().filter(function (col) {
            return !col.hasOwnProperty('default')
                || (col.hasOwnProperty('default') && col.default === true);
        });
        const hiddenColumns = this.columns.getValue().filter(function (col) {
            return col.hasOwnProperty('default') && col.default === false;
        });
        modalRef.componentInstance.displayed = displayedColumns;
        modalRef.componentInstance.hidden = hiddenColumns;
        modalRef.result.then((result) => {
            if (!result.displayed || !result.hidden) {
                return;
            }
            let allColumns = [];
            const selectedDisplayColumns = result.displayed;
            const selectedHideColumns = result.hidden;
            selectedDisplayColumns.forEach(function (column) {
                column.default = true;
            });
            selectedHideColumns.forEach(function (column) {
                column.default = false;
            });
            allColumns.push(...selectedDisplayColumns, ...selectedHideColumns);
            this.columns.next(allColumns);
            const displayedCols = selectedDisplayColumns.map(col => col.name);
            this.updateDisplayedColumnsPreference(displayedCols);
        });
    }
    /**
     * Calculate if widgets are to display
     */
    calculateShowWidgets() {
        let show = false;
        const meta = this.metadataStore.get() || {};
        const listViewMeta = meta.listView || {};
        const sidebarWidgetsConfig = listViewMeta.sidebarWidgets || [];
        if (sidebarWidgetsConfig && sidebarWidgetsConfig.length > 0) {
            show = true;
        }
        const showSidebarWidgets = this.loadPreference(this.getModuleName(), 'show-sidebar-widgets') ?? null;
        if (showSidebarWidgets !== null) {
            this.showSidebarWidgets = showSidebarWidgets;
        }
        else {
            this.showSidebarWidgets = show;
        }
        this.widgets = show;
    }
    /**
     * Build ui user preference key
     * @param storageKey
     * @protected
     */
    getPreferenceKey(storageKey) {
        return 'listview-' + storageKey;
    }
    /**
     * Save ui user preference
     * @param module
     * @param storageKey
     * @param value
     * @protected
     */
    savePreference(module, storageKey, value) {
        this.preferences.setUi(module, this.getPreferenceKey(storageKey), value);
    }
    /**
     * Load ui user preference
     * @param module
     * @param storageKey
     * @protected
     */
    loadPreference(module, storageKey) {
        return this.preferences.getUi(module, this.getPreferenceKey(storageKey));
    }
    /**
     * Load current filter
     * @param module
     * @protected
     */
    loadCurrentFilter(module) {
        const activeFiltersPref = this.loadPreference(module, 'current-filters') ?? {};
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
     * Load current filter
     * @param module
     * @param queryParams
     * @protected
     */
    loadQueryFilter(module, queryParams) {
        const orderBy = queryParams['orderBy'] ?? '';
        const sortOrder = queryParams['sortOrder'] ?? '';
        const direction = this.recordList.mapSortOrder(sortOrder);
        const filter = this.listViewUrlQueryService.buildUrlQueryBasedFilter(module, this.internalState.activeFilters.default, queryParams);
        if (isEmpty(filter)) {
            return;
        }
        const filters = { 'default': filter };
        this.updateState({
            ...this.internalState,
            activeFilters: deepClone(filters),
            openFilter: deepClone(filter)
        });
        this.recordList.updateSorting(orderBy, direction, false);
        this.recordList.updateSearchCriteria(filter.criteria, false);
    }
    /**
     * Load current sorting
     * @param module
     * @protected
     */
    loadCurrentSort(module) {
        const currentSort = this.loadPreference(module, 'current-sort');
        if (!currentSort || emptyObject(currentSort)) {
            return;
        }
        this.recordList.sort = currentSort;
    }
    /**
     * Load current displayed columns
     * @protected
     */
    loadCurrentDisplayedColumns() {
        this.metadataStore.listViewColumns$.pipe(take(1)).subscribe(cols => {
            const displayedColumns = this.getDisplayedColumnsPreference();
            if (!displayedColumns || !cols) {
                this.columns.next(cols);
                return;
            }
            const colMap = {};
            displayedColumns.forEach(displayedColumn => {
                colMap[displayedColumn] = true;
            });
            const displayedMap = {};
            const hidden = [];
            cols.forEach(col => {
                col.default = colMap[col.name] ?? false;
                if (col.default) {
                    displayedMap[col.name] = col;
                }
                else {
                    hidden.push(col);
                }
            });
            const displayed = displayedColumns.filter(col => !!displayedMap[col]).map(col => displayedMap[col]);
            this.columns.next([...displayed, ...hidden]);
        });
    }
    /**
     * Initialize data update state.
     * It should be emitted on any change in values on the record list.
     * Reload/Pagination is not considered as a data update
     */
    initDataUpdateState() {
        this.dataUpdateState = new BehaviorSubject(true);
        this.dataUpdate$ = this.dataUpdateState.asObservable();
    }
    /**
     *  Initialize the dataSet update state.
     *  It should be emitted on any change in dataSet e.g. due to data filter, due to data delete,
     *  due to data edit or any event which causes change in the resulting dataSet.
     */
    initDataSetUpdatedState() {
        this.dataSetUpdate$ = this.criteria$.pipe(combineLatestWith(this.dataUpdate$), map(() => true));
    }
    static ɵfac = function ListViewStore_Factory(t) { return new (t || ListViewStore)(i0.ɵɵinject(i1.AppStateStore), i0.ɵɵinject(i2.LanguageStore), i0.ɵɵinject(i3.NavigationStore), i0.ɵɵinject(i4.ModuleNavigation), i0.ɵɵinject(i5.MetadataStore), i0.ɵɵinject(i6.LocalStorageService), i0.ɵɵinject(i7.MessageService), i0.ɵɵinject(i8.RecordListStoreFactory), i0.ɵɵinject(i9.NgbModal), i0.ɵɵinject(i10.FilterListStoreFactory), i0.ɵɵinject(i11.ConfirmationModalService), i0.ɵɵinject(i12.UserPreferenceStore), i0.ɵɵinject(i13.ActivatedRoute), i0.ɵɵinject(i14.ListViewUrlQueryService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ListViewStore, factory: ListViewStore.ɵfac });
}
export { ListViewStore };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListViewStore, [{
        type: Injectable
    }], function () { return [{ type: i1.AppStateStore }, { type: i2.LanguageStore }, { type: i3.NavigationStore }, { type: i4.ModuleNavigation }, { type: i5.MetadataStore }, { type: i6.LocalStorageService }, { type: i7.MessageService }, { type: i8.RecordListStoreFactory }, { type: i9.NgbModal }, { type: i10.FilterListStoreFactory }, { type: i11.ConfirmationModalService }, { type: i12.UserPreferenceStore }, { type: i13.ActivatedRoute }, { type: i14.ListViewUrlQueryService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LnN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3ZpZXdzL2xpc3Qvc3RvcmUvbGlzdC12aWV3L2xpc3Qtdmlldy5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3BELE9BQU8sRUFHSCxTQUFTLEVBQ1QsV0FBVyxFQVVYLE1BQU0sRUFDVCxNQUFNLFFBQVEsQ0FBQztBQUNoQixPQUFPLEVBQUMsZUFBZSxFQUFFLGlCQUFpQixFQUEyQixNQUFNLE1BQU0sQ0FBQztBQUNsRixPQUFPLEVBQUMsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBTSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFXekMsT0FBTyxFQUFVLFNBQVMsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBR3JFLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDhEQUE4RCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FBd0JwRyxNQUFNLGFBQWEsR0FBZ0I7SUFDL0IsR0FBRyxFQUFFLFNBQVM7SUFDZCxNQUFNLEVBQUUsY0FBYztJQUN0QixVQUFVLEVBQUU7UUFDUixRQUFRLEVBQUUsRUFBRTtLQUNmO0lBQ0QsUUFBUSxFQUFFO1FBQ04sSUFBSSxFQUFFLFNBQVM7UUFDZixPQUFPLEVBQUUsRUFBRTtLQUNkO0NBQ0osQ0FBQztBQUVGLE1BQU0sY0FBYyxHQUFtQjtJQUNuQyxTQUFTLEVBQUUsU0FBUyxDQUFDLGFBQWEsQ0FBQztDQUN0QyxDQUFDO0FBRUYsTUFBTSxZQUFZLEdBQWtCO0lBQ2hDLE1BQU0sRUFBRSxFQUFFO0lBQ1YsT0FBTyxF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R0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUVwRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsU0FBUyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFHRDs7OztPQUlHO0lBQ08sbUJBQW1CO1FBQ3pCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxlQUFlLENBQVUsSUFBSSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzNELENBQUM7SUFFRDs7OztPQUlHO0lBQ08sdUJBQXVCO1FBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQ3JDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFDbkMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUNsQixDQUFDO0lBQ04sQ0FBQzt1RUE5d0JRLGFBQWE7Z0VBQWIsYUFBYSxXQUFiLGFBQWE7O1NBQWIsYUFBYTt1RkFBYixhQUFhO2NBRHpCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7IGlzQXJyYXksIGlzRW1wdHksIHVuaW9uIH0gZnJvbSAnbG9kYXNoLWVzJztcbmltcG9ydCB7XG4gICAgQWN0aW9uLFxuICAgIENvbHVtbkRlZmluaXRpb24sXG4gICAgZGVlcENsb25lLFxuICAgIGVtcHR5T2JqZWN0LFxuICAgIExpc3RWaWV3TWV0YSxcbiAgICBQYWdpbmF0aW9uLFxuICAgIFJlY29yZCxcbiAgICBSZWNvcmRTZWxlY3Rpb24sXG4gICAgU2VhcmNoQ3JpdGVyaWEsXG4gICAgU2VsZWN0aW9uU3RhdHVzLFxuICAgIFNvcnREaXJlY3Rpb24sXG4gICAgU29ydGluZ1NlbGVjdGlvbixcbiAgICBWaWV3Q29udGV4dCxcbiAgICBpc1RydWVcbn0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBjb21iaW5lTGF0ZXN0V2l0aCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7ZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCwgdGFrZSwgdGFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge05hdmlnYXRpb25TdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLnN0b3JlJztcbmltcG9ydCB7UmVjb3JkTGlzdCwgUmVjb3JkTGlzdFN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9yZWNvcmQtbGlzdC9yZWNvcmQtbGlzdC5zdG9yZSc7XG5pbXBvcnQge01ldGFkYXRhLCBNZXRhZGF0YVN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9tZXRhZGF0YS9tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7U3RhdGVTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvc3RhdGUnO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge01vZHVsZU5hdmlnYXRpb259IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL25hdmlnYXRpb24vbW9kdWxlLW5hdmlnYXRpb24vbW9kdWxlLW5hdmlnYXRpb24uc2VydmljZSc7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQge1JlY29yZExpc3RTdG9yZUZhY3Rvcnl9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3JlY29yZC1saXN0L3JlY29yZC1saXN0LnN0b3JlLmZhY3RvcnknO1xuaW1wb3J0IHtBcHBTdGF0ZVN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9hcHAtc3RhdGUvYXBwLXN0YXRlLnN0b3JlJztcbmltcG9ydCB7QXBwRGF0YSwgVmlld1N0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS92aWV3L3ZpZXcuc3RvcmUnO1xuaW1wb3J0IHtMb2NhbFN0b3JhZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9sb2NhbC1zdG9yYWdlL2xvY2FsLXN0b3JhZ2Uuc2VydmljZSc7XG5pbXBvcnQge05nYk1vZGFsfSBmcm9tIFwiQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXBcIjtcbmltcG9ydCB7Q29sdW1uQ2hvb3NlckNvbXBvbmVudH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvY29sdW1uY2hvb3Nlci9jb2x1bW5jaG9vc2VyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtTYXZlZEZpbHRlciwgU2F2ZWRGaWx0ZXJNYXB9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3NhdmVkLWZpbHRlcnMvc2F2ZWQtZmlsdGVyLm1vZGVsJztcbmltcG9ydCB7RmlsdGVyTGlzdFN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9zYXZlZC1maWx0ZXJzL2ZpbHRlci1saXN0LnN0b3JlJztcbmltcG9ydCB7RmlsdGVyTGlzdFN0b3JlRmFjdG9yeX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvc2F2ZWQtZmlsdGVycy9maWx0ZXItbGlzdC5zdG9yZS5mYWN0b3J5JztcbmltcG9ydCB7Q29uZmlybWF0aW9uTW9kYWxTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9tb2RhbHMvY29uZmlybWF0aW9uLW1vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHtSZWNvcmRQYW5lbE1ldGFkYXRhfSBmcm9tICcuLi8uLi8uLi8uLi9jb250YWluZXJzL3JlY29yZC1wYW5lbC9zdG9yZS9yZWNvcmQtcGFuZWwvcmVjb3JkLXBhbmVsLnN0b3JlLm1vZGVsJztcbmltcG9ydCB7VXNlclByZWZlcmVuY2VTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvdXNlci1wcmVmZXJlbmNlL3VzZXItcHJlZmVyZW5jZS5zdG9yZSc7XG5pbXBvcnQge0xpc3RWaWV3VXJsUXVlcnlTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9saXN0LXZpZXctdXJsLXF1ZXJ5LnNlcnZpY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpc3RWaWV3RGF0YSB7XG4gICAgcmVjb3JkczogUmVjb3JkW107XG4gICAgcGFnaW5hdGlvbj86IFBhZ2luYXRpb247XG4gICAgY3JpdGVyaWE/OiBTZWFyY2hDcml0ZXJpYTtcbiAgICBzb3J0PzogU29ydGluZ1NlbGVjdGlvbjtcbiAgICBzZWxlY3Rpb24/OiBSZWNvcmRTZWxlY3Rpb247XG4gICAgbG9hZGluZzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMaXN0Vmlld01vZGVsIHtcbiAgICBkYXRhOiBMaXN0Vmlld0RhdGE7XG4gICAgYXBwRGF0YTogQXBwRGF0YTtcbiAgICBtZXRhZGF0YTogTWV0YWRhdGE7XG59XG5cbmNvbnN0IGluaXRpYWxGaWx0ZXI6IFNhdmVkRmlsdGVyID0ge1xuICAgIGtleTogJ2RlZmF1bHQnLFxuICAgIG1vZHVsZTogJ3NhdmVkLXNlYXJjaCcsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgICBjb250ZW50czogJydcbiAgICB9LFxuICAgIGNyaXRlcmlhOiB7XG4gICAgICAgIG5hbWU6ICdkZWZhdWx0JyxcbiAgICAgICAgZmlsdGVyczoge31cbiAgICB9XG59O1xuXG5jb25zdCBpbml0aWFsRmlsdGVyczogU2F2ZWRGaWx0ZXJNYXAgPSB7XG4gICAgJ2RlZmF1bHQnOiBkZWVwQ2xvbmUoaW5pdGlhbEZpbHRlcilcbn07XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogTGlzdFZpZXdTdGF0ZSA9IHtcbiAgICBtb2R1bGU6ICcnLFxuICAgIHdpZGdldHM6IHRydWUsXG4gICAgYWN0aW9uUGFuZWw6ICcnLFxuICAgIHNob3dTaWRlYmFyV2lkZ2V0czogZmFsc2UsXG4gICAgcmVjb3JkUGFuZWxDb25maWc6IHt9IGFzIFJlY29yZFBhbmVsTWV0YWRhdGEsXG4gICAgYWN0aXZlRmlsdGVyczogZGVlcENsb25lKGluaXRpYWxGaWx0ZXJzKSxcbiAgICBvcGVuRmlsdGVyOiBkZWVwQ2xvbmUoaW5pdGlhbEZpbHRlcilcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGlzdFZpZXdTdGF0ZSB7XG4gICAgbW9kdWxlOiBzdHJpbmc7XG4gICAgd2lkZ2V0czogYm9vbGVhbjtcbiAgICBhY3Rpb25QYW5lbDogc3RyaW5nO1xuICAgIHNob3dTaWRlYmFyV2lkZ2V0czogYm9vbGVhbjtcbiAgICByZWNvcmRQYW5lbENvbmZpZzogUmVjb3JkUGFuZWxNZXRhZGF0YTtcbiAgICBhY3RpdmVGaWx0ZXJzOiBTYXZlZEZpbHRlck1hcDtcbiAgICBvcGVuRmlsdGVyOiBTYXZlZEZpbHRlcjtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3U3RvcmUgZXh0ZW5kcyBWaWV3U3RvcmUgaW1wbGVtZW50cyBTdGF0ZVN0b3JlIHtcblxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBsb25nLWxpdmVkIG9ic2VydmFibGUgc3RyZWFtc1xuICAgICAqL1xuICAgIG1vZHVsZU5hbWUkOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gICAgY29sdW1uczogQmVoYXZpb3JTdWJqZWN0PENvbHVtbkRlZmluaXRpb25bXT47XG4gICAgY29sdW1ucyQ6IE9ic2VydmFibGU8Q29sdW1uRGVmaW5pdGlvbltdPjtcbiAgICBsaW5lQWN0aW9ucyQ6IE9ic2VydmFibGU8QWN0aW9uW10+O1xuICAgIHRhYmxlQWN0aW9ucyQ6IE9ic2VydmFibGU8QWN0aW9uW10+XG4gICAgcmVjb3JkcyQ6IE9ic2VydmFibGU8UmVjb3JkW10+O1xuICAgIGNyaXRlcmlhJDogT2JzZXJ2YWJsZTxTZWFyY2hDcml0ZXJpYT47XG4gICAgY29udGV4dCQ6IE9ic2VydmFibGU8Vmlld0NvbnRleHQ+O1xuICAgIHNvcnQkOiBPYnNlcnZhYmxlPFNvcnRpbmdTZWxlY3Rpb24+O1xuICAgIHBhZ2luYXRpb24kOiBPYnNlcnZhYmxlPFBhZ2luYXRpb24+O1xuICAgIHNlbGVjdGlvbiQ6IE9ic2VydmFibGU8UmVjb3JkU2VsZWN0aW9uPjtcbiAgICBzZWxlY3RlZENvdW50JDogT2JzZXJ2YWJsZTxudW1iZXI+O1xuICAgIHNlbGVjdGVkU3RhdHVzJDogT2JzZXJ2YWJsZTxTZWxlY3Rpb25TdGF0dXM+O1xuICAgIGxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIHdpZGdldHMkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIHNob3dTaWRlYmFyV2lkZ2V0cyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgZGlzcGxheUZpbHRlcnMkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIGFjdGlvblBhbmVsJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIHJlY29yZExpc3Q6IFJlY29yZExpc3RTdG9yZTtcbiAgICBkYXRhVXBkYXRlJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBkYXRhU2V0VXBkYXRlJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBhY3RpdmVGaWx0ZXJzJDogT2JzZXJ2YWJsZTxTYXZlZEZpbHRlck1hcD47XG4gICAgb3BlbkZpbHRlciQ6IE9ic2VydmFibGU8U2F2ZWRGaWx0ZXI+O1xuICAgIGZpbHRlckxpc3Q6IEZpbHRlckxpc3RTdG9yZTtcblxuICAgIC8qKlxuICAgICAqIFZpZXctbW9kZWwgdGhhdCByZXNvbHZlcyBvbmNlIGFsbCB0aGUgZGF0YSBpcyByZWFkeSAob3IgdXBkYXRlZCkuXG4gICAgICovXG4gICAgdm0kOiBPYnNlcnZhYmxlPExpc3RWaWV3TW9kZWw+O1xuICAgIHZtOiBMaXN0Vmlld01vZGVsO1xuICAgIGRhdGE6IExpc3RWaWV3RGF0YTtcblxuICAgIC8qKiBJbnRlcm5hbCBQcm9wZXJ0aWVzICovXG4gICAgcHJvdGVjdGVkIGNhY2hlJDogT2JzZXJ2YWJsZTxhbnk+ID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgaW50ZXJuYWxTdGF0ZTogTGlzdFZpZXdTdGF0ZSA9IGRlZXBDbG9uZShpbml0aWFsU3RhdGUpO1xuICAgIHByb3RlY3RlZCBzdG9yZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TGlzdFZpZXdTdGF0ZT4odGhpcy5pbnRlcm5hbFN0YXRlKTtcbiAgICBwcm90ZWN0ZWQgc3RhdGUkID0gdGhpcy5zdG9yZS5hc09ic2VydmFibGUoKTtcbiAgICBwcm90ZWN0ZWQgZGF0YVVwZGF0ZVN0YXRlOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj47XG4gICAgcHJvdGVjdGVkIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGFwcFN0YXRlU3RvcmU6IEFwcFN0YXRlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBsYW5ndWFnZVN0b3JlOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbmF2aWdhdGlvblN0b3JlOiBOYXZpZ2F0aW9uU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBtb2R1bGVOYXZpZ2F0aW9uOiBNb2R1bGVOYXZpZ2F0aW9uLFxuICAgICAgICBwcm90ZWN0ZWQgbWV0YWRhdGFTdG9yZTogTWV0YWRhdGFTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGxvY2FsU3RvcmFnZTogTG9jYWxTdG9yYWdlU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIG1lc3NhZ2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgbGlzdFN0b3JlRmFjdG9yeTogUmVjb3JkTGlzdFN0b3JlRmFjdG9yeSxcbiAgICAgICAgcHJvdGVjdGVkIG1vZGFsU2VydmljZTogTmdiTW9kYWwsXG4gICAgICAgIHByb3RlY3RlZCBmaWx0ZXJMaXN0U3RvcmVGYWN0b3J5OiBGaWx0ZXJMaXN0U3RvcmVGYWN0b3J5LFxuICAgICAgICBwcm90ZWN0ZWQgY29uZmlybWF0aW9uOiBDb25maXJtYXRpb25Nb2RhbFNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBwcmVmZXJlbmNlczogVXNlclByZWZlcmVuY2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJvdGVjdGVkIGxpc3RWaWV3VXJsUXVlcnlTZXJ2aWNlOiBMaXN0Vmlld1VybFF1ZXJ5U2VydmljZVxuICAgICkge1xuXG4gICAgICAgIHN1cGVyKGFwcFN0YXRlU3RvcmUsIGxhbmd1YWdlU3RvcmUsIG5hdmlnYXRpb25TdG9yZSwgbW9kdWxlTmF2aWdhdGlvbiwgbWV0YWRhdGFTdG9yZSk7XG5cbiAgICAgICAgdGhpcy5yZWNvcmRMaXN0ID0gdGhpcy5saXN0U3RvcmVGYWN0b3J5LmNyZWF0ZSgpO1xuXG4gICAgICAgIHRoaXMuY29sdW1ucyQgPSBtZXRhZGF0YVN0b3JlLmxpc3RWaWV3Q29sdW1ucyQ7XG4gICAgICAgIHRoaXMubGluZUFjdGlvbnMkID0gbWV0YWRhdGFTdG9yZS5saXN0Vmlld0xpbmVBY3Rpb25zJDtcbiAgICAgICAgdGhpcy50YWJsZUFjdGlvbnMkID0gbWV0YWRhdGFTdG9yZS5saXN0Vmlld1RhYmxlQWN0aW9ucyQ7XG4gICAgICAgIHRoaXMucmVjb3JkcyQgPSB0aGlzLnJlY29yZExpc3QucmVjb3JkcyQ7XG4gICAgICAgIHRoaXMuY3JpdGVyaWEkID0gdGhpcy5yZWNvcmRMaXN0LmNyaXRlcmlhJDtcbiAgICAgICAgdGhpcy5jb250ZXh0JCA9IHRoaXMucmVjb3JkTGlzdC5jcml0ZXJpYSQucGlwZShtYXAoKCkgPT4gdGhpcy5nZXRWaWV3Q29udGV4dCgpKSk7XG4gICAgICAgIHRoaXMuc29ydCQgPSB0aGlzLnJlY29yZExpc3Quc29ydCQ7XG4gICAgICAgIHRoaXMucGFnaW5hdGlvbiQgPSB0aGlzLnJlY29yZExpc3QucGFnaW5hdGlvbiQ7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uJCA9IHRoaXMucmVjb3JkTGlzdC5zZWxlY3Rpb24kO1xuICAgICAgICB0aGlzLnNlbGVjdGVkQ291bnQkID0gdGhpcy5yZWNvcmRMaXN0LnNlbGVjdGVkQ291bnQkO1xuICAgICAgICB0aGlzLnNlbGVjdGVkU3RhdHVzJCA9IHRoaXMucmVjb3JkTGlzdC5zZWxlY3RlZFN0YXR1cyQ7XG4gICAgICAgIHRoaXMubG9hZGluZyQgPSB0aGlzLnJlY29yZExpc3QubG9hZGluZyQ7XG4gICAgICAgIHRoaXMubW9kdWxlTmFtZSQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5tb2R1bGUpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgICAgICAgdGhpcy53aWRnZXRzJCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLndpZGdldHMpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgICAgICAgdGhpcy5zaG93U2lkZWJhcldpZGdldHMkID0gdGhpcy5zdGF0ZSQucGlwZShtYXAoc3RhdGUgPT4gc3RhdGUuc2hvd1NpZGViYXJXaWRnZXRzKSk7XG4gICAgICAgIHRoaXMuZGlzcGxheUZpbHRlcnMkID0gdGhpcy5zdGF0ZSQucGlwZShtYXAoc3RhdGUgPT4gc3RhdGUuYWN0aW9uUGFuZWwgPT09ICdmaWx0ZXJzJyksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICAgICAgICB0aGlzLmFjdGlvblBhbmVsJCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLmFjdGlvblBhbmVsKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMuYWN0aXZlRmlsdGVycyQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5hY3RpdmVGaWx0ZXJzKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMub3BlbkZpbHRlciQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5vcGVuRmlsdGVyKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG5cbiAgICAgICAgY29uc3QgZGF0YSQgPSB0aGlzLnJlY29yZHMkLnBpcGUoXG4gICAgICAgICAgICBjb21iaW5lTGF0ZXN0V2l0aCh0aGlzLmNyaXRlcmlhJCwgdGhpcy5wYWdpbmF0aW9uJCwgdGhpcy5zZWxlY3Rpb24kLCB0aGlzLmxvYWRpbmckKSxcbiAgICAgICAgICAgIG1hcCgoW3JlY29yZHMsIGNyaXRlcmlhLCBwYWdpbmF0aW9uLCBzZWxlY3Rpb24sIGxvYWRpbmddKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0ge3JlY29yZHMsIGNyaXRlcmlhLCBwYWdpbmF0aW9uLCBzZWxlY3Rpb24sIGxvYWRpbmd9IGFzIExpc3RWaWV3RGF0YTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnZtJCA9IGRhdGEkLnBpcGUoXG4gICAgICAgICAgICBjb21iaW5lTGF0ZXN0V2l0aCh0aGlzLmFwcERhdGEkLCB0aGlzLm1ldGFkYXRhJCksXG4gICAgICAgICAgICBtYXAoKFtkYXRhLCBhcHBEYXRhLCBtZXRhZGF0YV0pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnZtID0ge2RhdGEsIGFwcERhdGEsIG1ldGFkYXRhfSBhcyBMaXN0Vmlld01vZGVsO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZtO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmNvbHVtbnMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PENvbHVtbkRlZmluaXRpb25bXT4oW10pO1xuICAgICAgICB0aGlzLmNvbHVtbnMkID0gdGhpcy5jb2x1bW5zLmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgICAgIHRoaXMuaW5pdERhdGFVcGRhdGVTdGF0ZSgpO1xuICAgICAgICB0aGlzLmluaXREYXRhU2V0VXBkYXRlZFN0YXRlKCk7XG5cbiAgICAgICAgdGhpcy5maWx0ZXJMaXN0ID0gdGhpcy5maWx0ZXJMaXN0U3RvcmVGYWN0b3J5LmNyZWF0ZSgpO1xuICAgIH1cblxuICAgIGdldCBhY3Rpb25QYW5lbCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFN0YXRlLmFjdGlvblBhbmVsO1xuICAgIH1cblxuICAgIGdldCBzaG93RmlsdGVycygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxTdGF0ZS5hY3Rpb25QYW5lbCA9PT0gJ2ZpbHRlcnMnO1xuICAgIH1cblxuICAgIHNldCBzaG93RmlsdGVycyhzaG93OiBib29sZWFuKSB7XG5cbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICAgICAgICAuLi50aGlzLmludGVybmFsU3RhdGUsXG4gICAgICAgICAgICBhY3Rpb25QYW5lbDogc2hvdyA/ICdmaWx0ZXJzJyA6ICcnXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldCB3aWRnZXRzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFN0YXRlLndpZGdldHM7XG4gICAgfVxuXG4gICAgc2V0IHdpZGdldHMoc2hvdzogYm9vbGVhbikge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgIC4uLnRoaXMuaW50ZXJuYWxTdGF0ZSxcbiAgICAgICAgICAgIHdpZGdldHM6IHNob3dcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0IHNob3dTaWRlYmFyV2lkZ2V0cygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxTdGF0ZS5zaG93U2lkZWJhcldpZGdldHM7XG4gICAgfVxuXG4gICAgc2V0IHNob3dTaWRlYmFyV2lkZ2V0cyhzaG93OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuc2F2ZVByZWZlcmVuY2UodGhpcy5nZXRNb2R1bGVOYW1lKCksICdzaG93LXNpZGViYXItd2lkZ2V0cycsIHNob3cpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgIC4uLnRoaXMuaW50ZXJuYWxTdGF0ZSxcbiAgICAgICAgICAgIHNob3dTaWRlYmFyV2lkZ2V0czogc2hvd1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXQgcmVjb3JkUGFuZWxDb25maWcoKTogUmVjb3JkUGFuZWxNZXRhZGF0YSB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsU3RhdGUucmVjb3JkUGFuZWxDb25maWc7XG4gICAgfVxuXG4gICAgaXNSZWNvcmRQYW5lbE9wZW4oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsU3RhdGUuYWN0aW9uUGFuZWwgPT09ICdyZWNvcmRQYW5lbCc7XG4gICAgfVxuXG4gICAgb3BlblJlY29yZFBhbmVsKGNvbmZpZzogUmVjb3JkUGFuZWxNZXRhZGF0YSk6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgIC4uLnRoaXMuaW50ZXJuYWxTdGF0ZSxcbiAgICAgICAgICAgIGFjdGlvblBhbmVsOiAncmVjb3JkUGFuZWwnLFxuICAgICAgICAgICAgcmVjb3JkUGFuZWxDb25maWc6IGNvbmZpZ1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjbG9zZVJlY29yZFBhbmVsKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgIC4uLnRoaXMuaW50ZXJuYWxTdGF0ZSxcbiAgICAgICAgICAgIGFjdGlvblBhbmVsOiAnJyxcbiAgICAgICAgICAgIHJlY29yZFBhbmVsQ29uZmlnOiB7fSBhcyBSZWNvcmRQYW5lbE1ldGFkYXRhXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgZ2V0TW9kdWxlTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFN0YXRlLm1vZHVsZTtcbiAgICB9XG5cbiAgICBnZXRWaWV3Q29udGV4dCgpOiBWaWV3Q29udGV4dCB7XG5cbiAgICAgICAgY29uc3QgY29udGV4dCA9IHtcbiAgICAgICAgICAgIG1vZHVsZTogdGhpcy5nZXRNb2R1bGVOYW1lKCksXG4gICAgICAgIH0gYXMgVmlld0NvbnRleHQ7XG5cbiAgICAgICAgY29udGV4dC5jcml0ZXJpYSA9IHRoaXMucmVjb3JkTGlzdC5jcml0ZXJpYTtcbiAgICAgICAgY29udGV4dC5zb3J0ID0gdGhpcy5yZWNvcmRMaXN0LnNvcnQ7XG5cbiAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYW4gZGVzdHJveVxuICAgICAqL1xuICAgIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuc3Vicy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZ2V0IGFjdGl2ZSBmaWx0ZXJzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBhY3RpdmUgZmlsdGVyc1xuICAgICAqL1xuICAgIGdldCBhY3RpdmVGaWx0ZXJzKCk6IFNhdmVkRmlsdGVyTWFwIHtcbiAgICAgICAgcmV0dXJuIGRlZXBDbG9uZSh0aGlzLmludGVybmFsU3RhdGUuYWN0aXZlRmlsdGVycyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgb2JzZXJ2YWJsZSBjYWNoZVxuICAgICAqL1xuICAgIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jYWNoZSQgPSBudWxsO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKGRlZXBDbG9uZShpbml0aWFsU3RhdGUpKTtcbiAgICAgICAgdGhpcy5yZWNvcmRMaXN0LmNsZWFyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyQXV0aEJhc2VkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMucmVjb3JkTGlzdC5jbGVhckF1dGhCYXNlZCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWwgbGlzdCByZWNvcmRzIGxvYWQgaWYgbm90IGNhY2hlZCBhbmQgdXBkYXRlIHN0YXRlLlxuICAgICAqIFJldHVybnMgb2JzZXJ2YWJsZSB0byBiZSB1c2VkIGluIHJlc29sdmVyIGlmIG5lZWRlZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZHVsZSB0byB1c2VcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBPYnNlcnZhYmxlPGFueT5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW5pdChtb2R1bGU6IHN0cmluZyk6IE9ic2VydmFibGU8UmVjb3JkTGlzdD4ge1xuICAgICAgICB0aGlzLmludGVybmFsU3RhdGUubW9kdWxlID0gbW9kdWxlO1xuICAgICAgICB0aGlzLnJlY29yZExpc3QuaW5pdChtb2R1bGUsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5maWx0ZXJMaXN0LmluaXQobW9kdWxlKTtcblxuICAgICAgICB0aGlzLmZpbHRlckxpc3QubG9hZChmYWxzZSkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKTtcblxuICAgICAgICB0aGlzLmNhbGN1bGF0ZVNob3dXaWRnZXRzKCk7XG5cbiAgICAgICAgdGhpcy5yZWNvcmRMaXN0LnNvcnQgPSB7XG4gICAgICAgICAgICBvcmRlckJ5OiB0aGlzPy5tZXRhZGF0YT8ubGlzdFZpZXc/Lm9yZGVyQnkgPz8gJycsXG4gICAgICAgICAgICBzb3J0T3JkZXI6IHRoaXM/Lm1ldGFkYXRhPy5saXN0Vmlldz8uc29ydE9yZGVyID8/ICdOT05FJyBhcyBTb3J0RGlyZWN0aW9uXG4gICAgICAgIH0gYXMgU29ydGluZ1NlbGVjdGlvbjtcblxuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IHRoaXMucm91dGU/LnNuYXBzaG90Py5xdWVyeVBhcmFtcyA/PyB7fTtcbiAgICAgICAgbGV0IGZpbHRlclR5cGUgPSAnJztcbiAgICAgICAgaWYgKGlzVHJ1ZShxdWVyeVBhcmFtc1sncXVlcnknXSkpIHtcbiAgICAgICAgICAgIGZpbHRlclR5cGUgPSAncXVlcnknO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAoZmlsdGVyVHlwZSkge1xuICAgICAgICAgICAgY2FzZSAncXVlcnknOlxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFF1ZXJ5RmlsdGVyKG1vZHVsZSwgcXVlcnlQYXJhbXMpO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMubG9hZEN1cnJlbnRGaWx0ZXIobW9kdWxlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRDdXJyZW50U29ydChtb2R1bGUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9hZEN1cnJlbnREaXNwbGF5ZWRDb2x1bW5zKCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubG9hZCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBvcGVuIGZpbHRlcnNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBmaWx0ZXIgdG8gc2V0XG4gICAgICovXG4gICAgcHVibGljIHNldE9wZW5GaWx0ZXIoZmlsdGVyOiBTYXZlZEZpbHRlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHsuLi50aGlzLmludGVybmFsU3RhdGUsIG9wZW5GaWx0ZXI6IGRlZXBDbG9uZShmaWx0ZXIpfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlIFF1aWNrIGZpbHRlclxuICAgICAqXG4gICAgICogQHBhcmFtIGZpbHRlclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVsb2FkIGZsYWdcbiAgICAgKi9cbiAgICBwdWJsaWMgdG9nZ2xlUXVpY2tGaWx0ZXIoZmlsdGVyOiBTYXZlZEZpbHRlciwgcmVsb2FkID0gdHJ1ZSk6IHZvaWQge1xuICAgICAgICBsZXQgYWN0aXZlRmlsdGVycyA9IHRoaXMuZ2V0QWN0aXZlUXVpY2tGaWx0ZXJzKCk7XG5cbiAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBPYmplY3Qua2V5cyhhY3RpdmVGaWx0ZXJzKS5zb21lKGtleSA9PiBrZXkgPT09IGZpbHRlci5rZXkpO1xuXG4gICAgICAgIGlmIChpc0FjdGl2ZSkge1xuICAgICAgICAgICAgbGV0IHtbZmlsdGVyLmtleV06IHJlbW92ZWRGaWx0ZXJzLCAuLi5uZXdGaWx0ZXJzfSA9IGFjdGl2ZUZpbHRlcnM7XG4gICAgICAgICAgICBhY3RpdmVGaWx0ZXJzID0gbmV3RmlsdGVycztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFjdGl2ZUZpbHRlcnMgPSB7fTtcbiAgICAgICAgICAgIGFjdGl2ZUZpbHRlcnNbZmlsdGVyLmtleV0gPSBmaWx0ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW1wdHlPYmplY3QoYWN0aXZlRmlsdGVycykpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRGaWx0ZXJzKHJlbG9hZCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoYWN0aXZlRmlsdGVycykubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnNldEZpbHRlcnMoYWN0aXZlRmlsdGVycyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgIC4uLnRoaXMuaW50ZXJuYWxTdGF0ZSxcbiAgICAgICAgICAgIGFjdGl2ZUZpbHRlcnM6IGRlZXBDbG9uZShhY3RpdmVGaWx0ZXJzKSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVTZWFyY2hDcml0ZXJpYShyZWxvYWQpXG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBTZXQgYWN0aXZlIGZpbHRlcnNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBmaWx0ZXJzIHRvIHNldFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVsb2FkIGZsYWdcbiAgICAgKiBAcGFyYW0gc29ydFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRGaWx0ZXJzKGZpbHRlcnM6IFNhdmVkRmlsdGVyTWFwLCByZWxvYWQgPSB0cnVlLCBzb3J0OiBTb3J0aW5nU2VsZWN0aW9uID0gbnVsbCk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IGZpbHRlcktleSA9IE9iamVjdC5rZXlzKGZpbHRlcnMpLnNoaWZ0KCk7XG4gICAgICAgIGNvbnN0IGZpbHRlciA9IGZpbHRlcnNbZmlsdGVyS2V5XTtcblxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHsuLi50aGlzLmludGVybmFsU3RhdGUsIGFjdGl2ZUZpbHRlcnM6IGRlZXBDbG9uZShmaWx0ZXJzKSwgb3BlbkZpbHRlcjogZGVlcENsb25lKGZpbHRlcil9KTtcblxuICAgICAgICBpZiAoZmlsdGVyLmNyaXRlcmlhKSB7XG4gICAgICAgICAgICBsZXQgb3JkZXJCeSA9IGZpbHRlci5jcml0ZXJpYS5vcmRlckJ5ID8/ICcnO1xuICAgICAgICAgICAgY29uc3Qgc29ydE9yZGVyID0gZmlsdGVyLmNyaXRlcmlhLnNvcnRPcmRlciA/PyAnJztcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb24gPSB0aGlzLnJlY29yZExpc3QubWFwU29ydE9yZGVyKHNvcnRPcmRlcik7XG5cbiAgICAgICAgICAgIGlmIChzb3J0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgb3JkZXJCeSA9IHNvcnQub3JkZXJCeTtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSBzb3J0LnNvcnRPcmRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5yZWNvcmRMaXN0LnVwZGF0ZVNvcnRpbmcob3JkZXJCeSwgZGlyZWN0aW9uLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNvcnRMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlU2VhcmNoQ3JpdGVyaWEocmVsb2FkKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBmaWx0ZXJzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZmlsdGVyIHRvIHNldFxuICAgICAqL1xuICAgIHB1YmxpYyBhZGRTYXZlZEZpbHRlcihmaWx0ZXI6IFNhdmVkRmlsdGVyKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSB7Li4udGhpcy5pbnRlcm5hbFN0YXRlfTtcbiAgICAgICAgY29uc3QgYWN0aXZlRmlsdGVycyA9IHRoaXMuYWN0aXZlRmlsdGVycztcblxuICAgICAgICBpZiAoZmlsdGVyLmtleSAmJiBhY3RpdmVGaWx0ZXJzW2ZpbHRlci5rZXldKSB7XG4gICAgICAgICAgICBhY3RpdmVGaWx0ZXJzW2ZpbHRlci5rZXldID0gZmlsdGVyO1xuICAgICAgICAgICAgbmV3U3RhdGUuYWN0aXZlRmlsdGVycyA9IGFjdGl2ZUZpbHRlcnM7XG4gICAgICAgIH1cblxuICAgICAgICBuZXdTdGF0ZS5vcGVuRmlsdGVyID0gZmlsdGVyO1xuXG4gICAgICAgIHRoaXMuZmlsdGVyTGlzdC5hZGRGaWx0ZXIoZmlsdGVyKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKG5ld1N0YXRlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgZmlsdGVyc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGZpbHRlciB0byBzZXRcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVtb3ZlU2F2ZWRGaWx0ZXIoZmlsdGVyOiBTYXZlZEZpbHRlcik6IHZvaWQge1xuXG4gICAgICAgIGlmICghZmlsdGVyIHx8ICFmaWx0ZXIua2V5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZpbHRlckxpc3QucmVtb3ZlRmlsdGVyKGZpbHRlcik7XG5cbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSB7Li4udGhpcy5pbnRlcm5hbFN0YXRlfTtcblxuICAgICAgICBpZiAobmV3U3RhdGUub3BlbkZpbHRlciAmJiBuZXdTdGF0ZS5vcGVuRmlsdGVyLmtleSA9PT0gZmlsdGVyLmtleSkge1xuICAgICAgICAgICAgdGhpcy5yZXNldEZpbHRlcnModHJ1ZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0IGFjdGl2ZSBmaWx0ZXJzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlbG9hZCBmbGFnXG4gICAgICovXG4gICAgcHVibGljIHJlc2V0RmlsdGVycyhyZWxvYWQgPSB0cnVlKTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICAgICAgICAuLi50aGlzLmludGVybmFsU3RhdGUsXG4gICAgICAgICAgICBhY3RpdmVGaWx0ZXJzOiBkZWVwQ2xvbmUoaW5pdGlhbEZpbHRlcnMpLFxuICAgICAgICAgICAgb3BlbkZpbHRlcjogZGVlcENsb25lKGluaXRpYWxGaWx0ZXIpLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJlY29yZExpc3QuY2xlYXJTb3J0KCk7XG4gICAgICAgIHRoaXMudXBkYXRlU29ydExvY2FsU3RvcmFnZSgpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlU2VhcmNoQ3JpdGVyaWEocmVsb2FkKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgc2VhcmNoIGNyaXRlcmlhXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlbG9hZCBmbGFnXG4gICAgICovXG4gICAgcHVibGljIHVwZGF0ZVNlYXJjaENyaXRlcmlhKHJlbG9hZCA9IHRydWUpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZmlsdGVycyA9IHsuLi50aGlzLmludGVybmFsU3RhdGUuYWN0aXZlRmlsdGVyc307XG4gICAgICAgIGxldCBjcml0ZXJpYSA9IHRoaXMubWVyZ2VDcml0ZXJpYShmaWx0ZXJzKTtcblxuICAgICAgICB0aGlzLnJlY29yZExpc3QudXBkYXRlU2VhcmNoQ3JpdGVyaWEoY3JpdGVyaWEsIHJlbG9hZCk7XG4gICAgICAgIHRoaXMudXBkYXRlRmlsdGVyTG9jYWxTdG9yYWdlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZUZpbHRlckxvY2FsU3RvcmFnZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbW9kdWxlID0gdGhpcy5pbnRlcm5hbFN0YXRlLm1vZHVsZTtcblxuICAgICAgICB0aGlzLnNhdmVQcmVmZXJlbmNlKG1vZHVsZSwgJ2N1cnJlbnQtZmlsdGVycycsIHRoaXMuaW50ZXJuYWxTdGF0ZS5hY3RpdmVGaWx0ZXJzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlU29ydExvY2FsU3RvcmFnZSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbW9kdWxlID0gdGhpcy5pbnRlcm5hbFN0YXRlLm1vZHVsZTtcblxuICAgICAgICB0aGlzLnNhdmVQcmVmZXJlbmNlKG1vZHVsZSwgJ2N1cnJlbnQtc29ydCcsIHRoaXMucmVjb3JkTGlzdC5zb3J0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVkIGRpc3BsYXllZCBjb2x1bW5zJyB1aSB1c2VyIHByZWZlcmVuY2VcbiAgICAgKiBAcGFyYW0gZGlzcGxheVxuICAgICAqL1xuICAgIHB1YmxpYyB1cGRhdGVEaXNwbGF5ZWRDb2x1bW5zUHJlZmVyZW5jZShkaXNwbGF5OiBzdHJpbmdbXSk6IHZvaWQge1xuICAgICAgICBjb25zdCBtb2R1bGUgPSB0aGlzLmludGVybmFsU3RhdGUubW9kdWxlO1xuICAgICAgICB0aGlzLnNhdmVQcmVmZXJlbmNlKG1vZHVsZSwgJ2Rpc3BsYXllZC1jb2x1bW5zJywgZGlzcGxheSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGRpc3BsYXllZCBjb2x1bW5zJyB1aSB1c2VyIHByZWZlcmVuY2VcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0RGlzcGxheWVkQ29sdW1uc1ByZWZlcmVuY2UoKTogc3RyaW5nW10ge1xuICAgICAgICBjb25zdCBtb2R1bGUgPSB0aGlzLmludGVybmFsU3RhdGUubW9kdWxlO1xuICAgICAgICBjb25zdCBkaXNwbGF5ZWRDb2x1bW5zID0gdGhpcy5sb2FkUHJlZmVyZW5jZShtb2R1bGUsICdkaXNwbGF5ZWQtY29sdW1ucycpO1xuXG4gICAgICAgIGlmICghaXNBcnJheShkaXNwbGF5ZWRDb2x1bW5zKSB8fCAhZGlzcGxheWVkQ29sdW1ucyB8fCAhZGlzcGxheWVkQ29sdW1ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChkaXNwbGF5ZWRDb2x1bW5zIGFzIHN0cmluZ1tdKTtcbiAgICB9XG5cblxuICAgIHB1YmxpYyB0cmlnZ2VyRGF0YVVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kYXRhVXBkYXRlU3RhdGUubmV4dCh0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIC8gcmVsb2FkIHJlY29yZHMgdXNpbmcgY3VycmVudCBwYWdpbmF0aW9uIGFuZCBjcml0ZXJpYVxuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSB1c2VDYWNoZSBpZiB0byB1c2UgY2FjaGVcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBPYnNlcnZhYmxlPExpc3RWaWV3U3RhdGU+XG4gICAgICovXG4gICAgcHVibGljIGxvYWQodXNlQ2FjaGUgPSB0cnVlKTogT2JzZXJ2YWJsZTxSZWNvcmRMaXN0PiB7XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IHRoaXMuaW50ZXJuYWxTdGF0ZS5tb2R1bGU7XG5cbiAgICAgICAgdGhpcy5zYXZlUHJlZmVyZW5jZShtb2R1bGUsICdjdXJyZW50LWZpbHRlcnMnLCB0aGlzLmludGVybmFsU3RhdGUuYWN0aXZlRmlsdGVycyk7XG4gICAgICAgIHRoaXMuc2F2ZVByZWZlcmVuY2UobW9kdWxlLCAnY3VycmVudC1zb3J0JywgdGhpcy5yZWNvcmRMaXN0LnNvcnQpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJlY29yZExpc3QubG9hZCh1c2VDYWNoZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgQVBJXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHN0YXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gc3RhdGUgdG8gc2V0XG4gICAgICovXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVN0YXRlKHN0YXRlOiBMaXN0Vmlld1N0YXRlKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RvcmUubmV4dCh0aGlzLmludGVybmFsU3RhdGUgPSBzdGF0ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IEFjdGl2ZSBxdWljayBmaWx0ZXJzXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRBY3RpdmVRdWlja0ZpbHRlcnMoKTogU2F2ZWRGaWx0ZXJNYXAge1xuICAgICAgICBsZXQgeydkZWZhdWx0JzogZGVmYXVsdEZpbHRlciwgLi4uY3VycmVudFF1aWNrRmlsdGVyc30gPSB0aGlzLmFjdGl2ZUZpbHRlcnM7XG4gICAgICAgIGxldCBhY3RpdmVGaWx0ZXJzID0ge30gYXMgU2F2ZWRGaWx0ZXJNYXA7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoY3VycmVudFF1aWNrRmlsdGVycykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWN0aXZlRmlsdGVyID0gY3VycmVudFF1aWNrRmlsdGVyc1trZXldID8/IG51bGw7XG4gICAgICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgaXNRdWlja0ZpbHRlciA9IGFjdGl2ZUZpbHRlcj8uYXR0cmlidXRlcz8ucXVpY2tfZmlsdGVyID8/IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAoaXNRdWlja0ZpbHRlcikge1xuICAgICAgICAgICAgICAgIGFjdGl2ZUZpbHRlcnNba2V5XSA9IGFjdGl2ZUZpbHRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhY3RpdmVGaWx0ZXJzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1lcmdlIENyaXRlcmlhXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBtZXJnZUNyaXRlcmlhKGZpbHRlcnM6IFNhdmVkRmlsdGVyTWFwKTogU2VhcmNoQ3JpdGVyaWEge1xuXG4gICAgICAgIGxldCBjcml0ZXJpYSA9IHt9IGFzIFNlYXJjaENyaXRlcmlhO1xuXG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhmaWx0ZXJzID8/IHt9KSA/PyBbXTtcblxuICAgICAgICBrZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlciA9IGZpbHRlcnNba2V5XSA/PyBudWxsO1xuICAgICAgICAgICAgY29uc3QgZmlsdGVyQ3JpdGVyaWEgPSBmaWx0ZXI/LmNyaXRlcmlhID8/IG51bGw7XG4gICAgICAgICAgICBjb25zdCBmaWx0ZXJDcml0ZXJpYUtleXMgPSBPYmplY3Qua2V5cyhmaWx0ZXJDcml0ZXJpYT8uZmlsdGVycyA/PyB7fSk7XG4gICAgICAgICAgICBpZiAoZmlsdGVyQ3JpdGVyaWEgPT09IG51bGwgfHwgKGZpbHRlckNyaXRlcmlhS2V5cyAmJiAhZmlsdGVyQ3JpdGVyaWFLZXlzLmxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlbXB0eU9iamVjdChjcml0ZXJpYSkpIHtcbiAgICAgICAgICAgICAgICBjcml0ZXJpYSA9IGRlZXBDbG9uZShmaWx0ZXJDcml0ZXJpYSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmaWx0ZXJDcml0ZXJpYUtleXMuZm9yRWFjaChjcml0ZXJpYUtleSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlsdGVyQ3JpdGVyaWFDb250ZW50ID0gZmlsdGVyQ3JpdGVyaWE/LmZpbHRlcnNbY3JpdGVyaWFLZXldID8/IG51bGw7XG4gICAgICAgICAgICAgICAgY29uc3QgY3JpdGVyaWFDb250ZW50ID0gY3JpdGVyaWE/LmZpbHRlcnNbY3JpdGVyaWFLZXldID8/IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKCFmaWx0ZXJDcml0ZXJpYUNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGNyaXRlcmlhT3BlcmF0b3IgPSBjcml0ZXJpYUNvbnRlbnQ/Lm9wZXJhdG9yID8/IG51bGxcblxuICAgICAgICAgICAgICAgIGlmICghY3JpdGVyaWFDb250ZW50IHx8ICFjcml0ZXJpYU9wZXJhdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNyaXRlcmlhLmZpbHRlcnNbY3JpdGVyaWFLZXldID0gZGVlcENsb25lKGZpbHRlckNyaXRlcmlhQ29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXJDcml0ZXJpYU9wZXJhdG9yID0gZmlsdGVyQ3JpdGVyaWFDb250ZW50Py5vcGVyYXRvciA/PyBudWxsXG4gICAgICAgICAgICAgICAgaWYgKGZpbHRlckNyaXRlcmlhT3BlcmF0b3IgIT09IGNyaXRlcmlhT3BlcmF0b3IgfHwgZmlsdGVyQ3JpdGVyaWFPcGVyYXRvciAhPT0gJz0nKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjcml0ZXJpYS5maWx0ZXJzW2NyaXRlcmlhS2V5XTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNyaXRlcmlhQ29udGVudC52YWx1ZXMgPSB1bmlvbihjcml0ZXJpYUNvbnRlbnQudmFsdWVzID8/IFtdLCBmaWx0ZXJDcml0ZXJpYUNvbnRlbnQudmFsdWVzID8/IFtdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gY3JpdGVyaWE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3BlbiBjb2x1bW5zIGNob29zZXIgbW9kYWxcbiAgICAgKi9cbiAgICBvcGVuQ29sdW1uQ2hvb3NlckRpYWxvZygpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBtb2RhbFJlZiA9IHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oQ29sdW1uQ2hvb3NlckNvbXBvbmVudCwge1xuICAgICAgICAgICAgYXJpYUxhYmVsbGVkQnk6ICdtb2RhbC1iYXNpYy10aXRsZScsXG4gICAgICAgICAgICBjZW50ZXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIHNpemU6ICdsZycsXG4gICAgICAgICAgICB3aW5kb3dDbGFzczogJ2NvbHVtbi1jaG9vc2VyLW1vZGFsJ1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBkaXNwbGF5ZWRDb2x1bW5zID0gdGhpcy5jb2x1bW5zLmdldFZhbHVlKCkuZmlsdGVyKGZ1bmN0aW9uIChjb2wpIHtcbiAgICAgICAgICAgIHJldHVybiAhY29sLmhhc093blByb3BlcnR5KCdkZWZhdWx0JylcbiAgICAgICAgICAgICAgICB8fCAoY29sLmhhc093blByb3BlcnR5KCdkZWZhdWx0JykgJiYgY29sLmRlZmF1bHQgPT09IHRydWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBoaWRkZW5Db2x1bW5zID0gdGhpcy5jb2x1bW5zLmdldFZhbHVlKCkuZmlsdGVyKGZ1bmN0aW9uIChjb2wpIHtcbiAgICAgICAgICAgIHJldHVybiBjb2wuaGFzT3duUHJvcGVydHkoJ2RlZmF1bHQnKSAmJiBjb2wuZGVmYXVsdCA9PT0gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1vZGFsUmVmLmNvbXBvbmVudEluc3RhbmNlLmRpc3BsYXllZCA9IGRpc3BsYXllZENvbHVtbnM7XG4gICAgICAgIG1vZGFsUmVmLmNvbXBvbmVudEluc3RhbmNlLmhpZGRlbiA9IGhpZGRlbkNvbHVtbnM7XG5cbiAgICAgICAgbW9kYWxSZWYucmVzdWx0LnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXN1bHQuZGlzcGxheWVkIHx8ICFyZXN1bHQuaGlkZGVuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgYWxsQ29sdW1uczogQ29sdW1uRGVmaW5pdGlvbltdID0gW107XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZERpc3BsYXlDb2x1bW5zOiBDb2x1bW5EZWZpbml0aW9uW10gPSByZXN1bHQuZGlzcGxheWVkO1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRIaWRlQ29sdW1uczogQ29sdW1uRGVmaW5pdGlvbltdID0gcmVzdWx0LmhpZGRlbjtcblxuICAgICAgICAgICAgc2VsZWN0ZWREaXNwbGF5Q29sdW1ucy5mb3JFYWNoKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgICAgICAgICAgICBjb2x1bW4uZGVmYXVsdCA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNlbGVjdGVkSGlkZUNvbHVtbnMuZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgICAgICAgICAgY29sdW1uLmRlZmF1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYWxsQ29sdW1ucy5wdXNoKC4uLnNlbGVjdGVkRGlzcGxheUNvbHVtbnMsIC4uLnNlbGVjdGVkSGlkZUNvbHVtbnMpO1xuICAgICAgICAgICAgdGhpcy5jb2x1bW5zLm5leHQoYWxsQ29sdW1ucyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRpc3BsYXllZENvbHMgPSBzZWxlY3RlZERpc3BsYXlDb2x1bW5zLm1hcChjb2wgPT4gY29sLm5hbWUpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVEaXNwbGF5ZWRDb2x1bW5zUHJlZmVyZW5jZShkaXNwbGF5ZWRDb2xzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIGlmIHdpZGdldHMgYXJlIHRvIGRpc3BsYXlcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgY2FsY3VsYXRlU2hvd1dpZGdldHMoKTogdm9pZCB7XG4gICAgICAgIGxldCBzaG93ID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgbWV0YSA9IHRoaXMubWV0YWRhdGFTdG9yZS5nZXQoKSB8fCB7fTtcbiAgICAgICAgY29uc3QgbGlzdFZpZXdNZXRhID0gbWV0YS5saXN0VmlldyB8fCB7fSBhcyBMaXN0Vmlld01ldGE7XG4gICAgICAgIGNvbnN0IHNpZGViYXJXaWRnZXRzQ29uZmlnID0gbGlzdFZpZXdNZXRhLnNpZGViYXJXaWRnZXRzIHx8IFtdO1xuXG4gICAgICAgIGlmIChzaWRlYmFyV2lkZ2V0c0NvbmZpZyAmJiBzaWRlYmFyV2lkZ2V0c0NvbmZpZy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzaG93ID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNob3dTaWRlYmFyV2lkZ2V0cyA9IHRoaXMubG9hZFByZWZlcmVuY2UodGhpcy5nZXRNb2R1bGVOYW1lKCksICdzaG93LXNpZGViYXItd2lkZ2V0cycpID8/IG51bGw7XG5cbiAgICAgICAgaWYgKHNob3dTaWRlYmFyV2lkZ2V0cyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zaG93U2lkZWJhcldpZGdldHMgPSBzaG93U2lkZWJhcldpZGdldHM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNob3dTaWRlYmFyV2lkZ2V0cyA9IHNob3c7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLndpZGdldHMgPSBzaG93O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIHVpIHVzZXIgcHJlZmVyZW5jZSBrZXlcbiAgICAgKiBAcGFyYW0gc3RvcmFnZUtleVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0UHJlZmVyZW5jZUtleShzdG9yYWdlS2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ2xpc3R2aWV3LScgKyBzdG9yYWdlS2V5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNhdmUgdWkgdXNlciBwcmVmZXJlbmNlXG4gICAgICogQHBhcmFtIG1vZHVsZVxuICAgICAqIEBwYXJhbSBzdG9yYWdlS2V5XG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBzYXZlUHJlZmVyZW5jZShtb2R1bGU6IHN0cmluZywgc3RvcmFnZUtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMucHJlZmVyZW5jZXMuc2V0VWkobW9kdWxlLCB0aGlzLmdldFByZWZlcmVuY2VLZXkoc3RvcmFnZUtleSksIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIHVpIHVzZXIgcHJlZmVyZW5jZVxuICAgICAqIEBwYXJhbSBtb2R1bGVcbiAgICAgKiBAcGFyYW0gc3RvcmFnZUtleVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgbG9hZFByZWZlcmVuY2UobW9kdWxlOiBzdHJpbmcsIHN0b3JhZ2VLZXk6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByZWZlcmVuY2VzLmdldFVpKG1vZHVsZSwgdGhpcy5nZXRQcmVmZXJlbmNlS2V5KHN0b3JhZ2VLZXkpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIGN1cnJlbnQgZmlsdGVyXG4gICAgICogQHBhcmFtIG1vZHVsZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgbG9hZEN1cnJlbnRGaWx0ZXIobW9kdWxlOiBzdHJpbmcpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBhY3RpdmVGaWx0ZXJzUHJlZiA9IHRoaXMubG9hZFByZWZlcmVuY2UobW9kdWxlLCAnY3VycmVudC1maWx0ZXJzJykgPz8ge30gYXMgU2F2ZWRGaWx0ZXJNYXA7XG4gICAgICAgIGlmICghYWN0aXZlRmlsdGVyc1ByZWYgfHwgZW1wdHlPYmplY3QoYWN0aXZlRmlsdGVyc1ByZWYpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY3VycmVudFNvcnQgPSB0aGlzLmxvYWRQcmVmZXJlbmNlKG1vZHVsZSwgJ2N1cnJlbnQtc29ydCcpIGFzIFNvcnRpbmdTZWxlY3Rpb247XG4gICAgICAgIGlmICghY3VycmVudFNvcnQgJiYgZW1wdHlPYmplY3QoY3VycmVudFNvcnQpKSB7XG4gICAgICAgICAgICBjdXJyZW50U29ydCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldEZpbHRlcnMoYWN0aXZlRmlsdGVyc1ByZWYsIGZhbHNlLCBjdXJyZW50U29ydCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZCBjdXJyZW50IGZpbHRlclxuICAgICAqIEBwYXJhbSBtb2R1bGVcbiAgICAgKiBAcGFyYW0gcXVlcnlQYXJhbXNcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGxvYWRRdWVyeUZpbHRlciAoXG4gICAgICAgIG1vZHVsZTpzdHJpbmcsXG4gICAgICAgIHF1ZXJ5UGFyYW1zOiBQYXJhbXNcbiAgICApOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgb3JkZXJCeTogc3RyaW5nID0gcXVlcnlQYXJhbXNbJ29yZGVyQnknXSA/PyAnJztcbiAgICAgICAgY29uc3Qgc29ydE9yZGVyOiBzdHJpbmcgPSBxdWVyeVBhcmFtc1snc29ydE9yZGVyJ10gPz8gJyc7XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMucmVjb3JkTGlzdC5tYXBTb3J0T3JkZXIoc29ydE9yZGVyKTtcblxuICAgICAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLmxpc3RWaWV3VXJsUXVlcnlTZXJ2aWNlLmJ1aWxkVXJsUXVlcnlCYXNlZEZpbHRlcihcbiAgICAgICAgICAgIG1vZHVsZSxcbiAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxTdGF0ZS5hY3RpdmVGaWx0ZXJzLmRlZmF1bHQsXG4gICAgICAgICAgICBxdWVyeVBhcmFtc1xuICAgICAgICApO1xuICAgICAgICBpZiAoaXNFbXB0eShmaWx0ZXIpKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpbHRlcnMgPSB7ICdkZWZhdWx0JzogZmlsdGVyIH07XG5cbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICAgICAgICAuLi50aGlzLmludGVybmFsU3RhdGUsXG4gICAgICAgICAgICBhY3RpdmVGaWx0ZXJzOiBkZWVwQ2xvbmUoZmlsdGVycyksXG4gICAgICAgICAgICBvcGVuRmlsdGVyOiBkZWVwQ2xvbmUoZmlsdGVyKVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJlY29yZExpc3QudXBkYXRlU29ydGluZyhvcmRlckJ5LCBkaXJlY3Rpb24sIGZhbHNlKTtcbiAgICAgICAgdGhpcy5yZWNvcmRMaXN0LnVwZGF0ZVNlYXJjaENyaXRlcmlhKGZpbHRlci5jcml0ZXJpYSwgZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWQgY3VycmVudCBzb3J0aW5nXG4gICAgICogQHBhcmFtIG1vZHVsZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgbG9hZEN1cnJlbnRTb3J0KG1vZHVsZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTb3J0ID0gdGhpcy5sb2FkUHJlZmVyZW5jZShtb2R1bGUsICdjdXJyZW50LXNvcnQnKTtcbiAgICAgICAgaWYgKCFjdXJyZW50U29ydCB8fCBlbXB0eU9iamVjdChjdXJyZW50U29ydCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVjb3JkTGlzdC5zb3J0ID0gY3VycmVudFNvcnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZCBjdXJyZW50IGRpc3BsYXllZCBjb2x1bW5zXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBsb2FkQ3VycmVudERpc3BsYXllZENvbHVtbnMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubWV0YWRhdGFTdG9yZS5saXN0Vmlld0NvbHVtbnMkLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKGNvbHMgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGlzcGxheWVkQ29sdW1ucyA9IHRoaXMuZ2V0RGlzcGxheWVkQ29sdW1uc1ByZWZlcmVuY2UoKTtcblxuICAgICAgICAgICAgaWYgKCFkaXNwbGF5ZWRDb2x1bW5zIHx8ICFjb2xzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2x1bW5zLm5leHQoY29scyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBjb2xNYXAgPSB7fSBhcyB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfTtcbiAgICAgICAgICAgIGRpc3BsYXllZENvbHVtbnMuZm9yRWFjaChkaXNwbGF5ZWRDb2x1bW4gPT4ge1xuICAgICAgICAgICAgICAgIGNvbE1hcFtkaXNwbGF5ZWRDb2x1bW5dID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGNvbnN0IGRpc3BsYXllZE1hcCA9IHt9IGFzIHsgW2tleTogc3RyaW5nXTogQ29sdW1uRGVmaW5pdGlvbiB9O1xuXG4gICAgICAgICAgICBjb25zdCBoaWRkZW4gPSBbXSBhcyBDb2x1bW5EZWZpbml0aW9uW107XG4gICAgICAgICAgICBjb2xzLmZvckVhY2goY29sID0+IHtcbiAgICAgICAgICAgICAgICBjb2wuZGVmYXVsdCA9IGNvbE1hcFtjb2wubmFtZV0gPz8gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKGNvbC5kZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXllZE1hcFtjb2wubmFtZV0gPSBjb2w7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuLnB1c2goY29sKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgZGlzcGxheWVkID0gZGlzcGxheWVkQ29sdW1ucy5maWx0ZXIoY29sID0+ICEhZGlzcGxheWVkTWFwW2NvbF0pLm1hcChjb2wgPT4gZGlzcGxheWVkTWFwW2NvbF0pO1xuXG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMubmV4dChbLi4uZGlzcGxheWVkLCAuLi5oaWRkZW5dKTtcbiAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgZGF0YSB1cGRhdGUgc3RhdGUuXG4gICAgICogSXQgc2hvdWxkIGJlIGVtaXR0ZWQgb24gYW55IGNoYW5nZSBpbiB2YWx1ZXMgb24gdGhlIHJlY29yZCBsaXN0LlxuICAgICAqIFJlbG9hZC9QYWdpbmF0aW9uIGlzIG5vdCBjb25zaWRlcmVkIGFzIGEgZGF0YSB1cGRhdGVcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaW5pdERhdGFVcGRhdGVTdGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kYXRhVXBkYXRlU3RhdGUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KHRydWUpO1xuICAgICAgICB0aGlzLmRhdGFVcGRhdGUkID0gdGhpcy5kYXRhVXBkYXRlU3RhdGUuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogIEluaXRpYWxpemUgdGhlIGRhdGFTZXQgdXBkYXRlIHN0YXRlLlxuICAgICAqICBJdCBzaG91bGQgYmUgZW1pdHRlZCBvbiBhbnkgY2hhbmdlIGluIGRhdGFTZXQgZS5nLiBkdWUgdG8gZGF0YSBmaWx0ZXIsIGR1ZSB0byBkYXRhIGRlbGV0ZSxcbiAgICAgKiAgZHVlIHRvIGRhdGEgZWRpdCBvciBhbnkgZXZlbnQgd2hpY2ggY2F1c2VzIGNoYW5nZSBpbiB0aGUgcmVzdWx0aW5nIGRhdGFTZXQuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGluaXREYXRhU2V0VXBkYXRlZFN0YXRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRhdGFTZXRVcGRhdGUkID0gdGhpcy5jcml0ZXJpYSQucGlwZShcbiAgICAgICAgICAgIGNvbWJpbmVMYXRlc3RXaXRoKHRoaXMuZGF0YVVwZGF0ZSQpLFxuICAgICAgICAgICAgbWFwKCgpID0+IHRydWUpXG4gICAgICAgICk7XG4gICAgfVxufVxuIl19