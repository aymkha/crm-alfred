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
import { combineLatestWith, of } from 'rxjs';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../store/list-view/list-view.store";
import * as i2 from "../../../store/metadata/metadata.store.service";
class ListViewSidebarWidgetAdapter {
    store;
    metadata;
    metadata$ = (this.metadata?.listMetadata$ ?? of({ sidebarWidgets: [] }));
    config$ = this.metadata$.pipe(combineLatestWith(this.store?.showSidebarWidgets$ ?? of(false), this.store?.widgets$ ?? of([])), map(([metadata, show, widgetsEnabled]) => {
        if (metadata.sidebarWidgets && metadata.sidebarWidgets.length) {
            metadata.sidebarWidgets.forEach(widget => {
                if (widget && widget.refreshOn === 'data-update') {
                    widget.reload$ = (this.store?.dataSetUpdate$ ?? of(null)).pipe(map(() => true));
                }
                else if (widget && widget.refreshOn === 'data-reload') {
                    widget.reload$ = (this.store?.records$ ?? of([])).pipe(map(() => true));
                }
            });
        }
        return {
            widgets: metadata.sidebarWidgets || [],
            show,
            widgetsEnabled,
        };
    }));
    constructor(store, metadata) {
        this.store = store;
        this.metadata = metadata;
    }
    static ɵfac = function ListViewSidebarWidgetAdapter_Factory(t) { return new (t || ListViewSidebarWidgetAdapter)(i0.ɵɵinject(i1.ListViewStore), i0.ɵɵinject(i2.MetadataStore)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ListViewSidebarWidgetAdapter, factory: ListViewSidebarWidgetAdapter.ɵfac });
}
export { ListViewSidebarWidgetAdapter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListViewSidebarWidgetAdapter, [{
        type: Injectable
    }], function () { return [{ type: i1.ListViewStore }, { type: i2.MetadataStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci13aWRnZXQuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi92aWV3cy9saXN0L2FkYXB0ZXJzL3NpZGViYXItd2lkZ2V0LmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGlCQUFpQixFQUFFLEVBQUUsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFJbkMsTUFDYSw0QkFBNEI7SUFnQ3ZCO0lBQ0E7SUEvQk4sU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxhQUFhLElBQUksRUFBRSxDQUFDLEVBQUMsY0FBYyxFQUFFLEVBQUUsRUFBUSxDQUFDLENBQUMsQ0FBQztJQUV0RixPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQ3pCLGlCQUFpQixDQUNiLElBQUksQ0FBQyxLQUFLLEVBQUUsbUJBQW1CLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUM1QyxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQ2pDLEVBQ0QsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLGNBQWMsQ0FBQyxFQUFFLEVBQUU7UUFFckMsSUFBSSxRQUFRLENBQUMsY0FBYyxJQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFO1lBQzNELFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUVyQyxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsU0FBUyxLQUFLLGFBQWEsRUFBRTtvQkFDOUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsY0FBYyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztpQkFDbkY7cUJBQU0sSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLFNBQVMsS0FBSyxhQUFhLEVBQUU7b0JBQ3JELE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQzNFO1lBRUwsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUVELE9BQU87WUFDSCxPQUFPLEVBQUUsUUFBUSxDQUFDLGNBQWMsSUFBSSxFQUFFO1lBQ3RDLElBQUk7WUFDSixjQUFjO1NBQ2pCLENBQUM7SUFDTixDQUFDLENBQUMsQ0FDTCxDQUFDO0lBRUYsWUFDYyxLQUFvQixFQUNwQixRQUF1QjtRQUR2QixVQUFLLEdBQUwsS0FBSyxDQUFlO1FBQ3BCLGFBQVEsR0FBUixRQUFRLENBQWU7SUFFckMsQ0FBQztzRkFuQ1EsNEJBQTRCO2dFQUE1Qiw0QkFBNEIsV0FBNUIsNEJBQTRCOztTQUE1Qiw0QkFBNEI7dUZBQTVCLDRCQUE0QjtjQUR4QyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtjb21iaW5lTGF0ZXN0V2l0aCwgb2Z9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHttYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7TWV0YWRhdGFTdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvbWV0YWRhdGEvbWV0YWRhdGEuc3RvcmUuc2VydmljZSc7XG5pbXBvcnQge0xpc3RWaWV3U3RvcmV9IGZyb20gJy4uL3N0b3JlL2xpc3Qtdmlldy9saXN0LXZpZXcuc3RvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdTaWRlYmFyV2lkZ2V0QWRhcHRlciB7XG5cbiAgICBwcml2YXRlIG1ldGFkYXRhJCA9ICh0aGlzLm1ldGFkYXRhPy5saXN0TWV0YWRhdGEkID8/IG9mKHtzaWRlYmFyV2lkZ2V0czogW119IGFzIGFueSkpO1xuXG4gICAgY29uZmlnJCA9IHRoaXMubWV0YWRhdGEkLnBpcGUoXG4gICAgICAgIGNvbWJpbmVMYXRlc3RXaXRoKFxuICAgICAgICAgICAgdGhpcy5zdG9yZT8uc2hvd1NpZGViYXJXaWRnZXRzJCA/PyBvZihmYWxzZSksXG4gICAgICAgICAgICB0aGlzLnN0b3JlPy53aWRnZXRzJCA/PyBvZihbXSlcbiAgICAgICAgKSxcbiAgICAgICAgbWFwKChbbWV0YWRhdGEsIHNob3csIHdpZGdldHNFbmFibGVkXSkgPT4ge1xuXG4gICAgICAgICAgICBpZiAobWV0YWRhdGEuc2lkZWJhcldpZGdldHMgJiYgbWV0YWRhdGEuc2lkZWJhcldpZGdldHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbWV0YWRhdGEuc2lkZWJhcldpZGdldHMuZm9yRWFjaCh3aWRnZXQgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh3aWRnZXQgJiYgd2lkZ2V0LnJlZnJlc2hPbiA9PT0gJ2RhdGEtdXBkYXRlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LnJlbG9hZCQgPSAodGhpcy5zdG9yZT8uZGF0YVNldFVwZGF0ZSQgPz8gb2YobnVsbCkpLnBpcGUobWFwKCgpID0+IHRydWUpKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh3aWRnZXQgJiYgd2lkZ2V0LnJlZnJlc2hPbiA9PT0gJ2RhdGEtcmVsb2FkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LnJlbG9hZCQgPSAodGhpcy5zdG9yZT8ucmVjb3JkcyQgPz8gb2YoW10pKS5waXBlKG1hcCgoKSA9PiB0cnVlKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHdpZGdldHM6IG1ldGFkYXRhLnNpZGViYXJXaWRnZXRzIHx8IFtdLFxuICAgICAgICAgICAgICAgIHNob3csXG4gICAgICAgICAgICAgICAgd2lkZ2V0c0VuYWJsZWQsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgICk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIHN0b3JlOiBMaXN0Vmlld1N0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbWV0YWRhdGE6IE1ldGFkYXRhU3RvcmVcbiAgICApIHtcbiAgICB9XG5cbn1cbiJdfQ==