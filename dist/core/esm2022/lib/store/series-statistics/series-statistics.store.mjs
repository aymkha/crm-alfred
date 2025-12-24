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
import { BehaviorSubject } from 'rxjs';
import { deepClone } from 'common';
import { StatisticsStore } from '../statistics/statistics.store';
import { distinctUntilChanged, map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../statistics/graphql/api.statistics.get";
const initialState = {
    module: '',
    query: {},
    statistic: {
        id: '',
        data: {}
    },
    loading: false
};
class SeriesStatisticsStore extends StatisticsStore {
    fetchGQL;
    cache$ = null;
    internalState = deepClone(initialState);
    store = new BehaviorSubject(this.internalState);
    constructor(fetchGQL) {
        super(fetchGQL);
        this.fetchGQL = fetchGQL;
        this.state$ = this.store.asObservable();
        this.statistic$ = this.state$.pipe(map(state => state.statistic), distinctUntilChanged());
    }
    /**
     * Update the state
     *
     * @param {object} state to set
     */
    updateState(state) {
        super.updateState(state);
    }
    static ɵfac = function SeriesStatisticsStore_Factory(t) { return new (t || SeriesStatisticsStore)(i0.ɵɵinject(i1.StatisticsFetchGQL)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SeriesStatisticsStore, factory: SeriesStatisticsStore.ɵfac });
}
export { SeriesStatisticsStore };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SeriesStatisticsStore, [{
        type: Injectable
    }], function () { return [{ type: i1.StatisticsFetchGQL }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWVzLXN0YXRpc3RpY3Muc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc3RvcmUvc2VyaWVzLXN0YXRpc3RpY3Mvc2VyaWVzLXN0YXRpc3RpY3Muc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGVBQWUsRUFBYSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sUUFBUSxDQUFDO0FBR2pDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMvRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7OztBQUl6RCxNQUFNLFlBQVksR0FBRztJQUNqQixNQUFNLEVBQUUsRUFBRTtJQUNWLEtBQUssRUFBRSxFQUFxQjtJQUM1QixTQUFTLEVBQUU7UUFDUCxFQUFFLEVBQUUsRUFBRTtRQUNOLElBQUksRUFBRSxFQUFrQjtLQUNSO0lBQ3BCLE9BQU8sRUFBRSxLQUFLO0NBQ1EsQ0FBQztBQU0zQixNQUNhLHFCQUFzQixTQUFRLGVBQWU7SUFNeEM7SUFMSixNQUFNLEdBQW9CLElBQUksQ0FBQztJQUMvQixhQUFhLEdBQTBCLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvRCxLQUFLLEdBQUcsSUFBSSxlQUFlLENBQXdCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUVqRixZQUNjLFFBQTRCO1FBRXRDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUZOLGFBQVEsR0FBUixRQUFRLENBQW9CO1FBR3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxvQkFBb0IsRUFBRSxDQUFDLENBQUM7SUFDOUYsQ0FBQztJQUVEOzs7O09BSUc7SUFDTyxXQUFXLENBQUMsS0FBNEI7UUFDOUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDOytFQXBCUSxxQkFBcUI7Z0VBQXJCLHFCQUFxQixXQUFyQixxQkFBcUI7O1NBQXJCLHFCQUFxQjt1RkFBckIscUJBQXFCO2NBRGpDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2RlZXBDbG9uZX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7U2VyaWVzU3RhdGlzdGljLCBTdGF0aXN0aWNzUXVlcnl9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge1N0YXRpc3RpY3NGZXRjaEdRTH0gZnJvbSAnLi4vc3RhdGlzdGljcy9ncmFwaHFsL2FwaS5zdGF0aXN0aWNzLmdldCc7XG5pbXBvcnQge1N0YXRpc3RpY3NTdG9yZX0gZnJvbSAnLi4vc3RhdGlzdGljcy9zdGF0aXN0aWNzLnN0b3JlJztcbmltcG9ydCB7ZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtTZXJpZXNSZXN1bHR9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge1N0YXRpc3RpY3NTdGF0ZX0gZnJvbSAnY29tbW9uJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIG1vZHVsZTogJycsXG4gICAgcXVlcnk6IHt9IGFzIFN0YXRpc3RpY3NRdWVyeSxcbiAgICBzdGF0aXN0aWM6IHtcbiAgICAgICAgaWQ6ICcnLFxuICAgICAgICBkYXRhOiB7fSBhcyBTZXJpZXNSZXN1bHRcbiAgICB9IGFzIFNlcmllc1N0YXRpc3RpYyxcbiAgICBsb2FkaW5nOiBmYWxzZVxufSBhcyBTZXJpZXNTdGF0aXN0aWNzU3RhdGU7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VyaWVzU3RhdGlzdGljc1N0YXRlIGV4dGVuZHMgU3RhdGlzdGljc1N0YXRlIHtcbiAgICBzdGF0aXN0aWM6IFNlcmllc1N0YXRpc3RpYztcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlcmllc1N0YXRpc3RpY3NTdG9yZSBleHRlbmRzIFN0YXRpc3RpY3NTdG9yZSB7XG4gICAgcHJvdGVjdGVkIGNhY2hlJDogT2JzZXJ2YWJsZTxhbnk+ID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgaW50ZXJuYWxTdGF0ZTogU2VyaWVzU3RhdGlzdGljc1N0YXRlID0gZGVlcENsb25lKGluaXRpYWxTdGF0ZSk7XG4gICAgcHJvdGVjdGVkIHN0b3JlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxTZXJpZXNTdGF0aXN0aWNzU3RhdGU+KHRoaXMuaW50ZXJuYWxTdGF0ZSk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGZldGNoR1FMOiBTdGF0aXN0aWNzRmV0Y2hHUUwsXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKGZldGNoR1FMKTtcbiAgICAgICAgdGhpcy5zdGF0ZSQgPSB0aGlzLnN0b3JlLmFzT2JzZXJ2YWJsZSgpO1xuICAgICAgICB0aGlzLnN0YXRpc3RpYyQgPSB0aGlzLnN0YXRlJC5waXBlKG1hcChzdGF0ZSA9PiBzdGF0ZS5zdGF0aXN0aWMpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHN0YXRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gc3RhdGUgdG8gc2V0XG4gICAgICovXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVN0YXRlKHN0YXRlOiBTZXJpZXNTdGF0aXN0aWNzU3RhdGUpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIudXBkYXRlU3RhdGUoc3RhdGUpO1xuICAgIH1cbn1cbiJdfQ==