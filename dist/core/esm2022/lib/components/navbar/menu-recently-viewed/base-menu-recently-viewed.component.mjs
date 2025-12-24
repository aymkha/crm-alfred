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
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/navigation/module-navigation/module-navigation.service";
import * as i2 from "../../../services/navigation/module-name-mapper/module-name-mapper.service";
import * as i3 from "../../../store/system-config/system-config.store";
import * as i4 from "../../../store/metadata/metadata.store.service";
import * as i5 from "@angular/common";
import * as i6 from "@angular/router";
import * as i7 from "../../label/label.component";
function BaseMenuRecentlyViewedComponent_ng_container_0_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵlistener("click", function BaseMenuRecentlyViewedComponent_ng_container_0_ng_container_3_div_1_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r4.onClick && ctx_r4.onClick()); });
    i0.ɵɵelementStart(1, "a", 5);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const recentRecord_r3 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", ctx_r2.buildRoute(recentRecord_r3));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", recentRecord_r3.attributes.item_summary, " ");
} }
function BaseMenuRecentlyViewedComponent_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BaseMenuRecentlyViewedComponent_ng_container_0_ng_container_3_div_1_Template, 3, 2, "div", 3);
    i0.ɵɵpipe(2, "slice");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind3(2, 1, ctx_r1.records, 0, ctx_r1.maxDisplayed));
} }
function BaseMenuRecentlyViewedComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h4", 1);
    i0.ɵɵlistener("click", function BaseMenuRecentlyViewedComponent_ng_container_0_Template_h4_click_1_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.toggleCollapse()); });
    i0.ɵɵelement(2, "scrm-label", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, BaseMenuRecentlyViewedComponent_ng_container_0_ng_container_3_Template, 3, 5, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r0.collapsed);
} }
class BaseMenuRecentlyViewedComponent {
    navigation;
    nameMapper;
    configs;
    metadata;
    module;
    onClick;
    collapsible = false;
    maxDisplayed = 5;
    records;
    collapsed = false;
    subs = [];
    constructor(navigation, nameMapper, configs, metadata) {
        this.navigation = navigation;
        this.nameMapper = nameMapper;
        this.configs = configs;
        this.metadata = metadata;
    }
    ngOnInit() {
        const ui = this.configs.getConfigValue('ui') ?? {};
        this.maxDisplayed = parseInt(ui.navigation_max_module_recently_viewed) ?? 5;
        this.initMetadata$();
        this.collapsed = !!this.collapsible;
    }
    ngOnDestroy() {
        this.clear();
    }
    ngOnChanges(changes) {
        const moduleChanges = changes?.module ?? null;
        if (moduleChanges === null) {
            return;
        }
        const previousModule = changes?.module?.previousValue ?? '';
        const currentModule = changes?.module?.currentValue ?? '';
        if (previousModule !== currentModule) {
            this.clear();
            this.initMetadata$();
        }
    }
    /**
     * Build route from recently viewed item
     * @param item
     */
    buildRoute(item) {
        const legacyName = item.attributes.module_name ?? '';
        const module = this.nameMapper.toFrontend(legacyName) ?? '';
        const id = item.attributes.item_id ?? '';
        return this.navigation.getRecordRouterLink(module, id);
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
    /**
     * Init metadata subscription
     * @protected
     */
    initMetadata$() {
        const moduleMeta$ = this.metadata.allModuleMetadata$.pipe(map(value => value[this.module] ?? null));
        this.subs.push(moduleMeta$.subscribe(meta => {
            this.records = meta?.recentlyViewed ?? null;
        }));
    }
    /**
     * Clear subscription and data
     * @protected
     */
    clear() {
        this.records = null;
        this.subs.forEach(sub => sub.unsubscribe());
    }
    static ɵfac = function BaseMenuRecentlyViewedComponent_Factory(t) { return new (t || BaseMenuRecentlyViewedComponent)(i0.ɵɵdirectiveInject(i1.ModuleNavigation), i0.ɵɵdirectiveInject(i2.ModuleNameMapper), i0.ɵɵdirectiveInject(i3.SystemConfigStore), i0.ɵɵdirectiveInject(i4.MetadataStore)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BaseMenuRecentlyViewedComponent, selectors: [["scrm-base-menu-recently-viewed"]], inputs: { module: "module", onClick: "onClick", collapsible: "collapsible" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "recently-viewed-header", "mt-0", "pb-1", "pl-2", "pr-2", 3, "click"], ["labelKey", "LBL_LAST_VIEWED"], ["class", "nav-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "nav-item", 3, "click"], [1, "nav-link", "action-link", "pb-2", "pt-2", 3, "routerLink"]], template: function BaseMenuRecentlyViewedComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BaseMenuRecentlyViewedComponent_ng_container_0_Template, 4, 1, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.records && ctx.records.length);
        } }, dependencies: [i5.NgForOf, i5.NgIf, i6.RouterLink, i7.LabelComponent, i5.SlicePipe], encapsulation: 2 });
}
export { BaseMenuRecentlyViewedComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseMenuRecentlyViewedComponent, [{
        type: Component,
        args: [{ selector: 'scrm-base-menu-recently-viewed', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"records && records.length\">\n    <h4 (click)=\"toggleCollapse()\"\n        class=\"recently-viewed-header mt-0 pb-1 pl-2 pr-2\">\n        <scrm-label labelKey=\"LBL_LAST_VIEWED\"></scrm-label>\n    </h4>\n    <ng-container *ngIf=\"!collapsed\">\n        <div (click)=\"onClick && onClick()\"\n             *ngFor=\"let recentRecord of records | slice:0:maxDisplayed\"\n             class=\"nav-item\"\n        >\n            <a [routerLink]=\"this.buildRoute(recentRecord)\"\n               class=\"nav-link action-link pb-2 pt-2\">\n                {{ recentRecord.attributes.item_summary }}\n            </a>\n        </div>\n    </ng-container>\n</ng-container>\n" }]
    }], function () { return [{ type: i1.ModuleNavigation }, { type: i2.ModuleNameMapper }, { type: i3.SystemConfigStore }, { type: i4.MetadataStore }]; }, { module: [{
            type: Input
        }], onClick: [{
            type: Input
        }], collapsible: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1tZW51LXJlY2VudGx5LXZpZXdlZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9uYXZiYXIvbWVudS1yZWNlbnRseS12aWV3ZWQvYmFzZS1tZW51LXJlY2VudGx5LXZpZXdlZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9uYXZiYXIvbWVudS1yZWNlbnRseS12aWV3ZWQvYmFzZS1tZW51LXJlY2VudGx5LXZpZXdlZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQThDLE1BQU0sZUFBZSxDQUFDO0FBTTVGLE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7SUNDM0IsOEJBR0M7SUFISSx3TUFBUyxpQ0FBVyxnQkFBUyxDQUFBLElBQUM7SUFJL0IsNEJBQzBDO0lBQ3RDLFlBQ0o7SUFBQSxpQkFBSSxFQUFBOzs7O0lBSEQsZUFBNEM7SUFBNUMsK0RBQTRDO0lBRTNDLGVBQ0o7SUFESSx3RUFDSjs7O0lBUlIsNkJBQWlDO0lBQzdCLDhHQVFNOztJQUNWLDBCQUFlOzs7SUFSbUIsZUFBaUM7SUFBakMsc0ZBQWlDOzs7O0lBUHZFLDZCQUFnRDtJQUM1Qyw2QkFDdUQ7SUFEbkQsaUxBQVMsZUFBQSx1QkFBZ0IsQ0FBQSxJQUFDO0lBRTFCLGdDQUFvRDtJQUN4RCxpQkFBSztJQUNMLGlIQVVlO0lBQ25CLDBCQUFlOzs7SUFYSSxlQUFnQjtJQUFoQix3Q0FBZ0I7O0FER25DLE1BS2EsK0JBQStCO0lBVzFCO0lBQ0E7SUFDQTtJQUNBO0lBYkwsTUFBTSxDQUFTO0lBQ2YsT0FBTyxD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SUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7eUZBckZRLCtCQUErQjs2REFBL0IsK0JBQStCO1lDYjVDLGtHQWdCZTs7WUFoQkEsd0RBQStCOzs7U0RhakMsK0JBQStCO3VGQUEvQiwrQkFBK0I7Y0FMM0MsU0FBUzsyQkFDSSxnQ0FBZ0M7OEpBS2pDLE1BQU07a0JBQWQsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JlY2VudGx5Vmlld2VkfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtNb2R1bGVOYXZpZ2F0aW9ufSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL21vZHVsZS1uYXZpZ2F0aW9uL21vZHVsZS1uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHtNb2R1bGVOYW1lTWFwcGVyfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL21vZHVsZS1uYW1lLW1hcHBlci9tb2R1bGUtbmFtZS1tYXBwZXIuc2VydmljZSc7XG5pbXBvcnQge1N5c3RlbUNvbmZpZ1N0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9zeXN0ZW0tY29uZmlnL3N5c3RlbS1jb25maWcuc3RvcmUnO1xuaW1wb3J0IHtNZXRhZGF0YVN0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9tZXRhZGF0YS9tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7bWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1iYXNlLW1lbnUtcmVjZW50bHktdmlld2VkJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYmFzZS1tZW51LXJlY2VudGx5LXZpZXdlZC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBCYXNlTWVudVJlY2VudGx5Vmlld2VkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gICAgQElucHV0KCkgbW9kdWxlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgb25DbGljazogRnVuY3Rpb247XG4gICAgQElucHV0KCkgY29sbGFwc2libGUgPSBmYWxzZTtcbiAgICBtYXhEaXNwbGF5ZWQ6IG51bWJlciA9IDU7XG4gICAgcmVjb3JkczogUmVjZW50bHlWaWV3ZWRbXTtcbiAgICBjb2xsYXBzZWQgPSBmYWxzZTtcbiAgICBwcm90ZWN0ZWQgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBuYXZpZ2F0aW9uOiBNb2R1bGVOYXZpZ2F0aW9uLFxuICAgICAgICBwcm90ZWN0ZWQgbmFtZU1hcHBlcjogTW9kdWxlTmFtZU1hcHBlcixcbiAgICAgICAgcHJvdGVjdGVkIGNvbmZpZ3M6IFN5c3RlbUNvbmZpZ1N0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbWV0YWRhdGE6IE1ldGFkYXRhU3RvcmVcbiAgICApIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdWkgPSB0aGlzLmNvbmZpZ3MuZ2V0Q29uZmlnVmFsdWUoJ3VpJykgPz8ge307XG4gICAgICAgIHRoaXMubWF4RGlzcGxheWVkID0gcGFyc2VJbnQodWkubmF2aWdhdGlvbl9tYXhfbW9kdWxlX3JlY2VudGx5X3ZpZXdlZCkgPz8gNTtcbiAgICAgICAgdGhpcy5pbml0TWV0YWRhdGEkKCk7XG4gICAgICAgIHRoaXMuY29sbGFwc2VkID0gISF0aGlzLmNvbGxhcHNpYmxlO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgICBjb25zdCBtb2R1bGVDaGFuZ2VzID0gY2hhbmdlcz8ubW9kdWxlID8/IG51bGw7XG5cbiAgICAgICAgaWYgKG1vZHVsZUNoYW5nZXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByZXZpb3VzTW9kdWxlID0gY2hhbmdlcz8ubW9kdWxlPy5wcmV2aW91c1ZhbHVlID8/ICcnO1xuICAgICAgICBjb25zdCBjdXJyZW50TW9kdWxlID0gY2hhbmdlcz8ubW9kdWxlPy5jdXJyZW50VmFsdWUgPz8gJyc7XG4gICAgICAgIGlmIChwcmV2aW91c01vZHVsZSAhPT0gY3VycmVudE1vZHVsZSkge1xuICAgICAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0TWV0YWRhdGEkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCByb3V0ZSBmcm9tIHJlY2VudGx5IHZpZXdlZCBpdGVtXG4gICAgICogQHBhcmFtIGl0ZW1cbiAgICAgKi9cbiAgICBidWlsZFJvdXRlKGl0ZW06IFJlY2VudGx5Vmlld2VkKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgbGVnYWN5TmFtZSA9IGl0ZW0uYXR0cmlidXRlcy5tb2R1bGVfbmFtZSA/PyAnJztcbiAgICAgICAgY29uc3QgbW9kdWxlID0gdGhpcy5uYW1lTWFwcGVyLnRvRnJvbnRlbmQobGVnYWN5TmFtZSkgPz8gJyc7XG4gICAgICAgIGNvbnN0IGlkID0gaXRlbS5hdHRyaWJ1dGVzLml0ZW1faWQgPz8gJyc7XG4gICAgICAgIHJldHVybiB0aGlzLm5hdmlnYXRpb24uZ2V0UmVjb3JkUm91dGVyTGluayhtb2R1bGUsIGlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB0b2dnbGUgY29sbGFwc2VcbiAgICAgKi9cbiAgICB0b2dnbGVDb2xsYXBzZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbGxhcHNpYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbGxhcHNlZCA9ICF0aGlzLmNvbGxhcHNlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IG1ldGFkYXRhIHN1YnNjcmlwdGlvblxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaW5pdE1ldGFkYXRhJCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbW9kdWxlTWV0YSQgPSB0aGlzLm1ldGFkYXRhLmFsbE1vZHVsZU1ldGFkYXRhJC5waXBlKG1hcCh2YWx1ZSA9PiB2YWx1ZVt0aGlzLm1vZHVsZV0gPz8gbnVsbCkpO1xuXG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKG1vZHVsZU1ldGEkLnN1YnNjcmliZShtZXRhID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVjb3JkcyA9IG1ldGE/LnJlY2VudGx5Vmlld2VkID8/IG51bGw7XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBzdWJzY3JpcHRpb24gYW5kIGRhdGFcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGNsZWFyKCkge1xuICAgICAgICB0aGlzLnJlY29yZHMgPSBudWxsO1xuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cblxuXG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48bmctY29udGFpbmVyICpuZ0lmPVwicmVjb3JkcyAmJiByZWNvcmRzLmxlbmd0aFwiPlxuICAgIDxoNCAoY2xpY2spPVwidG9nZ2xlQ29sbGFwc2UoKVwiXG4gICAgICAgIGNsYXNzPVwicmVjZW50bHktdmlld2VkLWhlYWRlciBtdC0wIHBiLTEgcGwtMiBwci0yXCI+XG4gICAgICAgIDxzY3JtLWxhYmVsIGxhYmVsS2V5PVwiTEJMX0xBU1RfVklFV0VEXCI+PC9zY3JtLWxhYmVsPlxuICAgIDwvaDQ+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFjb2xsYXBzZWRcIj5cbiAgICAgICAgPGRpdiAoY2xpY2spPVwib25DbGljayAmJiBvbkNsaWNrKClcIlxuICAgICAgICAgICAgICpuZ0Zvcj1cImxldCByZWNlbnRSZWNvcmQgb2YgcmVjb3JkcyB8IHNsaWNlOjA6bWF4RGlzcGxheWVkXCJcbiAgICAgICAgICAgICBjbGFzcz1cIm5hdi1pdGVtXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwidGhpcy5idWlsZFJvdXRlKHJlY2VudFJlY29yZClcIlxuICAgICAgICAgICAgICAgY2xhc3M9XCJuYXYtbGluayBhY3Rpb24tbGluayBwYi0yIHB0LTJcIj5cbiAgICAgICAgICAgICAgICB7eyByZWNlbnRSZWNvcmQuYXR0cmlidXRlcy5pdGVtX3N1bW1hcnkgfX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==