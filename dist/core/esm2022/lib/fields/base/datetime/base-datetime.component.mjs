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
import { BaseFieldComponent } from '../base-field.component';
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/formatters/datetime/datetime-formatter.service";
import * as i2 from "../../../services/formatters/data-type.formatter.service";
import * as i3 from "../../field-logic/field-logic.manager";
import * as i4 from "../../field-logic-display/field-logic-display.manager";
class BaseDateTimeComponent extends BaseFieldComponent {
    formatter;
    typeFormatter;
    logic;
    logicDisplay;
    vm$ = this.formatter.format$;
    constructor(formatter, typeFormatter, logic, logicDisplay) {
        super(typeFormatter, logic, logicDisplay);
        this.formatter = formatter;
        this.typeFormatter = typeFormatter;
        this.logic = logic;
        this.logicDisplay = logicDisplay;
    }
    getDateFormat() {
        if (this.field.metadata.date_time_format) {
            return this.field.metadata.date_time_format;
        }
        return this.formatter.getDateFormat();
    }
    getDateTimeFormat() {
        return this.formatter.getDateTimeFormat();
    }
    toInternalFormat(fieldType, value) {
        return this.formatter.toInternalFormat(value, { fromFormat: this.getDateTimeFormat() });
    }
    static ɵfac = function BaseDateTimeComponent_Factory(t) { return new (t || BaseDateTimeComponent)(i0.ɵɵdirectiveInject(i1.DatetimeFormatter), i0.ɵɵdirectiveInject(i2.DataTypeFormatter), i0.ɵɵdirectiveInject(i3.FieldLogicManager), i0.ɵɵdirectiveInject(i4.FieldLogicDisplayManager)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BaseDateTimeComponent, selectors: [["ng-component"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function BaseDateTimeComponent_Template(rf, ctx) { }, encapsulation: 2 });
}
export { BaseDateTimeComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseDateTimeComponent, [{
        type: Component,
        args: [{ template: '' }]
    }], function () { return [{ type: i1.DatetimeFormatter }, { type: i2.DataTypeFormatter }, { type: i3.FieldLogicManager }, { type: i4.FieldLogicDisplayManager }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1kYXRldGltZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL2Jhc2UvZGF0ZXRpbWUvYmFzZS1kYXRldGltZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzNELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7OztBQU14QyxNQUNhLHFCQUFzQixTQUFRLGtCQUFrQjtJQUszQztJQUNBO0lBQ0E7SUFDQTtJQU5kLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztJQUU3QixZQUNjLFNBQTRCLEVBQzVCLGFBQWdDLEVBQ2hDLEtBQXdCLEVBQ3hCLFlBQXNDO1FBRWhELEtBQUssQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBTGhDLGNBQVMsR0FBVCxTQUFTLENBQW1CO1FBQzVCLGtCQUFhLEdBQWIsYUFBYSxDQUFtQjtRQUNoQyxVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBMEI7SUFHcEQsQ0FBQztJQUVELGFBQWE7UUFDVCxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFO1lBQ3JDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUE7U0FDOUM7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELGlCQUFpQjtRQUNiLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzlDLENBQUM7SUFFUyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsS0FBSztRQUN2QyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLEVBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFDLENBQUMsQ0FBQztJQUUxRixDQUFDOytFQTNCUSxxQkFBcUI7NkRBQXJCLHFCQUFxQjs7U0FBckIscUJBQXFCO3VGQUFyQixxQkFBcUI7Y0FEakMsU0FBUztlQUFDLEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtCYXNlRmllbGRDb21wb25lbnR9IGZyb20gJy4uL2Jhc2UtZmllbGQuY29tcG9uZW50JztcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGF0YVR5cGVGb3JtYXR0ZXJ9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2Zvcm1hdHRlcnMvZGF0YS10eXBlLmZvcm1hdHRlci5zZXJ2aWNlJztcbmltcG9ydCB7RGF0ZXRpbWVGb3JtYXR0ZXJ9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2Zvcm1hdHRlcnMvZGF0ZXRpbWUvZGF0ZXRpbWUtZm9ybWF0dGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtGaWVsZExvZ2ljTWFuYWdlcn0gZnJvbSAnLi4vLi4vZmllbGQtbG9naWMvZmllbGQtbG9naWMubWFuYWdlcic7XG5pbXBvcnQge0ZpZWxkTG9naWNEaXNwbGF5TWFuYWdlcn0gZnJvbSAnLi4vLi4vZmllbGQtbG9naWMtZGlzcGxheS9maWVsZC1sb2dpYy1kaXNwbGF5Lm1hbmFnZXInO1xuXG5AQ29tcG9uZW50KHt0ZW1wbGF0ZTogJyd9KVxuZXhwb3J0IGNsYXNzIEJhc2VEYXRlVGltZUNvbXBvbmVudCBleHRlbmRzIEJhc2VGaWVsZENvbXBvbmVudCB7XG5cbiAgICB2bSQgPSB0aGlzLmZvcm1hdHRlci5mb3JtYXQkO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBmb3JtYXR0ZXI6IERhdGV0aW1lRm9ybWF0dGVyLFxuICAgICAgICBwcm90ZWN0ZWQgdHlwZUZvcm1hdHRlcjogRGF0YVR5cGVGb3JtYXR0ZXIsXG4gICAgICAgIHByb3RlY3RlZCBsb2dpYzogRmllbGRMb2dpY01hbmFnZXIsXG4gICAgICAgIHByb3RlY3RlZCBsb2dpY0Rpc3BsYXk6IEZpZWxkTG9naWNEaXNwbGF5TWFuYWdlclxuICAgICkge1xuICAgICAgICBzdXBlcih0eXBlRm9ybWF0dGVyLCBsb2dpYywgbG9naWNEaXNwbGF5KTtcbiAgICB9XG5cbiAgICBnZXREYXRlRm9ybWF0KCk6IHN0cmluZyB7XG4gICAgICAgIGlmKHRoaXMuZmllbGQubWV0YWRhdGEuZGF0ZV90aW1lX2Zvcm1hdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmllbGQubWV0YWRhdGEuZGF0ZV90aW1lX2Zvcm1hdFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdHRlci5nZXREYXRlRm9ybWF0KCk7XG4gICAgfVxuXG4gICAgZ2V0RGF0ZVRpbWVGb3JtYXQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0dGVyLmdldERhdGVUaW1lRm9ybWF0KCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHRvSW50ZXJuYWxGb3JtYXQoZmllbGRUeXBlLCB2YWx1ZSk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdHRlci50b0ludGVybmFsRm9ybWF0KHZhbHVlLCB7ZnJvbUZvcm1hdDogdGhpcy5nZXREYXRlVGltZUZvcm1hdCgpfSk7XG5cbiAgICB9XG5cbn1cbiJdfQ==