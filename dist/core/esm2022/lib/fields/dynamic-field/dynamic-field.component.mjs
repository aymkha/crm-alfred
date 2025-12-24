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
import { Component, HostBinding, Input } from '@angular/core';
import { EDITABLE_VIEW_MODES } from 'common';
import * as i0 from "@angular/core";
import * as i1 from "../../services/navigation/module-navigation/module-navigation.service";
import * as i2 from "../../services/navigation/module-name-mapper/module-name-mapper.service";
import * as i3 from "@angular/router";
import * as i4 from "../../services/language/dynamic-label.service";
import * as i5 from "../../services/navigation/link-route-async-action/link-route-async-action.service";
import * as i6 from "@angular/common";
import * as i7 from "../../components/dynamic-label/dynamic-label.component";
import * as i8 from "ng-dynamic-component";
const _c0 = function (a0, a1, a2, a3, a4) { return { "mode": a0, "field": a1, "klass": a2, "record": a3, "parent": a4 }; };
function DynamicFieldComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 1);
    i0.ɵɵlistener("click", function DynamicFieldComponent_ng_container_0_ng_container_1_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r6.onClick()); });
    i0.ɵɵelement(2, "ndc-dynamic", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ndcDynamicComponent", ctx_r3.componentType)("ndcDynamicInputs", i0.ɵɵpureFunction5(2, _c0, ctx_r3.mode, ctx_r3.field, ctx_r3.klass, ctx_r3.record, ctx_r3.parent));
} }
function DynamicFieldComponent_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 3);
    i0.ɵɵelement(2, "ndc-dynamic", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", ctx_r4.getLink());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ndcDynamicComponent", ctx_r4.componentType)("ndcDynamicInputs", i0.ɵɵpureFunction5(3, _c0, ctx_r4.mode, ctx_r4.field, ctx_r4.klass, ctx_r4.record, ctx_r4.parent));
} }
function DynamicFieldComponent_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "ndc-dynamic", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ndcDynamicComponent", ctx_r5.componentType)("ndcDynamicInputs", i0.ɵɵpureFunction5(2, _c0, ctx_r5.mode, ctx_r5.field, ctx_r5.klass, ctx_r5.record, ctx_r5.parent));
} }
function DynamicFieldComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DynamicFieldComponent_ng_container_0_ng_container_1_Template, 3, 8, "ng-container", 0);
    i0.ɵɵtemplate(2, DynamicFieldComponent_ng_container_0_ng_container_2_Template, 3, 9, "ng-container", 0);
    i0.ɵɵtemplate(3, DynamicFieldComponent_ng_container_0_ng_container_3_Template, 2, 8, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.hasOnClick());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.isLink() && !ctx_r0.hasOnClick());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.isLink() && !ctx_r0.hasOnClick());
} }
function DynamicFieldComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 4);
    i0.ɵɵelement(2, "div", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
const _c1 = function (a0) { return { field: a0 }; };
function DynamicFieldComponent_ng_container_2_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelement(1, "scrm-dynamic-label", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r9 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("context", ctx_r9.getMessageContext(item_r10.value, ctx_r9.record))("fields", i0.ɵɵpureFunction1(3, _c1, ctx_r9.field))("labelKey", ctx_r9.getMessageLabelKey(item_r10.value));
} }
function DynamicFieldComponent_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DynamicFieldComponent_ng_container_2_ng_container_1_div_1_Template, 2, 5, "div", 6);
    i0.ɵɵpipe(2, "keyvalue");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r8.field.formControl.errors));
} }
function DynamicFieldComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DynamicFieldComponent_ng_container_2_ng_container_1_Template, 3, 3, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.field.formControl.invalid && ctx_r2.field.formControl.touched);
} }
class DynamicFieldComponent {
    navigation;
    moduleNameMapper;
    router;
    dynamicLabelService;
    linkRouteAsyncActionService;
    cd;
    mode;
    type;
    field;
    record = null;
    parent = null;
    klass = null;
    componentType;
    class = 'dynamic-field';
    constructor(navigation, moduleNameMapper, router, dynamicLabelService, linkRouteAsyncActionService, cd) {
        this.navigation = navigation;
        this.moduleNameMapper = moduleNameMapper;
        this.router = router;
        this.dynamicLabelService = dynamicLabelService;
        this.linkRouteAsyncActionService = linkRouteAsyncActionService;
        this.cd = cd;
    }
    get getRelateLink() {
        let linkModule = this.field.definition.module;
        if (this.field.definition.type_name === 'parent_type') {
            linkModule = this.record.attributes.parent_type;
        }
        if (this.field.definition.id_name && linkModule) {
            const moduleName = this.moduleNameMapper.toFrontend(linkModule);
            return this.navigation.getRecordRouterLink(moduleName, this.record.attributes[this.field.definition.id_name]);
        }
        return '';
    }
    ngOnInit() {
        this.setHostClass();
        this.cd.detectChanges();
    }
    isLink() {
        if (EDITABLE_VIEW_MODES.includes(this.mode)) {
            return false;
        }
        if (!this.field || !this.record) {
            return false;
        }
        if (this.type === 'relate') {
            return true;
        }
        return !!(this?.field?.metadata && this?.field?.metadata?.link);
    }
    hasOnClick() {
        const fieldMetadata = this?.field?.metadata ?? {};
        const linkAsyncAction = fieldMetadata?.linkAsyncAction ?? null;
        const linkOnClick = fieldMetadata?.onClick ?? null;
        return !!(linkAsyncAction || linkOnClick);
    }
    isEdit() {
        return this.mode === 'edit' || this.mode === 'filter';
    }
    getLink() {
        if (this.type === 'relate') {
            return this.getRelateLink;
        }
        const fieldMetadata = this?.field?.metadata ?? null;
        const linkRoute = fieldMetadata.linkRoute ?? null;
        if (fieldMetadata && linkRoute) {
            return this.dynamicLabelService.parse(linkRoute, {}, this.record.fields);
        }
        return this.navigation.getRecordRouterLink(this.record.module, this.record.id);
    }
    getMessageContext(item, record) {
        const context = item && item.message && item.message.context || {};
        context.module = (record && record.module) || '';
        return context;
    }
    getMessageLabelKey(item) {
        return (item && item.message && item.message.labelKey) || '';
    }
    onClick() {
        const fieldMetadata = this?.field?.metadata ?? null;
        if (fieldMetadata && fieldMetadata.onClick) {
            this.field.metadata.onClick(this.field, this.record);
            return;
        }
        const linkAsyncAction = fieldMetadata.linkAsyncAction ?? null;
        if (fieldMetadata && linkAsyncAction) {
            this.linkRouteAsyncActionService.run(linkAsyncAction, this.field, this.record);
            return;
        }
        this.router.navigateByUrl(this.getLink()).then();
        return false;
    }
    setHostClass() {
        const classes = [];
        classes.push('dynamic-field');
        if (this.mode) {
            classes.push('dynamic-field-mode-' + this.mode);
        }
        if (this.type) {
            classes.push('dynamic-field-type-' + this.type);
        }
        if (this.field && this.field.name) {
            classes.push('dynamic-field-name-' + this.field.name);
        }
        this.class = classes.join(' ');
    }
    static ɵfac = function DynamicFieldComponent_Factory(t) { return new (t || DynamicFieldComponent)(i0.ɵɵdirectiveInject(i1.ModuleNavigation), i0.ɵɵdirectiveInject(i2.ModuleNameMapper), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i4.DynamicLabelService), i0.ɵɵdirectiveInject(i5.LinkRouteAsyncActionService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DynamicFieldComponent, selectors: [["scrm-dynamic-field"]], hostVars: 2, hostBindings: function DynamicFieldComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassMap(ctx.class);
        } }, inputs: { mode: "mode", type: "type", field: "field", record: "record", parent: "parent", klass: "klass", componentType: "componentType" }, decls: 3, vars: 3, consts: [[4, "ngIf"], [1, "clickable", "field-link", 3, "click"], [3, "ndcDynamicComponent", "ndcDynamicInputs"], [1, "field-link", 3, "routerLink"], [1, "dynamic-field"], [1, "flex-grow-1", "text-break", "rounded", "box-loading", "skeleton-field-content"], ["class", "invalid-feedback d-block", 4, "ngFor", "ngForOf"], [1, "invalid-feedback", "d-block"], [3, "context", "fields", "labelKey"]], template: function DynamicFieldComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, DynamicFieldComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
            i0.ɵɵtemplate(1, DynamicFieldComponent_ng_container_1_Template, 3, 0, "ng-container", 0);
            i0.ɵɵtemplate(2, DynamicFieldComponent_ng_container_2_Template, 2, 1, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.field.loading);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.field.loading);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.isEdit() && ctx.field.formControl && ctx.field.formControl.errors);
        } }, dependencies: [i6.NgForOf, i6.NgIf, i3.RouterLink, i7.DynamicLabelComponent, i8.DynamicIoDirective, i8.DynamicComponent, i6.KeyValuePipe], encapsulation: 2 });
}
export { DynamicFieldComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DynamicFieldComponent, [{
        type: Component,
        args: [{ selector: 'scrm-dynamic-field', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"!field.loading\">\n    <ng-container *ngIf=\"hasOnClick()\">\n        <a (click)=\"onClick()\" class=\"clickable field-link\">\n            <ndc-dynamic\n                [ndcDynamicComponent]=\"componentType\"\n                [ndcDynamicInputs]=\"{\n                'mode': mode,\n                'field': field,\n                'klass': klass,\n                'record': record,\n                'parent': parent\n            }\"\n            ></ndc-dynamic>\n        </a>\n    </ng-container>\n    <ng-container *ngIf=\"isLink() && !hasOnClick()\">\n        <a [routerLink]=\"getLink()\" class=\"field-link\">\n            <ndc-dynamic\n                [ndcDynamicComponent]=\"componentType\"\n                [ndcDynamicInputs]=\"{\n                'mode': mode,\n                'field': field,\n                'klass': klass,\n                'record': record,\n                'parent': parent\n            }\"\n            ></ndc-dynamic>\n        </a>\n    </ng-container>\n    <ng-container *ngIf=\"!isLink() && !hasOnClick()\">\n        <ndc-dynamic\n            [ndcDynamicComponent]=\"componentType\"\n            [ndcDynamicInputs]=\"{\n            'mode': mode,\n            'field': field,\n            'klass': klass,\n            'record': record,\n            'parent': parent\n        }\"\n        ></ndc-dynamic>\n    </ng-container>\n</ng-container>\n\n<ng-container *ngIf=\"field.loading\">\n   <div class= \"dynamic-field\">\n        <div class=\"flex-grow-1 text-break rounded box-loading skeleton-field-content\"></div>\n   </div>\n</ng-container>\n\n<ng-container *ngIf=\"isEdit() && field.formControl && field.formControl.errors\">\n    <ng-container *ngIf=\"field.formControl.invalid && field.formControl.touched\">\n        <div *ngFor=\"let item of field.formControl.errors | keyvalue\" class=\"invalid-feedback d-block\">\n            <scrm-dynamic-label [context]=\"getMessageContext(item.value, record)\"\n                                [fields]=\"{field: field}\"\n                                [labelKey]=\"getMessageLabelKey(item.value)\">\n            </scrm-dynamic-label>\n        </div>\n    </ng-container>\n</ng-container>\n" }]
    }], function () { return [{ type: i1.ModuleNavigation }, { type: i2.ModuleNameMapper }, { type: i3.Router }, { type: i4.DynamicLabelService }, { type: i5.LinkRouteAsyncActionService }, { type: i0.ChangeDetectorRef }]; }, { mode: [{
            type: Input,
            args: ['mode']
        }], type: [{
            type: Input,
            args: ['type']
        }], field: [{
            type: Input,
            args: ['field']
        }], record: [{
            type: Input,
            args: ['record']
        }], parent: [{
            type: Input,
            args: ['parent']
        }], klass: [{
            type: Input,
            args: ['klass']
        }], componentType: [{
            type: Input,
            args: ['componentType']
        }], class: [{
            type: HostBinding,
            args: ['class']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL2R5bmFtaWMtZmllbGQvZHluYW1pYy1maWVsZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL2R5bmFtaWMtZmllbGQvZHluYW1pYy1maWVsZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFvQixTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQUMsbUJBQW1CLEVBQXFDLE1BQU0sUUFBUSxDQUFDOzs7Ozs7Ozs7Ozs7O0lDQzNFLDZCQUFtQztJQUMvQiw0QkFBb0Q7SUFBakQsc0xBQVMsZUFBQSxnQkFBUyxDQUFBLElBQUM7SUFDbEIsaUNBU2U7SUFDbkIsaUJBQUk7SUFDUiwwQkFBZTs7O0lBVkgsZUFBcUM7SUFBckMsMERBQXFDLHVIQUFBOzs7SUFXakQsNkJBQWdEO0lBQzVDLDRCQUErQztJQUMzQyxpQ0FTZTtJQUNuQixpQkFBSTtJQUNSLDBCQUFlOzs7SUFaUixlQUF3QjtJQUF4Qiw2Q0FBd0I7SUFFbkIsZUFBcUM7SUFBckMsMERBQXFDLHVIQUFBOzs7SUFXakQsNkJBQWlEO0lBQzdDLGlDQVNlO0lBQ25CLDBCQUFlOzs7SUFUUCxlQUFxQztJQUFyQywwREFBcUMsdUhBQUE7OztJQS9CakQsNkJBQXFDO0lBQ2pDLHVHQWFlO0lBQ2YsdUdBYWU7SUFDZix1R0FXZTtJQUNuQiwwQkFBZTs7O0lBeENJLGVBQWtCO0lBQWxCLDBDQUFrQjtJQWNsQixlQUErQjtJQUEvQiw4REFBK0I7SUFjL0IsZUFBZ0M7SUFBaEMsK0RBQWdDOzs7SUFjbkQsNkJB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QUFJLENBQUMsQ0FBQTtTQUNsRDtRQUVELElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtZQUMvQixPQUFPLENBQUMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDeEQ7UUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkMsQ0FBQzsrRUF2SVEscUJBQXFCOzZEQUFyQixxQkFBcUI7OztZQ2RsQyx3RkF5Q2U7WUFFZix3RkFJZTtZQUVmLHdGQVNlOztZQTFEQSx5Q0FBb0I7WUEyQ3BCLGVBQW1CO1lBQW5CLHdDQUFtQjtZQU1uQixlQUErRDtZQUEvRCw0RkFBK0Q7OztTRG5DakUscUJBQXFCO3VGQUFyQixxQkFBcUI7Y0FMakMsU0FBUzsyQkFDSSxvQkFBb0I7bU9BTWYsSUFBSTtrQkFBbEIsS0FBSzttQkFBQyxNQUFNO1lBQ0UsSUFBSTtrQkFBbEIsS0FBSzttQkFBQyxNQUFNO1lBQ0csS0FBSztrQkFBcEIsS0FBSzttQkFBQyxPQUFPO1lBQ0csTUFBTTtrQkFBdEIsS0FBSzttQkFBQyxRQUFRO1lBQ0UsTUFBTTtrQkFBdEIsS0FBSzttQkFBQyxRQUFRO1lBQ0MsS0FBSztrQkFBcEIsS0FBSzttQkFBQyxPQUFPO1lBQ1UsYUFBYTtrQkFBcEMsS0FBSzttQkFBQyxlQUFlO1lBRUEsS0FBSztrQkFBMUIsV0FBVzttQkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25Jbml0LCBUeXBlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RURJVEFCTEVfVklFV19NT0RFUywgRmllbGQsIFJlY29yZCwgU3RyaW5nTWFwLCBWaWV3TW9kZX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtNb2R1bGVOYW1lTWFwcGVyfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL21vZHVsZS1uYW1lLW1hcHBlci9tb2R1bGUtbmFtZS1tYXBwZXIuc2VydmljZSc7XG5pbXBvcnQge01vZHVsZU5hdmlnYXRpb259IGZyb20gJy4uLy4uL3NlcnZpY2VzL25hdmlnYXRpb24vbW9kdWxlLW5hdmlnYXRpb24vbW9kdWxlLW5hdmlnYXRpb24uc2VydmljZSc7XG5pbXBvcnQge0R5bmFtaWNMYWJlbFNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xhbmd1YWdlL2R5bmFtaWMtbGFiZWwuc2VydmljZSc7XG5pbXBvcnQge1xuICAgIExpbmtSb3V0ZUFzeW5jQWN0aW9uU2VydmljZVxufSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL2xpbmstcm91dGUtYXN5bmMtYWN0aW9uL2xpbmstcm91dGUtYXN5bmMtYWN0aW9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tZHluYW1pYy1maWVsZCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2R5bmFtaWMtZmllbGQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW11cbn0pXG5leHBvcnQgY2xhc3MgRHluYW1pY0ZpZWxkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgnbW9kZScpIG1vZGU6IHN0cmluZztcbiAgICBASW5wdXQoJ3R5cGUnKSB0eXBlOiBzdHJpbmc7XG4gICAgQElucHV0KCdmaWVsZCcpIGZpZWxkOiBGaWVsZDtcbiAgICBASW5wdXQoJ3JlY29yZCcpIHJlY29yZDogUmVjb3JkID0gbnVsbDtcbiAgICBASW5wdXQoJ3BhcmVudCcpIHBhcmVudDogUmVjb3JkID0gbnVsbDtcbiAgICBASW5wdXQoJ2tsYXNzJykga2xhc3M6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSBudWxsO1xuICAgIEBJbnB1dCgnY29tcG9uZW50VHlwZScpIGNvbXBvbmVudFR5cGU6IFR5cGU8YW55PjtcblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MnKSBjbGFzcyA9ICdkeW5hbWljLWZpZWxkJztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgbmF2aWdhdGlvbjogTW9kdWxlTmF2aWdhdGlvbixcbiAgICAgICAgcHJvdGVjdGVkIG1vZHVsZU5hbWVNYXBwZXI6IE1vZHVsZU5hbWVNYXBwZXIsXG4gICAgICAgIHByb3RlY3RlZCByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJvdGVjdGVkIGR5bmFtaWNMYWJlbFNlcnZpY2U6IER5bmFtaWNMYWJlbFNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBsaW5rUm91dGVBc3luY0FjdGlvblNlcnZpY2U6IExpbmtSb3V0ZUFzeW5jQWN0aW9uU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgICApIHtcbiAgICB9XG5cbiAgICBnZXQgZ2V0UmVsYXRlTGluaygpOiBzdHJpbmcge1xuICAgICAgICBsZXQgbGlua01vZHVsZSA9IHRoaXMuZmllbGQuZGVmaW5pdGlvbi5tb2R1bGU7XG5cbiAgICAgICAgaWYgKHRoaXMuZmllbGQuZGVmaW5pdGlvbi50eXBlX25hbWUgPT09ICdwYXJlbnRfdHlwZScpIHtcbiAgICAgICAgICAgIGxpbmtNb2R1bGUgPSB0aGlzLnJlY29yZC5hdHRyaWJ1dGVzLnBhcmVudF90eXBlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZmllbGQuZGVmaW5pdGlvbi5pZF9uYW1lICYmIGxpbmtNb2R1bGUpIHtcbiAgICAgICAgICAgIGNvbnN0IG1vZHVsZU5hbWUgPSB0aGlzLm1vZHVsZU5hbWVNYXBwZXIudG9Gcm9udGVuZChsaW5rTW9kdWxlKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5hdmlnYXRpb24uZ2V0UmVjb3JkUm91dGVyTGluayhcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lLFxuICAgICAgICAgICAgICAgIHRoaXMucmVjb3JkLmF0dHJpYnV0ZXNbdGhpcy5maWVsZC5kZWZpbml0aW9uLmlkX25hbWVdXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNldEhvc3RDbGFzcygpO1xuICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBpc0xpbmsoKTogYm9vbGVhbiB7XG5cbiAgICAgICAgaWYgKEVESVRBQkxFX1ZJRVdfTU9ERVMuaW5jbHVkZXModGhpcy5tb2RlIGFzIFZpZXdNb2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmZpZWxkIHx8ICF0aGlzLnJlY29yZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ3JlbGF0ZScpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhKHRoaXM/LmZpZWxkPy5tZXRhZGF0YSAmJiB0aGlzPy5maWVsZD8ubWV0YWRhdGE/LmxpbmspO1xuICAgIH1cblxuICAgIGhhc09uQ2xpY2soKTogYm9vbGVhbiB7XG5cbiAgICAgICAgY29uc3QgZmllbGRNZXRhZGF0YSA9IHRoaXM/LmZpZWxkPy5tZXRhZGF0YSA/PyB7fTtcbiAgICAgICAgY29uc3QgbGlua0FzeW5jQWN0aW9uID0gZmllbGRNZXRhZGF0YT8ubGlua0FzeW5jQWN0aW9uID8/IG51bGw7XG4gICAgICAgIGNvbnN0IGxpbmtPbkNsaWNrID0gZmllbGRNZXRhZGF0YT8ub25DbGljayA/PyBudWxsO1xuXG4gICAgICAgIHJldHVybiAhIShsaW5rQXN5bmNBY3Rpb24gfHwgbGlua09uQ2xpY2spO1xuICAgIH1cblxuICAgIGlzRWRpdCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZSA9PT0gJ2VkaXQnIHx8IHRoaXMubW9kZSA9PT0gJ2ZpbHRlcic7XG4gICAgfVxuXG4gICAgZ2V0TGluaygpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy50eXBlID09PSAncmVsYXRlJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmVsYXRlTGluaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpZWxkTWV0YWRhdGEgPSB0aGlzPy5maWVsZD8ubWV0YWRhdGEgPz8gbnVsbDtcbiAgICAgICAgY29uc3QgbGlua1JvdXRlID0gZmllbGRNZXRhZGF0YS5saW5rUm91dGUgPz8gbnVsbDtcbiAgICAgICAgaWYgKGZpZWxkTWV0YWRhdGEgJiYgbGlua1JvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5keW5hbWljTGFiZWxTZXJ2aWNlLnBhcnNlKGxpbmtSb3V0ZSwge30sIHRoaXMucmVjb3JkLmZpZWxkcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5uYXZpZ2F0aW9uLmdldFJlY29yZFJvdXRlckxpbmsodGhpcy5yZWNvcmQubW9kdWxlLCB0aGlzLnJlY29yZC5pZCk7XG4gICAgfVxuXG4gICAgZ2V0TWVzc2FnZUNvbnRleHQoaXRlbTogYW55LCByZWNvcmQ6IFJlY29yZCk6IFN0cmluZ01hcCB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBpdGVtICYmIGl0ZW0ubWVzc2FnZSAmJiBpdGVtLm1lc3NhZ2UuY29udGV4dCB8fCB7fTtcbiAgICAgICAgY29udGV4dC5tb2R1bGUgPSAocmVjb3JkICYmIHJlY29yZC5tb2R1bGUpIHx8ICcnO1xuXG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH1cblxuICAgIGdldE1lc3NhZ2VMYWJlbEtleShpdGVtOiBhbnkpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gKGl0ZW0gJiYgaXRlbS5tZXNzYWdlICYmIGl0ZW0ubWVzc2FnZS5sYWJlbEtleSkgfHwgJyc7XG4gICAgfVxuXG4gICAgb25DbGljaygpOiBib29sZWFuIHtcblxuICAgICAgICBjb25zdCBmaWVsZE1ldGFkYXRhID0gdGhpcz8uZmllbGQ/Lm1ldGFkYXRhID8/IG51bGw7XG4gICAgICAgIGlmIChmaWVsZE1ldGFkYXRhICYmIGZpZWxkTWV0YWRhdGEub25DbGljaykge1xuICAgICAgICAgICAgdGhpcy5maWVsZC5tZXRhZGF0YS5vbkNsaWNrKHRoaXMuZmllbGQsIHRoaXMucmVjb3JkKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxpbmtBc3luY0FjdGlvbiA9IGZpZWxkTWV0YWRhdGEubGlua0FzeW5jQWN0aW9uID8/IG51bGw7XG4gICAgICAgIGlmIChmaWVsZE1ldGFkYXRhICYmIGxpbmtBc3luY0FjdGlvbikge1xuICAgICAgICAgICAgdGhpcy5saW5rUm91dGVBc3luY0FjdGlvblNlcnZpY2UucnVuKGxpbmtBc3luY0FjdGlvbiwgdGhpcy5maWVsZCwgdGhpcy5yZWNvcmQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCh0aGlzLmdldExpbmsoKSkudGhlbigpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEhvc3RDbGFzcygpIHtcbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IFtdO1xuICAgICAgICBjbGFzc2VzLnB1c2goJ2R5bmFtaWMtZmllbGQnKTtcblxuICAgICAgICBpZiAodGhpcy5tb2RlKSB7XG4gICAgICAgICAgICBjbGFzc2VzLnB1c2goJ2R5bmFtaWMtZmllbGQtbW9kZS0nICsgdGhpcy5tb2RlKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudHlwZSkge1xuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKCdkeW5hbWljLWZpZWxkLXR5cGUtJyArIHRoaXMudHlwZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmZpZWxkICYmIHRoaXMuZmllbGQubmFtZSkge1xuICAgICAgICAgICAgY2xhc3Nlcy5wdXNoKCdkeW5hbWljLWZpZWxkLW5hbWUtJyArIHRoaXMuZmllbGQubmFtZSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2xhc3MgPSBjbGFzc2VzLmpvaW4oJyAnKTtcbiAgICB9XG5cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxuZy1jb250YWluZXIgKm5nSWY9XCIhZmllbGQubG9hZGluZ1wiPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJoYXNPbkNsaWNrKClcIj5cbiAgICAgICAgPGEgKGNsaWNrKT1cIm9uQ2xpY2soKVwiIGNsYXNzPVwiY2xpY2thYmxlIGZpZWxkLWxpbmtcIj5cbiAgICAgICAgICAgIDxuZGMtZHluYW1pY1xuICAgICAgICAgICAgICAgIFtuZGNEeW5hbWljQ29tcG9uZW50XT1cImNvbXBvbmVudFR5cGVcIlxuICAgICAgICAgICAgICAgIFtuZGNEeW5hbWljSW5wdXRzXT1cIntcbiAgICAgICAgICAgICAgICAnbW9kZSc6IG1vZGUsXG4gICAgICAgICAgICAgICAgJ2ZpZWxkJzogZmllbGQsXG4gICAgICAgICAgICAgICAgJ2tsYXNzJzoga2xhc3MsXG4gICAgICAgICAgICAgICAgJ3JlY29yZCc6IHJlY29yZCxcbiAgICAgICAgICAgICAgICAncGFyZW50JzogcGFyZW50XG4gICAgICAgICAgICB9XCJcbiAgICAgICAgICAgID48L25kYy1keW5hbWljPlxuICAgICAgICA8L2E+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzTGluaygpICYmICFoYXNPbkNsaWNrKClcIj5cbiAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiZ2V0TGluaygpXCIgY2xhc3M9XCJmaWVsZC1saW5rXCI+XG4gICAgICAgICAgICA8bmRjLWR5bmFtaWNcbiAgICAgICAgICAgICAgICBbbmRjRHluYW1pY0NvbXBvbmVudF09XCJjb21wb25lbnRUeXBlXCJcbiAgICAgICAgICAgICAgICBbbmRjRHluYW1pY0lucHV0c109XCJ7XG4gICAgICAgICAgICAgICAgJ21vZGUnOiBtb2RlLFxuICAgICAgICAgICAgICAgICdmaWVsZCc6IGZpZWxkLFxuICAgICAgICAgICAgICAgICdrbGFzcyc6IGtsYXNzLFxuICAgICAgICAgICAgICAgICdyZWNvcmQnOiByZWNvcmQsXG4gICAgICAgICAgICAgICAgJ3BhcmVudCc6IHBhcmVudFxuICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICA+PC9uZGMtZHluYW1pYz5cbiAgICAgICAgPC9hPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNMaW5rKCkgJiYgIWhhc09uQ2xpY2soKVwiPlxuICAgICAgICA8bmRjLWR5bmFtaWNcbiAgICAgICAgICAgIFtuZGNEeW5hbWljQ29tcG9uZW50XT1cImNvbXBvbmVudFR5cGVcIlxuICAgICAgICAgICAgW25kY0R5bmFtaWNJbnB1dHNdPVwie1xuICAgICAgICAgICAgJ21vZGUnOiBtb2RlLFxuICAgICAgICAgICAgJ2ZpZWxkJzogZmllbGQsXG4gICAgICAgICAgICAna2xhc3MnOiBrbGFzcyxcbiAgICAgICAgICAgICdyZWNvcmQnOiByZWNvcmQsXG4gICAgICAgICAgICAncGFyZW50JzogcGFyZW50XG4gICAgICAgIH1cIlxuICAgICAgICA+PC9uZGMtZHluYW1pYz5cbiAgICA8L25nLWNvbnRhaW5lcj5cbjwvbmctY29udGFpbmVyPlxuXG48bmctY29udGFpbmVyICpuZ0lmPVwiZmllbGQubG9hZGluZ1wiPlxuICAgPGRpdiBjbGFzcz0gXCJkeW5hbWljLWZpZWxkXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LWdyb3ctMSB0ZXh0LWJyZWFrIHJvdW5kZWQgYm94LWxvYWRpbmcgc2tlbGV0b24tZmllbGQtY29udGVudFwiPjwvZGl2PlxuICAgPC9kaXY+XG48L25nLWNvbnRhaW5lcj5cblxuPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzRWRpdCgpICYmIGZpZWxkLmZvcm1Db250cm9sICYmIGZpZWxkLmZvcm1Db250cm9sLmVycm9yc1wiPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWVsZC5mb3JtQ29udHJvbC5pbnZhbGlkICYmIGZpZWxkLmZvcm1Db250cm9sLnRvdWNoZWRcIj5cbiAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBmaWVsZC5mb3JtQ29udHJvbC5lcnJvcnMgfCBrZXl2YWx1ZVwiIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFjayBkLWJsb2NrXCI+XG4gICAgICAgICAgICA8c2NybS1keW5hbWljLWxhYmVsIFtjb250ZXh0XT1cImdldE1lc3NhZ2VDb250ZXh0KGl0ZW0udmFsdWUsIHJlY29yZClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZmllbGRzXT1cIntmaWVsZDogZmllbGR9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xhYmVsS2V5XT1cImdldE1lc3NhZ2VMYWJlbEtleShpdGVtLnZhbHVlKVwiPlxuICAgICAgICAgICAgPC9zY3JtLWR5bmFtaWMtbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPlxuPC9uZy1jb250YWluZXI+XG4iXX0=