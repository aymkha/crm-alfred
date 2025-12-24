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
import { RecordActionHandler } from '../record.action';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/navigation/module-name-mapper/module-name-mapper.service";
import * as i2 from "@angular/router";
class RecordCreateAction extends RecordActionHandler {
    moduleNameMapper;
    router;
    key = 'create';
    modes = ['detail'];
    constructor(moduleNameMapper, router) {
        super();
        this.moduleNameMapper = moduleNameMapper;
        this.router = router;
    }
    run(data) {
        const store = data.store;
        const baseRecord = store.getBaseRecord();
        const route = '/' + store.vm.appData.module.name + '/edit';
        const module = this.moduleNameMapper.toLegacy(store.vm.appData.module.name);
        this.router.navigate([route], {
            queryParams: {
                // eslint-disable-next-line camelcase,@typescript-eslint/camelcase
                return_module: module,
                // eslint-disable-next-line camelcase,@typescript-eslint/camelcase
                return_action: 'DetailView',
                // eslint-disable-next-line camelcase,@typescript-eslint/camelcase
                return_record: (baseRecord && baseRecord.id) || ''
            }
        }).then();
    }
    shouldDisplay(data) {
        return this.checkRecordAccess(data, ['edit']);
    }
    static ɵfac = function RecordCreateAction_Factory(t) { return new (t || RecordCreateAction)(i0.ɵɵinject(i1.ModuleNameMapper), i0.ɵɵinject(i2.Router)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordCreateAction, factory: RecordCreateAction.ɵfac, providedIn: 'root' });
}
export { RecordCreateAction };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordCreateAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.ModuleNameMapper }, { type: i2.Router }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLWNyZWF0ZS5hY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvcmVjb3JkL2FjdGlvbnMvY3JlYXRlL3JlY29yZC1jcmVhdGUuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBSXpDLE9BQU8sRUFBbUIsbUJBQW1CLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQzs7OztBQUV2RSxNQUdhLGtCQUFtQixTQUFRLG1CQUFtQjtJQUlqQztJQUE4QztJQUhwRSxHQUFHLEdBQUcsUUFBUSxDQUFDO0lBQ2YsS0FBSyxHQUFHLENBQUMsUUFBb0IsQ0FBQyxDQUFDO0lBRS9CLFlBQXNCLGdCQUFrQyxFQUFZLE1BQWM7UUFDOUUsS0FBSyxFQUFFLENBQUM7UUFEVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVksV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUVsRixDQUFDO0lBRUQsR0FBRyxDQUFDLElBQXNCO1FBQ3RCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDekIsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXpDLE1BQU0sS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztRQUMzRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU1RSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFCLFdBQVcsRUFBRTtnQkFDVCxrRUFBa0U7Z0JBQ2xFLGFBQWEsRUFBRSxNQUFNO2dCQUNyQixrRUFBa0U7Z0JBQ2xFLGFBQWEsRUFBRSxZQUFZO2dCQUMzQixrRUFBa0U7Z0JBQ2xFLGFBQWEsRUFBRSxDQUFDLFVBQVUsSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRTthQUNyRDtTQUNKLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRCxhQUFhLENBQUMsSUFBc0I7UUFDaEMsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDOzRFQTdCUSxrQkFBa0I7Z0VBQWxCLGtCQUFrQixXQUFsQixrQkFBa0IsbUJBRmYsTUFBTTs7U0FFVCxrQkFBa0I7dUZBQWxCLGtCQUFrQjtjQUg5QixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7Vmlld01vZGV9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge01vZHVsZU5hbWVNYXBwZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL25hdmlnYXRpb24vbW9kdWxlLW5hbWUtbWFwcGVyL21vZHVsZS1uYW1lLW1hcHBlci5zZXJ2aWNlJztcbmltcG9ydCB7UmVjb3JkQWN0aW9uRGF0YSwgUmVjb3JkQWN0aW9uSGFuZGxlcn0gZnJvbSAnLi4vcmVjb3JkLmFjdGlvbic7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUmVjb3JkQ3JlYXRlQWN0aW9uIGV4dGVuZHMgUmVjb3JkQWN0aW9uSGFuZGxlciB7XG4gICAga2V5ID0gJ2NyZWF0ZSc7XG4gICAgbW9kZXMgPSBbJ2RldGFpbCcgYXMgVmlld01vZGVdO1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIG1vZHVsZU5hbWVNYXBwZXI6IE1vZHVsZU5hbWVNYXBwZXIsIHByb3RlY3RlZCByb3V0ZXI6IFJvdXRlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHJ1bihkYXRhOiBSZWNvcmRBY3Rpb25EYXRhKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHN0b3JlID0gZGF0YS5zdG9yZTtcbiAgICAgICAgY29uc3QgYmFzZVJlY29yZCA9IHN0b3JlLmdldEJhc2VSZWNvcmQoKTtcblxuICAgICAgICBjb25zdCByb3V0ZSA9ICcvJyArIHN0b3JlLnZtLmFwcERhdGEubW9kdWxlLm5hbWUgKyAnL2VkaXQnO1xuICAgICAgICBjb25zdCBtb2R1bGUgPSB0aGlzLm1vZHVsZU5hbWVNYXBwZXIudG9MZWdhY3koc3RvcmUudm0uYXBwRGF0YS5tb2R1bGUubmFtZSk7XG5cbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3JvdXRlXSwge1xuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlLEB0eXBlc2NyaXB0LWVzbGludC9jYW1lbGNhc2VcbiAgICAgICAgICAgICAgICByZXR1cm5fbW9kdWxlOiBtb2R1bGUsXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZSxAdHlwZXNjcmlwdC1lc2xpbnQvY2FtZWxjYXNlXG4gICAgICAgICAgICAgICAgcmV0dXJuX2FjdGlvbjogJ0RldGFpbFZpZXcnLFxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2UsQHR5cGVzY3JpcHQtZXNsaW50L2NhbWVsY2FzZVxuICAgICAgICAgICAgICAgIHJldHVybl9yZWNvcmQ6IChiYXNlUmVjb3JkICYmIGJhc2VSZWNvcmQuaWQpIHx8ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oKTtcbiAgICB9XG5cbiAgICBzaG91bGREaXNwbGF5KGRhdGE6IFJlY29yZEFjdGlvbkRhdGEpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tSZWNvcmRBY2Nlc3MoZGF0YSwgWydlZGl0J10pO1xuICAgIH1cbn1cbiJdfQ==