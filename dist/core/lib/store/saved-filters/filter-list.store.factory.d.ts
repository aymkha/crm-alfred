import { FilterListStore } from './filter-list.store';
import { AuthService } from '../../services/auth/auth.service';
import { ModuleNameMapper } from '../../services/navigation/module-name-mapper/module-name-mapper.service';
import { FiltersListGQL } from './graphql/api.list.get';
import { SystemConfigStore } from '../system-config/system-config.store';
import { UserPreferenceStore } from '../user-preference/user-preference.store';
import { LanguageStore } from '../language/language.store';
import { MessageService } from '../../services/message/message.service';
import * as i0 from "@angular/core";
export declare class FilterListStoreFactory {
    protected listGQL: FiltersListGQL;
    protected configs: SystemConfigStore;
    protected preferences: UserPreferenceStore;
    protected language: LanguageStore;
    protected message: MessageService;
    protected auth: AuthService;
    protected moduleNameMapper: ModuleNameMapper;
    /**
     * Constructor
     * @param listGQL
     * @param configs
     * @param preferences
     * @param language
     * @param message
     * @param auth
     * @param moduleNameMapper
     */
    constructor(listGQL: FiltersListGQL, configs: SystemConfigStore, preferences: UserPreferenceStore, language: LanguageStore, message: MessageService, auth: AuthService, moduleNameMapper: ModuleNameMapper);
    /**
     * Create a new FilterListStore instance
     * @returns {object} FilterListStore
     */
    create(): FilterListStore;
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterListStoreFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FilterListStoreFactory>;
}
