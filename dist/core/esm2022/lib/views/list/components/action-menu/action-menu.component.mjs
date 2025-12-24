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
import { BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ScreenSize } from '../../../../services/ui/screen-size-observer/screen-size-observer.service';
import * as i0 from "@angular/core";
import * as i1 from "../../store/list-view/list-view.store";
import * as i2 from "../../../../services/navigation/module-navigation/module-navigation.service";
import * as i3 from "../../../../services/ui/screen-size-observer/screen-size-observer.service";
import * as i4 from "../../../../store/system-config/system-config.store";
import * as i5 from "../../../../services/process/processes/async-action/async-action";
import * as i6 from "@angular/common";
import * as i7 from "../../../../components/button-group/button-group.component";
function ActionMenuComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelement(1, "scrm-button-group", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("config$", ctx_r0.config$);
} }
class ActionMenuComponent {
    listStore;
    actionHandler;
    screenSize;
    systemConfigs;
    asyncActionService;
    configState = new BehaviorSubject({ buttons: [] });
    config$ = this.configState.asObservable();
    vm$ = this.screenSize.screenSize$.pipe(map((screenSize) => {
        if (screenSize) {
            this.screen = screenSize;
        }
        this.configState.next(this.getButtonGroupConfig());
        return { screenSize };
    }));
    screen = ScreenSize.Medium;
    defaultBreakpoint = 3;
    breakpoint;
    constructor(listStore, actionHandler, screenSize, systemConfigs, asyncActionService) {
        this.listStore = listStore;
        this.actionHandler = actionHandler;
        this.screenSize = screenSize;
        this.systemConfigs = systemConfigs;
        this.asyncActionService = asyncActionService;
    }
    ngOnInit() {
        this.configState.next(this.getButtonGroupConfig());
    }
    getButtonGroupConfig() {
        const actions = this.actions;
        const config = {
            buttonKlass: ['action-button'],
            dropdownLabel: this.listStore.appStrings.LBL_MORE || '',
            buttons: [],
            dropdownOptions: {
                placement: ['bottom-right']
            },
            breakpoint: this.getBreakpoint()
        };
        actions.forEach(action => {
            const buttonConfig = this.getButtonConfig(action);
            if (buttonConfig && buttonConfig.klass) {
                config.buttons.push(buttonConfig);
            }
        });
        return config;
    }
    getBreakpoint() {
        const breakpointMap = this.systemConfigs && this.systemConfigs.getConfigValue('listview_actions_limits');
        if (this.screen && breakpointMap && breakpointMap[this.screen]) {
            this.breakpoint = breakpointMap[this.screen];
            return this.breakpoint;
        }
        if (this.breakpoint) {
            return this.breakpoint;
        }
        return this.defaultBreakpoint;
    }
    get actions() {
        if (!this.listStore.vm.appData.module || !this.listStore.vm.appData.module.menu) {
            return [];
        }
        return this.listStore.vm.appData.module.menu.filter(action => !(action.name === 'List' || action.name === 'View'));
    }
    getButtonConfig(action) {
        if (!this.listStore.vm.appData.appState.module) {
            return {};
        }
        if (!this.listStore.vm.appData.language) {
            return {};
        }
        const module = this.listStore.vm.appData.appState.module;
        const language = this.listStore.vm.appData.language;
        let labelKey = '';
        if (action.actionLabelKey) {
            labelKey = action.actionLabelKey;
        }
        return {
            klass: 'action-button',
            label: this.actionHandler.getActionLabel(module, action, language, labelKey),
            onClick: () => {
                if (action?.process) {
                    this.handleProcess(module, action?.process);
                    return;
                }
                this.actionHandler.navigate(action).then();
            }
        };
    }
    handleProcess(moduleName, process) {
        if (!process) {
            return;
        }
        const processType = process;
        const options = {
            action: processType,
            module: moduleName,
        };
        this.asyncActionService.run(processType, options).pipe(take(1)).subscribe();
    }
    static ɵfac = function ActionMenuComponent_Factory(t) { return new (t || ActionMenuComponent)(i0.ɵɵdirectiveInject(i1.ListViewStore), i0.ɵɵdirectiveInject(i2.ModuleNavigation), i0.ɵɵdirectiveInject(i3.ScreenSizeObserverService), i0.ɵɵdirectiveInject(i4.SystemConfigStore), i0.ɵɵdirectiveInject(i5.AsyncActionService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ActionMenuComponent, selectors: [["scrm-action-menu"]], decls: 2, vars: 3, consts: [["class", "list-view-actions float-right", 4, "ngIf"], [1, "list-view-actions", "float-right"], [3, "config$"]], template: function ActionMenuComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ActionMenuComponent_div_0_Template, 2, 1, "div", 0);
            i0.ɵɵpipe(1, "async");
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.vm$));
        } }, dependencies: [i6.NgIf, i7.ButtonGroupComponent, i6.AsyncPipe], encapsulation: 2 });
}
export { ActionMenuComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ActionMenuComponent, [{
        type: Component,
        args: [{ selector: 'scrm-action-menu', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<div class=\"list-view-actions float-right\" *ngIf=\"(vm$ | async) as vm\">\n    <scrm-button-group [config$]=\"config$\"></scrm-button-group>\n</div>\n" }]
    }], function () { return [{ type: i1.ListViewStore }, { type: i2.ModuleNavigation }, { type: i3.ScreenSizeObserverService }, { type: i4.SystemConfigStore }, { type: i5.AsyncActionService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3ZpZXdzL2xpc3QvY29tcG9uZW50cy9hY3Rpb24tbWVudS9hY3Rpb24tbWVudS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvbGlzdC9jb21wb25lbnRzL2FjdGlvbi1tZW51L2FjdGlvbi1tZW51LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBRWhELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDckMsT0FBTyxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUl6QyxPQUFPLEVBQ0gsVUFBVSxFQUViLE1BQU0sMkVBQTJFLENBQUM7Ozs7Ozs7Ozs7SUNUbkYsOEJBQXVFO0lBQ25FLHVDQUEyRDtJQUMvRCxpQkFBTTs7O0lBRGlCLGVBQW1CO0lBQW5CLHdDQUFtQjs7QURZMUMsTUFJYSxtQkFBbUI7SUFxQmQ7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQXZCZCxXQUFXLEdBQUcsSUFBSSxlQUFlLENBQXVCLEVBQUMsT0FBTyxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7SUFDdkUsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7SUFFMUMsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDbEMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUU7UUFDZixJQUFJLFVBQVUsRUFBRTtZQUNaLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxD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QUFHLE9BQU8sQ0FBQztRQUU1QixNQUFNLE9BQU8sR0FBRztZQUNaLE1BQU0sRUFBRSxXQUFXO1lBQ25CLE1BQU0sRUFBRSxVQUFVO1NBQ0QsQ0FBQztRQUV0QixJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEYsQ0FBQzs2RUExSFEsbUJBQW1COzZEQUFuQixtQkFBbUI7WUNqQmhDLG9FQUVNOzs7WUFGc0Msb0RBQW9COzs7U0RpQm5ELG1CQUFtQjt1RkFBbkIsbUJBQW1CO2NBSi9CLFNBQVM7MkJBQ0ksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QnV0dG9uR3JvdXBJbnRlcmZhY2UsIEJ1dHRvbkludGVyZmFjZX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tICdyeGpzJztcbmltcG9ydCB7bWFwLCB0YWtlfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0xpc3RWaWV3U3RvcmV9IGZyb20gJy4uLy4uL3N0b3JlL2xpc3Qtdmlldy9saXN0LXZpZXcuc3RvcmUnO1xuaW1wb3J0IHtTeXN0ZW1Db25maWdTdG9yZX0gZnJvbSAnLi4vLi4vLi4vLi4vc3RvcmUvc3lzdGVtLWNvbmZpZy9zeXN0ZW0tY29uZmlnLnN0b3JlJztcbmltcG9ydCB7TW9kdWxlQWN0aW9ufSBmcm9tICcuLi8uLi8uLi8uLi9zdG9yZS9uYXZpZ2F0aW9uL25hdmlnYXRpb24uc3RvcmUnO1xuaW1wb3J0IHtcbiAgICBTY3JlZW5TaXplLFxuICAgIFNjcmVlblNpemVPYnNlcnZlclNlcnZpY2Vcbn0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvdWkvc2NyZWVuLXNpemUtb2JzZXJ2ZXIvc2NyZWVuLXNpemUtb2JzZXJ2ZXIuc2VydmljZSc7XG5pbXBvcnQge01vZHVsZU5hdmlnYXRpb259IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL25hdmlnYXRpb24vbW9kdWxlLW5hdmlnYXRpb24vbW9kdWxlLW5hdmlnYXRpb24uc2VydmljZSc7XG5pbXBvcnQge0FzeW5jQWN0aW9uSW5wdXQsIEFzeW5jQWN0aW9uU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvcHJvY2Vzcy9wcm9jZXNzZXMvYXN5bmMtYWN0aW9uL2FzeW5jLWFjdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1hY3Rpb24tbWVudScsXG4gICAgdGVtcGxhdGVVcmw6ICdhY3Rpb24tbWVudS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEFjdGlvbk1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY29uZmlnU3RhdGUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEJ1dHRvbkdyb3VwSW50ZXJmYWNlPih7YnV0dG9uczogW119KTtcbiAgICBjb25maWckID0gdGhpcy5jb25maWdTdGF0ZS5hc09ic2VydmFibGUoKTtcblxuICAgIHZtJCA9IHRoaXMuc2NyZWVuU2l6ZS5zY3JlZW5TaXplJC5waXBlKFxuICAgICAgICBtYXAoKHNjcmVlblNpemUpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JlZW5TaXplKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JlZW4gPSBzY3JlZW5TaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jb25maWdTdGF0ZS5uZXh0KHRoaXMuZ2V0QnV0dG9uR3JvdXBDb25maWcoKSk7XG4gICAgICAgICAgICByZXR1cm4ge3NjcmVlblNpemV9O1xuICAgICAgICB9KVxuICAgICk7XG5cbiAgICBwcm90ZWN0ZWQgc2NyZWVuOiBTY3JlZW5TaXplID0gU2NyZWVuU2l6ZS5NZWRpdW07XG4gICAgcHJvdGVjdGVkIGRlZmF1bHRCcmVha3BvaW50ID0gMztcbiAgICBwcm90ZWN0ZWQgYnJlYWtwb2ludDogbnVtYmVyO1xuXG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGxpc3RTdG9yZTogTGlzdFZpZXdTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGFjdGlvbkhhbmRsZXI6IE1vZHVsZU5hdmlnYXRpb24sXG4gICAgICAgIHByb3RlY3RlZCBzY3JlZW5TaXplOiBTY3JlZW5TaXplT2JzZXJ2ZXJTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgc3lzdGVtQ29uZmlnczogU3lzdGVtQ29uZmlnU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBhc3luY0FjdGlvblNlcnZpY2U6IEFzeW5jQWN0aW9uU2VydmljZVxuICAgICkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbmZpZ1N0YXRlLm5leHQodGhpcy5nZXRCdXR0b25Hcm91cENvbmZpZygpKTtcbiAgICB9XG5cbiAgICBnZXRCdXR0b25Hcm91cENvbmZpZygpOiBCdXR0b25Hcm91cEludGVyZmFjZSB7XG4gICAgICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLmFjdGlvbnM7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgIGJ1dHRvbktsYXNzOiBbJ2FjdGlvbi1idXR0b24nXSxcbiAgICAgICAgICAgIGRyb3Bkb3duTGFiZWw6IHRoaXMubGlzdFN0b3JlLmFwcFN0cmluZ3MuTEJMX01PUkUgfHwgJycsXG4gICAgICAgICAgICBidXR0b25zOiBbXSxcbiAgICAgICAgICAgIGRyb3Bkb3duT3B0aW9uczoge1xuICAgICAgICAgICAgICAgIHBsYWNlbWVudDogWydib3R0b20tcmlnaHQnXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IHRoaXMuZ2V0QnJlYWtwb2ludCgpXG4gICAgICAgIH0gYXMgQnV0dG9uR3JvdXBJbnRlcmZhY2U7XG5cbiAgICAgICAgYWN0aW9ucy5mb3JFYWNoKGFjdGlvbiA9PiB7XG4gICAgICAgICAgICBjb25zdCBidXR0b25Db25maWcgPSB0aGlzLmdldEJ1dHRvbkNvbmZpZyhhY3Rpb24pO1xuICAgICAgICAgICAgaWYgKGJ1dHRvbkNvbmZpZyAmJiBidXR0b25Db25maWcua2xhc3MpIHtcbiAgICAgICAgICAgICAgICBjb25maWcuYnV0dG9ucy5wdXNoKGJ1dHRvbkNvbmZpZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cblxuICAgIGdldEJyZWFrcG9pbnQoKTogbnVtYmVyIHtcblxuICAgICAgICBjb25zdCBicmVha3BvaW50TWFwID0gdGhpcy5zeXN0ZW1Db25maWdzICYmIHRoaXMuc3lzdGVtQ29uZmlncy5nZXRDb25maWdWYWx1ZSgnbGlzdHZpZXdfYWN0aW9uc19saW1pdHMnKTtcblxuICAgICAgICBpZiAodGhpcy5zY3JlZW4gJiYgYnJlYWtwb2ludE1hcCAmJiBicmVha3BvaW50TWFwW3RoaXMuc2NyZWVuXSkge1xuICAgICAgICAgICAgdGhpcy5icmVha3BvaW50ID0gYnJlYWtwb2ludE1hcFt0aGlzLnNjcmVlbl07XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5icmVha3BvaW50O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYnJlYWtwb2ludCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnJlYWtwb2ludDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRCcmVha3BvaW50O1xuICAgIH1cblxuICAgIGdldCBhY3Rpb25zKCk6IE1vZHVsZUFjdGlvbltdIHtcbiAgICAgICAgaWYgKCF0aGlzLmxpc3RTdG9yZS52bS5hcHBEYXRhLm1vZHVsZSB8fCAhdGhpcy5saXN0U3RvcmUudm0uYXBwRGF0YS5tb2R1bGUubWVudSkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdFN0b3JlLnZtLmFwcERhdGEubW9kdWxlLm1lbnUuZmlsdGVyKGFjdGlvbiA9PiAhKGFjdGlvbi5uYW1lID09PSAnTGlzdCcgfHwgYWN0aW9uLm5hbWUgPT09ICdWaWV3JykpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRCdXR0b25Db25maWcoYWN0aW9uOiBNb2R1bGVBY3Rpb24pOiBCdXR0b25JbnRlcmZhY2Uge1xuXG4gICAgICAgIGlmICghdGhpcy5saXN0U3RvcmUudm0uYXBwRGF0YS5hcHBTdGF0ZS5tb2R1bGUpIHtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5saXN0U3RvcmUudm0uYXBwRGF0YS5sYW5ndWFnZSkge1xuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbW9kdWxlID0gdGhpcy5saXN0U3RvcmUudm0uYXBwRGF0YS5hcHBTdGF0ZS5tb2R1bGU7XG4gICAgICAgIGNvbnN0IGxhbmd1YWdlID0gdGhpcy5saXN0U3RvcmUudm0uYXBwRGF0YS5sYW5ndWFnZTtcbiAgICAgICAgbGV0IGxhYmVsS2V5ID0gJyc7XG4gICAgICAgIGlmIChhY3Rpb24uYWN0aW9uTGFiZWxLZXkpIHtcbiAgICAgICAgICAgIGxhYmVsS2V5ID0gYWN0aW9uLmFjdGlvbkxhYmVsS2V5O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGtsYXNzOiAnYWN0aW9uLWJ1dHRvbicsXG4gICAgICAgICAgICBsYWJlbDogdGhpcy5hY3Rpb25IYW5kbGVyLmdldEFjdGlvbkxhYmVsKG1vZHVsZSwgYWN0aW9uLCBsYW5ndWFnZSwgbGFiZWxLZXkpLFxuICAgICAgICAgICAgb25DbGljazogKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGFjdGlvbj8ucHJvY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVByb2Nlc3MobW9kdWxlLCBhY3Rpb24/LnByb2Nlc3MpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uSGFuZGxlci5uYXZpZ2F0ZShhY3Rpb24pLnRoZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaGFuZGxlUHJvY2Vzcyhtb2R1bGVOYW1lOiBzdHJpbmcsIHByb2Nlc3M6IHN0cmluZykge1xuXG4gICAgICAgIGlmKCFwcm9jZXNzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcm9jZXNzVHlwZSA9IHByb2Nlc3M7XG5cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGFjdGlvbjogcHJvY2Vzc1R5cGUsXG4gICAgICAgICAgICBtb2R1bGU6IG1vZHVsZU5hbWUsXG4gICAgICAgIH0gYXMgQXN5bmNBY3Rpb25JbnB1dDtcblxuICAgICAgICB0aGlzLmFzeW5jQWN0aW9uU2VydmljZS5ydW4ocHJvY2Vzc1R5cGUsIG9wdGlvbnMpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCk7XG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPGRpdiBjbGFzcz1cImxpc3Qtdmlldy1hY3Rpb25zIGZsb2F0LXJpZ2h0XCIgKm5nSWY9XCIodm0kIHwgYXN5bmMpIGFzIHZtXCI+XG4gICAgPHNjcm0tYnV0dG9uLWdyb3VwIFtjb25maWckXT1cImNvbmZpZyRcIj48L3Njcm0tYnV0dG9uLWdyb3VwPlxuPC9kaXY+XG4iXX0=