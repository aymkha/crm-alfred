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
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../record/field/form-control.utils";
class PhoneFormatter {
    formUtils;
    constructor(formUtils) {
        this.formUtils = formUtils;
    }
    toUserFormat(value) {
        return value;
    }
    toInternalFormat(value) {
        return value;
    }
    getUserFormatPattern() {
        return '^([\\+]?|00)((([(]{0,1}\\s*[0-9]{1,4}\\s*[)]{0,1})\\s*)*|([\\-\\s\\./0-9])*)+$';
    }
    validateUserFormat(inputValue) {
        const trimmedInputValue = this.formUtils.getTrimmedInputValue(inputValue);
        if (this.formUtils.isEmptyInputValue(trimmedInputValue)) {
            return false;
        }
        const regex = new RegExp(this.getUserFormatPattern());
        return !regex.test(trimmedInputValue);
    }
    static ɵfac = function PhoneFormatter_Factory(t) { return new (t || PhoneFormatter)(i0.ɵɵinject(i1.FormControlUtils)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PhoneFormatter, factory: PhoneFormatter.ɵfac, providedIn: 'root' });
}
export { PhoneFormatter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PhoneFormatter, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.FormControlUtils }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvbmUtZm9ybWF0dGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc2VydmljZXMvZm9ybWF0dGVycy9waG9uZS9waG9uZS1mb3JtYXR0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBSXpDLE1BR2EsY0FBYztJQUVEO0lBQXRCLFlBQXNCLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQ2pELENBQUM7SUFFRCxZQUFZLENBQUMsS0FBYTtRQUN0QixPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsS0FBYTtRQUMxQixPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsb0JBQW9CO1FBQ2hCLE9BQU8sZ0ZBQWdGLENBQUM7SUFDNUYsQ0FBQztJQUVELGtCQUFrQixDQUFDLFVBQWU7UUFFOUIsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzFFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO1lBQ3JELE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBQ0QsTUFBTSxLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQztRQUN0RCxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBRTFDLENBQUM7d0VBMUJRLGNBQWM7Z0VBQWQsY0FBYyxXQUFkLGNBQWMsbUJBRlgsTUFBTTs7U0FFVCxjQUFjO3VGQUFkLGNBQWM7Y0FIMUIsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtYXR0ZXJ9IGZyb20gJy4uL2Zvcm1hdHRlci5tb2RlbCc7XG5pbXBvcnQge0Zvcm1Db250cm9sVXRpbHN9IGZyb20gJy4uLy4uL3JlY29yZC9maWVsZC9mb3JtLWNvbnRyb2wudXRpbHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFBob25lRm9ybWF0dGVyIGltcGxlbWVudHMgRm9ybWF0dGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBmb3JtVXRpbHM6IEZvcm1Db250cm9sVXRpbHMpIHtcbiAgICB9XG5cbiAgICB0b1VzZXJGb3JtYXQodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICB0b0ludGVybmFsRm9ybWF0KHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0VXNlckZvcm1hdFBhdHRlcm4oKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICdeKFtcXFxcK10/fDAwKSgoKFsoXXswLDF9XFxcXHMqWzAtOV17MSw0fVxcXFxzKlspXXswLDF9KVxcXFxzKikqfChbXFxcXC1cXFxcc1xcXFwuLzAtOV0pKikrJCc7XG4gICAgfVxuXG4gICAgdmFsaWRhdGVVc2VyRm9ybWF0KGlucHV0VmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuXG4gICAgICAgIGNvbnN0IHRyaW1tZWRJbnB1dFZhbHVlID0gdGhpcy5mb3JtVXRpbHMuZ2V0VHJpbW1lZElucHV0VmFsdWUoaW5wdXRWYWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLmZvcm1VdGlscy5pc0VtcHR5SW5wdXRWYWx1ZSh0cmltbWVkSW5wdXRWYWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAodGhpcy5nZXRVc2VyRm9ybWF0UGF0dGVybigpKTtcbiAgICAgICAgcmV0dXJuICFyZWdleC50ZXN0KHRyaW1tZWRJbnB1dFZhbHVlKTtcblxuICAgIH1cblxufVxuIl19