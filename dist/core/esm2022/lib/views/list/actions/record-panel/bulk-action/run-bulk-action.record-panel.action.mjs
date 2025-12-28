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
import { isFalse } from 'common';
import { take } from 'rxjs/operators';
import { ListViewRecordPanelActionHandler } from '../record-panel.action';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../services/message/message.service";
import * as i2 from "../../../../../services/process/processes/async-action/async-action";
import * as i3 from "../../../../../services/modals/confirmation-modal.service";
class RunBulkActionRecordPanelAction extends ListViewRecordPanelActionHandler {
    message;
    asyncActionService;
    confirmation;
    asyncAction;
    key = 'bulk-action';
    modes = [
        'detail',
        'edit',
        'list',
        'create',
        'massupdate'
    ];
    constructor(message, asyncActionService, confirmation, asyncAction) {
        super();
        this.message = message;
        this.asyncActionService = asyncActionService;
        this.confirmation = confirmation;
        this.asyncAction = asyncAction;
    }
    run(data) {
        const definition = data.action;
        const selection = data.listStore.recordList.selection;
        const params = (definition && definition.params) || {};
        if (isFalse(params.allowAll) && selection.all) {
            let message = data.listStore.appStrings.LBL_SELECT_ALL_NOT_ALLOWED;
            this.message.addDangerMessage(message);
            return;
        }
        if (params.min && selection.count < params.min) {
            let message = data.listStore.appStrings.LBL_TOO_FEW_SELECTED;
            message = message.replace('{min}', params.min);
            this.message.addDangerMessage(message);
            return;
        }
        if (params.max && selection.count > params.max) {
            let message = data.listStore.appStrings.LBL_TOO_MANY_SELECTED;
            message = message.replace('{max}', params.max);
            this.message.addDangerMessage(message);
            return;
        }
        this.runBulkAction(data);
    }
    shouldDisplay() {
        return true;
    }
    /**
     * Run async buk action
     *
     * @returns void
     * @param {AsyncActionInput} data: data passed to the async process
     */
    runBulkAction(data) {
        const actionName = `bulk-${data.action.params.bulkAction}`;
        const asyncData = this.buildActionInput(actionName, data);
        this.asyncAction.run(actionName, asyncData).subscribe((process) => {
            this.handleProcessResult(process, data);
        });
    }
    /**
     * Build backend bulk action input
     * @param actionName
     * @param data
     */
    buildActionInput(actionName, data) {
        const displayedFields = [];
        data.listStore.metadata.listView.fields.forEach(value => {
            displayedFields.push(value.name);
        });
        const asyncData = {
            action: actionName,
            module: data.listStore.getModuleName(),
            criteria: null,
            sort: null,
            ids: null,
            fields: displayedFields,
            payload: {
                panelRecord: data.store.recordStore.getBaseStaging()
            }
        };
        const selection = data.listStore.recordList.selection;
        if (selection.all && selection.count > data.listStore.recordList.records.length) {
            asyncData.criteria = data.listStore.recordList.criteria;
            asyncData.sort = data.listStore.recordList.sort;
        }
        if (selection.all && selection.count <= data.listStore.recordList.records.length) {
            asyncData.ids = [];
            data.listStore.recordList.records.forEach(record => {
                data.ids.push(record.id);
            });
        }
        if (!selection.all) {
            asyncData.ids = Object.keys(selection.selected);
        }
        return asyncData;
    }
    /**
     * Run this function once the process is executed
     *
     * @returns void
     * @param {object} process Process data returned by the process once the process is executed
     * @param {object} data ListViewRecordPanelActionData
     */
    handleProcessResult(process, data) {
        if (!process) {
            return;
        }
        if (process.data && process.data.reload) {
            data.listStore.recordList.clearSelection();
            data.listStore.load(false).pipe(take(1)).subscribe();
        }
        if (process.data && process.data.dataUpdated) {
            data.listStore.triggerDataUpdate();
        }
        data.listStore.closeRecordPanel();
    }
    static ɵfac = function RunBulkActionRecordPanelAction_Factory(t) { return new (t || RunBulkActionRecordPanelAction)(i0.ɵɵinject(i1.MessageService), i0.ɵɵinject(i2.AsyncActionService), i0.ɵɵinject(i3.ConfirmationModalService), i0.ɵɵinject(i2.AsyncActionService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RunBulkActionRecordPanelAction, factory: RunBulkActionRecordPanelAction.ɵfac, providedIn: 'root' });
}
export { RunBulkActionRecordPanelAction };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RunBulkActionRecordPanelAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.MessageService }, { type: i2.AsyncActionService }, { type: i3.ConfirmationModalService }, { type: i2.AsyncActionService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuLWJ1bGstYWN0aW9uLnJlY29yZC1wYW5lbC5hY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvbGlzdC9hY3Rpb25zL3JlY29yZC1wYW5lbC9idWxrLWFjdGlvbi9ydW4tYnVsay1hY3Rpb24ucmVjb3JkLXBhbmVsLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsT0FBTyxFQUFXLE1BQU0sUUFBUSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUdwQyxPQUFPLEVBQWdDLGdDQUFnQyxFQUFDLE1BQU0sd0JBQXdCLENBQUM7Ozs7O0FBT3ZHLE1BR2EsOEJBQStCLFNBQVEsZ0NBQWdDO0lBWWxFO0lBQ0E7SUFDQTtJQUNBO0lBYmQsR0FBRyxHQUFHLGFBQWEsQ0FBQztJQUNwQixLQUFLLEdBQUc7UUFDSixRQUFvQjtRQUNwQixNQUFrQjtRQUNsQixNQUFrQjtRQUNsQixRQUFvQjtRQUNwQixZQUF3QjtLQUMzQixDQUFDO0lBRUYsWUFDYyxPQUF1QixFQUN2QixrQkFBc0MsRUFDdEMsWUFBc0MsRUFDdEMsV0FBK0I7UUFFekMsS0FBSyxFQUFFLENBQUM7UUFMRSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLGlCQUFZLEdBQVosWUFBWSxDQUEwQjtRQUN0QyxnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7SUFHN0MsQ0FBQztJQUVELEdBQUcsQ0FBQyxJQUFtQztRQUVuQyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQy9CLE1BQU0sU0FBUyxHQUFHLElB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VSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQzNDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUN4RDtRQUVELElBQUksT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDdEM7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDdEMsQ0FBQzt3RkE1SVEsOEJBQThCO2dFQUE5Qiw4QkFBOEIsV0FBOUIsOEJBQThCLG1CQUYzQixNQUFNOztTQUVULDhCQUE4Qjt1RkFBOUIsOEJBQThCO2NBSDFDLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7aXNGYWxzZSwgVmlld01vZGV9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge3Rha2V9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7UHJvY2Vzc30gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2VydmljZXMvcHJvY2Vzcy9wcm9jZXNzLnNlcnZpY2UnO1xuaW1wb3J0IHtDb25maXJtYXRpb25Nb2RhbFNlcnZpY2V9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NlcnZpY2VzL21vZGFscy9jb25maXJtYXRpb24tbW9kYWwuc2VydmljZSc7XG5pbXBvcnQge0xpc3RWaWV3UmVjb3JkUGFuZWxBY3Rpb25EYXRhLCBMaXN0Vmlld1JlY29yZFBhbmVsQWN0aW9uSGFuZGxlcn0gZnJvbSAnLi4vcmVjb3JkLXBhbmVsLmFjdGlvbic7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zZXJ2aWNlcy9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQge1xuICAgIEFzeW5jQWN0aW9uSW5wdXQsXG4gICAgQXN5bmNBY3Rpb25TZXJ2aWNlXG59IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NlcnZpY2VzL3Byb2Nlc3MvcHJvY2Vzc2VzL2FzeW5jLWFjdGlvbi9hc3luYy1hY3Rpb24nO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFJ1bkJ1bGtBY3Rpb25SZWNvcmRQYW5lbEFjdGlvbiBleHRlbmRzIExpc3RWaWV3UmVjb3JkUGFuZWxBY3Rpb25IYW5kbGVyIHtcblxuICAgIGtleSA9ICdidWxrLWFjdGlvbic7XG4gICAgbW9kZXMgPSBbXG4gICAgICAgICdkZXRhaWwnIGFzIFZpZXdNb2RlLFxuICAgICAgICAnZWRpdCcgYXMgVmlld01vZGUsXG4gICAgICAgICdsaXN0JyBhcyBWaWV3TW9kZSxcbiAgICAgICAgJ2NyZWF0ZScgYXMgVmlld01vZGUsXG4gICAgICAgICdtYXNzdXBkYXRlJyBhcyBWaWV3TW9kZVxuICAgIF07XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIG1lc3NhZ2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgYXN5bmNBY3Rpb25TZXJ2aWNlOiBBc3luY0FjdGlvblNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBjb25maXJtYXRpb246IENvbmZpcm1hdGlvbk1vZGFsU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGFzeW5jQWN0aW9uOiBBc3luY0FjdGlvblNlcnZpY2VcbiAgICApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBydW4oZGF0YTogTGlzdFZpZXdSZWNvcmRQYW5lbEFjdGlvbkRhdGEpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gZGF0YS5hY3Rpb247XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGRhdGEubGlzdFN0b3JlLnJlY29yZExpc3Quc2VsZWN0aW9uO1xuXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IChkZWZpbml0aW9uICYmIGRlZmluaXRpb24ucGFyYW1zKSB8fCB7fSBhcyB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xuXG4gICAgICAgIGlmIChpc0ZhbHNlKHBhcmFtcy5hbGxvd0FsbCkgJiYgc2VsZWN0aW9uLmFsbCkge1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBkYXRhLmxpc3RTdG9yZS5hcHBTdHJpbmdzLkxCTF9TRUxFQ1RfQUxMX05PVF9BTExPV0VEO1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlLmFkZERhbmdlck1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyYW1zLm1pbiAmJiBzZWxlY3Rpb24uY291bnQgPCBwYXJhbXMubWluKSB7XG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9IGRhdGEubGlzdFN0b3JlLmFwcFN0cmluZ3MuTEJMX1RPT19GRVdfU0VMRUNURUQ7XG4gICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKCd7bWlufScsIHBhcmFtcy5taW4pO1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlLmFkZERhbmdlck1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyYW1zLm1heCAmJiBzZWxlY3Rpb24uY291bnQgPiBwYXJhbXMubWF4KSB7XG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9IGRhdGEubGlzdFN0b3JlLmFwcFN0cmluZ3MuTEJMX1RPT19NQU5ZX1NFTEVDVEVEO1xuICAgICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZSgne21heH0nLCBwYXJhbXMubWF4KTtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZS5hZGREYW5nZXJNZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ydW5CdWxrQWN0aW9uKGRhdGEpO1xuICAgIH1cblxuICAgIHNob3VsZERpc3BsYXkoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJ1biBhc3luYyBidWsgYWN0aW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICogQHBhcmFtIHtBc3luY0FjdGlvbklucHV0fSBkYXRhOiBkYXRhIHBhc3NlZCB0byB0aGUgYXN5bmMgcHJvY2Vzc1xuICAgICAqL1xuICAgIHB1YmxpYyBydW5CdWxrQWN0aW9uKGRhdGE6IExpc3RWaWV3UmVjb3JkUGFuZWxBY3Rpb25EYXRhKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgYWN0aW9uTmFtZSA9IGBidWxrLSR7ZGF0YS5hY3Rpb24ucGFyYW1zLmJ1bGtBY3Rpb259YDtcblxuICAgICAgICBjb25zdCBhc3luY0RhdGEgPSB0aGlzLmJ1aWxkQWN0aW9uSW5wdXQoYWN0aW9uTmFtZSwgZGF0YSk7XG5cbiAgICAgICAgdGhpcy5hc3luY0FjdGlvbi5ydW4oYWN0aW9uTmFtZSwgYXN5bmNEYXRhKS5zdWJzY3JpYmUoKHByb2Nlc3M6IFByb2Nlc3MpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUHJvY2Vzc1Jlc3VsdChwcm9jZXNzLCBkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgYmFja2VuZCBidWxrIGFjdGlvbiBpbnB1dFxuICAgICAqIEBwYXJhbSBhY3Rpb25OYW1lXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYnVpbGRBY3Rpb25JbnB1dChhY3Rpb25OYW1lOiBzdHJpbmcsIGRhdGE6IExpc3RWaWV3UmVjb3JkUGFuZWxBY3Rpb25EYXRhKSB7XG5cbiAgICAgICAgY29uc3QgZGlzcGxheWVkRmllbGRzID0gW107XG5cbiAgICAgICAgZGF0YS5saXN0U3RvcmUubWV0YWRhdGEubGlzdFZpZXcuZmllbGRzLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgICAgZGlzcGxheWVkRmllbGRzLnB1c2godmFsdWUubmFtZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGFzeW5jRGF0YSA9IHtcbiAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1vZHVsZTogZGF0YS5saXN0U3RvcmUuZ2V0TW9kdWxlTmFtZSgpLFxuICAgICAgICAgICAgY3JpdGVyaWE6IG51bGwsXG4gICAgICAgICAgICBzb3J0OiBudWxsLFxuICAgICAgICAgICAgaWRzOiBudWxsLFxuICAgICAgICAgICAgZmllbGRzOiBkaXNwbGF5ZWRGaWVsZHMsXG4gICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgcGFuZWxSZWNvcmQ6IGRhdGEuc3RvcmUucmVjb3JkU3RvcmUuZ2V0QmFzZVN0YWdpbmcoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGFzIEFzeW5jQWN0aW9uSW5wdXQ7XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZGF0YS5saXN0U3RvcmUucmVjb3JkTGlzdC5zZWxlY3Rpb247XG5cbiAgICAgICAgaWYgKHNlbGVjdGlvbi5hbGwgJiYgc2VsZWN0aW9uLmNvdW50ID4gZGF0YS5saXN0U3RvcmUucmVjb3JkTGlzdC5yZWNvcmRzLmxlbmd0aCkge1xuICAgICAgICAgICAgYXN5bmNEYXRhLmNyaXRlcmlhID0gZGF0YS5saXN0U3RvcmUucmVjb3JkTGlzdC5jcml0ZXJpYTtcbiAgICAgICAgICAgIGFzeW5jRGF0YS5zb3J0ID0gZGF0YS5saXN0U3RvcmUucmVjb3JkTGlzdC5zb3J0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGVjdGlvbi5hbGwgJiYgc2VsZWN0aW9uLmNvdW50IDw9IGRhdGEubGlzdFN0b3JlLnJlY29yZExpc3QucmVjb3Jkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGFzeW5jRGF0YS5pZHMgPSBbXTtcbiAgICAgICAgICAgIGRhdGEubGlzdFN0b3JlLnJlY29yZExpc3QucmVjb3Jkcy5mb3JFYWNoKHJlY29yZCA9PiB7XG4gICAgICAgICAgICAgICAgZGF0YS5pZHMucHVzaChyZWNvcmQuaWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNlbGVjdGlvbi5hbGwpIHtcbiAgICAgICAgICAgIGFzeW5jRGF0YS5pZHMgPSBPYmplY3Qua2V5cyhzZWxlY3Rpb24uc2VsZWN0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFzeW5jRGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSdW4gdGhpcyBmdW5jdGlvbiBvbmNlIHRoZSBwcm9jZXNzIGlzIGV4ZWN1dGVkXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHByb2Nlc3MgUHJvY2VzcyBkYXRhIHJldHVybmVkIGJ5IHRoZSBwcm9jZXNzIG9uY2UgdGhlIHByb2Nlc3MgaXMgZXhlY3V0ZWRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSBMaXN0Vmlld1JlY29yZFBhbmVsQWN0aW9uRGF0YVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBoYW5kbGVQcm9jZXNzUmVzdWx0KHByb2Nlc3M6IFByb2Nlc3MsIGRhdGE6IExpc3RWaWV3UmVjb3JkUGFuZWxBY3Rpb25EYXRhKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKCFwcm9jZXNzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvY2Vzcy5kYXRhICYmIHByb2Nlc3MuZGF0YS5yZWxvYWQpIHtcbiAgICAgICAgICAgIGRhdGEubGlzdFN0b3JlLnJlY29yZExpc3QuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgIGRhdGEubGlzdFN0b3JlLmxvYWQoZmFsc2UpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvY2Vzcy5kYXRhICYmIHByb2Nlc3MuZGF0YS5kYXRhVXBkYXRlZCkge1xuICAgICAgICAgICAgZGF0YS5saXN0U3RvcmUudHJpZ2dlckRhdGFVcGRhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEubGlzdFN0b3JlLmNsb3NlUmVjb3JkUGFuZWwoKTtcbiAgICB9XG59XG4iXX0=