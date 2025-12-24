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
import { deepClone } from 'common';
import { catchError, distinctUntilChanged, filter, finalize, map, startWith, take, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/app-state/app-state.store";
import * as i2 from "../../../../store/metadata/metadata.store.service";
import * as i3 from "../../../../services/message/message.service";
import * as i4 from "../../../../services/record/field/field.manager";
import * as i5 from "../../../../store/language/language.store";
import * as i6 from "./saved-filter-record.store.factory";
const initialState = {
    module: '',
    searchModule: '',
    recordID: '',
    loading: false,
    mode: 'detail',
};
class SavedFilterStore {
    appStateStore;
    meta;
    message;
    fieldManager;
    language;
    savedFilterStoreFactory;
    /**
     * Public long-lived observable streams
     */
    record$;
    stagingRecord$;
    loading$;
    mode$;
    meta$;
    metadataLoading$;
    /**
     * View-model that resolves once all the data is ready (or updated).
     */
    vm$;
    vm;
    recordStore;
    searchCriteria;
    filter;
    /** Internal Properties */
    cache$ = null;
    internalState = deepClone(initialState);
    store = new BehaviorSubject(this.internalState);
    state$ = this.store.asObservable();
    subs = [];
    metadataLoadingState;
    constructor(appStateStore, meta, message, fieldManager, language, savedFilterStoreFactory) {
        this.appStateStore = appStateStore;
        this.meta = meta;
        this.message = message;
        this.fieldManager = fieldManager;
        this.language = language;
        this.savedFilterStoreFactory = savedFilterStoreFactory;
        this.metadataLoadingState = new BehaviorSubject(false);
        this.metadataLoading$ = this.metadataLoadingState.asObservable();
        this.meta$ = this.meta.getMetadata('saved-search', ['recordView']).pipe(tap(() => this.metadataLoadingState.next(false)), map(definitions => {
            const recordViewMeta = { ...definitions.recordView };
            recordViewMeta.actions = (recordViewMeta?.actions ?? []).filter(value => {
                return value.key !== 'cancel';
            });
            return recordViewMeta;
        }));
        this.recordStore = savedFilterStoreFactory.create(this.getViewFields$());
        this.record$ = this.recordStore.state$.pipe(distinctUntilChanged(), map(record => record));
        this.stagingRecord$ = this.recordStore.staging$.pipe(distinctUntilChanged(), map(record => record));
        this.loading$ = this.state$.pipe(map(state => state.loading));
        this.mode$ = this.state$.pipe(map(state => state.mode));
        this.vm$ = this.stagingRecord$.pipe(combineLatestWith(this.mode$), map(([record, mode]) => {
            this.vm = { record, mode };
            return this.vm;
        }));
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
        };
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
     * @param {string} recordID to use
     * @param {string} mode to use
     * @returns {object} Observable<any>
     */
    init(recordID, mode = 'detail') {
        this.internalState.module = 'saved-search';
        this.internalState.recordID = recordID;
        this.setMode(mode);
        this.metadataLoadingState.next(true);
        const $data = forkJoin([this.meta$, this.load()]);
        return $data.pipe(map(([meta, record]) => record));
    }
    /**
     * Init record
     *
     * @param {string} searchModule name
     * @param {object} filter to use
     * @param {object} searchFields to use
     * @param {object} listColumns ColumnDefinition[]
     * @param {string} mode to use
     * @returns {object} Observable<any>
     */
    initRecord(searchModule, filter, searchFields, listColumns, mode = 'detail') {
        this.updateState({
            ...this.internalState,
            recordID: filter.id,
            module: 'saved-search',
            searchModule,
            mode
        });
        this.metadataLoadingState.next(true);
        this.meta$.pipe(take(1), tap(() => {
            this.metadataLoadingState.next(false);
            this.initStaging(searchModule, filter, searchFields, listColumns);
        })).subscribe();
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
            if (validators.length) {
                field?.formControl?.setValidators(validators);
            }
            if (asyncValidators.length) {
                field?.formControl?.setAsyncValidators(asyncValidators);
            }
        });
    }
    resetValidators(field) {
        field?.formControl?.clearValidators();
        field?.formControl?.clearAsyncValidators();
    }
    initStaging(searchModule, filter, searchFields, listColumns) {
        const filterRecord = deepClone(this.recordStore.extractBaseRecord(filter));
        filterRecord.searchModule = searchModule;
        this.recordStore.setSearchFields(searchFields);
        this.recordStore.setListColumns(listColumns);
        this.recordStore.setStaging(filterRecord);
        this.initValidators(this.recordStore.getStaging());
    }
    /**
     * Clear observable cache
     */
    clear() {
        this.cache$ = null;
        this.updateState(deepClone(initialState));
        this.metadataLoadingState.unsubscribe();
        this.metadataLoadingState = null;
        this.recordStore.destroy();
        this.recordStore = null;
    }
    /**
     * Clear observable cache
     */
    clearAuthBased() {
        this.clear();
    }
    /**
     * Get staging record
     *
     * @returns {string} ViewMode
     */
    getBaseRecord() {
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
    /**
     * Save record
     */
    save() {
        this.appStateStore.updateLoading(`${this.internalState.module}-record-save`, true);
        return this.recordStore.save().pipe(catchError(() => {
            this.message.addDangerMessageByKey('LBL_ERROR_SAVING');
            return of({});
        }), finalize(() => {
            this.appStateStore.updateLoading(`${this.internalState.module}-record-save`, false);
        }));
    }
    /**
     * Validate search filter fields
     *
     * @returns {object} Observable<boolean>
     */
    validate() {
        return forkJoin([
            this.recordStore.validate(),
            this.validateCriteria()
        ]).pipe(map(([fields, criteria]) => fields && criteria));
    }
    /**
     * Validate search current input
     *
     * @returns {object} Observable<boolean>
     */
    validateCriteria() {
        const currentFilter = this.recordStore.getStaging();
        const formGroup = currentFilter.criteriaFormGroup;
        formGroup.markAllAsTouched();
        return formGroup.statusChanges.pipe(startWith(formGroup.status), filter(status => status !== 'PENDING'), take(1), map(status => status === 'VALID'));
    }
    /**
     * Load / reload record using current pagination and criteria
     *
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<RecordViewState>
     */
    load(useCache = true) {
        this.appStateStore.updateLoading(`${this.internalState.module}-record-fetch`, true);
        return this.recordStore.retrieveRecord(this.internalState.module, this.internalState.recordID, useCache).pipe(tap((data) => {
            this.appStateStore.updateLoading(`${this.internalState.module}-record-fetch`, false);
            this.updateState({
                ...this.internalState,
                recordID: data.id,
                module: data.module,
            });
        }));
    }
    /**
     * Get view fields observable
     *
     * @returns {object} Observable<string[]>
     */
    getViewFieldsKeys$() {
        return this.meta$.pipe(map((recordMetadata) => {
            const fields = [];
            recordMetadata.panels.forEach(panel => {
                panel.rows.forEach(row => {
                    row.cols.forEach(col => {
                        fields.push(col.name);
                    });
                });
            });
            return fields;
        }));
    }
    /**
     * Get view fields observable
     *
     * @returns {object} Observable<ViewFieldDefinition[]>
     */
    getViewFields$() {
        return this.meta$.pipe(map((recordMetadata) => {
            const fields = [];
            recordMetadata.panels.forEach(panel => {
                panel.rows.forEach(row => {
                    row.cols.forEach(col => {
                        fields.push(col);
                    });
                });
            });
            return fields;
        }));
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
     * Get record view metadata
     *
     * @returns {object} metadata RecordViewMetadata
     */
    getMetadata() {
        const meta = this.meta.get() || {};
        return meta.recordView || {};
    }
    static ɵfac = function SavedFilterStore_Factory(t) { return new (t || SavedFilterStore)(i0.ɵɵinject(i1.AppStateStore), i0.ɵɵinject(i2.MetadataStore), i0.ɵɵinject(i3.MessageService), i0.ɵɵinject(i4.FieldManager), i0.ɵɵinject(i5.LanguageStore), i0.ɵɵinject(i6.SavedFilterRecordStoreFactory)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SavedFilterStore, factory: SavedFilterStore.ɵfac });
}
export { SavedFilterStore };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SavedFilterStore, [{
        type: Injectable
    }], function () { return [{ type: i1.AppStateStore }, { type: i2.MetadataStore }, { type: i3.MessageService }, { type: i4.FieldManager }, { type: i5.LanguageStore }, { type: i6.SavedFilterRecordStoreFactory }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZWQtZmlsdGVyLnN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbnRhaW5lcnMvbGlzdC1maWx0ZXIvc3RvcmUvc2F2ZWQtZmlsdGVyL3NhdmVkLWZpbHRlci5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsZUFBZSxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBYyxFQUFFLEVBQWUsTUFBTSxNQUFNLENBQUM7QUFDaEcsT0FBTyxFQUVILFNBQVMsRUFPWixNQUFNLFFBQVEsQ0FBQztBQUNoQixPQUFPLEVBQUMsVUFBVSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7O0FBWTdHLE1BQU0sWUFBWSxHQUF5QjtJQUN2QyxNQUFNLEVBQUUsRUFBRTtJQUNWLFlBQVksRUFBRSxFQUFFO0lBQ2hCLFFBQVEsRUFBRSxFQUFFO0lBQ1osT0FBTyxFQUFFLEtBQUs7SUFDZCxJQUFJLEVBQUUsUUFBUTtDQUNqQixDQUFDO0FBRUYsTUFDYSxnQkFBZ0I7SUErQlg7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBbENkOztPQUVHO0lBQ0gsT0FBTyxDQUEwQjtJQUNqQyxjQUFjLENBQTBCO0lBQ3hDLFFBQVEsQ0FBc0I7SUFDOUIsS0FBSyxDQUF1QjtJQUM1QixLQUFLLENBQWlDO0lBQ3RDLGdCQUFnQixDQUFzQjtJQUV0Qzs7T0FFRztJQUNILEdBQUcsQ0FBa0M7SUFDckMsRUFBRSxDQUFzQjtJQUN4QixXQUFXLENBQXlCO0lBRXBDLGNBQWMsQ0FBaUI7SUFDL0Is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SUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBa0MsRUFBRSxFQUFFO1lBQzlELE1BQU0sTUFBTSxHQUEwQixFQUFFLENBQUM7WUFDekMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2xDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNyQixHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTt3QkFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDckIsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztZQUVILE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDO0lBR0Q7Ozs7T0FJRztJQUNPLFdBQVcsQ0FBQyxLQUEyQjtRQUM3QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRDs7OztPQUlHO0lBQ08sV0FBVztRQUNqQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUNuQyxPQUFPLElBQUksQ0FBQyxVQUFVLElBQUksRUFBd0IsQ0FBQztJQUN2RCxDQUFDOzBFQTFYUSxnQkFBZ0I7Z0VBQWhCLGdCQUFnQixXQUFoQixnQkFBZ0I7O1NBQWhCLGdCQUFnQjt1RkFBaEIsZ0JBQWdCO2NBRDVCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgY29tYmluZUxhdGVzdFdpdGgsIGZvcmtKb2luLCBPYnNlcnZhYmxlLCBvZiwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gICAgQ29sdW1uRGVmaW5pdGlvbixcbiAgICBkZWVwQ2xvbmUsXG4gICAgUmVjb3JkLFxuICAgIFNlYXJjaENyaXRlcmlhLFxuICAgIFNlYXJjaE1ldGFGaWVsZE1hcCxcbiAgICBWaWV3Q29udGV4dCxcbiAgICBWaWV3RmllbGREZWZpbml0aW9uLFxuICAgIFZpZXdNb2RlXG59IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge2NhdGNoRXJyb3IsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIGZpbmFsaXplLCBtYXAsIHN0YXJ0V2l0aCwgdGFrZSwgdGFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1N0YXRlU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3N0YXRlJztcbmltcG9ydCB7TWV0YWRhdGFTdG9yZSwgUmVjb3JkVmlld01ldGFkYXRhfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9tZXRhZGF0YS9tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL21lc3NhZ2UvbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7QXBwU3RhdGVTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvYXBwLXN0YXRlL2FwcC1zdGF0ZS5zdG9yZSc7XG5pbXBvcnQge0ZpbHRlckNvbnRhaW5lckRhdGEsIEZpbHRlckNvbnRhaW5lclN0YXRlfSBmcm9tICcuL3NhdmVkLWZpbHRlci5zdG9yZS5tb2RlbCc7XG5pbXBvcnQge1NhdmVkRmlsdGVyfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9zYXZlZC1maWx0ZXJzL3NhdmVkLWZpbHRlci5tb2RlbCc7XG5pbXBvcnQge0ZpZWxkTWFuYWdlcn0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvcmVjb3JkL2ZpZWxkL2ZpZWxkLm1hbmFnZXInO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge1NhdmVkRmlsdGVyUmVjb3JkU3RvcmV9IGZyb20gJy4vc2F2ZWQtZmlsdGVyLXJlY29yZC5zdG9yZSc7XG5pbXBvcnQge1NhdmVkRmlsdGVyUmVjb3JkU3RvcmVGYWN0b3J5fSBmcm9tICcuL3NhdmVkLWZpbHRlci1yZWNvcmQuc3RvcmUuZmFjdG9yeSc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogRmlsdGVyQ29udGFpbmVyU3RhdGUgPSB7XG4gICAgbW9kdWxlOiAnJyxcbiAgICBzZWFyY2hNb2R1bGU6ICcnLFxuICAgIHJlY29yZElEOiAnJyxcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBtb2RlOiAnZGV0YWlsJyxcbn07XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTYXZlZEZpbHRlclN0b3JlIGltcGxlbWVudHMgU3RhdGVTdG9yZSB7XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaWMgbG9uZy1saXZlZCBvYnNlcnZhYmxlIHN0cmVhbXNcbiAgICAgKi9cbiAgICByZWNvcmQkOiBPYnNlcnZhYmxlPFNhdmVkRmlsdGVyPjtcbiAgICBzdGFnaW5nUmVjb3JkJDogT2JzZXJ2YWJsZTxTYXZlZEZpbHRlcj47XG4gICAgbG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgbW9kZSQ6IE9ic2VydmFibGU8Vmlld01vZGU+O1xuICAgIG1ldGEkOiBPYnNlcnZhYmxlPFJlY29yZFZpZXdNZXRhZGF0YT47XG4gICAgbWV0YWRhdGFMb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICAgIC8qKlxuICAgICAqIFZpZXctbW9kZWwgdGhhdCByZXNvbHZlcyBvbmNlIGFsbCB0aGUgZGF0YSBpcyByZWFkeSAob3IgdXBkYXRlZCkuXG4gICAgICovXG4gICAgdm0kOiBPYnNlcnZhYmxlPEZpbHRlckNvbnRhaW5lckRhdGE+O1xuICAgIHZtOiBGaWx0ZXJDb250YWluZXJEYXRhO1xuICAgIHJlY29yZFN0b3JlOiBTYXZlZEZpbHRlclJlY29yZFN0b3JlO1xuXG4gICAgc2VhcmNoQ3JpdGVyaWE6IFNlYXJjaENyaXRlcmlhO1xuICAgIGZpbHRlcjogU2F2ZWRGaWx0ZXI7XG5cbiAgICAvKiogSW50ZXJuYWwgUHJvcGVydGllcyAqL1xuICAgIHByb3RlY3RlZCBjYWNoZSQ6IE9ic2VydmFibGU8YW55PiA9IG51bGw7XG4gICAgcHJvdGVjdGVkIGludGVybmFsU3RhdGU6IEZpbHRlckNvbnRhaW5lclN0YXRlID0gZGVlcENsb25lKGluaXRpYWxTdGF0ZSk7XG4gICAgcHJvdGVjdGVkIHN0b3JlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxGaWx0ZXJDb250YWluZXJTdGF0ZT4odGhpcy5pbnRlcm5hbFN0YXRlKTtcbiAgICBwcm90ZWN0ZWQgc3RhdGUkID0gdGhpcy5zdG9yZS5hc09ic2VydmFibGUoKTtcbiAgICBwcm90ZWN0ZWQgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgICBwcm90ZWN0ZWQgbWV0YWRhdGFMb2FkaW5nU3RhdGU6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgYXBwU3RhdGVTdG9yZTogQXBwU3RhdGVTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIG1ldGE6IE1ldGFkYXRhU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBtZXNzYWdlOiBNZXNzYWdlU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGZpZWxkTWFuYWdlcjogRmllbGRNYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBzYXZlZEZpbHRlclN0b3JlRmFjdG9yeTogU2F2ZWRGaWx0ZXJSZWNvcmRTdG9yZUZhY3RvcnlcbiAgICApIHtcbiAgICAgICAgdGhpcy5tZXRhZGF0YUxvYWRpbmdTdGF0ZSA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuICAgICAgICB0aGlzLm1ldGFkYXRhTG9hZGluZyQgPSB0aGlzLm1ldGFkYXRhTG9hZGluZ1N0YXRlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgICAgIHRoaXMubWV0YSQgPSB0aGlzLm1ldGEuZ2V0TWV0YWRhdGEoJ3NhdmVkLXNlYXJjaCcsIFsncmVjb3JkVmlldyddKS5waXBlKFxuICAgICAgICAgICAgdGFwKCgpID0+IHRoaXMubWV0YWRhdGFMb2FkaW5nU3RhdGUubmV4dChmYWxzZSkpLFxuICAgICAgICAgICAgbWFwKGRlZmluaXRpb25zID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWNvcmRWaWV3TWV0YSA9IHsuLi5kZWZpbml0aW9ucy5yZWNvcmRWaWV3fTtcbiAgICAgICAgICAgICAgICByZWNvcmRWaWV3TWV0YS5hY3Rpb25zID0gKHJlY29yZFZpZXdNZXRhPy5hY3Rpb25zID8/IFtdKS5maWx0ZXIodmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUua2V5ICE9PSAnY2FuY2VsJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiByZWNvcmRWaWV3TWV0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5yZWNvcmRTdG9yZSA9IHNhdmVkRmlsdGVyU3RvcmVGYWN0b3J5LmNyZWF0ZSh0aGlzLmdldFZpZXdGaWVsZHMkKCkpO1xuXG4gICAgICAgIHRoaXMucmVjb3JkJCA9IHRoaXMucmVjb3JkU3RvcmUuc3RhdGUkLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSwgbWFwKHJlY29yZCA9PiByZWNvcmQgYXMgU2F2ZWRGaWx0ZXIpKTtcbiAgICAgICAgdGhpcy5zdGFnaW5nUmVjb3JkJCA9IHRoaXMucmVjb3JkU3RvcmUuc3RhZ2luZyQucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLCBtYXAocmVjb3JkID0+IHJlY29yZCBhcyBTYXZlZEZpbHRlcikpO1xuICAgICAgICB0aGlzLmxvYWRpbmckID0gdGhpcy5zdGF0ZSQucGlwZShtYXAoc3RhdGUgPT4gc3RhdGUubG9hZGluZykpO1xuICAgICAgICB0aGlzLm1vZGUkID0gdGhpcy5zdGF0ZSQucGlwZShtYXAoc3RhdGUgPT4gc3RhdGUubW9kZSkpO1xuXG4gICAgICAgIHRoaXMudm0kID0gdGhpcy5zdGFnaW5nUmVjb3JkJC5waXBlKFxuICAgICAgICAgICAgY29tYmluZUxhdGVzdFdpdGgodGhpcy5tb2RlJCksXG4gICAgICAgICAgICBtYXAoKFtyZWNvcmQsIG1vZGVdOiBbUmVjb3JkLCBWaWV3TW9kZV0pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnZtID0ge3JlY29yZCwgbW9kZX0gYXMgRmlsdGVyQ29udGFpbmVyRGF0YTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52bTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0TW9kdWxlTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFN0YXRlLm1vZHVsZTtcbiAgICB9XG5cbiAgICBnZXRSZWNvcmRJZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFN0YXRlLnJlY29yZElEO1xuICAgIH1cblxuICAgIGdldFZpZXdDb250ZXh0KCk6IFZpZXdDb250ZXh0IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1vZHVsZTogdGhpcy5nZXRNb2R1bGVOYW1lKCksXG4gICAgICAgICAgICBpZDogdGhpcy5nZXRSZWNvcmRJZCgpLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFuIGRlc3Ryb3lcbiAgICAgKi9cbiAgICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbCByZWNvcmQgbG9hZCBpZiBub3QgY2FjaGVkIGFuZCB1cGRhdGUgc3RhdGUuXG4gICAgICogUmV0dXJucyBvYnNlcnZhYmxlIHRvIGJlIHVzZWQgaW4gcmVzb2x2ZXIgaWYgbmVlZGVkXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcmVjb3JkSUQgdG8gdXNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZGUgdG8gdXNlXG4gICAgICogQHJldHVybnMge29iamVjdH0gT2JzZXJ2YWJsZTxhbnk+XG4gICAgICovXG4gICAgcHVibGljIGluaXQocmVjb3JkSUQ6IHN0cmluZywgbW9kZSA9ICdkZXRhaWwnIGFzIFZpZXdNb2RlKTogT2JzZXJ2YWJsZTxSZWNvcmQ+IHtcbiAgICAgICAgdGhpcy5pbnRlcm5hbFN0YXRlLm1vZHVsZSA9ICdzYXZlZC1zZWFyY2gnO1xuICAgICAgICB0aGlzLmludGVybmFsU3RhdGUucmVjb3JkSUQgPSByZWNvcmRJRDtcbiAgICAgICAgdGhpcy5zZXRNb2RlKG1vZGUpO1xuXG4gICAgICAgIHRoaXMubWV0YWRhdGFMb2FkaW5nU3RhdGUubmV4dCh0cnVlKTtcblxuICAgICAgICBjb25zdCAkZGF0YSA9IGZvcmtKb2luKFt0aGlzLm1ldGEkLCB0aGlzLmxvYWQoKV0pO1xuXG4gICAgICAgIHJldHVybiAkZGF0YS5waXBlKG1hcCgoW21ldGEsIHJlY29yZF0pID0+IHJlY29yZCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXQgcmVjb3JkXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VhcmNoTW9kdWxlIG5hbWVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZmlsdGVyIHRvIHVzZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzZWFyY2hGaWVsZHMgdG8gdXNlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGxpc3RDb2x1bW5zIENvbHVtbkRlZmluaXRpb25bXVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2RlIHRvIHVzZVxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE9ic2VydmFibGU8YW55PlxuICAgICAqL1xuICAgIHB1YmxpYyBpbml0UmVjb3JkKFxuICAgICAgICBzZWFyY2hNb2R1bGU6IHN0cmluZyxcbiAgICAgICAgZmlsdGVyOiBTYXZlZEZpbHRlcixcbiAgICAgICAgc2VhcmNoRmllbGRzOiBTZWFyY2hNZXRhRmllbGRNYXAsXG4gICAgICAgIGxpc3RDb2x1bW5zOiBDb2x1bW5EZWZpbml0aW9uW10sXG4gICAgICAgIG1vZGUgPSAnZGV0YWlsJyBhcyBWaWV3TW9kZSk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgICAgICAgLi4udGhpcy5pbnRlcm5hbFN0YXRlLFxuICAgICAgICAgICAgcmVjb3JkSUQ6IGZpbHRlci5pZCxcbiAgICAgICAgICAgIG1vZHVsZTogJ3NhdmVkLXNlYXJjaCcsXG4gICAgICAgICAgICBzZWFyY2hNb2R1bGUsXG4gICAgICAgICAgICBtb2RlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubWV0YWRhdGFMb2FkaW5nU3RhdGUubmV4dCh0cnVlKTtcblxuICAgICAgICB0aGlzLm1ldGEkLnBpcGUoXG4gICAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgICAgdGFwKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1ldGFkYXRhTG9hZGluZ1N0YXRlLm5leHQoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdFN0YWdpbmcoc2VhcmNoTW9kdWxlLCBmaWx0ZXIsIHNlYXJjaEZpZWxkcywgbGlzdENvbHVtbnMpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKS5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBpbml0VmFsaWRhdG9ycyhyZWNvcmQ6IFJlY29yZCk6IHZvaWQge1xuICAgICAgICBpZighcmVjb3JkIHx8ICFPYmplY3Qua2V5cyhyZWNvcmQ/LmZpZWxkcykubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBPYmplY3Qua2V5cyhyZWNvcmQuZmllbGRzKS5mb3JFYWNoKGZpZWxkTmFtZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZCA9IHJlY29yZC5maWVsZHNbZmllbGROYW1lXTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1Db250cm9sID0gZmllbGQ/LmZvcm1Db250cm9sID8/IG51bGw7XG4gICAgICAgICAgICBpZiAoIWZvcm1Db250cm9sKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnJlc2V0VmFsaWRhdG9ycyhmaWVsZCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRvcnMgPSBmaWVsZD8udmFsaWRhdG9ycyA/PyBbXTtcbiAgICAgICAgICAgIGNvbnN0IGFzeW5jVmFsaWRhdG9ycyA9IGZpZWxkPy5hc3luY1ZhbGlkYXRvcnMgPz8gW107XG5cbiAgICAgICAgICAgIGlmICh2YWxpZGF0b3JzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGZpZWxkPy5mb3JtQ29udHJvbD8uc2V0VmFsaWRhdG9ycyh2YWxpZGF0b3JzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhc3luY1ZhbGlkYXRvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZmllbGQ/LmZvcm1Db250cm9sPy5zZXRBc3luY1ZhbGlkYXRvcnMoYXN5bmNWYWxpZGF0b3JzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICByZXNldFZhbGlkYXRvcnMoZmllbGQpIHtcbiAgICAgICAgZmllbGQ/LmZvcm1Db250cm9sPy5jbGVhclZhbGlkYXRvcnMoKTtcbiAgICAgICAgZmllbGQ/LmZvcm1Db250cm9sPy5jbGVhckFzeW5jVmFsaWRhdG9ycygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0U3RhZ2luZyhcbiAgICAgICAgc2VhcmNoTW9kdWxlOiBzdHJpbmcsXG4gICAgICAgIGZpbHRlcjogU2F2ZWRGaWx0ZXIsXG4gICAgICAgIHNlYXJjaEZpZWxkczogU2VhcmNoTWV0YUZpZWxkTWFwLFxuICAgICAgICBsaXN0Q29sdW1uczogQ29sdW1uRGVmaW5pdGlvbltdLFxuICAgICkge1xuXG4gICAgICAgIGNvbnN0IGZpbHRlclJlY29yZDogU2F2ZWRGaWx0ZXIgPSBkZWVwQ2xvbmUodGhpcy5yZWNvcmRTdG9yZS5leHRyYWN0QmFzZVJlY29yZChmaWx0ZXIpKTtcblxuICAgICAgICBmaWx0ZXJSZWNvcmQuc2VhcmNoTW9kdWxlID0gc2VhcmNoTW9kdWxlO1xuICAgICAgICB0aGlzLnJlY29yZFN0b3JlLnNldFNlYXJjaEZpZWxkcyhzZWFyY2hGaWVsZHMpO1xuICAgICAgICB0aGlzLnJlY29yZFN0b3JlLnNldExpc3RDb2x1bW5zKGxpc3RDb2x1bW5zKTtcblxuICAgICAgICB0aGlzLnJlY29yZFN0b3JlLnNldFN0YWdpbmcoZmlsdGVyUmVjb3JkKTtcbiAgICAgICAgdGhpcy5pbml0VmFsaWRhdG9ycyh0aGlzLnJlY29yZFN0b3JlLmdldFN0YWdpbmcoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgb2JzZXJ2YWJsZSBjYWNoZVxuICAgICAqL1xuICAgIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jYWNoZSQgPSBudWxsO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKGRlZXBDbG9uZShpbml0aWFsU3RhdGUpKTtcbiAgICAgICAgdGhpcy5tZXRhZGF0YUxvYWRpbmdTdGF0ZS51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLm1ldGFkYXRhTG9hZGluZ1N0YXRlID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZWNvcmRTdG9yZS5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMucmVjb3JkU3RvcmUgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFyIG9ic2VydmFibGUgY2FjaGVcbiAgICAgKi9cbiAgICBwdWJsaWMgY2xlYXJBdXRoQmFzZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgc3RhZ2luZyByZWNvcmRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IFZpZXdNb2RlXG4gICAgICovXG4gICAgcHVibGljIGdldEJhc2VSZWNvcmQoKTogU2F2ZWRGaWx0ZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWNvcmRTdG9yZS5nZXRCYXNlUmVjb3JkKCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBHZXQgY3VycmVudCB2aWV3IG1vZGVcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IFZpZXdNb2RlXG4gICAgICovXG4gICAgcHVibGljIGdldE1vZGUoKTogVmlld01vZGUge1xuICAgICAgICBpZiAoIXRoaXMuaW50ZXJuYWxTdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxTdGF0ZS5tb2RlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBuZXcgbW9kZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZGUgVmlld01vZGVcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0TW9kZShtb2RlOiBWaWV3TW9kZSk6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHsuLi50aGlzLmludGVybmFsU3RhdGUsIG1vZGV9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTYXZlIHJlY29yZFxuICAgICAqL1xuICAgIHB1YmxpYyBzYXZlKCk6IE9ic2VydmFibGU8UmVjb3JkPiB7XG4gICAgICAgIHRoaXMuYXBwU3RhdGVTdG9yZS51cGRhdGVMb2FkaW5nKGAke3RoaXMuaW50ZXJuYWxTdGF0ZS5tb2R1bGV9LXJlY29yZC1zYXZlYCwgdHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVjb3JkU3RvcmUuc2F2ZSgpLnBpcGUoXG4gICAgICAgICAgICBjYXRjaEVycm9yKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UuYWRkRGFuZ2VyTWVzc2FnZUJ5S2V5KCdMQkxfRVJST1JfU0FWSU5HJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mKHt9IGFzIFJlY29yZCk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGZpbmFsaXplKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcFN0YXRlU3RvcmUudXBkYXRlTG9hZGluZyhgJHt0aGlzLmludGVybmFsU3RhdGUubW9kdWxlfS1yZWNvcmQtc2F2ZWAsIGZhbHNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVmFsaWRhdGUgc2VhcmNoIGZpbHRlciBmaWVsZHNcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE9ic2VydmFibGU8Ym9vbGVhbj5cbiAgICAgKi9cbiAgICBwdWJsaWMgdmFsaWRhdGUoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cbiAgICAgICAgcmV0dXJuIGZvcmtKb2luKFtcbiAgICAgICAgICAgIHRoaXMucmVjb3JkU3RvcmUudmFsaWRhdGUoKSxcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGVDcml0ZXJpYSgpXG4gICAgICAgIF0pLnBpcGUobWFwKChbZmllbGRzLCBjcml0ZXJpYV0pID0+IGZpZWxkcyAmJiBjcml0ZXJpYSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlIHNlYXJjaCBjdXJyZW50IGlucHV0XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBPYnNlcnZhYmxlPGJvb2xlYW4+XG4gICAgICovXG4gICAgcHVibGljIHZhbGlkYXRlQ3JpdGVyaWEoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cbiAgICAgICAgY29uc3QgY3VycmVudEZpbHRlciA9IHRoaXMucmVjb3JkU3RvcmUuZ2V0U3RhZ2luZygpIGFzIFNhdmVkRmlsdGVyO1xuICAgICAgICBjb25zdCBmb3JtR3JvdXAgPSBjdXJyZW50RmlsdGVyLmNyaXRlcmlhRm9ybUdyb3VwO1xuICAgICAgICBmb3JtR3JvdXAubWFya0FsbEFzVG91Y2hlZCgpO1xuICAgICAgICByZXR1cm4gZm9ybUdyb3VwLnN0YXR1c0NoYW5nZXMucGlwZShcbiAgICAgICAgICAgIHN0YXJ0V2l0aChmb3JtR3JvdXAuc3RhdHVzKSxcbiAgICAgICAgICAgIGZpbHRlcihzdGF0dXMgPT4gc3RhdHVzICE9PSAnUEVORElORycpLFxuICAgICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICAgIG1hcChzdGF0dXMgPT4gc3RhdHVzID09PSAnVkFMSUQnKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWQgLyByZWxvYWQgcmVjb3JkIHVzaW5nIGN1cnJlbnQgcGFnaW5hdGlvbiBhbmQgY3JpdGVyaWFcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXNlQ2FjaGUgaWYgdG8gdXNlIGNhY2hlXG4gICAgICogQHJldHVybnMge29iamVjdH0gT2JzZXJ2YWJsZTxSZWNvcmRWaWV3U3RhdGU+XG4gICAgICovXG4gICAgcHVibGljIGxvYWQodXNlQ2FjaGUgPSB0cnVlKTogT2JzZXJ2YWJsZTxSZWNvcmQ+IHtcbiAgICAgICAgdGhpcy5hcHBTdGF0ZVN0b3JlLnVwZGF0ZUxvYWRpbmcoYCR7dGhpcy5pbnRlcm5hbFN0YXRlLm1vZHVsZX0tcmVjb3JkLWZldGNoYCwgdHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVjb3JkU3RvcmUucmV0cmlldmVSZWNvcmQoXG4gICAgICAgICAgICB0aGlzLmludGVybmFsU3RhdGUubW9kdWxlLFxuICAgICAgICAgICAgdGhpcy5pbnRlcm5hbFN0YXRlLnJlY29yZElELFxuICAgICAgICAgICAgdXNlQ2FjaGVcbiAgICAgICAgKS5waXBlKFxuICAgICAgICAgICAgdGFwKChkYXRhOiBSZWNvcmQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcFN0YXRlU3RvcmUudXBkYXRlTG9hZGluZyhgJHt0aGlzLmludGVybmFsU3RhdGUubW9kdWxlfS1yZWNvcmQtZmV0Y2hgLCBmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5pbnRlcm5hbFN0YXRlLFxuICAgICAgICAgICAgICAgICAgICByZWNvcmRJRDogZGF0YS5pZCxcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlOiBkYXRhLm1vZHVsZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHZpZXcgZmllbGRzIG9ic2VydmFibGVcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE9ic2VydmFibGU8c3RyaW5nW10+XG4gICAgICovXG4gICAgcHVibGljIGdldFZpZXdGaWVsZHNLZXlzJCgpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLm1ldGEkLnBpcGUobWFwKChyZWNvcmRNZXRhZGF0YTogUmVjb3JkVmlld01ldGFkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZHM6IHN0cmluZ1tdID0gW107XG4gICAgICAgICAgICByZWNvcmRNZXRhZGF0YS5wYW5lbHMuZm9yRWFjaChwYW5lbCA9PiB7XG4gICAgICAgICAgICAgICAgcGFuZWwucm93cy5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdy5jb2xzLmZvckVhY2goY29sID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkcy5wdXNoKGNvbC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGZpZWxkcztcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB2aWV3IGZpZWxkcyBvYnNlcnZhYmxlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBPYnNlcnZhYmxlPFZpZXdGaWVsZERlZmluaXRpb25bXT5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0Vmlld0ZpZWxkcyQoKTogT2JzZXJ2YWJsZTxWaWV3RmllbGREZWZpbml0aW9uW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWV0YSQucGlwZShtYXAoKHJlY29yZE1ldGFkYXRhOiBSZWNvcmRWaWV3TWV0YWRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkczogVmlld0ZpZWxkRGVmaW5pdGlvbltdID0gW107XG4gICAgICAgICAgICByZWNvcmRNZXRhZGF0YS5wYW5lbHMuZm9yRWFjaChwYW5lbCA9PiB7XG4gICAgICAgICAgICAgICAgcGFuZWwucm93cy5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdy5jb2xzLmZvckVhY2goY29sID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkcy5wdXNoKGNvbCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBmaWVsZHM7XG4gICAgICAgIH0pKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgc3RhdGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0ZSB0byBzZXRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgdXBkYXRlU3RhdGUoc3RhdGU6IEZpbHRlckNvbnRhaW5lclN0YXRlKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RvcmUubmV4dCh0aGlzLmludGVybmFsU3RhdGUgPSBzdGF0ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHJlY29yZCB2aWV3IG1ldGFkYXRhXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBtZXRhZGF0YSBSZWNvcmRWaWV3TWV0YWRhdGFcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0TWV0YWRhdGEoKTogUmVjb3JkVmlld01ldGFkYXRhIHtcbiAgICAgICAgY29uc3QgbWV0YSA9IHRoaXMubWV0YS5nZXQoKSB8fCB7fTtcbiAgICAgICAgcmV0dXJuIG1ldGEucmVjb3JkVmlldyB8fCB7fSBhcyBSZWNvcmRWaWV3TWV0YWRhdGE7XG4gICAgfVxufVxuIl19