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
import { isTrue } from 'common';
import { map, shareReplay } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../../store/language/language.store";
import * as i2 from "@angular/common";
import * as i3 from "../panel/panel.component";
import * as i4 from "@ng-bootstrap/ng-bootstrap";
import * as i5 from "../field-layout/field-layout.component";
import * as i6 from "../../pipes/toObservable/toObservable.pipe";
function RecordContentComponent_ng_container_0_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 6)(2, "scrm-panel", 7);
    i0.ɵɵpipe(3, "toObservable");
    i0.ɵɵelementStart(4, "div", 8);
    i0.ɵɵelement(5, "scrm-field-layout", 9);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const panel_r4 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("title", panel_r4.label)("isCollapsed$", i0.ɵɵpipeBind1(3, 6, panel_r4.isCollapsed));
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("panel-", panel_r4.key, "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("dataSource", ctx_r3.getLayoutDataSource(panel_r4));
} }
function RecordContentComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, RecordContentComponent_ng_container_0_div_1_div_1_Template, 6, 8, "div", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.panels);
} }
function RecordContentComponent_ng_container_0_div_2_ng_container_3_ng_container_1_li_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "scrm-field-layout", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const panel_r8 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r13 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("tab-", panel_r8.key, "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("dataSource", ctx_r13.getLayoutDataSource(panel_r8));
} }
function RecordContentComponent_ng_container_0_div_2_ng_container_3_ng_container_1_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 16)(1, "a", 17);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, RecordContentComponent_ng_container_0_div_2_ng_container_3_ng_container_1_li_1_ng_template_3_Template, 2, 4, "ng-template", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(2);
    const i_r9 = ctx_r15.index;
    const panel_r8 = ctx_r15.$implicit;
    i0.ɵɵproperty("ngbNavItem", i_r9 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(panel_r8.label);
} }
function RecordContentComponent_ng_container_0_div_2_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RecordContentComponent_ng_container_0_div_2_ng_container_3_ng_container_1_li_1_Template, 4, 2, "li", 15);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const panelDisplay_r11 = ctx.ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !!panelDisplay_r11);
} }
function RecordContentComponent_ng_container_0_div_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RecordContentComponent_ng_container_0_div_2_ng_container_3_ng_container_1_Template, 2, 1, "ng-container", 0);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const panel_r8 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(2, 1, panel_r8.display$));
} }
function RecordContentComponent_ng_container_0_div_2_ng_container_5_ng_container_1_div_1_ng_container_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "scrm-panel", 7);
    i0.ɵɵpipe(2, "toObservable");
    i0.ɵɵelementStart(3, "div", 8);
    i0.ɵɵelement(4, "scrm-field-layout", 9);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const panel_r20 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r24 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("title", panel_r20.label)("isCollapsed$", i0.ɵɵpipeBind1(2, 6, panel_r20.isCollapsed));
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("panel-", panel_r20.key, "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("dataSource", ctx_r24.getLayoutDataSource(panel_r20));
} }
function RecordContentComponent_ng_container_0_div_2_ng_container_5_ng_container_1_div_1_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtemplate(1, RecordContentComponent_ng_container_0_div_2_ng_container_5_ng_container_1_div_1_ng_container_1_div_1_div_1_Template, 5, 8, "div", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const j_r18 = i0.ɵɵnextContext(3).index;
    const ctx_r23 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", j_r18 == ctx_r23.active - 1);
} }
function RecordContentComponent_ng_container_0_div_2_ng_container_5_ng_container_1_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RecordContentComponent_ng_container_0_div_2_ng_container_5_ng_container_1_div_1_ng_container_1_div_1_Template, 2, 1, "div", 19);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const panelDisplay_r22 = ctx.ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !!panelDisplay_r22);
} }
function RecordContentComponent_ng_container_0_div_2_ng_container_5_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, RecordContentComponent_ng_container_0_div_2_ng_container_5_ng_container_1_div_1_ng_container_1_Template, 2, 1, "ng-container", 0);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const panel_r20 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(2, 1, panel_r20.display$));
} }
function RecordContentComponent_ng_container_0_div_2_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RecordContentComponent_ng_container_0_div_2_ng_container_5_ng_container_1_div_1_Template, 3, 3, "div", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const panel_r17 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", panel_r17.subPanels);
} }
function RecordContentComponent_ng_container_0_div_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RecordContentComponent_ng_container_0_div_2_ng_container_5_ng_container_1_Template, 2, 1, "ng-container", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r7.panels);
} }
function RecordContentComponent_ng_container_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "ul", 11, 12);
    i0.ɵɵlistener("activeIdChange", function RecordContentComponent_ng_container_0_div_2_Template_ul_activeIdChange_1_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r27 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r27.active = $event); });
    i0.ɵɵtemplate(3, RecordContentComponent_ng_container_0_div_2_ng_container_3_Template, 3, 3, "ng-container", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "div", 14);
    i0.ɵɵtemplate(5, RecordContentComponent_ng_container_0_div_2_ng_container_5_Template, 2, 1, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r5 = i0.ɵɵreference(2);
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("activeId", ctx_r2.active);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r2.panels);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngbNavOutlet", _r5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.panelsInPrevTab && ctx_r2.panelsInPrevTab.length);
} }
function RecordContentComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RecordContentComponent_ng_container_0_div_1_Template, 2, 1, "div", 1);
    i0.ɵɵtemplate(2, RecordContentComponent_ng_container_0_div_2_Template, 6, 4, "div", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.config && ctx_r0.config.layout === "panels");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.config && ctx_r0.config.layout === "tabs");
} }
class RecordContentComponent {
    language;
    dataSource;
    config = {};
    panels;
    panelsInPrevTab = [];
    active = 1;
    record;
    fields;
    subs = [];
    constructor(language) {
        this.language = language;
    }
    ngOnInit() {
        if (!this.dataSource) {
            // Defensive: if adapter is missing, avoid runtime crashes
            this.subs.push(EMPTY.subscribe());
            return;
        }
        this.subs.push(this.dataSource.getDisplayConfig().subscribe(config => {
            this.config = { ...config };
        }));
        this.subs.push(this.dataSource.getPanels().subscribe(panels => {
            if (!panels) {
                this.panels = [];
                return;
            }
            this.panels = [...panels];
            if (this?.config?.layout === 'panels') {
                this.updatePanelCollapseState();
            }
            else {
                this.updatePanelsInTabs();
            }
        }));
        this.subs.push(this.dataSource.getRecord().subscribe(record => {
            this.record = { ...record };
            this.fields = record.fields;
        }));
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    updatePanelsInTabs() {
        let tempPanels = [];
        let prevTabKey = '';
        const panelsMap = this.buildPanelMap();
        const tabDefs = this.mapTabDefs();
        Object.keys(tabDefs).forEach(tabDefKey => {
            const tabDef = tabDefs[tabDefKey];
            if (isTrue(tabDef.newTab)) {
                tempPanels = [...tempPanels, panelsMap[tabDefKey]];
                prevTabKey = tabDefKey;
            }
            else {
                const prevTab = tabDefs[prevTabKey];
                const panel = panelsMap[prevTabKey];
                if (!this.panelsInPrevTab.includes(panel)) {
                    this.panelsInPrevTab.push(panel);
                }
                const panelToAdd = panelsMap[tabDefKey];
                if (isTrue(prevTab?.newTab) && this.panelsInPrevTab.length > 0) {
                    this.addToPrevTab(panelToAdd);
                }
            }
        });
        this.panels = tempPanels;
    }
    addToPrevTab(panelToAdd) {
        const index = this.panelsInPrevTab.length - 1;
        if (!(this.panelsInPrevTab[index]?.subPanels ?? null)) {
            this.panelsInPrevTab[index].subPanels = [];
        }
        this.panelsInPrevTab[index].subPanels.push(panelToAdd);
    }
    updatePanelCollapseState() {
        const panelMap = this.buildPanelMap();
        this.panels.forEach(panel => {
            const panelKey = panel.key.toUpperCase();
            if (panelMap[panelKey]) {
                panel.isCollapsed = panelMap[panelKey].isCollapsed;
            }
        });
    }
    buildPanelMap() {
        const panelMap = {};
        (this.panels || []).forEach(panel => {
            let isCollapsed = false;
            panel.label = panel?.label?.toUpperCase() ?? '';
            const panelKey = panel?.key?.toUpperCase() ?? '';
            if (panel?.meta?.panelDefault === 'collapsed') {
                isCollapsed = true;
            }
            panel.isCollapsed = isCollapsed;
            panelMap[panelKey] = panel;
        });
        return panelMap;
    }
    mapTabDefs() {
        const tabDefs = {};
        Object.keys(this?.config?.tabDefs ?? {}).forEach(key => {
            tabDefs[key.toUpperCase()] = this?.config?.tabDefs[key];
        });
        return tabDefs;
    }
    getLayoutDataSource(panel) {
        return {
            inlineEdit: true,
            getConfig: () => this.dataSource.getDisplayConfig().pipe(map(config => ({
                mode: config.mode,
                maxColumns: config.maxColumns,
            }))),
            getLayout: () => of(panel).pipe(shareReplay(1)),
            getFields: () => this.dataSource.getRecord().pipe(map(record => (record.fields))),
            getRecord: () => this.dataSource.getRecord(),
            getEditAction: () => this.dataSource.getEditAction()
        };
    }
    static ɵfac = function RecordContentComponent_Factory(t) { return new (t || RecordContentComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RecordContentComponent, selectors: [["scrm-record-content"]], inputs: { dataSource: "dataSource" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["class", "record-content panel-layout container-fluid pl-0 pr-0", 4, "ngIf"], ["class", "record-content tabs-layout container-fluid pl-0 pr-0", 4, "ngIf"], [1, "record-content", "panel-layout", "container-fluid", "pl-0", "pr-0"], ["class", "row no-gutters mb-3", 4, "ngFor", "ngForOf"], [1, "row", "no-gutters", "mb-3"], [1, "col"], ["mode", "collapsible", 3, "title", "isCollapsed$"], ["panel-body", ""], [3, "dataSource"], [1, "record-content", "tabs-layout", "container-fluid", "pl-0", "pr-0"], ["ngbNav", "", 1, "nav-tabs", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [4, "ngFor", "ngForOf"], [1, "p-2", "pt-3", "rounded-right", "rounded-bottom", 3, "ngbNavOutlet"], ["class", "tab", 3, "ngbNavItem", 4, "ngIf"], [1, "tab", 3, "ngbNavItem"], ["ngbNavLink", "", 1, "tab-link"], ["ngbNavContent", ""], ["class", "row no-gutters mt-3", 4, "ngIf"], [1, "row", "no-gutters", "mt-3"], ["class", "col", 4, "ngIf"]], template: function RecordContentComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, RecordContentComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.dataSource);
        } }, dependencies: [i2.NgForOf, i2.NgIf, i3.PanelComponent, i4.NgbNavContent, i4.NgbNav, i4.NgbNavItem, i4.NgbNavItemRole, i4.NgbNavLink, i4.NgbNavLinkBase, i4.NgbNavOutlet, i5.FieldLayoutComponent, i2.AsyncPipe, i6.ToObservablePipe], encapsulation: 2 });
}
export { RecordContentComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordContentComponent, [{
        type: Component,
        args: [{ selector: 'scrm-record-content', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"dataSource\">\n    <div *ngIf=\"config && config.layout === 'panels'\" class=\"record-content panel-layout container-fluid pl-0 pr-0\">\n        <div class=\"row no-gutters mb-3\" *ngFor=\"let panel of panels\">\n            <div class=\"col\">\n                <scrm-panel [title]=\"panel.label\" [isCollapsed$]=\"(panel.isCollapsed | toObservable)\" mode=\"collapsible\">\n                    <div panel-body class=\"panel-{{panel.key}}\">\n                        <scrm-field-layout [dataSource]=\"getLayoutDataSource(panel)\"></scrm-field-layout>\n                    </div>\n                </scrm-panel>\n            </div>\n        </div>\n\n    </div>\n\n    <div *ngIf=\"config && config.layout === 'tabs'\" class=\"record-content tabs-layout container-fluid pl-0 pr-0\">\n\n        <ul ngbNav #nav=\"ngbNav\" class=\"nav-tabs\" [(activeId)]=\"active\">\n            <ng-container *ngFor=\"let panel of panels; index as i;\">\n                <ng-container *ngIf=\"(panel.display$ | async) as panelDisplay\">\n                    <li class=\"tab\" [ngbNavItem]=\"i+1\" *ngIf=\"!!panelDisplay\">\n                        <a class=\"tab-link\" ngbNavLink>{{panel.label}}</a>\n                        <ng-template ngbNavContent>\n                            <div class=\"tab-{{panel.key}}\">\n                                <scrm-field-layout [dataSource]=\"getLayoutDataSource(panel)\"></scrm-field-layout>\n                            </div>\n                        </ng-template>\n                    </li>\n                </ng-container>\n            </ng-container>\n        </ul>\n        <div [ngbNavOutlet]=\"nav\" class=\"p-2 pt-3 rounded-right rounded-bottom\"></div>\n\n\n        <ng-container *ngIf=\"panelsInPrevTab && panelsInPrevTab.length\">\n            <ng-container *ngFor=\"let panel of panels; let j = index;\">\n                <div *ngFor=\"let panel of panel.subPanels;\">\n                    <ng-container *ngIf=\"(panel.display$ | async) as panelDisplay\">\n                        <div class=\"row no-gutters mt-3\" *ngIf=\"!!panelDisplay\">\n                            <div class=\"col\" *ngIf=\"j==active-1\">\n                                <scrm-panel [title]=\"panel.label\" [isCollapsed$]=\"(panel.isCollapsed | toObservable)\" mode=\"collapsible\">\n                                    <div panel-body class=\"panel-{{panel.key}}\">\n                                        <scrm-field-layout [dataSource]=\"getLayoutDataSource(panel)\"></scrm-field-layout>\n                                    </div>\n                                </scrm-panel>\n                            </div>\n                        </div>\n                    </ng-container>\n                </div>\n            </ng-container>\n        </ng-container>\n\n    </div>\n\n</ng-container>\n" }]
    }], function () { return [{ type: i1.LanguageStore }]; }, { dataSource: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvcmVjb3JkLWNvbnRlbnQvcmVjb3JkLWNvbnRlbnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvcmVjb3JkLWNvbnRlbnQvcmVjb3JkLWNvbnRlbnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUNsRSxPQUFPLEVBQWEsRUFBRSxFQUFlLE1BQU0sTUFBTSxDQUFDO0FBQ2xELE9BQU8sRUFBMEIsTUFBTSxFQUFDLE1BQU0sUUFBUSxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxHQUFHLEVBQUUsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFJaEQsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7O0lDSm5CLDhCQUE4RCxhQUFBLG9CQUFBOztJQUdsRCw4QkFBNEM7SUFDeEMsdUNBQWlGO0lBQ3JGLGlCQUFNLEVBQUEsRUFBQSxFQUFBOzs7O0lBSEUsZUFBcUI7SUFBckIsc0NBQXFCLDREQUFBO0lBQ2IsZUFBMkI7SUFBM0IscURBQTJCO0lBQ3BCLGVBQXlDO0lBQXpDLGlFQUF5Qzs7O0lBTGhGLDhCQUFnSDtJQUM1Ryw0RkFRTTtJQUVWLGlCQUFNOzs7SUFWaUQsZUFBUztJQUFULHVDQUFTOzs7SUFvQnhDLDJCQUErQjtJQUMzQix1Q0FBaUY7SUFDckYsaUJBQU07Ozs7SUFGRCxtREFBeUI7SUFDUCxlQUF5QztJQUF6QyxrRUFBeUM7OztJQUp4RSw4QkFBMEQsWUFBQTtJQUN2QixZQUFlO0lB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QUMsQ0FBQztRQUVILE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxLQUFZO1FBQzVCLE9BQU87WUFDSCxVQUFVLEVBQUUsSUFBSTtZQUNoQixTQUFTLEVBQUUsR0FBa0MsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDbkcsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO2dCQUNqQixVQUFVLEVBQUUsTUFBTSxDQUFDLFVBQVU7YUFDaEMsQ0FBQyxDQUFDLENBQUM7WUFDSixTQUFTLEVBQUUsR0FBc0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLFNBQVMsRUFBRSxHQUF5QixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN2RyxTQUFTLEVBQUUsR0FBdUIsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFO1lBQ2hFLGFBQWEsRUFBRSxHQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTtTQUNwQyxDQUFDO0lBQy9CLENBQUM7Z0ZBN0lRLHNCQUFzQjs2REFBdEIsc0JBQXNCO1lDYm5DLHlGQXFEZTs7WUFyREEscUNBQWdCOzs7U0RhbEIsc0JBQXNCO3VGQUF0QixzQkFBc0I7Y0FMbEMsU0FBUzsyQkFDSSxxQkFBcUI7Z0VBTXRCLFVBQVU7a0JBQWxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBvZiwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7RmllbGRNYXAsIFBhbmVsLCBSZWNvcmQsIGlzVHJ1ZX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7bWFwLCBzaGFyZVJlcGxheX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtSZWNvcmRDb250ZW50Q29uZmlnLCBSZWNvcmRDb250ZW50RGF0YVNvdXJjZX0gZnJvbSAnLi9yZWNvcmQtY29udGVudC5tb2RlbCc7XG5pbXBvcnQge0ZpZWxkTGF5b3V0Q29uZmlnLCBGaWVsZExheW91dERhdGFTb3VyY2V9IGZyb20gJy4uL2ZpZWxkLWxheW91dC9maWVsZC1sYXlvdXQubW9kZWwnO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge0VNUFRZfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLXJlY29yZC1jb250ZW50JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcmVjb3JkLWNvbnRlbnQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlczogW10sXG59KVxuZXhwb3J0IGNsYXNzIFJlY29yZENvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBASW5wdXQoKSBkYXRhU291cmNlOiBSZWNvcmRDb250ZW50RGF0YVNvdXJjZTtcblxuICAgIGNvbmZpZzogUmVjb3JkQ29udGVudENvbmZpZyA9IHt9IGFzIFJlY29yZENvbnRlbnRDb25maWc7XG4gICAgcGFuZWxzOiBQYW5lbFtdO1xuICAgIHBhbmVsc0luUHJldlRhYjogUGFuZWxbXSA9IFtdO1xuICAgIGFjdGl2ZSA9IDE7XG4gICAgcHJvdGVjdGVkIHJlY29yZDogUmVjb3JkO1xuICAgIHByb3RlY3RlZCBmaWVsZHM6IEZpZWxkTWFwO1xuICAgIHByaXZhdGUgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBsYW5ndWFnZTogTGFuZ3VhZ2VTdG9yZSkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuZGF0YVNvdXJjZSkge1xuICAgICAgICAgICAgLy8gRGVmZW5zaXZlOiBpZiBhZGFwdGVyIGlzIG1pc3NpbmcsIGF2b2lkIHJ1bnRpbWUgY3Jhc2hlc1xuICAgICAgICAgICAgdGhpcy5zdWJzLnB1c2goRU1QVFkuc3Vic2NyaWJlKCkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMuZGF0YVNvdXJjZS5nZXREaXNwbGF5Q29uZmlnKCkuc3Vic2NyaWJlKGNvbmZpZyA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZyA9IHsuLi5jb25maWd9O1xuICAgICAgICB9KSk7XG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMuZGF0YVNvdXJjZS5nZXRQYW5lbHMoKS5zdWJzY3JpYmUocGFuZWxzID0+IHtcbiAgICAgICAgICAgIGlmICghcGFuZWxzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYW5lbHMgPSBbXTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBhbmVscyA9IFsuLi5wYW5lbHNdO1xuICAgICAgICAgICAgaWYgKHRoaXM/LmNvbmZpZz8ubGF5b3V0ID09PSAncGFuZWxzJykge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUGFuZWxDb2xsYXBzZVN0YXRlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUGFuZWxzSW5UYWJzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5kYXRhU291cmNlLmdldFJlY29yZCgpLnN1YnNjcmliZShyZWNvcmQgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZWNvcmQgPSB7Li4ucmVjb3JkfTtcbiAgICAgICAgICAgIHRoaXMuZmllbGRzID0gcmVjb3JkLmZpZWxkcztcbiAgICAgICAgfSkpO1xuXG5cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgICB9XG5cbiAgICB1cGRhdGVQYW5lbHNJblRhYnMoKTogdm9pZCB7XG4gICAgICAgIGxldCB0ZW1wUGFuZWxzID0gW107XG4gICAgICAgIGxldCBwcmV2VGFiS2V5ID0gJyc7XG5cbiAgICAgICAgY29uc3QgcGFuZWxzTWFwID0gdGhpcy5idWlsZFBhbmVsTWFwKCk7XG5cbiAgICAgICAgY29uc3QgdGFiRGVmcyA9IHRoaXMubWFwVGFiRGVmcygpO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHRhYkRlZnMpLmZvckVhY2godGFiRGVmS2V5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhYkRlZiA9IHRhYkRlZnNbdGFiRGVmS2V5XTtcblxuICAgICAgICAgICAgaWYgKGlzVHJ1ZSh0YWJEZWYubmV3VGFiKSkge1xuICAgICAgICAgICAgICAgIHRlbXBQYW5lbHMgPSBbLi4udGVtcFBhbmVscywgcGFuZWxzTWFwW3RhYkRlZktleV1dO1xuICAgICAgICAgICAgICAgIHByZXZUYWJLZXkgPSB0YWJEZWZLZXk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZUYWIgPSB0YWJEZWZzW3ByZXZUYWJLZXldO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhbmVsID0gcGFuZWxzTWFwW3ByZXZUYWJLZXldO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5wYW5lbHNJblByZXZUYWIuaW5jbHVkZXMocGFuZWwpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFuZWxzSW5QcmV2VGFiLnB1c2gocGFuZWwpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHBhbmVsVG9BZGQgPSBwYW5lbHNNYXBbdGFiRGVmS2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoaXNUcnVlKHByZXZUYWI/Lm5ld1RhYikgJiYgdGhpcy5wYW5lbHNJblByZXZUYWIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFRvUHJldlRhYihwYW5lbFRvQWRkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucGFuZWxzID0gdGVtcFBhbmVscztcblxuICAgIH1cblxuICAgIGFkZFRvUHJldlRhYihwYW5lbFRvQWRkOiBhbnkpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMucGFuZWxzSW5QcmV2VGFiLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgaWYgKCEodGhpcy5wYW5lbHNJblByZXZUYWJbaW5kZXhdPy5zdWJQYW5lbHMgPz8gbnVsbCkpIHtcbiAgICAgICAgICAgIHRoaXMucGFuZWxzSW5QcmV2VGFiW2luZGV4XS5zdWJQYW5lbHMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhbmVsc0luUHJldlRhYltpbmRleF0uc3ViUGFuZWxzLnB1c2gocGFuZWxUb0FkZCk7XG5cbiAgICB9XG5cbiAgICB1cGRhdGVQYW5lbENvbGxhcHNlU3RhdGUoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHBhbmVsTWFwID0gdGhpcy5idWlsZFBhbmVsTWFwKCk7XG5cbiAgICAgICAgdGhpcy5wYW5lbHMuZm9yRWFjaChwYW5lbCA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYW5lbEtleSA9IHBhbmVsLmtleS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgaWYgKHBhbmVsTWFwW3BhbmVsS2V5XSkge1xuICAgICAgICAgICAgICAgIHBhbmVsLmlzQ29sbGFwc2VkID0gcGFuZWxNYXBbcGFuZWxLZXldLmlzQ29sbGFwc2VkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBidWlsZFBhbmVsTWFwKCk6IGFueSB7XG4gICAgICAgIGNvbnN0IHBhbmVsTWFwID0ge307XG5cbiAgICAgICAgKHRoaXMucGFuZWxzIHx8IFtdKS5mb3JFYWNoKHBhbmVsID0+IHtcbiAgICAgICAgICAgIGxldCBpc0NvbGxhcHNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgcGFuZWwubGFiZWwgPSBwYW5lbD8ubGFiZWw/LnRvVXBwZXJDYXNlKCkgPz8gJyc7XG4gICAgICAgICAgICBjb25zdCBwYW5lbEtleSA9IHBhbmVsPy5rZXk/LnRvVXBwZXJDYXNlKCkgPz8gJyc7XG4gICAgICAgICAgICBpZiAocGFuZWw/Lm1ldGE/LnBhbmVsRGVmYXVsdCA9PT0gJ2NvbGxhcHNlZCcpIHtcbiAgICAgICAgICAgICAgICBpc0NvbGxhcHNlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYW5lbC5pc0NvbGxhcHNlZCA9IGlzQ29sbGFwc2VkO1xuICAgICAgICAgICAgcGFuZWxNYXBbcGFuZWxLZXldID0gcGFuZWw7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwYW5lbE1hcDtcbiAgICB9XG5cbiAgICBtYXBUYWJEZWZzKCk6IGFueSB7XG4gICAgICAgIGNvbnN0IHRhYkRlZnMgPSB7fTtcblxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzPy5jb25maWc/LnRhYkRlZnMgPz8ge30pLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIHRhYkRlZnNba2V5LnRvVXBwZXJDYXNlKCldID0gdGhpcz8uY29uZmlnPy50YWJEZWZzW2tleV07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0YWJEZWZzO1xuICAgIH1cblxuICAgIGdldExheW91dERhdGFTb3VyY2UocGFuZWw6IFBhbmVsKTogRmllbGRMYXlvdXREYXRhU291cmNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlubGluZUVkaXQ6IHRydWUsXG4gICAgICAgICAgICBnZXRDb25maWc6ICgpOiBPYnNlcnZhYmxlPEZpZWxkTGF5b3V0Q29uZmlnPiA9PiB0aGlzLmRhdGFTb3VyY2UuZ2V0RGlzcGxheUNvbmZpZygpLnBpcGUobWFwKGNvbmZpZyA9PiAoe1xuICAgICAgICAgICAgICAgIG1vZGU6IGNvbmZpZy5tb2RlLFxuICAgICAgICAgICAgICAgIG1heENvbHVtbnM6IGNvbmZpZy5tYXhDb2x1bW5zLFxuICAgICAgICAgICAgfSkpKSxcbiAgICAgICAgICAgIGdldExheW91dDogKCk6IE9ic2VydmFibGU8UGFuZWw+ID0+IG9mKHBhbmVsKS5waXBlKHNoYXJlUmVwbGF5KDEpKSxcbiAgICAgICAgICAgIGdldEZpZWxkczogKCk6IE9ic2VydmFibGU8RmllbGRNYXA+ID0+IHRoaXMuZGF0YVNvdXJjZS5nZXRSZWNvcmQoKS5waXBlKG1hcChyZWNvcmQgPT4gKHJlY29yZC5maWVsZHMpKSksXG4gICAgICAgICAgICBnZXRSZWNvcmQ6ICgpOiBPYnNlcnZhYmxlPFJlY29yZD4gPT4gdGhpcy5kYXRhU291cmNlLmdldFJlY29yZCgpLFxuICAgICAgICAgICAgZ2V0RWRpdEFjdGlvbjogKCk6IHZvaWQgPT4gdGhpcy5kYXRhU291cmNlLmdldEVkaXRBY3Rpb24oKVxuICAgICAgICB9IGFzIEZpZWxkTGF5b3V0RGF0YVNvdXJjZTtcbiAgICB9XG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48bmctY29udGFpbmVyICpuZ0lmPVwiZGF0YVNvdXJjZVwiPlxuICAgIDxkaXYgKm5nSWY9XCJjb25maWcgJiYgY29uZmlnLmxheW91dCA9PT0gJ3BhbmVscydcIiBjbGFzcz1cInJlY29yZC1jb250ZW50IHBhbmVsLWxheW91dCBjb250YWluZXItZmx1aWQgcGwtMCBwci0wXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbm8tZ3V0dGVycyBtYi0zXCIgKm5nRm9yPVwibGV0IHBhbmVsIG9mIHBhbmVsc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxzY3JtLXBhbmVsIFt0aXRsZV09XCJwYW5lbC5sYWJlbFwiIFtpc0NvbGxhcHNlZCRdPVwiKHBhbmVsLmlzQ29sbGFwc2VkIHwgdG9PYnNlcnZhYmxlKVwiIG1vZGU9XCJjb2xsYXBzaWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHBhbmVsLWJvZHkgY2xhc3M9XCJwYW5lbC17e3BhbmVsLmtleX19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1maWVsZC1sYXlvdXQgW2RhdGFTb3VyY2VdPVwiZ2V0TGF5b3V0RGF0YVNvdXJjZShwYW5lbClcIj48L3Njcm0tZmllbGQtbGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3Njcm0tcGFuZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgKm5nSWY9XCJjb25maWcgJiYgY29uZmlnLmxheW91dCA9PT0gJ3RhYnMnXCIgY2xhc3M9XCJyZWNvcmQtY29udGVudCB0YWJzLWxheW91dCBjb250YWluZXItZmx1aWQgcGwtMCBwci0wXCI+XG5cbiAgICAgICAgPHVsIG5nYk5hdiAjbmF2PVwibmdiTmF2XCIgY2xhc3M9XCJuYXYtdGFic1wiIFsoYWN0aXZlSWQpXT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgcGFuZWwgb2YgcGFuZWxzOyBpbmRleCBhcyBpO1wiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIocGFuZWwuZGlzcGxheSQgfCBhc3luYykgYXMgcGFuZWxEaXNwbGF5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInRhYlwiIFtuZ2JOYXZJdGVtXT1cImkrMVwiICpuZ0lmPVwiISFwYW5lbERpc3BsYXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwidGFiLWxpbmtcIiBuZ2JOYXZMaW5rPnt7cGFuZWwubGFiZWx9fTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBuZ2JOYXZDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWIte3twYW5lbC5rZXl9fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1maWVsZC1sYXlvdXQgW2RhdGFTb3VyY2VdPVwiZ2V0TGF5b3V0RGF0YVNvdXJjZShwYW5lbClcIj48L3Njcm0tZmllbGQtbGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8ZGl2IFtuZ2JOYXZPdXRsZXRdPVwibmF2XCIgY2xhc3M9XCJwLTIgcHQtMyByb3VuZGVkLXJpZ2h0IHJvdW5kZWQtYm90dG9tXCI+PC9kaXY+XG5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwicGFuZWxzSW5QcmV2VGFiICYmIHBhbmVsc0luUHJldlRhYi5sZW5ndGhcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHBhbmVsIG9mIHBhbmVsczsgbGV0IGogPSBpbmRleDtcIj5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBwYW5lbCBvZiBwYW5lbC5zdWJQYW5lbHM7XCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIocGFuZWwuZGlzcGxheSQgfCBhc3luYykgYXMgcGFuZWxEaXNwbGF5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG5vLWd1dHRlcnMgbXQtM1wiICpuZ0lmPVwiISFwYW5lbERpc3BsYXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCIgKm5nSWY9XCJqPT1hY3RpdmUtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1wYW5lbCBbdGl0bGVdPVwicGFuZWwubGFiZWxcIiBbaXNDb2xsYXBzZWQkXT1cIihwYW5lbC5pc0NvbGxhcHNlZCB8IHRvT2JzZXJ2YWJsZSlcIiBtb2RlPVwiY29sbGFwc2libGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgcGFuZWwtYm9keSBjbGFzcz1cInBhbmVsLXt7cGFuZWwua2V5fX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1maWVsZC1sYXlvdXQgW2RhdGFTb3VyY2VdPVwiZ2V0TGF5b3V0RGF0YVNvdXJjZShwYW5lbClcIj48L3Njcm0tZmllbGQtbGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2NybS1wYW5lbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDwvZGl2PlxuXG48L25nLWNvbnRhaW5lcj5cbiJdfQ==