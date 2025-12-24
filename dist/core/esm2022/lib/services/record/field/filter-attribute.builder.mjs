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
import { FilterFieldBuilder } from './filter-field.builder';
import isObjectLike from 'lodash-es/isObjectLike';
import * as i0 from "@angular/core";
import * as i1 from "../validation/validation.manager";
import * as i2 from "../../formatters/data-type.formatter.service";
class FilterAttributeBuilder extends FilterFieldBuilder {
    validationManager;
    typeFormatter;
    constructor(validationManager, typeFormatter) {
        super(validationManager, typeFormatter);
        this.validationManager = validationManager;
        this.typeFormatter = typeFormatter;
    }
    /**
     * Build filter attribute
     *
     * @param {object} savedFilter SavedFilter
     * @param {object} parentField Field
     * @param {object} viewField ViewFieldDefinition
     * @param {object} language LanguageStore
     * @returns {object} FieldAttribute
     */
    buildFilterAttribute(savedFilter, parentField, viewField, language = null) {
        const definition = (viewField && viewField.fieldDefinition) || {};
        if (!definition.valuePath) {
            definition.valuePath = 'criteria.' + (viewField.name || definition.name);
        }
        const { value, valueList, valueObject } = this.parseFilterAttributeValue(viewField, definition, savedFilter, parentField);
        const { validators, asyncValidators } = this.getFilterValidators(savedFilter, viewField);
        const field = this.setupField(savedFilter.searchModule, viewField, value, valueList, valueObject, savedFilter, definition, validators, asyncValidators, language);
        const fieldAttribute = field;
        fieldAttribute.valuePath = definition.valuePath;
        fieldAttribute.source = 'attribute';
        fieldAttribute.parentKey = parentField.definition.name;
        return fieldAttribute;
    }
    /**
     * Add attribute to SavedFilter
     *
     * @param {object} savedFilter SavedFilter
     * @param {object} field Field
     * @param {string} name string
     * @param {object} attribute FieldAttribute
     */
    addAttributeToSavedFilter(savedFilter, field, name, attribute) {
        if (!savedFilter || !name || !field || !attribute) {
            return;
        }
        field.attributes = field.attributes || {};
        field.attributes[name] = attribute;
        if (savedFilter.criteriaFormGroup && attribute.formControl) {
            savedFilter.criteriaFormGroup.addControl(name, attribute.formControl);
        }
    }
    /**
     * Parse filter attribute from field
     *
     * @param {object} viewField ViewFieldDefinition
     * @param {object} definition FieldDefinition
     * @param {object} record Record
     * @param {object} field Field
     * @returns {object} value object
     */
    parseFilterAttributeValue(viewField, definition, record, field) {
        const viewName = viewField.name || '';
        let value;
        if (!viewName) {
            value = '';
        }
        else {
            value = this.getParentValue(record, field, viewName, definition);
        }
        if (Array.isArray(value)) {
            return {
                value: null,
                valueList: value,
                valueObject: null
            };
        }
        if (isObjectLike(value)) {
            return {
                value: null,
                valueList: null,
                valueObject: value
            };
        }
        return { value, valueList: null, valueObject: null };
    }
    static ɵfac = function FilterAttributeBuilder_Factory(t) { return new (t || FilterAttributeBuilder)(i0.ɵɵinject(i1.ValidationManager), i0.ɵɵinject(i2.DataTypeFormatter)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FilterAttributeBuilder, factory: FilterAttributeBuilder.ɵfac, providedIn: 'root' });
}
export { FilterAttributeBuilder };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterAttributeBuilder, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.ValidationManager }, { type: i2.DataTypeFormatter }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWF0dHJpYnV0ZS5idWlsZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3NlcnZpY2VzL3JlY29yZC9maWVsZC9maWx0ZXItYXR0cmlidXRlLmJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFNekMsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxZQUFZLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFFbEQsTUFHYSxzQkFBdUIsU0FBUSxrQkFBa0I7SUFHNUM7SUFDQTtJQUZkLFlBQ2MsaUJBQW9DLEVBQ3BDLGFBQWdDO1FBRTFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUg5QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGtCQUFhLEdBQWIsYUFBYSxDQUFtQjtJQUc5QyxDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSSxvQkFBb0IsQ0FDdkIsV0FBd0IsRUFDeEIsV0FBa0IsRUFDbEIsU0FBOEIsRUFDOUIsV0FBMEIsSUFBSTtRQUc5QixNQUFNLFVBQVUsR0FBRyxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsZUFBZSxDQUFDLElBQUksRUFBcUIsQ0FBQztRQUVyRixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRTtZQUN2QixVQUFVLENBQUMsU0FBUyxHQUFHLFdBQVcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzVFO1FBRUQsTUFBTSxFQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFDLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3hILE1BQU0sRUFBQyxVQUFVLEVBQUUsZUFBZSxFQUFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUV2RixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUN6QixXQUFXLENBQUMsWUFBWSxFQUN4QixTQUFTLEVBQ1QsS0FBSyxFQUNMLFNBQVMsRUFDVCxXQUFXLEVBQ1gsV0FBVyxFQUNYLFVBQVUsRUFDVixVQUFVLEVBQ1YsZUFBZSxFQUNmLFFBQVEsQ0FDWCxDQUFDO1FBRUYsTUFBTSxjQUFjLEdBQUcsS0FBdUIsQ0FBQztRQUMvQyxjQUFjLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUM7UUFDaEQsY0FBYyxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUM7UUFDcEMsY0FBYyxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztRQUV2RCxPQUFPLGNBQWMsQ0FBQztJQUMxQixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNJLHlCQUF5QixDQUFDLFdBQXdCLEVBQUUsS0FBWSxFQUFFLElBQVksRUFBRSxTQUF5QjtRQUU1RyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQy9DLE9BQU87U0FDVjtRQUVELEtBQUssQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUM7UUFFMUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUM7UUFFbkMsSUFBSSxXQUFXLENBQUMsaUJBQWlCLElBQUksU0FBUyxDQUFDLFdBQVcsRUFBRTtZQUN4RCxXQUFXLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDekU7SUFDTCxDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDTyx5QkFBeUIsQ0FDL0IsU0FBOEIsRUFDOUIsVUFBMkIsRUFDM0IsTUFBYyxFQUNkLEtBQVk7UUFHWixNQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN0QyxJQUFJLEtBQVUsQ0FBQztRQUVmLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDWCxLQUFLLEdBQUcsRUFBRSxDQUFDO1NBQ2Q7YUFBTTtZQUNILEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ3BFO1FBRUQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3RCLE9BQU87Z0JBQ0gsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCLFdBQVcsRUFBRSxJQUFJO2FBQ3BCLENBQUE7U0FDSjtRQUVELElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3JCLE9BQU87Z0JBQ0gsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsU0FBUyxFQUFFLElBQUk7Z0JBQ2YsV0FBVyxFQUFFLEtBQUs7YUFDckIsQ0FBQTtTQUNKO1FBRUQsT0FBTyxFQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUMsQ0FBQztJQUN2RCxDQUFDO2dGQXhIUSxzQkFBc0I7Z0VBQXRCLHNCQUFzQixXQUF0QixzQkFBc0IsbUJBRm5CLE1BQU07O1NBRVQsc0JBQXNCO3VGQUF0QixzQkFBc0I7Y0FIbEMsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtWYWxpZGF0aW9uTWFuYWdlcn0gZnJvbSAnLi4vdmFsaWRhdGlvbi92YWxpZGF0aW9uLm1hbmFnZXInO1xuaW1wb3J0IHtEYXRhVHlwZUZvcm1hdHRlcn0gZnJvbSAnLi4vLi4vZm9ybWF0dGVycy9kYXRhLXR5cGUuZm9ybWF0dGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtTYXZlZEZpbHRlcn0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvc2F2ZWQtZmlsdGVycy9zYXZlZC1maWx0ZXIubW9kZWwnO1xuaW1wb3J0IHtGaWVsZCwgRmllbGRBdHRyaWJ1dGUsIEZpZWxkRGVmaW5pdGlvbiwgUmVjb3JkLCBWaWV3RmllbGREZWZpbml0aW9ufSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge0ZpbHRlckZpZWxkQnVpbGRlcn0gZnJvbSAnLi9maWx0ZXItZmllbGQuYnVpbGRlcic7XG5pbXBvcnQgaXNPYmplY3RMaWtlIGZyb20gJ2xvZGFzaC1lcy9pc09iamVjdExpa2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlckF0dHJpYnV0ZUJ1aWxkZXIgZXh0ZW5kcyBGaWx0ZXJGaWVsZEJ1aWxkZXIge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCB2YWxpZGF0aW9uTWFuYWdlcjogVmFsaWRhdGlvbk1hbmFnZXIsXG4gICAgICAgIHByb3RlY3RlZCB0eXBlRm9ybWF0dGVyOiBEYXRhVHlwZUZvcm1hdHRlclxuICAgICkge1xuICAgICAgICBzdXBlcih2YWxpZGF0aW9uTWFuYWdlciwgdHlwZUZvcm1hdHRlcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgZmlsdGVyIGF0dHJpYnV0ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHNhdmVkRmlsdGVyIFNhdmVkRmlsdGVyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHBhcmVudEZpZWxkIEZpZWxkXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHZpZXdGaWVsZCBWaWV3RmllbGREZWZpbml0aW9uXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGxhbmd1YWdlIExhbmd1YWdlU3RvcmVcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBGaWVsZEF0dHJpYnV0ZVxuICAgICAqL1xuICAgIHB1YmxpYyBidWlsZEZpbHRlckF0dHJpYnV0ZShcbiAgICAgICAgc2F2ZWRGaWx0ZXI6IFNhdmVkRmlsdGVyLFxuICAgICAgICBwYXJlbnRGaWVsZDogRmllbGQsXG4gICAgICAgIHZpZXdGaWVsZDogVmlld0ZpZWxkRGVmaW5pdGlvbixcbiAgICAgICAgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUgPSBudWxsXG4gICAgKTogRmllbGRBdHRyaWJ1dGUge1xuXG4gICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSAodmlld0ZpZWxkICYmIHZpZXdGaWVsZC5maWVsZERlZmluaXRpb24pIHx8IHt9IGFzIEZpZWxkRGVmaW5pdGlvbjtcblxuICAgICAgICBpZiAoIWRlZmluaXRpb24udmFsdWVQYXRoKSB7XG4gICAgICAgICAgICBkZWZpbml0aW9uLnZhbHVlUGF0aCA9ICdjcml0ZXJpYS4nICsgKHZpZXdGaWVsZC5uYW1lIHx8IGRlZmluaXRpb24ubmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7dmFsdWUsIHZhbHVlTGlzdCwgdmFsdWVPYmplY3R9ID0gdGhpcy5wYXJzZUZpbHRlckF0dHJpYnV0ZVZhbHVlKHZpZXdGaWVsZCwgZGVmaW5pdGlvbiwgc2F2ZWRGaWx0ZXIsIHBhcmVudEZpZWxkKTtcbiAgICAgICAgY29uc3Qge3ZhbGlkYXRvcnMsIGFzeW5jVmFsaWRhdG9yc30gPSB0aGlzLmdldEZpbHRlclZhbGlkYXRvcnMoc2F2ZWRGaWx0ZXIsIHZpZXdGaWVsZCk7XG5cbiAgICAgICAgY29uc3QgZmllbGQgPSB0aGlzLnNldHVwRmllbGQoXG4gICAgICAgICAgICBzYXZlZEZpbHRlci5zZWFyY2hNb2R1bGUsXG4gICAgICAgICAgICB2aWV3RmllbGQsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIHZhbHVlTGlzdCxcbiAgICAgICAgICAgIHZhbHVlT2JqZWN0LFxuICAgICAgICAgICAgc2F2ZWRGaWx0ZXIsXG4gICAgICAgICAgICBkZWZpbml0aW9uLFxuICAgICAgICAgICAgdmFsaWRhdG9ycyxcbiAgICAgICAgICAgIGFzeW5jVmFsaWRhdG9ycyxcbiAgICAgICAgICAgIGxhbmd1YWdlXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgZmllbGRBdHRyaWJ1dGUgPSBmaWVsZCBhcyBGaWVsZEF0dHJpYnV0ZTtcbiAgICAgICAgZmllbGRBdHRyaWJ1dGUudmFsdWVQYXRoID0gZGVmaW5pdGlvbi52YWx1ZVBhdGg7XG4gICAgICAgIGZpZWxkQXR0cmlidXRlLnNvdXJjZSA9ICdhdHRyaWJ1dGUnO1xuICAgICAgICBmaWVsZEF0dHJpYnV0ZS5wYXJlbnRLZXkgPSBwYXJlbnRGaWVsZC5kZWZpbml0aW9uLm5hbWU7XG5cbiAgICAgICAgcmV0dXJuIGZpZWxkQXR0cmlidXRlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhdHRyaWJ1dGUgdG8gU2F2ZWRGaWx0ZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzYXZlZEZpbHRlciBTYXZlZEZpbHRlclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZCBGaWVsZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIHN0cmluZ1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBhdHRyaWJ1dGUgRmllbGRBdHRyaWJ1dGVcbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkQXR0cmlidXRlVG9TYXZlZEZpbHRlcihzYXZlZEZpbHRlcjogU2F2ZWRGaWx0ZXIsIGZpZWxkOiBGaWVsZCwgbmFtZTogc3RyaW5nLCBhdHRyaWJ1dGU6IEZpZWxkQXR0cmlidXRlKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKCFzYXZlZEZpbHRlciB8fCAhbmFtZSB8fCAhZmllbGQgfHwgIWF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZmllbGQuYXR0cmlidXRlcyA9IGZpZWxkLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgICAgICAgZmllbGQuYXR0cmlidXRlc1tuYW1lXSA9IGF0dHJpYnV0ZTtcblxuICAgICAgICBpZiAoc2F2ZWRGaWx0ZXIuY3JpdGVyaWFGb3JtR3JvdXAgJiYgYXR0cmlidXRlLmZvcm1Db250cm9sKSB7XG4gICAgICAgICAgICBzYXZlZEZpbHRlci5jcml0ZXJpYUZvcm1Hcm91cC5hZGRDb250cm9sKG5hbWUsIGF0dHJpYnV0ZS5mb3JtQ29udHJvbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZSBmaWx0ZXIgYXR0cmlidXRlIGZyb20gZmllbGRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB2aWV3RmllbGQgVmlld0ZpZWxkRGVmaW5pdGlvblxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkZWZpbml0aW9uIEZpZWxkRGVmaW5pdGlvblxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZWNvcmQgUmVjb3JkXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGZpZWxkIEZpZWxkXG4gICAgICogQHJldHVybnMge29iamVjdH0gdmFsdWUgb2JqZWN0XG4gICAgICovXG4gICAgcHJvdGVjdGVkIHBhcnNlRmlsdGVyQXR0cmlidXRlVmFsdWUoXG4gICAgICAgIHZpZXdGaWVsZDogVmlld0ZpZWxkRGVmaW5pdGlvbixcbiAgICAgICAgZGVmaW5pdGlvbjogRmllbGREZWZpbml0aW9uLFxuICAgICAgICByZWNvcmQ6IFJlY29yZCxcbiAgICAgICAgZmllbGQ6IEZpZWxkXG4gICAgKTogeyB2YWx1ZTogc3RyaW5nOyB2YWx1ZUxpc3Q6IHN0cmluZ1tdOyB2YWx1ZU9iamVjdD86IGFueSB9IHtcblxuICAgICAgICBjb25zdCB2aWV3TmFtZSA9IHZpZXdGaWVsZC5uYW1lIHx8ICcnO1xuICAgICAgICBsZXQgdmFsdWU6IGFueTtcblxuICAgICAgICBpZiAoIXZpZXdOYW1lKSB7XG4gICAgICAgICAgICB2YWx1ZSA9ICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmdldFBhcmVudFZhbHVlKHJlY29yZCwgZmllbGQsIHZpZXdOYW1lLCBkZWZpbml0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgICB2YWx1ZUxpc3Q6IHZhbHVlLFxuICAgICAgICAgICAgICAgIHZhbHVlT2JqZWN0OiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNPYmplY3RMaWtlKHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgICAgICAgICB2YWx1ZUxpc3Q6IG51bGwsXG4gICAgICAgICAgICAgICAgdmFsdWVPYmplY3Q6IHZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge3ZhbHVlLCB2YWx1ZUxpc3Q6IG51bGwsIHZhbHVlT2JqZWN0OiBudWxsfTtcbiAgICB9XG59XG4iXX0=