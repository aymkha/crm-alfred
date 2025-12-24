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
import { Component, ViewChild, } from '@angular/core';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { isEmptyString, isVoid } from 'common';
import { BaseDateTimeComponent } from '../../../base/datetime/base-datetime.component';
import { DateTimeModel } from "../../datetime.model";
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/formatters/datetime/datetime-formatter.service";
import * as i2 from "../../../../services/formatters/data-type.formatter.service";
import * as i3 from "@ng-bootstrap/ng-bootstrap";
import * as i4 from "../../../field-logic/field-logic.manager";
import * as i5 from "../../../field-logic-display/field-logic-display.manager";
import * as i6 from "@angular/common";
import * as i7 from "@angular/forms";
import * as i8 from "../../../../components/button/button.component";
function DateTimeEditFieldComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "div")(2, "ngb-datepicker", 5);
    i0.ɵɵlistener("dateSelect", function DateTimeEditFieldComponent_ng_template_4_Template_ngb_datepicker_dateSelect_2_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onDateChange($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 6)(4, "ngb-timepicker", 7);
    i0.ɵɵlistener("ngModelChange", function DateTimeEditFieldComponent_ng_template_4_Template_ngb_timepicker_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.onTimeChange($event)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r1.dateTimeModel.date)("startDate", ctx_r1.dateTimeModel.date);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r1.dateTimeModel.time)("seconds", ctx_r1.dateTimeModel.displaySeconds)("hourStep", ctx_r1.dateTimeModel.hourStep)("minuteStep", ctx_r1.dateTimeModel.minuteStep)("secondStep", ctx_r1.dateTimeModel.secondStep);
} }
class DateTimeEditFieldComponent extends BaseDateTimeComponent {
    formatter;
    typeFormatter;
    calendar;
    config;
    logic;
    logicDisplay;
    popover;
    dateTimeModel = new DateTimeModel();
    constructor(formatter, typeFormatter, calendar, config, logic, logicDisplay) {
        super(formatter, typeFormatter, logic, logicDisplay);
        this.formatter = formatter;
        this.typeFormatter = typeFormatter;
        this.calendar = calendar;
        this.config = config;
        this.logic = logic;
        this.logicDisplay = logicDisplay;
        config.autoClose = "outside";
        config.placement = this.getPlacement();
    }
    ngOnInit() {
        // Note: handle NgbDatePicker default validation
        // Note: convert empty form value to null for the ngb date validator to pass it
        if (isVoid(this.field.value) || isEmptyString(this.field.value)) {
            this.dateTimeModel.date = this.calendar.getToday();
            this.dateTimeModel.time = { hour: 0, minute: 0, second: 0 };
            this.field.formControl.setValue(null);
        }
        else {
            this.dateTimeModel = DateTimeModel.internalToDateTimeStruct(this.formatter, this.field.value);
            if (this.dateTimeModel === null) {
                this.field.formControl.setValue(null);
                return;
            }
            this.setFormValues(this.dateTimeModel.toUserFormat(this.formatter));
        }
        // enable seconds in timepicker
        if (this.formatter.getTimeFormat().includes('ss')) {
            this.dateTimeModel.displaySeconds = true;
        }
        this.subscribeValueChanges();
    }
    ngOnDestroy() {
        this.unsubscribeAll();
    }
    setFormValues(dateTimeString) {
        this.field.formControl.setValue(dateTimeString);
        this.field.formControl.markAsDirty();
    }
    onDateChange(date) {
        this.dateTimeModel.date = date;
        this.setFormValues(this.dateTimeModel.toUserFormat(this.formatter));
    }
    onTimeChange(time) {
        this.dateTimeModel.time = time;
        this.setFormValues(this.dateTimeModel.toUserFormat(this.formatter));
    }
    onInputChange($event) {
        const dateTimeModel = DateTimeModel.toDateTimeStruct(this.formatter, $event.target.value);
        if (!dateTimeModel) {
            return;
        }
        this.dateTimeModel = dateTimeModel;
    }
    getOpenButton() {
        return {
            klass: 'btn btn-sm btn-outline-secondary m-0 border-0',
            icon: 'calendar'
        };
    }
    getPlacement() {
        return ['bottom-right', 'top-right', 'bottom-left', 'top-left'];
    }
    static ɵfac = function DateTimeEditFieldComponent_Factory(t) { return new (t || DateTimeEditFieldComponent)(i0.ɵɵdirectiveInject(i1.DatetimeFormatter), i0.ɵɵdirectiveInject(i2.DataTypeFormatter), i0.ɵɵdirectiveInject(i3.NgbCalendar), i0.ɵɵdirectiveInject(i3.NgbPopoverConfig), i0.ɵɵdirectiveInject(i4.FieldLogicManager), i0.ɵɵdirectiveInject(i5.FieldLogicDisplayManager)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DateTimeEditFieldComponent, selectors: [["scrm-datetime-edit"]], viewQuery: function DateTimeEditFieldComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(NgbPopover, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.popover = _t.first);
        } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 7, consts: [[1, "input-group", "mr-2"], [3, "ngClass", "placeholder", "formControl", "change"], [1, "input-group-append"], [3, "config", "ngbPopover"], ["calendarContent", ""], ["name", "datepicker", 3, "ngModel", "startDate", "dateSelect"], [1, "d-flex", "justify-content-center", "mt-auto"], ["name", "timepicker", 3, "ngModel", "seconds", "hourStep", "minuteStep", "secondStep", "ngModelChange"]], template: function DateTimeEditFieldComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "input", 1);
            i0.ɵɵlistener("change", function DateTimeEditFieldComponent_Template_input_change_1_listener($event) { return ctx.onInputChange($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵelement(3, "scrm-button", 3);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(4, DateTimeEditFieldComponent_ng_template_4_Template, 5, 7, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const _r0 = i0.ɵɵreference(5);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("is-invalid", ctx.field.formControl.invalid && ctx.field.formControl.touched);
            i0.ɵɵproperty("ngClass", ctx.klass)("placeholder", ctx.getDateTimeFormat().toLowerCase())("formControl", ctx.field.formControl);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("config", ctx.getOpenButton())("ngbPopover", _r0);
        } }, dependencies: [i6.NgClass, i7.DefaultValueAccessor, i7.NgControlStatus, i7.NgModel, i3.NgbDatepicker, i3.NgbTimepicker, i8.ButtonComponent, i7.FormControlDirective, i3.NgbPopover], encapsulation: 2 });
}
export { DateTimeEditFieldComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DateTimeEditFieldComponent, [{
        type: Component,
        args: [{ selector: 'scrm-datetime-edit', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n\n<div class=\"input-group mr-2\">\n\n    <input\n        [ngClass]=\"klass\"\n        [placeholder]=\"getDateTimeFormat().toLowerCase()\"\n        [class.is-invalid]=\"field.formControl.invalid && field.formControl.touched\"\n        [formControl]=\"field.formControl\"\n        (change)=\"onInputChange($event)\"\n    >\n\n    <div class=\"input-group-append\">\n        <scrm-button [config]=\"getOpenButton()\" [ngbPopover]=\"calendarContent\">\n        </scrm-button>\n    </div>\n</div>\n\n<ng-template #calendarContent>\n    <div>\n        <div>\n            <ngb-datepicker name=\"datepicker\"\n                            [ngModel]=\"dateTimeModel.date\"\n                            (dateSelect)=\"onDateChange($event)\" [startDate]=\"dateTimeModel.date\"></ngb-datepicker>\n        </div>\n\n        <div class=\"d-flex justify-content-center mt-auto\">\n            <ngb-timepicker name=\"timepicker\"\n                            [ngModel]=\"dateTimeModel.time\" (ngModelChange)=\"onTimeChange($event)\"\n                            [seconds]=\"dateTimeModel.displaySeconds\" [hourStep]=\"dateTimeModel.hourStep\"\n                            [minuteStep]=\"dateTimeModel.minuteStep\"\n                            [secondStep]=\"dateTimeModel.secondStep\">\n            </ngb-timepicker>\n        </div>\n    </div>\n</ng-template>\n" }]
    }], function () { return [{ type: i1.DatetimeFormatter }, { type: i2.DataTypeFormatter }, { type: i3.NgbCalendar }, { type: i3.NgbPopoverConfig }, { type: i4.FieldLogicManager }, { type: i5.FieldLogicDisplayManager }]; }, { popover: [{
            type: ViewChild,
            args: [NgbPopover, { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXRpbWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2ZpZWxkcy9kYXRldGltZS90ZW1wbGF0ZXMvZWRpdC9kYXRldGltZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL2RhdGV0aW1lL3RlbXBsYXRlcy9lZGl0L2RhdGV0aW1lLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFxQixTQUFTLEdBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUE2QixVQUFVLEVBQWtDLE1BQU0sNEJBQTRCLENBQUM7QUFDbkgsT0FBTyxFQUFrQixhQUFhLEVBQUUsTUFBTSxFQUFDLE1BQU0sUUFBUSxDQUFDO0FBQzlELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLGdEQUFnRCxDQUFDO0FBR3JGLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7Ozs7Ozs7O0lDYS9DLDJCQUFLLFVBQUEsd0JBQUE7SUFJbUIsdU1BQWMsZUFBQSwyQkFBb0IsQ0FBQSxJQUFDO0lBQWtDLGlCQUFpQixFQUFBO0lBRzFHLDhCQUFtRCx3QkFBQTtJQUVBLDZNQUFpQixlQUFBLDJCQUFvQixDQUFBLElBQUM7SUFJckYsaUJBQWlCLEVBQUEsRUFBQTs7O0lBVkQsZUFBOEI7SUFBOUIsbURBQThCLHdDQUFBO0lBTTlCLGVBQThCO0lBQTlCLG1EQUE4QixnREFBQSwyQ0FBQSwrQ0FBQSwrQ0FBQTs7QURqQjFELE1BS2EsMEJBQTJCLFNBQVEscUJBQXFCO0lBUW5EO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQVZOLE9BQU8sQ0FBYTtJQUU1QixhQUFh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LENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCxhQUFhLENBQUMsTUFBVztRQUNyQixNQUFNLGFBQWEsR0FBRyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFGLElBQUcsQ0FBQyxhQUFhLEVBQUM7WUFDZCxPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztJQUN2QyxDQUFDO0lBRUQsYUFBYTtRQUNULE9BQU87WUFDSCxLQUFLLEVBQUUsK0NBQStDO1lBQ3RELElBQUksRUFBRSxVQUFVO1NBQ25CLENBQUM7SUFDTixDQUFDO0lBRUQsWUFBWTtRQUNSLE9BQU8sQ0FBQyxjQUFjLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNwRSxDQUFDO29GQWpGUSwwQkFBMEI7NkRBQTFCLDBCQUEwQjsyQkFFeEIsVUFBVTs7Ozs7WUNoQnpCLDhCQUE4QixlQUFBO1lBT3RCLDhHQUFVLHlCQUFxQixJQUFDO1lBTHBDLGlCQU1DO1lBRUQsOEJBQWdDO1lBQzVCLGlDQUNjO1lBQ2xCLGlCQUFNLEVBQUE7WUFHViw0SEFpQmM7OztZQTVCTixlQUEyRTtZQUEzRSw0RkFBMkU7WUFGM0UsbUNBQWlCLHNEQUFBLHNDQUFBO1lBUUosZUFBMEI7WUFBMUIsNENBQTBCLG1CQUFBOzs7U0RHbEMsMEJBQTBCO3VGQUExQiwwQkFBMEI7Y0FMdEMsU0FBUzsyQkFDSSxvQkFBb0I7b09BT3RCLE9BQU87a0JBRGQsU0FBUzttQkFBQyxVQUFVLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdDaGlsZCx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOZ2JDYWxlbmRhciwgTmdiRGF0ZVN0cnVjdCwgTmdiUG9wb3ZlciwgTmdiUG9wb3ZlckNvbmZpZywgTmdiVGltZVN0cnVjdH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHtCdXR0b25JbnRlcmZhY2UsIGlzRW1wdHlTdHJpbmcsIGlzVm9pZH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7QmFzZURhdGVUaW1lQ29tcG9uZW50fSBmcm9tICcuLi8uLi8uLi9iYXNlL2RhdGV0aW1lL2Jhc2UtZGF0ZXRpbWUuY29tcG9uZW50JztcbmltcG9ydCB7RGF0YVR5cGVGb3JtYXR0ZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL2Zvcm1hdHRlcnMvZGF0YS10eXBlLmZvcm1hdHRlci5zZXJ2aWNlJztcbmltcG9ydCB7RGF0ZXRpbWVGb3JtYXR0ZXJ9IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlcy9mb3JtYXR0ZXJzL2RhdGV0aW1lL2RhdGV0aW1lLWZvcm1hdHRlci5zZXJ2aWNlXCI7XG5pbXBvcnQge0RhdGVUaW1lTW9kZWx9IGZyb20gXCIuLi8uLi9kYXRldGltZS5tb2RlbFwiO1xuaW1wb3J0IHtQbGFjZW1lbnRBcnJheX0gZnJvbSBcIkBuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwL3V0aWwvcG9zaXRpb25pbmdcIjtcbmltcG9ydCB7RmllbGRMb2dpY01hbmFnZXJ9IGZyb20gJy4uLy4uLy4uL2ZpZWxkLWxvZ2ljL2ZpZWxkLWxvZ2ljLm1hbmFnZXInO1xuaW1wb3J0IHtGaWVsZExvZ2ljRGlzcGxheU1hbmFnZXJ9IGZyb20gJy4uLy4uLy4uL2ZpZWxkLWxvZ2ljLWRpc3BsYXkvZmllbGQtbG9naWMtZGlzcGxheS5tYW5hZ2VyJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLWRhdGV0aW1lLWVkaXQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9kYXRldGltZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRlVGltZUVkaXRGaWVsZENvbXBvbmVudCBleHRlbmRzIEJhc2VEYXRlVGltZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIEBWaWV3Q2hpbGQoTmdiUG9wb3Zlciwge3N0YXRpYzogdHJ1ZX0pXG4gICAgcHJpdmF0ZSBwb3BvdmVyOiBOZ2JQb3BvdmVyO1xuXG4gICAgZGF0ZVRpbWVNb2RlbDogRGF0ZVRpbWVNb2RlbCA9IG5ldyBEYXRlVGltZU1vZGVsKCk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGZvcm1hdHRlcjogRGF0ZXRpbWVGb3JtYXR0ZXIsXG4gICAgICAgIHByb3RlY3RlZCB0eXBlRm9ybWF0dGVyOiBEYXRhVHlwZUZvcm1hdHRlcixcbiAgICAgICAgcHJvdGVjdGVkIGNhbGVuZGFyOiBOZ2JDYWxlbmRhcixcbiAgICAgICAgcHJvdGVjdGVkIGNvbmZpZzogTmdiUG9wb3ZlckNvbmZpZyxcbiAgICAgICAgcHJvdGVjdGVkIGxvZ2ljOiBGaWVsZExvZ2ljTWFuYWdlcixcbiAgICAgICAgcHJvdGVjdGVkIGxvZ2ljRGlzcGxheTogRmllbGRMb2dpY0Rpc3BsYXlNYW5hZ2VyXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKGZvcm1hdHRlciwgdHlwZUZvcm1hdHRlciwgbG9naWMsIGxvZ2ljRGlzcGxheSk7XG4gICAgICAgIGNvbmZpZy5hdXRvQ2xvc2UgPSBcIm91dHNpZGVcIjtcbiAgICAgICAgY29uZmlnLnBsYWNlbWVudCA9IHRoaXMuZ2V0UGxhY2VtZW50KCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICAgICAgLy8gTm90ZTogaGFuZGxlIE5nYkRhdGVQaWNrZXIgZGVmYXVsdCB2YWxpZGF0aW9uXG4gICAgICAgIC8vIE5vdGU6IGNvbnZlcnQgZW1wdHkgZm9ybSB2YWx1ZSB0byBudWxsIGZvciB0aGUgbmdiIGRhdGUgdmFsaWRhdG9yIHRvIHBhc3MgaXRcbiAgICAgICAgaWYgKGlzVm9pZCh0aGlzLmZpZWxkLnZhbHVlKSB8fCBpc0VtcHR5U3RyaW5nKHRoaXMuZmllbGQudmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGVUaW1lTW9kZWwuZGF0ZSA9IHRoaXMuY2FsZW5kYXIuZ2V0VG9kYXkoKSBhcyBOZ2JEYXRlU3RydWN0O1xuICAgICAgICAgICAgdGhpcy5kYXRlVGltZU1vZGVsLnRpbWUgPSB7aG91cjogMCwgbWludXRlOiAwLCBzZWNvbmQ6IDB9IGFzIE5nYlRpbWVTdHJ1Y3Q7XG4gICAgICAgICAgICB0aGlzLmZpZWxkLmZvcm1Db250cm9sLnNldFZhbHVlKG51bGwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kYXRlVGltZU1vZGVsID0gRGF0ZVRpbWVNb2RlbC5pbnRlcm5hbFRvRGF0ZVRpbWVTdHJ1Y3QodGhpcy5mb3JtYXR0ZXIsIHRoaXMuZmllbGQudmFsdWUpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0ZVRpbWVNb2RlbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmllbGQuZm9ybUNvbnRyb2wuc2V0VmFsdWUobnVsbCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRGb3JtVmFsdWVzKHRoaXMuZGF0ZVRpbWVNb2RlbC50b1VzZXJGb3JtYXQodGhpcy5mb3JtYXR0ZXIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGVuYWJsZSBzZWNvbmRzIGluIHRpbWVwaWNrZXJcbiAgICAgICAgaWYgKHRoaXMuZm9ybWF0dGVyLmdldFRpbWVGb3JtYXQoKS5pbmNsdWRlcygnc3MnKSkge1xuICAgICAgICAgICAgdGhpcy5kYXRlVGltZU1vZGVsLmRpc3BsYXlTZWNvbmRzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlVmFsdWVDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmVBbGwoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2V0Rm9ybVZhbHVlcyhkYXRlVGltZVN0cmluZzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZmllbGQuZm9ybUNvbnRyb2wuc2V0VmFsdWUoZGF0ZVRpbWVTdHJpbmcpO1xuICAgICAgICB0aGlzLmZpZWxkLmZvcm1Db250cm9sLm1hcmtBc0RpcnR5KCk7XG4gICAgfVxuXG4gICAgb25EYXRlQ2hhbmdlKGRhdGU6IE5nYkRhdGVTdHJ1Y3QgfCBudWxsKSB7XG4gICAgICAgIHRoaXMuZGF0ZVRpbWVNb2RlbC5kYXRlID0gZGF0ZTtcbiAgICAgICAgdGhpcy5zZXRGb3JtVmFsdWVzKHRoaXMuZGF0ZVRpbWVNb2RlbC50b1VzZXJGb3JtYXQodGhpcy5mb3JtYXR0ZXIpKTtcbiAgICB9XG5cbiAgICBvblRpbWVDaGFuZ2UodGltZTogTmdiVGltZVN0cnVjdCB8IG51bGwpIHtcbiAgICAgICAgdGhpcy5kYXRlVGltZU1vZGVsLnRpbWUgPSB0aW1lO1xuICAgICAgICB0aGlzLnNldEZvcm1WYWx1ZXModGhpcy5kYXRlVGltZU1vZGVsLnRvVXNlckZvcm1hdCh0aGlzLmZvcm1hdHRlcikpO1xuICAgIH1cblxuICAgIG9uSW5wdXRDaGFuZ2UoJGV2ZW50OiBhbnkpIHtcbiAgICAgICAgY29uc3QgZGF0ZVRpbWVNb2RlbCA9IERhdGVUaW1lTW9kZWwudG9EYXRlVGltZVN0cnVjdCh0aGlzLmZvcm1hdHRlciwgJGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgIGlmKCFkYXRlVGltZU1vZGVsKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRhdGVUaW1lTW9kZWwgPSBkYXRlVGltZU1vZGVsO1xuICAgIH1cblxuICAgIGdldE9wZW5CdXR0b24oKTogQnV0dG9uSW50ZXJmYWNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGtsYXNzOiAnYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1zZWNvbmRhcnkgbS0wIGJvcmRlci0wJyxcbiAgICAgICAgICAgIGljb246ICdjYWxlbmRhcidcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXRQbGFjZW1lbnQoKTogUGxhY2VtZW50QXJyYXkge1xuICAgICAgICByZXR1cm4gWydib3R0b20tcmlnaHQnLCAndG9wLXJpZ2h0JywgJ2JvdHRvbS1sZWZ0JywgJ3RvcC1sZWZ0J107XG4gICAgfVxuXG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG5cbjxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtci0yXCI+XG5cbiAgICA8aW5wdXRcbiAgICAgICAgW25nQ2xhc3NdPVwia2xhc3NcIlxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZ2V0RGF0ZVRpbWVGb3JtYXQoKS50b0xvd2VyQ2FzZSgpXCJcbiAgICAgICAgW2NsYXNzLmlzLWludmFsaWRdPVwiZmllbGQuZm9ybUNvbnRyb2wuaW52YWxpZCAmJiBmaWVsZC5mb3JtQ29udHJvbC50b3VjaGVkXCJcbiAgICAgICAgW2Zvcm1Db250cm9sXT1cImZpZWxkLmZvcm1Db250cm9sXCJcbiAgICAgICAgKGNoYW5nZSk9XCJvbklucHV0Q2hhbmdlKCRldmVudClcIlxuICAgID5cblxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cbiAgICAgICAgPHNjcm0tYnV0dG9uIFtjb25maWddPVwiZ2V0T3BlbkJ1dHRvbigpXCIgW25nYlBvcG92ZXJdPVwiY2FsZW5kYXJDb250ZW50XCI+XG4gICAgICAgIDwvc2NybS1idXR0b24+XG4gICAgPC9kaXY+XG48L2Rpdj5cblxuPG5nLXRlbXBsYXRlICNjYWxlbmRhckNvbnRlbnQ+XG4gICAgPGRpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxuZ2ItZGF0ZXBpY2tlciBuYW1lPVwiZGF0ZXBpY2tlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nTW9kZWxdPVwiZGF0ZVRpbWVNb2RlbC5kYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZGF0ZVNlbGVjdCk9XCJvbkRhdGVDaGFuZ2UoJGV2ZW50KVwiIFtzdGFydERhdGVdPVwiZGF0ZVRpbWVNb2RlbC5kYXRlXCI+PC9uZ2ItZGF0ZXBpY2tlcj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LWF1dG9cIj5cbiAgICAgICAgICAgIDxuZ2ItdGltZXBpY2tlciBuYW1lPVwidGltZXBpY2tlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nTW9kZWxdPVwiZGF0ZVRpbWVNb2RlbC50aW1lXCIgKG5nTW9kZWxDaGFuZ2UpPVwib25UaW1lQ2hhbmdlKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzZWNvbmRzXT1cImRhdGVUaW1lTW9kZWwuZGlzcGxheVNlY29uZHNcIiBbaG91clN0ZXBdPVwiZGF0ZVRpbWVNb2RlbC5ob3VyU3RlcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW21pbnV0ZVN0ZXBdPVwiZGF0ZVRpbWVNb2RlbC5taW51dGVTdGVwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc2Vjb25kU3RlcF09XCJkYXRlVGltZU1vZGVsLnNlY29uZFN0ZXBcIj5cbiAgICAgICAgICAgIDwvbmdiLXRpbWVwaWNrZXI+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==