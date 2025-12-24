import { TagInputComponent } from 'ngx-chips';
import { ButtonInterface, Field, Record } from 'common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModuleNameMapper } from '../../../../services/navigation/module-name-mapper/module-name-mapper.service';
import { DataTypeFormatter } from '../../../../services/formatters/data-type.formatter.service';
import { BaseRelateComponent } from '../../../base/base-relate.component';
import { LanguageStore } from '../../../../store/language/language.store';
import { RelateService } from '../../../../services/record/relate/relate.service';
import { RecordListModalResult } from '../../../../containers/record-list-modal/components/record-list-modal/record-list-modal.model';
import { FieldLogicManager } from '../../../field-logic/field-logic.manager';
import { FieldLogicDisplayManager } from '../../../field-logic-display/field-logic-display.manager';
import * as i0 from "@angular/core";
export declare class RelateEditFieldComponent extends BaseRelateComponent {
    protected languages: LanguageStore;
    protected typeFormatter: DataTypeFormatter;
    protected relateService: RelateService;
    protected moduleNameMapper: ModuleNameMapper;
    protected modalService: NgbModal;
    protected logic: FieldLogicManager;
    protected logicDisplay: FieldLogicDisplayManager;
    tag: TagInputComponent;
    selectButton: ButtonInterface;
    idField: Field;
    /**
     * Constructor
     *
     * @param {object} languages service
     * @param {object} typeFormatter service
     * @param {object} relateService service
     * @param {object} moduleNameMapper service
     * @param {object} modalService service
     * @param {object} logic
     */
    constructor(languages: LanguageStore, typeFormatter: DataTypeFormatter, relateService: RelateService, moduleNameMapper: ModuleNameMapper, modalService: NgbModal, logic: FieldLogicManager, logicDisplay: FieldLogicDisplayManager);
    /**
     * On init handler
     */
    ngOnInit(): void;
    protected init(): void;
    protected initValue(): void;
    /**
     * Handle newly added item
     *
     * @param {object} item added
     */
    onAdd(item: any): void;
    /**
     * Handle item removal
     */
    onRemove(): void;
    /**
     * Set value on field
     *
     * @param {string} id to set
     * @param {string} relateValue to set
     */
    protected setValue(id: string, relateValue: string): void;
    /**
     * Show record selection modal
     */
    protected showSelectModal(): void;
    /**
     * Get Selected Record
     *
     * @param {object} data RecordListModalResult
     * @returns {object} Record
     */
    protected getSelectedRecord(data: RecordListModalResult): Record;
    /**
     * Set the record as the selected item
     *
     * @param {object} record to set
     */
    protected setItem(record: Record): void;
    selectFirstElement(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RelateEditFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RelateEditFieldComponent, "scrm-relate-edit", never, {}, {}, never, never, false, never>;
}
