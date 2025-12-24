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
import { isEmpty } from 'lodash-es';
import { Injectable } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "./field.builder";
import * as i2 from "./group-field.builder";
import * as i3 from "./attribute.builder";
import * as i4 from "./filter-field.builder";
import * as i5 from "./filter-attribute.builder";
import * as i6 from "./line-item.builder";
import * as i7 from "../../../store/language/language.store";
class FieldManager {
    fieldBuilder;
    groupFieldBuilder;
    attributeBuilder;
    filterFieldBuilder;
    filterAttributeBuilder;
    lineItemBuilder;
    languageStore;
    constructor(fieldBuilder, groupFieldBuilder, attributeBuilder, filterFieldBuilder, filterAttributeBuilder, lineItemBuilder, languageStore) {
        this.fieldBuilder = fieldBuilder;
        this.groupFieldBuilder = groupFieldBuilder;
        this.attributeBuilder = attributeBuilder;
        this.filterFieldBuilder = filterFieldBuilder;
        this.filterAttributeBuilder = filterAttributeBuilder;
        this.lineItemBuilder = lineItemBuilder;
        this.languageStore = languageStore;
    }
    /**
     * Build minimally initialised field object
     *
     * @param {string} type field type
     * @param {string} value field value
     * @returns {object} Field
     */
    buildShallowField(type, value) {
        return {
            type,
            value,
            definition: {
                type
            }
        };
    }
    /**
     * Build and add field to record
     *
     * @param {object} record Record
     * @param {object} viewField ViewFieldDefinition
     * @param {object} language LanguageStore
     * @returns {object}Field
     */
    addField(record, viewField, language = null) {
        const field = this.fieldBuilder.buildField(record, viewField, language);
        this.addToRecord(record, viewField.name, field);
        this.groupFieldBuilder.addGroupFields(record, viewField, language, this.isFieldInitialized.bind(this), this.fieldBuilder.buildField.bind(this.fieldBuilder), this.addToRecord.bind(this));
        this.attributeBuilder.addAttributes(record, record.fields, viewField, language, this.attributeBuilder.buildAttribute.bind(this.attributeBuilder), this.attributeBuilder.addAttributeToRecord.bind(this.attributeBuilder));
        this.lineItemBuilder.addLineItems(record, record.fields, viewField, language, this.addField.bind(this));
        return field;
    }
    /**
     * Build and add filter field to record
     *
     * @param {object} record Record
     * @param {object} viewField ViewFieldDefinition
     * @param {object} language LanguageStore
     * @returns {object}Field
     */
    addFilterField(record, viewField, language = null) {
        if (viewField.vardefBased && !isEmpty(record.criteriaFields[viewField.name])) {
            return record.criteriaFields[viewField.name];
        }
        const field = this.filterFieldBuilder.buildFilterField(record, viewField, language);
        this.filterFieldBuilder.addToSavedFilter(record, viewField.name, field);
        this.groupFieldBuilder.addGroupFields(record, viewField, language, this.filterFieldBuilder.isCriteriaFieldInitialized.bind(this.filterFieldBuilder), this.filterFieldBuilder.buildFilterField.bind(this.filterFieldBuilder), this.filterFieldBuilder.addToSavedFilter.bind(this.filterFieldBuilder));
        this.attributeBuilder.addAttributes(record, record.criteriaFields, viewField, language, this.filterAttributeBuilder.buildFilterAttribute.bind(this.filterAttributeBuilder), this.filterAttributeBuilder.addAttributeToSavedFilter.bind(this.filterAttributeBuilder));
        return field;
    }
    /**
     * Build line item and add to record
     *
     * @param {FieldDefinition} itemDefinition Item Definition
     * @param {Record} parentRecord Parent Record
     * @param {Field} parentField Parent Field
     * @param {Record | null} item Item
     */
    addLineItem(itemDefinition, parentRecord, parentField, item = null) {
        if (!item) {
            item = {
                id: '',
                module: parentField.definition.module || '',
                attributes: {},
                fields: {},
                formGroup: new UntypedFormGroup({}),
            };
        }
        this.lineItemBuilder.addLineItem(itemDefinition, item, this.addField.bind(this), this.languageStore, parentRecord, parentField);
        parentField.itemFormArray.updateValueAndValidity();
    }
    /**
     * Remove line item
     *
     * @param {Field} parentField Parent Field
     * @param {number} index Index
     */
    removeLineItem(parentField, index) {
        const item = parentField.items[index];
        if (!item) {
            return;
        }
        if (item.id) {
            item.attributes.deleted = 1;
        }
        else {
            parentField.items = (index > -1) ? [
                ...parentField.items.slice(0, index),
                ...parentField.items.slice(index + 1)
            ] : parentField.items;
        }
        parentField.itemFormArray.clear();
        parentField.items.forEach(parentItem => {
            const deleted = parentItem && parentItem.attributes && parentItem.attributes.deleted;
            if (!parentItem || deleted) {
                return;
            }
            parentField.itemFormArray.push(parentItem.formGroup);
        });
        parentField.itemFormArray.updateValueAndValidity();
    }
    /**
     * Add field to record
     *
     * @param {object} record Record
     * @param {string} name string
     * @param {object} field Field
     */
    addToRecord(record, name, field) {
        if (!record || !name || !field) {
            return;
        }
        if (!record.fields) {
            record.fields = {};
        }
        record.fields[name] = field;
        if (record.formGroup && field.itemFormArray) {
            record.formGroup.addControl(name + '-items', field.itemFormArray);
        }
        if (record.formGroup && field.formControl) {
            record.formGroup.addControl(name, field.formControl);
        }
    }
    /**
     * Build and add vardef only field to record
     *
     * @param {object} record Record
     * @param {object} viewField ViewFieldDefinition
     * @param {object} language LanguageStore
     * @returns {object}Field
     */
    addVardefOnlyField(record, viewField, language = null) {
        const field = this.fieldBuilder.buildField(record, viewField, language);
        this.addVardefOnlyFieldToRecord(record, viewField.name, field);
        return field;
    }
    /**
     * Add field to record
     *
     * @param {object} record Record
     * @param {string} name string
     * @param {object} field Field
     */
    addVardefOnlyFieldToRecord(record, name, field) {
        if (!record || !name || !field) {
            return;
        }
        if (!record.fields) {
            record.fields = {};
        }
        record.fields[name] = field;
    }
    /**
     * Is field initialized in record
     *
     * @param {object} record Record
     * @param {string} fieldName field
     * @returns {boolean} isInitialized
     */
    isFieldInitialized(record, fieldName) {
        return !!record.fields[fieldName];
    }
    static ɵfac = function FieldManager_Factory(t) { return new (t || FieldManager)(i0.ɵɵinject(i1.FieldBuilder), i0.ɵɵinject(i2.GroupFieldBuilder), i0.ɵɵinject(i3.AttributeBuilder), i0.ɵɵinject(i4.FilterFieldBuilder), i0.ɵɵinject(i5.FilterAttributeBuilder), i0.ɵɵinject(i6.LineItemBuilder), i0.ɵɵinject(i7.LanguageStore)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FieldManager, factory: FieldManager.ɵfac, providedIn: 'root' });
}
export { FieldManager };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FieldManager, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.FieldBuilder }, { type: i2.GroupFieldBuilder }, { type: i3.AttributeBuilder }, { type: i4.FilterFieldBuilder }, { type: i5.FilterAttributeBuilder }, { type: i6.LineItemBuilder }, { type: i7.LanguageStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQubWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9zZXJ2aWNlcy9yZWNvcmQvZmllbGQvZmllbGQubWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUdsQyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBUXpDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7QUFFaEQsTUFHYSxZQUFZO0lBR1A7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFQZCxZQUNjLFlBQTBCLEVBQzFCLGlCQUFvQyxFQUNwQyxnQkFBa0MsRUFDbEMsa0JBQXNDLEVBQ3RDLHNCQUE4QyxFQUM5QyxlQUFnQyxFQUNoQyxhQUE0QjtRQU41QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQzlDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUUxQyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksaUJBQWlCLENBQUMsSUFBWSxFQUFFLEtBQWE7UUFDaEQsT0FBTztZQUNILElBQUk7WUFDSixLQUFLO1lBQ0wsVUFBVSxFQUFFO2dCQUNSLElBQUk7YUFDUDtTQUNLLENBQUM7SUFDZixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNJLFFBQVEsQ0FBQyxNQUFjLEVBQUUsU0FBOEIsRUFBRSxXQUEwQixJQUFJO1FB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RDs7Ozs7OztPQU9HO0lBQ0ksa0JBQWtCLENBQUMsTUFBYyxFQUFFLFNBQThCLEVBQUUsV0FBMEIsSUFBSTtRQUVwRyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRXhFLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUUvRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBR0Q7Ozs7OztPQU1HO0lBQ0ksMEJBQTBCLENBQUMsTUFBYyxFQUFFLElBQVksRUFBRSxLQUFZO1FBRXhFLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDNUIsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDaEIsTUFBTSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7U0FDdEI7UUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBR0Q7Ozs7OztPQU1HO0lBQ08sa0JBQWtCLENBQUMsTUFBYyxFQUFFLFNBQWlCO1FBQzFELE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdEMsQ0FBQztzRUFwUVEsWUFBWTtnRUFBWixZQUFZLFdBQVosWUFBWSxtQkFGVCxNQUFNOztTQUVULFlBQVk7dUZBQVosWUFBWTtjQUh4QixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7aXNFbXB0eX0gZnJvbSAnbG9kYXNoLWVzJztcbmltcG9ydCB7RmllbGQsIEZpZWxkRGVmaW5pdGlvbiwgUmVjb3JkLCBWaWV3RmllbGREZWZpbml0aW9ufSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTYXZlZEZpbHRlcn0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvc2F2ZWQtZmlsdGVycy9zYXZlZC1maWx0ZXIubW9kZWwnO1xuaW1wb3J0IHtGaWVsZEJ1aWxkZXJ9IGZyb20gJy4vZmllbGQuYnVpbGRlcic7XG5pbXBvcnQge0dyb3VwRmllbGRCdWlsZGVyfSBmcm9tICcuL2dyb3VwLWZpZWxkLmJ1aWxkZXInO1xuaW1wb3J0IHtBdHRyaWJ1dGVCdWlsZGVyfSBmcm9tICcuL2F0dHJpYnV0ZS5idWlsZGVyJztcbmltcG9ydCB7RmlsdGVyRmllbGRCdWlsZGVyfSBmcm9tICcuL2ZpbHRlci1maWVsZC5idWlsZGVyJztcbmltcG9ydCB7RmlsdGVyQXR0cmlidXRlQnVpbGRlcn0gZnJvbSAnLi9maWx0ZXItYXR0cmlidXRlLmJ1aWxkZXInO1xuaW1wb3J0IHtMaW5lSXRlbUJ1aWxkZXJ9IGZyb20gJy4vbGluZS1pdGVtLmJ1aWxkZXInO1xuaW1wb3J0IHtVbnR5cGVkRm9ybUdyb3VwfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRmllbGRNYW5hZ2VyIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgZmllbGRCdWlsZGVyOiBGaWVsZEJ1aWxkZXIsXG4gICAgICAgIHByb3RlY3RlZCBncm91cEZpZWxkQnVpbGRlcjogR3JvdXBGaWVsZEJ1aWxkZXIsXG4gICAgICAgIHByb3RlY3RlZCBhdHRyaWJ1dGVCdWlsZGVyOiBBdHRyaWJ1dGVCdWlsZGVyLFxuICAgICAgICBwcm90ZWN0ZWQgZmlsdGVyRmllbGRCdWlsZGVyOiBGaWx0ZXJGaWVsZEJ1aWxkZXIsXG4gICAgICAgIHByb3RlY3RlZCBmaWx0ZXJBdHRyaWJ1dGVCdWlsZGVyOiBGaWx0ZXJBdHRyaWJ1dGVCdWlsZGVyLFxuICAgICAgICBwcm90ZWN0ZWQgbGluZUl0ZW1CdWlsZGVyOiBMaW5lSXRlbUJ1aWxkZXIsXG4gICAgICAgIHByb3RlY3RlZCBsYW5ndWFnZVN0b3JlOiBMYW5ndWFnZVN0b3JlXG4gICAgKSB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgbWluaW1hbGx5IGluaXRpYWxpc2VkIGZpZWxkIG9iamVjdFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgZmllbGQgdHlwZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBmaWVsZCB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IEZpZWxkXG4gICAgICovXG4gICAgcHVibGljIGJ1aWxkU2hhbGxvd0ZpZWxkKHR5cGU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IEZpZWxkIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIGRlZmluaXRpb246IHtcbiAgICAgICAgICAgICAgICB0eXBlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gYXMgRmllbGQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgYW5kIGFkZCBmaWVsZCB0byByZWNvcmRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZWNvcmQgUmVjb3JkXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHZpZXdGaWVsZCBWaWV3RmllbGREZWZpbml0aW9uXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGxhbmd1YWdlIExhbmd1YWdlU3RvcmVcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fUZpZWxkXG4gICAgICovXG4gICAgcHVibGljIGFkZEZpZWxkKHJlY29yZDogUmVjb3JkLCB2aWV3RmllbGQ6IFZpZXdGaWVsZERlZmluaXRpb24sIGxhbmd1YWdlOiBMYW5ndWFnZVN0b3JlID0gbnVsbCk6IEZpZWxkIHtcblxuICAgICAgICBjb25zdCBmaWVsZCA9IHRoaXMuZmllbGRCdWlsZGVyLmJ1aWxkRmllbGQocmVjb3JkLCB2aWV3RmllbGQsIGxhbmd1YWdlKTtcblxuICAgICAgICB0aGlzLmFkZFRvUmVjb3JkKHJlY29yZCwgdmlld0ZpZWxkLm5hbWUsIGZpZWxkKTtcbiAgICAgICAgdGhpcy5ncm91cEZpZWxkQnVpbGRlci5hZGRHcm91cEZpZWxkcyhcbiAgICAgICAgICAgIHJlY29yZCxcbiAgICAgICAgICAgIHZpZXdGaWVsZCxcbiAgICAgICAgICAgIGxhbmd1YWdlLFxuICAgICAgICAgICAgdGhpcy5pc0ZpZWxkSW5pdGlhbGl6ZWQuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIHRoaXMuZmllbGRCdWlsZGVyLmJ1aWxkRmllbGQuYmluZCh0aGlzLmZpZWxkQnVpbGRlciksXG4gICAgICAgICAgICB0aGlzLmFkZFRvUmVjb3JkLmJpbmQodGhpcylcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmF0dHJpYnV0ZUJ1aWxkZXIuYWRkQXR0cmlidXRlcyhcbiAgICAgICAgICAgIHJlY29yZCxcbiAgICAgICAgICAgIHJlY29yZC5maWVsZHMsXG4gICAgICAgICAgICB2aWV3RmllbGQsXG4gICAgICAgICAgICBsYW5ndWFnZSxcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlQnVpbGRlci5idWlsZEF0dHJpYnV0ZS5iaW5kKHRoaXMuYXR0cmlidXRlQnVpbGRlciksXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZUJ1aWxkZXIuYWRkQXR0cmlidXRlVG9SZWNvcmQuYmluZCh0aGlzLmF0dHJpYnV0ZUJ1aWxkZXIpXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5saW5lSXRlbUJ1aWxkZXIuYWRkTGluZUl0ZW1zKFxuICAgICAgICAgICAgcmVjb3JkLFxuICAgICAgICAgICAgcmVjb3JkLmZpZWxkcyxcbiAgICAgICAgICAgIHZpZXdGaWVsZCxcbiAgICAgICAgICAgIGxhbmd1YWdlLFxuICAgICAgICAgICAgdGhpcy5hZGRGaWVsZC5iaW5kKHRoaXMpLFxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBmaWVsZDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIGFuZCBhZGQgZmlsdGVyIGZpZWxkIHRvIHJlY29yZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlY29yZCBSZWNvcmRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdmlld0ZpZWxkIFZpZXdGaWVsZERlZmluaXRpb25cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbGFuZ3VhZ2UgTGFuZ3VhZ2VTdG9yZVxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9RmllbGRcbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkRmlsdGVyRmllbGQocmVjb3JkOiBTYXZlZEZpbHRlciwgdmlld0ZpZWxkOiBWaWV3RmllbGREZWZpbml0aW9uLCBsYW5ndWFnZTogTGFuZ3VhZ2VTdG9yZSA9IG51bGwpOiBGaWVsZCB7XG4gICAgICAgIGlmICh2aWV3RmllbGQudmFyZGVmQmFzZWQgJiYgIWlzRW1wdHkocmVjb3JkLmNyaXRlcmlhRmllbGRzW3ZpZXdGaWVsZC5uYW1lXSkpIHtcbiAgICAgICAgICAgIHJldHVybiByZWNvcmQuY3JpdGVyaWFGaWVsZHNbdmlld0ZpZWxkLm5hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmllbGQgPSB0aGlzLmZpbHRlckZpZWxkQnVpbGRlci5idWlsZEZpbHRlckZpZWxkKHJlY29yZCwgdmlld0ZpZWxkLCBsYW5ndWFnZSk7XG5cbiAgICAgICAgdGhpcy5maWx0ZXJGaWVsZEJ1aWxkZXIuYWRkVG9TYXZlZEZpbHRlcihyZWNvcmQsIHZpZXdGaWVsZC5uYW1lLCBmaWVsZCk7XG4gICAgICAgIHRoaXMuZ3JvdXBGaWVsZEJ1aWxkZXIuYWRkR3JvdXBGaWVsZHMoXG4gICAgICAgICAgICByZWNvcmQsXG4gICAgICAgICAgICB2aWV3RmllbGQsXG4gICAgICAgICAgICBsYW5ndWFnZSxcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyRmllbGRCdWlsZGVyLmlzQ3JpdGVyaWFGaWVsZEluaXRpYWxpemVkLmJpbmQodGhpcy5maWx0ZXJGaWVsZEJ1aWxkZXIpLFxuICAgICAgICAgICAgdGhpcy5maWx0ZXJGaWVsZEJ1aWxkZXIuYnVpbGRGaWx0ZXJGaWVsZC5iaW5kKHRoaXMuZmlsdGVyRmllbGRCdWlsZGVyKSxcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyRmllbGRCdWlsZGVyLmFkZFRvU2F2ZWRGaWx0ZXIuYmluZCh0aGlzLmZpbHRlckZpZWxkQnVpbGRlcilcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmF0dHJpYnV0ZUJ1aWxkZXIuYWRkQXR0cmlidXRlcyhcbiAgICAgICAgICAgIHJlY29yZCxcbiAgICAgICAgICAgIHJlY29yZC5jcml0ZXJpYUZpZWxkcyxcbiAgICAgICAgICAgIHZpZXdGaWVsZCxcbiAgICAgICAgICAgIGxhbmd1YWdlLFxuICAgICAgICAgICAgdGhpcy5maWx0ZXJBdHRyaWJ1dGVCdWlsZGVyLmJ1aWxkRmlsdGVyQXR0cmlidXRlLmJpbmQodGhpcy5maWx0ZXJBdHRyaWJ1dGVCdWlsZGVyKSxcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyQXR0cmlidXRlQnVpbGRlci5hZGRBdHRyaWJ1dGVUb1NhdmVkRmlsdGVyLmJpbmQodGhpcy5maWx0ZXJBdHRyaWJ1dGVCdWlsZGVyKVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBmaWVsZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBsaW5lIGl0ZW0gYW5kIGFkZCB0byByZWNvcmRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RmllbGREZWZpbml0aW9ufSBpdGVtRGVmaW5pdGlvbiBJdGVtIERlZmluaXRpb25cbiAgICAgKiBAcGFyYW0ge1JlY29yZH0gcGFyZW50UmVjb3JkIFBhcmVudCBSZWNvcmRcbiAgICAgKiBAcGFyYW0ge0ZpZWxkfSBwYXJlbnRGaWVsZCBQYXJlbnQgRmllbGRcbiAgICAgKiBAcGFyYW0ge1JlY29yZCB8IG51bGx9IGl0ZW0gSXRlbVxuICAgICAqL1xuICAgIHB1YmxpYyBhZGRMaW5lSXRlbShcbiAgICAgICAgaXRlbURlZmluaXRpb246IEZpZWxkRGVmaW5pdGlvbixcbiAgICAgICAgcGFyZW50UmVjb3JkOiBSZWNvcmQsXG4gICAgICAgIHBhcmVudEZpZWxkOiBGaWVsZCxcbiAgICAgICAgaXRlbTogUmVjb3JkID0gbnVsbFxuICAgICk6IHZvaWQge1xuICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgIGl0ZW0gPSB7XG4gICAgICAgICAgICAgICAgaWQ6ICcnLFxuICAgICAgICAgICAgICAgIG1vZHVsZTogcGFyZW50RmllbGQuZGVmaW5pdGlvbi5tb2R1bGUgfHwgJycsXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczoge30sXG4gICAgICAgICAgICAgICAgZmllbGRzOiB7fSxcbiAgICAgICAgICAgICAgICBmb3JtR3JvdXA6IG5ldyBVbnR5cGVkRm9ybUdyb3VwKHt9KSxcbiAgICAgICAgICAgIH0gYXMgUmVjb3JkO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5saW5lSXRlbUJ1aWxkZXIuYWRkTGluZUl0ZW0oXG4gICAgICAgICAgICBpdGVtRGVmaW5pdGlvbixcbiAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICB0aGlzLmFkZEZpZWxkLmJpbmQodGhpcyksXG4gICAgICAgICAgICB0aGlzLmxhbmd1YWdlU3RvcmUsXG4gICAgICAgICAgICBwYXJlbnRSZWNvcmQsXG4gICAgICAgICAgICBwYXJlbnRGaWVsZFxuICAgICAgICApO1xuXG4gICAgICAgIHBhcmVudEZpZWxkLml0ZW1Gb3JtQXJyYXkudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBsaW5lIGl0ZW1cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RmllbGR9IHBhcmVudEZpZWxkIFBhcmVudCBGaWVsZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBJbmRleFxuICAgICAqL1xuICAgIHB1YmxpYyByZW1vdmVMaW5lSXRlbShwYXJlbnRGaWVsZDogRmllbGQsIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IHBhcmVudEZpZWxkLml0ZW1zW2luZGV4XTtcblxuICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpdGVtLmlkKSB7XG4gICAgICAgICAgICBpdGVtLmF0dHJpYnV0ZXMuZGVsZXRlZCA9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJlbnRGaWVsZC5pdGVtcyA9IChpbmRleCA+IC0xKSA/IFtcbiAgICAgICAgICAgICAgICAuLi5wYXJlbnRGaWVsZC5pdGVtcy5zbGljZSgwLCBpbmRleCksXG4gICAgICAgICAgICAgICAgLi4ucGFyZW50RmllbGQuaXRlbXMuc2xpY2UoaW5kZXggKyAxKVxuICAgICAgICAgICAgXSA6IHBhcmVudEZpZWxkLml0ZW1zO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFyZW50RmllbGQuaXRlbUZvcm1BcnJheS5jbGVhcigpO1xuXG4gICAgICAgIHBhcmVudEZpZWxkLml0ZW1zLmZvckVhY2gocGFyZW50SXRlbSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWxldGVkID0gcGFyZW50SXRlbSAmJiBwYXJlbnRJdGVtLmF0dHJpYnV0ZXMgJiYgcGFyZW50SXRlbS5hdHRyaWJ1dGVzLmRlbGV0ZWQ7XG4gICAgICAgICAgICBpZiAoIXBhcmVudEl0ZW0gfHwgZGVsZXRlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGFyZW50RmllbGQuaXRlbUZvcm1BcnJheS5wdXNoKHBhcmVudEl0ZW0uZm9ybUdyb3VwKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcGFyZW50RmllbGQuaXRlbUZvcm1BcnJheS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBBZGQgZmllbGQgdG8gcmVjb3JkXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVjb3JkIFJlY29yZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIHN0cmluZ1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZCBGaWVsZFxuICAgICAqL1xuICAgIHB1YmxpYyBhZGRUb1JlY29yZChyZWNvcmQ6IFJlY29yZCwgbmFtZTogc3RyaW5nLCBmaWVsZDogRmllbGQpOiB2b2lkIHtcblxuICAgICAgICBpZiAoIXJlY29yZCB8fCAhbmFtZSB8fCAhZmllbGQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcmVjb3JkLmZpZWxkcykge1xuICAgICAgICAgICAgcmVjb3JkLmZpZWxkcyA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmVjb3JkLmZpZWxkc1tuYW1lXSA9IGZpZWxkO1xuXG4gICAgICAgIGlmIChyZWNvcmQuZm9ybUdyb3VwICYmIGZpZWxkLml0ZW1Gb3JtQXJyYXkpIHtcbiAgICAgICAgICAgIHJlY29yZC5mb3JtR3JvdXAuYWRkQ29udHJvbChuYW1lICsgJy1pdGVtcycsIGZpZWxkLml0ZW1Gb3JtQXJyYXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlY29yZC5mb3JtR3JvdXAgJiYgZmllbGQuZm9ybUNvbnRyb2wpIHtcbiAgICAgICAgICAgIHJlY29yZC5mb3JtR3JvdXAuYWRkQ29udHJvbChuYW1lLCBmaWVsZC5mb3JtQ29udHJvbCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIGFuZCBhZGQgdmFyZGVmIG9ubHkgZmllbGQgdG8gcmVjb3JkXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVjb3JkIFJlY29yZFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB2aWV3RmllbGQgVmlld0ZpZWxkRGVmaW5pdGlvblxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBsYW5ndWFnZSBMYW5ndWFnZVN0b3JlXG4gICAgICogQHJldHVybnMge29iamVjdH1GaWVsZFxuICAgICAqL1xuICAgIHB1YmxpYyBhZGRWYXJkZWZPbmx5RmllbGQocmVjb3JkOiBSZWNvcmQsIHZpZXdGaWVsZDogVmlld0ZpZWxkRGVmaW5pdGlvbiwgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUgPSBudWxsKTogRmllbGQge1xuXG4gICAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5maWVsZEJ1aWxkZXIuYnVpbGRGaWVsZChyZWNvcmQsIHZpZXdGaWVsZCwgbGFuZ3VhZ2UpO1xuXG4gICAgICAgIHRoaXMuYWRkVmFyZGVmT25seUZpZWxkVG9SZWNvcmQocmVjb3JkLCB2aWV3RmllbGQubmFtZSwgZmllbGQpO1xuXG4gICAgICAgIHJldHVybiBmaWVsZDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEFkZCBmaWVsZCB0byByZWNvcmRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZWNvcmQgUmVjb3JkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgc3RyaW5nXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGZpZWxkIEZpZWxkXG4gICAgICovXG4gICAgcHVibGljIGFkZFZhcmRlZk9ubHlGaWVsZFRvUmVjb3JkKHJlY29yZDogUmVjb3JkLCBuYW1lOiBzdHJpbmcsIGZpZWxkOiBGaWVsZCk6IHZvaWQge1xuXG4gICAgICAgIGlmICghcmVjb3JkIHx8ICFuYW1lIHx8ICFmaWVsZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFyZWNvcmQuZmllbGRzKSB7XG4gICAgICAgICAgICByZWNvcmQuZmllbGRzID0ge307XG4gICAgICAgIH1cblxuICAgICAgICByZWNvcmQuZmllbGRzW25hbWVdID0gZmllbGQ7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBJcyBmaWVsZCBpbml0aWFsaXplZCBpbiByZWNvcmRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZWNvcmQgUmVjb3JkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkTmFtZSBmaWVsZFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBpc0luaXRpYWxpemVkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGlzRmllbGRJbml0aWFsaXplZChyZWNvcmQ6IFJlY29yZCwgZmllbGROYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICEhcmVjb3JkLmZpZWxkc1tmaWVsZE5hbWVdO1xuICAgIH1cblxufVxuIl19