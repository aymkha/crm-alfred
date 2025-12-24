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
import * as i0 from "@angular/core";
import * as i1 from "../../services/auth/auth.service";
import * as i2 from "../../store/language/language.store";
import * as i3 from "@angular/common";
function LogoutUiComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 1);
    i0.ɵɵlistener("click", function LogoutUiComponent_ng_container_0_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.doLogout()); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const vm_r1 = ctx.ngIf;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(vm_r1.appStrings[ctx_r0.logout.logoutAction.label] || "");
} }
class LogoutUiComponent {
    auth;
    languageStore;
    logout = {
        logoutAction: {
            label: 'LBL_LOGOUT'
        }
    };
    languages$ = this.languageStore.vm$;
    vm$ = this.languages$.pipe(map(languages => ({
        appStrings: languages.appStrings || {},
        appListStrings: languages.appListStrings || {}
    })));
    constructor(auth, languageStore) {
        this.auth = auth;
        this.languageStore = languageStore;
    }
    /**
     * call logout
     */
    doLogout() {
        this.auth.logout();
    }
    static ɵfac = function LogoutUiComponent_Factory(t) { return new (t || LogoutUiComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.LanguageStore)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LogoutUiComponent, selectors: [["scrm-logout-ui"]], decls: 2, vars: 3, consts: [[4, "ngIf"], [1, "dropdown-item", "global-links-sublink", 3, "click"]], template: function LogoutUiComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, LogoutUiComponent_ng_container_0_Template, 3, 1, "ng-container", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.vm$));
        } }, dependencies: [i3.NgIf, i3.AsyncPipe], encapsulation: 2 });
}
export { LogoutUiComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LogoutUiComponent, [{
        type: Component,
        args: [{ selector: 'scrm-logout-ui', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"(vm$ | async) as vm\">\n    <a class=\"dropdown-item global-links-sublink\"\n       (click)=\"doLogout()\">{{vm.appStrings[logout.logoutAction.label] || ''}}</a>\n</ng-container>\n<!-- this component should be used in navigation bar / bottom of user action menu -->\n" }]
    }], function () { return [{ type: i1.AuthService }, { type: i2.LanguageStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvbG9nb3V0L2xvZ291dC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV4QyxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7SUNEbkMsNkJBQTBDO0lBQ3RDLDRCQUN3QjtJQUFyQixrS0FBUyxlQUFBLGlCQUFVLENBQUEsSUFBQztJQUFDLFlBQWtEO0lBQUEsaUJBQUk7SUFDbEYsMEJBQWU7Ozs7SUFEYSxlQUFrRDtJQUFsRCw4RUFBa0Q7O0FESTlFLE1BS2EsaUJBQWlCO0lBb0JaO0lBQ0E7SUFuQmQsTUFBTSxHQUFnQjtRQUNsQixZQUFZLEVBQUU7WUFDVixLQUFLLEVBQUUsWUFBWTtTQUN0QjtLQUNKLENBQUM7SUFFRixVQUFVLEdBQWdDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDO0lBRWpFLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDdEIsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FDYjtRQUNJLFVBQVUsRUFBRSxTQUFTLENBQUMsVUFBVSxJQUFJLEVBQUU7UUFDdEMsY0FBYyxFQUFFLFNBQVMsQ0FBQyxjQUFjLElBQUksRUFBRTtLQUNqRCxDQUFDLENBQ0wsQ0FDSixDQUFDO0lBRUYsWUFDYyxJQUFpQixFQUNqQixhQUE0QjtRQUQ1QixTQUFJLEdBQUosSUFBSSxDQUFhO1FBQ2pCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBRTFDLENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVE7UUFDSixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3ZCLENBQUM7MkVBOUJRLGlCQUFpQjs2REFBakIsaUJBQWlCO1lDWDlCLG9GQUdlOzs7WUFIQSxvREFBb0I7OztTRFd0QixpQkFBaUI7dUZBQWpCLGlCQUFpQjtjQUw3QixTQUFTOzJCQUNJLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7bWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmUsIExhbmd1YWdlU3RyaW5nc30gZnJvbSAnLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aC9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHtMb2dvdXRNb2RlbH0gZnJvbSAnLi9sb2dvdXQtbW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tbG9nb3V0LXVpJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbG9nb3V0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIExvZ291dFVpQ29tcG9uZW50IHtcblxuICAgIGxvZ291dDogTG9nb3V0TW9kZWwgPSB7XG4gICAgICAgIGxvZ291dEFjdGlvbjoge1xuICAgICAgICAgICAgbGFiZWw6ICdMQkxfTE9HT1VUJ1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGxhbmd1YWdlcyQ6IE9ic2VydmFibGU8TGFuZ3VhZ2VTdHJpbmdzPiA9IHRoaXMubGFuZ3VhZ2VTdG9yZS52bSQ7XG5cbiAgICB2bSQgPSB0aGlzLmxhbmd1YWdlcyQucGlwZShcbiAgICAgICAgbWFwKGxhbmd1YWdlcyA9PiAoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXBwU3RyaW5nczogbGFuZ3VhZ2VzLmFwcFN0cmluZ3MgfHwge30sXG4gICAgICAgICAgICAgICAgYXBwTGlzdFN0cmluZ3M6IGxhbmd1YWdlcy5hcHBMaXN0U3RyaW5ncyB8fCB7fVxuICAgICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGF1dGg6IEF1dGhTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2VTdG9yZTogTGFuZ3VhZ2VTdG9yZVxuICAgICkge1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGNhbGwgbG9nb3V0XG4gICAgICovXG4gICAgZG9Mb2dvdXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYXV0aC5sb2dvdXQoKTtcbiAgICB9XG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48bmctY29udGFpbmVyICpuZ0lmPVwiKHZtJCB8IGFzeW5jKSBhcyB2bVwiPlxuICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbSBnbG9iYWwtbGlua3Mtc3VibGlua1wiXG4gICAgICAgKGNsaWNrKT1cImRvTG9nb3V0KClcIj57e3ZtLmFwcFN0cmluZ3NbbG9nb3V0LmxvZ291dEFjdGlvbi5sYWJlbF0gfHwgJyd9fTwvYT5cbjwvbmctY29udGFpbmVyPlxuPCEtLSB0aGlzIGNvbXBvbmVudCBzaG91bGQgYmUgdXNlZCBpbiBuYXZpZ2F0aW9uIGJhciAvIGJvdHRvbSBvZiB1c2VyIGFjdGlvbiBtZW51IC0tPlxuIl19