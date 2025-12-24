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
import * as i0 from "@angular/core";
import * as i1 from "../../views/record/store/record-view/record-view.store";
import * as i2 from "../../services/navigation/module-navigation/module-navigation.service";
import * as i3 from "@angular/common";
function StatusBarComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 3)(2, "div", 4);
    i0.ɵɵelement(3, "div", 5);
    i0.ɵɵelementStart(4, "div", 6)(5, "div", 7)(6, "div");
    i0.ɵɵtext(7, "Record Status Bar Component");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementContainerEnd();
} }
function StatusBarComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8)(1, "div", 9)(2, "div");
    i0.ɵɵtext(3, "Record Status Bar Component");
    i0.ɵɵelementEnd()()();
} }
class StatusBarComponent {
    recordViewStore;
    moduleNavigation;
    displayResponsiveTable = false;
    constructor(recordViewStore, moduleNavigation) {
        this.recordViewStore = recordViewStore;
        this.moduleNavigation = moduleNavigation;
    }
    static ɵfac = function StatusBarComponent_Factory(t) { return new (t || StatusBarComponent)(i0.ɵɵdirectiveInject(i1.RecordViewStore), i0.ɵɵdirectiveInject(i2.ModuleNavigation)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StatusBarComponent, selectors: [["scrm-status-bar"]], decls: 4, vars: 2, consts: [[1, "record-view-header"], [4, "ngIf"], [3, "ngIf"], [1, "d-flex", "flex-nowrap"], [1, "row"], [1, "w-100"], [1, "col"], [1, "order-2"], [1, "row", "mr-0"], [1, "col-md-4"]], template: function StatusBarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 0);
            i0.ɵɵtemplate(2, StatusBarComponent_ng_container_2_Template, 8, 0, "ng-container", 1);
            i0.ɵɵtemplate(3, StatusBarComponent_ng_template_3_Template, 4, 0, "ng-template", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.displayResponsiveTable);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.displayResponsiveTable);
        } }, dependencies: [i3.NgIf], encapsulation: 2 });
}
export { StatusBarComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StatusBarComponent, [{
        type: Component,
        args: [{ selector: 'scrm-status-bar', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container>\n    <div class=\"record-view-header\">\n        <ng-container *ngIf=\"displayResponsiveTable\">\n            <div class=\"d-flex flex-nowrap\">\n                <div class=\"row\">\n                    <div class=\"w-100\"></div>\n                    <div class=\"col\">\n                        <div class=\"order-2\">\n                            <div>Record Status Bar Component</div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </ng-container>\n        <ng-template [ngIf]=\"!displayResponsiveTable\">\n            <div class=\"row mr-0\">\n                <div class=\"col-md-4\">\n                    <div>Record Status Bar Component</div>\n                </div>\n            </div>\n        </ng-template>\n    </div>\n</ng-container>\n" }]
    }], function () { return [{ type: i1.RecordViewStore }, { type: i2.ModuleNavigation }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9zdGF0dXMtYmFyL3N0YXR1cy1iYXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvc3RhdHVzLWJhci9zdGF0dXMtYmFyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7SUNHaEMsNkJBQTZDO0lBQ3pDLDhCQUFnQyxhQUFBO0lBRXhCLHlCQUF5QjtJQUN6Qiw4QkFBaUIsYUFBQSxVQUFBO0lBRUosMkNBQTJCO0lBQUEsaUJBQU0sRUFBQSxFQUFBLEVBQUEsRUFBQTtJQUsxRCwwQkFBZTs7O0lBRVgsOEJBQXNCLGFBQUEsVUFBQTtJQUVULDJDQUEyQjtJQUFBLGlCQUFNLEVBQUEsRUFBQTs7QURkMUQsTUFJYSxrQkFBa0I7SUFJTDtJQUE0QztJQUZsRSxzQkFBc0IsR0FBRyxLQUFLLENBQUM7SUFFL0IsWUFBc0IsZUFBZ0MsRUFBWSxnQkFBa0M7UUFBOUUsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVkscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUNwRyxDQUFDOzRFQUxRLGtCQUFrQjs2REFBbEIsa0JBQWtCO1lDUC9CLDZCQUFjO1lBQ1YsOEJBQWdDO1lBQzVCLHFGQVdlO1lBQ2YsbUZBTWM7WUFDbEIsaUJBQU07WUFDViwwQkFBZTs7WUFwQlEsZUFBNEI7WUFBNUIsaURBQTRCO1lBWTlCLGVBQWdDO1lBQWhDLGtEQUFnQzs7O1NEUHhDLGtCQUFrQjt1RkFBbEIsa0JBQWtCO2NBSjlCLFNBQVM7MkJBQ0ksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JlY29yZFZpZXdTdG9yZX0gZnJvbSAnLi4vLi4vdmlld3MvcmVjb3JkL3N0b3JlL3JlY29yZC12aWV3L3JlY29yZC12aWV3LnN0b3JlJztcbmltcG9ydCB7TW9kdWxlTmF2aWdhdGlvbn0gZnJvbSAnLi4vLi4vc2VydmljZXMvbmF2aWdhdGlvbi9tb2R1bGUtbmF2aWdhdGlvbi9tb2R1bGUtbmF2aWdhdGlvbi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLXN0YXR1cy1iYXInLFxuICAgIHRlbXBsYXRlVXJsOiAnc3RhdHVzLWJhci5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFN0YXR1c0JhckNvbXBvbmVudCB7XG5cbiAgICBkaXNwbGF5UmVzcG9uc2l2ZVRhYmxlID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcmVjb3JkVmlld1N0b3JlOiBSZWNvcmRWaWV3U3RvcmUsIHByb3RlY3RlZCBtb2R1bGVOYXZpZ2F0aW9uOiBNb2R1bGVOYXZpZ2F0aW9uKSB7XG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPG5nLWNvbnRhaW5lcj5cbiAgICA8ZGl2IGNsYXNzPVwicmVjb3JkLXZpZXctaGVhZGVyXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJkaXNwbGF5UmVzcG9uc2l2ZVRhYmxlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtbm93cmFwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xMDBcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlJlY29yZCBTdGF0dXMgQmFyIENvbXBvbmVudDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwiIWRpc3BsYXlSZXNwb25zaXZlVGFibGVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbXItMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlJlY29yZCBTdGF0dXMgQmFyIENvbXBvbmVudDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9kaXY+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==