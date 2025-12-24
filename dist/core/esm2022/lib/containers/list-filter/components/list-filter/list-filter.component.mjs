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
import { of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../store/list-filter/list-filter.store.factory";
import * as i2 from "../../adapters/actions.adapter.factory";
import * as i3 from "@angular/common";
import * as i4 from "../../../../components/button/button.component";
import * as i5 from "../../../../components/panel/panel.component";
import * as i6 from "../../../../components/field-grid/field-grid.component";
import * as i7 from "../../../../components/dropdown-button/dropdown-button.component";
import * as i8 from "../../../../components/label/label.component";
import * as i9 from "../../../../components/record-grid/record-grid.component";
function ListFilterComponent_scrm_panel_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "scrm-dropdown-button", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("config", ctx_r2.store.myFilterButton);
} }
function ListFilterComponent_scrm_panel_0_scrm_field_grid_3_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelement(1, "input", 14);
    i0.ɵɵelementStart(2, "label", 15);
    i0.ɵɵelement(3, "scrm-label", 16);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", item_r8.value);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("labelKey", item_r8.labelKey);
} }
function ListFilterComponent_scrm_panel_0_scrm_field_grid_3_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtemplate(1, ListFilterComponent_scrm_panel_0_scrm_field_grid_3_div_1_div_1_Template, 4, 2, "div", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r5.store.special);
} }
function ListFilterComponent_scrm_panel_0_scrm_field_grid_3_div_2_scrm_button_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-button", 7);
} if (rf & 2) {
    const button_r10 = ctx.$implicit;
    i0.ɵɵproperty("config", button_r10);
} }
function ListFilterComponent_scrm_panel_0_scrm_field_grid_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵtemplate(1, ListFilterComponent_scrm_panel_0_scrm_field_grid_3_div_2_scrm_button_1_Template, 1, 1, "scrm-button", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r6.store.gridButtons);
} }
function ListFilterComponent_scrm_panel_0_scrm_field_grid_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "scrm-field-grid", 8);
    i0.ɵɵtemplate(1, ListFilterComponent_scrm_panel_0_scrm_field_grid_3_div_1_Template, 2, 1, "div", 9);
    i0.ɵɵtemplate(2, ListFilterComponent_scrm_panel_0_scrm_field_grid_3_div_2_Template, 2, 1, "div", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const vm_r1 = i0.ɵɵnextContext().ngIf;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("actions", true)("appendActions", false)("fieldMode", ctx_r3.store.mode)("fields", ctx_r3.store.displayFields)("record", vm_r1)("special", ctx_r3.store.special.length > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.store.special.length > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.store.gridButtons);
} }
function ListFilterComponent_scrm_panel_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-record-grid", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("config", ctx_r4.gridConfig);
} }
function ListFilterComponent_scrm_panel_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "scrm-panel", 1);
    i0.ɵɵtemplate(1, ListFilterComponent_scrm_panel_0_div_1_Template, 2, 1, "div", 2);
    i0.ɵɵelementStart(2, "div", 3);
    i0.ɵɵtemplate(3, ListFilterComponent_scrm_panel_0_scrm_field_grid_3_Template, 3, 8, "scrm-field-grid", 4);
    i0.ɵɵtemplate(4, ListFilterComponent_scrm_panel_0_ng_container_4_Template, 2, 1, "ng-container", 5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate1("klass", "filter-panel m-0 ", ctx_r0.config && ctx_r0.config.klass || "", "");
    i0.ɵɵproperty("showHeader", ctx_r0.config.displayHeader)("close", ctx_r0.store.closeButton)("isCollapsed$", ctx_r0.store.isCollapsed$)("mode", ctx_r0.store.panelMode)("titleKey", "LBL_BASIC_FILTER");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.store.myFilterButton);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.store.displayFields && ctx_r0.store.displayFields.length);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.config && ctx_r0.config.savedFilterEdit && ctx_r0.store.filterStore.getMode() !== "detail");
} }
class ListFilterComponent {
    storeFactory;
    actionAdapterFactory;
    config;
    vm$;
    store;
    filterActionsAdapter;
    gridConfig;
    constructor(storeFactory, actionAdapterFactory) {
        this.storeFactory = storeFactory;
        this.actionAdapterFactory = actionAdapterFactory;
        this.store = storeFactory.create();
        this.filterActionsAdapter = actionAdapterFactory.create(this.store.filterStore, this.store);
    }
    ngOnInit() {
        this.store.init(this.config);
        this.vm$ = this.store.vm$.pipe(map(([savedFilter]) => {
            const record = { ...savedFilter };
            record.fields = savedFilter.criteriaFields;
            return record;
        }));
        this.gridConfig = {
            record$: this.store.filterStore.stagingRecord$,
            mode$: this.store.filterStore.mode$,
            fields$: this.store.filterStore.getViewFieldsKeys$(),
            actions: this.filterActionsAdapter,
            appendActions: true,
            klass: 'mt-2 p-2 saved-search-container rounded',
            buttonClass: 'btn btn-outline-danger btn-sm',
            labelDisplay: 'inline',
            rowClass: {
                'align-items-start': true,
                'align-items-center': false
            },
            colAlignItems: 'align-items-start',
            maxColumns$: of(4).pipe(shareReplay(1)),
            sizeMap$: of({
                handset: 1,
                tablet: 2,
                web: 4,
                wide: 4
            }).pipe(shareReplay(1))
        };
    }
    ngOnDestroy() {
        this.store.clear();
        this.store = null;
    }
    static ɵfac = function ListFilterComponent_Factory(t) { return new (t || ListFilterComponent)(i0.ɵɵdirectiveInject(i1.ListFilterStoreFactory), i0.ɵɵdirectiveInject(i2.SavedFilterActionAdapterFactory)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ListFilterComponent, selectors: [["scrm-list-filter"]], inputs: { config: "config" }, decls: 2, vars: 3, consts: [[3, "showHeader", "close", "isCollapsed$", "mode", "klass", "titleKey", 4, "ngIf"], [3, "showHeader", "close", "isCollapsed$", "mode", "klass", "titleKey"], ["panel-header-button", "", 4, "ngIf"], ["panel-body", "", 1, "p-2", "filter-body"], [3, "actions", "appendActions", "fieldMode", "fields", "record", "special", 4, "ngIf"], [4, "ngIf"], ["panel-header-button", ""], [3, "config"], [3, "actions", "appendActions", "fieldMode", "fields", "record", "special"], ["class", "float-right mt-4", "field-grid-special", "", 4, "ngIf"], ["class", "mt-4 align-self-end", "field-grid-actions", "", 4, "ngIf"], ["field-grid-special", "", 1, "float-right", "mt-4"], ["class", "d-inline-block form-check mb-2 mr-sm-2", 4, "ngFor", "ngForOf"], [1, "d-inline-block", "form-check", "mb-2", "mr-sm-2"], ["type", "checkbox", 1, "form-check-input", 3, "value"], [1, "form-check-label"], [3, "labelKey"], ["field-grid-actions", "", 1, "mt-4", "align-self-end"], [3, "config", 4, "ngFor", "ngForOf"]], template: function ListFilterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ListFilterComponent_scrm_panel_0_Template, 5, 9, "scrm-panel", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.vm$));
        } }, dependencies: [i3.NgForOf, i3.NgIf, i4.ButtonComponent, i5.PanelComponent, i6.FieldGridComponent, i7.DropdownButtonComponent, i8.LabelComponent, i9.RecordGridComponent, i3.AsyncPipe], encapsulation: 2 });
}
export { ListFilterComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListFilterComponent, [{
        type: Component,
        args: [{ selector: 'scrm-list-filter', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<scrm-panel *ngIf=\"(vm$ | async) as vm\"\n            [showHeader]=\"config.displayHeader\"\n            [close]=\"store.closeButton\"\n            [isCollapsed$]=\"store.isCollapsed$\"\n            [mode]=\"store.panelMode\"\n            klass=\"filter-panel m-0 {{ (config && config.klass) || ''}}\"\n            [titleKey]=\"'LBL_BASIC_FILTER'\"\n>\n\n    <div *ngIf=\"store.myFilterButton\" panel-header-button>\n        <scrm-dropdown-button [config]=\"store.myFilterButton\"></scrm-dropdown-button>\n    </div>\n\n    <div class=\"p-2 filter-body\" panel-body>\n\n        <scrm-field-grid *ngIf=\"store.displayFields && store.displayFields.length\"\n                         [actions]=\"true\"\n                         [appendActions]=\"false\"\n                         [fieldMode]=\"store.mode\"\n                         [fields]=\"store.displayFields\"\n                         [record]=\"vm\"\n                         [special]=\"store.special.length > 0\"\n        >\n\n            <div *ngIf=\"store.special.length > 0\" class=\"float-right mt-4\" field-grid-special>\n\n                <div *ngFor=\"let item of store.special \" class=\"d-inline-block form-check mb-2 mr-sm-2\">\n\n                    <input class=\"form-check-input\" type=\"checkbox\" [value]=\"item.value\">\n\n                    <label class=\"form-check-label\">\n                        <scrm-label [labelKey]=\"item.labelKey\"></scrm-label>\n                    </label>\n\n                </div>\n            </div>\n\n            <div *ngIf=\"store.gridButtons\" class=\"mt-4 align-self-end\" field-grid-actions>\n                <scrm-button *ngFor=\"let button of store.gridButtons\" [config]=\"button\"></scrm-button>\n            </div>\n        </scrm-field-grid>\n\n        <ng-container *ngIf=\"config && config.savedFilterEdit && store.filterStore.getMode() !== 'detail'\">\n            <scrm-record-grid [config]=\"gridConfig\"></scrm-record-grid>\n        </ng-container>\n    </div>\n\n</scrm-panel>\n" }]
    }], function () { return [{ type: i1.ListFilterStoreFactory }, { type: i2.SavedFilterActionAdapterFactory }]; }, { config: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1maWx0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbnRhaW5lcnMvbGlzdC1maWx0ZXIvY29tcG9uZW50cy9saXN0LWZpbHRlci9saXN0LWZpbHRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9saXN0LWZpbHRlci9jb21wb25lbnRzL2xpc3QtZmlsdGVyL2xpc3QtZmlsdGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFFbEUsT0FBTyxFQUFhLEVBQUUsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUMsR0FBRyxFQUFFLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7SUNPNUMsOEJBQXNEO0lBQ2xELDBDQUE2RTtJQUNqRixpQkFBTTs7O0lBRG9CLGVBQStCO0lBQS9CLG9EQUErQjs7O0lBZ0I3QywrQkFBd0Y7SUFFcEYsNEJBQXFFO0lBRXJFLGlDQUFnQztJQUM1QixpQ0FBb0Q7SUFDeEQsaUJBQVEsRUFBQTs7O0lBSndDLGVBQW9CO0lBQXBCLHFDQUFvQjtJQUdwRCxlQUEwQjtJQUExQiwyQ0FBMEI7OztJQVBsRCwrQkFBa0Y7SUFFOUUsMEdBUU07SUFDVixpQkFBTTs7O0lBVG9CLGVBQWdCO0lBQWhCLDhDQUFnQjs7O0lBWXRDLGlDQUFzRjs7O0lBQWhDLG1DQUFpQjs7O0lBRDNFLCtCQUE4RTtJQUMxRSwwSEFBc0Y7SUFDMUYsaUJBQU07OztJQUQ4QixlQUFvQjtJQUFwQixrREFBb0I7OztJQXZCNUQsMENBT0M7SUFFRyxt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QUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQzs2RUFwRFEsbUJBQW1COzZEQUFuQixtQkFBbUI7WUNmaEMsa0ZBK0NhOzs7WUEvQ0Esb0RBQW9COzs7U0RlcEIsbUJBQW1CO3VGQUFuQixtQkFBbUI7Y0FML0IsU0FBUzsyQkFDSSxrQkFBa0I7dUhBTW5CLE1BQU07a0JBQWQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JlY29yZCwgU2NyZWVuU2l6ZU1hcH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgb2Z9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHttYXAsIHNoYXJlUmVwbGF5fSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0ZpbHRlckNvbmZpZ30gZnJvbSAnLi9saXN0LWZpbHRlci5tb2RlbCc7XG5pbXBvcnQge1JlY29yZEdyaWRDb25maWd9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcmVjb3JkLWdyaWQvcmVjb3JkLWdyaWQubW9kZWwnO1xuaW1wb3J0IHtMaXN0RmlsdGVyU3RvcmVGYWN0b3J5fSBmcm9tICcuLi8uLi9zdG9yZS9saXN0LWZpbHRlci9saXN0LWZpbHRlci5zdG9yZS5mYWN0b3J5JztcbmltcG9ydCB7TGlzdEZpbHRlclN0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9saXN0LWZpbHRlci9saXN0LWZpbHRlci5zdG9yZSc7XG5pbXBvcnQge1NhdmVkRmlsdGVyQWN0aW9uc0FkYXB0ZXJ9IGZyb20gJy4uLy4uL2FkYXB0ZXJzL2FjdGlvbnMuYWRhcHRlcic7XG5pbXBvcnQge1NhdmVkRmlsdGVyQWN0aW9uQWRhcHRlckZhY3Rvcnl9IGZyb20gJy4uLy4uL2FkYXB0ZXJzL2FjdGlvbnMuYWRhcHRlci5mYWN0b3J5JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLWxpc3QtZmlsdGVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbGlzdC1maWx0ZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW10sXG59KVxuZXhwb3J0IGNsYXNzIExpc3RGaWx0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBASW5wdXQoKSBjb25maWc6IEZpbHRlckNvbmZpZztcblxuICAgIHZtJDogT2JzZXJ2YWJsZTxSZWNvcmQ+O1xuICAgIHN0b3JlOiBMaXN0RmlsdGVyU3RvcmU7XG4gICAgZmlsdGVyQWN0aW9uc0FkYXB0ZXI6IFNhdmVkRmlsdGVyQWN0aW9uc0FkYXB0ZXI7XG5cbiAgICBncmlkQ29uZmlnOiBSZWNvcmRHcmlkQ29uZmlnO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBzdG9yZUZhY3Rvcnk6IExpc3RGaWx0ZXJTdG9yZUZhY3RvcnksXG4gICAgICAgIHByb3RlY3RlZCBhY3Rpb25BZGFwdGVyRmFjdG9yeTogU2F2ZWRGaWx0ZXJBY3Rpb25BZGFwdGVyRmFjdG9yeVxuICAgICkge1xuICAgICAgICB0aGlzLnN0b3JlID0gc3RvcmVGYWN0b3J5LmNyZWF0ZSgpO1xuICAgICAgICB0aGlzLmZpbHRlckFjdGlvbnNBZGFwdGVyID0gYWN0aW9uQWRhcHRlckZhY3RvcnkuY3JlYXRlKHRoaXMuc3RvcmUuZmlsdGVyU3RvcmUsIHRoaXMuc3RvcmUpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0b3JlLmluaXQodGhpcy5jb25maWcpO1xuICAgICAgICB0aGlzLnZtJCA9IHRoaXMuc3RvcmUudm0kLnBpcGUobWFwKChbc2F2ZWRGaWx0ZXJdKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWNvcmQgPSB7Li4uc2F2ZWRGaWx0ZXJ9O1xuICAgICAgICAgICAgcmVjb3JkLmZpZWxkcyA9IHNhdmVkRmlsdGVyLmNyaXRlcmlhRmllbGRzO1xuICAgICAgICAgICAgcmV0dXJuIHJlY29yZDtcbiAgICAgICAgfSkpO1xuICAgICAgICB0aGlzLmdyaWRDb25maWcgPSB7XG4gICAgICAgICAgICByZWNvcmQkOiB0aGlzLnN0b3JlLmZpbHRlclN0b3JlLnN0YWdpbmdSZWNvcmQkLFxuICAgICAgICAgICAgbW9kZSQ6IHRoaXMuc3RvcmUuZmlsdGVyU3RvcmUubW9kZSQsXG4gICAgICAgICAgICBmaWVsZHMkOiB0aGlzLnN0b3JlLmZpbHRlclN0b3JlLmdldFZpZXdGaWVsZHNLZXlzJCgpLFxuICAgICAgICAgICAgYWN0aW9uczogdGhpcy5maWx0ZXJBY3Rpb25zQWRhcHRlcixcbiAgICAgICAgICAgIGFwcGVuZEFjdGlvbnM6IHRydWUsXG4gICAgICAgICAgICBrbGFzczogJ210LTIgcC0yIHNhdmVkLXNlYXJjaC1jb250YWluZXIgcm91bmRlZCcsXG4gICAgICAgICAgICBidXR0b25DbGFzczogJ2J0biBidG4tb3V0bGluZS1kYW5nZXIgYnRuLXNtJyxcbiAgICAgICAgICAgIGxhYmVsRGlzcGxheTogJ2lubGluZScsXG4gICAgICAgICAgICByb3dDbGFzczoge1xuICAgICAgICAgICAgICAgICdhbGlnbi1pdGVtcy1zdGFydCc6IHRydWUsXG4gICAgICAgICAgICAgICAgJ2FsaWduLWl0ZW1zLWNlbnRlcic6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29sQWxpZ25JdGVtczogJ2FsaWduLWl0ZW1zLXN0YXJ0JyxcbiAgICAgICAgICAgIG1heENvbHVtbnMkOiBvZig0KS5waXBlKHNoYXJlUmVwbGF5KDEpKSxcbiAgICAgICAgICAgIHNpemVNYXAkOiBvZih7XG4gICAgICAgICAgICAgICAgaGFuZHNldDogMSxcbiAgICAgICAgICAgICAgICB0YWJsZXQ6IDIsXG4gICAgICAgICAgICAgICAgd2ViOiA0LFxuICAgICAgICAgICAgICAgIHdpZGU6IDRcbiAgICAgICAgICAgIH0gYXMgU2NyZWVuU2l6ZU1hcCkucGlwZShzaGFyZVJlcGxheSgxKSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0b3JlLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuc3RvcmUgPSBudWxsO1xuICAgIH1cblxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPHNjcm0tcGFuZWwgKm5nSWY9XCIodm0kIHwgYXN5bmMpIGFzIHZtXCJcbiAgICAgICAgICAgIFtzaG93SGVhZGVyXT1cImNvbmZpZy5kaXNwbGF5SGVhZGVyXCJcbiAgICAgICAgICAgIFtjbG9zZV09XCJzdG9yZS5jbG9zZUJ1dHRvblwiXG4gICAgICAgICAgICBbaXNDb2xsYXBzZWQkXT1cInN0b3JlLmlzQ29sbGFwc2VkJFwiXG4gICAgICAgICAgICBbbW9kZV09XCJzdG9yZS5wYW5lbE1vZGVcIlxuICAgICAgICAgICAga2xhc3M9XCJmaWx0ZXItcGFuZWwgbS0wIHt7IChjb25maWcgJiYgY29uZmlnLmtsYXNzKSB8fCAnJ319XCJcbiAgICAgICAgICAgIFt0aXRsZUtleV09XCInTEJMX0JBU0lDX0ZJTFRFUidcIlxuPlxuXG4gICAgPGRpdiAqbmdJZj1cInN0b3JlLm15RmlsdGVyQnV0dG9uXCIgcGFuZWwtaGVhZGVyLWJ1dHRvbj5cbiAgICAgICAgPHNjcm0tZHJvcGRvd24tYnV0dG9uIFtjb25maWddPVwic3RvcmUubXlGaWx0ZXJCdXR0b25cIj48L3Njcm0tZHJvcGRvd24tYnV0dG9uPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInAtMiBmaWx0ZXItYm9keVwiIHBhbmVsLWJvZHk+XG5cbiAgICAgICAgPHNjcm0tZmllbGQtZ3JpZCAqbmdJZj1cInN0b3JlLmRpc3BsYXlGaWVsZHMgJiYgc3RvcmUuZGlzcGxheUZpZWxkcy5sZW5ndGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFthY3Rpb25zXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFthcHBlbmRBY3Rpb25zXT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbZmllbGRNb2RlXT1cInN0b3JlLm1vZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFtmaWVsZHNdPVwic3RvcmUuZGlzcGxheUZpZWxkc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW3JlY29yZF09XCJ2bVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW3NwZWNpYWxdPVwic3RvcmUuc3BlY2lhbC5sZW5ndGggPiAwXCJcbiAgICAgICAgPlxuXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwic3RvcmUuc3BlY2lhbC5sZW5ndGggPiAwXCIgY2xhc3M9XCJmbG9hdC1yaWdodCBtdC00XCIgZmllbGQtZ3JpZC1zcGVjaWFsPlxuXG4gICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzdG9yZS5zcGVjaWFsIFwiIGNsYXNzPVwiZC1pbmxpbmUtYmxvY2sgZm9ybS1jaGVjayBtYi0yIG1yLXNtLTJcIj5cblxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cImNoZWNrYm94XCIgW3ZhbHVlXT1cIml0ZW0udmFsdWVcIj5cblxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1sYWJlbCBbbGFiZWxLZXldPVwiaXRlbS5sYWJlbEtleVwiPjwvc2NybS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJzdG9yZS5ncmlkQnV0dG9uc1wiIGNsYXNzPVwibXQtNCBhbGlnbi1zZWxmLWVuZFwiIGZpZWxkLWdyaWQtYWN0aW9ucz5cbiAgICAgICAgICAgICAgICA8c2NybS1idXR0b24gKm5nRm9yPVwibGV0IGJ1dHRvbiBvZiBzdG9yZS5ncmlkQnV0dG9uc1wiIFtjb25maWddPVwiYnV0dG9uXCI+PC9zY3JtLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3Njcm0tZmllbGQtZ3JpZD5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29uZmlnICYmIGNvbmZpZy5zYXZlZEZpbHRlckVkaXQgJiYgc3RvcmUuZmlsdGVyU3RvcmUuZ2V0TW9kZSgpICE9PSAnZGV0YWlsJ1wiPlxuICAgICAgICAgICAgPHNjcm0tcmVjb3JkLWdyaWQgW2NvbmZpZ109XCJncmlkQ29uZmlnXCI+PC9zY3JtLXJlY29yZC1ncmlkPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cblxuPC9zY3JtLXBhbmVsPlxuIl19