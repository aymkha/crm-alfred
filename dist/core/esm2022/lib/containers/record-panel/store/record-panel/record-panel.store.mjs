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
import { map } from 'rxjs/operators';
import { BaseRecordContainerStore } from '../../../../store/record-container/base-record-container.store';
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/app-state/app-state.store";
import * as i2 from "../../../../store/metadata/metadata.store.service";
import * as i3 from "../../../../services/message/message.service";
import * as i4 from "../../../../services/record/field/field.manager";
import * as i5 from "../../../../store/language/language.store";
import * as i6 from "../../../../store/record/record.store.factory";
class RecordPanelStore extends BaseRecordContainerStore {
    appStateStore;
    meta;
    message;
    fieldManager;
    language;
    storeFactory;
    constructor(appStateStore, meta, message, fieldManager, language, storeFactory) {
        super(appStateStore, meta, message, fieldManager, language, storeFactory);
        this.appStateStore = appStateStore;
        this.meta = meta;
        this.message = message;
        this.fieldManager = fieldManager;
        this.language = language;
        this.storeFactory = storeFactory;
    }
    /**
     * Get view fields observable
     *
     * @returns {object} Observable<ViewFieldDefinition[]>
     */
    getViewFields$() {
        return this.meta$.pipe(map((meta) => {
            return meta.fields;
        }));
    }
    /**
     * Get view fields keys observable
     *
     * @returns {object} Observable<string[]>
     */
    getViewFieldsKeys$() {
        return this.meta$.pipe(map((meta) => {
            if (!meta.fields || !meta.fields.length) {
                return [];
            }
            const keys = [];
            meta.fields.forEach(field => {
                keys.push(field.name);
            });
            return keys;
        }));
    }
    /**
     * Init record
     *
     * @param {object} record to use
     * @param {string} mode to use
     * @param {boolean} loadMetadata to use
     * @returns {object} Observable<any>
     */
    initRecord(record, mode = 'detail', loadMetadata = true) {
        super.initRecord(record, mode, loadMetadata);
        this.setRecord(record);
    }
    static ɵfac = function RecordPanelStore_Factory(t) { return new (t || RecordPanelStore)(i0.ɵɵinject(i1.AppStateStore), i0.ɵɵinject(i2.MetadataStore), i0.ɵɵinject(i3.MessageService), i0.ɵɵinject(i4.FieldManager), i0.ɵɵinject(i5.LanguageStore), i0.ɵɵinject(i6.RecordStoreFactory)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordPanelStore, factory: RecordPanelStore.ɵfac });
}
export { RecordPanelStore };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordPanelStore, [{
        type: Injectable
    }], function () { return [{ type: i1.AppStateStore }, { type: i2.MetadataStore }, { type: i3.MessageService }, { type: i4.FieldManager }, { type: i5.LanguageStore }, { type: i6.RecordStoreFactory }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLXBhbmVsLnN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbnRhaW5lcnMvcmVjb3JkLXBhbmVsL3N0b3JlL3JlY29yZC1wYW5lbC9yZWNvcmQtcGFuZWwuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUNILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFHekMsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ25DLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLGdFQUFnRSxDQUFDOzs7Ozs7OztBQVN4RyxNQUNhLGdCQUFpQixTQUFRLHdCQUE2QztJQUdqRTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFOZCxZQUNjLGFBQTRCLEVBQzVCLElBQW1CLEVBQ25CLE9BQXVCLEVBQ3ZCLFlBQTBCLEVBQzFCLFFBQXVCLEVBQ3ZCLFlBQWdDO1FBRzFDLEtBQUssQ0FDRCxhQUFhLEVBQ2IsSUFBSSxFQUNKLE9BQU8sRUFDUCxZQUFZLEVBQ1osUUFBUSxFQUNSLFlBQVksQ0FDZixDQUFDO1FBZlEsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsU0FBSSxHQUFKLElBQUksQ0FBZTtRQUNuQixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtJQVc5QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGNBQWM7UUFDakIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUF5QixFQUFFLEVBQUU7WUFDckQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGtCQUFrQjtRQUNyQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQXlCLEVBQUUsRUFBRTtZQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO2dCQUNyQyxPQUFPLEVBQUUsQ0FBQzthQUNiO1lBRUQsTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBRWhCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQixDQUFDLENBQUMsQ0FBQztZQUVILE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNJLFVBQVUsQ0FBQyxNQUFjLEVBQUUsT0FBaUIsUUFBb0IsRUFBRSxZQUFZLEdBQUcsSUFBSTtRQUV4RixLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQixDQUFDOzBFQWpFUSxnQkFBZ0I7Z0VBQWhCLGdCQUFnQixXQUFoQixnQkFBZ0I7O1NBQWhCLGdCQUFnQjt1RkFBaEIsZ0JBQWdCO2NBRDVCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7UmVjb3JkLCBWaWV3RmllbGREZWZpbml0aW9uLCBWaWV3TW9kZX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7bWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0Jhc2VSZWNvcmRDb250YWluZXJTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvcmVjb3JkLWNvbnRhaW5lci9iYXNlLXJlY29yZC1jb250YWluZXIuc3RvcmUnO1xuaW1wb3J0IHtSZWNvcmRQYW5lbE1ldGFkYXRhfSBmcm9tICcuL3JlY29yZC1wYW5lbC5zdG9yZS5tb2RlbCc7XG5pbXBvcnQge0FwcFN0YXRlU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL2FwcC1zdGF0ZS9hcHAtc3RhdGUuc3RvcmUnO1xuaW1wb3J0IHtNZXRhZGF0YVN0b3JlfSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9tZXRhZGF0YS9tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL21lc3NhZ2UvbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7RmllbGRNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9yZWNvcmQvZmllbGQvZmllbGQubWFuYWdlcic7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7UmVjb3JkU3RvcmVGYWN0b3J5fSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9yZWNvcmQvcmVjb3JkLnN0b3JlLmZhY3RvcnknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVjb3JkUGFuZWxTdG9yZSBleHRlbmRzIEJhc2VSZWNvcmRDb250YWluZXJTdG9yZTxSZWNvcmRQYW5lbE1ldGFkYXRhPiB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGFwcFN0YXRlU3RvcmU6IEFwcFN0YXRlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBtZXRhOiBNZXRhZGF0YVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbWVzc2FnZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBmaWVsZE1hbmFnZXI6IEZpZWxkTWFuYWdlcixcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgc3RvcmVGYWN0b3J5OiBSZWNvcmRTdG9yZUZhY3RvcnlcbiAgICApIHtcblxuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGFwcFN0YXRlU3RvcmUsXG4gICAgICAgICAgICBtZXRhLFxuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgIGZpZWxkTWFuYWdlcixcbiAgICAgICAgICAgIGxhbmd1YWdlLFxuICAgICAgICAgICAgc3RvcmVGYWN0b3J5XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHZpZXcgZmllbGRzIG9ic2VydmFibGVcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE9ic2VydmFibGU8Vmlld0ZpZWxkRGVmaW5pdGlvbltdPlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRWaWV3RmllbGRzJCgpOiBPYnNlcnZhYmxlPFZpZXdGaWVsZERlZmluaXRpb25bXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5tZXRhJC5waXBlKG1hcCgobWV0YTogUmVjb3JkUGFuZWxNZXRhZGF0YSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG1ldGEuZmllbGRzO1xuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHZpZXcgZmllbGRzIGtleXMgb2JzZXJ2YWJsZVxuICAgICAqXG4gICAgICogQHJldHVybnMge29iamVjdH0gT2JzZXJ2YWJsZTxzdHJpbmdbXT5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0Vmlld0ZpZWxkc0tleXMkKCk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWV0YSQucGlwZShtYXAoKG1ldGE6IFJlY29yZFBhbmVsTWV0YWRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmICghbWV0YS5maWVsZHMgfHwgIW1ldGEuZmllbGRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qga2V5cyA9IFtdO1xuXG4gICAgICAgICAgICBtZXRhLmZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgICAgICAgICBrZXlzLnB1c2goZmllbGQubmFtZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGtleXM7XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IHJlY29yZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlY29yZCB0byB1c2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kZSB0byB1c2VcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxvYWRNZXRhZGF0YSB0byB1c2VcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBPYnNlcnZhYmxlPGFueT5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW5pdFJlY29yZChyZWNvcmQ6IFJlY29yZCwgbW9kZTogVmlld01vZGUgPSAnZGV0YWlsJyBhcyBWaWV3TW9kZSwgbG9hZE1ldGFkYXRhID0gdHJ1ZSk6IHZvaWQge1xuXG4gICAgICAgIHN1cGVyLmluaXRSZWNvcmQocmVjb3JkLCBtb2RlLCBsb2FkTWV0YWRhdGEpO1xuICAgICAgICB0aGlzLnNldFJlY29yZChyZWNvcmQpO1xuICAgIH1cblxufVxuIl19