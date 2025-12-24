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
import { BaseActionManager } from '../../services/actions/base-action-manager.service';
import * as i0 from "@angular/core";
import * as i1 from "./display-type/field-logic-display-type.action";
import * as i2 from "./email-primary-select/email-primary-select.action";
import * as i3 from "./required/required.action";
import * as i4 from "./currency-conversion/update-base-currency.action";
import * as i5 from "./currency-conversion/update-currency.action";
import * as i6 from "./update-value/update-value.action";
import * as i7 from "./update-flex-relate-module/update-flex-relate-module.action";
import * as i8 from "./update-value-backend/update-value-backend.action";
import * as i9 from "./display-type-backend/display-type-backend.action";
class FieldLogicManager extends BaseActionManager {
    actions = {
        edit: {},
        create: {},
        list: {},
        detail: {},
        massupdate: {},
        filter: {}
    };
    constructor(displayType, emailPrimarySelectAction, required, updateBaseCurrency, updateCurrency, updateValue, updateFlexRelateModule, updateValueBackend, dislayTypeBackend) {
        super();
        displayType.modes.forEach(mode => this.actions[mode][displayType.key] = displayType);
        emailPrimarySelectAction.modes.forEach(mode => this.actions[mode][emailPrimarySelectAction.key] = emailPrimarySelectAction);
        required.modes.forEach(mode => this.actions[mode][required.key] = required);
        updateBaseCurrency.modes.forEach(mode => this.actions[mode][updateBaseCurrency.key] = updateBaseCurrency);
        updateCurrency.modes.forEach(mode => this.actions[mode][updateCurrency.key] = updateCurrency);
        updateFlexRelateModule.modes.forEach(mode => this.actions[mode][updateFlexRelateModule.key] = updateFlexRelateModule);
        updateValue.modes.forEach(mode => this.actions[mode][updateValue.key] = updateValue);
        updateValueBackend.modes.forEach(mode => this.actions[mode][updateValueBackend.key] = updateValueBackend);
        dislayTypeBackend.modes.forEach(mode => this.actions[mode][dislayTypeBackend.key] = dislayTypeBackend);
    }
    /**
     * Run logic for the given field
     * @param {object} field
     * @param {object} mode
     * @param {object} record
     * @param triggeringStatus
     */
    runLogic(field, mode, record, triggeringStatus = '') {
        if (!field.logic) {
            return;
        }
        const actions = Object.keys(field.logic).map(key => field.logic[key]);
        const modeActions = this.parseModeActions(actions, mode, triggeringStatus);
        const context = {
            record,
            field,
            module: record.module
        };
        modeActions.forEach(action => {
            this.runAction(action, mode, context);
        });
    }
    /**
     * Run the action using given context
     * @param action
     * @param mode
     * @param context
     */
    runAction(action, mode, context = null) {
        this.runFrontEndAction(action, mode, context);
    }
    /**
     * Run front end action
     * @param {object} action
     * @param {object} mode
     * @param {object} context
     */
    runFrontEndAction(action, mode, context = null) {
        const data = this.buildActionData(action, context);
        this.run(action, mode, data);
    }
    /**
     * Get module name
     * @param {object} context
     */
    getModuleName(context) {
        return context.module;
    }
    buildActionData(action, context) {
        return {
            field: context.field,
            record: (context && context.record) || null,
        };
    }
    /**
     * Parse mode actions
     * @param declaredActions
     * @param mode
     * @param triggeringStatus
     */
    parseModeActions(declaredActions, mode, triggeringStatus) {
        if (!declaredActions) {
            return [];
        }
        const availableActions = {
            list: [],
            detail: [],
            edit: [],
            create: [],
            massupdate: [],
            filter: [],
        };
        if (declaredActions && declaredActions.length) {
            declaredActions.forEach(action => {
                if (!action.modes || !action.modes.length) {
                    return;
                }
                action.modes.forEach(actionMode => {
                    if (!availableActions[actionMode] && !action.asyncProcess) {
                        return;
                    }
                    availableActions[actionMode].push(action);
                });
            });
        }
        const actions = [];
        const defaultTriggeringStatus = ['onValueChange'];
        availableActions[mode].forEach(action => {
            const frontendActionTriggeringStatus = this?.actions[mode][action.key]?.getTriggeringStatus() ?? null;
            const actionTriggeringStatus = action?.triggeringStatus ?? frontendActionTriggeringStatus ?? defaultTriggeringStatus;
            if (triggeringStatus && !actionTriggeringStatus.includes(triggeringStatus)) {
                return;
            }
            actions.push(action);
        });
        return actions;
    }
    static ɵfac = function FieldLogicManager_Factory(t) { return new (t || FieldLogicManager)(i0.ɵɵinject(i1.FieldLogicDisplayTypeAction), i0.ɵɵinject(i2.EmailPrimarySelectAction), i0.ɵɵinject(i3.RequiredAction), i0.ɵɵinject(i4.UpdateBaseCurrencyAction), i0.ɵɵinject(i5.UpdateCurrencyAction), i0.ɵɵinject(i6.UpdateValueAction), i0.ɵɵinject(i7.UpdateFlexRelateModuleAction), i0.ɵɵinject(i8.UpdateValueBackendAction), i0.ɵɵinject(i9.DisplayTypeBackendAction)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FieldLogicManager, factory: FieldLogicManager.ɵfac, providedIn: 'root' });
}
export { FieldLogicManager };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FieldLogicManager, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.FieldLogicDisplayTypeAction }, { type: i2.EmailPrimarySelectAction }, { type: i3.RequiredAction }, { type: i4.UpdateBaseCurrencyAction }, { type: i5.UpdateCurrencyAction }, { type: i6.UpdateValueAction }, { type: i7.UpdateFlexRelateModuleAction }, { type: i8.UpdateValueBackendAction }, { type: i9.DisplayTypeBackendAction }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtbG9naWMubWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9maWVsZHMvZmllbGQtbG9naWMvZmllbGQtbG9naWMubWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxvREFBb0QsQ0FBQzs7Ozs7Ozs7Ozs7QUFjckYsTUFHYSxpQkFBa0IsU0FBUSxpQkFBdUM7SUFFMUUsT0FBTyxHQUFrRDtRQUNyRCxJQUFJLEVBQUUsRUFBZ0M7UUFDdEMsTUFBTSxFQUFFLEVBQWdDO1FBQ3hDLElBQUksRUFBRSxFQUFnQztRQUN0QyxNQUFNLEVBQUUsRUFBZ0M7UUFDeEMsVUFBVSxFQUFFLEVBQWdDO1FBQzVDLE1BQU0sRUFBRSxFQUFnQztLQUMzQyxDQUFDO0lBRUYsWUFDSSxXQUF3QyxFQUN4Qyx3QkFBa0QsRUFDbEQsUUFBd0IsRUFDeEIsa0JBQTRDLEVBQzVDLGNBQW9DLEVBQ3BDLFdBQThCLEVBQzlCLHNCQUFvRCxFQUNwRCxrQkFBNEMsRUFDNUMsaUJBQTJDO1FBRTNDLEtBQUssRUFBRSxDQUFDO1FBQ1IsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQztRQUNyRix3QkFBd0IsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLENBQUMsR0FBRyx3QkFBd0IsQ0FBQyxD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Q0FBQztnQkFDOUMsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztTQUNOO1FBRUQsTUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ25CLE1BQU0sdUJBQXVCLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUVsRCxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFFcEMsTUFBTSw4QkFBOEIsR0FBRyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxtQkFBbUIsRUFBRSxJQUFJLElBQUksQ0FBQztZQUN0RyxNQUFNLHNCQUFzQixHQUFHLE1BQU0sRUFBRSxnQkFBZ0IsSUFBSSw4QkFBOEIsSUFBSSx1QkFBdUIsQ0FBQztZQUVySCxJQUFHLGdCQUFnQixJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7Z0JBQ3ZFLE9BQU87YUFDVjtZQUVELE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDOzJFQXBKUSxpQkFBaUI7Z0VBQWpCLGlCQUFpQixXQUFqQixpQkFBaUIsbUJBRmQsTUFBTTs7U0FFVCxpQkFBaUI7dUZBQWpCLGlCQUFpQjtjQUg3QixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Jhc2VBY3Rpb25NYW5hZ2VyfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hY3Rpb25zL2Jhc2UtYWN0aW9uLW1hbmFnZXIuc2VydmljZSc7XG5pbXBvcnQge0ZpZWxkTG9naWNBY3Rpb25EYXRhLCBGaWVsZExvZ2ljQWN0aW9uSGFuZGxlck1hcH0gZnJvbSAnLi9maWVsZC1sb2dpYy5hY3Rpb24nO1xuaW1wb3J0IHtBY3Rpb24sIEFjdGlvbkNvbnRleHQsIEFjdGlvbkhhbmRsZXJNYXAsIEZpZWxkLCBNb2RlQWN0aW9ucywgUmVjb3JkLCBWaWV3TW9kZX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7RmllbGRMb2dpY0Rpc3BsYXlUeXBlQWN0aW9ufSBmcm9tICcuL2Rpc3BsYXktdHlwZS9maWVsZC1sb2dpYy1kaXNwbGF5LXR5cGUuYWN0aW9uJztcbmltcG9ydCB7RW1haWxQcmltYXJ5U2VsZWN0QWN0aW9ufSBmcm9tICcuL2VtYWlsLXByaW1hcnktc2VsZWN0L2VtYWlsLXByaW1hcnktc2VsZWN0LmFjdGlvbic7XG5pbXBvcnQge1JlcXVpcmVkQWN0aW9ufSBmcm9tICcuL3JlcXVpcmVkL3JlcXVpcmVkLmFjdGlvbic7XG5pbXBvcnQge1VwZGF0ZUJhc2VDdXJyZW5jeUFjdGlvbn0gZnJvbSAnLi9jdXJyZW5jeS1jb252ZXJzaW9uL3VwZGF0ZS1iYXNlLWN1cnJlbmN5LmFjdGlvbic7XG5pbXBvcnQge1VwZGF0ZUN1cnJlbmN5QWN0aW9ufSBmcm9tICcuL2N1cnJlbmN5LWNvbnZlcnNpb24vdXBkYXRlLWN1cnJlbmN5LmFjdGlvbic7XG5pbXBvcnQge1VwZGF0ZUZsZXhSZWxhdGVNb2R1bGVBY3Rpb259IGZyb20gJy4vdXBkYXRlLWZsZXgtcmVsYXRlLW1vZHVsZS91cGRhdGUtZmxleC1yZWxhdGUtbW9kdWxlLmFjdGlvbic7XG5pbXBvcnQge1VwZGF0ZVZhbHVlQWN0aW9ufSBmcm9tICcuL3VwZGF0ZS12YWx1ZS91cGRhdGUtdmFsdWUuYWN0aW9uJztcbmltcG9ydCB7VXBkYXRlVmFsdWVCYWNrZW5kQWN0aW9ufSBmcm9tICcuL3VwZGF0ZS12YWx1ZS1iYWNrZW5kL3VwZGF0ZS12YWx1ZS1iYWNrZW5kLmFjdGlvbic7XG5pbXBvcnQge0Rpc3BsYXlUeXBlQmFja2VuZEFjdGlvbn0gZnJvbSAnLi9kaXNwbGF5LXR5cGUtYmFja2VuZC9kaXNwbGF5LXR5cGUtYmFja2VuZC5hY3Rpb24nO1xuaW1wb3J0IHtSZWNvcmRBY3Rpb25EYXRhfSBmcm9tICcuLi8uLi92aWV3cy9yZWNvcmQvYWN0aW9ucy9yZWNvcmQuYWN0aW9uJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBGaWVsZExvZ2ljTWFuYWdlciBleHRlbmRzIEJhc2VBY3Rpb25NYW5hZ2VyPEZpZWxkTG9naWNBY3Rpb25EYXRhPiB7XG5cbiAgICBhY3Rpb25zOiB7IFtrZXk6IHN0cmluZ106IEZpZWxkTG9naWNBY3Rpb25IYW5kbGVyTWFwIH0gPSB7XG4gICAgICAgIGVkaXQ6IHt9IGFzIEZpZWxkTG9naWNBY3Rpb25IYW5kbGVyTWFwLFxuICAgICAgICBjcmVhdGU6IHt9IGFzIEZpZWxkTG9naWNBY3Rpb25IYW5kbGVyTWFwLFxuICAgICAgICBsaXN0OiB7fSBhcyBGaWVsZExvZ2ljQWN0aW9uSGFuZGxlck1hcCxcbiAgICAgICAgZGV0YWlsOiB7fSBhcyBGaWVsZExvZ2ljQWN0aW9uSGFuZGxlck1hcCxcbiAgICAgICAgbWFzc3VwZGF0ZToge30gYXMgRmllbGRMb2dpY0FjdGlvbkhhbmRsZXJNYXAsXG4gICAgICAgIGZpbHRlcjoge30gYXMgRmllbGRMb2dpY0FjdGlvbkhhbmRsZXJNYXBcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGRpc3BsYXlUeXBlOiBGaWVsZExvZ2ljRGlzcGxheVR5cGVBY3Rpb24sXG4gICAgICAgIGVtYWlsUHJpbWFyeVNlbGVjdEFjdGlvbjogRW1haWxQcmltYXJ5U2VsZWN0QWN0aW9uLFxuICAgICAgICByZXF1aXJlZDogUmVxdWlyZWRBY3Rpb24sXG4gICAgICAgIHVwZGF0ZUJhc2VDdXJyZW5jeTogVXBkYXRlQmFzZUN1cnJlbmN5QWN0aW9uLFxuICAgICAgICB1cGRhdGVDdXJyZW5jeTogVXBkYXRlQ3VycmVuY3lBY3Rpb24sXG4gICAgICAgIHVwZGF0ZVZhbHVlOiBVcGRhdGVWYWx1ZUFjdGlvbixcbiAgICAgICAgdXBkYXRlRmxleFJlbGF0ZU1vZHVsZTogVXBkYXRlRmxleFJlbGF0ZU1vZHVsZUFjdGlvbixcbiAgICAgICAgdXBkYXRlVmFsdWVCYWNrZW5kOiBVcGRhdGVWYWx1ZUJhY2tlbmRBY3Rpb24sXG4gICAgICAgIGRpc2xheVR5cGVCYWNrZW5kOiBEaXNwbGF5VHlwZUJhY2tlbmRBY3Rpb25cbiAgICApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgZGlzcGxheVR5cGUubW9kZXMuZm9yRWFjaChtb2RlID0+IHRoaXMuYWN0aW9uc1ttb2RlXVtkaXNwbGF5VHlwZS5rZXldID0gZGlzcGxheVR5cGUpO1xuICAgICAgICBlbWFpbFByaW1hcnlTZWxlY3RBY3Rpb24ubW9kZXMuZm9yRWFjaChtb2RlID0+IHRoaXMuYWN0aW9uc1ttb2RlXVtlbWFpbFByaW1hcnlTZWxlY3RBY3Rpb24ua2V5XSA9IGVtYWlsUHJpbWFyeVNlbGVjdEFjdGlvbik7XG4gICAgICAgIHJlcXVpcmVkLm1vZGVzLmZvckVhY2gobW9kZSA9PiB0aGlzLmFjdGlvbnNbbW9kZV1bcmVxdWlyZWQua2V5XSA9IHJlcXVpcmVkKTtcbiAgICAgICAgdXBkYXRlQmFzZUN1cnJlbmN5Lm1vZGVzLmZvckVhY2gobW9kZSA9PiB0aGlzLmFjdGlvbnNbbW9kZV1bdXBkYXRlQmFzZUN1cnJlbmN5LmtleV0gPSB1cGRhdGVCYXNlQ3VycmVuY3kpO1xuICAgICAgICB1cGRhdGVDdXJyZW5jeS5tb2Rlcy5mb3JFYWNoKG1vZGUgPT4gdGhpcy5hY3Rpb25zW21vZGVdW3VwZGF0ZUN1cnJlbmN5LmtleV0gPSB1cGRhdGVDdXJyZW5jeSk7XG4gICAgICAgIHVwZGF0ZUZsZXhSZWxhdGVNb2R1bGUubW9kZXMuZm9yRWFjaChtb2RlID0+IHRoaXMuYWN0aW9uc1ttb2RlXVt1cGRhdGVGbGV4UmVsYXRlTW9kdWxlLmtleV0gPSB1cGRhdGVGbGV4UmVsYXRlTW9kdWxlKTtcbiAgICAgICAgdXBkYXRlVmFsdWUubW9kZXMuZm9yRWFjaChtb2RlID0+IHRoaXMuYWN0aW9uc1ttb2RlXVt1cGRhdGVWYWx1ZS5rZXldID0gdXBkYXRlVmFsdWUpO1xuICAgICAgICB1cGRhdGVWYWx1ZUJhY2tlbmQubW9kZXMuZm9yRWFjaChtb2RlID0+IHRoaXMuYWN0aW9uc1ttb2RlXVt1cGRhdGVWYWx1ZUJhY2tlbmQua2V5XSA9IHVwZGF0ZVZhbHVlQmFja2VuZCk7XG4gICAgICAgIGRpc2xheVR5cGVCYWNrZW5kLm1vZGVzLmZvckVhY2gobW9kZSA9PiB0aGlzLmFjdGlvbnNbbW9kZV1bZGlzbGF5VHlwZUJhY2tlbmQua2V5XSA9IGRpc2xheVR5cGVCYWNrZW5kKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSdW4gbG9naWMgZm9yIHRoZSBnaXZlbiBmaWVsZFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBmaWVsZFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtb2RlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlY29yZFxuICAgICAqIEBwYXJhbSB0cmlnZ2VyaW5nU3RhdHVzXG4gICAgICovXG4gICAgcnVuTG9naWMoZmllbGQ6IEZpZWxkLCBtb2RlOiBWaWV3TW9kZSwgcmVjb3JkOiBSZWNvcmQsIHRyaWdnZXJpbmdTdGF0dXM6IHN0cmluZyA9ICcnKTogdm9pZCB7XG4gICAgICAgIGlmICghZmllbGQubG9naWMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFjdGlvbnMgPSBPYmplY3Qua2V5cyhmaWVsZC5sb2dpYykubWFwKGtleSA9PiBmaWVsZC5sb2dpY1trZXldKTtcblxuICAgICAgICBjb25zdCBtb2RlQWN0aW9ucyA9IHRoaXMucGFyc2VNb2RlQWN0aW9ucyhhY3Rpb25zLCBtb2RlLCB0cmlnZ2VyaW5nU3RhdHVzKTtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHtcbiAgICAgICAgICAgIHJlY29yZCxcbiAgICAgICAgICAgIGZpZWxkLFxuICAgICAgICAgICAgbW9kdWxlOiByZWNvcmQubW9kdWxlXG4gICAgICAgIH0gYXMgQWN0aW9uQ29udGV4dDtcblxuICAgICAgICBtb2RlQWN0aW9ucy5mb3JFYWNoKGFjdGlvbiA9PiB7XG4gICAgICAgICAgICB0aGlzLnJ1bkFjdGlvbihhY3Rpb24sIG1vZGUsIGNvbnRleHQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSdW4gdGhlIGFjdGlvbiB1c2luZyBnaXZlbiBjb250ZXh0XG4gICAgICogQHBhcmFtIGFjdGlvblxuICAgICAqIEBwYXJhbSBtb2RlXG4gICAgICogQHBhcmFtIGNvbnRleHRcbiAgICAgKi9cbiAgICBydW5BY3Rpb24oYWN0aW9uOiBBY3Rpb24sIG1vZGU6IFZpZXdNb2RlLCBjb250ZXh0OiBBY3Rpb25Db250ZXh0ID0gbnVsbCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJ1bkZyb250RW5kQWN0aW9uKGFjdGlvbiwgbW9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUnVuIGZyb250IGVuZCBhY3Rpb25cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gYWN0aW9uXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG1vZGVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY29udGV4dFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBydW5Gcm9udEVuZEFjdGlvbihhY3Rpb246IEFjdGlvbiwgbW9kZTogVmlld01vZGUsIGNvbnRleHQ6IEFjdGlvbkNvbnRleHQgPSBudWxsKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGRhdGE6IEZpZWxkTG9naWNBY3Rpb25EYXRhID0gdGhpcy5idWlsZEFjdGlvbkRhdGEoYWN0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLnJ1bihhY3Rpb24sIG1vZGUsIGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBtb2R1bGUgbmFtZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldE1vZHVsZU5hbWUoY29udGV4dD86IEFjdGlvbkNvbnRleHQpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gY29udGV4dC5tb2R1bGU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGJ1aWxkQWN0aW9uRGF0YShhY3Rpb246IEFjdGlvbiwgY29udGV4dD86IEFjdGlvbkNvbnRleHQpOiBGaWVsZExvZ2ljQWN0aW9uRGF0YSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmaWVsZDogY29udGV4dC5maWVsZCxcbiAgICAgICAgICAgIHJlY29yZDogKGNvbnRleHQgJiYgY29udGV4dC5yZWNvcmQpIHx8IG51bGwsXG4gICAgICAgIH0gYXMgRmllbGRMb2dpY0FjdGlvbkRhdGE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2UgbW9kZSBhY3Rpb25zXG4gICAgICogQHBhcmFtIGRlY2xhcmVkQWN0aW9uc1xuICAgICAqIEBwYXJhbSBtb2RlXG4gICAgICogQHBhcmFtIHRyaWdnZXJpbmdTdGF0dXNcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgcGFyc2VNb2RlQWN0aW9ucyhkZWNsYXJlZEFjdGlvbnM6IEFjdGlvbltdLCBtb2RlOiBWaWV3TW9kZSwgdHJpZ2dlcmluZ1N0YXR1czogc3RyaW5nKSB7XG4gICAgICAgIGlmICghZGVjbGFyZWRBY3Rpb25zKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhdmFpbGFibGVBY3Rpb25zID0ge1xuICAgICAgICAgICAgbGlzdDogW10sXG4gICAgICAgICAgICBkZXRhaWw6IFtdLFxuICAgICAgICAgICAgZWRpdDogW10sXG4gICAgICAgICAgICBjcmVhdGU6IFtdLFxuICAgICAgICAgICAgbWFzc3VwZGF0ZTogW10sXG4gICAgICAgICAgICBmaWx0ZXI6IFtdLFxuICAgICAgICB9IGFzIE1vZGVBY3Rpb25zO1xuXG4gICAgICAgIGlmIChkZWNsYXJlZEFjdGlvbnMgJiYgZGVjbGFyZWRBY3Rpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgZGVjbGFyZWRBY3Rpb25zLmZvckVhY2goYWN0aW9uID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWFjdGlvbi5tb2RlcyB8fCAhYWN0aW9uLm1vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYWN0aW9uLm1vZGVzLmZvckVhY2goYWN0aW9uTW9kZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYXZhaWxhYmxlQWN0aW9uc1thY3Rpb25Nb2RlXSAmJiAhYWN0aW9uLmFzeW5jUHJvY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZUFjdGlvbnNbYWN0aW9uTW9kZV0ucHVzaChhY3Rpb24pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhY3Rpb25zID0gW107XG4gICAgICAgIGNvbnN0IGRlZmF1bHRUcmlnZ2VyaW5nU3RhdHVzID0gWydvblZhbHVlQ2hhbmdlJ107XG5cbiAgICAgICAgYXZhaWxhYmxlQWN0aW9uc1ttb2RlXS5mb3JFYWNoKGFjdGlvbiA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGZyb250ZW5kQWN0aW9uVHJpZ2dlcmluZ1N0YXR1cyA9IHRoaXM/LmFjdGlvbnNbbW9kZV1bYWN0aW9uLmtleV0/LmdldFRyaWdnZXJpbmdTdGF0dXMoKSA/PyBudWxsO1xuICAgICAgICAgICAgY29uc3QgYWN0aW9uVHJpZ2dlcmluZ1N0YXR1cyA9IGFjdGlvbj8udHJpZ2dlcmluZ1N0YXR1cyA/PyBmcm9udGVuZEFjdGlvblRyaWdnZXJpbmdTdGF0dXMgPz8gZGVmYXVsdFRyaWdnZXJpbmdTdGF0dXM7XG5cbiAgICAgICAgICAgIGlmKHRyaWdnZXJpbmdTdGF0dXMgJiYgIWFjdGlvblRyaWdnZXJpbmdTdGF0dXMuaW5jbHVkZXModHJpZ2dlcmluZ1N0YXR1cykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFjdGlvbnMucHVzaChhY3Rpb24pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYWN0aW9ucztcbiAgICB9XG5cbn1cbiJdfQ==