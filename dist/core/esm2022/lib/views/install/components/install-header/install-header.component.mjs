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
import { map } from 'rxjs/operators';
import { InstallActionsAdapter } from '../../adapters/actions.adapter';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../../adapters/actions.adapter";
import * as i2 from "../../store/install-view/install-view.store";
import * as i3 from "@angular/common";
import * as i4 from "../../../../components/action-group-menu/action-group-menu.component";
import * as i5 from "../../../../components/label/label.component";
import * as i6 from "../../../../fields/field.component";
function InstallHeaderComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
    i0.ɵɵelement(5, "scrm-label", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 6);
    i0.ɵɵelement(7, "scrm-label", 7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "div", 12)(13, "label", 13);
    i0.ɵɵelement(14, "scrm-label", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(15, ": ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "div", 15)(17, "div", 16);
    i0.ɵɵelement(18, "scrm-field", 17);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(19, "div");
    i0.ɵɵelement(20, "scrm-action-group-menu", 18);
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const vm_r1 = ctx.ngIf;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(14);
    i0.ɵɵproperty("labelKey", ctx_r0.store.getIgnoreSystemChecksField().definition.vname);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("field", ctx_r0.store.getIgnoreSystemChecksField())("mode", "edit")("record", vm_r1.record)("type", ctx_r0.store.getIgnoreSystemChecksField().type);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("actionContext", ctx_r0.getActionContext(vm_r1.record))("config", ctx_r0.actionsAdapter);
} }
class InstallHeaderComponent {
    actionsAdapter;
    store;
    vm$;
    constructor(actionsAdapter, store) {
        this.actionsAdapter = actionsAdapter;
        this.store = store;
        // Guard against missing store/record$ during bootstrap
        this.vm$ = this.store?.record$
            ? this.store.record$.pipe(map((record) => ({ record })))
            : of({ record: null });
    }
    /**
     * Build action context
     * @param record
     */
    getActionContext(record) {
        if (!record) {
            return {};
        }
        return {
            module: record.module || '',
            record
        };
    }
    getTitle() {
    }
    static ɵfac = function InstallHeaderComponent_Factory(t) { return new (t || InstallHeaderComponent)(i0.ɵɵdirectiveInject(i1.InstallActionsAdapter), i0.ɵɵdirectiveInject(i2.InstallViewStore)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InstallHeaderComponent, selectors: [["scrm-install-header"]], features: [i0.ɵɵProvidersFeature([InstallActionsAdapter])], decls: 2, vars: 3, consts: [[4, "ngIf"], [1, "install-view-header"], [1, "row", "mr-0"], [1, "col-md-4", "install-header-title-col"], [1, "install-view-title", "record-view-name"], ["labelKey", "LBL_WELCOME", "module", "install"], [1, "install-view-subtitle", "record-view-title"], ["labelKey", "LBL_INSTALL", "module", "install"], [1, "col-md-8", "install-header-buttons-col"], [1, "row", "mr-1", "ml-1"], [1, "w-100", "d-flex", "justify-content-end", "align-items-center"], [1, "w-100", "install-header-options", "d-flex", "justify-content-end", "align-items-center", "pr-5"], [1, "label-container", "pr-2"], [1, "m-0", "small"], [3, "labelKey"], [1, "d-flex"], [1, "flex-grow-1", "text-break"], [3, "field", "mode", "record", "type"], ["buttonClass", "settings-button", "klass", "install-view-actions float-right", 3, "actionContext", "config"]], template: function InstallHeaderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, InstallHeaderComponent_ng_container_0_Template, 21, 7, "ng-container", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.vm$));
        } }, dependencies: [i3.NgIf, i4.ActionGroupMenuComponent, i5.LabelComponent, i6.FieldComponent, i3.AsyncPipe], encapsulation: 2 });
}
export { InstallHeaderComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InstallHeaderComponent, [{
        type: Component,
        args: [{ selector: 'scrm-install-header', providers: [InstallActionsAdapter], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"(vm$ | async) as vm\">\n\n    <div class=\"install-view-header\">\n\n        <div class=\"row mr-0\">\n\n            <div class=\"col-md-4 install-header-title-col\">\n\n                <div class=\"install-view-title record-view-name\">\n                    <scrm-label labelKey=\"LBL_WELCOME\" module=\"install\"></scrm-label>\n                </div>\n                <div class=\"install-view-subtitle record-view-title\">\n                    <scrm-label labelKey=\"LBL_INSTALL\" module=\"install\"></scrm-label>\n                </div>\n\n            </div>\n\n            <div class=\"col-md-8 install-header-buttons-col\">\n\n                <div class=\"row mr-1 ml-1\">\n\n                    <div class=\"w-100 d-flex justify-content-end align-items-center\">\n\n                        <div class=\"w-100 install-header-options d-flex justify-content-end align-items-center pr-5\">\n                            <div class=\"label-container pr-2\">\n                                <label class=\"m-0 small\">\n                                    <scrm-label\n                                        [labelKey]=\"store.getIgnoreSystemChecksField().definition.vname\"></scrm-label>\n                                </label>:\n                            </div>\n                            <div class=\"d-flex\">\n                                <div class=\"flex-grow-1 text-break\">\n                                    <scrm-field [field]=\"store.getIgnoreSystemChecksField()\"\n                                                [mode]=\"'edit'\"\n                                                [record]=\"vm.record\"\n                                                [type]=\"store.getIgnoreSystemChecksField().type\">\n                                    </scrm-field>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div>\n                            <scrm-action-group-menu\n                                [actionContext]=\"getActionContext(vm.record)\"\n                                [config]=\"actionsAdapter\"\n                                buttonClass=\"settings-button\"\n                                klass=\"install-view-actions float-right\"\n                            >\n                            </scrm-action-group-menu>\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n</ng-container>\n" }]
    }], function () { return [{ type: i1.InstallActionsAdapter }, { type: i2.InstallViewStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFsbC1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3ZpZXdzL2luc3RhbGwvY29tcG9uZW50cy9pbnN0YWxsLWhlYWRlci9pbnN0YWxsLWhlYWRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvaW5zdGFsbC9jb21wb25lbnRzL2luc3RhbGwtaGVhZGVyL2luc3RhbGwtaGVhZGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuQyxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUdyRSxPQUFPLEVBQWEsRUFBRSxFQUFDLE1BQU0sTUFBTSxDQUFDOzs7Ozs7Ozs7SUNKcEMsNkJBQTBDO0lBRXRDLDhCQUFpQyxhQUFBLGFBQUEsYUFBQTtJQU9qQixnQ0FBaUU7SUFDckUsaUJBQU07SUFDTiw4QkFBcUQ7SUFDakQsZ0NBQWlFO0lBQ3JFLGlCQUFNLEVBQUE7SUFJViw4QkFBaUQsYUFBQSxlQUFBLGVBQUEsZUFBQSxpQkFBQTtJQVN6QixrQ0FDa0Y7SUFDdEYsaUJBQVE7SUFBQSxtQkFDWjtJQUFBLGlCQUFNO0lBQ04sZ0NBQW9CLGVBQUE7SUFFWixrQ0FJYTtJQUNqQixpQkFBTSxFQUFBLEVBQUE7SUFJZCw0QkFBSztJQUNELDhDQU15QjtJQUM3QixpQkFBTSxFQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUE7SUFXOUIsMEJBQWU7Ozs7SUFqQ3lCLGdCQUFnRTtJQUFoRSxxRkFBZ0U7SUFLeEQsZUFBNEM7SUFBNUMsaUVBQTRDLGdCQUFBLHdCQUFBLHdEQUFBO0lBVzVELGVBQTZDO0lBQTdDLHFFQUE2QyxpQ0FBQTs7QURyQzdFLE1BS2Esc0JBQXNCO0lBS3BCO0lBQ0E7SUFKWCxHQUFHLENBQXdDO0lBRTNDLFlBQ1csY0FBcUMsRUFDckMsS0FBdUI7UUFEdkIsbUJBQWMsR0FBZCxjQUFjLENBQXVCO1FBQ3JDLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBRTlCLHVEQUF1RDtRQUN2RCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTztZQUMxQixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLENBQUMsQ0FBQztZQUN0RCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVEOzs7T0FHRztJQUNILGdCQUFnQixDQUFDLE1BQWM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNULE9BQU8sRUFBbUIsQ0FBQTtTQUM3QjtRQUVELE9BQU87WUFDSCxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sSUFBSSxFQUFFO1lBQzNCLE1BQU07U0FDUSxDQUFBO0lBQ3RCLENBQUM7SUFFRCxRQUFRO0lBRVIsQ0FBQztnRkEvQlEsc0JBQXNCOzZEQUF0QixzQkFBc0IseUVBRnBCLENBQUMscUJBQXFCLENBQUM7WUNUdEMsMEZBNERlOzs7WUE1REEsb0RBQW9COzs7U0RXdEIsc0JBQXNCO3VGQUF0QixzQkFBc0I7Y0FMbEMsU0FBUzsyQkFDSSxxQkFBcUIsYUFFcEIsQ0FBQyxxQkFBcUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHttYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7SW5zdGFsbEFjdGlvbnNBZGFwdGVyfSBmcm9tICcuLi8uLi9hZGFwdGVycy9hY3Rpb25zLmFkYXB0ZXInO1xuaW1wb3J0IHtBY3Rpb25Db250ZXh0LCBSZWNvcmR9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge0luc3RhbGxWaWV3U3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL2luc3RhbGwtdmlldy9pbnN0YWxsLXZpZXcuc3RvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBvZn0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1pbnN0YWxsLWhlYWRlcicsXG4gICAgdGVtcGxhdGVVcmw6ICdpbnN0YWxsLWhlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbSW5zdGFsbEFjdGlvbnNBZGFwdGVyXVxufSlcbmV4cG9ydCBjbGFzcyBJbnN0YWxsSGVhZGVyQ29tcG9uZW50IHtcblxuICAgIHZtJDogT2JzZXJ2YWJsZTx7IHJlY29yZDogUmVjb3JkIHwgbnVsbCB9PjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgYWN0aW9uc0FkYXB0ZXI6IEluc3RhbGxBY3Rpb25zQWRhcHRlcixcbiAgICAgICAgcHVibGljIHN0b3JlOiBJbnN0YWxsVmlld1N0b3JlLFxuICAgICkge1xuICAgICAgICAvLyBHdWFyZCBhZ2FpbnN0IG1pc3Npbmcgc3RvcmUvcmVjb3JkJCBkdXJpbmcgYm9vdHN0cmFwXG4gICAgICAgIHRoaXMudm0kID0gdGhpcy5zdG9yZT8ucmVjb3JkJFxuICAgICAgICAgICAgPyB0aGlzLnN0b3JlLnJlY29yZCQucGlwZShtYXAoKHJlY29yZCkgPT4gKHtyZWNvcmR9KSkpXG4gICAgICAgICAgICA6IG9mKHtyZWNvcmQ6IG51bGx9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBhY3Rpb24gY29udGV4dFxuICAgICAqIEBwYXJhbSByZWNvcmRcbiAgICAgKi9cbiAgICBnZXRBY3Rpb25Db250ZXh0KHJlY29yZDogUmVjb3JkKTogQWN0aW9uQ29udGV4dCB7XG4gICAgICAgIGlmICghcmVjb3JkKSB7XG4gICAgICAgICAgICByZXR1cm4ge30gYXMgQWN0aW9uQ29udGV4dFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1vZHVsZTogcmVjb3JkLm1vZHVsZSB8fCAnJyxcbiAgICAgICAgICAgIHJlY29yZFxuICAgICAgICB9IGFzIEFjdGlvbkNvbnRleHRcbiAgICB9XG5cbiAgICBnZXRUaXRsZSgpIHtcblxuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxuZy1jb250YWluZXIgKm5nSWY9XCIodm0kIHwgYXN5bmMpIGFzIHZtXCI+XG5cbiAgICA8ZGl2IGNsYXNzPVwiaW5zdGFsbC12aWV3LWhlYWRlclwiPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbXItMFwiPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTQgaW5zdGFsbC1oZWFkZXItdGl0bGUtY29sXCI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5zdGFsbC12aWV3LXRpdGxlIHJlY29yZC12aWV3LW5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNjcm0tbGFiZWwgbGFiZWxLZXk9XCJMQkxfV0VMQ09NRVwiIG1vZHVsZT1cImluc3RhbGxcIj48L3Njcm0tbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluc3RhbGwtdmlldy1zdWJ0aXRsZSByZWNvcmQtdmlldy10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c2NybS1sYWJlbCBsYWJlbEtleT1cIkxCTF9JTlNUQUxMXCIgbW9kdWxlPVwiaW5zdGFsbFwiPjwvc2NybS1sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOCBpbnN0YWxsLWhlYWRlci1idXR0b25zLWNvbFwiPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBtci0xIG1sLTFcIj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xMDAgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgYWxpZ24taXRlbXMtY2VudGVyXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEwMCBpbnN0YWxsLWhlYWRlci1vcHRpb25zIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kIGFsaWduLWl0ZW1zLWNlbnRlciBwci01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsLWNvbnRhaW5lciBwci0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cIm0tMCBzbWFsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbGFiZWxLZXldPVwic3RvcmUuZ2V0SWdub3JlU3lzdGVtQ2hlY2tzRmllbGQoKS5kZWZpbml0aW9uLnZuYW1lXCI+PC9zY3JtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LWdyb3ctMSB0ZXh0LWJyZWFrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1maWVsZCBbZmllbGRdPVwic3RvcmUuZ2V0SWdub3JlU3lzdGVtQ2hlY2tzRmllbGQoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbW9kZV09XCInZWRpdCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3JlY29yZF09XCJ2bS5yZWNvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3R5cGVdPVwic3RvcmUuZ2V0SWdub3JlU3lzdGVtQ2hlY2tzRmllbGQoKS50eXBlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Njcm0tZmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tYWN0aW9uLWdyb3VwLW1lbnVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2FjdGlvbkNvbnRleHRdPVwiZ2V0QWN0aW9uQ29udGV4dCh2bS5yZWNvcmQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbmZpZ109XCJhY3Rpb25zQWRhcHRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkNsYXNzPVwic2V0dGluZ3MtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2xhc3M9XCJpbnN0YWxsLXZpZXctYWN0aW9ucyBmbG9hdC1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2NybS1hY3Rpb24tZ3JvdXAtbWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==