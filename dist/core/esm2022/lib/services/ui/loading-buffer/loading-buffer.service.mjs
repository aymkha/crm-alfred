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
import { debounceTime } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../../store/system-config/system-config.store";
class LoadingBuffer {
    config;
    delayConfigKey;
    loading$;
    loadingStore = new BehaviorSubject(false);
    loadingBufferStore = new BehaviorSubject(false);
    loadingBufferStore$;
    subs = [];
    buffered = false;
    constructor(config, delayConfigKey = 'loading_display_delay') {
        this.config = config;
        this.delayConfigKey = delayConfigKey;
        this.loading$ = this.loadingStore.asObservable();
        const uiSettings = config.getConfigValue('ui') ?? {};
        const delay = parseInt(uiSettings[delayConfigKey] ?? '') ?? 1500;
        this.loadingBufferStore$ = this.loadingBufferStore.asObservable().pipe(debounceTime(delay));
        this.subs.push(this.loadingBufferStore$.subscribe((loading) => {
            if (!this.buffered) {
                return;
            }
            this.loadingStore.next(loading);
        }));
    }
    /**
     * Update loading status
     *
     * @param {boolean} loading status to set
     */
    updateLoading(loading) {
        if (loading === true) {
            this.buffered = true;
            this.loadingBufferStore.next(loading);
            return;
        }
        this.buffered = false;
        this.loadingStore.next(loading);
        this.loadingBufferStore.next(loading);
    }
    static ɵfac = function LoadingBuffer_Factory(t) { i0.ɵɵinvalidFactory(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LoadingBuffer, factory: LoadingBuffer.ɵfac });
}
export { LoadingBuffer };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoadingBuffer, [{
        type: Injectable
    }], function () { return [{ type: i1.SystemConfigStore }, { type: undefined }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1idWZmZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9zZXJ2aWNlcy91aS9sb2FkaW5nLWJ1ZmZlci9sb2FkaW5nLWJ1ZmZlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxlQUFlLEVBQTJCLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBRzVDLE1BQ2EsYUFBYTtJQVVBO0lBQXFDO0lBUjNELFFBQVEsQ0FBc0I7SUFFcEIsWUFBWSxHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO0lBQ25ELGtCQUFrQixHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO0lBQ3pELG1CQUFtQixDQUFzQjtJQUN6QyxJQUFJLEdBQW1CLEVBQUUsQ0FBQztJQUMxQixRQUFRLEdBQUcsS0FBSyxDQUFDO0lBRTNCLFlBQXNCLE1BQXlCLEVBQVksaUJBQXlCLHVCQUF1QjtRQUFyRixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUFZLG1CQUFjLEdBQWQsY0FBYyxDQUFrQztRQUV2RyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFakQsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckQsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUM7UUFFakUsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDNUYsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQzFELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNoQixPQUFPO2FBQ1Y7WUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxhQUFhLENBQUMsT0FBZ0I7UUFFakMsSUFBSSxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdEMsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDOztnRUExQ1EsYUFBYSxXQUFiLGFBQWE7O1NBQWIsYUFBYTt1RkFBYixhQUFhO2NBRHpCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7ZGVib3VuY2VUaW1lfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1N5c3RlbUNvbmZpZ1N0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9zeXN0ZW0tY29uZmlnL3N5c3RlbS1jb25maWcuc3RvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9hZGluZ0J1ZmZlciB7XG5cbiAgICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICAgIHByb3RlY3RlZCBsb2FkaW5nU3RvcmUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcbiAgICBwcm90ZWN0ZWQgbG9hZGluZ0J1ZmZlclN0b3JlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG4gICAgcHJvdGVjdGVkIGxvYWRpbmdCdWZmZXJTdG9yZSQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgcHJvdGVjdGVkIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gICAgcHJvdGVjdGVkIGJ1ZmZlcmVkID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY29uZmlnOiBTeXN0ZW1Db25maWdTdG9yZSwgcHJvdGVjdGVkIGRlbGF5Q29uZmlnS2V5OiBzdHJpbmcgPSAnbG9hZGluZ19kaXNwbGF5X2RlbGF5Jykge1xuXG4gICAgICAgIHRoaXMubG9hZGluZyQgPSB0aGlzLmxvYWRpbmdTdG9yZS5hc09ic2VydmFibGUoKTtcblxuICAgICAgICBjb25zdCB1aVNldHRpbmdzID0gY29uZmlnLmdldENvbmZpZ1ZhbHVlKCd1aScpID8/IHt9O1xuICAgICAgICBjb25zdCBkZWxheSA9IHBhcnNlSW50KHVpU2V0dGluZ3NbZGVsYXlDb25maWdLZXldID8/ICcnKSA/PyAxNTAwO1xuXG4gICAgICAgIHRoaXMubG9hZGluZ0J1ZmZlclN0b3JlJCA9IHRoaXMubG9hZGluZ0J1ZmZlclN0b3JlLmFzT2JzZXJ2YWJsZSgpLnBpcGUoZGVib3VuY2VUaW1lKGRlbGF5KSk7XG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMubG9hZGluZ0J1ZmZlclN0b3JlJC5zdWJzY3JpYmUoKGxvYWRpbmcpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5idWZmZXJlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubG9hZGluZ1N0b3JlLm5leHQobG9hZGluZyk7XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgbG9hZGluZyBzdGF0dXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbG9hZGluZyBzdGF0dXMgdG8gc2V0XG4gICAgICovXG4gICAgcHVibGljIHVwZGF0ZUxvYWRpbmcobG9hZGluZzogYm9vbGVhbik6IHZvaWQge1xuXG4gICAgICAgIGlmIChsb2FkaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZ0J1ZmZlclN0b3JlLm5leHQobG9hZGluZyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJ1ZmZlcmVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMubG9hZGluZ1N0b3JlLm5leHQobG9hZGluZyk7XG4gICAgICAgIHRoaXMubG9hZGluZ0J1ZmZlclN0b3JlLm5leHQobG9hZGluZyk7XG4gICAgfVxufVxuIl19