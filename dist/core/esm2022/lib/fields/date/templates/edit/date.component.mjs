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
import { Component, } from '@angular/core';
import { NgbDateAdapter, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { isEmptyString, isVoid } from 'common';
import { DateParserFormatter } from '../../../base/datetime/date/date-parser-formatter.service';
import { DateAdapter } from '../../../base/datetime/date/date-adapter.service';
import { BaseDateComponent } from '../../../base/datetime/base-date.component';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/formatters/datetime/date-formatter.service";
import * as i2 from "@ng-bootstrap/ng-bootstrap";
import * as i3 from "../../../../services/formatters/data-type.formatter.service";
import * as i4 from "../../../field-logic/field-logic.manager";
import * as i5 from "../../../field-logic-display/field-logic-display.manager";
import * as i6 from "@angular/common";
import * as i7 from "@angular/forms";
import * as i8 from "../../../../components/button/button.component";
class DateEditFieldComponent extends BaseDateComponent {
    formatter;
    dateAdapter;
    dateParserFormatter;
    typeFormatter;
    logic;
    logicDisplay;
    dateModel;
    constructor(formatter, dateAdapter, dateParserFormatter, typeFormatter, logic, logicDisplay) {
        super(formatter, typeFormatter, logic, logicDisplay);
        this.formatter = formatter;
        this.dateAdapter = dateAdapter;
        this.dateParserFormatter = dateParserFormatter;
        this.typeFormatter = typeFormatter;
        this.logic = logic;
        this.logicDisplay = logicDisplay;
    }
    ngOnInit() {
        // Note: handle NgbDatePicker default validation
        // Note: convert empty form value to null for the ngb date validator to pass it
        if (isVoid(this.field.value) || isEmptyString(this.field.value)) {
            this.field.formControl.setValue(null);
        }
        else {
            this.field.formControl.setValue(this.formatter.toUserFormat(this.field.value, { toFormat: this.getDateFormat() }));
        }
        const adapter = this.dateAdapter;
        adapter.setUserFormat(this.getDateFormat());
        const parserFormatter = this.dateParserFormatter;
        parserFormatter.setUserFormat(this.getDateFormat());
        this.dateModel = this.formatter.dateFormatToStruct(this.field.value, this.formatter.getInternalFormat());
        this.subscribeValueChanges();
    }
    ngOnDestroy() {
        this.unsubscribeAll();
    }
    setModel(value) {
        this.field.value = this.formatter.toInternalFormat(value, { fromFormat: this.getDateFormat() });
        this.dateModel = this.formatter.dateFormatToStruct(value, this.getDateFormat());
    }
    getOpenButton(datepicker) {
        return {
            klass: 'btn btn-sm btn-outline-secondary m-0 border-0',
            // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
            onClick: () => {
                datepicker.toggle();
                datepicker.navigateTo(this.dateModel);
            },
            icon: 'calendar'
        };
    }
    getPlacement() {
        return ['bottom-left', 'bottom-right', 'top-left', 'top-right'];
    }
    static ɵfac = function DateEditFieldComponent_Factory(t) { return new (t || DateEditFieldComponent)(i0.ɵɵdirectiveInject(i1.DateFormatter), i0.ɵɵdirectiveInject(i2.NgbDateAdapter), i0.ɵɵdirectiveInject(i2.NgbDateParserFormatter), i0.ɵɵdirectiveInject(i3.DataTypeFormatter), i0.ɵɵdirectiveInject(i4.FieldLogicManager), i0.ɵɵdirectiveInject(i5.FieldLogicDisplayManager)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DateEditFieldComponent, selectors: [["scrm-date-edit"]], features: [i0.ɵɵProvidersFeature([
                { provide: NgbDateAdapter, useClass: DateAdapter },
                { provide: NgbDateParserFormatter, useClass: DateParserFormatter }
            ]), i0.ɵɵInheritDefinitionFeature], decls: 5, vars: 8, consts: [[1, "field-datetime-edit", "input-group"], ["ngbDatepicker", "", 3, "ngClass", "placement", "placeholder", "formControl", "startDate", "ngModelChange"], ["datepicker", "ngbDatepicker"], [1, "input-group-append", "align-items-end"], [3, "config"]], template: function DateEditFieldComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "input", 1, 2);
            i0.ɵɵlistener("ngModelChange", function DateEditFieldComponent_Template_input_ngModelChange_1_listener($event) { return ctx.setModel($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "span", 3);
            i0.ɵɵelement(4, "scrm-button", 4);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            const _r0 = i0.ɵɵreference(2);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("is-invalid", ctx.field.formControl.invalid && ctx.field.formControl.touched);
            i0.ɵɵproperty("ngClass", ctx.klass)("placement", ctx.getPlacement())("placeholder", ctx.getDateFormat().toLowerCase())("formControl", ctx.field.formControl)("startDate", ctx.dateModel);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("config", ctx.getOpenButton(_r0));
        } }, dependencies: [i6.NgClass, i7.DefaultValueAccessor, i7.NgControlStatus, i2.NgbInputDatepicker, i8.ButtonComponent, i7.FormControlDirective], encapsulation: 2 });
}
export { DateEditFieldComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DateEditFieldComponent, [{
        type: Component,
        args: [{ selector: 'scrm-date-edit', providers: [
                    { provide: NgbDateAdapter, useClass: DateAdapter },
                    { provide: NgbDateParserFormatter, useClass: DateParserFormatter }
                ], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div class=\"field-datetime-edit input-group\">\n    <input ngbDatepicker\n           [ngClass]=\"klass\"\n           [placement]=\"getPlacement()\"\n           [placeholder]=\"getDateFormat().toLowerCase()\"\n           [class.is-invalid]=\"field.formControl.invalid && field.formControl.touched\"\n           [formControl]=\"field.formControl\"\n           [startDate]=\"dateModel\"\n           (ngModelChange)=\"setModel($event)\"\n           #datepicker=\"ngbDatepicker\">\n    <span class=\"input-group-append align-items-end\">\n        <scrm-button [config]=\"getOpenButton(datepicker)\">\n        </scrm-button>\n    </span>\n</div>\n" }]
    }], function () { return [{ type: i1.DateFormatter }, { type: i2.NgbDateAdapter }, { type: i2.NgbDateParserFormatter }, { type: i3.DataTypeFormatter }, { type: i4.FieldLogicManager }, { type: i5.FieldLogicDisplayManager }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL2RhdGUvdGVtcGxhdGVzL2VkaXQvZGF0ZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL2RhdGUvdGVtcGxhdGVzL2VkaXQvZGF0ZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsR0FBcUIsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFDLGNBQWMsRUFBRSxzQkFBc0IsRUFBb0MsTUFBTSw0QkFBNEIsQ0FBQztBQUNySCxPQUFPLEVBQWtCLGFBQWEsRUFBRSxNQUFNLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFHOUQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sMkRBQTJELENBQUM7QUFHOUYsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGtEQUFrRCxDQUFDO0FBRzdFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDRDQUE0QyxDQUFDOzs7Ozs7Ozs7O0FBRTdFLE1BU2Esc0JBQXVCLFNBQVEsaUJBQWlCO0lBSzNDO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQVJQLFNBQVMsQ0FBZ0I7SUFFaEMsWUFDYyxTQUF3QixFQUN4QixXQUFtQyxFQUNuQyxtQkFBMkMsRUFDM0MsYUFBZ0MsRUFDaEMsS0FBd0IsRUFDeEIsWUFBc0M7UUFFaEQsS0FBSyxDQUFDLFNBQVMsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBUDNDLGNBQVMsR0FBVCxTQUFTLENBQWU7UUFDeEIsZ0JBQVcsR0FBWCxXQUFXLENBQXdCO1FBQ25DLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBd0I7UUFDM0Msa0JBQWEsR0FBYixhQUFhLENBQW1CO1FBQ2hDLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQ3hCLGlCQUFZLEdBQVosWUFBWSxDQUEwQjtJQUdwRCxDQUFDO0lBRUQsUUFBUTtRQUVKLGdEQUFnRDtRQUNoRCwrRUFBK0U7UUFDL0UsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM3RCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDekM7YUFBTTtZQUNILElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcEg7UUFFRCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBMEIsQ0FBQztRQUNoRCxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxtQkFBMEMsQ0FBQztRQUN4RSxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztRQUN6RyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQVU7UUFDZixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxFQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUMsQ0FBQyxDQUFDO1FBQzlGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUVELGFBQWEsQ0FBQyxVQUE4QjtRQUN4QyxPQUFPO1lBQ0gsS0FBSyxFQUFFLCtDQUErQztZQUN0RCw0RUFBNEU7WUFDNUUsT0FBTyxFQUFFLEdBQUcsRUFBRTtnQkFDVixVQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ3BCLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzFDLENBQUM7WUFDRCxJQUFJLEVBQUUsVUFBVTtTQUNuQixDQUFDO0lBQ04sQ0FBQztJQUVELFlBQVk7UUFDUixPQUFPLENBQUMsYUFBYSxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDcEUsQ0FBQztnRkF4RFEsc0JBQXNCOzZEQUF0QixzQkFBc0Isb0VBTHBCO2dCQUNQLEVBQUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFDO2dCQUNoRCxFQUFDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUM7YUFDbkU7WUNuQkwsOEJBQTZDLGtCQUFBO1lBUWxDLHdIQUFpQixvQkFBZ0IsSUFBQztZQVB6QyxpQkFRbUM7WUFDbkMsK0JBQWlEO1lBQzdDLGlDQUNjO1lBQ2xCLGlCQUFPLEVBQUE7OztZQVJBLGVBQTJFO1lBQTNFLDRGQUEyRTtZQUgzRSxtQ0FBaUIsaUNBQUEsa0RBQUEsc0NBQUEsNEJBQUE7WUFTUCxlQUFvQztZQUFwQywrQ0FBb0M7OztTRFU1QyxzQkFBc0I7dUZBQXRCLHNCQUFzQjtjQVRsQyxTQUFTOzJCQUNJLGdCQUFnQixhQUdmO29CQUNQLEVBQUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFDO29CQUNoRCxFQUFDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUM7aUJBQ25FIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmdiRGF0ZUFkYXB0ZXIsIE5nYkRhdGVQYXJzZXJGb3JtYXR0ZXIsIE5nYkRhdGVTdHJ1Y3QsIE5nYklucHV0RGF0ZXBpY2tlcn0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHtCdXR0b25JbnRlcmZhY2UsIGlzRW1wdHlTdHJpbmcsIGlzVm9pZH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7QmFzZURhdGVUaW1lQ29tcG9uZW50fSBmcm9tICcuLi8uLi8uLi9iYXNlL2RhdGV0aW1lL2Jhc2UtZGF0ZXRpbWUuY29tcG9uZW50JztcbmltcG9ydCB7RGF0YVR5cGVGb3JtYXR0ZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL2Zvcm1hdHRlcnMvZGF0YS10eXBlLmZvcm1hdHRlci5zZXJ2aWNlJztcbmltcG9ydCB7RGF0ZVBhcnNlckZvcm1hdHRlcn0gZnJvbSAnLi4vLi4vLi4vYmFzZS9kYXRldGltZS9kYXRlL2RhdGUtcGFyc2VyLWZvcm1hdHRlci5zZXJ2aWNlJztcbmltcG9ydCB7RGF0ZUZvcm1hdHRlcn0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvZm9ybWF0dGVycy9kYXRldGltZS9kYXRlLWZvcm1hdHRlci5zZXJ2aWNlJztcbmltcG9ydCB7UGxhY2VtZW50QXJyYXl9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwL3V0aWwvcG9zaXRpb25pbmcnO1xuaW1wb3J0IHtEYXRlQWRhcHRlcn0gZnJvbSAnLi4vLi4vLi4vYmFzZS9kYXRldGltZS9kYXRlL2RhdGUtYWRhcHRlci5zZXJ2aWNlJztcbmltcG9ydCB7RmllbGRMb2dpY01hbmFnZXJ9IGZyb20gJy4uLy4uLy4uL2ZpZWxkLWxvZ2ljL2ZpZWxkLWxvZ2ljLm1hbmFnZXInO1xuaW1wb3J0IHtGaWVsZExvZ2ljRGlzcGxheU1hbmFnZXJ9IGZyb20gJy4uLy4uLy4uL2ZpZWxkLWxvZ2ljLWRpc3BsYXkvZmllbGQtbG9naWMtZGlzcGxheS5tYW5hZ2VyJztcbmltcG9ydCB7QmFzZURhdGVDb21wb25lbnR9IGZyb20gJy4uLy4uLy4uL2Jhc2UvZGF0ZXRpbWUvYmFzZS1kYXRlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1kYXRlLWVkaXQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9kYXRlLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7cHJvdmlkZTogTmdiRGF0ZUFkYXB0ZXIsIHVzZUNsYXNzOiBEYXRlQWRhcHRlcn0sXG4gICAgICAgIHtwcm92aWRlOiBOZ2JEYXRlUGFyc2VyRm9ybWF0dGVyLCB1c2VDbGFzczogRGF0ZVBhcnNlckZvcm1hdHRlcn1cbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIERhdGVFZGl0RmllbGRDb21wb25lbnQgZXh0ZW5kcyBCYXNlRGF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIHB1YmxpYyBkYXRlTW9kZWw6IE5nYkRhdGVTdHJ1Y3Q7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGZvcm1hdHRlcjogRGF0ZUZvcm1hdHRlcixcbiAgICAgICAgcHJvdGVjdGVkIGRhdGVBZGFwdGVyOiBOZ2JEYXRlQWRhcHRlcjxzdHJpbmc+LFxuICAgICAgICBwcm90ZWN0ZWQgZGF0ZVBhcnNlckZvcm1hdHRlcjogTmdiRGF0ZVBhcnNlckZvcm1hdHRlcixcbiAgICAgICAgcHJvdGVjdGVkIHR5cGVGb3JtYXR0ZXI6IERhdGFUeXBlRm9ybWF0dGVyLFxuICAgICAgICBwcm90ZWN0ZWQgbG9naWM6IEZpZWxkTG9naWNNYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgbG9naWNEaXNwbGF5OiBGaWVsZExvZ2ljRGlzcGxheU1hbmFnZXJcbiAgICApIHtcbiAgICAgICAgc3VwZXIoZm9ybWF0dGVyLCB0eXBlRm9ybWF0dGVyLCBsb2dpYywgbG9naWNEaXNwbGF5KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgICAgICAvLyBOb3RlOiBoYW5kbGUgTmdiRGF0ZVBpY2tlciBkZWZhdWx0IHZhbGlkYXRpb25cbiAgICAgICAgLy8gTm90ZTogY29udmVydCBlbXB0eSBmb3JtIHZhbHVlIHRvIG51bGwgZm9yIHRoZSBuZ2IgZGF0ZSB2YWxpZGF0b3IgdG8gcGFzcyBpdFxuICAgICAgICBpZiAoaXNWb2lkKHRoaXMuZmllbGQudmFsdWUpIHx8IGlzRW1wdHlTdHJpbmcodGhpcy5maWVsZC52YWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuZmllbGQuZm9ybUNvbnRyb2wuc2V0VmFsdWUobnVsbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZpZWxkLmZvcm1Db250cm9sLnNldFZhbHVlKHRoaXMuZm9ybWF0dGVyLnRvVXNlckZvcm1hdCh0aGlzLmZpZWxkLnZhbHVlLCB7dG9Gb3JtYXQ6IHRoaXMuZ2V0RGF0ZUZvcm1hdCgpfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWRhcHRlciA9IHRoaXMuZGF0ZUFkYXB0ZXIgYXMgRGF0ZUFkYXB0ZXI7XG4gICAgICAgIGFkYXB0ZXIuc2V0VXNlckZvcm1hdCh0aGlzLmdldERhdGVGb3JtYXQoKSk7XG4gICAgICAgIGNvbnN0IHBhcnNlckZvcm1hdHRlciA9IHRoaXMuZGF0ZVBhcnNlckZvcm1hdHRlciBhcyBEYXRlUGFyc2VyRm9ybWF0dGVyO1xuICAgICAgICBwYXJzZXJGb3JtYXR0ZXIuc2V0VXNlckZvcm1hdCh0aGlzLmdldERhdGVGb3JtYXQoKSk7XG4gICAgICAgIHRoaXMuZGF0ZU1vZGVsID0gdGhpcy5mb3JtYXR0ZXIuZGF0ZUZvcm1hdFRvU3RydWN0KHRoaXMuZmllbGQudmFsdWUsIHRoaXMuZm9ybWF0dGVyLmdldEludGVybmFsRm9ybWF0KCkpO1xuICAgICAgICB0aGlzLnN1YnNjcmliZVZhbHVlQ2hhbmdlcygpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlQWxsKCk7XG4gICAgfVxuXG4gICAgc2V0TW9kZWwodmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmZpZWxkLnZhbHVlID0gdGhpcy5mb3JtYXR0ZXIudG9JbnRlcm5hbEZvcm1hdCh2YWx1ZSwge2Zyb21Gb3JtYXQ6IHRoaXMuZ2V0RGF0ZUZvcm1hdCgpfSk7XG4gICAgICAgIHRoaXMuZGF0ZU1vZGVsID0gdGhpcy5mb3JtYXR0ZXIuZGF0ZUZvcm1hdFRvU3RydWN0KHZhbHVlLCB0aGlzLmdldERhdGVGb3JtYXQoKSk7XG4gICAgfVxuXG4gICAgZ2V0T3BlbkJ1dHRvbihkYXRlcGlja2VyOiBOZ2JJbnB1dERhdGVwaWNrZXIpOiBCdXR0b25JbnRlcmZhY2Uge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAga2xhc3M6ICdidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBtLTAgYm9yZGVyLTAnLFxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1mdW5jdGlvbi1yZXR1cm4tdHlwZVxuICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRhdGVwaWNrZXIudG9nZ2xlKCk7XG4gICAgICAgICAgICAgICAgZGF0ZXBpY2tlci5uYXZpZ2F0ZVRvKHRoaXMuZGF0ZU1vZGVsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpY29uOiAnY2FsZW5kYXInXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0UGxhY2VtZW50KCk6IFBsYWNlbWVudEFycmF5IHtcbiAgICAgICAgcmV0dXJuIFsnYm90dG9tLWxlZnQnLCAnYm90dG9tLXJpZ2h0JywgJ3RvcC1sZWZ0JywgJ3RvcC1yaWdodCddO1xuICAgIH1cblxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPGRpdiBjbGFzcz1cImZpZWxkLWRhdGV0aW1lLWVkaXQgaW5wdXQtZ3JvdXBcIj5cbiAgICA8aW5wdXQgbmdiRGF0ZXBpY2tlclxuICAgICAgICAgICBbbmdDbGFzc109XCJrbGFzc1wiXG4gICAgICAgICAgIFtwbGFjZW1lbnRdPVwiZ2V0UGxhY2VtZW50KClcIlxuICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZ2V0RGF0ZUZvcm1hdCgpLnRvTG93ZXJDYXNlKClcIlxuICAgICAgICAgICBbY2xhc3MuaXMtaW52YWxpZF09XCJmaWVsZC5mb3JtQ29udHJvbC5pbnZhbGlkICYmIGZpZWxkLmZvcm1Db250cm9sLnRvdWNoZWRcIlxuICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwiZmllbGQuZm9ybUNvbnRyb2xcIlxuICAgICAgICAgICBbc3RhcnREYXRlXT1cImRhdGVNb2RlbFwiXG4gICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldE1vZGVsKCRldmVudClcIlxuICAgICAgICAgICAjZGF0ZXBpY2tlcj1cIm5nYkRhdGVwaWNrZXJcIj5cbiAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZCBhbGlnbi1pdGVtcy1lbmRcIj5cbiAgICAgICAgPHNjcm0tYnV0dG9uIFtjb25maWddPVwiZ2V0T3BlbkJ1dHRvbihkYXRlcGlja2VyKVwiPlxuICAgICAgICA8L3Njcm0tYnV0dG9uPlxuICAgIDwvc3Bhbj5cbjwvZGl2PlxuIl19