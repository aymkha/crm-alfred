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
import { RecordListModalComponent } from '../../containers/record-list-modal/components/record-list-modal/record-list-modal.component';
import * as i0 from "@angular/core";
import * as i1 from "../../store/language/language.store";
import * as i2 from "../message/message.service";
import * as i3 from "@ng-bootstrap/ng-bootstrap";
class SelectModalService {
    languageStore;
    message;
    modalService;
    constructor(languageStore, message, modalService) {
        this.languageStore = languageStore;
        this.message = message;
        this.modalService = modalService;
    }
    /**
     * Get Selected Record
     *
     * @param {string} selectModule: The Modal module
     * @param onSelectCallback
     * @returns {void}
     */
    showSelectModal(selectModule, onSelectCallback = null) {
        const modal = this.modalService.open(RecordListModalComponent, { size: 'xl', scrollable: true });
        modal.componentInstance.module = selectModule;
        modal.result.then((result) => {
            if (!result || !result.selection || !result.selection.selected) {
                return;
            }
            const record = this.getSelectedRecord(result);
            if (!record.id) {
                let message = this.languageStore.getFieldLabel('ERROR_NO_RECORD');
                this.message.addDangerMessage(message);
                return;
            }
            if (onSelectCallback !== null) {
                onSelectCallback(record);
            }
        });
    }
    /**
     * Get Selected Record
     *
     * @param {object} data RecordListModalResult
     * @returns {object} Record
     */
    getSelectedRecord(data) {
        let id = '';
        Object.keys(data.selection.selected).some(selected => {
            id = selected;
            return true;
        });
        let record = null;
        data.records.some(rec => {
            if (rec && rec.id === id) {
                record = rec;
                return true;
            }
        });
        return record;
    }
    static ɵfac = function SelectModalService_Factory(t) { return new (t || SelectModalService)(i0.ɵɵinject(i1.LanguageStore), i0.ɵɵinject(i2.MessageService), i0.ɵɵinject(i3.NgbModal)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SelectModalService, factory: SelectModalService.ɵfac, providedIn: 'root' });
}
export { SelectModalService };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectModalService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.LanguageStore }, { type: i2.MessageService }, { type: i3.NgbModal }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW1vZGFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc2VydmljZXMvbW9kYWxzL3NlbGVjdC1tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLDZGQUE2RixDQUFDOzs7OztBQU9ySSxNQUdhLGtCQUFrQjtJQUdiO0lBQ0E7SUFDQTtJQUhkLFlBQ2MsYUFBNEIsRUFDNUIsT0FBdUIsRUFDdkIsWUFBc0I7UUFGdEIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsaUJBQVksR0FBWixZQUFZLENBQVU7SUFFcEMsQ0FBQztJQUdEOzs7Ozs7T0FNRztJQUNILGVBQWUsQ0FBQyxZQUFvQixFQUFFLG1CQUE2QixJQUFJO1FBRW5FLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUMvRixLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQztRQUM5QyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQTZCLEVBQUUsRUFBRTtZQUVoRCxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFO2dCQUM1RCxPQUFPO2FBQ1Y7WUFFRCxNQUFNLE1BQU0sR0FBVyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUU7Z0JBQ1osSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDbEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDdkMsT0FBTzthQUNWO1lBRUQsSUFBSSxnQkFBZ0IsS0FBSyxJQUFJLEVBQUU7Z0JBQzNCLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzVCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDTyxpQkFBaUIsQ0FBQyxJQUEyQjtRQUVuRCxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2pELEVBQUUsR0FBRyxRQUFRLENBQUM7WUFDZCxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksTUFBTSxHQUFXLElBQUksQ0FBQztRQUUxQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNwQixJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDdEIsTUFBTSxHQUFHLEdBQUcsQ0FBQztnQkFDYixPQUFPLElBQUksQ0FBQzthQUNmO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDOzRFQWhFUSxrQkFBa0I7Z0VBQWxCLGtCQUFrQixXQUFsQixrQkFBa0IsbUJBRmYsTUFBTTs7U0FFVCxrQkFBa0I7dUZBQWxCLGtCQUFrQjtjQUg5QixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JlY29yZH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7UmVjb3JkTGlzdE1vZGFsQ29tcG9uZW50fSBmcm9tICcuLi8uLi9jb250YWluZXJzL3JlY29yZC1saXN0LW1vZGFsL2NvbXBvbmVudHMvcmVjb3JkLWxpc3QtbW9kYWwvcmVjb3JkLWxpc3QtbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7UmVjb3JkTGlzdE1vZGFsUmVzdWx0fSBmcm9tICcuLi8uLi9jb250YWluZXJzL3JlY29yZC1saXN0LW1vZGFsL2NvbXBvbmVudHMvcmVjb3JkLWxpc3QtbW9kYWwvcmVjb3JkLWxpc3QtbW9kYWwubW9kZWwnO1xuaW1wb3J0IHtOZ2JNb2RhbH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tICcuLi9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZSc7XG5cblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RNb2RhbFNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBsYW5ndWFnZVN0b3JlOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbWVzc2FnZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBtb2RhbFNlcnZpY2U6IE5nYk1vZGFsXG4gICAgKSB7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBHZXQgU2VsZWN0ZWQgUmVjb3JkXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0TW9kdWxlOiBUaGUgTW9kYWwgbW9kdWxlXG4gICAgICogQHBhcmFtIG9uU2VsZWN0Q2FsbGJhY2tcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBzaG93U2VsZWN0TW9kYWwoc2VsZWN0TW9kdWxlOiBzdHJpbmcsIG9uU2VsZWN0Q2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbCk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IG1vZGFsID0gdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihSZWNvcmRMaXN0TW9kYWxDb21wb25lbnQsIHtzaXplOiAneGwnLCBzY3JvbGxhYmxlOiB0cnVlfSk7XG4gICAgICAgIG1vZGFsLmNvbXBvbmVudEluc3RhbmNlLm1vZHVsZSA9IHNlbGVjdE1vZHVsZTtcbiAgICAgICAgbW9kYWwucmVzdWx0LnRoZW4oKHJlc3VsdDogUmVjb3JkTGlzdE1vZGFsUmVzdWx0KSA9PiB7XG5cbiAgICAgICAgICAgIGlmICghcmVzdWx0IHx8ICFyZXN1bHQuc2VsZWN0aW9uIHx8ICFyZXN1bHQuc2VsZWN0aW9uLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCByZWNvcmQ6IFJlY29yZCA9IHRoaXMuZ2V0U2VsZWN0ZWRSZWNvcmQocmVzdWx0KTtcbiAgICAgICAgICAgIGlmICghcmVjb3JkLmlkKSB7XG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSB0aGlzLmxhbmd1YWdlU3RvcmUuZ2V0RmllbGRMYWJlbCgnRVJST1JfTk9fUkVDT1JEJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlLmFkZERhbmdlck1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob25TZWxlY3RDYWxsYmFjayAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG9uU2VsZWN0Q2FsbGJhY2socmVjb3JkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IFNlbGVjdGVkIFJlY29yZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgUmVjb3JkTGlzdE1vZGFsUmVzdWx0XG4gICAgICogQHJldHVybnMge29iamVjdH0gUmVjb3JkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldFNlbGVjdGVkUmVjb3JkKGRhdGE6IFJlY29yZExpc3RNb2RhbFJlc3VsdCk6IFJlY29yZCB7XG5cbiAgICAgICAgbGV0IGlkID0gJyc7XG4gICAgICAgIE9iamVjdC5rZXlzKGRhdGEuc2VsZWN0aW9uLnNlbGVjdGVkKS5zb21lKHNlbGVjdGVkID0+IHtcbiAgICAgICAgICAgIGlkID0gc2VsZWN0ZWQ7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHJlY29yZDogUmVjb3JkID0gbnVsbDtcblxuICAgICAgICBkYXRhLnJlY29yZHMuc29tZShyZWMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlYyAmJiByZWMuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgcmVjb3JkID0gcmVjO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVjb3JkO1xuICAgIH1cblxufVxuIl19