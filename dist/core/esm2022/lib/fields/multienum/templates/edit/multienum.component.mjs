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
import * as i5 from "ngx-chips";
import * as i6 from "@angular/forms";
const _c0 = ["tag"];
class MultiEnumEditFieldComponent extends BaseMultiEnumComponent {
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
        this.checkAndInitAsDynamicEnum();
        super.ngOnInit();
    }
    onAdd() {
        const value = this.selectedValues.map(option => option.value);
        this.field.valueList = value;
        this.field.formControl.setValue(value);
        this.field.formControl.markAsDirty();
        return;
    }
    onRemove() {
        const value = this.selectedValues.map(option => option.value);
        this.field.valueList = value;
        this.field.formControl.setValue(value);
        this.field.formControl.markAsDirty();
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
    static ɵfac = function MultiEnumEditFieldComponent_Factory(t) { return new (t || MultiEnumEditFieldComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i2.DataTypeFormatter), i0.ɵɵdirectiveInject(i3.FieldLogicManager), i0.ɵɵdirectiveInject(i4.FieldLogicDisplayManager)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MultiEnumEditFieldComponent, selectors: [["scrm-multienum-edit"]], viewQuery: function MultiEnumEditFieldComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tag = _t.first);
        } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 13, consts: [[3, "ngModel", "onlyFromAutocomplete", "clearOnBlur", "displayBy", "identifyBy", "placeholder", "secondaryPlaceholder", "inputClass", "ngModelChange", "onAdd", "onRemove", "keyup.enter"], ["tag", ""], [3, "displayBy", "identifyBy", "showDropdownIfEmpty", "keepOpen", "autocompleteItems"]], template: function MultiEnumEditFieldComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "tag-input", 0, 1);
            i0.ɵɵlistener("ngModelChange", function MultiEnumEditFieldComponent_Template_tag_input_ngModelChange_0_listener($event) { return ctx.selectedValues = $event; })("onAdd", function MultiEnumEditFieldComponent_Template_tag_input_onAdd_0_listener() { return ctx.onAdd(); })("onRemove", function MultiEnumEditFieldComponent_Template_tag_input_onRemove_0_listener() { return ctx.onRemove(); })("keyup.enter", function MultiEnumEditFieldComponent_Template_tag_input_keyup_enter_0_listener() { return ctx.selectFirstElement(); });
            i0.ɵɵelement(2, "tag-input-dropdown", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngModel", ctx.selectedValues)("onlyFromAutocomplete", true)("clearOnBlur", true)("displayBy", "label")("identifyBy", "value")("placeholder", ctx.getPlaceholderLabel())("secondaryPlaceholder", ctx.getPlaceholderLabel())("inputClass", ctx.getInvalidClass());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("displayBy", "label")("identifyBy", "value")("showDropdownIfEmpty", true)("keepOpen", false)("autocompleteItems", ctx.options);
        } }, dependencies: [i5.TagInputComponent, i5.TagInputDropdown, i6.NgControlStatus, i6.NgModel], encapsulation: 2 });
}
export { MultiEnumEditFieldComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MultiEnumEditFieldComponent, [{
        type: Component,
        args: [{ selector: 'scrm-multienum-edit', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<tag-input [(ngModel)]=\"selectedValues\"\n           [onlyFromAutocomplete]=\"true\"\n           [clearOnBlur]=\"true\"\n           [displayBy]=\"'label'\"\n           [identifyBy]=\"'value'\"\n           [placeholder]=\"getPlaceholderLabel()\"\n           [secondaryPlaceholder]=\"getPlaceholderLabel()\"\n           [inputClass]=\"getInvalidClass()\"\n           #tag\n           (onAdd)=\"onAdd()\"\n           (onRemove)=\"onRemove()\"\n           (keyup.enter)=\"selectFirstElement()\">\n    <tag-input-dropdown [displayBy]=\"'label'\"\n                        [identifyBy]=\"'value'\"\n                        [showDropdownIfEmpty]=\"true\"\n                        [keepOpen]=\"false\"\n                        [autocompleteItems]=\"this.options\">\n    </tag-input-dropdown>\n</tag-input>\n" }]
    }], function () { return [{ type: i1.LanguageStore }, { type: i2.DataTypeFormatter }, { type: i3.FieldLogicManager }, { type: i4.FieldLogicDisplayManager }]; }, { tag: [{
            type: ViewChild,
            args: ['tag']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGllbnVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9maWVsZHMvbXVsdGllbnVtL3RlbXBsYXRlcy9lZGl0L211bHRpZW51bS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL211bHRpZW51bS90ZW1wbGF0ZXMvZWRpdC9tdWx0aWVudW0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBR25ELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLHdDQUF3QyxDQUFDOzs7Ozs7Ozs7QUFNOUUsTUFLYSwyQkFBNEIsU0FBUSxzQkFBc0I7SUFLckQ7SUFDQTtJQUNBO0lBQ0E7SUFOSSxHQUFHLENBQW9CO0lBRXpDLFlBQ2MsU0FBd0IsRUFDeEIsYUFBZ0MsRUFDaEMsS0FBd0IsRUFDeEIsWUFBc0M7UUFFaEQsS0FBSyxDQUFDLFNBQVMsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBTDNDLGNBQVMsR0FBVCxTQUFTLENBQWU7UUFDeEIsa0JBQWEsR0FBYixhQUFhLENBQW1CO1FBQ2hDLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQ3hCLGlCQUFZLEdBQVosWUFBWSxDQUEwQjtJQUdwRCxDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1FBQ2pDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRU0sS0FBSztRQUNSLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFckMsT0FBTztJQUNYLENBQUM7SUFFTSxRQUFRO1FBQ1gsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVyQyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzdCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNaLENBQUM7SUFFTSxtQkFBbUI7UUFDdEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoRSxDQUFDO0lBRU0sa0JBQWtCO1FBQ3JCLE1BQU0sZ0JBQWdCLEdBQWEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQzNELElBQUksZ0JBQWdCLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUMvQixNQUFNLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDYixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUM1QjtJQUNMLENBQUM7cUZBbkRRLDJCQUEyQjs2REFBM0IsMkJBQTJCOzs7Ozs7WUNieEMsdUNBV2dEO1lBWHJDLGdLQUE0Qiw4RkFTbkIsV0FBTyxJQVRZLG9HQVVoQixjQUFVLElBVk0sMEdBV2Isd0JBQW9CLElBWFA7WUFZbkMsd0NBS3FCO1lBQ3pCLGlCQUFZOztZQWxCRCw0Q0FBNEIsOEJBQUEscUJBQUEsc0JBQUEsdUJBQUEsMENBQUEsbURBQUEscUNBQUE7WUFZZixlQUFxQjtZQUFyQixtQ0FBcUIsdUJBQUEsNkJBQUEsbUJBQUEsa0NBQUE7OztTRENoQywyQkFBMkI7dUZBQTNCLDJCQUEyQjtjQUx2QyxTQUFTOzJCQUNJLHFCQUFxQjt1S0FNYixHQUFHO2tCQUFwQixTQUFTO21CQUFDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUYWdJbnB1dENvbXBvbmVudH0gZnJvbSAnbmd4LWNoaXBzJztcbmltcG9ydCB7RGF0YVR5cGVGb3JtYXR0ZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL2Zvcm1hdHRlcnMvZGF0YS10eXBlLmZvcm1hdHRlci5zZXJ2aWNlJztcbmltcG9ydCB7QmFzZU11bHRpRW51bUNvbXBvbmVudH0gZnJvbSAnLi4vLi4vLi4vYmFzZS9iYXNlLW11bHRpZW51bS5jb21wb25lbnQnO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge1RhZ01vZGVsfSBmcm9tICduZ3gtY2hpcHMvY29yZS90YWctbW9kZWwnO1xuaW1wb3J0IHtGaWVsZExvZ2ljTWFuYWdlcn0gZnJvbSAnLi4vLi4vLi4vZmllbGQtbG9naWMvZmllbGQtbG9naWMubWFuYWdlcic7XG5pbXBvcnQge0ZpZWxkTG9naWNEaXNwbGF5TWFuYWdlcn0gZnJvbSAnLi4vLi4vLi4vZmllbGQtbG9naWMtZGlzcGxheS9maWVsZC1sb2dpYy1kaXNwbGF5Lm1hbmFnZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tbXVsdGllbnVtLWVkaXQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9tdWx0aWVudW0uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW11cbn0pXG5leHBvcnQgY2xhc3MgTXVsdGlFbnVtRWRpdEZpZWxkQ29tcG9uZW50IGV4dGVuZHMgQmFzZU11bHRpRW51bUNvbXBvbmVudCB7XG5cbiAgICBAVmlld0NoaWxkKCd0YWcnKSB0YWc6IFRhZ0lucHV0Q29tcG9uZW50O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBsYW5ndWFnZXM6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCB0eXBlRm9ybWF0dGVyOiBEYXRhVHlwZUZvcm1hdHRlcixcbiAgICAgICAgcHJvdGVjdGVkIGxvZ2ljOiBGaWVsZExvZ2ljTWFuYWdlcixcbiAgICAgICAgcHJvdGVjdGVkIGxvZ2ljRGlzcGxheTogRmllbGRMb2dpY0Rpc3BsYXlNYW5hZ2VyXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKGxhbmd1YWdlcywgdHlwZUZvcm1hdHRlciwgbG9naWMsIGxvZ2ljRGlzcGxheSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2hlY2tBbmRJbml0QXNEeW5hbWljRW51bSgpO1xuICAgICAgICBzdXBlci5uZ09uSW5pdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkFkZCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNlbGVjdGVkVmFsdWVzLm1hcChvcHRpb24gPT4gb3B0aW9uLnZhbHVlKTtcbiAgICAgICAgdGhpcy5maWVsZC52YWx1ZUxpc3QgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5maWVsZC5mb3JtQ29udHJvbC5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIHRoaXMuZmllbGQuZm9ybUNvbnRyb2wubWFya0FzRGlydHkoKTtcblxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcHVibGljIG9uUmVtb3ZlKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2VsZWN0ZWRWYWx1ZXMubWFwKG9wdGlvbiA9PiBvcHRpb24udmFsdWUpO1xuICAgICAgICB0aGlzLmZpZWxkLnZhbHVlTGlzdCA9IHZhbHVlO1xuICAgICAgICB0aGlzLmZpZWxkLmZvcm1Db250cm9sLnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgdGhpcy5maWVsZC5mb3JtQ29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50YWcuZm9jdXModHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLnRhZy5kcm9wZG93bi5zaG93KCk7XG4gICAgICAgIH0sIDIwMCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFBsYWNlaG9sZGVyTGFiZWwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGFuZ3VhZ2VzLmdldEFwcFN0cmluZygnTEJMX1NFTEVDVF9JVEVNJykgfHwgJyc7XG4gICAgfVxuXG4gICAgcHVibGljIHNlbGVjdEZpcnN0RWxlbWVudCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZmlsdGVyZWRFbGVtZW50czogVGFnTW9kZWwgPSB0aGlzLnRhZy5kcm9wZG93bi5pdGVtcztcbiAgICAgICAgaWYgKGZpbHRlcmVkRWxlbWVudHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBmaXJzdEVsZW1lbnQgPSBmaWx0ZXJlZEVsZW1lbnRzWzBdO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlcy5wdXNoKGZpcnN0RWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLm9uQWRkKCk7XG4gICAgICAgICAgICB0aGlzLnRhZy5kcm9wZG93bi5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjx0YWctaW5wdXQgWyhuZ01vZGVsKV09XCJzZWxlY3RlZFZhbHVlc1wiXG4gICAgICAgICAgIFtvbmx5RnJvbUF1dG9jb21wbGV0ZV09XCJ0cnVlXCJcbiAgICAgICAgICAgW2NsZWFyT25CbHVyXT1cInRydWVcIlxuICAgICAgICAgICBbZGlzcGxheUJ5XT1cIidsYWJlbCdcIlxuICAgICAgICAgICBbaWRlbnRpZnlCeV09XCIndmFsdWUnXCJcbiAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImdldFBsYWNlaG9sZGVyTGFiZWwoKVwiXG4gICAgICAgICAgIFtzZWNvbmRhcnlQbGFjZWhvbGRlcl09XCJnZXRQbGFjZWhvbGRlckxhYmVsKClcIlxuICAgICAgICAgICBbaW5wdXRDbGFzc109XCJnZXRJbnZhbGlkQ2xhc3MoKVwiXG4gICAgICAgICAgICN0YWdcbiAgICAgICAgICAgKG9uQWRkKT1cIm9uQWRkKClcIlxuICAgICAgICAgICAob25SZW1vdmUpPVwib25SZW1vdmUoKVwiXG4gICAgICAgICAgIChrZXl1cC5lbnRlcik9XCJzZWxlY3RGaXJzdEVsZW1lbnQoKVwiPlxuICAgIDx0YWctaW5wdXQtZHJvcGRvd24gW2Rpc3BsYXlCeV09XCInbGFiZWwnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtpZGVudGlmeUJ5XT1cIid2YWx1ZSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3Nob3dEcm9wZG93bklmRW1wdHldPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBba2VlcE9wZW5dPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2F1dG9jb21wbGV0ZUl0ZW1zXT1cInRoaXMub3B0aW9uc1wiPlxuICAgIDwvdGFnLWlucHV0LWRyb3Bkb3duPlxuPC90YWctaW5wdXQ+XG4iXX0=