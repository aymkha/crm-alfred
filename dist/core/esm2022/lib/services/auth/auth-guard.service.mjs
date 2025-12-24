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
import { UrlTree } from '@angular/router';
import { forkJoin, of } from 'rxjs';
import { catchError, filter, map, take, tap } from 'rxjs/operators';
import { emptyObject, isEmptyString } from 'common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./auth.service";
import * as i3 from "../process/processes/async-action/async-action";
import * as i4 from "../../store/app-state/app-state.store";
import * as i5 from "../navigation/route-converter/route-converter.service";
import * as i6 from "../../store/language/language.store";
import * as i7 from "../../store/notification/notification.store";
class AuthGuard {
    router;
    authService;
    asyncActionService;
    appState;
    routeConverter;
    language;
    notificationStore;
    constructor(router, authService, asyncActionService, appState, routeConverter, language, notificationStore) {
        this.router = router;
        this.authService = authService;
        this.asyncActionService = asyncActionService;
        this.appState = appState;
        this.routeConverter = routeConverter;
        this.language = language;
        this.notificationStore = notificationStore;
    }
    canActivate(route, snapshot) {
        return this.authorizeUser(route, snapshot);
    }
    /**
     * Authorize user session and acl together in conjunction
     *
     * @returns {object} Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
     * @param {ActivatedRouteSnapshot} route information about the current route
     * @param snapshot
     */
    authorizeUser(route, snapshot) {
        // Note: this session and acl are not always booleans
        return forkJoin([
            this.authorizeUserSession(route, snapshot),
            this.authorizeUserACL(route)
        ]).pipe(map(([session, acl]) => {
            if (session instanceof UrlTree) {
                return session;
            }
            if (acl instanceof UrlTree) {
                return acl;
            }
            return session && acl;
        }));
    }
    /**
     * Authorize user acl
     *
     * @returns {object} Observable<boolean | UrlTree>
     * @param {ActivatedRouteSnapshot} activatedRoute information about the current route
     */
    authorizeUserACL(activatedRoute) {
        const routeInfo = this.routeConverter.parseRouteURL(activatedRoute.url);
        const routeURL = this.appState.getRouteUrl() ?? '';
        if (!routeInfo.module || routeInfo.module === 'home') {
            return of(true);
        }
        const homeUrl = '';
        const homeUrlTree = this.router.parseUrl(homeUrl);
        const actionName = 'user-acl';
        const asyncData = {
            action: actionName,
            module: routeInfo.module,
            payload: {
                routeAction: routeInfo.action,
                record: routeInfo.record,
                routeURL,
                queryParams: activatedRoute?.queryParams ?? []
            }
        };
        return this.asyncActionService.run(actionName, asyncData)
            .pipe(take(1), map((process) => {
            if (process.data && process.data.result === true) {
                return true;
            }
            if (isEmptyString(routeURL)) {
                // Re-direct to home
                return homeUrlTree;
            }
            const currentUrlTree = this.router.parseUrl(this.router.url);
            if (this.routeConverter.isClassicViewRoute(currentUrlTree)) {
                return currentUrlTree;
            }
            return false;
        }), catchError(() => of(homeUrlTree)));
    }
    /**
     * Authorize user session
     *
     * @returns {object} Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
     * @param {ActivatedRouteSnapshot} route information about the current route
     * @param snapshot
     */
    authorizeUserSession(route, snapshot) {
        if (this.authService.isUserLoggedIn.value && route.data.checkSession !== true) {
            return of(true);
        }
        let sessionExpiredUrl = this.authService.getSessionExpiredRoute();
        const redirect = this.authService.sessionExpiredRedirect();
        const sessionExpiredUrlTree = this.router.parseUrl(sessionExpiredUrl);
        return this.authService.fetchSessionStatus()
            .pipe(take(1), map((user) => {
            if (user && user.appStatus.installed === false) {
                return this.router.parseUrl('install');
            }
            if (user && user.active === true) {
                const wasLoggedIn = !!this.appState.getCurrentUser();
                this.authService.setCurrentUser(user);
                if (!wasLoggedIn) {
                    this.language.appStrings$.pipe(filter(appStrings => appStrings && !emptyObject(appStrings)), tap(() => {
                        this.notificationStore.enableNotifications();
                        this.notificationStore.refreshNotifications();
                    }), take(1)).subscribe();
                }
                return true;
            }
            this.appState.setPreLoginUrl(snapshot.url);
            this.authService.resetState();
            if (redirect) {
                this.authService.handleSessionExpiredRedirect();
                return false;
            }
            // Re-direct to login
            return sessionExpiredUrlTree;
        }), catchError(() => {
            if (redirect) {
                this.authService.handleSessionExpiredRedirect();
                return of(false);
            }
            this.authService.logout('LBL_SESSION_EXPIRED', false);
            return of(sessionExpiredUrlTree);
        }), tap((result) => {
            if (result === true) {
                this.authService.isUserLoggedIn.next(true);
            }
        }));
    }
    static ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.AuthService), i0.ɵɵinject(i3.AsyncActionService), i0.ɵɵinject(i4.AppStateStore), i0.ɵɵinject(i5.RouteConverter), i0.ɵɵinject(i6.LanguageStore), i0.ɵɵinject(i7.NotificationStore)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
}
export { AuthGuard };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthGuard, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.Router }, { type: i2.AuthService }, { type: i3.AsyncActionService }, { type: i4.AppStateStore }, { type: i5.RouteConverter }, { type: i6.LanguageStore }, { type: i7.NotificationStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1ndWFyZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3NlcnZpY2VzL2F1dGgvYXV0aC1ndWFyZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBc0QsT0FBTyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0YsT0FBTyxFQUFDLFFBQVEsRUFBYyxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQU1sRSxPQUFPLEVBQUMsV0FBVyxFQUFFLGFBQWEsRUFBQyxNQUFNLFFBQVEsQ0FBQzs7Ozs7Ozs7O0FBSWxELE1BR2EsU0FBUztJQUVKO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBUGQsWUFDYyxNQUFjLEVBQ2QsV0FBd0IsRUFDeEIsa0JBQXNDLEVBQ3RDLFFBQXVCLEVBQ3ZCLGNBQThCLEVBQzlCLFFBQXVCLEVBQ3ZCLGlCQUFvQztRQU5wQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFFbEQsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUE2QixFQUFFLFFBQTZCO1FBRXBFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVB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bnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXIsIFJvdXRlclN0YXRlU25hcHNob3QsIFVybFRyZWV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge2ZvcmtKb2luLCBPYnNlcnZhYmxlLCBvZn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2NhdGNoRXJyb3IsIGZpbHRlciwgbWFwLCB0YWtlLCB0YXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7QXV0aFNlcnZpY2UsIFNlc3Npb25TdGF0dXN9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7UHJvY2Vzc30gZnJvbSAnLi4vcHJvY2Vzcy9wcm9jZXNzLnNlcnZpY2UnO1xuaW1wb3J0IHtBc3luY0FjdGlvbklucHV0LCBBc3luY0FjdGlvblNlcnZpY2V9IGZyb20gJy4uL3Byb2Nlc3MvcHJvY2Vzc2VzL2FzeW5jLWFjdGlvbi9hc3luYy1hY3Rpb24nO1xuaW1wb3J0IHtBcHBTdGF0ZVN0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9hcHAtc3RhdGUvYXBwLXN0YXRlLnN0b3JlJztcbmltcG9ydCB7Um91dGVDb252ZXJ0ZXIsIFJvdXRlSW5mb30gZnJvbSAnLi4vbmF2aWdhdGlvbi9yb3V0ZS1jb252ZXJ0ZXIvcm91dGUtY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtlbXB0eU9iamVjdCwgaXNFbXB0eVN0cmluZ30gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtOb3RpZmljYXRpb25TdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5zdG9yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQXV0aEd1YXJkICB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGFzeW5jQWN0aW9uU2VydmljZTogQXN5bmNBY3Rpb25TZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgYXBwU3RhdGU6IEFwcFN0YXRlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCByb3V0ZUNvbnZlcnRlcjogUm91dGVDb252ZXJ0ZXIsXG4gICAgICAgIHByb3RlY3RlZCBsYW5ndWFnZTogTGFuZ3VhZ2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIG5vdGlmaWNhdGlvblN0b3JlOiBOb3RpZmljYXRpb25TdG9yZVxuICAgICkge1xuICAgIH1cblxuICAgIGNhbkFjdGl2YXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzbmFwc2hvdDogUm91dGVyU3RhdGVTbmFwc2hvdCk6XG4gICAgICAgIE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHwgUHJvbWlzZTxib29sZWFuIHwgVXJsVHJlZT4gfCBib29sZWFuIHwgVXJsVHJlZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhvcml6ZVVzZXIocm91dGUsIHNuYXBzaG90KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBdXRob3JpemUgdXNlciBzZXNzaW9uIGFuZCBhY2wgdG9nZXRoZXIgaW4gY29uanVuY3Rpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHwgUHJvbWlzZTxib29sZWFuIHwgVXJsVHJlZT4gfCBib29sZWFuIHwgVXJsVHJlZVxuICAgICAqIEBwYXJhbSB7QWN0aXZhdGVkUm91dGVTbmFwc2hvdH0gcm91dGUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGN1cnJlbnQgcm91dGVcbiAgICAgKiBAcGFyYW0gc25hcHNob3RcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYXV0aG9yaXplVXNlcihyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc25hcHNob3Q6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB8IFByb21pc2U8Ym9vbGVhbiB8IFVybFRyZWU+IHwgYm9vbGVhbiB8IFVybFRyZWUge1xuICAgICAgICAvLyBOb3RlOiB0aGlzIHNlc3Npb24gYW5kIGFjbCBhcmUgbm90IGFsd2F5cyBib29sZWFuc1xuICAgICAgICByZXR1cm4gZm9ya0pvaW4oW1xuICAgICAgICAgICAgdGhpcy5hdXRob3JpemVVc2VyU2Vzc2lvbihyb3V0ZSwgc25hcHNob3QpLFxuICAgICAgICAgICAgdGhpcy5hdXRob3JpemVVc2VyQUNMKHJvdXRlKVxuICAgICAgICBdKS5waXBlKG1hcCgoW3Nlc3Npb24sIGFjbF06IGFueSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlc3Npb24gaW5zdGFuY2VvZiBVcmxUcmVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYWNsIGluc3RhbmNlb2YgVXJsVHJlZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gc2Vzc2lvbiAmJiBhY2w7XG4gICAgICAgICAgICB9XG4gICAgICAgICkpO1xuXG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBdXRob3JpemUgdXNlciBhY2xcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+XG4gICAgICogQHBhcmFtIHtBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90fSBhY3RpdmF0ZWRSb3V0ZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY3VycmVudCByb3V0ZVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBhdXRob3JpemVVc2VyQUNMKGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTpcbiAgICAgICAgT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuXG4gICAgICAgIGNvbnN0IHJvdXRlSW5mbzogUm91dGVJbmZvID0gdGhpcy5yb3V0ZUNvbnZlcnRlci5wYXJzZVJvdXRlVVJMKGFjdGl2YXRlZFJvdXRlLnVybCk7XG5cbiAgICAgICAgY29uc3Qgcm91dGVVUkw6IHN0cmluZyA9IHRoaXMuYXBwU3RhdGUuZ2V0Um91dGVVcmwoKSA/PyAnJztcblxuICAgICAgICBpZiAoIXJvdXRlSW5mby5tb2R1bGUgfHwgcm91dGVJbmZvLm1vZHVsZSA9PT0gJ2hvbWUnKSB7XG4gICAgICAgICAgICByZXR1cm4gb2YodHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBob21lVXJsID0gJyc7XG4gICAgICAgIGNvbnN0IGhvbWVVcmxUcmVlOiBVcmxUcmVlID0gdGhpcy5yb3V0ZXIucGFyc2VVcmwoaG9tZVVybCk7XG5cbiAgICAgICAgY29uc3QgYWN0aW9uTmFtZSA9ICd1c2VyLWFjbCc7XG5cbiAgICAgICAgY29uc3QgYXN5bmNEYXRhID0ge1xuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb25OYW1lLFxuICAgICAgICAgICAgbW9kdWxlOiByb3V0ZUluZm8ubW9kdWxlLFxuICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgIHJvdXRlQWN0aW9uOiByb3V0ZUluZm8uYWN0aW9uLFxuICAgICAgICAgICAgICAgIHJlY29yZDogcm91dGVJbmZvLnJlY29yZCxcbiAgICAgICAgICAgICAgICByb3V0ZVVSTCxcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtczogYWN0aXZhdGVkUm91dGU/LnF1ZXJ5UGFyYW1zID8/IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gYXMgQXN5bmNBY3Rpb25JbnB1dDtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXN5bmNBY3Rpb25TZXJ2aWNlLnJ1bihhY3Rpb25OYW1lLCBhc3luY0RhdGEpXG4gICAgICAgICAgICAucGlwZSh0YWtlKDEpLFxuICAgICAgICAgICAgICAgIG1hcCgocHJvY2VzczogUHJvY2VzcykgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmRhdGEgJiYgcHJvY2Vzcy5kYXRhLnJlc3VsdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNFbXB0eVN0cmluZyhyb3V0ZVVSTCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlLWRpcmVjdCB0byBob21lXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaG9tZVVybFRyZWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VXJsVHJlZTogVXJsVHJlZSA9IHRoaXMucm91dGVyLnBhcnNlVXJsKHRoaXMucm91dGVyLnVybCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucm91dGVDb252ZXJ0ZXIuaXNDbGFzc2ljVmlld1JvdXRlKGN1cnJlbnRVcmxUcmVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRVcmxUcmVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IoKCkgPT4gb2YoaG9tZVVybFRyZWUpKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBdXRob3JpemUgdXNlciBzZXNzaW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB8IFByb21pc2U8Ym9vbGVhbiB8IFVybFRyZWU+IHwgYm9vbGVhbiB8IFVybFRyZWVcbiAgICAgKiBAcGFyYW0ge0FjdGl2YXRlZFJvdXRlU25hcHNob3R9IHJvdXRlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjdXJyZW50IHJvdXRlXG4gICAgICogQHBhcmFtIHNuYXBzaG90XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGF1dGhvcml6ZVVzZXJTZXNzaW9uKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzbmFwc2hvdDogUm91dGVyU3RhdGVTbmFwc2hvdCk6XG4gICAgICAgIE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHtcblxuICAgICAgICBpZiAodGhpcy5hdXRoU2VydmljZS5pc1VzZXJMb2dnZWRJbi52YWx1ZSAmJiByb3V0ZS5kYXRhLmNoZWNrU2Vzc2lvbiAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG9mKHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNlc3Npb25FeHBpcmVkVXJsID0gdGhpcy5hdXRoU2VydmljZS5nZXRTZXNzaW9uRXhwaXJlZFJvdXRlKCk7XG4gICAgICAgIGNvbnN0IHJlZGlyZWN0ID0gdGhpcy5hdXRoU2VydmljZS5zZXNzaW9uRXhwaXJlZFJlZGlyZWN0KCk7XG5cbiAgICAgICAgY29uc3Qgc2Vzc2lvbkV4cGlyZWRVcmxUcmVlOiBVcmxUcmVlID0gdGhpcy5yb3V0ZXIucGFyc2VVcmwoc2Vzc2lvbkV4cGlyZWRVcmwpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmZldGNoU2Vzc2lvblN0YXR1cygpXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgICAgICAgIG1hcCgodXNlcjogU2Vzc2lvblN0YXR1cykgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh1c2VyICYmIHVzZXIuYXBwU3RhdHVzLmluc3RhbGxlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJvdXRlci5wYXJzZVVybCgnaW5zdGFsbCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXIgJiYgdXNlci5hY3RpdmUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHdhc0xvZ2dlZEluID0gISF0aGlzLmFwcFN0YXRlLmdldEN1cnJlbnRVc2VyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLnNldEN1cnJlbnRVc2VyKHVzZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXdhc0xvZ2dlZEluKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5ndWFnZS5hcHBTdHJpbmdzJC5waXBlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIoYXBwU3RyaW5ncyA9PiBhcHBTdHJpbmdzICYmICFlbXB0eU9iamVjdChhcHBTdHJpbmdzKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblN0b3JlLmVuYWJsZU5vdGlmaWNhdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uU3RvcmUucmVmcmVzaE5vdGlmaWNhdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRha2UoMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcFN0YXRlLnNldFByZUxvZ2luVXJsKHNuYXBzaG90LnVybCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UucmVzZXRTdGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWRpcmVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5oYW5kbGVTZXNzaW9uRXhwaXJlZFJlZGlyZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBSZS1kaXJlY3QgdG8gbG9naW5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlc3Npb25FeHBpcmVkVXJsVHJlZTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZGlyZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmhhbmRsZVNlc3Npb25FeHBpcmVkUmVkaXJlY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvZihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ291dCgnTEJMX1NFU1NJT05fRVhQSVJFRCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKHNlc3Npb25FeHBpcmVkVXJsVHJlZSk7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgdGFwKChyZXN1bHQ6IGJvb2xlYW4gfCBVcmxUcmVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuaXNVc2VyTG9nZ2VkSW4ubmV4dCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgIH1cbn1cblxuXG4iXX0=