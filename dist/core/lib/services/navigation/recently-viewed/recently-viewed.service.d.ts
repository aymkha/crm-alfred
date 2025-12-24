import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { RecentlyViewed } from 'common';
import { ProcessService } from '../../process/process.service';
import { ActivatedRouteSnapshot } from '@angular/router';
import * as i0 from "@angular/core";
export declare class RecentlyViewedService {
    protected metadata: MetadataStore;
    protected processService: ProcessService;
    constructor(metadata: MetadataStore, processService: ProcessService);
    /**
     * Public Api
     */
    /**
     * On navigation add
     * @param module
     * @param route
     */
    onNavigationAdd(module: string, route: ActivatedRouteSnapshot): void;
    /**
     * Build new recently viewed
     * @param module
     * @param id
     * @param view
     */
    buildRecentlyViewed(module: string, id: string, view?: string): RecentlyViewed;
    /**
     * Add recently viewed
     * @param module
     * @param viewed
     */
    addRecentlyViewed(module: string, viewed: RecentlyViewed): void;
    /**
     * Save recently viewed to backend
     * @param module
     * @param viewed
     */
    protected saveRecentlyViewed(module: string, viewed: RecentlyViewed): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecentlyViewedService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecentlyViewedService>;
}
