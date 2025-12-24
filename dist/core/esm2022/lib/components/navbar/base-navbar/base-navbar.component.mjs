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
import { combineLatestWith } from 'rxjs';
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
    moduleNameMapper = new ModuleNameMapper(this.systemConfigStore);
    actionNameMapper = new ActionNameMapper(this.systemConfigStore);
    routeConverter = new RouteConverter(this.moduleNameMapper, this.actionNameMapper, this.systemConfigStore);
    navbar;
    maxTabs = 8;
    screen = ScreenSize.Medium;
    notificationsEnabled = false;
    subs = [];
    navigation;
    currentQuickActions;
    languages$ = this.languageStore.vm$;
    userPreferences$ = this.userPreferenceStore.userPreferences$;
    currentUser$ = this.authService.currentUser$;
    appState$ = this.appState.vm$;
    navigation$ = this.navigationStore.vm$;
    dropdownLength;
    notificationCount$;
    vm$ = this.navigation$.pipe(combineLatestWith(this.userPreferences$, this.currentUser$, this.appState$, this.screenSize.screenSize$, this.languages$), map(([navigation, userPreferences, currentUser, appState, screenSize, language]) => {
        if (screenSize) {
            this.screen = screenSize;
        }
        if (navigation && navigation.modules) {
            this.navigation = navigation;
        }
        this.calculateMaxTabs(navigation);
        this.getModuleQuickActions(appState.module);
        this.navbar.resetMenu();
        if (ready([language.appStrings, language.modStrings, language.appListStrings, userPreferences, currentUser])) {
            this.navbar.build(navigation, currentUser, this.maxTabs);
        }
        return {
            navigation,
            userPreferences,
            appState,
            appStrings: language.appStrings || {},
            appListStrings: language.appListStrings || {}
        };
    }));
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
        this.notificationCount$ = this.notificationStore.notificationsUnreadTotal$;
        this.subs.push(this.notificationStore.notificationsEnabled$.subscribe(notificationsEnabled => {
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
        this.notificationStore.markNotificationsAsRead();
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
        const sizeMap = this.systemConfigStore.getConfigValue('navigation_tab_limits');
        if (this.screen && sizeMap) {
            let maxTabs = sizeMap[this.screen];
            if (!maxTabs || navigation.maxTabs && navigation.maxTabs < maxTabs) {
                maxTabs = navigation.maxTabs;
            }
            this.maxTabs = maxTabs;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1uYXZiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvbmF2YmFyL2Jhc2UtbmF2YmFyL2Jhc2UtbmF2YmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb21wb25lbnRzL25hdmJhci9iYXNlLW5hdmJhci9iYXNlLW5hdmJhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFnQixTQUFTLEVBQWMsWUFBWSxFQUFxQixTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDL0csT0FBTyxFQUFDLGlCQUFpQixFQUEyQixNQUFNLE1BQU0sQ0FBQztBQUNqRSxPQUFPLEVBQUMsR0FBRyxFQUFFLElBQUksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRXpDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RSxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sWUFBWSxDQUFDO0FBQ2xDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDRFQUE0RSxDQUFDO0FBSTVHLE9BQU8sRUFDSCxVQUFVLEVBRWIsTUFBTSx3RUFBd0UsQ0FBQztBQUNoRixPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sc0VBQXNFLENBQUM7QUFHcEcsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNEVBQTRFLENBQUM7QUFHNUcsT0FBTyxFQUFXLEtBQUssRUFBQyxNQUFNLFFBQVEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2IvQiw4QkFBcUMsYUFB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ZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2NvbWJpbmVMYXRlc3RXaXRoLCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHttYXAsIHRha2V9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7TmF2YmFyTW9kZWx9IGZyb20gJy4uL25hdmJhci1tb2RlbCc7XG5pbXBvcnQge05hdmJhckFic3RyYWN0fSBmcm9tICcuLi9uYXZiYXIuYWJzdHJhY3QnO1xuaW1wb3J0IHt0cmFuc2l0aW9uLCB0cmlnZ2VyLCB1c2VBbmltYXRpb259IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHtmYWRlSW59IGZyb20gJ25nLWFuaW1hdGUnO1xuaW1wb3J0IHtBY3Rpb25OYW1lTWFwcGVyfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL2FjdGlvbi1uYW1lLW1hcHBlci9hY3Rpb24tbmFtZS1tYXBwZXIuc2VydmljZSc7XG5pbXBvcnQge1N5c3RlbUNvbmZpZ1N0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9zeXN0ZW0tY29uZmlnL3N5c3RlbS1jb25maWcuc3RvcmUnO1xuaW1wb3J0IHtNb2R1bGVBY3Rpb24sIE5hdmlnYXRpb24sIE5hdmlnYXRpb25TdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLnN0b3JlJztcbmltcG9ydCB7VXNlclByZWZlcmVuY2VNYXAsIFVzZXJQcmVmZXJlbmNlU3RvcmV9IGZyb20gJy4uLy4uLy4uL3N0b3JlL3VzZXItcHJlZmVyZW5jZS91c2VyLXByZWZlcmVuY2Uuc3RvcmUnO1xuaW1wb3J0IHtcbiAgICBTY3JlZW5TaXplLFxuICAgIFNjcmVlblNpemVPYnNlcnZlclNlcnZpY2Vcbn0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvdWkvc2NyZWVuLXNpemUtb2JzZXJ2ZXIvc2NyZWVuLXNpemUtb2JzZXJ2ZXIuc2VydmljZSc7XG5pbXBvcnQge1JvdXRlQ29udmVydGVyfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL3JvdXRlLWNvbnZlcnRlci9yb3V0ZS1jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQge0xhbmd1YWdlU3RvcmUsIExhbmd1YWdlU3RyaW5nc30gZnJvbSAnLi4vLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtNb2R1bGVOYXZpZ2F0aW9ufSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL21vZHVsZS1uYXZpZ2F0aW9uL21vZHVsZS1uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHtNb2R1bGVOYW1lTWFwcGVyfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uL21vZHVsZS1uYW1lLW1hcHBlci9tb2R1bGUtbmFtZS1tYXBwZXIuc2VydmljZSc7XG5pbXBvcnQge0FwcFN0YXRlLCBBcHBTdGF0ZVN0b3JlfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9hcHAtc3RhdGUvYXBwLXN0YXRlLnN0b3JlJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2F1dGgvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7TWVudUl0ZW0sIHJlYWR5fSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtBc3luY0FjdGlvbklucHV0LCBBc3luY0FjdGlvblNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3Byb2Nlc3MvcHJvY2Vzc2VzL2FzeW5jLWFjdGlvbi9hc3luYy1hY3Rpb24nO1xuaW1wb3J0IHtOb3RpZmljYXRpb25TdG9yZX0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uc3RvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLWJhc2UtbmF2YmFyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYmFzZS1uYXZiYXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW10sXG4gICAgYW5pbWF0aW9uczogW1xuICAgICAgICB0cmlnZ2VyKCdtb2JpbGVOYXZGYWRlJywgW1xuICAgICAgICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgdXNlQW5pbWF0aW9uKGZhZGVJbiwge1xuICAgICAgICAgICAgICAgIHBhcmFtczoge3RpbWluZzogMC41LCBkZWxheTogMH1cbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgXSlcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEJhc2VOYXZiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgICBAVmlld0NoaWxkKCdtb2JpbGVHbG9iYWxMaW5rVGl0bGUnKSBtb2JpbGVHbG9iYWxMaW5rVGl0bGU6IEVsZW1lbnRSZWY7XG5cbiAgICBwcm90ZWN0ZWQgc3RhdGljIGluc3RhbmNlczogQmFzZU5hdmJhckNvbXBvbmVudFtdID0gW107XG5cbiAgICBsb2FkZWQgPSB0cnVlO1xuICAgIGlzVXNlckxvZ2dlZEluOiBib29sZWFuO1xuXG4gICAgbWFpbk5hdkNvbGxhcHNlID0gdHJ1ZTtcbiAgICBzdWJOYXZDb2xsYXBzZSA9IHRydWU7XG4gICAgbW9iaWxlTmF2YmFyID0gZmFsc2U7XG4gICAgbW9iaWxlU3ViTmF2ID0gZmFsc2U7XG4gICAgYmFja0xpbmsgPSBmYWxzZTtcbiAgICBtYWluTmF2TGluayA9IHRydWU7XG4gICAgc3VibWVudTogYW55ID0gW107XG4gICAgbW9kdWxlTmFtZU1hcHBlciA9IG5ldyBNb2R1bGVOYW1lTWFwcGVyKHRoaXMuc3lzdGVtQ29uZmlnU3RvcmUpO1xuICAgIGFjdGlvbk5hbWVNYXBwZXIgPSBuZXcgQWN0aW9uTmFtZU1hcHBlcih0aGlzLnN5c3RlbUNvbmZpZ1N0b3JlKTtcbiAgICByb3V0ZUNvbnZlcnRlciA9IG5ldyBSb3V0ZUNvbnZlcnRlcih0aGlzLm1vZHVsZU5hbWVNYXBwZXIsIHRoaXMuYWN0aW9uTmFtZU1hcHBlciwgdGhpcy5zeXN0ZW1Db25maWdTdG9yZSk7XG4gICAgbmF2YmFyOiBOYXZiYXJNb2RlbDtcbiAgICBtYXhUYWJzID0gODtcbiAgICBzY3JlZW46IFNjcmVlblNpemUgPSBTY3JlZW5TaXplLk1lZGl1bTtcbiAgICBub3RpZmljYXRpb25zRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW11cbiAgICBuYXZpZ2F0aW9uOiBOYXZpZ2F0aW9uO1xuXG4gICAgY3VycmVudFF1aWNrQWN0aW9uczogTW9kdWxlQWN0aW9uW107XG5cbiAgICBsYW5ndWFnZXMkOiBPYnNlcnZhYmxlPExhbmd1YWdlU3RyaW5ncz4gPSB0aGlzLmxhbmd1YWdlU3RvcmUudm0kO1xuICAgIHVzZXJQcmVmZXJlbmNlcyQ6IE9ic2VydmFibGU8VXNlclByZWZlcmVuY2VNYXA+ID0gdGhpcy51c2VyUHJlZmVyZW5jZVN0b3JlLnVzZXJQcmVmZXJlbmNlcyQ7XG4gICAgY3VycmVudFVzZXIkOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLmF1dGhTZXJ2aWNlLmN1cnJlbnRVc2VyJDtcbiAgICBhcHBTdGF0ZSQ6IE9ic2VydmFibGU8QXBwU3RhdGU+ID0gdGhpcy5hcHBTdGF0ZS52bSQ7XG4gICAgbmF2aWdhdGlvbiQ6IE9ic2VydmFibGU8TmF2aWdhdGlvbj4gPSB0aGlzLm5hdmlnYXRpb25TdG9yZS52bSQ7XG4gICAgZHJvcGRvd25MZW5ndGg6IG51bWJlcjtcblxuICAgIG5vdGlmaWNhdGlvbkNvdW50JDogT2JzZXJ2YWJsZTxudW1iZXI+O1xuXG4gICAgdm0kID0gdGhpcy5uYXZpZ2F0aW9uJC5waXBlKFxuICAgICAgICBjb21iaW5lTGF0ZXN0V2l0aChcbiAgICAgICAgICAgIHRoaXMudXNlclByZWZlcmVuY2VzJCxcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXIkLFxuICAgICAgICAgICAgdGhpcy5hcHBTdGF0ZSQsXG4gICAgICAgICAgICB0aGlzLnNjcmVlblNpemUuc2NyZWVuU2l6ZSQsXG4gICAgICAgICAgICB0aGlzLmxhbmd1YWdlcyQsXG4gICAgICAgICksXG4gICAgICAgIG1hcCgoW25hdmlnYXRpb24sIHVzZXJQcmVmZXJlbmNlcywgY3VycmVudFVzZXIsIGFwcFN0YXRlLCBzY3JlZW5TaXplLCBsYW5ndWFnZV0pID0+IHtcblxuICAgICAgICAgICAgaWYgKHNjcmVlblNpemUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcmVlbiA9IHNjcmVlblNpemU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChuYXZpZ2F0aW9uICYmIG5hdmlnYXRpb24ubW9kdWxlcykge1xuICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGlvbiA9IG5hdmlnYXRpb247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlTWF4VGFicyhuYXZpZ2F0aW9uKTtcblxuICAgICAgICAgICAgdGhpcy5nZXRNb2R1bGVRdWlja0FjdGlvbnMoYXBwU3RhdGUubW9kdWxlKTtcblxuICAgICAgICAgICAgdGhpcy5uYXZiYXIucmVzZXRNZW51KCk7XG4gICAgICAgICAgICBpZiAocmVhZHkoW2xhbmd1YWdlLmFwcFN0cmluZ3MsIGxhbmd1YWdlLm1vZFN0cmluZ3MsIGxhbmd1YWdlLmFwcExpc3RTdHJpbmdzLCB1c2VyUHJlZmVyZW5jZXMsIGN1cnJlbnRVc2VyXSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdmJhci5idWlsZChcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFVzZXIsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWF4VGFicyxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hdmlnYXRpb24sXG4gICAgICAgICAgICAgICAgdXNlclByZWZlcmVuY2VzLFxuICAgICAgICAgICAgICAgIGFwcFN0YXRlLFxuICAgICAgICAgICAgICAgIGFwcFN0cmluZ3M6IGxhbmd1YWdlLmFwcFN0cmluZ3MgfHwge30sXG4gICAgICAgICAgICAgICAgYXBwTGlzdFN0cmluZ3M6IGxhbmd1YWdlLmFwcExpc3RTdHJpbmdzIHx8IHt9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgICk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIG5hdmlnYXRpb25TdG9yZTogTmF2aWdhdGlvblN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2VTdG9yZTogTGFuZ3VhZ2VTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIHVzZXJQcmVmZXJlbmNlU3RvcmU6IFVzZXJQcmVmZXJlbmNlU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBzeXN0ZW1Db25maWdTdG9yZTogU3lzdGVtQ29uZmlnU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBhcHBTdGF0ZTogQXBwU3RhdGVTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIG1vZHVsZU5hdmlnYXRpb246IE1vZHVsZU5hdmlnYXRpb24sXG4gICAgICAgIHByb3RlY3RlZCBzY3JlZW5TaXplOiBTY3JlZW5TaXplT2JzZXJ2ZXJTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgYXN5bmNBY3Rpb25TZXJ2aWNlOiBBc3luY0FjdGlvblNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBub3RpZmljYXRpb25TdG9yZTogTm90aWZpY2F0aW9uU3RvcmVcbiAgICApIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaWMgQVBJXG4gICAgICovXG5cbiAgICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyckZXZlbnQnXSlcbiAgICBvblJlc2l6ZShldmVudDogYW55KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGlubmVyV2lkdGggPSBldmVudC50YXJnZXQuaW5uZXJXaWR0aDtcbiAgICAgICAgdGhpcy5tb2JpbGVOYXZiYXIgPSBpbm5lcldpZHRoIDw9IDc2ODtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbmF2YmFyID0gbmV3IE5hdmJhckFic3RyYWN0KFxuICAgICAgICAgICAgdGhpcy5yb3V0ZUNvbnZlcnRlcixcbiAgICAgICAgICAgIHRoaXMubW9kdWxlTmF2aWdhdGlvbixcbiAgICAgICAgICAgIHRoaXMudXNlclByZWZlcmVuY2VTdG9yZSxcbiAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2VTdG9yZSxcbiAgICAgICAgICAgIHRoaXMuYXBwU3RhdGVcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5zZXROYXZiYXIobmF2YmFyKTtcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5pc1VzZXJMb2dnZWRJbi5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc1VzZXJMb2dnZWRJbiA9IHZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3Jlc2l6ZScpKTtcblxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbkNvdW50JCA9IHRoaXMubm90aWZpY2F0aW9uU3RvcmUubm90aWZpY2F0aW9uc1VucmVhZFRvdGFsJDtcblxuICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLm5vdGlmaWNhdGlvblN0b3JlLm5vdGlmaWNhdGlvbnNFbmFibGVkJC5zdWJzY3JpYmUobm90aWZpY2F0aW9uc0VuYWJsZWQgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zRW5hYmxlZCA9IG5vdGlmaWNhdGlvbnNFbmFibGVkO1xuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuaXNVc2VyTG9nZ2VkSW4udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgICB9XG5cbiAgICBjaGVja0FwcFN0cmluZ3MoYXBwU3RyaW5ncyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gYXBwU3RyaW5ncyAmJiBPYmplY3Qua2V5cyhhcHBTdHJpbmdzKS5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIGFyZVByZWZlcmVuY2VzSW5pdGlhbGl6ZWQocHJlZmVyZW5jZXM6IFVzZXJQcmVmZXJlbmNlTWFwKSB7XG4gICAgICAgIHJldHVybiBwcmVmZXJlbmNlcyAmJiBPYmplY3Qua2V5cyhwcmVmZXJlbmNlcykubGVuZ3RoO1xuICAgIH1cblxuICAgIG1hcmtBc1JlYWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uU3RvcmUubWFya05vdGlmaWNhdGlvbnNBc1JlYWQoKTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5tb2JpbGVHbG9iYWxMaW5rVGl0bGU/Lm5hdGl2ZUVsZW1lbnQ/Lm9mZnNldFdpZHQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyb3Bkb3duTGVuZ3RoID0gdGhpcy5tb2JpbGVHbG9iYWxMaW5rVGl0bGUubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZSBzdWJuYXZpZ2F0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgdHJpZ2dlcmVkXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGl0ZW1zXG4gICAgICovXG4gICAgcHVibGljIGNoYW5nZVN1Yk5hdihldmVudDogRXZlbnQsIGl0ZW1zOiBNZW51SXRlbVtdKTogdm9pZCB7XG4gICAgICAgIHRoaXMubW9iaWxlU3ViTmF2ID0gIXRoaXMubW9iaWxlU3ViTmF2O1xuICAgICAgICB0aGlzLmJhY2tMaW5rID0gIXRoaXMuYmFja0xpbms7XG4gICAgICAgIHRoaXMubWFpbk5hdkxpbmsgPSAhdGhpcy5tYWluTmF2TGluaztcbiAgICAgICAgdGhpcy5zdWJtZW51ID0gaXRlbXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGxpbmsgZmxhZ3NcbiAgICAgKi9cbiAgICBwdWJsaWMgbmF2QmFja0xpbmsoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubW9iaWxlU3ViTmF2ID0gIXRoaXMubW9iaWxlU3ViTmF2O1xuICAgICAgICB0aGlzLmJhY2tMaW5rID0gIXRoaXMuYmFja0xpbms7XG4gICAgICAgIHRoaXMubWFpbk5hdkxpbmsgPSAhdGhpcy5tYWluTmF2TGluaztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgaG9tZSBwYWdlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBob21lcGFnZVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRIb21lUGFnZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5zeXN0ZW1Db25maWdTdG9yZS5nZXRIb21lUGFnZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDbG9zZUNhbGxCYWNrKG15RHJvcCk6IEZ1bmN0aW9uIHtcbiAgICAgICAgcmV0dXJuICgpID0+IG15RHJvcC5jbG9zZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludGVybmFsIEFQSVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogU2V0IG5hdmJhciBtb2RlbFxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG5hdmJhciBtb2RlbFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBzZXROYXZiYXIobmF2YmFyOiBOYXZiYXJNb2RlbCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5hdmJhciA9IG5hdmJhcjtcbiAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGlzIGxvYWRlZFxuICAgICAqXG4gICAgICogQHJldHVybnMge3tib29sZWFufX0gaXMgbG9hZGVkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGlzTG9hZGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2FkZWQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNhbGN1bGF0ZU1heFRhYnMobmF2aWdhdGlvbjogTmF2aWdhdGlvbik6IHZvaWQge1xuICAgICAgICBjb25zdCBzaXplTWFwID0gdGhpcy5zeXN0ZW1Db25maWdTdG9yZS5nZXRDb25maWdWYWx1ZSgnbmF2aWdhdGlvbl90YWJfbGltaXRzJyk7XG4gICAgICAgIGlmICh0aGlzLnNjcmVlbiAmJiBzaXplTWFwKSB7XG5cbiAgICAgICAgICAgIGxldCBtYXhUYWJzID0gc2l6ZU1hcFt0aGlzLnNjcmVlbl07XG4gICAgICAgICAgICBpZiAoIW1heFRhYnMgfHwgbmF2aWdhdGlvbi5tYXhUYWJzICYmIG5hdmlnYXRpb24ubWF4VGFicyA8IG1heFRhYnMpIHtcbiAgICAgICAgICAgICAgICBtYXhUYWJzID0gbmF2aWdhdGlvbi5tYXhUYWJzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLm1heFRhYnMgPSBtYXhUYWJzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TW9kdWxlUXVpY2tBY3Rpb25zKG1vZHVsZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG1vZHVsZU5hdmlnYXRpb24gPSB0aGlzPy5uYXZpZ2F0aW9uPy5tb2R1bGVzW21vZHVsZV0gPz8gbnVsbDtcbiAgICAgICAgY29uc3QgbW9kdWxlTmF2aWdhdGlvbk1lbnUgPSBtb2R1bGVOYXZpZ2F0aW9uPy5tZW51ID8/IFtdO1xuICAgICAgICBpZiAobW9kdWxlTmF2aWdhdGlvbiA9PT0gbnVsbCB8fCAhbW9kdWxlTmF2aWdhdGlvbk1lbnUubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRRdWlja0FjdGlvbnMgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFjdGlvbnMgPSBbXSBhcyBNb2R1bGVBY3Rpb25bXTtcblxuICAgICAgICBtb2R1bGVOYXZpZ2F0aW9uTWVudS5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICAgIGlmICghZW50cnkudXJsIHx8ICFlbnRyeS5xdWlja0FjdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdXJsID0gZW50cnk/LnVybCA/PyAnJztcblxuICAgICAgICAgICAgYWN0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAuLi5lbnRyeSxcbiAgICAgICAgICAgICAgICB1cmw6IHVybC5yZXBsYWNlKCcvIy8nLCAnLycpXG4gICAgICAgICAgICB9IGFzIE1vZHVsZUFjdGlvbik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY3VycmVudFF1aWNrQWN0aW9ucyA9IGFjdGlvbnM7XG4gICAgfVxuXG4gICAgaGFuZGxlUHJvY2VzcyhhY3Rpb246IE1vZHVsZUFjdGlvbikge1xuICAgICAgICBpZiAoIWFjdGlvbi5wcm9jZXNzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcm9jZXNzVHlwZSA9IGFjdGlvbi5wcm9jZXNzO1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBhY3Rpb246IHByb2Nlc3NUeXBlLFxuICAgICAgICAgICAgbW9kdWxlOiBhY3Rpb24ubW9kdWxlLFxuICAgICAgICB9IGFzIEFzeW5jQWN0aW9uSW5wdXQ7XG5cbiAgICAgICAgdGhpcy5hc3luY0FjdGlvblNlcnZpY2UucnVuKHByb2Nlc3NUeXBlLCBvcHRpb25zKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgpO1xuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cbjwhLS0gU3RhcnQgb2YgbWFpbiBuYXZiYXIgc2VjdGlvbiAtLT5cblxuPGRpdiAqbmdJZj1cIih2bSQgfCBhc3luYykgYXMgdm1cIiBjbGFzcz1cInRvcC1wYW5lbCBmaXhlZC10b3BcIj5cblxuICAgIDwhLS0gU3RhcnQgb2YgZW1wdHkgbmF2YmFyIHNlY3Rpb24gdW50aWwgZGF0YSBpcyBsb2FkZWQgLS0+XG5cbiAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwiIWxvYWRlZFwiPlxuICAgICAgICA8bmF2IGNsYXNzPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXZiYXItY29sbGFwc2UgY29sbGFwc2Ugb3JkZXItNCBvcmRlci1tZC0wIGNvbGxhcHNlbmF2XCI+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2YmFyLW5hdlwiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJ0b3AtbmF2IG5hdi1pdGVtXCI+Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgPCEtLSBFbmQgb2YgZW1wdHkgIHNlY3Rpb24gdW50aWwgZGF0YSBpcyBsb2FkZWQgLS0+XG5cbiAgICA8IS0tIFN0YXJ0IG9mIGVtcHR5IG5hdmJhciB3aXRoIGxvZ28gLS0+XG5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibG9hZGVkXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhdGhpcy5pc1VzZXJMb2dnZWRJblwiPlxuICAgICAgICAgICAgPG5hdiBjbGFzcz1cIm5hdmJhciBtbC0wIHBsLTBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLWNvbGxhcHNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdmJhci1uYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBsLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1sb2dvLXVpPjwvc2NybS1sb2dvLXVpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICA8IS0tIEVuZCBvZiBlbXB0eSBuYXZiYXIgc2VjdGlvbiB3aXRoIGxvZ28gLS0+XG5cbiAgICAgICAgPCEtLSBTdGFydCBvZiBtb2JpbGUgbmF2aWdhdGlvbiBzZWN0aW9uIC0tPlxuXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0aGlzLmlzVXNlckxvZ2dlZEluICYmIG1vYmlsZU5hdmJhclwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2YmFyIG1vYmlsZS1uYXYtYmxvY2sgbW9iaWxlbmF2YmFyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiAjbXlEcm9wPVwibmdiRHJvcGRvd25cIiBbYXV0b0Nsb3NlXT1cImZhbHNlXCIgY2xhc3M9XCJwb3NpdGlvbi1zdGF0aWNcIiBuZ2JEcm9wZG93bj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gYXJpYS1jb250cm9scz1cIm5hdmJhclwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZ2JEcm9wZG93blRvZ2dsZSB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0taW1hZ2UgY2xhc3M9XCIgcmVzcG9uc2l2ZS1tZW51LXRvZ2dsZXJcIiBpbWFnZT1cImhhbWJ1cmdlclwiPjwvc2NybS1pbWFnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBbQG1vYmlsZU5hdkZhZGVdIGNsYXNzPVwibW9iaWxlLW5hdi1kcm9wZG93biB3LTEwMFwiIG5nYkRyb3Bkb3duTWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibmF2YmFyICYmIG5hdmJhci5tZW51ICYmIG5hdmJhci5tZW51Lmxlbmd0aFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1tb2JpbGUtbWVudSBbYWxsXT1cIm5hdmJhci5hbGwubW9kdWxlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjdXJyZW50XT1cIm5hdmJhci5jdXJyZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2l0ZW1zXT1cIm5hdmJhci5tZW51XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25hdmlnYXRpb25UeXBlXT1cInZtLnVzZXJQcmVmZXJlbmNlc1snbmF2aWdhdGlvbl9wYXJhZGlnbSddIHx8ICcnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW29uQ2xvc2VdPVwiZ2V0Q2xvc2VDYWxsQmFjayhteURyb3ApXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Njcm0tbW9iaWxlLW1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJhY3Rpb25JY29uc1wiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2xvYmFsLWxpbmtzXCIgbmdiRHJvcGRvd24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgKGNsaWNrKT1cIm15RHJvcC5jbG9zZSgpXCIgY2xhc3M9XCJnbG9iYWwtbGluay1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgI21vYmlsZUdsb2JhbExpbmtUaXRsZSBjbGFzcz1cIm5hdi1saW5rIHByaW1hcnktZ2xvYmFsLWxpbmsgZHJvcGRvd24tdG9nZ2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZ2JEcm9wZG93blRvZ2dsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0taW1hZ2UgY2xhc3M9XCJnbG9iYWwtYWN0aW9uLWljb24gc2ljb24tMnhcIiBpbWFnZT1cInVzZXJcIj48L3Njcm0taW1hZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgW3N0eWxlLm1pbi13aWR0aC5weF09XCJtb2JpbGVHbG9iYWxMaW5rVGl0bGUub2Zmc2V0V2lkdGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibmF2YmFyRHJvcGRvd25NZW51TGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImRyb3Bkb3duLW1lbnUgZ2xvYmFsLWxpbmtzLWRyb3Bkb3duIGJvcmRlciBzaGFkb3ctc20tMlwiIG5nYkRyb3Bkb3duTWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZ2xvYmFsLXVzZXItbmFtZVwiPnt7IG5hdmJhci5jdXJyZW50VXNlci5maXJzdE5hbWUgfX0ge3sgbmF2YmFyLmN1cnJlbnRVc2VyLmxhc3ROYW1lIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwibmF2YmFyLmdsb2JhbEFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgZ2xvYmFsQWN0aW9uIG9mIG5hdmJhci5nbG9iYWxBY3Rpb25zOyBsZXQgZmlyc3QgPSBmaXJzdDsgbGV0IGxhc3QgPSBsYXN0O1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbSBnbG9iYWwtbGlua3Mtc3VibGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cInt7IGdsb2JhbEFjdGlvbi5saW5rLnVybCB9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmdiRHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwie3sgZ2xvYmFsQWN0aW9uLmxpbmsudGFyZ2V0IH19XCI+e3sgZ2xvYmFsQWN0aW9uLmxpbmsubGFiZWwgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyICpuZ0lmPVwibGFzdCA9PT0gdHJ1ZSB8fCBmaXJzdCA9PT0gdHJ1ZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1sb2dvdXQtdWk+PC9zY3JtLWxvZ291dC11aT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgIDwhLS0gRW5kIG9mIG1vYmlsZSBuYXZpZ2F0aW9uIHNlY3Rpb24tLT5cblxuICAgICAgICA8IS0tIFN0YXJ0IG9mIG5hdmJhciBzZWN0aW9uIHdpdGggZGF0YSBvbmNlIGF1dGhlbnRpY2F0ZWQgLS0+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRoaXMuaXNVc2VyTG9nZ2VkSW4gJiYgIW1vYmlsZU5hdmJhclwiPlxuICAgICAgICAgICAgPG5hdiBjbGFzcz1cIm5hdmJhciBuYXZiYXItZXhwYW5kLW1kIG5hdmJhci0xXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBbbmdiQ29sbGFwc2VdPVwibWFpbk5hdkNvbGxhcHNlXCIgY2xhc3M9XCJuYXZiYXItY29sbGFwc2UgY29sbGFwc2UgY29sbGFwc2VuYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWhvbWUtbWVudS1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2FjdGl2ZV09XCJ2bS5hcHBTdGF0ZS5tb2R1bGUgJiYgdm0uYXBwU3RhdGUubW9kdWxlID09PSAnaG9tZSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyb3V0ZV09XCJnZXRIb21lUGFnZSgpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L3Njcm0taG9tZS1tZW51LWl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gTmF2YmFyIHdpdGggZ3JvdXBlZCB0YWJzIC0tPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidm0udXNlclByZWZlcmVuY2VzWyduYXZpZ2F0aW9uX3BhcmFkaWdtJ10gPT0gJ2dtJ1wiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2YmFyLW5hdiBncm91cGVkXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm5hdmJhci5jdXJyZW50ICYmIG5hdmJhci5jdXJyZW50LmlzR3JvdXBlZE1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInRvcC1uYXYgbmF2LWl0ZW0gZHJvcGRvd24gbWFpbi1ncm91cGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tZ3JvdXBlZC1tZW51LWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpdGVtXT1cIm5hdmJhci5jdXJyZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzdWJOYXZDb2xsYXBzZV09XCJzdWJOYXZDb2xsYXBzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2NybS1ncm91cGVkLW1lbnUtaXRlbT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0lmPVwibmF2YmFyLmN1cnJlbnQgJiYgIW5hdmJhci5jdXJyZW50LmlzR3JvdXBlZE1lbnVcIiBjbGFzcz1cInRvcC1uYXYgbmF2LWl0ZW0gZHJvcGRvd24gbm9uLWdyb3VwZWQgYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1tZW51LWl0ZW0gW2l0ZW1dPVwibmF2YmFyLmN1cnJlbnRcIj48L3Njcm0tbWVudS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBuYXZiYXIubWVudVwiIGNsYXNzPVwidG9wLW5hdiBuYXYtaXRlbSBkcm9wZG93biBtYWluLWdyb3VwZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWdyb3VwZWQtbWVudS1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2l0ZW1dPVwiaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N1Yk5hdkNvbGxhcHNlXT1cInN1Yk5hdkNvbGxhcHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2NybS1ncm91cGVkLW1lbnUtaXRlbT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1tZW51LWl0ZW1zLWxpc3QgW2l0ZW1zXT1cIm5hdmJhci5hbGwubW9kdWxlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsS2V5PVwiTEJMX1RBQkdST1VQX0FMTFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2NybS1tZW51LWl0ZW1zLWxpc3Q+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gRU5EIE5hdmJhciB3aXRoIGdyb3VwZWQgdGFicyAtLT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBOYXZiYXIgd2l0aCBub24tZ3JvdXBlZCB0YWJzIC0tPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidm0udXNlclByZWZlcmVuY2VzWyduYXZpZ2F0aW9uX3BhcmFkaWdtJ10gIT0gJ2dtJ1wiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2YmFyLW5hdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgKm5nSWY9XCJuYXZiYXIuY3VycmVudCAmJiAhbmF2YmFyLmN1cnJlbnQuaXNHcm91cGVkTWVudVwiIGNsYXNzPVwidG9wLW5hdiBuYXYtaXRlbSBkcm9wZG93biBub24tZ3JvdXBlZCBhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLW1lbnUtaXRlbSBbaXRlbV09XCJuYXZiYXIuY3VycmVudFwiPjwvc2NybS1tZW51LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm5hdmJhci5jdXJyZW50Py5zdWJtZW51ICAmJiBuYXZiYXIuY3VycmVudC5pc0dyb3VwZWRNZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJ0b3AtbmF2IG5hdi1pdGVtIGRyb3Bkb3duIG1haW4tZ3JvdXBlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWdyb3VwZWQtbWVudS1pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpdGVtXT1cIm5hdmJhci5jdXJyZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N1Yk5hdkNvbGxhcHNlXT1cInN1Yk5hdkNvbGxhcHNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zY3JtLWdyb3VwZWQtbWVudS1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIG5hdmJhci5tZW51XCIgY2xhc3M9XCJ0b3AtbmF2IG5hdi1pdGVtIGRyb3Bkb3duIG5vbi1ncm91cGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1tZW51LWl0ZW0gW2l0ZW1dPVwiaXRlbVwiPjwvc2NybS1tZW51LWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tbWVudS1pdGVtcy1saXN0IFtpdGVtc109XCJuYXZiYXIuYWxsLm1vZHVsZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsS2V5PVwiTEJMX01PUkVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2NybS1tZW51LWl0ZW1zLWxpc3Q+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIEVORCBOYXZiYXIgd2l0aCBub24tZ3JvdXBlZCB0YWJzIC0tPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiYWN0aW9uSWNvbnNcIj48L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgIDwhLS0gR2xvYmFsIExpbmtzIC0tPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdsb2JhbC1saW5rc1wiIG5nYkRyb3Bkb3duPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXZiYXItbmF2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJnbG9iYWwtbGluay1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGluayBwcmltYXJ5LWdsb2JhbC1saW5rIGRyb3Bkb3duLXRvZ2dsZVwiIG5nYkRyb3Bkb3duVG9nZ2xlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1pbWFnZSBjbGFzcz1cImdsb2JhbC1hY3Rpb24taWNvbiBzaWNvbi0yeFwiIGltYWdlPVwidXNlclwiPjwvc2NybS1pbWFnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBhcmlhLWxhYmVsbGVkYnk9XCJuYXZiYXJEcm9wZG93bk1lbnVMaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZHJvcGRvd24tbWVudSBnbG9iYWwtbGlua3MtZHJvcGRvd24gYm9yZGVyIHNoYWRvdy1zbS0yIGRyb3Bkb3duLW1lbnUtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmdiRHJvcGRvd25NZW51PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJnbG9iYWwtdXNlci1uYW1lXCI+e3sgbmF2YmFyLmN1cnJlbnRVc2VyLmZpcnN0TmFtZSB9fSB7eyBuYXZiYXIuY3VycmVudFVzZXIubGFzdE5hbWUgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJuYXZiYXIuZ2xvYmFsQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBnbG9iYWxBY3Rpb24gb2YgbmF2YmFyLmdsb2JhbEFjdGlvbnM7IGxldCBmaXJzdCA9IGZpcnN0OyBsZXQgbGFzdCA9IGxhc3Q7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtIGdsb2JhbC1saW5rcy1zdWJsaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwie3sgZ2xvYmFsQWN0aW9uLmxpbmsudXJsIH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZ2JEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJ7eyBnbG9iYWxBY3Rpb24ubGluay50YXJnZXQgfX1cIj57eyBnbG9iYWxBY3Rpb24ubGluay5sYWJlbCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgKm5nSWY9XCJsYXN0ID09PSB0cnVlIHx8IGZpcnN0ID09PSB0cnVlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWxvZ291dC11aT48L3Njcm0tbG9nb3V0LXVpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwhLS0gRU5EIEdsb2JhbCBMaW5rcyAtLT5cblxuICAgICAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgICAgIDwhLS0gRW5kIG9mIG5hdmJhciBzZWN0aW9uIHdpdGggZGF0YSBvbmNlIGF1dGhlbnRpY2F0ZWQgLS0+XG5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8bmctdGVtcGxhdGUgI2FjdGlvbkljb25zPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uLWdyb3VwIG5hdmJhci1hY3Rpb24tZ3JvdXBcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbi1uZXcgZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImFjdGlvbi1saW5rIHByaW1hcnktZ2xvYmFsLWxpbmtcIiB0eXBlPVwiYnV0dG9uXCIgYXJpYS1sYWJlbD1cIlF1aWNrIENyZWF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c2NybS1pbWFnZSBjbGFzcz1cImFjdGlvbi1idG4taWNvblwiIGltYWdlPVwicGx1c1wiPjwvc2NybS1pbWFnZT5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPHVsIFtjbGFzcy5kcm9wZG93bi1tZW51LXJpZ2h0XT1cIiFtb2JpbGVOYXZiYXJcIiBjbGFzcz1cImRyb3Bkb3duLW1lbnUgYm9yZGVyIHNoYWRvdy1zbS0yXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIihuYXZiYXI/LmN1cnJlbnQ/Lm1vZHVsZSA/PyAnJykgJiYgY3VycmVudFF1aWNrQWN0aW9ucy5sZW5ndGhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5ldy1saXN0LWl0ZW0taGVhZGVyIGZvbnQtd2VpZ2h0LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1sYWJlbCBsYWJlbEtleT1cIkxCTF9NT0RVTEVfTkFNRVwiIFttb2R1bGVdPVwibmF2YmFyLmN1cnJlbnQubW9kdWxlXCI+PC9zY3JtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5ldy1saXN0LWl0ZW1cIiAqbmdGb3I9XCJsZXQgbW9kdWxlUXVpY2tBY3Rpb24gb2YgY3VycmVudFF1aWNrQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhbW9kdWxlUXVpY2tBY3Rpb24ucHJvY2Vzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJtb2R1bGVRdWlja0FjdGlvbi51cmxcIiBbcXVlcnlQYXJhbXNdPVwibW9kdWxlUXVpY2tBY3Rpb24/LnBhcmFtcyA/PyBudWxsXCIgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1sYWJlbCBbbGFiZWxLZXldPVwibW9kdWxlUXVpY2tBY3Rpb24ubGFiZWxLZXlcIiBbbW9kdWxlXT1cIm5hdmJhci5jdXJyZW50Lm1vZHVsZVwiPjwvc2NybS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJtb2R1bGVRdWlja0FjdGlvbi5wcm9jZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJoYW5kbGVQcm9jZXNzKG1vZHVsZVF1aWNrQWN0aW9uKVwiIGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tbGFiZWwgW2xhYmVsS2V5XT1cIm1vZHVsZVF1aWNrQWN0aW9uLmxhYmVsS2V5XCIgW21vZHVsZV09XCJuYXZiYXIuY3VycmVudC5tb2R1bGVcIj48L3Njcm0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIih0aGlzPy5uYXZpZ2F0aW9uPy5xdWlja0FjdGlvbnMgPz8gW10pLmxlbmd0aFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmV3LWxpc3QtaXRlbS1oZWFkZXIgZm9udC13ZWlnaHQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzY3JtLWxhYmVsIGxhYmVsS2V5PVwiTEJMX1FVSUNLX0FDVElPTlNcIj48L3Njcm0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmV3LWxpc3QtaXRlbVwiICpuZ0Zvcj1cImxldCBxdWlja0FjdGlvbiBvZiAodGhpcz8ubmF2aWdhdGlvbj8ucXVpY2tBY3Rpb25zID8/IFtdKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhcXVpY2tBY3Rpb24ucHJvY2Vzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJxdWlja0FjdGlvbi51cmxcIiBbcXVlcnlQYXJhbXNdPVwicXVpY2tBY3Rpb24/LnBhcmFtcyA/PyBudWxsXCIgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NybS1sYWJlbCBbbGFiZWxLZXldPVwicXVpY2tBY3Rpb24ubGFiZWxLZXlcIiBbbW9kdWxlXT1cInF1aWNrQWN0aW9uLm1vZHVsZVwiPjwvc2NybS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJxdWlja0FjdGlvbi5wcm9jZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJoYW5kbGVQcm9jZXNzKHF1aWNrQWN0aW9uKVwiIGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNjcm0tbGFiZWwgW2xhYmVsS2V5XT1cInF1aWNrQWN0aW9uLmxhYmVsS2V5XCIgW21vZHVsZV09XCJxdWlja0FjdGlvbi5tb2R1bGVcIj48L3Njcm0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgbXgtMVwiPlxuICAgICAgICAgICAgICAgIDxzY3JtLXNlYXJjaC1iYXI+PC9zY3JtLXNlYXJjaC1iYXI+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICpuZ0lmPVwibm90aWZpY2F0aW9uc0VuYWJsZWQgJiYgY2hlY2tBcHBTdHJpbmdzKHZtLmFwcFN0cmluZ3MpICYmIGFyZVByZWZlcmVuY2VzSW5pdGlhbGl6ZWQodm0udXNlclByZWZlcmVuY2VzKVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJhY3Rpb24tYWxlcnQgZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImFjdGlvbi1saW5rIHByaW1hcnktZ2xvYmFsLWxpbmtcIiB0eXBlPVwiYnV0dG9uXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBBbGVydHNcIlxuICAgICAgICAgICAgICAgICAgIChtb3VzZWVudGVyKT1cIm1hcmtBc1JlYWQoKVwiPlxuICAgICAgICAgICAgICAgICAgICA8c2NybS1pbWFnZSBjbGFzcz1cImFjdGlvbi1idG4taWNvblwiIGltYWdlPVwiYWxlcnRcIj48L3Njcm0taW1hZ2U+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIobm90aWZpY2F0aW9uQ291bnQkIHwgYXN5bmMpIGFzIG5vdGlmaWNhdGlvbkNvdW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCIobm90aWZpY2F0aW9uQ291bnQgPz8gZmFsc2UpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJhZGdlIGJhZGdlLXBvc2l0aW9uIHJvdW5kZWQtcGlsbCBiZy1kYW5nZXIgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibm90aWZpY2F0aW9uQ291bnQgPiAwXCI+e3tub3RpZmljYXRpb25Db3VudCB9fTwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudSBib3JkZXIgc2hhZG93LXNtLTIgZHJvcGRvd24tbWVudS1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICA8c2NybS1ub3RpZmljYXRpb25zPjwvc2NybS1ub3RpZmljYXRpb25zPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuPC9kaXY+XG5cbjwhLS0gRW5kIG9mIG1haW4gbmF2YmFyIHNlY3Rpb24gLS0+XG4iXX0=