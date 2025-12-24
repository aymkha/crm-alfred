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
import { BaseActionManager } from '../../../services/actions/base-action-manager.service';
import * as i0 from "@angular/core";
import * as i1 from "./edit/record-edit.action";
import * as i2 from "./create/record-create.action";
import * as i3 from "./toggle-widgets/record-widget-action.service";
import * as i4 from "./cancel/record-cancel.action";
import * as i5 from "./cancel-create/cancel-create.action";
import * as i6 from "./save/record-save.action";
import * as i7 from "./save-new/record-save-new.action";
import * as i8 from "./async-process/async-process.service";
class RecordActionManager extends BaseActionManager {
    edit;
    create;
    toggleWidgets;
    cancel;
    cancelCreate;
    save;
    saveNew;
    async;
    constructor(edit, create, toggleWidgets, cancel, cancelCreate, save, saveNew, async) {
        super();
        this.edit = edit;
        this.create = create;
        this.toggleWidgets = toggleWidgets;
        this.cancel = cancel;
        this.cancelCreate = cancelCreate;
        this.save = save;
        this.saveNew = saveNew;
        this.async = async;
        edit.modes.forEach(mode => this.actions[mode][edit.key] = edit);
        create.modes.forEach(mode => this.actions[mode][create.key] = create);
        toggleWidgets.modes.forEach(mode => this.actions[mode][toggleWidgets.key] = toggleWidgets);
        cancel.modes.forEach(mode => this.actions[mode][cancel.key] = cancel);
        save.modes.forEach(mode => this.actions[mode][save.key] = save);
        saveNew.modes.forEach(mode => this.actions[mode][saveNew.key] = saveNew);
        cancelCreate.modes.forEach(mode => this.actions[mode][cancelCreate.key] = cancelCreate);
        async.modes.forEach(mode => this.actions[mode][async.key] = async);
    }
    static ɵfac = function RecordActionManager_Factory(t) { return new (t || RecordActionManager)(i0.ɵɵinject(i1.RecordEditAction), i0.ɵɵinject(i2.RecordCreateAction), i0.ɵɵinject(i3.RecordToggleWidgetsAction), i0.ɵɵinject(i4.RecordCancelAction), i0.ɵɵinject(i5.CancelCreateAction), i0.ɵɵinject(i6.RecordSaveAction), i0.ɵɵinject(i7.RecordSaveNewAction), i0.ɵɵinject(i8.AsyncProcessRecordAction)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordActionManager, factory: RecordActionManager.ɵfac, providedIn: 'root' });
}
export { RecordActionManager };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordActionManager, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.RecordEditAction }, { type: i2.RecordCreateAction }, { type: i3.RecordToggleWidgetsAction }, { type: i4.RecordCancelAction }, { type: i5.CancelCreateAction }, { type: i6.RecordSaveAction }, { type: i7.RecordSaveNewAction }, { type: i8.AsyncProcessRecordAction }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLWFjdGlvbi1tYW5hZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvcmVjb3JkL2FjdGlvbnMvcmVjb3JkLWFjdGlvbi1tYW5hZ2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFTekMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sdURBQXVELENBQUM7Ozs7Ozs7Ozs7QUFJeEYsTUFHYSxtQkFBb0IsU0FBUSxpQkFBbUM7SUFHMUQ7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQVJkLFlBQ2MsSUFBc0IsRUFDdEIsTUFBMEIsRUFDMUIsYUFBd0MsRUFDeEMsTUFBMEIsRUFDMUIsWUFBZ0MsRUFDaEMsSUFBc0IsRUFDdEIsT0FBNEIsRUFDNUIsS0FBK0I7UUFFekMsS0FBSyxFQUFFLENBQUM7UUFURSxTQUFJLEdBQUosSUFBSSxDQUFrQjtRQUN0QixXQUFNLEdBQU4sTUFBTSxDQUFvQjtRQUMxQixrQkFBYSxHQUFiLGFBQWEsQ0FBMkI7UUFDeEMsV0FBTSxHQUFOLE1BQU0sQ0FBb0I7UUFDMUIsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBQ2hDLFNBQUksR0FBSixJQUFJLENBQWtCO1FBQ3RCLFlBQU8sR0FBUCxPQUFPLENBQXFCO1FBQzVCLFVBQUssR0FBTCxLQUFLLENBQTBCO1FBR3pDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDaEUsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUN0RSxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxDQUFDO1FBQzNGLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUNoRSxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBQ3pFLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUM7UUFDeEYsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUN2RSxDQUFDOzZFQXJCUSxtQkFBbUI7Z0VBQW5CLG1CQUFtQixXQUFuQixtQkFBbUIsbUJBRmhCLE1BQU07O1NBRVQsbUJBQW1CO3VGQUFuQixtQkFBbUI7Y0FIL0IsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSZWNvcmRBY3Rpb25EYXRhfSBmcm9tICcuL3JlY29yZC5hY3Rpb24nO1xuaW1wb3J0IHtSZWNvcmRDYW5jZWxBY3Rpb259IGZyb20gJy4vY2FuY2VsL3JlY29yZC1jYW5jZWwuYWN0aW9uJztcbmltcG9ydCB7UmVjb3JkU2F2ZUFjdGlvbn0gZnJvbSAnLi9zYXZlL3JlY29yZC1zYXZlLmFjdGlvbic7XG5pbXBvcnQge1JlY29yZFRvZ2dsZVdpZGdldHNBY3Rpb259IGZyb20gJy4vdG9nZ2xlLXdpZGdldHMvcmVjb3JkLXdpZGdldC1hY3Rpb24uc2VydmljZSc7XG5pbXBvcnQge1JlY29yZEVkaXRBY3Rpb259IGZyb20gJy4vZWRpdC9yZWNvcmQtZWRpdC5hY3Rpb24nO1xuaW1wb3J0IHtSZWNvcmRDcmVhdGVBY3Rpb259IGZyb20gJy4vY3JlYXRlL3JlY29yZC1jcmVhdGUuYWN0aW9uJztcbmltcG9ydCB7UmVjb3JkU2F2ZU5ld0FjdGlvbn0gZnJvbSAnLi9zYXZlLW5ldy9yZWNvcmQtc2F2ZS1uZXcuYWN0aW9uJztcbmltcG9ydCB7Q2FuY2VsQ3JlYXRlQWN0aW9ufSBmcm9tICcuL2NhbmNlbC1jcmVhdGUvY2FuY2VsLWNyZWF0ZS5hY3Rpb24nO1xuaW1wb3J0IHtCYXNlQWN0aW9uTWFuYWdlcn0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYWN0aW9ucy9iYXNlLWFjdGlvbi1tYW5hZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHtBc3luY1Byb2Nlc3NSZWNvcmRBY3Rpb259IGZyb20gJy4vYXN5bmMtcHJvY2Vzcy9hc3luYy1wcm9jZXNzLnNlcnZpY2UnO1xuaW1wb3J0IHtBY3Rpb25IYW5kbGVyTWFwfSBmcm9tICdjb21tb24nO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBSZWNvcmRBY3Rpb25NYW5hZ2VyIGV4dGVuZHMgQmFzZUFjdGlvbk1hbmFnZXI8UmVjb3JkQWN0aW9uRGF0YT4ge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBlZGl0OiBSZWNvcmRFZGl0QWN0aW9uLFxuICAgICAgICBwcm90ZWN0ZWQgY3JlYXRlOiBSZWNvcmRDcmVhdGVBY3Rpb24sXG4gICAgICAgIHByb3RlY3RlZCB0b2dnbGVXaWRnZXRzOiBSZWNvcmRUb2dnbGVXaWRnZXRzQWN0aW9uLFxuICAgICAgICBwcm90ZWN0ZWQgY2FuY2VsOiBSZWNvcmRDYW5jZWxBY3Rpb24sXG4gICAgICAgIHByb3RlY3RlZCBjYW5jZWxDcmVhdGU6IENhbmNlbENyZWF0ZUFjdGlvbixcbiAgICAgICAgcHJvdGVjdGVkIHNhdmU6IFJlY29yZFNhdmVBY3Rpb24sXG4gICAgICAgIHByb3RlY3RlZCBzYXZlTmV3OiBSZWNvcmRTYXZlTmV3QWN0aW9uLFxuICAgICAgICBwcm90ZWN0ZWQgYXN5bmM6IEFzeW5jUHJvY2Vzc1JlY29yZEFjdGlvbixcbiAgICApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgZWRpdC5tb2Rlcy5mb3JFYWNoKG1vZGUgPT4gdGhpcy5hY3Rpb25zW21vZGVdW2VkaXQua2V5XSA9IGVkaXQpO1xuICAgICAgICBjcmVhdGUubW9kZXMuZm9yRWFjaChtb2RlID0+IHRoaXMuYWN0aW9uc1ttb2RlXVtjcmVhdGUua2V5XSA9IGNyZWF0ZSk7XG4gICAgICAgIHRvZ2dsZVdpZGdldHMubW9kZXMuZm9yRWFjaChtb2RlID0+IHRoaXMuYWN0aW9uc1ttb2RlXVt0b2dnbGVXaWRnZXRzLmtleV0gPSB0b2dnbGVXaWRnZXRzKTtcbiAgICAgICAgY2FuY2VsLm1vZGVzLmZvckVhY2gobW9kZSA9PiB0aGlzLmFjdGlvbnNbbW9kZV1bY2FuY2VsLmtleV0gPSBjYW5jZWwpO1xuICAgICAgICBzYXZlLm1vZGVzLmZvckVhY2gobW9kZSA9PiB0aGlzLmFjdGlvbnNbbW9kZV1bc2F2ZS5rZXldID0gc2F2ZSk7XG4gICAgICAgIHNhdmVOZXcubW9kZXMuZm9yRWFjaChtb2RlID0+IHRoaXMuYWN0aW9uc1ttb2RlXVtzYXZlTmV3LmtleV0gPSBzYXZlTmV3KTtcbiAgICAgICAgY2FuY2VsQ3JlYXRlLm1vZGVzLmZvckVhY2gobW9kZSA9PiB0aGlzLmFjdGlvbnNbbW9kZV1bY2FuY2VsQ3JlYXRlLmtleV0gPSBjYW5jZWxDcmVhdGUpO1xuICAgICAgICBhc3luYy5tb2Rlcy5mb3JFYWNoKG1vZGUgPT4gdGhpcy5hY3Rpb25zW21vZGVdW2FzeW5jLmtleV0gPSBhc3luYyk7XG4gICAgfVxufVxuIl19