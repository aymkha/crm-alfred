import { ModuleNavigation } from '../../../services/navigation/module-navigation/module-navigation.service';
import { ModuleNameMapper } from '../../../services/navigation/module-name-mapper/module-name-mapper.service';
import { SystemConfigStore } from '../../../store/system-config/system-config.store';
import { MetadataStore } from '../../../store/metadata/metadata.store.service';
import { BaseFavoritesComponent } from '../menu-favorites/base-favorites.component';
import * as i0 from "@angular/core";
export declare class BaseSubMenuFavoritesComponent extends BaseFavoritesComponent {
    protected navigation: ModuleNavigation;
    protected nameMapper: ModuleNameMapper;
    protected configs: SystemConfigStore;
    protected metadata: MetadataStore;
    constructor(navigation: ModuleNavigation, nameMapper: ModuleNameMapper, configs: SystemConfigStore, metadata: MetadataStore);
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseSubMenuFavoritesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseSubMenuFavoritesComponent, "scrm-base-sub-menu-favorites", never, {}, {}, never, never, false, never>;
}
