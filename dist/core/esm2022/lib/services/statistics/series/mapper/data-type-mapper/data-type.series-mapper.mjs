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
import * as i1 from "../../../../unit-converters/data-type.unit-converter.service";
class DataTypeSeriesMapper {
    converter;
    constructor(converter) {
        this.converter = converter;
    }
    visit(item, options) {
        const dataType = options?.dataType ?? null;
        const direction = options?.direction ?? 'user-unit';
        if (!dataType) {
            return;
        }
        const numberValue = parseFloat(item.value.toString());
        if (!isFinite(numberValue)) {
            return;
        }
        if (direction === 'user-unit') {
            item.value = this.converter.toUserFormat(dataType, numberValue.toString());
            return;
        }
        item.value = this.converter.toInternalFormat(dataType, numberValue.toString());
    }
    static ɵfac = function DataTypeSeriesMapper_Factory(t) { return new (t || DataTypeSeriesMapper)(i0.ɵɵinject(i1.DataTypeUnitConverter)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DataTypeSeriesMapper, factory: DataTypeSeriesMapper.ɵfac, providedIn: 'root' });
}
export { DataTypeSeriesMapper };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataTypeSeriesMapper, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.DataTypeUnitConverter }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10eXBlLnNlcmllcy1tYXBwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc2VydmljZXMvc3RhdGlzdGljcy9zZXJpZXMvbWFwcGVyL2RhdGEtdHlwZS1tYXBwZXIvZGF0YS10eXBlLnNlcmllcy1tYXBwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUt6QyxNQUdhLG9CQUFvQjtJQUdQO0lBQXRCLFlBQXNCLFNBQWdDO1FBQWhDLGNBQVMsR0FBVCxTQUFTLENBQXVCO0lBQ3RELENBQUM7SUFFRCxLQUFLLENBQUMsSUFBYyxFQUFFLE9BQW1CO1FBRXJDLE1BQU0sUUFBUSxHQUFHLE9BQU8sRUFBRSxRQUFRLElBQUksSUFBSSxDQUFDO1FBQzNDLE1BQU0sU0FBUyxHQUFHLE9BQU8sRUFBRSxTQUFTLElBQUksV0FBVyxDQUFDO1FBRXBELElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDWCxPQUFPO1NBQ1Y7UUFFRCxNQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBRXRELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDeEIsT0FBTztTQUNWO1FBRUQsSUFBSSxTQUFTLEtBQUssV0FBVyxFQUFFO1lBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQzNFLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFFbkYsQ0FBQzs4RUE1QlEsb0JBQW9CO2dFQUFwQixvQkFBb0IsV0FBcEIsb0JBQW9CLG1CQUZqQixNQUFNOztTQUVULG9CQUFvQjt1RkFBcEIsb0JBQW9CO2NBSGhDLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGF0YVR5cGVVbml0Q29udmVydGVyfSBmcm9tICcuLi8uLi8uLi8uLi91bml0LWNvbnZlcnRlcnMvZGF0YS10eXBlLnVuaXQtY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtTZXJpZXNWaXNpdG9yfSBmcm9tICcuLi9zZXJpZXMtdHJhdmVyc2VyLnNlcnZpY2UnO1xuaW1wb3J0IHtEYXRhSXRlbSwgT2JqZWN0TWFwfSBmcm9tICdjb21tb24nO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhdGFUeXBlU2VyaWVzTWFwcGVyIGltcGxlbWVudHMgU2VyaWVzVmlzaXRvciB7XG5cblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjb252ZXJ0ZXI6IERhdGFUeXBlVW5pdENvbnZlcnRlcikge1xuICAgIH1cblxuICAgIHZpc2l0KGl0ZW06IERhdGFJdGVtLCBvcHRpb25zPzogT2JqZWN0TWFwKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgZGF0YVR5cGUgPSBvcHRpb25zPy5kYXRhVHlwZSA/PyBudWxsO1xuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBvcHRpb25zPy5kaXJlY3Rpb24gPz8gJ3VzZXItdW5pdCc7XG5cbiAgICAgICAgaWYgKCFkYXRhVHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbnVtYmVyVmFsdWUgPSBwYXJzZUZsb2F0KGl0ZW0udmFsdWUudG9TdHJpbmcoKSk7XG5cbiAgICAgICAgaWYgKCFpc0Zpbml0ZShudW1iZXJWYWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICd1c2VyLXVuaXQnKSB7XG4gICAgICAgICAgICBpdGVtLnZhbHVlID0gdGhpcy5jb252ZXJ0ZXIudG9Vc2VyRm9ybWF0KGRhdGFUeXBlLCBudW1iZXJWYWx1ZS50b1N0cmluZygpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGl0ZW0udmFsdWUgPSB0aGlzLmNvbnZlcnRlci50b0ludGVybmFsRm9ybWF0KGRhdGFUeXBlLCBudW1iZXJWYWx1ZS50b1N0cmluZygpKTtcblxuICAgIH1cblxuXG59XG4iXX0=