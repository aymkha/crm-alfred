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
import { isFalse } from 'common';
import { BaseChartComponent } from '../base-chart/base-chart.component';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/ui/screen-size-observer/screen-size-observer.service";
import * as i2 from "@angular/common";
import * as i3 from "@swimlane/ngx-charts";
import * as i4 from "../chart-message-area/chart-message-area.component";
import * as i5 from "../../../loading-spinner/loading-spinner.component";
function LineChartComponent_scrm_chart_message_area_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-chart-message-area", 3);
} }
function LineChartComponent_ng_container_1_ngx_charts_line_chart_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ngx-charts-line-chart", 5);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("animations", false)("results", ctx_r3.results)("view", ctx_r3.view())("scheme", ctx_r3.scheme)("gradient", ctx_r3.gradient)("xAxis", ctx_r3.xAxis)("yAxis", ctx_r3.yAxis)("legend", ctx_r3.legend)("xScaleMin", ctx_r3.xScaleMin)("xScaleMax", ctx_r3.xScaleMax)("xAxisTicks", ctx_r3.xAxisTicks)("showXAxisLabel", ctx_r3.showXAxisLabel)("showYAxisLabel", ctx_r3.showYAxisLabel)("xAxisLabel", ctx_r3.xAxisLabel)("legendPosition", "below")("autoScale", true)("yAxisTickFormatting", ctx_r3.yAxisTickFormatting)("xAxisTickFormatting", ctx_r3.xAxisTickFormatting)("tooltipDisabled", ctx_r3.tooltipDisabled)("yAxisLabel", ctx_r3.yAxisLabel);
} }
function LineChartComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, LineChartComponent_ng_container_1_ngx_charts_line_chart_1_Template, 1, 20, "ngx-charts-line-chart", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.results && ctx_r1.results.length > 0);
} }
function LineChartComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "scrm-loading-spinner");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵclassProp("m-5", true);
} }
class LineChartComponent extends BaseChartComponent {
    elementRef;
    screenSize;
    results;
    scheme;
    gradient;
    xAxis;
    yAxis;
    legend;
    xScaleMin;
    xScaleMax;
    xAxisTicks;
    showXAxisLabel;
    showYAxisLabel;
    xAxisLabel;
    yAxisLabel;
    yAxisTickFormatting;
    xAxisTickFormatting;
    tooltipDisabled;
    constructor(elementRef, screenSize) {
        super(elementRef, screenSize);
        this.elementRef = elementRef;
        this.screenSize = screenSize;
    }
    ngOnInit() {
        if (this.dataSource.options.height) {
            this.height = this.dataSource.options.height;
        }
        this.initResizeListener();
        this.subs.push(this.dataSource.getResults().subscribe(value => {
            this.results = value.multiSeries;
            this.calculateView();
        }));
        this.scheme = this.getScheme();
        this.gradient = this.getGradient();
        this.xAxis = this.getXAxis();
        this.yAxis = this.getYAxis();
        this.legend = this.getLegend();
        this.xScaleMin = this.getXScaleMin();
        this.xScaleMax = this.getXScaleMax();
        this.xAxisTicks = this.getXAxisTicks();
        this.showXAxisLabel = this.getShowXAxisLabel();
        this.showYAxisLabel = this.getShowYAxisLabel();
        this.xAxisLabel = this.getXAxisLabel();
        this.yAxisLabel = this.getYAxisLabel();
        this.yAxisTickFormatting = this.getYAxisTickFormatting();
        this.xAxisTickFormatting = this.getXAxisTickFormatting();
        this.tooltipDisabled = this.getTooltipDisabled();
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    getScheme() {
        return this.dataSource.options.scheme || 'picnic';
    }
    getGradient() {
        return this.dataSource.options.gradient || false;
    }
    getXAxis() {
        return !isFalse(this.dataSource.options.xAxis);
    }
    getYAxis() {
        return !isFalse(this.dataSource.options.yAxis);
    }
    getLegend() {
        return !isFalse(this.dataSource.options.legend);
    }
    getXScaleMin() {
        return this.dataSource.options.xScaleMin || null;
    }
    getXScaleMax() {
        return this.dataSource.options.xScaleMax || null;
    }
    getXAxisTicks() {
        return this.dataSource.options.xAxisTicks || null;
    }
    getShowXAxisLabel() {
        return !isFalse(this.dataSource.options.showXAxisLabel);
    }
    getShowYAxisLabel() {
        return this.dataSource.options.showYAxisLabel || false;
    }
    getXAxisLabel() {
        return this.dataSource.options.xAxisLabel || '';
    }
    getYAxisLabel() {
        return this.dataSource.options.yAxisLabel || '';
    }
    getYAxisTickFormatting() {
        if (!this.dataSource.options.yAxisTickFormatting) {
            return null;
        }
        return this.dataSource.tickFormatting || null;
    }
    getXAxisTickFormatting() {
        if (!this.dataSource.options.xAxisTickFormatting) {
            return null;
        }
        return this.dataSource.tickFormatting || null;
    }
    getTooltipDisabled() {
        return this.dataSource.options.tooltipDisabled || false;
    }
    static ɵfac = function LineChartComponent_Factory(t) { return new (t || LineChartComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.ScreenSizeObserverService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LineChartComponent, selectors: [["scrm-line-chart"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 3, consts: [["labelKey", "LBL_NO_DATA", 4, "ngIf"], [4, "ngIf"], ["class", "chart-loading", 3, "m-5", 4, "ngIf"], ["labelKey", "LBL_NO_DATA"], ["class", "line-chart", 3, "animations", "results", "view", "scheme", "gradient", "xAxis", "yAxis", "legend", "xScaleMin", "xScaleMax", "xAxisTicks", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "legendPosition", "autoScale", "yAxisTickFormatting", "xAxisTickFormatting", "tooltipDisabled", "yAxisLabel", 4, "ngIf"], [1, "line-chart", 3, "animations", "results", "view", "scheme", "gradient", "xAxis", "yAxis", "legend", "xScaleMin", "xScaleMax", "xAxisTicks", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "legendPosition", "autoScale", "yAxisTickFormatting", "xAxisTickFormatting", "tooltipDisabled", "yAxisLabel"], [1, "chart-loading"]], template: function LineChartComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, LineChartComponent_scrm_chart_message_area_0_Template, 1, 0, "scrm-chart-message-area", 0);
            i0.ɵɵtemplate(1, LineChartComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
            i0.ɵɵtemplate(2, LineChartComponent_div_2_Template, 2, 2, "div", 2);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.results || !ctx.results.length || ctx.results.length < 1);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.view().length);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.view().length && ctx.results && ctx.results.length > 0);
        } }, dependencies: [i2.NgIf, i3.LineChartComponent, i4.ChartMessageAreaComponent, i5.LoadingSpinnerComponent], encapsulation: 2 });
}
export { LineChartComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LineChartComponent, [{
        type: Component,
        args: [{ selector: 'scrm-line-chart', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<scrm-chart-message-area *ngIf=\"!results || !results.length || results.length < 1\"\n                         labelKey=\"LBL_NO_DATA\"></scrm-chart-message-area>\n<ng-container *ngIf=\"view().length\">\n    <ngx-charts-line-chart *ngIf=\"results && results.length > 0\"\n                           class=\"line-chart\"\n                           [animations]=\"false\"\n                           [results]=\"results\"\n                           [view]=\"view()\"\n                           [scheme]=\"scheme\"\n                           [gradient]=\"gradient\"\n                           [xAxis]=\"xAxis\"\n                           [yAxis]=\"yAxis\"\n                           [legend]=\"legend\"\n                           [xScaleMin]=\"xScaleMin\"\n                           [xScaleMax]=\"xScaleMax\"\n                           [xAxisTicks]=\"xAxisTicks\"\n                           [showXAxisLabel]=\"showXAxisLabel\"\n                           [showYAxisLabel]=\"showYAxisLabel\"\n                           [xAxisLabel]=\"xAxisLabel\"\n                           [legendPosition]=\"'below'\"\n                           [autoScale]=\"true\"\n                           [yAxisTickFormatting]=\"yAxisTickFormatting\"\n                           [xAxisTickFormatting]=\"xAxisTickFormatting\"\n                           [tooltipDisabled]=\"tooltipDisabled\"\n                           [yAxisLabel]=\"yAxisLabel\">\n    </ngx-charts-line-chart>\n</ng-container>\n<div *ngIf=\"!view().length && results && results.length > 0\" [class.m-5]=\"true\" class=\"chart-loading\">\n    <scrm-loading-spinner></scrm-loading-spinner>\n</div>\n" }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.ScreenSizeObserverService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9jaGFydC9jb21wb25lbnRzL2xpbmUtY2hhcnQvbGluZS1jaGFydC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9jaGFydC9jb21wb25lbnRzL2xpbmUtY2hhcnQvbGluZS1jaGFydC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBZ0MsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFDLE9BQU8sRUFBYyxNQUFNLFFBQVEsQ0FBQztBQUM1QyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQzs7Ozs7Ozs7SUNEdEUsNkNBQzBFOzs7SUFFdEUsMkNBc0J3Qjs7O0lBcEJELGtDQUFvQiwyQkFBQSx1QkFBQSx5QkFBQSw2QkFBQSx1QkFBQSx1QkFBQSx5QkFBQSwrQkFBQSwrQkFBQSxpQ0FBQSx5Q0FBQSx5Q0FBQSxpQ0FBQSwyQkFBQSxtQkFBQSxtREFBQSxtREFBQSwyQ0FBQSxpQ0FBQTs7O0lBSC9DLDZCQUFvQztJQUNoQyx1SEFzQndCO0lBQzVCLDBCQUFlOzs7SUF2QmEsZUFBbUM7SUFBbkMsa0VBQW1DOzs7SUF3Qi9ELDhCQUFzRztJQUNsRyx1Q0FBNkM7SUFDakQsaUJBQU07O0lBRnVELDJCQUFrQjs7QUR2Qi9FLE1BS2Esa0JBQW1CLFNBQVEsa0JBQWtCO0lBbUJoQztJQUFrQztJQWpCeEQsT0FBTyxDQUFjO0lBQ3JCLE1BQU0sQ0FBUztJQUNmLFFBQVEsQ0FBVTtJQUNsQixLQUFLLENBQVU7SUFDZixLQUFLLENBQVU7SUFDZixN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VSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUM7SUFDbEQsQ0FBQztJQUVELHNCQUFzQjtRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEVBQUU7WUFDOUMsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDO0lBQ2xELENBQUM7SUFFRCxrQkFBa0I7UUFDZCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLGVBQWUsSUFBSSxLQUFLLENBQUM7SUFDNUQsQ0FBQzs0RUF4SFEsa0JBQWtCOzZEQUFsQixrQkFBa0I7WUNUL0IsMkdBQzBFO1lBQzFFLHFGQXdCZTtZQUNmLG1FQUVNOztZQTdCb0Isb0ZBQXVEO1lBRWxFLGVBQW1CO1lBQW5CLHdDQUFtQjtZQXlCNUIsZUFBcUQ7WUFBckQsa0ZBQXFEOzs7U0RsQjlDLGtCQUFrQjt1RkFBbEIsa0JBQWtCO2NBTDlCLFNBQVM7MkJBQ0ksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgT25EZXN0cm95LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtpc0ZhbHNlLCBNdWx0aVNlcmllc30gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7QmFzZUNoYXJ0Q29tcG9uZW50fSBmcm9tICcuLi9iYXNlLWNoYXJ0L2Jhc2UtY2hhcnQuY29tcG9uZW50JztcbmltcG9ydCB7U2NyZWVuU2l6ZU9ic2VydmVyU2VydmljZX0gZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZpY2VzL3VpL3NjcmVlbi1zaXplLW9ic2VydmVyL3NjcmVlbi1zaXplLW9ic2VydmVyLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLWxpbmUtY2hhcnQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9saW5lLWNoYXJ0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIExpbmVDaGFydENvbXBvbmVudCBleHRlbmRzIEJhc2VDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIHJlc3VsdHM6IE11bHRpU2VyaWVzO1xuICAgIHNjaGVtZTogc3RyaW5nO1xuICAgIGdyYWRpZW50OiBib29sZWFuO1xuICAgIHhBeGlzOiBib29sZWFuO1xuICAgIHlBeGlzOiBib29sZWFuO1xuICAgIGxlZ2VuZDogYm9vbGVhbjtcbiAgICB4U2NhbGVNaW46IG51bWJlciB8IHN0cmluZztcbiAgICB4U2NhbGVNYXg6IG51bWJlciB8IHN0cmluZztcbiAgICB4QXhpc1RpY2tzOiBhbnk7XG4gICAgc2hvd1hBeGlzTGFiZWw6IGJvb2xlYW47XG4gICAgc2hvd1lBeGlzTGFiZWw6IGJvb2xlYW47XG4gICAgeEF4aXNMYWJlbDogc3RyaW5nO1xuICAgIHlBeGlzTGFiZWw6IHN0cmluZztcbiAgICB5QXhpc1RpY2tGb3JtYXR0aW5nOiBGdW5jdGlvbjtcbiAgICB4QXhpc1RpY2tGb3JtYXR0aW5nOiBGdW5jdGlvbjtcbiAgICB0b29sdGlwRGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHNjcmVlblNpemU6IFNjcmVlblNpemVPYnNlcnZlclNlcnZpY2UpIHtcbiAgICAgICAgc3VwZXIoZWxlbWVudFJlZiwgc2NyZWVuU2l6ZSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmRhdGFTb3VyY2Uub3B0aW9ucy5oZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5kYXRhU291cmNlLm9wdGlvbnMuaGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbml0UmVzaXplTGlzdGVuZXIoKTtcblxuICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLmRhdGFTb3VyY2UuZ2V0UmVzdWx0cygpLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdHMgPSB2YWx1ZS5tdWx0aVNlcmllcztcbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlVmlldygpO1xuICAgICAgICB9KSk7XG5cbiAgICAgICAgdGhpcy5zY2hlbWUgPSB0aGlzLmdldFNjaGVtZSgpO1xuICAgICAgICB0aGlzLmdyYWRpZW50ID0gdGhpcy5nZXRHcmFkaWVudCgpO1xuICAgICAgICB0aGlzLnhBeGlzID0gdGhpcy5nZXRYQXhpcygpO1xuICAgICAgICB0aGlzLnlBeGlzID0gdGhpcy5nZXRZQXhpcygpO1xuICAgICAgICB0aGlzLmxlZ2VuZCA9IHRoaXMuZ2V0TGVnZW5kKCk7XG4gICAgICAgIHRoaXMueFNjYWxlTWluID0gdGhpcy5nZXRYU2NhbGVNaW4oKTtcbiAgICAgICAgdGhpcy54U2NhbGVNYXggPSB0aGlzLmdldFhTY2FsZU1heCgpO1xuICAgICAgICB0aGlzLnhBeGlzVGlja3MgPSB0aGlzLmdldFhBeGlzVGlja3MoKTtcbiAgICAgICAgdGhpcy5zaG93WEF4aXNMYWJlbCA9IHRoaXMuZ2V0U2hvd1hBeGlzTGFiZWwoKTtcbiAgICAgICAgdGhpcy5zaG93WUF4aXNMYWJlbCA9IHRoaXMuZ2V0U2hvd1lBeGlzTGFiZWwoKTtcbiAgICAgICAgdGhpcy54QXhpc0xhYmVsID0gdGhpcy5nZXRYQXhpc0xhYmVsKCk7XG4gICAgICAgIHRoaXMueUF4aXNMYWJlbCA9IHRoaXMuZ2V0WUF4aXNMYWJlbCgpO1xuICAgICAgICB0aGlzLnlBeGlzVGlja0Zvcm1hdHRpbmcgPSB0aGlzLmdldFlBeGlzVGlja0Zvcm1hdHRpbmcoKTtcbiAgICAgICAgdGhpcy54QXhpc1RpY2tGb3JtYXR0aW5nID0gdGhpcy5nZXRYQXhpc1RpY2tGb3JtYXR0aW5nKCk7XG4gICAgICAgIHRoaXMudG9vbHRpcERpc2FibGVkID0gdGhpcy5nZXRUb29sdGlwRGlzYWJsZWQoKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgICB9XG5cbiAgICBnZXRTY2hlbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZS5vcHRpb25zLnNjaGVtZSB8fCAncGljbmljJztcbiAgICB9XG5cbiAgICBnZXRHcmFkaWVudCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZS5vcHRpb25zLmdyYWRpZW50IHx8IGZhbHNlO1xuICAgIH1cblxuICAgIGdldFhBeGlzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gIWlzRmFsc2UodGhpcy5kYXRhU291cmNlLm9wdGlvbnMueEF4aXMpO1xuICAgIH1cblxuICAgIGdldFlBeGlzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gIWlzRmFsc2UodGhpcy5kYXRhU291cmNlLm9wdGlvbnMueUF4aXMpO1xuICAgIH1cblxuICAgIGdldExlZ2VuZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICFpc0ZhbHNlKHRoaXMuZGF0YVNvdXJjZS5vcHRpb25zLmxlZ2VuZCk7XG4gICAgfVxuXG4gICAgZ2V0WFNjYWxlTWluKCk6IG51bWJlciB8IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFTb3VyY2Uub3B0aW9ucy54U2NhbGVNaW4gfHwgbnVsbDtcbiAgICB9XG5cbiAgICBnZXRYU2NhbGVNYXgoKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZS5vcHRpb25zLnhTY2FsZU1heCB8fCBudWxsO1xuICAgIH1cblxuICAgIGdldFhBeGlzVGlja3MoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZS5vcHRpb25zLnhBeGlzVGlja3MgfHwgbnVsbDtcbiAgICB9XG5cbiAgICBnZXRTaG93WEF4aXNMYWJlbCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICFpc0ZhbHNlKHRoaXMuZGF0YVNvdXJjZS5vcHRpb25zLnNob3dYQXhpc0xhYmVsKTtcbiAgICB9XG5cbiAgICBnZXRTaG93WUF4aXNMYWJlbCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZS5vcHRpb25zLnNob3dZQXhpc0xhYmVsIHx8IGZhbHNlO1xuICAgIH1cblxuICAgIGdldFhBeGlzTGFiZWwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZS5vcHRpb25zLnhBeGlzTGFiZWwgfHwgJyc7XG4gICAgfVxuXG4gICAgZ2V0WUF4aXNMYWJlbCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhU291cmNlLm9wdGlvbnMueUF4aXNMYWJlbCB8fCAnJztcbiAgICB9XG5cbiAgICBnZXRZQXhpc1RpY2tGb3JtYXR0aW5nKCk6IEZ1bmN0aW9uIHtcbiAgICAgICAgaWYgKCF0aGlzLmRhdGFTb3VyY2Uub3B0aW9ucy55QXhpc1RpY2tGb3JtYXR0aW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhU291cmNlLnRpY2tGb3JtYXR0aW5nIHx8IG51bGw7XG4gICAgfVxuXG4gICAgZ2V0WEF4aXNUaWNrRm9ybWF0dGluZygpOiBGdW5jdGlvbiB7XG4gICAgICAgIGlmICghdGhpcy5kYXRhU291cmNlLm9wdGlvbnMueEF4aXNUaWNrRm9ybWF0dGluZykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZS50aWNrRm9ybWF0dGluZyB8fCBudWxsO1xuICAgIH1cblxuICAgIGdldFRvb2x0aXBEaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZS5vcHRpb25zLnRvb2x0aXBEaXNhYmxlZCB8fCBmYWxzZTtcbiAgICB9XG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48c2NybS1jaGFydC1tZXNzYWdlLWFyZWEgKm5nSWY9XCIhcmVzdWx0cyB8fCAhcmVzdWx0cy5sZW5ndGggfHwgcmVzdWx0cy5sZW5ndGggPCAxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbEtleT1cIkxCTF9OT19EQVRBXCI+PC9zY3JtLWNoYXJ0LW1lc3NhZ2UtYXJlYT5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJ2aWV3KCkubGVuZ3RoXCI+XG4gICAgPG5neC1jaGFydHMtbGluZS1jaGFydCAqbmdJZj1cInJlc3VsdHMgJiYgcmVzdWx0cy5sZW5ndGggPiAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibGluZS1jaGFydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbYW5pbWF0aW9uc109XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbcmVzdWx0c109XCJyZXN1bHRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFt2aWV3XT1cInZpZXcoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbc2NoZW1lXT1cInNjaGVtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbZ3JhZGllbnRdPVwiZ3JhZGllbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW3hBeGlzXT1cInhBeGlzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFt5QXhpc109XCJ5QXhpc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbbGVnZW5kXT1cImxlZ2VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbeFNjYWxlTWluXT1cInhTY2FsZU1pblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbeFNjYWxlTWF4XT1cInhTY2FsZU1heFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbeEF4aXNUaWNrc109XCJ4QXhpc1RpY2tzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzaG93WEF4aXNMYWJlbF09XCJzaG93WEF4aXNMYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbc2hvd1lBeGlzTGFiZWxdPVwic2hvd1lBeGlzTGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW3hBeGlzTGFiZWxdPVwieEF4aXNMYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbbGVnZW5kUG9zaXRpb25dPVwiJ2JlbG93J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbYXV0b1NjYWxlXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW3lBeGlzVGlja0Zvcm1hdHRpbmddPVwieUF4aXNUaWNrRm9ybWF0dGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbeEF4aXNUaWNrRm9ybWF0dGluZ109XCJ4QXhpc1RpY2tGb3JtYXR0aW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0b29sdGlwRGlzYWJsZWRdPVwidG9vbHRpcERpc2FibGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFt5QXhpc0xhYmVsXT1cInlBeGlzTGFiZWxcIj5cbiAgICA8L25neC1jaGFydHMtbGluZS1jaGFydD5cbjwvbmctY29udGFpbmVyPlxuPGRpdiAqbmdJZj1cIiF2aWV3KCkubGVuZ3RoICYmIHJlc3VsdHMgJiYgcmVzdWx0cy5sZW5ndGggPiAwXCIgW2NsYXNzLm0tNV09XCJ0cnVlXCIgY2xhc3M9XCJjaGFydC1sb2FkaW5nXCI+XG4gICAgPHNjcm0tbG9hZGluZy1zcGlubmVyPjwvc2NybS1sb2FkaW5nLXNwaW5uZXI+XG48L2Rpdj5cbiJdfQ==