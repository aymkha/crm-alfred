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
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/formatters/datetime/date-formatter.service";
class DateAdapter extends NgbDateAdapter {
    formatter;
    userFormat;
    constructor(formatter) {
        super();
        this.formatter = formatter;
    }
    getUserFormat() {
        return this.userFormat;
    }
    setUserFormat(format) {
        this.userFormat = format;
    }
    fromModel(value) {
        if (!value) {
            return null;
        }
        return this.formatter.dateFormatToStruct(value, this.userFormat || '');
    }
    toModel(date) {
        if (!date) {
            return null;
        }
        const dateString = [date.year, date.month, date.day].join('-');
        const options = { fromFormat: 'yyyy-M-d' };
        if (this.userFormat) {
            options.toFormat = this.userFormat;
        }
        return this.formatter.toUserFormat(dateString, options);
    }
    static ɵfac = function DateAdapter_Factory(t) { return new (t || DateAdapter)(i0.ɵɵinject(i1.DateFormatter)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DateAdapter, factory: DateAdapter.ɵfac });
}
export { DateAdapter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DateAdapter, [{
        type: Injectable
    }], function () { return [{ type: i1.DateFormatter }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1hZGFwdGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL2Jhc2UvZGF0ZXRpbWUvZGF0ZS9kYXRlLWFkYXB0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLGNBQWMsRUFBZ0IsTUFBTSw0QkFBNEIsQ0FBQztBQUN6RSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFJekMsTUFDYSxXQUFZLFNBQVEsY0FBc0I7SUFLckM7SUFIZCxVQUFVLENBQVM7SUFFbkIsWUFDYyxTQUF3QjtRQUVsQyxLQUFLLEVBQUUsQ0FBQztRQUZFLGNBQVMsR0FBVCxTQUFTLENBQWU7SUFHdEMsQ0FBQztJQUVELGFBQWE7UUFDVCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztJQUVELGFBQWEsQ0FBQyxNQUFjO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO0lBQzdCLENBQUM7SUFFRCxTQUFTLENBQUMsS0FBb0I7UUFDMUIsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNSLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVELE9BQU8sQ0FBQyxJQUEwQjtRQUM5QixJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1AsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELE1BQU0sVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0QsTUFBTSxPQUFPLEdBQUcsRUFBQyxVQUFVLEVBQUUsVUFBVSxFQUFrQixDQUFDO1FBQzFELElBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNoQixPQUFPLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDdEM7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM1RCxDQUFDO3FFQW5DUSxXQUFXO2dFQUFYLFdBQVcsV0FBWCxXQUFXOztTQUFYLFdBQVc7dUZBQVgsV0FBVztjQUR2QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge05nYkRhdGVBZGFwdGVyLCBOZ2JEYXRlU3RydWN0fSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEYXRlRm9ybWF0dGVyfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9mb3JtYXR0ZXJzL2RhdGV0aW1lL2RhdGUtZm9ybWF0dGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtGb3JtYXRPcHRpb25zfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9mb3JtYXR0ZXJzL2Zvcm1hdHRlci5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRlQWRhcHRlciBleHRlbmRzIE5nYkRhdGVBZGFwdGVyPHN0cmluZz4ge1xuXG4gICAgdXNlckZvcm1hdDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBmb3JtYXR0ZXI6IERhdGVGb3JtYXR0ZXIsXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgZ2V0VXNlckZvcm1hdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlckZvcm1hdDtcbiAgICB9XG5cbiAgICBzZXRVc2VyRm9ybWF0KGZvcm1hdDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudXNlckZvcm1hdCA9IGZvcm1hdDtcbiAgICB9XG5cbiAgICBmcm9tTW9kZWwodmFsdWU6IHN0cmluZyB8IG51bGwpOiBOZ2JEYXRlU3RydWN0IHwgbnVsbCB7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdHRlci5kYXRlRm9ybWF0VG9TdHJ1Y3QodmFsdWUsIHRoaXMudXNlckZvcm1hdCB8fCAnJyk7XG4gICAgfVxuXG4gICAgdG9Nb2RlbChkYXRlOiBOZ2JEYXRlU3RydWN0IHwgbnVsbCk6IHN0cmluZyB8IG51bGwge1xuICAgICAgICBpZiAoIWRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGVTdHJpbmcgPSBbZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCBkYXRlLmRheV0uam9pbignLScpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge2Zyb21Gb3JtYXQ6ICd5eXl5LU0tZCd9IGFzIEZvcm1hdE9wdGlvbnM7XG4gICAgICAgIGlmKHRoaXMudXNlckZvcm1hdCkge1xuICAgICAgICAgICAgb3B0aW9ucy50b0Zvcm1hdCA9IHRoaXMudXNlckZvcm1hdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXR0ZXIudG9Vc2VyRm9ybWF0KGRhdGVTdHJpbmcsIG9wdGlvbnMpO1xuICAgIH1cbn1cbiJdfQ==