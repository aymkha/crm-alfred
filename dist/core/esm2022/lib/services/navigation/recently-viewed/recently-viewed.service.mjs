import { Injectable } from '@angular/core';
import { deepClone } from 'common';
import { take } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../../store/metadata/metadata.store.service";
import * as i2 from "../../process/process.service";
class RecentlyViewedService {
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
     * On navigation add
     * @param module
     * @param route
     */
    onNavigationAdd(module, route) {
        let mode = 'detail';
        const data = (route && route.data) || {};
        if (data.mode) {
            mode = data.mode;
        }
        const recordId = route?.params?.record ?? null;
        if (recordId && mode !== 'create') {
            const recentlyViewed = this.buildRecentlyViewed(module, recordId);
            this.addRecentlyViewed(module, recentlyViewed);
        }
    }
    /**
     * Build new recently viewed
     * @param module
     * @param id
     * @param view
     */
    buildRecentlyViewed(module, id, view = 'detailview') {
        return deepClone({
            module: 'Tracker',
            type: 'Tracker',
            attributes: {
                module_name: module ?? '',
                item_id: id ?? '',
                action: view ?? '',
            },
        });
    }
    /**
     * Add recently viewed
     * @param module
     * @param viewed
     */
    addRecentlyViewed(module, viewed) {
        this.saveRecentlyViewed(module, viewed);
    }
    /**
     * Save recently viewed to backend
     * @param module
     * @param viewed
     */
    saveRecentlyViewed(module, viewed) {
        const processType = 'add-recently-viewed';
        const options = {
            recentlyViewed: viewed
        };
        setTimeout(() => {
            this.processService.submit(processType, options).pipe(take(1)).subscribe(result => {
                const saved = {
                    id: viewed.id ?? '',
                    module: viewed.module ?? '',
                    attributes: { ...(viewed.attributes ?? {}) },
                };
                const tracker = result?.data?.tracker ?? null;
                if (tracker === null) {
                    return;
                }
                saved.attributes.item_summary = tracker.item_summary;
                const newItemId = saved?.attributes?.item_id ?? '';
                const metadata = this.metadata.getModuleMeta(module);
                const current = metadata?.recentlyViewed ?? null;
                if (current) {
                    let cleared = current.filter(item => ((item?.attributes?.item_id ?? '') !== newItemId));
                    cleared.unshift(saved);
                    metadata.recentlyViewed = cleared;
                }
                this.metadata.setModuleMetadata(module, metadata);
            });
        }, 500);
    }
    static ɵfac = function RecentlyViewedService_Factory(t) { return new (t || RecentlyViewedService)(i0.ɵɵinject(i1.MetadataStore), i0.ɵɵinject(i2.ProcessService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecentlyViewedService, factory: RecentlyViewedService.ɵfac, providedIn: 'root' });
}
export { RecentlyViewedService };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecentlyViewedService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: i1.MetadataStore }, { type: i2.ProcessService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjZW50bHktdmlld2VkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvc2VydmljZXMvbmF2aWdhdGlvbi9yZWNlbnRseS12aWV3ZWQvcmVjZW50bHktdmlld2VkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUMsU0FBUyxFQUEyQixNQUFNLFFBQVEsQ0FBQztBQUUzRCxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFHcEMsTUFDYSxxQkFBcUI7SUFHaEI7SUFDQTtJQUZkLFlBQ2MsUUFBdUIsRUFDdkIsY0FBOEI7UUFEOUIsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQUN2QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFFNUMsQ0FBQztJQUVEOztPQUVHO0lBRUg7Ozs7T0FJRztJQUNJLGVBQWUsQ0FBQyxNQUFjLEVBQUUsS0FBNkI7UUFFaEUsSUFBSSxJQUFJLEdBQUcsUUFBb0IsQ0FBQztRQUNoQyxNQUFNLElBQUksR0FBRyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXpDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNYLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3BCO1FBRUQsTUFBTSxRQUFRLEdBQUcsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLElBQUksSUFBSSxDQUFDO1FBRS9DLElBQUksUUFBUSxJQUFJLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDL0IsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztZQUNsRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFBO1NBQ2pEO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksbUJBQW1CLENBQUMsTUFBYyxFQUFFLEVBQVUsRUFBRSxJQUFJLEdBQUcsWUFBWTtRQUN0RSxPQUFPLFNBQVMsQ0FBQztZQUNiLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLElBQUksRUFBRSxTQUFTO1lBQ2YsVUFBVSxFQUFFO2dCQUNSLFdBQVcsRUFBRSxNQUFNLElBQUksRUFBRTtnQkFDekIsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFO2dCQUNqQixNQUFNLEVBQUUsSUFBSSxJQUFJLEVBQUU7YUFDckI7U0FDYyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxpQkFBaUIsQ0FBQyxNQUFjLEVBQUUsTUFBc0I7UUFDM0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNPLGtCQUFrQixDQUFDLE1BQWMsRUFBRSxNQUFzQjtRQUUvRCxNQUFNLFdBQVcsR0FBRyxxQkFBcUIsQ0FBQztRQUUxQyxNQUFNLE9BQU8sR0FBRztZQUNaLGNBQWMsRUFBRSxNQUFNO1NBQ3pCLENBQUM7UUFFRixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBRTlFLE1BQU0sS0FBSyxHQUFHO29CQUNWLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUU7b0JBQ25CLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxJQUFJLEVBQUU7b0JBQzNCLFVBQVUsRUFBRSxFQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQyxFQUFDO2lCQUM3QyxDQUFDO2dCQUVGLE1BQU0sT0FBTyxHQUFHLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxJQUFJLElBQUksQ0FBQztnQkFDOUMsSUFBSSxPQUFPLEtBQUssSUFBSSxFQUFFO29CQUNsQixPQUFPO2lCQUNWO2dCQUVELEtBQUssQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7Z0JBQ3JELE1BQU0sU0FBUyxHQUFHLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxJQUFJLEVBQUUsQ0FBQztnQkFFbkQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBRXJELE1BQU0sT0FBTyxHQUFHLFFBQVEsRUFBRSxjQUFjLElBQUksSUFBSSxDQUFDO2dCQUNqRCxJQUFJLE9BQU8sRUFBRTtvQkFDVCxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxJQUFJLEVBQUUsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ3hGLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3ZCLFFBQVEsQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDO2lCQUNyQztnQkFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN0RCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNaLENBQUM7K0VBdkdRLHFCQUFxQjtnRUFBckIscUJBQXFCLFdBQXJCLHFCQUFxQixtQkFEVCxNQUFNOztTQUNsQixxQkFBcUI7dUZBQXJCLHFCQUFxQjtjQURqQyxVQUFVO2VBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWV0YWRhdGFTdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvbWV0YWRhdGEvbWV0YWRhdGEuc3RvcmUuc2VydmljZSc7XG5pbXBvcnQge2RlZXBDbG9uZSwgUmVjZW50bHlWaWV3ZWQsIFZpZXdNb2RlfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtQcm9jZXNzU2VydmljZX0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9wcm9jZXNzLnNlcnZpY2UnO1xuaW1wb3J0IHt0YWtlfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlU25hcHNob3R9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIFJlY2VudGx5Vmlld2VkU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIG1ldGFkYXRhOiBNZXRhZGF0YVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgcHJvY2Vzc1NlcnZpY2U6IFByb2Nlc3NTZXJ2aWNlXG4gICAgKSB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHVibGljIEFwaVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogT24gbmF2aWdhdGlvbiBhZGRcbiAgICAgKiBAcGFyYW0gbW9kdWxlXG4gICAgICogQHBhcmFtIHJvdXRlXG4gICAgICovXG4gICAgcHVibGljIG9uTmF2aWdhdGlvbkFkZChtb2R1bGU6IHN0cmluZywgcm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpIHtcblxuICAgICAgICBsZXQgbW9kZSA9ICdkZXRhaWwnIGFzIFZpZXdNb2RlO1xuICAgICAgICBjb25zdCBkYXRhID0gKHJvdXRlICYmIHJvdXRlLmRhdGEpIHx8IHt9O1xuXG4gICAgICAgIGlmIChkYXRhLm1vZGUpIHtcbiAgICAgICAgICAgIG1vZGUgPSBkYXRhLm1vZGU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZWNvcmRJZCA9IHJvdXRlPy5wYXJhbXM/LnJlY29yZCA/PyBudWxsO1xuXG4gICAgICAgIGlmIChyZWNvcmRJZCAmJiBtb2RlICE9PSAnY3JlYXRlJykge1xuICAgICAgICAgICAgY29uc3QgcmVjZW50bHlWaWV3ZWQgPSB0aGlzLmJ1aWxkUmVjZW50bHlWaWV3ZWQobW9kdWxlLCByZWNvcmRJZCk7XG4gICAgICAgICAgICB0aGlzLmFkZFJlY2VudGx5Vmlld2VkKG1vZHVsZSwgcmVjZW50bHlWaWV3ZWQpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBuZXcgcmVjZW50bHkgdmlld2VkXG4gICAgICogQHBhcmFtIG1vZHVsZVxuICAgICAqIEBwYXJhbSBpZFxuICAgICAqIEBwYXJhbSB2aWV3XG4gICAgICovXG4gICAgcHVibGljIGJ1aWxkUmVjZW50bHlWaWV3ZWQobW9kdWxlOiBzdHJpbmcsIGlkOiBzdHJpbmcsIHZpZXcgPSAnZGV0YWlsdmlldycpOiBSZWNlbnRseVZpZXdlZCB7XG4gICAgICAgIHJldHVybiBkZWVwQ2xvbmUoe1xuICAgICAgICAgICAgbW9kdWxlOiAnVHJhY2tlcicsXG4gICAgICAgICAgICB0eXBlOiAnVHJhY2tlcicsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICAgICAgbW9kdWxlX25hbWU6IG1vZHVsZSA/PyAnJyxcbiAgICAgICAgICAgICAgICBpdGVtX2lkOiBpZCA/PyAnJyxcbiAgICAgICAgICAgICAgICBhY3Rpb246IHZpZXcgPz8gJycsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9IGFzIFJlY2VudGx5Vmlld2VkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgcmVjZW50bHkgdmlld2VkXG4gICAgICogQHBhcmFtIG1vZHVsZVxuICAgICAqIEBwYXJhbSB2aWV3ZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkUmVjZW50bHlWaWV3ZWQobW9kdWxlOiBzdHJpbmcsIHZpZXdlZDogUmVjZW50bHlWaWV3ZWQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zYXZlUmVjZW50bHlWaWV3ZWQobW9kdWxlLCB2aWV3ZWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNhdmUgcmVjZW50bHkgdmlld2VkIHRvIGJhY2tlbmRcbiAgICAgKiBAcGFyYW0gbW9kdWxlXG4gICAgICogQHBhcmFtIHZpZXdlZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBzYXZlUmVjZW50bHlWaWV3ZWQobW9kdWxlOiBzdHJpbmcsIHZpZXdlZDogUmVjZW50bHlWaWV3ZWQpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBwcm9jZXNzVHlwZSA9ICdhZGQtcmVjZW50bHktdmlld2VkJztcblxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgcmVjZW50bHlWaWV3ZWQ6IHZpZXdlZFxuICAgICAgICB9O1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzU2VydmljZS5zdWJtaXQocHJvY2Vzc1R5cGUsIG9wdGlvbnMpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzYXZlZCA9IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHZpZXdlZC5pZCA/PyAnJyxcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlOiB2aWV3ZWQubW9kdWxlID8/ICcnLFxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB7Li4uKHZpZXdlZC5hdHRyaWJ1dGVzID8/IHt9KX0sXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRyYWNrZXIgPSByZXN1bHQ/LmRhdGE/LnRyYWNrZXIgPz8gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAodHJhY2tlciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2F2ZWQuYXR0cmlidXRlcy5pdGVtX3N1bW1hcnkgPSB0cmFja2VyLml0ZW1fc3VtbWFyeTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdJdGVtSWQgPSBzYXZlZD8uYXR0cmlidXRlcz8uaXRlbV9pZCA/PyAnJztcblxuICAgICAgICAgICAgICAgIGNvbnN0IG1ldGFkYXRhID0gdGhpcy5tZXRhZGF0YS5nZXRNb2R1bGVNZXRhKG1vZHVsZSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50ID0gbWV0YWRhdGE/LnJlY2VudGx5Vmlld2VkID8/IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNsZWFyZWQgPSBjdXJyZW50LmZpbHRlcihpdGVtID0+ICgoaXRlbT8uYXR0cmlidXRlcz8uaXRlbV9pZCA/PyAnJykgIT09IG5ld0l0ZW1JZCkpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhcmVkLnVuc2hpZnQoc2F2ZWQpO1xuICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YS5yZWNlbnRseVZpZXdlZCA9IGNsZWFyZWQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5tZXRhZGF0YS5zZXRNb2R1bGVNZXRhZGF0YShtb2R1bGUsIG1ldGFkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCA1MDApO1xuICAgIH1cblxufVxuIl19