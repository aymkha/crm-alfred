/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2023 SalesAgility Ltd.
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
import { BehaviorSubject, of } from 'rxjs';
import { distinctUntilChanged, map, shareReplay } from 'rxjs/operators';
import { deepClone } from 'common';
import * as i0 from "@angular/core";
import * as i1 from "../app-state/app-state.store";
const initialState = {
    adminPanel: []
};
let internalState = deepClone(initialState);
let cache$ = null;
class AdminMetadataStore {
    appStateStore;
    /**
     * Public long-lived observable streams
     */
    adminPanel$;
    store = new BehaviorSubject(internalState);
    state$ = this.store.asObservable();
    constructor(appStateStore) {
        this.appStateStore = appStateStore;
        this.adminPanel$ = this.state$.pipe(map(state => state.adminPanel), distinctUntilChanged());
    }
    /**
     * Public Api
     */
    /**
     * Clear state
     */
    clear() {
        cache$ = null;
        this.updateState(deepClone(initialState));
    }
    clearAuthBased() {
        this.clear();
    }
    /**
     * Returns the currently active admin panel
     *
     * @returns {object} the admin panel
     */
    getAdminPanel() {
        return internalState.adminPanel;
    }
    /**
     * Check if loaded
     */
    isCached() {
        return cache$ !== null;
    }
    /**
     * Internal API
     */
    /**
     * Update the state
     *
     * @param {object} state to set
     */
    updateState(state) {
        this.store.next(internalState = state);
    }
    /**
     * Set pre-loaded adminMetadata and cache
     */
    set(adminMetadata) {
        cache$ = of(adminMetadata).pipe(shareReplay(1));
        this.updateState(adminMetadata);
    }
    static ɵfac = function AdminMetadataStore_Factory(t) { return new (t || AdminMetadataStore)(i0.ɵɵinject(i1.AppStateStore)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AdminMetadataStore, factory: AdminMetadataStore.ɵfac, providedIn: 'root' });
}
export { AdminMetadataStore };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminMetadataStore, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.AppStateStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4tbWV0YWRhdGEuc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc3RvcmUvYWRtaW4tbWV0YWRhdGEvYWRtaW4tbWV0YWRhdGEuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGVBQWUsRUFBYyxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFDLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUd0RSxPQUFPLEVBQUMsU0FBUyxFQUFZLE1BQU0sUUFBUSxDQUFDOzs7QUFJNUMsTUFBTSxZQUFZLEdBQWtCO0lBQ2hDLFVBQVUsRUFBRSxFQUFFO0NBQ2pCLENBQUM7QUFFRixJQUFJLGFBQWEsR0FBa0IsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBRTNELElBQUksTUFBTSxHQUFvQixJQUFJLENBQUM7QUFFbkMsTUFHYSxrQkFBa0I7SUFXYjtJQVRkOztPQUVHO0lBQ0gsV0FBVyxDQUF3QjtJQUV6QixLQUFLLEdBQUcsSUFBSSxlQUFlLENBQWdCLGFBQWEsQ0FBQyxDQUFDO0lBQzFELE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBRTdDLFlBQ2MsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFFdEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7SUFFRDs7T0FFRztJQUVIOztPQUVHO0lBQ0ksS0FBSztRQUNSLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFTSxjQUFjO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGFBQWE7UUFDaEIsT0FBTyxhQUFhLENBQUMsVUFBVSxDQUFDO0lBQ3BDLENBQUM7SUFFRDs7T0FFRztJQUNJLFFBQVE7UUFDWCxPQUFPLE1BQU0sS0FBSyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUVEOztPQUVHO0lBRUg7Ozs7T0FJRztJQUNPLFdBQVcsQ0FBQyxLQUFvQjtRQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVEOztPQUVHO0lBQ0ksR0FBRyxDQUFDLGFBQTRCO1FBQ25DLE1BQU0sR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7SUFFcEMsQ0FBQzs0RUFwRVEsa0JBQWtCO2dFQUFsQixrQkFBa0IsV0FBbEIsa0JBQWtCLG1CQUZmLE1BQU07O1NBRVQsa0JBQWtCO3VGQUFsQixrQkFBa0I7Y0FIOUIsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjMgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIG9mfSBmcm9tICdyeGpzJztcbmltcG9ydCB7ZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCwgc2hhcmVSZXBsYXl9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7QXBwU3RhdGVTdG9yZX0gZnJvbSAnLi4vYXBwLXN0YXRlL2FwcC1zdGF0ZS5zdG9yZSc7XG5pbXBvcnQge1N0YXRlU3RvcmV9IGZyb20gJy4uL3N0YXRlJztcbmltcG9ydCB7ZGVlcENsb25lLCBPYmplY3RNYXB9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge0FkbWluTWV0YWRhdGF9IGZyb20gJy4vYWRtaW4tbWV0YWRhdGEubW9kZWwnO1xuXG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogQWRtaW5NZXRhZGF0YSA9IHtcbiAgICBhZG1pblBhbmVsOiBbXVxufTtcblxubGV0IGludGVybmFsU3RhdGU6IEFkbWluTWV0YWRhdGEgPSBkZWVwQ2xvbmUoaW5pdGlhbFN0YXRlKTtcblxubGV0IGNhY2hlJDogT2JzZXJ2YWJsZTxhbnk+ID0gbnVsbDtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQWRtaW5NZXRhZGF0YVN0b3JlIGltcGxlbWVudHMgU3RhdGVTdG9yZSB7XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaWMgbG9uZy1saXZlZCBvYnNlcnZhYmxlIHN0cmVhbXNcbiAgICAgKi9cbiAgICBhZG1pblBhbmVsJDogT2JzZXJ2YWJsZTxPYmplY3RNYXA+O1xuXG4gICAgcHJvdGVjdGVkIHN0b3JlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxBZG1pbk1ldGFkYXRhPihpbnRlcm5hbFN0YXRlKTtcbiAgICBwcm90ZWN0ZWQgc3RhdGUkID0gdGhpcy5zdG9yZS5hc09ic2VydmFibGUoKTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgYXBwU3RhdGVTdG9yZTogQXBwU3RhdGVTdG9yZSxcbiAgICApIHtcbiAgICAgICAgdGhpcy5hZG1pblBhbmVsJCA9IHRoaXMuc3RhdGUkLnBpcGUobWFwKHN0YXRlID0+IHN0YXRlLmFkbWluUGFuZWwpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaWMgQXBpXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBzdGF0ZVxuICAgICAqL1xuICAgIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcbiAgICAgICAgY2FjaGUkID0gbnVsbDtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShkZWVwQ2xvbmUoaW5pdGlhbFN0YXRlKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyQXV0aEJhc2VkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3VycmVudGx5IGFjdGl2ZSBhZG1pbiBwYW5lbFxuICAgICAqXG4gICAgICogQHJldHVybnMge29iamVjdH0gdGhlIGFkbWluIHBhbmVsXG4gICAgICovXG4gICAgcHVibGljIGdldEFkbWluUGFuZWwoKTogQWRtaW5NZXRhZGF0YSB7XG4gICAgICAgIHJldHVybiBpbnRlcm5hbFN0YXRlLmFkbWluUGFuZWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgbG9hZGVkXG4gICAgICovXG4gICAgcHVibGljIGlzQ2FjaGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gY2FjaGUkICE9PSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludGVybmFsIEFQSVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBzdGF0ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHN0YXRlIHRvIHNldFxuICAgICAqL1xuICAgIHByb3RlY3RlZCB1cGRhdGVTdGF0ZShzdGF0ZTogQWRtaW5NZXRhZGF0YSk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0b3JlLm5leHQoaW50ZXJuYWxTdGF0ZSA9IHN0YXRlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgcHJlLWxvYWRlZCBhZG1pbk1ldGFkYXRhIGFuZCBjYWNoZVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQoYWRtaW5NZXRhZGF0YTogQWRtaW5NZXRhZGF0YSk6IHZvaWQge1xuICAgICAgICBjYWNoZSQgPSBvZihhZG1pbk1ldGFkYXRhKS5waXBlKHNoYXJlUmVwbGF5KDEpKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZShhZG1pbk1ldGFkYXRhKTtcblxuICAgIH1cblxuXG59XG4iXX0=