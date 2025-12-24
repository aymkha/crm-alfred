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
import { Component, Input } from '@angular/core';
import { animate, transition, trigger } from '@angular/animations';
import { of } from 'rxjs';
import { distinctUntilChanged, skip } from 'rxjs/operators';
import { ModalRecordFilterAdapter } from '../../adapters/filter.adapter';
import { ModalRecordListTableAdapter } from '../../adapters/table.adapter';
import { MaxColumnsCalculator } from '../../../../services/ui/max-columns-calculator/max-columns-calculator.service';
import * as i0 from "@angular/core";
import * as i1 from "@ng-bootstrap/ng-bootstrap";
import * as i2 from "../../store/record-list-modal/record-list-modal.store.factory";
import * as i3 from "../../../../store/language/language.store";
import * as i4 from "../../../../services/ui/max-columns-calculator/max-columns-calculator.service";
import * as i5 from "../../../../store/user-preference/user-preference.store";
import * as i6 from "../../../../store/system-config/system-config.store";
function RecordListModalComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-label", 3);
    i0.ɵɵelementContainerEnd();
} }
function RecordListModalComponent_ng_container_3_scrm_list_filter_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-list-filter", 9);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("config", ctx_r2.filterConfig);
} }
function RecordListModalComponent_ng_container_3_ng_container_9_scrm_loading_spinner_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-loading-spinner", 11);
} if (rf & 2) {
    i0.ɵɵproperty("overlay", true);
} }
function RecordListModalComponent_ng_container_3_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RecordListModalComponent_ng_container_3_ng_container_9_scrm_loading_spinner_1_Template, 1, 1, "scrm-loading-spinner", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const loading_r5 = ctx.ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", loading_r5);
} }
function RecordListModalComponent_ng_container_3_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-button", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("config", ctx_r4.buildSelectButton());
} }
function RecordListModalComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "div", 4)(3, "div", 5)(4, "div", 6);
    i0.ɵɵtemplate(5, RecordListModalComponent_ng_container_3_scrm_list_filter_5_Template, 1, 1, "scrm-list-filter", 7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 8)(7, "div", 6);
    i0.ɵɵelement(8, "scrm-table", 9);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(9, RecordListModalComponent_ng_container_3_ng_container_9_Template, 2, 1, "ng-container", 2);
    i0.ɵɵpipe(10, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, RecordListModalComponent_ng_container_3_ng_container_11_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r1.filterConfig);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("config", ctx_r1.tableConfig);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(10, 4, ctx_r1.loading$));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.multiSelect);
} }
class RecordListModalComponent {
    activeModal;
    storeFactory;
    languages;
    maxColumnCalculator;
    preferences;
    systemConfigs;
    titleKey = '';
    module;
    parentModule;
    multiSelect = false;
    multiSelectButtonLabel = 'LBL_SAVE';
    adapter = null;
    filterAdapter = null;
    loading$;
    closeButton;
    tableConfig;
    filterConfig;
    store;
    maxHeight;
    subs = [];
    constructor(activeModal, storeFactory, languages, maxColumnCalculator, preferences, systemConfigs) {
        this.activeModal = activeModal;
        this.storeFactory = storeFactory;
        this.languages = languages;
        this.maxColumnCalculator = maxColumnCalculator;
        this.preferences = preferences;
        this.systemConfigs = systemConfigs;
        this.store = this.storeFactory.create();
    }
    ngOnInit() {
        this.closeButton = {
            klass: ['btn', 'btn-outline-light', 'btn-sm'],
            onClick: () => {
                this.activeModal.close({
                    type: 'close-button'
                });
            }
        };
        this.init();
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    init() {
        if (!this.module) {
            return;
        }
        this.initStore();
        this.initTableAdapter();
        this.initFilterAdapters();
    }
    getMaxColumns() {
        return this.maxColumnCalculator.getMaxColumns(of(true));
    }
    linkSelectedRecords() {
        this.activeModal.close({
            selection: this.store.recordList.selection,
            records: this.store.recordList.records
        });
    }
    buildSelectButton() {
        return {
            klass: ['btn', 'btn-primary', 'btn-sm'],
            onClick: () => {
                this.linkSelectedRecords();
            },
            labelKey: this.multiSelectButtonLabel
        };
    }
    initTableAdapter() {
        if (this.adapter === null) {
            this.adapter = new ModalRecordListTableAdapter(this.systemConfigs, this.preferences);
        }
        this.tableConfig = this.adapter.getTable(this.store, this.multiSelect);
        if (this.store?.listMetadata?.maxHeight) {
            this.tableConfig.maxListHeight = this.store.listMetadata.maxHeight;
        }
        if (!this.tableConfig?.maxListHeight) {
            const ui = this.systemConfigs.getConfigValue('ui') ?? {};
            const configModalHeight = this.systemConfigs.getConfigValue('record_modal_max_height') ?? '';
            this.tableConfig.maxListHeight = ui.record_modal_max_height ?? configModalHeight;
        }
        this.tableConfig.maxColumns$ = this.getMaxColumns();
    }
    initFilterAdapters() {
        if (this.filterAdapter === null) {
            this.filterAdapter = new ModalRecordFilterAdapter();
        }
        this.filterConfig = this.filterAdapter.getConfig(this.store);
    }
    initStore() {
        this.store.init(this.module, this.parentModule ?? '');
        this.loading$ = this.store.metadataLoading$;
        this.subs.push(this.store.linkClicked$.pipe(distinctUntilChanged(), skip(1)).subscribe(clicked => {
            if (!clicked) {
                return;
            }
            this.linkSelectedRecords();
        }));
    }
    static ɵfac = function RecordListModalComponent_Factory(t) { return new (t || RecordListModalComponent)(i0.ɵɵdirectiveInject(i1.NgbActiveModal), i0.ɵɵdirectiveInject(i2.RecordListModalStoreFactory), i0.ɵɵdirectiveInject(i3.LanguageStore), i0.ɵɵdirectiveInject(i4.MaxColumnsCalculator), i0.ɵɵdirectiveInject(i5.UserPreferenceStore), i0.ɵɵdirectiveInject(i6.SystemConfigStore)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RecordListModalComponent, selectors: [["scrm-record-list-modal"]], inputs: { titleKey: "titleKey", module: "module", parentModule: "parentModule", multiSelect: "multiSelect", multiSelectButtonLabel: "multiSelectButtonLabel", adapter: "adapter", filterAdapter: "filterAdapter" }, features: [i0.ɵɵProvidersFeature([MaxColumnsCalculator])], decls: 4, vars: 5, consts: [["bodyKlass", "m-0 small-font", "footerKlass", "border-0", "headerKlass", "border-0", "klass", "record-list-modal", 3, "closable", "close", "title"], ["modal-body", ""], [4, "ngIf"], ["labelKey", "LBL_CONFIG_NO_CONFIG"], [1, "container-fluid"], [1, "row", "pb-3"], [1, "col"], [3, "config", 4, "ngIf"], [1, "row"], [3, "config"], [3, "overlay", 4, "ngIf"], [3, "overlay"]], template: function RecordListModalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "scrm-modal", 0)(1, "div", 1);
            i0.ɵɵtemplate(2, RecordListModalComponent_ng_container_2_Template, 2, 0, "ng-container", 2);
            i0.ɵɵtemplate(3, RecordListModalComponent_ng_container_3_Template, 12, 6, "ng-container", 2);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("closable", true)("close", ctx.closeButton)("title", ctx.titleKey);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.tableConfig);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.tableConfig);
        } }, encapsulation: 2, data: { animation: [
                trigger('modalFade', [
                    transition('void <=> *', [
                        animate('800ms')
                    ]),
                ]),
            ] } });
}
export { RecordListModalComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordListModalComponent, [{
        type: Component,
        args: [{ selector: 'scrm-record-list-modal', providers: [MaxColumnsCalculator], animations: [
                    trigger('modalFade', [
                        transition('void <=> *', [
                            animate('800ms')
                        ]),
                    ]),
                ], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<scrm-modal [closable]=\"true\"\n            [close]=\"closeButton\"\n            [title]=\"titleKey\"\n            bodyKlass=\"m-0 small-font\"\n            footerKlass=\"border-0\"\n            headerKlass=\"border-0\"\n            klass=\"record-list-modal\">\n\n    <div modal-body>\n\n        <ng-container *ngIf=\"!tableConfig\">\n            <scrm-label labelKey=\"LBL_CONFIG_NO_CONFIG\"></scrm-label>\n        </ng-container>\n\n        <ng-container *ngIf=\"tableConfig\">\n            <div>\n                <div class=\"container-fluid\">\n                    <div class=\"row pb-3\">\n                        <div class=\"col\">\n                            <scrm-list-filter *ngIf=\"filterConfig\" [config]=\"filterConfig\"></scrm-list-filter>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col\">\n                            <scrm-table [config]=\"tableConfig\">\n                            </scrm-table>\n                        </div>\n                    </div>\n                </div>\n\n                <ng-container *ngIf=\"(loading$ | async) as loading\">\n                    <scrm-loading-spinner *ngIf=\"loading\" [overlay]=\"true\"></scrm-loading-spinner>\n                </ng-container>\n            </div>\n            <ng-container *ngIf=\"multiSelect\">\n                    <scrm-button [config]=\"buildSelectButton()\"></scrm-button>\n            </ng-container>\n        </ng-container>\n    </div>\n</scrm-modal>\n" }]
    }], function () { return [{ type: i1.NgbActiveModal }, { type: i2.RecordListModalStoreFactory }, { type: i3.LanguageStore }, { type: i4.MaxColumnsCalculator }, { type: i5.UserPreferenceStore }, { type: i6.SystemConfigStore }]; }, { titleKey: [{
            type: Input
        }], module: [{
            type: Input
        }], parentModule: [{
            type: Input
        }], multiSelect: [{
            type: Input
        }], multiSelectButtonLabel: [{
            type: Input
        }], adapter: [{
            type: Input
        }], filterAdapter: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLWxpc3QtbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbnRhaW5lcnMvcmVjb3JkLWxpc3QtbW9kYWwvY29tcG9uZW50cy9yZWNvcmQtbGlzdC1tb2RhbC9yZWNvcmQtbGlzdC1tb2RhbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9yZWNvcmQtbGlzdC1tb2RhbC9jb21wb25lbnRzL3JlY29yZC1saXN0LW1vZGFsL3JlY29yZC1saXN0LW1vZGFsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFFbEUsT0FBTyxFQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFFakUsT0FBTyxFQUFhLEVBQUUsRUFBZSxNQUFNLE1BQU0sQ0FBQztBQUNsRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUUsSUFBSSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUQsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDdkUsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFLekUsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sK0VBQStFLENBQUM7Ozs7Ozs7OztJQ0QzRyw2QkFBbUM7SUFDL0IsZ0NBQXlEO0lBQzdELDBCQUFlOzs7SUFPSyxzQ0FBa0Y7OztJQUEzQyw0Q0FBdUI7OztJQVl0RSwyQ0FBOEU7O0lBQXhDLDhCQUFnQjs7O0lBRDFELDZCQUFvRDtJQUNoRCwwSUFBOEU7SUFDbEYsMEJB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QUU7d0JBQ3JCLE9BQU8sQ0FBQyxPQUFPLENBQUM7cUJBQ25CLENBQUM7aUJBQ0wsQ0FBQzthQUNMOztTQUVRLHdCQUF3Qjt1RkFBeEIsd0JBQXdCO2NBYnBDLFNBQVM7MkJBQ0ksd0JBQXdCLGFBR3ZCLENBQUMsb0JBQW9CLENBQUMsY0FDckI7b0JBQ1IsT0FBTyxDQUFDLFdBQVcsRUFBRTt3QkFDakIsVUFBVSxDQUFDLFlBQVksRUFBRTs0QkFDckIsT0FBTyxDQUFDLE9BQU8sQ0FBQzt5QkFDbkIsQ0FBQztxQkFDTCxDQUFDO2lCQUNMOzRPQUlRLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLHNCQUFzQjtrQkFBOUIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOZ2JBY3RpdmVNb2RhbH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHthbmltYXRlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7QnV0dG9uSW50ZXJmYWNlLCBNb2RhbENsb3NlRmVlZEJhY2t9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge09ic2VydmFibGUsIG9mLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtkaXN0aW5jdFVudGlsQ2hhbmdlZCwgc2tpcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtNb2RhbFJlY29yZEZpbHRlckFkYXB0ZXJ9IGZyb20gJy4uLy4uL2FkYXB0ZXJzL2ZpbHRlci5hZGFwdGVyJztcbmltcG9ydCB7TW9kYWxSZWNvcmRMaXN0VGFibGVBZGFwdGVyfSBmcm9tICcuLi8uLi9hZGFwdGVycy90YWJsZS5hZGFwdGVyJztcbmltcG9ydCB7UmVjb3JkTGlzdE1vZGFsVGFibGVBZGFwdGVySW50ZXJmYWNlfSBmcm9tICcuLi8uLi9hZGFwdGVycy9hZGFwdGVyLm1vZGVsJztcbmltcG9ydCB7UmVjb3JkTGlzdE1vZGFsU3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL3JlY29yZC1saXN0LW1vZGFsL3JlY29yZC1saXN0LW1vZGFsLnN0b3JlJztcbmltcG9ydCB7UmVjb3JkTGlzdE1vZGFsU3RvcmVGYWN0b3J5fSBmcm9tICcuLi8uLi9zdG9yZS9yZWNvcmQtbGlzdC1tb2RhbC9yZWNvcmQtbGlzdC1tb2RhbC5zdG9yZS5mYWN0b3J5JztcbmltcG9ydCB7VGFibGVDb25maWd9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvdGFibGUvdGFibGUubW9kZWwnO1xuaW1wb3J0IHtNYXhDb2x1bW5zQ2FsY3VsYXRvcn0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvdWkvbWF4LWNvbHVtbnMtY2FsY3VsYXRvci9tYXgtY29sdW1ucy1jYWxjdWxhdG9yLnNlcnZpY2UnO1xuaW1wb3J0IHtGaWx0ZXJDb25maWd9IGZyb20gJy4uLy4uLy4uL2xpc3QtZmlsdGVyL2NvbXBvbmVudHMvbGlzdC1maWx0ZXIvbGlzdC1maWx0ZXIubW9kZWwnO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge1JlY29yZExpc3RNb2RhbFJlc3VsdH0gZnJvbSAnLi9yZWNvcmQtbGlzdC1tb2RhbC5tb2RlbCc7XG5pbXBvcnQge1VzZXJQcmVmZXJlbmNlU3RvcmV9IGZyb20gXCIuLi8uLi8uLi8uLi9zdG9yZS91c2VyLXByZWZlcmVuY2UvdXNlci1wcmVmZXJlbmNlLnN0b3JlXCI7XG5pbXBvcnQge1N5c3RlbUNvbmZpZ1N0b3JlfSBmcm9tIFwiLi4vLi4vLi4vLi4vc3RvcmUvc3lzdGVtLWNvbmZpZy9zeXN0ZW0tY29uZmlnLnN0b3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1yZWNvcmQtbGlzdC1tb2RhbCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3JlY29yZC1saXN0LW1vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtdLFxuICAgIHByb3ZpZGVyczogW01heENvbHVtbnNDYWxjdWxhdG9yXSxcbiAgICBhbmltYXRpb25zOiBbXG4gICAgICAgIHRyaWdnZXIoJ21vZGFsRmFkZScsIFtcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPD0+IConLCBbXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnODAwbXMnKVxuICAgICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgUmVjb3JkTGlzdE1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KCkgdGl0bGVLZXkgPSAnJztcbiAgICBASW5wdXQoKSBtb2R1bGU6IHN0cmluZztcbiAgICBASW5wdXQoKSBwYXJlbnRNb2R1bGU6IHN0cmluZztcbiAgICBASW5wdXQoKSBtdWx0aVNlbGVjdDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIG11bHRpU2VsZWN0QnV0dG9uTGFiZWwgPSAnTEJMX1NBVkUnO1xuICAgIEBJbnB1dCgpIGFkYXB0ZXI6IFJlY29yZExpc3RNb2RhbFRhYmxlQWRhcHRlckludGVyZmFjZSA9IG51bGw7XG4gICAgQElucHV0KCkgZmlsdGVyQWRhcHRlcjogTW9kYWxSZWNvcmRGaWx0ZXJBZGFwdGVyID0gbnVsbDtcblxuICAgIGxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gICAgY2xvc2VCdXR0b246IEJ1dHRvbkludGVyZmFjZTtcbiAgICB0YWJsZUNvbmZpZzogVGFibGVDb25maWc7XG4gICAgZmlsdGVyQ29uZmlnOiBGaWx0ZXJDb25maWc7XG4gICAgc3RvcmU6IFJlY29yZExpc3RNb2RhbFN0b3JlO1xuICAgIG1heEhlaWdodDpudW1iZXI7XG5cbiAgICBwcm90ZWN0ZWQgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgYWN0aXZlTW9kYWw6IE5nYkFjdGl2ZU1vZGFsLFxuICAgICAgICBwcm90ZWN0ZWQgc3RvcmVGYWN0b3J5OiBSZWNvcmRMaXN0TW9kYWxTdG9yZUZhY3RvcnksXG4gICAgICAgIHByb3RlY3RlZCBsYW5ndWFnZXM6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBtYXhDb2x1bW5DYWxjdWxhdG9yOiBNYXhDb2x1bW5zQ2FsY3VsYXRvcixcbiAgICAgICAgcHJvdGVjdGVkIHByZWZlcmVuY2VzOiBVc2VyUHJlZmVyZW5jZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgc3lzdGVtQ29uZmlnczogU3lzdGVtQ29uZmlnU3RvcmVcbiAgICApIHtcbiAgICAgICAgdGhpcy5zdG9yZSA9IHRoaXMuc3RvcmVGYWN0b3J5LmNyZWF0ZSgpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMuY2xvc2VCdXR0b24gPSB7XG4gICAgICAgICAgICBrbGFzczogWydidG4nLCAnYnRuLW91dGxpbmUtbGlnaHQnLCAnYnRuLXNtJ10sXG4gICAgICAgICAgICBvbkNsaWNrOiAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVNb2RhbC5jbG9zZSh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdjbG9zZS1idXR0b24nXG4gICAgICAgICAgICAgICAgfSBhcyBNb2RhbENsb3NlRmVlZEJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGFzIEJ1dHRvbkludGVyZmFjZTtcblxuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgICB9XG5cbiAgICBpbml0KCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMubW9kdWxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbml0U3RvcmUoKTtcbiAgICAgICAgdGhpcy5pbml0VGFibGVBZGFwdGVyKCk7XG4gICAgICAgIHRoaXMuaW5pdEZpbHRlckFkYXB0ZXJzKCk7XG4gICAgfVxuXG4gICAgZ2V0TWF4Q29sdW1ucygpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXhDb2x1bW5DYWxjdWxhdG9yLmdldE1heENvbHVtbnMob2YodHJ1ZSkpO1xuICAgIH1cblxuICAgIGxpbmtTZWxlY3RlZFJlY29yZHMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWN0aXZlTW9kYWwuY2xvc2Uoe1xuICAgICAgICAgICAgc2VsZWN0aW9uOiB0aGlzLnN0b3JlLnJlY29yZExpc3Quc2VsZWN0aW9uLFxuICAgICAgICAgICAgcmVjb3JkczogdGhpcy5zdG9yZS5yZWNvcmRMaXN0LnJlY29yZHNcbiAgICAgICAgfSBhcyBSZWNvcmRMaXN0TW9kYWxSZXN1bHQpO1xuICAgIH1cblxuICAgIGJ1aWxkU2VsZWN0QnV0dG9uKCk6IEJ1dHRvbkludGVyZmFjZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBrbGFzczogWydidG4nLCAnYnRuLXByaW1hcnknLCAnYnRuLXNtJ10sXG4gICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5saW5rU2VsZWN0ZWRSZWNvcmRzKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGFiZWxLZXk6IHRoaXMubXVsdGlTZWxlY3RCdXR0b25MYWJlbFxuICAgICAgICB9IGFzIEJ1dHRvbkludGVyZmFjZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdFRhYmxlQWRhcHRlcigpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyID0gbmV3IE1vZGFsUmVjb3JkTGlzdFRhYmxlQWRhcHRlcih0aGlzLnN5c3RlbUNvbmZpZ3MsIHRoaXMucHJlZmVyZW5jZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50YWJsZUNvbmZpZyA9IHRoaXMuYWRhcHRlci5nZXRUYWJsZSh0aGlzLnN0b3JlLCB0aGlzLm11bHRpU2VsZWN0KTtcblxuICAgICAgICBpZiAodGhpcy5zdG9yZT8ubGlzdE1ldGFkYXRhPy5tYXhIZWlnaHQpe1xuICAgICAgICAgICAgdGhpcy50YWJsZUNvbmZpZy5tYXhMaXN0SGVpZ2h0ID0gdGhpcy5zdG9yZS5saXN0TWV0YWRhdGEubWF4SGVpZ2h0O1xuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnRhYmxlQ29uZmlnPy5tYXhMaXN0SGVpZ2h0KSB7XG4gICAgICAgICAgICBjb25zdCB1aSA9IHRoaXMuc3lzdGVtQ29uZmlncy5nZXRDb25maWdWYWx1ZSgndWknKSA/PyB7fTtcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpZ01vZGFsSGVpZ2h0ID0gdGhpcy5zeXN0ZW1Db25maWdzLmdldENvbmZpZ1ZhbHVlKCdyZWNvcmRfbW9kYWxfbWF4X2hlaWdodCcpID8/ICcnO1xuICAgICAgICAgICAgdGhpcy50YWJsZUNvbmZpZy5tYXhMaXN0SGVpZ2h0ID0gdWkucmVjb3JkX21vZGFsX21heF9oZWlnaHQgPz8gY29uZmlnTW9kYWxIZWlnaHQ7XG5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRhYmxlQ29uZmlnLm1heENvbHVtbnMkID0gdGhpcy5nZXRNYXhDb2x1bW5zKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluaXRGaWx0ZXJBZGFwdGVycygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuZmlsdGVyQWRhcHRlciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJBZGFwdGVyID0gbmV3IE1vZGFsUmVjb3JkRmlsdGVyQWRhcHRlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5maWx0ZXJDb25maWcgPSB0aGlzLmZpbHRlckFkYXB0ZXIuZ2V0Q29uZmlnKHRoaXMuc3RvcmUpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0U3RvcmUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RvcmUuaW5pdCh0aGlzLm1vZHVsZSwgdGhpcy5wYXJlbnRNb2R1bGUgPz8gJycpO1xuICAgICAgICB0aGlzLmxvYWRpbmckID0gdGhpcy5zdG9yZS5tZXRhZGF0YUxvYWRpbmckO1xuXG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMuc3RvcmUubGlua0NsaWNrZWQkLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSwgc2tpcCgxKSkuc3Vic2NyaWJlKGNsaWNrZWQgPT4ge1xuICAgICAgICAgICAgaWYgKCFjbGlja2VkKXtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubGlua1NlbGVjdGVkUmVjb3JkcygpO1xuXG4gICAgICAgIH0pKTtcbiAgICB9XG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48c2NybS1tb2RhbCBbY2xvc2FibGVdPVwidHJ1ZVwiXG4gICAgICAgICAgICBbY2xvc2VdPVwiY2xvc2VCdXR0b25cIlxuICAgICAgICAgICAgW3RpdGxlXT1cInRpdGxlS2V5XCJcbiAgICAgICAgICAgIGJvZHlLbGFzcz1cIm0tMCBzbWFsbC1mb250XCJcbiAgICAgICAgICAgIGZvb3RlcktsYXNzPVwiYm9yZGVyLTBcIlxuICAgICAgICAgICAgaGVhZGVyS2xhc3M9XCJib3JkZXItMFwiXG4gICAgICAgICAgICBrbGFzcz1cInJlY29yZC1saXN0LW1vZGFsXCI+XG5cbiAgICA8ZGl2IG1vZGFsLWJvZHk+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiF0YWJsZUNvbmZpZ1wiPlxuICAgICAgICAgICAgPHNjcm0tbGFiZWwgbGFiZWxLZXk9XCJMQkxfQ09ORklHX05PX0NPTkZJR1wiPjwvc2NybS1sYWJlbD5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRhYmxlQ29uZmlnXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBwYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tbGlzdC1maWx0ZXIgKm5nSWY9XCJmaWx0ZXJDb25maWdcIiBbY29uZmlnXT1cImZpbHRlckNvbmZpZ1wiPjwvc2NybS1saXN0LWZpbHRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLXRhYmxlIFtjb25maWddPVwidGFibGVDb25maWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Njcm0tdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiKGxvYWRpbmckIHwgYXN5bmMpIGFzIGxvYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNjcm0tbG9hZGluZy1zcGlubmVyICpuZ0lmPVwibG9hZGluZ1wiIFtvdmVybGF5XT1cInRydWVcIj48L3Njcm0tbG9hZGluZy1zcGlubmVyPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibXVsdGlTZWxlY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNjcm0tYnV0dG9uIFtjb25maWddPVwiYnVpbGRTZWxlY3RCdXR0b24oKVwiPjwvc2NybS1idXR0b24+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG48L3Njcm0tbW9kYWw+XG4iXX0=