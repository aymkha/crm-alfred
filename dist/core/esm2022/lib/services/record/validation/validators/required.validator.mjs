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
import { isTrue } from 'common';
import * as i0 from "@angular/core";
import * as i1 from "../../field/form-control.utils";
export const requiredValidator = (utils) => ((control) => {
    if (utils.isEmptyTrimmedInputValue(control.value)) {
        return {
            required: {
                required: true,
                message: {
                    labelKey: 'LBL_VALIDATION_ERROR_REQUIRED',
                    context: {
                        value: control.value
                    }
                }
            }
        };
    }
    return null;
});
export const booleanRequiredValidator = (utils) => ((control) => {
    if (utils.isEmptyBooleanInputValue(control.value)) {
        return {
            required: {
                required: true,
                message: {
                    labelKey: 'LBL_VALIDATION_ERROR_REQUIRED',
                    context: {
                        value: control.value
                    }
                }
            }
        };
    }
    return null;
});
class RequiredValidator {
    utils;
    constructor(utils) {
        this.utils = utils;
    }
    applies(record, viewField) {
        if (!viewField || !viewField.fieldDefinition) {
            return false;
        }
        return isTrue(viewField.fieldDefinition.required);
    }
    getValidator(viewField) {
        if (viewField.type === 'boolean') {
            return [booleanRequiredValidator(this.utils)];
        }
        return [requiredValidator(this.utils)];
    }
    static ɵfac = function RequiredValidator_Factory(t) { return new (t || RequiredValidator)(i0.ɵɵinject(i1.FormControlUtils)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RequiredValidator, factory: RequiredValidator.ɵfac, providedIn: 'root' });
}
export { RequiredValidator };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RequiredValidator, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.FormControlUtils }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWlyZWQudmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3NlcnZpY2VzL3JlY29yZC92YWxpZGF0aW9uL3ZhbGlkYXRvcnMvcmVxdWlyZWQudmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBR3pDLE9BQU8sRUFBQyxNQUFNLEVBQVMsTUFBTSxRQUFRLENBQUM7OztBQUt0QyxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLEtBQXVCLEVBQXVCLEVBQUUsQ0FBQyxDQUMvRSxDQUFDLE9BQXdCLEVBQW1DLEVBQUU7SUFFMUQsSUFBSSxLQUFLLENBQUMsd0JBQXdCLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQy9DLE9BQU87WUFDSCxRQUFRLEVBQUU7Z0JBQ04sUUFBUSxFQUFFLElBQUk7Z0JBQ2QsT0FBTyxFQUFFO29CQUNMLFFBQVEsRUFBRSwrQkFBK0I7b0JBQ3pDLE9BQU8sRUFBRTt3QkFDTCxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7cUJBQ3ZCO2lCQUNKO2FBQ0o7U0FDSixDQUFDO0tBQ0w7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDLENBQ0osQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUFHLENBQUMsS0FBdUIsRUFBdUIsRUFBRSxDQUFDLENBQ3RGLENBQUMsT0FBd0IsRUFBbUMsRUFBRTtJQUUxRCxJQUFJLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDL0MsT0FBTztZQUNILFFBQVEsRUFBRTtnQkFDTixRQUFRLEVBQUUsSUFBSTtnQkFDZCxPQUFPLEVBQUU7b0JBQ0wsUUFBUSxFQUFFLCtCQUErQjtvQkFDekMsT0FBTyxFQUFFO3dCQUNMLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztxQkFDdkI7aUJBQ0o7YUFDSjtTQUNKLENBQUM7S0FDTDtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUMsQ0FDSixDQUFDO0FBRUYsTUFHYSxpQkFBaUI7SUFFSjtJQUF0QixZQUFzQixLQUF1QjtRQUF2QixVQUFLLEdBQUwsS0FBSyxDQUFrQjtJQUM3QyxDQUFDO0lBRUQsT0FBTyxDQUFDLE1BQWMsRUFBRSxTQUE4QjtRQUNsRCxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRTtZQUMxQyxPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUVELE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELFlBQVksQ0FBQyxTQUE4QjtRQUV2QyxJQUFHLFNBQVMsQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFDO1lBQzVCLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUNqRDtRQUVELE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDOzJFQXBCUSxpQkFBaUI7Z0VBQWpCLGlCQUFpQixXQUFqQixpQkFBaUIsbUJBRmQsTUFBTTs7U0FFVCxpQkFBaUI7dUZBQWpCLGlCQUFpQjtjQUg3QixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1ZhbGlkYXRvckludGVyZmFjZX0gZnJvbSAnLi4vdmFsaWRhdG9yLkludGVyZmFjZSc7XG5pbXBvcnQge0Fic3RyYWN0Q29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtpc1RydWUsIFJlY29yZH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7Vmlld0ZpZWxkRGVmaW5pdGlvbn0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7U3RhbmRhcmRWYWxpZGF0aW9uRXJyb3JzLCBTdGFuZGFyZFZhbGlkYXRvckZufSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtGb3JtQ29udHJvbFV0aWxzfSBmcm9tICcuLi8uLi9maWVsZC9mb3JtLWNvbnRyb2wudXRpbHMnO1xuXG5leHBvcnQgY29uc3QgcmVxdWlyZWRWYWxpZGF0b3IgPSAodXRpbHM6IEZvcm1Db250cm9sVXRpbHMpOiBTdGFuZGFyZFZhbGlkYXRvckZuID0+IChcbiAgICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogU3RhbmRhcmRWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzRW1wdHlUcmltbWVkSW5wdXRWYWx1ZShjb250cm9sLnZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDoge1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxLZXk6ICdMQkxfVkFMSURBVElPTl9FUlJPUl9SRVFVSVJFRCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNvbnRyb2wudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4pO1xuXG5leHBvcnQgY29uc3QgYm9vbGVhblJlcXVpcmVkVmFsaWRhdG9yID0gKHV0aWxzOiBGb3JtQ29udHJvbFV0aWxzKTogU3RhbmRhcmRWYWxpZGF0b3JGbiA9PiAoXG4gICAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFN0YW5kYXJkVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xuXG4gICAgICAgIGlmICh1dGlscy5pc0VtcHR5Qm9vbGVhbklucHV0VmFsdWUoY29udHJvbC52YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsS2V5OiAnTEJMX1ZBTElEQVRJT05fRVJST1JfUkVRVUlSRUQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjb250cm9sLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuKTtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBSZXF1aXJlZFZhbGlkYXRvciBpbXBsZW1lbnRzIFZhbGlkYXRvckludGVyZmFjZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdXRpbHM6IEZvcm1Db250cm9sVXRpbHMpIHtcbiAgICB9XG5cbiAgICBhcHBsaWVzKHJlY29yZDogUmVjb3JkLCB2aWV3RmllbGQ6IFZpZXdGaWVsZERlZmluaXRpb24pOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCF2aWV3RmllbGQgfHwgIXZpZXdGaWVsZC5maWVsZERlZmluaXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpc1RydWUodmlld0ZpZWxkLmZpZWxkRGVmaW5pdGlvbi5yZXF1aXJlZCk7XG4gICAgfVxuXG4gICAgZ2V0VmFsaWRhdG9yKHZpZXdGaWVsZDogVmlld0ZpZWxkRGVmaW5pdGlvbik6IFN0YW5kYXJkVmFsaWRhdG9yRm5bXSB7XG5cbiAgICAgICAgaWYodmlld0ZpZWxkLnR5cGUgPT09ICdib29sZWFuJyl7XG4gICAgICAgICAgICByZXR1cm4gW2Jvb2xlYW5SZXF1aXJlZFZhbGlkYXRvcih0aGlzLnV0aWxzKV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW3JlcXVpcmVkVmFsaWRhdG9yKHRoaXMudXRpbHMpXTtcbiAgICB9XG5cbn1cbiJdfQ==