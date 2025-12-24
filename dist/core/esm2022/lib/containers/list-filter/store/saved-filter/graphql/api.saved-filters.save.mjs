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
import { RecordSaveGQL } from '../../../../../store/record/graphql/api.record.save';
import * as i0 from "@angular/core";
import * as i1 from "apollo-angular";
class SavedFilterSaveGQL extends RecordSaveGQL {
    apollo;
    constructor(apollo) {
        super(apollo);
        this.apollo = apollo;
    }
    save(record) {
        return super.save(record);
    }
    mapToRecord(response) {
        if (!response.data || !response.data.saveRecord || !response.data.saveRecord.record) {
            return null;
        }
        const savedFilter = {
            // eslint-disable-next-line no-underscore-dangle
            id: response.data.saveRecord.record._id,
            type: response.data.saveRecord.record.type || '',
            module: response.data.saveRecord.record.module || '',
            attributes: response.data.saveRecord.record.attributes || null,
        };
        savedFilter.key = savedFilter.id || (savedFilter.attributes && savedFilter.attributes.id) || '';
        const contents = (savedFilter.attributes && savedFilter.attributes.contents) || null;
        if (contents) {
            savedFilter.criteria = contents;
        }
        return savedFilter;
    }
    static ɵfac = function SavedFilterSaveGQL_Factory(t) { return new (t || SavedFilterSaveGQL)(i0.ɵɵinject(i1.Apollo)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SavedFilterSaveGQL, factory: SavedFilterSaveGQL.ɵfac, providedIn: 'root' });
}
export { SavedFilterSaveGQL };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SavedFilterSaveGQL, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.Apollo }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNhdmVkLWZpbHRlcnMuc2F2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb250YWluZXJzL2xpc3QtZmlsdGVyL3N0b3JlL3NhdmVkLWZpbHRlci9ncmFwaHFsL2FwaS5zYXZlZC1maWx0ZXJzLnNhdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFJekMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHFEQUFxRCxDQUFDOzs7QUFJbEYsTUFHYSxrQkFBbUIsU0FBUSxhQUFhO0lBRTNCO0lBQXRCLFlBQXNCLE1BQWM7UUFDaEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBREksV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUVwQyxDQUFDO0lBRU0sSUFBSSxDQUFDLE1BQWM7UUFDdEIsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFUyxXQUFXLENBQUMsUUFBZ0M7UUFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTtZQUNqRixPQUFPLElBQUksQ0FBQztTQUNmO1FBRUQsTUFBTSxXQUFXLEdBQUc7WUFDaEIsZ0RBQWdEO1lBQ2hELEVBQUUsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRztZQUN2QyxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFO1lBQ2hELE1BQU0sRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLEVBQUU7WUFDcEQsVUFBVSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQUksSUFBSTtTQUNsRCxDQUFDO1FBRWpCLFdBQVcsQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLElBQUksV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFaEcsTUFBTSxRQUFRLEdBQUcsQ0FBQyxXQUFXLENBQUMsVUFBVSxJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDO1FBQ3JGLElBQUksUUFBUSxFQUFFO1lBQ1YsV0FBVyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7U0FDbkM7UUFFRCxPQUFPLFdBQVcsQ0FBQztJQUN2QixDQUFDOzRFQS9CUSxrQkFBa0I7Z0VBQWxCLGtCQUFrQixXQUFsQixrQkFBa0IsbUJBRmYsTUFBTTs7U0FFVCxrQkFBa0I7dUZBQWxCLGtCQUFrQjtjQUg5QixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Fwb2xsb30gZnJvbSAnYXBvbGxvLWFuZ3VsYXInO1xuaW1wb3J0IHtSZWNvcmR9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge0Fwb2xsb1F1ZXJ5UmVzdWx0fSBmcm9tICdAYXBvbGxvL2NsaWVudC9jb3JlJztcbmltcG9ydCB7UmVjb3JkU2F2ZUdRTH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RvcmUvcmVjb3JkL2dyYXBocWwvYXBpLnJlY29yZC5zYXZlJztcbmltcG9ydCB7U2F2ZWRGaWx0ZXJ9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0b3JlL3NhdmVkLWZpbHRlcnMvc2F2ZWQtZmlsdGVyLm1vZGVsJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2F2ZWRGaWx0ZXJTYXZlR1FMIGV4dGVuZHMgUmVjb3JkU2F2ZUdRTCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYXBvbGxvOiBBcG9sbG8pIHtcbiAgICAgICAgc3VwZXIoYXBvbGxvKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2F2ZShyZWNvcmQ6IFJlY29yZCk6IE9ic2VydmFibGU8U2F2ZWRGaWx0ZXI+IHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLnNhdmUocmVjb3JkKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWFwVG9SZWNvcmQocmVzcG9uc2U6IEFwb2xsb1F1ZXJ5UmVzdWx0PGFueT4pOiBTYXZlZEZpbHRlciB7XG4gICAgICAgIGlmICghcmVzcG9uc2UuZGF0YSB8fCAhcmVzcG9uc2UuZGF0YS5zYXZlUmVjb3JkIHx8ICFyZXNwb25zZS5kYXRhLnNhdmVSZWNvcmQucmVjb3JkKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNhdmVkRmlsdGVyID0ge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlXG4gICAgICAgICAgICBpZDogcmVzcG9uc2UuZGF0YS5zYXZlUmVjb3JkLnJlY29yZC5faWQsXG4gICAgICAgICAgICB0eXBlOiByZXNwb25zZS5kYXRhLnNhdmVSZWNvcmQucmVjb3JkLnR5cGUgfHwgJycsXG4gICAgICAgICAgICBtb2R1bGU6IHJlc3BvbnNlLmRhdGEuc2F2ZVJlY29yZC5yZWNvcmQubW9kdWxlIHx8ICcnLFxuICAgICAgICAgICAgYXR0cmlidXRlczogcmVzcG9uc2UuZGF0YS5zYXZlUmVjb3JkLnJlY29yZC5hdHRyaWJ1dGVzIHx8IG51bGwsXG4gICAgICAgIH0gYXMgU2F2ZWRGaWx0ZXI7XG5cbiAgICAgICAgc2F2ZWRGaWx0ZXIua2V5ID0gc2F2ZWRGaWx0ZXIuaWQgfHwgKHNhdmVkRmlsdGVyLmF0dHJpYnV0ZXMgJiYgc2F2ZWRGaWx0ZXIuYXR0cmlidXRlcy5pZCkgfHwgJyc7XG5cbiAgICAgICAgY29uc3QgY29udGVudHMgPSAoc2F2ZWRGaWx0ZXIuYXR0cmlidXRlcyAmJiBzYXZlZEZpbHRlci5hdHRyaWJ1dGVzLmNvbnRlbnRzKSB8fCBudWxsO1xuICAgICAgICBpZiAoY29udGVudHMpIHtcbiAgICAgICAgICAgIHNhdmVkRmlsdGVyLmNyaXRlcmlhID0gY29udGVudHM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2F2ZWRGaWx0ZXI7XG4gICAgfVxufVxuIl19