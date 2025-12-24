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
class EmailFormatter {
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
        // eslint-disable-next-line max-len
        return /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    }
    validateUserFormat(inputValue) {
        const trimmedInputValue = this.formUtils.getTrimmedInputValue(inputValue);
        if (this.formUtils.isEmptyInputValue(trimmedInputValue)) {
            return false;
        }
        const regex = new RegExp(this.getUserFormatPattern());
        return !regex.test(trimmedInputValue);
    }
    static ɵfac = function EmailFormatter_Factory(t) { return new (t || EmailFormatter)(i0.ɵɵinject(i1.FormControlUtils)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: EmailFormatter, factory: EmailFormatter.ɵfac, providedIn: 'root' });
}
export { EmailFormatter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EmailFormatter, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.FormControlUtils }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwtZm9ybWF0dGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc2VydmljZXMvZm9ybWF0dGVycy9lbWFpbC9lbWFpbC1mb3JtYXR0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBSXpDLE1BR2EsY0FBYztJQUVEO0lBQXRCLFlBQXNCLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQ2pELENBQUM7SUFFRCxZQUFZLENBQUMsS0FBYTtRQUN0QixPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsS0FBYTtRQUMxQixPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsb0JBQW9CO1FBQ2hCLG1DQUFtQztRQUNuQyxPQUFPLG9NQUFvTSxDQUFDO0lBQ2hOLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxVQUFlO1FBRTlCLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMxRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsRUFBRTtZQUNyRCxPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUNELE1BQU0sS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7UUFDdEQsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUUxQyxDQUFDO3dFQTNCUSxjQUFjO2dFQUFkLGNBQWMsV0FBZCxjQUFjLG1CQUZYLE1BQU07O1NBRVQsY0FBYzt1RkFBZCxjQUFjO2NBSDFCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybWF0dGVyfSBmcm9tICcuLi9mb3JtYXR0ZXIubW9kZWwnO1xuaW1wb3J0IHtGb3JtQ29udHJvbFV0aWxzfSBmcm9tICcuLi8uLi9yZWNvcmQvZmllbGQvZm9ybS1jb250cm9sLnV0aWxzJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBFbWFpbEZvcm1hdHRlciBpbXBsZW1lbnRzIEZvcm1hdHRlciB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZm9ybVV0aWxzOiBGb3JtQ29udHJvbFV0aWxzKSB7XG4gICAgfVxuXG4gICAgdG9Vc2VyRm9ybWF0KHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgdG9JbnRlcm5hbEZvcm1hdCh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIGdldFVzZXJGb3JtYXRQYXR0ZXJuKCk6IFJlZ0V4cCB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgICAgIHJldHVybiAvXig/PS57MSwyNTR9JCkoPz0uezEsNjR9QClbYS16QS1aMC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtekEtWjAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqQFthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPyg/OlxcLlthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPykqJC87XG4gICAgfVxuXG4gICAgdmFsaWRhdGVVc2VyRm9ybWF0KGlucHV0VmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuXG4gICAgICAgIGNvbnN0IHRyaW1tZWRJbnB1dFZhbHVlID0gdGhpcy5mb3JtVXRpbHMuZ2V0VHJpbW1lZElucHV0VmFsdWUoaW5wdXRWYWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLmZvcm1VdGlscy5pc0VtcHR5SW5wdXRWYWx1ZSh0cmltbWVkSW5wdXRWYWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAodGhpcy5nZXRVc2VyRm9ybWF0UGF0dGVybigpKTtcbiAgICAgICAgcmV0dXJuICFyZWdleC50ZXN0KHRyaW1tZWRJbnB1dFZhbHVlKTtcblxuICAgIH1cblxufVxuIl19