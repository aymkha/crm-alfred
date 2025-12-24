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
import { combineLatestWith } from 'rxjs';
import { map } from 'rxjs/operators';
import { PageSelection } from 'common';
import * as i0 from "@angular/core";
import * as i1 from "../../store/language/language.store";
import * as i2 from "@angular/common";
import * as i3 from "../image/image.component";
function PaginationComponent_div_0_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 7);
    i0.ɵɵlistener("click", function PaginationComponent_div_0_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r6.first()); });
    i0.ɵɵelement(1, "scrm-image", 8);
    i0.ɵɵelementEnd();
} }
function PaginationComponent_div_0_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 9);
    i0.ɵɵlistener("click", function PaginationComponent_div_0_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r8.previous()); });
    i0.ɵɵelement(1, "scrm-image", 10);
    i0.ɵɵelementEnd();
} }
function PaginationComponent_div_0_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 11);
    i0.ɵɵlistener("click", function PaginationComponent_div_0_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r10.next()); });
    i0.ɵɵelement(1, "scrm-image", 12);
    i0.ɵɵelementEnd();
} }
function PaginationComponent_div_0_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 13);
    i0.ɵɵlistener("click", function PaginationComponent_div_0_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r12.last()); });
    i0.ɵɵelement(1, "scrm-image", 14);
    i0.ɵɵelementEnd();
} }
const _c0 = function (a0, a1) { return { "hide-pagination-count": a0, "centre-pagination": a1 }; };
function PaginationComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, PaginationComponent_div_0_button_1_Template, 2, 0, "button", 2);
    i0.ɵɵtemplate(2, PaginationComponent_div_0_button_2_Template, 2, 0, "button", 3);
    i0.ɵɵelementStart(3, "span", 4);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, PaginationComponent_div_0_button_5_Template, 2, 0, "button", 5);
    i0.ɵɵtemplate(6, PaginationComponent_div_0_button_6_Template, 2, 0, "button", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const vm_r1 = ctx.ngIf;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.allowPagination);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.allowPagination);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(9, _c0, ctx_r0.displayResponsiveTable, !ctx_r0.allowPagination));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate4(" (", vm_r1.pageCount.pageFirst, " - ", vm_r1.pageCount.pageLast, " ", vm_r1.appStrings["LBL_LIST_OF"] || "", " ", vm_r1.pageCount.total, ") ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.allowPagination);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.allowPagination);
} }
class PaginationComponent {
    languageStore;
    allowPagination = true;
    state;
    displayResponsiveTable;
    appStrings$ = this.languageStore.appStrings$;
    vm$ = null;
    constructor(languageStore) {
        this.languageStore = languageStore;
    }
    ngOnInit() {
        const pageCount$ = this.state.getPaginationCount();
        this.vm$ = this.appStrings$.pipe(combineLatestWith(pageCount$), map(([appStrings, pageCount]) => ({ appStrings, pageCount })));
    }
    first() {
        this.state.changePage(PageSelection.FIRST);
    }
    previous() {
        this.state.changePage(PageSelection.PREVIOUS);
    }
    next() {
        this.state.changePage(PageSelection.NEXT);
    }
    last() {
        this.state.changePage(PageSelection.LAST);
    }
    static ɵfac = function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PaginationComponent, selectors: [["scrm-pagination"]], inputs: { allowPagination: "allowPagination", state: "state" }, decls: 2, vars: 3, consts: [["class", "bulk-action float-right", 4, "ngIf"], [1, "bulk-action", "float-right"], ["class", "pagination-button pagination-first", "aria-label", "Navigate to first page", 3, "click", 4, "ngIf"], ["class", "pagination-button pagination-previous", "aria-label", "Previous page", 3, "click", 4, "ngIf"], [1, "pagination-count", 3, "ngClass"], ["class", "pagination-button pagination-next", "aria-label", "Navigate to last page", 3, "click", 4, "ngIf"], ["class", "pagination-button pagination-last", "aria-label", "Next page", 3, "click", 4, "ngIf"], ["aria-label", "Navigate to first page", 1, "pagination-button", "pagination-first", 3, "click"], ["image", "paginate_first", 1, "sicon-2x", "pagination-icons"], ["aria-label", "Previous page", 1, "pagination-button", "pagination-previous", 3, "click"], ["image", "paginate_previous", 1, "sicon-2x", "pagination-icons"], ["aria-label", "Navigate to last page", 1, "pagination-button", "pagination-next", 3, "click"], ["image", "paginate_next", 1, "sicon-2x", "pagination-icons"], ["aria-label", "Next page", 1, "pagination-button", "pagination-last", 3, "click"], ["image", "paginate_last", 1, "sicon-2x", "pagination-icons"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, PaginationComponent_div_0_Template, 7, 12, "div", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.vm$));
        } }, dependencies: [i2.NgClass, i2.NgIf, i3.ImageComponent, i2.AsyncPipe], encapsulation: 2 });
}
export { PaginationComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginationComponent, [{
        type: Component,
        args: [{ selector: 'scrm-pagination', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div class=\"bulk-action float-right\" *ngIf=\"(vm$ | async) as vm\">\n    <button *ngIf=\"allowPagination\" class=\"pagination-button pagination-first\"\n            aria-label=\"Navigate to first page\"\n            (click)=\"first()\">\n        <scrm-image class=\"sicon-2x pagination-icons\" image=\"paginate_first\">\n        </scrm-image>\n    </button>\n    <button *ngIf=\"allowPagination\" class=\"pagination-button pagination-previous\"\n            aria-label=\"Previous page\"\n            (click)=\"previous()\">\n        <scrm-image class=\"sicon-2x pagination-icons\" image=\"paginate_previous\">\n        </scrm-image>\n    </button>\n    <span class=\"pagination-count\"\n          [ngClass]=\"{\n            'hide-pagination-count': displayResponsiveTable, 'centre-pagination': !allowPagination\n          }\"\n    >\n      ({{vm.pageCount.pageFirst}}\n        - {{vm.pageCount.pageLast}} {{vm.appStrings['LBL_LIST_OF'] || ''}} {{vm.pageCount.total}})\n    </span>\n    <button *ngIf=\"allowPagination\" class=\"pagination-button pagination-next\"\n            aria-label=\"Navigate to last page\"\n            (click)=\"next()\">\n        <scrm-image class=\"sicon-2x pagination-icons\" image=\"paginate_next\">\n        </scrm-image>\n    </button>\n    <button *ngIf=\"allowPagination\" class=\"pagination-button pagination-last\"\n            aria-label=\"Next page\"\n            (click)=\"last()\">\n        <scrm-image class=\"sicon-2x pagination-icons\" image=\"paginate_last\">\n        </scrm-image>\n    </button>\n</div>\n" }]
    }], function () { return [{ type: i1.LanguageStore }]; }, { allowPagination: [{
            type: Input
        }], state: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMsaUJBQWlCLEVBQWEsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ25DLE9BQU8sRUFBQyxhQUFhLEVBQXdDLE1BQU0sUUFBUSxDQUFDOzs7Ozs7O0lDRHhFLGlDQUUwQjtJQUFsQiwwS0FBUyxlQUFBLGNBQU8sQ0FBQSxJQUFDO0lBQ3JCLGdDQUNhO0lBQ2pCLGlCQUFTOzs7O0lBQ1QsaUNBRTZCO0lBQXJCLDBLQUFTLGVBQUEsaUJBQVUsQ0FBQSxJQUFDO0lBQ3hCLGlDQUNhO0lBQ2pCLGlCQUFTOzs7O0lBU1Qsa0NBRXlCO0lBQWpCLDRLQUFTLGVBQUEsY0FBTSxDQUFBLElBQUM7SUFDcEIsaUNBQ2E7SUFDakIsaUJBQVM7Ozs7SUFDVCxrQ0FFeUI7SUFBakIsNEtBQVMsZUFBQSxjQUFNLENBQUEsSUFBQztJQUNwQixpQ0FDYTtJQUNqQixpQkFBUzs7OztJQWhDYiw4QkFBaUU7SUFDN0QsZ0ZBS1M7SUFDVCxnRkFLUztJQUNULCtCQUlDO0lBQ0MsWUFFRjtJQUFBLGlCQUFPO0lBQ1AsZ0ZBS1M7SUFDVCxnRkFLUztJQUNiLGlCQUFNOzs7O0lBaENPLGVBQXFCO0lBQXJCLDZDQUFxQjtJQU1yQixlQUFxQjtJQUFyQiw2Q0FBcUI7SUFPeEIsZUFFRTtJQUZGLDRHQUVFO0lBRU4sZUFFRjtJQUZFLHFLQUVGO0lBQ1MsZUFBcUI7SUFBckIsNkNBQXFCO0lBTXJCLGVBQXFCO0lBQXJCLDZDQUFxQjs7QURqQmxDLE1BSWEsbUJBQW1CO0lBU047SUFQYixlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLEtBQUssQ0FBdUI7SUFDckMsc0JBQXNCLENBQU07SUFFNUIsV0FBVyxHQUFrQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUM1RSxHQUFHLEdBQW9DLElBQUksQ0FBQztJQUU1QyxZQUFzQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUNsRCxDQUFDO0lBRUQsUUFBUTtRQUNKLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUVuRCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUM1QixpQkFBaUIsQ0FBQyxVQUFVLENBQUMsRUFDN0IsR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUF1QyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUMsVUFBVSxFQUFFLFNBQVMsRUFBQyxDQUFDLENBQUMsQ0FDcEcsQ0FBQztJQUNOLENBQUM7SUFFRCxLQUFLO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxJQUFJO1FBQ0EsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxJQUFJO1FBQ0EsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlDLENBQUM7NkVBbkNRLG1CQUFtQjs2REFBbkIsbUJBQW1CO1lDZGhDLHFFQWlDTTs7O1lBakNnQyxvREFBb0I7OztTRGM3QyxtQkFBbUI7dUZBQW5CLG1CQUFtQjtjQUovQixTQUFTOzJCQUNJLGlCQUFpQjtnRUFLbEIsZUFBZTtrQkFBdkIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtjb21iaW5lTGF0ZXN0V2l0aCwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtQYWdlU2VsZWN0aW9uLCBQYWdpbmF0aW9uQ291bnQsIFBhZ2luYXRpb25EYXRhU291cmNlfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlLCBMYW5ndWFnZVN0cmluZ01hcH0gZnJvbSAnLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2luYXRpb25WaWV3TW9kZWwge1xuICAgIGFwcFN0cmluZ3M6IExhbmd1YWdlU3RyaW5nTWFwO1xuICAgIHBhZ2VDb3VudDogUGFnaW5hdGlvbkNvdW50O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tcGFnaW5hdGlvbicsXG4gICAgdGVtcGxhdGVVcmw6ICdwYWdpbmF0aW9uLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIGFsbG93UGFnaW5hdGlvbiA9IHRydWU7XG4gICAgQElucHV0KCkgc3RhdGU6IFBhZ2luYXRpb25EYXRhU291cmNlO1xuICAgIGRpc3BsYXlSZXNwb25zaXZlVGFibGU6IGFueTtcblxuICAgIGFwcFN0cmluZ3MkOiBPYnNlcnZhYmxlPExhbmd1YWdlU3RyaW5nTWFwPiA9IHRoaXMubGFuZ3VhZ2VTdG9yZS5hcHBTdHJpbmdzJDtcbiAgICB2bSQ6IE9ic2VydmFibGU8UGFnaW5hdGlvblZpZXdNb2RlbD4gPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGxhbmd1YWdlU3RvcmU6IExhbmd1YWdlU3RvcmUpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcGFnZUNvdW50JCA9IHRoaXMuc3RhdGUuZ2V0UGFnaW5hdGlvbkNvdW50KCk7XG5cbiAgICAgICAgdGhpcy52bSQgPSB0aGlzLmFwcFN0cmluZ3MkLnBpcGUoXG4gICAgICAgICAgICBjb21iaW5lTGF0ZXN0V2l0aChwYWdlQ291bnQkKSxcbiAgICAgICAgICAgIG1hcCgoW2FwcFN0cmluZ3MsIHBhZ2VDb3VudF06IFtMYW5ndWFnZVN0cmluZ01hcCwgUGFnaW5hdGlvbkNvdW50XSkgPT4gKHthcHBTdHJpbmdzLCBwYWdlQ291bnR9KSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmaXJzdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5jaGFuZ2VQYWdlKFBhZ2VTZWxlY3Rpb24uRklSU1QpO1xuICAgIH1cblxuICAgIHByZXZpb3VzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXRlLmNoYW5nZVBhZ2UoUGFnZVNlbGVjdGlvbi5QUkVWSU9VUyk7XG4gICAgfVxuXG4gICAgbmV4dCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5jaGFuZ2VQYWdlKFBhZ2VTZWxlY3Rpb24uTkVYVCk7XG4gICAgfVxuXG4gICAgbGFzdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5jaGFuZ2VQYWdlKFBhZ2VTZWxlY3Rpb24uTEFTVCk7XG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPGRpdiBjbGFzcz1cImJ1bGstYWN0aW9uIGZsb2F0LXJpZ2h0XCIgKm5nSWY9XCIodm0kIHwgYXN5bmMpIGFzIHZtXCI+XG4gICAgPGJ1dHRvbiAqbmdJZj1cImFsbG93UGFnaW5hdGlvblwiIGNsYXNzPVwicGFnaW5hdGlvbi1idXR0b24gcGFnaW5hdGlvbi1maXJzdFwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiTmF2aWdhdGUgdG8gZmlyc3QgcGFnZVwiXG4gICAgICAgICAgICAoY2xpY2spPVwiZmlyc3QoKVwiPlxuICAgICAgICA8c2NybS1pbWFnZSBjbGFzcz1cInNpY29uLTJ4IHBhZ2luYXRpb24taWNvbnNcIiBpbWFnZT1cInBhZ2luYXRlX2ZpcnN0XCI+XG4gICAgICAgIDwvc2NybS1pbWFnZT5cbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uICpuZ0lmPVwiYWxsb3dQYWdpbmF0aW9uXCIgY2xhc3M9XCJwYWdpbmF0aW9uLWJ1dHRvbiBwYWdpbmF0aW9uLXByZXZpb3VzXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJQcmV2aW91cyBwYWdlXCJcbiAgICAgICAgICAgIChjbGljayk9XCJwcmV2aW91cygpXCI+XG4gICAgICAgIDxzY3JtLWltYWdlIGNsYXNzPVwic2ljb24tMnggcGFnaW5hdGlvbi1pY29uc1wiIGltYWdlPVwicGFnaW5hdGVfcHJldmlvdXNcIj5cbiAgICAgICAgPC9zY3JtLWltYWdlPlxuICAgIDwvYnV0dG9uPlxuICAgIDxzcGFuIGNsYXNzPVwicGFnaW5hdGlvbi1jb3VudFwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICAgJ2hpZGUtcGFnaW5hdGlvbi1jb3VudCc6IGRpc3BsYXlSZXNwb25zaXZlVGFibGUsICdjZW50cmUtcGFnaW5hdGlvbic6ICFhbGxvd1BhZ2luYXRpb25cbiAgICAgICAgICB9XCJcbiAgICA+XG4gICAgICAoe3t2bS5wYWdlQ291bnQucGFnZUZpcnN0fX1cbiAgICAgICAgLSB7e3ZtLnBhZ2VDb3VudC5wYWdlTGFzdH19IHt7dm0uYXBwU3RyaW5nc1snTEJMX0xJU1RfT0YnXSB8fCAnJ319IHt7dm0ucGFnZUNvdW50LnRvdGFsfX0pXG4gICAgPC9zcGFuPlxuICAgIDxidXR0b24gKm5nSWY9XCJhbGxvd1BhZ2luYXRpb25cIiBjbGFzcz1cInBhZ2luYXRpb24tYnV0dG9uIHBhZ2luYXRpb24tbmV4dFwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiTmF2aWdhdGUgdG8gbGFzdCBwYWdlXCJcbiAgICAgICAgICAgIChjbGljayk9XCJuZXh0KClcIj5cbiAgICAgICAgPHNjcm0taW1hZ2UgY2xhc3M9XCJzaWNvbi0yeCBwYWdpbmF0aW9uLWljb25zXCIgaW1hZ2U9XCJwYWdpbmF0ZV9uZXh0XCI+XG4gICAgICAgIDwvc2NybS1pbWFnZT5cbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uICpuZ0lmPVwiYWxsb3dQYWdpbmF0aW9uXCIgY2xhc3M9XCJwYWdpbmF0aW9uLWJ1dHRvbiBwYWdpbmF0aW9uLWxhc3RcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk5leHQgcGFnZVwiXG4gICAgICAgICAgICAoY2xpY2spPVwibGFzdCgpXCI+XG4gICAgICAgIDxzY3JtLWltYWdlIGNsYXNzPVwic2ljb24tMnggcGFnaW5hdGlvbi1pY29uc1wiIGltYWdlPVwicGFnaW5hdGVfbGFzdFwiPlxuICAgICAgICA8L3Njcm0taW1hZ2U+XG4gICAgPC9idXR0b24+XG48L2Rpdj5cbiJdfQ==