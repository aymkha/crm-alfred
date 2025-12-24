import { MenuItem } from 'common';
import { MobileModuleMenuRegistry } from './mobile-module-menu.registry';
import * as i0 from "@angular/core";
export declare class MobileModuleMenuComponent {
    protected registry: MobileModuleMenuRegistry;
    items: MenuItem[];
    onClose: Function;
    constructor(registry: MobileModuleMenuRegistry);
    get getType(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<MobileModuleMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MobileModuleMenuComponent, "scrm-mobile-module-menu", never, { "items": { "alias": "items"; "required": false; }; "onClose": { "alias": "onClose"; "required": false; }; }, {}, never, never, false, never>;
}
