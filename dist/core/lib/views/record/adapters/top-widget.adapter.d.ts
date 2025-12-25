import { Observable } from 'rxjs';
import { WidgetMetadata } from 'common';
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { RecordViewStore } from '../store/record-view/record-view.store';
import * as i0 from "@angular/core";
export declare class TopWidgetAdapter {
    protected store: RecordViewStore;
    protected metadata: MetadataStore;
    config$: Observable<{
        widget: WidgetMetadata;
        show: boolean;
    }>;
    constructor(store: RecordViewStore, metadata: MetadataStore);
    static ɵfac: i0.ɵɵFactoryDeclaration<TopWidgetAdapter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TopWidgetAdapter>;
}
