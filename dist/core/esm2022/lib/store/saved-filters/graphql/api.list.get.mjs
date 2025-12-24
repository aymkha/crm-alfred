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
import { ListGQL } from '../../record-list/graphql/api.list.get';
import * as i0 from "@angular/core";
import * as i1 from "apollo-angular";
class FiltersListGQL extends ListGQL {
    apollo;
    constructor(apollo) {
        super(apollo);
        this.apollo = apollo;
    }
    /**
     * Fetch the list of filters from the backend
     *
     * @param {string} module to use
     * @param {object} criteria to use
     * @param {object} sort to use
     * @param {object} pagination to use
     * @returns {object} Observable<any>
     */
    get(module, criteria, sort, pagination) {
        return super.get(module, criteria, sort, pagination);
    }
    /**
     * Map record. Allow for extensions
     * @param record
     */
    mapRecord(record) {
        if (!record) {
            return record;
        }
        record.key = record.id || (record.attributes && record.attributes.id) || '';
        const contents = (record.attributes && record.attributes && record.attributes.contents) || null;
        if (contents) {
            const savedFilter = { ...record };
            savedFilter.criteria = contents;
            return savedFilter;
        }
        return record;
    }
    static ɵfac = function FiltersListGQL_Factory(t) { return new (t || FiltersListGQL)(i0.ɵɵinject(i1.Apollo)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FiltersListGQL, factory: FiltersListGQL.ɵfac, providedIn: 'root' });
}
export { FiltersListGQL };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FiltersListGQL, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.Apollo }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmxpc3QuZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3N0b3JlL3NhdmVkLWZpbHRlcnMvZ3JhcGhxbC9hcGkubGlzdC5nZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFJekMsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLHdDQUF3QyxDQUFDOzs7QUFHL0QsTUFHYSxjQUFlLFNBQVEsT0FBTztJQUVqQjtJQUF0QixZQUFzQixNQUFjO1FBQ2hDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQURJLFdBQU0sR0FBTixNQUFNLENBQVE7SUFFcEMsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0ksR0FBRyxDQUFDLE1BQWMsRUFBRSxRQUF3QixFQUFFLElBQXNCLEVBQUUsVUFBc0I7UUFDL0YsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRDs7O09BR0c7SUFDTyxTQUFTLENBQUMsTUFBVztRQUMzQixJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1QsT0FBTyxNQUFNLENBQUM7U0FDakI7UUFFRCxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRTVFLE1BQU0sUUFBUSxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxNQUFNLENBQUMsVUFBVSxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDO1FBQ2hHLElBQUksUUFBUSxFQUFFO1lBQ1YsTUFBTSxXQUFXLEdBQUcsRUFBQyxHQUFHLE1BQU0sRUFBZ0IsQ0FBQztZQUMvQyxXQUFXLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUNoQyxPQUFPLFdBQVcsQ0FBQztTQUN0QjtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7d0VBdENRLGNBQWM7Z0VBQWQsY0FBYyxXQUFkLGNBQWMsbUJBRlgsTUFBTTs7U0FFVCxjQUFjO3VGQUFkLGNBQWM7Y0FIMUIsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBcG9sbG99IGZyb20gJ2Fwb2xsby1hbmd1bGFyJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1BhZ2luYXRpb24sIFNlYXJjaENyaXRlcmlhLCBTb3J0aW5nU2VsZWN0aW9ufSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtMaXN0R1FMfSBmcm9tICcuLi8uLi9yZWNvcmQtbGlzdC9ncmFwaHFsL2FwaS5saXN0LmdldCc7XG5pbXBvcnQge1NhdmVkRmlsdGVyLCBTYXZlZEZpbHRlckxpc3R9IGZyb20gJy4uL3NhdmVkLWZpbHRlci5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRmlsdGVyc0xpc3RHUUwgZXh0ZW5kcyBMaXN0R1FMIHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhcG9sbG86IEFwb2xsbykge1xuICAgICAgICBzdXBlcihhcG9sbG8pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZldGNoIHRoZSBsaXN0IG9mIGZpbHRlcnMgZnJvbSB0aGUgYmFja2VuZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZHVsZSB0byB1c2VcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY3JpdGVyaWEgdG8gdXNlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHNvcnQgdG8gdXNlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHBhZ2luYXRpb24gdG8gdXNlXG4gICAgICogQHJldHVybnMge29iamVjdH0gT2JzZXJ2YWJsZTxhbnk+XG4gICAgICovXG4gICAgcHVibGljIGdldChtb2R1bGU6IHN0cmluZywgY3JpdGVyaWE6IFNlYXJjaENyaXRlcmlhLCBzb3J0OiBTb3J0aW5nU2VsZWN0aW9uLCBwYWdpbmF0aW9uOiBQYWdpbmF0aW9uKTogT2JzZXJ2YWJsZTxTYXZlZEZpbHRlckxpc3Q+IHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmdldChtb2R1bGUsIGNyaXRlcmlhLCBzb3J0LCBwYWdpbmF0aW9uKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYXAgcmVjb3JkLiBBbGxvdyBmb3IgZXh0ZW5zaW9uc1xuICAgICAqIEBwYXJhbSByZWNvcmRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgbWFwUmVjb3JkKHJlY29yZDogYW55KTogU2F2ZWRGaWx0ZXIge1xuICAgICAgICBpZiAoIXJlY29yZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlY29yZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlY29yZC5rZXkgPSByZWNvcmQuaWQgfHwgKHJlY29yZC5hdHRyaWJ1dGVzICYmIHJlY29yZC5hdHRyaWJ1dGVzLmlkKSB8fCAnJztcblxuICAgICAgICBjb25zdCBjb250ZW50cyA9IChyZWNvcmQuYXR0cmlidXRlcyAmJiByZWNvcmQuYXR0cmlidXRlcyAmJiByZWNvcmQuYXR0cmlidXRlcy5jb250ZW50cykgfHwgbnVsbDtcbiAgICAgICAgaWYgKGNvbnRlbnRzKSB7XG4gICAgICAgICAgICBjb25zdCBzYXZlZEZpbHRlciA9IHsuLi5yZWNvcmR9IGFzIFNhdmVkRmlsdGVyO1xuICAgICAgICAgICAgc2F2ZWRGaWx0ZXIuY3JpdGVyaWEgPSBjb250ZW50cztcbiAgICAgICAgICAgIHJldHVybiBzYXZlZEZpbHRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZWNvcmQ7XG4gICAgfVxufVxuIl19