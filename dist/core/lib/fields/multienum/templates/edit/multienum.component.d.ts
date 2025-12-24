import { TagInputComponent } from 'ngx-chips';
import { DataTypeFormatter } from '../../../../services/formatters/data-type.formatter.service';
import { BaseMultiEnumComponent } from '../../../base/base-multienum.component';
import { LanguageStore } from '../../../../store/language/language.store';
import { FieldLogicManager } from '../../../field-logic/field-logic.manager';
import { FieldLogicDisplayManager } from '../../../field-logic-display/field-logic-display.manager';
import * as i0 from "@angular/core";
export declare class MultiEnumEditFieldComponent extends BaseMultiEnumComponent {
    protected languages: LanguageStore;
    protected typeFormatter: DataTypeFormatter;
    protected logic: FieldLogicManager;
    protected logicDisplay: FieldLogicDisplayManager;
    tag: TagInputComponent;
    constructor(languages: LanguageStore, typeFormatter: DataTypeFormatter, logic: FieldLogicManager, logicDisplay: FieldLogicDisplayManager);
    ngOnInit(): void;
    onAdd(): void;
    onRemove(): void;
    getPlaceholderLabel(): string;
    selectFirstElement(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MultiEnumEditFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MultiEnumEditFieldComponent, "scrm-multienum-edit", never, {}, {}, never, never, false, never>;
}
