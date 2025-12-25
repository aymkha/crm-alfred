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
        const collapseButtons = this.config?.collapseButtons ?? true;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLWdyb3VwLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvYWN0aW9uLWdyb3VwLW1lbnUvYWN0aW9uLWdyb3VwLW1lbnUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvYWN0aW9uLWdyb3VwLW1lbnUvYWN0aW9uLWdyb3VwLW1lbnUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBMEMsTUFBTSxFQUF5QyxPQUFPLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFDdkgsT0FBTyxFQUFDLGVBQWUsRUFBRSxpQkFBaUIsRUFBYyxFQUFFLEVBQWUsTUFBTSxNQUFNLENBQUM7QUFDdEYsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRW5DLE9BQU8sRUFDSCxVQUFVLEVBRWIsTUFBTSxxRUFBcUUsQ0FBQzs7Ozs7Ozs7Ozs7O0lDSmpFLHVDQUFzRzs7O0lBQW5FLHdDQUFtQixrQ0FBQTs7O0lBRDFELDZCQUE2RDtJQUN6RCxtSUFBc0c7SUFDMUcsMEJBQWU7OztJQURTLGVBQWE7SUFBYixxQ0FBYTs7O0lBSTdCLDhCQUFzRTtJQUNsRSxnQ0FBd0Q7SUFDNUQsaUJBQU07OztJQURVLGVBQThCO0lBQTlCLG1EQUE4Qjs7OztJQUU5Qyw4QkFBbUc7SUFDL0Ysd0NBSXFCO0lBQ3pCLGlCQUFNOzs7OztJQUxrQixlQUFxQztJQUFyQywwREFBcUMsMElBQUEsc05BQUE7OztJQU03RCw4QkFBd0U7SUFDcEUsa0NBQXlEO0lBQzdELGlCQUFNOzs7SUFEVyxl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LHdCQUF3Qjt1RkFBeEIsd0JBQXdCO2NBSnBDLFNBQVM7MkJBQ0ksd0JBQXdCO3dJQUt6QixLQUFLO2tCQUFiLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLGlCQUFpQjtrQkFBekIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3Rpb24sIEFjdGlvbkNvbnRleHQsIEFjdGlvbkRhdGFTb3VyY2UsIEJ1dHRvbiwgQnV0dG9uR3JvdXBJbnRlcmZhY2UsIEJ1dHRvbkludGVyZmFjZSwgaXNGYWxzZX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBjb21iaW5lTGF0ZXN0V2l0aCwgT2JzZXJ2YWJsZSwgb2YsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtTeXN0ZW1Db25maWdTdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvc3lzdGVtLWNvbmZpZy9zeXN0ZW0tY29uZmlnLnN0b3JlJztcbmltcG9ydCB7XG4gICAgU2NyZWVuU2l6ZSxcbiAgICBTY3JlZW5TaXplT2JzZXJ2ZXJTZXJ2aWNlXG59IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VpL3NjcmVlbi1zaXplLW9ic2VydmVyL3NjcmVlbi1zaXplLW9ic2VydmVyLnNlcnZpY2UnO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlLCBMYW5ndWFnZVN0cmluZ3N9IGZyb20gJy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBBY3Rpb25Hcm91cE1lbnVWaWV3TW9kZWwge1xuICAgIGFjdGlvbnM6IEFjdGlvbltdO1xuICAgIHNjcmVlblNpemU6IFNjcmVlblNpemU7XG4gICAgbGFuZ3VhZ2VzOiBMYW5ndWFnZVN0cmluZ3M7XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1hY3Rpb24tZ3JvdXAtbWVudScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FjdGlvbi1ncm91cC1tZW51LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQWN0aW9uR3JvdXBNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIGtsYXNzID0gJyc7XG4gICAgQElucHV0KCkgYnV0dG9uQ2xhc3MgPSAnYnRuIGJ0bi1zbSc7XG4gICAgQElucHV0KCkgYnV0dG9uR3JvdXBDbGFzcyA9ICcnO1xuICAgIEBJbnB1dCgpIGFjdGlvbkNvbnRleHQ6IEFjdGlvbkNvbnRleHQ7XG4gICAgQElucHV0KCkgY29uZmlnOiBBY3Rpb25EYXRhU291cmNlO1xuICAgIEBJbnB1dCgpIGFjdGlvbkxpbWl0Q29uZmlnOiBzdHJpbmcgPSAncmVjb3Jkdmlld19hY3Rpb25zX2xpbWl0cyc7XG4gICAgY29uZmlnU3RhdGUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEJ1dHRvbkdyb3VwSW50ZXJmYWNlPih7YnV0dG9uczogW119KTtcbiAgICBjb25maWckID0gdGhpcy5jb25maWdTdGF0ZS5hc09ic2VydmFibGUoKTtcblxuICAgIHZtJDogT2JzZXJ2YWJsZTxBY3Rpb25Hcm91cE1lbnVWaWV3TW9kZWw+O1xuXG4gICAgaW5saW5lQ29uZmlybWF0aW9uRW5hYmxlZCA9IGZhbHNlO1xuICAgIGNvbmZpcm1hdGlvbkxhYmVsID0gJyc7XG4gICAgY29uZmlybWF0aW9uRHluYW1pY0xhYmVsID0gJyc7XG4gICAgaW5saW5lQ2FuY2VsQnV0dG9uOiBCdXR0b25JbnRlcmZhY2UgPSBudWxsO1xuICAgIGlubGluZUNvbmZpcm1CdXR0b246IEJ1dHRvbkludGVyZmFjZSA9IG51bGw7XG4gICAgbG9hZGluZyA9IGZhbHNlO1xuXG4gICAgcHJvdGVjdGVkIGJ1dHRvbkdyb3VwRHJvcGRvd25DbGFzcyA9ICdkcm9wZG93bi1idXR0b24tc2Vjb25kYXJ5JztcblxuICAgIHByb3RlY3RlZCBzdWJzOiBTdWJzY3JpcHRpb25bXTtcbiAgICBwcm90ZWN0ZWQgc2NyZWVuOiBTY3JlZW5TaXplID0gU2NyZWVuU2l6ZS5NZWRpdW07XG4gICAgcHJvdGVjdGVkIGRlZmF1bHRCcmVha3BvaW50ID0gMztcbiAgICBwcm90ZWN0ZWQgYnJlYWtwb2ludDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBsYW5ndWFnZXM6IExhbmd1YWdlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBzY3JlZW5TaXplOiBTY3JlZW5TaXplT2JzZXJ2ZXJTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgc3lzdGVtQ29uZmlnU3RvcmU6IFN5c3RlbUNvbmZpZ1N0b3JlLFxuICAgICkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBhY3Rpb25zJCA9IHRoaXMuY29uZmlnPy5nZXRBY3Rpb25zPy4oKSA/PyBvZjxBY3Rpb25bXT4oW10pO1xuICAgICAgICBjb25zdCBzY3JlZW5TaXplJCA9IHRoaXMuc2NyZWVuU2l6ZT8uc2NyZWVuU2l6ZSQgPz8gb2Y8U2NyZWVuU2l6ZT4oU2NyZWVuU2l6ZS5NZWRpdW0pO1xuICAgICAgICBjb25zdCBsYW5ndWFnZXMkID0gdGhpcy5sYW5ndWFnZXM/LnZtJCA/PyBvZih7fSBhcyBMYW5ndWFnZVN0cmluZ3MpO1xuXG4gICAgICAgIHRoaXMudm0kID0gYWN0aW9ucyQucGlwZShcbiAgICAgICAgICAgIGNvbWJpbmVMYXRlc3RXaXRoKFxuICAgICAgICAgICAgICAgIHNjcmVlblNpemUkLFxuICAgICAgICAgICAgICAgIGxhbmd1YWdlcyRcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBtYXAoKFthY3Rpb25zLCBzY3JlZW5TaXplLCBsYW5ndWFnZXNdKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNjcmVlblNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JlZW4gPSBzY3JlZW5TaXplO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ1N0YXRlLm5leHQodGhpcy5nZXRCdXR0b25Hcm91cENvbmZpZyhhY3Rpb25zKSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge2FjdGlvbnMsIHNjcmVlblNpemUsIGxhbmd1YWdlc307XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGlzWFNtYWxsU2NyZWVuKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zY3JlZW4gPT09IFNjcmVlblNpemUuWFNtYWxsO1xuICAgIH1cblxuICAgIGdldEJ1dHRvbkdyb3VwQ29uZmlnKGFjdGlvbnM6IEFjdGlvbltdKTogQnV0dG9uR3JvdXBJbnRlcmZhY2Uge1xuXG4gICAgICAgIGNvbnN0IGV4cGFuZGVkID0gW107XG4gICAgICAgIGNvbnN0IGNvbGxhcHNlZCA9IFtdO1xuXG4gICAgICAgIGFjdGlvbnMuZm9yRWFjaCgoYWN0aW9uOiBBY3Rpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMuYnVpbGRCdXR0b24oYWN0aW9uKTtcblxuICAgICAgICAgICAgaWYgKGFjdGlvbi5wYXJhbXMgJiYgYWN0aW9uLnBhcmFtcy5leHBhbmRlZCkge1xuICAgICAgICAgICAgICAgIGV4cGFuZGVkLnB1c2goYnV0dG9uKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbGxhcHNlZC5wdXNoKGJ1dHRvbik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGNvbGxhcHNlQnV0dG9ucyA9IHRoaXMuY29uZmlnPy5jb2xsYXBzZUJ1dHRvbnMgPz8gdHJ1ZTtcblxuICAgICAgICBsZXQgYnJlYWtwb2ludCA9IGFjdGlvbnMubGVuZ3RoO1xuICAgICAgICBpZiAoY29sbGFwc2VCdXR0b25zID09PSB0cnVlKSB7XG4gICAgICAgICAgICBicmVha3BvaW50ID0gdGhpcy5nZXRCcmVha3BvaW50KCk7XG4gICAgICAgICAgICBpZiAoZXhwYW5kZWQubGVuZ3RoIDwgYnJlYWtwb2ludCkge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQgPSBleHBhbmRlZC5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBidXR0b25zID0gZXhwYW5kZWQuY29uY2F0KGNvbGxhcHNlZCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJ1dHRvbktsYXNzOiBbdGhpcy5idXR0b25DbGFzc10sXG4gICAgICAgICAgICBkcm9wZG93bkxhYmVsOiB0aGlzLmxhbmd1YWdlcy5nZXRBcHBTdHJpbmcoJ0xCTF9BQ1RJT05TJykgfHwgJycsXG4gICAgICAgICAgICBicmVha3BvaW50LFxuICAgICAgICAgICAgZHJvcGRvd25PcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgcGxhY2VtZW50OiBbJ2JvdHRvbS1yaWdodCddLFxuICAgICAgICAgICAgICAgIHdyYXBwZXJLbGFzczogWyh0aGlzLmJ1dHRvbkdyb3VwRHJvcGRvd25DbGFzcyldXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnV0dG9uc1xuICAgICAgICB9IGFzIEJ1dHRvbkdyb3VwSW50ZXJmYWNlO1xuICAgIH1cblxuICAgIGdldEJyZWFrcG9pbnQoKTogbnVtYmVyIHtcblxuICAgICAgICBjb25zdCBicmVha3BvaW50TWFwID0gdGhpcy5zeXN0ZW1Db25maWdTdG9yZS5nZXRDb25maWdWYWx1ZSh0aGlzLmFjdGlvbkxpbWl0Q29uZmlnKTtcblxuICAgICAgICBpZiAodGhpcy5zY3JlZW4gJiYgYnJlYWtwb2ludE1hcCAmJiBicmVha3BvaW50TWFwW3RoaXMuc2NyZWVuXSkge1xuICAgICAgICAgICAgdGhpcy5icmVha3BvaW50ID0gYnJlYWtwb2ludE1hcFt0aGlzLnNjcmVlbl07XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5icmVha3BvaW50O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYnJlYWtwb2ludCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnJlYWtwb2ludDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRCcmVha3BvaW50O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBidWlsZEJ1dHRvbihhY3Rpb246IEFjdGlvbik6IEJ1dHRvbkludGVyZmFjZSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IHtcbiAgICAgICAgICAgIGxhYmVsOiBhY3Rpb24ubGFiZWwgfHwgJycsXG4gICAgICAgICAgICBsYWJlbE1vZHVsZTogdGhpcz8uYWN0aW9uQ29udGV4dD8ubW9kdWxlID8/ICcnLFxuICAgICAgICAgICAgbGFiZWxLZXk6IGFjdGlvbi5sYWJlbEtleSB8fCAnJyxcbiAgICAgICAgICAgIGtsYXNzOiB0aGlzLmJ1dHRvbkNsYXNzLFxuICAgICAgICAgICAgdGl0bGVLZXk6IGFjdGlvbi50aXRsZUtleSB8fCAnJyxcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpOiB2b2lkID0+IHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGlubGluZUNvbmZpcm1hdGlvbiA9IGFjdGlvbj8ucGFyYW1zPy5pbmxpbmVDb25maXJtYXRpb24gPz8gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKGlubGluZUNvbmZpcm1hdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXJUZW1wb3JhcnlMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWcucnVuQWN0aW9uKGFjdGlvbiwgdGhpcy5hY3Rpb25Db250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRJbmxpbmVDb25maXJtYXRpb24oYWN0aW9uLCBjYWxsYmFjayk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLnJ1bkFjdGlvbihhY3Rpb24sIHRoaXMuYWN0aW9uQ29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gYXMgQnV0dG9uSW50ZXJmYWNlO1xuXG4gICAgICAgIGlmICghYnV0dG9uLmxhYmVsKXtcbiAgICAgICAgICAgIGJ1dHRvbi5sYWJlbEtleSA9IGFjdGlvbi5sYWJlbEtleSA/PyAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRlYm91bmNlQ2xpY2sgPSBhY3Rpb24/LnBhcmFtcz8uZGVib3VuY2VDbGljayA/PyBudWxsO1xuXG4gICAgICAgIGJ1dHRvbi5kZWJvdW5jZUNsaWNrID0gdHJ1ZTtcblxuICAgICAgICBpZiAoaXNGYWxzZShkZWJvdW5jZUNsaWNrKSkge1xuICAgICAgICAgICAgYnV0dG9uLmRlYm91bmNlQ2xpY2sgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhY3Rpb24uaWNvbikge1xuICAgICAgICAgICAgYnV0dG9uLmljb24gPSBhY3Rpb24uaWNvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhY3Rpb24uc3RhdHVzKSB7XG4gICAgICAgICAgICBCdXR0b24uYXBwZW5kQ2xhc3NlcyhidXR0b24sIFthY3Rpb24uc3RhdHVzXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWN0aW9uLmtsYXNzKSB7XG4gICAgICAgICAgICBCdXR0b24uYXBwZW5kQ2xhc3NlcyhidXR0b24sIGFjdGlvbi5rbGFzcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB0cmlnZ2VyVGVtcG9yYXJ5TG9hZGluZygpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgZGVsYXkgPSBwYXJzZUludCh0aGlzLnN5c3RlbUNvbmZpZ1N0b3JlLmdldFVpKCdpbmxpbmVfY29uZmlybWF0aW9uX2xvYWRpbmdfZGVsYXknKSkgPz8gMjAwO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9LCBkZWxheSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluaXRJbmxpbmVDb25maXJtYXRpb24oYWN0aW9uOiBBY3Rpb24sIGNhbGxiYWNrOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNhbmNlbENvbmZpZyA9IGFjdGlvbj8ucGFyYW1zPy5pbmxpbmVDb25maXJtYXRpb25CdXR0b25zPy5jYW5jZWwgPz8ge307XG4gICAgICAgIGNvbnN0IGNvbmZpcm1Db25maWcgPSBhY3Rpb24/LnBhcmFtcz8uaW5saW5lQ29uZmlybWF0aW9uQnV0dG9ucz8uY29uZmlybSA/PyB7fTtcbiAgICAgICAgdGhpcy5jb25maXJtYXRpb25MYWJlbCA9IGFjdGlvbj8ucGFyYW1zPy5jb25maXJtYXRpb25MYWJlbCA/PyAnJztcbiAgICAgICAgdGhpcy5jb25maXJtYXRpb25EeW5hbWljTGFiZWwgPSBhY3Rpb24/LnBhcmFtcz8uY29uZmlybWF0aW9uRHluYW1pY0xhYmVsID8/ICcnO1xuXG4gICAgICAgIHRoaXMuaW5saW5lQ2FuY2VsQnV0dG9uID0gdGhpcy5idWlsZElubGluZUNhbmNlbEJ1dHRvbihjYW5jZWxDb25maWcpXG4gICAgICAgIHRoaXMuaW5saW5lQ29uZmlybUJ1dHRvbiA9IHRoaXMuYnVpbGRJbmxpbmVDb25maXJtQnV0dG9uKGNvbmZpcm1Db25maWcsIGNhbGxiYWNrKVxuICAgICAgICB0aGlzLmlubGluZUNvbmZpcm1hdGlvbkVuYWJsZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBidWlsZElubGluZUNhbmNlbEJ1dHRvbihjb25maWc6IEJ1dHRvbkludGVyZmFjZSk6IEJ1dHRvbkludGVyZmFjZSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgbGFiZWxLZXk6ICdMQkxfTk8nLFxuICAgICAgICAgICAga2xhc3M6ICdidG4gYnRuLXNtIHAtMCBtLTAgYnRuLWxpbmsgYm9yZGVyLTAgbGluZS1oZWlnaHQtaW5pdGlhbCcsXG4gICAgICAgICAgICBkZWJvdW5jZUNsaWNrOiB0cnVlLFxuICAgICAgICB9IGFzIEJ1dHRvbkludGVyZmFjZTtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gey4uLmRlZmF1bHRzLCAuLi4oY29uZmlnID8/IHt9KX07XG5cbiAgICAgICAgYnV0dG9uLm9uQ2xpY2sgPSAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJUZW1wb3JhcnlMb2FkaW5nKCk7XG4gICAgICAgICAgICB0aGlzLnJlc2V0SW5saW5lQ29uZmlybWF0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBidWlsZElubGluZUNvbmZpcm1CdXR0b24oY29uZmlnOiBCdXR0b25JbnRlcmZhY2UsIGNhbGxiYWNrOiBGdW5jdGlvbik6IEJ1dHRvbkludGVyZmFjZSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgbGFiZWxLZXk6ICdMQkxfWUVTJyxcbiAgICAgICAgICAgIGtsYXNzOiAnYnRuIGJ0bi1zbSBwLTAgbS0wIGJ0bi1saW5rIGJvcmRlci0wIGxpbmUtaGVpZ2h0LWluaXRpYWwnLFxuICAgICAgICAgICAgZGVib3VuY2VDbGljazogdHJ1ZSxcbiAgICAgICAgfSBhcyBCdXR0b25JbnRlcmZhY2U7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IHsuLi5kZWZhdWx0cywgLi4uKGNvbmZpZyA/PyB7fSl9O1xuXG4gICAgICAgIGJ1dHRvbi5vbkNsaWNrID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyVGVtcG9yYXJ5TG9hZGluZygpO1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIHRoaXMucmVzZXRJbmxpbmVDb25maXJtYXRpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBidXR0b247XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlc2V0SW5saW5lQ29uZmlybWF0aW9uKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmlubGluZUNvbmZpcm1hdGlvbkVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb25maXJtYXRpb25EeW5hbWljTGFiZWwgPSAnJztcbiAgICAgICAgdGhpcy5jb25maXJtYXRpb25MYWJlbCA9ICcnO1xuICAgICAgICB0aGlzLmlubGluZUNvbmZpcm1CdXR0b24gPSBudWxsO1xuICAgICAgICB0aGlzLmlubGluZUNhbmNlbEJ1dHRvbiA9IG51bGw7XG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIih2bSQgfCBhc3luYykgYXMgdm1cIj5cbiAgICA8ZGl2IGNsYXNzPVwie3trbGFzc319IGZsb2F0LXJpZ2h0IGFjdGlvbi1ncm91cC1tZW51XCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaW5saW5lQ29uZmlybWF0aW9uRW5hYmxlZCAmJiAhbG9hZGluZ1wiPlxuICAgICAgICAgICAgPHNjcm0tYnV0dG9uLWdyb3VwICpuZ0lmPVwiY29uZmlnJFwiIFtjb25maWckXT1cImNvbmZpZyRcIiBba2xhc3NdPVwiYnV0dG9uR3JvdXBDbGFzc1wiPjwvc2NybS1idXR0b24tZ3JvdXA+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaW5saW5lQ29uZmlybWF0aW9uRW5hYmxlZCAmJiAhbG9hZGluZ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1zdGFydCBqdXN0aWZ5LWNvbnRlbnQtZW5kIGlubGluZS1jb25maXJtYXRpb25cIj5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY29uZmlybWF0aW9uTGFiZWxcIiBjbGFzcz1cInBsLTEgaW5saW5lLWNvbmZpcm1hdGlvbi1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICA8c2NybS1sYWJlbCBbbGFiZWxLZXldPVwiY29uZmlybWF0aW9uTGFiZWxcIj48L3Njcm0tbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImNvbmZpcm1hdGlvbkR5bmFtaWNMYWJlbCAmJiAhY29uZmlybWF0aW9uTGFiZWxcIiBjbGFzcz1cInBsLTEgaW5saW5lLWNvbmZpcm1hdGlvbi1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICA8c2NybS1keW5hbWljLWxhYmVsIFtsYWJlbEtleV09XCJjb25maXJtYXRpb25EeW5hbWljTGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttb2R1bGVdPVwiYWN0aW9uQ29udGV4dD8ubW9kdWxlID8/ICcnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZmllbGRzXT1cImFjdGlvbkNvbnRleHQ/LnJlY29yZD8uZmllbGRzID8/IHt9XCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8L3Njcm0tZHluYW1pYy1sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaW5saW5lQ2FuY2VsQnV0dG9uXCIgY2xhc3M9XCJwbC0xIGlubGluZS1jb25maXJtYXRpb24tYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzY3JtLWJ1dHRvbiBbY29uZmlnXT1cImlubGluZUNhbmNlbEJ1dHRvblwiPjwvc2NybS1idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImlubGluZUNvbmZpcm1CdXR0b25cIiBjbGFzcz1cInBsLTEgaW5saW5lLWNvbmZpcm1hdGlvbi1idXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNjcm0tYnV0dG9uIFtjb25maWddPVwiaW5saW5lQ29uZmlybUJ1dHRvblwiPjwvc2NybS1idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJsb2FkaW5nXCI+XG4gICAgICAgICAgICA8c2NybS1pbmxpbmUtbG9hZGluZy1zcGlubmVyIGtsYXNzPVwiaW5saW5lLXNwaW5uZXItbWRcIj48L3Njcm0taW5saW5lLWxvYWRpbmctc3Bpbm5lcj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==