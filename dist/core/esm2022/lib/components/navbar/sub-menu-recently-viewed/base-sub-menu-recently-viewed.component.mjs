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
import * as i6 from "../../image/image.component";
import * as i7 from "../../label/label.component";
import * as i8 from "../menu-item-link/menu-item-link.component";
const _c0 = function (a0, a1, a2) { return { label: a0, url: a1, route: a2 }; };
function BaseSubMenuRecentlyViewedComponent_ng_container_0_li_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 7);
    i0.ɵɵelement(1, "scrm-menu-item-link", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const recentRecord_r2 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap("submenu-nav-link nav-link action-link");
    i0.ɵɵproperty("link", i0.ɵɵpureFunction3(3, _c0, recentRecord_r2.attributes.item_summary, ctx_r1.buildRoute(recentRecord_r2), ctx_r1.buildRoute(recentRecord_r2)));
} }
function BaseSubMenuRecentlyViewedComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li", 1)(2, "a", 2);
    i0.ɵɵelement(3, "scrm-image", 3)(4, "scrm-label", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "ul", 5);
    i0.ɵɵtemplate(6, BaseSubMenuRecentlyViewedComponent_ng_container_0_li_6_Template, 2, 7, "li", 6);
    i0.ɵɵpipe(7, "slice");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind3(7, 1, ctx_r0.records, 0, ctx_r0.maxDisplayed));
} }
class BaseSubMenuRecentlyViewedComponent {
    navigation;
    nameMapper;
    configs;
    metadata;
    module;
    maxDisplayed = 5;
    records;
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
    static ɵfac = function BaseSubMenuRecentlyViewedComponent_Factory(t) { return new (t || BaseSubMenuRecentlyViewedComponent)(i0.ɵɵdirectiveInject(i1.ModuleNavigation), i0.ɵɵdirectiveInject(i2.ModuleNameMapper), i0.ɵɵdirectiveInject(i3.SystemConfigStore), i0.ɵɵdirectiveInject(i4.MetadataStore)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BaseSubMenuRecentlyViewedComponent, selectors: [["scrm-base-sub-menu-recently-viewed"]], inputs: { module: "module" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "nav-item", "dropdown-submenu", "submenu", "submenu-extra"], [1, "sub-nav-link", "nav-link", "action-link", "dropdown-item", "dropdown-toggle", "pr-4"], ["image", "clock"], ["labelKey", "LBL_LAST_VIEWED"], [1, "dropdown-menu", "submenu"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "nav-item"], [3, "link"]], template: function BaseSubMenuRecentlyViewedComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BaseSubMenuRecentlyViewedComponent_ng_container_0_Template, 8, 5, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.records && ctx.records.length);
        } }, dependencies: [i5.NgForOf, i5.NgIf, i6.ImageComponent, i7.LabelComponent, i8.MenuItemLinkComponent, i5.SlicePipe], encapsulation: 2 });
}
export { BaseSubMenuRecentlyViewedComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseSubMenuRecentlyViewedComponent, [{
        type: Component,
        args: [{ selector: 'scrm-base-sub-menu-recently-viewed', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"records && records.length\">\n    <li class=\"nav-item dropdown-submenu submenu submenu-extra\">\n\n        <a class=\"sub-nav-link nav-link action-link dropdown-item dropdown-toggle pr-4\">\n            <scrm-image image=\"clock\"></scrm-image>\n            <scrm-label labelKey=\"LBL_LAST_VIEWED\"></scrm-label>\n        </a>\n\n        <ul class=\"dropdown-menu submenu\"\n        >\n            <li *ngFor=\"let recentRecord of records | slice:0:maxDisplayed\" class=\"nav-item\">\n                <scrm-menu-item-link [class]=\"'submenu-nav-link nav-link action-link'\"\n                                     [link]=\"{\n                                                label: recentRecord.attributes.item_summary,\n                                                url: buildRoute(recentRecord),\n                                                route: buildRoute(recentRecord)\n                                             }\">\n                </scrm-menu-item-link>\n            </li>\n        </ul>\n    </li>\n</ng-container>\n\n\n\n" }]
    }], function () { return [{ type: i1.ModuleNavigation }, { type: i2.ModuleNameMapper }, { type: i3.SystemConfigStore }, { type: i4.MetadataStore }]; }, { module: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zdWItbWVudS1yZWNlbnRseS12aWV3ZWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvbmF2YmFyL3N1Yi1tZW51LXJlY2VudGx5LXZpZXdlZC9iYXNlLXN1Yi1tZW51LXJlY2VudGx5LXZpZXdlZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9uYXZiYXIvc3ViLW1lbnUtcmVjZW50bHktdmlld2VkL2Jhc2Utc3ViLW1lbnUtcmVjZW50bHktdmlld2VkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBOEMsTUFBTSxlQUFlLENBQUM7QUFNNUYsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7SUNLdkIsNkJBQWlGO0lBQzdFLHlDQU1zQjtJQUMxQixpQkFBSzs7OztJQVBvQixlQUFpRDtJQUFqRCxzREFBaUQ7SUFDakQsa0tBSVU7OztJQWhCL0MsNkJBQWdEO0lBQzVDLDZCQUE0RCxXQUFBO0lBR3BELGdDQUF1QyxvQkFBQTtJQUUzQyxpQkFBSTtJQUVKLDZCQUNDO0lBQ0csZ0dBUUs7O0lBQ1QsaUJBQUssRUFBQTtJQUViLDBCQUFlOzs7SUFYMEIsZUFBaUM7SUFBakMsc0ZBQWlDOztBREYxRSxNQUthLGtDQUFrQztJQVE3QjtJQUNBO0lBQ0E7SUFDQTtJQVZMLE1BQU0sQ0FBUztJQUN4QixZQUFZLEdBQVcsQ0FBQyxDQUFDO0lBQ3pCLE9BQU8sQ0FBbUI7SUFDaEIsSUFBSSxHQUFtQixFQUFFLENBQUM7SUFHcEMsWUFDYyxVQUE0QixFQUM1QixVQUE0QixFQUM1QixPQUEwQixFQUMxQixRQUF1QjtRQUh2QixlQUFVLEdBQVYsVUFBVSxDQUFrQjtRQUM1QixlQUFVLEdBQVYsVUFBVSxDQUFrQjtRQUM1QixZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUMxQixhQUFRLEdBQVIsUUFBUSxDQUFlO0lBRXJDLENBQUM7SUFFRCxRQUFRO1FBQ0osTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUM5QixNQUFNLGFBQWEsR0FBRyxPQUFPLEVBQUUsTUFBTSxJQUFJLElBQUksQ0FBQztRQUU5QyxJQUFJLGFBQWEsS0FBSyxJQUFJLEVBQUU7WUFDeEIsT0FBTztTQUNWO1FBRUQsTUFBTSxjQUFjLEdBQUcsT0FBTyxFQUFFLE1BQU0sRUFBRSxhQUFhLElBQUksRUFBRSxDQUFDO1FBQzVELE1BQU0sYUFBYSxHQUFHLE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxJQUFJLEVBQUUsQ0FBQztRQUMxRCxJQUFJLGNBQWMsS0FBSyxhQUFhLEVBQUU7WUFDbEMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNILFVBQVUsQ0FBQyxJQUFvQjtRQUMzQixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUM7UUFDckQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVELE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUN6QyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRDs7O09BR0c7SUFDTyxhQUFhO1FBQ25CLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztRQUVwRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxFQUFFLGNBQWMsSUFBSSxJQUFJLENBQUM7UUFDaEQsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7SUFFRDs7O09BR0c7SUFDTyxLQUFLO1FBQ1gsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDOzRGQXRFUSxrQ0FBa0M7NkRBQWxDLGtDQUFrQztZQ2IvQyxxR0FxQmU7O1lBckJBLHdEQUErQjs7O1NEYWpDLGtDQUFrQzt1RkFBbEMsa0NBQWtDO2NBTDlDLFNBQVM7MkJBQ0ksb0NBQW9DOzhKQUtyQyxNQUFNO2tCQUFkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JlY2VudGx5Vmlld2VkfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtNb2R1bGVOYXZpZ2F0aW9ufSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL21vZHVsZS1uYXZpZ2F0aW9uL21vZHVsZS1uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHtNb2R1bGVOYW1lTWFwcGVyfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL21vZHVsZS1uYW1lLW1hcHBlci9tb2R1bGUtbmFtZS1tYXBwZXIuc2VydmljZSc7XG5pbXBvcnQge1N5c3RlbUNvbmZpZ1N0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9zeXN0ZW0tY29uZmlnL3N5c3RlbS1jb25maWcuc3RvcmUnO1xuaW1wb3J0IHtNZXRhZGF0YVN0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9tZXRhZGF0YS9tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7bWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1iYXNlLXN1Yi1tZW51LXJlY2VudGx5LXZpZXdlZCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Jhc2Utc3ViLW1lbnUtcmVjZW50bHktdmlld2VkLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEJhc2VTdWJNZW51UmVjZW50bHlWaWV3ZWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgICBASW5wdXQoKSBtb2R1bGU6IHN0cmluZztcbiAgICBtYXhEaXNwbGF5ZWQ6IG51bWJlciA9IDU7XG4gICAgcmVjb3JkczogUmVjZW50bHlWaWV3ZWRbXTtcbiAgICBwcm90ZWN0ZWQgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBuYXZpZ2F0aW9uOiBNb2R1bGVOYXZpZ2F0aW9uLFxuICAgICAgICBwcm90ZWN0ZWQgbmFtZU1hcHBlcjogTW9kdWxlTmFtZU1hcHBlcixcbiAgICAgICAgcHJvdGVjdGVkIGNvbmZpZ3M6IFN5c3RlbUNvbmZpZ1N0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbWV0YWRhdGE6IE1ldGFkYXRhU3RvcmVcbiAgICApIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdWkgPSB0aGlzLmNvbmZpZ3MuZ2V0Q29uZmlnVmFsdWUoJ3VpJykgPz8ge307XG4gICAgICAgIHRoaXMubWF4RGlzcGxheWVkID0gcGFyc2VJbnQodWkubmF2aWdhdGlvbl9tYXhfbW9kdWxlX3JlY2VudGx5X3ZpZXdlZCkgPz8gNTtcbiAgICAgICAgdGhpcy5pbml0TWV0YWRhdGEkKCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG1vZHVsZUNoYW5nZXMgPSBjaGFuZ2VzPy5tb2R1bGUgPz8gbnVsbDtcblxuICAgICAgICBpZiAobW9kdWxlQ2hhbmdlcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJldmlvdXNNb2R1bGUgPSBjaGFuZ2VzPy5tb2R1bGU/LnByZXZpb3VzVmFsdWUgPz8gJyc7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRNb2R1bGUgPSBjaGFuZ2VzPy5tb2R1bGU/LmN1cnJlbnRWYWx1ZSA/PyAnJztcbiAgICAgICAgaWYgKHByZXZpb3VzTW9kdWxlICE9PSBjdXJyZW50TW9kdWxlKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXRNZXRhZGF0YSQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIHJvdXRlIGZyb20gcmVjZW50bHkgdmlld2VkIGl0ZW1cbiAgICAgKiBAcGFyYW0gaXRlbVxuICAgICAqL1xuICAgIGJ1aWxkUm91dGUoaXRlbTogUmVjZW50bHlWaWV3ZWQpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBsZWdhY3lOYW1lID0gaXRlbS5hdHRyaWJ1dGVzLm1vZHVsZV9uYW1lID8/ICcnO1xuICAgICAgICBjb25zdCBtb2R1bGUgPSB0aGlzLm5hbWVNYXBwZXIudG9Gcm9udGVuZChsZWdhY3lOYW1lKSA/PyAnJztcbiAgICAgICAgY29uc3QgaWQgPSBpdGVtLmF0dHJpYnV0ZXMuaXRlbV9pZCA/PyAnJztcbiAgICAgICAgcmV0dXJuIHRoaXMubmF2aWdhdGlvbi5nZXRSZWNvcmRSb3V0ZXJMaW5rKG1vZHVsZSwgaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXQgbWV0YWRhdGEgc3Vic2NyaXB0aW9uXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBpbml0TWV0YWRhdGEkKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBtb2R1bGVNZXRhJCA9IHRoaXMubWV0YWRhdGEuYWxsTW9kdWxlTWV0YWRhdGEkLnBpcGUobWFwKHZhbHVlID0+IHZhbHVlW3RoaXMubW9kdWxlXSA/PyBudWxsKSk7XG5cbiAgICAgICAgdGhpcy5zdWJzLnB1c2gobW9kdWxlTWV0YSQuc3Vic2NyaWJlKG1ldGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZWNvcmRzID0gbWV0YT8ucmVjZW50bHlWaWV3ZWQgPz8gbnVsbDtcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFyIHN1YnNjcmlwdGlvbiBhbmQgZGF0YVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMucmVjb3JkcyA9IG51bGw7XG4gICAgICAgIHRoaXMuc3Vicy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPG5nLWNvbnRhaW5lciAqbmdJZj1cInJlY29yZHMgJiYgcmVjb3Jkcy5sZW5ndGhcIj5cbiAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbSBkcm9wZG93bi1zdWJtZW51IHN1Ym1lbnUgc3VibWVudS1leHRyYVwiPlxuXG4gICAgICAgIDxhIGNsYXNzPVwic3ViLW5hdi1saW5rIG5hdi1saW5rIGFjdGlvbi1saW5rIGRyb3Bkb3duLWl0ZW0gZHJvcGRvd24tdG9nZ2xlIHByLTRcIj5cbiAgICAgICAgICAgIDxzY3JtLWltYWdlIGltYWdlPVwiY2xvY2tcIj48L3Njcm0taW1hZ2U+XG4gICAgICAgICAgICA8c2NybS1sYWJlbCBsYWJlbEtleT1cIkxCTF9MQVNUX1ZJRVdFRFwiPjwvc2NybS1sYWJlbD5cbiAgICAgICAgPC9hPlxuXG4gICAgICAgIDx1bCBjbGFzcz1cImRyb3Bkb3duLW1lbnUgc3VibWVudVwiXG4gICAgICAgID5cbiAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgcmVjZW50UmVjb3JkIG9mIHJlY29yZHMgfCBzbGljZTowOm1heERpc3BsYXllZFwiIGNsYXNzPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8c2NybS1tZW51LWl0ZW0tbGluayBbY2xhc3NdPVwiJ3N1Ym1lbnUtbmF2LWxpbmsgbmF2LWxpbmsgYWN0aW9uLWxpbmsnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGlua109XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogcmVjZW50UmVjb3JkLmF0dHJpYnV0ZXMuaXRlbV9zdW1tYXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBidWlsZFJvdXRlKHJlY2VudFJlY29yZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZTogYnVpbGRSb3V0ZShyZWNlbnRSZWNvcmQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XCI+XG4gICAgICAgICAgICAgICAgPC9zY3JtLW1lbnUtaXRlbS1saW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICA8L2xpPlxuPC9uZy1jb250YWluZXI+XG5cblxuXG4iXX0=