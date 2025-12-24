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
import { isEmptyString } from 'common';
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
function DateTimeFilterFieldComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "div")(2, "ngb-datepicker", 5);
    i0.ɵɵlistener("dateSelect", function DateTimeFilterFieldComponent_ng_template_4_Template_ngb_datepicker_dateSelect_2_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onDateChange($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 6)(4, "ngb-timepicker", 7);
    i0.ɵɵlistener("ngModelChange", function DateTimeFilterFieldComponent_ng_template_4_Template_ngb_timepicker_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.onTimeChange($event)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r1.dateTimeModel.date)("startDate", ctx_r1.dateTimeModel.date);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r1.dateTimeModel.time)("seconds", ctx_r1.dateTimeModel.displaySeconds)("hourStep", ctx_r1.dateTimeModel.hourStep)("minuteStep", ctx_r1.dateTimeModel.minuteStep)("secondStep", ctx_r1.dateTimeModel.secondStep);
} }
class DateTimeFilterFieldComponent extends BaseDateTimeComponent {
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
        super.ngOnInit();
        const values = (this.field && this.field.criteria && this.field.criteria.values) || [];
        let criteria = '';
        if (values.length > 0) {
            criteria = this.field.criteria.values[0];
        }
        // Note: handle NgbDatePicker default validation
        // Note: convert empty form value to null for the ngb date validator to pass it
        if (isEmptyString(criteria)) {
            this.dateTimeModel.date = this.calendar.getToday();
            this.dateTimeModel.time = { hour: 0, minute: 0, second: 0 };
            this.field.formControl.setValue(null);
        }
        else {
            this.dateTimeModel = DateTimeModel.internalToDateTimeStruct(this.formatter, criteria);
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
    setFieldValue(newValue) {
        this.field.value = newValue;
        this.field.criteria.operator = '=';
        this.field.criteria.values = [newValue];
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
    static ɵfac = function DateTimeFilterFieldComponent_Factory(t) { return new (t || DateTimeFilterFieldComponent)(i0.ɵɵdirectiveInject(i1.DatetimeFormatter), i0.ɵɵdirectiveInject(i2.DataTypeFormatter), i0.ɵɵdirectiveInject(i3.NgbCalendar), i0.ɵɵdirectiveInject(i3.NgbPopoverConfig), i0.ɵɵdirectiveInject(i4.FieldLogicManager), i0.ɵɵdirectiveInject(i5.FieldLogicDisplayManager)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DateTimeFilterFieldComponent, selectors: [["scrm-datetime-filter"]], viewQuery: function DateTimeFilterFieldComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(NgbPopover, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.popover = _t.first);
        } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 7, consts: [[1, "input-group", "mr-2"], [3, "ngClass", "placeholder", "formControl", "change"], [1, "input-group-append"], [3, "config", "ngbPopover"], ["calendarContent", ""], ["name", "datepicker", 3, "ngModel", "startDate", "dateSelect"], [1, "d-flex", "justify-content-center", "mt-auto"], ["name", "timepicker", 3, "ngModel", "seconds", "hourStep", "minuteStep", "secondStep", "ngModelChange"]], template: function DateTimeFilterFieldComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "input", 1);
            i0.ɵɵlistener("change", function DateTimeFilterFieldComponent_Template_input_change_1_listener($event) { return ctx.onInputChange($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵelement(3, "scrm-button", 3);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(4, DateTimeFilterFieldComponent_ng_template_4_Template, 5, 7, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const _r0 = i0.ɵɵreference(5);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("is-invalid", ctx.field.formControl.invalid && ctx.field.formControl.touched);
            i0.ɵɵproperty("ngClass", ctx.klass)("placeholder", ctx.getDateTimeFormat().toLowerCase())("formControl", ctx.field.formControl);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("config", ctx.getOpenButton())("ngbPopover", _r0);
        } }, dependencies: [i6.NgClass, i7.DefaultValueAccessor, i7.NgControlStatus, i7.NgModel, i3.NgbDatepicker, i3.NgbTimepicker, i8.ButtonComponent, i7.FormControlDirective, i3.NgbPopover], encapsulation: 2 });
}
export { DateTimeFilterFieldComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DateTimeFilterFieldComponent, [{
        type: Component,
        args: [{ selector: 'scrm-datetime-filter', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n\n<div class=\"input-group mr-2\">\n\n    <input\n        [ngClass]=\"klass\"\n        [placeholder]=\"getDateTimeFormat().toLowerCase()\"\n        [class.is-invalid]=\"field.formControl.invalid && field.formControl.touched\"\n        [formControl]=\"field.formControl\"\n        (change)=\"onInputChange($event)\"\n    >\n\n    <div class=\"input-group-append\">\n        <scrm-button [config]=\"getOpenButton()\" [ngbPopover]=\"calendarContent\">\n        </scrm-button>\n    </div>\n</div>\n\n<ng-template #calendarContent>\n    <div>\n        <div>\n            <ngb-datepicker name=\"datepicker\"\n                            [ngModel]=\"dateTimeModel.date\"\n                            (dateSelect)=\"onDateChange($event)\" [startDate]=\"dateTimeModel.date\"></ngb-datepicker>\n        </div>\n\n        <div class=\"d-flex justify-content-center mt-auto\">\n            <ngb-timepicker name=\"timepicker\"\n                            [ngModel]=\"dateTimeModel.time\" (ngModelChange)=\"onTimeChange($event)\"\n                            [seconds]=\"dateTimeModel.displaySeconds\" [hourStep]=\"dateTimeModel.hourStep\"\n                            [minuteStep]=\"dateTimeModel.minuteStep\"\n                            [secondStep]=\"dateTimeModel.secondStep\">\n            </ngb-timepicker>\n        </div>\n    </div>\n</ng-template>\n" }]
    }], function () { return [{ type: i1.DatetimeFormatter }, { type: i2.DataTypeFormatter }, { type: i3.NgbCalendar }, { type: i3.NgbPopoverConfig }, { type: i4.FieldLogicManager }, { type: i5.FieldLogicDisplayManager }]; }, { popover: [{
            type: ViewChild,
            args: [NgbPopover, { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXRpbWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2ZpZWxkcy9kYXRldGltZS90ZW1wbGF0ZXMvZmlsdGVyL2RhdGV0aW1lLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9maWVsZHMvZGF0ZXRpbWUvdGVtcGxhdGVzL2ZpbHRlci9kYXRldGltZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBcUIsU0FBUyxHQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBNkIsVUFBVSxFQUFrQyxNQUFNLDRCQUE0QixDQUFDO0FBQ25ILE9BQU8sRUFBa0IsYUFBYSxFQUFDLE1BQU0sUUFBUSxDQUFDO0FBQ3RELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLGdEQUFnRCxDQUFDO0FBR3JGLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7Ozs7Ozs7O0lDYS9DLDJCQUFLLFVBQUEsd0JBQUE7SUFJbUIseU1BQWMsZUFBQSwyQkFBb0IsQ0FBQSxJQUFDO0lBQWtDLGlCQUFpQixFQUFBO0lBRzFHLDhCQUFtRCx3QkFBQTtJQUVBLCtNQUFpQixlQUFBLDJCQUFvQixDQUFBLElBQUM7SUFJckYsaUJBQWlCLEVBQUEsRUFBQTs7O0lBVkQsZUFBOEI7SUFBOUIsbURBQThCLHdDQUFBO0lBTTlCLGVBQThCO0lBQTlCLG1EQUE4QixnREFBQSwyQ0FBQSwrQ0FBQSwrQ0FBQTs7QURqQjFELE1BS2EsNEJBQTZCLFNBQVEscUJBQXFCO0lBUXJEO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQVZOLE9BQU8sQ0FBYTtJQUU1QixhQUFhLEdBQWtC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QztZQUxwQyxpQkFNQztZQUVELDhCQUFnQztZQUM1QixpQ0FDYztZQUNsQixpQkFBTSxFQUFBO1lBR1YsOEhBaUJjOzs7WUE1Qk4sZUFBMkU7WUFBM0UsNEZBQTJFO1lBRjNFLG1DQUFpQixzREFBQSxzQ0FBQTtZQVFKLGVBQTBCO1lBQTFCLDRDQUEwQixtQkFBQTs7O1NER2xDLDRCQUE0Qjt1RkFBNUIsNEJBQTRCO2NBTHhDLFNBQVM7MkJBQ0ksc0JBQXNCO29PQU94QixPQUFPO2tCQURkLFNBQVM7bUJBQUMsVUFBVSxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0LCBWaWV3Q2hpbGQsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmdiQ2FsZW5kYXIsIE5nYkRhdGVTdHJ1Y3QsIE5nYlBvcG92ZXIsIE5nYlBvcG92ZXJDb25maWcsIE5nYlRpbWVTdHJ1Y3R9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7QnV0dG9uSW50ZXJmYWNlLCBpc0VtcHR5U3RyaW5nfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtCYXNlRGF0ZVRpbWVDb21wb25lbnR9IGZyb20gJy4uLy4uLy4uL2Jhc2UvZGF0ZXRpbWUvYmFzZS1kYXRldGltZS5jb21wb25lbnQnO1xuaW1wb3J0IHtEYXRhVHlwZUZvcm1hdHRlcn0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvZm9ybWF0dGVycy9kYXRhLXR5cGUuZm9ybWF0dGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtEYXRldGltZUZvcm1hdHRlcn0gZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZpY2VzL2Zvcm1hdHRlcnMvZGF0ZXRpbWUvZGF0ZXRpbWUtZm9ybWF0dGVyLnNlcnZpY2VcIjtcbmltcG9ydCB7RGF0ZVRpbWVNb2RlbH0gZnJvbSBcIi4uLy4uL2RhdGV0aW1lLm1vZGVsXCI7XG5pbXBvcnQge1BsYWNlbWVudEFycmF5fSBmcm9tIFwiQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAvdXRpbC9wb3NpdGlvbmluZ1wiO1xuaW1wb3J0IHtGaWVsZExvZ2ljTWFuYWdlcn0gZnJvbSAnLi4vLi4vLi4vZmllbGQtbG9naWMvZmllbGQtbG9naWMubWFuYWdlcic7XG5pbXBvcnQge0ZpZWxkTG9naWNEaXNwbGF5TWFuYWdlcn0gZnJvbSAnLi4vLi4vLi4vZmllbGQtbG9naWMtZGlzcGxheS9maWVsZC1sb2dpYy1kaXNwbGF5Lm1hbmFnZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tZGF0ZXRpbWUtZmlsdGVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZGF0ZXRpbWUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW11cbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVRpbWVGaWx0ZXJGaWVsZENvbXBvbmVudCBleHRlbmRzIEJhc2VEYXRlVGltZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIEBWaWV3Q2hpbGQoTmdiUG9wb3Zlciwge3N0YXRpYzogdHJ1ZX0pXG4gICAgcHJpdmF0ZSBwb3BvdmVyOiBOZ2JQb3BvdmVyO1xuXG4gICAgZGF0ZVRpbWVNb2RlbDogRGF0ZVRpbWVNb2RlbCA9IG5ldyBEYXRlVGltZU1vZGVsKCk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGZvcm1hdHRlcjogRGF0ZXRpbWVGb3JtYXR0ZXIsXG4gICAgICAgIHByb3RlY3RlZCB0eXBlRm9ybWF0dGVyOiBEYXRhVHlwZUZvcm1hdHRlcixcbiAgICAgICAgcHJvdGVjdGVkIGNhbGVuZGFyOiBOZ2JDYWxlbmRhcixcbiAgICAgICAgcHJvdGVjdGVkIGNvbmZpZzogTmdiUG9wb3ZlckNvbmZpZyxcbiAgICAgICAgcHJvdGVjdGVkIGxvZ2ljOiBGaWVsZExvZ2ljTWFuYWdlcixcbiAgICAgICAgcHJvdGVjdGVkIGxvZ2ljRGlzcGxheTogRmllbGRMb2dpY0Rpc3BsYXlNYW5hZ2VyXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKGZvcm1hdHRlciwgdHlwZUZvcm1hdHRlciwgbG9naWMsIGxvZ2ljRGlzcGxheSk7XG4gICAgICAgIGNvbmZpZy5hdXRvQ2xvc2UgPSBcIm91dHNpZGVcIjtcbiAgICAgICAgY29uZmlnLnBsYWNlbWVudCA9IHRoaXMuZ2V0UGxhY2VtZW50KCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLm5nT25Jbml0KCk7XG5cbiAgICAgICAgY29uc3QgdmFsdWVzID0gKHRoaXMuZmllbGQgJiYgdGhpcy5maWVsZC5jcml0ZXJpYSAmJiB0aGlzLmZpZWxkLmNyaXRlcmlhLnZhbHVlcykgfHwgW107XG5cbiAgICAgICAgbGV0IGNyaXRlcmlhID0gJyc7XG4gICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY3JpdGVyaWEgPSB0aGlzLmZpZWxkLmNyaXRlcmlhLnZhbHVlc1swXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE5vdGU6IGhhbmRsZSBOZ2JEYXRlUGlja2VyIGRlZmF1bHQgdmFsaWRhdGlvblxuICAgICAgICAvLyBOb3RlOiBjb252ZXJ0IGVtcHR5IGZvcm0gdmFsdWUgdG8gbnVsbCBmb3IgdGhlIG5nYiBkYXRlIHZhbGlkYXRvciB0byBwYXNzIGl0XG4gICAgICAgIGlmIChpc0VtcHR5U3RyaW5nKGNyaXRlcmlhKSkge1xuICAgICAgICAgICAgdGhpcy5kYXRlVGltZU1vZGVsLmRhdGUgPSB0aGlzLmNhbGVuZGFyLmdldFRvZGF5KCkgYXMgTmdiRGF0ZVN0cnVjdDtcbiAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVNb2RlbC50aW1lID0ge2hvdXI6IDAsIG1pbnV0ZTogMCwgc2Vjb25kOiAwfSBhcyBOZ2JUaW1lU3RydWN0O1xuICAgICAgICAgICAgdGhpcy5maWVsZC5mb3JtQ29udHJvbC5zZXRWYWx1ZShudWxsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGF0ZVRpbWVNb2RlbCA9IERhdGVUaW1lTW9kZWwuaW50ZXJuYWxUb0RhdGVUaW1lU3RydWN0KHRoaXMuZm9ybWF0dGVyLCBjcml0ZXJpYSk7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRlVGltZU1vZGVsID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZC5mb3JtQ29udHJvbC5zZXRWYWx1ZShudWxsKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldEZvcm1WYWx1ZXModGhpcy5kYXRlVGltZU1vZGVsLnRvVXNlckZvcm1hdCh0aGlzLmZvcm1hdHRlcikpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZW5hYmxlIHNlY29uZHMgaW4gdGltZXBpY2tlclxuICAgICAgICBpZiAodGhpcy5mb3JtYXR0ZXIuZ2V0VGltZUZvcm1hdCgpLmluY2x1ZGVzKCdzcycpKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGVUaW1lTW9kZWwuZGlzcGxheVNlY29uZHMgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdWJzY3JpYmVWYWx1ZUNoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZUFsbCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZXRGb3JtVmFsdWVzKGRhdGVUaW1lU3RyaW5nOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5maWVsZC5mb3JtQ29udHJvbC5zZXRWYWx1ZShkYXRlVGltZVN0cmluZyk7XG4gICAgICAgIHRoaXMuZmllbGQuZm9ybUNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2V0RmllbGRWYWx1ZShuZXdWYWx1ZSk6IHZvaWQge1xuICAgICAgICB0aGlzLmZpZWxkLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIHRoaXMuZmllbGQuY3JpdGVyaWEub3BlcmF0b3IgPSAnPSc7XG4gICAgICAgIHRoaXMuZmllbGQuY3JpdGVyaWEudmFsdWVzID0gW25ld1ZhbHVlXTtcbiAgICB9XG5cbiAgICBvbkRhdGVDaGFuZ2UoZGF0ZTogTmdiRGF0ZVN0cnVjdCB8IG51bGwpIHtcbiAgICAgICAgdGhpcy5kYXRlVGltZU1vZGVsLmRhdGUgPSBkYXRlO1xuICAgICAgICB0aGlzLnNldEZvcm1WYWx1ZXModGhpcy5kYXRlVGltZU1vZGVsLnRvVXNlckZvcm1hdCh0aGlzLmZvcm1hdHRlcikpO1xuICAgIH1cblxuICAgIG9uVGltZUNoYW5nZSh0aW1lOiBOZ2JUaW1lU3RydWN0IHwgbnVsbCkge1xuICAgICAgICB0aGlzLmRhdGVUaW1lTW9kZWwudGltZSA9IHRpbWU7XG4gICAgICAgIHRoaXMuc2V0Rm9ybVZhbHVlcyh0aGlzLmRhdGVUaW1lTW9kZWwudG9Vc2VyRm9ybWF0KHRoaXMuZm9ybWF0dGVyKSk7XG4gICAgfVxuXG4gICAgb25JbnB1dENoYW5nZSgkZXZlbnQ6IGFueSkge1xuICAgICAgICBjb25zdCBkYXRlVGltZU1vZGVsID0gRGF0ZVRpbWVNb2RlbC50b0RhdGVUaW1lU3RydWN0KHRoaXMuZm9ybWF0dGVyLCAkZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgaWYoIWRhdGVUaW1lTW9kZWwpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGF0ZVRpbWVNb2RlbCA9IGRhdGVUaW1lTW9kZWw7XG4gICAgfVxuXG4gICAgZ2V0T3BlbkJ1dHRvbigpOiBCdXR0b25JbnRlcmZhY2Uge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAga2xhc3M6ICdidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBtLTAgYm9yZGVyLTAnLFxuICAgICAgICAgICAgaWNvbjogJ2NhbGVuZGFyJ1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldFBsYWNlbWVudCgpOiBQbGFjZW1lbnRBcnJheSB7XG4gICAgICAgIHJldHVybiBbJ2JvdHRvbS1yaWdodCcsICd0b3AtcmlnaHQnLCAnYm90dG9tLWxlZnQnLCAndG9wLWxlZnQnXTtcbiAgICB9XG5cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cblxuPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIG1yLTJcIj5cblxuICAgIDxpbnB1dFxuICAgICAgICBbbmdDbGFzc109XCJrbGFzc1wiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJnZXREYXRlVGltZUZvcm1hdCgpLnRvTG93ZXJDYXNlKClcIlxuICAgICAgICBbY2xhc3MuaXMtaW52YWxpZF09XCJmaWVsZC5mb3JtQ29udHJvbC5pbnZhbGlkICYmIGZpZWxkLmZvcm1Db250cm9sLnRvdWNoZWRcIlxuICAgICAgICBbZm9ybUNvbnRyb2xdPVwiZmllbGQuZm9ybUNvbnRyb2xcIlxuICAgICAgICAoY2hhbmdlKT1cIm9uSW5wdXRDaGFuZ2UoJGV2ZW50KVwiXG4gICAgPlxuXG4gICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxuICAgICAgICA8c2NybS1idXR0b24gW2NvbmZpZ109XCJnZXRPcGVuQnV0dG9uKClcIiBbbmdiUG9wb3Zlcl09XCJjYWxlbmRhckNvbnRlbnRcIj5cbiAgICAgICAgPC9zY3JtLWJ1dHRvbj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuXG48bmctdGVtcGxhdGUgI2NhbGVuZGFyQ29udGVudD5cbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPG5nYi1kYXRlcGlja2VyIG5hbWU9XCJkYXRlcGlja2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdNb2RlbF09XCJkYXRlVGltZU1vZGVsLmRhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkYXRlU2VsZWN0KT1cIm9uRGF0ZUNoYW5nZSgkZXZlbnQpXCIgW3N0YXJ0RGF0ZV09XCJkYXRlVGltZU1vZGVsLmRhdGVcIj48L25nYi1kYXRlcGlja2VyPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtYXV0b1wiPlxuICAgICAgICAgICAgPG5nYi10aW1lcGlja2VyIG5hbWU9XCJ0aW1lcGlja2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdNb2RlbF09XCJkYXRlVGltZU1vZGVsLnRpbWVcIiAobmdNb2RlbENoYW5nZSk9XCJvblRpbWVDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3NlY29uZHNdPVwiZGF0ZVRpbWVNb2RlbC5kaXNwbGF5U2Vjb25kc1wiIFtob3VyU3RlcF09XCJkYXRlVGltZU1vZGVsLmhvdXJTdGVwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbWludXRlU3RlcF09XCJkYXRlVGltZU1vZGVsLm1pbnV0ZVN0ZXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzZWNvbmRTdGVwXT1cImRhdGVUaW1lTW9kZWwuc2Vjb25kU3RlcFwiPlxuICAgICAgICAgICAgPC9uZ2ItdGltZXBpY2tlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L25nLXRlbXBsYXRlPlxuIl19