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
import { combineLatestWith } from 'rxjs';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../field-grid/field-grid.component";
import * as i3 from "../action-group-menu/action-group-menu.component";
function RecordGridComponent_ng_container_0_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 4);
    i0.ɵɵelement(1, "scrm-action-group-menu", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("buttonClass", ctx_r3.config.buttonClass)("config", ctx_r3.config.actions);
} }
function RecordGridComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "scrm-field-grid", 2);
    i0.ɵɵtemplate(2, RecordGridComponent_ng_container_0_div_1_span_2_Template, 2, 2, "span", 3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("record-grid ", ctx_r1.config && ctx_r1.config.klass || "", "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("actions", !!ctx_r1.config.actions)("appendActions", ctx_r1.config && ctx_r1.config.appendActions || false)("colClass", ctx_r1.config && ctx_r1.config.colClass)("fieldMode", ctx_r1.mode)("fields", ctx_r1.fields)("inputClass", ctx_r1.config && ctx_r1.config.inputClass)("labelClass", ctx_r1.config && ctx_r1.config.labelClass)("labelDisplay", ctx_r1.config && ctx_r1.config.labelDisplay || "top")("maxColumns", ctx_r1.maxColumns)("rowClass", ctx_r1.config && ctx_r1.config.rowClass)("sizeMap", ctx_r1.sizeMap)("colAlignItems", ctx_r1.config.colAlignItems);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.config.actions);
} }
function RecordGridComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RecordGridComponent_ng_container_0_div_1_Template, 3, 16, "div", 1);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(2, 1, ctx_r0.vm$));
} }
class RecordGridComponent {
    config;
    gridButtons = [];
    mode = 'detail';
    maxColumns = 4;
    sizeMap = {
        handset: 1,
        tablet: 2,
        web: 3,
        wide: 4
    };
    fields = [];
    special = [];
    vm$;
    constructor() {
    }
    ngOnInit() {
        if (!this.config) {
            return;
        }
        const config = this.config;
        this.vm$ = config.record$.pipe(combineLatestWith(config.mode$, config.fields$, config.maxColumns$, config.sizeMap$), map(([record, mode, fields, maxColumns, sizeMap]) => {
            this.mode = mode;
            this.maxColumns = maxColumns;
            this.sizeMap = sizeMap;
            this.fields = this.getFields(record, fields);
            return { record, mode, fields, maxColumns };
        }));
    }
    getFields(record, fieldKeys) {
        if (!record || !fieldKeys || !record.fields) {
            return [];
        }
        const fields = [];
        fieldKeys.forEach(fieldKey => {
            if (!record.fields[fieldKey]) {
                return;
            }
            fields.push(record.fields[fieldKey]);
        });
        return fields;
    }
    static ɵfac = function RecordGridComponent_Factory(t) { return new (t || RecordGridComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RecordGridComponent, selectors: [["scrm-record-grid"]], inputs: { config: "config" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "class", 4, "ngIf"], [3, "actions", "appendActions", "colClass", "fieldMode", "fields", "inputClass", "labelClass", "labelDisplay", "maxColumns", "rowClass", "sizeMap", "colAlignItems"], ["class", "float-right", "field-grid-actions", "", 4, "ngIf"], ["field-grid-actions", "", 1, "float-right"], [3, "buttonClass", "config"]], template: function RecordGridComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, RecordGridComponent_ng_container_0_Template, 3, 3, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.config);
        } }, dependencies: [i1.NgIf, i2.FieldGridComponent, i3.ActionGroupMenuComponent, i1.AsyncPipe], encapsulation: 2 });
}
export { RecordGridComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordGridComponent, [{
        type: Component,
        args: [{ selector: 'scrm-record-grid', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"config\">\n    <div *ngIf=\"(vm$ | async) as vm\" class=\"record-grid {{(config && config.klass) || ''}}\">\n        <scrm-field-grid [actions]=\"!!config.actions\"\n                         [appendActions]=\"(config && config.appendActions) || false\"\n                         [colClass]=\"config && config.colClass\"\n                         [fieldMode]=\"mode\"\n                         [fields]=\"fields\"\n                         [inputClass]=\"config && config.inputClass\"\n                         [labelClass]=\"config && config.labelClass\"\n                         [labelDisplay]=\"(config && config.labelDisplay) || 'top'\"\n                         [maxColumns]=\"maxColumns\"\n                         [rowClass]=\"config && config.rowClass\"\n                         [sizeMap]=\"sizeMap\"\n                         [colAlignItems]=\"config.colAlignItems\"\n        >\n        <span *ngIf=\"config.actions\" class=\"float-right\" field-grid-actions>\n            <scrm-action-group-menu [buttonClass]=\"config.buttonClass\"\n                                    [config]=\"config.actions\"></scrm-action-group-menu>\n        </span>\n        </scrm-field-grid>\n    </div>\n</ng-container>\n" }]
    }], function () { return []; }, { config: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLWdyaWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvcmVjb3JkLWdyaWQvcmVjb3JkLWdyaWQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvcmVjb3JkLWdyaWQvcmVjb3JkLWdyaWQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBRXZELE9BQU8sRUFBQyxpQkFBaUIsRUFBYSxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztJQ2EzQiwrQkFBb0U7SUFDaEUsNENBQzJFO0lBQy9FLGlCQUFPOzs7SUFGcUIsZUFBa0M7SUFBbEMsdURBQWtDLGlDQUFBOzs7SUFmbEUsMkJBQXdGLHlCQUFBO0lBY3BGLDJGQUdPO0lBQ1AsaUJBQWtCLEVBQUE7OztJQWxCVyx5RkFBc0Q7SUFDbEUsZUFBNEI7SUFBNUIsaURBQTRCLHdFQUFBLHFEQUFBLDBCQUFBLHlCQUFBLHlEQUFBLHlEQUFBLHNFQUFBLGlDQUFBLHFEQUFBLDJCQUFBLDhDQUFBO0lBYXRDLGVBQW9CO0lBQXBCLDRDQUFvQjs7O0lBZm5DLDZCQUE2QjtJQUN6QixvRkFtQk07O0lBQ1YsMEJBQWU7OztJQXBCTCxlQUFvQjtJQUFwQix1REFBb0I7O0FESTlCLE1BS2EsbUJBQW1CO0lBRW5CLE1BQU0sQ0FBbUI7SUFDbEMsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUVqQixJQUFJLEdBQWEsUUFBUSxDQUFDO0lBQzFCLFVBQVUsR0FBVyxDQUFDLENBQUM7SUFDdkIsT0FBTyxHQUFrQjtRQUNyQixPQUFPLEVBQUUsQ0FBQztRQUNWLE1BQU0sRUFBRSxDQUFDO1FBQ1QsR0FBRyxFQUFFLENBQUM7UUFDTixJQUFJLEVBQUUsQ0FBQztLQUNWLENBQUM7SUFDRixNQUFNLEdBQVksRUFBRSxDQUFDO0lBQ3JCLE9BQU8sR0FBWSxFQUFFLENBQUM7SUFFdEIsR0FBRyxDQUFrQztJQUVyQztJQUNBLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZCxPQUFPO1NBQ1Y7UUFDRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRTNCLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQzFCLGlCQUFpQixDQUNULE1BQU0sQ0FBQyxLQUFLLEVBQ1osTUFBTSxDQUFDLE9BQU8sRUFDZCxNQUFNLENBQUMsV0FBVyxFQUNsQixNQUFNLENBQUMsUUFBUSxDQUN0QixFQUNELEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxFQUFFLEVBQUU7WUFDaEQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7WUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM3QyxPQUFPLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQ0wsQ0FBQztJQUNOLENBQUM7SUFFRCxTQUFTLENBQUMsTUFBYyxFQUFFLFNBQW1CO1FBQ3pDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ3pDLE9BQU8sRUFBRSxDQUFDO1NBQ2I7UUFFRCxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFFbEIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDMUIsT0FBTzthQUNWO1lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDOzZFQTNEUSxtQkFBbUI7NkRBQW5CLG1CQUFtQjtZQ1ZoQyxzRkFxQmU7O1lBckJBLGlDQUFZOzs7U0RVZCxtQkFBbUI7dUZBQW5CLG1CQUFtQjtjQUwvQixTQUFTOzJCQUNJLGtCQUFrQjtzQ0FNbkIsTUFBTTtrQkFBZCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0ZpZWxkLCBSZWNvcmQsIFNjcmVlblNpemVNYXAsIFZpZXdNb2RlfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHtjb21iaW5lTGF0ZXN0V2l0aCwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtSZWNvcmRHcmlkQ29uZmlnLCBSZWNvcmRHcmlkVmlld01vZGVsfSBmcm9tICcuL3JlY29yZC1ncmlkLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzY3JtLXJlY29yZC1ncmlkJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcmVjb3JkLWdyaWQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW11cbn0pXG5leHBvcnQgY2xhc3MgUmVjb3JkR3JpZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKSBjb25maWc6IFJlY29yZEdyaWRDb25maWc7XG4gICAgZ3JpZEJ1dHRvbnMgPSBbXTtcblxuICAgIG1vZGU6IFZpZXdNb2RlID0gJ2RldGFpbCc7XG4gICAgbWF4Q29sdW1uczogbnVtYmVyID0gNDtcbiAgICBzaXplTWFwOiBTY3JlZW5TaXplTWFwID0ge1xuICAgICAgICBoYW5kc2V0OiAxLFxuICAgICAgICB0YWJsZXQ6IDIsXG4gICAgICAgIHdlYjogMyxcbiAgICAgICAgd2lkZTogNFxuICAgIH07XG4gICAgZmllbGRzOiBGaWVsZFtdID0gW107XG4gICAgc3BlY2lhbDogRmllbGRbXSA9IFtdO1xuXG4gICAgdm0kOiBPYnNlcnZhYmxlPFJlY29yZEdyaWRWaWV3TW9kZWw+O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5jb25maWcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZztcblxuICAgICAgICB0aGlzLnZtJCA9IGNvbmZpZy5yZWNvcmQkLnBpcGUoXG4gICAgICAgICAgICBjb21iaW5lTGF0ZXN0V2l0aChcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLm1vZGUkLFxuICAgICAgICAgICAgICAgICAgICBjb25maWcuZmllbGRzJCxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLm1heENvbHVtbnMkLFxuICAgICAgICAgICAgICAgICAgICBjb25maWcuc2l6ZU1hcCRcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBtYXAoKFtyZWNvcmQsIG1vZGUsIGZpZWxkcywgbWF4Q29sdW1ucywgc2l6ZU1hcF0pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGUgPSBtb2RlO1xuICAgICAgICAgICAgICAgIHRoaXMubWF4Q29sdW1ucyA9IG1heENvbHVtbnM7XG4gICAgICAgICAgICAgICAgdGhpcy5zaXplTWFwID0gc2l6ZU1hcDtcbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcyA9IHRoaXMuZ2V0RmllbGRzKHJlY29yZCwgZmllbGRzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge3JlY29yZCwgbW9kZSwgZmllbGRzLCBtYXhDb2x1bW5zfTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0RmllbGRzKHJlY29yZDogUmVjb3JkLCBmaWVsZEtleXM6IHN0cmluZ1tdKTogRmllbGRbXSB7XG4gICAgICAgIGlmICghcmVjb3JkIHx8ICFmaWVsZEtleXMgfHwgIXJlY29yZC5maWVsZHMpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IFtdO1xuXG4gICAgICAgIGZpZWxkS2V5cy5mb3JFYWNoKGZpZWxkS2V5ID0+IHtcbiAgICAgICAgICAgIGlmICghcmVjb3JkLmZpZWxkc1tmaWVsZEtleV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaWVsZHMucHVzaChyZWNvcmQuZmllbGRzW2ZpZWxkS2V5XSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmaWVsZHM7XG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZ1wiPlxuICAgIDxkaXYgKm5nSWY9XCIodm0kIHwgYXN5bmMpIGFzIHZtXCIgY2xhc3M9XCJyZWNvcmQtZ3JpZCB7eyhjb25maWcgJiYgY29uZmlnLmtsYXNzKSB8fCAnJ319XCI+XG4gICAgICAgIDxzY3JtLWZpZWxkLWdyaWQgW2FjdGlvbnNdPVwiISFjb25maWcuYWN0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW2FwcGVuZEFjdGlvbnNdPVwiKGNvbmZpZyAmJiBjb25maWcuYXBwZW5kQWN0aW9ucykgfHwgZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFtjb2xDbGFzc109XCJjb25maWcgJiYgY29uZmlnLmNvbENsYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbZmllbGRNb2RlXT1cIm1vZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFtmaWVsZHNdPVwiZmllbGRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbaW5wdXRDbGFzc109XCJjb25maWcgJiYgY29uZmlnLmlucHV0Q2xhc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFtsYWJlbENsYXNzXT1cImNvbmZpZyAmJiBjb25maWcubGFiZWxDbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW2xhYmVsRGlzcGxheV09XCIoY29uZmlnICYmIGNvbmZpZy5sYWJlbERpc3BsYXkpIHx8ICd0b3AnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbbWF4Q29sdW1uc109XCJtYXhDb2x1bW5zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbcm93Q2xhc3NdPVwiY29uZmlnICYmIGNvbmZpZy5yb3dDbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW3NpemVNYXBdPVwic2l6ZU1hcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW2NvbEFsaWduSXRlbXNdPVwiY29uZmlnLmNvbEFsaWduSXRlbXNcIlxuICAgICAgICA+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwiY29uZmlnLmFjdGlvbnNcIiBjbGFzcz1cImZsb2F0LXJpZ2h0XCIgZmllbGQtZ3JpZC1hY3Rpb25zPlxuICAgICAgICAgICAgPHNjcm0tYWN0aW9uLWdyb3VwLW1lbnUgW2J1dHRvbkNsYXNzXT1cImNvbmZpZy5idXR0b25DbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29uZmlnXT1cImNvbmZpZy5hY3Rpb25zXCI+PC9zY3JtLWFjdGlvbi1ncm91cC1tZW51PlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvc2NybS1maWVsZC1ncmlkPlxuICAgIDwvZGl2PlxuPC9uZy1jb250YWluZXI+XG4iXX0=