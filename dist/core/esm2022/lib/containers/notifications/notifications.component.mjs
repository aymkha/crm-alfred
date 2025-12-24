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
import { Component } from '@angular/core';
import { deepClone } from 'common';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../../store/language/language.store";
import * as i2 from "../../store/system-config/system-config.store";
import * as i3 from "../record-thread/store/record-thread/record-thread.store.factory";
import * as i4 from "../../services/message/message.service";
import * as i5 from "../../store/notification/notifications.service";
import * as i6 from "../../store/notification/notification.store";
import * as i7 from "@angular/common";
import * as i8 from "../../components/label/label.component";
import * as i9 from "../record-thread/components/record-thread/record-thread.component";
function NotificationsComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵelement(2, "scrm-label", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
function NotificationsComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-record-thread", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("config", ctx_r1.recordThreadConfig);
} }
class NotificationsComponent {
    language;
    systemConfig;
    storeFactory;
    message;
    notificationService;
    notificationStore;
    recordThreadConfig;
    store;
    options;
    constructor(language, systemConfig, storeFactory, message, notificationService, notificationStore) {
        this.language = language;
        this.systemConfig = systemConfig;
        this.storeFactory = storeFactory;
        this.message = message;
        this.notificationService = notificationService;
        this.notificationStore = notificationStore;
    }
    ngOnInit() {
        this.options = this.notificationService.getOptions();
        this.recordThreadConfig = this.getConfig();
    }
    getConfig() {
        const config = {
            filters$: of({
                orderBy: this?.options?.filters?.orderBy ?? 'date_entered',
                sortOrder: this?.options?.filters?.sortOrder ?? 'asc',
                preset: { type: 'alerts' }
            }),
            module: this.options.module,
            klass: this.options.class ?? '',
            maxListHeight: this.options.maxListHeight ?? 350,
            direction: this.options.direction || 'asc',
            autoRefreshFrequency: this.options.autoRefreshFrequency || 0,
            autoRefreshDeviationMin: this.options.autoRefreshDeviationMin ?? 0,
            autoRefreshDeviationMax: this.options.autoRefreshDeviationMax ?? 0,
            onRefresh: () => {
                this.notificationService.onRefresh(this.store, this.notificationStore);
            },
            onLoadMore: () => {
                this.notificationService.onLoadMore(this.notificationStore);
            },
            loadMorePosition: this.options?.loadMorePosition ?? '',
            create: false,
            listActionsClass: this.options?.listActionsClass ?? '',
            listActionsButtonClass: this.options?.listActionsButtonClass ?? '',
            listActionsButtonGroupClass: this.options?.listActionsButtonGroupClass ?? '',
            pageSize: this.options?.pageSize ?? '',
            showNoDataMessage: this.options?.showNoDataMessage,
            noDataLabel: this.options?.noDataLabel,
        };
        this.notificationService.setupListActions(config, this.options);
        this.notificationService.setupItemConfig(config, this.options);
        config.store = this.notificationStore.getNotificationStore();
        this.store = this.notificationStore.getNotificationStore();
        return config;
    }
    setupItemMetadata(metadata, config) {
        if (config && config.header) {
            metadata.headerLayout = deepClone(config.header);
        }
        if (config && config.body) {
            metadata.bodyLayout = deepClone(config.body);
        }
        if (config && config.actions) {
            metadata.actions = deepClone(config.actions);
        }
    }
    static ɵfac = function NotificationsComponent_Factory(t) { return new (t || NotificationsComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i2.SystemConfigStore), i0.ɵɵdirectiveInject(i3.RecordThreadStoreFactory), i0.ɵɵdirectiveInject(i4.MessageService), i0.ɵɵdirectiveInject(i5.NotificationsService), i0.ɵɵdirectiveInject(i6.NotificationStore)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NotificationsComponent, selectors: [["scrm-notifications"]], decls: 3, vars: 2, consts: [["widget-body", "", 1, "notifications"], [4, "ngIf"], [1, "p-3", "widget-message"], ["labelKey", "LBL_BAD_CONFIG"], [3, "config"]], template: function NotificationsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, NotificationsComponent_ng_container_1_Template, 3, 0, "ng-container", 1);
            i0.ɵɵtemplate(2, NotificationsComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.options);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.options);
        } }, dependencies: [i7.NgIf, i8.LabelComponent, i9.RecordThreadComponent], encapsulation: 2 });
}
export { NotificationsComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NotificationsComponent, [{
        type: Component,
        args: [{ selector: 'scrm-notifications', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2023 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n\n<div class=\"notifications\" widget-body>\n\n    <ng-container *ngIf=\"!options\">\n        <div class=\"p-3 widget-message\">\n            <scrm-label labelKey=\"LBL_BAD_CONFIG\"></scrm-label>\n        </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"options\">\n        <scrm-record-thread [config]=\"recordThreadConfig\"></scrm-record-thread>\n    </ng-container>\n\n</div>\n" }]
    }], function () { return [{ type: i1.LanguageStore }, { type: i2.SystemConfigStore }, { type: i3.RecordThreadStoreFactory }, { type: i4.MessageService }, { type: i5.NotificationsService }, { type: i6.NotificationStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbnRhaW5lcnMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBQyxTQUFTLEVBQWlCLE1BQU0sUUFBUSxDQUFDO0FBQ2pELE9BQU8sRUFBYSxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7Ozs7OztJQ0VoQyw2QkFBK0I7SUFDM0IsOEJBQWdDO0lBQzVCLGdDQUFtRDtJQUN2RCxpQkFBTTtJQUNWLDBCQUFlOzs7SUFFZiw2QkFBOEI7SUFDMUIsd0NBQXVFO0lBQzNFLDBCQUFlOzs7SUFEUyxlQUE2QjtJQUE3QixrREFBNkI7O0FES3pELE1BS2Esc0JBQXNCO0lBT2pCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQVZkLGtCQUFrQixDQUFxQjtJQUN2QyxLQUFLLENBQW9CO0lBQ3pCLE9BQU8sQ0FBTTtJQUViLFlBQ2MsUUFBdUIsRUFDdkIsWUFBK0IsRUFDL0IsWUFBc0MsRUFDdEMsT0FBdUIsRUFDdkIsbUJBQXlDLEVBQ3pDLGlCQUFvQztRQUxwQyxhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLGlCQUFZLEdBQVosWUFBWSxDQUFtQjtRQUMvQixpQkFBWSxHQUFaLFlBQVksQ0FBMEI7UUFDdEMsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsd0JBQW1CLEdBQW5CLG1CQUFtQixD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QUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNwRDtRQUVELElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDdkIsUUFBUSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hEO1FBRUQsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUMxQixRQUFRLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDaEQ7SUFDTCxDQUFDO2dGQXpFUSxzQkFBc0I7NkRBQXRCLHNCQUFzQjtZQ25CbkMsOEJBQXVDO1lBRW5DLHlGQUllO1lBRWYseUZBRWU7WUFFbkIsaUJBQU07O1lBVmEsZUFBYztZQUFkLG1DQUFjO1lBTWQsZUFBYTtZQUFiLGtDQUFhOzs7U0RXbkIsc0JBQXNCO3VGQUF0QixzQkFBc0I7Y0FMbEMsU0FBUzsyQkFDSSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMyBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtkZWVwQ2xvbmUsIFNlYXJjaENyaXRlcmlhfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBvZn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7XG4gICAgUmVjb3JkVGhyZWFkQ29uZmlnLFxuICAgIFRocmVhZEl0ZW1NZXRhZGF0YUNvbmZpZ1xufSBmcm9tICcuLi9yZWNvcmQtdGhyZWFkL2NvbXBvbmVudHMvcmVjb3JkLXRocmVhZC9yZWNvcmQtdGhyZWFkLm1vZGVsJztcbmltcG9ydCB7UmVjb3JkVGhyZWFkSXRlbU1ldGFkYXRhfSBmcm9tICcuLi9yZWNvcmQtdGhyZWFkL3N0b3JlL3JlY29yZC10aHJlYWQvcmVjb3JkLXRocmVhZC1pdGVtLnN0b3JlLm1vZGVsJztcbmltcG9ydCB7U3lzdGVtQ29uZmlnU3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL3N5c3RlbS1jb25maWcvc3lzdGVtLWNvbmZpZy5zdG9yZSc7XG5pbXBvcnQge1JlY29yZFRocmVhZFN0b3JlRmFjdG9yeX0gZnJvbSBcIi4uL3JlY29yZC10aHJlYWQvc3RvcmUvcmVjb3JkLXRocmVhZC9yZWNvcmQtdGhyZWFkLnN0b3JlLmZhY3RvcnlcIjtcbmltcG9ydCB7UmVjb3JkVGhyZWFkU3RvcmV9IGZyb20gXCIuLi9yZWNvcmQtdGhyZWFkL3N0b3JlL3JlY29yZC10aHJlYWQvcmVjb3JkLXRocmVhZC5zdG9yZVwiO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL21lc3NhZ2UvbWVzc2FnZS5zZXJ2aWNlXCI7XG5pbXBvcnQge05vdGlmaWNhdGlvbnNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zdG9yZS9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7Tm90aWZpY2F0aW9uU3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uc3RvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tbm90aWZpY2F0aW9ucycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL25vdGlmaWNhdGlvbnMuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICByZWNvcmRUaHJlYWRDb25maWc6IFJlY29yZFRocmVhZENvbmZpZztcbiAgICBzdG9yZTogUmVjb3JkVGhyZWFkU3RvcmU7XG4gICAgb3B0aW9uczogYW55O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBsYW5ndWFnZTogTGFuZ3VhZ2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHN5c3RlbUNvbmZpZzogU3lzdGVtQ29uZmlnU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBzdG9yZUZhY3Rvcnk6IFJlY29yZFRocmVhZFN0b3JlRmFjdG9yeSxcbiAgICAgICAgcHJvdGVjdGVkIG1lc3NhZ2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgbm90aWZpY2F0aW9uU2VydmljZTogTm90aWZpY2F0aW9uc1NlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBub3RpZmljYXRpb25TdG9yZTogTm90aWZpY2F0aW9uU3RvcmVcbiAgICApIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLmdldE9wdGlvbnMoKTtcbiAgICAgICAgdGhpcy5yZWNvcmRUaHJlYWRDb25maWcgPSB0aGlzLmdldENvbmZpZygpO1xuICAgIH1cblxuICAgIGdldENvbmZpZygpOiBSZWNvcmRUaHJlYWRDb25maWcge1xuXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgIGZpbHRlcnMkOiBvZih7XG4gICAgICAgICAgICAgICAgb3JkZXJCeTogdGhpcz8ub3B0aW9ucz8uZmlsdGVycz8ub3JkZXJCeSA/PyAnZGF0ZV9lbnRlcmVkJyxcbiAgICAgICAgICAgICAgICBzb3J0T3JkZXI6IHRoaXM/Lm9wdGlvbnM/LmZpbHRlcnM/LnNvcnRPcmRlciA/PyAnYXNjJyxcbiAgICAgICAgICAgICAgICBwcmVzZXQ6IHt0eXBlOiAnYWxlcnRzJ31cbiAgICAgICAgICAgIH0gYXMgU2VhcmNoQ3JpdGVyaWEpLFxuICAgICAgICAgICAgbW9kdWxlOiB0aGlzLm9wdGlvbnMubW9kdWxlLFxuICAgICAgICAgICAga2xhc3M6IHRoaXMub3B0aW9ucy5jbGFzcyA/PyAnJyxcbiAgICAgICAgICAgIG1heExpc3RIZWlnaHQ6IHRoaXMub3B0aW9ucy5tYXhMaXN0SGVpZ2h0ID8/IDM1MCxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogdGhpcy5vcHRpb25zLmRpcmVjdGlvbiB8fCAnYXNjJyxcbiAgICAgICAgICAgIGF1dG9SZWZyZXNoRnJlcXVlbmN5OiB0aGlzLm9wdGlvbnMuYXV0b1JlZnJlc2hGcmVxdWVuY3kgfHwgMCxcbiAgICAgICAgICAgIGF1dG9SZWZyZXNoRGV2aWF0aW9uTWluOiB0aGlzLm9wdGlvbnMuYXV0b1JlZnJlc2hEZXZpYXRpb25NaW4gPz8gMCxcbiAgICAgICAgICAgIGF1dG9SZWZyZXNoRGV2aWF0aW9uTWF4OiB0aGlzLm9wdGlvbnMuYXV0b1JlZnJlc2hEZXZpYXRpb25NYXggPz8gMCxcbiAgICAgICAgICAgIG9uUmVmcmVzaDogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5vblJlZnJlc2godGhpcy5zdG9yZSwgdGhpcy5ub3RpZmljYXRpb25TdG9yZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25Mb2FkTW9yZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5vbkxvYWRNb3JlKHRoaXMubm90aWZpY2F0aW9uU3RvcmUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxvYWRNb3JlUG9zaXRpb246IHRoaXMub3B0aW9ucz8ubG9hZE1vcmVQb3NpdGlvbiA/PyAnJyxcbiAgICAgICAgICAgIGNyZWF0ZTogZmFsc2UsXG4gICAgICAgICAgICBsaXN0QWN0aW9uc0NsYXNzOiB0aGlzLm9wdGlvbnM/Lmxpc3RBY3Rpb25zQ2xhc3MgPz8gJycsXG4gICAgICAgICAgICBsaXN0QWN0aW9uc0J1dHRvbkNsYXNzOiB0aGlzLm9wdGlvbnM/Lmxpc3RBY3Rpb25zQnV0dG9uQ2xhc3MgPz8gJycsXG4gICAgICAgICAgICBsaXN0QWN0aW9uc0J1dHRvbkdyb3VwQ2xhc3M6IHRoaXMub3B0aW9ucz8ubGlzdEFjdGlvbnNCdXR0b25Hcm91cENsYXNzID8/ICcnLFxuICAgICAgICAgICAgcGFnZVNpemU6IHRoaXMub3B0aW9ucz8ucGFnZVNpemUgPz8gJycsXG4gICAgICAgICAgICBzaG93Tm9EYXRhTWVzc2FnZTogdGhpcy5vcHRpb25zPy5zaG93Tm9EYXRhTWVzc2FnZSxcbiAgICAgICAgICAgIG5vRGF0YUxhYmVsOiB0aGlzLm9wdGlvbnM/Lm5vRGF0YUxhYmVsLFxuICAgICAgICB9IGFzIFJlY29yZFRocmVhZENvbmZpZztcblxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2Uuc2V0dXBMaXN0QWN0aW9ucyhjb25maWcsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5zZXR1cEl0ZW1Db25maWcoY29uZmlnLCB0aGlzLm9wdGlvbnMpO1xuXG4gICAgICAgIGNvbmZpZy5zdG9yZSA9IHRoaXMubm90aWZpY2F0aW9uU3RvcmUuZ2V0Tm90aWZpY2F0aW9uU3RvcmUoKTtcbiAgICAgICAgdGhpcy5zdG9yZSA9IHRoaXMubm90aWZpY2F0aW9uU3RvcmUuZ2V0Tm90aWZpY2F0aW9uU3RvcmUoKTtcblxuICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZXR1cEl0ZW1NZXRhZGF0YShtZXRhZGF0YTogUmVjb3JkVGhyZWFkSXRlbU1ldGFkYXRhLCBjb25maWc6IFRocmVhZEl0ZW1NZXRhZGF0YUNvbmZpZyk6IHZvaWQge1xuICAgICAgICBpZiAoY29uZmlnICYmIGNvbmZpZy5oZWFkZXIpIHtcbiAgICAgICAgICAgIG1ldGFkYXRhLmhlYWRlckxheW91dCA9IGRlZXBDbG9uZShjb25maWcuaGVhZGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcgJiYgY29uZmlnLmJvZHkpIHtcbiAgICAgICAgICAgIG1ldGFkYXRhLmJvZHlMYXlvdXQgPSBkZWVwQ2xvbmUoY29uZmlnLmJvZHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZyAmJiBjb25maWcuYWN0aW9ucykge1xuICAgICAgICAgICAgbWV0YWRhdGEuYWN0aW9ucyA9IGRlZXBDbG9uZShjb25maWcuYWN0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMyBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuXG48ZGl2IGNsYXNzPVwibm90aWZpY2F0aW9uc1wiIHdpZGdldC1ib2R5PlxuXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFvcHRpb25zXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwLTMgd2lkZ2V0LW1lc3NhZ2VcIj5cbiAgICAgICAgICAgIDxzY3JtLWxhYmVsIGxhYmVsS2V5PVwiTEJMX0JBRF9DT05GSUdcIj48L3Njcm0tbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm9wdGlvbnNcIj5cbiAgICAgICAgPHNjcm0tcmVjb3JkLXRocmVhZCBbY29uZmlnXT1cInJlY29yZFRocmVhZENvbmZpZ1wiPjwvc2NybS1yZWNvcmQtdGhyZWFkPlxuICAgIDwvbmctY29udGFpbmVyPlxuXG48L2Rpdj5cbiJdfQ==