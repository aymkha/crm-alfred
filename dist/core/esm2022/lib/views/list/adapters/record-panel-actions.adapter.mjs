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
import { combineLatestWith } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { BaseRecordActionsAdapter } from '../../../services/actions/base-record-action.adapter';
import * as i0 from "@angular/core";
import * as i1 from "../../../containers/record-panel/store/record-panel/record-panel.store";
import * as i2 from "../store/list-view/list-view.store";
import * as i3 from "../../../store/language/language.store";
import * as i4 from "../actions/record-panel/record-panel-action-manager.service";
import * as i5 from "../../../services/process/processes/async-action/async-action";
import * as i6 from "../../../services/message/message.service";
import * as i7 from "../../../services/modals/confirmation-modal.service";
import * as i8 from "../../../services/modals/select-modal.service";
import * as i9 from "../../../store/metadata/metadata.store.service";
class ListViewRecordPanelActionsAdapter extends BaseRecordActionsAdapter {
    store;
    listStore;
    language;
    actionManager;
    asyncActionService;
    message;
    confirmation;
    selectModalService;
    metadata;
    collapseButtons = false;
    constructor(store, listStore, language, actionManager, asyncActionService, message, confirmation, selectModalService, metadata) {
        super(actionManager, asyncActionService, message, confirmation, language, selectModalService, metadata);
        this.store = store;
        this.listStore = listStore;
        this.language = language;
        this.actionManager = actionManager;
        this.asyncActionService = asyncActionService;
        this.message = message;
        this.confirmation = confirmation;
        this.selectModalService = selectModalService;
        this.metadata = metadata;
    }
    getActions(context) {
        return this.store.meta$.pipe(combineLatestWith(this.store.mode$, this.store.stagingRecord$, this.language.vm$), map(([meta, mode, stagingRecord, vm]) => {
            if (!mode || !meta) {
                return [];
            }
            return this.parseModeActions(meta.actions, mode);
        }));
    }
    buildActionData(action, context) {
        return {
            store: this.store,
            listStore: this.listStore,
            action
        };
    }
    getMode() {
        return this.store.getMode();
    }
    getModuleName(context) {
        return this.store.getModuleName();
    }
    reload(action, process, context) {
        this.listStore.load(false).pipe(take(1)).subscribe();
    }
    static ɵfac = function ListViewRecordPanelActionsAdapter_Factory(t) { return new (t || ListViewRecordPanelActionsAdapter)(i0.ɵɵinject(i1.RecordPanelStore), i0.ɵɵinject(i2.ListViewStore), i0.ɵɵinject(i3.LanguageStore), i0.ɵɵinject(i4.RecordPanelActionManager), i0.ɵɵinject(i5.AsyncActionService), i0.ɵɵinject(i6.MessageService), i0.ɵɵinject(i7.ConfirmationModalService), i0.ɵɵinject(i8.SelectModalService), i0.ɵɵinject(i9.MetadataStore)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ListViewRecordPanelActionsAdapter, factory: ListViewRecordPanelActionsAdapter.ɵfac });
}
export { ListViewRecordPanelActionsAdapter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListViewRecordPanelActionsAdapter, [{
        type: Injectable
    }], function () { return [{ type: i1.RecordPanelStore }, { type: i2.ListViewStore }, { type: i3.LanguageStore }, { type: i4.RecordPanelActionManager }, { type: i5.AsyncActionService }, { type: i6.MessageService }, { type: i7.ConfirmationModalService }, { type: i8.SelectModalService }, { type: i9.MetadataStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLXBhbmVsLWFjdGlvbnMuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi92aWV3cy9saXN0L2FkYXB0ZXJzL3JlY29yZC1wYW5lbC1hY3Rpb25zLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFDLGlCQUFpQixFQUFhLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFNekMsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sc0RBQXNELENBQUM7Ozs7Ozs7Ozs7O0FBUzlGLE1BQ2EsaUNBQWtDLFNBQVEsd0JBQStDO0lBS3BGO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQVhkLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFFeEIsWUFDYyxLQUF1QixFQUN2QixTQUF3QixFQUN4QixRQUF1QixFQUN2QixhQUF1QyxFQUN2QyxrQkFBc0MsRUFDdEMsT0FBdUIsRUFDdkIsWUFBc0MsRUFDdEMsa0JBQXNDLEVBQ3RDLFFBQXVCO1FBRWpDLEtBQUssQ0FDRCxhQUFhLEVBQ2Isa0JBQWtCLEVBQ2xCLE9BQU8sRUFDUCxZQUFZLEVBQ1osUUFBUSxFQUNSLGtCQUFrQixFQUNsQixRQUFRLENBQ1gsQ0FBQTtRQWxCUyxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUN2QixjQUFTLEdBQVQsU0FBUyxDQUFlO1FBQ3hCLGFBQVEsR0FBUixRQUFRLENBQWU7UUFDdkIsa0JBQWEsR0FBYixhQUFhLENBQTBCO1FBQ3ZDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsaUJBQVksR0FBWixZQUFZLENBQTBCO1FBQ3RDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsYUFBUSxHQUFSLFFBQVEsQ0FBZTtJQVdyQyxDQUFDO0lBRUQsVUFBVSxDQUFDLE9BQXVCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUN4QixpQkFBaUIsQ0FDVCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUN4QixFQUNELEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNwQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNoQixPQUFPLEVBQUUsQ0FBQzthQUNiO1lBRUQsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUMsQ0FDTCxDQUFDO0lBQ04sQ0FBQztJQUVTLGVBQWUsQ0FBQyxNQUFjLEVBQUUsT0FBdUI7UUFDN0QsT0FBTztZQUNILEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsTUFBTTtTQUN3QixDQUFDO0lBQ3ZDLENBQUM7SUFFUyxPQUFPO1FBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFUyxhQUFhLENBQUMsT0FBdUI7UUFDM0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFUyxNQUFNLENBQUMsTUFBYyxFQUFFLE9BQWdCLEVBQUUsT0FBdUI7UUFDdEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3pELENBQUM7MkZBN0RRLGlDQUFpQztnRUFBakMsaUNBQWlDLFdBQWpDLGlDQUFpQzs7U0FBakMsaUNBQWlDO3VGQUFqQyxpQ0FBaUM7Y0FEN0MsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWN0aW9uLCBBY3Rpb25Db250ZXh0LCBWaWV3TW9kZX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7Y29tYmluZUxhdGVzdFdpdGgsIE9ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHttYXAsIHRha2V9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7QXN5bmNBY3Rpb25TZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9wcm9jZXNzL3Byb2Nlc3Nlcy9hc3luYy1hY3Rpb24vYXN5bmMtYWN0aW9uJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbWVzc2FnZS9tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHtQcm9jZXNzfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9wcm9jZXNzL3Byb2Nlc3Muc2VydmljZSc7XG5pbXBvcnQge0NvbmZpcm1hdGlvbk1vZGFsU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbW9kYWxzL2NvbmZpcm1hdGlvbi1tb2RhbC5zZXJ2aWNlJztcbmltcG9ydCB7QmFzZVJlY29yZEFjdGlvbnNBZGFwdGVyfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9hY3Rpb25zL2Jhc2UtcmVjb3JkLWFjdGlvbi5hZGFwdGVyJztcbmltcG9ydCB7UmVjb3JkUGFuZWxBY3Rpb25EYXRhfSBmcm9tICcuLi8uLi8uLi9jb250YWluZXJzL3JlY29yZC1wYW5lbC9jb21wb25lbnRzL3JlY29yZC1wYW5lbC9yZWNvcmQtcGFuZWwubW9kZWwnO1xuaW1wb3J0IHtSZWNvcmRQYW5lbFN0b3JlfSBmcm9tICcuLi8uLi8uLi9jb250YWluZXJzL3JlY29yZC1wYW5lbC9zdG9yZS9yZWNvcmQtcGFuZWwvcmVjb3JkLXBhbmVsLnN0b3JlJztcbmltcG9ydCB7UmVjb3JkUGFuZWxBY3Rpb25NYW5hZ2VyfSBmcm9tICcuLi9hY3Rpb25zL3JlY29yZC1wYW5lbC9yZWNvcmQtcGFuZWwtYWN0aW9uLW1hbmFnZXIuc2VydmljZSc7XG5pbXBvcnQge0xpc3RWaWV3U3RvcmV9IGZyb20gJy4uL3N0b3JlL2xpc3Qtdmlldy9saXN0LXZpZXcuc3RvcmUnO1xuaW1wb3J0IHtMaXN0Vmlld1JlY29yZFBhbmVsQWN0aW9uRGF0YX0gZnJvbSAnLi4vYWN0aW9ucy9yZWNvcmQtcGFuZWwvcmVjb3JkLXBhbmVsLmFjdGlvbic7XG5pbXBvcnQge1NlbGVjdE1vZGFsU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbW9kYWxzL3NlbGVjdC1tb2RhbC5zZXJ2aWNlJztcbmltcG9ydCB7TWV0YWRhdGFTdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvbWV0YWRhdGEvbWV0YWRhdGEuc3RvcmUuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld1JlY29yZFBhbmVsQWN0aW9uc0FkYXB0ZXIgZXh0ZW5kcyBCYXNlUmVjb3JkQWN0aW9uc0FkYXB0ZXI8UmVjb3JkUGFuZWxBY3Rpb25EYXRhPiB7XG5cbiAgICBjb2xsYXBzZUJ1dHRvbnMgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgc3RvcmU6IFJlY29yZFBhbmVsU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBsaXN0U3RvcmU6IExpc3RWaWV3U3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBsYW5ndWFnZTogTGFuZ3VhZ2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGFjdGlvbk1hbmFnZXI6IFJlY29yZFBhbmVsQWN0aW9uTWFuYWdlcixcbiAgICAgICAgcHJvdGVjdGVkIGFzeW5jQWN0aW9uU2VydmljZTogQXN5bmNBY3Rpb25TZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgbWVzc2FnZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBjb25maXJtYXRpb246IENvbmZpcm1hdGlvbk1vZGFsU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIHNlbGVjdE1vZGFsU2VydmljZTogU2VsZWN0TW9kYWxTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgbWV0YWRhdGE6IE1ldGFkYXRhU3RvcmVcbiAgICApIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBhY3Rpb25NYW5hZ2VyLFxuICAgICAgICAgICAgYXN5bmNBY3Rpb25TZXJ2aWNlLFxuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgIGNvbmZpcm1hdGlvbixcbiAgICAgICAgICAgIGxhbmd1YWdlLFxuICAgICAgICAgICAgc2VsZWN0TW9kYWxTZXJ2aWNlLFxuICAgICAgICAgICAgbWV0YWRhdGFcbiAgICAgICAgKVxuICAgIH1cblxuICAgIGdldEFjdGlvbnMoY29udGV4dD86IEFjdGlvbkNvbnRleHQpOiBPYnNlcnZhYmxlPEFjdGlvbltdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlLm1ldGEkLnBpcGUoXG4gICAgICAgICAgICBjb21iaW5lTGF0ZXN0V2l0aChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5tb2RlJCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5zdGFnaW5nUmVjb3JkJCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5ndWFnZS52bSQsXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgbWFwKChbbWV0YSwgbW9kZSwgc3RhZ2luZ1JlY29yZCwgdm1dKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFtb2RlIHx8ICFtZXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZU1vZGVBY3Rpb25zKG1ldGEuYWN0aW9ucywgbW9kZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBidWlsZEFjdGlvbkRhdGEoYWN0aW9uOiBBY3Rpb24sIGNvbnRleHQ/OiBBY3Rpb25Db250ZXh0KTogUmVjb3JkUGFuZWxBY3Rpb25EYXRhIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0b3JlOiB0aGlzLnN0b3JlLFxuICAgICAgICAgICAgbGlzdFN0b3JlOiB0aGlzLmxpc3RTdG9yZSxcbiAgICAgICAgICAgIGFjdGlvblxuICAgICAgICB9IGFzIExpc3RWaWV3UmVjb3JkUGFuZWxBY3Rpb25EYXRhO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRNb2RlKCk6IFZpZXdNb2RlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUuZ2V0TW9kZSgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRNb2R1bGVOYW1lKGNvbnRleHQ/OiBBY3Rpb25Db250ZXh0KTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUuZ2V0TW9kdWxlTmFtZSgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZWxvYWQoYWN0aW9uOiBBY3Rpb24sIHByb2Nlc3M6IFByb2Nlc3MsIGNvbnRleHQ/OiBBY3Rpb25Db250ZXh0KTogdm9pZCB7XG4gICAgICAgIHRoaXMubGlzdFN0b3JlLmxvYWQoZmFsc2UpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCk7XG4gICAgfVxufVxuIl19