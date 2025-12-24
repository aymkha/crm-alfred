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
import * as i0 from "@angular/core";
import * as i1 from "../validation/validation.manager";
import * as i2 from "../../formatters/data-type.formatter.service";
class GroupFieldBuilder extends FieldBuilder {
    validationManager;
    typeFormatter;
    constructor(validationManager, typeFormatter) {
        super(validationManager, typeFormatter);
        this.validationManager = validationManager;
        this.typeFormatter = typeFormatter;
    }
    /**
     * Create and add group fields to record
     *
     * @param {object} record Record
     * @param {object} viewField ViewFieldDefinition
     * @param {object} language LanguageStore
     * @param {function} isInitializedFunction
     * @param {function} buildFieldFunction
     * @param {function} addRecordFunction
     */
    addGroupFields(record, viewField, language, isInitializedFunction, buildFieldFunction, addRecordFunction) {
        const definition = (viewField && viewField.fieldDefinition) || {};
        const groupFields = definition.groupFields || {};
        const groupFieldsKeys = Object.keys(groupFields);
        groupFieldsKeys.forEach(key => {
            const fieldDefinition = groupFields[key];
            if (isInitializedFunction(record, key)) {
                return;
            }
            if (fieldDefinition && fieldDefinition.type === 'relate' && fieldDefinition.type_name === 'parent_type') {
                fieldDefinition.module = record.attributes.parent_type;
            }
            const groupViewField = {
                name: fieldDefinition.name,
                label: fieldDefinition.vname,
                type: fieldDefinition.type,
                fieldDefinition
            };
            const groupField = buildFieldFunction(record, groupViewField, language);
            groupField.source = 'groupField';
            addRecordFunction(record, fieldDefinition.name, groupField);
        });
    }
    static ɵfac = function GroupFieldBuilder_Factory(t) { return new (t || GroupFieldBuilder)(i0.ɵɵinject(i1.ValidationManager), i0.ɵɵinject(i2.DataTypeFormatter)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: GroupFieldBuilder, factory: GroupFieldBuilder.ɵfac, providedIn: 'root' });
}
export { GroupFieldBuilder };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupFieldBuilder, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.ValidationManager }, { type: i2.DataTypeFormatter }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAtZmllbGQuYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9zZXJ2aWNlcy9yZWNvcmQvZmllbGQvZ3JvdXAtZmllbGQuYnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRzdDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7QUFJekMsTUFHYSxpQkFBa0IsU0FBUSxZQUFZO0lBR2pDO0lBQ0E7SUFGZCxZQUNjLGlCQUFvQyxFQUNwQyxhQUFnQztRQUUxQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFIOUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxrQkFBYSxHQUFiLGFBQWEsQ0FBbUI7SUFHOUMsQ0FBQztJQUdEOzs7Ozs7Ozs7T0FTRztJQUNJLGNBQWMsQ0FDakIsTUFBYyxFQUNkLFNBQThCLEVBQzlCLFFBQXVCLEVBQ3ZCLHFCQUErQixFQUMvQixrQkFBNEIsRUFDNUIsaUJBQTJCO1FBRzNCLE1BQU0sVUFBVSxHQUFHLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbEUsTUFBTSxXQUFXLEdBQUcsVUFBVSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUM7UUFDakQsTUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVqRCxlQUFlLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzFCLE1BQU0sZUFBZSxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUV6QyxJQUFJLHFCQUFxQixDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRTtnQkFDcEMsT0FBTzthQUNWO1lBRUQsSUFBSSxlQUFlLElBQUksZUFBZSxDQUFDLElBQUksS0FBSyxRQUFRLElBQUksZUFBZSxDQUFDLFNBQVMsS0FBSyxhQUFhLEVBQUU7Z0JBQ3JHLGVBQWUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7YUFDMUQ7WUFFRCxNQUFNLGNBQWMsR0FBRztnQkFDbkIsSUFBSSxFQUFFLGVBQWUsQ0FBQyxJQUFJO2dCQUMxQixLQUFLLEVBQUUsZUFBZSxDQUFDLEtBQUs7Z0JBQzVCLElBQUksRUFBRSxlQUFlLENBQUMsSUFBSTtnQkFDMUIsZUFBZTthQUNsQixDQUFDO1lBRUYsTUFBTSxVQUFVLEdBQUcsa0JBQWtCLENBQUMsTUFBTSxFQUFFLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN4RSxVQUFVLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQztZQUNqQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNoRSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7MkVBdkRRLGlCQUFpQjtnRUFBakIsaUJBQWlCLFdBQWpCLGlCQUFpQixtQkFGZCxNQUFNOztTQUVULGlCQUFpQjt1RkFBakIsaUJBQWlCO2NBSDdCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtGaWVsZEJ1aWxkZXJ9IGZyb20gJy4vZmllbGQuYnVpbGRlcic7XG5pbXBvcnQge1JlY29yZCwgVmlld0ZpZWxkRGVmaW5pdGlvbn0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VmFsaWRhdGlvbk1hbmFnZXJ9IGZyb20gJy4uL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi5tYW5hZ2VyJztcbmltcG9ydCB7RGF0YVR5cGVGb3JtYXR0ZXJ9IGZyb20gJy4uLy4uL2Zvcm1hdHRlcnMvZGF0YS10eXBlLmZvcm1hdHRlci5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBHcm91cEZpZWxkQnVpbGRlciBleHRlbmRzIEZpZWxkQnVpbGRlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIHZhbGlkYXRpb25NYW5hZ2VyOiBWYWxpZGF0aW9uTWFuYWdlcixcbiAgICAgICAgcHJvdGVjdGVkIHR5cGVGb3JtYXR0ZXI6IERhdGFUeXBlRm9ybWF0dGVyXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKHZhbGlkYXRpb25NYW5hZ2VyLCB0eXBlRm9ybWF0dGVyKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhbmQgYWRkIGdyb3VwIGZpZWxkcyB0byByZWNvcmRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZWNvcmQgUmVjb3JkXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHZpZXdGaWVsZCBWaWV3RmllbGREZWZpbml0aW9uXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGxhbmd1YWdlIExhbmd1YWdlU3RvcmVcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBpc0luaXRpYWxpemVkRnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBidWlsZEZpZWxkRnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBhZGRSZWNvcmRGdW5jdGlvblxuICAgICAqL1xuICAgIHB1YmxpYyBhZGRHcm91cEZpZWxkcyhcbiAgICAgICAgcmVjb3JkOiBSZWNvcmQsXG4gICAgICAgIHZpZXdGaWVsZDogVmlld0ZpZWxkRGVmaW5pdGlvbixcbiAgICAgICAgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIGlzSW5pdGlhbGl6ZWRGdW5jdGlvbjogRnVuY3Rpb24sXG4gICAgICAgIGJ1aWxkRmllbGRGdW5jdGlvbjogRnVuY3Rpb24sXG4gICAgICAgIGFkZFJlY29yZEZ1bmN0aW9uOiBGdW5jdGlvbixcbiAgICApOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gKHZpZXdGaWVsZCAmJiB2aWV3RmllbGQuZmllbGREZWZpbml0aW9uKSB8fCB7fTtcbiAgICAgICAgY29uc3QgZ3JvdXBGaWVsZHMgPSBkZWZpbml0aW9uLmdyb3VwRmllbGRzIHx8IHt9O1xuICAgICAgICBjb25zdCBncm91cEZpZWxkc0tleXMgPSBPYmplY3Qua2V5cyhncm91cEZpZWxkcyk7XG5cbiAgICAgICAgZ3JvdXBGaWVsZHNLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkRGVmaW5pdGlvbiA9IGdyb3VwRmllbGRzW2tleV07XG5cbiAgICAgICAgICAgIGlmIChpc0luaXRpYWxpemVkRnVuY3Rpb24ocmVjb3JkLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZmllbGREZWZpbml0aW9uICYmIGZpZWxkRGVmaW5pdGlvbi50eXBlID09PSAncmVsYXRlJyAmJiBmaWVsZERlZmluaXRpb24udHlwZV9uYW1lID09PSAncGFyZW50X3R5cGUnKSB7XG4gICAgICAgICAgICAgICAgZmllbGREZWZpbml0aW9uLm1vZHVsZSA9IHJlY29yZC5hdHRyaWJ1dGVzLnBhcmVudF90eXBlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBncm91cFZpZXdGaWVsZCA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBmaWVsZERlZmluaXRpb24ubmFtZSxcbiAgICAgICAgICAgICAgICBsYWJlbDogZmllbGREZWZpbml0aW9uLnZuYW1lLFxuICAgICAgICAgICAgICAgIHR5cGU6IGZpZWxkRGVmaW5pdGlvbi50eXBlLFxuICAgICAgICAgICAgICAgIGZpZWxkRGVmaW5pdGlvblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgZ3JvdXBGaWVsZCA9IGJ1aWxkRmllbGRGdW5jdGlvbihyZWNvcmQsIGdyb3VwVmlld0ZpZWxkLCBsYW5ndWFnZSk7XG4gICAgICAgICAgICBncm91cEZpZWxkLnNvdXJjZSA9ICdncm91cEZpZWxkJztcbiAgICAgICAgICAgIGFkZFJlY29yZEZ1bmN0aW9uKHJlY29yZCwgZmllbGREZWZpbml0aW9uLm5hbWUsIGdyb3VwRmllbGQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdfQ==