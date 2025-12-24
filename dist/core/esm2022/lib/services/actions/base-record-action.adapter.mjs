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
import { BaseActionsAdapter } from './base-action.adapter';
import * as i0 from "@angular/core";
import * as i1 from "../process/processes/async-action/async-action";
import * as i2 from "../message/message.service";
import * as i3 from "../modals/confirmation-modal.service";
import * as i4 from "../../store/language/language.store";
import * as i5 from "../modals/select-modal.service";
import * as i6 from "../../store/metadata/metadata.store.service";
class BaseRecordActionsAdapter extends BaseActionsAdapter {
    actionManager;
    asyncActionService;
    message;
    confirmation;
    language;
    selectModalService;
    metadata;
    constructor(actionManager, asyncActionService, message, confirmation, language, selectModalService, metadata) {
        super(actionManager, asyncActionService, message, confirmation, language, selectModalService, metadata);
        this.actionManager = actionManager;
        this.asyncActionService = asyncActionService;
        this.message = message;
        this.confirmation = confirmation;
        this.language = language;
        this.selectModalService = selectModalService;
        this.metadata = metadata;
    }
    /**
     * Get action name
     * @param action
     */
    getActionName(action) {
        return `record-${action.key}`;
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
        return {
            action: actionName,
            module: moduleName,
            id: (context && context.record && context.record.id) || '',
            params: (action && action.params) || [],
        };
    }
    static ɵfac = function BaseRecordActionsAdapter_Factory(t) { i0.ɵɵinvalidFactory(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: BaseRecordActionsAdapter, factory: BaseRecordActionsAdapter.ɵfac });
}
export { BaseRecordActionsAdapter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseRecordActionsAdapter, [{
        type: Injectable
    }], function () { return [{ type: undefined }, { type: i1.AsyncActionService }, { type: i2.MessageService }, { type: i3.ConfirmationModalService }, { type: i4.LanguageStore }, { type: i5.SelectModalService }, { type: i6.MetadataStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1yZWNvcmQtYWN0aW9uLmFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc2VydmljZXMvYWN0aW9ucy9iYXNlLXJlY29yZC1hY3Rpb24uYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUt6QyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7Ozs7QUFLekQsTUFDc0Isd0JBQTRCLFNBQVEsa0JBQXFCO0lBSTdEO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBUGQsWUFDYyxhQUErQixFQUMvQixrQkFBc0MsRUFDdEMsT0FBdUIsRUFDdkIsWUFBc0MsRUFDdEMsUUFBdUIsRUFDdkIsa0JBQXNDLEVBQ3RDLFFBQXVCO1FBRWpDLEtBQUssQ0FDRCxhQUFhLEVBQ2Isa0JBQWtCLEVBQ2xCLE9BQU8sRUFDUCxZQUFZLEVBQ1osUUFBUSxFQUNSLGtCQUFrQixFQUNsQixRQUFRLENBQ1gsQ0FBQTtRQWhCUyxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFDL0IsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixpQkFBWSxHQUFaLFlBQVksQ0FBMEI7UUFDdEMsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQUN2Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLGFBQVEsR0FBUixRQUFRLENBQWU7SUFXckMsQ0FBQztJQUVEOzs7T0FHRztJQUNPLGFBQWEsQ0FBQyxNQUFjO1FBQ2xDLE9BQU8sVUFBVSxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDTyxnQkFBZ0IsQ0FBQyxNQUFjLEVBQUUsVUFBa0IsRUFBRSxVQUFrQixFQUFFLFVBQXlCLElBQUk7UUFDNUcsT0FBTztZQUNILE1BQU0sRUFBRSxVQUFVO1lBQ2xCLE1BQU0sRUFBRSxVQUFVO1lBQ2xCLEVBQUUsRUFBRSxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRTtZQUMxRCxNQUFNLEVBQUUsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7U0FDdEIsQ0FBQztJQUMxQixDQUFDOztnRUE5Q2lCLHdCQUF3QixXQUF4Qix3QkFBd0I7O1NBQXhCLHdCQUF3Qjt1RkFBeEIsd0JBQXdCO2NBRDdDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FjdGlvbiwgQWN0aW9uQ29udGV4dCwgQWN0aW9uTWFuYWdlcn0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7QXN5bmNBY3Rpb25JbnB1dCwgQXN5bmNBY3Rpb25TZXJ2aWNlfSBmcm9tICcuLi9wcm9jZXNzL3Byb2Nlc3Nlcy9hc3luYy1hY3Rpb24vYXN5bmMtYWN0aW9uJztcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gJy4uL21lc3NhZ2UvbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7Q29uZmlybWF0aW9uTW9kYWxTZXJ2aWNlfSBmcm9tICcuLi9tb2RhbHMvY29uZmlybWF0aW9uLW1vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHtCYXNlQWN0aW9uc0FkYXB0ZXJ9IGZyb20gJy4vYmFzZS1hY3Rpb24uYWRhcHRlcic7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7U2VsZWN0TW9kYWxTZXJ2aWNlfSBmcm9tICcuLi9tb2RhbHMvc2VsZWN0LW1vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHtNZXRhZGF0YVN0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9tZXRhZGF0YS9tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VSZWNvcmRBY3Rpb25zQWRhcHRlcjxEPiBleHRlbmRzIEJhc2VBY3Rpb25zQWRhcHRlcjxEPiB7XG5cblxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGFjdGlvbk1hbmFnZXI6IEFjdGlvbk1hbmFnZXI8RD4sXG4gICAgICAgIHByb3RlY3RlZCBhc3luY0FjdGlvblNlcnZpY2U6IEFzeW5jQWN0aW9uU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIG1lc3NhZ2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgY29uZmlybWF0aW9uOiBDb25maXJtYXRpb25Nb2RhbFNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBsYW5ndWFnZTogTGFuZ3VhZ2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHNlbGVjdE1vZGFsU2VydmljZTogU2VsZWN0TW9kYWxTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgbWV0YWRhdGE6IE1ldGFkYXRhU3RvcmVcbiAgICApIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBhY3Rpb25NYW5hZ2VyLFxuICAgICAgICAgICAgYXN5bmNBY3Rpb25TZXJ2aWNlLFxuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgIGNvbmZpcm1hdGlvbixcbiAgICAgICAgICAgIGxhbmd1YWdlLFxuICAgICAgICAgICAgc2VsZWN0TW9kYWxTZXJ2aWNlLFxuICAgICAgICAgICAgbWV0YWRhdGFcbiAgICAgICAgKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhY3Rpb24gbmFtZVxuICAgICAqIEBwYXJhbSBhY3Rpb25cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0QWN0aW9uTmFtZShhY3Rpb246IEFjdGlvbikge1xuICAgICAgICByZXR1cm4gYHJlY29yZC0ke2FjdGlvbi5rZXl9YDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBiYWNrZW5kIHByb2Nlc3MgaW5wdXRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhY3Rpb25cbiAgICAgKiBAcGFyYW0gYWN0aW9uTmFtZVxuICAgICAqIEBwYXJhbSBtb2R1bGVOYW1lXG4gICAgICogQHBhcmFtIGNvbnRleHRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYnVpbGRBY3Rpb25JbnB1dChhY3Rpb246IEFjdGlvbiwgYWN0aW9uTmFtZTogc3RyaW5nLCBtb2R1bGVOYW1lOiBzdHJpbmcsIGNvbnRleHQ6IEFjdGlvbkNvbnRleHQgPSBudWxsKTogQXN5bmNBY3Rpb25JbnB1dCB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvbk5hbWUsXG4gICAgICAgICAgICBtb2R1bGU6IG1vZHVsZU5hbWUsXG4gICAgICAgICAgICBpZDogKGNvbnRleHQgJiYgY29udGV4dC5yZWNvcmQgJiYgY29udGV4dC5yZWNvcmQuaWQpIHx8ICcnLFxuICAgICAgICAgICAgcGFyYW1zOiAoYWN0aW9uICYmIGFjdGlvbi5wYXJhbXMpIHx8IFtdLFxuICAgICAgICB9IGFzIEFzeW5jQWN0aW9uSW5wdXQ7XG4gICAgfVxufVxuIl19