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
import { MaxColumnsCalculator } from '../../../../services/ui/max-columns-calculator/max-columns-calculator.service';
import { ScreenSize } from '../../../../services/ui/screen-size-observer/screen-size-observer.service';
import { TableAdapter } from '../../adapters/table.adapter';
import { ListViewSidebarWidgetAdapter } from '../../adapters/sidebar-widget.adapter';
import * as i0 from "@angular/core";
import * as i1 from "../../store/list-view/list-view.store";
import * as i2 from "../../adapters/table.adapter";
import * as i3 from "../../../../services/ui/max-columns-calculator/max-columns-calculator.service";
import * as i4 from "../../../../store/language/language.store";
import * as i5 from "../../adapters/sidebar-widget.adapter";
import * as i6 from "../../../../store/system-config/system-config.store";
import * as i7 from "../../services/list-view-sidebar-widget.service";
import * as i8 from "@angular/common";
import * as i9 from "../../../../components/table/table.component";
import * as i10 from "../../../../containers/sidebar-widget/components/sidebar-widget/sidebar-widget.component";
const _c0 = function (a0) { return { "col-lg-12": a0 }; };
function ListContainerComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelement(2, "scrm-table", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0, !ctx_r0.displayWidgets));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("config", ctx_r0.tableConfig);
} }
function ListContainerComponent_ng_container_3_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelement(1, "scrm-sidebar-widget", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const widget_r4 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("config", widget_r4)("context", ctx_r3.getViewContext())("context$", ctx_r3.store.context$)("type", widget_r4.type);
} }
function ListContainerComponent_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵtemplate(2, ListContainerComponent_ng_container_3_ng_container_1_div_2_Template, 2, 4, "div", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("display", ctx_r2.widgetDisplayType);
    i0.ɵɵclassProp("mt-0", ctx_r2.swapWidgets);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2.sidebarWidgetConfig.widgets);
} }
function ListContainerComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListContainerComponent_ng_container_3_ng_container_1_Template, 3, 5, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.swapWidgets || ctx_r1.swapWidgets && ctx_r1.displayWidgets);
} }
class ListContainerComponent {
    store;
    adapter;
    maxColumnCalculator;
    languageStore;
    sidebarWidgetAdapter;
    systemConfigs;
    sidebarWidgetHandler;
    screen = ScreenSize.Medium;
    maxColumns = 5;
    tableConfig;
    displayWidgets = true;
    swapWidgets = false;
    sidebarWidgetConfig;
    widgetDisplayType = 'none';
    subs = [];
    constructor(store, adapter, maxColumnCalculator, languageStore, sidebarWidgetAdapter, systemConfigs, sidebarWidgetHandler) {
        this.store = store;
        this.adapter = adapter;
        this.maxColumnCalculator = maxColumnCalculator;
        this.languageStore = languageStore;
        this.sidebarWidgetAdapter = sidebarWidgetAdapter;
        this.systemConfigs = systemConfigs;
        this.sidebarWidgetHandler = sidebarWidgetHandler;
    }
    ngOnInit() {
        this.tableConfig = this.adapter.getTable();
        this.tableConfig.maxColumns$ = this.getMaxColumns();
        if (this.store?.metadata?.listView?.maxHeight) {
            this.tableConfig.maxListHeight = this.store.metadata.listView.maxHeight;
        }
        if (!this.tableConfig?.maxListHeight) {
            const ui = this.systemConfigs.getConfigValue('ui');
            this.tableConfig.maxListHeight = ui.listview_max_height;
        }
        this.tableConfig.paginationType = this?.store?.metadata?.listView?.paginationType ?? this.tableConfig.paginationType;
        this.subs.push(this.sidebarWidgetAdapter.config$.subscribe(sidebarWidgetConfig => {
            this.sidebarWidgetConfig = sidebarWidgetConfig;
            this.displayWidgets = this.store.widgets && this.store.showSidebarWidgets;
            this.widgetDisplayType = this.getDisplay(!!(this.sidebarWidgetConfig.show && this.sidebarWidgetConfig.widgets));
        }));
        this.subs.push(this.sidebarWidgetHandler.widgetSwap$.subscribe(swap => {
            this.swapWidgets = swap;
        }));
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
        this.subs = [];
    }
    getMaxColumns() {
        return this.maxColumnCalculator.getMaxColumns(this.store.widgets$);
    }
    getDisplayWidgets() {
        return this.store.widgets && this.store.showSidebarWidgets;
    }
    getDisplay(display) {
        let displayType = 'none';
        if (display) {
            displayType = 'block';
        }
        return displayType;
    }
    getViewContext() {
        return this.store.getViewContext();
    }
    static ɵfac = function ListContainerComponent_Factory(t) { return new (t || ListContainerComponent)(i0.ɵɵdirectiveInject(i1.ListViewStore), i0.ɵɵdirectiveInject(i2.TableAdapter), i0.ɵɵdirectiveInject(i3.MaxColumnsCalculator), i0.ɵɵdirectiveInject(i4.LanguageStore), i0.ɵɵdirectiveInject(i5.ListViewSidebarWidgetAdapter), i0.ɵɵdirectiveInject(i6.SystemConfigStore), i0.ɵɵdirectiveInject(i7.ListViewSidebarWidgetService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ListContainerComponent, selectors: [["scrm-list-container"]], features: [i0.ɵɵProvidersFeature([TableAdapter, MaxColumnsCalculator, ListViewSidebarWidgetAdapter])], decls: 4, vars: 2, consts: [[1, "list-view-container", "container-fluid", "pt-2"], [1, "row"], [4, "ngIf"], [1, "col-lg-9", 3, "ngClass"], [3, "config"], [1, "col-lg-3", "list-widget-container", "pl-0"], ["class", "mb-3", 4, "ngFor", "ngForOf"], [1, "mb-3"], [3, "config", "context", "context$", "type"]], template: function ListContainerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵtemplate(2, ListContainerComponent_ng_container_2_Template, 3, 4, "ng-container", 2);
            i0.ɵɵtemplate(3, ListContainerComponent_ng_container_3_Template, 2, 1, "ng-container", 2);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.swapWidgets || ctx.swapWidgets && !ctx.displayWidgets);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.sidebarWidgetConfig.widgetsEnabled);
        } }, dependencies: [i8.NgClass, i8.NgForOf, i8.NgIf, i9.TableComponent, i10.SidebarWidgetComponent], encapsulation: 2 });
}
export { ListContainerComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListContainerComponent, [{
        type: Component,
        args: [{ selector: 'scrm-list-container', providers: [TableAdapter, MaxColumnsCalculator, ListViewSidebarWidgetAdapter], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<!-- Start List View Container Section -->\n\n<div class=\"list-view-container container-fluid pt-2\">\n    <div class=\"row\">\n        <ng-container *ngIf=\"!swapWidgets || (swapWidgets && !displayWidgets)\">\n            <div [ngClass]=\"{ 'col-lg-12': !displayWidgets }\"\n                 class=\"col-lg-9\"\n            >\n                <scrm-table [config]=\"tableConfig\"></scrm-table>\n            </div>\n        </ng-container>\n\n\n        <ng-container *ngIf=\"sidebarWidgetConfig.widgetsEnabled\">\n            <ng-container *ngIf=\"!swapWidgets || (swapWidgets && displayWidgets)\">\n            <div [style.display]=\"widgetDisplayType\"\n                 [class.mt-0]=\"swapWidgets\"\n                 class=\"col-lg-3 list-widget-container pl-0\">\n                <div *ngFor=\"let widget of sidebarWidgetConfig.widgets\" class=\"mb-3\">\n                    <scrm-sidebar-widget [config]=\"widget\"\n                                         [context]=\"getViewContext()\"\n                                         [context$]=\"store.context$\"\n                                         [type]=\"widget.type\">\n                    </scrm-sidebar-widget>\n                </div>\n            </div>\n            </ng-container>\n        </ng-container>\n\n\n    </div>\n</div>\n\n<!-- End List View Container Section -->\n" }]
    }], function () { return [{ type: i1.ListViewStore }, { type: i2.TableAdapter }, { type: i3.MaxColumnsCalculator }, { type: i4.LanguageStore }, { type: i5.ListViewSidebarWidgetAdapter }, { type: i6.SystemConfigStore }, { type: i7.ListViewSidebarWidgetService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3ZpZXdzL2xpc3QvY29tcG9uZW50cy9saXN0LWNvbnRhaW5lci9saXN0LWNvbnRhaW5lci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvbGlzdC9jb21wb25lbnRzL2xpc3QtY29udGFpbmVyL2xpc3QtY29udGFpbmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUkzRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwrRUFBK0UsQ0FBQztBQUVuSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sMkVBQTJFLENBQUM7QUFHckcsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQzFELE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLHVDQUF1QyxDQUFDOzs7Ozs7Ozs7Ozs7OztJQ0wzRSw2QkFBdUU7SUFDbkUsOEJBRUM7SUFDRyxnQ0FBZ0Q7SUFDcEQsaUJBQU07SUFDViwwQkFBZTs7O0lBTE4sZUFBNEM7SUFBNUMsNEVBQTRDO0lBR2pDLGVBQXNCO0lBQXRCLDJDQUFzQjs7O0lBVWxDLDhCQUFxRTtJQUNqRSx5Q0FJc0I7SUFDMUIsaUJBQU07Ozs7SUFMbUIsZUFBaUI7SUFBakIsa0NBQWlCLG9DQUFBLG1DQUFBLHdCQUFBOzs7SUFMOUMsNkJBQXNFO0lBQ3RFLDhCQUVpRDtJQUM3QyxxR0FNTTtJQUNWLGlCQUFNO0lBQ04sMEJBQWU7OztJQVhWLGVBQW1DO0lBQW5DLG1EQUFtQztJQUNuQywwQ0FBMEI7SUFFSCxlQUE4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QyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsYUFBYTtRQUNULE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxpQkFBaUI7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUM7SUFDL0QsQ0FBQztJQUVELFVBQVUsQ0FBQyxPQUFnQjtRQUN2QixJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUM7UUFFekIsSUFBSSxPQUFPLEVBQUU7WUFDVCxXQUFXLEdBQUcsT0FBTyxDQUFDO1NBQ3pCO1FBRUQsT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQztJQUVELGNBQWM7UUFDVixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkMsQ0FBQztnRkF4RVEsc0JBQXNCOzZEQUF0QixzQkFBc0IseUVBSHBCLENBQUMsWUFBWSxFQUFFLG9CQUFvQixFQUFFLDRCQUE0QixDQUFDO1lDdEJqRiw4QkFBc0QsYUFBQTtZQUU5Qyx5RkFNZTtZQUdmLHlGQWNlO1lBR25CLGlCQUFNLEVBQUE7O1lBMUJhLGVBQXNEO1lBQXRELGlGQUFzRDtZQVN0RCxlQUF3QztZQUF4Qyw2REFBd0M7OztTRGNsRCxzQkFBc0I7dUZBQXRCLHNCQUFzQjtjQU5sQyxTQUFTOzJCQUNJLHFCQUFxQixhQUVwQixDQUFDLFlBQVksRUFBRSxvQkFBb0IsRUFBRSw0QkFBNEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7Vmlld0NvbnRleHQsIFdpZGdldE1ldGFkYXRhfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHttYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7TWF4Q29sdW1uc0NhbGN1bGF0b3J9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL3VpL21heC1jb2x1bW5zLWNhbGN1bGF0b3IvbWF4LWNvbHVtbnMtY2FsY3VsYXRvci5zZXJ2aWNlJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtTY3JlZW5TaXplfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy91aS9zY3JlZW4tc2l6ZS1vYnNlcnZlci9zY3JlZW4tc2l6ZS1vYnNlcnZlci5zZXJ2aWNlJztcbmltcG9ydCB7TGlzdFZpZXdTdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvbGlzdC12aWV3L2xpc3Qtdmlldy5zdG9yZSc7XG5pbXBvcnQge1RhYmxlQ29uZmlnfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLm1vZGVsJztcbmltcG9ydCB7VGFibGVBZGFwdGVyfSBmcm9tICcuLi8uLi9hZGFwdGVycy90YWJsZS5hZGFwdGVyJztcbmltcG9ydCB7TGlzdFZpZXdTaWRlYmFyV2lkZ2V0QWRhcHRlcn0gZnJvbSAnLi4vLi4vYWRhcHRlcnMvc2lkZWJhci13aWRnZXQuYWRhcHRlcic7XG5pbXBvcnQge1N5c3RlbUNvbmZpZ1N0b3JlfSBmcm9tIFwiLi4vLi4vLi4vLi4vc3RvcmUvc3lzdGVtLWNvbmZpZy9zeXN0ZW0tY29uZmlnLnN0b3JlXCI7XG5pbXBvcnQge0xpc3RWaWV3U2lkZWJhcldpZGdldFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9saXN0LXZpZXctc2lkZWJhci13aWRnZXQuc2VydmljZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpc3RDb250YWluZXJTdGF0ZSB7XG4gICAgc2lkZWJhcldpZGdldENvbmZpZzoge1xuICAgICAgICB3aWRnZXRzOiBXaWRnZXRNZXRhZGF0YVtdO1xuICAgICAgICBzaG93OiBib29sZWFuO1xuICAgICAgICB3aWRnZXRzRW5hYmxlZDogYm9vbGVhbjtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1saXN0LWNvbnRhaW5lcicsXG4gICAgdGVtcGxhdGVVcmw6ICdsaXN0LWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbVGFibGVBZGFwdGVyLCBNYXhDb2x1bW5zQ2FsY3VsYXRvciwgTGlzdFZpZXdTaWRlYmFyV2lkZ2V0QWRhcHRlcl0sXG59KVxuXG5leHBvcnQgY2xhc3MgTGlzdENvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBzY3JlZW46IFNjcmVlblNpemUgPSBTY3JlZW5TaXplLk1lZGl1bTtcbiAgICBtYXhDb2x1bW5zID0gNTtcbiAgICB0YWJsZUNvbmZpZzogVGFibGVDb25maWc7XG4gICAgZGlzcGxheVdpZGdldHM6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHN3YXBXaWRnZXRzOiBib29sZWFuID0gZmFsc2U7XG4gICAgc2lkZWJhcldpZGdldENvbmZpZzogYW55O1xuICAgIHdpZGdldERpc3BsYXlUeXBlOiBzdHJpbmcgPSAnbm9uZSc7XG5cbiAgICBwcm90ZWN0ZWQgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgc3RvcmU6IExpc3RWaWV3U3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBhZGFwdGVyOiBUYWJsZUFkYXB0ZXIsXG4gICAgICAgIHByb3RlY3RlZCBtYXhDb2x1bW5DYWxjdWxhdG9yOiBNYXhDb2x1bW5zQ2FsY3VsYXRvcixcbiAgICAgICAgcHVibGljIGxhbmd1YWdlU3RvcmU6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBzaWRlYmFyV2lkZ2V0QWRhcHRlcjogTGlzdFZpZXdTaWRlYmFyV2lkZ2V0QWRhcHRlcixcbiAgICAgICAgcHJvdGVjdGVkIHN5c3RlbUNvbmZpZ3M6IFN5c3RlbUNvbmZpZ1N0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgc2lkZWJhcldpZGdldEhhbmRsZXI6IExpc3RWaWV3U2lkZWJhcldpZGdldFNlcnZpY2VcbiAgICApIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50YWJsZUNvbmZpZyA9IHRoaXMuYWRhcHRlci5nZXRUYWJsZSgpO1xuICAgICAgICB0aGlzLnRhYmxlQ29uZmlnLm1heENvbHVtbnMkID0gdGhpcy5nZXRNYXhDb2x1bW5zKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RvcmU/Lm1ldGFkYXRhPy5saXN0Vmlldz8ubWF4SGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLnRhYmxlQ29uZmlnLm1heExpc3RIZWlnaHQgPSB0aGlzLnN0b3JlLm1ldGFkYXRhLmxpc3RWaWV3Lm1heEhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMudGFibGVDb25maWc/Lm1heExpc3RIZWlnaHQpIHtcbiAgICAgICAgICAgIGNvbnN0IHVpID0gdGhpcy5zeXN0ZW1Db25maWdzLmdldENvbmZpZ1ZhbHVlKCd1aScpO1xuICAgICAgICAgICAgdGhpcy50YWJsZUNvbmZpZy5tYXhMaXN0SGVpZ2h0ID0gdWkubGlzdHZpZXdfbWF4X2hlaWdodDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRhYmxlQ29uZmlnLnBhZ2luYXRpb25UeXBlID0gdGhpcz8uc3RvcmU/Lm1ldGFkYXRhPy5saXN0Vmlldz8ucGFnaW5hdGlvblR5cGUgPz8gdGhpcy50YWJsZUNvbmZpZy5wYWdpbmF0aW9uVHlwZTtcblxuXG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMuc2lkZWJhcldpZGdldEFkYXB0ZXIuY29uZmlnJC5zdWJzY3JpYmUoc2lkZWJhcldpZGdldENvbmZpZyA9PiB7XG4gICAgICAgICAgICB0aGlzLnNpZGViYXJXaWRnZXRDb25maWcgPSBzaWRlYmFyV2lkZ2V0Q29uZmlnO1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5V2lkZ2V0cyA9IHRoaXMuc3RvcmUud2lkZ2V0cyAmJiB0aGlzLnN0b3JlLnNob3dTaWRlYmFyV2lkZ2V0cztcbiAgICAgICAgICAgIHRoaXMud2lkZ2V0RGlzcGxheVR5cGUgPSB0aGlzLmdldERpc3BsYXkoISEodGhpcy5zaWRlYmFyV2lkZ2V0Q29uZmlnLnNob3cgJiYgdGhpcy5zaWRlYmFyV2lkZ2V0Q29uZmlnLndpZGdldHMpKTtcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMuc2lkZWJhcldpZGdldEhhbmRsZXIud2lkZ2V0U3dhcCQuc3Vic2NyaWJlKHN3YXAgPT4ge1xuICAgICAgICAgICAgdGhpcy5zd2FwV2lkZ2V0cyA9IHN3YXA7XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgICAgICAgdGhpcy5zdWJzID0gW107XG4gICAgfVxuXG4gICAgZ2V0TWF4Q29sdW1ucygpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXhDb2x1bW5DYWxjdWxhdG9yLmdldE1heENvbHVtbnModGhpcy5zdG9yZS53aWRnZXRzJCk7XG4gICAgfVxuXG4gICAgZ2V0RGlzcGxheVdpZGdldHMoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlLndpZGdldHMgJiYgdGhpcy5zdG9yZS5zaG93U2lkZWJhcldpZGdldHM7XG4gICAgfVxuXG4gICAgZ2V0RGlzcGxheShkaXNwbGF5OiBib29sZWFuKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGRpc3BsYXlUeXBlID0gJ25vbmUnO1xuXG4gICAgICAgIGlmIChkaXNwbGF5KSB7XG4gICAgICAgICAgICBkaXNwbGF5VHlwZSA9ICdibG9jayc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGlzcGxheVR5cGU7XG4gICAgfVxuXG4gICAgZ2V0Vmlld0NvbnRleHQoKTogVmlld0NvbnRleHQge1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5nZXRWaWV3Q29udGV4dCgpO1xuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjwhLS0gU3RhcnQgTGlzdCBWaWV3IENvbnRhaW5lciBTZWN0aW9uIC0tPlxuXG48ZGl2IGNsYXNzPVwibGlzdC12aWV3LWNvbnRhaW5lciBjb250YWluZXItZmx1aWQgcHQtMlwiPlxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFzd2FwV2lkZ2V0cyB8fCAoc3dhcFdpZGdldHMgJiYgIWRpc3BsYXlXaWRnZXRzKVwiPlxuICAgICAgICAgICAgPGRpdiBbbmdDbGFzc109XCJ7ICdjb2wtbGctMTInOiAhZGlzcGxheVdpZGdldHMgfVwiXG4gICAgICAgICAgICAgICAgIGNsYXNzPVwiY29sLWxnLTlcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzY3JtLXRhYmxlIFtjb25maWddPVwidGFibGVDb25maWdcIj48L3Njcm0tdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic2lkZWJhcldpZGdldENvbmZpZy53aWRnZXRzRW5hYmxlZFwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFzd2FwV2lkZ2V0cyB8fCAoc3dhcFdpZGdldHMgJiYgZGlzcGxheVdpZGdldHMpXCI+XG4gICAgICAgICAgICA8ZGl2IFtzdHlsZS5kaXNwbGF5XT1cIndpZGdldERpc3BsYXlUeXBlXCJcbiAgICAgICAgICAgICAgICAgW2NsYXNzLm10LTBdPVwic3dhcFdpZGdldHNcIlxuICAgICAgICAgICAgICAgICBjbGFzcz1cImNvbC1sZy0zIGxpc3Qtd2lkZ2V0LWNvbnRhaW5lciBwbC0wXCI+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgd2lkZ2V0IG9mIHNpZGViYXJXaWRnZXRDb25maWcud2lkZ2V0c1wiIGNsYXNzPVwibWItM1wiPlxuICAgICAgICAgICAgICAgICAgICA8c2NybS1zaWRlYmFyLXdpZGdldCBbY29uZmlnXT1cIndpZGdldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb250ZXh0XT1cImdldFZpZXdDb250ZXh0KClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29udGV4dCRdPVwic3RvcmUuY29udGV4dCRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdHlwZV09XCJ3aWRnZXQudHlwZVwiPlxuICAgICAgICAgICAgICAgICAgICA8L3Njcm0tc2lkZWJhci13aWRnZXQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuXG4gICAgPC9kaXY+XG48L2Rpdj5cblxuPCEtLSBFbmQgTGlzdCBWaWV3IENvbnRhaW5lciBTZWN0aW9uIC0tPlxuIl19