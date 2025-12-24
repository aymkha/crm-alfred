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
import { Button } from 'common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../button/button.component";
import * as i3 from "../dropdown-button/dropdown-button.component";
import * as i4 from "../grouped-button/grouped-button.component";
function ButtonGroupComponent_div_0_ng_container_1_scrm_button_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-button", 4);
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("config", item_r3);
} }
function ButtonGroupComponent_div_0_ng_container_1_scrm_dropdown_button_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-dropdown-button", 4);
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("config", item_r3);
} }
function ButtonGroupComponent_div_0_ng_container_1_scrm_grouped_button_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-grouped-button", 4);
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("config", item_r3);
} }
function ButtonGroupComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ButtonGroupComponent_div_0_ng_container_1_scrm_button_1_Template, 1, 1, "scrm-button", 3);
    i0.ɵɵtemplate(2, ButtonGroupComponent_div_0_ng_container_1_scrm_dropdown_button_2_Template, 1, 1, "scrm-dropdown-button", 3);
    i0.ɵɵtemplate(3, ButtonGroupComponent_div_0_ng_container_1_scrm_grouped_button_3_Template, 1, 1, "scrm-grouped-button", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r3 && !((tmp_0_0 = item_r3 == null ? null : item_r3.items) !== null && tmp_0_0 !== undefined ? tmp_0_0 : ""));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r3 && ((tmp_1_0 = item_r3 == null ? null : item_r3.items) !== null && tmp_1_0 !== undefined ? tmp_1_0 : "") && ((tmp_1_0 = item_r3 == null ? null : item_r3.type) !== null && tmp_1_0 !== undefined ? tmp_1_0 : "dropdown") === "dropdown");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r3 && ((tmp_2_0 = item_r3 == null ? null : item_r3.items) !== null && tmp_2_0 !== undefined ? tmp_2_0 : "") && ((tmp_2_0 = item_r3 == null ? null : item_r3.type) !== null && tmp_2_0 !== undefined ? tmp_2_0 : "dropdown") === "grouped");
} }
function ButtonGroupComponent_div_0_scrm_dropdown_button_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-dropdown-button", 5);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("config", ctx_r2.dropdownConfig);
} }
function ButtonGroupComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, ButtonGroupComponent_div_0_ng_container_1_Template, 4, 3, "ng-container", 1);
    i0.ɵɵtemplate(2, ButtonGroupComponent_div_0_scrm_dropdown_button_2_Template, 1, 1, "scrm-dropdown-button", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r0.klass);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.buttons.expanded);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.buttons.collapsed.length);
} }
class ButtonGroupComponent {
    config$;
    klass = '';
    buttons = {
        expanded: [],
        collapsed: [],
    };
    dropdownConfig;
    internalConfig;
    sub;
    constructor() {
    }
    ngOnInit() {
        this.sub = this.config$.subscribe(config => {
            this.internalConfig = { ...config };
            this.splitButtons();
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    buildDropdownConfig() {
        let buttonClasses = ['button-group-button'];
        if (this.internalConfig.buttonKlass && this.internalConfig.buttonKlass.length > 0) {
            buttonClasses = buttonClasses.concat(this.internalConfig.buttonKlass);
        }
        if (this?.internalConfig?.dropdownOptions?.klass) {
            buttonClasses = buttonClasses.concat(this.internalConfig.dropdownOptions.klass);
        }
        let wrapperClasses = ['button-group-dropdown'];
        const dropdownOptions = this.internalConfig.dropdownOptions;
        const optionsWrapperKlass = dropdownOptions && dropdownOptions.wrapperKlass;
        if (optionsWrapperKlass && optionsWrapperKlass.length > 0) {
            wrapperClasses = wrapperClasses.concat(optionsWrapperKlass);
        }
        this.dropdownConfig = {
            label: this.internalConfig.dropdownLabel,
            klass: [...buttonClasses],
            wrapperKlass: wrapperClasses,
            items: this.buttons.collapsed,
        };
        if (this.internalConfig.dropdownOptions && this.internalConfig.dropdownOptions.placement) {
            this.dropdownConfig.placement = this.internalConfig.dropdownOptions.placement;
        }
        if (this.internalConfig.dropdownOptions && this.internalConfig.dropdownOptions.icon) {
            this.dropdownConfig.icon = this.internalConfig.dropdownOptions.icon;
        }
    }
    getBreakpoint() {
        if (!this.internalConfig.breakpoint && this.internalConfig.breakpoint !== 0) {
            return 4;
        }
        return this.internalConfig.breakpoint;
    }
    splitButtons() {
        this.buttons.expanded = [];
        this.buttons.collapsed = [];
        if (!this.internalConfig.buttons || this.internalConfig.buttons.length < 1) {
            return;
        }
        let count = 0;
        const showAfterBreakpoint = this.internalConfig.showAfterBreakpoint ?? true;
        this.internalConfig.buttons.forEach(button => {
            if (!button) {
                return;
            }
            if (count < this.getBreakpoint()) {
                let classes = ['button-group-button'];
                if (this.internalConfig.buttonKlass && this.internalConfig.buttonKlass.length > 0) {
                    classes = classes.concat(this.internalConfig.buttonKlass);
                }
                const newButton = { ...button };
                Button.appendClasses(newButton, [...classes]);
                this.buttons.expanded.push(newButton);
            }
            else if (showAfterBreakpoint === true) {
                this.buttons.collapsed.push({ ...button });
            }
            count++;
        });
        this.buildDropdownConfig();
    }
    static ɵfac = function ButtonGroupComponent_Factory(t) { return new (t || ButtonGroupComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ButtonGroupComponent, selectors: [["scrm-button-group"]], inputs: { config$: "config$", klass: "klass" }, decls: 1, vars: 1, consts: [[3, "class", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["autoClose", "outside", 3, "config", 4, "ngIf"], [3, "config", 4, "ngIf"], [3, "config"], ["autoClose", "outside", 3, "config"]], template: function ButtonGroupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ButtonGroupComponent_div_0_Template, 3, 4, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.config$);
        } }, dependencies: [i1.NgForOf, i1.NgIf, i2.ButtonComponent, i3.DropdownButtonComponent, i4.GroupedButtonComponent], encapsulation: 2 });
}
export { ButtonGroupComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ButtonGroupComponent, [{
        type: Component,
        args: [{ selector: 'scrm-button-group', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div *ngIf=\"config$\" [class]=\"klass\">\n    <ng-container *ngFor=\"let item of buttons.expanded\">\n        <scrm-button *ngIf=\"item && !(item?.items ?? '')\"\n                     [config]=\"item\">\n        </scrm-button>\n        <scrm-dropdown-button *ngIf=\"item && (item?.items ?? '') && ((item?.type ?? 'dropdown') === 'dropdown')\"\n                              [config]=\"item\">\n        </scrm-dropdown-button>\n        <scrm-grouped-button *ngIf=\"item && (item?.items ?? '') && ((item?.type ?? 'dropdown') === 'grouped')\"\n                              [config]=\"item\">\n        </scrm-grouped-button>\n    </ng-container>\n\n    <scrm-dropdown-button autoClose=\"outside\"\n                          *ngIf=\"buttons.collapsed.length\"\n                          [config]=\"dropdownConfig\"></scrm-dropdown-button>\n</div>\n" }]
    }], function () { return []; }, { config$: [{
            type: Input
        }], klass: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL2J1dHRvbi1ncm91cC9idXR0b24tZ3JvdXAuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvYnV0dG9uLWdyb3VwL2J1dHRvbi1ncm91cC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxNQUFNLEVBQXFGLE1BQU0sUUFBUSxDQUFDOzs7Ozs7O0lDRTFHLGlDQUVjOzs7SUFERCxnQ0FBZTs7O0lBRTVCLDBDQUV1Qjs7O0lBREQsZ0NBQWU7OztJQUVyQyx5Q0FFc0I7OztJQURBLGdDQUFlOzs7SUFSekMsNkJBQW9EO0lBQ2hELDBHQUVjO0lBQ2QsNEhBRXVCO0lBQ3ZCLDBIQUVzQjtJQUMxQiwwQkFBZTs7Ozs7O0lBVEcsZUFBa0M7SUFBbEMsd0lBQWtDO0lBR3pCLGVBQWdGO0lBQWhGLHNRQUFnRjtJQUdqRixlQUErRTtJQUEvRSxxUUFBK0U7OztJQUt6RywwQ0FFdUU7OztJQUFqRCw4Q0FBeUI7OztJQWZuRCwyQkFBcUM7SUFDakMsNkZBVWU7SUFFZiw2R0FFdUU7SUFDM0UsaUJBQU07OztJQWhCZSwyQkFBZTtJQUNELGVBQW1CO0lBQW5CLGlEQUFtQjtJQWEzQixlQUE4QjtJQUE5QixzREFBOEI7O0FETnpELE1BS2Esb0JBQW9CO0lBRXBCLE9BQU8sQ0FBbUM7SUFDMUMsS0FBSyxHQUFXLEVBQUUsQ0FBQztJQUU1QixPQUFPLEdBQWlCO1FBQ3BCLFFBQVEsRUFBRSxFQUFFO1FBQ1osU0FBUyxFQUFF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Qjs2REFBcEIsb0JBQW9CO1lDYmpDLHFFQWdCTTs7WUFoQkEsa0NBQWE7OztTRGFOLG9CQUFvQjt1RkFBcEIsb0JBQW9CO2NBTGhDLFNBQVM7MkJBQ0ksbUJBQW1CO3NDQU1wQixPQUFPO2tCQUFmLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCdXR0b24sIEJ1dHRvbkdyb3VwSW50ZXJmYWNlLCBCdXR0b25JbnRlcmZhY2UsIERyb3Bkb3duQnV0dG9uSW50ZXJmYWNlLCBBbnlCdXR0b25JbnRlcmZhY2V9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge09ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5cbmludGVyZmFjZSBTcGxpdEJ1dHRvbnMge1xuICAgIGV4cGFuZGVkOiBBbnlCdXR0b25JbnRlcmZhY2VbXTtcbiAgICBjb2xsYXBzZWQ6IEFueUJ1dHRvbkludGVyZmFjZVtdO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tYnV0dG9uLWdyb3VwJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYnV0dG9uLWdyb3VwLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZXM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Hcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIEBJbnB1dCgpIGNvbmZpZyQ6IE9ic2VydmFibGU8QnV0dG9uR3JvdXBJbnRlcmZhY2U+O1xuICAgIEBJbnB1dCgpIGtsYXNzOiBzdHJpbmcgPSAnJztcblxuICAgIGJ1dHRvbnM6IFNwbGl0QnV0dG9ucyA9IHtcbiAgICAgICAgZXhwYW5kZWQ6IFtdLFxuICAgICAgICBjb2xsYXBzZWQ6IFtdLFxuICAgIH07XG5cbiAgICBkcm9wZG93bkNvbmZpZzogRHJvcGRvd25CdXR0b25JbnRlcmZhY2U7XG5cbiAgICBwcm90ZWN0ZWQgaW50ZXJuYWxDb25maWc6IEJ1dHRvbkdyb3VwSW50ZXJmYWNlO1xuICAgIHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XG5cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN1YiA9IHRoaXMuY29uZmlnJC5zdWJzY3JpYmUoY29uZmlnID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxDb25maWcgPSB7Li4uY29uZmlnfTtcbiAgICAgICAgICAgIHRoaXMuc3BsaXRCdXR0b25zKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIGJ1aWxkRHJvcGRvd25Db25maWcoKTogdm9pZCB7XG5cbiAgICAgICAgbGV0IGJ1dHRvbkNsYXNzZXMgPSBbJ2J1dHRvbi1ncm91cC1idXR0b24nXTtcblxuICAgICAgICBpZiAodGhpcy5pbnRlcm5hbENvbmZpZy5idXR0b25LbGFzcyAmJiB0aGlzLmludGVybmFsQ29uZmlnLmJ1dHRvbktsYXNzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGJ1dHRvbkNsYXNzZXMgPSBidXR0b25DbGFzc2VzLmNvbmNhdCh0aGlzLmludGVybmFsQ29uZmlnLmJ1dHRvbktsYXNzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzPy5pbnRlcm5hbENvbmZpZz8uZHJvcGRvd25PcHRpb25zPy5rbGFzcykge1xuICAgICAgICAgICAgYnV0dG9uQ2xhc3NlcyA9IGJ1dHRvbkNsYXNzZXMuY29uY2F0KHRoaXMuaW50ZXJuYWxDb25maWcuZHJvcGRvd25PcHRpb25zLmtsYXNzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB3cmFwcGVyQ2xhc3NlcyA9IFsnYnV0dG9uLWdyb3VwLWRyb3Bkb3duJ107XG5cbiAgICAgICAgY29uc3QgZHJvcGRvd25PcHRpb25zID0gdGhpcy5pbnRlcm5hbENvbmZpZy5kcm9wZG93bk9wdGlvbnM7XG4gICAgICAgIGNvbnN0IG9wdGlvbnNXcmFwcGVyS2xhc3MgPSBkcm9wZG93bk9wdGlvbnMgJiYgZHJvcGRvd25PcHRpb25zLndyYXBwZXJLbGFzcztcblxuICAgICAgICBpZiAob3B0aW9uc1dyYXBwZXJLbGFzcyAmJiBvcHRpb25zV3JhcHBlcktsYXNzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHdyYXBwZXJDbGFzc2VzID0gd3JhcHBlckNsYXNzZXMuY29uY2F0KG9wdGlvbnNXcmFwcGVyS2xhc3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kcm9wZG93bkNvbmZpZyA9IHtcbiAgICAgICAgICAgIGxhYmVsOiB0aGlzLmludGVybmFsQ29uZmlnLmRyb3Bkb3duTGFiZWwsXG4gICAgICAgICAgICBrbGFzczogWy4uLmJ1dHRvbkNsYXNzZXNdLFxuICAgICAgICAgICAgd3JhcHBlcktsYXNzOiB3cmFwcGVyQ2xhc3NlcyxcbiAgICAgICAgICAgIGl0ZW1zOiB0aGlzLmJ1dHRvbnMuY29sbGFwc2VkLFxuICAgICAgICB9IGFzIERyb3Bkb3duQnV0dG9uSW50ZXJmYWNlO1xuXG4gICAgICAgIGlmICh0aGlzLmludGVybmFsQ29uZmlnLmRyb3Bkb3duT3B0aW9ucyAmJiB0aGlzLmludGVybmFsQ29uZmlnLmRyb3Bkb3duT3B0aW9ucy5wbGFjZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25Db25maWcucGxhY2VtZW50ID0gdGhpcy5pbnRlcm5hbENvbmZpZy5kcm9wZG93bk9wdGlvbnMucGxhY2VtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaW50ZXJuYWxDb25maWcuZHJvcGRvd25PcHRpb25zICYmIHRoaXMuaW50ZXJuYWxDb25maWcuZHJvcGRvd25PcHRpb25zLmljb24pIHtcbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25Db25maWcuaWNvbiA9IHRoaXMuaW50ZXJuYWxDb25maWcuZHJvcGRvd25PcHRpb25zLmljb247XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0QnJlYWtwb2ludCgpOiBudW1iZXIge1xuXG4gICAgICAgIGlmICghdGhpcy5pbnRlcm5hbENvbmZpZy5icmVha3BvaW50ICYmIHRoaXMuaW50ZXJuYWxDb25maWcuYnJlYWtwb2ludCAhPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbENvbmZpZy5icmVha3BvaW50O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzcGxpdEJ1dHRvbnMoKTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy5idXR0b25zLmV4cGFuZGVkID0gW107XG4gICAgICAgIHRoaXMuYnV0dG9ucy5jb2xsYXBzZWQgPSBbXTtcblxuICAgICAgICBpZiAoIXRoaXMuaW50ZXJuYWxDb25maWcuYnV0dG9ucyB8fCB0aGlzLmludGVybmFsQ29uZmlnLmJ1dHRvbnMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvdW50ID0gMDtcblxuICAgICAgICBjb25zdCBzaG93QWZ0ZXJCcmVha3BvaW50ID0gdGhpcy5pbnRlcm5hbENvbmZpZy5zaG93QWZ0ZXJCcmVha3BvaW50ID8/IHRydWU7XG5cbiAgICAgICAgdGhpcy5pbnRlcm5hbENvbmZpZy5idXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcblxuICAgICAgICAgICAgaWYgKCFidXR0b24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjb3VudCA8IHRoaXMuZ2V0QnJlYWtwb2ludCgpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNsYXNzZXMgPSBbJ2J1dHRvbi1ncm91cC1idXR0b24nXTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbnRlcm5hbENvbmZpZy5idXR0b25LbGFzcyAmJiB0aGlzLmludGVybmFsQ29uZmlnLmJ1dHRvbktsYXNzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NlcyA9IGNsYXNzZXMuY29uY2F0KHRoaXMuaW50ZXJuYWxDb25maWcuYnV0dG9uS2xhc3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBuZXdCdXR0b24gPSB7Li4uYnV0dG9ufTtcbiAgICAgICAgICAgICAgICBCdXR0b24uYXBwZW5kQ2xhc3NlcyhuZXdCdXR0b24sIFsuLi5jbGFzc2VzXSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbnMuZXhwYW5kZWQucHVzaChuZXdCdXR0b24pO1xuICAgICAgICAgICAgfSBlbHNlIGlmKHNob3dBZnRlckJyZWFrcG9pbnQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbnMuY29sbGFwc2VkLnB1c2goey4uLmJ1dHRvbn0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJ1aWxkRHJvcGRvd25Db25maWcoKTtcbiAgICB9XG5cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxkaXYgKm5nSWY9XCJjb25maWckXCIgW2NsYXNzXT1cImtsYXNzXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBidXR0b25zLmV4cGFuZGVkXCI+XG4gICAgICAgIDxzY3JtLWJ1dHRvbiAqbmdJZj1cIml0ZW0gJiYgIShpdGVtPy5pdGVtcyA/PyAnJylcIlxuICAgICAgICAgICAgICAgICAgICAgW2NvbmZpZ109XCJpdGVtXCI+XG4gICAgICAgIDwvc2NybS1idXR0b24+XG4gICAgICAgIDxzY3JtLWRyb3Bkb3duLWJ1dHRvbiAqbmdJZj1cIml0ZW0gJiYgKGl0ZW0/Lml0ZW1zID8/ICcnKSAmJiAoKGl0ZW0/LnR5cGUgPz8gJ2Ryb3Bkb3duJykgPT09ICdkcm9wZG93bicpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb25maWddPVwiaXRlbVwiPlxuICAgICAgICA8L3Njcm0tZHJvcGRvd24tYnV0dG9uPlxuICAgICAgICA8c2NybS1ncm91cGVkLWJ1dHRvbiAqbmdJZj1cIml0ZW0gJiYgKGl0ZW0/Lml0ZW1zID8/ICcnKSAmJiAoKGl0ZW0/LnR5cGUgPz8gJ2Ryb3Bkb3duJykgPT09ICdncm91cGVkJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbmZpZ109XCJpdGVtXCI+XG4gICAgICAgIDwvc2NybS1ncm91cGVkLWJ1dHRvbj5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDxzY3JtLWRyb3Bkb3duLWJ1dHRvbiBhdXRvQ2xvc2U9XCJvdXRzaWRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJidXR0b25zLmNvbGxhcHNlZC5sZW5ndGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbY29uZmlnXT1cImRyb3Bkb3duQ29uZmlnXCI+PC9zY3JtLWRyb3Bkb3duLWJ1dHRvbj5cbjwvZGl2PlxuIl19