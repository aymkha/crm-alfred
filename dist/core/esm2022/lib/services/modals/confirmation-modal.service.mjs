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
import { MessageModalComponent } from '../../components/modal/components/message-modal/message-modal.component';
import * as i0 from "@angular/core";
import * as i1 from "@ng-bootstrap/ng-bootstrap";
class ConfirmationModalService {
    modalService;
    constructor(modalService) {
        this.modalService = modalService;
    }
    showModal(messageLabel, onProceed) {
        const modal = this.modalService.open(MessageModalComponent);
        modal.componentInstance.textKey = messageLabel ?? 'LBL_GENERIC_CONFIRMATION';
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
                    onProceed();
                    activeModal.close();
                }
            },
        ];
    }
    static ɵfac = function ConfirmationModalService_Factory(t) { return new (t || ConfirmationModalService)(i0.ɵɵinject(i1.NgbModal)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ConfirmationModalService, factory: ConfirmationModalService.ɵfac, providedIn: 'root' });
}
export { ConfirmationModalService };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConfirmationModalService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.NgbModal }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLW1vZGFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc2VydmljZXMvbW9kYWxzL2NvbmZpcm1hdGlvbi1tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHlFQUF5RSxDQUFDOzs7QUFJOUcsTUFHYSx3QkFBd0I7SUFHckI7SUFEWixZQUNZLFlBQXNCO1FBQXRCLGlCQUFZLEdBQVosWUFBWSxDQUFVO0lBRWxDLENBQUM7SUFFTSxTQUFTLENBQUMsWUFBb0IsRUFBRSxTQUFtQjtRQUN0RCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBRTVELEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEdBQUcsWUFBWSxJQUFJLDBCQUEwQixDQUFDO1FBQzdFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEdBQUc7WUFDOUI7Z0JBQ0ksUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLEtBQUssRUFBRSxDQUFDLGVBQWUsQ0FBQztnQkFDeEIsT0FBTyxFQUFFLFdBQVcsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRTthQUN4QjtZQUN6QjtnQkFDSSxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNuQixPQUFPLEVBQUUsV0FBVyxDQUFDLEVBQUU7b0JBQ25CLFNBQVMsRUFBRSxDQUFDO29CQUNaLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDeEIsQ0FBQzthQUNvQjtTQUM1QixDQUFDO0lBQ04sQ0FBQztrRkExQlEsd0JBQXdCO2dFQUF4Qix3QkFBd0IsV0FBeEIsd0JBQXdCLG1CQUZyQixNQUFNOztTQUVULHdCQUF3Qjt1RkFBeEIsd0JBQXdCO2NBSHBDLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWVzc2FnZU1vZGFsQ29tcG9uZW50fSBmcm9tICcuLi8uLi9jb21wb25lbnRzL21vZGFsL2NvbXBvbmVudHMvbWVzc2FnZS1tb2RhbC9tZXNzYWdlLW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQge01vZGFsQnV0dG9uSW50ZXJmYWNlfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtOZ2JNb2RhbH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDb25maXJtYXRpb25Nb2RhbFNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbFxuICAgICkge1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93TW9kYWwobWVzc2FnZUxhYmVsOiBzdHJpbmcsIG9uUHJvY2VlZDogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKE1lc3NhZ2VNb2RhbENvbXBvbmVudCk7XG5cbiAgICAgICAgbW9kYWwuY29tcG9uZW50SW5zdGFuY2UudGV4dEtleSA9IG1lc3NhZ2VMYWJlbCA/PyAnTEJMX0dFTkVSSUNfQ09ORklSTUFUSU9OJztcbiAgICAgICAgbW9kYWwuY29tcG9uZW50SW5zdGFuY2UuYnV0dG9ucyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYWJlbEtleTogJ0xCTF9DQU5DRUwnLFxuICAgICAgICAgICAgICAgIGtsYXNzOiBbJ2J0bi1zZWNvbmRhcnknXSxcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiBhY3RpdmVNb2RhbCA9PiBhY3RpdmVNb2RhbC5kaXNtaXNzKClcbiAgICAgICAgICAgIH0gYXMgTW9kYWxCdXR0b25JbnRlcmZhY2UsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWxLZXk6ICdMQkxfUFJPQ0VFRCcsXG4gICAgICAgICAgICAgICAga2xhc3M6IFsnYnRuLW1haW4nXSxcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiBhY3RpdmVNb2RhbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9uUHJvY2VlZCgpO1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmVNb2RhbC5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gYXMgTW9kYWxCdXR0b25JbnRlcmZhY2UsXG4gICAgICAgIF07XG4gICAgfVxufVxuIl19