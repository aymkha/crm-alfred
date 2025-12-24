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
import { BaseFieldComponent } from './base-field.component';
import { Component } from '@angular/core';
import { isEmptyString, isVoid } from 'common';
import * as i0 from "@angular/core";
import * as i1 from "../../store/language/language.store";
import * as i2 from "../../services/formatters/data-type.formatter.service";
import * as i3 from "../field-logic/field-logic.manager";
import * as i4 from "../field-logic-display/field-logic-display.manager";
class BaseEnumComponent extends BaseFieldComponent {
    languages;
    typeFormatter;
    logic;
    logicDisplay;
    selectedValues = [];
    valueLabel = '';
    optionsMap;
    options = [];
    labels;
    subs = [];
    mappedOptions;
    isDynamicEnum = false;
    constructor(languages, typeFormatter, logic, logicDisplay) {
        super(typeFormatter, logic, logicDisplay);
        this.languages = languages;
        this.typeFormatter = typeFormatter;
        this.logic = logic;
        this.logicDisplay = logicDisplay;
    }
    ngOnInit() {
        super.ngOnInit();
        const options$ = this?.field?.metadata?.options$ ?? null;
        if (options$) {
            this.subs.push(this.field.metadata.options$.subscribe((options) => {
                this.buildProvidedOptions(options);
                this.initValue();
            }));
            return;
        }
        const options = this?.field?.definition?.options ?? null;
        if (options) {
            this.subs.push(this.languages.vm$.subscribe((strings) => {
                this.buildAppStringListOptions(strings.appListStrings);
                this.initValue();
            }));
        }
        if (!options && !options$) {
            this.initValue();
        }
    }
    ngOnDestroy() {
        this.isDynamicEnum = false;
        this.subs.forEach(sub => sub.unsubscribe());
    }
    getInvalidClass() {
        if (this.field.formControl && this.field.formControl.invalid && this.field.formControl.touched) {
            return 'is-invalid';
        }
        return '';
    }
    buildProvidedOptions(options) {
        this.options = options;
        this.optionsMap = {};
        options.forEach(option => {
            this.optionsMap[option.value] = option.label;
        });
    }
    buildAppStringListOptions(appStrings) {
        this.optionsMap = {};
        this.addExtraOptions();
        if (appStrings && this.field.definition.options && appStrings[this.field.definition.options]) {
            const options = appStrings[this.field.definition.options];
            if (this.options && Object.keys(this.options)) {
                this.optionsMap = { ...this.optionsMap, ...options };
            }
        }
        this.buildOptionsArray(appStrings);
    }
    addExtraOptions() {
        const extraOptions = (this.field.metadata && this.field.metadata.extraOptions) || [];
        extraOptions.forEach((item) => {
            if (isVoid(item.value)) {
                return;
            }
            let label = item.label || '';
            if (item.labelKey) {
                label = this.languages.getFieldLabel(item.labelKey);
            }
            this.optionsMap[item.value] = label;
        });
    }
    buildOptionsArray(appStrings) {
        this.options = [];
        Object.keys(this.optionsMap).forEach(key => {
            this.options.push({
                value: key,
                label: this.optionsMap[key]
            });
        });
        if (this.isDynamicEnum) {
            this.buildDynamicEnumOptions(appStrings);
        }
    }
    initValue() {
        this.selectedValues = [];
        if (this.field.criteria) {
            this.initValueLabel();
            return;
        }
        if (!this.field.value) {
            this.initEnumDefault();
            return;
        }
        if (typeof this.field.value !== 'string') {
            return;
        }
        if (!this.optionsMap) {
            return;
        }
        if (typeof this.optionsMap[this.field.value] !== 'string') {
            return;
        }
        this.initValueLabel();
    }
    initValueLabel() {
        const fieldValue = this.field.value || this.field.criteria?.target || undefined;
        if (fieldValue !== undefined) {
            this.valueLabel = this.optionsMap[fieldValue];
            this.selectedValues.push({
                value: fieldValue,
                label: this.valueLabel
            });
        }
    }
    /**
     *  Initialize the default value for the enum
     *
     *  @returns {void}
     *  @description set default enum value, if defined in vardefs
     * */
    initEnumDefault() {
        if (!isEmptyString(this.record?.id)) {
            this.field?.formControl.setValue('');
            return;
        }
        let defaultVal = this.field?.definition?.default;
        if (typeof defaultVal === 'string') {
            defaultVal = defaultVal.trim();
        }
        if (!defaultVal) {
            this.field.formControl.setValue('');
            return;
        }
        this.selectedValues.push({
            value: defaultVal,
            label: this.optionsMap[defaultVal]
        });
        this.initEnumDefaultFieldValues(defaultVal);
    }
    initEnumDefaultFieldValues(defaultVal) {
        if (this.field.type === 'multienum') {
            const defaultValues = this.selectedValues.map(option => option.value);
            this.field.valueList = defaultValues;
            this.field.formControl.setValue(defaultValues);
        }
        else {
            this.field.value = defaultVal;
            this.field.formControl.setValue(defaultVal);
        }
        this.field.formControl.markAsDirty();
    }
    checkAndInitAsDynamicEnum() {
        const definition = (this.field && this.field.definition) || {};
        const dynamic = (definition && definition.dynamic) || false;
        const parentEnumKey = (definition && definition.parentenum) || '';
        const fields = (this.record && this.record.fields) || null;
        if (dynamic && parentEnumKey && fields) {
            this.isDynamicEnum = true;
            const parentEnum = fields[parentEnumKey];
            if (parentEnum) {
                this.subscribeToParentValueChanges(parentEnum);
            }
        }
    }
    buildDynamicEnumOptions(appStrings) {
        const parentEnum = this.record.fields[this.field.definition.parentenum];
        if (parentEnum) {
            const parentOptionMap = appStrings[parentEnum.definition.options];
            if (parentOptionMap && Object.keys(parentOptionMap).length !== 0) {
                this.mappedOptions = this.createParentChildOptionsMap(parentOptionMap, this.options);
                let parentValues = [];
                if (parentEnum.definition.type === 'multienum') {
                    parentValues = parentEnum.valueList;
                }
                else {
                    parentValues.push(parentEnum.value);
                }
                this.options = this.filterMatchingOptions(parentValues);
            }
        }
    }
    filterMatchingOptions(values) {
        let filteredOptions = [];
        if (!values || !values.length) {
            return [];
        }
        values.forEach(value => {
            if (!this.mappedOptions[value]) {
                return;
            }
            filteredOptions = filteredOptions.concat([...this.mappedOptions[value]]);
        });
        return filteredOptions;
    }
    createParentChildOptionsMap(parentOptions, childOptions) {
        const mappedOptions = {};
        Object.keys(parentOptions).forEach(key => {
            mappedOptions[key] = childOptions.filter(option => String(option.value).startsWith(key));
        });
        return mappedOptions;
    }
    subscribeToParentValueChanges(parentEnum) {
        if (parentEnum.formControl) {
            this.subs.push(parentEnum.formControl.valueChanges.subscribe(values => {
                if (typeof values === 'string') {
                    values = [values];
                }
                // Reset selected values on Form Control
                this.field.value = '';
                this.field.formControl.setValue('');
                // Rebuild available enum options
                this.options = this.filterMatchingOptions(values);
                this.initValue();
            }));
        }
    }
    static ɵfac = function BaseEnumComponent_Factory(t) { return new (t || BaseEnumComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i2.DataTypeFormatter), i0.ɵɵdirectiveInject(i3.FieldLogicManager), i0.ɵɵdirectiveInject(i4.FieldLogicDisplayManager)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BaseEnumComponent, selectors: [["ng-component"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function BaseEnumComponent_Template(rf, ctx) { }, encapsulation: 2 });
}
export { BaseEnumComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseEnumComponent, [{
        type: Component,
        args: [{ template: '' }]
    }], function () { return [{ type: i1.LanguageStore }, { type: i2.DataTypeFormatter }, { type: i3.FieldLogicManager }, { type: i4.FieldLogicDisplayManager }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1lbnVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9maWVsZHMvYmFzZS9iYXNlLWVudW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUMsU0FBUyxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUUzRCxPQUFPLEVBQXlCLGFBQWEsRUFBRSxNQUFNLEVBQVMsTUFBTSxRQUFRLENBQUM7Ozs7OztBQVc3RSxNQUNhLGlCQUFrQixTQUFRLGtCQUFrQjtJQVd2QztJQUNBO0lBQ0E7SUFDQTtJQWJkLGNBQWMsR0FBYSxFQUFFLENBQUM7SUFDOUIsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUNoQixVQUFVLENBQW9CO0lBQzlCLE9BQU8sR0FBYSxFQUFFLENBQUM7SUFDdkIsTUFBTSxDQUFvQjtJQUNoQixJQUFJLEdBQW1CLEVBQUUsQ0FBQztJQUMxQixhQUFhLENBQThCO0lBQzNDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFFaEMsWUFDYyxTQUF3QixFQUN4QixhQUFnQyxFQUNoQyxLQUF3QixFQUN4QixZQUFzQztRQUVoRCxLQUFLLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztRQUxoQyxjQUFTLEdBQVQsU0FBUyxDQUFlO1FBQ3hCLGtCQUFhLEdBQWIsYUFBYSxDQUFtQjtRQUNoQyxVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBMEI7SUFHcEQsQ0FBQztJQUVELFFBQVE7UUFFSixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFakIsTUFBTSxRQUFRLEdBQUcsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFB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RVMsNkJBQTZCLENBQUMsVUFBaUI7UUFDckQsSUFBSSxVQUFVLENBQUMsV0FBVyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFFbEUsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7b0JBQzVCLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUNyQjtnQkFFRCx3Q0FBd0M7Z0JBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUVwQyxpQ0FBaUM7Z0JBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUVsRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDckIsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNQO0lBQ0wsQ0FBQzsyRUF0U1EsaUJBQWlCOzZEQUFqQixpQkFBaUI7O1NBQWpCLGlCQUFpQjt1RkFBakIsaUJBQWlCO2NBRDdCLFNBQVM7ZUFBQyxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7QmFzZUZpZWxkQ29tcG9uZW50fSBmcm9tICcuL2Jhc2UtZmllbGQuY29tcG9uZW50JztcbmltcG9ydCB7Q29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0ZpZWxkLCBGaWVsZERlZmluaXRpb24sIGlzRW1wdHlTdHJpbmcsIGlzVm9pZCwgT3B0aW9ufSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtEYXRhVHlwZUZvcm1hdHRlcn0gZnJvbSAnLi4vLi4vc2VydmljZXMvZm9ybWF0dGVycy9kYXRhLXR5cGUuZm9ybWF0dGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgICBMYW5ndWFnZUxpc3RTdHJpbmdNYXAsXG4gICAgTGFuZ3VhZ2VTdG9yZSxcbiAgICBMYW5ndWFnZVN0cmluZ01hcCxcbiAgICBMYW5ndWFnZVN0cmluZ3Ncbn0gZnJvbSAnLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtGaWVsZExvZ2ljTWFuYWdlcn0gZnJvbSAnLi4vZmllbGQtbG9naWMvZmllbGQtbG9naWMubWFuYWdlcic7XG5pbXBvcnQge0ZpZWxkTG9naWNEaXNwbGF5TWFuYWdlcn0gZnJvbSAnLi4vZmllbGQtbG9naWMtZGlzcGxheS9maWVsZC1sb2dpYy1kaXNwbGF5Lm1hbmFnZXInO1xuXG5AQ29tcG9uZW50KHt0ZW1wbGF0ZTogJyd9KVxuZXhwb3J0IGNsYXNzIEJhc2VFbnVtQ29tcG9uZW50IGV4dGVuZHMgQmFzZUZpZWxkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHNlbGVjdGVkVmFsdWVzOiBPcHRpb25bXSA9IFtdO1xuICAgIHZhbHVlTGFiZWwgPSAnJztcbiAgICBvcHRpb25zTWFwOiBMYW5ndWFnZVN0cmluZ01hcDtcbiAgICBvcHRpb25zOiBPcHRpb25bXSA9IFtdO1xuICAgIGxhYmVsczogTGFuZ3VhZ2VTdHJpbmdNYXA7XG4gICAgcHJvdGVjdGVkIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gICAgcHJvdGVjdGVkIG1hcHBlZE9wdGlvbnM6IHsgW2tleTogc3RyaW5nXTogT3B0aW9uW10gfTtcbiAgICBwcm90ZWN0ZWQgaXNEeW5hbWljRW51bSA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBsYW5ndWFnZXM6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCB0eXBlRm9ybWF0dGVyOiBEYXRhVHlwZUZvcm1hdHRlcixcbiAgICAgICAgcHJvdGVjdGVkIGxvZ2ljOiBGaWVsZExvZ2ljTWFuYWdlcixcbiAgICAgICAgcHJvdGVjdGVkIGxvZ2ljRGlzcGxheTogRmllbGRMb2dpY0Rpc3BsYXlNYW5hZ2VyXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKHR5cGVGb3JtYXR0ZXIsIGxvZ2ljLCBsb2dpY0Rpc3BsYXkpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgICAgIHN1cGVyLm5nT25Jbml0KCk7XG5cbiAgICAgICAgY29uc3Qgb3B0aW9ucyQgPSB0aGlzPy5maWVsZD8ubWV0YWRhdGE/Lm9wdGlvbnMkID8/IG51bGw7XG4gICAgICAgIGlmIChvcHRpb25zJCkge1xuICAgICAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5maWVsZC5tZXRhZGF0YS5vcHRpb25zJC5zdWJzY3JpYmUoKG9wdGlvbnM6IE9wdGlvbltdKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZFByb3ZpZGVkT3B0aW9ucyhvcHRpb25zKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdFZhbHVlKCk7XG5cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXM/LmZpZWxkPy5kZWZpbml0aW9uPy5vcHRpb25zID8/IG51bGw7XG4gICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLmxhbmd1YWdlcy52bSQuc3Vic2NyaWJlKChzdHJpbmdzOiBMYW5ndWFnZVN0cmluZ3MpID0+IHtcblxuICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRBcHBTdHJpbmdMaXN0T3B0aW9ucyhzdHJpbmdzLmFwcExpc3RTdHJpbmdzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRWYWx1ZSgpO1xuXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW9wdGlvbnMgJiYgIW9wdGlvbnMkKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRWYWx1ZSgpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pc0R5bmFtaWNFbnVtID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3Vicy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxuXG4gICAgZ2V0SW52YWxpZENsYXNzKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLmZpZWxkLmZvcm1Db250cm9sICYmIHRoaXMuZmllbGQuZm9ybUNvbnRyb2wuaW52YWxpZCAmJiB0aGlzLmZpZWxkLmZvcm1Db250cm9sLnRvdWNoZWQpIHtcbiAgICAgICAgICAgIHJldHVybiAnaXMtaW52YWxpZCc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBidWlsZFByb3ZpZGVkT3B0aW9ucyhvcHRpb25zOiBPcHRpb25bXSk6IHZvaWQge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLm9wdGlvbnNNYXAgPSB7fTtcblxuICAgICAgICBvcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9uc01hcFtvcHRpb24udmFsdWVdID0gb3B0aW9uLmxhYmVsO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHByb3RlY3RlZCBidWlsZEFwcFN0cmluZ0xpc3RPcHRpb25zKGFwcFN0cmluZ3M6IExhbmd1YWdlTGlzdFN0cmluZ01hcCk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMub3B0aW9uc01hcCA9IHt9IGFzIExhbmd1YWdlU3RyaW5nTWFwO1xuICAgICAgICB0aGlzLmFkZEV4dHJhT3B0aW9ucygpO1xuXG4gICAgICAgIGlmIChhcHBTdHJpbmdzICYmIHRoaXMuZmllbGQuZGVmaW5pdGlvbi5vcHRpb25zICYmIGFwcFN0cmluZ3NbdGhpcy5maWVsZC5kZWZpbml0aW9uLm9wdGlvbnNdKSB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0gYXBwU3RyaW5nc1t0aGlzLmZpZWxkLmRlZmluaXRpb24ub3B0aW9uc10gYXMgTGFuZ3VhZ2VTdHJpbmdNYXA7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMgJiYgT2JqZWN0LmtleXModGhpcy5vcHRpb25zKSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uc01hcCA9IHsuLi50aGlzLm9wdGlvbnNNYXAsIC4uLm9wdGlvbnN9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5idWlsZE9wdGlvbnNBcnJheShhcHBTdHJpbmdzKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWRkRXh0cmFPcHRpb25zKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBleHRyYU9wdGlvbnMgPSAodGhpcy5maWVsZC5tZXRhZGF0YSAmJiB0aGlzLmZpZWxkLm1ldGFkYXRhLmV4dHJhT3B0aW9ucykgfHwgW107XG5cbiAgICAgICAgZXh0cmFPcHRpb25zLmZvckVhY2goKGl0ZW06IE9wdGlvbikgPT4ge1xuICAgICAgICAgICAgaWYgKGlzVm9pZChpdGVtLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGxhYmVsID0gaXRlbS5sYWJlbCB8fCAnJztcbiAgICAgICAgICAgIGlmIChpdGVtLmxhYmVsS2V5KSB7XG4gICAgICAgICAgICAgICAgbGFiZWwgPSB0aGlzLmxhbmd1YWdlcy5nZXRGaWVsZExhYmVsKGl0ZW0ubGFiZWxLZXkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNNYXBbaXRlbS52YWx1ZV0gPSBsYWJlbDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGJ1aWxkT3B0aW9uc0FycmF5KGFwcFN0cmluZ3M6IExhbmd1YWdlTGlzdFN0cmluZ01hcCk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IFtdO1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLm9wdGlvbnNNYXApLmZvckVhY2goa2V5ID0+IHtcblxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnB1c2goe1xuICAgICAgICAgICAgICAgIHZhbHVlOiBrZXksXG4gICAgICAgICAgICAgICAgbGFiZWw6IHRoaXMub3B0aW9uc01hcFtrZXldXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNEeW5hbWljRW51bSkge1xuICAgICAgICAgICAgdGhpcy5idWlsZER5bmFtaWNFbnVtT3B0aW9ucyhhcHBTdHJpbmdzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0VmFsdWUoKTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlcyA9IFtdO1xuXG4gICAgICAgIGlmICh0aGlzLmZpZWxkLmNyaXRlcmlhKXtcbiAgICAgICAgICAgIHRoaXMuaW5pdFZhbHVlTGFiZWwoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5maWVsZC52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5pbml0RW51bURlZmF1bHQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5maWVsZC52YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zTWFwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9uc01hcFt0aGlzLmZpZWxkLnZhbHVlXSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5pdFZhbHVlTGFiZWwoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdFZhbHVlTGFiZWwgKCkge1xuICAgICAgICBjb25zdCBmaWVsZFZhbHVlID0gdGhpcy5maWVsZC52YWx1ZSB8fCB0aGlzLmZpZWxkLmNyaXRlcmlhPy50YXJnZXQgfHwgdW5kZWZpbmVkO1xuICAgICAgICBpZiAoZmllbGRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlTGFiZWwgPSB0aGlzLm9wdGlvbnNNYXBbZmllbGRWYWx1ZV07XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVmFsdWVzLnB1c2goe1xuICAgICAgICAgICAgICAgIHZhbHVlOiBmaWVsZFZhbHVlLFxuICAgICAgICAgICAgICAgIGxhYmVsOiB0aGlzLnZhbHVlTGFiZWxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogIEluaXRpYWxpemUgdGhlIGRlZmF1bHQgdmFsdWUgZm9yIHRoZSBlbnVtXG4gICAgICpcbiAgICAgKiAgQHJldHVybnMge3ZvaWR9XG4gICAgICogIEBkZXNjcmlwdGlvbiBzZXQgZGVmYXVsdCBlbnVtIHZhbHVlLCBpZiBkZWZpbmVkIGluIHZhcmRlZnNcbiAgICAgKiAqL1xuICAgIHByb3RlY3RlZCBpbml0RW51bURlZmF1bHQoKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKCFpc0VtcHR5U3RyaW5nKHRoaXMucmVjb3JkPy5pZCkpIHtcblxuICAgICAgICAgICAgdGhpcy5maWVsZD8uZm9ybUNvbnRyb2wuc2V0VmFsdWUoJycpO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGVmYXVsdFZhbCA9IHRoaXMuZmllbGQ/LmRlZmluaXRpb24/LmRlZmF1bHQ7XG4gICAgICAgIGlmICh0eXBlb2YgZGVmYXVsdFZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGRlZmF1bHRWYWwgPSBkZWZhdWx0VmFsLnRyaW0oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRlZmF1bHRWYWwpIHtcbiAgICAgICAgICAgIHRoaXMuZmllbGQuZm9ybUNvbnRyb2wuc2V0VmFsdWUoJycpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlcy5wdXNoKHtcbiAgICAgICAgICAgIHZhbHVlOiBkZWZhdWx0VmFsLFxuICAgICAgICAgICAgbGFiZWw6IHRoaXMub3B0aW9uc01hcFtkZWZhdWx0VmFsXVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmluaXRFbnVtRGVmYXVsdEZpZWxkVmFsdWVzKGRlZmF1bHRWYWwpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0RW51bURlZmF1bHRGaWVsZFZhbHVlcyhkZWZhdWx0VmFsOiBzdHJpbmcpOiB2b2lkIHtcblxuICAgICAgICBpZiAodGhpcy5maWVsZC50eXBlID09PSAnbXVsdGllbnVtJykge1xuICAgICAgICAgICAgY29uc3QgZGVmYXVsdFZhbHVlcyA9IHRoaXMuc2VsZWN0ZWRWYWx1ZXMubWFwKG9wdGlvbiA9PiBvcHRpb24udmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5maWVsZC52YWx1ZUxpc3QgPSBkZWZhdWx0VmFsdWVzO1xuICAgICAgICAgICAgdGhpcy5maWVsZC5mb3JtQ29udHJvbC5zZXRWYWx1ZShkZWZhdWx0VmFsdWVzKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5maWVsZC52YWx1ZSA9IGRlZmF1bHRWYWw7XG4gICAgICAgICAgICB0aGlzLmZpZWxkLmZvcm1Db250cm9sLnNldFZhbHVlKGRlZmF1bHRWYWwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmllbGQuZm9ybUNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY2hlY2tBbmRJbml0QXNEeW5hbWljRW51bSgpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gKHRoaXMuZmllbGQgJiYgdGhpcy5maWVsZC5kZWZpbml0aW9uKSB8fCB7fSBhcyBGaWVsZERlZmluaXRpb247XG4gICAgICAgIGNvbnN0IGR5bmFtaWMgPSAoZGVmaW5pdGlvbiAmJiBkZWZpbml0aW9uLmR5bmFtaWMpIHx8IGZhbHNlO1xuICAgICAgICBjb25zdCBwYXJlbnRFbnVtS2V5ID0gKGRlZmluaXRpb24gJiYgZGVmaW5pdGlvbi5wYXJlbnRlbnVtKSB8fCAnJztcbiAgICAgICAgY29uc3QgZmllbGRzID0gKHRoaXMucmVjb3JkICYmIHRoaXMucmVjb3JkLmZpZWxkcykgfHwgbnVsbDtcblxuICAgICAgICBpZiAoZHluYW1pYyAmJiBwYXJlbnRFbnVtS2V5ICYmIGZpZWxkcykge1xuICAgICAgICAgICAgdGhpcy5pc0R5bmFtaWNFbnVtID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudEVudW06IEZpZWxkID0gZmllbGRzW3BhcmVudEVudW1LZXldO1xuICAgICAgICAgICAgaWYgKHBhcmVudEVudW0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1YnNjcmliZVRvUGFyZW50VmFsdWVDaGFuZ2VzKHBhcmVudEVudW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGJ1aWxkRHluYW1pY0VudW1PcHRpb25zKGFwcFN0cmluZ3M6IExhbmd1YWdlTGlzdFN0cmluZ01hcCk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IHBhcmVudEVudW0gPSB0aGlzLnJlY29yZC5maWVsZHNbdGhpcy5maWVsZC5kZWZpbml0aW9uLnBhcmVudGVudW1dO1xuXG4gICAgICAgIGlmIChwYXJlbnRFbnVtKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHBhcmVudE9wdGlvbk1hcDogTGFuZ3VhZ2VTdHJpbmdNYXAgPSBhcHBTdHJpbmdzW3BhcmVudEVudW0uZGVmaW5pdGlvbi5vcHRpb25zXSBhcyBMYW5ndWFnZVN0cmluZ01hcDtcblxuICAgICAgICAgICAgaWYgKHBhcmVudE9wdGlvbk1hcCAmJiBPYmplY3Qua2V5cyhwYXJlbnRPcHRpb25NYXApLmxlbmd0aCAhPT0gMCkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5tYXBwZWRPcHRpb25zID0gdGhpcy5jcmVhdGVQYXJlbnRDaGlsZE9wdGlvbnNNYXAocGFyZW50T3B0aW9uTWFwLCB0aGlzLm9wdGlvbnMpO1xuXG4gICAgICAgICAgICAgICAgbGV0IHBhcmVudFZhbHVlczogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50RW51bS5kZWZpbml0aW9uLnR5cGUgPT09ICdtdWx0aWVudW0nKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudFZhbHVlcyA9IHBhcmVudEVudW0udmFsdWVMaXN0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudFZhbHVlcy5wdXNoKHBhcmVudEVudW0udmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLmZpbHRlck1hdGNoaW5nT3B0aW9ucyhwYXJlbnRWYWx1ZXMpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZmlsdGVyTWF0Y2hpbmdPcHRpb25zKHZhbHVlczogc3RyaW5nW10pOiBPcHRpb25bXSB7XG5cbiAgICAgICAgbGV0IGZpbHRlcmVkT3B0aW9uczogT3B0aW9uW10gPSBbXTtcblxuICAgICAgICBpZiAoIXZhbHVlcyB8fCAhdmFsdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFsdWVzLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLm1hcHBlZE9wdGlvbnNbdmFsdWVdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmlsdGVyZWRPcHRpb25zID0gZmlsdGVyZWRPcHRpb25zLmNvbmNhdChbLi4udGhpcy5tYXBwZWRPcHRpb25zW3ZhbHVlXV0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZmlsdGVyZWRPcHRpb25zO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVQYXJlbnRDaGlsZE9wdGlvbnNNYXAocGFyZW50T3B0aW9uczogTGFuZ3VhZ2VTdHJpbmdNYXAsIGNoaWxkT3B0aW9uczogT3B0aW9uW10pOiB7IFtrZXk6IHN0cmluZ106IE9wdGlvbltdIH0ge1xuICAgICAgICBjb25zdCBtYXBwZWRPcHRpb25zOiB7IFtrZXk6IHN0cmluZ106IE9wdGlvbltdIH0gPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMocGFyZW50T3B0aW9ucykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgbWFwcGVkT3B0aW9uc1trZXldID0gY2hpbGRPcHRpb25zLmZpbHRlcihcbiAgICAgICAgICAgICAgICBvcHRpb24gPT4gU3RyaW5nKG9wdGlvbi52YWx1ZSkuc3RhcnRzV2l0aChrZXkpXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG1hcHBlZE9wdGlvbnM7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHN1YnNjcmliZVRvUGFyZW50VmFsdWVDaGFuZ2VzKHBhcmVudEVudW06IEZpZWxkKTogdm9pZCB7XG4gICAgICAgIGlmIChwYXJlbnRFbnVtLmZvcm1Db250cm9sKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnMucHVzaChwYXJlbnRFbnVtLmZvcm1Db250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWVzID0+IHtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWVzID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgPSBbdmFsdWVzXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBSZXNldCBzZWxlY3RlZCB2YWx1ZXMgb24gRm9ybSBDb250cm9sXG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgIHRoaXMuZmllbGQuZm9ybUNvbnRyb2wuc2V0VmFsdWUoJycpO1xuXG4gICAgICAgICAgICAgICAgLy8gUmVidWlsZCBhdmFpbGFibGUgZW51bSBvcHRpb25zXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy5maWx0ZXJNYXRjaGluZ09wdGlvbnModmFsdWVzKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdFZhbHVlKCk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==