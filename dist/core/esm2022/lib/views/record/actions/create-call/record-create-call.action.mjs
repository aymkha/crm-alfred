/**
 * Creates a Call from the current Account (restaurant) without leaving the record page.
 */
import { Injectable } from '@angular/core';
import { ALL_VIEW_MODES } from 'common';
import { RecordActionHandler } from '../record.action';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../../../../services/message/message.service";
class RecordCreateCallAction extends RecordActionHandler {
    http;
    message;
    key = 'create-call-from-account';
    modes = ALL_VIEW_MODES;
    constructor(http, message) {
        super();
        this.http = http;
        this.message = message;
    }
    run(data) {
        const record = data?.store?.recordStore?.getBaseRecord?.() ?? null;
        const id = record?.id ?? null;
        if (!id) {
            this.message.addDangerMessageByKey('LBL_ERROR_PROCESSING_REQUEST');
            return;
        }
        const url = `/legacy/index.php?module=Accounts&action=createActionFromAccount&record=${id}&ajax=1`;
        this.http.get(url).subscribe({
            next: (resp) => {
                if (resp && resp.success) {
                    this.message.addSuccessMessageByKey('LBL_ACTION_CREATED_SUCCESS');
                    data?.store?.load?.(false)?.subscribe?.();
                }
                else {
                    this.message.addDangerMessageByKey('LBL_ERROR_PROCESSING_REQUEST');
                }
            },
            error: () => {
                this.message.addDangerMessageByKey('LBL_ERROR_PROCESSING_REQUEST');
            }
        });
    }
    shouldDisplay(data) {
        return !!(data?.store?.recordStore?.getBaseRecord?.()?.id);
    }
    static ɵfac = function RecordCreateCallAction_Factory(t) { return new (t || RecordCreateCallAction)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.MessageService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordCreateCallAction, factory: RecordCreateCallAction.ɵfac, providedIn: 'root' });
}
export { RecordCreateCallAction };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordCreateCallAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: i2.MessageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLWNyZWF0ZS1jYWxsLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi92aWV3cy9yZWNvcmQvYWN0aW9ucy9jcmVhdGUtY2FsbC9yZWNvcmQtY3JlYXRlLWNhbGwuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsY0FBYyxFQUFTLE1BQU0sUUFBUSxDQUFDO0FBRTlDLE9BQU8sRUFBbUIsbUJBQW1CLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQzs7OztBQUd2RSxNQUdhLHNCQUF1QixTQUFRLG1CQUFtQjtJQU03QztJQUNBO0lBTGQsR0FBRyxHQUFHLDBCQUEwQixDQUFDO0lBQ2pDLEtBQUssR0FBRyxjQUFjLENBQUM7SUFFdkIsWUFDYyxJQUFnQixFQUNoQixPQUF1QjtRQUVqQyxLQUFLLEVBQUUsQ0FBQztRQUhFLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7SUFHckMsQ0FBQztJQUVELEdBQUcsQ0FBQyxJQUFzQjtRQUN0QixNQUFNLE1BQU0sR0FBVyxJQUFJLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsRUFBRSxJQUFJLElBQUksQ0FBQztRQUMzRSxNQUFNLEVBQUUsR0FBRyxNQUFNLEVBQUUsRUFBRSxJQUFJLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1lBQ25FLE9BQU87U0FDVjtRQUVELE1BQU0sR0FBRyxHQUFHLDJFQUEyRSxFQUFFLFNBQVMsQ0FBQztRQUNuRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDekIsSUFBSSxFQUFFLENBQUMsSUFBUyxFQUFFLEVBQUU7Z0JBQ2hCLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsNEJBQTRCLENBQUMsQ0FBQztvQkFDbEUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDO2lCQUM3QztxQkFBTTtvQkFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLDhCQUE4QixDQUFDLENBQUM7aUJBQ3RFO1lBQ0wsQ0FBQztZQUNELEtBQUssRUFBRSxHQUFHLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1lBQ3ZFLENBQUM7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsYUFBYSxDQUFDLElBQXNCO1FBQ2hDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMvRCxDQUFDO2dGQXRDUSxzQkFBc0I7Z0VBQXRCLHNCQUFzQixXQUF0QixzQkFBc0IsbUJBRm5CLE1BQU07O1NBRVQsc0JBQXNCO3VGQUF0QixzQkFBc0I7Y0FIbEMsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVzIGEgQ2FsbCBmcm9tIHRoZSBjdXJyZW50IEFjY291bnQgKHJlc3RhdXJhbnQpIHdpdGhvdXQgbGVhdmluZyB0aGUgcmVjb3JkIHBhZ2UuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QUxMX1ZJRVdfTU9ERVMsIFJlY29yZH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtSZWNvcmRBY3Rpb25EYXRhLCBSZWNvcmRBY3Rpb25IYW5kbGVyfSBmcm9tICcuLi9yZWNvcmQuYWN0aW9uJztcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL21lc3NhZ2UvbWVzc2FnZS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBSZWNvcmRDcmVhdGVDYWxsQWN0aW9uIGV4dGVuZHMgUmVjb3JkQWN0aW9uSGFuZGxlciB7XG5cbiAgICBrZXkgPSAnY3JlYXRlLWNhbGwtZnJvbS1hY2NvdW50JztcbiAgICBtb2RlcyA9IEFMTF9WSUVXX01PREVTO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxuICAgICAgICBwcm90ZWN0ZWQgbWVzc2FnZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcnVuKGRhdGE6IFJlY29yZEFjdGlvbkRhdGEpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcmVjb3JkOiBSZWNvcmQgPSBkYXRhPy5zdG9yZT8ucmVjb3JkU3RvcmU/LmdldEJhc2VSZWNvcmQ/LigpID8/IG51bGw7XG4gICAgICAgIGNvbnN0IGlkID0gcmVjb3JkPy5pZCA/PyBudWxsO1xuICAgICAgICBpZiAoIWlkKSB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UuYWRkRGFuZ2VyTWVzc2FnZUJ5S2V5KCdMQkxfRVJST1JfUFJPQ0VTU0lOR19SRVFVRVNUJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1cmwgPSBgL2xlZ2FjeS9pbmRleC5waHA/bW9kdWxlPUFjY291bnRzJmFjdGlvbj1jcmVhdGVBY3Rpb25Gcm9tQWNjb3VudCZyZWNvcmQ9JHtpZH0mYWpheD0xYDtcbiAgICAgICAgdGhpcy5odHRwLmdldCh1cmwpLnN1YnNjcmliZSh7XG4gICAgICAgICAgICBuZXh0OiAocmVzcDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3AgJiYgcmVzcC5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZS5hZGRTdWNjZXNzTWVzc2FnZUJ5S2V5KCdMQkxfQUNUSU9OX0NSRUFURURfU1VDQ0VTUycpO1xuICAgICAgICAgICAgICAgICAgICBkYXRhPy5zdG9yZT8ubG9hZD8uKGZhbHNlKT8uc3Vic2NyaWJlPy4oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UuYWRkRGFuZ2VyTWVzc2FnZUJ5S2V5KCdMQkxfRVJST1JfUFJPQ0VTU0lOR19SRVFVRVNUJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlLmFkZERhbmdlck1lc3NhZ2VCeUtleSgnTEJMX0VSUk9SX1BST0NFU1NJTkdfUkVRVUVTVCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaG91bGREaXNwbGF5KGRhdGE6IFJlY29yZEFjdGlvbkRhdGEpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICEhKGRhdGE/LnN0b3JlPy5yZWNvcmRTdG9yZT8uZ2V0QmFzZVJlY29yZD8uKCk/LmlkKTtcbiAgICB9XG59XG4iXX0=