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
import * as i2 from "../sub-menu-recently-viewed/sub-menu-recently-viewed.component";
import * as i3 from "../sub-menu-favorites/sub-menu-favorites.component";
import * as i4 from "../menu-item-link/menu-item-link.component";
function BaseMenuItemComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "scrm-menu-item-link", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sub_r3 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap("sub-nav-link nav-link action-link");
    i0.ɵɵproperty("icon", sub_r3.icon)("link", sub_r3.link);
} }
function BaseMenuItemComponent_div_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-sub-menu-recently-viewed", 8)(2, "scrm-sub-menu-favorites", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("module", ctx_r2.item.module);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("module", ctx_r2.item.module);
} }
function BaseMenuItemComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵlistener("click", function BaseMenuItemComponent_div_3_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.hideDropdown()); });
    i0.ɵɵtemplate(1, BaseMenuItemComponent_div_3_div_1_Template, 2, 4, "div", 4);
    i0.ɵɵtemplate(2, BaseMenuItemComponent_div_3_ng_container_2_Template, 3, 2, "ng-container", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.item.submenu);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.item && ctx_r0.item.module);
} }
const _c0 = function (a2) { return { "top-nav-link": true, "nav-link-nongrouped": true, "dropdown-toggle": a2 }; };
class BaseMenuItemComponent {
    item;
    showDropdown = true;
    constructor() {
    }
    hideDropdown() {
        this.showDropdown = false;
        setTimeout(() => this.showDropdown = true, 0);
    }
    static ɵfac = function BaseMenuItemComponent_Factory(t) { return new (t || BaseMenuItemComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BaseMenuItemComponent, selectors: [["scrm-base-menu-item"]], inputs: { item: "item" }, decls: 4, vars: 6, consts: [["data-target", ".navbar-collapse", "data-toggle", "collapse"], [3, "link"], ["aria-labelledby", "navbarDropdownMenuLink", "class", "dropdown-menu submenu", 3, "click", 4, "ngIf"], ["aria-labelledby", "navbarDropdownMenuLink", 1, "dropdown-menu", "submenu", 3, "click"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "nav-item"], [3, "icon", "link"], [3, "module"]], template: function BaseMenuItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "span", 0);
            i0.ɵɵelement(2, "scrm-menu-item-link", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, BaseMenuItemComponent_div_3_Template, 3, 2, "div", 2);
            i0.ɵɵelementContainerEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵclassMap(i0.ɵɵpureFunction1(4, _c0, ctx.item.submenu.length));
            i0.ɵɵproperty("link", ctx.item.link);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.item.submenu.length && ctx.showDropdown);
        } }, dependencies: [i1.NgForOf, i1.NgIf, i2.SubMenuRecentlyViewedComponent, i3.SubMenuFavoritesComponent, i4.MenuItemLinkComponent], encapsulation: 2 });
}
export { BaseMenuItemComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseMenuItemComponent, [{
        type: Component,
        args: [{ selector: 'scrm-base-menu-item', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container>\n    <span data-target=\".navbar-collapse\" data-toggle=\"collapse\">\n\n        <scrm-menu-item-link\n            [class]=\"{\n                    'top-nav-link': true,\n                    'nav-link-nongrouped': true,\n                    'dropdown-toggle': item.submenu.length\n                }\"\n            [link]=\"item.link\">\n        </scrm-menu-item-link>\n\n    </span>\n    <div (click)=\"hideDropdown()\"\n         aria-labelledby=\"navbarDropdownMenuLink\"\n         *ngIf=\"item.submenu.length && showDropdown\"\n         class=\"dropdown-menu submenu\">\n\n        <div *ngFor=\"let sub of item.submenu\" class=\"nav-item\">\n\n            <scrm-menu-item-link\n                [class]=\"'sub-nav-link nav-link action-link'\"\n                [icon]=\"sub.icon\"\n                [link]=\"sub.link\">\n            </scrm-menu-item-link>\n\n        </div>\n\n        <ng-container *ngIf=\"item && item.module\">\n            <scrm-sub-menu-recently-viewed [module]=\"item.module\"></scrm-sub-menu-recently-viewed>\n            <scrm-sub-menu-favorites [module]=\"item.module\"></scrm-sub-menu-favorites>\n        </ng-container>\n    </div>\n</ng-container>\n" }]
    }], function () { return []; }, { item: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1tZW51LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvbmF2YmFyL21lbnUtaXRlbS9iYXNlLW1lbnUtaXRlbS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9uYXZiYXIvbWVudS1pdGVtL2Jhc2UtbWVudS1pdGVtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztJQ21CdkMsOEJBQXVEO0lBRW5ELHlDQUlzQjtJQUUxQixpQkFBTTs7O0lBTEUsZUFBNkM7SUFBN0Msa0RBQTZDO0lBQzdDLGtDQUFpQixxQkFBQTs7O0lBTXpCLDZCQUEwQztJQUN0QyxtREFBc0YsaUNBQUE7SUFFMUYsMEJBQWU7OztJQUZvQixlQUFzQjtJQUF0QiwyQ0FBc0I7SUFDNUIsZUFBc0I7SUFBdEIsMkNBQXNCOzs7O0lBakJ2RCw4QkFHbUM7SUFIOUIsK0pBQVMsZUFBQSxxQkFBYyxDQUFBLElBQUM7SUFLekIsNEVBUU07SUFFTiw4RkFHZTtJQUNuQixpQkFBTTs7O0lBZG1CLGVBQWU7SUFBZiw2Q0FBZTtJQVVyQixlQUF5QjtJQUF6Qix3REFBeUI7OztBRDFCaEQsTUFLYSxxQkFBcUI7SUFDckIsSUFBSSxDQUFXO0lBQ3hCLFlBQVksR0FBWSxJQUFJLENBQUM7SUFFN0I7SUFDQSxDQUFDO0lBRUQsWUFBWTtRQUNSLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUNqRCxDQUFDOytFQVZRLHFCQUFxQjs2REFBckIscUJBQXFCO1lDUGxDLDZCQUFjO1lBQ1YsK0JBQTREO1lBRXhELHlDQU9zQjtZQUUxQixpQkFBTztZQUNQLHNFQW1CTTtZQUNWLDBCQUFlOztZQTdCSCxlQUlNO1lBSk4sa0VBSU07WUFDTixvQ0FBa0I7WUFNcEIsZUFBeUM7WUFBekMsa0VBQXlDOzs7U0RSdEMscUJBQXFCO3VGQUFyQixxQkFBcUI7Y0FMakMsU0FBUzsyQkFDSSxxQkFBcUI7c0NBS3RCLElBQUk7a0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWVudUl0ZW19IGZyb20gJ2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1iYXNlLW1lbnUtaXRlbScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Jhc2UtbWVudS1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEJhc2VNZW51SXRlbUNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgaXRlbTogTWVudUl0ZW07XG4gICAgc2hvd0Ryb3Bkb3duOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIGhpZGVEcm9wZG93bigpIHtcbiAgICAgICAgdGhpcy5zaG93RHJvcGRvd24gPSBmYWxzZTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNob3dEcm9wZG93biA9IHRydWUsIDApXG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPG5nLWNvbnRhaW5lcj5cbiAgICA8c3BhbiBkYXRhLXRhcmdldD1cIi5uYXZiYXItY29sbGFwc2VcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCI+XG5cbiAgICAgICAgPHNjcm0tbWVudS1pdGVtLWxpbmtcbiAgICAgICAgICAgIFtjbGFzc109XCJ7XG4gICAgICAgICAgICAgICAgICAgICd0b3AtbmF2LWxpbmsnOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAnbmF2LWxpbmstbm9uZ3JvdXBlZCc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICdkcm9wZG93bi10b2dnbGUnOiBpdGVtLnN1Ym1lbnUubGVuZ3RoXG4gICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICBbbGlua109XCJpdGVtLmxpbmtcIj5cbiAgICAgICAgPC9zY3JtLW1lbnUtaXRlbS1saW5rPlxuXG4gICAgPC9zcGFuPlxuICAgIDxkaXYgKGNsaWNrKT1cImhpZGVEcm9wZG93bigpXCJcbiAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm5hdmJhckRyb3Bkb3duTWVudUxpbmtcIlxuICAgICAgICAgKm5nSWY9XCJpdGVtLnN1Ym1lbnUubGVuZ3RoICYmIHNob3dEcm9wZG93blwiXG4gICAgICAgICBjbGFzcz1cImRyb3Bkb3duLW1lbnUgc3VibWVudVwiPlxuXG4gICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IHN1YiBvZiBpdGVtLnN1Ym1lbnVcIiBjbGFzcz1cIm5hdi1pdGVtXCI+XG5cbiAgICAgICAgICAgIDxzY3JtLW1lbnUtaXRlbS1saW5rXG4gICAgICAgICAgICAgICAgW2NsYXNzXT1cIidzdWItbmF2LWxpbmsgbmF2LWxpbmsgYWN0aW9uLWxpbmsnXCJcbiAgICAgICAgICAgICAgICBbaWNvbl09XCJzdWIuaWNvblwiXG4gICAgICAgICAgICAgICAgW2xpbmtdPVwic3ViLmxpbmtcIj5cbiAgICAgICAgICAgIDwvc2NybS1tZW51LWl0ZW0tbGluaz5cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbSAmJiBpdGVtLm1vZHVsZVwiPlxuICAgICAgICAgICAgPHNjcm0tc3ViLW1lbnUtcmVjZW50bHktdmlld2VkIFttb2R1bGVdPVwiaXRlbS5tb2R1bGVcIj48L3Njcm0tc3ViLW1lbnUtcmVjZW50bHktdmlld2VkPlxuICAgICAgICAgICAgPHNjcm0tc3ViLW1lbnUtZmF2b3JpdGVzIFttb2R1bGVdPVwiaXRlbS5tb2R1bGVcIj48L3Njcm0tc3ViLW1lbnUtZmF2b3JpdGVzPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbjwvbmctY29udGFpbmVyPlxuIl19