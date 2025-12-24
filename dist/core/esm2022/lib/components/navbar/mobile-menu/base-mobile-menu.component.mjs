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
import * as i2 from "../../image/image.component";
import * as i3 from "../../label/label.component";
import * as i4 from "../menu-recently-viewed/menu-recently-viewed.component";
import * as i5 from "../menu-favorites/menu-favorites.component";
import * as i6 from "../mobile-grouped-menu/mobile-grouped-menu.component";
import * as i7 from "../mobile-module-menu/mobile-module-menu.component";
function BaseMobileMenuComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li", 5);
    i0.ɵɵlistener("click", function BaseMobileMenuComponent_ng_container_0_Template_li_click_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.navBackLink()); });
    i0.ɵɵelement(2, "scrm-image", 6);
    i0.ɵɵelementStart(3, "a", 7);
    i0.ɵɵelement(4, "scrm-label", 8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} }
function BaseMobileMenuComponent_ng_container_1_ng_container_1_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 12);
    i0.ɵɵlistener("click", function BaseMobileMenuComponent_ng_container_1_ng_container_1_li_2_Template_li_click_0_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r8.changeSubNav($event, ctx_r8.current.submenu, ctx_r8.navigationType, ctx_r8.current)); });
    i0.ɵɵelementStart(1, "a", 13);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "scrm-image", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r6.current.link.label);
} }
function BaseMobileMenuComponent_ng_container_1_ng_container_1_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 12);
    i0.ɵɵlistener("click", function BaseMobileMenuComponent_ng_container_1_ng_container_1_li_3_Template_li_click_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r12); const item_r10 = restoredCtx.$implicit; const ctx_r11 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r11.changeSubNav($event, item_r10.submenu, ctx_r11.navigationType, item_r10)); });
    i0.ɵɵelementStart(1, "a", 13);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "scrm-image", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r10.link.label);
} }
function BaseMobileMenuComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 9);
    i0.ɵɵtemplate(2, BaseMobileMenuComponent_ng_container_1_ng_container_1_li_2_Template, 4, 1, "li", 10);
    i0.ɵɵtemplate(3, BaseMobileMenuComponent_ng_container_1_ng_container_1_li_3_Template, 4, 1, "li", 11);
    i0.ɵɵelementContainerStart(4);
    i0.ɵɵelementStart(5, "li", 12);
    i0.ɵɵlistener("click", function BaseMobileMenuComponent_ng_container_1_ng_container_1_Template_li_click_5_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r13.changeSubNav($event, ctx_r13.all, "gm", null)); });
    i0.ɵɵelementStart(6, "a", 13);
    i0.ɵɵelement(7, "scrm-label", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(8, "scrm-image", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r4.isAdminNavbar);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r4.mainItems);
} }
function BaseMobileMenuComponent_ng_container_1_ng_container_2_ng_container_1_scrm_mobile_grouped_menu_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-mobile-grouped-menu", 17);
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("items", ctx_r17.current == null ? null : ctx_r17.current.submenu)("onClose", ctx_r17.onClose);
} }
function BaseMobileMenuComponent_ng_container_1_ng_container_2_ng_container_1_scrm_mobile_module_menu_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-mobile-module-menu", 17);
} if (rf & 2) {
    const ctx_r18 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("items", ctx_r18.submenu)("onClose", ctx_r18.onClose);
} }
function BaseMobileMenuComponent_ng_container_1_ng_container_2_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 9)(2, "li", 18);
    i0.ɵɵelement(3, "scrm-menu-recently-viewed", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "li", 18);
    i0.ɵɵelement(5, "scrm-menu-favorites", 19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("collapsible", true)("module", ctx_r19.subNavItem.module)("onClick", ctx_r19.onClose);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("collapsible", true)("module", ctx_r19.subNavItem.module)("onClick", ctx_r19.onClose);
} }
function BaseMobileMenuComponent_ng_container_1_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BaseMobileMenuComponent_ng_container_1_ng_container_2_ng_container_1_scrm_mobile_grouped_menu_1_Template, 1, 2, "scrm-mobile-grouped-menu", 16);
    i0.ɵɵtemplate(2, BaseMobileMenuComponent_ng_container_1_ng_container_2_ng_container_1_scrm_mobile_module_menu_2_Template, 1, 2, "scrm-mobile-module-menu", 16);
    i0.ɵɵtemplate(3, BaseMobileMenuComponent_ng_container_1_ng_container_2_ng_container_1_ng_container_3_Template, 6, 6, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r15.isAdminNavbar && ctx_r15.isAdminNavbarClicked);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r15.isAdminNavbarClicked);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r15.subNavItem && ctx_r15.subNavItem.module);
} }
function BaseMobileMenuComponent_ng_container_1_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-mobile-grouped-menu", 17);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("items", ctx_r16.submenu)("onClose", ctx_r16.onClose);
} }
function BaseMobileMenuComponent_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BaseMobileMenuComponent_ng_container_1_ng_container_2_ng_container_1_Template, 4, 3, "ng-container", 0);
    i0.ɵɵtemplate(2, BaseMobileMenuComponent_ng_container_1_ng_container_2_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.subNavigationType !== "gm");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.subNavigationType === "gm");
} }
function BaseMobileMenuComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BaseMobileMenuComponent_ng_container_1_ng_container_1_Template, 9, 2, "ng-container", 0);
    i0.ɵɵtemplate(2, BaseMobileMenuComponent_ng_container_1_ng_container_2_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.mainNavLink);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.mobileSubNav);
} }
class BaseMobileMenuComponent {
    current;
    items;
    all;
    onClose;
    navigationType = '';
    mainItems;
    submenu = [];
    subNavItem;
    subNavigationType = 'mm';
    backLink = false;
    mobileSubNav = false;
    mainNavLink = true;
    isAdminNavbar = false;
    isAdminNavbarClicked = false;
    constructor() {
    }
    ngOnInit() {
        this.mainItems = this.items;
        if (this.navigationType !== 'gm' && this.current) {
            this.isAdminNavbar = this.current.isGroupedMenu;
            if (!this.current.isGroupedMenu) {
                this.mainItems = [this.current, ...this.items];
            }
        }
    }
    /**
     * Change subnavigation
     *
     * @param {object} event triggered
     * @param {object} items
     * @param navigationType
     * @param item
     */
    changeSubNav(event, items, navigationType, item) {
        this.mobileSubNav = !this.mobileSubNav;
        this.backLink = !this.backLink;
        this.mainNavLink = !this.mainNavLink;
        this.subNavItem = item;
        this.submenu = items;
        this.subNavigationType = navigationType;
        if (item.isGroupedMenu) {
            this.isAdminNavbarClicked = true;
            this.mainItems = this.items;
        }
        else {
            this.isAdminNavbarClicked = false;
            this.isAdminNavbar = false;
        }
    }
    /**
     * Set link flags
     */
    navBackLink() {
        this.mobileSubNav = !this.mobileSubNav;
        this.backLink = !this.backLink;
        this.mainNavLink = !this.mainNavLink;
    }
    getItems() {
    }
    static ɵfac = function BaseMobileMenuComponent_Factory(t) { return new (t || BaseMobileMenuComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BaseMobileMenuComponent, selectors: [["scrm-base-mobile-menu"]], inputs: { current: "current", items: "items", all: "all", onClose: "onClose", navigationType: "navigationType" }, decls: 7, vars: 2, consts: [[4, "ngIf"], [1, "mobile-nav-close", "clicable", "pl-3", "pr-3", "pt-2", "pb-2", "w-100", 3, "click"], ["image", "cross_bold", 1, "sicon", "mobile-nav-close"], [1, "nav-close-text"], ["labelKey", "LBL_CLOSE_MENU"], [1, "d-flex", "align-items-center", "mobile-back-row", 3, "click"], ["image", "arrow_left_filled", 1, "sicon-xs", "mobile-nav-arrow", "pl-3", "pr-3"], [1, "mobile-back-link", "pl-1", "pr-3", "pt-2", "pb-2"], ["labelKey", "LBL_BACK"], [1, "mobile-menu-items"], ["class", " d-flex align-items-center", 3, "click", 4, "ngIf"], ["class", " d-flex align-items-center", 3, "click", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", 3, "click"], [1, "flex-grow-1", "mobile-nav-link", "pl-3", "pr-3", "pt-2", "pb-2"], ["labelKey", "LBL_MORE"], ["image", "arrow_right_filled", 1, "sicon-xs", "mobile-nav-arrow", "pl-3", "pr-3"], [3, "items", "onClose", 4, "ngIf"], [3, "items", "onClose"], [1, ""], [3, "collapsible", "module", "onClick"]], template: function BaseMobileMenuComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BaseMobileMenuComponent_ng_container_0_Template, 5, 0, "ng-container", 0);
            i0.ɵɵtemplate(1, BaseMobileMenuComponent_ng_container_1_Template, 3, 2, "ng-container", 0);
            i0.ɵɵelementStart(2, "li")(3, "a", 1);
            i0.ɵɵlistener("click", function BaseMobileMenuComponent_Template_a_click_3_listener() { return ctx.onClose && ctx.onClose(); });
            i0.ɵɵelement(4, "scrm-image", 2);
            i0.ɵɵelementStart(5, "span", 3);
            i0.ɵɵelement(6, "scrm-label", 4);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.backLink);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.mainItems && ctx.mainItems.length);
        } }, dependencies: [i1.NgForOf, i1.NgIf, i2.ImageComponent, i3.LabelComponent, i4.MenuRecentlyViewedComponent, i5.MenuFavoritesComponent, i6.MobileGroupedMenuComponent, i7.MobileModuleMenuComponent], encapsulation: 2 });
}
export { BaseMobileMenuComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseMobileMenuComponent, [{
        type: Component,
        args: [{ selector: 'scrm-base-mobile-menu', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n\n\n<ng-container *ngIf=\"backLink\">\n    <li (click)=\"navBackLink()\" class=\"d-flex align-items-center mobile-back-row\">\n        <scrm-image class=\"sicon-xs mobile-nav-arrow pl-3 pr-3\"\n                    image=\"arrow_left_filled\">\n        </scrm-image>\n        <a class=\"mobile-back-link pl-1 pr-3 pt-2 pb-2\">\n            <scrm-label labelKey=\"LBL_BACK\"></scrm-label>\n        </a>\n    </li>\n</ng-container>\n\n<ng-container *ngIf=\"mainItems && mainItems.length\">\n    <ng-container *ngIf=\"mainNavLink\">\n        <div class=\"mobile-menu-items\">\n\n            <li (click)=\"changeSubNav($event, current.submenu, navigationType, current)\" *ngIf=\"isAdminNavbar\"\n                class=\" d-flex align-items-center\">\n                <a class=\"flex-grow-1 mobile-nav-link pl-3 pr-3 pt-2 pb-2\">{{ current.link.label }}</a>\n                <scrm-image class=\"sicon-xs mobile-nav-arrow pl-3 pr-3\" image=\"arrow_right_filled\"\n                ></scrm-image>\n            </li>\n\n            <li (click)=\"changeSubNav($event, item.submenu, navigationType, item)\" *ngFor=\"let item of mainItems\"\n                class=\" d-flex align-items-center\">\n                <a class=\"flex-grow-1 mobile-nav-link pl-3 pr-3 pt-2 pb-2\">{{ item.link.label }}</a>\n                <scrm-image class=\"sicon-xs mobile-nav-arrow pl-3 pr-3\" image=\"arrow_right_filled\"\n                ></scrm-image>\n            </li>\n\n            <ng-container>\n                <li (click)=\"changeSubNav($event, all, 'gm', null)\"\n                    class=\" d-flex align-items-center\">\n                    <a class=\"flex-grow-1 mobile-nav-link pl-3 pr-3 pt-2 pb-2\">\n                        <scrm-label labelKey=\"LBL_MORE\"></scrm-label>\n                    </a>\n                    <scrm-image class=\"sicon-xs mobile-nav-arrow pl-3 pr-3\" image=\"arrow_right_filled\"\n                    ></scrm-image>\n                </li>\n            </ng-container>\n        </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"mobileSubNav\">\n\n        <ng-container *ngIf=\"subNavigationType !== 'gm'\">\n\n            <scrm-mobile-grouped-menu *ngIf=\"isAdminNavbar && isAdminNavbarClicked\" [items]=\"current?.submenu\" [onClose]=\"onClose\"></scrm-mobile-grouped-menu>\n\n            <scrm-mobile-module-menu *ngIf=\"!isAdminNavbarClicked\" [items]=\"submenu\" [onClose]=\"onClose\"></scrm-mobile-module-menu>\n\n            <ng-container *ngIf=\"subNavItem && subNavItem.module\">\n                <div class=\"mobile-menu-items\">\n                    <li class=\"\">\n                        <scrm-menu-recently-viewed [collapsible]=\"true\"\n                                                   [module]=\"subNavItem.module\"\n                                                   [onClick]=\"onClose\">\n                        </scrm-menu-recently-viewed>\n                    </li>\n                    <li class=\"\">\n                        <scrm-menu-favorites [collapsible]=\"true\"\n                                             [module]=\"subNavItem.module\"\n                                             [onClick]=\"onClose\">\n                        </scrm-menu-favorites>\n                    </li>\n                </div>\n\n            </ng-container>\n        </ng-container>\n\n        <ng-container *ngIf=\"subNavigationType === 'gm'\">\n\n            <scrm-mobile-grouped-menu [items]=\"submenu\" [onClose]=\"onClose\"></scrm-mobile-grouped-menu>\n\n        </ng-container>\n\n    </ng-container>\n\n</ng-container>\n\n<li>\n    <a (click)=\"onClose && onClose()\" class=\"mobile-nav-close clicable pl-3 pr-3 pt-2 pb-2 w-100\">\n        <scrm-image class=\"sicon mobile-nav-close\" image=\"cross_bold\"></scrm-image>\n        <span class=\"nav-close-text\">\n            <scrm-label labelKey=\"LBL_CLOSE_MENU\"></scrm-label>\n        </span>\n    </a>\n</li>\n\n" }]
    }], function () { return []; }, { current: [{
            type: Input
        }], items: [{
            type: Input
        }], all: [{
            type: Input
        }], onClose: [{
            type: Input
        }], navigationType: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1tb2JpbGUtbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9uYXZiYXIvbW9iaWxlLW1lbnUvYmFzZS1tb2JpbGUtbWVudS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9uYXZiYXIvbW9iaWxlLW1lbnUvYmFzZS1tb2JpbGUtbWVudS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7O0lDR3ZELDZCQUErQjtJQUMzQiw2QkFBOEU7SUFBMUUseUtBQVMsZUFBQSxvQkFBYSxDQUFBLElBQUM7SUFDdkIsZ0NBRWE7SUFDYiw0QkFBZ0Q7SUFDNUMsZ0NBQTZDO0lBQ2pELGlCQUFJLEVBQUE7SUFFWiwwQkFBZTs7OztJQU1ILDhCQUN1QztJQURuQyxvTUFBUyxlQUFBLDBGQUE4RCxDQUFBLElBQUM7SUFFeEUsNkJBQTJEO0lBQUEsWUFBd0I7SUFBQSxpQkFBSTtJQUN2RixpQ0FDYztJQUNsQixpQkFBSzs7O0lBSDBELGVBQXdCO0lBQXhCLCtDQUF3Qjs7OztJQUt2Riw4QkFDdUM7SUFEbkMsa1FBQVMsZUFBQSxnRkFBd0QsQ0FBQSxJQUFDO0lBRWxFLDZCQUEyRDtJQUFBLFlBQXFCO0lBQUEsaUJBQUk7SUFDcEYsaUNBQ2M7SUFDbEIsaUJBQUs7OztJQUgwRCxlQUFxQjtJQUFyQix5Q0FBcUI7Ozs7SUFaNUYsNkJBQWtDO0lBQzlCLDhCQUErQjtJQUUzQixxR0FLSztJQUVMLHFHQUtLO0lBRUwsNkJBQWM7SUFDViw4QkFDdUM7SUFEbkMsaU1BQVMsZUFBQSwwQ0FB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LE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGNBQWMsQ0FBQztRQUV4QyxJQUFHLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDbkIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztZQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDL0I7YUFBTTtZQUNILElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7WUFDbEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7U0FDOUI7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxXQUFXO1FBQ2QsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekMsQ0FBQztJQUdELFFBQVE7SUFFUixDQUFDO2lGQXJFUSx1QkFBdUI7NkRBQXZCLHVCQUF1QjtZQ0xwQywwRkFTZTtZQUVmLDBGQWtFZTtZQUVmLDBCQUFJLFdBQUE7WUFDRyw4R0FBb0IsYUFBUyxJQUFDO1lBQzdCLGdDQUEyRTtZQUMzRSwrQkFBNkI7WUFDekIsZ0NBQW1EO1lBQ3ZELGlCQUFPLEVBQUEsRUFBQTs7WUFwRkEsbUNBQWM7WUFXZCxlQUFtQztZQUFuQyw0REFBbUM7OztTRE5yQyx1QkFBdUI7dUZBQXZCLHVCQUF1QjtjQUxuQyxTQUFTOzJCQUNJLHVCQUF1QjtzQ0FLeEIsT0FBTztrQkFBZixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csR0FBRztrQkFBWCxLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csY0FBYztrQkFBdEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNZW51SXRlbX0gZnJvbSAnY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLWJhc2UtbW9iaWxlLW1lbnUnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9iYXNlLW1vYmlsZS1tZW51LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEJhc2VNb2JpbGVNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSBjdXJyZW50OiBNZW51SXRlbTtcbiAgICBASW5wdXQoKSBpdGVtczogTWVudUl0ZW1bXTtcbiAgICBASW5wdXQoKSBhbGw6IE1lbnVJdGVtW107XG4gICAgQElucHV0KCkgb25DbG9zZTogRnVuY3Rpb247XG4gICAgQElucHV0KCkgbmF2aWdhdGlvblR5cGU6IHN0cmluZyA9ICcnO1xuXG4gICAgbWFpbkl0ZW1zOiBNZW51SXRlbVtdO1xuICAgIHN1Ym1lbnU6IE1lbnVJdGVtW10gPSBbXTtcbiAgICBzdWJOYXZJdGVtOiBNZW51SXRlbTtcblxuICAgIHN1Yk5hdmlnYXRpb25UeXBlID0gJ21tJztcbiAgICBiYWNrTGluayA9IGZhbHNlO1xuICAgIG1vYmlsZVN1Yk5hdiA9IGZhbHNlO1xuICAgIG1haW5OYXZMaW5rID0gdHJ1ZTtcbiAgICBpc0FkbWluTmF2YmFyOiBib29sZWFuID0gZmFsc2U7XG4gICAgaXNBZG1pbk5hdmJhckNsaWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLm1haW5JdGVtcyA9IHRoaXMuaXRlbXM7XG5cbiAgICAgICAgaWYgKHRoaXMubmF2aWdhdGlvblR5cGUgIT09ICdnbScgJiYgdGhpcy5jdXJyZW50KSB7XG4gICAgICAgICAgICB0aGlzLmlzQWRtaW5OYXZiYXIgPSB0aGlzLmN1cnJlbnQuaXNHcm91cGVkTWVudTtcbiAgICAgICAgICAgIGlmKCF0aGlzLmN1cnJlbnQuaXNHcm91cGVkTWVudSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWFpbkl0ZW1zID0gW3RoaXMuY3VycmVudCwgLi4udGhpcy5pdGVtc107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2Ugc3VibmF2aWdhdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IHRyaWdnZXJlZFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBpdGVtc1xuICAgICAqIEBwYXJhbSBuYXZpZ2F0aW9uVHlwZVxuICAgICAqIEBwYXJhbSBpdGVtXG4gICAgICovXG4gICAgcHVibGljIGNoYW5nZVN1Yk5hdihldmVudDogRXZlbnQsIGl0ZW1zOiBNZW51SXRlbVtdLCBuYXZpZ2F0aW9uVHlwZTogc3RyaW5nLCBpdGVtOiBNZW51SXRlbSk6IHZvaWQge1xuICAgICAgICB0aGlzLm1vYmlsZVN1Yk5hdiA9ICF0aGlzLm1vYmlsZVN1Yk5hdjtcbiAgICAgICAgdGhpcy5iYWNrTGluayA9ICF0aGlzLmJhY2tMaW5rO1xuICAgICAgICB0aGlzLm1haW5OYXZMaW5rID0gIXRoaXMubWFpbk5hdkxpbms7XG4gICAgICAgIHRoaXMuc3ViTmF2SXRlbSA9IGl0ZW07XG4gICAgICAgIHRoaXMuc3VibWVudSA9IGl0ZW1zO1xuICAgICAgICB0aGlzLnN1Yk5hdmlnYXRpb25UeXBlID0gbmF2aWdhdGlvblR5cGU7XG5cbiAgICAgICAgaWYoaXRlbS5pc0dyb3VwZWRNZW51KSB7XG4gICAgICAgICAgICB0aGlzLmlzQWRtaW5OYXZiYXJDbGlja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubWFpbkl0ZW1zID0gdGhpcy5pdGVtcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNBZG1pbk5hdmJhckNsaWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaXNBZG1pbk5hdmJhciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGxpbmsgZmxhZ3NcbiAgICAgKi9cbiAgICBwdWJsaWMgbmF2QmFja0xpbmsoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubW9iaWxlU3ViTmF2ID0gIXRoaXMubW9iaWxlU3ViTmF2O1xuICAgICAgICB0aGlzLmJhY2tMaW5rID0gIXRoaXMuYmFja0xpbms7XG4gICAgICAgIHRoaXMubWFpbk5hdkxpbmsgPSAhdGhpcy5tYWluTmF2TGluaztcbiAgICB9XG5cblxuICAgIGdldEl0ZW1zKCkge1xuXG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuXG5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJiYWNrTGlua1wiPlxuICAgIDxsaSAoY2xpY2spPVwibmF2QmFja0xpbmsoKVwiIGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtb2JpbGUtYmFjay1yb3dcIj5cbiAgICAgICAgPHNjcm0taW1hZ2UgY2xhc3M9XCJzaWNvbi14cyBtb2JpbGUtbmF2LWFycm93IHBsLTMgcHItM1wiXG4gICAgICAgICAgICAgICAgICAgIGltYWdlPVwiYXJyb3dfbGVmdF9maWxsZWRcIj5cbiAgICAgICAgPC9zY3JtLWltYWdlPlxuICAgICAgICA8YSBjbGFzcz1cIm1vYmlsZS1iYWNrLWxpbmsgcGwtMSBwci0zIHB0LTIgcGItMlwiPlxuICAgICAgICAgICAgPHNjcm0tbGFiZWwgbGFiZWxLZXk9XCJMQkxfQkFDS1wiPjwvc2NybS1sYWJlbD5cbiAgICAgICAgPC9hPlxuICAgIDwvbGk+XG48L25nLWNvbnRhaW5lcj5cblxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIm1haW5JdGVtcyAmJiBtYWluSXRlbXMubGVuZ3RoXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm1haW5OYXZMaW5rXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2JpbGUtbWVudS1pdGVtc1wiPlxuXG4gICAgICAgICAgICA8bGkgKGNsaWNrKT1cImNoYW5nZVN1Yk5hdigkZXZlbnQsIGN1cnJlbnQuc3VibWVudSwgbmF2aWdhdGlvblR5cGUsIGN1cnJlbnQpXCIgKm5nSWY9XCJpc0FkbWluTmF2YmFyXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJmbGV4LWdyb3ctMSBtb2JpbGUtbmF2LWxpbmsgcGwtMyBwci0zIHB0LTIgcGItMlwiPnt7IGN1cnJlbnQubGluay5sYWJlbCB9fTwvYT5cbiAgICAgICAgICAgICAgICA8c2NybS1pbWFnZSBjbGFzcz1cInNpY29uLXhzIG1vYmlsZS1uYXYtYXJyb3cgcGwtMyBwci0zXCIgaW1hZ2U9XCJhcnJvd19yaWdodF9maWxsZWRcIlxuICAgICAgICAgICAgICAgID48L3Njcm0taW1hZ2U+XG4gICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICA8bGkgKGNsaWNrKT1cImNoYW5nZVN1Yk5hdigkZXZlbnQsIGl0ZW0uc3VibWVudSwgbmF2aWdhdGlvblR5cGUsIGl0ZW0pXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgbWFpbkl0ZW1zXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJmbGV4LWdyb3ctMSBtb2JpbGUtbmF2LWxpbmsgcGwtMyBwci0zIHB0LTIgcGItMlwiPnt7IGl0ZW0ubGluay5sYWJlbCB9fTwvYT5cbiAgICAgICAgICAgICAgICA8c2NybS1pbWFnZSBjbGFzcz1cInNpY29uLXhzIG1vYmlsZS1uYXYtYXJyb3cgcGwtMyBwci0zXCIgaW1hZ2U9XCJhcnJvd19yaWdodF9maWxsZWRcIlxuICAgICAgICAgICAgICAgID48L3Njcm0taW1hZ2U+XG4gICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICA8bmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxsaSAoY2xpY2spPVwiY2hhbmdlU3ViTmF2KCRldmVudCwgYWxsLCAnZ20nLCBudWxsKVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJmbGV4LWdyb3ctMSBtb2JpbGUtbmF2LWxpbmsgcGwtMyBwci0zIHB0LTIgcGItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tbGFiZWwgbGFiZWxLZXk9XCJMQkxfTU9SRVwiPjwvc2NybS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8c2NybS1pbWFnZSBjbGFzcz1cInNpY29uLXhzIG1vYmlsZS1uYXYtYXJyb3cgcGwtMyBwci0zXCIgaW1hZ2U9XCJhcnJvd19yaWdodF9maWxsZWRcIlxuICAgICAgICAgICAgICAgICAgICA+PC9zY3JtLWltYWdlPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibW9iaWxlU3ViTmF2XCI+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInN1Yk5hdmlnYXRpb25UeXBlICE9PSAnZ20nXCI+XG5cbiAgICAgICAgICAgIDxzY3JtLW1vYmlsZS1ncm91cGVkLW1lbnUgKm5nSWY9XCJpc0FkbWluTmF2YmFyICYmIGlzQWRtaW5OYXZiYXJDbGlja2VkXCIgW2l0ZW1zXT1cImN1cnJlbnQ/LnN1Ym1lbnVcIiBbb25DbG9zZV09XCJvbkNsb3NlXCI+PC9zY3JtLW1vYmlsZS1ncm91cGVkLW1lbnU+XG5cbiAgICAgICAgICAgIDxzY3JtLW1vYmlsZS1tb2R1bGUtbWVudSAqbmdJZj1cIiFpc0FkbWluTmF2YmFyQ2xpY2tlZFwiIFtpdGVtc109XCJzdWJtZW51XCIgW29uQ2xvc2VdPVwib25DbG9zZVwiPjwvc2NybS1tb2JpbGUtbW9kdWxlLW1lbnU+XG5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzdWJOYXZJdGVtICYmIHN1Yk5hdkl0ZW0ubW9kdWxlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vYmlsZS1tZW51LWl0ZW1zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tbWVudS1yZWNlbnRseS12aWV3ZWQgW2NvbGxhcHNpYmxlXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21vZHVsZV09XCJzdWJOYXZJdGVtLm1vZHVsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbb25DbGlja109XCJvbkNsb3NlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Njcm0tbWVudS1yZWNlbnRseS12aWV3ZWQ+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tbWVudS1mYXZvcml0ZXMgW2NvbGxhcHNpYmxlXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21vZHVsZV09XCJzdWJOYXZJdGVtLm1vZHVsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbb25DbGlja109XCJvbkNsb3NlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Njcm0tbWVudS1mYXZvcml0ZXM+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic3ViTmF2aWdhdGlvblR5cGUgPT09ICdnbSdcIj5cblxuICAgICAgICAgICAgPHNjcm0tbW9iaWxlLWdyb3VwZWQtbWVudSBbaXRlbXNdPVwic3VibWVudVwiIFtvbkNsb3NlXT1cIm9uQ2xvc2VcIj48L3Njcm0tbW9iaWxlLWdyb3VwZWQtbWVudT5cblxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDwvbmctY29udGFpbmVyPlxuXG48L25nLWNvbnRhaW5lcj5cblxuPGxpPlxuICAgIDxhIChjbGljayk9XCJvbkNsb3NlICYmIG9uQ2xvc2UoKVwiIGNsYXNzPVwibW9iaWxlLW5hdi1jbG9zZSBjbGljYWJsZSBwbC0zIHByLTMgcHQtMiBwYi0yIHctMTAwXCI+XG4gICAgICAgIDxzY3JtLWltYWdlIGNsYXNzPVwic2ljb24gbW9iaWxlLW5hdi1jbG9zZVwiIGltYWdlPVwiY3Jvc3NfYm9sZFwiPjwvc2NybS1pbWFnZT5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXYtY2xvc2UtdGV4dFwiPlxuICAgICAgICAgICAgPHNjcm0tbGFiZWwgbGFiZWxLZXk9XCJMQkxfQ0xPU0VfTUVOVVwiPjwvc2NybS1sYWJlbD5cbiAgICAgICAgPC9zcGFuPlxuICAgIDwvYT5cbjwvbGk+XG5cbiJdfQ==