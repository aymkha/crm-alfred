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
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { formatNumber } from '@angular/common';
import { isFalse, isVoid } from 'common';
import * as i0 from "@angular/core";
import * as i1 from "../../../store/user-preference/user-preference.store";
import * as i2 from "../../record/field/form-control.utils";
class NumberFormatter {
    preferences;
    formUtils;
    locale;
    constructor(preferences, formUtils, locale) {
        this.preferences = preferences;
        this.formUtils = formUtils;
        this.locale = locale;
    }
    toUserFormat(value, options) {
        if (isVoid(value) || value === '') {
            return '';
        }
        if (isFalse(options?.metadata?.format ?? true)) {
            return value;
        }
        const formatted = formatNumber(Number(value), this.locale);
        return this.replaceSeparators(formatted);
    }
    toInternalFormat(value) {
        if (!value) {
            return value;
        }
        const decimalSymbol = this.getDecimalsSymbol() || '.';
        const groupSymbol = this.getGroupSymbol() || ',';
        let decimalSymbolRegex = new RegExp(decimalSymbol, 'g');
        if (decimalSymbol === '.') {
            decimalSymbolRegex = new RegExp('\\.', 'g');
        }
        let groupSymbolRegex = new RegExp(groupSymbol, 'g');
        if (groupSymbol === '.') {
            groupSymbolRegex = new RegExp('\\.', 'g');
        }
        value = value.replace(groupSymbolRegex, 'group_separator');
        value = value.replace(decimalSymbolRegex, 'decimal_separator');
        value = value.replace(/decimal_separator/g, '.');
        value = value.replace(/group_separator/g, '');
        return value;
    }
    getFloatUserFormatPattern() {
        const group = this.getGroupSymbol();
        const decimals = this.getDecimalsSymbol();
        let pattern = '^(';
        pattern += '(\\d{1,3}(\\' + group + '\\d{3})*(\\' + decimals + '\\d+)?)|';
        pattern += '\\d*|';
        pattern += '(\\d+(\\' + decimals + '\\d+)?)|';
        pattern += '(\\d+(\\.\\d+)?)';
        pattern += ')$';
        return pattern;
    }
    getIntUserFormatPattern() {
        const group = this.getGroupSymbol();
        let pattern = '^(';
        pattern += '(\\d{1,3}(\\' + group + '\\d{3})*)|';
        pattern += '\\d*';
        pattern += ')$';
        return pattern;
    }
    getGroupSymbol() {
        const separator = this.preferences.getUserPreference('num_grp_sep');
        if (separator) {
            return separator;
        }
        return ',';
    }
    getDecimalsSymbol() {
        const separator = this.preferences.getUserPreference('dec_sep');
        if (separator) {
            return separator;
        }
        return '.';
    }
    replaceSeparators(transformed) {
        if (!transformed) {
            return transformed;
        }
        transformed = transformed.replace(/,/g, 'group_separator');
        transformed = transformed.replace(/\./g, 'decimal_separator');
        const decimalSymbol = this.getDecimalsSymbol() || '.';
        const groupSymbol = this.getGroupSymbol() || ',';
        transformed = transformed.replace(/decimal_separator/g, decimalSymbol);
        transformed = transformed.replace(/group_separator/g, groupSymbol);
        return transformed;
    }
    validateIntUserFormat(inputValue) {
        const trimmedInputValue = this.formUtils.getTrimmedInputValue(inputValue);
        if (this.formUtils.isEmptyInputValue(trimmedInputValue)) {
            return false;
        }
        const regex = new RegExp(this.getIntUserFormatPattern());
        if (regex.test(trimmedInputValue)) {
            return false;
        }
    }
    validateFloatUserFormat(inputValue) {
        const trimmedInputValue = this.formUtils.getTrimmedInputValue(inputValue);
        if (this.formUtils.isEmptyInputValue(trimmedInputValue)) {
            return false;
        }
        const regex = new RegExp(this.getFloatUserFormatPattern());
        return !regex.test(trimmedInputValue);
    }
    static ɵfac = function NumberFormatter_Factory(t) { return new (t || NumberFormatter)(i0.ɵɵinject(i1.UserPreferenceStore), i0.ɵɵinject(i2.FormControlUtils), i0.ɵɵinject(LOCALE_ID)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NumberFormatter, factory: NumberFormatter.ɵfac, providedIn: 'root' });
}
export { NumberFormatter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NumberFormatter, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.UserPreferenceStore }, { type: i2.FormControlUtils }, { type: undefined, decorators: [{
                type: Inject,
                args: [LOCALE_ID]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWZvcm1hdHRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3NlcnZpY2VzL2Zvcm1hdHRlcnMvbnVtYmVyL251bWJlci1mb3JtYXR0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRTVELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUU3QyxPQUFPLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBQyxNQUFNLFFBQVEsQ0FBQzs7OztBQUd2QyxNQUdhLGVBQWU7SUFHVjtJQUNBO0lBQ2dCO0lBSDlCLFlBQ2MsV0FBZ0MsRUFDaEMsU0FBMkIsRUFDWCxNQUFjO1FBRjlCLGdCQUFXLEdBQVgsV0FBVyxDQUFxQjtRQUNoQyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUNYLFdBQU0sR0FBTixNQUFNLENBQVE7SUFFNUMsQ0FBQztJQUVELFlBQVksQ0FBQyxLQUFhLEVBQUcsT0FBdUI7UUFFaEQsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxLQUFLLEVBQUUsRUFBRTtZQUMvQixPQUFPLEVBQUUsQ0FBQztTQUNiO1FBRUQsSUFBRyxPQUFPLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLElBQUksSUFBSSxDQUFDLEVBQUU7WUFDM0MsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFFRCxNQUFNLFNBQVMsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzRCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lB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QUFDLHlCQUF5QixFQUFFLENBQUMsQ0FBQztRQUMzRCxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBRTFDLENBQUM7eUVBMUlRLGVBQWUscUZBS1osU0FBUztnRUFMWixlQUFlLFdBQWYsZUFBZSxtQkFGWixNQUFNOztTQUVULGVBQWU7dUZBQWYsZUFBZTtjQUgzQixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckI7O3NCQU1RLE1BQU07dUJBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGUsIExPQ0FMRV9JRH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1VzZXJQcmVmZXJlbmNlU3RvcmV9IGZyb20gJy4uLy4uLy4uL3N0b3JlL3VzZXItcHJlZmVyZW5jZS91c2VyLXByZWZlcmVuY2Uuc3RvcmUnO1xuaW1wb3J0IHtmb3JtYXROdW1iZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0Zvcm1hdE9wdGlvbnMsIEZvcm1hdHRlcn0gZnJvbSAnLi4vZm9ybWF0dGVyLm1vZGVsJztcbmltcG9ydCB7aXNGYWxzZSwgaXNWb2lkfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtGb3JtQ29udHJvbFV0aWxzfSBmcm9tICcuLi8uLi9yZWNvcmQvZmllbGQvZm9ybS1jb250cm9sLnV0aWxzJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOdW1iZXJGb3JtYXR0ZXIgaW1wbGVtZW50cyBGb3JtYXR0ZXIge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBwcmVmZXJlbmNlczogVXNlclByZWZlcmVuY2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGZvcm1VdGlsczogRm9ybUNvbnRyb2xVdGlscyxcbiAgICAgICAgQEluamVjdChMT0NBTEVfSUQpIHB1YmxpYyBsb2NhbGU6IHN0cmluZ1xuICAgICkge1xuICAgIH1cblxuICAgIHRvVXNlckZvcm1hdCh2YWx1ZTogc3RyaW5nLCAgb3B0aW9ucz86IEZvcm1hdE9wdGlvbnMpOiBzdHJpbmcge1xuXG4gICAgICAgIGlmIChpc1ZvaWQodmFsdWUpIHx8IHZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoaXNGYWxzZShvcHRpb25zPy5tZXRhZGF0YT8uZm9ybWF0ID8/IHRydWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmb3JtYXR0ZWQgPSBmb3JtYXROdW1iZXIoTnVtYmVyKHZhbHVlKSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXBsYWNlU2VwYXJhdG9ycyhmb3JtYXR0ZWQpO1xuICAgIH1cblxuICAgIHRvSW50ZXJuYWxGb3JtYXQodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG5cbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGVjaW1hbFN5bWJvbCA9IHRoaXMuZ2V0RGVjaW1hbHNTeW1ib2woKSB8fCAnLic7XG4gICAgICAgIGNvbnN0IGdyb3VwU3ltYm9sID0gdGhpcy5nZXRHcm91cFN5bWJvbCgpIHx8ICcsJztcblxuICAgICAgICBsZXQgZGVjaW1hbFN5bWJvbFJlZ2V4ID0gbmV3IFJlZ0V4cChkZWNpbWFsU3ltYm9sLCAnZycpO1xuICAgICAgICBpZiAoZGVjaW1hbFN5bWJvbCA9PT0gJy4nKSB7XG4gICAgICAgICAgICBkZWNpbWFsU3ltYm9sUmVnZXggPSBuZXcgUmVnRXhwKCdcXFxcLicsICdnJyk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZ3JvdXBTeW1ib2xSZWdleCA9IG5ldyBSZWdFeHAoZ3JvdXBTeW1ib2wsICdnJyk7XG4gICAgICAgIGlmIChncm91cFN5bWJvbCA9PT0gJy4nKSB7XG4gICAgICAgICAgICBncm91cFN5bWJvbFJlZ2V4ID0gbmV3IFJlZ0V4cCgnXFxcXC4nLCAnZycpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKGdyb3VwU3ltYm9sUmVnZXgsICdncm91cF9zZXBhcmF0b3InKTtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKGRlY2ltYWxTeW1ib2xSZWdleCwgJ2RlY2ltYWxfc2VwYXJhdG9yJyk7XG5cblxuICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL2RlY2ltYWxfc2VwYXJhdG9yL2csICcuJyk7XG4gICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvZ3JvdXBfc2VwYXJhdG9yL2csICcnKTtcblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0RmxvYXRVc2VyRm9ybWF0UGF0dGVybigpOiBzdHJpbmcge1xuXG4gICAgICAgIGNvbnN0IGdyb3VwID0gdGhpcy5nZXRHcm91cFN5bWJvbCgpO1xuICAgICAgICBjb25zdCBkZWNpbWFscyA9IHRoaXMuZ2V0RGVjaW1hbHNTeW1ib2woKTtcblxuICAgICAgICBsZXQgcGF0dGVybiA9ICdeKCc7XG4gICAgICAgIHBhdHRlcm4gKz0gJyhcXFxcZHsxLDN9KFxcXFwnICsgZ3JvdXAgKyAnXFxcXGR7M30pKihcXFxcJyArIGRlY2ltYWxzICsgJ1xcXFxkKyk/KXwnO1xuICAgICAgICBwYXR0ZXJuICs9ICdcXFxcZCp8JztcbiAgICAgICAgcGF0dGVybiArPSAnKFxcXFxkKyhcXFxcJyArIGRlY2ltYWxzICsgJ1xcXFxkKyk/KXwnO1xuICAgICAgICBwYXR0ZXJuICs9ICcoXFxcXGQrKFxcXFwuXFxcXGQrKT8pJztcbiAgICAgICAgcGF0dGVybiArPSAnKSQnO1xuICAgICAgICByZXR1cm4gcGF0dGVybjtcbiAgICB9XG5cbiAgICBnZXRJbnRVc2VyRm9ybWF0UGF0dGVybigpOiBzdHJpbmcge1xuXG4gICAgICAgIGNvbnN0IGdyb3VwID0gdGhpcy5nZXRHcm91cFN5bWJvbCgpO1xuXG4gICAgICAgIGxldCBwYXR0ZXJuID0gJ14oJztcbiAgICAgICAgcGF0dGVybiArPSAnKFxcXFxkezEsM30oXFxcXCcgKyBncm91cCArICdcXFxcZHszfSkqKXwnO1xuICAgICAgICBwYXR0ZXJuICs9ICdcXFxcZConO1xuICAgICAgICBwYXR0ZXJuICs9ICcpJCc7XG4gICAgICAgIHJldHVybiBwYXR0ZXJuO1xuICAgIH1cblxuICAgIGdldEdyb3VwU3ltYm9sKCk6IHN0cmluZyB7XG5cbiAgICAgICAgY29uc3Qgc2VwYXJhdG9yID0gdGhpcy5wcmVmZXJlbmNlcy5nZXRVc2VyUHJlZmVyZW5jZSgnbnVtX2dycF9zZXAnKTtcblxuICAgICAgICBpZiAoc2VwYXJhdG9yKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VwYXJhdG9yO1xuICAgICAgICB9XG5cblxuICAgICAgICByZXR1cm4gJywnO1xuICAgIH1cblxuICAgIGdldERlY2ltYWxzU3ltYm9sKCk6IHN0cmluZyB7XG5cbiAgICAgICAgY29uc3Qgc2VwYXJhdG9yID0gdGhpcy5wcmVmZXJlbmNlcy5nZXRVc2VyUHJlZmVyZW5jZSgnZGVjX3NlcCcpO1xuXG4gICAgICAgIGlmIChzZXBhcmF0b3IpIHtcbiAgICAgICAgICAgIHJldHVybiBzZXBhcmF0b3I7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJy4nO1xuICAgIH1cblxuICAgIHJlcGxhY2VTZXBhcmF0b3JzKHRyYW5zZm9ybWVkOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBpZiAoIXRyYW5zZm9ybWVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJhbnNmb3JtZWQ7XG4gICAgICAgIH1cblxuICAgICAgICB0cmFuc2Zvcm1lZCA9IHRyYW5zZm9ybWVkLnJlcGxhY2UoLywvZywgJ2dyb3VwX3NlcGFyYXRvcicpO1xuICAgICAgICB0cmFuc2Zvcm1lZCA9IHRyYW5zZm9ybWVkLnJlcGxhY2UoL1xcLi9nLCAnZGVjaW1hbF9zZXBhcmF0b3InKTtcblxuICAgICAgICBjb25zdCBkZWNpbWFsU3ltYm9sID0gdGhpcy5nZXREZWNpbWFsc1N5bWJvbCgpIHx8ICcuJztcbiAgICAgICAgY29uc3QgZ3JvdXBTeW1ib2wgPSB0aGlzLmdldEdyb3VwU3ltYm9sKCkgfHwgJywnO1xuXG4gICAgICAgIHRyYW5zZm9ybWVkID0gdHJhbnNmb3JtZWQucmVwbGFjZSgvZGVjaW1hbF9zZXBhcmF0b3IvZywgZGVjaW1hbFN5bWJvbCk7XG4gICAgICAgIHRyYW5zZm9ybWVkID0gdHJhbnNmb3JtZWQucmVwbGFjZSgvZ3JvdXBfc2VwYXJhdG9yL2csIGdyb3VwU3ltYm9sKTtcblxuICAgICAgICByZXR1cm4gdHJhbnNmb3JtZWQ7XG4gICAgfVxuXG4gICAgdmFsaWRhdGVJbnRVc2VyRm9ybWF0KGlucHV0VmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuXG4gICAgICAgIGNvbnN0IHRyaW1tZWRJbnB1dFZhbHVlID0gdGhpcy5mb3JtVXRpbHMuZ2V0VHJpbW1lZElucHV0VmFsdWUoaW5wdXRWYWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLmZvcm1VdGlscy5pc0VtcHR5SW5wdXRWYWx1ZSh0cmltbWVkSW5wdXRWYWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAodGhpcy5nZXRJbnRVc2VyRm9ybWF0UGF0dGVybigpKTtcbiAgICAgICAgaWYgKHJlZ2V4LnRlc3QodHJpbW1lZElucHV0VmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YWxpZGF0ZUZsb2F0VXNlckZvcm1hdChpbnB1dFZhbHVlOiBhbnkpOiBib29sZWFuIHtcblxuICAgICAgICBjb25zdCB0cmltbWVkSW5wdXRWYWx1ZSA9IHRoaXMuZm9ybVV0aWxzLmdldFRyaW1tZWRJbnB1dFZhbHVlKGlucHV0VmFsdWUpO1xuICAgICAgICBpZiAodGhpcy5mb3JtVXRpbHMuaXNFbXB0eUlucHV0VmFsdWUodHJpbW1lZElucHV0VmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKHRoaXMuZ2V0RmxvYXRVc2VyRm9ybWF0UGF0dGVybigpKTtcbiAgICAgICAgcmV0dXJuICFyZWdleC50ZXN0KHRyaW1tZWRJbnB1dFZhbHVlKTtcblxuICAgIH1cblxufVxuIl19