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
import { catchError, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../process.service";
import * as i2 from "../../../../store/app-state/app-state.store";
class RecoverPasswordService {
    processService;
    appStateStore;
    processType = 'recover-password';
    constructor(processService, appStateStore) {
        this.processService = processService;
        this.appStateStore = appStateStore;
    }
    /**
     * Send recover password request
     *
     * @param {string} userName to check
     * @param {string} email to check
     * @returns {{}} Observable<Process>
     */
    run(userName, email) {
        const options = {
            username: userName,
            useremail: email
        };
        this.appStateStore.updateLoading('recover-password', true, false);
        return this.processService
            .submit(this.processType, options)
            .pipe(tap(() => this.appStateStore.updateLoading('recover-password', false, false)), catchError(err => {
            this.appStateStore.updateLoading('recover-password', false, false);
            throw err;
        }));
    }
    static ɵfac = function RecoverPasswordService_Factory(t) { return new (t || RecoverPasswordService)(i0.ɵɵinject(i1.ProcessService), i0.ɵɵinject(i2.AppStateStore)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecoverPasswordService, factory: RecoverPasswordService.ɵfac, providedIn: 'root' });
}
export { RecoverPasswordService };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecoverPasswordService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.ProcessService }, { type: i2.AppStateStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3Zlci1wYXNzd29yZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9zZXJ2aWNlcy9wcm9jZXNzL3Byb2Nlc3Nlcy9yZWNvdmVyLXBhc3N3b3JkL3JlY292ZXItcGFzc3dvcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUkvQyxNQUdhLHNCQUFzQjtJQUlYO0lBQXdDO0lBRmxELFdBQVcsR0FBRyxrQkFBa0IsQ0FBQztJQUUzQyxZQUFvQixjQUE4QixFQUFVLGFBQTRCO1FBQXBFLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQ3hGLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxHQUFHLENBQUMsUUFBZ0IsRUFBRSxLQUFhO1FBQ3RDLE1BQU0sT0FBTyxHQUFHO1lBQ1osUUFBUSxFQUFFLFFBQVE7WUFDbEIsU0FBUyxFQUFFLEtBQUs7U0FDbkIsQ0FBQztRQUVGLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGtCQUFrQixFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUVsRSxPQUFPLElBQUksQ0FBQyxjQUFjO2FBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQzthQUNqQyxJQUFJLENBQ0QsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGtCQUFrQixFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUM3RSxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDYixJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDbkUsTUFBTSxHQUFHLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FDTCxDQUFDO0lBQ1YsQ0FBQztnRkEvQlEsc0JBQXNCO2dFQUF0QixzQkFBc0IsV0FBdEIsc0JBQXNCLG1CQUZuQixNQUFNOztTQUVULHNCQUFzQjt1RkFBdEIsc0JBQXNCO2NBSGxDLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2NhdGNoRXJyb3IsIHRhcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtQcm9jZXNzLCBQcm9jZXNzU2VydmljZX0gZnJvbSAnLi4vLi4vcHJvY2Vzcy5zZXJ2aWNlJztcbmltcG9ydCB7QXBwU3RhdGVTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvYXBwLXN0YXRlL2FwcC1zdGF0ZS5zdG9yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFJlY292ZXJQYXNzd29yZFNlcnZpY2Uge1xuXG4gICAgcHJvdGVjdGVkIHByb2Nlc3NUeXBlID0gJ3JlY292ZXItcGFzc3dvcmQnO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwcm9jZXNzU2VydmljZTogUHJvY2Vzc1NlcnZpY2UsIHByaXZhdGUgYXBwU3RhdGVTdG9yZTogQXBwU3RhdGVTdG9yZSkge1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbmQgcmVjb3ZlciBwYXNzd29yZCByZXF1ZXN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlck5hbWUgdG8gY2hlY2tcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZW1haWwgdG8gY2hlY2tcbiAgICAgKiBAcmV0dXJucyB7e319IE9ic2VydmFibGU8UHJvY2Vzcz5cbiAgICAgKi9cbiAgICBwdWJsaWMgcnVuKHVzZXJOYW1lOiBzdHJpbmcsIGVtYWlsOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFByb2Nlc3M+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VyTmFtZSxcbiAgICAgICAgICAgIHVzZXJlbWFpbDogZW1haWxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmFwcFN0YXRlU3RvcmUudXBkYXRlTG9hZGluZygncmVjb3Zlci1wYXNzd29yZCcsIHRydWUsIGZhbHNlKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzU2VydmljZVxuICAgICAgICAgICAgLnN1Ym1pdCh0aGlzLnByb2Nlc3NUeXBlLCBvcHRpb25zKVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgdGFwKCgpID0+IHRoaXMuYXBwU3RhdGVTdG9yZS51cGRhdGVMb2FkaW5nKCdyZWNvdmVyLXBhc3N3b3JkJywgZmFsc2UsIGZhbHNlKSksXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcFN0YXRlU3RvcmUudXBkYXRlTG9hZGluZygncmVjb3Zlci1wYXNzd29yZCcsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICk7XG4gICAgfVxufVxuIl19