/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2023 SalesAgility Ltd.
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
import { isTrue } from 'common';
import { combineLatestWith, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseRecordActionsAdapter } from '../../../services/actions/base-record-action.adapter';
import * as i0 from "@angular/core";
import * as i1 from "../store/record-thread/record-thread.store";
import * as i2 from "../../../store/language/language.store";
import * as i3 from "../actions/list-actions/record-thread-list-action-manager.service";
import * as i4 from "../../../services/process/processes/async-action/async-action";
import * as i5 from "../../../services/message/message.service";
import * as i6 from "../../../services/modals/confirmation-modal.service";
import * as i7 from "../../../services/modals/select-modal.service";
import * as i8 from "../../../store/metadata/metadata.store.service";
class RecordThreadListActionsAdapter extends BaseRecordActionsAdapter {
    threadStore;
    language;
    actionManager;
    asyncActionService;
    message;
    confirmation;
    selectModalService;
    metadata;
    defaultActions = {
        detail: [],
        edit: [],
        create: [],
        list: []
    };
    collapseButtons = false;
    constructor(threadStore, language, actionManager, asyncActionService, message, confirmation, selectModalService, metadata) {
        super(actionManager, asyncActionService, message, confirmation, language, selectModalService, metadata);
        this.threadStore = threadStore;
        this.language = language;
        this.actionManager = actionManager;
        this.asyncActionService = asyncActionService;
        this.message = message;
        this.confirmation = confirmation;
        this.selectModalService = selectModalService;
        this.metadata = metadata;
    }
    getActions(context) {
        return of(this.threadStore.getListMetadata()).pipe(combineLatestWith(of('list')), map(([meta, mode]) => {
            if (!mode || !meta) {
                return [];
            }
            return this.parseModeActions(meta.actions, mode, this.threadStore.getViewContext());
        }));
    }
    /**
     * Get action name
     * @param action
     */
    getActionName(action) {
        return `record-thread-list-${action.key}`;
    }
    buildActionData(action, context) {
        return {
            threadStore: this.threadStore,
            action: action
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
        this.message.removeMessages();
        return {
            action: actionName,
            module: this.threadStore.module,
            ids: this.threadStore.getRecordIds(),
            params: (action && action.params) || []
        };
    }
    getMode() {
        return 'list';
    }
    getModuleName(context) {
        return this.threadStore.module;
    }
    reload(action, process, context) {
        const reloadThread = process?.data?.reloadThread ?? false;
        if (isTrue(reloadThread)) {
            this.threadStore.reload();
        }
    }
    /**
     * @inheritDoc
     */
    shouldReload(process) {
        const reloadThread = process?.data?.reloadThread ?? false;
        return isTrue(reloadThread);
    }
    static ɵfac = function RecordThreadListActionsAdapter_Factory(t) { return new (t || RecordThreadListActionsAdapter)(i0.ɵɵinject(i1.RecordThreadStore), i0.ɵɵinject(i2.LanguageStore), i0.ɵɵinject(i3.RecordThreadListActionManager), i0.ɵɵinject(i4.AsyncActionService), i0.ɵɵinject(i5.MessageService), i0.ɵɵinject(i6.ConfirmationModalService), i0.ɵɵinject(i7.SelectModalService), i0.ɵɵinject(i8.MetadataStore)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordThreadListActionsAdapter, factory: RecordThreadListActionsAdapter.ɵfac });
}
export { RecordThreadListActionsAdapter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordThreadListActionsAdapter, [{
        type: Injectable
    }], function () { return [{ type: i1.RecordThreadStore }, { type: i2.LanguageStore }, { type: i3.RecordThreadListActionManager }, { type: i4.AsyncActionService }, { type: i5.MessageService }, { type: i6.ConfirmationModalService }, { type: i7.SelectModalService }, { type: i8.MetadataStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLXRocmVhZC1saXN0LWFjdGlvbnMuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb250YWluZXJzL3JlY29yZC10aHJlYWQvYWRhcHRlcnMvcmVjb3JkLXRocmVhZC1saXN0LWFjdGlvbnMuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQXdCLE1BQU0sRUFBd0IsTUFBTSxRQUFRLENBQUM7QUFDNUUsT0FBTyxFQUFDLGlCQUFpQixFQUFjLEVBQUUsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUN2RCxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFNbkMsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sc0RBQXNELENBQUM7Ozs7Ozs7Ozs7QUFROUYsTUFDYSw4QkFBK0IsU0FBUSx3QkFBb0Q7SUFXdEY7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQWhCZCxjQUFjLEdBQWdCO1FBQzFCLE1BQU0sRUFBRSxFQUFFO1FBQ1YsSUFBSSxFQUFFLEVBQUU7UUFDUixNQUFNLEVBQUUsRUFBRTtRQUNWLElBQUksRUFBRSxFQUFFO0tBQ1gsQ0FBQztJQUNGLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFFeEIsWUFDYyxXQUE4QixFQUM5QixRQUF1QixFQUN2QixhQUE0QyxFQUM1QyxrQkFBc0MsRUFDdEMsT0FBdUIsRUFDdkIsWUFBc0MsRUFDdEMsa0JBQXNDLEVBQ3RDLFFBQXVCO1FBRWpDLEtBQUssQ0FDRCxhQUFhLEVBQ2Isa0JBQWtCLEVBQ2xCLE9BQU8sRUFDUCxZQUFZLEVBQ1osUUFBUSxFQUNSLGtCQUFrQixFQUNsQixRQUFRLENBQ1gsQ0FBQztRQWpCUSxnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7UUFDOUIsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQUN2QixrQkFBYSxHQUFiLGFBQWEsQ0FBK0I7UUFDNUMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixpQkFBWSxHQUFaLFlBQVksQ0FBMEI7UUFDdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxhQUFRLEdBQVIsUUFBUSxDQUFlO0lBV3JDLENBQUM7SUFFRCxVQUFVLENBQUMsT0FBdUI7UUFDOUIsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDOUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLE1BQWtCLENBQUMsQ0FBQyxFQUN6QyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQXVDLEVBQUUsRUFBRTtZQUV2RCxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNoQixPQUFPLEVBQUUsQ0FBQzthQUNiO1lBQ0QsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1FBQ3hGLENBQUMsQ0FBQyxDQUNMLENBQUM7SUFDTixDQUFDO0lBRUQ7OztPQUdHO0lBQ08sYUFBYSxDQUFDLE1BQWM7UUFDbEMsT0FBTyxzQkFBc0IsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzlDLENBQUM7SUFFUyxlQUFlLENBQUMsTUFBYyxFQUFFLE9BQXVCO1FBQzdELE9BQU87WUFDSCxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsTUFBTSxFQUFFLE1BQU07U0FDYSxDQUFDO0lBQ3BDLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ08sZ0JBQWdCLENBQUMsTUFBYyxFQUFFLFVBQWtCLEVBQUUsVUFBa0IsRUFBRSxVQUF5QixJQUFJO1FBRTVHLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFOUIsT0FBTztZQUNILE1BQU0sRUFBRSxVQUFVO1lBQ2xCLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU07WUFDL0IsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFO1lBQ3BDLE1BQU0sRUFBRSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtTQUN0QixDQUFDO0lBQzFCLENBQUM7SUFFUyxPQUFPO1FBQ2IsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVTLGFBQWEsQ0FBQyxPQUF1QjtRQUMzQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO0lBQ25DLENBQUM7SUFFUyxNQUFNLENBQUMsTUFBYyxFQUFFLE9BQWdCLEVBQUUsT0FBdUI7UUFFdEUsTUFBTSxZQUFZLEdBQUcsT0FBTyxFQUFFLElBQUksRUFBRSxZQUFZLElBQUksS0FBSyxDQUFDO1FBRTFELElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDN0I7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDTyxZQUFZLENBQUMsT0FBZ0I7UUFDbkMsTUFBTSxZQUFZLEdBQUcsT0FBTyxFQUFFLElBQUksRUFBRSxZQUFZLElBQUksS0FBSyxDQUFDO1FBQzFELE9BQU8sTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7d0ZBdEdRLDhCQUE4QjtnRUFBOUIsOEJBQThCLFdBQTlCLDhCQUE4Qjs7U0FBOUIsOEJBQThCO3VGQUE5Qiw4QkFBOEI7Y0FEMUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIzIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWN0aW9uLCBBY3Rpb25Db250ZXh0LCBpc1RydWUsIE1vZGVBY3Rpb25zLCBWaWV3TW9kZX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7Y29tYmluZUxhdGVzdFdpdGgsIE9ic2VydmFibGUsIG9mfSBmcm9tICdyeGpzJztcbmltcG9ydCB7bWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0FzeW5jQWN0aW9uSW5wdXQsIEFzeW5jQWN0aW9uU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvcHJvY2Vzcy9wcm9jZXNzZXMvYXN5bmMtYWN0aW9uL2FzeW5jLWFjdGlvbic7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL21lc3NhZ2UvbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7UHJvY2Vzc30gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvcHJvY2Vzcy9wcm9jZXNzLnNlcnZpY2UnO1xuaW1wb3J0IHtDb25maXJtYXRpb25Nb2RhbFNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL21vZGFscy9jb25maXJtYXRpb24tbW9kYWwuc2VydmljZSc7XG5pbXBvcnQge0Jhc2VSZWNvcmRBY3Rpb25zQWRhcHRlcn0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYWN0aW9ucy9iYXNlLXJlY29yZC1hY3Rpb24uYWRhcHRlcic7XG5pbXBvcnQge1NlbGVjdE1vZGFsU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbW9kYWxzL3NlbGVjdC1tb2RhbC5zZXJ2aWNlJztcbmltcG9ydCB7UmVjb3JkVGhyZWFkU3RvcmV9IGZyb20gJy4uL3N0b3JlL3JlY29yZC10aHJlYWQvcmVjb3JkLXRocmVhZC5zdG9yZSc7XG5pbXBvcnQge01ldGFkYXRhU3RvcmV9IGZyb20gJy4uLy4uLy4uL3N0b3JlL21ldGFkYXRhL21ldGFkYXRhLnN0b3JlLnNlcnZpY2UnO1xuaW1wb3J0IHtSZWNvcmRUaHJlYWRMaXN0QWN0aW9uRGF0YX0gZnJvbSBcIi4uL2FjdGlvbnMvbGlzdC1hY3Rpb25zL3JlY29yZC10aHJlYWQtbGlzdC5hY3Rpb25cIjtcbmltcG9ydCB7UmVjb3JkVGhyZWFkTGlzdEFjdGlvbk1hbmFnZXJ9IGZyb20gXCIuLi9hY3Rpb25zL2xpc3QtYWN0aW9ucy9yZWNvcmQtdGhyZWFkLWxpc3QtYWN0aW9uLW1hbmFnZXIuc2VydmljZVwiO1xuaW1wb3J0IHtSZWNvcmRUaHJlYWRMaXN0TWV0YWRhdGF9IGZyb20gJy4uL3N0b3JlL3JlY29yZC10aHJlYWQvcmVjb3JkLXRocmVhZC1saXN0LnN0b3JlLm1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlY29yZFRocmVhZExpc3RBY3Rpb25zQWRhcHRlciBleHRlbmRzIEJhc2VSZWNvcmRBY3Rpb25zQWRhcHRlcjxSZWNvcmRUaHJlYWRMaXN0QWN0aW9uRGF0YT4ge1xuXG4gICAgZGVmYXVsdEFjdGlvbnM6IE1vZGVBY3Rpb25zID0ge1xuICAgICAgICBkZXRhaWw6IFtdLFxuICAgICAgICBlZGl0OiBbXSxcbiAgICAgICAgY3JlYXRlOiBbXSxcbiAgICAgICAgbGlzdDogW11cbiAgICB9O1xuICAgIGNvbGxhcHNlQnV0dG9ucyA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCB0aHJlYWRTdG9yZTogUmVjb3JkVGhyZWFkU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBsYW5ndWFnZTogTGFuZ3VhZ2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGFjdGlvbk1hbmFnZXI6IFJlY29yZFRocmVhZExpc3RBY3Rpb25NYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgYXN5bmNBY3Rpb25TZXJ2aWNlOiBBc3luY0FjdGlvblNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBtZXNzYWdlOiBNZXNzYWdlU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGNvbmZpcm1hdGlvbjogQ29uZmlybWF0aW9uTW9kYWxTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgc2VsZWN0TW9kYWxTZXJ2aWNlOiBTZWxlY3RNb2RhbFNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBtZXRhZGF0YTogTWV0YWRhdGFTdG9yZSxcbiAgICApIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBhY3Rpb25NYW5hZ2VyLFxuICAgICAgICAgICAgYXN5bmNBY3Rpb25TZXJ2aWNlLFxuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgIGNvbmZpcm1hdGlvbixcbiAgICAgICAgICAgIGxhbmd1YWdlLFxuICAgICAgICAgICAgc2VsZWN0TW9kYWxTZXJ2aWNlLFxuICAgICAgICAgICAgbWV0YWRhdGFcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXRBY3Rpb25zKGNvbnRleHQ/OiBBY3Rpb25Db250ZXh0KTogT2JzZXJ2YWJsZTxBY3Rpb25bXT4ge1xuICAgICAgICByZXR1cm4gb2YodGhpcy50aHJlYWRTdG9yZS5nZXRMaXN0TWV0YWRhdGEoKSkucGlwZShcbiAgICAgICAgICAgIGNvbWJpbmVMYXRlc3RXaXRoKG9mKCdsaXN0JyBhcyBWaWV3TW9kZSkpLFxuICAgICAgICAgICAgbWFwKChbbWV0YSwgbW9kZV06IFtSZWNvcmRUaHJlYWRMaXN0TWV0YWRhdGEsIFZpZXdNb2RlXSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKCFtb2RlIHx8ICFtZXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VNb2RlQWN0aW9ucyhtZXRhLmFjdGlvbnMsIG1vZGUsIHRoaXMudGhyZWFkU3RvcmUuZ2V0Vmlld0NvbnRleHQoKSk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYWN0aW9uIG5hbWVcbiAgICAgKiBAcGFyYW0gYWN0aW9uXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldEFjdGlvbk5hbWUoYWN0aW9uOiBBY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIGByZWNvcmQtdGhyZWFkLWxpc3QtJHthY3Rpb24ua2V5fWA7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGJ1aWxkQWN0aW9uRGF0YShhY3Rpb246IEFjdGlvbiwgY29udGV4dD86IEFjdGlvbkNvbnRleHQpOiBSZWNvcmRUaHJlYWRMaXN0QWN0aW9uRGF0YSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0aHJlYWRTdG9yZTogdGhpcy50aHJlYWRTdG9yZSxcbiAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uXG4gICAgICAgIH0gYXMgUmVjb3JkVGhyZWFkTGlzdEFjdGlvbkRhdGE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgYmFja2VuZCBwcm9jZXNzIGlucHV0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gYWN0aW9uXG4gICAgICogQHBhcmFtIGFjdGlvbk5hbWVcbiAgICAgKiBAcGFyYW0gbW9kdWxlTmFtZVxuICAgICAqIEBwYXJhbSBjb250ZXh0XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGJ1aWxkQWN0aW9uSW5wdXQoYWN0aW9uOiBBY3Rpb24sIGFjdGlvbk5hbWU6IHN0cmluZywgbW9kdWxlTmFtZTogc3RyaW5nLCBjb250ZXh0OiBBY3Rpb25Db250ZXh0ID0gbnVsbCk6IEFzeW5jQWN0aW9uSW5wdXQge1xuXG4gICAgICAgIHRoaXMubWVzc2FnZS5yZW1vdmVNZXNzYWdlcygpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvbk5hbWUsXG4gICAgICAgICAgICBtb2R1bGU6IHRoaXMudGhyZWFkU3RvcmUubW9kdWxlLFxuICAgICAgICAgICAgaWRzOiB0aGlzLnRocmVhZFN0b3JlLmdldFJlY29yZElkcygpLFxuICAgICAgICAgICAgcGFyYW1zOiAoYWN0aW9uICYmIGFjdGlvbi5wYXJhbXMpIHx8IFtdXG4gICAgICAgIH0gYXMgQXN5bmNBY3Rpb25JbnB1dDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0TW9kZSgpOiBWaWV3TW9kZSB7XG4gICAgICAgIHJldHVybiAnbGlzdCc7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldE1vZHVsZU5hbWUoY29udGV4dD86IEFjdGlvbkNvbnRleHQpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy50aHJlYWRTdG9yZS5tb2R1bGU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlbG9hZChhY3Rpb246IEFjdGlvbiwgcHJvY2VzczogUHJvY2VzcywgY29udGV4dD86IEFjdGlvbkNvbnRleHQpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCByZWxvYWRUaHJlYWQgPSBwcm9jZXNzPy5kYXRhPy5yZWxvYWRUaHJlYWQgPz8gZmFsc2U7XG5cbiAgICAgICAgaWYgKGlzVHJ1ZShyZWxvYWRUaHJlYWQpKSB7XG4gICAgICAgICAgICB0aGlzLnRocmVhZFN0b3JlLnJlbG9hZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgc2hvdWxkUmVsb2FkKHByb2Nlc3M6IFByb2Nlc3MpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgcmVsb2FkVGhyZWFkID0gcHJvY2Vzcz8uZGF0YT8ucmVsb2FkVGhyZWFkID8/IGZhbHNlO1xuICAgICAgICByZXR1cm4gaXNUcnVlKHJlbG9hZFRocmVhZCk7XG4gICAgfVxufVxuIl19