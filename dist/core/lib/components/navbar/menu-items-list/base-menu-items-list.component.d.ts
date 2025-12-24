import { MenuItem } from 'common';
import * as i0 from "@angular/core";
export declare class BaseMenuItemsListComponent {
    items: MenuItem[];
    labelKey: string;
    showDropdown: boolean;
    constructor();
    hideDropdown(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseMenuItemsListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseMenuItemsListComponent, "scrm-base-menu-items-list", never, { "items": { "alias": "items"; "required": false; }; "labelKey": { "alias": "labelKey"; "required": false; }; }, {}, never, never, false, never>;
}
