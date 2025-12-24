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
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { BaseFieldComponent } from './base-field.component';
import * as i0 from "@angular/core";
import * as i1 from "../../store/language/language.store";
import * as i2 from "../../services/formatters/data-type.formatter.service";
import * as i3 from "../../services/record/relate/relate.service";
import * as i4 from "../../services/navigation/module-name-mapper/module-name-mapper.service";
import * as i5 from "../field-logic/field-logic.manager";
import * as i6 from "../field-logic-display/field-logic-display.manager";
class BaseRelateComponent extends BaseFieldComponent {
    languages;
    typeFormatter;
    relateService;
    moduleNameMapper;
    logic;
    logicDisplay;
    selectedValues = [];
    status = '';
    initModule = '';
    constructor(languages, typeFormatter, relateService, moduleNameMapper, logic, logicDisplay) {
        super(typeFormatter, logic, logicDisplay);
        this.languages = languages;
        this.typeFormatter = typeFormatter;
        this.relateService = relateService;
        this.moduleNameMapper = moduleNameMapper;
        this.logic = logic;
        this.logicDisplay = logicDisplay;
    }
    get module() {
        if (!this.record || !this.record.module) {
            return null;
        }
        return this.record.module;
    }
    ngOnInit() {
        super.ngOnInit();
        this.init();
        this.subs.push(this.field.valueChanges$.subscribe(() => {
            this.onModuleChange();
        }));
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }
    onModuleChange() {
        const currentModule = this.initModule;
        const newModule = this?.field?.definition?.module ?? '';
        if (currentModule === newModule) {
            return;
        }
        this.initModule = newModule;
        if (currentModule === '' && currentModule !== newModule) {
            this.init();
        }
        if (newModule === '') {
            this.status = 'no-module';
        }
        else {
            this.status = '';
        }
    }
    search = (text) => {
        this.status = 'searching';
        return this.relateService.search(text, this.getRelateFieldName()).pipe(tap(() => this.status = 'found'), catchError(() => {
            this.status = 'error';
            return of([]);
        }), map(records => {
            if (!records || records.length < 1) {
                this.status = 'not-found';
                return [];
            }
            const flatRecords = [];
            records.forEach((record) => {
                if (record && record.attributes) {
                    flatRecords.push(record.attributes);
                }
            });
            this.status = '';
            return flatRecords;
        }));
    };
    getRelateFieldName() {
        return (this.field && this.field.definition && this.field.definition.rname) || 'name';
    }
    getRelateIdField() {
        return (this.field && this.field.definition && this.field.definition.id_name) || '';
    }
    getRelatedModule() {
        const legacyName = (this.field && this.field.definition && this.field.definition.module) || '';
        if (!legacyName) {
            return '';
        }
        return this.moduleNameMapper.toFrontend(legacyName);
    }
    getMessage() {
        const messages = {
            searching: 'LBL_SEARCHING',
            'not-found': 'LBL_NOT_FOUND',
            error: 'LBL_SEARCH_ERROR',
            found: 'LBL_FOUND',
            'no-module': 'LBL_NO_MODULE_SELECTED'
        };
        if (messages[this.status]) {
            return messages[this.status];
        }
        return '';
    }
    getInvalidClass() {
        if (this.field.formControl && this.field.formControl.invalid && this.field.formControl.touched) {
            return 'is-invalid';
        }
        if (this.hasSearchError()) {
            return 'is-invalid';
        }
        return '';
    }
    hasSearchError() {
        return this.status === 'error' || this.status === 'not-found';
    }
    resetStatus() {
        this.status = '';
    }
    getPlaceholderLabel() {
        return this.languages.getAppString('LBL_TYPE_TO_SEARCH') || '';
    }
    init() {
        this.initModule = this?.field?.definition?.module ?? '';
        if (this.relateService) {
            this.relateService.init(this.getRelatedModule());
        }
    }
    buildRelate(id, relateValue) {
        const relate = { id };
        if (this.getRelateFieldName()) {
            relate[this.getRelateFieldName()] = relateValue;
        }
        return relate;
    }
    static ɵfac = function BaseRelateComponent_Factory(t) { return new (t || BaseRelateComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i2.DataTypeFormatter), i0.ɵɵdirectiveInject(i3.RelateService), i0.ɵɵdirectiveInject(i4.ModuleNameMapper), i0.ɵɵdirectiveInject(i5.FieldLogicManager), i0.ɵɵdirectiveInject(i6.FieldLogicDisplayManager)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BaseRelateComponent, selectors: [["ng-component"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function BaseRelateComponent_Template(rf, ctx) { }, encapsulation: 2 });
}
export { BaseRelateComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseRelateComponent, [{
        type: Component,
        args: [{ template: '' }]
    }], function () { return [{ type: i1.LanguageStore }, { type: i2.DataTypeFormatter }, { type: i3.RelateService }, { type: i4.ModuleNameMapper }, { type: i5.FieldLogicManager }, { type: i6.FieldLogicDisplayManager }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1yZWxhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2ZpZWxkcy9iYXNlL2Jhc2UtcmVsYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFhLEVBQUUsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUdwRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7QUFPMUQsTUFDYSxtQkFBb0IsU0FBUSxrQkFBa0I7SUFPekM7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBWGQsY0FBYyxHQUFtQixFQUFFLENBQUM7SUFFcEMsTUFBTSxHQUFxRSxFQUFFLENBQUM7SUFDOUUsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUVoQixZQUNjLFNBQXdCLEVBQ3hCLGFBQWdDLEVBQ2hDLGFBQTRCLEVBQzVCLGdCQUFrQyxFQUNsQyxLQUF3QixFQUN4QixZQUFzQztRQUVoRCxLQUFLLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztRQVBoQyxjQUFTLEdBQVQsU0FBUyxDQUFlO1FBQ3hCLGtCQUFhLEdBQWIsYUFBYSxDQUFtQjtRQUNoQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQ3hCLGlCQUFZLEdBQVosWUFBWSxDQUEwQjtJQUdwRCxDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFN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Q0FBQztJQUNkLENBQUM7SUFFRCxjQUFjO1FBQ1YsT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLFdBQVcsQ0FBQztJQUNsRSxDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxtQkFBbUI7UUFDZixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLG9CQUFvQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ25FLENBQUM7SUFFUyxJQUFJO1FBRVYsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLElBQUksRUFBRSxDQUFDO1FBRXhELElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1NBQ3BEO0lBQ0wsQ0FBQztJQUVTLFdBQVcsQ0FBQyxFQUFVLEVBQUUsV0FBbUI7UUFDakQsTUFBTSxNQUFNLEdBQUcsRUFBQyxFQUFFLEVBQUMsQ0FBQztRQUVwQixJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFO1lBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQztTQUNuRDtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7NkVBeEtRLG1CQUFtQjs2REFBbkIsbUJBQW1COztTQUFuQixtQkFBbUI7dUZBQW5CLG1CQUFtQjtjQUQvQixTQUFTO2VBQUMsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBvZn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2NhdGNoRXJyb3IsIG1hcCwgdGFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0F0dHJpYnV0ZU1hcCwgUmVjb3JkfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtNb2R1bGVOYW1lTWFwcGVyfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL21vZHVsZS1uYW1lLW1hcHBlci9tb2R1bGUtbmFtZS1tYXBwZXIuc2VydmljZSc7XG5pbXBvcnQge0Jhc2VGaWVsZENvbXBvbmVudH0gZnJvbSAnLi9iYXNlLWZpZWxkLmNvbXBvbmVudCc7XG5pbXBvcnQge0RhdGFUeXBlRm9ybWF0dGVyfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mb3JtYXR0ZXJzL2RhdGEtdHlwZS5mb3JtYXR0ZXIuc2VydmljZSc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7UmVsYXRlU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvcmVjb3JkL3JlbGF0ZS9yZWxhdGUuc2VydmljZSc7XG5pbXBvcnQge0ZpZWxkTG9naWNNYW5hZ2VyfSBmcm9tICcuLi9maWVsZC1sb2dpYy9maWVsZC1sb2dpYy5tYW5hZ2VyJztcbmltcG9ydCB7RmllbGRMb2dpY0Rpc3BsYXlNYW5hZ2VyfSBmcm9tICcuLi9maWVsZC1sb2dpYy1kaXNwbGF5L2ZpZWxkLWxvZ2ljLWRpc3BsYXkubWFuYWdlcic7XG5cbkBDb21wb25lbnQoe3RlbXBsYXRlOiAnJ30pXG5leHBvcnQgY2xhc3MgQmFzZVJlbGF0ZUNvbXBvbmVudCBleHRlbmRzIEJhc2VGaWVsZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBzZWxlY3RlZFZhbHVlczogQXR0cmlidXRlTWFwW10gPSBbXTtcblxuICAgIHN0YXR1czogJycgfCAnc2VhcmNoaW5nJyB8ICdub3QtZm91bmQnIHwgJ2Vycm9yJyB8ICdmb3VuZCcgfCAnbm8tbW9kdWxlJyA9ICcnO1xuICAgIGluaXRNb2R1bGUgPSAnJztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2VzOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgdHlwZUZvcm1hdHRlcjogRGF0YVR5cGVGb3JtYXR0ZXIsXG4gICAgICAgIHByb3RlY3RlZCByZWxhdGVTZXJ2aWNlOiBSZWxhdGVTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgbW9kdWxlTmFtZU1hcHBlcjogTW9kdWxlTmFtZU1hcHBlcixcbiAgICAgICAgcHJvdGVjdGVkIGxvZ2ljOiBGaWVsZExvZ2ljTWFuYWdlcixcbiAgICAgICAgcHJvdGVjdGVkIGxvZ2ljRGlzcGxheTogRmllbGRMb2dpY0Rpc3BsYXlNYW5hZ2VyXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKHR5cGVGb3JtYXR0ZXIsIGxvZ2ljLCBsb2dpY0Rpc3BsYXkpO1xuICAgIH1cblxuICAgIGdldCBtb2R1bGUoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCF0aGlzLnJlY29yZCB8fCAhdGhpcy5yZWNvcmQubW9kdWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnJlY29yZC5tb2R1bGU7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICAgICAgc3VwZXIubmdPbkluaXQoKTtcblxuICAgICAgICB0aGlzLmluaXQoKTtcblxuICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLmZpZWxkLnZhbHVlQ2hhbmdlcyQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25Nb2R1bGVDaGFuZ2UoKTtcbiAgICAgICAgfSkpO1xuICAgIH1cblxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3Vicy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxuXG4gICAgb25Nb2R1bGVDaGFuZ2UoKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgY3VycmVudE1vZHVsZSA9IHRoaXMuaW5pdE1vZHVsZTtcbiAgICAgICAgY29uc3QgbmV3TW9kdWxlID0gdGhpcz8uZmllbGQ/LmRlZmluaXRpb24/Lm1vZHVsZSA/PyAnJztcblxuICAgICAgICBpZiAoY3VycmVudE1vZHVsZSA9PT0gbmV3TW9kdWxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluaXRNb2R1bGUgPSBuZXdNb2R1bGU7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRNb2R1bGUgPT09ICcnICYmIGN1cnJlbnRNb2R1bGUgIT09IG5ld01vZHVsZSkge1xuICAgICAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV3TW9kdWxlID09PSAnJykge1xuICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSAnbm8tbW9kdWxlJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gJyc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWFyY2ggPSAodGV4dDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+ID0+IHtcblxuICAgICAgICB0aGlzLnN0YXR1cyA9ICdzZWFyY2hpbmcnO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJlbGF0ZVNlcnZpY2Uuc2VhcmNoKHRleHQsIHRoaXMuZ2V0UmVsYXRlRmllbGROYW1lKCkpLnBpcGUoXG4gICAgICAgICAgICB0YXAoKCkgPT4gdGhpcy5zdGF0dXMgPSAnZm91bmQnKSxcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gJ2Vycm9yJztcbiAgICAgICAgICAgICAgICByZXR1cm4gb2YoW10pO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBtYXAocmVjb3JkcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZWNvcmRzIHx8IHJlY29yZHMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9ICdub3QtZm91bmQnO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgZmxhdFJlY29yZHM6IEF0dHJpYnV0ZU1hcFtdID0gW107XG5cbiAgICAgICAgICAgICAgICByZWNvcmRzLmZvckVhY2goKHJlY29yZDogUmVjb3JkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWNvcmQgJiYgcmVjb3JkLmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsYXRSZWNvcmRzLnB1c2gocmVjb3JkLmF0dHJpYnV0ZXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9ICcnO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZsYXRSZWNvcmRzO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIGdldFJlbGF0ZUZpZWxkTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gKHRoaXMuZmllbGQgJiYgdGhpcy5maWVsZC5kZWZpbml0aW9uICYmIHRoaXMuZmllbGQuZGVmaW5pdGlvbi5ybmFtZSkgfHwgJ25hbWUnO1xuICAgIH1cblxuICAgIGdldFJlbGF0ZUlkRmllbGQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmZpZWxkICYmIHRoaXMuZmllbGQuZGVmaW5pdGlvbiAmJiB0aGlzLmZpZWxkLmRlZmluaXRpb24uaWRfbmFtZSkgfHwgJyc7XG4gICAgfVxuXG4gICAgZ2V0UmVsYXRlZE1vZHVsZSgpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBsZWdhY3lOYW1lID0gKHRoaXMuZmllbGQgJiYgdGhpcy5maWVsZC5kZWZpbml0aW9uICYmIHRoaXMuZmllbGQuZGVmaW5pdGlvbi5tb2R1bGUpIHx8ICcnO1xuICAgICAgICBpZiAoIWxlZ2FjeU5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLm1vZHVsZU5hbWVNYXBwZXIudG9Gcm9udGVuZChsZWdhY3lOYW1lKTtcbiAgICB9XG5cbiAgICBnZXRNZXNzYWdlKCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzID0ge1xuICAgICAgICAgICAgc2VhcmNoaW5nOiAnTEJMX1NFQVJDSElORycsXG4gICAgICAgICAgICAnbm90LWZvdW5kJzogJ0xCTF9OT1RfRk9VTkQnLFxuICAgICAgICAgICAgZXJyb3I6ICdMQkxfU0VBUkNIX0VSUk9SJyxcbiAgICAgICAgICAgIGZvdW5kOiAnTEJMX0ZPVU5EJyxcbiAgICAgICAgICAgICduby1tb2R1bGUnOiAnTEJMX05PX01PRFVMRV9TRUxFQ1RFRCdcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAobWVzc2FnZXNbdGhpcy5zdGF0dXNdKSB7XG4gICAgICAgICAgICByZXR1cm4gbWVzc2FnZXNbdGhpcy5zdGF0dXNdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGdldEludmFsaWRDbGFzcygpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5maWVsZC5mb3JtQ29udHJvbCAmJiB0aGlzLmZpZWxkLmZvcm1Db250cm9sLmludmFsaWQgJiYgdGhpcy5maWVsZC5mb3JtQ29udHJvbC50b3VjaGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2lzLWludmFsaWQnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaGFzU2VhcmNoRXJyb3IoKSkge1xuICAgICAgICAgICAgcmV0dXJuICdpcy1pbnZhbGlkJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBoYXNTZWFyY2hFcnJvcigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAnZXJyb3InIHx8IHRoaXMuc3RhdHVzID09PSAnbm90LWZvdW5kJztcbiAgICB9XG5cbiAgICByZXNldFN0YXR1cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSAnJztcbiAgICB9XG5cbiAgICBnZXRQbGFjZWhvbGRlckxhYmVsKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmxhbmd1YWdlcy5nZXRBcHBTdHJpbmcoJ0xCTF9UWVBFX1RPX1NFQVJDSCcpIHx8ICcnO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0KCk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMuaW5pdE1vZHVsZSA9IHRoaXM/LmZpZWxkPy5kZWZpbml0aW9uPy5tb2R1bGUgPz8gJyc7XG5cbiAgICAgICAgaWYgKHRoaXMucmVsYXRlU2VydmljZSkge1xuICAgICAgICAgICAgdGhpcy5yZWxhdGVTZXJ2aWNlLmluaXQodGhpcy5nZXRSZWxhdGVkTW9kdWxlKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGJ1aWxkUmVsYXRlKGlkOiBzdHJpbmcsIHJlbGF0ZVZhbHVlOiBzdHJpbmcpOiBhbnkge1xuICAgICAgICBjb25zdCByZWxhdGUgPSB7aWR9O1xuXG4gICAgICAgIGlmICh0aGlzLmdldFJlbGF0ZUZpZWxkTmFtZSgpKSB7XG4gICAgICAgICAgICByZWxhdGVbdGhpcy5nZXRSZWxhdGVGaWVsZE5hbWUoKV0gPSByZWxhdGVWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZWxhdGU7XG4gICAgfVxuXG59XG4iXX0=