import { Observable } from 'rxjs';
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { RecordViewStore } from '../store/record-view/record-view.store';
import { WidgetMetadata } from 'common';
import * as i0 from "@angular/core";
export declare class BottomWidgetAdapter {
    protected store: RecordViewStore;
    protected metadata: MetadataStore;
    config$: Observable<{
        widgets: WidgetMetadata[];
        show: boolean;
    }>;
    constructor(store: RecordViewStore, metadata: MetadataStore);
    static ɵfac: i0.ɵɵFactoryDeclaration<BottomWidgetAdapter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BottomWidgetAdapter>;
}
