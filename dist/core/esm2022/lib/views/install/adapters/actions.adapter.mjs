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
import { map } from 'rxjs/operators';
import { BaseRecordActionsAdapter } from '../../../services/actions/base-record-action.adapter';
import * as i0 from "@angular/core";
import * as i1 from "../store/install-view/install-view.store";
import * as i2 from "../../../store/metadata/metadata.store.service";
import * as i3 from "../../../store/language/language.store";
import * as i4 from "../actions/install-action-manager.service";
import * as i5 from "../../../services/process/processes/async-action/async-action";
import * as i6 from "../../../services/message/message.service";
import * as i7 from "../../../services/modals/confirmation-modal.service";
import * as i8 from "../../../services/modals/select-modal.service";
class InstallActionsAdapter extends BaseRecordActionsAdapter {
    store;
    metadata;
    language;
    actionManager;
    asyncActionService;
    message;
    confirmation;
    selectModalService;
    defaultActions = {
        detail: [],
        edit: [
            {
                key: 'install',
                labelKey: 'LBL_PROCEED',
                params: {
                    expanded: true
                },
                acl: []
            },
        ],
        create: [],
    };
    collapseButtons = false;
    constructor(store, metadata, language, actionManager, asyncActionService, message, confirmation, selectModalService) {
        super(actionManager, asyncActionService, message, confirmation, language, selectModalService, metadata);
        this.store = store;
        this.metadata = metadata;
        this.language = language;
        this.actionManager = actionManager;
        this.asyncActionService = asyncActionService;
        this.message = message;
        this.confirmation = confirmation;
        this.selectModalService = selectModalService;
    }
    getActions(context) {
        return this.store.getActions().pipe(combineLatestWith(this.store.mode$, this.store.stagingRecord$), map(([actions, mode]) => {
            if (!mode) {
                return [];
            }
            return this.parseModeActions(actions, mode, this.store.getViewContext());
        }));
    }
    buildActionData(action, context) {
        return {
            store: this.store
        };
    }
    /**
     * Build backend process input
     *
     * @param action
     * @param actionName
     * @param moduleName
     * @param context
     */
    buildActionInput(action, actionName, moduleName, context = null) {
        const baseRecord = this.store.getBaseRecord();
        this.message.removeMessages();
        return {
            action: actionName,
            module: baseRecord.module,
            id: baseRecord.id,
            record: baseRecord
        };
    }
    getMode() {
        return this.store.getMode();
    }
    getModuleName(context) {
        return this.store.getModuleName();
    }
    reload(action, process, context) {
    }
    static ɵfac = function InstallActionsAdapter_Factory(t) { return new (t || InstallActionsAdapter)(i0.ɵɵinject(i1.InstallViewStore), i0.ɵɵinject(i2.MetadataStore), i0.ɵɵinject(i3.LanguageStore), i0.ɵɵinject(i4.InstallActionManager), i0.ɵɵinject(i5.AsyncActionService), i0.ɵɵinject(i6.MessageService), i0.ɵɵinject(i7.ConfirmationModalService), i0.ɵɵinject(i8.SelectModalService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: InstallActionsAdapter, factory: InstallActionsAdapter.ɵfac });
}
export { InstallActionsAdapter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InstallActionsAdapter, [{
        type: Injectable
    }], function () { return [{ type: i1.InstallViewStore }, { type: i2.MetadataStore }, { type: i3.LanguageStore }, { type: i4.InstallActionManager }, { type: i5.AsyncActionService }, { type: i6.MessageService }, { type: i7.ConfirmationModalService }, { type: i8.SelectModalService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3ZpZXdzL2luc3RhbGwvYWRhcHRlcnMvYWN0aW9ucy5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBQyxpQkFBaUIsRUFBYSxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFPbkMsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sc0RBQXNELENBQUM7Ozs7Ozs7Ozs7QUFNOUYsTUFDYSxxQkFBc0IsU0FBUSx3QkFBK0M7SUFtQnhFO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUF4QmQsY0FBYyxHQUFnQjtRQUMxQixNQUFNLEVBQUUsRUFBRTtRQUNWLElBQUksRUFBRTtZQUNGO2dCQUNJLEdBQUcsRUFBRSxTQUFTO2dCQUNkLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixNQUFNLEVBQUU7b0JBQ0osUUFBUSxFQUFFLElBQUk7aUJBQ2pCO2dCQUNELEdBQUcsRUFBRSxFQUFFO2FBQ1Y7U0FDSjtRQUNELE1BQU0sRUFBRSxFQUFFO0tBQ2IsQ0FBQztJQUNGLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFFeEIsWUFDYyxLQUF1QixFQUN2QixRQUF1QixFQUN2QixRQUF1QixFQUN2QixhQUFtQyxFQUNuQyxrQkFBc0MsRUFDdEMsT0FBdUIsRUFDdkIsWUFBc0MsRUFDdEMsa0JBQXNDO1FBRWhELEtBQUssQ0FDRCxhQUFhLEVBQ2Isa0JBQWtCLEVBQ2xCLE9BQU8sRUFDUCxZQUFZLEVBQ1osUUFBUSxFQUNSLGtCQUFrQixFQUNsQixRQUFRLENBQ1gsQ0FBQTtRQWpCUyxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUN2QixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLGFBQVEsR0FBUixRQUFRLENBQWU7UUFDdkIsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsaUJBQVksR0FBWixZQUFZLENBQTBCO1FBQ3RDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7SUFXcEQsQ0FBQztJQUVELFVBQVUsQ0FBQyxPQUF1QjtRQUM5QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUMvQixpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxFQUM5RCxHQUFHLENBQUMsQ0FBQyxDQUFFLE9BQU8sRUFBRSxJQUFJLENBQXlDLEVBQUUsRUFBRTtZQUM3RCxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNQLE9BQU8sRUFBRSxDQUFDO2FBQ2I7WUFDRCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztRQUM3RSxDQUFDLENBQUMsQ0FDTCxDQUFDO0lBQ04sQ0FBQztJQUVTLGVBQWUsQ0FBQyxNQUFjLEVBQUUsT0FBdUI7UUFDN0QsT0FBTztZQUNILEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztTQUNLLENBQUM7SUFDL0IsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDTyxnQkFBZ0IsQ0FBQyxNQUFjLEVBQUUsVUFBa0IsRUFBRSxVQUFrQixFQUFFLFVBQXlCLElBQUk7UUFDNUcsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUU5QyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRTlCLE9BQU87WUFDSCxNQUFNLEVBQUUsVUFBVTtZQUNsQixNQUFNLEVBQUUsVUFBVSxDQUFDLE1BQU07WUFDekIsRUFBRSxFQUFFLFVBQVUsQ0FBQyxFQUFFO1lBQ2pCLE1BQU0sRUFBRSxVQUFVO1NBQ0QsQ0FBQztJQUMxQixDQUFDO0lBRVMsT0FBTztRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRVMsYUFBYSxDQUFDLE9BQXVCO1FBQzNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBRVMsTUFBTSxDQUFDLE1BQWMsRUFBRSxPQUFnQixFQUFFLE9BQXVCO0lBQzFFLENBQUM7K0VBdkZRLHFCQUFxQjtnRUFBckIscUJBQXFCLFdBQXJCLHFCQUFxQjs7U0FBckIscUJBQXFCO3VGQUFyQixxQkFBcUI7Y0FEakMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWN0aW9uLCBBY3Rpb25Db250ZXh0LCBNb2RlQWN0aW9ucywgVmlld01vZGV9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge2NvbWJpbmVMYXRlc3RXaXRoLCBPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7bWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge01ldGFkYXRhU3RvcmV9IGZyb20gJy4uLy4uLy4uL3N0b3JlL21ldGFkYXRhL21ldGFkYXRhLnN0b3JlLnNlcnZpY2UnO1xuaW1wb3J0IHtBc3luY0FjdGlvbklucHV0LCBBc3luY0FjdGlvblNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3Byb2Nlc3MvcHJvY2Vzc2VzL2FzeW5jLWFjdGlvbi9hc3luYy1hY3Rpb24nO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQge1Byb2Nlc3N9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3Byb2Nlc3MvcHJvY2Vzcy5zZXJ2aWNlJztcbmltcG9ydCB7Q29uZmlybWF0aW9uTW9kYWxTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9tb2RhbHMvY29uZmlybWF0aW9uLW1vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHtCYXNlUmVjb3JkQWN0aW9uc0FkYXB0ZXJ9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2FjdGlvbnMvYmFzZS1yZWNvcmQtYWN0aW9uLmFkYXB0ZXInO1xuaW1wb3J0IHtJbnN0YWxsVmlld0FjdGlvbkRhdGF9IGZyb20gJy4uL2FjdGlvbnMvaW5zdGFsbC12aWV3LmFjdGlvbic7XG5pbXBvcnQge0luc3RhbGxWaWV3U3RvcmV9IGZyb20gJy4uL3N0b3JlL2luc3RhbGwtdmlldy9pbnN0YWxsLXZpZXcuc3RvcmUnO1xuaW1wb3J0IHtJbnN0YWxsQWN0aW9uTWFuYWdlcn0gZnJvbSAnLi4vYWN0aW9ucy9pbnN0YWxsLWFjdGlvbi1tYW5hZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHtTZWxlY3RNb2RhbFNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL21vZGFscy9zZWxlY3QtbW9kYWwuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbnN0YWxsQWN0aW9uc0FkYXB0ZXIgZXh0ZW5kcyBCYXNlUmVjb3JkQWN0aW9uc0FkYXB0ZXI8SW5zdGFsbFZpZXdBY3Rpb25EYXRhPiB7XG5cbiAgICBkZWZhdWx0QWN0aW9uczogTW9kZUFjdGlvbnMgPSB7XG4gICAgICAgIGRldGFpbDogW10sXG4gICAgICAgIGVkaXQ6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6ICdpbnN0YWxsJyxcbiAgICAgICAgICAgICAgICBsYWJlbEtleTogJ0xCTF9QUk9DRUVEJyxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWQ6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGFjbDogW11cbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGNyZWF0ZTogW10sXG4gICAgfTtcbiAgICBjb2xsYXBzZUJ1dHRvbnMgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgc3RvcmU6IEluc3RhbGxWaWV3U3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBtZXRhZGF0YTogTWV0YWRhdGFTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgYWN0aW9uTWFuYWdlcjogSW5zdGFsbEFjdGlvbk1hbmFnZXIsXG4gICAgICAgIHByb3RlY3RlZCBhc3luY0FjdGlvblNlcnZpY2U6IEFzeW5jQWN0aW9uU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIG1lc3NhZ2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgY29uZmlybWF0aW9uOiBDb25maXJtYXRpb25Nb2RhbFNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBzZWxlY3RNb2RhbFNlcnZpY2U6IFNlbGVjdE1vZGFsU2VydmljZVxuICAgICkge1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGFjdGlvbk1hbmFnZXIsXG4gICAgICAgICAgICBhc3luY0FjdGlvblNlcnZpY2UsXG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgY29uZmlybWF0aW9uLFxuICAgICAgICAgICAgbGFuZ3VhZ2UsXG4gICAgICAgICAgICBzZWxlY3RNb2RhbFNlcnZpY2UsXG4gICAgICAgICAgICBtZXRhZGF0YVxuICAgICAgICApXG4gICAgfVxuXG4gICAgZ2V0QWN0aW9ucyhjb250ZXh0PzogQWN0aW9uQ29udGV4dCk6IE9ic2VydmFibGU8QWN0aW9uW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUuZ2V0QWN0aW9ucygpLnBpcGUoXG4gICAgICAgICAgICBjb21iaW5lTGF0ZXN0V2l0aCh0aGlzLnN0b3JlLm1vZGUkLCB0aGlzLnN0b3JlLnN0YWdpbmdSZWNvcmQkKSxcbiAgICAgICAgICAgIG1hcCgoWyBhY3Rpb25zLCBtb2RlXTogW0FjdGlvbltdLCBWaWV3TW9kZSwgUmVjb3JkPGFueSwgYW55Pl0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIW1vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZU1vZGVBY3Rpb25zKGFjdGlvbnMsIG1vZGUsIHRoaXMuc3RvcmUuZ2V0Vmlld0NvbnRleHQoKSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBidWlsZEFjdGlvbkRhdGEoYWN0aW9uOiBBY3Rpb24sIGNvbnRleHQ/OiBBY3Rpb25Db250ZXh0KTogSW5zdGFsbFZpZXdBY3Rpb25EYXRhIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0b3JlOiB0aGlzLnN0b3JlXG4gICAgICAgIH0gYXMgSW5zdGFsbFZpZXdBY3Rpb25EYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIGJhY2tlbmQgcHJvY2VzcyBpbnB1dFxuICAgICAqXG4gICAgICogQHBhcmFtIGFjdGlvblxuICAgICAqIEBwYXJhbSBhY3Rpb25OYW1lXG4gICAgICogQHBhcmFtIG1vZHVsZU5hbWVcbiAgICAgKiBAcGFyYW0gY29udGV4dFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBidWlsZEFjdGlvbklucHV0KGFjdGlvbjogQWN0aW9uLCBhY3Rpb25OYW1lOiBzdHJpbmcsIG1vZHVsZU5hbWU6IHN0cmluZywgY29udGV4dDogQWN0aW9uQ29udGV4dCA9IG51bGwpOiBBc3luY0FjdGlvbklucHV0IHtcbiAgICAgICAgY29uc3QgYmFzZVJlY29yZCA9IHRoaXMuc3RvcmUuZ2V0QmFzZVJlY29yZCgpO1xuXG4gICAgICAgIHRoaXMubWVzc2FnZS5yZW1vdmVNZXNzYWdlcygpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvbk5hbWUsXG4gICAgICAgICAgICBtb2R1bGU6IGJhc2VSZWNvcmQubW9kdWxlLFxuICAgICAgICAgICAgaWQ6IGJhc2VSZWNvcmQuaWQsXG4gICAgICAgICAgICByZWNvcmQ6IGJhc2VSZWNvcmRcbiAgICAgICAgfSBhcyBBc3luY0FjdGlvbklucHV0O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRNb2RlKCk6IFZpZXdNb2RlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUuZ2V0TW9kZSgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRNb2R1bGVOYW1lKGNvbnRleHQ/OiBBY3Rpb25Db250ZXh0KTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUuZ2V0TW9kdWxlTmFtZSgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZWxvYWQoYWN0aW9uOiBBY3Rpb24sIHByb2Nlc3M6IFByb2Nlc3MsIGNvbnRleHQ/OiBBY3Rpb25Db250ZXh0KTogdm9pZCB7XG4gICAgfVxufVxuIl19