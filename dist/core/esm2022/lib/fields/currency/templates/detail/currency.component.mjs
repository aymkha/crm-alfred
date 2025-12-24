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
import { BaseNumberComponent } from '../../../base/base-number.component';
import * as i0 from "@angular/core";
import * as i1 from "../../../../store/user-preference/user-preference.store";
import * as i2 from "../../../../store/system-config/system-config.store";
import * as i3 from "../../../../services/formatters/data-type.formatter.service";
import * as i4 from "../../../field-logic/field-logic.manager";
import * as i5 from "../../../../services/currency/currency.service";
import * as i6 from "../../../field-logic-display/field-logic-display.manager";
import * as i7 from "@angular/common";
import * as i8 from "../../../../pipes/format-currency/format-currency.pipe";
function CurrencyDetailFieldComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "formatCurrency");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(2, 1, ctx_r0.getCurrencyValue(), ctx_r0.getOptions()), "\n");
} }
class CurrencyDetailFieldComponent extends BaseNumberComponent {
    userPreferences;
    systemConfig;
    typeFormatter;
    logic;
    currencyService;
    logicDisplay;
    constructor(userPreferences, systemConfig, typeFormatter, logic, currencyService, logicDisplay) {
        super(userPreferences, systemConfig, typeFormatter, logic, logicDisplay);
        this.userPreferences = userPreferences;
        this.systemConfig = systemConfig;
        this.typeFormatter = typeFormatter;
        this.logic = logic;
        this.currencyService = currencyService;
        this.logicDisplay = logicDisplay;
    }
    getOptions() {
        let options = {};
        if (this.field && this.field.metadata && this.field.metadata.digits !== null && isFinite(this.field.metadata.digits)) {
            options = {
                digits: this.field.metadata.digits
            };
        }
        const isBase = this.currencyService.isBase(this.field);
        let currencyId = this.currencyService.getCurrencyId(this.record);
        if (isBase || currencyId === null) {
            currencyId = this.currencyService.getUserCurrency().id;
        }
        options.symbol = this.currencyService.getSymbol(currencyId);
        options.code = this.currencyService.getCode(currencyId);
        return options;
    }
    getCurrencyValue() {
        return this.currencyService.getFieldCurrencyValue(this.field, this.record);
    }
    static ɵfac = function CurrencyDetailFieldComponent_Factory(t) { return new (t || CurrencyDetailFieldComponent)(i0.ɵɵdirectiveInject(i1.UserPreferenceStore), i0.ɵɵdirectiveInject(i2.SystemConfigStore), i0.ɵɵdirectiveInject(i3.DataTypeFormatter), i0.ɵɵdirectiveInject(i4.FieldLogicManager), i0.ɵɵdirectiveInject(i5.CurrencyService), i0.ɵɵdirectiveInject(i6.FieldLogicDisplayManager)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CurrencyDetailFieldComponent, selectors: [["scrm-currency-detail"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 3, consts: [[4, "ngIf"]], template: function CurrencyDetailFieldComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CurrencyDetailFieldComponent_ng_container_0_Template, 3, 4, "ng-container", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.vm$));
        } }, dependencies: [i7.NgIf, i7.AsyncPipe, i8.FormatCurrencyPipe], encapsulation: 2 });
}
export { CurrencyDetailFieldComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CurrencyDetailFieldComponent, [{
        type: Component,
        args: [{ selector: 'scrm-currency-detail', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"(vm$ | async) as vm\">\n    {{this.getCurrencyValue() | formatCurrency:getOptions()}}\n</ng-container>\n" }]
    }], function () { return [{ type: i1.UserPreferenceStore }, { type: i2.SystemConfigStore }, { type: i3.DataTypeFormatter }, { type: i4.FieldLogicManager }, { type: i5.CurrencyService }, { type: i6.FieldLogicDisplayManager }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3kuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2ZpZWxkcy9jdXJyZW5jeS90ZW1wbGF0ZXMvZGV0YWlsL2N1cnJlbmN5LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9maWVsZHMvY3VycmVuY3kvdGVtcGxhdGVzL2RldGFpbC9jdXJyZW5jeS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQzs7Ozs7Ozs7Ozs7SUNBeEUsNkJBQTBDO0lBQ3RDLFlBQ0o7O0lBQUEsMEJBQWU7OztJQURYLGVBQ0o7SUFESSxzR0FDSjs7QURPQSxNQUthLDRCQUE2QixTQUFRLG1CQUFtQjtJQUVuRDtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFOZCxZQUNjLGVBQW9DLEVBQ3BDLFlBQStCLEVBQy9CLGFBQWdDLEVBQ2hDLEtBQXdCLEVBQ3hCLGVBQWdDLEVBQ2hDLFlBQXNDO1FBRWhELEtBQUssQ0FBQyxlQUFlLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFQL0Qsb0JBQWUsR0FBZixlQUFlLENBQXFCO1FBQ3BDLGlCQUFZLEdBQVosWUFBWSxDQUFtQjtRQUMvQixrQkFBYSxHQUFiLGFBQWEsQ0FBbUI7UUFDaEMsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDeEIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGlCQUFZLEdBQVosWUFBWSxDQUEwQjtJQUdwRCxDQUFDO0lBRUQsVUFBVTtRQUNOLElBQUksT0FBTyxHQUFHLEVBQW1CLENBQUM7UUFDbEMsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxJQUFJLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2xILE9BQU8sR0FBRztnQkFDTixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTTthQUNyQyxDQUFDO1NBQ0w7UUFFRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkQsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWpFLElBQUksTUFBTSxJQUFJLFVBQVUsS0FBSyxJQUFJLEVBQUU7WUFDL0IsVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxFQUFFLENBQUMsRUFBRSxDQUFDO1NBQzFEO1FBRUQsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM1RCxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXhELE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFRCxnQkFBZ0I7UUFDWixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0UsQ0FBQztzRkFuQ1EsNEJBQTRCOzZEQUE1Qiw0QkFBNEI7WUNkekMsK0ZBRWU7OztZQUZBLG9EQUFvQjs7O1NEY3RCLDRCQUE0Qjt1RkFBNUIsNEJBQTRCO2NBTHhDLFNBQVM7MkJBQ0ksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Jhc2VOdW1iZXJDb21wb25lbnR9IGZyb20gJy4uLy4uLy4uL2Jhc2UvYmFzZS1udW1iZXIuY29tcG9uZW50JztcbmltcG9ydCB7U3lzdGVtQ29uZmlnU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3N5c3RlbS1jb25maWcvc3lzdGVtLWNvbmZpZy5zdG9yZSc7XG5pbXBvcnQge0RhdGFUeXBlRm9ybWF0dGVyfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9mb3JtYXR0ZXJzL2RhdGEtdHlwZS5mb3JtYXR0ZXIuc2VydmljZSc7XG5pbXBvcnQge1VzZXJQcmVmZXJlbmNlU3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL3VzZXItcHJlZmVyZW5jZS91c2VyLXByZWZlcmVuY2Uuc3RvcmUnO1xuaW1wb3J0IHtGb3JtYXRPcHRpb25zfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9mb3JtYXR0ZXJzL2Zvcm1hdHRlci5tb2RlbCc7XG5pbXBvcnQge0ZpZWxkTG9naWNNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi9maWVsZC1sb2dpYy9maWVsZC1sb2dpYy5tYW5hZ2VyJztcbmltcG9ydCB7Q3VycmVuY3lTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9jdXJyZW5jeS9jdXJyZW5jeS5zZXJ2aWNlJztcbmltcG9ydCB7RmllbGRMb2dpY0Rpc3BsYXlNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi9maWVsZC1sb2dpYy1kaXNwbGF5L2ZpZWxkLWxvZ2ljLWRpc3BsYXkubWFuYWdlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1jdXJyZW5jeS1kZXRhaWwnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9jdXJyZW5jeS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBDdXJyZW5jeURldGFpbEZpZWxkQ29tcG9uZW50IGV4dGVuZHMgQmFzZU51bWJlckNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCB1c2VyUHJlZmVyZW5jZXM6IFVzZXJQcmVmZXJlbmNlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBzeXN0ZW1Db25maWc6IFN5c3RlbUNvbmZpZ1N0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgdHlwZUZvcm1hdHRlcjogRGF0YVR5cGVGb3JtYXR0ZXIsXG4gICAgICAgIHByb3RlY3RlZCBsb2dpYzogRmllbGRMb2dpY01hbmFnZXIsXG4gICAgICAgIHByb3RlY3RlZCBjdXJyZW5jeVNlcnZpY2U6IEN1cnJlbmN5U2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGxvZ2ljRGlzcGxheTogRmllbGRMb2dpY0Rpc3BsYXlNYW5hZ2VyXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKHVzZXJQcmVmZXJlbmNlcywgc3lzdGVtQ29uZmlnLCB0eXBlRm9ybWF0dGVyLCBsb2dpYywgbG9naWNEaXNwbGF5KTtcbiAgICB9XG5cbiAgICBnZXRPcHRpb25zKCk6IEZvcm1hdE9wdGlvbnMge1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHt9IGFzIEZvcm1hdE9wdGlvbnM7XG4gICAgICAgIGlmICh0aGlzLmZpZWxkICYmIHRoaXMuZmllbGQubWV0YWRhdGEgJiYgdGhpcy5maWVsZC5tZXRhZGF0YS5kaWdpdHMgIT09IG51bGwgJiYgaXNGaW5pdGUodGhpcy5maWVsZC5tZXRhZGF0YS5kaWdpdHMpKSB7XG4gICAgICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIGRpZ2l0czogdGhpcy5maWVsZC5tZXRhZGF0YS5kaWdpdHNcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpc0Jhc2UgPSB0aGlzLmN1cnJlbmN5U2VydmljZS5pc0Jhc2UodGhpcy5maWVsZCk7XG4gICAgICAgIGxldCBjdXJyZW5jeUlkID0gdGhpcy5jdXJyZW5jeVNlcnZpY2UuZ2V0Q3VycmVuY3lJZCh0aGlzLnJlY29yZCk7XG5cbiAgICAgICAgaWYgKGlzQmFzZSB8fCBjdXJyZW5jeUlkID09PSBudWxsKSB7XG4gICAgICAgICAgICBjdXJyZW5jeUlkID0gdGhpcy5jdXJyZW5jeVNlcnZpY2UuZ2V0VXNlckN1cnJlbmN5KCkuaWQ7XG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb25zLnN5bWJvbCA9IHRoaXMuY3VycmVuY3lTZXJ2aWNlLmdldFN5bWJvbChjdXJyZW5jeUlkKTtcbiAgICAgICAgb3B0aW9ucy5jb2RlID0gdGhpcy5jdXJyZW5jeVNlcnZpY2UuZ2V0Q29kZShjdXJyZW5jeUlkKTtcblxuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG5cbiAgICBnZXRDdXJyZW5jeVZhbHVlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbmN5U2VydmljZS5nZXRGaWVsZEN1cnJlbmN5VmFsdWUodGhpcy5maWVsZCwgdGhpcy5yZWNvcmQpO1xuICAgIH1cblxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIih2bSQgfCBhc3luYykgYXMgdm1cIj5cbiAgICB7e3RoaXMuZ2V0Q3VycmVuY3lWYWx1ZSgpIHwgZm9ybWF0Q3VycmVuY3k6Z2V0T3B0aW9ucygpfX1cbjwvbmctY29udGFpbmVyPlxuIl19