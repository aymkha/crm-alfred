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
import { Component, Input } from '@angular/core';
import { isVoid } from 'common';
import { debounceTime } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../services/formatters/data-type.formatter.service";
import * as i2 from "../field-logic/field-logic.manager";
import * as i3 from "../field-logic-display/field-logic-display.manager";
class BaseFieldComponent {
    typeFormatter;
    logic;
    logicDisplay;
    mode;
    field;
    record;
    parent;
    klass = null;
    dependentFields = {};
    dependentAttributes = [];
    subs = [];
    constructor(typeFormatter, logic, logicDisplay) {
        this.typeFormatter = typeFormatter;
        this.logic = logic;
        this.logicDisplay = logicDisplay;
    }
    ngOnInit() {
        this.baseInit();
    }
    ngOnDestroy() {
        this.unsubscribeAll();
    }
    baseInit() {
        this.initDependencyHandlers();
    }
    /**
     * Calculate and init dependency handlers
     */
    initDependencyHandlers() {
        if (!this.record) {
            return;
        }
        const fieldKeys = (this.record.fields && Object.keys(this.record.fields)) || [];
        if (fieldKeys.length > 1) {
            this.calculateDependentFields(fieldKeys);
            this.field.previousValue = this.field.value;
            if ((this.dependentFields && Object.keys(this.dependentFields).length) || this.dependentAttributes.length) {
                Object.keys(this.dependentFields).forEach(fieldKey => {
                    const field = this.record.fields[fieldKey] || null;
                    if (!field) {
                        return;
                    }
                    const types = this.dependentFields[fieldKey].type ?? [];
                    if (types.includes('logic')) {
                        this.logic.runLogic(field, this.mode, this.record, 'onFieldInitialize');
                    }
                    if (types.includes('displayLogic')) {
                        this.logicDisplay.runAll(field, this.record, this.mode);
                    }
                });
            }
            if (this.field.valueChanges$ && ((this.dependentFields && Object.keys(this.dependentFields).length) || this.dependentAttributes.length)) {
                this.subs.push(this.field.valueChanges$.pipe(debounceTime(500)).subscribe((data) => {
                    Object.keys(this.dependentFields).forEach(fieldKey => {
                        const dependentField = this.dependentFields[fieldKey];
                        const field = this.record.fields[fieldKey] || null;
                        if (!field) {
                            return;
                        }
                        if (this.field.previousValue != data.value) {
                            const types = dependentField.type ?? [];
                            if (types.includes('logic')) {
                                this.logic.runLogic(field, this.mode, this.record, 'onValueChange');
                            }
                            if (types.includes('displayLogic')) {
                                this.logicDisplay.runAll(field, this.record, this.mode);
                            }
                        }
                    });
                    this.field.previousValue = data.value;
                    this.dependentAttributes.forEach(dependency => {
                        const field = this.record.fields[dependency.field] || {};
                        const attribute = (field && field.attributes && field.attributes[dependency.attribute]) || null;
                        if (!attribute) {
                            return;
                        }
                        this.logic.runLogic(attribute, this.mode, this.record, 'onValueChange');
                    });
                }));
            }
        }
    }
    /**
     * Calculate dependent fields
     * @param {array} fieldKeys
     */
    calculateDependentFields(fieldKeys) {
        fieldKeys.forEach(key => {
            if (this.field.source === 'field' || this.field.source === 'groupField') {
                this.addFieldDependency(key, this.dependentFields, this.dependentAttributes);
                return;
            }
            if (this.field.source === 'attribute') {
                this.addAttributeDependency(key, this.dependentFields, this.dependentAttributes);
                return;
            }
        });
    }
    /**
     * Add field dependency
     * @param {string} fieldKey
     * @param {array} dependentFields
     * @param {object} dependentAttributes
     */
    addFieldDependency(fieldKey, dependentFields, dependentAttributes) {
        const field = this.record.fields[fieldKey];
        const name = this.field.name || this.field.definition.name || '';
        if (fieldKey === name || !field) {
            return;
        }
        if (field.fieldDependencies && this.isDependencyField(field.fieldDependencies)) {
            dependentFields[fieldKey] = field.fieldDependencies[name];
        }
        const attributeKeys = (field.attributes && Object.keys(field.attributes)) || [];
        attributeKeys.forEach(attributeKey => {
            const attribute = field.attributes[attributeKey];
            if (!attribute || !attribute.fieldDependencies || !attribute.fieldDependencies.length) {
                return;
            }
            if (this.isDependencyField(attribute.fieldDependencies)) {
                dependentAttributes.push({
                    field: fieldKey,
                    attribute: attributeKey,
                    types: dependentFields[name]['types'] ?? []
                });
            }
        });
    }
    /**
     * Check if field is dependency
     * @param dependencies
     * @returns {boolean}
     */
    isDependencyField(dependencies) {
        const name = this.field.name || this.field.definition.name || '';
        return !!(dependencies[name] ?? false);
    }
    /**
     * Add attribute dependency
     * @param {string} fieldKey
     * @param {array} dependentFields
     * @param {object} dependentAttributes
     */
    addAttributeDependency(fieldKey, dependentFields, dependentAttributes) {
        const field = this.record.fields[fieldKey];
        const name = this.field.name || this.field.definition.name || '';
        if (fieldKey === name || !field) {
            return;
        }
        if (field.attributeDependencies && field.attributeDependencies.length && this.isDependencyAttribute(field.attributeDependencies)) {
            dependentFields[name] = field.fieldDependencies[name];
        }
        const attributeKeys = (field.attributes && Object.keys(field.attributes)) || [];
        attributeKeys.forEach(attributeKey => {
            const attribute = field.attributes[attributeKey];
            if (!attribute || !attribute.attributeDependencies || !attribute.attributeDependencies.length) {
                return;
            }
            if (this.isDependencyAttribute(attribute.attributeDependencies)) {
                dependentAttributes.push({
                    field: fieldKey,
                    attribute: attributeKey,
                    types: (dependentFields[name] ?? {})['types'] ?? [],
                });
            }
        });
    }
    /**
     * Check if attribute is dependency
     * @param {object} attributeDependencies
     * @returns {boolean}
     */
    isDependencyAttribute(attributeDependencies) {
        const parentKey = this.field.parentKey || '';
        const name = this.field.name || this.field.definition.name || '';
        return attributeDependencies.some(dependency => parentKey === dependency.field && name === dependency.attribute);
    }
    subscribeValueChanges() {
        if (this.field && this.field.formControl) {
            this.subs.push(this.field.formControl.valueChanges.subscribe(value => {
                if (!isVoid(value)) {
                    value = value.trim();
                }
                else {
                    value = '';
                }
                if (this.typeFormatter && this.field.type) {
                    value = this.toInternalFormat(this.field.type, value);
                }
                this.setFieldValue(value);
            }));
        }
    }
    toInternalFormat(fieldType, value) {
        return this.typeFormatter.toInternalFormat(fieldType, value);
    }
    setFieldValue(newValue) {
        this.field.value = newValue;
    }
    unsubscribeAll() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    static ɵfac = function BaseFieldComponent_Factory(t) { return new (t || BaseFieldComponent)(i0.ɵɵdirectiveInject(i1.DataTypeFormatter), i0.ɵɵdirectiveInject(i2.FieldLogicManager), i0.ɵɵdirectiveInject(i3.FieldLogicDisplayManager)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BaseFieldComponent, selectors: [["ng-component"]], inputs: { mode: "mode", field: "field", record: "record", parent: "parent", klass: "klass" }, decls: 0, vars: 0, template: function BaseFieldComponent_Template(rf, ctx) { }, encapsulation: 2 });
}
export { BaseFieldComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseFieldComponent, [{
        type: Component,
        args: [{ template: '' }]
    }], function () { return [{ type: i1.DataTypeFormatter }, { type: i2.FieldLogicManager }, { type: i3.FieldLogicDisplayManager }]; }, { mode: [{
            type: Input
        }], field: [{
            type: Input
        }], record: [{
            type: Input
        }], parent: [{
            type: Input
        }], klass: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvZmllbGRzL2Jhc2UvYmFzZS1maWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUVsRSxPQUFPLEVBQTZCLE1BQU0sRUFBOEIsTUFBTSxRQUFRLENBQUM7QUFHdkYsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7OztBQUk1QyxNQUNhLGtCQUFrQjtJQVdiO0lBQ0E7SUFDQTtJQVpMLElBQUksQ0FBUztJQUNiLEtBQUssQ0FBUTtJQUNiLE1BQU0sQ0FBUztJQUNmLE1BQU0sQ0FBUztJQUNmLEtBQUssR0FBNkIsSUFBSSxDQUFDO0lBQ2hELGVBQWUsR0FBYyxFQUFFLENBQUM7SUFDaEMsbUJBQW1CLEdBQTBCLEVBQUUsQ0FBQztJQUN0QyxJQUFJLEdBQW1CLEVBQUUsQ0FBQztJQUVwQyxZQUNjLGFBQWdDLEVBQ2hDLEtBQXdCLEVBQ3hCLFlBQXNDO1FBRnRDLGtCQUFhLEdBQWIsYUFBYSxDQUFtQjtRQUNoQyxVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBMEI7SUFFcEQsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVTLFFBQVE7UUFDZCxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDTyxzQkFBc0I7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7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UUFBUSxDQUFDO0lBQ2hDLENBQUM7SUFFUyxjQUFjO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs0RUF0UFEsa0JBQWtCOzZEQUFsQixrQkFBa0I7O1NBQWxCLGtCQUFrQjt1RkFBbEIsa0JBQWtCO2NBRDlCLFNBQVM7ZUFBQyxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUM7MklBRVosSUFBSTtrQkFBWixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RmllbGRDb21wb25lbnRJbnRlcmZhY2V9IGZyb20gJy4vZmllbGQuaW50ZXJmYWNlJztcbmltcG9ydCB7QXR0cmlidXRlRGVwZW5kZW5jeSwgRmllbGQsIGlzVm9pZCwgT2JqZWN0TWFwLCBSZWNvcmQsIFZpZXdNb2RlfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtEYXRhVHlwZUZvcm1hdHRlcn0gZnJvbSAnLi4vLi4vc2VydmljZXMvZm9ybWF0dGVycy9kYXRhLXR5cGUuZm9ybWF0dGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtkZWJvdW5jZVRpbWV9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7RmllbGRMb2dpY01hbmFnZXJ9IGZyb20gJy4uL2ZpZWxkLWxvZ2ljL2ZpZWxkLWxvZ2ljLm1hbmFnZXInO1xuaW1wb3J0IHtGaWVsZExvZ2ljRGlzcGxheU1hbmFnZXJ9IGZyb20gJy4uL2ZpZWxkLWxvZ2ljLWRpc3BsYXkvZmllbGQtbG9naWMtZGlzcGxheS5tYW5hZ2VyJztcblxuQENvbXBvbmVudCh7dGVtcGxhdGU6ICcnfSlcbmV4cG9ydCBjbGFzcyBCYXNlRmllbGRDb21wb25lbnQgaW1wbGVtZW50cyBGaWVsZENvbXBvbmVudEludGVyZmFjZSwgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIEBJbnB1dCgpIG1vZGU6IHN0cmluZztcbiAgICBASW5wdXQoKSBmaWVsZDogRmllbGQ7XG4gICAgQElucHV0KCkgcmVjb3JkOiBSZWNvcmQ7XG4gICAgQElucHV0KCkgcGFyZW50OiBSZWNvcmQ7XG4gICAgQElucHV0KCkga2xhc3M6IHsgW2tsYXNzOiBzdHJpbmddOiBhbnkgfSA9IG51bGw7XG4gICAgZGVwZW5kZW50RmllbGRzOiBPYmplY3RNYXAgPSB7fTtcbiAgICBkZXBlbmRlbnRBdHRyaWJ1dGVzOiBBdHRyaWJ1dGVEZXBlbmRlbmN5W10gPSBbXTtcbiAgICBwcm90ZWN0ZWQgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgdHlwZUZvcm1hdHRlcjogRGF0YVR5cGVGb3JtYXR0ZXIsXG4gICAgICAgIHByb3RlY3RlZCBsb2dpYzogRmllbGRMb2dpY01hbmFnZXIsXG4gICAgICAgIHByb3RlY3RlZCBsb2dpY0Rpc3BsYXk6IEZpZWxkTG9naWNEaXNwbGF5TWFuYWdlclxuICAgICkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJhc2VJbml0KCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmVBbGwoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYmFzZUluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW5pdERlcGVuZGVuY3lIYW5kbGVycygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSBhbmQgaW5pdCBkZXBlbmRlbmN5IGhhbmRsZXJzXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGluaXREZXBlbmRlbmN5SGFuZGxlcnMoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5yZWNvcmQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmaWVsZEtleXMgPSAodGhpcy5yZWNvcmQuZmllbGRzICYmIE9iamVjdC5rZXlzKHRoaXMucmVjb3JkLmZpZWxkcykpIHx8IFtdO1xuICAgICAgICBpZiAoZmllbGRLZXlzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlRGVwZW5kZW50RmllbGRzKGZpZWxkS2V5cyk7XG4gICAgICAgICAgICB0aGlzLmZpZWxkLnByZXZpb3VzVmFsdWUgPSB0aGlzLmZpZWxkLnZhbHVlO1xuXG4gICAgICAgICAgICBpZigodGhpcy5kZXBlbmRlbnRGaWVsZHMgJiYgT2JqZWN0LmtleXModGhpcy5kZXBlbmRlbnRGaWVsZHMpLmxlbmd0aCkgfHwgdGhpcy5kZXBlbmRlbnRBdHRyaWJ1dGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZGVwZW5kZW50RmllbGRzKS5mb3JFYWNoKGZpZWxkS2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGQgPSB0aGlzLnJlY29yZC5maWVsZHNbZmllbGRLZXldIHx8IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZmllbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGVzID0gdGhpcy5kZXBlbmRlbnRGaWVsZHNbZmllbGRLZXldLnR5cGUgPz8gW107XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVzLmluY2x1ZGVzKCdsb2dpYycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2ljLnJ1bkxvZ2ljKGZpZWxkLCB0aGlzLm1vZGUgYXMgVmlld01vZGUsIHRoaXMucmVjb3JkLCAnb25GaWVsZEluaXRpYWxpemUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlcy5pbmNsdWRlcygnZGlzcGxheUxvZ2ljJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naWNEaXNwbGF5LnJ1bkFsbChmaWVsZCwgdGhpcy5yZWNvcmQsIHRoaXMubW9kZSBhcyBWaWV3TW9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuZmllbGQudmFsdWVDaGFuZ2VzJCAmJiAoKHRoaXMuZGVwZW5kZW50RmllbGRzICYmIE9iamVjdC5rZXlzKHRoaXMuZGVwZW5kZW50RmllbGRzKS5sZW5ndGgpIHx8IHRoaXMuZGVwZW5kZW50QXR0cmlidXRlcy5sZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5maWVsZC52YWx1ZUNoYW5nZXMkLnBpcGUoZGVib3VuY2VUaW1lKDUwMCkpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmRlcGVuZGVudEZpZWxkcykuZm9yRWFjaChmaWVsZEtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXBlbmRlbnRGaWVsZCA9IHRoaXMuZGVwZW5kZW50RmllbGRzW2ZpZWxkS2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5yZWNvcmQuZmllbGRzW2ZpZWxkS2V5XSB8fCBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFmaWVsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5maWVsZC5wcmV2aW91c1ZhbHVlICE9IGRhdGEudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlcyA9IGRlcGVuZGVudEZpZWxkLnR5cGUgPz8gW107XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZXMuaW5jbHVkZXMoJ2xvZ2ljJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpYy5ydW5Mb2dpYyhmaWVsZCwgdGhpcy5tb2RlIGFzIFZpZXdNb2RlLCB0aGlzLnJlY29yZCwgJ29uVmFsdWVDaGFuZ2UnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZXMuaW5jbHVkZXMoJ2Rpc3BsYXlMb2dpYycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naWNEaXNwbGF5LnJ1bkFsbChmaWVsZCwgdGhpcy5yZWNvcmQsIHRoaXMubW9kZSBhcyBWaWV3TW9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZC5wcmV2aW91c1ZhbHVlID0gZGF0YS52YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlcGVuZGVudEF0dHJpYnV0ZXMuZm9yRWFjaChkZXBlbmRlbmN5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5yZWNvcmQuZmllbGRzW2RlcGVuZGVuY3kuZmllbGRdIHx8IHt9IGFzIEZpZWxkO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlID0gKGZpZWxkICYmIGZpZWxkLmF0dHJpYnV0ZXMgJiYgZmllbGQuYXR0cmlidXRlc1tkZXBlbmRlbmN5LmF0dHJpYnV0ZV0pIHx8IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYXR0cmlidXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2ljLnJ1bkxvZ2ljKGF0dHJpYnV0ZSwgdGhpcy5tb2RlIGFzIFZpZXdNb2RlLCB0aGlzLnJlY29yZCwgJ29uVmFsdWVDaGFuZ2UnKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSBkZXBlbmRlbnQgZmllbGRzXG4gICAgICogQHBhcmFtIHthcnJheX0gZmllbGRLZXlzXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGNhbGN1bGF0ZURlcGVuZGVudEZpZWxkcyhmaWVsZEtleXM6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgICAgIGZpZWxkS2V5cy5mb3JFYWNoKGtleSA9PiB7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkLnNvdXJjZSA9PT0gJ2ZpZWxkJyB8fCB0aGlzLmZpZWxkLnNvdXJjZSA9PT0gJ2dyb3VwRmllbGQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRGaWVsZERlcGVuZGVuY3koa2V5LCB0aGlzLmRlcGVuZGVudEZpZWxkcywgdGhpcy5kZXBlbmRlbnRBdHRyaWJ1dGVzKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkLnNvdXJjZSA9PT0gJ2F0dHJpYnV0ZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEF0dHJpYnV0ZURlcGVuZGVuY3koa2V5LCB0aGlzLmRlcGVuZGVudEZpZWxkcywgdGhpcy5kZXBlbmRlbnRBdHRyaWJ1dGVzKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGZpZWxkIGRlcGVuZGVuY3lcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGRLZXlcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBkZXBlbmRlbnRGaWVsZHNcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGVwZW5kZW50QXR0cmlidXRlc1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBhZGRGaWVsZERlcGVuZGVuY3koZmllbGRLZXk6IHN0cmluZywgZGVwZW5kZW50RmllbGRzOiBPYmplY3RNYXAsIGRlcGVuZGVudEF0dHJpYnV0ZXM6IEF0dHJpYnV0ZURlcGVuZGVuY3lbXSk6IHZvaWQge1xuICAgICAgICBjb25zdCBmaWVsZCA9IHRoaXMucmVjb3JkLmZpZWxkc1tmaWVsZEtleV07XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmZpZWxkLm5hbWUgfHwgdGhpcy5maWVsZC5kZWZpbml0aW9uLm5hbWUgfHwgJyc7XG4gICAgICAgIGlmIChmaWVsZEtleSA9PT0gbmFtZSB8fCAhZmllbGQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmaWVsZC5maWVsZERlcGVuZGVuY2llcyAmJiB0aGlzLmlzRGVwZW5kZW5jeUZpZWxkKGZpZWxkLmZpZWxkRGVwZW5kZW5jaWVzKSkge1xuICAgICAgICAgICAgZGVwZW5kZW50RmllbGRzW2ZpZWxkS2V5XSA9IGZpZWxkLmZpZWxkRGVwZW5kZW5jaWVzW25hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYXR0cmlidXRlS2V5cyA9IChmaWVsZC5hdHRyaWJ1dGVzICYmIE9iamVjdC5rZXlzKGZpZWxkLmF0dHJpYnV0ZXMpKSB8fCBbXTtcblxuICAgICAgICBhdHRyaWJ1dGVLZXlzLmZvckVhY2goYXR0cmlidXRlS2V5ID0+IHtcblxuICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlID0gZmllbGQuYXR0cmlidXRlc1thdHRyaWJ1dGVLZXldO1xuICAgICAgICAgICAgaWYgKCFhdHRyaWJ1dGUgfHwgIWF0dHJpYnV0ZS5maWVsZERlcGVuZGVuY2llcyB8fCAhYXR0cmlidXRlLmZpZWxkRGVwZW5kZW5jaWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuaXNEZXBlbmRlbmN5RmllbGQoYXR0cmlidXRlLmZpZWxkRGVwZW5kZW5jaWVzKSkge1xuICAgICAgICAgICAgICAgIGRlcGVuZGVudEF0dHJpYnV0ZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiBmaWVsZEtleSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlOiBhdHRyaWJ1dGVLZXksXG4gICAgICAgICAgICAgICAgICAgIHR5cGVzOiBkZXBlbmRlbnRGaWVsZHNbbmFtZV1bJ3R5cGVzJ10gPz8gW11cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgZmllbGQgaXMgZGVwZW5kZW5jeVxuICAgICAqIEBwYXJhbSBkZXBlbmRlbmNpZXNcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaXNEZXBlbmRlbmN5RmllbGQoZGVwZW5kZW5jaWVzOiBPYmplY3RNYXApOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMuZmllbGQubmFtZSB8fCB0aGlzLmZpZWxkLmRlZmluaXRpb24ubmFtZSB8fCAnJztcblxuICAgICAgICByZXR1cm4gISEoZGVwZW5kZW5jaWVzW25hbWVdID8/IGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYXR0cmlidXRlIGRlcGVuZGVuY3lcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGRLZXlcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBkZXBlbmRlbnRGaWVsZHNcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGVwZW5kZW50QXR0cmlidXRlc1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBhZGRBdHRyaWJ1dGVEZXBlbmRlbmN5KGZpZWxkS2V5OiBzdHJpbmcsIGRlcGVuZGVudEZpZWxkczogT2JqZWN0TWFwLCBkZXBlbmRlbnRBdHRyaWJ1dGVzOiBBdHRyaWJ1dGVEZXBlbmRlbmN5W10pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSB0aGlzLnJlY29yZC5maWVsZHNbZmllbGRLZXldO1xuICAgICAgICBjb25zdCBuYW1lID0gdGhpcy5maWVsZC5uYW1lIHx8IHRoaXMuZmllbGQuZGVmaW5pdGlvbi5uYW1lIHx8ICcnO1xuICAgICAgICBpZiAoZmllbGRLZXkgPT09IG5hbWUgfHwgIWZpZWxkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmllbGQuYXR0cmlidXRlRGVwZW5kZW5jaWVzICYmIGZpZWxkLmF0dHJpYnV0ZURlcGVuZGVuY2llcy5sZW5ndGggJiYgdGhpcy5pc0RlcGVuZGVuY3lBdHRyaWJ1dGUoZmllbGQuYXR0cmlidXRlRGVwZW5kZW5jaWVzKSkge1xuICAgICAgICAgICAgZGVwZW5kZW50RmllbGRzW25hbWVdID0gZmllbGQuZmllbGREZXBlbmRlbmNpZXNbbmFtZV07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhdHRyaWJ1dGVLZXlzID0gKGZpZWxkLmF0dHJpYnV0ZXMgJiYgT2JqZWN0LmtleXMoZmllbGQuYXR0cmlidXRlcykpIHx8IFtdO1xuXG4gICAgICAgIGF0dHJpYnV0ZUtleXMuZm9yRWFjaChhdHRyaWJ1dGVLZXkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSBmaWVsZC5hdHRyaWJ1dGVzW2F0dHJpYnV0ZUtleV07XG4gICAgICAgICAgICBpZiAoIWF0dHJpYnV0ZSB8fCAhYXR0cmlidXRlLmF0dHJpYnV0ZURlcGVuZGVuY2llcyB8fCAhYXR0cmlidXRlLmF0dHJpYnV0ZURlcGVuZGVuY2llcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmlzRGVwZW5kZW5jeUF0dHJpYnV0ZShhdHRyaWJ1dGUuYXR0cmlidXRlRGVwZW5kZW5jaWVzKSkge1xuICAgICAgICAgICAgICAgIGRlcGVuZGVudEF0dHJpYnV0ZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiBmaWVsZEtleSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlOiBhdHRyaWJ1dGVLZXksXG4gICAgICAgICAgICAgICAgICAgIHR5cGVzOiAoZGVwZW5kZW50RmllbGRzW25hbWVdID8/IHt9KVsndHlwZXMnXSA/PyBbXSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgYXR0cmlidXRlIGlzIGRlcGVuZGVuY3lcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gYXR0cmlidXRlRGVwZW5kZW5jaWVzXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGlzRGVwZW5kZW5jeUF0dHJpYnV0ZShhdHRyaWJ1dGVEZXBlbmRlbmNpZXM6IEF0dHJpYnV0ZURlcGVuZGVuY3lbXSk6IGJvb2xlYW4ge1xuXG4gICAgICAgIGNvbnN0IHBhcmVudEtleSA9IHRoaXMuZmllbGQucGFyZW50S2V5IHx8ICcnO1xuICAgICAgICBjb25zdCBuYW1lID0gdGhpcy5maWVsZC5uYW1lIHx8IHRoaXMuZmllbGQuZGVmaW5pdGlvbi5uYW1lIHx8ICcnO1xuXG4gICAgICAgIHJldHVybiBhdHRyaWJ1dGVEZXBlbmRlbmNpZXMuc29tZShkZXBlbmRlbmN5ID0+IHBhcmVudEtleSA9PT0gZGVwZW5kZW5jeS5maWVsZCAmJiBuYW1lID09PSBkZXBlbmRlbmN5LmF0dHJpYnV0ZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHN1YnNjcmliZVZhbHVlQ2hhbmdlcygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuZmllbGQgJiYgdGhpcy5maWVsZC5mb3JtQ29udHJvbCkge1xuICAgICAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5maWVsZC5mb3JtQ29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHtcblxuICAgICAgICAgICAgICAgIGlmICghaXNWb2lkKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRyaW0oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnR5cGVGb3JtYXR0ZXIgJiYgdGhpcy5maWVsZC50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy50b0ludGVybmFsRm9ybWF0KHRoaXMuZmllbGQudHlwZSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RmllbGRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdG9JbnRlcm5hbEZvcm1hdChmaWVsZFR5cGUsIHZhbHVlKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZUZvcm1hdHRlci50b0ludGVybmFsRm9ybWF0KGZpZWxkVHlwZSwgdmFsdWUpO1xuXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldEZpZWxkVmFsdWUobmV3VmFsdWUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5maWVsZC52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB1bnN1YnNjcmliZUFsbCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgICB9XG59XG4iXX0=