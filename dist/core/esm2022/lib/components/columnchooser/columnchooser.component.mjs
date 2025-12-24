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
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
import * as i1 from "../../store/app-state/app-state.store";
import * as i2 from "../../store/language/language.store";
import * as i3 from "@ng-bootstrap/ng-bootstrap";
import * as i4 from "@angular/common";
import * as i5 from "@angular/cdk/drag-drop";
import * as i6 from "../modal/components/modal/modal.component";
import * as i7 from "../label/label.component";
import * as i8 from "../button/button.component";
function ColumnChooserComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.getColumnLabel(item_r4.label), " ");
} }
function ColumnChooserComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.getColumnLabel(item_r5.label), " ");
} }
const _c0 = function (a0) { return [a0]; };
class ColumnChooserComponent {
    appState;
    languageStore;
    modal;
    displayed;
    hidden;
    titleKey = 'LBL_COLUMN_SELECTOR_MODAL_TITLE';
    closeButtonIcon;
    closeButton;
    saveButton;
    constructor(appState, languageStore, modal) {
        this.appState = appState;
        this.languageStore = languageStore;
        this.modal = modal;
    }
    drop(event) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }
    getHeaderLabel() {
        return this.languageStore.getFieldLabel('LBL_COLUMN_SELECTOR_MODAL_TITLE');
    }
    getColumnLabel(label) {
        return this.languageStore.getFieldLabel(label, this.appState.getModule());
    }
    ngOnInit() {
        this.closeButtonIcon = {
            klass: ['btn', 'btn-outline-light', 'btn-sm'],
            onClick: () => {
                this.modal.close({
                    type: 'close-button'
                });
            }
        };
        this.closeButton = {
            klass: ['btn', 'modal-button-cancel'],
            labelKey: 'LBL_COLUMN_SELECTOR_CLOSE_BUTTON',
            onClick: () => {
                this.modal.close({
                    type: 'close-button'
                });
            }
        };
        this.saveButton = {
            klass: ['btn', 'modal-button-save'],
            labelKey: 'LBL_COLUMN_SELECTOR_SAVE_BUTTON',
            onClick: () => {
                this.modal.close({
                    type: 'close-button',
                    displayed: this.displayed,
                    hidden: this.hidden
                });
            }
        };
    }
    static ɵfac = function ColumnChooserComponent_Factory(t) { return new (t || ColumnChooserComponent)(i0.ɵɵdirectiveInject(i1.AppStateStore), i0.ɵɵdirectiveInject(i2.LanguageStore), i0.ɵɵdirectiveInject(i3.NgbActiveModal)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ColumnChooserComponent, selectors: [["scrm-columnchooser"]], inputs: { displayed: "displayed", hidden: "hidden" }, decls: 19, vars: 16, consts: [["klass", "column-chooser-modal", 3, "closable", "close", "title", "titleKey"], ["modal-body", ""], [1, "d-flex", "bd-highlight"], [1, "p-2", "flex-fill", "bd-highlight", "column-chooser-container"], [1, "column-chooser-title"], ["labelKey", "LBL_COLUMN_SELECTOR_DISPLAYED_COLS"], ["cdkDropList", "", 1, "column-chooser-list", 3, "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped"], ["displayedList", "cdkDropList"], ["class", "column-chooser-item column-displayed", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["labelKey", "LBL_COLUMN_SELECTOR_HIDDEN_COLS"], ["hiddenList", "cdkDropList"], ["class", "column-chooser-item column-hidden", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["modal-footer", ""], [1, "modal-buttons"], ["data-dismiss", "modal", 3, "config"], [3, "config"], ["cdkDrag", "", 1, "column-chooser-item", "column-displayed"], ["cdkDrag", "", 1, "column-chooser-item", "column-hidden"]], template: function ColumnChooserComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "scrm-modal", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
            i0.ɵɵelement(5, "scrm-label", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 6, 7);
            i0.ɵɵlistener("cdkDropListDropped", function ColumnChooserComponent_Template_div_cdkDropListDropped_6_listener($event) { return ctx.drop($event); });
            i0.ɵɵtemplate(8, ColumnChooserComponent_div_8_Template, 2, 1, "div", 8);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 3)(10, "h2", 4);
            i0.ɵɵelement(11, "scrm-label", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "div", 6, 10);
            i0.ɵɵlistener("cdkDropListDropped", function ColumnChooserComponent_Template_div_cdkDropListDropped_12_listener($event) { return ctx.drop($event); });
            i0.ɵɵtemplate(14, ColumnChooserComponent_div_14_Template, 2, 1, "div", 11);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(15, "div", 12)(16, "div", 13);
            i0.ɵɵelement(17, "scrm-button", 14)(18, "scrm-button", 15);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            const _r0 = i0.ɵɵreference(7);
            const _r2 = i0.ɵɵreference(13);
            i0.ɵɵproperty("closable", true)("close", ctx.closeButtonIcon)("title", ctx.getHeaderLabel())("titleKey", ctx.titleKey);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("cdkDropListData", ctx.displayed)("cdkDropListConnectedTo", i0.ɵɵpureFunction1(12, _c0, _r2));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.displayed);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("cdkDropListData", ctx.hidden)("cdkDropListConnectedTo", i0.ɵɵpureFunction1(14, _c0, _r0));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.hidden);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("config", ctx.closeButton);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("config", ctx.saveButton);
        } }, dependencies: [i4.NgForOf, i5.CdkDropList, i5.CdkDrag, i6.ModalComponent, i7.LabelComponent, i8.ButtonComponent], encapsulation: 2 });
}
export { ColumnChooserComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ColumnChooserComponent, [{
        type: Component,
        args: [{ selector: 'scrm-columnchooser', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n\n<scrm-modal\n    [closable]=\"true\"\n    [close]=\"closeButtonIcon\"\n    [title]=\"getHeaderLabel()\"\n    [titleKey]=\"titleKey\"\n    klass=\"column-chooser-modal\">\n\n    <div modal-body>\n\n        <div class=\"d-flex bd-highlight\">\n            <div class=\"p-2 flex-fill bd-highlight column-chooser-container\">\n                <h2 class=\"column-chooser-title\">\n                    <scrm-label labelKey=\"LBL_COLUMN_SELECTOR_DISPLAYED_COLS\"></scrm-label>\n                </h2>\n\n                <div\n                    cdkDropList\n                    #displayedList=\"cdkDropList\"\n                    [cdkDropListData]=\"displayed\"\n                    [cdkDropListConnectedTo]=\"[hiddenList]\"\n                    class=\"column-chooser-list\"\n                    (cdkDropListDropped)=\"drop($event)\">\n                    <div class=\"column-chooser-item column-displayed\" *ngFor=\"let item of displayed\"\n                         cdkDrag>\n                        {{getColumnLabel(item.label)}}\n                    </div>\n                </div>\n            </div>\n            <div class=\"p-2 flex-fill bd-highlight column-chooser-container\">\n                <h2 class=\"column-chooser-title\">\n                    <scrm-label labelKey=\"LBL_COLUMN_SELECTOR_HIDDEN_COLS\"></scrm-label>\n                </h2>\n\n                <div\n                    cdkDropList\n                    #hiddenList=\"cdkDropList\"\n                    [cdkDropListData]=\"hidden\"\n                    [cdkDropListConnectedTo]=\"[displayedList]\"\n                    class=\"column-chooser-list\"\n                    (cdkDropListDropped)=\"drop($event)\">\n                    <div class=\"column-chooser-item column-hidden\" *ngFor=\"let item of hidden\" cdkDrag>\n                        {{getColumnLabel(item.label)}}\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div modal-footer>\n        <div class=\"modal-buttons\">\n            <scrm-button data-dismiss=\"modal\" [config]=\"closeButton\"></scrm-button>\n            <scrm-button [config]=\"saveButton\"></scrm-button>\n        </div>\n    </div>\n\n</scrm-modal>\n" }]
    }], function () { return [{ type: i1.AppStateStore }, { type: i2.LanguageStore }, { type: i3.NgbActiveModal }]; }, { displayed: [{
            type: Input
        }], hidden: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uY2hvb3Nlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29tcG9uZW50cy9jb2x1bW5jaG9vc2VyL2NvbHVtbmNob29zZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvY29sdW1uY2hvb3Nlci9jb2x1bW5jaG9vc2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQWMsZUFBZSxFQUFFLGlCQUFpQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7O0lDdUJuRSwrQkFDYTtJQUNULFlBQ0o7SUFBQSxpQkFBTTs7OztJQURGLGVBQ0o7SUFESSxxRUFDSjs7O0lBZUEsK0JBQW1GO0lBQy9FLFlBQ0o7SUFBQSxpQkFBTTs7OztJQURGLGVBQ0o7SUFESSxxRUFDSjs7O0FEckNwQixNQUthLHNCQUFzQjtJQVVqQjtJQUNBO0lBQ0g7SUFYRixTQUFTLENBQXFCO0lBQzlCLE1BQU0sQ0FBcUI7SUFFcEMsUUFBUSxHQUFHLGlDQUFpQyxDQUFDO0lBQzdDLGVBQWUsQ0FBa0I7SUFDakMsV0FBVyxDQUFrQjtJQUM3QixVQUFVLENBQWtCO0lBRTVCLFlBQ2MsUUFBdUIsRUFDdkIsYUFBNEIsRUFDL0IsS0FBcUI7UUFGbEIsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQUN2QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUMvQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtJQUNoQyxDQUFDO0lBRUQsSUFBSSxDQUFDLEtBQTZCO1FBQzlCLElBQUksS0FBSyxDQUFDLGlCQUFpQixLQUFLLEtBQUssQ0FB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XG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Nka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXksIHRyYW5zZmVyQXJyYXlJdGVtfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcbmltcG9ydCB7TmdiQWN0aXZlTW9kYWx9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7QnV0dG9uSW50ZXJmYWNlLCBDb2x1bW5EZWZpbml0aW9uLCBNb2RhbENsb3NlRmVlZEJhY2t9IGZyb20gXCJjb21tb25cIjtcbmltcG9ydCB7QXBwU3RhdGVTdG9yZX0gZnJvbSBcIi4uLy4uL3N0b3JlL2FwcC1zdGF0ZS9hcHAtc3RhdGUuc3RvcmVcIjtcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSBcIi4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1jb2x1bW5jaG9vc2VyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vY29sdW1uY2hvb3Nlci5jb21wb25lbnQuaHRtbCcsXG59KVxuXG5leHBvcnQgY2xhc3MgQ29sdW1uQ2hvb3NlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQElucHV0KCkgZGlzcGxheWVkOiBDb2x1bW5EZWZpbml0aW9uW107XG4gICAgQElucHV0KCkgaGlkZGVuOiBDb2x1bW5EZWZpbml0aW9uW107XG5cbiAgICB0aXRsZUtleSA9ICdMQkxfQ09MVU1OX1NFTEVDVE9SX01PREFMX1RJVExFJztcbiAgICBjbG9zZUJ1dHRvbkljb246IEJ1dHRvbkludGVyZmFjZTtcbiAgICBjbG9zZUJ1dHRvbjogQnV0dG9uSW50ZXJmYWNlO1xuICAgIHNhdmVCdXR0b246IEJ1dHRvbkludGVyZmFjZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgYXBwU3RhdGU6IEFwcFN0YXRlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBsYW5ndWFnZVN0b3JlOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwdWJsaWMgbW9kYWw6IE5nYkFjdGl2ZU1vZGFsKSB7XG4gICAgfVxuXG4gICAgZHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8e31bXSwgYW55Pik6IHZvaWQge1xuICAgICAgICBpZiAoZXZlbnQucHJldmlvdXNDb250YWluZXIgPT09IGV2ZW50LmNvbnRhaW5lcikge1xuICAgICAgICAgICAgbW92ZUl0ZW1JbkFycmF5KGV2ZW50LmNvbnRhaW5lci5kYXRhLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJhbnNmZXJBcnJheUl0ZW0oZXZlbnQucHJldmlvdXNDb250YWluZXIuZGF0YSxcbiAgICAgICAgICAgICAgICBldmVudC5jb250YWluZXIuZGF0YSxcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2aW91c0luZGV4LFxuICAgICAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRJbmRleCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRIZWFkZXJMYWJlbCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5sYW5ndWFnZVN0b3JlLmdldEZpZWxkTGFiZWwoJ0xCTF9DT0xVTU5fU0VMRUNUT1JfTU9EQUxfVElUTEUnKTtcbiAgICB9XG5cbiAgICBnZXRDb2x1bW5MYWJlbChsYWJlbDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGFuZ3VhZ2VTdG9yZS5nZXRGaWVsZExhYmVsKGxhYmVsLCB0aGlzLmFwcFN0YXRlLmdldE1vZHVsZSgpKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgICAgICB0aGlzLmNsb3NlQnV0dG9uSWNvbiA9IHtcbiAgICAgICAgICAgIGtsYXNzOiBbJ2J0bicsICdidG4tb3V0bGluZS1saWdodCcsICdidG4tc20nXSxcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsLmNsb3NlKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Nsb3NlLWJ1dHRvbidcbiAgICAgICAgICAgICAgICB9IGFzIE1vZGFsQ2xvc2VGZWVkQmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gYXMgQnV0dG9uSW50ZXJmYWNlO1xuXG4gICAgICAgIHRoaXMuY2xvc2VCdXR0b24gPSB7XG4gICAgICAgICAgICBrbGFzczogWydidG4nLCAnbW9kYWwtYnV0dG9uLWNhbmNlbCddLFxuICAgICAgICAgICAgbGFiZWxLZXk6ICdMQkxfQ09MVU1OX1NFTEVDVE9SX0NMT1NFX0JVVFRPTicsXG4gICAgICAgICAgICBvbkNsaWNrOiAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbC5jbG9zZSh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdjbG9zZS1idXR0b24nXG4gICAgICAgICAgICAgICAgfSBhcyBNb2RhbENsb3NlRmVlZEJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGFzIEJ1dHRvbkludGVyZmFjZTtcblxuICAgICAgICB0aGlzLnNhdmVCdXR0b24gPSB7XG4gICAgICAgICAgICBrbGFzczogWydidG4nLCAnbW9kYWwtYnV0dG9uLXNhdmUnXSxcbiAgICAgICAgICAgIGxhYmVsS2V5OiAnTEJMX0NPTFVNTl9TRUxFQ1RPUl9TQVZFX0JVVFRPTicsXG4gICAgICAgICAgICBvbkNsaWNrOiAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbC5jbG9zZSh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdjbG9zZS1idXR0b24nLFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5ZWQ6IHRoaXMuZGlzcGxheWVkLFxuICAgICAgICAgICAgICAgICAgICBoaWRkZW46IHRoaXMuaGlkZGVuXG4gICAgICAgICAgICAgICAgfSBhcyBNb2RhbENsb3NlRmVlZEJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGFzIEJ1dHRvbkludGVyZmFjZTtcblxuICAgIH1cblxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuXG48c2NybS1tb2RhbFxuICAgIFtjbG9zYWJsZV09XCJ0cnVlXCJcbiAgICBbY2xvc2VdPVwiY2xvc2VCdXR0b25JY29uXCJcbiAgICBbdGl0bGVdPVwiZ2V0SGVhZGVyTGFiZWwoKVwiXG4gICAgW3RpdGxlS2V5XT1cInRpdGxlS2V5XCJcbiAgICBrbGFzcz1cImNvbHVtbi1jaG9vc2VyLW1vZGFsXCI+XG5cbiAgICA8ZGl2IG1vZGFsLWJvZHk+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBiZC1oaWdobGlnaHRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLTIgZmxleC1maWxsIGJkLWhpZ2hsaWdodCBjb2x1bW4tY2hvb3Nlci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJjb2x1bW4tY2hvb3Nlci10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c2NybS1sYWJlbCBsYWJlbEtleT1cIkxCTF9DT0xVTU5fU0VMRUNUT1JfRElTUExBWUVEX0NPTFNcIj48L3Njcm0tbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9oMj5cblxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2RrRHJvcExpc3RcbiAgICAgICAgICAgICAgICAgICAgI2Rpc3BsYXllZExpc3Q9XCJjZGtEcm9wTGlzdFwiXG4gICAgICAgICAgICAgICAgICAgIFtjZGtEcm9wTGlzdERhdGFdPVwiZGlzcGxheWVkXCJcbiAgICAgICAgICAgICAgICAgICAgW2Nka0Ryb3BMaXN0Q29ubmVjdGVkVG9dPVwiW2hpZGRlbkxpc3RdXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjb2x1bW4tY2hvb3Nlci1saXN0XCJcbiAgICAgICAgICAgICAgICAgICAgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbi1jaG9vc2VyLWl0ZW0gY29sdW1uLWRpc3BsYXllZFwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRpc3BsYXllZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2RrRHJhZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7Z2V0Q29sdW1uTGFiZWwoaXRlbS5sYWJlbCl9fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtMiBmbGV4LWZpbGwgYmQtaGlnaGxpZ2h0IGNvbHVtbi1jaG9vc2VyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImNvbHVtbi1jaG9vc2VyLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzY3JtLWxhYmVsIGxhYmVsS2V5PVwiTEJMX0NPTFVNTl9TRUxFQ1RPUl9ISURERU5fQ09MU1wiPjwvc2NybS1sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjZGtEcm9wTGlzdFxuICAgICAgICAgICAgICAgICAgICAjaGlkZGVuTGlzdD1cImNka0Ryb3BMaXN0XCJcbiAgICAgICAgICAgICAgICAgICAgW2Nka0Ryb3BMaXN0RGF0YV09XCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICBbY2RrRHJvcExpc3RDb25uZWN0ZWRUb109XCJbZGlzcGxheWVkTGlzdF1cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNvbHVtbi1jaG9vc2VyLWxpc3RcIlxuICAgICAgICAgICAgICAgICAgICAoY2RrRHJvcExpc3REcm9wcGVkKT1cImRyb3AoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLWNob29zZXItaXRlbSBjb2x1bW4taGlkZGVuXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaGlkZGVuXCIgY2RrRHJhZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7Z2V0Q29sdW1uTGFiZWwoaXRlbS5sYWJlbCl9fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgbW9kYWwtZm9vdGVyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYnV0dG9uc1wiPlxuICAgICAgICAgICAgPHNjcm0tYnV0dG9uIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgW2NvbmZpZ109XCJjbG9zZUJ1dHRvblwiPjwvc2NybS1idXR0b24+XG4gICAgICAgICAgICA8c2NybS1idXR0b24gW2NvbmZpZ109XCJzYXZlQnV0dG9uXCI+PC9zY3JtLWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbjwvc2NybS1tb2RhbD5cbiJdfQ==