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
import { Component, HostListener, ViewChild } from '@angular/core';
import { combineLatestWith, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { NavbarAbstract } from '../navbar.abstract';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';
import { ActionNameMapper } from '../../../services/navigation/action-name-mapper/action-name-mapper.service';
import { ScreenSize } from '../../../services/ui/screen-size-observer/screen-size-observer.service';
import { RouteConverter } from '../../../services/navigation/route-converter/route-converter.service';
import { ModuleNameMapper } from '../../../services/navigation/module-name-mapper/module-name-mapper.service';
import { ready } from 'common';
import * as i0 from "@angular/core";
import * as i1 from "../../../store/navigation/navigation.store";
import * as i2 from "../../../store/language/language.store";
import * as i3 from "../../../store/user-preference/user-preference.store";
import * as i4 from "../../../store/system-config/system-config.store";
import * as i5 from "../../../store/app-state/app-state.store";
import * as i6 from "../../../services/auth/auth.service";
import * as i7 from "../../../services/navigation/module-navigation/module-navigation.service";
import * as i8 from "../../../services/ui/screen-size-observer/screen-size-observer.service";
import * as i9 from "../../../services/process/processes/async-action/async-action";
import * as i10 from "../../../store/notification/notification.store";
import * as i11 from "@angular/common";
import * as i12 from "../../logo/logo.component";
import * as i13 from "../../logout/logout.component";
import * as i14 from "@ng-bootstrap/ng-bootstrap";
import * as i15 from "@angular/router";
import * as i16 from "../../image/image.component";
import * as i17 from "../../label/label.component";
import * as i18 from "../../../containers/notifications/notifications.component";
import * as i19 from "../../search-bar/search-bar.component";
import * as i20 from "../menu-item/menu-item.component";
import * as i21 from "../home-menu-item/home-menu-item.component";
import * as i22 from "../grouped-menu-item/grouped-menu-item.component";
import * as i23 from "../menu-items-list/menu-items-list.component";
import * as i24 from "../mobile-menu/mobile-menu.component";
const _c0 = ["mobileGlobalLinkTitle"];
function BaseNavbarComponent_div_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nav", 5)(1, "div", 6)(2, "ul", 7)(3, "li", 8);
    i0.ɵɵtext(4, "\u00A0 ");
    i0.ɵɵelementEnd()()()();
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "nav", 9)(2, "div", 10)(3, "ul", 7)(4, "li", 11);
    i0.ɵɵelement(5, "scrm-logo-ui");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementContainerEnd();
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-mobile-menu", 27);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r9 = i0.ɵɵreference(3);
    const vm_r1 = i0.ɵɵnextContext(2).ngIf;
    const ctx_r10 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("all", ctx_r10.navbar.all.modules)("current", ctx_r10.navbar.current)("items", ctx_r10.navbar.menu)("navigationType", vm_r1.userPreferences["navigation_paradigm"] || "")("onClose", ctx_r10.getCloseCallBack(_r9));
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_2_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_2_ng_template_18_ng_container_0_hr_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hr");
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_2_ng_template_18_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 29);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, BaseNavbarComponent_div_0_ng_container_2_ng_container_2_ng_template_18_ng_container_0_hr_3_Template, 1, 0, "hr", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const globalAction_r16 = ctx.$implicit;
    const first_r17 = ctx.first;
    const last_r18 = ctx.last;
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("href", globalAction_r16.link.url, i0.ɵɵsanitizeUrl);
    i0.ɵɵpropertyInterpolate("target", globalAction_r16.link.target);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", globalAction_r16.link.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", last_r18 === true || first_r17 === true);
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_2_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, BaseNavbarComponent_div_0_ng_container_2_ng_container_2_ng_template_18_ng_container_0_Template, 4, 4, "ng-container", 28);
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngForOf", ctx_r13.navbar.globalActions);
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ul", 12)(2, "div", 13, 14)(4, "button", 15);
    i0.ɵɵelement(5, "scrm-image", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 17);
    i0.ɵɵtemplate(7, BaseNavbarComponent_div_0_ng_container_2_ng_container_2_ng_container_7_Template, 2, 5, "ng-container", 3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 18);
    i0.ɵɵtemplate(9, BaseNavbarComponent_div_0_ng_container_2_ng_container_2_ng_container_9_Template, 1, 0, "ng-container", 19);
    i0.ɵɵelementStart(10, "div", 20)(11, "li", 21);
    i0.ɵɵlistener("click", function BaseNavbarComponent_div_0_ng_container_2_ng_container_2_Template_li_click_11_listener() { i0.ɵɵrestoreView(_r21); const _r9 = i0.ɵɵreference(3); return i0.ɵɵresetView(_r9.close()); });
    i0.ɵɵelementStart(12, "a", 22, 23);
    i0.ɵɵelement(14, "scrm-image", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 25)(16, "span", 26);
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(18, BaseNavbarComponent_div_0_ng_container_2_ng_container_2_ng_template_18_Template, 1, 1, "ng-template", 2);
    i0.ɵɵelement(19, "scrm-logout-ui");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r12 = i0.ɵɵreference(13);
    i0.ɵɵnextContext(2);
    const _r4 = i0.ɵɵreference(4);
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("autoClose", false);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("@mobileNavFade", undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.navbar && ctx_r7.navbar.menu && ctx_r7.navbar.menu.length);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r4);
    i0.ɵɵadvance(6);
    i0.ɵɵstyleProp("min-width", _r12.offsetWidth, "px");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r7.navbar.currentUser.firstName, " ", ctx_r7.navbar.currentUser.lastName, "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.navbar.globalActions);
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li", 39);
    i0.ɵɵelement(2, "scrm-grouped-menu-item", 40);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r26 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("item", ctx_r26.navbar.current)("subNavCollapse", ctx_r26.subNavCollapse);
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_4_li_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 41);
    i0.ɵɵelement(1, "scrm-menu-item", 42);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r27 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("item", ctx_r27.navbar.current);
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_4_li_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 39);
    i0.ɵɵelement(1, "scrm-grouped-menu-item", 40);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    const ctx_r28 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("item", item_r29)("subNavCollapse", ctx_r28.subNavCollapse);
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ul", 35);
    i0.ɵɵtemplate(2, BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_4_ng_container_2_Template, 3, 2, "ng-container", 3);
    i0.ɵɵtemplate(3, BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_4_li_3_Template, 2, 1, "li", 36);
    i0.ɵɵtemplate(4, BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_4_li_4_Template, 2, 2, "li", 37);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "scrm-menu-items-list", 38);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r22 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r22.navbar.current && ctx_r22.navbar.current.isGroupedMenu);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r22.navbar.current && !ctx_r22.navbar.current.isGroupedMenu);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r22.navbar.menu);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("items", ctx_r22.navbar.all.modules);
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_5_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 41);
    i0.ɵɵelement(1, "scrm-menu-item", 42);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r30 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("item", ctx_r30.navbar.current);
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li", 39);
    i0.ɵɵelement(2, "scrm-grouped-menu-item", 40);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r31 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("item", ctx_r31.navbar.current)("subNavCollapse", ctx_r31.subNavCollapse);
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_5_li_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 45);
    i0.ɵɵelement(1, "scrm-menu-item", 42);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r33 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("item", item_r33);
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ul", 7);
    i0.ɵɵtemplate(2, BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_5_li_2_Template, 2, 1, "li", 36);
    i0.ɵɵtemplate(3, BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_5_ng_container_3_Template, 3, 2, "ng-container", 3);
    i0.ɵɵtemplate(4, BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_5_li_4_Template, 2, 1, "li", 43);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "scrm-menu-items-list", 44);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r23 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r23.navbar.current && !ctx_r23.navbar.current.isGroupedMenu);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r23.navbar.current == null ? null : ctx_r23.navbar.current.submenu) && ctx_r23.navbar.current.isGroupedMenu);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r23.navbar.menu);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("items", ctx_r23.navbar.all.modules);
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_15_ng_container_1_hr_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hr");
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_15_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 29);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_15_ng_container_1_hr_3_Template, 1, 0, "hr", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const globalAction_r35 = ctx.$implicit;
    const first_r36 = ctx.first;
    const last_r37 = ctx.last;
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("href", globalAction_r35.link.url, i0.ɵɵsanitizeUrl);
    i0.ɵɵpropertyInterpolate("target", globalAction_r35.link.target);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", globalAction_r35.link.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", last_r37 === true || first_r36 === true);
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_15_ng_container_1_Template, 4, 4, "ng-container", 28);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r25.navbar.globalActions);
} }
function BaseNavbarComponent_div_0_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "nav", 30)(2, "div", 31);
    i0.ɵɵelement(3, "scrm-home-menu-item", 32);
    i0.ɵɵtemplate(4, BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_4_Template, 6, 4, "ng-container", 3);
    i0.ɵɵtemplate(5, BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_5_Template, 6, 4, "ng-container", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_6_Template, 1, 0, "ng-container", 19);
    i0.ɵɵelementStart(7, "div", 20)(8, "ul", 7)(9, "li", 33)(10, "a", 22);
    i0.ɵɵelement(11, "scrm-image", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 34)(13, "span", 26);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(15, BaseNavbarComponent_div_0_ng_container_2_ng_container_3_ng_container_15_Template, 2, 1, "ng-container", 3);
    i0.ɵɵelement(16, "scrm-logout-ui");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const vm_r1 = i0.ɵɵnextContext(2).ngIf;
    const _r4 = i0.ɵɵreference(4);
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngbCollapse", ctx_r8.mainNavCollapse);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("active", vm_r1.appState.module && vm_r1.appState.module === "home")("route", ctx_r8.getHomePage());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", vm_r1.userPreferences["navigation_paradigm"] == "gm");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", vm_r1.userPreferences["navigation_paradigm"] != "gm");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r4);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate2("", ctx_r8.navbar.currentUser.firstName, " ", ctx_r8.navbar.currentUser.lastName, "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.navbar.globalActions);
} }
function BaseNavbarComponent_div_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BaseNavbarComponent_div_0_ng_container_2_ng_container_1_Template, 6, 0, "ng-container", 3);
    i0.ɵɵtemplate(2, BaseNavbarComponent_div_0_ng_container_2_ng_container_2_Template, 20, 9, "ng-container", 3);
    i0.ɵɵtemplate(3, BaseNavbarComponent_div_0_ng_container_2_ng_container_3_Template, 17, 9, "ng-container", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r3.isUserLoggedIn);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.isUserLoggedIn && ctx_r3.mobileNavbar);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.isUserLoggedIn && !ctx_r3.mobileNavbar);
} }
function BaseNavbarComponent_div_0_ng_template_3_ng_container_5_li_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 57);
    i0.ɵɵelement(2, "scrm-label", 58);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const moduleQuickAction_r44 = i0.ɵɵnextContext().$implicit;
    const ctx_r45 = i0.ɵɵnextContext(4);
    let tmp_1_0;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", moduleQuickAction_r44.url)("queryParams", (tmp_1_0 = moduleQuickAction_r44 == null ? null : moduleQuickAction_r44.params) !== null && tmp_1_0 !== undefined ? tmp_1_0 : null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("labelKey", moduleQuickAction_r44.labelKey)("module", ctx_r45.navbar.current.module);
} }
function BaseNavbarComponent_div_0_ng_template_3_ng_container_5_li_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r50 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 59);
    i0.ɵɵlistener("click", function BaseNavbarComponent_div_0_ng_template_3_ng_container_5_li_3_ng_container_2_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r50); const moduleQuickAction_r44 = i0.ɵɵnextContext().$implicit; const ctx_r48 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r48.handleProcess(moduleQuickAction_r44)); });
    i0.ɵɵelement(2, "scrm-label", 58);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const moduleQuickAction_r44 = i0.ɵɵnextContext().$implicit;
    const ctx_r46 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("labelKey", moduleQuickAction_r44.labelKey)("module", ctx_r46.navbar.current.module);
} }
function BaseNavbarComponent_div_0_ng_template_3_ng_container_5_li_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 56);
    i0.ɵɵtemplate(1, BaseNavbarComponent_div_0_ng_template_3_ng_container_5_li_3_ng_container_1_Template, 3, 4, "ng-container", 3);
    i0.ɵɵtemplate(2, BaseNavbarComponent_div_0_ng_template_3_ng_container_5_li_3_ng_container_2_Template, 3, 2, "ng-container", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const moduleQuickAction_r44 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !moduleQuickAction_r44.process);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", moduleQuickAction_r44.process);
} }
function BaseNavbarComponent_div_0_ng_template_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li", 53);
    i0.ɵɵelement(2, "scrm-label", 54);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, BaseNavbarComponent_div_0_ng_template_3_ng_container_5_li_3_Template, 3, 2, "li", 55);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r40 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("module", ctx_r40.navbar.current.module);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r40.currentQuickActions);
} }
function BaseNavbarComponent_div_0_ng_template_3_ng_container_6_li_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 57);
    i0.ɵɵelement(2, "scrm-label", 58);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const quickAction_r53 = i0.ɵɵnextContext().$implicit;
    let tmp_1_0;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", quickAction_r53.url)("queryParams", (tmp_1_0 = quickAction_r53 == null ? null : quickAction_r53.params) !== null && tmp_1_0 !== undefined ? tmp_1_0 : null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("labelKey", quickAction_r53.labelKey)("module", quickAction_r53.module);
} }
function BaseNavbarComponent_div_0_ng_template_3_ng_container_6_li_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r59 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 59);
    i0.ɵɵlistener("click", function BaseNavbarComponent_div_0_ng_template_3_ng_container_6_li_3_ng_container_2_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r59); const quickAction_r53 = i0.ɵɵnextContext().$implicit; const ctx_r57 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r57.handleProcess(quickAction_r53)); });
    i0.ɵɵelement(2, "scrm-label", 58);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const quickAction_r53 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("labelKey", quickAction_r53.labelKey)("module", quickAction_r53.module);
} }
function BaseNavbarComponent_div_0_ng_template_3_ng_container_6_li_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 56);
    i0.ɵɵtemplate(1, BaseNavbarComponent_div_0_ng_template_3_ng_container_6_li_3_ng_container_1_Template, 3, 4, "ng-container", 3);
    i0.ɵɵtemplate(2, BaseNavbarComponent_div_0_ng_template_3_ng_container_6_li_3_ng_container_2_Template, 3, 2, "ng-container", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const quickAction_r53 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !quickAction_r53.process);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", quickAction_r53.process);
} }
const _c1 = function () { return []; };
function BaseNavbarComponent_div_0_ng_template_3_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li", 53);
    i0.ɵɵelement(2, "scrm-label", 60);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, BaseNavbarComponent_div_0_ng_template_3_ng_container_6_li_3_Template, 3, 2, "li", 55);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r41 = i0.ɵɵnextContext(3);
    let tmp_0_0;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", (tmp_0_0 = ctx_r41 == null ? null : ctx_r41.navigation == null ? null : ctx_r41.navigation.quickActions) !== null && tmp_0_0 !== undefined ? tmp_0_0 : i0.ɵɵpureFunction0(1, _c1));
} }
function BaseNavbarComponent_div_0_ng_template_3_div_9_ng_container_3_span_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const notificationCount_r62 = i0.ɵɵnextContext(2).ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(notificationCount_r62);
} }
function BaseNavbarComponent_div_0_ng_template_3_div_9_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 66);
    i0.ɵɵtemplate(1, BaseNavbarComponent_div_0_ng_template_3_div_9_ng_container_3_span_1_ng_container_1_Template, 2, 1, "ng-container", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const notificationCount_r62 = i0.ɵɵnextContext().ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", notificationCount_r62 > 0);
} }
function BaseNavbarComponent_div_0_ng_template_3_div_9_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BaseNavbarComponent_div_0_ng_template_3_div_9_ng_container_3_span_1_Template, 2, 1, "span", 65);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const notificationCount_r62 = ctx.ngIf;
    let tmp_0_0;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (tmp_0_0 = notificationCount_r62) !== null && tmp_0_0 !== undefined ? tmp_0_0 : false);
} }
function BaseNavbarComponent_div_0_ng_template_3_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r68 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 61)(1, "a", 62);
    i0.ɵɵlistener("mouseenter", function BaseNavbarComponent_div_0_ng_template_3_div_9_Template_a_mouseenter_1_listener() { i0.ɵɵrestoreView(_r68); const ctx_r67 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r67.markAsRead()); });
    i0.ɵɵelement(2, "scrm-image", 63);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, BaseNavbarComponent_div_0_ng_template_3_div_9_ng_container_3_Template, 2, 1, "ng-container", 3);
    i0.ɵɵpipe(4, "async");
    i0.ɵɵelementStart(5, "div", 64);
    i0.ɵɵelement(6, "scrm-notifications");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r42 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(4, 1, ctx_r42.notificationCount$));
} }
function BaseNavbarComponent_div_0_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 46)(1, "div", 47)(2, "a", 48);
    i0.ɵɵelement(3, "scrm-image", 49);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "ul", 50);
    i0.ɵɵtemplate(5, BaseNavbarComponent_div_0_ng_template_3_ng_container_5_Template, 4, 2, "ng-container", 3);
    i0.ɵɵtemplate(6, BaseNavbarComponent_div_0_ng_template_3_ng_container_6_Template, 4, 2, "ng-container", 3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 51);
    i0.ɵɵelement(8, "scrm-search-bar");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, BaseNavbarComponent_div_0_ng_template_3_div_9_Template, 7, 3, "div", 52);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const vm_r1 = i0.ɵɵnextContext().ngIf;
    const ctx_r5 = i0.ɵɵnextContext();
    let tmp_1_0;
    let tmp_2_0;
    i0.ɵɵadvance(4);
    i0.ɵɵclassProp("dropdown-menu-right", !ctx_r5.mobileNavbar);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_1_0 = ctx_r5.navbar == null ? null : ctx_r5.navbar.current == null ? null : ctx_r5.navbar.current.module) !== null && tmp_1_0 !== undefined ? tmp_1_0 : "") && ctx_r5.currentQuickActions.length);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ((tmp_2_0 = ctx_r5 == null ? null : ctx_r5.navigation == null ? null : ctx_r5.navigation.quickActions) !== null && tmp_2_0 !== undefined ? tmp_2_0 : i0.ɵɵpureFunction0(5, _c1)).length);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r5.notificationsEnabled && ctx_r5.checkAppStrings(vm_r1.appStrings) && ctx_r5.arePreferencesInitialized(vm_r1.userPreferences));
} }
function BaseNavbarComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, BaseNavbarComponent_div_0_ng_template_1_Template, 5, 0, "ng-template", 2);
    i0.ɵɵtemplate(2, BaseNavbarComponent_div_0_ng_container_2_Template, 4, 3, "ng-container", 3);
    i0.ɵɵtemplate(3, BaseNavbarComponent_div_0_ng_template_3_Template, 10, 6, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.loaded);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.loaded);
} }
class BaseNavbarComponent {
    navigationStore;
    languageStore;
    userPreferenceStore;
    systemConfigStore;
    appState;
    authService;
    moduleNavigation;
    screenSize;
    asyncActionService;
    notificationStore;
    mobileGlobalLinkTitle;
    static instances = [];
    loaded = true;
    isUserLoggedIn;
    mainNavCollapse = true;
    subNavCollapse = true;
    mobileNavbar = false;
    mobileSubNav = false;
    backLink = false;
    mainNavLink = true;
    submenu = [];
    moduleNameMapper;
    actionNameMapper;
    routeConverter;
    navbar;
    maxTabs = 8;
    screen = ScreenSize.Medium;
    notificationsEnabled = false;
    subs = [];
    navigation;
    currentQuickActions;
    languages$;
    userPreferences$;
    currentUser$;
    appState$;
    navigation$;
    dropdownLength;
    notificationCount$;
    vm$;
    constructor(navigationStore, languageStore, userPreferenceStore, systemConfigStore, appState, authService, moduleNavigation, screenSize, asyncActionService, notificationStore) {
        this.navigationStore = navigationStore;
        this.languageStore = languageStore;
        this.userPreferenceStore = userPreferenceStore;
        this.systemConfigStore = systemConfigStore;
        this.appState = appState;
        this.authService = authService;
        this.moduleNavigation = moduleNavigation;
        this.screenSize = screenSize;
        this.asyncActionService = asyncActionService;
        this.notificationStore = notificationStore;
        const sysConfig = systemConfigStore ?? { configs$: of({}), getConfig: () => null };
        this.moduleNameMapper = new ModuleNameMapper(sysConfig);
        this.actionNameMapper = new ActionNameMapper(sysConfig);
        this.routeConverter = new RouteConverter(this.moduleNameMapper, this.actionNameMapper, sysConfig);
        this.languages$ = languageStore?.vm$ ?? of({ appStrings: {}, modStrings: {}, appListStrings: {} });
        this.userPreferences$ = userPreferenceStore?.userPreferences$ ?? of({});
        this.currentUser$ = authService?.currentUser$ ?? of(null);
        this.appState$ = appState?.vm$ ?? of({ module: null });
        this.navigation$ = navigationStore?.vm$ ?? of({ modules: [] });
        this.notificationCount$ = notificationStore?.notificationsUnreadTotal$ ?? of(0);
        this.vm$ = this.navigation$.pipe(combineLatestWith(this.userPreferences$, this.currentUser$, this.appState$, this.screenSize.screenSize$, this.languages$), map(([navigation, userPreferences, currentUser, appState, screenSize, language]) => {
            if (screenSize) {
                this.screen = screenSize;
            }
            if (navigation && navigation.modules) {
                this.navigation = navigation;
            }
            this.calculateMaxTabs(navigation);
            this.getModuleQuickActions(appState?.module);
            if (this.navbar) {
                this.navbar.resetMenu();
                if (ready([language?.appStrings, language?.modStrings, language?.appListStrings, userPreferences, currentUser])) {
                    this.navbar.build(navigation, currentUser, this.maxTabs);
                }
            }
            return {
                navigation,
                userPreferences,
                appState,
                appStrings: language?.appStrings || {},
                appListStrings: language?.appListStrings || {}
            };
        }));
    }
    /**
     * Public API
     */
    onResize(event) {
        const innerWidth = event.target.innerWidth;
        this.mobileNavbar = innerWidth <= 768;
    }
    ngOnInit() {
        const navbar = new NavbarAbstract(this.routeConverter, this.moduleNavigation, this.userPreferenceStore, this.languageStore, this.appState);
        this.setNavbar(navbar);
        this.authService.isUserLoggedIn.subscribe(value => {
            this.isUserLoggedIn = value;
        });
        window.dispatchEvent(new Event('resize'));
        this.notificationCount$ = this.notificationStore?.notificationsUnreadTotal$ ?? of(0);
        this.subs.push((this.notificationStore?.notificationsEnabled$ ?? of(false)).subscribe(notificationsEnabled => {
            this.notificationsEnabled = notificationsEnabled;
        }));
    }
    ngOnDestroy() {
        this.authService.isUserLoggedIn.unsubscribe();
        this.subs.forEach(sub => sub.unsubscribe());
    }
    checkAppStrings(appStrings) {
        return appStrings && Object.keys(appStrings).length > 0;
    }
    arePreferencesInitialized(preferences) {
        return preferences && Object.keys(preferences).length;
    }
    markAsRead() {
        this.notificationStore?.markNotificationsAsRead();
    }
    ngAfterViewInit() {
        if (!this.mobileGlobalLinkTitle?.nativeElement?.offsetWidt) {
            return;
        }
        this.dropdownLength = this.mobileGlobalLinkTitle.nativeElement.offsetWidt;
    }
    /**
     * Change subnavigation
     *
     * @param {object} event triggered
     * @param {object} items
     */
    changeSubNav(event, items) {
        this.mobileSubNav = !this.mobileSubNav;
        this.backLink = !this.backLink;
        this.mainNavLink = !this.mainNavLink;
        this.submenu = items;
    }
    /**
     * Set link flags
     */
    navBackLink() {
        this.mobileSubNav = !this.mobileSubNav;
        this.backLink = !this.backLink;
        this.mainNavLink = !this.mainNavLink;
    }
    /**
     * Get home page
     *
     * @returns {string} homepage
     */
    getHomePage() {
        return this.systemConfigStore.getHomePage();
    }
    getCloseCallBack(myDrop) {
        return () => myDrop.close();
    }
    /**
     * Internal API
     */
    /**
     * Set navbar model
     *
     * @param {object} navbar model
     */
    setNavbar(navbar) {
        this.navbar = navbar;
        this.loaded = true;
    }
    /**
     * Check if is loaded
     *
     * @returns {{boolean}} is loaded
     */
    isLoaded() {
        return this.loaded;
    }
    calculateMaxTabs(navigation) {
        const sizeMap = this.systemConfigStore?.getConfigValue?.('navigation_tab_limits');
        if (this.screen && sizeMap) {
            let maxTabs = sizeMap[this.screen];
            if (!maxTabs || (navigation?.maxTabs && navigation.maxTabs < maxTabs)) {
                maxTabs = navigation?.maxTabs;
            }
            if (maxTabs) {
                this.maxTabs = maxTabs;
            }
        }
    }
    getModuleQuickActions(module) {
        const moduleNavigation = this?.navigation?.modules[module] ?? null;
        const moduleNavigationMenu = moduleNavigation?.menu ?? [];
        if (moduleNavigation === null || !moduleNavigationMenu.length) {
            this.currentQuickActions = [];
        }
        const actions = [];
        moduleNavigationMenu.forEach(entry => {
            if (!entry.url || !entry.quickAction) {
                return;
            }
            const url = entry?.url ?? '';
            actions.push({
                ...entry,
                url: url.replace('/#/', '/')
            });
        });
        this.currentQuickActions = actions;
    }
    handleProcess(action) {
        if (!action.process) {
            return;
        }
        const processType = action.process;
        const options = {
            action: processType,
            module: action.module,
        };
        this.asyncActionService.run(processType, options).pipe(take(1)).subscribe();
    }
    static ɵfac = function BaseNavbarComponent_Factory(t) { return new (t || BaseNavbarComponent)(i0.ɵɵdirectiveInject(i1.NavigationStore), i0.ɵɵdirectiveInject(i2.LanguageStore), i0.ɵɵdirectiveInject(i3.UserPreferenceStore), i0.ɵɵdirectiveInject(i4.SystemConfigStore), i0.ɵɵdirectiveInject(i5.AppStateStore), i0.ɵɵdirectiveInject(i6.AuthService), i0.ɵɵdirectiveInject(i7.ModuleNavigation), i0.ɵɵdirectiveInject(i8.ScreenSizeObserverService), i0.ɵɵdirectiveInject(i9.AsyncActionService), i0.ɵɵdirectiveInject(i10.NotificationStore)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BaseNavbarComponent, selectors: [["scrm-base-navbar"]], viewQuery: function BaseNavbarComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mobileGlobalLinkTitle = _t.first);
        } }, hostBindings: function BaseNavbarComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("resize", function BaseNavbarComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, i0.ɵɵresolveWindow);
        } }, decls: 2, vars: 3, consts: [["class", "top-panel fixed-top", 4, "ngIf"], [1, "top-panel", "fixed-top"], [3, "ngIf"], [4, "ngIf"], ["actionIcons", ""], [1, "navbar", "navbar-expand-lg"], [1, "navbar-collapse", "collapse", "order-4", "order-md-0", "collapsenav"], [1, "navbar-nav"], [1, "top-nav", "nav-item"], [1, "navbar", "ml-0", "pl-0"], [1, "navbar-collapse"], [1, "pl-0"], [1, "navbar", "mobile-nav-block", "mobilenavbar"], ["ngbDropdown", "", 1, "position-static", 3, "autoClose"], ["myDrop", "ngbDropdown"], ["aria-controls", "navbar", "aria-expanded", "false", "aria-label", "Toggle navigation", "ngbDropdownToggle", "", "type", "button", 1, "navbar-toggler"], ["image", "hamburger", 1, "responsive-menu-toggler"], ["ngbDropdownMenu", "", 1, "mobile-nav-dropdown", "w-100"], [1, "d-flex", "align-items-center"], [4, "ngTemplateOutlet"], ["ngbDropdown", "", 1, "global-links"], [1, "global-link-item", 3, "click"], ["ngbDropdownToggle", "", 1, "nav-link", "primary-global-link", "dropdown-toggle"], ["mobileGlobalLinkTitle", ""], ["image", "user", 1, "global-action-icon", "sicon-2x"], ["aria-labelledby", "navbarDropdownMenuLink", "ngbDropdownMenu", "", 1, "dropdown-menu", "global-links-dropdown", "border", "shadow-sm-2"], [1, "global-user-name"], [3, "all", "current", "items", "navigationType", "onClose"], [4, "ngFor", "ngForOf"], ["ngbDropdownItem", "", 1, "dropdown-item", "global-links-sublink", 3, "href", "target"], [1, "navbar", "navbar-expand-md", "navbar-1"], [1, "navbar-collapse", "collapse", "collapsenav", 3, "ngbCollapse"], [3, "active", "route"], [1, "global-link-item"], ["aria-labelledby", "navbarDropdownMenuLink", "ngbDropdownMenu", "", 1, "dropdown-menu", "global-links-dropdown", "border", "shadow-sm-2", "dropdown-menu-right"], [1, "navbar-nav", "grouped"], ["class", "top-nav nav-item dropdown non-grouped active", 4, "ngIf"], ["class", "top-nav nav-item dropdown main-grouped", 4, "ngFor", "ngForOf"], ["labelKey", "LBL_TABGROUP_ALL", 3, "items"], [1, "top-nav", "nav-item", "dropdown", "main-grouped"], [3, "item", "subNavCollapse"], [1, "top-nav", "nav-item", "dropdown", "non-grouped", "active"], [3, "item"], ["class", "top-nav nav-item dropdown non-grouped", 4, "ngFor", "ngForOf"], ["labelKey", "LBL_MORE", 3, "items"], [1, "top-nav", "nav-item", "dropdown", "non-grouped"], [1, "action-group", "navbar-action-group"], [1, "action-new", "dropdown"], ["type", "button", "aria-label", "Quick Create", 1, "action-link", "primary-global-link"], ["image", "plus", 1, "action-btn-icon"], [1, "dropdown-menu", "border", "shadow-sm-2"], [1, "d-flex", "align-items-center", "mx-1"], ["class", "action-alert dropdown", 4, "ngIf"], [1, "new-list-item-header", "font-weight-bold"], ["labelKey", "LBL_MODULE_NAME", 3, "module"], ["class", "new-list-item", 4, "ngFor", "ngForOf"], [1, "new-list-item"], [1, "d-flex", "align-items-center", 3, "routerLink", "queryParams"], [3, "labelKey", "module"], [1, "d-flex", "align-items-center", 3, "click"], ["labelKey", "LBL_QUICK_ACTIONS"], [1, "action-alert", "dropdown"], ["type", "button", "aria-label", "Toggle Alerts", 1, "action-link", "primary-global-link", 3, "mouseenter"], ["image", "alert", 1, "action-btn-icon"], [1, "dropdown-menu", "border", "shadow-sm-2", "dropdown-menu-right"], ["class", "badge badge-position rounded-pill bg-danger text-white", 4, "ngIf"], [1, "badge", "badge-position", "rounded-pill", "bg-danger", "text-white"]], template: function BaseNavbarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BaseNavbarComponent_div_0_Template, 5, 2, "div", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.vm$));
        } }, dependencies: [i11.NgForOf, i11.NgIf, i11.NgTemplateOutlet, i12.LogoUiComponent, i13.LogoutUiComponent, i14.NgbCollapse, i14.NgbDropdown, i14.NgbDropdownToggle, i14.NgbDropdownMenu, i14.NgbDropdownItem, i15.RouterLink, i16.ImageComponent, i17.LabelComponent, i18.NotificationsComponent, i19.SearchBarComponent, i20.MenuItemComponent, i21.HomeMenuItemComponent, i22.GroupedMenuItemComponent, i23.MenuItemsListComponent, i24.MobileMenuComponent, i11.AsyncPipe], encapsulation: 2, data: { animation: [
                trigger('mobileNavFade', [
                    transition(':enter', useAnimation(fadeIn, {
                        params: { timing: 0.5, delay: 0 }
                    })),
                ])
            ] } });
}
export { BaseNavbarComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseNavbarComponent, [{
        type: Component,
        args: [{ selector: 'scrm-base-navbar', animations: [
                    trigger('mobileNavFade', [
                        transition(':enter', useAnimation(fadeIn, {
                            params: { timing: 0.5, delay: 0 }
                        })),
                    ])
                ], template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<!-- Start of main navbar section -->\n\n<div *ngIf=\"(vm$ | async) as vm\" class=\"top-panel fixed-top\">\n\n    <!-- Start of empty navbar section until data is loaded -->\n\n    <ng-template [ngIf]=\"!loaded\">\n        <nav class=\"navbar navbar-expand-lg\">\n            <div class=\"navbar-collapse collapse order-4 order-md-0 collapsenav\">\n                <ul class=\"navbar-nav\">\n                    <li class=\"top-nav nav-item\">&nbsp;\n                    </li>\n                </ul>\n            </div>\n        </nav>\n    </ng-template>\n\n    <!-- End of empty  section until data is loaded -->\n\n    <!-- Start of empty navbar with logo -->\n\n    <ng-container *ngIf=\"loaded\">\n        <ng-container *ngIf=\"!this.isUserLoggedIn\">\n            <nav class=\"navbar ml-0 pl-0\">\n                <div class=\"navbar-collapse\">\n                    <ul class=\"navbar-nav\">\n                        <li class=\"pl-0\">\n                            <scrm-logo-ui></scrm-logo-ui>\n                        </li>\n                    </ul>\n                </div>\n            </nav>\n        </ng-container>\n\n        <!-- End of empty navbar section with logo -->\n\n        <!-- Start of mobile navigation section -->\n\n        <ng-container *ngIf=\"this.isUserLoggedIn && mobileNavbar\">\n            <ul class=\"navbar mobile-nav-block mobilenavbar\">\n                <div #myDrop=\"ngbDropdown\" [autoClose]=\"false\" class=\"position-static\" ngbDropdown>\n                        <button aria-controls=\"navbar\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"\n                                class=\"navbar-toggler\"\n                                ngbDropdownToggle type=\"button\">\n                            <scrm-image class=\" responsive-menu-toggler\" image=\"hamburger\"></scrm-image>\n                        </button>\n                        <div [@mobileNavFade] class=\"mobile-nav-dropdown w-100\" ngbDropdownMenu>\n                            <ng-container *ngIf=\"navbar && navbar.menu && navbar.menu.length\">\n                                <scrm-mobile-menu [all]=\"navbar.all.modules\"\n                                                  [current]=\"navbar.current\"\n                                                  [items]=\"navbar.menu\"\n                                                  [navigationType]=\"vm.userPreferences['navigation_paradigm'] || ''\"\n                                                  [onClose]=\"getCloseCallBack(myDrop)\"\n                                >\n                                </scrm-mobile-menu>\n                            </ng-container>\n                        </div>\n                </div>\n\n                <div class=\"d-flex align-items-center\">\n                    <ng-container *ngTemplateOutlet=\"actionIcons\"></ng-container>\n                    <div class=\"global-links\" ngbDropdown>\n                        <li (click)=\"myDrop.close()\" class=\"global-link-item\">\n                            <a #mobileGlobalLinkTitle class=\"nav-link primary-global-link dropdown-toggle\"\n                               ngbDropdownToggle>\n                                <scrm-image class=\"global-action-icon sicon-2x\" image=\"user\"></scrm-image>\n                            </a>\n                            <div [style.min-width.px]=\"mobileGlobalLinkTitle.offsetWidth\"\n                                 aria-labelledby=\"navbarDropdownMenuLink\"\n                                 class=\"dropdown-menu global-links-dropdown border shadow-sm-2\" ngbDropdownMenu>\n                                <span\n                                    class=\"global-user-name\">{{ navbar.currentUser.firstName }} {{ navbar.currentUser.lastName }}</span>\n                                <ng-template [ngIf]=\"navbar.globalActions\">\n                                    <ng-container\n                                        *ngFor=\"let globalAction of navbar.globalActions; let first = first; let last = last;\">\n                                        <a class=\"dropdown-item global-links-sublink\"\n                                           href=\"{{ globalAction.link.url }}\"\n                                           ngbDropdownItem\n                                           target=\"{{ globalAction.link.target }}\">{{ globalAction.link.label }}\n                                        </a>\n                                        <hr *ngIf=\"last === true || first === true\"/>\n                                    </ng-container>\n                                </ng-template>\n                                <scrm-logout-ui></scrm-logout-ui>\n                            </div>\n                        </li>\n                    </div>\n                </div>\n\n            </ul>\n\n        </ng-container>\n\n        <!-- End of mobile navigation section-->\n\n        <!-- Start of navbar section with data once authenticated -->\n\n        <ng-container *ngIf=\"this.isUserLoggedIn && !mobileNavbar\">\n            <nav class=\"navbar navbar-expand-md navbar-1\">\n                <div [ngbCollapse]=\"mainNavCollapse\" class=\"navbar-collapse collapse collapsenav\">\n                        <scrm-home-menu-item\n                            [active]=\"vm.appState.module && vm.appState.module === 'home'\"\n                            [route]=\"getHomePage()\"\n                        ></scrm-home-menu-item>\n\n                        <!-- Navbar with grouped tabs -->\n\n                        <ng-container *ngIf=\"vm.userPreferences['navigation_paradigm'] == 'gm'\">\n\n                            <ul class=\"navbar-nav grouped\">\n\n                                <ng-container *ngIf=\"navbar.current && navbar.current.isGroupedMenu\">\n                                    <li class=\"top-nav nav-item dropdown main-grouped\">\n                                        <scrm-grouped-menu-item\n                                                [item]=\"navbar.current\"\n                                                [subNavCollapse]=\"subNavCollapse\"\n                                        >\n                                        </scrm-grouped-menu-item>\n\n                                    </li>\n                                </ng-container>\n\n                                <li *ngIf=\"navbar.current && !navbar.current.isGroupedMenu\" class=\"top-nav nav-item dropdown non-grouped active\">\n                                    <scrm-menu-item [item]=\"navbar.current\"></scrm-menu-item>\n                                </li>\n\n                                <li *ngFor=\"let item of navbar.menu\" class=\"top-nav nav-item dropdown main-grouped\">\n                                    <scrm-grouped-menu-item\n                                        [item]=\"item\"\n                                        [subNavCollapse]=\"subNavCollapse\"\n                                    >\n                                    </scrm-grouped-menu-item>\n\n                                </li>\n                            </ul>\n\n                            <scrm-menu-items-list [items]=\"navbar.all.modules\"\n                                                  labelKey=\"LBL_TABGROUP_ALL\">\n                            </scrm-menu-items-list>\n\n                        </ng-container>\n\n\n                        <!-- END Navbar with grouped tabs -->\n\n                        <!-- Navbar with non-grouped tabs -->\n\n                        <ng-container *ngIf=\"vm.userPreferences['navigation_paradigm'] != 'gm'\">\n\n                            <ul class=\"navbar-nav\">\n                                <li *ngIf=\"navbar.current && !navbar.current.isGroupedMenu\" class=\"top-nav nav-item dropdown non-grouped active\">\n                                    <scrm-menu-item [item]=\"navbar.current\"></scrm-menu-item>\n                                </li>\n\n                                <ng-container *ngIf=\"navbar.current?.submenu  && navbar.current.isGroupedMenu\">\n                                    <li class=\"top-nav nav-item dropdown main-grouped\">\n                                        <scrm-grouped-menu-item\n                                            [item]=\"navbar.current\"\n                                            [subNavCollapse]=\"subNavCollapse\">\n                                        </scrm-grouped-menu-item>\n                                    </li>\n                                </ng-container>\n\n                                <li *ngFor=\"let item of navbar.menu\" class=\"top-nav nav-item dropdown non-grouped\">\n                                    <scrm-menu-item [item]=\"item\"></scrm-menu-item>\n                                </li>\n                            </ul>\n\n                        <scrm-menu-items-list [items]=\"navbar.all.modules\"\n                                              labelKey=\"LBL_MORE\">\n                        </scrm-menu-items-list>\n\n                        </ng-container>\n\n                        <!-- END Navbar with non-grouped tabs -->\n\n                </div>\n\n                <ng-container *ngTemplateOutlet=\"actionIcons\"></ng-container>\n\n                <!-- Global Links -->\n\n                <div class=\"global-links\" ngbDropdown>\n                    <ul class=\"navbar-nav\">\n                        <li class=\"global-link-item\">\n                            <a class=\"nav-link primary-global-link dropdown-toggle\" ngbDropdownToggle>\n                                <scrm-image class=\"global-action-icon sicon-2x\" image=\"user\"></scrm-image>\n                            </a>\n                            <div aria-labelledby=\"navbarDropdownMenuLink\"\n                                 class=\"dropdown-menu global-links-dropdown border shadow-sm-2 dropdown-menu-right\"\n                                 ngbDropdownMenu>\n                                <span\n                                    class=\"global-user-name\">{{ navbar.currentUser.firstName }} {{ navbar.currentUser.lastName }}</span>\n                                <ng-container *ngIf=\"navbar.globalActions\">\n                                    <ng-container\n                                        *ngFor=\"let globalAction of navbar.globalActions; let first = first; let last = last;\">\n                                        <a class=\"dropdown-item global-links-sublink\"\n                                           href=\"{{ globalAction.link.url }}\"\n                                           ngbDropdownItem\n                                           target=\"{{ globalAction.link.target }}\">{{ globalAction.link.label }}\n                                        </a>\n                                        <hr *ngIf=\"last === true || first === true\"/>\n                                    </ng-container>\n\n                                </ng-container>\n                                <scrm-logout-ui></scrm-logout-ui>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n\n                <!-- END Global Links -->\n\n            </nav>\n\n            <!-- End of navbar section with data once authenticated -->\n\n        </ng-container>\n    </ng-container>\n\n    <ng-template #actionIcons>\n        <div class=\"action-group navbar-action-group\">\n\n            <div class=\"action-new dropdown\">\n                <a class=\"action-link primary-global-link\" type=\"button\" aria-label=\"Quick Create\">\n                    <scrm-image class=\"action-btn-icon\" image=\"plus\"></scrm-image>\n                </a>\n                <ul [class.dropdown-menu-right]=\"!mobileNavbar\" class=\"dropdown-menu border shadow-sm-2\">\n\n                    <ng-container *ngIf=\"(navbar?.current?.module ?? '') && currentQuickActions.length\">\n                        <li class=\"new-list-item-header font-weight-bold\">\n                            <scrm-label labelKey=\"LBL_MODULE_NAME\" [module]=\"navbar.current.module\"></scrm-label>\n                        </li>\n                        <li class=\"new-list-item\" *ngFor=\"let moduleQuickAction of currentQuickActions\">\n                            <ng-container *ngIf=\"!moduleQuickAction.process\">\n                                <a [routerLink]=\"moduleQuickAction.url\" [queryParams]=\"moduleQuickAction?.params ?? null\" class=\"d-flex align-items-center\">\n                                    <scrm-label [labelKey]=\"moduleQuickAction.labelKey\" [module]=\"navbar.current.module\"></scrm-label>\n                                </a>\n                            </ng-container>\n                            <ng-container *ngIf=\"moduleQuickAction.process\">\n                                <a (click)=\"handleProcess(moduleQuickAction)\" class=\"d-flex align-items-center\">\n                                    <scrm-label [labelKey]=\"moduleQuickAction.labelKey\" [module]=\"navbar.current.module\"></scrm-label>\n                                </a>\n                            </ng-container>\n\n                        </li>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"(this?.navigation?.quickActions ?? []).length\">\n                        <li class=\"new-list-item-header font-weight-bold\">\n                            <scrm-label labelKey=\"LBL_QUICK_ACTIONS\"></scrm-label>\n                        </li>\n                        <li class=\"new-list-item\" *ngFor=\"let quickAction of (this?.navigation?.quickActions ?? [])\">\n                            <ng-container *ngIf=\"!quickAction.process\">\n                                <a [routerLink]=\"quickAction.url\" [queryParams]=\"quickAction?.params ?? null\" class=\"d-flex align-items-center\">\n                                    <scrm-label [labelKey]=\"quickAction.labelKey\" [module]=\"quickAction.module\"></scrm-label>\n                                </a>\n                            </ng-container>\n                            <ng-container *ngIf=\"quickAction.process\">\n                                <a (click)=\"handleProcess(quickAction)\" class=\"d-flex align-items-center\">\n                                    <scrm-label [labelKey]=\"quickAction.labelKey\" [module]=\"quickAction.module\"></scrm-label>\n                                </a>\n                            </ng-container>\n                        </li>\n                    </ng-container>\n                </ul>\n            </div>\n\n            <div class=\"d-flex align-items-center mx-1\">\n                <scrm-search-bar></scrm-search-bar>\n            </div>\n\n            <div\n                *ngIf=\"notificationsEnabled && checkAppStrings(vm.appStrings) && arePreferencesInitialized(vm.userPreferences)\"\n                class=\"action-alert dropdown\">\n                <a class=\"action-link primary-global-link\" type=\"button\" aria-label=\"Toggle Alerts\"\n                   (mouseenter)=\"markAsRead()\">\n                    <scrm-image class=\"action-btn-icon\" image=\"alert\"></scrm-image>\n                </a>\n                <ng-container *ngIf=\"(notificationCount$ | async) as notificationCount\">\n                            <span *ngIf=\"(notificationCount ?? false)\"\n                                  class=\"badge badge-position rounded-pill bg-danger text-white\">\n                                <ng-container *ngIf=\"notificationCount > 0\">{{notificationCount }}</ng-container>\n                            </span>\n                </ng-container>\n                <div class=\"dropdown-menu border shadow-sm-2 dropdown-menu-right\">\n                    <scrm-notifications></scrm-notifications>\n                </div>\n            </div>\n\n        </div>\n    </ng-template>\n\n</div>\n\n<!-- End of main navbar section -->\n" }]
    }], function () { return [{ type: i1.NavigationStore }, { type: i2.LanguageStore }, { type: i3.UserPreferenceStore }, { type: i4.SystemConfigStore }, { type: i5.AppStateStore }, { type: i6.AuthService }, { type: i7.ModuleNavigation }, { type: i8.ScreenSizeObserverService }, { type: i9.AsyncActionService }, { type: i10.NotificationStore }]; }, { mobileGlobalLinkTitle: [{
            type: ViewChild,
            args: ['mobileGlobalLinkTitle']
        }], onResize: [{
            type: HostListener,
            args: ['window:resize', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1uYXZiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvbmF2YmFyL2Jhc2UtbmF2YmFyL2Jhc2UtbmF2YmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL25hdmJhci9iYXNlLW5hdmJhci9iYXNlLW5hdmJhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFnQixTQUFTLEVBQWMsWUFBWSxFQUFxQixTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDL0csT0FBTyxFQUFDLGlCQUFpQixFQUFjLEVBQUUsRUFBZSxNQUFNLE1BQU0sQ0FBQztBQUNyRSxPQUFPLEVBQUMsR0FBRyxFQUFFLElBQUksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRXpDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RSxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sWUFBWSxDQUFDO0FBQ2xDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDRFQUE0RSxDQUFDO0FBSTVHLE9BQU8sRUFDSCxVQUFVLEVBRWIsTUFBTSx3RUFBd0UsQ0FBQztBQUNoRixPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sc0VBQXNFLENBQUM7QUFHcEcsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNEVBQTRFLENBQUM7QUFHNUcsT0FBTyxFQUFXLEtBQUssRUFBQyxNQUFNLFFBQVEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2IvQiw4QkFBcUMsYUFBQSxZQUFBLFlBQUE7SUFHSSx1QkFDN0I7SUFBQSxpQkFBSyxFQUFBLEVBQUEsRUFBQTs7O0lBV2pCLDZCQUEyQztJQUN2Qyw4QkFBOEIsY0FBQSxZQUFBLGFBQUE7SUFJZCwrQkFBNkI7SUFDakMsaUJBQUssRUFBQSxFQUFBLEVBQUE7SUFJckIsMEJBQWU7OztJQWVLLDZCQUFrRTtJQUM5RCx1Q0FNbUI7SUFDdkIsMEJBQWU7Ozs7OztJQVBPLGVBQTBCO0lBQTFCLGdEQUEwQixtQ0FBQSw4QkFBQSxzRUFBQSwwQ0FBQTs7O0lBWXhELHdCQUE2RDs7O0lBb0J6QyxxQkFBNkM7OztJQVBqRCw2QkFDMkY7SUFDdkYsNkJBRzJDO0lBQUEsWUFDM0M7SUFBQSxpQkFBSTtJQUNKLG9JQUE2QztJQUNqRCwwQkFBZTs7Ozs7SUFMUixlQUFrQztJQUFsQyw2RUFBa0M7SUFFbEMsZ0VBQXVDO0lBQUMsZUFDM0M7SUFEMkMsMkRBQzNDO0lBQ0ssZUFBcUM7SUFBckMsOERBQXFDOzs7SUFQOUMsMElBUWU7OztJQVBjLHNEQUF5Qjs7OztJQXBDbEYsNkJBQTBEO0lBQ3RELDhCQUFpRCxrQkFBQSxpQkFBQTtJQUtqQyxpQ0FBNEU7SUFDaEYsaUJBQVM7SUFDVCwrQkFBd0U7SUFDcEUsMEhBUWU7SUFDbkIsaUJBQU0sRUFBQTtJQUdkLCtCQUF1QztJQUNuQywySEFBNkQ7SUFDN0QsZ0NBQXNDLGNBQUE7SUFDOUIsd0xBQVMsZUFBQSxXQUFjLENBQUEsSUFBQztJQUN4QixrQ0FDcUI7SUFDakIsa0NBQTBFO0lBQzlFLGlCQUFJO0lBQ0osZ0NBRW9GLGdCQUFBO0lBRW5ELGFBQW9FO0lBQUEsaUJBQU87SUFDeEcsMEhBVWM7SUFDZCxrQ0FBaUM7SUFDckMsaUJBQU0sRUFBQSxFQUFBLEVBQUEsRUFBQTtJQU8xQiwwQkFBZTs7Ozs7O0lBbkRvQixlQUFtQjtJQUFuQixpQ0FBbUI7SUFNakMsZUFBZ0I7SUFBaEIsMENBQWdCO0lBQ0YsZUFBaUQ7SUFBakQsdUZBQWlEO0lBYXpELGVBQTZCO0lBQTdCLHNDQUE2QjtJQU8vQixlQUF3RDtJQUF4RCxtREFBd0Q7SUFJNUIsZUFBb0U7SUFBcEUsMkdBQW9FO0lBQ3BGLGVBQTZCO0lBQTdCLGtEQUE2Qjs7O0lBdUMxQyw2QkFBcUU7SUFDakUsOEJBQW1EO0lBQy9DLDZDQUl5QjtJQUU3QixpQkFBSztJQUNULDBCQUFlOzs7SUFOQyxlQUF1QjtJQUF2Qiw2Q0FBdUIsMENBQUE7OztJQVF2Qyw4QkFBaUg7SUFDN0cscUNBQXlEO0lBQzdELGlCQUFLOzs7SUFEZSxlQUF1QjtJQUF2Qiw2Q0FBdUI7OztJQUczQyw4QkFBb0Y7SUFDaEYsNkNBSXlCO0lBRTdCLGlCQUFLOzs7O0lBTEcsZUFBYTtJQUFiLCtCQUFhLDBDQUFBOzs7SUFyQjdCLDZCQUF3RTtJQUVwRSw4QkFBK0I7SUFFM0IseUlBU2U7SUFFZixzSEFFSztJQUVMLHNIQU9LO0lBQ1QsaUJBQUs7SUFFTCwyQ0FFdUI7SUFFM0IsMEJBQWU7OztJQTdCUSxlQUFvRDtJQUFwRCxxRkFBb0Q7SUFXOUQsZUFBcUQ7SUFBckQsc0ZBQXFEO0lBSXJDLGVBQWM7SUFBZCw2Q0FBYztJQVVqQixlQUE0QjtJQUE1QixrREFBNEI7OztJQWM5Qyw4QkFBaUg7SUFDN0cscUNBQXlEO0lBQzdELGlCQUFLOzs7SUFEZSxlQUF1QjtJQUF2Qiw2Q0FBdUI7OztJQUczQyw2QkFBK0U7SUFDM0UsOEJBQW1EO0lBQy9DLDZDQUd5QjtJQUM3QixpQkFBSztJQUNULDBCQUFlOzs7SUFKSCxlQUF1QjtJQUF2Qiw2Q0FBdUIsMENBQUE7OztJQU1uQyw4QkFBbUY7SUFDL0UscUNBQStDO0lBQ25ELGlCQUFLOzs7SUFEZSxlQUFhO0lBQWIsK0JBQWE7OztJQWpCekMsNkJBQXdFO0lBRXBFLDZCQUF1QjtJQUNuQixzSEFFSztJQUVMLHlJQU9lO0lBRWYsc0hBRUs7SUFDVCxpQkFBSztJQUVULDJDQUV1QjtJQUV2QiwwQkFBZTs7O0lBdEJGLGVBQXFEO0lBQXJELHNGQUFxRDtJQUkzQyxlQUE4RDtJQUE5RCx1SUFBOEQ7SUFTeEQsZUFBYztJQUFkLDZDQUFjO0lBS3JCLGVBQTRCO0lBQTVCLGtEQUE0Qjs7O0lBVTFELHdCQUE2RDs7O0lBdUJyQyxxQkFBNkM7OztJQVBqRCw2QkFDMkY7SUFDdkYsNkJBRzJDO0lBQUEsWUFDM0M7SUFBQSxpQkFBSTtJQUNKLHFJQUE2QztJQUNqRCwwQkFBZTs7Ozs7SUFMUixlQUFrQztJQUFsQyw2RUFBa0M7SUFFbEMsZ0VBQXVDO0lBQUMsZUFDM0M7SUFEMkMsMkRBQzNDO0lBQ0ssZUFBcUM7SUFBckMsOERBQXFDOzs7SUFSbEQsNkJBQTJDO0lBQ3ZDLDJJQVFlO0lBRW5CLDBCQUFlOzs7SUFUa0IsZUFBeUI7SUFBekIsc0RBQXlCOzs7SUFsR2xGLDZCQUEyRDtJQUN2RCwrQkFBOEMsY0FBQTtJQUVsQywwQ0FHdUI7SUFJdkIsMEhBaUNlO0lBT2YsMEhBeUJlO0lBSXZCLGlCQUFNO0lBRU4sMkhBQTZEO0lBSTdELCtCQUFzQyxZQUFBLGFBQUEsYUFBQTtJQUl0QixrQ0FBMEU7SUFDOUUsaUJBQUk7SUFDSixnQ0FFcUIsZ0JBQUE7SUFFWSxhQUFvRTtJQUFBLGlCQUFPO0lBQ3hHLDRIQVdlO0lBQ2Ysa0NBQWlDO0lBQ3JDLGlCQUFNLEVBQUEsRUFBQSxFQUFBLEVBQUE7SUFXMUIsMEJBQWU7Ozs7O0lBdEhGLGVBQStCO0lBQS9CLG9EQUErQjtJQUV4QixlQUE4RDtJQUE5RCxrRkFBOEQsK0JBQUE7SUFNbkQsZUFBdUQ7SUFBdkQsMkVBQXVEO0lBd0N2RCxlQUF1RDtJQUF2RCwyRUFBdUQ7SUErQi9ELGVBQTZCO0lBQTdCLHNDQUE2QjtJQWNDLGVBQW9FO0lBQXBFLDJHQUFvRTtJQUNsRixlQUEwQjtJQUExQixrREFBMEI7OztJQTVLckUsNkJBQTZCO0lBQ3pCLDJHQVVlO0lBTWYsNEdBcURlO0lBTWYsNEdBd0hlO0lBQ25CLDBCQUFlOzs7SUFwTUksZUFBMEI7SUFBMUIsNkNBQTBCO0lBZ0IxQixlQUF5QztJQUF6QyxtRUFBeUM7SUEyRHpDLGVBQTBDO0lBQTFDLG9FQUEwQzs7O0lBeUlyQyw2QkFBaUQ7SUFDN0MsNkJBQTRIO0lBQ3hILGlDQUFrRztJQUN0RyxpQkFBSTtJQUNSLDBCQUFlOzs7OztJQUhSLGVBQW9DO0lBQXBDLHNEQUFvQyxtSkFBQTtJQUN2QixlQUF1QztJQUF2Qyx5REFBdUMseUNBQUE7Ozs7SUFHM0QsNkJBQWdEO0lBQzVDLDZCQUFnRjtJQUE3RSwyUUFBUyxlQUFBLDRDQUFnQyxDQUFBLElBQUM7SUFDekMsaUNBQWtHO0lBQ3RHLGlCQUFJO0lBQ1IsMEJBQWU7Ozs7SUFGSyxlQUF1QztJQUF2Qyx5REFBdUMseUNBQUE7OztJQVIvRCw4QkFBZ0Y7SUFDNUUsOEhBSWU7SUFDZiw4SEFJZTtJQUVuQixpQkFBSzs7O0lBWGMsZUFBZ0M7SUFBaEMscURBQWdDO0lBS2hDLGVBQStCO0lBQS9CLG9EQUErQjs7O0lBVnRELDZCQUFvRjtJQUNoRiw4QkFBa0Q7SUFDOUMsaUNBQXFGO0lBQ3pGLGlCQUFLO0lBQ0wsc0dBWUs7SUFDVCwwQkFBZTs7O0lBZmdDLGVBQWdDO0lBQWhDLHNEQUFnQztJQUVuQixlQUFzQjtJQUF0QixxREFBc0I7OztJQW9CMUUsNkJBQTJDO0lBQ3ZDLDZCQUFnSDtJQUM1RyxpQ0FBeUY7SUFDN0YsaUJBQUk7SUFDUiwwQkFBZTs7OztJQUhSLGVBQThCO0lBQTlCLGdEQUE4Qix1SUFBQTtJQUNqQixlQUFpQztJQUFqQyxtREFBaUMsa0NBQUE7Ozs7SUFHckQsNkJBQTBDO0lBQ3RDLDZCQUEwRTtJQUF2RSxxUUFBUyxlQUFBLHNDQUEwQixDQUFBLElBQUM7SUFDbkMsaUNBQXlGO0lBQzdGLGlCQUFJO0lBQ1IsMEJBQWU7OztJQUZLLGVBQWlDO0lBQWpDLG1EQUFpQyxrQ0FBQTs7O0lBUnpELDhCQUE2RjtJQUN6Riw4SEFJZTtJQUNmLDhIQUllO0lBQ25CLGlCQUFLOzs7SUFWYyxlQUEwQjtJQUExQiwrQ0FBMEI7SUFLMUIsZUFBeUI7SUFBekIsOENBQXlCOzs7O0lBVmhELDZCQUFvRTtJQUNoRSw4QkFBa0Q7SUFDOUMsaUNBQXNEO0lBQzFELGlCQUFLO0lBQ0wsc0dBV0s7SUFDVCwwQkFBZTs7OztJQVp1QyxlQUF5QztJQUF6QywyTUFBeUM7OztJQThCbkYsNkJBQTRDO0lBQUEsWUFBc0I7SUFBQSwwQkFBZTs7O0lBQXJDLGVBQXNCO0lBQXRCLDJDQUFzQjs7O0lBRnRFLGdDQUNxRTtJQUNqRSxzSUFBaUY7SUFDckYsaUJBQU87OztJQURZLGVBQTJCO0lBQTNCLGdEQUEyQjs7O0lBSDFELDZCQUF3RTtJQUM1RCxnSEFHTztJQUNuQiwwQkFBZTs7OztJQUpJLGVBQWtDO0lBQWxDLDRHQUFrQzs7OztJQVJ6RCwrQkFFa0MsWUFBQTtJQUUzQiw0TEFBYyxlQUFBLG9CQUFZLENBQUEsSUFBQztJQUMxQixpQ0FBK0Q7SUFDbkUsaUJBQUk7SUFDSixnSEFLZTs7SUFDZiwrQkFBa0U7SUFDOUQscUNBQXlDO0lBQzdDLGlCQUFNLEVBQUE7OztJQVJTLGVBQW1DO0lBQW5DLHVFQUFtQzs7O0lBMUQxRCwrQkFBOEMsY0FBQSxZQUFBO0lBSWxDLGlDQUE4RDtJQUNsRSxpQkFBSTtJQUNKLDhCQUF5RjtJQUVyRiwwR0FpQmU7SUFFZiwwR0FnQmU7SUFDbkIsaUJBQUssRUFBQTtJQUdULCtCQUE0QztJQUN4QyxrQ0FBbUM7SUFDdkMsaUJBQU07SUFFTix5RkFnQk07SUFFVixpQkFBTTs7Ozs7O0lBL0RNLGVBQTJDO0lBQTNDLDJEQUEyQztJQUU1QixlQUFtRTtJQUFuRSw2TkFBbUU7SUFtQm5FLGVBQW1EO0lBQW5ELDhNQUFtRDtJQXlCckUsZUFBNkc7SUFBN0cseUpBQTZHOzs7SUEvUTlILDhCQUE2RDtJQUl6RCwwRkFTYztJQU1kLDRGQXFNZTtJQUVmLDRIQXVFYztJQUVsQixpQkFBTTs7O0lBL1JXLGVBQWdCO0lBQWhCLHFDQUFnQjtJQWVkLGVBQVk7SUFBWixvQ0FBWTs7QURHL0IsTUFZYSxtQkFBbUI7SUF3Q2Q7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUEvQ3NCLHFCQUFxQixDQUFhO0lBRTVELE1BQU0sQ0FBQyxTQUFTLEdBQTBCLEVBQUUsQ0FBQztJQUV2RCxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ2QsY0FBYyxDQUFVO0lBRXhCLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDdkIsY0FBYyxHQUFHLElBQUksQ0FBQztJQUN0QixZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDckIsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUNqQixXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQ25CLE9BQU8sR0FBUSxFQUFFLENBQUM7SUFDbEIsZ0JBQWdCLENBQW9CO0lBQ3BDLGdCQUFnQixDQUFvQjtJQUNwQyxjQUFjLENBQWtCO0lBQ2hDLE1BQU0sQ0FBYztJQUNwQixPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQ1osTUFBTSxHQUFlLFVBQVUsQ0FBQyxNQUFNLENBQUM7SUFDdkMsb0JBQW9CLEdBQVksS0FBSyxDQUFDO0lBQ3RDLElBQUksR0FBbUIsRUFBRSxDQUFBO0lBQ3pCLFVBQVUsQ0FBYTtJQUV2QixtQkFBbUIsQ0FBaUI7SUFFcEMsVUFBVSxDQUErQjtJQUN6QyxnQkFBZ0IsQ0FBaUM7SUFDakQsWUFBWSxDQUFtQjtJQUMvQixTQUFTLENBQXdCO0lBQ2pDLFdBQVcsQ0FBMEI7SUFDckMsY0FBYyxDQUFTO0lBRXZCLGtCQUFrQixDQUFzQjtJQUV4QyxHQUFHLENBQW1CO0lBRXRCLFlBQ2MsZUFBZ0MsRUFDaEMsYUFBNEIsRUFDNUIsbUJBQXdDLEVBQ3hDLGlCQUFvQyxFQUNwQyxRQUF1QixFQUN2QixXQUF3QixFQUN4QixnQkFBa0MsRUFDbEMsVUFBcUMsRUFDckMsa0JBQXNDLEVBQ3RDLGlCQUFvQztRQVRwQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGFBQVEsR0FBUixRQUFRLENBQWU7UUFDdkIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxlQUFVLEdBQVYsVUFBVSxDQUEyQjtRQUNyQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFFOUMsTUFBTSxTQUFTLEdBQUcsaUJBQWlCLElBQUksRUFBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQVEsQ0FBQztRQUN4RixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFFbEcsSUFBSSxDQUFDLFVBQVUsR0FBRyxhQUFhLEVBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFDLFVBQVUsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxjQUFjLEVBQUUsRUFBRSxFQUFRLENBQUMsQ0FBQztRQUN4RyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsbUJBQW1CLEVBQUUsZ0JBQWdCLElBQUksRUFBRSxDQUFDLEVBQVMsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxFQUFFLFlBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLEVBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQVEsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxXQUFXLEdBQUcsZUFBZSxFQUFFLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsRUFBRSxFQUFRLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsaUJBQWlCLEVBQUUseUJBQXlCLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWhGLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQzVCLGlCQUFpQixDQUNiLElBQUksQ0FBQyxnQkFBZ0IsRUFDckIsSUFBSSxDQUFDLFlBQVksRUFDakIsSUFBSSxDQUFDLFNBQVMsRUFDZCxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FDbEIsRUFDRCxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLEVBQUUsRUFBRTtZQUUvRSxJQUFJLFVBQVUsRUFBRTtnQkFDWixJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQzthQUM1QjtZQUVELElBQUksVUFBVSxJQUFJLFVBQVUsQ0FBQyxPQUFPLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO2FBQ2hDO1lBRUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBRWxDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFFN0MsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ3hCLElBQUksS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLFdBQVcsQ0FBQyxDQUFDLEVBQUU7b0JBQzdHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUNiLFVBQVUsRUFDVixXQUFXLEVBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FDZixDQUFDO2lCQUNMO2FBQ0o7WUFFRCxPQUFPO2dCQUNILFVBQVU7Z0JBQ1YsZUFBZTtnQkFDZixRQUFRO2dCQUNSLFVBQVUsRUFBRSxRQUFRLEVBQUUsVUFBVSxJQUFJLEVBQUU7Z0JBQ3RDLGNBQWMsRUFBRSxRQUFRLEVBQUUsY0FBYyxJQUFJLEVBQUU7YUFDakQsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUNMLENBQUM7SUFDTixDQUFDO0lBRUQ7O09BRUc7SUFHSCxRQUFRLENBQUMsS0FBVTtRQUNmLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQzNDLElBQUksQ0FBQyxZQUFZLEdBQUcsVUFBVSxJQUFJLEdBQUcsQ0FBQztJQUMxQyxDQUFDO0lBRUQsUUFBUTtRQUNKLE1BQU0sTUFBTSxHQUFHLElBQUksY0FBYyxDQUM3QixJQUFJLENBQUMsY0FBYyxFQUNuQixJQUFJLENBQUMsZ0JBQWdCLEVBQ3JCLElBQUksQ0FBQyxtQkFBbUIsRUFDeEIsSUFBSSxDQUFDLGFBQWEsRUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FDaEIsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzlDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBRTFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUseUJBQXlCLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXJGLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLHFCQUFxQixJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFO1lBQ3pHLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxvQkFBb0IsQ0FBQztRQUNyRCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxlQUFlLENBQUMsVUFBVTtRQUN0QixPQUFPLFVBQVUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELHlCQUF5QixDQUFDLFdBQThCO1FBQ3BELE9BQU8sV0FBVyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQzFELENBQUM7SUFFRCxVQUFVO1FBQ04sSUFBSSxDQUFDLGlCQUFpQixFQUFFLHVCQUF1QixFQUFFLENBQUM7SUFDdEQsQ0FBQztJQUVELGVBQWU7UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUU7WUFDeEQsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQztJQUM5RSxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxZQUFZLENBQUMsS0FBWSxFQUFFLEtBQWlCO1FBQy9DLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7T0FFRztJQUNJLFdBQVc7UUFDZCxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN2QyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLFdBQVc7UUFDZCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBRU0sZ0JBQWdCLENBQUMsTUFBTTtRQUMxQixPQUFPLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRUQ7O09BRUc7SUFFSDs7OztPQUlHO0lBQ08sU0FBUyxDQUFDLE1BQW1CO1FBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7OztPQUlHO0lBQ08sUUFBUTtRQUNkLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRVMsZ0JBQWdCLENBQUMsVUFBc0I7UUFDN0MsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLGNBQWMsRUFBRSxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDbEYsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLE9BQU8sRUFBRTtZQUV4QixJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxVQUFVLEVBQUUsT0FBTyxJQUFJLFVBQVUsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLEVBQUU7Z0JBQ25FLE9BQU8sR0FBRyxVQUFVLEVBQUUsT0FBTyxDQUFDO2FBQ2pDO1lBRUQsSUFBSSxPQUFPLEVBQUU7Z0JBQ1QsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7YUFDMUI7U0FDSjtJQUNMLENBQUM7SUFFRCxxQkFBcUIsQ0FBQyxNQUFjO1FBQ2hDLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDO1FBQ25FLE1BQU0sb0JBQW9CLEdBQUcsZ0JBQWdCLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUMxRCxJQUFJLGdCQUFnQixLQUFLLElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBRTtZQUMzRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxDQUFDO1NBQ2pDO1FBRUQsTUFBTSxPQUFPLEdBQUcsRUFBb0IsQ0FBQztRQUVyQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFO2dCQUNsQyxPQUFPO2FBQ1Y7WUFFRCxNQUFNLEdBQUcsR0FBRyxLQUFLLEVBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQztZQUU3QixPQUFPLENBQUMsSUFBSSxDQUFDO2dCQUNULEdBQUcsS0FBSztnQkFDUixHQUFHLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO2FBQ2YsQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLG1CQUFtQixHQUFHLE9BQU8sQ0FBQztJQUN2QyxDQUFDO0lBRUQsYUFBYSxDQUFDLE1BQW9CO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQ2pCLE9BQU87U0FDVjtRQUVELE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFFbkMsTUFBTSxPQUFPLEdBQUc7WUFDWixNQUFNLEVBQUUsV0FBVztZQUNuQixNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU07U0FDSixDQUFDO1FBRXRCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNoRixDQUFDOzZFQWxSUSxtQkFBbUI7NkRBQW5CLG1CQUFtQjs7Ozs7OzRHQUFuQixvQkFBZ0I7O1lDbEM3QixvRUFtU007OztZQW5TQSxvREFBb0I7OGZEMEJWO2dCQUNSLE9BQU8sQ0FBQyxlQUFlLEVBQUU7b0JBQ3JCLFVBQVUsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLE1BQU0sRUFBRTt3QkFDdEMsTUFBTSxFQUFFLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFDO3FCQUNsQyxDQUFDLENBQUM7aUJBQ04sQ0FBQzthQUNMOztTQUVRLG1CQUFtQjt1RkFBbkIsbUJBQW1CO2NBWi9CLFNBQVM7MkJBQ0ksa0JBQWtCLGNBR2hCO29CQUNSLE9BQU8sQ0FBQyxlQUFlLEVBQUU7d0JBQ3JCLFVBQVUsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLE1BQU0sRUFBRTs0QkFDdEMsTUFBTSxFQUFFLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFDO3lCQUNsQyxDQUFDLENBQUM7cUJBQ04sQ0FBQztpQkFDTDsrVkFJbUMscUJBQXFCO2tCQUF4RCxTQUFTO21CQUFDLHVCQUF1QjtZQThHbEMsUUFBUTtrQkFEUCxZQUFZO21CQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2NvbWJpbmVMYXRlc3RXaXRoLCBPYnNlcnZhYmxlLCBvZiwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7bWFwLCB0YWtlfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge05hdmJhck1vZGVsfSBmcm9tICcuLi9uYXZiYXItbW9kZWwnO1xuaW1wb3J0IHtOYXZiYXJBYnN0cmFjdH0gZnJvbSAnLi4vbmF2YmFyLmFic3RyYWN0JztcbmltcG9ydCB7dHJhbnNpdGlvbiwgdHJpZ2dlciwgdXNlQW5pbWF0aW9ufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7ZmFkZUlufSBmcm9tICduZy1hbmltYXRlJztcbmltcG9ydCB7QWN0aW9uTmFtZU1hcHBlcn0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbmF2aWdhdGlvbi9hY3Rpb24tbmFtZS1tYXBwZXIvYWN0aW9uLW5hbWUtbWFwcGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtTeXN0ZW1Db25maWdTdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvc3lzdGVtLWNvbmZpZy9zeXN0ZW0tY29uZmlnLnN0b3JlJztcbmltcG9ydCB7TW9kdWxlQWN0aW9uLCBOYXZpZ2F0aW9uLCBOYXZpZ2F0aW9uU3RvcmV9IGZyb20gJy4uLy4uLy4uL3N0b3JlL25hdmlnYXRpb24vbmF2aWdhdGlvbi5zdG9yZSc7XG5pbXBvcnQge1VzZXJQcmVmZXJlbmNlTWFwLCBVc2VyUHJlZmVyZW5jZVN0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS91c2VyLXByZWZlcmVuY2UvdXNlci1wcmVmZXJlbmNlLnN0b3JlJztcbmltcG9ydCB7XG4gICAgU2NyZWVuU2l6ZSxcbiAgICBTY3JlZW5TaXplT2JzZXJ2ZXJTZXJ2aWNlXG59IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3VpL3NjcmVlbi1zaXplLW9ic2VydmVyL3NjcmVlbi1zaXplLW9ic2VydmVyLnNlcnZpY2UnO1xuaW1wb3J0IHtSb3V0ZUNvbnZlcnRlcn0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbmF2aWdhdGlvbi9yb3V0ZS1jb252ZXJ0ZXIvcm91dGUtY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtMYW5ndWFnZVN0b3JlLCBMYW5ndWFnZVN0cmluZ3N9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2xhbmd1YWdlL2xhbmd1YWdlLnN0b3JlJztcbmltcG9ydCB7TW9kdWxlTmF2aWdhdGlvbn0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbmF2aWdhdGlvbi9tb2R1bGUtbmF2aWdhdGlvbi9tb2R1bGUtbmF2aWdhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7TW9kdWxlTmFtZU1hcHBlcn0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbmF2aWdhdGlvbi9tb2R1bGUtbmFtZS1tYXBwZXIvbW9kdWxlLW5hbWUtbWFwcGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtBcHBTdGF0ZSwgQXBwU3RhdGVTdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvYXBwLXN0YXRlL2FwcC1zdGF0ZS5zdG9yZSc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9hdXRoL2F1dGguc2VydmljZSc7XG5pbXBvcnQge01lbnVJdGVtLCByZWFkeX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7QXN5bmNBY3Rpb25JbnB1dCwgQXN5bmNBY3Rpb25TZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9wcm9jZXNzL3Byb2Nlc3Nlcy9hc3luYy1hY3Rpb24vYXN5bmMtYWN0aW9uJztcbmltcG9ydCB7Tm90aWZpY2F0aW9uU3RvcmV9IGZyb20gXCIuLi8uLi8uLi9zdG9yZS9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLnN0b3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1iYXNlLW5hdmJhcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Jhc2UtbmF2YmFyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtdLFxuICAgIGFuaW1hdGlvbnM6IFtcbiAgICAgICAgdHJpZ2dlcignbW9iaWxlTmF2RmFkZScsIFtcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIHVzZUFuaW1hdGlvbihmYWRlSW4sIHtcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHt0aW1pbmc6IDAuNSwgZGVsYXk6IDB9XG4gICAgICAgICAgICB9KSksXG4gICAgICAgIF0pXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBCYXNlTmF2YmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuXG4gICAgQFZpZXdDaGlsZCgnbW9iaWxlR2xvYmFsTGlua1RpdGxlJykgbW9iaWxlR2xvYmFsTGlua1RpdGxlOiBFbGVtZW50UmVmO1xuXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBpbnN0YW5jZXM6IEJhc2VOYXZiYXJDb21wb25lbnRbXSA9IFtdO1xuXG4gICAgbG9hZGVkID0gdHJ1ZTtcbiAgICBpc1VzZXJMb2dnZWRJbjogYm9vbGVhbjtcblxuICAgIG1haW5OYXZDb2xsYXBzZSA9IHRydWU7XG4gICAgc3ViTmF2Q29sbGFwc2UgPSB0cnVlO1xuICAgIG1vYmlsZU5hdmJhciA9IGZhbHNlO1xuICAgIG1vYmlsZVN1Yk5hdiA9IGZhbHNlO1xuICAgIGJhY2tMaW5rID0gZmFsc2U7XG4gICAgbWFpbk5hdkxpbmsgPSB0cnVlO1xuICAgIHN1Ym1lbnU6IGFueSA9IFtdO1xuICAgIG1vZHVsZU5hbWVNYXBwZXIhOiBNb2R1bGVOYW1lTWFwcGVyO1xuICAgIGFjdGlvbk5hbWVNYXBwZXIhOiBBY3Rpb25OYW1lTWFwcGVyO1xuICAgIHJvdXRlQ29udmVydGVyITogUm91dGVDb252ZXJ0ZXI7XG4gICAgbmF2YmFyOiBOYXZiYXJNb2RlbDtcbiAgICBtYXhUYWJzID0gODtcbiAgICBzY3JlZW46IFNjcmVlblNpemUgPSBTY3JlZW5TaXplLk1lZGl1bTtcbiAgICBub3RpZmljYXRpb25zRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW11cbiAgICBuYXZpZ2F0aW9uOiBOYXZpZ2F0aW9uO1xuXG4gICAgY3VycmVudFF1aWNrQWN0aW9uczogTW9kdWxlQWN0aW9uW107XG5cbiAgICBsYW5ndWFnZXMkITogT2JzZXJ2YWJsZTxMYW5ndWFnZVN0cmluZ3M+O1xuICAgIHVzZXJQcmVmZXJlbmNlcyQhOiBPYnNlcnZhYmxlPFVzZXJQcmVmZXJlbmNlTWFwPjtcbiAgICBjdXJyZW50VXNlciQhOiBPYnNlcnZhYmxlPGFueT47XG4gICAgYXBwU3RhdGUkITogT2JzZXJ2YWJsZTxBcHBTdGF0ZT47XG4gICAgbmF2aWdhdGlvbiQhOiBPYnNlcnZhYmxlPE5hdmlnYXRpb24+O1xuICAgIGRyb3Bkb3duTGVuZ3RoOiBudW1iZXI7XG5cbiAgICBub3RpZmljYXRpb25Db3VudCQhOiBPYnNlcnZhYmxlPG51bWJlcj47XG5cbiAgICB2bSQhOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIG5hdmlnYXRpb25TdG9yZTogTmF2aWdhdGlvblN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2VTdG9yZTogTGFuZ3VhZ2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHVzZXJQcmVmZXJlbmNlU3RvcmU6IFVzZXJQcmVmZXJlbmNlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBzeXN0ZW1Db25maWdTdG9yZTogU3lzdGVtQ29uZmlnU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBhcHBTdGF0ZTogQXBwU3RhdGVTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIG1vZHVsZU5hdmlnYXRpb246IE1vZHVsZU5hdmlnYXRpb24sXG4gICAgICAgIHByb3RlY3RlZCBzY3JlZW5TaXplOiBTY3JlZW5TaXplT2JzZXJ2ZXJTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgYXN5bmNBY3Rpb25TZXJ2aWNlOiBBc3luY0FjdGlvblNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBub3RpZmljYXRpb25TdG9yZTogTm90aWZpY2F0aW9uU3RvcmVcbiAgICApIHtcbiAgICAgICAgY29uc3Qgc3lzQ29uZmlnID0gc3lzdGVtQ29uZmlnU3RvcmUgPz8ge2NvbmZpZ3MkOiBvZih7fSksIGdldENvbmZpZzogKCkgPT4gbnVsbH0gYXMgYW55O1xuICAgICAgICB0aGlzLm1vZHVsZU5hbWVNYXBwZXIgPSBuZXcgTW9kdWxlTmFtZU1hcHBlcihzeXNDb25maWcpO1xuICAgICAgICB0aGlzLmFjdGlvbk5hbWVNYXBwZXIgPSBuZXcgQWN0aW9uTmFtZU1hcHBlcihzeXNDb25maWcpO1xuICAgICAgICB0aGlzLnJvdXRlQ29udmVydGVyID0gbmV3IFJvdXRlQ29udmVydGVyKHRoaXMubW9kdWxlTmFtZU1hcHBlciwgdGhpcy5hY3Rpb25OYW1lTWFwcGVyLCBzeXNDb25maWcpO1xuXG4gICAgICAgIHRoaXMubGFuZ3VhZ2VzJCA9IGxhbmd1YWdlU3RvcmU/LnZtJCA/PyBvZih7YXBwU3RyaW5nczoge30sIG1vZFN0cmluZ3M6IHt9LCBhcHBMaXN0U3RyaW5nczoge319IGFzIGFueSk7XG4gICAgICAgIHRoaXMudXNlclByZWZlcmVuY2VzJCA9IHVzZXJQcmVmZXJlbmNlU3RvcmU/LnVzZXJQcmVmZXJlbmNlcyQgPz8gb2Yoe30gYXMgYW55KTtcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlciQgPSBhdXRoU2VydmljZT8uY3VycmVudFVzZXIkID8/IG9mKG51bGwpO1xuICAgICAgICB0aGlzLmFwcFN0YXRlJCA9IGFwcFN0YXRlPy52bSQgPz8gb2Yoe21vZHVsZTogbnVsbH0gYXMgYW55KTtcbiAgICAgICAgdGhpcy5uYXZpZ2F0aW9uJCA9IG5hdmlnYXRpb25TdG9yZT8udm0kID8/IG9mKHttb2R1bGVzOiBbXX0gYXMgYW55KTtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25Db3VudCQgPSBub3RpZmljYXRpb25TdG9yZT8ubm90aWZpY2F0aW9uc1VucmVhZFRvdGFsJCA/PyBvZigwKTtcblxuICAgICAgICB0aGlzLnZtJCA9IHRoaXMubmF2aWdhdGlvbiQucGlwZShcbiAgICAgICAgICAgIGNvbWJpbmVMYXRlc3RXaXRoKFxuICAgICAgICAgICAgICAgIHRoaXMudXNlclByZWZlcmVuY2VzJCxcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VyJCxcbiAgICAgICAgICAgICAgICB0aGlzLmFwcFN0YXRlJCxcbiAgICAgICAgICAgICAgICB0aGlzLnNjcmVlblNpemUuc2NyZWVuU2l6ZSQsXG4gICAgICAgICAgICAgICAgdGhpcy5sYW5ndWFnZXMkLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIG1hcCgoW25hdmlnYXRpb24sIHVzZXJQcmVmZXJlbmNlcywgY3VycmVudFVzZXIsIGFwcFN0YXRlLCBzY3JlZW5TaXplLCBsYW5ndWFnZV0pID0+IHtcblxuICAgICAgICAgICAgICAgIGlmIChzY3JlZW5TaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NyZWVuID0gc2NyZWVuU2l6ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobmF2aWdhdGlvbiAmJiBuYXZpZ2F0aW9uLm1vZHVsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0aW9uID0gbmF2aWdhdGlvbjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZU1heFRhYnMobmF2aWdhdGlvbik7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmdldE1vZHVsZVF1aWNrQWN0aW9ucyhhcHBTdGF0ZT8ubW9kdWxlKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5hdmJhcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmJhci5yZXNldE1lbnUoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlYWR5KFtsYW5ndWFnZT8uYXBwU3RyaW5ncywgbGFuZ3VhZ2U/Lm1vZFN0cmluZ3MsIGxhbmd1YWdlPy5hcHBMaXN0U3RyaW5ncywgdXNlclByZWZlcmVuY2VzLCBjdXJyZW50VXNlcl0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmJhci5idWlsZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRVc2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF4VGFicyxcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uLFxuICAgICAgICAgICAgICAgICAgICB1c2VyUHJlZmVyZW5jZXMsXG4gICAgICAgICAgICAgICAgICAgIGFwcFN0YXRlLFxuICAgICAgICAgICAgICAgICAgICBhcHBTdHJpbmdzOiBsYW5ndWFnZT8uYXBwU3RyaW5ncyB8fCB7fSxcbiAgICAgICAgICAgICAgICAgICAgYXBwTGlzdFN0cmluZ3M6IGxhbmd1YWdlPy5hcHBMaXN0U3RyaW5ncyB8fCB7fVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBBUElcbiAgICAgKi9cblxuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxuICAgIG9uUmVzaXplKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaW5uZXJXaWR0aCA9IGV2ZW50LnRhcmdldC5pbm5lcldpZHRoO1xuICAgICAgICB0aGlzLm1vYmlsZU5hdmJhciA9IGlubmVyV2lkdGggPD0gNzY4O1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBuYXZiYXIgPSBuZXcgTmF2YmFyQWJzdHJhY3QoXG4gICAgICAgICAgICB0aGlzLnJvdXRlQ29udmVydGVyLFxuICAgICAgICAgICAgdGhpcy5tb2R1bGVOYXZpZ2F0aW9uLFxuICAgICAgICAgICAgdGhpcy51c2VyUHJlZmVyZW5jZVN0b3JlLFxuICAgICAgICAgICAgdGhpcy5sYW5ndWFnZVN0b3JlLFxuICAgICAgICAgICAgdGhpcy5hcHBTdGF0ZVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnNldE5hdmJhcihuYXZiYXIpO1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmlzVXNlckxvZ2dlZEluLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzVXNlckxvZ2dlZEluID0gdmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgncmVzaXplJykpO1xuXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uQ291bnQkID0gdGhpcy5ub3RpZmljYXRpb25TdG9yZT8ubm90aWZpY2F0aW9uc1VucmVhZFRvdGFsJCA/PyBvZigwKTtcblxuICAgICAgICB0aGlzLnN1YnMucHVzaCgodGhpcy5ub3RpZmljYXRpb25TdG9yZT8ubm90aWZpY2F0aW9uc0VuYWJsZWQkID8/IG9mKGZhbHNlKSkuc3Vic2NyaWJlKG5vdGlmaWNhdGlvbnNFbmFibGVkID0+IHtcbiAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uc0VuYWJsZWQgPSBub3RpZmljYXRpb25zRW5hYmxlZDtcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmlzVXNlckxvZ2dlZEluLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMuc3Vicy5mb3JFYWNoKHN1YiA9PiBzdWIudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxuXG4gICAgY2hlY2tBcHBTdHJpbmdzKGFwcFN0cmluZ3MpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGFwcFN0cmluZ3MgJiYgT2JqZWN0LmtleXMoYXBwU3RyaW5ncykubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICBhcmVQcmVmZXJlbmNlc0luaXRpYWxpemVkKHByZWZlcmVuY2VzOiBVc2VyUHJlZmVyZW5jZU1hcCkge1xuICAgICAgICByZXR1cm4gcHJlZmVyZW5jZXMgJiYgT2JqZWN0LmtleXMocHJlZmVyZW5jZXMpLmxlbmd0aDtcbiAgICB9XG5cbiAgICBtYXJrQXNSZWFkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblN0b3JlPy5tYXJrTm90aWZpY2F0aW9uc0FzUmVhZCgpO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLm1vYmlsZUdsb2JhbExpbmtUaXRsZT8ubmF0aXZlRWxlbWVudD8ub2Zmc2V0V2lkdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJvcGRvd25MZW5ndGggPSB0aGlzLm1vYmlsZUdsb2JhbExpbmtUaXRsZS5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHN1Ym5hdmlnYXRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCB0cmlnZ2VyZWRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gaXRlbXNcbiAgICAgKi9cbiAgICBwdWJsaWMgY2hhbmdlU3ViTmF2KGV2ZW50OiBFdmVudCwgaXRlbXM6IE1lbnVJdGVtW10pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tb2JpbGVTdWJOYXYgPSAhdGhpcy5tb2JpbGVTdWJOYXY7XG4gICAgICAgIHRoaXMuYmFja0xpbmsgPSAhdGhpcy5iYWNrTGluaztcbiAgICAgICAgdGhpcy5tYWluTmF2TGluayA9ICF0aGlzLm1haW5OYXZMaW5rO1xuICAgICAgICB0aGlzLnN1Ym1lbnUgPSBpdGVtcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgbGluayBmbGFnc1xuICAgICAqL1xuICAgIHB1YmxpYyBuYXZCYWNrTGluaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tb2JpbGVTdWJOYXYgPSAhdGhpcy5tb2JpbGVTdWJOYXY7XG4gICAgICAgIHRoaXMuYmFja0xpbmsgPSAhdGhpcy5iYWNrTGluaztcbiAgICAgICAgdGhpcy5tYWluTmF2TGluayA9ICF0aGlzLm1haW5OYXZMaW5rO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBob21lIHBhZ2VcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IGhvbWVwYWdlXG4gICAgICovXG4gICAgcHVibGljIGdldEhvbWVQYWdlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnN5c3RlbUNvbmZpZ1N0b3JlLmdldEhvbWVQYWdlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldENsb3NlQ2FsbEJhY2sobXlEcm9wKTogRnVuY3Rpb24ge1xuICAgICAgICByZXR1cm4gKCkgPT4gbXlEcm9wLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgQVBJXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBTZXQgbmF2YmFyIG1vZGVsXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbmF2YmFyIG1vZGVsXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHNldE5hdmJhcihuYXZiYXI6IE5hdmJhck1vZGVsKTogdm9pZCB7XG4gICAgICAgIHRoaXMubmF2YmFyID0gbmF2YmFyO1xuICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgaXMgbG9hZGVkXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7e2Jvb2xlYW59fSBpcyBsb2FkZWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaXNMb2FkZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvYWRlZDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY2FsY3VsYXRlTWF4VGFicyhuYXZpZ2F0aW9uOiBOYXZpZ2F0aW9uKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNpemVNYXAgPSB0aGlzLnN5c3RlbUNvbmZpZ1N0b3JlPy5nZXRDb25maWdWYWx1ZT8uKCduYXZpZ2F0aW9uX3RhYl9saW1pdHMnKTtcbiAgICAgICAgaWYgKHRoaXMuc2NyZWVuICYmIHNpemVNYXApIHtcblxuICAgICAgICAgICAgbGV0IG1heFRhYnMgPSBzaXplTWFwW3RoaXMuc2NyZWVuXTtcbiAgICAgICAgICAgIGlmICghbWF4VGFicyB8fCAobmF2aWdhdGlvbj8ubWF4VGFicyAmJiBuYXZpZ2F0aW9uLm1heFRhYnMgPCBtYXhUYWJzKSkge1xuICAgICAgICAgICAgICAgIG1heFRhYnMgPSBuYXZpZ2F0aW9uPy5tYXhUYWJzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobWF4VGFicykge1xuICAgICAgICAgICAgICAgIHRoaXMubWF4VGFicyA9IG1heFRhYnM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRNb2R1bGVRdWlja0FjdGlvbnMobW9kdWxlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbW9kdWxlTmF2aWdhdGlvbiA9IHRoaXM/Lm5hdmlnYXRpb24/Lm1vZHVsZXNbbW9kdWxlXSA/PyBudWxsO1xuICAgICAgICBjb25zdCBtb2R1bGVOYXZpZ2F0aW9uTWVudSA9IG1vZHVsZU5hdmlnYXRpb24/Lm1lbnUgPz8gW107XG4gICAgICAgIGlmIChtb2R1bGVOYXZpZ2F0aW9uID09PSBudWxsIHx8ICFtb2R1bGVOYXZpZ2F0aW9uTWVudS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFF1aWNrQWN0aW9ucyA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWN0aW9ucyA9IFtdIGFzIE1vZHVsZUFjdGlvbltdO1xuXG4gICAgICAgIG1vZHVsZU5hdmlnYXRpb25NZW51LmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICAgICAgaWYgKCFlbnRyeS51cmwgfHwgIWVudHJ5LnF1aWNrQWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBlbnRyeT8udXJsID8/ICcnO1xuXG4gICAgICAgICAgICBhY3Rpb25zLnB1c2goe1xuICAgICAgICAgICAgICAgIC4uLmVudHJ5LFxuICAgICAgICAgICAgICAgIHVybDogdXJsLnJlcGxhY2UoJy8jLycsICcvJylcbiAgICAgICAgICAgIH0gYXMgTW9kdWxlQWN0aW9uKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50UXVpY2tBY3Rpb25zID0gYWN0aW9ucztcbiAgICB9XG5cbiAgICBoYW5kbGVQcm9jZXNzKGFjdGlvbjogTW9kdWxlQWN0aW9uKSB7XG4gICAgICAgIGlmICghYWN0aW9uLnByb2Nlc3MpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByb2Nlc3NUeXBlID0gYWN0aW9uLnByb2Nlc3M7XG5cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGFjdGlvbjogcHJvY2Vzc1R5cGUsXG4gICAgICAgICAgICBtb2R1bGU6IGFjdGlvbi5tb2R1bGUsXG4gICAgICAgIH0gYXMgQXN5bmNBY3Rpb25JbnB1dDtcblxuICAgICAgICB0aGlzLmFzeW5jQWN0aW9uU2VydmljZS5ydW4ocHJvY2Vzc1R5cGUsIG9wdGlvbnMpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCk7XG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPCEtLSBTdGFydCBvZiBtYWluIG5hdmJhciBzZWN0aW9uIC0tPlxuXG48ZGl2ICpuZ0lmPVwiKHZtJCB8IGFzeW5jKSBhcyB2bVwiIGNsYXNzPVwidG9wLXBhbmVsIGZpeGVkLXRvcFwiPlxuXG4gICAgPCEtLSBTdGFydCBvZiBlbXB0eSBuYXZiYXIgc2VjdGlvbiB1bnRpbCBkYXRhIGlzIGxvYWRlZCAtLT5cblxuICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCIhbG9hZGVkXCI+XG4gICAgICAgIDxuYXYgY2xhc3M9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdmJhci1jb2xsYXBzZSBjb2xsYXBzZSBvcmRlci00IG9yZGVyLW1kLTAgY29sbGFwc2VuYXZcIj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXZiYXItbmF2XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInRvcC1uYXYgbmF2LWl0ZW1cIj4mbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8IS0tIEVuZCBvZiBlbXB0eSAgc2VjdGlvbiB1bnRpbCBkYXRhIGlzIGxvYWRlZCAtLT5cblxuICAgIDwhLS0gU3RhcnQgb2YgZW1wdHkgbmF2YmFyIHdpdGggbG9nbyAtLT5cblxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJsb2FkZWRcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiF0aGlzLmlzVXNlckxvZ2dlZEluXCI+XG4gICAgICAgICAgICA8bmF2IGNsYXNzPVwibmF2YmFyIG1sLTAgcGwtMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXZiYXItY29sbGFwc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2YmFyLW5hdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGwtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWxvZ28tdWk+PC9zY3JtLWxvZ28tdWk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgIDwhLS0gRW5kIG9mIGVtcHR5IG5hdmJhciBzZWN0aW9uIHdpdGggbG9nbyAtLT5cblxuICAgICAgICA8IS0tIFN0YXJ0IG9mIG1vYmlsZSBuYXZpZ2F0aW9uIHNlY3Rpb24gLS0+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRoaXMuaXNVc2VyTG9nZ2VkSW4gJiYgbW9iaWxlTmF2YmFyXCI+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXZiYXIgbW9iaWxlLW5hdi1ibG9jayBtb2JpbGVuYXZiYXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2ICNteURyb3A9XCJuZ2JEcm9wZG93blwiIFthdXRvQ2xvc2VdPVwiZmFsc2VcIiBjbGFzcz1cInBvc2l0aW9uLXN0YXRpY1wiIG5nYkRyb3Bkb3duPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJuYXZiYXItdG9nZ2xlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5nYkRyb3Bkb3duVG9nZ2xlIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1pbWFnZSBjbGFzcz1cIiByZXNwb25zaXZlLW1lbnUtdG9nZ2xlclwiIGltYWdlPVwiaGFtYnVyZ2VyXCI+PC9zY3JtLWltYWdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFtAbW9iaWxlTmF2RmFkZV0gY2xhc3M9XCJtb2JpbGUtbmF2LWRyb3Bkb3duIHctMTAwXCIgbmdiRHJvcGRvd25NZW51PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJuYXZiYXIgJiYgbmF2YmFyLm1lbnUgJiYgbmF2YmFyLm1lbnUubGVuZ3RoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLW1vYmlsZS1tZW51IFthbGxdPVwibmF2YmFyLmFsbC5tb2R1bGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2N1cnJlbnRdPVwibmF2YmFyLmN1cnJlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaXRlbXNdPVwibmF2YmFyLm1lbnVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmF2aWdhdGlvblR5cGVdPVwidm0udXNlclByZWZlcmVuY2VzWyduYXZpZ2F0aW9uX3BhcmFkaWdtJ10gfHwgJydcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbb25DbG9zZV09XCJnZXRDbG9zZUNhbGxCYWNrKG15RHJvcClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2NybS1tb2JpbGUtbWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImFjdGlvbkljb25zXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnbG9iYWwtbGlua3NcIiBuZ2JEcm9wZG93bj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSAoY2xpY2spPVwibXlEcm9wLmNsb3NlKClcIiBjbGFzcz1cImdsb2JhbC1saW5rLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSAjbW9iaWxlR2xvYmFsTGlua1RpdGxlIGNsYXNzPVwibmF2LWxpbmsgcHJpbWFyeS1nbG9iYWwtbGluayBkcm9wZG93bi10b2dnbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5nYkRyb3Bkb3duVG9nZ2xlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1pbWFnZSBjbGFzcz1cImdsb2JhbC1hY3Rpb24taWNvbiBzaWNvbi0yeFwiIGltYWdlPVwidXNlclwiPjwvc2NybS1pbWFnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBbc3R5bGUubWluLXdpZHRoLnB4XT1cIm1vYmlsZUdsb2JhbExpbmtUaXRsZS5vZmZzZXRXaWR0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJuYXZiYXJEcm9wZG93bk1lbnVMaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZHJvcGRvd24tbWVudSBnbG9iYWwtbGlua3MtZHJvcGRvd24gYm9yZGVyIHNoYWRvdy1zbS0yXCIgbmdiRHJvcGRvd25NZW51PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJnbG9iYWwtdXNlci1uYW1lXCI+e3sgbmF2YmFyLmN1cnJlbnRVc2VyLmZpcnN0TmFtZSB9fSB7eyBuYXZiYXIuY3VycmVudFVzZXIubGFzdE5hbWUgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCJuYXZiYXIuZ2xvYmFsQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBnbG9iYWxBY3Rpb24gb2YgbmF2YmFyLmdsb2JhbEFjdGlvbnM7IGxldCBmaXJzdCA9IGZpcnN0OyBsZXQgbGFzdCA9IGxhc3Q7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtIGdsb2JhbC1saW5rcy1zdWJsaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwie3sgZ2xvYmFsQWN0aW9uLmxpbmsudXJsIH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZ2JEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJ7eyBnbG9iYWxBY3Rpb24ubGluay50YXJnZXQgfX1cIj57eyBnbG9iYWxBY3Rpb24ubGluay5sYWJlbCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgKm5nSWY9XCJsYXN0ID09PSB0cnVlIHx8IGZpcnN0ID09PSB0cnVlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWxvZ291dC11aT48L3Njcm0tbG9nb3V0LXVpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPCEtLSBFbmQgb2YgbW9iaWxlIG5hdmlnYXRpb24gc2VjdGlvbi0tPlxuXG4gICAgICAgIDwhLS0gU3RhcnQgb2YgbmF2YmFyIHNlY3Rpb24gd2l0aCBkYXRhIG9uY2UgYXV0aGVudGljYXRlZCAtLT5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidGhpcy5pc1VzZXJMb2dnZWRJbiAmJiAhbW9iaWxlTmF2YmFyXCI+XG4gICAgICAgICAgICA8bmF2IGNsYXNzPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbWQgbmF2YmFyLTFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IFtuZ2JDb2xsYXBzZV09XCJtYWluTmF2Q29sbGFwc2VcIiBjbGFzcz1cIm5hdmJhci1jb2xsYXBzZSBjb2xsYXBzZSBjb2xsYXBzZW5hdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0taG9tZS1tZW51LWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYWN0aXZlXT1cInZtLmFwcFN0YXRlLm1vZHVsZSAmJiB2bS5hcHBTdGF0ZS5tb2R1bGUgPT09ICdob21lJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3JvdXRlXT1cImdldEhvbWVQYWdlKClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvc2NybS1ob21lLW1lbnUtaXRlbT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBOYXZiYXIgd2l0aCBncm91cGVkIHRhYnMgLS0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ2bS51c2VyUHJlZmVyZW5jZXNbJ25hdmlnYXRpb25fcGFyYWRpZ20nXSA9PSAnZ20nXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXZiYXItbmF2IGdyb3VwZWRcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibmF2YmFyLmN1cnJlbnQgJiYgbmF2YmFyLmN1cnJlbnQuaXNHcm91cGVkTWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwidG9wLW5hdiBuYXYtaXRlbSBkcm9wZG93biBtYWluLWdyb3VwZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1ncm91cGVkLW1lbnUtaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2l0ZW1dPVwibmF2YmFyLmN1cnJlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N1Yk5hdkNvbGxhcHNlXT1cInN1Yk5hdkNvbGxhcHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zY3JtLWdyb3VwZWQtbWVudS1pdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgKm5nSWY9XCJuYXZiYXIuY3VycmVudCAmJiAhbmF2YmFyLmN1cnJlbnQuaXNHcm91cGVkTWVudVwiIGNsYXNzPVwidG9wLW5hdiBuYXYtaXRlbSBkcm9wZG93biBub24tZ3JvdXBlZCBhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLW1lbnUtaXRlbSBbaXRlbV09XCJuYXZiYXIuY3VycmVudFwiPjwvc2NybS1tZW51LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIG5hdmJhci5tZW51XCIgY2xhc3M9XCJ0b3AtbmF2IG5hdi1pdGVtIGRyb3Bkb3duIG1haW4tZ3JvdXBlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tZ3JvdXBlZC1tZW51LWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaXRlbV09XCJpdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc3ViTmF2Q29sbGFwc2VdPVwic3ViTmF2Q29sbGFwc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zY3JtLWdyb3VwZWQtbWVudS1pdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLW1lbnUtaXRlbXMtbGlzdCBbaXRlbXNdPVwibmF2YmFyLmFsbC5tb2R1bGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxLZXk9XCJMQkxfVEFCR1JPVVBfQUxMXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zY3JtLW1lbnUtaXRlbXMtbGlzdD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBFTkQgTmF2YmFyIHdpdGggZ3JvdXBlZCB0YWJzIC0tPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIE5hdmJhciB3aXRoIG5vbi1ncm91cGVkIHRhYnMgLS0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ2bS51c2VyUHJlZmVyZW5jZXNbJ25hdmlnYXRpb25fcGFyYWRpZ20nXSAhPSAnZ20nXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXZiYXItbmF2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSAqbmdJZj1cIm5hdmJhci5jdXJyZW50ICYmICFuYXZiYXIuY3VycmVudC5pc0dyb3VwZWRNZW51XCIgY2xhc3M9XCJ0b3AtbmF2IG5hdi1pdGVtIGRyb3Bkb3duIG5vbi1ncm91cGVkIGFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tbWVudS1pdGVtIFtpdGVtXT1cIm5hdmJhci5jdXJyZW50XCI+PC9zY3JtLW1lbnUtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibmF2YmFyLmN1cnJlbnQ/LnN1Ym1lbnUgICYmIG5hdmJhci5jdXJyZW50LmlzR3JvdXBlZE1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInRvcC1uYXYgbmF2LWl0ZW0gZHJvcGRvd24gbWFpbi1ncm91cGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tZ3JvdXBlZC1tZW51LWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2l0ZW1dPVwibmF2YmFyLmN1cnJlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc3ViTmF2Q29sbGFwc2VdPVwic3ViTmF2Q29sbGFwc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Njcm0tZ3JvdXBlZC1tZW51LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgbmF2YmFyLm1lbnVcIiBjbGFzcz1cInRvcC1uYXYgbmF2LWl0ZW0gZHJvcGRvd24gbm9uLWdyb3VwZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLW1lbnUtaXRlbSBbaXRlbV09XCJpdGVtXCI+PC9zY3JtLW1lbnUtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1tZW51LWl0ZW1zLWxpc3QgW2l0ZW1zXT1cIm5hdmJhci5hbGwubW9kdWxlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxLZXk9XCJMQkxfTU9SRVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zY3JtLW1lbnUtaXRlbXMtbGlzdD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gRU5EIE5hdmJhciB3aXRoIG5vbi1ncm91cGVkIHRhYnMgLS0+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJhY3Rpb25JY29uc1wiPjwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgPCEtLSBHbG9iYWwgTGlua3MgLS0+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2xvYmFsLWxpbmtzXCIgbmdiRHJvcGRvd24+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdmJhci1uYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImdsb2JhbC1saW5rLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rIHByaW1hcnktZ2xvYmFsLWxpbmsgZHJvcGRvd24tdG9nZ2xlXCIgbmdiRHJvcGRvd25Ub2dnbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWltYWdlIGNsYXNzPVwiZ2xvYmFsLWFjdGlvbi1pY29uIHNpY29uLTJ4XCIgaW1hZ2U9XCJ1c2VyXCI+PC9zY3JtLWltYWdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGFyaWEtbGFiZWxsZWRieT1cIm5hdmJhckRyb3Bkb3duTWVudUxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkcm9wZG93bi1tZW51IGdsb2JhbC1saW5rcy1kcm9wZG93biBib3JkZXIgc2hhZG93LXNtLTIgZHJvcGRvd24tbWVudS1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZ2JEcm9wZG93bk1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImdsb2JhbC11c2VyLW5hbWVcIj57eyBuYXZiYXIuY3VycmVudFVzZXIuZmlyc3ROYW1lIH19IHt7IG5hdmJhci5jdXJyZW50VXNlci5sYXN0TmFtZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm5hdmJhci5nbG9iYWxBY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGdsb2JhbEFjdGlvbiBvZiBuYXZiYXIuZ2xvYmFsQWN0aW9uczsgbGV0IGZpcnN0ID0gZmlyc3Q7IGxldCBsYXN0ID0gbGFzdDtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW0gZ2xvYmFsLWxpbmtzLXN1YmxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJ7eyBnbG9iYWxBY3Rpb24ubGluay51cmwgfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5nYkRyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cInt7IGdsb2JhbEFjdGlvbi5saW5rLnRhcmdldCB9fVwiPnt7IGdsb2JhbEFjdGlvbi5saW5rLmxhYmVsIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAqbmdJZj1cImxhc3QgPT09IHRydWUgfHwgZmlyc3QgPT09IHRydWVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tbG9nb3V0LXVpPjwvc2NybS1sb2dvdXQtdWk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPCEtLSBFTkQgR2xvYmFsIExpbmtzIC0tPlxuXG4gICAgICAgICAgICA8L25hdj5cblxuICAgICAgICAgICAgPCEtLSBFbmQgb2YgbmF2YmFyIHNlY3Rpb24gd2l0aCBkYXRhIG9uY2UgYXV0aGVudGljYXRlZCAtLT5cblxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDxuZy10ZW1wbGF0ZSAjYWN0aW9uSWNvbnM+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb24tZ3JvdXAgbmF2YmFyLWFjdGlvbi1ncm91cFwiPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uLW5ldyBkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYWN0aW9uLWxpbmsgcHJpbWFyeS1nbG9iYWwtbGlua1wiIHR5cGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwiUXVpY2sgQ3JlYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzY3JtLWltYWdlIGNsYXNzPVwiYWN0aW9uLWJ0bi1pY29uXCIgaW1hZ2U9XCJwbHVzXCI+PC9zY3JtLWltYWdlPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8dWwgW2NsYXNzLmRyb3Bkb3duLW1lbnUtcmlnaHRdPVwiIW1vYmlsZU5hdmJhclwiIGNsYXNzPVwiZHJvcGRvd24tbWVudSBib3JkZXIgc2hhZG93LXNtLTJcIj5cblxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiKG5hdmJhcj8uY3VycmVudD8ubW9kdWxlID8/ICcnKSAmJiBjdXJyZW50UXVpY2tBY3Rpb25zLmxlbmd0aFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmV3LWxpc3QtaXRlbS1oZWFkZXIgZm9udC13ZWlnaHQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWxhYmVsIGxhYmVsS2V5PVwiTEJMX01PRFVMRV9OQU1FXCIgW21vZHVsZV09XCJuYXZiYXIuY3VycmVudC5tb2R1bGVcIj48L3Njcm0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmV3LWxpc3QtaXRlbVwiICpuZ0Zvcj1cImxldCBtb2R1bGVRdWlja0FjdGlvbiBvZiBjdXJyZW50UXVpY2tBY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFtb2R1bGVRdWlja0FjdGlvbi5wcm9jZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIm1vZHVsZVF1aWNrQWN0aW9uLnVybFwiIFtxdWVyeVBhcmFtc109XCJtb2R1bGVRdWlja0FjdGlvbj8ucGFyYW1zID8/IG51bGxcIiBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWxhYmVsIFtsYWJlbEtleV09XCJtb2R1bGVRdWlja0FjdGlvbi5sYWJlbEtleVwiIFttb2R1bGVdPVwibmF2YmFyLmN1cnJlbnQubW9kdWxlXCI+PC9zY3JtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm1vZHVsZVF1aWNrQWN0aW9uLnByb2Nlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cImhhbmRsZVByb2Nlc3MobW9kdWxlUXVpY2tBY3Rpb24pXCIgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1sYWJlbCBbbGFiZWxLZXldPVwibW9kdWxlUXVpY2tBY3Rpb24ubGFiZWxLZXlcIiBbbW9kdWxlXT1cIm5hdmJhci5jdXJyZW50Lm1vZHVsZVwiPjwvc2NybS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiKHRoaXM/Lm5hdmlnYXRpb24/LnF1aWNrQWN0aW9ucyA/PyBbXSkubGVuZ3RoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuZXctbGlzdC1pdGVtLWhlYWRlciBmb250LXdlaWdodC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tbGFiZWwgbGFiZWxLZXk9XCJMQkxfUVVJQ0tfQUNUSU9OU1wiPjwvc2NybS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuZXctbGlzdC1pdGVtXCIgKm5nRm9yPVwibGV0IHF1aWNrQWN0aW9uIG9mICh0aGlzPy5uYXZpZ2F0aW9uPy5xdWlja0FjdGlvbnMgPz8gW10pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFxdWlja0FjdGlvbi5wcm9jZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cInF1aWNrQWN0aW9uLnVybFwiIFtxdWVyeVBhcmFtc109XCJxdWlja0FjdGlvbj8ucGFyYW1zID8/IG51bGxcIiBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWxhYmVsIFtsYWJlbEtleV09XCJxdWlja0FjdGlvbi5sYWJlbEtleVwiIFttb2R1bGVdPVwicXVpY2tBY3Rpb24ubW9kdWxlXCI+PC9zY3JtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInF1aWNrQWN0aW9uLnByb2Nlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cImhhbmRsZVByb2Nlc3MocXVpY2tBY3Rpb24pXCIgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1sYWJlbCBbbGFiZWxLZXldPVwicXVpY2tBY3Rpb24ubGFiZWxLZXlcIiBbbW9kdWxlXT1cInF1aWNrQWN0aW9uLm1vZHVsZVwiPjwvc2NybS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBteC0xXCI+XG4gICAgICAgICAgICAgICAgPHNjcm0tc2VhcmNoLWJhcj48L3Njcm0tc2VhcmNoLWJhcj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgKm5nSWY9XCJub3RpZmljYXRpb25zRW5hYmxlZCAmJiBjaGVja0FwcFN0cmluZ3Modm0uYXBwU3RyaW5ncykgJiYgYXJlUHJlZmVyZW5jZXNJbml0aWFsaXplZCh2bS51c2VyUHJlZmVyZW5jZXMpXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImFjdGlvbi1hbGVydCBkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYWN0aW9uLWxpbmsgcHJpbWFyeS1nbG9iYWwtbGlua1wiIHR5cGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwiVG9nZ2xlIEFsZXJ0c1wiXG4gICAgICAgICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwibWFya0FzUmVhZCgpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzY3JtLWltYWdlIGNsYXNzPVwiYWN0aW9uLWJ0bi1pY29uXCIgaW1hZ2U9XCJhbGVydFwiPjwvc2NybS1pbWFnZT5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIihub3RpZmljYXRpb25Db3VudCQgfCBhc3luYykgYXMgbm90aWZpY2F0aW9uQ291bnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIihub3RpZmljYXRpb25Db3VudCA/PyBmYWxzZSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtcG9zaXRpb24gcm91bmRlZC1waWxsIGJnLWRhbmdlciB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJub3RpZmljYXRpb25Db3VudCA+IDBcIj57e25vdGlmaWNhdGlvbkNvdW50IH19PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51IGJvcmRlciBzaGFkb3ctc20tMiBkcm9wZG93bi1tZW51LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzY3JtLW5vdGlmaWNhdGlvbnM+PC9zY3JtLW5vdGlmaWNhdGlvbnM+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG48L2Rpdj5cblxuPCEtLSBFbmQgb2YgbWFpbiBuYXZiYXIgc2VjdGlvbiAtLT5cbiJdfQ==