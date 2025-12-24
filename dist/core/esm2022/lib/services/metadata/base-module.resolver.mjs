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
import { BaseMetadataResolver } from './base-metadata.resolver';
import { forkJoin } from 'rxjs';
import { concatMap, map, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../store/system-config/system-config.store";
import * as i2 from "../../store/language/language.store";
import * as i3 from "../../store/navigation/navigation.store";
import * as i4 from "../../store/user-preference/user-preference.store";
import * as i5 from "../../store/theme-images/theme-images.store";
import * as i6 from "../navigation/module-name-mapper/module-name-mapper.service";
import * as i7 from "../../store/app-state/app-state.store";
import * as i8 from "../../store/metadata/metadata.store.service";
import * as i9 from "../message/message.service";
import * as i10 from "../navigation/route-converter/route-converter.service";
import * as i11 from "../../store/app-metadata/app-metadata.store.service";
import * as i12 from "../auth/auth.service";
class BaseModuleResolver extends BaseMetadataResolver {
    systemConfigStore;
    languageStore;
    navigationStore;
    userPreferenceStore;
    themeImagesStore;
    moduleNameMapper;
    appStateStore;
    metadataStore;
    messageService;
    routeConverter;
    appMetadata;
    auth;
    constructor(systemConfigStore, languageStore, navigationStore, userPreferenceStore, themeImagesStore, moduleNameMapper, appStateStore, metadataStore, messageService, routeConverter, appMetadata, auth) {
        super(systemConfigStore, languageStore, navigationStore, userPreferenceStore, themeImagesStore, appStateStore, moduleNameMapper, messageService, appMetadata, auth);
        this.systemConfigStore = systemConfigStore;
        this.languageStore = languageStore;
        this.navigationStore = navigationStore;
        this.userPreferenceStore = userPreferenceStore;
        this.themeImagesStore = themeImagesStore;
        this.moduleNameMapper = moduleNameMapper;
        this.appStateStore = appStateStore;
        this.metadataStore = metadataStore;
        this.messageService = messageService;
        this.routeConverter = routeConverter;
        this.appMetadata = appMetadata;
        this.auth = auth;
    }
    resolve(route) {
        let routeModule = route.params.module;
        if (!routeModule) {
            routeModule = route.data.module;
        }
        return super.resolve(route).pipe(concatMap(() => forkJoin([
            this.metadataStore.load(routeModule, this.metadataStore.getMetadataTypes()),
            this.metadataStore.getMetadata('saved-search', ['recordView'])
        ])), map(value => {
            return {
                metadata: value[0] ?? {},
                savedSearchMeta: value[1] ?? {},
            };
        }), tap(() => {
            if (routeModule) {
                const module = this.calculateActiveModule(route);
                this.appStateStore.setModule(module);
            }
            const info = this.routeConverter.parseRouteURL(route.url);
            const action = info.action ?? 'index';
            this.appStateStore.setView(action);
        }, () => {
            this.addMetadataLoadErrorMessage();
        }));
    }
    static ɵfac = function BaseModuleResolver_Factory(t) { return new (t || BaseModuleResolver)(i0.ɵɵinject(i1.SystemConfigStore), i0.ɵɵinject(i2.LanguageStore), i0.ɵɵinject(i3.NavigationStore), i0.ɵɵinject(i4.UserPreferenceStore), i0.ɵɵinject(i5.ThemeImagesStore), i0.ɵɵinject(i6.ModuleNameMapper), i0.ɵɵinject(i7.AppStateStore), i0.ɵɵinject(i8.MetadataStore), i0.ɵɵinject(i9.MessageService), i0.ɵɵinject(i10.RouteConverter), i0.ɵɵinject(i11.AppMetadataStore), i0.ɵɵinject(i12.AuthService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: BaseModuleResolver, factory: BaseModuleResolver.ɵfac, providedIn: 'root' });
}
export { BaseModuleResolver };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseModuleResolver, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: i1.SystemConfigStore }, { type: i2.LanguageStore }, { type: i3.NavigationStore }, { type: i4.UserPreferenceStore }, { type: i5.ThemeImagesStore }, { type: i6.ModuleNameMapper }, { type: i7.AppStateStore }, { type: i8.MetadataStore }, { type: i9.MessageService }, { type: i10.RouteConverter }, { type: i11.AppMetadataStore }, { type: i12.AuthService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1tb2R1bGUucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc2VydmljZXMvbWV0YWRhdGEvYmFzZS1tb2R1bGUucmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFROUQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUc5QixPQUFPLEVBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFLbkQsTUFDYSxrQkFBbUIsU0FBUSxvQkFBb0I7SUFHMUM7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBWmQsWUFDYyxpQkFBb0MsRUFDcEMsYUFBNEIsRUFDNUIsZUFBZ0MsRUFDaEMsbUJBQXdDLEVBQ3hDLGdCQUFrQyxFQUNsQyxnQkFBa0MsRUFDbEMsYUFBNEIsRUFDNUIsYUFBNEIsRUFDNUIsY0FBOEIsRUFDOUIsY0FBOEIsRUFDOUIsV0FBNkIsRUFDN0IsSUFBaUI7UUFFM0IsS0FBSyxDQUNELGlCQUFpQixFQUNqQixhQUFhLEVBQ2IsZUFBZSxFQUNmLG1CQUFtQixFQUNuQixnQkFBZ0IsRUFDaEIsYUFBYSxFQUNiLGdCQUFnQixFQUNoQixjQUFjLEVBQ2QsV0FBVyxFQUNYLElBQUksQ0FDUCxDQUFDO1FBeEJRLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBQzdCLFNBQUksR0FBSixJQUFJLENBQWE7SUFjL0IsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUE2QjtRQUNqQyxJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUV0QyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2QsV0FBVyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ25DO1FBQ0QsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FDNUIsU0FBUyxDQUNMLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNYLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDM0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDakUsQ0FBQyxDQUNMLEVBQ0QsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ1IsT0FBTztnQkFDSCxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUU7Z0JBQ3hCLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRTthQUNsQyxDQUFBO1FBQ0wsQ0FBQyxDQUFDLEVBQ0YsR0FBRyxDQUNDLEdBQUcsRUFBRTtZQUNELElBQUksV0FBVyxFQUFFO2dCQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFakQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDeEM7WUFDRCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDMUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUM7WUFDdEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxFQUNELEdBQUcsRUFBRTtZQUNELElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUNULENBQUM7SUFDTixDQUFDOzRFQWhFUSxrQkFBa0I7Z0VBQWxCLGtCQUFrQixXQUFsQixrQkFBa0IsbUJBRE4sTUFBTTs7U0FDbEIsa0JBQWtCO3VGQUFsQixrQkFBa0I7Y0FEOUIsVUFBVTtlQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWN0aXZhdGVkUm91dGVTbmFwc2hvdH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7QmFzZU1ldGFkYXRhUmVzb2x2ZXJ9IGZyb20gJy4vYmFzZS1tZXRhZGF0YS5yZXNvbHZlcic7XG5pbXBvcnQge01vZHVsZU5hbWVNYXBwZXJ9IGZyb20gJy4uL25hdmlnYXRpb24vbW9kdWxlLW5hbWUtbWFwcGVyL21vZHVsZS1uYW1lLW1hcHBlci5zZXJ2aWNlJztcbmltcG9ydCB7U3lzdGVtQ29uZmlnU3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL3N5c3RlbS1jb25maWcvc3lzdGVtLWNvbmZpZy5zdG9yZSc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7TmF2aWdhdGlvblN0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9uYXZpZ2F0aW9uL25hdmlnYXRpb24uc3RvcmUnO1xuaW1wb3J0IHtVc2VyUHJlZmVyZW5jZVN0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS91c2VyLXByZWZlcmVuY2UvdXNlci1wcmVmZXJlbmNlLnN0b3JlJztcbmltcG9ydCB7VGhlbWVJbWFnZXNTdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvdGhlbWUtaW1hZ2VzL3RoZW1lLWltYWdlcy5zdG9yZSc7XG5pbXBvcnQge0FwcFN0YXRlU3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL2FwcC1zdGF0ZS9hcHAtc3RhdGUuc3RvcmUnO1xuaW1wb3J0IHtmb3JrSm9pbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge01ldGFkYXRhU3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL21ldGFkYXRhL21ldGFkYXRhLnN0b3JlLnNlcnZpY2UnO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSAnLi4vbWVzc2FnZS9tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHtjb25jYXRNYXAsIG1hcCwgdGFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1JvdXRlQ29udmVydGVyfSBmcm9tIFwiLi4vbmF2aWdhdGlvbi9yb3V0ZS1jb252ZXJ0ZXIvcm91dGUtY29udmVydGVyLnNlcnZpY2VcIjtcbmltcG9ydCB7QXBwTWV0YWRhdGFTdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvYXBwLW1ldGFkYXRhL2FwcC1tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uL2F1dGgvYXV0aC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgQmFzZU1vZHVsZVJlc29sdmVyIGV4dGVuZHMgQmFzZU1ldGFkYXRhUmVzb2x2ZXIge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBzeXN0ZW1Db25maWdTdG9yZTogU3lzdGVtQ29uZmlnU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBsYW5ndWFnZVN0b3JlOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbmF2aWdhdGlvblN0b3JlOiBOYXZpZ2F0aW9uU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCB1c2VyUHJlZmVyZW5jZVN0b3JlOiBVc2VyUHJlZmVyZW5jZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgdGhlbWVJbWFnZXNTdG9yZTogVGhlbWVJbWFnZXNTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIG1vZHVsZU5hbWVNYXBwZXI6IE1vZHVsZU5hbWVNYXBwZXIsXG4gICAgICAgIHByb3RlY3RlZCBhcHBTdGF0ZVN0b3JlOiBBcHBTdGF0ZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbWV0YWRhdGFTdG9yZTogTWV0YWRhdGFTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIHJvdXRlQ29udmVydGVyOiBSb3V0ZUNvbnZlcnRlcixcbiAgICAgICAgcHJvdGVjdGVkIGFwcE1ldGFkYXRhOiBBcHBNZXRhZGF0YVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgYXV0aDogQXV0aFNlcnZpY2VcbiAgICApIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBzeXN0ZW1Db25maWdTdG9yZSxcbiAgICAgICAgICAgIGxhbmd1YWdlU3RvcmUsXG4gICAgICAgICAgICBuYXZpZ2F0aW9uU3RvcmUsXG4gICAgICAgICAgICB1c2VyUHJlZmVyZW5jZVN0b3JlLFxuICAgICAgICAgICAgdGhlbWVJbWFnZXNTdG9yZSxcbiAgICAgICAgICAgIGFwcFN0YXRlU3RvcmUsXG4gICAgICAgICAgICBtb2R1bGVOYW1lTWFwcGVyLFxuICAgICAgICAgICAgbWVzc2FnZVNlcnZpY2UsXG4gICAgICAgICAgICBhcHBNZXRhZGF0YSxcbiAgICAgICAgICAgIGF1dGhcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXNvbHZlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYW55IHtcbiAgICAgICAgbGV0IHJvdXRlTW9kdWxlID0gcm91dGUucGFyYW1zLm1vZHVsZTtcblxuICAgICAgICBpZiAoIXJvdXRlTW9kdWxlKSB7XG4gICAgICAgICAgICByb3V0ZU1vZHVsZSA9IHJvdXRlLmRhdGEubW9kdWxlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdXBlci5yZXNvbHZlKHJvdXRlKS5waXBlKFxuICAgICAgICAgICAgY29uY2F0TWFwKFxuICAgICAgICAgICAgICAgICgpID0+IGZvcmtKb2luKFtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXRhZGF0YVN0b3JlLmxvYWQocm91dGVNb2R1bGUsIHRoaXMubWV0YWRhdGFTdG9yZS5nZXRNZXRhZGF0YVR5cGVzKCkpLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1ldGFkYXRhU3RvcmUuZ2V0TWV0YWRhdGEoJ3NhdmVkLXNlYXJjaCcsIFsncmVjb3JkVmlldyddKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIG1hcCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGE6IHZhbHVlWzBdID8/IHt9LFxuICAgICAgICAgICAgICAgICAgICBzYXZlZFNlYXJjaE1ldGE6IHZhbHVlWzFdID8/IHt9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdGFwKFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJvdXRlTW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2R1bGUgPSB0aGlzLmNhbGN1bGF0ZUFjdGl2ZU1vZHVsZShyb3V0ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwU3RhdGVTdG9yZS5zZXRNb2R1bGUobW9kdWxlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmZvID0gdGhpcy5yb3V0ZUNvbnZlcnRlci5wYXJzZVJvdXRlVVJMKHJvdXRlLnVybCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IGluZm8uYWN0aW9uID8/ICdpbmRleCc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwU3RhdGVTdG9yZS5zZXRWaWV3KGFjdGlvbik7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkTWV0YWRhdGFMb2FkRXJyb3JNZXNzYWdlKCk7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICk7XG4gICAgfVxufVxuIl19