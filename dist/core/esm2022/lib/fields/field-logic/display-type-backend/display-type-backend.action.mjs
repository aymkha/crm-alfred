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
import * as i0 from "@angular/core";
import * as i1 from "../../../services/process/processes/async-action/async-action";
import * as i2 from "../../../services/process/process.service";
import * as i3 from "../../../services/message/message.service";
import * as i4 from "common";
import * as i5 from "../../../store/record/record-mappers/base-save.record-mapper";
import * as i6 from "../../../services/condition-operators/active-fields-checker.service";
class DisplayTypeBackendAction extends FieldLogicActionHandler {
    asyncActionService;
    processService;
    messages;
    recordMappers;
    baseMapper;
    activeFieldsChecker;
    key = 'displayTypeBackend';
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
        let display = data.field.defaultDisplay;
        if (isActive) {
            const processType = process;
            const baseRecord = this.getBaseRecord(record);
            const options = {
                action: processType,
                module: record.module ?? '',
                record: baseRecord
            };
            field.loading = true;
            this.processService.submit(processType, options).subscribe((result) => {
                const targetDisplay = result?.data?.value ?? null;
                field.loading = false;
                if (targetDisplay === null) {
                    this.messages.addDangerMessageByKey("ERR_FIELD_LOGIC_BACKEND_CALCULATION");
                    return;
                }
                display = targetDisplay;
                data.field.display = display;
            }, (error) => {
                field.loading = false;
                this.messages.addDangerMessageByKey("ERR_FIELD_LOGIC_BACKEND_CALCULATION");
            });
        }
        const resetOn = (action.params && action.params.resetOn) || 'none';
        if (resetOn === display) {
            if (data.field.valueList && data.field.valueList.length) {
                data.field.valueList = [];
            }
            if (data.field.value) {
                data.field.value = '';
            }
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
    getTriggeringStatus() {
        return ['onValueChange', 'onFieldInitialize'];
    }
    static ɵfac = function DisplayTypeBackendAction_Factory(t) { return new (t || DisplayTypeBackendAction)(i0.ɵɵinject(i1.AsyncActionService), i0.ɵɵinject(i2.ProcessService), i0.ɵɵinject(i3.MessageService), i0.ɵɵinject(i4.RecordMapperRegistry), i0.ɵɵinject(i5.BaseSaveRecordMapper), i0.ɵɵinject(i6.ActiveFieldsChecker)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DisplayTypeBackendAction, factory: DisplayTypeBackendAction.ɵfac, providedIn: 'root' });
}
export { DisplayTypeBackendAction };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DisplayTypeBackendAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.AsyncActionService }, { type: i2.ProcessService }, { type: i3.MessageService }, { type: i4.RecordMapperRegistry }, { type: i5.BaseSaveRecordMapper }, { type: i6.ActiveFieldsChecker }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheS10eXBlLWJhY2tlbmQuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2ZpZWxkcy9maWVsZC1sb2dpYy9kaXNwbGF5LXR5cGUtYmFja2VuZC9kaXNwbGF5LXR5cGUtYmFja2VuZC5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUVILFNBQVMsRUFTWixNQUFNLFFBQVEsQ0FBQztBQUNoQixPQUFPLEVBQXVCLHVCQUF1QixFQUFDLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7O0FBT3BGLE1BR2Esd0JBQXlCLFNBQVEsdUJBQXVCO0lBTW5EO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQVRkLEdBQUcsR0FBRyxvQkFBb0IsQ0FBQztJQUMzQixLQUFLLEdBQUcsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLFFBQVEsQ0FBZSxDQUFDO0lBRW5GLFlBQ2Msa0JBQXNDLEVBQ3RDLGNBQThCLEVBQzlCLFFBQXdCLEVBQ3hCLGFBQW1DLEVBQ25DLFVBQWdDLEVBQ2hDLG1CQUF3QztRQUVsRCxLQUFLLEVBQUUsQ0FBQztRQVBFLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGFBQVEsR0FBUixRQUFRLENBQWdCO1FBQ3hCLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNuQyxlQUFVLEdBQVYsVUFBVSxDQUFzQjtRQUNoQyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBR2xELGFBQWEsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsR0FBRyxDQUFDLElBQTBCLEVBQUUsTUFBYztRQUMxQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzNCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFekIsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNuQixPQUFPO1NBQ1Y7UUFDRCxNQUFNLGNBQWMsR0FBbUIsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBb0IsQ0FBQztRQUMvRyxNQUFNLGFBQWEsR0FBYSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRTVELE1BQU0sa0JBQWtCLEdBQXNCLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBdUIsQ0FBQztRQUM3SCxNQUFNLHVCQUF1QixHQUFhLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUUxRSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sSUFBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sRUFBRTtZQUMxRCxPQUFPO1NBQ1Y7UUFFRCxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBRXZELElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDVixPQUFPO1NBQ1Y7UUFFRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLHVCQUF1QixFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFFdkksSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7UUFDeEMsSUFBSSxRQUFRLEVBQUU7WUFDVixNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUM7WUFDNUIsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5QyxNQUFNLE9BQU8sR0FBRztnQkFDWixNQUFNLEVBQUUsV0FBVztnQkFDbkIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLElBQUksRUFBRTtnQkFDM0IsTUFBTSxFQUFFLFVBQVU7YUFDRCxDQUFDO1lBQ3RCLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBRXJCLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtnQkFFbEUsTUFBTSxhQUFhLEdBQUcsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLElBQUksSUFBSSxDQUFDO2dCQUNsRCxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFFdEIsSUFBSSxhQUFhLEtBQUssSUFBSSxFQUFFO29CQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLHFDQUFxQyxDQUFDLENBQUM7b0JBQzNFLE9BQU87aUJBQ1Y7Z0JBQ0QsT0FBTyxHQUFHLGFBQWEsQ0FBQTtnQkFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBc0IsQ0FBQztZQUVoRCxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDVCxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1lBQy9FLENBQUMsQ0FBQyxDQUFDO1NBQ047UUFFRCxNQUFNLE9BQU8sR0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUM7UUFFM0UsSUFBSSxPQUFPLEtBQUssT0FBTyxFQUFFO1lBQ3JCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO2dCQUNyRCxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7YUFDN0I7WUFFRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFO2dCQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7YUFDekI7U0FDSjtJQUNMLENBQUM7SUFFRCxhQUFhLENBQUMsTUFBYztRQUN4QixJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1QsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUVELElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFN0IsTUFBTSxVQUFVLEdBQUc7WUFDZixFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDYixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7WUFDakIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNO1lBQ3JCLFVBQVUsRUFBRSxNQUFNLENBQUMsVUFBVTtZQUM3QixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7U0FDVixDQUFDO1FBRVosT0FBTyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVEOztPQUVHO0lBQ08sZUFBZSxDQUFDLE1BQWM7UUFDcEMsTUFBTSxPQUFPLEdBQTJCLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU5RSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUMvQixNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDNUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxtQkFBbUI7UUFDZixPQUFPLENBQUMsZUFBZSxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDbEQsQ0FBQztrRkFwSFEsd0JBQXdCO2dFQUF4Qix3QkFBd0IsV0FBeEIsd0JBQXdCLG1CQUZyQixNQUFNOztTQUVULHdCQUF3Qjt1RkFBeEIsd0JBQXdCO2NBSHBDLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIzIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gICAgQWN0aW9uLFxuICAgIGRlZXBDbG9uZSxcbiAgICBEaXNwbGF5VHlwZSxcbiAgICBNYXBFbnRyeSxcbiAgICBSZWNvcmQsXG4gICAgUmVjb3JkTWFwcGVyLFxuICAgIFJlY29yZE1hcHBlclJlZ2lzdHJ5LFxuICAgIFN0cmluZ0FycmF5TWFwLFxuICAgIFN0cmluZ0FycmF5TWF0cml4LFxuICAgIFZpZXdNb2RlXG59IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge0ZpZWxkTG9naWNBY3Rpb25EYXRhLCBGaWVsZExvZ2ljQWN0aW9uSGFuZGxlcn0gZnJvbSAnLi4vZmllbGQtbG9naWMuYWN0aW9uJztcbmltcG9ydCB7QXN5bmNBY3Rpb25JbnB1dCwgQXN5bmNBY3Rpb25TZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9wcm9jZXNzL3Byb2Nlc3Nlcy9hc3luYy1hY3Rpb24vYXN5bmMtYWN0aW9uJztcbmltcG9ydCB7UHJvY2Vzc1NlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3Byb2Nlc3MvcHJvY2Vzcy5zZXJ2aWNlJztcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL21lc3NhZ2UvbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7QmFzZVNhdmVSZWNvcmRNYXBwZXJ9IGZyb20gJy4uLy4uLy4uL3N0b3JlL3JlY29yZC9yZWNvcmQtbWFwcGVycy9iYXNlLXNhdmUucmVjb3JkLW1hcHBlcic7XG5pbXBvcnQge0FjdGl2ZUZpZWxkc0NoZWNrZXJ9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9jb25kaXRpb24tb3BlcmF0b3JzL2FjdGl2ZS1maWVsZHMtY2hlY2tlci5zZXJ2aWNlXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGlzcGxheVR5cGVCYWNrZW5kQWN0aW9uIGV4dGVuZHMgRmllbGRMb2dpY0FjdGlvbkhhbmRsZXIge1xuXG4gICAga2V5ID0gJ2Rpc3BsYXlUeXBlQmFja2VuZCc7XG4gICAgbW9kZXMgPSBbJ2VkaXQnLCAnZGV0YWlsJywgJ2xpc3QnLCAnY3JlYXRlJywgJ21hc3N1cGRhdGUnLCAnZmlsdGVyJ10gYXMgVmlld01vZGVbXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgYXN5bmNBY3Rpb25TZXJ2aWNlOiBBc3luY0FjdGlvblNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBwcm9jZXNzU2VydmljZTogUHJvY2Vzc1NlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBtZXNzYWdlczogTWVzc2FnZVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCByZWNvcmRNYXBwZXJzOiBSZWNvcmRNYXBwZXJSZWdpc3RyeSxcbiAgICAgICAgcHJvdGVjdGVkIGJhc2VNYXBwZXI6IEJhc2VTYXZlUmVjb3JkTWFwcGVyLFxuICAgICAgICBwcm90ZWN0ZWQgYWN0aXZlRmllbGRzQ2hlY2tlcjogQWN0aXZlRmllbGRzQ2hlY2tlclxuICAgICkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICByZWNvcmRNYXBwZXJzLnJlZ2lzdGVyKCdkZWZhdWx0JywgYmFzZU1hcHBlci5nZXRLZXkoKSwgYmFzZU1hcHBlcik7XG4gICAgfVxuXG4gICAgcnVuKGRhdGE6IEZpZWxkTG9naWNBY3Rpb25EYXRhLCBhY3Rpb246IEFjdGlvbik6IHZvaWQge1xuICAgICAgICBjb25zdCByZWNvcmQgPSBkYXRhLnJlY29yZDtcbiAgICAgICAgY29uc3QgZmllbGQgPSBkYXRhLmZpZWxkO1xuXG4gICAgICAgIGlmICghcmVjb3JkIHx8ICFmaWVsZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFjdGl2ZU9uRmllbGRzOiBTdHJpbmdBcnJheU1hcCA9IChhY3Rpb24ucGFyYW1zICYmIGFjdGlvbi5wYXJhbXMuYWN0aXZlT25GaWVsZHMpIHx8IHt9IGFzIFN0cmluZ0FycmF5TWFwO1xuICAgICAgICBjb25zdCByZWxhdGVkRmllbGRzOiBzdHJpbmdbXSA9IE9iamVjdC5rZXlzKGFjdGl2ZU9uRmllbGRzKTtcblxuICAgICAgICBjb25zdCBhY3RpdmVPbkF0dHJpYnV0ZXM6IFN0cmluZ0FycmF5TWF0cml4ID0gKGFjdGlvbi5wYXJhbXMgJiYgYWN0aW9uLnBhcmFtcy5hY3RpdmVPbkF0dHJpYnV0ZXMpIHx8IHt9IGFzIFN0cmluZ0FycmF5TWF0cml4O1xuICAgICAgICBjb25zdCByZWxhdGVkQXR0cmlidXRlc0ZpZWxkczogc3RyaW5nW10gPSBPYmplY3Qua2V5cyhhY3RpdmVPbkF0dHJpYnV0ZXMpO1xuXG4gICAgICAgIGlmICghcmVsYXRlZEZpZWxkcy5sZW5ndGggJiYgIXJlbGF0ZWRBdHRyaWJ1dGVzRmllbGRzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJvY2VzcyA9IGFjdGlvbi5wYXJhbXMgJiYgYWN0aW9uLnBhcmFtcy5wcm9jZXNzO1xuXG4gICAgICAgIGlmICghcHJvY2Vzcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNBY3RpdmUgPSB0aGlzLmFjdGl2ZUZpZWxkc0NoZWNrZXIuaXNBY3RpdmUocmVsYXRlZEZpZWxkcywgcmVjb3JkLCBhY3RpdmVPbkZpZWxkcywgcmVsYXRlZEF0dHJpYnV0ZXNGaWVsZHMsIGFjdGl2ZU9uQXR0cmlidXRlcyk7XG5cbiAgICAgICAgbGV0IGRpc3BsYXkgPSBkYXRhLmZpZWxkLmRlZmF1bHREaXNwbGF5O1xuICAgICAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NUeXBlID0gcHJvY2VzcztcbiAgICAgICAgICAgIGNvbnN0IGJhc2VSZWNvcmQgPSB0aGlzLmdldEJhc2VSZWNvcmQocmVjb3JkKTtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiBwcm9jZXNzVHlwZSxcbiAgICAgICAgICAgICAgICBtb2R1bGU6IHJlY29yZC5tb2R1bGUgPz8gJycsXG4gICAgICAgICAgICAgICAgcmVjb3JkOiBiYXNlUmVjb3JkXG4gICAgICAgICAgICB9IGFzIEFzeW5jQWN0aW9uSW5wdXQ7XG4gICAgICAgICAgICBmaWVsZC5sb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzU2VydmljZS5zdWJtaXQocHJvY2Vzc1R5cGUsIG9wdGlvbnMpLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXREaXNwbGF5ID0gcmVzdWx0Py5kYXRhPy52YWx1ZSA/PyBudWxsO1xuICAgICAgICAgICAgICAgIGZpZWxkLmxvYWRpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXREaXNwbGF5ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXMuYWRkRGFuZ2VyTWVzc2FnZUJ5S2V5KFwiRVJSX0ZJRUxEX0xPR0lDX0JBQ0tFTkRfQ0FMQ1VMQVRJT05cIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGlzcGxheSA9IHRhcmdldERpc3BsYXlcbiAgICAgICAgICAgICAgICBkYXRhLmZpZWxkLmRpc3BsYXkgPSBkaXNwbGF5IGFzIERpc3BsYXlUeXBlO1xuXG4gICAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBmaWVsZC5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlcy5hZGREYW5nZXJNZXNzYWdlQnlLZXkoXCJFUlJfRklFTERfTE9HSUNfQkFDS0VORF9DQUxDVUxBVElPTlwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzZXRPbjogc3RyaW5nID0gKGFjdGlvbi5wYXJhbXMgJiYgYWN0aW9uLnBhcmFtcy5yZXNldE9uKSB8fCAnbm9uZSc7XG5cbiAgICAgICAgaWYgKHJlc2V0T24gPT09IGRpc3BsYXkpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmZpZWxkLnZhbHVlTGlzdCAmJiBkYXRhLmZpZWxkLnZhbHVlTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBkYXRhLmZpZWxkLnZhbHVlTGlzdCA9IFtdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZGF0YS5maWVsZC52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGRhdGEuZmllbGQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEJhc2VSZWNvcmQocmVjb3JkOiBSZWNvcmQpOiBSZWNvcmQge1xuICAgICAgICBpZiAoIXJlY29yZCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1hcFJlY29yZEZpZWxkcyhyZWNvcmQpO1xuXG4gICAgICAgIGNvbnN0IGJhc2VSZWNvcmQgPSB7XG4gICAgICAgICAgICBpZDogcmVjb3JkLmlkLFxuICAgICAgICAgICAgdHlwZTogcmVjb3JkLnR5cGUsXG4gICAgICAgICAgICBtb2R1bGU6IHJlY29yZC5tb2R1bGUsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiByZWNvcmQuYXR0cmlidXRlcyxcbiAgICAgICAgICAgIGFjbHM6IHJlY29yZC5hY2xzXG4gICAgICAgIH0gYXMgUmVjb3JkO1xuXG4gICAgICAgIHJldHVybiBkZWVwQ2xvbmUoYmFzZVJlY29yZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFwIHN0YWdpbmcgZmllbGRzXG4gICAgICovXG4gICAgcHJvdGVjdGVkIG1hcFJlY29yZEZpZWxkcyhyZWNvcmQ6IFJlY29yZCk6IHZvaWQge1xuICAgICAgICBjb25zdCBtYXBwZXJzOiBNYXBFbnRyeTxSZWNvcmRNYXBwZXI+ID0gdGhpcy5yZWNvcmRNYXBwZXJzLmdldChyZWNvcmQubW9kdWxlKTtcblxuICAgICAgICBPYmplY3Qua2V5cyhtYXBwZXJzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXBwZXIgPSBtYXBwZXJzW2tleV07XG4gICAgICAgICAgICBtYXBwZXIubWFwKHJlY29yZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldFRyaWdnZXJpbmdTdGF0dXMoKTogc3RyaW5nW10ge1xuICAgICAgICByZXR1cm4gWydvblZhbHVlQ2hhbmdlJywgJ29uRmllbGRJbml0aWFsaXplJ107XG4gICAgfVxuXG59XG4iXX0=