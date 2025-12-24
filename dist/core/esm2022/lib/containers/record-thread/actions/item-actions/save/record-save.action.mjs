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
import { take } from 'rxjs/operators';
import { RecordThreadItemActionHandler } from '../record-thread-item.action';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../services/message/message.service";
import * as i2 from "../../../../../services/navigation/module-navigation/module-navigation.service";
class RecordThreadItemSaveAction extends RecordThreadItemActionHandler {
    message;
    navigation;
    key = 'save';
    modes = ['edit'];
    constructor(message, navigation) {
        super();
        this.message = message;
        this.navigation = navigation;
    }
    run(data) {
        data.itemStore.recordStore.validate().pipe(take(1)).subscribe(valid => {
            if (valid) {
                data.itemStore.save().pipe(take(1)).subscribe(record => {
                    data.itemStore.setMode('detail');
                });
                return;
            }
            this.message.addWarningMessageByKey('LBL_VALIDATION_ERRORS');
        });
    }
    shouldDisplay(data) {
        return true;
    }
    static ɵfac = function RecordThreadItemSaveAction_Factory(t) { return new (t || RecordThreadItemSaveAction)(i0.ɵɵinject(i1.MessageService), i0.ɵɵinject(i2.ModuleNavigation)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordThreadItemSaveAction, factory: RecordThreadItemSaveAction.ɵfac, providedIn: 'root' });
}
export { RecordThreadItemSaveAction };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordThreadItemSaveAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.MessageService }, { type: i2.ModuleNavigation }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLXNhdmUuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbnRhaW5lcnMvcmVjb3JkLXRocmVhZC9hY3Rpb25zL2l0ZW0tYWN0aW9ucy9zYXZlL3JlY29yZC1zYXZlLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFHcEMsT0FBTyxFQUE2Qiw2QkFBNkIsRUFBQyxNQUFNLDhCQUE4QixDQUFDOzs7O0FBRXZHLE1BR2EsMEJBQTJCLFNBQVEsNkJBQTZCO0lBS25EO0lBQW1DO0lBSHpELEdBQUcsR0FBRyxNQUFNLENBQUM7SUFDYixLQUFLLEdBQUcsQ0FBQyxNQUFrQixDQUFDLENBQUM7SUFFN0IsWUFBc0IsT0FBdUIsRUFBWSxVQUE0QjtRQUNqRixLQUFLLEVBQUUsQ0FBQztRQURVLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQVksZUFBVSxHQUFWLFVBQVUsQ0FBa0I7SUFFckYsQ0FBQztJQUVELEdBQUcsQ0FBQyxJQUFnQztRQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2xFLElBQUksS0FBSyxFQUFFO2dCQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDbkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBb0IsQ0FBQyxDQUFDO2dCQUNqRCxDQUFDLENBQUMsQ0FBQztnQkFDSCxPQUFPO2FBQ1Y7WUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDakUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsYUFBYSxDQUFDLElBQWdDO1FBQzFDLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7b0ZBeEJRLDBCQUEwQjtnRUFBMUIsMEJBQTBCLFdBQTFCLDBCQUEwQixtQkFGdkIsTUFBTTs7U0FFVCwwQkFBMEI7dUZBQTFCLDBCQUEwQjtjQUh0QyxVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1ZpZXdNb2RlfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHt0YWtlfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zZXJ2aWNlcy9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQge01vZHVsZU5hdmlnYXRpb259IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NlcnZpY2VzL25hdmlnYXRpb24vbW9kdWxlLW5hdmlnYXRpb24vbW9kdWxlLW5hdmlnYXRpb24uc2VydmljZSc7XG5pbXBvcnQge1JlY29yZFRocmVhZEl0ZW1BY3Rpb25EYXRhLCBSZWNvcmRUaHJlYWRJdGVtQWN0aW9uSGFuZGxlcn0gZnJvbSAnLi4vcmVjb3JkLXRocmVhZC1pdGVtLmFjdGlvbic7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUmVjb3JkVGhyZWFkSXRlbVNhdmVBY3Rpb24gZXh0ZW5kcyBSZWNvcmRUaHJlYWRJdGVtQWN0aW9uSGFuZGxlciB7XG5cbiAgICBrZXkgPSAnc2F2ZSc7XG4gICAgbW9kZXMgPSBbJ2VkaXQnIGFzIFZpZXdNb2RlXTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBtZXNzYWdlOiBNZXNzYWdlU2VydmljZSwgcHJvdGVjdGVkIG5hdmlnYXRpb246IE1vZHVsZU5hdmlnYXRpb24pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBydW4oZGF0YTogUmVjb3JkVGhyZWFkSXRlbUFjdGlvbkRhdGEpOiB2b2lkIHtcbiAgICAgICAgZGF0YS5pdGVtU3RvcmUucmVjb3JkU3RvcmUudmFsaWRhdGUoKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSh2YWxpZCA9PiB7XG4gICAgICAgICAgICBpZiAodmFsaWQpIHtcbiAgICAgICAgICAgICAgICBkYXRhLml0ZW1TdG9yZS5zYXZlKCkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUocmVjb3JkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5pdGVtU3RvcmUuc2V0TW9kZSgnZGV0YWlsJyBhcyBWaWV3TW9kZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UuYWRkV2FybmluZ01lc3NhZ2VCeUtleSgnTEJMX1ZBTElEQVRJT05fRVJST1JTJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNob3VsZERpc3BsYXkoZGF0YTogUmVjb3JkVGhyZWFkSXRlbUFjdGlvbkRhdGEpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuIl19