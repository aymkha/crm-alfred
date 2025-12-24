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
import { isTrue } from 'common';
import { BehaviorSubject, combineLatestWith } from 'rxjs';
import { ScreenSize } from '../../../../services/ui/screen-size-observer/screen-size-observer.service';
import * as i0 from "@angular/core";
import * as i1 from "../../store/list-view/list-view.store";
import * as i2 from "@ng-bootstrap/ng-bootstrap";
import * as i3 from "../../../../services/ui/screen-size-observer/screen-size-observer.service";
import * as i4 from "../../../../store/system-config/system-config.store";
import * as i5 from "../../services/quick-filters.service";
import * as i6 from "@angular/common";
import * as i7 from "../../../../components/button-group/button-group.component";
import * as i8 from "../../../../components/label/label.component";
function SettingsMenuComponent_ng_container_1_div_1_scrm_button_group_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-button-group", 10);
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("config$", ctx_r4.quickFilters.config$)("klass", "quick-filter-button");
} }
function SettingsMenuComponent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 6);
    i0.ɵɵelement(2, "scrm-label", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 8);
    i0.ɵɵtemplate(4, SettingsMenuComponent_ng_container_1_div_1_scrm_button_group_4_Template, 1, 2, "scrm-button-group", 9);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r3.quickFilters.config$);
} }
function SettingsMenuComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, SettingsMenuComponent_ng_container_1_div_1_Template, 5, 1, "div", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.showQuickFilters && ctx_r0.enableQuickFilters);
} }
function SettingsMenuComponent_scrm_button_group_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-button-group", 11);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("config$", ctx_r1.config$);
} }
class SettingsMenuComponent {
    listStore;
    modalService;
    screenSize;
    systemConfigStore;
    quickFilters;
    configState = new BehaviorSubject({ buttons: [] });
    config$ = this.configState.asObservable();
    showQuickFilters = true;
    enableQuickFilters = false;
    screen = ScreenSize.Medium;
    defaultBreakpoint = 5;
    breakpoint;
    subs = [];
    constructor(listStore, modalService, screenSize, systemConfigStore, quickFilters) {
        this.listStore = listStore;
        this.modalService = modalService;
        this.screenSize = screenSize;
        this.systemConfigStore = systemConfigStore;
        this.quickFilters = quickFilters;
    }
    ngOnInit() {
        this.configState.next(this.getButtonGroupConfig());
        const vm$ = this.listStore.widgets$.pipe(combineLatestWith(this.listStore.displayFilters$, this.listStore.criteria$, this.screenSize.screenSize$, this.listStore.showSidebarWidgets$, this.listStore.filterList.records$));
        this.subs.push(vm$.subscribe(([widgets, displayFilters, criteria, screenSize, showSidebarWidgets, savedFilters]) => {
            if (screenSize) {
                this.screen = screenSize;
            }
            this.configState.next(this.getButtonGroupConfig());
            this.quickFilters.init();
        }));
        this.subs.push(this.quickFilters.breakdown$.subscribe(breakdown => {
            this.showQuickFilters = !isTrue(breakdown);
        }));
        this.subs.push(this.quickFilters.enabled$.subscribe(enabled => {
            this.enableQuickFilters = isTrue(enabled ?? false);
        }));
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    getButtonGroupConfig() {
        const availableButtons = [
            {
                show: () => this.checkFiltersDisplay(),
                button: this.getMyFiltersButton(),
            },
            {
                show: () => true,
                button: this.getFilterButton()
            },
            {
                show: () => this.listStore.widgets,
                button: this.getInsightsButton(),
            },
        ];
        const config = {
            buttonKlass: ['settings-button'],
            dropdownLabel: this.listStore.appStrings.LBL_OPTIONS || '',
            breakpoint: this.getBreakpoint(),
            dropdownOptions: {
                placement: ['bottom-right'],
                wrapperKlass: ['dropdown-button-secondary']
            },
            buttons: []
        };
        availableButtons.forEach(availableButton => {
            if (!availableButton.show) {
                config.buttons.push(availableButton.button);
                return;
            }
            if (availableButton.show()) {
                config.buttons.push(availableButton.button);
            }
        });
        return config;
    }
    checkFiltersDisplay() {
        const filters = this.listStore.filterList.getFilters() ?? [];
        const quickFilterBreakpoint = this.quickFilters.getBreakpoint();
        const totalFilters = filters.length;
        const totalQuickFilters = filters.filter(obj => obj.attributes.quick_filter).length;
        if (totalFilters > 0 && (totalQuickFilters > quickFilterBreakpoint || (totalFilters - totalQuickFilters) > 0)) {
            return true;
        }
        return false;
    }
    getFilters() {
        return this?.listStore?.recordList?.criteria?.filters ?? {};
    }
    getCurrentCriteria() {
        return this?.listStore?.recordList?.criteria ?? {};
    }
    hasActiveFilter() {
        const activeFilters = this.listStore.activeFilters;
        if (!activeFilters) {
            return false;
        }
        const filterKeys = Object.keys(activeFilters) ?? [];
        if (!filterKeys || !filterKeys.length) {
            return false;
        }
        if (filterKeys.length > 1) {
            return true;
        }
        const currentFilter = activeFilters[filterKeys[0]];
        return currentFilter.key && currentFilter.key !== '' && currentFilter.key !== 'default';
    }
    areAllCurrentCriteriaFilterEmpty() {
        return Object.keys(this.getFilters() ?? {}).every(key => this.getFilters()[key].operator === '');
    }
    isAnyFilterApplied() {
        return this.hasActiveFilter() || !this.areAllCurrentCriteriaFilterEmpty();
    }
    getBreakpoint() {
        const breakpointMap = this.systemConfigStore.getConfigValue('listview_settings_limits');
        if (this.screen && breakpointMap && breakpointMap[this.screen]) {
            this.breakpoint = breakpointMap[this.screen];
            return this.breakpoint;
        }
        if (this.breakpoint) {
            return this.breakpoint;
        }
        return this.defaultBreakpoint;
    }
    getFilterButton() {
        const groupedFilterButton = {
            type: 'grouped',
            items: []
        };
        const filterButton = {
            label: this.listStore.appStrings.LBL_FILTER || '',
            klass: {
                'filter-settings-button': true,
                'btn btn-sm settings-button': true,
                active: this.isAnyFilterApplied()
            },
            onClick: () => {
                this.listStore.showFilters = !this.listStore.showFilters;
            }
        };
        if (this.isAnyFilterApplied()) {
            filterButton.icon = 'filter';
        }
        groupedFilterButton.items.push(filterButton);
        if (this.isAnyFilterApplied()) {
            groupedFilterButton.items.push(this.getClearButton());
        }
        return groupedFilterButton;
    }
    getMyFiltersButton() {
        const filters = this.listStore.filterList.getFilters();
        const dropdownConfig = {
            label: this.listStore.appStrings.LBL_SAVED_FILTER_SHORTCUT || '',
            klass: ['dropdown-toggle'],
            wrapperKlass: ['filter-action-group'],
            items: [],
            sections: {
                'quick-filters': {
                    labelKey: 'LBL_QUICK_FILTERS'
                },
                'default': {
                    labelKey: 'LBL_SAVED_FILTER_SHORTCUT'
                },
            }
        };
        const activeFilters = this.listStore.activeFilters;
        let anyActive = false;
        let quickFilterCount = 0;
        const quickFilterBreakpoint = this.quickFilters.getBreakpoint();
        const isQuickFiltersEnabled = this.quickFilters.areConfigEnabled();
        filters.forEach((filter) => {
            const isQuickFilterButton = isTrue(filter?.attributes?.quick_filter ?? false);
            if (isQuickFiltersEnabled && isQuickFilterButton && quickFilterCount < quickFilterBreakpoint) {
                quickFilterCount++;
                return;
            }
            const isActive = Object.keys(activeFilters).some(key => key === filter.key);
            anyActive = anyActive || isActive;
            const button = {
                label: filter.attributes.name,
                section: isQuickFilterButton ? 'quick-filters' : 'default',
                onClick: () => {
                    this.listStore.showFilters = false;
                    if (isActive) {
                        this.listStore.resetFilters();
                    }
                    else {
                        this.listStore.setOpenFilter(filter);
                        const selectedFilters = {};
                        selectedFilters[filter.key] = filter;
                        this.listStore.setFilters(selectedFilters);
                    }
                }
            };
            if (isActive) {
                button.icon = 'filter';
                button.iconKlass = 'small';
                button.klass = ['active'];
            }
            dropdownConfig.items.push(button);
        });
        if (anyActive) {
            dropdownConfig.klass = ['dropdown-toggle', 'active'];
        }
        return dropdownConfig;
    }
    getClearButton() {
        return {
            label: 'x',
            titleKey: 'LBL_CLEAR_FILTER',
            klass: {
                'btn btn-sm settings-button clear-filter-button btn-main-light': true
            },
            onClick: () => {
                this.listStore.showFilters = false;
                this.listStore.resetFilters();
            }
        };
    }
    getInsightsButton() {
        return {
            label: this.listStore.appStrings.LBL_INSIGHTS || '',
            klass: {
                active: this.listStore.showSidebarWidgets
            },
            icon: 'pie',
            onClick: () => {
                this.listStore.showSidebarWidgets = !this.listStore.showSidebarWidgets;
            }
        };
    }
    static ɵfac = function SettingsMenuComponent_Factory(t) { return new (t || SettingsMenuComponent)(i0.ɵɵdirectiveInject(i1.ListViewStore), i0.ɵɵdirectiveInject(i2.NgbModal), i0.ɵɵdirectiveInject(i3.ScreenSizeObserverService), i0.ɵɵdirectiveInject(i4.SystemConfigStore), i0.ɵɵdirectiveInject(i5.QuickFiltersService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SettingsMenuComponent, selectors: [["scrm-settings-menu"]], decls: 5, vars: 4, consts: [[1, "list-view-settings", "w-100", "d-flex", "justify-content-end"], [4, "ngIf"], [1, "text-nowrap"], ["klass", "d-flex align-items-center", 3, "config$", 4, "ngIf"], ["class", "d-flex align-items-baseline", 4, "ngIf"], [1, "d-flex", "align-items-baseline"], [1, "text-nowrap", "text-muted", "fs-70", "pl-1", "mr-2"], ["labelKey", "LBL_QUICK_FILTERS"], [1, "quick-filter-border", "pr-xxl-1", "mr-xxl-1"], [3, "config$", "klass", 4, "ngIf"], [3, "config$", "klass"], ["klass", "d-flex align-items-center", 3, "config$"]], template: function SettingsMenuComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, SettingsMenuComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
            i0.ɵɵpipe(2, "async");
            i0.ɵɵelementStart(3, "div", 2);
            i0.ɵɵtemplate(4, SettingsMenuComponent_scrm_button_group_4_Template, 1, 1, "scrm-button-group", 3);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(2, 2, ctx.quickFilters.config$));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.config$);
        } }, dependencies: [i6.NgIf, i7.ButtonGroupComponent, i8.LabelComponent, i6.AsyncPipe], encapsulation: 2 });
}
export { SettingsMenuComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SettingsMenuComponent, [{
        type: Component,
        args: [{ selector: 'scrm-settings-menu', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div class=\"list-view-settings w-100 d-flex justify-content-end\">\n    <ng-container *ngIf=\"(quickFilters.config$ | async) as vm\">\n        <div *ngIf=\"showQuickFilters && enableQuickFilters\"\n             class=\"d-flex align-items-baseline\">\n            <div class=\"text-nowrap text-muted fs-70 pl-1 mr-2\">\n                <scrm-label labelKey=\"LBL_QUICK_FILTERS\"></scrm-label>\n            </div>\n            <div class=\"quick-filter-border pr-xxl-1 mr-xxl-1\">\n                <scrm-button-group *ngIf=\"quickFilters.config$\" [config$]=\"quickFilters.config$\" [klass]=\"'quick-filter-button'\"></scrm-button-group>\n            </div>\n        </div>\n    </ng-container>\n    <div class=\"text-nowrap\">\n        <scrm-button-group *ngIf=\"config$\" [config$]=\"config$\" klass=\"d-flex align-items-center\"></scrm-button-group>\n    </div>\n</div>\n" }]
    }], function () { return [{ type: i1.ListViewStore }, { type: i2.NgbModal }, { type: i3.ScreenSizeObserverService }, { type: i4.SystemConfigStore }, { type: i5.QuickFiltersService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MtbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvbGlzdC9jb21wb25lbnRzL3NldHRpbmdzLW1lbnUvc2V0dGluZ3MtbWVudS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvbGlzdC9jb21wb25lbnRzL3NldHRpbmdzLW1lbnUvc2V0dGluZ3MtbWVudS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQU9ILE1BQU0sRUFHVCxNQUFNLFFBQVEsQ0FBQztBQUVoQixPQUFPLEVBQUMsZUFBZSxFQUFFLGlCQUFpQixFQUFlLE1BQU0sTUFBTSxDQUFDO0FBR3RFLE9BQU8sRUFDSCxVQUFVLEVBRWIsTUFBTSwyRUFBMkUsQ0FBQzs7Ozs7Ozs7Ozs7SUNWbkUsd0NBQXFJOzs7SUFBckYscURBQWdDLGdDQUFBOzs7SUFOeEYsOEJBQ3lDLGFBQUE7SUFFakMsZ0NBQXNEO0lBQzFELGlCQUFNO0lBQ04sOEJBQW1EO0lBQy9DLHVIQUFxSTtJQUN6SSxpQkFBTSxFQUFBOzs7SUFEa0IsZUFBMEI7SUFBMUIsa0RBQTBCOzs7SUFQMUQsNkJBQTJEO0lBQ3ZELHFGQVFNO0lBQ1YsMEJBQWU7OztJQVRMLGVBQTRDO0lBQTVDLDJFQUE0Qzs7O0lBV2xELHdDQUE2Rzs7O0lBQTFFLHdDQUFtQjs7QURTOUQsTUFJYSxxQkFBcUI7SUFhaEI7SUFDQTtJQUNBO0lBQ0E7SUFDSDtJQWZYLFdBQVcsR0FBRyxJQUFJLGVBQWUsQ0FBdUIsRUFBQyxPQUFPLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQztJ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SUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQztZQUMzRSxDQUFDO1NBQ0osQ0FBQztJQUNOLENBQUM7K0VBOVNRLHFCQUFxQjs2REFBckIscUJBQXFCO1lDMUJsQyw4QkFBaUU7WUFDN0Qsd0ZBVWU7O1lBQ2YsOEJBQXlCO1lBQ3JCLGtHQUE2RztZQUNqSCxpQkFBTSxFQUFBOztZQWJTLGVBQXFDO1lBQXJDLHFFQUFxQztZQVk1QixlQUFhO1lBQWIsa0NBQWE7OztTRGE1QixxQkFBcUI7dUZBQXJCLHFCQUFxQjtjQUpqQyxTQUFTOzJCQUNJLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gICAgQnV0dG9uR3JvdXBJbnRlcmZhY2UsXG4gICAgQnV0dG9uSW50ZXJmYWNlLFxuICAgIERyb3Bkb3duQnV0dG9uSW50ZXJmYWNlLFxuICAgIERyb3Bkb3duQnV0dG9uU2VjdGlvbixcbiAgICBEcm9wZG93bkJ1dHRvblNlY3Rpb25NYXAsXG4gICAgR3JvdXBlZEJ1dHRvbkludGVyZmFjZSxcbiAgICBpc1RydWUsXG4gICAgU2VhcmNoQ3JpdGVyaWEsXG4gICAgU2VhcmNoQ3JpdGVyaWFGaWx0ZXJcbn0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7TmdiTW9kYWx9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBjb21iaW5lTGF0ZXN0V2l0aCwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7TGlzdFZpZXdTdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvbGlzdC12aWV3L2xpc3Qtdmlldy5zdG9yZSc7XG5pbXBvcnQge1N5c3RlbUNvbmZpZ1N0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9zeXN0ZW0tY29uZmlnL3N5c3RlbS1jb25maWcuc3RvcmUnO1xuaW1wb3J0IHtcbiAgICBTY3JlZW5TaXplLFxuICAgIFNjcmVlblNpemVPYnNlcnZlclNlcnZpY2Vcbn0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvdWkvc2NyZWVuLXNpemUtb2JzZXJ2ZXIvc2NyZWVuLXNpemUtb2JzZXJ2ZXIuc2VydmljZSc7XG5pbXBvcnQge1NhdmVkRmlsdGVyLCBTYXZlZEZpbHRlck1hcH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvc2F2ZWQtZmlsdGVycy9zYXZlZC1maWx0ZXIubW9kZWwnO1xuaW1wb3J0IHtRdWlja0ZpbHRlcnNTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvcXVpY2stZmlsdGVycy5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1zZXR0aW5ncy1tZW51JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3NldHRpbmdzLW1lbnUuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc01lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBjb25maWdTdGF0ZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8QnV0dG9uR3JvdXBJbnRlcmZhY2U+KHtidXR0b25zOiBbXX0pO1xuICAgIGNvbmZpZyQgPSB0aGlzLmNvbmZpZ1N0YXRlLmFzT2JzZXJ2YWJsZSgpO1xuICAgIHNob3dRdWlja0ZpbHRlcnMgPSB0cnVlO1xuICAgIGVuYWJsZVF1aWNrRmlsdGVycyA9IGZhbHNlO1xuXG4gICAgcHJvdGVjdGVkIHNjcmVlbjogU2NyZWVuU2l6ZSA9IFNjcmVlblNpemUuTWVkaXVtO1xuICAgIHByb3RlY3RlZCBkZWZhdWx0QnJlYWtwb2ludCA9IDU7XG4gICAgcHJvdGVjdGVkIGJyZWFrcG9pbnQ6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgbGlzdFN0b3JlOiBMaXN0Vmlld1N0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbCxcbiAgICAgICAgcHJvdGVjdGVkIHNjcmVlblNpemU6IFNjcmVlblNpemVPYnNlcnZlclNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBzeXN0ZW1Db25maWdTdG9yZTogU3lzdGVtQ29uZmlnU3RvcmUsXG4gICAgICAgIHB1YmxpYyBxdWlja0ZpbHRlcnM6IFF1aWNrRmlsdGVyc1NlcnZpY2VcbiAgICApIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb25maWdTdGF0ZS5uZXh0KHRoaXMuZ2V0QnV0dG9uR3JvdXBDb25maWcoKSk7XG5cbiAgICAgICAgY29uc3Qgdm0kID0gdGhpcy5saXN0U3RvcmUud2lkZ2V0cyQucGlwZShcbiAgICAgICAgICAgIGNvbWJpbmVMYXRlc3RXaXRoKFxuICAgICAgICAgICAgICAgIHRoaXMubGlzdFN0b3JlLmRpc3BsYXlGaWx0ZXJzJCxcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RTdG9yZS5jcml0ZXJpYSQsXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JlZW5TaXplLnNjcmVlblNpemUkLFxuICAgICAgICAgICAgICAgIHRoaXMubGlzdFN0b3JlLnNob3dTaWRlYmFyV2lkZ2V0cyQsXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0U3RvcmUuZmlsdGVyTGlzdC5yZWNvcmRzJFxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHZtJC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUZpbHRlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICBjcml0ZXJpYSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcmVlblNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93U2lkZWJhcldpZGdldHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBzYXZlZEZpbHRlcnNcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2NyZWVuU2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JlZW4gPSBzY3JlZW5TaXplO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnU3RhdGUubmV4dCh0aGlzLmdldEJ1dHRvbkdyb3VwQ29uZmlnKCkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnF1aWNrRmlsdGVycy5pbml0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMucXVpY2tGaWx0ZXJzLmJyZWFrZG93biQuc3Vic2NyaWJlKGJyZWFrZG93biA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dRdWlja0ZpbHRlcnMgPSAhaXNUcnVlKGJyZWFrZG93bik7XG4gICAgICAgIH0pKVxuXG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMucXVpY2tGaWx0ZXJzLmVuYWJsZWQkLnN1YnNjcmliZShlbmFibGVkID0+IHtcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlUXVpY2tGaWx0ZXJzID0gaXNUcnVlKGVuYWJsZWQgPz8gZmFsc2UpO1xuICAgICAgICB9KSlcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgICB9XG5cbiAgICBnZXRCdXR0b25Hcm91cENvbmZpZygpOiBCdXR0b25Hcm91cEludGVyZmFjZSB7XG5cbiAgICAgICAgY29uc3QgYXZhaWxhYmxlQnV0dG9ucyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzaG93OiAoKTogYm9vbGVhbiA9PiB0aGlzLmNoZWNrRmlsdGVyc0Rpc3BsYXkoKSxcbiAgICAgICAgICAgICAgICBidXR0b246IHRoaXMuZ2V0TXlGaWx0ZXJzQnV0dG9uKCksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNob3c6ICgpOiBib29sZWFuID0+IHRydWUsXG4gICAgICAgICAgICAgICAgYnV0dG9uOiB0aGlzLmdldEZpbHRlckJ1dHRvbigpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNob3c6ICgpOiBib29sZWFuID0+IHRoaXMubGlzdFN0b3JlLndpZGdldHMsXG4gICAgICAgICAgICAgICAgYnV0dG9uOiB0aGlzLmdldEluc2lnaHRzQnV0dG9uKCksXG4gICAgICAgICAgICB9LFxuICAgICAgICBdO1xuXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgIGJ1dHRvbktsYXNzOiBbJ3NldHRpbmdzLWJ1dHRvbiddLFxuICAgICAgICAgICAgZHJvcGRvd25MYWJlbDogdGhpcy5saXN0U3RvcmUuYXBwU3RyaW5ncy5MQkxfT1BUSU9OUyB8fCAnJyxcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IHRoaXMuZ2V0QnJlYWtwb2ludCgpLFxuICAgICAgICAgICAgZHJvcGRvd25PcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgcGxhY2VtZW50OiBbJ2JvdHRvbS1yaWdodCddLFxuICAgICAgICAgICAgICAgIHdyYXBwZXJLbGFzczogWydkcm9wZG93bi1idXR0b24tc2Vjb25kYXJ5J11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBidXR0b25zOiBbXVxuICAgICAgICB9IGFzIEJ1dHRvbkdyb3VwSW50ZXJmYWNlO1xuXG4gICAgICAgIGF2YWlsYWJsZUJ1dHRvbnMuZm9yRWFjaChhdmFpbGFibGVCdXR0b24gPT4ge1xuICAgICAgICAgICAgaWYgKCFhdmFpbGFibGVCdXR0b24uc2hvdykge1xuICAgICAgICAgICAgICAgIGNvbmZpZy5idXR0b25zLnB1c2goYXZhaWxhYmxlQnV0dG9uLmJ1dHRvbik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYXZhaWxhYmxlQnV0dG9uLnNob3coKSkge1xuICAgICAgICAgICAgICAgIGNvbmZpZy5idXR0b25zLnB1c2goYXZhaWxhYmxlQnV0dG9uLmJ1dHRvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cblxuICAgIGNoZWNrRmlsdGVyc0Rpc3BsYXkoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGZpbHRlcnMgPSB0aGlzLmxpc3RTdG9yZS5maWx0ZXJMaXN0LmdldEZpbHRlcnMoKSA/PyBbXTtcbiAgICAgICAgY29uc3QgcXVpY2tGaWx0ZXJCcmVha3BvaW50ID0gdGhpcy5xdWlja0ZpbHRlcnMuZ2V0QnJlYWtwb2ludCgpO1xuICAgICAgICBjb25zdCB0b3RhbEZpbHRlcnMgPSBmaWx0ZXJzLmxlbmd0aDtcbiAgICAgICAgY29uc3QgdG90YWxRdWlja0ZpbHRlcnMgPSBmaWx0ZXJzLmZpbHRlcihvYmogPT4gb2JqLmF0dHJpYnV0ZXMucXVpY2tfZmlsdGVyKS5sZW5ndGg7XG5cbiAgICAgICAgaWYgKHRvdGFsRmlsdGVycyA+IDAgJiYgKHRvdGFsUXVpY2tGaWx0ZXJzID4gcXVpY2tGaWx0ZXJCcmVha3BvaW50IHx8ICh0b3RhbEZpbHRlcnMgLSB0b3RhbFF1aWNrRmlsdGVycykgPiAwKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGdldEZpbHRlcnMoKTogU2VhcmNoQ3JpdGVyaWFGaWx0ZXIge1xuICAgICAgICByZXR1cm4gdGhpcz8ubGlzdFN0b3JlPy5yZWNvcmRMaXN0Py5jcml0ZXJpYT8uZmlsdGVycyA/PyB7fTtcbiAgICB9XG5cbiAgICBnZXRDdXJyZW50Q3JpdGVyaWEoKTogU2VhcmNoQ3JpdGVyaWEge1xuICAgICAgICByZXR1cm4gdGhpcz8ubGlzdFN0b3JlPy5yZWNvcmRMaXN0Py5jcml0ZXJpYSA/PyB7fTtcbiAgICB9XG5cbiAgICBoYXNBY3RpdmVGaWx0ZXIoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZUZpbHRlcnMgPSB0aGlzLmxpc3RTdG9yZS5hY3RpdmVGaWx0ZXJzO1xuICAgICAgICBpZiAoIWFjdGl2ZUZpbHRlcnMpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpbHRlcktleXMgPSBPYmplY3Qua2V5cyhhY3RpdmVGaWx0ZXJzKSA/PyBbXTtcbiAgICAgICAgaWYgKCFmaWx0ZXJLZXlzIHx8ICFmaWx0ZXJLZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZpbHRlcktleXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjdXJyZW50RmlsdGVyID0gYWN0aXZlRmlsdGVyc1tmaWx0ZXJLZXlzWzBdXTtcblxuICAgICAgICByZXR1cm4gY3VycmVudEZpbHRlci5rZXkgJiYgY3VycmVudEZpbHRlci5rZXkgIT09ICcnICYmIGN1cnJlbnRGaWx0ZXIua2V5ICE9PSAnZGVmYXVsdCdcbiAgICB9XG5cbiAgICBhcmVBbGxDdXJyZW50Q3JpdGVyaWFGaWx0ZXJFbXB0eSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZ2V0RmlsdGVycygpID8/IHt9KS5ldmVyeShrZXkgPT4gdGhpcy5nZXRGaWx0ZXJzKClba2V5XS5vcGVyYXRvciA9PT0gJycpXG4gICAgfVxuXG4gICAgaXNBbnlGaWx0ZXJBcHBsaWVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNBY3RpdmVGaWx0ZXIoKSB8fCAhdGhpcy5hcmVBbGxDdXJyZW50Q3JpdGVyaWFGaWx0ZXJFbXB0eSgpO1xuICAgIH1cblxuICAgIGdldEJyZWFrcG9pbnQoKTogbnVtYmVyIHtcblxuICAgICAgICBjb25zdCBicmVha3BvaW50TWFwID0gdGhpcy5zeXN0ZW1Db25maWdTdG9yZS5nZXRDb25maWdWYWx1ZSgnbGlzdHZpZXdfc2V0dGluZ3NfbGltaXRzJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuc2NyZWVuICYmIGJyZWFrcG9pbnRNYXAgJiYgYnJlYWtwb2ludE1hcFt0aGlzLnNjcmVlbl0pIHtcbiAgICAgICAgICAgIHRoaXMuYnJlYWtwb2ludCA9IGJyZWFrcG9pbnRNYXBbdGhpcy5zY3JlZW5dO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnJlYWtwb2ludDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmJyZWFrcG9pbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJyZWFrcG9pbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0QnJlYWtwb2ludDtcbiAgICB9XG5cblxuICAgIGdldEZpbHRlckJ1dHRvbigpOiBEcm9wZG93bkJ1dHRvbkludGVyZmFjZSB7XG5cbiAgICAgICAgY29uc3QgZ3JvdXBlZEZpbHRlckJ1dHRvbiA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdncm91cGVkJyxcbiAgICAgICAgICAgIGl0ZW1zOiBbXVxuICAgICAgICB9IGFzIEdyb3VwZWRCdXR0b25JbnRlcmZhY2U7XG5cbiAgICAgICAgY29uc3QgZmlsdGVyQnV0dG9uID0ge1xuICAgICAgICAgICAgbGFiZWw6IHRoaXMubGlzdFN0b3JlLmFwcFN0cmluZ3MuTEJMX0ZJTFRFUiB8fCAnJyxcbiAgICAgICAgICAgIGtsYXNzOiB7XG4gICAgICAgICAgICAgICAgJ2ZpbHRlci1zZXR0aW5ncy1idXR0b24nOiB0cnVlLFxuICAgICAgICAgICAgICAgICdidG4gYnRuLXNtIHNldHRpbmdzLWJ1dHRvbic6IHRydWUsXG4gICAgICAgICAgICAgICAgYWN0aXZlOiB0aGlzLmlzQW55RmlsdGVyQXBwbGllZCgpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25DbGljazogKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdFN0b3JlLnNob3dGaWx0ZXJzID0gIXRoaXMubGlzdFN0b3JlLnNob3dGaWx0ZXJzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGFzIEJ1dHRvbkludGVyZmFjZTtcblxuICAgICAgICBpZiAodGhpcy5pc0FueUZpbHRlckFwcGxpZWQoKSkge1xuICAgICAgICAgICAgZmlsdGVyQnV0dG9uLmljb24gPSAnZmlsdGVyJztcbiAgICAgICAgfVxuXG4gICAgICAgIGdyb3VwZWRGaWx0ZXJCdXR0b24uaXRlbXMucHVzaChmaWx0ZXJCdXR0b24pO1xuXG4gICAgICAgIGlmICh0aGlzLmlzQW55RmlsdGVyQXBwbGllZCgpKSB7XG4gICAgICAgICAgICBncm91cGVkRmlsdGVyQnV0dG9uLml0ZW1zLnB1c2godGhpcy5nZXRDbGVhckJ1dHRvbigpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBncm91cGVkRmlsdGVyQnV0dG9uO1xuICAgIH1cblxuICAgIGdldE15RmlsdGVyc0J1dHRvbigpOiBEcm9wZG93bkJ1dHRvbkludGVyZmFjZSB7XG4gICAgICAgIGNvbnN0IGZpbHRlcnMgPSB0aGlzLmxpc3RTdG9yZS5maWx0ZXJMaXN0LmdldEZpbHRlcnMoKTtcblxuICAgICAgICBjb25zdCBkcm9wZG93bkNvbmZpZyA9IHtcbiAgICAgICAgICAgIGxhYmVsOiB0aGlzLmxpc3RTdG9yZS5hcHBTdHJpbmdzLkxCTF9TQVZFRF9GSUxURVJfU0hPUlRDVVQgfHwgJycsXG4gICAgICAgICAgICBrbGFzczogWydkcm9wZG93bi10b2dnbGUnXSxcbiAgICAgICAgICAgIHdyYXBwZXJLbGFzczogWydmaWx0ZXItYWN0aW9uLWdyb3VwJ10sXG4gICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgICBzZWN0aW9uczoge1xuICAgICAgICAgICAgICAgICdxdWljay1maWx0ZXJzJzoge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbEtleTogJ0xCTF9RVUlDS19GSUxURVJTJ1xuICAgICAgICAgICAgICAgIH0gYXMgRHJvcGRvd25CdXR0b25TZWN0aW9uLFxuICAgICAgICAgICAgICAgICdkZWZhdWx0Jzoge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbEtleTogJ0xCTF9TQVZFRF9GSUxURVJfU0hPUlRDVVQnXG4gICAgICAgICAgICAgICAgfSBhcyBEcm9wZG93bkJ1dHRvblNlY3Rpb24sXG4gICAgICAgICAgICB9IGFzIERyb3Bkb3duQnV0dG9uU2VjdGlvbk1hcFxuICAgICAgICB9IGFzIERyb3Bkb3duQnV0dG9uSW50ZXJmYWNlO1xuXG4gICAgICAgIGNvbnN0IGFjdGl2ZUZpbHRlcnMgPSB0aGlzLmxpc3RTdG9yZS5hY3RpdmVGaWx0ZXJzO1xuXG4gICAgICAgIGxldCBhbnlBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgbGV0IHF1aWNrRmlsdGVyQ291bnQgPSAwO1xuICAgICAgICBjb25zdCBxdWlja0ZpbHRlckJyZWFrcG9pbnQgPSB0aGlzLnF1aWNrRmlsdGVycy5nZXRCcmVha3BvaW50KCk7XG4gICAgICAgIGNvbnN0IGlzUXVpY2tGaWx0ZXJzRW5hYmxlZCA9IHRoaXMucXVpY2tGaWx0ZXJzLmFyZUNvbmZpZ0VuYWJsZWQoKTtcbiAgICAgICAgZmlsdGVycy5mb3JFYWNoKChmaWx0ZXI6IFNhdmVkRmlsdGVyKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGlzUXVpY2tGaWx0ZXJCdXR0b24gPSBpc1RydWUoZmlsdGVyPy5hdHRyaWJ1dGVzPy5xdWlja19maWx0ZXIgPz8gZmFsc2UpO1xuICAgICAgICAgICAgaWYgKGlzUXVpY2tGaWx0ZXJzRW5hYmxlZCAmJiBpc1F1aWNrRmlsdGVyQnV0dG9uICYmIHF1aWNrRmlsdGVyQ291bnQgPCBxdWlja0ZpbHRlckJyZWFrcG9pbnQpIHtcbiAgICAgICAgICAgICAgICBxdWlja0ZpbHRlckNvdW50Kys7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IE9iamVjdC5rZXlzKGFjdGl2ZUZpbHRlcnMpLnNvbWUoa2V5ID0+IGtleSA9PT0gZmlsdGVyLmtleSk7XG4gICAgICAgICAgICBhbnlBY3RpdmUgPSBhbnlBY3RpdmUgfHwgaXNBY3RpdmU7XG5cbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogZmlsdGVyLmF0dHJpYnV0ZXMubmFtZSxcbiAgICAgICAgICAgICAgICBzZWN0aW9uOiBpc1F1aWNrRmlsdGVyQnV0dG9uID8gJ3F1aWNrLWZpbHRlcnMnIDogJ2RlZmF1bHQnLFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0U3RvcmUuc2hvd0ZpbHRlcnMgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdFN0b3JlLnJlc2V0RmlsdGVycygpO1xuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RTdG9yZS5zZXRPcGVuRmlsdGVyKGZpbHRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZEZpbHRlcnMgPSB7fSBhcyBTYXZlZEZpbHRlck1hcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRmlsdGVyc1tmaWx0ZXIua2V5XSA9IGZpbHRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdFN0b3JlLnNldEZpbHRlcnMoc2VsZWN0ZWRGaWx0ZXJzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBhcyBCdXR0b25JbnRlcmZhY2U7XG5cblxuICAgICAgICAgICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmljb24gPSAnZmlsdGVyJztcbiAgICAgICAgICAgICAgICBidXR0b24uaWNvbktsYXNzID0gJ3NtYWxsJztcbiAgICAgICAgICAgICAgICBidXR0b24ua2xhc3MgPSBbJ2FjdGl2ZSddO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkcm9wZG93bkNvbmZpZy5pdGVtcy5wdXNoKGJ1dHRvbik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChhbnlBY3RpdmUpIHtcbiAgICAgICAgICAgIGRyb3Bkb3duQ29uZmlnLmtsYXNzID0gWydkcm9wZG93bi10b2dnbGUnLCAnYWN0aXZlJ107XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZHJvcGRvd25Db25maWc7XG4gICAgfVxuXG4gICAgZ2V0Q2xlYXJCdXR0b24oKTogQnV0dG9uSW50ZXJmYWNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxhYmVsOiAneCcsXG4gICAgICAgICAgICB0aXRsZUtleTogJ0xCTF9DTEVBUl9GSUxURVInLFxuICAgICAgICAgICAga2xhc3M6IHtcbiAgICAgICAgICAgICAgICAnYnRuIGJ0bi1zbSBzZXR0aW5ncy1idXR0b24gY2xlYXItZmlsdGVyLWJ1dHRvbiBidG4tbWFpbi1saWdodCc6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkNsaWNrOiAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0U3RvcmUuc2hvd0ZpbHRlcnMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RTdG9yZS5yZXNldEZpbHRlcnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXRJbnNpZ2h0c0J1dHRvbigpOiBCdXR0b25JbnRlcmZhY2Uge1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsYWJlbDogdGhpcy5saXN0U3RvcmUuYXBwU3RyaW5ncy5MQkxfSU5TSUdIVFMgfHwgJycsXG4gICAgICAgICAgICBrbGFzczoge1xuICAgICAgICAgICAgICAgIGFjdGl2ZTogdGhpcy5saXN0U3RvcmUuc2hvd1NpZGViYXJXaWRnZXRzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaWNvbjogJ3BpZScsXG4gICAgICAgICAgICBvbkNsaWNrOiAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0U3RvcmUuc2hvd1NpZGViYXJXaWRnZXRzID0gIXRoaXMubGlzdFN0b3JlLnNob3dTaWRlYmFyV2lkZ2V0cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48ZGl2IGNsYXNzPVwibGlzdC12aWV3LXNldHRpbmdzIHctMTAwIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIihxdWlja0ZpbHRlcnMuY29uZmlnJCB8IGFzeW5jKSBhcyB2bVwiPlxuICAgICAgICA8ZGl2ICpuZ0lmPVwic2hvd1F1aWNrRmlsdGVycyAmJiBlbmFibGVRdWlja0ZpbHRlcnNcIlxuICAgICAgICAgICAgIGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWJhc2VsaW5lXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1ub3dyYXAgdGV4dC1tdXRlZCBmcy03MCBwbC0xIG1yLTJcIj5cbiAgICAgICAgICAgICAgICA8c2NybS1sYWJlbCBsYWJlbEtleT1cIkxCTF9RVUlDS19GSUxURVJTXCI+PC9zY3JtLWxhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicXVpY2stZmlsdGVyLWJvcmRlciBwci14eGwtMSBtci14eGwtMVwiPlxuICAgICAgICAgICAgICAgIDxzY3JtLWJ1dHRvbi1ncm91cCAqbmdJZj1cInF1aWNrRmlsdGVycy5jb25maWckXCIgW2NvbmZpZyRdPVwicXVpY2tGaWx0ZXJzLmNvbmZpZyRcIiBba2xhc3NdPVwiJ3F1aWNrLWZpbHRlci1idXR0b24nXCI+PC9zY3JtLWJ1dHRvbi1ncm91cD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8ZGl2IGNsYXNzPVwidGV4dC1ub3dyYXBcIj5cbiAgICAgICAgPHNjcm0tYnV0dG9uLWdyb3VwICpuZ0lmPVwiY29uZmlnJFwiIFtjb25maWckXT1cImNvbmZpZyRcIiBrbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj48L3Njcm0tYnV0dG9uLWdyb3VwPlxuICAgIDwvZGl2PlxuPC9kaXY+XG4iXX0=