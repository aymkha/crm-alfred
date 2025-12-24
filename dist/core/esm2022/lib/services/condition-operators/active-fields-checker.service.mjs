/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2023 SalesAgility Ltd.
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
import { isEmpty } from "lodash-es";
import * as i0 from "@angular/core";
import * as i1 from "./condition-operator.manager";
class ActiveFieldsChecker {
    operatorManager;
    constructor(operatorManager) {
        this.operatorManager = operatorManager;
    }
    /**
     * Check if any of the configured values is currently set
     * @param {array} relatedFields
     * @param {object} record
     * @param {object} activeOnFields
     * @param {array} relatedAttributesFields
     * @param {object} activeOnAttributes
     */
    isActive(relatedFields, record, activeOnFields, relatedAttributesFields, activeOnAttributes) {
        let isActive = true;
        if (!isEmpty(activeOnFields)) {
            isActive = this.areFieldsActive(relatedFields, record, activeOnFields);
        }
        if (!isEmpty(activeOnAttributes)) {
            isActive = isActive && this.areAttributesActive(relatedAttributesFields, record, activeOnAttributes);
        }
        return isActive;
    }
    /**
     * Are attributes active
     * @param {array} relatedAttributesFields
     * @param {object} record
     * @param {object} activeOnAttributes
     */
    areAttributesActive(relatedAttributesFields, record, activeOnAttributes) {
        return relatedAttributesFields.every(fieldKey => {
            const fields = record.fields;
            const field = (fields && record.fields[fieldKey]) || null;
            const attributes = activeOnAttributes[fieldKey] && Object.keys(activeOnAttributes[fieldKey]);
            if (!field || !attributes || !attributes.length) {
                return;
            }
            return attributes.some(attributeKey => {
                const activeValues = activeOnAttributes[fieldKey][attributeKey];
                const attribute = field.attributes && field.attributes[attributeKey];
                if (!activeValues || !activeValues.length || !attribute) {
                    return;
                }
                return this.isValueActive(record, attribute, activeValues);
            });
        });
    }
    /**
     * Are fields active
     * @param {array} relatedFields
     * @param {object} record
     * @param {object} activeOnFields
     */
    areFieldsActive(relatedFields, record, activeOnFields) {
        return relatedFields.every(fieldKey => {
            const fields = record.fields;
            const field = (fields && record.fields[fieldKey]) || null;
            const activeValues = activeOnFields[fieldKey];
            if (!field || !activeValues || !activeValues.length) {
                return true;
            }
            return this.isValueActive(record, field, activeValues);
        });
    }
    /**
     * Is value active
     * @param {object} record
     * @param {object} field
     * @param {array} activeValues
     */
    isValueActive(record, field, activeValues) {
        let isActive = false;
        if (field.valueList && field.valueList.length) {
            field.valueList.some(value => {
                return activeValues.some(activeValue => {
                    if (activeValue === value) {
                        isActive = true;
                        return true;
                    }
                });
            });
            return isActive;
        }
        const fields = Object.keys(record.fields);
        let opsArr = [];
        if (field.value) {
            activeValues.some(activeValue => {
                if (activeValue.field && !fields.includes(activeValue.field)) {
                    return;
                }
                if (activeValue === field.value && !activeValue.operator) {
                    isActive = true;
                }
                if (activeValue.operator) {
                    const operatorKey = activeValue.operator;
                    const operator = this.operatorManager.get(operatorKey);
                    opsArr.push(operator.run(record, field, activeValue));
                    isActive = opsArr.every(data => data);
                }
            });
        }
        else {
            activeValues.some(activeValue => {
                if (activeValue.operator) {
                    if (activeValue.field && !fields.includes(activeValue.field)) {
                        return;
                    }
                    const operatorKey = activeValue.operator;
                    const operator = this.operatorManager.get(operatorKey);
                    opsArr.push(operator.run(record, field, activeValue));
                    isActive = opsArr.every(data => data);
                }
            });
        }
        return isActive;
    }
    static ɵfac = function ActiveFieldsChecker_Factory(t) { return new (t || ActiveFieldsChecker)(i0.ɵɵinject(i1.ConditionOperatorManager)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ActiveFieldsChecker, factory: ActiveFieldsChecker.ɵfac, providedIn: 'root' });
}
export { ActiveFieldsChecker };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ActiveFieldsChecker, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.ConditionOperatorManager }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWZpZWxkcy1jaGVja2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc2VydmljZXMvY29uZGl0aW9uLW9wZXJhdG9ycy9hY3RpdmUtZmllbGRzLWNoZWNrZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sV0FBVyxDQUFDOzs7QUFHbEMsTUFHYSxtQkFBbUI7SUFFTjtJQUF0QixZQUFzQixlQUF5QztRQUF6QyxvQkFBZSxHQUFmLGVBQWUsQ0FBMEI7SUFDL0QsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSSxRQUFRLENBQ1gsYUFBdUIsRUFDdkIsTUFBYyxFQUNkLGNBQThCLEVBQzlCLHVCQUFpQyxFQUNqQyxrQkFBcUM7UUFFckMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDMUIsUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztTQUMxRTtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsRUFBRTtZQUM5QixRQUFRLEdBQUcsUUFBUSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyx1QkFBdUIsRUFBRSxNQUFNLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztTQUN4RztRQUVELE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNPLG1CQUFtQixDQUN6Qix1QkFBaUMsRUFDakMsTUFBYyxFQUNkLGtCQUFxQztRQUVyQyxPQUFPLHVCQUF1QixDQUFDLEtBQUssQ0FB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Q0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDekM7WUFDTCxDQUFDLENBQUMsQ0FBQTtTQUVMO1FBRUQsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQzs2RUE1SVEsbUJBQW1CO2dFQUFuQixtQkFBbUIsV0FBbkIsbUJBQW1CLG1CQUZoQixNQUFNOztTQUVULG1CQUFtQjt1RkFBbkIsbUJBQW1CO2NBSC9CLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIzIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RmllbGQsIFJlY29yZCwgU3RyaW5nQXJyYXlNYXAsIFN0cmluZ0FycmF5TWF0cml4fSBmcm9tIFwiY29tbW9uXCI7XG5pbXBvcnQge2lzRW1wdHl9IGZyb20gXCJsb2Rhc2gtZXNcIjtcbmltcG9ydCB7Q29uZGl0aW9uT3BlcmF0b3JNYW5hZ2VyfSBmcm9tIFwiLi9jb25kaXRpb24tb3BlcmF0b3IubWFuYWdlclwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEFjdGl2ZUZpZWxkc0NoZWNrZXIge1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIG9wZXJhdG9yTWFuYWdlcjogQ29uZGl0aW9uT3BlcmF0b3JNYW5hZ2VyKSB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgYW55IG9mIHRoZSBjb25maWd1cmVkIHZhbHVlcyBpcyBjdXJyZW50bHkgc2V0XG4gICAgICogQHBhcmFtIHthcnJheX0gcmVsYXRlZEZpZWxkc1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZWNvcmRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gYWN0aXZlT25GaWVsZHNcbiAgICAgKiBAcGFyYW0ge2FycmF5fSByZWxhdGVkQXR0cmlidXRlc0ZpZWxkc1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBhY3RpdmVPbkF0dHJpYnV0ZXNcbiAgICAgKi9cbiAgICBwdWJsaWMgaXNBY3RpdmUoXG4gICAgICAgIHJlbGF0ZWRGaWVsZHM6IHN0cmluZ1tdLFxuICAgICAgICByZWNvcmQ6IFJlY29yZCxcbiAgICAgICAgYWN0aXZlT25GaWVsZHM6IFN0cmluZ0FycmF5TWFwLFxuICAgICAgICByZWxhdGVkQXR0cmlidXRlc0ZpZWxkczogc3RyaW5nW10sXG4gICAgICAgIGFjdGl2ZU9uQXR0cmlidXRlczogU3RyaW5nQXJyYXlNYXRyaXhcbiAgICApIHtcbiAgICAgICAgbGV0IGlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgaWYgKCFpc0VtcHR5KGFjdGl2ZU9uRmllbGRzKSkge1xuICAgICAgICAgICAgaXNBY3RpdmUgPSB0aGlzLmFyZUZpZWxkc0FjdGl2ZShyZWxhdGVkRmllbGRzLCByZWNvcmQsIGFjdGl2ZU9uRmllbGRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNFbXB0eShhY3RpdmVPbkF0dHJpYnV0ZXMpKSB7XG4gICAgICAgICAgICBpc0FjdGl2ZSA9IGlzQWN0aXZlICYmIHRoaXMuYXJlQXR0cmlidXRlc0FjdGl2ZShyZWxhdGVkQXR0cmlidXRlc0ZpZWxkcywgcmVjb3JkLCBhY3RpdmVPbkF0dHJpYnV0ZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGlzQWN0aXZlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFyZSBhdHRyaWJ1dGVzIGFjdGl2ZVxuICAgICAqIEBwYXJhbSB7YXJyYXl9IHJlbGF0ZWRBdHRyaWJ1dGVzRmllbGRzXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlY29yZFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBhY3RpdmVPbkF0dHJpYnV0ZXNcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYXJlQXR0cmlidXRlc0FjdGl2ZShcbiAgICAgICAgcmVsYXRlZEF0dHJpYnV0ZXNGaWVsZHM6IHN0cmluZ1tdLFxuICAgICAgICByZWNvcmQ6IFJlY29yZCxcbiAgICAgICAgYWN0aXZlT25BdHRyaWJ1dGVzOiBTdHJpbmdBcnJheU1hdHJpeFxuICAgICk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gcmVsYXRlZEF0dHJpYnV0ZXNGaWVsZHMuZXZlcnkoZmllbGRLZXkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBmaWVsZHMgPSByZWNvcmQuZmllbGRzO1xuICAgICAgICAgICAgY29uc3QgZmllbGQgPSAoZmllbGRzICYmIHJlY29yZC5maWVsZHNbZmllbGRLZXldKSB8fCBudWxsO1xuICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IGFjdGl2ZU9uQXR0cmlidXRlc1tmaWVsZEtleV0gJiYgT2JqZWN0LmtleXMoYWN0aXZlT25BdHRyaWJ1dGVzW2ZpZWxkS2V5XSk7XG4gICAgICAgICAgICBpZiAoIWZpZWxkIHx8ICFhdHRyaWJ1dGVzIHx8ICFhdHRyaWJ1dGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXMuc29tZShhdHRyaWJ1dGVLZXkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGl2ZVZhbHVlcyA9IGFjdGl2ZU9uQXR0cmlidXRlc1tmaWVsZEtleV1bYXR0cmlidXRlS2V5XTtcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSBmaWVsZC5hdHRyaWJ1dGVzICYmIGZpZWxkLmF0dHJpYnV0ZXNbYXR0cmlidXRlS2V5XTtcblxuICAgICAgICAgICAgICAgIGlmICghYWN0aXZlVmFsdWVzIHx8ICFhY3RpdmVWYWx1ZXMubGVuZ3RoIHx8ICFhdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbHVlQWN0aXZlKHJlY29yZCwgYXR0cmlidXRlLCBhY3RpdmVWYWx1ZXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFyZSBmaWVsZHMgYWN0aXZlXG4gICAgICogQHBhcmFtIHthcnJheX0gcmVsYXRlZEZpZWxkc1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZWNvcmRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gYWN0aXZlT25GaWVsZHNcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYXJlRmllbGRzQWN0aXZlKHJlbGF0ZWRGaWVsZHM6IHN0cmluZ1tdLCByZWNvcmQ6IFJlY29yZCwgYWN0aXZlT25GaWVsZHM6IFN0cmluZ0FycmF5TWFwKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiByZWxhdGVkRmllbGRzLmV2ZXJ5KGZpZWxkS2V5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkcyA9IHJlY29yZC5maWVsZHM7XG4gICAgICAgICAgICBjb25zdCBmaWVsZCA9IChmaWVsZHMgJiYgcmVjb3JkLmZpZWxkc1tmaWVsZEtleV0pIHx8IG51bGw7XG4gICAgICAgICAgICBjb25zdCBhY3RpdmVWYWx1ZXMgPSBhY3RpdmVPbkZpZWxkc1tmaWVsZEtleV07XG4gICAgICAgICAgICBpZiAoIWZpZWxkIHx8ICFhY3RpdmVWYWx1ZXMgfHwgIWFjdGl2ZVZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzVmFsdWVBY3RpdmUocmVjb3JkLCBmaWVsZCwgYWN0aXZlVmFsdWVzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSXMgdmFsdWUgYWN0aXZlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlY29yZFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZFxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGFjdGl2ZVZhbHVlc1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBpc1ZhbHVlQWN0aXZlKHJlY29yZDogUmVjb3JkLCBmaWVsZDogRmllbGQsIGFjdGl2ZVZhbHVlczogc3RyaW5nW10gfCBhbnkpOiBib29sZWFuIHtcblxuICAgICAgICBsZXQgaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKGZpZWxkLnZhbHVlTGlzdCAmJiBmaWVsZC52YWx1ZUxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICBmaWVsZC52YWx1ZUxpc3Quc29tZSh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjdGl2ZVZhbHVlcy5zb21lKGFjdGl2ZVZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGl2ZVZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBpc0FjdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IE9iamVjdC5rZXlzKHJlY29yZC5maWVsZHMpO1xuICAgICAgICBsZXQgb3BzQXJyOiBib29sZWFuW10gPSBbXTtcblxuICAgICAgICBpZiAoZmllbGQudmFsdWUpIHtcbiAgICAgICAgICAgIGFjdGl2ZVZhbHVlcy5zb21lKGFjdGl2ZVZhbHVlID0+IHtcblxuICAgICAgICAgICAgICAgIGlmIChhY3RpdmVWYWx1ZS5maWVsZCAmJiAhZmllbGRzLmluY2x1ZGVzKGFjdGl2ZVZhbHVlLmZpZWxkKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGFjdGl2ZVZhbHVlID09PSBmaWVsZC52YWx1ZSAmJiAhYWN0aXZlVmFsdWUub3BlcmF0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYWN0aXZlVmFsdWUub3BlcmF0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3BlcmF0b3JLZXkgPSBhY3RpdmVWYWx1ZS5vcGVyYXRvcjtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3BlcmF0b3IgPSB0aGlzLm9wZXJhdG9yTWFuYWdlci5nZXQob3BlcmF0b3JLZXkpO1xuICAgICAgICAgICAgICAgICAgICBvcHNBcnIucHVzaChvcGVyYXRvci5ydW4ocmVjb3JkLCBmaWVsZCwgYWN0aXZlVmFsdWUpKVxuICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZSA9IG9wc0Fyci5ldmVyeShkYXRhID0+IGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY3RpdmVWYWx1ZXMuc29tZShhY3RpdmVWYWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGFjdGl2ZVZhbHVlLm9wZXJhdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhY3RpdmVWYWx1ZS5maWVsZCAmJiAhZmllbGRzLmluY2x1ZGVzKGFjdGl2ZVZhbHVlLmZpZWxkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yS2V5ID0gYWN0aXZlVmFsdWUub3BlcmF0b3I7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yID0gdGhpcy5vcGVyYXRvck1hbmFnZXIuZ2V0KG9wZXJhdG9yS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgb3BzQXJyLnB1c2gob3BlcmF0b3IucnVuKHJlY29yZCwgZmllbGQsIGFjdGl2ZVZhbHVlKSlcbiAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmUgPSBvcHNBcnIuZXZlcnkoZGF0YSA9PiBkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaXNBY3RpdmU7XG4gICAgfVxufVxuIl19