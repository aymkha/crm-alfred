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
import { of } from 'rxjs';
import { catchError, take, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../process.service";
import * as i2 from "../../../../store/app-state/app-state.store";
import * as i3 from "../../../message/message.service";
import * as i4 from "./actions/redirect/redirect.async-action";
import * as i5 from "./actions/export/export.async-action";
import * as i6 from "./actions/noop/noop.async-action";
import * as i7 from "./actions/changelog/changelog.async-action";
class AsyncActionService {
    processService;
    appStateStore;
    message;
    redirectAction;
    exportAction;
    noopAction;
    changelogAction;
    actions = {};
    constructor(processService, appStateStore, message, redirectAction, exportAction, noopAction, changelogAction) {
        this.processService = processService;
        this.appStateStore = appStateStore;
        this.message = message;
        this.redirectAction = redirectAction;
        this.exportAction = exportAction;
        this.noopAction = noopAction;
        this.changelogAction = changelogAction;
        this.registerHandler(redirectAction);
        this.registerHandler(exportAction);
        this.registerHandler(noopAction);
        this.registerHandler(changelogAction);
    }
    registerHandler(handler) {
        this.actions[handler.key] = handler;
    }
    /**
     * Send action request
     *
     * @param {string} actionName to submit
     * @param {string} data to send
     * @param {string} presetHandlerKey to use
     * @returns {object} Observable<Process>
     */
    run(actionName, data, presetHandlerKey = null) {
        const options = {
            ...data
        };
        this.appStateStore.updateLoading(actionName, true);
        return this.processService
            .submit(actionName, options)
            .pipe(take(1), tap((process) => {
            this.appStateStore.updateLoading(actionName, false);
            let handler = 'addSuccessMessageByKey';
            if (process.status === 'error') {
                handler = 'addDangerMessageByKey';
            }
            if (process.messages) {
                process.messages.forEach(message => {
                    if (!!message) {
                        this.message[handler](message);
                    }
                });
            }
            if (process.status === 'error') {
                return;
            }
            const actionHandlerKey = presetHandlerKey || (process.data && process.data.handler) || null;
            if (!actionHandlerKey) {
                return;
            }
            const actionHandler = this.actions[actionHandlerKey];
            if (!actionHandler) {
                this.message.addDangerMessageByKey('LBL_MISSING_HANDLER');
                return;
            }
            actionHandler.run(process.data.params);
        }), catchError((err) => {
            const errorMessage = err?.message ?? '';
            this.message.error('[AsyncActionService] run error', err);
            if (errorMessage === 'Access Denied.') {
                this.appStateStore.updateLoading(actionName, false);
                return of(null);
            }
            if (errorMessage) {
                this.message.addDangerMessage(errorMessage);
            }
            else {
                this.message.addDangerMessageByKey('LBL_ACTION_ERROR');
            }
            this.appStateStore.updateLoading(actionName, false);
            return of(null);
        }));
    }
    static ɵfac = function AsyncActionService_Factory(t) { return new (t || AsyncActionService)(i0.ɵɵinject(i1.ProcessService), i0.ɵɵinject(i2.AppStateStore), i0.ɵɵinject(i3.MessageService), i0.ɵɵinject(i4.RedirectAsyncAction), i0.ɵɵinject(i5.ExportAsyncAction), i0.ɵɵinject(i6.NoopAsyncAction), i0.ɵɵinject(i7.ChangelogAsyncAction)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AsyncActionService, factory: AsyncActionService.ɵfac, providedIn: 'root' });
}
export { AsyncActionService };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AsyncActionService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.ProcessService }, { type: i2.AppStateStore }, { type: i3.MessageService }, { type: i4.RedirectAsyncAction }, { type: i5.ExportAsyncAction }, { type: i6.NoopAsyncAction }, { type: i7.ChangelogAsyncAction }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN5bmMtYWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3NlcnZpY2VzL3Byb2Nlc3MvcHJvY2Vzc2VzL2FzeW5jLWFjdGlvbi9hc3luYy1hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFhLEVBQUUsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7O0FBeUJyRCxNQUdhLGtCQUFrQjtJQUtmO0lBQ0E7SUFDRTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBVGQsT0FBTyxHQUEwQyxFQUFFLENBQUM7SUFFcEQsWUFDWSxjQUE4QixFQUM5QixhQUE0QixFQUMxQixPQUF1QixFQUN2QixjQUFtQyxFQUNuQyxZQUErQixFQUMvQixVQUEyQixFQUMzQixlQUFxQztRQU52QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDMUIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsbUJBQWMsR0FBZCxjQUFjLENBQXFCO1FBQ25DLGlCQUFZLEdBQVosWUFBWSxDQUFtQjtRQUMvQixlQUFVLEdBQVYsVUFBVSxDQUFpQjtRQUMzQixvQkFBZSxHQUFmLGVBQWUsQ0FBc0I7UUFFL0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMs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QWtCO2dFQUFsQixrQkFBa0IsV0FBbEIsa0JBQWtCLG1CQUZmLE1BQU07O1NBRVQsa0JBQWtCO3VGQUFsQixrQkFBa0I7Y0FIOUIsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBvZn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2NhdGNoRXJyb3IsIHRha2UsIHRhcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtQcm9jZXNzLCBQcm9jZXNzU2VydmljZX0gZnJvbSAnLi4vLi4vcHJvY2Vzcy5zZXJ2aWNlJztcbmltcG9ydCB7QXBwU3RhdGVTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvYXBwLXN0YXRlL2FwcC1zdGF0ZS5zdG9yZSc7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQge0FzeW5jQWN0aW9uSGFuZGxlcn0gZnJvbSAnLi9hc3luYy1hY3Rpb24ubW9kZWwnO1xuaW1wb3J0IHtSZWNvcmQsIFNlYXJjaENyaXRlcmlhLCBTb3J0aW5nU2VsZWN0aW9ufSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtSZWRpcmVjdEFzeW5jQWN0aW9ufSBmcm9tICcuL2FjdGlvbnMvcmVkaXJlY3QvcmVkaXJlY3QuYXN5bmMtYWN0aW9uJztcbmltcG9ydCB7RXhwb3J0QXN5bmNBY3Rpb259IGZyb20gJy4vYWN0aW9ucy9leHBvcnQvZXhwb3J0LmFzeW5jLWFjdGlvbic7XG5pbXBvcnQge05vb3BBc3luY0FjdGlvbn0gZnJvbSAnLi9hY3Rpb25zL25vb3Avbm9vcC5hc3luYy1hY3Rpb24nO1xuaW1wb3J0IHtDaGFuZ2Vsb2dBc3luY0FjdGlvbn0gZnJvbSAnLi9hY3Rpb25zL2NoYW5nZWxvZy9jaGFuZ2Vsb2cuYXN5bmMtYWN0aW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBBc3luY0FjdGlvbklucHV0IHtcbiAgICBhY3Rpb24/OiBzdHJpbmc7XG4gICAgbW9kdWxlPzogc3RyaW5nO1xuICAgIGNyaXRlcmlhPzogU2VhcmNoQ3JpdGVyaWE7XG4gICAgc29ydD86IFNvcnRpbmdTZWxlY3Rpb247XG4gICAgaWRzPzogc3RyaW5nW107XG4gICAgaWQ/OiBzdHJpbmc7XG4gICAgcGF5bG9hZD86IHsgW2tleTogc3RyaW5nXTogYW55IH07XG4gICAgbW9kYWxSZWNvcmQ/OiBSZWNvcmQ7XG4gICAgcmVjb3JkPzogUmVjb3JkO1xuXG4gICAgW2tleTogc3RyaW5nXTogYW55XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEFzeW5jQWN0aW9uU2VydmljZSB7XG5cbiAgICBhY3Rpb25zOiB7IFtrZXk6IHN0cmluZ106IEFzeW5jQWN0aW9uSGFuZGxlciB9ID0ge307XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBwcm9jZXNzU2VydmljZTogUHJvY2Vzc1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgYXBwU3RhdGVTdG9yZTogQXBwU3RhdGVTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIG1lc3NhZ2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgcmVkaXJlY3RBY3Rpb246IFJlZGlyZWN0QXN5bmNBY3Rpb24sXG4gICAgICAgIHByb3RlY3RlZCBleHBvcnRBY3Rpb246IEV4cG9ydEFzeW5jQWN0aW9uLFxuICAgICAgICBwcm90ZWN0ZWQgbm9vcEFjdGlvbjogTm9vcEFzeW5jQWN0aW9uLFxuICAgICAgICBwcm90ZWN0ZWQgY2hhbmdlbG9nQWN0aW9uOiBDaGFuZ2Vsb2dBc3luY0FjdGlvblxuICAgICkge1xuICAgICAgICB0aGlzLnJlZ2lzdGVySGFuZGxlcihyZWRpcmVjdEFjdGlvbik7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJIYW5kbGVyKGV4cG9ydEFjdGlvbik7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJIYW5kbGVyKG5vb3BBY3Rpb24pO1xuICAgICAgICB0aGlzLnJlZ2lzdGVySGFuZGxlcihjaGFuZ2Vsb2dBY3Rpb24pO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3RlckhhbmRsZXIoaGFuZGxlcjogQXN5bmNBY3Rpb25IYW5kbGVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWN0aW9uc1toYW5kbGVyLmtleV0gPSBoYW5kbGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbmQgYWN0aW9uIHJlcXVlc3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb25OYW1lIHRvIHN1Ym1pdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhIHRvIHNlbmRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJlc2V0SGFuZGxlcktleSB0byB1c2VcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBPYnNlcnZhYmxlPFByb2Nlc3M+XG4gICAgICovXG4gICAgcHVibGljIHJ1bihhY3Rpb25OYW1lOiBzdHJpbmcsIGRhdGE6IEFzeW5jQWN0aW9uSW5wdXQsIHByZXNldEhhbmRsZXJLZXk6IHN0cmluZyA9IG51bGwpOiBPYnNlcnZhYmxlPFByb2Nlc3M+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIC4uLmRhdGFcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmFwcFN0YXRlU3RvcmUudXBkYXRlTG9hZGluZyhhY3Rpb25OYW1lLCB0cnVlKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzU2VydmljZVxuICAgICAgICAgICAgLnN1Ym1pdChhY3Rpb25OYW1lLCBvcHRpb25zKVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICAgICAgICB0YXAoKHByb2Nlc3M6IFByb2Nlc3MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBTdGF0ZVN0b3JlLnVwZGF0ZUxvYWRpbmcoYWN0aW9uTmFtZSwgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBoYW5kbGVyID0gJ2FkZFN1Y2Nlc3NNZXNzYWdlQnlLZXknO1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5zdGF0dXMgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIgPSAnYWRkRGFuZ2VyTWVzc2FnZUJ5S2V5JztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLm1lc3NhZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLm1lc3NhZ2VzLmZvckVhY2gobWVzc2FnZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoISFtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZVtoYW5kbGVyXShtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLnN0YXR1cyA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWN0aW9uSGFuZGxlcktleSA9IHByZXNldEhhbmRsZXJLZXkgfHwgKHByb2Nlc3MuZGF0YSAmJiBwcm9jZXNzLmRhdGEuaGFuZGxlcikgfHwgbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWFjdGlvbkhhbmRsZXJLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFjdGlvbkhhbmRsZXI6IEFzeW5jQWN0aW9uSGFuZGxlciA9IHRoaXMuYWN0aW9uc1thY3Rpb25IYW5kbGVyS2V5XTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWFjdGlvbkhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZS5hZGREYW5nZXJNZXNzYWdlQnlLZXkoJ0xCTF9NSVNTSU5HX0hBTkRMRVInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbkhhbmRsZXIucnVuKHByb2Nlc3MuZGF0YS5wYXJhbXMpO1xuXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycj8ubWVzc2FnZSA/PyAnJztcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UuZXJyb3IoJ1tBc3luY0FjdGlvblNlcnZpY2VdIHJ1biBlcnJvcicsIGVycik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yTWVzc2FnZSA9PT0gJ0FjY2VzcyBEZW5pZWQuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBTdGF0ZVN0b3JlLnVwZGF0ZUxvYWRpbmcoYWN0aW9uTmFtZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yTWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlLmFkZERhbmdlck1lc3NhZ2UoZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZS5hZGREYW5nZXJNZXNzYWdlQnlLZXkoJ0xCTF9BQ1RJT05fRVJST1InKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwU3RhdGVTdG9yZS51cGRhdGVMb2FkaW5nKGFjdGlvbk5hbWUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKG51bGwpO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=