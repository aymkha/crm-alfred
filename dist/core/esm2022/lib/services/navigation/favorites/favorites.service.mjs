import { Injectable } from '@angular/core';
import { deepClone } from 'common';
import { take } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../../store/metadata/metadata.store.service";
import * as i2 from "../../process/process.service";
class FavoritesService {
    metadata;
    processService;
    constructor(metadata, processService) {
        this.metadata = metadata;
        this.processService = processService;
    }
    /**
     * Public Api
     */
    /**
     * Build new favorite
     * @param module
     * @param id
     */
    build(module, id) {
        return deepClone({
            module: 'Favorite',
            type: 'Favorite',
            attributes: {
                parent_id: id,
                parent_type: module,
            },
        });
    }
    /**
     * Add favorite
     * @param module
     * @param favorite
     */
    add(module, favorite) {
        this.update(module, favorite, 'add');
    }
    /**
     * Add favorite
     * @param module
     * @param favorite
     */
    remove(module, favorite) {
        this.update(module, favorite, 'remove');
    }
    /**
     * Save favorite to backend
     * @param module
     * @param favorite
     * @param action
     */
    update(module, favorite, action) {
        const processType = 'update-favorite';
        const options = {
            favorite: favorite,
            action
        };
        setTimeout(() => {
            this.processService.submit(processType, options).pipe(take(1)).subscribe(result => {
                const savedFavorite = result?.data?.favorite ?? null;
                if (savedFavorite === null) {
                    this.removeFavoriteFromMetadata(module, favorite);
                    return;
                }
                this.addFavoriteToMetadata(savedFavorite, module);
            });
        }, 100);
    }
    /**
     *
     * @param savedFavorite
     * @param module
     * @private
     */
    addFavoriteToMetadata(savedFavorite, module) {
        const saved = {
            id: savedFavorite?.id ?? '',
            module: savedFavorite?.module ?? '',
            attributes: { ...(savedFavorite?.attributes ?? {}) },
        };
        const newItemId = savedFavorite?.attributes?.parent_id ?? '';
        const metadata = this.metadata.getModuleMeta(module);
        const current = metadata?.favorites ?? null;
        if (current) {
            let cleared = current.filter(item => ((item?.attributes?.parent_id ?? '') !== newItemId));
            cleared.unshift(saved);
            metadata.favorites = cleared;
        }
        this.metadata.setModuleMetadata(module, metadata);
    }
    /**
     * Remove favorite from metadata
     * @param module
     * @param favorite
     */
    removeFavoriteFromMetadata(module, favorite) {
        const metadata = this.metadata.getModuleMeta(module);
        const current = metadata?.favorites ?? null;
        const parentId = favorite?.attributes?.parent_id ?? null;
        if (!current || !current.length || !parentId) {
            return;
        }
        metadata.favorites = current.filter(item => ((item?.attributes?.parent_id ?? '') !== parentId));
        this.metadata.setModuleMetadata(module, metadata);
    }
    static ɵfac = function FavoritesService_Factory(t) { return new (t || FavoritesService)(i0.ɵɵinject(i1.MetadataStore), i0.ɵɵinject(i2.ProcessService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FavoritesService, factory: FavoritesService.ɵfac, providedIn: 'root' });
}
export { FavoritesService };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FavoritesService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: i1.MetadataStore }, { type: i2.ProcessService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3JpdGVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc2VydmljZXMvbmF2aWdhdGlvbi9mYXZvcml0ZXMvZmF2b3JpdGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUMsU0FBUyxFQUFXLE1BQU0sUUFBUSxDQUFDO0FBRTNDLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUVwQyxNQUNhLGdCQUFnQjtJQUdYO0lBQ0E7SUFGZCxZQUNjLFFBQXVCLEVBQ3ZCLGNBQThCO1FBRDlCLGFBQVEsR0FBUixRQUFRLENBQWU7UUFDdkIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBRTVDLENBQUM7SUFFRDs7T0FFRztJQUVIOzs7O09BSUc7SUFDSSxLQUFLLENBQUMsTUFBYyxFQUFFLEVBQVU7UUFDbkMsT0FBTyxTQUFTLENBQUM7WUFDYixNQUFNLEVBQUUsVUFBVTtZQUNsQixJQUFJLEVBQUUsVUFBVTtZQUNoQixVQUFVLEVBQUU7Z0JBQ1IsU0FBUyxFQUFFLEVBQUU7Z0JBQ2IsV0FBVyxFQUFFLE1BQU07YUFDdEI7U0FDUSxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUdEOzs7O09BSUc7SUFDSSxHQUFHLENBQUMsTUFBYyxFQUFFLFFBQWtCO1FBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxNQUFjLEVBQUUsUUFBa0I7UUFDNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNPLE1BQU0s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QUFnQjtnRUFBaEIsZ0JBQWdCLFdBQWhCLGdCQUFnQixtQkFESixNQUFNOztTQUNsQixnQkFBZ0I7dUZBQWhCLGdCQUFnQjtjQUQ1QixVQUFVO2VBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWV0YWRhdGFTdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvbWV0YWRhdGEvbWV0YWRhdGEuc3RvcmUuc2VydmljZSc7XG5pbXBvcnQge2RlZXBDbG9uZSwgRmF2b3JpdGV9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge1Byb2Nlc3NTZXJ2aWNlfSBmcm9tICcuLi8uLi9wcm9jZXNzL3Byb2Nlc3Muc2VydmljZSc7XG5pbXBvcnQge3Rha2V9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgRmF2b3JpdGVzU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIG1ldGFkYXRhOiBNZXRhZGF0YVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgcHJvY2Vzc1NlcnZpY2U6IFByb2Nlc3NTZXJ2aWNlXG4gICAgKSB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHVibGljIEFwaVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQnVpbGQgbmV3IGZhdm9yaXRlXG4gICAgICogQHBhcmFtIG1vZHVsZVxuICAgICAqIEBwYXJhbSBpZFxuICAgICAqL1xuICAgIHB1YmxpYyBidWlsZChtb2R1bGU6IHN0cmluZywgaWQ6IHN0cmluZyk6IEZhdm9yaXRlIHtcbiAgICAgICAgcmV0dXJuIGRlZXBDbG9uZSh7XG4gICAgICAgICAgICBtb2R1bGU6ICdGYXZvcml0ZScsXG4gICAgICAgICAgICB0eXBlOiAnRmF2b3JpdGUnLFxuICAgICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgICAgIHBhcmVudF9pZDogaWQsXG4gICAgICAgICAgICAgICAgcGFyZW50X3R5cGU6IG1vZHVsZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0gYXMgRmF2b3JpdGUpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQWRkIGZhdm9yaXRlXG4gICAgICogQHBhcmFtIG1vZHVsZVxuICAgICAqIEBwYXJhbSBmYXZvcml0ZVxuICAgICAqL1xuICAgIHB1YmxpYyBhZGQobW9kdWxlOiBzdHJpbmcsIGZhdm9yaXRlOiBGYXZvcml0ZSk6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZShtb2R1bGUsIGZhdm9yaXRlLCAnYWRkJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGZhdm9yaXRlXG4gICAgICogQHBhcmFtIG1vZHVsZVxuICAgICAqIEBwYXJhbSBmYXZvcml0ZVxuICAgICAqL1xuICAgIHB1YmxpYyByZW1vdmUobW9kdWxlOiBzdHJpbmcsIGZhdm9yaXRlOiBGYXZvcml0ZSk6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZShtb2R1bGUsIGZhdm9yaXRlLCAncmVtb3ZlJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSBmYXZvcml0ZSB0byBiYWNrZW5kXG4gICAgICogQHBhcmFtIG1vZHVsZVxuICAgICAqIEBwYXJhbSBmYXZvcml0ZVxuICAgICAqIEBwYXJhbSBhY3Rpb25cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgdXBkYXRlKG1vZHVsZTogc3RyaW5nLCBmYXZvcml0ZTogRmF2b3JpdGUsIGFjdGlvbjogc3RyaW5nKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgcHJvY2Vzc1R5cGUgPSAndXBkYXRlLWZhdm9yaXRlJztcblxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgZmF2b3JpdGU6IGZhdm9yaXRlLFxuICAgICAgICAgICAgYWN0aW9uXG4gICAgICAgIH07XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NTZXJ2aWNlLnN1Ym1pdChwcm9jZXNzVHlwZSwgb3B0aW9ucykucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHNhdmVkRmF2b3JpdGUgPSByZXN1bHQ/LmRhdGE/LmZhdm9yaXRlID8/IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKHNhdmVkRmF2b3JpdGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVGYXZvcml0ZUZyb21NZXRhZGF0YShtb2R1bGUsIGZhdm9yaXRlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmFkZEZhdm9yaXRlVG9NZXRhZGF0YShzYXZlZEZhdm9yaXRlLCBtb2R1bGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDEwMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2F2ZWRGYXZvcml0ZVxuICAgICAqIEBwYXJhbSBtb2R1bGVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBhZGRGYXZvcml0ZVRvTWV0YWRhdGEoc2F2ZWRGYXZvcml0ZTogRmF2b3JpdGUsIG1vZHVsZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNhdmVkID0ge1xuICAgICAgICAgICAgaWQ6IHNhdmVkRmF2b3JpdGU/LmlkID8/ICcnLFxuICAgICAgICAgICAgbW9kdWxlOiBzYXZlZEZhdm9yaXRlPy5tb2R1bGUgPz8gJycsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB7Li4uKHNhdmVkRmF2b3JpdGU/LmF0dHJpYnV0ZXMgPz8ge30pfSxcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBuZXdJdGVtSWQgPSBzYXZlZEZhdm9yaXRlPy5hdHRyaWJ1dGVzPy5wYXJlbnRfaWQgPz8gJyc7XG4gICAgICAgIGNvbnN0IG1ldGFkYXRhID0gdGhpcy5tZXRhZGF0YS5nZXRNb2R1bGVNZXRhKG1vZHVsZSk7XG5cbiAgICAgICAgY29uc3QgY3VycmVudCA9IG1ldGFkYXRhPy5mYXZvcml0ZXMgPz8gbnVsbDtcbiAgICAgICAgaWYgKGN1cnJlbnQpIHtcbiAgICAgICAgICAgIGxldCBjbGVhcmVkID0gY3VycmVudC5maWx0ZXIoaXRlbSA9PiAoKGl0ZW0/LmF0dHJpYnV0ZXM/LnBhcmVudF9pZCA/PyAnJykgIT09IG5ld0l0ZW1JZCkpO1xuICAgICAgICAgICAgY2xlYXJlZC51bnNoaWZ0KHNhdmVkKTtcbiAgICAgICAgICAgIG1ldGFkYXRhLmZhdm9yaXRlcyA9IGNsZWFyZWQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1ldGFkYXRhLnNldE1vZHVsZU1ldGFkYXRhKG1vZHVsZSwgbWV0YWRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBmYXZvcml0ZSBmcm9tIG1ldGFkYXRhXG4gICAgICogQHBhcmFtIG1vZHVsZVxuICAgICAqIEBwYXJhbSBmYXZvcml0ZVxuICAgICAqL1xuICAgIHByb3RlY3RlZCByZW1vdmVGYXZvcml0ZUZyb21NZXRhZGF0YShtb2R1bGU6IHN0cmluZywgZmF2b3JpdGU6IEZhdm9yaXRlKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG1ldGFkYXRhID0gdGhpcy5tZXRhZGF0YS5nZXRNb2R1bGVNZXRhKG1vZHVsZSk7XG5cbiAgICAgICAgY29uc3QgY3VycmVudCA9IG1ldGFkYXRhPy5mYXZvcml0ZXMgPz8gbnVsbDtcbiAgICAgICAgY29uc3QgcGFyZW50SWQgPSBmYXZvcml0ZT8uYXR0cmlidXRlcz8ucGFyZW50X2lkID8/IG51bGw7XG4gICAgICAgIGlmICghY3VycmVudCB8fCAhY3VycmVudC5sZW5ndGggfHwgIXBhcmVudElkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBtZXRhZGF0YS5mYXZvcml0ZXMgPSBjdXJyZW50LmZpbHRlcihpdGVtID0+ICgoaXRlbT8uYXR0cmlidXRlcz8ucGFyZW50X2lkID8/ICcnKSAhPT0gcGFyZW50SWQpKTtcbiAgICAgICAgdGhpcy5tZXRhZGF0YS5zZXRNb2R1bGVNZXRhZGF0YShtb2R1bGUsIG1ldGFkYXRhKTtcbiAgICB9XG59XG4iXX0=