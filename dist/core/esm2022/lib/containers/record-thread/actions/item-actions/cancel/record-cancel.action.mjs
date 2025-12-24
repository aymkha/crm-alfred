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
import { MessageModalComponent } from '../../../../../components/modal/components/message-modal/message-modal.component';
import { RecordThreadItemActionHandler } from '../record-thread-item.action';
import * as i0 from "@angular/core";
import * as i1 from "@ng-bootstrap/ng-bootstrap";
import * as i2 from "../../../../../services/navigation/module-navigation/module-navigation.service";
class RecordThreadItemCancelAction extends RecordThreadItemActionHandler {
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
        if (data.itemStore.recordStore.isDirty()) {
            this.showConfirmationModal(data);
            return;
        }
        this.cancel(data);
    }
    shouldDisplay() {
        return true;
    }
    cancel(data) {
        data.itemStore.recordStore.resetStaging();
        data.itemStore.setMode('detail');
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
    static ɵfac = function RecordThreadItemCancelAction_Factory(t) { return new (t || RecordThreadItemCancelAction)(i0.ɵɵinject(i1.NgbModal), i0.ɵɵinject(i2.ModuleNavigation)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordThreadItemCancelAction, factory: RecordThreadItemCancelAction.ɵfac, providedIn: 'root' });
}
export { RecordThreadItemCancelAction };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordThreadItemCancelAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.NgbModal }, { type: i2.ModuleNavigation }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLWNhbmNlbC5hY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9yZWNvcmQtdGhyZWFkL2FjdGlvbnMvaXRlbS1hY3Rpb25zL2NhbmNlbC9yZWNvcmQtY2FuY2VsLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUd6QyxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxrRkFBa0YsQ0FBQztBQUV2SCxPQUFPLEVBQTZCLDZCQUE2QixFQUFDLE1BQU0sOEJBQThCLENBQUM7Ozs7QUFFdkcsTUFHYSw0QkFBNkIsU0FBUSw2QkFBNkI7SUFLdkQ7SUFBa0M7SUFIdEQsR0FBRyxHQUFHLFFBQVEsQ0FBQztJQUNmLEtBQUssR0FBRyxDQUFDLE1BQWtCLEVBQUUsUUFBb0IsQ0FBQyxDQUFDO0lBRW5ELFlBQW9CLFlBQXNCLEVBQVksVUFBNEI7UUFDOUUsS0FBSyxFQUFFLENBQUM7UUFEUSxpQkFBWSxHQUFaLFlBQVksQ0FBVTtRQUFZLGVBQVUsR0FBVixVQUFVLENBQWtCO0lBRWxGLENBQUM7SUFFRCxHQUFHLENBQUMsSUFBZ0M7UUFFaEMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUN0QyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakMsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsYUFBYTtRQUNULE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFUyxNQUFNLENBQUMsSUFBZ0M7UUFFN0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBb0IsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFUyxxQkFBcUIsQ0FBQyxJQUFnQztRQUM1RCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBRTVELEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEdBQUcsc0JBQXNCLENBQUM7UUFDekQsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sR0FBRztZQUM5QjtnQkFDSSxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsS0FBSyxFQUFFLENBQUMsZUFBZSxDQUFDO2dCQUN4QixPQUFPLEVBQUUsV0FBVyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFO2FBQ3hCO1lBQ3pCO2dCQUNJLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixLQUFLLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ25CLE9BQU8sRUFBRSxXQUFXLENBQUMsRUFBRTtvQkFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbEIsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUN4QixDQUFDO2FBQ29CO1NBQzVCLENBQUM7SUFDTixDQUFDO3NGQWhEUSw0QkFBNEI7Z0VBQTVCLDRCQUE0QixXQUE1Qiw0QkFBNEIsbUJBRnpCLE1BQU07O1NBRVQsNEJBQTRCO3VGQUE1Qiw0QkFBNEI7Y0FIeEMsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNb2RhbEJ1dHRvbkludGVyZmFjZSwgVmlld01vZGV9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge05nYk1vZGFsfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQge01lc3NhZ2VNb2RhbENvbXBvbmVudH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9tb2RhbC9jb21wb25lbnRzL21lc3NhZ2UtbW9kYWwvbWVzc2FnZS1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHtNb2R1bGVOYXZpZ2F0aW9ufSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL21vZHVsZS1uYXZpZ2F0aW9uL21vZHVsZS1uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHtSZWNvcmRUaHJlYWRJdGVtQWN0aW9uRGF0YSwgUmVjb3JkVGhyZWFkSXRlbUFjdGlvbkhhbmRsZXJ9IGZyb20gJy4uL3JlY29yZC10aHJlYWQtaXRlbS5hY3Rpb24nO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFJlY29yZFRocmVhZEl0ZW1DYW5jZWxBY3Rpb24gZXh0ZW5kcyBSZWNvcmRUaHJlYWRJdGVtQWN0aW9uSGFuZGxlciB7XG5cbiAgICBrZXkgPSAnY2FuY2VsJztcbiAgICBtb2RlcyA9IFsnZWRpdCcgYXMgVmlld01vZGUsICdkZXRhaWwnIGFzIFZpZXdNb2RlXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbCwgcHJvdGVjdGVkIG5hdmlnYXRpb246IE1vZHVsZU5hdmlnYXRpb24pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBydW4oZGF0YTogUmVjb3JkVGhyZWFkSXRlbUFjdGlvbkRhdGEpOiB2b2lkIHtcblxuICAgICAgICBpZiAoZGF0YS5pdGVtU3RvcmUucmVjb3JkU3RvcmUuaXNEaXJ0eSgpKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dDb25maXJtYXRpb25Nb2RhbChkYXRhKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FuY2VsKGRhdGEpO1xuICAgIH1cblxuICAgIHNob3VsZERpc3BsYXkoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjYW5jZWwoZGF0YTogUmVjb3JkVGhyZWFkSXRlbUFjdGlvbkRhdGEpOiB2b2lkIHtcblxuICAgICAgICBkYXRhLml0ZW1TdG9yZS5yZWNvcmRTdG9yZS5yZXNldFN0YWdpbmcoKTtcbiAgICAgICAgZGF0YS5pdGVtU3RvcmUuc2V0TW9kZSgnZGV0YWlsJyBhcyBWaWV3TW9kZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNob3dDb25maXJtYXRpb25Nb2RhbChkYXRhOiBSZWNvcmRUaHJlYWRJdGVtQWN0aW9uRGF0YSk6IHZvaWQge1xuICAgICAgICBjb25zdCBtb2RhbCA9IHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oTWVzc2FnZU1vZGFsQ29tcG9uZW50KTtcblxuICAgICAgICBtb2RhbC5jb21wb25lbnRJbnN0YW5jZS50ZXh0S2V5ID0gJ1dBUk5fVU5TQVZFRF9DSEFOR0VTJztcbiAgICAgICAgbW9kYWwuY29tcG9uZW50SW5zdGFuY2UuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYWJlbEtleTogJ0xCTF9DQU5DRUwnLFxuICAgICAgICAgICAgICAgIGtsYXNzOiBbJ2J0bi1zZWNvbmRhcnknXSxcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiBhY3RpdmVNb2RhbCA9PiBhY3RpdmVNb2RhbC5kaXNtaXNzKClcbiAgICAgICAgICAgIH0gYXMgTW9kYWxCdXR0b25JbnRlcmZhY2UsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWxLZXk6ICdMQkxfUFJPQ0VFRCcsXG4gICAgICAgICAgICAgICAga2xhc3M6IFsnYnRuLW1haW4nXSxcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiBhY3RpdmVNb2RhbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuY2VsKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmVNb2RhbC5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gYXMgTW9kYWxCdXR0b25JbnRlcmZhY2UsXG4gICAgICAgIF07XG4gICAgfVxufVxuIl19