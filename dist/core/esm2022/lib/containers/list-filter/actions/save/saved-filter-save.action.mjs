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
import { take } from 'rxjs/operators';
import { SavedFilterActionHandler } from '../saved-filter.action';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/message/message.service";
class SavedFilterSaveAction extends SavedFilterActionHandler {
    message;
    key = 'save';
    modes = ['edit'];
    constructor(message) {
        super();
        this.message = message;
    }
    run(data) {
        data.store.validate().pipe(take(1)).subscribe(valid => {
            if (valid) {
                data.store.save().pipe(take(1)).subscribe(savedFilter => {
                    data.listFilterStore.config.addSavedFilter(data.store.recordStore.extractBaseRecord(savedFilter));
                    data.listFilterStore.applyFilter();
                    this.message.addSuccessMessageByKey('LBL_SAVED_FILTER_SAVED');
                });
                return;
            }
            this.message.addWarningMessageByKey('LBL_VALIDATION_ERRORS');
        });
    }
    shouldDisplay() {
        return true;
    }
    static ɵfac = function SavedFilterSaveAction_Factory(t) { return new (t || SavedFilterSaveAction)(i0.ɵɵinject(i1.MessageService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SavedFilterSaveAction, factory: SavedFilterSaveAction.ɵfac, providedIn: 'root' });
}
export { SavedFilterSaveAction };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SavedFilterSaveAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.MessageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZWQtZmlsdGVyLXNhdmUuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbnRhaW5lcnMvbGlzdC1maWx0ZXIvYWN0aW9ucy9zYXZlL3NhdmVkLWZpbHRlci1zYXZlLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEMsT0FBTyxFQUF3Qix3QkFBd0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7QUFFdkYsTUFHYSxxQkFBc0IsU0FBUSx3QkFBd0I7SUFLekM7SUFIdEIsR0FBRyxHQUFHLE1BQU0sQ0FBQztJQUNiLEtBQUssR0FBRyxDQUFDLE1BQWtCLENBQUMsQ0FBQztJQUU3QixZQUFzQixPQUF1QjtRQUN6QyxLQUFLLEVBQUUsQ0FBQztRQURVLFlBQU8sR0FBUCxPQUFPLENBQWdCO0lBRTdDLENBQUM7SUFFRCxHQUFHLENBQUMsSUFBMkI7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2xELElBQUksS0FBSyxFQUFFO2dCQUNQLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsRUFBRTtvQkFDcEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7b0JBQ2xHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsd0JBQXdCLENBQUMsQ0FBQTtnQkFDakUsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsT0FBTzthQUNWO1lBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ2pFLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGFBQWE7UUFDVCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDOytFQTFCUSxxQkFBcUI7Z0VBQXJCLHFCQUFxQixXQUFyQixxQkFBcUIsbUJBRmxCLE1BQU07O1NBRVQscUJBQXFCO3VGQUFyQixxQkFBcUI7Y0FIakMsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtWaWV3TW9kZX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7dGFrZX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbWVzc2FnZS9tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHtTYXZlZEZpbHRlckFjdGlvbkRhdGEsIFNhdmVkRmlsdGVyQWN0aW9uSGFuZGxlcn0gZnJvbSAnLi4vc2F2ZWQtZmlsdGVyLmFjdGlvbic7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2F2ZWRGaWx0ZXJTYXZlQWN0aW9uIGV4dGVuZHMgU2F2ZWRGaWx0ZXJBY3Rpb25IYW5kbGVyIHtcblxuICAgIGtleSA9ICdzYXZlJztcbiAgICBtb2RlcyA9IFsnZWRpdCcgYXMgVmlld01vZGVdO1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIG1lc3NhZ2U6IE1lc3NhZ2VTZXJ2aWNlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcnVuKGRhdGE6IFNhdmVkRmlsdGVyQWN0aW9uRGF0YSk6IHZvaWQge1xuICAgICAgICBkYXRhLnN0b3JlLnZhbGlkYXRlKCkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUodmFsaWQgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbGlkKSB7XG4gICAgICAgICAgICAgICAgZGF0YS5zdG9yZS5zYXZlKCkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoc2F2ZWRGaWx0ZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmxpc3RGaWx0ZXJTdG9yZS5jb25maWcuYWRkU2F2ZWRGaWx0ZXIoZGF0YS5zdG9yZS5yZWNvcmRTdG9yZS5leHRyYWN0QmFzZVJlY29yZChzYXZlZEZpbHRlcikpO1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmxpc3RGaWx0ZXJTdG9yZS5hcHBseUZpbHRlcigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UuYWRkU3VjY2Vzc01lc3NhZ2VCeUtleSgnTEJMX1NBVkVEX0ZJTFRFUl9TQVZFRCcpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UuYWRkV2FybmluZ01lc3NhZ2VCeUtleSgnTEJMX1ZBTElEQVRJT05fRVJST1JTJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNob3VsZERpc3BsYXkoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cbiJdfQ==