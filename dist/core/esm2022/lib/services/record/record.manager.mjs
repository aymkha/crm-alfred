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
import { isVoid } from 'common';
import { UntypedFormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "./field/field.manager";
import * as i2 from "../../store/language/language.store";
class RecordManager {
    fieldManager;
    language;
    constructor(fieldManager, language) {
        this.fieldManager = fieldManager;
        this.language = language;
    }
    /**
     * Get empty record
     *
     * @param {string} module string
     * @returns {object} Record
     */
    buildEmptyRecord(module) {
        return {
            id: '',
            module,
            attributes: {
                id: ''
            },
            fields: {},
            formGroup: new UntypedFormGroup({}),
        };
    }
    /**
     * Init Fields
     *
     * @param {object} record to use
     * @param {object} viewFieldDefinitions to use
     * @returns {object} fields
     */
    initFields(record, viewFieldDefinitions) {
        if (!record.fields) {
            record.fields = {};
        }
        if (!record.formGroup) {
            record.formGroup = new UntypedFormGroup({});
        }
        viewFieldDefinitions.forEach(viewField => {
            if (!viewField || !viewField.name) {
                return;
            }
            if (record.fields[viewField.name]) {
                return;
            }
            const isVardefBased = viewField?.vardefBased ?? false;
            if (isVardefBased) {
                this.fieldManager.addVardefOnlyField(record, viewField, this.language);
                return;
            }
            this.fieldManager.addField(record, viewField, this.language);
        });
        return record.fields;
    }
    /**
     * Inject param fields
     *
     * @param {object} params Params
     * @param {object} record Record
     * @param {object} vardefs FieldDefinitionMap
     */
    injectParamFields(params, record, vardefs) {
        Object.keys(params).forEach(paramKey => {
            const definition = vardefs[paramKey];
            if (!isVoid(definition)) {
                const type = definition.type || '';
                let idName = definition.id_name || '';
                const name = definition.name || '';
                let rname = definition.rname || '';
                if (type === 'relate' && idName === name) {
                    record.attributes[paramKey] = params[paramKey];
                    return;
                }
                if (type === 'parent') {
                    const relate = {};
                    let rname = 'name';
                    let idName = 'parent_id';
                    const groupFieldKey = paramKey + '-group';
                    const groupField = vardefs[groupFieldKey] ?? {};
                    const parentName = groupField.groupFields[paramKey];
                    if (parentName && parentName.rname) {
                        rname = parentName.rname;
                    }
                    if (rname) {
                        relate[rname] = params[paramKey];
                    }
                    if (idName && params[idName]) {
                        relate.id = params[idName];
                    }
                    record.attributes[paramKey] = relate;
                    return;
                }
                if (type === 'relate') {
                    const relate = {};
                    if (rname) {
                        relate[rname] = params[paramKey];
                    }
                    if (idName && params[idName]) {
                        relate.id = params[idName];
                    }
                    record.attributes[paramKey] = relate;
                    return;
                }
                record.attributes[paramKey] = params[paramKey];
                return;
            }
            this.handleLinkTypeRelationship(paramKey, params, vardefs, record);
        });
    }
    handleLinkTypeRelationship(paramKey, params, vardefs, record) {
        if (paramKey === 'return_relationship') {
            const returnRelationship = params.return_relationship;
            if (!returnRelationship) {
                return;
            }
            // check, on vardefs, if there is a field of type = link
            // with relationship equal to the value of return_relationship param
            Object.keys(vardefs).forEach(key => {
                const vardef = vardefs[key];
                const type = vardef.type || '';
                if (type !== 'link') {
                    return;
                }
                const relationship = vardef.relationship || '';
                if (!relationship) {
                    return;
                }
                if (relationship === returnRelationship) {
                    const linkFieldName = vardef.name;
                    const module = vardef.module ?? params.return_module ?? '';
                    if (!module) {
                        return;
                    }
                    const parentName = params.parent_name;
                    if (!parentName) {
                        return;
                    }
                    // name of the related parent field e.g. contact_id as injected
                    // in to field definition from its metadata definition
                    const relateId = vardef?.relationshipMetadata?.related_id;
                    const parentId = params[relateId] ?? '';
                    if (!parentId) {
                        return;
                    }
                    // add link type fields as line items to base record
                    record.attributes[linkFieldName] = [
                        {
                            id: parentId,
                            module,
                            attributes: {
                                id: parentId,
                                name: parentName
                            }
                        }
                    ];
                    return;
                }
            });
        }
    }
    static ɵfac = function RecordManager_Factory(t) { return new (t || RecordManager)(i0.ɵɵinject(i1.FieldManager), i0.ɵɵinject(i2.LanguageStore)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordManager, factory: RecordManager.ɵfac, providedIn: 'root' });
}
export { RecordManager };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordManager, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.FieldManager }, { type: i2.LanguageStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLm1hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc2VydmljZXMvcmVjb3JkL3JlY29yZC5tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBK0IsTUFBTSxFQUE4QixNQUFNLFFBQVEsQ0FBQztBQUN6RixPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUtoRCxNQUdhLGFBQWE7SUFHUjtJQUNBO0lBRmQsWUFDYyxZQUEwQixFQUMxQixRQUF1QjtRQUR2QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixhQUFRLEdBQVIsUUFBUSxDQUFlO0lBRXJDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILGdCQUFnQixDQUFDLE1BQWM7UUFDM0IsT0FBTztZQUNILEVBQUUsRUFBRSxFQUFFO1lBQ04sTUFBTTtZQUNOLFVBQVUsRUFBRTtnQkFDUixFQUFFLEVBQUUsRUFBRTthQUNUO1lBQ0QsTUFBTSxFQUFFLEVBQUU7WUFDVixTQUFTLEVBQUUsSUFBSSxnQkFBZ0IsQ0FBQyxFQUFFLENBQUM7U0FDNUIsQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksVUFBVSxDQUFDLE1BQWMsRUFBRSxvQkFBMkM7UUFFekUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDaEIsTUFBTSxDQUFDLE1BQU0sR0FBRyxFQUFjLENBQUM7U0FDbEM7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtZQUNuQixNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDL0M7UUFFRCxvQkFBb0IsQ0FBQyxPQUFPLENB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QixFQUFFO29CQUVyQyxNQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNsQyxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxhQUFhLElBQUksRUFBRSxDQUFDO29CQUMzRCxJQUFJLENBQUMsTUFBTSxFQUFFO3dCQUNULE9BQU87cUJBQ1Y7b0JBRUQsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztvQkFDdEMsSUFBSSxDQUFDLFVBQVUsRUFBRTt3QkFDYixPQUFPO3FCQUNWO29CQUVELCtEQUErRDtvQkFDL0Qsc0RBQXNEO29CQUN0RCxNQUFNLFFBQVEsR0FBRyxNQUFNLEVBQUUsb0JBQW9CLEVBQUUsVUFBVSxDQUFDO29CQUMxRCxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUN4QyxJQUFJLENBQUMsUUFBUSxFQUFFO3dCQUNYLE9BQU87cUJBQ1Y7b0JBRUQsb0RBQW9EO29CQUNwRCxNQUFNLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxHQUFHO3dCQUMvQjs0QkFDSSxFQUFFLEVBQUUsUUFBUTs0QkFDWixNQUFNOzRCQUNOLFVBQVUsRUFBRTtnQ0FDUixFQUFFLEVBQUUsUUFBUTtnQ0FDWixJQUFJLEVBQUUsVUFBVTs2QkFDbkI7eUJBQ007cUJBQ2QsQ0FBQztvQkFFRixPQUFPO2lCQUNWO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7dUVBeE1RLGFBQWE7Z0VBQWIsYUFBYSxXQUFiLGFBQWEsbUJBRlYsTUFBTTs7U0FFVCxhQUFhO3VGQUFiLGFBQWE7Y0FIekIsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGaWVsZERlZmluaXRpb25NYXAsIEZpZWxkTWFwLCBpc1ZvaWQsIFJlY29yZCwgVmlld0ZpZWxkRGVmaW5pdGlvbn0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7VW50eXBlZEZvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge0ZpZWxkTWFuYWdlcn0gZnJvbSAnLi9maWVsZC9maWVsZC5tYW5hZ2VyJztcbmltcG9ydCB7UGFyYW1zfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFJlY29yZE1hbmFnZXIge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBmaWVsZE1hbmFnZXI6IEZpZWxkTWFuYWdlcixcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlOiBMYW5ndWFnZVN0b3JlXG4gICAgKSB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGVtcHR5IHJlY29yZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZHVsZSBzdHJpbmdcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBSZWNvcmRcbiAgICAgKi9cbiAgICBidWlsZEVtcHR5UmVjb3JkKG1vZHVsZTogc3RyaW5nKTogUmVjb3JkIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiAnJyxcbiAgICAgICAgICAgIG1vZHVsZSxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgICAgICBpZDogJydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmaWVsZHM6IHt9LFxuICAgICAgICAgICAgZm9ybUdyb3VwOiBuZXcgVW50eXBlZEZvcm1Hcm91cCh7fSksXG4gICAgICAgIH0gYXMgUmVjb3JkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXQgRmllbGRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVjb3JkIHRvIHVzZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB2aWV3RmllbGREZWZpbml0aW9ucyB0byB1c2VcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBmaWVsZHNcbiAgICAgKi9cbiAgICBwdWJsaWMgaW5pdEZpZWxkcyhyZWNvcmQ6IFJlY29yZCwgdmlld0ZpZWxkRGVmaW5pdGlvbnM6IFZpZXdGaWVsZERlZmluaXRpb25bXSk6IEZpZWxkTWFwIHtcblxuICAgICAgICBpZiAoIXJlY29yZC5maWVsZHMpIHtcbiAgICAgICAgICAgIHJlY29yZC5maWVsZHMgPSB7fSBhcyBGaWVsZE1hcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcmVjb3JkLmZvcm1Hcm91cCkge1xuICAgICAgICAgICAgcmVjb3JkLmZvcm1Hcm91cCA9IG5ldyBVbnR5cGVkRm9ybUdyb3VwKHt9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZpZXdGaWVsZERlZmluaXRpb25zLmZvckVhY2godmlld0ZpZWxkID0+IHtcbiAgICAgICAgICAgIGlmICghdmlld0ZpZWxkIHx8ICF2aWV3RmllbGQubmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYocmVjb3JkLmZpZWxkc1t2aWV3RmllbGQubmFtZV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGlzVmFyZGVmQmFzZWQgPSB2aWV3RmllbGQ/LnZhcmRlZkJhc2VkID8/IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAoaXNWYXJkZWZCYXNlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmllbGRNYW5hZ2VyLmFkZFZhcmRlZk9ubHlGaWVsZChyZWNvcmQsIHZpZXdGaWVsZCwgdGhpcy5sYW5ndWFnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmZpZWxkTWFuYWdlci5hZGRGaWVsZChyZWNvcmQsIHZpZXdGaWVsZCwgdGhpcy5sYW5ndWFnZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZWNvcmQuZmllbGRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluamVjdCBwYXJhbSBmaWVsZHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbXMgUGFyYW1zXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlY29yZCBSZWNvcmRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdmFyZGVmcyBGaWVsZERlZmluaXRpb25NYXBcbiAgICAgKi9cbiAgICBwdWJsaWMgaW5qZWN0UGFyYW1GaWVsZHMocGFyYW1zOiBQYXJhbXMsIHJlY29yZDogUmVjb3JkLCB2YXJkZWZzOiBGaWVsZERlZmluaXRpb25NYXApOiB2b2lkIHtcblxuICAgICAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2gocGFyYW1LZXkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gdmFyZGVmc1twYXJhbUtleV07XG5cbiAgICAgICAgICAgIGlmICghaXNWb2lkKGRlZmluaXRpb24pKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IGRlZmluaXRpb24udHlwZSB8fCAnJztcbiAgICAgICAgICAgICAgICBsZXQgaWROYW1lID0gZGVmaW5pdGlvbi5pZF9uYW1lIHx8ICcnO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkZWZpbml0aW9uLm5hbWUgfHwgJyc7XG4gICAgICAgICAgICAgICAgbGV0IHJuYW1lID0gZGVmaW5pdGlvbi5ybmFtZSB8fCAnJztcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAncmVsYXRlJyAmJiBpZE5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkLmF0dHJpYnV0ZXNbcGFyYW1LZXldID0gcGFyYW1zW3BhcmFtS2V5XTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAncGFyZW50Jykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWxhdGUgPSB7fSBhcyBhbnk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHJuYW1lID0gJ25hbWUnO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaWROYW1lID0gJ3BhcmVudF9pZCc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwRmllbGRLZXkgPSBwYXJhbUtleSArICctZ3JvdXAnO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBncm91cEZpZWxkID0gdmFyZGVmc1tncm91cEZpZWxkS2V5XSA/PyB7fTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50TmFtZSA9IGdyb3VwRmllbGQuZ3JvdXBGaWVsZHNbcGFyYW1LZXldO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKHBhcmVudE5hbWUgICYmIHBhcmVudE5hbWUucm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJuYW1lID0gcGFyZW50TmFtZS5ybmFtZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChybmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXRlW3JuYW1lXSA9IHBhcmFtc1twYXJhbUtleV07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoaWROYW1lICYmIHBhcmFtc1tpZE5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWxhdGUuaWQgPSBwYXJhbXNbaWROYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJlY29yZC5hdHRyaWJ1dGVzW3BhcmFtS2V5XSA9IHJlbGF0ZTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdyZWxhdGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbGF0ZSA9IHt9IGFzIGFueTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbGF0ZVtybmFtZV0gPSBwYXJhbXNbcGFyYW1LZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkTmFtZSAmJiBwYXJhbXNbaWROYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXRlLmlkID0gcGFyYW1zW2lkTmFtZV07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZWNvcmQuYXR0cmlidXRlc1twYXJhbUtleV0gPSByZWxhdGU7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJlY29yZC5hdHRyaWJ1dGVzW3BhcmFtS2V5XSA9IHBhcmFtc1twYXJhbUtleV07XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuaGFuZGxlTGlua1R5cGVSZWxhdGlvbnNoaXAocGFyYW1LZXksIHBhcmFtcywgdmFyZGVmcywgcmVjb3JkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGhhbmRsZUxpbmtUeXBlUmVsYXRpb25zaGlwKHBhcmFtS2V5OiBzdHJpbmcsIHBhcmFtczogUGFyYW1zLCB2YXJkZWZzOiBGaWVsZERlZmluaXRpb25NYXAsIHJlY29yZDogUmVjb3JkKTogdm9pZCB7XG4gICAgICAgIGlmIChwYXJhbUtleSA9PT0gJ3JldHVybl9yZWxhdGlvbnNoaXAnKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHJldHVyblJlbGF0aW9uc2hpcCA9IHBhcmFtcy5yZXR1cm5fcmVsYXRpb25zaGlwO1xuICAgICAgICAgICAgaWYgKCFyZXR1cm5SZWxhdGlvbnNoaXApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNoZWNrLCBvbiB2YXJkZWZzLCBpZiB0aGVyZSBpcyBhIGZpZWxkIG9mIHR5cGUgPSBsaW5rXG4gICAgICAgICAgICAvLyB3aXRoIHJlbGF0aW9uc2hpcCBlcXVhbCB0byB0aGUgdmFsdWUgb2YgcmV0dXJuX3JlbGF0aW9uc2hpcCBwYXJhbVxuICAgICAgICAgICAgT2JqZWN0LmtleXModmFyZGVmcykuZm9yRWFjaChrZXkgPT4ge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdmFyZGVmID0gdmFyZGVmc1trZXldO1xuICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB2YXJkZWYudHlwZSB8fCAnJztcbiAgICAgICAgICAgICAgICBpZiAodHlwZSAhPT0gJ2xpbmsnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCByZWxhdGlvbnNoaXAgPSB2YXJkZWYucmVsYXRpb25zaGlwIHx8ICcnO1xuICAgICAgICAgICAgICAgIGlmICghcmVsYXRpb25zaGlwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVsYXRpb25zaGlwID09PSByZXR1cm5SZWxhdGlvbnNoaXApIHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5rRmllbGROYW1lID0gdmFyZGVmLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZHVsZSA9IHZhcmRlZi5tb2R1bGUgPz8gcGFyYW1zLnJldHVybl9tb2R1bGUgPz8gJyc7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnROYW1lID0gcGFyYW1zLnBhcmVudF9uYW1lO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXBhcmVudE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIG5hbWUgb2YgdGhlIHJlbGF0ZWQgcGFyZW50IGZpZWxkIGUuZy4gY29udGFjdF9pZCBhcyBpbmplY3RlZFxuICAgICAgICAgICAgICAgICAgICAvLyBpbiB0byBmaWVsZCBkZWZpbml0aW9uIGZyb20gaXRzIG1ldGFkYXRhIGRlZmluaXRpb25cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVsYXRlSWQgPSB2YXJkZWY/LnJlbGF0aW9uc2hpcE1ldGFkYXRhPy5yZWxhdGVkX2lkO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRJZCA9IHBhcmFtc1tyZWxhdGVJZF0gPz8gJyc7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcGFyZW50SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGFkZCBsaW5rIHR5cGUgZmllbGRzIGFzIGxpbmUgaXRlbXMgdG8gYmFzZSByZWNvcmRcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkLmF0dHJpYnV0ZXNbbGlua0ZpZWxkTmFtZV0gPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHBhcmVudElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBwYXJlbnRJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogcGFyZW50TmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gYXMgUmVjb3JkXG4gICAgICAgICAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19