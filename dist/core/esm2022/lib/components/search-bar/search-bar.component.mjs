/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2023 SalesAgility Ltd.
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
import { Component, ViewChild } from '@angular/core';
import { of } from 'rxjs';
import { distinctUntilChanged, filter, map, tap } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "../../services/navigation/global-search/global-search.service";
import * as i2 from "../../store/language/language.store";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
import * as i5 from "../image/image.component";
const _c0 = ["searchInput"];
const _c1 = function (a0) { return { "dropdown-active": a0 }; };
function SearchBarComponent_ng_container_0_ul_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ul", 8)(1, "li", 9)(2, "a", 10);
    i0.ɵɵlistener("click", function SearchBarComponent_ng_container_0_ul_5_Template_a_click_2_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r6.search()); });
    i0.ɵɵelement(3, "scrm-image", 11);
    i0.ɵɵelementStart(4, "span", 12);
    i0.ɵɵtext(5, "\"");
    i0.ɵɵelementStart(6, "strong");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "lowercase");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const vm_r1 = i0.ɵɵnextContext().ngIf;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c1, ctx_r3.searchWord));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r3.searchWord);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("\" ", i0.ɵɵpipeBind1(9, 3, vm_r1.appStrings["LBL_IN_EVERYWHERE"]), "");
} }
function SearchBarComponent_ng_container_0_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 13);
    i0.ɵɵlistener("click", function SearchBarComponent_ng_container_0_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r9.search()); });
    i0.ɵɵelement(1, "scrm-image", 11);
    i0.ɵɵelementEnd();
} }
function SearchBarComponent_ng_container_0_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 13);
    i0.ɵɵlistener("click", function SearchBarComponent_ng_container_0_button_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r11.clearSearchTerm()); });
    i0.ɵɵelement(1, "scrm-image", 14);
    i0.ɵɵelementEnd();
} }
const _c2 = function (a0) { return { "search-focused": a0 }; };
function SearchBarComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "form", 1)(2, "div", 2)(3, "input", 3, 4);
    i0.ɵɵlistener("focus", function SearchBarComponent_ng_container_0_Template_input_focus_3_listener() { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r13.onFocus()); })("blur", function SearchBarComponent_ng_container_0_Template_input_blur_3_listener() { i0.ɵɵrestoreView(_r14); const ctx_r15 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r15.onBlur()); })("keydown.enter", function SearchBarComponent_ng_container_0_Template_input_keydown_enter_3_listener() { i0.ɵɵrestoreView(_r14); const ctx_r16 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r16.search()); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, SearchBarComponent_ng_container_0_ul_5_Template, 10, 7, "ul", 5);
    i0.ɵɵelementStart(6, "div", 6);
    i0.ɵɵtemplate(7, SearchBarComponent_ng_container_0_button_7_Template, 2, 0, "button", 7);
    i0.ɵɵtemplate(8, SearchBarComponent_ng_container_0_button_8_Template, 2, 0, "button", 7);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const vm_r1 = ctx.ngIf;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formGroup", ctx_r0.searchForm);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c2, ctx_r0.isFocused));
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate1("placeholder", "", vm_r1.appStrings["LBL_SEARCH"] || "", "...");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.searchWord.length && ctx_r0.hasSearchTyped);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r0.hasSearchTyped);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.hasSearchTyped);
} }
class SearchBarComponent {
    globalSearch;
    languageStore;
    searchInput;
    searchWord = '';
    searchForm;
    searchResults = [];
    isFocused = false;
    hasSearchTyped = false;
    subs = [];
    languages$ = of({});
    vm$ = this.languages$.pipe(map(language => {
        return {
            appStrings: language.appStrings || {}
        };
    }));
    constructor(globalSearch, languageStore) {
        this.globalSearch = globalSearch;
        this.languageStore = languageStore;
        this.languages$ = languageStore?.vm$ ?? of({});
    }
    ngOnInit() {
        this.searchForm = new FormGroup({
            searchTerm: new FormControl('')
        });
        this.subs.push(this.searchForm.get('searchTerm').valueChanges
            .pipe(tap(data => {
            if (data) {
                this.hasSearchTyped = true;
            }
            else {
                this.hasSearchTyped = false;
            }
        }), distinctUntilChanged(), filter(searchString => searchString?.length > 1)).subscribe((term) => this.searchWord = term));
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    search() {
        if (this.searchWord.length) {
            this.globalSearch.navigateToSearch(this.searchWord).finally(() => {
                this.clearSearchTerm();
                this.searchInput.nativeElement.blur();
            });
        }
    }
    clearSearchTerm() {
        this.searchForm.reset();
        this.hasSearchTyped = false;
        this.searchWord = '';
    }
    onFocus() {
        this.isFocused = true;
        const initialValue = this.searchForm?.get('searchTerm')?.value ?? '';
        if (initialValue.length > 2) {
            this.hasSearchTyped = true;
            this.searchWord = initialValue;
        }
    }
    onBlur() {
        setTimeout(() => {
            this.isFocused = false;
            this.hasSearchTyped = false;
        }, 200);
    }
    static ɵfac = function SearchBarComponent_Factory(t) { return new (t || SearchBarComponent)(i0.ɵɵdirectiveInject(i1.GlobalSearch), i0.ɵɵdirectiveInject(i2.LanguageStore)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SearchBarComponent, selectors: [["scrm-search-bar"]], viewQuery: function SearchBarComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.searchInput = _t.first);
        } }, decls: 2, vars: 3, consts: [[4, "ngIf"], ["name", "global-search", 1, "global-search", 3, "formGroup"], [1, "input-group", "dropdown", 3, "ngClass"], ["formControlName", "searchTerm", "type", "text", "name", "global-search-term", "aria-label", "Search", "data-toggle", "dropdown", "autocomplete", "off", "required", "", 1, "form-control", "dropdown-toggle", "global-search-term", 3, "placeholder", "focus", "blur", "keydown.enter"], ["searchInput", ""], ["class", "dropdown-menu global-search-dropdown", 4, "ngIf"], [1, "input-group-append"], ["class", "btn btn-default search-button d-flex align-items-center", "aria-label", "Search", "scrm-button-loading", "", 3, "click", 4, "ngIf"], [1, "dropdown-menu", "global-search-dropdown"], [1, "dropdown-item-block", 3, "ngClass"], [1, "dropdown-item", 3, "click"], ["image", "search", 1, "search-icon", "sicon"], [1, "dropdown-text", "ml-2"], ["aria-label", "Search", "scrm-button-loading", "", 1, "btn", "btn-default", "search-button", "d-flex", "align-items-center", 3, "click"], ["image", "cross", 1, "search-icon", "sicon"]], template: function SearchBarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SearchBarComponent_ng_container_0_Template, 9, 8, "ng-container", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.vm$));
        } }, dependencies: [i3.NgClass, i3.NgIf, i4.ɵNgNoValidate, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgControlStatusGroup, i4.RequiredValidator, i5.ImageComponent, i4.FormGroupDirective, i4.FormControlName, i3.AsyncPipe, i3.LowerCasePipe], encapsulation: 2 });
}
export { SearchBarComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SearchBarComponent, [{
        type: Component,
        args: [{ selector: 'scrm-search-bar', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2023 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n\n<ng-container *ngIf=\"(vm$ | async) as vm\">\n    <form name=\"global-search\" class=\"global-search\" [formGroup]=\"searchForm\">\n        <div class=\"input-group dropdown\" [ngClass]=\"{'search-focused': isFocused}\">\n            <input\n                formControlName=\"searchTerm\"\n                type=\"text\"\n                name=\"global-search-term\"\n                class=\"form-control dropdown-toggle global-search-term\"\n                placeholder=\"{{vm.appStrings['LBL_SEARCH'] || ''}}...\"\n                aria-label=\"Search\"\n                (focus)=\"onFocus()\"\n                (blur)=\"onBlur()\"\n                (keydown.enter)=\"search()\"\n                data-toggle=\"dropdown\"\n                autocomplete=\"off\"\n                #searchInput\n                required>\n            <ul class=\"dropdown-menu global-search-dropdown\" *ngIf=\"searchWord.length && hasSearchTyped\">\n                <li class=\"dropdown-item-block\" [ngClass]=\"{'dropdown-active': searchWord}\">\n                    <a class=\"dropdown-item\" (click)=\"search()\">\n                        <scrm-image class=\"search-icon sicon\" image=\"search\"></scrm-image>\n                        <span class=\"dropdown-text ml-2\">\"<strong>{{searchWord}}</strong>\" {{vm.appStrings['LBL_IN_EVERYWHERE'] | lowercase}}</span>\n                    </a>\n                </li>\n            </ul>\n\n            <div class=\"input-group-append\">\n                <button *ngIf=\"!hasSearchTyped\" class=\"btn btn-default search-button d-flex align-items-center\"\n                        aria-label=\"Search\"\n                        scrm-button-loading\n                        (click)=\"search()\">\n                    <scrm-image class=\"search-icon sicon\" image=\"search\"></scrm-image>\n                </button>\n\n                <button *ngIf=\"hasSearchTyped\" class=\"btn btn-default search-button d-flex align-items-center\"\n                        aria-label=\"Search\"\n                        scrm-button-loading\n                        (click)=\"clearSearchTerm()\">\n                    <scrm-image class=\"search-icon sicon\" image=\"cross\"></scrm-image>\n                </button>\n\n            </div>\n        </div>\n    </form>\n</ng-container>\n\n" }]
    }], function () { return [{ type: i1.GlobalSearch }, { type: i2.LanguageStore }]; }, { searchInput: [{
            type: ViewChild,
            args: ['searchInput']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9zZWFyY2gtYmFyL3NlYXJjaC1iYXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvc2VhcmNoLWJhci9zZWFyY2gtYmFyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFpQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFHbEYsT0FBTyxFQUFhLEVBQUUsRUFBZSxNQUFNLE1BQU0sQ0FBQztBQUNsRCxPQUFPLEVBQWUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRixPQUFPLEVBQUMsV0FBVyxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7OztJQ2MxQyw2QkFBNkYsWUFBQSxZQUFBO0lBRTVELHlLQUFTLGVBQUEsZUFBUSxDQUFBLElBQUM7SUFDdkMsaUNBQWtFO0lBQ2xFLGdDQUFpQztJQUFBLGtCQUFDO0lBQUEsOEJBQVE7SUFBQSxZQUFjO0lBQUEsaUJBQVM7SUFBQSxZQUFvRDs7SUFBQSxpQkFBTyxFQUFBLEVBQUEsRUFBQTs7OztJQUhwRyxlQUEyQztJQUEzQyx1RUFBMkM7SUFHekIsZUFBYztJQUFkLHVDQUFjO0lBQVMsZUFBb0Q7SUFBcEQsNkZBQW9EOzs7O0lBTTdILGtDQUcyQjtJQUFuQixtTEFBUyxlQUFBLGVBQVEsQ0FBQSxJQUFDO0lBQ3RCLGlDQUFrRTtJQUN0RSxpQkFBUzs7OztJQUVULGtDQUdvQztJQUE1QixvTEFBUyxlQUFBLHlCQUFpQixDQUFBLElBQUM7SUFD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QyxJQUFJLEVBQUUsQ0FBQztZQUMxQyxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVELGVBQWU7UUFDWCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxPQUFPO1FBQ0gsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUUsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNyRSxJQUFJLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1lBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsWUFBWSxDQUFDO1NBQ2xDO0lBQ0wsQ0FBQztJQUVELE1BQU07UUFDRixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDaEMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQzs0RUE5RVEsa0JBQWtCOzZEQUFsQixrQkFBa0I7Ozs7OztZQ1QvQixxRkE0Q2U7OztZQTVDQSxvREFBb0I7OztTRFN0QixrQkFBa0I7dUZBQWxCLGtCQUFrQjtjQUo5QixTQUFTOzJCQUNJLGlCQUFpQjsyRkFLRCxXQUFXO2tCQUFwQyxTQUFTO21CQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMyBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkRlc3Ryb3ksIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7R2xvYmFsU2VhcmNofSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL2dsb2JhbC1zZWFyY2gvZ2xvYmFsLXNlYXJjaC5zZXJ2aWNlJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZSwgTGFuZ3VhZ2VTdHJpbmdzfSBmcm9tICcuLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge09ic2VydmFibGUsIG9mLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcCwgdGFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0Zvcm1Db250cm9sLCBGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLXNlYXJjaC1iYXInLFxuICAgIHRlbXBsYXRlVXJsOiAnc2VhcmNoLWJhci5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaEJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIEBWaWV3Q2hpbGQoJ3NlYXJjaElucHV0Jykgc2VhcmNoSW5wdXQ6IEVsZW1lbnRSZWY7XG5cbiAgICBzZWFyY2hXb3JkOiBzdHJpbmcgPSAnJztcbiAgICBzZWFyY2hGb3JtOiBGb3JtR3JvdXA7XG4gICAgc2VhcmNoUmVzdWx0czogYW55W10gPSBbXTtcblxuICAgIGlzRm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGhhc1NlYXJjaFR5cGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwcm90ZWN0ZWQgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgICBsYW5ndWFnZXMkOiBPYnNlcnZhYmxlPExhbmd1YWdlU3RyaW5ncz4gPSBvZih7fSBhcyBMYW5ndWFnZVN0cmluZ3MpO1xuXG4gICAgdm0kID0gdGhpcy5sYW5ndWFnZXMkLnBpcGUoXG4gICAgICAgIG1hcChsYW5ndWFnZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFwcFN0cmluZ3M6IGxhbmd1YWdlLmFwcFN0cmluZ3MgfHwge31cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pXG4gICAgKTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBnbG9iYWxTZWFyY2g6IEdsb2JhbFNlYXJjaCwgcHJvdGVjdGVkIGxhbmd1YWdlU3RvcmU6IExhbmd1YWdlU3RvcmUpIHtcbiAgICAgICAgdGhpcy5sYW5ndWFnZXMkID0gbGFuZ3VhZ2VTdG9yZT8udm0kID8/IG9mKHt9IGFzIExhbmd1YWdlU3RyaW5ncyk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2VhcmNoRm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xuICAgICAgICAgICAgc2VhcmNoVGVybTogbmV3IEZvcm1Db250cm9sKCcnKVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLnNlYXJjaEZvcm0uZ2V0KCdzZWFyY2hUZXJtJykudmFsdWVDaGFuZ2VzXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICB0YXAoZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc1NlYXJjaFR5cGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzU2VhcmNoVHlwZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgICAgICAgICAgZmlsdGVyKHNlYXJjaFN0cmluZyA9PiBzZWFyY2hTdHJpbmc/Lmxlbmd0aCA+IDEpLFxuICAgICAgICAgICAgKS5zdWJzY3JpYmUoKHRlcm06IHN0cmluZykgPT4gdGhpcy5zZWFyY2hXb3JkID0gdGVybSkpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cblxuICAgIHNlYXJjaCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoV29yZC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsU2VhcmNoLm5hdmlnYXRlVG9TZWFyY2godGhpcy5zZWFyY2hXb3JkKS5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyU2VhcmNoVGVybSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoSW5wdXQubmF0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFyU2VhcmNoVGVybSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZWFyY2hGb3JtLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuaGFzU2VhcmNoVHlwZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZWFyY2hXb3JkID0gJyc7XG4gICAgfVxuXG4gICAgb25Gb2N1cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pc0ZvY3VzZWQgPSB0cnVlO1xuICAgICAgICBjb25zdCBpbml0aWFsVmFsdWUgPSB0aGlzLnNlYXJjaEZvcm0/LmdldCgnc2VhcmNoVGVybScpPy52YWx1ZSA/PyAnJztcbiAgICAgICAgaWYgKGluaXRpYWxWYWx1ZS5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICB0aGlzLmhhc1NlYXJjaFR5cGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoV29yZCA9IGluaXRpYWxWYWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQmx1cigpOiB2b2lkIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5oYXNTZWFyY2hUeXBlZCA9IGZhbHNlO1xuICAgICAgICB9LCAyMDApO1xuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjMgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cblxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIih2bSQgfCBhc3luYykgYXMgdm1cIj5cbiAgICA8Zm9ybSBuYW1lPVwiZ2xvYmFsLXNlYXJjaFwiIGNsYXNzPVwiZ2xvYmFsLXNlYXJjaFwiIFtmb3JtR3JvdXBdPVwic2VhcmNoRm9ybVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgZHJvcGRvd25cIiBbbmdDbGFzc109XCJ7J3NlYXJjaC1mb2N1c2VkJzogaXNGb2N1c2VkfVwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwic2VhcmNoVGVybVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJnbG9iYWwtc2VhcmNoLXRlcm1cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIGRyb3Bkb3duLXRvZ2dsZSBnbG9iYWwtc2VhcmNoLXRlcm1cIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3t2bS5hcHBTdHJpbmdzWydMQkxfU0VBUkNIJ10gfHwgJyd9fS4uLlwiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNlYXJjaFwiXG4gICAgICAgICAgICAgICAgKGZvY3VzKT1cIm9uRm9jdXMoKVwiXG4gICAgICAgICAgICAgICAgKGJsdXIpPVwib25CbHVyKClcIlxuICAgICAgICAgICAgICAgIChrZXlkb3duLmVudGVyKT1cInNlYXJjaCgpXCJcbiAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICNzZWFyY2hJbnB1dFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudSBnbG9iYWwtc2VhcmNoLWRyb3Bkb3duXCIgKm5nSWY9XCJzZWFyY2hXb3JkLmxlbmd0aCAmJiBoYXNTZWFyY2hUeXBlZFwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImRyb3Bkb3duLWl0ZW0tYmxvY2tcIiBbbmdDbGFzc109XCJ7J2Ryb3Bkb3duLWFjdGl2ZSc6IHNlYXJjaFdvcmR9XCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIChjbGljayk9XCJzZWFyY2goKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0taW1hZ2UgY2xhc3M9XCJzZWFyY2gtaWNvbiBzaWNvblwiIGltYWdlPVwic2VhcmNoXCI+PC9zY3JtLWltYWdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkcm9wZG93bi10ZXh0IG1sLTJcIj5cIjxzdHJvbmc+e3tzZWFyY2hXb3JkfX08L3N0cm9uZz5cIiB7e3ZtLmFwcFN0cmluZ3NbJ0xCTF9JTl9FVkVSWVdIRVJFJ10gfCBsb3dlcmNhc2V9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIiFoYXNTZWFyY2hUeXBlZFwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IHNlYXJjaC1idXR0b24gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiU2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm0tYnV0dG9uLWxvYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJzZWFyY2goKVwiPlxuICAgICAgICAgICAgICAgICAgICA8c2NybS1pbWFnZSBjbGFzcz1cInNlYXJjaC1pY29uIHNpY29uXCIgaW1hZ2U9XCJzZWFyY2hcIj48L3Njcm0taW1hZ2U+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiaGFzU2VhcmNoVHlwZWRcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBzZWFyY2gtYnV0dG9uIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JtLWJ1dHRvbi1sb2FkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiY2xlYXJTZWFyY2hUZXJtKClcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNjcm0taW1hZ2UgY2xhc3M9XCJzZWFyY2gtaWNvbiBzaWNvblwiIGltYWdlPVwiY3Jvc3NcIj48L3Njcm0taW1hZ2U+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG48L25nLWNvbnRhaW5lcj5cblxuIl19