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
import { deepClone } from 'common';
import { FieldLogicActionHandler } from '../field-logic.action';
import { take } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/process/processes/async-action/async-action";
import * as i2 from "../../../services/process/process.service";
import * as i3 from "../../../services/message/message.service";
import * as i4 from "common";
import * as i5 from "../../../store/record/record-mappers/base-save.record-mapper";
import * as i6 from "../../../services/condition-operators/active-fields-checker.service";
class UpdateValueBackendAction extends FieldLogicActionHandler {
    asyncActionService;
    processService;
    messages;
    recordMappers;
    baseMapper;
    activeFieldsChecker;
    key = 'updateValueBackend';
    modes = ['edit', 'detail', 'list', 'create', 'massupdate', 'filter'];
    constructor(asyncActionService, processService, messages, recordMappers, baseMapper, activeFieldsChecker) {
        super();
        this.asyncActionService = asyncActionService;
        this.processService = processService;
        this.messages = messages;
        this.recordMappers = recordMappers;
        this.baseMapper = baseMapper;
        this.activeFieldsChecker = activeFieldsChecker;
        recordMappers.register('default', baseMapper.getKey(), baseMapper);
    }
    run(data, action) {
        const record = data.record;
        const field = data.field;
        if (!record || !field) {
            return;
        }
        const activeOnFields = (action.params && action.params.activeOnFields) || {};
        const relatedFields = Object.keys(activeOnFields);
        const activeOnAttributes = (action.params && action.params.activeOnAttributes) || {};
        const relatedAttributesFields = Object.keys(activeOnAttributes);
        if (!relatedFields.length && !relatedAttributesFields.length) {
            return;
        }
        const process = action.params && action.params.process;
        if (!process) {
            return;
        }
        const isActive = this.activeFieldsChecker.isActive(relatedFields, record, activeOnFields, relatedAttributesFields, activeOnAttributes);
        if (isActive) {
            const processType = process;
            const baseRecord = this.getBaseRecord(record);
            const options = {
                action: processType,
                module: record.module ?? '',
                record: baseRecord
            };
            field.loading = true;
            this.processService.submit(processType, options).pipe(take(1)).subscribe((result) => {
                const value = result?.data?.value ?? null;
                field.loading = false;
                if (value === null) {
                    this.messages.addDangerMessageByKey("ERR_FIELD_LOGIC_BACKEND_CALCULATION");
                    return;
                }
                this.updateValue(field, value.toString(), record);
            }, (error) => {
                field.loading = false;
                this.messages.addDangerMessageByKey("ERR_FIELD_LOGIC_BACKEND_CALCULATION");
            });
        }
    }
    getBaseRecord(record) {
        if (!record) {
            return null;
        }
        this.mapRecordFields(record);
        const baseRecord = {
            id: record.id,
            type: record.type,
            module: record.module,
            attributes: record.attributes,
            acls: record.acls
        };
        return deepClone(baseRecord);
    }
    /**
     * Map staging fields
     */
    mapRecordFields(record) {
        const mappers = this.recordMappers.get(record.module);
        Object.keys(mappers).forEach(key => {
            const mapper = mappers[key];
            mapper.map(record);
        });
    }
    /**
     * Update the new value
     * @param {object} field
     * @param {string} value
     * @param {object} record
     */
    updateValue(field, value, record) {
        field.value = value.toString();
        field.formControl.setValue(value);
        // re-validate the parent form-control after value update
        record.formGroup.updateValueAndValidity({ onlySelf: true, emitEvent: true });
    }
    static ɵfac = function UpdateValueBackendAction_Factory(t) { return new (t || UpdateValueBackendAction)(i0.ɵɵinject(i1.AsyncActionService), i0.ɵɵinject(i2.ProcessService), i0.ɵɵinject(i3.MessageService), i0.ɵɵinject(i4.RecordMapperRegistry), i0.ɵɵinject(i5.BaseSaveRecordMapper), i0.ɵɵinject(i6.ActiveFieldsChecker)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: UpdateValueBackendAction, factory: UpdateValueBackendAction.ɵfac, providedIn: 'root' });
}
export { UpdateValueBackendAction };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UpdateValueBackendAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.AsyncActionService }, { type: i2.ProcessService }, { type: i3.MessageService }, { type: i4.RecordMapperRegistry }, { type: i5.BaseSaveRecordMapper }, { type: i6.ActiveFieldsChecker }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXZhbHVlLWJhY2tlbmQuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2ZpZWxkcy9maWVsZC1sb2dpYy91cGRhdGUtdmFsdWUtYmFja2VuZC91cGRhdGUtdmFsdWUtYmFja2VuZC5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUVILFNBQVMsRUFTWixNQUFNLFFBQVEsQ0FBQztBQUNoQixPQUFPLEVBQXVCLHVCQUF1QixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFLcEYsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7OztBQUdwQyxNQUdhLHdCQUF5QixTQUFRLHVCQUF1QjtJQU1uRDtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFUZCxHQUFHLEdBQUcsb0JBQW9CLENBQUM7SUFDM0IsS0FBSyxHQUFHLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxRQUFRLENBQWUsQ0FBQztJQUVuRixZQUNjLGtCQUFzQyxFQUN0QyxjQUE4QixFQUM5QixRQUF3QixFQUN4QixhQUFtQyxFQUNuQyxVQUFnQyxFQUNoQyxtQkFBd0M7UUFFbEQsS0FBSyxFQUFFLENBQUM7UUFQRSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixhQUFRLEdBQVIsUUFBUSxDQUFnQjtRQUN4QixrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMsZUFBVSxHQUFWLFVBQVUsQ0FBc0I7UUFDaEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUdsRCxhQUFhLENBQUMsUUFBUSxD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QUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIzIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gICAgQWN0aW9uLFxuICAgIGRlZXBDbG9uZSxcbiAgICBGaWVsZCxcbiAgICBNYXBFbnRyeSxcbiAgICBSZWNvcmQsXG4gICAgUmVjb3JkTWFwcGVyLFxuICAgIFJlY29yZE1hcHBlclJlZ2lzdHJ5LFxuICAgIFN0cmluZ0FycmF5TWFwLFxuICAgIFN0cmluZ0FycmF5TWF0cml4LFxuICAgIFZpZXdNb2RlXG59IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge0ZpZWxkTG9naWNBY3Rpb25EYXRhLCBGaWVsZExvZ2ljQWN0aW9uSGFuZGxlcn0gZnJvbSAnLi4vZmllbGQtbG9naWMuYWN0aW9uJztcbmltcG9ydCB7QXN5bmNBY3Rpb25JbnB1dCwgQXN5bmNBY3Rpb25TZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9wcm9jZXNzL3Byb2Nlc3Nlcy9hc3luYy1hY3Rpb24vYXN5bmMtYWN0aW9uJztcbmltcG9ydCB7UHJvY2Vzc1NlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3Byb2Nlc3MvcHJvY2Vzcy5zZXJ2aWNlJztcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL21lc3NhZ2UvbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7QmFzZVNhdmVSZWNvcmRNYXBwZXJ9IGZyb20gJy4uLy4uLy4uL3N0b3JlL3JlY29yZC9yZWNvcmQtbWFwcGVycy9iYXNlLXNhdmUucmVjb3JkLW1hcHBlcic7XG5pbXBvcnQge3Rha2V9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7QWN0aXZlRmllbGRzQ2hlY2tlcn0gZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL2NvbmRpdGlvbi1vcGVyYXRvcnMvYWN0aXZlLWZpZWxkcy1jaGVja2VyLnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBVcGRhdGVWYWx1ZUJhY2tlbmRBY3Rpb24gZXh0ZW5kcyBGaWVsZExvZ2ljQWN0aW9uSGFuZGxlciB7XG5cbiAgICBrZXkgPSAndXBkYXRlVmFsdWVCYWNrZW5kJztcbiAgICBtb2RlcyA9IFsnZWRpdCcsICdkZXRhaWwnLCAnbGlzdCcsICdjcmVhdGUnLCAnbWFzc3VwZGF0ZScsICdmaWx0ZXInXSBhcyBWaWV3TW9kZVtdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBhc3luY0FjdGlvblNlcnZpY2U6IEFzeW5jQWN0aW9uU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIHByb2Nlc3NTZXJ2aWNlOiBQcm9jZXNzU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIG1lc3NhZ2VzOiBNZXNzYWdlU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIHJlY29yZE1hcHBlcnM6IFJlY29yZE1hcHBlclJlZ2lzdHJ5LFxuICAgICAgICBwcm90ZWN0ZWQgYmFzZU1hcHBlcjogQmFzZVNhdmVSZWNvcmRNYXBwZXIsXG4gICAgICAgIHByb3RlY3RlZCBhY3RpdmVGaWVsZHNDaGVja2VyOiBBY3RpdmVGaWVsZHNDaGVja2VyXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHJlY29yZE1hcHBlcnMucmVnaXN0ZXIoJ2RlZmF1bHQnLCBiYXNlTWFwcGVyLmdldEtleSgpLCBiYXNlTWFwcGVyKTtcbiAgICB9XG5cbiAgICBydW4oZGF0YTogRmllbGRMb2dpY0FjdGlvbkRhdGEsIGFjdGlvbjogQWN0aW9uKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHJlY29yZCA9IGRhdGEucmVjb3JkO1xuICAgICAgICBjb25zdCBmaWVsZCA9IGRhdGEuZmllbGQ7XG5cbiAgICAgICAgaWYgKCFyZWNvcmQgfHwgIWZpZWxkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhY3RpdmVPbkZpZWxkczogU3RyaW5nQXJyYXlNYXAgPSAoYWN0aW9uLnBhcmFtcyAmJiBhY3Rpb24ucGFyYW1zLmFjdGl2ZU9uRmllbGRzKSB8fCB7fSBhcyBTdHJpbmdBcnJheU1hcDtcbiAgICAgICAgY29uc3QgcmVsYXRlZEZpZWxkczogc3RyaW5nW10gPSBPYmplY3Qua2V5cyhhY3RpdmVPbkZpZWxkcyk7XG5cbiAgICAgICAgY29uc3QgYWN0aXZlT25BdHRyaWJ1dGVzOiBTdHJpbmdBcnJheU1hdHJpeCA9IChhY3Rpb24ucGFyYW1zICYmIGFjdGlvbi5wYXJhbXMuYWN0aXZlT25BdHRyaWJ1dGVzKSB8fCB7fSBhcyBTdHJpbmdBcnJheU1hdHJpeDtcbiAgICAgICAgY29uc3QgcmVsYXRlZEF0dHJpYnV0ZXNGaWVsZHM6IHN0cmluZ1tdID0gT2JqZWN0LmtleXMoYWN0aXZlT25BdHRyaWJ1dGVzKTtcblxuICAgICAgICBpZiAoIXJlbGF0ZWRGaWVsZHMubGVuZ3RoICYmICFyZWxhdGVkQXR0cmlidXRlc0ZpZWxkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByb2Nlc3MgPSBhY3Rpb24ucGFyYW1zICYmIGFjdGlvbi5wYXJhbXMucHJvY2VzcztcblxuICAgICAgICBpZiAoIXByb2Nlc3MpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzQWN0aXZlID0gdGhpcy5hY3RpdmVGaWVsZHNDaGVja2VyLmlzQWN0aXZlKHJlbGF0ZWRGaWVsZHMsIHJlY29yZCwgYWN0aXZlT25GaWVsZHMsIHJlbGF0ZWRBdHRyaWJ1dGVzRmllbGRzLCBhY3RpdmVPbkF0dHJpYnV0ZXMpO1xuXG4gICAgICAgIGlmIChpc0FjdGl2ZSkge1xuXG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzVHlwZSA9IHByb2Nlc3M7XG5cbiAgICAgICAgICAgIGNvbnN0IGJhc2VSZWNvcmQgPSB0aGlzLmdldEJhc2VSZWNvcmQocmVjb3JkKTtcblxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBhY3Rpb246IHByb2Nlc3NUeXBlLFxuICAgICAgICAgICAgICAgIG1vZHVsZTogcmVjb3JkLm1vZHVsZSA/PyAnJyxcbiAgICAgICAgICAgICAgICByZWNvcmQ6IGJhc2VSZWNvcmRcbiAgICAgICAgICAgIH0gYXMgQXN5bmNBY3Rpb25JbnB1dDtcblxuICAgICAgICAgICAgZmllbGQubG9hZGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc1NlcnZpY2Uuc3VibWl0KHByb2Nlc3NUeXBlLCBvcHRpb25zKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHJlc3VsdD8uZGF0YT8udmFsdWUgPz8gbnVsbDtcbiAgICAgICAgICAgICAgICBmaWVsZC5sb2FkaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlcy5hZGREYW5nZXJNZXNzYWdlQnlLZXkoXCJFUlJfRklFTERfTE9HSUNfQkFDS0VORF9DQUxDVUxBVElPTlwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKGZpZWxkLCB2YWx1ZS50b1N0cmluZygpLCByZWNvcmQpO1xuXG4gICAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBmaWVsZC5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlcy5hZGREYW5nZXJNZXNzYWdlQnlLZXkoXCJFUlJfRklFTERfTE9HSUNfQkFDS0VORF9DQUxDVUxBVElPTlwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0QmFzZVJlY29yZChyZWNvcmQ6IFJlY29yZCk6IFJlY29yZCB7XG4gICAgICAgIGlmICghcmVjb3JkKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubWFwUmVjb3JkRmllbGRzKHJlY29yZCk7XG5cbiAgICAgICAgY29uc3QgYmFzZVJlY29yZCA9IHtcbiAgICAgICAgICAgIGlkOiByZWNvcmQuaWQsXG4gICAgICAgICAgICB0eXBlOiByZWNvcmQudHlwZSxcbiAgICAgICAgICAgIG1vZHVsZTogcmVjb3JkLm1vZHVsZSxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHJlY29yZC5hdHRyaWJ1dGVzLFxuICAgICAgICAgICAgYWNsczogcmVjb3JkLmFjbHNcbiAgICAgICAgfSBhcyBSZWNvcmQ7XG5cbiAgICAgICAgcmV0dXJuIGRlZXBDbG9uZShiYXNlUmVjb3JkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYXAgc3RhZ2luZyBmaWVsZHNcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgbWFwUmVjb3JkRmllbGRzKHJlY29yZDogUmVjb3JkKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG1hcHBlcnM6IE1hcEVudHJ5PFJlY29yZE1hcHBlcj4gPSB0aGlzLnJlY29yZE1hcHBlcnMuZ2V0KHJlY29yZC5tb2R1bGUpO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKG1hcHBlcnMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hcHBlciA9IG1hcHBlcnNba2V5XTtcbiAgICAgICAgICAgIG1hcHBlci5tYXAocmVjb3JkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBuZXcgdmFsdWVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZmllbGRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVjb3JkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVZhbHVlKGZpZWxkOiBGaWVsZCwgdmFsdWU6IHN0cmluZywgcmVjb3JkOiBSZWNvcmQpOiB2b2lkIHtcbiAgICAgICAgZmllbGQudmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgICBmaWVsZC5mb3JtQ29udHJvbC5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIC8vIHJlLXZhbGlkYXRlIHRoZSBwYXJlbnQgZm9ybS1jb250cm9sIGFmdGVyIHZhbHVlIHVwZGF0ZVxuICAgICAgICByZWNvcmQuZm9ybUdyb3VwLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoe29ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IHRydWV9KTtcbiAgICB9XG5cbn1cbiJdfQ==