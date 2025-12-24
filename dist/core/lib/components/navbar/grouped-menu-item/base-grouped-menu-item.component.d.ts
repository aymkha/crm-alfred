import { MenuItem } from 'common';
import * as i0 from "@angular/core";
export declare class BaseGroupedMenuItemComponent {
    item: MenuItem;
    subNavCollapse: boolean;
    showDropdown: boolean;
    constructor();
    hideDropdown(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseGroupedMenuItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseGroupedMenuItemComponent, "scrm-base-grouped-menu-item", never, { "item": { "alias": "item"; "required": false; }; "subNavCollapse": { "alias": "subNavCollapse"; "required": false; }; }, {}, never, never, false, never>;
}
