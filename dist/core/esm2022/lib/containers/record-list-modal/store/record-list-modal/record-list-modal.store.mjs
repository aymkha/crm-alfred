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
import { map, take, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/record-list/record-list.store.factory";
import * as i2 from "../../../../store/metadata/metadata.store.service";
import * as i3 from "../../../../store/user-preference/user-preference.store";
class RecordListModalStore {
    listStoreFactory;
    meta;
    preferences;
    module = '';
    parentModule = '';
    recordList;
    listMetadata$;
    searchMetadata$;
    selection$;
    selectedCount$;
    selectedStatus$;
    columns$;
    listMetadata;
    linkClicked$;
    loading$;
    metadataLoading$;
    metadataLoadingState;
    linkClickedState;
    constructor(listStoreFactory, meta, preferences) {
        this.listStoreFactory = listStoreFactory;
        this.meta = meta;
        this.preferences = preferences;
        this.recordList = listStoreFactory.create();
        this.loading$ = this.recordList.loading$;
        this.metadataLoadingState = new BehaviorSubject(false);
        this.linkClickedState = new BehaviorSubject(false);
        this.linkClicked$ = this.linkClickedState.asObservable();
        this.metadataLoading$ = this.metadataLoadingState.asObservable();
        this.selection$ = this.recordList.selection$;
        this.selectedCount$ = this.recordList.selectedCount$;
        this.selectedStatus$ = this.recordList.selectedStatus$;
    }
    clear() {
        this.recordList.clear();
        this.recordList = null;
    }
    clearAuthBased() {
        this.recordList.clearAuthBased();
    }
    /**
     * Initial list records load if not cached and update state.
     * Returns observable to be used in resolver if needed
     *
     * @param {string} module name
     * @param {string} parentModule
     */
    init(module, parentModule = '') {
        this.module = module;
        this.parentModule = parentModule;
        this.loadCurrentSort();
        this.metadataLoadingState.next(true);
        const meta$ = this.meta.getMetadata(module).pipe(tap(() => {
            this.metadataLoadingState.next(false);
            this.recordList.load().pipe(take(1)).subscribe();
        }));
        this.listMetadata$ = meta$.pipe(map(meta => meta.listView));
        this.searchMetadata$ = meta$.pipe(map(meta => meta.search));
        this.recordList.init(module, false, 'list_max_entries_per_modal');
        this.columns$ = this.listMetadata$.pipe(map(metadata => metadata.fields));
    }
    /**
     * Load / reload records using current pagination and criteria
     *
     * @param {boolean} useCache if to use cache
     * @returns {object} Observable<RecordList>
     */
    load(useCache = true) {
        return this.recordList.load(useCache);
    }
    /**
     * Load current sorting
     */
    loadCurrentSort() {
        if (!this.parentModule) {
            return;
        }
        const currentSort = this.loadPreference(this.parentModule, 'current-sort');
        if (!currentSort || emptyObject(currentSort)) {
            return;
        }
        this.recordList.sort = currentSort;
    }
    /**
     * Load current sorting
     */
    saveCurrentSort() {
        if (!this.parentModule) {
            return;
        }
        this.savePreference(this.parentModule, 'current-sort', this.recordList.sort);
    }
    /**
     * Emit Clicked Event
     */
    emitLinkClicked() {
        this.linkClickedState.next(true);
    }
    /**
     * Build ui user preference key
     * @param storageKey
     * @protected
     */
    getPreferenceKey(storageKey) {
        return this.module + '-record-list-modal-' + storageKey;
    }
    /**
     * Save ui user preference
     * @param module
     * @param storageKey
     * @param value
     * @protected
     */
    savePreference(module, storageKey, value) {
        this.preferences.setUi(module, this.getPreferenceKey(storageKey), value);
    }
    /**
     * Load ui user preference
     * @param parentModule
     * @param storageKey
     * @protected
     */
    loadPreference(parentModule, storageKey) {
        return this.preferences.getUi(parentModule, this.getPreferenceKey(storageKey));
    }
    static ɵfac = function RecordListModalStore_Factory(t) { return new (t || RecordListModalStore)(i0.ɵɵinject(i1.RecordListStoreFactory), i0.ɵɵinject(i2.MetadataStore), i0.ɵɵinject(i3.UserPreferenceStore)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordListModalStore, factory: RecordListModalStore.ɵfac });
}
export { RecordListModalStore };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordListModalStore, [{
        type: Injectable
    }], function () { return [{ type: i1.RecordListStoreFactory }, { type: i2.MetadataStore }, { type: i3.UserPreferenceStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLWxpc3QtbW9kYWwuc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9yZWNvcmQtbGlzdC1tb2RhbC9zdG9yZS9yZWNvcmQtbGlzdC1tb2RhbC9yZWNvcmQtbGlzdC1tb2RhbC5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsZUFBZSxFQUFhLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBbUIsV0FBVyxFQUErRCxNQUFNLFFBQVEsQ0FBQztBQUNuSCxPQUFPLEVBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFPOUMsTUFDYSxvQkFBb0I7SUFtQmY7SUFDQTtJQUNBO0lBbkJkLE1BQU0sR0FBVyxFQUFFLENBQUM7SUFDcEIsWUFBWSxHQUFXLEVBQUUsQ0FBQztJQUMxQixVQUFVLENBQWtCO0lBQzVCLGFBQWEsQ0FBNkI7SUFDMUMsZUFBZSxDQUF5QjtJQUN4QyxVQUFVLENBQThCO0lBQ3hDLGNBQWMsQ0FBcUI7SUFDbkMsZUFBZSxDQUE4QjtJQUM3QyxRQUFRLENBQWlDO0lBQ3pDLFlBQVksQ0FBaUI7SUFDN0IsWUFBWSxDQUFzQjtJQUNsQyxRQUFRLENBQXNCO0lBQzlCLGdCQUFnQixDQUFzQjtJQUM1QixvQkFBb0IsQ0FBMkI7SUFDL0MsZ0JBQWdCLENBQTJCO0lBRXJELFlBQ2MsZ0JBQXdDLEVBQ3hDLElBQW1CLEVBQ25CLFdBQWdDO1FBRmhDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBd0I7UUFDeEMsU0FBSSxHQUFKLElBQUksQ0FBZTtRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBcUI7UUFFMUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1FBRXpDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDekQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNqRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO1FBQzdDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUM7UUFDckQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQztJQUMzRCxDQUFDO0lBRUQsS0FBSztRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUVELGNBQWM7UUFDVixJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxJQUFJLENBQUMsTUFBYyxFQUFFLGVBQXVCLEVBQUU7UUFDakQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFFakMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXZCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUM1QyxHQUFHLENBQUMsR0FBRyxFQUFFO1lBQ0wsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FDdkIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNWLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQ0wsQ0FBQztRQUNGLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUdEOzs7OztPQUtHO0lBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJO1FBRXZCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVEOztPQUVHO0lBQ0ksZUFBZTtRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNwQixPQUFPO1NBQ1Y7UUFFRCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLFdBQVcsSUFBSSxXQUFXLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDMUMsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO0lBQ3ZDLENBQUM7SUFFRDs7T0FFRztJQUNJLGVBQWU7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDcEIsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLGNBQWMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFFRDs7T0FFRztJQUNJLGVBQWU7UUFDbEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNPLGdCQUFnQixDQUFDLFVBQWtCO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLE1BQU0sR0FBRyxxQkFBcUIsR0FBRyxVQUFVLENBQUM7SUFDNUQsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNPLGNBQWMsQ0FBQyxNQUFjLEVBQUUsVUFBa0IsRUFBRSxLQUFVO1FBQ25FLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ08sY0FBYyxDQUFDLFlBQW9CLEVBQUUsVUFBa0I7UUFDN0QsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDbkYsQ0FBQzs4RUFsSlEsb0JBQW9CO2dFQUFwQixvQkFBb0IsV0FBcEIsb0JBQW9COztTQUFwQixvQkFBb0I7dUZBQXBCLG9CQUFvQjtjQURoQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtDb2x1bW5EZWZpbml0aW9uLCBlbXB0eU9iamVjdCwgUmVjb3JkTGlzdE1ldGEsIFJlY29yZFNlbGVjdGlvbiwgU2VhcmNoTWV0YSwgU2VsZWN0aW9uU3RhdHVzfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHttYXAsIHRha2UsIHRhcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtSZWNvcmRMaXN0U3RvcmVGYWN0b3J5fSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9yZWNvcmQtbGlzdC9yZWNvcmQtbGlzdC5zdG9yZS5mYWN0b3J5JztcbmltcG9ydCB7TWV0YWRhdGFTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvbWV0YWRhdGEvbWV0YWRhdGEuc3RvcmUuc2VydmljZSc7XG5pbXBvcnQge1JlY29yZExpc3QsIFJlY29yZExpc3RTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvcmVjb3JkLWxpc3QvcmVjb3JkLWxpc3Quc3RvcmUnO1xuaW1wb3J0IHtTdGF0ZVN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9zdGF0ZSc7XG5pbXBvcnQge1VzZXJQcmVmZXJlbmNlU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3VzZXItcHJlZmVyZW5jZS91c2VyLXByZWZlcmVuY2Uuc3RvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVjb3JkTGlzdE1vZGFsU3RvcmUgaW1wbGVtZW50cyBTdGF0ZVN0b3JlIHtcblxuICAgIG1vZHVsZTogc3RyaW5nID0gJyc7XG4gICAgcGFyZW50TW9kdWxlOiBzdHJpbmcgPSAnJztcbiAgICByZWNvcmRMaXN0OiBSZWNvcmRMaXN0U3RvcmU7XG4gICAgbGlzdE1ldGFkYXRhJDogT2JzZXJ2YWJsZTxSZWNvcmRMaXN0TWV0YT47XG4gICAgc2VhcmNoTWV0YWRhdGEkOiBPYnNlcnZhYmxlPFNlYXJjaE1ldGE+O1xuICAgIHNlbGVjdGlvbiQ6IE9ic2VydmFibGU8UmVjb3JkU2VsZWN0aW9uPjtcbiAgICBzZWxlY3RlZENvdW50JDogT2JzZXJ2YWJsZTxudW1iZXI+O1xuICAgIHNlbGVjdGVkU3RhdHVzJDogT2JzZXJ2YWJsZTxTZWxlY3Rpb25TdGF0dXM+O1xuICAgIGNvbHVtbnMkOiBPYnNlcnZhYmxlPENvbHVtbkRlZmluaXRpb25bXT47XG4gICAgbGlzdE1ldGFkYXRhOiBSZWNvcmRMaXN0TWV0YTtcbiAgICBsaW5rQ2xpY2tlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgbG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgbWV0YWRhdGFMb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBwcm90ZWN0ZWQgbWV0YWRhdGFMb2FkaW5nU3RhdGU6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPjtcbiAgICBwcm90ZWN0ZWQgbGlua0NsaWNrZWRTdGF0ZTogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBsaXN0U3RvcmVGYWN0b3J5OiBSZWNvcmRMaXN0U3RvcmVGYWN0b3J5LFxuICAgICAgICBwcm90ZWN0ZWQgbWV0YTogTWV0YWRhdGFTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHByZWZlcmVuY2VzOiBVc2VyUHJlZmVyZW5jZVN0b3JlXG4gICAgKSB7XG4gICAgICAgIHRoaXMucmVjb3JkTGlzdCA9IGxpc3RTdG9yZUZhY3RvcnkuY3JlYXRlKCk7XG4gICAgICAgIHRoaXMubG9hZGluZyQgPSB0aGlzLnJlY29yZExpc3QubG9hZGluZyQ7XG5cbiAgICAgICAgdGhpcy5tZXRhZGF0YUxvYWRpbmdTdGF0ZSA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuICAgICAgICB0aGlzLmxpbmtDbGlja2VkU3RhdGUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcbiAgICAgICAgdGhpcy5saW5rQ2xpY2tlZCQgPSB0aGlzLmxpbmtDbGlja2VkU3RhdGUuYXNPYnNlcnZhYmxlKCk7XG4gICAgICAgIHRoaXMubWV0YWRhdGFMb2FkaW5nJCA9IHRoaXMubWV0YWRhdGFMb2FkaW5nU3RhdGUuYXNPYnNlcnZhYmxlKCk7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uJCA9IHRoaXMucmVjb3JkTGlzdC5zZWxlY3Rpb24kO1xuICAgICAgICB0aGlzLnNlbGVjdGVkQ291bnQkID0gdGhpcy5yZWNvcmRMaXN0LnNlbGVjdGVkQ291bnQkO1xuICAgICAgICB0aGlzLnNlbGVjdGVkU3RhdHVzJCA9IHRoaXMucmVjb3JkTGlzdC5zZWxlY3RlZFN0YXR1cyQ7XG4gICAgfVxuXG4gICAgY2xlYXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVjb3JkTGlzdC5jbGVhcigpO1xuICAgICAgICB0aGlzLnJlY29yZExpc3QgPSBudWxsO1xuICAgIH1cblxuICAgIGNsZWFyQXV0aEJhc2VkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlY29yZExpc3QuY2xlYXJBdXRoQmFzZWQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsIGxpc3QgcmVjb3JkcyBsb2FkIGlmIG5vdCBjYWNoZWQgYW5kIHVwZGF0ZSBzdGF0ZS5cbiAgICAgKiBSZXR1cm5zIG9ic2VydmFibGUgdG8gYmUgdXNlZCBpbiByZXNvbHZlciBpZiBuZWVkZWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2R1bGUgbmFtZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJlbnRNb2R1bGVcbiAgICAgKi9cbiAgICBwdWJsaWMgaW5pdChtb2R1bGU6IHN0cmluZywgcGFyZW50TW9kdWxlOiBzdHJpbmcgPSAnJyk6IHZvaWQge1xuICAgICAgICB0aGlzLm1vZHVsZSA9IG1vZHVsZTtcbiAgICAgICAgdGhpcy5wYXJlbnRNb2R1bGUgPSBwYXJlbnRNb2R1bGU7XG5cbiAgICAgICAgdGhpcy5sb2FkQ3VycmVudFNvcnQoKTtcblxuICAgICAgICB0aGlzLm1ldGFkYXRhTG9hZGluZ1N0YXRlLm5leHQodHJ1ZSk7XG4gICAgICAgIGNvbnN0IG1ldGEkID0gdGhpcy5tZXRhLmdldE1ldGFkYXRhKG1vZHVsZSkucGlwZShcbiAgICAgICAgICAgIHRhcCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXRhZGF0YUxvYWRpbmdTdGF0ZS5uZXh0KGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY29yZExpc3QubG9hZCgpLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgIHRha2UoMSlcbiAgICAgICAgICAgICAgICApLnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5saXN0TWV0YWRhdGEkID0gbWV0YSQucGlwZShtYXAobWV0YSA9PiBtZXRhLmxpc3RWaWV3KSk7XG4gICAgICAgIHRoaXMuc2VhcmNoTWV0YWRhdGEkID0gbWV0YSQucGlwZShtYXAobWV0YSA9PiBtZXRhLnNlYXJjaCkpO1xuICAgICAgICB0aGlzLnJlY29yZExpc3QuaW5pdChtb2R1bGUsIGZhbHNlLCAnbGlzdF9tYXhfZW50cmllc19wZXJfbW9kYWwnKTtcbiAgICAgICAgdGhpcy5jb2x1bW5zJCA9IHRoaXMubGlzdE1ldGFkYXRhJC5waXBlKG1hcChtZXRhZGF0YSA9PiBtZXRhZGF0YS5maWVsZHMpKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIExvYWQgLyByZWxvYWQgcmVjb3JkcyB1c2luZyBjdXJyZW50IHBhZ2luYXRpb24gYW5kIGNyaXRlcmlhXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHVzZUNhY2hlIGlmIHRvIHVzZSBjYWNoZVxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE9ic2VydmFibGU8UmVjb3JkTGlzdD5cbiAgICAgKi9cbiAgICBwdWJsaWMgbG9hZCh1c2VDYWNoZSA9IHRydWUpOiBPYnNlcnZhYmxlPFJlY29yZExpc3Q+IHtcblxuICAgICAgICByZXR1cm4gdGhpcy5yZWNvcmRMaXN0LmxvYWQodXNlQ2FjaGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWQgY3VycmVudCBzb3J0aW5nXG4gICAgICovXG4gICAgcHVibGljIGxvYWRDdXJyZW50U29ydCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLnBhcmVudE1vZHVsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3VycmVudFNvcnQgPSB0aGlzLmxvYWRQcmVmZXJlbmNlKHRoaXMucGFyZW50TW9kdWxlLCAnY3VycmVudC1zb3J0Jyk7XG4gICAgICAgIGlmICghY3VycmVudFNvcnQgfHwgZW1wdHlPYmplY3QoY3VycmVudFNvcnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlY29yZExpc3Quc29ydCA9IGN1cnJlbnRTb3J0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWQgY3VycmVudCBzb3J0aW5nXG4gICAgICovXG4gICAgcHVibGljIHNhdmVDdXJyZW50U29ydCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLnBhcmVudE1vZHVsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zYXZlUHJlZmVyZW5jZSh0aGlzLnBhcmVudE1vZHVsZSwgJ2N1cnJlbnQtc29ydCcsIHRoaXMucmVjb3JkTGlzdC5zb3J0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFbWl0IENsaWNrZWQgRXZlbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgZW1pdExpbmtDbGlja2VkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmxpbmtDbGlja2VkU3RhdGUubmV4dCh0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCB1aSB1c2VyIHByZWZlcmVuY2Uga2V5XG4gICAgICogQHBhcmFtIHN0b3JhZ2VLZXlcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldFByZWZlcmVuY2VLZXkoc3RvcmFnZUtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kdWxlICsgJy1yZWNvcmQtbGlzdC1tb2RhbC0nICsgc3RvcmFnZUtleTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTYXZlIHVpIHVzZXIgcHJlZmVyZW5jZVxuICAgICAqIEBwYXJhbSBtb2R1bGVcbiAgICAgKiBAcGFyYW0gc3RvcmFnZUtleVxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgc2F2ZVByZWZlcmVuY2UobW9kdWxlOiBzdHJpbmcsIHN0b3JhZ2VLZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLnByZWZlcmVuY2VzLnNldFVpKG1vZHVsZSwgdGhpcy5nZXRQcmVmZXJlbmNlS2V5KHN0b3JhZ2VLZXkpLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZCB1aSB1c2VyIHByZWZlcmVuY2VcbiAgICAgKiBAcGFyYW0gcGFyZW50TW9kdWxlXG4gICAgICogQHBhcmFtIHN0b3JhZ2VLZXlcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGxvYWRQcmVmZXJlbmNlKHBhcmVudE1vZHVsZTogc3RyaW5nLCBzdG9yYWdlS2V5OiBzdHJpbmcpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmVmZXJlbmNlcy5nZXRVaShwYXJlbnRNb2R1bGUsIHRoaXMuZ2V0UHJlZmVyZW5jZUtleShzdG9yYWdlS2V5KSk7XG4gICAgfVxufVxuIl19