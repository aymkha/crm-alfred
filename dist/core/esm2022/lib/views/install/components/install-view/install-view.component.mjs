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
import { InstallViewStore } from '../../store/install-view/install-view.store';
import * as i0 from "@angular/core";
import * as i1 from "../../store/install-view/install-view.store";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
import * as i4 from "../install-header/install-header.component";
import * as i5 from "../install-container/install-container.component";
function InstallViewComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelement(1, "scrm-install-header");
    i0.ɵɵelementStart(2, "div", 2);
    i0.ɵɵelement(3, "hr", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "scrm-install-container");
    i0.ɵɵelementEnd();
} }
class InstallViewComponent {
    store;
    route;
    vm$ = null;
    showStatusBar = false;
    constructor(store, route) {
        this.store = store;
        this.route = route;
    }
    ngOnInit() {
        let mode = 'edit';
        const data = (this.route.snapshot && this.route.snapshot.data) || {};
        if (data.mode) {
            mode = data.mode;
        }
        this.store.init(mode);
        this.vm$ = this.store.vm$;
    }
    ngOnDestroy() {
        this.store.clear();
    }
    static ɵfac = function InstallViewComponent_Factory(t) { return new (t || InstallViewComponent)(i0.ɵɵdirectiveInject(i1.InstallViewStore), i0.ɵɵdirectiveInject(i2.ActivatedRoute)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InstallViewComponent, selectors: [["scrm-install-view"]], features: [i0.ɵɵProvidersFeature([InstallViewStore])], decls: 2, vars: 3, consts: [["class", "install-view", 4, "ngIf"], [1, "install-view"], [1, "record-view-hr-container"], [1, "record-view-hr"]], template: function InstallViewComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, InstallViewComponent_div_0_Template, 5, 0, "div", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.vm$));
        } }, dependencies: [i3.NgIf, i4.InstallHeaderComponent, i5.InstallContainerComponent, i3.AsyncPipe], encapsulation: 2 });
}
export { InstallViewComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InstallViewComponent, [{
        type: Component,
        args: [{ selector: 'scrm-install-view', providers: [InstallViewStore], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div *ngIf=\"(vm$ | async) as vm\" class=\"install-view\">\n\n    <scrm-install-header></scrm-install-header>\n\n    <div class=\"record-view-hr-container\">\n        <hr class=\"record-view-hr\">\n    </div>\n\n    <scrm-install-container></scrm-install-container>\n</div>\n" }]
    }], function () { return [{ type: i1.InstallViewStore }, { type: i2.ActivatedRoute }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFsbC12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi92aWV3cy9pbnN0YWxsL2NvbXBvbmVudHMvaW5zdGFsbC12aWV3L2luc3RhbGwtdmlldy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvaW5zdGFsbC9jb21wb25lbnRzL2luc3RhbGwtdmlldy9pbnN0YWxsLXZpZXcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBSTNELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDZDQUE2QyxDQUFDOzs7Ozs7OztJQ0g3RSw4QkFBc0Q7SUFFbEQsc0NBQTJDO0lBRTNDLDhCQUFzQztJQUNsQyx3QkFBMkI7SUFDL0IsaUJBQU07SUFFTix5Q0FBaUQ7SUFDckQsaUJBQU07O0FESE4sTUFNYSxvQkFBb0I7SUFNZjtJQUNGO0lBTFosR0FBRyxHQUFpQyxJQUFJLENBQUM7SUFDekMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUV0QixZQUNjLEtBQXVCLEVBQ3pCLEtBQXFCO1FBRG5CLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQ3pCLFVBQUssR0FBTCxLQUFLLENBQWdCO0lBRWpDLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxJQUFJLEdBQUcsTUFBa0IsQ0FBQztRQUM5QixNQUFNLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVyRSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWCxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztTQUNwQjtRQUVELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDOUIsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3ZCLENBQUM7OEVBekJRLG9CQUFvQjs2REFBcEIsb0JBQW9CLHVFQUZsQixDQUFDLGdCQUFnQixDQUFDO1lDVmpDLHFFQVNNOzs7WUFUQSxvREFBb0I7OztTRFliLG9CQUFvQjt1RkFBcEIsb0JBQW9CO2NBTmhDLFNBQVM7MkJBQ0ksbUJBQW1CLGFBR2xCLENBQUMsZ0JBQWdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7Vmlld01vZGV9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge0luc3RhbGxWaWV3U3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL2luc3RhbGwtdmlldy9pbnN0YWxsLXZpZXcuc3RvcmUnO1xuaW1wb3J0IHtJbnN0YWxsVmlld01vZGVsfSBmcm9tICcuLi8uLi9zdG9yZS9pbnN0YWxsLXZpZXcvaW5zdGFsbC12aWV3LnN0b3JlLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLWluc3RhbGwtdmlldycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2luc3RhbGwtdmlldy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXSxcbiAgICBwcm92aWRlcnM6IFtJbnN0YWxsVmlld1N0b3JlXVxufSlcbmV4cG9ydCBjbGFzcyBJbnN0YWxsVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIHZtJDogT2JzZXJ2YWJsZTxJbnN0YWxsVmlld01vZGVsPiA9IG51bGw7XG4gICAgc2hvd1N0YXR1c0JhciA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBzdG9yZTogSW5zdGFsbFZpZXdTdG9yZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgICApIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgbGV0IG1vZGUgPSAnZWRpdCcgYXMgVmlld01vZGU7XG4gICAgICAgIGNvbnN0IGRhdGEgPSAodGhpcy5yb3V0ZS5zbmFwc2hvdCAmJiB0aGlzLnJvdXRlLnNuYXBzaG90LmRhdGEpIHx8IHt9O1xuXG4gICAgICAgIGlmIChkYXRhLm1vZGUpIHtcbiAgICAgICAgICAgIG1vZGUgPSBkYXRhLm1vZGU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0b3JlLmluaXQobW9kZSk7XG4gICAgICAgIHRoaXMudm0kID0gdGhpcy5zdG9yZS52bSQ7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RvcmUuY2xlYXIoKTtcbiAgICB9XG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48ZGl2ICpuZ0lmPVwiKHZtJCB8IGFzeW5jKSBhcyB2bVwiIGNsYXNzPVwiaW5zdGFsbC12aWV3XCI+XG5cbiAgICA8c2NybS1pbnN0YWxsLWhlYWRlcj48L3Njcm0taW5zdGFsbC1oZWFkZXI+XG5cbiAgICA8ZGl2IGNsYXNzPVwicmVjb3JkLXZpZXctaHItY29udGFpbmVyXCI+XG4gICAgICAgIDxociBjbGFzcz1cInJlY29yZC12aWV3LWhyXCI+XG4gICAgPC9kaXY+XG5cbiAgICA8c2NybS1pbnN0YWxsLWNvbnRhaW5lcj48L3Njcm0taW5zdGFsbC1jb250YWluZXI+XG48L2Rpdj5cbiJdfQ==