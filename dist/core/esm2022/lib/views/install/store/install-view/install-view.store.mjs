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
import { BehaviorSubject, combineLatestWith, of } from 'rxjs';
import { deepClone, isVoid } from 'common';
import { distinctUntilChanged, map, shareReplay } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/record/graphql/api.record.get";
import * as i2 from "../../../../store/record/graphql/api.record.save";
import * as i3 from "../../../../services/message/message.service";
import * as i4 from "../../../../services/record/record.manager";
import * as i5 from "../../../../store/record/record.store.factory";
import * as i6 from "../../../../store/language/language.store";
const initialState = {
    loading: false,
    mode: 'detail',
    params: {
        returnModule: '',
        returnId: '',
        returnAction: ''
    }
};
class InstallViewStore {
    recordFetchGQL;
    recordSaveGQL;
    message;
    recordManager;
    recordStoreFactory;
    language;
    /**
     * Public long-lived observable streams
     */
    record$;
    stagingRecord$;
    loading$;
    mode$;
    viewContext$;
    /**
     * View-model that resolves once all the data is ready (or updated).
     */
    vm$;
    vm;
    recordStore;
    /** Internal Properties */
    cache$ = null;
    internalState = deepClone(initialState);
    store = new BehaviorSubject(this.internalState);
    state$ = this.store.asObservable();
    subs = [];
    constructor(recordFetchGQL, recordSaveGQL, message, recordManager, recordStoreFactory, language) {
        this.recordFetchGQL = recordFetchGQL;
        this.recordSaveGQL = recordSaveGQL;
        this.message = message;
        this.recordManager = recordManager;
        this.recordStoreFactory = recordStoreFactory;
        this.language = language;
        this.recordStore = recordStoreFactory.create(this.getViewFieldsObservable());
        this.record$ = this.recordStore.state$.pipe(distinctUntilChanged());
        this.stagingRecord$ = this.recordStore.staging$.pipe(distinctUntilChanged());
        this.loading$ = this.state$.pipe(map(state => state.loading));
        this.mode$ = this.state$.pipe(map(state => state.mode));
        this.vm$ = this.record$.pipe(combineLatestWith(this.loading$), map(([record, loading]) => {
            this.vm = { record, loading };
            return this.vm;
        }));
        this.viewContext$ = this.record$.pipe(map(() => {
            return this.getViewContext();
        }));
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
    getViewContext() {
        return {
            record: this.getBaseRecord()
        };
    }
    getActions() {
        return of([]);
    }
    /**
     * Initial install view
     *
     * @param {string} mode to use
     * @param {object} params to set
     */
    init(mode = 'edit', params = {}) {
        this.setMode(mode);
        this.recordStore.init({
            id: '',
            module: 'install',
            attributes: {}
        });
    }
    /**
     * Clear observable cache
     */
    clear() {
        this.cache$ = null;
        this.updateState(deepClone(initialState));
    }
    /**
     * Clear
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
    getLicenseText() {
        return this.language.getFieldLabel('SUITE8_LICENSE_CONTENT');
    }
    getMetadata() {
        return {
            actions: [],
            templateMeta: {
                maxColumns: 2,
                useTabs: true,
                tabDefs: {
                    LBL_CONFIG: {
                        newTab: true,
                        panelDefault: 'expanded'
                    }
                }
            },
            panels: [
                {
                    key: 'LBL_CONFIG',
                    display$: of(true).pipe(shareReplay(1)),
                    rows: [
                        {
                            cols: [
                                {
                                    name: 'site_host',
                                    label: 'LBL_SITECFG_URL',
                                    type: 'varchar',
                                    fieldDefinition: {
                                        "name": "site_host",
                                        "vname": "LBL_SITECFG_URL",
                                        "type": "varchar",
                                        "required": true,
                                    },
                                },
                                {
                                    name: 'demoData',
                                    label: 'LBL_DBCONF_DEMO_DATA',
                                    type: 'enum',
                                    fieldDefinition: {
                                        name: "demoData",
                                        vname: "LBL_DBCONF_DEMO_DATA",
                                        type: "enum",
                                        options: "__no_options__",
                                        required: true,
                                        metadata: {
                                            extraOptions: [
                                                {
                                                    value: "yes",
                                                    labelKey: "LBL_YES",
                                                },
                                                {
                                                    value: "no",
                                                    labelKey: "LBL_NO",
                                                },
                                            ]
                                        }
                                    },
                                },
                            ]
                        },
                        {
                            cols: [
                                {
                                    name: 'db_config',
                                    label: 'LBL_DBCONF_TITLE',
                                    type: 'grouped-field',
                                    fieldDefinition: {
                                        name: "db_config",
                                        vname: "LBL_DBCONF_TITLE",
                                        type: "grouped-field",
                                        layout: [
                                            "db_username",
                                            "db_password",
                                            "db_host",
                                            "db_name",
                                            "db_port"
                                        ],
                                        display: "vertical",
                                        groupFields: {
                                            "db_username": {
                                                "name": "db_username",
                                                "type": "varchar",
                                                "vname": "LBL_DBCONF_SUITE_DB_USER",
                                                "labelKey": "LBL_DBCONF_SUITE_DB_USER",
                                                "label": "LBL_DBCONF_SUITE_DB_USER",
                                                "showLabel": ["*"],
                                                "required": true,
                                            },
                                            "db_password": {
                                                "name": "db_password",
                                                "type": "password",
                                                "vname": "LBL_DBCONF_DB_PASSWORD",
                                                "labelKey": "LBL_DBCONF_DB_PASSWORD",
                                                "showLabel": ["*"],
                                                "required": true,
                                            },
                                            "db_host": {
                                                "name": "db_host",
                                                "type": "varchar",
                                                "vname": "LBL_DBCONF_HOST_NAME",
                                                "labelKey": "LBL_DBCONF_HOST_NAME",
                                                "showLabel": ["*"],
                                                "required": true,
                                            },
                                            "db_name": {
                                                "name": "db_name",
                                                "type": "varchar",
                                                "vname": "LBL_DBCONF_DB_NAME",
                                                "labelKey": "LBL_DBCONF_DB_NAME",
                                                "showLabel": ["*"],
                                                "required": true,
                                            },
                                            "db_port": {
                                                "name": "db_port",
                                                "type": "varchar",
                                                "vname": "LBL_DBCONF_DB_PORT",
                                                "labelKey": "LBL_DBCONF_DB_PORT",
                                                "showLabel": ["*"],
                                                "required": false
                                            }
                                        },
                                        showLabel: {
                                            edit: ['*']
                                        }
                                    },
                                },
                                {
                                    name: 'admin_config',
                                    label: 'LBL_SITECFG_TITLE',
                                    type: 'grouped-field',
                                    fieldDefinition: {
                                        name: "admin_config",
                                        vname: "LBL_SITECFG_TITLE",
                                        type: "grouped-field",
                                        layout: [
                                            "site_username",
                                            "site_password",
                                        ],
                                        display: "vertical",
                                        groupFields: {
                                            "site_username": {
                                                "name": "site_username",
                                                "type": "varchar",
                                                "vname": "LBL_SITECFG_ADMIN_Name",
                                                "labelKey": "LBL_SITECFG_ADMIN_Name",
                                                "showLabel": ["edit"],
                                                "required": true,
                                            },
                                            "site_password": {
                                                "name": "site_password",
                                                "type": "password",
                                                "vname": "LBL_SITECFG_ADMIN_PASS",
                                                "labelKey": "LBL_SITECFG_ADMIN_PASS",
                                                "showLabel": ["edit"],
                                                "required": true,
                                            },
                                        },
                                        showLabel: {
                                            edit: ['*']
                                        }
                                    },
                                }
                            ]
                        }
                    ]
                }
            ],
        };
    }
    getMetadata$() {
        return of(this.getMetadata());
    }
    getModuleName() {
        return 'install';
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
     * Update the state
     *
     * @param {object} state to set
     */
    updateState(state) {
        this.store.next(this.internalState = state);
    }
    getIgnoreSystemChecksField() {
        return this.recordStore.getStaging().fields['sys_check_option'];
    }
    /**
     * Get view fields observable
     *
     * @returns {object} Observable<ViewFieldDefinition[]>
     */
    getViewFieldsObservable() {
        return this.getMetadata$().pipe(map((meta) => {
            const fields = [];
            meta.panels.forEach(panel => {
                panel.rows.forEach(row => {
                    row.cols.forEach(col => {
                        fields.push(col);
                    });
                });
            });
            fields.push({
                "name": "sys_check_option",
                "type": "boolean",
                fieldDefinition: {
                    "name": "sys_check_option",
                    "type": "boolean",
                    "vname": "LBL_SYS_CHECK_WARNING",
                    "labelKey": "LBL_SYS_CHECK_WARNING",
                    "showLabel": ["edit"],
                    "required": false,
                    "value": 'false',
                    "default": 'false'
                }
            });
            return fields;
        }));
    }
    static ɵfac = function InstallViewStore_Factory(t) { return new (t || InstallViewStore)(i0.ɵɵinject(i1.RecordFetchGQL), i0.ɵɵinject(i2.RecordSaveGQL), i0.ɵɵinject(i3.MessageService), i0.ɵɵinject(i4.RecordManager), i0.ɵɵinject(i5.RecordStoreFactory), i0.ɵɵinject(i6.LanguageStore)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: InstallViewStore, factory: InstallViewStore.ɵfac });
}
export { InstallViewStore };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InstallViewStore, [{
        type: Injectable
    }], function () { return [{ type: i1.RecordFetchGQL }, { type: i2.RecordSaveGQL }, { type: i3.MessageService }, { type: i4.RecordManager }, { type: i5.RecordStoreFactory }, { type: i6.LanguageStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFsbC12aWV3LnN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3ZpZXdzL2luc3RhbGwvc3RvcmUvaW5zdGFsbC12aWV3L2luc3RhbGwtdmlldy5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsZUFBZSxFQUFpQixpQkFBaUIsRUFBYyxFQUFFLEVBQWUsTUFBTSxNQUFNLENBQUM7QUFDckcsT0FBTyxFQUVILFNBQVMsRUFJVCxNQUFNLEVBV1QsTUFBTSxRQUFRLENBQUM7QUFDaEIsT0FBTyxFQUFDLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7QUFhdEUsTUFBTSxZQUFZLEdBQXFCO0lBQ25DLE9BQU8sRUFBRSxLQUFLO0lBQ2QsSUFBSSxFQUFFLFFBQVE7SUFDZCxNQUFNLEVBQUU7UUFDSixZQUFZLEVBQUUsRUFBRTtRQUNoQixRQUFRLEVBQUUsRUFBRTtRQUNaLFlBQVksRUFBRSxFQUFFO0tBQ25CO0NBQ0osQ0FBQztBQUVGLE1BQ2EsZ0JBQWdCO0lBMEJYO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQTdCZDs7T0FFRztJQUNILE9BQU8sQ0FBcUI7SUFDNUIsY0FBYyxDQUFxQjtJQUNuQyxRQUFRLENBQXNCO0lBQzlCLEtBQUssQ0FBdUI7SUFDNUIsWUFBWSxDQUEwQjtJQUV0Qzs7T0FFRztJQUNILEdBQUcsQ0FBK0I7SUFDbEMsRUFBRSxDQUFtQjtJQUNyQixXQUFXLENBQWM7SUFFekIsMEJBQTBCO0lBQ2hCLE1BQU0sR0FBb0IsSUFBSSxDQUFDO0lBQy9CLGFBQWEsR0FBcUIsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFD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QUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7d0JBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3JCLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7WUFFSCxNQUFNLENBQUMsSUFBSSxDQUNQO2dCQUNJLE1BQU0sRUFBRSxrQkFBa0I7Z0JBQzFCLE1BQU0sRUFBRSxTQUFTO2dCQUNqQixlQUFlLEVBQUU7b0JBQ2IsTUFBTSxFQUFFLGtCQUFrQjtvQkFDMUIsTUFBTSxFQUFFLFNBQVM7b0JBQ2pCLE9BQU8sRUFBRSx1QkFBdUI7b0JBQ2hDLFVBQVUsRUFBRSx1QkFBdUI7b0JBQ25DLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQztvQkFDckIsVUFBVSxFQUFFLEtBQUs7b0JBQ2pCLE9BQU8sRUFBRSxPQUFPO29CQUNoQixTQUFTLEVBQUUsT0FBTztpQkFDckI7YUFDbUIsQ0FDM0IsQ0FBQztZQUVGLE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDOzBFQWpZUSxnQkFBZ0I7Z0VBQWhCLGdCQUFnQixXQUFoQixnQkFBZ0I7O1NBQWhCLGdCQUFnQjt1RkFBaEIsZ0JBQWdCO2NBRDVCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgY29tYmluZUxhdGVzdCwgY29tYmluZUxhdGVzdFdpdGgsIE9ic2VydmFibGUsIG9mLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgICBBY3Rpb24sXG4gICAgZGVlcENsb25lLFxuICAgIEZpZWxkLFxuICAgIEZpZWxkRGVmaW5pdGlvbixcbiAgICBGaWVsZE1ldGFkYXRhLFxuICAgIGlzVm9pZCxcbiAgICBPcHRpb24sXG4gICAgUGFuZWwsXG4gICAgUGFuZWxDZWxsLFxuICAgIFBhbmVsUm93LFxuICAgIFJlY29yZCxcbiAgICBWaWV3Q29udGV4dCxcbiAgICBWaWV3RmllbGREZWZpbml0aW9uLFxuICAgIFZpZXdNb2RlLFxuICAgIFRhYkRlZmluaXRpb24sXG4gICAgVGFiRGVmaW5pdGlvbnNcbn0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7ZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCwgc2hhcmVSZXBsYXl9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7SW5zdGFsbFZpZXdNZXRhZGF0YSwgSW5zdGFsbFZpZXdNb2RlbCwgSW5zdGFsbFZpZXdTdGF0ZX0gZnJvbSAnLi9pbnN0YWxsLXZpZXcuc3RvcmUubW9kZWwnO1xuaW1wb3J0IHtTdGF0ZVN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9zdGF0ZSc7XG5pbXBvcnQge1JlY29yZFNhdmVHUUx9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3JlY29yZC9ncmFwaHFsL2FwaS5yZWNvcmQuc2F2ZSc7XG5pbXBvcnQge1JlY29yZFRlbXBsYXRlTWV0YWRhdGF9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL21ldGFkYXRhL21ldGFkYXRhLnN0b3JlLnNlcnZpY2UnO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbWVzc2FnZS9tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHtSZWNvcmRNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9yZWNvcmQvcmVjb3JkLm1hbmFnZXInO1xuaW1wb3J0IHtSZWNvcmRTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvcmVjb3JkL3JlY29yZC5zdG9yZSc7XG5pbXBvcnQge1JlY29yZEZldGNoR1FMfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9yZWNvcmQvZ3JhcGhxbC9hcGkucmVjb3JkLmdldCc7XG5pbXBvcnQge1BhcmFtc30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7UmVjb3JkU3RvcmVGYWN0b3J5fSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9yZWNvcmQvcmVjb3JkLnN0b3JlLmZhY3RvcnknO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogSW5zdGFsbFZpZXdTdGF0ZSA9IHtcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBtb2RlOiAnZGV0YWlsJyxcbiAgICBwYXJhbXM6IHtcbiAgICAgICAgcmV0dXJuTW9kdWxlOiAnJyxcbiAgICAgICAgcmV0dXJuSWQ6ICcnLFxuICAgICAgICByZXR1cm5BY3Rpb246ICcnXG4gICAgfVxufTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluc3RhbGxWaWV3U3RvcmUgaW1wbGVtZW50cyBTdGF0ZVN0b3JlIHtcblxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBsb25nLWxpdmVkIG9ic2VydmFibGUgc3RyZWFtc1xuICAgICAqL1xuICAgIHJlY29yZCQ6IE9ic2VydmFibGU8UmVjb3JkPjtcbiAgICBzdGFnaW5nUmVjb3JkJDogT2JzZXJ2YWJsZTxSZWNvcmQ+O1xuICAgIGxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIG1vZGUkOiBPYnNlcnZhYmxlPFZpZXdNb2RlPjtcbiAgICB2aWV3Q29udGV4dCQ6IE9ic2VydmFibGU8Vmlld0NvbnRleHQ+O1xuXG4gICAgLyoqXG4gICAgICogVmlldy1tb2RlbCB0aGF0IHJlc29sdmVzIG9uY2UgYWxsIHRoZSBkYXRhIGlzIHJlYWR5IChvciB1cGRhdGVkKS5cbiAgICAgKi9cbiAgICB2bSQ6IE9ic2VydmFibGU8SW5zdGFsbFZpZXdNb2RlbD47XG4gICAgdm06IEluc3RhbGxWaWV3TW9kZWw7XG4gICAgcmVjb3JkU3RvcmU6IFJlY29yZFN0b3JlO1xuXG4gICAgLyoqIEludGVybmFsIFByb3BlcnRpZXMgKi9cbiAgICBwcm90ZWN0ZWQgY2FjaGUkOiBPYnNlcnZhYmxlPGFueT4gPSBudWxsO1xuICAgIHByb3RlY3RlZCBpbnRlcm5hbFN0YXRlOiBJbnN0YWxsVmlld1N0YXRlID0gZGVlcENsb25lKGluaXRpYWxTdGF0ZSk7XG4gICAgcHJvdGVjdGVkIHN0b3JlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxJbnN0YWxsVmlld1N0YXRlPih0aGlzLmludGVybmFsU3RhdGUpO1xuICAgIHByb3RlY3RlZCBzdGF0ZSQgPSB0aGlzLnN0b3JlLmFzT2JzZXJ2YWJsZSgpO1xuICAgIHByb3RlY3RlZCBzdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCByZWNvcmRGZXRjaEdRTDogUmVjb3JkRmV0Y2hHUUwsXG4gICAgICAgIHByb3RlY3RlZCByZWNvcmRTYXZlR1FMOiBSZWNvcmRTYXZlR1FMLFxuICAgICAgICBwcm90ZWN0ZWQgbWVzc2FnZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCByZWNvcmRNYW5hZ2VyOiBSZWNvcmRNYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgcmVjb3JkU3RvcmVGYWN0b3J5OiBSZWNvcmRTdG9yZUZhY3RvcnksXG4gICAgICAgIHByb3RlY3RlZCBsYW5ndWFnZTogTGFuZ3VhZ2VTdG9yZVxuICAgICkge1xuXG4gICAgICAgIHRoaXMucmVjb3JkU3RvcmUgPSByZWNvcmRTdG9yZUZhY3RvcnkuY3JlYXRlKHRoaXMuZ2V0Vmlld0ZpZWxkc09ic2VydmFibGUoKSk7XG5cbiAgICAgICAgdGhpcy5yZWNvcmQkID0gdGhpcy5yZWNvcmRTdG9yZS5zdGF0ZSQucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgICAgICAgdGhpcy5zdGFnaW5nUmVjb3JkJCA9IHRoaXMucmVjb3JkU3RvcmUuc3RhZ2luZyQucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nJCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLmxvYWRpbmcpKTtcbiAgICAgICAgdGhpcy5tb2RlJCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLm1vZGUpKTtcblxuICAgICAgICB0aGlzLnZtJCA9IHRoaXMucmVjb3JkJC5waXBlKFxuICAgICAgICAgICAgY29tYmluZUxhdGVzdFdpdGgodGhpcy5sb2FkaW5nJCksXG4gICAgICAgICAgICBtYXAoKFtyZWNvcmQsIGxvYWRpbmddOiBbUmVjb3JkLCBib29sZWFuXSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudm0gPSB7cmVjb3JkLCBsb2FkaW5nfSBhcyBJbnN0YWxsVmlld01vZGVsO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZtO1xuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgIHRoaXMudmlld0NvbnRleHQkID0gdGhpcy5yZWNvcmQkLnBpcGUobWFwKCgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFZpZXdDb250ZXh0KCk7XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBnZXQgcGFyYW1zKCk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFN0YXRlLnBhcmFtcyB8fCB7fTtcbiAgICB9XG5cbiAgICBzZXQgcGFyYW1zKHBhcmFtczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICAgIC4uLnRoaXMuaW50ZXJuYWxTdGF0ZSxcbiAgICAgICAgICAgIHBhcmFtc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRWaWV3Q29udGV4dCgpOiBWaWV3Q29udGV4dCB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZWNvcmQ6IHRoaXMuZ2V0QmFzZVJlY29yZCgpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0QWN0aW9ucygpOiBPYnNlcnZhYmxlPEFjdGlvbltdPiB7XG4gICAgICAgIHJldHVybiBvZihbXSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbCBpbnN0YWxsIHZpZXdcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2RlIHRvIHVzZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbXMgdG8gc2V0XG4gICAgICovXG4gICAgcHVibGljIGluaXQobW9kZSA9ICdlZGl0JyBhcyBWaWV3TW9kZSwgcGFyYW1zOiBQYXJhbXMgPSB7fSk6IHZvaWQge1xuICAgICAgICB0aGlzLnNldE1vZGUobW9kZSk7XG4gICAgICAgIHRoaXMucmVjb3JkU3RvcmUuaW5pdCh7XG4gICAgICAgICAgICBpZDogJycsXG4gICAgICAgICAgICBtb2R1bGU6ICdpbnN0YWxsJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHt9XG4gICAgICAgIH0gYXMgUmVjb3JkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBvYnNlcnZhYmxlIGNhY2hlXG4gICAgICovXG4gICAgcHVibGljIGNsZWFyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNhY2hlJCA9IG51bGw7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoZGVlcENsb25lKGluaXRpYWxTdGF0ZSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFyXG4gICAgICovXG4gICAgY2xlYXJBdXRoQmFzZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgc3RhZ2luZyByZWNvcmRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IFZpZXdNb2RlXG4gICAgICovXG4gICAgZ2V0QmFzZVJlY29yZCgpOiBSZWNvcmQge1xuICAgICAgICBpZiAoIXRoaXMuaW50ZXJuYWxTdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVjb3JkU3RvcmUuZ2V0QmFzZVJlY29yZCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBjdXJyZW50IHZpZXcgbW9kZVxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ30gVmlld01vZGVcbiAgICAgKi9cbiAgICBnZXRNb2RlKCk6IFZpZXdNb2RlIHtcbiAgICAgICAgaWYgKCF0aGlzLmludGVybmFsU3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsU3RhdGUubW9kZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgbmV3IG1vZGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2RlIFZpZXdNb2RlXG4gICAgICovXG4gICAgc2V0TW9kZShtb2RlOiBWaWV3TW9kZSk6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHsuLi50aGlzLmludGVybmFsU3RhdGUsIG1vZGV9KTtcbiAgICB9XG5cbiAgICBnZXRMaWNlbnNlVGV4dCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5sYW5ndWFnZS5nZXRGaWVsZExhYmVsKCdTVUlURThfTElDRU5TRV9DT05URU5UJyk7XG4gICAgfVxuXG4gICAgZ2V0TWV0YWRhdGEoKTogSW5zdGFsbFZpZXdNZXRhZGF0YSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhY3Rpb25zOiBbXSxcbiAgICAgICAgICAgIHRlbXBsYXRlTWV0YToge1xuICAgICAgICAgICAgICAgIG1heENvbHVtbnM6IDIsXG4gICAgICAgICAgICAgICAgdXNlVGFiczogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0YWJEZWZzOiB7XG4gICAgICAgICAgICAgICAgICAgIExCTF9DT05GSUc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1RhYjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhbmVsRGVmYXVsdDogJ2V4cGFuZGVkJ1xuICAgICAgICAgICAgICAgICAgICB9IGFzIFRhYkRlZmluaXRpb25cbiAgICAgICAgICAgICAgICB9IGFzIFRhYkRlZmluaXRpb25zXG4gICAgICAgICAgICB9IGFzIFJlY29yZFRlbXBsYXRlTWV0YWRhdGEsXG4gICAgICAgICAgICBwYW5lbHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogJ0xCTF9DT05GSUcnLFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5JDogb2YodHJ1ZSkucGlwZShzaGFyZVJlcGxheSgxKSksXG4gICAgICAgICAgICAgICAgICAgIHJvd3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzaXRlX2hvc3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdMQkxfU0lURUNGR19VUkwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3ZhcmNoYXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGREZWZpbml0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic2l0ZV9ob3N0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2bmFtZVwiOiBcIkxCTF9TSVRFQ0ZHX1VSTFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInZhcmNoYXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGFzIEZpZWxkRGVmaW5pdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBhcyBQYW5lbENlbGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZW1vRGF0YScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0xCTF9EQkNPTkZfREVNT19EQVRBJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlbnVtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkRGVmaW5pdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZGVtb0RhdGFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bmFtZTogXCJMQkxfREJDT05GX0RFTU9fREFUQVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZW51bVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IFwiX19ub19vcHRpb25zX19cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRyYU9wdGlvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJ5ZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbEtleTogXCJMQkxfWUVTXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGFzIE9wdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJub1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsS2V5OiBcIkxCTF9OT1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBhcyBPcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0gYXMgT3B0aW9uW11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGFzIEZpZWxkTWV0YWRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gYXMgRmllbGREZWZpbml0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGFzIFBhbmVsQ2VsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RiX2NvbmZpZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0xCTF9EQkNPTkZfVElUTEUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2dyb3VwZWQtZmllbGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGREZWZpbml0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJkYl9jb25maWdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bmFtZTogXCJMQkxfREJDT05GX1RJVExFXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJncm91cGVkLWZpZWxkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0OiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGJfdXNlcm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYl9wYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRiX2hvc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYl9uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGJfcG9ydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcInZlcnRpY2FsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBGaWVsZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYl91c2VybmFtZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJkYl91c2VybmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidmFyY2hhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2bmFtZVwiOiBcIkxCTF9EQkNPTkZfU1VJVEVfREJfVVNFUlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbEtleVwiOiBcIkxCTF9EQkNPTkZfU1VJVEVfREJfVVNFUlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkxCTF9EQkNPTkZfU1VJVEVfREJfVVNFUlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93TGFiZWxcIjogW1wiKlwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYl9wYXNzd29yZFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJkYl9wYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidm5hbWVcIjogXCJMQkxfREJDT05GX0RCX1BBU1NXT1JEXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsS2V5XCI6IFwiTEJMX0RCQ09ORl9EQl9QQVNTV09SRFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93TGFiZWxcIjogW1wiKlwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYl9ob3N0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImRiX2hvc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInZhcmNoYXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidm5hbWVcIjogXCJMQkxfREJDT05GX0hPU1RfTkFNRVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbEtleVwiOiBcIkxCTF9EQkNPTkZfSE9TVF9OQU1FXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3dMYWJlbFwiOiBbXCIqXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXF1aXJlZFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRiX25hbWVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiZGJfbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidmFyY2hhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2bmFtZVwiOiBcIkxCTF9EQkNPTkZfREJfTkFNRVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbEtleVwiOiBcIkxCTF9EQkNPTkZfREJfTkFNRVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93TGFiZWxcIjogW1wiKlwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVxdWlyZWRcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYl9wb3J0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImRiX3BvcnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInZhcmNoYXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidm5hbWVcIjogXCJMQkxfREJDT05GX0RCX1BPUlRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxLZXlcIjogXCJMQkxfREJDT05GX0RCX1BPUlRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd0xhYmVsXCI6IFtcIipcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlcXVpcmVkXCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dMYWJlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0OiBbJyonXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gYXMgRmllbGREZWZpbml0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGFzIFBhbmVsQ2VsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkbWluX2NvbmZpZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0xCTF9TSVRFQ0ZHX1RJVExFJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdncm91cGVkLWZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkRGVmaW5pdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYWRtaW5fY29uZmlnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdm5hbWU6IFwiTEJMX1NJVEVDRkdfVElUTEVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImdyb3VwZWQtZmllbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXRlX3VzZXJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2l0ZV9wYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwRmllbGRzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2l0ZV91c2VybmFtZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzaXRlX3VzZXJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ2YXJjaGFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZuYW1lXCI6IFwiTEJMX1NJVEVDRkdfQURNSU5fTmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbEtleVwiOiBcIkxCTF9TSVRFQ0ZHX0FETUlOX05hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd0xhYmVsXCI6IFtcImVkaXRcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlcXVpcmVkXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2l0ZV9wYXNzd29yZFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzaXRlX3Bhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2bmFtZVwiOiBcIkxCTF9TSVRFQ0ZHX0FETUlOX1BBU1NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxLZXlcIjogXCJMQkxfU0lURUNGR19BRE1JTl9QQVNTXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3dMYWJlbFwiOiBbXCJlZGl0XCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXF1aXJlZFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0xhYmVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXQ6IFsnKiddXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBhcyBGaWVsZERlZmluaXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gYXMgUGFuZWxDZWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSBhcyBQYW5lbENlbGxbXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBhcyBQYW5lbFJvd1xuICAgICAgICAgICAgICAgICAgICBdIGFzIFBhbmVsUm93W11cbiAgICAgICAgICAgICAgICB9IGFzIFBhbmVsXG4gICAgICAgICAgICBdIGFzIFBhbmVsW10sXG4gICAgICAgIH0gYXMgSW5zdGFsbFZpZXdNZXRhZGF0YTtcbiAgICB9XG5cbiAgICBnZXRNZXRhZGF0YSQoKTogT2JzZXJ2YWJsZTxJbnN0YWxsVmlld01ldGFkYXRhPiB7XG4gICAgICAgIHJldHVybiBvZih0aGlzLmdldE1ldGFkYXRhKCkpO1xuICAgIH1cblxuICAgIGdldE1vZHVsZU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdpbnN0YWxsJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZSBxdWVyeSBwYXJhbXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbXMgdG8gc2V0XG4gICAgICovXG4gICAgcHJvdGVjdGVkIHBhcnNlUGFyYW1zKHBhcmFtczogUGFyYW1zID0ge30pOiB2b2lkIHtcbiAgICAgICAgaWYgKCFwYXJhbXMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYXJhbXMgPSB7Li4udGhpcy5pbnRlcm5hbFN0YXRlLnBhcmFtc307XG4gICAgICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChwYXJhbUtleSA9PiB7XG4gICAgICAgICAgICBpZiAoIWlzVm9pZChjdXJyZW50UGFyYW1zW3BhcmFtS2V5XSkpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UGFyYW1zW3BhcmFtS2V5XSA9IHBhcmFtc1twYXJhbUtleV07XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHN0YXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gc3RhdGUgdG8gc2V0XG4gICAgICovXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVN0YXRlKHN0YXRlOiBJbnN0YWxsVmlld1N0YXRlKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RvcmUubmV4dCh0aGlzLmludGVybmFsU3RhdGUgPSBzdGF0ZSk7XG4gICAgfVxuXG4gICAgZ2V0SWdub3JlU3lzdGVtQ2hlY2tzRmllbGQoKTogRmllbGQge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWNvcmRTdG9yZS5nZXRTdGFnaW5nKCkuZmllbGRzWydzeXNfY2hlY2tfb3B0aW9uJ107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHZpZXcgZmllbGRzIG9ic2VydmFibGVcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE9ic2VydmFibGU8Vmlld0ZpZWxkRGVmaW5pdGlvbltdPlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRWaWV3RmllbGRzT2JzZXJ2YWJsZSgpOiBPYnNlcnZhYmxlPFZpZXdGaWVsZERlZmluaXRpb25bXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRNZXRhZGF0YSQoKS5waXBlKG1hcCgobWV0YTogSW5zdGFsbFZpZXdNZXRhZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmllbGRzOiBWaWV3RmllbGREZWZpbml0aW9uW10gPSBbXTtcbiAgICAgICAgICAgIG1ldGEucGFuZWxzLmZvckVhY2gocGFuZWwgPT4ge1xuICAgICAgICAgICAgICAgIHBhbmVsLnJvd3MuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgICAgICAgICAgICAgICByb3cuY29scy5mb3JFYWNoKGNvbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHMucHVzaChjb2wpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBmaWVsZHMucHVzaChcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInN5c19jaGVja19vcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgICAgICAgICBmaWVsZERlZmluaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInN5c19jaGVja19vcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidm5hbWVcIjogXCJMQkxfU1lTX0NIRUNLX1dBUk5JTkdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxLZXlcIjogXCJMQkxfU1lTX0NIRUNLX1dBUk5JTkdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvd0xhYmVsXCI6IFtcImVkaXRcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlcXVpcmVkXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAnZmFsc2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6ICdmYWxzZSdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gYXMgVmlld0ZpZWxkRGVmaW5pdGlvblxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZpZWxkcztcbiAgICAgICAgfSkpO1xuICAgIH1cbn1cbiJdfQ==