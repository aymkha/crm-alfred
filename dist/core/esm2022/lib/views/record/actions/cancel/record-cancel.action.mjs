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
import { MessageModalComponent } from '../../../../components/modal/components/message-modal/message-modal.component';
import * as i0 from "@angular/core";
import * as i1 from "@ng-bootstrap/ng-bootstrap";
import * as i2 from "../../../../services/navigation/module-navigation/module-navigation.service";
class RecordCancelAction extends RecordActionHandler {
    modalService;
    navigation;
    key = 'cancel';
    modes = ['edit', 'detail'];
    constructor(modalService, navigation) {
        super();
        this.modalService = modalService;
        this.navigation = navigation;
    }
    run(data) {
        if (data.store.recordStore.isDirty()) {
            this.showConfirmationModal(data);
            return;
        }
        this.cancel(data);
    }
    shouldDisplay() {
        return true;
    }
    cancel(data) {
        const params = data.store.params;
        const moduleName = data.store.getModuleName();
        const id = data.store.getRecordId();
        const record = data.store.getBaseRecord();
        this.navigateBack(this.navigation, params, id, moduleName, record);
        data.store.recordStore.resetStaging();
        data.store.setMode('detail');
    }
    showConfirmationModal(data) {
        const modal = this.modalService.open(MessageModalComponent);
        modal.componentInstance.textKey = 'WARN_UNSAVED_CHANGES';
        modal.componentInstance.buttons = [
            {
                labelKey: 'LBL_CANCEL',
                klass: ['btn-secondary'],
                onClick: activeModal => activeModal.dismiss()
            },
            {
                labelKey: 'LBL_PROCEED',
                klass: ['btn-main'],
                onClick: activeModal => {
                    this.cancel(data);
                    activeModal.close();
                }
            },
        ];
    }
    static ɵfac = function RecordCancelAction_Factory(t) { return new (t || RecordCancelAction)(i0.ɵɵinject(i1.NgbModal), i0.ɵɵinject(i2.ModuleNavigation)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordCancelAction, factory: RecordCancelAction.ɵfac, providedIn: 'root' });
}
export { RecordCancelAction };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordCancelAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.NgbModal }, { type: i2.ModuleNavigation }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLWNhbmNlbC5hY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvcmVjb3JkL2FjdGlvbnMvY2FuY2VsL3JlY29yZC1jYW5jZWwuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBR3pDLE9BQU8sRUFBbUIsbUJBQW1CLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUN2RSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSwrRUFBK0UsQ0FBQzs7OztBQUdwSCxNQUdhLGtCQUFtQixTQUFRLG1CQUFtQjtJQUtuQztJQUFrQztJQUh0RCxHQUFHLEdBQUcsUUFBUSxDQUFDO0lBQ2YsS0FBSyxHQUFHLENBQUMsTUFBa0IsRUFBRSxRQUFvQixDQUFDLENBQUM7SUFFbkQsWUFBb0IsWUFBc0IsRUFBWSxVQUE0QjtRQUM5RSxLQUFLLEVBQUUsQ0FBQztRQURRLGlCQUFZLEdBQVosWUFBWSxDQUFVO1FBQVksZUFBVSxHQUFWLFVBQVUsQ0FBa0I7SUFFbEYsQ0FBQztJQUVELEdBQUcsQ0FBQyxJQUFzQjtRQUV0QixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqQyxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxhQUFhO1FBQ1QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVTLE1BQU0sQ0FBQyxJQUFzQjtRQUVuQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUNqQyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzlDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUUxQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFbkUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBb0IsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFUyxxQkFBcUIsQ0FBQyxJQUFzQjtRQUNsRCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBRTVELEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEdBQUcsc0JBQXNCLENBQUM7UUFDekQsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sR0FBRztZQUM5QjtnQkFDSSxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsS0FBSyxFQUFFLENBQUMsZUFBZSxDQUFDO2dCQUN4QixPQUFPLEVBQUUsV0FBVyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFO2FBQ3hCO1lBQ3pCO2dCQUNJLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixLQUFLLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ25CLE9BQU8sRUFBRSxXQUFXLENBQUMsRUFBRTtvQkFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbEIsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUN4QixDQUFDO2FBQ29CO1NBQzVCLENBQUM7SUFDTixDQUFDOzRFQXZEUSxrQkFBa0I7Z0VBQWxCLGtCQUFrQixXQUFsQixrQkFBa0IsbUJBRmYsTUFBTTs7U0FFVCxrQkFBa0I7dUZBQWxCLGtCQUFrQjtjQUg5QixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01vZGFsQnV0dG9uSW50ZXJmYWNlLCBWaWV3TW9kZX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7TmdiTW9kYWx9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7UmVjb3JkQWN0aW9uRGF0YSwgUmVjb3JkQWN0aW9uSGFuZGxlcn0gZnJvbSAnLi4vcmVjb3JkLmFjdGlvbic7XG5pbXBvcnQge01lc3NhZ2VNb2RhbENvbXBvbmVudH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9tb2RhbC9jb21wb25lbnRzL21lc3NhZ2UtbW9kYWwvbWVzc2FnZS1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHtNb2R1bGVOYXZpZ2F0aW9ufSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL21vZHVsZS1uYXZpZ2F0aW9uL21vZHVsZS1uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFJlY29yZENhbmNlbEFjdGlvbiBleHRlbmRzIFJlY29yZEFjdGlvbkhhbmRsZXIge1xuXG4gICAga2V5ID0gJ2NhbmNlbCc7XG4gICAgbW9kZXMgPSBbJ2VkaXQnIGFzIFZpZXdNb2RlLCAnZGV0YWlsJyBhcyBWaWV3TW9kZV07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsU2VydmljZTogTmdiTW9kYWwsIHByb3RlY3RlZCBuYXZpZ2F0aW9uOiBNb2R1bGVOYXZpZ2F0aW9uKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcnVuKGRhdGE6IFJlY29yZEFjdGlvbkRhdGEpOiB2b2lkIHtcblxuICAgICAgICBpZiAoZGF0YS5zdG9yZS5yZWNvcmRTdG9yZS5pc0RpcnR5KCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvbmZpcm1hdGlvbk1vZGFsKGRhdGEpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYW5jZWwoZGF0YSk7XG4gICAgfVxuXG4gICAgc2hvdWxkRGlzcGxheSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNhbmNlbChkYXRhOiBSZWNvcmRBY3Rpb25EYXRhKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgcGFyYW1zID0gZGF0YS5zdG9yZS5wYXJhbXM7XG4gICAgICAgIGNvbnN0IG1vZHVsZU5hbWUgPSBkYXRhLnN0b3JlLmdldE1vZHVsZU5hbWUoKTtcbiAgICAgICAgY29uc3QgaWQgPSBkYXRhLnN0b3JlLmdldFJlY29yZElkKCk7XG4gICAgICAgIGNvbnN0IHJlY29yZCA9IGRhdGEuc3RvcmUuZ2V0QmFzZVJlY29yZCgpO1xuXG4gICAgICAgIHRoaXMubmF2aWdhdGVCYWNrKHRoaXMubmF2aWdhdGlvbiwgcGFyYW1zLCBpZCwgbW9kdWxlTmFtZSwgcmVjb3JkKTtcblxuICAgICAgICBkYXRhLnN0b3JlLnJlY29yZFN0b3JlLnJlc2V0U3RhZ2luZygpO1xuICAgICAgICBkYXRhLnN0b3JlLnNldE1vZGUoJ2RldGFpbCcgYXMgVmlld01vZGUpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzaG93Q29uZmlybWF0aW9uTW9kYWwoZGF0YTogUmVjb3JkQWN0aW9uRGF0YSk6IHZvaWQge1xuICAgICAgICBjb25zdCBtb2RhbCA9IHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oTWVzc2FnZU1vZGFsQ29tcG9uZW50KTtcblxuICAgICAgICBtb2RhbC5jb21wb25lbnRJbnN0YW5jZS50ZXh0S2V5ID0gJ1dBUk5fVU5TQVZFRF9DSEFOR0VTJztcbiAgICAgICAgbW9kYWwuY29tcG9uZW50SW5zdGFuY2UuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYWJlbEtleTogJ0xCTF9DQU5DRUwnLFxuICAgICAgICAgICAgICAgIGtsYXNzOiBbJ2J0bi1zZWNvbmRhcnknXSxcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiBhY3RpdmVNb2RhbCA9PiBhY3RpdmVNb2RhbC5kaXNtaXNzKClcbiAgICAgICAgICAgIH0gYXMgTW9kYWxCdXR0b25JbnRlcmZhY2UsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWxLZXk6ICdMQkxfUFJPQ0VFRCcsXG4gICAgICAgICAgICAgICAga2xhc3M6IFsnYnRuLW1haW4nXSxcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiBhY3RpdmVNb2RhbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuY2VsKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmVNb2RhbC5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gYXMgTW9kYWxCdXR0b25JbnRlcmZhY2UsXG4gICAgICAgIF07XG4gICAgfVxufVxuIl19