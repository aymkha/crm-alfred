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
import { Component } from '@angular/core';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import * as i0 from "@angular/core";
import * as i1 from "@ng-bootstrap/ng-bootstrap";
import * as i2 from "../../services/auth/auth.service";
import * as i3 from "@angular/common";
import * as i4 from "../image/image.component";
function FooterUiComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8)(2, "a", 9);
    i0.ɵɵlistener("click", function FooterUiComponent_ng_container_6_Template_a_click_2_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.backToTop()); });
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, " Back To Top ");
    i0.ɵɵelement(5, "scrm-image", 10);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} }
function FooterUiComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11)(1, "div", 12)(2, "h5", 13);
    i0.ɵɵtext(3, "\u00A9 Powered By SugarCRM");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 14);
    i0.ɵɵlistener("click", function FooterUiComponent_ng_template_8_Template_button_click_4_listener() { const restoredCtx = i0.ɵɵrestoreView(_r9); const modal_r7 = restoredCtx.$implicit; return i0.ɵɵresetView(modal_r7.dismiss("Cross click")); });
    i0.ɵɵelement(5, "scrm-image", 15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 16)(7, "p");
    i0.ɵɵtext(8, " \u00A9 2004-2013 SugarCRM Inc. The Program is provided AS IS, without warranty. Licensed under AGPLv3. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p");
    i0.ɵɵtext(10, " This program is free software; you can redistribute it and/or modify it under the terms of the GNU Affero General Public License version 3 as published by the Free Software Foundation, including the additional permission set forth in the source code header. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p");
    i0.ɵɵtext(12, " SugarCRM is a trademark of SugarCRM, Inc. All other company and product names may be trademarks of the respective companies with which they are associated. ");
    i0.ɵɵelementEnd()()();
} }
function FooterUiComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17)(1, "div", 12)(2, "h5", 13);
    i0.ɵɵtext(3, "\u00A9 Supercharged by SuiteCRM");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 14);
    i0.ɵɵlistener("click", function FooterUiComponent_ng_template_10_Template_button_click_4_listener() { const restoredCtx = i0.ɵɵrestoreView(_r12); const modal_r10 = restoredCtx.$implicit; return i0.ɵɵresetView(modal_r10.dismiss("Cross click")); });
    i0.ɵɵelement(5, "scrm-image", 15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 16)(7, "p");
    i0.ɵɵtext(8, " SuiteCRM has been written and assembled by SalesAgility. The Program is provided AS IS, without warranty. Licensed under AGPLv3. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p");
    i0.ɵɵtext(10, " This program is free software; you can redistribute it and/or modify it under the terms of the GNU Affero General Public License version 3 as published by the Free Software Foundation, including the additional permission set forth in the source code header. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p");
    i0.ɵɵtext(12, " SuiteCRM is a trademark of SalesAgility Ltd. All other company and product names may be trademarks of the respective companies with which they are associated. ");
    i0.ɵɵelementEnd()()();
} }
class FooterUiComponent {
    modalService;
    authService;
    authSub;
    closeResult;
    isUserLoggedIn;
    constructor(modalService, authService) {
        this.modalService = modalService;
        this.authService = authService;
    }
    openSugarCopyright(sugarcopyright) {
        this.modalService.open(sugarcopyright, {
            ariaLabelledBy: 'modal-basic-title',
            centered: true,
            size: 'lg'
        }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    openSuiteCopyright(suitecopyright) {
        this.modalService.open(suitecopyright, {
            ariaLabelledBy: 'modal-basic-title',
            centered: true,
            size: 'lg'
        }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    backToTop() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    ngOnInit() {
        this.authSub = this.authService.isUserLoggedIn.subscribe(value => {
            this.isUserLoggedIn = value;
        });
    }
    ngOnDestroy() {
        this.authSub.unsubscribe();
    }
    static ɵfac = function FooterUiComponent_Factory(t) { return new (t || FooterUiComponent)(i0.ɵɵdirectiveInject(i1.NgbModal), i0.ɵɵdirectiveInject(i2.AuthService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FooterUiComponent, selectors: [["scrm-footer-ui"]], decls: 12, vars: 1, consts: [[1, "footer"], [1, "copyright-links"], ["data-toggle", "modal", "data-target", ".copyright-suitecrm", 1, "footer-link", 3, "click"], ["data-toggle", "modal", "data-target", ".copyright-sugarcrm", 1, "footer-link", 3, "click"], [4, "ngIf"], [1, "copyright"], ["sugarcopyright", ""], ["suitecopyright", ""], [1, "back-to-top"], [1, "footer-link", 3, "click"], ["image", "arrow_up_filled", 1, "sicon", "back-top-icon"], ["role", "dialog", "aria-hidden", "true", 1, "copyright-sugarcrm"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["image", "icon_modal_close", 1, "sicon"], [1, "modal-body"], ["role", "dialog", "aria-hidden", "true", 1, "copyright-suitecrm"]], template: function FooterUiComponent_Template(rf, ctx) { if (rf & 1) {
            const _r13 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
            i0.ɵɵlistener("click", function FooterUiComponent_Template_a_click_2_listener() { i0.ɵɵrestoreView(_r13); const _r3 = i0.ɵɵreference(11); return i0.ɵɵresetView(ctx.openSuiteCopyright(_r3)); });
            i0.ɵɵtext(3, " \u00A9 Supercharged by SuiteCRM ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "a", 3);
            i0.ɵɵlistener("click", function FooterUiComponent_Template_a_click_4_listener() { i0.ɵɵrestoreView(_r13); const _r1 = i0.ɵɵreference(9); return i0.ɵɵresetView(ctx.openSugarCopyright(_r1)); });
            i0.ɵɵtext(5, " \u00A9 Powered By SugarCRM ");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(6, FooterUiComponent_ng_container_6_Template, 6, 0, "ng-container", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 5);
            i0.ɵɵtemplate(8, FooterUiComponent_ng_template_8_Template, 13, 0, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(10, FooterUiComponent_ng_template_10_Template, 13, 0, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngIf", ctx.isUserLoggedIn);
        } }, dependencies: [i3.NgIf, i4.ImageComponent], encapsulation: 2 });
}
export { FooterUiComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FooterUiComponent, [{
        type: Component,
        args: [{ selector: 'scrm-footer-ui', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<!-- Start of footer section -->\n<div class=\"footer\">\n  <div class=\"copyright-links\">\n    <a (click)=\"openSuiteCopyright(suitecopyright)\" class=\"footer-link\" data-toggle=\"modal\"\n       data-target=\".copyright-suitecrm\">\n      &copy; Supercharged by SuiteCRM\n    </a>\n    <a (click)=\"openSugarCopyright(sugarcopyright)\" class=\"footer-link\" data-toggle=\"modal\"\n       data-target=\".copyright-sugarcrm\">\n      &copy; Powered By SugarCRM\n    </a>\n  </div>\n  <ng-container *ngIf=\"this.isUserLoggedIn\">\n    <div class=\"back-to-top\">\n      <a (click)=\"backToTop()\" class=\"footer-link\">\n        <span>\n          Back To Top\n          <scrm-image class=\"sicon back-top-icon\" image=\"arrow_up_filled\"></scrm-image>\n        </span>\n      </a>\n    </div>\n  </ng-container>\n</div>\n<!-- End of footer section -->\n\n<!-- Start of copyright modal section -->\n\n<div class=\"copyright\">\n\n    <!-- Start of SugarCRM Copyright notice modal -->\n\n    <ng-template #sugarcopyright let-modal>\n\n        <div class=\"copyright-sugarcrm\" role=\"dialog\" aria-hidden=\"true\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">&copy; Powered By SugarCRM</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"\n                        (click)=\"modal.dismiss('Cross click')\">\n                    <scrm-image class=\"sicon\" image=\"icon_modal_close\"></scrm-image>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <p>\n                    &copy; 2004-2013 SugarCRM Inc. The Program is provided AS IS, without\n                    warranty. Licensed under AGPLv3.\n                </p>\n                <p>\n                    This program is free software; you can redistribute it and/or modify\n                    it under the terms of the GNU Affero General Public License version\n                    3 as published by the Free Software Foundation, including the\n                    additional permission set forth in the source code header.\n                </p>\n                <p>\n                    SugarCRM is a trademark of SugarCRM, Inc. All other company and\n                    product names may be trademarks of the respective companies with\n                    which they are associated.\n                </p>\n            </div>\n        </div>\n\n    </ng-template>\n\n    <!-- End of SugarCRM Copyright notice modal -->\n\n    <!-- Start of SuiteCRM Copyright notice modal -->\n\n    <ng-template #suitecopyright let-modal>\n\n        <div class=\"copyright-suitecrm\" role=\"dialog\" aria-hidden=\"true\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">&copy; Supercharged by SuiteCRM</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"\n                        (click)=\"modal.dismiss('Cross click')\">\n                    <scrm-image class=\"sicon\" image=\"icon_modal_close\"></scrm-image>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <p>\n                    SuiteCRM has been written and assembled by SalesAgility. The Program\n                    is provided AS IS, without warranty. Licensed under AGPLv3.\n                </p>\n                <p>\n                    This program is free software; you can redistribute it and/or modify\n                    it under the terms of the GNU Affero General Public License version\n                    3 as published by the Free Software Foundation, including the\n                    additional permission set forth in the source code header.\n                </p>\n                <p>\n                    SuiteCRM is a trademark of SalesAgility Ltd. All other company and\n                    product names may be trademarks of the respective companies with\n                    which they are associated.\n                </p>\n            </div>\n        </div>\n\n    </ng-template>\n\n    <!-- End of SuiteCRM Copyright notice modal -->\n</div>\n\n<!-- End of copyright modal section -->\n" }]
    }], function () { return [{ type: i1.NgbModal }, { type: i2.AuthService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUVoRCxPQUFPLEVBQUMsbUJBQW1CLEVBQVcsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7Ozs7SUNXdkUsNkJBQTBDO0lBQ3hDLDhCQUF5QixXQUFBO0lBQ3BCLGtLQUFTLGVBQUEsa0JBQVcsQ0FBQSxJQUFDO0lBQ3RCLDRCQUFNO0lBQ0osNkJBQ0E7SUFBQSxpQ0FBNkU7SUFDL0UsaUJBQU8sRUFBQSxFQUFBO0lBR2IsMEJBQWU7Ozs7SUFZVCwrQkFBaUUsY0FBQSxhQUFBO0lBRWpDLDBDQUEwQjtJQUFBLGlCQUFLO0lBQ3ZELGtDQUMrQztJQUF2QywrTEFBUyxlQUFBLGlCQUFjLGFBQWEsQ0FBQyxDQUFBLElBQUM7SUFDMUMsaUNBQWdFO0lBQ3BFLGlCQUFTLEVBQUE7SUFFYiwrQkFBd0IsUUFBQTtJQUVoQix3SEFFSjtJQUFBLGlCQUFJO0lBQ0oseUJBQUc7SUFDQyxvUkFJSjtJQUFBLGlCQUFJO0lBQ0osMEJBQUc7SUFDQyw4S0FHSjtJQUFBLGlCQUFJLEVBQUEsRUFBQTs7OztJQVlaLCtCQUFpRSxjQUFBLGFBQUE7SUFFakMsK0NBQStCO0lBQUEsaUJBQUs7SUFDNUQsa0NBQytDO0lBQXZDLGtNQUFTLGVBQUEsa0JBQWMsYUFBYSxDQUFDLENBQUEsSUFBQztJQUMxQyxpQ0FBZ0U7SUFDcEUsaUJBQVMsRUFBQTtJ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LGlCQUFNO1lBS04sOEJBQXVCO1lBSW5CLG9IQTZCYztZQU1kLHNIQTZCYztZQUdsQixpQkFBTTs7WUF0RlcsZUFBeUI7WUFBekIseUNBQXlCOzs7U0RGN0IsaUJBQWlCO3VGQUFqQixpQkFBaUI7Y0FMN0IsU0FBUzsyQkFDSSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge01vZGFsRGlzbWlzc1JlYXNvbnMsIE5nYk1vZGFsfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoL2F1dGguc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1mb290ZXItdWknLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9mb290ZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW11cbn0pXG5leHBvcnQgY2xhc3MgRm9vdGVyVWlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHJpdmF0ZSBhdXRoU3ViOiBTdWJzY3JpcHRpb247XG5cbiAgICBjbG9zZVJlc3VsdDogc3RyaW5nO1xuICAgIGlzVXNlckxvZ2dlZEluOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbCxcbiAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2VcbiAgICApIHtcbiAgICB9XG5cbiAgICBvcGVuU3VnYXJDb3B5cmlnaHQoc3VnYXJjb3B5cmlnaHQpIHtcbiAgICAgICAgdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihzdWdhcmNvcHlyaWdodCwge1xuICAgICAgICAgICAgYXJpYUxhYmVsbGVkQnk6ICdtb2RhbC1iYXNpYy10aXRsZScsXG4gICAgICAgICAgICBjZW50ZXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIHNpemU6ICdsZydcbiAgICAgICAgfSkucmVzdWx0LnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbG9zZVJlc3VsdCA9IGBDbG9zZWQgd2l0aDogJHtyZXN1bHR9YDtcbiAgICAgICAgfSwgKHJlYXNvbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbG9zZVJlc3VsdCA9IGBEaXNtaXNzZWQgJHt0aGlzLmdldERpc21pc3NSZWFzb24ocmVhc29uKX1gO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvcGVuU3VpdGVDb3B5cmlnaHQoc3VpdGVjb3B5cmlnaHQpIHtcbiAgICAgICAgdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihzdWl0ZWNvcHlyaWdodCwge1xuICAgICAgICAgICAgYXJpYUxhYmVsbGVkQnk6ICdtb2RhbC1iYXNpYy10aXRsZScsXG4gICAgICAgICAgICBjZW50ZXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIHNpemU6ICdsZydcbiAgICAgICAgfSkucmVzdWx0LnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbG9zZVJlc3VsdCA9IGBDbG9zZWQgd2l0aDogJHtyZXN1bHR9YDtcbiAgICAgICAgfSwgKHJlYXNvbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbG9zZVJlc3VsdCA9IGBEaXNtaXNzZWQgJHt0aGlzLmdldERpc21pc3NSZWFzb24ocmVhc29uKX1gO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldERpc21pc3NSZWFzb24ocmVhc29uOiBhbnkpOiBzdHJpbmcge1xuICAgICAgICBpZiAocmVhc29uID09PSBNb2RhbERpc21pc3NSZWFzb25zLkVTQykge1xuICAgICAgICAgICAgcmV0dXJuICdieSBwcmVzc2luZyBFU0MnO1xuICAgICAgICB9IGVsc2UgaWYgKHJlYXNvbiA9PT0gTW9kYWxEaXNtaXNzUmVhc29ucy5CQUNLRFJPUF9DTElDSykge1xuICAgICAgICAgICAgcmV0dXJuICdieSBjbGlja2luZyBvbiBhIGJhY2tkcm9wJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBgd2l0aDogJHtyZWFzb259YDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJhY2tUb1RvcCgpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwOyAvLyBGb3IgU2FmYXJpXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSAwOyAvLyBGb3IgQ2hyb21lLCBGaXJlZm94LCBJRSBhbmQgT3BlcmFcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5hdXRoU3ViID0gdGhpcy5hdXRoU2VydmljZS5pc1VzZXJMb2dnZWRJbi5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc1VzZXJMb2dnZWRJbiA9IHZhbHVlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5hdXRoU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPCEtLSBTdGFydCBvZiBmb290ZXIgc2VjdGlvbiAtLT5cbjxkaXYgY2xhc3M9XCJmb290ZXJcIj5cbiAgPGRpdiBjbGFzcz1cImNvcHlyaWdodC1saW5rc1wiPlxuICAgIDxhIChjbGljayk9XCJvcGVuU3VpdGVDb3B5cmlnaHQoc3VpdGVjb3B5cmlnaHQpXCIgY2xhc3M9XCJmb290ZXItbGlua1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIlxuICAgICAgIGRhdGEtdGFyZ2V0PVwiLmNvcHlyaWdodC1zdWl0ZWNybVwiPlxuICAgICAgJmNvcHk7IFN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVxuICAgIDwvYT5cbiAgICA8YSAoY2xpY2spPVwib3BlblN1Z2FyQ29weXJpZ2h0KHN1Z2FyY29weXJpZ2h0KVwiIGNsYXNzPVwiZm9vdGVyLWxpbmtcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcbiAgICAgICBkYXRhLXRhcmdldD1cIi5jb3B5cmlnaHQtc3VnYXJjcm1cIj5cbiAgICAgICZjb3B5OyBQb3dlcmVkIEJ5IFN1Z2FyQ1JNXG4gICAgPC9hPlxuICA8L2Rpdj5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRoaXMuaXNVc2VyTG9nZ2VkSW5cIj5cbiAgICA8ZGl2IGNsYXNzPVwiYmFjay10by10b3BcIj5cbiAgICAgIDxhIChjbGljayk9XCJiYWNrVG9Ub3AoKVwiIGNsYXNzPVwiZm9vdGVyLWxpbmtcIj5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgQmFjayBUbyBUb3BcbiAgICAgICAgICA8c2NybS1pbWFnZSBjbGFzcz1cInNpY29uIGJhY2stdG9wLWljb25cIiBpbWFnZT1cImFycm93X3VwX2ZpbGxlZFwiPjwvc2NybS1pbWFnZT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICA8L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuPCEtLSBFbmQgb2YgZm9vdGVyIHNlY3Rpb24gLS0+XG5cbjwhLS0gU3RhcnQgb2YgY29weXJpZ2h0IG1vZGFsIHNlY3Rpb24gLS0+XG5cbjxkaXYgY2xhc3M9XCJjb3B5cmlnaHRcIj5cblxuICAgIDwhLS0gU3RhcnQgb2YgU3VnYXJDUk0gQ29weXJpZ2h0IG5vdGljZSBtb2RhbCAtLT5cblxuICAgIDxuZy10ZW1wbGF0ZSAjc3VnYXJjb3B5cmlnaHQgbGV0LW1vZGFsPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb3B5cmlnaHQtc3VnYXJjcm1cIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwibW9kYWwtdGl0bGVcIj4mY29weTsgUG93ZXJlZCBCeSBTdWdhckNSTTwvaDU+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJtb2RhbC5kaXNtaXNzKCdDcm9zcyBjbGljaycpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzY3JtLWltYWdlIGNsYXNzPVwic2ljb25cIiBpbWFnZT1cImljb25fbW9kYWxfY2xvc2VcIj48L3Njcm0taW1hZ2U+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICZjb3B5OyAyMDA0LTIwMTMgU3VnYXJDUk0gSW5jLiBUaGUgUHJvZ3JhbSBpcyBwcm92aWRlZCBBUyBJUywgd2l0aG91dFxuICAgICAgICAgICAgICAgICAgICB3YXJyYW50eS4gTGljZW5zZWQgdW5kZXIgQUdQTHYzLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAgICAgICAgICAgICAgICAgICAgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvblxuICAgICAgICAgICAgICAgICAgICAzIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBpbmNsdWRpbmcgdGhlXG4gICAgICAgICAgICAgICAgICAgIGFkZGl0aW9uYWwgcGVybWlzc2lvbiBzZXQgZm9ydGggaW4gdGhlIHNvdXJjZSBjb2RlIGhlYWRlci5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIFN1Z2FyQ1JNIGlzIGEgdHJhZGVtYXJrIG9mIFN1Z2FyQ1JNLCBJbmMuIEFsbCBvdGhlciBjb21wYW55IGFuZFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0IG5hbWVzIG1heSBiZSB0cmFkZW1hcmtzIG9mIHRoZSByZXNwZWN0aXZlIGNvbXBhbmllcyB3aXRoXG4gICAgICAgICAgICAgICAgICAgIHdoaWNoIHRoZXkgYXJlIGFzc29jaWF0ZWQuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgIDwhLS0gRW5kIG9mIFN1Z2FyQ1JNIENvcHlyaWdodCBub3RpY2UgbW9kYWwgLS0+XG5cbiAgICA8IS0tIFN0YXJ0IG9mIFN1aXRlQ1JNIENvcHlyaWdodCBub3RpY2UgbW9kYWwgLS0+XG5cbiAgICA8bmctdGVtcGxhdGUgI3N1aXRlY29weXJpZ2h0IGxldC1tb2RhbD5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29weXJpZ2h0LXN1aXRlY3JtXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+JmNvcHk7IFN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTTwvaDU+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJtb2RhbC5kaXNtaXNzKCdDcm9zcyBjbGljaycpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzY3JtLWltYWdlIGNsYXNzPVwic2ljb25cIiBpbWFnZT1cImljb25fbW9kYWxfY2xvc2VcIj48L3Njcm0taW1hZ2U+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIFN1aXRlQ1JNIGhhcyBiZWVuIHdyaXR0ZW4gYW5kIGFzc2VtYmxlZCBieSBTYWxlc0FnaWxpdHkuIFRoZSBQcm9ncmFtXG4gICAgICAgICAgICAgICAgICAgIGlzIHByb3ZpZGVkIEFTIElTLCB3aXRob3V0IHdhcnJhbnR5LiBMaWNlbnNlZCB1bmRlciBBR1BMdjMuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICAgICAgICAgICAgICAgICAgICBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uXG4gICAgICAgICAgICAgICAgICAgIDMgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGluY2x1ZGluZyB0aGVcbiAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25hbCBwZXJtaXNzaW9uIHNldCBmb3J0aCBpbiB0aGUgc291cmNlIGNvZGUgaGVhZGVyLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgU3VpdGVDUk0gaXMgYSB0cmFkZW1hcmsgb2YgU2FsZXNBZ2lsaXR5IEx0ZC4gQWxsIG90aGVyIGNvbXBhbnkgYW5kXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3QgbmFtZXMgbWF5IGJlIHRyYWRlbWFya3Mgb2YgdGhlIHJlc3BlY3RpdmUgY29tcGFuaWVzIHdpdGhcbiAgICAgICAgICAgICAgICAgICAgd2hpY2ggdGhleSBhcmUgYXNzb2NpYXRlZC5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgPCEtLSBFbmQgb2YgU3VpdGVDUk0gQ29weXJpZ2h0IG5vdGljZSBtb2RhbCAtLT5cbjwvZGl2PlxuXG48IS0tIEVuZCBvZiBjb3B5cmlnaHQgbW9kYWwgc2VjdGlvbiAtLT5cbiJdfQ==