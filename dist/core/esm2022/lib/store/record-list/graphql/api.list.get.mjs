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
import { gql } from 'apollo-angular';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "apollo-angular";
class ListGQL {
    apollo;
    fieldsMetadata = {
        fields: [
            'id',
            '_id',
            'meta',
            'records'
        ]
    };
    constructor(apollo) {
        this.apollo = apollo;
    }
    /**
     * Fetch data either from backend
     *
     * @param {string} module to get from
     * @param {number} limit  page limit
     * @param {number} offset  current offset
     * @param {object} criteria filter criteria
     * @param {object} sort selection
     * @param {object} metadata with the fields to ask for
     * @returns {object} Observable<ApolloQueryResult<any>>
     */
    fetch(module, limit, offset, criteria, sort, metadata) {
        const fields = metadata.fields;
        const queryOptions = {
            query: gql `
              query getRecordList($module: String!, $limit: Int, $offset: Int, $criteria: Iterable, $sort: Iterable) {
                getRecordList(module: $module, limit: $limit, offset: $offset, criteria: $criteria, sort: $sort) {
                  ${fields.join('\n')}
                }
              }
            `,
            variables: {
                module,
                limit,
                offset,
                criteria,
                sort
            },
        };
        return this.apollo.query(queryOptions);
    }
    /**
     * Fetch the List records from the backend
     *
     * @param {string} module to use
     * @param {object} criteria to use
     * @param {object} sort to use
     * @param {object} pagination to use
     * @returns {object} Observable<any>
     */
    get(module, criteria, sort, pagination) {
        const mappedSort = this.mapSort(sort);
        return this.fetch(module, pagination.pageSize, pagination.current, criteria, mappedSort, this.fieldsMetadata)
            .pipe(map(({ data }) => {
            const recordsList = {
                records: [],
                pagination: { ...pagination }
            };
            if (!data || !data.getRecordList) {
                return recordsList;
            }
            const listData = data.getRecordList;
            if (listData.records) {
                listData.records.forEach((record) => {
                    recordsList.records.push(this.mapRecord(record));
                });
            }
            if (!listData.meta) {
                return recordsList;
            }
            if (listData.meta.offsets) {
                const paginationFieldMap = {
                    current: 'current',
                    next: 'next',
                    prev: 'previous',
                    total: 'total',
                    end: 'last',
                };
                Object.keys(paginationFieldMap).forEach((key) => {
                    if (key in listData.meta.offsets) {
                        const paginationField = paginationFieldMap[key];
                        recordsList.pagination[paginationField] = listData.meta.offsets[key];
                    }
                });
            }
            recordsList.meta = listData.meta;
            return recordsList;
        }));
    }
    /**
     * Map sort.
     * @param {object} sort to map
     */
    mapSort(sort) {
        const sortOrderMap = {
            NONE: '',
            ASC: 'ASC',
            DESC: 'DESC'
        };
        return {
            sortOrder: sortOrderMap[sort.sortOrder],
            orderBy: sort.orderBy
        };
    }
    /**
     * Map record. Allow for extensions
     * @param record
     */
    mapRecord(record) {
        return record;
    }
    static ɵfac = function ListGQL_Factory(t) { return new (t || ListGQL)(i0.ɵɵinject(i1.Apollo)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ListGQL, factory: ListGQL.ɵfac, providedIn: 'root' });
}
export { ListGQL };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListGQL, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.Apollo }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmxpc3QuZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3N0b3JlL3JlY29yZC1saXN0L2dyYXBocWwvYXBpLmxpc3QuZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBUyxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUkzQyxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7OztBQUduQyxNQUdhLE9BQU87SUFXTTtJQVRaLGNBQWMsR0FBRztRQUN2QixNQUFNLEVBQUU7WUFDSixJQUFJO1lBQ0osS0FBSztZQUNMLE1BQU07WUFDTixTQUFTO1NBQ1o7S0FDSixDQUFDO0lBRUYsWUFBc0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDcEMsQ0FBQztJQUVEOzs7Ozs7Ozs7O09BVUc7SUFDSSxLQUFLLENBQ1IsTUFBYyxFQUNkLEtBQWEsRUFDYixNQUFjLEVBQ2QsUUFBZ0MsRUFDaEMsSUFBNEIsRUFDNUIsUUFBOEI7UUFHOUIsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUUvQixNQUFNLFlBQVksR0FBRztZQUNqQixLQUFLLEVBQUUsR0FBRyxDQUFBOzs7b0JBR0YsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7OzthQUd4QjtZQUNELFNBQVMsRUFBRTtnQkFDUCxNQUFNO2dCQUNOLEtBQUs7Z0JBQ0wsTUFBTTtnQkFDTixRQUFRO2dCQUNSLElBQUk7YUFDUDtTQUNKLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLEdBQUcsQ0FBQyxNQUFjLEVBQUUsUUFBd0IsRUFBRSxJQUFzQixFQUFFLFVBQXNCO1FBQy9GLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDO2FBQ3hHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUU7WUFDakIsTUFBTSxXQUFXLEdBQWU7Z0JBQzVCLE9BQU8sRUFBRSxFQUFFO2dCQUNYLFVBQVUsRUFBRSxFQUFDLEdBQUcsVUFBVSxFQUFlO2FBQzVDLENBQUM7WUFFRixJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDOUIsT0FBTyxXQUFXLENBQUM7YUFDdEI7WUFFRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBRXBDLElBQUksUUFBUSxDQUFDLE9BQU8sRUFBRTtnQkFDbEIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtvQkFDckMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQ3pCLENBQUM7Z0JBQ04sQ0FBQyxDQUFDLENBQUM7YUFDTjtZQUVELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFO2dCQUNoQixPQUFPLFdBQVcsQ0FBQzthQUN0QjtZQUVELElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBRXZCLE1BQU0sa0JBQWtCLEdBQUc7b0JBQ3ZCLE9BQU8sRUFBRSxTQUFTO29CQUNsQixJQUFJLEVBQUUsTUFBTTtvQkFDWixJQUFJLEVBQUUsVUFBVTtvQkFDaEIsS0FBSyxFQUFFLE9BQU87b0JBQ2QsR0FBRyxFQUFFLE1BQU07aUJBQ2QsQ0FBQztnQkFFRixNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7b0JBQzVDLElBQUksR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO3dCQUM5QixNQUFNLGVBQWUsR0FBRyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDaEQsV0FBVyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDeEU7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7YUFDTjtZQUVELFdBQVcsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztZQUVqQyxPQUFPLFdBQVcsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVEOzs7T0FHRztJQUNPLE9BQU8sQ0FBQyxJQUFzQjtRQUNwQyxNQUFNLFlBQVksR0FBRztZQUNqQixJQUFJLEVBQUUsRUFBRTtZQUNSLEdBQUcsRUFBRSxLQUFLO1lBQ1YsSUFBSSxFQUFFLE1BQU07U0FDZixDQUFDO1FBRUYsT0FBTztZQUNILFNBQVMsRUFBRSxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUN2QyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87U0FDeEIsQ0FBQztJQUNOLENBQUM7SUFFRDs7O09BR0c7SUFDTyxTQUFTLENBQUMsTUFBVztRQUMzQixPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO2lFQTVJUSxPQUFPO2dFQUFQLE9BQU8sV0FBUCxPQUFPLG1CQUZKLE1BQU07O1NBRVQsT0FBTzt1RkFBUCxPQUFPO2NBSG5CLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QXBvbGxvLCBncWx9IGZyb20gJ2Fwb2xsby1hbmd1bGFyJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0Fwb2xsb1F1ZXJ5UmVzdWx0fSBmcm9tICdAYXBvbGxvL2NsaWVudC9jb3JlJztcbmltcG9ydCB7UGFnaW5hdGlvbiwgUmVjb3JkLCBTZWFyY2hDcml0ZXJpYSwgU29ydGluZ1NlbGVjdGlvbn0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7bWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1JlY29yZExpc3R9IGZyb20gJy4uL3JlY29yZC1saXN0LnN0b3JlJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMaXN0R1FMIHtcblxuICAgIHByb3RlY3RlZCBmaWVsZHNNZXRhZGF0YSA9IHtcbiAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICAnaWQnLFxuICAgICAgICAgICAgJ19pZCcsXG4gICAgICAgICAgICAnbWV0YScsXG4gICAgICAgICAgICAncmVjb3JkcydcbiAgICAgICAgXVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYXBvbGxvOiBBcG9sbG8pIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGZXRjaCBkYXRhIGVpdGhlciBmcm9tIGJhY2tlbmRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2R1bGUgdG8gZ2V0IGZyb21cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbGltaXQgIHBhZ2UgbGltaXRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0ICBjdXJyZW50IG9mZnNldFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjcml0ZXJpYSBmaWx0ZXIgY3JpdGVyaWFcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gc29ydCBzZWxlY3Rpb25cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGEgd2l0aCB0aGUgZmllbGRzIHRvIGFzayBmb3JcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBPYnNlcnZhYmxlPEFwb2xsb1F1ZXJ5UmVzdWx0PGFueT4+XG4gICAgICovXG4gICAgcHVibGljIGZldGNoKFxuICAgICAgICBtb2R1bGU6IHN0cmluZyxcbiAgICAgICAgbGltaXQ6IG51bWJlcixcbiAgICAgICAgb2Zmc2V0OiBudW1iZXIsXG4gICAgICAgIGNyaXRlcmlhOiB7IFtrZXk6IHN0cmluZ106IGFueSB9LFxuICAgICAgICBzb3J0OiB7IFtrZXk6IHN0cmluZ106IGFueSB9LFxuICAgICAgICBtZXRhZGF0YTogeyBmaWVsZHM6IHN0cmluZ1tdIH1cbiAgICApOiBPYnNlcnZhYmxlPEFwb2xsb1F1ZXJ5UmVzdWx0PGFueT4+IHtcblxuICAgICAgICBjb25zdCBmaWVsZHMgPSBtZXRhZGF0YS5maWVsZHM7XG5cbiAgICAgICAgY29uc3QgcXVlcnlPcHRpb25zID0ge1xuICAgICAgICAgICAgcXVlcnk6IGdxbGBcbiAgICAgICAgICAgICAgcXVlcnkgZ2V0UmVjb3JkTGlzdCgkbW9kdWxlOiBTdHJpbmchLCAkbGltaXQ6IEludCwgJG9mZnNldDogSW50LCAkY3JpdGVyaWE6IEl0ZXJhYmxlLCAkc29ydDogSXRlcmFibGUpIHtcbiAgICAgICAgICAgICAgICBnZXRSZWNvcmRMaXN0KG1vZHVsZTogJG1vZHVsZSwgbGltaXQ6ICRsaW1pdCwgb2Zmc2V0OiAkb2Zmc2V0LCBjcml0ZXJpYTogJGNyaXRlcmlhLCBzb3J0OiAkc29ydCkge1xuICAgICAgICAgICAgICAgICAgJHtmaWVsZHMuam9pbignXFxuJyl9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgLFxuICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLFxuICAgICAgICAgICAgICAgIGxpbWl0LFxuICAgICAgICAgICAgICAgIG9mZnNldCxcbiAgICAgICAgICAgICAgICBjcml0ZXJpYSxcbiAgICAgICAgICAgICAgICBzb3J0XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0aGlzLmFwb2xsby5xdWVyeShxdWVyeU9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZldGNoIHRoZSBMaXN0IHJlY29yZHMgZnJvbSB0aGUgYmFja2VuZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZHVsZSB0byB1c2VcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY3JpdGVyaWEgdG8gdXNlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHNvcnQgdG8gdXNlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHBhZ2luYXRpb24gdG8gdXNlXG4gICAgICogQHJldHVybnMge29iamVjdH0gT2JzZXJ2YWJsZTxhbnk+XG4gICAgICovXG4gICAgcHVibGljIGdldChtb2R1bGU6IHN0cmluZywgY3JpdGVyaWE6IFNlYXJjaENyaXRlcmlhLCBzb3J0OiBTb3J0aW5nU2VsZWN0aW9uLCBwYWdpbmF0aW9uOiBQYWdpbmF0aW9uKTogT2JzZXJ2YWJsZTxSZWNvcmRMaXN0PiB7XG4gICAgICAgIGNvbnN0IG1hcHBlZFNvcnQgPSB0aGlzLm1hcFNvcnQoc29ydCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZmV0Y2gobW9kdWxlLCBwYWdpbmF0aW9uLnBhZ2VTaXplLCBwYWdpbmF0aW9uLmN1cnJlbnQsIGNyaXRlcmlhLCBtYXBwZWRTb3J0LCB0aGlzLmZpZWxkc01ldGFkYXRhKVxuICAgICAgICAgICAgLnBpcGUobWFwKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWNvcmRzTGlzdDogUmVjb3JkTGlzdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkczogW10sXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IHsuLi5wYWdpbmF0aW9ufSBhcyBQYWdpbmF0aW9uXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGlmICghZGF0YSB8fCAhZGF0YS5nZXRSZWNvcmRMaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWNvcmRzTGlzdDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBsaXN0RGF0YSA9IGRhdGEuZ2V0UmVjb3JkTGlzdDtcblxuICAgICAgICAgICAgICAgIGlmIChsaXN0RGF0YS5yZWNvcmRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3REYXRhLnJlY29yZHMuZm9yRWFjaCgocmVjb3JkOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY29yZHNMaXN0LnJlY29yZHMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcFJlY29yZChyZWNvcmQpXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIWxpc3REYXRhLm1ldGEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlY29yZHNMaXN0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChsaXN0RGF0YS5tZXRhLm9mZnNldHMpIHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYWdpbmF0aW9uRmllbGRNYXAgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50OiAnY3VycmVudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0OiAnbmV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2OiAncHJldmlvdXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWw6ICd0b3RhbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQ6ICdsYXN0JyxcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhwYWdpbmF0aW9uRmllbGRNYXApLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleSBpbiBsaXN0RGF0YS5tZXRhLm9mZnNldHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYWdpbmF0aW9uRmllbGQgPSBwYWdpbmF0aW9uRmllbGRNYXBba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNvcmRzTGlzdC5wYWdpbmF0aW9uW3BhZ2luYXRpb25GaWVsZF0gPSBsaXN0RGF0YS5tZXRhLm9mZnNldHNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmVjb3Jkc0xpc3QubWV0YSA9IGxpc3REYXRhLm1ldGE7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVjb3Jkc0xpc3Q7XG4gICAgICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFwIHNvcnQuXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHNvcnQgdG8gbWFwXG4gICAgICovXG4gICAgcHJvdGVjdGVkIG1hcFNvcnQoc29ydDogU29ydGluZ1NlbGVjdGlvbik6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgICAgICBjb25zdCBzb3J0T3JkZXJNYXAgPSB7XG4gICAgICAgICAgICBOT05FOiAnJyxcbiAgICAgICAgICAgIEFTQzogJ0FTQycsXG4gICAgICAgICAgICBERVNDOiAnREVTQydcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc29ydE9yZGVyOiBzb3J0T3JkZXJNYXBbc29ydC5zb3J0T3JkZXJdLFxuICAgICAgICAgICAgb3JkZXJCeTogc29ydC5vcmRlckJ5XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFwIHJlY29yZC4gQWxsb3cgZm9yIGV4dGVuc2lvbnNcbiAgICAgKiBAcGFyYW0gcmVjb3JkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIG1hcFJlY29yZChyZWNvcmQ6IGFueSk6IFJlY29yZCB7XG4gICAgICAgIHJldHVybiByZWNvcmQ7XG4gICAgfVxufVxuIl19