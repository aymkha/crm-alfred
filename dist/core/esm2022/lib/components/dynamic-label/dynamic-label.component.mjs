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
import { tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../services/language/dynamic-label.service";
import * as i2 from "../../store/language/language.store";
import * as i3 from "@angular/common";
function DynamicLabelComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 1);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.parsedLabel);
} }
class DynamicLabelComponent {
    dynamicLabels;
    language;
    template = '';
    labelKey = '';
    context = {};
    fields = {};
    module = null;
    parsedLabel = '';
    vm$;
    constructor(dynamicLabels, language) {
        this.dynamicLabels = dynamicLabels;
        this.language = language;
    }
    ngOnInit() {
        this.vm$ = this.language.vm$.pipe(tap(() => {
            if (this.labelKey) {
                this.template = this.language.getFieldLabel(this.labelKey, this.module);
            }
            this.parseLabel();
        }));
    }
    ngOnChanges(changes) {
        if (changes.template || changes.context || changes.labelKey || changes.fields) {
            this.parseLabel();
        }
    }
    parseLabel() {
        this.parsedLabel = this.dynamicLabels.parse(this.template, this.context, this.fields);
    }
    static ɵfac = function DynamicLabelComponent_Factory(t) { return new (t || DynamicLabelComponent)(i0.ɵɵdirectiveInject(i1.DynamicLabelService), i0.ɵɵdirectiveInject(i2.LanguageStore)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DynamicLabelComponent, selectors: [["scrm-dynamic-label"]], inputs: { template: "template", labelKey: "labelKey", context: "context", fields: "fields", module: "module" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 3, consts: [[4, "ngIf"], [1, "dynamic-label"]], template: function DynamicLabelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, DynamicLabelComponent_ng_container_0_Template, 3, 1, "ng-container", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.vm$));
        } }, dependencies: [i3.NgIf, i3.AsyncPipe], encapsulation: 2 });
}
export { DynamicLabelComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DynamicLabelComponent, [{
        type: Component,
        args: [{ selector: 'scrm-dynamic-label', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"(vm$ | async) as vm\">\n    <span class=\"dynamic-label\">{{parsedLabel}}</span>\n</ng-container>\n" }]
    }], function () { return [{ type: i1.DynamicLabelService }, { type: i2.LanguageStore }]; }, { template: [{
            type: Input
        }], labelKey: [{
            type: Input
        }], context: [{
            type: Input
        }], fields: [{
            type: Input
        }], module: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1sYWJlbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9keW5hbWljLWxhYmVsL2R5bmFtaWMtbGFiZWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvZHluYW1pYy1sYWJlbC9keW5hbWljLWxhYmVsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBbUMsTUFBTSxlQUFlLENBQUM7QUFHakYsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7SUNGbkMsNkJBQTBDO0lBQ3RDLCtCQUE0QjtJQUFBLFlBQWU7SUFBQSxpQkFBTztJQUN0RCwwQkFBZTs7O0lBRGlCLGVBQWU7SUFBZix3Q0FBZTs7QURLL0MsTUFLYSxxQkFBcUI7SUFVUjtJQUE4QztJQVQzRCxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ2QsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNkLE9BQU8sR0FBYyxFQUFFLENBQUM7SUFDeEIsTUFBTSxHQUFhLEVBQUUsQ0FBQztJQUN0QixNQUFNLEdBQVcsSUFBSSxDQUFDO0lBRS9CLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFDakIsR0FBRyxDQUE4QjtJQUVqQyxZQUFzQixhQUFrQyxFQUFZLFFBQXVCO1FBQXJFLGtCQUFhLEdBQWIsYUFBYSxDQUFxQjtRQUFZLGFBQVEsR0FBUixRQUFRLENBQWU7SUFDM0YsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFO1lBQ3ZDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDZixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzNFO1lBQ0QsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQzlCLElBQUksT0FBTyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUMzRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDckI7SUFDTCxDQUFDO0lBRVMsVUFBVTtRQUNoQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUYsQ0FBQzsrRUE5QlEscUJBQXFCOzZEQUFyQixxQkFBcUI7WUNYbEMsd0ZBRWU7OztZQUZBLG9EQUFvQjs7O1NEV3RCLHFCQUFxQjt1RkFBckIscUJBQXFCO2NBTGpDLFNBQVM7MkJBQ0ksb0JBQW9CO2tHQUtyQixRQUFRO2tCQUFoQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0ZpZWxkTWFwLCBTdHJpbmdNYXB9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHt0YXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZSwgTGFuZ3VhZ2VTdHJpbmdzfSBmcm9tICcuLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge0R5bmFtaWNMYWJlbFNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xhbmd1YWdlL2R5bmFtaWMtbGFiZWwuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1keW5hbWljLWxhYmVsJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZHluYW1pYy1sYWJlbC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBEeW5hbWljTGFiZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gICAgQElucHV0KCkgdGVtcGxhdGUgPSAnJztcbiAgICBASW5wdXQoKSBsYWJlbEtleSA9ICcnO1xuICAgIEBJbnB1dCgpIGNvbnRleHQ6IFN0cmluZ01hcCA9IHt9O1xuICAgIEBJbnB1dCgpIGZpZWxkczogRmllbGRNYXAgPSB7fTtcbiAgICBASW5wdXQoKSBtb2R1bGU6IHN0cmluZyA9IG51bGw7XG5cbiAgICBwYXJzZWRMYWJlbCA9ICcnO1xuICAgIHZtJDogT2JzZXJ2YWJsZTxMYW5ndWFnZVN0cmluZ3M+O1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGR5bmFtaWNMYWJlbHM6IER5bmFtaWNMYWJlbFNlcnZpY2UsIHByb3RlY3RlZCBsYW5ndWFnZTogTGFuZ3VhZ2VTdG9yZSkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnZtJCA9IHRoaXMubGFuZ3VhZ2Uudm0kLnBpcGUodGFwKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxhYmVsS2V5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRoaXMubGFuZ3VhZ2UuZ2V0RmllbGRMYWJlbCh0aGlzLmxhYmVsS2V5LCB0aGlzLm1vZHVsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBhcnNlTGFiZWwoKTtcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAgICAgaWYgKGNoYW5nZXMudGVtcGxhdGUgfHwgY2hhbmdlcy5jb250ZXh0IHx8IGNoYW5nZXMubGFiZWxLZXkgfHwgY2hhbmdlcy5maWVsZHMpIHtcbiAgICAgICAgICAgIHRoaXMucGFyc2VMYWJlbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHBhcnNlTGFiZWwoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGFyc2VkTGFiZWwgPSB0aGlzLmR5bmFtaWNMYWJlbHMucGFyc2UodGhpcy50ZW1wbGF0ZSwgdGhpcy5jb250ZXh0LCB0aGlzLmZpZWxkcyk7XG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIih2bSQgfCBhc3luYykgYXMgdm1cIj5cbiAgICA8c3BhbiBjbGFzcz1cImR5bmFtaWMtbGFiZWxcIj57e3BhcnNlZExhYmVsfX08L3NwYW4+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==