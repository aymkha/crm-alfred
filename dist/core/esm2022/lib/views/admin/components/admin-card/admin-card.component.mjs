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
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/language/language.store";
import * as i2 from "@angular/common";
import * as i3 from "@angular/router";
import * as i4 from "../../../../components/label/label.component";
import * as i5 from "../../../../components/image/image.component";
function AdminCardComponent_div_1_ng_container_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9)(1, "a", 10)(2, "div", 11);
    i0.ɵɵelement(3, "scrm-image", 12)(4, "scrm-label", 13);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const isFirst_r4 = ctx.first;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("border-top", isFirst_r4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("queryParams", item_r3 == null ? null : item_r3.params)("routerLink", item_r3.link)("title", ctx_r2.language.getFieldLabel(item_r3.descriptionKey, "administration"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("image", item_r3.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("labelKey", item_r3.titleKey);
} }
function AdminCardComponent_div_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AdminCardComponent_div_1_ng_container_5_div_1_Template, 5, 7, "div", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.content.linkGroup);
} }
function AdminCardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "h5", 4);
    i0.ɵɵelement(3, "scrm-label", 5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 6);
    i0.ɵɵtemplate(5, AdminCardComponent_div_1_ng_container_5_Template, 2, 1, "ng-container", 7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("title", ctx_r0.language.getFieldLabel(ctx_r0.content.descriptionLabelKey, "administration"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("labelKey", ctx_r0.content.titleLabelKey);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.content.linkGroup);
} }
class AdminCardComponent {
    language;
    content;
    constructor(language) {
        this.language = language;
    }
    static ɵfac = function AdminCardComponent_Factory(t) { return new (t || AdminCardComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminCardComponent, selectors: [["scrm-admin-card"]], inputs: { content: "content" }, decls: 2, vars: 1, consts: [[1, "widget-panel", "h-100", "shadow-sm"], ["class", "card h-100 panel-card border-0", 4, "ngIf"], [1, "card", "h-100", "panel-card", "border-0"], [1, "card-header"], [1, "card-title", "admin-card-title", "m-0", 3, "title"], ["module", "administration", 3, "labelKey"], [1, "card-body", "d-flex", "flex-column", "align-items-start"], [4, "ngIf"], ["class", "admin-card-link-box border-bottom w-100", 3, "border-top", 4, "ngFor", "ngForOf"], [1, "admin-card-link-box", "border-bottom", "w-100"], ["queryParamsHandling", "merge", 1, "card-link", "admin-card-link", 3, "queryParams", "routerLink", "title"], [1, "d-flex", "admin-card-link-wrapper", "align-items-center", "w-100", "p-1"], [1, "admin-card-icon", "sicon-2x", 3, "image"], ["module", "administration", 1, "admin-card-label", "pl-1", "flex-grow-1", 3, "labelKey"]], template: function AdminCardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, AdminCardComponent_div_1_Template, 6, 3, "div", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.content);
        } }, dependencies: [i2.NgForOf, i2.NgIf, i3.RouterLink, i4.LabelComponent, i5.ImageComponent], encapsulation: 2 });
}
export { AdminCardComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminCardComponent, [{
        type: Component,
        args: [{ selector: 'scrm-admin-card', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2023 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n\n<div class=\"widget-panel h-100 shadow-sm\">\n    <div *ngIf=\"content\" class=\"card h-100 panel-card border-0\">\n        <div class=\"card-header\">\n            <h5 [title]=\"language.getFieldLabel(content.descriptionLabelKey, 'administration')\"\n                class=\"card-title admin-card-title m-0\">\n                <scrm-label [labelKey]=\"content.titleLabelKey\" module=\"administration\"></scrm-label>\n            </h5>\n        </div>\n        <div class=\"card-body d-flex flex-column align-items-start\">\n            <ng-container *ngIf=\"content.linkGroup\">\n                <div *ngFor=\"let item of content.linkGroup; let isFirst = first\" [class.border-top]=\"isFirst\"\n                     class=\"admin-card-link-box border-bottom w-100\">\n                    <a [queryParams]=\"item?.params\"\n                       [routerLink]=\"item.link\"\n                       [title]=\"language.getFieldLabel(item.descriptionKey, 'administration')\"\n                       class=\"card-link admin-card-link\"\n                       queryParamsHandling=\"merge\">\n                        <div class=\"d-flex admin-card-link-wrapper align-items-center w-100 p-1 \">\n                            <scrm-image [image]=\"item.icon\" class=\"admin-card-icon sicon-2x\"></scrm-image>\n                            <scrm-label [labelKey]=\"item.titleKey\"\n                                        class=\"admin-card-label pl-1 flex-grow-1\"\n                                        module=\"administration\">\n                            </scrm-label>\n                        </div>\n\n                    </a>\n                </div>\n            </ng-container>\n        </div>\n    </div>\n</div>\n\n" }]
    }], function () { return [{ type: i1.LanguageStore }]; }, { content: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4tY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvYWRtaW4vY29tcG9uZW50cy9hZG1pbi1jYXJkL2FkbWluLWNhcmQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3ZpZXdzL2FkbWluL2NvbXBvbmVudHMvYWRtaW4tY2FyZC9hZG1pbi1jYXJkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7SUNZL0IsOEJBQ3FELFlBQUEsY0FBQTtJQU96QyxpQ0FBOEUscUJBQUE7SUFLbEYsaUJBQU0sRUFBQSxFQUFBOzs7OztJQWJtRCx3Q0FBNEI7SUFFdEYsZUFBNEI7SUFBNUIscUVBQTRCLDRCQUFBLGtGQUFBO0lBTVgsZUFBbUI7SUFBbkIsb0NBQW1CO0lBQ25CLGVBQTBCO0lBQTFCLDJDQUEwQjs7O0lBVnRELDZCQUF3QztJQUNwQyx3RkFnQk07SUFDViwwQkFBZTs7O0lBakJXLGVBQXNCO0lBQXRCLGtEQUFzQjs7O0lBVHhELDhCQUE0RCxhQUFBLFlBQUE7SUFJaEQsZ0NBQW9GO0lBQ3hGLGlCQUFLLEVBQUE7SUFFVCw4QkFBNEQ7SUFDeEQsMkZBa0JlO0lBQ25CLGlCQUFNLEVBQUE7OztJQXpCRSxlQUErRTtJQUEvRSwyR0FBK0U7SUFFbkUsZUFBa0M7SUFBbEMsdURBQWtDO0lBSW5DLGVBQXVCO0lBQXZCLCtDQUF1Qjs7QURObEQsTUFLYSxrQkFBa0I7SUFHUjtJQUZWLE9BQU8sQ0FBc0I7SUFFdEMsWUFBbUIsUUFBdUI7UUFBdkIsYUFBUSxHQUFSLFFBQVEsQ0FBZTtJQUMxQyxDQUFDOzRFQUpRLGtCQUFrQjs2REFBbEIsa0JBQWtCO1lDUi9CLDhCQUEwQztZQUN0QyxtRUE0Qk07WUFDVixpQkFBTTs7WUE3QkksZUFBYTtZQUFiLGtDQUFhOzs7U0RPVixrQkFBa0I7dUZBQWxCLGtCQUFrQjtjQUw5QixTQUFTOzJCQUNJLGlCQUFpQjtnRUFLbEIsT0FBTztrQkFBZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjMgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge0FkbWluTGlua0dyb3VwTW9kZWx9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL2FkbWluLW1ldGFkYXRhL2FkbWluLW1ldGFkYXRhLm1vZGVsJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tYWRtaW4tY2FyZCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FkbWluLWNhcmQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW10sXG59KVxuZXhwb3J0IGNsYXNzIEFkbWluQ2FyZENvbXBvbmVudCB7XG4gICAgQElucHV0KCkgY29udGVudDogQWRtaW5MaW5rR3JvdXBNb2RlbDtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBsYW5ndWFnZTogTGFuZ3VhZ2VTdG9yZSkge1xuICAgIH1cblxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMyBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuXG48ZGl2IGNsYXNzPVwid2lkZ2V0LXBhbmVsIGgtMTAwIHNoYWRvdy1zbVwiPlxuICAgIDxkaXYgKm5nSWY9XCJjb250ZW50XCIgY2xhc3M9XCJjYXJkIGgtMTAwIHBhbmVsLWNhcmQgYm9yZGVyLTBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgICAgICA8aDUgW3RpdGxlXT1cImxhbmd1YWdlLmdldEZpZWxkTGFiZWwoY29udGVudC5kZXNjcmlwdGlvbkxhYmVsS2V5LCAnYWRtaW5pc3RyYXRpb24nKVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJjYXJkLXRpdGxlIGFkbWluLWNhcmQtdGl0bGUgbS0wXCI+XG4gICAgICAgICAgICAgICAgPHNjcm0tbGFiZWwgW2xhYmVsS2V5XT1cImNvbnRlbnQudGl0bGVMYWJlbEtleVwiIG1vZHVsZT1cImFkbWluaXN0cmF0aW9uXCI+PC9zY3JtLWxhYmVsPlxuICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29udGVudC5saW5rR3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBpdGVtIG9mIGNvbnRlbnQubGlua0dyb3VwOyBsZXQgaXNGaXJzdCA9IGZpcnN0XCIgW2NsYXNzLmJvcmRlci10b3BdPVwiaXNGaXJzdFwiXG4gICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImFkbWluLWNhcmQtbGluay1ib3ggYm9yZGVyLWJvdHRvbSB3LTEwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBbcXVlcnlQYXJhbXNdPVwiaXRlbT8ucGFyYW1zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgW3JvdXRlckxpbmtdPVwiaXRlbS5saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgW3RpdGxlXT1cImxhbmd1YWdlLmdldEZpZWxkTGFiZWwoaXRlbS5kZXNjcmlwdGlvbktleSwgJ2FkbWluaXN0cmF0aW9uJylcIlxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNhcmQtbGluayBhZG1pbi1jYXJkLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nPVwibWVyZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggYWRtaW4tY2FyZC1saW5rLXdyYXBwZXIgYWxpZ24taXRlbXMtY2VudGVyIHctMTAwIHAtMSBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1pbWFnZSBbaW1hZ2VdPVwiaXRlbS5pY29uXCIgY2xhc3M9XCJhZG1pbi1jYXJkLWljb24gc2ljb24tMnhcIj48L3Njcm0taW1hZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tbGFiZWwgW2xhYmVsS2V5XT1cIml0ZW0udGl0bGVLZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYWRtaW4tY2FyZC1sYWJlbCBwbC0xIGZsZXgtZ3Jvdy0xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGU9XCJhZG1pbmlzdHJhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2NybS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuXG4iXX0=