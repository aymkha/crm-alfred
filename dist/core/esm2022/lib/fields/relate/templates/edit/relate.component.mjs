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
import { Component, ViewChild } from '@angular/core';
import { RecordListModalComponent } from '../../../../containers/record-list-modal/components/record-list-modal/record-list-modal.component';
import { BaseRelateComponent } from '../../../base/base-relate.component';
import { RelateService } from '../../../../services/record/relate/relate.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/language/language.store";
import * as i2 from "../../../../services/formatters/data-type.formatter.service";
import * as i3 from "../../../../services/record/relate/relate.service";
import * as i4 from "../../../../services/navigation/module-name-mapper/module-name-mapper.service";
import * as i5 from "@ng-bootstrap/ng-bootstrap";
import * as i6 from "../../../field-logic/field-logic.manager";
import * as i7 from "../../../field-logic-display/field-logic-display.manager";
import * as i8 from "@angular/common";
import * as i9 from "ngx-chips";
import * as i10 from "../../../../components/label/label.component";
import * as i11 from "@angular/forms";
import * as i12 from "../../../../components/button/button.component";
const _c0 = ["tag"];
function RelateEditFieldComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 3)(2, "tag-input", 4, 5);
    i0.ɵɵlistener("keyup.enter", function RelateEditFieldComponent_ng_container_1_Template_tag_input_keyup_enter_2_listener() { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.selectFirstElement()); })("onAdd", function RelateEditFieldComponent_ng_container_1_Template_tag_input_onAdd_2_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.onAdd($event)); })("onBlur", function RelateEditFieldComponent_ng_container_1_Template_tag_input_onBlur_2_listener() { i0.ɵɵrestoreView(_r4); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.resetStatus()); })("onRemove", function RelateEditFieldComponent_ng_container_1_Template_tag_input_onRemove_2_listener() { i0.ɵɵrestoreView(_r4); const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.onRemove()); })("ngModelChange", function RelateEditFieldComponent_ng_container_1_Template_tag_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.selectedValues = $event); });
    i0.ɵɵelement(4, "tag-input-dropdown", 6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵelement(6, "scrm-button", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(ctx_r0.getInvalidClass());
    i0.ɵɵproperty("ngModel", ctx_r0.selectedValues)("clearOnBlur", true)("displayBy", ctx_r0.getRelateFieldName())("inputClass", ctx_r0.getInvalidClass())("onTextChangeDebounce", 500)("onlyFromAutocomplete", true)("placeholder", ctx_r0.getPlaceholderLabel())("secondaryPlaceholder", ctx_r0.getPlaceholderLabel());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("autocompleteObservable", ctx_r0.search)("displayBy", ctx_r0.getRelateFieldName())("keepOpen", false)("showDropdownIfEmpty", true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("config", ctx_r0.selectButton);
} }
function RelateEditFieldComponent_small_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 9);
    i0.ɵɵelement(1, "scrm-label", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("labelKey", ctx_r1.getMessage())("module", ctx_r1.module);
} }
class RelateEditFieldComponent extends BaseRelateComponent {
    languages;
    typeFormatter;
    relateService;
    moduleNameMapper;
    modalService;
    logic;
    logicDisplay;
    tag;
    selectButton;
    idField;
    /**
     * Constructor
     *
     * @param {object} languages service
     * @param {object} typeFormatter service
     * @param {object} relateService service
     * @param {object} moduleNameMapper service
     * @param {object} modalService service
     * @param {object} logic
     */
    constructor(languages, typeFormatter, relateService, moduleNameMapper, modalService, logic, logicDisplay) {
        super(languages, typeFormatter, relateService, moduleNameMapper, logic, logicDisplay);
        this.languages = languages;
        this.typeFormatter = typeFormatter;
        this.relateService = relateService;
        this.moduleNameMapper = moduleNameMapper;
        this.modalService = modalService;
        this.logic = logic;
        this.logicDisplay = logicDisplay;
        this.selectButton = {
            klass: ['btn', 'btn-sm', 'btn-outline-secondary', 'select-button', 'm-0'],
            onClick: () => {
                this.showSelectModal();
            },
            icon: 'cursor'
        };
    }
    /**
     * On init handler
     */
    ngOnInit() {
        super.ngOnInit();
        this.init();
    }
    init() {
        super.init();
        this.initValue();
        const idFieldName = this.getRelateIdField();
        if (idFieldName && this.record && this.record.fields && this.record.fields[idFieldName]) {
            this.idField = this.record.fields[idFieldName];
        }
    }
    initValue() {
        if (!this.field.valueObject) {
            this.selectedValues = [];
            this.field.formControl.setValue('');
            return;
        }
        if (!this.field.valueObject.id) {
            this.selectedValues = [];
            this.field.formControl.setValue('');
            return;
        }
        this.selectedValues = [];
        this.selectedValues.push(this.field.valueObject);
    }
    /**
     * Handle newly added item
     *
     * @param {object} item added
     */
    onAdd(item) {
        if (item) {
            const relateName = this.getRelateFieldName();
            this.setValue(item.id, item[relateName]);
            return;
        }
        this.setValue('', '');
        this.selectedValues = [];
        return;
    }
    /**
     * Handle item removal
     */
    onRemove() {
        this.setValue('', '');
        this.selectedValues = [];
        setTimeout(() => {
            this.tag.focus(true, true);
        }, 200);
    }
    /**
     * Set value on field
     *
     * @param {string} id to set
     * @param {string} relateValue to set
     */
    setValue(id, relateValue) {
        const relate = this.buildRelate(id, relateValue);
        this.field.value = relateValue;
        this.field.valueObject = relate;
        this.field.formControl.setValue(relateValue);
        this.field.formControl.markAsDirty();
        if (this.idField) {
            this.idField.value = id;
            this.idField.formControl.setValue(id);
            this.idField.formControl.markAsDirty();
        }
    }
    /**
     * Show record selection modal
     */
    showSelectModal() {
        const modal = this.modalService.open(RecordListModalComponent, { size: 'xl', scrollable: true });
        modal.componentInstance.module = this.getRelatedModule();
        modal.result.then((data) => {
            if (!data || !data.selection || !data.selection.selected) {
                return;
            }
            const record = this.getSelectedRecord(data);
            this.setItem(record);
        });
    }
    /**
     * Get Selected Record
     *
     * @param {object} data RecordListModalResult
     * @returns {object} Record
     */
    getSelectedRecord(data) {
        let id = '';
        Object.keys(data.selection.selected).some(selected => {
            id = selected;
            return true;
        });
        let record = null;
        data.records.some(rec => {
            if (rec && rec.id === id) {
                record = rec;
                return true;
            }
        });
        return record;
    }
    /**
     * Set the record as the selected item
     *
     * @param {object} record to set
     */
    setItem(record) {
        this.tag.writeValue([record.attributes]);
        this.onAdd(record.attributes);
    }
    selectFirstElement() {
        const filteredElements = this.tag.dropdown.items;
        if (filteredElements.length !== 0) {
            const firstElement = filteredElements[0];
            this.selectedValues.push(firstElement);
            this.onAdd(firstElement);
            this.tag.dropdown.hide();
        }
    }
    static ɵfac = function RelateEditFieldComponent_Factory(t) { return new (t || RelateEditFieldComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i2.DataTypeFormatter), i0.ɵɵdirectiveInject(i3.RelateService), i0.ɵɵdirectiveInject(i4.ModuleNameMapper), i0.ɵɵdirectiveInject(i5.NgbModal), i0.ɵɵdirectiveInject(i6.FieldLogicManager), i0.ɵɵdirectiveInject(i7.FieldLogicDisplayManager)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RelateEditFieldComponent, selectors: [["scrm-relate-edit"]], viewQuery: function RelateEditFieldComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tag = _t.first);
        } }, features: [i0.ɵɵProvidersFeature([RelateService]), i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 2, consts: [[1, "d-flex"], [4, "ngIf"], ["class", "text-danger form-text text-muted", 4, "ngIf"], [1, "flex-grow-1"], ["maxItems", "1", 3, "ngModel", "clearOnBlur", "displayBy", "inputClass", "onTextChangeDebounce", "onlyFromAutocomplete", "placeholder", "secondaryPlaceholder", "keyup.enter", "onAdd", "onBlur", "onRemove", "ngModelChange"], ["tag", ""], [3, "autocompleteObservable", "displayBy", "keepOpen", "showDropdownIfEmpty"], [1, "relate-btn"], [3, "config"], [1, "text-danger", "form-text", "text-muted"], [3, "labelKey", "module"]], template: function RelateEditFieldComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, RelateEditFieldComponent_ng_container_1_Template, 7, 15, "ng-container", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(2, RelateEditFieldComponent_small_2_Template, 2, 2, "small", 2);
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.initModule);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.getMessage());
        } }, dependencies: [i8.NgIf, i9.TagInputComponent, i9.TagInputDropdown, i10.LabelComponent, i11.NgControlStatus, i11.NgModel, i12.ButtonComponent], encapsulation: 2 });
}
export { RelateEditFieldComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RelateEditFieldComponent, [{
        type: Component,
        args: [{ selector: 'scrm-relate-edit', providers: [RelateService], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div class=\"d-flex\">\n    <ng-container *ngIf=\"initModule\">\n        <div class=\"flex-grow-1\">\n            <tag-input #tag\n                       (keyup.enter)=\"selectFirstElement()\"\n                       (onAdd)=\"onAdd($event)\"\n                       (onBlur)=\"resetStatus()\"\n                       (onRemove)=\"onRemove()\"\n                       [(ngModel)]=\"selectedValues\"\n                       [class]=\"getInvalidClass()\"\n                       [clearOnBlur]=\"true\"\n                       [displayBy]=\"getRelateFieldName()\"\n                       [inputClass]=\"getInvalidClass()\"\n                       [onTextChangeDebounce]=\"500\"\n                       [onlyFromAutocomplete]=\"true\"\n                       [placeholder]=\"getPlaceholderLabel()\"\n                       [secondaryPlaceholder]=\"getPlaceholderLabel()\"\n                       maxItems=\"1\">\n                <tag-input-dropdown [autocompleteObservable]=\"search\"\n                                    [displayBy]=\"getRelateFieldName()\"\n                                    [keepOpen]=\"false\"\n                                    [showDropdownIfEmpty]=\"true\">\n                </tag-input-dropdown>\n            </tag-input>\n        </div>\n        <div class=\"relate-btn\">\n            <scrm-button [config]=\"selectButton\">\n            </scrm-button>\n        </div>\n    </ng-container>\n</div>\n<small *ngIf=\"getMessage()\" class=\"text-danger form-text text-muted\">\n    <scrm-label [labelKey]=\"getMessage()\" [module]=\"module\"></scrm-label>\n</small>\n" }]
    }], function () { return [{ type: i1.LanguageStore }, { type: i2.DataTypeFormatter }, { type: i3.RelateService }, { type: i4.ModuleNameMapper }, { type: i5.NgbModal }, { type: i6.FieldLogicManager }, { type: i7.FieldLogicDisplayManager }]; }, { tag: [{
            type: ViewChild,
            args: ['tag']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9maWVsZHMvcmVsYXRlL3RlbXBsYXRlcy9lZGl0L3JlbGF0ZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL3JlbGF0ZS90ZW1wbGF0ZXMvZWRpdC9yZWxhdGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBTW5ELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLG1HQUFtRyxDQUFDO0FBQzNJLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBRXhFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxtREFBbUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNQNUUsNkJBQWlDO0lBQzdCLDhCQUF5QixzQkFBQTtJQUVWLDZMQUFlLGVBQUEsMkJBQW9CLENBQUEsSUFBQywwS0FDM0IsZUFBQSxvQkFBYSxDQUFBLElBRGMsc0tBRTFCLGVBQUEsb0JBQWEsQ0FBQSxJQUZhLDBLQUd4QixlQUFBLGlCQUFVLENBQUEsSUFIYyw0T0FBQTtJQWMzQyx3Q0FJcUI7SUFDekIsaUJBQVksRUFBQTtJQUVoQiw4QkFBd0I7SUFDcEIsaUNBQ2M7SUFDbEIsaUJBQU07SUFDViwwQkFBZTs7O0lBcEJJLGVBQTJCO0lBQTNCLHVDQUEyQjtJQUQzQiwrQ0FBNEIscUJBQUEsMENBQUEsd0NBQUEsNkJBQUEsOEJBQUEsNkNBQUEsc0RBQUE7SUFVZixlQUFpQztJQUFqQyxzREFBaUMsMENBQUEsbUJBQUEsNkJBQUE7SUFRNUMsZUFBdUI7SUFBdkIsNENB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O2FBQ2Y7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7OztPQUlHO0lBQ08sT0FBTyxDQUFDLE1BQWM7UUFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU0sa0JBQWtCO1FBQ3JCLE1BQU0sZ0JBQWdCLEdBQWEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQzNELElBQUksZ0JBQWdCLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUMvQixNQUFNLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQzVCO0lBQ0wsQ0FBQztrRkExTFEsd0JBQXdCOzZEQUF4Qix3QkFBd0I7Ozs7OzhDQUZ0QixDQUFDLGFBQWEsQ0FBQztZQ2xCOUIsOEJBQW9CO1lBQ2hCLDRGQTRCZTtZQUNuQixpQkFBTTtZQUNOLDZFQUVROztZQWhDVyxlQUFnQjtZQUFoQixxQ0FBZ0I7WUE4QjNCLGVBQWtCO1lBQWxCLHVDQUFrQjs7O1NEWGIsd0JBQXdCO3VGQUF4Qix3QkFBd0I7Y0FOcEMsU0FBUzsyQkFDSSxrQkFBa0IsYUFHakIsQ0FBQyxhQUFhLENBQUM7eVBBR1IsR0FBRztrQkFBcEIsU0FBUzttQkFBQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGFnSW5wdXRDb21wb25lbnR9IGZyb20gJ25neC1jaGlwcyc7XG5pbXBvcnQge0J1dHRvbkludGVyZmFjZSwgRmllbGQsIFJlY29yZH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7TmdiTW9kYWx9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7TW9kdWxlTmFtZU1hcHBlcn0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbmF2aWdhdGlvbi9tb2R1bGUtbmFtZS1tYXBwZXIvbW9kdWxlLW5hbWUtbWFwcGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtEYXRhVHlwZUZvcm1hdHRlcn0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvZm9ybWF0dGVycy9kYXRhLXR5cGUuZm9ybWF0dGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtSZWNvcmRMaXN0TW9kYWxDb21wb25lbnR9IGZyb20gJy4uLy4uLy4uLy4uL2NvbnRhaW5lcnMvcmVjb3JkLWxpc3QtbW9kYWwvY29tcG9uZW50cy9yZWNvcmQtbGlzdC1tb2RhbC9yZWNvcmQtbGlzdC1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHtCYXNlUmVsYXRlQ29tcG9uZW50fSBmcm9tICcuLi8uLi8uLi9iYXNlL2Jhc2UtcmVsYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7UmVsYXRlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvcmVjb3JkL3JlbGF0ZS9yZWxhdGUuc2VydmljZSc7XG5pbXBvcnQge1JlY29yZExpc3RNb2RhbFJlc3VsdH0gZnJvbSAnLi4vLi4vLi4vLi4vY29udGFpbmVycy9yZWNvcmQtbGlzdC1tb2RhbC9jb21wb25lbnRzL3JlY29yZC1saXN0LW1vZGFsL3JlY29yZC1saXN0LW1vZGFsLm1vZGVsJztcbmltcG9ydCB7VGFnTW9kZWx9IGZyb20gJ25neC1jaGlwcy9jb3JlL3RhZy1tb2RlbCc7XG5pbXBvcnQge0ZpZWxkTG9naWNNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi9maWVsZC1sb2dpYy9maWVsZC1sb2dpYy5tYW5hZ2VyJztcbmltcG9ydCB7RmllbGRMb2dpY0Rpc3BsYXlNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi9maWVsZC1sb2dpYy1kaXNwbGF5L2ZpZWxkLWxvZ2ljLWRpc3BsYXkubWFuYWdlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1yZWxhdGUtZWRpdCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3JlbGF0ZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXSxcbiAgICBwcm92aWRlcnM6IFtSZWxhdGVTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBSZWxhdGVFZGl0RmllbGRDb21wb25lbnQgZXh0ZW5kcyBCYXNlUmVsYXRlQ29tcG9uZW50IHtcbiAgICBAVmlld0NoaWxkKCd0YWcnKSB0YWc6IFRhZ0lucHV0Q29tcG9uZW50O1xuICAgIHNlbGVjdEJ1dHRvbjogQnV0dG9uSW50ZXJmYWNlO1xuICAgIGlkRmllbGQ6IEZpZWxkO1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBsYW5ndWFnZXMgc2VydmljZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlRm9ybWF0dGVyIHNlcnZpY2VcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVsYXRlU2VydmljZSBzZXJ2aWNlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG1vZHVsZU5hbWVNYXBwZXIgc2VydmljZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtb2RhbFNlcnZpY2Ugc2VydmljZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBsb2dpY1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2VzOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgdHlwZUZvcm1hdHRlcjogRGF0YVR5cGVGb3JtYXR0ZXIsXG4gICAgICAgIHByb3RlY3RlZCByZWxhdGVTZXJ2aWNlOiBSZWxhdGVTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgbW9kdWxlTmFtZU1hcHBlcjogTW9kdWxlTmFtZU1hcHBlcixcbiAgICAgICAgcHJvdGVjdGVkIG1vZGFsU2VydmljZTogTmdiTW9kYWwsXG4gICAgICAgIHByb3RlY3RlZCBsb2dpYzogRmllbGRMb2dpY01hbmFnZXIsXG4gICAgICAgIHByb3RlY3RlZCBsb2dpY0Rpc3BsYXk6IEZpZWxkTG9naWNEaXNwbGF5TWFuYWdlclxuICAgICkge1xuICAgICAgICBzdXBlcihsYW5ndWFnZXMsIHR5cGVGb3JtYXR0ZXIsIHJlbGF0ZVNlcnZpY2UsIG1vZHVsZU5hbWVNYXBwZXIsIGxvZ2ljLCBsb2dpY0Rpc3BsYXkpO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0QnV0dG9uID0ge1xuICAgICAgICAgICAga2xhc3M6IFsnYnRuJywgJ2J0bi1zbScsICdidG4tb3V0bGluZS1zZWNvbmRhcnknLCAnc2VsZWN0LWJ1dHRvbicsICdtLTAnXSxcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTZWxlY3RNb2RhbCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGljb246ICdjdXJzb3InXG4gICAgICAgIH0gYXMgQnV0dG9uSW50ZXJmYWNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9uIGluaXQgaGFuZGxlclxuICAgICAqL1xuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0KCk6IHZvaWQge1xuXG4gICAgICAgIHN1cGVyLmluaXQoKTtcblxuICAgICAgICB0aGlzLmluaXRWYWx1ZSgpO1xuXG4gICAgICAgIGNvbnN0IGlkRmllbGROYW1lID0gdGhpcy5nZXRSZWxhdGVJZEZpZWxkKCk7XG4gICAgICAgIGlmIChpZEZpZWxkTmFtZSAmJiB0aGlzLnJlY29yZCAmJiB0aGlzLnJlY29yZC5maWVsZHMgJiYgdGhpcy5yZWNvcmQuZmllbGRzW2lkRmllbGROYW1lXSkge1xuICAgICAgICAgICAgdGhpcy5pZEZpZWxkID0gdGhpcy5yZWNvcmQuZmllbGRzW2lkRmllbGROYW1lXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0VmFsdWUoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5maWVsZC52YWx1ZU9iamVjdCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5maWVsZC5mb3JtQ29udHJvbC5zZXRWYWx1ZSgnJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuZmllbGQudmFsdWVPYmplY3QuaWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZXMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuZmllbGQuZm9ybUNvbnRyb2wuc2V0VmFsdWUoJycpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlcyA9IFtdO1xuICAgICAgICB0aGlzLnNlbGVjdGVkVmFsdWVzLnB1c2godGhpcy5maWVsZC52YWx1ZU9iamVjdCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIG5ld2x5IGFkZGVkIGl0ZW1cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBpdGVtIGFkZGVkXG4gICAgICovXG4gICAgb25BZGQoaXRlbSk6IHZvaWQge1xuXG4gICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICBjb25zdCByZWxhdGVOYW1lID0gdGhpcy5nZXRSZWxhdGVGaWVsZE5hbWUoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUoaXRlbS5pZCwgaXRlbVtyZWxhdGVOYW1lXSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFZhbHVlKCcnLCAnJyk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZXMgPSBbXTtcblxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIGl0ZW0gcmVtb3ZhbFxuICAgICAqL1xuICAgIG9uUmVtb3ZlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNldFZhbHVlKCcnLCAnJyk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZXMgPSBbXTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudGFnLmZvY3VzKHRydWUsIHRydWUpO1xuICAgICAgICB9LCAyMDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB2YWx1ZSBvbiBmaWVsZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIHRvIHNldFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGVWYWx1ZSB0byBzZXRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgc2V0VmFsdWUoaWQ6IHN0cmluZywgcmVsYXRlVmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBjb25zdCByZWxhdGUgPSB0aGlzLmJ1aWxkUmVsYXRlKGlkLCByZWxhdGVWYWx1ZSk7XG4gICAgICAgIHRoaXMuZmllbGQudmFsdWUgPSByZWxhdGVWYWx1ZTtcbiAgICAgICAgdGhpcy5maWVsZC52YWx1ZU9iamVjdCA9IHJlbGF0ZTtcbiAgICAgICAgdGhpcy5maWVsZC5mb3JtQ29udHJvbC5zZXRWYWx1ZShyZWxhdGVWYWx1ZSk7XG4gICAgICAgIHRoaXMuZmllbGQuZm9ybUNvbnRyb2wubWFya0FzRGlydHkoKTtcblxuICAgICAgICBpZiAodGhpcy5pZEZpZWxkKSB7XG4gICAgICAgICAgICB0aGlzLmlkRmllbGQudmFsdWUgPSBpZDtcbiAgICAgICAgICAgIHRoaXMuaWRGaWVsZC5mb3JtQ29udHJvbC5zZXRWYWx1ZShpZCk7XG4gICAgICAgICAgICB0aGlzLmlkRmllbGQuZm9ybUNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3cgcmVjb3JkIHNlbGVjdGlvbiBtb2RhbFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBzaG93U2VsZWN0TW9kYWwoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihSZWNvcmRMaXN0TW9kYWxDb21wb25lbnQsIHtzaXplOiAneGwnLCBzY3JvbGxhYmxlOiB0cnVlfSk7XG5cbiAgICAgICAgbW9kYWwuY29tcG9uZW50SW5zdGFuY2UubW9kdWxlID0gdGhpcy5nZXRSZWxhdGVkTW9kdWxlKCk7XG5cbiAgICAgICAgbW9kYWwucmVzdWx0LnRoZW4oKGRhdGE6IFJlY29yZExpc3RNb2RhbFJlc3VsdCkgPT4ge1xuXG4gICAgICAgICAgICBpZiAoIWRhdGEgfHwgIWRhdGEuc2VsZWN0aW9uIHx8ICFkYXRhLnNlbGVjdGlvbi5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcmVjb3JkID0gdGhpcy5nZXRTZWxlY3RlZFJlY29yZChkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuc2V0SXRlbShyZWNvcmQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgU2VsZWN0ZWQgUmVjb3JkXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSBSZWNvcmRMaXN0TW9kYWxSZXN1bHRcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBSZWNvcmRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0U2VsZWN0ZWRSZWNvcmQoZGF0YTogUmVjb3JkTGlzdE1vZGFsUmVzdWx0KTogUmVjb3JkIHtcbiAgICAgICAgbGV0IGlkID0gJyc7XG4gICAgICAgIE9iamVjdC5rZXlzKGRhdGEuc2VsZWN0aW9uLnNlbGVjdGVkKS5zb21lKHNlbGVjdGVkID0+IHtcbiAgICAgICAgICAgIGlkID0gc2VsZWN0ZWQ7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHJlY29yZDogUmVjb3JkID0gbnVsbDtcblxuICAgICAgICBkYXRhLnJlY29yZHMuc29tZShyZWMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlYyAmJiByZWMuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgcmVjb3JkID0gcmVjO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVjb3JkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgcmVjb3JkIGFzIHRoZSBzZWxlY3RlZCBpdGVtXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVjb3JkIHRvIHNldFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBzZXRJdGVtKHJlY29yZDogUmVjb3JkKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGFnLndyaXRlVmFsdWUoW3JlY29yZC5hdHRyaWJ1dGVzXSk7XG4gICAgICAgIHRoaXMub25BZGQocmVjb3JkLmF0dHJpYnV0ZXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZWxlY3RGaXJzdEVsZW1lbnQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkRWxlbWVudHM6IFRhZ01vZGVsID0gdGhpcy50YWcuZHJvcGRvd24uaXRlbXM7XG4gICAgICAgIGlmIChmaWx0ZXJlZEVsZW1lbnRzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgY29uc3QgZmlyc3RFbGVtZW50ID0gZmlsdGVyZWRFbGVtZW50c1swXTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZXMucHVzaChmaXJzdEVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5vbkFkZChmaXJzdEVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy50YWcuZHJvcGRvd24uaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48ZGl2IGNsYXNzPVwiZC1mbGV4XCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImluaXRNb2R1bGVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtZ3Jvdy0xXCI+XG4gICAgICAgICAgICA8dGFnLWlucHV0ICN0YWdcbiAgICAgICAgICAgICAgICAgICAgICAgKGtleXVwLmVudGVyKT1cInNlbGVjdEZpcnN0RWxlbWVudCgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgKG9uQWRkKT1cIm9uQWRkKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAob25CbHVyKT1cInJlc2V0U3RhdHVzKClcIlxuICAgICAgICAgICAgICAgICAgICAgICAob25SZW1vdmUpPVwib25SZW1vdmUoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwic2VsZWN0ZWRWYWx1ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3NdPVwiZ2V0SW52YWxpZENsYXNzKClcIlxuICAgICAgICAgICAgICAgICAgICAgICBbY2xlYXJPbkJsdXJdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgIFtkaXNwbGF5QnldPVwiZ2V0UmVsYXRlRmllbGROYW1lKClcIlxuICAgICAgICAgICAgICAgICAgICAgICBbaW5wdXRDbGFzc109XCJnZXRJbnZhbGlkQ2xhc3MoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgIFtvblRleHRDaGFuZ2VEZWJvdW5jZV09XCI1MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICBbb25seUZyb21BdXRvY29tcGxldGVdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJnZXRQbGFjZWhvbGRlckxhYmVsKClcIlxuICAgICAgICAgICAgICAgICAgICAgICBbc2Vjb25kYXJ5UGxhY2Vob2xkZXJdPVwiZ2V0UGxhY2Vob2xkZXJMYWJlbCgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgbWF4SXRlbXM9XCIxXCI+XG4gICAgICAgICAgICAgICAgPHRhZy1pbnB1dC1kcm9wZG93biBbYXV0b2NvbXBsZXRlT2JzZXJ2YWJsZV09XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc3BsYXlCeV09XCJnZXRSZWxhdGVGaWVsZE5hbWUoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBba2VlcE9wZW5dPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Nob3dEcm9wZG93bklmRW1wdHldPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIDwvdGFnLWlucHV0LWRyb3Bkb3duPlxuICAgICAgICAgICAgPC90YWctaW5wdXQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVsYXRlLWJ0blwiPlxuICAgICAgICAgICAgPHNjcm0tYnV0dG9uIFtjb25maWddPVwic2VsZWN0QnV0dG9uXCI+XG4gICAgICAgICAgICA8L3Njcm0tYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuPHNtYWxsICpuZ0lmPVwiZ2V0TWVzc2FnZSgpXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlciBmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlxuICAgIDxzY3JtLWxhYmVsIFtsYWJlbEtleV09XCJnZXRNZXNzYWdlKClcIiBbbW9kdWxlXT1cIm1vZHVsZVwiPjwvc2NybS1sYWJlbD5cbjwvc21hbGw+XG4iXX0=