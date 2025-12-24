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
import * as i1 from "./series-traverser.service";
import * as i2 from "./data-type-mapper/data-type.series-mapper";
class SeriesMapper {
    traverser;
    dataTypeMapper;
    registry = {};
    constructor(traverser, dataTypeMapper) {
        this.traverser = traverser;
        this.dataTypeMapper = dataTypeMapper;
        this.addMapper('data-type-unit-converter', dataTypeMapper);
    }
    addMapper(unitType, mapper) {
        this.registry[unitType] = mapper;
    }
    map(result, mapperType, options) {
        const mapper = this?.registry[mapperType] ?? null;
        if (!mapper) {
            return;
        }
        this.traverser.traverse(result, mapper, options);
    }
    static ɵfac = function SeriesMapper_Factory(t) { return new (t || SeriesMapper)(i0.ɵɵinject(i1.SeriesTraverser), i0.ɵɵinject(i2.DataTypeSeriesMapper)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SeriesMapper, factory: SeriesMapper.ɵfac, providedIn: 'root' });
}
export { SeriesMapper };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SeriesMapper, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.SeriesTraverser }, { type: i2.DataTypeSeriesMapper }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWVzLW1hcHBlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3NlcnZpY2VzL3N0YXRpc3RpY3Mvc2VyaWVzL21hcHBlci9zZXJpZXMtbWFwcGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7QUFLekMsTUFHYSxZQUFZO0lBS1A7SUFDQTtJQUpkLFFBQVEsR0FBcUIsRUFBRSxDQUFDO0lBRWhDLFlBQ2MsU0FBMEIsRUFDMUIsY0FBb0M7UUFEcEMsY0FBUyxHQUFULFNBQVMsQ0FBaUI7UUFDMUIsbUJBQWMsR0FBZCxjQUFjLENBQXNCO1FBRTlDLElBQUksQ0FBQyxTQUFTLENBQUMsMEJBQTBCLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELFNBQVMsQ0FBQyxRQUFnQixFQUFFLE1BQXFCO1FBQzdDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxHQUFHLENBQUMsTUFBb0IsRUFBRSxVQUFrQixFQUFFLE9BQW1CO1FBRTdELE1BQU0sTUFBTSxHQUFHLElBQUksRUFBRSxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDO1FBRWxELElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDVCxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3JELENBQUM7c0VBeEJRLFlBQVk7Z0VBQVosWUFBWSxXQUFaLFlBQVksbUJBRlQsTUFBTTs7U0FFVCxZQUFZO3VGQUFaLFlBQVk7Y0FIeEIsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYmplY3RNYXAsIFNlcmllc1Jlc3VsdH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7U2VyaWVzVHJhdmVyc2VyLCBTZXJpZXNWaXNpdG9yLCBTZXJpZXNWaXNpdG9yTWFwfSBmcm9tICcuL3Nlcmllcy10cmF2ZXJzZXIuc2VydmljZSc7XG5pbXBvcnQge0RhdGFUeXBlU2VyaWVzTWFwcGVyfSBmcm9tICcuL2RhdGEtdHlwZS1tYXBwZXIvZGF0YS10eXBlLnNlcmllcy1tYXBwZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNlcmllc01hcHBlciB7XG5cbiAgICByZWdpc3RyeTogU2VyaWVzVmlzaXRvck1hcCA9IHt9O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCB0cmF2ZXJzZXI6IFNlcmllc1RyYXZlcnNlcixcbiAgICAgICAgcHJvdGVjdGVkIGRhdGFUeXBlTWFwcGVyOiBEYXRhVHlwZVNlcmllc01hcHBlclxuICAgICkge1xuICAgICAgICB0aGlzLmFkZE1hcHBlcignZGF0YS10eXBlLXVuaXQtY29udmVydGVyJywgZGF0YVR5cGVNYXBwZXIpO1xuICAgIH1cblxuICAgIGFkZE1hcHBlcih1bml0VHlwZTogc3RyaW5nLCBtYXBwZXI6IFNlcmllc1Zpc2l0b3IpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZWdpc3RyeVt1bml0VHlwZV0gPSBtYXBwZXI7XG4gICAgfVxuXG4gICAgbWFwKHJlc3VsdDogU2VyaWVzUmVzdWx0LCBtYXBwZXJUeXBlOiBzdHJpbmcsIG9wdGlvbnM/OiBPYmplY3RNYXApOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBtYXBwZXIgPSB0aGlzPy5yZWdpc3RyeVttYXBwZXJUeXBlXSA/PyBudWxsO1xuXG4gICAgICAgIGlmICghbWFwcGVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRyYXZlcnNlci50cmF2ZXJzZShyZXN1bHQsIG1hcHBlciwgb3B0aW9ucyk7XG4gICAgfVxufVxuIl19