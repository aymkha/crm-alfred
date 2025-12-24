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
import { Component, HostListener } from '@angular/core';
import { RecordActionsAdapter } from '../../adapters/actions.adapter';
import * as i0 from "@angular/core";
import * as i1 from "../../adapters/actions.adapter";
import * as i2 from "../../store/record-view/record-view.store";
import * as i3 from "../../../../services/navigation/module-navigation/module-navigation.service";
import * as i4 from "@angular/common";
import * as i5 from "../../../../components/module-title/module-title.component";
import * as i6 from "../../../../components/dynamic-label/dynamic-label.component";
import * as i7 from "../../../../components/action-group-menu/action-group-menu.component";
import * as i8 from "../../../../containers/favorite-toggle/components/favorite-toggle/favorite-toggle.component";
function RecordHeaderComponent_ng_container_2_scrm_dynamic_label_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-dynamic-label", 13);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("fields", ctx_r2.record.fields)("labelKey", ctx_r2.getSummaryTemplate());
} }
function RecordHeaderComponent_ng_container_2_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵelement(1, "scrm-favorite-toggle", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("record", ctx_r3.record);
} }
function RecordHeaderComponent_ng_container_2_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵelement(1, "scrm-action-group-menu", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("config", ctx_r4.actionsAdapter);
} }
function RecordHeaderComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 3)(2, "div", 4)(3, "div", 5);
    i0.ɵɵelement(4, "div", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "div", 7);
    i0.ɵɵelementStart(6, "div", 5)(7, "div", 8)(8, "div", 9);
    i0.ɵɵtemplate(9, RecordHeaderComponent_ng_container_2_scrm_dynamic_label_9_Template, 1, 2, "scrm-dynamic-label", 10);
    i0.ɵɵtemplate(10, RecordHeaderComponent_ng_container_2_div_10_Template, 2, 1, "div", 11);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelement(11, "div", 7);
    i0.ɵɵelementStart(12, "div", 5);
    i0.ɵɵtemplate(13, RecordHeaderComponent_ng_container_2_div_13_Template, 2, 1, "div", 12);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngIf", ctx_r0.record && ctx_r0.record.fields);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.record && ctx_r0.record.fields && ctx_r0.mode !== "create");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.record);
} }
function RecordHeaderComponent_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19)(1, "div", 20);
    i0.ɵɵelement(2, "scrm-module-title", 21)(3, "div", 22);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("title", ctx_r5.moduleTitle);
} }
function RecordHeaderComponent_ng_template_3_div_1_scrm_dynamic_label_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-dynamic-label", 28);
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("fields", ctx_r7.record.fields)("labelKey", ctx_r7.getSummaryTemplate());
} }
function RecordHeaderComponent_ng_template_3_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵelement(1, "scrm-favorite-toggle", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("record", ctx_r8.record);
} }
function RecordHeaderComponent_ng_template_3_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelement(1, "scrm-action-group-menu", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("config", ctx_r9.actionsAdapter)("actionContext", ctx_r9.getActionContext(ctx_r9.record))("klass", ctx_r9.isScrolled ? "record-view-actions-scrolled float-right" : "record-view-actions float-right");
} }
function RecordHeaderComponent_ng_template_3_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19)(1, "div", 23)(2, "div", 23);
    i0.ɵɵtemplate(3, RecordHeaderComponent_ng_template_3_div_1_scrm_dynamic_label_3_Template, 1, 2, "scrm-dynamic-label", 24);
    i0.ɵɵtemplate(4, RecordHeaderComponent_ng_template_3_div_1_div_4_Template, 2, 1, "div", 11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 25)(6, "div", 26);
    i0.ɵɵtemplate(7, RecordHeaderComponent_ng_template_3_div_1_div_7_Template, 2, 3, "div", 27);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r6.isScrolled ? "col-md-5 d-flex align-items-center justify-content-center justify-content-sm-start" : "col-md-5 d-flex align-items-center justify-content-center justify-content-sm-start");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r6.isScrolled ? "record-view-name-scrolled d-flex align-items-center" : "record-view-name d-flex align-items-center");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.record && ctx_r6.record.fields);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.record && ctx_r6.record.fields && ctx_r6.mode !== "create");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r6.record);
} }
function RecordHeaderComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, RecordHeaderComponent_ng_template_3_div_0_Template, 4, 1, "div", 18);
    i0.ɵɵtemplate(1, RecordHeaderComponent_ng_template_3_div_1_Template, 8, 5, "div", 18);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r1.loading);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.loading);
} }
class RecordHeaderComponent {
    actionsAdapter;
    recordViewStore;
    moduleNavigation;
    record;
    displayResponsiveTable = false;
    mode = 'detail';
    loading = true;
    isScrolled = false;
    subs = [];
    onScroll() {
        const scrollPosition = window.pageYOffset;
        //ScrollThreshold is set to 5em
        const scrollThreshold = 5 * parseFloat(getComputedStyle(document.documentElement).fontSize);
        if (scrollPosition > scrollThreshold) {
            //20 is just a random safezone number
            if (scrollPosition - scrollThreshold < 10)
                return;
            this.isScrolled = true;
        }
        else {
            if (scrollThreshold - scrollPosition < 10)
                return;
            this.isScrolled = false;
        }
    }
    constructor(actionsAdapter, recordViewStore, moduleNavigation) {
        this.actionsAdapter = actionsAdapter;
        this.recordViewStore = recordViewStore;
        this.moduleNavigation = moduleNavigation;
    }
    ngOnInit() {
        this.mode = this.recordViewStore.getMode();
        this.subs.push(this.recordViewStore.mode$.subscribe(mode => {
            this.mode = mode;
        }));
        this.subs.push(this.recordViewStore.record$.subscribe(record => {
            this.record = record;
        }));
        this.subs.push(this.recordViewStore.loading$.subscribe(loading => {
            this.loading = loading;
        }));
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    get moduleTitle() {
        const module = this.recordViewStore.vm.appData.module;
        const appListStrings = this.recordViewStore.vm.appData.language.appListStrings;
        return this.moduleNavigation.getModuleLabel(module, appListStrings);
    }
    /**
     * Get Summary template
     *
     * @returns {string} template label
     */
    getSummaryTemplate() {
        return this.recordViewStore.getSummaryTemplate();
    }
    /**
     * Build action context
     * @param record
     */
    getActionContext(record) {
        if (!record) {
            return {};
        }
        return {
            module: record.module || '',
            record
        };
    }
    static ɵfac = function RecordHeaderComponent_Factory(t) { return new (t || RecordHeaderComponent)(i0.ɵɵdirectiveInject(i1.RecordActionsAdapter), i0.ɵɵdirectiveInject(i2.RecordViewStore), i0.ɵɵdirectiveInject(i3.ModuleNavigation)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RecordHeaderComponent, selectors: [["scrm-record-header"]], hostBindings: function RecordHeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("scroll", function RecordHeaderComponent_scroll_HostBindingHandler() { return ctx.onScroll(); }, false, i0.ɵɵresolveWindow);
        } }, features: [i0.ɵɵProvidersFeature([RecordActionsAdapter])], decls: 4, vars: 3, consts: [[1, "record-view-header", 3, "ngClass"], [4, "ngIf"], [3, "ngIf"], [1, "d-flex", "flex-nowrap"], [1, "row"], [1, "col"], [1, "order-3"], [1, "w-100"], [1, "order-2"], [1, "record-view-name", "d-flex", "align-items-center"], [3, "fields", "labelKey", 4, "ngIf"], ["class", "pl-1 d-flex align-items-top", 4, "ngIf"], ["class", "order-1", 4, "ngIf"], [3, "fields", "labelKey"], [1, "pl-1", "d-flex", "align-items-top"], [3, "record"], [1, "order-1"], ["klass", "record-view-actions float-right", 3, "config"], ["class", "row mr-0", 4, "ngIf"], [1, "row", "mr-0"], [1, "col-md-5", "d-flex", "align-items-center", "justify-content-center", "justify-content-sm-start"], [1, "record-view-title", "title-font", 3, "title"], [1, "record-view-name", "pt-3", "pb-3"], [3, "ngClass"], ["class", "d-inline-block h-100 lh-100", 3, "fields", "labelKey", 4, "ngIf"], [1, "col-md-7", "d-flex", "align-items-center", "justify-content-center", "justify-content-sm-end"], [1, "row", "mr-1", "ml-1"], ["class", "w-100", 4, "ngIf"], [1, "d-inline-block", "h-100", "lh-100", 3, "fields", "labelKey"], [1, "d-inline-block", "h-100", "lh-100", 3, "record"], ["buttonClass", "settings-button", 3, "config", "actionContext", "klass"]], template: function RecordHeaderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 0);
            i0.ɵɵtemplate(2, RecordHeaderComponent_ng_container_2_Template, 14, 3, "ng-container", 1);
            i0.ɵɵtemplate(3, RecordHeaderComponent_ng_template_3_Template, 2, 2, "ng-template", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", ctx.isScrolled ? "record-view-header-scrolled shadow-md" : "");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.displayResponsiveTable);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.displayResponsiveTable);
        } }, dependencies: [i4.NgClass, i4.NgIf, i5.ModuleTitleComponent, i6.DynamicLabelComponent, i7.ActionGroupMenuComponent, i8.FavoriteToggleComponent], encapsulation: 2 });
}
export { RecordHeaderComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordHeaderComponent, [{
        type: Component,
        args: [{ selector: 'scrm-record-header', providers: [RecordActionsAdapter], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container>\n    <div [ngClass]=\"isScrolled ? 'record-view-header-scrolled shadow-md': ''\" class=\"record-view-header\">\n        <ng-container *ngIf=\"displayResponsiveTable\">\n            <div class=\"d-flex flex-nowrap\">\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <div class=\"order-3\">\n                        </div>\n                    </div>\n                    <div class=\"w-100\"></div>\n                    <div class=\"col\">\n                        <div class=\"order-2\">\n                            <div class=\"record-view-name d-flex align-items-center\">\n                                <scrm-dynamic-label *ngIf=\"record && record.fields\"\n                                                    [fields]=\"record.fields\"\n                                                    [labelKey]=\"getSummaryTemplate()\">\n                                </scrm-dynamic-label>\n                                <div *ngIf=\"record && record.fields && mode !== 'create'\"\n                                     class=\"pl-1 d-flex align-items-top\">\n                                    <scrm-favorite-toggle [record]=\"record\"></scrm-favorite-toggle>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"w-100\"></div>\n                    <div class=\"col\">\n                        <div *ngIf=\"record\" class=\"order-1\">\n                            <scrm-action-group-menu\n                                [config]=\"actionsAdapter\"\n                                klass=\"record-view-actions float-right\">\n                            </scrm-action-group-menu>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </ng-container>\n        <ng-template [ngIf]=\"!displayResponsiveTable\">\n            <div *ngIf=\"loading\" class=\"row mr-0\">\n                <div class=\"col-md-5 d-flex align-items-center justify-content-center justify-content-sm-start\">\n                    <scrm-module-title [title]=\"moduleTitle\" class=\"record-view-title title-font\"></scrm-module-title>\n                    <div class=\"record-view-name pt-3 pb-3\"></div>\n                </div>\n            </div>\n            <div *ngIf=\"!loading\" class=\"row mr-0\">\n                <div\n                    [ngClass]=\"isScrolled ? 'col-md-5 d-flex align-items-center justify-content-center justify-content-sm-start' : 'col-md-5 d-flex align-items-center justify-content-center justify-content-sm-start'\">\n                    <div\n                        [ngClass]=\"isScrolled ? 'record-view-name-scrolled d-flex align-items-center' : 'record-view-name d-flex align-items-center'\">\n                        <scrm-dynamic-label *ngIf=\"record && record.fields\"\n                                            class=\"d-inline-block h-100 lh-100\"\n                                            [fields]=\"record.fields\"\n                                            [labelKey]=\"getSummaryTemplate()\">\n                        </scrm-dynamic-label>\n                        <div *ngIf=\"record && record.fields && mode !== 'create'\" class=\"pl-1 d-flex align-items-top\">\n                            <scrm-favorite-toggle [record]=\"record\"\n                                                  class=\"d-inline-block h-100 lh-100\"></scrm-favorite-toggle>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-7 d-flex align-items-center justify-content-center justify-content-sm-end\">\n                    <div class=\"row mr-1 ml-1\">\n                        <div *ngIf=\"record\" class=\"w-100\">\n                            <scrm-action-group-menu\n                                [config]=\"actionsAdapter\"\n                                [actionContext]=\"getActionContext(record)\"\n                                [klass]=\"isScrolled ?  'record-view-actions-scrolled float-right' : 'record-view-actions float-right'\"\n                                buttonClass=\"settings-button\"\n                            >\n                            </scrm-action-group-menu>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </ng-template>\n    </div>\n</ng-container>\n" }]
    }], function () { return [{ type: i1.RecordActionsAdapter }, { type: i2.RecordViewStore }, { type: i3.ModuleNavigation }]; }, { onScroll: [{
            type: HostListener,
            args: ['window:scroll']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvcmVjb3JkL2NvbXBvbmVudHMvcmVjb3JkLWhlYWRlci9yZWNvcmQtaGVhZGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi92aWV3cy9yZWNvcmQvY29tcG9uZW50cy9yZWNvcmQtaGVhZGVyL3JlY29yZC1oZWFkZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUdILE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUl6RSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7Ozs7Ozs7SUNTcEMseUNBR3FCOzs7SUFGRCw2Q0FBd0IseUNBQUE7OztJQUc1QywrQkFDeUM7SUFDckMsMkNBQStEO0lBQ25FLGlCQUFNOzs7SUFEb0IsZUFBaUI7SUFBakIsc0NBQWlCOzs7SUFPbkQsK0JBQW9DO0lBQ2hDLDZDQUd5QjtJQUM3QixpQkFBTTs7O0lBSEUsZUFBeUI7SUFBekIsOENBQXlCOzs7SUExQmpELDZCQUE2QztJQUN6Qyw4QkFBZ0MsYUFBQSxhQUFBO0lBR3BCLHlCQUNNO0lBQ1YsaUJBQU07SUFDTix5QkFBeUI7SUFDekIsOEJBQWlCLGFBQUEsYUFBQTtJQUdMLG9IQUdxQjtJQUNyQix3RkFHTTtJQUNWLGlCQUFNLEVBQUEsRUFBQTtJQUdkLDBCQUF5QjtJQUN6QiwrQkFBaUI7SUFDYix3RkFLTTtJQUNWLGlCQUFNLEVBQUEsRUFBQTtJQUdsQiwwQkFBZTs7O0lBdEI4QixlQUE2QjtJQUE3Qiw0REFBNkI7SUFJNUMsZUFBa0Q7SUFBbEQsd0ZBQWtEO0lB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SSxvQkFBb0IsYUFFbkIsQ0FBQyxvQkFBb0IsQ0FBQztvSUFZRixRQUFRO2tCQUF0QyxZQUFZO21CQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cblxuaW1wb3J0IHtDb21wb25lbnQsIEhvc3RMaXN0ZW5lciwgT25EZXN0cm95LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtSZWNvcmRWaWV3U3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL3JlY29yZC12aWV3L3JlY29yZC12aWV3LnN0b3JlJztcbmltcG9ydCB7TW9kdWxlTmF2aWdhdGlvbn0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbmF2aWdhdGlvbi9tb2R1bGUtbmF2aWdhdGlvbi9tb2R1bGUtbmF2aWdhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7UmVjb3JkQWN0aW9uc0FkYXB0ZXJ9IGZyb20gJy4uLy4uL2FkYXB0ZXJzL2FjdGlvbnMuYWRhcHRlcic7XG5pbXBvcnQge0FjdGlvbkNvbnRleHQsIFJlY29yZCwgVmlld01vZGV9IGZyb20gJ2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1yZWNvcmQtaGVhZGVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3JlY29yZC1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHByb3ZpZGVyczogW1JlY29yZEFjdGlvbnNBZGFwdGVyXVxufSlcbmV4cG9ydCBjbGFzcyBSZWNvcmRIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICByZWNvcmQ6IFJlY29yZDtcbiAgICBkaXNwbGF5UmVzcG9uc2l2ZVRhYmxlID0gZmFsc2U7XG4gICAgbW9kZTogVmlld01vZGUgPSAnZGV0YWlsJztcbiAgICBsb2FkaW5nOiBib29sZWFuID0gdHJ1ZTtcbiAgICBpc1Njcm9sbGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwcm90ZWN0ZWQgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpzY3JvbGwnKSBvblNjcm9sbCgpIHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsUG9zaXRpb24gPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICAgIC8vU2Nyb2xsVGhyZXNob2xkIGlzIHNldCB0byA1ZW1cbiAgICAgICAgY29uc3Qgc2Nyb2xsVGhyZXNob2xkID0gNSAqIHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmZvbnRTaXplKTtcblxuICAgICAgICBpZiAoc2Nyb2xsUG9zaXRpb24gPiBzY3JvbGxUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgIC8vMjAgaXMganVzdCBhIHJhbmRvbSBzYWZlem9uZSBudW1iZXJcbiAgICAgICAgICAgIGlmIChzY3JvbGxQb3NpdGlvbiAtIHNjcm9sbFRocmVzaG9sZCA8IDEwKSByZXR1cm47XG4gICAgICAgICAgICB0aGlzLmlzU2Nyb2xsZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHNjcm9sbFRocmVzaG9sZCAtIHNjcm9sbFBvc2l0aW9uIDwgMTApIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuaXNTY3JvbGxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBhY3Rpb25zQWRhcHRlcjogUmVjb3JkQWN0aW9uc0FkYXB0ZXIsXG4gICAgICAgIHByb3RlY3RlZCByZWNvcmRWaWV3U3RvcmU6IFJlY29yZFZpZXdTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIG1vZHVsZU5hdmlnYXRpb246IE1vZHVsZU5hdmlnYXRpb25cbiAgICApIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tb2RlID0gdGhpcy5yZWNvcmRWaWV3U3RvcmUuZ2V0TW9kZSgpO1xuICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLnJlY29yZFZpZXdTdG9yZS5tb2RlJC5zdWJzY3JpYmUobW9kZSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1vZGUgPSBtb2RlO1xuICAgICAgICB9KSk7XG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMucmVjb3JkVmlld1N0b3JlLnJlY29yZCQuc3Vic2NyaWJlKHJlY29yZCA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlY29yZCA9IHJlY29yZDtcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMucmVjb3JkVmlld1N0b3JlLmxvYWRpbmckLnN1YnNjcmliZShsb2FkaW5nID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGxvYWRpbmc7XG4gICAgICAgIH0pKVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cblxuICAgIGdldCBtb2R1bGVUaXRsZSgpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBtb2R1bGUgPSB0aGlzLnJlY29yZFZpZXdTdG9yZS52bS5hcHBEYXRhLm1vZHVsZTtcbiAgICAgICAgY29uc3QgYXBwTGlzdFN0cmluZ3MgPSB0aGlzLnJlY29yZFZpZXdTdG9yZS52bS5hcHBEYXRhLmxhbmd1YWdlLmFwcExpc3RTdHJpbmdzO1xuICAgICAgICByZXR1cm4gdGhpcy5tb2R1bGVOYXZpZ2F0aW9uLmdldE1vZHVsZUxhYmVsKG1vZHVsZSwgYXBwTGlzdFN0cmluZ3MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBTdW1tYXJ5IHRlbXBsYXRlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0ZW1wbGF0ZSBsYWJlbFxuICAgICAqL1xuICAgIGdldFN1bW1hcnlUZW1wbGF0ZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWNvcmRWaWV3U3RvcmUuZ2V0U3VtbWFyeVRlbXBsYXRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgYWN0aW9uIGNvbnRleHRcbiAgICAgKiBAcGFyYW0gcmVjb3JkXG4gICAgICovXG4gICAgZ2V0QWN0aW9uQ29udGV4dChyZWNvcmQ6IFJlY29yZCk6IEFjdGlvbkNvbnRleHQge1xuICAgICAgICBpZiAoIXJlY29yZCkge1xuICAgICAgICAgICAgcmV0dXJuIHt9IGFzIEFjdGlvbkNvbnRleHRcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtb2R1bGU6IHJlY29yZC5tb2R1bGUgfHwgJycsXG4gICAgICAgICAgICByZWNvcmRcbiAgICAgICAgfSBhcyBBY3Rpb25Db250ZXh0XG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPG5nLWNvbnRhaW5lcj5cbiAgICA8ZGl2IFtuZ0NsYXNzXT1cImlzU2Nyb2xsZWQgPyAncmVjb3JkLXZpZXctaGVhZGVyLXNjcm9sbGVkIHNoYWRvdy1tZCc6ICcnXCIgY2xhc3M9XCJyZWNvcmQtdmlldy1oZWFkZXJcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImRpc3BsYXlSZXNwb25zaXZlVGFibGVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1ub3dyYXBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlci0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEwMFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3JkZXItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWNvcmQtdmlldy1uYW1lIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tZHluYW1pYy1sYWJlbCAqbmdJZj1cInJlY29yZCAmJiByZWNvcmQuZmllbGRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZmllbGRzXT1cInJlY29yZC5maWVsZHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsYWJlbEtleV09XCJnZXRTdW1tYXJ5VGVtcGxhdGUoKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Njcm0tZHluYW1pYy1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cInJlY29yZCAmJiByZWNvcmQuZmllbGRzICYmIG1vZGUgIT09ICdjcmVhdGUnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInBsLTEgZC1mbGV4IGFsaWduLWl0ZW1zLXRvcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tZmF2b3JpdGUtdG9nZ2xlIFtyZWNvcmRdPVwicmVjb3JkXCI+PC9zY3JtLWZhdm9yaXRlLXRvZ2dsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEwMFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwicmVjb3JkXCIgY2xhc3M9XCJvcmRlci0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tYWN0aW9uLWdyb3VwLW1lbnVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbmZpZ109XCJhY3Rpb25zQWRhcHRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtsYXNzPVwicmVjb3JkLXZpZXctYWN0aW9ucyBmbG9hdC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2NybS1hY3Rpb24tZ3JvdXAtbWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ0lmXT1cIiFkaXNwbGF5UmVzcG9uc2l2ZVRhYmxlXCI+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwibG9hZGluZ1wiIGNsYXNzPVwicm93IG1yLTBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTUgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGp1c3RpZnktY29udGVudC1zbS1zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgICA8c2NybS1tb2R1bGUtdGl0bGUgW3RpdGxlXT1cIm1vZHVsZVRpdGxlXCIgY2xhc3M9XCJyZWNvcmQtdmlldy10aXRsZSB0aXRsZS1mb250XCI+PC9zY3JtLW1vZHVsZS10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlY29yZC12aWV3LW5hbWUgcHQtMyBwYi0zXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCIhbG9hZGluZ1wiIGNsYXNzPVwicm93IG1yLTBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImlzU2Nyb2xsZWQgPyAnY29sLW1kLTUgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGp1c3RpZnktY29udGVudC1zbS1zdGFydCcgOiAnY29sLW1kLTUgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGp1c3RpZnktY29udGVudC1zbS1zdGFydCdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiaXNTY3JvbGxlZCA/ICdyZWNvcmQtdmlldy1uYW1lLXNjcm9sbGVkIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInIDogJ3JlY29yZC12aWV3LW5hbWUgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcidcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWR5bmFtaWMtbGFiZWwgKm5nSWY9XCJyZWNvcmQgJiYgcmVjb3JkLmZpZWxkc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZC1pbmxpbmUtYmxvY2sgaC0xMDAgbGgtMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ZpZWxkc109XCJyZWNvcmQuZmllbGRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xhYmVsS2V5XT1cImdldFN1bW1hcnlUZW1wbGF0ZSgpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Njcm0tZHluYW1pYy1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJyZWNvcmQgJiYgcmVjb3JkLmZpZWxkcyAmJiBtb2RlICE9PSAnY3JlYXRlJ1wiIGNsYXNzPVwicGwtMSBkLWZsZXggYWxpZ24taXRlbXMtdG9wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tZmF2b3JpdGUtdG9nZ2xlIFtyZWNvcmRdPVwicmVjb3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkLWlubGluZS1ibG9jayBoLTEwMCBsaC0xMDBcIj48L3Njcm0tZmF2b3JpdGUtdG9nZ2xlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNyBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIganVzdGlmeS1jb250ZW50LXNtLWVuZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG1yLTEgbWwtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cInJlY29yZFwiIGNsYXNzPVwidy0xMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1hY3Rpb24tZ3JvdXAtbWVudVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29uZmlnXT1cImFjdGlvbnNBZGFwdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2FjdGlvbkNvbnRleHRdPVwiZ2V0QWN0aW9uQ29udGV4dChyZWNvcmQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2tsYXNzXT1cImlzU2Nyb2xsZWQgPyAgJ3JlY29yZC12aWV3LWFjdGlvbnMtc2Nyb2xsZWQgZmxvYXQtcmlnaHQnIDogJ3JlY29yZC12aWV3LWFjdGlvbnMgZmxvYXQtcmlnaHQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uQ2xhc3M9XCJzZXR0aW5ncy1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Njcm0tYWN0aW9uLWdyb3VwLW1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8L2Rpdj5cbjwvbmctY29udGFpbmVyPlxuIl19