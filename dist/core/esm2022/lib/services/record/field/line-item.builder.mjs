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
import { deepClone } from 'common';
import { Injectable } from '@angular/core';
import { AttributeBuilder } from './attribute.builder';
import { UntypedFormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "../validation/validation.manager";
import * as i2 from "../../formatters/data-type.formatter.service";
class LineItemBuilder extends AttributeBuilder {
    validationManager;
    typeFormatter;
    constructor(validationManager, typeFormatter) {
        super(validationManager, typeFormatter);
        this.validationManager = validationManager;
        this.typeFormatter = typeFormatter;
    }
    /**
     * Create and add attributes fields to field
     *
     * @param {object} record Record
     * @param {object} fields FieldMap
     * @param {object} viewField ViewFieldDefinition
     * @param {object} language LanguageStore
     * @param {function} buildLineItemFunction
     */
    addLineItems(record, fields, viewField, language, buildLineItemFunction) {
        const fieldKeys = Object.keys(fields) || [];
        if (fieldKeys.length < 1) {
            return;
        }
        fieldKeys.forEach(key => {
            const field = fields[key];
            this.addFieldLineItems(record, field, language, buildLineItemFunction);
        });
    }
    /**
     * Create and add attributes fields to field
     *
     * @param {object} record Record
     * @param {object} field Field
     * @param {object} language LanguageStore
     * @param {function} buildLineItemFunction
     */
    addFieldLineItems(record, field, language, buildLineItemFunction) {
        const definition = (field && field.definition) || {};
        const type = (field && field.type) || '';
        const items = (field.valueObjectArray && field.valueObjectArray) || [];
        if (type !== 'line-items' || !items.length) {
            return;
        }
        const itemDefinition = definition.lineItems?.definition || {};
        field.items = [];
        items.forEach(item => {
            this.addLineItem(itemDefinition, item, buildLineItemFunction, language, record, field);
        });
    }
    /**
     * Build line item and and to record
     * @param {object} itemDefinition
     * @param {object }item
     * @param {object} buildLineItemFunction
     * @param {object} language
     * @param {object} parentRecord
     * @param {object} parentField
     */
    addLineItem(itemDefinition, item, buildLineItemFunction, language, parentRecord, parentField) {
        const itemViewField = {
            name: itemDefinition.name,
            label: itemDefinition.vname,
            type: itemDefinition.type,
            fieldDefinition: deepClone(itemDefinition)
        };
        const itemRecord = {
            id: item.id || '',
            type: item.type || '',
            module: item.module || '',
            attributes: item.attributes || {},
            fields: {},
            formGroup: new UntypedFormGroup({})
        };
        buildLineItemFunction(itemRecord, itemViewField, language);
        parentField.itemFormArray.push(itemRecord.formGroup);
        parentField.items.push(itemRecord);
    }
    static ɵfac = function LineItemBuilder_Factory(t) { return new (t || LineItemBuilder)(i0.ɵɵinject(i1.ValidationManager), i0.ɵɵinject(i2.DataTypeFormatter)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LineItemBuilder, factory: LineItemBuilder.ɵfac, providedIn: 'root' });
}
export { LineItemBuilder };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LineItemBuilder, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.ValidationManager }, { type: i2.DataTypeFormatter }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1pdGVtLmJ1aWxkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc2VydmljZXMvcmVjb3JkL2ZpZWxkL2xpbmUtaXRlbS5idWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFnRSxNQUFNLFFBQVEsQ0FBQztBQUloRyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3JELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRWhELE1BR2EsZUFBZ0IsU0FBUSxnQkFBZ0I7SUFHbkM7SUFDQTtJQUZkLFlBQ2MsaUJBQW9DLEVBQ3BDLGFBQWdDO1FBRTFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUg5QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGtCQUFhLEdBQWIsYUFBYSxDQUFtQjtJQUc5QyxDQUFDO0lBR0Q7Ozs7Ozs7O09BUUc7SUFDSSxZQUFZLENBQ2YsTUFBYyxFQUNkLE1BQWdCLEVBQ2hCLFNBQThCLEVBQzlCLFFBQXVCLEVBQ3ZCLHFCQUErQjtRQUUvQixNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUc1QyxJQUFJLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3RCLE9BQU87U0FDVjtRQUVELFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDcEIsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxpQkFBaUIsQ0FDbEIsTUFBTSxFQUNOLEtBQUssRUFDTCxRQUFRLEVBQ1IscUJBQXFCLENBQ3hCLENBQUE7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksaUJBQWlCLENBQ3BCLE1BQWMsRUFDZCxLQUFZLEVBQ1osUUFBdUIsRUFDdkIscUJBQStCO1FBRy9CLE1BQU0sVUFBVSxHQUFHLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckQsTUFBTSxJQUFJLEdBQUcsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QyxNQUFNLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFdkUsSUFBSSxJQUFJLEtBQUssWUFBWSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUN4QyxPQUFPO1NBQ1Y7UUFFRCxNQUFNLGNBQWMsR0FBb0IsVUFBVSxDQUFDLFNBQVMsRUFBRSxVQUFVLElBQUksRUFBRSxDQUFDO1FBQy9FLEtBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBRWpCLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsSUFBYyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDckcsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSSxXQUFXLENBQ2QsY0FBK0IsRUFDL0IsSUFBWSxFQUNaLHFCQUErQixFQUMvQixRQUF1QixFQUN2QixZQUFvQixFQUNwQixXQUFrQjtRQUdsQixNQUFNLGFBQWEsR0FBRztZQUNsQixJQUFJLEVBQUUsY0FBYyxDQUFDLElBQUk7WUFDekIsS0FBSyxFQUFFLGNBQWMsQ0FBQyxLQUFLO1lBQzNCLElBQUksRUFBRSxjQUFjLENBQUMsSUFBSTtZQUN6QixlQUFlLEVBQUUsU0FBUyxDQUFDLGNBQWMsQ0FBQztTQUM3QyxDQUFDO1FBRUYsTUFBTSxVQUFVLEdBQUc7WUFDZixFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFO1lBQ2pCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDckIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLElBQUksRUFBRTtZQUN6QixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsSUFBSSxFQUFFO1lBQ2pDLE1BQU0sRUFBRSxFQUFFO1lBQ1YsU0FBUyxFQUFFLElBQUksZ0JBQWdCLENBQUMsRUFBRSxDQUFDO1NBQzVCLENBQUM7UUFFWixxQkFBcUIsQ0FBQyxVQUFVLEVBQUUsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRTNELFdBQVcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVyRCxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN2QyxDQUFDO3lFQW5IUSxlQUFlO2dFQUFmLGVBQWUsV0FBZixlQUFlLG1CQUZaLE1BQU07O1NBRVQsZUFBZTt1RkFBZixlQUFlO2NBSDNCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtkZWVwQ2xvbmUsIEZpZWxkLCBGaWVsZERlZmluaXRpb24sIEZpZWxkTWFwLCBSZWNvcmQsIFZpZXdGaWVsZERlZmluaXRpb259IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7VmFsaWRhdGlvbk1hbmFnZXJ9IGZyb20gJy4uL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi5tYW5hZ2VyJztcbmltcG9ydCB7RGF0YVR5cGVGb3JtYXR0ZXJ9IGZyb20gJy4uLy4uL2Zvcm1hdHRlcnMvZGF0YS10eXBlLmZvcm1hdHRlci5zZXJ2aWNlJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0F0dHJpYnV0ZUJ1aWxkZXJ9IGZyb20gJy4vYXR0cmlidXRlLmJ1aWxkZXInO1xuaW1wb3J0IHtVbnR5cGVkRm9ybUdyb3VwfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTGluZUl0ZW1CdWlsZGVyIGV4dGVuZHMgQXR0cmlidXRlQnVpbGRlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIHZhbGlkYXRpb25NYW5hZ2VyOiBWYWxpZGF0aW9uTWFuYWdlcixcbiAgICAgICAgcHJvdGVjdGVkIHR5cGVGb3JtYXR0ZXI6IERhdGFUeXBlRm9ybWF0dGVyXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKHZhbGlkYXRpb25NYW5hZ2VyLCB0eXBlRm9ybWF0dGVyKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhbmQgYWRkIGF0dHJpYnV0ZXMgZmllbGRzIHRvIGZpZWxkXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVjb3JkIFJlY29yZFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZHMgRmllbGRNYXBcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdmlld0ZpZWxkIFZpZXdGaWVsZERlZmluaXRpb25cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbGFuZ3VhZ2UgTGFuZ3VhZ2VTdG9yZVxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGJ1aWxkTGluZUl0ZW1GdW5jdGlvblxuICAgICAqL1xuICAgIHB1YmxpYyBhZGRMaW5lSXRlbXMoXG4gICAgICAgIHJlY29yZDogUmVjb3JkLFxuICAgICAgICBmaWVsZHM6IEZpZWxkTWFwLFxuICAgICAgICB2aWV3RmllbGQ6IFZpZXdGaWVsZERlZmluaXRpb24sXG4gICAgICAgIGxhbmd1YWdlOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBidWlsZExpbmVJdGVtRnVuY3Rpb246IEZ1bmN0aW9uLFxuICAgICk6IHZvaWQge1xuICAgICAgICBjb25zdCBmaWVsZEtleXMgPSBPYmplY3Qua2V5cyhmaWVsZHMpIHx8IFtdO1xuXG5cbiAgICAgICAgaWYgKGZpZWxkS2V5cy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmaWVsZEtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmllbGQgPSBmaWVsZHNba2V5XTtcbiAgICAgICAgICAgIHRoaXMuYWRkRmllbGRMaW5lSXRlbXMoXG4gICAgICAgICAgICAgICAgcmVjb3JkLFxuICAgICAgICAgICAgICAgIGZpZWxkLFxuICAgICAgICAgICAgICAgIGxhbmd1YWdlLFxuICAgICAgICAgICAgICAgIGJ1aWxkTGluZUl0ZW1GdW5jdGlvbixcbiAgICAgICAgICAgIClcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYW5kIGFkZCBhdHRyaWJ1dGVzIGZpZWxkcyB0byBmaWVsZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlY29yZCBSZWNvcmRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZmllbGQgRmllbGRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbGFuZ3VhZ2UgTGFuZ3VhZ2VTdG9yZVxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGJ1aWxkTGluZUl0ZW1GdW5jdGlvblxuICAgICAqL1xuICAgIHB1YmxpYyBhZGRGaWVsZExpbmVJdGVtcyhcbiAgICAgICAgcmVjb3JkOiBSZWNvcmQsXG4gICAgICAgIGZpZWxkOiBGaWVsZCxcbiAgICAgICAgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIGJ1aWxkTGluZUl0ZW1GdW5jdGlvbjogRnVuY3Rpb24sXG4gICAgKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IChmaWVsZCAmJiBmaWVsZC5kZWZpbml0aW9uKSB8fCB7fTtcbiAgICAgICAgY29uc3QgdHlwZSA9IChmaWVsZCAmJiBmaWVsZC50eXBlKSB8fCAnJztcbiAgICAgICAgY29uc3QgaXRlbXMgPSAoZmllbGQudmFsdWVPYmplY3RBcnJheSAmJiBmaWVsZC52YWx1ZU9iamVjdEFycmF5KSB8fCBbXTtcblxuICAgICAgICBpZiAodHlwZSAhPT0gJ2xpbmUtaXRlbXMnIHx8ICFpdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGl0ZW1EZWZpbml0aW9uOiBGaWVsZERlZmluaXRpb24gPSBkZWZpbml0aW9uLmxpbmVJdGVtcz8uZGVmaW5pdGlvbiB8fCB7fTtcbiAgICAgICAgZmllbGQuaXRlbXMgPSBbXTtcblxuICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRMaW5lSXRlbShpdGVtRGVmaW5pdGlvbiwgaXRlbSBhcyBSZWNvcmQsIGJ1aWxkTGluZUl0ZW1GdW5jdGlvbiwgbGFuZ3VhZ2UsIHJlY29yZCwgZmllbGQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBsaW5lIGl0ZW0gYW5kIGFuZCB0byByZWNvcmRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gaXRlbURlZmluaXRpb25cbiAgICAgKiBAcGFyYW0ge29iamVjdCB9aXRlbVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBidWlsZExpbmVJdGVtRnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbGFuZ3VhZ2VcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcGFyZW50UmVjb3JkXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHBhcmVudEZpZWxkXG4gICAgICovXG4gICAgcHVibGljIGFkZExpbmVJdGVtKFxuICAgICAgICBpdGVtRGVmaW5pdGlvbjogRmllbGREZWZpbml0aW9uLFxuICAgICAgICBpdGVtOiBSZWNvcmQsXG4gICAgICAgIGJ1aWxkTGluZUl0ZW1GdW5jdGlvbjogRnVuY3Rpb24sXG4gICAgICAgIGxhbmd1YWdlOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwYXJlbnRSZWNvcmQ6IFJlY29yZCxcbiAgICAgICAgcGFyZW50RmllbGQ6IEZpZWxkXG4gICAgKSB7XG5cbiAgICAgICAgY29uc3QgaXRlbVZpZXdGaWVsZCA9IHtcbiAgICAgICAgICAgIG5hbWU6IGl0ZW1EZWZpbml0aW9uLm5hbWUsXG4gICAgICAgICAgICBsYWJlbDogaXRlbURlZmluaXRpb24udm5hbWUsXG4gICAgICAgICAgICB0eXBlOiBpdGVtRGVmaW5pdGlvbi50eXBlLFxuICAgICAgICAgICAgZmllbGREZWZpbml0aW9uOiBkZWVwQ2xvbmUoaXRlbURlZmluaXRpb24pXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaXRlbVJlY29yZCA9IHtcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkIHx8ICcnLFxuICAgICAgICAgICAgdHlwZTogaXRlbS50eXBlIHx8ICcnLFxuICAgICAgICAgICAgbW9kdWxlOiBpdGVtLm1vZHVsZSB8fCAnJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IGl0ZW0uYXR0cmlidXRlcyB8fCB7fSxcbiAgICAgICAgICAgIGZpZWxkczoge30sXG4gICAgICAgICAgICBmb3JtR3JvdXA6IG5ldyBVbnR5cGVkRm9ybUdyb3VwKHt9KVxuICAgICAgICB9IGFzIFJlY29yZDtcblxuICAgICAgICBidWlsZExpbmVJdGVtRnVuY3Rpb24oaXRlbVJlY29yZCwgaXRlbVZpZXdGaWVsZCwgbGFuZ3VhZ2UpO1xuXG4gICAgICAgIHBhcmVudEZpZWxkLml0ZW1Gb3JtQXJyYXkucHVzaChpdGVtUmVjb3JkLmZvcm1Hcm91cCk7XG5cbiAgICAgICAgcGFyZW50RmllbGQuaXRlbXMucHVzaChpdGVtUmVjb3JkKTtcbiAgICB9XG59XG4iXX0=