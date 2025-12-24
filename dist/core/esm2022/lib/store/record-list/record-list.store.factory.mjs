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
import { RecordListStore } from './record-list.store';
import * as i0 from "@angular/core";
import * as i1 from "./graphql/api.list.get";
import * as i2 from "../system-config/system-config.store";
import * as i3 from "../user-preference/user-preference.store";
import * as i4 from "../language/language.store";
import * as i5 from "../../services/message/message.service";
class RecordListStoreFactory {
    listGQL;
    configStore;
    preferencesStore;
    languageStore;
    message;
    constructor(listGQL, configStore, preferencesStore, languageStore, message) {
        this.listGQL = listGQL;
        this.configStore = configStore;
        this.preferencesStore = preferencesStore;
        this.languageStore = languageStore;
        this.message = message;
    }
    create() {
        return new RecordListStore(this.listGQL, this.configStore, this.preferencesStore, this.languageStore, this.message);
    }
    static ɵfac = function RecordListStoreFactory_Factory(t) { return new (t || RecordListStoreFactory)(i0.ɵɵinject(i1.ListGQL), i0.ɵɵinject(i2.SystemConfigStore), i0.ɵɵinject(i3.UserPreferenceStore), i0.ɵɵinject(i4.LanguageStore), i0.ɵɵinject(i5.MessageService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordListStoreFactory, factory: RecordListStoreFactory.ɵfac, providedIn: 'root' });
}
export { RecordListStoreFactory };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordListStoreFactory, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.ListGQL }, { type: i2.SystemConfigStore }, { type: i3.UserPreferenceStore }, { type: i4.LanguageStore }, { type: i5.MessageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLWxpc3Quc3RvcmUuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9zdG9yZS9yZWNvcmQtbGlzdC9yZWNvcmQtbGlzdC5zdG9yZS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBTXpDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7OztBQUVwRCxNQUdhLHNCQUFzQjtJQUdqQjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBTGQsWUFDYyxPQUFnQixFQUNoQixXQUE4QixFQUM5QixnQkFBcUMsRUFDckMsYUFBNEIsRUFDNUIsT0FBdUI7UUFKdkIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQixnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7UUFDOUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFxQjtRQUNyQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixZQUFPLEdBQVAsT0FBTyxDQUFnQjtJQUVyQyxDQUFDO0lBRUQsTUFBTTtRQUNGLE9BQU8sSUFBSSxlQUFlLENBQ3RCLElBQUksQ0FBQyxPQUFPLEVBQ1osSUFBSSxDQUFDLFdBQVcsRUFDaEIsSUFBSSxDQUFDLGdCQUFnQixFQUNyQixJQUFJLENBQUMsYUFBYSxFQUNsQixJQUFJLENBQUMsT0FBTyxDQUNmLENBQUM7SUFDTixDQUFDO2dGQW5CUSxzQkFBc0I7Z0VBQXRCLHNCQUFzQixXQUF0QixzQkFBc0IsbUJBRm5CLE1BQU07O1NBRVQsc0JBQXNCO3VGQUF0QixzQkFBc0I7Y0FIbEMsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtMaXN0R1FMfSBmcm9tICcuL2dyYXBocWwvYXBpLmxpc3QuZ2V0JztcbmltcG9ydCB7U3lzdGVtQ29uZmlnU3RvcmV9IGZyb20gJy4uL3N5c3RlbS1jb25maWcvc3lzdGVtLWNvbmZpZy5zdG9yZSc7XG5pbXBvcnQge1VzZXJQcmVmZXJlbmNlU3RvcmV9IGZyb20gJy4uL3VzZXItcHJlZmVyZW5jZS91c2VyLXByZWZlcmVuY2Uuc3RvcmUnO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tZXNzYWdlL21lc3NhZ2Uuc2VydmljZSc7XG5pbXBvcnQge1JlY29yZExpc3RTdG9yZX0gZnJvbSAnLi9yZWNvcmQtbGlzdC5zdG9yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFJlY29yZExpc3RTdG9yZUZhY3Rvcnkge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBsaXN0R1FMOiBMaXN0R1FMLFxuICAgICAgICBwcm90ZWN0ZWQgY29uZmlnU3RvcmU6IFN5c3RlbUNvbmZpZ1N0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgcHJlZmVyZW5jZXNTdG9yZTogVXNlclByZWZlcmVuY2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlU3RvcmU6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBtZXNzYWdlOiBNZXNzYWdlU2VydmljZSxcbiAgICApIHtcbiAgICB9XG5cbiAgICBjcmVhdGUoKTogUmVjb3JkTGlzdFN0b3JlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWNvcmRMaXN0U3RvcmUoXG4gICAgICAgICAgICB0aGlzLmxpc3RHUUwsXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLFxuICAgICAgICAgICAgdGhpcy5wcmVmZXJlbmNlc1N0b3JlLFxuICAgICAgICAgICAgdGhpcy5sYW5ndWFnZVN0b3JlLFxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlXG4gICAgICAgICk7XG4gICAgfVxufVxuIl19