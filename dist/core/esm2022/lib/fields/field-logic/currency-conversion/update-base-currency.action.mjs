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
class UpdateBaseCurrencyAction extends FieldLogicActionHandler {
    currencyService;
    key = 'update-base-currency';
    modes = ['edit', 'create', 'massupdate', 'filter'];
    constructor(currencyService) {
        super();
        this.currencyService = currencyService;
    }
    run(data, action) {
        const record = data.record;
        const field = data.field;
        if (!record || !field) {
            return;
        }
        const currencyIdFieldName = action.params.currencyIdField ?? 'currency_id';
        const currencyFieldName = action.params.currencyField ?? 'amount';
        const currencyId = record?.fields[currencyIdFieldName]?.value ?? null;
        let value = parseFloat(record?.fields[currencyFieldName]?.value ?? null);
        if (!isFinite(value)) {
            return;
        }
        if (currencyId === null) {
            this.updateValue(field, value, record);
        }
        const baseValue = this.currencyService.currencyToBase(currencyId, value);
        if (!isFinite(baseValue)) {
            return;
        }
        this.updateValue(field, baseValue, record);
    }
    updateValue(field, baseValue, record) {
        field.value = baseValue.toString();
        field.formControl.setValue(baseValue.toString());
        // re-validate the parent form-control after value update
        record.formGroup.updateValueAndValidity({ onlySelf: true, emitEvent: true });
    }
    static ɵfac = function UpdateBaseCurrencyAction_Factory(t) { return new (t || UpdateBaseCurrencyAction)(i0.ɵɵinject(i1.CurrencyService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: UpdateBaseCurrencyAction, factory: UpdateBaseCurrencyAction.ɵfac, providedIn: 'root' });
}
export { UpdateBaseCurrencyAction };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UpdateBaseCurrencyAction, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.CurrencyService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWJhc2UtY3VycmVuY3kuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2ZpZWxkcy9maWVsZC1sb2dpYy9jdXJyZW5jeS1jb252ZXJzaW9uL3VwZGF0ZS1iYXNlLWN1cnJlbmN5LmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQXVCLHVCQUF1QixFQUFDLE1BQU0sdUJBQXVCLENBQUM7OztBQUdwRixNQUdhLHdCQUF5QixTQUFRLHVCQUF1QjtJQUszQztJQUh0QixHQUFHLEdBQUcsc0JBQXNCLENBQUM7SUFDN0IsS0FBSyxHQUFHLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsUUFBUSxDQUFlLENBQUM7SUFFakUsWUFBc0IsZUFBZ0M7UUFDbEQsS0FBSyxFQUFFLENBQUM7UUFEVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFFdEQsQ0FBQztJQUVELEdBQUcsQ0FBQyxJQUEwQixFQUFFLE1BQWM7UUFDMUMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMzQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRXpCLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDbkIsT0FBTztTQUNWO1FBRUQsTUFBTSxtQkFBbUIsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsSUFBSSxhQUFhLENBQUM7UUFDM0UsTUFBTSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsSUFBSSxRQUFRLENBQUM7UUFFbEUsTUFBTSxVQUFVLEdBQUcsTUFBTSxFQUFFLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLEtBQUssSUFBSSxJQUFJLENBQUM7UUFDdEUsSUFBSSxLQUFLLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsaUJBQWlCLENBQUMsRUFBRSxLQUFLLElBQUksSUFBSSxDQUFDLENBQUM7UUFFekUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNsQixPQUFPO1NBQ1Y7UUFFRCxJQUFJLFVBQVUsS0FBSyxJQUFJLEVBQUU7WUFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzFDO1FBRUQsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXpFLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDdEIsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFUyxXQUFXLENBQUMsS0FBWSxFQUFFLFNBQWlCLEVBQUUsTUFBYztRQUNqRSxLQUFLLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNuQyxLQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNqRCx5REFBeUQ7UUFDekQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7SUFDL0UsQ0FBQztrRkE3Q1Esd0JBQXdCO2dFQUF4Qix3QkFBd0IsV0FBeEIsd0JBQXdCLG1CQUZyQixNQUFNOztTQUVULHdCQUF3Qjt1RkFBeEIsd0JBQXdCO2NBSHBDLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWN0aW9uLCBGaWVsZCwgUmVjb3JkLCBWaWV3TW9kZX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7RmllbGRMb2dpY0FjdGlvbkRhdGEsIEZpZWxkTG9naWNBY3Rpb25IYW5kbGVyfSBmcm9tICcuLi9maWVsZC1sb2dpYy5hY3Rpb24nO1xuaW1wb3J0IHtDdXJyZW5jeVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2N1cnJlbmN5L2N1cnJlbmN5LnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFVwZGF0ZUJhc2VDdXJyZW5jeUFjdGlvbiBleHRlbmRzIEZpZWxkTG9naWNBY3Rpb25IYW5kbGVyIHtcblxuICAgIGtleSA9ICd1cGRhdGUtYmFzZS1jdXJyZW5jeSc7XG4gICAgbW9kZXMgPSBbJ2VkaXQnLCAnY3JlYXRlJywgJ21hc3N1cGRhdGUnLCAnZmlsdGVyJ10gYXMgVmlld01vZGVbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjdXJyZW5jeVNlcnZpY2U6IEN1cnJlbmN5U2VydmljZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHJ1bihkYXRhOiBGaWVsZExvZ2ljQWN0aW9uRGF0YSwgYWN0aW9uOiBBY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcmVjb3JkID0gZGF0YS5yZWNvcmQ7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gZGF0YS5maWVsZDtcblxuICAgICAgICBpZiAoIXJlY29yZCB8fCAhZmllbGQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN1cnJlbmN5SWRGaWVsZE5hbWUgPSBhY3Rpb24ucGFyYW1zLmN1cnJlbmN5SWRGaWVsZCA/PyAnY3VycmVuY3lfaWQnO1xuICAgICAgICBjb25zdCBjdXJyZW5jeUZpZWxkTmFtZSA9IGFjdGlvbi5wYXJhbXMuY3VycmVuY3lGaWVsZCA/PyAnYW1vdW50JztcblxuICAgICAgICBjb25zdCBjdXJyZW5jeUlkID0gcmVjb3JkPy5maWVsZHNbY3VycmVuY3lJZEZpZWxkTmFtZV0/LnZhbHVlID8/IG51bGw7XG4gICAgICAgIGxldCB2YWx1ZSA9IHBhcnNlRmxvYXQocmVjb3JkPy5maWVsZHNbY3VycmVuY3lGaWVsZE5hbWVdPy52YWx1ZSA/PyBudWxsKTtcblxuICAgICAgICBpZiAoIWlzRmluaXRlKHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbmN5SWQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUoZmllbGQsIHZhbHVlLCByZWNvcmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYmFzZVZhbHVlID0gdGhpcy5jdXJyZW5jeVNlcnZpY2UuY3VycmVuY3lUb0Jhc2UoY3VycmVuY3lJZCwgdmFsdWUpO1xuXG4gICAgICAgIGlmICghaXNGaW5pdGUoYmFzZVZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZShmaWVsZCwgYmFzZVZhbHVlLCByZWNvcmQpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB1cGRhdGVWYWx1ZShmaWVsZDogRmllbGQsIGJhc2VWYWx1ZTogbnVtYmVyLCByZWNvcmQ6IFJlY29yZCk6IHZvaWQge1xuICAgICAgICBmaWVsZC52YWx1ZSA9IGJhc2VWYWx1ZS50b1N0cmluZygpO1xuICAgICAgICBmaWVsZC5mb3JtQ29udHJvbC5zZXRWYWx1ZShiYXNlVmFsdWUudG9TdHJpbmcoKSk7XG4gICAgICAgIC8vIHJlLXZhbGlkYXRlIHRoZSBwYXJlbnQgZm9ybS1jb250cm9sIGFmdGVyIHZhbHVlIHVwZGF0ZVxuICAgICAgICByZWNvcmQuZm9ybUdyb3VwLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoe29ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IHRydWV9KTtcbiAgICB9XG59XG4iXX0=