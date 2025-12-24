/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2022 SalesAgility Ltd.
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
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/system-config/system-config.store";
import * as i2 from "../../../../components/label/label.component";
import * as i3 from "../../../../components/logo/logo.component";
class LogoutComponent {
    configs;
    constructor(configs) {
        this.configs = configs;
    }
    getLoginURL() {
        return './';
    }
    static ɵfac = function LogoutComponent_Factory(t) { return new (t || LogoutComponent)(i0.ɵɵdirectiveInject(i1.SystemConfigStore)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LogoutComponent, selectors: [["scrm-logout"]], decls: 11, vars: 1, consts: [[1, "logged-out-view", "full-height-view", "d-flex", "flex-column", "align-items-center", "justify-content-center"], [1, "logo-row", "full-height-view-row"], [1, "mt-3", "mb-1", "page-title", "full-height-view-row"], ["labelKey", "LBL_LOGGED_OUT_MESSAGE"], [1, "page-subtitle", "full-height-view-row"], ["labelKey", "LBL_LOGIN_AGAIN"], [1, "text-lowercase", 3, "href"], ["labelKey", "LBL_CLICK_HERE"]], template: function LogoutComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵelement(2, "scrm-logo-ui");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 2)(4, "h2");
            i0.ɵɵelement(5, "scrm-label", 3);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "div", 4)(7, "h5");
            i0.ɵɵelement(8, "scrm-label", 5);
            i0.ɵɵelementStart(9, "a", 6);
            i0.ɵɵelement(10, "scrm-label", 7);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("href", ctx.getLoginURL(), i0.ɵɵsanitizeUrl);
        } }, dependencies: [i2.LabelComponent, i3.LogoUiComponent], encapsulation: 2 });
}
export { LogoutComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LogoutComponent, [{
        type: Component,
        args: [{ selector: 'scrm-logout', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2022 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div class=\"logged-out-view full-height-view d-flex flex-column align-items-center justify-content-center\">\n\n    <div class=\"logo-row full-height-view-row\">\n        <scrm-logo-ui></scrm-logo-ui>\n    </div>\n    <div class=\"mt-3 mb-1 page-title full-height-view-row\">\n        <h2>\n            <scrm-label labelKey=\"LBL_LOGGED_OUT_MESSAGE\"></scrm-label>\n        </h2>\n    </div>\n    <div class=\"page-subtitle full-height-view-row\">\n        <h5>\n            <scrm-label labelKey=\"LBL_LOGIN_AGAIN\"></scrm-label><a class=\"text-lowercase\" [href]=\"getLoginURL()\"><scrm-label labelKey=\"LBL_CLICK_HERE\"></scrm-label></a>\n        </h5>\n    </div>\n</div>\n" }]
    }], function () { return [{ type: i1.SystemConfigStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi92aWV3cy9sb2dvdXQvY29tcG9uZW50cy9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi92aWV3cy9sb2dvdXQvY29tcG9uZW50cy9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztBQUl4QyxNQUthLGVBQWU7SUFFRjtJQUF0QixZQUFzQixPQUEwQjtRQUExQixZQUFPLEdBQVAsT0FBTyxDQUFtQjtJQUNoRCxDQUFDO0lBRUQsV0FBVztRQUNQLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7eUVBUFEsZUFBZTs2REFBZixlQUFlO1lDUjVCLDhCQUEyRyxhQUFBO1lBR25HLCtCQUE2QjtZQUNqQyxpQkFBTTtZQUNOLDhCQUF1RCxTQUFBO1lBRS9DLGdDQUEyRDtZQUMvRCxpQkFBSyxFQUFBO1lBRVQsOEJBQWdELFNBQUE7WUFFeEMsZ0NBQW9EO1lBQUEsNEJBQWlEO1lBQUEsaUNBQW1EO1lBQUEsaUJBQUksRUFBQSxFQUFBLEVBQUE7O1lBQTlFLGVBQXNCO1lBQXRCLDBEQUFzQjs7O1NESm5HLGVBQWU7dUZBQWYsZUFBZTtjQUwzQixTQUFTOzJCQUNJLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMiBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U3lzdGVtQ29uZmlnU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3N5c3RlbS1jb25maWcvc3lzdGVtLWNvbmZpZy5zdG9yZSc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLWxvZ291dCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2xvZ291dC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgTG9nb3V0Q29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjb25maWdzOiBTeXN0ZW1Db25maWdTdG9yZSkge1xuICAgIH1cblxuICAgIGdldExvZ2luVVJMKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnLi8nO1xuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjIgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxkaXYgY2xhc3M9XCJsb2dnZWQtb3V0LXZpZXcgZnVsbC1oZWlnaHQtdmlldyBkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cblxuICAgIDxkaXYgY2xhc3M9XCJsb2dvLXJvdyBmdWxsLWhlaWdodC12aWV3LXJvd1wiPlxuICAgICAgICA8c2NybS1sb2dvLXVpPjwvc2NybS1sb2dvLXVpPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtdC0zIG1iLTEgcGFnZS10aXRsZSBmdWxsLWhlaWdodC12aWV3LXJvd1wiPlxuICAgICAgICA8aDI+XG4gICAgICAgICAgICA8c2NybS1sYWJlbCBsYWJlbEtleT1cIkxCTF9MT0dHRURfT1VUX01FU1NBR0VcIj48L3Njcm0tbGFiZWw+XG4gICAgICAgIDwvaDI+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInBhZ2Utc3VidGl0bGUgZnVsbC1oZWlnaHQtdmlldy1yb3dcIj5cbiAgICAgICAgPGg1PlxuICAgICAgICAgICAgPHNjcm0tbGFiZWwgbGFiZWxLZXk9XCJMQkxfTE9HSU5fQUdBSU5cIj48L3Njcm0tbGFiZWw+PGEgY2xhc3M9XCJ0ZXh0LWxvd2VyY2FzZVwiIFtocmVmXT1cImdldExvZ2luVVJMKClcIj48c2NybS1sYWJlbCBsYWJlbEtleT1cIkxCTF9DTElDS19IRVJFXCI+PC9zY3JtLWxhYmVsPjwvYT5cbiAgICAgICAgPC9oNT5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuIl19