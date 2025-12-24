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

import {AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {combineLatestWith, Observable, of, Subscription} from 'rxjs';
import {map, take} from 'rxjs/operators';
import {NavbarModel} from '../navbar-model';
import {NavbarAbstract} from '../navbar.abstract';
import {transition, trigger, useAnimation} from '@angular/animations';
import {fadeIn} from 'ng-animate';
import {ActionNameMapper} from '../../../services/navigation/action-name-mapper/action-name-mapper.service';
import {SystemConfigStore} from '../../../store/system-config/system-config.store';
import {ModuleAction, Navigation, NavigationStore} from '../../../store/navigation/navigation.store';
import {UserPreferenceMap, UserPreferenceStore} from '../../../store/user-preference/user-preference.store';
import {
    ScreenSize,
    ScreenSizeObserverService
} from '../../../services/ui/screen-size-observer/screen-size-observer.service';
import {RouteConverter} from '../../../services/navigation/route-converter/route-converter.service';
import {LanguageStore, LanguageStrings} from '../../../store/language/language.store';
import {ModuleNavigation} from '../../../services/navigation/module-navigation/module-navigation.service';
import {ModuleNameMapper} from '../../../services/navigation/module-name-mapper/module-name-mapper.service';
import {AppState, AppStateStore} from '../../../store/app-state/app-state.store';
import {AuthService} from '../../../services/auth/auth.service';
import {MenuItem, ready} from 'common';
import {AsyncActionInput, AsyncActionService} from '../../../services/process/processes/async-action/async-action';
import {NotificationStore} from "../../../store/notification/notification.store";

@Component({
    selector: 'scrm-base-navbar',
    templateUrl: './base-navbar.component.html',
    styleUrls: [],
    animations: [
        trigger('mobileNavFade', [
            transition(':enter', useAnimation(fadeIn, {
                params: {timing: 0.5, delay: 0}
            })),
        ])
    ]
})
export class BaseNavbarComponent implements OnInit, OnDestroy, AfterViewInit {

    @ViewChild('mobileGlobalLinkTitle') mobileGlobalLinkTitle: ElementRef;

    protected static instances: BaseNavbarComponent[] = [];

    loaded = true;
    isUserLoggedIn: boolean;

    mainNavCollapse = true;
    subNavCollapse = true;
    mobileNavbar = false;
    mobileSubNav = false;
    backLink = false;
    mainNavLink = true;
    submenu: any = [];
    moduleNameMapper: ModuleNameMapper;
    actionNameMapper: ActionNameMapper;
    routeConverter: RouteConverter;
    navbar: NavbarModel;
    maxTabs = 8;
    screen: ScreenSize = ScreenSize.Medium;
    notificationsEnabled: boolean = false;
    subs: Subscription[] = []
    navigation: Navigation;

    currentQuickActions: ModuleAction[];

    languages$: Observable<LanguageStrings>;
    userPreferences$: Observable<UserPreferenceMap>;
    currentUser$: Observable<any>;
    appState$: Observable<AppState>;
    navigation$: Observable<Navigation>;
    dropdownLength: number;

    notificationCount$: Observable<number>;

    vm$: Observable<any>;

            if (screenSize) {
                this.screen = screenSize;
            }

            if (navigation && navigation.modules) {
                this.navigation = navigation;
            }

            this.calculateMaxTabs(navigation);

            this.getModuleQuickActions(appState.module);

            this.navbar.resetMenu();
            if (ready([language.appStrings, language.modStrings, language.appListStrings, userPreferences, currentUser])) {
                this.navbar.build(
                    navigation,
                    currentUser,
                    this.maxTabs,
                );
            }

            return {
                navigation,
                userPreferences,
                appState,
                appStrings: language.appStrings || {},
                appListStrings: language.appListStrings || {}
            };
        })
    );

    constructor(
        protected navigationStore: NavigationStore,
        protected languageStore: LanguageStore,
        protected userPreferenceStore: UserPreferenceStore,
        protected systemConfigStore: SystemConfigStore,
        protected appState: AppStateStore,
        protected authService: AuthService,
        protected moduleNavigation: ModuleNavigation,
        protected screenSize: ScreenSizeObserverService,
        protected asyncActionService: AsyncActionService,
        protected notificationStore: NotificationStore
    ) {
        const sysConfig = systemConfigStore ?? {configs$: of({}), getConfig: () => null} as any;
        this.moduleNameMapper = new ModuleNameMapper(sysConfig);
        this.actionNameMapper = new ActionNameMapper(sysConfig);
        this.routeConverter = new RouteConverter(this.moduleNameMapper, this.actionNameMapper, sysConfig);

        this.languages$ = languageStore?.vm$ ?? of({appStrings: {}, modStrings: {}, appListStrings: {}} as any);
        this.userPreferences$ = userPreferenceStore?.userPreferences$ ?? of({} as any);
        this.currentUser$ = authService?.currentUser$ ?? of(null);
        this.appState$ = appState?.vm$ ?? of({module: null} as any);
        this.navigation$ = navigationStore?.vm$ ?? of({modules: []} as any);
        this.notificationCount$ = notificationStore?.notificationsUnreadTotal$ ?? of(0);

        this.vm$ = this.navigation$.pipe(
            combineLatestWith(
                this.userPreferences$,
                this.currentUser$,
                this.appState$,
                this.screenSize.screenSize$,
                this.languages$,
            ),
            map(([navigation, userPreferences, currentUser, appState, screenSize, language]) => {

                if (screenSize) {
                    this.screen = screenSize;
                }

                if (navigation && navigation.modules) {
                    this.navigation = navigation;
                }

                this.calculateMaxTabs(navigation);

                this.getModuleQuickActions(appState.module);

                this.navbar.resetMenu();
                if (ready([language.appStrings, language.modStrings, language.appListStrings, userPreferences, currentUser])) {
                    this.navbar.build(
                        navigation,
                        currentUser,
                        this.maxTabs,
                    );
                }

                return {
                    navigation,
                    userPreferences,
                    appState,
                    appStrings: language.appStrings || {},
                    appListStrings: language.appListStrings || {}
                };
            })
        );
    }

    /**
     * Public API
     */

    @HostListener('window:resize', ['$event'])
    onResize(event: any): void {
        const innerWidth = event.target.innerWidth;
        this.mobileNavbar = innerWidth <= 768;
    }

    ngOnInit(): void {
        const navbar = new NavbarAbstract(
            this.routeConverter,
            this.moduleNavigation,
            this.userPreferenceStore,
            this.languageStore,
            this.appState
        );
        this.setNavbar(navbar);
        this.authService.isUserLoggedIn.subscribe(value => {
            this.isUserLoggedIn = value;
        });

        window.dispatchEvent(new Event('resize'));

        this.notificationCount$ = this.notificationStore?.notificationsUnreadTotal$ ?? of(0);

        this.subs.push((this.notificationStore?.notificationsEnabled$ ?? of(false)).subscribe(notificationsEnabled => {
            this.notificationsEnabled = notificationsEnabled;
        }));
    }

    ngOnDestroy(): void {
        this.authService.isUserLoggedIn.unsubscribe();
        this.subs.forEach(sub => sub.unsubscribe());
    }

    checkAppStrings(appStrings): boolean {
        return appStrings && Object.keys(appStrings).length > 0;
    }

    arePreferencesInitialized(preferences: UserPreferenceMap) {
        return preferences && Object.keys(preferences).length;
    }

    markAsRead(): void {
        this.notificationStore?.markNotificationsAsRead();
    }

    ngAfterViewInit(): void {
        if (!this.mobileGlobalLinkTitle?.nativeElement?.offsetWidt) {
            return;
        }
        this.dropdownLength = this.mobileGlobalLinkTitle.nativeElement.offsetWidt;
    }

    /**
     * Change subnavigation
     *
     * @param {object} event triggered
     * @param {object} items
     */
    public changeSubNav(event: Event, items: MenuItem[]): void {
        this.mobileSubNav = !this.mobileSubNav;
        this.backLink = !this.backLink;
        this.mainNavLink = !this.mainNavLink;
        this.submenu = items;
    }

    /**
     * Set link flags
     */
    public navBackLink(): void {
        this.mobileSubNav = !this.mobileSubNav;
        this.backLink = !this.backLink;
        this.mainNavLink = !this.mainNavLink;
    }

    /**
     * Get home page
     *
     * @returns {string} homepage
     */
    public getHomePage(): string {
        return this.systemConfigStore.getHomePage();
    }

    public getCloseCallBack(myDrop): Function {
        return () => myDrop.close();
    }

    /**
     * Internal API
     */

    /**
     * Set navbar model
     *
     * @param {object} navbar model
     */
    protected setNavbar(navbar: NavbarModel): void {
        this.navbar = navbar;
        this.loaded = true;
    }

    /**
     * Check if is loaded
     *
     * @returns {{boolean}} is loaded
     */
    protected isLoaded(): boolean {
        return this.loaded;
    }

    protected calculateMaxTabs(navigation: Navigation): void {
        const sizeMap = this.systemConfigStore.getConfigValue('navigation_tab_limits');
        if (this.screen && sizeMap) {

            let maxTabs = sizeMap[this.screen];
            if (!maxTabs || navigation.maxTabs && navigation.maxTabs < maxTabs) {
                maxTabs = navigation.maxTabs;
            }

            this.maxTabs = maxTabs;
        }
    }

    getModuleQuickActions(module: string): void {
        const moduleNavigation = this?.navigation?.modules[module] ?? null;
        const moduleNavigationMenu = moduleNavigation?.menu ?? [];
        if (moduleNavigation === null || !moduleNavigationMenu.length) {
            this.currentQuickActions = [];
        }

        const actions = [] as ModuleAction[];

        moduleNavigationMenu.forEach(entry => {
            if (!entry.url || !entry.quickAction) {
                return;
            }

            const url = entry?.url ?? '';

            actions.push({
                ...entry,
                url: url.replace('/#/', '/')
            } as ModuleAction);
        });

        this.currentQuickActions = actions;
    }

    handleProcess(action: ModuleAction) {
        if (!action.process) {
            return;
        }

        const processType = action.process;

        const options = {
            action: processType,
            module: action.module,
        } as AsyncActionInput;

        this.asyncActionService.run(processType, options).pipe(take(1)).subscribe();
    }
}
