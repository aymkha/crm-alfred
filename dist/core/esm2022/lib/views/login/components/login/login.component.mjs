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
import { combineLatestWith, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../../../services/auth/auth.service";
import * as i3 from "../../../../services/message/message.service";
import * as i4 from "../../../../store/system-config/system-config.store";
import * as i5 from "../../../../store/language/language.store";
import * as i6 from "../../../../services/process/processes/recover-password/recover-password";
import * as i7 from "../../../../store/app-state/app-state.store";
import * as i8 from "@angular/forms";
import * as i9 from "../../../../components/logo/logo.component";
import * as i10 from "@angular/common";
import * as i11 from "../../../../components/image/image.component";
import * as i12 from "../../../../directives/button-loading/button-loading.directive";
function LoginUiComponent_div_0_div_6_option_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r7 = i0.ɵɵnextContext(3);
    let tmp_0_0;
    i0.ɵɵproperty("selected", ((tmp_0_0 = ctx_r7.language) !== null && tmp_0_0 !== undefined ? tmp_0_0 : "en_us") === item_r8)("value", item_r8);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r7.getEnabledLanguages()[item_r8], " ");
} }
function LoginUiComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 5)(2, "label", 11);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(4, "div", 12);
    i0.ɵɵelementStart(5, "div", 5)(6, "div", 13)(7, "select", 14, 15);
    i0.ɵɵlistener("change", function LoginUiComponent_div_0_div_6_Template_select_change_7_listener() { i0.ɵɵrestoreView(_r10); const _r6 = i0.ɵɵreference(8); const ctx_r9 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r9.onLanguageSelect(_r6.value)); });
    i0.ɵɵtemplate(9, LoginUiComponent_div_0_div_6_option_9_Template, 2, 3, "option", 16);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const vm_r1 = i0.ɵɵnextContext().ngIf;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(vm_r1.appStrings["LBL_LANGUAGE"]);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r3.getEnabledLanguagesKeys());
} }
function LoginUiComponent_div_0_div_8_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const vm_r1 = i0.ɵɵnextContext(2).ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", vm_r1.appStrings["ERR_MISSING_REQUIRED_FIELDS"], " ");
} }
function LoginUiComponent_div_0_div_8_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const vm_r1 = i0.ɵɵnextContext(2).ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", vm_r1.appStrings["ERR_MISSING_REQUIRED_FIELDS"], " ");
} }
function LoginUiComponent_div_0_div_8_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 29)(1, "a", 30);
    i0.ɵɵlistener("click", function LoginUiComponent_div_0_div_8_div_13_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r20); const ctx_r19 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r19.flipCard()); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const vm_r1 = i0.ɵɵnextContext(2).ngIf;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", vm_r1.appStrings["LBL_LOGIN_FORGOT_PASSWORD"], " ");
} }
function LoginUiComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18)(1, "div", 13);
    i0.ɵɵelement(2, "scrm-image", 19);
    i0.ɵɵelementStart(3, "input", 20, 21);
    i0.ɵɵlistener("ngModelChange", function LoginUiComponent_div_0_div_8_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r22.uname = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, LoginUiComponent_div_0_div_8_div_5_Template, 2, 1, "div", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 13);
    i0.ɵɵelement(7, "scrm-image", 23);
    i0.ɵɵelementStart(8, "input", 24, 25);
    i0.ɵɵlistener("ngModelChange", function LoginUiComponent_div_0_div_8_Template_input_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r24 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r24.passw = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, LoginUiComponent_div_0_div_8_div_10_Template, 2, 1, "div", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 26);
    i0.ɵɵlistener("click", function LoginUiComponent_div_0_div_8_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r23); i0.ɵɵnextContext(); const _r2 = i0.ɵɵreference(2); const ctx_r25 = i0.ɵɵnextContext(); _r2.control.markAllAsTouched(); return i0.ɵɵresetView(_r2.valid && ctx_r25.doLogin()); });
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(13, LoginUiComponent_div_0_div_8_div_13_Template, 3, 1, "div", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r12 = i0.ɵɵreference(4);
    const _r14 = i0.ɵɵreference(9);
    const vm_r1 = i0.ɵɵnextContext().ngIf;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@fade", undefined);
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("is-invalid", _r12.invalid && _r12.touched);
    i0.ɵɵpropertyInterpolate("placeholder", vm_r1.appStrings["LBL_USER_NAME"]);
    i0.ɵɵproperty("ngModel", ctx_r4.uname);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", _r12.invalid && _r12.touched);
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("is-invalid", _r14.invalid && _r14.touched);
    i0.ɵɵpropertyInterpolate("placeholder", vm_r1.appStrings["LBL_PASSWORD"]);
    i0.ɵɵproperty("ngModel", ctx_r4.passw);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", _r14.invalid && _r14.touched);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("scrm-button-loading", ctx_r4.loading);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", vm_r1.appStrings["LBL_LOGIN_BUTTON_LABEL"], " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", vm_r1.showForgotPassword);
} }
function LoginUiComponent_div_0_div_9_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const vm_r1 = i0.ɵɵnextContext(2).ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", vm_r1.appStrings["ERR_MISSING_REQUIRED_FIELDS"], " ");
} }
function LoginUiComponent_div_0_div_9_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const vm_r1 = i0.ɵɵnextContext(2).ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", vm_r1.appStrings["ERR_MISSING_REQUIRED_FIELDS"], " ");
} }
function LoginUiComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 31)(1, "div", 13);
    i0.ɵɵelement(2, "scrm-image", 19);
    i0.ɵɵelementStart(3, "input", 20, 21);
    i0.ɵɵlistener("ngModelChange", function LoginUiComponent_div_0_div_9_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r34); const ctx_r33 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r33.uname = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, LoginUiComponent_div_0_div_9_div_5_Template, 2, 1, "div", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 13);
    i0.ɵɵelement(7, "scrm-image", 32);
    i0.ɵɵelementStart(8, "input", 33, 34);
    i0.ɵɵlistener("ngModelChange", function LoginUiComponent_div_0_div_9_Template_input_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r34); const ctx_r35 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r35.email = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, LoginUiComponent_div_0_div_9_div_10_Template, 2, 1, "div", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 35);
    i0.ɵɵlistener("click", function LoginUiComponent_div_0_div_9_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r34); i0.ɵɵnextContext(); const _r2 = i0.ɵɵreference(2); const ctx_r36 = i0.ɵɵnextContext(); _r2.control.markAllAsTouched(); return i0.ɵɵresetView(_r2.valid && ctx_r36.recoverPassword()); });
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div")(14, "a", 36);
    i0.ɵɵlistener("click", function LoginUiComponent_div_0_div_9_Template_a_click_14_listener() { i0.ɵɵrestoreView(_r34); const ctx_r37 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r37.flipCard()); });
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const _r27 = i0.ɵɵreference(4);
    const _r29 = i0.ɵɵreference(9);
    const vm_r1 = i0.ɵɵnextContext().ngIf;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@fade", undefined);
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("is-invalid", _r27.invalid && _r27.touched);
    i0.ɵɵpropertyInterpolate("placeholder", vm_r1.appStrings["LBL_USER_NAME"]);
    i0.ɵɵproperty("ngModel", ctx_r5.uname);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", _r27.invalid && _r27.touched);
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("is-invalid", _r29.invalid && _r29.touched);
    i0.ɵɵpropertyInterpolate("placeholder", vm_r1.appStrings["LBL_EMAIL"]);
    i0.ɵɵproperty("ngModel", ctx_r5.email);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", _r29.invalid && _r29.touched);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", vm_r1.appStrings["LBL_GENERATE_PASSWORD_BUTTON_TITLE"], " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", vm_r1.appStrings["LBL_BACK"], " ");
} }
function LoginUiComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "form", 2, 3)(3, "div", 4)(4, "div", 5);
    i0.ɵɵelement(5, "scrm-logo-ui");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(6, LoginUiComponent_div_0_div_6_Template, 10, 2, "div", 6);
    i0.ɵɵelementStart(7, "div", 7);
    i0.ɵɵtemplate(8, LoginUiComponent_div_0_div_8_Template, 14, 14, "div", 8);
    i0.ɵɵtemplate(9, LoginUiComponent_div_0_div_9_Template, 16, 13, "div", 9);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const vm_r1 = ctx.ngIf;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", vm_r1.showLanguages);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.cardState === "front");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.cardState === "back");
} }
class LoginUiComponent {
    router;
    auth;
    message;
    configs;
    languageStore;
    recoverPasswordService;
    appState;
    hidden = true;
    loading = false;
    error = '';
    uname = '';
    passw = '';
    email = '';
    cardState = 'front';
    systemConfigs$ = this.configs.configs$;
    appStrings$ = this.languageStore.appStrings$;
    language = null;
    vm$ = this.systemConfigs$.pipe(combineLatestWith(this.appStrings$), map(([systemConfigs, appStrings]) => {
        let showLanguages = false;
        let showForgotPassword = false;
        if (systemConfigs.languages && systemConfigs.languages.items) {
            showLanguages = Object.keys(systemConfigs.languages.items).length > 1;
        }
        if (systemConfigs.passwordsetting && systemConfigs.passwordsetting.items) {
            const forgotPasswordProperty = systemConfigs.passwordsetting.items.forgotpasswordON;
            showForgotPassword = [true, '1', 'true'].includes(forgotPasswordProperty);
        }
        return {
            systemConfigs,
            appStrings,
            showLanguages,
            showForgotPassword
        };
    }));
    constructor(router, auth, message, configs, languageStore, recoverPasswordService, appState) {
        this.router = router;
        this.auth = auth;
        this.message = message;
        this.configs = configs;
        this.languageStore = languageStore;
        this.recoverPasswordService = recoverPasswordService;
        this.appState = appState;
        this.loading = false;
        this.hidden = false;
        this.language = null;
    }
    ngOnInit() {
        this.setCurrentLanguage();
    }
    onLanguageSelect(language) {
        if (!language) {
            return;
        }
        if (language === this.language) {
            return;
        }
        this.changeLanguage(language);
    }
    changeLanguage(language) {
        this.language = language;
        let languagesLoading = false;
        if (this?.appState?.updateLoading) {
            this.appState.updateLoading('change-language', true);
            languagesLoading = true;
        }
        this.languageStore.changeLanguage(language, true).pipe(tap(() => {
            if (languagesLoading) {
                this.appState.updateLoading('change-language', false);
            }
        })).subscribe();
    }
    getEnabledLanguages() {
        return this.languageStore.getEnabledLanguages();
    }
    getEnabledLanguagesKeys() {
        return Object.keys(this.languageStore.getEnabledLanguages() ?? {}) ?? [];
    }
    flipCard() {
        if (this.cardState === 'front') {
            this.cardState = 'back';
        }
        else {
            this.cardState = 'front';
        }
    }
    doLogin() {
        this.loading = true;
        this.auth.doLogin(this.uname, this.passw, this.onLoginSuccess.bind(this), this.onLoginError.bind(this));
    }
    recoverPassword() {
        this.recoverPasswordService
            .run(this.uname, this.email)
            .subscribe((process) => {
            this.message.log('Recover Password Status: ' + process.status);
            let handler = 'addSuccessMessageByKey';
            if (process.status === 'error') {
                handler = 'addDangerMessageByKey';
            }
            if (process.messages) {
                process.messages.forEach(message => {
                    this.message[handler](message);
                });
            }
        }, () => {
            this.message.log('Recover Password failed');
            this.message.addDangerMessageByKey('ERR_AJAX_LOAD_FAILURE');
        });
    }
    onLoginSuccess(result) {
        this.loading = false;
        this.message.log('Login success');
        this.message.removeMessages();
        this.languageStore.setSessionLanguage()
            .pipe(catchError(() => of({})))
            .subscribe(() => {
            if (result && result.redirect) {
                this.router.navigate([result.redirect]).then();
                return;
            }
            if (this.appState.getPreLoginUrl()) {
                this.router.navigateByUrl(this.appState.getPreLoginUrl()).then(() => {
                    this.appState.setPreLoginUrl('');
                });
                return;
            }
            const defaultModule = this.configs.getHomePage();
            this.router.navigate(['/' + defaultModule]).then();
        });
        return;
    }
    onLoginError(httpError) {
        this.loading = false;
        this.message.log('Login failed');
        const defaultMessage = 'Login credentials incorrect, please try again.';
        const defaultTooManyFailedMessage = 'Too many failed login attempts, please try again later.';
        let message = this.languageStore.getFieldLabel('LOGIN_INCORRECT');
        const errorMessage = httpError?.error?.error ?? '';
        if (typeof errorMessage === 'string' && errorMessage.includes('Too many failed login attempts, please try again in')) {
            message = this.getTooManyFailedMessage(defaultTooManyFailedMessage);
        }
        if (!message) {
            message = defaultMessage;
        }
        this.message.addDangerMessage(message);
    }
    getTooManyFailedMessage(defaultTooManyFailedMessage) {
        let tooManyFailedMessage = this.languageStore.getFieldLabel('LOGIN_TOO_MANY_FAILED');
        if (!tooManyFailedMessage) {
            tooManyFailedMessage = defaultTooManyFailedMessage;
        }
        return tooManyFailedMessage;
    }
    setCurrentLanguage() {
        let currentLanguage = this.languageStore.getSelectedLanguage() ?? '';
        const activeLanguage = this.languageStore.getActiveLanguage();
        if (!currentLanguage) {
            currentLanguage = activeLanguage;
        }
        if (!this.languageStore.isLanguageEnabled(currentLanguage)) {
            currentLanguage = '';
        }
        if (this.language && currentLanguage === this.language) {
            return;
        }
        const defaultLanguage = this.configs.getConfigValue('default_language') ?? 'en_us';
        if (!currentLanguage) {
            currentLanguage = defaultLanguage;
        }
        if (!this.languageStore.isLanguageEnabled(currentLanguage)) {
            currentLanguage = this.languageStore.getFirstLanguage();
        }
        this.language = currentLanguage;
        this.changeLanguage(currentLanguage);
    }
    static ɵfac = function LoginUiComponent_Factory(t) { return new (t || LoginUiComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.AuthService), i0.ɵɵdirectiveInject(i3.MessageService), i0.ɵɵdirectiveInject(i4.SystemConfigStore), i0.ɵɵdirectiveInject(i5.LanguageStore), i0.ɵɵdirectiveInject(i6.RecoverPasswordService), i0.ɵɵdirectiveInject(i7.AppStateStore)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoginUiComponent, selectors: [["scrm-login-ui"]], decls: 2, vars: 3, consts: [["class", "login-view full-height-view d-flex align-items-center", 4, "ngIf"], [1, "login-view", "full-height-view", "d-flex", "align-items-center"], ["name", "login", 1, "login-form"], ["loginForm", "ngForm"], [1, "form-row", "form-group"], [1, "col"], ["class", "form-row", 4, "ngIf"], [1, "form-row", "fade-card"], ["class", "fade-card-front col", 4, "ngIf"], ["class", "fade-card-back col", 4, "ngIf"], [1, "form-row"], ["for", "languages", 1, ""], [1, "w-100"], [1, "inner-addon", "left-addon"], ["id", "languages", 3, "change"], ["languageSelect", ""], [3, "selected", "value", 4, "ngFor", "ngForOf"], [3, "selected", "value"], [1, "fade-card-front", "col"], ["image", "login_user"], ["type", "text", "name", "username", "aria-label", "Username", "required", "", 3, "ngModel", "placeholder", "ngModelChange"], ["username", "ngModel"], ["class", "invalid-feedback", 4, "ngIf"], ["image", "login_password"], ["type", "password", "name", "password", "aria-label", "Password", "required", "", 3, "ngModel", "placeholder", "ngModelChange"], ["password", "ngModel"], ["id", "login-button", 1, "login-button", 3, "scrm-button-loading", "click"], ["class", "forgotten-password", 4, "ngIf"], [1, "invalid-feedback"], [1, "forgotten-password"], [1, "forgotten-password-link", 3, "click"], [1, "fade-card-back", "col"], ["image", "email"], ["type", "email", "name", "email", "aria-label", "Email", "required", "", 3, "ngModel", "placeholder", "ngModelChange"], ["mail", "ngModel"], ["scrm-button-loading", "", 1, "submit-button", "login-button", 3, "click"], [1, "back-link", "forgotten-password-link", 3, "click"]], template: function LoginUiComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, LoginUiComponent_div_0_Template, 10, 3, "div", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.vm$));
        } }, dependencies: [i8.ɵNgNoValidate, i8.NgSelectOption, i8.ɵNgSelectMultipleOption, i8.DefaultValueAccessor, i8.NgControlStatus, i8.NgControlStatusGroup, i8.RequiredValidator, i8.NgModel, i8.NgForm, i9.LogoUiComponent, i10.NgForOf, i10.NgIf, i11.ImageComponent, i12.ButtonLoadingDirective, i10.AsyncPipe], encapsulation: 2, data: { animation: [
                trigger('fade', [
                    transition(':enter', useAnimation(fadeIn, {
                        params: { timing: 0.5, delay: 0 }
                    })),
                ])
            ] } });
}
export { LoginUiComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginUiComponent, [{
        type: Component,
        args: [{ selector: 'scrm-login-ui', animations: [
                    trigger('fade', [
                        transition(':enter', useAnimation(fadeIn, {
                            params: { timing: 0.5, delay: 0 }
                        })),
                    ])
                ], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div *ngIf=\"(vm$ | async) as vm\" class=\"login-view full-height-view d-flex align-items-center\">\n\n    <!-- Start of login form section -->\n\n    <form name=\"login\" class=\"login-form\" #loginForm=\"ngForm\">\n        <div class=\"form-row form-group\">\n            <div class=\"col\">\n                <scrm-logo-ui></scrm-logo-ui>\n            </div>\n        </div>\n        <div class=\"form-row\" *ngIf=\"vm.showLanguages\">\n            <div class=\"col\">\n                <label class=\"\" for=\"languages\">{{vm.appStrings['LBL_LANGUAGE']}}</label>\n            </div>\n            <div class=\"w-100\"></div>\n            <div class=\"col\">\n                <div class=\"inner-addon left-addon\">\n                    <select #languageSelect id=\"languages\"\n                            (change)=\"onLanguageSelect(languageSelect.value)\">\n                        <option *ngFor=\"let item of getEnabledLanguagesKeys()\"\n                                [selected]=\"(language ?? 'en_us') === item\"\n                                [value]=\"item\">\n                            {{getEnabledLanguages()[item]}}\n                        </option>\n                    </select>\n                </div>\n            </div>\n        </div>\n\n\n        <div class=\"form-row fade-card\">\n\n            <!-- Card front -->\n            <div class=\"fade-card-front col\"\n                 *ngIf=\"cardState==='front'\"\n                 [@fade]>\n\n                <div class=\"inner-addon left-addon\">\n                    <scrm-image image=\"login_user\"></scrm-image>\n                    <input [(ngModel)]=\"uname\"\n                           type=\"text\"\n                           name=\"username\"\n                           [class.is-invalid]=\"username.invalid && username.touched\"\n                           #username=\"ngModel\"\n                           placeholder=\"{{vm.appStrings['LBL_USER_NAME']}}\"\n                           aria-label=\"Username\"\n                           required>\n                    <div *ngIf=\"username.invalid && username.touched\" class=\"invalid-feedback\">\n                        {{vm.appStrings['ERR_MISSING_REQUIRED_FIELDS']}}\n                    </div>\n                </div>\n\n                <div class=\"inner-addon left-addon\">\n                    <scrm-image image=\"login_password\"></scrm-image>\n                    <input [(ngModel)]=\"passw\"\n                           type=\"password\"\n                           name=\"password\"\n                           [class.is-invalid]=\"password.invalid && password.touched\"\n                           #password=\"ngModel\"\n                           placeholder=\"{{vm.appStrings['LBL_PASSWORD']}}\"\n                           aria-label=\"Password\"\n                           required>\n                    <div *ngIf=\"password.invalid && password.touched\" class=\"invalid-feedback\">\n                        {{vm.appStrings['ERR_MISSING_REQUIRED_FIELDS']}}\n                    </div>\n                </div>\n\n\n                <button id=\"login-button\" class=\"login-button\"\n                        [scrm-button-loading]=\"loading\"\n                        (click)=\"loginForm.control.markAllAsTouched(); loginForm.valid && doLogin()\">\n                    {{vm.appStrings['LBL_LOGIN_BUTTON_LABEL']}}\n                </button>\n                <div class=\"forgotten-password\" *ngIf=\"vm.showForgotPassword\">\n                    <a class=\"forgotten-password-link\" (click)=\"flipCard()\">\n                        {{vm.appStrings['LBL_LOGIN_FORGOT_PASSWORD']}}\n                    </a>\n                </div>\n\n            </div>\n\n            <!-- Card back-->\n            <div class=\"fade-card-back col\"\n                 *ngIf=\"cardState==='back'\"\n                 [@fade]>\n                <div class=\"inner-addon left-addon\">\n                    <scrm-image image=\"login_user\"></scrm-image>\n                    <input [(ngModel)]=\"uname\"\n                           type=\"text\"\n                           name=\"username\"\n                           [class.is-invalid]=\"username.invalid && username.touched\"\n                           #username=\"ngModel\"\n                           placeholder=\"{{vm.appStrings['LBL_USER_NAME']}}\"\n                           aria-label=\"Username\"\n                           required>\n                    <div *ngIf=\"username.invalid && username.touched\" class=\"invalid-feedback\">\n                        {{vm.appStrings['ERR_MISSING_REQUIRED_FIELDS']}}\n                    </div>\n                </div>\n\n                <div class=\"inner-addon left-addon\">\n                    <scrm-image image=\"email\"></scrm-image>\n                    <input [(ngModel)]=\"email\"\n                           type=\"email\"\n                           name=\"email\"\n                           [class.is-invalid]=\"mail.invalid && mail.touched\"\n                           #mail=\"ngModel\"\n                           placeholder=\"{{vm.appStrings['LBL_EMAIL']}}\"\n                           aria-label=\"Email\"\n                           required>\n                    <div *ngIf=\"mail.invalid && mail.touched\" class=\"invalid-feedback\">\n                        {{vm.appStrings['ERR_MISSING_REQUIRED_FIELDS']}}\n                    </div>\n                </div>\n\n                <button class=\"submit-button login-button\"\n                        scrm-button-loading\n                        (click)=\"loginForm.control.markAllAsTouched(); loginForm.valid && recoverPassword()\">\n                    {{vm.appStrings['LBL_GENERATE_PASSWORD_BUTTON_TITLE']}}\n                </button>\n                <div>\n                    <a class=\"back-link forgotten-password-link\" (click)=\"flipCard()\">\n                        {{vm.appStrings['LBL_BACK']}}\n                    </a>\n                </div>\n            </div>\n        </div>\n    </form>\n\n    <!-- End of login form section -->\n\n</div>\n\n<!-- End of login component section -->\n" }]
    }], function () { return [{ type: i1.Router }, { type: i2.AuthService }, { type: i3.MessageService }, { type: i4.SystemConfigStore }, { type: i5.LanguageStore }, { type: i6.RecoverPasswordService }, { type: i7.AppStateStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3ZpZXdzL2xvZ2luL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3ZpZXdzL2xvZ2luL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFFaEQsT0FBTyxFQUFDLGlCQUFpQixFQUFjLEVBQUUsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUN2RCxPQUFPLEVBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRCxPQUFPLEVBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RSxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUNlVixrQ0FFdUI7SUFDbkIsWUFDSjtJQUFBLGlCQUFTOzs7OztJQUhELDBIQUEyQyxrQkFBQTtJQUUvQyxlQUNKO0lBREksc0VBQ0o7Ozs7SUFiaEIsK0JBQStDLGFBQUEsZ0JBQUE7SUFFUCxZQUFpQztJQUFBLGlCQUFRLEVBQUE7SUFFN0UsMEJBQXlCO0lBQ3pCLDhCQUFpQixjQUFBLHFCQUFBO0lBR0Qsc01BQVUsZUFBQSxrQ0FBc0MsQ0FBQSxJQUFDO0lBQ3JELG9GQUlTO0lBQ2IsaUJBQVMsRUFBQSxFQUFBLEVBQUE7Ozs7SUFabUIsZUFBaUM7SUFBakMsc0RBQWlDO0lBT2hDLGVBQTRCO0lBQTVCLDBEQUE0Qjs7O0lBNEJ6RCwrQkFBMkU7SUFDdkUsWUFDSjtJQUFBLGlCQUFNOzs7SUFERixlQUNKO0lBREksZ0ZBQ0o7OztJQWFBLCtCQUEyRTtJQUN2RSxZQUNKO0lBQUEsaUJBQU07OztJQURGLGVBQ0o7SUFESSxnRkFDSjs7OztJQVNKLCtCQUE4RCxZQUFBO0lBQ3ZCLHdLQUFTLGVBQUEsa0JBQVUsQ0FBQSxJQUFDO0lBQ25ELFlBQ0o7SUFBQSxpQkFBSSxFQUFBOzs7SUFEQSxlQUNKO0lBREksOEVBQ0o7Ozs7SUEzQ1IsK0JBRWEsY0FBQTtJQUdMLGlDQUE0QztJQUM1QyxxQ0FPZ0I7SUFQVCxxT0FBbUI7SUFBMUIsaUJBT2dCO0lBQ2hCLDhFQUVNO0lBQ1YsaUJBQU07SUFFTiwrQkFBb0M7SUFDaEMsaUNBQWdEO0lBQ2hELHFDQU9nQjtJQVBULHFPQUFtQjtJQUExQixpQkFPZ0I7SUFDaEIsZ0ZBRU07SUFDVixpQkFBTTtJQUdOLG1DQUVxRjtJQUE3RSxrTkFBUyw4QkFBb0MsU0FBRSw0QkFBbUIsaUJBQVMsQ0FBQSxJQUFDO0lBQ2hGLGFBQ0o7SUFBQSxpQkFBUztJQUNULGdGQUlNO0lBRVYsaUJBQU07Ozs7OztJQTVDRCxpQ0FBTztJQU9HLGVBQXlEO0lBQXpELDBEQUF5RDtJQUV6RCwwRUFBZ0Q7SUFMaEQsc0NBQW1CO0lBUXBCLGVBQTBDO0lBQTFDLG1EQUEwQztJQVV6QyxlQUF5RDtJQUF6RCwwREFBeUQ7SUFFekQseUVBQStDO0lBTC9DLHNDQUFtQjtJQVFwQixlQUEwQztJQUExQyxtREFBMEM7SUFPNUMsZUFBK0I7SUFBL0Isb0RBQStCO0lBRW5DLGVBQ0o7SUFESSwyRUFDSjtJQUNpQyxlQUEyQjtJQUEzQiwrQ0FBMkI7OztJQXNCeEQsK0JBQTJFO0lBQ3ZFLFlBQ0o7SUFBQSxpQkFBTTs7O0lBREYsZUFDSjtJQURJLGdGQUNKOzs7SUFhQSwrQkFBbUU7SUFDL0QsWUFDSjtJQUFBLGlCQUFNOzs7SUFERixlQUNKO0lBREksZ0ZBQ0o7Ozs7SUE5QlIsK0JBRWEsY0FBQTtJQUVMLGlDQUE0QztJQUM1QyxxQ0FPZ0I7SUFQVCxxT0FBbUI7SUFBMUIsaUJBT2dCO0lBQ2hCLDhFQUVNO0lBQ1YsaUJBQU07SUFFTiwrQkFBb0M7SUFDaEMsaUNBQXVDO0lBQ3ZDLHFDQU9nQjtJQVBULHFPQUFtQjtJQUExQixpQkFPZ0I7SUFDaEIsZ0ZBRU07SUFDVixpQkFBTTtJQUVOLG1DQUU2RjtJQUFyRixrTkFBUyw4QkFBb0MsU0FBRSw0QkFBbUIseUJBQWlCLENBQUEsSUFBQztJQUN4RixhQUNKO0lBQUEsaUJBQVM7SUFDVCw0QkFBSyxhQUFBO0lBQzRDLGtLQUFTLGVBQUEsa0JBQVUsQ0FBQSxJQUFDO0lBQzdELGFBQ0o7SUFBQSxpQkFBSSxFQUFBLEVBQUE7Ozs7OztJQXZDUCxpQ0FBTztJQU1HLGVBQXlEO0lBQXpELDBEQUF5RDtJQUV6RCwwRUFBZ0Q7SUFMaEQsc0NBQW1CO0lBUXBCLGVBQTBDO0lBQTFDLG1EQUEwQztJQVV6QyxlQUFpRDtJQUFqRCwwREFBaUQ7SUFFakQsc0VBQTRDO0lBTDVDLHNDQUFtQjtJQVFwQixlQUFrQztJQUFsQyxtREFBa0M7SUFReEMsZUFDSjtJQURJLHVGQUNKO0lBR1EsZUFDSjtJQURJLDZEQUNKOzs7SUEzSHBCLDhCQUErRixpQkFBQSxhQUFBLGFBQUE7SUFPL0UsK0JBQTZCO0lBQ2pDLGlCQUFNLEVBQUE7SUFFVix3RUFpQk07SUFHTiw4QkFBZ0M7SUFHNUIseUVBOENNO0lBR04seUVBMkNNO0lBQ1YsaUJBQU0sRUFBQSxFQUFBOzs7O0lBcEhpQixlQUFzQjtJQUF0QiwwQ0FBc0I7SUF3Qm5DLGVBQXlCO0lBQXpCLG1EQUF5QjtJQWlEekIsZUFBd0I7SUFBeEIsa0RBQXdCOztBRG5FMUMsTUFZYSxnQkFBZ0I7SUF3Q1g7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUE3Q2QsTUFBTSxHQUFHLElBQUksQ0FBQztJQUNkLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDaEIsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNYLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDWCxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ1gsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUVYLFNBQVMsR0FBRyxPQUFPLENBQUM7SUFFcEIsY0FBYyxHQUFnQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztJQUNwRSxXQUFXLEdBQWtDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO0lBRTVFLFFBQVEsR0FBVyxJQUFJLENBQUM7SUFFeEIsR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUMxQixpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQ25DLEdBQUcsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBdUMsRUFBRSxFQUFFO1FBQ3RFLElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLGtCQUFrQixHQUFHLEtBQUssQ0FBQztRQUUvQixJQUFJLGFBQWEsQ0FBQyxTQUFTLElBQUksYUFBYSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUU7WUFDMUQsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQ3pFO1FBRUQsSUFBSSxhQUFhLENBQUMsZUFBZSxJQUFJLGFBQWEsQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFO1lBQ3RFLE1BQU0sc0JBQXNCLEdBQUcsYUFBYSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7WUFDcEYsa0JBQWtCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1NBQzdFO1FBRUQsT0FBTztZQUNILGFBQWE7WUFDYixVQUFVO1lBQ1YsYUFBYTtZQUNiLGtCQUFrQjtTQUNyQixDQUFDO0lBQ04sQ0FBQyxDQUFDLENBQ0wsQ0FBQztJQUVGLFlBQ2MsTUFBYyxFQUNkLElBQWlCLEVBQ2pCLE9BQXVCLEVBQ3ZCLE9BQTBCLEVBQzFCLGFBQTRCLEVBQzVCLHNCQUE4QyxFQUM5QyxRQUF1QjtRQU52QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNqQixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUMxQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQzlDLGFBQVEsR0FBUixRQUFRLENBQWU7UUFFakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsUUFBZ0I7UUFDN0IsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNYLE9BQU87U0FDVjtRQUVELElBQUksUUFBUSxLQUFLLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDNUIsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsY0FBYyxDQUFDLFFBQWdCO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBRXpCLElBQUksZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQzdCLElBQUksSUFBSSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckQsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1NBQzNCO1FBRUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDbEQsR0FBRyxDQUFDLEdBQUcsRUFBRTtZQUNMLElBQUksZ0JBQWdCLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3pEO1FBRUwsQ0FBQyxDQUFDLENBQ0wsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsbUJBQW1CO1FBQ2YsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDcEQsQ0FBQztJQUVELHVCQUF1QjtRQUNuQixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3RSxDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxPQUFPLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7U0FDM0I7YUFBTTtZQUNILElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1NBQzVCO0lBQ0wsQ0FBQztJQUVELE9BQU87UUFDSCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM1RyxDQUFDO0lBRUQsZUFBZTtRQUNYLElBQUksQ0FBQyxzQkFBc0I7YUFDdEIsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUMzQixTQUFTLENBQ04sQ0FBQyxPQUFnQixFQUFFLEVBQUU7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRS9ELElBQUksT0FBTyxHQUFHLHdCQUF3QixDQUFDO1lBQ3ZDLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxPQUFPLEVBQUU7Z0JBQzVCLE9BQU8sR0FBRyx1QkFBdUIsQ0FBQzthQUNyQztZQUVELElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRTtnQkFDbEIsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ25DLENBQUMsQ0FBQyxDQUFDO2FBQ047UUFDTCxDQUFDLEVBQ0QsR0FBRyxFQUFFO1lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDaEUsQ0FBQyxDQUNKLENBQUM7SUFDVixDQUFDO0lBRUQsY0FBYyxDQUFDLE1BQVc7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUU5QixJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixFQUFFO2FBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDOUIsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQy9DLE9BQU87YUFDVjtZQUVELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7b0JBQ2hFLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNyQyxDQUFDLENBQUMsQ0FBQztnQkFDSCxPQUFPO2FBQ1Y7WUFFRCxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkQsQ0FBQyxDQUFDLENBQUM7UUFFUCxPQUFPO0lBQ1gsQ0FBQztJQUVELFlBQVksQ0FBQyxTQUE0QjtRQUNyQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVqQyxNQUFNLGNBQWMsR0FBRyxnREFBZ0QsQ0FBQztRQUN4RSxNQUFNLDJCQUEyQixHQUFHLHlEQUF5RCxDQUFDO1FBQzlGLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFbEUsTUFBTSxZQUFZLEdBQUcsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLElBQUksRUFBRSxDQUFDO1FBRW5ELElBQUksT0FBTyxZQUFZLEtBQUssUUFBUSxJQUFJLFlBQVksQ0FBQyxRQUFRLENBQUMscURBQXFELENBQUMsRUFBRTtZQUNsSCxPQUFPLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLDJCQUEyQixDQUFDLENBQUM7U0FDdkU7UUFFRCxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1YsT0FBTyxHQUFHLGNBQWMsQ0FBQTtTQUMzQjtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVTLHVCQUF1QixDQUFDLDJCQUFtQztRQUNqRSxJQUFJLG9CQUFvQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFFckYsSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQ3ZCLG9CQUFvQixHQUFHLDJCQUEyQixDQUFDO1NBQ3REO1FBQ0QsT0FBTyxvQkFBb0IsQ0FBQztJQUNoQyxDQUFDO0lBRVMsa0JBQWtCO1FBQ3hCLElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDckUsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRTlELElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDbEIsZUFBZSxHQUFHLGNBQWMsQ0FBQztTQUNwQztRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQ3hELGVBQWUsR0FBRyxFQUFFLENBQUM7U0FDeEI7UUFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksZUFBZSxLQUFLLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDcEQsT0FBTztTQUNWO1FBRUQsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsSUFBSSxPQUFPLENBQUM7UUFFbkYsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUNsQixlQUFlLEdBQUcsZUFBZSxDQUFDO1NBQ3JDO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFDeEQsZUFBZSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUMzRDtRQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDekMsQ0FBQzswRUF6TlEsZ0JBQWdCOzZEQUFoQixnQkFBZ0I7WUM1QjdCLGtFQW1JTTs7O1lBbklBLG9EQUFvQjtnV0RvQlY7Z0JBQ1IsT0FBTyxDQUFDLE1BQU0sRUFBRTtvQkFDWixVQUFVLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxNQUFNLEVBQUU7d0JBQ3RDLE1BQU0sRUFBRSxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQztxQkFDbEMsQ0FBQyxDQUFDO2lCQUNOLENBQUM7YUFDTDs7U0FFUSxnQkFBZ0I7dUZBQWhCLGdCQUFnQjtjQVo1QixTQUFTOzJCQUNJLGVBQWUsY0FHYjtvQkFDUixPQUFPLENBQUMsTUFBTSxFQUFFO3dCQUNaLFVBQVUsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLE1BQU0sRUFBRTs0QkFDdEMsTUFBTSxFQUFFLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFDO3lCQUNsQyxDQUFDLENBQUM7cUJBQ04sQ0FBQztpQkFDTCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7Y29tYmluZUxhdGVzdFdpdGgsIE9ic2VydmFibGUsIG9mfSBmcm9tICdyeGpzJztcbmltcG9ydCB7Y2F0Y2hFcnJvciwgbWFwLCB0YXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7dHJhbnNpdGlvbiwgdHJpZ2dlciwgdXNlQW5pbWF0aW9ufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7ZmFkZUlufSBmcm9tICduZy1hbmltYXRlJztcbmltcG9ydCB7UmVjb3ZlclBhc3N3b3JkU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvcHJvY2Vzcy9wcm9jZXNzZXMvcmVjb3Zlci1wYXNzd29yZC9yZWNvdmVyLXBhc3N3b3JkJztcbmltcG9ydCB7U3lzdGVtQ29uZmlnTWFwLCBTeXN0ZW1Db25maWdTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvc3lzdGVtLWNvbmZpZy9zeXN0ZW0tY29uZmlnLnN0b3JlJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL2F1dGgvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZSwgTGFuZ3VhZ2VTdHJpbmdNYXB9IGZyb20gJy4uLy4uLy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL21lc3NhZ2UvbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7UHJvY2Vzc30gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvcHJvY2Vzcy9wcm9jZXNzLnNlcnZpY2UnO1xuaW1wb3J0IHtTdHJpbmdNYXB9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge0h0dHBFcnJvclJlc3BvbnNlfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge0FwcFN0YXRlU3RvcmV9IGZyb20gXCIuLi8uLi8uLi8uLi9zdG9yZS9hcHAtc3RhdGUvYXBwLXN0YXRlLnN0b3JlXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLWxvZ2luLXVpJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW10sXG4gICAgYW5pbWF0aW9uczogW1xuICAgICAgICB0cmlnZ2VyKCdmYWRlJywgW1xuICAgICAgICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgdXNlQW5pbWF0aW9uKGZhZGVJbiwge1xuICAgICAgICAgICAgICAgIHBhcmFtczoge3RpbWluZzogMC41LCBkZWxheTogMH1cbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgXSlcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luVWlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGhpZGRlbiA9IHRydWU7XG4gICAgbG9hZGluZyA9IGZhbHNlO1xuICAgIGVycm9yID0gJyc7XG4gICAgdW5hbWUgPSAnJztcbiAgICBwYXNzdyA9ICcnO1xuICAgIGVtYWlsID0gJyc7XG5cbiAgICBjYXJkU3RhdGUgPSAnZnJvbnQnO1xuXG4gICAgc3lzdGVtQ29uZmlncyQ6IE9ic2VydmFibGU8U3lzdGVtQ29uZmlnTWFwPiA9IHRoaXMuY29uZmlncy5jb25maWdzJDtcbiAgICBhcHBTdHJpbmdzJDogT2JzZXJ2YWJsZTxMYW5ndWFnZVN0cmluZ01hcD4gPSB0aGlzLmxhbmd1YWdlU3RvcmUuYXBwU3RyaW5ncyQ7XG5cbiAgICBsYW5ndWFnZTogc3RyaW5nID0gbnVsbDtcblxuICAgIHZtJCA9IHRoaXMuc3lzdGVtQ29uZmlncyQucGlwZShcbiAgICAgICAgY29tYmluZUxhdGVzdFdpdGgodGhpcy5hcHBTdHJpbmdzJCksXG4gICAgICAgIG1hcCgoW3N5c3RlbUNvbmZpZ3MsIGFwcFN0cmluZ3NdOiBbU3lzdGVtQ29uZmlnTWFwLCBMYW5ndWFnZVN0cmluZ01hcF0pID0+IHtcbiAgICAgICAgICAgIGxldCBzaG93TGFuZ3VhZ2VzID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgc2hvd0ZvcmdvdFBhc3N3b3JkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChzeXN0ZW1Db25maWdzLmxhbmd1YWdlcyAmJiBzeXN0ZW1Db25maWdzLmxhbmd1YWdlcy5pdGVtcykge1xuICAgICAgICAgICAgICAgIHNob3dMYW5ndWFnZXMgPSBPYmplY3Qua2V5cyhzeXN0ZW1Db25maWdzLmxhbmd1YWdlcy5pdGVtcykubGVuZ3RoID4gMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN5c3RlbUNvbmZpZ3MucGFzc3dvcmRzZXR0aW5nICYmIHN5c3RlbUNvbmZpZ3MucGFzc3dvcmRzZXR0aW5nLml0ZW1zKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9yZ290UGFzc3dvcmRQcm9wZXJ0eSA9IHN5c3RlbUNvbmZpZ3MucGFzc3dvcmRzZXR0aW5nLml0ZW1zLmZvcmdvdHBhc3N3b3JkT047XG4gICAgICAgICAgICAgICAgc2hvd0ZvcmdvdFBhc3N3b3JkID0gW3RydWUsICcxJywgJ3RydWUnXS5pbmNsdWRlcyhmb3Jnb3RQYXNzd29yZFByb3BlcnR5KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzeXN0ZW1Db25maWdzLFxuICAgICAgICAgICAgICAgIGFwcFN0cmluZ3MsXG4gICAgICAgICAgICAgICAgc2hvd0xhbmd1YWdlcyxcbiAgICAgICAgICAgICAgICBzaG93Rm9yZ290UGFzc3dvcmRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pXG4gICAgKTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByb3RlY3RlZCBhdXRoOiBBdXRoU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIG1lc3NhZ2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgY29uZmlnczogU3lzdGVtQ29uZmlnU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBsYW5ndWFnZVN0b3JlOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgcmVjb3ZlclBhc3N3b3JkU2VydmljZTogUmVjb3ZlclBhc3N3b3JkU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGFwcFN0YXRlOiBBcHBTdGF0ZVN0b3JlXG4gICAgKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxhbmd1YWdlID0gbnVsbDtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zZXRDdXJyZW50TGFuZ3VhZ2UoKTtcbiAgICB9XG5cbiAgICBvbkxhbmd1YWdlU2VsZWN0KGxhbmd1YWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKCFsYW5ndWFnZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxhbmd1YWdlID09PSB0aGlzLmxhbmd1YWdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGFuZ2VMYW5ndWFnZShsYW5ndWFnZSk7XG4gICAgfVxuXG4gICAgY2hhbmdlTGFuZ3VhZ2UobGFuZ3VhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmxhbmd1YWdlID0gbGFuZ3VhZ2U7XG5cbiAgICAgICAgbGV0IGxhbmd1YWdlc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXM/LmFwcFN0YXRlPy51cGRhdGVMb2FkaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmFwcFN0YXRlLnVwZGF0ZUxvYWRpbmcoJ2NoYW5nZS1sYW5ndWFnZScsIHRydWUpO1xuICAgICAgICAgICAgbGFuZ3VhZ2VzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxhbmd1YWdlU3RvcmUuY2hhbmdlTGFuZ3VhZ2UobGFuZ3VhZ2UsIHRydWUpLnBpcGUoXG4gICAgICAgICAgICB0YXAoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChsYW5ndWFnZXNMb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwU3RhdGUudXBkYXRlTG9hZGluZygnY2hhbmdlLWxhbmd1YWdlJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSlcbiAgICAgICAgKS5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBnZXRFbmFibGVkTGFuZ3VhZ2VzKCk6IFN0cmluZ01hcCB7XG4gICAgICAgIHJldHVybiB0aGlzLmxhbmd1YWdlU3RvcmUuZ2V0RW5hYmxlZExhbmd1YWdlcygpO1xuICAgIH1cblxuICAgIGdldEVuYWJsZWRMYW5ndWFnZXNLZXlzKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMubGFuZ3VhZ2VTdG9yZS5nZXRFbmFibGVkTGFuZ3VhZ2VzKCkgPz8ge30pID8/IFtdO1xuICAgIH1cblxuICAgIGZsaXBDYXJkKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5jYXJkU3RhdGUgPT09ICdmcm9udCcpIHtcbiAgICAgICAgICAgIHRoaXMuY2FyZFN0YXRlID0gJ2JhY2snO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jYXJkU3RhdGUgPSAnZnJvbnQnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZG9Mb2dpbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hdXRoLmRvTG9naW4odGhpcy51bmFtZSwgdGhpcy5wYXNzdywgdGhpcy5vbkxvZ2luU3VjY2Vzcy5iaW5kKHRoaXMpLCB0aGlzLm9uTG9naW5FcnJvci5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICByZWNvdmVyUGFzc3dvcmQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVjb3ZlclBhc3N3b3JkU2VydmljZVxuICAgICAgICAgICAgLnJ1bih0aGlzLnVuYW1lLCB0aGlzLmVtYWlsKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAocHJvY2VzczogUHJvY2VzcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UubG9nKCdSZWNvdmVyIFBhc3N3b3JkIFN0YXR1czogJyArIHByb2Nlc3Muc3RhdHVzKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgaGFuZGxlciA9ICdhZGRTdWNjZXNzTWVzc2FnZUJ5S2V5JztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3Muc3RhdHVzID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyID0gJ2FkZERhbmdlck1lc3NhZ2VCeUtleSc7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5tZXNzYWdlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5tZXNzYWdlcy5mb3JFYWNoKG1lc3NhZ2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZVtoYW5kbGVyXShtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZS5sb2coJ1JlY292ZXIgUGFzc3dvcmQgZmFpbGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZS5hZGREYW5nZXJNZXNzYWdlQnlLZXkoJ0VSUl9BSkFYX0xPQURfRkFJTFVSRScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgb25Mb2dpblN1Y2Nlc3MocmVzdWx0OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWVzc2FnZS5sb2coJ0xvZ2luIHN1Y2Nlc3MnKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlLnJlbW92ZU1lc3NhZ2VzKCk7XG5cbiAgICAgICAgdGhpcy5sYW5ndWFnZVN0b3JlLnNldFNlc3Npb25MYW5ndWFnZSgpXG4gICAgICAgICAgICAucGlwZShjYXRjaEVycm9yKCgpID0+IG9mKHt9KSkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5yZWRpcmVjdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbcmVzdWx0LnJlZGlyZWN0XSkudGhlbigpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXBwU3RhdGUuZ2V0UHJlTG9naW5VcmwoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMuYXBwU3RhdGUuZ2V0UHJlTG9naW5VcmwoKSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcFN0YXRlLnNldFByZUxvZ2luVXJsKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkZWZhdWx0TW9kdWxlID0gdGhpcy5jb25maWdzLmdldEhvbWVQYWdlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJyArIGRlZmF1bHRNb2R1bGVdKS50aGVuKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb25Mb2dpbkVycm9yKGh0dHBFcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWVzc2FnZS5sb2coJ0xvZ2luIGZhaWxlZCcpO1xuXG4gICAgICAgIGNvbnN0IGRlZmF1bHRNZXNzYWdlID0gJ0xvZ2luIGNyZWRlbnRpYWxzIGluY29ycmVjdCwgcGxlYXNlIHRyeSBhZ2Fpbi4nO1xuICAgICAgICBjb25zdCBkZWZhdWx0VG9vTWFueUZhaWxlZE1lc3NhZ2UgPSAnVG9vIG1hbnkgZmFpbGVkIGxvZ2luIGF0dGVtcHRzLCBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyLic7XG4gICAgICAgIGxldCBtZXNzYWdlID0gdGhpcy5sYW5ndWFnZVN0b3JlLmdldEZpZWxkTGFiZWwoJ0xPR0lOX0lOQ09SUkVDVCcpO1xuXG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGh0dHBFcnJvcj8uZXJyb3I/LmVycm9yID8/ICcnO1xuXG4gICAgICAgIGlmICh0eXBlb2YgZXJyb3JNZXNzYWdlID09PSAnc3RyaW5nJyAmJiBlcnJvck1lc3NhZ2UuaW5jbHVkZXMoJ1RvbyBtYW55IGZhaWxlZCBsb2dpbiBhdHRlbXB0cywgcGxlYXNlIHRyeSBhZ2FpbiBpbicpKSB7XG4gICAgICAgICAgICBtZXNzYWdlID0gdGhpcy5nZXRUb29NYW55RmFpbGVkTWVzc2FnZShkZWZhdWx0VG9vTWFueUZhaWxlZE1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFtZXNzYWdlKSB7XG4gICAgICAgICAgICBtZXNzYWdlID0gZGVmYXVsdE1lc3NhZ2VcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1lc3NhZ2UuYWRkRGFuZ2VyTWVzc2FnZShtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0VG9vTWFueUZhaWxlZE1lc3NhZ2UoZGVmYXVsdFRvb01hbnlGYWlsZWRNZXNzYWdlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBsZXQgdG9vTWFueUZhaWxlZE1lc3NhZ2UgPSB0aGlzLmxhbmd1YWdlU3RvcmUuZ2V0RmllbGRMYWJlbCgnTE9HSU5fVE9PX01BTllfRkFJTEVEJyk7XG5cbiAgICAgICAgaWYgKCF0b29NYW55RmFpbGVkTWVzc2FnZSkge1xuICAgICAgICAgICAgdG9vTWFueUZhaWxlZE1lc3NhZ2UgPSBkZWZhdWx0VG9vTWFueUZhaWxlZE1lc3NhZ2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvb01hbnlGYWlsZWRNZXNzYWdlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZXRDdXJyZW50TGFuZ3VhZ2UoKTogdm9pZCB7XG4gICAgICAgIGxldCBjdXJyZW50TGFuZ3VhZ2UgPSB0aGlzLmxhbmd1YWdlU3RvcmUuZ2V0U2VsZWN0ZWRMYW5ndWFnZSgpID8/ICcnO1xuICAgICAgICBjb25zdCBhY3RpdmVMYW5ndWFnZSA9IHRoaXMubGFuZ3VhZ2VTdG9yZS5nZXRBY3RpdmVMYW5ndWFnZSgpO1xuXG4gICAgICAgIGlmICghY3VycmVudExhbmd1YWdlKSB7XG4gICAgICAgICAgICBjdXJyZW50TGFuZ3VhZ2UgPSBhY3RpdmVMYW5ndWFnZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5sYW5ndWFnZVN0b3JlLmlzTGFuZ3VhZ2VFbmFibGVkKGN1cnJlbnRMYW5ndWFnZSkpIHtcbiAgICAgICAgICAgIGN1cnJlbnRMYW5ndWFnZSA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubGFuZ3VhZ2UgJiYgY3VycmVudExhbmd1YWdlID09PSB0aGlzLmxhbmd1YWdlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkZWZhdWx0TGFuZ3VhZ2UgPSB0aGlzLmNvbmZpZ3MuZ2V0Q29uZmlnVmFsdWUoJ2RlZmF1bHRfbGFuZ3VhZ2UnKSA/PyAnZW5fdXMnO1xuXG4gICAgICAgIGlmICghY3VycmVudExhbmd1YWdlKSB7XG4gICAgICAgICAgICBjdXJyZW50TGFuZ3VhZ2UgPSBkZWZhdWx0TGFuZ3VhZ2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMubGFuZ3VhZ2VTdG9yZS5pc0xhbmd1YWdlRW5hYmxlZChjdXJyZW50TGFuZ3VhZ2UpKSB7XG4gICAgICAgICAgICBjdXJyZW50TGFuZ3VhZ2UgPSB0aGlzLmxhbmd1YWdlU3RvcmUuZ2V0Rmlyc3RMYW5ndWFnZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sYW5ndWFnZSA9IGN1cnJlbnRMYW5ndWFnZTtcbiAgICAgICAgdGhpcy5jaGFuZ2VMYW5ndWFnZShjdXJyZW50TGFuZ3VhZ2UpO1xuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjxkaXYgKm5nSWY9XCIodm0kIHwgYXN5bmMpIGFzIHZtXCIgY2xhc3M9XCJsb2dpbi12aWV3IGZ1bGwtaGVpZ2h0LXZpZXcgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuXG4gICAgPCEtLSBTdGFydCBvZiBsb2dpbiBmb3JtIHNlY3Rpb24gLS0+XG5cbiAgICA8Zm9ybSBuYW1lPVwibG9naW5cIiBjbGFzcz1cImxvZ2luLWZvcm1cIiAjbG9naW5Gb3JtPVwibmdGb3JtXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvdyBmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPHNjcm0tbG9nby11aT48L3Njcm0tbG9nby11aT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tcm93XCIgKm5nSWY9XCJ2bS5zaG93TGFuZ3VhZ2VzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiXCIgZm9yPVwibGFuZ3VhZ2VzXCI+e3t2bS5hcHBTdHJpbmdzWydMQkxfTEFOR1VBR0UnXX19PC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMTAwXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyLWFkZG9uIGxlZnQtYWRkb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCAjbGFuZ3VhZ2VTZWxlY3QgaWQ9XCJsYW5ndWFnZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwib25MYW5ndWFnZVNlbGVjdChsYW5ndWFnZVNlbGVjdC52YWx1ZSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgZ2V0RW5hYmxlZExhbmd1YWdlc0tleXMoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzZWxlY3RlZF09XCIobGFuZ3VhZ2UgPz8gJ2VuX3VzJykgPT09IGl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7Z2V0RW5hYmxlZExhbmd1YWdlcygpW2l0ZW1dfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvdyBmYWRlLWNhcmRcIj5cblxuICAgICAgICAgICAgPCEtLSBDYXJkIGZyb250IC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZhZGUtY2FyZC1mcm9udCBjb2xcIlxuICAgICAgICAgICAgICAgICAqbmdJZj1cImNhcmRTdGF0ZT09PSdmcm9udCdcIlxuICAgICAgICAgICAgICAgICBbQGZhZGVdPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyLWFkZG9uIGxlZnQtYWRkb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNjcm0taW1hZ2UgaW1hZ2U9XCJsb2dpbl91c2VyXCI+PC9zY3JtLWltYWdlPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgWyhuZ01vZGVsKV09XCJ1bmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmlzLWludmFsaWRdPVwidXNlcm5hbWUuaW52YWxpZCAmJiB1c2VybmFtZS50b3VjaGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICN1c2VybmFtZT1cIm5nTW9kZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7e3ZtLmFwcFN0cmluZ3NbJ0xCTF9VU0VSX05BTUUnXX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJVc2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cInVzZXJuYW1lLmludmFsaWQgJiYgdXNlcm5hbWUudG91Y2hlZFwiIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3t2bS5hcHBTdHJpbmdzWydFUlJfTUlTU0lOR19SRVFVSVJFRF9GSUVMRFMnXX19XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyLWFkZG9uIGxlZnQtYWRkb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNjcm0taW1hZ2UgaW1hZ2U9XCJsb2dpbl9wYXNzd29yZFwiPjwvc2NybS1pbWFnZT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFsobmdNb2RlbCldPVwicGFzc3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3MuaXMtaW52YWxpZF09XCJwYXNzd29yZC5pbnZhbGlkICYmIHBhc3N3b3JkLnRvdWNoZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgI3Bhc3N3b3JkPVwibmdNb2RlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7dm0uYXBwU3RyaW5nc1snTEJMX1BBU1NXT1JEJ119fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJwYXNzd29yZC5pbnZhbGlkICYmIHBhc3N3b3JkLnRvdWNoZWRcIiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7dm0uYXBwU3RyaW5nc1snRVJSX01JU1NJTkdfUkVRVUlSRURfRklFTERTJ119fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImxvZ2luLWJ1dHRvblwiIGNsYXNzPVwibG9naW4tYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtzY3JtLWJ1dHRvbi1sb2FkaW5nXT1cImxvYWRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImxvZ2luRm9ybS5jb250cm9sLm1hcmtBbGxBc1RvdWNoZWQoKTsgbG9naW5Gb3JtLnZhbGlkICYmIGRvTG9naW4oKVwiPlxuICAgICAgICAgICAgICAgICAgICB7e3ZtLmFwcFN0cmluZ3NbJ0xCTF9MT0dJTl9CVVRUT05fTEFCRUwnXX19XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcmdvdHRlbi1wYXNzd29yZFwiICpuZ0lmPVwidm0uc2hvd0ZvcmdvdFBhc3N3b3JkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZm9yZ290dGVuLXBhc3N3b3JkLWxpbmtcIiAoY2xpY2spPVwiZmxpcENhcmQoKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3t2bS5hcHBTdHJpbmdzWydMQkxfTE9HSU5fRk9SR09UX1BBU1NXT1JEJ119fVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8IS0tIENhcmQgYmFjay0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZhZGUtY2FyZC1iYWNrIGNvbFwiXG4gICAgICAgICAgICAgICAgICpuZ0lmPVwiY2FyZFN0YXRlPT09J2JhY2snXCJcbiAgICAgICAgICAgICAgICAgW0BmYWRlXT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXItYWRkb24gbGVmdC1hZGRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8c2NybS1pbWFnZSBpbWFnZT1cImxvZ2luX3VzZXJcIj48L3Njcm0taW1hZ2U+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBbKG5nTW9kZWwpXT1cInVuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3MuaXMtaW52YWxpZF09XCJ1c2VybmFtZS5pbnZhbGlkICYmIHVzZXJuYW1lLnRvdWNoZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgI3VzZXJuYW1lPVwibmdNb2RlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7dm0uYXBwU3RyaW5nc1snTEJMX1VTRVJfTkFNRSddfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwidXNlcm5hbWUuaW52YWxpZCAmJiB1c2VybmFtZS50b3VjaGVkXCIgY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e3ZtLmFwcFN0cmluZ3NbJ0VSUl9NSVNTSU5HX1JFUVVJUkVEX0ZJRUxEUyddfX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXItYWRkb24gbGVmdC1hZGRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8c2NybS1pbWFnZSBpbWFnZT1cImVtYWlsXCI+PC9zY3JtLWltYWdlPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgWyhuZ01vZGVsKV09XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzcy5pcy1pbnZhbGlkXT1cIm1haWwuaW52YWxpZCAmJiBtYWlsLnRvdWNoZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgI21haWw9XCJuZ01vZGVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3t2bS5hcHBTdHJpbmdzWydMQkxfRU1BSUwnXX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIm1haWwuaW52YWxpZCAmJiBtYWlsLnRvdWNoZWRcIiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7dm0uYXBwU3RyaW5nc1snRVJSX01JU1NJTkdfUkVRVUlSRURfRklFTERTJ119fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJzdWJtaXQtYnV0dG9uIGxvZ2luLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JtLWJ1dHRvbi1sb2FkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwibG9naW5Gb3JtLmNvbnRyb2wubWFya0FsbEFzVG91Y2hlZCgpOyBsb2dpbkZvcm0udmFsaWQgJiYgcmVjb3ZlclBhc3N3b3JkKClcIj5cbiAgICAgICAgICAgICAgICAgICAge3t2bS5hcHBTdHJpbmdzWydMQkxfR0VORVJBVEVfUEFTU1dPUkRfQlVUVE9OX1RJVExFJ119fVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYmFjay1saW5rIGZvcmdvdHRlbi1wYXNzd29yZC1saW5rXCIgKGNsaWNrKT1cImZsaXBDYXJkKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7dm0uYXBwU3RyaW5nc1snTEJMX0JBQ0snXX19XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG5cbiAgICA8IS0tIEVuZCBvZiBsb2dpbiBmb3JtIHNlY3Rpb24gLS0+XG5cbjwvZGl2PlxuXG48IS0tIEVuZCBvZiBsb2dpbiBjb21wb25lbnQgc2VjdGlvbiAtLT5cbiJdfQ==