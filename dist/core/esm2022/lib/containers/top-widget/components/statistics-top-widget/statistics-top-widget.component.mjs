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
import { BaseWidgetComponent } from '../../../widgets/base-widget.model';
import { map, take } from 'rxjs/operators';
import { combineLatestWith, of } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/language/language.store";
import * as i2 from "../../../../store/single-value-statistics/single-value-statistics.store.factory";
import * as i3 from "@angular/common";
import * as i4 from "../../../../fields/field.component";
import * as i5 from "../../../../components/inline-loading-spinner/inline-loading-spinner.component";
function StatisticsTopWidgetComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "uppercase");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const vm_r1 = i0.ɵɵnextContext().ngIf;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, vm_r1.appStrings[ctx_r2.messageLabelKey] || ""), " ");
} }
function StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_2_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "uppercase");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r5 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r11.getLabel(item_r5.value.labelKey)), ": ");
} }
function StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_2_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "uppercase");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r5 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r12 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r12.getLabel(item_r5.value.labelKey)), " ");
} }
function StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtemplate(1, StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_2_div_1_ng_container_1_Template, 3, 3, "ng-container", 6);
    i0.ɵɵtemplate(2, StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_2_div_1_ng_container_2_Template, 3, 3, "ng-container", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = i0.ɵɵnextContext(2).$implicit;
    const vm_r1 = i0.ɵɵnextContext().ngIf;
    const ctx_r10 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r10.isValueEmpty(vm_r1.statistics[item_r5.key]));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r10.isValueEmpty(vm_r1.statistics[item_r5.key]));
} }
function StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_2_div_1_Template, 3, 2, "div", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r5.value.labelKey && ctx_r6.getLabel(item_r5.value.labelKey));
} }
function StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_3_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-field", 12);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r5 = i0.ɵɵnextContext(3).$implicit;
    const vm_r1 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", vm_r1.statistics[item_r5.key].field.type)("field", vm_r1.statistics[item_r5.key].field);
} }
function StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtemplate(1, StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_3_div_1_ng_container_1_Template, 2, 2, "ng-container", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = i0.ɵɵnextContext(2).$implicit;
    const vm_r1 = i0.ɵɵnextContext().ngIf;
    const ctx_r18 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r18.isValueEmpty(vm_r1.statistics[item_r5.key]) || item_r5.value.hideValueIfEmpty !== true);
} }
function StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_3_div_1_Template, 2, 1, "div", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r5 = i0.ɵɵnextContext().$implicit;
    const vm_r1 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !vm_r1.statistics[item_r5.key].loading && vm_r1.statistics[item_r5.key].field);
} }
function StatisticsTopWidgetComponent_div_0_ng_container_2_div_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, " - ");
    i0.ɵɵelementContainerEnd();
} }
function StatisticsTopWidgetComponent_div_0_ng_container_2_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelement(1, "scrm-inline-loading-spinner");
    i0.ɵɵtemplate(2, StatisticsTopWidgetComponent_div_0_ng_container_2_div_4_ng_container_2_Template, 2, 0, "ng-container", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const loading_r26 = ctx.ngIf;
    const item_r5 = i0.ɵɵnextContext().$implicit;
    const vm_r1 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !loading_r26 && (!item_r5.key || !vm_r1.statistics[item_r5.key]));
} }
function StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "uppercase");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r30 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r30.getLabel(item_r5.value.endLabelKey)), " ");
} }
function StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_6_div_1_Template, 3, 3, "div", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r5.value.endLabelKey && ctx_r9.getLabel(item_r5.value.endLabelKey));
} }
function StatisticsTopWidgetComponent_div_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵtemplate(2, StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_2_Template, 2, 1, "ng-container", 6);
    i0.ɵɵtemplate(3, StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 6);
    i0.ɵɵtemplate(4, StatisticsTopWidgetComponent_div_0_ng_container_2_div_4_Template, 3, 1, "div", 7);
    i0.ɵɵpipe(5, "async");
    i0.ɵɵtemplate(6, StatisticsTopWidgetComponent_div_0_ng_container_2_ng_container_6_Template, 2, 1, "ng-container", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const vm_r1 = i0.ɵɵnextContext().ngIf;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r3.shouldHide(vm_r1.statistics[item_r5.key], item_r5.value));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r5.key && vm_r1.statistics[item_r5.key] && !ctx_r3.shouldHide(vm_r1.statistics[item_r5.key], item_r5.value));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(5, 4, item_r5.value.store.loading$));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r3.shouldHide(vm_r1.statistics[item_r5.key], item_r5.value));
} }
function StatisticsTopWidgetComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, StatisticsTopWidgetComponent_div_0_div_1_Template, 3, 3, "div", 2);
    i0.ɵɵtemplate(2, StatisticsTopWidgetComponent_div_0_ng_container_2_Template, 7, 6, "ng-container", 3);
    i0.ɵɵpipe(3, "keyvalue");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.messageLabelKey);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(3, 2, ctx_r0.statistics));
} }
class StatisticsTopWidgetComponent extends BaseWidgetComponent {
    language;
    factory;
    statistics = {};
    vm$;
    messageLabelKey;
    loading$;
    loading = true;
    subs = [];
    constructor(language, factory) {
        super();
        this.language = language;
        this.factory = factory;
        // Default streams so we don't crash if language store DI is missing
        this.language = language ?? { appStrings$: of({}) };
    }
    ngOnInit() {
        if (!this.context || !this.context.module) {
            this.messageLabelKey = 'LBL_CONFIG_BAD_CONTEXT';
            return;
        }
        if (!this.config) {
            this.messageLabelKey = 'LBL_CONFIG_NO_CONFIG';
            return;
        }
        if (!this.config.options || !this.config.options.statistics || !this.config.options.statistics.length) {
            this.messageLabelKey = 'LBL_CONFIG_NO_STATISTICS_KEY';
            return;
        }
        if (this.context$) {
            this.subs.push(this.context$.subscribe((context) => {
                this.context = context;
            }));
        }
        const statistics$ = [];
        const loadings$ = [];
        this.config.options.statistics.forEach(statistic => {
            if (!statistic.type) {
                return;
            }
            this.statistics[statistic.type] = {
                labelKey: statistic.labelKey || '',
                endLabelKey: statistic.endLabelKey || '',
                hideValueIfEmpty: statistic.hideValueIfEmpty || false,
                type: statistic.type,
                store: this.factory.create()
            };
            this.statistics[statistic.type].store.init(this.context.module, {
                key: statistic.type,
                context: { ...this.context }
            }).pipe(take(1)).subscribe();
            statistics$.push(this.statistics[statistic.type].store.state$);
            loadings$.push(this.statistics[statistic.type].store.loading$);
        });
        let statisticObs = null;
        if (statistics$.length < 1) {
            statisticObs = of([]);
        }
        else if (statistics$.length === 1) {
            statisticObs = statistics$[0].pipe(map(value => [value]));
        }
        else {
            let firsObs = null;
            let others;
            [firsObs, ...others] = statistics$;
            statisticObs = firsObs.pipe(combineLatestWith(others));
        }
        this.loading$ = loadings$[0].pipe(combineLatestWith(...loadings$), map((loadings) => {
            if (!loadings || loadings.length < 1) {
                this.loading = false;
                return false;
            }
            let loading = true;
            loadings.forEach(value => {
                loading = loading && value;
            });
            this.loading = loading;
            return loading;
        }));
        this.subs.push(this.loading$.subscribe());
        this.vm$ = statisticObs.pipe(combineLatestWith(this.language?.appStrings$ ?? of({})), map(([statistics, appStrings]) => {
            const statsMap = {};
            statistics.forEach(value => {
                statsMap[value.query.key] = value;
                this.statistics[value.query.key].labelKey = this.getMetadataEntry(value, 'labelKey');
                this.statistics[value.query.key].endLabelKey = this.getMetadataEntry(value, 'endLabelKey');
            });
            return {
                statistics: statsMap,
                appStrings
            };
        }));
        if (this.config.reload$) {
            this.subs.push(this.config.reload$.subscribe(() => {
                if (this.loading === false) {
                    this.loading = true;
                    this.config.options.statistics.forEach(statistic => {
                        if (!statistic.type) {
                            return;
                        }
                        if (!this.statistics[statistic.type] || !this.statistics[statistic.type].store) {
                            return;
                        }
                        this.statistics[statistic.type].store.load(false).pipe(take(1)).subscribe();
                    });
                }
            }));
        }
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    /**
     * Check if statistics should be hidden
     * @param stats
     * @param item
     */
    shouldHide(stats, item) {
        return this.hasLoaded(stats) && this.isValueEmpty(stats) && item.hideIfEmpty === true;
    }
    /**
     * Check if statistics have been loaded
     * @param stats
     */
    hasLoaded(stats) {
        return !stats.loading;
    }
    /**
     * Check if value is empty
     * @param stats
     */
    isValueEmpty(stats) {
        const emptyValue = stats?.statistic?.metadata?.emptyValueString ?? null;
        if (emptyValue !== null) {
            return true;
        }
        const value = stats?.field?.value ?? null;
        if (value) {
            return false;
        }
        return emptyValue === value;
    }
    /**
     * Get metadata entry for statistic
     * @param stat
     * @param name
     */
    getMetadataEntry(stat, name) {
        const value = stat.statistic.metadata && stat.statistic.metadata[name];
        if (value !== null && typeof value !== 'undefined') {
            return value;
        }
        return this.statistics[stat.query.key][name];
    }
    /**
     * Get label value
     * @param key
     */
    getLabel(key) {
        const context = this.context || {};
        const module = context.module || '';
        return this.language.getFieldLabel(key, module);
    }
    static ɵfac = function StatisticsTopWidgetComponent_Factory(t) { return new (t || StatisticsTopWidgetComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i2.SingleValueStatisticsStoreFactory)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StatisticsTopWidgetComponent, selectors: [["scrm-statistics-top-widget"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 3, consts: [["class", "d-flex justify-content-center widget-bar rounded", 4, "ngIf"], [1, "d-flex", "justify-content-center", "widget-bar", "rounded"], ["class", "p-2 widget-bar-entry-message", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "p-2", "widget-bar-entry-message"], [1, "d-flex", "justify-content-center", "align-items-baseline", "widget-bar-entry", "p-2"], [4, "ngIf"], ["class", "pl-1 pr-1 widget-bar-entry-loading", 4, "ngIf"], ["class", "pr-1 widget-bar-entry-label", 4, "ngIf"], [1, "pr-1", "widget-bar-entry-label"], ["class", "pl-1 pr-1 widget-bar-entry-value", 4, "ngIf"], [1, "pl-1", "pr-1", "widget-bar-entry-value"], ["mode", "list", 3, "type", "field"], [1, "pl-1", "pr-1", "widget-bar-entry-loading"], ["class", "pl-1 widget-bar-entry-end-label", 4, "ngIf"], [1, "pl-1", "widget-bar-entry-end-label"]], template: function StatisticsTopWidgetComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, StatisticsTopWidgetComponent_div_0_Template, 4, 4, "div", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.vm$));
        } }, dependencies: [i3.NgForOf, i3.NgIf, i4.FieldComponent, i5.InlineLoadingSpinnerComponent, i3.AsyncPipe, i3.UpperCasePipe, i3.KeyValuePipe], encapsulation: 2 });
}
export { StatisticsTopWidgetComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StatisticsTopWidgetComponent, [{
        type: Component,
        args: [{ selector: 'scrm-statistics-top-widget', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div *ngIf=\"(vm$ | async) as vm\"\n     class=\"d-flex justify-content-center widget-bar rounded\">\n    <div class=\"p-2 widget-bar-entry-message\" *ngIf=\"this.messageLabelKey\">\n        {{vm.appStrings[this.messageLabelKey] || '' | uppercase}}\n    </div>\n    <ng-container *ngFor=\"let item of statistics | keyvalue\">\n\n        <div class=\"d-flex justify-content-center align-items-baseline widget-bar-entry p-2\">\n\n            <ng-container *ngIf=\"!shouldHide(vm.statistics[item.key], item.value)\">\n\n                <div *ngIf=\"item.value.labelKey && getLabel(item.value.labelKey)\" class=\"pr-1 widget-bar-entry-label\">\n                    <ng-container *ngIf=\"!isValueEmpty(vm.statistics[item.key])\">\n                        {{getLabel(item.value.labelKey) | uppercase}}:\n                    </ng-container>\n                    <ng-container *ngIf=\"isValueEmpty(vm.statistics[item.key])\">\n                        {{getLabel(item.value.labelKey) | uppercase}}\n                    </ng-container>\n                </div>\n\n            </ng-container>\n\n            <ng-container\n                *ngIf=\"item.key && vm.statistics[item.key] && !shouldHide(vm.statistics[item.key], item.value)\">\n\n                <div class=\"pl-1 pr-1 widget-bar-entry-value\"\n                     *ngIf=\"!vm.statistics[item.key].loading && vm.statistics[item.key].field\">\n                    <ng-container\n                        *ngIf=\"!isValueEmpty(vm.statistics[item.key]) || item.value.hideValueIfEmpty !== true\">\n                        <scrm-field [type]=\"vm.statistics[item.key].field.type\" [field]=\"vm.statistics[item.key].field\"\n                                    mode=\"list\"></scrm-field>\n\n                    </ng-container>\n                </div>\n\n            </ng-container>\n\n            <div class=\"pl-1 pr-1 widget-bar-entry-loading\" *ngIf=\"(item.value.store.loading$ | async) as loading\">\n                <scrm-inline-loading-spinner></scrm-inline-loading-spinner>\n\n                <ng-container *ngIf=\"!loading && (!item.key || !vm.statistics[item.key])\">\n                    -\n                </ng-container>\n            </div>\n\n            <ng-container *ngIf=\"!shouldHide(vm.statistics[item.key], item.value)\">\n\n                <div *ngIf=\"item.value.endLabelKey && getLabel(item.value.endLabelKey)\"\n                     class=\"pl-1 widget-bar-entry-end-label\">\n                    {{getLabel(item.value.endLabelKey) | uppercase}}\n                </div>\n\n            </ng-container>\n\n        </div>\n\n    </ng-container>\n</div>\n" }]
    }], function () { return [{ type: i1.LanguageStore }, { type: i2.SingleValueStatisticsStoreFactory }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGlzdGljcy10b3Atd2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb250YWluZXJzL3RvcC13aWRnZXQvY29tcG9uZW50cy9zdGF0aXN0aWNzLXRvcC13aWRnZXQvc3RhdGlzdGljcy10b3Atd2lkZ2V0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb250YWluZXJzL3RvcC13aWRnZXQvY29tcG9uZW50cy9zdGF0aXN0aWNzLXRvcC13aWRnZXQvc3RhdGlzdGljcy10b3Atd2lkZ2V0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUt2RSxPQUFPLEVBQUMsR0FBRyxFQUFFLElBQUksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRXpDLE9BQU8sRUFBQyxpQkFBaUIsRUFBYyxFQUFFLEVBQWUsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7O0lDTGpFLDhCQUF1RTtJQUNuRSxZQUNKOztJQUFBLGlCQUFNOzs7O0lBREYsZUFDSjtJQURJLHFHQUNKOzs7SUFRZ0IsNkJBQTZEO0lBQ3pELFlBQ0o7O0lBQUEsMEJBQWU7Ozs7SUFEWCxlQUNKO0lBREksZ0dBQ0o7OztJQUNBLDZCQUE0RDtJQUN4RCxZQUNKOztJQUFBLDBCQUFlOzs7O0lBRFgsZUFDSjtJQURJLCtGQUNKOzs7SUFOSiw4QkFBc0c7SUFDbEcseUlBRWU7SUFDZix5SUFFZTtJQUNuQixpQkFBTTs7Ozs7SUFOYSxlQUE0QztJQUE1QywyRUFBNEM7SUFHNUMsZUFBMkM7SUFBM0MsMEVB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QTRCO3VGQUE1Qiw0QkFBNEI7Y0FMeEMsU0FBUzsyQkFDSSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Jhc2VXaWRnZXRDb21wb25lbnR9IGZyb20gJy4uLy4uLy4uL3dpZGdldHMvYmFzZS13aWRnZXQubW9kZWwnO1xuaW1wb3J0IHtTaW5nbGVWYWx1ZVN0YXRpc3RpY3NTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvc2luZ2xlLXZhbHVlLXN0YXRpc3RpY3Mvc2luZ2xlLXZhbHVlLXN0YXRpc3RpY3Muc3RvcmUnO1xuaW1wb3J0IHtcbiAgICBTaW5nbGVWYWx1ZVN0YXRpc3RpY3NTdG9yZUZhY3Rvcnlcbn0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvc2luZ2xlLXZhbHVlLXN0YXRpc3RpY3Mvc2luZ2xlLXZhbHVlLXN0YXRpc3RpY3Muc3RvcmUuZmFjdG9yeSc7XG5pbXBvcnQge21hcCwgdGFrZX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlLCBMYW5ndWFnZVN0cmluZ01hcH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtjb21iaW5lTGF0ZXN0V2l0aCwgT2JzZXJ2YWJsZSwgb2YsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1NpbmdsZVZhbHVlU3RhdGlzdGljc1N0YXRlLCBTdGF0aXN0aWNzUXVlcnksIFZpZXdDb250ZXh0fSBmcm9tICdjb21tb24nO1xuXG5pbnRlcmZhY2UgU3RhdGlzdGljc1RvcFdpZGdldFN0YXRlIHtcbiAgICBzdGF0aXN0aWNzOiB7IFtrZXk6IHN0cmluZ106IFNpbmdsZVZhbHVlU3RhdGlzdGljc1N0YXRlIH07XG4gICAgYXBwU3RyaW5nczogTGFuZ3VhZ2VTdHJpbmdNYXA7XG59XG5cbmludGVyZmFjZSBTdGF0aXN0aWNzRW50cnkge1xuICAgIGxhYmVsS2V5OiBzdHJpbmc7XG4gICAgZW5kTGFiZWxLZXk/OiBzdHJpbmc7XG4gICAgaGlkZVZhbHVlSWZFbXB0eT86IGJvb2xlYW47XG4gICAgaGlkZUlmRW1wdHk/OiBib29sZWFuO1xuICAgIHR5cGU6IHN0cmluZztcbiAgICBzdG9yZTogU2luZ2xlVmFsdWVTdGF0aXN0aWNzU3RvcmU7XG59XG5cbmludGVyZmFjZSBTdGF0aXN0aWNzRW50cnlNYXAge1xuICAgIFtrZXk6IHN0cmluZ106IFN0YXRpc3RpY3NFbnRyeTtcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLXN0YXRpc3RpY3MtdG9wLXdpZGdldCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3N0YXRpc3RpY3MtdG9wLXdpZGdldC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBTdGF0aXN0aWNzVG9wV2lkZ2V0Q29tcG9uZW50IGV4dGVuZHMgQmFzZVdpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBzdGF0aXN0aWNzOiBTdGF0aXN0aWNzRW50cnlNYXAgPSB7fTtcbiAgICB2bSQ6IE9ic2VydmFibGU8U3RhdGlzdGljc1RvcFdpZGdldFN0YXRlPjtcbiAgICBtZXNzYWdlTGFiZWxLZXk6IHN0cmluZztcbiAgICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBwcm90ZWN0ZWQgbG9hZGluZyA9IHRydWU7XG4gICAgcHJvdGVjdGVkIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgZmFjdG9yeTogU2luZ2xlVmFsdWVTdGF0aXN0aWNzU3RvcmVGYWN0b3J5XG4gICAgKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIC8vIERlZmF1bHQgc3RyZWFtcyBzbyB3ZSBkb24ndCBjcmFzaCBpZiBsYW5ndWFnZSBzdG9yZSBESSBpcyBtaXNzaW5nXG4gICAgICAgICh0aGlzIGFzIGFueSkubGFuZ3VhZ2UgPSBsYW5ndWFnZSA/PyB7YXBwU3RyaW5ncyQ6IG9mKHt9KX07XG4gICAgfVxuXG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgICAgICBpZiAoIXRoaXMuY29udGV4dCB8fCAhdGhpcy5jb250ZXh0Lm1vZHVsZSkge1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlTGFiZWxLZXkgPSAnTEJMX0NPTkZJR19CQURfQ09OVEVYVCc7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuY29uZmlnKSB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VMYWJlbEtleSA9ICdMQkxfQ09ORklHX05PX0NPTkZJRyc7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuY29uZmlnLm9wdGlvbnMgfHwgIXRoaXMuY29uZmlnLm9wdGlvbnMuc3RhdGlzdGljcyB8fCAhdGhpcy5jb25maWcub3B0aW9ucy5zdGF0aXN0aWNzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlTGFiZWxLZXkgPSAnTEJMX0NPTkZJR19OT19TVEFUSVNUSUNTX0tFWSc7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb250ZXh0JCkge1xuICAgICAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5jb250ZXh0JC5zdWJzY3JpYmUoKGNvbnRleHQ6IFZpZXdDb250ZXh0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN0YXRpc3RpY3MkOiBPYnNlcnZhYmxlPFNpbmdsZVZhbHVlU3RhdGlzdGljc1N0YXRlPltdID0gW107XG4gICAgICAgIGNvbnN0IGxvYWRpbmdzJDogT2JzZXJ2YWJsZTxib29sZWFuPltdID0gW107XG4gICAgICAgIHRoaXMuY29uZmlnLm9wdGlvbnMuc3RhdGlzdGljcy5mb3JFYWNoKHN0YXRpc3RpYyA9PiB7XG5cbiAgICAgICAgICAgIGlmICghc3RhdGlzdGljLnR5cGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc3RhdGlzdGljc1tzdGF0aXN0aWMudHlwZV0gPSB7XG4gICAgICAgICAgICAgICAgbGFiZWxLZXk6IHN0YXRpc3RpYy5sYWJlbEtleSB8fCAnJyxcbiAgICAgICAgICAgICAgICBlbmRMYWJlbEtleTogc3RhdGlzdGljLmVuZExhYmVsS2V5IHx8ICcnLFxuICAgICAgICAgICAgICAgIGhpZGVWYWx1ZUlmRW1wdHk6IHN0YXRpc3RpYy5oaWRlVmFsdWVJZkVtcHR5IHx8IGZhbHNlLFxuICAgICAgICAgICAgICAgIHR5cGU6IHN0YXRpc3RpYy50eXBlLFxuICAgICAgICAgICAgICAgIHN0b3JlOiB0aGlzLmZhY3RvcnkuY3JlYXRlKClcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuc3RhdGlzdGljc1tzdGF0aXN0aWMudHlwZV0uc3RvcmUuaW5pdChcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQubW9kdWxlLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBzdGF0aXN0aWMudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dDogey4uLnRoaXMuY29udGV4dH1cbiAgICAgICAgICAgICAgICB9IGFzIFN0YXRpc3RpY3NRdWVyeSxcbiAgICAgICAgICAgICkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKTtcblxuICAgICAgICAgICAgc3RhdGlzdGljcyQucHVzaCh0aGlzLnN0YXRpc3RpY3Nbc3RhdGlzdGljLnR5cGVdLnN0b3JlLnN0YXRlJCk7XG4gICAgICAgICAgICBsb2FkaW5ncyQucHVzaCh0aGlzLnN0YXRpc3RpY3Nbc3RhdGlzdGljLnR5cGVdLnN0b3JlLmxvYWRpbmckKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHN0YXRpc3RpY09icyA9IG51bGw7XG5cbiAgICAgICAgaWYoc3RhdGlzdGljcyQubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgc3RhdGlzdGljT2JzID0gb2YoW10pO1xuICAgICAgICB9IGVsc2UgaWYoc3RhdGlzdGljcyQubGVuZ3RoID09PSAxKXtcbiAgICAgICAgICAgIHN0YXRpc3RpY09icyA9IHN0YXRpc3RpY3MkWzBdLnBpcGUoXG4gICAgICAgICAgICAgICAgbWFwKHZhbHVlID0+IFt2YWx1ZV0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGZpcnNPYnMgPSBudWxsO1xuICAgICAgICAgICAgbGV0IG90aGVycztcbiAgICAgICAgICAgIFtmaXJzT2JzLCAuLi5vdGhlcnNdID0gc3RhdGlzdGljcyQ7XG4gICAgICAgICAgICBzdGF0aXN0aWNPYnMgPSBmaXJzT2JzLnBpcGUoXG4gICAgICAgICAgICAgICAgY29tYmluZUxhdGVzdFdpdGgob3RoZXJzKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgdGhpcy5sb2FkaW5nJCA9IGxvYWRpbmdzJFswXS5waXBlKFxuICAgICAgICAgICAgY29tYmluZUxhdGVzdFdpdGgoLi4ubG9hZGluZ3MkKSxcbiAgICAgICAgICAgIG1hcCgobG9hZGluZ3MpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWxvYWRpbmdzIHx8IGxvYWRpbmdzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgbG9hZGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBsb2FkaW5ncy5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZyA9IGxvYWRpbmcgJiYgdmFsdWU7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBsb2FkaW5nO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvYWRpbmc7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMubG9hZGluZyQuc3Vic2NyaWJlKCkpO1xuXG4gICAgICB0aGlzLnZtJCA9IHN0YXRpc3RpY09icy5waXBlKFxuICAgICAgICAgIGNvbWJpbmVMYXRlc3RXaXRoKHRoaXMubGFuZ3VhZ2U/LmFwcFN0cmluZ3MkID8/IG9mKHt9KSksXG4gICAgICAgICAgbWFwKChbc3RhdGlzdGljcywgYXBwU3RyaW5nc10pID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3RhdHNNYXA6IHsgW2tleTogc3RyaW5nXTogU2luZ2xlVmFsdWVTdGF0aXN0aWNzU3RhdGUgfSA9IHt9O1xuICAgICAgICAgICAgICBzdGF0aXN0aWNzLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgICAgc3RhdHNNYXBbdmFsdWUucXVlcnkua2V5XSA9IHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRpc3RpY3NbdmFsdWUucXVlcnkua2V5XS5sYWJlbEtleSA9IHRoaXMuZ2V0TWV0YWRhdGFFbnRyeSh2YWx1ZSwgJ2xhYmVsS2V5Jyk7XG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRpc3RpY3NbdmFsdWUucXVlcnkua2V5XS5lbmRMYWJlbEtleSA9IHRoaXMuZ2V0TWV0YWRhdGFFbnRyeSh2YWx1ZSwgJ2VuZExhYmVsS2V5Jyk7XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICBzdGF0aXN0aWNzOiBzdGF0c01hcCxcbiAgICAgICAgICAgICAgICAgIGFwcFN0cmluZ3NcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgICAgICBpZiAodGhpcy5jb25maWcucmVsb2FkJCkge1xuICAgICAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5jb25maWcucmVsb2FkJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvYWRpbmcgPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWcub3B0aW9ucy5zdGF0aXN0aWNzLmZvckVhY2goc3RhdGlzdGljID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzdGF0aXN0aWMudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRpc3RpY3Nbc3RhdGlzdGljLnR5cGVdIHx8ICF0aGlzLnN0YXRpc3RpY3Nbc3RhdGlzdGljLnR5cGVdLnN0b3JlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRpc3RpY3Nbc3RhdGlzdGljLnR5cGVdLnN0b3JlLmxvYWQoZmFsc2UpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cblxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHN0YXRpc3RpY3Mgc2hvdWxkIGJlIGhpZGRlblxuICAgICAqIEBwYXJhbSBzdGF0c1xuICAgICAqIEBwYXJhbSBpdGVtXG4gICAgICovXG4gICAgc2hvdWxkSGlkZShzdGF0czogU2luZ2xlVmFsdWVTdGF0aXN0aWNzU3RhdGUsIGl0ZW06IFN0YXRpc3RpY3NFbnRyeSkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNMb2FkZWQoc3RhdHMpICYmIHRoaXMuaXNWYWx1ZUVtcHR5KHN0YXRzKSAmJiBpdGVtLmhpZGVJZkVtcHR5ID09PSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHN0YXRpc3RpY3MgaGF2ZSBiZWVuIGxvYWRlZFxuICAgICAqIEBwYXJhbSBzdGF0c1xuICAgICAqL1xuICAgIGhhc0xvYWRlZChzdGF0czogU2luZ2xlVmFsdWVTdGF0aXN0aWNzU3RhdGUpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICFzdGF0cy5sb2FkaW5nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHZhbHVlIGlzIGVtcHR5XG4gICAgICogQHBhcmFtIHN0YXRzXG4gICAgICovXG4gICAgaXNWYWx1ZUVtcHR5KHN0YXRzOiBTaW5nbGVWYWx1ZVN0YXRpc3RpY3NTdGF0ZSkge1xuICAgICAgICBjb25zdCBlbXB0eVZhbHVlID0gc3RhdHM/LnN0YXRpc3RpYz8ubWV0YWRhdGE/LmVtcHR5VmFsdWVTdHJpbmcgPz8gbnVsbDtcbiAgICAgICAgaWYgKGVtcHR5VmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdmFsdWUgPSBzdGF0cz8uZmllbGQ/LnZhbHVlID8/IG51bGw7XG5cbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZW1wdHlWYWx1ZSA9PT0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IG1ldGFkYXRhIGVudHJ5IGZvciBzdGF0aXN0aWNcbiAgICAgKiBAcGFyYW0gc3RhdFxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICovXG4gICAgZ2V0TWV0YWRhdGFFbnRyeShzdGF0OiBTaW5nbGVWYWx1ZVN0YXRpc3RpY3NTdGF0ZSwgbmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBzdGF0LnN0YXRpc3RpYy5tZXRhZGF0YSAmJiBzdGF0LnN0YXRpc3RpYy5tZXRhZGF0YVtuYW1lXTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRpc3RpY3Nbc3RhdC5xdWVyeS5rZXldW25hbWVdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBsYWJlbCB2YWx1ZVxuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKi9cbiAgICBnZXRMYWJlbChrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQgfHwge30gYXMgVmlld0NvbnRleHQ7XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IGNvbnRleHQubW9kdWxlIHx8ICcnO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmxhbmd1YWdlLmdldEZpZWxkTGFiZWwoa2V5LCBtb2R1bGUpO1xuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxkaXYgKm5nSWY9XCIodm0kIHwgYXN5bmMpIGFzIHZtXCJcbiAgICAgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciB3aWRnZXQtYmFyIHJvdW5kZWRcIj5cbiAgICA8ZGl2IGNsYXNzPVwicC0yIHdpZGdldC1iYXItZW50cnktbWVzc2FnZVwiICpuZ0lmPVwidGhpcy5tZXNzYWdlTGFiZWxLZXlcIj5cbiAgICAgICAge3t2bS5hcHBTdHJpbmdzW3RoaXMubWVzc2FnZUxhYmVsS2V5XSB8fCAnJyB8IHVwcGVyY2FzZX19XG4gICAgPC9kaXY+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzdGF0aXN0aWNzIHwga2V5dmFsdWVcIj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtYmFzZWxpbmUgd2lkZ2V0LWJhci1lbnRyeSBwLTJcIj5cblxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFzaG91bGRIaWRlKHZtLnN0YXRpc3RpY3NbaXRlbS5rZXldLCBpdGVtLnZhbHVlKVwiPlxuXG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIml0ZW0udmFsdWUubGFiZWxLZXkgJiYgZ2V0TGFiZWwoaXRlbS52YWx1ZS5sYWJlbEtleSlcIiBjbGFzcz1cInByLTEgd2lkZ2V0LWJhci1lbnRyeS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWlzVmFsdWVFbXB0eSh2bS5zdGF0aXN0aWNzW2l0ZW0ua2V5XSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7Z2V0TGFiZWwoaXRlbS52YWx1ZS5sYWJlbEtleSkgfCB1cHBlcmNhc2V9fTpcbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc1ZhbHVlRW1wdHkodm0uc3RhdGlzdGljc1tpdGVtLmtleV0pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e2dldExhYmVsKGl0ZW0udmFsdWUubGFiZWxLZXkpIHwgdXBwZXJjYXNlfX1cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJpdGVtLmtleSAmJiB2bS5zdGF0aXN0aWNzW2l0ZW0ua2V5XSAmJiAhc2hvdWxkSGlkZSh2bS5zdGF0aXN0aWNzW2l0ZW0ua2V5XSwgaXRlbS52YWx1ZSlcIj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbC0xIHByLTEgd2lkZ2V0LWJhci1lbnRyeS12YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIiF2bS5zdGF0aXN0aWNzW2l0ZW0ua2V5XS5sb2FkaW5nICYmIHZtLnN0YXRpc3RpY3NbaXRlbS5rZXldLmZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiIWlzVmFsdWVFbXB0eSh2bS5zdGF0aXN0aWNzW2l0ZW0ua2V5XSkgfHwgaXRlbS52YWx1ZS5oaWRlVmFsdWVJZkVtcHR5ICE9PSB0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1maWVsZCBbdHlwZV09XCJ2bS5zdGF0aXN0aWNzW2l0ZW0ua2V5XS5maWVsZC50eXBlXCIgW2ZpZWxkXT1cInZtLnN0YXRpc3RpY3NbaXRlbS5rZXldLmZpZWxkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9XCJsaXN0XCI+PC9zY3JtLWZpZWxkPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsLTEgcHItMSB3aWRnZXQtYmFyLWVudHJ5LWxvYWRpbmdcIiAqbmdJZj1cIihpdGVtLnZhbHVlLnN0b3JlLmxvYWRpbmckIHwgYXN5bmMpIGFzIGxvYWRpbmdcIj5cbiAgICAgICAgICAgICAgICA8c2NybS1pbmxpbmUtbG9hZGluZy1zcGlubmVyPjwvc2NybS1pbmxpbmUtbG9hZGluZy1zcGlubmVyPlxuXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFsb2FkaW5nICYmICghaXRlbS5rZXkgfHwgIXZtLnN0YXRpc3RpY3NbaXRlbS5rZXldKVwiPlxuICAgICAgICAgICAgICAgICAgICAtXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFzaG91bGRIaWRlKHZtLnN0YXRpc3RpY3NbaXRlbS5rZXldLCBpdGVtLnZhbHVlKVwiPlxuXG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIml0ZW0udmFsdWUuZW5kTGFiZWxLZXkgJiYgZ2V0TGFiZWwoaXRlbS52YWx1ZS5lbmRMYWJlbEtleSlcIlxuICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwbC0xIHdpZGdldC1iYXItZW50cnktZW5kLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7Z2V0TGFiZWwoaXRlbS52YWx1ZS5lbmRMYWJlbEtleSkgfCB1cHBlcmNhc2V9fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICA8L2Rpdj5cblxuICAgIDwvbmctY29udGFpbmVyPlxuPC9kaXY+XG4iXX0=