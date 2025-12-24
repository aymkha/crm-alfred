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
import { BaseChartComponent } from '../base-chart/base-chart.component';
import { debounceTime } from "rxjs/operators";
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/language/language.store";
import * as i2 from "../../../../services/ui/screen-size-observer/screen-size-observer.service";
import * as i3 from "@angular/common";
import * as i4 from "@swimlane/ngx-charts";
import * as i5 from "../chart-message-area/chart-message-area.component";
import * as i6 from "../../../loading-spinner/loading-spinner.component";
function PieGridChartComponent_scrm_chart_message_area_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-chart-message-area", 3);
} }
function PieGridChartComponent_ng_container_1_ngx_charts_pie_grid_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ngx-charts-pie-grid", 5);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("animations", false)("view", ctx_r3.view())("scheme", ctx_r3.scheme)("minWidth", ctx_r3.minWidth)("label", ctx_r3.language.getFieldLabel(ctx_r3.label))("results", ctx_r3.results);
} }
function PieGridChartComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PieGridChartComponent_ng_container_1_ngx_charts_pie_grid_1_Template, 1, 6, "ngx-charts-pie-grid", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.results && ctx_r1.results.length > 0);
} }
function PieGridChartComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "scrm-loading-spinner");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵclassProp("m-5", true);
} }
class PieGridChartComponent extends BaseChartComponent {
    language;
    elementRef;
    screenSize;
    results;
    height = 700;
    minWidth = 100;
    constructor(language, elementRef, screenSize) {
        super(elementRef, screenSize);
        this.language = language;
        this.elementRef = elementRef;
        this.screenSize = screenSize;
    }
    ngOnInit() {
        if (this.dataSource.options.height) {
            this.height = this.dataSource.options.height;
        }
        if (this?.dataSource?.options?.minWidth) {
            this.minWidth = this.dataSource.options.minWidth;
        }
        this.initResizeListener();
        this.subs.push(this.dataSource.getResults().pipe(debounceTime(500)).subscribe(value => {
            this.parseResults(value);
            this.calculateHeightBasedOnResults();
            this.calculateView();
        }));
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    get scheme() {
        return this.dataSource.options.scheme || 'picnic';
    }
    get label() {
        return this.dataSource.options.label || '';
    }
    onResize() {
        this.calculateHeightBasedOnResults();
        this.calculateView();
    }
    calculateHeightBasedOnResults() {
        if (this.results && this.results.length) {
            const perRow = Math.floor(this.view()[0] / 170);
            this.height = (Math.floor(this.results.length / perRow) * 200);
        }
        else {
            this.height = 50;
        }
    }
    parseResults(value) {
        this.results = [];
        if (value.singleSeries && value.singleSeries.length) {
            value.singleSeries.forEach(entry => {
                const parsedValue = parseFloat('' + entry.value);
                if (!parsedValue) {
                    this.results.push(entry);
                    return;
                }
                this.results.push({
                    name: entry.name,
                    value: parsedValue
                });
            });
        }
    }
    calculateView() {
        let width;
        const el = (this.elementRef && this.elementRef.nativeElement) || {};
        const parentEl = (el.parentElement && el.parentElement.parentElement) || {};
        const parentWidth = (parentEl && parentEl.offsetWidth) || 0;
        if (parentWidth > 0) {
            width = parentWidth;
        }
        else {
            width = window.innerWidth * 0.7;
            if (window.innerWidth > 990) {
                width = window.innerWidth * 0.23;
            }
        }
        if (width > 239) {
            this.view.set([width, this.height]);
            return;
        }
        this.view.set([width, 800]);
    }
    static ɵfac = function PieGridChartComponent_Factory(t) { return new (t || PieGridChartComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.ScreenSizeObserverService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PieGridChartComponent, selectors: [["scrm-pie-grid-chart"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 3, consts: [["labelKey", "LBL_NO_DATA", 4, "ngIf"], [4, "ngIf"], ["class", "chart-loading", 3, "m-5", 4, "ngIf"], ["labelKey", "LBL_NO_DATA"], [3, "animations", "view", "scheme", "minWidth", "label", "results", 4, "ngIf"], [3, "animations", "view", "scheme", "minWidth", "label", "results"], [1, "chart-loading"]], template: function PieGridChartComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, PieGridChartComponent_scrm_chart_message_area_0_Template, 1, 0, "scrm-chart-message-area", 0);
            i0.ɵɵtemplate(1, PieGridChartComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
            i0.ɵɵtemplate(2, PieGridChartComponent_div_2_Template, 2, 2, "div", 2);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.results || !ctx.results.length || ctx.results.length < 1);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.view().length);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.view().length && ctx.results && ctx.results.length > 0);
        } }, dependencies: [i3.NgIf, i4.PieGridComponent, i5.ChartMessageAreaComponent, i6.LoadingSpinnerComponent], encapsulation: 2 });
}
export { PieGridChartComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PieGridChartComponent, [{
        type: Component,
        args: [{ selector: 'scrm-pie-grid-chart', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<scrm-chart-message-area *ngIf=\"!results || !results.length || results.length < 1\"\n                         labelKey=\"LBL_NO_DATA\"></scrm-chart-message-area>\n<ng-container *ngIf=\"view().length\">\n    <ngx-charts-pie-grid *ngIf=\"results && results.length > 0\"\n                         [animations]=\"false\"\n                         [view]=\"view()\"\n                         [scheme]=\"scheme\"\n                         [minWidth]=\"minWidth\"\n                         [label]=\"language.getFieldLabel(label)\"\n                         [results]=\"results\">\n    </ngx-charts-pie-grid>\n</ng-container>\n<div *ngIf=\"!view().length && results && results.length > 0\" [class.m-5]=\"true\" class=\"chart-loading\">\n    <scrm-loading-spinner></scrm-loading-spinner>\n</div>\n" }]
    }], function () { return [{ type: i1.LanguageStore }, { type: i0.ElementRef }, { type: i2.ScreenSizeObserverService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLWdyaWQtY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvY2hhcnQvY29tcG9uZW50cy9waWUtZ3JpZC1jaGFydC9waWUtZ3JpZC1jaGFydC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9jaGFydC9jb21wb25lbnRzL3BpZS1ncmlkLWNoYXJ0L3BpZS1ncmlkLWNoYXJ0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFnQyxNQUFNLGVBQWUsQ0FBQztBQUd2RSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUN0RSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7OztJQ0g1Qyw2Q0FDMEU7OztJQUV0RSx5Q0FPc0I7OztJQU5ELGtDQUFvQix1QkFBQSx5QkFBQSw2QkFBQSxzREFBQSwyQkFBQTs7O0lBRjdDLDZCQUFvQztJQUNoQyxxSEFPc0I7SUFDMUIsMEJBQWU7OztJQVJXLGVBQW1DO0lBQW5DLGtFQUFtQzs7O0lBUzdELDhCQUFzRztJQUNsRyx1Q0FBNkM7SUFDakQsaUJBQU07O0lBRnVELDJCQUFrQjs7QUROL0UsTUFLYSxxQkFBc0IsU0FBUSxrQkFBa0I7SUFNOUM7SUFDRztJQUNBO0lBUGQsT0FBTyxDQUFlO0lBQ3RCLE1BQU0sR0FBRyxHQUFHLENBQUM7SUFDYixRQUFRLEdBQUcsR0FBRyxDQUFDO0lBRWYsWUFDVyxRQUF1QixFQUNwQixVQUFzQixFQUN0QixVQUFxQztRQUUvQyxLQUFLLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FB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MkJBQ0kscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgT25EZXN0cm95LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTZXJpZXNSZXN1bHQsIFNpbmdsZVNlcmllc30gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtCYXNlQ2hhcnRDb21wb25lbnR9IGZyb20gJy4uL2Jhc2UtY2hhcnQvYmFzZS1jaGFydC5jb21wb25lbnQnO1xuaW1wb3J0IHtkZWJvdW5jZVRpbWV9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHtTY3JlZW5TaXplT2JzZXJ2ZXJTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvdWkvc2NyZWVuLXNpemUtb2JzZXJ2ZXIvc2NyZWVuLXNpemUtb2JzZXJ2ZXIuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tcGllLWdyaWQtY2hhcnQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9waWUtZ3JpZC1jaGFydC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBQaWVHcmlkQ2hhcnRDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcmVzdWx0czogU2luZ2xlU2VyaWVzO1xuICAgIGhlaWdodCA9IDcwMDtcbiAgICBtaW5XaWR0aCA9IDEwMDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBwcm90ZWN0ZWQgc2NyZWVuU2l6ZTogU2NyZWVuU2l6ZU9ic2VydmVyU2VydmljZVxuICAgICkge1xuICAgICAgICBzdXBlcihlbGVtZW50UmVmLCBzY3JlZW5TaXplKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5vcHRpb25zLmhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmRhdGFTb3VyY2Uub3B0aW9ucy5oZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcz8uZGF0YVNvdXJjZT8ub3B0aW9ucz8ubWluV2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMubWluV2lkdGggPSB0aGlzLmRhdGFTb3VyY2Uub3B0aW9ucy5taW5XaWR0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5pdFJlc2l6ZUxpc3RlbmVyKCk7XG5cbiAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5kYXRhU291cmNlLmdldFJlc3VsdHMoKS5waXBlKGRlYm91bmNlVGltZSg1MDApKS5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgICAgICAgdGhpcy5wYXJzZVJlc3VsdHModmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVIZWlnaHRCYXNlZE9uUmVzdWx0cygpO1xuICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVWaWV3KCk7XG5cbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cblxuICAgIGdldCBzY2hlbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZS5vcHRpb25zLnNjaGVtZSB8fCAncGljbmljJztcbiAgICB9XG5cbiAgICBnZXQgbGFiZWwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZS5vcHRpb25zLmxhYmVsIHx8ICcnO1xuICAgIH1cblxuICAgIG9uUmVzaXplKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZUhlaWdodEJhc2VkT25SZXN1bHRzKCk7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlVmlldygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjYWxjdWxhdGVIZWlnaHRCYXNlZE9uUmVzdWx0cygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMucmVzdWx0cyAmJiB0aGlzLnJlc3VsdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBwZXJSb3cgPSBNYXRoLmZsb29yKHRoaXMudmlldygpWzBdIC8gMTcwKTtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gKE1hdGguZmxvb3IodGhpcy5yZXN1bHRzLmxlbmd0aCAvIHBlclJvdykgKiAyMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSA1MDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBwYXJzZVJlc3VsdHModmFsdWU6IFNlcmllc1Jlc3VsdCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlc3VsdHMgPSBbXTtcblxuICAgICAgICBpZiAodmFsdWUuc2luZ2xlU2VyaWVzICYmIHZhbHVlLnNpbmdsZVNlcmllcy5sZW5ndGgpIHtcblxuICAgICAgICAgICAgdmFsdWUuc2luZ2xlU2VyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZFZhbHVlID0gcGFyc2VGbG9hdCgnJyArIGVudHJ5LnZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAoIXBhcnNlZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0cy5wdXNoKGVudHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGVudHJ5Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwYXJzZWRWYWx1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY2FsY3VsYXRlVmlldygpOiB2b2lkIHtcbiAgICAgICAgbGV0IHdpZHRoO1xuICAgICAgICBjb25zdCBlbCA9ICh0aGlzLmVsZW1lbnRSZWYgJiYgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHx8IHt9IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICBjb25zdCBwYXJlbnRFbCA9IChlbC5wYXJlbnRFbGVtZW50ICYmIGVsLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCkgfHwge30gYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHBhcmVudFdpZHRoID0gKHBhcmVudEVsICYmIHBhcmVudEVsLm9mZnNldFdpZHRoKSB8fCAwO1xuXG4gICAgICAgIGlmIChwYXJlbnRXaWR0aCA+IDApIHtcbiAgICAgICAgICAgIHdpZHRoID0gcGFyZW50V2lkdGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogMC43O1xuXG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA5OTApIHtcbiAgICAgICAgICAgICAgICB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogMC4yMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh3aWR0aCA+IDIzOSkge1xuICAgICAgICAgICAgdGhpcy52aWV3LnNldChbd2lkdGgsIHRoaXMuaGVpZ2h0XSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52aWV3LnNldChbd2lkdGgsIDgwMF0pO1xuICAgIH1cblxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPHNjcm0tY2hhcnQtbWVzc2FnZS1hcmVhICpuZ0lmPVwiIXJlc3VsdHMgfHwgIXJlc3VsdHMubGVuZ3RoIHx8IHJlc3VsdHMubGVuZ3RoIDwgMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxLZXk9XCJMQkxfTk9fREFUQVwiPjwvc2NybS1jaGFydC1tZXNzYWdlLWFyZWE+XG48bmctY29udGFpbmVyICpuZ0lmPVwidmlldygpLmxlbmd0aFwiPlxuICAgIDxuZ3gtY2hhcnRzLXBpZS1ncmlkICpuZ0lmPVwicmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCA+IDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFthbmltYXRpb25zXT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbdmlld109XCJ2aWV3KClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFtzY2hlbWVdPVwic2NoZW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbbWluV2lkdGhdPVwibWluV2lkdGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFtsYWJlbF09XCJsYW5ndWFnZS5nZXRGaWVsZExhYmVsKGxhYmVsKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW3Jlc3VsdHNdPVwicmVzdWx0c1wiPlxuICAgIDwvbmd4LWNoYXJ0cy1waWUtZ3JpZD5cbjwvbmctY29udGFpbmVyPlxuPGRpdiAqbmdJZj1cIiF2aWV3KCkubGVuZ3RoICYmIHJlc3VsdHMgJiYgcmVzdWx0cy5sZW5ndGggPiAwXCIgW2NsYXNzLm0tNV09XCJ0cnVlXCIgY2xhc3M9XCJjaGFydC1sb2FkaW5nXCI+XG4gICAgPHNjcm0tbG9hZGluZy1zcGlubmVyPjwvc2NybS1sb2FkaW5nLXNwaW5uZXI+XG48L2Rpdj5cbiJdfQ==