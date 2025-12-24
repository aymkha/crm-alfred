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
import * as i3 from "../menu-recently-viewed/menu-recently-viewed.component";
import * as i4 from "../menu-favorites/menu-favorites.component";
import * as i5 from "../menu-item-link/menu-item-link.component";
function BaseMobileGroupedMenuComponent_ng_container_2_ngb_panel_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 7);
    i0.ɵɵlistener("click", function BaseMobileGroupedMenuComponent_ng_container_2_ngb_panel_1_ng_template_1_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r5.onClose && ctx_r5.onClose()); });
    i0.ɵɵelement(1, "scrm-menu-item-link", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap("mobile-nav-link dropdown-item action-link pl-5 pr-3 pt-2 pb-2");
    i0.ɵɵproperty("icon", item_r1.icon || "")("link", item_r1.link);
} }
function BaseMobileGroupedMenuComponent_ng_container_2_ngb_panel_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ngb-panel", 5);
    i0.ɵɵtemplate(1, BaseMobileGroupedMenuComponent_ng_container_2_ngb_panel_1_ng_template_1_Template, 2, 4, "ng-template", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("cardClass", "mobile-nav-group-item disabled")("disabled", true);
} }
function BaseMobileGroupedMenuComponent_ng_container_2_ngb_panel_2_ng_template_1_li_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 13);
    i0.ɵɵlistener("click", function BaseMobileGroupedMenuComponent_ng_container_2_ngb_panel_2_ng_template_1_li_0_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r12.onClose && ctx_r12.onClose()); });
    i0.ɵɵelement(1, "scrm-menu-item-link", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const subitem_r11 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap("mobile-nav-link action-link pl-1 pr-3 pt-2 pb-2 w-100");
    i0.ɵɵproperty("icon", subitem_r11.icon || "")("link", subitem_r11.link);
} }
function BaseMobileGroupedMenuComponent_ng_container_2_ngb_panel_2_ng_template_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li");
    i0.ɵɵelement(2, "scrm-menu-recently-viewed", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "li");
    i0.ɵɵelement(4, "scrm-menu-favorites", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r10 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("collapsible", true)("module", item_r1.module)("onClick", ctx_r10.onClose);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("collapsible", true)("module", item_r1.module)("onClick", ctx_r10.onClose);
} }
function BaseMobileGroupedMenuComponent_ng_container_2_ngb_panel_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, BaseMobileGroupedMenuComponent_ng_container_2_ngb_panel_2_ng_template_1_li_0_Template, 2, 4, "li", 11);
    i0.ɵɵtemplate(1, BaseMobileGroupedMenuComponent_ng_container_2_ngb_panel_2_ng_template_1_ng_container_1_Template, 5, 6, "ng-container", 12);
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngForOf", item_r1.submenu);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r1 && item_r1.module);
} }
function BaseMobileGroupedMenuComponent_ng_container_2_ngb_panel_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ngb-panel", 9);
    i0.ɵɵtemplate(1, BaseMobileGroupedMenuComponent_ng_container_2_ngb_panel_2_ng_template_1_Template, 2, 2, "ng-template", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("title", item_r1.link.label);
} }
function BaseMobileGroupedMenuComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BaseMobileGroupedMenuComponent_ng_container_2_ngb_panel_1_Template, 2, 2, "ngb-panel", 3);
    i0.ɵɵtemplate(2, BaseMobileGroupedMenuComponent_ng_container_2_ngb_panel_2_Template, 2, 1, "ngb-panel", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r1.submenu || !item_r1.submenu.length);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r1.submenu && item_r1.submenu.length);
} }
class BaseMobileGroupedMenuComponent {
    items;
    onClose;
    constructor() {
    }
    static ɵfac = function BaseMobileGroupedMenuComponent_Factory(t) { return new (t || BaseMobileGroupedMenuComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BaseMobileGroupedMenuComponent, selectors: [["scrm-base-mobile-grouped-menu"]], inputs: { items: "items", onClose: "onClose" }, decls: 3, vars: 2, consts: [[1, "mobile-menu-items"], [3, "closeOthers"], [4, "ngFor", "ngForOf"], [3, "cardClass", "disabled", 4, "ngIf"], ["cardClass", "mobile-nav-group-item", 3, "title", 4, "ngIf"], [3, "cardClass", "disabled"], ["ngbPanelHeader", ""], [1, "", 3, "click"], [3, "icon", "link"], ["cardClass", "mobile-nav-group-item", 3, "title"], ["ngbPanelContent", ""], ["class", "ml-4", 3, "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "ml-4", 3, "click"], [3, "collapsible", "module", "onClick"]], template: function BaseMobileGroupedMenuComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "ngb-accordion", 1);
            i0.ɵɵtemplate(2, BaseMobileGroupedMenuComponent_ng_container_2_Template, 3, 2, "ng-container", 2);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("closeOthers", true);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.items);
        } }, dependencies: [i1.NgForOf, i1.NgIf, i2.NgbAccordion, i2.NgbPanel, i2.NgbPanelContent, i2.NgbPanelHeader, i3.MenuRecentlyViewedComponent, i4.MenuFavoritesComponent, i5.MenuItemLinkComponent], encapsulation: 2 });
}
export { BaseMobileGroupedMenuComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseMobileGroupedMenuComponent, [{
        type: Component,
        args: [{ selector: 'scrm-base-mobile-grouped-menu', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div class=\"mobile-menu-items\">\n    <ngb-accordion [closeOthers]=\"true\">\n\n        <ng-container *ngFor=\"let item of items\">\n\n            <ngb-panel *ngIf=\"!item.submenu || !item.submenu.length\"\n                       [cardClass]=\"'mobile-nav-group-item disabled'\"\n                       [disabled]=\"true\">\n\n                <ng-template ngbPanelHeader>\n                    <li (click)=\"onClose && onClose()\"\n                        class=\"\">\n                        <scrm-menu-item-link\n                            [class]=\"'mobile-nav-link dropdown-item action-link pl-5 pr-3 pt-2 pb-2'\"\n                            [icon]=\"item.icon || ''\"\n                            [link]=\"item.link\"></scrm-menu-item-link>\n                    </li>\n                </ng-template>\n\n            </ngb-panel>\n\n            <ngb-panel *ngIf=\"item.submenu && item.submenu.length\"\n                       [title]=\"item.link.label\"\n                       cardClass=\"mobile-nav-group-item\">\n\n                <ng-template ngbPanelContent>\n\n                    <li (click)=\"onClose && onClose()\"\n                        *ngFor=\"let subitem of item.submenu\"\n                        class=\"ml-4\">\n                        <scrm-menu-item-link\n                            [class]=\"'mobile-nav-link action-link pl-1 pr-3 pt-2 pb-2 w-100'\"\n                            [icon]=\"subitem.icon || ''\"\n                            [link]=\"subitem.link\"></scrm-menu-item-link>\n                    </li>\n\n                    <ng-container *ngIf=\"item && item.module\">\n                        <li>\n                            <scrm-menu-recently-viewed [collapsible]=\"true\"\n                                                       [module]=\"item.module\"\n                                                       [onClick]=\"onClose\">\n                            </scrm-menu-recently-viewed>\n                        </li>\n                        <li>\n                            <scrm-menu-favorites [collapsible]=\"true\"\n                                                 [module]=\"item.module\"\n                                                 [onClick]=\"onClose\">\n                            </scrm-menu-favorites>\n                        </li>\n                    </ng-container>\n\n                </ng-template>\n            </ngb-panel>\n\n        </ng-container>\n\n    </ngb-accordion>\n</div>\n\n" }]
    }], function () { return []; }, { items: [{
            type: Input
        }], onClose: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1tb2JpbGUtZ3JvdXBlZC1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL25hdmJhci9tb2JpbGUtZ3JvdXBlZC1tZW51L2Jhc2UtbW9iaWxlLWdyb3VwZWQtbWVudS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9uYXZiYXIvbW9iaWxlLWdyb3VwZWQtbWVudS9iYXNlLW1vYmlsZS1ncm91cGVkLW1lbnUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7SUNXM0IsNkJBQ2E7SUFEVCwyTUFBUyxpQ0FBVyxnQkFBUyxDQUFBLElBQUM7SUFFOUIseUNBRzZDO0lBQ2pELGlCQUFLOzs7SUFIRyxlQUF5RTtJQUF6RSw4RUFBeUU7SUFDekUseUNBQXdCLHNCQUFBOzs7SUFUeEMsb0NBRTZCO0lBRXpCLDBIQVFjO0lBRWxCLGlCQUFZOztJQWJELDREQUE4QyxrQkFBQTs7OztJQXFCakQsOEJBRWlCO0lBRmIsa05BQVMsa0NBQVcsaUJBQVMsQ0FBQSxJQUFDO0lBRzlCLHlDQUdnRDtJQUNwRCxpQkFBSzs7O0lBSEcsZUFBaUU7SUFBakUsc0VBQWlFO0lBQ2pFLDZDQUEyQiwwQkFBQTs7O0lBSW5DLDZCQUEwQztJQUN0QywwQkFBSTtJQUNBLGdEQUc0QjtJQUNoQyxpQkFBSztJQUNMLDBCQUFJO0lBQ0EsMENBR3NCO0lBQzFCLGlCQUFLO0lBQ1QsMEJBQWU7Ozs7SUFYb0IsZUFBb0I7SUFBcEIsa0NBQW9CLDBCQUFBLDRCQUFBO0lBTTFCLGVBQW9CO0lBQXBCLGtDQUFvQiwwQkFBQSw0QkFBQTs7O0lBakJqRCx1SEFPSztJQUVMLDJJQWFlOzs7SUFyQlMseUNBQWU7SUFReEIsZUFBeUI7SUFBekIsZ0RBQXlCOzs7SUFmaEQsb0NBRTZDO0lBRXpDLDJIQTBCYztJQUNsQixpQkFBWTs7O0lBOUJELDBDQUF5Qjs7O0lBbkJ4Qyw2QkFBeUM7SUFFckMsMEdBY1k7SUFFWiwwR0ErQlk7SUFFaEIsMEJBQWU7OztJQWpEQyxlQUEyQztJQUEzQyxrRUFBMkM7SUFnQjNDLGVBQXlDO0lBQXpDLGdFQUF5Qzs7QURuQmpFLE1BS2EsOEJBQThCO0lBQzlCLEtBQUssQ0FBYTtJQUNsQixPQUFPLENBQVc7SUFFM0I7SUFDQSxDQUFDO3dGQUxRLDhCQUE4Qjs2REFBOUIsOEJBQThCO1lDUDNDLDhCQUErQix1QkFBQTtZQUd2QixpR0FtRGU7WUFFbkIsaUJBQWdCLEVBQUE7O1lBdkRELGVBQW9CO1lBQXBCLGtDQUFvQjtZQUVBLGVBQVE7WUFBUixtQ0FBUTs7O1NESWxDLDhCQUE4Qjt1RkFBOUIsOEJBQThCO2NBTDFDLFNBQVM7MkJBQ0ksK0JBQStCO3NDQUtoQyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01lbnVJdGVtfSBmcm9tICdjb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tYmFzZS1tb2JpbGUtZ3JvdXBlZC1tZW51JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYmFzZS1tb2JpbGUtZ3JvdXBlZC1tZW51LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEJhc2VNb2JpbGVHcm91cGVkTWVudUNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgaXRlbXM6IE1lbnVJdGVtW107XG4gICAgQElucHV0KCkgb25DbG9zZTogRnVuY3Rpb247XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48ZGl2IGNsYXNzPVwibW9iaWxlLW1lbnUtaXRlbXNcIj5cbiAgICA8bmdiLWFjY29yZGlvbiBbY2xvc2VPdGhlcnNdPVwidHJ1ZVwiPlxuXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXNcIj5cblxuICAgICAgICAgICAgPG5nYi1wYW5lbCAqbmdJZj1cIiFpdGVtLnN1Ym1lbnUgfHwgIWl0ZW0uc3VibWVudS5sZW5ndGhcIlxuICAgICAgICAgICAgICAgICAgICAgICBbY2FyZENsYXNzXT1cIidtb2JpbGUtbmF2LWdyb3VwLWl0ZW0gZGlzYWJsZWQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cInRydWVcIj5cblxuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBuZ2JQYW5lbEhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIChjbGljayk9XCJvbkNsb3NlICYmIG9uQ2xvc2UoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tbWVudS1pdGVtLWxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3NdPVwiJ21vYmlsZS1uYXYtbGluayBkcm9wZG93bi1pdGVtIGFjdGlvbi1saW5rIHBsLTUgcHItMyBwdC0yIHBiLTInXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaWNvbl09XCJpdGVtLmljb24gfHwgJydcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsaW5rXT1cIml0ZW0ubGlua1wiPjwvc2NybS1tZW51LWl0ZW0tbGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgICAgICAgICA8L25nYi1wYW5lbD5cblxuICAgICAgICAgICAgPG5nYi1wYW5lbCAqbmdJZj1cIml0ZW0uc3VibWVudSAmJiBpdGVtLnN1Ym1lbnUubGVuZ3RoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgW3RpdGxlXT1cIml0ZW0ubGluay5sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgIGNhcmRDbGFzcz1cIm1vYmlsZS1uYXYtZ3JvdXAtaXRlbVwiPlxuXG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIG5nYlBhbmVsQ29udGVudD5cblxuICAgICAgICAgICAgICAgICAgICA8bGkgKGNsaWNrKT1cIm9uQ2xvc2UgJiYgb25DbG9zZSgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBzdWJpdGVtIG9mIGl0ZW0uc3VibWVudVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1sLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLW1lbnUtaXRlbS1saW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzXT1cIidtb2JpbGUtbmF2LWxpbmsgYWN0aW9uLWxpbmsgcGwtMSBwci0zIHB0LTIgcGItMiB3LTEwMCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpY29uXT1cInN1Yml0ZW0uaWNvbiB8fCAnJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xpbmtdPVwic3ViaXRlbS5saW5rXCI+PC9zY3JtLW1lbnUtaXRlbS1saW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtICYmIGl0ZW0ubW9kdWxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tbWVudS1yZWNlbnRseS12aWV3ZWQgW2NvbGxhcHNpYmxlXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttb2R1bGVdPVwiaXRlbS5tb2R1bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtvbkNsaWNrXT1cIm9uQ2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Njcm0tbWVudS1yZWNlbnRseS12aWV3ZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLW1lbnUtZmF2b3JpdGVzIFtjb2xsYXBzaWJsZV09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbW9kdWxlXT1cIml0ZW0ubW9kdWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbb25DbGlja109XCJvbkNsb3NlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zY3JtLW1lbnUtZmF2b3JpdGVzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgPC9uZ2ItcGFuZWw+XG5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8L25nYi1hY2NvcmRpb24+XG48L2Rpdj5cblxuIl19