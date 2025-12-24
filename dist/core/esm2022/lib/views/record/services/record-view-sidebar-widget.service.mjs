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
import { map } from "rxjs/operators";
import * as i0 from "@angular/core";
import * as i1 from "../../../store/system-config/system-config.store";
import * as i2 from "../../../services/ui/screen-size-observer/screen-size-observer.service";
import * as i3 from "../store/record-view/record-view.store";
class RecordViewSidebarWidgetService {
    systemConfigStore;
    screenSize;
    store;
    swapSizes = [];
    subs = [];
    widgetSwap;
    widgetSwap$;
    constructor(systemConfigStore, screenSize, store) {
        this.systemConfigStore = systemConfigStore;
        this.screenSize = screenSize;
        this.store = store;
        this.swapSizes = this.systemConfigStore.getUi('widget_swap_screen_sizes');
        this.widgetSwap$ = this.screenSize.screenSize$.pipe(map(screenSize => {
            const swap = isTrue(this.swapSizes[screenSize] ?? false);
            if ((this.widgetSwap === null && swap === true) || (this.widgetSwap !== swap && swap === true)) {
                this.store.showSidebarWidgets = false;
            }
            this.widgetSwap = swap;
            return swap;
        }));
    }
    destroy() {
        this.subs.forEach(sub => sub.unsubscribe());
        this.subs = [];
    }
    static ɵfac = function RecordViewSidebarWidgetService_Factory(t) { return new (t || RecordViewSidebarWidgetService)(i0.ɵɵinject(i1.SystemConfigStore), i0.ɵɵinject(i2.ScreenSizeObserverService), i0.ɵɵinject(i3.RecordViewStore)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordViewSidebarWidgetService, factory: RecordViewSidebarWidgetService.ɵfac });
}
export { RecordViewSidebarWidgetService };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordViewSidebarWidgetService, [{
        type: Injectable
    }], function () { return [{ type: i1.SystemConfigStore }, { type: i2.ScreenSizeObserverService }, { type: i3.RecordViewStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLXZpZXctc2lkZWJhci13aWRnZXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi92aWV3cy9yZWNvcmQvc2VydmljZXMvcmVjb3JkLXZpZXctc2lkZWJhci13aWRnZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sUUFBUSxDQUFDO0FBSTlCLE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFHbkMsTUFDYSw4QkFBOEI7SUFVekI7SUFDQTtJQUNBO0lBVkosU0FBUyxHQUFhLEVBQUUsQ0FBQztJQUN6QixJQUFJLEdBQW1CLEVBQUUsQ0FBQztJQUMxQixVQUFVLENBQVc7SUFFeEIsV0FBVyxDQUFzQjtJQUd4QyxZQUNjLGlCQUFvQyxFQUNwQyxVQUFxQyxFQUNyQyxLQUFzQjtRQUZ0QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGVBQVUsR0FBVixVQUFVLENBQTJCO1FBQ3JDLFVBQUssR0FBTCxLQUFLLENBQWlCO1FBRWhDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBRTFFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNqRSxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO2dCQUM1RixJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQzthQUN6QztZQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDUCxDQUFDO0lBRUQsT0FBTztRQUNILElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFDbkIsQ0FBQzt3RkE3QlEsOEJBQThCO2dFQUE5Qiw4QkFBOEIsV0FBOUIsOEJBQThCOztTQUE5Qiw4QkFBOEI7dUZBQTlCLDhCQUE4QjtjQUQxQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjMgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge2lzVHJ1ZX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtTY3JlZW5TaXplT2JzZXJ2ZXJTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvdWkvc2NyZWVuLXNpemUtb2JzZXJ2ZXIvc2NyZWVuLXNpemUtb2JzZXJ2ZXIuc2VydmljZVwiO1xuaW1wb3J0IHtTeXN0ZW1Db25maWdTdG9yZX0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlL3N5c3RlbS1jb25maWcvc3lzdGVtLWNvbmZpZy5zdG9yZVwiO1xuaW1wb3J0IHttYXB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHtSZWNvcmRWaWV3U3RvcmV9IGZyb20gXCIuLi9zdG9yZS9yZWNvcmQtdmlldy9yZWNvcmQtdmlldy5zdG9yZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVjb3JkVmlld1NpZGViYXJXaWRnZXRTZXJ2aWNlIHtcblxuICAgIHByb3RlY3RlZCBzd2FwU2l6ZXM6IHN0cmluZ1tdID0gW107XG4gICAgcHJvdGVjdGVkIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gICAgcHJvdGVjdGVkIHdpZGdldFN3YXA/OiBib29sZWFuO1xuXG4gICAgcHVibGljIHdpZGdldFN3YXAkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBzeXN0ZW1Db25maWdTdG9yZTogU3lzdGVtQ29uZmlnU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBzY3JlZW5TaXplOiBTY3JlZW5TaXplT2JzZXJ2ZXJTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgc3RvcmU6IFJlY29yZFZpZXdTdG9yZVxuICAgICkge1xuICAgICAgICB0aGlzLnN3YXBTaXplcyA9IHRoaXMuc3lzdGVtQ29uZmlnU3RvcmUuZ2V0VWkoJ3dpZGdldF9zd2FwX3NjcmVlbl9zaXplcycpO1xuXG4gICAgICAgIHRoaXMud2lkZ2V0U3dhcCQgPSB0aGlzLnNjcmVlblNpemUuc2NyZWVuU2l6ZSQucGlwZShtYXAoc2NyZWVuU2l6ZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzd2FwID0gaXNUcnVlKHRoaXMuc3dhcFNpemVzW3NjcmVlblNpemVdID8/IGZhbHNlKTtcbiAgICAgICAgICAgIGlmICgodGhpcy53aWRnZXRTd2FwID09PSBudWxsICYmIHN3YXAgPT09IHRydWUpIHx8ICh0aGlzLndpZGdldFN3YXAgIT09IHN3YXAgJiYgc3dhcCA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLnNob3dTaWRlYmFyV2lkZ2V0cyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy53aWRnZXRTd2FwID0gc3dhcDtcbiAgICAgICAgICAgIHJldHVybiBzd2FwO1xuICAgICAgICB9KSlcbiAgICB9XG5cbiAgICBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICAgICAgICB0aGlzLnN1YnMgPSBbXTtcbiAgICB9XG59XG4iXX0=