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
import { BaseMultiEnumComponent } from '../../../base/base-multienum.component';
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/language/language.store";
import * as i2 from "../../../../services/formatters/data-type.formatter.service";
import * as i3 from "../../../field-logic/field-logic.manager";
import * as i4 from "../../../field-logic-display/field-logic-display.manager";
import * as i5 from "@angular/forms";
import * as i6 from "ngx-chips";
const _c0 = ["tag"];
class MultiEnumFilterFieldComponent extends BaseMultiEnumComponent {
    languages;
    typeFormatter;
    logic;
    logicDisplay;
    tag;
    constructor(languages, typeFormatter, logic, logicDisplay) {
        super(languages, typeFormatter, logic, logicDisplay);
        this.languages = languages;
        this.typeFormatter = typeFormatter;
        this.logic = logic;
        this.logicDisplay = logicDisplay;
    }
    ngOnInit() {
        this.field.valueList = [];
        if (this.field.criteria.values && this.field.criteria.values.length > 0) {
            this.field.valueList = this.field.criteria.values;
        }
        super.ngOnInit();
    }
    onAdd() {
        const value = this.selectedValues.map(option => option.value);
        this.field.valueList = value;
        this.field.formControl.setValue(value);
        this.field.formControl.markAsDirty();
        this.field.criteria.operator = '=';
        this.field.criteria.values = value;
        return;
    }
    onRemove() {
        let value = this.selectedValues.map(option => option.value);
        if (!value) {
            value = [];
        }
        this.field.valueList = value;
        this.field.formControl.setValue(value);
        this.field.formControl.markAsDirty();
        this.field.criteria.operator = '=';
        this.field.criteria.values = value;
        setTimeout(() => {
            this.tag.focus(true, true);
            this.tag.dropdown.show();
        }, 200);
    }
    getPlaceholderLabel() {
        return this.languages.getAppString('LBL_SELECT_ITEM') || '';
    }
    selectFirstElement() {
        const filteredElements = this.tag.dropdown.items;
        if (filteredElements.length !== 0) {
            const firstElement = filteredElements[0];
            this.selectedValues.push(firstElement);
            this.onAdd();
            this.tag.dropdown.hide();
        }
    }
    static ɵfac = function MultiEnumFilterFieldComponent_Factory(t) { return new (t || MultiEnumFilterFieldComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i2.DataTypeFormatter), i0.ɵɵdirectiveInject(i3.FieldLogicManager), i0.ɵɵdirectiveInject(i4.FieldLogicDisplayManager)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MultiEnumFilterFieldComponent, selectors: [["scrm-multienum-filter"]], viewQuery: function MultiEnumFilterFieldComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tag = _t.first);
        } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 13, consts: [[3, "ngModel", "onlyFromAutocomplete", "clearOnBlur", "displayBy", "identifyBy", "placeholder", "secondaryPlaceholder", "inputClass", "ngModelChange", "onAdd", "onRemove", "keyup.enter"], ["tag", ""], [3, "displayBy", "identifyBy", "showDropdownIfEmpty", "keepOpen", "autocompleteItems"]], template: function MultiEnumFilterFieldComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "tag-input", 0, 1);
            i0.ɵɵlistener("ngModelChange", function MultiEnumFilterFieldComponent_Template_tag_input_ngModelChange_0_listener($event) { return ctx.selectedValues = $event; })("onAdd", function MultiEnumFilterFieldComponent_Template_tag_input_onAdd_0_listener() { return ctx.onAdd(); })("onRemove", function MultiEnumFilterFieldComponent_Template_tag_input_onRemove_0_listener() { return ctx.onRemove(); })("keyup.enter", function MultiEnumFilterFieldComponent_Template_tag_input_keyup_enter_0_listener() { return ctx.selectFirstElement(); });
            i0.ɵɵelement(2, "tag-input-dropdown", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngModel", ctx.selectedValues)("onlyFromAutocomplete", true)("clearOnBlur", true)("displayBy", "label")("identifyBy", "value")("placeholder", ctx.getPlaceholderLabel())("secondaryPlaceholder", ctx.getPlaceholderLabel())("inputClass", ctx.getInvalidClass());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("displayBy", "label")("identifyBy", "value")("showDropdownIfEmpty", true)("keepOpen", false)("autocompleteItems", ctx.options);
        } }, dependencies: [i5.NgControlStatus, i5.NgModel, i6.TagInputComponent, i6.TagInputDropdown], encapsulation: 2 });
}
export { MultiEnumFilterFieldComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MultiEnumFilterFieldComponent, [{
        type: Component,
        args: [{ selector: 'scrm-multienum-filter', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<tag-input [(ngModel)]=\"selectedValues\"\n           [onlyFromAutocomplete]=\"true\"\n           [clearOnBlur]=\"true\"\n           [displayBy]=\"'label'\"\n           [identifyBy]=\"'value'\"\n           [placeholder]=\"getPlaceholderLabel()\"\n           [secondaryPlaceholder]=\"getPlaceholderLabel()\"\n           [inputClass]=\"getInvalidClass()\"\n           #tag\n           (onAdd)=\"onAdd()\"\n           (onRemove)=\"onRemove()\"\n           (keyup.enter)=\"selectFirstElement()\">\n<tag-input-dropdown [displayBy]=\"'label'\"\n                        [identifyBy]=\"'value'\"\n                        [showDropdownIfEmpty]=\"true\"\n                        [keepOpen]=\"false\"\n                        [autocompleteItems]=\"this.options\">\n    </tag-input-dropdown>\n</tag-input>\n" }]
    }], function () { return [{ type: i1.LanguageStore }, { type: i2.DataTypeFormatter }, { type: i3.FieldLogicManager }, { type: i4.FieldLogicDisplayManager }]; }, { tag: [{
            type: ViewChild,
            args: ['tag']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGllbnVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9maWVsZHMvbXVsdGllbnVtL3RlbXBsYXRlcy9maWx0ZXIvbXVsdGllbnVtLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9maWVsZHMvbXVsdGllbnVtL3RlbXBsYXRlcy9maWx0ZXIvbXVsdGllbnVtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFxQixTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFJdEUsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sd0NBQXdDLENBQUM7Ozs7Ozs7OztBQUs5RSxNQUthLDZCQUE4QixTQUFRLHNCQUFzQjtJQUt2RDtJQUNBO0lBQ0E7SUFDQTtJQU5JLEdBQUcsQ0FBb0I7SUFFekMsWUFDYyxTQUF3QixFQUN4QixhQUFnQyxFQUNoQyxLQUF3QixFQUN4QixZQUFzQztRQUVoRCxLQUFLLENBQUMsU0FBUyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFMM0MsY0FBUyxHQUFULFNBQVMsQ0FBZTtRQUN4QixrQkFBYSxHQUFiLGFBQWEsQ0FBbUI7UUFDaEMsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQTBCO0lBR3BELENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBRTFCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdB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O3VGQUE3Qiw2QkFBNkI7Y0FMekMsU0FBUzsyQkFDSSx1QkFBdUI7dUtBTWYsR0FBRztrQkFBcEIsU0FBUzttQkFBQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RhZ0lucHV0Q29tcG9uZW50fSBmcm9tICduZ3gtY2hpcHMnO1xuaW1wb3J0IHtEYXRhVHlwZUZvcm1hdHRlcn0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvZm9ybWF0dGVycy9kYXRhLXR5cGUuZm9ybWF0dGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge0Jhc2VNdWx0aUVudW1Db21wb25lbnR9IGZyb20gJy4uLy4uLy4uL2Jhc2UvYmFzZS1tdWx0aWVudW0uY29tcG9uZW50JztcbmltcG9ydCB7VGFnTW9kZWx9IGZyb20gJ25neC1jaGlwcy9jb3JlL3RhZy1tb2RlbCc7XG5pbXBvcnQge0ZpZWxkTG9naWNNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi9maWVsZC1sb2dpYy9maWVsZC1sb2dpYy5tYW5hZ2VyJztcbmltcG9ydCB7RmllbGRMb2dpY0Rpc3BsYXlNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi9maWVsZC1sb2dpYy1kaXNwbGF5L2ZpZWxkLWxvZ2ljLWRpc3BsYXkubWFuYWdlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1tdWx0aWVudW0tZmlsdGVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbXVsdGllbnVtLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE11bHRpRW51bUZpbHRlckZpZWxkQ29tcG9uZW50IGV4dGVuZHMgQmFzZU11bHRpRW51bUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIEBWaWV3Q2hpbGQoJ3RhZycpIHRhZzogVGFnSW5wdXRDb21wb25lbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlczogTGFuZ3VhZ2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHR5cGVGb3JtYXR0ZXI6IERhdGFUeXBlRm9ybWF0dGVyLFxuICAgICAgICBwcm90ZWN0ZWQgbG9naWM6IEZpZWxkTG9naWNNYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgbG9naWNEaXNwbGF5OiBGaWVsZExvZ2ljRGlzcGxheU1hbmFnZXJcbiAgICApIHtcbiAgICAgICAgc3VwZXIobGFuZ3VhZ2VzLCB0eXBlRm9ybWF0dGVyLCBsb2dpYywgbG9naWNEaXNwbGF5KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5maWVsZC52YWx1ZUxpc3QgPSBbXTtcblxuICAgICAgICBpZiAodGhpcy5maWVsZC5jcml0ZXJpYS52YWx1ZXMgJiYgdGhpcy5maWVsZC5jcml0ZXJpYS52YWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5maWVsZC52YWx1ZUxpc3QgPSB0aGlzLmZpZWxkLmNyaXRlcmlhLnZhbHVlcztcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLm5nT25Jbml0KCk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgb25BZGQoKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNlbGVjdGVkVmFsdWVzLm1hcChvcHRpb24gPT4gb3B0aW9uLnZhbHVlKTtcbiAgICAgICAgdGhpcy5maWVsZC52YWx1ZUxpc3QgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5maWVsZC5mb3JtQ29udHJvbC5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIHRoaXMuZmllbGQuZm9ybUNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICAgICAgdGhpcy5maWVsZC5jcml0ZXJpYS5vcGVyYXRvciA9ICc9JztcbiAgICAgICAgdGhpcy5maWVsZC5jcml0ZXJpYS52YWx1ZXMgPSB2YWx1ZTtcblxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcHVibGljIG9uUmVtb3ZlKCk6IHZvaWQge1xuXG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMuc2VsZWN0ZWRWYWx1ZXMubWFwKG9wdGlvbiA9PiBvcHRpb24udmFsdWUpO1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5maWVsZC52YWx1ZUxpc3QgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5maWVsZC5mb3JtQ29udHJvbC5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIHRoaXMuZmllbGQuZm9ybUNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICAgICAgdGhpcy5maWVsZC5jcml0ZXJpYS5vcGVyYXRvciA9ICc9JztcbiAgICAgICAgdGhpcy5maWVsZC5jcml0ZXJpYS52YWx1ZXMgPSB2YWx1ZTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRhZy5mb2N1cyh0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMudGFnLmRyb3Bkb3duLnNob3coKTtcbiAgICAgICAgfSwgMjAwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UGxhY2Vob2xkZXJMYWJlbCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5sYW5ndWFnZXMuZ2V0QXBwU3RyaW5nKCdMQkxfU0VMRUNUX0lURU0nKSB8fCAnJztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VsZWN0Rmlyc3RFbGVtZW50KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBmaWx0ZXJlZEVsZW1lbnRzOiBUYWdNb2RlbCA9IHRoaXMudGFnLmRyb3Bkb3duLml0ZW1zO1xuICAgICAgICBpZiAoZmlsdGVyZWRFbGVtZW50cy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0RWxlbWVudCA9IGZpbHRlcmVkRWxlbWVudHNbMF07XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVmFsdWVzLnB1c2goZmlyc3RFbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMub25BZGQoKTtcbiAgICAgICAgICAgIHRoaXMudGFnLmRyb3Bkb3duLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPHRhZy1pbnB1dCBbKG5nTW9kZWwpXT1cInNlbGVjdGVkVmFsdWVzXCJcbiAgICAgICAgICAgW29ubHlGcm9tQXV0b2NvbXBsZXRlXT1cInRydWVcIlxuICAgICAgICAgICBbY2xlYXJPbkJsdXJdPVwidHJ1ZVwiXG4gICAgICAgICAgIFtkaXNwbGF5QnldPVwiJ2xhYmVsJ1wiXG4gICAgICAgICAgIFtpZGVudGlmeUJ5XT1cIid2YWx1ZSdcIlxuICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZ2V0UGxhY2Vob2xkZXJMYWJlbCgpXCJcbiAgICAgICAgICAgW3NlY29uZGFyeVBsYWNlaG9sZGVyXT1cImdldFBsYWNlaG9sZGVyTGFiZWwoKVwiXG4gICAgICAgICAgIFtpbnB1dENsYXNzXT1cImdldEludmFsaWRDbGFzcygpXCJcbiAgICAgICAgICAgI3RhZ1xuICAgICAgICAgICAob25BZGQpPVwib25BZGQoKVwiXG4gICAgICAgICAgIChvblJlbW92ZSk9XCJvblJlbW92ZSgpXCJcbiAgICAgICAgICAgKGtleXVwLmVudGVyKT1cInNlbGVjdEZpcnN0RWxlbWVudCgpXCI+XG48dGFnLWlucHV0LWRyb3Bkb3duIFtkaXNwbGF5QnldPVwiJ2xhYmVsJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBbaWRlbnRpZnlCeV09XCIndmFsdWUnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtzaG93RHJvcGRvd25JZkVtcHR5XT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2tlZXBPcGVuXT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdXRvY29tcGxldGVJdGVtc109XCJ0aGlzLm9wdGlvbnNcIj5cbiAgICA8L3RhZy1pbnB1dC1kcm9wZG93bj5cbjwvdGFnLWlucHV0PlxuIl19