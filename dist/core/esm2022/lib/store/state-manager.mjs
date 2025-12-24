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
import * as i0 from "@angular/core";
import * as i1 from "./app-state/app-state.store";
import * as i2 from "./language/language.store";
import * as i3 from "./metadata/metadata.store.service";
import * as i4 from "./navigation/navigation.store";
import * as i5 from "./system-config/system-config.store";
import * as i6 from "./theme-images/theme-images.store";
import * as i7 from "./user-preference/user-preference.store";
import * as i8 from "./app-metadata/app-metadata.store.service";
class StateManager {
    appStore;
    languageStore;
    metadataStore;
    navigationStore;
    systemConfigStore;
    themeImagesStore;
    userPreferenceStore;
    appMetadataStore;
    stateStores = {};
    constructor(appStore, languageStore, metadataStore, navigationStore, systemConfigStore, themeImagesStore, userPreferenceStore, appMetadataStore) {
        this.appStore = appStore;
        this.languageStore = languageStore;
        this.metadataStore = metadataStore;
        this.navigationStore = navigationStore;
        this.systemConfigStore = systemConfigStore;
        this.themeImagesStore = themeImagesStore;
        this.userPreferenceStore = userPreferenceStore;
        this.appMetadataStore = appMetadataStore;
        this.stateStores.appStore = this.buildMapEntry(appStore, false);
        this.stateStores.navigationStore = this.buildMapEntry(navigationStore, true);
        this.stateStores.languageStore = this.buildMapEntry(languageStore, true);
        this.stateStores.metadataStore = this.buildMapEntry(metadataStore, false);
        this.stateStores.systemConfigStore = this.buildMapEntry(systemConfigStore, false);
        this.stateStores.themeImagesStore = this.buildMapEntry(themeImagesStore, false);
        this.stateStores.userPreferenceStore = this.buildMapEntry(userPreferenceStore, true);
        this.stateStores.appMetadataStore = this.buildMapEntry(appMetadataStore, true);
    }
    /**
     * Public Api
     */
    /**
     * Clear all state
     */
    clear() {
        Object.keys(this.stateStores).forEach((key) => {
            this.stateStores[key].store.clear();
        });
    }
    /**
     * Clear all state
     */
    clearAuthBased() {
        Object.keys(this.stateStores).forEach((key) => {
            if (this.stateStores[key].authBased) {
                this.stateStores[key].store.clearAuthBased();
            }
        });
    }
    clearBackendCacheable() {
        this.clearAuthBased();
        this.systemConfigStore.clear();
    }
    /**
     * Internal api
     */
    /**
     * Build Map entry
     *
     * @param {{}} store to use
     * @param {boolean} authBased flag
     * @returns {{}} StateStoreMapEntry
     */
    buildMapEntry(store, authBased) {
        return {
            store,
            authBased
        };
    }
    static ɵfac = function StateManager_Factory(t) { return new (t || StateManager)(i0.ɵɵinject(i1.AppStateStore), i0.ɵɵinject(i2.LanguageStore), i0.ɵɵinject(i3.MetadataStore), i0.ɵɵinject(i4.NavigationStore), i0.ɵɵinject(i5.SystemConfigStore), i0.ɵɵinject(i6.ThemeImagesStore), i0.ɵɵinject(i7.UserPreferenceStore), i0.ɵɵinject(i8.AppMetadataStore)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StateManager, factory: StateManager.ɵfac, providedIn: 'root' });
}
export { StateManager };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StateManager, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.AppStateStore }, { type: i2.LanguageStore }, { type: i3.MetadataStore }, { type: i4.NavigationStore }, { type: i5.SystemConfigStore }, { type: i6.ThemeImagesStore }, { type: i7.UserPreferenceStore }, { type: i8.AppMetadataStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUtbWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9zdG9yZS9zdGF0ZS1tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7O0FBV3pDLE1BR2EsWUFBWTtJQUlQO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFWSixXQUFXLEdBQWtCLEVBQUUsQ0FBQztJQUUxQyxZQUNjLFFBQXVCLEVBQ3ZCLGFBQTRCLEVBQzVCLGFBQTRCLEVBQzVCLGVBQWdDLEVBQ2hDLGlCQUFvQyxFQUNwQyxnQkFBa0MsRUFDbEMsbUJBQXdDLEVBQ3hDLGdCQUFrQztRQVBsQyxhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBRTVDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNsRixJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRUQ7O09BRUc7SUFFSDs7T0FFRztJQUNJLEtBQUs7UUFDUixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUMxQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7T0FFRztJQUNJLGNBQWM7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDMUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRTtnQkFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDaEQ7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxxQkFBcUI7UUFDeEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQ7O09BRUc7SUFFSDs7Ozs7O09BTUc7SUFDTyxhQUFhLENBQUMsS0FBaUIsRUFBRSxTQUFrQjtRQUN6RCxPQUFPO1lBQ0gsS0FBSztZQUNMLFNBQVM7U0FDWixDQUFDO0lBQ04sQ0FBQztzRUFwRVEsWUFBWTtnRUFBWixZQUFZLFdBQVosWUFBWSxtQkFGVCxNQUFNOztTQUVULFlBQVk7dUZBQVosWUFBWTtjQUh4QixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FwcFN0YXRlU3RvcmV9IGZyb20gJy4vYXBwLXN0YXRlL2FwcC1zdGF0ZS5zdG9yZSc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4vbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtOYXZpZ2F0aW9uU3RvcmV9IGZyb20gJy4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLnN0b3JlJztcbmltcG9ydCB7U3lzdGVtQ29uZmlnU3RvcmV9IGZyb20gJy4vc3lzdGVtLWNvbmZpZy9zeXN0ZW0tY29uZmlnLnN0b3JlJztcbmltcG9ydCB7VGhlbWVJbWFnZXNTdG9yZX0gZnJvbSAnLi90aGVtZS1pbWFnZXMvdGhlbWUtaW1hZ2VzLnN0b3JlJztcbmltcG9ydCB7VXNlclByZWZlcmVuY2VTdG9yZX0gZnJvbSAnLi91c2VyLXByZWZlcmVuY2UvdXNlci1wcmVmZXJlbmNlLnN0b3JlJztcbmltcG9ydCB7U3RhdGVTdG9yZSwgU3RhdGVTdG9yZU1hcCwgU3RhdGVTdG9yZU1hcEVudHJ5fSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7TWV0YWRhdGFTdG9yZX0gZnJvbSAnLi9tZXRhZGF0YS9tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7QXBwTWV0YWRhdGFTdG9yZX0gZnJvbSAnLi9hcHAtbWV0YWRhdGEvYXBwLW1ldGFkYXRhLnN0b3JlLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTdGF0ZU1hbmFnZXIge1xuICAgIHByb3RlY3RlZCBzdGF0ZVN0b3JlczogU3RhdGVTdG9yZU1hcCA9IHt9O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBhcHBTdG9yZTogQXBwU3RhdGVTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlU3RvcmU6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBtZXRhZGF0YVN0b3JlOiBNZXRhZGF0YVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbmF2aWdhdGlvblN0b3JlOiBOYXZpZ2F0aW9uU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBzeXN0ZW1Db25maWdTdG9yZTogU3lzdGVtQ29uZmlnU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCB0aGVtZUltYWdlc1N0b3JlOiBUaGVtZUltYWdlc1N0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgdXNlclByZWZlcmVuY2VTdG9yZTogVXNlclByZWZlcmVuY2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGFwcE1ldGFkYXRhU3RvcmU6IEFwcE1ldGFkYXRhU3RvcmUsXG4gICAgKSB7XG4gICAgICAgIHRoaXMuc3RhdGVTdG9yZXMuYXBwU3RvcmUgPSB0aGlzLmJ1aWxkTWFwRW50cnkoYXBwU3RvcmUsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5zdGF0ZVN0b3Jlcy5uYXZpZ2F0aW9uU3RvcmUgPSB0aGlzLmJ1aWxkTWFwRW50cnkobmF2aWdhdGlvblN0b3JlLCB0cnVlKTtcbiAgICAgICAgdGhpcy5zdGF0ZVN0b3Jlcy5sYW5ndWFnZVN0b3JlID0gdGhpcy5idWlsZE1hcEVudHJ5KGxhbmd1YWdlU3RvcmUsIHRydWUpO1xuICAgICAgICB0aGlzLnN0YXRlU3RvcmVzLm1ldGFkYXRhU3RvcmUgPSB0aGlzLmJ1aWxkTWFwRW50cnkobWV0YWRhdGFTdG9yZSwgZmFsc2UpO1xuICAgICAgICB0aGlzLnN0YXRlU3RvcmVzLnN5c3RlbUNvbmZpZ1N0b3JlID0gdGhpcy5idWlsZE1hcEVudHJ5KHN5c3RlbUNvbmZpZ1N0b3JlLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuc3RhdGVTdG9yZXMudGhlbWVJbWFnZXNTdG9yZSA9IHRoaXMuYnVpbGRNYXBFbnRyeSh0aGVtZUltYWdlc1N0b3JlLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuc3RhdGVTdG9yZXMudXNlclByZWZlcmVuY2VTdG9yZSA9IHRoaXMuYnVpbGRNYXBFbnRyeSh1c2VyUHJlZmVyZW5jZVN0b3JlLCB0cnVlKTtcbiAgICAgICAgdGhpcy5zdGF0ZVN0b3Jlcy5hcHBNZXRhZGF0YVN0b3JlID0gdGhpcy5idWlsZE1hcEVudHJ5KGFwcE1ldGFkYXRhU3RvcmUsIHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBBcGlcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIENsZWFyIGFsbCBzdGF0ZVxuICAgICAqL1xuICAgIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5zdGF0ZVN0b3JlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlU3RvcmVzW2tleV0uc3RvcmUuY2xlYXIoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgYWxsIHN0YXRlXG4gICAgICovXG4gICAgcHVibGljIGNsZWFyQXV0aEJhc2VkKCk6IHZvaWQge1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnN0YXRlU3RvcmVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlU3RvcmVzW2tleV0uYXV0aEJhc2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVN0b3Jlc1trZXldLnN0b3JlLmNsZWFyQXV0aEJhc2VkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhckJhY2tlbmRDYWNoZWFibGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2xlYXJBdXRoQmFzZWQoKTtcbiAgICAgICAgdGhpcy5zeXN0ZW1Db25maWdTdG9yZS5jbGVhcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludGVybmFsIGFwaVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQnVpbGQgTWFwIGVudHJ5XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3t9fSBzdG9yZSB0byB1c2VcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGF1dGhCYXNlZCBmbGFnXG4gICAgICogQHJldHVybnMge3t9fSBTdGF0ZVN0b3JlTWFwRW50cnlcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYnVpbGRNYXBFbnRyeShzdG9yZTogU3RhdGVTdG9yZSwgYXV0aEJhc2VkOiBib29sZWFuKTogU3RhdGVTdG9yZU1hcEVudHJ5IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0b3JlLFxuICAgICAgICAgICAgYXV0aEJhc2VkXG4gICAgICAgIH07XG4gICAgfVxufVxuIl19