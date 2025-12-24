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
import { combineLatestWith, of } from 'rxjs';
import { map, shareReplay, take } from 'rxjs/operators';
import { isTrue, } from 'common';
import * as i0 from "@angular/core";
import * as i1 from "../../store/language/language.store";
import * as i2 from "../../store/single-value-statistics/single-value-statistics.store.factory";
import * as i3 from "@angular/common";
import * as i4 from "../../fields/field.component";
import * as i5 from "../inline-loading-spinner/inline-loading-spinner.component";
import * as i6 from "../label/label.component";
import * as i7 from "../image/image.component";
import * as i8 from "../dynamic-label/dynamic-label.component";
import * as i9 from "@ng-bootstrap/ng-bootstrap";
function GridWidgetComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelement(1, "scrm-label", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("labelKey", ctx_r0.messageLabelKey);
} }
function GridWidgetComponent_div_1_ng_container_1_div_2_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelement(2, "scrm-image", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const col_r6 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("image", col_r6.icon)("klass", col_r6.iconClass);
} }
function GridWidgetComponent_div_1_ng_container_1_div_2_ng_container_1_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵelement(1, "scrm-field", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const statistics_r15 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", statistics_r15.field.type)("field", statistics_r15.field);
} }
function GridWidgetComponent_div_1_ng_container_1_div_2_ng_container_1_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵelement(1, "scrm-inline-loading-spinner");
    i0.ɵɵelementEnd();
} }
function GridWidgetComponent_div_1_ng_container_1_div_2_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, GridWidgetComponent_div_1_ng_container_1_div_2_ng_container_1_ng_container_2_div_1_Template, 2, 2, "div", 10);
    i0.ɵɵtemplate(2, GridWidgetComponent_div_1_ng_container_1_div_2_ng_container_1_ng_container_2_div_2_Template, 2, 0, "div", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const statistics_r15 = ctx.ngIf;
    const ctx_r9 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", statistics_r15.field);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", statistics_r15.loading && ctx_r9.loading);
} }
function GridWidgetComponent_div_1_ng_container_1_div_2_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 15);
    i0.ɵɵelement(2, "scrm-label", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const col_r6 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r10 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("labelKey", col_r6.labelKey)("module", ctx_r10.getContextModule());
} }
function GridWidgetComponent_div_1_ng_container_1_div_2_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 17)(2, "label");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const vm_r2 = i0.ɵɵnextContext(4).ngIf;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(vm_r2.description);
} }
function GridWidgetComponent_div_1_ng_container_1_div_2_ng_container_1_ng_container_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵelement(1, "scrm-dynamic-label", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r6 = i0.ɵɵnextContext(3).$implicit;
    const vm_r2 = i0.ɵɵnextContext(2).ngIf;
    const ctx_r21 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("context", ctx_r21.getMessageContext())("fields", ctx_r21.getMessageFields(vm_r2.statistics))("labelKey", col_r6.dynamicLabel);
} }
function GridWidgetComponent_div_1_ng_container_1_div_2_ng_container_1_ng_container_5_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵelement(1, "scrm-inline-loading-spinner");
    i0.ɵɵelementEnd();
} }
function GridWidgetComponent_div_1_ng_container_1_div_2_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, GridWidgetComponent_div_1_ng_container_1_div_2_ng_container_1_ng_container_5_div_1_Template, 2, 3, "div", 18);
    i0.ɵɵtemplate(2, GridWidgetComponent_div_1_ng_container_1_div_2_ng_container_1_ng_container_5_div_2_Template, 2, 0, "div", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r12.loading);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r12.loading);
} }
function GridWidgetComponent_div_1_ng_container_1_div_2_ng_container_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtext(2, " - ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const col_r6 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r13 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("widget-entry-value ", ctx_r13.getSizeClass(col_r6.size), "");
} }
function GridWidgetComponent_div_1_ng_container_1_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, GridWidgetComponent_div_1_ng_container_1_div_2_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 7);
    i0.ɵɵtemplate(2, GridWidgetComponent_div_1_ng_container_1_div_2_ng_container_1_ng_container_2_Template, 3, 2, "ng-container", 7);
    i0.ɵɵtemplate(3, GridWidgetComponent_div_1_ng_container_1_div_2_ng_container_1_ng_container_3_Template, 3, 2, "ng-container", 7);
    i0.ɵɵtemplate(4, GridWidgetComponent_div_1_ng_container_1_div_2_ng_container_1_ng_container_4_Template, 4, 1, "ng-container", 7);
    i0.ɵɵtemplate(5, GridWidgetComponent_div_1_ng_container_1_div_2_ng_container_1_ng_container_5_Template, 3, 2, "ng-container", 7);
    i0.ɵɵtemplate(6, GridWidgetComponent_div_1_ng_container_1_div_2_ng_container_1_ng_container_6_Template, 3, 3, "ng-container", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const col_r6 = i0.ɵɵnextContext().$implicit;
    const vm_r2 = i0.ɵɵnextContext(2).ngIf;
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", col_r6.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", col_r6.statistic && vm_r2.statistics[col_r6.statistic]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", col_r6.labelKey);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", col_r6.descriptionKey);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", col_r6.dynamicLabel);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", col_r6.statistic && !ctx_r7.loading && (!vm_r2.statistics[col_r6.statistic].field || vm_r2.statistics[col_r6.statistic].field && ctx_r7.isEmptyFieldValue(vm_r2.statistics[col_r6.statistic].field.value)));
} }
function GridWidgetComponent_div_1_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, GridWidgetComponent_div_1_ng_container_1_div_2_ng_container_1_Template, 7, 6, "ng-container", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r6 = ctx.$implicit;
    const ctx_r5 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate2("", ctx_r5.getColClass(), " ", ctx_r5.getClass(col_r6), "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", col_r6.display !== "hidden");
} }
function GridWidgetComponent_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, GridWidgetComponent_div_1_ng_container_1_div_2_Template, 2, 5, "div", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate4("d-flex ", ctx_r3.getJustify(item_r4.justify), " ", ctx_r3.getAlign(item_r4.align), " ", ctx_r3.getRowClass(), " ", ctx_r3.getLayoutRowClass(item_r4), "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", item_r4.cols);
} }
function GridWidgetComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtemplate(1, GridWidgetComponent_div_1_ng_container_1_Template, 3, 7, "ng-container", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const vm_r2 = ctx.ngIf;
    i0.ɵɵpropertyInterpolate("ngbTooltip", vm_r2.tooltipTitleText);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", vm_r2.layout);
} }
class GridWidgetComponent {
    language;
    factory;
    config;
    vm$;
    loading = true;
    messageLabelKey;
    subs = [];
    statistics = {};
    loading$;
    gridWidgetInput;
    constructor(language, factory) {
        this.language = language;
        this.factory = factory;
    }
    ngOnInit() {
        const isValid = this.validateConfig();
        if (!isValid) {
            return;
        }
        this.gridWidgetInput = this.config;
        this.buildStatistics();
        this.setupLoading$();
        this.setupVM();
        this.setupReload();
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    validateConfig() {
        if (!this.config || !this.config.layout) {
            this.messageLabelKey = 'LBL_CONFIG_NO_CONFIG';
            return false;
        }
        if (!this.config.queryArgs.context || !this.config.queryArgs.module) {
            this.messageLabelKey = 'LBL_CONFIG_BAD_CONTEXT';
            return false;
        }
        if (!this.config.widgetConfig) {
            this.messageLabelKey = 'LBL_CONFIG_NO_CONFIG';
            return false;
        }
        if (!this.config.layout || !this.config.layout.rows) {
            this.messageLabelKey = 'LBL_CONFIG_NO_STATISTICS_KEY';
            return false;
        }
        return true;
    }
    getRowClass() {
        return this.gridWidgetInput.rowClass;
    }
    getColClass() {
        return this.gridWidgetInput.columnClass;
    }
    getContextModule() {
        return this.gridWidgetInput.queryArgs.context.module;
    }
    getMessageContext() {
        const module = this.getContextModule();
        if (!module) {
            return {};
        }
        return {
            module
        };
    }
    getMessageFields(statistics) {
        if (!statistics || !Object.keys(statistics).length) {
            return {};
        }
        const fields = {};
        Object.keys(statistics).forEach(key => {
            const statistic = statistics[key];
            fields[key] = statistic.field;
        });
        return fields;
    }
    getSizeClass(size) {
        const sizeMap = {
            regular: 'text-regular',
            medium: 'text-medium',
            large: 'text-large',
            'x-large': 'text-x-large',
            'xx-large': 'text-xx-large',
            huge: 'text-huge'
        };
        return sizeMap[size] || 'text-regular';
    }
    getFontWeight(bold) {
        let fontWeight = 'font-weight-normal';
        if (bold && isTrue(bold)) {
            fontWeight = 'font-weight-bolder';
        }
        return fontWeight;
    }
    getColor(color) {
        const sizeMap = {
            yellow: 'text-yellow',
            blue: 'text-blue',
            green: 'text-green',
            red: 'text-red',
            purple: 'text-purple',
            dark: 'text-dark',
            grey: 'text-grey'
        };
        return sizeMap[color] || '';
    }
    getJustify(justify) {
        const justifyMap = {
            start: 'justify-content-start',
            end: 'justify-content-end',
            center: 'justify-content-center',
            between: 'justify-content-between',
            around: 'justify-content-around'
        };
        return justifyMap[justify] || 'justify-content-center';
    }
    getAlign(align) {
        const alignMap = {
            start: 'align-items-start',
            end: 'align-items-end',
            center: 'align-items-center',
            baseline: 'align-items-baseline',
            stretch: 'align-items-stretch'
        };
        return alignMap[align] || 'align-items-center';
    }
    getLayoutRowClass(row) {
        let className = '';
        if (row && row.class) {
            className = row.class;
        }
        return className;
    }
    getClass(layoutCol) {
        let className = '';
        if (layoutCol) {
            className = layoutCol.class;
        }
        className = className + ' '
            + this.getSizeClass(layoutCol.size) + ' '
            + this.getFontWeight(layoutCol.bold) + ' '
            + this.getColor(layoutCol.color);
        return className;
    }
    isEmptyFieldValue(fieldValue) {
        // Handle the cases, when input value is an string, array, objects or any other type
        if (typeof fieldValue === 'string') {
            fieldValue = fieldValue.trim();
        }
        return fieldValue == null
            || typeof fieldValue === 'undefined'
            || fieldValue === ''
            || fieldValue.length === 0;
    }
    getLabel(statisticMetadata, attribute) {
        let label = '';
        if (statisticMetadata && statisticMetadata[attribute]) {
            label = this.language.getFieldLabel(statisticMetadata[attribute]);
        }
        return label;
    }
    getLayout() {
        return this.gridWidgetInput.layout.rows;
    }
    buildStatistics() {
        this.gridWidgetInput.layout.rows.forEach(row => {
            if (!row.cols || !row.cols.length) {
                return;
            }
            row.cols.forEach(col => {
                if (!col.statistic) {
                    return;
                }
                if (col.store) {
                    this.statistics[col.statistic] = {
                        type: col.statistic,
                        store: col.store
                    };
                    return;
                }
                this.statistics[col.statistic] = {
                    type: col.statistic,
                    store: this.factory.create()
                };
                this.statistics[col.statistic].store.init(this.gridWidgetInput.queryArgs.module, {
                    key: col.statistic,
                    context: { ...this.gridWidgetInput.queryArgs.context },
                    params: { ...this.gridWidgetInput.queryArgs.params }
                }).pipe(take(1)).subscribe();
            });
        });
    }
    setupLoading$() {
        const loadings$ = [];
        Object.keys(this.statistics).forEach(type => loadings$.push(this.statistics[type].store.loading$));
        let statisticObs = of([]);
        if (loadings$.length < 1) {
            statisticObs = of([]);
        }
        else if (loadings$.length === 1) {
            statisticObs = loadings$[0].pipe(map(value => [value]));
        }
        else {
            let firsObs = null;
            let others;
            [firsObs, ...others] = loadings$;
            statisticObs = firsObs.pipe(combineLatestWith(others));
        }
        this.loading$ = statisticObs.pipe(map((loadings) => {
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
    }
    setupReload() {
        if (this.gridWidgetInput.widgetConfig.reload$) {
            this.subs.push(this.gridWidgetInput.widgetConfig.reload$.subscribe(() => {
                if (this.loading === false) {
                    this.loading = true;
                    Object.keys(this.statistics).forEach(statisticKey => {
                        const statistic = this.statistics[statisticKey];
                        if (!statistic.store) {
                            return;
                        }
                        statistic.store.load(false).pipe(take(1)).subscribe();
                    });
                }
            }));
        }
    }
    setupVM() {
        let allStatistics$ = of([]).pipe(shareReplay());
        const layout$ = of(this.getLayout()).pipe(shareReplay());
        if (this.statistics && Object.keys(this.statistics).length > 0) {
            const statistics$ = [];
            Object.keys(this.statistics).forEach(type => statistics$.push(this.statistics[type].store.state$));
            if (statistics$.length < 1) {
                allStatistics$ = of([]);
            }
            else if (statistics$.length === 1) {
                allStatistics$ = statistics$[0].pipe(map(value => [value]));
            }
            else {
                let firsObs = null;
                let others;
                [firsObs, ...others] = statistics$;
                allStatistics$ = firsObs.pipe(combineLatestWith(others));
            }
        }
        this.vm$ = allStatistics$.pipe(combineLatestWith(layout$), map(([statistics, layout]) => {
            const statsMap = {};
            const tooltipTitles = [];
            const descriptions = [];
            statistics.forEach(value => {
                statsMap[value.query.key] = value;
                const tooltip = this.getLabel(value.statistic.metadata, 'tooltip_title_key');
                if (tooltip) {
                    tooltipTitles.push(tooltip);
                }
                const description = this.getLabel(value.statistic.metadata, 'descriptionKey');
                if (description) {
                    descriptions.push(description);
                }
            });
            return {
                layout,
                statistics: statsMap,
                tooltipTitleText: tooltipTitles.join(' | '),
                description: descriptions.join(' | '),
            };
        }));
    }
    static ɵfac = function GridWidgetComponent_Factory(t) { return new (t || GridWidgetComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i2.SingleValueStatisticsStoreFactory)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GridWidgetComponent, selectors: [["scrm-grid-widget"]], inputs: { config: "config" }, decls: 3, vars: 4, consts: [["class", "p-3 widget-message", 4, "ngIf"], ["class", "grid-widget d-flex flex-column", "placement", "auto", "container", "body", 3, "ngbTooltip", 4, "ngIf"], [1, "p-3", "widget-message"], [3, "labelKey"], ["placement", "auto", "container", "body", 1, "grid-widget", "d-flex", "flex-column", 3, "ngbTooltip"], [4, "ngFor", "ngForOf"], [3, "class", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "widget-entry-icon"], [3, "image", "klass"], ["class", "widget-entry-value", 4, "ngIf"], ["class", "widget-entry-loading", 4, "ngIf"], [1, "widget-entry-value"], ["mode", "list", 3, "type", "field"], [1, "widget-entry-loading"], [1, "widget-entry-label", "text-truncate"], [3, "labelKey", "module"], [1, "text-truncate", "widget-entry-label"], ["class", "widget-entry-dynamic-label", 4, "ngIf"], [1, "widget-entry-dynamic-label"], [3, "context", "fields", "labelKey"]], template: function GridWidgetComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, GridWidgetComponent_div_0_Template, 2, 1, "div", 0);
            i0.ɵɵtemplate(1, GridWidgetComponent_div_1_Template, 2, 2, "div", 1);
            i0.ɵɵpipe(2, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.messageLabelKey);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.messageLabelKey && i0.ɵɵpipeBind1(2, 2, ctx.vm$));
        } }, dependencies: [i3.NgForOf, i3.NgIf, i4.FieldComponent, i5.InlineLoadingSpinnerComponent, i6.LabelComponent, i7.ImageComponent, i8.DynamicLabelComponent, i9.NgbTooltip, i3.AsyncPipe], encapsulation: 2 });
}
export { GridWidgetComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GridWidgetComponent, [{
        type: Component,
        args: [{ selector: 'scrm-grid-widget', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div *ngIf=\"this.messageLabelKey\" class=\"p-3 widget-message\">\n    <scrm-label [labelKey]=\"this.messageLabelKey\"></scrm-label>\n</div>\n\n<div *ngIf=\"!this.messageLabelKey && (vm$| async) as vm\"\n     class=\"grid-widget d-flex flex-column\"\n     ngbTooltip=\"{{vm.tooltipTitleText}}\" placement=\"auto\" container=\"body\">\n\n    <ng-container *ngFor=\"let item of vm.layout\">\n\n        <div\n            class=\"d-flex {{getJustify(item.justify)}} {{getAlign(item.align)}} {{getRowClass()}} {{getLayoutRowClass(item)}}\">\n\n            <div class=\"{{getColClass()}} {{getClass(col)}}\" *ngFor=\"let col of item.cols\">\n\n                <ng-container *ngIf=\"col.display !== 'hidden'\">\n\n                    <!-- ICON -->\n                    <ng-container *ngIf=\"col.icon\">\n                        <div class=\"widget-entry-icon\">\n                            <scrm-image [image]=\"col.icon\" [klass]=\"col.iconClass\"></scrm-image>\n                        </div>\n                    </ng-container>\n\n                    <!-- VALUE -->\n                    <ng-container *ngIf=\"col.statistic && (vm.statistics[col.statistic]) as statistics\">\n\n                        <div *ngIf=\"statistics.field\" class=\"widget-entry-value\">\n\n                            <scrm-field [type]=\"statistics.field.type\"\n                                        [field]=\"statistics.field\"\n                                        mode=\"list\">\n                            </scrm-field>\n\n                        </div>\n                        <div *ngIf=\"statistics.loading && loading\" class=\"widget-entry-loading\">\n\n                            <scrm-inline-loading-spinner></scrm-inline-loading-spinner>\n\n                        </div>\n                    </ng-container>\n\n                    <!-- LABEL -->\n                    <ng-container *ngIf=\"col.labelKey\">\n\n                        <div class=\"widget-entry-label text-truncate\">\n\n                            <scrm-label [labelKey]=\"col.labelKey\" [module]=\"getContextModule()\"></scrm-label>\n\n                        </div>\n\n                    </ng-container>\n\n                    <!-- DESCRIPTION TEXT -->\n                    <ng-container *ngIf=\"col.descriptionKey\">\n\n                        <div class=\"text-truncate widget-entry-label\">\n\n                            <label>{{vm.description}}</label>\n\n                        </div>\n\n                    </ng-container>\n\n                    <!-- DYNAMIC LABEL -->\n                    <ng-container *ngIf=\"col.dynamicLabel\">\n\n                        <div *ngIf=\"!loading\" class=\"widget-entry-dynamic-label\">\n\n                            <scrm-dynamic-label [context]=\"getMessageContext()\"\n                                                [fields]=\"getMessageFields(vm.statistics)\"\n                                                [labelKey]=\"col.dynamicLabel\">\n                            </scrm-dynamic-label>\n\n                        </div>\n\n                        <div *ngIf=\"loading\" class=\"widget-entry-loading\">\n                            <scrm-inline-loading-spinner></scrm-inline-loading-spinner>\n                        </div>\n\n                    </ng-container>\n\n                    <!-- MISCONFIGURATION -->\n                    <ng-container\n                        *ngIf=\"col.statistic && !loading && (!vm.statistics[col.statistic].field || (vm.statistics[col.statistic].field && isEmptyFieldValue(vm.statistics[col.statistic].field.value)))\">\n                        <div class=\"widget-entry-value {{getSizeClass(col.size)}}\">\n                            -\n                        </div>\n                    </ng-container>\n\n                </ng-container>\n\n            </div>\n\n        </div>\n    </ng-container>\n</div>\n" }]
    }], function () { return [{ type: i1.LanguageStore }, { type: i2.SingleValueStatisticsStoreFactory }]; }, { config: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC13aWRnZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvZ3JpZC13aWRnZXQvZ3JpZC13aWRnZXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvZ3JpZC13aWRnZXQvZ3JpZC13aWRnZXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUVsRSxPQUFPLEVBQUMsaUJBQWlCLEVBQWMsRUFBRSxFQUFlLE1BQU0sTUFBTSxDQUFDO0FBQ3JFLE9BQU8sRUFBQyxHQUFHLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBR3RELE9BQU8sRUFJSCxNQUFNLEdBYVQsTUFBTSxRQUFRLENBQUM7Ozs7Ozs7Ozs7OztJQ3RCaEIsOEJBQTZEO0lBQ3pELGdDQUEyRDtJQUMvRCxpQkFBTTs7O0lBRFUsZUFBaUM7SUFBakMsaURBQWlDOzs7SUFpQjdCLDZCQUErQjtJQUMzQiw4QkFBK0I7SUFDM0IsZ0NBQW9FO0lBQ3hFLGlCQUFNO0lBQ1YsMEJBQWU7OztJQUZLLGVBQWtCO0lBQWxCLG1DQUFrQiwyQkFBQTs7O0lBT2xDLCtCQUF5RDtJQUVyRCxpQ0FHYTtJQUVqQixpQkFBTTs7O0lBTFUsZUFBOEI7SUFBOUIsZ0RBQThCLCtCQUFBOzs7SUFNOUMsK0JBQXdFO0lBRXBFLDhDQUEyRDtJQUUvRCxpQkFBTTs7O0lBZFYsNkJBQW9GO0lBRWhGLDhIQU9NO0lBQ04sOEhBSU07SUFDViwwQkFBZTs7OztJQWJMLGVBQXNCO0lBQXRCLDJDQUFzQjtJQVF0QixlQUFtQztJQUFuQywr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IGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtjb21iaW5lTGF0ZXN0V2l0aCwgT2JzZXJ2YWJsZSwgb2YsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcCwgc2hhcmVSZXBsYXksIHRha2V9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7U2luZ2xlVmFsdWVTdGF0aXN0aWNzU3RvcmVGYWN0b3J5fSBmcm9tICcuLi8uLi9zdG9yZS9zaW5nbGUtdmFsdWUtc3RhdGlzdGljcy9zaW5nbGUtdmFsdWUtc3RhdGlzdGljcy5zdG9yZS5mYWN0b3J5JztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtcbiAgICBDb250ZW50QWxpZ24sXG4gICAgQ29udGVudEp1c3RpZnksXG4gICAgRmllbGRNYXAsXG4gICAgaXNUcnVlLFxuICAgIFNpbmdsZVZhbHVlU3RhdGlzdGljc1N0YXRlLFxuICAgIFNpbmdsZVZhbHVlU3RhdGlzdGljc1N0b3JlSW50ZXJmYWNlLFxuICAgIFN0YXRpc3RpY01ldGFkYXRhLFxuICAgIFN0YXRpc3RpY3NRdWVyeSxcbiAgICBTdGF0aXN0aWNXaWRnZXRMYXlvdXRDb2wsXG4gICAgU3RhdGlzdGljV2lkZ2V0TGF5b3V0Um93LFxuICAgIFN0YXRpc3RpY1dpZGdldE9wdGlvbnMsXG4gICAgU3RyaW5nTWFwLFxuICAgIFRleHRDb2xvcixcbiAgICBUZXh0U2l6ZXMsXG4gICAgVmlld0NvbnRleHQsXG4gICAgV2lkZ2V0TWV0YWRhdGEsXG59IGZyb20gJ2NvbW1vbic7XG5cbmludGVyZmFjZSBTdGF0aXN0aWNzRW50cnkge1xuICAgIGxhYmVsS2V5Pzogc3RyaW5nO1xuICAgIHR5cGU6IHN0cmluZztcbiAgICBzdG9yZTogU2luZ2xlVmFsdWVTdGF0aXN0aWNzU3RvcmVJbnRlcmZhY2U7XG59XG5cbmludGVyZmFjZSBTdGF0aXN0aWNzRW50cnlNYXAge1xuICAgIFtrZXk6IHN0cmluZ106IFN0YXRpc3RpY3NFbnRyeTtcbn1cblxuaW50ZXJmYWNlIFN0YXRpc3RpY3NNYXAge1xuICAgIFtrZXk6IHN0cmluZ106IFNpbmdsZVZhbHVlU3RhdGlzdGljc1N0YXRlO1xufVxuXG5pbnRlcmZhY2UgR3JpZFdpZGdldFN0YXRlIHtcbiAgICBsYXlvdXQ6IFN0YXRpc3RpY1dpZGdldExheW91dFJvd1tdO1xuICAgIHN0YXRpc3RpY3M6IFN0YXRpc3RpY3NNYXA7XG4gICAgdG9vbHRpcFRpdGxlVGV4dD86IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHcmlkV2lkZ2V0Q29uZmlnIHtcbiAgICByb3dDbGFzcz86IHN0cmluZztcbiAgICBjb2x1bW5DbGFzcz86IHN0cmluZztcbiAgICBsYXlvdXQ6IFN0YXRpc3RpY1dpZGdldE9wdGlvbnM7XG4gICAgd2lkZ2V0Q29uZmlnPzogV2lkZ2V0TWV0YWRhdGE7XG4gICAgcXVlcnlBcmdzPzogU3RhdGlzdGljc1F1ZXJ5QXJncztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdGF0aXN0aWNzUXVlcnlBcmdzIHtcbiAgICBtb2R1bGU6IHN0cmluZztcbiAgICBjb250ZXh0OiBWaWV3Q29udGV4dDtcbiAgICBwYXJhbXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1ncmlkLXdpZGdldCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2dyaWQtd2lkZ2V0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZXM6IFtdXG59KVxuXG5leHBvcnQgY2xhc3MgR3JpZFdpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBASW5wdXQoKSBjb25maWc6IEdyaWRXaWRnZXRDb25maWc7XG4gICAgdm0kOiBPYnNlcnZhYmxlPEdyaWRXaWRnZXRTdGF0ZT47XG4gICAgbG9hZGluZyA9IHRydWU7XG4gICAgbWVzc2FnZUxhYmVsS2V5OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBzdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuICAgIHByaXZhdGUgc3RhdGlzdGljczogU3RhdGlzdGljc0VudHJ5TWFwID0ge307XG4gICAgcHJpdmF0ZSBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBwcml2YXRlIGdyaWRXaWRnZXRJbnB1dDogR3JpZFdpZGdldENvbmZpZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBmYWN0b3J5OiBTaW5nbGVWYWx1ZVN0YXRpc3RpY3NTdG9yZUZhY3RvcnlcbiAgICApIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBpc1ZhbGlkID0gdGhpcy52YWxpZGF0ZUNvbmZpZygpO1xuICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdyaWRXaWRnZXRJbnB1dCA9IHRoaXMuY29uZmlnO1xuICAgICAgICB0aGlzLmJ1aWxkU3RhdGlzdGljcygpO1xuICAgICAgICB0aGlzLnNldHVwTG9hZGluZyQoKTtcbiAgICAgICAgdGhpcy5zZXR1cFZNKCk7XG4gICAgICAgIHRoaXMuc2V0dXBSZWxvYWQoKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmFsaWRhdGVDb25maWcoKTogYm9vbGVhbiB7XG5cbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZyB8fCAhdGhpcy5jb25maWcubGF5b3V0KSB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VMYWJlbEtleSA9ICdMQkxfQ09ORklHX05PX0NPTkZJRyc7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuY29uZmlnLnF1ZXJ5QXJncy5jb250ZXh0IHx8ICF0aGlzLmNvbmZpZy5xdWVyeUFyZ3MubW9kdWxlKSB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VMYWJlbEtleSA9ICdMQkxfQ09ORklHX0JBRF9DT05URVhUJztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5jb25maWcud2lkZ2V0Q29uZmlnKSB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VMYWJlbEtleSA9ICdMQkxfQ09ORklHX05PX0NPTkZJRyc7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuY29uZmlnLmxheW91dCB8fCAhdGhpcy5jb25maWcubGF5b3V0LnJvd3MpIHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUxhYmVsS2V5ID0gJ0xCTF9DT05GSUdfTk9fU1RBVElTVElDU19LRVknO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFJvd0NsYXNzKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWRXaWRnZXRJbnB1dC5yb3dDbGFzcztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q29sQ2xhc3MoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZFdpZGdldElucHV0LmNvbHVtbkNsYXNzO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDb250ZXh0TW9kdWxlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyaWRXaWRnZXRJbnB1dC5xdWVyeUFyZ3MuY29udGV4dC5tb2R1bGU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldE1lc3NhZ2VDb250ZXh0KCk6IFN0cmluZ01hcCB7XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IHRoaXMuZ2V0Q29udGV4dE1vZHVsZSgpO1xuXG4gICAgICAgIGlmICghbW9kdWxlKSB7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbW9kdWxlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIGdldE1lc3NhZ2VGaWVsZHMoc3RhdGlzdGljczogU3RhdGlzdGljc01hcCk6IEZpZWxkTWFwIHtcblxuICAgICAgICBpZiAoIXN0YXRpc3RpY3MgfHwgIU9iamVjdC5rZXlzKHN0YXRpc3RpY3MpLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmllbGRzID0ge307XG5cbiAgICAgICAgT2JqZWN0LmtleXMoc3RhdGlzdGljcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGlzdGljID0gc3RhdGlzdGljc1trZXldO1xuICAgICAgICAgICAgZmllbGRzW2tleV0gPSBzdGF0aXN0aWMuZmllbGQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmaWVsZHM7XG4gICAgfVxuXG4gICAgZ2V0U2l6ZUNsYXNzKHNpemU6IFRleHRTaXplcyk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHNpemVNYXAgPSB7XG4gICAgICAgICAgICByZWd1bGFyOiAndGV4dC1yZWd1bGFyJyxcbiAgICAgICAgICAgIG1lZGl1bTogJ3RleHQtbWVkaXVtJyxcbiAgICAgICAgICAgIGxhcmdlOiAndGV4dC1sYXJnZScsXG4gICAgICAgICAgICAneC1sYXJnZSc6ICd0ZXh0LXgtbGFyZ2UnLFxuICAgICAgICAgICAgJ3h4LWxhcmdlJzogJ3RleHQteHgtbGFyZ2UnLFxuICAgICAgICAgICAgaHVnZTogJ3RleHQtaHVnZSdcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gc2l6ZU1hcFtzaXplXSB8fCAndGV4dC1yZWd1bGFyJztcbiAgICB9XG5cbiAgICBnZXRGb250V2VpZ2h0KGJvbGQ6IHN0cmluZyB8IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgICAgICBsZXQgZm9udFdlaWdodCA9ICdmb250LXdlaWdodC1ub3JtYWwnO1xuXG4gICAgICAgIGlmIChib2xkICYmIGlzVHJ1ZShib2xkKSkge1xuICAgICAgICAgICAgZm9udFdlaWdodCA9ICdmb250LXdlaWdodC1ib2xkZXInO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZvbnRXZWlnaHQ7XG4gICAgfVxuXG4gICAgZ2V0Q29sb3IoY29sb3I6IFRleHRDb2xvcik6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHNpemVNYXAgPSB7XG4gICAgICAgICAgICB5ZWxsb3c6ICd0ZXh0LXllbGxvdycsXG4gICAgICAgICAgICBibHVlOiAndGV4dC1ibHVlJyxcbiAgICAgICAgICAgIGdyZWVuOiAndGV4dC1ncmVlbicsXG4gICAgICAgICAgICByZWQ6ICd0ZXh0LXJlZCcsXG4gICAgICAgICAgICBwdXJwbGU6ICd0ZXh0LXB1cnBsZScsXG4gICAgICAgICAgICBkYXJrOiAndGV4dC1kYXJrJyxcbiAgICAgICAgICAgIGdyZXk6ICd0ZXh0LWdyZXknXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHNpemVNYXBbY29sb3JdIHx8ICcnO1xuICAgIH1cblxuICAgIGdldEp1c3RpZnkoanVzdGlmeTogQ29udGVudEp1c3RpZnkpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBqdXN0aWZ5TWFwID0ge1xuICAgICAgICAgICAgc3RhcnQ6ICdqdXN0aWZ5LWNvbnRlbnQtc3RhcnQnLFxuICAgICAgICAgICAgZW5kOiAnanVzdGlmeS1jb250ZW50LWVuZCcsXG4gICAgICAgICAgICBjZW50ZXI6ICdqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJyxcbiAgICAgICAgICAgIGJldHdlZW46ICdqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbicsXG4gICAgICAgICAgICBhcm91bmQ6ICdqdXN0aWZ5LWNvbnRlbnQtYXJvdW5kJ1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBqdXN0aWZ5TWFwW2p1c3RpZnldIHx8ICdqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJztcbiAgICB9XG5cbiAgICBnZXRBbGlnbihhbGlnbjogQ29udGVudEFsaWduKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgYWxpZ25NYXAgPSB7XG4gICAgICAgICAgICBzdGFydDogJ2FsaWduLWl0ZW1zLXN0YXJ0JyxcbiAgICAgICAgICAgIGVuZDogJ2FsaWduLWl0ZW1zLWVuZCcsXG4gICAgICAgICAgICBjZW50ZXI6ICdhbGlnbi1pdGVtcy1jZW50ZXInLFxuICAgICAgICAgICAgYmFzZWxpbmU6ICdhbGlnbi1pdGVtcy1iYXNlbGluZScsXG4gICAgICAgICAgICBzdHJldGNoOiAnYWxpZ24taXRlbXMtc3RyZXRjaCdcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gYWxpZ25NYXBbYWxpZ25dIHx8ICdhbGlnbi1pdGVtcy1jZW50ZXInO1xuICAgIH1cblxuICAgIGdldExheW91dFJvd0NsYXNzKHJvdzogU3RhdGlzdGljV2lkZ2V0TGF5b3V0Um93KTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9ICcnO1xuICAgICAgICBpZiAocm93ICYmIHJvdy5jbGFzcykge1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gcm93LmNsYXNzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgfVxuXG4gICAgZ2V0Q2xhc3MobGF5b3V0Q29sOiBTdGF0aXN0aWNXaWRnZXRMYXlvdXRDb2wpOiBzdHJpbmcge1xuICAgICAgICBsZXQgY2xhc3NOYW1lID0gJyc7XG4gICAgICAgIGlmIChsYXlvdXRDb2wpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGxheW91dENvbC5jbGFzcztcbiAgICAgICAgfVxuXG4gICAgICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZSArICcgJ1xuICAgICAgICAgICAgKyB0aGlzLmdldFNpemVDbGFzcyhsYXlvdXRDb2wuc2l6ZSkgKyAnICdcbiAgICAgICAgICAgICsgdGhpcy5nZXRGb250V2VpZ2h0KGxheW91dENvbC5ib2xkKSArICcgJ1xuICAgICAgICAgICAgKyB0aGlzLmdldENvbG9yKGxheW91dENvbC5jb2xvcik7XG5cbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICB9XG5cbiAgICBpc0VtcHR5RmllbGRWYWx1ZShmaWVsZFZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgLy8gSGFuZGxlIHRoZSBjYXNlcywgd2hlbiBpbnB1dCB2YWx1ZSBpcyBhbiBzdHJpbmcsIGFycmF5LCBvYmplY3RzIG9yIGFueSBvdGhlciB0eXBlXG4gICAgICAgIGlmICh0eXBlb2YgZmllbGRWYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGZpZWxkVmFsdWUgPSBmaWVsZFZhbHVlLnRyaW0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmaWVsZFZhbHVlID09IG51bGxcbiAgICAgICAgICAgIHx8IHR5cGVvZiBmaWVsZFZhbHVlID09PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgfHwgZmllbGRWYWx1ZSA9PT0gJydcbiAgICAgICAgICAgIHx8IGZpZWxkVmFsdWUubGVuZ3RoID09PSAwO1xuICAgIH1cblxuICAgIGdldExhYmVsKHN0YXRpc3RpY01ldGFkYXRhOiBTdGF0aXN0aWNNZXRhZGF0YSwgYXR0cmlidXRlOiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gICAgICAgIGxldCBsYWJlbCA9ICcnO1xuICAgICAgICBpZiAoc3RhdGlzdGljTWV0YWRhdGEgJiYgc3RhdGlzdGljTWV0YWRhdGFbYXR0cmlidXRlXSkge1xuICAgICAgICAgICAgbGFiZWwgPSB0aGlzLmxhbmd1YWdlLmdldEZpZWxkTGFiZWwoc3RhdGlzdGljTWV0YWRhdGFbYXR0cmlidXRlXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgfVxuXG4gICAgZ2V0TGF5b3V0KCk6IFN0YXRpc3RpY1dpZGdldExheW91dFJvd1tdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZFdpZGdldElucHV0LmxheW91dC5yb3dzO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBidWlsZFN0YXRpc3RpY3MoKTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy5ncmlkV2lkZ2V0SW5wdXQubGF5b3V0LnJvd3MuZm9yRWFjaChyb3cgPT4ge1xuXG4gICAgICAgICAgICBpZiAoIXJvdy5jb2xzIHx8ICFyb3cuY29scy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJvdy5jb2xzLmZvckVhY2goY29sID0+IHtcblxuICAgICAgICAgICAgICAgIGlmICghY29sLnN0YXRpc3RpYykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGNvbC5zdG9yZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRpc3RpY3NbY29sLnN0YXRpc3RpY10gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBjb2wuc3RhdGlzdGljLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmU6IGNvbC5zdG9yZVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0aXN0aWNzW2NvbC5zdGF0aXN0aWNdID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBjb2wuc3RhdGlzdGljLFxuICAgICAgICAgICAgICAgICAgICBzdG9yZTogdGhpcy5mYWN0b3J5LmNyZWF0ZSgpXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGlzdGljc1tjb2wuc3RhdGlzdGljXS5zdG9yZS5pbml0KFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyaWRXaWRnZXRJbnB1dC5xdWVyeUFyZ3MubW9kdWxlLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGNvbC5zdGF0aXN0aWMsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiB7Li4udGhpcy5ncmlkV2lkZ2V0SW5wdXQucXVlcnlBcmdzLmNvbnRleHR9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7Li4udGhpcy5ncmlkV2lkZ2V0SW5wdXQucXVlcnlBcmdzLnBhcmFtc31cbiAgICAgICAgICAgICAgICAgICAgfSBhcyBTdGF0aXN0aWNzUXVlcnksXG4gICAgICAgICAgICAgICAgKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldHVwTG9hZGluZyQoKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgbG9hZGluZ3MkOiBPYnNlcnZhYmxlPGJvb2xlYW4+W10gPSBbXTtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5zdGF0aXN0aWNzKS5mb3JFYWNoKHR5cGUgPT4gbG9hZGluZ3MkLnB1c2godGhpcy5zdGF0aXN0aWNzW3R5cGVdLnN0b3JlLmxvYWRpbmckKSk7XG5cbiAgICAgICAgbGV0IHN0YXRpc3RpY09iczogT2JzZXJ2YWJsZTxib29sZWFuW10+ID0gb2YoW10pO1xuXG4gICAgICAgIGlmKGxvYWRpbmdzJC5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICBzdGF0aXN0aWNPYnMgPSBvZihbXSk7XG4gICAgICAgIH0gZWxzZSBpZihsb2FkaW5ncyQubGVuZ3RoID09PSAxKXtcbiAgICAgICAgICAgIHN0YXRpc3RpY09icyA9IGxvYWRpbmdzJFswXS5waXBlKFxuICAgICAgICAgICAgICAgIG1hcCh2YWx1ZSA9PiBbdmFsdWVdKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBmaXJzT2JzID0gbnVsbDtcbiAgICAgICAgICAgIGxldCBvdGhlcnM7XG4gICAgICAgICAgICBbZmlyc09icywgLi4ub3RoZXJzXSA9IGxvYWRpbmdzJDtcbiAgICAgICAgICAgIHN0YXRpc3RpY09icyA9IGZpcnNPYnMucGlwZShcbiAgICAgICAgICAgICAgICBjb21iaW5lTGF0ZXN0V2l0aChvdGhlcnMpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sb2FkaW5nJCA9IHN0YXRpc3RpY09icy5waXBlKFxuICAgICAgICAgICAgbWFwKChsb2FkaW5ncykgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKCFsb2FkaW5ncyB8fCBsb2FkaW5ncy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBsb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIGxvYWRpbmdzLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nID0gbG9hZGluZyAmJiB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBsb2FkaW5nO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvYWRpbmc7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMubG9hZGluZyQuc3Vic2NyaWJlKCkpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZXR1cFJlbG9hZCgpOiB2b2lkIHtcblxuICAgICAgICBpZiAodGhpcy5ncmlkV2lkZ2V0SW5wdXQud2lkZ2V0Q29uZmlnLnJlbG9hZCQpIHtcbiAgICAgICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMuZ3JpZFdpZGdldElucHV0LndpZGdldENvbmZpZy5yZWxvYWQkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubG9hZGluZyA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnN0YXRpc3RpY3MpLmZvckVhY2goc3RhdGlzdGljS2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRpc3RpYyA9IHRoaXMuc3RhdGlzdGljc1tzdGF0aXN0aWNLZXldO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXN0YXRpc3RpYy5zdG9yZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGlzdGljLnN0b3JlLmxvYWQoZmFsc2UpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZXR1cFZNKCk6IHZvaWQge1xuXG4gICAgICAgIGxldCBhbGxTdGF0aXN0aWNzJDogT2JzZXJ2YWJsZTxTaW5nbGVWYWx1ZVN0YXRpc3RpY3NTdGF0ZVtdPiA9IG9mKFtdKS5waXBlKHNoYXJlUmVwbGF5KCkpO1xuICAgICAgICBjb25zdCBsYXlvdXQkID0gb2YodGhpcy5nZXRMYXlvdXQoKSkucGlwZShzaGFyZVJlcGxheSgpKTtcblxuICAgICAgICBpZiAodGhpcy5zdGF0aXN0aWNzICYmIE9iamVjdC5rZXlzKHRoaXMuc3RhdGlzdGljcykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGlzdGljcyQ6IE9ic2VydmFibGU8U2luZ2xlVmFsdWVTdGF0aXN0aWNzU3RhdGU+W10gPSBbXTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuc3RhdGlzdGljcykuZm9yRWFjaCh0eXBlID0+IHN0YXRpc3RpY3MkLnB1c2godGhpcy5zdGF0aXN0aWNzW3R5cGVdLnN0b3JlLnN0YXRlJCkpO1xuXG4gICAgICAgICAgICBpZihzdGF0aXN0aWNzJC5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICAgICAgYWxsU3RhdGlzdGljcyQgPSBvZihbXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYoc3RhdGlzdGljcyQubGVuZ3RoID09PSAxKXtcbiAgICAgICAgICAgICAgICBhbGxTdGF0aXN0aWNzJCA9IHN0YXRpc3RpY3MkWzBdLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgIG1hcCh2YWx1ZSA9PiBbdmFsdWVdKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBmaXJzT2JzID0gbnVsbDtcbiAgICAgICAgICAgICAgICBsZXQgb3RoZXJzO1xuICAgICAgICAgICAgICAgIFtmaXJzT2JzLCAuLi5vdGhlcnNdID0gc3RhdGlzdGljcyQ7XG4gICAgICAgICAgICAgICAgYWxsU3RhdGlzdGljcyQgPSBmaXJzT2JzLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgIGNvbWJpbmVMYXRlc3RXaXRoKG90aGVycylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy52bSQgPSBhbGxTdGF0aXN0aWNzJC5waXBlKFxuICAgICAgICAgICAgY29tYmluZUxhdGVzdFdpdGgobGF5b3V0JCksXG4gICAgICAgICAgICBtYXAoKFtzdGF0aXN0aWNzLCBsYXlvdXRdOiBbU2luZ2xlVmFsdWVTdGF0aXN0aWNzU3RhdGVbXSwgU3RhdGlzdGljV2lkZ2V0TGF5b3V0Um93W11dKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0c01hcDogeyBba2V5OiBzdHJpbmddOiBTaW5nbGVWYWx1ZVN0YXRpc3RpY3NTdGF0ZSB9ID0ge307XG4gICAgICAgICAgICAgICAgY29uc3QgdG9vbHRpcFRpdGxlcyA9IFtdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9ucyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgc3RhdGlzdGljcy5mb3JFYWNoKHZhbHVlID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBzdGF0c01hcFt2YWx1ZS5xdWVyeS5rZXldID0gdmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9vbHRpcCA9IHRoaXMuZ2V0TGFiZWwodmFsdWUuc3RhdGlzdGljLm1ldGFkYXRhLCAndG9vbHRpcF90aXRsZV9rZXknKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvb2x0aXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXBUaXRsZXMucHVzaCh0b29sdGlwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdGhpcy5nZXRMYWJlbCh2YWx1ZS5zdGF0aXN0aWMubWV0YWRhdGEsICdkZXNjcmlwdGlvbktleScpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9ucy5wdXNoKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGxheW91dCxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGlzdGljczogc3RhdHNNYXAsXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXBUaXRsZVRleHQ6IHRvb2x0aXBUaXRsZXMuam9pbignIHwgJyksXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbnMuam9pbignIHwgJyksXG4gICAgICAgICAgICAgICAgfSBhcyBHcmlkV2lkZ2V0U3RhdGU7XG4gICAgICAgICAgICB9KSk7XG4gICAgfVxuXG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48ZGl2ICpuZ0lmPVwidGhpcy5tZXNzYWdlTGFiZWxLZXlcIiBjbGFzcz1cInAtMyB3aWRnZXQtbWVzc2FnZVwiPlxuICAgIDxzY3JtLWxhYmVsIFtsYWJlbEtleV09XCJ0aGlzLm1lc3NhZ2VMYWJlbEtleVwiPjwvc2NybS1sYWJlbD5cbjwvZGl2PlxuXG48ZGl2ICpuZ0lmPVwiIXRoaXMubWVzc2FnZUxhYmVsS2V5ICYmICh2bSR8IGFzeW5jKSBhcyB2bVwiXG4gICAgIGNsYXNzPVwiZ3JpZC13aWRnZXQgZC1mbGV4IGZsZXgtY29sdW1uXCJcbiAgICAgbmdiVG9vbHRpcD1cInt7dm0udG9vbHRpcFRpdGxlVGV4dH19XCIgcGxhY2VtZW50PVwiYXV0b1wiIGNvbnRhaW5lcj1cImJvZHlcIj5cblxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygdm0ubGF5b3V0XCI+XG5cbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJkLWZsZXgge3tnZXRKdXN0aWZ5KGl0ZW0uanVzdGlmeSl9fSB7e2dldEFsaWduKGl0ZW0uYWxpZ24pfX0ge3tnZXRSb3dDbGFzcygpfX0ge3tnZXRMYXlvdXRSb3dDbGFzcyhpdGVtKX19XCI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ7e2dldENvbENsYXNzKCl9fSB7e2dldENsYXNzKGNvbCl9fVwiICpuZ0Zvcj1cImxldCBjb2wgb2YgaXRlbS5jb2xzXCI+XG5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29sLmRpc3BsYXkgIT09ICdoaWRkZW4nXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBJQ09OIC0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29sLmljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aWRnZXQtZW50cnktaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWltYWdlIFtpbWFnZV09XCJjb2wuaWNvblwiIFtrbGFzc109XCJjb2wuaWNvbkNsYXNzXCI+PC9zY3JtLWltYWdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gVkFMVUUgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb2wuc3RhdGlzdGljICYmICh2bS5zdGF0aXN0aWNzW2NvbC5zdGF0aXN0aWNdKSBhcyBzdGF0aXN0aWNzXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJzdGF0aXN0aWNzLmZpZWxkXCIgY2xhc3M9XCJ3aWRnZXQtZW50cnktdmFsdWVcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWZpZWxkIFt0eXBlXT1cInN0YXRpc3RpY3MuZmllbGQudHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ZpZWxkXT1cInN0YXRpc3RpY3MuZmllbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9XCJsaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zY3JtLWZpZWxkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJzdGF0aXN0aWNzLmxvYWRpbmcgJiYgbG9hZGluZ1wiIGNsYXNzPVwid2lkZ2V0LWVudHJ5LWxvYWRpbmdcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWlubGluZS1sb2FkaW5nLXNwaW5uZXI+PC9zY3JtLWlubGluZS1sb2FkaW5nLXNwaW5uZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIExBQkVMIC0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29sLmxhYmVsS2V5XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aWRnZXQtZW50cnktbGFiZWwgdGV4dC10cnVuY2F0ZVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tbGFiZWwgW2xhYmVsS2V5XT1cImNvbC5sYWJlbEtleVwiIFttb2R1bGVdPVwiZ2V0Q29udGV4dE1vZHVsZSgpXCI+PC9zY3JtLWxhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIERFU0NSSVBUSU9OIFRFWFQgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb2wuZGVzY3JpcHRpb25LZXlcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtdHJ1bmNhdGUgd2lkZ2V0LWVudHJ5LWxhYmVsXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e3t2bS5kZXNjcmlwdGlvbn19PC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBEWU5BTUlDIExBQkVMIC0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29sLmR5bmFtaWNMYWJlbFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiIWxvYWRpbmdcIiBjbGFzcz1cIndpZGdldC1lbnRyeS1keW5hbWljLWxhYmVsXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1keW5hbWljLWxhYmVsIFtjb250ZXh0XT1cImdldE1lc3NhZ2VDb250ZXh0KClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ZpZWxkc109XCJnZXRNZXNzYWdlRmllbGRzKHZtLnN0YXRpc3RpY3MpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsYWJlbEtleV09XCJjb2wuZHluYW1pY0xhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zY3JtLWR5bmFtaWMtbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwibG9hZGluZ1wiIGNsYXNzPVwid2lkZ2V0LWVudHJ5LWxvYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1pbmxpbmUtbG9hZGluZy1zcGlubmVyPjwvc2NybS1pbmxpbmUtbG9hZGluZy1zcGlubmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBNSVNDT05GSUdVUkFUSU9OIC0tPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImNvbC5zdGF0aXN0aWMgJiYgIWxvYWRpbmcgJiYgKCF2bS5zdGF0aXN0aWNzW2NvbC5zdGF0aXN0aWNdLmZpZWxkIHx8ICh2bS5zdGF0aXN0aWNzW2NvbC5zdGF0aXN0aWNdLmZpZWxkICYmIGlzRW1wdHlGaWVsZFZhbHVlKHZtLnN0YXRpc3RpY3NbY29sLnN0YXRpc3RpY10uZmllbGQudmFsdWUpKSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aWRnZXQtZW50cnktdmFsdWUge3tnZXRTaXplQ2xhc3MoY29sLnNpemUpfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG48L2Rpdj5cbiJdfQ==