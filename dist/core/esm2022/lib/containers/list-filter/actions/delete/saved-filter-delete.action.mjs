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
import { SavedFilterActionHandler } from '../saved-filter.action';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/message/message.service";
import * as i2 from "../../../../services/process/processes/async-action/async-action";
class SavedFilterDeleteAction extends SavedFilterActionHandler {
    message;
    asyncActionService;
    key = 'delete';
    modes = ['edit', 'detail'];
    constructor(message, asyncActionService) {
        super();
        this.message = message;
        this.asyncActionService = asyncActionService;
    }
    run(data) {
        const actionName = `record-${this.key}`;
        const baseRecord = (data.store.getBaseRecord()) || {};
        if (!baseRecord.id) {
            this.message.addWarningMessageByKey('LBL_FILTER_ID_NOT_DEFINED');
            return;
        }
        this.message.removeMessages();
        const asyncData = {
            action: actionName,
            module: baseRecord.module,
            id: baseRecord.id,
        };
        this.asyncActionService.run(actionName, asyncData, 'noop').pipe(take(1)).subscribe(() => {
            data.listFilterStore.config.removeSavedFilter(baseRecord);
        });
    }
    shouldDisplay(data) {
        const store = data && data.store;
        const filter = (store && store.recordStore.getBaseRecord()) || {};
        return !!filter.id;
    }
    static ɵfac = function SavedFilterDeleteAction_Factory(t) { return new (t || SavedFilterDeleteAction)(i0.ɵɵinject(i1.MessageService), i0.ɵɵinject(i2.AsyncActionService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SavedFilterDeleteAction, factory: SavedFilterDeleteAction.ɵfac, providedIn: 'root' });
}
export { SavedFilterDeleteAction };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SavedFilterDeleteAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.MessageService }, { type: i2.AsyncActionService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZWQtZmlsdGVyLWRlbGV0ZS5hY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9saXN0LWZpbHRlci9hY3Rpb25zL2RlbGV0ZS9zYXZlZC1maWx0ZXItZGVsZXRlLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEMsT0FBTyxFQUF3Qix3QkFBd0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7O0FBSXZGLE1BR2EsdUJBQXdCLFNBQVEsd0JBQXdCO0lBTW5EO0lBQ0E7SUFMZCxHQUFHLEdBQUcsUUFBUSxDQUFDO0lBQ2YsS0FBSyxHQUFHLENBQUMsTUFBa0IsRUFBRSxRQUFvQixDQUFDLENBQUM7SUFFbkQsWUFDYyxPQUF1QixFQUN2QixrQkFBc0M7UUFFaEQsS0FBSyxFQUFFLENBQUM7UUFIRSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO0lBR3BELENBQUM7SUFFRCxHQUFHLENBQUMsSUFBMkI7UUFFM0IsTUFBTSxVQUFVLEdBQUcsVUFBVSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDeEMsTUFBTSxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksRUFBaUIsQ0FBQztRQUNyRSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLDJCQUEyQixDQUFDLENBQUM7WUFDakUsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUU5QixNQUFNLFNBQVMsR0FBRztZQUNkLE1BQU0sRUFBRSxVQUFVO1lBQ2xCLE1BQU0sRUFBRSxVQUFVLENBQUMsTUFBTTtZQUN6QixFQUFFLEVBQUUsVUFBVSxDQUFDLEVBQUU7U0FDQSxDQUFDO1FBRXRCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQ3ZCLFVBQVUsRUFDVixTQUFTLEVBQ1QsTUFBTSxDQUNULENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsYUFBYSxDQUFDLElBQTJCO1FBQ3JDLE1BQU0sS0FBSyxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ2pDLE1BQU0sTUFBTSxHQUFHLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxFQUFpQixDQUFDO1FBRWpGLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDdkIsQ0FBQztpRkEzQ1EsdUJBQXVCO2dFQUF2Qix1QkFBdUIsV0FBdkIsdUJBQXVCLG1CQUZwQixNQUFNOztTQUVULHVCQUF1Qjt1RkFBdkIsdUJBQXVCO2NBSG5DLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Vmlld01vZGV9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge3Rha2V9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL21lc3NhZ2UvbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7U2F2ZWRGaWx0ZXJBY3Rpb25EYXRhLCBTYXZlZEZpbHRlckFjdGlvbkhhbmRsZXJ9IGZyb20gJy4uL3NhdmVkLWZpbHRlci5hY3Rpb24nO1xuaW1wb3J0IHtBc3luY0FjdGlvbklucHV0LCBBc3luY0FjdGlvblNlcnZpY2V9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL3Byb2Nlc3MvcHJvY2Vzc2VzL2FzeW5jLWFjdGlvbi9hc3luYy1hY3Rpb24nO1xuaW1wb3J0IHtTYXZlZEZpbHRlcn0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvc2F2ZWQtZmlsdGVycy9zYXZlZC1maWx0ZXIubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNhdmVkRmlsdGVyRGVsZXRlQWN0aW9uIGV4dGVuZHMgU2F2ZWRGaWx0ZXJBY3Rpb25IYW5kbGVyIHtcblxuICAgIGtleSA9ICdkZWxldGUnO1xuICAgIG1vZGVzID0gWydlZGl0JyBhcyBWaWV3TW9kZSwgJ2RldGFpbCcgYXMgVmlld01vZGVdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBtZXNzYWdlOiBNZXNzYWdlU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGFzeW5jQWN0aW9uU2VydmljZTogQXN5bmNBY3Rpb25TZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcnVuKGRhdGE6IFNhdmVkRmlsdGVyQWN0aW9uRGF0YSk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IGFjdGlvbk5hbWUgPSBgcmVjb3JkLSR7dGhpcy5rZXl9YDtcbiAgICAgICAgY29uc3QgYmFzZVJlY29yZCA9IChkYXRhLnN0b3JlLmdldEJhc2VSZWNvcmQoKSkgfHwge30gYXMgU2F2ZWRGaWx0ZXI7XG4gICAgICAgIGlmICghYmFzZVJlY29yZC5pZCkge1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlLmFkZFdhcm5pbmdNZXNzYWdlQnlLZXkoJ0xCTF9GSUxURVJfSURfTk9UX0RFRklORUQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubWVzc2FnZS5yZW1vdmVNZXNzYWdlcygpO1xuXG4gICAgICAgIGNvbnN0IGFzeW5jRGF0YSA9IHtcbiAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1vZHVsZTogYmFzZVJlY29yZC5tb2R1bGUsXG4gICAgICAgICAgICBpZDogYmFzZVJlY29yZC5pZCxcbiAgICAgICAgfSBhcyBBc3luY0FjdGlvbklucHV0O1xuXG4gICAgICAgIHRoaXMuYXN5bmNBY3Rpb25TZXJ2aWNlLnJ1bihcbiAgICAgICAgICAgIGFjdGlvbk5hbWUsXG4gICAgICAgICAgICBhc3luY0RhdGEsXG4gICAgICAgICAgICAnbm9vcCdcbiAgICAgICAgKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICBkYXRhLmxpc3RGaWx0ZXJTdG9yZS5jb25maWcucmVtb3ZlU2F2ZWRGaWx0ZXIoYmFzZVJlY29yZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNob3VsZERpc3BsYXkoZGF0YTogU2F2ZWRGaWx0ZXJBY3Rpb25EYXRhKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHN0b3JlID0gZGF0YSAmJiBkYXRhLnN0b3JlO1xuICAgICAgICBjb25zdCBmaWx0ZXIgPSAoc3RvcmUgJiYgc3RvcmUucmVjb3JkU3RvcmUuZ2V0QmFzZVJlY29yZCgpKSB8fCB7fSBhcyBTYXZlZEZpbHRlcjtcblxuICAgICAgICByZXR1cm4gISFmaWx0ZXIuaWQ7XG4gICAgfVxufVxuIl19