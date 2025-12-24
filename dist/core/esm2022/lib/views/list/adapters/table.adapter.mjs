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
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { LineActionsAdapter } from './line-actions.adapter';
import * as i0 from "@angular/core";
import * as i1 from "../store/list-view/list-view.store";
import * as i2 from "../../../store/metadata/metadata.store.service";
import * as i3 from "../../../components/table/line-actions/line-action-manager.service";
import * as i4 from "../../../services/process/processes/async-action/async-action";
import * as i5 from "../../../services/message/message.service";
import * as i6 from "../../../services/modals/confirmation-modal.service";
import * as i7 from "../../../store/language/language.store";
import * as i8 from "./bulk-actions.adapter.factory";
import * as i9 from "./listview-table-actions.adapter.factory";
import * as i10 from "../../../services/modals/select-modal.service";
import * as i11 from "../../../store/user-preference/user-preference.store";
import * as i12 from "../../../store/system-config/system-config.store";
class TableAdapter {
    store;
    metadata;
    actionManager;
    asyncActionService;
    message;
    confirmation;
    language;
    bulkActionsAdapterFactory;
    listviewTableActionsAdapterFactory;
    selectModalService;
    preferences;
    systemConfigs;
    constructor(store, metadata, actionManager, asyncActionService, message, confirmation, language, bulkActionsAdapterFactory, listviewTableActionsAdapterFactory, selectModalService, preferences, systemConfigs) {
        this.store = store;
        this.metadata = metadata;
        this.actionManager = actionManager;
        this.asyncActionService = asyncActionService;
        this.message = message;
        this.confirmation = confirmation;
        this.language = language;
        this.bulkActionsAdapterFactory = bulkActionsAdapterFactory;
        this.listviewTableActionsAdapterFactory = listviewTableActionsAdapterFactory;
        this.selectModalService = selectModalService;
        this.preferences = preferences;
        this.systemConfigs = systemConfigs;
    }
    getTable() {
        return {
            showHeader: true,
            showFooter: true,
            module: this.store.getModuleName(),
            columns: this.store.columns$,
            lineActions: this.getLineActionsDataSource(),
            selection$: this.store.selection$,
            sort$: this.store.sort$,
            maxColumns$: of(4),
            loading$: this.store.recordList.loading$,
            dataSource: this.store.recordList,
            selection: this.store.recordList,
            bulkActions: this.getBulkActionsDataSource(this.store),
            tableActions: this.getTableActions(this.store),
            pagination: this.store.recordList,
            paginationType: this.preferences.getUserPreference('listview_pagination_type') ?? this.systemConfigs.getConfigValue('listview_pagination_type'),
            toggleRecordSelection: (id) => {
                this.store.recordList.toggleSelection(id);
            },
            updateSorting: (orderBy, sortOrder) => {
                this.store.recordList.updateSorting(orderBy, sortOrder);
                this.store.updateSortLocalStorage();
            },
            maxListHeight: this.preferences.getUserPreference('listview_max_height') ?? this.systemConfigs.getConfigValue('listview_max_height'),
            loadMore: () => {
                const jump = this.preferences.getUserPreference('list_max_entries_per_page') ?? this.systemConfigs.getConfigValue('list_max_entries_per_page');
                const pagination = this.store.recordList.getPagination();
                const currentPageSize = pagination.pageSize || 0;
                const newPageSize = Number(currentPageSize) + Number(jump);
                this.store.recordList.setPageSize(newPageSize);
                this.store.recordList.updatePagination(pagination.current);
            },
            allLoaded: () => {
                const pagination = this.store.recordList.getPagination();
                if (!pagination) {
                    return false;
                }
                if (Number(pagination.pageLast) >= Number(pagination.total)) {
                    return true;
                }
                return Number(pagination.pageSize) >= Number(pagination.total);
            }
        };
    }
    getLineActionsDataSource() {
        return new LineActionsAdapter(this.store, this.actionManager, this.asyncActionService, this.message, this.confirmation, this.language, this.selectModalService, this.metadata);
    }
    getBulkActionsDataSource(store) {
        return this.bulkActionsAdapterFactory.create(store);
    }
    getTableActions(store) {
        return this.listviewTableActionsAdapterFactory.create(store);
    }
    static ɵfac = function TableAdapter_Factory(t) { return new (t || TableAdapter)(i0.ɵɵinject(i1.ListViewStore), i0.ɵɵinject(i2.MetadataStore), i0.ɵɵinject(i3.LineActionActionManager), i0.ɵɵinject(i4.AsyncActionService), i0.ɵɵinject(i5.MessageService), i0.ɵɵinject(i6.ConfirmationModalService), i0.ɵɵinject(i7.LanguageStore), i0.ɵɵinject(i8.BulkActionsAdapterFactory), i0.ɵɵinject(i9.ListviewTableActionsAdapterFactory), i0.ɵɵinject(i10.SelectModalService), i0.ɵɵinject(i11.UserPreferenceStore), i0.ɵɵinject(i12.SystemConfigStore)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: TableAdapter, factory: TableAdapter.ɵfac });
}
export { TableAdapter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableAdapter, [{
        type: Injectable
    }], function () { return [{ type: i1.ListViewStore }, { type: i2.MetadataStore }, { type: i3.LineActionActionManager }, { type: i4.AsyncActionService }, { type: i5.MessageService }, { type: i6.ConfirmationModalService }, { type: i7.LanguageStore }, { type: i8.BulkActionsAdapterFactory }, { type: i9.ListviewTableActionsAdapterFactory }, { type: i10.SelectModalService }, { type: i11.UserPreferenceStore }, { type: i12.SystemConfigStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi92aWV3cy9saXN0L2FkYXB0ZXJzL3RhYmxlLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDeEIsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUt6QyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFhMUQsTUFDYSxZQUFZO0lBR1A7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBWmQsWUFDYyxLQUFvQixFQUNwQixRQUF1QixFQUN2QixhQUFzQyxFQUN0QyxrQkFBc0MsRUFDdEMsT0FBdUIsRUFDdkIsWUFBc0MsRUFDdEMsUUFBdUIsRUFDdkIseUJBQW9ELEVBQ3BELGtDQUFzRSxFQUN0RSxrQkFBc0MsRUFDdEMsV0FBZ0MsRUFDaEMsYUFBZ0M7UUFYaEMsVUFBSyxHQUFMLEtBQUssQ0FBZTtRQUNwQixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtRQUN0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLGlCQUFZLEdBQVosWUFBWSxDQUEwQjtRQUN0QyxhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFDcEQsdUNBQWtDLEdBQWxDLGtDQUFrQyxDQUFvQztRQUN0RSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLGdCQUFXLEdBQVgsV0FBVyxDQUFxQjtRQUNoQyxrQkFB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QUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUN6RCxPQUFPLElBQUksQ0FBQztpQkFDZjtnQkFFRCxPQUFPLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuRSxDQUFDO1NBRVcsQ0FBQztJQUNyQixDQUFDO0lBRUQsd0JBQXdCO1FBRXBCLE9BQU8sSUFBSSxrQkFBa0IsQ0FDekIsSUFBSSxDQUFDLEtBQUssRUFDVixJQUFJLENBQUMsYUFBYSxFQUNsQixJQUFJLENBQUMsa0JBQWtCLEVBQ3ZCLElBQUksQ0FBQyxPQUFPLEVBQ1osSUFBSSxDQUFDLFlBQVksRUFDakIsSUFBSSxDQUFDLFFBQVEsRUFDYixJQUFJLENBQUMsa0JBQWtCLEVBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQ2hCLENBQUM7SUFDTixDQUFDO0lBRUQsd0JBQXdCLENBQUMsS0FBb0I7UUFDekMsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFTyxlQUFlLENBQUMsS0FBb0I7UUFDeEMsT0FBTyxJQUFJLENBQUMsa0NBQWtDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pFLENBQUM7c0VBbEdRLFlBQVk7Z0VBQVosWUFBWSxXQUFaLFlBQVk7O1NBQVosWUFBWTt1RkFBWixZQUFZO2NBRHhCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7b2Z9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWN0aW9uRGF0YVNvdXJjZSwgU29ydERpcmVjdGlvbn0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7TGlzdFZpZXdTdG9yZX0gZnJvbSAnLi4vc3RvcmUvbGlzdC12aWV3L2xpc3Qtdmlldy5zdG9yZSc7XG5pbXBvcnQge01ldGFkYXRhU3RvcmV9IGZyb20gJy4uLy4uLy4uL3N0b3JlL21ldGFkYXRhL21ldGFkYXRhLnN0b3JlLnNlcnZpY2UnO1xuaW1wb3J0IHtUYWJsZUNvbmZpZ30gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy90YWJsZS90YWJsZS5tb2RlbCc7XG5pbXBvcnQge0xpbmVBY3Rpb25zQWRhcHRlcn0gZnJvbSAnLi9saW5lLWFjdGlvbnMuYWRhcHRlcic7XG5pbXBvcnQge0xpbmVBY3Rpb25BY3Rpb25NYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3RhYmxlL2xpbmUtYWN0aW9ucy9saW5lLWFjdGlvbi1tYW5hZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHtBc3luY0FjdGlvblNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3Byb2Nlc3MvcHJvY2Vzc2VzL2FzeW5jLWFjdGlvbi9hc3luYy1hY3Rpb24nO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbWVzc2FnZS9tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHtDb25maXJtYXRpb25Nb2RhbFNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL21vZGFscy9jb25maXJtYXRpb24tbW9kYWwuc2VydmljZSc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7QnVsa0FjdGlvbnNBZGFwdGVyRmFjdG9yeX0gZnJvbSAnLi9idWxrLWFjdGlvbnMuYWRhcHRlci5mYWN0b3J5JztcbmltcG9ydCB7QnVsa0FjdGlvbnNBZGFwdGVyfSBmcm9tICcuL2J1bGstYWN0aW9ucy5hZGFwdGVyJztcbmltcG9ydCB7U2VsZWN0TW9kYWxTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9tb2RhbHMvc2VsZWN0LW1vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHtVc2VyUHJlZmVyZW5jZVN0b3JlfSBmcm9tIFwiLi4vLi4vLi4vc3RvcmUvdXNlci1wcmVmZXJlbmNlL3VzZXItcHJlZmVyZW5jZS5zdG9yZVwiO1xuaW1wb3J0IHtTeXN0ZW1Db25maWdTdG9yZX0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlL3N5c3RlbS1jb25maWcvc3lzdGVtLWNvbmZpZy5zdG9yZVwiO1xuaW1wb3J0IHtMaXN0dmlld1RhYmxlQWN0aW9uc0FkYXB0ZXJGYWN0b3J5fSBmcm9tIFwiLi9saXN0dmlldy10YWJsZS1hY3Rpb25zLmFkYXB0ZXIuZmFjdG9yeVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGFibGVBZGFwdGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgc3RvcmU6IExpc3RWaWV3U3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBtZXRhZGF0YTogTWV0YWRhdGFTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGFjdGlvbk1hbmFnZXI6IExpbmVBY3Rpb25BY3Rpb25NYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgYXN5bmNBY3Rpb25TZXJ2aWNlOiBBc3luY0FjdGlvblNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBtZXNzYWdlOiBNZXNzYWdlU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGNvbmZpcm1hdGlvbjogQ29uZmlybWF0aW9uTW9kYWxTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBidWxrQWN0aW9uc0FkYXB0ZXJGYWN0b3J5OiBCdWxrQWN0aW9uc0FkYXB0ZXJGYWN0b3J5LFxuICAgICAgICBwcm90ZWN0ZWQgbGlzdHZpZXdUYWJsZUFjdGlvbnNBZGFwdGVyRmFjdG9yeTogTGlzdHZpZXdUYWJsZUFjdGlvbnNBZGFwdGVyRmFjdG9yeSxcbiAgICAgICAgcHJvdGVjdGVkIHNlbGVjdE1vZGFsU2VydmljZTogU2VsZWN0TW9kYWxTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgcHJlZmVyZW5jZXM6IFVzZXJQcmVmZXJlbmNlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBzeXN0ZW1Db25maWdzOiBTeXN0ZW1Db25maWdTdG9yZVxuICAgICkge1xuICAgIH1cblxuICAgIGdldFRhYmxlKCk6IFRhYmxlQ29uZmlnIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNob3dIZWFkZXI6IHRydWUsXG4gICAgICAgICAgICBzaG93Rm9vdGVyOiB0cnVlLFxuXG4gICAgICAgICAgICBtb2R1bGU6IHRoaXMuc3RvcmUuZ2V0TW9kdWxlTmFtZSgpLFxuXG4gICAgICAgICAgICBjb2x1bW5zOiB0aGlzLnN0b3JlLmNvbHVtbnMkLFxuICAgICAgICAgICAgbGluZUFjdGlvbnM6IHRoaXMuZ2V0TGluZUFjdGlvbnNEYXRhU291cmNlKCksXG4gICAgICAgICAgICBzZWxlY3Rpb24kOiB0aGlzLnN0b3JlLnNlbGVjdGlvbiQsXG4gICAgICAgICAgICBzb3J0JDogdGhpcy5zdG9yZS5zb3J0JCxcbiAgICAgICAgICAgIG1heENvbHVtbnMkOiBvZig0KSxcbiAgICAgICAgICAgIGxvYWRpbmckOiB0aGlzLnN0b3JlLnJlY29yZExpc3QubG9hZGluZyQsXG5cbiAgICAgICAgICAgIGRhdGFTb3VyY2U6IHRoaXMuc3RvcmUucmVjb3JkTGlzdCxcbiAgICAgICAgICAgIHNlbGVjdGlvbjogdGhpcy5zdG9yZS5yZWNvcmRMaXN0LFxuICAgICAgICAgICAgYnVsa0FjdGlvbnM6IHRoaXMuZ2V0QnVsa0FjdGlvbnNEYXRhU291cmNlKHRoaXMuc3RvcmUpLFxuICAgICAgICAgICAgdGFibGVBY3Rpb25zOiB0aGlzLmdldFRhYmxlQWN0aW9ucyh0aGlzLnN0b3JlKSxcbiAgICAgICAgICAgIHBhZ2luYXRpb246IHRoaXMuc3RvcmUucmVjb3JkTGlzdCxcblxuICAgICAgICAgICAgcGFnaW5hdGlvblR5cGU6IHRoaXMucHJlZmVyZW5jZXMuZ2V0VXNlclByZWZlcmVuY2UoJ2xpc3R2aWV3X3BhZ2luYXRpb25fdHlwZScpID8/IHRoaXMuc3lzdGVtQ29uZmlncy5nZXRDb25maWdWYWx1ZSgnbGlzdHZpZXdfcGFnaW5hdGlvbl90eXBlJyksXG5cbiAgICAgICAgICAgIHRvZ2dsZVJlY29yZFNlbGVjdGlvbjogKGlkOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLnJlY29yZExpc3QudG9nZ2xlU2VsZWN0aW9uKGlkKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHVwZGF0ZVNvcnRpbmc6IChvcmRlckJ5OiBzdHJpbmcsIHNvcnRPcmRlcjogU29ydERpcmVjdGlvbik6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUucmVjb3JkTGlzdC51cGRhdGVTb3J0aW5nKG9yZGVyQnksIHNvcnRPcmRlcik7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZS51cGRhdGVTb3J0TG9jYWxTdG9yYWdlKCk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBtYXhMaXN0SGVpZ2h0OiB0aGlzLnByZWZlcmVuY2VzLmdldFVzZXJQcmVmZXJlbmNlKCdsaXN0dmlld19tYXhfaGVpZ2h0JykgPz8gdGhpcy5zeXN0ZW1Db25maWdzLmdldENvbmZpZ1ZhbHVlKCdsaXN0dmlld19tYXhfaGVpZ2h0JyksXG5cbiAgICAgICAgICAgIGxvYWRNb3JlOiAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QganVtcCA9IHRoaXMucHJlZmVyZW5jZXMuZ2V0VXNlclByZWZlcmVuY2UoJ2xpc3RfbWF4X2VudHJpZXNfcGVyX3BhZ2UnKSA/PyB0aGlzLnN5c3RlbUNvbmZpZ3MuZ2V0Q29uZmlnVmFsdWUoJ2xpc3RfbWF4X2VudHJpZXNfcGVyX3BhZ2UnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwYWdpbmF0aW9uID0gdGhpcy5zdG9yZS5yZWNvcmRMaXN0LmdldFBhZ2luYXRpb24oKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50UGFnZVNpemUgPSBwYWdpbmF0aW9uLnBhZ2VTaXplIHx8IDA7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UGFnZVNpemUgPSBOdW1iZXIoY3VycmVudFBhZ2VTaXplKSArIE51bWJlcihqdW1wKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUucmVjb3JkTGlzdC5zZXRQYWdlU2l6ZShuZXdQYWdlU2l6ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5yZWNvcmRMaXN0LnVwZGF0ZVBhZ2luYXRpb24ocGFnaW5hdGlvbi5jdXJyZW50KVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgYWxsTG9hZGVkOiAoKTogYm9vbGVhbiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFnaW5hdGlvbiA9IHRoaXMuc3RvcmUucmVjb3JkTGlzdC5nZXRQYWdpbmF0aW9uKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXBhZ2luYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChOdW1iZXIocGFnaW5hdGlvbi5wYWdlTGFzdCkgPj0gTnVtYmVyKHBhZ2luYXRpb24udG90YWwpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBOdW1iZXIocGFnaW5hdGlvbi5wYWdlU2l6ZSkgPj0gTnVtYmVyKHBhZ2luYXRpb24udG90YWwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gYXMgVGFibGVDb25maWc7XG4gICAgfVxuXG4gICAgZ2V0TGluZUFjdGlvbnNEYXRhU291cmNlKCk6IEFjdGlvbkRhdGFTb3VyY2Uge1xuXG4gICAgICAgIHJldHVybiBuZXcgTGluZUFjdGlvbnNBZGFwdGVyKFxuICAgICAgICAgICAgdGhpcy5zdG9yZSxcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uTWFuYWdlcixcbiAgICAgICAgICAgIHRoaXMuYXN5bmNBY3Rpb25TZXJ2aWNlLFxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlLFxuICAgICAgICAgICAgdGhpcy5jb25maXJtYXRpb24sXG4gICAgICAgICAgICB0aGlzLmxhbmd1YWdlLFxuICAgICAgICAgICAgdGhpcy5zZWxlY3RNb2RhbFNlcnZpY2UsXG4gICAgICAgICAgICB0aGlzLm1ldGFkYXRhXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0QnVsa0FjdGlvbnNEYXRhU291cmNlKHN0b3JlOiBMaXN0Vmlld1N0b3JlKTogQnVsa0FjdGlvbnNBZGFwdGVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVsa0FjdGlvbnNBZGFwdGVyRmFjdG9yeS5jcmVhdGUoc3RvcmUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0VGFibGVBY3Rpb25zKHN0b3JlOiBMaXN0Vmlld1N0b3JlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpc3R2aWV3VGFibGVBY3Rpb25zQWRhcHRlckZhY3RvcnkuY3JlYXRlKHN0b3JlKTtcbiAgICB9XG59XG4iXX0=