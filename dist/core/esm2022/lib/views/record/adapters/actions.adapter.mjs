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
import { combineLatestWith } from 'rxjs';
import { map, take, } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { BaseRecordActionsAdapter } from '../../../services/actions/base-record-action.adapter';
import * as i0 from "@angular/core";
import * as i1 from "../store/record-view/record-view.store";
import * as i2 from "../../../store/metadata/metadata.store.service";
import * as i3 from "../../../store/language/language.store";
import * as i4 from "../actions/record-action-manager.service";
import * as i5 from "../../../services/process/processes/async-action/async-action";
import * as i6 from "../../../services/message/message.service";
import * as i7 from "../../../services/modals/confirmation-modal.service";
import * as i8 from "../../../services/modals/select-modal.service";
import * as i9 from "../action-logic/display-type/display-type.logic";
class RecordActionsAdapter extends BaseRecordActionsAdapter {
    store;
    metadata;
    language;
    actionManager;
    asyncActionService;
    message;
    confirmation;
    selectModalService;
    displayTypeLogic;
    defaultActions = {
        detail: [
            {
                key: 'toggle-widgets',
                labelKey: 'LBL_INSIGHTS',
                params: {
                    expanded: true
                },
                acl: []
            },
        ],
        edit: [
            {
                key: 'toggle-widgets',
                labelKey: 'LBL_INSIGHTS',
                params: {
                    expanded: true
                },
                acl: []
            }
        ],
    };
    constructor(store, metadata, language, actionManager, asyncActionService, message, confirmation, selectModalService, displayTypeLogic) {
        super(actionManager, asyncActionService, message, confirmation, language, selectModalService, metadata);
        this.store = store;
        this.metadata = metadata;
        this.language = language;
        this.actionManager = actionManager;
        this.asyncActionService = asyncActionService;
        this.message = message;
        this.confirmation = confirmation;
        this.selectModalService = selectModalService;
        this.displayTypeLogic = displayTypeLogic;
    }
    getActions(context) {
        return this.metadata.recordViewMetadata$.pipe(combineLatestWith(this.store.mode$, this.store.record$, this.store.language$, this.store.widgets$, this.store.panels$), map(([meta, mode]) => {
            if (!mode || !meta) {
                return [];
            }
            const ctx = this.store.getViewContext();
            const moduleName = ctx?.module ?? this.store?.getModuleName?.();
            // Ensure our custom action is present for Accounts even if metadata cache missed it
            const actions = [...(meta.actions || [])];
            if (moduleName && moduleName.toLowerCase() === 'accounts') {
                const exists = actions.some(action => action?.key === 'create-call-from-account');
                if (!exists) {
                    actions.push({
                        key: 'create-call-from-account',
                        labelKey: 'LBL_CREATE_ACTION_BUTTON',
                        modes: ['detail'],
                        acl: ['create'],
                        aclModule: 'Calls',
                    });
                }
            }
            return this.parseModeActions(actions, mode, ctx);
        }));
    }
    buildActionData(action, context) {
        return {
            store: this.store,
            action,
        };
    }
    /**
     * Build backend process input
     *
     * @param {Action} action Action
     * @param {string} actionName Action Name
     * @param {string} moduleName Module Name
     * @param {ActionContext|null} context Context
     * @returns {AsyncActionInput} Built backend process input
     */
    buildActionInput(action, actionName, moduleName, context = null) {
        const baseRecord = this.store.getBaseRecord();
        this.message.removeMessages();
        return {
            action: actionName,
            module: baseRecord.module,
            id: baseRecord.id,
            params: (action && action.params) || []
        };
    }
    getMode() {
        return this.store.getMode();
    }
    getModuleName(context) {
        return this.store.getModuleName();
    }
    reload(action, process, context) {
        this.store.load(false).pipe(take(1)).subscribe();
    }
    shouldDisplay(actionHandler, data) {
        const displayLogic = data?.action?.displayLogic ?? null;
        let toDisplay = true;
        if (displayLogic && Object.keys(displayLogic).length) {
            toDisplay = this.displayTypeLogic.runAll(displayLogic, data);
        }
        if (!toDisplay) {
            return false;
        }
        return actionHandler && actionHandler.shouldDisplay(data);
    }
    static ɵfac = function RecordActionsAdapter_Factory(t) { return new (t || RecordActionsAdapter)(i0.ɵɵinject(i1.RecordViewStore), i0.ɵɵinject(i2.MetadataStore), i0.ɵɵinject(i3.LanguageStore), i0.ɵɵinject(i4.RecordActionManager), i0.ɵɵinject(i5.AsyncActionService), i0.ɵɵinject(i6.MessageService), i0.ɵɵinject(i7.ConfirmationModalService), i0.ɵɵinject(i8.SelectModalService), i0.ɵɵinject(i9.RecordActionDisplayTypeLogic)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordActionsAdapter, factory: RecordActionsAdapter.ɵfac });
}
export { RecordActionsAdapter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordActionsAdapter, [{
        type: Injectable
    }], function () { return [{ type: i1.RecordViewStore }, { type: i2.MetadataStore }, { type: i3.LanguageStore }, { type: i4.RecordActionManager }, { type: i5.AsyncActionService }, { type: i6.MessageService }, { type: i7.ConfirmationModalService }, { type: i8.SelectModalService }, { type: i9.RecordActionDisplayTypeLogic }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3ZpZXdzL3JlY29yZC9hZGFwdGVycy9hY3Rpb25zLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBRSxpQkFBaUIsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQ0gsR0FBRyxFQUNILElBQUksR0FDUCxNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUF1QjNDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDOzs7Ozs7Ozs7OztBQUloRyxNQUNhLG9CQUFxQixTQUFRLHdCQUEwQztJQTBCbEU7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBaENkLGNBQWMsR0FBZ0I7UUFDMUIsTUFBTSxFQUFFO1lBQ0o7Z0JBQ0ksR0FBRyxFQUFFLGdCQUFnQjtnQkFDckIsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLE1BQU0sRUFBRTtvQkFDSixRQUFRLEVBQUUsSUFBSTtpQkFDakI7Z0JBQ0QsR0FBRyxFQUFFLEVBQUU7YUFDVjtTQUNKO1FBQ0QsSUFBSSxFQUFFO1lBQ0Y7Z0JBQ0ksR0FBRyxFQUFFLGdCQUFnQjtnQkFDckIsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLE1BQU0sRUFBRTtvQkFDSixRQUFRLEVBQUUsSUFBSTtpQkFDakI7Z0JBQ0QsR0FBRyxFQUFFLEVBQUU7YUFDVjtTQUNKO0tBQ0osQ0FBQztJQUVGLFlBQ2MsS0FBc0IsRUFDdEIsUUFBdUIsRUFDdkIsUUFBdUIsRUFDdkIsYUFBa0MsRUFDbEMsa0JBQXNDLEVBQ3RDLE9BQXVCLEVBQ3ZCLFlBQXNDLEVBQ3RDLGtCQUFzQyxFQUN0Qyxn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b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHsgY29tYmluZUxhdGVzdFdpdGgsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gICAgbWFwLFxuICAgIHRha2UsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gICAgQWN0aW9uLFxuICAgIEFjdGlvbkNvbnRleHQsXG4gICAgQWN0aW9uSGFuZGxlcixcbiAgICBMb2dpY0RlZmluaXRpb25zLFxuICAgIE1vZGVBY3Rpb25zLFxuICAgIFJlY29yZCxcbiAgICBWaWV3TW9kZSxcbiAgICBQYW5lbFxufSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHsgTWV0YWRhdGFTdG9yZSwgUmVjb3JkVmlld01ldGFkYXRhIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvbWV0YWRhdGEvbWV0YWRhdGEuc3RvcmUuc2VydmljZSc7XG5pbXBvcnQgeyBSZWNvcmRWaWV3U3RvcmUgfSBmcm9tICcuLi9zdG9yZS9yZWNvcmQtdmlldy9yZWNvcmQtdmlldy5zdG9yZSc7XG5pbXBvcnQgeyBSZWNvcmRBY3Rpb25NYW5hZ2VyIH0gZnJvbSAnLi4vYWN0aW9ucy9yZWNvcmQtYWN0aW9uLW1hbmFnZXIuc2VydmljZSc7XG5pbXBvcnQge1xuICAgIEFzeW5jQWN0aW9uSW5wdXQsXG4gICAgQXN5bmNBY3Rpb25TZXJ2aWNlLFxufSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9wcm9jZXNzL3Byb2Nlc3Nlcy9hc3luYy1hY3Rpb24vYXN5bmMtYWN0aW9uJztcbmltcG9ydCB7IFJlY29yZEFjdGlvbkRhdGEgfSBmcm9tICcuLi9hY3Rpb25zL3JlY29yZC5hY3Rpb24nO1xuaW1wb3J0IHsgTGFuZ3VhZ2VTdG9yZSwgTGFuZ3VhZ2VTdHJpbmdzIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9jZXNzIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvcHJvY2Vzcy9wcm9jZXNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29uZmlybWF0aW9uTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbW9kYWxzL2NvbmZpcm1hdGlvbi1tb2RhbC5zZXJ2aWNlJztcbmltcG9ydCB7IEJhc2VSZWNvcmRBY3Rpb25zQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2FjdGlvbnMvYmFzZS1yZWNvcmQtYWN0aW9uLmFkYXB0ZXInO1xuaW1wb3J0IHsgU2VsZWN0TW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbW9kYWxzL3NlbGVjdC1tb2RhbC5zZXJ2aWNlJztcbmltcG9ydCB7IFJlY29yZEFjdGlvbkRpc3BsYXlUeXBlTG9naWMgfSBmcm9tICcuLi9hY3Rpb24tbG9naWMvZGlzcGxheS10eXBlL2Rpc3BsYXktdHlwZS5sb2dpYyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZWNvcmRBY3Rpb25zQWRhcHRlciBleHRlbmRzIEJhc2VSZWNvcmRBY3Rpb25zQWRhcHRlcjxSZWNvcmRBY3Rpb25EYXRhPiB7XG5cbiAgICBkZWZhdWx0QWN0aW9uczogTW9kZUFjdGlvbnMgPSB7XG4gICAgICAgIGRldGFpbDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogJ3RvZ2dsZS13aWRnZXRzJyxcbiAgICAgICAgICAgICAgICBsYWJlbEtleTogJ0xCTF9JTlNJR0hUUycsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhY2w6IFtdXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBlZGl0OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiAndG9nZ2xlLXdpZGdldHMnLFxuICAgICAgICAgICAgICAgIGxhYmVsS2V5OiAnTEJMX0lOU0lHSFRTJyxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWQ6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGFjbDogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBzdG9yZTogUmVjb3JkVmlld1N0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbWV0YWRhdGE6IE1ldGFkYXRhU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBsYW5ndWFnZTogTGFuZ3VhZ2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGFjdGlvbk1hbmFnZXI6IFJlY29yZEFjdGlvbk1hbmFnZXIsXG4gICAgICAgIHByb3RlY3RlZCBhc3luY0FjdGlvblNlcnZpY2U6IEFzeW5jQWN0aW9uU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIG1lc3NhZ2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgY29uZmlybWF0aW9uOiBDb25maXJtYXRpb25Nb2RhbFNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBzZWxlY3RNb2RhbFNlcnZpY2U6IFNlbGVjdE1vZGFsU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGRpc3BsYXlUeXBlTG9naWM6IFJlY29yZEFjdGlvbkRpc3BsYXlUeXBlTG9naWMsXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgYWN0aW9uTWFuYWdlcixcbiAgICAgICAgICAgIGFzeW5jQWN0aW9uU2VydmljZSxcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICBjb25maXJtYXRpb24sXG4gICAgICAgICAgICBsYW5ndWFnZSxcbiAgICAgICAgICAgIHNlbGVjdE1vZGFsU2VydmljZSxcbiAgICAgICAgICAgIG1ldGFkYXRhXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0QWN0aW9ucyhjb250ZXh0PzogQWN0aW9uQ29udGV4dCk6IE9ic2VydmFibGU8QWN0aW9uW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWV0YWRhdGEucmVjb3JkVmlld01ldGFkYXRhJC5waXBlKFxuICAgICAgICAgICAgY29tYmluZUxhdGVzdFdpdGgodGhpcy5zdG9yZS5tb2RlJCwgdGhpcy5zdG9yZS5yZWNvcmQkLCB0aGlzLnN0b3JlLmxhbmd1YWdlJCwgdGhpcy5zdG9yZS53aWRnZXRzJCwgdGhpcy5zdG9yZS5wYW5lbHMkKSxcbiAgICAgICAgICAgIG1hcCgoW21ldGEsIG1vZGVdOiBbUmVjb3JkVmlld01ldGFkYXRhLCBWaWV3TW9kZSwgUmVjb3JkLCBMYW5ndWFnZVN0cmluZ3MsIGJvb2xlYW4sIFBhbmVsW11dKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFtb2RlIHx8ICFtZXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLnN0b3JlLmdldFZpZXdDb250ZXh0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9kdWxlTmFtZSA9IGN0eD8ubW9kdWxlID8/IHRoaXMuc3RvcmU/LmdldE1vZHVsZU5hbWU/LigpO1xuXG4gICAgICAgICAgICAgICAgLy8gRW5zdXJlIG91ciBjdXN0b20gYWN0aW9uIGlzIHByZXNlbnQgZm9yIEFjY291bnRzIGV2ZW4gaWYgbWV0YWRhdGEgY2FjaGUgbWlzc2VkIGl0XG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aW9uczogQWN0aW9uW10gPSBbLi4uKG1ldGEuYWN0aW9ucyB8fCBbXSldO1xuICAgICAgICAgICAgICAgIGlmIChtb2R1bGVOYW1lICYmIG1vZHVsZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2FjY291bnRzJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBleGlzdHMgPSBhY3Rpb25zLnNvbWUoYWN0aW9uID0+IGFjdGlvbj8ua2V5ID09PSAnY3JlYXRlLWNhbGwtZnJvbS1hY2NvdW50Jyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2NyZWF0ZS1jYWxsLWZyb20tYWNjb3VudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxLZXk6ICdMQkxfQ1JFQVRFX0FDVElPTl9CVVRUT04nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVzOiBbJ2RldGFpbCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjbDogWydjcmVhdGUnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2xNb2R1bGU6ICdDYWxscycsXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGFzIEFjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZU1vZGVBY3Rpb25zKGFjdGlvbnMsIG1vZGUsIGN0eCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBidWlsZEFjdGlvbkRhdGEoYWN0aW9uOiBBY3Rpb24sIGNvbnRleHQ/OiBBY3Rpb25Db250ZXh0KTogUmVjb3JkQWN0aW9uRGF0YSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdG9yZTogdGhpcy5zdG9yZSxcbiAgICAgICAgICAgIGFjdGlvbixcbiAgICAgICAgfSBhcyBSZWNvcmRBY3Rpb25EYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIGJhY2tlbmQgcHJvY2VzcyBpbnB1dFxuICAgICAqXG4gICAgICogQHBhcmFtIHtBY3Rpb259IGFjdGlvbiBBY3Rpb25cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uTmFtZSBBY3Rpb24gTmFtZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2R1bGVOYW1lIE1vZHVsZSBOYW1lXG4gICAgICogQHBhcmFtIHtBY3Rpb25Db250ZXh0fG51bGx9IGNvbnRleHQgQ29udGV4dFxuICAgICAqIEByZXR1cm5zIHtBc3luY0FjdGlvbklucHV0fSBCdWlsdCBiYWNrZW5kIHByb2Nlc3MgaW5wdXRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYnVpbGRBY3Rpb25JbnB1dChhY3Rpb246IEFjdGlvbiwgYWN0aW9uTmFtZTogc3RyaW5nLCBtb2R1bGVOYW1lOiBzdHJpbmcsIGNvbnRleHQ6IEFjdGlvbkNvbnRleHQgPSBudWxsKTogQXN5bmNBY3Rpb25JbnB1dCB7XG4gICAgICAgIGNvbnN0IGJhc2VSZWNvcmQgPSB0aGlzLnN0b3JlLmdldEJhc2VSZWNvcmQoKTtcblxuICAgICAgICB0aGlzLm1lc3NhZ2UucmVtb3ZlTWVzc2FnZXMoKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb25OYW1lLFxuICAgICAgICAgICAgbW9kdWxlOiBiYXNlUmVjb3JkLm1vZHVsZSxcbiAgICAgICAgICAgIGlkOiBiYXNlUmVjb3JkLmlkLFxuICAgICAgICAgICAgcGFyYW1zOiAoYWN0aW9uICYmIGFjdGlvbi5wYXJhbXMpIHx8IFtdXG4gICAgICAgIH0gYXMgQXN5bmNBY3Rpb25JbnB1dDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0TW9kZSgpOiBWaWV3TW9kZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlLmdldE1vZGUoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0TW9kdWxlTmFtZShjb250ZXh0PzogQWN0aW9uQ29udGV4dCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlLmdldE1vZHVsZU5hbWUoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVsb2FkKGFjdGlvbjogQWN0aW9uLCBwcm9jZXNzOiBQcm9jZXNzLCBjb250ZXh0PzogQWN0aW9uQ29udGV4dCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0b3JlLmxvYWQoZmFsc2UpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNob3VsZERpc3BsYXkoYWN0aW9uSGFuZGxlcjogQWN0aW9uSGFuZGxlcjxSZWNvcmRBY3Rpb25EYXRhPiwgZGF0YTogUmVjb3JkQWN0aW9uRGF0YSk6IGJvb2xlYW4ge1xuXG4gICAgICAgIGNvbnN0IGRpc3BsYXlMb2dpYzogTG9naWNEZWZpbml0aW9ucyB8IG51bGwgPSBkYXRhPy5hY3Rpb24/LmRpc3BsYXlMb2dpYyA/PyBudWxsO1xuICAgICAgICBsZXQgdG9EaXNwbGF5ID0gdHJ1ZTtcblxuICAgICAgICBpZiAoZGlzcGxheUxvZ2ljICYmIE9iamVjdC5rZXlzKGRpc3BsYXlMb2dpYykubGVuZ3RoKSB7XG4gICAgICAgICAgICB0b0Rpc3BsYXkgPSB0aGlzLmRpc3BsYXlUeXBlTG9naWMucnVuQWxsKGRpc3BsYXlMb2dpYywgZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRvRGlzcGxheSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjdGlvbkhhbmRsZXIgJiYgYWN0aW9uSGFuZGxlci5zaG91bGREaXNwbGF5KGRhdGEpO1xuICAgIH1cbn1cbiJdfQ==