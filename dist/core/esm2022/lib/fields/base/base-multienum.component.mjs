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
import { BaseEnumComponent } from './base-enum.component';
import * as i0 from "@angular/core";
import * as i1 from "../../store/language/language.store";
import * as i2 from "../../services/formatters/data-type.formatter.service";
import * as i3 from "../field-logic/field-logic.manager";
import * as i4 from "../field-logic-display/field-logic-display.manager";
class BaseMultiEnumComponent extends BaseEnumComponent {
    languages;
    typeFormatter;
    logic;
    logicDisplay;
    constructor(languages, typeFormatter, logic, logicDisplay) {
        super(languages, typeFormatter, logic, logicDisplay);
        this.languages = languages;
        this.typeFormatter = typeFormatter;
        this.logic = logic;
        this.logicDisplay = logicDisplay;
    }
    initValue() {
        this.selectedValues = [];
        if (!this.field.valueList || this.field.valueList.length < 1) {
            this.initEnumDefault();
            return;
        }
        this.field.valueList.forEach(value => {
            if (typeof this.optionsMap[value] !== 'string') {
                return;
            }
            this.selectedValues.push({
                value,
                label: this.optionsMap[value]
            });
        });
    }
    static ɵfac = function BaseMultiEnumComponent_Factory(t) { return new (t || BaseMultiEnumComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i2.DataTypeFormatter), i0.ɵɵdirectiveInject(i3.FieldLogicManager), i0.ɵɵdirectiveInject(i4.FieldLogicDisplayManager)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BaseMultiEnumComponent, selectors: [["ng-component"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function BaseMultiEnumComponent_Template(rf, ctx) { }, encapsulation: 2 });
}
export { BaseMultiEnumComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseMultiEnumComponent, [{
        type: Component,
        args: [{ template: '' }]
    }], function () { return [{ type: i1.LanguageStore }, { type: i2.DataTypeFormatter }, { type: i3.FieldLogicManager }, { type: i4.FieldLogicDisplayManager }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1tdWx0aWVudW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2ZpZWxkcy9iYXNlL2Jhc2UtbXVsdGllbnVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV4QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7O0FBS3hELE1BQ2Esc0JBQXVCLFNBQVEsaUJBQWlCO0lBRzNDO0lBQ0E7SUFDQTtJQUNBO0lBSmQsWUFDYyxTQUF3QixFQUN4QixhQUFnQyxFQUNoQyxLQUF3QixFQUN4QixZQUFzQztRQUVoRCxLQUFLLENBQUMsU0FBUyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFMM0MsY0FBUyxHQUFULFNBQVMsQ0FBZTtRQUN4QixrQkFBYSxHQUFiLGFBQWEsQ0FBbUI7UUFDaEMsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQTBCO0lBR3BELENBQUM7SUFFUyxTQUFTO1FBQ2YsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7UUFFekIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDMUQsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3ZCLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNqQyxJQUFJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxRQUFRLEVBQUU7Z0JBQzVDLE9BQU87YUFDVjtZQUNELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO2dCQUNyQixLQUFLO2dCQUNMLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQzthQUNoQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Z0ZBNUJRLHNCQUFzQjs2REFBdEIsc0JBQXNCOztTQUF0QixzQkFBc0I7dUZBQXRCLHNCQUFzQjtjQURsQyxTQUFTO2VBQUMsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RhdGFUeXBlRm9ybWF0dGVyfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mb3JtYXR0ZXJzL2RhdGEtdHlwZS5mb3JtYXR0ZXIuc2VydmljZSc7XG5pbXBvcnQge0Jhc2VFbnVtQ29tcG9uZW50fSBmcm9tICcuL2Jhc2UtZW51bS5jb21wb25lbnQnO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9sYW5ndWFnZS9sYW5ndWFnZS5zdG9yZSc7XG5pbXBvcnQge0ZpZWxkTG9naWNNYW5hZ2VyfSBmcm9tICcuLi9maWVsZC1sb2dpYy9maWVsZC1sb2dpYy5tYW5hZ2VyJztcbmltcG9ydCB7RmllbGRMb2dpY0Rpc3BsYXlNYW5hZ2VyfSBmcm9tICcuLi9maWVsZC1sb2dpYy1kaXNwbGF5L2ZpZWxkLWxvZ2ljLWRpc3BsYXkubWFuYWdlcic7XG5cbkBDb21wb25lbnQoe3RlbXBsYXRlOiAnJ30pXG5leHBvcnQgY2xhc3MgQmFzZU11bHRpRW51bUNvbXBvbmVudCBleHRlbmRzIEJhc2VFbnVtQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2VzOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgdHlwZUZvcm1hdHRlcjogRGF0YVR5cGVGb3JtYXR0ZXIsXG4gICAgICAgIHByb3RlY3RlZCBsb2dpYzogRmllbGRMb2dpY01hbmFnZXIsXG4gICAgICAgIHByb3RlY3RlZCBsb2dpY0Rpc3BsYXk6IEZpZWxkTG9naWNEaXNwbGF5TWFuYWdlclxuICAgICkge1xuICAgICAgICBzdXBlcihsYW5ndWFnZXMsIHR5cGVGb3JtYXR0ZXIsIGxvZ2ljLCBsb2dpY0Rpc3BsYXkpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0VmFsdWUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZXMgPSBbXTtcblxuICAgICAgICBpZiAoIXRoaXMuZmllbGQudmFsdWVMaXN0IHx8IHRoaXMuZmllbGQudmFsdWVMaXN0Lmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdEVudW1EZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZpZWxkLnZhbHVlTGlzdC5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zTWFwW3ZhbHVlXSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVmFsdWVzLnB1c2goe1xuICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgIGxhYmVsOiB0aGlzLm9wdGlvbnNNYXBbdmFsdWVdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19