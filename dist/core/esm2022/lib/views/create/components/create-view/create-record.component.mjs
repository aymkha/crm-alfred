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
import { CreateViewStore } from '../../store/create-view/create-view.store';
import { RecordViewStore } from '../../../record/store/record-view/record-view.store';
import { RecordViewSidebarWidgetService } from "../../../record/services/record-view-sidebar-widget.service";
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/app-state/app-state.store";
import * as i2 from "../../store/create-view/create-view.store";
import * as i3 from "@angular/router";
import * as i4 from "@angular/common";
import * as i5 from "../../../record/components/record-container/record-container.component";
import * as i6 from "../../../record/components/record-header/record-header.component";
import * as i7 from "../../../../components/status-bar/status-bar.component";
function CreateRecordComponent_div_0_scrm_status_bar_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-status-bar");
} }
function CreateRecordComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2);
    i0.ɵɵelement(2, "scrm-record-header");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 3);
    i0.ɵɵelement(4, "hr", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, CreateRecordComponent_div_0_scrm_status_bar_5_Template, 1, 0, "scrm-status-bar", 5);
    i0.ɵɵelement(6, "scrm-record-container");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r0.showStatusBar);
} }
class CreateRecordComponent {
    appState;
    recordStore;
    route;
    recordSub;
    vm$ = null;
    showStatusBar = false;
    constructor(appState, recordStore, route) {
        this.appState = appState;
        this.recordStore = recordStore;
        this.route = route;
    }
    ngOnInit() {
        let mode = 'detail';
        const data = (this.route.snapshot && this.route.snapshot.data) || {};
        if (data.mode) {
            mode = data.mode;
        }
        let params = (this.route.snapshot && this.route.snapshot.queryParams) || {};
        params = { ...params };
        let recordId = this.route.snapshot.params.record;
        if (data.duplicate === true) {
            params.originalDuplicateId = recordId;
            params.isDuplicate = true;
            recordId = '';
        }
        this.recordSub = this.recordStore.init(this.appState.getModule(), recordId, mode, params).subscribe();
        this.vm$ = this.recordStore.vm$;
    }
    ngOnDestroy() {
        if (this.recordSub) {
            this.recordSub.unsubscribe();
        }
        this.recordStore.destroy();
    }
    static ɵfac = function CreateRecordComponent_Factory(t) { return new (t || CreateRecordComponent)(i0.ɵɵdirectiveInject(i1.AppStateStore), i0.ɵɵdirectiveInject(i2.CreateViewStore), i0.ɵɵdirectiveInject(i3.ActivatedRoute)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CreateRecordComponent, selectors: [["scrm-create-record"]], features: [i0.ɵɵProvidersFeature([
                CreateViewStore,
                {
                    provide: RecordViewStore,
                    useExisting: CreateViewStore
                },
                RecordViewSidebarWidgetService
            ])], decls: 2, vars: 3, consts: [["class", "record-view", 4, "ngIf"], [1, "record-view"], [1, "record-view-position-sticky"], [1, "record-view-hr-container"], [1, "record-view-hr"], [4, "ngIf"]], template: function CreateRecordComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CreateRecordComponent_div_0_Template, 7, 1, "div", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.vm$));
        } }, dependencies: [i4.NgIf, i5.RecordContainerComponent, i6.RecordHeaderComponent, i7.StatusBarComponent, i4.AsyncPipe], encapsulation: 2 });
}
export { CreateRecordComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CreateRecordComponent, [{
        type: Component,
        args: [{ selector: 'scrm-create-record', providers: [
                    CreateViewStore,
                    {
                        provide: RecordViewStore,
                        useExisting: CreateViewStore
                    },
                    RecordViewSidebarWidgetService
                ], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n\n<!-- Start Record View Section -->\n<div class=\"record-view\" *ngIf=\"(vm$ | async) as vm\">\n\n    <div class=\"record-view-position-sticky\">\n        <scrm-record-header></scrm-record-header>\n    </div>\n    <div class=\"record-view-hr-container\">\n        <hr class=\"record-view-hr\">\n    </div>\n\n    <scrm-status-bar *ngIf=\"showStatusBar\"></scrm-status-bar>\n    <scrm-record-container></scrm-record-container>\n</div>\n<!-- End Record View Section -->\n" }]
    }], function () { return [{ type: i1.AppStateStore }, { type: i2.CreateViewStore }, { type: i3.ActivatedRoute }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXJlY29yZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvY3JlYXRlL2NvbXBvbmVudHMvY3JlYXRlLXZpZXcvY3JlYXRlLXJlY29yZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvY3JlYXRlL2NvbXBvbmVudHMvY3JlYXRlLXZpZXcvY3JlYXRlLXJlY29yZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFHM0QsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxxREFBcUQsQ0FBQztBQUlwRixPQUFPLEVBQUMsOEJBQThCLEVBQUMsTUFBTSw2REFBNkQsQ0FBQzs7Ozs7Ozs7OztJQ0l2RyxrQ0FBeUQ7OztJQVQ3RCw4QkFBcUQsYUFBQTtJQUc3QyxxQ0FBeUM7SUFDN0MsaUJBQU07SUFDTiw4QkFBc0M7SUFDbEMsd0JBQTJCO0lBQy9CLGlCQUFNO0lBRU4sb0dBQXlEO0lBQ3pELHdDQUErQztJQUNuRCxpQkFBTTs7O0lBRmdCLGVBQW1CO0lBQW5CLDJDQUFtQjs7QURGekMsTUFhYSxxQkFBcUI7SUFLUjtJQUFtQztJQUFzQztJQUovRixTQUFTLENBQWU7SUFDeEIsR0FBRyxHQUFnQyxJQUFJLENBQUM7SUFDeEMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUV0QixZQUFzQixRQUF1QixFQUFZLFdBQTRCLEVBQVUsS0FBcUI7UUFBOUYsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQUFZLGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO0lBQ3BILENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxJQUFJLEdBQUcsUUFBb0IsQ0FBQztRQUNoQyxNQUFNLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVyRSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWCxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztTQUNwQjtRQUVELElBQUksTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksRUFBWSxDQUFDO1FBRXRGLE1BQU0sR0FBRyxFQUFDLEdBQUcsTUFBTSxFQUFDLENBQUM7UUFFckIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUVqRCxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQ3pCLE1BQU0sQ0FBQyxtQkFBbUIsR0FBRyxRQUFRLENBQUM7WUFDdEMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDMUIsUUFBUSxHQUFHLEVBQUUsQ0FBQztTQUNqQjtRQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3RHLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7SUFDcEMsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNoQztRQUVELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDL0IsQ0FBQzsrRUFyQ1EscUJBQXFCOzZEQUFyQixxQkFBcUIsd0VBVG5CO2dCQUNQLGVBQWU7Z0JBQ2Y7b0JBQ0ksT0FBTyxFQUFFLGVBQWU7b0JBQ3hCLFdBQVcsRUFBRSxlQUFlO2lCQUMvQjtnQkFDRCw4QkFBOEI7YUFDakM7WUNsQkwsc0VBV007OztZQVhvQixvREFBb0I7OztTRG9CakMscUJBQXFCO3VGQUFyQixxQkFBcUI7Y0FiakMsU0FBUzsyQkFDSSxvQkFBb0IsYUFHbkI7b0JBQ1AsZUFBZTtvQkFDZjt3QkFDSSxPQUFPLEVBQUUsZUFBZTt3QkFDeEIsV0FBVyxFQUFFLGVBQWU7cUJBQy9CO29CQUNELDhCQUE4QjtpQkFDakMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBQYXJhbXN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0NyZWF0ZVZpZXdTdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvY3JlYXRlLXZpZXcvY3JlYXRlLXZpZXcuc3RvcmUnO1xuaW1wb3J0IHtSZWNvcmRWaWV3U3RvcmV9IGZyb20gJy4uLy4uLy4uL3JlY29yZC9zdG9yZS9yZWNvcmQtdmlldy9yZWNvcmQtdmlldy5zdG9yZSc7XG5pbXBvcnQge1JlY29yZFZpZXdNb2RlbH0gZnJvbSAnLi4vLi4vLi4vcmVjb3JkL3N0b3JlL3JlY29yZC12aWV3L3JlY29yZC12aWV3LnN0b3JlLm1vZGVsJztcbmltcG9ydCB7QXBwU3RhdGVTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvYXBwLXN0YXRlL2FwcC1zdGF0ZS5zdG9yZSc7XG5pbXBvcnQge1ZpZXdNb2RlfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtSZWNvcmRWaWV3U2lkZWJhcldpZGdldFNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9yZWNvcmQvc2VydmljZXMvcmVjb3JkLXZpZXctc2lkZWJhci13aWRnZXQuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tY3JlYXRlLXJlY29yZCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NyZWF0ZS1yZWNvcmQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW10sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIENyZWF0ZVZpZXdTdG9yZSxcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogUmVjb3JkVmlld1N0b3JlLFxuICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IENyZWF0ZVZpZXdTdG9yZVxuICAgICAgICB9LFxuICAgICAgICBSZWNvcmRWaWV3U2lkZWJhcldpZGdldFNlcnZpY2VcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIENyZWF0ZVJlY29yZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICByZWNvcmRTdWI6IFN1YnNjcmlwdGlvbjtcbiAgICB2bSQ6IE9ic2VydmFibGU8UmVjb3JkVmlld01vZGVsPiA9IG51bGw7XG4gICAgc2hvd1N0YXR1c0JhciA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFwcFN0YXRlOiBBcHBTdGF0ZVN0b3JlLCBwcm90ZWN0ZWQgcmVjb3JkU3RvcmU6IENyZWF0ZVZpZXdTdG9yZSwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgbGV0IG1vZGUgPSAnZGV0YWlsJyBhcyBWaWV3TW9kZTtcbiAgICAgICAgY29uc3QgZGF0YSA9ICh0aGlzLnJvdXRlLnNuYXBzaG90ICYmIHRoaXMucm91dGUuc25hcHNob3QuZGF0YSkgfHwge307XG5cbiAgICAgICAgaWYgKGRhdGEubW9kZSkge1xuICAgICAgICAgICAgbW9kZSA9IGRhdGEubW9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwYXJhbXMgPSAodGhpcy5yb3V0ZS5zbmFwc2hvdCAmJiB0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zKSB8fCB7fSBhcyBQYXJhbXM7XG5cbiAgICAgICAgcGFyYW1zID0gey4uLnBhcmFtc307XG5cbiAgICAgICAgbGV0IHJlY29yZElkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMucmVjb3JkO1xuXG4gICAgICAgIGlmIChkYXRhLmR1cGxpY2F0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcGFyYW1zLm9yaWdpbmFsRHVwbGljYXRlSWQgPSByZWNvcmRJZDtcbiAgICAgICAgICAgIHBhcmFtcy5pc0R1cGxpY2F0ZSA9IHRydWU7XG4gICAgICAgICAgICByZWNvcmRJZCA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVjb3JkU3ViID0gdGhpcy5yZWNvcmRTdG9yZS5pbml0KHRoaXMuYXBwU3RhdGUuZ2V0TW9kdWxlKCksIHJlY29yZElkLCBtb2RlLCBwYXJhbXMpLnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLnZtJCA9IHRoaXMucmVjb3JkU3RvcmUudm0kO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5yZWNvcmRTdWIpIHtcbiAgICAgICAgICAgIHRoaXMucmVjb3JkU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlY29yZFN0b3JlLmRlc3Ryb3koKTtcbiAgICB9XG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG5cbjwhLS0gU3RhcnQgUmVjb3JkIFZpZXcgU2VjdGlvbiAtLT5cbjxkaXYgY2xhc3M9XCJyZWNvcmQtdmlld1wiICpuZ0lmPVwiKHZtJCB8IGFzeW5jKSBhcyB2bVwiPlxuXG4gICAgPGRpdiBjbGFzcz1cInJlY29yZC12aWV3LXBvc2l0aW9uLXN0aWNreVwiPlxuICAgICAgICA8c2NybS1yZWNvcmQtaGVhZGVyPjwvc2NybS1yZWNvcmQtaGVhZGVyPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyZWNvcmQtdmlldy1oci1jb250YWluZXJcIj5cbiAgICAgICAgPGhyIGNsYXNzPVwicmVjb3JkLXZpZXctaHJcIj5cbiAgICA8L2Rpdj5cblxuICAgIDxzY3JtLXN0YXR1cy1iYXIgKm5nSWY9XCJzaG93U3RhdHVzQmFyXCI+PC9zY3JtLXN0YXR1cy1iYXI+XG4gICAgPHNjcm0tcmVjb3JkLWNvbnRhaW5lcj48L3Njcm0tcmVjb3JkLWNvbnRhaW5lcj5cbjwvZGl2PlxuPCEtLSBFbmQgUmVjb3JkIFZpZXcgU2VjdGlvbiAtLT5cbiJdfQ==