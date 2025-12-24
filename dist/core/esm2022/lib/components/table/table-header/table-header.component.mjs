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
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../pagination/pagination.component";
import * as i3 from "../../bulk-action-menu/bulk-action-menu.component";
import * as i4 from "../../action-group-menu/action-group-menu.component";
function TableHeaderComponent_scrm_bulk_action_menu_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-bulk-action-menu", 6);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("selectionSource", ctx_r0.selection)("actionSource", ctx_r0.bulkActions);
} }
function TableHeaderComponent_scrm_pagination_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-pagination", 7);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("allowPagination", ctx_r1.isPaginationEnabled())("state", ctx_r1.pagination);
} }
class TableHeaderComponent {
    selection;
    bulkActions;
    pagination;
    tableActions;
    paginationType;
    isPaginationEnabled() {
        return this.paginationType === 'pagination';
    }
    static ɵfac = function TableHeaderComponent_Factory(t) { return new (t || TableHeaderComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableHeaderComponent, selectors: [["scrm-table-header"]], inputs: { selection: "selection", bulkActions: "bulkActions", pagination: "pagination", tableActions: "tableActions", paginationType: "paginationType" }, decls: 6, vars: 3, consts: [[1, "list-view-tableactions", "table-header"], [1, "row"], [3, "selectionSource", "actionSource", 4, "ngIf"], ["buttonClass", "btn table-action-button", 3, "config"], [1, "col", "mx-0", "pl-0", "table-pagination-wrapper"], [3, "allowPagination", "state", 4, "ngIf"], [3, "selectionSource", "actionSource"], [3, "allowPagination", "state"]], template: function TableHeaderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵtemplate(2, TableHeaderComponent_scrm_bulk_action_menu_2_Template, 1, 2, "scrm-bulk-action-menu", 2);
            i0.ɵɵelement(3, "scrm-action-group-menu", 3);
            i0.ɵɵelementStart(4, "div", 4);
            i0.ɵɵtemplate(5, TableHeaderComponent_scrm_pagination_5_Template, 1, 2, "scrm-pagination", 5);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.selection && ctx.bulkActions);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("config", ctx.tableActions);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.pagination);
        } }, dependencies: [i1.NgIf, i2.PaginationComponent, i3.BulkActionMenuComponent, i4.ActionGroupMenuComponent], encapsulation: 2 });
}
export { TableHeaderComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableHeaderComponent, [{
        type: Component,
        args: [{ selector: 'scrm-table-header', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<!-- Start List View Table Header Section -->\n\n<div class=\"list-view-tableactions table-header\">\n    <div class=\"row\">\n        <scrm-bulk-action-menu *ngIf=\"selection && bulkActions\"\n                               [selectionSource]=\"selection\"\n                               [actionSource]=\"bulkActions\">\n        </scrm-bulk-action-menu>\n        <scrm-action-group-menu [config]=\"tableActions\" buttonClass=\"btn table-action-button\"></scrm-action-group-menu>\n        <div class=\"col mx-0 pl-0 table-pagination-wrapper\">\n            <scrm-pagination *ngIf=\"pagination\"\n                             [allowPagination]=\"isPaginationEnabled()\"\n                             [state]=\"pagination\">\n            </scrm-pagination>\n        </div>\n    </div>\n</div>\n\n<!-- End List View Table Header Section -->\n" }]
    }], null, { selection: [{
            type: Input
        }], bulkActions: [{
            type: Input
        }], pagination: [{
            type: Input
        }], tableActions: [{
            type: Input
        }], paginationType: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLWhlYWRlci90YWJsZS1oZWFkZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvdGFibGUvdGFibGUtaGVhZGVyL3RhYmxlLWhlYWRlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7SUNLdkMsMkNBR3dCOzs7SUFGRCxrREFBNkIsb0NBQUE7OztJQUtoRCxxQ0FHa0I7OztJQUZELDhEQUF5Qyw0QkFBQTs7QURSdEUsTUFJYSxvQkFBb0I7SUFDcEIsU0FBUyxDQUFzQjtJQUMvQixXQUFXLENBQXVCO0lBQ2xDLFVBQVUsQ0FBdUI7SUFDakMsWUFBWSxDQUFtQjtJQUMvQixjQUFjLENBQVM7SUFHaEMsbUJBQW1CO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxLQUFLLFlBQVksQ0FBQztJQUNoRCxDQUFDOzhFQVZRLG9CQUFvQjs2REFBcEIsb0JBQW9CO1lDTGpDLDhCQUFpRCxhQUFBO1lBRXpDLHlHQUd3QjtZQUN4Qiw0Q0FBK0c7WUFDL0csOEJBQW9EO1lBQ2hELDZGQUdrQjtZQUN0QixpQkFBTSxFQUFBLEVBQUE7O1lBVmtCLGVBQThCO1lBQTlCLHVEQUE4QjtZQUk5QixlQUF1QjtZQUF2Qix5Q0FBdUI7WUFFekIsZUFBZ0I7WUFBaEIscUNBQWdCOzs7U0RIakMsb0JBQW9CO3VGQUFwQixvQkFBb0I7Y0FKaEMsU0FBUzsyQkFDSSxtQkFBbUI7Z0JBSXBCLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxjQUFjO2tCQUF0QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3Rpb25EYXRhU291cmNlLCBQYWdpbmF0aW9uRGF0YVNvdXJjZSwgU2VsZWN0aW9uRGF0YVNvdXJjZX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7QnVsa0FjdGlvbkRhdGFTb3VyY2V9IGZyb20gJy4uLy4uL2J1bGstYWN0aW9uLW1lbnUvYnVsay1hY3Rpb24tbWVudS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tdGFibGUtaGVhZGVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RhYmxlLWhlYWRlci5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlSGVhZGVyQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBzZWxlY3Rpb246IFNlbGVjdGlvbkRhdGFTb3VyY2U7XG4gICAgQElucHV0KCkgYnVsa0FjdGlvbnM6IEJ1bGtBY3Rpb25EYXRhU291cmNlO1xuICAgIEBJbnB1dCgpIHBhZ2luYXRpb246IFBhZ2luYXRpb25EYXRhU291cmNlO1xuICAgIEBJbnB1dCgpIHRhYmxlQWN0aW9uczogQWN0aW9uRGF0YVNvdXJjZTtcbiAgICBASW5wdXQoKSBwYWdpbmF0aW9uVHlwZTogc3RyaW5nO1xuXG5cbiAgICBpc1BhZ2luYXRpb25FbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5wYWdpbmF0aW9uVHlwZSA9PT0gJ3BhZ2luYXRpb24nO1xuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjwhLS0gU3RhcnQgTGlzdCBWaWV3IFRhYmxlIEhlYWRlciBTZWN0aW9uIC0tPlxuXG48ZGl2IGNsYXNzPVwibGlzdC12aWV3LXRhYmxlYWN0aW9ucyB0YWJsZS1oZWFkZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxzY3JtLWJ1bGstYWN0aW9uLW1lbnUgKm5nSWY9XCJzZWxlY3Rpb24gJiYgYnVsa0FjdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzZWxlY3Rpb25Tb3VyY2VdPVwic2VsZWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYWN0aW9uU291cmNlXT1cImJ1bGtBY3Rpb25zXCI+XG4gICAgICAgIDwvc2NybS1idWxrLWFjdGlvbi1tZW51PlxuICAgICAgICA8c2NybS1hY3Rpb24tZ3JvdXAtbWVudSBbY29uZmlnXT1cInRhYmxlQWN0aW9uc1wiIGJ1dHRvbkNsYXNzPVwiYnRuIHRhYmxlLWFjdGlvbi1idXR0b25cIj48L3Njcm0tYWN0aW9uLWdyb3VwLW1lbnU+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgbXgtMCBwbC0wIHRhYmxlLXBhZ2luYXRpb24td3JhcHBlclwiPlxuICAgICAgICAgICAgPHNjcm0tcGFnaW5hdGlvbiAqbmdJZj1cInBhZ2luYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYWxsb3dQYWdpbmF0aW9uXT1cImlzUGFnaW5hdGlvbkVuYWJsZWQoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzdGF0ZV09XCJwYWdpbmF0aW9uXCI+XG4gICAgICAgICAgICA8L3Njcm0tcGFnaW5hdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cblxuPCEtLSBFbmQgTGlzdCBWaWV3IFRhYmxlIEhlYWRlciBTZWN0aW9uIC0tPlxuIl19