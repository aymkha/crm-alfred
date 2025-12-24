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
import { concatMap, map, tap } from 'rxjs/operators';
import { BaseMetadataResolver } from '../../../services/metadata/base-metadata.resolver';
import { forkJoin } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../../../store/system-config/system-config.store";
import * as i2 from "../../../store/language/language.store";
import * as i3 from "../../../store/navigation/navigation.store";
import * as i4 from "../../../store/user-preference/user-preference.store";
import * as i5 from "../../../store/theme-images/theme-images.store";
import * as i6 from "../../../services/navigation/module-name-mapper/module-name-mapper.service";
import * as i7 from "../../../services/navigation/route-converter/route-converter.service";
import * as i8 from "../../../services/message/message.service";
import * as i9 from "../../../store/app-state/app-state.store";
import * as i10 from "../../../store/app-metadata/app-metadata.store.service";
import * as i11 from "../../../services/auth/auth.service";
import * as i12 from "../../../services/navigation/recently-viewed/recently-viewed.service";
import * as i13 from "../../../store/metadata/metadata.store.service";
class ClassicViewResolver extends BaseMetadataResolver {
    systemConfigStore;
    languageStore;
    navigationStore;
    userPreferenceStore;
    themeImagesStore;
    moduleNameMapper;
    routeConverter;
    messageService;
    appStateStore;
    appMetadata;
    auth;
    recentlyViewed;
    metadataStore;
    constructor(systemConfigStore, languageStore, navigationStore, userPreferenceStore, themeImagesStore, moduleNameMapper, routeConverter, messageService, appStateStore, appMetadata, auth, recentlyViewed, metadataStore) {
        super(systemConfigStore, languageStore, navigationStore, userPreferenceStore, themeImagesStore, appStateStore, moduleNameMapper, messageService, appMetadata, auth);
        this.systemConfigStore = systemConfigStore;
        this.languageStore = languageStore;
        this.navigationStore = navigationStore;
        this.userPreferenceStore = userPreferenceStore;
        this.themeImagesStore = themeImagesStore;
        this.moduleNameMapper = moduleNameMapper;
        this.routeConverter = routeConverter;
        this.messageService = messageService;
        this.appStateStore = appStateStore;
        this.appMetadata = appMetadata;
        this.auth = auth;
        this.recentlyViewed = recentlyViewed;
        this.metadataStore = metadataStore;
    }
    resolve(route) {
        const module = this.calculateActiveModule(route);
        return super.resolve(route).pipe(concatMap(() => {
            return forkJoin([
                this.metadataStore.load(module, this.metadataStore.getMetadataTypes()),
            ]);
        }), map(() => this.routeConverter.toLegacy(route.params, route.queryParams)), tap(() => {
            if (route.params.module) {
                const module = this.calculateActiveModule(route);
                this.appStateStore.setModule(module);
            }
            const info = this.routeConverter.parseRouteURL(route.url);
            const action = info.action ?? 'index';
            this.appStateStore.setView(action);
            this.recentlyViewed.onNavigationAdd(this.appStateStore.getModule(), route);
        }, () => {
            this.addMetadataLoadErrorMessage();
        }));
    }
    static ɵfac = function ClassicViewResolver_Factory(t) { return new (t || ClassicViewResolver)(i0.ɵɵinject(i1.SystemConfigStore), i0.ɵɵinject(i2.LanguageStore), i0.ɵɵinject(i3.NavigationStore), i0.ɵɵinject(i4.UserPreferenceStore), i0.ɵɵinject(i5.ThemeImagesStore), i0.ɵɵinject(i6.ModuleNameMapper), i0.ɵɵinject(i7.RouteConverter), i0.ɵɵinject(i8.MessageService), i0.ɵɵinject(i9.AppStateStore), i0.ɵɵinject(i10.AppMetadataStore), i0.ɵɵinject(i11.AuthService), i0.ɵɵinject(i12.RecentlyViewedService), i0.ɵɵinject(i13.MetadataStore)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ClassicViewResolver, factory: ClassicViewResolver.ɵfac, providedIn: 'root' });
}
export { ClassicViewResolver };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ClassicViewResolver, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: i1.SystemConfigStore }, { type: i2.LanguageStore }, { type: i3.NavigationStore }, { type: i4.UserPreferenceStore }, { type: i5.ThemeImagesStore }, { type: i6.ModuleNameMapper }, { type: i7.RouteConverter }, { type: i8.MessageService }, { type: i9.AppStateStore }, { type: i10.AppMetadataStore }, { type: i11.AuthService }, { type: i12.RecentlyViewedService }, { type: i13.MetadataStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NpYy12aWV3LnJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3ZpZXdzL2NsYXNzaWMvc2VydmljZXMvY2xhc3NpYy12aWV3LnJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBTW5ELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBUXZGLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQUc5QixNQUNhLG1CQUFvQixTQUFRLG9CQUFvQjtJQUczQztJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQWJkLFlBQ2MsaUJBQW9DLEVBQ3BDLGFBQTRCLEVBQzVCLGVBQWdDLEVBQ2hDLG1CQUF3QyxFQUN4QyxnQkFBa0MsRUFDbEMsZ0JBQWtDLEVBQ2xDLGNBQThCLEVBQzlCLGNBQThCLEVBQzlCLGFBQTRCLEVBQzVCLFdBQTZCLEVBQzdCLElBQWlCLEVBQ2pCLGNBQXFDLEVBQ3JDLGFBQTRCO1FBRXRDLEtBQUssQ0FDRCxpQkFBaUIsRUFDakIsYUFBYSxFQUNiLGVBQWUsRUFDZixtQkFBbUIsRUFDbkIsZ0JBQWdCLEVBQ2hCLGFBQWEsRUFDYixnQkFBZ0IsRUFDaEIsY0FBYyxFQUNkLFdBQVcsRUFDWCxJQUFJLENBQ1AsQ0FBQztRQXpCUSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUM3QixTQUFJLEdBQUosSUFBSSxDQUFhO1FBQ2pCLG1CQUFjLEdBQWQsY0FBYyxDQUF1QjtRQUNyQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQWMxQyxDQUFDO0lBRUQsT0FBTyxDQUFDLEtBQTZCO1FBQ2pDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRCxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUM1QixTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ1gsT0FBTyxRQUFRLENBQUM7Z0JBQ1osSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzthQUN6RSxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsRUFDRixHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsRUFDeEUsR0FBRyxDQUNDLEdBQUcsRUFBRTtZQUNELElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7Z0JBQ3JCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFakQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDeEM7WUFDRCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDMUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUM7WUFDdEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFbkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMvRSxDQUFDLEVBQ0QsR0FBRyxFQUFFO1lBQ0QsSUFBSSxDQUFDLDJCQUEyQixFQUFFLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQ1QsQ0FBQztJQUNOLENBQUM7NkVBekRRLG1CQUFtQjtnRUFBbkIsbUJBQW1CLFdBQW5CLG1CQUFtQixtQkFEUCxNQUFNOztTQUNsQixtQkFBbUI7dUZBQW5CLG1CQUFtQjtjQUQvQixVQUFVO2VBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90fSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtjb25jYXRNYXAsIG1hcCwgdGFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge01vZHVsZU5hbWVNYXBwZXJ9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL25hdmlnYXRpb24vbW9kdWxlLW5hbWUtbWFwcGVyL21vZHVsZS1uYW1lLW1hcHBlci5zZXJ2aWNlJztcbmltcG9ydCB7QXBwU3RhdGVTdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvYXBwLXN0YXRlL2FwcC1zdGF0ZS5zdG9yZSc7XG5pbXBvcnQge1N5c3RlbUNvbmZpZ1N0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9zeXN0ZW0tY29uZmlnL3N5c3RlbS1jb25maWcuc3RvcmUnO1xuaW1wb3J0IHtOYXZpZ2F0aW9uU3RvcmV9IGZyb20gJy4uLy4uLy4uL3N0b3JlL25hdmlnYXRpb24vbmF2aWdhdGlvbi5zdG9yZSc7XG5pbXBvcnQge1VzZXJQcmVmZXJlbmNlU3RvcmV9IGZyb20gJy4uLy4uLy4uL3N0b3JlL3VzZXItcHJlZmVyZW5jZS91c2VyLXByZWZlcmVuY2Uuc3RvcmUnO1xuaW1wb3J0IHtCYXNlTWV0YWRhdGFSZXNvbHZlcn0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbWV0YWRhdGEvYmFzZS1tZXRhZGF0YS5yZXNvbHZlcic7XG5pbXBvcnQge1JvdXRlQ29udmVydGVyfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL3JvdXRlLWNvbnZlcnRlci9yb3V0ZS1jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7VGhlbWVJbWFnZXNTdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvdGhlbWUtaW1hZ2VzL3RoZW1lLWltYWdlcy5zdG9yZSc7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQge0FwcE1ldGFkYXRhU3RvcmV9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2FwcC1tZXRhZGF0YS9hcHAtbWV0YWRhdGEuc3RvcmUuc2VydmljZSc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9hdXRoL2F1dGguc2VydmljZSc7XG5pbXBvcnQge1JlY2VudGx5Vmlld2VkU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbmF2aWdhdGlvbi9yZWNlbnRseS12aWV3ZWQvcmVjZW50bHktdmlld2VkLnNlcnZpY2UnO1xuaW1wb3J0IHtmb3JrSm9pbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge01ldGFkYXRhU3RvcmV9IGZyb20gJy4uLy4uLy4uL3N0b3JlL21ldGFkYXRhL21ldGFkYXRhLnN0b3JlLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBDbGFzc2ljVmlld1Jlc29sdmVyIGV4dGVuZHMgQmFzZU1ldGFkYXRhUmVzb2x2ZXIge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBzeXN0ZW1Db25maWdTdG9yZTogU3lzdGVtQ29uZmlnU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBsYW5ndWFnZVN0b3JlOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbmF2aWdhdGlvblN0b3JlOiBOYXZpZ2F0aW9uU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCB1c2VyUHJlZmVyZW5jZVN0b3JlOiBVc2VyUHJlZmVyZW5jZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgdGhlbWVJbWFnZXNTdG9yZTogVGhlbWVJbWFnZXNTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIG1vZHVsZU5hbWVNYXBwZXI6IE1vZHVsZU5hbWVNYXBwZXIsXG4gICAgICAgIHByb3RlY3RlZCByb3V0ZUNvbnZlcnRlcjogUm91dGVDb252ZXJ0ZXIsXG4gICAgICAgIHByb3RlY3RlZCBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBhcHBTdGF0ZVN0b3JlOiBBcHBTdGF0ZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgYXBwTWV0YWRhdGE6IEFwcE1ldGFkYXRhU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBhdXRoOiBBdXRoU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIHJlY2VudGx5Vmlld2VkOiBSZWNlbnRseVZpZXdlZFNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBtZXRhZGF0YVN0b3JlOiBNZXRhZGF0YVN0b3JlLFxuICAgICkge1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIHN5c3RlbUNvbmZpZ1N0b3JlLFxuICAgICAgICAgICAgbGFuZ3VhZ2VTdG9yZSxcbiAgICAgICAgICAgIG5hdmlnYXRpb25TdG9yZSxcbiAgICAgICAgICAgIHVzZXJQcmVmZXJlbmNlU3RvcmUsXG4gICAgICAgICAgICB0aGVtZUltYWdlc1N0b3JlLFxuICAgICAgICAgICAgYXBwU3RhdGVTdG9yZSxcbiAgICAgICAgICAgIG1vZHVsZU5hbWVNYXBwZXIsXG4gICAgICAgICAgICBtZXNzYWdlU2VydmljZSxcbiAgICAgICAgICAgIGFwcE1ldGFkYXRhLFxuICAgICAgICAgICAgYXV0aFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlc29sdmUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBhbnkge1xuICAgICAgICBjb25zdCBtb2R1bGUgPSB0aGlzLmNhbGN1bGF0ZUFjdGl2ZU1vZHVsZShyb3V0ZSk7XG4gICAgICAgIHJldHVybiBzdXBlci5yZXNvbHZlKHJvdXRlKS5waXBlKFxuICAgICAgICAgICAgY29uY2F0TWFwKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9ya0pvaW4oW1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1ldGFkYXRhU3RvcmUubG9hZChtb2R1bGUsIHRoaXMubWV0YWRhdGFTdG9yZS5nZXRNZXRhZGF0YVR5cGVzKCkpLFxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBtYXAoKCkgPT4gdGhpcy5yb3V0ZUNvbnZlcnRlci50b0xlZ2FjeShyb3V0ZS5wYXJhbXMsIHJvdXRlLnF1ZXJ5UGFyYW1zKSksXG4gICAgICAgICAgICB0YXAoXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocm91dGUucGFyYW1zLm1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kdWxlID0gdGhpcy5jYWxjdWxhdGVBY3RpdmVNb2R1bGUocm91dGUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcFN0YXRlU3RvcmUuc2V0TW9kdWxlKG1vZHVsZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5mbyA9IHRoaXMucm91dGVDb252ZXJ0ZXIucGFyc2VSb3V0ZVVSTChyb3V0ZS51cmwpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhY3Rpb24gPSBpbmZvLmFjdGlvbiA/PyAnaW5kZXgnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcFN0YXRlU3RvcmUuc2V0VmlldyhhY3Rpb24pO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVjZW50bHlWaWV3ZWQub25OYXZpZ2F0aW9uQWRkKHRoaXMuYXBwU3RhdGVTdG9yZS5nZXRNb2R1bGUoKSwgcm91dGUpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZE1ldGFkYXRhTG9hZEVycm9yTWVzc2FnZSgpO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ==