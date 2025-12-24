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
import { Injectable } from '@angular/core';
import { FieldLogicActionHandler } from '../field-logic.action';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/currency/currency.service";
class UpdateCurrencyAction extends FieldLogicActionHandler {
    currencyService;
    key = 'update-currency';
    modes = ['edit', 'create', 'massupdate', 'filter'];
    constructor(currencyService) {
        super();
        this.currencyService = currencyService;
    }
    run(data, action) {
        const record = data.record;
        const field = data.field;
        const isBaseCurrency = field?.definition?.metadata?.isBaseCurrency ?? false;
        if (!record || !field || isBaseCurrency) {
            return;
        }
        const currencyIdFieldName = action.params.currencyIdField ?? 'currency_id';
        const baseCurrencyFieldName = action.params.baseCurrencyField ?? 'amount_usdollar';
        const currencyId = record?.fields[currencyIdFieldName]?.value ?? null;
        let value = parseFloat(field?.value ?? null);
        let baseValue = parseFloat(record?.fields[baseCurrencyFieldName]?.value ?? null);
        if (!isFinite(value) || !isFinite(baseValue) || currencyId === null) {
            return;
        }
        const newValue = this.currencyService.baseToCurrency(currencyId, baseValue);
        if (!isFinite(newValue)) {
            return;
        }
        this.updateValue(field, newValue, record);
    }
    updateValue(field, value, record) {
        field.value = value.toString();
        field.formControl.setValue(value.toString());
        // re-validate the parent form-control after value update
        record.formGroup.updateValueAndValidity({ onlySelf: true, emitEvent: true });
    }
    static ɵfac = function UpdateCurrencyAction_Factory(t) { return new (t || UpdateCurrencyAction)(i0.ɵɵinject(i1.CurrencyService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: UpdateCurrencyAction, factory: UpdateCurrencyAction.ɵfac, providedIn: 'root' });
}
export { UpdateCurrencyAction };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UpdateCurrencyAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.CurrencyService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWN1cnJlbmN5LmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9maWVsZHMvZmllbGQtbG9naWMvY3VycmVuY3ktY29udmVyc2lvbi91cGRhdGUtY3VycmVuY3kuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBdUIsdUJBQXVCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQzs7O0FBR3BGLE1BR2Esb0JBQXFCLFNBQVEsdUJBQXVCO0lBS3ZDO0lBSHRCLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQztJQUN4QixLQUFLLEdBQUcsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxRQUFRLENBQWUsQ0FBQztJQUVqRSxZQUFzQixlQUFnQztRQUNsRCxLQUFLLEVBQUUsQ0FBQztRQURVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUV0RCxDQUFDO0lBRUQsR0FBRyxDQUFDLElBQTBCLEVBQUUsTUFBYztRQUMxQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzNCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDekIsTUFBTSxjQUFjLEdBQUcsS0FBSyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsY0FBYyxJQUFJLEtBQUssQ0FBQztRQUU1RSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsS0FBSyxJQUFJLGNBQWMsRUFBRTtZQUNyQyxPQUFPO1NBQ1Y7UUFFRCxNQUFNLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsZUFBZSxJQUFJLGFBQWEsQ0FBQztRQUMzRSxNQUFNLHFCQUFxQixHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsaUJBQWlCLElBQUksaUJBQWlCLENBQUM7UUFFbkYsTUFBTSxVQUFVLEdBQUcsTUFBTSxFQUFFLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLEtBQUssSUFBSSxJQUFJLENBQUM7UUFDdEUsSUFBSSxLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssRUFBRSxLQUFLLElBQUksSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxTQUFTLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMscUJBQXFCLENBQUMsRUFBRSxLQUFLLElBQUksSUFBSSxDQUFDLENBQUM7UUFFakYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxVQUFVLEtBQUssSUFBSSxFQUFFO1lBQ2pFLE9BQU87U0FDVjtRQUVELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUU1RSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3JCLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRVMsV0FBVyxDQUFDLEtBQVksRUFBRSxLQUFhLEVBQUUsTUFBYztRQUM3RCxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMvQixLQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUM3Qyx5REFBeUQ7UUFDekQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7SUFDL0UsQ0FBQzs4RUEzQ1Esb0JBQW9CO2dFQUFwQixvQkFBb0IsV0FBcEIsb0JBQW9CLG1CQUZqQixNQUFNOztTQUVULG9CQUFvQjt1RkFBcEIsb0JBQW9CO2NBSGhDLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWN0aW9uLCBGaWVsZCwgUmVjb3JkLCBWaWV3TW9kZX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7RmllbGRMb2dpY0FjdGlvbkRhdGEsIEZpZWxkTG9naWNBY3Rpb25IYW5kbGVyfSBmcm9tICcuLi9maWVsZC1sb2dpYy5hY3Rpb24nO1xuaW1wb3J0IHtDdXJyZW5jeVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2N1cnJlbmN5L2N1cnJlbmN5LnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFVwZGF0ZUN1cnJlbmN5QWN0aW9uIGV4dGVuZHMgRmllbGRMb2dpY0FjdGlvbkhhbmRsZXIge1xuXG4gICAga2V5ID0gJ3VwZGF0ZS1jdXJyZW5jeSc7XG4gICAgbW9kZXMgPSBbJ2VkaXQnLCAnY3JlYXRlJywgJ21hc3N1cGRhdGUnLCAnZmlsdGVyJ10gYXMgVmlld01vZGVbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjdXJyZW5jeVNlcnZpY2U6IEN1cnJlbmN5U2VydmljZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHJ1bihkYXRhOiBGaWVsZExvZ2ljQWN0aW9uRGF0YSwgYWN0aW9uOiBBY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcmVjb3JkID0gZGF0YS5yZWNvcmQ7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gZGF0YS5maWVsZDtcbiAgICAgICAgY29uc3QgaXNCYXNlQ3VycmVuY3kgPSBmaWVsZD8uZGVmaW5pdGlvbj8ubWV0YWRhdGE/LmlzQmFzZUN1cnJlbmN5ID8/IGZhbHNlO1xuXG4gICAgICAgIGlmICghcmVjb3JkIHx8ICFmaWVsZCB8fCBpc0Jhc2VDdXJyZW5jeSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3VycmVuY3lJZEZpZWxkTmFtZSA9IGFjdGlvbi5wYXJhbXMuY3VycmVuY3lJZEZpZWxkID8/ICdjdXJyZW5jeV9pZCc7XG4gICAgICAgIGNvbnN0IGJhc2VDdXJyZW5jeUZpZWxkTmFtZSA9IGFjdGlvbi5wYXJhbXMuYmFzZUN1cnJlbmN5RmllbGQgPz8gJ2Ftb3VudF91c2RvbGxhcic7XG5cbiAgICAgICAgY29uc3QgY3VycmVuY3lJZCA9IHJlY29yZD8uZmllbGRzW2N1cnJlbmN5SWRGaWVsZE5hbWVdPy52YWx1ZSA/PyBudWxsO1xuICAgICAgICBsZXQgdmFsdWUgPSBwYXJzZUZsb2F0KGZpZWxkPy52YWx1ZSA/PyBudWxsKTtcbiAgICAgICAgbGV0IGJhc2VWYWx1ZSA9IHBhcnNlRmxvYXQocmVjb3JkPy5maWVsZHNbYmFzZUN1cnJlbmN5RmllbGROYW1lXT8udmFsdWUgPz8gbnVsbCk7XG5cbiAgICAgICAgaWYgKCFpc0Zpbml0ZSh2YWx1ZSkgfHwgIWlzRmluaXRlKGJhc2VWYWx1ZSkgfHwgY3VycmVuY3lJZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLmN1cnJlbmN5U2VydmljZS5iYXNlVG9DdXJyZW5jeShjdXJyZW5jeUlkLCBiYXNlVmFsdWUpO1xuXG4gICAgICAgIGlmICghaXNGaW5pdGUobmV3VmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKGZpZWxkLCBuZXdWYWx1ZSwgcmVjb3JkKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlVmFsdWUoZmllbGQ6IEZpZWxkLCB2YWx1ZTogbnVtYmVyLCByZWNvcmQ6IFJlY29yZCk6IHZvaWQge1xuICAgICAgICBmaWVsZC52YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgIGZpZWxkLmZvcm1Db250cm9sLnNldFZhbHVlKHZhbHVlLnRvU3RyaW5nKCkpO1xuICAgICAgICAvLyByZS12YWxpZGF0ZSB0aGUgcGFyZW50IGZvcm0tY29udHJvbCBhZnRlciB2YWx1ZSB1cGRhdGVcbiAgICAgICAgcmVjb3JkLmZvcm1Hcm91cC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHtvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiB0cnVlfSk7XG4gICAgfVxufVxuIl19