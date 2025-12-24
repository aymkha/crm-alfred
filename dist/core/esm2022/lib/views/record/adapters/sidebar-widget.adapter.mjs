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
import { combineLatestWith } from 'rxjs';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../store/record-view/record-view.store";
import * as i2 from "../../../store/metadata/metadata.store.service";
class SidebarWidgetAdapter {
    store;
    metadata;
    config$ = this.metadata.recordViewMetadata$.pipe(combineLatestWith(this.store.showSidebarWidgets$), map(([metadata, show]) => {
        if (metadata.sidebarWidgets && metadata.sidebarWidgets.length) {
            metadata.sidebarWidgets.forEach(widget => {
                if (widget && widget.refreshOn === 'data-update') {
                    widget.reload$ = this.store.record$.pipe(map(() => true));
                }
                if (widget) {
                    widget.subpanelReload$ = this.store.subpanelReload$;
                }
            });
        }
        return {
            widgets: metadata.sidebarWidgets || [],
            show
        };
    }));
    constructor(store, metadata) {
        this.store = store;
        this.metadata = metadata;
    }
    static ɵfac = function SidebarWidgetAdapter_Factory(t) { return new (t || SidebarWidgetAdapter)(i0.ɵɵinject(i1.RecordViewStore), i0.ɵɵinject(i2.MetadataStore)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SidebarWidgetAdapter, factory: SidebarWidgetAdapter.ɵfac });
}
export { SidebarWidgetAdapter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SidebarWidgetAdapter, [{
        type: Injectable
    }], function () { return [{ type: i1.RecordViewStore }, { type: i2.MetadataStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci13aWRnZXQuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi92aWV3cy9yZWNvcmQvYWRhcHRlcnMvc2lkZWJhci13aWRnZXQuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7O0FBSW5DLE1BQ2Esb0JBQW9CO0lBMEJmO0lBQ0E7SUF6QmQsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUM1QyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLEVBQ2pELEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBZ0MsRUFBRSxFQUFFO1FBRXBELElBQUksUUFBUSxDQUFDLGNBQWMsSUFBSSxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRTtZQUMzRCxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDckMsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLFNBQVMsS0FBSyxhQUFhLEVBQUU7b0JBQzlDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUM3RDtnQkFFRCxJQUFJLE1BQU0sRUFBRTtvQkFDUixNQUFNLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO2lCQUN2RDtZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ047UUFFRCxPQUFPO1lBQ0gsT0FBTyxFQUFFLFFBQVEsQ0FBQyxjQUFjLElBQUksRUFBRTtZQUN0QyxJQUFJO1NBQ1AsQ0FBQztJQUNOLENBQUMsQ0FBQyxDQUNMLENBQUM7SUFFRixZQUNjLEtBQXNCLEVBQ3RCLFFBQXVCO1FBRHZCLFVBQUssR0FBTCxLQUFLLENBQWlCO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQWU7SUFFckMsQ0FBQzs4RUE3QlEsb0JBQW9CO2dFQUFwQixvQkFBb0IsV0FBcEIsb0JBQW9COztTQUFwQixvQkFBb0I7dUZBQXBCLG9CQUFvQjtjQURoQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtjb21iaW5lTGF0ZXN0V2l0aH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtNZXRhZGF0YVN0b3JlLCBSZWNvcmRWaWV3TWV0YWRhdGF9IGZyb20gJy4uLy4uLy4uL3N0b3JlL21ldGFkYXRhL21ldGFkYXRhLnN0b3JlLnNlcnZpY2UnO1xuaW1wb3J0IHtSZWNvcmRWaWV3U3RvcmV9IGZyb20gJy4uL3N0b3JlL3JlY29yZC12aWV3L3JlY29yZC12aWV3LnN0b3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNpZGViYXJXaWRnZXRBZGFwdGVyIHtcblxuICAgIGNvbmZpZyQgPSB0aGlzLm1ldGFkYXRhLnJlY29yZFZpZXdNZXRhZGF0YSQucGlwZShcbiAgICAgICAgY29tYmluZUxhdGVzdFdpdGgodGhpcy5zdG9yZS5zaG93U2lkZWJhcldpZGdldHMkKSxcbiAgICAgICAgbWFwKChbbWV0YWRhdGEsIHNob3ddOiBbUmVjb3JkVmlld01ldGFkYXRhLCBib29sZWFuXSkgPT4ge1xuXG4gICAgICAgICAgICBpZiAobWV0YWRhdGEuc2lkZWJhcldpZGdldHMgJiYgbWV0YWRhdGEuc2lkZWJhcldpZGdldHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbWV0YWRhdGEuc2lkZWJhcldpZGdldHMuZm9yRWFjaCh3aWRnZXQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAod2lkZ2V0ICYmIHdpZGdldC5yZWZyZXNoT24gPT09ICdkYXRhLXVwZGF0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5yZWxvYWQkID0gdGhpcy5zdG9yZS5yZWNvcmQkLnBpcGUobWFwKCgpID0+IHRydWUpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh3aWRnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5zdWJwYW5lbFJlbG9hZCQgPSB0aGlzLnN0b3JlLnN1YnBhbmVsUmVsb2FkJDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHdpZGdldHM6IG1ldGFkYXRhLnNpZGViYXJXaWRnZXRzIHx8IFtdLFxuICAgICAgICAgICAgICAgIHNob3dcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pXG4gICAgKTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgc3RvcmU6IFJlY29yZFZpZXdTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIG1ldGFkYXRhOiBNZXRhZGF0YVN0b3JlXG4gICAgKSB7XG4gICAgfVxuXG59XG4iXX0=