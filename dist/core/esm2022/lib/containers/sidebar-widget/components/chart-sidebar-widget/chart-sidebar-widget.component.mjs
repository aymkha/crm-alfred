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
import { combineLatestWith, of } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { BaseWidgetComponent } from '../../../widgets/base-widget.model';
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/language/language.store";
import * as i2 from "../../../../store/chart-data/chart-data.store.factory";
import * as i3 from "@angular/common";
import * as i4 from "../../../../components/widget-panel/widget-panel.component";
import * as i5 from "@angular/forms";
import * as i6 from "../../../../components/chart/components/chart/chart.component";
import * as i7 from "../../../../components/loading-spinner/loading-spinner.component";
function ChartSidebarWidgetComponent_scrm_widget_panel_0_div_5_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const chart_r7 = ctx.$implicit;
    const ctx_r6 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("value", ctx_r6.getKey(chart_r7));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r6.language.getFieldLabel(chart_r7.labelKey), " ");
} }
function ChartSidebarWidgetComponent_scrm_widget_panel_0_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13)(1, "div", 14)(2, "form", 15)(3, "select", 16);
    i0.ɵɵlistener("ngModelChange", function ChartSidebarWidgetComponent_scrm_widget_panel_0_div_5_Template_select_ngModelChange_3_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r9.onChartSelect()); })("ngModelChange", function ChartSidebarWidgetComponent_scrm_widget_panel_0_div_5_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r11 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r11.selectedChart = $event); });
    i0.ɵɵtemplate(4, ChartSidebarWidgetComponent_scrm_widget_panel_0_div_5_option_4_Template, 2, 2, "option", 17);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r2.selectedChart);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2.configuredCharts);
} }
function ChartSidebarWidgetComponent_scrm_widget_panel_0_ng_container_9_scrm_chart_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-chart", 20);
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("dataSource", ctx_r12.dataSource)("type", ctx_r12.chartType);
} }
function ChartSidebarWidgetComponent_scrm_widget_panel_0_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ChartSidebarWidgetComponent_scrm_widget_panel_0_ng_container_9_scrm_chart_1_Template, 1, 2, "scrm-chart", 19);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.dataSource && ctx_r3.chartType);
} }
function ChartSidebarWidgetComponent_scrm_widget_panel_0_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵelement(1, "scrm-loading-spinner", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("m-5", !ctx_r4.dataSource);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("overlay", true);
} }
function ChartSidebarWidgetComponent_scrm_widget_panel_0_p_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r5.language.getFieldLabel(ctx_r5.messageLabelKey), " ");
} }
function ChartSidebarWidgetComponent_scrm_widget_panel_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "scrm-widget-panel", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5);
    i0.ɵɵtemplate(5, ChartSidebarWidgetComponent_scrm_widget_panel_0_div_5_Template, 5, 2, "div", 6);
    i0.ɵɵelementStart(6, "div", 7)(7, "div", 8)(8, "div", 9);
    i0.ɵɵtemplate(9, ChartSidebarWidgetComponent_scrm_widget_panel_0_ng_container_9_Template, 2, 1, "ng-container", 10);
    i0.ɵɵtemplate(10, ChartSidebarWidgetComponent_scrm_widget_panel_0_div_10_Template, 2, 3, "div", 11);
    i0.ɵɵtemplate(11, ChartSidebarWidgetComponent_scrm_widget_panel_0_p_11_Template, 2, 1, "p", 12);
    i0.ɵɵelementEnd()()()()()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("title", ctx_r0.title);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r0.isConfigured && ctx_r0.chartOptions.toggle);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r0.selectedChart && !ctx_r0.loading);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.loading);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.loading && (!ctx_r0.isConfigured() || !ctx_r0.dataSource));
} }
class ChartSidebarWidgetComponent extends BaseWidgetComponent {
    language;
    factory;
    charts = {};
    titleLabelKey = 'LBL_INSIGHTS';
    title = '';
    messageLabelKey = 'LBL_CHART_NOT_FOUND';
    selectedChart = '';
    chartType = '';
    dataSource;
    vm$;
    loading$;
    appStrings$;
    loading = true;
    subs = [];
    constructor(language, factory) {
        super();
        this.language = language;
        this.factory = factory;
        // Fallback to avoid undefined streams if language store is missing
        this.language = language ?? { appStrings$: of({}) };
    }
    ngOnInit() {
        this.appStrings$ = this.language?.appStrings$ ?? of({});
        if (this.validateConfig() === false) {
            return;
        }
        if (this.context$) {
            this.subs.push(this.context$.subscribe((context) => {
                this.context = context;
                Object.keys(this.charts).forEach(key => {
                    const chart = this.charts[key];
                    chart.store.context = context;
                });
            }));
        }
        const options = this.config.options;
        const charts = options.charts;
        if (options.defaultChart) {
            this.selectedChart = options.defaultChart || '';
        }
        this.setupCharts(charts);
        this.setHeaderTitle(options);
        this.reloadSelectedChart();
        this.setupLoading();
        this.setupVM();
        this.setupReload();
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    get configuredCharts() {
        return this.chartOptions.charts || [];
    }
    get chartOptions() {
        return this.config.options || {};
    }
    isConfigured() {
        return !!(this.config.options.charts && this.config.options.charts.length);
    }
    getLabelKey(stat) {
        const labelKey = stat.statistic.metadata && stat.statistic.metadata.labelKey;
        if (labelKey) {
            return labelKey;
        }
        return this.charts[stat.query.key].labelKey;
    }
    getKey(chart) {
        return chart.chartKey || chart.statisticsType || '';
    }
    validateConfig() {
        if (!this.context || !this.context.module) {
            this.messageLabelKey = 'LBL_BAD_CONFIG_BAD_CONTEXT';
            return false;
        }
        if (!this.config) {
            this.messageLabelKey = 'LBL_BAD_CONFIG_NO_CONFIG';
            return false;
        }
        const options = this.config.options;
        if (!options || !options.charts || !options.charts.length) {
            this.messageLabelKey = 'LBL_BAD_CONFIG_NO_STATISTICS_KEY';
            return false;
        }
        return true;
    }
    setupCharts(charts) {
        this.selectedChart = '';
        charts.forEach((chart) => {
            const key = this.getKey(chart);
            if (!key) {
                return;
            }
            if (!this.selectedChart) {
                this.selectedChart = key || '';
                this.chartType = chart.chartType;
            }
            this.buildChartInfo(key, chart);
            this.initChartStore(key, chart);
        });
    }
    buildChartInfo(key, chart) {
        this.charts[key] = {
            key,
            labelKey: chart.labelKey || '',
            chartType: chart.chartType,
            statisticsType: chart.statisticsType,
            store: this.factory.create(),
            reload: true
        };
    }
    initChartStore(key, chart) {
        this.charts[key].store.init(this.context.module, {
            key: chart.statisticsType,
            context: { ...this.context }
        }, false);
        this.charts[key].store.setDefaultOptions(chart.chartOptions);
    }
    setHeaderTitle(options) {
        if (this.config.labelKey) {
            this.titleLabelKey = this.config.labelKey;
        }
        if (options.headerTitle) {
            if (!this.charts || !this.charts[this.selectedChart] || !this.charts[this.selectedChart].labelKey) {
                return;
            }
            this.titleLabelKey = this.charts[this.selectedChart].labelKey;
        }
        this.title = this.language.getFieldLabel(this.titleLabelKey);
    }
    onChartSelect() {
        this.dataSource = null;
        this.chartType = this.charts[this.selectedChart].chartType;
        this.reloadSelectedChart(false);
    }
    setupVM() {
        const statistics$ = [];
        Object.keys(this.charts).forEach(key => statistics$.push(this.charts[key].store.state$));
        let statisticObs = of([]);
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
        this.vm$ = statisticObs.pipe(combineLatestWith(this.language.appStrings$), map(([statistics, appStrings]) => {
            const statsMap = this.mapChartData(statistics);
            return {
                statistics: statsMap,
                appStrings
            };
        }));
    }
    mapChartData(statistics) {
        const statsMap = {};
        statistics.forEach((statistic) => {
            if (!statistic.query.key) {
                return;
            }
            statsMap[statistic.query.key] = statistic;
            this.charts[statistic.query.key].labelKey = this.getLabelKey(statistic);
        });
        return statsMap;
    }
    setupReload() {
        if (!this.config.reload$) {
            return;
        }
        this.subs.push(this.config.reload$.subscribe(() => {
            if (this.loading === true) {
                return;
            }
            this.loading = true;
            Object.keys(this.charts).forEach(chartKey => {
                this.charts[chartKey].reload = true;
            });
            this.reloadSelectedChart();
        }));
    }
    setupLoading() {
        const loadings$ = [];
        Object.keys(this.charts).forEach(key => loadings$.push(this.charts[key].store.loading$));
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
            let loading = false;
            loadings.forEach(value => {
                loading = loading || value;
            });
            this.loading = loading;
            return loading;
        }));
        this.subs.push(this.loading$.subscribe());
    }
    reloadSelectedChart(useCache = false) {
        if (!this.charts || !this.charts[this.selectedChart] || !this.charts[this.selectedChart].store) {
            return;
        }
        useCache = useCache && !this.charts[this.selectedChart].reload;
        this.charts[this.selectedChart].store.load(useCache).pipe(take(1), tap(() => {
            this.dataSource = this.charts[this.selectedChart]?.store?.getDataSource() ?? null;
            this.charts[this.selectedChart].reload = false;
        })).subscribe();
    }
    static ɵfac = function ChartSidebarWidgetComponent_Factory(t) { return new (t || ChartSidebarWidgetComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i2.ChartDataStoreFactory)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ChartSidebarWidgetComponent, selectors: [["chart-sidebar-widget"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 3, consts: [[3, "title", 4, "ngIf"], [3, "title"], ["widget-body", ""], [1, "widget-background", "chart-sidebar-widget"], [1, "mb-2", "ml-1", "mr-1"], [1, "container-fluid"], ["class", "row", 4, "ngIf"], [1, "row", "mt-3", "chart-widget"], [1, "col", "pl-0", "pr-0", "pb-1", "pt-1", "d-flex", "justify-content-center"], [1, "flex-grow-1"], [4, "ngIf"], ["class", "chart-loading", 3, "m-5", 4, "ngIf"], ["class", "lead text-center pt-3", 4, "ngIf"], [1, "row"], [1, "col", "pr-2", "pl-2"], [1, "login-form", "mb-0", "mt-2", "w-100"], ["name", "chart", 1, "m-0", "w-100", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [3, "dataSource", "type", 4, "ngIf"], [3, "dataSource", "type"], [1, "chart-loading"], [3, "overlay"], [1, "lead", "text-center", "pt-3"]], template: function ChartSidebarWidgetComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ChartSidebarWidgetComponent_scrm_widget_panel_0_Template, 12, 5, "scrm-widget-panel", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.vm$));
        } }, dependencies: [i3.NgForOf, i3.NgIf, i4.WidgetPanelComponent, i5.ɵNgNoValidate, i5.NgSelectOption, i5.ɵNgSelectMultipleOption, i5.SelectControlValueAccessor, i5.NgControlStatus, i5.NgControlStatusGroup, i5.NgModel, i5.NgForm, i6.ChartComponent, i7.LoadingSpinnerComponent, i3.AsyncPipe], encapsulation: 2 });
}
export { ChartSidebarWidgetComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChartSidebarWidgetComponent, [{
        type: Component,
        args: [{ selector: 'chart-sidebar-widget', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<scrm-widget-panel [title]=\"this.title\" *ngIf=\"(vm$ | async) as vm\">\n    <div widget-body>\n        <div class=\"widget-background chart-sidebar-widget\">\n            <div class=\"mb-2 ml-1 mr-1\">\n                <div class=\"container-fluid\">\n                    <div class=\"row\" *ngIf=\"isConfigured && chartOptions.toggle\">\n                        <div class=\"col pr-2 pl-2\">\n                            <form class=\"login-form mb-0 mt-2 w-100\">\n\n                                <select (ngModelChange)=\"onChartSelect()\" [(ngModel)]=\"selectedChart\" class=\"m-0 w-100\"\n                                        name=\"chart\">\n                                    <option *ngFor=\"let chart of configuredCharts; index as i\"\n                                            [value]=\"getKey(chart)\">\n                                        {{language.getFieldLabel(chart.labelKey)}}\n                                    </option>\n                                </select>\n                            </form>\n                        </div>\n                    </div>\n\n                    <div class=\"row mt-3 chart-widget\">\n                        <div class=\"col pl-0 pr-0 pb-1 pt-1 d-flex justify-content-center\">\n                            <div class=\"flex-grow-1\">\n                                <ng-container *ngIf=\"selectedChart && !loading\">\n                                    <scrm-chart *ngIf=\"dataSource && chartType\"\n                                                [dataSource]=\"dataSource\"\n                                                [type]=\"chartType\">\n                                    </scrm-chart>\n                                </ng-container>\n                                <div *ngIf=\"loading\" [class.m-5]=\"!dataSource\" class=\"chart-loading\">\n                                    <scrm-loading-spinner [overlay]=\"true\"></scrm-loading-spinner>\n                                </div>\n                                <p *ngIf=\"!loading && (!isConfigured() || !dataSource)\"\n                                   class=\"lead text-center pt-3\">\n                                    {{language.getFieldLabel(this.messageLabelKey)}}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</scrm-widget-panel>\n" }]
    }], function () { return [{ type: i1.LanguageStore }, { type: i2.ChartDataStoreFactory }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtc2lkZWJhci13aWRnZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbnRhaW5lcnMvc2lkZWJhci13aWRnZXQvY29tcG9uZW50cy9jaGFydC1zaWRlYmFyLXdpZGdldC9jaGFydC1zaWRlYmFyLXdpZGdldC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9zaWRlYmFyLXdpZGdldC9jb21wb25lbnRzL2NoYXJ0LXNpZGViYXItd2lkZ2V0L2NoYXJ0LXNpZGViYXItd2lkZ2V0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBRWhELE9BQU8sRUFBQyxpQkFBaUIsRUFBYyxFQUFFLEVBQWUsTUFBTSxNQUFNLENBQUM7QUFDckUsT0FBTyxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sb0NBQW9DLENBQUM7Ozs7Ozs7Ozs7SUNPbkMsa0NBQ2dDO0lBQzVCLFlBQ0o7SUFBQSxpQkFBUzs7OztJQUZELCtDQUF1QjtJQUMzQixlQUNKO0lBREksaUZBQ0o7Ozs7SUFUaEIsK0JBQTZELGNBQUEsZUFBQSxpQkFBQTtJQUl6Qyw4TUFBaUIsZUFBQSxzQkFBZSxDQUFBLElBQUMsMFBBQUE7SUFFckMsNkdBR1M7SUFDYixpQkFBUyxFQUFBLEVBQUEsRUFBQTs7O0lBTmlDLGVBQTJCO0lBQTNCLDhDQUEyQjtJQUV2QyxlQUFxQjtJQUFyQixpREFBcUI7OztJQWEvQyxpQ0FHYTs7O0lBRkQsK0NBQXlCLDJCQUFB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RyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFFL0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQ3JELElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxHQUFHLENBQUMsR0FBRyxFQUFFO1lBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLElBQUksSUFBSSxDQUFDO1lBQ2xGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDbkQsQ0FBQyxDQUFDLENBQ0wsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNsQixDQUFDO3FGQXBUUSwyQkFBMkI7NkRBQTNCLDJCQUEyQjtZQ25DeEMseUdBMkNvQjs7O1lBM0NxQixvREFBb0I7OztTRG1DaEQsMkJBQTJCO3VGQUEzQiwyQkFBMkI7Y0FMdkMsU0FBUzsyQkFDSSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDaGFydERhdGFTb3VyY2UsIENoYXJ0TWV0YWRhdGEsIENoYXJ0c1dpZGdldE9wdGlvbnMsIFN0YXRpc3RpY3NRdWVyeSwgVmlld0NvbnRleHR9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge2NvbWJpbmVMYXRlc3RXaXRoLCBPYnNlcnZhYmxlLCBvZiwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7bWFwLCB0YWtlLCB0YXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7Q2hhcnREYXRhU3RvcmVGYWN0b3J5fSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9jaGFydC1kYXRhL2NoYXJ0LWRhdGEuc3RvcmUuZmFjdG9yeSc7XG5pbXBvcnQge0Jhc2VXaWRnZXRDb21wb25lbnR9IGZyb20gJy4uLy4uLy4uL3dpZGdldHMvYmFzZS13aWRnZXQubW9kZWwnO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlLCBMYW5ndWFnZVN0cmluZ01hcH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtDaGFydERhdGFTdGF0ZSwgQ2hhcnREYXRhU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL2NoYXJ0LWRhdGEvY2hhcnQtZGF0YS5zdG9yZSc7XG5cbmludGVyZmFjZSBDaGFydFN0YXRpc3RpYyB7XG4gICAga2V5OiBzdHJpbmc7XG4gICAgY2hhcnRUeXBlOiBzdHJpbmc7XG4gICAgc3RhdGlzdGljc1R5cGU6IHN0cmluZztcbiAgICBsYWJlbEtleTogc3RyaW5nO1xuICAgIHN0b3JlOiBDaGFydERhdGFTdG9yZTtcbiAgICByZWxvYWQ6IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBDaGFyRGF0YU1hcCB7XG4gICAgW2tleTogc3RyaW5nXTogQ2hhcnREYXRhU3RhdGU7XG59XG5cbmludGVyZmFjZSBDaGFydFN0YXRpc3RpY01hcCB7XG4gICAgW2tleTogc3RyaW5nXTogQ2hhcnRTdGF0aXN0aWM7XG59XG5cbmludGVyZmFjZSBDaGFydFNpZGViYXJXaWRnZXRTdGF0ZSB7XG4gICAgc3RhdGlzdGljczogeyBba2V5OiBzdHJpbmddOiBDaGFydERhdGFTdGF0ZSB9O1xuICAgIGFwcFN0cmluZ3M6IExhbmd1YWdlU3RyaW5nTWFwO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NoYXJ0LXNpZGViYXItd2lkZ2V0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vY2hhcnQtc2lkZWJhci13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW11cbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnRTaWRlYmFyV2lkZ2V0Q29tcG9uZW50IGV4dGVuZHMgQmFzZVdpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgY2hhcnRzOiBDaGFydFN0YXRpc3RpY01hcCA9IHt9O1xuICAgIHRpdGxlTGFiZWxLZXkgPSAnTEJMX0lOU0lHSFRTJztcbiAgICB0aXRsZSA9ICcnO1xuICAgIG1lc3NhZ2VMYWJlbEtleSA9ICdMQkxfQ0hBUlRfTk9UX0ZPVU5EJztcbiAgICBzZWxlY3RlZENoYXJ0ID0gJyc7XG4gICAgY2hhcnRUeXBlID0gJyc7XG4gICAgZGF0YVNvdXJjZTogQ2hhcnREYXRhU291cmNlO1xuICAgIHZtJDogT2JzZXJ2YWJsZTxDaGFydFNpZGViYXJXaWRnZXRTdGF0ZT47XG4gICAgbG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgYXBwU3RyaW5ncyQ6IE9ic2VydmFibGU8TGFuZ3VhZ2VTdHJpbmdNYXA+O1xuICAgIGxvYWRpbmcgPSB0cnVlO1xuICAgIHByb3RlY3RlZCBzdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUsIHByb3RlY3RlZCBmYWN0b3J5OiBDaGFydERhdGFTdG9yZUZhY3RvcnkpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgLy8gRmFsbGJhY2sgdG8gYXZvaWQgdW5kZWZpbmVkIHN0cmVhbXMgaWYgbGFuZ3VhZ2Ugc3RvcmUgaXMgbWlzc2luZ1xuICAgICAgICAodGhpcyBhcyBhbnkpLmxhbmd1YWdlID0gbGFuZ3VhZ2UgPz8ge2FwcFN0cmluZ3MkOiBvZih7fSl9O1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFwcFN0cmluZ3MkID0gdGhpcy5sYW5ndWFnZT8uYXBwU3RyaW5ncyQgPz8gb2Yoe30pO1xuXG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRlQ29uZmlnKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb250ZXh0JCkge1xuICAgICAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5jb250ZXh0JC5zdWJzY3JpYmUoKGNvbnRleHQ6IFZpZXdDb250ZXh0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuY2hhcnRzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoYXJ0ID0gdGhpcy5jaGFydHNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgY2hhcnQuc3RvcmUuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvcHRpb25zOiBDaGFydHNXaWRnZXRPcHRpb25zID0gdGhpcy5jb25maWcub3B0aW9ucztcbiAgICAgICAgY29uc3QgY2hhcnRzOiBDaGFydE1ldGFkYXRhW10gPSBvcHRpb25zLmNoYXJ0cztcblxuICAgICAgICBpZiAob3B0aW9ucy5kZWZhdWx0Q2hhcnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDaGFydCA9IG9wdGlvbnMuZGVmYXVsdENoYXJ0IHx8ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXR1cENoYXJ0cyhjaGFydHMpO1xuICAgICAgICB0aGlzLnNldEhlYWRlclRpdGxlKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLnJlbG9hZFNlbGVjdGVkQ2hhcnQoKTtcbiAgICAgICAgdGhpcy5zZXR1cExvYWRpbmcoKTtcbiAgICAgICAgdGhpcy5zZXR1cFZNKCk7XG4gICAgICAgIHRoaXMuc2V0dXBSZWxvYWQoKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgICB9XG5cbiAgICBnZXQgY29uZmlndXJlZENoYXJ0cygpOiBDaGFydE1ldGFkYXRhW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFydE9wdGlvbnMuY2hhcnRzIHx8IFtdO1xuICAgIH1cblxuICAgIGdldCBjaGFydE9wdGlvbnMoKTogQ2hhcnRzV2lkZ2V0T3B0aW9ucyB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5vcHRpb25zIHx8IHt9O1xuICAgIH1cblxuICAgIGlzQ29uZmlndXJlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICEhKHRoaXMuY29uZmlnLm9wdGlvbnMuY2hhcnRzICYmIHRoaXMuY29uZmlnLm9wdGlvbnMuY2hhcnRzLmxlbmd0aCk7XG4gICAgfVxuXG4gICAgZ2V0TGFiZWxLZXkoc3RhdDogQ2hhcnREYXRhU3RhdGUpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBsYWJlbEtleSA9IHN0YXQuc3RhdGlzdGljLm1ldGFkYXRhICYmIHN0YXQuc3RhdGlzdGljLm1ldGFkYXRhLmxhYmVsS2V5O1xuICAgICAgICBpZiAobGFiZWxLZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBsYWJlbEtleTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmNoYXJ0c1tzdGF0LnF1ZXJ5LmtleV0ubGFiZWxLZXk7XG4gICAgfVxuXG4gICAgZ2V0S2V5KGNoYXJ0OiBDaGFydE1ldGFkYXRhKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGNoYXJ0LmNoYXJ0S2V5IHx8IGNoYXJ0LnN0YXRpc3RpY3NUeXBlIHx8ICcnO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB2YWxpZGF0ZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRleHQgfHwgIXRoaXMuY29udGV4dC5tb2R1bGUpIHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUxhYmVsS2V5ID0gJ0xCTF9CQURfQ09ORklHX0JBRF9DT05URVhUJztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5jb25maWcpIHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUxhYmVsS2V5ID0gJ0xCTF9CQURfQ09ORklHX05PX0NPTkZJRyc7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvcHRpb25zOiBDaGFydHNXaWRnZXRPcHRpb25zID0gdGhpcy5jb25maWcub3B0aW9ucztcblxuICAgICAgICBpZiAoIW9wdGlvbnMgfHwgIW9wdGlvbnMuY2hhcnRzIHx8ICFvcHRpb25zLmNoYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUxhYmVsS2V5ID0gJ0xCTF9CQURfQ09ORklHX05PX1NUQVRJU1RJQ1NfS0VZJztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZXR1cENoYXJ0cyhjaGFydHM6IENoYXJ0TWV0YWRhdGFbXSk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDaGFydCA9ICcnO1xuXG4gICAgICAgIGNoYXJ0cy5mb3JFYWNoKChjaGFydDogQ2hhcnRNZXRhZGF0YSkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBrZXkgPSB0aGlzLmdldEtleShjaGFydCk7XG5cbiAgICAgICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRoaXMuc2VsZWN0ZWRDaGFydCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDaGFydCA9IGtleSB8fCAnJztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJ0VHlwZSA9IGNoYXJ0LmNoYXJ0VHlwZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5idWlsZENoYXJ0SW5mbyhrZXksIGNoYXJ0KTtcbiAgICAgICAgICAgIHRoaXMuaW5pdENoYXJ0U3RvcmUoa2V5LCBjaGFydCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBidWlsZENoYXJ0SW5mbyhrZXk6IHN0cmluZywgY2hhcnQ6IENoYXJ0TWV0YWRhdGEpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jaGFydHNba2V5XSA9IHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGxhYmVsS2V5OiBjaGFydC5sYWJlbEtleSB8fCAnJyxcbiAgICAgICAgICAgIGNoYXJ0VHlwZTogY2hhcnQuY2hhcnRUeXBlLFxuICAgICAgICAgICAgc3RhdGlzdGljc1R5cGU6IGNoYXJ0LnN0YXRpc3RpY3NUeXBlLFxuICAgICAgICAgICAgc3RvcmU6IHRoaXMuZmFjdG9yeS5jcmVhdGUoKSxcbiAgICAgICAgICAgIHJlbG9hZDogdHJ1ZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0Q2hhcnRTdG9yZShrZXk6IHN0cmluZywgY2hhcnQ6IENoYXJ0TWV0YWRhdGEpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jaGFydHNba2V5XS5zdG9yZS5pbml0KFxuICAgICAgICAgICAgdGhpcy5jb250ZXh0Lm1vZHVsZSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IGNoYXJ0LnN0YXRpc3RpY3NUeXBlLFxuICAgICAgICAgICAgICAgIGNvbnRleHQ6IHsuLi50aGlzLmNvbnRleHR9XG4gICAgICAgICAgICB9IGFzIFN0YXRpc3RpY3NRdWVyeSxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuY2hhcnRzW2tleV0uc3RvcmUuc2V0RGVmYXVsdE9wdGlvbnMoY2hhcnQuY2hhcnRPcHRpb25zKTtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBzZXRIZWFkZXJUaXRsZShvcHRpb25zOiBDaGFydHNXaWRnZXRPcHRpb25zKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmxhYmVsS2V5KSB7XG4gICAgICAgICAgICB0aGlzLnRpdGxlTGFiZWxLZXkgPSB0aGlzLmNvbmZpZy5sYWJlbEtleTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmhlYWRlclRpdGxlKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY2hhcnRzIHx8ICF0aGlzLmNoYXJ0c1t0aGlzLnNlbGVjdGVkQ2hhcnRdIHx8ICF0aGlzLmNoYXJ0c1t0aGlzLnNlbGVjdGVkQ2hhcnRdLmxhYmVsS2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnRpdGxlTGFiZWxLZXkgPSB0aGlzLmNoYXJ0c1t0aGlzLnNlbGVjdGVkQ2hhcnRdLmxhYmVsS2V5O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50aXRsZSA9IHRoaXMubGFuZ3VhZ2UuZ2V0RmllbGRMYWJlbCh0aGlzLnRpdGxlTGFiZWxLZXkpO1xuICAgIH1cblxuICAgIG9uQ2hhcnRTZWxlY3QoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG51bGw7XG4gICAgICAgIHRoaXMuY2hhcnRUeXBlID0gdGhpcy5jaGFydHNbdGhpcy5zZWxlY3RlZENoYXJ0XS5jaGFydFR5cGU7XG4gICAgICAgIHRoaXMucmVsb2FkU2VsZWN0ZWRDaGFydChmYWxzZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldHVwVk0oKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3Qgc3RhdGlzdGljcyQ6IE9ic2VydmFibGU8Q2hhcnREYXRhU3RhdGU+W10gPSBbXTtcblxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmNoYXJ0cykuZm9yRWFjaChrZXkgPT4gc3RhdGlzdGljcyQucHVzaCh0aGlzLmNoYXJ0c1trZXldLnN0b3JlLnN0YXRlJCkpO1xuXG4gICAgICAgIGxldCBzdGF0aXN0aWNPYnM6IE9ic2VydmFibGU8Q2hhcnREYXRhU3RhdGVbXT4gPSBvZihbXSk7XG5cbiAgICAgICAgaWYoc3RhdGlzdGljcyQubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgc3RhdGlzdGljT2JzID0gb2YoW10pO1xuICAgICAgICB9IGVsc2UgaWYoc3RhdGlzdGljcyQubGVuZ3RoID09PSAxKXtcbiAgICAgICAgICAgIHN0YXRpc3RpY09icyA9IHN0YXRpc3RpY3MkWzBdLnBpcGUoXG4gICAgICAgICAgICAgICAgbWFwKHZhbHVlID0+IFt2YWx1ZV0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGZpcnNPYnMgPSBudWxsO1xuICAgICAgICAgICAgbGV0IG90aGVycztcbiAgICAgICAgICAgIFtmaXJzT2JzLCAuLi5vdGhlcnNdID0gc3RhdGlzdGljcyQ7XG4gICAgICAgICAgICBzdGF0aXN0aWNPYnMgPSBmaXJzT2JzLnBpcGUoXG4gICAgICAgICAgICAgICAgY29tYmluZUxhdGVzdFdpdGgob3RoZXJzKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudm0kID0gc3RhdGlzdGljT2JzLnBpcGUoXG4gICAgICAgICAgICBjb21iaW5lTGF0ZXN0V2l0aCh0aGlzLmxhbmd1YWdlLmFwcFN0cmluZ3MkKSxcbiAgICAgICAgICAgIG1hcCgoW3N0YXRpc3RpY3MsIGFwcFN0cmluZ3NdKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHNNYXAgPSB0aGlzLm1hcENoYXJ0RGF0YShzdGF0aXN0aWNzKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpc3RpY3M6IHN0YXRzTWFwLFxuICAgICAgICAgICAgICAgICAgICBhcHBTdHJpbmdzXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1hcENoYXJ0RGF0YShzdGF0aXN0aWNzOiBDaGFydERhdGFTdGF0ZVtdKTogQ2hhckRhdGFNYXAge1xuICAgICAgICBjb25zdCBzdGF0c01hcDogQ2hhckRhdGFNYXAgPSB7fTtcblxuICAgICAgICBzdGF0aXN0aWNzLmZvckVhY2goKHN0YXRpc3RpYzogQ2hhcnREYXRhU3RhdGUpID0+IHtcblxuICAgICAgICAgICAgaWYgKCFzdGF0aXN0aWMucXVlcnkua2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdGF0c01hcFtzdGF0aXN0aWMucXVlcnkua2V5XSA9IHN0YXRpc3RpYztcblxuICAgICAgICAgICAgdGhpcy5jaGFydHNbc3RhdGlzdGljLnF1ZXJ5LmtleV0ubGFiZWxLZXkgPSB0aGlzLmdldExhYmVsS2V5KHN0YXRpc3RpYyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzdGF0c01hcDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2V0dXBSZWxvYWQoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5jb25maWcucmVsb2FkJCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5jb25maWcucmVsb2FkJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMubG9hZGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5jaGFydHMpLmZvckVhY2goY2hhcnRLZXkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhcnRzW2NoYXJ0S2V5XS5yZWxvYWQgPSB0cnVlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMucmVsb2FkU2VsZWN0ZWRDaGFydCgpO1xuICAgICAgICB9KSk7XG5cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2V0dXBMb2FkaW5nKCk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IGxvYWRpbmdzJDogT2JzZXJ2YWJsZTxib29sZWFuPltdID0gW107XG5cbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5jaGFydHMpLmZvckVhY2goa2V5ID0+IGxvYWRpbmdzJC5wdXNoKHRoaXMuY2hhcnRzW2tleV0uc3RvcmUubG9hZGluZyQpKTtcblxuICAgICAgICBsZXQgc3RhdGlzdGljT2JzOiBPYnNlcnZhYmxlPGJvb2xlYW5bXT4gPSBvZihbXSk7XG5cbiAgICAgICAgaWYobG9hZGluZ3MkLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIHN0YXRpc3RpY09icyA9IG9mKFtdKTtcbiAgICAgICAgfSBlbHNlIGlmKGxvYWRpbmdzJC5sZW5ndGggPT09IDEpe1xuICAgICAgICAgICAgc3RhdGlzdGljT2JzID0gbG9hZGluZ3MkWzBdLnBpcGUoXG4gICAgICAgICAgICAgICAgbWFwKHZhbHVlID0+IFt2YWx1ZV0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGZpcnNPYnMgPSBudWxsO1xuICAgICAgICAgICAgbGV0IG90aGVycztcbiAgICAgICAgICAgIFtmaXJzT2JzLCAuLi5vdGhlcnNdID0gbG9hZGluZ3MkO1xuICAgICAgICAgICAgc3RhdGlzdGljT2JzID0gZmlyc09icy5waXBlKFxuICAgICAgICAgICAgICAgIGNvbWJpbmVMYXRlc3RXaXRoKG90aGVycylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvYWRpbmckID0gc3RhdGlzdGljT2JzLnBpcGUoXG4gICAgICAgICAgICBtYXAoKGxvYWRpbmdzKSA9PiB7XG5cbiAgICAgICAgICAgIGlmICghbG9hZGluZ3MgfHwgbG9hZGluZ3MubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGxvYWRpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgbG9hZGluZ3MuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgbG9hZGluZyA9IGxvYWRpbmcgfHwgdmFsdWU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gbG9hZGluZztcblxuICAgICAgICAgICAgcmV0dXJuIGxvYWRpbmc7XG4gICAgICAgIH0pKTtcblxuICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLmxvYWRpbmckLnN1YnNjcmliZSgpKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVsb2FkU2VsZWN0ZWRDaGFydCh1c2VDYWNoZSA9IGZhbHNlKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKCF0aGlzLmNoYXJ0cyB8fCAhdGhpcy5jaGFydHNbdGhpcy5zZWxlY3RlZENoYXJ0XSB8fCAhdGhpcy5jaGFydHNbdGhpcy5zZWxlY3RlZENoYXJ0XS5zdG9yZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdXNlQ2FjaGUgPSB1c2VDYWNoZSAmJiAhdGhpcy5jaGFydHNbdGhpcy5zZWxlY3RlZENoYXJ0XS5yZWxvYWQ7XG5cbiAgICAgICAgdGhpcy5jaGFydHNbdGhpcy5zZWxlY3RlZENoYXJ0XS5zdG9yZS5sb2FkKHVzZUNhY2hlKS5waXBlKFxuICAgICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICAgIHRhcCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlID0gdGhpcy5jaGFydHNbdGhpcy5zZWxlY3RlZENoYXJ0XT8uc3RvcmU/LmdldERhdGFTb3VyY2UoKSA/PyBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhcnRzW3RoaXMuc2VsZWN0ZWRDaGFydF0ucmVsb2FkID0gZmFsc2U7XG4gICAgICAgICAgICB9KVxuICAgICAgICApLnN1YnNjcmliZSgpO1xuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxzY3JtLXdpZGdldC1wYW5lbCBbdGl0bGVdPVwidGhpcy50aXRsZVwiICpuZ0lmPVwiKHZtJCB8IGFzeW5jKSBhcyB2bVwiPlxuICAgIDxkaXYgd2lkZ2V0LWJvZHk+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3aWRnZXQtYmFja2dyb3VuZCBjaGFydC1zaWRlYmFyLXdpZGdldFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTIgbWwtMSBtci0xXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgKm5nSWY9XCJpc0NvbmZpZ3VyZWQgJiYgY2hhcnRPcHRpb25zLnRvZ2dsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBwci0yIHBsLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzcz1cImxvZ2luLWZvcm0gbWItMCBtdC0yIHctMTAwXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCAobmdNb2RlbENoYW5nZSk9XCJvbkNoYXJ0U2VsZWN0KClcIiBbKG5nTW9kZWwpXT1cInNlbGVjdGVkQ2hhcnRcIiBjbGFzcz1cIm0tMCB3LTEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNoYXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBjaGFydCBvZiBjb25maWd1cmVkQ2hhcnRzOyBpbmRleCBhcyBpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cImdldEtleShjaGFydClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2xhbmd1YWdlLmdldEZpZWxkTGFiZWwoY2hhcnQubGFiZWxLZXkpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBtdC0zIGNoYXJ0LXdpZGdldFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBwbC0wIHByLTAgcGItMSBwdC0xIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtZ3Jvdy0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzZWxlY3RlZENoYXJ0ICYmICFsb2FkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1jaGFydCAqbmdJZj1cImRhdGFTb3VyY2UgJiYgY2hhcnRUeXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3R5cGVdPVwiY2hhcnRUeXBlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Njcm0tY2hhcnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwibG9hZGluZ1wiIFtjbGFzcy5tLTVdPVwiIWRhdGFTb3VyY2VcIiBjbGFzcz1cImNoYXJ0LWxvYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWxvYWRpbmctc3Bpbm5lciBbb3ZlcmxheV09XCJ0cnVlXCI+PC9zY3JtLWxvYWRpbmctc3Bpbm5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwICpuZ0lmPVwiIWxvYWRpbmcgJiYgKCFpc0NvbmZpZ3VyZWQoKSB8fCAhZGF0YVNvdXJjZSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxlYWQgdGV4dC1jZW50ZXIgcHQtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tsYW5ndWFnZS5nZXRGaWVsZExhYmVsKHRoaXMubWVzc2FnZUxhYmVsS2V5KX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvc2NybS13aWRnZXQtcGFuZWw+XG4iXX0=