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
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import * as i0 from "@angular/core";
class ImmediateDebounce {
    buffer = new Subject();
    buffer$ = this.buffer.asObservable();
    enabled = true;
    subs = [];
    debounceTime = 1000;
    constructor() {
    }
    init(time = 1000) {
        this.debounceTime = time;
        this.subs.push(this.buffer$.pipe(debounceTime(this.debounceTime)).subscribe(() => {
            this.enabled = true;
        }));
    }
    destroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    debounce(callBack) {
        if (!callBack) {
            return;
        }
        if (!this.enabled) {
            return;
        }
        this.enabled = false;
        callBack();
        this.buffer.next(true);
    }
    static ɵfac = function ImmediateDebounce_Factory(t) { return new (t || ImmediateDebounce)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ImmediateDebounce, factory: ImmediateDebounce.ɵfac });
}
export { ImmediateDebounce };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ImmediateDebounce, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1tZWRpYXRlLWRlYm91bmNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc2VydmljZXMvdXRpbHMvaW1tZWRpYXRlLWRlYm91bmNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFhLE9BQU8sRUFBZSxNQUFNLE1BQU0sQ0FBQztBQUN2RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7O0FBRTVDLE1BQ2EsaUJBQWlCO0lBQ2hCLE1BQU0sR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO0lBQ2hDLE9BQU8sR0FBd0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxRCxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ2YsSUFBSSxHQUFtQixFQUFFLENBQUM7SUFDMUIsWUFBWSxHQUFXLElBQUksQ0FBQztJQUV0QztJQUNBLENBQUM7SUFFRCxJQUFJLENBQUMsT0FBZSxJQUFJO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQzdFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDO0lBRUQsT0FBTztRQUNILElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELFFBQVEsQ0FBQyxRQUFrQjtRQUV2QixJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ1gsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZixPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixRQUFRLEVBQUUsQ0FBQztRQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7MkVBbENRLGlCQUFpQjtnRUFBakIsaUJBQWlCLFdBQWpCLGlCQUFpQjs7U0FBakIsaUJBQWlCO3VGQUFqQixpQkFBaUI7Y0FEN0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7ZGVib3VuY2VUaW1lfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbW1lZGlhdGVEZWJvdW5jZSB7XG4gICAgcHJvdGVjdGVkIGJ1ZmZlciA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gICAgcHJvdGVjdGVkIGJ1ZmZlciQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLmJ1ZmZlci5hc09ic2VydmFibGUoKTtcbiAgICBwcm90ZWN0ZWQgZW5hYmxlZCA9IHRydWU7XG4gICAgcHJvdGVjdGVkIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gICAgcHJvdGVjdGVkIGRlYm91bmNlVGltZTogbnVtYmVyID0gMTAwMDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIGluaXQodGltZTogbnVtYmVyID0gMTAwMCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRlYm91bmNlVGltZSA9IHRpbWU7XG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKHRoaXMuYnVmZmVyJC5waXBlKGRlYm91bmNlVGltZSh0aGlzLmRlYm91bmNlVGltZSkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgICB9XG5cbiAgICBkZWJvdW5jZShjYWxsQmFjazogRnVuY3Rpb24pOiB2b2lkIHtcblxuICAgICAgICBpZiAoIWNhbGxCYWNrKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgIGNhbGxCYWNrKCk7XG4gICAgICAgIHRoaXMuYnVmZmVyLm5leHQodHJ1ZSk7XG4gICAgfVxuXG59XG4iXX0=