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
import * as i1 from "../../../store/system-config/system-config.store";
class ActionNameMapper {
    systemConfig;
    constructor(systemConfig) {
        this.systemConfig = systemConfig;
    }
    /**
     * Public Api
     */
    /**
     * Map the legacy name to frontend
     *
     * @param {string} action the action name
     * @returns {string} frontend name
     */
    toFrontend(action) {
        const map = this.getLegacyToFrontendMap();
        if (!map[action]) {
            return action;
        }
        return map[action];
    }
    /**
     * Map the frontend name to legacy
     *
     * @param {string} action the action name
     * @returns {string} frontend name
     */
    toLegacy(action) {
        const map = this.getFrontendToLegacyMap();
        if (!map[action]) {
            return action;
        }
        return map[action];
    }
    /**
     * Check if action is valid
     *
     * @param {string} action the action name
     * @returns {boolean} is valid
     */
    isValid(action) {
        const map = this.getFrontendToLegacyMap();
        let valid = false;
        if (map[action]) {
            valid = true;
        }
        return valid;
    }
    /**
     * Internal API
     */
    /**
     * Get the legacy to frontend map
     *
     * @returns {{}} legacy to frontend map
     */
    getLegacyToFrontendMap() {
        return this.systemConfig.getConfigValue('action_name_map');
    }
    /**
     * Get the frontend to legacy map
     *
     * @returns {{}} frontend to legacy map
     */
    getFrontendToLegacyMap() {
        const map = this.systemConfig.getConfigValue('action_name_map');
        const invertedMap = {};
        Object.keys(map).forEach((legacyName) => {
            const frontendName = map[legacyName];
            invertedMap[frontendName] = legacyName;
        });
        return invertedMap;
    }
    static ɵfac = function ActionNameMapper_Factory(t) { return new (t || ActionNameMapper)(i0.ɵɵinject(i1.SystemConfigStore)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ActionNameMapper, factory: ActionNameMapper.ɵfac, providedIn: 'root' });
}
export { ActionNameMapper };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ActionNameMapper, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: i1.SystemConfigStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLW5hbWUtbWFwcGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc2VydmljZXMvbmF2aWdhdGlvbi9hY3Rpb24tbmFtZS1tYXBwZXIvYWN0aW9uLW5hbWUtbWFwcGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUl6QyxNQUNhLGdCQUFnQjtJQUVMO0lBQXBCLFlBQW9CLFlBQStCO1FBQS9CLGlCQUFZLEdBQVosWUFBWSxDQUFtQjtJQUNuRCxDQUFDO0lBRUQ7O09BRUc7SUFFSDs7Ozs7T0FLRztJQUNJLFVBQVUsQ0FBQyxNQUFjO1FBQzVCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBRTFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUM7WUFDYixPQUFPLE1BQU0sQ0FBQztTQUNqQjtRQUVELE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLFFBQVEsQ0FBQyxNQUFjO1FBQzFCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBRTFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUM7WUFDYixPQUFPLE1BQU0sQ0FBQztTQUNqQjtRQUVELE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLE9BQU8sQ0FBQyxNQUFjO1FBQ3pCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQzFDLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQztRQUVsQixJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNiLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDaEI7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBR0Q7O09BRUc7SUFFSDs7OztPQUlHO0lBQ08sc0JBQXNCO1FBQzVCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNPLHNCQUFzQjtRQUM1QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ2hFLE1BQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUV2QixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFO1lBQ3BDLE1BQU0sWUFBWSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNyQyxXQUFXLENBQUMsWUFBWSxDQUFDLEdBQUcsVUFBVSxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQzswRUF2RlEsZ0JBQWdCO2dFQUFoQixnQkFBZ0IsV0FBaEIsZ0JBQWdCLG1CQURKLE1BQU07O1NBQ2xCLGdCQUFnQjt1RkFBaEIsZ0JBQWdCO2NBRDVCLFVBQVU7ZUFBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1N5c3RlbUNvbmZpZ1N0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9zeXN0ZW0tY29uZmlnL3N5c3RlbS1jb25maWcuc3RvcmUnO1xuaW1wb3J0IHtTdHJpbmdNYXB9IGZyb20gJ2NvbW1vbic7XG5cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIEFjdGlvbk5hbWVNYXBwZXIge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzeXN0ZW1Db25maWc6IFN5c3RlbUNvbmZpZ1N0b3JlKSB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHVibGljIEFwaVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogTWFwIHRoZSBsZWdhY3kgbmFtZSB0byBmcm9udGVuZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbiB0aGUgYWN0aW9uIG5hbWVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBmcm9udGVuZCBuYW1lXG4gICAgICovXG4gICAgcHVibGljIHRvRnJvbnRlbmQoYWN0aW9uOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBtYXAgPSB0aGlzLmdldExlZ2FjeVRvRnJvbnRlbmRNYXAoKTtcblxuICAgICAgICBpZiAoIW1hcFthY3Rpb25dKXtcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb247XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWFwW2FjdGlvbl07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFwIHRoZSBmcm9udGVuZCBuYW1lIHRvIGxlZ2FjeVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbiB0aGUgYWN0aW9uIG5hbWVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBmcm9udGVuZCBuYW1lXG4gICAgICovXG4gICAgcHVibGljIHRvTGVnYWN5KGFjdGlvbjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgbWFwID0gdGhpcy5nZXRGcm9udGVuZFRvTGVnYWN5TWFwKCk7XG5cbiAgICAgICAgaWYgKCFtYXBbYWN0aW9uXSl7XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1hcFthY3Rpb25dO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGFjdGlvbiBpcyB2YWxpZFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbiB0aGUgYWN0aW9uIG5hbWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gaXMgdmFsaWRcbiAgICAgKi9cbiAgICBwdWJsaWMgaXNWYWxpZChhY3Rpb246IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBtYXAgPSB0aGlzLmdldEZyb250ZW5kVG9MZWdhY3lNYXAoKTtcbiAgICAgICAgbGV0IHZhbGlkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKG1hcFthY3Rpb25dKSB7XG4gICAgICAgICAgICB2YWxpZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsaWQ7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBBUElcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbGVnYWN5IHRvIGZyb250ZW5kIG1hcFxuICAgICAqXG4gICAgICogQHJldHVybnMge3t9fSBsZWdhY3kgdG8gZnJvbnRlbmQgbWFwXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldExlZ2FjeVRvRnJvbnRlbmRNYXAoKTogU3RyaW5nTWFwIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3lzdGVtQ29uZmlnLmdldENvbmZpZ1ZhbHVlKCdhY3Rpb25fbmFtZV9tYXAnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGZyb250ZW5kIHRvIGxlZ2FjeSBtYXBcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt7fX0gZnJvbnRlbmQgdG8gbGVnYWN5IG1hcFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRGcm9udGVuZFRvTGVnYWN5TWFwKCk6IFN0cmluZ01hcCB7XG4gICAgICAgIGNvbnN0IG1hcCA9IHRoaXMuc3lzdGVtQ29uZmlnLmdldENvbmZpZ1ZhbHVlKCdhY3Rpb25fbmFtZV9tYXAnKTtcbiAgICAgICAgY29uc3QgaW52ZXJ0ZWRNYXAgPSB7fTtcblxuICAgICAgICBPYmplY3Qua2V5cyhtYXApLmZvckVhY2goKGxlZ2FjeU5hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZyb250ZW5kTmFtZSA9IG1hcFtsZWdhY3lOYW1lXTtcbiAgICAgICAgICAgIGludmVydGVkTWFwW2Zyb250ZW5kTmFtZV0gPSBsZWdhY3lOYW1lO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gaW52ZXJ0ZWRNYXA7XG4gICAgfVxufVxuIl19