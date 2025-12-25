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
import { Component } from '@angular/core';
import { combineLatestWith, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SidebarWidgetAdapter } from '../../adapters/sidebar-widget.adapter';
import { RecordContentAdapter } from '../../adapters/record-content.adapter';
import { TopWidgetAdapter } from '../../adapters/top-widget.adapter';
import { BottomWidgetAdapter } from '../../adapters/bottom-widget.adapter';
import * as i0 from "@angular/core";
import * as i1 from "../../store/record-view/record-view.store";
import * as i2 from "../../../../store/language/language.store";
import * as i3 from "../../../../store/metadata/metadata.store.service";
import * as i4 from "../../adapters/record-content.adapter";
import * as i5 from "../../adapters/top-widget.adapter";
import * as i6 from "../../adapters/sidebar-widget.adapter";
import * as i7 from "../../adapters/bottom-widget.adapter";
import * as i8 from "../../services/record-view-sidebar-widget.service";
import * as i9 from "@angular/common";
import * as i10 from "../../../../containers/subpanel/components/subpanel-container/subpanel-container.component";
import * as i11 from "../../../../components/record-content/record-content.component";
import * as i12 from "../../../../containers/top-widget/components/top-widget/top-widget.component";
import * as i13 from "../../../../containers/sidebar-widget/components/sidebar-widget/sidebar-widget.component";
import * as i14 from "../../../../components/record-content-skeleton/record-content-skeleton.component";
function RecordContainerComponent_div_0_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7)(1, "div", 11)(2, "div", 12);
    i0.ɵɵelement(3, "div", 13);
    i0.ɵɵelementEnd()()();
} }
function RecordContainerComponent_div_0_ng_container_2_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7)(1, "div", 11);
    i0.ɵɵelement(2, "scrm-top-widget", 14);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const vm_r1 = i0.ɵɵnextContext(3).ngIf;
    const ctx_r10 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("config", vm_r1.topWidgetConfig.widget)("context", ctx_r10.getViewContext())("type", vm_r1.topWidgetConfig.widget.type);
} }
function RecordContainerComponent_div_0_ng_container_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RecordContainerComponent_div_0_ng_container_2_ng_container_4_div_1_Template, 3, 3, "div", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const vm_r1 = i0.ɵɵnextContext(2).ngIf;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", vm_r1.topWidgetConfig.show && ctx_r5.hasTopWidgetMetadata(vm_r1.topWidgetConfig.widget));
} }
function RecordContainerComponent_div_0_ng_container_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-record-content-skeleton");
    i0.ɵɵelementContainerEnd();
} }
function RecordContainerComponent_div_0_ng_container_2_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-record-content", 15);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("dataSource", ctx_r7.getContentAdapter());
} }
function RecordContainerComponent_div_0_ng_container_2_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelement(1, "scrm-sidebar-widget", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const widget_r14 = ctx.$implicit;
    const ctx_r13 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("config", widget_r14)("context$", ctx_r13.getViewContext$())("context", ctx_r13.getViewContext())("type", widget_r14.type);
} }
function RecordContainerComponent_div_0_ng_container_2_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16)(1, "div", 8);
    i0.ɵɵtemplate(2, RecordContainerComponent_div_0_ng_container_2_div_9_div_2_Template, 2, 4, "div", 17);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const vm_r1 = i0.ɵɵnextContext(2).ngIf;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", vm_r1.bottomWidgetConfig.widgets);
} }
function RecordContainerComponent_div_0_ng_container_2_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20)(1, "div", 8);
    i0.ɵɵelement(2, "scrm-subpanel-container", 21);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("config", ctx_r9.getSubpanelsConfig());
} }
const _c0 = function (a0) { return { "col-lg-12": a0 }; };
function RecordContainerComponent_div_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 4)(2, "div", 5);
    i0.ɵɵtemplate(3, RecordContainerComponent_div_0_ng_container_2_div_3_Template, 4, 0, "div", 6);
    i0.ɵɵtemplate(4, RecordContainerComponent_div_0_ng_container_2_ng_container_4_Template, 2, 1, "ng-container", 3);
    i0.ɵɵelementStart(5, "div", 7)(6, "div", 8);
    i0.ɵɵtemplate(7, RecordContainerComponent_div_0_ng_container_2_ng_container_7_Template, 2, 0, "ng-container", 3);
    i0.ɵɵtemplate(8, RecordContainerComponent_div_0_ng_container_2_ng_container_8_Template, 2, 1, "ng-container", 3);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(9, RecordContainerComponent_div_0_ng_container_2_div_9_Template, 3, 1, "div", 9);
    i0.ɵɵtemplate(10, RecordContainerComponent_div_0_ng_container_2_div_10_Template, 3, 1, "div", 10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const vm_r1 = i0.ɵɵnextContext().ngIf;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c0, !ctx_r2.sidebarWidgetConfig.show));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.loading);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r2.loading);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r2.loading);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r2.loading);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", vm_r1.bottomWidgetConfig.show && vm_r1.bottomWidgetConfig.widgets);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", vm_r1.showSubpanels);
} }
function RecordContainerComponent_div_0_ng_container_3_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelement(1, "scrm-sidebar-widget", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const widget_r19 = ctx.$implicit;
    const ctx_r18 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", widget_r19.type)("context", ctx_r18.getViewContext())("context$", ctx_r18.getViewContext$())("config", widget_r19);
} }
function RecordContainerComponent_div_0_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵtemplate(1, RecordContainerComponent_div_0_ng_container_3_div_1_div_1_Template, 2, 4, "div", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("mt-0", ctx_r17.swapWidgets);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r17.sidebarWidgetConfig.widgets);
} }
function RecordContainerComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RecordContainerComponent_div_0_ng_container_3_div_1_Template, 2, 3, "div", 22);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.displayWidgets);
} }
function RecordContainerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2);
    i0.ɵɵtemplate(2, RecordContainerComponent_div_0_ng_container_2_Template, 11, 9, "ng-container", 3);
    i0.ɵɵtemplate(3, RecordContainerComponent_div_0_ng_container_3_Template, 2, 1, "ng-container", 3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r0.swapWidgets || ctx_r0.swapWidgets && !ctx_r0.displayWidgets);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.swapWidgets || ctx_r0.swapWidgets && ctx_r0.displayWidgets);
} }
class RecordContainerComponent {
    recordViewStore;
    language;
    metadata;
    contentAdapter;
    topWidgetAdapter;
    sidebarWidgetAdapter;
    bottomWidgetAdapter;
    sidebarWidgetHandler;
    loading = true;
    language$ = of({});
    displayWidgets = true;
    swapWidgets = false;
    sidebarWidgetConfig;
    vm$;
    subs = [];
    constructor(recordViewStore, language, metadata, contentAdapter, topWidgetAdapter, sidebarWidgetAdapter, bottomWidgetAdapter, sidebarWidgetHandler) {
        this.recordViewStore = recordViewStore;
        this.language = language;
        this.metadata = metadata;
        this.contentAdapter = contentAdapter;
        this.topWidgetAdapter = topWidgetAdapter;
        this.sidebarWidgetAdapter = sidebarWidgetAdapter;
        this.bottomWidgetAdapter = bottomWidgetAdapter;
        this.sidebarWidgetHandler = sidebarWidgetHandler;
        this.language$ = language?.vm$ ?? of({});
        const bottomConfig$ = bottomWidgetAdapter?.config$ ?? of({});
        const topConfig$ = topWidgetAdapter?.config$ ?? of({});
        const showSubpanels$ = recordViewStore?.showSubpanels$ ?? of(false);
        this.vm$ = this.language$.pipe(combineLatestWith(bottomConfig$, topConfig$, showSubpanels$), map(([language, bottomWidgetConfig, topWidgetConfig, showSubpanels]) => ({
            language,
            bottomWidgetConfig,
            topWidgetConfig,
            showSubpanels
        })));
    }
    ngOnInit() {
        this.subs.push(this.recordViewStore.loading$.subscribe(loading => {
            this.loading = loading;
        }));
        this.subs.push(this.sidebarWidgetAdapter.config$.subscribe(sidebarWidgetConfig => {
            this.sidebarWidgetConfig = sidebarWidgetConfig;
            this.displayWidgets = this.sidebarWidgetConfig.show && this.sidebarWidgetConfig.widgets;
        }));
        this.subs.push(this.sidebarWidgetHandler.widgetSwap$.subscribe(swap => {
            this.swapWidgets = swap;
        }));
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
        this.contentAdapter.clean();
    }
    getContentAdapter() {
        return this.contentAdapter;
    }
    getSubpanelsConfig() {
        return {
            parentModule: this.recordViewStore.getModuleName(),
            subpanels$: this.recordViewStore.subpanels$,
            sidebarActive$: this.recordViewStore.widgets$
        };
    }
    getViewContext() {
        return this.recordViewStore.getViewContext();
    }
    getViewContext$() {
        return this.recordViewStore.viewContext$;
    }
    hasTopWidgetMetadata(meta) {
        return !!(meta && meta.type);
    }
    static ɵfac = function RecordContainerComponent_Factory(t) { return new (t || RecordContainerComponent)(i0.ɵɵdirectiveInject(i1.RecordViewStore), i0.ɵɵdirectiveInject(i2.LanguageStore), i0.ɵɵdirectiveInject(i3.MetadataStore), i0.ɵɵdirectiveInject(i4.RecordContentAdapter), i0.ɵɵdirectiveInject(i5.TopWidgetAdapter), i0.ɵɵdirectiveInject(i6.SidebarWidgetAdapter), i0.ɵɵdirectiveInject(i7.BottomWidgetAdapter), i0.ɵɵdirectiveInject(i8.RecordViewSidebarWidgetService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RecordContainerComponent, selectors: [["scrm-record-container"]], features: [i0.ɵɵProvidersFeature([RecordContentAdapter, TopWidgetAdapter, SidebarWidgetAdapter, BottomWidgetAdapter])], decls: 2, vars: 3, consts: [["class", "record-view-container view-container container-fluid pt-3 pb-3 small-font", 4, "ngIf"], [1, "record-view-container", "view-container", "container-fluid", "pt-3", "pb-3", "small-font"], [1, "row"], [4, "ngIf"], [1, "col-lg-9", 3, "ngClass"], [1, "container-fluid", "pl-0", "pr-0"], ["class", "row no-gutters", 4, "ngIf"], [1, "row", "no-gutters"], [1, "col"], ["class", "row no-gutters mt-4", 4, "ngIf"], ["class", "row no-gutters pt-1 pb-4", 4, "ngIf"], [1, "col", "pb-3"], [1, "d-flex", "justify-content-center", "widget-bar", "rounded", "pb-1", "pt-3", "box-loading"], [1, "d-flex", "justify-content-center", "align-items-baseline", "widget-bar-entry", "p-2"], [3, "config", "context", "type"], [3, "dataSource"], [1, "row", "no-gutters", "mt-4"], ["class", "mb-3", 4, "ngFor", "ngForOf"], [1, "mb-3"], [3, "config", "context$", "context", "type"], [1, "row", "no-gutters", "pt-1", "pb-4"], [3, "config"], ["class", "col-lg-3 record-widget-container pl-0", 3, "mt-0", 4, "ngIf"], [1, "col-lg-3", "record-widget-container", "pl-0"], [3, "type", "context", "context$", "config"]], template: function RecordContainerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, RecordContainerComponent_div_0_Template, 4, 2, "div", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.vm$));
        } }, dependencies: [i9.NgClass, i9.NgForOf, i9.NgIf, i10.SubpanelContainerComponent, i11.RecordContentComponent, i12.TopWidgetComponent, i13.SidebarWidgetComponent, i14.RecordContentSkeletonComponent, i9.AsyncPipe], encapsulation: 2 });
}
export { RecordContainerComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordContainerComponent, [{
        type: Component,
        args: [{ selector: 'scrm-record-container', providers: [RecordContentAdapter, TopWidgetAdapter, SidebarWidgetAdapter, BottomWidgetAdapter], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<!-- Start Record View Container Section -->\n\n<div *ngIf=\"(vm$ | async) as vm\"\n     class=\"record-view-container view-container container-fluid pt-3 pb-3 small-font\">\n    <div class=\"row\">\n        <ng-container *ngIf=\"!swapWidgets || (swapWidgets && !displayWidgets)\">\n            <div class=\"col-lg-9\" [ngClass]=\"{ 'col-lg-12': !sidebarWidgetConfig.show }\">\n\n            <div class=\"container-fluid pl-0 pr-0\">\n                <div *ngIf=\"loading\" class=\"row no-gutters\">\n                    <div class=\"col pb-3\">\n                        <div class=\"d-flex justify-content-center widget-bar rounded  pb-1 pt-3 box-loading\">\n                            <div class=\"d-flex justify-content-center align-items-baseline widget-bar-entry p-2\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <ng-container *ngIf=\"!loading\">\n                    <div *ngIf=\"vm.topWidgetConfig.show && hasTopWidgetMetadata(vm.topWidgetConfig.widget)\"\n                         class=\"row no-gutters\">\n                        <div class=\"col pb-3\">\n                            <scrm-top-widget [config]=\"vm.topWidgetConfig.widget\"\n                                             [context]=\"getViewContext()\"\n                                             [type]=\"vm.topWidgetConfig.widget.type\">\n                            </scrm-top-widget>\n                        </div>\n                    </div>\n                </ng-container>\n\n\n                <div class=\"row no-gutters\">\n                    <div class=\"col\">\n                        <ng-container *ngIf=\"loading\">\n                            <scrm-record-content-skeleton></scrm-record-content-skeleton>\n                        </ng-container>\n                        <ng-container *ngIf=\"!loading\">\n                            <scrm-record-content [dataSource]=\"getContentAdapter()\"></scrm-record-content>\n                        </ng-container>\n                    </div>\n                </div>\n\n                <div *ngIf=\"vm.bottomWidgetConfig.show && vm.bottomWidgetConfig.widgets\"\n                     class=\"row no-gutters mt-4\">\n                    <div class=\"col\">\n                        <div *ngFor=\"let widget of vm.bottomWidgetConfig.widgets\" class=\"mb-3\">\n                            <scrm-sidebar-widget [config]=\"widget\"\n                                                 [context$]=\"getViewContext$()\"\n                                                 [context]=\"getViewContext()\"\n                                                 [type]=\"widget.type\">\n                            </scrm-sidebar-widget>\n                        </div>\n                    </div>\n                </div>\n\n                <div *ngIf=\"vm.showSubpanels\"\n                     class=\"row no-gutters pt-1 pb-4\">\n                    <div class=\"col\">\n                        <scrm-subpanel-container [config]=\"getSubpanelsConfig()\"></scrm-subpanel-container>\n                    </div>\n                </div>\n            </div>\n        </div>\n        </ng-container>\n\n        <ng-container *ngIf=\"!swapWidgets || (swapWidgets && displayWidgets)\">\n            <div class=\"col-lg-3 record-widget-container pl-0\"\n                 [class.mt-0]=\"swapWidgets\"\n                 *ngIf=\"displayWidgets\">\n                <div class=\"mb-3\" *ngFor=\"let widget of sidebarWidgetConfig.widgets\">\n                    <scrm-sidebar-widget [type]=\"widget.type\"\n                                         [context]=\"getViewContext()\"\n                                         [context$]=\"getViewContext$()\"\n                                         [config]=\"widget\">\n                    </scrm-sidebar-widget>\n                </div>\n            </div>\n        </ng-container>\n\n    </div>\n</div>\n\n<!-- End Record View Container Section -->\n" }]
    }], function () { return [{ type: i1.RecordViewStore }, { type: i2.LanguageStore }, { type: i3.MetadataStore }, { type: i4.RecordContentAdapter }, { type: i5.TopWidgetAdapter }, { type: i6.SidebarWidgetAdapter }, { type: i7.BottomWidgetAdapter }, { type: i8.RecordViewSidebarWidgetService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvcmVjb3JkL2NvbXBvbmVudHMvcmVjb3JkLWNvbnRhaW5lci9yZWNvcmQtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi92aWV3cy9yZWNvcmQvY29tcG9uZW50cy9yZWNvcmQtY29udGFpbmVyL3JlY29yZC1jb250YWluZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFBQyxpQkFBaUIsRUFBYyxFQUFFLEVBQWUsTUFBTSxNQUFNLENBQUM7QUFDckUsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBT25DLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBRTNFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBRTNFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ25FLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztJQ0p6RCw4QkFBNEMsY0FBQSxjQUFBO0lBR2hDLDBCQUNNO0lBQ1YsaUJBQU0sRUFBQSxFQUFBOzs7SUFJViw4QkFDNEIsY0FBQTtJQUVwQixzQ0FHa0I7SUFDdEIsaUJBQU0sRUFBQTs7OztJQUplLGVBQW9DO0lBQXBDLHFEQUFvQyxxQ0FBQSwyQ0FBQTs7O0lBSmpFLDZCQUErQjtJQUMzQiw2R0FRTTtJQUNWLDBCQUFlOzs7O0lBVEws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b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Y29tYmluZUxhdGVzdFdpdGgsIE9ic2VydmFibGUsIG9mLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHttYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7Vmlld0NvbnRleHQsIFdpZGdldE1ldGFkYXRhfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtNZXRhZGF0YVN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9tZXRhZGF0YS9tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZSwgTGFuZ3VhZ2VTdHJpbmdzfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge1xuICAgIFN1YnBhbmVsQ29udGFpbmVyQ29uZmlnXG59IGZyb20gJy4uLy4uLy4uLy4uL2NvbnRhaW5lcnMvc3VicGFuZWwvY29tcG9uZW50cy9zdWJwYW5lbC1jb250YWluZXIvc3VicGFuZWwtY29udGFpbmVyLm1vZGVsJztcbmltcG9ydCB7U2lkZWJhcldpZGdldEFkYXB0ZXJ9IGZyb20gJy4uLy4uL2FkYXB0ZXJzL3NpZGViYXItd2lkZ2V0LmFkYXB0ZXInO1xuaW1wb3J0IHtSZWNvcmRWaWV3U3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL3JlY29yZC12aWV3L3JlY29yZC12aWV3LnN0b3JlJztcbmltcG9ydCB7UmVjb3JkQ29udGVudEFkYXB0ZXJ9IGZyb20gJy4uLy4uL2FkYXB0ZXJzL3JlY29yZC1jb250ZW50LmFkYXB0ZXInO1xuaW1wb3J0IHtSZWNvcmRDb250ZW50RGF0YVNvdXJjZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9yZWNvcmQtY29udGVudC9yZWNvcmQtY29udGVudC5tb2RlbCc7XG5pbXBvcnQge1RvcFdpZGdldEFkYXB0ZXJ9IGZyb20gJy4uLy4uL2FkYXB0ZXJzL3RvcC13aWRnZXQuYWRhcHRlcic7XG5pbXBvcnQge0JvdHRvbVdpZGdldEFkYXB0ZXJ9IGZyb20gJy4uLy4uL2FkYXB0ZXJzL2JvdHRvbS13aWRnZXQuYWRhcHRlcic7XG5pbXBvcnQge1JlY29yZFZpZXdTaWRlYmFyV2lkZ2V0U2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3JlY29yZC12aWV3LXNpZGViYXItd2lkZ2V0LnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLXJlY29yZC1jb250YWluZXInLFxuICAgIHRlbXBsYXRlVXJsOiAncmVjb3JkLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbUmVjb3JkQ29udGVudEFkYXB0ZXIsIFRvcFdpZGdldEFkYXB0ZXIsIFNpZGViYXJXaWRnZXRBZGFwdGVyLCBCb3R0b21XaWRnZXRBZGFwdGVyXVxufSlcbmV4cG9ydCBjbGFzcyBSZWNvcmRDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBsb2FkaW5nOiBib29sZWFuID0gdHJ1ZTtcbiAgICBsYW5ndWFnZSQ6IE9ic2VydmFibGU8TGFuZ3VhZ2VTdHJpbmdzPiA9IG9mKHt9IGFzIExhbmd1YWdlU3RyaW5ncyk7XG4gICAgZGlzcGxheVdpZGdldHM6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHN3YXBXaWRnZXRzOiBib29sZWFuID0gZmFsc2U7XG4gICAgc2lkZWJhcldpZGdldENvbmZpZzogYW55O1xuXG4gICAgdm0kITogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gICAgcHJvdGVjdGVkIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIHJlY29yZFZpZXdTdG9yZTogUmVjb3JkVmlld1N0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBtZXRhZGF0YTogTWV0YWRhdGFTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGNvbnRlbnRBZGFwdGVyOiBSZWNvcmRDb250ZW50QWRhcHRlcixcbiAgICAgICAgcHJvdGVjdGVkIHRvcFdpZGdldEFkYXB0ZXI6IFRvcFdpZGdldEFkYXB0ZXIsXG4gICAgICAgIHByb3RlY3RlZCBzaWRlYmFyV2lkZ2V0QWRhcHRlcjogU2lkZWJhcldpZGdldEFkYXB0ZXIsXG4gICAgICAgIHByb3RlY3RlZCBib3R0b21XaWRnZXRBZGFwdGVyOiBCb3R0b21XaWRnZXRBZGFwdGVyLFxuICAgICAgICBwcm90ZWN0ZWQgc2lkZWJhcldpZGdldEhhbmRsZXI6IFJlY29yZFZpZXdTaWRlYmFyV2lkZ2V0U2VydmljZVxuICAgICkge1xuICAgICAgICB0aGlzLmxhbmd1YWdlJCA9IGxhbmd1YWdlPy52bSQgPz8gb2Yoe30gYXMgTGFuZ3VhZ2VTdHJpbmdzKTtcblxuICAgICAgICBjb25zdCBib3R0b21Db25maWckID0gYm90dG9tV2lkZ2V0QWRhcHRlcj8uY29uZmlnJCA/PyBvZih7fSBhcyBhbnkpO1xuICAgICAgICBjb25zdCB0b3BDb25maWckID0gdG9wV2lkZ2V0QWRhcHRlcj8uY29uZmlnJCA/PyBvZih7fSBhcyBhbnkpO1xuICAgICAgICBjb25zdCBzaG93U3VicGFuZWxzJCA9IHJlY29yZFZpZXdTdG9yZT8uc2hvd1N1YnBhbmVscyQgPz8gb2YoZmFsc2UpO1xuXG4gICAgICAgIHRoaXMudm0kID0gdGhpcy5sYW5ndWFnZSQucGlwZShcbiAgICAgICAgICAgIGNvbWJpbmVMYXRlc3RXaXRoKFxuICAgICAgICAgICAgICAgIGJvdHRvbUNvbmZpZyQsXG4gICAgICAgICAgICAgICAgdG9wQ29uZmlnJCxcbiAgICAgICAgICAgICAgICBzaG93U3VicGFuZWxzJFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIG1hcCgoXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZSxcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tV2lkZ2V0Q29uZmlnLFxuICAgICAgICAgICAgICAgICAgICB0b3BXaWRnZXRDb25maWcsXG4gICAgICAgICAgICAgICAgICAgIHNob3dTdWJwYW5lbHNcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApID0+ICh7XG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2UsXG4gICAgICAgICAgICAgICAgYm90dG9tV2lkZ2V0Q29uZmlnLFxuICAgICAgICAgICAgICAgIHRvcFdpZGdldENvbmZpZyxcbiAgICAgICAgICAgICAgICBzaG93U3VicGFuZWxzXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5yZWNvcmRWaWV3U3RvcmUubG9hZGluZyQuc3Vic2NyaWJlKGxvYWRpbmcgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gbG9hZGluZztcbiAgICAgICAgfSkpXG5cblxuICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLnNpZGViYXJXaWRnZXRBZGFwdGVyLmNvbmZpZyQuc3Vic2NyaWJlKHNpZGViYXJXaWRnZXRDb25maWcgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaWRlYmFyV2lkZ2V0Q29uZmlnID0gc2lkZWJhcldpZGdldENvbmZpZztcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVdpZGdldHMgPSB0aGlzLnNpZGViYXJXaWRnZXRDb25maWcuc2hvdyAmJiB0aGlzLnNpZGViYXJXaWRnZXRDb25maWcud2lkZ2V0cztcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMuc2lkZWJhcldpZGdldEhhbmRsZXIud2lkZ2V0U3dhcCQuc3Vic2NyaWJlKHN3YXAgPT4ge1xuICAgICAgICAgICAgdGhpcy5zd2FwV2lkZ2V0cyA9IHN3YXA7XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgICAgICAgdGhpcy5jb250ZW50QWRhcHRlci5jbGVhbigpO1xuICAgIH1cblxuICAgIGdldENvbnRlbnRBZGFwdGVyKCk6IFJlY29yZENvbnRlbnREYXRhU291cmNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGVudEFkYXB0ZXI7XG4gICAgfVxuXG4gICAgZ2V0U3VicGFuZWxzQ29uZmlnKCk6IFN1YnBhbmVsQ29udGFpbmVyQ29uZmlnIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhcmVudE1vZHVsZTogdGhpcy5yZWNvcmRWaWV3U3RvcmUuZ2V0TW9kdWxlTmFtZSgpLFxuICAgICAgICAgICAgc3VicGFuZWxzJDogdGhpcy5yZWNvcmRWaWV3U3RvcmUuc3VicGFuZWxzJCxcbiAgICAgICAgICAgIHNpZGViYXJBY3RpdmUkOiB0aGlzLnJlY29yZFZpZXdTdG9yZS53aWRnZXRzJFxuICAgICAgICB9IGFzIFN1YnBhbmVsQ29udGFpbmVyQ29uZmlnO1xuICAgIH1cblxuICAgIGdldFZpZXdDb250ZXh0KCk6IFZpZXdDb250ZXh0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVjb3JkVmlld1N0b3JlLmdldFZpZXdDb250ZXh0KCk7XG4gICAgfVxuXG4gICAgZ2V0Vmlld0NvbnRleHQkKCk6IE9ic2VydmFibGU8Vmlld0NvbnRleHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVjb3JkVmlld1N0b3JlLnZpZXdDb250ZXh0JDtcbiAgICB9XG5cbiAgICBoYXNUb3BXaWRnZXRNZXRhZGF0YShtZXRhOiBXaWRnZXRNZXRhZGF0YSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gISEobWV0YSAmJiBtZXRhLnR5cGUpO1xuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjwhLS0gU3RhcnQgUmVjb3JkIFZpZXcgQ29udGFpbmVyIFNlY3Rpb24gLS0+XG5cbjxkaXYgKm5nSWY9XCIodm0kIHwgYXN5bmMpIGFzIHZtXCJcbiAgICAgY2xhc3M9XCJyZWNvcmQtdmlldy1jb250YWluZXIgdmlldy1jb250YWluZXIgY29udGFpbmVyLWZsdWlkIHB0LTMgcGItMyBzbWFsbC1mb250XCI+XG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXN3YXBXaWRnZXRzIHx8IChzd2FwV2lkZ2V0cyAmJiAhZGlzcGxheVdpZGdldHMpXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTlcIiBbbmdDbGFzc109XCJ7ICdjb2wtbGctMTInOiAhc2lkZWJhcldpZGdldENvbmZpZy5zaG93IH1cIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCBwbC0wIHByLTBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwibG9hZGluZ1wiIGNsYXNzPVwicm93IG5vLWd1dHRlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBwYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgd2lkZ2V0LWJhciByb3VuZGVkICBwYi0xIHB0LTMgYm94LWxvYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtYmFzZWxpbmUgd2lkZ2V0LWJhci1lbnRyeSBwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWxvYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cInZtLnRvcFdpZGdldENvbmZpZy5zaG93ICYmIGhhc1RvcFdpZGdldE1ldGFkYXRhKHZtLnRvcFdpZGdldENvbmZpZy53aWRnZXQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJvdyBuby1ndXR0ZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHBiLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS10b3Atd2lkZ2V0IFtjb25maWddPVwidm0udG9wV2lkZ2V0Q29uZmlnLndpZGdldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29udGV4dF09XCJnZXRWaWV3Q29udGV4dCgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0eXBlXT1cInZtLnRvcFdpZGdldENvbmZpZy53aWRnZXQudHlwZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2NybS10b3Atd2lkZ2V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG5vLWd1dHRlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImxvYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1yZWNvcmQtY29udGVudC1za2VsZXRvbj48L3Njcm0tcmVjb3JkLWNvbnRlbnQtc2tlbGV0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhbG9hZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLXJlY29yZC1jb250ZW50IFtkYXRhU291cmNlXT1cImdldENvbnRlbnRBZGFwdGVyKClcIj48L3Njcm0tcmVjb3JkLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwidm0uYm90dG9tV2lkZ2V0Q29uZmlnLnNob3cgJiYgdm0uYm90dG9tV2lkZ2V0Q29uZmlnLndpZGdldHNcIlxuICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyb3cgbm8tZ3V0dGVycyBtdC00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IHdpZGdldCBvZiB2bS5ib3R0b21XaWRnZXRDb25maWcud2lkZ2V0c1wiIGNsYXNzPVwibWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLXNpZGViYXItd2lkZ2V0IFtjb25maWddPVwid2lkZ2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29udGV4dCRdPVwiZ2V0Vmlld0NvbnRleHQkKClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb250ZXh0XT1cImdldFZpZXdDb250ZXh0KClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0eXBlXT1cIndpZGdldC50eXBlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zY3JtLXNpZGViYXItd2lkZ2V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cInZtLnNob3dTdWJwYW5lbHNcIlxuICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyb3cgbm8tZ3V0dGVycyBwdC0xIHBiLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tc3VicGFuZWwtY29udGFpbmVyIFtjb25maWddPVwiZ2V0U3VicGFuZWxzQ29uZmlnKClcIj48L3Njcm0tc3VicGFuZWwtY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFzd2FwV2lkZ2V0cyB8fCAoc3dhcFdpZGdldHMgJiYgZGlzcGxheVdpZGdldHMpXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTMgcmVjb3JkLXdpZGdldC1jb250YWluZXIgcGwtMFwiXG4gICAgICAgICAgICAgICAgIFtjbGFzcy5tdC0wXT1cInN3YXBXaWRnZXRzXCJcbiAgICAgICAgICAgICAgICAgKm5nSWY9XCJkaXNwbGF5V2lkZ2V0c1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0zXCIgKm5nRm9yPVwibGV0IHdpZGdldCBvZiBzaWRlYmFyV2lkZ2V0Q29uZmlnLndpZGdldHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNjcm0tc2lkZWJhci13aWRnZXQgW3R5cGVdPVwid2lkZ2V0LnR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29udGV4dF09XCJnZXRWaWV3Q29udGV4dCgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbnRleHQkXT1cImdldFZpZXdDb250ZXh0JCgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbmZpZ109XCJ3aWRnZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9zY3JtLXNpZGViYXItd2lkZ2V0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPC9kaXY+XG48L2Rpdj5cblxuPCEtLSBFbmQgUmVjb3JkIFZpZXcgQ29udGFpbmVyIFNlY3Rpb24gLS0+XG4iXX0=