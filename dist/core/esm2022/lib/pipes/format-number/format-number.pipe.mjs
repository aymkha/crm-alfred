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
import { Inject, LOCALE_ID, Pipe } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "../../services/formatters/number/number-formatter.service";
class FormatNumberPipe extends DecimalPipe {
    formatter;
    locale;
    constructor(formatter, locale) {
        super(locale);
        this.formatter = formatter;
        this.locale = locale;
    }
    // eslint-disable-next-line no-dupe-class-members,@typescript-eslint/no-unused-vars
    transform(value, digitsInfo, locale) {
        if (!value) {
            return null;
        }
        return this.formatter.toUserFormat('' + value);
    }
    static ɵfac = function FormatNumberPipe_Factory(t) { return new (t || FormatNumberPipe)(i0.ɵɵdirectiveInject(i1.NumberFormatter, 16), i0.ɵɵdirectiveInject(LOCALE_ID, 16)); };
    static ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "formatNumber", type: FormatNumberPipe, pure: true });
}
export { FormatNumberPipe };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormatNumberPipe, [{
        type: Pipe,
        args: [{
                name: 'formatNumber'
            }]
    }], function () { return [{ type: i1.NumberFormatter }, { type: undefined, decorators: [{
                type: Inject,
                args: [LOCALE_ID]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LW51bWJlci5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3BpcGVzL2Zvcm1hdC1udW1iZXIvZm9ybWF0LW51bWJlci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGlCQUFpQixDQUFDOzs7QUFHNUMsTUFHYSxnQkFBaUIsU0FBUSxXQUFXO0lBRy9CO0lBQ2dCO0lBRjlCLFlBQ2MsU0FBMEIsRUFDVixNQUFjO1FBRXhDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUhKLGNBQVMsR0FBVCxTQUFTLENBQWlCO1FBQ1YsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUc1QyxDQUFDO0lBS0QsbUZBQW1GO0lBQ25GLFNBQVMsQ0FBQyxLQUF5QyxFQUFFLFVBQW1CLEVBQUUsTUFBZTtRQUVyRixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1IsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUVELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQ25ELENBQUM7MEVBcEJRLGdCQUFnQixxRUFJYixTQUFTOytFQUpaLGdCQUFnQjs7U0FBaEIsZ0JBQWdCO3VGQUFoQixnQkFBZ0I7Y0FINUIsSUFBSTtlQUFDO2dCQUNGLElBQUksRUFBRSxjQUFjO2FBQ3ZCOztzQkFLUSxNQUFNO3VCQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0LCBMT0NBTEVfSUQsIFBpcGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEZWNpbWFsUGlwZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TnVtYmVyRm9ybWF0dGVyfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mb3JtYXR0ZXJzL251bWJlci9udW1iZXItZm9ybWF0dGVyLnNlcnZpY2UnO1xuXG5AUGlwZSh7XG4gICAgbmFtZTogJ2Zvcm1hdE51bWJlcidcbn0pXG5leHBvcnQgY2xhc3MgRm9ybWF0TnVtYmVyUGlwZSBleHRlbmRzIERlY2ltYWxQaXBlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgZm9ybWF0dGVyOiBOdW1iZXJGb3JtYXR0ZXIsXG4gICAgICAgIEBJbmplY3QoTE9DQUxFX0lEKSBwdWJsaWMgbG9jYWxlOiBzdHJpbmdcbiAgICApIHtcbiAgICAgICAgc3VwZXIobG9jYWxlKTtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlciB8IHN0cmluZywgZGlnaXRzSW5mbz86IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKTogc3RyaW5nIHwgbnVsbDtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZHVwZS1jbGFzcy1tZW1iZXJzXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBudWxsIHwgdW5kZWZpbmVkLCBkaWdpdHNJbmZvPzogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpOiBudWxsO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1kdXBlLWNsYXNzLW1lbWJlcnMsQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBkaWdpdHNJbmZvPzogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcblxuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdHRlci50b1VzZXJGb3JtYXQoJycgKyB2YWx1ZSk7XG4gICAgfVxufVxuIl19