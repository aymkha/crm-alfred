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
import { BaseActionManager } from '../../../../services/actions/base-action-manager.service';
import * as i0 from "@angular/core";
import * as i1 from "./async-process/async-process.service";
import * as i2 from "./cancel/record-cancel.action";
import * as i3 from "./edit/record-edit.action";
import * as i4 from "./save/record-save.action";
class RecordThreadItemActionManager extends BaseActionManager {
    async;
    cancel;
    edit;
    save;
    constructor(async, cancel, edit, save) {
        super();
        this.async = async;
        this.cancel = cancel;
        this.edit = edit;
        this.save = save;
        async.modes.forEach(mode => this.actions[mode][async.key] = async);
        edit.modes.forEach(mode => this.actions[mode][edit.key] = edit);
        save.modes.forEach(mode => this.actions[mode][save.key] = save);
        cancel.modes.forEach(mode => this.actions[mode][cancel.key] = cancel);
    }
    static ɵfac = function RecordThreadItemActionManager_Factory(t) { return new (t || RecordThreadItemActionManager)(i0.ɵɵinject(i1.AsyncProcessRecordThreadItemAction), i0.ɵɵinject(i2.RecordThreadItemCancelAction), i0.ɵɵinject(i3.RecordThreadItemEditAction), i0.ɵɵinject(i4.RecordThreadItemSaveAction)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordThreadItemActionManager, factory: RecordThreadItemActionManager.ɵfac, providedIn: 'root' });
}
export { RecordThreadItemActionManager };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordThreadItemActionManager, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.AsyncProcessRecordThreadItemAction }, { type: i2.RecordThreadItemCancelAction }, { type: i3.RecordThreadItemEditAction }, { type: i4.RecordThreadItemSaveAction }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLXRocmVhZC1pdGVtLWFjdGlvbi1tYW5hZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9yZWNvcmQtdGhyZWFkL2FjdGlvbnMvaXRlbS1hY3Rpb25zL3JlY29yZC10aHJlYWQtaXRlbS1hY3Rpb24tbWFuYWdlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDBEQUEwRCxDQUFDOzs7Ozs7QUFPM0YsTUFHYSw2QkFBOEIsU0FBUSxpQkFBNkM7SUFHOUU7SUFDQTtJQUNBO0lBQ0E7SUFKZCxZQUNjLEtBQXlDLEVBQ3pDLE1BQW9DLEVBQ3BDLElBQWdDLEVBQ2hDLElBQWdDO1FBRTFDLEtBQUssRUFBRSxDQUFDO1FBTEUsVUFBSyxHQUFMLEtBQUssQ0FBb0M7UUFDekMsV0FBTSxHQUFOLE1BQU0sQ0FBOEI7UUFDcEMsU0FBSSxHQUFKLElBQUksQ0FBNEI7UUFDaEMsU0FBSSxHQUFKLElBQUksQ0FBNEI7UUFHMUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDaEUsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUMxRSxDQUFDO3VGQWJRLDZCQUE2QjtnRUFBN0IsNkJBQTZCLFdBQTdCLDZCQUE2QixtQkFGMUIsTUFBTTs7U0FFVCw2QkFBNkI7dUZBQTdCLDZCQUE2QjtjQUh6QyxVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Jhc2VBY3Rpb25NYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9hY3Rpb25zL2Jhc2UtYWN0aW9uLW1hbmFnZXIuc2VydmljZSc7XG5pbXBvcnQge0FzeW5jUHJvY2Vzc1JlY29yZFRocmVhZEl0ZW1BY3Rpb259IGZyb20gJy4vYXN5bmMtcHJvY2Vzcy9hc3luYy1wcm9jZXNzLnNlcnZpY2UnO1xuaW1wb3J0IHtSZWNvcmRUaHJlYWRJdGVtQWN0aW9uRGF0YX0gZnJvbSAnLi9yZWNvcmQtdGhyZWFkLWl0ZW0uYWN0aW9uJztcbmltcG9ydCB7UmVjb3JkVGhyZWFkSXRlbUNhbmNlbEFjdGlvbn0gZnJvbSAnLi9jYW5jZWwvcmVjb3JkLWNhbmNlbC5hY3Rpb24nO1xuaW1wb3J0IHtSZWNvcmRUaHJlYWRJdGVtRWRpdEFjdGlvbn0gZnJvbSAnLi9lZGl0L3JlY29yZC1lZGl0LmFjdGlvbic7XG5pbXBvcnQge1JlY29yZFRocmVhZEl0ZW1TYXZlQWN0aW9ufSBmcm9tICcuL3NhdmUvcmVjb3JkLXNhdmUuYWN0aW9uJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUmVjb3JkVGhyZWFkSXRlbUFjdGlvbk1hbmFnZXIgZXh0ZW5kcyBCYXNlQWN0aW9uTWFuYWdlcjxSZWNvcmRUaHJlYWRJdGVtQWN0aW9uRGF0YT4ge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBhc3luYzogQXN5bmNQcm9jZXNzUmVjb3JkVGhyZWFkSXRlbUFjdGlvbixcbiAgICAgICAgcHJvdGVjdGVkIGNhbmNlbDogUmVjb3JkVGhyZWFkSXRlbUNhbmNlbEFjdGlvbixcbiAgICAgICAgcHJvdGVjdGVkIGVkaXQ6IFJlY29yZFRocmVhZEl0ZW1FZGl0QWN0aW9uLFxuICAgICAgICBwcm90ZWN0ZWQgc2F2ZTogUmVjb3JkVGhyZWFkSXRlbVNhdmVBY3Rpb24sXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGFzeW5jLm1vZGVzLmZvckVhY2gobW9kZSA9PiB0aGlzLmFjdGlvbnNbbW9kZV1bYXN5bmMua2V5XSA9IGFzeW5jKTtcbiAgICAgICAgZWRpdC5tb2Rlcy5mb3JFYWNoKG1vZGUgPT4gdGhpcy5hY3Rpb25zW21vZGVdW2VkaXQua2V5XSA9IGVkaXQpO1xuICAgICAgICBzYXZlLm1vZGVzLmZvckVhY2gobW9kZSA9PiB0aGlzLmFjdGlvbnNbbW9kZV1bc2F2ZS5rZXldID0gc2F2ZSk7XG4gICAgICAgIGNhbmNlbC5tb2Rlcy5mb3JFYWNoKG1vZGUgPT4gdGhpcy5hY3Rpb25zW21vZGVdW2NhbmNlbC5rZXldID0gY2FuY2VsKTtcbiAgICB9XG59XG4iXX0=