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
import { BaseRecordActionsAdapter } from '../../../services/actions/base-record-action.adapter';
import * as i0 from "@angular/core";
import * as i1 from "../line-actions/line-action-manager.service";
import * as i2 from "../../../services/process/processes/async-action/async-action";
import * as i3 from "../../../services/message/message.service";
import * as i4 from "../../../services/modals/confirmation-modal.service";
import * as i5 from "../../../store/language/language.store";
import * as i6 from "../../../services/modals/select-modal.service";
import * as i7 from "../../../store/metadata/metadata.store.service";
class BaseLineActionsAdapter extends BaseRecordActionsAdapter {
    actionManager;
    asyncActionService;
    message;
    confirmation;
    language;
    selectModalService;
    metadata;
    constructor(actionManager, asyncActionService, message, confirmation, language, selectModalService, metadata) {
        super(actionManager, asyncActionService, message, confirmation, language, selectModalService, metadata);
        this.actionManager = actionManager;
        this.asyncActionService = asyncActionService;
        this.message = message;
        this.confirmation = confirmation;
        this.language = language;
        this.selectModalService = selectModalService;
        this.metadata = metadata;
    }
    buildActionData(action, context) {
        return {
            record: (context && context.record) || null,
            action: action
        };
    }
    static ɵfac = function BaseLineActionsAdapter_Factory(t) { return new (t || BaseLineActionsAdapter)(i0.ɵɵinject(i1.LineActionActionManager), i0.ɵɵinject(i2.AsyncActionService), i0.ɵɵinject(i3.MessageService), i0.ɵɵinject(i4.ConfirmationModalService), i0.ɵɵinject(i5.LanguageStore), i0.ɵɵinject(i6.SelectModalService), i0.ɵɵinject(i7.MetadataStore)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: BaseLineActionsAdapter, factory: BaseLineActionsAdapter.ɵfac });
}
export { BaseLineActionsAdapter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseLineActionsAdapter, [{
        type: Injectable
    }], function () { return [{ type: i1.LineActionActionManager }, { type: i2.AsyncActionService }, { type: i3.MessageService }, { type: i4.ConfirmationModalService }, { type: i5.LanguageStore }, { type: i6.SelectModalService }, { type: i7.MetadataStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1saW5lLWFjdGlvbnMuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL3RhYmxlL2FkYXB0ZXJzL2Jhc2UtbGluZS1hY3Rpb25zLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFPekMsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sc0RBQXNELENBQUM7Ozs7Ozs7OztBQUs5RixNQUNzQixzQkFBdUIsU0FBUSx3QkFBd0M7SUFHM0U7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFQZCxZQUNjLGFBQXNDLEVBQ3RDLGtCQUFzQyxFQUN0QyxPQUF1QixFQUN2QixZQUFzQyxFQUN0QyxRQUF1QixFQUN2QixrQkFBc0MsRUFDdEMsUUFBdUI7UUFFakMsS0FBSyxDQUFDLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxRQUFRLENBQUMsQ0FBQTtRQVI3RixrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7UUFDdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixpQkFBWSxHQUFaLFlBQVksQ0FBMEI7UUFDdEMsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQUN2Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLGFBQVEsR0FBUixRQUFRLENBQWU7SUFHckMsQ0FBQztJQUVTLGVBQWUsQ0FBQyxNQUFjLEVBQUUsT0FBdUI7UUFDN0QsT0FBTztZQUNILE1BQU0sRUFBRSxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSTtZQUMzQyxNQUFNLEVBQUUsTUFBTTtTQUNDLENBQUM7SUFDeEIsQ0FBQztnRkFuQmlCLHNCQUFzQjtnRUFBdEIsc0JBQXNCLFdBQXRCLHNCQUFzQjs7U0FBdEIsc0JBQXNCO3VGQUF0QixzQkFBc0I7Y0FEM0MsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWN0aW9uLCBBY3Rpb25Db250ZXh0fSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtBc3luY0FjdGlvblNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3Byb2Nlc3MvcHJvY2Vzc2VzL2FzeW5jLWFjdGlvbi9hc3luYy1hY3Rpb24nO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbWVzc2FnZS9tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHtMaW5lQWN0aW9uQWN0aW9uTWFuYWdlcn0gZnJvbSAnLi4vbGluZS1hY3Rpb25zL2xpbmUtYWN0aW9uLW1hbmFnZXIuc2VydmljZSc7XG5pbXBvcnQge0xpbmVBY3Rpb25EYXRhfSBmcm9tICcuLi9saW5lLWFjdGlvbnMvbGluZS5hY3Rpb24nO1xuaW1wb3J0IHtDb25maXJtYXRpb25Nb2RhbFNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL21vZGFscy9jb25maXJtYXRpb24tbW9kYWwuc2VydmljZSc7XG5pbXBvcnQge0Jhc2VSZWNvcmRBY3Rpb25zQWRhcHRlcn0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvYWN0aW9ucy9iYXNlLXJlY29yZC1hY3Rpb24uYWRhcHRlcic7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7U2VsZWN0TW9kYWxTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9tb2RhbHMvc2VsZWN0LW1vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHtNZXRhZGF0YVN0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9tZXRhZGF0YS9tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VMaW5lQWN0aW9uc0FkYXB0ZXIgZXh0ZW5kcyBCYXNlUmVjb3JkQWN0aW9uc0FkYXB0ZXI8TGluZUFjdGlvbkRhdGE+IHtcblxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGFjdGlvbk1hbmFnZXI6IExpbmVBY3Rpb25BY3Rpb25NYW5hZ2VyLFxuICAgICAgICBwcm90ZWN0ZWQgYXN5bmNBY3Rpb25TZXJ2aWNlOiBBc3luY0FjdGlvblNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBtZXNzYWdlOiBNZXNzYWdlU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGNvbmZpcm1hdGlvbjogQ29uZmlybWF0aW9uTW9kYWxTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBzZWxlY3RNb2RhbFNlcnZpY2U6IFNlbGVjdE1vZGFsU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIG1ldGFkYXRhOiBNZXRhZGF0YVN0b3JlXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKGFjdGlvbk1hbmFnZXIsIGFzeW5jQWN0aW9uU2VydmljZSwgbWVzc2FnZSwgY29uZmlybWF0aW9uLCBsYW5ndWFnZSwgc2VsZWN0TW9kYWxTZXJ2aWNlLCBtZXRhZGF0YSlcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYnVpbGRBY3Rpb25EYXRhKGFjdGlvbjogQWN0aW9uLCBjb250ZXh0PzogQWN0aW9uQ29udGV4dCk6IExpbmVBY3Rpb25EYXRhIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlY29yZDogKGNvbnRleHQgJiYgY29udGV4dC5yZWNvcmQpIHx8IG51bGwsXG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvblxuICAgICAgICB9IGFzIExpbmVBY3Rpb25EYXRhO1xuICAgIH1cbn1cbiJdfQ==