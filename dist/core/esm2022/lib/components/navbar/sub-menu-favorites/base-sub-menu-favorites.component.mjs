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
import { BaseFavoritesComponent } from '../menu-favorites/base-favorites.component';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/navigation/module-navigation/module-navigation.service";
import * as i2 from "../../../services/navigation/module-name-mapper/module-name-mapper.service";
import * as i3 from "../../../store/system-config/system-config.store";
import * as i4 from "../../../store/metadata/metadata.store.service";
import * as i5 from "@angular/common";
import * as i6 from "../../image/image.component";
import * as i7 from "../../label/label.component";
import * as i8 from "../menu-item-link/menu-item-link.component";
const _c0 = function (a0, a1, a2) { return { label: a0, url: a1, route: a2 }; };
function BaseSubMenuFavoritesComponent_ng_container_0_li_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 7);
    i0.ɵɵelement(1, "scrm-menu-item-link", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const favorite_r2 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap("submenu-nav-link nav-link action-link");
    i0.ɵɵproperty("link", i0.ɵɵpureFunction3(3, _c0, favorite_r2.attributes.parent_name, ctx_r1.buildRoute(favorite_r2), ctx_r1.buildRoute(favorite_r2)));
} }
function BaseSubMenuFavoritesComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li", 1)(2, "a", 2);
    i0.ɵɵelement(3, "scrm-image", 3)(4, "scrm-label", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "ul", 5);
    i0.ɵɵtemplate(6, BaseSubMenuFavoritesComponent_ng_container_0_li_6_Template, 2, 7, "li", 6);
    i0.ɵɵpipe(7, "slice");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind3(7, 1, ctx_r0.records, 0, ctx_r0.maxDisplayed));
} }
class BaseSubMenuFavoritesComponent extends BaseFavoritesComponent {
    navigation;
    nameMapper;
    configs;
    metadata;
    constructor(navigation, nameMapper, configs, metadata) {
        super(navigation, nameMapper, configs, metadata);
        this.navigation = navigation;
        this.nameMapper = nameMapper;
        this.configs = configs;
        this.metadata = metadata;
    }
    static ɵfac = function BaseSubMenuFavoritesComponent_Factory(t) { return new (t || BaseSubMenuFavoritesComponent)(i0.ɵɵdirectiveInject(i1.ModuleNavigation), i0.ɵɵdirectiveInject(i2.ModuleNameMapper), i0.ɵɵdirectiveInject(i3.SystemConfigStore), i0.ɵɵdirectiveInject(i4.MetadataStore)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BaseSubMenuFavoritesComponent, selectors: [["scrm-base-sub-menu-favorites"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "nav-item", "dropdown-submenu", "submenu", "submenu-extra"], [1, "sub-nav-link", "nav-link", "action-link", "dropdown-item", "dropdown-toggle", "pr-4"], ["image", "star"], ["labelKey", "LBL_FAVORITES"], [1, "dropdown-menu", "submenu"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "nav-item"], [3, "link"]], template: function BaseSubMenuFavoritesComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BaseSubMenuFavoritesComponent_ng_container_0_Template, 8, 5, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.records && ctx.records.length);
        } }, dependencies: [i5.NgForOf, i5.NgIf, i6.ImageComponent, i7.LabelComponent, i8.MenuItemLinkComponent, i5.SlicePipe], encapsulation: 2 });
}
export { BaseSubMenuFavoritesComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseSubMenuFavoritesComponent, [{
        type: Component,
        args: [{ selector: 'scrm-base-sub-menu-favorites', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"records && records.length\">\n    <li class=\"nav-item dropdown-submenu submenu submenu-extra\">\n\n        <a class=\"sub-nav-link nav-link action-link dropdown-item dropdown-toggle pr-4\">\n            <scrm-image image=\"star\"></scrm-image>\n            <scrm-label labelKey=\"LBL_FAVORITES\"></scrm-label>\n        </a>\n\n        <ul class=\"dropdown-menu submenu\"\n        >\n            <li *ngFor=\"let favorite of records | slice:0:maxDisplayed\" class=\"nav-item\">\n                <scrm-menu-item-link [class]=\"'submenu-nav-link nav-link action-link'\"\n                                     [link]=\"{\n                                                label: favorite.attributes.parent_name,\n                                                url: buildRoute(favorite),\n                                                route: buildRoute(favorite)\n                                             }\">\n                </scrm-menu-item-link>\n            </li>\n        </ul>\n    </li>\n</ng-container>\n\n\n\n" }]
    }], function () { return [{ type: i1.ModuleNavigation }, { type: i2.ModuleNameMapper }, { type: i3.SystemConfigStore }, { type: i4.MetadataStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zdWItbWVudS1mYXZvcml0ZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvbmF2YmFyL3N1Yi1tZW51LWZhdm9yaXRlcy9iYXNlLXN1Yi1tZW51LWZhdm9yaXRlcy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9uYXZiYXIvc3ViLW1lbnUtZmF2b3JpdGVzL2Jhc2Utc3ViLW1lbnUtZmF2b3JpdGVzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBS3hDLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDRDQUE0QyxDQUFDOzs7Ozs7Ozs7Ozs7SUNNdEUsNkJBQTZFO0lBQ3pFLHlDQU1zQjtJQUMxQixpQkFBSzs7OztJQVBvQixlQUFpRDtJQUFqRCxzREFBaUQ7SUFDakQscUpBSVU7OztJQWhCL0MsNkJBQWdEO0lBQzVDLDZCQUE0RCxXQUFBO0lBR3BELGdDQUFzQyxvQkFBQTtJQUUxQyxpQkFBSTtJQUVKLDZCQUNDO0lBQ0csMkZBUUs7O0lBQ1QsaUJBQUssRUFBQTtJQUViLDBCQUFlOzs7SUFYc0IsZUFBaUM7SUFBakMsc0ZBQWlDOztBREp0RSxNQUthLDZCQUE4QixTQUFRLHNCQUFzQjtJQUd2RDtJQUNBO0lBQ0E7SUFDQTtJQUpkLFlBQ2MsVUFBNEIsRUFDNUIsVUFBNEIsRUFDNUIsT0FBMEIsRUFDMUIsUUFBdUI7UUFFakMsS0FBSyxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFBO1FBTHRDLGVBQVUsR0FBVixVQUFVLENBQWtCO1FBQzVCLGVBQVUsR0FBVixVQUFVLENBQWtCO1FBQzVCLFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBQzFCLGFBQVEsR0FBUixRQUFRLENBQWU7SUFHckMsQ0FBQzt1RkFUUSw2QkFBNkI7NkRBQTdCLDZCQUE2QjtZQ1gxQyxnR0FxQmU7O1lBckJBLHdEQUErQjs7O1NEV2pDLDZCQUE2Qjt1RkFBN0IsNkJBQTZCO2NBTHpDLFNBQVM7MkJBQ0ksOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01vZHVsZU5hdmlnYXRpb259IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL25hdmlnYXRpb24vbW9kdWxlLW5hdmlnYXRpb24vbW9kdWxlLW5hdmlnYXRpb24uc2VydmljZSc7XG5pbXBvcnQge01vZHVsZU5hbWVNYXBwZXJ9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL25hdmlnYXRpb24vbW9kdWxlLW5hbWUtbWFwcGVyL21vZHVsZS1uYW1lLW1hcHBlci5zZXJ2aWNlJztcbmltcG9ydCB7U3lzdGVtQ29uZmlnU3RvcmV9IGZyb20gJy4uLy4uLy4uL3N0b3JlL3N5c3RlbS1jb25maWcvc3lzdGVtLWNvbmZpZy5zdG9yZSc7XG5pbXBvcnQge01ldGFkYXRhU3RvcmV9IGZyb20gJy4uLy4uLy4uL3N0b3JlL21ldGFkYXRhL21ldGFkYXRhLnN0b3JlLnNlcnZpY2UnO1xuaW1wb3J0IHtCYXNlRmF2b3JpdGVzQ29tcG9uZW50fSBmcm9tICcuLi9tZW51LWZhdm9yaXRlcy9iYXNlLWZhdm9yaXRlcy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tYmFzZS1zdWItbWVudS1mYXZvcml0ZXMnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9iYXNlLXN1Yi1tZW51LWZhdm9yaXRlcy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBCYXNlU3ViTWVudUZhdm9yaXRlc0NvbXBvbmVudCBleHRlbmRzIEJhc2VGYXZvcml0ZXNDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBuYXZpZ2F0aW9uOiBNb2R1bGVOYXZpZ2F0aW9uLFxuICAgICAgICBwcm90ZWN0ZWQgbmFtZU1hcHBlcjogTW9kdWxlTmFtZU1hcHBlcixcbiAgICAgICAgcHJvdGVjdGVkIGNvbmZpZ3M6IFN5c3RlbUNvbmZpZ1N0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbWV0YWRhdGE6IE1ldGFkYXRhU3RvcmVcbiAgICApIHtcbiAgICAgICAgc3VwZXIobmF2aWdhdGlvbiwgbmFtZU1hcHBlciwgY29uZmlncywgbWV0YWRhdGEpXG4gICAgfVxuXG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48bmctY29udGFpbmVyICpuZ0lmPVwicmVjb3JkcyAmJiByZWNvcmRzLmxlbmd0aFwiPlxuICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtIGRyb3Bkb3duLXN1Ym1lbnUgc3VibWVudSBzdWJtZW51LWV4dHJhXCI+XG5cbiAgICAgICAgPGEgY2xhc3M9XCJzdWItbmF2LWxpbmsgbmF2LWxpbmsgYWN0aW9uLWxpbmsgZHJvcGRvd24taXRlbSBkcm9wZG93bi10b2dnbGUgcHItNFwiPlxuICAgICAgICAgICAgPHNjcm0taW1hZ2UgaW1hZ2U9XCJzdGFyXCI+PC9zY3JtLWltYWdlPlxuICAgICAgICAgICAgPHNjcm0tbGFiZWwgbGFiZWxLZXk9XCJMQkxfRkFWT1JJVEVTXCI+PC9zY3JtLWxhYmVsPlxuICAgICAgICA8L2E+XG5cbiAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudSBzdWJtZW51XCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBmYXZvcml0ZSBvZiByZWNvcmRzIHwgc2xpY2U6MDptYXhEaXNwbGF5ZWRcIiBjbGFzcz1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPHNjcm0tbWVudS1pdGVtLWxpbmsgW2NsYXNzXT1cIidzdWJtZW51LW5hdi1saW5rIG5hdi1saW5rIGFjdGlvbi1saW5rJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xpbmtdPVwie1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGZhdm9yaXRlLmF0dHJpYnV0ZXMucGFyZW50X25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGJ1aWxkUm91dGUoZmF2b3JpdGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGU6IGJ1aWxkUm91dGUoZmF2b3JpdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XCI+XG4gICAgICAgICAgICAgICAgPC9zY3JtLW1lbnUtaXRlbS1saW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICA8L2xpPlxuPC9uZy1jb250YWluZXI+XG5cblxuXG4iXX0=