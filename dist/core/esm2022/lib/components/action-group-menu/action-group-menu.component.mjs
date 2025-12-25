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
import { Component, Input } from '@angular/core';
import { Button, isFalse } from 'common';
import { BehaviorSubject, combineLatestWith, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ScreenSize } from '../../services/ui/screen-size-observer/screen-size-observer.service';
import * as i0 from "@angular/core";
import * as i1 from "../../store/language/language.store";
import * as i2 from "../../services/ui/screen-size-observer/screen-size-observer.service";
import * as i3 from "../../store/system-config/system-config.store";
import * as i4 from "@angular/common";
import * as i5 from "../button/button.component";
import * as i6 from "../button-group/button-group.component";
import * as i7 from "../label/label.component";
import * as i8 from "../dynamic-label/dynamic-label.component";
import * as i9 from "../inline-loading-spinner/inline-loading-spinner.component";
function ActionGroupMenuComponent_ng_container_0_ng_container_2_scrm_button_group_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "scrm-button-group", 2);
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("config$", ctx_r5.config$)("klass", ctx_r5.buttonGroupClass);
} }
function ActionGroupMenuComponent_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ActionGroupMenuComponent_ng_container_0_ng_container_2_scrm_button_group_1_Template, 1, 2, "scrm-button-group", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.config$);
} }
function ActionGroupMenuComponent_ng_container_0_ng_container_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "scrm-label", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("labelKey", ctx_r6.confirmationLabel);
} }
const _c0 = function () { return {}; };
function ActionGroupMenuComponent_ng_container_0_ng_container_3_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "scrm-dynamic-label", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(3);
    let tmp_1_0;
    let tmp_2_0;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("labelKey", ctx_r7.confirmationDynamicLabel)("module", (tmp_1_0 = ctx_r7.actionContext == null ? null : ctx_r7.actionContext.module) !== null && tmp_1_0 !== undefined ? tmp_1_0 : "")("fields", (tmp_2_0 = ctx_r7.actionContext == null ? null : ctx_r7.actionContext.record == null ? null : ctx_r7.actionContext.record.fields) !== null && tmp_2_0 !== undefined ? tmp_2_0 : i0.ɵɵpureFunction0(3, _c0));
} }
function ActionGroupMenuComponent_ng_container_0_ng_container_3_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelement(1, "scrm-button", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("config", ctx_r8.inlineCancelButton);
} }
function ActionGroupMenuComponent_ng_container_0_ng_container_3_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelement(1, "scrm-button", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("config", ctx_r9.inlineConfirmButton);
} }
function ActionGroupMenuComponent_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵtemplate(2, ActionGroupMenuComponent_ng_container_0_ng_container_3_div_2_Template, 2, 1, "div", 4);
    i0.ɵɵtemplate(3, ActionGroupMenuComponent_ng_container_0_ng_container_3_div_3_Template, 2, 4, "div", 4);
    i0.ɵɵtemplate(4, ActionGroupMenuComponent_ng_container_0_ng_container_3_div_4_Template, 2, 1, "div", 5);
    i0.ɵɵtemplate(5, ActionGroupMenuComponent_ng_container_0_ng_container_3_div_5_Template, 2, 1, "div", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r3.confirmationLabel);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.confirmationDynamicLabel && !ctx_r3.confirmationLabel);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.inlineCancelButton);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.inlineConfirmButton);
} }
function ActionGroupMenuComponent_ng_container_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-inline-loading-spinner", 11);
    i0.ɵɵelementContainerEnd();
} }
function ActionGroupMenuComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ActionGroupMenuComponent_ng_container_0_ng_container_2_Template, 2, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, ActionGroupMenuComponent_ng_container_0_ng_container_3_Template, 6, 4, "ng-container", 0);
    i0.ɵɵtemplate(4, ActionGroupMenuComponent_ng_container_0_ng_container_4_Template, 2, 0, "ng-container", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("", ctx_r0.klass, " float-right action-group-menu");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.inlineConfirmationEnabled && !ctx_r0.loading);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.inlineConfirmationEnabled && !ctx_r0.loading);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.loading);
} }
class ActionGroupMenuComponent {
    languages;
    screenSize;
    systemConfigStore;
    klass = '';
    buttonClass = 'btn btn-sm';
    buttonGroupClass = '';
    actionContext;
    config;
    actionLimitConfig = 'recordview_actions_limits';
    configState = new BehaviorSubject({ buttons: [] });
    config$ = this.configState.asObservable();
    vm$;
    inlineConfirmationEnabled = false;
    confirmationLabel = '';
    confirmationDynamicLabel = '';
    inlineCancelButton = null;
    inlineConfirmButton = null;
    loading = false;
    buttonGroupDropdownClass = 'dropdown-button-secondary';
    subs;
    screen = ScreenSize.Medium;
    defaultBreakpoint = 3;
    breakpoint;
    constructor(languages, screenSize, systemConfigStore) {
        this.languages = languages;
        this.screenSize = screenSize;
        this.systemConfigStore = systemConfigStore;
    }
    ngOnInit() {
        const actions$ = this.config?.getActions?.() ?? of([]);
        const screenSize$ = this.screenSize?.screenSize$ ?? of(ScreenSize.Medium);
        const languages$ = this.languages?.vm$ ?? of({});
        this.vm$ = actions$.pipe(combineLatestWith(screenSize$, languages$), map(([actions, screenSize, languages]) => {
            if (screenSize) {
                this.screen = screenSize;
            }
            this.configState.next(this.getButtonGroupConfig(actions));
            return { actions, screenSize, languages };
        }));
    }
    isXSmallScreen() {
        return this.screen === ScreenSize.XSmall;
    }
    getButtonGroupConfig(actions) {
        const expanded = [];
        const collapsed = [];
        actions.forEach((action) => {
            const button = this.buildButton(action);
            if (action.params && action.params.expanded) {
                expanded.push(button);
                return;
            }
            collapsed.push(button);
        });
        const collapseButtons = this.config.collapseButtons ?? true;
        let breakpoint = actions.length;
        if (collapseButtons === true) {
            breakpoint = this.getBreakpoint();
            if (expanded.length < breakpoint) {
                breakpoint = expanded.length;
            }
        }
        const buttons = expanded.concat(collapsed);
        return {
            buttonKlass: [this.buttonClass],
            dropdownLabel: this.languages.getAppString('LBL_ACTIONS') || '',
            breakpoint,
            dropdownOptions: {
                placement: ['bottom-right'],
                wrapperKlass: [(this.buttonGroupDropdownClass)]
            },
            buttons
        };
    }
    getBreakpoint() {
        const breakpointMap = this.systemConfigStore.getConfigValue(this.actionLimitConfig);
        if (this.screen && breakpointMap && breakpointMap[this.screen]) {
            this.breakpoint = breakpointMap[this.screen];
            return this.breakpoint;
        }
        if (this.breakpoint) {
            return this.breakpoint;
        }
        return this.defaultBreakpoint;
    }
    buildButton(action) {
        const button = {
            label: action.label || '',
            labelModule: this?.actionContext?.module ?? '',
            labelKey: action.labelKey || '',
            klass: this.buttonClass,
            titleKey: action.titleKey || '',
            onClick: () => {
                const inlineConfirmation = action?.params?.inlineConfirmation ?? false;
                if (inlineConfirmation) {
                    this.triggerTemporaryLoading();
                    const callback = () => {
                        this.config.runAction(action, this.actionContext);
                    };
                    this.initInlineConfirmation(action, callback);
                    return;
                }
                this.config.runAction(action, this.actionContext);
            }
        };
        if (!button.label) {
            button.labelKey = action.labelKey ?? '';
        }
        const debounceClick = action?.params?.debounceClick ?? null;
        button.debounceClick = true;
        if (isFalse(debounceClick)) {
            button.debounceClick = false;
        }
        if (action.icon) {
            button.icon = action.icon;
        }
        if (action.status) {
            Button.appendClasses(button, [action.status]);
        }
        if (action.klass) {
            Button.appendClasses(button, action.klass);
        }
        return button;
    }
    triggerTemporaryLoading() {
        this.loading = true;
        const delay = parseInt(this.systemConfigStore.getUi('inline_confirmation_loading_delay')) ?? 200;
        setTimeout(() => {
            this.loading = false;
        }, delay);
    }
    initInlineConfirmation(action, callback) {
        const cancelConfig = action?.params?.inlineConfirmationButtons?.cancel ?? {};
        const confirmConfig = action?.params?.inlineConfirmationButtons?.confirm ?? {};
        this.confirmationLabel = action?.params?.confirmationLabel ?? '';
        this.confirmationDynamicLabel = action?.params?.confirmationDynamicLabel ?? '';
        this.inlineCancelButton = this.buildInlineCancelButton(cancelConfig);
        this.inlineConfirmButton = this.buildInlineConfirmButton(confirmConfig, callback);
        this.inlineConfirmationEnabled = true;
    }
    buildInlineCancelButton(config) {
        const defaults = {
            labelKey: 'LBL_NO',
            klass: 'btn btn-sm p-0 m-0 btn-link border-0 line-height-initial',
            debounceClick: true,
        };
        const button = { ...defaults, ...(config ?? {}) };
        button.onClick = () => {
            this.triggerTemporaryLoading();
            this.resetInlineConfirmation();
        };
        return button;
    }
    buildInlineConfirmButton(config, callback) {
        const defaults = {
            labelKey: 'LBL_YES',
            klass: 'btn btn-sm p-0 m-0 btn-link border-0 line-height-initial',
            debounceClick: true,
        };
        const button = { ...defaults, ...(config ?? {}) };
        button.onClick = () => {
            this.triggerTemporaryLoading();
            callback();
            this.resetInlineConfirmation();
        };
        return button;
    }
    resetInlineConfirmation() {
        this.inlineConfirmationEnabled = false;
        this.confirmationDynamicLabel = '';
        this.confirmationLabel = '';
        this.inlineConfirmButton = null;
        this.inlineCancelButton = null;
    }
    static ɵfac = function ActionGroupMenuComponent_Factory(t) { return new (t || ActionGroupMenuComponent)(i0.ɵɵdirectiveInject(i1.LanguageStore), i0.ɵɵdirectiveInject(i2.ScreenSizeObserverService), i0.ɵɵdirectiveInject(i3.SystemConfigStore)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ActionGroupMenuComponent, selectors: [["scrm-action-group-menu"]], inputs: { klass: "klass", buttonClass: "buttonClass", buttonGroupClass: "buttonGroupClass", actionContext: "actionContext", config: "config", actionLimitConfig: "actionLimitConfig" }, decls: 2, vars: 3, consts: [[4, "ngIf"], [3, "config$", "klass", 4, "ngIf"], [3, "config$", "klass"], [1, "d-flex", "align-items-start", "justify-content-end", "inline-confirmation"], ["class", "pl-1 inline-confirmation-label", 4, "ngIf"], ["class", "pl-1 inline-confirmation-button", 4, "ngIf"], [1, "pl-1", "inline-confirmation-label"], [3, "labelKey"], [3, "labelKey", "module", "fields"], [1, "pl-1", "inline-confirmation-button"], [3, "config"], ["klass", "inline-spinner-md"]], template: function ActionGroupMenuComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ActionGroupMenuComponent_ng_container_0_Template, 5, 6, "ng-container", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.vm$));
        } }, dependencies: [i4.NgIf, i5.ButtonComponent, i6.ButtonGroupComponent, i7.LabelComponent, i8.DynamicLabelComponent, i9.InlineLoadingSpinnerComponent, i4.AsyncPipe], encapsulation: 2 });
}
export { ActionGroupMenuComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ActionGroupMenuComponent, [{
        type: Component,
        args: [{ selector: 'scrm-action-group-menu', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"(vm$ | async) as vm\">\n    <div class=\"{{klass}} float-right action-group-menu\">\n        <ng-container *ngIf=\"!inlineConfirmationEnabled && !loading\">\n            <scrm-button-group *ngIf=\"config$\" [config$]=\"config$\" [klass]=\"buttonGroupClass\"></scrm-button-group>\n        </ng-container>\n        <ng-container *ngIf=\"inlineConfirmationEnabled && !loading\">\n            <div class=\"d-flex align-items-start justify-content-end inline-confirmation\">\n                <div *ngIf=\"confirmationLabel\" class=\"pl-1 inline-confirmation-label\">\n                    <scrm-label [labelKey]=\"confirmationLabel\"></scrm-label>\n                </div>\n                <div *ngIf=\"confirmationDynamicLabel && !confirmationLabel\" class=\"pl-1 inline-confirmation-label\">\n                    <scrm-dynamic-label [labelKey]=\"confirmationDynamicLabel\"\n                                        [module]=\"actionContext?.module ?? ''\"\n                                        [fields]=\"actionContext?.record?.fields ?? {}\"\n                    >\n                    </scrm-dynamic-label>\n                </div>\n                <div *ngIf=\"inlineCancelButton\" class=\"pl-1 inline-confirmation-button\">\n                    <scrm-button [config]=\"inlineCancelButton\"></scrm-button>\n                </div>\n                <div *ngIf=\"inlineConfirmButton\" class=\"pl-1 inline-confirmation-button\">\n                    <scrm-button [config]=\"inlineConfirmButton\"></scrm-button>\n                </div>\n            </div>\n        </ng-container>\n        <ng-container *ngIf=\"loading\">\n            <scrm-inline-loading-spinner klass=\"inline-spinner-md\"></scrm-inline-loading-spinner>\n        </ng-container>\n    </div>\n</ng-container>\n" }]
    }], function () { return [{ type: i1.LanguageStore }, { type: i2.ScreenSizeObserverService }, { type: i3.SystemConfigStore }]; }, { klass: [{
            type: Input
        }], buttonClass: [{
            type: Input
        }], buttonGroupClass: [{
            type: Input
        }], actionContext: [{
            type: Input
        }], config: [{
            type: Input
        }], actionLimitConfig: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLWdyb3VwLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvYWN0aW9uLWdyb3VwLW1lbnUvYWN0aW9uLWdyb3VwLW1lbnUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvYWN0aW9uLWdyb3VwLW1lbnUvYWN0aW9uLWdyb3VwLW1lbnUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBMEMsTUFBTSxFQUF5QyxPQUFPLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFDdkgsT0FBTyxFQUFDLGVBQWUsRUFBRSxpQkFBaUIsRUFBYyxFQUFFLEVBQWUsTUFBTSxNQUFNLENBQUM7QUFDdEYsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRW5DLE9BQU8sRUFDSCxVQUFVLEVBRWIsTUFBTSxxRUFBcUUsQ0FBQzs7Ozs7Ozs7Ozs7O0lDSmpFLHVDQUFzRzs7O0lBQW5FLHdDQUFtQixrQ0FBQTs7O0lBRDFELDZCQUE2RDtJQUN6RCxtSUFBc0c7SUFDMUcsMEJBQWU7OztJQURTLGVBQWE7SUFBYixxQ0FBYTs7O0lBSTdCLDhCQUFzRTtJQUNsRSxnQ0FBd0Q7SUFDNUQsaUJBQU07OztJQURVLGVBQThCO0lBQTlCLG1EQUE4Qjs7OztJQUU5Qyw4QkFBbUc7SUFDL0Ysd0NBSXFCO0lBQ3pCLGlCQUFNOzs7OztJQUxrQixlQUFxQztJQUFyQywwREFBcUMsMElBQUEsc05BQUE7OztJQU03RCw4QkFBd0U7SUFDcEUsa0NBQXlEO0lBQzdELGlCQUFNOzs7SUFEVyxl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LHdCQUF3Qjt1RkFBeEIsd0JBQXdCO2NBSnBDLFNBQVM7MkJBQ0ksd0JBQXdCO3dJQUt6QixLQUFLO2tCQUFiLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLGlCQUFpQjtrQkFBekIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3Rpb24sIEFjdGlvbkNvbnRleHQsIEFjdGlvbkRhdGFTb3VyY2UsIEJ1dHRvbiwgQnV0dG9uR3JvdXBJbnRlcmZhY2UsIEJ1dHRvbkludGVyZmFjZSwgaXNGYWxzZX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBjb21iaW5lTGF0ZXN0V2l0aCwgT2JzZXJ2YWJsZSwgb2YsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtTeXN0ZW1Db25maWdTdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvc3lzdGVtLWNvbmZpZy9zeXN0ZW0tY29uZmlnLnN0b3JlJztcbmltcG9ydCB7XG4gICAgU2NyZWVuU2l6ZSxcbiAgICBTY3JlZW5TaXplT2JzZXJ2ZXJTZXJ2aWNlXG59IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VpL3NjcmVlbi1zaXplLW9ic2VydmVyL3NjcmVlbi1zaXplLW9ic2VydmVyLnNlcnZpY2UnO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlLCBMYW5ndWFnZVN0cmluZ3N9IGZyb20gJy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBBY3Rpb25Hcm91cE1lbnVWaWV3TW9kZWwge1xuICAgIGFjdGlvbnM6IEFjdGlvbltdO1xuICAgIHNjcmVlblNpemU6IFNjcmVlblNpemU7XG4gICAgbGFuZ3VhZ2VzOiBMYW5ndWFnZVN0cmluZ3M7XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1hY3Rpb24tZ3JvdXAtbWVudScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FjdGlvbi1ncm91cC1tZW51LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQWN0aW9uR3JvdXBNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIGtsYXNzID0gJyc7XG4gICAgQElucHV0KCkgYnV0dG9uQ2xhc3MgPSAnYnRuIGJ0bi1zbSc7XG4gICAgQElucHV0KCkgYnV0dG9uR3JvdXBDbGFzcyA9ICcnO1xuICAgIEBJbnB1dCgpIGFjdGlvbkNvbnRleHQ6IEFjdGlvbkNvbnRleHQ7XG4gICAgQElucHV0KCkgY29uZmlnOiBBY3Rpb25EYXRhU291cmNlO1xuICAgIEBJbnB1dCgpIGFjdGlvbkxpbWl0Q29uZmlnOiBzdHJpbmcgPSAncmVjb3Jkdmlld19hY3Rpb25zX2xpbWl0cyc7XG4gICAgY29uZmlnU3RhdGUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEJ1dHRvbkdyb3VwSW50ZXJmYWNlPih7YnV0dG9uczogW119KTtcbiAgICBjb25maWckID0gdGhpcy5jb25maWdTdGF0ZS5hc09ic2VydmFibGUoKTtcblxuICAgIHZtJDogT2JzZXJ2YWJsZTxBY3Rpb25Hcm91cE1lbnVWaWV3TW9kZWw+O1xuXG4gICAgaW5saW5lQ29uZmlybWF0aW9uRW5hYmxlZCA9IGZhbHNlO1xuICAgIGNvbmZpcm1hdGlvbkxhYmVsID0gJyc7XG4gICAgY29uZmlybWF0aW9uRHluYW1pY0xhYmVsID0gJyc7XG4gICAgaW5saW5lQ2FuY2VsQnV0dG9uOiBCdXR0b25JbnRlcmZhY2UgPSBudWxsO1xuICAgIGlubGluZUNvbmZpcm1CdXR0b246IEJ1dHRvbkludGVyZmFjZSA9IG51bGw7XG4gICAgbG9hZGluZyA9IGZhbHNlO1xuXG4gICAgcHJvdGVjdGVkIGJ1dHRvbkdyb3VwRHJvcGRvd25DbGFzcyA9ICdkcm9wZG93bi1idXR0b24tc2Vjb25kYXJ5JztcblxuICAgIHByb3RlY3RlZCBzdWJzOiBTdWJzY3JpcHRpb25bXTtcbiAgICBwcm90ZWN0ZWQgc2NyZWVuOiBTY3JlZW5TaXplID0gU2NyZWVuU2l6ZS5NZWRpdW07XG4gICAgcHJvdGVjdGVkIGRlZmF1bHRCcmVha3BvaW50ID0gMztcbiAgICBwcm90ZWN0ZWQgYnJlYWtwb2ludDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBsYW5ndWFnZXM6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBzY3JlZW5TaXplOiBTY3JlZW5TaXplT2JzZXJ2ZXJTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgc3lzdGVtQ29uZmlnU3RvcmU6IFN5c3RlbUNvbmZpZ1N0b3JlLFxuICAgICkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBhY3Rpb25zJCA9IHRoaXMuY29uZmlnPy5nZXRBY3Rpb25zPy4oKSA/PyBvZjxBY3Rpb25bXT4oW10pO1xuICAgICAgICBjb25zdCBzY3JlZW5TaXplJCA9IHRoaXMuc2NyZWVuU2l6ZT8uc2NyZWVuU2l6ZSQgPz8gb2Y8U2NyZWVuU2l6ZT4oU2NyZWVuU2l6ZS5NZWRpdW0pO1xuICAgICAgICBjb25zdCBsYW5ndWFnZXMkID0gdGhpcy5sYW5ndWFnZXM/LnZtJCA/PyBvZih7fSBhcyBMYW5ndWFnZVN0cmluZ3MpO1xuXG4gICAgICAgIHRoaXMudm0kID0gYWN0aW9ucyQucGlwZShcbiAgICAgICAgICAgIGNvbWJpbmVMYXRlc3RXaXRoKFxuICAgICAgICAgICAgICAgIHNjcmVlblNpemUkLFxuICAgICAgICAgICAgICAgIGxhbmd1YWdlcyRcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBtYXAoKFthY3Rpb25zLCBzY3JlZW5TaXplLCBsYW5ndWFnZXNdKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNjcmVlblNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JlZW4gPSBzY3JlZW5TaXplO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ1N0YXRlLm5leHQodGhpcy5nZXRCdXR0b25Hcm91cENvbmZpZyhhY3Rpb25zKSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge2FjdGlvbnMsIHNjcmVlblNpemUsIGxhbmd1YWdlc307XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGlzWFNtYWxsU2NyZWVuKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zY3JlZW4gPT09IFNjcmVlblNpemUuWFNtYWxsO1xuICAgIH1cblxuICAgIGdldEJ1dHRvbkdyb3VwQ29uZmlnKGFjdGlvbnM6IEFjdGlvbltdKTogQnV0dG9uR3JvdXBJbnRlcmZhY2Uge1xuXG4gICAgICAgIGNvbnN0IGV4cGFuZGVkID0gW107XG4gICAgICAgIGNvbnN0IGNvbGxhcHNlZCA9IFtdO1xuXG4gICAgICAgIGFjdGlvbnMuZm9yRWFjaCgoYWN0aW9uOiBBY3Rpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMuYnVpbGRCdXR0b24oYWN0aW9uKTtcblxuICAgICAgICAgICAgaWYgKGFjdGlvbi5wYXJhbXMgJiYgYWN0aW9uLnBhcmFtcy5leHBhbmRlZCkge1xuICAgICAgICAgICAgICAgIGV4cGFuZGVkLnB1c2goYnV0dG9uKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbGxhcHNlZC5wdXNoKGJ1dHRvbik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGNvbGxhcHNlQnV0dG9ucyA9IHRoaXMuY29uZmlnLmNvbGxhcHNlQnV0dG9ucyA/PyB0cnVlO1xuXG4gICAgICAgIGxldCBicmVha3BvaW50ID0gYWN0aW9ucy5sZW5ndGg7XG4gICAgICAgIGlmIChjb2xsYXBzZUJ1dHRvbnMgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQgPSB0aGlzLmdldEJyZWFrcG9pbnQoKTtcbiAgICAgICAgICAgIGlmIChleHBhbmRlZC5sZW5ndGggPCBicmVha3BvaW50KSB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludCA9IGV4cGFuZGVkLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBleHBhbmRlZC5jb25jYXQoY29sbGFwc2VkKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYnV0dG9uS2xhc3M6IFt0aGlzLmJ1dHRvbkNsYXNzXSxcbiAgICAgICAgICAgIGRyb3Bkb3duTGFiZWw6IHRoaXMubGFuZ3VhZ2VzLmdldEFwcFN0cmluZygnTEJMX0FDVElPTlMnKSB8fCAnJyxcbiAgICAgICAgICAgIGJyZWFrcG9pbnQsXG4gICAgICAgICAgICBkcm9wZG93bk9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnQ6IFsnYm90dG9tLXJpZ2h0J10sXG4gICAgICAgICAgICAgICAgd3JhcHBlcktsYXNzOiBbKHRoaXMuYnV0dG9uR3JvdXBEcm9wZG93bkNsYXNzKV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBidXR0b25zXG4gICAgICAgIH0gYXMgQnV0dG9uR3JvdXBJbnRlcmZhY2U7XG4gICAgfVxuXG4gICAgZ2V0QnJlYWtwb2ludCgpOiBudW1iZXIge1xuXG4gICAgICAgIGNvbnN0IGJyZWFrcG9pbnRNYXAgPSB0aGlzLnN5c3RlbUNvbmZpZ1N0b3JlLmdldENvbmZpZ1ZhbHVlKHRoaXMuYWN0aW9uTGltaXRDb25maWcpO1xuXG4gICAgICAgIGlmICh0aGlzLnNjcmVlbiAmJiBicmVha3BvaW50TWFwICYmIGJyZWFrcG9pbnRNYXBbdGhpcy5zY3JlZW5dKSB7XG4gICAgICAgICAgICB0aGlzLmJyZWFrcG9pbnQgPSBicmVha3BvaW50TWFwW3RoaXMuc2NyZWVuXTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJyZWFrcG9pbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5icmVha3BvaW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5icmVha3BvaW50O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdEJyZWFrcG9pbnQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGJ1aWxkQnV0dG9uKGFjdGlvbjogQWN0aW9uKTogQnV0dG9uSW50ZXJmYWNlIHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0ge1xuICAgICAgICAgICAgbGFiZWw6IGFjdGlvbi5sYWJlbCB8fCAnJyxcbiAgICAgICAgICAgIGxhYmVsTW9kdWxlOiB0aGlzPy5hY3Rpb25Db250ZXh0Py5tb2R1bGUgPz8gJycsXG4gICAgICAgICAgICBsYWJlbEtleTogYWN0aW9uLmxhYmVsS2V5IHx8ICcnLFxuICAgICAgICAgICAga2xhc3M6IHRoaXMuYnV0dG9uQ2xhc3MsXG4gICAgICAgICAgICB0aXRsZUtleTogYWN0aW9uLnRpdGxlS2V5IHx8ICcnLFxuICAgICAgICAgICAgb25DbGljazogKCk6IHZvaWQgPT4ge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgaW5saW5lQ29uZmlybWF0aW9uID0gYWN0aW9uPy5wYXJhbXM/LmlubGluZUNvbmZpcm1hdGlvbiA/PyBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoaW5saW5lQ29uZmlybWF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlclRlbXBvcmFyeUxvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5ydW5BY3Rpb24oYWN0aW9uLCB0aGlzLmFjdGlvbkNvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdElubGluZUNvbmZpcm1hdGlvbihhY3Rpb24sIGNhbGxiYWNrKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcucnVuQWN0aW9uKGFjdGlvbiwgdGhpcy5hY3Rpb25Db250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBhcyBCdXR0b25JbnRlcmZhY2U7XG5cbiAgICAgICAgaWYgKCFidXR0b24ubGFiZWwpe1xuICAgICAgICAgICAgYnV0dG9uLmxhYmVsS2V5ID0gYWN0aW9uLmxhYmVsS2V5ID8/ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGVib3VuY2VDbGljayA9IGFjdGlvbj8ucGFyYW1zPy5kZWJvdW5jZUNsaWNrID8/IG51bGw7XG5cbiAgICAgICAgYnV0dG9uLmRlYm91bmNlQ2xpY2sgPSB0cnVlO1xuXG4gICAgICAgIGlmIChpc0ZhbHNlKGRlYm91bmNlQ2xpY2spKSB7XG4gICAgICAgICAgICBidXR0b24uZGVib3VuY2VDbGljayA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFjdGlvbi5pY29uKSB7XG4gICAgICAgICAgICBidXR0b24uaWNvbiA9IGFjdGlvbi5pY29uO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFjdGlvbi5zdGF0dXMpIHtcbiAgICAgICAgICAgIEJ1dHRvbi5hcHBlbmRDbGFzc2VzKGJ1dHRvbiwgW2FjdGlvbi5zdGF0dXNdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhY3Rpb24ua2xhc3MpIHtcbiAgICAgICAgICAgIEJ1dHRvbi5hcHBlbmRDbGFzc2VzKGJ1dHRvbiwgYWN0aW9uLmtsYXNzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBidXR0b247XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHRyaWdnZXJUZW1wb3JhcnlMb2FkaW5nKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBjb25zdCBkZWxheSA9IHBhcnNlSW50KHRoaXMuc3lzdGVtQ29uZmlnU3RvcmUuZ2V0VWkoJ2lubGluZV9jb25maXJtYXRpb25fbG9hZGluZ19kZWxheScpKSA/PyAyMDA7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0sIGRlbGF5KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdElubGluZUNvbmZpcm1hdGlvbihhY3Rpb246IEFjdGlvbiwgY2FsbGJhY2s6ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY2FuY2VsQ29uZmlnID0gYWN0aW9uPy5wYXJhbXM/LmlubGluZUNvbmZpcm1hdGlvbkJ1dHRvbnM/LmNhbmNlbCA/PyB7fTtcbiAgICAgICAgY29uc3QgY29uZmlybUNvbmZpZyA9IGFjdGlvbj8ucGFyYW1zPy5pbmxpbmVDb25maXJtYXRpb25CdXR0b25zPy5jb25maXJtID8/IHt9O1xuICAgICAgICB0aGlzLmNvbmZpcm1hdGlvbkxhYmVsID0gYWN0aW9uPy5wYXJhbXM/LmNvbmZpcm1hdGlvbkxhYmVsID8/ICcnO1xuICAgICAgICB0aGlzLmNvbmZpcm1hdGlvbkR5bmFtaWNMYWJlbCA9IGFjdGlvbj8ucGFyYW1zPy5jb25maXJtYXRpb25EeW5hbWljTGFiZWwgPz8gJyc7XG5cbiAgICAgICAgdGhpcy5pbmxpbmVDYW5jZWxCdXR0b24gPSB0aGlzLmJ1aWxkSW5saW5lQ2FuY2VsQnV0dG9uKGNhbmNlbENvbmZpZylcbiAgICAgICAgdGhpcy5pbmxpbmVDb25maXJtQnV0dG9uID0gdGhpcy5idWlsZElubGluZUNvbmZpcm1CdXR0b24oY29uZmlybUNvbmZpZywgY2FsbGJhY2spXG4gICAgICAgIHRoaXMuaW5saW5lQ29uZmlybWF0aW9uRW5hYmxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGJ1aWxkSW5saW5lQ2FuY2VsQnV0dG9uKGNvbmZpZzogQnV0dG9uSW50ZXJmYWNlKTogQnV0dG9uSW50ZXJmYWNlIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBsYWJlbEtleTogJ0xCTF9OTycsXG4gICAgICAgICAgICBrbGFzczogJ2J0biBidG4tc20gcC0wIG0tMCBidG4tbGluayBib3JkZXItMCBsaW5lLWhlaWdodC1pbml0aWFsJyxcbiAgICAgICAgICAgIGRlYm91bmNlQ2xpY2s6IHRydWUsXG4gICAgICAgIH0gYXMgQnV0dG9uSW50ZXJmYWNlO1xuICAgICAgICBjb25zdCBidXR0b24gPSB7Li4uZGVmYXVsdHMsIC4uLihjb25maWcgPz8ge30pfTtcblxuICAgICAgICBidXR0b24ub25DbGljayA9ICgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlclRlbXBvcmFyeUxvYWRpbmcoKTtcbiAgICAgICAgICAgIHRoaXMucmVzZXRJbmxpbmVDb25maXJtYXRpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBidXR0b247XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGJ1aWxkSW5saW5lQ29uZmlybUJ1dHRvbihjb25maWc6IEJ1dHRvbkludGVyZmFjZSwgY2FsbGJhY2s6IEZ1bmN0aW9uKTogQnV0dG9uSW50ZXJmYWNlIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICBsYWJlbEtleTogJ0xCTF9ZRVMnLFxuICAgICAgICAgICAga2xhc3M6ICdidG4gYnRuLXNtIHAtMCBtLTAgYnRuLWxpbmsgYm9yZGVyLTAgbGluZS1oZWlnaHQtaW5pdGlhbCcsXG4gICAgICAgICAgICBkZWJvdW5jZUNsaWNrOiB0cnVlLFxuICAgICAgICB9IGFzIEJ1dHRvbkludGVyZmFjZTtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gey4uLmRlZmF1bHRzLCAuLi4oY29uZmlnID8/IHt9KX07XG5cbiAgICAgICAgYnV0dG9uLm9uQ2xpY2sgPSAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJUZW1wb3JhcnlMb2FkaW5nKCk7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgdGhpcy5yZXNldElubGluZUNvbmZpcm1hdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVzZXRJbmxpbmVDb25maXJtYXRpb24oKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW5saW5lQ29uZmlybWF0aW9uRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbmZpcm1hdGlvbkR5bmFtaWNMYWJlbCA9ICcnO1xuICAgICAgICB0aGlzLmNvbmZpcm1hdGlvbkxhYmVsID0gJyc7XG4gICAgICAgIHRoaXMuaW5saW5lQ29uZmlybUJ1dHRvbiA9IG51bGw7XG4gICAgICAgIHRoaXMuaW5saW5lQ2FuY2VsQnV0dG9uID0gbnVsbDtcbiAgICB9XG59XG4iLCI8ISAtLVxuLyoqXG4qIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4qIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4qIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4qXG4qIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4qIGRldGFpbHMuXG4qXG4qIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy5cbipcbiogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4qL1xuLS0+XG48bmctY29udGFpbmVyICpuZ0lmPVwiKHZtJCB8IGFzeW5jKSBhcyB2bVwiPlxuICAgIDxkaXYgY2xhc3M9XCJ7e2tsYXNzfX0gZmxvYXQtcmlnaHQgYWN0aW9uLWdyb3VwLW1lbnVcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpbmxpbmVDb25maXJtYXRpb25FbmFibGVkICYmICFsb2FkaW5nXCI+XG4gICAgICAgICAgICA8c2NybS1idXR0b24tZ3JvdXAgKm5nSWY9XCJjb25maWckXCIgW2NvbmZpZyRdPVwiY29uZmlnJFwiIFtrbGFzc109XCJidXR0b25Hcm91cENsYXNzXCI+PC9zY3JtLWJ1dHRvbi1ncm91cD5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpbmxpbmVDb25maXJtYXRpb25FbmFibGVkICYmICFsb2FkaW5nXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLXN0YXJ0IGp1c3RpZnktY29udGVudC1lbmQgaW5saW5lLWNvbmZpcm1hdGlvblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJjb25maXJtYXRpb25MYWJlbFwiIGNsYXNzPVwicGwtMSBpbmxpbmUtY29uZmlybWF0aW9uLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzY3JtLWxhYmVsIFtsYWJlbEtleV09XCJjb25maXJtYXRpb25MYWJlbFwiPjwvc2NybS1sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY29uZmlybWF0aW9uRHluYW1pY0xhYmVsICYmICFjb25maXJtYXRpb25MYWJlbFwiIGNsYXNzPVwicGwtMSBpbmxpbmUtY29uZmlybWF0aW9uLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzY3JtLWR5bmFtaWMtbGFiZWwgW2xhYmVsS2V5XT1cImNvbmZpcm1hdGlvbkR5bmFtaWNMYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21vZHVsZV09XCJhY3Rpb25Db250ZXh0Py5tb2R1bGUgPz8gJydcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmaWVsZHNdPVwiYWN0aW9uQ29udGV4dD8ucmVjb3JkPy5maWVsZHMgPz8ge31cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDwvc2NybS1keW5hbWljLWxhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpbmxpbmVDYW5jZWxCdXR0b25cIiBjbGFzcz1cInBsLTEgaW5saW5lLWNvbmZpcm1hdGlvbi1idXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNjcm0tYnV0dG9uIFtjb25maWddPVwiaW5saW5lQ2FuY2VsQnV0dG9uXCI+PC9zY3JtLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaW5saW5lQ29uZmlybUJ1dHRvblwiIGNsYXNzPVwicGwtMSBpbmxpbmUtY29uZmlybWF0aW9uLWJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8c2NybS1idXR0b24gW2NvbmZpZ109XCJpbmxpbmVDb25maXJtQnV0dG9uXCI+PC9zY3JtLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImxvYWRpbmdcIj5cbiAgICAgICAgICAgIDxzY3JtLWlubGluZS1sb2FkaW5nLXNwaW5uZXIga2xhc3M9XCJpbmxpbmUtc3Bpbm5lci1tZFwiPjwvc2NybS1pbmxpbmUtbG9hZGluZy1zcGlubmVyPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbjwvbmctY29udGFpbmVyPlxuIl19