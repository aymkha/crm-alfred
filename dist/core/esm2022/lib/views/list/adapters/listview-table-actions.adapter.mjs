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
import { combineLatestWith, of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BaseActionsAdapter } from "../../../services/actions/base-action.adapter";
import * as i0 from "@angular/core";
import * as i1 from "../store/list-view/list-view.store";
import * as i2 from "../table-actions/table-action-manager.service";
import * as i3 from "../../../services/process/processes/async-action/async-action";
import * as i4 from "../../../services/message/message.service";
import * as i5 from "../../../services/modals/confirmation-modal.service";
import * as i6 from "../../../store/language/language.store";
import * as i7 from "../../../services/modals/select-modal.service";
import * as i8 from "../../../store/metadata/metadata.store.service";
class ListViewTableActionsAdapter extends BaseActionsAdapter {
    store;
    actionManager;
    asyncActionService;
    message;
    confirmation;
    language;
    selectModalService;
    metadata;
    constructor(store, actionManager, asyncActionService, message, confirmation, language, selectModalService, metadata) {
        super(actionManager, asyncActionService, message, confirmation, language, selectModalService, metadata);
        this.store = store;
        this.actionManager = actionManager;
        this.asyncActionService = asyncActionService;
        this.message = message;
        this.confirmation = confirmation;
        this.language = language;
        this.selectModalService = selectModalService;
        this.metadata = metadata;
    }
    buildActionData(action, context) {
        return {
            store: this.store,
            action: action
        };
    }
    /**
     * Get action name
     * @param action
     */
    getActionName(action) {
        return `table-action-${action.key}`;
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
        const selection = this.store.recordList.selection;
        const displayedFields = [];
        this.store.metadata.listView.fields.forEach(value => {
            displayedFields.push(value.name);
        });
        const data = {
            action: actionName,
            module: moduleName,
            criteria: null,
            sort: null,
            ids: null,
            fields: displayedFields,
            params: (action && action.params) || [],
        };
        if (selection.all && selection.count > this.store.recordList.records.length) {
            data.criteria = this.store.recordList.criteria;
            data.sort = this.store.recordList.sort;
        }
        if (selection.all && selection.count <= this.store.recordList.records.length) {
            data.ids = [];
            this.store.recordList.records.forEach(record => {
                data.ids.push(record.id);
            });
        }
        if (!selection.all) {
            data.ids = Object.keys(selection.selected);
        }
        return data;
    }
    getActions(context = null) {
        return this.store.tableActions$.pipe(combineLatestWith(of('list').pipe(shareReplay())), map(([tableActions, mode]) => {
            return this.parseModeActions(tableActions, mode, context);
        }));
    }
    getModuleName(context) {
        return this.store.getModuleName();
    }
    reload(action, process, record) {
        this.store.recordList.clearSelection();
        this.store.recordList.resetPagination();
    }
    getMode() {
        return 'list';
    }
    static ɵfac = function ListViewTableActionsAdapter_Factory(t) { return new (t || ListViewTableActionsAdapter)(i0.ɵɵinject(i1.ListViewStore), i0.ɵɵinject(i2.TableActionManager), i0.ɵɵinject(i3.AsyncActionService), i0.ɵɵinject(i4.MessageService), i0.ɵɵinject(i5.ConfirmationModalService), i0.ɵɵinject(i6.LanguageStore), i0.ɵɵinject(i7.SelectModalService), i0.ɵɵinject(i8.MetadataStore)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ListViewTableActionsAdapter, factory: ListViewTableActionsAdapter.ɵfac });
}
export { ListViewTableActionsAdapter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListViewTableActionsAdapter, [{
        type: Injectable
    }], function () { return [{ type: i1.ListViewStore }, { type: i2.TableActionManager }, { type: i3.AsyncActionService }, { type: i4.MessageService }, { type: i5.ConfirmationModalService }, { type: i6.LanguageStore }, { type: i7.SelectModalService }, { type: i8.MetadataStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdHZpZXctdGFibGUtYWN0aW9ucy5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3ZpZXdzL2xpc3QvYWRhcHRlcnMvbGlzdHZpZXctdGFibGUtYWN0aW9ucy5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBQyxpQkFBaUIsRUFBYyxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFDLEdBQUcsRUFBRSxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQVNoRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQzs7Ozs7Ozs7OztBQUtqRixNQUNhLDJCQUE0QixTQUFRLGtCQUFtQztJQUdsRTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBUmQsWUFDYyxLQUFvQixFQUNwQixhQUFpQyxFQUNqQyxrQkFBc0MsRUFDdEMsT0FBdUIsRUFDdkIsWUFBc0MsRUFDdEMsUUFBdUIsRUFDdkIsa0JBQXNDLEVBQ3RDLFFBQXVCO1FBRWpDLEtBQUssQ0FDRCxhQUFhLEVBQ2Isa0JBQWtCLEVBQ2xCLE9BQU8sRUFDUCxZQUFZLEVBQ1osUUFBUSxFQUNSLGtCQUFrQixFQUNsQixRQUFRLENBQ1gsQ0FBQztRQWpCUSxVQUFLLEdBQUwsS0FBSyxDQUFlO1FBQ3BCLGtCQUFhLEdBQWIsYUFBYSxDQUFvQjtRQUNqQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLGlCQUFZLEdBQVosWUFBWSxDQUEwQjtRQUN0QyxhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLHVCQUFrQixHQUFsQixrQkFB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LENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFUyxNQUFNLENBQUMsTUFBYyxFQUFFLE9BQWdCLEVBQUUsTUFBZTtRQUM5RCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBRVMsT0FBTztRQUNiLE9BQU8sTUFBa0IsQ0FBQztJQUM5QixDQUFDO3FGQTFHUSwyQkFBMkI7Z0VBQTNCLDJCQUEyQixXQUEzQiwyQkFBMkI7O1NBQTNCLDJCQUEyQjt1RkFBM0IsMkJBQTJCO2NBRHZDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMyBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FjdGlvbiwgQWN0aW9uQ29udGV4dCwgUmVjb3JkLCBWaWV3TW9kZX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7Y29tYmluZUxhdGVzdFdpdGgsIE9ic2VydmFibGUsIG9mfSBmcm9tICdyeGpzJztcbmltcG9ydCB7bWFwLCBzaGFyZVJlcGxheX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtBc3luY0FjdGlvbklucHV0LCBBc3luY0FjdGlvblNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3Byb2Nlc3MvcHJvY2Vzc2VzL2FzeW5jLWFjdGlvbi9hc3luYy1hY3Rpb24nO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbWVzc2FnZS9tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHtQcm9jZXNzfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9wcm9jZXNzL3Byb2Nlc3Muc2VydmljZSc7XG5pbXBvcnQge0xpc3RWaWV3U3RvcmV9IGZyb20gJy4uL3N0b3JlL2xpc3Qtdmlldy9saXN0LXZpZXcuc3RvcmUnO1xuaW1wb3J0IHtDb25maXJtYXRpb25Nb2RhbFNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL21vZGFscy9jb25maXJtYXRpb24tbW9kYWwuc2VydmljZSc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7U2VsZWN0TW9kYWxTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9tb2RhbHMvc2VsZWN0LW1vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHtNZXRhZGF0YVN0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9tZXRhZGF0YS9tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7QmFzZUFjdGlvbnNBZGFwdGVyfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvYWN0aW9ucy9iYXNlLWFjdGlvbi5hZGFwdGVyXCI7XG5pbXBvcnQge1RhYmxlQWN0aW9uRGF0YX0gZnJvbSBcIi4uL3RhYmxlLWFjdGlvbnMvdGFibGUuYWN0aW9uXCI7XG5pbXBvcnQge1RhYmxlQWN0aW9uTWFuYWdlcn0gZnJvbSBcIi4uL3RhYmxlLWFjdGlvbnMvdGFibGUtYWN0aW9uLW1hbmFnZXIuc2VydmljZVwiO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld1RhYmxlQWN0aW9uc0FkYXB0ZXIgZXh0ZW5kcyBCYXNlQWN0aW9uc0FkYXB0ZXI8VGFibGVBY3Rpb25EYXRhPiB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIHN0b3JlOiBMaXN0Vmlld1N0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgYWN0aW9uTWFuYWdlcjogVGFibGVBY3Rpb25NYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgYXN5bmNBY3Rpb25TZXJ2aWNlOiBBc3luY0FjdGlvblNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBtZXNzYWdlOiBNZXNzYWdlU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGNvbmZpcm1hdGlvbjogQ29uZmlybWF0aW9uTW9kYWxTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBzZWxlY3RNb2RhbFNlcnZpY2U6IFNlbGVjdE1vZGFsU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIG1ldGFkYXRhOiBNZXRhZGF0YVN0b3JlXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgYWN0aW9uTWFuYWdlcixcbiAgICAgICAgICAgIGFzeW5jQWN0aW9uU2VydmljZSxcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICBjb25maXJtYXRpb24sXG4gICAgICAgICAgICBsYW5ndWFnZSxcbiAgICAgICAgICAgIHNlbGVjdE1vZGFsU2VydmljZSxcbiAgICAgICAgICAgIG1ldGFkYXRhXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGJ1aWxkQWN0aW9uRGF0YShhY3Rpb246IEFjdGlvbiwgY29udGV4dD86IEFjdGlvbkNvbnRleHQpOiBUYWJsZUFjdGlvbkRhdGEge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RvcmU6IHRoaXMuc3RvcmUsXG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvblxuICAgICAgICB9IGFzIFRhYmxlQWN0aW9uRGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYWN0aW9uIG5hbWVcbiAgICAgKiBAcGFyYW0gYWN0aW9uXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldEFjdGlvbk5hbWUoYWN0aW9uOiBBY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIGB0YWJsZS1hY3Rpb24tJHthY3Rpb24ua2V5fWA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgYmFja2VuZCBwcm9jZXNzIGlucHV0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gYWN0aW9uXG4gICAgICogQHBhcmFtIGFjdGlvbk5hbWVcbiAgICAgKiBAcGFyYW0gbW9kdWxlTmFtZVxuICAgICAqIEBwYXJhbSBjb250ZXh0XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGJ1aWxkQWN0aW9uSW5wdXQoYWN0aW9uOiBBY3Rpb24sIGFjdGlvbk5hbWU6IHN0cmluZywgbW9kdWxlTmFtZTogc3RyaW5nLCBjb250ZXh0OiBBY3Rpb25Db250ZXh0ID0gbnVsbCk6IEFzeW5jQWN0aW9uSW5wdXQge1xuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLnN0b3JlLnJlY29yZExpc3Quc2VsZWN0aW9uO1xuXG4gICAgICAgIGNvbnN0IGRpc3BsYXllZEZpZWxkcyA9IFtdO1xuXG4gICAgICAgIHRoaXMuc3RvcmUubWV0YWRhdGEubGlzdFZpZXcuZmllbGRzLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgICAgZGlzcGxheWVkRmllbGRzLnB1c2godmFsdWUubmFtZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvbk5hbWUsXG4gICAgICAgICAgICBtb2R1bGU6IG1vZHVsZU5hbWUsXG4gICAgICAgICAgICBjcml0ZXJpYTogbnVsbCxcbiAgICAgICAgICAgIHNvcnQ6IG51bGwsXG4gICAgICAgICAgICBpZHM6IG51bGwsXG4gICAgICAgICAgICBmaWVsZHM6IGRpc3BsYXllZEZpZWxkcyxcbiAgICAgICAgICAgIHBhcmFtczogKGFjdGlvbiAmJiBhY3Rpb24ucGFyYW1zKSB8fCBbXSxcbiAgICAgICAgfSBhcyBBc3luY0FjdGlvbklucHV0O1xuXG4gICAgICAgIGlmIChzZWxlY3Rpb24uYWxsICYmIHNlbGVjdGlvbi5jb3VudCA+IHRoaXMuc3RvcmUucmVjb3JkTGlzdC5yZWNvcmRzLmxlbmd0aCkge1xuICAgICAgICAgICAgZGF0YS5jcml0ZXJpYSA9IHRoaXMuc3RvcmUucmVjb3JkTGlzdC5jcml0ZXJpYTtcbiAgICAgICAgICAgIGRhdGEuc29ydCA9IHRoaXMuc3RvcmUucmVjb3JkTGlzdC5zb3J0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGVjdGlvbi5hbGwgJiYgc2VsZWN0aW9uLmNvdW50IDw9IHRoaXMuc3RvcmUucmVjb3JkTGlzdC5yZWNvcmRzLmxlbmd0aCkge1xuICAgICAgICAgICAgZGF0YS5pZHMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuc3RvcmUucmVjb3JkTGlzdC5yZWNvcmRzLmZvckVhY2gocmVjb3JkID0+IHtcbiAgICAgICAgICAgICAgICBkYXRhLmlkcy5wdXNoKHJlY29yZC5pZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc2VsZWN0aW9uLmFsbCkge1xuICAgICAgICAgICAgZGF0YS5pZHMgPSBPYmplY3Qua2V5cyhzZWxlY3Rpb24uc2VsZWN0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgZ2V0QWN0aW9ucyhjb250ZXh0OiBBY3Rpb25Db250ZXh0ID0gbnVsbCk6IE9ic2VydmFibGU8QWN0aW9uW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUudGFibGVBY3Rpb25zJC5waXBlKFxuICAgICAgICAgICAgY29tYmluZUxhdGVzdFdpdGgoXG4gICAgICAgICAgICAgICAgb2YoJ2xpc3QnIGFzIFZpZXdNb2RlKS5waXBlKHNoYXJlUmVwbGF5KCkpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgbWFwKChbdGFibGVBY3Rpb25zLCBtb2RlXTogW0FjdGlvbltdLCBWaWV3TW9kZV0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIHRoaXMucGFyc2VNb2RlQWN0aW9ucyh0YWJsZUFjdGlvbnMsIG1vZGUsIGNvbnRleHQpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0TW9kdWxlTmFtZShjb250ZXh0PzogQWN0aW9uQ29udGV4dCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlLmdldE1vZHVsZU5hbWUoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVsb2FkKGFjdGlvbjogQWN0aW9uLCBwcm9jZXNzOiBQcm9jZXNzLCByZWNvcmQ/OiBSZWNvcmQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdG9yZS5yZWNvcmRMaXN0LmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgICAgIHRoaXMuc3RvcmUucmVjb3JkTGlzdC5yZXNldFBhZ2luYXRpb24oKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0TW9kZSgpOiBWaWV3TW9kZSB7XG4gICAgICAgIHJldHVybiAnbGlzdCcgYXMgVmlld01vZGU7XG4gICAgfVxufVxuIl19