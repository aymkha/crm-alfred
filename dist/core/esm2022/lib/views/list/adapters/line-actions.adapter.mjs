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
import { map, shareReplay } from 'rxjs/operators';
import { BaseLineActionsAdapter } from '../../../components/table/adapters/base-line-actions.adapter';
import * as i0 from "@angular/core";
import * as i1 from "../store/list-view/list-view.store";
import * as i2 from "../../../components/table/line-actions/line-action-manager.service";
import * as i3 from "../../../services/process/processes/async-action/async-action";
import * as i4 from "../../../services/message/message.service";
import * as i5 from "../../../services/modals/confirmation-modal.service";
import * as i6 from "../../../store/language/language.store";
import * as i7 from "../../../services/modals/select-modal.service";
import * as i8 from "../../../store/metadata/metadata.store.service";
class LineActionsAdapter extends BaseLineActionsAdapter {
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
        return this.store.lineActions$.pipe(combineLatestWith(of('list').pipe(shareReplay())), map(([lineActions, mode]) => {
            return this.parseModeActions(lineActions, mode, context);
        }));
    }
    getModuleName(record) {
        return this.store.getModuleName();
    }
    reload(action, process, record) {
        this.store.recordList.clearSelection();
        this.store.recordList.resetPagination();
    }
    getMode() {
        return 'list';
    }
    static ɵfac = function LineActionsAdapter_Factory(t) { return new (t || LineActionsAdapter)(i0.ɵɵinject(i1.ListViewStore), i0.ɵɵinject(i2.LineActionActionManager), i0.ɵɵinject(i3.AsyncActionService), i0.ɵɵinject(i4.MessageService), i0.ɵɵinject(i5.ConfirmationModalService), i0.ɵɵinject(i6.LanguageStore), i0.ɵɵinject(i7.SelectModalService), i0.ɵɵinject(i8.MetadataStore)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LineActionsAdapter, factory: LineActionsAdapter.ɵfac });
}
export { LineActionsAdapter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LineActionsAdapter, [{
        type: Injectable
    }], function () { return [{ type: i1.ListViewStore }, { type: i2.LineActionActionManager }, { type: i3.AsyncActionService }, { type: i4.MessageService }, { type: i5.ConfirmationModalService }, { type: i6.LanguageStore }, { type: i7.SelectModalService }, { type: i8.MetadataStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1hY3Rpb25zLmFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvbGlzdC9hZGFwdGVycy9saW5lLWFjdGlvbnMuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUMsaUJBQWlCLEVBQWMsRUFBRSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxHQUFHLEVBQUUsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFNaEQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sOERBQThELENBQUM7Ozs7Ozs7Ozs7QUFNcEcsTUFDYSxrQkFBbUIsU0FBUSxzQkFBc0I7SUFHNUM7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQVJkLFlBQ2MsS0FBb0IsRUFDcEIsYUFBc0MsRUFDdEMsa0JBQXNDLEVBQ3RDLE9BQXVCLEVBQ3ZCLFlBQXNDLEVBQ3RDLFFBQXVCLEVBQ3ZCLGtCQUFzQyxFQUN0QyxRQUF1QjtRQUVqQyxLQUFLLENBQ0QsYUFBYSxFQUNiLGtCQUFrQixFQUNsQixPQUFPLEVBQ1AsWUFBWSxFQUNaLFFBQVEsRUFDUixrQkFBa0IsRUFDbEIsUUFBUSxDQUNYLENBQUM7UUFqQlEsVUFBSyxHQUFMLEtBQUssQ0FBZTtRQUNwQixrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7UUFDdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixpQkFBWSxHQUFaLFlBQVksQ0FBMEI7UUFDdEMsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQUN2Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLGFBQVEsR0FBUixRQUFRLENBQWU7SUFXckMsQ0FBQztJQUVELFVBQVUsQ0FBQyxVQUF5QixJQUFJO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUMvQixpQkFBaUIsQ0FDYixFQUFFLENBQUMsTUFBa0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUM3QyxFQUNELEdBQUcsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBdUIsRUFBRSxFQUFFO1lBQzlDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDN0QsQ0FBQyxDQUFDLENBQ0wsQ0FBQztJQUNOLENBQUM7SUFFUyxhQUFhLENBQUMsTUFBZTtRQUNuQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVTLE1BQU0sQ0FBQyxNQUFjLEVBQUUsT0FBZ0IsRUFBRSxNQUFlO1FBQzlELElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzVDLENBQUM7SUFFUyxPQUFPO1FBQ2IsT0FBTyxNQUFrQixDQUFDO0lBQzlCLENBQUM7NEVBN0NRLGtCQUFrQjtnRUFBbEIsa0JBQWtCLFdBQWxCLGtCQUFrQjs7U0FBbEIsa0JBQWtCO3VGQUFsQixrQkFBa0I7Y0FEOUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWN0aW9uLCBBY3Rpb25Db250ZXh0LCBSZWNvcmQsIFZpZXdNb2RlfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtjb21iaW5lTGF0ZXN0V2l0aCwgT2JzZXJ2YWJsZSwgb2Z9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHttYXAsIHNoYXJlUmVwbGF5fSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0FzeW5jQWN0aW9uU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvcHJvY2Vzcy9wcm9jZXNzZXMvYXN5bmMtYWN0aW9uL2FzeW5jLWFjdGlvbic7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQge1Byb2Nlc3N9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3Byb2Nlc3MvcHJvY2Vzcy5zZXJ2aWNlJztcbmltcG9ydCB7TGlzdFZpZXdTdG9yZX0gZnJvbSAnLi4vc3RvcmUvbGlzdC12aWV3L2xpc3Qtdmlldy5zdG9yZSc7XG5pbXBvcnQge0xpbmVBY3Rpb25BY3Rpb25NYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3RhYmxlL2xpbmUtYWN0aW9ucy9saW5lLWFjdGlvbi1tYW5hZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHtCYXNlTGluZUFjdGlvbnNBZGFwdGVyfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3RhYmxlL2FkYXB0ZXJzL2Jhc2UtbGluZS1hY3Rpb25zLmFkYXB0ZXInO1xuaW1wb3J0IHtDb25maXJtYXRpb25Nb2RhbFNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL21vZGFscy9jb25maXJtYXRpb24tbW9kYWwuc2VydmljZSc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7U2VsZWN0TW9kYWxTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9tb2RhbHMvc2VsZWN0LW1vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHtNZXRhZGF0YVN0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9tZXRhZGF0YS9tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExpbmVBY3Rpb25zQWRhcHRlciBleHRlbmRzIEJhc2VMaW5lQWN0aW9uc0FkYXB0ZXIge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBzdG9yZTogTGlzdFZpZXdTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGFjdGlvbk1hbmFnZXI6IExpbmVBY3Rpb25BY3Rpb25NYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgYXN5bmNBY3Rpb25TZXJ2aWNlOiBBc3luY0FjdGlvblNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBtZXNzYWdlOiBNZXNzYWdlU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGNvbmZpcm1hdGlvbjogQ29uZmlybWF0aW9uTW9kYWxTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBzZWxlY3RNb2RhbFNlcnZpY2U6IFNlbGVjdE1vZGFsU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIG1ldGFkYXRhOiBNZXRhZGF0YVN0b3JlXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgYWN0aW9uTWFuYWdlcixcbiAgICAgICAgICAgIGFzeW5jQWN0aW9uU2VydmljZSxcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICBjb25maXJtYXRpb24sXG4gICAgICAgICAgICBsYW5ndWFnZSxcbiAgICAgICAgICAgIHNlbGVjdE1vZGFsU2VydmljZSxcbiAgICAgICAgICAgIG1ldGFkYXRhXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0QWN0aW9ucyhjb250ZXh0OiBBY3Rpb25Db250ZXh0ID0gbnVsbCk6IE9ic2VydmFibGU8QWN0aW9uW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUubGluZUFjdGlvbnMkLnBpcGUoXG4gICAgICAgICAgICBjb21iaW5lTGF0ZXN0V2l0aChcbiAgICAgICAgICAgICAgICBvZignbGlzdCcgYXMgVmlld01vZGUpLnBpcGUoc2hhcmVSZXBsYXkoKSlcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBtYXAoKFtsaW5lQWN0aW9ucywgbW9kZV06IFtBY3Rpb25bXSwgVmlld01vZGVdKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VNb2RlQWN0aW9ucyhsaW5lQWN0aW9ucywgbW9kZSwgY29udGV4dCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRNb2R1bGVOYW1lKHJlY29yZD86IFJlY29yZCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlLmdldE1vZHVsZU5hbWUoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVsb2FkKGFjdGlvbjogQWN0aW9uLCBwcm9jZXNzOiBQcm9jZXNzLCByZWNvcmQ/OiBSZWNvcmQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdG9yZS5yZWNvcmRMaXN0LmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgICAgIHRoaXMuc3RvcmUucmVjb3JkTGlzdC5yZXNldFBhZ2luYXRpb24oKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0TW9kZSgpOiBWaWV3TW9kZSB7XG4gICAgICAgIHJldHVybiAnbGlzdCcgYXMgVmlld01vZGU7XG4gICAgfVxufVxuIl19