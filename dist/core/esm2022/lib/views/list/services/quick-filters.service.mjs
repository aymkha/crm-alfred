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
import { Injectable } from "@angular/core";
import { isTrue } from 'common';
import { BehaviorSubject } from "rxjs";
import { ScreenSize } from "../../../services/ui/screen-size-observer/screen-size-observer.service";
import { map } from "rxjs/operators";
import * as i0 from "@angular/core";
import * as i1 from "../../../store/system-config/system-config.store";
import * as i2 from "../../../services/ui/screen-size-observer/screen-size-observer.service";
import * as i3 from "../store/list-view/list-view.store";
class QuickFiltersService {
    systemConfigStore;
    screenSize;
    store;
    quickFiltersConfigState = new BehaviorSubject({ buttons: [] });
    enabledState = new BehaviorSubject(false);
    screen = ScreenSize.Medium;
    defaultBreakpoint = 5;
    breakpoint;
    breakdownSizes = [];
    subs = [];
    config$ = this.quickFiltersConfigState.asObservable();
    enabled$ = this.enabledState.asObservable();
    enabled = false;
    breakdown$;
    constructor(systemConfigStore, screenSize, store) {
        this.systemConfigStore = systemConfigStore;
        this.screenSize = screenSize;
        this.store = store;
        this.breakdownSizes = this.systemConfigStore.getUi('quick_filters_breakdown_screen_sizes');
        const displayedQuickFilters = this.systemConfigStore.getUi('displayed_quick_filters');
        const quickFiltersBreakdownThresholds = this.systemConfigStore.getUi('quick_filters_breakdown_threshold');
        this.breakdown$ = this.screenSize.screenSize$.pipe(map(screenSize => {
            const quickFiltersBreakpoint = displayedQuickFilters[screenSize] ?? 2;
            const maxQuickFiltersForDisplay = quickFiltersBreakdownThresholds[screenSize] ?? 2;
            if (quickFiltersBreakpoint > maxQuickFiltersForDisplay) {
                return true;
            }
            return isTrue(this.breakdownSizes[screenSize] ?? false);
        }));
        this.subs.push(this.screenSize.screenSize$.subscribe(currentScreenSize => {
            if (currentScreenSize) {
                this.screen = currentScreenSize;
            }
            this.init();
        }));
    }
    init() {
        let filters = this.store.filterList.getFilters() ?? [];
        filters = filters.filter(filter => filter?.attributes?.quick_filter ?? false);
        this.enabled = this.areConfigEnabled();
        if (!filters || filters.length < 1) {
            this.enabled = false;
            this.enabledState.next(false);
            return;
        }
        this.enabledState.next(this.enabled);
        const config = {
            buttonKlass: ['settings-button btn btn-outline-main'],
            dropdownLabel: this.store.appStrings.LBL_QUICK_FILTERS || '',
            breakpoint: this.getBreakpoint(),
            showAfterBreakpoint: false,
            dropdownOptions: {
                placement: ['bottom-right'],
                wrapperKlass: ['dropdown-button-secondary', 'filter-action-group']
            },
            buttons: []
        };
        const activeFilters = this.store.activeFilters;
        let anyActive = false;
        filters.forEach((filter) => {
            const isQuickFilter = filter?.attributes?.quick_filter ?? false;
            if (!isQuickFilter) {
                return;
            }
            const isActive = Object.keys(activeFilters).some(key => key === filter.key);
            anyActive = anyActive || isActive;
            const button = {
                label: filter.attributes.name,
                title: filter.attributes.name,
                onClick: () => {
                    this.store.toggleQuickFilter(filter);
                }
            };
            if (isActive) {
                button.klass = ['active'];
            }
            config.buttons.push(button);
        });
        if (anyActive) {
            config.dropdownOptions.klass = ['active'];
            config.dropdownOptions.icon = 'filter';
        }
        this.quickFiltersConfigState.next(config);
    }
    destroy() {
        this.subs.forEach(sub => sub.unsubscribe());
        this.subs = [];
        this.quickFiltersConfigState.unsubscribe();
    }
    getBreakpoint() {
        const breakpointMap = this.systemConfigStore.getUi('displayed_quick_filters');
        if (this.screen && breakpointMap && breakpointMap[this.screen]) {
            this.breakpoint = breakpointMap[this.screen];
            return this.breakpoint;
        }
        if (this.breakpoint) {
            return this.breakpoint;
        }
        return this.defaultBreakpoint;
    }
    areConfigEnabled() {
        const enableMap = this.systemConfigStore.getUi('enable_quick_filters');
        if (!this.screen || !enableMap) {
            return false;
        }
        return isTrue(enableMap[this.screen] ?? false);
    }
    static ɵfac = function QuickFiltersService_Factory(t) { return new (t || QuickFiltersService)(i0.ɵɵinject(i1.SystemConfigStore), i0.ɵɵinject(i2.ScreenSizeObserverService), i0.ɵɵinject(i3.ListViewStore)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: QuickFiltersService, factory: QuickFiltersService.ɵfac });
}
export { QuickFiltersService };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(QuickFiltersService, [{
        type: Injectable
    }], function () { return [{ type: i1.SystemConfigStore }, { type: i2.ScreenSizeObserverService }, { type: i3.ListViewStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2stZmlsdGVycy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3ZpZXdzL2xpc3Qvc2VydmljZXMvcXVpY2stZmlsdGVycy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBR3pDLE9BQU8sRUFBd0MsTUFBTSxFQUFTLE1BQU0sUUFBUSxDQUFDO0FBQzdFLE9BQU8sRUFBQyxlQUFlLEVBQTJCLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFDSCxVQUFVLEVBRWIsTUFBTSx3RUFBd0UsQ0FBQztBQUVoRixPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBRW5DLE1BQ2EsbUJBQW1CO0lBZ0JkO0lBQ0E7SUFDQTtJQWhCSix1QkFBdUIsR0FBRyxJQUFJLGVBQWUsQ0FBdUIsRUFBQyxPQUFPLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQztJQUNuRixZQUFZLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7SUFDbkQsTUFBTSxHQUFlLFVBQVUsQ0FBQyxNQUFNLENBQUM7SUFDdkMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLFVBQVUsQ0FBUztJQUNuQixjQUFjLEdBQWEsRUFBRSxDQUFDO0lBQzlCLElBQUksR0FBbUIsRUFBRSxDQUFDO0lBRTdCLE9BQU8sR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEQsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDNUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUNoQixVQUFVLENBQXNCO0lBRXZDLFlBQ2MsaUJBQW9DLEVBQ3BDLFVBQXFDLEVBQ3JD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QUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBRUQsYUFBYTtRQUNULE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUU5RSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksYUFBYSxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDNUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUMxQjtRQUVELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDMUI7UUFFRCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNsQyxDQUFDO0lBRUQsZ0JBQWdCO1FBQ1osTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBRXZFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQzVCLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBRUQsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQztJQUNuRCxDQUFDOzZFQXhJUSxtQkFBbUI7Z0VBQW5CLG1CQUFtQixXQUFuQixtQkFBbUI7O1NBQW5CLG1CQUFtQjt1RkFBbkIsbUJBQW1CO2NBRC9CLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMyBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7U2F2ZWRGaWx0ZXJ9IGZyb20gXCIuLi8uLi8uLi9zdG9yZS9zYXZlZC1maWx0ZXJzL3NhdmVkLWZpbHRlci5tb2RlbFwiO1xuaW1wb3J0IHtMaXN0Vmlld1N0b3JlfSBmcm9tIFwiLi4vc3RvcmUvbGlzdC12aWV3L2xpc3Qtdmlldy5zdG9yZVwiO1xuaW1wb3J0IHtCdXR0b25Hcm91cEludGVyZmFjZSwgQnV0dG9uSW50ZXJmYWNlLCBpc1RydWUsIGlzVm9pZH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge1xuICAgIFNjcmVlblNpemUsXG4gICAgU2NyZWVuU2l6ZU9ic2VydmVyU2VydmljZVxufSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvdWkvc2NyZWVuLXNpemUtb2JzZXJ2ZXIvc2NyZWVuLXNpemUtb2JzZXJ2ZXIuc2VydmljZVwiO1xuaW1wb3J0IHtTeXN0ZW1Db25maWdTdG9yZX0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlL3N5c3RlbS1jb25maWcvc3lzdGVtLWNvbmZpZy5zdG9yZVwiO1xuaW1wb3J0IHttYXB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUXVpY2tGaWx0ZXJzU2VydmljZSB7XG5cbiAgICBwcm90ZWN0ZWQgcXVpY2tGaWx0ZXJzQ29uZmlnU3RhdGUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEJ1dHRvbkdyb3VwSW50ZXJmYWNlPih7YnV0dG9uczogW119KTtcbiAgICBwcm90ZWN0ZWQgZW5hYmxlZFN0YXRlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG4gICAgcHJvdGVjdGVkIHNjcmVlbjogU2NyZWVuU2l6ZSA9IFNjcmVlblNpemUuTWVkaXVtO1xuICAgIHByb3RlY3RlZCBkZWZhdWx0QnJlYWtwb2ludCA9IDU7XG4gICAgcHJvdGVjdGVkIGJyZWFrcG9pbnQ6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgYnJlYWtkb3duU2l6ZXM6IHN0cmluZ1tdID0gW107XG4gICAgcHJvdGVjdGVkIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBwdWJsaWMgY29uZmlnJCA9IHRoaXMucXVpY2tGaWx0ZXJzQ29uZmlnU3RhdGUuYXNPYnNlcnZhYmxlKCk7XG4gICAgcHVibGljIGVuYWJsZWQkID0gdGhpcy5lbmFibGVkU3RhdGUuYXNPYnNlcnZhYmxlKCk7XG4gICAgcHVibGljIGVuYWJsZWQgPSBmYWxzZTtcbiAgICBwdWJsaWMgYnJlYWtkb3duJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIHN5c3RlbUNvbmZpZ1N0b3JlOiBTeXN0ZW1Db25maWdTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHNjcmVlblNpemU6IFNjcmVlblNpemVPYnNlcnZlclNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBzdG9yZTogTGlzdFZpZXdTdG9yZVxuICAgICkge1xuICAgICAgICB0aGlzLmJyZWFrZG93blNpemVzID0gdGhpcy5zeXN0ZW1Db25maWdTdG9yZS5nZXRVaSgncXVpY2tfZmlsdGVyc19icmVha2Rvd25fc2NyZWVuX3NpemVzJyk7XG5cbiAgICAgICAgY29uc3QgZGlzcGxheWVkUXVpY2tGaWx0ZXJzICA9IHRoaXMuc3lzdGVtQ29uZmlnU3RvcmUuZ2V0VWkoJ2Rpc3BsYXllZF9xdWlja19maWx0ZXJzJyk7XG5cbiAgICAgICAgY29uc3QgcXVpY2tGaWx0ZXJzQnJlYWtkb3duVGhyZXNob2xkcyAgPSB0aGlzLnN5c3RlbUNvbmZpZ1N0b3JlLmdldFVpKCdxdWlja19maWx0ZXJzX2JyZWFrZG93bl90aHJlc2hvbGQnKTtcblxuICAgICAgICB0aGlzLmJyZWFrZG93biQgPSB0aGlzLnNjcmVlblNpemUuc2NyZWVuU2l6ZSQucGlwZShtYXAoc2NyZWVuU2l6ZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBxdWlja0ZpbHRlcnNCcmVha3BvaW50ID0gZGlzcGxheWVkUXVpY2tGaWx0ZXJzW3NjcmVlblNpemVdID8/IDI7XG4gICAgICAgICAgICBjb25zdCBtYXhRdWlja0ZpbHRlcnNGb3JEaXNwbGF5ID0gcXVpY2tGaWx0ZXJzQnJlYWtkb3duVGhyZXNob2xkc1tzY3JlZW5TaXplXSA/PyAyO1xuXG4gICAgICAgICAgICBpZiAocXVpY2tGaWx0ZXJzQnJlYWtwb2ludCA+IG1heFF1aWNrRmlsdGVyc0ZvckRpc3BsYXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGlzVHJ1ZSh0aGlzLmJyZWFrZG93blNpemVzW3NjcmVlblNpemVdID8/IGZhbHNlKTtcbiAgICAgICAgfSkpXG5cbiAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5zY3JlZW5TaXplLnNjcmVlblNpemUkLnN1YnNjcmliZShjdXJyZW50U2NyZWVuU2l6ZSA9PiB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFNjcmVlblNpemUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcmVlbiA9IGN1cnJlbnRTY3JlZW5TaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBpbml0KCk6IHZvaWQge1xuICAgICAgICBsZXQgZmlsdGVycyA9IHRoaXMuc3RvcmUuZmlsdGVyTGlzdC5nZXRGaWx0ZXJzKCkgPz8gW107XG4gICAgICAgIGZpbHRlcnMgPSBmaWx0ZXJzLmZpbHRlcihmaWx0ZXIgPT4gZmlsdGVyPy5hdHRyaWJ1dGVzPy5xdWlja19maWx0ZXIgPz8gZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRoaXMuYXJlQ29uZmlnRW5hYmxlZCgpO1xuICAgICAgICBpZiAoIWZpbHRlcnMgfHwgZmlsdGVycy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlZFN0YXRlLm5leHQoZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW5hYmxlZFN0YXRlLm5leHQodGhpcy5lbmFibGVkKTtcblxuICAgICAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgICAgICBidXR0b25LbGFzczogWydzZXR0aW5ncy1idXR0b24gYnRuIGJ0bi1vdXRsaW5lLW1haW4nXSxcbiAgICAgICAgICAgIGRyb3Bkb3duTGFiZWw6IHRoaXMuc3RvcmUuYXBwU3RyaW5ncy5MQkxfUVVJQ0tfRklMVEVSUyB8fCAnJyxcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IHRoaXMuZ2V0QnJlYWtwb2ludCgpLFxuICAgICAgICAgICAgc2hvd0FmdGVyQnJlYWtwb2ludDogZmFsc2UsXG4gICAgICAgICAgICBkcm9wZG93bk9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnQ6IFsnYm90dG9tLXJpZ2h0J10sXG4gICAgICAgICAgICAgICAgd3JhcHBlcktsYXNzOiBbJ2Ryb3Bkb3duLWJ1dHRvbi1zZWNvbmRhcnknLCAnZmlsdGVyLWFjdGlvbi1ncm91cCddXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnV0dG9uczogW11cbiAgICAgICAgfSBhcyBCdXR0b25Hcm91cEludGVyZmFjZTtcblxuICAgICAgICBjb25zdCBhY3RpdmVGaWx0ZXJzID0gdGhpcy5zdG9yZS5hY3RpdmVGaWx0ZXJzO1xuXG4gICAgICAgIGxldCBhbnlBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgZmlsdGVycy5mb3JFYWNoKChmaWx0ZXI6IFNhdmVkRmlsdGVyKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGlzUXVpY2tGaWx0ZXIgPSBmaWx0ZXI/LmF0dHJpYnV0ZXM/LnF1aWNrX2ZpbHRlciA/PyBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKCFpc1F1aWNrRmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IE9iamVjdC5rZXlzKGFjdGl2ZUZpbHRlcnMpLnNvbWUoa2V5ID0+IGtleSA9PT0gZmlsdGVyLmtleSk7XG4gICAgICAgICAgICBhbnlBY3RpdmUgPSBhbnlBY3RpdmUgfHwgaXNBY3RpdmU7XG5cbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogZmlsdGVyLmF0dHJpYnV0ZXMubmFtZSxcbiAgICAgICAgICAgICAgICB0aXRsZTogZmlsdGVyLmF0dHJpYnV0ZXMubmFtZSxcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUudG9nZ2xlUXVpY2tGaWx0ZXIoZmlsdGVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGFzIEJ1dHRvbkludGVyZmFjZTtcblxuXG4gICAgICAgICAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBidXR0b24ua2xhc3MgPSBbJ2FjdGl2ZSddO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25maWcuYnV0dG9ucy5wdXNoKGJ1dHRvbik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChhbnlBY3RpdmUpIHtcbiAgICAgICAgICAgIGNvbmZpZy5kcm9wZG93bk9wdGlvbnMua2xhc3MgPSBbJ2FjdGl2ZSddO1xuICAgICAgICAgICAgY29uZmlnLmRyb3Bkb3duT3B0aW9ucy5pY29uID0gJ2ZpbHRlcic7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnF1aWNrRmlsdGVyc0NvbmZpZ1N0YXRlLm5leHQoY29uZmlnKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkgOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgICAgICAgdGhpcy5zdWJzID0gW107XG4gICAgICAgIHRoaXMucXVpY2tGaWx0ZXJzQ29uZmlnU3RhdGUudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBnZXRCcmVha3BvaW50KCk6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IGJyZWFrcG9pbnRNYXAgPSB0aGlzLnN5c3RlbUNvbmZpZ1N0b3JlLmdldFVpKCdkaXNwbGF5ZWRfcXVpY2tfZmlsdGVycycpO1xuXG4gICAgICAgIGlmICh0aGlzLnNjcmVlbiAmJiBicmVha3BvaW50TWFwICYmIGJyZWFrcG9pbnRNYXBbdGhpcy5zY3JlZW5dKSB7XG4gICAgICAgICAgICB0aGlzLmJyZWFrcG9pbnQgPSBicmVha3BvaW50TWFwW3RoaXMuc2NyZWVuXTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJyZWFrcG9pbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5icmVha3BvaW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5icmVha3BvaW50O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdEJyZWFrcG9pbnQ7XG4gICAgfVxuXG4gICAgYXJlQ29uZmlnRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgZW5hYmxlTWFwID0gdGhpcy5zeXN0ZW1Db25maWdTdG9yZS5nZXRVaSgnZW5hYmxlX3F1aWNrX2ZpbHRlcnMnKTtcblxuICAgICAgICBpZiAoIXRoaXMuc2NyZWVuIHx8ICFlbmFibGVNYXApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpc1RydWUoZW5hYmxlTWFwW3RoaXMuc2NyZWVuXSA/PyBmYWxzZSk7XG4gICAgfVxuXG59XG4iXX0=