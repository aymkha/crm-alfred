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
import { Component } from '@angular/core';
import { ListViewStore } from '../../store/list-view/list-view.store';
import { QuickFiltersService } from "../../services/quick-filters.service";
import { ListViewSidebarWidgetService } from "../../services/list-view-sidebar-widget.service";
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/app-state/app-state.store";
import * as i2 from "../../store/list-view/list-view.store";
import * as i3 from "../../services/quick-filters.service";
import * as i4 from "../../services/list-view-sidebar-widget.service";
import * as i5 from "@angular/common";
import * as i6 from "../list-header/list-header.component";
import * as i7 from "../list-container/list-container.component";
function ListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelement(1, "scrm-list-header")(2, "scrm-list-container");
    i0.ɵɵelementEnd();
} }
class ListComponent {
    appState;
    listStore;
    quickFilters;
    sidebarWidgetHandler;
    listSub;
    vm$ = null;
    constructor(appState, listStore, quickFilters, sidebarWidgetHandler) {
        this.appState = appState;
        this.listStore = listStore;
        this.quickFilters = quickFilters;
        this.sidebarWidgetHandler = sidebarWidgetHandler;
    }
    ngOnInit() {
        this.listSub = this.listStore.init(this.appState.getModule()).subscribe();
        this.vm$ = this.listStore.vm$;
    }
    ngOnDestroy() {
        if (this.listSub) {
            this.listSub.unsubscribe();
        }
        this.quickFilters.destroy();
        this.sidebarWidgetHandler.destroy();
        this.listStore.destroy();
    }
    static ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(i0.ɵɵdirectiveInject(i1.AppStateStore), i0.ɵɵdirectiveInject(i2.ListViewStore), i0.ɵɵdirectiveInject(i3.QuickFiltersService), i0.ɵɵdirectiveInject(i4.ListViewSidebarWidgetService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ListComponent, selectors: [["scrm-list"]], features: [i0.ɵɵProvidersFeature([ListViewStore, QuickFiltersService, ListViewSidebarWidgetService])], decls: 2, vars: 3, consts: [["class", "list-view", 4, "ngIf"], [1, "list-view"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ListComponent_div_0_Template, 3, 0, "div", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.vm$));
        } }, dependencies: [i5.NgIf, i6.ListHeaderComponent, i7.ListContainerComponent, i5.AsyncPipe], encapsulation: 2 });
}
export { ListComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListComponent, [{
        type: Component,
        args: [{ selector: 'scrm-list', providers: [ListViewStore, QuickFiltersService, ListViewSidebarWidgetService], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<!-- Start List View Section -->\n<div class=\"list-view\" *ngIf=\"(vm$ | async) as vm\">\n    <scrm-list-header></scrm-list-header>\n    <scrm-list-container></scrm-list-container>\n</div>\n<!-- End List View Section -->\n" }]
    }], function () { return [{ type: i1.AppStateStore }, { type: i2.ListViewStore }, { type: i3.QuickFiltersService }, { type: i4.ListViewSidebarWidgetService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvbGlzdC9jb21wb25lbnRzL2xpc3Qtdmlldy9saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi92aWV3cy9saXN0L2NvbXBvbmVudHMvbGlzdC12aWV3L2xpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBRTNELE9BQU8sRUFBZ0IsYUFBYSxFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFFbkYsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDekUsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0saURBQWlELENBQUM7Ozs7Ozs7Ozs7SUNIN0YsOEJBQW1EO0lBQy9DLG1DQUFxQywwQkFBQTtJQUV6QyxpQkFBTTs7QURFTixNQU1hLGFBQWE7SUFNUjtJQUNBO0lBQ0E7SUFDQTtJQVJkLE9BQU8sQ0FBZTtJQUV0QixHQUFHLEdBQThCLElBQUksQ0FBQztJQUV0QyxZQUNjLFFBQXVCLEVBQ3ZCLFNBQXdCLEVBQ3hCLFlBQWlDLEVBQ2pDLG9CQUFrRDtRQUhsRCxhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLGNBQVMsR0FBVCxTQUFTLENBQWU7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQ2pDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBOEI7SUFHaEUsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMxRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUM5QjtRQUVELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRXBDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDN0IsQ0FBQzt1RUE1QlEsYUFBYTs2REFBYixhQUFhLCtEQUZYLENBQUMsYUFBYSxFQUFFLG1CQUFtQixFQUFFLDRCQUE0QixDQUFDO1lDVGpGLDhEQUdNOzs7WUFIa0Isb0RBQW9COzs7U0RXL0IsYUFBYTt1RkFBYixhQUFhO2NBTnpCLFNBQVM7MkJBQ0ksV0FBVyxhQUdWLENBQUMsYUFBYSxFQUFFLG1CQUFtQixFQUFFLDRCQUE0QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtMaXN0Vmlld01vZGVsLCBMaXN0Vmlld1N0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9saXN0LXZpZXcvbGlzdC12aWV3LnN0b3JlJztcbmltcG9ydCB7QXBwU3RhdGVTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvYXBwLXN0YXRlL2FwcC1zdGF0ZS5zdG9yZSc7XG5pbXBvcnQge1F1aWNrRmlsdGVyc1NlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9xdWljay1maWx0ZXJzLnNlcnZpY2VcIjtcbmltcG9ydCB7TGlzdFZpZXdTaWRlYmFyV2lkZ2V0U2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2xpc3Qtdmlldy1zaWRlYmFyLXdpZGdldC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1saXN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXSxcbiAgICBwcm92aWRlcnM6IFtMaXN0Vmlld1N0b3JlLCBRdWlja0ZpbHRlcnNTZXJ2aWNlLCBMaXN0Vmlld1NpZGViYXJXaWRnZXRTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIGxpc3RTdWI6IFN1YnNjcmlwdGlvbjtcblxuICAgIHZtJDogT2JzZXJ2YWJsZTxMaXN0Vmlld01vZGVsPiA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGFwcFN0YXRlOiBBcHBTdGF0ZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbGlzdFN0b3JlOiBMaXN0Vmlld1N0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgcXVpY2tGaWx0ZXJzOiBRdWlja0ZpbHRlcnNTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgc2lkZWJhcldpZGdldEhhbmRsZXI6IExpc3RWaWV3U2lkZWJhcldpZGdldFNlcnZpY2VcbiAgICApIHtcblxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmxpc3RTdWIgPSB0aGlzLmxpc3RTdG9yZS5pbml0KHRoaXMuYXBwU3RhdGUuZ2V0TW9kdWxlKCkpLnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLnZtJCA9IHRoaXMubGlzdFN0b3JlLnZtJDtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubGlzdFN1Yikge1xuICAgICAgICAgICAgdGhpcy5saXN0U3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnF1aWNrRmlsdGVycy5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuc2lkZWJhcldpZGdldEhhbmRsZXIuZGVzdHJveSgpO1xuXG4gICAgICAgIHRoaXMubGlzdFN0b3JlLmRlc3Ryb3koKTtcbiAgICB9XG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48IS0tIFN0YXJ0IExpc3QgVmlldyBTZWN0aW9uIC0tPlxuPGRpdiBjbGFzcz1cImxpc3Qtdmlld1wiICpuZ0lmPVwiKHZtJCB8IGFzeW5jKSBhcyB2bVwiPlxuICAgIDxzY3JtLWxpc3QtaGVhZGVyPjwvc2NybS1saXN0LWhlYWRlcj5cbiAgICA8c2NybS1saXN0LWNvbnRhaW5lcj48L3Njcm0tbGlzdC1jb250YWluZXI+XG48L2Rpdj5cbjwhLS0gRW5kIExpc3QgVmlldyBTZWN0aW9uIC0tPlxuIl19