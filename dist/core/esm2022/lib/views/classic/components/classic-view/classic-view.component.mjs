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
import { Component, ViewChild } from '@angular/core';
import { IframeResizeHandlerHandler } from '../../services/iframe-resize-handler.service';
import { IframePageChangeObserver } from '../../services/iframe-page-change-observer.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/platform-browser";
import * as i3 from "../../../../services/navigation/route-converter/route-converter.service";
import * as i4 from "../../../../services/auth/auth.service";
import * as i5 from "../../../../store/system-config/system-config.store";
const _c0 = ["dataContainer"];
class ClassicViewUiComponent {
    route;
    router;
    sanitizer;
    routeConverter;
    auth;
    ngZone;
    systemConfigs;
    dataContainer;
    wrapper;
    url;
    iframe = null;
    iframePageChangeHandler;
    iframeResizeHandler;
    constructor(route, router, sanitizer, routeConverter, auth, ngZone, systemConfigs) {
        this.route = route;
        this.router = router;
        this.sanitizer = sanitizer;
        this.routeConverter = routeConverter;
        this.auth = auth;
        this.ngZone = ngZone;
        this.systemConfigs = systemConfigs;
    }
    ngOnInit() {
        this.url = this.route.snapshot.data.legacyUrl;
    }
    ngAfterViewInit() {
        this.initIframe();
    }
    ngOnDestroy() {
        this.cleanObservers();
        this.iframe = null;
        const placeholder = this.wrapper;
        if (this.wrapper.firstChild) {
            placeholder.removeChild(placeholder.firstChild);
        }
        placeholder.innerHTML = '<iframe></iframe>';
        this.wrapper = null;
    }
    cleanObservers() {
        if (this.iframeResizeHandler) {
            this.iframeResizeHandler.destroy();
            this.iframeResizeHandler = null;
        }
        if (this.iframePageChangeHandler) {
            this.iframePageChangeHandler.destroy();
            this.iframePageChangeHandler = null;
        }
    }
    initIframe() {
        this.wrapper = this.dataContainer.nativeElement;
        if (this.wrapper.firstChild) {
            this.wrapper.removeChild(this.wrapper.firstChild);
        }
        const iframe = document.createElement('iframe');
        iframe.src = this.url;
        this.wrapper.appendChild(iframe);
        this.iframe = iframe;
        this.iframe.style.display = 'block';
        this.initObservers();
    }
    initObservers() {
        this.iframePageChangeHandler = this.buildIframePageChangeObserver();
        this.iframeResizeHandler = this.buildIframeResizeHandlerHandler();
        if (this.iframePageChangeHandler) {
            this.iframePageChangeHandler.init();
        }
    }
    onPageChange(newLocation) {
        if (this.shouldRedirect(newLocation) === false) {
            this.iframe.style.display = 'block';
            this.cleanObservers();
            this.initObservers();
            return;
        }
        const location = this.routeConverter.toFrontEndRoute(newLocation);
        if (location === '/users/login') {
            this.auth.logout('LBL_SESSION_EXPIRED');
            return;
        }
        this.ngZone.run(() => this.router.navigateByUrl(location).then()).then();
    }
    onIFrameLoad() {
        // Do not show scroll at any time, to avoid flickering
        this.iframe.contentWindow.document.body.style.overflow = 'hidden';
        // Init resize handler
        this.iframeResizeHandler.init(this.iframe);
    }
    onIFrameUnload() {
        // hide iframe, while being re-directed
        this.iframe.style.display = 'none';
        this.iframeResizeHandler.destroy();
    }
    buildIframePageChangeObserver() {
        return new IframePageChangeObserver(this.iframe, this.onPageChange.bind(this), this.onIFrameLoad.bind(this), this.onIFrameUnload.bind(this));
    }
    buildIframeResizeHandlerHandler() {
        return new IframeResizeHandlerHandler();
    }
    /**
     * Check if should re-direct to link or if it was excluded
     *
     * @param {string} legacyLink to check
     * @returns {boolean} should redirect
     */
    shouldRedirect(legacyLink) {
        if (legacyLink && legacyLink.includes('/#/')) {
            return true;
        }
        const routeInfo = this.routeConverter.parse(legacyLink);
        // if no route or no module, don't re-direct
        if (!routeInfo || !routeInfo.module) {
            return false;
        }
        const reuse = this.routeConverter.matchesActiveRoute(this.route, routeInfo);
        if (reuse === true) {
            return false;
        }
        if (!routeInfo.action) {
            return true;
        }
        return this.toExclude(routeInfo);
    }
    /**
     * Check if given route is to exclude from redirection
     *
     * @param {object} routeInfo to check
     * @returns {boolean} is to exclude
     */
    toExclude(routeInfo) {
        const exclusions = this.systemConfigs.getConfigValue('classicview_routing_exclusions');
        if (!exclusions || Object.keys(exclusions).length === 0) {
            return true;
        }
        // if action is excluded for any module, don't re-direct
        if (exclusions.any && exclusions.any.includes(routeInfo.action)) {
            return false;
        }
        if (!exclusions[routeInfo.module]) {
            return true;
        }
        // if module action is excluded, don't re-direct
        const moduleExclusions = exclusions[routeInfo.module];
        return !(moduleExclusions && moduleExclusions.includes(routeInfo.action));
    }
    static ɵfac = function ClassicViewUiComponent_Factory(t) { return new (t || ClassicViewUiComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.DomSanitizer), i0.ɵɵdirectiveInject(i3.RouteConverter), i0.ɵɵdirectiveInject(i4.AuthService), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i5.SystemConfigStore)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ClassicViewUiComponent, selectors: [["scrm-classic-view-ui"]], viewQuery: function ClassicViewUiComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dataContainer = _t.first);
        } }, decls: 3, vars: 0, consts: [[1, "classic-view-container"], ["dataContainer", ""]], template: function ClassicViewUiComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0, 1);
            i0.ɵɵelement(2, "iframe");
            i0.ɵɵelementEnd();
        } }, encapsulation: 2 });
}
export { ClassicViewUiComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ClassicViewUiComponent, [{
        type: Component,
        args: [{ selector: 'scrm-classic-view-ui', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div class=\"classic-view-container\" #dataContainer>\n    <iframe></iframe>\n</div>\n" }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i1.Router }, { type: i2.DomSanitizer }, { type: i3.RouteConverter }, { type: i4.AuthService }, { type: i0.NgZone }, { type: i5.SystemConfigStore }]; }, { dataContainer: [{
            type: ViewChild,
            args: ['dataContainer', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NpYy12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi92aWV3cy9jbGFzc2ljL2NvbXBvbmVudHMvY2xhc3NpYy12aWV3L2NsYXNzaWMtdmlldy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvY2xhc3NpYy9jb21wb25lbnRzL2NsYXNzaWMtdmlldy9jbGFzc2ljLXZpZXcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBZ0IsU0FBUyxFQUF5QyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFHekcsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0sOENBQThDLENBQUM7QUFJeEYsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sb0RBQW9ELENBQUM7Ozs7Ozs7O0FBTTVGLE1BS2Esc0JBQXNCO0lBVW5CO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBZGdDLGFBQWEsQ0FBYTtJQUMvRCxPQUFPLENBQU07SUFDYixHQUFHLENBQVM7SUFDVCxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ2hCLHVCQUF1QixDQUEyQjtJQUNsRCxtQkFBbUIsQ0FBNkI7SUFFeEQsWUFDWSxLQUFxQixFQUNyQixNQUFjLEVBQ2QsU0FBdUIsRUFDdkIsY0FBOEIsRUFDOUIsSUFBaUIsRUFDakIsTUFBYyxFQUNkLGFBQWdDO1FBTmhDLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxjQUFTLEdBQVQsU0FBUyxDQUFjO1FBQ3ZCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixTQUFJLEdBQUosSUFBSSxDQUFhO1FBQ2pCLFdBQU0s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SSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQztnRkF0TFEsc0JBQXNCOzZEQUF0QixzQkFBc0I7Ozs7OztZQ2pCbkMsaUNBQW1EO1lBQy9DLHlCQUFpQjtZQUNyQixpQkFBTTs7O1NEZU8sc0JBQXNCO3VGQUF0QixzQkFBc0I7Y0FMbEMsU0FBUzsyQkFDSSxzQkFBc0I7Nk5BTVksYUFBYTtrQkFBeEQsU0FBUzttQkFBQyxlQUFlLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0FmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgTmdab25lLCBPbkRlc3Ryb3ksIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7RG9tU2FuaXRpemVyfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7SWZyYW1lUmVzaXplSGFuZGxlckhhbmRsZXJ9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2lmcmFtZS1yZXNpemUtaGFuZGxlci5zZXJ2aWNlJztcbmltcG9ydCB7U3lzdGVtQ29uZmlnU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3N5c3RlbS1jb25maWcvc3lzdGVtLWNvbmZpZy5zdG9yZSc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9hdXRoL2F1dGguc2VydmljZSc7XG5pbXBvcnQge1JvdXRlQ29udmVydGVyLCBSb3V0ZUluZm99IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL25hdmlnYXRpb24vcm91dGUtY29udmVydGVyL3JvdXRlLWNvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7SWZyYW1lUGFnZUNoYW5nZU9ic2VydmVyfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pZnJhbWUtcGFnZS1jaGFuZ2Utb2JzZXJ2ZXIuc2VydmljZSc7XG5cbmludGVyZmFjZSBSb3V0aW5nRXhjbHVzaW9ucyB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nW107XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1jbGFzc2ljLXZpZXctdWknLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9jbGFzc2ljLXZpZXcuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW11cbn0pXG5leHBvcnQgY2xhc3MgQ2xhc3NpY1ZpZXdVaUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcblxuICAgIEBWaWV3Q2hpbGQoJ2RhdGFDb250YWluZXInLCB7c3RhdGljOiB0cnVlfSkgZGF0YUNvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgICBwdWJsaWMgd3JhcHBlcjogYW55O1xuICAgIHB1YmxpYyB1cmw6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgaWZyYW1lID0gbnVsbDtcbiAgICBwcml2YXRlIGlmcmFtZVBhZ2VDaGFuZ2VIYW5kbGVyOiBJZnJhbWVQYWdlQ2hhbmdlT2JzZXJ2ZXI7XG4gICAgcHJpdmF0ZSBpZnJhbWVSZXNpemVIYW5kbGVyOiBJZnJhbWVSZXNpemVIYW5kbGVySGFuZGxlcjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgICAgICAgcHJpdmF0ZSByb3V0ZUNvbnZlcnRlcjogUm91dGVDb252ZXJ0ZXIsXG4gICAgICAgIHByaXZhdGUgYXV0aDogQXV0aFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgICAgIHByaXZhdGUgc3lzdGVtQ29uZmlnczogU3lzdGVtQ29uZmlnU3RvcmUsXG4gICAgKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXJsID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5kYXRhLmxlZ2FjeVVybDtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW5pdElmcmFtZSgpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNsZWFuT2JzZXJ2ZXJzKCk7XG5cbiAgICAgICAgdGhpcy5pZnJhbWUgPSBudWxsO1xuICAgICAgICBjb25zdCBwbGFjZWhvbGRlciA9IHRoaXMud3JhcHBlcjtcbiAgICAgICAgaWYgKHRoaXMud3JhcHBlci5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBwbGFjZWhvbGRlci5yZW1vdmVDaGlsZChwbGFjZWhvbGRlci5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBwbGFjZWhvbGRlci5pbm5lckhUTUwgPSAnPGlmcmFtZT48L2lmcmFtZT4nO1xuICAgICAgICB0aGlzLndyYXBwZXIgPSBudWxsO1xuICAgIH1cblxuICAgIGNsZWFuT2JzZXJ2ZXJzKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5pZnJhbWVSZXNpemVIYW5kbGVyKSB7XG4gICAgICAgICAgICB0aGlzLmlmcmFtZVJlc2l6ZUhhbmRsZXIuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5pZnJhbWVSZXNpemVIYW5kbGVyID0gbnVsbDtcblxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlmcmFtZVBhZ2VDaGFuZ2VIYW5kbGVyKSB7XG4gICAgICAgICAgICB0aGlzLmlmcmFtZVBhZ2VDaGFuZ2VIYW5kbGVyLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuaWZyYW1lUGFnZUNoYW5nZUhhbmRsZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5pdElmcmFtZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy53cmFwcGVyID0gdGhpcy5kYXRhQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHRoaXMud3JhcHBlci5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICB0aGlzLndyYXBwZXIucmVtb3ZlQ2hpbGQodGhpcy53cmFwcGVyLmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgICBpZnJhbWUuc3JjID0gdGhpcy51cmw7XG5cbiAgICAgICAgdGhpcy53cmFwcGVyLmFwcGVuZENoaWxkKGlmcmFtZSk7XG5cbiAgICAgICAgdGhpcy5pZnJhbWUgPSBpZnJhbWU7XG5cbiAgICAgICAgdGhpcy5pZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICAgICAgdGhpcy5pbml0T2JzZXJ2ZXJzKCk7XG4gICAgfVxuXG4gICAgaW5pdE9ic2VydmVycygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pZnJhbWVQYWdlQ2hhbmdlSGFuZGxlciA9IHRoaXMuYnVpbGRJZnJhbWVQYWdlQ2hhbmdlT2JzZXJ2ZXIoKTtcbiAgICAgICAgdGhpcy5pZnJhbWVSZXNpemVIYW5kbGVyID0gdGhpcy5idWlsZElmcmFtZVJlc2l6ZUhhbmRsZXJIYW5kbGVyKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuaWZyYW1lUGFnZUNoYW5nZUhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuaWZyYW1lUGFnZUNoYW5nZUhhbmRsZXIuaW5pdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uUGFnZUNoYW5nZShuZXdMb2NhdGlvbik6IHZvaWQge1xuXG4gICAgICAgIGlmICh0aGlzLnNob3VsZFJlZGlyZWN0KG5ld0xvY2F0aW9uKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgdGhpcy5jbGVhbk9ic2VydmVycygpO1xuICAgICAgICAgICAgdGhpcy5pbml0T2JzZXJ2ZXJzKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsb2NhdGlvbiA9IHRoaXMucm91dGVDb252ZXJ0ZXIudG9Gcm9udEVuZFJvdXRlKG5ld0xvY2F0aW9uKTtcblxuICAgICAgICBpZiAobG9jYXRpb24gPT09ICcvdXNlcnMvbG9naW4nKSB7XG4gICAgICAgICAgICB0aGlzLmF1dGgubG9nb3V0KCdMQkxfU0VTU0lPTl9FWFBJUkVEJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChsb2NhdGlvbikudGhlbigpKS50aGVuKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uSUZyYW1lTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgLy8gRG8gbm90IHNob3cgc2Nyb2xsIGF0IGFueSB0aW1lLCB0byBhdm9pZCBmbGlja2VyaW5nXG4gICAgICAgIHRoaXMuaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuXG4gICAgICAgIC8vIEluaXQgcmVzaXplIGhhbmRsZXJcbiAgICAgICAgdGhpcy5pZnJhbWVSZXNpemVIYW5kbGVyLmluaXQodGhpcy5pZnJhbWUpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbklGcmFtZVVubG9hZCgpOiB2b2lkIHtcbiAgICAgICAgLy8gaGlkZSBpZnJhbWUsIHdoaWxlIGJlaW5nIHJlLWRpcmVjdGVkXG4gICAgICAgIHRoaXMuaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMuaWZyYW1lUmVzaXplSGFuZGxlci5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGJ1aWxkSWZyYW1lUGFnZUNoYW5nZU9ic2VydmVyKCk6IElmcmFtZVBhZ2VDaGFuZ2VPYnNlcnZlciB7XG4gICAgICAgIHJldHVybiBuZXcgSWZyYW1lUGFnZUNoYW5nZU9ic2VydmVyKFxuICAgICAgICAgICAgdGhpcy5pZnJhbWUsXG4gICAgICAgICAgICB0aGlzLm9uUGFnZUNoYW5nZS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgdGhpcy5vbklGcmFtZUxvYWQuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIHRoaXMub25JRnJhbWVVbmxvYWQuYmluZCh0aGlzKSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYnVpbGRJZnJhbWVSZXNpemVIYW5kbGVySGFuZGxlcigpOiBJZnJhbWVSZXNpemVIYW5kbGVySGFuZGxlciB7XG4gICAgICAgIHJldHVybiBuZXcgSWZyYW1lUmVzaXplSGFuZGxlckhhbmRsZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBzaG91bGQgcmUtZGlyZWN0IHRvIGxpbmsgb3IgaWYgaXQgd2FzIGV4Y2x1ZGVkXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGVnYWN5TGluayB0byBjaGVja1xuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBzaG91bGQgcmVkaXJlY3RcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgc2hvdWxkUmVkaXJlY3QobGVnYWN5TGluazogc3RyaW5nKTogYm9vbGVhbiB7XG5cbiAgICAgICAgaWYgKGxlZ2FjeUxpbmsgJiYgbGVnYWN5TGluay5pbmNsdWRlcygnLyMvJykpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgcm91dGVJbmZvID0gdGhpcy5yb3V0ZUNvbnZlcnRlci5wYXJzZShsZWdhY3lMaW5rKTtcblxuICAgICAgICAvLyBpZiBubyByb3V0ZSBvciBubyBtb2R1bGUsIGRvbid0IHJlLWRpcmVjdFxuICAgICAgICBpZiAoIXJvdXRlSW5mbyB8fCAhcm91dGVJbmZvLm1vZHVsZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmV1c2UgPSB0aGlzLnJvdXRlQ29udmVydGVyLm1hdGNoZXNBY3RpdmVSb3V0ZSh0aGlzLnJvdXRlLCByb3V0ZUluZm8pO1xuXG4gICAgICAgIGlmIChyZXVzZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFyb3V0ZUluZm8uYWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnRvRXhjbHVkZShyb3V0ZUluZm8pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGdpdmVuIHJvdXRlIGlzIHRvIGV4Y2x1ZGUgZnJvbSByZWRpcmVjdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJvdXRlSW5mbyB0byBjaGVja1xuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBpcyB0byBleGNsdWRlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHRvRXhjbHVkZShyb3V0ZUluZm86IFJvdXRlSW5mbyk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBleGNsdXNpb25zOiBSb3V0aW5nRXhjbHVzaW9ucyA9IHRoaXMuc3lzdGVtQ29uZmlncy5nZXRDb25maWdWYWx1ZSgnY2xhc3NpY3ZpZXdfcm91dGluZ19leGNsdXNpb25zJyk7XG5cbiAgICAgICAgaWYgKCFleGNsdXNpb25zIHx8IE9iamVjdC5rZXlzKGV4Y2x1c2lvbnMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBhY3Rpb24gaXMgZXhjbHVkZWQgZm9yIGFueSBtb2R1bGUsIGRvbid0IHJlLWRpcmVjdFxuICAgICAgICBpZiAoZXhjbHVzaW9ucy5hbnkgJiYgZXhjbHVzaW9ucy5hbnkuaW5jbHVkZXMocm91dGVJbmZvLmFjdGlvbikpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZXhjbHVzaW9uc1tyb3V0ZUluZm8ubW9kdWxlXSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBtb2R1bGUgYWN0aW9uIGlzIGV4Y2x1ZGVkLCBkb24ndCByZS1kaXJlY3RcbiAgICAgICAgY29uc3QgbW9kdWxlRXhjbHVzaW9ucyA9IGV4Y2x1c2lvbnNbcm91dGVJbmZvLm1vZHVsZV07XG4gICAgICAgIHJldHVybiAhKG1vZHVsZUV4Y2x1c2lvbnMgJiYgbW9kdWxlRXhjbHVzaW9ucy5pbmNsdWRlcyhyb3V0ZUluZm8uYWN0aW9uKSk7XG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPGRpdiBjbGFzcz1cImNsYXNzaWMtdmlldy1jb250YWluZXJcIiAjZGF0YUNvbnRhaW5lcj5cbiAgICA8aWZyYW1lPjwvaWZyYW1lPlxuPC9kaXY+XG4iXX0=