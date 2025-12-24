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
import { isTrue } from 'common';
import { combineLatestWith } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { BaseRecordActionsAdapter } from '../../../services/actions/base-record-action.adapter';
import * as i0 from "@angular/core";
import * as i1 from "../store/record-thread/record-thread-item.store";
import * as i2 from "../store/record-thread/record-thread.store";
import * as i3 from "../../../store/language/language.store";
import * as i4 from "../actions/item-actions/record-thread-item-action-manager.service";
import * as i5 from "../../../services/process/processes/async-action/async-action";
import * as i6 from "../../../services/message/message.service";
import * as i7 from "../../../services/modals/confirmation-modal.service";
import * as i8 from "../../../services/modals/select-modal.service";
import * as i9 from "../../../store/metadata/metadata.store.service";
class RecordThreadItemActionsAdapter extends BaseRecordActionsAdapter {
    itemStore;
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
    };
    collapseButtons = false;
    constructor(itemStore, threadStore, language, actionManager, asyncActionService, message, confirmation, selectModalService, metadata) {
        super(actionManager, asyncActionService, message, confirmation, language, selectModalService, metadata);
        this.itemStore = itemStore;
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
        return this.itemStore.meta$.pipe(combineLatestWith(this.itemStore.mode$), map(([meta, mode]) => {
            if (!mode || !meta) {
                return [];
            }
            return this.parseModeActions(meta.actions, mode, this.itemStore.getViewContext());
        }));
    }
    /**
     * Get action name
     * @param action
     */
    getActionName(action) {
        return `record-thread-item-${action.key}`;
    }
    buildActionData(action, context) {
        return {
            itemStore: this.itemStore,
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
        const baseRecord = this.itemStore.getBaseRecord();
        this.message.removeMessages();
        return {
            action: actionName,
            module: baseRecord.module,
            id: baseRecord.id,
            params: (action && action.params) || []
        };
    }
    getMode() {
        return this.itemStore.getMode();
    }
    getModuleName(context) {
        return this.itemStore.getModuleName();
    }
    reload(action, process, context) {
        const reload = process?.data?.reload ?? false;
        const reloadThread = process?.data?.reloadThread ?? false;
        if (isTrue(reload)) {
            this.itemStore.load(false).pipe(take(1)).subscribe();
        }
        if (isTrue(reloadThread)) {
            this.threadStore.reload();
        }
    }
    /**
     * @inheritDoc
     */
    shouldReload(process) {
        const reload = process?.data?.reload ?? false;
        const reloadThread = process?.data?.reloadThread ?? false;
        return isTrue(reload) || isTrue(reloadThread);
    }
    static ɵfac = function RecordThreadItemActionsAdapter_Factory(t) { return new (t || RecordThreadItemActionsAdapter)(i0.ɵɵinject(i1.RecordThreadItemStore), i0.ɵɵinject(i2.RecordThreadStore), i0.ɵɵinject(i3.LanguageStore), i0.ɵɵinject(i4.RecordThreadItemActionManager), i0.ɵɵinject(i5.AsyncActionService), i0.ɵɵinject(i6.MessageService), i0.ɵɵinject(i7.ConfirmationModalService), i0.ɵɵinject(i8.SelectModalService), i0.ɵɵinject(i9.MetadataStore)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordThreadItemActionsAdapter, factory: RecordThreadItemActionsAdapter.ɵfac });
}
export { RecordThreadItemActionsAdapter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordThreadItemActionsAdapter, [{
        type: Injectable
    }], function () { return [{ type: i1.RecordThreadItemStore }, { type: i2.RecordThreadStore }, { type: i3.LanguageStore }, { type: i4.RecordThreadItemActionManager }, { type: i5.AsyncActionService }, { type: i6.MessageService }, { type: i7.ConfirmationModalService }, { type: i8.SelectModalService }, { type: i9.MetadataStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLXRocmVhZC1pdGVtLWFjdGlvbnMuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb250YWluZXJzL3JlY29yZC10aHJlYWQvYWRhcHRlcnMvcmVjb3JkLXRocmVhZC1pdGVtLWFjdGlvbnMuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQXdCLE1BQU0sRUFBd0IsTUFBTSxRQUFRLENBQUM7QUFDNUUsT0FBTyxFQUFDLGlCQUFpQixFQUFhLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFNekMsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sc0RBQXNELENBQUM7Ozs7Ozs7Ozs7O0FBUTlGLE1BQ2EsOEJBQStCLFNBQVEsd0JBQW9EO0lBVXRGO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQWhCZCxjQUFjLEdBQWdCO1FBQzFCLE1BQU0sRUFBRSxFQUFFO1FBQ1YsSUFBSSxFQUFFLEVBQUU7UUFDUixNQUFNLEVBQUUsRUFBRTtLQUNiLENBQUM7SUFDRixlQUFlLEdBQUcsS0FBSyxDQUFDO0lBRXhCLFlBQ2MsU0FBZ0MsRUFDaEMsV0FBOEIsRUFDOUIsUUFBdUIsRUFDdkIsYUFBNEMsRUFDNUMsa0JBQXNDLEVBQ3RDLE9BQXVCLEVBQ3ZCLFlBQXNDLEVBQ3RDLGtCQUFzQyxFQUN0QyxRQUF1QjtRQUVqQyxLQUFLLENBQ0QsYUFBYSxFQUNiLGtCQUFrQixFQUNsQixPQUFPLEVBQ1AsWUFBWSxFQUNaLFFBQVEsRUFDUixrQkFBa0IsRUFDbEIsUUFBUSxDQUNYLENBQUM7UUFsQlEsY0FBUyxHQUFULFNBQVMsQ0FBdUI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO1FBQzlCLGFBQVEsR0FBUixRQUFRLENBQWU7UUFDdkIsa0JBQWEsR0FBYixhQUFhLENBQStCO1FBQzVDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsaUJBQVksR0FBWixZQUFZLENBQTBCO1FBQ3RDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsYUFBUSxHQUFSLFFBQVEsQ0FBZTtJQVdyQyxDQUFDO0lBRUQsVUFBVSxDQUFDLE9BQXVCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUM1QixpQkFBaUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUN2QyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQWlCLEVBQUUsRUFBRTtZQUVqQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNoQixPQUFPLEVBQUUsQ0FBQzthQUNiO1lBRUQsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1FBQ3RGLENBQUMsQ0FBQyxDQUNMLENBQUM7SUFDTixDQUFDO0lBRUQ7OztPQUdHO0lBQ08sYUFBYSxDQUFDLE1BQWM7UUFDbEMsT0FBTyxzQkFBc0IsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzlDLENBQUM7SUFFUyxlQUFlLENBQUMsTUFBYyxFQUFFLE9BQXVCO1FBQzdELE9BQU87WUFDSCxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLE1BQU0sRUFBRSxNQUFNO1NBQ2EsQ0FBQztJQUNwQyxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNPLGdCQUFnQixDQUFDLE1BQWMsRUFBRSxVQUFrQixFQUFFLFVBQWtCLEVBQUUsVUFBeUIsSUFBSTtRQUM1RyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRWxELElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFOUIsT0FBTztZQUNILE1BQU0sRUFBRSxVQUFVO1lBQ2xCLE1BQU0sRUFBRSxVQUFVLENBQUMsTUFBTTtZQUN6QixFQUFFLEVBQUUsVUFBVSxDQUFDLEVBQUU7WUFDakIsTUFBTSxFQUFFLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO1NBQ3RCLENBQUM7SUFDMUIsQ0FBQztJQUVTLE9BQU87UUFDYixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVTLGFBQWEsQ0FBQyxPQUF1QjtRQUMzQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVTLE1BQU0sQ0FBQyxNQUFjLEVBQUUsT0FBZ0IsRUFBRSxPQUF1QjtRQUN0RSxNQUFNLE1BQU0sR0FBRyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sSUFBSSxLQUFLLENBQUM7UUFDOUMsTUFBTSxZQUFZLEdBQUcsT0FBTyxFQUFFLElBQUksRUFBRSxZQUFZLElBQUksS0FBSyxDQUFDO1FBRTFELElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUN4RDtRQUVELElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDN0I7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDTyxZQUFZLENBQUMsT0FBZ0I7UUFDbkMsTUFBTSxNQUFNLEdBQUcsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLElBQUksS0FBSyxDQUFDO1FBQzlDLE1BQU0sWUFBWSxHQUFHLE9BQU8sRUFBRSxJQUFJLEVBQUUsWUFBWSxJQUFJLEtBQUssQ0FBQztRQUMxRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEQsQ0FBQzt3RkE5R1EsOEJBQThCO2dFQUE5Qiw4QkFBOEIsV0FBOUIsOEJBQThCOztTQUE5Qiw4QkFBOEI7dUZBQTlCLDhCQUE4QjtjQUQxQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3Rpb24sIEFjdGlvbkNvbnRleHQsIGlzVHJ1ZSwgTW9kZUFjdGlvbnMsIFZpZXdNb2RlfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtjb21iaW5lTGF0ZXN0V2l0aCwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcCwgdGFrZX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtBc3luY0FjdGlvbklucHV0LCBBc3luY0FjdGlvblNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3Byb2Nlc3MvcHJvY2Vzc2VzL2FzeW5jLWFjdGlvbi9hc3luYy1hY3Rpb24nO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQge1Byb2Nlc3N9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3Byb2Nlc3MvcHJvY2Vzcy5zZXJ2aWNlJztcbmltcG9ydCB7Q29uZmlybWF0aW9uTW9kYWxTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9tb2RhbHMvY29uZmlybWF0aW9uLW1vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHtCYXNlUmVjb3JkQWN0aW9uc0FkYXB0ZXJ9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2FjdGlvbnMvYmFzZS1yZWNvcmQtYWN0aW9uLmFkYXB0ZXInO1xuaW1wb3J0IHtTZWxlY3RNb2RhbFNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL21vZGFscy9zZWxlY3QtbW9kYWwuc2VydmljZSc7XG5pbXBvcnQge1JlY29yZFRocmVhZEl0ZW1BY3Rpb25EYXRhfSBmcm9tICcuLi9hY3Rpb25zL2l0ZW0tYWN0aW9ucy9yZWNvcmQtdGhyZWFkLWl0ZW0uYWN0aW9uJztcbmltcG9ydCB7UmVjb3JkVGhyZWFkSXRlbUFjdGlvbk1hbmFnZXJ9IGZyb20gJy4uL2FjdGlvbnMvaXRlbS1hY3Rpb25zL3JlY29yZC10aHJlYWQtaXRlbS1hY3Rpb24tbWFuYWdlci5zZXJ2aWNlJztcbmltcG9ydCB7UmVjb3JkVGhyZWFkSXRlbVN0b3JlfSBmcm9tICcuLi9zdG9yZS9yZWNvcmQtdGhyZWFkL3JlY29yZC10aHJlYWQtaXRlbS5zdG9yZSc7XG5pbXBvcnQge1JlY29yZFRocmVhZFN0b3JlfSBmcm9tICcuLi9zdG9yZS9yZWNvcmQtdGhyZWFkL3JlY29yZC10aHJlYWQuc3RvcmUnO1xuaW1wb3J0IHtNZXRhZGF0YVN0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9tZXRhZGF0YS9tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlY29yZFRocmVhZEl0ZW1BY3Rpb25zQWRhcHRlciBleHRlbmRzIEJhc2VSZWNvcmRBY3Rpb25zQWRhcHRlcjxSZWNvcmRUaHJlYWRJdGVtQWN0aW9uRGF0YT4ge1xuXG4gICAgZGVmYXVsdEFjdGlvbnM6IE1vZGVBY3Rpb25zID0ge1xuICAgICAgICBkZXRhaWw6IFtdLFxuICAgICAgICBlZGl0OiBbXSxcbiAgICAgICAgY3JlYXRlOiBbXSxcbiAgICB9O1xuICAgIGNvbGxhcHNlQnV0dG9ucyA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBpdGVtU3RvcmU6IFJlY29yZFRocmVhZEl0ZW1TdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHRocmVhZFN0b3JlOiBSZWNvcmRUaHJlYWRTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgYWN0aW9uTWFuYWdlcjogUmVjb3JkVGhyZWFkSXRlbUFjdGlvbk1hbmFnZXIsXG4gICAgICAgIHByb3RlY3RlZCBhc3luY0FjdGlvblNlcnZpY2U6IEFzeW5jQWN0aW9uU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIG1lc3NhZ2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgY29uZmlybWF0aW9uOiBDb25maXJtYXRpb25Nb2RhbFNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBzZWxlY3RNb2RhbFNlcnZpY2U6IFNlbGVjdE1vZGFsU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIG1ldGFkYXRhOiBNZXRhZGF0YVN0b3JlXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgYWN0aW9uTWFuYWdlcixcbiAgICAgICAgICAgIGFzeW5jQWN0aW9uU2VydmljZSxcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICBjb25maXJtYXRpb24sXG4gICAgICAgICAgICBsYW5ndWFnZSxcbiAgICAgICAgICAgIHNlbGVjdE1vZGFsU2VydmljZSxcbiAgICAgICAgICAgIG1ldGFkYXRhXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0QWN0aW9ucyhjb250ZXh0PzogQWN0aW9uQ29udGV4dCk6IE9ic2VydmFibGU8QWN0aW9uW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbVN0b3JlLm1ldGEkLnBpcGUoXG4gICAgICAgICAgICBjb21iaW5lTGF0ZXN0V2l0aCh0aGlzLml0ZW1TdG9yZS5tb2RlJCksXG4gICAgICAgICAgICBtYXAoKFttZXRhLCBtb2RlXTogW2FueSxWaWV3TW9kZV0pID0+IHtcblxuICAgICAgICAgICAgICAgIGlmICghbW9kZSB8fCAhbWV0YSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VNb2RlQWN0aW9ucyhtZXRhLmFjdGlvbnMsIG1vZGUsIHRoaXMuaXRlbVN0b3JlLmdldFZpZXdDb250ZXh0KCkpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYWN0aW9uIG5hbWVcbiAgICAgKiBAcGFyYW0gYWN0aW9uXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldEFjdGlvbk5hbWUoYWN0aW9uOiBBY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIGByZWNvcmQtdGhyZWFkLWl0ZW0tJHthY3Rpb24ua2V5fWA7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGJ1aWxkQWN0aW9uRGF0YShhY3Rpb246IEFjdGlvbiwgY29udGV4dD86IEFjdGlvbkNvbnRleHQpOiBSZWNvcmRUaHJlYWRJdGVtQWN0aW9uRGF0YSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpdGVtU3RvcmU6IHRoaXMuaXRlbVN0b3JlLFxuICAgICAgICAgICAgdGhyZWFkU3RvcmU6IHRoaXMudGhyZWFkU3RvcmUsXG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvblxuICAgICAgICB9IGFzIFJlY29yZFRocmVhZEl0ZW1BY3Rpb25EYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIGJhY2tlbmQgcHJvY2VzcyBpbnB1dFxuICAgICAqXG4gICAgICogQHBhcmFtIGFjdGlvblxuICAgICAqIEBwYXJhbSBhY3Rpb25OYW1lXG4gICAgICogQHBhcmFtIG1vZHVsZU5hbWVcbiAgICAgKiBAcGFyYW0gY29udGV4dFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBidWlsZEFjdGlvbklucHV0KGFjdGlvbjogQWN0aW9uLCBhY3Rpb25OYW1lOiBzdHJpbmcsIG1vZHVsZU5hbWU6IHN0cmluZywgY29udGV4dDogQWN0aW9uQ29udGV4dCA9IG51bGwpOiBBc3luY0FjdGlvbklucHV0IHtcbiAgICAgICAgY29uc3QgYmFzZVJlY29yZCA9IHRoaXMuaXRlbVN0b3JlLmdldEJhc2VSZWNvcmQoKTtcblxuICAgICAgICB0aGlzLm1lc3NhZ2UucmVtb3ZlTWVzc2FnZXMoKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb25OYW1lLFxuICAgICAgICAgICAgbW9kdWxlOiBiYXNlUmVjb3JkLm1vZHVsZSxcbiAgICAgICAgICAgIGlkOiBiYXNlUmVjb3JkLmlkLFxuICAgICAgICAgICAgcGFyYW1zOiAoYWN0aW9uICYmIGFjdGlvbi5wYXJhbXMpIHx8IFtdXG4gICAgICAgIH0gYXMgQXN5bmNBY3Rpb25JbnB1dDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0TW9kZSgpOiBWaWV3TW9kZSB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1TdG9yZS5nZXRNb2RlKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldE1vZHVsZU5hbWUoY29udGV4dD86IEFjdGlvbkNvbnRleHQpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtU3RvcmUuZ2V0TW9kdWxlTmFtZSgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZWxvYWQoYWN0aW9uOiBBY3Rpb24sIHByb2Nlc3M6IFByb2Nlc3MsIGNvbnRleHQ/OiBBY3Rpb25Db250ZXh0KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHJlbG9hZCA9IHByb2Nlc3M/LmRhdGE/LnJlbG9hZCA/PyBmYWxzZTtcbiAgICAgICAgY29uc3QgcmVsb2FkVGhyZWFkID0gcHJvY2Vzcz8uZGF0YT8ucmVsb2FkVGhyZWFkID8/IGZhbHNlO1xuXG4gICAgICAgIGlmIChpc1RydWUocmVsb2FkKSkge1xuICAgICAgICAgICAgdGhpcy5pdGVtU3RvcmUubG9hZChmYWxzZSkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1RydWUocmVsb2FkVGhyZWFkKSkge1xuICAgICAgICAgICAgdGhpcy50aHJlYWRTdG9yZS5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHNob3VsZFJlbG9hZChwcm9jZXNzOiBQcm9jZXNzKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHJlbG9hZCA9IHByb2Nlc3M/LmRhdGE/LnJlbG9hZCA/PyBmYWxzZTtcbiAgICAgICAgY29uc3QgcmVsb2FkVGhyZWFkID0gcHJvY2Vzcz8uZGF0YT8ucmVsb2FkVGhyZWFkID8/IGZhbHNlO1xuICAgICAgICByZXR1cm4gaXNUcnVlKHJlbG9hZCkgfHwgaXNUcnVlKHJlbG9hZFRocmVhZCk7XG4gICAgfVxufVxuIl19