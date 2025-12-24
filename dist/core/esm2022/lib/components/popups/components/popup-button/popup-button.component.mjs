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
import { Component, Input, signal } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../button/button.component";
import * as i2 from "@ng-bootstrap/ng-bootstrap";
function PopupButtonComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
function PopupButtonComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 1);
} }
const _c0 = [[["", "popup-content", ""]], [["", "popup-title", ""]]];
const _c1 = ["[popup-content]", "[popup-title]"];
class PopupButtonComponent {
    icon;
    klass = 'line-action-item line-action float-right';
    buttonConfig = signal({});
    constructor() {
    }
    ngOnInit() {
        this.buttonConfig.update(() => this.getButtonConfig());
    }
    getButtonConfig() {
        return {
            icon: this.icon,
            klass: this.klass,
        };
    }
    static ɵfac = function PopupButtonComponent_Factory(t) { return new (t || PopupButtonComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PopupButtonComponent, selectors: [["scrm-popup-button"]], inputs: { icon: "icon", klass: "klass" }, ngContentSelectors: _c1, decls: 5, vars: 6, consts: [["popContent", ""], ["popTitle", ""], [3, "config", "autoClose", "ngbPopover", "popoverTitle", "popoverClass", "placement"]], template: function PopupButtonComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵtemplate(0, PopupButtonComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(2, PopupButtonComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelement(4, "scrm-button", 2);
        } if (rf & 2) {
            const _r0 = i0.ɵɵreference(1);
            const _r2 = i0.ɵɵreference(3);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("config", ctx.buttonConfig())("autoClose", "outside")("ngbPopover", _r0)("popoverTitle", _r2)("popoverClass", "popover-wrapper")("placement", "right");
        } }, dependencies: [i1.ButtonComponent, i2.NgbPopover], encapsulation: 2 });
}
export { PopupButtonComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PopupButtonComponent, [{
        type: Component,
        args: [{ selector: 'scrm-popup-button', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2023 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-template #popContent>\n    <ng-content select=\"[popup-content]\"></ng-content>\n</ng-template>\n<ng-template #popTitle>\n    <ng-content select=\"[popup-title]\"></ng-content>\n</ng-template>\n<scrm-button [config]=\"buttonConfig()\"\n             [autoClose]=\"'outside'\"\n             [ngbPopover]=\"popContent\"\n             [popoverTitle]=\"popTitle\"\n             [popoverClass]=\"'popover-wrapper'\"\n             [placement]=\"'right'\"\n></scrm-button>\n" }]
    }], function () { return []; }, { icon: [{
            type: Input
        }], klass: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL3BvcHVwcy9jb21wb25lbnRzL3BvcHVwLWJ1dHRvbi9wb3B1cC1idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvcG9wdXBzL2NvbXBvbmVudHMvcG9wdXAtYnV0dG9uL3BvcHVwLWJ1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztJQ0UzRCxrQkFBa0Q7OztJQUdsRCxxQkFBZ0Q7Ozs7QURGcEQsTUFLYSxvQkFBb0I7SUFFcEIsSUFBSSxDQUFTO0lBQ2IsS0FBSyxHQUFXLDBDQUEwQyxDQUFDO0lBRXBFLFlBQVksR0FBRyxNQUFNLENBQWtCLEVBQUUsQ0FBQyxDQUFDO0lBRTNDO0lBQ0EsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsZUFBZTtRQUNYLE9BQU87WUFDSCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDRCxDQUFDO0lBQ3pCLENBQUM7OEVBbkJRLG9CQUFvQjs2REFBcEIsb0JBQW9COztZQ1BqQyxzSEFFYztZQUNkLHNIQUVjO1lBQ2QsaUNBTWU7Ozs7WUFORixlQUF5QjtZQUF6QiwyQ0FBeUIsd0JBQUEsbUJBQUEscUJBQUEsbUNBQUEsc0JBQUE7OztTREN6QixvQkFBb0I7dUZBQXBCLG9CQUFvQjtjQUxoQyxTQUFTOzJCQUNJLG1CQUFtQjtzQ0FNcEIsSUFBSTtrQkFBWixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjMgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgc2lnbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QnV0dG9uSW50ZXJmYWNlfSBmcm9tIFwiY29tbW9uXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1wb3B1cC1idXR0b24nLFxuICAgIHRlbXBsYXRlVXJsOiAncG9wdXAtYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBQb3B1cEJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblxuICAgIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgICBASW5wdXQoKSBrbGFzczogc3RyaW5nID0gJ2xpbmUtYWN0aW9uLWl0ZW0gbGluZS1hY3Rpb24gZmxvYXQtcmlnaHQnO1xuXG4gICAgYnV0dG9uQ29uZmlnID0gc2lnbmFsPEJ1dHRvbkludGVyZmFjZT4oe30pO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYnV0dG9uQ29uZmlnLnVwZGF0ZSggKCkgPT4gdGhpcy5nZXRCdXR0b25Db25maWcoKSk7XG4gICAgfVxuXG4gICAgZ2V0QnV0dG9uQ29uZmlnKCk6IEJ1dHRvbkludGVyZmFjZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpY29uOiB0aGlzLmljb24sXG4gICAgICAgICAgICBrbGFzczogdGhpcy5rbGFzcyxcbiAgICAgICAgfSBhcyBCdXR0b25JbnRlcmZhY2U7XG4gICAgfVxuXG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIzIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48bmctdGVtcGxhdGUgI3BvcENvbnRlbnQ+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3BvcHVwLWNvbnRlbnRdXCI+PC9uZy1jb250ZW50PlxuPC9uZy10ZW1wbGF0ZT5cbjxuZy10ZW1wbGF0ZSAjcG9wVGl0bGU+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3BvcHVwLXRpdGxlXVwiPjwvbmctY29udGVudD5cbjwvbmctdGVtcGxhdGU+XG48c2NybS1idXR0b24gW2NvbmZpZ109XCJidXR0b25Db25maWcoKVwiXG4gICAgICAgICAgICAgW2F1dG9DbG9zZV09XCInb3V0c2lkZSdcIlxuICAgICAgICAgICAgIFtuZ2JQb3BvdmVyXT1cInBvcENvbnRlbnRcIlxuICAgICAgICAgICAgIFtwb3BvdmVyVGl0bGVdPVwicG9wVGl0bGVcIlxuICAgICAgICAgICAgIFtwb3BvdmVyQ2xhc3NdPVwiJ3BvcG92ZXItd3JhcHBlcidcIlxuICAgICAgICAgICAgIFtwbGFjZW1lbnRdPVwiJ3JpZ2h0J1wiXG4+PC9zY3JtLWJ1dHRvbj5cbiJdfQ==