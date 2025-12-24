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
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@ng-bootstrap/ng-bootstrap";
import * as i3 from "../menu-item/menu-item.component";
import * as i4 from "../sub-menu-recently-viewed/sub-menu-recently-viewed.component";
import * as i5 from "../sub-menu-favorites/sub-menu-favorites.component";
import * as i6 from "../menu-item-link/menu-item-link.component";
function BaseGroupedMenuItemComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 3)(1, "a", 4);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.item.link.label, " ");
} }
function BaseGroupedMenuItemComponent_ul_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 5)(1, "li", 6);
    i0.ɵɵelement(2, "scrm-menu-item", 7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("item", ctx_r1.item);
} }
function BaseGroupedMenuItemComponent_ul_3_li_1_ul_2_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 16);
    i0.ɵɵelement(1, "scrm-menu-item-link", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const subitem_r8 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap("submenu-nav-link nav-link action-link");
    i0.ɵɵproperty("icon", subitem_r8.icon)("link", subitem_r8.link);
} }
function BaseGroupedMenuItemComponent_ul_3_li_1_ul_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-sub-menu-recently-viewed", 18)(2, "scrm-sub-menu-favorites", 18);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const sub_r4 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("module", sub_r4.module);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("module", sub_r4.module);
} }
function BaseGroupedMenuItemComponent_ul_3_li_1_ul_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 13);
    i0.ɵɵtemplate(1, BaseGroupedMenuItemComponent_ul_3_li_1_ul_2_li_1_Template, 2, 4, "li", 14);
    i0.ɵɵtemplate(2, BaseGroupedMenuItemComponent_ul_3_li_1_ul_2_ng_container_2_Template, 3, 2, "ng-container", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sub_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵclassProp("rounded-0", sub_r4.submenu && sub_r4.submenu.length === 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", sub_r4.submenu);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", sub_r4 && sub_r4.module);
} }
const _c0 = function (a3, a4) { return { "sub-nav-link": true, "nav-link": true, "action-link": true, "dropdown-item": a3, "dropdown-toggle": a4 }; };
function BaseGroupedMenuItemComponent_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 10);
    i0.ɵɵelement(1, "scrm-menu-item-link", 11);
    i0.ɵɵtemplate(2, BaseGroupedMenuItemComponent_ul_3_li_1_ul_2_Template, 3, 4, "ul", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sub_r4 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap(i0.ɵɵpureFunction2(4, _c0, sub_r4.submenu.length, sub_r4.submenu.length));
    i0.ɵɵproperty("link", sub_r4.link);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", sub_r4.submenu.length);
} }
function BaseGroupedMenuItemComponent_ul_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ul", 8);
    i0.ɵɵlistener("click", function BaseGroupedMenuItemComponent_ul_3_Template_ul_click_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r11.hideDropdown()); });
    i0.ɵɵtemplate(1, BaseGroupedMenuItemComponent_ul_3_li_1_Template, 3, 7, "li", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngbCollapse", ctx_r2.subNavCollapse);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2.item.submenu);
} }
class BaseGroupedMenuItemComponent {
    item;
    subNavCollapse;
    showDropdown = true;
    constructor() {
    }
    hideDropdown() {
        this.showDropdown = false;
        setTimeout(() => this.showDropdown = true, 0);
    }
    static ɵfac = function BaseGroupedMenuItemComponent_Factory(t) { return new (t || BaseGroupedMenuItemComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BaseGroupedMenuItemComponent, selectors: [["scrm-base-grouped-menu-item"]], inputs: { item: "item", subNavCollapse: "subNavCollapse" }, decls: 4, vars: 3, consts: [["data-target", ".navbar-collapse", "data-toggle", "collapse", 4, "ngIf"], ["class", "navbar-nav grouped", 4, "ngIf"], ["aria-labelledby", "navbarDropdownMenuLink", "class", "dropdown-menu main", 3, "ngbCollapse", "click", 4, "ngIf"], ["data-target", ".navbar-collapse", "data-toggle", "collapse"], ["data-toggle", "dropdown", 1, "top-nav-link", "nav-link-grouped", "dropdown-toggle", "active"], [1, "navbar-nav", "grouped"], [1, "top-nav", "nav-item", "dropdown", "main-grouped", "active"], [3, "item"], ["aria-labelledby", "navbarDropdownMenuLink", 1, "dropdown-menu", "main", 3, "ngbCollapse", "click"], ["class", "nav-item dropdown-submenu submenu", 4, "ngFor", "ngForOf"], [1, "nav-item", "dropdown-submenu", "submenu"], [3, "link"], ["class", "dropdown-menu submenu", 3, "rounded-0", 4, "ngIf"], [1, "dropdown-menu", "submenu"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "nav-item"], [3, "icon", "link"], [3, "module"]], template: function BaseGroupedMenuItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, BaseGroupedMenuItemComponent_span_1_Template, 3, 1, "span", 0);
            i0.ɵɵtemplate(2, BaseGroupedMenuItemComponent_ul_2_Template, 3, 1, "ul", 1);
            i0.ɵɵtemplate(3, BaseGroupedMenuItemComponent_ul_3_Template, 2, 2, "ul", 2);
            i0.ɵɵelementContainerEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.item.isGroupedMenu);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.item.isGroupedMenu);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.showDropdown);
        } }, dependencies: [i1.NgForOf, i1.NgIf, i2.NgbCollapse, i3.MenuItemComponent, i4.SubMenuRecentlyViewedComponent, i5.SubMenuFavoritesComponent, i6.MenuItemLinkComponent], encapsulation: 2 });
}
export { BaseGroupedMenuItemComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseGroupedMenuItemComponent, [{
        type: Component,
        args: [{ selector: 'scrm-base-grouped-menu-item', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container>\n\n    <span data-target=\".navbar-collapse\" data-toggle=\"collapse\" *ngIf=\"!item.isGroupedMenu\">\n        <a class=\"top-nav-link nav-link-grouped dropdown-toggle active\" data-toggle=\"dropdown\">\n            {{ item.link.label }}\n        </a>\n    </span>\n    <ul class=\"navbar-nav grouped\" *ngIf=\"item.isGroupedMenu\">\n\n        <li class=\"top-nav nav-item dropdown main-grouped active\">\n            <scrm-menu-item [item]=\"item\"></scrm-menu-item>\n        </li>\n    </ul>\n\n    <ul [ngbCollapse]=\"subNavCollapse\"\n        (click)=\"hideDropdown()\"\n        aria-labelledby=\"navbarDropdownMenuLink\"\n        *ngIf=\"showDropdown\"\n        class=\"dropdown-menu main\"\n    >\n        <li *ngFor=\"let sub of item.submenu\" class=\"nav-item dropdown-submenu submenu\">\n\n            <scrm-menu-item-link [class]=\"{\n                                    'sub-nav-link': true,\n                                    'nav-link': true,\n                                    'action-link': true,\n                                    'dropdown-item': sub.submenu.length,\n                                    'dropdown-toggle': sub.submenu.length\n                                  }\"\n                                 [link]=\"sub.link\"\n            >\n            </scrm-menu-item-link>\n\n            <ul *ngIf=\"sub.submenu.length\"\n                [class.rounded-0]=\"sub.submenu && sub.submenu.length === 1\"\n                class=\"dropdown-menu submenu\"\n            >\n\n                <li *ngFor=\"let subitem of sub.submenu\" class=\"nav-item\">\n\n                    <scrm-menu-item-link [class]=\"'submenu-nav-link nav-link action-link'\"\n                                         [icon]=\"subitem.icon\"\n                                         [link]=\"subitem.link\">\n                    </scrm-menu-item-link>\n                </li>\n                <ng-container *ngIf=\"sub && sub.module\">\n                    <scrm-sub-menu-recently-viewed [module]=\"sub.module\"></scrm-sub-menu-recently-viewed>\n                    <scrm-sub-menu-favorites [module]=\"sub.module\"></scrm-sub-menu-favorites>\n                </ng-container>\n            </ul>\n        </li>\n    </ul>\n</ng-container>\n" }]
    }], function () { return []; }, { item: [{
            type: Input
        }], subNavCollapse: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1ncm91cGVkLW1lbnUtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9uYXZiYXIvZ3JvdXBlZC1tZW51LWl0ZW0vYmFzZS1ncm91cGVkLW1lbnUtaXRlbS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9uYXZiYXIvZ3JvdXBlZC1tZW51LWl0ZW0vYmFzZS1ncm91cGVkLW1lbnUtaXRlbS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7OztJQ0czQywrQkFBd0YsV0FBQTtJQUVoRixZQUNKO0lBQUEsaUJBQUksRUFBQTs7O0lBREEsZUFDSjtJQURJLHVEQUNKOzs7SUFFSiw2QkFBMEQsWUFBQTtJQUdsRCxvQ0FBK0M7SUFDbkQsaUJBQUssRUFBQTs7O0lBRGUsZUFBYTtJQUFiLGtDQUFhOzs7SUE0QnpCLDhCQUF5RDtJQUVyRCwwQ0FHc0I7SUFDMUIsaUJBQUs7OztJQUpvQixlQUFpRDtJQUFqRCxzREFBaUQ7SUFDakQsc0NBQXFCLHlCQUFBOzs7SUFJOUMsNkJBQXdDO0lBQ3BDLG9EQUFxRixrQ0FBQTtJQUV6RiwwQkFBZTs7O0lBRm9CLGVBQXFCO0lBQXJCLHNDQUFxQjtJQUMzQixlQUFxQjtJQUFyQixzQ0FBcUI7OztJQWR0RCw4QkFHQztJQUVHLDJGQU1LO0lBQ0wsK0dBR2U7SUFDbkIsaUJBQUs7OztJQWZELDBFQUEyRDtJQUluQyxlQUFjO0lBQWQsd0NBQWM7SUFPdkIsZUFBdUI7SUFBdkIsOENBQXVCOzs7O0lBekI5Qyw4QkFBK0U7SUFFM0UsMENBU3NCO0lBRXRCLHNGQWdCSztJQUNULGlCQUFLOzs7SUE1Qm9CLGVBTUc7SUFOSCx1RkFNRztJQUNILGtDQUFpQjtJQUlqQyxlQUF3QjtJQUF4Qiw0Q0FBd0I7Ozs7SUFuQnJDLDZCQUtDO0lBSkcsc0tBQVMsZUFBQSxzQkFBYyxDQUFBLElBQUM7SUFLeEIsZ0ZBOEJLO0lBQ1QsaUJBQUs7OztJQXJDRCxtREFBOEI7SUFNVixlQUFlO0lBQWYsNkNBQWU7O0FEbEIzQyxNQUthLDRCQUE0QjtJQUM1QixJQUFJLENBQVc7SUFDZixjQUFjLENBQVU7SUFDakMsWUFBWSxHQUFZLElBQUksQ0FBQztJQUU3QjtJQUNBLENBQUM7SUFFRCxZQUFZO1FBQ1IsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ2pELENBQUM7c0ZBWFEsNEJBQTRCOzZEQUE1Qiw0QkFBNEI7WUNQekMsNkJBQWM7WUFFViwrRUFJTztZQUNQLDJFQUtLO1lBRUwsMkVBcUNLO1lBQ1QsMEJBQWU7O1lBbERrRCxlQUF5QjtZQUF6Qiw4Q0FBeUI7WUFLdEQsZUFBd0I7WUFBeEIsNkNBQXdCO1lBVW5ELGVBQWtCO1lBQWxCLHVDQUFrQjs7O1NEVmQsNEJBQTRCO3VGQUE1Qiw0QkFBNEI7Y0FMeEMsU0FBUzsyQkFDSSw2QkFBNkI7c0NBSzlCLElBQUk7a0JBQVosS0FBSztZQUNHLGNBQWM7a0JBQXRCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01lbnVJdGVtfSBmcm9tICdjb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tYmFzZS1ncm91cGVkLW1lbnUtaXRlbScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Jhc2UtZ3JvdXBlZC1tZW51LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW11cbn0pXG5leHBvcnQgY2xhc3MgQmFzZUdyb3VwZWRNZW51SXRlbUNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgaXRlbTogTWVudUl0ZW07XG4gICAgQElucHV0KCkgc3ViTmF2Q29sbGFwc2U6IGJvb2xlYW47XG4gICAgc2hvd0Ryb3Bkb3duOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIGhpZGVEcm9wZG93bigpIHtcbiAgICAgICAgdGhpcy5zaG93RHJvcGRvd24gPSBmYWxzZTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNob3dEcm9wZG93biA9IHRydWUsIDApXG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPG5nLWNvbnRhaW5lcj5cblxuICAgIDxzcGFuIGRhdGEtdGFyZ2V0PVwiLm5hdmJhci1jb2xsYXBzZVwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiAqbmdJZj1cIiFpdGVtLmlzR3JvdXBlZE1lbnVcIj5cbiAgICAgICAgPGEgY2xhc3M9XCJ0b3AtbmF2LWxpbmsgbmF2LWxpbmstZ3JvdXBlZCBkcm9wZG93bi10b2dnbGUgYWN0aXZlXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAge3sgaXRlbS5saW5rLmxhYmVsIH19XG4gICAgICAgIDwvYT5cbiAgICA8L3NwYW4+XG4gICAgPHVsIGNsYXNzPVwibmF2YmFyLW5hdiBncm91cGVkXCIgKm5nSWY9XCJpdGVtLmlzR3JvdXBlZE1lbnVcIj5cblxuICAgICAgICA8bGkgY2xhc3M9XCJ0b3AtbmF2IG5hdi1pdGVtIGRyb3Bkb3duIG1haW4tZ3JvdXBlZCBhY3RpdmVcIj5cbiAgICAgICAgICAgIDxzY3JtLW1lbnUtaXRlbSBbaXRlbV09XCJpdGVtXCI+PC9zY3JtLW1lbnUtaXRlbT5cbiAgICAgICAgPC9saT5cbiAgICA8L3VsPlxuXG4gICAgPHVsIFtuZ2JDb2xsYXBzZV09XCJzdWJOYXZDb2xsYXBzZVwiXG4gICAgICAgIChjbGljayk9XCJoaWRlRHJvcGRvd24oKVwiXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm5hdmJhckRyb3Bkb3duTWVudUxpbmtcIlxuICAgICAgICAqbmdJZj1cInNob3dEcm9wZG93blwiXG4gICAgICAgIGNsYXNzPVwiZHJvcGRvd24tbWVudSBtYWluXCJcbiAgICA+XG4gICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgc3ViIG9mIGl0ZW0uc3VibWVudVwiIGNsYXNzPVwibmF2LWl0ZW0gZHJvcGRvd24tc3VibWVudSBzdWJtZW51XCI+XG5cbiAgICAgICAgICAgIDxzY3JtLW1lbnUtaXRlbS1saW5rIFtjbGFzc109XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3ViLW5hdi1saW5rJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICduYXYtbGluayc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWN0aW9uLWxpbmsnOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Ryb3Bkb3duLWl0ZW0nOiBzdWIuc3VibWVudS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZHJvcGRvd24tdG9nZ2xlJzogc3ViLnN1Ym1lbnUubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGlua109XCJzdWIubGlua1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8L3Njcm0tbWVudS1pdGVtLWxpbms+XG5cbiAgICAgICAgICAgIDx1bCAqbmdJZj1cInN1Yi5zdWJtZW51Lmxlbmd0aFwiXG4gICAgICAgICAgICAgICAgW2NsYXNzLnJvdW5kZWQtMF09XCJzdWIuc3VibWVudSAmJiBzdWIuc3VibWVudS5sZW5ndGggPT09IDFcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZHJvcGRvd24tbWVudSBzdWJtZW51XCJcbiAgICAgICAgICAgID5cblxuICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgc3ViaXRlbSBvZiBzdWIuc3VibWVudVwiIGNsYXNzPVwibmF2LWl0ZW1cIj5cblxuICAgICAgICAgICAgICAgICAgICA8c2NybS1tZW51LWl0ZW0tbGluayBbY2xhc3NdPVwiJ3N1Ym1lbnUtbmF2LWxpbmsgbmF2LWxpbmsgYWN0aW9uLWxpbmsnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ljb25dPVwic3ViaXRlbS5pY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xpbmtdPVwic3ViaXRlbS5saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvc2NybS1tZW51LWl0ZW0tbGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzdWIgJiYgc3ViLm1vZHVsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c2NybS1zdWItbWVudS1yZWNlbnRseS12aWV3ZWQgW21vZHVsZV09XCJzdWIubW9kdWxlXCI+PC9zY3JtLXN1Yi1tZW51LXJlY2VudGx5LXZpZXdlZD5cbiAgICAgICAgICAgICAgICAgICAgPHNjcm0tc3ViLW1lbnUtZmF2b3JpdGVzIFttb2R1bGVdPVwic3ViLm1vZHVsZVwiPjwvc2NybS1zdWItbWVudS1mYXZvcml0ZXM+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2xpPlxuICAgIDwvdWw+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==