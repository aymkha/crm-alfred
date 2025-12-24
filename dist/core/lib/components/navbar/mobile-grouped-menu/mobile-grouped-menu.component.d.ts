import { MenuItem } from 'common';
import { MobileGroupedMenuRegistry } from './mobile-grouped-menu.registry';
import * as i0 from "@angular/core";
export declare class MobileGroupedMenuComponent {
    protected registry: MobileGroupedMenuRegistry;
    items: MenuItem[];
    onClose: Function;
    constructor(registry: MobileGroupedMenuRegistry);
    get getType(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<MobileGroupedMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MobileGroupedMenuComponent, "scrm-mobile-grouped-menu", never, { "items": { "alias": "items"; "required": false; }; "onClose": { "alias": "onClose"; "required": false; }; }, {}, never, never, false, never>;
}
