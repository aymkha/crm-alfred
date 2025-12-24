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
import { take } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/process/processes/async-action/async-action";
import * as i2 from "../../../store/app-state/app-state.store";
import * as i3 from "@angular/common";
import * as i4 from "@angular/router";
import * as i5 from "../../image/image.component";
function BaseMenuItemLinkComponent_ng_container_0_a_1_scrm_image_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-image", 6);
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate("image", ctx_r5.icon);
} }
function BaseMenuItemLinkComponent_ng_container_0_a_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 4);
    i0.ɵɵtemplate(1, BaseMenuItemLinkComponent_ng_container_0_a_1_scrm_image_1_Template, 1, 1, "scrm-image", 5);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r2.class)("queryParams", ctx_r2.link.params)("routerLink", ctx_r2.link.route);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.link.label, " ");
} }
function BaseMenuItemLinkComponent_ng_container_0_a_2_scrm_image_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-image", 6);
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate("image", ctx_r6.icon);
} }
function BaseMenuItemLinkComponent_ng_container_0_a_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 7);
    i0.ɵɵtemplate(1, BaseMenuItemLinkComponent_ng_container_0_a_2_scrm_image_1_Template, 1, 1, "scrm-image", 5);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("href", ctx_r3.link.url, i0.ɵɵsanitizeUrl)("ngClass", ctx_r3.class);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.link.label, " ");
} }
function BaseMenuItemLinkComponent_ng_container_0_a_3_scrm_image_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-image", 6);
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate("image", ctx_r7.icon);
} }
function BaseMenuItemLinkComponent_ng_container_0_a_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 8);
    i0.ɵɵtemplate(1, BaseMenuItemLinkComponent_ng_container_0_a_3_scrm_image_1_Template, 1, 1, "scrm-image", 5);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r4.class);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r4.link.label, " ");
} }
function BaseMenuItemLinkComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BaseMenuItemLinkComponent_ng_container_0_a_1_Template, 3, 5, "a", 1);
    i0.ɵɵtemplate(2, BaseMenuItemLinkComponent_ng_container_0_a_2_Template, 3, 4, "a", 2);
    i0.ɵɵtemplate(3, BaseMenuItemLinkComponent_ng_container_0_a_3_Template, 3, 3, "a", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.link.route);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.link.route && ctx_r0.link.url);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.link.route && !ctx_r0.link.url);
} }
function BaseMenuItemLinkComponent_ng_container_1_scrm_image_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-image", 6);
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("image", ctx_r8.icon);
} }
function BaseMenuItemLinkComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 9);
    i0.ɵɵlistener("click", function BaseMenuItemLinkComponent_ng_container_1_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r9.handleProcess(ctx_r9.link.process)); });
    i0.ɵɵtemplate(2, BaseMenuItemLinkComponent_ng_container_1_scrm_image_2_Template, 1, 1, "scrm-image", 5);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r1.class);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.link.label, " ");
} }
class BaseMenuItemLinkComponent {
    asyncActionService;
    appState;
    link;
    icon;
    class;
    constructor(asyncActionService, appState) {
        this.asyncActionService = asyncActionService;
        this.appState = appState;
    }
    handleProcess(process) {
        if (!process) {
            return;
        }
        const processType = process;
        const options = {
            action: processType,
            module: this.appState.getModule(),
        };
        this.asyncActionService.run(processType, options).pipe(take(1)).subscribe();
    }
    static ɵfac = function BaseMenuItemLinkComponent_Factory(t) { return new (t || BaseMenuItemLinkComponent)(i0.ɵɵdirectiveInject(i1.AsyncActionService), i0.ɵɵdirectiveInject(i2.AppStateStore)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BaseMenuItemLinkComponent, selectors: [["scrm-base-menu-item-link"]], inputs: { link: "link", icon: "icon", class: "class" }, decls: 2, vars: 2, consts: [[4, "ngIf"], [3, "ngClass", "queryParams", "routerLink", 4, "ngIf"], [3, "href", "ngClass", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], [3, "ngClass", "queryParams", "routerLink"], [3, "image", 4, "ngIf"], [3, "image"], [3, "href", "ngClass"], [3, "ngClass"], [3, "ngClass", "click"]], template: function BaseMenuItemLinkComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BaseMenuItemLinkComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
            i0.ɵɵtemplate(1, BaseMenuItemLinkComponent_ng_container_1_Template, 4, 3, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.link.process);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.link.process);
        } }, dependencies: [i3.NgClass, i3.NgIf, i4.RouterLink, i5.ImageComponent], encapsulation: 2 });
}
export { BaseMenuItemLinkComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseMenuItemLinkComponent, [{
        type: Component,
        args: [{ selector: 'scrm-base-menu-item-link', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"!link.process\">\n    <a *ngIf=\"link.route\"\n       [ngClass]=\"class\"\n       [queryParams]=\"link.params\"\n       [routerLink]=\"link.route\"\n    >\n        <scrm-image *ngIf=\"icon\" image=\"{{ icon }}\"></scrm-image>\n        {{ link.label }}\n    </a>\n    <a *ngIf=\"!link.route && link.url\"\n       [href]=\"link.url\"\n       [ngClass]=\"class\"\n    >\n        <scrm-image *ngIf=\"icon\" image=\"{{ icon }}\"></scrm-image>\n        {{ link.label }}\n    </a>\n    <a *ngIf=\"!link.route && !link.url\"\n       [ngClass]=\"class\"\n    >\n        <scrm-image *ngIf=\"icon\" image=\"{{ icon }}\"></scrm-image>\n        {{ link.label }}\n    </a>\n</ng-container>\n<ng-container *ngIf=\"link.process\">\n    <a [ngClass]=\"class\" (click)=\"handleProcess(link.process)\">\n        <scrm-image *ngIf=\"icon\" image=\"{{ icon }}\"></scrm-image>\n        {{ link.label }}\n    </a>\n</ng-container>\n\n\n" }]
    }], function () { return [{ type: i1.AsyncActionService }, { type: i2.AppStateStore }]; }, { link: [{
            type: Input
        }], icon: [{
            type: Input
        }], class: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1tZW51LWl0ZW0tbGluay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9uYXZiYXIvbWVudS1pdGVtLWxpbmsvYmFzZS1tZW51LWl0ZW0tbGluay5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9uYXZiYXIvbWVudS1pdGVtLWxpbmsvYmFzZS1tZW51LWl0ZW0tbGluay5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFL0MsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7OztJQ0s1QixnQ0FBeUQ7OztJQUFoQyw4Q0FBa0I7OztJQUwvQyw0QkFJQztJQUNHLDJHQUF5RDtJQUN6RCxZQUNKO0lBQUEsaUJBQUk7OztJQU5ELHNDQUFpQixtQ0FBQSxpQ0FBQTtJQUlILGVBQVU7SUFBVixrQ0FBVTtJQUN2QixlQUNKO0lBREksa0RBQ0o7OztJQUtJLGdDQUF5RDs7O0lBQWhDLDhDQUFrQjs7O0lBSi9DLDRCQUdDO0lBQ0csMkdBQXlEO0lBQ3pELFlBQ0o7SUFBQSxpQkFBSTs7O0lBTEQsd0RBQWlCLHlCQUFBO0lBR0gsZUFBVTtJQUFWLGtDQUFVO0lBQ3ZCLGVBQ0o7SUFESSxrREFDSjs7O0lBSUksZ0NBQXlEOzs7SUFBaEMsOENBQWtCOzs7SUFIL0MsNEJBRUM7SUFDRywyR0FBeUQ7SUFDekQsWUFDSjtJQUFBLGlCQUFJOzs7SUFKRCxzQ0FBaUI7SUFFSCxlQUFVO0lBQVYsa0NBQVU7SUFDdkIsZUFDSjtJQURJLGtEQUNKOzs7SUFyQkosNkJBQW9DO0lBQ2hDLHFGQU9JO0lBQ0oscUZBTUk7SUFDSixxRkFLSTtJQUNSLDBCQUFlOzs7SUFyQlAsZUFBZ0I7SUFBaEIsd0NBQWdCO0lBUWhCLGVBQTZCO0lBQTdCLDREQUE2QjtJQU83QixlQUE4QjtJQUE5Qiw2REFBOEI7OztJQVM5QixnQ0FBeUQ7OztJQUFoQyw4Q0FBa0I7Ozs7SUFGbkQsNkJBQW1DO0lBQy9CLDRCQUEyRDtJQUF0QywyS0FBUyxlQUFBLHlDQUEyQixDQUFBLElBQUM7SUFDdEQsdUdBQXlEO0lBQ3pELFlBQ0o7SUFBQSxpQkFBSTtJQUNSLDBCQUFlOzs7SUFKUixlQUFpQjtJQUFqQixzQ0FBaUI7SUFDSCxlQUFVO0lBQVYsa0NBQVU7SUFDdkIsZUFDSjtJQURJLGtEQUNKOztBRHRCSixNQUthLHlCQUF5QjtJQU1wQjtJQUNBO0lBTkwsSUFBSSxDQUFlO0lBQ25CLElBQUksQ0FBUztJQUNiLEtBQUssQ0FBUztJQUV2QixZQUNjLGtCQUFzQyxFQUN0QyxRQUF1QjtRQUR2Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLGFBQVEsR0FBUixRQUFRLENBQWU7SUFDbEMsQ0FBQztJQUVILGFBQWEsQ0FBQyxPQUFlO1FBRXpCLElBQUcsQ0FBQyxPQUFPLEVBQUU7WUFDVCxPQUFPO1NBQ1Y7UUFFRCxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUM7UUFFN0IsTUFBTSxPQUFPLEdBQUc7WUFDWixNQUFNLEVBQUUsV0FBVztZQUNuQixNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7U0FDaEIsQ0FBQztRQUVyQixJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDakYsQ0FBQzttRkF4QlEseUJBQXlCOzZEQUF6Qix5QkFBeUI7WUNWdEMsNEZBc0JlO1lBQ2YsNEZBS2U7O1lBNUJBLHdDQUFtQjtZQXVCbkIsZUFBa0I7WUFBbEIsdUNBQWtCOzs7U0RicEIseUJBQXlCO3VGQUF6Qix5QkFBeUI7Y0FMckMsU0FBUzsyQkFDSSwwQkFBMEI7aUdBSzNCLElBQUk7a0JBQVosS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWVudUl0ZW1MaW5rfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHt0YWtlfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0FzeW5jQWN0aW9uSW5wdXQsIEFzeW5jQWN0aW9uU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvcHJvY2Vzcy9wcm9jZXNzZXMvYXN5bmMtYWN0aW9uL2FzeW5jLWFjdGlvbic7XG5pbXBvcnQge0FwcFN0YXRlU3RvcmV9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2FwcC1zdGF0ZS9hcHAtc3RhdGUuc3RvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tYmFzZS1tZW51LWl0ZW0tbGluaycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Jhc2UtbWVudS1pdGVtLWxpbmsuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW11cbn0pXG5leHBvcnQgY2xhc3MgQmFzZU1lbnVJdGVtTGlua0NvbXBvbmVudCB7XG4gICAgQElucHV0KCkgbGluazogTWVudUl0ZW1MaW5rO1xuICAgIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgICBASW5wdXQoKSBjbGFzczogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBhc3luY0FjdGlvblNlcnZpY2U6IEFzeW5jQWN0aW9uU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGFwcFN0YXRlOiBBcHBTdGF0ZVN0b3JlXG4gICAgKSB7fVxuXG4gICAgIGhhbmRsZVByb2Nlc3MocHJvY2Vzczogc3RyaW5nKSB7XG5cbiAgICAgICAgIGlmKCFwcm9jZXNzKSB7XG4gICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgfVxuXG4gICAgICAgICBjb25zdCBwcm9jZXNzVHlwZSA9IHByb2Nlc3M7XG5cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGFjdGlvbjogcHJvY2Vzc1R5cGUsXG4gICAgICAgICAgICBtb2R1bGU6IHRoaXMuYXBwU3RhdGUuZ2V0TW9kdWxlKCksXG4gICAgICAgIH0gYXMgQXN5bmNBY3Rpb25JbnB1dDtcblxuICAgICAgICAgdGhpcy5hc3luY0FjdGlvblNlcnZpY2UucnVuKHByb2Nlc3NUeXBlLCBvcHRpb25zKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgpO1xuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxuZy1jb250YWluZXIgKm5nSWY9XCIhbGluay5wcm9jZXNzXCI+XG4gICAgPGEgKm5nSWY9XCJsaW5rLnJvdXRlXCJcbiAgICAgICBbbmdDbGFzc109XCJjbGFzc1wiXG4gICAgICAgW3F1ZXJ5UGFyYW1zXT1cImxpbmsucGFyYW1zXCJcbiAgICAgICBbcm91dGVyTGlua109XCJsaW5rLnJvdXRlXCJcbiAgICA+XG4gICAgICAgIDxzY3JtLWltYWdlICpuZ0lmPVwiaWNvblwiIGltYWdlPVwie3sgaWNvbiB9fVwiPjwvc2NybS1pbWFnZT5cbiAgICAgICAge3sgbGluay5sYWJlbCB9fVxuICAgIDwvYT5cbiAgICA8YSAqbmdJZj1cIiFsaW5rLnJvdXRlICYmIGxpbmsudXJsXCJcbiAgICAgICBbaHJlZl09XCJsaW5rLnVybFwiXG4gICAgICAgW25nQ2xhc3NdPVwiY2xhc3NcIlxuICAgID5cbiAgICAgICAgPHNjcm0taW1hZ2UgKm5nSWY9XCJpY29uXCIgaW1hZ2U9XCJ7eyBpY29uIH19XCI+PC9zY3JtLWltYWdlPlxuICAgICAgICB7eyBsaW5rLmxhYmVsIH19XG4gICAgPC9hPlxuICAgIDxhICpuZ0lmPVwiIWxpbmsucm91dGUgJiYgIWxpbmsudXJsXCJcbiAgICAgICBbbmdDbGFzc109XCJjbGFzc1wiXG4gICAgPlxuICAgICAgICA8c2NybS1pbWFnZSAqbmdJZj1cImljb25cIiBpbWFnZT1cInt7IGljb24gfX1cIj48L3Njcm0taW1hZ2U+XG4gICAgICAgIHt7IGxpbmsubGFiZWwgfX1cbiAgICA8L2E+XG48L25nLWNvbnRhaW5lcj5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJsaW5rLnByb2Nlc3NcIj5cbiAgICA8YSBbbmdDbGFzc109XCJjbGFzc1wiIChjbGljayk9XCJoYW5kbGVQcm9jZXNzKGxpbmsucHJvY2VzcylcIj5cbiAgICAgICAgPHNjcm0taW1hZ2UgKm5nSWY9XCJpY29uXCIgaW1hZ2U9XCJ7eyBpY29uIH19XCI+PC9zY3JtLWltYWdlPlxuICAgICAgICB7eyBsaW5rLmxhYmVsIH19XG4gICAgPC9hPlxuPC9uZy1jb250YWluZXI+XG5cblxuIl19