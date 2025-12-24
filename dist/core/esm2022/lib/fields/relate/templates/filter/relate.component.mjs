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
import { deepClone } from 'common';
import { RecordListModalComponent } from '../../../../containers/record-list-modal/components/record-list-modal/record-list-modal.component';
import { BaseRelateComponent } from '../../../base/base-relate.component';
import { RelateService } from '../../../../services/record/relate/relate.service';
import { EMPTY, of } from 'rxjs';
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
function RelateFilterFieldComponent_small_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 8);
    i0.ɵɵelement(1, "scrm-label", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("labelKey", ctx_r1.getMessage())("module", ctx_r1.module);
} }
class RelateFilterFieldComponent extends BaseRelateComponent {
    languages;
    typeFormatter;
    relateService;
    moduleNameMapper;
    modalService;
    logic;
    logicDisplay;
    tag;
    selectButton;
    selectedTags;
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
        const filter = this.record;
        this.field.valueList = [];
        this.field.valueObjectArray = [];
        const values = (this.field && this.field.criteria && this.field.criteria.values) || [];
        if (values.length > 0) {
            this.field.valueList = values;
            this.selectedTags = values;
        }
        const valueObjectArray = (this.field && this.field.criteria && this.field.criteria.valueObjectArray) || [];
        if (valueObjectArray.length > 0) {
            this.field.valueObjectArray = deepClone(valueObjectArray);
            this.selectedTags = deepClone(valueObjectArray);
        }
        super.ngOnInit();
        const idFieldName = this.getRelateIdField();
        if (idFieldName && filter && filter.criteriaFields && filter.criteriaFields[idFieldName]) {
            this.idField = filter.criteriaFields[idFieldName];
            this.idField.valueList = [];
            const idValues = (this.idField && this.idField.criteria && this.idField.criteria.values) || [];
            if (idValues.length > 0) {
                this.idField.valueList = deepClone(idValues);
            }
        }
    }
    /**
     * Handle newly added item
     *
     * @param {object} item added
     */
    onAdd(item) {
        if (item) {
            this.setValue(item);
            return;
        }
    }
    onAdding(item) {
        if (!item) {
            return EMPTY;
        }
        if (this.idField && this.idField.valueList.includes(item.id)) {
            return EMPTY;
        }
        const relateName = this.getRelateFieldName();
        if (!this.idField && this.field.valueList.includes(item[relateName])) {
            return EMPTY;
        }
        return of(item);
    }
    /**
     * Handle item removal
     */
    onRemove(item) {
        const id = item.id ?? '';
        const value = item.name ?? '';
        this.field.valueList = this.field.valueList.filter(element => element !== value);
        this.field.valueObjectArray = this.field.valueObjectArray.filter(element => element.id !== id);
        this.updateSearchCriteria(this.field);
        this.field.criteria.valueObjectArray = deepClone(this.field.valueObjectArray);
        if (this.idField && id) {
            this.idField.valueList = this.idField.valueList.filter(element => element !== id);
            this.updateSearchCriteria(this.idField);
        }
        setTimeout(() => {
            this.tag.focus(true, true);
        }, 200);
    }
    selectFirstElement() {
        const filteredElements = this.tag.dropdown.items;
        if (filteredElements.length !== 0) {
            const firstElement = filteredElements[0];
            this.tag.appendTag(firstElement);
            this.onAdd(firstElement);
            this.tag.dropdown.hide();
        }
    }
    /**
     * Set value on field
     *
     * @param item: any
     */
    setValue(item) {
        const relateName = this.getRelateFieldName();
        const id = item.id;
        const relateValue = item[relateName];
        if (this.idField && this.idField.valueList.includes(id)) {
            return;
        }
        if (!this.idField && this.field.valueList.includes(relateValue)) {
            return;
        }
        const valueObject = {};
        valueObject.id = id;
        valueObject[relateName] = relateValue;
        this.field.valueObjectArray.push(valueObject);
        this.field.valueList.push(relateValue);
        if (this.idField) {
            this.idField.valueList.push(id);
            this.updateSearchCriteria(this.idField);
        }
        this.updateSearchCriteria(this.field);
        if (!this.field.criteria.valueObjectArray) {
            this.field.criteria.valueObjectArray = [];
        }
        this.field.criteria.valueObjectArray.push(valueObject);
    }
    /**
     * Set value on field criteria and form
     */
    updateSearchCriteria(field) {
        field.criteria.operator = '=';
        field.criteria.values = field.valueList;
        field.formControl.setValue(field.valueList);
        field.formControl.markAsDirty();
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
            const found = this.field.valueObjectArray.find(element => element.id === record.id);
            if (found) {
                return;
            }
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
        this.tag.appendTag(record.attributes);
        this.onAdd(record.attributes);
    }
    static ɵfac = function RelateFilterFieldComponent_Factory(t) { return new (t || RelateFilterFieldComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i2.DataTypeFormatter), i0.ɵɵdirectiveInject(i3.RelateService), i0.ɵɵdirectiveInject(i4.ModuleNameMapper), i0.ɵɵdirectiveInject(i5.NgbModal), i0.ɵɵdirectiveInject(i6.FieldLogicManager), i0.ɵɵdirectiveInject(i7.FieldLogicDisplayManager)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RelateFilterFieldComponent, selectors: [["scrm-relate-filter"]], viewQuery: function RelateFilterFieldComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tag = _t.first);
        } }, features: [i0.ɵɵProvidersFeature([RelateService]), i0.ɵɵInheritDefinitionFeature], decls: 8, vars: 18, consts: [[1, "d-flex"], [1, "flex-grow-1"], [3, "ngModel", "clearOnBlur", "identifyBy", "displayBy", "inputClass", "onTextChangeDebounce", "onlyFromAutocomplete", "placeholder", "secondaryPlaceholder", "keyup.enter", "onAdd", "onBlur", "onRemove", "ngModelChange"], ["tag", ""], [3, "autocompleteObservable", "identifyBy", "displayBy", "keepOpen", "showDropdownIfEmpty"], [1, "relate-btn"], [3, "config"], ["class", "text-danger form-text text-muted", 4, "ngIf"], [1, "text-danger", "form-text", "text-muted"], [3, "labelKey", "module"]], template: function RelateFilterFieldComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "tag-input", 2, 3);
            i0.ɵɵlistener("keyup.enter", function RelateFilterFieldComponent_Template_tag_input_keyup_enter_2_listener() { return ctx.selectFirstElement(); })("onAdd", function RelateFilterFieldComponent_Template_tag_input_onAdd_2_listener($event) { return ctx.onAdd($event); })("onBlur", function RelateFilterFieldComponent_Template_tag_input_onBlur_2_listener() { return ctx.resetStatus(); })("onRemove", function RelateFilterFieldComponent_Template_tag_input_onRemove_2_listener($event) { return ctx.onRemove($event); })("ngModelChange", function RelateFilterFieldComponent_Template_tag_input_ngModelChange_2_listener($event) { return ctx.selectedTags = $event; });
            i0.ɵɵelement(4, "tag-input-dropdown", 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(5, "div", 5);
            i0.ɵɵelement(6, "scrm-button", 6);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(7, RelateFilterFieldComponent_small_7_Template, 2, 2, "small", 7);
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵclassMap(ctx.getInvalidClass());
            i0.ɵɵproperty("ngModel", ctx.selectedTags)("clearOnBlur", true)("identifyBy", "id")("displayBy", ctx.getRelateFieldName())("inputClass", ctx.getInvalidClass())("onTextChangeDebounce", 500)("onlyFromAutocomplete", true)("placeholder", ctx.getPlaceholderLabel())("secondaryPlaceholder", ctx.getPlaceholderLabel());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("autocompleteObservable", ctx.search)("identifyBy", "id")("displayBy", ctx.getRelateFieldName())("keepOpen", false)("showDropdownIfEmpty", true);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("config", ctx.selectButton);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.getMessage());
        } }, dependencies: [i8.NgIf, i9.TagInputComponent, i9.TagInputDropdown, i10.LabelComponent, i11.NgControlStatus, i11.NgModel, i12.ButtonComponent], encapsulation: 2 });
}
export { RelateFilterFieldComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RelateFilterFieldComponent, [{
        type: Component,
        args: [{ selector: 'scrm-relate-filter', providers: [RelateService], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div class=\"d-flex\">\n    <div class=\"flex-grow-1\">\n        <tag-input #tag\n                   (keyup.enter)=\"selectFirstElement()\"\n                   (onAdd)=\"onAdd($event)\"\n                   (onBlur)=\"resetStatus()\"\n                   (onRemove)=\"onRemove($event)\"\n                   [(ngModel)]=\"selectedTags\"\n                   [class]=\"getInvalidClass()\"\n                   [clearOnBlur]=\"true\"\n                   [identifyBy]=\"'id'\"\n                   [displayBy]=\"getRelateFieldName()\"\n                   [inputClass]=\"getInvalidClass()\"\n                   [onTextChangeDebounce]=\"500\"\n                   [onlyFromAutocomplete]=\"true\"\n                   [placeholder]=\"getPlaceholderLabel()\"\n                   [secondaryPlaceholder]=\"getPlaceholderLabel()\">\n            <tag-input-dropdown [autocompleteObservable]=\"search\"\n                                [identifyBy]=\"'id'\"\n                                [displayBy]=\"getRelateFieldName()\"\n                                [keepOpen]=\"false\"\n                                [showDropdownIfEmpty]=\"true\">\n            </tag-input-dropdown>\n        </tag-input>\n    </div>\n   <div class=\"relate-btn\">\n        <scrm-button [config]=\"selectButton\">\n        </scrm-button>\n    </div>\n</div>\n<small *ngIf=\"getMessage()\" class=\"text-danger form-text text-muted\">\n    <scrm-label [labelKey]=\"getMessage()\" [module]=\"module\"></scrm-label>\n</small>\n" }]
    }], function () { return [{ type: i1.LanguageStore }, { type: i2.DataTypeFormatter }, { type: i3.RelateService }, { type: i4.ModuleNameMapper }, { type: i5.NgbModal }, { type: i6.FieldLogicManager }, { type: i7.FieldLogicDisplayManager }]; }, { tag: [{
            type: ViewChild,
            args: ['tag']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9maWVsZHMvcmVsYXRlL3RlbXBsYXRlcy9maWx0ZXIvcmVsYXRlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9maWVsZHMvcmVsYXRlL3RlbXBsYXRlcy9maWx0ZXIvcmVsYXRlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUVuRCxPQUFPLEVBQWlDLFNBQVMsRUFBQyxNQUFNLFFBQVEsQ0FBQztBQUlqRSxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxtR0FBbUcsQ0FBQztBQUMzSSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUV4RSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbURBQW1ELENBQUM7QUFLaEYsT0FBTyxFQUFDLEtBQUssRUFBYyxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7SUNpQjNDLGdDQUFxRTtJQUNqRSxnQ0FBcUU7SUFDekUsaUJBQVE7OztJQURRLGVBQXlCO0lBQXpCLDhDQUF5Qix5QkFBQTs7QURmekMsTUFNYSwwQkFBMkIsU0FBUSxtQkFBbUI7SUFpQmpEO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBdEJJLEdBQUcsQ0FBb0I7SUFDekMsWUFBWSxDQUFrQjtJQUM5QixZQUFZLENBQXdCO0lBQ3BDLE9BQU8sQ0FBUTtJQUVmOzs7Ozs7Ozs7T0FTRztJQUNILFlBQ2MsU0FBd0IsRUFDeEIsYUFBZ0MsRUFDaEMsYUFBNEIsRUFDNUIsZ0JBQWtDLEVBQ2xD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QixvQ0FBMkI7WUFEM0IsMENBQTBCLHFCQUFBLG9CQUFBLHVDQUFBLHFDQUFBLDZCQUFBLDhCQUFBLDBDQUFBLG1EQUFBO1lBVWIsZUFBaUM7WUFBakMsbURBQWlDLG9CQUFBLHVDQUFBLG1CQUFBLDZCQUFBO1lBUzVDLGVBQXVCO1lBQXZCLHlDQUF1QjtZQUlwQyxlQUFrQjtZQUFsQix1Q0FBa0I7OztTRFJiLDBCQUEwQjt1RkFBMUIsMEJBQTBCO2NBTnRDLFNBQVM7MkJBQ0ksb0JBQW9CLGFBR25CLENBQUMsYUFBYSxDQUFDO3lQQUdSLEdBQUc7a0JBQXBCLFNBQVM7bUJBQUMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RhZ0lucHV0Q29tcG9uZW50fSBmcm9tICduZ3gtY2hpcHMnO1xuaW1wb3J0IHtCdXR0b25JbnRlcmZhY2UsIEZpZWxkLCBSZWNvcmQsIGRlZXBDbG9uZX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7TmdiTW9kYWx9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7TW9kdWxlTmFtZU1hcHBlcn0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbmF2aWdhdGlvbi9tb2R1bGUtbmFtZS1tYXBwZXIvbW9kdWxlLW5hbWUtbWFwcGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtEYXRhVHlwZUZvcm1hdHRlcn0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvZm9ybWF0dGVycy9kYXRhLXR5cGUuZm9ybWF0dGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtSZWNvcmRMaXN0TW9kYWxDb21wb25lbnR9IGZyb20gJy4uLy4uLy4uLy4uL2NvbnRhaW5lcnMvcmVjb3JkLWxpc3QtbW9kYWwvY29tcG9uZW50cy9yZWNvcmQtbGlzdC1tb2RhbC9yZWNvcmQtbGlzdC1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHtCYXNlUmVsYXRlQ29tcG9uZW50fSBmcm9tICcuLi8uLi8uLi9iYXNlL2Jhc2UtcmVsYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7UmVsYXRlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvcmVjb3JkL3JlbGF0ZS9yZWxhdGUuc2VydmljZSc7XG5pbXBvcnQge1JlY29yZExpc3RNb2RhbFJlc3VsdH0gZnJvbSAnLi4vLi4vLi4vLi4vY29udGFpbmVycy9yZWNvcmQtbGlzdC1tb2RhbC9jb21wb25lbnRzL3JlY29yZC1saXN0LW1vZGFsL3JlY29yZC1saXN0LW1vZGFsLm1vZGVsJztcbmltcG9ydCB7VGFnTW9kZWx9IGZyb20gJ25neC1jaGlwcy9jb3JlL3RhZy1tb2RlbCc7XG5pbXBvcnQge0ZpZWxkTG9naWNNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi9maWVsZC1sb2dpYy9maWVsZC1sb2dpYy5tYW5hZ2VyJztcbmltcG9ydCB7U2F2ZWRGaWx0ZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3NhdmVkLWZpbHRlcnMvc2F2ZWQtZmlsdGVyLm1vZGVsJztcbmltcG9ydCB7RU1QVFksIE9ic2VydmFibGUsIG9mfSBmcm9tICdyeGpzJztcbmltcG9ydCB7RmllbGRMb2dpY0Rpc3BsYXlNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi9maWVsZC1sb2dpYy1kaXNwbGF5L2ZpZWxkLWxvZ2ljLWRpc3BsYXkubWFuYWdlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1yZWxhdGUtZmlsdGVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcmVsYXRlLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtdLFxuICAgIHByb3ZpZGVyczogW1JlbGF0ZVNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFJlbGF0ZUZpbHRlckZpZWxkQ29tcG9uZW50IGV4dGVuZHMgQmFzZVJlbGF0ZUNvbXBvbmVudCB7XG4gICAgQFZpZXdDaGlsZCgndGFnJykgdGFnOiBUYWdJbnB1dENvbXBvbmVudDtcbiAgICBzZWxlY3RCdXR0b246IEJ1dHRvbkludGVyZmFjZTtcbiAgICBzZWxlY3RlZFRhZ3M6IHN0cmluZ1tdIHwgVGFnTW9kZWxbXTtcbiAgICBpZEZpZWxkOiBGaWVsZDtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbGFuZ3VhZ2VzIHNlcnZpY2VcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdHlwZUZvcm1hdHRlciBzZXJ2aWNlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlbGF0ZVNlcnZpY2Ugc2VydmljZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtb2R1bGVOYW1lTWFwcGVyIHNlcnZpY2VcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbW9kYWxTZXJ2aWNlIHNlcnZpY2VcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbG9naWNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlczogTGFuZ3VhZ2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHR5cGVGb3JtYXR0ZXI6IERhdGFUeXBlRm9ybWF0dGVyLFxuICAgICAgICBwcm90ZWN0ZWQgcmVsYXRlU2VydmljZTogUmVsYXRlU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIG1vZHVsZU5hbWVNYXBwZXI6IE1vZHVsZU5hbWVNYXBwZXIsXG4gICAgICAgIHByb3RlY3RlZCBtb2RhbFNlcnZpY2U6IE5nYk1vZGFsLFxuICAgICAgICBwcm90ZWN0ZWQgbG9naWM6IEZpZWxkTG9naWNNYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgbG9naWNEaXNwbGF5OiBGaWVsZExvZ2ljRGlzcGxheU1hbmFnZXJcbiAgICApIHtcbiAgICAgICAgc3VwZXIobGFuZ3VhZ2VzLCB0eXBlRm9ybWF0dGVyLCByZWxhdGVTZXJ2aWNlLCBtb2R1bGVOYW1lTWFwcGVyLCBsb2dpYywgbG9naWNEaXNwbGF5KTtcblxuICAgICAgICB0aGlzLnNlbGVjdEJ1dHRvbiA9IHtcbiAgICAgICAgICAgIGtsYXNzOiBbJ2J0bicsICdidG4tc20nLCAnYnRuLW91dGxpbmUtc2Vjb25kYXJ5JywgJ3NlbGVjdC1idXR0b24nLCAnbS0wJ10sXG4gICAgICAgICAgICBvbkNsaWNrOiAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93U2VsZWN0TW9kYWwoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpY29uOiAnY3Vyc29yJ1xuICAgICAgICB9IGFzIEJ1dHRvbkludGVyZmFjZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPbiBpbml0IGhhbmRsZXJcbiAgICAgKi9cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZmlsdGVyID0gdGhpcy5yZWNvcmQgYXMgU2F2ZWRGaWx0ZXI7XG5cbiAgICAgICAgdGhpcy5maWVsZC52YWx1ZUxpc3QgPSBbXTtcblxuICAgICAgICB0aGlzLmZpZWxkLnZhbHVlT2JqZWN0QXJyYXkgPSBbXTtcblxuICAgICAgICBjb25zdCB2YWx1ZXMgPSAodGhpcy5maWVsZCAmJiB0aGlzLmZpZWxkLmNyaXRlcmlhICYmIHRoaXMuZmllbGQuY3JpdGVyaWEudmFsdWVzKSB8fCBbXTtcblxuICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZmllbGQudmFsdWVMaXN0ID0gdmFsdWVzO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFRhZ3MgPSB2YWx1ZXM7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2YWx1ZU9iamVjdEFycmF5ID0gKHRoaXMuZmllbGQgJiYgdGhpcy5maWVsZC5jcml0ZXJpYSAmJiB0aGlzLmZpZWxkLmNyaXRlcmlhLnZhbHVlT2JqZWN0QXJyYXkpIHx8IFtdO1xuXG4gICAgICAgIGlmICh2YWx1ZU9iamVjdEFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZmllbGQudmFsdWVPYmplY3RBcnJheSA9IGRlZXBDbG9uZSh2YWx1ZU9iamVjdEFycmF5KTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRUYWdzID0gZGVlcENsb25lKHZhbHVlT2JqZWN0QXJyYXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIubmdPbkluaXQoKTtcblxuICAgICAgICBjb25zdCBpZEZpZWxkTmFtZSA9IHRoaXMuZ2V0UmVsYXRlSWRGaWVsZCgpO1xuXG4gICAgICAgIGlmIChpZEZpZWxkTmFtZSAmJiBmaWx0ZXIgJiYgZmlsdGVyLmNyaXRlcmlhRmllbGRzICYmIGZpbHRlci5jcml0ZXJpYUZpZWxkc1tpZEZpZWxkTmFtZV0pIHtcbiAgICAgICAgICAgIHRoaXMuaWRGaWVsZCA9IGZpbHRlci5jcml0ZXJpYUZpZWxkc1tpZEZpZWxkTmFtZV07XG4gICAgICAgICAgICB0aGlzLmlkRmllbGQudmFsdWVMaXN0ID0gW107XG4gICAgICAgICAgICBjb25zdCBpZFZhbHVlcyA9ICh0aGlzLmlkRmllbGQgJiYgdGhpcy5pZEZpZWxkLmNyaXRlcmlhICYmIHRoaXMuaWRGaWVsZC5jcml0ZXJpYS52YWx1ZXMpIHx8IFtdO1xuXG4gICAgICAgICAgICBpZiAoaWRWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaWRGaWVsZC52YWx1ZUxpc3QgPSBkZWVwQ2xvbmUoaWRWYWx1ZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIG5ld2x5IGFkZGVkIGl0ZW1cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBpdGVtIGFkZGVkXG4gICAgICovXG4gICAgb25BZGQoaXRlbSk6IHZvaWQge1xuXG4gICAgICAgIGlmIChpdGVtKSB7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUoaXRlbSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkFkZGluZyhpdGVtKTogT2JzZXJ2YWJsZTxUYWdNb2RlbD4ge1xuXG4gICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIEVNUFRZO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5pZEZpZWxkICYmIHRoaXMuaWRGaWVsZC52YWx1ZUxpc3QuaW5jbHVkZXMoaXRlbS5pZCkpe1xuICAgICAgICAgICAgcmV0dXJuIEVNUFRZO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVsYXRlTmFtZSA9IHRoaXMuZ2V0UmVsYXRlRmllbGROYW1lKCk7XG5cbiAgICAgICAgaWYoIXRoaXMuaWRGaWVsZCAmJiB0aGlzLmZpZWxkLnZhbHVlTGlzdC5pbmNsdWRlcyhpdGVtW3JlbGF0ZU5hbWVdKSl7XG4gICAgICAgICAgICByZXR1cm4gRU1QVFk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb2YoaXRlbSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIGl0ZW0gcmVtb3ZhbFxuICAgICAqL1xuICAgIG9uUmVtb3ZlKGl0ZW0pOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBpZCA9IGl0ZW0uaWQgPz8gJyc7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gaXRlbS5uYW1lID8/ICcnO1xuICAgICAgICB0aGlzLmZpZWxkLnZhbHVlTGlzdCA9IHRoaXMuZmllbGQudmFsdWVMaXN0LmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQgIT09IHZhbHVlKTtcblxuICAgICAgICB0aGlzLmZpZWxkLnZhbHVlT2JqZWN0QXJyYXkgPSB0aGlzLmZpZWxkLnZhbHVlT2JqZWN0QXJyYXkuZmlsdGVyKGVsZW1lbnQgPT4gZWxlbWVudC5pZCAhPT0gaWQpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlU2VhcmNoQ3JpdGVyaWEodGhpcy5maWVsZCk7XG5cbiAgICAgICAgdGhpcy5maWVsZC5jcml0ZXJpYS52YWx1ZU9iamVjdEFycmF5ID0gZGVlcENsb25lKHRoaXMuZmllbGQudmFsdWVPYmplY3RBcnJheSk7XG5cbiAgICAgICAgaWYodGhpcy5pZEZpZWxkICYmIGlkKXtcbiAgICAgICAgICAgIHRoaXMuaWRGaWVsZC52YWx1ZUxpc3QgPSB0aGlzLmlkRmllbGQudmFsdWVMaXN0LmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQgIT09IGlkKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2VhcmNoQ3JpdGVyaWEodGhpcy5pZEZpZWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50YWcuZm9jdXModHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIH0sIDIwMCk7XG4gICAgfVxuXG4gICAgc2VsZWN0Rmlyc3RFbGVtZW50KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBmaWx0ZXJlZEVsZW1lbnRzOiBUYWdNb2RlbCA9IHRoaXMudGFnLmRyb3Bkb3duLml0ZW1zO1xuICAgICAgICBpZiAoZmlsdGVyZWRFbGVtZW50cy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0RWxlbWVudCA9IGZpbHRlcmVkRWxlbWVudHNbMF07XG4gICAgICAgICAgICB0aGlzLnRhZy5hcHBlbmRUYWcoZmlyc3RFbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMub25BZGQoZmlyc3RFbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMudGFnLmRyb3Bkb3duLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB2YWx1ZSBvbiBmaWVsZFxuICAgICAqXG4gICAgICogQHBhcmFtIGl0ZW06IGFueVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBzZXRWYWx1ZShpdGVtOiBhbnkpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCByZWxhdGVOYW1lID0gdGhpcy5nZXRSZWxhdGVGaWVsZE5hbWUoKTtcbiAgICAgICAgY29uc3QgaWQgPSBpdGVtLmlkO1xuICAgICAgICBjb25zdCByZWxhdGVWYWx1ZSA9IGl0ZW1bcmVsYXRlTmFtZV07XG5cbiAgICAgICAgaWYodGhpcy5pZEZpZWxkICYmIHRoaXMuaWRGaWVsZC52YWx1ZUxpc3QuaW5jbHVkZXMoaWQpKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCF0aGlzLmlkRmllbGQgJiYgdGhpcy5maWVsZC52YWx1ZUxpc3QuaW5jbHVkZXMocmVsYXRlVmFsdWUpKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbHVlT2JqZWN0ID0ge30gYXMgYW55O1xuICAgICAgICB2YWx1ZU9iamVjdC5pZCA9IGlkO1xuICAgICAgICB2YWx1ZU9iamVjdFtyZWxhdGVOYW1lXSA9IHJlbGF0ZVZhbHVlO1xuXG4gICAgICAgIHRoaXMuZmllbGQudmFsdWVPYmplY3RBcnJheS5wdXNoKHZhbHVlT2JqZWN0KTtcbiAgICAgICAgdGhpcy5maWVsZC52YWx1ZUxpc3QucHVzaChyZWxhdGVWYWx1ZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuaWRGaWVsZCl7XG4gICAgICAgICAgICB0aGlzLmlkRmllbGQudmFsdWVMaXN0LnB1c2goaWQpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTZWFyY2hDcml0ZXJpYSh0aGlzLmlkRmllbGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVTZWFyY2hDcml0ZXJpYSh0aGlzLmZpZWxkKTtcblxuICAgICAgICBpZighdGhpcy5maWVsZC5jcml0ZXJpYS52YWx1ZU9iamVjdEFycmF5KXtcbiAgICAgICAgICAgIHRoaXMuZmllbGQuY3JpdGVyaWEudmFsdWVPYmplY3RBcnJheSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5maWVsZC5jcml0ZXJpYS52YWx1ZU9iamVjdEFycmF5LnB1c2godmFsdWVPYmplY3QpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB2YWx1ZSBvbiBmaWVsZCBjcml0ZXJpYSBhbmQgZm9ybVxuICAgICAqL1xuICAgIHByb3RlY3RlZCB1cGRhdGVTZWFyY2hDcml0ZXJpYShmaWVsZDogRmllbGQpOiB2b2lkIHtcbiAgICAgICAgZmllbGQuY3JpdGVyaWEub3BlcmF0b3IgPSAnPSc7XG4gICAgICAgIGZpZWxkLmNyaXRlcmlhLnZhbHVlcyA9IGZpZWxkLnZhbHVlTGlzdDtcbiAgICAgICAgZmllbGQuZm9ybUNvbnRyb2wuc2V0VmFsdWUoZmllbGQudmFsdWVMaXN0KTtcbiAgICAgICAgZmllbGQuZm9ybUNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93IHJlY29yZCBzZWxlY3Rpb24gbW9kYWxcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgc2hvd1NlbGVjdE1vZGFsKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBtb2RhbCA9IHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oUmVjb3JkTGlzdE1vZGFsQ29tcG9uZW50LCB7c2l6ZTogJ3hsJywgc2Nyb2xsYWJsZTogdHJ1ZX0pO1xuXG4gICAgICAgIG1vZGFsLmNvbXBvbmVudEluc3RhbmNlLm1vZHVsZSA9IHRoaXMuZ2V0UmVsYXRlZE1vZHVsZSgpO1xuXG4gICAgICAgIG1vZGFsLnJlc3VsdC50aGVuKChkYXRhOiBSZWNvcmRMaXN0TW9kYWxSZXN1bHQpID0+IHtcblxuICAgICAgICAgICAgaWYgKCFkYXRhIHx8ICFkYXRhLnNlbGVjdGlvbiB8fCAhZGF0YS5zZWxlY3Rpb24uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHJlY29yZCA9IHRoaXMuZ2V0U2VsZWN0ZWRSZWNvcmQoZGF0YSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGZvdW5kID0gdGhpcy5maWVsZC52YWx1ZU9iamVjdEFycmF5LmZpbmQoZWxlbWVudCA9PiBlbGVtZW50LmlkID09PSByZWNvcmQuaWQpO1xuXG4gICAgICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2V0SXRlbShyZWNvcmQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgU2VsZWN0ZWQgUmVjb3JkXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSBSZWNvcmRMaXN0TW9kYWxSZXN1bHRcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBSZWNvcmRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0U2VsZWN0ZWRSZWNvcmQoZGF0YTogUmVjb3JkTGlzdE1vZGFsUmVzdWx0KTogUmVjb3JkIHtcbiAgICAgICAgbGV0IGlkID0gJyc7XG4gICAgICAgIE9iamVjdC5rZXlzKGRhdGEuc2VsZWN0aW9uLnNlbGVjdGVkKS5zb21lKHNlbGVjdGVkID0+IHtcbiAgICAgICAgICAgIGlkID0gc2VsZWN0ZWQ7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHJlY29yZDogUmVjb3JkID0gbnVsbDtcblxuICAgICAgICBkYXRhLnJlY29yZHMuc29tZShyZWMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlYyAmJiByZWMuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgcmVjb3JkID0gcmVjO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVjb3JkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgcmVjb3JkIGFzIHRoZSBzZWxlY3RlZCBpdGVtXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVjb3JkIHRvIHNldFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBzZXRJdGVtKHJlY29yZDogUmVjb3JkKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGFnLmFwcGVuZFRhZyhyZWNvcmQuYXR0cmlidXRlcyk7XG4gICAgICAgIHRoaXMub25BZGQocmVjb3JkLmF0dHJpYnV0ZXMpO1xuICAgIH1cblxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPGRpdiBjbGFzcz1cImQtZmxleFwiPlxuICAgIDxkaXYgY2xhc3M9XCJmbGV4LWdyb3ctMVwiPlxuICAgICAgICA8dGFnLWlucHV0ICN0YWdcbiAgICAgICAgICAgICAgICAgICAoa2V5dXAuZW50ZXIpPVwic2VsZWN0Rmlyc3RFbGVtZW50KClcIlxuICAgICAgICAgICAgICAgICAgIChvbkFkZCk9XCJvbkFkZCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAob25CbHVyKT1cInJlc2V0U3RhdHVzKClcIlxuICAgICAgICAgICAgICAgICAgIChvblJlbW92ZSk9XCJvblJlbW92ZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInNlbGVjdGVkVGFnc1wiXG4gICAgICAgICAgICAgICAgICAgW2NsYXNzXT1cImdldEludmFsaWRDbGFzcygpXCJcbiAgICAgICAgICAgICAgICAgICBbY2xlYXJPbkJsdXJdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgW2lkZW50aWZ5QnldPVwiJ2lkJ1wiXG4gICAgICAgICAgICAgICAgICAgW2Rpc3BsYXlCeV09XCJnZXRSZWxhdGVGaWVsZE5hbWUoKVwiXG4gICAgICAgICAgICAgICAgICAgW2lucHV0Q2xhc3NdPVwiZ2V0SW52YWxpZENsYXNzKClcIlxuICAgICAgICAgICAgICAgICAgIFtvblRleHRDaGFuZ2VEZWJvdW5jZV09XCI1MDBcIlxuICAgICAgICAgICAgICAgICAgIFtvbmx5RnJvbUF1dG9jb21wbGV0ZV09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZ2V0UGxhY2Vob2xkZXJMYWJlbCgpXCJcbiAgICAgICAgICAgICAgICAgICBbc2Vjb25kYXJ5UGxhY2Vob2xkZXJdPVwiZ2V0UGxhY2Vob2xkZXJMYWJlbCgpXCI+XG4gICAgICAgICAgICA8dGFnLWlucHV0LWRyb3Bkb3duIFthdXRvY29tcGxldGVPYnNlcnZhYmxlXT1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpZGVudGlmeUJ5XT1cIidpZCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlzcGxheUJ5XT1cImdldFJlbGF0ZUZpZWxkTmFtZSgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2tlZXBPcGVuXT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Nob3dEcm9wZG93bklmRW1wdHldPVwidHJ1ZVwiPlxuICAgICAgICAgICAgPC90YWctaW5wdXQtZHJvcGRvd24+XG4gICAgICAgIDwvdGFnLWlucHV0PlxuICAgIDwvZGl2PlxuICAgPGRpdiBjbGFzcz1cInJlbGF0ZS1idG5cIj5cbiAgICAgICAgPHNjcm0tYnV0dG9uIFtjb25maWddPVwic2VsZWN0QnV0dG9uXCI+XG4gICAgICAgIDwvc2NybS1idXR0b24+XG4gICAgPC9kaXY+XG48L2Rpdj5cbjxzbWFsbCAqbmdJZj1cImdldE1lc3NhZ2UoKVwiIGNsYXNzPVwidGV4dC1kYW5nZXIgZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5cbiAgICA8c2NybS1sYWJlbCBbbGFiZWxLZXldPVwiZ2V0TWVzc2FnZSgpXCIgW21vZHVsZV09XCJtb2R1bGVcIj48L3Njcm0tbGFiZWw+XG48L3NtYWxsPlxuIl19