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
import { isVoid } from 'common';
import { BehaviorSubject, of } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../../components/panel/panel.component";
import * as i3 from "../../../../components/record-grid/record-grid.component";
function RecordPanelComponent_scrm_panel_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-record-grid", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("config", ctx_r2.getGridConfig());
} }
function RecordPanelComponent_scrm_panel_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "scrm-panel", 1)(1, "div", 2);
    i0.ɵɵtemplate(2, RecordPanelComponent_scrm_panel_0_ng_container_2_Template, 2, 1, "ng-container", 3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate1("klass", "record-panel ", ctx_r0.config && ctx_r0.config.klass || "", "");
    i0.ɵɵproperty("close", ctx_r0.closeButton)("isCollapsed$", ctx_r0.isCollapsed$)("mode", ctx_r0.panelMode)("titleKey", ctx_r0.config.title || "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.config);
} }
class RecordPanelComponent {
    config;
    closeButton;
    panelMode = 'closable';
    isCollapsed$;
    vm$;
    collapse;
    constructor() {
    }
    ngOnInit() {
        this.vm$ = this.config?.store?.vm$ ?? of({});
        this.initCloseButton();
        if (this.config.panelMode) {
            this.panelMode = this.config.panelMode;
        }
        this.collapse = new BehaviorSubject(false);
        this.isCollapsed$ = this.collapse.asObservable();
        if (!isVoid(this.config.isCollapsed)) {
            this.collapse.next(this.config.isCollapsed);
        }
    }
    ngOnDestroy() {
    }
    getGridConfig() {
        return {
            record$: this.config?.store?.stagingRecord$ ?? of(null),
            mode$: this.config?.store?.mode$ ?? of('detail'),
            fields$: this.config?.store?.getViewFieldsKeys$?.() ?? of([]),
            actions: this.config?.actions ?? [],
            klass: 'mt-2 rounded',
            buttonClass: 'btn btn-outline-danger btn-sm',
            maxColumns$: of(4).pipe(shareReplay(1)),
            sizeMap$: of({
                handset: 1,
                tablet: 2,
                web: 3,
                wide: 4
            }).pipe(shareReplay(1)),
        };
    }
    /**
     * Init close button
     */
    initCloseButton() {
        this.closeButton = {
            onClick: () => {
                this.config.onClose();
            }
        };
    }
    static ɵfac = function RecordPanelComponent_Factory(t) { return new (t || RecordPanelComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RecordPanelComponent, selectors: [["scrm-record-panel"]], inputs: { config: "config" }, decls: 2, vars: 3, consts: [[3, "close", "isCollapsed$", "mode", "titleKey", "klass", 4, "ngIf"], [3, "close", "isCollapsed$", "mode", "titleKey", "klass"], ["panel-body", "", 1, "pl-2", "pr-2"], [4, "ngIf"], [3, "config"]], template: function RecordPanelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, RecordPanelComponent_scrm_panel_0_Template, 3, 6, "scrm-panel", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.vm$));
        } }, dependencies: [i1.NgIf, i2.PanelComponent, i3.RecordGridComponent, i1.AsyncPipe], encapsulation: 2 });
}
export { RecordPanelComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordPanelComponent, [{
        type: Component,
        args: [{ selector: 'scrm-record-panel', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<scrm-panel *ngIf=\"(vm$ | async) as vm\"\n            [close]=\"closeButton\"\n            [isCollapsed$]=\"isCollapsed$\"\n            [mode]=\"panelMode\"\n            [titleKey]=\"config.title || ''\"\n            klass=\"record-panel {{ (config && config.klass) || ''}}\">\n\n    <div class=\"pl-2 pr-2\" panel-body>\n\n        <ng-container *ngIf=\"config\">\n            <scrm-record-grid [config]=\"getGridConfig()\"></scrm-record-grid>\n        </ng-container>\n\n    </div>\n\n</scrm-panel>\n" }]
    }], function () { return []; }, { config: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb250YWluZXJzL3JlY29yZC1wYW5lbC9jb21wb25lbnRzL3JlY29yZC1wYW5lbC9yZWNvcmQtcGFuZWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbnRhaW5lcnMvcmVjb3JkLXBhbmVsL2NvbXBvbmVudHMvcmVjb3JkLXBhbmVsL3JlY29yZC1wYW5lbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBa0IsTUFBTSxFQUFnQixNQUFNLFFBQVEsQ0FBQztBQUM5RCxPQUFPLEVBQUMsZUFBZSxFQUFjLEVBQUUsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztJQ09uQyw2QkFBNkI7SUFDekIsc0NBQWdFO0lBQ3BFLDBCQUFlOzs7SUFETyxlQUEwQjtJQUExQiwrQ0FBMEI7OztJQVZ4RCxxQ0FLcUUsYUFBQTtJQUk3RCxvR0FFZTtJQUVuQixpQkFBTSxFQUFBOzs7SUFSRSxtR0FBd0Q7SUFKeEQsMENBQXFCLHFDQUFBLDBCQUFBLHVDQUFBO0lBUVYsZUFBWTtJQUFaLG9DQUFZOztBREhuQyxNQUthLG9CQUFvQjtJQUVwQixNQUFNLENBQW9CO0lBQ25DLFdBQVcsQ0FBa0I7SUFDN0IsU0FBUyxHQUF3QyxVQUFVLENBQUM7SUFDNUQsWUFBWSxDQUFzQjtJQUVsQyxHQUFHLENBQWtCO0lBRVgsUUFBUSxDQUEyQjtJQUU3QztJQUNBLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTdDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV2QixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7U0FDMUM7UUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNqRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMvQztJQUVMLENBQUM7SUFFRCxXQUFXO0lBQ1gsQ0FBQztJQUVELGFBQWE7UUFFVCxPQUFPO1lBQ0gsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLGNBQWMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ3ZELEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNoRCxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsa0JBQWtCLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDN0QsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxJQUFJLEVBQUU7WUFDbkMsS0FBSyxFQUFFLGNBQWM7WUFDckIsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsUUFBUSxFQUFFLEVBQUUsQ0FBQztnQkFDVCxPQUFPLEVBQUUsQ0FBQztnQkFDVixNQUFNLEVBQUUsQ0FBQztnQkFDVCxHQUFHLEVBQUUsQ0FBQztnQkFDTixJQUFJLEVBQUUsQ0FBQzthQUNPLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZCLENBQUM7SUFDMUIsQ0FBQztJQUVEOztPQUVHO0lBQ08sZUFBZTtRQUVyQixJQUFJLENBQUMsV0FBVyxHQUFHO1lBQ2YsT0FBTyxFQUFFLEdBQVMsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMxQixDQUFDO1NBQ2UsQ0FBQztJQUN6QixDQUFDOzhFQS9EUSxvQkFBb0I7NkRBQXBCLG9CQUFvQjtZQ1hqQyxtRkFlYTs7O1lBZkEsb0RBQW9COzs7U0RXcEIsb0JBQW9CO3VGQUFwQixvQkFBb0I7Y0FMaEMsU0FBUzsyQkFDSSxtQkFBbUI7c0NBTXBCLE1BQU07a0JBQWQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0J1dHRvbkludGVyZmFjZSwgaXNWb2lkLCBTY3JlZW5TaXplTWFwfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIG9mfSBmcm9tICdyeGpzJztcbmltcG9ydCB7c2hhcmVSZXBsYXl9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7UmVjb3JkR3JpZENvbmZpZ30gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9yZWNvcmQtZ3JpZC9yZWNvcmQtZ3JpZC5tb2RlbCc7XG5pbXBvcnQge1JlY29yZFBhbmVsQ29uZmlnfSBmcm9tICcuL3JlY29yZC1wYW5lbC5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1yZWNvcmQtcGFuZWwnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9yZWNvcmQtcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW10sXG59KVxuZXhwb3J0IGNsYXNzIFJlY29yZFBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KCkgY29uZmlnOiBSZWNvcmRQYW5lbENvbmZpZztcbiAgICBjbG9zZUJ1dHRvbjogQnV0dG9uSW50ZXJmYWNlO1xuICAgIHBhbmVsTW9kZTogJ2NvbGxhcHNpYmxlJyB8ICdjbG9zYWJsZScgfCAnbm9uZScgPSAnY2xvc2FibGUnO1xuICAgIGlzQ29sbGFwc2VkJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICAgIHZtJDogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gICAgcHJvdGVjdGVkIGNvbGxhcHNlOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy52bSQgPSB0aGlzLmNvbmZpZz8uc3RvcmU/LnZtJCA/PyBvZih7fSk7XG5cbiAgICAgICAgdGhpcy5pbml0Q2xvc2VCdXR0b24oKTtcblxuICAgICAgICBpZiAodGhpcy5jb25maWcucGFuZWxNb2RlKSB7XG4gICAgICAgICAgICB0aGlzLnBhbmVsTW9kZSA9IHRoaXMuY29uZmlnLnBhbmVsTW9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29sbGFwc2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcbiAgICAgICAgdGhpcy5pc0NvbGxhcHNlZCQgPSB0aGlzLmNvbGxhcHNlLmFzT2JzZXJ2YWJsZSgpO1xuICAgICAgICBpZiAoIWlzVm9pZCh0aGlzLmNvbmZpZy5pc0NvbGxhcHNlZCkpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2UubmV4dCh0aGlzLmNvbmZpZy5pc0NvbGxhcHNlZCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIH1cblxuICAgIGdldEdyaWRDb25maWcoKTogUmVjb3JkR3JpZENvbmZpZyB7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlY29yZCQ6IHRoaXMuY29uZmlnPy5zdG9yZT8uc3RhZ2luZ1JlY29yZCQgPz8gb2YobnVsbCksXG4gICAgICAgICAgICBtb2RlJDogdGhpcy5jb25maWc/LnN0b3JlPy5tb2RlJCA/PyBvZignZGV0YWlsJyksXG4gICAgICAgICAgICBmaWVsZHMkOiB0aGlzLmNvbmZpZz8uc3RvcmU/LmdldFZpZXdGaWVsZHNLZXlzJD8uKCkgPz8gb2YoW10pLFxuICAgICAgICAgICAgYWN0aW9uczogdGhpcy5jb25maWc/LmFjdGlvbnMgPz8gW10sXG4gICAgICAgICAgICBrbGFzczogJ210LTIgcm91bmRlZCcsXG4gICAgICAgICAgICBidXR0b25DbGFzczogJ2J0biBidG4tb3V0bGluZS1kYW5nZXIgYnRuLXNtJyxcbiAgICAgICAgICAgIG1heENvbHVtbnMkOiBvZig0KS5waXBlKHNoYXJlUmVwbGF5KDEpKSxcbiAgICAgICAgICAgIHNpemVNYXAkOiBvZih7XG4gICAgICAgICAgICAgICAgaGFuZHNldDogMSxcbiAgICAgICAgICAgICAgICB0YWJsZXQ6IDIsXG4gICAgICAgICAgICAgICAgd2ViOiAzLFxuICAgICAgICAgICAgICAgIHdpZGU6IDRcbiAgICAgICAgICAgIH0gYXMgU2NyZWVuU2l6ZU1hcCkucGlwZShzaGFyZVJlcGxheSgxKSksXG4gICAgICAgIH0gYXMgUmVjb3JkR3JpZENvbmZpZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IGNsb3NlIGJ1dHRvblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBpbml0Q2xvc2VCdXR0b24oKTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy5jbG9zZUJ1dHRvbiA9IHtcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5vbkNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gYXMgQnV0dG9uSW50ZXJmYWNlO1xuICAgIH1cblxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPHNjcm0tcGFuZWwgKm5nSWY9XCIodm0kIHwgYXN5bmMpIGFzIHZtXCJcbiAgICAgICAgICAgIFtjbG9zZV09XCJjbG9zZUJ1dHRvblwiXG4gICAgICAgICAgICBbaXNDb2xsYXBzZWQkXT1cImlzQ29sbGFwc2VkJFwiXG4gICAgICAgICAgICBbbW9kZV09XCJwYW5lbE1vZGVcIlxuICAgICAgICAgICAgW3RpdGxlS2V5XT1cImNvbmZpZy50aXRsZSB8fCAnJ1wiXG4gICAgICAgICAgICBrbGFzcz1cInJlY29yZC1wYW5lbCB7eyAoY29uZmlnICYmIGNvbmZpZy5rbGFzcykgfHwgJyd9fVwiPlxuXG4gICAgPGRpdiBjbGFzcz1cInBsLTIgcHItMlwiIHBhbmVsLWJvZHk+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZ1wiPlxuICAgICAgICAgICAgPHNjcm0tcmVjb3JkLWdyaWQgW2NvbmZpZ109XCJnZXRHcmlkQ29uZmlnKClcIj48L3Njcm0tcmVjb3JkLWdyaWQ+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPC9kaXY+XG5cbjwvc2NybS1wYW5lbD5cbiJdfQ==