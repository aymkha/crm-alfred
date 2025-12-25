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
import { combineLatestWith, of } from 'rxjs';
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
    appStrings$;
    vm$ = null;
    constructor(languageStore) {
        this.languageStore = languageStore;
        // Initialize streams after DI has provided the language store
        this.appStrings$ = this.languageStore?.appStrings$ ?? of({});
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMsaUJBQWlCLEVBQWMsRUFBRSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuQyxPQUFPLEVBQUMsYUFBYSxFQUF3QyxNQUFNLFFBQVEsQ0FBQzs7Ozs7OztJQ0R4RSxpQ0FFMEI7SUFBbEIsMEtBQVMsZUFBQSxjQUFPLENBQUEsSUFBQztJQUNyQixnQ0FDYTtJQUNqQixpQkFBUzs7OztJQUNULGlDQUU2QjtJQUFyQiwwS0FBUyxlQUFBLGlCQUFVLENBQUEsSUFBQztJQUN4QixpQ0FDYTtJQUNqQixpQkFBUzs7OztJQVNULGtDQUV5QjtJQUFqQiw0S0FBUyxlQUFBLGNBQU0sQ0FBQSxJQUFDO0lBQ3BCLGlDQUNhO0lBQ2pCLGlCQUFTOzs7O0lBQ1Qsa0NBRXlCO0lBQWpCLDRLQUFTLGVBQUEsY0FBTSxDQUFBLElBQUM7SUFDcEIsaUNBQ2E7SUFDakIsaUJBQVM7Ozs7SUFoQ2IsOEJBQWlFO0lBQzdELGdGQUtTO0lBQ1QsZ0ZBS1M7SUFDVCwrQkFJQztJQUNDLFlBRUY7SUFBQSxpQkFBTztJQUNQLGdGQUtTO0lBQ1QsZ0ZBS1M7SUFDYixpQkFBTTs7OztJQWhDTyxlQUFxQjtJQUFyQiw2Q0FBcUI7SUFNckIsZUFBcUI7SUFBckIsNkNBQXFCO0lBT3hCLGVBRUU7SUFGRiw0R0FFRTtJQUVOLGVBRUY7SUFGRSxxS0FFRjtJQUNTLGVBQXFCO0lBQXJCLDZDQUFxQjtJQU1yQixlQUFxQjtJQUFyQiw2Q0FBcUI7O0FEakJsQyxNQUlhLG1CQUFtQjtJQVNOO0lBUGIsZUFBZSxHQUFHLElBQUksQ0FBQztJQUN2QixLQUFLLENBQXVCO0lBQ3JDLHNCQUFzQixDQUFNO0lBRTVCLFdBQVcsQ0FBZ0M7SUFDM0MsR0FBRyxHQUFvQyxJQUFJLENBQUM7SUFFNUMsWUFBc0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDOUMsOERBQThEO1FBQzlELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxXQUFXLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCxRQUFRO1FBQ0osTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBRW5ELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQzVCLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxFQUM3QixHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQXVDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBQyxVQUFVLEVBQUUsU0FBUyxFQUFDLENBQUMsQ0FBQyxDQUNwRyxDQUFDO0lBQ04sQ0FBQztJQUVELEtBQUs7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELElBQUk7UUFDQSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELElBQUk7UUFDQSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs2RUFyQ1EsbUJBQW1COzZEQUFuQixtQkFBbUI7WUNkaEMscUVBaUNNOzs7WUFqQ2dDLG9EQUFvQjs7O1NEYzdDLG1CQUFtQjt1RkFBbkIsbUJBQW1CO2NBSi9CLFNBQVM7MkJBQ0ksaUJBQWlCO2dFQUtsQixlQUFlO2tCQUF2QixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2NvbWJpbmVMYXRlc3RXaXRoLCBPYnNlcnZhYmxlLCBvZn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtQYWdlU2VsZWN0aW9uLCBQYWdpbmF0aW9uQ291bnQsIFBhZ2luYXRpb25EYXRhU291cmNlfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlLCBMYW5ndWFnZVN0cmluZ01hcH0gZnJvbSAnLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2luYXRpb25WaWV3TW9kZWwge1xuICAgIGFwcFN0cmluZ3M6IExhbmd1YWdlU3RyaW5nTWFwO1xuICAgIHBhZ2VDb3VudDogUGFnaW5hdGlvbkNvdW50O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tcGFnaW5hdGlvbicsXG4gICAgdGVtcGxhdGVVcmw6ICdwYWdpbmF0aW9uLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIGFsbG93UGFnaW5hdGlvbiA9IHRydWU7XG4gICAgQElucHV0KCkgc3RhdGU6IFBhZ2luYXRpb25EYXRhU291cmNlO1xuICAgIGRpc3BsYXlSZXNwb25zaXZlVGFibGU6IGFueTtcblxuICAgIGFwcFN0cmluZ3MkOiBPYnNlcnZhYmxlPExhbmd1YWdlU3RyaW5nTWFwPjtcbiAgICB2bSQ6IE9ic2VydmFibGU8UGFnaW5hdGlvblZpZXdNb2RlbD4gPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGxhbmd1YWdlU3RvcmU6IExhbmd1YWdlU3RvcmUpIHtcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBzdHJlYW1zIGFmdGVyIERJIGhhcyBwcm92aWRlZCB0aGUgbGFuZ3VhZ2Ugc3RvcmVcbiAgICAgICAgdGhpcy5hcHBTdHJpbmdzJCA9IHRoaXMubGFuZ3VhZ2VTdG9yZT8uYXBwU3RyaW5ncyQgPz8gb2Yoe30pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBwYWdlQ291bnQkID0gdGhpcy5zdGF0ZS5nZXRQYWdpbmF0aW9uQ291bnQoKTtcblxuICAgICAgICB0aGlzLnZtJCA9IHRoaXMuYXBwU3RyaW5ncyQucGlwZShcbiAgICAgICAgICAgIGNvbWJpbmVMYXRlc3RXaXRoKHBhZ2VDb3VudCQpLFxuICAgICAgICAgICAgbWFwKChbYXBwU3RyaW5ncywgcGFnZUNvdW50XTogW0xhbmd1YWdlU3RyaW5nTWFwLCBQYWdpbmF0aW9uQ291bnRdKSA9PiAoe2FwcFN0cmluZ3MsIHBhZ2VDb3VudH0pKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZpcnN0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXRlLmNoYW5nZVBhZ2UoUGFnZVNlbGVjdGlvbi5GSVJTVCk7XG4gICAgfVxuXG4gICAgcHJldmlvdXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhdGUuY2hhbmdlUGFnZShQYWdlU2VsZWN0aW9uLlBSRVZJT1VTKTtcbiAgICB9XG5cbiAgICBuZXh0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXRlLmNoYW5nZVBhZ2UoUGFnZVNlbGVjdGlvbi5ORVhUKTtcbiAgICB9XG5cbiAgICBsYXN0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXRlLmNoYW5nZVBhZ2UoUGFnZVNlbGVjdGlvbi5MQVNUKTtcbiAgICB9XG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48ZGl2IGNsYXNzPVwiYnVsay1hY3Rpb24gZmxvYXQtcmlnaHRcIiAqbmdJZj1cIih2bSQgfCBhc3luYykgYXMgdm1cIj5cbiAgICA8YnV0dG9uICpuZ0lmPVwiYWxsb3dQYWdpbmF0aW9uXCIgY2xhc3M9XCJwYWdpbmF0aW9uLWJ1dHRvbiBwYWdpbmF0aW9uLWZpcnN0XCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJOYXZpZ2F0ZSB0byBmaXJzdCBwYWdlXCJcbiAgICAgICAgICAgIChjbGljayk9XCJmaXJzdCgpXCI+XG4gICAgICAgIDxzY3JtLWltYWdlIGNsYXNzPVwic2ljb24tMnggcGFnaW5hdGlvbi1pY29uc1wiIGltYWdlPVwicGFnaW5hdGVfZmlyc3RcIj5cbiAgICAgICAgPC9zY3JtLWltYWdlPlxuICAgIDwvYnV0dG9uPlxuICAgIDxidXR0b24gKm5nSWY9XCJhbGxvd1BhZ2luYXRpb25cIiBjbGFzcz1cInBhZ2luYXRpb24tYnV0dG9uIHBhZ2luYXRpb24tcHJldmlvdXNcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlByZXZpb3VzIHBhZ2VcIlxuICAgICAgICAgICAgKGNsaWNrKT1cInByZXZpb3VzKClcIj5cbiAgICAgICAgPHNjcm0taW1hZ2UgY2xhc3M9XCJzaWNvbi0yeCBwYWdpbmF0aW9uLWljb25zXCIgaW1hZ2U9XCJwYWdpbmF0ZV9wcmV2aW91c1wiPlxuICAgICAgICA8L3Njcm0taW1hZ2U+XG4gICAgPC9idXR0b24+XG4gICAgPHNwYW4gY2xhc3M9XCJwYWdpbmF0aW9uLWNvdW50XCJcbiAgICAgICAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgICAnaGlkZS1wYWdpbmF0aW9uLWNvdW50JzogZGlzcGxheVJlc3BvbnNpdmVUYWJsZSwgJ2NlbnRyZS1wYWdpbmF0aW9uJzogIWFsbG93UGFnaW5hdGlvblxuICAgICAgICAgIH1cIlxuICAgID5cbiAgICAgICh7e3ZtLnBhZ2VDb3VudC5wYWdlRmlyc3R9fVxuICAgICAgICAtIHt7dm0ucGFnZUNvdW50LnBhZ2VMYXN0fX0ge3t2bS5hcHBTdHJpbmdzWydMQkxfTElTVF9PRiddIHx8ICcnfX0ge3t2bS5wYWdlQ291bnQudG90YWx9fSlcbiAgICA8L3NwYW4+XG4gICAgPGJ1dHRvbiAqbmdJZj1cImFsbG93UGFnaW5hdGlvblwiIGNsYXNzPVwicGFnaW5hdGlvbi1idXR0b24gcGFnaW5hdGlvbi1uZXh0XCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJOYXZpZ2F0ZSB0byBsYXN0IHBhZ2VcIlxuICAgICAgICAgICAgKGNsaWNrKT1cIm5leHQoKVwiPlxuICAgICAgICA8c2NybS1pbWFnZSBjbGFzcz1cInNpY29uLTJ4IHBhZ2luYXRpb24taWNvbnNcIiBpbWFnZT1cInBhZ2luYXRlX25leHRcIj5cbiAgICAgICAgPC9zY3JtLWltYWdlPlxuICAgIDwvYnV0dG9uPlxuICAgIDxidXR0b24gKm5nSWY9XCJhbGxvd1BhZ2luYXRpb25cIiBjbGFzcz1cInBhZ2luYXRpb24tYnV0dG9uIHBhZ2luYXRpb24tbGFzdFwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiTmV4dCBwYWdlXCJcbiAgICAgICAgICAgIChjbGljayk9XCJsYXN0KClcIj5cbiAgICAgICAgPHNjcm0taW1hZ2UgY2xhc3M9XCJzaWNvbi0yeCBwYWdpbmF0aW9uLWljb25zXCIgaW1hZ2U9XCJwYWdpbmF0ZV9sYXN0XCI+XG4gICAgICAgIDwvc2NybS1pbWFnZT5cbiAgICA8L2J1dHRvbj5cbjwvZGl2PlxuIl19