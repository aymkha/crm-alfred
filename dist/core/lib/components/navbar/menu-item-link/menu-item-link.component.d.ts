import { MenuItemLink } from 'common';
import { MenuItemLinkRegistry } from './menu-item-link.registry';
import * as i0 from "@angular/core";
export declare class MenuItemLinkComponent {
    protected registry: MenuItemLinkRegistry;
    link: MenuItemLink;
    icon: string;
    class: string;
    constructor(registry: MenuItemLinkRegistry);
    get getType(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<MenuItemLinkComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MenuItemLinkComponent, "scrm-menu-item-link", never, { "link": { "alias": "link"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "class": { "alias": "class"; "required": false; }; }, {}, never, never, false, never>;
}
