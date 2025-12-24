/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2023 SalesAgility Ltd.
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
import { SubpanelActionHandler } from '../subpanel.action';
import * as i0 from "@angular/core";
class SubpanelShowFilterAction extends SubpanelActionHandler {
    key = 'show-filter';
    modes = ['list'];
    shouldDisplay(data) {
        return true;
    }
    getStatus(data) {
        if (this.isAnyFilterApplied(data.store)) {
            return 'active';
        }
        return '';
    }
    run(data) {
        data.store.toggleFilter();
    }
    isAnyFilterApplied(store) {
        return store.hasActiveFilter() || !store.areAllCurrentCriteriaFilterEmpty();
    }
    static ɵfac = /*@__PURE__*/ function () { let ɵSubpanelShowFilterAction_BaseFactory; return function SubpanelShowFilterAction_Factory(t) { return (ɵSubpanelShowFilterAction_BaseFactory || (ɵSubpanelShowFilterAction_BaseFactory = i0.ɵɵgetInheritedFactory(SubpanelShowFilterAction)))(t || SubpanelShowFilterAction); }; }();
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SubpanelShowFilterAction, factory: SubpanelShowFilterAction.ɵfac, providedIn: 'root' });
}
export { SubpanelShowFilterAction };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SubpanelShowFilterAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvdy1maWx0ZXIuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbnRhaW5lcnMvc3VicGFuZWwvYWN0aW9ucy9zaG93LWZpbHRlci9zaG93LWZpbHRlci5hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFxQixxQkFBcUIsRUFBQyxNQUFNLG9CQUFvQixDQUFDOztBQUk3RSxNQUdhLHdCQUF5QixTQUFRLHFCQUFxQjtJQUMvRCxHQUFHLEdBQUcsYUFBYSxDQUFDO0lBRXBCLEtBQUssR0FBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRTdCLGFBQWEsQ0FBQyxJQUF3QjtRQUNsQyxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsU0FBUyxDQUFDLElBQXdCO1FBQzlCLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNyQyxPQUFPLFFBQVEsQ0FBQztTQUNuQjtRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVELEdBQUcsQ0FBQyxJQUF3QjtRQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxLQUFvQjtRQUNuQyxPQUFPLEtBQUssQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsRUFBRSxDQUFDO0lBQ2hGLENBQUM7a1FBdEJRLHdCQUF3QixTQUF4Qix3QkFBd0I7Z0VBQXhCLHdCQUF3QixXQUF4Qix3QkFBd0IsbUJBRnJCLE1BQU07O1NBRVQsd0JBQXdCO3VGQUF4Qix3QkFBd0I7Y0FIcEMsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjMgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtWaWV3TW9kZX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7U3VicGFuZWxBY3Rpb25EYXRhLCBTdWJwYW5lbEFjdGlvbkhhbmRsZXJ9IGZyb20gJy4uL3N1YnBhbmVsLmFjdGlvbic7XG5pbXBvcnQge1N1YnBhbmVsU3RvcmV9IGZyb20gXCIuLi8uLi9zdG9yZS9zdWJwYW5lbC9zdWJwYW5lbC5zdG9yZVwiO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU3VicGFuZWxTaG93RmlsdGVyQWN0aW9uIGV4dGVuZHMgU3VicGFuZWxBY3Rpb25IYW5kbGVyIHtcbiAgICBrZXkgPSAnc2hvdy1maWx0ZXInO1xuXG4gICAgbW9kZXM6IFZpZXdNb2RlW10gPSBbJ2xpc3QnXTtcblxuICAgIHNob3VsZERpc3BsYXkoZGF0YTogU3VicGFuZWxBY3Rpb25EYXRhKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGdldFN0YXR1cyhkYXRhOiBTdWJwYW5lbEFjdGlvbkRhdGEpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5pc0FueUZpbHRlckFwcGxpZWQoZGF0YS5zdG9yZSkpIHtcbiAgICAgICAgICAgIHJldHVybiAnYWN0aXZlJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgcnVuKGRhdGE6IFN1YnBhbmVsQWN0aW9uRGF0YSk6IHZvaWQge1xuICAgICAgICBkYXRhLnN0b3JlLnRvZ2dsZUZpbHRlcigpO1xuICAgIH1cblxuICAgIGlzQW55RmlsdGVyQXBwbGllZChzdG9yZTogU3VicGFuZWxTdG9yZSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gc3RvcmUuaGFzQWN0aXZlRmlsdGVyKCkgfHwgIXN0b3JlLmFyZUFsbEN1cnJlbnRDcml0ZXJpYUZpbHRlckVtcHR5KCk7XG4gICAgfVxufVxuIl19