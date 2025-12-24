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
import { DateEditFieldComponent } from '../edit/date.component';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/formatters/datetime/date-formatter.service";
import * as i2 from "@ng-bootstrap/ng-bootstrap";
import * as i3 from "../../../../services/formatters/data-type.formatter.service";
import * as i4 from "../../../field-logic/field-logic.manager";
import * as i5 from "../../../field-logic-display/field-logic-display.manager";
import * as i6 from "@angular/common";
import * as i7 from "@angular/forms";
import * as i8 from "../../../../components/button/button.component";
class DateFilterFieldComponent extends DateEditFieldComponent {
    formatter;
    dateAdapter;
    dateParserFormatter;
    typeFormatter;
    logic;
    logicDisplay;
    constructor(formatter, dateAdapter, dateParserFormatter, typeFormatter, logic, logicDisplay) {
        super(formatter, dateAdapter, dateParserFormatter, typeFormatter, logic, logicDisplay);
        this.formatter = formatter;
        this.dateAdapter = dateAdapter;
        this.dateParserFormatter = dateParserFormatter;
        this.typeFormatter = typeFormatter;
        this.logic = logic;
        this.logicDisplay = logicDisplay;
    }
    ngOnInit() {
        let current = null;
        if (this.field.criteria.values && this.field.criteria.values.length > 0) {
            current = this.field.criteria.values[0];
        }
        if (!isVoid(current) && !isEmptyString(current)) {
            current = current.trim();
        }
        this.field.value = current ?? '';
        super.ngOnInit();
    }
    setFieldValue(newValue) {
        super.setFieldValue(newValue);
        this.field.criteria.operator = '=';
        this.field.criteria.values = [newValue];
    }
    static ɵfac = function DateFilterFieldComponent_Factory(t) { return new (t || DateFilterFieldComponent)(i0.ɵɵdirectiveInject(i1.DateFormatter), i0.ɵɵdirectiveInject(i2.NgbDateAdapter), i0.ɵɵdirectiveInject(i2.NgbDateParserFormatter), i0.ɵɵdirectiveInject(i3.DataTypeFormatter), i0.ɵɵdirectiveInject(i4.FieldLogicManager), i0.ɵɵdirectiveInject(i5.FieldLogicDisplayManager)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DateFilterFieldComponent, selectors: [["scrm-date-filter"]], features: [i0.ɵɵProvidersFeature([
                { provide: NgbDateAdapter, useClass: DateAdapter },
                { provide: NgbDateParserFormatter, useClass: DateParserFormatter }
            ]), i0.ɵɵInheritDefinitionFeature], decls: 5, vars: 8, consts: [[1, "input-group"], ["ngbDatepicker", "", 3, "ngClass", "placement", "placeholder", "formControl", "startDate", "ngModelChange"], ["datepicker", "ngbDatepicker"], [1, "input-group-append", "align-items-end"], [3, "config"]], template: function DateFilterFieldComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "input", 1, 2);
            i0.ɵɵlistener("ngModelChange", function DateFilterFieldComponent_Template_input_ngModelChange_1_listener($event) { return ctx.setModel($event); });
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
export { DateFilterFieldComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DateFilterFieldComponent, [{
        type: Component,
        args: [{ selector: 'scrm-date-filter', providers: [
                    { provide: NgbDateAdapter, useClass: DateAdapter },
                    { provide: NgbDateParserFormatter, useClass: DateParserFormatter }
                ], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div class=\"input-group\">\n    <input ngbDatepicker\n           [ngClass]=\"klass\"\n           [placement]=\"getPlacement()\"\n           [placeholder]=\"getDateFormat().toLowerCase()\"\n           [class.is-invalid]=\"field.formControl.invalid && field.formControl.touched\"\n           [formControl]=\"field.formControl\"\n           [startDate]=\"dateModel\"\n           (ngModelChange)=\"setModel($event)\"\n           #datepicker=\"ngbDatepicker\">\n    <span class=\"input-group-append align-items-end\">\n        <scrm-button [config]=\"getOpenButton(datepicker)\">\n        </scrm-button>\n    </span>\n</div>\n" }]
    }], function () { return [{ type: i1.DateFormatter }, { type: i2.NgbDateAdapter }, { type: i2.NgbDateParserFormatter }, { type: i3.DataTypeFormatter }, { type: i4.FieldLogicManager }, { type: i5.FieldLogicDisplayManager }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL2RhdGUvdGVtcGxhdGVzL2ZpbHRlci9kYXRlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9maWVsZHMvZGF0ZS90ZW1wbGF0ZXMvZmlsdGVyL2RhdGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEdBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBQyxjQUFjLEVBQUUsc0JBQXNCLEVBQWdCLE1BQU0sNEJBQTRCLENBQUM7QUFDakcsT0FBTyxFQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFFN0MsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sMkRBQTJELENBQUM7QUFFOUYsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGtEQUFrRCxDQUFDO0FBRzdFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdCQUF3QixDQUFBOzs7Ozs7Ozs7O0FBRy9ELE1BU2Esd0JBQXlCLFNBQVEsc0JBQXNCO0lBR2xEO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQU5kLFlBQ2MsU0FBd0IsRUFDeEIsV0FBbUMsRUFDbkMsbUJBQTJDLEVBQzNDLGFBQWdDLEVBQ2hDLEtBQXdCLEVBQ3hCLFlBQXNDO1FBRWhELEtBQUssQ0FBQyxTQUFTLEVBQ2IsV0FBVyxFQUNYLG1CQUFtQixFQUNuQixhQUFhLEVBQ2IsS0FBSyxFQUNMLFlBQVksQ0FDYixDQUFBO1FBYlMsY0FBUyxHQUFULFNBQVMsQ0FBZTtRQUN4QixnQkFBVyxHQUFYLFdBQVcsQ0FBd0I7UUFDbkMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUF3QjtRQUMzQyxrQkFBYSxHQUFiLGFBQWEsQ0FBbUI7UUFDaEMsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQTBCO0lBU3BELENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JFLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDM0M7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzdDLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDNUI7UUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO1FBRWpDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRVMsYUFBYSxDQUFDLFFBQVE7UUFDNUIsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVDLENBQUM7a0ZBdENRLHdCQUF3Qjs2REFBeEIsd0JBQXdCLHNFQUx0QjtnQkFDUCxFQUFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBQztnQkFDaEQsRUFBQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFDO2FBQ25FO1lDbEJMLDhCQUF5QixrQkFBQTtZQVFkLDBIQUFpQixvQkFBZ0IsSUFBQztZQVB6QyxpQkFRbUM7WUFDbkMsK0JBQWlEO1lBQzdDLGlDQUNjO1lBQ2xCLGlCQUFPLEVBQUE7OztZQVJBLGVBQTJFO1lBQTNFLDRGQUEyRTtZQUgzRSxtQ0FBaUIsaUNBQUEsa0RBQUEsc0NBQUEsNEJBQUE7WUFTUCxlQUFvQztZQUFwQywrQ0FBb0M7OztTRFM1Qyx3QkFBd0I7dUZBQXhCLHdCQUF3QjtjQVRwQyxTQUFTOzJCQUNJLGtCQUFrQixhQUdqQjtvQkFDUCxFQUFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBQztvQkFDaEQsRUFBQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFDO2lCQUNuRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0LH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05nYkRhdGVBZGFwdGVyLCBOZ2JEYXRlUGFyc2VyRm9ybWF0dGVyLCBOZ2JEYXRlU3RydWN0fSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQge2lzRW1wdHlTdHJpbmcsIGlzVm9pZH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7RGF0YVR5cGVGb3JtYXR0ZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL2Zvcm1hdHRlcnMvZGF0YS10eXBlLmZvcm1hdHRlci5zZXJ2aWNlJztcbmltcG9ydCB7RGF0ZVBhcnNlckZvcm1hdHRlcn0gZnJvbSAnLi4vLi4vLi4vYmFzZS9kYXRldGltZS9kYXRlL2RhdGUtcGFyc2VyLWZvcm1hdHRlci5zZXJ2aWNlJztcbmltcG9ydCB7RGF0ZUZvcm1hdHRlcn0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvZm9ybWF0dGVycy9kYXRldGltZS9kYXRlLWZvcm1hdHRlci5zZXJ2aWNlJztcbmltcG9ydCB7RGF0ZUFkYXB0ZXJ9IGZyb20gJy4uLy4uLy4uL2Jhc2UvZGF0ZXRpbWUvZGF0ZS9kYXRlLWFkYXB0ZXIuc2VydmljZSc7XG5pbXBvcnQge0ZpZWxkTG9naWNNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi9maWVsZC1sb2dpYy9maWVsZC1sb2dpYy5tYW5hZ2VyJztcbmltcG9ydCB7RmllbGRMb2dpY0Rpc3BsYXlNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi9maWVsZC1sb2dpYy1kaXNwbGF5L2ZpZWxkLWxvZ2ljLWRpc3BsYXkubWFuYWdlcic7XG5pbXBvcnQgeyBEYXRlRWRpdEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vZWRpdC9kYXRlLmNvbXBvbmVudCdcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tZGF0ZS1maWx0ZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9kYXRlLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7cHJvdmlkZTogTmdiRGF0ZUFkYXB0ZXIsIHVzZUNsYXNzOiBEYXRlQWRhcHRlcn0sXG4gICAgICAgIHtwcm92aWRlOiBOZ2JEYXRlUGFyc2VyRm9ybWF0dGVyLCB1c2VDbGFzczogRGF0ZVBhcnNlckZvcm1hdHRlcn1cbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIERhdGVGaWx0ZXJGaWVsZENvbXBvbmVudCBleHRlbmRzIERhdGVFZGl0RmllbGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGZvcm1hdHRlcjogRGF0ZUZvcm1hdHRlcixcbiAgICAgICAgcHJvdGVjdGVkIGRhdGVBZGFwdGVyOiBOZ2JEYXRlQWRhcHRlcjxzdHJpbmc+LFxuICAgICAgICBwcm90ZWN0ZWQgZGF0ZVBhcnNlckZvcm1hdHRlcjogTmdiRGF0ZVBhcnNlckZvcm1hdHRlcixcbiAgICAgICAgcHJvdGVjdGVkIHR5cGVGb3JtYXR0ZXI6IERhdGFUeXBlRm9ybWF0dGVyLFxuICAgICAgICBwcm90ZWN0ZWQgbG9naWM6IEZpZWxkTG9naWNNYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgbG9naWNEaXNwbGF5OiBGaWVsZExvZ2ljRGlzcGxheU1hbmFnZXJcbiAgICApIHtcbiAgICAgICAgc3VwZXIoZm9ybWF0dGVyLFxuICAgICAgICAgIGRhdGVBZGFwdGVyLFxuICAgICAgICAgIGRhdGVQYXJzZXJGb3JtYXR0ZXIsXG4gICAgICAgICAgdHlwZUZvcm1hdHRlcixcbiAgICAgICAgICBsb2dpYyxcbiAgICAgICAgICBsb2dpY0Rpc3BsYXlcbiAgICAgICAgKVxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBsZXQgY3VycmVudCA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLmZpZWxkLmNyaXRlcmlhLnZhbHVlcyAmJiB0aGlzLmZpZWxkLmNyaXRlcmlhLnZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjdXJyZW50ID0gdGhpcy5maWVsZC5jcml0ZXJpYS52YWx1ZXNbMF07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWlzVm9pZChjdXJyZW50KSAmJiAhaXNFbXB0eVN0cmluZyhjdXJyZW50KSkge1xuICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQudHJpbSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5maWVsZC52YWx1ZSA9IGN1cnJlbnQgPz8gJyc7XG5cbiAgICAgICAgc3VwZXIubmdPbkluaXQoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2V0RmllbGRWYWx1ZShuZXdWYWx1ZSk6IHZvaWQge1xuICAgICAgICBzdXBlci5zZXRGaWVsZFZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgdGhpcy5maWVsZC5jcml0ZXJpYS5vcGVyYXRvciA9ICc9JztcbiAgICAgICAgdGhpcy5maWVsZC5jcml0ZXJpYS52YWx1ZXMgPSBbbmV3VmFsdWVdO1xuICAgIH1cblxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgPGlucHV0IG5nYkRhdGVwaWNrZXJcbiAgICAgICAgICAgW25nQ2xhc3NdPVwia2xhc3NcIlxuICAgICAgICAgICBbcGxhY2VtZW50XT1cImdldFBsYWNlbWVudCgpXCJcbiAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImdldERhdGVGb3JtYXQoKS50b0xvd2VyQ2FzZSgpXCJcbiAgICAgICAgICAgW2NsYXNzLmlzLWludmFsaWRdPVwiZmllbGQuZm9ybUNvbnRyb2wuaW52YWxpZCAmJiBmaWVsZC5mb3JtQ29udHJvbC50b3VjaGVkXCJcbiAgICAgICAgICAgW2Zvcm1Db250cm9sXT1cImZpZWxkLmZvcm1Db250cm9sXCJcbiAgICAgICAgICAgW3N0YXJ0RGF0ZV09XCJkYXRlTW9kZWxcIlxuICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRNb2RlbCgkZXZlbnQpXCJcbiAgICAgICAgICAgI2RhdGVwaWNrZXI9XCJuZ2JEYXRlcGlja2VyXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmQgYWxpZ24taXRlbXMtZW5kXCI+XG4gICAgICAgIDxzY3JtLWJ1dHRvbiBbY29uZmlnXT1cImdldE9wZW5CdXR0b24oZGF0ZXBpY2tlcilcIj5cbiAgICAgICAgPC9zY3JtLWJ1dHRvbj5cbiAgICA8L3NwYW4+XG48L2Rpdj5cbiJdfQ==