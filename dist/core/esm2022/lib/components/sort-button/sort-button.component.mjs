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
import { SortDirection } from 'common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../image/image.component";
function SortButtonComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 1);
    i0.ɵɵlistener("click", function SortButtonComponent_ng_container_0_Template_a_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const direction_r1 = restoredCtx.ngIf; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.changeSorting(direction_r1)); });
    i0.ɵɵelement(2, "scrm-image", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const direction_r1 = ctx.ngIf;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("image", ctx_r0.getStatusIcon(direction_r1));
} }
class SortButtonComponent {
    state;
    direction$;
    statusIcons = {
        NONE: 'sort',
        ASC: 'sort_ascend',
        DESC: 'sort_descend'
    };
    nextDirection = {
        NONE: SortDirection.DESC,
        ASC: SortDirection.NONE,
        DESC: SortDirection.ASC
    };
    constructor() {
    }
    ngOnInit() {
        this.direction$ = this.state.getSortDirection();
    }
    getStatusIcon(direction) {
        return this.statusIcons[direction];
    }
    changeSorting(direction) {
        const newDirection = this.nextDirection[direction];
        this.state.changeSortDirection(newDirection);
    }
    static ɵfac = function SortButtonComponent_Factory(t) { return new (t || SortButtonComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SortButtonComponent, selectors: [["scrm-sort-button"]], inputs: { state: "state" }, decls: 2, vars: 3, consts: [[4, "ngIf"], [1, "btn", "btn-sm", "p-0", "sort-button", 3, "click"], [1, "sort-icon", "sicon", 3, "image"]], template: function SortButtonComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SortButtonComponent_ng_container_0_Template, 3, 1, "ng-container", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.direction$));
        } }, dependencies: [i1.NgIf, i2.ImageComponent, i1.AsyncPipe], encapsulation: 2 });
}
export { SortButtonComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SortButtonComponent, [{
        type: Component,
        args: [{ selector: 'scrm-sort-button', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"(direction$ | async) as direction\">\n    <a class=\"btn btn-sm p-0 sort-button\" (click)=\"changeSorting(direction)\">\n        <scrm-image class=\"sort-icon sicon\" [image]=\"getStatusIcon(direction)\"></scrm-image>\n    </a>\n</ng-container>\n\n" }]
    }], function () { return []; }, { state: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvc29ydC1idXR0b24vc29ydC1idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvc29ydC1idXR0b24vc29ydC1idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQy9DLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxRQUFRLENBQUM7Ozs7OztJQ0FyQyw2QkFBd0Q7SUFDcEQsNEJBQXlFO0lBQW5DLCtOQUFTLGVBQUEsa0NBQXdCLENBQUEsSUFBQztJQUNwRSxnQ0FBb0Y7SUFDeEYsaUJBQUk7SUFDUiwwQkFBZTs7OztJQUY2QixlQUFrQztJQUFsQywwREFBa0M7O0FERTlFLE1BS2EsbUJBQW1CO0lBQ25CLEtBQUssQ0FBMEI7SUFDeEMsVUFBVSxDQUE0QjtJQUU1QixXQUFXLEdBQUc7UUFDcEIsSUFBSSxFQUFFLE1BQU07UUFDWixHQUFHLEVBQUUsYUFBYTtRQUNsQixJQUFJLEVBQUUsY0FBYztLQUN2QixDQUFDO0lBRVEsYUFBYSxHQUFHO1FBQ3RCLElBQUksRUFBRSxhQUFhLENBQUMsSUFBSTtRQUN4QixHQUFHLEVBQUUsYUFBYSxDQUFDLElBQUk7UUFDdkIsSUFBSSxFQUFFLGFBQWEsQ0FBQyxHQUFHO0tBQzFCLENBQUM7SUFFRjtJQUNBLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDcEQsQ0FBQztJQUVELGFBQWEsQ0FBQyxTQUF3QjtRQUNsQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELGFBQWEsQ0FBQyxTQUF3QjtRQUNsQyxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDakQsQ0FBQzs2RUE5QlEsbUJBQW1COzZEQUFuQixtQkFBbUI7WUNUaEMsc0ZBSWU7OztZQUpBLDJEQUEyQjs7O1NEUzdCLG1CQUFtQjt1RkFBbkIsbUJBQW1CO2NBTC9CLFNBQVM7MkJBQ0ksa0JBQWtCO3NDQUtuQixLQUFLO2tCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1NvcnREaXJlY3Rpb259IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtTb3J0RGlyZWN0aW9uRGF0YVNvdXJjZX0gZnJvbSAnLi9zb3J0LWJ1dHRvbi5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1zb3J0LWJ1dHRvbicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NvcnQtYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFNvcnRCdXR0b25Db21wb25lbnQge1xuICAgIEBJbnB1dCgpIHN0YXRlOiBTb3J0RGlyZWN0aW9uRGF0YVNvdXJjZTtcbiAgICBkaXJlY3Rpb24kOiBPYnNlcnZhYmxlPFNvcnREaXJlY3Rpb24+O1xuXG4gICAgcHJvdGVjdGVkIHN0YXR1c0ljb25zID0ge1xuICAgICAgICBOT05FOiAnc29ydCcsXG4gICAgICAgIEFTQzogJ3NvcnRfYXNjZW5kJyxcbiAgICAgICAgREVTQzogJ3NvcnRfZGVzY2VuZCdcbiAgICB9O1xuXG4gICAgcHJvdGVjdGVkIG5leHREaXJlY3Rpb24gPSB7XG4gICAgICAgIE5PTkU6IFNvcnREaXJlY3Rpb24uREVTQyxcbiAgICAgICAgQVNDOiBTb3J0RGlyZWN0aW9uLk5PTkUsXG4gICAgICAgIERFU0M6IFNvcnREaXJlY3Rpb24uQVNDXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiQgPSB0aGlzLnN0YXRlLmdldFNvcnREaXJlY3Rpb24oKTtcbiAgICB9XG5cbiAgICBnZXRTdGF0dXNJY29uKGRpcmVjdGlvbjogU29ydERpcmVjdGlvbik6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXR1c0ljb25zW2RpcmVjdGlvbl07XG4gICAgfVxuXG4gICAgY2hhbmdlU29ydGluZyhkaXJlY3Rpb246IFNvcnREaXJlY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbmV3RGlyZWN0aW9uID0gdGhpcy5uZXh0RGlyZWN0aW9uW2RpcmVjdGlvbl07XG4gICAgICAgIHRoaXMuc3RhdGUuY2hhbmdlU29ydERpcmVjdGlvbihuZXdEaXJlY3Rpb24pO1xuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxuZy1jb250YWluZXIgKm5nSWY9XCIoZGlyZWN0aW9uJCB8IGFzeW5jKSBhcyBkaXJlY3Rpb25cIj5cbiAgICA8YSBjbGFzcz1cImJ0biBidG4tc20gcC0wIHNvcnQtYnV0dG9uXCIgKGNsaWNrKT1cImNoYW5nZVNvcnRpbmcoZGlyZWN0aW9uKVwiPlxuICAgICAgICA8c2NybS1pbWFnZSBjbGFzcz1cInNvcnQtaWNvbiBzaWNvblwiIFtpbWFnZV09XCJnZXRTdGF0dXNJY29uKGRpcmVjdGlvbilcIj48L3Njcm0taW1hZ2U+XG4gICAgPC9hPlxuPC9uZy1jb250YWluZXI+XG5cbiJdfQ==