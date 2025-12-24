import { ListGQL } from './graphql/api.list.get';
import { SystemConfigStore } from '../system-config/system-config.store';
import { UserPreferenceStore } from '../user-preference/user-preference.store';
import { LanguageStore } from '../language/language.store';
import { MessageService } from '../../services/message/message.service';
import { RecordListStore } from './record-list.store';
import * as i0 from "@angular/core";
export declare class RecordListStoreFactory {
    protected listGQL: ListGQL;
    protected configStore: SystemConfigStore;
    protected preferencesStore: UserPreferenceStore;
    protected languageStore: LanguageStore;
    protected message: MessageService;
    constructor(listGQL: ListGQL, configStore: SystemConfigStore, preferencesStore: UserPreferenceStore, languageStore: LanguageStore, message: MessageService);
    create(): RecordListStore;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordListStoreFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecordListStoreFactory>;
}
