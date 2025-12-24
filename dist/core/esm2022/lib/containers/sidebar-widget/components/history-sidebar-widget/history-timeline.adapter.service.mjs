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
import { emptyObject } from 'common';
import { take } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "./history-timeline.store.factory";
class HistoryTimelineAdapter {
    historyTimelineStoreFactory;
    loading = false;
    cache = [];
    dataStream = new BehaviorSubject(this.cache);
    dataStream$ = this.dataStream.asObservable();
    defaultPageSize = 10;
    store;
    constructor(historyTimelineStoreFactory) {
        this.historyTimelineStoreFactory = historyTimelineStoreFactory;
    }
    /**
     * @returns {void}
     * @param {ViewContext} context - parent module context
     * @description adapter init function to initialize timeline store
     */
    init(context) {
        this.store = this.historyTimelineStoreFactory.create();
        this.store.init(context);
    }
    /**
     * @returns {Observable<HistoryTimelineEntry[]>} return observable array of timeline entries
     * @description retrieve next set of records starting from the current offset
     * represented by the field this.cache.length
     * @param {boolean} reload timeline
     */
    fetchTimelineEntries(reload) {
        if (this.loading === true) {
            return;
        }
        if (reload === true) {
            this.cache.length = 0;
        }
        this.store.initSearchCriteria(this.cache.length, this.defaultPageSize);
        this.loading = true;
        this.store.load(false).pipe(take(1)).subscribe(value => {
            this.loading = false;
            const records = value.records;
            if (!emptyObject(records)) {
                Object.keys(records).forEach(key => {
                    this.cache.push(this.buildTimelineEntry(records[key]));
                });
            }
            this.dataStream.next([...this.cache]);
        });
        return this.dataStream$;
    }
    /**
     * @returns {string} color code
     * @param {string} activity the valid activity types
     * @description {returns the mapped background color code defined for an activity}
     */
    getActivityGridColor(activity) {
        const colorMap = {
            calls: 'yellow',
            tasks: 'green',
            meetings: 'blue',
            notes: 'orange',
            audit: 'purple',
            history: 'purple'
        };
        return colorMap[activity] || 'yellow';
    }
    /**
     * @returns {HistoryTimelineEntry} Timeline Entry
     * @param {Record} record object
     * @description {returns the mapped record to timeline entry}
     */
    buildTimelineEntry(record) {
        const timelineModule = record.module;
        let moduleIcon = record.attributes.module_name;
        if (timelineModule === 'audit') {
            moduleIcon = 'History';
        }
        const gridColor = this.getActivityGridColor(record.module);
        const timelineEntry = {
            module: timelineModule,
            icon: moduleIcon,
            color: gridColor,
            title: {
                type: 'varchar',
                value: record.attributes.name
            },
            user: {
                type: 'varchar',
                value: record.attributes.assigned_user_name.user_name,
            },
            date: {
                type: 'datetime',
                value: record.attributes.date_end,
            },
            record
        };
        if (timelineModule === 'audit') {
            timelineEntry.description = {
                type: 'html',
                value: record.attributes.description
            };
        }
        return timelineEntry;
    }
    static ɵfac = function HistoryTimelineAdapter_Factory(t) { return new (t || HistoryTimelineAdapter)(i0.ɵɵinject(i1.HistoryTimelineStoreFactory)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: HistoryTimelineAdapter, factory: HistoryTimelineAdapter.ɵfac });
}
export { HistoryTimelineAdapter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HistoryTimelineAdapter, [{
        type: Injectable
    }], function () { return [{ type: i1.HistoryTimelineStoreFactory }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlzdG9yeS10aW1lbGluZS5hZGFwdGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9zaWRlYmFyLXdpZGdldC9jb21wb25lbnRzL2hpc3Rvcnktc2lkZWJhci13aWRnZXQvaGlzdG9yeS10aW1lbGluZS5hZGFwdGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFDLGVBQWUsRUFBYSxNQUFNLE1BQU0sQ0FBQztBQUVqRCxPQUFPLEVBQUMsV0FBVyxFQUFzQixNQUFNLFFBQVEsQ0FBQztBQUN4RCxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7OztBQUtwQyxNQUNhLHNCQUFzQjtJQVVUO0lBVHRCLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFFaEIsS0FBSyxHQUEyQixFQUFFLENBQUM7SUFDbkMsVUFBVSxHQUFHLElBQUksZUFBZSxDQUF5QixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckUsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUM7SUFFckMsZUFBZSxHQUFHLEVBQUUsQ0FBQztJQUNyQixLQUFLLENBQXVCO0lBRXBDLFlBQXNCLDJCQUF3RDtRQUF4RCxnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTZCO0lBRTlFLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBSSxDQUFDLE9BQW9CO1FBRXJCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILG9CQUFvQixDQUFDLE1BQWU7UUFFaEMsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtZQUN2QixPQUFPO1NBQ1Y7UUFFRCxJQUFJLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFdkUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuRCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixNQUFNLE9BQU8sR0FBYyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBRXpDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBRXZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUUvQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0QsQ0FBQyxDQUFDLENBQUM7YUFDTjtZQUNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILG9CQUFvQixDQUFDLFFBQXVCO1FBQ3hDLE1BQU0sUUFBUSxHQUFHO1lBQ2IsS0FBSyxFQUFFLFFBQVE7WUFDZixLQUFLLEVBQUUsT0FBTztZQUNkLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLEtBQUssRUFBRSxRQUFRO1lBQ2YsS0FBSyxFQUFFLFFBQVE7WUFDZixPQUFPLEVBQUUsUUFBUTtTQUNwQixDQUFDO1FBQ0YsT0FBTyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksUUFBUSxDQUFDO0lBQzFDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsa0JBQWtCLENBQUMsTUFBYztRQUU3QixNQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBRXJDLElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQy9DLElBQUksY0FBYyxLQUFLLE9BQU8sRUFBRTtZQUM1QixVQUFVLEdBQUcsU0FBUyxDQUFDO1NBQzFCO1FBRUQsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUzRCxNQUFNLGFBQWEsR0FBRztZQUNsQixNQUFNLEVBQUUsY0FBYztZQUN0QixJQUFJLEVBQUUsVUFBVTtZQUNoQixLQUFLLEVBQUUsU0FBUztZQUNoQixLQUFLLEVBQUU7Z0JBQ0gsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsS0FBSyxFQUFFLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSTthQUNoQztZQUNELElBQUksRUFBRTtnQkFDRixJQUFJLEVBQUUsU0FBUztnQkFDZixLQUFLLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTO2FBQ3hEO1lBQ0QsSUFBSSxFQUFFO2dCQUNGLElBQUksRUFBRSxVQUFVO2dCQUNoQixLQUFLLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRO2FBQ3BDO1lBQ0QsTUFBTTtTQUNlLENBQUM7UUFFMUIsSUFBSSxjQUFjLEtBQUssT0FBTyxFQUFFO1lBRTVCLGFBQWEsQ0FBQyxXQUFXLEdBQUc7Z0JBQ3hCLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVc7YUFDdkMsQ0FBQztTQUNMO1FBQ0QsT0FBTyxhQUFhLENBQUM7SUFDekIsQ0FBQztnRkF2SFEsc0JBQXNCO2dFQUF0QixzQkFBc0IsV0FBdEIsc0JBQXNCOztTQUF0QixzQkFBc0I7dUZBQXRCLHNCQUFzQjtjQURsQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIaXN0b3J5VGltZWxpbmVFbnRyeX0gZnJvbSAnLi9oaXN0b3J5LXNpZGViYXItd2lkZ2V0Lm1vZGVsJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7SGlzdG9yeVRpbWVsaW5lU3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL2hpc3RvcnktdGltZWxpbmUvaGlzdG9yeS10aW1lbGluZS5zdG9yZSc7XG5pbXBvcnQge2VtcHR5T2JqZWN0LCBSZWNvcmQsIFZpZXdDb250ZXh0fSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHt0YWtlfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0hpc3RvcnlUaW1lbGluZVN0b3JlRmFjdG9yeX0gZnJvbSAnLi9oaXN0b3J5LXRpbWVsaW5lLnN0b3JlLmZhY3RvcnknO1xuXG5leHBvcnQgdHlwZSBBY3Rpdml0eVR5cGVzID0gJ2NhbGxzJyB8ICd0YXNrcycgfCAnbWVldGluZ3MnIHwgJ2hpc3RvcnknIHwgJ2F1ZGl0JyB8ICdub3RlcycgfCBzdHJpbmc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIaXN0b3J5VGltZWxpbmVBZGFwdGVyIHtcbiAgICBsb2FkaW5nID0gZmFsc2U7XG5cbiAgICBjYWNoZTogSGlzdG9yeVRpbWVsaW5lRW50cnlbXSA9IFtdO1xuICAgIGRhdGFTdHJlYW0gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEhpc3RvcnlUaW1lbGluZUVudHJ5W10+KHRoaXMuY2FjaGUpO1xuICAgIGRhdGFTdHJlYW0kID0gdGhpcy5kYXRhU3RyZWFtLmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgcHJpdmF0ZSBkZWZhdWx0UGFnZVNpemUgPSAxMDtcbiAgICBwcml2YXRlIHN0b3JlOiBIaXN0b3J5VGltZWxpbmVTdG9yZTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBoaXN0b3J5VGltZWxpbmVTdG9yZUZhY3Rvcnk6IEhpc3RvcnlUaW1lbGluZVN0b3JlRmFjdG9yeVxuICAgICkge1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqIEBwYXJhbSB7Vmlld0NvbnRleHR9IGNvbnRleHQgLSBwYXJlbnQgbW9kdWxlIGNvbnRleHRcbiAgICAgKiBAZGVzY3JpcHRpb24gYWRhcHRlciBpbml0IGZ1bmN0aW9uIHRvIGluaXRpYWxpemUgdGltZWxpbmUgc3RvcmVcbiAgICAgKi9cbiAgICBpbml0KGNvbnRleHQ6IFZpZXdDb250ZXh0KTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy5zdG9yZSA9IHRoaXMuaGlzdG9yeVRpbWVsaW5lU3RvcmVGYWN0b3J5LmNyZWF0ZSgpO1xuICAgICAgICB0aGlzLnN0b3JlLmluaXQoY29udGV4dCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybnMge09ic2VydmFibGU8SGlzdG9yeVRpbWVsaW5lRW50cnlbXT59IHJldHVybiBvYnNlcnZhYmxlIGFycmF5IG9mIHRpbWVsaW5lIGVudHJpZXNcbiAgICAgKiBAZGVzY3JpcHRpb24gcmV0cmlldmUgbmV4dCBzZXQgb2YgcmVjb3JkcyBzdGFydGluZyBmcm9tIHRoZSBjdXJyZW50IG9mZnNldFxuICAgICAqIHJlcHJlc2VudGVkIGJ5IHRoZSBmaWVsZCB0aGlzLmNhY2hlLmxlbmd0aFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVsb2FkIHRpbWVsaW5lXG4gICAgICovXG4gICAgZmV0Y2hUaW1lbGluZUVudHJpZXMocmVsb2FkOiBib29sZWFuKTogT2JzZXJ2YWJsZTxIaXN0b3J5VGltZWxpbmVFbnRyeVtdPiB7XG5cbiAgICAgICAgaWYgKHRoaXMubG9hZGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlbG9hZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5jYWNoZS5sZW5ndGggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RvcmUuaW5pdFNlYXJjaENyaXRlcmlhKHRoaXMuY2FjaGUubGVuZ3RoLCB0aGlzLmRlZmF1bHRQYWdlU2l6ZSk7XG5cbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zdG9yZS5sb2FkKGZhbHNlKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnN0IHJlY29yZHM6IFJlY29yZCBbXSA9IHZhbHVlLnJlY29yZHM7XG5cbiAgICAgICAgICAgIGlmICghZW1wdHlPYmplY3QocmVjb3JkcykpIHtcblxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHJlY29yZHMpLmZvckVhY2goa2V5ID0+IHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnB1c2godGhpcy5idWlsZFRpbWVsaW5lRW50cnkocmVjb3Jkc1trZXldKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRhdGFTdHJlYW0ubmV4dChbLi4udGhpcy5jYWNoZV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVN0cmVhbSQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybnMge3N0cmluZ30gY29sb3IgY29kZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpdml0eSB0aGUgdmFsaWQgYWN0aXZpdHkgdHlwZXNcbiAgICAgKiBAZGVzY3JpcHRpb24ge3JldHVybnMgdGhlIG1hcHBlZCBiYWNrZ3JvdW5kIGNvbG9yIGNvZGUgZGVmaW5lZCBmb3IgYW4gYWN0aXZpdHl9XG4gICAgICovXG4gICAgZ2V0QWN0aXZpdHlHcmlkQ29sb3IoYWN0aXZpdHk6IEFjdGl2aXR5VHlwZXMpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBjb2xvck1hcCA9IHtcbiAgICAgICAgICAgIGNhbGxzOiAneWVsbG93JyxcbiAgICAgICAgICAgIHRhc2tzOiAnZ3JlZW4nLFxuICAgICAgICAgICAgbWVldGluZ3M6ICdibHVlJyxcbiAgICAgICAgICAgIG5vdGVzOiAnb3JhbmdlJyxcbiAgICAgICAgICAgIGF1ZGl0OiAncHVycGxlJyxcbiAgICAgICAgICAgIGhpc3Rvcnk6ICdwdXJwbGUnXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBjb2xvck1hcFthY3Rpdml0eV0gfHwgJ3llbGxvdyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybnMge0hpc3RvcnlUaW1lbGluZUVudHJ5fSBUaW1lbGluZSBFbnRyeVxuICAgICAqIEBwYXJhbSB7UmVjb3JkfSByZWNvcmQgb2JqZWN0XG4gICAgICogQGRlc2NyaXB0aW9uIHtyZXR1cm5zIHRoZSBtYXBwZWQgcmVjb3JkIHRvIHRpbWVsaW5lIGVudHJ5fVxuICAgICAqL1xuICAgIGJ1aWxkVGltZWxpbmVFbnRyeShyZWNvcmQ6IFJlY29yZCk6IEhpc3RvcnlUaW1lbGluZUVudHJ5IHtcblxuICAgICAgICBjb25zdCB0aW1lbGluZU1vZHVsZSA9IHJlY29yZC5tb2R1bGU7XG5cbiAgICAgICAgbGV0IG1vZHVsZUljb24gPSByZWNvcmQuYXR0cmlidXRlcy5tb2R1bGVfbmFtZTtcbiAgICAgICAgaWYgKHRpbWVsaW5lTW9kdWxlID09PSAnYXVkaXQnKSB7XG4gICAgICAgICAgICBtb2R1bGVJY29uID0gJ0hpc3RvcnknO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZ3JpZENvbG9yID0gdGhpcy5nZXRBY3Rpdml0eUdyaWRDb2xvcihyZWNvcmQubW9kdWxlKTtcblxuICAgICAgICBjb25zdCB0aW1lbGluZUVudHJ5ID0ge1xuICAgICAgICAgICAgbW9kdWxlOiB0aW1lbGluZU1vZHVsZSxcbiAgICAgICAgICAgIGljb246IG1vZHVsZUljb24sXG4gICAgICAgICAgICBjb2xvcjogZ3JpZENvbG9yLFxuICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAndmFyY2hhcicsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hdHRyaWJ1dGVzLm5hbWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3ZhcmNoYXInLFxuICAgICAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXR0cmlidXRlcy5hc3NpZ25lZF91c2VyX25hbWUudXNlcl9uYW1lLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnZGF0ZXRpbWUnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXR0cmlidXRlcy5kYXRlX2VuZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWNvcmRcbiAgICAgICAgfSBhcyBIaXN0b3J5VGltZWxpbmVFbnRyeTtcblxuICAgICAgICBpZiAodGltZWxpbmVNb2R1bGUgPT09ICdhdWRpdCcpIHtcblxuICAgICAgICAgICAgdGltZWxpbmVFbnRyeS5kZXNjcmlwdGlvbiA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnaHRtbCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hdHRyaWJ1dGVzLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aW1lbGluZUVudHJ5O1xuICAgIH1cbn1cbiJdfQ==