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
import { Injectable } from '@angular/core';
import { BaseField, isTrue } from 'common';
import { UntypedFormArray, UntypedFormControl } from '@angular/forms';
import get from 'lodash-es/get';
import { merge } from 'lodash-es';
import * as i0 from "@angular/core";
import * as i1 from "../validation/validation.manager";
import * as i2 from "../../formatters/data-type.formatter.service";
class FieldBuilder {
    validationManager;
    typeFormatter;
    constructor(validationManager, typeFormatter) {
        this.validationManager = validationManager;
        this.typeFormatter = typeFormatter;
    }
    /**
     * Build field
     *
     * @param {object} record Record
     * @param {object} viewField ViewFieldDefinition
     * @param {object} language LanguageStore
     * @returns {object}Field
     */
    buildField(record, viewField, language = null) {
        const definition = (viewField && viewField.fieldDefinition) || {};
        const { value, valueList, valueObject } = this.parseValue(viewField, definition, record);
        const { validators, asyncValidators } = this.getSaveValidators(record, viewField);
        return this.setupField(record.module, viewField, value, valueList, valueObject, record, definition, validators, asyncValidators, language);
    }
    getFieldLabel(label, module, language) {
        const languages = language.getLanguageStrings();
        return language.getFieldLabel(label, module, languages);
    }
    /**
     * Parse value from record
     *
     * @param {object} viewField ViewFieldDefinition
     * @param {object} definition FieldDefinition
     * @param {object} record Record
     * @returns {object} value object
     */
    parseValue(viewField, definition, record) {
        const type = (viewField && viewField.type) || '';
        const source = (definition && definition.source) || '';
        const rname = (definition && definition.rname) || 'name';
        const viewName = viewField.name || '';
        let value = null;
        let valueList = null;
        if (!viewName || !record.attributes[viewName]) {
            value = '';
        }
        else if (type === 'relate' && source === 'non-db' && rname !== '') {
            value = record.attributes[viewName][rname];
            const valueObject = record.attributes[viewName];
            return { value, valueList, valueObject };
        }
        else {
            value = record.attributes[viewName];
        }
        if (type === 'line-items') {
            return { value: null, valueList };
        }
        if (Array.isArray(value)) {
            valueList = value;
            value = null;
        }
        if (!value && definition.default) {
            value = definition.default;
        }
        else if (value === null) {
            value = '';
        }
        return { value, valueList };
    }
    /**
     * Build and initialize field object
     *
     * @param {string} module to use
     * @param {object} viewField ViewFieldDefinition
     * @param {string} value string
     * @param {[]} valueList string[]
     * @param {} valueObject value object
     * @param {object} record Record
     * @param {object} definition FieldDefinition
     * @param {[]} validators ValidatorFn[]
     * @param {[]} asyncValidators AsyncValidatorFn[]
     * @param {object} language LanguageStore
     * @returns {object} BaseField
     */
    setupField(module, viewField, value, valueList, valueObject, record, definition, validators, asyncValidators, language) {
        const metadata = merge(definition?.metadata ?? {}, viewField?.metadata ?? {});
        const formattedValue = this.typeFormatter.toUserFormat(viewField.type, value, { mode: 'edit', metadata });
        if (viewField.link) {
            metadata.link = viewField.link;
        }
        const field = new BaseField();
        field.type = viewField.type || definition.type;
        field.name = viewField.name || definition.name || '';
        field.vardefBased = viewField?.vardefBased ?? definition?.vardefBased ?? false;
        field.readonly = isTrue(viewField.readonly) || isTrue(definition.readonly) || false;
        field.display = (viewField.display || definition.display || 'default');
        field.defaultDisplay = field.display;
        if (field.defaultDisplay === 'default') {
            field.defaultDisplay = 'show';
        }
        field.value = value;
        field.metadata = metadata;
        field.definition = definition;
        if (viewField?.lineItems) {
            field.definition.lineItems = viewField.lineItems;
        }
        field.labelKey = viewField.label || definition.vname || '';
        field.dynamicLabelKey = viewField.dynamicLabelKey || definition.dynamicLabelKey || '';
        field.validators = validators;
        field.asyncValidators = asyncValidators;
        if (field.type === 'line-items') {
            field.valueObjectArray = record.attributes[field.name];
            field.itemFormArray = new UntypedFormArray([]);
            field.formControl = new UntypedFormControl(formattedValue);
        }
        else {
            field.formControl = new UntypedFormControl(formattedValue);
        }
        field.attributes = {};
        field.source = 'field';
        field.logic = viewField.logic || definition.logic || null;
        field.displayLogic = viewField.displayLogic || definition.displayLogic || null;
        const fieldDependencies = {};
        const attributeDependencies = {};
        this.addFieldDependencies(field.logic, fieldDependencies, attributeDependencies, 'logic');
        this.addFieldDependencies(field.displayLogic, fieldDependencies, attributeDependencies, 'displayLogic');
        field.attributeDependencies = Object.keys(attributeDependencies).map(key => attributeDependencies[key]);
        field.fieldDependencies = fieldDependencies;
        if (valueList) {
            field.valueList = valueList;
        }
        if (valueObject) {
            field.valueObject = valueObject;
        }
        if (language) {
            field.label = this.getFieldLabel(viewField.label, module, language);
        }
        if (!field.labelKey && viewField.label) {
            field.labelKey = viewField.label;
        }
        return field;
    }
    addFieldDependencies(config, fieldDependencies, attributeDependencies, type) {
        if (config && Object.keys(config).length) {
            Object.keys(config).forEach(logicKey => {
                const entry = config[logicKey] || {};
                if (!entry.params) {
                    return;
                }
                if (entry.params && entry.params.attributeDependencies) {
                    entry.params.attributeDependencies.forEach(dependency => {
                        const dependencyKey = dependency.field + '.' + dependency.attribute;
                        attributeDependencies[dependencyKey] = dependency;
                    });
                }
                if (entry.params && entry.params.fieldDependencies) {
                    entry.params.fieldDependencies.forEach(dependency => {
                        const fieldDependency = fieldDependencies[dependency] ?? {};
                        const types = fieldDependency['types'] ?? [];
                        types.push(type);
                        fieldDependencies[dependency] = {
                            field: dependency,
                            type: types
                        };
                    });
                }
            });
        }
    }
    /**
     * Get save validators for the given field definition
     *
     * @param {object} record Record
     * @param {object} viewField ViewFieldDefinition
     * @returns {object} Validator map
     */
    getSaveValidators(record, viewField) {
        const validators = this.validationManager.getSaveValidations(record.module, viewField, record);
        const asyncValidators = this.validationManager.getAsyncSaveValidations(record.module, viewField, record);
        return { validators, asyncValidators };
    }
    /**
     * Set attribute value on parent
     *
     * @param {object} record Record
     * @param {object} field Field
     * @param {string} name String
     * @param {object} definition FieldDefinition
     * @returns any
     */
    getParentValue(record, field, name, definition) {
        const valueParent = definition.valueParent ?? 'field';
        const parent = valueParent === 'record' ? record : field;
        if (definition.valuePath) {
            return get(parent, definition.valuePath, '');
        }
        if (valueParent === 'record') {
            return get(record.attributes, name, '');
        }
        return get(field.valueObject, name, '');
    }
    static ɵfac = function FieldBuilder_Factory(t) { return new (t || FieldBuilder)(i0.ɵɵinject(i1.ValidationManager), i0.ɵɵinject(i2.DataTypeFormatter)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FieldBuilder, factory: FieldBuilder.ɵfac, providedIn: 'root' });
}
export { FieldBuilder };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FieldBuilder, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.ValidationManager }, { type: i2.DataTypeFormatter }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9zZXJ2aWNlcy9yZWNvcmQvZmllbGQvZmllbGQuYnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUd6QyxPQUFPLEVBRUgsU0FBUyxFQUlULE1BQU0sRUFJVCxNQUFNLFFBQVEsQ0FBQztBQUNoQixPQUFPLEVBQW1CLGdCQUFnQixFQUFFLGtCQUFrQixFQUFjLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkcsT0FBTyxHQUFHLE1BQU0sZUFBZSxDQUFDO0FBQ2hDLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxXQUFXLENBQUM7Ozs7QUFHaEMsTUFHYSxZQUFZO0lBR1A7SUFDQTtJQUZkLFlBQ2MsaUJBQW9DLEVBQ3BDLGFBQWdDO1FBRGhDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsa0JBQWEsR0FBYixhQUFhLENBQW1CO0lBRTlDLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksVUFBVSxDQUFDLE1BQWMsRUFBRSxTQUE4QixFQUFFLFdBQTBCLElBQUk7UUFFNUYsTUFBTSxVQUFVLEdBQUcsQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQXFCLENBQUM7UUFDckYsTUFBTSxFQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZGLE1BQU0sRUFBQyxVQUFVLEVBQUUsZUFBZSxFQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztRQUVoRixPQUFPLElB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LE1BQU0sQ0FBQyxDQUFDO1FBQy9GLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN6RyxPQUFPLEVBQUMsVUFBVSxFQUFFLGVBQWUsRUFBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNPLGNBQWMsQ0FBQyxNQUFjLEVBQUUsS0FBWSxFQUFFLElBQVksRUFBRSxVQUEyQjtRQUM1RixNQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMsV0FBVyxJQUFJLE9BQU8sQ0FBQztRQUN0RCxNQUFNLE1BQU0sR0FBRyxXQUFXLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUV6RCxJQUFJLFVBQVUsQ0FBQyxTQUFTLEVBQUU7WUFDdEIsT0FBTyxHQUFHLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDaEQ7UUFFRCxJQUFJLFdBQVcsS0FBSyxRQUFRLEVBQUU7WUFDMUIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDM0M7UUFFRCxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDO3NFQXhRUSxZQUFZO2dFQUFaLFlBQVksV0FBWixZQUFZLG1CQUZULE1BQU07O1NBRVQsWUFBWTt1RkFBWixZQUFZO2NBSHhCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VmFsaWRhdGlvbk1hbmFnZXJ9IGZyb20gJy4uL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi5tYW5hZ2VyJztcbmltcG9ydCB7RGF0YVR5cGVGb3JtYXR0ZXJ9IGZyb20gJy4uLy4uL2Zvcm1hdHRlcnMvZGF0YS10eXBlLmZvcm1hdHRlci5zZXJ2aWNlJztcbmltcG9ydCB7XG4gICAgQXR0cmlidXRlRGVwZW5kZW5jeSxcbiAgICBCYXNlRmllbGQsIERpc3BsYXlUeXBlLFxuICAgIEZpZWxkLFxuICAgIEZpZWxkRGVmaW5pdGlvbixcbiAgICBGaWVsZExvZ2ljLCBGaWVsZExvZ2ljTWFwLCBPYmplY3RNYXAsXG4gICAgaXNUcnVlLFxuICAgIFJlY29yZCxcbiAgICBTdHJpbmdNYXAsXG4gICAgVmlld0ZpZWxkRGVmaW5pdGlvblxufSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtBc3luY1ZhbGlkYXRvckZuLCBVbnR5cGVkRm9ybUFycmF5LCBVbnR5cGVkRm9ybUNvbnRyb2wsIFZhbGlkYXRvckZufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCBnZXQgZnJvbSAnbG9kYXNoLWVzL2dldCc7XG5pbXBvcnQge21lcmdlfSBmcm9tICdsb2Rhc2gtZXMnO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRmllbGRCdWlsZGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgdmFsaWRhdGlvbk1hbmFnZXI6IFZhbGlkYXRpb25NYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgdHlwZUZvcm1hdHRlcjogRGF0YVR5cGVGb3JtYXR0ZXJcbiAgICApIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBmaWVsZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlY29yZCBSZWNvcmRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdmlld0ZpZWxkIFZpZXdGaWVsZERlZmluaXRpb25cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbGFuZ3VhZ2UgTGFuZ3VhZ2VTdG9yZVxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9RmllbGRcbiAgICAgKi9cbiAgICBwdWJsaWMgYnVpbGRGaWVsZChyZWNvcmQ6IFJlY29yZCwgdmlld0ZpZWxkOiBWaWV3RmllbGREZWZpbml0aW9uLCBsYW5ndWFnZTogTGFuZ3VhZ2VTdG9yZSA9IG51bGwpOiBGaWVsZCB7XG5cbiAgICAgICAgY29uc3QgZGVmaW5pdGlvbiA9ICh2aWV3RmllbGQgJiYgdmlld0ZpZWxkLmZpZWxkRGVmaW5pdGlvbikgfHwge30gYXMgRmllbGREZWZpbml0aW9uO1xuICAgICAgICBjb25zdCB7dmFsdWUsIHZhbHVlTGlzdCwgdmFsdWVPYmplY3R9ID0gdGhpcy5wYXJzZVZhbHVlKHZpZXdGaWVsZCwgZGVmaW5pdGlvbiwgcmVjb3JkKTtcbiAgICAgICAgY29uc3Qge3ZhbGlkYXRvcnMsIGFzeW5jVmFsaWRhdG9yc30gPSB0aGlzLmdldFNhdmVWYWxpZGF0b3JzKHJlY29yZCwgdmlld0ZpZWxkKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5zZXR1cEZpZWxkKFxuICAgICAgICAgICAgcmVjb3JkLm1vZHVsZSxcbiAgICAgICAgICAgIHZpZXdGaWVsZCxcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgdmFsdWVMaXN0LFxuICAgICAgICAgICAgdmFsdWVPYmplY3QsXG4gICAgICAgICAgICByZWNvcmQsXG4gICAgICAgICAgICBkZWZpbml0aW9uLFxuICAgICAgICAgICAgdmFsaWRhdG9ycyxcbiAgICAgICAgICAgIGFzeW5jVmFsaWRhdG9ycyxcbiAgICAgICAgICAgIGxhbmd1YWdlXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEZpZWxkTGFiZWwobGFiZWw6IHN0cmluZywgbW9kdWxlOiBzdHJpbmcsIGxhbmd1YWdlOiBMYW5ndWFnZVN0b3JlKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgbGFuZ3VhZ2VzID0gbGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VTdHJpbmdzKCk7XG4gICAgICAgIHJldHVybiBsYW5ndWFnZS5nZXRGaWVsZExhYmVsKGxhYmVsLCBtb2R1bGUsIGxhbmd1YWdlcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2UgdmFsdWUgZnJvbSByZWNvcmRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB2aWV3RmllbGQgVmlld0ZpZWxkRGVmaW5pdGlvblxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkZWZpbml0aW9uIEZpZWxkRGVmaW5pdGlvblxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZWNvcmQgUmVjb3JkXG4gICAgICogQHJldHVybnMge29iamVjdH0gdmFsdWUgb2JqZWN0XG4gICAgICovXG4gICAgcHJvdGVjdGVkIHBhcnNlVmFsdWUoXG4gICAgICAgIHZpZXdGaWVsZDogVmlld0ZpZWxkRGVmaW5pdGlvbixcbiAgICAgICAgZGVmaW5pdGlvbjogRmllbGREZWZpbml0aW9uLFxuICAgICAgICByZWNvcmQ6IFJlY29yZFxuICAgICk6IHsgdmFsdWU6IHN0cmluZzsgdmFsdWVMaXN0OiBzdHJpbmdbXTsgdmFsdWVPYmplY3Q/OiBhbnkgfSB7XG5cbiAgICAgICAgY29uc3QgdHlwZSA9ICh2aWV3RmllbGQgJiYgdmlld0ZpZWxkLnR5cGUpIHx8ICcnO1xuICAgICAgICBjb25zdCBzb3VyY2UgPSAoZGVmaW5pdGlvbiAmJiBkZWZpbml0aW9uLnNvdXJjZSkgfHwgJyc7XG4gICAgICAgIGNvbnN0IHJuYW1lID0gKGRlZmluaXRpb24gJiYgZGVmaW5pdGlvbi5ybmFtZSkgfHwgJ25hbWUnO1xuICAgICAgICBjb25zdCB2aWV3TmFtZSA9IHZpZXdGaWVsZC5uYW1lIHx8ICcnO1xuICAgICAgICBsZXQgdmFsdWU6IHN0cmluZyA9IG51bGw7XG4gICAgICAgIGxldCB2YWx1ZUxpc3Q6IHN0cmluZ1tdID0gbnVsbDtcblxuICAgICAgICBpZiAoIXZpZXdOYW1lIHx8ICFyZWNvcmQuYXR0cmlidXRlc1t2aWV3TmFtZV0pIHtcbiAgICAgICAgICAgIHZhbHVlID0gJyc7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3JlbGF0ZScgJiYgc291cmNlID09PSAnbm9uLWRiJyAmJiBybmFtZSAhPT0gJycpIHtcbiAgICAgICAgICAgIHZhbHVlID0gcmVjb3JkLmF0dHJpYnV0ZXNbdmlld05hbWVdW3JuYW1lXTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlT2JqZWN0ID0gcmVjb3JkLmF0dHJpYnV0ZXNbdmlld05hbWVdO1xuICAgICAgICAgICAgcmV0dXJuIHt2YWx1ZSwgdmFsdWVMaXN0LCB2YWx1ZU9iamVjdH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHJlY29yZC5hdHRyaWJ1dGVzW3ZpZXdOYW1lXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlID09PSAnbGluZS1pdGVtcycpIHtcbiAgICAgICAgICAgIHJldHVybiB7dmFsdWU6IG51bGwsIHZhbHVlTGlzdH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlTGlzdCA9IHZhbHVlO1xuICAgICAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF2YWx1ZSAmJiBkZWZpbml0aW9uLmRlZmF1bHQpIHtcbiAgICAgICAgICAgIHZhbHVlID0gZGVmaW5pdGlvbi5kZWZhdWx0O1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICB2YWx1ZSA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHt2YWx1ZSwgdmFsdWVMaXN0fTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBhbmQgaW5pdGlhbGl6ZSBmaWVsZCBvYmplY3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2R1bGUgdG8gdXNlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHZpZXdGaWVsZCBWaWV3RmllbGREZWZpbml0aW9uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIHN0cmluZ1xuICAgICAqIEBwYXJhbSB7W119IHZhbHVlTGlzdCBzdHJpbmdbXVxuICAgICAqIEBwYXJhbSB7fSB2YWx1ZU9iamVjdCB2YWx1ZSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVjb3JkIFJlY29yZFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkZWZpbml0aW9uIEZpZWxkRGVmaW5pdGlvblxuICAgICAqIEBwYXJhbSB7W119IHZhbGlkYXRvcnMgVmFsaWRhdG9yRm5bXVxuICAgICAqIEBwYXJhbSB7W119IGFzeW5jVmFsaWRhdG9ycyBBc3luY1ZhbGlkYXRvckZuW11cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbGFuZ3VhZ2UgTGFuZ3VhZ2VTdG9yZVxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IEJhc2VGaWVsZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBzZXR1cEZpZWxkKFxuICAgICAgICBtb2R1bGU6IHN0cmluZyxcbiAgICAgICAgdmlld0ZpZWxkOiBWaWV3RmllbGREZWZpbml0aW9uLFxuICAgICAgICB2YWx1ZTogc3RyaW5nLFxuICAgICAgICB2YWx1ZUxpc3Q6IHN0cmluZ1tdLFxuICAgICAgICB2YWx1ZU9iamVjdDogYW55LFxuICAgICAgICByZWNvcmQ6IFJlY29yZCxcbiAgICAgICAgZGVmaW5pdGlvbjogRmllbGREZWZpbml0aW9uLFxuICAgICAgICB2YWxpZGF0b3JzOiBWYWxpZGF0b3JGbltdLFxuICAgICAgICBhc3luY1ZhbGlkYXRvcnM6IEFzeW5jVmFsaWRhdG9yRm5bXSxcbiAgICAgICAgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmVcbiAgICApOiBCYXNlRmllbGQge1xuXG4gICAgICAgIGNvbnN0IG1ldGFkYXRhID0gbWVyZ2UoZGVmaW5pdGlvbj8ubWV0YWRhdGEgPz8ge30sIHZpZXdGaWVsZD8ubWV0YWRhdGEgPz8ge30pO1xuXG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZFZhbHVlID0gdGhpcy50eXBlRm9ybWF0dGVyLnRvVXNlckZvcm1hdCh2aWV3RmllbGQudHlwZSwgdmFsdWUsIHttb2RlOiAnZWRpdCcsIG1ldGFkYXRhfSk7XG5cbiAgICAgICAgaWYgKHZpZXdGaWVsZC5saW5rKSB7XG4gICAgICAgICAgICBtZXRhZGF0YS5saW5rID0gdmlld0ZpZWxkLmxpbms7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmaWVsZCA9IG5ldyBCYXNlRmllbGQoKTtcblxuICAgICAgICBmaWVsZC50eXBlID0gdmlld0ZpZWxkLnR5cGUgfHwgZGVmaW5pdGlvbi50eXBlO1xuICAgICAgICBmaWVsZC5uYW1lID0gdmlld0ZpZWxkLm5hbWUgfHwgZGVmaW5pdGlvbi5uYW1lIHx8ICcnO1xuICAgICAgICBmaWVsZC52YXJkZWZCYXNlZCA9IHZpZXdGaWVsZD8udmFyZGVmQmFzZWQgPz8gZGVmaW5pdGlvbj8udmFyZGVmQmFzZWQgPz8gZmFsc2U7XG4gICAgICAgIGZpZWxkLnJlYWRvbmx5ID0gaXNUcnVlKHZpZXdGaWVsZC5yZWFkb25seSkgfHwgaXNUcnVlKGRlZmluaXRpb24ucmVhZG9ubHkpIHx8IGZhbHNlO1xuICAgICAgICBmaWVsZC5kaXNwbGF5ID0gKHZpZXdGaWVsZC5kaXNwbGF5IHx8IGRlZmluaXRpb24uZGlzcGxheSB8fCAnZGVmYXVsdCcpIGFzIERpc3BsYXlUeXBlO1xuICAgICAgICBmaWVsZC5kZWZhdWx0RGlzcGxheSA9IGZpZWxkLmRpc3BsYXk7XG4gICAgICAgIGlmKGZpZWxkLmRlZmF1bHREaXNwbGF5ID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgIGZpZWxkLmRlZmF1bHREaXNwbGF5ID0gJ3Nob3cnO1xuICAgICAgICB9XG4gICAgICAgIGZpZWxkLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIGZpZWxkLm1ldGFkYXRhID0gbWV0YWRhdGE7XG4gICAgICAgIGZpZWxkLmRlZmluaXRpb24gPSBkZWZpbml0aW9uO1xuICAgICAgICBpZiAodmlld0ZpZWxkPy5saW5lSXRlbXMpIHtcbiAgICAgICAgICAgIGZpZWxkLmRlZmluaXRpb24ubGluZUl0ZW1zID0gdmlld0ZpZWxkLmxpbmVJdGVtcztcbiAgICAgICAgfVxuICAgICAgICBmaWVsZC5sYWJlbEtleSA9IHZpZXdGaWVsZC5sYWJlbCB8fCBkZWZpbml0aW9uLnZuYW1lIHx8ICcnO1xuICAgICAgICBmaWVsZC5keW5hbWljTGFiZWxLZXkgPSB2aWV3RmllbGQuZHluYW1pY0xhYmVsS2V5IHx8IGRlZmluaXRpb24uZHluYW1pY0xhYmVsS2V5IHx8ICcnO1xuXG4gICAgICAgIGZpZWxkLnZhbGlkYXRvcnMgPSB2YWxpZGF0b3JzO1xuICAgICAgICBmaWVsZC5hc3luY1ZhbGlkYXRvcnMgPSBhc3luY1ZhbGlkYXRvcnM7XG5cbiAgICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICdsaW5lLWl0ZW1zJykge1xuICAgICAgICAgICAgZmllbGQudmFsdWVPYmplY3RBcnJheSA9IHJlY29yZC5hdHRyaWJ1dGVzW2ZpZWxkLm5hbWVdO1xuICAgICAgICAgICAgZmllbGQuaXRlbUZvcm1BcnJheSA9IG5ldyBVbnR5cGVkRm9ybUFycmF5KFtdKTtcbiAgICAgICAgICAgIGZpZWxkLmZvcm1Db250cm9sID0gbmV3IFVudHlwZWRGb3JtQ29udHJvbChmb3JtYXR0ZWRWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmaWVsZC5mb3JtQ29udHJvbCA9IG5ldyBVbnR5cGVkRm9ybUNvbnRyb2woZm9ybWF0dGVkVmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZmllbGQuYXR0cmlidXRlcyA9IHt9O1xuICAgICAgICBmaWVsZC5zb3VyY2UgPSAnZmllbGQnO1xuICAgICAgICBmaWVsZC5sb2dpYyA9IHZpZXdGaWVsZC5sb2dpYyB8fCBkZWZpbml0aW9uLmxvZ2ljIHx8IG51bGw7XG4gICAgICAgIGZpZWxkLmRpc3BsYXlMb2dpYyA9IHZpZXdGaWVsZC5kaXNwbGF5TG9naWMgfHwgZGVmaW5pdGlvbi5kaXNwbGF5TG9naWMgfHwgbnVsbDtcbiAgICAgICAgY29uc3QgZmllbGREZXBlbmRlbmNpZXM6IE9iamVjdE1hcCA9IHt9O1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVEZXBlbmRlbmNpZXM6IHsgW2tleTogc3RyaW5nXTogQXR0cmlidXRlRGVwZW5kZW5jeSB9ID0ge307XG5cblxuXG4gICAgICAgIHRoaXMuYWRkRmllbGREZXBlbmRlbmNpZXMoZmllbGQubG9naWMsIGZpZWxkRGVwZW5kZW5jaWVzLCBhdHRyaWJ1dGVEZXBlbmRlbmNpZXMsICdsb2dpYycpO1xuICAgICAgICB0aGlzLmFkZEZpZWxkRGVwZW5kZW5jaWVzKGZpZWxkLmRpc3BsYXlMb2dpYywgZmllbGREZXBlbmRlbmNpZXMsIGF0dHJpYnV0ZURlcGVuZGVuY2llcywgJ2Rpc3BsYXlMb2dpYycpO1xuXG4gICAgICAgIGZpZWxkLmF0dHJpYnV0ZURlcGVuZGVuY2llcyA9IE9iamVjdC5rZXlzKGF0dHJpYnV0ZURlcGVuZGVuY2llcykubWFwKGtleSA9PiBhdHRyaWJ1dGVEZXBlbmRlbmNpZXNba2V5XSk7XG4gICAgICAgIGZpZWxkLmZpZWxkRGVwZW5kZW5jaWVzID0gZmllbGREZXBlbmRlbmNpZXM7XG5cbiAgICAgICAgaWYgKHZhbHVlTGlzdCkge1xuICAgICAgICAgICAgZmllbGQudmFsdWVMaXN0ID0gdmFsdWVMaXN0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlT2JqZWN0KSB7XG4gICAgICAgICAgICBmaWVsZC52YWx1ZU9iamVjdCA9IHZhbHVlT2JqZWN0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxhbmd1YWdlKSB7XG4gICAgICAgICAgICBmaWVsZC5sYWJlbCA9IHRoaXMuZ2V0RmllbGRMYWJlbCh2aWV3RmllbGQubGFiZWwsIG1vZHVsZSwgbGFuZ3VhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFmaWVsZC5sYWJlbEtleSAmJiB2aWV3RmllbGQubGFiZWwpIHtcbiAgICAgICAgICAgIGZpZWxkLmxhYmVsS2V5ID0gdmlld0ZpZWxkLmxhYmVsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaWVsZDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWRkRmllbGREZXBlbmRlbmNpZXMoY29uZmlnOiBGaWVsZExvZ2ljTWFwLCBmaWVsZERlcGVuZGVuY2llczogT2JqZWN0TWFwLCBhdHRyaWJ1dGVEZXBlbmRlbmNpZXM6IHsgW2tleTogc3RyaW5nXTogQXR0cmlidXRlRGVwZW5kZW5jeSB9LCB0eXBlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKGNvbmZpZyAmJiBPYmplY3Qua2V5cyhjb25maWcpLmxlbmd0aCkge1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjb25maWcpLmZvckVhY2gobG9naWNLZXkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVudHJ5ID0gY29uZmlnW2xvZ2ljS2V5XSB8fCB7fSBhcyBGaWVsZExvZ2ljO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFlbnRyeS5wYXJhbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5wYXJhbXMgJiYgZW50cnkucGFyYW1zLmF0dHJpYnV0ZURlcGVuZGVuY2llcykge1xuICAgICAgICAgICAgICAgICAgICBlbnRyeS5wYXJhbXMuYXR0cmlidXRlRGVwZW5kZW5jaWVzLmZvckVhY2goZGVwZW5kZW5jeSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXBlbmRlbmN5S2V5ID0gZGVwZW5kZW5jeS5maWVsZCArICcuJyArIGRlcGVuZGVuY3kuYXR0cmlidXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3lLZXldID0gZGVwZW5kZW5jeTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZW50cnkucGFyYW1zICYmIGVudHJ5LnBhcmFtcy5maWVsZERlcGVuZGVuY2llcykge1xuICAgICAgICAgICAgICAgICAgICBlbnRyeS5wYXJhbXMuZmllbGREZXBlbmRlbmNpZXMuZm9yRWFjaChkZXBlbmRlbmN5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkRGVwZW5kZW5jeSA9IGZpZWxkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldID8/IHt9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlcyA9IGZpZWxkRGVwZW5kZW5jeVsndHlwZXMnXSA/PyBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVzLnB1c2godHlwZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBkZXBlbmRlbmN5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVzXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHNhdmUgdmFsaWRhdG9ycyBmb3IgdGhlIGdpdmVuIGZpZWxkIGRlZmluaXRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZWNvcmQgUmVjb3JkXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHZpZXdGaWVsZCBWaWV3RmllbGREZWZpbml0aW9uXG4gICAgICogQHJldHVybnMge29iamVjdH0gVmFsaWRhdG9yIG1hcFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRTYXZlVmFsaWRhdG9ycyhcbiAgICAgICAgcmVjb3JkOiBSZWNvcmQsXG4gICAgICAgIHZpZXdGaWVsZDogVmlld0ZpZWxkRGVmaW5pdGlvblxuICAgICk6IHsgdmFsaWRhdG9yczogVmFsaWRhdG9yRm5bXTsgYXN5bmNWYWxpZGF0b3JzOiBBc3luY1ZhbGlkYXRvckZuW10gfSB7XG5cbiAgICAgICAgY29uc3QgdmFsaWRhdG9ycyA9IHRoaXMudmFsaWRhdGlvbk1hbmFnZXIuZ2V0U2F2ZVZhbGlkYXRpb25zKHJlY29yZC5tb2R1bGUsIHZpZXdGaWVsZCwgcmVjb3JkKTtcbiAgICAgICAgY29uc3QgYXN5bmNWYWxpZGF0b3JzID0gdGhpcy52YWxpZGF0aW9uTWFuYWdlci5nZXRBc3luY1NhdmVWYWxpZGF0aW9ucyhyZWNvcmQubW9kdWxlLCB2aWV3RmllbGQsIHJlY29yZCk7XG4gICAgICAgIHJldHVybiB7dmFsaWRhdG9ycywgYXN5bmNWYWxpZGF0b3JzfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgYXR0cmlidXRlIHZhbHVlIG9uIHBhcmVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlY29yZCBSZWNvcmRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZmllbGQgRmllbGRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBTdHJpbmdcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGVmaW5pdGlvbiBGaWVsZERlZmluaXRpb25cbiAgICAgKiBAcmV0dXJucyBhbnlcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0UGFyZW50VmFsdWUocmVjb3JkOiBSZWNvcmQsIGZpZWxkOiBGaWVsZCwgbmFtZTogc3RyaW5nLCBkZWZpbml0aW9uOiBGaWVsZERlZmluaXRpb24pOiBhbnkge1xuICAgICAgICBjb25zdCB2YWx1ZVBhcmVudCA9IGRlZmluaXRpb24udmFsdWVQYXJlbnQgPz8gJ2ZpZWxkJztcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdmFsdWVQYXJlbnQgPT09ICdyZWNvcmQnID8gcmVjb3JkIDogZmllbGQ7XG5cbiAgICAgICAgaWYgKGRlZmluaXRpb24udmFsdWVQYXRoKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0KHBhcmVudCwgZGVmaW5pdGlvbi52YWx1ZVBhdGgsICcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZVBhcmVudCA9PT0gJ3JlY29yZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXQocmVjb3JkLmF0dHJpYnV0ZXMsIG5hbWUsICcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXQoZmllbGQudmFsdWVPYmplY3QsIG5hbWUsICcnKTtcbiAgICB9XG5cbn1cbiJdfQ==