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
import { LineActionActionHandler } from '../line.action';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/navigation/module-name-mapper/module-name-mapper.service";
import * as i2 from "@angular/router";
class CreateRelatedLineAction extends LineActionActionHandler {
    moduleNameMapper;
    router;
    key = 'create';
    modes = ['list'];
    constructor(moduleNameMapper, router) {
        super();
        this.moduleNameMapper = moduleNameMapper;
        this.router = router;
    }
    run(data, action = null) {
        const configs = action.params['create'] || {};
        const params = {};
        /* eslint-disable camelcase,@typescript-eslint/camelcase*/
        params.return_module = configs.legacyModuleName;
        params.return_action = configs.returnAction;
        params.return_id = data.record.id;
        /* eslint-enable camelcase,@typescript-eslint/camelcase */
        params[configs.mapping.moduleName] = configs.legacyModuleName;
        params[configs.mapping.name] = data.record.attributes.name;
        params[configs.mapping.id] = data.record.id;
        const route = '/' + configs.module + '/' + configs.action;
        this.router.navigate([route], {
            queryParams: params
        }).then();
    }
    shouldDisplay(data) {
        return true;
    }
    static ɵfac = function CreateRelatedLineAction_Factory(t) { return new (t || CreateRelatedLineAction)(i0.ɵɵinject(i1.ModuleNameMapper), i0.ɵɵinject(i2.Router)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CreateRelatedLineAction, factory: CreateRelatedLineAction.ɵfac, providedIn: 'root' });
}
export { CreateRelatedLineAction };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CreateRelatedLineAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.ModuleNameMapper }, { type: i2.Router }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXJlbGF0ZWQuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvdGFibGUvbGluZS1hY3Rpb25zL2NyZWF0ZS1yZWxhdGVkL2NyZWF0ZS1yZWxhdGVkLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUl6QyxPQUFPLEVBQUMsdUJBQXVCLEVBQWlCLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFFdkUsTUFHYSx1QkFBd0IsU0FBUSx1QkFBdUI7SUFJMUM7SUFBOEM7SUFIcEUsR0FBRyxHQUFHLFFBQVEsQ0FBQztJQUNmLEtBQUssR0FBRyxDQUFDLE1BQWtCLENBQUMsQ0FBQztJQUU3QixZQUFzQixnQkFBa0MsRUFBWSxNQUFjO1FBQzlFLEtBQUssRUFBRSxDQUFDO1FBRFUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFZLFdBQU0sR0FBTixNQUFNLENBQVE7SUFFbEYsQ0FBQztJQUVELEdBQUcsQ0FBQyxJQUFvQixFQUFFLFNBQWlCLElBQUk7UUFFM0MsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFTLENBQUM7UUFFckQsTUFBTSxNQUFNLEdBQTJCLEVBQUUsQ0FBQztRQUMxQywwREFBMEQ7UUFDMUQsTUFBTSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUM7UUFDaEQsTUFBTSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDO1FBQzVDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbEMsMERBQTBEO1FBQzFELE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztRQUU5RCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDM0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFFNUMsTUFBTSxLQUFLLEdBQUcsR0FBRyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFFMUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMxQixXQUFXLEVBQUUsTUFBTTtTQUN0QixDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRUQsYUFBYSxDQUFDLElBQW9CO1FBQzlCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7aUZBaENRLHVCQUF1QjtnRUFBdkIsdUJBQXVCLFdBQXZCLHVCQUF1QixtQkFGcEIsTUFBTTs7U0FFVCx1QkFBdUI7dUZBQXZCLHVCQUF1QjtjQUhuQyxVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7QWN0aW9uLCBWaWV3TW9kZX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7TW9kdWxlTmFtZU1hcHBlcn0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbmF2aWdhdGlvbi9tb2R1bGUtbmFtZS1tYXBwZXIvbW9kdWxlLW5hbWUtbWFwcGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtMaW5lQWN0aW9uQWN0aW9uSGFuZGxlciwgTGluZUFjdGlvbkRhdGF9IGZyb20gJy4uL2xpbmUuYWN0aW9uJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDcmVhdGVSZWxhdGVkTGluZUFjdGlvbiBleHRlbmRzIExpbmVBY3Rpb25BY3Rpb25IYW5kbGVyIHtcbiAgICBrZXkgPSAnY3JlYXRlJztcbiAgICBtb2RlcyA9IFsnbGlzdCcgYXMgVmlld01vZGVdO1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIG1vZHVsZU5hbWVNYXBwZXI6IE1vZHVsZU5hbWVNYXBwZXIsIHByb3RlY3RlZCByb3V0ZXI6IFJvdXRlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHJ1bihkYXRhOiBMaW5lQWN0aW9uRGF0YSwgYWN0aW9uOiBBY3Rpb24gPSBudWxsKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgY29uZmlncyA9IGFjdGlvbi5wYXJhbXNbJ2NyZWF0ZSddIHx8IHt9IGFzIGFueTtcblxuICAgICAgICBjb25zdCBwYXJhbXM6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlLEB0eXBlc2NyaXB0LWVzbGludC9jYW1lbGNhc2UqL1xuICAgICAgICBwYXJhbXMucmV0dXJuX21vZHVsZSA9IGNvbmZpZ3MubGVnYWN5TW9kdWxlTmFtZTtcbiAgICAgICAgcGFyYW1zLnJldHVybl9hY3Rpb24gPSBjb25maWdzLnJldHVybkFjdGlvbjtcbiAgICAgICAgcGFyYW1zLnJldHVybl9pZCA9IGRhdGEucmVjb3JkLmlkO1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIGNhbWVsY2FzZSxAdHlwZXNjcmlwdC1lc2xpbnQvY2FtZWxjYXNlICovXG4gICAgICAgIHBhcmFtc1tjb25maWdzLm1hcHBpbmcubW9kdWxlTmFtZV0gPSBjb25maWdzLmxlZ2FjeU1vZHVsZU5hbWU7XG5cbiAgICAgICAgcGFyYW1zW2NvbmZpZ3MubWFwcGluZy5uYW1lXSA9IGRhdGEucmVjb3JkLmF0dHJpYnV0ZXMubmFtZTtcbiAgICAgICAgcGFyYW1zW2NvbmZpZ3MubWFwcGluZy5pZF0gPSBkYXRhLnJlY29yZC5pZDtcblxuICAgICAgICBjb25zdCByb3V0ZSA9ICcvJyArIGNvbmZpZ3MubW9kdWxlICsgJy8nICsgY29uZmlncy5hY3Rpb247XG5cbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3JvdXRlXSwge1xuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHBhcmFtc1xuICAgICAgICB9KS50aGVuKCk7XG4gICAgfVxuXG4gICAgc2hvdWxkRGlzcGxheShkYXRhOiBMaW5lQWN0aW9uRGF0YSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG4iXX0=