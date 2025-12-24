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
import { FieldBuilder } from './field.builder';
import { Injectable } from '@angular/core';
import { deepClone } from 'common';
import * as i0 from "@angular/core";
import * as i1 from "../validation/validation.manager";
import * as i2 from "../../formatters/data-type.formatter.service";
class FilterFieldBuilder extends FieldBuilder {
    validationManager;
    typeFormatter;
    constructor(validationManager, typeFormatter) {
        super(validationManager, typeFormatter);
        this.validationManager = validationManager;
        this.typeFormatter = typeFormatter;
    }
    /**
     * Build filter field
     *
     * @param {object} savedFilter SavedFilter
     * @param {object} viewField ViewFieldDefinition
     * @param {object} language LanguageStore
     * @returns {object} Field
     */
    buildFilterField(savedFilter, viewField, language = null) {
        const definition = (viewField && viewField.fieldDefinition) || {};
        const { validators, asyncValidators } = this.getFilterValidators(savedFilter, viewField);
        const field = this.setupField(savedFilter.searchModule, viewField, null, null, null, savedFilter, definition, validators, asyncValidators, language);
        field.criteria = this.initFieldFilter(savedFilter.criteria, viewField, field);
        return field;
    }
    /**
     * Get Filter Validators for given field definition
     *
     * @param {object} record  Record
     * @param {object} viewField ViewFieldDefinition
     * @returns {object} validator map
     */
    getFilterValidators(record, viewField) {
        const validators = this.validationManager.getFilterValidations(record.searchModule, viewField, record);
        const asyncValidators = [];
        return { validators, asyncValidators };
    }
    /**
     * Init filter fields
     *
     * @param {object} searchCriteria to use
     * @param {object} viewField to init
     * @param {object} field to init
     * @returns {object} SearchCriteriaFieldFilter
     */
    initFieldFilter(searchCriteria, viewField, field) {
        let fieldCriteria;
        const fieldName = viewField.name;
        let fieldType = viewField.type;
        if (fieldType === 'composite') {
            fieldType = field.definition.type;
        }
        if (searchCriteria.filters[fieldName] && searchCriteria.filters[fieldName].fieldType) {
            fieldCriteria = deepClone(searchCriteria.filters[fieldName]);
        }
        else {
            fieldCriteria = {
                field: fieldName,
                fieldType,
                operator: '',
                values: []
            };
        }
        return fieldCriteria;
    }
    /**
     * Is criteria field initialized in record
     *
     * @param {object} record Record
     * @param {string} fieldName field
     * @returns {boolean} isInitialized
     */
    isCriteriaFieldInitialized(record, fieldName) {
        const criteriaField = record.criteriaFields[fieldName];
        return !!criteriaField && !criteriaField.vardefBased;
    }
    /**
     * Add field to SavedFilter
     *
     * @param {object} savedFilter SavedFilter
     * @param {string} name string
     * @param {object} field Field
     */
    addToSavedFilter(savedFilter, name, field) {
        if (!savedFilter || !name || !field) {
            return;
        }
        if (!savedFilter.criteriaFields) {
            savedFilter.criteriaFields = {};
        }
        savedFilter.criteriaFields[name] = field;
        if (!savedFilter.criteria.filters) {
            savedFilter.criteria.filters = {};
        }
        savedFilter.criteria.filters[name] = field.criteria;
        if (savedFilter.criteriaFormGroup && field.formControl) {
            savedFilter.criteriaFormGroup.addControl(name, field.formControl);
        }
    }
    static ɵfac = function FilterFieldBuilder_Factory(t) { return new (t || FilterFieldBuilder)(i0.ɵɵinject(i1.ValidationManager), i0.ɵɵinject(i2.DataTypeFormatter)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FilterFieldBuilder, factory: FilterFieldBuilder.ɵfac, providedIn: 'root' });
}
export { FilterFieldBuilder };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterFieldBuilder, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.ValidationManager }, { type: i2.DataTypeFormatter }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWZpZWxkLmJ1aWxkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc2VydmljZXMvcmVjb3JkL2ZpZWxkL2ZpbHRlci1maWVsZC5idWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUl6QyxPQUFPLEVBQUMsU0FBUyxFQUF5RixNQUFNLFFBQVEsQ0FBQzs7OztBQUl6SCxNQUdhLGtCQUFtQixTQUFRLFlBQVk7SUFHbEM7SUFDQTtJQUZkLFlBQ2MsaUJBQW9DLEVBQ3BDLGFBQWdDO1FBRTFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUg5QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGtCQUFhLEdBQWIsYUFBYSxDQUFtQjtJQUc5QyxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNJLGdCQUFnQixDQUFDLFdBQXdCLEVBQUUsU0FBOEIsRUFBRSxXQUEwQixJQUFJO1FBRTVHLE1BQU0sVUFBVSxHQUFHLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFxQixDQUFDO1FBQ3JGLE1BQU0sRUFBQyxVQUFVLEVBQUUsZUFBZSxFQUFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUV2RixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUN6QixXQUFXLENBQUMsWUFBWSxFQUN4QixTQUFTLEVBQ1QsSUFBSSxFQUNKLElBQUksRUFDSixJQUFJLEVBQ0osV0FBVyxFQUNYLFVBQVUsRUFDVixVQUFVLEVBQ1YsZUFBZSxFQUNm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WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7RmllbGRCdWlsZGVyfSBmcm9tICcuL2ZpZWxkLmJ1aWxkZXInO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VmFsaWRhdGlvbk1hbmFnZXJ9IGZyb20gJy4uL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi5tYW5hZ2VyJztcbmltcG9ydCB7RGF0YVR5cGVGb3JtYXR0ZXJ9IGZyb20gJy4uLy4uL2Zvcm1hdHRlcnMvZGF0YS10eXBlLmZvcm1hdHRlci5zZXJ2aWNlJztcbmltcG9ydCB7U2F2ZWRGaWx0ZXJ9IGZyb20gJy4uLy4uLy4uL3N0b3JlL3NhdmVkLWZpbHRlcnMvc2F2ZWQtZmlsdGVyLm1vZGVsJztcbmltcG9ydCB7ZGVlcENsb25lLCBGaWVsZCwgRmllbGREZWZpbml0aW9uLCBTZWFyY2hDcml0ZXJpYSwgU2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlciwgVmlld0ZpZWxkRGVmaW5pdGlvbn0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtBc3luY1ZhbGlkYXRvckZuLCBWYWxpZGF0b3JGbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlckZpZWxkQnVpbGRlciBleHRlbmRzIEZpZWxkQnVpbGRlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIHZhbGlkYXRpb25NYW5hZ2VyOiBWYWxpZGF0aW9uTWFuYWdlcixcbiAgICAgICAgcHJvdGVjdGVkIHR5cGVGb3JtYXR0ZXI6IERhdGFUeXBlRm9ybWF0dGVyXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKHZhbGlkYXRpb25NYW5hZ2VyLCB0eXBlRm9ybWF0dGVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBmaWx0ZXIgZmllbGRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzYXZlZEZpbHRlciBTYXZlZEZpbHRlclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB2aWV3RmllbGQgVmlld0ZpZWxkRGVmaW5pdGlvblxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBsYW5ndWFnZSBMYW5ndWFnZVN0b3JlXG4gICAgICogQHJldHVybnMge29iamVjdH0gRmllbGRcbiAgICAgKi9cbiAgICBwdWJsaWMgYnVpbGRGaWx0ZXJGaWVsZChzYXZlZEZpbHRlcjogU2F2ZWRGaWx0ZXIsIHZpZXdGaWVsZDogVmlld0ZpZWxkRGVmaW5pdGlvbiwgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUgPSBudWxsKTogRmllbGQge1xuXG4gICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSAodmlld0ZpZWxkICYmIHZpZXdGaWVsZC5maWVsZERlZmluaXRpb24pIHx8IHt9IGFzIEZpZWxkRGVmaW5pdGlvbjtcbiAgICAgICAgY29uc3Qge3ZhbGlkYXRvcnMsIGFzeW5jVmFsaWRhdG9yc30gPSB0aGlzLmdldEZpbHRlclZhbGlkYXRvcnMoc2F2ZWRGaWx0ZXIsIHZpZXdGaWVsZCk7XG5cbiAgICAgICAgY29uc3QgZmllbGQgPSB0aGlzLnNldHVwRmllbGQoXG4gICAgICAgICAgICBzYXZlZEZpbHRlci5zZWFyY2hNb2R1bGUsXG4gICAgICAgICAgICB2aWV3RmllbGQsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBzYXZlZEZpbHRlcixcbiAgICAgICAgICAgIGRlZmluaXRpb24sXG4gICAgICAgICAgICB2YWxpZGF0b3JzLFxuICAgICAgICAgICAgYXN5bmNWYWxpZGF0b3JzLFxuICAgICAgICAgICAgbGFuZ3VhZ2VcbiAgICAgICAgKTtcbiAgICAgICAgZmllbGQuY3JpdGVyaWEgPSB0aGlzLmluaXRGaWVsZEZpbHRlcihzYXZlZEZpbHRlci5jcml0ZXJpYSwgdmlld0ZpZWxkLCBmaWVsZCk7XG4gICAgICAgIHJldHVybiBmaWVsZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgRmlsdGVyIFZhbGlkYXRvcnMgZm9yIGdpdmVuIGZpZWxkIGRlZmluaXRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZWNvcmQgIFJlY29yZFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB2aWV3RmllbGQgVmlld0ZpZWxkRGVmaW5pdGlvblxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IHZhbGlkYXRvciBtYXBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0RmlsdGVyVmFsaWRhdG9ycyhcbiAgICAgICAgcmVjb3JkOiBTYXZlZEZpbHRlcixcbiAgICAgICAgdmlld0ZpZWxkOiBWaWV3RmllbGREZWZpbml0aW9uXG4gICAgKTogeyB2YWxpZGF0b3JzOiBWYWxpZGF0b3JGbltdOyBhc3luY1ZhbGlkYXRvcnM6IEFzeW5jVmFsaWRhdG9yRm5bXSB9IHtcblxuICAgICAgICBjb25zdCB2YWxpZGF0b3JzID0gdGhpcy52YWxpZGF0aW9uTWFuYWdlci5nZXRGaWx0ZXJWYWxpZGF0aW9ucyhyZWNvcmQuc2VhcmNoTW9kdWxlLCB2aWV3RmllbGQsIHJlY29yZCk7XG4gICAgICAgIGNvbnN0IGFzeW5jVmFsaWRhdG9yczogQXN5bmNWYWxpZGF0b3JGbltdID0gW107XG5cbiAgICAgICAgcmV0dXJuIHt2YWxpZGF0b3JzLCBhc3luY1ZhbGlkYXRvcnN9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXQgZmlsdGVyIGZpZWxkc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHNlYXJjaENyaXRlcmlhIHRvIHVzZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB2aWV3RmllbGQgdG8gaW5pdFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZCB0byBpbml0XG4gICAgICogQHJldHVybnMge29iamVjdH0gU2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlclxuICAgICAqL1xuICAgIHB1YmxpYyBpbml0RmllbGRGaWx0ZXIoc2VhcmNoQ3JpdGVyaWE6IFNlYXJjaENyaXRlcmlhLCB2aWV3RmllbGQ6IFZpZXdGaWVsZERlZmluaXRpb24sIGZpZWxkOiBGaWVsZCk6IFNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIge1xuICAgICAgICBsZXQgZmllbGRDcml0ZXJpYTogU2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlcjtcblxuICAgICAgICBjb25zdCBmaWVsZE5hbWUgPSB2aWV3RmllbGQubmFtZTtcbiAgICAgICAgbGV0IGZpZWxkVHlwZSA9IHZpZXdGaWVsZC50eXBlO1xuXG4gICAgICAgIGlmIChmaWVsZFR5cGUgPT09ICdjb21wb3NpdGUnKSB7XG4gICAgICAgICAgICBmaWVsZFR5cGUgPSBmaWVsZC5kZWZpbml0aW9uLnR5cGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VhcmNoQ3JpdGVyaWEuZmlsdGVyc1tmaWVsZE5hbWVdICYmIHNlYXJjaENyaXRlcmlhLmZpbHRlcnNbZmllbGROYW1lXS5maWVsZFR5cGUpIHtcbiAgICAgICAgICAgIGZpZWxkQ3JpdGVyaWEgPSBkZWVwQ2xvbmUoc2VhcmNoQ3JpdGVyaWEuZmlsdGVyc1tmaWVsZE5hbWVdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZpZWxkQ3JpdGVyaWEgPSB7XG4gICAgICAgICAgICAgICAgZmllbGQ6IGZpZWxkTmFtZSxcbiAgICAgICAgICAgICAgICBmaWVsZFR5cGUsXG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6ICcnLFxuICAgICAgICAgICAgICAgIHZhbHVlczogW11cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmllbGRDcml0ZXJpYTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJcyBjcml0ZXJpYSBmaWVsZCBpbml0aWFsaXplZCBpbiByZWNvcmRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZWNvcmQgUmVjb3JkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkTmFtZSBmaWVsZFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBpc0luaXRpYWxpemVkXG4gICAgICovXG4gICAgcHVibGljIGlzQ3JpdGVyaWFGaWVsZEluaXRpYWxpemVkKHJlY29yZDogU2F2ZWRGaWx0ZXIsIGZpZWxkTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGNyaXRlcmlhRmllbGQgPSByZWNvcmQuY3JpdGVyaWFGaWVsZHNbZmllbGROYW1lXTtcbiAgICAgICAgcmV0dXJuICEhY3JpdGVyaWFGaWVsZCAmJiAhY3JpdGVyaWFGaWVsZC52YXJkZWZCYXNlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgZmllbGQgdG8gU2F2ZWRGaWx0ZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzYXZlZEZpbHRlciBTYXZlZEZpbHRlclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIHN0cmluZ1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZCBGaWVsZFxuICAgICAqL1xuICAgIHB1YmxpYyBhZGRUb1NhdmVkRmlsdGVyKHNhdmVkRmlsdGVyOiBTYXZlZEZpbHRlciwgbmFtZTogc3RyaW5nLCBmaWVsZDogRmllbGQpOiB2b2lkIHtcblxuICAgICAgICBpZiAoIXNhdmVkRmlsdGVyIHx8ICFuYW1lIHx8ICFmaWVsZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzYXZlZEZpbHRlci5jcml0ZXJpYUZpZWxkcykge1xuICAgICAgICAgICAgc2F2ZWRGaWx0ZXIuY3JpdGVyaWFGaWVsZHMgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNhdmVkRmlsdGVyLmNyaXRlcmlhRmllbGRzW25hbWVdID0gZmllbGQ7XG5cbiAgICAgICAgaWYgKCFzYXZlZEZpbHRlci5jcml0ZXJpYS5maWx0ZXJzKSB7XG4gICAgICAgICAgICBzYXZlZEZpbHRlci5jcml0ZXJpYS5maWx0ZXJzID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBzYXZlZEZpbHRlci5jcml0ZXJpYS5maWx0ZXJzW25hbWVdID0gZmllbGQuY3JpdGVyaWE7XG5cbiAgICAgICAgaWYgKHNhdmVkRmlsdGVyLmNyaXRlcmlhRm9ybUdyb3VwICYmIGZpZWxkLmZvcm1Db250cm9sKSB7XG4gICAgICAgICAgICBzYXZlZEZpbHRlci5jcml0ZXJpYUZvcm1Hcm91cC5hZGRDb250cm9sKG5hbWUsIGZpZWxkLmZvcm1Db250cm9sKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==