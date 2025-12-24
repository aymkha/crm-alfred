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
import { SelectionStatus } from 'common';
import * as i0 from "@angular/core";
import * as i1 from "../../store/language/language.store";
import * as i2 from "@angular/common";
import * as i3 from "@ng-bootstrap/ng-bootstrap";
import * as i4 from "../dropdown-button/dropdown-button.component";
import * as i5 from "../label/label.component";
function BulkActionMenuComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-label", 16);
    i0.ɵɵelementContainerEnd();
} }
class BulkActionMenuComponent {
    languageStore;
    selectionSource;
    actionSource;
    dropdownConfig;
    subs = [];
    status = SelectionStatus.NONE;
    count = 0;
    constructor(languageStore) {
        this.languageStore = languageStore;
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
        this.subs = [];
        this.count = 0;
        this.status = SelectionStatus.NONE;
    }
    ngOnInit() {
        this.subs = [];
        this.subs.push(this.selectionSource.getSelectionStatus().subscribe(status => this.status = status));
        this.subs.push(this.selectionSource.getSelectedCount().subscribe(count => this.count = count));
        this.subs.push(this.actionSource.getBulkActions().subscribe(actions => {
            const dropdownConfig = {
                labelKey: 'LBL_BULK_ACTION_BUTTON_LABEL',
                klass: ['bulk-action-button', 'btn', 'btn-sm'],
                wrapperKlass: ['bulk-action-group', 'float-left'],
                items: []
            };
            Object.keys(actions).forEach(actionKey => {
                const action = actions[actionKey];
                dropdownConfig.items.push({
                    labelKey: action.labelKey ?? '',
                    klass: [`${actionKey}-bulk-action`],
                    onClick: () => {
                        this.actionSource.executeBulkAction(action.key);
                    }
                });
            });
            this.dropdownConfig = dropdownConfig;
        }));
    }
    selectPage() {
        this.selectionSource.updateSelection(SelectionStatus.PAGE);
    }
    selectAll() {
        this.selectionSource.updateSelection(SelectionStatus.ALL);
    }
    deselectAll() {
        this.selectionSource.updateSelection(SelectionStatus.NONE);
    }
    toggleSelection(status) {
        if (status === SelectionStatus.ALL) {
            this.selectionSource.updateSelection(SelectionStatus.NONE);
            return;
        }
        this.selectionSource.updateSelection(SelectionStatus.ALL);
    }
    SelectionStatus = SelectionStatus;
    static ɵfac = function BulkActionMenuComponent_Factory(t) { return new (t || BulkActionMenuComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BulkActionMenuComponent, selectors: [["scrm-bulk-action-menu"]], inputs: { selectionSource: "selectionSource", actionSource: "actionSource" }, decls: 17, vars: 6, consts: [[1, "bulk-action", "float-left"], ["ngbDropdown", "", 1, "dropdown", "select-action-group", "float-left"], ["type", "button", "ngbDropdownToggle", "", "aria-haspopup", "true", "aria-expanded", "false", "aria-hidden", "true", "aria-label", "Select Action Menu", 1, "bulk-action-button", "dropdown-toggle", "btn", "btn-sm"], [1, "checkbox-container"], ["type", "checkbox", "aria-hidden", "true", 3, "checked", "indeterminate", "change"], [1, "checkmark"], [1, "bulk-action-selected-number"], [4, "ngIf"], ["ngbDropdownMenu", "", "aria-hidden", "true", 1, "dropdown-menu"], [1, "dropdown-item", "select-all", 3, "click"], ["labelKey", "LBL_LISTVIEW_OPTION_ENTIRE"], [1, "dropdown-item", "select-page", 3, "click"], ["labelKey", "LBL_LISTVIEW_OPTION_CURRENT"], [1, "dropdown-item", "deselect-all", 3, "click"], ["labelKey", "LBL_LISTVIEW_NONE"], [3, "disabled", "config"], ["labelKey", "LBL_LISTVIEW_SELECTED_OBJECTS"]], template: function BulkActionMenuComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "button", 2)(3, "label", 3)(4, "input", 4);
            i0.ɵɵlistener("change", function BulkActionMenuComponent_Template_input_change_4_listener() { return ctx.toggleSelection(ctx.status); });
            i0.ɵɵelementEnd();
            i0.ɵɵelement(5, "span", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "span", 6);
            i0.ɵɵtemplate(7, BulkActionMenuComponent_ng_container_7_Template, 2, 0, "ng-container", 7);
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 8)(10, "a", 9);
            i0.ɵɵlistener("click", function BulkActionMenuComponent_Template_a_click_10_listener() { return ctx.selectAll(); });
            i0.ɵɵelement(11, "scrm-label", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "a", 11);
            i0.ɵɵlistener("click", function BulkActionMenuComponent_Template_a_click_12_listener() { return ctx.selectPage(); });
            i0.ɵɵelement(13, "scrm-label", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "a", 13);
            i0.ɵɵlistener("click", function BulkActionMenuComponent_Template_a_click_14_listener() { return ctx.deselectAll(); });
            i0.ɵɵelement(15, "scrm-label", 14);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelement(16, "scrm-dropdown-button", 15);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("checked", ctx.status === "ALL")("indeterminate", ctx.status === "SOME" || ctx.status === "PAGE");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.count > 0);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx.count > 0 ? ctx.count : "", " ");
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("disabled", ctx.count < 1)("config", ctx.dropdownConfig);
        } }, dependencies: [i2.NgIf, i3.NgbDropdown, i3.NgbDropdownToggle, i3.NgbDropdownMenu, i4.DropdownButtonComponent, i5.LabelComponent], encapsulation: 2 });
}
export { BulkActionMenuComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BulkActionMenuComponent, [{
        type: Component,
        args: [{ selector: 'scrm-bulk-action-menu', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div class=\"bulk-action float-left\">\n    <div ngbDropdown class=\"dropdown select-action-group float-left\">\n        <button class=\"bulk-action-button dropdown-toggle btn btn-sm\"\n                type=\"button\"\n                ngbDropdownToggle\n                aria-haspopup=\"true\"\n                aria-expanded=\"false\"\n                aria-hidden=\"true\"\n                aria-label=\"Select Action Menu\">\n            <label class=\"checkbox-container\">\n                <input type=\"checkbox\"\n                       [checked]=\"status === 'ALL'\"\n                       [indeterminate]=\"status === 'SOME' || status === 'PAGE'\"\n                       (change)=\"toggleSelection(status)\"\n                       aria-hidden=\"true\">\n                <span class=\"checkmark\"></span>\n            </label>\n            <span class=\"bulk-action-selected-number\">\n                <ng-container *ngIf=\"count > 0\"> <scrm-label labelKey=\"LBL_LISTVIEW_SELECTED_OBJECTS\"></scrm-label></ng-container> {{count > 0 ? count : ''}}\n            </span>\n        </button>\n        <div class=\"dropdown-menu\"\n             ngbDropdownMenu\n             aria-hidden=\"true\">\n            <a class=\"dropdown-item select-all\" (click)=\"selectAll()\">\n                <scrm-label labelKey=\"LBL_LISTVIEW_OPTION_ENTIRE\"></scrm-label>\n            </a>\n            <a class=\"dropdown-item select-page\" (click)=\"selectPage()\">\n                <scrm-label labelKey=\"LBL_LISTVIEW_OPTION_CURRENT\"></scrm-label>\n            </a>\n            <a class=\"dropdown-item deselect-all\" (click)=\"deselectAll()\">\n                <scrm-label labelKey=\"LBL_LISTVIEW_NONE\"></scrm-label>\n            </a>\n        </div>\n    </div>\n    <scrm-dropdown-button [disabled]=\"count < 1\"\n                          [config]=\"dropdownConfig\">\n    </scrm-dropdown-button>\n</div>\n" }]
    }], function () { return [{ type: i1.LanguageStore }]; }, { selectionSource: [{
            type: Input
        }], actionSource: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVsay1hY3Rpb24tbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9idWxrLWFjdGlvbi1tZW51L2J1bGstYWN0aW9uLW1lbnUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvYnVsay1hY3Rpb24tbWVudS9idWxrLWFjdGlvbi1tZW51LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFFbEUsT0FBTyxFQUErRCxlQUFlLEVBQUMsTUFBTSxRQUFRLENBQUM7Ozs7Ozs7O0lDaUJyRiw2QkFBZ0M7SUFBQyxpQ0FBa0U7SUFBQSwwQkFBZTs7QURGbEksTUFJYSx1QkFBdUI7SUFVVjtJQVJiLGVBQWUsQ0FBc0I7SUFDckMsWUFBWSxDQUF1QjtJQUU1QyxjQUFjLENBQTBCO0lBQ3hDLElBQUksR0FBbUIsRUFBRSxDQUFDO0lBQzFCLE1BQU0sR0FBb0IsZUFBZSxDQUFDLElBQUksQ0FBQztJQUMvQyxLQUFLLEdBQVcsQ0FBQyxDQUFDO0lBRWxCLFlBQXNCLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQ2xELENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUMsSUFB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LGdHQUFTLGdCQUFZLElBQUM7WUFDdkQsa0NBQWdFO1lBQ3BFLGlCQUFJO1lBQ0osOEJBQThEO1lBQXhCLGdHQUFTLGlCQUFhLElBQUM7WUFDekQsa0NBQXNEO1lBQzFELGlCQUFJLEVBQUEsRUFBQTtZQUdaLDRDQUV1QjtZQUMzQixpQkFBTTs7WUEzQmlCLGVBQTRCO1lBQTVCLDhDQUE0QixpRUFBQTtZQU9wQixlQUFlO1lBQWYsb0NBQWU7WUFBcUYsZUFDdkg7WUFEdUgsK0RBQ3ZIO1lBZ0JjLGVBQXNCO1lBQXRCLHdDQUFzQiw4QkFBQTs7O1NEZm5DLHVCQUF1Qjt1RkFBdkIsdUJBQXVCO2NBSm5DLFNBQVM7MkJBQ0ksdUJBQXVCO2dFQUt4QixlQUFlO2tCQUF2QixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0J1bGtBY3Rpb25zTWFwLCBEcm9wZG93bkJ1dHRvbkludGVyZmFjZSwgU2VsZWN0aW9uRGF0YVNvdXJjZSwgU2VsZWN0aW9uU3RhdHVzfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnVsa0FjdGlvbkRhdGFTb3VyY2Uge1xuICAgIGdldEJ1bGtBY3Rpb25zKCk6IE9ic2VydmFibGU8QnVsa0FjdGlvbnNNYXA+O1xuXG4gICAgZXhlY3V0ZUJ1bGtBY3Rpb24oYWN0aW9uOiBzdHJpbmcpOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJ1bGtBY3Rpb25WaWV3TW9kZWwge1xuICAgIHN0YXR1czogU2VsZWN0aW9uU3RhdHVzO1xuICAgIGNvdW50OiBudW1iZXI7XG4gICAgYWN0aW9uczogQnVsa0FjdGlvbnNNYXA7XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1idWxrLWFjdGlvbi1tZW51JyxcbiAgICB0ZW1wbGF0ZVVybDogJ2J1bGstYWN0aW9uLW1lbnUuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEJ1bGtBY3Rpb25NZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KCkgc2VsZWN0aW9uU291cmNlOiBTZWxlY3Rpb25EYXRhU291cmNlO1xuICAgIEBJbnB1dCgpIGFjdGlvblNvdXJjZTogQnVsa0FjdGlvbkRhdGFTb3VyY2U7XG5cbiAgICBkcm9wZG93bkNvbmZpZzogRHJvcGRvd25CdXR0b25JbnRlcmZhY2U7XG4gICAgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgICBzdGF0dXM6IFNlbGVjdGlvblN0YXR1cyA9IFNlbGVjdGlvblN0YXR1cy5OT05FO1xuICAgIGNvdW50OiBudW1iZXIgPSAwO1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGxhbmd1YWdlU3RvcmU6IExhbmd1YWdlU3RvcmUpIHtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgICAgICAgdGhpcy5zdWJzID0gW107XG4gICAgICAgIHRoaXMuY291bnQgPSAwO1xuICAgICAgICB0aGlzLnN0YXR1cyA9IFNlbGVjdGlvblN0YXR1cy5OT05FO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN1YnMgPSBbXTtcblxuICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLnNlbGVjdGlvblNvdXJjZS5nZXRTZWxlY3Rpb25TdGF0dXMoKS5zdWJzY3JpYmUoc3RhdHVzID0+IHRoaXMuc3RhdHVzID0gc3RhdHVzKSk7XG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMuc2VsZWN0aW9uU291cmNlLmdldFNlbGVjdGVkQ291bnQoKS5zdWJzY3JpYmUoY291bnQgPT4gdGhpcy5jb3VudCA9IGNvdW50KSk7XG5cbiAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5hY3Rpb25Tb3VyY2UuZ2V0QnVsa0FjdGlvbnMoKS5zdWJzY3JpYmUoYWN0aW9ucyA9PiB7XG4gICAgICAgICAgICBjb25zdCBkcm9wZG93bkNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBsYWJlbEtleTogJ0xCTF9CVUxLX0FDVElPTl9CVVRUT05fTEFCRUwnLFxuICAgICAgICAgICAgICAgIGtsYXNzOiBbJ2J1bGstYWN0aW9uLWJ1dHRvbicsICdidG4nLCAnYnRuLXNtJ10sXG4gICAgICAgICAgICAgICAgd3JhcHBlcktsYXNzOiBbJ2J1bGstYWN0aW9uLWdyb3VwJywgJ2Zsb2F0LWxlZnQnXSxcbiAgICAgICAgICAgICAgICBpdGVtczogW11cbiAgICAgICAgICAgIH0gYXMgRHJvcGRvd25CdXR0b25JbnRlcmZhY2U7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGFjdGlvbnMpLmZvckVhY2goYWN0aW9uS2V5ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhY3Rpb24gPSBhY3Rpb25zW2FjdGlvbktleV07XG4gICAgICAgICAgICAgICAgZHJvcGRvd25Db25maWcuaXRlbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsS2V5OiBhY3Rpb24ubGFiZWxLZXkgPz8gJycsXG4gICAgICAgICAgICAgICAgICAgIGtsYXNzOiBbYCR7YWN0aW9uS2V5fS1idWxrLWFjdGlvbmBdLFxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvblNvdXJjZS5leGVjdXRlQnVsa0FjdGlvbihhY3Rpb24ua2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25Db25maWcgPSBkcm9wZG93bkNvbmZpZztcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIHNlbGVjdFBhZ2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uU291cmNlLnVwZGF0ZVNlbGVjdGlvbihTZWxlY3Rpb25TdGF0dXMuUEFHRSk7XG4gICAgfVxuXG4gICAgc2VsZWN0QWxsKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNlbGVjdGlvblNvdXJjZS51cGRhdGVTZWxlY3Rpb24oU2VsZWN0aW9uU3RhdHVzLkFMTCk7XG4gICAgfVxuXG4gICAgZGVzZWxlY3RBbGwoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uU291cmNlLnVwZGF0ZVNlbGVjdGlvbihTZWxlY3Rpb25TdGF0dXMuTk9ORSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlU2VsZWN0aW9uKHN0YXR1czogU2VsZWN0aW9uU3RhdHVzKTogdm9pZCB7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IFNlbGVjdGlvblN0YXR1cy5BTEwpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uU291cmNlLnVwZGF0ZVNlbGVjdGlvbihTZWxlY3Rpb25TdGF0dXMuTk9ORSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNlbGVjdGlvblNvdXJjZS51cGRhdGVTZWxlY3Rpb24oU2VsZWN0aW9uU3RhdHVzLkFMTCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IFNlbGVjdGlvblN0YXR1cyA9IFNlbGVjdGlvblN0YXR1cztcbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxkaXYgY2xhc3M9XCJidWxrLWFjdGlvbiBmbG9hdC1sZWZ0XCI+XG4gICAgPGRpdiBuZ2JEcm9wZG93biBjbGFzcz1cImRyb3Bkb3duIHNlbGVjdC1hY3Rpb24tZ3JvdXAgZmxvYXQtbGVmdFwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnVsay1hY3Rpb24tYnV0dG9uIGRyb3Bkb3duLXRvZ2dsZSBidG4gYnRuLXNtXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBuZ2JEcm9wZG93blRvZ2dsZVxuICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNlbGVjdCBBY3Rpb24gTWVudVwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY2hlY2tib3gtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgIFtjaGVja2VkXT1cInN0YXR1cyA9PT0gJ0FMTCdcIlxuICAgICAgICAgICAgICAgICAgICAgICBbaW5kZXRlcm1pbmF0ZV09XCJzdGF0dXMgPT09ICdTT01FJyB8fCBzdGF0dXMgPT09ICdQQUdFJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwidG9nZ2xlU2VsZWN0aW9uKHN0YXR1cylcIlxuICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNoZWNrbWFya1wiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ1bGstYWN0aW9uLXNlbGVjdGVkLW51bWJlclwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb3VudCA+IDBcIj4gPHNjcm0tbGFiZWwgbGFiZWxLZXk9XCJMQkxfTElTVFZJRVdfU0VMRUNURURfT0JKRUNUU1wiPjwvc2NybS1sYWJlbD48L25nLWNvbnRhaW5lcj4ge3tjb3VudCA+IDAgPyBjb3VudCA6ICcnfX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51XCJcbiAgICAgICAgICAgICBuZ2JEcm9wZG93bk1lbnVcbiAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbSBzZWxlY3QtYWxsXCIgKGNsaWNrKT1cInNlbGVjdEFsbCgpXCI+XG4gICAgICAgICAgICAgICAgPHNjcm0tbGFiZWwgbGFiZWxLZXk9XCJMQkxfTElTVFZJRVdfT1BUSU9OX0VOVElSRVwiPjwvc2NybS1sYWJlbD5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbSBzZWxlY3QtcGFnZVwiIChjbGljayk9XCJzZWxlY3RQYWdlKClcIj5cbiAgICAgICAgICAgICAgICA8c2NybS1sYWJlbCBsYWJlbEtleT1cIkxCTF9MSVNUVklFV19PUFRJT05fQ1VSUkVOVFwiPjwvc2NybS1sYWJlbD5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbSBkZXNlbGVjdC1hbGxcIiAoY2xpY2spPVwiZGVzZWxlY3RBbGwoKVwiPlxuICAgICAgICAgICAgICAgIDxzY3JtLWxhYmVsIGxhYmVsS2V5PVwiTEJMX0xJU1RWSUVXX05PTkVcIj48L3Njcm0tbGFiZWw+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzY3JtLWRyb3Bkb3duLWJ1dHRvbiBbZGlzYWJsZWRdPVwiY291bnQgPCAxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbmZpZ109XCJkcm9wZG93bkNvbmZpZ1wiPlxuICAgIDwvc2NybS1kcm9wZG93bi1idXR0b24+XG48L2Rpdj5cbiJdfQ==