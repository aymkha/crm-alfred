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
import { isEmpty } from 'lodash-es';
import { BehaviorSubject, combineLatest, combineLatestWith, of } from 'rxjs';
import { catchError, distinctUntilChanged, finalize, map, take, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { deepClone, isVoid, } from 'common';
import { ViewStore } from '../../../../store/view/view.store';
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/record/graphql/api.record.get";
import * as i2 from "../../../../store/record/graphql/api.record.save";
import * as i3 from "../../../../store/app-state/app-state.store";
import * as i4 from "../../../../store/language/language.store";
import * as i5 from "../../../../store/navigation/navigation.store";
import * as i6 from "../../../../services/navigation/module-navigation/module-navigation.service";
import * as i7 from "../../../../store/metadata/metadata.store.service";
import * as i8 from "../../../../services/local-storage/local-storage.service";
import * as i9 from "../../../../services/message/message.service";
import * as i10 from "../../../../containers/subpanel/store/subpanel/subpanel.store.factory";
import * as i11 from "../../../../services/record/record.manager";
import * as i12 from "../../../../store/statistics/statistics-batch.service";
import * as i13 from "../../../../store/record/record.store.factory";
import * as i14 from "../../../../store/user-preference/user-preference.store";
import * as i15 from "../../../../components/panel-logic/panel-logic.manager";
const initialState = {
    module: '',
    recordID: '',
    loading: false,
    widgets: false,
    showSidebarWidgets: false,
    showTopWidget: false,
    showSubpanels: false,
    mode: 'detail',
    params: {
        returnModule: '',
        returnId: '',
        returnAction: ''
    }
};
class RecordViewStore extends ViewStore {
    recordFetchGQL;
    recordSaveGQL;
    appStateStore;
    languageStore;
    navigationStore;
    moduleNavigation;
    metadataStore;
    localStorage;
    message;
    subpanelFactory;
    recordManager;
    statisticsBatch;
    recordStoreFactory;
    preferences;
    panelLogicManager;
    /**
     * Public long-lived observable streams
     */
    record$;
    stagingRecord$;
    loading$;
    widgets$;
    showSidebarWidgets$;
    showTopWidget$;
    showSubpanels$;
    mode$;
    subpanels$;
    viewContext$;
    subpanelReload$;
    panels = [];
    panels$;
    /**
     * View-model that resolves once all the data is ready (or updated).
     */
    vm$;
    vm;
    data;
    recordStore;
    /** Internal Properties */
    cache$ = null;
    internalState = deepClone(initialState);
    store = new BehaviorSubject(this.internalState);
    state$ = this.store.asObservable();
    subpanels;
    subpanelsState;
    subpanelReloadSubject = new BehaviorSubject({});
    subpanelReloadSub = [];
    subs = [];
    fieldSubs = [];
    panelsSubject = new BehaviorSubject(this.panels);
    constructor(recordFetchGQL, recordSaveGQL, appStateStore, languageStore, navigationStore, moduleNavigation, metadataStore, localStorage, message, subpanelFactory, recordManager, statisticsBatch, recordStoreFactory, preferences, panelLogicManager) {
        super(appStateStore, languageStore, navigationStore, moduleNavigation, metadataStore);
        this.recordFetchGQL = recordFetchGQL;
        this.recordSaveGQL = recordSaveGQL;
        this.appStateStore = appStateStore;
        this.languageStore = languageStore;
        this.navigationStore = navigationStore;
        this.moduleNavigation = moduleNavigation;
        this.metadataStore = metadataStore;
        this.localStorage = localStorage;
        this.message = message;
        this.subpanelFactory = subpanelFactory;
        this.recordManager = recordManager;
        this.statisticsBatch = statisticsBatch;
        this.recordStoreFactory = recordStoreFactory;
        this.preferences = preferences;
        this.panelLogicManager = panelLogicManager;
        this.panels$ = this.panelsSubject.asObservable();
        this.recordStore = recordStoreFactory.create(this.getViewFieldsObservable());
        this.record$ = this.recordStore.state$.pipe(distinctUntilChanged());
        this.stagingRecord$ = this.recordStore.staging$.pipe(distinctUntilChanged());
        this.loading$ = this.state$.pipe(map(state => state.loading));
        this.widgets$ = this.state$.pipe(map(state => state.widgets));
        this.showSidebarWidgets$ = this.state$.pipe(map(state => state.showSidebarWidgets));
        this.showTopWidget$ = this.state$.pipe(map(state => state.showTopWidget));
        this.showSubpanels$ = this.state$.pipe(map(state => state.showSubpanels));
        this.mode$ = this.state$.pipe(map(state => state.mode));
        this.subpanelReload$ = this.subpanelReloadSubject.asObservable();
        const data$ = this.record$.pipe(combineLatestWith(this.loading$), map(([record, loading]) => {
            this.data = { record, loading };
            return this.data;
        }));
        this.vm$ = data$.pipe(combineLatestWith(this.appData$, this.metadata$), map(([data, appData, metadata]) => {
            this.vm = { data, appData, metadata };
            return this.vm;
        }));
        this.subpanelsState = new BehaviorSubject({});
        this.subpanels$ = this.subpanelsState.asObservable();
        this.viewContext$ = this.record$.pipe(map(() => this.getViewContext()));
        this.initPanels();
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
    get showTopWidget() {
        return this.internalState.showTopWidget;
    }
    set showTopWidget(show) {
        this.updateState({
            ...this.internalState,
            showTopWidget: show
        });
    }
    get showSubpanels() {
        return this.internalState.showTopWidget;
    }
    set showSubpanels(show) {
        this.updateState({
            ...this.internalState,
            showSubpanels: show
        });
    }
    get params() {
        return this.internalState.params || {};
    }
    set params(params) {
        this.updateState({
            ...this.internalState,
            params
        });
    }
    getModuleName() {
        return this.internalState.module;
    }
    getRecordId() {
        return this.internalState.recordID;
    }
    getViewContext() {
        return {
            module: this.getModuleName(),
            id: this.getRecordId(),
            record: this.getBaseRecord()
        };
    }
    getSubpanels() {
        return this.subpanels;
    }
    /**
     * Clean destroy
     */
    destroy() {
        this.clear();
    }
    /**
     * Initial record load if not cached and update state.
     * Returns observable to be used in resolver if needed
     *
     * @param {string} module to use
     * @param {string} recordID to use
     * @param {string} mode to use
     * @param {object} params to set
     * @returns {object} Observable<any>
     */
    init(module, recordID, mode = 'detail', params = {}) {
        this.internalState.module = module;
        this.internalState.recordID = recordID;
        this.setMode(mode);
        this.initSubpanels(module, recordID);
        this.calculateShowWidgets();
        return this.load().pipe(tap(() => {
            this.showTopWidget = true;
            this.loadSubpanelStatistics(module);
            this.parseParams(params);
        }));
    }
    /**
     * Clear observable cache
     */
    clear() {
        this.cache$ = null;
        this.clearSubpanels();
        this.subpanelsState.unsubscribe();
        this.updateState(deepClone(initialState));
        this.subs = this.safeUnsubscription(this.subs);
        this.fieldSubs = this.safeUnsubscription(this.fieldSubs);
    }
    /**
     * Get staging record
     *
     * @returns {string} ViewMode
     */
    getBaseRecord() {
        if (!this.internalState) {
            return null;
        }
        return this.recordStore.getBaseRecord();
    }
    /**
     * Get current view mode
     *
     * @returns {string} ViewMode
     */
    getMode() {
        if (!this.internalState) {
            return null;
        }
        return this.internalState.mode;
    }
    /**
     * Set new mode
     *
     * @param {string} mode ViewMode
     */
    setMode(mode) {
        this.updateState({ ...this.internalState, mode });
    }
    save() {
        this.appStateStore.updateLoading(`${this.internalState.module}-record-save`, true);
        this.updateState({
            ...this.internalState,
            loading: true
        });
        return this.recordStore.save().pipe(catchError(() => {
            this.message.addDangerMessageByKey('LBL_ERROR_SAVING');
            return of({});
        }), finalize(() => {
            this.setMode('detail');
            this.appStateStore.updateLoading(`${this.internalState.module}-record-save`, false);
            this.updateState({
                ...this.internalState,
                loading: false
            });
        }));
    }
    /**
     * Load / reload record using current pagination and criteria
     *
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<RecordViewState>
     */
    load(useCache = true) {
        this.updateState({
            ...this.internalState,
            loading: true
        });
        return this.recordStore.retrieveRecord(this.internalState.module, this.internalState.recordID, useCache).pipe(tap((data) => {
            this.updateState({
                ...this.internalState,
                recordID: data.id,
                module: data.module,
                loading: false
            });
        }));
    }
    /**
     * Get summary template
     *
     * @returns {string} summary template label
     */
    getSummaryTemplate() {
        const metadata = this.metadata || {};
        const recordMeta = metadata.recordView || {};
        const templates = recordMeta.summaryTemplates || {};
        return templates[this.getMode()] || '';
    }
    initValidators(record) {
        if (!record || !Object.keys(record?.fields).length) {
            return;
        }
        Object.keys(record.fields).forEach(fieldName => {
            const field = record.fields[fieldName];
            const formControl = field?.formControl ?? null;
            if (!formControl) {
                return;
            }
            this.resetValidators(field);
            const validators = field?.validators ?? [];
            const asyncValidators = field?.asyncValidators ?? [];
            if (field?.formControl && validators.length) {
                field.formControl.setValidators(validators);
            }
            if (field?.formControl && asyncValidators.length) {
                field.formControl.setAsyncValidators(asyncValidators);
            }
        });
    }
    resetValidators(field) {
        if (!field?.formControl) {
            return;
        }
        field.formControl.clearValidators();
        field.formControl.clearAsyncValidators();
    }
    resetValidatorsForAllFields(record) {
        if (!record || !record?.fields?.length) {
            return;
        }
        Object.keys(record.fields).forEach(fieldName => {
            const field = record.fields[fieldName];
            const formControl = field?.formControl ?? null;
            if (!formControl) {
                return;
            }
            this.resetValidators(field);
        });
    }
    /**
     * Parse query params
     *
     * @param {object} params to set
     */
    parseParams(params = {}) {
        if (!params) {
            return;
        }
        const currentParams = { ...this.internalState.params };
        Object.keys(params).forEach(paramKey => {
            if (!isVoid(currentParams[paramKey])) {
                currentParams[paramKey] = params[paramKey];
                return;
            }
        });
        this.params = params;
    }
    /**
     * Load all statistics
     *
     * @param {string} module if to use cache
     */
    loadSubpanelStatistics(module) {
        const subpanels = this.subpanelsState.value;
        if (!subpanels) {
            return;
        }
        const queries = {};
        Object.keys(subpanels).forEach(subpanelKey => {
            const subpanel = subpanels[subpanelKey];
            const statsMap = subpanel.statistics;
            if (!statsMap || !Object.keys(statsMap).length) {
                return;
            }
            if (subpanel.shouldBatchStatistic() === false) {
                subpanel.loadAllStatistics().pipe(take(1)).subscribe();
                return;
            }
            const subpanelQueries = subpanel.getAllStatisticQuery();
            Object.keys(subpanelQueries).forEach(subpanelQueryKey => {
                const queryKey = this.buildStatKey(subpanelKey, subpanelQueryKey);
                queries[queryKey] = subpanelQueries[subpanelQueryKey];
            });
            subpanel.setAllStatisticsLoading(true);
        });
        this.statisticsBatch.fetch(module, queries)
            .pipe(take(1))
            .subscribe((stats) => {
            Object.keys(subpanels).forEach(subpanelKey => {
                const subpanel = subpanels[subpanelKey];
                const subpanelQueries = subpanel.getAllStatisticQuery();
                Object.keys(subpanelQueries).forEach(subpanelQueryKey => {
                    const queryKey = this.buildStatKey(subpanelKey, subpanelQueryKey);
                    const stat = stats[queryKey];
                    if (!stat) {
                        return;
                    }
                    subpanel.setStatistics(subpanelQueryKey, stat, true);
                });
                subpanel.setAllStatisticsLoading(false);
            });
        });
    }
    buildStatKey(subpanelKey, subpanelQueryKey) {
        subpanelKey = subpanelKey.replace(/_/g, '-');
        subpanelQueryKey = subpanelQueryKey.replace(/_/g, '-');
        return subpanelKey + '-' + subpanelQueryKey;
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
     * Init subpanels
     *
     * @param {string} module parent module
     * @param {string} recordId id
     */
    initSubpanels(module, recordId) {
        this.showSubpanels = true;
        this.metadataStore.subPanelMetadata$.subscribe((meta) => {
            this.clearSubpanels();
            Object.keys(meta).forEach((key) => {
                this.subpanels[key] = this.subpanelFactory.create();
                this.subpanels[key].init(module, recordId, meta[key], this.record$);
            });
            this.subpanelsState.next(this.subpanels);
            Object.keys(this.subpanels).forEach(subpanelKey => {
                const subpanel = this.subpanels[subpanelKey];
                this.subpanelReloadSub.push(subpanel.recordList.records$.pipe(tap(() => {
                    const update = {};
                    update[subpanelKey] = true;
                    this.subpanelReloadSubject.next(update);
                })).subscribe());
            });
        });
    }
    initPanels() {
        const panelSub = combineLatest([
            this.metadataStore.recordViewMetadata$,
            this.stagingRecord$,
            this.languageStore.vm$,
        ]).subscribe(([meta, record, languages]) => {
            const panels = [];
            const module = (record && record.module) || '';
            this.safeUnsubscription(this.fieldSubs);
            meta.panels.forEach(panelDefinition => {
                const label = (panelDefinition.label)
                    ? panelDefinition.label.toUpperCase()
                    : this.languageStore.getFieldLabel(panelDefinition.key.toUpperCase(), module, languages);
                const panel = { label, key: panelDefinition.key, rows: [] };
                const tabDef = meta.templateMeta.tabDefs[panelDefinition.key.toUpperCase()] ?? null;
                if (tabDef) {
                    panel.meta = tabDef;
                }
                panelDefinition.rows.forEach(rowDefinition => {
                    const row = { cols: [] };
                    rowDefinition.cols.forEach(cellDefinition => {
                        row.cols.push({ ...cellDefinition });
                    });
                    panel.rows.push(row);
                });
                panel.displayState = new BehaviorSubject(tabDef?.display ?? true);
                panel.display$ = panel.displayState.asObservable();
                panels.push(panel);
                if (isEmpty(record?.fields) || isEmpty(tabDef?.displayLogic)) {
                    return;
                }
                Object.values(tabDef.displayLogic).forEach((logicDef) => {
                    if (isEmpty(logicDef?.params?.fieldDependencies)) {
                        return;
                    }
                    logicDef.params.fieldDependencies.forEach(fieldKey => {
                        const field = record.fields[fieldKey] || null;
                        if (isEmpty(field)) {
                            return;
                        }
                        this.fieldSubs.push(field.valueChanges$.subscribe(() => {
                            this.panelLogicManager.runLogic(logicDef.key, field, panel, record, this.getMode());
                        }));
                    });
                });
            });
            this.panelsSubject.next(this.panels = panels);
            return panels;
        });
        this.subs.push(panelSub);
    }
    clearSubpanels() {
        if (this.subpanels) {
            Object.keys(this.subpanels).forEach((key) => {
                this.subpanels[key].clear();
            });
        }
        if (this.subpanelReloadSub.length) {
            this.subpanelReloadSub.forEach(sub => sub.unsubscribe());
            this.subpanelReloadSub = [];
        }
        this.subpanels = {};
    }
    /**
     * Calculate if widgets are to display
     */
    calculateShowWidgets() {
        let show = false;
        const recordViewMeta = this.getRecordViewMetadata();
        const sidebarWidgetsConfig = recordViewMeta.sidebarWidgets || [];
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
     * Get record view metadata
     *
     * @returns {object} metadata RecordViewMetadata
     */
    getRecordViewMetadata() {
        const meta = this.metadataStore.get() || {};
        return meta.recordView || {};
    }
    /**
     * Get vardefs
     *
     * @returns {object} vardefs FieldDefinitionMap
     */
    getVardefs() {
        const meta = this.getRecordViewMetadata();
        return meta.vardefs || {};
    }
    /**
     * Get view fields observable
     *
     * @returns {object} Observable<ViewFieldDefinition[]>
     */
    getViewFieldsObservable() {
        return this.metadataStore.recordViewMetadata$.pipe(map((recordMetadata) => {
            const fieldsMap = {};
            recordMetadata.panels.forEach(panel => {
                panel.rows.forEach(row => {
                    row.cols.forEach(col => {
                        const fieldName = col.name ?? col.fieldDefinition.name ?? '';
                        fieldsMap[fieldName] = col;
                    });
                });
            });
            Object.keys(recordMetadata.vardefs).forEach(fieldKey => {
                const vardef = recordMetadata.vardefs[fieldKey] ?? null;
                if (!vardef || isEmpty(vardef)) {
                    return;
                }
                // already defined. skip
                if (fieldsMap[fieldKey]) {
                    return;
                }
                if (vardef.type == 'relate') {
                    return;
                }
                fieldsMap[fieldKey] = {
                    name: fieldKey,
                    vardefBased: true,
                    label: vardef.vname ?? '',
                    type: vardef.type ?? '',
                    display: vardef.display ?? '',
                    fieldDefinition: vardef,
                    metadata: vardef.metadata ?? {},
                    logic: vardef.logic ?? {}
                };
            });
            return Object.values(fieldsMap);
        }));
    }
    /**
     * Build ui user preference key
     *
     * @param {string} storageKey Storage Key
     * @protected
     * @returns {string} Preference Key
     */
    getPreferenceKey(storageKey) {
        return 'recordview-' + storageKey;
    }
    /**
     * Save ui user preference
     *
     * @param {string} module Module
     * @param {string} storageKey Storage Key
     * @param {any} value Value
     * @protected
     */
    savePreference(module, storageKey, value) {
        this.preferences.setUi(module, this.getPreferenceKey(storageKey), value);
    }
    /**
     * Load ui user preference
     *
     * @param {string} module Module
     * @param {string} storageKey Storage Key
     * @protected
     * @returns {any} User Preference
     */
    loadPreference(module, storageKey) {
        return this.preferences.getUi(module, this.getPreferenceKey(storageKey));
    }
    safeUnsubscription(subscriptionArray) {
        subscriptionArray.forEach(sub => {
            if (sub.closed) {
                return;
            }
            sub.unsubscribe();
        });
        subscriptionArray = [];
        return subscriptionArray;
    }
    static ɵfac = function RecordViewStore_Factory(t) { return new (t || RecordViewStore)(i0.ɵɵinject(i1.RecordFetchGQL), i0.ɵɵinject(i2.RecordSaveGQL), i0.ɵɵinject(i3.AppStateStore), i0.ɵɵinject(i4.LanguageStore), i0.ɵɵinject(i5.NavigationStore), i0.ɵɵinject(i6.ModuleNavigation), i0.ɵɵinject(i7.MetadataStore), i0.ɵɵinject(i8.LocalStorageService), i0.ɵɵinject(i9.MessageService), i0.ɵɵinject(i10.SubpanelStoreFactory), i0.ɵɵinject(i11.RecordManager), i0.ɵɵinject(i12.StatisticsBatch), i0.ɵɵinject(i13.RecordStoreFactory), i0.ɵɵinject(i14.UserPreferenceStore), i0.ɵɵinject(i15.PanelLogicManager)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordViewStore, factory: RecordViewStore.ɵfac });
}
export { RecordViewStore };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordViewStore, [{
        type: Injectable
    }], function () { return [{ type: i1.RecordFetchGQL }, { type: i2.RecordSaveGQL }, { type: i3.AppStateStore }, { type: i4.LanguageStore }, { type: i5.NavigationStore }, { type: i6.ModuleNavigation }, { type: i7.MetadataStore }, { type: i8.LocalStorageService }, { type: i9.MessageService }, { type: i10.SubpanelStoreFactory }, { type: i11.RecordManager }, { type: i12.StatisticsBatch }, { type: i13.RecordStoreFactory }, { type: i14.UserPreferenceStore }, { type: i15.PanelLogicManager }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLXZpZXcuc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvcmVjb3JkL3N0b3JlL3JlY29yZC12aWV3L3JlY29yZC12aWV3LnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFjLEVBQUUsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDdkcsT0FBTyxFQUFFLFVBQVUsRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RixPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFFSCxTQUFTLEVBS1QsTUFBTSxHQVdULE1BQU0sUUFBUSxDQUFDO0FBb0JoQixPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sbUNBQW1DLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzVELE1BQU0sWUFBWSxHQUFvQjtJQUNsQyxNQUFNLEVBQUUsRUFBRTtJQUNWLFFBQVEsRUFBRSxFQUFFO0lBQ1osT0FBTyxFQUFFLEtBQUs7SUFDZCxPQUFPLEVBQUUsS0FBSztJQUNkLGtCQUFrQixFQUFFLEtBQUs7SUFDekIsYUFBYSxFQUFFLEtBQUs7SUFDcEIsYUFBYSxFQUFFLEtBQUs7SUFDcEIsSUFBSSxFQUFFLFFBQVE7SUFDZCxNQUFNLEVBQUU7UUFDSixZQUFZLEVBQUUsRUFBRTtRQUNoQixRQUFRLEVBQUUsRUFBRTtRQUNaLFlBQVksRUFBRSxFQUFFO0tBQ25CO0NBQ0osQ0FBQztBQUVGLE1BQ2EsZUFBZ0IsU0FBUSxTQUFTO0lBMEM1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QyxNQUFNLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVPLGtCQUFrQixDQUFDLGlCQUFpQztRQUN4RCxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDNUIsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFO2dCQUNaLE9BQU87YUFDVjtZQUVELEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztRQUNILGlCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUV2QixPQUFPLGlCQUFpQixDQUFDO0lBQzdCLENBQUM7eUVBNXNCUSxlQUFlO2dFQUFmLGVBQWUsV0FBZixlQUFlOztTQUFmLGVBQWU7dUZBQWYsZUFBZTtjQUQzQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnbG9kYXNoLWVzJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgY29tYmluZUxhdGVzdCwgY29tYmluZUxhdGVzdFdpdGgsIE9ic2VydmFibGUsIG9mLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaW5hbGl6ZSwgbWFwLCB0YWtlLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gICAgQm9vbGVhbk1hcCxcbiAgICBkZWVwQ2xvbmUsXG4gICAgRmllbGQsXG4gICAgRmllbGREZWZpbml0aW9uTWFwLFxuICAgIEZpZWxkTG9naWNNYXAsXG4gICAgRmllbGRNZXRhZGF0YSxcbiAgICBpc1ZvaWQsXG4gICAgUmVjb3JkLFxuICAgIFN0YXRpc3RpY3NNYXAsXG4gICAgU3RhdGlzdGljc1F1ZXJ5TWFwLFxuICAgIFN1YlBhbmVsTWV0YSxcbiAgICBWaWV3Q29udGV4dCxcbiAgICBWaWV3RmllbGREZWZpbml0aW9uLFxuICAgIFZpZXdGaWVsZERlZmluaXRpb25NYXAsXG4gICAgVmlld01vZGUsXG4gICAgUGFuZWwsXG4gICAgUGFuZWxSb3csXG59IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQgeyBSZWNvcmRWaWV3RGF0YSwgUmVjb3JkVmlld01vZGVsLCBSZWNvcmRWaWV3U3RhdGUgfSBmcm9tICcuL3JlY29yZC12aWV3LnN0b3JlLm1vZGVsJztcbmltcG9ydCB7TmF2aWdhdGlvblN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9uYXZpZ2F0aW9uL25hdmlnYXRpb24uc3RvcmUnO1xuaW1wb3J0IHtTdGF0ZVN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9zdGF0ZSc7XG5pbXBvcnQge1JlY29yZFNhdmVHUUx9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3JlY29yZC9ncmFwaHFsL2FwaS5yZWNvcmQuc2F2ZSc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7TW9kdWxlTmF2aWdhdGlvbn0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbmF2aWdhdGlvbi9tb2R1bGUtbmF2aWdhdGlvbi9tb2R1bGUtbmF2aWdhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7XG4gICAgTWV0YWRhdGEsXG4gICAgTWV0YWRhdGFTdG9yZSxcbiAgICBSZWNvcmRWaWV3TWV0YWRhdGEsXG4gICAgU3VtbWFyeVRlbXBsYXRlc1xufSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9tZXRhZGF0YS9tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL21lc3NhZ2UvbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7U3VicGFuZWxTdG9yZU1hcH0gZnJvbSAnLi4vLi4vLi4vLi4vY29udGFpbmVycy9zdWJwYW5lbC9zdG9yZS9zdWJwYW5lbC9zdWJwYW5lbC5zdG9yZSc7XG5pbXBvcnQge0FwcFN0YXRlU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL2FwcC1zdGF0ZS9hcHAtc3RhdGUuc3RvcmUnO1xuaW1wb3J0IHtSZWNvcmRNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9yZWNvcmQvcmVjb3JkLm1hbmFnZXInO1xuaW1wb3J0IHtSZWNvcmRTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvcmVjb3JkL3JlY29yZC5zdG9yZSc7XG5pbXBvcnQge0xvY2FsU3RvcmFnZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL2xvY2FsLXN0b3JhZ2UvbG9jYWwtc3RvcmFnZS5zZXJ2aWNlJztcbmltcG9ydCB7U3VicGFuZWxTdG9yZUZhY3Rvcnl9IGZyb20gJy4uLy4uLy4uLy4uL2NvbnRhaW5lcnMvc3VicGFuZWwvc3RvcmUvc3VicGFuZWwvc3VicGFuZWwuc3RvcmUuZmFjdG9yeSc7XG5pbXBvcnQge1ZpZXdTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvdmlldy92aWV3LnN0b3JlJztcbmltcG9ydCB7UmVjb3JkRmV0Y2hHUUx9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3JlY29yZC9ncmFwaHFsL2FwaS5yZWNvcmQuZ2V0JztcbmltcG9ydCB7U3RhdGlzdGljc0JhdGNofSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9zdGF0aXN0aWNzL3N0YXRpc3RpY3MtYmF0Y2guc2VydmljZSc7XG5pbXBvcnQge1JlY29yZFN0b3JlRmFjdG9yeX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvcmVjb3JkL3JlY29yZC5zdG9yZS5mYWN0b3J5JztcbmltcG9ydCB7VXNlclByZWZlcmVuY2VTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvdXNlci1wcmVmZXJlbmNlL3VzZXItcHJlZmVyZW5jZS5zdG9yZSc7XG5pbXBvcnQge1BhbmVsTG9naWNNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3BhbmVsLWxvZ2ljL3BhbmVsLWxvZ2ljLm1hbmFnZXInO1xuXG5jb25zdCBpbml0aWFsU3RhdGU6IFJlY29yZFZpZXdTdGF0ZSA9IHtcbiAgICBtb2R1bGU6ICcnLFxuICAgIHJlY29yZElEOiAnJyxcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICB3aWRnZXRzOiBmYWxzZSxcbiAgICBzaG93U2lkZWJhcldpZGdldHM6IGZhbHNlLFxuICAgIHNob3dUb3BXaWRnZXQ6IGZhbHNlLFxuICAgIHNob3dTdWJwYW5lbHM6IGZhbHNlLFxuICAgIG1vZGU6ICdkZXRhaWwnLFxuICAgIHBhcmFtczoge1xuICAgICAgICByZXR1cm5Nb2R1bGU6ICcnLFxuICAgICAgICByZXR1cm5JZDogJycsXG4gICAgICAgIHJldHVybkFjdGlvbjogJydcbiAgICB9XG59O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVjb3JkVmlld1N0b3JlIGV4dGVuZHMgVmlld1N0b3JlIGltcGxlbWVudHMgU3RhdGVTdG9yZSB7XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaWMgbG9uZy1saXZlZCBvYnNlcnZhYmxlIHN0cmVhbXNcbiAgICAgKi9cbiAgICByZWNvcmQkOiBPYnNlcnZhYmxlPFJlY29yZD47XG4gICAgc3RhZ2luZ1JlY29yZCQ6IE9ic2VydmFibGU8UmVjb3JkPjtcbiAgICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICB3aWRnZXRzJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBzaG93U2lkZWJhcldpZGdldHMkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIHNob3dUb3BXaWRnZXQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIHNob3dTdWJwYW5lbHMkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIG1vZGUkOiBPYnNlcnZhYmxlPFZpZXdNb2RlPjtcbiAgICBzdWJwYW5lbHMkOiBPYnNlcnZhYmxlPFN1YnBhbmVsU3RvcmVNYXA+O1xuICAgIHZpZXdDb250ZXh0JDogT2JzZXJ2YWJsZTxWaWV3Q29udGV4dD47XG4gICAgc3VicGFuZWxSZWxvYWQkOiBPYnNlcnZhYmxlPEJvb2xlYW5NYXA+O1xuICAgIHBhbmVsczogUGFuZWxbXSA9IFtdO1xuICAgIHBhbmVscyQ6IE9ic2VydmFibGU8UGFuZWxbXT47XG5cblxuICAgIC8qKlxuICAgICAqIFZpZXctbW9kZWwgdGhhdCByZXNvbHZlcyBvbmNlIGFsbCB0aGUgZGF0YSBpcyByZWFkeSAob3IgdXBkYXRlZCkuXG4gICAgICovXG4gICAgdm0kOiBPYnNlcnZhYmxlPFJlY29yZFZpZXdNb2RlbD47XG4gICAgdm06IFJlY29yZFZpZXdNb2RlbDtcbiAgICBkYXRhOiBSZWNvcmRWaWV3RGF0YTtcbiAgICByZWNvcmRTdG9yZTogUmVjb3JkU3RvcmU7XG5cbiAgICAvKiogSW50ZXJuYWwgUHJvcGVydGllcyAqL1xuICAgIHByb3RlY3RlZCBjYWNoZSQ6IE9ic2VydmFibGU8YW55PiA9IG51bGw7XG4gICAgcHJvdGVjdGVkIGludGVybmFsU3RhdGU6IFJlY29yZFZpZXdTdGF0ZSA9IGRlZXBDbG9uZShpbml0aWFsU3RhdGUpO1xuICAgIHByb3RlY3RlZCBzdG9yZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8UmVjb3JkVmlld1N0YXRlPih0aGlzLmludGVybmFsU3RhdGUpO1xuICAgIHByb3RlY3RlZCBzdGF0ZSQgPSB0aGlzLnN0b3JlLmFzT2JzZXJ2YWJsZSgpO1xuICAgIHByb3RlY3RlZCBzdWJwYW5lbHM6IFN1YnBhbmVsU3RvcmVNYXA7XG4gICAgcHJvdGVjdGVkIHN1YnBhbmVsc1N0YXRlOiBCZWhhdmlvclN1YmplY3Q8U3VicGFuZWxTdG9yZU1hcD47XG4gICAgcHJvdGVjdGVkIHN1YnBhbmVsUmVsb2FkU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Qm9vbGVhbk1hcD4oe30gYXMgQm9vbGVhbk1hcCk7XG4gICAgcHJvdGVjdGVkIHN1YnBhbmVsUmVsb2FkU3ViOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuICAgIHByb3RlY3RlZCBzdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuICAgIHByb3RlY3RlZCBmaWVsZFN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gICAgcHJvdGVjdGVkIHBhbmVsc1N1YmplY3Q6IEJlaGF2aW9yU3ViamVjdDxQYW5lbFtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3QodGhpcy5wYW5lbHMpO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCByZWNvcmRGZXRjaEdRTDogUmVjb3JkRmV0Y2hHUUwsXG4gICAgICAgIHByb3RlY3RlZCByZWNvcmRTYXZlR1FMOiBSZWNvcmRTYXZlR1FMLFxuICAgICAgICBwcm90ZWN0ZWQgYXBwU3RhdGVTdG9yZTogQXBwU3RhdGVTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlU3RvcmU6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBuYXZpZ2F0aW9uU3RvcmU6IE5hdmlnYXRpb25TdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIG1vZHVsZU5hdmlnYXRpb246IE1vZHVsZU5hdmlnYXRpb24sXG4gICAgICAgIHByb3RlY3RlZCBtZXRhZGF0YVN0b3JlOiBNZXRhZGF0YVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbG9jYWxTdG9yYWdlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgbWVzc2FnZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBzdWJwYW5lbEZhY3Rvcnk6IFN1YnBhbmVsU3RvcmVGYWN0b3J5LFxuICAgICAgICBwcm90ZWN0ZWQgcmVjb3JkTWFuYWdlcjogUmVjb3JkTWFuYWdlcixcbiAgICAgICAgcHJvdGVjdGVkIHN0YXRpc3RpY3NCYXRjaDogU3RhdGlzdGljc0JhdGNoLFxuICAgICAgICBwcm90ZWN0ZWQgcmVjb3JkU3RvcmVGYWN0b3J5OiBSZWNvcmRTdG9yZUZhY3RvcnksXG4gICAgICAgIHByb3RlY3RlZCBwcmVmZXJlbmNlczogVXNlclByZWZlcmVuY2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHBhbmVsTG9naWNNYW5hZ2VyOiBQYW5lbExvZ2ljTWFuYWdlcixcbiAgICApIHtcblxuICAgICAgICBzdXBlcihhcHBTdGF0ZVN0b3JlLCBsYW5ndWFnZVN0b3JlLCBuYXZpZ2F0aW9uU3RvcmUsIG1vZHVsZU5hdmlnYXRpb24sIG1ldGFkYXRhU3RvcmUpO1xuXG4gICAgICAgIHRoaXMucGFuZWxzJCA9IHRoaXMucGFuZWxzU3ViamVjdC5hc09ic2VydmFibGUoKTtcblxuICAgICAgICB0aGlzLnJlY29yZFN0b3JlID0gcmVjb3JkU3RvcmVGYWN0b3J5LmNyZWF0ZSh0aGlzLmdldFZpZXdGaWVsZHNPYnNlcnZhYmxlKCkpO1xuXG4gICAgICAgIHRoaXMucmVjb3JkJCA9IHRoaXMucmVjb3JkU3RvcmUuc3RhdGUkLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMuc3RhZ2luZ1JlY29yZCQgPSB0aGlzLnJlY29yZFN0b3JlLnN0YWdpbmckLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgICAgIHRoaXMubG9hZGluZyQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5sb2FkaW5nKSk7XG4gICAgICAgIHRoaXMud2lkZ2V0cyQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS53aWRnZXRzKSk7XG4gICAgICAgIHRoaXMuc2hvd1NpZGViYXJXaWRnZXRzJCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLnNob3dTaWRlYmFyV2lkZ2V0cykpO1xuICAgICAgICB0aGlzLnNob3dUb3BXaWRnZXQkID0gdGhpcy5zdGF0ZSQucGlwZShtYXAoc3RhdGUgPT4gc3RhdGUuc2hvd1RvcFdpZGdldCkpO1xuICAgICAgICB0aGlzLnNob3dTdWJwYW5lbHMkID0gdGhpcy5zdGF0ZSQucGlwZShtYXAoc3RhdGUgPT4gc3RhdGUuc2hvd1N1YnBhbmVscykpO1xuICAgICAgICB0aGlzLm1vZGUkID0gdGhpcy5zdGF0ZSQucGlwZShtYXAoc3RhdGUgPT4gc3RhdGUubW9kZSkpO1xuICAgICAgICB0aGlzLnN1YnBhbmVsUmVsb2FkJCA9IHRoaXMuc3VicGFuZWxSZWxvYWRTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgICAgIGNvbnN0IGRhdGEkID0gdGhpcy5yZWNvcmQkLnBpcGUoXG4gICAgICAgICAgICBjb21iaW5lTGF0ZXN0V2l0aCh0aGlzLmxvYWRpbmckKSxcbiAgICAgICAgICAgIG1hcCgoW3JlY29yZCwgbG9hZGluZ106IFtSZWNvcmQsIGJvb2xlYW5dKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0ge3JlY29yZCwgbG9hZGluZ30gYXMgUmVjb3JkVmlld0RhdGE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy52bSQgPSBkYXRhJC5waXBlKFxuICAgICAgICAgICAgY29tYmluZUxhdGVzdFdpdGgodGhpcy5hcHBEYXRhJCwgdGhpcy5tZXRhZGF0YSQpLFxuICAgICAgICAgICAgbWFwKChbZGF0YSwgYXBwRGF0YSwgbWV0YWRhdGFdKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy52bSA9IHtkYXRhLCBhcHBEYXRhLCBtZXRhZGF0YX0gYXMgUmVjb3JkVmlld01vZGVsO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZtO1xuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgIHRoaXMuc3VicGFuZWxzU3RhdGUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFN1YnBhbmVsU3RvcmVNYXA+KHt9IGFzIFN1YnBhbmVsU3RvcmVNYXApO1xuICAgICAgICB0aGlzLnN1YnBhbmVscyQgPSB0aGlzLnN1YnBhbmVsc1N0YXRlLmFzT2JzZXJ2YWJsZSgpO1xuXG5cbiAgICAgICAgdGhpcy52aWV3Q29udGV4dCQgPSB0aGlzLnJlY29yZCQucGlwZShtYXAoKCkgPT4gdGhpcy5nZXRWaWV3Q29udGV4dCgpKSk7XG4gICAgICAgIHRoaXMuaW5pdFBhbmVscygpO1xuICAgIH1cblxuICAgIGdldCB3aWRnZXRzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFN0YXRlLndpZGdldHM7XG4gICAgfVxuXG4gICAgc2V0IHdpZGdldHMoc2hvdzogYm9vbGVhbikge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgIC4uLnRoaXMuaW50ZXJuYWxTdGF0ZSxcbiAgICAgICAgICAgIHdpZGdldHM6IHNob3dcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0IHNob3dTaWRlYmFyV2lkZ2V0cygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxTdGF0ZS5zaG93U2lkZWJhcldpZGdldHM7XG4gICAgfVxuXG4gICAgc2V0IHNob3dTaWRlYmFyV2lkZ2V0cyhzaG93OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuc2F2ZVByZWZlcmVuY2UodGhpcy5nZXRNb2R1bGVOYW1lKCksICdzaG93LXNpZGViYXItd2lkZ2V0cycsIHNob3cpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgIC4uLnRoaXMuaW50ZXJuYWxTdGF0ZSxcbiAgICAgICAgICAgIHNob3dTaWRlYmFyV2lkZ2V0czogc2hvd1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXQgc2hvd1RvcFdpZGdldCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxTdGF0ZS5zaG93VG9wV2lkZ2V0O1xuICAgIH1cblxuICAgIHNldCBzaG93VG9wV2lkZ2V0KHNob3c6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICAgICAgICAuLi50aGlzLmludGVybmFsU3RhdGUsXG4gICAgICAgICAgICBzaG93VG9wV2lkZ2V0OiBzaG93XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldCBzaG93U3VicGFuZWxzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFN0YXRlLnNob3dUb3BXaWRnZXQ7XG4gICAgfVxuXG4gICAgc2V0IHNob3dTdWJwYW5lbHMoc2hvdzogYm9vbGVhbikge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgIC4uLnRoaXMuaW50ZXJuYWxTdGF0ZSxcbiAgICAgICAgICAgIHNob3dTdWJwYW5lbHM6IHNob3dcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0IHBhcmFtcygpOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxTdGF0ZS5wYXJhbXMgfHwge307XG4gICAgfVxuXG4gICAgc2V0IHBhcmFtcyhwYXJhbXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICAgICAgICAuLi50aGlzLmludGVybmFsU3RhdGUsXG4gICAgICAgICAgICBwYXJhbXNcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0TW9kdWxlTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFN0YXRlLm1vZHVsZTtcbiAgICB9XG5cbiAgICBnZXRSZWNvcmRJZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFN0YXRlLnJlY29yZElEO1xuICAgIH1cblxuICAgIGdldFZpZXdDb250ZXh0KCk6IFZpZXdDb250ZXh0IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1vZHVsZTogdGhpcy5nZXRNb2R1bGVOYW1lKCksXG4gICAgICAgICAgICBpZDogdGhpcy5nZXRSZWNvcmRJZCgpLFxuICAgICAgICAgICAgcmVjb3JkOiB0aGlzLmdldEJhc2VSZWNvcmQoKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldFN1YnBhbmVscygpOiBTdWJwYW5lbFN0b3JlTWFwIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VicGFuZWxzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFuIGRlc3Ryb3lcbiAgICAgKi9cbiAgICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWwgcmVjb3JkIGxvYWQgaWYgbm90IGNhY2hlZCBhbmQgdXBkYXRlIHN0YXRlLlxuICAgICAqIFJldHVybnMgb2JzZXJ2YWJsZSB0byBiZSB1c2VkIGluIHJlc29sdmVyIGlmIG5lZWRlZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZHVsZSB0byB1c2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcmVjb3JkSUQgdG8gdXNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZGUgdG8gdXNlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHBhcmFtcyB0byBzZXRcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBPYnNlcnZhYmxlPGFueT5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW5pdChtb2R1bGU6IHN0cmluZywgcmVjb3JkSUQ6IHN0cmluZywgbW9kZSA9ICdkZXRhaWwnIGFzIFZpZXdNb2RlLCBwYXJhbXM6IFBhcmFtcyA9IHt9KTogT2JzZXJ2YWJsZTxSZWNvcmQ+IHtcbiAgICAgICAgdGhpcy5pbnRlcm5hbFN0YXRlLm1vZHVsZSA9IG1vZHVsZTtcbiAgICAgICAgdGhpcy5pbnRlcm5hbFN0YXRlLnJlY29yZElEID0gcmVjb3JkSUQ7XG4gICAgICAgIHRoaXMuc2V0TW9kZShtb2RlKTtcbiAgICAgICAgdGhpcy5pbml0U3VicGFuZWxzKG1vZHVsZSwgcmVjb3JkSUQpO1xuXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlU2hvd1dpZGdldHMoKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5sb2FkKCkucGlwZShcbiAgICAgICAgICAgIHRhcCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93VG9wV2lkZ2V0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRTdWJwYW5lbFN0YXRpc3RpY3MobW9kdWxlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcnNlUGFyYW1zKHBhcmFtcyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFyIG9ic2VydmFibGUgY2FjaGVcbiAgICAgKi9cbiAgICBwdWJsaWMgY2xlYXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2FjaGUkID0gbnVsbDtcbiAgICAgICAgdGhpcy5jbGVhclN1YnBhbmVscygpO1xuICAgICAgICB0aGlzLnN1YnBhbmVsc1N0YXRlLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoZGVlcENsb25lKGluaXRpYWxTdGF0ZSkpO1xuICAgICAgICB0aGlzLnN1YnMgPSB0aGlzLnNhZmVVbnN1YnNjcmlwdGlvbih0aGlzLnN1YnMpO1xuICAgICAgICB0aGlzLmZpZWxkU3VicyA9IHRoaXMuc2FmZVVuc3Vic2NyaXB0aW9uKHRoaXMuZmllbGRTdWJzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgc3RhZ2luZyByZWNvcmRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IFZpZXdNb2RlXG4gICAgICovXG4gICAgZ2V0QmFzZVJlY29yZCgpOiBSZWNvcmQge1xuICAgICAgICBpZiAoIXRoaXMuaW50ZXJuYWxTdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVjb3JkU3RvcmUuZ2V0QmFzZVJlY29yZCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBjdXJyZW50IHZpZXcgbW9kZVxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ30gVmlld01vZGVcbiAgICAgKi9cbiAgICBnZXRNb2RlKCk6IFZpZXdNb2RlIHtcbiAgICAgICAgaWYgKCF0aGlzLmludGVybmFsU3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsU3RhdGUubW9kZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgbmV3IG1vZGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2RlIFZpZXdNb2RlXG4gICAgICovXG4gICAgc2V0TW9kZShtb2RlOiBWaWV3TW9kZSk6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHsuLi50aGlzLmludGVybmFsU3RhdGUsIG1vZGV9KTtcbiAgICB9XG5cbiAgICBzYXZlKCk6IE9ic2VydmFibGU8UmVjb3JkPiB7XG4gICAgICAgIHRoaXMuYXBwU3RhdGVTdG9yZS51cGRhdGVMb2FkaW5nKGAke3RoaXMuaW50ZXJuYWxTdGF0ZS5tb2R1bGV9LXJlY29yZC1zYXZlYCwgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICAgICAgICAuLi50aGlzLmludGVybmFsU3RhdGUsXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJlY29yZFN0b3JlLnNhdmUoKS5waXBlKFxuICAgICAgICAgICAgY2F0Y2hFcnJvcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlLmFkZERhbmdlck1lc3NhZ2VCeUtleSgnTEJMX0VSUk9SX1NBVklORycpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvZih7fSBhcyBSZWNvcmQpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBmaW5hbGl6ZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRNb2RlKCdkZXRhaWwnIGFzIFZpZXdNb2RlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcFN0YXRlU3RvcmUudXBkYXRlTG9hZGluZyhgJHt0aGlzLmludGVybmFsU3RhdGUubW9kdWxlfS1yZWNvcmQtc2F2ZWAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5pbnRlcm5hbFN0YXRlLFxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIC8gcmVsb2FkIHJlY29yZCB1c2luZyBjdXJyZW50IHBhZ2luYXRpb24gYW5kIGNyaXRlcmlhXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHVzZUNhY2hlIGlmIHRvIHVzZSBjYWNoZVxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE9ic2VydmFibGU8UmVjb3JkVmlld1N0YXRlPlxuICAgICAqL1xuICAgIHB1YmxpYyBsb2FkKHVzZUNhY2hlID0gdHJ1ZSk6IE9ic2VydmFibGU8UmVjb3JkPiB7XG5cbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICAgICAgICAuLi50aGlzLmludGVybmFsU3RhdGUsXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJlY29yZFN0b3JlLnJldHJpZXZlUmVjb3JkKFxuICAgICAgICAgICAgdGhpcy5pbnRlcm5hbFN0YXRlLm1vZHVsZSxcbiAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxTdGF0ZS5yZWNvcmRJRCxcbiAgICAgICAgICAgIHVzZUNhY2hlXG4gICAgICAgICkucGlwZShcbiAgICAgICAgICAgIHRhcCgoZGF0YTogUmVjb3JkKSA9PiB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5pbnRlcm5hbFN0YXRlLFxuICAgICAgICAgICAgICAgICAgICByZWNvcmRJRDogZGF0YS5pZCxcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlOiBkYXRhLm1vZHVsZSxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHN1bW1hcnkgdGVtcGxhdGVcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IHN1bW1hcnkgdGVtcGxhdGUgbGFiZWxcbiAgICAgKi9cbiAgICBnZXRTdW1tYXJ5VGVtcGxhdGUoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgbWV0YWRhdGEgPSB0aGlzLm1ldGFkYXRhIHx8IHt9IGFzIE1ldGFkYXRhO1xuICAgICAgICBjb25zdCByZWNvcmRNZXRhID0gbWV0YWRhdGEucmVjb3JkVmlldyB8fCB7fSBhcyBSZWNvcmRWaWV3TWV0YWRhdGE7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlcyA9IHJlY29yZE1ldGEuc3VtbWFyeVRlbXBsYXRlcyB8fCB7fSBhcyBTdW1tYXJ5VGVtcGxhdGVzO1xuICAgICAgICByZXR1cm4gdGVtcGxhdGVzW3RoaXMuZ2V0TW9kZSgpXSB8fCAnJztcbiAgICB9XG5cbiAgICBpbml0VmFsaWRhdG9ycyhyZWNvcmQ6IFJlY29yZCk6IHZvaWQge1xuICAgICAgICBpZighcmVjb3JkIHx8ICFPYmplY3Qua2V5cyhyZWNvcmQ/LmZpZWxkcykubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBPYmplY3Qua2V5cyhyZWNvcmQuZmllbGRzKS5mb3JFYWNoKGZpZWxkTmFtZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZCA9IHJlY29yZC5maWVsZHNbZmllbGROYW1lXTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1Db250cm9sID0gZmllbGQ/LmZvcm1Db250cm9sID8/IG51bGw7XG4gICAgICAgICAgICBpZiAoIWZvcm1Db250cm9sKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnJlc2V0VmFsaWRhdG9ycyhmaWVsZCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRvcnMgPSBmaWVsZD8udmFsaWRhdG9ycyA/PyBbXTtcbiAgICAgICAgICAgIGNvbnN0IGFzeW5jVmFsaWRhdG9ycyA9IGZpZWxkPy5hc3luY1ZhbGlkYXRvcnMgPz8gW107XG5cbiAgICAgICAgICAgIGlmIChmaWVsZD8uZm9ybUNvbnRyb2wgJiYgdmFsaWRhdG9ycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBmaWVsZC5mb3JtQ29udHJvbC5zZXRWYWxpZGF0b3JzKHZhbGlkYXRvcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZpZWxkPy5mb3JtQ29udHJvbCAmJiBhc3luY1ZhbGlkYXRvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZmllbGQuZm9ybUNvbnRyb2wuc2V0QXN5bmNWYWxpZGF0b3JzKGFzeW5jVmFsaWRhdG9ycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcmVzZXRWYWxpZGF0b3JzKGZpZWxkOiBGaWVsZCk6IHZvaWQge1xuICAgICAgICBpZiAoIWZpZWxkPy5mb3JtQ29udHJvbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZmllbGQuZm9ybUNvbnRyb2wuY2xlYXJWYWxpZGF0b3JzKCk7XG4gICAgICAgIGZpZWxkLmZvcm1Db250cm9sLmNsZWFyQXN5bmNWYWxpZGF0b3JzKCk7XG4gICAgfVxuXG4gICAgcmVzZXRWYWxpZGF0b3JzRm9yQWxsRmllbGRzKHJlY29yZDogUmVjb3JkKTogdm9pZCB7XG4gICAgICAgIGlmKCFyZWNvcmQgfHwgIXJlY29yZD8uZmllbGRzPy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiA7XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmtleXMocmVjb3JkLmZpZWxkcykuZm9yRWFjaChmaWVsZE5hbWUgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmllbGQgPSByZWNvcmQuZmllbGRzW2ZpZWxkTmFtZV07XG4gICAgICAgICAgICBjb25zdCBmb3JtQ29udHJvbCA9IGZpZWxkPy5mb3JtQ29udHJvbCA/PyBudWxsO1xuXG4gICAgICAgICAgICBpZiAoIWZvcm1Db250cm9sKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnJlc2V0VmFsaWRhdG9ycyhmaWVsZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlIHF1ZXJ5IHBhcmFtc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHBhcmFtcyB0byBzZXRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgcGFyc2VQYXJhbXMocGFyYW1zOiBQYXJhbXMgPSB7fSk6IHZvaWQge1xuICAgICAgICBpZiAoIXBhcmFtcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3VycmVudFBhcmFtcyA9IHsuLi50aGlzLmludGVybmFsU3RhdGUucGFyYW1zfTtcbiAgICAgICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKHBhcmFtS2V5ID0+IHtcbiAgICAgICAgICAgIGlmICghaXNWb2lkKGN1cnJlbnRQYXJhbXNbcGFyYW1LZXldKSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQYXJhbXNbcGFyYW1LZXldID0gcGFyYW1zW3BhcmFtS2V5XTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogTG9hZCBhbGwgc3RhdGlzdGljc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZHVsZSBpZiB0byB1c2UgY2FjaGVcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgbG9hZFN1YnBhbmVsU3RhdGlzdGljcyhtb2R1bGU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBjb25zdCBzdWJwYW5lbHMgPSB0aGlzLnN1YnBhbmVsc1N0YXRlLnZhbHVlO1xuXG4gICAgICAgIGlmICghc3VicGFuZWxzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBxdWVyaWVzOiBTdGF0aXN0aWNzUXVlcnlNYXAgPSB7fTtcblxuICAgICAgICBPYmplY3Qua2V5cyhzdWJwYW5lbHMpLmZvckVhY2goc3VicGFuZWxLZXkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBzdWJwYW5lbCA9IHN1YnBhbmVsc1tzdWJwYW5lbEtleV07XG4gICAgICAgICAgICBjb25zdCBzdGF0c01hcCA9IHN1YnBhbmVsLnN0YXRpc3RpY3M7XG5cbiAgICAgICAgICAgIGlmICghc3RhdHNNYXAgfHwgIU9iamVjdC5rZXlzKHN0YXRzTWFwKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzdWJwYW5lbC5zaG91bGRCYXRjaFN0YXRpc3RpYygpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHN1YnBhbmVsLmxvYWRBbGxTdGF0aXN0aWNzKCkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHN1YnBhbmVsUXVlcmllcyA9IHN1YnBhbmVsLmdldEFsbFN0YXRpc3RpY1F1ZXJ5KCk7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHN1YnBhbmVsUXVlcmllcykuZm9yRWFjaChzdWJwYW5lbFF1ZXJ5S2V5ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBxdWVyeUtleSA9IHRoaXMuYnVpbGRTdGF0S2V5KHN1YnBhbmVsS2V5LCBzdWJwYW5lbFF1ZXJ5S2V5KTtcbiAgICAgICAgICAgICAgICBxdWVyaWVzW3F1ZXJ5S2V5XSA9IHN1YnBhbmVsUXVlcmllc1tzdWJwYW5lbFF1ZXJ5S2V5XTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzdWJwYW5lbC5zZXRBbGxTdGF0aXN0aWNzTG9hZGluZyh0cnVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zdGF0aXN0aWNzQmF0Y2guZmV0Y2gobW9kdWxlLCBxdWVyaWVzKVxuICAgICAgICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHN0YXRzOiBTdGF0aXN0aWNzTWFwKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhzdWJwYW5lbHMpLmZvckVhY2goc3VicGFuZWxLZXkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1YnBhbmVsID0gc3VicGFuZWxzW3N1YnBhbmVsS2V5XTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VicGFuZWxRdWVyaWVzID0gc3VicGFuZWwuZ2V0QWxsU3RhdGlzdGljUXVlcnkoKTtcblxuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhzdWJwYW5lbFF1ZXJpZXMpLmZvckVhY2goc3VicGFuZWxRdWVyeUtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBxdWVyeUtleSA9IHRoaXMuYnVpbGRTdGF0S2V5KHN1YnBhbmVsS2V5LCBzdWJwYW5lbFF1ZXJ5S2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXQgPSBzdGF0c1txdWVyeUtleV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXN0YXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJwYW5lbC5zZXRTdGF0aXN0aWNzKHN1YnBhbmVsUXVlcnlLZXksIHN0YXQsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBzdWJwYW5lbC5zZXRBbGxTdGF0aXN0aWNzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYnVpbGRTdGF0S2V5KHN1YnBhbmVsS2V5OiBzdHJpbmcsIHN1YnBhbmVsUXVlcnlLZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHN1YnBhbmVsS2V5ID0gc3VicGFuZWxLZXkucmVwbGFjZSgvXy9nLCAnLScpO1xuICAgICAgICBzdWJwYW5lbFF1ZXJ5S2V5ID0gc3VicGFuZWxRdWVyeUtleS5yZXBsYWNlKC9fL2csICctJyk7XG5cbiAgICAgICAgcmV0dXJuIHN1YnBhbmVsS2V5ICsgJy0nICsgc3VicGFuZWxRdWVyeUtleTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHN0YXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gc3RhdGUgdG8gc2V0XG4gICAgICovXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVN0YXRlKHN0YXRlOiBSZWNvcmRWaWV3U3RhdGUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdG9yZS5uZXh0KHRoaXMuaW50ZXJuYWxTdGF0ZSA9IHN0YXRlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IHN1YnBhbmVsc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZHVsZSBwYXJlbnQgbW9kdWxlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHJlY29yZElkIGlkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGluaXRTdWJwYW5lbHMobW9kdWxlOiBzdHJpbmcsIHJlY29yZElkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zaG93U3VicGFuZWxzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tZXRhZGF0YVN0b3JlLnN1YlBhbmVsTWV0YWRhdGEkLnN1YnNjcmliZSgobWV0YTogU3ViUGFuZWxNZXRhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyU3VicGFuZWxzKCk7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG1ldGEpLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJwYW5lbHNba2V5XSA9IHRoaXMuc3VicGFuZWxGYWN0b3J5LmNyZWF0ZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3VicGFuZWxzW2tleV0uaW5pdChtb2R1bGUsIHJlY29yZElkLCBtZXRhW2tleV0sIHRoaXMucmVjb3JkJCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5zdWJwYW5lbHNTdGF0ZS5uZXh0KHRoaXMuc3VicGFuZWxzKTtcblxuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5zdWJwYW5lbHMpLmZvckVhY2goc3VicGFuZWxLZXkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN1YnBhbmVsID0gdGhpcy5zdWJwYW5lbHNbc3VicGFuZWxLZXldO1xuICAgICAgICAgICAgICAgIHRoaXMuc3VicGFuZWxSZWxvYWRTdWIucHVzaChzdWJwYW5lbC5yZWNvcmRMaXN0LnJlY29yZHMkLnBpcGUodGFwKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlID0ge30gYXMgQm9vbGVhbk1hcDtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlW3N1YnBhbmVsS2V5XSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VicGFuZWxSZWxvYWRTdWJqZWN0Lm5leHQodXBkYXRlKTtcbiAgICAgICAgICAgICAgICB9KSkuc3Vic2NyaWJlKCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0UGFuZWxzKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBwYW5lbFN1YiA9IGNvbWJpbmVMYXRlc3QoW1xuICAgICAgICAgICAgdGhpcy5tZXRhZGF0YVN0b3JlLnJlY29yZFZpZXdNZXRhZGF0YSQsXG4gICAgICAgICAgICB0aGlzLnN0YWdpbmdSZWNvcmQkLFxuICAgICAgICAgICAgdGhpcy5sYW5ndWFnZVN0b3JlLnZtJCxcbiAgICAgICAgXSkuc3Vic2NyaWJlKChbbWV0YSwgcmVjb3JkLCBsYW5ndWFnZXNdKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYW5lbHMgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IG1vZHVsZSA9IChyZWNvcmQgJiYgcmVjb3JkLm1vZHVsZSkgfHwgJyc7XG5cbiAgICAgICAgICAgIHRoaXMuc2FmZVVuc3Vic2NyaXB0aW9uKHRoaXMuZmllbGRTdWJzKTtcbiAgICAgICAgICAgIG1ldGEucGFuZWxzLmZvckVhY2gocGFuZWxEZWZpbml0aW9uID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IChwYW5lbERlZmluaXRpb24ubGFiZWwpXG4gICAgICAgICAgICAgICAgICAgID8gcGFuZWxEZWZpbml0aW9uLmxhYmVsLnRvVXBwZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmxhbmd1YWdlU3RvcmUuZ2V0RmllbGRMYWJlbChwYW5lbERlZmluaXRpb24ua2V5LnRvVXBwZXJDYXNlKCksIG1vZHVsZSwgbGFuZ3VhZ2VzKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwYW5lbCA9IHsgbGFiZWwsIGtleTogcGFuZWxEZWZpbml0aW9uLmtleSwgcm93czogW10gfSBhcyBQYW5lbDtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRhYkRlZiA9IG1ldGEudGVtcGxhdGVNZXRhLnRhYkRlZnNbcGFuZWxEZWZpbml0aW9uLmtleS50b1VwcGVyQ2FzZSgpXSA/PyBudWxsO1xuICAgICAgICAgICAgICAgIGlmICh0YWJEZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFuZWwubWV0YSA9IHRhYkRlZjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwYW5lbERlZmluaXRpb24ucm93cy5mb3JFYWNoKHJvd0RlZmluaXRpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3cgPSB7IGNvbHM6IFtdIH0gYXMgUGFuZWxSb3c7XG4gICAgICAgICAgICAgICAgICAgIHJvd0RlZmluaXRpb24uY29scy5mb3JFYWNoKGNlbGxEZWZpbml0aW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5jb2xzLnB1c2goeyAuLi5jZWxsRGVmaW5pdGlvbiB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHBhbmVsLnJvd3MucHVzaChyb3cpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcGFuZWwuZGlzcGxheVN0YXRlID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0YWJEZWY/LmRpc3BsYXkgPz8gdHJ1ZSk7XG4gICAgICAgICAgICAgICAgcGFuZWwuZGlzcGxheSQgPSBwYW5lbC5kaXNwbGF5U3RhdGUuYXNPYnNlcnZhYmxlKCk7XG5cbiAgICAgICAgICAgICAgICBwYW5lbHMucHVzaChwYW5lbCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNFbXB0eShyZWNvcmQ/LmZpZWxkcykgfHwgaXNFbXB0eSh0YWJEZWY/LmRpc3BsYXlMb2dpYykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIE9iamVjdC52YWx1ZXModGFiRGVmLmRpc3BsYXlMb2dpYykuZm9yRWFjaCgobG9naWNEZWYpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzRW1wdHkobG9naWNEZWY/LnBhcmFtcz8uZmllbGREZXBlbmRlbmNpZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBsb2dpY0RlZi5wYXJhbXMuZmllbGREZXBlbmRlbmNpZXMuZm9yRWFjaChmaWVsZEtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZCA9IHJlY29yZC5maWVsZHNbZmllbGRLZXldIHx8IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNFbXB0eShmaWVsZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRTdWJzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQudmFsdWVDaGFuZ2VzJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhbmVsTG9naWNNYW5hZ2VyLnJ1bkxvZ2ljKGxvZ2ljRGVmLmtleSwgZmllbGQsIHBhbmVsLCByZWNvcmQsIHRoaXMuZ2V0TW9kZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnBhbmVsc1N1YmplY3QubmV4dCh0aGlzLnBhbmVscyA9IHBhbmVscyk7XG4gICAgICAgICAgICByZXR1cm4gcGFuZWxzO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnN1YnMucHVzaChwYW5lbFN1Yik7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNsZWFyU3VicGFuZWxzKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5zdWJwYW5lbHMpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuc3VicGFuZWxzKS5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VicGFuZWxzW2tleV0uY2xlYXIoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3VicGFuZWxSZWxvYWRTdWIubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnBhbmVsUmVsb2FkU3ViLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgICAgICAgICAgIHRoaXMuc3VicGFuZWxSZWxvYWRTdWIgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3VicGFuZWxzID0ge307XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIGlmIHdpZGdldHMgYXJlIHRvIGRpc3BsYXlcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgY2FsY3VsYXRlU2hvd1dpZGdldHMoKTogdm9pZCB7XG4gICAgICAgIGxldCBzaG93ID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IHJlY29yZFZpZXdNZXRhID0gdGhpcy5nZXRSZWNvcmRWaWV3TWV0YWRhdGEoKTtcbiAgICAgICAgY29uc3Qgc2lkZWJhcldpZGdldHNDb25maWcgPSByZWNvcmRWaWV3TWV0YS5zaWRlYmFyV2lkZ2V0cyB8fCBbXTtcblxuICAgICAgICBpZiAoc2lkZWJhcldpZGdldHNDb25maWcgJiYgc2lkZWJhcldpZGdldHNDb25maWcubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc2hvdyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzaG93U2lkZWJhcldpZGdldHMgPSB0aGlzLmxvYWRQcmVmZXJlbmNlKHRoaXMuZ2V0TW9kdWxlTmFtZSgpLCAnc2hvdy1zaWRlYmFyLXdpZGdldHMnKSA/PyBudWxsO1xuXG4gICAgICAgIGlmIChzaG93U2lkZWJhcldpZGdldHMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1NpZGViYXJXaWRnZXRzID0gc2hvd1NpZGViYXJXaWRnZXRzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaG93U2lkZWJhcldpZGdldHMgPSBzaG93O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy53aWRnZXRzID0gc2hvdztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgcmVjb3JkIHZpZXcgbWV0YWRhdGFcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IG1ldGFkYXRhIFJlY29yZFZpZXdNZXRhZGF0YVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRSZWNvcmRWaWV3TWV0YWRhdGEoKTogUmVjb3JkVmlld01ldGFkYXRhIHtcbiAgICAgICAgY29uc3QgbWV0YSA9IHRoaXMubWV0YWRhdGFTdG9yZS5nZXQoKSB8fCB7fTtcbiAgICAgICAgcmV0dXJuIG1ldGEucmVjb3JkVmlldyB8fCB7fSBhcyBSZWNvcmRWaWV3TWV0YWRhdGE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHZhcmRlZnNcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IHZhcmRlZnMgRmllbGREZWZpbml0aW9uTWFwXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldFZhcmRlZnMoKTogRmllbGREZWZpbml0aW9uTWFwIHtcbiAgICAgICAgY29uc3QgbWV0YSA9IHRoaXMuZ2V0UmVjb3JkVmlld01ldGFkYXRhKCk7XG4gICAgICAgIHJldHVybiBtZXRhLnZhcmRlZnMgfHwge30gYXMgRmllbGREZWZpbml0aW9uTWFwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB2aWV3IGZpZWxkcyBvYnNlcnZhYmxlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBPYnNlcnZhYmxlPFZpZXdGaWVsZERlZmluaXRpb25bXT5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0Vmlld0ZpZWxkc09ic2VydmFibGUoKTogT2JzZXJ2YWJsZTxWaWV3RmllbGREZWZpbml0aW9uW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWV0YWRhdGFTdG9yZS5yZWNvcmRWaWV3TWV0YWRhdGEkLnBpcGUobWFwKChyZWNvcmRNZXRhZGF0YTogUmVjb3JkVmlld01ldGFkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZHNNYXA6IFZpZXdGaWVsZERlZmluaXRpb25NYXAgPSB7fTtcblxuICAgICAgICAgICAgcmVjb3JkTWV0YWRhdGEucGFuZWxzLmZvckVhY2gocGFuZWwgPT4ge1xuICAgICAgICAgICAgICAgIHBhbmVsLnJvd3MuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgICAgICAgICAgICAgICByb3cuY29scy5mb3JFYWNoKGNvbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZE5hbWUgPSBjb2wubmFtZSA/PyBjb2wuZmllbGREZWZpbml0aW9uLm5hbWUgPz8gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHNNYXBbZmllbGROYW1lXSA9IGNvbDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgT2JqZWN0LmtleXMocmVjb3JkTWV0YWRhdGEudmFyZGVmcykuZm9yRWFjaChmaWVsZEtleSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFyZGVmID0gcmVjb3JkTWV0YWRhdGEudmFyZGVmc1tmaWVsZEtleV0gPz8gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoIXZhcmRlZiB8fCBpc0VtcHR5KHZhcmRlZikpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGFscmVhZHkgZGVmaW5lZC4gc2tpcFxuICAgICAgICAgICAgICAgIGlmIChmaWVsZHNNYXBbZmllbGRLZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodmFyZGVmLnR5cGUgPT0gJ3JlbGF0ZScpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZmllbGRzTWFwW2ZpZWxkS2V5XSA9IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogZmllbGRLZXksXG4gICAgICAgICAgICAgICAgICAgIHZhcmRlZkJhc2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogdmFyZGVmLnZuYW1lID8/ICcnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiB2YXJkZWYudHlwZSA/PyAnJyxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdmFyZGVmLmRpc3BsYXkgPz8gJycsXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkRGVmaW5pdGlvbjogdmFyZGVmLFxuICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YTogdmFyZGVmLm1ldGFkYXRhID8/IHt9IGFzIEZpZWxkTWV0YWRhdGEsXG4gICAgICAgICAgICAgICAgICAgIGxvZ2ljOiB2YXJkZWYubG9naWMgPz8ge30gYXMgRmllbGRMb2dpY01hcFxuICAgICAgICAgICAgICAgIH0gYXMgVmlld0ZpZWxkRGVmaW5pdGlvbjtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhmaWVsZHNNYXApO1xuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgdWkgdXNlciBwcmVmZXJlbmNlIGtleVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0b3JhZ2VLZXkgU3RvcmFnZSBLZXlcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHJldHVybnMge3N0cmluZ30gUHJlZmVyZW5jZSBLZXlcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0UHJlZmVyZW5jZUtleShzdG9yYWdlS2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ3JlY29yZHZpZXctJyArIHN0b3JhZ2VLZXk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSB1aSB1c2VyIHByZWZlcmVuY2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2R1bGUgTW9kdWxlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0b3JhZ2VLZXkgU3RvcmFnZSBLZXlcbiAgICAgKiBAcGFyYW0ge2FueX0gdmFsdWUgVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHNhdmVQcmVmZXJlbmNlKG1vZHVsZTogc3RyaW5nLCBzdG9yYWdlS2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wcmVmZXJlbmNlcy5zZXRVaShtb2R1bGUsIHRoaXMuZ2V0UHJlZmVyZW5jZUtleShzdG9yYWdlS2V5KSwgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWQgdWkgdXNlciBwcmVmZXJlbmNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kdWxlIE1vZHVsZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdG9yYWdlS2V5IFN0b3JhZ2UgS2V5XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEByZXR1cm5zIHthbnl9IFVzZXIgUHJlZmVyZW5jZVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBsb2FkUHJlZmVyZW5jZShtb2R1bGU6IHN0cmluZywgc3RvcmFnZUtleTogc3RyaW5nKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJlZmVyZW5jZXMuZ2V0VWkobW9kdWxlLCB0aGlzLmdldFByZWZlcmVuY2VLZXkoc3RvcmFnZUtleSkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2FmZVVuc3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbkFycmF5OiBTdWJzY3JpcHRpb25bXSk6IFN1YnNjcmlwdGlvbltdIHtcbiAgICAgICAgc3Vic2NyaXB0aW9uQXJyYXkuZm9yRWFjaChzdWIgPT4ge1xuICAgICAgICAgICAgaWYgKHN1Yi5jbG9zZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgc3Vic2NyaXB0aW9uQXJyYXkgPSBbXTtcblxuICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uQXJyYXk7XG4gICAgfVxufVxuIl19