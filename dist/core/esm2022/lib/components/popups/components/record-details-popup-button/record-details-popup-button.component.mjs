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
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/record/field/field.manager";
import * as i2 from "@angular/common";
import * as i3 from "../popup-button/popup-button.component";
import * as i4 from "../../../../fields/field.component";
import * as i5 from "../../../label/label.component";
function RecordDetailsPopupButtonComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4)(1, "div", 5);
    i0.ɵɵelement(2, "scrm-label", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 7);
    i0.ɵɵelement(4, "scrm-field", 8);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const column_r2 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("labelKey", column_r2.label)("module", ctx_r1.record.module);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("mode", "list")("field", ctx_r1.getField(column_r2, ctx_r1.record))("type", column_r2.type)("record", ctx_r1.record);
} }
function RecordDetailsPopupButtonComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, RecordDetailsPopupButtonComponent_div_1_div_1_Template, 5, 6, "div", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.columns);
} }
class RecordDetailsPopupButtonComponent {
    fieldManager;
    record;
    columns;
    constructor(fieldManager) {
        this.fieldManager = fieldManager;
    }
    getField(column, record) {
        if (!column || !record) {
            return null;
        }
        return this.fieldManager.addField(record, column);
    }
    static ɵfac = function RecordDetailsPopupButtonComponent_Factory(t) { return new (t || RecordDetailsPopupButtonComponent)(i0.ɵɵdirectiveInject(i1.FieldManager)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RecordDetailsPopupButtonComponent, selectors: [["scrm-record-details-popup-button"]], inputs: { record: "record", columns: "columns" }, decls: 2, vars: 2, consts: [[3, "icon"], ["popup-content", "", "class", "container container-popover scroll-thin", 4, "ngIf"], ["popup-content", "", 1, "container", "container-popover", "scroll-thin"], ["class", "row py-1", 4, "ngFor", "ngForOf"], [1, "row", "py-1"], [1, "col", "font-weight-bold", "text-muted"], [3, "labelKey", "module"], [1, "col"], [3, "mode", "field", "type", "record"]], template: function RecordDetailsPopupButtonComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "scrm-popup-button", 0);
            i0.ɵɵtemplate(1, RecordDetailsPopupButtonComponent_div_1_Template, 2, 1, "div", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("icon", "dots-vertical");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.columns);
        } }, dependencies: [i2.NgForOf, i2.NgIf, i3.PopupButtonComponent, i4.FieldComponent, i5.LabelComponent], encapsulation: 2, changeDetection: 0 });
}
export { RecordDetailsPopupButtonComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordDetailsPopupButtonComponent, [{
        type: Component,
        args: [{ selector: 'scrm-record-details-popup-button', changeDetection: ChangeDetectionStrategy.OnPush, template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2023 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<scrm-popup-button [icon]=\"'dots-vertical'\">\n\n    <div popup-content *ngIf=\"columns\" class=\"container container-popover scroll-thin\">\n        <div *ngFor=\"let column of columns\" class=\"row py-1\">\n            <div class=\"col font-weight-bold text-muted\">\n                <scrm-label [labelKey]=\"column.label\" [module]=\"record.module\"></scrm-label>\n            </div>\n            <div class=\"col\">\n                <scrm-field [mode]=\"'list'\"\n                            [field]=\"getField(column, record)\"\n                            [type]=\"column.type\"\n                            [record]=\"record\">\n                </scrm-field>\n            </div>\n        </div>\n\n    </div>\n</scrm-popup-button>\n" }]
    }], function () { return [{ type: i1.FieldManager }]; }, { record: [{
            type: Input
        }], columns: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLWRldGFpbHMtcG9wdXAtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL3BvcHVwcy9jb21wb25lbnRzL3JlY29yZC1kZXRhaWxzLXBvcHVwLWJ1dHRvbi9yZWNvcmQtZGV0YWlscy1wb3B1cC1idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvcG9wdXBzL2NvbXBvbmVudHMvcmVjb3JkLWRldGFpbHMtcG9wdXAtYnV0dG9uL3JlY29yZC1kZXRhaWxzLXBvcHVwLWJ1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0lDSWhFLDhCQUFxRCxhQUFBO0lBRTdDLGdDQUE0RTtJQUNoRixpQkFBTTtJQUNOLDhCQUFpQjtJQUNiLGdDQUlhO0lBQ2pCLGlCQUFNLEVBQUE7Ozs7SUFSVSxlQUF5QjtJQUF6QiwwQ0FBeUIsZ0NBQUE7SUFHekIsZUFBZTtJQUFmLDZCQUFlLG9EQUFBLHdCQUFBLHlCQUFBOzs7SUFOdkMsOEJBQW1GO0lBQy9FLHdGQVdNO0lBRVYsaUJBQU07OztJQWJzQixlQUFVO0lBQVYsd0NBQVU7O0FESTFDLE1BTWEsaUNBQWlDO0lBS3BCO0lBSGIsTUFBTSxDQUFTO0lBQ2YsT0FBTyxDQUFxQjtJQUVyQyxZQUFzQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUNoRCxDQUFDO0lBRUQsUUFBUSxDQUFDLE1BQXdCLEVBQUUsTUFBYztRQUU3QyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3BCLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFFRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN0RCxDQUFDOzJGQWZRLGlDQUFpQzs2REFBakMsaUNBQWlDO1lDYjlDLDRDQUE0QztZQUV4QyxrRkFjTTtZQUNWLGlCQUFvQjs7WUFqQkQsc0NBQXdCO1lBRW5CLGVBQWE7WUFBYixrQ0FBYTs7O1NEV3hCLGlDQUFpQzt1RkFBakMsaUNBQWlDO2NBTjdDLFNBQVM7MkJBQ0ksa0NBQWtDLG1CQUUzQix1QkFBdUIsQ0FBQyxNQUFNOytEQUt0QyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMyBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgICBDb2x1bW5EZWZpbml0aW9uLFxuICAgIEZpZWxkLFxuICAgIFJlY29yZFxufSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtGaWVsZE1hbmFnZXJ9IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlcy9yZWNvcmQvZmllbGQvZmllbGQubWFuYWdlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tcmVjb3JkLWRldGFpbHMtcG9wdXAtYnV0dG9uJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3JlY29yZC1kZXRhaWxzLXBvcHVwLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5cbmV4cG9ydCBjbGFzcyBSZWNvcmREZXRhaWxzUG9wdXBCdXR0b25Db21wb25lbnQge1xuXG4gICAgQElucHV0KCkgcmVjb3JkOiBSZWNvcmQ7XG4gICAgQElucHV0KCkgY29sdW1uczogQ29sdW1uRGVmaW5pdGlvbltdO1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGZpZWxkTWFuYWdlcjogRmllbGRNYW5hZ2VyKSB7XG4gICAgfVxuXG4gICAgZ2V0RmllbGQoY29sdW1uOiBDb2x1bW5EZWZpbml0aW9uLCByZWNvcmQ6IFJlY29yZCk6IEZpZWxkIHtcblxuICAgICAgICBpZiAoIWNvbHVtbiB8fCAhcmVjb3JkKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmZpZWxkTWFuYWdlci5hZGRGaWVsZChyZWNvcmQsIGNvbHVtbik7XG4gICAgfVxuXG5cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjMgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxzY3JtLXBvcHVwLWJ1dHRvbiBbaWNvbl09XCInZG90cy12ZXJ0aWNhbCdcIj5cblxuICAgIDxkaXYgcG9wdXAtY29udGVudCAqbmdJZj1cImNvbHVtbnNcIiBjbGFzcz1cImNvbnRhaW5lciBjb250YWluZXItcG9wb3ZlciBzY3JvbGwtdGhpblwiPlxuICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sdW1uc1wiIGNsYXNzPVwicm93IHB5LTFcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgZm9udC13ZWlnaHQtYm9sZCB0ZXh0LW11dGVkXCI+XG4gICAgICAgICAgICAgICAgPHNjcm0tbGFiZWwgW2xhYmVsS2V5XT1cImNvbHVtbi5sYWJlbFwiIFttb2R1bGVdPVwicmVjb3JkLm1vZHVsZVwiPjwvc2NybS1sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxzY3JtLWZpZWxkIFttb2RlXT1cIidsaXN0J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ZpZWxkXT1cImdldEZpZWxkKGNvbHVtbiwgcmVjb3JkKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3R5cGVdPVwiY29sdW1uLnR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyZWNvcmRdPVwicmVjb3JkXCI+XG4gICAgICAgICAgICAgICAgPC9zY3JtLWZpZWxkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG48L3Njcm0tcG9wdXAtYnV0dG9uPlxuIl19