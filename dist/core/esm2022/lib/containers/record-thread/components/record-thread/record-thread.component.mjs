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
import { Component, Input, ViewChild } from '@angular/core';
import { combineLatestWith } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { isVoid } from 'common';
import * as i0 from "@angular/core";
import * as i1 from "../../store/record-thread/record-thread.store.factory";
import * as i2 from "../../store/record-thread/record-thread-item.store.factory";
import * as i3 from "../../../../services/record/record.manager";
import * as i4 from "../../../../services/message/message.service";
import * as i5 from "../../adapters/record-thread-list-actions.adapter.factory";
import * as i6 from "@angular/common";
import * as i7 from "../../../../components/button/button.component";
import * as i8 from "../../../../components/label/label.component";
import * as i9 from "../record-thread-item/record-thread-item.component";
import * as i10 from "../../../../components/loading-spinner/loading-spinner.component";
import * as i11 from "../../../../components/action-group-menu/action-group-menu.component";
const _c0 = ["list"];
function RecordThreadComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelement(1, "scrm-label", 5);
    i0.ɵɵelementEnd();
} }
function RecordThreadComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "scrm-loading-spinner", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("overlay", true);
} }
function RecordThreadComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelement(1, "scrm-button", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("config", ctx_r6.getLoadMoreButton());
} }
function RecordThreadComponent_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", null, 15);
    i0.ɵɵelement(2, "scrm-record-thread-item", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const record_r10 = ctx.$implicit;
    const _r11 = i0.ɵɵreference(1);
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("config", ctx_r7.buildItem(record_r10, _r11));
} }
function RecordThreadComponent_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵelement(1, "scrm-button", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("config", ctx_r8.getLoadMoreButton());
} }
function RecordThreadComponent_div_3_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "scrm-action-group-menu", 17);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    let tmp_0_0;
    let tmp_1_0;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("buttonClass", (tmp_0_0 = ctx_r9.config.listActionsButtonClass) !== null && tmp_0_0 !== undefined ? tmp_0_0 : "")("buttonGroupClass", (tmp_1_0 = ctx_r9.config.listActionsButtonGroupClass) !== null && tmp_1_0 !== undefined ? tmp_1_0 : "")("config", ctx_r9.listActionAdapter);
} }
function RecordThreadComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8, 9);
    i0.ɵɵtemplate(2, RecordThreadComponent_div_3_div_2_Template, 2, 1, "div", 10);
    i0.ɵɵtemplate(3, RecordThreadComponent_div_3_div_3_Template, 3, 1, "div", 11);
    i0.ɵɵelementStart(4, "div");
    i0.ɵɵtemplate(5, RecordThreadComponent_div_3_div_5_Template, 2, 1, "div", 12);
    i0.ɵɵtemplate(6, RecordThreadComponent_div_3_ng_container_6_Template, 2, 3, "ng-container", 3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    let tmp_3_0;
    i0.ɵɵproperty("ngStyle", ctx_r2.getMaxHeight());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.loadMorePosition === "top" && !ctx_r2.allLoaded());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2.records);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap((tmp_3_0 = ctx_r2.config.listActionsClass) !== null && tmp_3_0 !== undefined ? tmp_3_0 : "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.loadMorePosition === "bottom" && !ctx_r2.allLoaded());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.config.listActions);
} }
function RecordThreadComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "h6", 18);
    i0.ɵɵelement(2, "scrm-label", 19);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("labelKey", ctx_r3.config.noDataLabel || "LBL_NO_DATA");
} }
function RecordThreadComponent_ng_container_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21)(1, "div", 22);
    i0.ɵɵelement(2, "scrm-record-thread-item", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 23);
    i0.ɵɵelement(4, "scrm-button", 14);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("config", ctx_r12.buildCreateItem());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("config", ctx_r12.getCreateButton());
} }
function RecordThreadComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RecordThreadComponent_ng_container_5_div_1_Template, 5, 2, "div", 20);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r4.loading);
} }
class RecordThreadComponent {
    storeFactory;
    itemFactory;
    recordManager;
    message;
    actionAdapterFactory;
    config;
    listContainer;
    store;
    createStore;
    records;
    loading = false;
    maxHeight = 400;
    direction = 'asc';
    loadMorePosition = 'top';
    listActionAdapter;
    shouldResetScroll = false;
    subs = [];
    presetFieldValues;
    constructor(storeFactory, itemFactory, recordManager, message, actionAdapterFactory) {
        this.storeFactory = storeFactory;
        this.itemFactory = itemFactory;
        this.recordManager = recordManager;
        this.message = message;
        this.actionAdapterFactory = actionAdapterFactory;
    }
    ngOnInit() {
        if (!isVoid(this.config.maxListHeight)) {
            this.maxHeight = this.config.maxListHeight;
        }
        if (!this.config.module) {
            return;
        }
        if (!this.config.store) {
            this.store = this.storeFactory.create();
            this.store.setItemMetadata(this.config.itemConfig.metadata);
            this.store.setListMetadata({ actions: this.config.listActions });
            this.store.init(this.config.module, false, this?.config?.pageSize ?? null);
        }
        else {
            this.store = this.config.store;
        }
        this.direction = this.config.direction || this.direction;
        this.setLoadMorePosition();
        this.initCreate();
        this.initDataSubscription();
        if (this.config.filters$) {
            this.subs.push(this.config.filters$.subscribe(filters => {
                this.store.setFilters(filters).pipe(take(1)).subscribe(() => {
                    if (this.config.onRefresh) {
                        this.config.onRefresh();
                    }
                });
            }));
        }
        else {
            this.store.load(false).subscribe(() => {
                if (this.config.onRefresh) {
                    this.config.onRefresh();
                }
            });
        }
        const autoRefreshFrequency = this?.config?.autoRefreshFrequency ?? 0;
        if (autoRefreshFrequency && this.store) {
            const min = this.config.autoRefreshDeviationMin ?? -15;
            const max = this.config.autoRefreshDeviationMax ?? 15;
            this.subs.push(this.store.initAutoRefresh(autoRefreshFrequency, min, max, this.config.onRefresh).subscribe());
        }
        this.initLoading();
        this.listActionAdapter = this.actionAdapterFactory.create(this.store, this.config);
    }
    setLoadMorePosition() {
        this.loadMorePosition = this.direction === 'asc' ? 'top' : 'bottom';
        if (this.config.loadMorePosition) {
            this.loadMorePosition = this.config.loadMorePosition;
        }
    }
    ngAfterViewInit() {
        this.shouldResetScroll = true;
        this.resetScroll();
    }
    ngOnDestroy() {
        if (!(this?.config?.store ?? null)) {
            this.store.clear();
        }
        this.store = null;
        this.subs.forEach(sub => sub.unsubscribe());
    }
    buildItem(item, itemRef) {
        let klass = 'record-thread-list-item';
        if (this.config.itemConfig.klass) {
            klass += ' ' + this.config.itemConfig.klass;
        }
        return {
            ...this.config.itemConfig,
            store: item,
            threadStore: this.store,
            klass: klass,
            containerClass: this.config.itemConfig.containerClass,
            flexDirection: this.config?.itemConfig?.flexDirection ?? '',
            expanded: () => {
                this.scrollToItem(itemRef);
            },
            collapsed: () => {
                this.scrollToItem(itemRef);
            }
        };
    }
    getLoadMoreButton() {
        return {
            klass: 'load-more-button btn btn-link btn-sm',
            labelKey: 'LBL_LOAD_MORE',
            onClick: () => {
                if (this?.config?.onLoadMore) {
                    this.store.getRecordList().records$.pipe(take(1), tap(() => this.config.onLoadMore())).subscribe();
                }
                this.store.loadMore();
            }
        };
    }
    buildCreateItem() {
        return {
            ...this.config.createConfig,
            store: this.createStore,
            rowClass: { 'pt-1': true },
            klass: 'record-thread-create-item',
        };
    }
    getCreateButton() {
        return {
            klass: 'create-thread-item-button btn btn-main btn-sm',
            labelKey: 'LBL_SUBMIT_BUTTON_LABEL',
            onClick: () => {
                this.createStore.validate().pipe(take(1)).subscribe(valid => {
                    if (valid) {
                        this.createStore.save().pipe(take(1)).subscribe(() => {
                            this.store.reload();
                            this.initRecord();
                            this.shouldResetScroll = true;
                            this.message.addSuccessMessageByKey('LBL_ACTION_SUCCESS');
                        });
                        return;
                    }
                    this.message.addWarningMessageByKey('LBL_VALIDATION_ERRORS');
                });
            }
        };
    }
    allLoaded() {
        return !!(this.store && this.store.allLoaded());
    }
    getMaxHeight() {
        if (this.maxHeight == 0) {
            return null;
        }
        return { 'max-height.px': this.maxHeight, 'overflow-y': 'auto' };
    }
    initRecord() {
        const emptyRecord = this.recordManager.buildEmptyRecord(this.config.module);
        this.addPresetFields(emptyRecord);
        let mode = 'edit';
        if (this.config.createConfig && this.config.createConfig.initialMode) {
            mode = this.config.createConfig.initialMode;
        }
        this.createStore.initRecord(emptyRecord, mode, false);
    }
    scrollToEnd() {
        if (!this.listContainer || !this.listContainer.nativeElement) {
            return;
        }
        this.scrollTo(this.listContainer.nativeElement.scrollHeight);
    }
    scrollToTop() {
        this.scrollTo(0);
    }
    scrollTo(position) {
        try {
            this.listContainer.nativeElement.scrollTop = position;
        }
        catch (err) {
        }
    }
    scrollToItem(item) {
        if (!item || !this.listContainer || !this.listContainer.nativeElement) {
            return;
        }
        const elementTop = item.offsetTop;
        const parentTop = this.listContainer.nativeElement.offsetTop;
        const relativeTop = elementTop - parentTop;
        this.scrollTo(relativeTop);
    }
    resetScroll() {
        if (this.shouldResetScroll === false) {
            return;
        }
        if (this.direction === 'asc') {
            this.scrollToEnd();
        }
        else {
            this.scrollToTop();
        }
        this.shouldResetScroll = false;
    }
    scheduleScrollReset() {
        setTimeout(() => {
            this.resetScroll();
        }, 500);
    }
    initCreate() {
        if (!this.config.create) {
            return;
        }
        this.createStore = this.itemFactory.create();
        this.createStore.setMetadata(this.config.createConfig.metadata);
        this.initRecord();
        this.initPresetFieldsMapping();
    }
    initPresetFieldsMapping() {
        if (!this.config.presetFields$) {
            return;
        }
        this.subs.push(this.config.presetFields$.subscribe(presetFieldValues => {
            if (!presetFieldValues || !Object.keys(presetFieldValues).length) {
                return;
            }
            this.presetFieldValues = presetFieldValues;
            const record = this.createStore.recordStore.getBaseRecord();
            this.addPresetFields(record);
            this.createStore.recordStore.setRecord(record);
        }));
    }
    addPresetFields(record) {
        if (!this.presetFieldValues) {
            return;
        }
        record.attributes = {
            ...this.presetFieldValues,
            ...(record.attributes || {})
        };
    }
    initDataSubscription() {
        this.subs.push(this.store.stores$.subscribe(records => {
            if (!this.records || !this.records.length) {
                this.shouldResetScroll = true;
            }
            if (this.direction === 'asc') {
                this.records = records.reverse();
                this.scheduleScrollReset();
                return;
            }
            this.records = records;
            this.scheduleScrollReset();
        }));
    }
    initLoading() {
        let loading$;
        if (this.createStore && this.createStore.loading$) {
            loading$ = this.store.$loading.pipe(combineLatestWith(this.createStore.loading$));
        }
        else {
            loading$ = this.store.$loading.pipe(map(value => [value]));
        }
        this.subs.push(loading$.subscribe((loadings) => {
            if (!loadings || !loadings.length) {
                this.loading = false;
                return;
            }
            let loading = false;
            loadings.forEach(value => {
                loading = loading || value;
            });
            this.loading = loading;
        }));
    }
    static ɵfac = function RecordThreadComponent_Factory(t) { return new (t || RecordThreadComponent)(i0.ɵɵdirectiveInject(i1.RecordThreadStoreFactory), i0.ɵɵdirectiveInject(i2.RecordThreadItemStoreFactory), i0.ɵɵdirectiveInject(i3.RecordManager), i0.ɵɵdirectiveInject(i4.MessageService), i0.ɵɵdirectiveInject(i5.RecordThreadListActionsAdapterFactory)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RecordThreadComponent, selectors: [["scrm-record-thread"]], viewQuery: function RecordThreadComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listContainer = _t.first);
        } }, inputs: { config: "config" }, decls: 6, vars: 8, consts: [["class", "d-flex record-thread-no-data justify-content-center h3", 4, "ngIf"], ["class", "d-flex record-thread-loading justify-content-center", 4, "ngIf"], ["class", "record-thread-list scrollbar-thin", 3, "ngStyle", 4, "ngIf"], [4, "ngIf"], [1, "d-flex", "record-thread-no-data", "justify-content-center", "h3"], ["labelKey", "LBL_NO_DATA"], [1, "d-flex", "record-thread-loading", "justify-content-center"], [3, "overlay"], [1, "record-thread-list", "scrollbar-thin", 3, "ngStyle"], ["list", ""], ["class", "record-thread-load-more d-flex justify-content-center flex-grow-1", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "record-thread-load-more d-flex justify-content-center", 4, "ngIf"], [1, "record-thread-load-more", "d-flex", "justify-content-center", "flex-grow-1"], [3, "config"], ["item", ""], [1, "record-thread-load-more", "d-flex", "justify-content-center"], [3, "buttonClass", "buttonGroupClass", "config"], [1, "pt-3", "pl-3", "pr-3", "pb-2"], [3, "labelKey"], ["class", "d-flex flex-column record-thread-create-container", 4, "ngIf"], [1, "d-flex", "flex-column", "record-thread-create-container"], [1, "flex-grow-1"], [1, "flex-grow-1", "d-flex", "justify-content-start", "pt-1", "record-thread-create-buttons"]], template: function RecordThreadComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵtemplate(1, RecordThreadComponent_div_1_Template, 2, 0, "div", 0);
            i0.ɵɵtemplate(2, RecordThreadComponent_div_2_Template, 2, 1, "div", 1);
            i0.ɵɵtemplate(3, RecordThreadComponent_div_3_Template, 7, 7, "div", 2);
            i0.ɵɵtemplate(4, RecordThreadComponent_div_4_Template, 3, 1, "div", 3);
            i0.ɵɵtemplate(5, RecordThreadComponent_ng_container_5_Template, 2, 1, "ng-container", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassMapInterpolate1("record-thread ", ctx.config && ctx.config.klass || "", "");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.loading && !ctx.records && !ctx.records.length);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.loading);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.records && ctx.records.length);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", (!ctx.records || !ctx.records.length) && !ctx.loading && ctx.config.showNoDataMessage);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.config.create && ctx.createStore);
        } }, dependencies: [i6.NgForOf, i6.NgIf, i6.NgStyle, i7.ButtonComponent, i8.LabelComponent, i9.RecordThreadItemComponent, i10.LoadingSpinnerComponent, i11.ActionGroupMenuComponent], encapsulation: 2 });
}
export { RecordThreadComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordThreadComponent, [{
        type: Component,
        args: [{ selector: 'scrm-record-thread', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n\n<div class=\"record-thread {{(config && config.klass) || ''}}\">\n    <div *ngIf=\"!loading && !records && !records.length\"\n         class=\"d-flex record-thread-no-data justify-content-center h3\">\n        <scrm-label labelKey=\"LBL_NO_DATA\"></scrm-label>\n    </div>\n\n    <div *ngIf=\"loading\" class=\"d-flex record-thread-loading justify-content-center\">\n        <scrm-loading-spinner [overlay]=\"true\"></scrm-loading-spinner>\n    </div>\n\n    <div #list\n         *ngIf=\"records && records.length\"\n         [ngStyle]=\"getMaxHeight()\"\n         class=\"record-thread-list scrollbar-thin\">\n\n        <div *ngIf=\"loadMorePosition === 'top' && !allLoaded()\"\n             class=\"record-thread-load-more d-flex justify-content-center flex-grow-1\">\n            <scrm-button [config]=\"getLoadMoreButton()\"></scrm-button>\n        </div>\n\n        <div #item *ngFor=\"let record of records\">\n            <scrm-record-thread-item [config]=\"buildItem(record, item)\"></scrm-record-thread-item>\n        </div>\n\n        <div [class]=\"config.listActionsClass ?? ''\">\n\n            <div *ngIf=\"loadMorePosition === 'bottom' && !allLoaded()\"\n                 class=\"record-thread-load-more d-flex justify-content-center\">\n                <scrm-button [config]=\"getLoadMoreButton()\"></scrm-button>\n            </div>\n\n            <ng-container *ngIf=\"config.listActions\">\n                <scrm-action-group-menu [buttonClass]=\"config.listActionsButtonClass ?? ''\"\n                                        [buttonGroupClass]=\"config.listActionsButtonGroupClass ?? ''\"\n                                        [config]=\"listActionAdapter\">\n                </scrm-action-group-menu>\n            </ng-container>\n\n        </div>\n\n    </div>\n\n    <div *ngIf=\"(!records || !records.length) && !loading && config.showNoDataMessage\">\n        <h6 class=\"pt-3 pl-3 pr-3 pb-2\">\n            <scrm-label [labelKey]=\"config.noDataLabel || 'LBL_NO_DATA'\"></scrm-label>\n        </h6>\n\n    </div>\n\n    <ng-container *ngIf=\"config.create && createStore\">\n\n        <div *ngIf=\"!loading\"\n             class=\"d-flex flex-column record-thread-create-container\">\n\n            <div class=\"flex-grow-1\">\n                <scrm-record-thread-item [config]=\"buildCreateItem()\"></scrm-record-thread-item>\n            </div>\n\n            <div class=\"flex-grow-1 d-flex justify-content-start pt-1 record-thread-create-buttons\">\n                <scrm-button [config]=\"getCreateButton()\"></scrm-button>\n            </div>\n\n        </div>\n\n    </ng-container>\n\n</div>\n" }]
    }], function () { return [{ type: i1.RecordThreadStoreFactory }, { type: i2.RecordThreadItemStoreFactory }, { type: i3.RecordManager }, { type: i4.MessageService }, { type: i5.RecordThreadListActionsAdapterFactory }]; }, { config: [{
            type: Input
        }], listContainer: [{
            type: ViewChild,
            args: ['list']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLXRocmVhZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvY29udGFpbmVycy9yZWNvcmQtdGhyZWFkL2NvbXBvbmVudHMvcmVjb3JkLXRocmVhZC9yZWNvcmQtdGhyZWFkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb250YWluZXJzL3JlY29yZC10aHJlYWQvY29tcG9uZW50cy9yZWNvcmQtdGhyZWFkL3JlY29yZC10aHJlYWQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBZ0IsU0FBUyxFQUFjLEtBQUssRUFBcUIsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFBQyxpQkFBaUIsRUFBMkIsTUFBTSxNQUFNLENBQUM7QUFJakUsT0FBTyxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFHOUMsT0FBTyxFQUFnQyxNQUFNLEVBQW1CLE1BQU0sUUFBUSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUNMM0UsOEJBQ29FO0lBQ2hFLGdDQUFnRDtJQUNwRCxpQkFBTTs7O0lBRU4sOEJBQWlGO0lBQzdFLDBDQUE4RDtJQUNsRSxpQkFBTTs7SUFEb0IsZUFBZ0I7SUFBaEIsOEJBQWdCOzs7SUFRdEMsK0JBQytFO0lBQzNFLGtDQUEwRDtJQUM5RCxpQkFBTTs7O0lBRFcsZUFBOEI7SUFBOUIsbURBQThCOzs7SUFHL0MscUNBQTBDO0lBQ3RDLDhDQUFzRjtJQUMxRixpQkFBTTs7Ozs7SUFEdUIsZUFBa0M7SUFBbEMsMkRBQWtDOzs7SUFLM0QsK0JBQ21FO0lBQy9ELGtDQUEwRDtJQUM5RCxpQkFBTTs7O0lBRFcsZUFBOEI7SUFBOUIsbURBQThCOzs7SUFHL0MsNkJBQXlDO0lBQ3JDLDZDQUd5QjtJQUM3QiwwQkFBZTs7Ozs7SUFKYSxlQUFtRDtJQUFuRCwrSEFBbUQsNEhBQUEsb0NBQUE7OztJQXRCdkYsaUNBRytDO0lBRTNDLDZFQUdNO0lBRU4sNkVBRU07SUFFTiwyQkFBNkM7SUFFekMsNkVBR007SUFFTiw4RkFLZTtJQUVuQixpQkFBTSxFQUFBOzs7O0lBMUJMLCtDQUEwQjtJQUdyQixlQUFnRDtJQUFoRCwrRUFBZ0Q7SUFLeEIsZUFBVTtJQUFWLHdDQUFVO0lBSW5DLGVBQXVDO0lBQXZDLDBHQUF1QztJQUVsQyxlQUFtRDtJQUFuRCxrRkFBbUQ7SUFLMUMsZUFBd0I7SUFBeEIsZ0RBQXdCOzs7SUFXL0MsMkJBQW1GLGFBQUE7SUFFM0UsaUNBQTBFO0lBQzlFLGlCQUFLLEVBQUE7OztJQURXLGVBQWdEO0lBQWhELHFFQUFnRDs7O0lBT2hFLCtCQUMrRCxjQUFBO0lBR3ZELDhDQUFnRjtJQUNwRixpQkFBTTtJQUVOLCtCQUF3RjtJQUNwRixrQ0FBd0Q7SUFDNUQsaUJBQU0sRUFBQTs7O0lBTHVCLGVBQTRCO0lBQTVCLGtEQUE0QjtJQUl4QyxlQUE0QjtJQUE1QixrREFBNEI7OztJQVZyRCw2QkFBbUQ7SUFFL0Msc0ZBV007SUFFViwwQkFBZTs7O0lBYkwsZUFBYztJQUFkLHNDQUFjOztBRHJDNUIsTUFLYSxxQkFBcUI7SUFzQmhCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUF4QkwsTUFBTSxDQUFxQjtJQUNqQixhQUFhLENBQWE7SUFFN0MsS0FBSyxDQUFvQjtJQUN6QixXQUFXLENBQXdCO0lBQ25DLE9BQU8sQ0FBMEI7SUFDakMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUNoQixTQUFTLEdBQUcsR0FBRyxDQUFDO0lBQ2hCLFNBQVMsR0FBbUIsS0FBSyxDQUFDO0lBQ2xDLGdCQUFnQixHQUE4QixLQUFLLENBQUM7SUFDcEQsaUJBQWlCLENBQWlDO0lBRXhDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztJQUUxQixJQUFJLEdBQW1CLEVBQUUsQ0FBQztJQUMxQixpQkFBaUIsQ0FBZTtJQUkxQyxZQUNjLFlBQXNDLEVBQ3RDLFdBQXlDLEVBQ3pDLGFBQTRCLEVBQzVCLE9BQXVCLEVBQ3ZCLG9CQUEyRDtRQUozRCxpQkFBWSxHQUFaLFlBQVksQ0FBMEI7UUFDdEMsZ0JBQVcsR0FBWCxXQUFXLENBQThCO1FBQ3pDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBdUM7SUFFekUsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztTQUM5QztRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUNyQixPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVELElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFDLENBQUMsQ0FBQztZQUMvRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLElBQUksSUFBSSxDQUFDLENBQUM7U0FDOUU7YUFBTTtZQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDbEM7UUFFRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDekQsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFFM0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBRTVCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNwRCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtvQkFDeEQsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTt3QkFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQTtxQkFDMUI7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBRVA7YUFBTTtZQUNILElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2xDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7b0JBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUE7aUJBQzFCO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUVELE1BQU0sb0JBQW9CLEdBQUcsSUFBSSxFQUFFLE1BQU0sRUFBRSxvQkFBb0IsSUFBSSxDQUFDLENBQUM7UUFDckUsSUFBSSxvQkFBb0IsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3BDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsdUJBQXVCLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDdkQsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsSUFBSSxFQUFFLENBQUM7WUFFdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7U0FDakg7UUFFRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFbkIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFdkYsQ0FBQztJQUVPLG1CQUFtQjtRQUN2QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFNBQVMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQ3BFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRTtZQUM5QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztTQUN4RDtJQUNMLENBQUM7SUFFRCxlQUFlO1FBQ1gsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssSUFBSSxJQUFJLENBQUMsRUFBRTtZQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3RCO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQTtJQUMvQyxDQUFDO0lBRUQsU0FBUyxDQUFDLElBQTJCLEVBQUUsT0FBWTtRQUMvQyxJQUFJLEtBQUssR0FBRyx5QkFBeUIsQ0FBQztRQUV0QyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRTtZQUM5QixLQUFLLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQTtTQUM5QztRQUNELE9BQU87WUFDSCxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVTtZQUN6QixLQUFLLEVBQUUsSUFBSTtZQUNYLFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSztZQUN2QixLQUFLLEVBQUUsS0FBSztZQUNaLGNBQWMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxjQUFjO1lBQ3JELGFBQWEsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxhQUFhLElBQUksRUFBRTtZQUMzRCxRQUFRLEVBQUUsR0FBUyxFQUFFO2dCQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQy9CLENBQUM7WUFDRCxTQUFTLEVBQUUsR0FBUyxFQUFFO2dCQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQy9CLENBQUM7U0FDc0IsQ0FBQztJQUNoQyxDQUFDO0lBRUQsaUJBQWlCO1FBQ2IsT0FBTztZQUNILEtBQUssRUFBRSxzQ0FBc0M7WUFDN0MsUUFBUSxFQUFFLGVBQWU7WUFDekIsT0FBTyxFQUFFLEdBQUcsRUFBRTtnQkFDVixJQUFJLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFO29CQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUN0QyxDQUFDLFNBQVMsRUFBRSxDQUFDO2lCQUNqQjtnQkFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzFCLENBQUM7U0FDZSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxlQUFlO1FBQ1gsT0FBTztZQUNILEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZO1lBQzNCLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVztZQUN2QixRQUFRLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDO1lBQ3hCLEtBQUssRUFBRSwyQkFBMkI7U0FDWCxDQUFDO0lBQ2hDLENBQUM7SUFFRCxlQUFlO1FBQ1gsT0FBTztZQUNILEtBQUssRUFBRSwrQ0FBK0M7WUFDdEQsUUFBUSxFQUFFLHlCQUF5QjtZQUNuQyxPQUFPLEVBQUUsR0FBRyxFQUFFO2dCQUNWLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDeEQsSUFBSSxLQUFLLEVBQUU7d0JBQ1AsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTs0QkFDakQsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQzs0QkFDcEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDOzRCQUVsQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDOzRCQUU5QixJQUFJLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLG9CQUFvQixDQUFDLENBQUE7d0JBQzdELENBQUMsQ0FBQyxDQUFDO3dCQUNILE9BQU87cUJBQ1Y7b0JBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO2dCQUNqRSxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUM7U0FDZSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxTQUFTO1FBQ0wsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsWUFBWTtRQUNSLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLEVBQUU7WUFDckIsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUVELE9BQU8sRUFBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFDLENBQUE7SUFDbEUsQ0FBQztJQUVTLFVBQVU7UUFDaEIsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbEMsSUFBSSxJQUFJLEdBQUcsTUFBa0IsQ0FBQztRQUM5QixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRTtZQUNsRSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDO1NBQy9DO1FBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRVMsV0FBVztRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFO1lBQzFELE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVTLFdBQVc7UUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRVMsUUFBUSxDQUFDLFFBQWdCO1FBQy9CLElBQUk7WUFDQSxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1NBQ3pEO1FBQUMsT0FBTyxHQUFHLEVBQUU7U0FDYjtJQUNMLENBQUM7SUFFUyxZQUFZLENBQUMsSUFBUztRQUM1QixJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFO1lBQ25FLE9BQU87U0FDVjtRQUVELE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDbEMsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO1FBQzdELE1BQU0sV0FBVyxHQUFHLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFFM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRVMsV0FBVztRQUNqQixJQUFJLElBQUksQ0FBQyxpQkFBaUIsS0FBSyxLQUFLLEVBQUU7WUFDbEMsT0FBTztTQUNWO1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLEtBQUssRUFBRTtZQUMxQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdEI7YUFBTTtZQUNILElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN0QjtRQUVELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQztJQUVTLG1CQUFtQjtRQUN6QixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNaLENBQUM7SUFFUyxVQUFVO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUNyQixPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFUyx1QkFBdUI7UUFFN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFO1lBQzVCLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO1lBRW5FLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFNLEVBQUU7Z0JBQzlELE9BQU87YUFDVjtZQUVELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztZQUUzQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUM1RCxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRTdCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuRCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQztJQUVTLGVBQWUsQ0FBQyxNQUFjO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDekIsT0FBTztTQUNWO1FBRUQsTUFBTSxDQUFDLFVBQVUsR0FBRztZQUNoQixHQUFHLElBQUksQ0FBQyxpQkFBaUI7WUFDekIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDO1NBQy9CLENBQUM7SUFDTixDQUFDO0lBR1Msb0JBQW9CO1FBRTFCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUVsRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO2dCQUN2QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO2FBQ2pDO1lBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLEtBQUssRUFBRTtnQkFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2dCQUMzQixPQUFPO2FBQ1Y7WUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQztJQUdTLFdBQVc7UUFDakIsSUFBSSxRQUFvQyxDQUFDO1FBRXpDLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRTtZQUMvQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUMvQixpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUMvQyxDQUFDO1NBQ0w7YUFBTTtZQUNILFFBQVEsR0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQzlCLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDeEIsQ0FBQTtTQUNKO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQzNDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO2dCQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDckIsT0FBTzthQUNWO1lBRUQsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBRXBCLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3JCLE9BQU8sR0FBRyxPQUFPLElBQUksS0FBSyxDQUFDO1lBQy9CLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7K0VBclZRLHFCQUFxQjs2REFBckIscUJBQXFCOzs7Ozs7WUNuQmxDLDJCQUE4RDtZQUMxRCxzRUFHTTtZQUVOLHNFQUVNO1lBRU4sc0VBOEJNO1lBRU4sc0VBS007WUFFTix3RkFlZTtZQUVuQixpQkFBTTs7WUFsRUQscUZBQXdEO1lBQ25ELGVBQTZDO1lBQTdDLDBFQUE2QztZQUs3QyxlQUFhO1lBQWIsa0NBQWE7WUFLYixlQUErQjtZQUEvQix3REFBK0I7WUErQi9CLGVBQTJFO1lBQTNFLDRHQUEyRTtZQU9sRSxlQUFrQztZQUFsQywyREFBa0M7OztTRDlCeEMscUJBQXFCO3VGQUFyQixxQkFBcUI7Y0FMakMsU0FBUzsyQkFDSSxvQkFBb0I7bU9BTXJCLE1BQU07a0JBQWQsS0FBSztZQUNhLGFBQWE7a0JBQS9CLFNBQVM7bUJBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Y29tYmluZUxhdGVzdFdpdGgsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1JlY29yZFRocmVhZFN0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9yZWNvcmQtdGhyZWFkL3JlY29yZC10aHJlYWQuc3RvcmUnO1xuaW1wb3J0IHtSZWNvcmRUaHJlYWRTdG9yZUZhY3Rvcnl9IGZyb20gJy4uLy4uL3N0b3JlL3JlY29yZC10aHJlYWQvcmVjb3JkLXRocmVhZC5zdG9yZS5mYWN0b3J5JztcbmltcG9ydCB7UmVjb3JkVGhyZWFkQ29uZmlnfSBmcm9tICcuL3JlY29yZC10aHJlYWQubW9kZWwnO1xuaW1wb3J0IHttYXAsIHRha2UsIHRhcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtSZWNvcmRUaHJlYWRJdGVtQ29uZmlnfSBmcm9tICcuLi9yZWNvcmQtdGhyZWFkLWl0ZW0vcmVjb3JkLXRocmVhZC1pdGVtLm1vZGVsJztcbmltcG9ydCB7UmVjb3JkVGhyZWFkSXRlbVN0b3JlfSBmcm9tICcuLi8uLi9zdG9yZS9yZWNvcmQtdGhyZWFkL3JlY29yZC10aHJlYWQtaXRlbS5zdG9yZSc7XG5pbXBvcnQge0F0dHJpYnV0ZU1hcCwgQnV0dG9uSW50ZXJmYWNlLCBpc1ZvaWQsIFJlY29yZCwgVmlld01vZGV9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge1JlY29yZFRocmVhZEl0ZW1TdG9yZUZhY3Rvcnl9IGZyb20gJy4uLy4uL3N0b3JlL3JlY29yZC10aHJlYWQvcmVjb3JkLXRocmVhZC1pdGVtLnN0b3JlLmZhY3RvcnknO1xuaW1wb3J0IHtSZWNvcmRNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9yZWNvcmQvcmVjb3JkLm1hbmFnZXInO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbWVzc2FnZS9tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHtSZWNvcmRUaHJlYWRMaXN0QWN0aW9uc0FkYXB0ZXJ9IGZyb20gXCIuLi8uLi9hZGFwdGVycy9yZWNvcmQtdGhyZWFkLWxpc3QtYWN0aW9ucy5hZGFwdGVyXCI7XG5pbXBvcnQge1JlY29yZFRocmVhZExpc3RBY3Rpb25zQWRhcHRlckZhY3Rvcnl9IGZyb20gXCIuLi8uLi9hZGFwdGVycy9yZWNvcmQtdGhyZWFkLWxpc3QtYWN0aW9ucy5hZGFwdGVyLmZhY3RvcnlcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Njcm0tcmVjb3JkLXRocmVhZCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3JlY29yZC10aHJlYWQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW10sXG59KVxuZXhwb3J0IGNsYXNzIFJlY29yZFRocmVhZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcblxuICAgIEBJbnB1dCgpIGNvbmZpZzogUmVjb3JkVGhyZWFkQ29uZmlnO1xuICAgIEBWaWV3Q2hpbGQoJ2xpc3QnKSBsaXN0Q29udGFpbmVyOiBFbGVtZW50UmVmO1xuXG4gICAgc3RvcmU6IFJlY29yZFRocmVhZFN0b3JlO1xuICAgIGNyZWF0ZVN0b3JlOiBSZWNvcmRUaHJlYWRJdGVtU3RvcmU7XG4gICAgcmVjb3JkczogUmVjb3JkVGhyZWFkSXRlbVN0b3JlW107XG4gICAgbG9hZGluZyA9IGZhbHNlO1xuICAgIG1heEhlaWdodCA9IDQwMDtcbiAgICBkaXJlY3Rpb246ICdhc2MnIHwgJ2Rlc2MnID0gJ2FzYyc7XG4gICAgbG9hZE1vcmVQb3NpdGlvbjogJ2JvdHRvbScgfCAndG9wJyB8IHN0cmluZyA9ICd0b3AnO1xuICAgIGxpc3RBY3Rpb25BZGFwdGVyOiBSZWNvcmRUaHJlYWRMaXN0QWN0aW9uc0FkYXB0ZXI7XG5cbiAgICBwcm90ZWN0ZWQgc2hvdWxkUmVzZXRTY3JvbGwgPSBmYWxzZTtcblxuICAgIHByb3RlY3RlZCBzdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuICAgIHByb3RlY3RlZCBwcmVzZXRGaWVsZFZhbHVlczogQXR0cmlidXRlTWFwO1xuXG5cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgc3RvcmVGYWN0b3J5OiBSZWNvcmRUaHJlYWRTdG9yZUZhY3RvcnksXG4gICAgICAgIHByb3RlY3RlZCBpdGVtRmFjdG9yeTogUmVjb3JkVGhyZWFkSXRlbVN0b3JlRmFjdG9yeSxcbiAgICAgICAgcHJvdGVjdGVkIHJlY29yZE1hbmFnZXI6IFJlY29yZE1hbmFnZXIsXG4gICAgICAgIHByb3RlY3RlZCBtZXNzYWdlOiBNZXNzYWdlU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGFjdGlvbkFkYXB0ZXJGYWN0b3J5OiBSZWNvcmRUaHJlYWRMaXN0QWN0aW9uc0FkYXB0ZXJGYWN0b3J5LFxuICAgICkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBpZiAoIWlzVm9pZCh0aGlzLmNvbmZpZy5tYXhMaXN0SGVpZ2h0KSkge1xuICAgICAgICAgICAgdGhpcy5tYXhIZWlnaHQgPSB0aGlzLmNvbmZpZy5tYXhMaXN0SGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZy5tb2R1bGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5jb25maWcuc3RvcmUpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmUgPSB0aGlzLnN0b3JlRmFjdG9yeS5jcmVhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuc3RvcmUuc2V0SXRlbU1ldGFkYXRhKHRoaXMuY29uZmlnLml0ZW1Db25maWcubWV0YWRhdGEpO1xuICAgICAgICAgICAgdGhpcy5zdG9yZS5zZXRMaXN0TWV0YWRhdGEoe2FjdGlvbnM6IHRoaXMuY29uZmlnLmxpc3RBY3Rpb25zfSk7XG4gICAgICAgICAgICB0aGlzLnN0b3JlLmluaXQodGhpcy5jb25maWcubW9kdWxlLCBmYWxzZSwgdGhpcz8uY29uZmlnPy5wYWdlU2l6ZSA/PyBudWxsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmUgPSB0aGlzLmNvbmZpZy5zdG9yZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gdGhpcy5jb25maWcuZGlyZWN0aW9uIHx8IHRoaXMuZGlyZWN0aW9uO1xuICAgICAgICB0aGlzLnNldExvYWRNb3JlUG9zaXRpb24oKTtcblxuICAgICAgICB0aGlzLmluaXRDcmVhdGUoKTtcbiAgICAgICAgdGhpcy5pbml0RGF0YVN1YnNjcmlwdGlvbigpO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5maWx0ZXJzJCkge1xuXG4gICAgICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLmNvbmZpZy5maWx0ZXJzJC5zdWJzY3JpYmUoZmlsdGVycyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5zZXRGaWx0ZXJzKGZpbHRlcnMpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLm9uUmVmcmVzaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWcub25SZWZyZXNoKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JlLmxvYWQoZmFsc2UpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLm9uUmVmcmVzaCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5vblJlZnJlc2goKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYXV0b1JlZnJlc2hGcmVxdWVuY3kgPSB0aGlzPy5jb25maWc/LmF1dG9SZWZyZXNoRnJlcXVlbmN5ID8/IDA7XG4gICAgICAgIGlmIChhdXRvUmVmcmVzaEZyZXF1ZW5jeSAmJiB0aGlzLnN0b3JlKSB7XG4gICAgICAgICAgICBjb25zdCBtaW4gPSB0aGlzLmNvbmZpZy5hdXRvUmVmcmVzaERldmlhdGlvbk1pbiA/PyAtMTU7XG4gICAgICAgICAgICBjb25zdCBtYXggPSB0aGlzLmNvbmZpZy5hdXRvUmVmcmVzaERldmlhdGlvbk1heCA/PyAxNTtcblxuICAgICAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5zdG9yZS5pbml0QXV0b1JlZnJlc2goYXV0b1JlZnJlc2hGcmVxdWVuY3ksIG1pbiwgbWF4LCB0aGlzLmNvbmZpZy5vblJlZnJlc2gpLnN1YnNjcmliZSgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5pdExvYWRpbmcoKTtcblxuICAgICAgICB0aGlzLmxpc3RBY3Rpb25BZGFwdGVyID0gdGhpcy5hY3Rpb25BZGFwdGVyRmFjdG9yeS5jcmVhdGUodGhpcy5zdG9yZSwgdGhpcy5jb25maWcpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRMb2FkTW9yZVBvc2l0aW9uKCkge1xuICAgICAgICB0aGlzLmxvYWRNb3JlUG9zaXRpb24gPSB0aGlzLmRpcmVjdGlvbiA9PT0gJ2FzYycgPyAndG9wJyA6ICdib3R0b20nO1xuICAgICAgICBpZiAodGhpcy5jb25maWcubG9hZE1vcmVQb3NpdGlvbikge1xuICAgICAgICAgICAgdGhpcy5sb2FkTW9yZVBvc2l0aW9uID0gdGhpcy5jb25maWcubG9hZE1vcmVQb3NpdGlvbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5zaG91bGRSZXNldFNjcm9sbCA9IHRydWU7XG4gICAgICAgIHRoaXMucmVzZXRTY3JvbGwoKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCEodGhpcz8uY29uZmlnPy5zdG9yZSA/PyBudWxsKSkge1xuICAgICAgICAgICAgdGhpcy5zdG9yZS5jbGVhcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RvcmUgPSBudWxsO1xuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpXG4gICAgfVxuXG4gICAgYnVpbGRJdGVtKGl0ZW06IFJlY29yZFRocmVhZEl0ZW1TdG9yZSwgaXRlbVJlZjogYW55KTogUmVjb3JkVGhyZWFkSXRlbUNvbmZpZyB7XG4gICAgICAgIGxldCBrbGFzcyA9ICdyZWNvcmQtdGhyZWFkLWxpc3QtaXRlbSc7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLml0ZW1Db25maWcua2xhc3MpIHtcbiAgICAgICAgICAgIGtsYXNzICs9ICcgJyArIHRoaXMuY29uZmlnLml0ZW1Db25maWcua2xhc3NcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4udGhpcy5jb25maWcuaXRlbUNvbmZpZyxcbiAgICAgICAgICAgIHN0b3JlOiBpdGVtLFxuICAgICAgICAgICAgdGhyZWFkU3RvcmU6IHRoaXMuc3RvcmUsXG4gICAgICAgICAgICBrbGFzczoga2xhc3MsXG4gICAgICAgICAgICBjb250YWluZXJDbGFzczogdGhpcy5jb25maWcuaXRlbUNvbmZpZy5jb250YWluZXJDbGFzcyxcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IHRoaXMuY29uZmlnPy5pdGVtQ29uZmlnPy5mbGV4RGlyZWN0aW9uID8/ICcnLFxuICAgICAgICAgICAgZXhwYW5kZWQ6ICgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvSXRlbShpdGVtUmVmKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb2xsYXBzZWQ6ICgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvSXRlbShpdGVtUmVmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBhcyBSZWNvcmRUaHJlYWRJdGVtQ29uZmlnO1xuICAgIH1cblxuICAgIGdldExvYWRNb3JlQnV0dG9uKCk6IEJ1dHRvbkludGVyZmFjZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBrbGFzczogJ2xvYWQtbW9yZS1idXR0b24gYnRuIGJ0bi1saW5rIGJ0bi1zbScsXG4gICAgICAgICAgICBsYWJlbEtleTogJ0xCTF9MT0FEX01PUkUnLFxuICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzPy5jb25maWc/Lm9uTG9hZE1vcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5nZXRSZWNvcmRMaXN0KCkucmVjb3JkcyQucGlwZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXAoKCkgPT4gdGhpcy5jb25maWcub25Mb2FkTW9yZSgpKVxuICAgICAgICAgICAgICAgICAgICApLnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLmxvYWRNb3JlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gYXMgQnV0dG9uSW50ZXJmYWNlO1xuICAgIH1cblxuICAgIGJ1aWxkQ3JlYXRlSXRlbSgpOiBSZWNvcmRUaHJlYWRJdGVtQ29uZmlnIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnRoaXMuY29uZmlnLmNyZWF0ZUNvbmZpZyxcbiAgICAgICAgICAgIHN0b3JlOiB0aGlzLmNyZWF0ZVN0b3JlLFxuICAgICAgICAgICAgcm93Q2xhc3M6IHsncHQtMSc6IHRydWV9LFxuICAgICAgICAgICAga2xhc3M6ICdyZWNvcmQtdGhyZWFkLWNyZWF0ZS1pdGVtJyxcbiAgICAgICAgfSBhcyBSZWNvcmRUaHJlYWRJdGVtQ29uZmlnO1xuICAgIH1cblxuICAgIGdldENyZWF0ZUJ1dHRvbigpOiBCdXR0b25JbnRlcmZhY2Uge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAga2xhc3M6ICdjcmVhdGUtdGhyZWFkLWl0ZW0tYnV0dG9uIGJ0biBidG4tbWFpbiBidG4tc20nLFxuICAgICAgICAgICAgbGFiZWxLZXk6ICdMQkxfU1VCTUlUX0JVVFRPTl9MQUJFTCcsXG4gICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVTdG9yZS52YWxpZGF0ZSgpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKHZhbGlkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVN0b3JlLnNhdmUoKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRSZWNvcmQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvdWxkUmVzZXRTY3JvbGwgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlLmFkZFN1Y2Nlc3NNZXNzYWdlQnlLZXkoJ0xCTF9BQ1RJT05fU1VDQ0VTUycpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZS5hZGRXYXJuaW5nTWVzc2FnZUJ5S2V5KCdMQkxfVkFMSURBVElPTl9FUlJPUlMnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBhcyBCdXR0b25JbnRlcmZhY2U7XG4gICAgfVxuXG4gICAgYWxsTG9hZGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gISEodGhpcy5zdG9yZSAmJiB0aGlzLnN0b3JlLmFsbExvYWRlZCgpKTtcbiAgICB9XG5cbiAgICBnZXRNYXhIZWlnaHQoKTogeyBba2xhc3M6IHN0cmluZ106IGFueTsgfSB8IG51bGwge1xuICAgICAgICBpZiAodGhpcy5tYXhIZWlnaHQgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geydtYXgtaGVpZ2h0LnB4JzogdGhpcy5tYXhIZWlnaHQsICdvdmVyZmxvdy15JzogJ2F1dG8nfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0UmVjb3JkKCkge1xuICAgICAgICBjb25zdCBlbXB0eVJlY29yZCA9IHRoaXMucmVjb3JkTWFuYWdlci5idWlsZEVtcHR5UmVjb3JkKHRoaXMuY29uZmlnLm1vZHVsZSk7XG4gICAgICAgIHRoaXMuYWRkUHJlc2V0RmllbGRzKGVtcHR5UmVjb3JkKTtcbiAgICAgICAgbGV0IG1vZGUgPSAnZWRpdCcgYXMgVmlld01vZGU7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5jcmVhdGVDb25maWcgJiYgdGhpcy5jb25maWcuY3JlYXRlQ29uZmlnLmluaXRpYWxNb2RlKSB7XG4gICAgICAgICAgICBtb2RlID0gdGhpcy5jb25maWcuY3JlYXRlQ29uZmlnLmluaXRpYWxNb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jcmVhdGVTdG9yZS5pbml0UmVjb3JkKGVtcHR5UmVjb3JkLCBtb2RlLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNjcm9sbFRvRW5kKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMubGlzdENvbnRhaW5lciB8fCAhdGhpcy5saXN0Q29udGFpbmVyLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2Nyb2xsVG8odGhpcy5saXN0Q29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2Nyb2xsVG9Ub3AoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG8oMCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNjcm9sbFRvKHBvc2l0aW9uOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMubGlzdENvbnRhaW5lci5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA9IHBvc2l0aW9uO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBzY3JvbGxUb0l0ZW0oaXRlbTogYW55KSB7XG4gICAgICAgIGlmICghaXRlbSB8fCAhdGhpcy5saXN0Q29udGFpbmVyIHx8ICF0aGlzLmxpc3RDb250YWluZXIubmF0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZWxlbWVudFRvcCA9IGl0ZW0ub2Zmc2V0VG9wO1xuICAgICAgICBjb25zdCBwYXJlbnRUb3AgPSB0aGlzLmxpc3RDb250YWluZXIubmF0aXZlRWxlbWVudC5vZmZzZXRUb3A7XG4gICAgICAgIGNvbnN0IHJlbGF0aXZlVG9wID0gZWxlbWVudFRvcCAtIHBhcmVudFRvcDtcblxuICAgICAgICB0aGlzLnNjcm9sbFRvKHJlbGF0aXZlVG9wKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVzZXRTY3JvbGwoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnNob3VsZFJlc2V0U2Nyb2xsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAnYXNjJykge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0VuZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb1RvcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zaG91bGRSZXNldFNjcm9sbCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzY2hlZHVsZVNjcm9sbFJlc2V0KCk6IHZvaWQge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRTY3JvbGwoKTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdENyZWF0ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZy5jcmVhdGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3JlYXRlU3RvcmUgPSB0aGlzLml0ZW1GYWN0b3J5LmNyZWF0ZSgpO1xuICAgICAgICB0aGlzLmNyZWF0ZVN0b3JlLnNldE1ldGFkYXRhKHRoaXMuY29uZmlnLmNyZWF0ZUNvbmZpZy5tZXRhZGF0YSk7XG4gICAgICAgIHRoaXMuaW5pdFJlY29yZCgpO1xuICAgICAgICB0aGlzLmluaXRQcmVzZXRGaWVsZHNNYXBwaW5nKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluaXRQcmVzZXRGaWVsZHNNYXBwaW5nKCkge1xuXG4gICAgICAgIGlmICghdGhpcy5jb25maWcucHJlc2V0RmllbGRzJCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5jb25maWcucHJlc2V0RmllbGRzJC5zdWJzY3JpYmUocHJlc2V0RmllbGRWYWx1ZXMgPT4ge1xuXG4gICAgICAgICAgICBpZiAoIXByZXNldEZpZWxkVmFsdWVzIHx8ICFPYmplY3Qua2V5cyhwcmVzZXRGaWVsZFZhbHVlcykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnByZXNldEZpZWxkVmFsdWVzID0gcHJlc2V0RmllbGRWYWx1ZXM7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlY29yZCA9IHRoaXMuY3JlYXRlU3RvcmUucmVjb3JkU3RvcmUuZ2V0QmFzZVJlY29yZCgpO1xuICAgICAgICAgICAgdGhpcy5hZGRQcmVzZXRGaWVsZHMocmVjb3JkKTtcblxuICAgICAgICAgICAgdGhpcy5jcmVhdGVTdG9yZS5yZWNvcmRTdG9yZS5zZXRSZWNvcmQocmVjb3JkKTtcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhZGRQcmVzZXRGaWVsZHMocmVjb3JkOiBSZWNvcmQpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLnByZXNldEZpZWxkVmFsdWVzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZWNvcmQuYXR0cmlidXRlcyA9IHtcbiAgICAgICAgICAgIC4uLnRoaXMucHJlc2V0RmllbGRWYWx1ZXMsXG4gICAgICAgICAgICAuLi4ocmVjb3JkLmF0dHJpYnV0ZXMgfHwge30pXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgaW5pdERhdGFTdWJzY3JpcHRpb24oKTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy5zdWJzLnB1c2godGhpcy5zdG9yZS5zdG9yZXMkLnN1YnNjcmliZShyZWNvcmRzID0+IHtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLnJlY29yZHMgfHwgIXRoaXMucmVjb3Jkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3VsZFJlc2V0U2Nyb2xsID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAnYXNjJykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVjb3JkcyA9IHJlY29yZHMucmV2ZXJzZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVTY3JvbGxSZXNldCgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5yZWNvcmRzID0gcmVjb3JkcztcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVTY3JvbGxSZXNldCgpO1xuICAgICAgICB9KSk7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgaW5pdExvYWRpbmcoKTogdm9pZCB7XG4gICAgICAgIGxldCBsb2FkaW5nJDogT2JzZXJ2YWJsZTxBcnJheTxib29sZWFuPj47XG5cbiAgICAgICAgaWYgKHRoaXMuY3JlYXRlU3RvcmUgJiYgdGhpcy5jcmVhdGVTdG9yZS5sb2FkaW5nJCkge1xuICAgICAgICAgICAgbG9hZGluZyQgPSB0aGlzLnN0b3JlLiRsb2FkaW5nLnBpcGUoXG4gICAgICAgICAgICAgICAgY29tYmluZUxhdGVzdFdpdGgodGhpcy5jcmVhdGVTdG9yZS5sb2FkaW5nJClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsb2FkaW5nJD0gdGhpcy5zdG9yZS4kbG9hZGluZy5waXBlKFxuICAgICAgICAgICAgICAgIG1hcCh2YWx1ZSA9PiBbdmFsdWVdKVxuICAgICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdWJzLnB1c2gobG9hZGluZyQuc3Vic2NyaWJlKChsb2FkaW5ncykgPT4ge1xuICAgICAgICAgICAgaWYgKCFsb2FkaW5ncyB8fCAhbG9hZGluZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgbG9hZGluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICBsb2FkaW5ncy5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nID0gbG9hZGluZyB8fCB2YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gbG9hZGluZztcbiAgICAgICAgfSkpO1xuICAgIH1cbn1cbiIsIjwhIC0tXG4vKipcbiogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4qIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbipcbiogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4qIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4qIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiogZGV0YWlscy5cbipcbiogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4qIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLlxuKlxuKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiovXG4tLT5cblxuPGRpdiBjbGFzcz1cInJlY29yZC10aHJlYWQge3soY29uZmlnICYmIGNvbmZpZy5rbGFzcykgfHwgJyd9fVwiPlxuICAgIDxkaXYgKm5nSWY9XCIhbG9hZGluZyAmJiAhcmVjb3JkcyAmJiAhcmVjb3Jkcy5sZW5ndGhcIlxuICAgICAgICAgY2xhc3M9XCJkLWZsZXggcmVjb3JkLXRocmVhZC1uby1kYXRhIGp1c3RpZnktY29udGVudC1jZW50ZXIgaDNcIj5cbiAgICAgICAgPHNjcm0tbGFiZWwgbGFiZWxLZXk9XCJMQkxfTk9fREFUQVwiPjwvc2NybS1sYWJlbD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgKm5nSWY9XCJsb2FkaW5nXCIgY2xhc3M9XCJkLWZsZXggcmVjb3JkLXRocmVhZC1sb2FkaW5nIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgPHNjcm0tbG9hZGluZy1zcGlubmVyIFtvdmVybGF5XT1cInRydWVcIj48L3Njcm0tbG9hZGluZy1zcGlubmVyPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiAjbGlzdFxuICAgICAgICAgKm5nSWY9XCJyZWNvcmRzICYmIHJlY29yZHMubGVuZ3RoXCJcbiAgICAgICAgIFtuZ1N0eWxlXT1cImdldE1heEhlaWdodCgpXCJcbiAgICAgICAgIGNsYXNzPVwicmVjb3JkLXRocmVhZC1saXN0IHNjcm9sbGJhci10aGluXCI+XG5cbiAgICAgICAgPGRpdiAqbmdJZj1cImxvYWRNb3JlUG9zaXRpb24gPT09ICd0b3AnICYmICFhbGxMb2FkZWQoKVwiXG4gICAgICAgICAgICAgY2xhc3M9XCJyZWNvcmQtdGhyZWFkLWxvYWQtbW9yZSBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBmbGV4LWdyb3ctMVwiPlxuICAgICAgICAgICAgPHNjcm0tYnV0dG9uIFtjb25maWddPVwiZ2V0TG9hZE1vcmVCdXR0b24oKVwiPjwvc2NybS1idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgI2l0ZW0gKm5nRm9yPVwibGV0IHJlY29yZCBvZiByZWNvcmRzXCI+XG4gICAgICAgICAgICA8c2NybS1yZWNvcmQtdGhyZWFkLWl0ZW0gW2NvbmZpZ109XCJidWlsZEl0ZW0ocmVjb3JkLCBpdGVtKVwiPjwvc2NybS1yZWNvcmQtdGhyZWFkLWl0ZW0+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgW2NsYXNzXT1cImNvbmZpZy5saXN0QWN0aW9uc0NsYXNzID8/ICcnXCI+XG5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJsb2FkTW9yZVBvc2l0aW9uID09PSAnYm90dG9tJyAmJiAhYWxsTG9hZGVkKClcIlxuICAgICAgICAgICAgICAgICBjbGFzcz1cInJlY29yZC10aHJlYWQtbG9hZC1tb3JlIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPHNjcm0tYnV0dG9uIFtjb25maWddPVwiZ2V0TG9hZE1vcmVCdXR0b24oKVwiPjwvc2NybS1idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZy5saXN0QWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgIDxzY3JtLWFjdGlvbi1ncm91cC1tZW51IFtidXR0b25DbGFzc109XCJjb25maWcubGlzdEFjdGlvbnNCdXR0b25DbGFzcyA/PyAnJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2J1dHRvbkdyb3VwQ2xhc3NdPVwiY29uZmlnLmxpc3RBY3Rpb25zQnV0dG9uR3JvdXBDbGFzcyA/PyAnJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbmZpZ109XCJsaXN0QWN0aW9uQWRhcHRlclwiPlxuICAgICAgICAgICAgICAgIDwvc2NybS1hY3Rpb24tZ3JvdXAtbWVudT5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2ICpuZ0lmPVwiKCFyZWNvcmRzIHx8ICFyZWNvcmRzLmxlbmd0aCkgJiYgIWxvYWRpbmcgJiYgY29uZmlnLnNob3dOb0RhdGFNZXNzYWdlXCI+XG4gICAgICAgIDxoNiBjbGFzcz1cInB0LTMgcGwtMyBwci0zIHBiLTJcIj5cbiAgICAgICAgICAgIDxzY3JtLWxhYmVsIFtsYWJlbEtleV09XCJjb25maWcubm9EYXRhTGFiZWwgfHwgJ0xCTF9OT19EQVRBJ1wiPjwvc2NybS1sYWJlbD5cbiAgICAgICAgPC9oNj5cblxuICAgIDwvZGl2PlxuXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZy5jcmVhdGUgJiYgY3JlYXRlU3RvcmVcIj5cblxuICAgICAgICA8ZGl2ICpuZ0lmPVwiIWxvYWRpbmdcIlxuICAgICAgICAgICAgIGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uIHJlY29yZC10aHJlYWQtY3JlYXRlLWNvbnRhaW5lclwiPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1ncm93LTFcIj5cbiAgICAgICAgICAgICAgICA8c2NybS1yZWNvcmQtdGhyZWFkLWl0ZW0gW2NvbmZpZ109XCJidWlsZENyZWF0ZUl0ZW0oKVwiPjwvc2NybS1yZWNvcmQtdGhyZWFkLWl0ZW0+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtZ3Jvdy0xIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtc3RhcnQgcHQtMSByZWNvcmQtdGhyZWFkLWNyZWF0ZS1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgPHNjcm0tYnV0dG9uIFtjb25maWddPVwiZ2V0Q3JlYXRlQnV0dG9uKClcIj48L3Njcm0tYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuPC9kaXY+XG4iXX0=