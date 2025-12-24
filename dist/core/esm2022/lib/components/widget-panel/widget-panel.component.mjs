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
import { animate, style, transition, trigger } from '@angular/animations';
import * as i0 from "@angular/core";
import * as i1 from "../../store/language/language.store";
import * as i2 from "@angular/common";
import * as i3 from "../panel/panel.component";
function WidgetPanelComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵprojection(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@widgetContentFade", ctx_r0.displayContent ? "true" : "false");
} }
const _c0 = [[["", "widget-body", ""]]];
const _c1 = ["[widget-body]"];
class WidgetPanelComponent {
    languageStore;
    title = '';
    mode = 'none';
    displayContent = true;
    constructor(languageStore) {
        this.languageStore = languageStore;
    }
    ngOnInit() {
    }
    static ɵfac = function WidgetPanelComponent_Factory(t) { return new (t || WidgetPanelComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: WidgetPanelComponent, selectors: [["scrm-widget-panel"]], inputs: { title: "title", mode: "mode" }, ngContentSelectors: _c1, decls: 5, vars: 3, consts: [[1, "accordion", "widget-panel", "mr-0", "shadow-sm"], ["bodyPadding", "0", 3, "mode", "title"], ["panel-header-button", ""], ["panel-body", ""], ["class", "widget collapse show open-close-container", "data-parent", ".widget-panel", 4, "ngIf"], ["data-parent", ".widget-panel", 1, "widget", "collapse", "show", "open-close-container"]], template: function WidgetPanelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵelementStart(0, "div", 0)(1, "scrm-panel", 1);
            i0.ɵɵelement(2, "span", 2);
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵtemplate(4, WidgetPanelComponent_div_4_Template, 2, 1, "div", 4);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("mode", ctx.mode)("title", ctx.title);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.displayContent);
        } }, dependencies: [i2.NgIf, i3.PanelComponent], encapsulation: 2, data: { animation: [
                trigger('widgetFade', [
                    transition('void => *', [
                        style({ transform: 'translateX(100%)', opacity: 0 }),
                        animate('500ms', style({ transform: 'translateX(0)', opacity: 1 }))
                    ]),
                    transition('* => void', [
                        style({ transform: 'translateX(0)', opacity: 1 }),
                        animate('500ms', style({ transform: 'translateX(100%)', opacity: 0 }))
                    ])
                ]),
                trigger('widgetContentFade', [
                    transition('void => *', [
                        style({ transform: 'translateY(-5%)', opacity: 0 }),
                        animate('500ms', style({ transform: 'translateY(0)', opacity: 1 }))
                    ]),
                    transition('* => void', [
                        style({ transform: 'translateY(0)', opacity: 1 }),
                        animate('500ms', style({ transform: 'translateY(-5%)', opacity: 0 }))
                    ])
                ])
            ] } });
}
export { WidgetPanelComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WidgetPanelComponent, [{
        type: Component,
        args: [{ selector: 'scrm-widget-panel', animations: [
                    trigger('widgetFade', [
                        transition('void => *', [
                            style({ transform: 'translateX(100%)', opacity: 0 }),
                            animate('500ms', style({ transform: 'translateX(0)', opacity: 1 }))
                        ]),
                        transition('* => void', [
                            style({ transform: 'translateX(0)', opacity: 1 }),
                            animate('500ms', style({ transform: 'translateX(100%)', opacity: 0 }))
                        ])
                    ]),
                    trigger('widgetContentFade', [
                        transition('void => *', [
                            style({ transform: 'translateY(-5%)', opacity: 0 }),
                            animate('500ms', style({ transform: 'translateY(0)', opacity: 1 }))
                        ]),
                        transition('* => void', [
                            style({ transform: 'translateY(0)', opacity: 1 }),
                            animate('500ms', style({ transform: 'translateY(-5%)', opacity: 0 }))
                        ])
                    ])
                ], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div class=\"accordion widget-panel mr-0 shadow-sm\">\n    <scrm-panel [mode]=\"mode\" [title]=\"title\" bodyPadding=\"0\">\n        <span panel-header-button>\n        </span>\n        <div panel-body>\n            <div *ngIf=\"displayContent\"\n                 class=\"widget collapse show open-close-container\"\n                 data-parent=\".widget-panel\"\n                 [@widgetContentFade]=\"displayContent ? 'true' : 'false'\">\n                <ng-content select=\"[widget-body]\"></ng-content>\n            </div>\n        </div>\n    </scrm-panel>\n</div>\n" }]
    }], function () { return [{ type: i1.LanguageStore }]; }, { title: [{
            type: Input
        }], mode: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL3dpZGdldC1wYW5lbC93aWRnZXQtcGFuZWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvd2lkZ2V0LXBhbmVsL3dpZGdldC1wYW5lbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDdkQsT0FBTyxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7SUNLNUQsOEJBRzhEO0lBQzFELGtCQUFnRDtJQUNwRCxpQkFBTTs7O0lBRkQsNkVBQXdEOzs7O0FETHpFLE1BMkJhLG9CQUFvQjtJQU1WO0lBTFYsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNYLElBQUksR0FBd0MsTUFBTSxDQUFDO0lBRTVELGNBQWMsR0FBRyxJQUFJLENBQUM7SUFFdEIsWUFBbUIsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFDL0MsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDOzhFQVZRLG9CQUFvQjs2REFBcEIsb0JBQW9COztZQzlCakMsOEJBQW1ELG9CQUFBO1lBRTNDLDBCQUNPO1lBQ1AsOEJBQWdCO1lBQ1oscUVBS007WUFDVixpQkFBTSxFQUFBLEVBQUE7O1lBVkUsZUFBYTtZQUFiLCtCQUFhLG9CQUFBO1lBSVgsZUFBb0I7WUFBcEIseUNBQW9COzhGREN0QjtnQkFDUixPQUFPLENBQUMsWUFBWSxFQUFFO29CQUNsQixVQUFVLENBQUMsV0FBVyxFQUFFO3dCQUNw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SyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHthbmltYXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlcn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLXdpZGdldC1wYW5lbCcsXG4gICAgdGVtcGxhdGVVcmw6ICd3aWRnZXQtcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxuICAgIGFuaW1hdGlvbnM6IFtcbiAgICAgICAgdHJpZ2dlcignd2lkZ2V0RmFkZScsIFtcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgxMDAlKScsIG9wYWNpdHk6IDB9KSxcbiAgICAgICAgICAgICAgICBhbmltYXRlKCc1MDBtcycsIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJywgb3BhY2l0eTogMX0pKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgICAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknLCBvcGFjaXR5OiAxfSksXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnNTAwbXMnLCBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgxMDAlKScsIG9wYWNpdHk6IDB9KSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICB0cmlnZ2VyKCd3aWRnZXRDb250ZW50RmFkZScsIFtcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNSUpJywgb3BhY2l0eTogMH0pLFxuICAgICAgICAgICAgICAgIGFuaW1hdGUoJzUwMG1zJywgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknLCBvcGFjaXR5OiAxfSkpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScsIG9wYWNpdHk6IDF9KSxcbiAgICAgICAgICAgICAgICBhbmltYXRlKCc1MDBtcycsIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01JSknLCBvcGFjaXR5OiAwfSkpXG4gICAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBXaWRnZXRQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQElucHV0KCkgdGl0bGUgPSAnJztcbiAgICBASW5wdXQoKSBtb2RlOiAnY29sbGFwc2libGUnIHwgJ2Nsb3NhYmxlJyB8ICdub25lJyA9ICdub25lJztcblxuICAgIGRpc3BsYXlDb250ZW50ID0gdHJ1ZTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBsYW5ndWFnZVN0b3JlOiBMYW5ndWFnZVN0b3JlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPGRpdiBjbGFzcz1cImFjY29yZGlvbiB3aWRnZXQtcGFuZWwgbXItMCBzaGFkb3ctc21cIj5cbiAgICA8c2NybS1wYW5lbCBbbW9kZV09XCJtb2RlXCIgW3RpdGxlXT1cInRpdGxlXCIgYm9keVBhZGRpbmc9XCIwXCI+XG4gICAgICAgIDxzcGFuIHBhbmVsLWhlYWRlci1idXR0b24+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGRpdiBwYW5lbC1ib2R5PlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImRpc3BsYXlDb250ZW50XCJcbiAgICAgICAgICAgICAgICAgY2xhc3M9XCJ3aWRnZXQgY29sbGFwc2Ugc2hvdyBvcGVuLWNsb3NlLWNvbnRhaW5lclwiXG4gICAgICAgICAgICAgICAgIGRhdGEtcGFyZW50PVwiLndpZGdldC1wYW5lbFwiXG4gICAgICAgICAgICAgICAgIFtAd2lkZ2V0Q29udGVudEZhZGVdPVwiZGlzcGxheUNvbnRlbnQgPyAndHJ1ZScgOiAnZmFsc2UnXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3dpZGdldC1ib2R5XVwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3Njcm0tcGFuZWw+XG48L2Rpdj5cbiJdfQ==