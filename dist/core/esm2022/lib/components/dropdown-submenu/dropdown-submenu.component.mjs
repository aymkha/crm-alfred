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
import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../image/image.component";
import * as i3 from "@ng-bootstrap/ng-bootstrap";
function DropdownSubmenuComponent_scrm_image_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-image", 5);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("image", ctx_r0.item.icon);
} }
function DropdownSubmenuComponent_div_5_li_2_scrm_image_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-image", 5);
} if (rf & 2) {
    const subItem_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("image", subItem_r3.icon);
} }
function DropdownSubmenuComponent_div_5_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 9)(1, "a", 10);
    i0.ɵɵlistener("click", function DropdownSubmenuComponent_div_5_li_2_Template_a_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r7); const subItem_r3 = restoredCtx.$implicit; const ctx_r6 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r6.click(subItem_r3)); });
    i0.ɵɵtemplate(2, DropdownSubmenuComponent_div_5_li_2_scrm_image_2_Template, 1, 1, "scrm-image", 2);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const subItem_r3 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", subItem_r3 && subItem_r3.klass);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", subItem_r3.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", subItem_r3 && subItem_r3.label, " ");
} }
function DropdownSubmenuComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "ul", 7);
    i0.ɵɵtemplate(2, DropdownSubmenuComponent_div_5_li_2_Template, 4, 3, "li", 8);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngbCollapse", ctx_r1.isCollapsed);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.item.items);
} }
const _c0 = ["*"];
class DropdownSubmenuComponent {
    item;
    itemClicked = new EventEmitter();
    isCollapsed = true;
    constructor() {
    }
    ngOnInit() {
    }
    click(item) {
        if (item && item.onClick) {
            item.onClick();
        }
        this.itemClicked.emit(true);
    }
    static ɵfac = function DropdownSubmenuComponent_Factory(t) { return new (t || DropdownSubmenuComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DropdownSubmenuComponent, selectors: [["scrm-dropdown-submenu"]], inputs: { item: "item" }, outputs: { itemClicked: "item-clicked" }, ngContentSelectors: _c0, decls: 8, vars: 3, consts: [[1, "dropdown-submenu-items-container"], [1, "dropdown-submenu-parent-button", "dropdown-item", "dropdown-toggle", 3, "click"], [3, "image", 4, "ngIf"], [3, "ngbCollapse", 4, "ngIf"], [1, "dropdown-submenu-extra"], [3, "image"], [3, "ngbCollapse"], [1, "dropdown-submenu", "pl-2", "mb-1"], ["class", "dropdown-submenu-item dropdown-item", 4, "ngFor", "ngForOf"], [1, "dropdown-submenu-item", "dropdown-item"], [1, "action-link", "dropdown-submenu-item-link", 3, "ngClass", "click"]], template: function DropdownSubmenuComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div")(1, "div", 0)(2, "a", 1);
            i0.ɵɵlistener("click", function DropdownSubmenuComponent_Template_a_click_2_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
            i0.ɵɵtemplate(3, DropdownSubmenuComponent_scrm_image_3_Template, 1, 1, "scrm-image", 2);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, DropdownSubmenuComponent_div_5_Template, 3, 2, "div", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 4);
            i0.ɵɵprojection(7);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.item && ctx.item.icon);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx.item && ctx.item.label, " ");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.item && ctx.item.items.length);
        } }, dependencies: [i1.NgClass, i1.NgForOf, i1.NgIf, i2.ImageComponent, i3.NgbCollapse], encapsulation: 2 });
}
export { DropdownSubmenuComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DropdownSubmenuComponent, [{
        type: Component,
        args: [{ selector: 'scrm-dropdown-submenu', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div>\n    <div class=\"dropdown-submenu-items-container\">\n        <a (click)=\"isCollapsed = !isCollapsed\"\n           class=\"dropdown-submenu-parent-button dropdown-item dropdown-toggle\"\n        >\n            <scrm-image *ngIf=\"item && item.icon\" [image]=\"item.icon\"></scrm-image>\n            {{item && item.label}}\n        </a>\n        <div *ngIf=\"item && item.items.length\" [ngbCollapse]=\"isCollapsed\">\n            <ul class=\"dropdown-submenu pl-2 mb-1\">\n\n                <li *ngFor=\"let subItem of item.items\" class=\"dropdown-submenu-item dropdown-item\">\n\n                    <a class=\"action-link dropdown-submenu-item-link\"\n                       [ngClass]=\"subItem && subItem.klass\"\n                       (click)=\"click(subItem)\">\n                        <scrm-image *ngIf=\"subItem.icon\" [image]=\"subItem.icon\"></scrm-image>\n                        {{subItem && subItem.label}}\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"dropdown-submenu-extra\">\n        <ng-content></ng-content>\n    </div>\n</div>\n" }]
    }], function () { return []; }, { item: [{
            type: Input
        }], itemClicked: [{
            type: Output,
            args: ['item-clicked']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tc3VibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9kcm9wZG93bi1zdWJtZW51L2Ryb3Bkb3duLXN1Ym1lbnUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvZHJvcGRvd24tc3VibWVudS9kcm9wZG93bi1zdWJtZW51LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7SUNNakUsZ0NBQXVFOzs7SUFBakMsd0NBQW1COzs7SUFXN0MsZ0NBQXFFOzs7SUFBcEMsdUNBQXNCOzs7O0lBTC9ELDZCQUFtRixZQUFBO0lBSTVFLG9PQUFTLGVBQUEsd0JBQWMsQ0FBQSxJQUFDO0lBQ3ZCLGtHQUFxRTtJQUNyRSxZQUNKO0lBQUEsaUJBQUksRUFBQTs7O0lBSkQsZUFBb0M7SUFBcEMsd0RBQW9DO0lBRXRCLGVBQWtCO0lBQWxCLHNDQUFrQjtJQUMvQixlQUNKO0lBREksK0RBQ0o7OztJQVZaLDhCQUFtRSxZQUFBO0lBRzNELDZFQVFLO0lBQ1QsaUJBQUssRUFBQTs7O0lBWjhCLGdEQUEyQjtJQUdsQyxlQUFhO0lBQWIsMkNBQWE7OztBRFRyRCxNQUthLHdCQUF3QjtJQUN4QixJQUFJLENBQTBCO0lBQ2YsV0FBVyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7SUFDbEUsV0FBVyxHQUFHLElBQUksQ0FBQztJQUVuQjtJQUNBLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELEtBQUssQ0FBQyxJQUF3QjtRQUUxQixJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNsQjtRQUVELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7a0ZBbEJRLHdCQUF3Qjs2REFBeEIsd0JBQXdCOztZQ1ByQywyQkFBSyxhQUFBLFdBQUE7WUFFTSxzSUFBb0M7WUFHbkMsdUZBQXVFO1lBQ3ZFLFlBQ0o7WUFBQSxpQkFBSTtZQUNKLHlFQWFNO1lBQ1YsaUJBQU07WUFDTiw4QkFBb0M7WUFDaEMsa0JBQXlCO1lBQzdCLGlCQUFNLEVBQUE7O1lBcEJlLGVBQXVCO1lBQXZCLGdEQUF1QjtZQUNwQyxlQUNKO1lBREksMkRBQ0o7WUFDTSxlQUErQjtZQUEvQix3REFBK0I7OztTRERoQyx3QkFBd0I7dUZBQXhCLHdCQUF3QjtjQUxwQyxTQUFTOzJCQUNJLHVCQUF1QjtzQ0FLeEIsSUFBSTtrQkFBWixLQUFLO1lBQ2tCLFdBQVc7a0JBQWxDLE1BQU07bUJBQUMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QW55QnV0dG9uSW50ZXJmYWNlLCBEcm9wZG93bkJ1dHRvbkludGVyZmFjZX0gZnJvbSAnY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLWRyb3Bkb3duLXN1Ym1lbnUnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9kcm9wZG93bi1zdWJtZW51LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duU3VibWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQElucHV0KCkgaXRlbTogRHJvcGRvd25CdXR0b25JbnRlcmZhY2U7XG4gICAgQE91dHB1dCgnaXRlbS1jbGlja2VkJykgaXRlbUNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gICAgaXNDb2xsYXBzZWQgPSB0cnVlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgY2xpY2soaXRlbTogQW55QnV0dG9uSW50ZXJmYWNlKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKGl0ZW0gJiYgaXRlbS5vbkNsaWNrKSB7XG4gICAgICAgICAgICBpdGVtLm9uQ2xpY2soKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXRlbUNsaWNrZWQuZW1pdCh0cnVlKTtcbiAgICB9XG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48ZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1zdWJtZW51LWl0ZW1zLWNvbnRhaW5lclwiPlxuICAgICAgICA8YSAoY2xpY2spPVwiaXNDb2xsYXBzZWQgPSAhaXNDb2xsYXBzZWRcIlxuICAgICAgICAgICBjbGFzcz1cImRyb3Bkb3duLXN1Ym1lbnUtcGFyZW50LWJ1dHRvbiBkcm9wZG93bi1pdGVtIGRyb3Bkb3duLXRvZ2dsZVwiXG4gICAgICAgID5cbiAgICAgICAgICAgIDxzY3JtLWltYWdlICpuZ0lmPVwiaXRlbSAmJiBpdGVtLmljb25cIiBbaW1hZ2VdPVwiaXRlbS5pY29uXCI+PC9zY3JtLWltYWdlPlxuICAgICAgICAgICAge3tpdGVtICYmIGl0ZW0ubGFiZWx9fVxuICAgICAgICA8L2E+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJpdGVtICYmIGl0ZW0uaXRlbXMubGVuZ3RoXCIgW25nYkNvbGxhcHNlXT1cImlzQ29sbGFwc2VkXCI+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJkcm9wZG93bi1zdWJtZW51IHBsLTIgbWItMVwiPlxuXG4gICAgICAgICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBzdWJJdGVtIG9mIGl0ZW0uaXRlbXNcIiBjbGFzcz1cImRyb3Bkb3duLXN1Ym1lbnUtaXRlbSBkcm9wZG93bi1pdGVtXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJhY3Rpb24tbGluayBkcm9wZG93bi1zdWJtZW51LWl0ZW0tbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInN1Ykl0ZW0gJiYgc3ViSXRlbS5rbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJjbGljayhzdWJJdGVtKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0taW1hZ2UgKm5nSWY9XCJzdWJJdGVtLmljb25cIiBbaW1hZ2VdPVwic3ViSXRlbS5pY29uXCI+PC9zY3JtLWltYWdlPlxuICAgICAgICAgICAgICAgICAgICAgICAge3tzdWJJdGVtICYmIHN1Ykl0ZW0ubGFiZWx9fVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1zdWJtZW51LWV4dHJhXCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuIl19