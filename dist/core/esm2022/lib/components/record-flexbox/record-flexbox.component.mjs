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
import { isTrue } from 'common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../fields/field.component";
import * as i3 from "../label/label.component";
import * as i4 from "../action-group-menu/action-group-menu.component";
import * as i5 from "../dynamic-label/dynamic-label.component";
function RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_2_ng_container_1_ng_container_1_ng_container_1_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r11 = i0.ɵɵnextContext(3).ngIf;
    const col_r5 = i0.ɵɵnextContext(4).$implicit;
    const ctx_r15 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngClass", ctx_r15.getLabelClass(col_r5));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", field_r11.label, " ");
} }
function RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_2_ng_container_1_ng_container_1_ng_container_1_scrm_label_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-label", 9);
} if (rf & 2) {
    const field_r11 = i0.ɵɵnextContext(3).ngIf;
    const col_r5 = i0.ɵɵnextContext(4).$implicit;
    const ctx_r16 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("labelKey", field_r11.labelKey)("ngClass", ctx_r16.getLabelClass(col_r5));
} }
function RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_2_ng_container_1_ng_container_1_ng_container_1_scrm_dynamic_label_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-dynamic-label", 10);
} if (rf & 2) {
    const field_r11 = i0.ɵɵnextContext(3).ngIf;
    const ctx_r17 = i0.ɵɵnextContext(8);
    i0.ɵɵproperty("labelKey", field_r11.dynamicLabelKey)("fields", ctx_r17.record.fields);
} }
function RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_2_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_2_ng_container_1_ng_container_1_ng_container_1_label_2_Template, 2, 2, "label", 6);
    i0.ɵɵtemplate(3, RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_2_ng_container_1_ng_container_1_ng_container_1_scrm_label_3_Template, 1, 2, "scrm-label", 7);
    i0.ɵɵtemplate(4, RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_2_ng_container_1_ng_container_1_ng_container_1_scrm_dynamic_label_4_Template, 1, 2, "scrm-dynamic-label", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r11 = i0.ɵɵnextContext(2).ngIf;
    const col_r5 = i0.ɵɵnextContext(4).$implicit;
    const ctx_r13 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("pr-3", ctx_r13.getLabelDisplay(col_r5, ctx_r13.mode) === "inline" && ctx_r13.getDisplay(col_r5) !== "none");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r11.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !field_r11.label && field_r11.labelKey);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r11.dynamicLabelKey);
} }
function RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_2_ng_container_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵelement(2, "scrm-field", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r11 = i0.ɵɵnextContext(2).ngIf;
    const col_r5 = i0.ɵɵnextContext(4).$implicit;
    const ctx_r14 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("flex-grow-1", ctx_r14.getLabelDisplay(col_r5, ctx_r14.mode) === "inline");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("field", field_r11)("klass", ctx_r14.getFieldClass(col_r5))("mode", ctx_r14.mode)("record", ctx_r14.record)("type", field_r11.type);
} }
function RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_2_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_2_ng_container_1_ng_container_1_ng_container_1_Template, 5, 5, "ng-container", 1);
    i0.ɵɵtemplate(2, RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_2_ng_container_1_ng_container_1_ng_container_2_Template, 3, 7, "ng-container", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const col_r5 = i0.ɵɵnextContext(5).$implicit;
    const ctx_r12 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r12.getLabelDisplay(col_r5, ctx_r12.mode) !== "none");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r12.getDisplay(col_r5) !== "none");
} }
function RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_2_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r11 = ctx.ngIf;
    const col_r5 = i0.ɵɵnextContext(4).$implicit;
    const ctx_r10 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r10.shouldDisplay(col_r5, field_r11, ctx_r10.mode));
} }
function RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_2_ng_container_1_Template, 2, 1, "ng-container", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const col_r5 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r8 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.getField(ctx_r8.record, col_r5.field));
} }
function RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-action-group-menu", 12);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(7);
    let tmp_0_0;
    let tmp_1_0;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("buttonClass", (tmp_0_0 = ctx_r9.config.buttonClass) !== null && tmp_0_0 !== undefined ? tmp_0_0 : "")("buttonGroupClass", (tmp_1_0 = ctx_r9.config.buttonGroupClass) !== null && tmp_1_0 !== undefined ? tmp_1_0 : "")("config", ctx_r9.config.actions);
} }
function RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵtemplate(2, RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 1);
    i0.ɵɵtemplate(3, RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_ng_container_3_Template, 2, 3, "ng-container", 1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const col_r5 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r7 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("align-items-center", ctx_r7.getLabelDisplay(col_r5, ctx_r7.mode) === "inline")("flex-column", ctx_r7.getLabelDisplay(col_r5, ctx_r7.mode) === "top")("flex-row", ctx_r7.getLabelDisplay(col_r5, ctx_r7.mode) === "inline")("justify-content-end", !col_r5.field);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.record);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", col_r5.actionSlot && ctx_r7.config.actions);
} }
function RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_ng_container_1_Template, 4, 10, "ng-container", 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r6 = i0.ɵɵnextContext(4);
    let tmp_1_0;
    i0.ɵɵclassMapInterpolate1("record-flexbox-col ", ctx_r6.getClass(col_r5), "");
    i0.ɵɵproperty("ngClass", (tmp_1_0 = ctx_r6.config.colClass) !== null && tmp_1_0 !== undefined ? tmp_1_0 : null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", col_r5.display !== "hidden" && ctx_r6.shouldColDisplayInMode(col_r5, ctx_r6.mode));
} }
function RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_div_1_Template, 2, 5, "div", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const col_r5 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", col_r5.display !== "hidden" && ctx_r4.shouldColDisplayInMode(col_r5, ctx_r4.mode));
} }
function RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵtemplate(2, RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    let tmp_1_0;
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate3("d-flex record-flexbox-row ", ctx_r2.getJustify(item_r3.justify), " ", ctx_r2.getAlign(item_r3.align), " ", ctx_r2.getLayoutRowClass(item_r3), "");
    i0.ɵɵproperty("ngClass", (tmp_1_0 = ctx_r2.config.rowClass) !== null && tmp_1_0 !== undefined ? tmp_1_0 : null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", item_r3.cols);
} }
function RecordFlexboxComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RecordFlexboxComponent_div_0_ng_container_1_ng_container_1_Template, 3, 7, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.layout.rows);
} }
function RecordFlexboxComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, RecordFlexboxComponent_div_0_ng_container_1_Template, 2, 1, "ng-container", 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate2("d-flex ", (ctx_r0.config && ctx_r0.config.flexDirection ? ctx_r0.config.flexDirection : "flex-column") || "", " ", ctx_r0.config && ctx_r0.config.klass || "", "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.layout && ctx_r0.layout.rows);
} }
class RecordFlexboxComponent {
    config;
    mode = 'detail';
    record;
    layout;
    maxColumns = 4;
    sizeMap = {
        handset: 1,
        tablet: 2,
        web: 3,
        wide: 4
    };
    subs = [];
    constructor() {
    }
    ngOnInit() {
        if (!this.config) {
            return;
        }
        const config = this.config;
        if (config.record$) {
            this.subs.push(config.record$.subscribe(record => {
                this.record = record ?? null;
            }));
        }
        if (config.mode$) {
            this.subs.push(config.mode$.subscribe(mode => {
                this.mode = mode ?? 'detail';
            }));
        }
        if (config.layout$) {
            this.subs.push(config.layout$.subscribe(layout => {
                this.layout = layout ?? null;
            }));
        }
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    getRowClass() {
        return this.config.rowClass;
    }
    getColClass() {
        return this.config.colClass;
    }
    getSizeClass(size) {
        const sizeMap = {
            regular: 'text-regular',
            medium: 'text-medium',
            large: 'text-large',
            'x-large': 'text-x-large',
            'xx-large': 'text-xx-large',
            huge: 'text-huge'
        };
        return sizeMap[size] || 'text-regular';
    }
    getFontWeight(bold) {
        let fontWeight = 'font-weight-normal';
        if (bold && isTrue(bold)) {
            fontWeight = 'font-weight-bolder';
        }
        return fontWeight;
    }
    getColor(color) {
        const sizeMap = {
            yellow: 'text-yellow',
            blue: 'text-blue',
            green: 'text-green',
            red: 'text-red',
            purple: 'text-purple',
            dark: 'text-dark',
            grey: 'text-grey'
        };
        return sizeMap[color] || '';
    }
    getJustify(justify) {
        const justifyMap = {
            start: 'justify-content-start',
            end: 'justify-content-end',
            center: 'justify-content-center',
            between: 'justify-content-between',
            around: 'justify-content-around'
        };
        return justifyMap[justify] || '';
    }
    getAlign(align) {
        const alignMap = {
            start: 'align-items-start',
            end: 'align-items-end',
            center: 'align-items-center',
            baseline: 'align-items-baseline',
            stretch: 'align-items-stretch'
        };
        return alignMap[align] || '';
    }
    getLayoutRowClass(row) {
        return (row && row.class) || '';
    }
    getClass(layoutCol) {
        if (!layoutCol) {
            return '';
        }
        const klasses = [];
        klasses.push(layoutCol.class || '');
        layoutCol.size && klasses.push(this.getSizeClass(layoutCol.size) || '');
        layoutCol.bold && klasses.push(this.getFontWeight(layoutCol.bold) || '');
        layoutCol.color && klasses.push(this.getColor(layoutCol.color) || '');
        return klasses.join(' ');
    }
    getLabelDisplay(col, mode) {
        const displayInMode = this.shouldLabelDisplayInMode(col, mode);
        if (!displayInMode) {
            return 'none';
        }
        return col.labelDisplay || (this.config && this.config.labelDisplay) || 'inline';
    }
    getField(record, field) {
        if (!field || !field.name || !record || !record.fields) {
            return null;
        }
        return record.fields[field.name] ?? null;
    }
    getFieldClass(col) {
        let klasses = this.config.inputClass || {};
        if (col.inputClass) {
            klasses[col.inputClass] = true;
        }
        return klasses;
    }
    getLabelClass(col) {
        let klasses = this.config.labelClass || {};
        if (col.labelClass) {
            klasses[col.labelClass] = true;
        }
        return klasses;
    }
    shouldDisplay(col, field, mode) {
        const displayInMode = this.shouldFieldDisplayInMode(col, mode);
        if (!displayInMode) {
            return false;
        }
        if (!col.hideIfEmpty) {
            return true;
        }
        let hasValue = false;
        hasValue = hasValue || !!field.value;
        hasValue = hasValue || !!(field.valueList && field.valueList.length);
        hasValue = hasValue || !!(field.valueObject && Object.keys(field.valueObject).length);
        return hasValue;
    }
    shouldColDisplayInMode(col, mode) {
        return this.shouldFieldDisplayInMode(col, mode) || this.shouldLabelDisplayInMode(col, mode);
    }
    shouldFieldDisplayInMode(col, mode) {
        const modes = col?.modes ?? null;
        return !(modes && modes.length && !modes.includes(mode));
    }
    shouldLabelDisplayInMode(col, mode) {
        const modes = col?.labelModes ?? null;
        return !(modes && modes.length && !modes.includes(mode));
    }
    getDisplay(col) {
        return col.display || '';
    }
    static ɵfac = function RecordFlexboxComponent_Factory(t) { return new (t || RecordFlexboxComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RecordFlexboxComponent, selectors: [["scrm-record-flexbox"]], inputs: { config: "config" }, decls: 1, vars: 1, consts: [[3, "class", 4, "ngIf"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "ngClass"], [3, "ngClass", "class", 4, "ngIf"], [1, "d-flex"], [3, "ngClass", 4, "ngIf"], [3, "labelKey", "ngClass", 4, "ngIf"], [3, "labelKey", "fields", 4, "ngIf"], [3, "labelKey", "ngClass"], [3, "labelKey", "fields"], [3, "field", "klass", "mode", "record", "type"], [3, "buttonClass", "buttonGroupClass", "config"]], template: function RecordFlexboxComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, RecordFlexboxComponent_div_0_Template, 2, 5, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.config);
        } }, dependencies: [i1.NgClass, i1.NgForOf, i1.NgIf, i2.FieldComponent, i3.LabelComponent, i4.ActionGroupMenuComponent, i5.DynamicLabelComponent], encapsulation: 2 });
}
export { RecordFlexboxComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordFlexboxComponent, [{
        type: Component,
        args: [{ selector: 'scrm-record-flexbox', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n\n<div *ngIf=\"config\" class=\"d-flex {{((config && config.flexDirection) ? config.flexDirection : 'flex-column' ) || ''}} {{(config && config.klass) || ''}}\"   >\n    <ng-container *ngIf=\"layout && layout.rows\">\n        <ng-container *ngFor=\"let item of layout.rows\">\n\n            <div [ngClass]=\"config.rowClass ?? null\"\n                 class=\"d-flex record-flexbox-row {{getJustify(item.justify)}} {{getAlign(item.align)}} {{getLayoutRowClass(item)}}\">\n\n                <ng-container *ngFor=\"let col of item.cols\">\n\n                <div *ngIf=\"col.display !== 'hidden' && shouldColDisplayInMode(col, mode)\"\n                     [ngClass]=\"config.colClass ?? null\"\n                     class=\"record-flexbox-col {{getClass(col)}}\">\n\n                    <ng-container *ngIf=\"col.display !== 'hidden' && shouldColDisplayInMode(col, mode)\">\n\n                        <div [class.align-items-center]=\"getLabelDisplay(col, mode) === 'inline'\"\n                             [class.flex-column]=\"getLabelDisplay(col, mode) === 'top'\"\n                             [class.flex-row]=\"getLabelDisplay(col, mode) === 'inline'\"\n                             [class.justify-content-end]=\"!col.field\"\n                             class=\"d-flex\"\n                        >\n                            <ng-container *ngIf=\"record\">\n                                <ng-container *ngIf=\"getField(record, col.field) as field\">\n\n                                    <ng-container *ngIf=\"shouldDisplay(col, field, mode)\">\n                                        <ng-container *ngIf=\"getLabelDisplay(col, mode) !== 'none'\">\n\n                                            <div\n                                                [class.pr-3]=\"getLabelDisplay(col, mode) === 'inline' && getDisplay(col) !== 'none'\">\n\n                                                <label *ngIf=\"field.label\" [ngClass]=\"getLabelClass(col)\">\n                                                    {{field.label}}\n                                                </label>\n\n                                                <scrm-label *ngIf=\"!field.label && field.labelKey\"\n                                                            [labelKey]=\"field.labelKey\"\n                                                            [ngClass]=\"getLabelClass(col)\">\n                                                </scrm-label>\n\n                                                <scrm-dynamic-label *ngIf=\"field.dynamicLabelKey\"\n                                                                    [labelKey]=\"field.dynamicLabelKey\"\n                                                                    [fields]=\"record.fields\">\n                                                </scrm-dynamic-label>\n                                            </div>\n\n                                        </ng-container>\n\n                                        <ng-container *ngIf=\"getDisplay(col) !== 'none'\">\n\n                                            <div [class.flex-grow-1]=\"getLabelDisplay(col, mode) === 'inline'\">\n                                                <scrm-field [field]=\"field\"\n                                                            [klass]=\"getFieldClass(col)\"\n                                                            [mode]=\"mode\"\n                                                            [record]=\"record\"\n                                                            [type]=\"field.type\">\n                                                </scrm-field>\n\n                                            </div>\n\n                                        </ng-container>\n\n\n                                    </ng-container>\n\n                                </ng-container>\n                            </ng-container>\n\n                            <ng-container *ngIf=\"col.actionSlot && this.config.actions\">\n                                <scrm-action-group-menu [buttonClass]=\"config.buttonClass ?? ''\"\n                                                        [buttonGroupClass]=\"config.buttonGroupClass ?? ''\"\n                                                        [config]=\"config.actions\">\n                                </scrm-action-group-menu>\n                            </ng-container>\n\n                        </div>\n                    </ng-container>\n\n                </div>\n                </ng-container>\n            </div>\n        </ng-container>\n    </ng-container>\n</div>\n" }]
    }], function () { return []; }, { config: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLWZsZXhib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvcmVjb3JkLWZsZXhib3gvcmVjb3JkLWZsZXhib3guY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvcmVjb3JkLWZsZXhib3gvcmVjb3JkLWZsZXhib3guY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUNsRSxPQUFPLEVBSUgsTUFBTSxFQVFULE1BQU0sUUFBUSxDQUFDOzs7Ozs7OztJQ21CZ0MsZ0NBQTBEO0lBQ3RELFlBQ0o7SUFBQSxpQkFBUTs7Ozs7SUFGbUIsdURBQThCO0lBQ3JELGVBQ0o7SUFESSxnREFDSjs7O0lBRUEsZ0NBR2E7Ozs7O0lBRkQsNkNBQTJCLDBDQUFBOzs7SUFJdkMseUNBR3FCOzs7O0lBRkQsb0RBQWtDLGlDQUFBOzs7SUFmOUQsNkJBQTREO0lBRXhELDJCQUN5RjtJQUVyRiwrTUFFUTtJQUVSLHlOQUdhO0lBRWIseU9BR3FCO0lBQ3pCLGlCQUFNO0lBRVYsMEJBQWU7Ozs7O0lBakJQLGVBQW9GO0lBQXBGLDJIQUFvRjtJQUU1RSxlQUFpQjtJQUFqQixzQ0FBaUI7SUFJWixlQUFvQztJQUFwQyw2REFBb0M7SUFLNUIsZUFBMkI7SUFBM0IsZ0RBQTJCOzs7SUFReEQsNkJBQWlEO0lBRTdDLDJCQUFtRTtJQUMvRCxpQ0FLYTtJQUVqQixpQkFBTTtJQUVWLDBCQUFlOzs7OztJQVZOLGVBQTZEO0lBQTdELHlGQUE2RDtJQUNsRCxlQUFlO0lBQWYsaUNBQWUsd0NBQUEsc0JBQUEsMEJBQUEsd0JBQUE7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RSxJQUFJLENBQUMsQ0FBQztJQUNoRyxDQUFDO0lBRUQsd0JBQXdCLENBQUMsR0FBb0IsRUFBRSxJQUFjO1FBQ3pELE1BQU0sS0FBSyxHQUFHLEdBQUcsRUFBRSxLQUFLLElBQUksSUFBSSxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCx3QkFBd0IsQ0FBQyxHQUFvQixFQUFFLElBQWM7UUFDekQsTUFBTSxLQUFLLEdBQUcsR0FBRyxFQUFFLFVBQVUsSUFBSSxJQUFJLENBQUM7UUFDdEMsT0FBTyxDQUFDLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELFVBQVUsQ0FBQyxHQUFvQjtRQUMzQixPQUFPLEdBQUcsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO0lBQzdCLENBQUM7Z0ZBcE5RLHNCQUFzQjs2REFBdEIsc0JBQXNCO1lDckJuQyx1RUFrRk07O1lBbEZBLGlDQUFZOzs7U0RxQkwsc0JBQXNCO3VGQUF0QixzQkFBc0I7Y0FMbEMsU0FBUzsyQkFDSSxxQkFBcUI7c0NBTXRCLE1BQU07a0JBQWQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICAgIENvbnRlbnRBbGlnbixcbiAgICBDb250ZW50SnVzdGlmeSxcbiAgICBGaWVsZCxcbiAgICBpc1RydWUsXG4gICAgUmVjb3JkLFxuICAgIFNjcmVlblNpemVNYXAsXG4gICAgU3RhdGlzdGljV2lkZ2V0TGF5b3V0Um93LFxuICAgIFRleHRDb2xvcixcbiAgICBUZXh0U2l6ZXMsXG4gICAgVmlld0ZpZWxkRGVmaW5pdGlvbixcbiAgICBWaWV3TW9kZVxufSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtGaWVsZEZsZXhib3gsIEZpZWxkRmxleGJveENvbCwgUmVjb3JkRmxleGJveENvbmZpZ30gZnJvbSAnLi9yZWNvcmQtZmxleGJveC5tb2RlbCc7XG5pbXBvcnQge0xhYmVsRGlzcGxheX0gZnJvbSAnLi4vZmllbGQtZ3JpZC9maWVsZC1ncmlkLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLXJlY29yZC1mbGV4Ym94JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcmVjb3JkLWZsZXhib3guY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgUmVjb3JkRmxleGJveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIEBJbnB1dCgpIGNvbmZpZzogUmVjb3JkRmxleGJveENvbmZpZztcblxuICAgIG1vZGU6IFZpZXdNb2RlID0gJ2RldGFpbCc7XG4gICAgcmVjb3JkOiBSZWNvcmQ7XG4gICAgbGF5b3V0OiBGaWVsZEZsZXhib3g7XG5cbiAgICBtYXhDb2x1bW5zOiBudW1iZXIgPSA0O1xuICAgIHNpemVNYXA6IFNjcmVlblNpemVNYXAgPSB7XG4gICAgICAgIGhhbmRzZXQ6IDEsXG4gICAgICAgIHRhYmxldDogMixcbiAgICAgICAgd2ViOiAzLFxuICAgICAgICB3aWRlOiA0XG4gICAgfTtcblxuICAgIHByb3RlY3RlZCBzdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5jb25maWcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZztcblxuICAgICAgICBpZiAoY29uZmlnLnJlY29yZCQpIHtcbiAgICAgICAgICAgIHRoaXMuc3Vicy5wdXNoKGNvbmZpZy5yZWNvcmQkLnN1YnNjcmliZShyZWNvcmQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVjb3JkID0gcmVjb3JkID8/IG51bGw7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnLm1vZGUkKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnMucHVzaChjb25maWcubW9kZSQuc3Vic2NyaWJlKG1vZGUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubW9kZSA9IG1vZGUgPz8gJ2RldGFpbCc7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnLmxheW91dCQpIHtcbiAgICAgICAgICAgIHRoaXMuc3Vicy5wdXNoKGNvbmZpZy5sYXlvdXQkLnN1YnNjcmliZShsYXlvdXQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubGF5b3V0ID0gbGF5b3V0ID8/IG51bGw7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgICB9XG5cblxuICAgIHB1YmxpYyBnZXRSb3dDbGFzcygpOiB7IFtrbGFzczogc3RyaW5nXTogYW55IH0ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcucm93Q2xhc3M7XG4gICAgfVxuXG4gICAgcHVibGljIGdldENvbENsYXNzKCk6IHsgW2tsYXNzOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5jb2xDbGFzcztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0U2l6ZUNsYXNzKHNpemU6IFRleHRTaXplcyk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHNpemVNYXAgPSB7XG4gICAgICAgICAgICByZWd1bGFyOiAndGV4dC1yZWd1bGFyJyxcbiAgICAgICAgICAgIG1lZGl1bTogJ3RleHQtbWVkaXVtJyxcbiAgICAgICAgICAgIGxhcmdlOiAndGV4dC1sYXJnZScsXG4gICAgICAgICAgICAneC1sYXJnZSc6ICd0ZXh0LXgtbGFyZ2UnLFxuICAgICAgICAgICAgJ3h4LWxhcmdlJzogJ3RleHQteHgtbGFyZ2UnLFxuICAgICAgICAgICAgaHVnZTogJ3RleHQtaHVnZSdcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gc2l6ZU1hcFtzaXplXSB8fCAndGV4dC1yZWd1bGFyJztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Rm9udFdlaWdodChib2xkOiBzdHJpbmcgfCBib29sZWFuKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGZvbnRXZWlnaHQgPSAnZm9udC13ZWlnaHQtbm9ybWFsJztcblxuICAgICAgICBpZiAoYm9sZCAmJiBpc1RydWUoYm9sZCkpIHtcbiAgICAgICAgICAgIGZvbnRXZWlnaHQgPSAnZm9udC13ZWlnaHQtYm9sZGVyJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb250V2VpZ2h0O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDb2xvcihjb2xvcjogVGV4dENvbG9yKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3Qgc2l6ZU1hcCA9IHtcbiAgICAgICAgICAgIHllbGxvdzogJ3RleHQteWVsbG93JyxcbiAgICAgICAgICAgIGJsdWU6ICd0ZXh0LWJsdWUnLFxuICAgICAgICAgICAgZ3JlZW46ICd0ZXh0LWdyZWVuJyxcbiAgICAgICAgICAgIHJlZDogJ3RleHQtcmVkJyxcbiAgICAgICAgICAgIHB1cnBsZTogJ3RleHQtcHVycGxlJyxcbiAgICAgICAgICAgIGRhcms6ICd0ZXh0LWRhcmsnLFxuICAgICAgICAgICAgZ3JleTogJ3RleHQtZ3JleSdcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gc2l6ZU1hcFtjb2xvcl0gfHwgJyc7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEp1c3RpZnkoanVzdGlmeTogQ29udGVudEp1c3RpZnkpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBqdXN0aWZ5TWFwID0ge1xuICAgICAgICAgICAgc3RhcnQ6ICdqdXN0aWZ5LWNvbnRlbnQtc3RhcnQnLFxuICAgICAgICAgICAgZW5kOiAnanVzdGlmeS1jb250ZW50LWVuZCcsXG4gICAgICAgICAgICBjZW50ZXI6ICdqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJyxcbiAgICAgICAgICAgIGJldHdlZW46ICdqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbicsXG4gICAgICAgICAgICBhcm91bmQ6ICdqdXN0aWZ5LWNvbnRlbnQtYXJvdW5kJ1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBqdXN0aWZ5TWFwW2p1c3RpZnldIHx8ICcnO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRBbGlnbihhbGlnbjogQ29udGVudEFsaWduKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgYWxpZ25NYXAgPSB7XG4gICAgICAgICAgICBzdGFydDogJ2FsaWduLWl0ZW1zLXN0YXJ0JyxcbiAgICAgICAgICAgIGVuZDogJ2FsaWduLWl0ZW1zLWVuZCcsXG4gICAgICAgICAgICBjZW50ZXI6ICdhbGlnbi1pdGVtcy1jZW50ZXInLFxuICAgICAgICAgICAgYmFzZWxpbmU6ICdhbGlnbi1pdGVtcy1iYXNlbGluZScsXG4gICAgICAgICAgICBzdHJldGNoOiAnYWxpZ24taXRlbXMtc3RyZXRjaCdcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gYWxpZ25NYXBbYWxpZ25dIHx8ICcnO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRMYXlvdXRSb3dDbGFzcyhyb3c6IFN0YXRpc3RpY1dpZGdldExheW91dFJvdyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAocm93ICYmIHJvdy5jbGFzcykgfHwgJyc7XG4gICAgfVxuXG4gICAgcHVibGljIGdldENsYXNzKGxheW91dENvbDogRmllbGRGbGV4Ym94Q29sKTogc3RyaW5nIHtcblxuICAgICAgICBpZiAoIWxheW91dENvbCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qga2xhc3NlcyA9IFtdO1xuICAgICAgICBrbGFzc2VzLnB1c2gobGF5b3V0Q29sLmNsYXNzIHx8ICcnKTtcbiAgICAgICAgbGF5b3V0Q29sLnNpemUgJiYga2xhc3Nlcy5wdXNoKHRoaXMuZ2V0U2l6ZUNsYXNzKGxheW91dENvbC5zaXplKSB8fCAnJyk7XG4gICAgICAgIGxheW91dENvbC5ib2xkICYmIGtsYXNzZXMucHVzaCh0aGlzLmdldEZvbnRXZWlnaHQobGF5b3V0Q29sLmJvbGQpIHx8ICcnKTtcbiAgICAgICAgbGF5b3V0Q29sLmNvbG9yICYmIGtsYXNzZXMucHVzaCh0aGlzLmdldENvbG9yKGxheW91dENvbC5jb2xvcikgfHwgJycpO1xuXG4gICAgICAgIHJldHVybiBrbGFzc2VzLmpvaW4oJyAnKTtcbiAgICB9XG5cbiAgICBnZXRMYWJlbERpc3BsYXkoY29sOiBGaWVsZEZsZXhib3hDb2wsIG1vZGU6IFZpZXdNb2RlKTogTGFiZWxEaXNwbGF5IHtcbiAgICAgICAgY29uc3QgZGlzcGxheUluTW9kZSA9IHRoaXMuc2hvdWxkTGFiZWxEaXNwbGF5SW5Nb2RlKGNvbCwgbW9kZSk7XG4gICAgICAgIGlmICghZGlzcGxheUluTW9kZSl7XG4gICAgICAgICAgICByZXR1cm4gJ25vbmUnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbC5sYWJlbERpc3BsYXkgfHwgKHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLmxhYmVsRGlzcGxheSkgfHwgJ2lubGluZSc7XG4gICAgfVxuXG4gICAgZ2V0RmllbGQocmVjb3JkOiBSZWNvcmQsIGZpZWxkOiBWaWV3RmllbGREZWZpbml0aW9uKTogRmllbGQge1xuICAgICAgICBpZiAoIWZpZWxkIHx8ICFmaWVsZC5uYW1lIHx8ICFyZWNvcmQgfHwgIXJlY29yZC5maWVsZHMpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlY29yZC5maWVsZHNbZmllbGQubmFtZV0gPz8gbnVsbDtcbiAgICB9XG5cbiAgICBnZXRGaWVsZENsYXNzKGNvbDogRmllbGRGbGV4Ym94Q29sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XG4gICAgICAgIGxldCBrbGFzc2VzID0gdGhpcy5jb25maWcuaW5wdXRDbGFzcyB8fCB7fSBhcyB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xuXG4gICAgICAgIGlmIChjb2wuaW5wdXRDbGFzcykge1xuICAgICAgICAgICAga2xhc3Nlc1tjb2wuaW5wdXRDbGFzc10gPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGtsYXNzZXM7XG4gICAgfVxuXG4gICAgZ2V0TGFiZWxDbGFzcyhjb2w6IEZpZWxkRmxleGJveENvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xuICAgICAgICBsZXQga2xhc3NlcyA9IHRoaXMuY29uZmlnLmxhYmVsQ2xhc3MgfHwge30gYXMgeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcblxuICAgICAgICBpZiAoY29sLmxhYmVsQ2xhc3MpIHtcbiAgICAgICAgICAgIGtsYXNzZXNbY29sLmxhYmVsQ2xhc3NdID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGtsYXNzZXM7XG4gICAgfVxuXG4gICAgc2hvdWxkRGlzcGxheShjb2w6IEZpZWxkRmxleGJveENvbCwgZmllbGQ6IEZpZWxkLCBtb2RlOiBWaWV3TW9kZSkge1xuXG4gICAgICAgIGNvbnN0IGRpc3BsYXlJbk1vZGUgPSB0aGlzLnNob3VsZEZpZWxkRGlzcGxheUluTW9kZShjb2wsIG1vZGUpO1xuXG4gICAgICAgIGlmICghZGlzcGxheUluTW9kZSl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWNvbC5oaWRlSWZFbXB0eSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaGFzVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgaGFzVmFsdWUgPSBoYXNWYWx1ZSB8fCAhIWZpZWxkLnZhbHVlO1xuICAgICAgICBoYXNWYWx1ZSA9IGhhc1ZhbHVlIHx8ICEhKGZpZWxkLnZhbHVlTGlzdCAmJiBmaWVsZC52YWx1ZUxpc3QubGVuZ3RoKTtcbiAgICAgICAgaGFzVmFsdWUgPSBoYXNWYWx1ZSB8fCAhIShmaWVsZC52YWx1ZU9iamVjdCAmJiBPYmplY3Qua2V5cyhmaWVsZC52YWx1ZU9iamVjdCkubGVuZ3RoKTtcblxuICAgICAgICByZXR1cm4gaGFzVmFsdWU7XG4gICAgfVxuXG4gICAgc2hvdWxkQ29sRGlzcGxheUluTW9kZShjb2w6IEZpZWxkRmxleGJveENvbCwgbW9kZTogVmlld01vZGUpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hvdWxkRmllbGREaXNwbGF5SW5Nb2RlKGNvbCwgbW9kZSkgfHwgdGhpcy5zaG91bGRMYWJlbERpc3BsYXlJbk1vZGUoY29sLCBtb2RlKTtcbiAgICB9XG5cbiAgICBzaG91bGRGaWVsZERpc3BsYXlJbk1vZGUoY29sOiBGaWVsZEZsZXhib3hDb2wsIG1vZGU6IFZpZXdNb2RlKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IG1vZGVzID0gY29sPy5tb2RlcyA/PyBudWxsO1xuICAgICAgICByZXR1cm4gIShtb2RlcyAmJiBtb2Rlcy5sZW5ndGggJiYgIW1vZGVzLmluY2x1ZGVzKG1vZGUpKTtcbiAgICB9XG5cbiAgICBzaG91bGRMYWJlbERpc3BsYXlJbk1vZGUoY29sOiBGaWVsZEZsZXhib3hDb2wsIG1vZGU6IFZpZXdNb2RlKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IG1vZGVzID0gY29sPy5sYWJlbE1vZGVzID8/IG51bGw7XG4gICAgICAgIHJldHVybiAhKG1vZGVzICYmIG1vZGVzLmxlbmd0aCAmJiAhbW9kZXMuaW5jbHVkZXMobW9kZSkpO1xuICAgIH1cblxuICAgIGdldERpc3BsYXkoY29sOiBGaWVsZEZsZXhib3hDb2wpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gY29sLmRpc3BsYXkgfHwgJyc7XG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuXG48ZGl2ICpuZ0lmPVwiY29uZmlnXCIgY2xhc3M9XCJkLWZsZXgge3soKGNvbmZpZyAmJiBjb25maWcuZmxleERpcmVjdGlvbikgPyBjb25maWcuZmxleERpcmVjdGlvbiA6ICdmbGV4LWNvbHVtbicgKSB8fCAnJ319IHt7KGNvbmZpZyAmJiBjb25maWcua2xhc3MpIHx8ICcnfX1cIiAgID5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibGF5b3V0ICYmIGxheW91dC5yb3dzXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgbGF5b3V0LnJvd3NcIj5cblxuICAgICAgICAgICAgPGRpdiBbbmdDbGFzc109XCJjb25maWcucm93Q2xhc3MgPz8gbnVsbFwiXG4gICAgICAgICAgICAgICAgIGNsYXNzPVwiZC1mbGV4IHJlY29yZC1mbGV4Ym94LXJvdyB7e2dldEp1c3RpZnkoaXRlbS5qdXN0aWZ5KX19IHt7Z2V0QWxpZ24oaXRlbS5hbGlnbil9fSB7e2dldExheW91dFJvd0NsYXNzKGl0ZW0pfX1cIj5cblxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGNvbCBvZiBpdGVtLmNvbHNcIj5cblxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJjb2wuZGlzcGxheSAhPT0gJ2hpZGRlbicgJiYgc2hvdWxkQ29sRGlzcGxheUluTW9kZShjb2wsIG1vZGUpXCJcbiAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImNvbmZpZy5jb2xDbGFzcyA/PyBudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicmVjb3JkLWZsZXhib3gtY29sIHt7Z2V0Q2xhc3MoY29sKX19XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbC5kaXNwbGF5ICE9PSAnaGlkZGVuJyAmJiBzaG91bGRDb2xEaXNwbGF5SW5Nb2RlKGNvbCwgbW9kZSlcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBbY2xhc3MuYWxpZ24taXRlbXMtY2VudGVyXT1cImdldExhYmVsRGlzcGxheShjb2wsIG1vZGUpID09PSAnaW5saW5lJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzcy5mbGV4LWNvbHVtbl09XCJnZXRMYWJlbERpc3BsYXkoY29sLCBtb2RlKSA9PT0gJ3RvcCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3MuZmxleC1yb3ddPVwiZ2V0TGFiZWxEaXNwbGF5KGNvbCwgbW9kZSkgPT09ICdpbmxpbmUnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmp1c3RpZnktY29udGVudC1lbmRdPVwiIWNvbC5maWVsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZC1mbGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwicmVjb3JkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJnZXRGaWVsZChyZWNvcmQsIGNvbC5maWVsZCkgYXMgZmllbGRcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNob3VsZERpc3BsYXkoY29sLCBmaWVsZCwgbW9kZSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZ2V0TGFiZWxEaXNwbGF5KGNvbCwgbW9kZSkgIT09ICdub25lJ1wiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzcy5wci0zXT1cImdldExhYmVsRGlzcGxheShjb2wsIG1vZGUpID09PSAnaW5saW5lJyAmJiBnZXREaXNwbGF5KGNvbCkgIT09ICdub25lJ1wiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgKm5nSWY9XCJmaWVsZC5sYWJlbFwiIFtuZ0NsYXNzXT1cImdldExhYmVsQ2xhc3MoY29sKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ZmllbGQubGFiZWx9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tbGFiZWwgKm5nSWY9XCIhZmllbGQubGFiZWwgJiYgZmllbGQubGFiZWxLZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xhYmVsS2V5XT1cImZpZWxkLmxhYmVsS2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImdldExhYmVsQ2xhc3MoY29sKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zY3JtLWxhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1keW5hbWljLWxhYmVsICpuZ0lmPVwiZmllbGQuZHluYW1pY0xhYmVsS2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xhYmVsS2V5XT1cImZpZWxkLmR5bmFtaWNMYWJlbEtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmaWVsZHNdPVwicmVjb3JkLmZpZWxkc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zY3JtLWR5bmFtaWMtbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZ2V0RGlzcGxheShjb2wpICE9PSAnbm9uZSdcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFtjbGFzcy5mbGV4LWdyb3ctMV09XCJnZXRMYWJlbERpc3BsYXkoY29sLCBtb2RlKSA9PT0gJ2lubGluZSdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWZpZWxkIFtmaWVsZF09XCJmaWVsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBba2xhc3NdPVwiZ2V0RmllbGRDbGFzcyhjb2wpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttb2RlXT1cIm1vZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3JlY29yZF09XCJyZWNvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3R5cGVdPVwiZmllbGQudHlwZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zY3JtLWZpZWxkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29sLmFjdGlvblNsb3QgJiYgdGhpcy5jb25maWcuYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1hY3Rpb24tZ3JvdXAtbWVudSBbYnV0dG9uQ2xhc3NdPVwiY29uZmlnLmJ1dHRvbkNsYXNzID8/ICcnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2J1dHRvbkdyb3VwQ2xhc3NdPVwiY29uZmlnLmJ1dHRvbkdyb3VwQ2xhc3MgPz8gJydcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29uZmlnXT1cImNvbmZpZy5hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2NybS1hY3Rpb24tZ3JvdXAtbWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9uZy1jb250YWluZXI+XG48L2Rpdj5cbiJdfQ==