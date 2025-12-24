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
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeIn, fadeOut } from 'ng-animate';
import * as i0 from "@angular/core";
import * as i1 from "../../services/message/message.service";
import * as i2 from "../../store/language/language.store";
import * as i3 from "@angular/common";
function MessageUiComponent_div_0_div_1_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const message_r5 = i0.ɵɵnextContext().$implicit;
    const appStrings_r1 = i0.ɵɵnextContext(2).ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(appStrings_r1[message_r5.labelKey] || message_r5.labelKey || "");
} }
function MessageUiComponent_div_0_div_1_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const message_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(message_r5.text);
} }
function MessageUiComponent_div_0_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵlistener("click", function MessageUiComponent_div_0_div_1_div_1_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r12); const message_r5 = restoredCtx.$implicit; const ctx_r11 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r11.close(message_r5)); });
    i0.ɵɵtemplate(1, MessageUiComponent_div_0_div_1_div_1_ng_container_1_Template, 2, 1, "ng-container", 6);
    i0.ɵɵtemplate(2, MessageUiComponent_div_0_div_1_div_1_ng_container_2_Template, 2, 1, "ng-container", 6);
    i0.ɵɵelementStart(3, "a", 7);
    i0.ɵɵlistener("click", function MessageUiComponent_div_0_div_1_div_1_Template_a_click_3_listener() { const restoredCtx = i0.ɵɵrestoreView(_r12); const message_r5 = restoredCtx.$implicit; const ctx_r13 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r13.close(message_r5)); });
    i0.ɵɵelementStart(4, "span", 8);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const message_r5 = ctx.$implicit;
    i0.ɵɵclassMapInterpolate1("message ", message_r5.type, " alert-dismissible fade show shadow");
    i0.ɵɵproperty("@fade", undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", message_r5.labelKey);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", message_r5.text && !message_r5.labelKey);
} }
function MessageUiComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, MessageUiComponent_div_0_div_1_div_1_Template, 6, 6, "div", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const items_r3 = ctx.ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", items_r3);
} }
function MessageUiComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, MessageUiComponent_div_0_div_1_Template, 2, 1, "div", 2);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(2, 1, ctx_r0.messages$));
} }
class MessageUiComponent {
    messageService;
    languages;
    messages$;
    appStrings$;
    constructor(messageService, languages) {
        this.messageService = messageService;
        this.languages = languages;
        this.appStrings$ = languages.appStrings$;
    }
    ngOnInit() {
        this.messages$ = this.messageService.messages$;
    }
    close(message) {
        this.messageService.contains(message, true);
    }
    static ɵfac = function MessageUiComponent_Factory(t) { return new (t || MessageUiComponent)(i0.ɵɵdirectiveInject(i1.MessageService), i0.ɵɵdirectiveInject(i2.LanguageStore)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MessageUiComponent, selectors: [["scrm-message-ui"]], decls: 2, vars: 3, consts: [["class", "container-fluid alert-fixed message-wrapper", 4, "ngIf"], [1, "container-fluid", "alert-fixed", "message-wrapper"], ["class", "d-flex justify-content-center flex-column align-items-center message-container", 4, "ngIf"], [1, "d-flex", "justify-content-center", "flex-column", "align-items-center", "message-container"], ["role", "alert", 3, "class", "click", 4, "ngFor", "ngForOf"], ["role", "alert", 3, "click"], [4, "ngIf"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"]], template: function MessageUiComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, MessageUiComponent_div_0_Template, 3, 3, "div", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.appStrings$));
        } }, dependencies: [i3.NgForOf, i3.NgIf, i3.AsyncPipe], encapsulation: 2, data: { animation: [
                trigger('fade', [
                    transition(':enter', useAnimation(fadeIn, {
                        params: { timing: 0.5, delay: 0 }
                    })),
                    transition(':leave', useAnimation(fadeOut, {
                        params: { timing: 0.5, delay: 0 }
                    })),
                ])
            ] } });
}
export { MessageUiComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MessageUiComponent, [{
        type: Component,
        args: [{ selector: 'scrm-message-ui', animations: [
                    trigger('fade', [
                        transition(':enter', useAnimation(fadeIn, {
                            params: { timing: 0.5, delay: 0 }
                        })),
                        transition(':leave', useAnimation(fadeOut, {
                            params: { timing: 0.5, delay: 0 }
                        })),
                    ])
                ], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div class=\"container-fluid alert-fixed message-wrapper\" *ngIf=\"(appStrings$ | async) as appStrings\">\n    <div class=\"d-flex justify-content-center flex-column align-items-center message-container\"\n         *ngIf=\"(messages$ | async) as items\">\n        <div *ngFor=\"let message of items\"\n             (click)=\"close(message)\"\n             class=\"message {{ message.type }} alert-dismissible fade show shadow\"\n             [@fade]\n             role=\"alert\">\n            <ng-container *ngIf=\"message.labelKey\">{{appStrings[message.labelKey] || message.labelKey || ''}}</ng-container>\n            <ng-container *ngIf=\"message.text && !message.labelKey\">{{message.text}}</ng-container>\n            <a (click)=\"close(message)\" type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n            </a>\n        </div>\n    </div>\n</div>\n" }]
    }], function () { return [{ type: i1.MessageService }, { type: i2.LanguageStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBR2hELE9BQU8sRUFBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3RFLE9BQU8sRUFBQyxNQUFNLEVBQUUsT0FBTyxFQUFDLE1BQU0sWUFBWSxDQUFDOzs7Ozs7SUNLL0IsNkJBQXVDO0lBQUEsWUFBMEQ7SUFBQSwwQkFBZTs7OztJQUF6RSxlQUEwRDtJQUExRCxxRkFBMEQ7OztJQUNqRyw2QkFBd0Q7SUFBQSxZQUFnQjtJQUFBLDBCQUFlOzs7SUFBL0IsZUFBZ0I7SUFBaEIscUNBQWdCOzs7O0lBTjVFLDhCQUlrQjtJQUhiLHlPQUFTLGVBQUEseUJBQWMsQ0FBQSxJQUFDO0lBSXpCLHVHQUFnSDtJQUNoSCx1R0FBdUY7SUFDdkYsNEJBQWdHO0lBQTdGLHVPQUFTLGVBQUEseUJBQWMsQ0FBQSxJQUFDO0lBQ3ZCLCtCQUF5QjtJQUFBLHNCQUFPO0lBQUEsaUJBQU8sRUFBQSxFQUFBOzs7SUFOMUMsNkZBQXFFO0lBQ3JFLGlDQUFPO0lBRU8sZUFBc0I7SUFBdEIsMENBQXNCO0lBQ3RCLGVBQXVDO0lBQXZDLDhEQUF1Qzs7O0lBUjlELDhCQUMwQztJQUN0QywrRUFVTTtJQUNWLGlCQUFNOzs7SUFYdUIsZUFBUTtJQUFSLGtDQUFROzs7SUFIekMsOEJBQXFHO0lBQ2pHLHlFQWFNOztJQUNWLGlCQUFNOzs7SUFiSSxlQUEwQjtJQUExQiw2REFBMEI7O0FETXBDLE1BZWEsa0JBQWtCO0lBT2hCO0lBQ0E7SUFOWCxTQUFTLENBQXdCO0lBRWpDLFdBQVcsQ0FBZ0M7SUFFM0MsWUFDVyxjQUE4QixFQUM5QixTQUF3QjtRQUR4QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsY0FBUyxHQUFULFNBQVMsQ0FBZTtRQUUvQixJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUM7SUFDN0MsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO0lBQ25ELENBQUM7SUFFRCxLQUFLLENBQUMsT0FBZ0I7UUFDbEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7NEVBbkJRLGtCQUFrQjs2REFBbEIsa0JBQWtCO1lDdkIvQixtRUFlTTs7O1lBZm9ELDREQUE0QjtxR0RZdEU7Z0JBQ1IsT0FBTyxDQUFDLE1BQU0sRUFBRTtvQkFDWixVQUFVLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxNQUFNLEVBQUU7d0JBQ3RDLE1BQU0sRUFBRSxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQztxQkFDbEMsQ0FBQyxDQUFDO29CQUNILFVBQVUsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLE9BQU8sRUFBRTt3QkFDdkMsTUFBTSxFQUFFLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFDO3FCQUNsQyxDQUFDLENBQUM7aUJBQ04sQ0FBQzthQUNMOztTQUVRLGtCQUFrQjt1RkFBbEIsa0JBQWtCO2NBZjlCLFNBQVM7MkJBQ0ksaUJBQWlCLGNBR2Y7b0JBQ1IsT0FBTyxDQUFDLE1BQU0sRUFBRTt3QkFDWixVQUFVLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxNQUFNLEVBQUU7NEJBQ3RDLE1BQU0sRUFBRSxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQzt5QkFDbEMsQ0FBQyxDQUFDO3dCQUNILFVBQVUsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLE9BQU8sRUFBRTs0QkFDdkMsTUFBTSxFQUFFLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFDO3lCQUNsQyxDQUFDLENBQUM7cUJBQ04sQ0FBQztpQkFDTCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01lc3NhZ2V9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHt0cmFuc2l0aW9uLCB0cmlnZ2VyLCB1c2VBbmltYXRpb259IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHtmYWRlSW4sIGZhZGVPdXR9IGZyb20gJ25nLWFuaW1hdGUnO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlLCBMYW5ndWFnZVN0cmluZ01hcH0gZnJvbSAnLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvbWVzc2FnZS9tZXNzYWdlLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1tZXNzYWdlLXVpJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbWVzc2FnZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXSxcbiAgICBhbmltYXRpb25zOiBbXG4gICAgICAgIHRyaWdnZXIoJ2ZhZGUnLCBbXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCB1c2VBbmltYXRpb24oZmFkZUluLCB7XG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7dGltaW5nOiAwLjUsIGRlbGF5OiAwfVxuICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgdHJhbnNpdGlvbignOmxlYXZlJywgdXNlQW5pbWF0aW9uKGZhZGVPdXQsIHtcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHt0aW1pbmc6IDAuNSwgZGVsYXk6IDB9XG4gICAgICAgICAgICB9KSksXG4gICAgICAgIF0pXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlVWlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgbWVzc2FnZXMkOiBPYnNlcnZhYmxlPE1lc3NhZ2VbXT47XG5cbiAgICBhcHBTdHJpbmdzJDogT2JzZXJ2YWJsZTxMYW5ndWFnZVN0cmluZ01hcD47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSxcbiAgICAgICAgcHVibGljIGxhbmd1YWdlczogTGFuZ3VhZ2VTdG9yZVxuICAgICkge1xuICAgICAgICB0aGlzLmFwcFN0cmluZ3MkID0gbGFuZ3VhZ2VzLmFwcFN0cmluZ3MkO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLm1lc3NhZ2VzJCA9IHRoaXMubWVzc2FnZVNlcnZpY2UubWVzc2FnZXMkO1xuICAgIH1cblxuICAgIGNsb3NlKG1lc3NhZ2U6IE1lc3NhZ2UpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5jb250YWlucyhtZXNzYWdlLCB0cnVlKTtcbiAgICB9XG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkIGFsZXJ0LWZpeGVkIG1lc3NhZ2Utd3JhcHBlclwiICpuZ0lmPVwiKGFwcFN0cmluZ3MkIHwgYXN5bmMpIGFzIGFwcFN0cmluZ3NcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyIG1lc3NhZ2UtY29udGFpbmVyXCJcbiAgICAgICAgICpuZ0lmPVwiKG1lc3NhZ2VzJCB8IGFzeW5jKSBhcyBpdGVtc1wiPlxuICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBtZXNzYWdlIG9mIGl0ZW1zXCJcbiAgICAgICAgICAgICAoY2xpY2spPVwiY2xvc2UobWVzc2FnZSlcIlxuICAgICAgICAgICAgIGNsYXNzPVwibWVzc2FnZSB7eyBtZXNzYWdlLnR5cGUgfX0gYWxlcnQtZGlzbWlzc2libGUgZmFkZSBzaG93IHNoYWRvd1wiXG4gICAgICAgICAgICAgW0BmYWRlXVxuICAgICAgICAgICAgIHJvbGU9XCJhbGVydFwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm1lc3NhZ2UubGFiZWxLZXlcIj57e2FwcFN0cmluZ3NbbWVzc2FnZS5sYWJlbEtleV0gfHwgbWVzc2FnZS5sYWJlbEtleSB8fCAnJ319PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibWVzc2FnZS50ZXh0ICYmICFtZXNzYWdlLmxhYmVsS2V5XCI+e3ttZXNzYWdlLnRleHR9fTwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPGEgKGNsaWNrKT1cImNsb3NlKG1lc3NhZ2UpXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJhbGVydFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG4iXX0=