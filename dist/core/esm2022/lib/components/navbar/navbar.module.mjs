/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2021 SalesAgility Ltd.
 *
 * This program is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License version 3 as published by the
 * Free Software Foundation with the addition of the following permission added
 * to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK
 * IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE
 * WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * In accordance with Section 7(b) of the GNU Affero General Public License
 * version 3, these Appropriate Legal Notices must retain the display of the
 * "Supercharged by SuiteCRM" logo. If the display of the logos is not reasonably
 * feasible for technical reasons, the Appropriate Legal Notices must display
 * the words "Supercharged by SuiteCRM".
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarUiComponent } from './navbar.component';
import { LogoUiModule } from '../logo/logo.module';
import { LogoutUiModule } from '../logout/logout.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { MenuItemLinkComponent } from './menu-item-link/menu-item-link.component';
import { GroupedMenuItemComponent } from './grouped-menu-item/grouped-menu-item.component';
import { MenuItemsListComponent } from './menu-items-list/menu-items-list.component';
import { MenuRecentlyViewedComponent } from './menu-recently-viewed/menu-recently-viewed.component';
import { HomeMenuItemComponent } from './home-menu-item/home-menu-item.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { ImageModule } from '../image/image.module';
import { BaseNavbarComponent } from './base-navbar/base-navbar.component';
import { DynamicModule } from 'ng-dynamic-component';
import { BaseMenuItemLinkComponent } from './menu-item-link/base-menu-item-link.component';
import { BaseMenuItemComponent } from './menu-item/base-menu-item.component';
import { BaseGroupedMenuItemComponent } from './grouped-menu-item/base-grouped-menu-item.component';
import { BaseHomeMenuItemComponent } from './home-menu-item/base-home-menu-item.component';
import { BaseMenuRecentlyViewedComponent } from './menu-recently-viewed/base-menu-recently-viewed.component';
import { BaseMenuItemsListComponent } from './menu-items-list/base-menu-items-list.component';
import { LogoutUiComponent } from '../logout/logout.component';
import { LabelModule } from '../label/label.module';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { BaseMobileMenuComponent } from './mobile-menu/base-mobile-menu.component';
import { MobileGroupedMenuComponent } from './mobile-grouped-menu/mobile-grouped-menu.component';
import { BaseMobileGroupedMenuComponent } from './mobile-grouped-menu/base-mobile-grouped-menu.component';
import { MobileModuleMenuComponent } from './mobile-module-menu/mobile-module-menu.component';
import { BaseMobileModuleMenuComponent } from './mobile-module-menu/base-mobile-module-menu.component';
import { SubMenuRecentlyViewedComponent } from './sub-menu-recently-viewed/sub-menu-recently-viewed.component';
import { BaseSubMenuRecentlyViewedComponent } from './sub-menu-recently-viewed/base-sub-menu-recently-viewed.component';
import { BaseSubMenuFavoritesComponent } from './sub-menu-favorites/base-sub-menu-favorites.component';
import { SubMenuFavoritesComponent } from './sub-menu-favorites/sub-menu-favorites.component';
import { MenuFavoritesComponent } from './menu-favorites/menu-favorites.component';
import { BaseMenuFavoritesComponent } from './menu-favorites/base-menu-favorites.component';
import { BaseFavoritesComponent } from './menu-favorites/base-favorites.component';
import { FormsModule } from '@angular/forms';
import { NotificationsModule } from '../../containers/notifications/notifications.module';
import { SearchBarModule } from '../search-bar/search-bar.module';
import * as i0 from "@angular/core";
class NavbarUiModule {
    static ɵfac = function NavbarUiModule_Factory(t) { return new (t || NavbarUiModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: NavbarUiModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            LogoUiModule,
            LogoutUiModule,
            NgbModule,
            RouterModule,
            ImageModule,
            DynamicModule,
            LabelModule,
            FormsModule,
            NotificationsModule,
            SearchBarModule] });
}
export { NavbarUiModule };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavbarUiModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    NavbarUiComponent,
                    MenuItemComponent,
                    BaseMenuItemComponent,
                    MenuRecentlyViewedComponent,
                    BaseMenuRecentlyViewedComponent,
                    SubMenuRecentlyViewedComponent,
                    BaseSubMenuRecentlyViewedComponent,
                    BaseFavoritesComponent,
                    MenuFavoritesComponent,
                    BaseMenuFavoritesComponent,
                    SubMenuFavoritesComponent,
                    BaseSubMenuFavoritesComponent,
                    HomeMenuItemComponent,
                    MenuItemLinkComponent,
                    BaseHomeMenuItemComponent,
                    BaseMenuItemLinkComponent,
                    GroupedMenuItemComponent,
                    BaseGroupedMenuItemComponent,
                    MenuItemsListComponent,
                    BaseMenuItemsListComponent,
                    BaseNavbarComponent,
                    MobileMenuComponent,
                    BaseMobileMenuComponent,
                    MobileGroupedMenuComponent,
                    BaseMobileGroupedMenuComponent,
                    MobileModuleMenuComponent,
                    BaseMobileModuleMenuComponent,
                ],
                exports: [
                    NavbarUiComponent,
                    MenuItemComponent,
                    BaseMenuItemComponent,
                    MenuRecentlyViewedComponent,
                    BaseMenuRecentlyViewedComponent,
                    SubMenuRecentlyViewedComponent,
                    BaseSubMenuRecentlyViewedComponent,
                    BaseFavoritesComponent,
                    MenuFavoritesComponent,
                    SubMenuFavoritesComponent,
                    BaseSubMenuFavoritesComponent,
                    HomeMenuItemComponent,
                    MenuItemLinkComponent,
                    BaseHomeMenuItemComponent,
                    BaseMenuItemLinkComponent,
                    GroupedMenuItemComponent,
                    BaseGroupedMenuItemComponent,
                    MenuItemsListComponent,
                    BaseMenuItemsListComponent,
                    BaseNavbarComponent,
                    LogoutUiComponent,
                    MobileMenuComponent,
                    BaseMobileMenuComponent,
                    MobileGroupedMenuComponent,
                    BaseMobileGroupedMenuComponent,
                    MobileModuleMenuComponent,
                    BaseMobileModuleMenuComponent
                ],
                imports: [
                    CommonModule,
                    LogoUiModule,
                    LogoutUiModule,
                    NgbModule,
                    RouterModule,
                    ImageModule,
                    DynamicModule,
                    LabelModule,
                    FormsModule,
                    NotificationsModule,
                    SearchBarModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NavbarUiModule, { declarations: [NavbarUiComponent,
        MenuItemComponent,
        BaseMenuItemComponent,
        MenuRecentlyViewedComponent,
        BaseMenuRecentlyViewedComponent,
        SubMenuRecentlyViewedComponent,
        BaseSubMenuRecentlyViewedComponent,
        BaseFavoritesComponent,
        MenuFavoritesComponent,
        BaseMenuFavoritesComponent,
        SubMenuFavoritesComponent,
        BaseSubMenuFavoritesComponent,
        HomeMenuItemComponent,
        MenuItemLinkComponent,
        BaseHomeMenuItemComponent,
        BaseMenuItemLinkComponent,
        GroupedMenuItemComponent,
        BaseGroupedMenuItemComponent,
        MenuItemsListComponent,
        BaseMenuItemsListComponent,
        BaseNavbarComponent,
        MobileMenuComponent,
        BaseMobileMenuComponent,
        MobileGroupedMenuComponent,
        BaseMobileGroupedMenuComponent,
        MobileModuleMenuComponent,
        BaseMobileModuleMenuComponent], imports: [CommonModule,
        LogoUiModule,
        LogoutUiModule,
        NgbModule,
        RouterModule,
        ImageModule,
        DynamicModule,
        LabelModule,
        FormsModule,
        NotificationsModule,
        SearchBarModule], exports: [NavbarUiComponent,
        MenuItemComponent,
        BaseMenuItemComponent,
        MenuRecentlyViewedComponent,
        BaseMenuRecentlyViewedComponent,
        SubMenuRecentlyViewedComponent,
        BaseSubMenuRecentlyViewedComponent,
        BaseFavoritesComponent,
        MenuFavoritesComponent,
        SubMenuFavoritesComponent,
        BaseSubMenuFavoritesComponent,
        HomeMenuItemComponent,
        MenuItemLinkComponent,
        BaseHomeMenuItemComponent,
        BaseMenuItemLinkComponent,
        GroupedMenuItemComponent,
        BaseGroupedMenuItemComponent,
        MenuItemsListComponent,
        BaseMenuItemsListComponent,
        BaseNavbarComponent,
        LogoutUiComponent,
        MobileMenuComponent,
        BaseMobileMenuComponent,
        MobileGroupedMenuComponent,
        BaseMobileGroupedMenuComponent,
        MobileModuleMenuComponent,
        BaseMobileModuleMenuComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL25hdmJhci9uYXZiYXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUVyRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUNyRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDaEYsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0saURBQWlELENBQUM7QUFDekYsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDbEcsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDaEYsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDbEUsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ2xELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxzQkFBc0IsQ0FB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ZSxhQXZDZixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLHFCQUFxQjtRQUNyQiwyQkFBMkI7UUFDM0IsK0JBQStCO1FBQy9CLDhCQUE4QjtRQUM5QixrQ0FBa0M7UUFDbEMsc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0Qix5QkFBeUI7UUFDekIsNkJBQTZCO1FBQzdCLHFCQUFxQjtRQUNyQixxQkFBcUI7UUFDckIseUJBQXlCO1FBQ3pCLHlCQUF5QjtRQUN6Qix3QkFBd0I7UUFDeEIsNEJBQTRCO1FBQzVCLHNCQUFzQjtRQUN0QiwwQkFBMEI7UUFDMUIsbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLDBCQUEwQjtRQUMxQiw4QkFBOEI7UUFDOUIseUJBQXlCO1FBQ3pCLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmF2YmFyVWlDb21wb25lbnR9IGZyb20gJy4vbmF2YmFyLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7TG9nb1VpTW9kdWxlfSBmcm9tICcuLi9sb2dvL2xvZ28ubW9kdWxlJztcbmltcG9ydCB7TG9nb3V0VWlNb2R1bGV9IGZyb20gJy4uL2xvZ291dC9sb2dvdXQubW9kdWxlJztcbmltcG9ydCB7TmdiTW9kdWxlfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQge1JvdXRlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7TWVudUl0ZW1MaW5rQ29tcG9uZW50fSBmcm9tICcuL21lbnUtaXRlbS1saW5rL21lbnUtaXRlbS1saW5rLmNvbXBvbmVudCc7XG5pbXBvcnQge0dyb3VwZWRNZW51SXRlbUNvbXBvbmVudH0gZnJvbSAnLi9ncm91cGVkLW1lbnUtaXRlbS9ncm91cGVkLW1lbnUtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHtNZW51SXRlbXNMaXN0Q29tcG9uZW50fSBmcm9tICcuL21lbnUtaXRlbXMtbGlzdC9tZW51LWl0ZW1zLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7TWVudVJlY2VudGx5Vmlld2VkQ29tcG9uZW50fSBmcm9tICcuL21lbnUtcmVjZW50bHktdmlld2VkL21lbnUtcmVjZW50bHktdmlld2VkLmNvbXBvbmVudCc7XG5pbXBvcnQge0hvbWVNZW51SXRlbUNvbXBvbmVudH0gZnJvbSAnLi9ob21lLW1lbnUtaXRlbS9ob21lLW1lbnUtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHtNZW51SXRlbUNvbXBvbmVudH0gZnJvbSAnLi9tZW51LWl0ZW0vbWVudS1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQge0ltYWdlTW9kdWxlfSBmcm9tICcuLi9pbWFnZS9pbWFnZS5tb2R1bGUnO1xuaW1wb3J0IHtCYXNlTmF2YmFyQ29tcG9uZW50fSBmcm9tICcuL2Jhc2UtbmF2YmFyL2Jhc2UtbmF2YmFyLmNvbXBvbmVudCc7XG5pbXBvcnQge0R5bmFtaWNNb2R1bGV9IGZyb20gJ25nLWR5bmFtaWMtY29tcG9uZW50JztcbmltcG9ydCB7QmFzZU1lbnVJdGVtTGlua0NvbXBvbmVudH0gZnJvbSAnLi9tZW51LWl0ZW0tbGluay9iYXNlLW1lbnUtaXRlbS1saW5rLmNvbXBvbmVudCc7XG5pbXBvcnQge0Jhc2VNZW51SXRlbUNvbXBvbmVudH0gZnJvbSAnLi9tZW51LWl0ZW0vYmFzZS1tZW51LWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7QmFzZUdyb3VwZWRNZW51SXRlbUNvbXBvbmVudH0gZnJvbSAnLi9ncm91cGVkLW1lbnUtaXRlbS9iYXNlLWdyb3VwZWQtbWVudS1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQge0Jhc2VIb21lTWVudUl0ZW1Db21wb25lbnR9IGZyb20gJy4vaG9tZS1tZW51LWl0ZW0vYmFzZS1ob21lLW1lbnUtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHtCYXNlTWVudVJlY2VudGx5Vmlld2VkQ29tcG9uZW50fSBmcm9tICcuL21lbnUtcmVjZW50bHktdmlld2VkL2Jhc2UtbWVudS1yZWNlbnRseS12aWV3ZWQuY29tcG9uZW50JztcbmltcG9ydCB7QmFzZU1lbnVJdGVtc0xpc3RDb21wb25lbnR9IGZyb20gJy4vbWVudS1pdGVtcy1saXN0L2Jhc2UtbWVudS1pdGVtcy1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQge0xvZ291dFVpQ29tcG9uZW50fSBmcm9tICcuLi9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudCc7XG5pbXBvcnQge0xhYmVsTW9kdWxlfSBmcm9tICcuLi9sYWJlbC9sYWJlbC5tb2R1bGUnO1xuaW1wb3J0IHtNb2JpbGVNZW51Q29tcG9uZW50fSBmcm9tICcuL21vYmlsZS1tZW51L21vYmlsZS1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQge0Jhc2VNb2JpbGVNZW51Q29tcG9uZW50fSBmcm9tICcuL21vYmlsZS1tZW51L2Jhc2UtbW9iaWxlLW1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7TW9iaWxlR3JvdXBlZE1lbnVDb21wb25lbnR9IGZyb20gJy4vbW9iaWxlLWdyb3VwZWQtbWVudS9tb2JpbGUtZ3JvdXBlZC1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQge0Jhc2VNb2JpbGVHcm91cGVkTWVudUNvbXBvbmVudH0gZnJvbSAnLi9tb2JpbGUtZ3JvdXBlZC1tZW51L2Jhc2UtbW9iaWxlLWdyb3VwZWQtbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHtNb2JpbGVNb2R1bGVNZW51Q29tcG9uZW50fSBmcm9tICcuL21vYmlsZS1tb2R1bGUtbWVudS9tb2JpbGUtbW9kdWxlLW1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7QmFzZU1vYmlsZU1vZHVsZU1lbnVDb21wb25lbnR9IGZyb20gJy4vbW9iaWxlLW1vZHVsZS1tZW51L2Jhc2UtbW9iaWxlLW1vZHVsZS1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQge1N1Yk1lbnVSZWNlbnRseVZpZXdlZENvbXBvbmVudH0gZnJvbSAnLi9zdWItbWVudS1yZWNlbnRseS12aWV3ZWQvc3ViLW1lbnUtcmVjZW50bHktdmlld2VkLmNvbXBvbmVudCc7XG5pbXBvcnQge0Jhc2VTdWJNZW51UmVjZW50bHlWaWV3ZWRDb21wb25lbnR9IGZyb20gJy4vc3ViLW1lbnUtcmVjZW50bHktdmlld2VkL2Jhc2Utc3ViLW1lbnUtcmVjZW50bHktdmlld2VkLmNvbXBvbmVudCc7XG5pbXBvcnQge0Jhc2VTdWJNZW51RmF2b3JpdGVzQ29tcG9uZW50fSBmcm9tICcuL3N1Yi1tZW51LWZhdm9yaXRlcy9iYXNlLXN1Yi1tZW51LWZhdm9yaXRlcy5jb21wb25lbnQnO1xuaW1wb3J0IHtTdWJNZW51RmF2b3JpdGVzQ29tcG9uZW50fSBmcm9tICcuL3N1Yi1tZW51LWZhdm9yaXRlcy9zdWItbWVudS1mYXZvcml0ZXMuY29tcG9uZW50JztcbmltcG9ydCB7TWVudUZhdm9yaXRlc0NvbXBvbmVudH0gZnJvbSAnLi9tZW51LWZhdm9yaXRlcy9tZW51LWZhdm9yaXRlcy5jb21wb25lbnQnO1xuaW1wb3J0IHtCYXNlTWVudUZhdm9yaXRlc0NvbXBvbmVudH0gZnJvbSAnLi9tZW51LWZhdm9yaXRlcy9iYXNlLW1lbnUtZmF2b3JpdGVzLmNvbXBvbmVudCc7XG5pbXBvcnQge0Jhc2VGYXZvcml0ZXNDb21wb25lbnR9IGZyb20gJy4vbWVudS1mYXZvcml0ZXMvYmFzZS1mYXZvcml0ZXMuY29tcG9uZW50JztcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7Tm90aWZpY2F0aW9uc01vZHVsZX0gZnJvbSAnLi4vLi4vY29udGFpbmVycy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMubW9kdWxlJztcbmltcG9ydCB7U2VhcmNoQmFyTW9kdWxlfSBmcm9tICcuLi9zZWFyY2gtYmFyL3NlYXJjaC1iYXIubW9kdWxlJztcblxuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBOYXZiYXJVaUNvbXBvbmVudCxcbiAgICAgICAgTWVudUl0ZW1Db21wb25lbnQsXG4gICAgICAgIEJhc2VNZW51SXRlbUNvbXBvbmVudCxcbiAgICAgICAgTWVudVJlY2VudGx5Vmlld2VkQ29tcG9uZW50LFxuICAgICAgICBCYXNlTWVudVJlY2VudGx5Vmlld2VkQ29tcG9uZW50LFxuICAgICAgICBTdWJNZW51UmVjZW50bHlWaWV3ZWRDb21wb25lbnQsXG4gICAgICAgIEJhc2VTdWJNZW51UmVjZW50bHlWaWV3ZWRDb21wb25lbnQsXG4gICAgICAgIEJhc2VGYXZvcml0ZXNDb21wb25lbnQsXG4gICAgICAgIE1lbnVGYXZvcml0ZXNDb21wb25lbnQsXG4gICAgICAgIEJhc2VNZW51RmF2b3JpdGVzQ29tcG9uZW50LFxuICAgICAgICBTdWJNZW51RmF2b3JpdGVzQ29tcG9uZW50LFxuICAgICAgICBCYXNlU3ViTWVudUZhdm9yaXRlc0NvbXBvbmVudCxcbiAgICAgICAgSG9tZU1lbnVJdGVtQ29tcG9uZW50LFxuICAgICAgICBNZW51SXRlbUxpbmtDb21wb25lbnQsXG4gICAgICAgIEJhc2VIb21lTWVudUl0ZW1Db21wb25lbnQsXG4gICAgICAgIEJhc2VNZW51SXRlbUxpbmtDb21wb25lbnQsXG4gICAgICAgIEdyb3VwZWRNZW51SXRlbUNvbXBvbmVudCxcbiAgICAgICAgQmFzZUdyb3VwZWRNZW51SXRlbUNvbXBvbmVudCxcbiAgICAgICAgTWVudUl0ZW1zTGlzdENvbXBvbmVudCxcbiAgICAgICAgQmFzZU1lbnVJdGVtc0xpc3RDb21wb25lbnQsXG4gICAgICAgIEJhc2VOYXZiYXJDb21wb25lbnQsXG4gICAgICAgIE1vYmlsZU1lbnVDb21wb25lbnQsXG4gICAgICAgIEJhc2VNb2JpbGVNZW51Q29tcG9uZW50LFxuICAgICAgICBNb2JpbGVHcm91cGVkTWVudUNvbXBvbmVudCxcbiAgICAgICAgQmFzZU1vYmlsZUdyb3VwZWRNZW51Q29tcG9uZW50LFxuICAgICAgICBNb2JpbGVNb2R1bGVNZW51Q29tcG9uZW50LFxuICAgICAgICBCYXNlTW9iaWxlTW9kdWxlTWVudUNvbXBvbmVudCxcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgTmF2YmFyVWlDb21wb25lbnQsXG4gICAgICAgIE1lbnVJdGVtQ29tcG9uZW50LFxuICAgICAgICBCYXNlTWVudUl0ZW1Db21wb25lbnQsXG4gICAgICAgIE1lbnVSZWNlbnRseVZpZXdlZENvbXBvbmVudCxcbiAgICAgICAgQmFzZU1lbnVSZWNlbnRseVZpZXdlZENvbXBvbmVudCxcbiAgICAgICAgU3ViTWVudVJlY2VudGx5Vmlld2VkQ29tcG9uZW50LFxuICAgICAgICBCYXNlU3ViTWVudVJlY2VudGx5Vmlld2VkQ29tcG9uZW50LFxuICAgICAgICBCYXNlRmF2b3JpdGVzQ29tcG9uZW50LFxuICAgICAgICBNZW51RmF2b3JpdGVzQ29tcG9uZW50LFxuICAgICAgICBTdWJNZW51RmF2b3JpdGVzQ29tcG9uZW50LFxuICAgICAgICBCYXNlU3ViTWVudUZhdm9yaXRlc0NvbXBvbmVudCxcbiAgICAgICAgSG9tZU1lbnVJdGVtQ29tcG9uZW50LFxuICAgICAgICBNZW51SXRlbUxpbmtDb21wb25lbnQsXG4gICAgICAgIEJhc2VIb21lTWVudUl0ZW1Db21wb25lbnQsXG4gICAgICAgIEJhc2VNZW51SXRlbUxpbmtDb21wb25lbnQsXG4gICAgICAgIEdyb3VwZWRNZW51SXRlbUNvbXBvbmVudCxcbiAgICAgICAgQmFzZUdyb3VwZWRNZW51SXRlbUNvbXBvbmVudCxcbiAgICAgICAgTWVudUl0ZW1zTGlzdENvbXBvbmVudCxcbiAgICAgICAgQmFzZU1lbnVJdGVtc0xpc3RDb21wb25lbnQsXG4gICAgICAgIEJhc2VOYXZiYXJDb21wb25lbnQsXG4gICAgICAgIExvZ291dFVpQ29tcG9uZW50LFxuICAgICAgICBNb2JpbGVNZW51Q29tcG9uZW50LFxuICAgICAgICBCYXNlTW9iaWxlTWVudUNvbXBvbmVudCxcbiAgICAgICAgTW9iaWxlR3JvdXBlZE1lbnVDb21wb25lbnQsXG4gICAgICAgIEJhc2VNb2JpbGVHcm91cGVkTWVudUNvbXBvbmVudCxcbiAgICAgICAgTW9iaWxlTW9kdWxlTWVudUNvbXBvbmVudCxcbiAgICAgICAgQmFzZU1vYmlsZU1vZHVsZU1lbnVDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBMb2dvVWlNb2R1bGUsXG4gICAgICAgIExvZ291dFVpTW9kdWxlLFxuICAgICAgICBOZ2JNb2R1bGUsXG4gICAgICAgIFJvdXRlck1vZHVsZSxcbiAgICAgICAgSW1hZ2VNb2R1bGUsXG4gICAgICAgIER5bmFtaWNNb2R1bGUsXG4gICAgICAgIExhYmVsTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgTm90aWZpY2F0aW9uc01vZHVsZSxcbiAgICAgICAgU2VhcmNoQmFyTW9kdWxlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBOYXZiYXJVaU1vZHVsZSB7XG59XG4iXX0=