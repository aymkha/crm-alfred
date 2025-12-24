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
import * as i2 from "../../../close-button/close-button.component";
import * as i3 from "../../../label/label.component";
function ModalComponent_scrm_label_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-label", 3);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("labelKey", ctx_r0.titleKey);
} }
function ModalComponent_scrm_close_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-close-button", 4);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("config", ctx_r1.close);
} }
const _c0 = [[["", "modal-body", ""]], [["", "modal-footer", ""]]];
const _c1 = ["[modal-body]", "[modal-footer]"];
class ModalComponent {
    klass = '';
    headerKlass = '';
    bodyKlass = '';
    footerKlass = '';
    titleKey = '';
    closable = false;
    close = {
        klass: ['btn', 'btn-outline-light', 'btn-sm']
    };
    static ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ModalComponent, selectors: [["scrm-modal"]], inputs: { klass: "klass", headerKlass: "headerKlass", bodyKlass: "bodyKlass", footerKlass: "footerKlass", titleKey: "titleKey", closable: "closable", close: "close" }, ngContentSelectors: _c1, decls: 9, vars: 13, consts: [[1, "modal-title"], [3, "labelKey", 4, "ngIf"], [3, "config", 4, "ngIf"], [3, "labelKey"], [3, "config"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵelementStart(0, "div")(1, "div")(2, "div", 0);
            i0.ɵɵtemplate(3, ModalComponent_scrm_label_3_Template, 1, 1, "scrm-label", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, ModalComponent_scrm_close_button_4_Template, 1, 1, "scrm-close-button", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div");
            i0.ɵɵprojection(6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div");
            i0.ɵɵprojection(8, 1);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵclassMap(ctx.klass);
            i0.ɵɵadvance(1);
            i0.ɵɵclassMapInterpolate1("modal-header ", ctx.headerKlass, " d-flex align-items-center");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.titleKey);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.closable);
            i0.ɵɵadvance(1);
            i0.ɵɵclassMapInterpolate1("modal-body ", ctx.bodyKlass, "");
            i0.ɵɵadvance(2);
            i0.ɵɵclassMapInterpolate1("modal-footer ", ctx.footerKlass, "");
        } }, dependencies: [i1.NgIf, i2.CloseButtonComponent, i3.LabelComponent], encapsulation: 2 });
}
export { ModalComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalComponent, [{
        type: Component,
        args: [{ selector: 'scrm-modal', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div [class]=\"klass\">\n    <div class=\"modal-header {{headerKlass}} d-flex align-items-center\">\n        <div class=\"modal-title\">\n            <scrm-label *ngIf=\"titleKey\" [labelKey]=\"titleKey\"></scrm-label>\n        </div>\n        <scrm-close-button *ngIf=\"closable\" [config]=\"close\"></scrm-close-button>\n    </div>\n\n    <div class=\"modal-body {{bodyKlass}}\">\n        <ng-content select=\"[modal-body]\"></ng-content>\n    </div>\n\n    <div class=\"modal-footer {{footerKlass}}\">\n        <ng-content select=\"[modal-footer]\"></ng-content>\n    </div>\n</div>\n" }]
    }], null, { klass: [{
            type: Input
        }], headerKlass: [{
            type: Input
        }], bodyKlass: [{
            type: Input
        }], footerKlass: [{
            type: Input
        }], titleKey: [{
            type: Input
        }], closable: [{
            type: Input
        }], close: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvbW9kYWwvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9tb2RhbC9jb21wb25lbnRzL21vZGFsL21vZGFsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lDSTNDLGdDQUFnRTs7O0lBQW5DLDBDQUFxQjs7O0lBRXRELHVDQUF5RTs7O0lBQXJDLHFDQUFnQjs7OztBREg1RCxNQUthLGNBQWM7SUFFZCxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ1gsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUNqQixTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ2YsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUNqQixRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ2QsUUFBUSxHQUFXLEtBQUssQ0FBQztJQUN6QixLQUFLLEdBQW9CO1FBQzlCLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxtQkFBbUIsRUFBRSxRQUFRLENBQUM7S0FDN0IsQ0FBQzt3RUFWWixjQUFjOzZEQUFkLGNBQWM7O1lDUDNCLDJCQUFxQixVQUFBLGFBQUE7WUFHVCw2RUFBZ0U7WUFDcEUsaUJBQU07WUFDTiwyRkFBeUU7WUFDN0UsaUJBQU07WUFFTiwyQkFBc0M7WUFDbEMsa0JBQStDO1lBQ25ELGlCQUFNO1lBRU4sMkJBQTBDO1lBQ3RDLHFCQUFpRDtZQUNyRCxpQkFBTSxFQUFBOztZQWRMLHdCQUFlO1lBQ1gsZUFBOEQ7WUFBOUQseUZBQThEO1lBRTlDLGVBQWM7WUFBZCxtQ0FBYztZQUVYLGVBQWM7WUFBZCxtQ0FBYztZQUdqQyxlQUFnQztZQUFoQywyREFBZ0M7WUFJaEMsZUFBb0M7WUFBcEMsK0RBQW9DOzs7U0RMaEMsY0FBYzt1RkFBZCxjQUFjO2NBTDFCLFNBQVM7MkJBQ0ksWUFBWTtnQkFNYixLQUFLO2tCQUFiLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCdXR0b25JbnRlcmZhY2V9IGZyb20gJ2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1tb2RhbCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL21vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbENvbXBvbmVudHtcblxuICAgIEBJbnB1dCgpIGtsYXNzID0gJyc7XG4gICAgQElucHV0KCkgaGVhZGVyS2xhc3MgPSAnJztcbiAgICBASW5wdXQoKSBib2R5S2xhc3MgPSAnJztcbiAgICBASW5wdXQoKSBmb290ZXJLbGFzcyA9ICcnO1xuICAgIEBJbnB1dCgpIHRpdGxlS2V5ID0gJyc7XG4gICAgQElucHV0KCkgY2xvc2FibGU6Ym9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGNsb3NlOiBCdXR0b25JbnRlcmZhY2UgPSB7XG4gICAgICAgIGtsYXNzOiBbJ2J0bicsICdidG4tb3V0bGluZS1saWdodCcsICdidG4tc20nXVxuICAgIH0gYXMgQnV0dG9uSW50ZXJmYWNlO1xuXG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48ZGl2IFtjbGFzc109XCJrbGFzc1wiPlxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXIge3toZWFkZXJLbGFzc319IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+XG4gICAgICAgICAgICA8c2NybS1sYWJlbCAqbmdJZj1cInRpdGxlS2V5XCIgW2xhYmVsS2V5XT1cInRpdGxlS2V5XCI+PC9zY3JtLWxhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNjcm0tY2xvc2UtYnV0dG9uICpuZ0lmPVwiY2xvc2FibGVcIiBbY29uZmlnXT1cImNsb3NlXCI+PC9zY3JtLWNsb3NlLWJ1dHRvbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5IHt7Ym9keUtsYXNzfX1cIj5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW21vZGFsLWJvZHldXCI+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlciB7e2Zvb3RlcktsYXNzfX1cIj5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW21vZGFsLWZvb3Rlcl1cIj48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==