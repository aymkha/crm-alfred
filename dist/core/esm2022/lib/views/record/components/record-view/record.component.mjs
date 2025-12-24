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
import { RecordViewStore } from '../../store/record-view/record-view.store';
import { RecordViewSidebarWidgetService } from "../../services/record-view-sidebar-widget.service";
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/app-state/app-state.store";
import * as i2 from "../../store/record-view/record-view.store";
import * as i3 from "@angular/router";
import * as i4 from "../../services/record-view-sidebar-widget.service";
import * as i5 from "@angular/common";
import * as i6 from "../record-container/record-container.component";
import * as i7 from "../record-header/record-header.component";
import * as i8 from "../../../../components/status-bar/status-bar.component";
function RecordComponent_div_0_scrm_status_bar_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-status-bar");
} }
function RecordComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2);
    i0.ɵɵelement(2, "scrm-record-header");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 3);
    i0.ɵɵelement(4, "hr", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, RecordComponent_div_0_scrm_status_bar_5_Template, 1, 0, "scrm-status-bar", 5);
    i0.ɵɵelement(6, "scrm-record-container");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r0.showStatusBar);
} }
class RecordComponent {
    appState;
    recordStore;
    route;
    sidebarWidgetHandler;
    recordSub;
    vm$ = null;
    showStatusBar = false;
    constructor(appState, recordStore, route, sidebarWidgetHandler) {
        this.appState = appState;
        this.recordStore = recordStore;
        this.route = route;
        this.sidebarWidgetHandler = sidebarWidgetHandler;
    }
    ngOnInit() {
        let mode = 'detail';
        const data = (this.route.snapshot && this.route.snapshot.data) || {};
        if (data.mode) {
            mode = data.mode;
        }
        const params = (this.route.snapshot && this.route.snapshot.queryParams) || {};
        this.recordSub = this.recordStore.init(this.appState.getModule(), this.route.snapshot.params.record, mode, params).subscribe();
        this.vm$ = this.recordStore.vm$;
    }
    ngOnDestroy() {
        if (this.recordSub) {
            this.recordSub.unsubscribe();
        }
        this.sidebarWidgetHandler.destroy();
        this.recordStore.destroy();
    }
    static ɵfac = function RecordComponent_Factory(t) { return new (t || RecordComponent)(i0.ɵɵdirectiveInject(i1.AppStateStore), i0.ɵɵdirectiveInject(i2.RecordViewStore), i0.ɵɵdirectiveInject(i3.ActivatedRoute), i0.ɵɵdirectiveInject(i4.RecordViewSidebarWidgetService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RecordComponent, selectors: [["scrm-record"]], features: [i0.ɵɵProvidersFeature([RecordViewStore, RecordViewSidebarWidgetService])], decls: 2, vars: 3, consts: [["class", "record-view", 4, "ngIf"], [1, "record-view"], [1, "record-view-position-sticky"], [1, "record-view-hr-container"], [1, "record-view-hr"], [4, "ngIf"]], template: function RecordComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, RecordComponent_div_0_Template, 7, 1, "div", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.vm$));
        } }, dependencies: [i5.NgIf, i6.RecordContainerComponent, i7.RecordHeaderComponent, i8.StatusBarComponent, i5.AsyncPipe], encapsulation: 2 });
}
export { RecordComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordComponent, [{
        type: Component,
        args: [{ selector: 'scrm-record', providers: [RecordViewStore, RecordViewSidebarWidgetService], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<!-- Start Record View Section -->\n<div class=\"record-view\" *ngIf=\"(vm$ | async) as vm\">\n\n    <div class=\"record-view-position-sticky\">\n        <scrm-record-header></scrm-record-header>\n    </div>\n    <div class=\"record-view-hr-container\">\n        <hr class=\"record-view-hr\">\n    </div>\n\n    <scrm-status-bar *ngIf=\"showStatusBar\"></scrm-status-bar>\n    <scrm-record-container></scrm-record-container>\n</div>\n<!-- End Record View Section -->\n" }]
    }], function () { return [{ type: i1.AppStateStore }, { type: i2.RecordViewStore }, { type: i3.ActivatedRoute }, { type: i4.RecordViewSidebarWidgetService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi92aWV3cy9yZWNvcmQvY29tcG9uZW50cy9yZWNvcmQtdmlldy9yZWNvcmQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3ZpZXdzL3JlY29yZC9jb21wb25lbnRzL3JlY29yZC12aWV3L3JlY29yZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFHM0QsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBSTFFLE9BQU8sRUFBQyw4QkFBOEIsRUFBQyxNQUFNLG1EQUFtRCxDQUFDOzs7Ozs7Ozs7OztJQ0k3RixrQ0FBeUQ7OztJQVQ3RCw4QkFBcUQsYUFBQTtJQUc3QyxxQ0FBeUM7SUFDN0MsaUJBQU07SUFDTiw4QkFBc0M7SUFDbEMsd0JBQTJCO0lBQy9CLGlCQUFNO0lBRU4sOEZBQXlEO0lBQ3pELHdDQUErQztJQUNuRCxpQkFBTTs7O0lBRmdCLGVBQW1CO0lBQW5CLDJDQUFtQjs7QURGekMsTUFNYSxlQUFlO0lBTVY7SUFDQTtJQUNGO0lBQ0U7SUFSZCxTQUFTLENBQWU7SUFDeEIsR0FBRyxHQUFnQyxJQUFJLENBQUM7SUFDeEMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUV0QixZQUNjLFFBQXVCLEVBQ3ZCLFdBQTRCLEVBQzlCLEtBQXFCLEVBQ25CLG9CQUFvRDtRQUhwRCxhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtRQUM5QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNuQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQWdDO0lBRWxFLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxJQUFJLEdBQUcsUUFBb0IsQ0FBQztRQUNoQyxNQUFNLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVyRSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWCxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztTQUNwQjtRQUVELE1BQU0sTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksRUFBWSxDQUFDO1FBRXhGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMvSCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDaEM7UUFFRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMvQixDQUFDO3lFQW5DUSxlQUFlOzZEQUFmLGVBQWUsaUVBRmIsQ0FBQyxlQUFlLEVBQUUsOEJBQThCLENBQUM7WUNYaEUsZ0VBV007OztZQVhvQixvREFBb0I7OztTRGFqQyxlQUFlO3VGQUFmLGVBQWU7Y0FOM0IsU0FBUzsyQkFDSSxhQUFhLGFBR1osQ0FBQyxlQUFlLEVBQUUsOEJBQThCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FwcFN0YXRlU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL2FwcC1zdGF0ZS9hcHAtc3RhdGUuc3RvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtSZWNvcmRWaWV3U3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL3JlY29yZC12aWV3L3JlY29yZC12aWV3LnN0b3JlJztcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFBhcmFtc30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7UmVjb3JkVmlld01vZGVsfSBmcm9tICcuLi8uLi9zdG9yZS9yZWNvcmQtdmlldy9yZWNvcmQtdmlldy5zdG9yZS5tb2RlbCc7XG5pbXBvcnQge1ZpZXdNb2RlfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtSZWNvcmRWaWV3U2lkZWJhcldpZGdldFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9yZWNvcmQtdmlldy1zaWRlYmFyLXdpZGdldC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1yZWNvcmQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9yZWNvcmQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW10sXG4gICAgcHJvdmlkZXJzOiBbUmVjb3JkVmlld1N0b3JlLCBSZWNvcmRWaWV3U2lkZWJhcldpZGdldFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFJlY29yZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICByZWNvcmRTdWI6IFN1YnNjcmlwdGlvbjtcbiAgICB2bSQ6IE9ic2VydmFibGU8UmVjb3JkVmlld01vZGVsPiA9IG51bGw7XG4gICAgc2hvd1N0YXR1c0JhciA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBhcHBTdGF0ZTogQXBwU3RhdGVTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHJlY29yZFN0b3JlOiBSZWNvcmRWaWV3U3RvcmUsXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcm90ZWN0ZWQgc2lkZWJhcldpZGdldEhhbmRsZXI6IFJlY29yZFZpZXdTaWRlYmFyV2lkZ2V0U2VydmljZVxuICAgICkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBsZXQgbW9kZSA9ICdkZXRhaWwnIGFzIFZpZXdNb2RlO1xuICAgICAgICBjb25zdCBkYXRhID0gKHRoaXMucm91dGUuc25hcHNob3QgJiYgdGhpcy5yb3V0ZS5zbmFwc2hvdC5kYXRhKSB8fCB7fTtcblxuICAgICAgICBpZiAoZGF0YS5tb2RlKSB7XG4gICAgICAgICAgICBtb2RlID0gZGF0YS5tb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFyYW1zID0gKHRoaXMucm91dGUuc25hcHNob3QgJiYgdGhpcy5yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtcykgfHwge30gYXMgUGFyYW1zO1xuXG4gICAgICAgIHRoaXMucmVjb3JkU3ViID0gdGhpcy5yZWNvcmRTdG9yZS5pbml0KHRoaXMuYXBwU3RhdGUuZ2V0TW9kdWxlKCksIHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zLnJlY29yZCwgbW9kZSwgcGFyYW1zKS5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy52bSQgPSB0aGlzLnJlY29yZFN0b3JlLnZtJDtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMucmVjb3JkU3ViKSB7XG4gICAgICAgICAgICB0aGlzLnJlY29yZFN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zaWRlYmFyV2lkZ2V0SGFuZGxlci5kZXN0cm95KCk7XG5cbiAgICAgICAgdGhpcy5yZWNvcmRTdG9yZS5kZXN0cm95KCk7XG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPCEtLSBTdGFydCBSZWNvcmQgVmlldyBTZWN0aW9uIC0tPlxuPGRpdiBjbGFzcz1cInJlY29yZC12aWV3XCIgKm5nSWY9XCIodm0kIHwgYXN5bmMpIGFzIHZtXCI+XG5cbiAgICA8ZGl2IGNsYXNzPVwicmVjb3JkLXZpZXctcG9zaXRpb24tc3RpY2t5XCI+XG4gICAgICAgIDxzY3JtLXJlY29yZC1oZWFkZXI+PC9zY3JtLXJlY29yZC1oZWFkZXI+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInJlY29yZC12aWV3LWhyLWNvbnRhaW5lclwiPlxuICAgICAgICA8aHIgY2xhc3M9XCJyZWNvcmQtdmlldy1oclwiPlxuICAgIDwvZGl2PlxuXG4gICAgPHNjcm0tc3RhdHVzLWJhciAqbmdJZj1cInNob3dTdGF0dXNCYXJcIj48L3Njcm0tc3RhdHVzLWJhcj5cbiAgICA8c2NybS1yZWNvcmQtY29udGFpbmVyPjwvc2NybS1yZWNvcmQtY29udGFpbmVyPlxuPC9kaXY+XG48IS0tIEVuZCBSZWNvcmQgVmlldyBTZWN0aW9uIC0tPlxuIl19