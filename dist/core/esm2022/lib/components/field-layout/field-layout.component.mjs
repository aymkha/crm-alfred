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
import { BaseFieldGridComponent } from '../field-grid/base-field-grid.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/layout";
import * as i2 from "@angular/common";
import * as i3 from "../../fields/field.component";
import * as i4 from "../image/image.component";
function FieldLayoutComponent_div_1_div_1_ng_container_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 10);
    i0.ɵɵtext(2, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
function FieldLayoutComponent_div_1_div_1_ng_container_1_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 11);
    i0.ɵɵlistener("click", function FieldLayoutComponent_div_1_div_1_ng_container_1_button_12_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r12.dataSource.getEditAction()); });
    i0.ɵɵelement(1, "scrm-image", 12);
    i0.ɵɵelementEnd();
} }
const _c0 = function () { return ["edit", "create"]; };
function FieldLayoutComponent_div_1_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 5)(2, "strong")(3, "label", 1);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "uppercase");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(6, ": ");
    i0.ɵɵtemplate(7, FieldLayoutComponent_div_1_div_1_ng_container_1_ng_container_7_Template, 3, 0, "ng-container", 3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 6)(9, "div", 7);
    i0.ɵɵelement(10, "scrm-field", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div");
    i0.ɵɵtemplate(12, FieldLayoutComponent_div_1_div_1_ng_container_1_button_12_Template, 2, 0, "button", 9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const col_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngClass", ctx_r6.labelClass);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 9, col_r4.field.label));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", col_r4.field.definition.required && i0.ɵɵpureFunction0(11, _c0).includes(ctx_r6.config.mode));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("type", col_r4.field.type)("mode", ctx_r6.config.mode)("klass", ctx_r6.inputClass)("field", col_r4.field)("record", ctx_r6.record);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", col_r4.field.definition.inline_edit !== false && !col_r4.field.readonly && !col_r4.field.definition.readonly && ctx_r6.dataSource.inlineEdit && ctx_r6.config.mode === "detail");
} }
function FieldLayoutComponent_div_1_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵprojection(1);
    i0.ɵɵelementContainerEnd();
} }
function FieldLayoutComponent_div_1_div_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵprojection(1, 1);
    i0.ɵɵelementContainerEnd();
} }
function FieldLayoutComponent_div_1_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 13);
} }
function FieldLayoutComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, FieldLayoutComponent_div_1_div_1_ng_container_1_Template, 13, 12, "ng-container", 3);
    i0.ɵɵtemplate(2, FieldLayoutComponent_div_1_div_1_ng_container_2_Template, 2, 0, "ng-container", 3);
    i0.ɵɵtemplate(3, FieldLayoutComponent_div_1_div_1_ng_container_3_Template, 2, 0, "ng-container", 3);
    i0.ɵɵtemplate(4, FieldLayoutComponent_div_1_div_1_div_4_Template, 1, 0, "div", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r4 = ctx.$implicit;
    const colNumber_r5 = ctx.index;
    const ctx_r15 = i0.ɵɵnextContext();
    const row_r1 = ctx_r15.$implicit;
    const i_r2 = ctx_r15.index;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("field-column-bordered", row_r1.cols.length > 1 && colNumber_r5 < row_r1.cols.length - 1);
    i0.ɵɵproperty("ngClass", ctx_r3.colClass);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", col_r4.field && col_r4.field.display !== "none");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", col_r4.actionSlot);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", col_r4.specialSlot);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", col_r4.field && (col_r4.field == null ? null : col_r4.field.display) !== "none" && i_r2 < ctx_r3.fieldGrid.length - 1);
} }
function FieldLayoutComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, FieldLayoutComponent_div_1_div_1_Template, 5, 7, "div", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r0.rowClass);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", row_r1.cols);
} }
const _c1 = [[["", "field-grid-actions", ""]], [["", "field-grid-special", ""]]];
const _c2 = ["[field-grid-actions]", "[field-grid-special]"];
class FieldLayoutComponent extends BaseFieldGridComponent {
    breakpointObserver;
    dataSource;
    config;
    layout;
    fields;
    record;
    baseColClass = {
        col: true,
        'form-group': true,
        'm-1': false,
        'm-0': true,
        'pl-3': true,
        'pb-2': true,
        'pr-3': true,
        'd-flex': true,
        'flex-column': true,
        'justify-content-between': true
    };
    baseRowClass = {
        'form-row': true,
        'align-items-stretch': true
    };
    constructor(breakpointObserver) {
        super(breakpointObserver);
        this.breakpointObserver = breakpointObserver;
    }
    ngOnInit() {
        this.subscriptions.push(this.dataSource.getConfig().subscribe(config => {
            this.config = { ...config };
        }));
        this.subscriptions.push(this.dataSource.getLayout().subscribe(layout => {
            this.layout = { ...layout };
        }));
        this.subscriptions.push(this.dataSource.getFields().subscribe(fields => {
            this.fields = { ...fields };
        }));
        this.subscriptions.push(this.dataSource.getRecord().subscribe(record => {
            this.record = { ...record };
        }));
        super.ngOnInit();
    }
    buildGrid() {
        const grid = [];
        if (!this.fields || Object.keys(this.fields).length === 0) {
            this.fieldGrid = [];
            return;
        }
        this.layout.rows.forEach(layoutRow => {
            let row = {
                cols: []
            };
            layoutRow.cols.forEach((layoutCol, colIndex) => {
                const fieldName = layoutCol.name;
                const field = this.fields[fieldName] || null;
                if (!field) {
                    row.cols.push({});
                    return;
                }
                row.cols.push({
                    field
                });
                if (this.colNumber === 1 && colIndex < layoutRow.cols.length - 1) {
                    grid.push(row);
                    row = {
                        cols: []
                    };
                }
            });
            if (row.cols.length < this.colNumber) {
                this.fillRow(row);
            }
            grid.push(row);
        });
        this.addSpecialSlots(grid);
        this.fieldGrid = grid;
    }
    get colNumber() {
        const size = this.sizeMap[this.currentSize];
        if (size === 1) {
            return 1;
        }
        return this.config.maxColumns;
    }
    static ɵfac = function FieldLayoutComponent_Factory(t) { return new (t || FieldLayoutComponent)(i0.ɵɵdirectiveInject(i1.BreakpointObserver)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FieldLayoutComponent, selectors: [["scrm-field-layout"]], inputs: { dataSource: "dataSource" }, features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c2, decls: 2, vars: 4, consts: [[3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [3, "field-column-bordered", "ngClass", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "field-separation mt-2", 4, "ngIf"], [1, "label-container"], [1, "d-flex", "flex-grow-1"], [1, "flex-grow-1", "text-break"], [3, "type", "mode", "klass", "field", "record"], ["type", "button", "class", "record-action-button", 3, "click", 4, "ngIf"], [1, "required"], ["type", "button", 1, "record-action-button", 3, "click"], ["image", "pencil", 1, "sicon"], [1, "field-separation", "mt-2"]], template: function FieldLayoutComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c1);
            i0.ɵɵelementStart(0, "form");
            i0.ɵɵtemplate(1, FieldLayoutComponent_div_1_Template, 2, 2, "div", 0);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassMapInterpolate1("field-layout ", ctx.config.mode, "");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.fieldGrid);
        } }, dependencies: [i2.NgClass, i2.NgForOf, i2.NgIf, i3.FieldComponent, i4.ImageComponent, i2.UpperCasePipe], encapsulation: 2 });
}
export { FieldLayoutComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FieldLayoutComponent, [{
        type: Component,
        args: [{ selector: 'scrm-field-layout', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<form class=\"field-layout {{config.mode}}\">\n    <div [ngClass]=\"rowClass\" *ngFor=\"let row of fieldGrid; index as i\">\n\n        <div *ngFor=\"let col of row.cols; index as colNumber\"\n             [class.field-column-bordered]=\"row.cols.length > 1 && colNumber < row.cols.length - 1\"\n             [ngClass]=\"colClass\">\n\n            <ng-container *ngIf=\"col.field && col.field.display !== 'none'\">\n                <div class=\"label-container\">\n                    <strong>\n                        <label [ngClass]=\"labelClass\">{{col.field.label | uppercase}}</label>:\n                        <ng-container\n                            *ngIf=\"col.field.definition.required && (['edit', 'create'].includes(config.mode))\">\n                            <span class=\"required\">*</span>\n                        </ng-container>\n                    </strong>\n                </div>\n                <div class=\"d-flex flex-grow-1\">\n                    <div class=\"flex-grow-1 text-break\">\n                        <scrm-field [type]=\"col.field.type\"\n                                    [mode]=\"config.mode\"\n                                    [klass]=\"inputClass\"\n                                    [field]=\"col.field\"\n                                    [record]=\"record\">\n                        </scrm-field>\n                    </div>\n                    <div>\n                        <button type=\"button\" class=\"record-action-button\"\n                                (click)=\"this.dataSource.getEditAction()\"\n                                *ngIf=\"col.field.definition.inline_edit !== false && !col.field.readonly && !col.field.definition.readonly && this.dataSource.inlineEdit && config.mode === 'detail'\">\n                            <scrm-image class=\"sicon\" image=\"pencil\"></scrm-image>\n                        </button>\n                    </div>\n                </div>\n            </ng-container>\n\n            <ng-container *ngIf=\"col.actionSlot\">\n                <ng-content select=\"[field-grid-actions]\"></ng-content>\n            </ng-container>\n\n            <ng-container *ngIf=\"col.specialSlot\">\n                <ng-content select=\"[field-grid-special]\"></ng-content>\n            </ng-container>\n\n            <div *ngIf=\"col.field && col.field?.display !== 'none' && i < fieldGrid.length - 1\"\n                 class=\"field-separation mt-2\">\n            </div>\n        </div>\n    </div>\n</form>\n" }]
    }], function () { return [{ type: i1.BreakpointObserver }]; }, { dataSource: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtbGF5b3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL2ZpZWxkLWxheW91dC9maWVsZC1sYXlvdXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvZmllbGQtbGF5b3V0L2ZpZWxkLWxheW91dC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFJL0MsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0seUNBQXlDLENBQUM7Ozs7Ozs7SUNRdkQsNkJBQ3dGO0lBQ3BGLGdDQUF1QjtJQUFBLGlCQUFDO0lBQUEsaUJBQU87SUFDbkMsMEJBQWU7Ozs7SUFhZixrQ0FFOEs7SUFEdEssbU1BQVMsZUFBQSxrQ0FBK0IsQ0FBQSxJQUFDO0lBRTdDLGlDQUFzRDtJQUMxRCxpQkFBUzs7OztJQXhCckIsNkJBQWdFO0lBQzVELDhCQUE2QixhQUFBLGVBQUE7SUFFUyxZQUErQjs7SUFBQSxpQkFBUTtJQUFBLGtCQUNyRTtJQUFBLGtIQUdlO0lBQ25CLGlCQUFTLEVBQUE7SUFFYiw4QkFBZ0MsYUFBQTtJQUV4QixpQ0FLYTtJQUNqQixpQkFBTTtJQUNOLDRCQUFLO0lBQ0Qsd0dBSVM7SUFDYixpQkFBTSxFQUFBO0lBRWQsMEJBQWU7Ozs7SUF4QkksZUFBc0I7SUFBdEIsMkNBQXNCO0lBQUMsZUFBK0I7SUFBL0IsOERBQStCO0lBRXhELGVBQWlGO0lBQWpGLG1IQUFpRjtJQU8xRSxlQUF1QjtJQUF2Qix3Q0FBdUIsNEJBQUEsNEJBQUEsdUJBQUEseUJBQUE7SUFVMUIsZUFBbUs7SUFBbkssc01BQW1LOzs7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QUFTLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUFJLFNBQVM7UUFDVCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM1QyxJQUFJLElBQUksS0FBSyxDQUFDLEVBQUU7WUFDWixPQUFPLENBQUMsQ0FBQztTQUNaO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztJQUNsQyxDQUFDOzhFQXRHUSxvQkFBb0I7NkRBQXBCLG9CQUFvQjs7WUNYakMsNEJBQTJDO1lBQ3ZDLHFFQStDTTtZQUNWLGlCQUFPOztZQWpERCwrREFBb0M7WUFDSSxlQUFjO1lBQWQsdUNBQWM7OztTRFUvQyxvQkFBb0I7dUZBQXBCLG9CQUFvQjtjQUxoQyxTQUFTOzJCQUNJLG1CQUFtQjtxRUFNcEIsVUFBVTtrQkFBbEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RmllbGRNYXAsIFBhbmVsLCBSZWNvcmR9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge0JyZWFrcG9pbnRPYnNlcnZlcn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCc7XG5pbXBvcnQge0ZpZWxkR3JpZENvbHVtbiwgRmllbGRHcmlkUm93fSBmcm9tICcuLi9maWVsZC1ncmlkL2ZpZWxkLWdyaWQubW9kZWwnO1xuaW1wb3J0IHtCYXNlRmllbGRHcmlkQ29tcG9uZW50fSBmcm9tICcuLi9maWVsZC1ncmlkL2Jhc2UtZmllbGQtZ3JpZC5jb21wb25lbnQnO1xuaW1wb3J0IHtGaWVsZExheW91dENvbmZpZywgRmllbGRMYXlvdXREYXRhU291cmNlfSBmcm9tICcuL2ZpZWxkLWxheW91dC5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1maWVsZC1sYXlvdXQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9maWVsZC1sYXlvdXQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgRmllbGRMYXlvdXRDb21wb25lbnQgZXh0ZW5kcyBCYXNlRmllbGRHcmlkQ29tcG9uZW50IHtcblxuICAgIEBJbnB1dCgpIGRhdGFTb3VyY2U6IEZpZWxkTGF5b3V0RGF0YVNvdXJjZTtcbiAgICBjb25maWc6IEZpZWxkTGF5b3V0Q29uZmlnO1xuICAgIGxheW91dDogUGFuZWw7XG4gICAgZmllbGRzOiBGaWVsZE1hcDtcbiAgICByZWNvcmQ6IFJlY29yZDtcblxuICAgIGJhc2VDb2xDbGFzcyA9IHtcbiAgICAgICAgY29sOiB0cnVlLFxuICAgICAgICAnZm9ybS1ncm91cCc6IHRydWUsXG4gICAgICAgICdtLTEnOiBmYWxzZSxcbiAgICAgICAgJ20tMCc6IHRydWUsXG4gICAgICAgICdwbC0zJzogdHJ1ZSxcbiAgICAgICAgJ3BiLTInOiB0cnVlLFxuICAgICAgICAncHItMyc6IHRydWUsXG4gICAgICAgICdkLWZsZXgnOiB0cnVlLFxuICAgICAgICAnZmxleC1jb2x1bW4nOiB0cnVlLFxuICAgICAgICAnanVzdGlmeS1jb250ZW50LWJldHdlZW4nOiB0cnVlXG4gICAgfSBhcyB7IFtrZXk6c3RyaW5nXTogYm9vbGVhbiB9O1xuXG4gICAgYmFzZVJvd0NsYXNzID0ge1xuICAgICAgICAnZm9ybS1yb3cnOiB0cnVlLFxuICAgICAgICAnYWxpZ24taXRlbXMtc3RyZXRjaCc6IHRydWVcbiAgICB9IGFzIHsgW2tleTpzdHJpbmddOiBib29sZWFuIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYnJlYWtwb2ludE9ic2VydmVyOiBCcmVha3BvaW50T2JzZXJ2ZXIpIHtcbiAgICAgICAgc3VwZXIoYnJlYWtwb2ludE9ic2VydmVyKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLmRhdGFTb3VyY2UuZ2V0Q29uZmlnKCkuc3Vic2NyaWJlKGNvbmZpZyA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZyA9IHsuLi5jb25maWd9O1xuICAgICAgICB9KSk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMuZGF0YVNvdXJjZS5nZXRMYXlvdXQoKS5zdWJzY3JpYmUobGF5b3V0ID0+IHtcbiAgICAgICAgICAgIHRoaXMubGF5b3V0ID0gey4uLmxheW91dH07XG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy5kYXRhU291cmNlLmdldEZpZWxkcygpLnN1YnNjcmliZShmaWVsZHMgPT4ge1xuICAgICAgICAgICAgdGhpcy5maWVsZHMgPSB7Li4uZmllbGRzfTtcbiAgICAgICAgfSkpO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLmRhdGFTb3VyY2UuZ2V0UmVjb3JkKCkuc3Vic2NyaWJlKHJlY29yZCA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlY29yZCA9IHsuLi5yZWNvcmR9O1xuICAgICAgICB9KSk7XG5cbiAgICAgICAgc3VwZXIubmdPbkluaXQoKTtcbiAgICB9XG5cbiAgICBidWlsZEdyaWQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGdyaWQ6IEZpZWxkR3JpZFJvd1tdID0gW107XG5cbiAgICAgICAgaWYgKCF0aGlzLmZpZWxkcyB8fCBPYmplY3Qua2V5cyh0aGlzLmZpZWxkcykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmZpZWxkR3JpZCA9IFtdO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sYXlvdXQucm93cy5mb3JFYWNoKGxheW91dFJvdyA9PiB7XG4gICAgICAgICAgICBsZXQgcm93ID0ge1xuICAgICAgICAgICAgICAgIGNvbHM6IFtdXG4gICAgICAgICAgICB9IGFzIEZpZWxkR3JpZFJvdztcblxuICAgICAgICAgICAgbGF5b3V0Um93LmNvbHMuZm9yRWFjaCgobGF5b3V0Q29sLCBjb2xJbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkTmFtZSA9IGxheW91dENvbC5uYW1lO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5maWVsZHNbZmllbGROYW1lXSB8fCBudWxsO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFmaWVsZCkge1xuICAgICAgICAgICAgICAgICAgICByb3cuY29scy5wdXNoKHt9IGFzIEZpZWxkR3JpZENvbHVtbik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByb3cuY29scy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRcbiAgICAgICAgICAgICAgICB9IGFzIEZpZWxkR3JpZENvbHVtbik7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb2xOdW1iZXIgPT09IDEgJiYgY29sSW5kZXggPCBsYXlvdXRSb3cuY29scy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQucHVzaChyb3cpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJvdyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM6IFtdXG4gICAgICAgICAgICAgICAgICAgIH0gYXMgRmllbGRHcmlkUm93O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAocm93LmNvbHMubGVuZ3RoIDwgdGhpcy5jb2xOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGxSb3cocm93KTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBncmlkLnB1c2gocm93KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hZGRTcGVjaWFsU2xvdHMoZ3JpZCk7XG5cbiAgICAgICAgdGhpcy5maWVsZEdyaWQgPSBncmlkO1xuICAgIH1cblxuICAgIGdldCBjb2xOdW1iZXIoKTogbnVtYmVyIHtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMuc2l6ZU1hcFt0aGlzLmN1cnJlbnRTaXplXTtcbiAgICAgICAgaWYgKHNpemUgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5tYXhDb2x1bW5zO1xuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxmb3JtIGNsYXNzPVwiZmllbGQtbGF5b3V0IHt7Y29uZmlnLm1vZGV9fVwiPlxuICAgIDxkaXYgW25nQ2xhc3NdPVwicm93Q2xhc3NcIiAqbmdGb3I9XCJsZXQgcm93IG9mIGZpZWxkR3JpZDsgaW5kZXggYXMgaVwiPlxuXG4gICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGNvbCBvZiByb3cuY29sczsgaW5kZXggYXMgY29sTnVtYmVyXCJcbiAgICAgICAgICAgICBbY2xhc3MuZmllbGQtY29sdW1uLWJvcmRlcmVkXT1cInJvdy5jb2xzLmxlbmd0aCA+IDEgJiYgY29sTnVtYmVyIDwgcm93LmNvbHMubGVuZ3RoIC0gMVwiXG4gICAgICAgICAgICAgW25nQ2xhc3NdPVwiY29sQ2xhc3NcIj5cblxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbC5maWVsZCAmJiBjb2wuZmllbGQuZGlzcGxheSAhPT0gJ25vbmUnXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIFtuZ0NsYXNzXT1cImxhYmVsQ2xhc3NcIj57e2NvbC5maWVsZC5sYWJlbCB8IHVwcGVyY2FzZX19PC9sYWJlbD46XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJjb2wuZmllbGQuZGVmaW5pdGlvbi5yZXF1aXJlZCAmJiAoWydlZGl0JywgJ2NyZWF0ZSddLmluY2x1ZGVzKGNvbmZpZy5tb2RlKSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlcXVpcmVkXCI+Kjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtZ3Jvdy0xXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LWdyb3ctMSB0ZXh0LWJyZWFrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1maWVsZCBbdHlwZV09XCJjb2wuZmllbGQudHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbW9kZV09XCJjb25maWcubW9kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBba2xhc3NdPVwiaW5wdXRDbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZmllbGRdPVwiY29sLmZpZWxkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyZWNvcmRdPVwicmVjb3JkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Njcm0tZmllbGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJyZWNvcmQtYWN0aW9uLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJ0aGlzLmRhdGFTb3VyY2UuZ2V0RWRpdEFjdGlvbigpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJjb2wuZmllbGQuZGVmaW5pdGlvbi5pbmxpbmVfZWRpdCAhPT0gZmFsc2UgJiYgIWNvbC5maWVsZC5yZWFkb25seSAmJiAhY29sLmZpZWxkLmRlZmluaXRpb24ucmVhZG9ubHkgJiYgdGhpcy5kYXRhU291cmNlLmlubGluZUVkaXQgJiYgY29uZmlnLm1vZGUgPT09ICdkZXRhaWwnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0taW1hZ2UgY2xhc3M9XCJzaWNvblwiIGltYWdlPVwicGVuY2lsXCI+PC9zY3JtLWltYWdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb2wuYWN0aW9uU2xvdFwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltmaWVsZC1ncmlkLWFjdGlvbnNdXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb2wuc3BlY2lhbFNsb3RcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbZmllbGQtZ3JpZC1zcGVjaWFsXVwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY29sLmZpZWxkICYmIGNvbC5maWVsZD8uZGlzcGxheSAhPT0gJ25vbmUnICYmIGkgPCBmaWVsZEdyaWQubGVuZ3RoIC0gMVwiXG4gICAgICAgICAgICAgICAgIGNsYXNzPVwiZmllbGQtc2VwYXJhdGlvbiBtdC0yXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Zvcm0+XG4iXX0=