/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2023 SalesAgility Ltd.
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
import { BaseFieldComponent } from '../../../base/base-field.component';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/formatters/data-type.formatter.service";
import * as i2 from "../../../field-logic/field-logic.manager";
import * as i3 from "../../../field-logic-display/field-logic-display.manager";
import * as i4 from "@angular/common";
function TextListFieldComponent_div_0_br_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "br");
} }
function TextListFieldComponent_div_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, " ... ");
    i0.ɵɵelementContainerEnd();
} }
function TextListFieldComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, TextListFieldComponent_div_0_br_3_Template, 1, 0, "br", 2);
    i0.ɵɵtemplate(4, TextListFieldComponent_div_0_ng_container_4_Template, 2, 0, "ng-container", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const value_r1 = ctx.$implicit;
    const last_r2 = ctx.last;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r0.klass)("title", ctx_r0.field.value);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(value_r1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !last_r2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", last_r2 && ctx_r0.isTruncated);
} }
class TextListFieldComponent extends BaseFieldComponent {
    typeFormatter;
    logic;
    logicDisplay;
    isTruncated = false;
    constructor(typeFormatter, logic, logicDisplay) {
        super(typeFormatter, logic, logicDisplay);
        this.typeFormatter = typeFormatter;
        this.logic = logic;
        this.logicDisplay = logicDisplay;
    }
    truncateValue(value) {
        const chars_limit = 50;
        let truncatedValue = value.slice(0, chars_limit);
        let lines = truncatedValue.split("\n");
        const maxLines = 3;
        const truncatedLines = lines.slice(0, maxLines);
        this.isTruncated = truncatedValue.length !== value.length || lines.length > maxLines;
        return truncatedLines;
    }
    static ɵfac = function TextListFieldComponent_Factory(t) { return new (t || TextListFieldComponent)(i0.ɵɵdirectiveInject(i1.DataTypeFormatter), i0.ɵɵdirectiveInject(i2.FieldLogicManager), i0.ɵɵdirectiveInject(i3.FieldLogicDisplayManager)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TextListFieldComponent, selectors: [["scrm-text-list"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "ngClass", "title", 4, "ngFor", "ngForOf"], [3, "ngClass", "title"], [4, "ngIf"]], template: function TextListFieldComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, TextListFieldComponent_div_0_Template, 5, 5, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngForOf", ctx.truncateValue(ctx.field.value));
        } }, dependencies: [i4.NgClass, i4.NgForOf, i4.NgIf], encapsulation: 2 });
}
export { TextListFieldComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TextListFieldComponent, [{
        type: Component,
        args: [{ selector: 'scrm-text-list', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2023 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div [ngClass]=\"klass\" [title]=\"field.value\"\n     *ngFor=\"let value of truncateValue(field.value); let last = last; let first= first\">\n    <span>{{value}}</span> <br *ngIf=\"!last\">\n    <ng-container *ngIf=\"last && isTruncated\">\n        ...\n    </ng-container>\n</div>\n\n" }]
    }], function () { return [{ type: i1.DataTypeFormatter }, { type: i2.FieldLogicManager }, { type: i3.FieldLogicDisplayManager }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL3RleHQvdGVtcGxhdGVzL2xpc3QvdGV4dC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL3RleHQvdGVtcGxhdGVzL2xpc3QvdGV4dC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQzs7Ozs7OztJQ0UzQyxxQkFBa0I7OztJQUN6Qyw2QkFBMEM7SUFDdEMscUJBQ0o7SUFBQSwwQkFBZTs7O0lBTG5CLDhCQUN5RixXQUFBO0lBQy9FLFlBQVM7SUFBQSxpQkFBTztJQUFDLDJFQUFrQjtJQUN6QywrRkFFZTtJQUNuQixpQkFBTTs7Ozs7SUFORCxzQ0FBaUIsNkJBQUE7SUFFWixlQUFTO0lBQVQsOEJBQVM7SUFBYSxlQUFXO0lBQVgsK0JBQVc7SUFDeEIsZUFBeUI7SUFBekIsb0RBQXlCOztBREU1QyxNQUthLHNCQUF1QixTQUFRLGtCQUFrQjtJQUs1QztJQUNBO0lBQ0E7SUFMZCxXQUFXLEdBQVksS0FBSyxDQUFDO0lBRTdCLFlBQ2MsYUFBZ0MsRUFDaEMsS0FBd0IsRUFDeEIsWUFBc0M7UUFFaEQsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFKaEMsa0JBQWEsR0FBYixhQUFhLENBQW1CO1FBQ2hDLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQ3hCLGlCQUFZLEdBQVosWUFBWSxDQUEwQjtJQUdwRCxDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQWE7UUFDdkIsTUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksY0FBYyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRWpELElBQUksS0FBSyxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsTUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLE1BQU0sY0FBYyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRWhELElBQUksQ0FBQyxXQUFXLEdBQUcsY0FBYyxDQUFDLE1BQU0sS0FBSyxLQUFLLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO1FBRXJGLE9BQU8sY0FBYyxDQUFDO0lBQzFCLENBQUM7Z0ZBdkJRLHNCQUFzQjs2REFBdEIsc0JBQXNCO1lDVm5DLHVFQU1NOztZQUxpQiw0REFBK0I7OztTRFN6QyxzQkFBc0I7dUZBQXRCLHNCQUFzQjtjQUxsQyxTQUFTOzJCQUNJLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIzIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCYXNlRmllbGRDb21wb25lbnR9IGZyb20gJy4uLy4uLy4uL2Jhc2UvYmFzZS1maWVsZC5jb21wb25lbnQnO1xuaW1wb3J0IHtEYXRhVHlwZUZvcm1hdHRlcn0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvZm9ybWF0dGVycy9kYXRhLXR5cGUuZm9ybWF0dGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtGaWVsZExvZ2ljTWFuYWdlcn0gZnJvbSAnLi4vLi4vLi4vZmllbGQtbG9naWMvZmllbGQtbG9naWMubWFuYWdlcic7XG5pbXBvcnQge0ZpZWxkTG9naWNEaXNwbGF5TWFuYWdlcn0gZnJvbSBcIi4uLy4uLy4uL2ZpZWxkLWxvZ2ljLWRpc3BsYXkvZmllbGQtbG9naWMtZGlzcGxheS5tYW5hZ2VyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS10ZXh0LWxpc3QnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi90ZXh0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFRleHRMaXN0RmllbGRDb21wb25lbnQgZXh0ZW5kcyBCYXNlRmllbGRDb21wb25lbnQge1xuXG4gICAgaXNUcnVuY2F0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgdHlwZUZvcm1hdHRlcjogRGF0YVR5cGVGb3JtYXR0ZXIsXG4gICAgICAgIHByb3RlY3RlZCBsb2dpYzogRmllbGRMb2dpY01hbmFnZXIsXG4gICAgICAgIHByb3RlY3RlZCBsb2dpY0Rpc3BsYXk6IEZpZWxkTG9naWNEaXNwbGF5TWFuYWdlclxuICAgICkge1xuICAgICAgICBzdXBlcih0eXBlRm9ybWF0dGVyLCBsb2dpYywgbG9naWNEaXNwbGF5KTtcbiAgICB9XG5cbiAgICB0cnVuY2F0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgICAgIGNvbnN0IGNoYXJzX2xpbWl0ID0gNTA7XG4gICAgICAgIGxldCB0cnVuY2F0ZWRWYWx1ZSA9IHZhbHVlLnNsaWNlKDAsIGNoYXJzX2xpbWl0KTtcblxuICAgICAgICBsZXQgbGluZXMgPSB0cnVuY2F0ZWRWYWx1ZS5zcGxpdChcIlxcblwiKTtcbiAgICAgICAgY29uc3QgbWF4TGluZXMgPSAzO1xuICAgICAgICBjb25zdCB0cnVuY2F0ZWRMaW5lcyA9IGxpbmVzLnNsaWNlKDAsIG1heExpbmVzKTtcblxuICAgICAgICB0aGlzLmlzVHJ1bmNhdGVkID0gdHJ1bmNhdGVkVmFsdWUubGVuZ3RoICE9PSB2YWx1ZS5sZW5ndGggfHwgbGluZXMubGVuZ3RoID4gbWF4TGluZXM7XG5cbiAgICAgICAgcmV0dXJuIHRydW5jYXRlZExpbmVzO1xuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjMgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxkaXYgW25nQ2xhc3NdPVwia2xhc3NcIiBbdGl0bGVdPVwiZmllbGQudmFsdWVcIlxuICAgICAqbmdGb3I9XCJsZXQgdmFsdWUgb2YgdHJ1bmNhdGVWYWx1ZShmaWVsZC52YWx1ZSk7IGxldCBsYXN0ID0gbGFzdDsgbGV0IGZpcnN0PSBmaXJzdFwiPlxuICAgIDxzcGFuPnt7dmFsdWV9fTwvc3Bhbj4gPGJyICpuZ0lmPVwiIWxhc3RcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibGFzdCAmJiBpc1RydW5jYXRlZFwiPlxuICAgICAgICAuLi5cbiAgICA8L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuXG4iXX0=