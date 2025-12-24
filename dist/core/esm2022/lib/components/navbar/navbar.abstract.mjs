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
import { LogoAbstract } from '../logo/logo-abstract';
import { ready } from 'common';
import { LinkTarget } from './link-target';
export class NavbarAbstract {
    routeConverter;
    moduleNavigation;
    preferences;
    language;
    appState;
    authenticated = true;
    logo = new LogoAbstract();
    useGroupTabs = false;
    globalActions = [];
    currentUser = {
        id: '',
        firstName: '',
        lastName: '',
    };
    all = {
        modules: [],
        extra: [],
    };
    menu = [];
    current;
    /**
     * Public API
     */
    constructor(routeConverter, moduleNavigation, preferences, language, appState) {
        this.routeConverter = routeConverter;
        this.moduleNavigation = moduleNavigation;
        this.preferences = preferences;
        this.language = language;
        this.appState = appState;
    }
    /**
     * Reset menus
     */
    resetMenu() {
        this.menu = [];
        this.globalActions = [];
        this.all.modules = [];
        this.all.extra = [];
        this.current = null;
        this.currentUser = {};
    }
    /**
     * Build user action menu
     *
     * @param {[]} userActionMenu info
     * @param {object} currentUser info
     */
    buildUserActionMenu(userActionMenu, currentUser) {
        this.currentUser.id = currentUser.id;
        this.currentUser.firstName = currentUser.firstName;
        this.currentUser.lastName = currentUser.lastName;
        if (userActionMenu) {
            userActionMenu.forEach((subMenu) => {
                const name = subMenu.name;
                let url = subMenu.url;
                if (name === 'logout') {
                    return;
                }
                let target = LinkTarget.none;
                if (name === 'training') {
                    target = LinkTarget.blank;
                }
                else {
                    url = this.routeConverter.toFrontEndLink(url);
                }
                const label = this.language.getAppString(subMenu.labelKey) ?? '';
                this.globalActions.push({
                    link: {
                        url,
                        label,
                        target
                    },
                });
            });
        }
        return;
    }
    /**
     * Build navbar
     *
     * @param {object} navigation info
     * @param {object} currentUser info
     * @param {number} maxTabs to display
     */
    build(navigation, currentUser, maxTabs) {
        this.buildUserActionMenu(navigation.userActionMenu, currentUser);
        const navigationParadigm = this.preferences.getUserPreference('navigation_paradigm');
        const sort = this.preferences.getUserPreference('sort_modules_by_name') === 'on';
        if (navigationParadigm === 'm') {
            this.buildModuleNavigation(navigation, maxTabs, sort);
            return;
        }
        if (navigationParadigm === 'gm') {
            this.buildGroupedNavigation(navigation, maxTabs, sort);
            return;
        }
    }
    /**
     * Build Group tab menu
     *
     * @param {[]} items list
     * @param {object} modules info
     * @param {number} threshold limit
     * @param {object} groupedTabs info
     * @param {boolean} sort flag
     */
    buildGroupTabMenu(items, modules, threshold, groupedTabs, sort) {
        const navItems = [];
        const moreItems = [];
        if (items && items.length > 0) {
            items.forEach((module) => {
                moreItems.push(this.buildTabMenuItem(module, modules[module]));
            });
            if (sort) {
                this.sortMenuItems(moreItems);
            }
        }
        let count = 0;
        groupedTabs.forEach((groupedTab) => {
            if (count <= threshold) {
                navItems.push(this.buildTabGroupedMenuItem(groupedTab.labelKey, groupedTab.modules, modules, sort));
            }
            count++;
        });
        this.menu = navItems;
        this.all.modules = moreItems;
    }
    /**
     *
     * Internal API
     *
     */
    /**
     * Build module navigation
     *
     * @param {object} navigation info
     * @param {number} maxTabs to use
     * @param {boolean} sort flag
     */
    buildModuleNavigation(navigation, maxTabs, sort) {
        if (!ready([navigation.tabs, navigation.modules])) {
            return;
        }
        this.buildTabMenu(navigation.tabs, navigation.modules, maxTabs, sort);
        this.buildSelectedModule(navigation);
    }
    /**
     * Build grouped navigation
     *
     * @param {object} navigation info
     * @param {number} maxTabs to use
     * @param {boolean} sort flag
     */
    buildGroupedNavigation(navigation, maxTabs, sort) {
        if (!ready([navigation.tabs, navigation.modules, navigation.groupedTabs])) {
            return;
        }
        this.buildGroupTabMenu(navigation.tabs, navigation.modules, maxTabs, navigation.groupedTabs, sort);
        this.buildSelectedModule(navigation);
    }
    /**
     * Build selected module
     *
     * @param {object} navigation info
     */
    buildSelectedModule(navigation) {
        const module = this.appState.getModule() ?? '';
        if (module === '' || module === 'home') {
            return;
        }
        if (!navigation.modules[module]) {
            return;
        }
        this.current = this.buildTabMenuItem(module, navigation.modules[module]);
    }
    /**
     * Build tab / module menu
     *
     * @param {[]} items list
     * @param {object} modules info
     * @param {number} threshold limit
     * @param {boolean} sort flag
     */
    buildTabMenu(items, modules, threshold, sort) {
        const navItems = [];
        const moreItems = [];
        if (!items || items.length === 0) {
            this.menu = navItems;
            this.all.modules = moreItems;
            return;
        }
        let count = 0;
        items.forEach((module) => {
            const item = this.buildTabMenuItem(module, modules[module]);
            if (module === 'home' || this.appState.getModule() === module || count >= threshold) {
                moreItems.push(item);
            }
            else {
                navItems.push(item);
            }
            count++;
        });
        if (sort) {
            this.sortMenuItems(navItems);
            this.sortMenuItems(moreItems);
        }
        this.menu = navItems;
        this.all.modules = moreItems;
    }
    /**
     * Build Grouped Tab menu item
     *
     * @param {string} moduleLabel to display
     * @param {object} groupedModules list
     * @param {object} modules list
     * @param {boolean} sort flag
     *
     * @returns {object} group tab menu item
     */
    buildTabGroupedMenuItem(moduleLabel, groupedModules, modules, sort) {
        return {
            link: {
                label: this.language.getAppString(moduleLabel) || moduleLabel,
                url: '',
                route: null,
                params: null
            },
            icon: '',
            submenu: this.buildGroupedMenu(groupedModules, modules, sort)
        };
    }
    /**
     * Build Grouped menu
     *
     * @param {object} groupedModules info
     * @param {object} modules map
     * @param {boolean} sort flag
     *
     * @returns {[]} menu item array
     */
    buildGroupedMenu(groupedModules, modules, sort) {
        const groupedItems = [];
        let homeMenuItem = null;
        groupedModules.forEach((groupedModule) => {
            const module = modules[groupedModule];
            if (!module) {
                return;
            }
            const moduleMenuItem = this.buildTabMenuItem(groupedModule, module);
            if (groupedModule === 'home') {
                homeMenuItem = moduleMenuItem;
                return;
            }
            groupedItems.push(moduleMenuItem);
        });
        if (sort) {
            this.sortMenuItems(groupedItems);
        }
        if (homeMenuItem) {
            groupedItems.unshift(homeMenuItem);
        }
        return groupedItems;
    }
    /**
     * Build module menu items
     *
     * @param {string} module name
     * @param {object} moduleInfo info
     *
     * @returns {object} menuItem
     */
    buildTabMenuItem(module, moduleInfo) {
        if (moduleInfo.name) {
            module = moduleInfo.name;
        }
        const moduleRoute = this.moduleNavigation.getModuleRoute(moduleInfo);
        const appListStrings = this.language.getLanguageStrings()?.appListStrings ?? {};
        const menuItem = {
            link: {
                label: this.moduleNavigation.getModuleLabel(moduleInfo, appListStrings),
                url: moduleRoute.url,
                route: moduleRoute.route,
                params: null
            },
            icon: (module === 'home') ? 'home' : '',
            submenu: [],
            module: module ?? null,
            isGroupedMenu: false
        };
        let hasSubmenu = false;
        if (moduleInfo) {
            moduleInfo.menu.forEach((subMenu) => {
                const sublinks = subMenu.sublinks || [];
                const subMenuItem = this.buildSubMenuItem(module, subMenu, sublinks);
                menuItem.submenu.push(subMenuItem);
                if (sublinks.length > 0) {
                    hasSubmenu = true;
                }
            });
        }
        menuItem.isGroupedMenu = hasSubmenu;
        return menuItem;
    }
    buildSubMenuItem(module, subMenu, sublinks) {
        const moduleActionRoute = this.moduleNavigation.getActionRoute(subMenu);
        const subMenuItem = {
            link: {
                label: this.moduleNavigation.getActionLabel(module, subMenu, this.language.getLanguageStrings()),
                url: moduleActionRoute.url,
                route: moduleActionRoute.route,
                params: moduleActionRoute.params,
                process: moduleActionRoute.process
            },
            icon: subMenu.icon || '',
            submenu: sublinks.map((item) => this.buildSubMenuItem(module, item, [])),
        };
        return subMenuItem;
    }
    /**
     * Sort menu items by label
     *
     * @param {object} navItems to sort
     */
    sortMenuItems(navItems) {
        navItems.sort((a, b) => {
            const nameA = a.link.label.toUpperCase(); // ignore upper and lowercase
            const nameB = b.link.label.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            // names must be equal
            return 0;
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmFic3RyYWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5hYnN0cmFjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBR0gsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBR25ELE9BQU8sRUFBVyxLQUFLLEVBQU8sTUFBTSxRQUFRLENBQUM7QUFTN0MsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQU16QyxNQUFNLE9BQU8sY0FBYztJQXNCWDtJQUNFO0lBQ0E7SUFDQTtJQUNBO0lBekJkLGFBQWEsR0FBRyxJQUFJLENBQUM7SUFDckIsSUFBSSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDMUIsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUNyQixhQUFhLEdBQXNCLEVBQUUsQ0FBQztJQUN0QyxXQUFXLEdBQXFCO1FBQzVCLEVBQUUsRUFBRSxFQUFFO1FBQ04sU0FBUyxFQUFFLEVBQUU7UUFDYixRQUFRLEVBQUUsRUFBRTtLQUNmLENBQUM7SUFDRixHQUFHLEdBQUc7UUFDRixPQUFPLEVBQUUsRUFBRTtRQUNYLEtBQUssRUFBRSxFQUFFO0tBQ1osQ0FBQztJQUNGLElBQUksR0FBZSxFQUFFLENBQUM7SUFDdEIsT0FBTyxDQUFZO0lBRW5COztPQUVHO0lBRUgsWUFDWSxjQUE4QixFQUM1QixnQkFBa0MsRUFDbEMsV0FBZ0MsRUFDaEMsUUFBdUIsRUFDdkIsUUFBdUI7UUFKekIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzVCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsZ0JBQVcsR0FBWCxXQUFXLENBQXFCO1FBQ2hDLGFBQVEsR0FBUixRQUFRLENBQWU7UUFDdkIsYUFBUSxHQUFSLFFBQVEsQ0FB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QUE2QjtZQUV2RSxJQUFJLEtBQUssR0FBRyxLQUFLLEVBQUU7Z0JBQ2YsT0FBTyxDQUFDLENBQUMsQ0FBQzthQUNiO1lBQ0QsSUFBSSxLQUFLLEdBQUcsS0FBSyxFQUFFO2dCQUNmLE9BQU8sQ0FBQyxDQUFDO2FBQ1o7WUFFRCxzQkFBc0I7WUFDdEIsT0FBTyxDQUFDLENBQUM7UUFDYixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtOYXZiYXJNb2RlbH0gZnJvbSAnLi9uYXZiYXItbW9kZWwnO1xuaW1wb3J0IHtMb2dvQWJzdHJhY3R9IGZyb20gJy4uL2xvZ28vbG9nby1hYnN0cmFjdCc7XG5pbXBvcnQge0N1cnJlbnRVc2VyTW9kZWx9IGZyb20gJy4vY3VycmVudC11c2VyLW1vZGVsJztcbmltcG9ydCB7QWN0aW9uTGlua01vZGVsfSBmcm9tICcuL2FjdGlvbi1saW5rLW1vZGVsJztcbmltcG9ydCB7TWVudUl0ZW0sIHJlYWR5LCBVc2VyfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge1xuICAgIEdyb3VwZWRUYWIsIE1vZHVsZUFjdGlvbixcbiAgICBOYXZiYXJNb2R1bGUsXG4gICAgTmF2YmFyTW9kdWxlTWFwLFxuICAgIE5hdmlnYXRpb24sXG4gICAgVXNlckFjdGlvbk1lbnVcbn0gZnJvbSAnLi4vLi4vc3RvcmUvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLnN0b3JlJztcbmltcG9ydCB7TGlua1RhcmdldH0gZnJvbSAnLi9saW5rLXRhcmdldCc7XG5pbXBvcnQge1JvdXRlQ29udmVydGVyfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL3JvdXRlLWNvbnZlcnRlci9yb3V0ZS1jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQge1VzZXJQcmVmZXJlbmNlU3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL3VzZXItcHJlZmVyZW5jZS91c2VyLXByZWZlcmVuY2Uuc3RvcmUnO1xuaW1wb3J0IHtNb2R1bGVOYXZpZ2F0aW9ufSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL21vZHVsZS1uYXZpZ2F0aW9uL21vZHVsZS1uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHtBcHBTdGF0ZVN0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9hcHAtc3RhdGUvYXBwLXN0YXRlLnN0b3JlJztcblxuZXhwb3J0IGNsYXNzIE5hdmJhckFic3RyYWN0IGltcGxlbWVudHMgTmF2YmFyTW9kZWwge1xuICAgIGF1dGhlbnRpY2F0ZWQgPSB0cnVlO1xuICAgIGxvZ28gPSBuZXcgTG9nb0Fic3RyYWN0KCk7XG4gICAgdXNlR3JvdXBUYWJzID0gZmFsc2U7XG4gICAgZ2xvYmFsQWN0aW9uczogQWN0aW9uTGlua01vZGVsW10gPSBbXTtcbiAgICBjdXJyZW50VXNlcjogQ3VycmVudFVzZXJNb2RlbCA9IHtcbiAgICAgICAgaWQ6ICcnLFxuICAgICAgICBmaXJzdE5hbWU6ICcnLFxuICAgICAgICBsYXN0TmFtZTogJycsXG4gICAgfTtcbiAgICBhbGwgPSB7XG4gICAgICAgIG1vZHVsZXM6IFtdLFxuICAgICAgICBleHRyYTogW10sXG4gICAgfTtcbiAgICBtZW51OiBNZW51SXRlbVtdID0gW107XG4gICAgY3VycmVudD86IE1lbnVJdGVtO1xuXG4gICAgLyoqXG4gICAgICogUHVibGljIEFQSVxuICAgICAqL1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVDb252ZXJ0ZXI6IFJvdXRlQ29udmVydGVyLFxuICAgICAgICBwcm90ZWN0ZWQgbW9kdWxlTmF2aWdhdGlvbjogTW9kdWxlTmF2aWdhdGlvbixcbiAgICAgICAgcHJvdGVjdGVkIHByZWZlcmVuY2VzOiBVc2VyUHJlZmVyZW5jZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2U6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBhcHBTdGF0ZTogQXBwU3RhdGVTdG9yZSxcbiAgICApIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCBtZW51c1xuICAgICAqL1xuICAgIHB1YmxpYyByZXNldE1lbnUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubWVudSA9IFtdO1xuICAgICAgICB0aGlzLmdsb2JhbEFjdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5hbGwubW9kdWxlcyA9IFtdO1xuICAgICAgICB0aGlzLmFsbC5leHRyYSA9IFtdO1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0ge30gYXMgVXNlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCB1c2VyIGFjdGlvbiBtZW51XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1tdfSB1c2VyQWN0aW9uTWVudSBpbmZvXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGN1cnJlbnRVc2VyIGluZm9cbiAgICAgKi9cbiAgICBwdWJsaWMgYnVpbGRVc2VyQWN0aW9uTWVudShcbiAgICAgICAgdXNlckFjdGlvbk1lbnU6IFVzZXJBY3Rpb25NZW51W10sXG4gICAgICAgIGN1cnJlbnRVc2VyOiBDdXJyZW50VXNlck1vZGVsXG4gICAgKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIuaWQgPSBjdXJyZW50VXNlci5pZDtcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlci5maXJzdE5hbWUgPSBjdXJyZW50VXNlci5maXJzdE5hbWU7XG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIubGFzdE5hbWUgPSBjdXJyZW50VXNlci5sYXN0TmFtZTtcblxuICAgICAgICBpZiAodXNlckFjdGlvbk1lbnUpIHtcbiAgICAgICAgICAgIHVzZXJBY3Rpb25NZW51LmZvckVhY2goKHN1Yk1lbnUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gc3ViTWVudS5uYW1lO1xuICAgICAgICAgICAgICAgIGxldCB1cmwgPSBzdWJNZW51LnVybDtcblxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnbG9nb3V0Jykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldCA9IExpbmtUYXJnZXQubm9uZTtcblxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAndHJhaW5pbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IExpbmtUYXJnZXQuYmxhbms7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gdGhpcy5yb3V0ZUNvbnZlcnRlci50b0Zyb250RW5kTGluayh1cmwpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5sYW5ndWFnZS5nZXRBcHBTdHJpbmcoc3ViTWVudS5sYWJlbEtleSkgPz8gJyc7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmdsb2JhbEFjdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGxpbms6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgbmF2YmFyXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbmF2aWdhdGlvbiBpbmZvXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGN1cnJlbnRVc2VyIGluZm9cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWF4VGFicyB0byBkaXNwbGF5XG4gICAgICovXG4gICAgcHVibGljIGJ1aWxkKFxuICAgICAgICBuYXZpZ2F0aW9uOiBOYXZpZ2F0aW9uLFxuICAgICAgICBjdXJyZW50VXNlcjogQ3VycmVudFVzZXJNb2RlbCxcbiAgICAgICAgbWF4VGFiczogbnVtYmVyLFxuICAgICk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMuYnVpbGRVc2VyQWN0aW9uTWVudShuYXZpZ2F0aW9uLnVzZXJBY3Rpb25NZW51LCBjdXJyZW50VXNlcik7XG5cbiAgICAgICAgY29uc3QgbmF2aWdhdGlvblBhcmFkaWdtID0gdGhpcy5wcmVmZXJlbmNlcy5nZXRVc2VyUHJlZmVyZW5jZSgnbmF2aWdhdGlvbl9wYXJhZGlnbScpO1xuICAgICAgICBjb25zdCBzb3J0ID0gdGhpcy5wcmVmZXJlbmNlcy5nZXRVc2VyUHJlZmVyZW5jZSgnc29ydF9tb2R1bGVzX2J5X25hbWUnKSA9PT0gJ29uJztcblxuICAgICAgICBpZiAobmF2aWdhdGlvblBhcmFkaWdtID09PSAnbScpIHtcbiAgICAgICAgICAgIHRoaXMuYnVpbGRNb2R1bGVOYXZpZ2F0aW9uKG5hdmlnYXRpb24sIG1heFRhYnMsIHNvcnQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5hdmlnYXRpb25QYXJhZGlnbSA9PT0gJ2dtJykge1xuICAgICAgICAgICAgdGhpcy5idWlsZEdyb3VwZWROYXZpZ2F0aW9uKG5hdmlnYXRpb24sIG1heFRhYnMsIHNvcnQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgR3JvdXAgdGFiIG1lbnVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7W119IGl0ZW1zIGxpc3RcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbW9kdWxlcyBpbmZvXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRocmVzaG9sZCBsaW1pdFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBncm91cGVkVGFicyBpbmZvXG4gICAgICogQHBhcmFtIHtib29sZWFufSBzb3J0IGZsYWdcbiAgICAgKi9cbiAgICBwdWJsaWMgYnVpbGRHcm91cFRhYk1lbnUoXG4gICAgICAgIGl0ZW1zOiBzdHJpbmdbXSxcbiAgICAgICAgbW9kdWxlczogTmF2YmFyTW9kdWxlTWFwLFxuICAgICAgICB0aHJlc2hvbGQ6IG51bWJlcixcbiAgICAgICAgZ3JvdXBlZFRhYnM6IEdyb3VwZWRUYWJbXSxcbiAgICAgICAgc29ydDogYm9vbGVhblxuICAgICk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IG5hdkl0ZW1zID0gW107XG4gICAgICAgIGNvbnN0IG1vcmVJdGVtcyA9IFtdO1xuXG4gICAgICAgIGlmIChpdGVtcyAmJiBpdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKChtb2R1bGUpID0+IHtcbiAgICAgICAgICAgICAgICBtb3JlSXRlbXMucHVzaCh0aGlzLmJ1aWxkVGFiTWVudUl0ZW0obW9kdWxlLCBtb2R1bGVzW21vZHVsZV0pKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoc29ydCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc29ydE1lbnVJdGVtcyhtb3JlSXRlbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgZ3JvdXBlZFRhYnMuZm9yRWFjaCgoZ3JvdXBlZFRhYjogYW55KSA9PiB7XG5cbiAgICAgICAgICAgIGlmIChjb3VudCA8PSB0aHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICBuYXZJdGVtcy5wdXNoKHRoaXMuYnVpbGRUYWJHcm91cGVkTWVudUl0ZW0oXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwZWRUYWIubGFiZWxLZXksXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwZWRUYWIubW9kdWxlcyxcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlcyxcbiAgICAgICAgICAgICAgICAgICAgc29ydFxuICAgICAgICAgICAgICAgICkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm1lbnUgPSBuYXZJdGVtcztcbiAgICAgICAgdGhpcy5hbGwubW9kdWxlcyA9IG1vcmVJdGVtcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEludGVybmFsIEFQSVxuICAgICAqXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBtb2R1bGUgbmF2aWdhdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG5hdmlnYXRpb24gaW5mb1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhUYWJzIHRvIHVzZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gc29ydCBmbGFnXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGJ1aWxkTW9kdWxlTmF2aWdhdGlvbihcbiAgICAgICAgbmF2aWdhdGlvbjogTmF2aWdhdGlvbixcbiAgICAgICAgbWF4VGFiczogbnVtYmVyLFxuICAgICAgICBzb3J0OiBib29sZWFuLFxuICAgICk6IHZvaWQge1xuXG4gICAgICAgIGlmICghcmVhZHkoW25hdmlnYXRpb24udGFicywgbmF2aWdhdGlvbi5tb2R1bGVzXSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYnVpbGRUYWJNZW51KG5hdmlnYXRpb24udGFicywgbmF2aWdhdGlvbi5tb2R1bGVzLCBtYXhUYWJzLCBzb3J0KTtcbiAgICAgICAgdGhpcy5idWlsZFNlbGVjdGVkTW9kdWxlKG5hdmlnYXRpb24pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIGdyb3VwZWQgbmF2aWdhdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG5hdmlnYXRpb24gaW5mb1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhUYWJzIHRvIHVzZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gc29ydCBmbGFnXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGJ1aWxkR3JvdXBlZE5hdmlnYXRpb24oXG4gICAgICAgIG5hdmlnYXRpb246IE5hdmlnYXRpb24sXG4gICAgICAgIG1heFRhYnM6IG51bWJlcixcbiAgICAgICAgc29ydDogYm9vbGVhbixcbiAgICApOiB2b2lkIHtcblxuICAgICAgICBpZiAoIXJlYWR5KFtuYXZpZ2F0aW9uLnRhYnMsIG5hdmlnYXRpb24ubW9kdWxlcywgbmF2aWdhdGlvbi5ncm91cGVkVGFic10pKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJ1aWxkR3JvdXBUYWJNZW51KG5hdmlnYXRpb24udGFicywgbmF2aWdhdGlvbi5tb2R1bGVzLCBtYXhUYWJzLCBuYXZpZ2F0aW9uLmdyb3VwZWRUYWJzLCBzb3J0KTtcbiAgICAgICAgdGhpcy5idWlsZFNlbGVjdGVkTW9kdWxlKG5hdmlnYXRpb24pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIHNlbGVjdGVkIG1vZHVsZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG5hdmlnYXRpb24gaW5mb1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBidWlsZFNlbGVjdGVkTW9kdWxlKFxuICAgICAgICBuYXZpZ2F0aW9uOiBOYXZpZ2F0aW9uLFxuICAgICk6IHZvaWQge1xuICAgICAgICBjb25zdCBtb2R1bGUgPSB0aGlzLmFwcFN0YXRlLmdldE1vZHVsZSgpID8/ICcnO1xuXG4gICAgICAgIGlmIChtb2R1bGUgPT09ICcnIHx8IG1vZHVsZSA9PT0gJ2hvbWUnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW5hdmlnYXRpb24ubW9kdWxlc1ttb2R1bGVdKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLmJ1aWxkVGFiTWVudUl0ZW0obW9kdWxlLCBuYXZpZ2F0aW9uLm1vZHVsZXNbbW9kdWxlXSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgdGFiIC8gbW9kdWxlIG1lbnVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7W119IGl0ZW1zIGxpc3RcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbW9kdWxlcyBpbmZvXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRocmVzaG9sZCBsaW1pdFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gc29ydCBmbGFnXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGJ1aWxkVGFiTWVudShcbiAgICAgICAgaXRlbXM6IHN0cmluZ1tdLFxuICAgICAgICBtb2R1bGVzOiBOYXZiYXJNb2R1bGVNYXAsXG4gICAgICAgIHRocmVzaG9sZDogbnVtYmVyLFxuICAgICAgICBzb3J0OiBib29sZWFuLFxuICAgICk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IG5hdkl0ZW1zID0gW107XG4gICAgICAgIGNvbnN0IG1vcmVJdGVtcyA9IFtdO1xuXG4gICAgICAgIGlmICghaXRlbXMgfHwgaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLm1lbnUgPSBuYXZJdGVtcztcbiAgICAgICAgICAgIHRoaXMuYWxsLm1vZHVsZXMgPSBtb3JlSXRlbXM7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBpdGVtcy5mb3JFYWNoKChtb2R1bGU6IHN0cmluZykgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5idWlsZFRhYk1lbnVJdGVtKG1vZHVsZSwgbW9kdWxlc1ttb2R1bGVdKTtcblxuICAgICAgICAgICAgaWYgKG1vZHVsZSA9PT0gJ2hvbWUnIHx8IHRoaXMuYXBwU3RhdGUuZ2V0TW9kdWxlKCkgPT09IG1vZHVsZSB8fCBjb3VudCA+PSB0aHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICBtb3JlSXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmF2SXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHNvcnQpIHtcbiAgICAgICAgICAgIHRoaXMuc29ydE1lbnVJdGVtcyhuYXZJdGVtcyk7XG4gICAgICAgICAgICB0aGlzLnNvcnRNZW51SXRlbXMobW9yZUl0ZW1zKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdGhpcy5tZW51ID0gbmF2SXRlbXM7XG4gICAgICAgIHRoaXMuYWxsLm1vZHVsZXMgPSBtb3JlSXRlbXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgR3JvdXBlZCBUYWIgbWVudSBpdGVtXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kdWxlTGFiZWwgdG8gZGlzcGxheVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBncm91cGVkTW9kdWxlcyBsaXN0XG4gICAgICogQHBhcmFtIHtvYmplY3R9IG1vZHVsZXMgbGlzdFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gc29ydCBmbGFnXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBncm91cCB0YWIgbWVudSBpdGVtXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGJ1aWxkVGFiR3JvdXBlZE1lbnVJdGVtKFxuICAgICAgICBtb2R1bGVMYWJlbDogc3RyaW5nLFxuICAgICAgICBncm91cGVkTW9kdWxlczogYW55W10sXG4gICAgICAgIG1vZHVsZXM6IE5hdmJhck1vZHVsZU1hcCxcbiAgICAgICAgc29ydDogYm9vbGVhblxuICAgICk6IGFueSB7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxpbms6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogdGhpcy5sYW5ndWFnZS5nZXRBcHBTdHJpbmcobW9kdWxlTGFiZWwpIHx8IG1vZHVsZUxhYmVsLFxuICAgICAgICAgICAgICAgIHVybDogJycsXG4gICAgICAgICAgICAgICAgcm91dGU6IG51bGwsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiBudWxsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaWNvbjogJycsXG4gICAgICAgICAgICBzdWJtZW51OiB0aGlzLmJ1aWxkR3JvdXBlZE1lbnUoZ3JvdXBlZE1vZHVsZXMsIG1vZHVsZXMsIHNvcnQpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgR3JvdXBlZCBtZW51XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZ3JvdXBlZE1vZHVsZXMgaW5mb1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtb2R1bGVzIG1hcFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gc29ydCBmbGFnXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7W119IG1lbnUgaXRlbSBhcnJheVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBidWlsZEdyb3VwZWRNZW51KFxuICAgICAgICBncm91cGVkTW9kdWxlczogYW55W10sXG4gICAgICAgIG1vZHVsZXM6IE5hdmJhck1vZHVsZU1hcCxcbiAgICAgICAgc29ydDogYm9vbGVhblxuICAgICk6IE1lbnVJdGVtW10ge1xuXG4gICAgICAgIGNvbnN0IGdyb3VwZWRJdGVtcyA9IFtdO1xuICAgICAgICBsZXQgaG9tZU1lbnVJdGVtID0gbnVsbDtcblxuICAgICAgICBncm91cGVkTW9kdWxlcy5mb3JFYWNoKChncm91cGVkTW9kdWxlKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IG1vZHVsZSA9IG1vZHVsZXNbZ3JvdXBlZE1vZHVsZV07XG5cbiAgICAgICAgICAgIGlmICghbW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBtb2R1bGVNZW51SXRlbSA9IHRoaXMuYnVpbGRUYWJNZW51SXRlbShncm91cGVkTW9kdWxlLCBtb2R1bGUpO1xuXG4gICAgICAgICAgICBpZiAoZ3JvdXBlZE1vZHVsZSA9PT0gJ2hvbWUnKSB7XG4gICAgICAgICAgICAgICAgaG9tZU1lbnVJdGVtID0gbW9kdWxlTWVudUl0ZW07XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBncm91cGVkSXRlbXMucHVzaChtb2R1bGVNZW51SXRlbSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChzb3J0KSB7XG4gICAgICAgICAgICB0aGlzLnNvcnRNZW51SXRlbXMoZ3JvdXBlZEl0ZW1zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChob21lTWVudUl0ZW0pIHtcbiAgICAgICAgICAgIGdyb3VwZWRJdGVtcy51bnNoaWZ0KGhvbWVNZW51SXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ3JvdXBlZEl0ZW1zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIG1vZHVsZSBtZW51IGl0ZW1zXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbW9kdWxlIG5hbWVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbW9kdWxlSW5mbyBpbmZvXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBtZW51SXRlbVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBidWlsZFRhYk1lbnVJdGVtKFxuICAgICAgICBtb2R1bGU6IHN0cmluZyxcbiAgICAgICAgbW9kdWxlSW5mbzogTmF2YmFyTW9kdWxlLFxuICAgICk6IE1lbnVJdGVtIHtcbiAgICAgICAgaWYgKG1vZHVsZUluZm8ubmFtZSkge1xuICAgICAgICAgICAgbW9kdWxlID0gbW9kdWxlSW5mby5uYW1lO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vZHVsZVJvdXRlID0gdGhpcy5tb2R1bGVOYXZpZ2F0aW9uLmdldE1vZHVsZVJvdXRlKG1vZHVsZUluZm8pO1xuICAgICAgICBjb25zdCBhcHBMaXN0U3RyaW5ncyA9IHRoaXMubGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VTdHJpbmdzKCk/LmFwcExpc3RTdHJpbmdzID8/IHt9O1xuICAgICAgICBjb25zdCBtZW51SXRlbTogTWVudUl0ZW0gPSB7XG4gICAgICAgICAgICBsaW5rOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IHRoaXMubW9kdWxlTmF2aWdhdGlvbi5nZXRNb2R1bGVMYWJlbChtb2R1bGVJbmZvLCBhcHBMaXN0U3RyaW5ncyksXG4gICAgICAgICAgICAgICAgdXJsOiBtb2R1bGVSb3V0ZS51cmwsXG4gICAgICAgICAgICAgICAgcm91dGU6IG1vZHVsZVJvdXRlLnJvdXRlLFxuICAgICAgICAgICAgICAgIHBhcmFtczogbnVsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGljb246IChtb2R1bGUgPT09ICdob21lJykgPyAnaG9tZScgOiAnJyxcbiAgICAgICAgICAgIHN1Ym1lbnU6IFtdLFxuICAgICAgICAgICAgbW9kdWxlOiBtb2R1bGUgPz8gbnVsbCxcbiAgICAgICAgICAgIGlzR3JvdXBlZE1lbnU6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIGxldCBoYXNTdWJtZW51ID0gZmFsc2U7XG4gICAgICAgIGlmIChtb2R1bGVJbmZvKSB7XG4gICAgICAgICAgICBtb2R1bGVJbmZvLm1lbnUuZm9yRWFjaCgoc3ViTWVudSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN1YmxpbmtzID0gc3ViTWVudS5zdWJsaW5rcyB8fCBbXTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdWJNZW51SXRlbSA9IHRoaXMuYnVpbGRTdWJNZW51SXRlbShtb2R1bGUsIHN1Yk1lbnUsIHN1YmxpbmtzKTtcbiAgICAgICAgICAgICAgICBtZW51SXRlbS5zdWJtZW51LnB1c2goc3ViTWVudUl0ZW0pO1xuICAgICAgICAgICAgICAgIGlmIChzdWJsaW5rcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhc1N1Ym1lbnUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIG1lbnVJdGVtLmlzR3JvdXBlZE1lbnUgPSBoYXNTdWJtZW51O1xuICAgICAgICByZXR1cm4gbWVudUl0ZW07XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGJ1aWxkU3ViTWVudUl0ZW0obW9kdWxlOiBzdHJpbmcsIHN1Yk1lbnU6IGFueSwgc3VibGlua3M6IGFueSk6IE1lbnVJdGVtIHtcbiAgICAgICAgY29uc3QgbW9kdWxlQWN0aW9uUm91dGUgPSB0aGlzLm1vZHVsZU5hdmlnYXRpb24uZ2V0QWN0aW9uUm91dGUoc3ViTWVudSk7XG4gICAgICAgIGNvbnN0IHN1Yk1lbnVJdGVtOiBNZW51SXRlbSA9IHtcbiAgICAgICAgICAgIGxpbms6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogdGhpcy5tb2R1bGVOYXZpZ2F0aW9uLmdldEFjdGlvbkxhYmVsKG1vZHVsZSwgc3ViTWVudSwgdGhpcy5sYW5ndWFnZS5nZXRMYW5ndWFnZVN0cmluZ3MoKSksXG4gICAgICAgICAgICAgICAgdXJsOiBtb2R1bGVBY3Rpb25Sb3V0ZS51cmwsXG4gICAgICAgICAgICAgICAgcm91dGU6IG1vZHVsZUFjdGlvblJvdXRlLnJvdXRlLFxuICAgICAgICAgICAgICAgIHBhcmFtczogbW9kdWxlQWN0aW9uUm91dGUucGFyYW1zLFxuICAgICAgICAgICAgICAgIHByb2Nlc3M6IG1vZHVsZUFjdGlvblJvdXRlLnByb2Nlc3NcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpY29uOiBzdWJNZW51Lmljb24gfHwgJycsXG4gICAgICAgICAgICBzdWJtZW51OiBzdWJsaW5rcy5tYXAoKGl0ZW0pID0+IHRoaXMuYnVpbGRTdWJNZW51SXRlbShtb2R1bGUsIGl0ZW0sIFtdKSksXG5cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHN1Yk1lbnVJdGVtO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogU29ydCBtZW51IGl0ZW1zIGJ5IGxhYmVsXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbmF2SXRlbXMgdG8gc29ydFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBzb3J0TWVudUl0ZW1zKG5hdkl0ZW1zOiBhbnlbXSk6IHZvaWQge1xuICAgICAgICBuYXZJdGVtcy5zb3J0KChhOiBNZW51SXRlbSwgYjogTWVudUl0ZW0pID0+IHtcblxuICAgICAgICAgICAgY29uc3QgbmFtZUEgPSBhLmxpbmsubGFiZWwudG9VcHBlckNhc2UoKTsgLy8gaWdub3JlIHVwcGVyIGFuZCBsb3dlcmNhc2VcbiAgICAgICAgICAgIGNvbnN0IG5hbWVCID0gYi5saW5rLmxhYmVsLnRvVXBwZXJDYXNlKCk7IC8vIGlnbm9yZSB1cHBlciBhbmQgbG93ZXJjYXNlXG5cbiAgICAgICAgICAgIGlmIChuYW1lQSA8IG5hbWVCKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5hbWVBID4gbmFtZUIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gbmFtZXMgbXVzdCBiZSBlcXVhbFxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==