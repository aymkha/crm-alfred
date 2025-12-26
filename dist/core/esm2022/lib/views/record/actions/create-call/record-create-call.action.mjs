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
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordCreateCallAction, factory: RecordCreateCallAction.ɵfac });
}
export { RecordCreateCallAction };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordCreateCallAction, [{
        type: Injectable
    }], function () { return [{ type: i1.HttpClient }, { type: i2.MessageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLWNyZWF0ZS1jYWxsLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi92aWV3cy9yZWNvcmQvYWN0aW9ucy9jcmVhdGUtY2FsbC9yZWNvcmQtY3JlYXRlLWNhbGwuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsY0FBYyxFQUFTLE1BQU0sUUFBUSxDQUFDO0FBRTlDLE9BQU8sRUFBbUIsbUJBQW1CLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQzs7OztBQUd2RSxNQUNhLHNCQUF1QixTQUFRLG1CQUFtQjtJQU03QztJQUNBO0lBTGQsR0FBRyxHQUFHLDBCQUEwQixDQUFDO0lBQ2pDLEtBQUssR0FBRyxjQUFjLENBQUM7SUFFdkIsWUFDYyxJQUFnQixFQUNoQixPQUF1QjtRQUVqQyxLQUFLLEVBQUUsQ0FBQztRQUhFLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7SUFHckMsQ0FBQztJQUVELEdBQUcsQ0FBQyxJQUFzQjtRQUN0QixNQUFNLE1BQU0sR0FBVyxJQUFJLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsRUFBRSxJQUFJLElBQUksQ0FBQztRQUMzRSxNQUFNLEVBQUUsR0FBRyxNQUFNLEVBQUUsRUFBRSxJQUFJLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1lBQ25FLE9BQU87U0FDVjtRQUVELE1BQU0sR0FBRyxHQUFHLDJFQUEyRSxFQUFFLFNBQVMsQ0FBQztRQUNuRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDekIsSUFBSSxFQUFFLENBQUMsSUFBUyxFQUFFLEVBQUU7Z0JBQ2hCLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsNEJBQTRCLENBQUMsQ0FBQztvQkFDbEUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDO2lCQUM3QztxQkFBTTtvQkFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLDhCQUE4QixDQUFDLENBQUM7aUJBQ3RFO1lBQ0wsQ0FBQztZQUNELEtBQUssRUFBRSxHQUFHLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1lBQ3ZFLENBQUM7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsYUFBYSxDQUFDLElBQXNCO1FBQ2hDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMvRCxDQUFDO2dGQXRDUSxzQkFBc0I7Z0VBQXRCLHNCQUFzQixXQUF0QixzQkFBc0I7O1NBQXRCLHNCQUFzQjt1RkFBdEIsc0JBQXNCO2NBRGxDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZXMgYSBDYWxsIGZyb20gdGhlIGN1cnJlbnQgQWNjb3VudCAocmVzdGF1cmFudCkgd2l0aG91dCBsZWF2aW5nIHRoZSByZWNvcmQgcGFnZS5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBTExfVklFV19NT0RFUywgUmVjb3JkfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge1JlY29yZEFjdGlvbkRhdGEsIFJlY29yZEFjdGlvbkhhbmRsZXJ9IGZyb20gJy4uL3JlY29yZC5hY3Rpb24nO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbWVzc2FnZS9tZXNzYWdlLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVjb3JkQ3JlYXRlQ2FsbEFjdGlvbiBleHRlbmRzIFJlY29yZEFjdGlvbkhhbmRsZXIge1xuXG4gICAga2V5ID0gJ2NyZWF0ZS1jYWxsLWZyb20tYWNjb3VudCc7XG4gICAgbW9kZXMgPSBBTExfVklFV19NT0RFUztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCxcbiAgICAgICAgcHJvdGVjdGVkIG1lc3NhZ2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgICkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHJ1bihkYXRhOiBSZWNvcmRBY3Rpb25EYXRhKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHJlY29yZDogUmVjb3JkID0gZGF0YT8uc3RvcmU/LnJlY29yZFN0b3JlPy5nZXRCYXNlUmVjb3JkPy4oKSA/PyBudWxsO1xuICAgICAgICBjb25zdCBpZCA9IHJlY29yZD8uaWQgPz8gbnVsbDtcbiAgICAgICAgaWYgKCFpZCkge1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlLmFkZERhbmdlck1lc3NhZ2VCeUtleSgnTEJMX0VSUk9SX1BST0NFU1NJTkdfUkVRVUVTVCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXJsID0gYC9sZWdhY3kvaW5kZXgucGhwP21vZHVsZT1BY2NvdW50cyZhY3Rpb249Y3JlYXRlQWN0aW9uRnJvbUFjY291bnQmcmVjb3JkPSR7aWR9JmFqYXg9MWA7XG4gICAgICAgIHRoaXMuaHR0cC5nZXQodXJsKS5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgbmV4dDogKHJlc3A6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwICYmIHJlc3Auc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UuYWRkU3VjY2Vzc01lc3NhZ2VCeUtleSgnTEJMX0FDVElPTl9DUkVBVEVEX1NVQ0NFU1MnKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YT8uc3RvcmU/LmxvYWQ/LihmYWxzZSk/LnN1YnNjcmliZT8uKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlLmFkZERhbmdlck1lc3NhZ2VCeUtleSgnTEJMX0VSUk9SX1BST0NFU1NJTkdfUkVRVUVTVCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZS5hZGREYW5nZXJNZXNzYWdlQnlLZXkoJ0xCTF9FUlJPUl9QUk9DRVNTSU5HX1JFUVVFU1QnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hvdWxkRGlzcGxheShkYXRhOiBSZWNvcmRBY3Rpb25EYXRhKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhIShkYXRhPy5zdG9yZT8ucmVjb3JkU3RvcmU/LmdldEJhc2VSZWNvcmQ/LigpPy5pZCk7XG4gICAgfVxufVxuIl19