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
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../store/list-view/list-view.store";
class FilterAdapter {
    store;
    constructor(store) {
        this.store = store;
    }
    getConfig() {
        return {
            savedFilterEdit: true,
            displayHeader: true,
            module: this.store.getModuleName(),
            filter$: this.store.openFilter$,
            savedFilters$: this.store.filterList.records$,
            searchFields$: this.store.metadata$.pipe(map((meta) => {
                if (!meta || !meta.search) {
                    return {};
                }
                const searchMeta = meta.search;
                let type = 'advanced';
                if (!searchMeta.layout.advanced) {
                    type = 'basic';
                }
                return searchMeta.layout[type];
            })),
            listFields: this.store.metadata.listView.fields,
            onClose: () => {
                this.store.showFilters = false;
            },
            onSearch: () => {
                this.store.showFilters = false;
            },
            updateFilter: (filter, reload = true) => {
                const filters = {};
                filters[filter.key] = filter;
                this.store.setFilters(filters, reload);
            },
            resetFilter: (reload) => {
                this.store.resetFilters(reload);
            },
            addSavedFilter: (filter) => {
                this.store.addSavedFilter(filter);
            },
            removeSavedFilter: (filter) => {
                this.store.removeSavedFilter(filter);
            },
            setOpenFilter: (filter) => {
                this.store.setOpenFilter(filter);
            },
        };
    }
    static ɵfac = function FilterAdapter_Factory(t) { return new (t || FilterAdapter)(i0.ɵɵinject(i1.ListViewStore)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FilterAdapter, factory: FilterAdapter.ɵfac });
}
export { FilterAdapter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterAdapter, [{
        type: Injectable
    }], function () { return [{ type: i1.ListViewStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvbGlzdC9hZGFwdGVycy9maWx0ZXIuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7OztBQU1uQyxNQUNhLGFBQWE7SUFFQTtJQUF0QixZQUFzQixLQUFvQjtRQUFwQixVQUFLLEdBQUwsS0FBSyxDQUFlO0lBQzFDLENBQUM7SUFFRCxTQUFTO1FBQ0wsT0FBTztZQUNILGVBQWUsRUFBRSxJQUFJO1lBQ3JCLGFBQWEsRUFBRSxJQUFJO1lBQ25CLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRTtZQUNsQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXO1lBQy9CLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxRQUFRO1lBQzdDLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQ3BDLEdBQUcsQ0FBQyxDQUFDLElBQWMsRUFBRSxFQUFFO2dCQUVuQixJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtvQkFDdkIsT0FBTyxFQUF3QixDQUFDO2lCQUNuQztnQkFFRCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUUvQixJQUFJLElBQUksR0FBRyxVQUFVLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtvQkFDN0IsSUFBSSxHQUFHLE9BQU8sQ0FBQztpQkFDbEI7Z0JBRUQsT0FBTyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25DLENBQUMsQ0FBQyxDQUNMO1lBQ0QsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNO1lBRS9DLE9BQU8sRUFBRSxHQUFTLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUNuQyxDQUFDO1lBRUQsUUFBUSxFQUFFLEdBQVMsRUFBRTtnQkFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ25DLENBQUM7WUFFRCxZQUFZLEVBQUUsQ0FBQyxNQUFtQixFQUFFLE1BQU0sR0FBRyxJQUFJLEVBQVEsRUFBRTtnQkFFdkQsTUFBTSxPQUFPLEdBQUcsRUFBb0IsQ0FBQztnQkFDckMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztZQUMzQyxDQUFDO1lBRUQsV0FBVyxFQUFFLENBQUMsTUFBZ0IsRUFBUSxFQUFFO2dCQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQyxDQUFDO1lBRUQsY0FBYyxFQUFFLENBQUMsTUFBbUIsRUFBUSxFQUFFO2dCQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0QyxDQUFDO1lBRUQsaUJBQWlCLEVBQUUsQ0FBQyxNQUFtQixFQUFRLEVBQUU7Z0JBQzdDLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDekMsQ0FBQztZQUVELGFBQWEsRUFBRSxDQUFDLE1BQW1CLEVBQVEsRUFBRTtnQkFDekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDckMsQ0FBQztTQUVZLENBQUM7SUFDdEIsQ0FBQzt1RUEvRFEsYUFBYTtnRUFBYixhQUFhLFdBQWIsYUFBYTs7U0FBYixhQUFhO3VGQUFiLGFBQWE7Y0FEekIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U2VhcmNoTWV0YUZpZWxkTWFwfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHttYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7TGlzdFZpZXdTdG9yZX0gZnJvbSAnLi4vc3RvcmUvbGlzdC12aWV3L2xpc3Qtdmlldy5zdG9yZSc7XG5pbXBvcnQge01ldGFkYXRhfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9tZXRhZGF0YS9tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7RmlsdGVyQ29uZmlnfSBmcm9tICcuLi8uLi8uLi9jb250YWluZXJzL2xpc3QtZmlsdGVyL2NvbXBvbmVudHMvbGlzdC1maWx0ZXIvbGlzdC1maWx0ZXIubW9kZWwnO1xuaW1wb3J0IHtTYXZlZEZpbHRlciwgU2F2ZWRGaWx0ZXJNYXB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL3NhdmVkLWZpbHRlcnMvc2F2ZWQtZmlsdGVyLm1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpbHRlckFkYXB0ZXIge1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIHN0b3JlOiBMaXN0Vmlld1N0b3JlKSB7XG4gICAgfVxuXG4gICAgZ2V0Q29uZmlnKCk6IEZpbHRlckNvbmZpZyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzYXZlZEZpbHRlckVkaXQ6IHRydWUsXG4gICAgICAgICAgICBkaXNwbGF5SGVhZGVyOiB0cnVlLFxuICAgICAgICAgICAgbW9kdWxlOiB0aGlzLnN0b3JlLmdldE1vZHVsZU5hbWUoKSxcbiAgICAgICAgICAgIGZpbHRlciQ6IHRoaXMuc3RvcmUub3BlbkZpbHRlciQsXG4gICAgICAgICAgICBzYXZlZEZpbHRlcnMkOiB0aGlzLnN0b3JlLmZpbHRlckxpc3QucmVjb3JkcyQsXG4gICAgICAgICAgICBzZWFyY2hGaWVsZHMkOiB0aGlzLnN0b3JlLm1ldGFkYXRhJC5waXBlKFxuICAgICAgICAgICAgICAgIG1hcCgobWV0YTogTWV0YWRhdGEpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIW1ldGEgfHwgIW1ldGEuc2VhcmNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge30gYXMgU2VhcmNoTWV0YUZpZWxkTWFwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VhcmNoTWV0YSA9IG1ldGEuc2VhcmNoO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB0eXBlID0gJ2FkdmFuY2VkJztcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzZWFyY2hNZXRhLmxheW91dC5hZHZhbmNlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9ICdiYXNpYyc7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VhcmNoTWV0YS5sYXlvdXRbdHlwZV07XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBsaXN0RmllbGRzOiB0aGlzLnN0b3JlLm1ldGFkYXRhLmxpc3RWaWV3LmZpZWxkcyxcblxuICAgICAgICAgICAgb25DbG9zZTogKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUuc2hvd0ZpbHRlcnMgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG9uU2VhcmNoOiAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5zaG93RmlsdGVycyA9IGZhbHNlO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdXBkYXRlRmlsdGVyOiAoZmlsdGVyOiBTYXZlZEZpbHRlciwgcmVsb2FkID0gdHJ1ZSk6IHZvaWQgPT4ge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsdGVycyA9IHt9IGFzIFNhdmVkRmlsdGVyTWFwO1xuICAgICAgICAgICAgICAgIGZpbHRlcnNbZmlsdGVyLmtleV0gPSBmaWx0ZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5zZXRGaWx0ZXJzKGZpbHRlcnMsIHJlbG9hZCk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICByZXNldEZpbHRlcjogKHJlbG9hZD86IGJvb2xlYW4pOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLnJlc2V0RmlsdGVycyhyZWxvYWQpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgYWRkU2F2ZWRGaWx0ZXI6IChmaWx0ZXI6IFNhdmVkRmlsdGVyKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5hZGRTYXZlZEZpbHRlcihmaWx0ZXIpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgcmVtb3ZlU2F2ZWRGaWx0ZXI6IChmaWx0ZXI6IFNhdmVkRmlsdGVyKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5yZW1vdmVTYXZlZEZpbHRlcihmaWx0ZXIpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgc2V0T3BlbkZpbHRlcjogKGZpbHRlcjogU2F2ZWRGaWx0ZXIpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLnNldE9wZW5GaWx0ZXIoZmlsdGVyKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgfSBhcyBGaWx0ZXJDb25maWc7XG4gICAgfVxufVxuIl19