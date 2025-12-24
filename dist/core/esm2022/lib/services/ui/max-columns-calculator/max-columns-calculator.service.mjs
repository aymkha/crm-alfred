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
import { combineLatestWith } from 'rxjs';
import { ScreenSize } from '../screen-size-observer/screen-size-observer.service';
import { distinctUntilChanged, map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../screen-size-observer/screen-size-observer.service";
import * as i2 from "../../../store/system-config/system-config.store";
class MaxColumnsCalculator {
    screenSize;
    systemConfigStore;
    screen = ScreenSize.Medium;
    maxColumns = 5;
    constructor(screenSize, systemConfigStore) {
        this.screenSize = screenSize;
        this.systemConfigStore = systemConfigStore;
    }
    getMaxColumns(sidebarActive$) {
        return sidebarActive$.pipe(combineLatestWith(this.screenSize.screenSize$), map(([sidebarActive, screenSize]) => {
            if (screenSize) {
                this.screen = screenSize;
            }
            return this.calculateMaxColumns(sidebarActive);
        }), distinctUntilChanged());
    }
    calculateMaxColumns(sideBar = true) {
        let sizeMap;
        sizeMap = this.systemConfigStore.getConfigValue('listview_column_limits');
        if (sideBar) {
            sizeMap = sizeMap.with_sidebar;
        }
        else {
            sizeMap = sizeMap.without_sidebar;
        }
        if (this.screen && sizeMap) {
            const maxCols = sizeMap[this.screen];
            if (maxCols) {
                this.maxColumns = maxCols;
            }
        }
        return this.maxColumns;
    }
    static ɵfac = function MaxColumnsCalculator_Factory(t) { return new (t || MaxColumnsCalculator)(i0.ɵɵinject(i1.ScreenSizeObserverService), i0.ɵɵinject(i2.SystemConfigStore)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: MaxColumnsCalculator, factory: MaxColumnsCalculator.ɵfac });
}
export { MaxColumnsCalculator };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MaxColumnsCalculator, [{
        type: Injectable
    }], function () { return [{ type: i1.ScreenSizeObserverService }, { type: i2.SystemConfigStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF4LWNvbHVtbnMtY2FsY3VsYXRvci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3NlcnZpY2VzL3VpL21heC1jb2x1bW5zLWNhbGN1bGF0b3IvbWF4LWNvbHVtbnMtY2FsY3VsYXRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxpQkFBaUIsRUFBYSxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUMsVUFBVSxFQUE0QixNQUFNLHNEQUFzRCxDQUFDO0FBQzNHLE9BQU8sRUFBQyxvQkFBb0IsRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUd6RCxNQUNhLG9CQUFvQjtJQU1mO0lBQ0E7SUFMZCxNQUFNLEdBQWUsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUN2QyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBRWYsWUFDYyxVQUFxQyxFQUNyQyxpQkFBb0M7UUFEcEMsZUFBVSxHQUFWLFVBQVUsQ0FBMkI7UUFDckMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUVsRCxDQUFDO0lBRUQsYUFBYSxDQUFDLGNBQW1DO1FBQzdDLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FDdEIsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsRUFDOUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUF3QixFQUFFLEVBQUU7WUFFdkQsSUFBSSxVQUFVLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUM7YUFDNUI7WUFFRCxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNuRCxDQUFDLENBQUMsRUFDRixvQkFBb0IsRUFBRSxDQUN6QixDQUFDO0lBQ04sQ0FBQztJQUVELG1CQUFtQixDQUFDLE9BQU8sR0FBRyxJQUFJO1FBQzlCLElBQUksT0FBTyxDQUFDO1FBQ1osT0FBTyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUUxRSxJQUFJLE9BQU8sRUFBRTtZQUNULE9BQU8sR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDO1NBQ2xDO2FBQU07WUFDSCxPQUFPLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQztTQUNyQztRQUVELElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxPQUFPLEVBQUU7WUFDeEIsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyQyxJQUFJLE9BQU8sRUFBRTtnQkFDVCxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQzthQUM3QjtTQUNKO1FBRUQsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7OEVBNUNRLG9CQUFvQjtnRUFBcEIsb0JBQW9CLFdBQXBCLG9CQUFvQjs7U0FBcEIsb0JBQW9CO3VGQUFwQixvQkFBb0I7Y0FEaEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Y29tYmluZUxhdGVzdFdpdGgsIE9ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtTY3JlZW5TaXplLCBTY3JlZW5TaXplT2JzZXJ2ZXJTZXJ2aWNlfSBmcm9tICcuLi9zY3JlZW4tc2l6ZS1vYnNlcnZlci9zY3JlZW4tc2l6ZS1vYnNlcnZlci5zZXJ2aWNlJztcbmltcG9ydCB7ZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtTeXN0ZW1Db25maWdTdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvc3lzdGVtLWNvbmZpZy9zeXN0ZW0tY29uZmlnLnN0b3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1heENvbHVtbnNDYWxjdWxhdG9yIHtcblxuICAgIHNjcmVlbjogU2NyZWVuU2l6ZSA9IFNjcmVlblNpemUuTWVkaXVtO1xuICAgIG1heENvbHVtbnMgPSA1O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBzY3JlZW5TaXplOiBTY3JlZW5TaXplT2JzZXJ2ZXJTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgc3lzdGVtQ29uZmlnU3RvcmU6IFN5c3RlbUNvbmZpZ1N0b3JlXG4gICAgKSB7XG4gICAgfVxuXG4gICAgZ2V0TWF4Q29sdW1ucyhzaWRlYmFyQWN0aXZlJDogT2JzZXJ2YWJsZTxib29sZWFuPik6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybiBzaWRlYmFyQWN0aXZlJC5waXBlKFxuICAgICAgICAgICAgY29tYmluZUxhdGVzdFdpdGgodGhpcy5zY3JlZW5TaXplLnNjcmVlblNpemUkKSxcbiAgICAgICAgICAgIG1hcCgoW3NpZGViYXJBY3RpdmUsIHNjcmVlblNpemVdOiBbYm9vbGVhbiwgU2NyZWVuU2l6ZV0pID0+IHtcblxuICAgICAgICAgICAgICAgIGlmIChzY3JlZW5TaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NyZWVuID0gc2NyZWVuU2l6ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jYWxjdWxhdGVNYXhDb2x1bW5zKHNpZGViYXJBY3RpdmUpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlTWF4Q29sdW1ucyhzaWRlQmFyID0gdHJ1ZSk6IG51bWJlciB7XG4gICAgICAgIGxldCBzaXplTWFwO1xuICAgICAgICBzaXplTWFwID0gdGhpcy5zeXN0ZW1Db25maWdTdG9yZS5nZXRDb25maWdWYWx1ZSgnbGlzdHZpZXdfY29sdW1uX2xpbWl0cycpO1xuXG4gICAgICAgIGlmIChzaWRlQmFyKSB7XG4gICAgICAgICAgICBzaXplTWFwID0gc2l6ZU1hcC53aXRoX3NpZGViYXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaXplTWFwID0gc2l6ZU1hcC53aXRob3V0X3NpZGViYXI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zY3JlZW4gJiYgc2l6ZU1hcCkge1xuICAgICAgICAgICAgY29uc3QgbWF4Q29scyA9IHNpemVNYXBbdGhpcy5zY3JlZW5dO1xuICAgICAgICAgICAgaWYgKG1heENvbHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1heENvbHVtbnMgPSBtYXhDb2xzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubWF4Q29sdW1ucztcbiAgICB9XG59XG4iXX0=