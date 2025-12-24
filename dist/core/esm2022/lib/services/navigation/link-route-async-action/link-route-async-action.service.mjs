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
import * as i0 from "@angular/core";
import * as i1 from "../../process/processes/async-action/async-action";
class LinkRouteAsyncActionService {
    asyncActionService;
    constructor(asyncActionService) {
        this.asyncActionService = asyncActionService;
    }
    run(linkAsyncAction, field, record) {
        const data = {
            payload: {
                fieldName: field.name ?? '',
                fieldValue: field.value ?? '',
            },
            record: {
                id: record.id ?? '',
                type: record.type ?? '',
                module: record.module ?? '',
                favorite: record.favorite ?? '',
                attributes: record.attributes ?? {},
                acls: record.acls ?? []
            }
        };
        this.asyncActionService.run(linkAsyncAction, data);
    }
    static ɵfac = function LinkRouteAsyncActionService_Factory(t) { return new (t || LinkRouteAsyncActionService)(i0.ɵɵinject(i1.AsyncActionService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LinkRouteAsyncActionService, factory: LinkRouteAsyncActionService.ɵfac, providedIn: 'root' });
}
export { LinkRouteAsyncActionService };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LinkRouteAsyncActionService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.AsyncActionService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay1yb3V0ZS1hc3luYy1hY3Rpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL2xpbmstcm91dGUtYXN5bmMtYWN0aW9uL2xpbmstcm91dGUtYXN5bmMtYWN0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUl6QyxNQUdhLDJCQUEyQjtJQUVkO0lBQXRCLFlBQXNCLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO0lBQzVELENBQUM7SUFFTSxHQUFHLENBQUMsZUFBdUIsRUFBRSxLQUFZLEVBQUUsTUFBYztRQUM1RCxNQUFNLElBQUksR0FBRztZQUNULE9BQU8sRUFBRTtnQkFDTCxTQUFTLEVBQUUsS0FBSyxDQUFDLElBQUksSUFBSSxFQUFFO2dCQUMzQixVQUFVLEVBQUUsS0FBSyxDQUFDLEtBQUssSUFBSSxFQUFFO2FBQ2hDO1lBQ0QsTUFBTSxFQUFFO2dCQUNKLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUU7Z0JBQ25CLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUU7Z0JBQ3ZCLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxJQUFJLEVBQUU7Z0JBQzNCLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUSxJQUFJLEVBQUU7Z0JBQy9CLFVBQVUsRUFBRSxNQUFNLENBQUMsVUFBVSxJQUFJLEVBQUU7Z0JBQ25DLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUU7YUFDaEI7U0FDTSxDQUFDO1FBRXRCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ3RELENBQUM7cUZBdEJRLDJCQUEyQjtnRUFBM0IsMkJBQTJCLFdBQTNCLDJCQUEyQixtQkFGeEIsTUFBTTs7U0FFVCwyQkFBMkI7dUZBQTNCLDJCQUEyQjtjQUh2QyxVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMyBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FzeW5jQWN0aW9uSW5wdXQsIEFzeW5jQWN0aW9uU2VydmljZX0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9wcm9jZXNzZXMvYXN5bmMtYWN0aW9uL2FzeW5jLWFjdGlvbic7XG5pbXBvcnQge0ZpZWxkLCBSZWNvcmR9IGZyb20gJ2NvbW1vbic7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIExpbmtSb3V0ZUFzeW5jQWN0aW9uU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYXN5bmNBY3Rpb25TZXJ2aWNlOiBBc3luY0FjdGlvblNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgcnVuKGxpbmtBc3luY0FjdGlvbjogc3RyaW5nLCBmaWVsZDogRmllbGQsIHJlY29yZDogUmVjb3JkKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgZmllbGROYW1lOiBmaWVsZC5uYW1lID8/ICcnLFxuICAgICAgICAgICAgICAgIGZpZWxkVmFsdWU6IGZpZWxkLnZhbHVlID8/ICcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlY29yZDoge1xuICAgICAgICAgICAgICAgIGlkOiByZWNvcmQuaWQgPz8gJycsXG4gICAgICAgICAgICAgICAgdHlwZTogcmVjb3JkLnR5cGUgPz8gJycsXG4gICAgICAgICAgICAgICAgbW9kdWxlOiByZWNvcmQubW9kdWxlID8/ICcnLFxuICAgICAgICAgICAgICAgIGZhdm9yaXRlOiByZWNvcmQuZmF2b3JpdGUgPz8gJycsXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogcmVjb3JkLmF0dHJpYnV0ZXMgPz8ge30sXG4gICAgICAgICAgICAgICAgYWNsczogcmVjb3JkLmFjbHMgPz8gW11cbiAgICAgICAgICAgIH0gYXMgUmVjb3JkXG4gICAgICAgIH0gYXMgQXN5bmNBY3Rpb25JbnB1dDtcblxuICAgICAgICB0aGlzLmFzeW5jQWN0aW9uU2VydmljZS5ydW4obGlua0FzeW5jQWN0aW9uLCBkYXRhKVxuICAgIH1cbn1cbiJdfQ==