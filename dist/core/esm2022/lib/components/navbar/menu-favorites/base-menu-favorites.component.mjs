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
import { BaseFavoritesComponent } from './base-favorites.component';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/navigation/module-navigation/module-navigation.service";
import * as i2 from "../../../services/navigation/module-name-mapper/module-name-mapper.service";
import * as i3 from "../../../store/system-config/system-config.store";
import * as i4 from "../../../store/metadata/metadata.store.service";
import * as i5 from "@angular/common";
import * as i6 from "@angular/router";
import * as i7 from "../../label/label.component";
function BaseMenuFavoritesComponent_ng_container_0_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵlistener("click", function BaseMenuFavoritesComponent_ng_container_0_ng_container_3_div_1_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r4.onClick && ctx_r4.onClick()); });
    i0.ɵɵelementStart(1, "a", 5);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const favorite_r3 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", ctx_r2.buildRoute(favorite_r3));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", favorite_r3.attributes.parent_name, " ");
} }
function BaseMenuFavoritesComponent_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BaseMenuFavoritesComponent_ng_container_0_ng_container_3_div_1_Template, 3, 2, "div", 3);
    i0.ɵɵpipe(2, "slice");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind3(2, 1, ctx_r1.records, 0, ctx_r1.maxDisplayed));
} }
function BaseMenuFavoritesComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h4", 1);
    i0.ɵɵlistener("click", function BaseMenuFavoritesComponent_ng_container_0_Template_h4_click_1_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.toggleCollapse()); });
    i0.ɵɵelement(2, "scrm-label", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, BaseMenuFavoritesComponent_ng_container_0_ng_container_3_Template, 3, 5, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r0.collapsed);
} }
class BaseMenuFavoritesComponent extends BaseFavoritesComponent {
    navigation;
    nameMapper;
    configs;
    metadata;
    onClick;
    collapsible = false;
    collapsed = false;
    constructor(navigation, nameMapper, configs, metadata) {
        super(navigation, nameMapper, configs, metadata);
        this.navigation = navigation;
        this.nameMapper = nameMapper;
        this.configs = configs;
        this.metadata = metadata;
    }
    ngOnInit() {
        super.ngOnInit();
        this.collapsed = !!this.collapsible;
    }
    /**
     * toggle collapse
     */
    toggleCollapse() {
        if (!this.collapsible) {
            return;
        }
        this.collapsed = !this.collapsed;
    }
    static ɵfac = function BaseMenuFavoritesComponent_Factory(t) { return new (t || BaseMenuFavoritesComponent)(i0.ɵɵdirectiveInject(i1.ModuleNavigation), i0.ɵɵdirectiveInject(i2.ModuleNameMapper), i0.ɵɵdirectiveInject(i3.SystemConfigStore), i0.ɵɵdirectiveInject(i4.MetadataStore)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BaseMenuFavoritesComponent, selectors: [["scrm-base-menu-favorites"]], inputs: { onClick: "onClick", collapsible: "collapsible" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "favorite-header", "mt-0", "pb-1", "pl-2", "pr-2", 3, "click"], ["labelKey", "LBL_FAVORITES"], ["class", "nav-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "nav-item", 3, "click"], [1, "nav-link", "action-link", "pb-2", "pt-2", 3, "routerLink"]], template: function BaseMenuFavoritesComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BaseMenuFavoritesComponent_ng_container_0_Template, 4, 1, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.records && ctx.records.length);
        } }, dependencies: [i5.NgForOf, i5.NgIf, i6.RouterLink, i7.LabelComponent, i5.SlicePipe], encapsulation: 2 });
}
export { BaseMenuFavoritesComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseMenuFavoritesComponent, [{
        type: Component,
        args: [{ selector: 'scrm-base-menu-favorites', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"records && records.length\">\n    <h4 (click)=\"toggleCollapse()\"\n        class=\"favorite-header mt-0 pb-1 pl-2 pr-2\">\n        <scrm-label labelKey=\"LBL_FAVORITES\"></scrm-label>\n    </h4>\n    <ng-container *ngIf=\"!collapsed\">\n        <div (click)=\"onClick && onClick()\"\n             *ngFor=\"let favorite of records | slice:0:maxDisplayed\"\n             class=\"nav-item\"\n        >\n            <a [routerLink]=\"this.buildRoute(favorite)\"\n               class=\"nav-link action-link pb-2 pt-2\">\n                {{ favorite.attributes.parent_name }}\n            </a>\n        </div>\n    </ng-container>\n\n</ng-container>\n" }]
    }], function () { return [{ type: i1.ModuleNavigation }, { type: i2.ModuleNameMapper }, { type: i3.SystemConfigStore }, { type: i4.MetadataStore }]; }, { onClick: [{
            type: Input
        }], collapsible: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1tZW51LWZhdm9yaXRlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9uYXZiYXIvbWVudS1mYXZvcml0ZXMvYmFzZS1tZW51LWZhdm9yaXRlcy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9uYXZiYXIvbWVudS1mYXZvcml0ZXMvYmFzZS1tZW51LWZhdm9yaXRlcy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFLL0MsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7Ozs7Ozs7Ozs7O0lDRTFELDhCQUdDO0lBSEksbU1BQVMsaUNBQVcsZ0JBQVMsQ0FBQSxJQUFDO0lBSS9CLDRCQUMwQztJQUN0QyxZQUNKO0lBQUEsaUJBQUksRUFBQTs7OztJQUhELGVBQXdDO0lBQXhDLDJEQUF3QztJQUV2QyxlQUNKO0lBREksbUVBQ0o7OztJQVJSLDZCQUFpQztJQUM3Qix5R0FRTTs7SUFDViwwQkFBZTs7O0lBUmUsZUFBaUM7SUFBakMsc0ZBQWlDOzs7O0lBUG5FLDZCQUFnRDtJQUM1Qyw2QkFDZ0Q7SUFENUMsNEtBQVMsZUFBQSx1QkFBZ0IsQ0FBQSxJQUFDO0lBRTFCLGdDQUFrRDtJQUN0RCxpQkFBSztJQUNMLDRHQVVlO0lBRW5CLDBCQUFlOzs7SUFaSSxlQUFnQjtJQUFoQix3Q0FBZ0I7O0FEQ25DLE1BS2EsMEJBQTJCLFNBQVEsc0JBQXNCO0lBT3BEO0lBQ0E7SUFDQTtJQUNBO0lBUkwsT0FBTyxDQUFXO0lBQ2xCLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDN0IsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUVsQixZQUNjLFVBQTRCLEVBQzVCLFVBQTRCLEVBQzVCLE9BQTBCLEVBQzFCLFFBQXVCO1FBRWpDLEtBQUssQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQTtRQUx0QyxlQUFVLEdBQVYsVUFBVSxDQUFrQjtRQUM1QixlQUFVLEdBQVYsVUFBVSxDQUFrQjtRQUM1QixZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUMxQixhQUFRLEdBQVIsUUFBUSxDQUFlO0lBR3JDLENBQUM7SUFFRCxRQUFRO1FBQ0osS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDeEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsY0FBYztRQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ25CLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3JDLENBQUM7b0ZBN0JRLDBCQUEwQjs2REFBMUIsMEJBQTBCO1lDWHZDLDZGQWlCZTs7WUFqQkEsd0RBQStCOzs7U0RXakMsMEJBQTBCO3VGQUExQiwwQkFBMEI7Y0FMdEMsU0FBUzsyQkFDSSwwQkFBMEI7OEpBTTNCLE9BQU87a0JBQWYsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01vZHVsZU5hdmlnYXRpb259IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL25hdmlnYXRpb24vbW9kdWxlLW5hdmlnYXRpb24vbW9kdWxlLW5hdmlnYXRpb24uc2VydmljZSc7XG5pbXBvcnQge01vZHVsZU5hbWVNYXBwZXJ9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL25hdmlnYXRpb24vbW9kdWxlLW5hbWUtbWFwcGVyL21vZHVsZS1uYW1lLW1hcHBlci5zZXJ2aWNlJztcbmltcG9ydCB7U3lzdGVtQ29uZmlnU3RvcmV9IGZyb20gJy4uLy4uLy4uL3N0b3JlL3N5c3RlbS1jb25maWcvc3lzdGVtLWNvbmZpZy5zdG9yZSc7XG5pbXBvcnQge01ldGFkYXRhU3RvcmV9IGZyb20gJy4uLy4uLy4uL3N0b3JlL21ldGFkYXRhL21ldGFkYXRhLnN0b3JlLnNlcnZpY2UnO1xuaW1wb3J0IHtCYXNlRmF2b3JpdGVzQ29tcG9uZW50fSBmcm9tICcuL2Jhc2UtZmF2b3JpdGVzLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1iYXNlLW1lbnUtZmF2b3JpdGVzJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYmFzZS1tZW51LWZhdm9yaXRlcy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBCYXNlTWVudUZhdm9yaXRlc0NvbXBvbmVudCBleHRlbmRzIEJhc2VGYXZvcml0ZXNDb21wb25lbnQge1xuXG4gICAgQElucHV0KCkgb25DbGljazogRnVuY3Rpb247XG4gICAgQElucHV0KCkgY29sbGFwc2libGUgPSBmYWxzZTtcbiAgICBjb2xsYXBzZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgbmF2aWdhdGlvbjogTW9kdWxlTmF2aWdhdGlvbixcbiAgICAgICAgcHJvdGVjdGVkIG5hbWVNYXBwZXI6IE1vZHVsZU5hbWVNYXBwZXIsXG4gICAgICAgIHByb3RlY3RlZCBjb25maWdzOiBTeXN0ZW1Db25maWdTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIG1ldGFkYXRhOiBNZXRhZGF0YVN0b3JlXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKG5hdmlnYXRpb24sIG5hbWVNYXBwZXIsIGNvbmZpZ3MsIG1ldGFkYXRhKVxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBzdXBlci5uZ09uSW5pdCgpO1xuICAgICAgICB0aGlzLmNvbGxhcHNlZCA9ICEhdGhpcy5jb2xsYXBzaWJsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB0b2dnbGUgY29sbGFwc2VcbiAgICAgKi9cbiAgICB0b2dnbGVDb2xsYXBzZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbGxhcHNpYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbGxhcHNlZCA9ICF0aGlzLmNvbGxhcHNlZDtcbiAgICB9XG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48bmctY29udGFpbmVyICpuZ0lmPVwicmVjb3JkcyAmJiByZWNvcmRzLmxlbmd0aFwiPlxuICAgIDxoNCAoY2xpY2spPVwidG9nZ2xlQ29sbGFwc2UoKVwiXG4gICAgICAgIGNsYXNzPVwiZmF2b3JpdGUtaGVhZGVyIG10LTAgcGItMSBwbC0yIHByLTJcIj5cbiAgICAgICAgPHNjcm0tbGFiZWwgbGFiZWxLZXk9XCJMQkxfRkFWT1JJVEVTXCI+PC9zY3JtLWxhYmVsPlxuICAgIDwvaDQ+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFjb2xsYXBzZWRcIj5cbiAgICAgICAgPGRpdiAoY2xpY2spPVwib25DbGljayAmJiBvbkNsaWNrKClcIlxuICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBmYXZvcml0ZSBvZiByZWNvcmRzIHwgc2xpY2U6MDptYXhEaXNwbGF5ZWRcIlxuICAgICAgICAgICAgIGNsYXNzPVwibmF2LWl0ZW1cIlxuICAgICAgICA+XG4gICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJ0aGlzLmJ1aWxkUm91dGUoZmF2b3JpdGUpXCJcbiAgICAgICAgICAgICAgIGNsYXNzPVwibmF2LWxpbmsgYWN0aW9uLWxpbmsgcGItMiBwdC0yXCI+XG4gICAgICAgICAgICAgICAge3sgZmF2b3JpdGUuYXR0cmlidXRlcy5wYXJlbnRfbmFtZSB9fVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuPC9uZy1jb250YWluZXI+XG4iXX0=