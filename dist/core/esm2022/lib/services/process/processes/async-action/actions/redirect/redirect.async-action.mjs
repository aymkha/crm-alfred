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
import { AsyncActionHandler } from '../../async-action.model';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../../../../message/message.service";
class RedirectAsyncAction extends AsyncActionHandler {
    router;
    message;
    key = 'redirect';
    constructor(router, message) {
        super();
        this.router = router;
        this.message = message;
    }
    run(data) {
        if (!data || !data.route) {
            this.message.addDangerMessageByKey('LBL_MISSING_HANDLER_DATA_ROUTE');
            return;
        }
        const params = {
            queryParams: {}
        };
        if (data.queryParams) {
            params.queryParams = data.queryParams;
        }
        this.router.navigate([data.route], params).then();
    }
    static ɵfac = function RedirectAsyncAction_Factory(t) { return new (t || RedirectAsyncAction)(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.MessageService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RedirectAsyncAction, factory: RedirectAsyncAction.ɵfac, providedIn: 'root' });
}
export { RedirectAsyncAction };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RedirectAsyncAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.Router }, { type: i2.MessageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkaXJlY3QuYXN5bmMtYWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3NlcnZpY2VzL3Byb2Nlc3MvcHJvY2Vzc2VzL2FzeW5jLWFjdGlvbi9hY3Rpb25zL3JlZGlyZWN0L3JlZGlyZWN0LmFzeW5jLWFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFrQixrQkFBa0IsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQzdFLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7QUFJekMsTUFHYSxtQkFBb0IsU0FBUSxrQkFBa0I7SUFJekM7SUFDQTtJQUpkLEdBQUcsR0FBRyxVQUFVLENBQUM7SUFFakIsWUFDYyxNQUFjLEVBQ2QsT0FBdUI7UUFFakMsS0FBSyxFQUFFLENBQUM7UUFIRSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7SUFHckMsQ0FBQztJQUVELEdBQUcsQ0FBQyxJQUFxQjtRQUVyQixJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLGdDQUFnQyxDQUFDLENBQUM7WUFDckUsT0FBTztTQUNWO1FBRUQsTUFBTSxNQUFNLEdBQUc7WUFDWCxXQUFXLEVBQUUsRUFBRTtTQUNsQixDQUFDO1FBRUYsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2xCLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUN6QztRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RELENBQUM7NkVBMUJRLG1CQUFtQjtnRUFBbkIsbUJBQW1CLFdBQW5CLG1CQUFtQixtQkFGaEIsTUFBTTs7U0FFVCxtQkFBbUI7dUZBQW5CLG1CQUFtQjtjQUgvQixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7QXN5bmNBY3Rpb25EYXRhLCBBc3luY0FjdGlvbkhhbmRsZXJ9IGZyb20gJy4uLy4uL2FzeW5jLWFjdGlvbi5tb2RlbCc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUmVkaXJlY3RBc3luY0FjdGlvbiBleHRlbmRzIEFzeW5jQWN0aW9uSGFuZGxlciB7XG4gICAga2V5ID0gJ3JlZGlyZWN0JztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByb3RlY3RlZCBtZXNzYWdlOiBNZXNzYWdlU2VydmljZSxcbiAgICApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBydW4oZGF0YTogQXN5bmNBY3Rpb25EYXRhKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKCFkYXRhIHx8ICFkYXRhLnJvdXRlKSB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UuYWRkRGFuZ2VyTWVzc2FnZUJ5S2V5KCdMQkxfTUlTU0lOR19IQU5ETEVSX0RBVEFfUk9VVEUnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7fVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChkYXRhLnF1ZXJ5UGFyYW1zKSB7XG4gICAgICAgICAgICBwYXJhbXMucXVlcnlQYXJhbXMgPSBkYXRhLnF1ZXJ5UGFyYW1zO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2RhdGEucm91dGVdLCBwYXJhbXMpLnRoZW4oKTtcbiAgICB9XG59XG4iXX0=