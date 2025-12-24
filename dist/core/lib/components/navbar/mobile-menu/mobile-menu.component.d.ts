import { MenuItem } from 'common';
import { MobileMenuRegistry } from './mobile-menu.registry';
import * as i0 from "@angular/core";
export declare class MobileMenuComponent {
    protected registry: MobileMenuRegistry;
    current: MenuItem;
    items: MenuItem[];
    all: MenuItem[];
    onClose: Function;
    navigationType: string;
    constructor(registry: MobileMenuRegistry);
    get getType(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<MobileMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MobileMenuComponent, "scrm-mobile-menu", never, { "current": { "alias": "current"; "required": false; }; "items": { "alias": "items"; "required": false; }; "all": { "alias": "all"; "required": false; }; "onClose": { "alias": "onClose"; "required": false; }; "navigationType": { "alias": "navigationType"; "required": false; }; }, {}, never, never, false, never>;
}
