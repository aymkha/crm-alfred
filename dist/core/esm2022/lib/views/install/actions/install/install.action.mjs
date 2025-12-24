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
import { InstallViewActionHandler } from '../install-view.action';
import { InstallErrorModalComponent } from '../../../../components/install-error-modal/install-error-modal.component';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/message/message.service";
import * as i2 from "../../../../services/process/processes/async-action/async-action";
import * as i3 from "@angular/router";
import * as i4 from "@ng-bootstrap/ng-bootstrap";
import * as i5 from "../../../../store/state-manager";
import * as i6 from "../../../../services/local-storage/local-storage.service";
class InstallAction extends InstallViewActionHandler {
    message;
    asyncActionService;
    router;
    modalService;
    state;
    localStorage;
    key = 'install';
    modes = ['edit'];
    constructor(message, asyncActionService, router, modalService, state, localStorage) {
        super();
        this.message = message;
        this.asyncActionService = asyncActionService;
        this.router = router;
        this.modalService = modalService;
        this.state = state;
        this.localStorage = localStorage;
    }
    run(data) {
        data.store.recordStore.validate().pipe(take(1)).subscribe(valid => {
            if (valid) {
                const stagingRecord = data.store.recordStore.getStaging();
                this.runInstall(stagingRecord);
                return;
            }
            this.message.addWarningMessageByKey('LBL_VALIDATION_ERRORS');
        });
    }
    shouldDisplay() {
        return true;
    }
    runInstall(stagingRecord) {
        const actionName = `suitecrm-app-${this.key}`;
        this.message.removeMessages();
        const asyncData = {
            action: actionName,
            module: stagingRecord.module,
            id: stagingRecord.id,
            payload: stagingRecord.formGroup.value
        };
        this.asyncActionService.run(actionName, asyncData).pipe(take(1)).subscribe((process) => {
            if (process.data.statusCode === 3) {
                // system validation pre-check failed; display errors modal
                this.openErrorModalDialog(process.data.errors);
            }
            // redirect to /, if request is successful
            if (process.data.statusCode === 0) {
                this.state.clear();
                this.localStorage.clear();
                this.router.navigate(['/'], {}).then();
            }
        });
    }
    openErrorModalDialog(errors) {
        const modalRef = this.modalService.open(InstallErrorModalComponent, {
            ariaLabelledBy: 'modal-basic-title',
            centered: true,
            size: 'lg',
            windowClass: 'custom-modal',
            modalDialogClass: 'custom-modal'
        });
        modalRef.componentInstance.errors = errors;
    }
    static ɵfac = function InstallAction_Factory(t) { return new (t || InstallAction)(i0.ɵɵinject(i1.MessageService), i0.ɵɵinject(i2.AsyncActionService), i0.ɵɵinject(i3.Router), i0.ɵɵinject(i4.NgbModal), i0.ɵɵinject(i5.StateManager), i0.ɵɵinject(i6.LocalStorageService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: InstallAction, factory: InstallAction.ɵfac, providedIn: 'root' });
}
export { InstallAction };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InstallAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.MessageService }, { type: i2.AsyncActionService }, { type: i3.Router }, { type: i4.NgbModal }, { type: i5.StateManager }, { type: i6.LocalStorageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFsbC5hY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvaW5zdGFsbC9hY3Rpb25zL2luc3RhbGwvaW5zdGFsbC5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3BDLE9BQU8sRUFBd0Isd0JBQXdCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUt2RixPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSwwRUFBMEUsQ0FBQzs7Ozs7Ozs7QUFLcEgsTUFHYSxhQUFjLFNBQVEsd0JBQXdCO0lBTXpDO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQVRkLEdBQUcsR0FBRyxTQUFTLENBQUM7SUFDaEIsS0FBSyxHQUFHLENBQUMsTUFBa0IsQ0FBQyxDQUFDO0lBRTdCLFlBQ2MsT0FBdUIsRUFDdkIsa0JBQXNDLEVBQ3RDLE1BQWMsRUFDZCxZQUFzQixFQUN0QixLQUFtQixFQUNuQixZQUFpQztRQUUzQyxLQUFLLEVBQUUsQ0FBQztRQVBFLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGlCQUFZLEdBQVosWUFBWSxDQUFVO1FBQ3RCLFVBQUssR0FBTCxLQUFLLENBQWM7UUFDbkIsaUJBQVksR0FBWixZQUFZLENBQXFCO0lBRy9DLENBQUM7SUFFRCxHQUFHLENBQUMsSUFBMkI7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM5RCxJQUFJLEtBQUssRUFBRTtnQkFDUCxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDMUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDL0IsT0FBTzthQUNWO1lBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ2pFLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGFBQWE7UUFDVCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsVUFBVSxDQUFDLGFBQXFCO1FBRTVCLE1BQU0sVUFBVSxHQUFHLGdCQUFnQixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUU5QixNQUFNLFNBQVMsR0FBRztZQUNkLE1BQU0sRUFBRSxVQUFVO1lBQ2xCLE1BQU0sRUFBRSxhQUFhLENBQUMsTUFBTTtZQUM1QixFQUFFLEVBQUUsYUFBYSxDQUFDLEVBQUU7WUFDcEIsT0FBTyxFQUFFLGFBQWEsQ0FBQyxTQUFTLENBQUMsS0FBSztTQUNyQixDQUFDO1FBRXRCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQ3ZCLFVBQVUsRUFDVixTQUFTLENBQ1osQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBZ0IsRUFBRSxFQUFFO1lBRTNDLElBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssQ0FBQyxFQUFFO2dCQUM5QiwyREFBMkQ7Z0JBQzNELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ2xEO1lBRUQsMENBQTBDO1lBQzFDLElBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssQ0FBQyxFQUFFO2dCQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQzFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsb0JBQW9CLENBQUMsTUFBVTtRQUUzQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQywwQkFBMEIsRUFBRTtZQUNoRSxjQUFjLEVBQUUsbUJBQW1CO1lBQ25DLFFBQVEsRUFBRSxJQUFJO1lBQ2QsSUFBSSxFQUFFLElBQUk7WUFDVixXQUFXLEVBQUUsY0FBYztZQUMzQixnQkFBZ0IsRUFBRSxjQUFjO1NBQ25DLENBQUMsQ0FBQztRQUVILFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQy9DLENBQUM7dUVBM0VRLGFBQWE7Z0VBQWIsYUFBYSxXQUFiLGFBQWEsbUJBRlYsTUFBTTs7U0FFVCxhQUFhO3VGQUFiLGFBQWE7Y0FIekIsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSZWNvcmQsIFZpZXdNb2RlfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHt0YWtlfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0luc3RhbGxWaWV3QWN0aW9uRGF0YSwgSW5zdGFsbFZpZXdBY3Rpb25IYW5kbGVyfSBmcm9tICcuLi9pbnN0YWxsLXZpZXcuYWN0aW9uJztcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL21lc3NhZ2UvbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7QXN5bmNBY3Rpb25JbnB1dCwgQXN5bmNBY3Rpb25TZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9wcm9jZXNzL3Byb2Nlc3Nlcy9hc3luYy1hY3Rpb24vYXN5bmMtYWN0aW9uJztcbmltcG9ydCB7UHJvY2Vzc30gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvcHJvY2Vzcy9wcm9jZXNzLnNlcnZpY2UnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0luc3RhbGxFcnJvck1vZGFsQ29tcG9uZW50fSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2luc3RhbGwtZXJyb3ItbW9kYWwvaW5zdGFsbC1lcnJvci1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHtOZ2JNb2RhbH0gZnJvbSBcIkBuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwXCI7XG5pbXBvcnQge1N0YXRlTWFuYWdlcn0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvc3RhdGUtbWFuYWdlcic7XG5pbXBvcnQge0xvY2FsU3RvcmFnZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL2xvY2FsLXN0b3JhZ2UvbG9jYWwtc3RvcmFnZS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBJbnN0YWxsQWN0aW9uIGV4dGVuZHMgSW5zdGFsbFZpZXdBY3Rpb25IYW5kbGVyIHtcblxuICAgIGtleSA9ICdpbnN0YWxsJztcbiAgICBtb2RlcyA9IFsnZWRpdCcgYXMgVmlld01vZGVdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBtZXNzYWdlOiBNZXNzYWdlU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGFzeW5jQWN0aW9uU2VydmljZTogQXN5bmNBY3Rpb25TZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByb3RlY3RlZCBtb2RhbFNlcnZpY2U6IE5nYk1vZGFsLFxuICAgICAgICBwcm90ZWN0ZWQgc3RhdGU6IFN0YXRlTWFuYWdlcixcbiAgICAgICAgcHJvdGVjdGVkIGxvY2FsU3RvcmFnZTogTG9jYWxTdG9yYWdlU2VydmljZVxuICAgICkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHJ1bihkYXRhOiBJbnN0YWxsVmlld0FjdGlvbkRhdGEpOiB2b2lkIHtcbiAgICAgICAgZGF0YS5zdG9yZS5yZWNvcmRTdG9yZS52YWxpZGF0ZSgpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKHZhbGlkID0+IHtcbiAgICAgICAgICAgIGlmICh2YWxpZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YWdpbmdSZWNvcmQgPSBkYXRhLnN0b3JlLnJlY29yZFN0b3JlLmdldFN0YWdpbmcoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bkluc3RhbGwoc3RhZ2luZ1JlY29yZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UuYWRkV2FybmluZ01lc3NhZ2VCeUtleSgnTEJMX1ZBTElEQVRJT05fRVJST1JTJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNob3VsZERpc3BsYXkoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJ1bkluc3RhbGwoc3RhZ2luZ1JlY29yZDogUmVjb3JkKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgYWN0aW9uTmFtZSA9IGBzdWl0ZWNybS1hcHAtJHt0aGlzLmtleX1gO1xuXG4gICAgICAgIHRoaXMubWVzc2FnZS5yZW1vdmVNZXNzYWdlcygpO1xuXG4gICAgICAgIGNvbnN0IGFzeW5jRGF0YSA9IHtcbiAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1vZHVsZTogc3RhZ2luZ1JlY29yZC5tb2R1bGUsXG4gICAgICAgICAgICBpZDogc3RhZ2luZ1JlY29yZC5pZCxcbiAgICAgICAgICAgIHBheWxvYWQ6IHN0YWdpbmdSZWNvcmQuZm9ybUdyb3VwLnZhbHVlXG4gICAgICAgIH0gYXMgQXN5bmNBY3Rpb25JbnB1dDtcblxuICAgICAgICB0aGlzLmFzeW5jQWN0aW9uU2VydmljZS5ydW4oXG4gICAgICAgICAgICBhY3Rpb25OYW1lLFxuICAgICAgICAgICAgYXN5bmNEYXRhXG4gICAgICAgICkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKHByb2Nlc3M6IFByb2Nlc3MpID0+IHtcblxuICAgICAgICAgICAgaWYocHJvY2Vzcy5kYXRhLnN0YXR1c0NvZGUgPT09IDMpIHtcbiAgICAgICAgICAgICAgICAvLyBzeXN0ZW0gdmFsaWRhdGlvbiBwcmUtY2hlY2sgZmFpbGVkOyBkaXNwbGF5IGVycm9ycyBtb2RhbFxuICAgICAgICAgICAgICAgIHRoaXMub3BlbkVycm9yTW9kYWxEaWFsb2cocHJvY2Vzcy5kYXRhLmVycm9ycyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHJlZGlyZWN0IHRvIC8sIGlmIHJlcXVlc3QgaXMgc3VjY2Vzc2Z1bFxuICAgICAgICAgICAgaWYocHJvY2Vzcy5kYXRhLnN0YXR1c0NvZGUgPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSwge30pLnRoZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb3BlbkVycm9yTW9kYWxEaWFsb2coZXJyb3JzOiBbXSk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IG1vZGFsUmVmID0gdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihJbnN0YWxsRXJyb3JNb2RhbENvbXBvbmVudCwge1xuICAgICAgICAgICAgYXJpYUxhYmVsbGVkQnk6ICdtb2RhbC1iYXNpYy10aXRsZScsXG4gICAgICAgICAgICBjZW50ZXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIHNpemU6ICdsZycsXG4gICAgICAgICAgICB3aW5kb3dDbGFzczogJ2N1c3RvbS1tb2RhbCcsXG4gICAgICAgICAgICBtb2RhbERpYWxvZ0NsYXNzOiAnY3VzdG9tLW1vZGFsJ1xuICAgICAgICB9KTtcblxuICAgICAgICBtb2RhbFJlZi5jb21wb25lbnRJbnN0YW5jZS5lcnJvcnMgPSBlcnJvcnM7XG4gICAgfVxuXG59XG4iXX0=