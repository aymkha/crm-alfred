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
import { deepClone, isFalse, isTrue } from 'common';
import { of } from 'rxjs';
import { BaseWidgetComponent } from '../../../widgets/base-widget.model';
import { distinctUntilChanged, filter, map, shareReplay } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/language/language.store";
import * as i2 from "../../../../store/system-config/system-config.store";
import * as i3 from "@angular/common";
import * as i4 from "../../../../components/widget-panel/widget-panel.component";
import * as i5 from "../../../../components/label/label.component";
import * as i6 from "../../../record-thread/components/record-thread/record-thread.component";
function RecordThreadSidebarWidgetComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelement(2, "scrm-label", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
function RecordThreadSidebarWidgetComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-record-thread", 5);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("config", ctx_r1.recordThreadConfig);
} }
class RecordThreadSidebarWidgetComponent extends BaseWidgetComponent {
    language;
    sytemConfig;
    panelMode = 'none';
    options;
    recordThreadConfig;
    filters$;
    presetFields$;
    subs = [];
    constructor(language, sytemConfig) {
        super();
        this.language = language;
        this.sytemConfig = sytemConfig;
    }
    ngOnInit() {
        const options = this.config.options || {};
        this.options = options.recordThread || null;
        if (!this.options) {
            return;
        }
        this.initPanelMode();
        this.initFilters$();
        this.initPresetFields$();
        if (this.context$ && this.context$.subscribe()) {
            this.subs.push(this.context$.subscribe((context) => {
                this.context = context;
            }));
        }
        this.recordThreadConfig = this.getConfig();
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    getHeaderLabel() {
        return this.getLabel(this.config.labelKey) || '';
    }
    getLabel(key) {
        const context = this.context || {};
        const module = context.module || '';
        return this.language.getFieldLabel(key, module);
    }
    getConfig() {
        const config = {
            filters$: this.filters$,
            presetFields$: this.presetFields$,
            module: this.options.module,
            klass: this.options.class || '',
            maxListHeight: this.options.maxListHeight ?? 350,
            direction: this.options.direction || 'asc',
            create: !!this.options.create,
            itemConfig: {
                collapsible: this.options.item.collapsible || false,
                collapseLimit: this.options.item.collapseLimit || null,
                klass: this.options.item.itemClass || '',
                dynamicClass: this.options.item.dynamicClass || [],
                metadata: {}
            },
            createConfig: {
                collapsible: false,
                metadata: {}
            },
        };
        this.setupItemMetadata(config.itemConfig.metadata, this.options.item.layout);
        this.setupItemMetadata(config.createConfig.metadata, this.options.create.layout);
        return config;
    }
    setupItemMetadata(metadata, config) {
        if (config && config.header) {
            metadata.headerLayout = deepClone(config.header);
        }
        if (config && config.body) {
            metadata.bodyLayout = deepClone(config.body);
        }
        if (config && config.actions) {
            metadata.actions = deepClone(config.actions);
        }
        if (config && config.fields) {
            metadata.fields = deepClone(config.fields);
        }
        if ((config?.collapseActions ?? null) !== null) {
            metadata.collapseActions = config?.collapseActions;
        }
    }
    initPanelMode() {
        const ui = this.sytemConfig.getConfigValue('ui');
        const systemDefault = ui?.widget?.allowCollapse ?? null;
        const allowCollapse = this?.config?.allowCollapse ?? null;
        let mode = 'none';
        if (systemDefault !== null) {
            if (isTrue(systemDefault)) {
                mode = 'collapsible';
            }
            else if (isFalse(systemDefault)) {
                mode = 'none';
            }
        }
        if (allowCollapse !== null) {
            if (isTrue(allowCollapse)) {
                mode = 'collapsible';
            }
            else if (isFalse(allowCollapse)) {
                mode = 'none';
            }
        }
        this.panelMode = mode;
    }
    initFilters$() {
        if (!this.options || !this.options.filters || !this.context$) {
            return;
        }
        const parentFilters = this.options.filters.parentFilters || {};
        let context$ = of({}).pipe(shareReplay());
        if (Object.keys(parentFilters).length > 0) {
            context$ = this.context$.pipe(filter(context => {
                const record = (context && context.record) || {};
                return !!(record.attributes && Object.keys(record.attributes).length);
            }));
        }
        this.filters$ = context$.pipe(map(context => {
            const filters = { filters: {} };
            this.initParentFilters(context, filters);
            const staticFilters = this.options.filters.static || {};
            filters.filters = {
                ...filters.filters,
                ...staticFilters
            };
            if (this.options.filters.orderBy) {
                filters.orderBy = this.options.filters.orderBy;
            }
            if (this.options.filters.sortOrder) {
                filters.sortOrder = this.options.filters.sortOrder;
            }
            return filters;
        }), distinctUntilChanged());
    }
    initPresetFields$() {
        if (!this.options || !this.options.create || !this.options.create.presetFields || !this.context$) {
            return;
        }
        this.presetFields$ = this.context$.pipe(map(context => {
            const parentValues = this.initParentValues(context);
            const staticValues = this.options.create.presetFields.static || {};
            return {
                ...parentValues,
                ...staticValues
            };
        }), distinctUntilChanged());
    }
    initParentFilters(context, filters) {
        const parentFilters = this.options.filters.parentFilters || {};
        if (!context || !context.record || !parentFilters) {
            return;
        }
        Object.keys(parentFilters).forEach(parentField => {
            const field = parentFilters[parentField];
            const value = context.record.attributes[parentField] || '';
            if (!value) {
                return;
            }
            filters.filters[field] = {
                field: parentFilters,
                operator: '=',
                values: [value],
            };
        });
    }
    initParentValues(context) {
        const parentValues = this.options.create.presetFields.parentValues || {};
        if (!context || !context.record || !parentValues) {
            return;
        }
        const attributes = {};
        Object.keys(parentValues).forEach(parentField => {
            const field = parentValues[parentField];
            const value = context.record.attributes[parentField] || '';
            if (!value) {
                return;
            }
            attributes[field] = value;
        });
        return attributes;
    }
    static ɵfac = function RecordThreadSidebarWidgetComponent_Factory(t) { return new (t || RecordThreadSidebarWidgetComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i2.SystemConfigStore)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RecordThreadSidebarWidgetComponent, selectors: [["scrm-record-thread-sidebar-widget"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 4, consts: [[3, "mode", "title"], ["widget-body", "", 1, "record-thread-sidebar-widget"], [4, "ngIf"], [1, "p-3", "widget-message"], ["labelKey", "LBL_BAD_CONFIG"], [3, "config"]], template: function RecordThreadSidebarWidgetComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "scrm-widget-panel", 0)(1, "div", 1);
            i0.ɵɵtemplate(2, RecordThreadSidebarWidgetComponent_ng_container_2_Template, 3, 0, "ng-container", 2);
            i0.ɵɵtemplate(3, RecordThreadSidebarWidgetComponent_ng_container_3_Template, 2, 1, "ng-container", 2);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("mode", ctx.panelMode)("title", ctx.getHeaderLabel());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.options);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.options);
        } }, dependencies: [i3.NgIf, i4.WidgetPanelComponent, i5.LabelComponent, i6.RecordThreadComponent], encapsulation: 2 });
}
export { RecordThreadSidebarWidgetComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordThreadSidebarWidgetComponent, [{
        type: Component,
        args: [{ selector: 'scrm-record-thread-sidebar-widget', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<scrm-widget-panel [mode]=\"panelMode\" [title]=\"getHeaderLabel()\">\n    <div class=\"record-thread-sidebar-widget\" widget-body>\n\n        <ng-container *ngIf=\"!options\">\n            <div class=\"p-3 widget-message\">\n                <scrm-label labelKey=\"LBL_BAD_CONFIG\"></scrm-label>\n            </div>\n        </ng-container>\n\n        <ng-container *ngIf=\"options\">\n            <scrm-record-thread [config]=\"recordThreadConfig\"></scrm-record-thread>\n        </ng-container>\n\n    </div>\n</scrm-widget-panel>\n" }]
    }], function () { return [{ type: i1.LanguageStore }, { type: i2.SystemConfigStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLXRocmVhZC1zaWRlYmFyLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9zaWRlYmFyLXdpZGdldC9jb21wb25lbnRzL3JlY29yZC10aHJlYWQtc2lkZWJhci13aWRnZXQvcmVjb3JkLXRocmVhZC1zaWRlYmFyLXdpZGdldC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9zaWRlYmFyLXdpZGdldC9jb21wb25lbnRzL3JlY29yZC10aHJlYWQtc2lkZWJhci13aWRnZXQvcmVjb3JkLXRocmVhZC1zaWRlYmFyLXdpZGdldC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUVILFNBQVMsRUFFVCxPQUFPLEVBQ1AsTUFBTSxFQU1ULE1BQU0sUUFBUSxDQUFDO0FBQ2hCLE9BQU8sRUFBYSxFQUFFLEVBQWUsTUFBTSxNQUFNLENBQUM7QUFFbEQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDdkUsT0FBTyxFQUFDLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7OztJQ1p0RSw2QkFBK0I7SUFDM0IsOEJBQWdDO0lBQzVCLGdDQUFtRDtJQUN2RCxpQkFBTTtJQUNWLDBCQUFlOzs7SUFFZiw2QkFBOEI7SUFDMUIsd0NBQXVFO0lBQzNFLDBCQUFlOzs7SUFEUyxlQUE2QjtJQUE3QixrREFBNkI7O0FEYTdELE1BS2Esa0NBQW1DLFNBQVEsbUJBQW1CO0lBcUN6RDtJ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QUE7O1lBYlMsb0NBQWtCLCtCQUFBO1lBR2QsZUFBYztZQUFkLG1DQUFjO1lBTWQsZUFBYTtZQUFiLGtDQUFhOzs7U0RtQnZCLGtDQUFrQzt1RkFBbEMsa0NBQWtDO2NBTDlDLFNBQVM7MkJBQ0ksbUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgICBBdHRyaWJ1dGVNYXAsXG4gICAgZGVlcENsb25lLFxuICAgIEZpZWxkRGVmaW5pdGlvbk1hcCxcbiAgICBpc0ZhbHNlLFxuICAgIGlzVHJ1ZSxcbiAgICBSZWNvcmQsXG4gICAgU2VhcmNoQ3JpdGVyaWEsXG4gICAgU2VhcmNoQ3JpdGVyaWFGaWx0ZXIsXG4gICAgU3RyaW5nTWFwLFxuICAgIFZpZXdDb250ZXh0XG59IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge09ic2VydmFibGUsIG9mLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge0Jhc2VXaWRnZXRDb21wb25lbnR9IGZyb20gJy4uLy4uLy4uL3dpZGdldHMvYmFzZS13aWRnZXQubW9kZWwnO1xuaW1wb3J0IHtkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAsIHNoYXJlUmVwbGF5fSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICAgIFJlY29yZFRocmVhZENvbmZpZyxcbiAgICBUaHJlYWRJdGVtTWV0YWRhdGFDb25maWdcbn0gZnJvbSAnLi4vLi4vLi4vcmVjb3JkLXRocmVhZC9jb21wb25lbnRzL3JlY29yZC10aHJlYWQvcmVjb3JkLXRocmVhZC5tb2RlbCc7XG5pbXBvcnQge1JlY29yZFRocmVhZEl0ZW1NZXRhZGF0YX0gZnJvbSAnLi4vLi4vLi4vcmVjb3JkLXRocmVhZC9zdG9yZS9yZWNvcmQtdGhyZWFkL3JlY29yZC10aHJlYWQtaXRlbS5zdG9yZS5tb2RlbCc7XG5pbXBvcnQge1N5c3RlbUNvbmZpZ1N0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9zeXN0ZW0tY29uZmlnL3N5c3RlbS1jb25maWcuc3RvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tcmVjb3JkLXRocmVhZC1zaWRlYmFyLXdpZGdldCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3JlY29yZC10aHJlYWQtc2lkZWJhci13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgUmVjb3JkVGhyZWFkU2lkZWJhcldpZGdldENvbXBvbmVudCBleHRlbmRzIEJhc2VXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBwYW5lbE1vZGU6ICdjb2xsYXBzaWJsZScgfCAnY2xvc2FibGUnIHwgJ25vbmUnID0gJ25vbmUnO1xuICAgIG9wdGlvbnM6IHtcbiAgICAgICAgbW9kdWxlOiBzdHJpbmc7XG4gICAgICAgIGNsYXNzPzogc3RyaW5nO1xuICAgICAgICBtYXhMaXN0SGVpZ2h0PzogbnVtYmVyO1xuICAgICAgICBkaXJlY3Rpb24/OiAnYXNjJyB8ICdkZXNjJztcbiAgICAgICAgaXRlbToge1xuICAgICAgICAgICAgZHluYW1pY0NsYXNzPzogc3RyaW5nW107XG4gICAgICAgICAgICBpdGVtQ2xhc3M/OiBzdHJpbmc7XG4gICAgICAgICAgICBjb2xsYXBzaWJsZT86IGJvb2xlYW47XG4gICAgICAgICAgICBjb2xsYXBzZUxpbWl0PzogbnVtYmVyO1xuICAgICAgICAgICAgbGF5b3V0PzogVGhyZWFkSXRlbU1ldGFkYXRhQ29uZmlnO1xuICAgICAgICAgICAgZmllbGRzPzogRmllbGREZWZpbml0aW9uTWFwO1xuICAgICAgICB9LFxuICAgICAgICBjcmVhdGU6IHtcbiAgICAgICAgICAgIHByZXNldEZpZWxkcz86IHtcbiAgICAgICAgICAgICAgICBwYXJlbnRWYWx1ZXM/OiBTdHJpbmdNYXA7XG4gICAgICAgICAgICAgICAgc3RhdGljPzogQXR0cmlidXRlTWFwO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxheW91dD86IFRocmVhZEl0ZW1NZXRhZGF0YUNvbmZpZztcbiAgICAgICAgfSxcbiAgICAgICAgZmlsdGVycz86IHtcbiAgICAgICAgICAgIHBhcmVudEZpbHRlcnM/OiBTdHJpbmdNYXA7XG4gICAgICAgICAgICBzdGF0aWM/OiBTZWFyY2hDcml0ZXJpYUZpbHRlcjtcbiAgICAgICAgICAgIG9yZGVyQnk/OiBzdHJpbmc7XG4gICAgICAgICAgICBzb3J0T3JkZXI/OiBzdHJpbmc7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICByZWNvcmRUaHJlYWRDb25maWc6IFJlY29yZFRocmVhZENvbmZpZztcblxuICAgIGZpbHRlcnMkOiBPYnNlcnZhYmxlPFNlYXJjaENyaXRlcmlhPjtcbiAgICBwcmVzZXRGaWVsZHMkOiBPYnNlcnZhYmxlPEF0dHJpYnV0ZU1hcD47XG4gICAgcHJvdGVjdGVkIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgc3l0ZW1Db25maWc6IFN5c3RlbUNvbmZpZ1N0b3JlXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuY29uZmlnLm9wdGlvbnMgfHwge307XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMucmVjb3JkVGhyZWFkIHx8IG51bGw7XG5cbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5pdFBhbmVsTW9kZSgpO1xuICAgICAgICB0aGlzLmluaXRGaWx0ZXJzJCgpO1xuICAgICAgICB0aGlzLmluaXRQcmVzZXRGaWVsZHMkKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29udGV4dCQgJiYgdGhpcy5jb250ZXh0JC5zdWJzY3JpYmUoKSkge1xuICAgICAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5jb250ZXh0JC5zdWJzY3JpYmUoKGNvbnRleHQ6IFZpZXdDb250ZXh0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVjb3JkVGhyZWFkQ29uZmlnID0gdGhpcy5nZXRDb25maWcoKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgICB9XG5cbiAgICBnZXRIZWFkZXJMYWJlbCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRMYWJlbCh0aGlzLmNvbmZpZy5sYWJlbEtleSkgfHwgJyc7XG4gICAgfVxuXG4gICAgZ2V0TGFiZWwoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0IHx8IHt9IGFzIFZpZXdDb250ZXh0O1xuICAgICAgICBjb25zdCBtb2R1bGUgPSBjb250ZXh0Lm1vZHVsZSB8fCAnJztcblxuICAgICAgICByZXR1cm4gdGhpcy5sYW5ndWFnZS5nZXRGaWVsZExhYmVsKGtleSwgbW9kdWxlKTtcbiAgICB9XG5cbiAgICBnZXRDb25maWcoKTogUmVjb3JkVGhyZWFkQ29uZmlnIHtcblxuICAgICAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgICAgICBmaWx0ZXJzJDogdGhpcy5maWx0ZXJzJCxcbiAgICAgICAgICAgIHByZXNldEZpZWxkcyQ6IHRoaXMucHJlc2V0RmllbGRzJCxcbiAgICAgICAgICAgIG1vZHVsZTogdGhpcy5vcHRpb25zLm1vZHVsZSxcbiAgICAgICAgICAgIGtsYXNzOiB0aGlzLm9wdGlvbnMuY2xhc3MgfHwgJycsXG4gICAgICAgICAgICBtYXhMaXN0SGVpZ2h0OiB0aGlzLm9wdGlvbnMubWF4TGlzdEhlaWdodCA/PyAzNTAsXG4gICAgICAgICAgICBkaXJlY3Rpb246IHRoaXMub3B0aW9ucy5kaXJlY3Rpb24gfHwgJ2FzYycsXG4gICAgICAgICAgICBjcmVhdGU6ICEhdGhpcy5vcHRpb25zLmNyZWF0ZSxcbiAgICAgICAgICAgIGl0ZW1Db25maWc6IHtcbiAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZTogdGhpcy5vcHRpb25zLml0ZW0uY29sbGFwc2libGUgfHwgZmFsc2UsXG4gICAgICAgICAgICAgICAgY29sbGFwc2VMaW1pdDogdGhpcy5vcHRpb25zLml0ZW0uY29sbGFwc2VMaW1pdCB8fCBudWxsLFxuICAgICAgICAgICAgICAgIGtsYXNzOiB0aGlzLm9wdGlvbnMuaXRlbS5pdGVtQ2xhc3MgfHwgJycsXG4gICAgICAgICAgICAgICAgZHluYW1pY0NsYXNzOiB0aGlzLm9wdGlvbnMuaXRlbS5keW5hbWljQ2xhc3MgfHwgW10sXG4gICAgICAgICAgICAgICAgbWV0YWRhdGE6IHt9IGFzIFJlY29yZFRocmVhZEl0ZW1NZXRhZGF0YVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWF0ZUNvbmZpZzoge1xuICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBtZXRhZGF0YToge30gYXMgUmVjb3JkVGhyZWFkSXRlbU1ldGFkYXRhXG4gICAgICAgICAgICB9LFxuICAgICAgICB9IGFzIFJlY29yZFRocmVhZENvbmZpZztcblxuICAgICAgICB0aGlzLnNldHVwSXRlbU1ldGFkYXRhKGNvbmZpZy5pdGVtQ29uZmlnLm1ldGFkYXRhLCB0aGlzLm9wdGlvbnMuaXRlbS5sYXlvdXQpO1xuICAgICAgICB0aGlzLnNldHVwSXRlbU1ldGFkYXRhKGNvbmZpZy5jcmVhdGVDb25maWcubWV0YWRhdGEsIHRoaXMub3B0aW9ucy5jcmVhdGUubGF5b3V0KTtcblxuICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZXR1cEl0ZW1NZXRhZGF0YShtZXRhZGF0YTogUmVjb3JkVGhyZWFkSXRlbU1ldGFkYXRhLCBjb25maWc6IFRocmVhZEl0ZW1NZXRhZGF0YUNvbmZpZykge1xuICAgICAgICBpZiAoY29uZmlnICYmIGNvbmZpZy5oZWFkZXIpIHtcbiAgICAgICAgICAgIG1ldGFkYXRhLmhlYWRlckxheW91dCA9IGRlZXBDbG9uZShjb25maWcuaGVhZGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcgJiYgY29uZmlnLmJvZHkpIHtcbiAgICAgICAgICAgIG1ldGFkYXRhLmJvZHlMYXlvdXQgPSBkZWVwQ2xvbmUoY29uZmlnLmJvZHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZyAmJiBjb25maWcuYWN0aW9ucykge1xuICAgICAgICAgICAgbWV0YWRhdGEuYWN0aW9ucyA9IGRlZXBDbG9uZShjb25maWcuYWN0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnICYmIGNvbmZpZy5maWVsZHMpIHtcbiAgICAgICAgICAgIG1ldGFkYXRhLmZpZWxkcyA9IGRlZXBDbG9uZShjb25maWcuZmllbGRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgoY29uZmlnPy5jb2xsYXBzZUFjdGlvbnMgPz8gbnVsbCkgIT09IG51bGwpIHtcbiAgICAgICAgICAgIG1ldGFkYXRhLmNvbGxhcHNlQWN0aW9ucyA9IGNvbmZpZz8uY29sbGFwc2VBY3Rpb25zO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgaW5pdFBhbmVsTW9kZSgpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCB1aSA9IHRoaXMuc3l0ZW1Db25maWcuZ2V0Q29uZmlnVmFsdWUoJ3VpJyk7XG4gICAgICAgIGNvbnN0IHN5c3RlbURlZmF1bHQgPSB1aT8ud2lkZ2V0Py5hbGxvd0NvbGxhcHNlID8/IG51bGw7XG4gICAgICAgIGNvbnN0IGFsbG93Q29sbGFwc2UgPSB0aGlzPy5jb25maWc/LmFsbG93Q29sbGFwc2UgPz8gbnVsbDtcblxuICAgICAgICBsZXQgbW9kZTogJ2NvbGxhcHNpYmxlJyB8ICdjbG9zYWJsZScgfCAnbm9uZScgPSAnbm9uZSc7XG5cbiAgICAgICAgaWYgKHN5c3RlbURlZmF1bHQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChpc1RydWUoc3lzdGVtRGVmYXVsdCkpIHtcbiAgICAgICAgICAgICAgICBtb2RlID0gJ2NvbGxhcHNpYmxlJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNGYWxzZShzeXN0ZW1EZWZhdWx0KSkge1xuICAgICAgICAgICAgICAgIG1vZGUgPSAnbm9uZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhbGxvd0NvbGxhcHNlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoaXNUcnVlKGFsbG93Q29sbGFwc2UpKSB7XG4gICAgICAgICAgICAgICAgbW9kZSA9ICdjb2xsYXBzaWJsZSc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzRmFsc2UoYWxsb3dDb2xsYXBzZSkpIHtcbiAgICAgICAgICAgICAgICBtb2RlID0gJ25vbmUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBhbmVsTW9kZSA9IG1vZGU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluaXRGaWx0ZXJzJCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMgfHwgIXRoaXMub3B0aW9ucy5maWx0ZXJzIHx8ICF0aGlzLmNvbnRleHQkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXJlbnRGaWx0ZXJzID0gdGhpcy5vcHRpb25zLmZpbHRlcnMucGFyZW50RmlsdGVycyB8fCB7fSBhcyBTdHJpbmdNYXA7XG5cbiAgICAgICAgbGV0IGNvbnRleHQkID0gb2Yoe30pLnBpcGUoc2hhcmVSZXBsYXkoKSk7XG5cbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHBhcmVudEZpbHRlcnMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnRleHQkID0gdGhpcy5jb250ZXh0JC5waXBlKFxuICAgICAgICAgICAgICAgIGZpbHRlcihjb250ZXh0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVjb3JkID0gKGNvbnRleHQgJiYgY29udGV4dC5yZWNvcmQpIHx8IHt9IGFzIFJlY29yZDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEhKHJlY29yZC5hdHRyaWJ1dGVzICYmIE9iamVjdC5rZXlzKHJlY29yZC5hdHRyaWJ1dGVzKS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5maWx0ZXJzJCA9IGNvbnRleHQkLnBpcGUoXG4gICAgICAgICAgICBtYXAoY29udGV4dCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlsdGVycyA9IHtmaWx0ZXJzOiB7fSBhcyBTZWFyY2hDcml0ZXJpYUZpbHRlcn0gYXMgU2VhcmNoQ3JpdGVyaWE7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmluaXRQYXJlbnRGaWx0ZXJzKGNvbnRleHQsIGZpbHRlcnMpO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGljRmlsdGVycyA9IHRoaXMub3B0aW9ucy5maWx0ZXJzLnN0YXRpYyB8fCB7fSBhcyBTZWFyY2hDcml0ZXJpYUZpbHRlcjtcblxuICAgICAgICAgICAgICAgIGZpbHRlcnMuZmlsdGVycyA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uZmlsdGVycy5maWx0ZXJzLFxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0aWNGaWx0ZXJzXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZmlsdGVycy5vcmRlckJ5KSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcnMub3JkZXJCeSA9IHRoaXMub3B0aW9ucy5maWx0ZXJzLm9yZGVyQnk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5maWx0ZXJzLnNvcnRPcmRlcikge1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzLnNvcnRPcmRlciA9IHRoaXMub3B0aW9ucy5maWx0ZXJzLnNvcnRPcmRlcjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZmlsdGVycztcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0UHJlc2V0RmllbGRzJCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMgfHwgIXRoaXMub3B0aW9ucy5jcmVhdGUgfHwgIXRoaXMub3B0aW9ucy5jcmVhdGUucHJlc2V0RmllbGRzIHx8ICF0aGlzLmNvbnRleHQkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuXG4gICAgICAgIHRoaXMucHJlc2V0RmllbGRzJCA9IHRoaXMuY29udGV4dCQucGlwZShcbiAgICAgICAgICAgIG1hcChjb250ZXh0ID0+IHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudFZhbHVlcyA9IHRoaXMuaW5pdFBhcmVudFZhbHVlcyhjb250ZXh0KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRpY1ZhbHVlcyA9IHRoaXMub3B0aW9ucy5jcmVhdGUucHJlc2V0RmllbGRzLnN0YXRpYyB8fCB7fSBhcyBBdHRyaWJ1dGVNYXA7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgLi4ucGFyZW50VmFsdWVzLFxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0aWNWYWx1ZXNcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluaXRQYXJlbnRGaWx0ZXJzKGNvbnRleHQsIGZpbHRlcnMpIHtcblxuICAgICAgICBjb25zdCBwYXJlbnRGaWx0ZXJzID0gdGhpcy5vcHRpb25zLmZpbHRlcnMucGFyZW50RmlsdGVycyB8fCB7fSBhcyBTdHJpbmdNYXA7XG4gICAgICAgIGlmICghY29udGV4dCB8fCAhY29udGV4dC5yZWNvcmQgfHwgIXBhcmVudEZpbHRlcnMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5rZXlzKHBhcmVudEZpbHRlcnMpLmZvckVhY2gocGFyZW50RmllbGQgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmllbGQgPSBwYXJlbnRGaWx0ZXJzW3BhcmVudEZpZWxkXTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gY29udGV4dC5yZWNvcmQuYXR0cmlidXRlc1twYXJlbnRGaWVsZF0gfHwgJyc7XG5cbiAgICAgICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZpbHRlcnMuZmlsdGVyc1tmaWVsZF0gPSB7XG4gICAgICAgICAgICAgICAgZmllbGQ6IHBhcmVudEZpbHRlcnMsXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6ICc9JyxcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IFt2YWx1ZV0sXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0UGFyZW50VmFsdWVzKGNvbnRleHQ6IFZpZXdDb250ZXh0KTogQXR0cmlidXRlTWFwIHtcblxuICAgICAgICBjb25zdCBwYXJlbnRWYWx1ZXMgPSB0aGlzLm9wdGlvbnMuY3JlYXRlLnByZXNldEZpZWxkcy5wYXJlbnRWYWx1ZXMgfHwge30gYXMgU3RyaW5nTWFwO1xuICAgICAgICBpZiAoIWNvbnRleHQgfHwgIWNvbnRleHQucmVjb3JkIHx8ICFwYXJlbnRWYWx1ZXMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSB7fSBhcyBBdHRyaWJ1dGVNYXA7XG5cbiAgICAgICAgT2JqZWN0LmtleXMocGFyZW50VmFsdWVzKS5mb3JFYWNoKHBhcmVudEZpZWxkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gcGFyZW50VmFsdWVzW3BhcmVudEZpZWxkXTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gY29udGV4dC5yZWNvcmQuYXR0cmlidXRlc1twYXJlbnRGaWVsZF0gfHwgJyc7XG5cbiAgICAgICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGF0dHJpYnV0ZXNbZmllbGRdID0gdmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhdHRyaWJ1dGVzO1xuICAgIH1cblxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPHNjcm0td2lkZ2V0LXBhbmVsIFttb2RlXT1cInBhbmVsTW9kZVwiIFt0aXRsZV09XCJnZXRIZWFkZXJMYWJlbCgpXCI+XG4gICAgPGRpdiBjbGFzcz1cInJlY29yZC10aHJlYWQtc2lkZWJhci13aWRnZXRcIiB3aWRnZXQtYm9keT5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIW9wdGlvbnNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLTMgd2lkZ2V0LW1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICA8c2NybS1sYWJlbCBsYWJlbEtleT1cIkxCTF9CQURfQ09ORklHXCI+PC9zY3JtLWxhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJvcHRpb25zXCI+XG4gICAgICAgICAgICA8c2NybS1yZWNvcmQtdGhyZWFkIFtjb25maWddPVwicmVjb3JkVGhyZWFkQ29uZmlnXCI+PC9zY3JtLXJlY29yZC10aHJlYWQ+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPC9kaXY+XG48L3Njcm0td2lkZ2V0LXBhbmVsPlxuIl19