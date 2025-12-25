import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { ListViewStore } from '../store/list-view/list-view.store';
import * as i0 from "@angular/core";
export declare class ListViewSidebarWidgetAdapter {
    protected store: ListViewStore;
    protected metadata: MetadataStore;
    private metadata$;
    config$: import("rxjs").Observable<{
        widgets: any;
        show: boolean;
        widgetsEnabled: boolean | any[];
    }>;
    constructor(store: ListViewStore, metadata: MetadataStore);
    static ɵfac: i0.ɵɵFactoryDeclaration<ListViewSidebarWidgetAdapter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ListViewSidebarWidgetAdapter>;
}
