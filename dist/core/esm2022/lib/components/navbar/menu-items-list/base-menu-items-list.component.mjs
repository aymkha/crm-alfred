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
import * as i2 from "../../label/label.component";
import * as i3 from "../menu-item-link/menu-item-link.component";
function BaseMenuItemsListComponent_ul_0_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelement(1, "scrm-menu-item-link", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap("nav-link action-link");
    i0.ɵɵproperty("link", item_r3.link);
} }
function BaseMenuItemsListComponent_ul_0_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵlistener("click", function BaseMenuItemsListComponent_ul_0_div_4_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r4.hideDropdown()); });
    i0.ɵɵtemplate(1, BaseMenuItemsListComponent_ul_0_div_4_div_1_Template, 2, 3, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.items);
} }
function BaseMenuItemsListComponent_ul_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 1)(1, "li", 2)(2, "a", 3);
    i0.ɵɵelement(3, "scrm-label", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, BaseMenuItemsListComponent_ul_0_div_4_Template, 2, 1, "div", 5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("labelKey", ctx_r0.labelKey);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.showDropdown);
} }
class BaseMenuItemsListComponent {
    items;
    labelKey;
    showDropdown = true;
    constructor() {
    }
    hideDropdown() {
        this.showDropdown = false;
        setTimeout(() => this.showDropdown = true, 0);
    }
    static ɵfac = function BaseMenuItemsListComponent_Factory(t) { return new (t || BaseMenuItemsListComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BaseMenuItemsListComponent, selectors: [["scrm-base-menu-items-list"]], inputs: { items: "items", labelKey: "labelKey" }, decls: 1, vars: 1, consts: [["class", "navbar-nav nav-collapsed-items", 4, "ngIf"], [1, "navbar-nav", "nav-collapsed-items"], [1, "top-nav", "nav-item", "dropdown", "non-grouped"], [1, "nav-link-nongrouped", "dropdown-toggle"], [3, "labelKey"], ["aria-labelledby", "navbarDropdownMenuLink", "class", "dropdown-menu more-menu submenu", 3, "click", 4, "ngIf"], ["aria-labelledby", "navbarDropdownMenuLink", 1, "dropdown-menu", "more-menu", "submenu", 3, "click"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "nav-item"], [3, "link"]], template: function BaseMenuItemsListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BaseMenuItemsListComponent_ul_0_Template, 5, 2, "ul", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.items && ctx.items.length > 0);
        } }, dependencies: [i1.NgForOf, i1.NgIf, i2.LabelComponent, i3.MenuItemLinkComponent], encapsulation: 2 });
}
export { BaseMenuItemsListComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseMenuItemsListComponent, [{
        type: Component,
        args: [{ selector: 'scrm-base-menu-items-list', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ul *ngIf=\"items && items.length > 0\" class=\"navbar-nav nav-collapsed-items\">\n\n    <li class=\"top-nav nav-item dropdown non-grouped\">\n\n        <a class=\"nav-link-nongrouped dropdown-toggle\">\n            <scrm-label [labelKey]=\"labelKey\"></scrm-label>\n        </a>\n\n        <div aria-labelledby=\"navbarDropdownMenuLink\"\n             (click)=\"hideDropdown()\"\n             class=\"dropdown-menu more-menu submenu\"\n             *ngIf=\"showDropdown\"\n        >\n            <div *ngFor=\"let item of items\" class=\"nav-item\">\n                <scrm-menu-item-link [class]=\"'nav-link action-link'\" [link]=\"item.link\">\n                </scrm-menu-item-link>\n            </div>\n        </div>\n    </li>\n</ul>\n" }]
    }], function () { return []; }, { items: [{
            type: Input
        }], labelKey: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1tZW51LWl0ZW1zLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvbmF2YmFyL21lbnUtaXRlbXMtbGlzdC9iYXNlLW1lbnUtaXRlbXMtbGlzdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9uYXZiYXIvbWVudS1pdGVtcy1saXN0L2Jhc2UtbWVudS1pdGVtcy1saXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lDY25DLDhCQUFpRDtJQUM3Qyx5Q0FDc0I7SUFDMUIsaUJBQU07OztJQUZtQixlQUFnQztJQUFoQyxxQ0FBZ0M7SUFBQyxtQ0FBa0I7Ozs7SUFOaEYsOEJBSUM7SUFISSwwS0FBUyxlQUFBLHFCQUFjLENBQUEsSUFBQztJQUl6QixzRkFHTTtJQUNWLGlCQUFNOzs7SUFKb0IsZUFBUTtJQUFSLHNDQUFROzs7SUFiMUMsNkJBQTZFLFlBQUEsV0FBQTtJQUtqRSxnQ0FBK0M7SUFDbkQsaUJBQUk7SUFFSixnRkFTTTtJQUNWLGlCQUFLLEVBQUE7OztJQWJlLGVBQXFCO0lBQXJCLDBDQUFxQjtJQU0vQixlQUFrQjtJQUFsQiwwQ0FBa0I7O0FEVGhDLE1BS2EsMEJBQTBCO0lBQzFCLEtBQUssQ0FBYTtJQUNsQixRQUFRLENBQVM7SUFDMUIsWUFBWSxHQUFZLElBQUksQ0FBQztJQUU3QjtJQUNBLENBQUM7SUFFRCxZQUFZO1FBQ1IsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ2pELENBQUM7b0ZBWFEsMEJBQTBCOzZEQUExQiwwQkFBMEI7WUNQdkMseUVBbUJLOztZQW5CQSx3REFBK0I7OztTRE92QiwwQkFBMEI7dUZBQTFCLDBCQUEwQjtjQUx0QyxTQUFTOzJCQUNJLDJCQUEyQjtzQ0FLNUIsS0FBSztrQkFBYixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWVudUl0ZW19IGZyb20gJ2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1iYXNlLW1lbnUtaXRlbXMtbGlzdCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Jhc2UtbWVudS1pdGVtcy1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEJhc2VNZW51SXRlbXNMaXN0Q29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBpdGVtczogTWVudUl0ZW1bXTtcbiAgICBASW5wdXQoKSBsYWJlbEtleTogc3RyaW5nO1xuICAgIHNob3dEcm9wZG93bjogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBoaWRlRHJvcGRvd24oKSB7XG4gICAgICAgIHRoaXMuc2hvd0Ryb3Bkb3duID0gZmFsc2U7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zaG93RHJvcGRvd24gPSB0cnVlLCAwKVxuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjx1bCAqbmdJZj1cIml0ZW1zICYmIGl0ZW1zLmxlbmd0aCA+IDBcIiBjbGFzcz1cIm5hdmJhci1uYXYgbmF2LWNvbGxhcHNlZC1pdGVtc1wiPlxuXG4gICAgPGxpIGNsYXNzPVwidG9wLW5hdiBuYXYtaXRlbSBkcm9wZG93biBub24tZ3JvdXBlZFwiPlxuXG4gICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmstbm9uZ3JvdXBlZCBkcm9wZG93bi10b2dnbGVcIj5cbiAgICAgICAgICAgIDxzY3JtLWxhYmVsIFtsYWJlbEtleV09XCJsYWJlbEtleVwiPjwvc2NybS1sYWJlbD5cbiAgICAgICAgPC9hPlxuXG4gICAgICAgIDxkaXYgYXJpYS1sYWJlbGxlZGJ5PVwibmF2YmFyRHJvcGRvd25NZW51TGlua1wiXG4gICAgICAgICAgICAgKGNsaWNrKT1cImhpZGVEcm9wZG93bigpXCJcbiAgICAgICAgICAgICBjbGFzcz1cImRyb3Bkb3duLW1lbnUgbW9yZS1tZW51IHN1Ym1lbnVcIlxuICAgICAgICAgICAgICpuZ0lmPVwic2hvd0Ryb3Bkb3duXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1wiIGNsYXNzPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8c2NybS1tZW51LWl0ZW0tbGluayBbY2xhc3NdPVwiJ25hdi1saW5rIGFjdGlvbi1saW5rJ1wiIFtsaW5rXT1cIml0ZW0ubGlua1wiPlxuICAgICAgICAgICAgICAgIDwvc2NybS1tZW51LWl0ZW0tbGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2xpPlxuPC91bD5cbiJdfQ==