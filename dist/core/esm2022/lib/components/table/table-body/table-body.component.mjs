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
import { combineLatestWith, of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { SelectionStatus, SortDirection } from 'common';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/record/field/field.manager";
import * as i2 from "../../../services/ui/loading-buffer/loading-buffer.factory";
import * as i3 from "@angular/common";
import * as i4 from "@angular/cdk/table";
import * as i5 from "../../../fields/field.component";
import * as i6 from "../../sort-button/sort-button.component";
import * as i7 from "../../line-action-menu/line-action-menu.component";
import * as i8 from "../../loading-spinner/loading-spinner.component";
import * as i9 from "../../label/label.component";
import * as i10 from "../../popups/components/record-details-popup-button/record-details-popup-button.component";
function TableBodyComponent_ng_container_0_ng_container_3_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 13);
} }
function TableBodyComponent_ng_container_0_ng_container_3_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 14)(1, "label", 15)(2, "input", 16);
    i0.ɵɵlistener("change", function TableBodyComponent_ng_container_0_ng_container_3_td_2_Template_input_change_2_listener() { const restoredCtx = i0.ɵɵrestoreView(_r15); const record_r13 = restoredCtx.$implicit; const ctx_r14 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r14.toggleSelection(record_r13["id"])); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "span", 17);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const record_r13 = ctx.$implicit;
    const vm_r1 = i0.ɵɵnextContext(2).ngIf;
    const ctx_r12 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("checked", record_r13["id"] && vm_r1.selected[record_r13["id"]] || ctx_r12.allSelected(vm_r1.selectionStatus))("disabled", ctx_r12.allSelected(vm_r1.selectionStatus));
} }
function TableBodyComponent_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 12);
    i0.ɵɵtemplate(1, TableBodyComponent_ng_container_0_ng_container_3_th_1_Template, 1, 0, "th", 7);
    i0.ɵɵtemplate(2, TableBodyComponent_ng_container_0_ng_container_3_td_2_Template, 4, 2, "td", 8);
    i0.ɵɵelementContainerEnd();
} }
function TableBodyComponent_ng_container_0_ng_container_4_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 21);
} }
function TableBodyComponent_ng_container_0_ng_container_4_td_2_scrm_record_details_popup_button_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-record-details-popup-button", 24);
} if (rf & 2) {
    const record_r19 = i0.ɵɵnextContext().$implicit;
    const ctx_r20 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("record", record_r19)("columns", ctx_r20.popoverColumns);
} }
function TableBodyComponent_ng_container_0_ng_container_4_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 22);
    i0.ɵɵtemplate(1, TableBodyComponent_ng_container_0_ng_container_4_td_2_scrm_record_details_popup_button_1_Template, 1, 2, "scrm-record-details-popup-button", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r18 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r18.popoverColumns.length);
} }
function TableBodyComponent_ng_container_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 18);
    i0.ɵɵtemplate(1, TableBodyComponent_ng_container_0_ng_container_4_th_1_Template, 1, 0, "th", 19);
    i0.ɵɵtemplate(2, TableBodyComponent_ng_container_0_ng_container_4_td_2_Template, 2, 1, "td", 20);
    i0.ɵɵelementContainerEnd();
} }
function TableBodyComponent_ng_container_0_ng_container_5_th_1_scrm_sort_button_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-sort-button", 31);
} if (rf & 2) {
    const column_r22 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r25 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("state", ctx_r25.getFieldSort(column_r22));
} }
function TableBodyComponent_ng_container_0_ng_container_5_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 28);
    i0.ɵɵelement(1, "scrm-label", 29);
    i0.ɵɵtemplate(2, TableBodyComponent_ng_container_0_ng_container_5_th_1_scrm_sort_button_2_Template, 1, 1, "scrm-sort-button", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r22 = i0.ɵɵnextContext().$implicit;
    const ctx_r23 = i0.ɵɵnextContext(2);
    let tmp_0_0;
    i0.ɵɵclassMap((tmp_0_0 = "primary-table-header " + "column-" + (column_r22 == null ? null : column_r22.name)) !== null && tmp_0_0 !== undefined ? tmp_0_0 : "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("labelKey", column_r22.label)("module", ctx_r23.config.module || "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r23.config.sort$ && column_r22.sortable);
} }
function TableBodyComponent_ng_container_0_ng_container_5_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 14);
    i0.ɵɵelement(1, "scrm-field", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const record_r28 = ctx.$implicit;
    const column_r22 = i0.ɵɵnextContext().$implicit;
    const ctx_r24 = i0.ɵɵnextContext(2);
    let tmp_0_0;
    i0.ɵɵclassMap((tmp_0_0 = "column-" + (column_r22 == null ? null : column_r22.name)) !== null && tmp_0_0 !== undefined ? tmp_0_0 : "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("mode", "list")("type", column_r22.type)("field", ctx_r24.getField(column_r22, record_r28))("record", record_r28);
} }
function TableBodyComponent_ng_container_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 25);
    i0.ɵɵtemplate(1, TableBodyComponent_ng_container_0_ng_container_5_th_1_Template, 3, 5, "th", 26);
    i0.ɵɵtemplate(2, TableBodyComponent_ng_container_0_ng_container_5_td_2_Template, 2, 6, "td", 27);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r22 = ctx.$implicit;
    i0.ɵɵproperty("cdkColumnDef", column_r22.name);
} }
function TableBodyComponent_ng_container_0_th_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 13);
} }
function TableBodyComponent_ng_container_0_td_8_scrm_line_action_menu_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-line-action-menu", 34);
} if (rf & 2) {
    const record_r30 = i0.ɵɵnextContext().$implicit;
    const ctx_r31 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("config", ctx_r31.config.lineActions)("record", record_r30);
} }
function TableBodyComponent_ng_container_0_td_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 14);
    i0.ɵɵtemplate(1, TableBodyComponent_ng_container_0_td_8_scrm_line_action_menu_1_Template, 1, 2, "scrm-line-action-menu", 33);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const record_r30 = ctx.$implicit;
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", record_r30 && ctx_r6.config.lineActions);
} }
function TableBodyComponent_ng_container_0_tr_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 35);
} }
function TableBodyComponent_ng_container_0_tr_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 36);
} }
function TableBodyComponent_ng_container_0_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "p", 37);
    i0.ɵɵelement(2, "scrm-label", 38);
    i0.ɵɵelementEnd()();
} }
function TableBodyComponent_ng_container_0_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "scrm-loading-spinner", 39);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const vm_r1 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵclassProp("m-5", !vm_r1.records || vm_r1.records.length === 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("overlay", true);
} }
function TableBodyComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 1)(2, "table", 2);
    i0.ɵɵtemplate(3, TableBodyComponent_ng_container_0_ng_container_3_Template, 3, 0, "ng-container", 3);
    i0.ɵɵtemplate(4, TableBodyComponent_ng_container_0_ng_container_4_Template, 3, 0, "ng-container", 4);
    i0.ɵɵtemplate(5, TableBodyComponent_ng_container_0_ng_container_5_Template, 3, 1, "ng-container", 5);
    i0.ɵɵelementContainerStart(6, 6);
    i0.ɵɵtemplate(7, TableBodyComponent_ng_container_0_th_7_Template, 1, 0, "th", 7);
    i0.ɵɵtemplate(8, TableBodyComponent_ng_container_0_td_8_Template, 2, 1, "td", 8);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵtemplate(9, TableBodyComponent_ng_container_0_tr_9_Template, 1, 0, "tr", 9);
    i0.ɵɵtemplate(10, TableBodyComponent_ng_container_0_tr_10_Template, 1, 0, "tr", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, TableBodyComponent_ng_container_0_div_11_Template, 3, 0, "div", 0);
    i0.ɵɵtemplate(12, TableBodyComponent_ng_container_0_div_12_Template, 2, 3, "div", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const vm_r1 = ctx.ngIf;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("dataSource", ctx_r0.config.dataSource)("trackBy", ctx_r0.trackRecord);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", vm_r1.selection);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.popoverColumns && ctx_r0.popoverColumns.length);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", vm_r1.columns);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("cdkHeaderRowDef", vm_r1.displayedColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cdkRowDefColumns", vm_r1.displayedColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !vm_r1.loading && vm_r1.records.length === 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", vm_r1.loading);
} }
class TableBodyComponent {
    fieldManager;
    loadingBufferFactory;
    config;
    maxColumns = 4;
    popoverColumns;
    vm$;
    loadingBuffer;
    subs = [];
    constructor(fieldManager, loadingBufferFactory) {
        this.fieldManager = fieldManager;
        this.loadingBufferFactory = loadingBufferFactory;
        this.loadingBuffer = this.loadingBufferFactory.create('table_loading_display_delay');
    }
    ngOnInit() {
        const selection$ = this.config.selection$ || of(null).pipe(shareReplay(1));
        let loading$ = this.initLoading();
        this.vm$ = this.config.columns.pipe(combineLatestWith(selection$, this.config.maxColumns$, this.config.dataSource.connect(null), loading$), map(([columns, selection, maxColumns, records, loading]) => {
            const displayedColumns = [];
            this.maxColumns = maxColumns;
            const columnsDefs = this.buildDisplayColumns(columns);
            this.popoverColumns = this.buildHiddenColumns(columns, columnsDefs);
            if (selection) {
                displayedColumns.push('checkbox');
            }
            if (this.popoverColumns && this.popoverColumns.length) {
                displayedColumns.push('show-more');
            }
            displayedColumns.push(...columnsDefs);
            displayedColumns.push('line-actions');
            const selected = selection && selection.selected || {};
            const selectionStatus = selection && selection.status || SelectionStatus.NONE;
            return {
                columns,
                selection,
                selected,
                selectionStatus,
                displayedColumns,
                records: records || [],
                loading
            };
        }));
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    toggleSelection(id) {
        this.config.toggleRecordSelection(id);
    }
    allSelected(status) {
        return status === SelectionStatus.ALL;
    }
    buildDisplayColumns(metaFields) {
        let i = 0;
        let hasLinkField = false;
        const displayedColumns = [];
        const fields = metaFields.filter(function (field) {
            return !field.hasOwnProperty('default')
                || (field.hasOwnProperty('default') && field.default === true);
        });
        while (i < this.maxColumns && i < fields.length) {
            displayedColumns.push(fields[i].name);
            hasLinkField = hasLinkField || fields[i].link;
            i++;
        }
        if (!hasLinkField && (this.maxColumns < fields.length)) {
            for (i = this.maxColumns; i < fields.length; i++) {
                if (fields[i].link) {
                    displayedColumns.splice(-1, 1);
                    displayedColumns.push(fields[i].name);
                    break;
                }
            }
        }
        return displayedColumns;
    }
    buildHiddenColumns(metaFields, displayedColumns) {
        const fields = metaFields.filter(function (field) {
            return !field.hasOwnProperty('default')
                || (field.hasOwnProperty('default') && field.default === true);
        });
        let missingFields = [];
        for (let i = 0; i < fields.length; i++) {
            if (displayedColumns.indexOf(fields[i].name) === -1) {
                missingFields.push(fields[i].name);
            }
        }
        let hiddenColumns = fields.filter(obj => missingFields.includes(obj.name));
        return hiddenColumns;
    }
    getFieldSort(field) {
        return {
            getSortDirection: () => this.config.sort$.pipe(map((sort) => {
                let direction = SortDirection.NONE;
                if (sort.orderBy === field.name) {
                    direction = sort.sortOrder;
                }
                return direction;
            })),
            changeSortDirection: (direction) => {
                this.config.updateSorting(field.name, direction);
            }
        };
    }
    getField(column, record) {
        if (!column || !record) {
            return null;
        }
        return this.fieldManager.addField(record, column);
    }
    initLoading() {
        let loading$ = of(false).pipe(shareReplay(1));
        if (this.config.loading$) {
            this.subs.push(this.config.loading$.subscribe(loading => {
                this.loadingBuffer.updateLoading(loading);
            }));
            loading$ = this.loadingBuffer.loading$;
        }
        return loading$;
    }
    trackRecord(index, item) {
        return item?.id ?? '';
    }
    static ɵfac = function TableBodyComponent_Factory(t) { return new (t || TableBodyComponent)(i0.ɵɵdirectiveInject(i1.FieldManager), i0.ɵɵdirectiveInject(i2.LoadingBufferFactory)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableBodyComponent, selectors: [["scrm-table-body"]], inputs: { config: "config" }, decls: 2, vars: 3, consts: [[4, "ngIf"], [1, "position-relative", "d-flex", "flex-column"], ["cdk-table", "", "aria-describedby", "table-body", 1, "list-view-table", "striped-table", "table", 3, "dataSource", "trackBy"], ["cdkColumnDef", "checkbox", 4, "ngIf"], ["cdkColumnDef", "show-more", 4, "ngIf"], [3, "cdkColumnDef", 4, "ngFor", "ngForOf"], ["cdkColumnDef", "line-actions"], ["cdk-header-cell", "", "scope", "col", "class", "primary-table-header", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 4, "cdkCellDef"], ["cdk-header-row", "", 4, "cdkHeaderRowDef"], ["cdk-row", "", 4, "cdkRowDef", "cdkRowDefColumns"], [3, "m-5", 4, "ngIf"], ["cdkColumnDef", "checkbox"], ["cdk-header-cell", "", "scope", "col", 1, "primary-table-header"], ["cdk-cell", ""], [1, "checkbox-container"], ["type", "checkbox", "aria-hidden", "true", 3, "checked", "disabled", "change"], [1, "checkmark"], ["cdkColumnDef", "show-more"], ["cdk-header-cell", "", "scope", "col", "class", "primary-table-header show-more-column", 4, "cdkHeaderCellDef"], ["cdk-cell", "", "class", "show-more-column", 4, "cdkCellDef"], ["cdk-header-cell", "", "scope", "col", 1, "primary-table-header", "show-more-column"], ["cdk-cell", "", 1, "show-more-column"], [3, "record", "columns", 4, "ngIf"], [3, "record", "columns"], [3, "cdkColumnDef"], ["cdk-header-cell", "", "scope", "col", 3, "class", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 3, "class", 4, "cdkCellDef"], ["cdk-header-cell", "", "scope", "col"], [3, "labelKey", "module"], [3, "state", 4, "ngIf"], [3, "state"], [3, "mode", "type", "field", "record"], [3, "config", "record", 4, "ngIf"], [3, "config", "record"], ["cdk-header-row", ""], ["cdk-row", ""], [1, "lead", "text-center", "pt-3"], ["labelKey", "MSG_LIST_VIEW_NO_RESULTS_BASIC"], [3, "overlay"]], template: function TableBodyComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, TableBodyComponent_ng_container_0_Template, 13, 9, "ng-container", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.vm$));
        } }, dependencies: [i3.NgForOf, i3.NgIf, i4.CdkTable, i4.CdkRowDef, i4.CdkCellDef, i4.CdkHeaderCellDef, i4.CdkColumnDef, i4.CdkCell, i4.CdkRow, i4.CdkHeaderCell, i4.CdkHeaderRow, i4.CdkHeaderRowDef, i5.FieldComponent, i6.SortButtonComponent, i7.LineActionMenuComponent, i8.LoadingSpinnerComponent, i9.LabelComponent, i10.RecordDetailsPopupButtonComponent, i3.AsyncPipe], encapsulation: 2 });
}
export { TableBodyComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableBodyComponent, [{
        type: Component,
        args: [{ selector: 'scrm-table-body', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n\n<ng-container *ngIf=\"(vm$ | async) as vm\">\n    <div class=\"position-relative d-flex flex-column\">\n        <table cdk-table [dataSource]=\"config.dataSource\" [trackBy]=\"trackRecord\"\n               aria-describedby=\"table-body\"\n               class=\"list-view-table striped-table table\">\n\n            <ng-container cdkColumnDef=\"checkbox\" *ngIf=\"vm.selection\">\n\n                <th cdk-header-cell scope=\"col\" *cdkHeaderCellDef class=\"primary-table-header\"></th>\n\n                <td cdk-cell *cdkCellDef=\"let record\">\n                    <label class=\"checkbox-container\">\n                        <input type=\"checkbox\"\n                               [checked]=\"(record['id'] && vm.selected[record['id']]) || allSelected(vm.selectionStatus) \"\n                               (change)=\"toggleSelection(record['id'])\"\n                               [disabled]=\"allSelected(vm.selectionStatus)\"\n                               aria-hidden=\"true\">\n                        <span class=\"checkmark\"></span>\n                    </label>\n                </td>\n\n            </ng-container>\n\n            <ng-container cdkColumnDef=\"show-more\" *ngIf=\"popoverColumns && popoverColumns.length\">\n\n                <th cdk-header-cell scope=\"col\" *cdkHeaderCellDef class=\"primary-table-header show-more-column\"></th>\n\n                <td cdk-cell *cdkCellDef=\"let record\" class=\"show-more-column\">\n                    <scrm-record-details-popup-button [record]=\"record\" [columns]=\"popoverColumns\"\n                                                      *ngIf=\"popoverColumns.length\"></scrm-record-details-popup-button>\n                </td>\n\n            </ng-container>\n\n            <ng-container *ngFor=\"let column of vm.columns\" [cdkColumnDef]=\"column.name\">\n\n                <th cdk-header-cell\n                    *cdkHeaderCellDef\n                    scope=\"col\"\n                    [class]=\"'primary-table-header ' + 'column-' + column?.name ?? ''\">\n\n                    <scrm-label [labelKey]=\"column.label\" [module]=\"config.module || ''\"></scrm-label>\n                    <scrm-sort-button *ngIf=\"config.sort$ && column.sortable\"\n                                      [state]=\"getFieldSort(column)\">\n                    </scrm-sort-button>\n\n                </th>\n\n                <td cdk-cell *cdkCellDef=\"let record\" [class]=\"'column-' + column?.name ?? ''\">\n                    <scrm-field [mode]=\"'list'\"\n                                [type]=\"column.type\"\n                                [field]=\"getField(column, record)\"\n                                [record]=\"record\">\n                    </scrm-field>\n                </td>\n\n            </ng-container>\n\n            <ng-container cdkColumnDef=\"line-actions\">\n\n                <th cdk-header-cell scope=\"col\" *cdkHeaderCellDef class=\"primary-table-header\"></th>\n\n                <td cdk-cell *cdkCellDef=\"let record\">\n                    <scrm-line-action-menu *ngIf=\"record && config.lineActions\"\n                                           [config]=\"config.lineActions\"\n                                           [record]=\"record\">\n                    </scrm-line-action-menu>\n                </td>\n\n            </ng-container>\n\n            <tr cdk-header-row *cdkHeaderRowDef=\"vm.displayedColumns\"></tr>\n            <tr cdk-row *cdkRowDef=\"let row; columns: vm.displayedColumns;\"></tr>\n\n        </table>\n\n        <div *ngIf=\"!vm.loading && vm.records.length === 0\">\n            <p class=\"lead text-center pt-3\">\n                <scrm-label labelKey=\"MSG_LIST_VIEW_NO_RESULTS_BASIC\"></scrm-label>\n            </p>\n        </div>\n        <div *ngIf=\"vm.loading\" [class.m-5]=\"!vm.records || vm.records.length === 0\">\n            <scrm-loading-spinner [overlay]=\"true\"></scrm-loading-spinner>\n        </div>\n    </div>\n</ng-container>\n" }]
    }], function () { return [{ type: i1.FieldManager }, { type: i2.LoadingBufferFactory }]; }, { config: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtYm9keS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy90YWJsZS90YWJsZS1ib2R5L3RhYmxlLWJvZHkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvdGFibGUvdGFibGUtYm9keS90YWJsZS1ib2R5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDbEUsT0FBTyxFQUFDLGlCQUFpQixFQUFjLEVBQUUsRUFBZSxNQUFNLE1BQU0sQ0FBQztBQUNyRSxPQUFPLEVBQUMsR0FBRyxFQUFFLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFLSCxlQUFlLEVBQ2YsYUFBYSxFQUVoQixNQUFNLFFBQVEsQ0FBQzs7Ozs7Ozs7Ozs7OztJQ0RBLHlCQUFvRjs7OztJQUVwRiw4QkFBc0MsZ0JBQUEsZ0JBQUE7SUFJdkIsOFBBQVUsZUFBQSxtQ0FBdUIsSUFBSSxFQUFFLENBQUEsSUFBQztJQUYvQyxpQkFJMEI7SUFDMUIsMkJBQStCO0lBQ25DLGlCQUFRLEVBQUE7Ozs7O0lBTEcsZUFBMkY7SUFBM0YsNEhBQTJGLHdEQUFBOzs7SUFQOUcsaUNBQTJEO0lBRXZELCtGQUFvRjtJQUVwRiwrRkFTSztJQUVULDBCQUFlOzs7SUFJWCx5QkFBcUc7OztJQUdqRyx1REFDbUc7Ozs7SUFEakUsbUNBQWlCLG1DQUFBOzs7SUFEdkQsOEJBQStEO0lBQzNELGlLQUNtRztJQUN2RyxpQkFBSzs7O0lBRGtDLGVBQTJCO0lBQTNCLG9EQUEyQjs7O0lBTnRFLGlDQUF1RjtJQUVuRixnR0FBcUc7SUFFckcsZ0dBR0s7SUFFVCwwQkFBZTs7O0lBVVAsdUNBRW1COzs7O0lBREQsd0RBQThCOzs7SUFQcEQsOEJBR3VFO0lBRW5FLGlDQUFrRjtJQUNsRixpSUFFbUI7SUFFdkIsaUJBQUs7Ozs7O0lBUEQsK0pBQWtFO0lBRXRELGVBQXlCO0lBQXpCLDJDQUF5Qix1Q0FBQTtJQUNsQixlQUFxQztJQUFyQyxrRUFBcUM7OztJQU01RCw4QkFBK0U7SUFDM0UsaUNBSWE7SUFDakIsaUJBQUs7Ozs7OztJQU5pQyxxSUFBd0M7SUFDOUQsZUFBZTtJQUFmLDZCQUFlLHlCQUFBLG1EQUFBLHNCQUFBOzs7SUFmbkMsaUNBQTZFO0lBRXpFLGdHQVVLO0lBRUwsZ0dBTUs7SUFFVCwwQkFBZTs7O0lBdEJpQyw4Q0FBNEI7OztJQTBCeEUseUJBQW9GOzs7SUFHaEYsNENBR3dCOzs7O0lBRkQsbURBQTZCLHNCQUFBOzs7SUFGeEQsOEJBQXNDO0lBQ2xDLDRIQUd3QjtJQUM1QixpQkFBSzs7OztJQUp1QixlQUFrQztJQUFsQyw4REFBa0M7OztJQVFsRSx5QkFBK0Q7OztJQUMvRCx5QkFBcUU7OztJQUl6RSwyQkFBb0QsWUFBQTtJQUU1QyxpQ0FBbUU7SUFDdkUsaUJBQUksRUFBQTs7O0lBRVIsMkJBQTZFO0lBQ3pFLDJDQUE4RDtJQUNsRSxpQkFBTTs7O0lBRmtCLG1FQUFvRDtJQUNsRCxlQUFnQjtJQUFoQiw4QkFBZ0I7OztJQWxGbEQsNkJBQTBDO0lBQ3RDLDhCQUFrRCxlQUFBO0lBSzFDLG9HQWVlO0lBRWYsb0dBU2U7SUFFZixvR0FzQmU7SUFFZixnQ0FBMEM7SUFFdEMsZ0ZBQW9GO0lBRXBGLGdGQUtLO0lBRVQsMEJBQWU7SUFFZixnRkFBK0Q7SUFDL0QsbUZBQXFFO0lBRXpFLGlCQUFRO0lBRVIsb0ZBSU07SUFDTixxRkFFTTtJQUNWLGlCQUFNO0lBQ1YsMEJBQWU7Ozs7SUFuRlUsZUFBZ0M7SUFBaEMscURBQWdDLCtCQUFBO0lBSU4sZUFBa0I7SUFBbEIsc0NBQWtCO0lBaUJqQixlQUE2QztJQUE3Qyw0RUFBNkM7SUFXcEQsZUFBYTtJQUFiLHVDQUFhO0lBcUMxQixlQUFvQztJQUFwQyx3REFBb0M7SUFDdkIsZUFBNkI7SUFBN0IseURBQTZCO0lBSTVELGVBQTRDO0lBQTVDLG1FQUE0QztJQUs1QyxlQUFnQjtJQUFoQixvQ0FBZ0I7O0FEdkQ5QixNQUlhLGtCQUFrQjtJQVNiO0lBQ0E7SUFUTCxNQUFNLENBQWM7SUFDN0IsVUFBVSxHQUFHLENBQUMsQ0FBQztJQUNmLGNBQWMsQ0FBcUI7SUFDbkMsR0FBRyxDQUE2QjtJQUN0QixhQUFhLENBQWdCO0lBQzdCLElBQUksR0FBbUIsRUFBRSxDQUFDO0lBRXBDLFlBQ2MsWUFBMEIsRUFDMUIsb0JBQTBDO1FBRDFDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFFcEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLDZCQUE2QixDQUFDLENBQUM7SUFDekYsQ0FBQztJQUVELFFBQVE7UUFDSixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNFLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVsQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDL0IsaUJBQWlCLENBQ2IsVUFBVSxFQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQ3BDLFFBQVEsQ0FDWCxFQUNELEdBQUcsQ0FBQyxDQUNBLENBQ0ksT0FBTyxFQUNQLFNBQVMsRUFDVCxVQUFVLEVBQ1YsT0FBTyxFQUNQLE9BQU8sQ0FDVixFQUNILEVBQUU7WUFDQSxNQUFNLGdCQUFnQixHQUFhLEVBQUUsQ0FBQztZQUV0QyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztZQUU3QixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBRXBFLElBQUksU0FBUyxFQUFFO2dCQUNYLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUNyQztZQUVELElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRTtnQkFDbkQsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3RDO1lBRUQsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUM7WUFFdEMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBRXRDLE1BQU0sUUFBUSxHQUFHLFNBQVMsSUFBSSxTQUFTLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQztZQUN2RCxNQUFNLGVBQWUsR0FBRyxTQUFTLElBQUksU0FBUyxDQUFDLE1BQU0sSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDO1lBRTlFLE9BQU87Z0JBQ0gsT0FBTztnQkFDUCxTQUFTO2dCQUNULFFBQVE7Z0JBQ1IsZUFBZTtnQkFDZixnQkFBZ0I7Z0JBQ2hCLE9BQU8sRUFBRSxPQUFPLElBQUksRUFBRTtnQkFDdEIsT0FBTzthQUNWLENBQUM7UUFDTixDQUFDLENBQUMsQ0FDTCxDQUFDO0lBQ04sQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxlQUFlLENBQUMsRUFBVTtRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxXQUFXLENBQUMsTUFBdUI7UUFDL0IsT0FBTyxNQUFNLEtBQUssZUFBZSxDQUFDLEdBQUcsQ0FBQztJQUMxQyxDQUFDO0lBRUQsbUJBQW1CLENBQUMsVUFBOEI7UUFDOUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsSUFBSSxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLE1BQU0sZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBRTVCLE1BQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBVSxLQUFLO1lBQzVDLE9BQU8sQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQzttQkFDaEMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLENBQUM7UUFDdkUsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQzdDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEMsWUFBWSxHQUFHLFlBQVksSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzlDLENBQUMsRUFBRSxDQUFDO1NBQ1A7UUFDRCxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDcEQsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDOUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFO29CQUNoQixnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQy9CLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3RDLE1BQU07aUJBQ1Q7YUFDSjtTQUNKO1FBRUQsT0FBTyxnQkFBZ0IsQ0FBQztJQUM1QixDQUFDO0lBRUQsa0JBQWtCLENBQUMsVUFBOEIsRUFBRSxnQkFBeUI7UUFDeEUsTUFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEtBQUs7WUFDNUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO21CQUNoQyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsQ0FBQztRQUN2RSxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUV2QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNwQyxJQUFJLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQ2pELGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3RDO1NBQ0o7UUFFRCxJQUFJLGFBQWEsR0FBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUUxRSxPQUFPLGFBQWEsQ0FBQztJQUN6QixDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQXVCO1FBQ2hDLE9BQU87WUFDSCxnQkFBZ0IsRUFBRSxHQUE4QixFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNyRSxHQUFHLENBQUMsQ0FBQyxJQUFzQixFQUFFLEVBQUU7Z0JBQzNCLElBQUksU0FBUyxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUM7Z0JBRW5DLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxLQUFLLENBQUMsSUFBSSxFQUFFO29CQUM3QixTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztpQkFDOUI7Z0JBRUQsT0FBTyxTQUFTLENBQUM7WUFDckIsQ0FBQyxDQUFDLENBQ0w7WUFDRCxtQkFBbUIsRUFBRSxDQUFDLFNBQXdCLEVBQVEsRUFBRTtnQkFDcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztZQUNyRCxDQUFDO1NBQ3VCLENBQUM7SUFDakMsQ0FBQztJQUVELFFBQVEsQ0FBQyxNQUF3QixFQUFFLE1BQWM7UUFFN0MsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNwQixPQUFPLElBQUksQ0FBQztTQUNmO1FBRUQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVTLFdBQVc7UUFDakIsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU5QyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDcEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDOUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVKLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztTQUMxQztRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxXQUFXLENBQUMsS0FBYSxFQUFFLElBQVk7UUFDbkMsT0FBTyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDOzRFQTVLUSxrQkFBa0I7NkRBQWxCLGtCQUFrQjtZQzlCL0Isc0ZBcUZlOzs7WUFyRkEsb0RBQW9COzs7U0Q4QnRCLGtCQUFrQjt1RkFBbEIsa0JBQWtCO2NBSjlCLFNBQVM7MkJBQ0ksaUJBQWlCO2tHQUlsQixNQUFNO2tCQUFkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtjb21iaW5lTGF0ZXN0V2l0aCwgT2JzZXJ2YWJsZSwgb2YsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcCwgc2hhcmVSZXBsYXl9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gICAgQ29sdW1uRGVmaW5pdGlvbixcbiAgICBGaWVsZCxcbiAgICBSZWNvcmQsXG4gICAgUmVjb3JkU2VsZWN0aW9uLFxuICAgIFNlbGVjdGlvblN0YXR1cyxcbiAgICBTb3J0RGlyZWN0aW9uLFxuICAgIFNvcnRpbmdTZWxlY3Rpb25cbn0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7RmllbGRNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9yZWNvcmQvZmllbGQvZmllbGQubWFuYWdlcic7XG5pbXBvcnQge1RhYmxlQ29uZmlnfSBmcm9tICcuLi90YWJsZS5tb2RlbCc7XG5pbXBvcnQge1NvcnREaXJlY3Rpb25EYXRhU291cmNlfSBmcm9tICcuLi8uLi9zb3J0LWJ1dHRvbi9zb3J0LWJ1dHRvbi5tb2RlbCc7XG5pbXBvcnQge0xvYWRpbmdCdWZmZXJGYWN0b3J5fSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy91aS9sb2FkaW5nLWJ1ZmZlci9sb2FkaW5nLWJ1ZmZlci5mYWN0b3J5JztcbmltcG9ydCB7TG9hZGluZ0J1ZmZlcn0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvdWkvbG9hZGluZy1idWZmZXIvbG9hZGluZy1idWZmZXIuc2VydmljZSc7XG5cbmludGVyZmFjZSBUYWJsZVZpZXdNb2RlbCB7XG4gICAgY29sdW1uczogQ29sdW1uRGVmaW5pdGlvbltdO1xuICAgIHNlbGVjdGlvbjogUmVjb3JkU2VsZWN0aW9uO1xuICAgIHNlbGVjdGVkOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAgIHNlbGVjdGlvblN0YXR1czogU2VsZWN0aW9uU3RhdHVzO1xuICAgIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdO1xuICAgIHJlY29yZHM6IFJlY29yZFtdIHwgcmVhZG9ubHkgUmVjb3JkW107XG4gICAgbG9hZGluZzogYm9vbGVhbjtcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLXRhYmxlLWJvZHknLFxuICAgIHRlbXBsYXRlVXJsOiAndGFibGUtYm9keS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlQm9keUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBASW5wdXQoKSBjb25maWc6IFRhYmxlQ29uZmlnO1xuICAgIG1heENvbHVtbnMgPSA0O1xuICAgIHBvcG92ZXJDb2x1bW5zOiBDb2x1bW5EZWZpbml0aW9uW107XG4gICAgdm0kOiBPYnNlcnZhYmxlPFRhYmxlVmlld01vZGVsPjtcbiAgICBwcm90ZWN0ZWQgbG9hZGluZ0J1ZmZlcjogTG9hZGluZ0J1ZmZlcjtcbiAgICBwcm90ZWN0ZWQgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgZmllbGRNYW5hZ2VyOiBGaWVsZE1hbmFnZXIsXG4gICAgICAgIHByb3RlY3RlZCBsb2FkaW5nQnVmZmVyRmFjdG9yeTogTG9hZGluZ0J1ZmZlckZhY3RvcnlcbiAgICApIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nQnVmZmVyID0gdGhpcy5sb2FkaW5nQnVmZmVyRmFjdG9yeS5jcmVhdGUoJ3RhYmxlX2xvYWRpbmdfZGlzcGxheV9kZWxheScpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzZWxlY3Rpb24kID0gdGhpcy5jb25maWcuc2VsZWN0aW9uJCB8fCBvZihudWxsKS5waXBlKHNoYXJlUmVwbGF5KDEpKTtcbiAgICAgICAgbGV0IGxvYWRpbmckID0gdGhpcy5pbml0TG9hZGluZygpO1xuXG4gICAgICAgIHRoaXMudm0kID0gdGhpcy5jb25maWcuY29sdW1ucy5waXBlKFxuICAgICAgICAgICAgY29tYmluZUxhdGVzdFdpdGgoXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uJCxcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5tYXhDb2x1bW5zJCxcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5kYXRhU291cmNlLmNvbm5lY3QobnVsbCksXG4gICAgICAgICAgICAgICAgbG9hZGluZyRcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBtYXAoKFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1ucyxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICBtYXhDb2x1bW5zLFxuICAgICAgICAgICAgICAgICAgICByZWNvcmRzLFxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbXTtcblxuICAgICAgICAgICAgICAgIHRoaXMubWF4Q29sdW1ucyA9IG1heENvbHVtbnM7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjb2x1bW5zRGVmcyA9IHRoaXMuYnVpbGREaXNwbGF5Q29sdW1ucyhjb2x1bW5zKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcG92ZXJDb2x1bW5zID0gdGhpcy5idWlsZEhpZGRlbkNvbHVtbnMoY29sdW1ucywgY29sdW1uc0RlZnMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5ZWRDb2x1bW5zLnB1c2goJ2NoZWNrYm94Jyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucG9wb3ZlckNvbHVtbnMgJiYgdGhpcy5wb3BvdmVyQ29sdW1ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheWVkQ29sdW1ucy5wdXNoKCdzaG93LW1vcmUnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkaXNwbGF5ZWRDb2x1bW5zLnB1c2goLi4uY29sdW1uc0RlZnMpO1xuXG4gICAgICAgICAgICAgICAgZGlzcGxheWVkQ29sdW1ucy5wdXNoKCdsaW5lLWFjdGlvbnMnKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gc2VsZWN0aW9uICYmIHNlbGVjdGlvbi5zZWxlY3RlZCB8fCB7fTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25TdGF0dXMgPSBzZWxlY3Rpb24gJiYgc2VsZWN0aW9uLnN0YXR1cyB8fCBTZWxlY3Rpb25TdGF0dXMuTk9ORTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnMsXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvblN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheWVkQ29sdW1ucyxcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkczogcmVjb3JkcyB8fCBbXSxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZ1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cblxuICAgIHRvZ2dsZVNlbGVjdGlvbihpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29uZmlnLnRvZ2dsZVJlY29yZFNlbGVjdGlvbihpZCk7XG4gICAgfVxuXG4gICAgYWxsU2VsZWN0ZWQoc3RhdHVzOiBTZWxlY3Rpb25TdGF0dXMpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHN0YXR1cyA9PT0gU2VsZWN0aW9uU3RhdHVzLkFMTDtcbiAgICB9XG5cbiAgICBidWlsZERpc3BsYXlDb2x1bW5zKG1ldGFGaWVsZHM6IENvbHVtbkRlZmluaXRpb25bXSk6IHN0cmluZ1tdIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBsZXQgaGFzTGlua0ZpZWxkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGRpc3BsYXllZENvbHVtbnMgPSBbXTtcblxuICAgICAgICBjb25zdCBmaWVsZHMgPSBtZXRhRmllbGRzLmZpbHRlcihmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgICAgICAgIHJldHVybiAhZmllbGQuaGFzT3duUHJvcGVydHkoJ2RlZmF1bHQnKVxuICAgICAgICAgICAgICAgIHx8IChmaWVsZC5oYXNPd25Qcm9wZXJ0eSgnZGVmYXVsdCcpICYmIGZpZWxkLmRlZmF1bHQgPT09IHRydWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICB3aGlsZSAoaSA8IHRoaXMubWF4Q29sdW1ucyAmJiBpIDwgZmllbGRzLmxlbmd0aCkge1xuICAgICAgICAgICAgZGlzcGxheWVkQ29sdW1ucy5wdXNoKGZpZWxkc1tpXS5uYW1lKTtcbiAgICAgICAgICAgIGhhc0xpbmtGaWVsZCA9IGhhc0xpbmtGaWVsZCB8fCBmaWVsZHNbaV0ubGluaztcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWhhc0xpbmtGaWVsZCAmJiAodGhpcy5tYXhDb2x1bW5zIDwgZmllbGRzLmxlbmd0aCkpIHtcbiAgICAgICAgICAgIGZvciAoaSA9IHRoaXMubWF4Q29sdW1uczsgaSA8IGZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChmaWVsZHNbaV0ubGluaykge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5ZWRDb2x1bW5zLnNwbGljZSgtMSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXllZENvbHVtbnMucHVzaChmaWVsZHNbaV0ubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkaXNwbGF5ZWRDb2x1bW5zO1xuICAgIH1cblxuICAgIGJ1aWxkSGlkZGVuQ29sdW1ucyhtZXRhRmllbGRzOiBDb2x1bW5EZWZpbml0aW9uW10sIGRpc3BsYXllZENvbHVtbnM6c3RyaW5nW10pOiBDb2x1bW5EZWZpbml0aW9uW10ge1xuICAgICAgICBjb25zdCBmaWVsZHMgPSBtZXRhRmllbGRzLmZpbHRlcihmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgICAgICAgIHJldHVybiAhZmllbGQuaGFzT3duUHJvcGVydHkoJ2RlZmF1bHQnKVxuICAgICAgICAgICAgICAgIHx8IChmaWVsZC5oYXNPd25Qcm9wZXJ0eSgnZGVmYXVsdCcpICYmIGZpZWxkLmRlZmF1bHQgPT09IHRydWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgbWlzc2luZ0ZpZWxkcyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZGlzcGxheWVkQ29sdW1ucy5pbmRleE9mKGZpZWxkc1tpXS5uYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBtaXNzaW5nRmllbGRzLnB1c2goZmllbGRzW2ldLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGhpZGRlbkNvbHVtbnM9IGZpZWxkcy5maWx0ZXIob2JqID0+IG1pc3NpbmdGaWVsZHMuaW5jbHVkZXMob2JqLm5hbWUpKTtcblxuICAgICAgICByZXR1cm4gaGlkZGVuQ29sdW1ucztcbiAgICB9XG5cbiAgICBnZXRGaWVsZFNvcnQoZmllbGQ6IENvbHVtbkRlZmluaXRpb24pOiBTb3J0RGlyZWN0aW9uRGF0YVNvdXJjZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBnZXRTb3J0RGlyZWN0aW9uOiAoKTogT2JzZXJ2YWJsZTxTb3J0RGlyZWN0aW9uPiA9PiB0aGlzLmNvbmZpZy5zb3J0JC5waXBlKFxuICAgICAgICAgICAgICAgIG1hcCgoc29ydDogU29ydGluZ1NlbGVjdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGlyZWN0aW9uID0gU29ydERpcmVjdGlvbi5OT05FO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzb3J0Lm9yZGVyQnkgPT09IGZpZWxkLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9IHNvcnQuc29ydE9yZGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGNoYW5nZVNvcnREaXJlY3Rpb246IChkaXJlY3Rpb246IFNvcnREaXJlY3Rpb24pOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy51cGRhdGVTb3J0aW5nKGZpZWxkLm5hbWUsIGRpcmVjdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gYXMgU29ydERpcmVjdGlvbkRhdGFTb3VyY2U7XG4gICAgfVxuXG4gICAgZ2V0RmllbGQoY29sdW1uOiBDb2x1bW5EZWZpbml0aW9uLCByZWNvcmQ6IFJlY29yZCk6IEZpZWxkIHtcblxuICAgICAgICBpZiAoIWNvbHVtbiB8fCAhcmVjb3JkKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkTWFuYWdlci5hZGRGaWVsZChyZWNvcmQsIGNvbHVtbik7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluaXRMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgICAgICBsZXQgbG9hZGluZyQgPSBvZihmYWxzZSkucGlwZShzaGFyZVJlcGxheSgxKSk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmxvYWRpbmckKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLmNvbmZpZy5sb2FkaW5nJC5zdWJzY3JpYmUobG9hZGluZyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nQnVmZmVyLnVwZGF0ZUxvYWRpbmcobG9hZGluZyk7XG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgIGxvYWRpbmckID0gdGhpcy5sb2FkaW5nQnVmZmVyLmxvYWRpbmckO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsb2FkaW5nJDtcbiAgICB9XG5cbiAgICB0cmFja1JlY29yZChpbmRleDogbnVtYmVyLCBpdGVtOiBSZWNvcmQpOiBhbnkge1xuICAgICAgICByZXR1cm4gaXRlbT8uaWQgPz8gJyc7XG4gICAgfVxufVxuXG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG5cbjxuZy1jb250YWluZXIgKm5nSWY9XCIodm0kIHwgYXN5bmMpIGFzIHZtXCI+XG4gICAgPGRpdiBjbGFzcz1cInBvc2l0aW9uLXJlbGF0aXZlIGQtZmxleCBmbGV4LWNvbHVtblwiPlxuICAgICAgICA8dGFibGUgY2RrLXRhYmxlIFtkYXRhU291cmNlXT1cImNvbmZpZy5kYXRhU291cmNlXCIgW3RyYWNrQnldPVwidHJhY2tSZWNvcmRcIlxuICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInRhYmxlLWJvZHlcIlxuICAgICAgICAgICAgICAgY2xhc3M9XCJsaXN0LXZpZXctdGFibGUgc3RyaXBlZC10YWJsZSB0YWJsZVwiPlxuXG4gICAgICAgICAgICA8bmctY29udGFpbmVyIGNka0NvbHVtbkRlZj1cImNoZWNrYm94XCIgKm5nSWY9XCJ2bS5zZWxlY3Rpb25cIj5cblxuICAgICAgICAgICAgICAgIDx0aCBjZGstaGVhZGVyLWNlbGwgc2NvcGU9XCJjb2xcIiAqY2RrSGVhZGVyQ2VsbERlZiBjbGFzcz1cInByaW1hcnktdGFibGUtaGVhZGVyXCI+PC90aD5cblxuICAgICAgICAgICAgICAgIDx0ZCBjZGstY2VsbCAqY2RrQ2VsbERlZj1cImxldCByZWNvcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY2hlY2tib3gtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2hlY2tlZF09XCIocmVjb3JkWydpZCddICYmIHZtLnNlbGVjdGVkW3JlY29yZFsnaWQnXV0pIHx8IGFsbFNlbGVjdGVkKHZtLnNlbGVjdGlvblN0YXR1cykgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cInRvZ2dsZVNlbGVjdGlvbihyZWNvcmRbJ2lkJ10pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiYWxsU2VsZWN0ZWQodm0uc2VsZWN0aW9uU3RhdHVzKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L3RkPlxuXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBjZGtDb2x1bW5EZWY9XCJzaG93LW1vcmVcIiAqbmdJZj1cInBvcG92ZXJDb2x1bW5zICYmIHBvcG92ZXJDb2x1bW5zLmxlbmd0aFwiPlxuXG4gICAgICAgICAgICAgICAgPHRoIGNkay1oZWFkZXItY2VsbCBzY29wZT1cImNvbFwiICpjZGtIZWFkZXJDZWxsRGVmIGNsYXNzPVwicHJpbWFyeS10YWJsZS1oZWFkZXIgc2hvdy1tb3JlLWNvbHVtblwiPjwvdGg+XG5cbiAgICAgICAgICAgICAgICA8dGQgY2RrLWNlbGwgKmNka0NlbGxEZWY9XCJsZXQgcmVjb3JkXCIgY2xhc3M9XCJzaG93LW1vcmUtY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzY3JtLXJlY29yZC1kZXRhaWxzLXBvcHVwLWJ1dHRvbiBbcmVjb3JkXT1cInJlY29yZFwiIFtjb2x1bW5zXT1cInBvcG92ZXJDb2x1bW5zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwicG9wb3ZlckNvbHVtbnMubGVuZ3RoXCI+PC9zY3JtLXJlY29yZC1kZXRhaWxzLXBvcHVwLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L3RkPlxuXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIHZtLmNvbHVtbnNcIiBbY2RrQ29sdW1uRGVmXT1cImNvbHVtbi5uYW1lXCI+XG5cbiAgICAgICAgICAgICAgICA8dGggY2RrLWhlYWRlci1jZWxsXG4gICAgICAgICAgICAgICAgICAgICpjZGtIZWFkZXJDZWxsRGVmXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzXT1cIidwcmltYXJ5LXRhYmxlLWhlYWRlciAnICsgJ2NvbHVtbi0nICsgY29sdW1uPy5uYW1lID8/ICcnXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPHNjcm0tbGFiZWwgW2xhYmVsS2V5XT1cImNvbHVtbi5sYWJlbFwiIFttb2R1bGVdPVwiY29uZmlnLm1vZHVsZSB8fCAnJ1wiPjwvc2NybS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHNjcm0tc29ydC1idXR0b24gKm5nSWY9XCJjb25maWcuc29ydCQgJiYgY29sdW1uLnNvcnRhYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0YXRlXT1cImdldEZpZWxkU29ydChjb2x1bW4pXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvc2NybS1zb3J0LWJ1dHRvbj5cblxuICAgICAgICAgICAgICAgIDwvdGg+XG5cbiAgICAgICAgICAgICAgICA8dGQgY2RrLWNlbGwgKmNka0NlbGxEZWY9XCJsZXQgcmVjb3JkXCIgW2NsYXNzXT1cIidjb2x1bW4tJyArIGNvbHVtbj8ubmFtZSA/PyAnJ1wiPlxuICAgICAgICAgICAgICAgICAgICA8c2NybS1maWVsZCBbbW9kZV09XCInbGlzdCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdHlwZV09XCJjb2x1bW4udHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmaWVsZF09XCJnZXRGaWVsZChjb2x1bW4sIHJlY29yZClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcmVjb3JkXT1cInJlY29yZFwiPlxuICAgICAgICAgICAgICAgICAgICA8L3Njcm0tZmllbGQ+XG4gICAgICAgICAgICAgICAgPC90ZD5cblxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgY2RrQ29sdW1uRGVmPVwibGluZS1hY3Rpb25zXCI+XG5cbiAgICAgICAgICAgICAgICA8dGggY2RrLWhlYWRlci1jZWxsIHNjb3BlPVwiY29sXCIgKmNka0hlYWRlckNlbGxEZWYgY2xhc3M9XCJwcmltYXJ5LXRhYmxlLWhlYWRlclwiPjwvdGg+XG5cbiAgICAgICAgICAgICAgICA8dGQgY2RrLWNlbGwgKmNka0NlbGxEZWY9XCJsZXQgcmVjb3JkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzY3JtLWxpbmUtYWN0aW9uLW1lbnUgKm5nSWY9XCJyZWNvcmQgJiYgY29uZmlnLmxpbmVBY3Rpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29uZmlnXT1cImNvbmZpZy5saW5lQWN0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3JlY29yZF09XCJyZWNvcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9zY3JtLWxpbmUtYWN0aW9uLW1lbnU+XG4gICAgICAgICAgICAgICAgPC90ZD5cblxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgIDx0ciBjZGstaGVhZGVyLXJvdyAqY2RrSGVhZGVyUm93RGVmPVwidm0uZGlzcGxheWVkQ29sdW1uc1wiPjwvdHI+XG4gICAgICAgICAgICA8dHIgY2RrLXJvdyAqY2RrUm93RGVmPVwibGV0IHJvdzsgY29sdW1uczogdm0uZGlzcGxheWVkQ29sdW1ucztcIj48L3RyPlxuXG4gICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgPGRpdiAqbmdJZj1cIiF2bS5sb2FkaW5nICYmIHZtLnJlY29yZHMubGVuZ3RoID09PSAwXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImxlYWQgdGV4dC1jZW50ZXIgcHQtM1wiPlxuICAgICAgICAgICAgICAgIDxzY3JtLWxhYmVsIGxhYmVsS2V5PVwiTVNHX0xJU1RfVklFV19OT19SRVNVTFRTX0JBU0lDXCI+PC9zY3JtLWxhYmVsPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiAqbmdJZj1cInZtLmxvYWRpbmdcIiBbY2xhc3MubS01XT1cIiF2bS5yZWNvcmRzIHx8IHZtLnJlY29yZHMubGVuZ3RoID09PSAwXCI+XG4gICAgICAgICAgICA8c2NybS1sb2FkaW5nLXNwaW5uZXIgW292ZXJsYXldPVwidHJ1ZVwiPjwvc2NybS1sb2FkaW5nLXNwaW5uZXI+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9uZy1jb250YWluZXI+XG4iXX0=