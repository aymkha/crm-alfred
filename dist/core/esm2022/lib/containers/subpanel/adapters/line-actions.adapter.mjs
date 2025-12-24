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
import { combineLatestWith, of } from 'rxjs';
import { map, shareReplay, take } from 'rxjs/operators';
import { BaseRecordActionsAdapter } from '../../../services/actions/base-record-action.adapter';
import * as i0 from "@angular/core";
import * as i1 from "../store/subpanel/subpanel.store";
import * as i2 from "../line-actions/line-action-manager.service";
import * as i3 from "../../../services/process/processes/async-action/async-action";
import * as i4 from "../../../services/message/message.service";
import * as i5 from "../../../services/modals/confirmation-modal.service";
import * as i6 from "../../../store/language/language.store";
import * as i7 from "../../../services/modals/select-modal.service";
import * as i8 from "../../../store/metadata/metadata.store.service";
class SubpanelLineActionsAdapter extends BaseRecordActionsAdapter {
    store;
    actionManager;
    asyncActionService;
    message;
    confirmation;
    language;
    selectModalService;
    metadata;
    constructor(store, actionManager, asyncActionService, message, confirmation, language, selectModalService, metadata) {
        super(actionManager, asyncActionService, message, confirmation, language, selectModalService, metadata);
        this.store = store;
        this.actionManager = actionManager;
        this.asyncActionService = asyncActionService;
        this.message = message;
        this.confirmation = confirmation;
        this.language = language;
        this.selectModalService = selectModalService;
        this.metadata = metadata;
    }
    getActions(context = null) {
        return this.store.metadata$.pipe(map(metadata => metadata.lineActions)).pipe(combineLatestWith(of('list').pipe(shareReplay())), map(([actions, mode]) => {
            return this.parseModeActions(actions, mode, context);
        }));
    }
    buildActionData(action, context) {
        return {
            record: (context && context.record) || null,
            store: this.store,
            action: action
        };
    }
    getMode() {
        return 'list';
    }
    getModuleName(context) {
        return this.store.metadata.module;
    }
    reload(action, process, context) {
        this.store.load(false).pipe(take(1)).subscribe();
        this.store.loadAllStatistics(false).pipe(take(1)).subscribe();
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
        const metadata = this.store.metadata;
        const collectionList = metadata.collection_list || null;
        const module = (context && context.module) || moduleName;
        let linkField = metadata.get_subpanel_data;
        if (collectionList && collectionList[module] && collectionList[module].get_subpanel_data) {
            linkField = collectionList[module].get_subpanel_data;
        }
        if (linkField && action && action.params && action.params.linkFieldMapping) {
            Object.keys(action.params.linkFieldMapping).some(key => {
                if (linkField.includes(key)) {
                    linkField = action.params.linkFieldMapping[key];
                    return true;
                }
            });
        }
        return {
            action: actionName,
            module: moduleName,
            id: (context && context.record && context.record.id) || '',
            payload: {
                baseModule: this.store.parentModule,
                baseRecordId: this.store.parentId,
                linkField,
                recordModule: module,
                relateModule: this.store.metadata.module,
                relateRecordId: (context && context.record && context.record.id) || '',
            }
        };
    }
    static ɵfac = function SubpanelLineActionsAdapter_Factory(t) { return new (t || SubpanelLineActionsAdapter)(i0.ɵɵinject(i1.SubpanelStore), i0.ɵɵinject(i2.SubpanelLineActionManager), i0.ɵɵinject(i3.AsyncActionService), i0.ɵɵinject(i4.MessageService), i0.ɵɵinject(i5.ConfirmationModalService), i0.ɵɵinject(i6.LanguageStore), i0.ɵɵinject(i7.SelectModalService), i0.ɵɵinject(i8.MetadataStore)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SubpanelLineActionsAdapter, factory: SubpanelLineActionsAdapter.ɵfac, providedIn: 'root' });
}
export { SubpanelLineActionsAdapter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SubpanelLineActionsAdapter, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.SubpanelStore }, { type: i2.SubpanelLineActionManager }, { type: i3.AsyncActionService }, { type: i4.MessageService }, { type: i5.ConfirmationModalService }, { type: i6.LanguageStore }, { type: i7.SelectModalService }, { type: i8.MetadataStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1hY3Rpb25zLmFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9zdWJwYW5lbC9hZGFwdGVycy9saW5lLWFjdGlvbnMuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUMsaUJBQWlCLEVBQWMsRUFBRSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxHQUFHLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBTXRELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLHNEQUFzRCxDQUFDOzs7Ozs7Ozs7O0FBTzlGLE1BR2EsMEJBQTJCLFNBQVEsd0JBQWdEO0lBRzlFO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFSZCxZQUNjLEtBQW9CLEVBQ3BCLGFBQXdDLEVBQ3hDLGtCQUFzQyxFQUN0QyxPQUF1QixFQUN2QixZQUFzQyxFQUN0QyxRQUF1QixFQUN2QixrQkFBc0MsRUFDdEMsUUFBdUI7UUFFakMsS0FBSyxDQUFDLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxRQUFRLENBQUMsQ0FBQTtRQVQ3RixVQUFLLEdBQUwsS0FBSyxDQUFlO1FBQ3BCLGtCQUFhLEdBQWIsYUFBYSxDQUEyQjtRQUN4Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLGlCQUFZLEdBQVosWUFBWSxDQUEwQjtRQUN0QyxhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLHVCQUFrQixHQUFsQixrQkFBa0Is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LFVBQVU7WUFDbEIsRUFBRSxFQUFFLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFO1lBQzFELE9BQU8sRUFBRTtnQkFDTCxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZO2dCQUNuQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO2dCQUNqQyxTQUFTO2dCQUNULFlBQVksRUFBRSxNQUFNO2dCQUNwQixZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTTtnQkFDeEMsY0FBYyxFQUFFLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFO2FBQ3pFO1NBQ2dCLENBQUM7SUFDMUIsQ0FBQztvRkExRlEsMEJBQTBCO2dFQUExQiwwQkFBMEIsV0FBMUIsMEJBQTBCLG1CQUZ2QixNQUFNOztTQUVULDBCQUEwQjt1RkFBMUIsMEJBQTBCO2NBSHRDLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWN0aW9uLCBBY3Rpb25Db250ZXh0LCBWaWV3TW9kZX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7Y29tYmluZUxhdGVzdFdpdGgsIE9ic2VydmFibGUsIG9mfSBmcm9tICdyeGpzJztcbmltcG9ydCB7bWFwLCBzaGFyZVJlcGxheSwgdGFrZX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtBc3luY0FjdGlvbklucHV0LCBBc3luY0FjdGlvblNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3Byb2Nlc3MvcHJvY2Vzc2VzL2FzeW5jLWFjdGlvbi9hc3luYy1hY3Rpb24nO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbWVzc2FnZS9tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHtQcm9jZXNzfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9wcm9jZXNzL3Byb2Nlc3Muc2VydmljZSc7XG5pbXBvcnQge0NvbmZpcm1hdGlvbk1vZGFsU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbW9kYWxzL2NvbmZpcm1hdGlvbi1tb2RhbC5zZXJ2aWNlJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtCYXNlUmVjb3JkQWN0aW9uc0FkYXB0ZXJ9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2FjdGlvbnMvYmFzZS1yZWNvcmQtYWN0aW9uLmFkYXB0ZXInO1xuaW1wb3J0IHtTdWJwYW5lbExpbmVBY3Rpb25EYXRhfSBmcm9tICcuLi9saW5lLWFjdGlvbnMvbGluZS5hY3Rpb24nO1xuaW1wb3J0IHtTdWJwYW5lbFN0b3JlfSBmcm9tICcuLi9zdG9yZS9zdWJwYW5lbC9zdWJwYW5lbC5zdG9yZSc7XG5pbXBvcnQge1N1YnBhbmVsTGluZUFjdGlvbk1hbmFnZXJ9IGZyb20gJy4uL2xpbmUtYWN0aW9ucy9saW5lLWFjdGlvbi1tYW5hZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHtTZWxlY3RNb2RhbFNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9tb2RhbHMvc2VsZWN0LW1vZGFsLnNlcnZpY2VcIjtcbmltcG9ydCB7TWV0YWRhdGFTdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvbWV0YWRhdGEvbWV0YWRhdGEuc3RvcmUuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFN1YnBhbmVsTGluZUFjdGlvbnNBZGFwdGVyIGV4dGVuZHMgQmFzZVJlY29yZEFjdGlvbnNBZGFwdGVyPFN1YnBhbmVsTGluZUFjdGlvbkRhdGE+IHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgc3RvcmU6IFN1YnBhbmVsU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBhY3Rpb25NYW5hZ2VyOiBTdWJwYW5lbExpbmVBY3Rpb25NYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgYXN5bmNBY3Rpb25TZXJ2aWNlOiBBc3luY0FjdGlvblNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBtZXNzYWdlOiBNZXNzYWdlU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGNvbmZpcm1hdGlvbjogQ29uZmlybWF0aW9uTW9kYWxTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBzZWxlY3RNb2RhbFNlcnZpY2U6IFNlbGVjdE1vZGFsU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIG1ldGFkYXRhOiBNZXRhZGF0YVN0b3JlXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKGFjdGlvbk1hbmFnZXIsIGFzeW5jQWN0aW9uU2VydmljZSwgbWVzc2FnZSwgY29uZmlybWF0aW9uLCBsYW5ndWFnZSwgc2VsZWN0TW9kYWxTZXJ2aWNlLCBtZXRhZGF0YSlcbiAgICB9XG5cbiAgICBnZXRBY3Rpb25zKGNvbnRleHQ6IEFjdGlvbkNvbnRleHQgPSBudWxsKTogT2JzZXJ2YWJsZTxBY3Rpb25bXT4ge1xuXG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlLm1ldGFkYXRhJC5waXBlKG1hcChtZXRhZGF0YSA9PiBtZXRhZGF0YS5saW5lQWN0aW9ucykpLnBpcGUoXG4gICAgICAgICAgICBjb21iaW5lTGF0ZXN0V2l0aChvZignbGlzdCcgYXMgVmlld01vZGUpLnBpcGUoc2hhcmVSZXBsYXkoKSkpLFxuICAgICAgICAgICAgbWFwKChbYWN0aW9ucywgbW9kZV06IFtBY3Rpb25bXSwgVmlld01vZGVdKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VNb2RlQWN0aW9ucyhhY3Rpb25zLCBtb2RlLCBjb250ZXh0KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgYnVpbGRBY3Rpb25EYXRhKGFjdGlvbjogQWN0aW9uLCBjb250ZXh0PzogQWN0aW9uQ29udGV4dCk6IFN1YnBhbmVsTGluZUFjdGlvbkRhdGEge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVjb3JkOiAoY29udGV4dCAmJiBjb250ZXh0LnJlY29yZCkgfHwgbnVsbCxcbiAgICAgICAgICAgIHN0b3JlOiB0aGlzLnN0b3JlLFxuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb25cbiAgICAgICAgfSBhcyBTdWJwYW5lbExpbmVBY3Rpb25EYXRhO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRNb2RlKCk6IFZpZXdNb2RlIHtcbiAgICAgICAgcmV0dXJuICdsaXN0JyBhcyBWaWV3TW9kZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0TW9kdWxlTmFtZShjb250ZXh0PzogQWN0aW9uQ29udGV4dCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlLm1ldGFkYXRhLm1vZHVsZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVsb2FkKGFjdGlvbjogQWN0aW9uLCBwcm9jZXNzOiBQcm9jZXNzLCBjb250ZXh0PzogQWN0aW9uQ29udGV4dCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0b3JlLmxvYWQoZmFsc2UpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMuc3RvcmUubG9hZEFsbFN0YXRpc3RpY3MoZmFsc2UpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgYmFja2VuZCBwcm9jZXNzIGlucHV0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gYWN0aW9uXG4gICAgICogQHBhcmFtIGFjdGlvbk5hbWVcbiAgICAgKiBAcGFyYW0gbW9kdWxlTmFtZVxuICAgICAqIEBwYXJhbSBjb250ZXh0XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGJ1aWxkQWN0aW9uSW5wdXQoYWN0aW9uOiBBY3Rpb24sIGFjdGlvbk5hbWU6IHN0cmluZywgbW9kdWxlTmFtZTogc3RyaW5nLCBjb250ZXh0OiBBY3Rpb25Db250ZXh0ID0gbnVsbCk6IEFzeW5jQWN0aW9uSW5wdXQge1xuXG4gICAgICAgIGNvbnN0IG1ldGFkYXRhID0gdGhpcy5zdG9yZS5tZXRhZGF0YTtcbiAgICAgICAgY29uc3QgY29sbGVjdGlvbkxpc3QgPSBtZXRhZGF0YS5jb2xsZWN0aW9uX2xpc3QgfHwgbnVsbDtcblxuICAgICAgICBjb25zdCBtb2R1bGUgPSAoY29udGV4dCAmJiBjb250ZXh0Lm1vZHVsZSkgfHwgbW9kdWxlTmFtZTtcblxuICAgICAgICBsZXQgbGlua0ZpZWxkOiBzdHJpbmcgPSBtZXRhZGF0YS5nZXRfc3VicGFuZWxfZGF0YTtcblxuICAgICAgICBpZihjb2xsZWN0aW9uTGlzdCAmJiBjb2xsZWN0aW9uTGlzdFttb2R1bGVdICYmIGNvbGxlY3Rpb25MaXN0W21vZHVsZV0uZ2V0X3N1YnBhbmVsX2RhdGEpe1xuICAgICAgICAgICAgbGlua0ZpZWxkID0gY29sbGVjdGlvbkxpc3RbbW9kdWxlXS5nZXRfc3VicGFuZWxfZGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGxpbmtGaWVsZCAmJiBhY3Rpb24gJiYgYWN0aW9uLnBhcmFtcyAmJiBhY3Rpb24ucGFyYW1zLmxpbmtGaWVsZE1hcHBpbmcpe1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoYWN0aW9uLnBhcmFtcy5saW5rRmllbGRNYXBwaW5nKS5zb21lKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGxpbmtGaWVsZC5pbmNsdWRlcyhrZXkpKXtcbiAgICAgICAgICAgICAgICAgICAgbGlua0ZpZWxkID0gYWN0aW9uLnBhcmFtcy5saW5rRmllbGRNYXBwaW5nW2tleV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb25OYW1lLFxuICAgICAgICAgICAgbW9kdWxlOiBtb2R1bGVOYW1lLFxuICAgICAgICAgICAgaWQ6IChjb250ZXh0ICYmIGNvbnRleHQucmVjb3JkICYmIGNvbnRleHQucmVjb3JkLmlkKSB8fCAnJyxcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICBiYXNlTW9kdWxlOiB0aGlzLnN0b3JlLnBhcmVudE1vZHVsZSxcbiAgICAgICAgICAgICAgICBiYXNlUmVjb3JkSWQ6IHRoaXMuc3RvcmUucGFyZW50SWQsXG4gICAgICAgICAgICAgICAgbGlua0ZpZWxkLFxuICAgICAgICAgICAgICAgIHJlY29yZE1vZHVsZTogbW9kdWxlLFxuICAgICAgICAgICAgICAgIHJlbGF0ZU1vZHVsZTogdGhpcy5zdG9yZS5tZXRhZGF0YS5tb2R1bGUsXG4gICAgICAgICAgICAgICAgcmVsYXRlUmVjb3JkSWQ6IChjb250ZXh0ICYmIGNvbnRleHQucmVjb3JkICYmIGNvbnRleHQucmVjb3JkLmlkKSB8fCAnJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBhcyBBc3luY0FjdGlvbklucHV0O1xuICAgIH1cbn1cbiJdfQ==