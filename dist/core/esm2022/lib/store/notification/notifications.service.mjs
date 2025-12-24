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
import { catchError, take, tap } from 'rxjs/operators';
import { timer } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../system-config/system-config.store";
import * as i2 from "../../containers/record-thread/store/record-thread/record-thread.store.factory";
import * as i3 from "../../services/process/process.service";
import * as i4 from "../../services/message/message.service";
import * as i5 from "../language/language.store";
import * as i6 from "../../services/language/dynamic-label.service";
class NotificationsService {
    systemConfig;
    storeFactory;
    processService;
    messages;
    language;
    dynamicLabels;
    constructor(systemConfig, storeFactory, processService, messages, language, dynamicLabels) {
        this.systemConfig = systemConfig;
        this.storeFactory = storeFactory;
        this.processService = processService;
        this.messages = messages;
        this.language = language;
        this.dynamicLabels = dynamicLabels;
    }
    getOptions() {
        const ui = this.systemConfig.getConfigValue('ui');
        const options = ui?.notifications ?? null;
        return options;
    }
    initStore() {
        const options = this.getOptions();
        const config = {};
        this.setupListActions(config, options);
        this.setupItemConfig(config, options);
        const store = this.storeFactory.create();
        store.setItemMetadata(config.itemConfig.metadata);
        store.setListMetadata({ actions: config.listActions });
        const filters = {
            orderBy: options?.filters?.orderBy ?? 'date_entered',
            sortOrder: options?.filters?.sortOrder ?? 'asc',
            preset: { type: 'alerts' }
        };
        store.init(options.module, false, options?.pageSize ?? null);
        store.setFilters(filters).pipe(take(1)).subscribe();
        return store;
    }
    setupListActions(config, options) {
        config.listActions = options?.listActions ?? [];
        if ((options?.collapseListActions ?? null) !== null) {
            config.collapseListActions = options.collapseListActions;
        }
    }
    setupItemConfig(config, options) {
        config.itemConfig = {
            collapsible: options?.item?.collapsible ?? false,
            collapseLimit: options?.item?.collapseLimit ?? null,
            klass: options?.item?.itemClass ?? '',
            buttonClass: options?.item?.buttonClass ?? '',
            buttonGroupClass: options?.item?.buttonGroupClass ?? '',
            dynamicClass: options?.item?.dynamicClass ?? [],
            containerClass: options?.item?.containerClass ?? '',
            flexDirection: options?.item?.flexDirection ?? '',
            metadata: {},
        };
        this.setupItemMetadata(config.itemConfig.metadata, options.item.layout, options);
    }
    setupItemMetadata(metadata, layout, options) {
        if (layout && layout.header) {
            metadata.headerLayout = deepClone(layout.header);
        }
        if (layout && layout.body) {
            metadata.bodyLayout = deepClone(layout.body);
        }
        if (layout && layout.actions) {
            metadata.actions = deepClone(layout.actions);
        }
        if (options?.item && options?.item?.fields) {
            metadata.fields = deepClone(options.item.fields);
        }
        if ((options?.item?.collapseActions ?? null) !== null) {
            metadata.collapseActions = options?.item?.collapseActions;
        }
    }
    /**
     * Send notification mark-as-read request
     *
     * @param {object} store to use
     * @returns {object} Observable<Process>
     */
    markNotificationsAsRead(store) {
        const options = {
            action: 'record-thread-list-mark-as-read',
            module: store.module ?? 'alerts',
            ids: store.getRecordIds(),
        };
        return this.processService
            .submit('record-thread-list-mark-as-read', options)
            .pipe(tap((process) => {
            let handler = 'addSuccessMessageByKey';
            if (process.status === 'error') {
                handler = 'addDangerMessageByKey';
            }
            if (process.messages) {
                process.messages.forEach(message => {
                    this.messages[handler](message);
                });
            }
            store.getItemStores().forEach(notification => {
                const staging = notification?.recordStore?.getStaging() ?? {};
                const field = staging?.fields['is_read'] ?? null;
                if (field == null) {
                    return;
                }
                field.value = 'true';
            });
        }), catchError(err => {
            this.messages.addDangerMessageByKey('ERR_NOTIFICATIONS_MARK_AS_READ');
            throw err;
        }));
    }
    onLoadMore(notificationStore) {
        timer(1500).pipe(take(1)).subscribe(() => {
            notificationStore.markNotificationsAsRead();
        });
    }
    onRefresh(store, notificationStore) {
        const count = store.getRecordList().getMeta().unreadCount;
        let appStateCount = notificationStore.getNotificationsUnreadTotal();
        if (count > appStateCount) {
            let unreadCount = (count - appStateCount).toString();
            const labelTemplate = this.language.getFieldLabel('LBL_NEW_NOTIFICATION');
            const parsedLabel = this.dynamicLabels.parse(labelTemplate, { unread: unreadCount }, {});
            this.messages.addSuccessMessage(parsedLabel);
        }
        notificationStore.setNotificationsUnreadTotal(count);
    }
    static ɵfac = function NotificationsService_Factory(t) { return new (t || NotificationsService)(i0.ɵɵinject(i1.SystemConfigStore), i0.ɵɵinject(i2.RecordThreadStoreFactory), i0.ɵɵinject(i3.ProcessService), i0.ɵɵinject(i4.MessageService), i0.ɵɵinject(i5.LanguageStore), i0.ɵɵinject(i6.DynamicLabelService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NotificationsService, factory: NotificationsService.ɵfac, providedIn: 'root' });
}
export { NotificationsService };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NotificationsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.SystemConfigStore }, { type: i2.RecordThreadStoreFactory }, { type: i3.ProcessService }, { type: i4.MessageService }, { type: i5.LanguageStore }, { type: i6.DynamicLabelService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9ucy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3N0b3JlL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb25zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFHekMsT0FBTyxFQUFDLFNBQVMsRUFBZ0MsTUFBTSxRQUFRLENBQUM7QUFTaEUsT0FBTyxFQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFHckQsT0FBTyxFQUFhLEtBQUssRUFBQyxNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7QUFLdkMsTUFHYSxvQkFBb0I7SUFHZjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFOZCxZQUNjLFlBQStCLEVBQy9CLFlBQXNDLEVBQ3RDLGNBQThCLEVBQzlCLFFBQXdCLEVBQ3hCLFFBQXVCLEVBQ3ZCLGFBQWtDO1FBTGxDLGlCQUFZLEdBQVosWUFBWSxDQUFtQjtRQUMvQixpQkFBWSxHQUFaLFlBQVksQ0FBMEI7UUFDdEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGFBQVEsR0FBUixRQUFRLENBQWdCO1FBQ3hCLGFBQVEsR0FBUixRQUFRLENBQWU7UUFDdkIsa0JBQWEsR0FBYixhQUFhLENBQXFCO0lBRWhELENBQUM7SUFFRCxVQUFVO1FBQ04sTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsTUFBTSxPQUFPLEdBQUcsRUFBRSxFQUFFLGFBQWEsSUFBSSxJQUFJLENBQUM7UUFDMUMsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVELFNBQVM7UUFDTCxNQUFNLE9BQU8sR0FBRyxJ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QVcsR0FBRyxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNyRCxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQzFFLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxFQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN2RixJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2hEO1FBQ0QsaUJBQWlCLENBQUMsMkJBQTJCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekQsQ0FBQzs4RUFwSlEsb0JBQW9CO2dFQUFwQixvQkFBb0IsV0FBcEIsb0JBQW9CLG1CQUZqQixNQUFNOztTQUVULG9CQUFvQjt1RkFBcEIsb0JBQW9CO2NBSGhDLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIzIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UmVjb3JkVGhyZWFkU3RvcmV9IGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvcmVjb3JkLXRocmVhZC9zdG9yZS9yZWNvcmQtdGhyZWFkL3JlY29yZC10aHJlYWQuc3RvcmUnO1xuaW1wb3J0IHtTeXN0ZW1Db25maWdTdG9yZX0gZnJvbSAnLi4vc3lzdGVtLWNvbmZpZy9zeXN0ZW0tY29uZmlnLnN0b3JlJztcbmltcG9ydCB7ZGVlcENsb25lLCBGaWVsZCwgUmVjb3JkLCBTZWFyY2hDcml0ZXJpYX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7UmVjb3JkVGhyZWFkSXRlbU1ldGFkYXRhfSBmcm9tICcuLi8uLi9jb250YWluZXJzL3JlY29yZC10aHJlYWQvc3RvcmUvcmVjb3JkLXRocmVhZC9yZWNvcmQtdGhyZWFkLWl0ZW0uc3RvcmUubW9kZWwnO1xuaW1wb3J0IHtcbiAgICBSZWNvcmRUaHJlYWRDb25maWcsXG4gICAgVGhyZWFkSXRlbU1ldGFkYXRhQ29uZmlnXG59IGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvcmVjb3JkLXRocmVhZC9jb21wb25lbnRzL3JlY29yZC10aHJlYWQvcmVjb3JkLXRocmVhZC5tb2RlbCc7XG5pbXBvcnQge1JlY29yZFRocmVhZFN0b3JlRmFjdG9yeX0gZnJvbSAnLi4vLi4vY29udGFpbmVycy9yZWNvcmQtdGhyZWFkL3N0b3JlL3JlY29yZC10aHJlYWQvcmVjb3JkLXRocmVhZC5zdG9yZS5mYWN0b3J5JztcbmltcG9ydCB7UmVjb3JkVGhyZWFkSXRlbUNvbmZpZ30gZnJvbSAnLi4vLi4vY29udGFpbmVycy9yZWNvcmQtdGhyZWFkL2NvbXBvbmVudHMvcmVjb3JkLXRocmVhZC1pdGVtL3JlY29yZC10aHJlYWQtaXRlbS5tb2RlbCc7XG5pbXBvcnQge1Byb2Nlc3MsIFByb2Nlc3NTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wcm9jZXNzL3Byb2Nlc3Muc2VydmljZSc7XG5pbXBvcnQge2NhdGNoRXJyb3IsIHRha2UsIHRhcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtBc3luY0FjdGlvbklucHV0fSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wcm9jZXNzL3Byb2Nlc3Nlcy9hc3luYy1hY3Rpb24vYXN5bmMtYWN0aW9uJztcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL21lc3NhZ2UvbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgdGltZXJ9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge0R5bmFtaWNMYWJlbFNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xhbmd1YWdlL2R5bmFtaWMtbGFiZWwuc2VydmljZSc7XG5pbXBvcnQge05vdGlmaWNhdGlvblN0b3JlfSBmcm9tICcuL25vdGlmaWNhdGlvbi5zdG9yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbnNTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgc3lzdGVtQ29uZmlnOiBTeXN0ZW1Db25maWdTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHN0b3JlRmFjdG9yeTogUmVjb3JkVGhyZWFkU3RvcmVGYWN0b3J5LFxuICAgICAgICBwcm90ZWN0ZWQgcHJvY2Vzc1NlcnZpY2U6IFByb2Nlc3NTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgbWVzc2FnZXM6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBkeW5hbWljTGFiZWxzOiBEeW5hbWljTGFiZWxTZXJ2aWNlXG4gICAgKSB7XG4gICAgfVxuXG4gICAgZ2V0T3B0aW9ucygpOiBhbnkge1xuICAgICAgICBjb25zdCB1aSA9IHRoaXMuc3lzdGVtQ29uZmlnLmdldENvbmZpZ1ZhbHVlKCd1aScpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdWk/Lm5vdGlmaWNhdGlvbnMgPz8gbnVsbDtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxuXG4gICAgaW5pdFN0b3JlKCk6IFJlY29yZFRocmVhZFN0b3JlIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZ2V0T3B0aW9ucygpO1xuXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHt9IGFzIFJlY29yZFRocmVhZENvbmZpZztcbiAgICAgICAgdGhpcy5zZXR1cExpc3RBY3Rpb25zKGNvbmZpZywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuc2V0dXBJdGVtQ29uZmlnKGNvbmZpZywgb3B0aW9ucyk7XG5cbiAgICAgICAgY29uc3Qgc3RvcmUgPSB0aGlzLnN0b3JlRmFjdG9yeS5jcmVhdGUoKTtcbiAgICAgICAgc3RvcmUuc2V0SXRlbU1ldGFkYXRhKGNvbmZpZy5pdGVtQ29uZmlnLm1ldGFkYXRhKTtcbiAgICAgICAgc3RvcmUuc2V0TGlzdE1ldGFkYXRhKHthY3Rpb25zOiBjb25maWcubGlzdEFjdGlvbnN9KTtcblxuICAgICAgICBjb25zdCBmaWx0ZXJzID0ge1xuICAgICAgICAgICAgb3JkZXJCeTogb3B0aW9ucz8uZmlsdGVycz8ub3JkZXJCeSA/PyAnZGF0ZV9lbnRlcmVkJyxcbiAgICAgICAgICAgIHNvcnRPcmRlcjogb3B0aW9ucz8uZmlsdGVycz8uc29ydE9yZGVyID8/ICdhc2MnLFxuICAgICAgICAgICAgcHJlc2V0OiB7dHlwZTogJ2FsZXJ0cyd9XG4gICAgICAgIH0gYXMgU2VhcmNoQ3JpdGVyaWE7XG5cbiAgICAgICAgc3RvcmUuaW5pdChvcHRpb25zLm1vZHVsZSwgZmFsc2UsIG9wdGlvbnM/LnBhZ2VTaXplID8/IG51bGwpO1xuICAgICAgICBzdG9yZS5zZXRGaWx0ZXJzKGZpbHRlcnMpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCk7XG5cbiAgICAgICAgcmV0dXJuIHN0b3JlO1xuICAgIH1cblxuICAgIHNldHVwTGlzdEFjdGlvbnMoY29uZmlnOiBSZWNvcmRUaHJlYWRDb25maWcsIG9wdGlvbnMpOiB2b2lkIHtcbiAgICAgICAgY29uZmlnLmxpc3RBY3Rpb25zID0gb3B0aW9ucz8ubGlzdEFjdGlvbnMgPz8gW107XG5cbiAgICAgICAgaWYgKChvcHRpb25zPy5jb2xsYXBzZUxpc3RBY3Rpb25zID8/IG51bGwpICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25maWcuY29sbGFwc2VMaXN0QWN0aW9ucyA9IG9wdGlvbnMuY29sbGFwc2VMaXN0QWN0aW9ucztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldHVwSXRlbUNvbmZpZyhjb25maWc6IFJlY29yZFRocmVhZENvbmZpZywgb3B0aW9ucyk6IHZvaWQge1xuICAgICAgICBjb25maWcuaXRlbUNvbmZpZyA9IHtcbiAgICAgICAgICAgIGNvbGxhcHNpYmxlOiBvcHRpb25zPy5pdGVtPy5jb2xsYXBzaWJsZSA/PyBmYWxzZSxcbiAgICAgICAgICAgIGNvbGxhcHNlTGltaXQ6IG9wdGlvbnM/Lml0ZW0/LmNvbGxhcHNlTGltaXQgPz8gbnVsbCxcbiAgICAgICAgICAgIGtsYXNzOiBvcHRpb25zPy5pdGVtPy5pdGVtQ2xhc3MgPz8gJycsXG4gICAgICAgICAgICBidXR0b25DbGFzczogb3B0aW9ucz8uaXRlbT8uYnV0dG9uQ2xhc3MgPz8gJycsXG4gICAgICAgICAgICBidXR0b25Hcm91cENsYXNzOiBvcHRpb25zPy5pdGVtPy5idXR0b25Hcm91cENsYXNzID8/ICcnLFxuICAgICAgICAgICAgZHluYW1pY0NsYXNzOiBvcHRpb25zPy5pdGVtPy5keW5hbWljQ2xhc3MgPz8gW10sXG4gICAgICAgICAgICBjb250YWluZXJDbGFzczogb3B0aW9ucz8uaXRlbT8uY29udGFpbmVyQ2xhc3MgPz8gJycsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBvcHRpb25zPy5pdGVtPy5mbGV4RGlyZWN0aW9uID8/ICcnLFxuICAgICAgICAgICAgbWV0YWRhdGE6IHt9IGFzIFJlY29yZFRocmVhZEl0ZW1NZXRhZGF0YSxcbiAgICAgICAgfSBhcyBSZWNvcmRUaHJlYWRJdGVtQ29uZmlnO1xuXG4gICAgICAgIHRoaXMuc2V0dXBJdGVtTWV0YWRhdGEoY29uZmlnLml0ZW1Db25maWcubWV0YWRhdGEsIG9wdGlvbnMuaXRlbS5sYXlvdXQsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHNldHVwSXRlbU1ldGFkYXRhKG1ldGFkYXRhOiBSZWNvcmRUaHJlYWRJdGVtTWV0YWRhdGEsIGxheW91dDogVGhyZWFkSXRlbU1ldGFkYXRhQ29uZmlnLCBvcHRpb25zKTogdm9pZCB7XG4gICAgICAgIGlmIChsYXlvdXQgJiYgbGF5b3V0LmhlYWRlcikge1xuICAgICAgICAgICAgbWV0YWRhdGEuaGVhZGVyTGF5b3V0ID0gZGVlcENsb25lKGxheW91dC5oZWFkZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxheW91dCAmJiBsYXlvdXQuYm9keSkge1xuICAgICAgICAgICAgbWV0YWRhdGEuYm9keUxheW91dCA9IGRlZXBDbG9uZShsYXlvdXQuYm9keSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGF5b3V0ICYmIGxheW91dC5hY3Rpb25zKSB7XG4gICAgICAgICAgICBtZXRhZGF0YS5hY3Rpb25zID0gZGVlcENsb25lKGxheW91dC5hY3Rpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zPy5pdGVtICYmIG9wdGlvbnM/Lml0ZW0/LmZpZWxkcykge1xuICAgICAgICAgICAgbWV0YWRhdGEuZmllbGRzID0gZGVlcENsb25lKG9wdGlvbnMuaXRlbS5maWVsZHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKChvcHRpb25zPy5pdGVtPy5jb2xsYXBzZUFjdGlvbnMgPz8gbnVsbCkgIT09IG51bGwpIHtcbiAgICAgICAgICAgIG1ldGFkYXRhLmNvbGxhcHNlQWN0aW9ucyA9IG9wdGlvbnM/Lml0ZW0/LmNvbGxhcHNlQWN0aW9ucztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbmQgbm90aWZpY2F0aW9uIG1hcmstYXMtcmVhZCByZXF1ZXN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gc3RvcmUgdG8gdXNlXG4gICAgICogQHJldHVybnMge29iamVjdH0gT2JzZXJ2YWJsZTxQcm9jZXNzPlxuICAgICAqL1xuICAgIG1hcmtOb3RpZmljYXRpb25zQXNSZWFkKHN0b3JlOiBSZWNvcmRUaHJlYWRTdG9yZSk6IE9ic2VydmFibGU8UHJvY2Vzcz4ge1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgYWN0aW9uOiAncmVjb3JkLXRocmVhZC1saXN0LW1hcmstYXMtcmVhZCcsXG4gICAgICAgICAgICBtb2R1bGU6IHN0b3JlLm1vZHVsZSA/PyAnYWxlcnRzJyxcbiAgICAgICAgICAgIGlkczogc3RvcmUuZ2V0UmVjb3JkSWRzKCksXG4gICAgICAgIH0gYXMgQXN5bmNBY3Rpb25JbnB1dDtcblxuXG4gICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NTZXJ2aWNlXG4gICAgICAgICAgICAuc3VibWl0KCdyZWNvcmQtdGhyZWFkLWxpc3QtbWFyay1hcy1yZWFkJywgb3B0aW9ucylcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIHRhcCgocHJvY2VzczogUHJvY2VzcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaGFuZGxlciA9ICdhZGRTdWNjZXNzTWVzc2FnZUJ5S2V5JztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3Muc3RhdHVzID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyID0gJ2FkZERhbmdlck1lc3NhZ2VCeUtleSc7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5tZXNzYWdlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5tZXNzYWdlcy5mb3JFYWNoKG1lc3NhZ2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXNbaGFuZGxlcl0obWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLmdldEl0ZW1TdG9yZXMoKS5mb3JFYWNoKG5vdGlmaWNhdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFnaW5nID0gbm90aWZpY2F0aW9uPy5yZWNvcmRTdG9yZT8uZ2V0U3RhZ2luZygpID8/IHt9IGFzIFJlY29yZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gc3RhZ2luZz8uZmllbGRzWydpc19yZWFkJ10gPz8gbnVsbCBhcyBGaWVsZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQudmFsdWUgPSAndHJ1ZSc7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlcy5hZGREYW5nZXJNZXNzYWdlQnlLZXkoJ0VSUl9OT1RJRklDQVRJT05TX01BUktfQVNfUkVBRCcpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIG9uTG9hZE1vcmUobm90aWZpY2F0aW9uU3RvcmU6IE5vdGlmaWNhdGlvblN0b3JlKTogdm9pZCB7XG4gICAgICAgIHRpbWVyKDE1MDApLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvblN0b3JlLm1hcmtOb3RpZmljYXRpb25zQXNSZWFkKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uUmVmcmVzaChzdG9yZTogUmVjb3JkVGhyZWFkU3RvcmUsIG5vdGlmaWNhdGlvblN0b3JlOiBOb3RpZmljYXRpb25TdG9yZSk6IHZvaWQge1xuICAgICAgICBjb25zdCBjb3VudCA9IHN0b3JlLmdldFJlY29yZExpc3QoKS5nZXRNZXRhKCkudW5yZWFkQ291bnQgYXMgbnVtYmVyO1xuICAgICAgICBsZXQgYXBwU3RhdGVDb3VudCA9IG5vdGlmaWNhdGlvblN0b3JlLmdldE5vdGlmaWNhdGlvbnNVbnJlYWRUb3RhbCgpO1xuICAgICAgICBpZiAoY291bnQgPiBhcHBTdGF0ZUNvdW50KSB7XG4gICAgICAgICAgICBsZXQgdW5yZWFkQ291bnQgPSAoY291bnQgLSBhcHBTdGF0ZUNvdW50KS50b1N0cmluZygpO1xuICAgICAgICAgICAgY29uc3QgbGFiZWxUZW1wbGF0ZSA9IHRoaXMubGFuZ3VhZ2UuZ2V0RmllbGRMYWJlbCgnTEJMX05FV19OT1RJRklDQVRJT04nKTtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZExhYmVsID0gdGhpcy5keW5hbWljTGFiZWxzLnBhcnNlKGxhYmVsVGVtcGxhdGUsIHt1bnJlYWQ6IHVucmVhZENvdW50fSwge30pO1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlcy5hZGRTdWNjZXNzTWVzc2FnZShwYXJzZWRMYWJlbCk7XG4gICAgICAgIH1cbiAgICAgICAgbm90aWZpY2F0aW9uU3RvcmUuc2V0Tm90aWZpY2F0aW9uc1VucmVhZFRvdGFsKGNvdW50KTtcbiAgICB9XG59XG4iXX0=