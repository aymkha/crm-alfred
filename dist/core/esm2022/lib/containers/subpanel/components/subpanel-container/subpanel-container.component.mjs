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
import { Component, Input, signal } from '@angular/core';
import { map, take, tap } from 'rxjs/operators';
import { MaxColumnsCalculator } from '../../../../services/ui/max-columns-calculator/max-columns-calculator.service';
import { isTrue } from 'common';
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/language/language.store";
import * as i2 from "../../../../services/ui/max-columns-calculator/max-columns-calculator.service";
import * as i3 from "../../../../services/local-storage/local-storage.service";
import * as i4 from "../../../../store/user-preference/user-preference.store";
import * as i5 from "@angular/common";
import * as i6 from "@ng-bootstrap/ng-bootstrap";
import * as i7 from "../../../../components/image/image.component";
import * as i8 from "../subpanel/subpanel.component";
import * as i9 from "../../../../components/grid-widget/grid-widget.component";
import * as i10 from "../../../../components/label/label.component";
function SubpanelContainerComponent_ng_container_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-image", 12);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("image", ctx_r3.toggleIcon());
    i0.ɵɵattribute("aria-expanded", false);
} }
function SubpanelContainerComponent_ng_container_0_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-image", 12);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("image", ctx_r4.toggleIcon());
    i0.ɵɵattribute("aria-expanded", true);
} }
const _c0 = function (a0) { return { "sub-panel-banner-button-active": a0 }; };
function SubpanelContainerComponent_ng_container_0_ng_template_12_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵlistener("click", function SubpanelContainerComponent_ng_container_0_ng_template_12_div_2_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r10); const item_r8 = restoredCtx.$implicit; const ctx_r9 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r9.showSubpanel(item_r8.key, item_r8.value)); });
    i0.ɵɵelement(1, "scrm-grid-widget", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r7 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0, item_r8.value.show === true));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("config", ctx_r7.getGridConfig(item_r8.value));
} }
function SubpanelContainerComponent_ng_container_0_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13)(1, "div", 14);
    i0.ɵɵtemplate(2, SubpanelContainerComponent_ng_container_0_ng_template_12_div_2_Template, 2, 4, "div", 15);
    i0.ɵɵpipe(3, "keyvalue");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const vm_r1 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(3, 1, vm_r1.subpanels));
} }
function SubpanelContainerComponent_ng_container_0_ng_container_14_ng_container_1_scrm_subpanel_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-subpanel", 19);
} if (rf & 2) {
    const item_r14 = i0.ɵɵnextContext().ngIf;
    const subpanelKey_r12 = i0.ɵɵnextContext().$implicit;
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("maxColumns$", ctx_r15.maxColumns$)("store", item_r14)("filterConfig", ctx_r15.filterConfig)("onClose", ctx_r15.getCloseCallBack(subpanelKey_r12, item_r14));
} }
function SubpanelContainerComponent_ng_container_0_ng_container_14_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, SubpanelContainerComponent_ng_container_0_ng_container_14_ng_container_1_scrm_subpanel_1_Template, 1, 4, "scrm-subpanel", 18);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r14 = ctx.ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r14.show);
} }
function SubpanelContainerComponent_ng_container_0_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, SubpanelContainerComponent_ng_container_0_ng_container_14_ng_container_1_Template, 2, 1, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const subpanelKey_r12 = ctx.$implicit;
    const vm_r1 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", vm_r1.subpanels[subpanelKey_r12]);
} }
function SubpanelContainerComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 1, 2)(3, "div", 3)(4, "div", 4)(5, "a", 5);
    i0.ɵɵlistener("click", function SubpanelContainerComponent_ng_container_0_Template_a_click_5_listener() { i0.ɵɵrestoreView(_r20); const ctx_r19 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r19.toggleSubPanels()); });
    i0.ɵɵelementStart(6, "div", 6);
    i0.ɵɵelement(7, "scrm-label", 7);
    i0.ɵɵtemplate(8, SubpanelContainerComponent_ng_container_0_ng_container_8_Template, 2, 2, "ng-container", 0);
    i0.ɵɵtemplate(9, SubpanelContainerComponent_ng_container_0_ng_container_9_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "div", 8)(11, "div", 9);
    i0.ɵɵtemplate(12, SubpanelContainerComponent_ng_container_0_ng_template_12_Template, 4, 3, "ng-template");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(13, "div", 10);
    i0.ɵɵtemplate(14, SubpanelContainerComponent_ng_container_0_ng_container_14_Template, 2, 1, "ng-container", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("collapsed", ctx_r0.isCollapsed());
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r0.isCollapsed());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.isCollapsed());
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r0.openSubpanels);
} }
class SubpanelContainerComponent {
    languageStore;
    maxColumnCalculator;
    localStorage;
    preferences;
    config;
    isCollapsed = signal(false);
    toggleIcon = signal('arrow_down_filled');
    maxColumns$;
    languages$ = this.languageStore.vm$;
    vm$;
    openSubpanels = [];
    filterConfig;
    constructor(languageStore, maxColumnCalculator, localStorage, preferences) {
        this.languageStore = languageStore;
        this.maxColumnCalculator = maxColumnCalculator;
        this.localStorage = localStorage;
        this.preferences = preferences;
    }
    ngOnInit() {
        const module = this?.config?.parentModule ?? 'default';
        this.setCollapsed(isTrue(this.preferences.getUi(module, 'subpanel-container-collapse') ?? false));
        this.openSubpanels = this.preferences.getUi(module, 'subpanel-container-open-subpanels') ?? [];
        this.vm$ = this.config.subpanels$.pipe(map((subpanelsMap) => ({
            subpanels: subpanelsMap
        })), tap((subpanelsMap) => {
            if (!subpanelsMap || !Object.keys(subpanelsMap).length) {
                return;
            }
            if (!this.openSubpanels || this.openSubpanels.length < 1) {
                return;
            }
            this.openSubpanels.forEach(subpanelKey => {
                const subpanel = subpanelsMap.subpanels[subpanelKey];
                if (!subpanel || subpanel.show) {
                    return;
                }
                subpanel.show = true;
                subpanel.load().pipe(take(1)).subscribe();
            });
        }));
        this.maxColumns$ = this.getMaxColumns();
    }
    getMaxColumns() {
        return this.maxColumnCalculator.getMaxColumns(this.config.sidebarActive$);
    }
    toggleSubPanels() {
        this.setCollapsed(!this.isCollapsed());
        const module = this?.config?.parentModule ?? 'default';
        this.preferences.setUi(module, 'subpanel-container-collapse', this.isCollapsed());
    }
    showSubpanel(key, item) {
        item.show = !item.show;
        if (item.show) {
            if (!this.openSubpanels.includes(key)) {
                this.openSubpanels.push(key);
            }
            item.load().pipe(take(1)).subscribe();
        }
        else {
            this.openSubpanels = this.openSubpanels.filter(subpanelKey => subpanelKey != key);
        }
        const module = this?.config?.parentModule ?? 'default';
        this.preferences.setUi(module, 'subpanel-container-open-subpanels', this.openSubpanels);
    }
    getCloseCallBack(key, item) {
        return () => this.showSubpanel(key, item);
    }
    getGridConfig(vm) {
        if (!vm.metadata || !vm.metadata.insightWidget) {
            return {
                layout: null,
            };
        }
        const layout = vm.getWidgetLayout();
        layout.rows.forEach(row => {
            if (!row.cols || !row.cols.length) {
                return;
            }
            row.cols.forEach(col => {
                if (!col.statistic) {
                    return;
                }
                const store = vm.getStatistic(col.statistic);
                if (store) {
                    col.store = store;
                }
            });
        });
        return {
            rowClass: 'statistics-sidebar-widget-row',
            columnClass: 'statistics-sidebar-widget-col',
            layout,
            widgetConfig: {},
            queryArgs: {
                module: vm.metadata.name,
                context: { module: vm.parentModule, id: vm.parentId },
                params: { subpanel: vm.metadata.name },
            },
        };
    }
    setCollapsed(newCollapsedValue) {
        this.isCollapsed.set(newCollapsedValue);
        this.setToggleIcon();
    }
    setToggleIcon() {
        this.toggleIcon.set((this.isCollapsed()) ? 'arrow_up_filled' : 'arrow_down_filled');
    }
    static ɵfac = function SubpanelContainerComponent_Factory(t) { return new (t || SubpanelContainerComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i2.MaxColumnsCalculator), i0.ɵɵdirectiveInject(i3.LocalStorageService), i0.ɵɵdirectiveInject(i4.UserPreferenceStore)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SubpanelContainerComponent, selectors: [["scrm-subpanel-container"]], inputs: { config: "config" }, features: [i0.ɵɵProvidersFeature([MaxColumnsCalculator])], decls: 2, vars: 3, consts: [[4, "ngIf"], ["ngbAccordion", "", "activeIds", "sub-panel-buttons", 1, "sub-panel-banner"], ["accordion", "ngbAccordion"], ["ngbAccordionItem", "", "id", "sub-panel-buttons", 1, "card", 3, "collapsed"], ["ngbAccordionHeader", "", 1, "card-header"], [1, "clickable", 3, "click"], [1, "d-flex", "align-items-center", "justify-content-between"], ["labelKey", "LBL_SELECT_SUBPANEL_BANNER"], ["ngbAccordionCollapse", ""], ["ngbAccordionBody", ""], ["id", "sub-panels"], [4, "ngFor", "ngForOf"], ["aria-controls", "collapseShowSubPanels", 1, "float-right", 3, "image"], ["id", "collapseShowSubPanels"], [1, "row", "insight-panel"], ["class", "col-xs-6 col-sm-3 col-md-2 insight-panel-card border-insight", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "col-xs-6", "col-sm-3", "col-md-2", "insight-panel-card", "border-insight", 3, "ngClass", "click"], [3, "config"], ["class", "sub-panel", 3, "maxColumns$", "store", "filterConfig", "onClose", 4, "ngIf"], [1, "sub-panel", 3, "maxColumns$", "store", "filterConfig", "onClose"]], template: function SubpanelContainerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SubpanelContainerComponent_ng_container_0_Template, 15, 4, "ng-container", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.vm$));
        } }, dependencies: [i5.NgClass, i5.NgForOf, i5.NgIf, i6.NgbAccordionDirective, i6.NgbAccordionItem, i6.NgbAccordionHeader, i6.NgbAccordionBody, i6.NgbAccordionCollapse, i7.ImageComponent, i8.SubpanelComponent, i9.GridWidgetComponent, i10.LabelComponent, i5.AsyncPipe, i5.KeyValuePipe], encapsulation: 2 });
}
export { SubpanelContainerComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SubpanelContainerComponent, [{
        type: Component,
        args: [{ selector: 'scrm-subpanel-container', providers: [MaxColumnsCalculator], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"(vm$ | async) as vm\">\n    <div ngbAccordion class=\"sub-panel-banner\" #accordion=\"ngbAccordion\" activeIds=\"sub-panel-buttons\">\n        <div ngbAccordionItem id=\"sub-panel-buttons\" class=\"card\" [collapsed]=\"isCollapsed()\">\n            <div ngbAccordionHeader class=\"card-header\">\n                <a (click)=\"toggleSubPanels()\" class=\"clickable\">\n                    <div class=\"d-flex align-items-center justify-content-between\">\n                        <scrm-label labelKey=\"LBL_SELECT_SUBPANEL_BANNER\"></scrm-label>\n                        <ng-container *ngIf=\"isCollapsed()\">\n                            <scrm-image\n                                    [attr.aria-expanded]=\"false\"\n                                    [image]=\"toggleIcon()\"\n                                    aria-controls=\"collapseShowSubPanels\"\n                                    class=\"float-right\">\n                            </scrm-image>\n                        </ng-container>\n                        <ng-container *ngIf=\"!isCollapsed()\">\n                            <scrm-image\n                                    [attr.aria-expanded]=\"true\"\n                                    [image]=\"toggleIcon()\"\n                                    aria-controls=\"collapseShowSubPanels\"\n                                    class=\"float-right\">\n                            </scrm-image>\n                        </ng-container>\n                    </div>\n                </a>\n            </div>\n            <div ngbAccordionCollapse>\n                <div ngbAccordionBody>\n                    <ng-template>\n                        <div id=\"collapseShowSubPanels\">\n                            <div class=\"row insight-panel\">\n                                <div class=\"col-xs-6 col-sm-3 col-md-2 insight-panel-card border-insight\"\n                                     *ngFor=\"let item of vm.subpanels | keyvalue\"\n                                     [ngClass]=\"{'sub-panel-banner-button-active': item.value.show === true}\"\n                                     (click)=\"showSubpanel(item.key, item.value)\">\n                                    <scrm-grid-widget [config]=\"getGridConfig(item.value)\"></scrm-grid-widget>\n\n                                </div>\n                            </div>\n                        </div>\n                    </ng-template>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n    <div id=\"sub-panels\">\n        <ng-container *ngFor=\"let subpanelKey of this.openSubpanels\">\n            <ng-container *ngIf=\"(vm.subpanels[subpanelKey]) as item\">\n                <scrm-subpanel *ngIf=\"item.show\"\n                               [maxColumns$]=\"maxColumns$\"\n                               [store]=\"item\"\n                               [filterConfig]=\"filterConfig\"\n                               [onClose]=\"getCloseCallBack(subpanelKey, item)\"\n                               class=\"sub-panel\">\n                </scrm-subpanel>\n            </ng-container>\n        </ng-container>\n\n    </div>\n\n</ng-container>\n" }]
    }], function () { return [{ type: i1.LanguageStore }, { type: i2.MaxColumnsCalculator }, { type: i3.LocalStorageService }, { type: i4.UserPreferenceStore }]; }, { config: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VicGFuZWwtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb250YWluZXJzL3N1YnBhbmVsL2NvbXBvbmVudHMvc3VicGFuZWwtY29udGFpbmVyL3N1YnBhbmVsLWNvbnRhaW5lci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9zdWJwYW5lbC9jb21wb25lbnRzL3N1YnBhbmVsLWNvbnRhaW5lci9zdWJwYW5lbC1jb250YWluZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUs5QyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwrRUFBK0UsQ0FBQztBQUNuSCxPQUFPLEVBQUMsTUFBTSxFQUE4QixNQUFNLFFBQVEsQ0FBQzs7Ozs7Ozs7Ozs7OztJQ0NuQyw2QkFBb0M7SUFDaEMsaUNBS2E7SUFDakIsMEJBQWU7OztJQUpILGVBQXNCO0lBQXRCLDJDQUFzQjtJQUR0QixzQ0FBNEI7OztJQU14Qyw2QkFBcUM7SUFDakMsaUNBS2E7SUFDakIsMEJBQWU7OztJQUpILGVBQXNCO0lBQXRCLDJDQUFzQjtJQUR0QixxQ0FBMkI7Ozs7O0lBYy9CLCtCQUdrRDtJQUE3QywrUEFBUyxlQUFBLCtDQUFrQyxDQUFBLElBQUM7SUFDN0MsdUNBQTBFO0lBRTlFLGlCQUFNOzs7O0lBSkQsaUZBQXdFO0lBRXZELGVBQW9DO0lBQXBDLDREQUFvQzs7O0lBTmxFLCtCQUFnQyxjQUFBO0lBRXhCLDBHQU1NOztJQUNWLGlCQUFNLEVBQUE7OztJQU5vQixlQUEwQjtJQUExQiwrREFBMEI7OztJQWtCaEUsb0NBTWdCOzs7OztJQUxELGlEQUEyQixtQkFBQSxzQ0FBQSxnRUFBQTs7O0lBRjlDLDZCQUEwRDtJQUN0RCw4SUFNZ0I7SUFDcEIsMEJBQWU7OztJQVBLLGVBQWU7SUFBZixvQ0FBZTs7O0lBRnZDLDZCQUE2RDtJQUN6RCw0SEFRZTtJQUNuQiwwQkFBZTs7OztJQVRJLGVBQWtDO0lBQWxDLHVEQUFrQzs7OztJQWpEN0QsNkJBQTBDO0lBQ3RDLGlDQUFtRyxhQUFBLGFBQUEsV0FBQTtJQUdwRiw2S0FBUyxlQUFBLHlCQUFpQixDQUFBLElBQUM7SUFDMUIsOEJBQStEO0lBQzNELGdDQUErRDtJQUMvRCw0R0FPZTtJQUNmLDRHQU9lO0lBQ25CLGlCQUFNLEVBQUEsRUFBQTtJQUdkLCtCQUEwQixjQUFBO0lBRWxCLHlHQVljO0lBQ2xCLGlCQUFNLEVBQUEsRUFBQSxFQUFBO0lBTWxCLGdDQUFxQjtJQUNqQiwrR0FVZTtJQUVuQixpQkFBTTtJQUVWLDBCQUFlOzs7SUE1RG1ELGVBQTJCO0lBQTNCLGdEQUEyQjtJQUt0RCxlQUFtQjtJQUFuQiwyQ0FBbUI7SUFRbkIsZUFBb0I7SUFBcEIsNENBQW9CO0lBaUNiLGVBQXFCO0lBQXJCLDhDQUFxQjs7QURwQ25FLE1BS2EsMEJBQTBCO0lBZ0JyQjtJQUNBO0lBQ0E7SUFDQTtJQWpCTCxNQUFNLENBQTBCO0lBRXpDLFdBQVcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsVUFBVSxHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3pDLFdBQVcsQ0FBcUI7SUFFaEMsVUFBVSxHQUFnQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQztJQUVqRSxHQUFHLENBQThDO0lBQ2pELGFBQWEsR0FBYSxFQUFFLENBQUM7SUFFN0IsWUFBWSxDQUFlO0lBRTNCLFlBQ2MsYUFBNEIsRUFDNUIsbUJBQXlDLEVBQ3pDLFlBQWlDLEVBQ2pDLFdBQWdDO1FBSGhDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBc0I7UUFDekMsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQ2pDLGdCQUFXLEdBQVgsV0FBVyxDQUFxQjtJQUU5QyxDQUFDO0lBRUQsUUFBUTtRQUNKLE1BQU0sTUFBTSxHQUFHLElBQUksRUFBRSxNQUFNLEVBQUUsWUFBWSxJQUFJLFNBQVMsQ0FBQztRQUN2RCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsNkJBQTZCLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRWxHLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLG1DQUFtQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRS9GLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUNsQyxHQUFHLENBQUMsQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDbkIsU0FBUyxFQUFFLFlBQVk7U0FDMUIsQ0FBQyxDQUFDLEVBQ0gsR0FBRyxDQUFDLENBQUMsWUFBWSxFQUFFLEVBQUU7WUFDakIsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxFQUFFO2dCQUNwRCxPQUFPO2FBQ1Y7WUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3RELE9BQU87YUFDVjtZQUVELElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFO2dCQUNyQyxNQUFNLFFBQVEsR0FBRyxZQUFZLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUVyRCxJQUFJLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7b0JBQzVCLE9BQU87aUJBQ1Y7Z0JBRUQsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7WUFFOUMsQ0FBQyxDQUFDLENBQUM7UUFFUCxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRVIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDNUMsQ0FBQztJQUVELGFBQWE7UUFDVCxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUQsZUFBZTtRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUV2QyxNQUFNLE1BQU0sR0FBRyxJQUFJLEVBQUUsTUFBTSxFQUFFLFlBQVksSUFBSSxTQUFTLENBQUM7UUFDdkQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLDZCQUE2QixFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFFRCxZQUFZLENBQUMsR0FBVyxFQUFFLElBQW1CO1FBQ3pDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRXZCLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDaEM7WUFDRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ3pDO2FBQU07WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsV0FBVyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1NBQ3JGO1FBRUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLElBQUksU0FBUyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxtQ0FBbUMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDNUYsQ0FBQztJQUVELGdCQUFnQixDQUFDLEdBQVcsRUFBRSxJQUFtQjtRQUM3QyxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxhQUFhLENBQUMsRUFBaUI7UUFFM0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRTtZQUM1QyxPQUFPO2dCQUNILE1BQU0sRUFBRSxJQUFJO2FBQ0ssQ0FBQztTQUN6QjtRQUdELE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUVwQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUV0QixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUMvQixPQUFPO2FBQ1Y7WUFFRCxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFFbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUU7b0JBQ2hCLE9BQU87aUJBQ1Y7Z0JBRUQsTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzdDLElBQUksS0FBSyxFQUFFO29CQUNQLEdBQUcsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2lCQUNyQjtZQUNMLENBQUMsQ0FBQyxDQUFDO1FBRVAsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPO1lBQ0gsUUFBUSxFQUFFLCtCQUErQjtZQUN6QyxXQUFXLEVBQUUsK0JBQStCO1lBQzVDLE1BQU07WUFDTixZQUFZLEVBQUUsRUFBb0I7WUFDbEMsU0FBUyxFQUFFO2dCQUNQLE1BQU0sRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUk7Z0JBQ3hCLE9BQU8sRUFBRSxFQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsWUFBWSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsUUFBUSxFQUFnQjtnQkFDbEUsTUFBTSxFQUFFLEVBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFDO2FBQ2hCO1NBQ1AsQ0FBQztJQUMxQixDQUFDO0lBRVMsWUFBWSxDQUFDLGlCQUEwQjtRQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRVMsYUFBYTtRQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUN4RixDQUFDO29GQTdJUSwwQkFBMEI7NkRBQTFCLDBCQUEwQiwyR0FGeEIsQ0FBQyxvQkFBb0IsQ0FBQztZQ2ZyQyw4RkE4RGU7OztZQTlEQSxvREFBb0I7OztTRGlCdEIsMEJBQTBCO3VGQUExQiwwQkFBMEI7Y0FMdEMsU0FBUzsyQkFDSSx5QkFBeUIsYUFFeEIsQ0FBQyxvQkFBb0IsQ0FBQzt1S0FJeEIsTUFBTTtrQkFBZCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgc2lnbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7bWFwLCB0YWtlLCB0YXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1N1YnBhbmVsQ29udGFpbmVyQ29uZmlnfSBmcm9tICcuL3N1YnBhbmVsLWNvbnRhaW5lci5tb2RlbCc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmUsIExhbmd1YWdlU3RyaW5nc30gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtTdWJwYW5lbFN0b3JlLCBTdWJwYW5lbFN0b3JlTWFwfSBmcm9tICcuLi8uLi9zdG9yZS9zdWJwYW5lbC9zdWJwYW5lbC5zdG9yZSc7XG5pbXBvcnQge01heENvbHVtbnNDYWxjdWxhdG9yfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy91aS9tYXgtY29sdW1ucy1jYWxjdWxhdG9yL21heC1jb2x1bW5zLWNhbGN1bGF0b3Iuc2VydmljZSc7XG5pbXBvcnQge2lzVHJ1ZSwgVmlld0NvbnRleHQsIFdpZGdldE1ldGFkYXRhfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtHcmlkV2lkZ2V0Q29uZmlnLCBTdGF0aXN0aWNzUXVlcnlBcmdzfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2dyaWQtd2lkZ2V0L2dyaWQtd2lkZ2V0LmNvbXBvbmVudCc7XG5pbXBvcnQge0xvY2FsU3RvcmFnZVNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlcy9sb2NhbC1zdG9yYWdlL2xvY2FsLXN0b3JhZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHtGaWx0ZXJDb25maWd9IGZyb20gXCIuLi8uLi8uLi9saXN0LWZpbHRlci9jb21wb25lbnRzL2xpc3QtZmlsdGVyL2xpc3QtZmlsdGVyLm1vZGVsXCI7XG5pbXBvcnQge1VzZXJQcmVmZXJlbmNlU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3VzZXItcHJlZmVyZW5jZS91c2VyLXByZWZlcmVuY2Uuc3RvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tc3VicGFuZWwtY29udGFpbmVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3N1YnBhbmVsLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbTWF4Q29sdW1uc0NhbGN1bGF0b3JdXG59KVxuZXhwb3J0IGNsYXNzIFN1YnBhbmVsQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIGNvbmZpZzogU3VicGFuZWxDb250YWluZXJDb25maWc7XG5cbiAgICBpc0NvbGxhcHNlZCA9IHNpZ25hbChmYWxzZSk7XG4gICAgdG9nZ2xlSWNvbiA9IHNpZ25hbCgnYXJyb3dfZG93bl9maWxsZWQnKTtcbiAgICBtYXhDb2x1bW5zJDogT2JzZXJ2YWJsZTxudW1iZXI+O1xuXG4gICAgbGFuZ3VhZ2VzJDogT2JzZXJ2YWJsZTxMYW5ndWFnZVN0cmluZ3M+ID0gdGhpcy5sYW5ndWFnZVN0b3JlLnZtJDtcblxuICAgIHZtJDogT2JzZXJ2YWJsZTx7IHN1YnBhbmVsczogU3VicGFuZWxTdG9yZU1hcCB9PjtcbiAgICBvcGVuU3VicGFuZWxzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgZmlsdGVyQ29uZmlnOiBGaWx0ZXJDb25maWc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlU3RvcmU6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBtYXhDb2x1bW5DYWxjdWxhdG9yOiBNYXhDb2x1bW5zQ2FsY3VsYXRvcixcbiAgICAgICAgcHJvdGVjdGVkIGxvY2FsU3RvcmFnZTogTG9jYWxTdG9yYWdlU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIHByZWZlcmVuY2VzOiBVc2VyUHJlZmVyZW5jZVN0b3JlXG4gICAgKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IHRoaXM/LmNvbmZpZz8ucGFyZW50TW9kdWxlID8/ICdkZWZhdWx0JztcbiAgICAgICAgdGhpcy5zZXRDb2xsYXBzZWQoaXNUcnVlKHRoaXMucHJlZmVyZW5jZXMuZ2V0VWkobW9kdWxlLCAnc3VicGFuZWwtY29udGFpbmVyLWNvbGxhcHNlJykgPz8gZmFsc2UpKTtcblxuICAgICAgICB0aGlzLm9wZW5TdWJwYW5lbHMgPSB0aGlzLnByZWZlcmVuY2VzLmdldFVpKG1vZHVsZSwgJ3N1YnBhbmVsLWNvbnRhaW5lci1vcGVuLXN1YnBhbmVscycpID8/IFtdO1xuXG4gICAgICAgIHRoaXMudm0kID0gdGhpcy5jb25maWcuc3VicGFuZWxzJC5waXBlKFxuICAgICAgICAgICAgbWFwKChzdWJwYW5lbHNNYXApID0+ICh7XG4gICAgICAgICAgICAgICAgc3VicGFuZWxzOiBzdWJwYW5lbHNNYXBcbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgIHRhcCgoc3VicGFuZWxzTWFwKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFzdWJwYW5lbHNNYXAgfHwgIU9iamVjdC5rZXlzKHN1YnBhbmVsc01hcCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMub3BlblN1YnBhbmVscyB8fCB0aGlzLm9wZW5TdWJwYW5lbHMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuU3VicGFuZWxzLmZvckVhY2goc3VicGFuZWxLZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdWJwYW5lbCA9IHN1YnBhbmVsc01hcC5zdWJwYW5lbHNbc3VicGFuZWxLZXldO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghc3VicGFuZWwgfHwgc3VicGFuZWwuc2hvdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgc3VicGFuZWwuc2hvdyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHN1YnBhbmVsLmxvYWQoKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgpO1xuXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICB0aGlzLm1heENvbHVtbnMkID0gdGhpcy5nZXRNYXhDb2x1bW5zKCk7XG4gICAgfVxuXG4gICAgZ2V0TWF4Q29sdW1ucygpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXhDb2x1bW5DYWxjdWxhdG9yLmdldE1heENvbHVtbnModGhpcy5jb25maWcuc2lkZWJhckFjdGl2ZSQpO1xuICAgIH1cblxuICAgIHRvZ2dsZVN1YlBhbmVscygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZXRDb2xsYXBzZWQoIXRoaXMuaXNDb2xsYXBzZWQoKSk7XG5cbiAgICAgICAgY29uc3QgbW9kdWxlID0gdGhpcz8uY29uZmlnPy5wYXJlbnRNb2R1bGUgPz8gJ2RlZmF1bHQnO1xuICAgICAgICB0aGlzLnByZWZlcmVuY2VzLnNldFVpKG1vZHVsZSwgJ3N1YnBhbmVsLWNvbnRhaW5lci1jb2xsYXBzZScsIHRoaXMuaXNDb2xsYXBzZWQoKSk7XG4gICAgfVxuXG4gICAgc2hvd1N1YnBhbmVsKGtleTogc3RyaW5nLCBpdGVtOiBTdWJwYW5lbFN0b3JlKTogdm9pZCB7XG4gICAgICAgIGl0ZW0uc2hvdyA9ICFpdGVtLnNob3c7XG5cbiAgICAgICAgaWYgKGl0ZW0uc2hvdykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLm9wZW5TdWJwYW5lbHMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3BlblN1YnBhbmVscy5wdXNoKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpdGVtLmxvYWQoKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vcGVuU3VicGFuZWxzID0gdGhpcy5vcGVuU3VicGFuZWxzLmZpbHRlcihzdWJwYW5lbEtleSA9PiBzdWJwYW5lbEtleSAhPSBrZXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbW9kdWxlID0gdGhpcz8uY29uZmlnPy5wYXJlbnRNb2R1bGUgPz8gJ2RlZmF1bHQnO1xuICAgICAgICB0aGlzLnByZWZlcmVuY2VzLnNldFVpKG1vZHVsZSwgJ3N1YnBhbmVsLWNvbnRhaW5lci1vcGVuLXN1YnBhbmVscycsIHRoaXMub3BlblN1YnBhbmVscyk7XG4gICAgfVxuXG4gICAgZ2V0Q2xvc2VDYWxsQmFjayhrZXk6IHN0cmluZywgaXRlbTogU3VicGFuZWxTdG9yZSk6IEZ1bmN0aW9uIHtcbiAgICAgICAgcmV0dXJuICgpID0+IHRoaXMuc2hvd1N1YnBhbmVsKGtleSwgaXRlbSk7XG4gICAgfVxuXG4gICAgZ2V0R3JpZENvbmZpZyh2bTogU3VicGFuZWxTdG9yZSk6IEdyaWRXaWRnZXRDb25maWcge1xuXG4gICAgICAgIGlmICghdm0ubWV0YWRhdGEgfHwgIXZtLm1ldGFkYXRhLmluc2lnaHRXaWRnZXQpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbGF5b3V0OiBudWxsLFxuICAgICAgICAgICAgfSBhcyBHcmlkV2lkZ2V0Q29uZmlnO1xuICAgICAgICB9XG5cblxuICAgICAgICBjb25zdCBsYXlvdXQgPSB2bS5nZXRXaWRnZXRMYXlvdXQoKTtcblxuICAgICAgICBsYXlvdXQucm93cy5mb3JFYWNoKHJvdyA9PiB7XG5cbiAgICAgICAgICAgIGlmICghcm93LmNvbHMgfHwgIXJvdy5jb2xzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcm93LmNvbHMuZm9yRWFjaChjb2wgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKCFjb2wuc3RhdGlzdGljKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzdG9yZSA9IHZtLmdldFN0YXRpc3RpYyhjb2wuc3RhdGlzdGljKTtcbiAgICAgICAgICAgICAgICBpZiAoc3RvcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29sLnN0b3JlID0gc3RvcmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJvd0NsYXNzOiAnc3RhdGlzdGljcy1zaWRlYmFyLXdpZGdldC1yb3cnLFxuICAgICAgICAgICAgY29sdW1uQ2xhc3M6ICdzdGF0aXN0aWNzLXNpZGViYXItd2lkZ2V0LWNvbCcsXG4gICAgICAgICAgICBsYXlvdXQsXG4gICAgICAgICAgICB3aWRnZXRDb25maWc6IHt9IGFzIFdpZGdldE1ldGFkYXRhLFxuICAgICAgICAgICAgcXVlcnlBcmdzOiB7XG4gICAgICAgICAgICAgICAgbW9kdWxlOiB2bS5tZXRhZGF0YS5uYW1lLFxuICAgICAgICAgICAgICAgIGNvbnRleHQ6IHttb2R1bGU6IHZtLnBhcmVudE1vZHVsZSwgaWQ6IHZtLnBhcmVudElkfSBhcyBWaWV3Q29udGV4dCxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtzdWJwYW5lbDogdm0ubWV0YWRhdGEubmFtZX0sXG4gICAgICAgICAgICB9IGFzIFN0YXRpc3RpY3NRdWVyeUFyZ3MsXG4gICAgICAgIH0gYXMgR3JpZFdpZGdldENvbmZpZztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2V0Q29sbGFwc2VkKG5ld0NvbGxhcHNlZFZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXNDb2xsYXBzZWQuc2V0KG5ld0NvbGxhcHNlZFZhbHVlKTtcbiAgICAgICAgdGhpcy5zZXRUb2dnbGVJY29uKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldFRvZ2dsZUljb24oKTogdm9pZCB7XG4gICAgICAgIHRoaXMudG9nZ2xlSWNvbi5zZXQoKHRoaXMuaXNDb2xsYXBzZWQoKSkgPyAnYXJyb3dfdXBfZmlsbGVkJyA6ICdhcnJvd19kb3duX2ZpbGxlZCcpO1xuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxuZy1jb250YWluZXIgKm5nSWY9XCIodm0kIHwgYXN5bmMpIGFzIHZtXCI+XG4gICAgPGRpdiBuZ2JBY2NvcmRpb24gY2xhc3M9XCJzdWItcGFuZWwtYmFubmVyXCIgI2FjY29yZGlvbj1cIm5nYkFjY29yZGlvblwiIGFjdGl2ZUlkcz1cInN1Yi1wYW5lbC1idXR0b25zXCI+XG4gICAgICAgIDxkaXYgbmdiQWNjb3JkaW9uSXRlbSBpZD1cInN1Yi1wYW5lbC1idXR0b25zXCIgY2xhc3M9XCJjYXJkXCIgW2NvbGxhcHNlZF09XCJpc0NvbGxhcHNlZCgpXCI+XG4gICAgICAgICAgICA8ZGl2IG5nYkFjY29yZGlvbkhlYWRlciBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cInRvZ2dsZVN1YlBhbmVscygpXCIgY2xhc3M9XCJjbGlja2FibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWxhYmVsIGxhYmVsS2V5PVwiTEJMX1NFTEVDVF9TVUJQQU5FTF9CQU5ORVJcIj48L3Njcm0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNDb2xsYXBzZWQoKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWV4cGFuZGVkXT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbWFnZV09XCJ0b2dnbGVJY29uKClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cImNvbGxhcHNlU2hvd1N1YlBhbmVsc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZsb2F0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zY3JtLWltYWdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWlzQ29sbGFwc2VkKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1pbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1leHBhbmRlZF09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbWFnZV09XCJ0b2dnbGVJY29uKClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cImNvbGxhcHNlU2hvd1N1YlBhbmVsc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZsb2F0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zY3JtLWltYWdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBuZ2JBY2NvcmRpb25Db2xsYXBzZT5cbiAgICAgICAgICAgICAgICA8ZGl2IG5nYkFjY29yZGlvbkJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjb2xsYXBzZVNob3dTdWJQYW5lbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGluc2lnaHQtcGFuZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy02IGNvbC1zbS0zIGNvbC1tZC0yIGluc2lnaHQtcGFuZWwtY2FyZCBib3JkZXItaW5zaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygdm0uc3VicGFuZWxzIHwga2V5dmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnc3ViLXBhbmVsLWJhbm5lci1idXR0b24tYWN0aXZlJzogaXRlbS52YWx1ZS5zaG93ID09PSB0cnVlfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInNob3dTdWJwYW5lbChpdGVtLmtleSwgaXRlbS52YWx1ZSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWdyaWQtd2lkZ2V0IFtjb25maWddPVwiZ2V0R3JpZENvbmZpZyhpdGVtLnZhbHVlKVwiPjwvc2NybS1ncmlkLXdpZGdldD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGlkPVwic3ViLXBhbmVsc1wiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBzdWJwYW5lbEtleSBvZiB0aGlzLm9wZW5TdWJwYW5lbHNcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIodm0uc3VicGFuZWxzW3N1YnBhbmVsS2V5XSkgYXMgaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxzY3JtLXN1YnBhbmVsICpuZ0lmPVwiaXRlbS5zaG93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbWF4Q29sdW1ucyRdPVwibWF4Q29sdW1ucyRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzdG9yZV09XCJpdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZmlsdGVyQ29uZmlnXT1cImZpbHRlckNvbmZpZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW29uQ2xvc2VdPVwiZ2V0Q2xvc2VDYWxsQmFjayhzdWJwYW5lbEtleSwgaXRlbSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic3ViLXBhbmVsXCI+XG4gICAgICAgICAgICAgICAgPC9zY3JtLXN1YnBhbmVsPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPC9kaXY+XG5cbjwvbmctY29udGFpbmVyPlxuIl19