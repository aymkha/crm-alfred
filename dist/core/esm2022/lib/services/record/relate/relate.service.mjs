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
import { map, shareReplay, take } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../../store/record-list/record-list.store.factory";
class RelateService {
    recordList;
    constructor(recordListStoreFactory) {
        this.recordList = recordListStoreFactory.create();
    }
    init(module) {
        this.recordList.init(module, false);
    }
    search(term, field) {
        const criteria = this.recordList.criteria;
        criteria.filters[field] = {
            field,
            operator: '=',
            values: [term]
        };
        this.recordList.updateSearchCriteria(criteria, false);
        return this.recordList.load(false).pipe(map(value => value.records), take(1), shareReplay(1));
    }
    static ɵfac = function RelateService_Factory(t) { return new (t || RelateService)(i0.ɵɵinject(i1.RecordListStoreFactory)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RelateService, factory: RelateService.ɵfac });
}
export { RelateService };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RelateService, [{
        type: Injectable
    }], function () { return [{ type: i1.RecordListStoreFactory }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc2VydmljZXMvcmVjb3JkL3JlbGF0ZS9yZWxhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUd6QyxPQUFPLEVBQUMsR0FBRyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBSXRELE1BQ2EsYUFBYTtJQUN0QixVQUFVLENBQWtCO0lBRTVCLFlBQVksc0JBQThDO1FBQ3RELElBQUksQ0FBQyxVQUFVLEdBQUcsc0JBQXNCLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDdEQsQ0FBQztJQUVELElBQUksQ0FBQyxNQUFjO1FBQ2YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxNQUFNLENBQUMsSUFBWSxFQUFFLEtBQWE7UUFFOUIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDMUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRztZQUN0QixLQUFLO1lBQ0wsUUFBUSxFQUFFLEdBQUc7WUFDYixNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7U0FDakIsQ0FBQztRQUVGLElBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3RELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUNuQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQzNCLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQ2pCLENBQUM7SUFDTixDQUFDO3VFQTFCUSxhQUFhO2dFQUFiLGFBQWEsV0FBYixhQUFhOztTQUFiLGFBQWE7dUZBQWIsYUFBYTtjQUR6QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSZWNvcmRMaXN0U3RvcmVGYWN0b3J5fSBmcm9tICcuLi8uLi8uLi9zdG9yZS9yZWNvcmQtbGlzdC9yZWNvcmQtbGlzdC5zdG9yZS5mYWN0b3J5JztcbmltcG9ydCB7UmVjb3JkTGlzdFN0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9yZWNvcmQtbGlzdC9yZWNvcmQtbGlzdC5zdG9yZSc7XG5pbXBvcnQge21hcCwgc2hhcmVSZXBsYXksIHRha2V9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7UmVjb3JkfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlbGF0ZVNlcnZpY2Uge1xuICAgIHJlY29yZExpc3Q6IFJlY29yZExpc3RTdG9yZTtcblxuICAgIGNvbnN0cnVjdG9yKHJlY29yZExpc3RTdG9yZUZhY3Rvcnk6IFJlY29yZExpc3RTdG9yZUZhY3RvcnkpIHtcbiAgICAgICAgdGhpcy5yZWNvcmRMaXN0ID0gcmVjb3JkTGlzdFN0b3JlRmFjdG9yeS5jcmVhdGUoKTtcbiAgICB9XG5cbiAgICBpbml0KG1vZHVsZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVjb3JkTGlzdC5pbml0KG1vZHVsZSwgZmFsc2UpO1xuICAgIH1cblxuICAgIHNlYXJjaCh0ZXJtOiBzdHJpbmcsIGZpZWxkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFJlY29yZFtdPiB7XG5cbiAgICAgICAgY29uc3QgY3JpdGVyaWEgPSB0aGlzLnJlY29yZExpc3QuY3JpdGVyaWE7XG4gICAgICAgIGNyaXRlcmlhLmZpbHRlcnNbZmllbGRdID0ge1xuICAgICAgICAgICAgZmllbGQsXG4gICAgICAgICAgICBvcGVyYXRvcjogJz0nLFxuICAgICAgICAgICAgdmFsdWVzOiBbdGVybV1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnJlY29yZExpc3QudXBkYXRlU2VhcmNoQ3JpdGVyaWEoY3JpdGVyaWEsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVjb3JkTGlzdC5sb2FkKGZhbHNlKS5waXBlKFxuICAgICAgICAgICAgbWFwKHZhbHVlID0+IHZhbHVlLnJlY29yZHMpLFxuICAgICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICAgIHNoYXJlUmVwbGF5KDEpXG4gICAgICAgICk7XG4gICAgfVxuXG59XG4iXX0=