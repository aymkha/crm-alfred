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
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordHeaderComponent } from './record-header.component';
import { ModuleTitleModule } from '../../../../components/module-title/module-title.module';
import { DynamicLabelModule } from '../../../../components/dynamic-label/dynamic-label.module';
import { ActionGroupMenuModule } from '../../../../components/action-group-menu/action-group-menu.module';
import { FavoriteToggleModule } from '../../../../containers/favorite-toggle/components/favorite-toggle/favorite-toggle.module';
import * as i0 from "@angular/core";
class RecordHeaderModule {
    static ɵfac = function RecordHeaderModule_Factory(t) { return new (t || RecordHeaderModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: RecordHeaderModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            ModuleTitleModule,
            DynamicLabelModule,
            ActionGroupMenuModule,
            FavoriteToggleModule] });
}
export { RecordHeaderModule };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordHeaderModule, [{
        type: NgModule,
        args: [{
                declarations: [RecordHeaderComponent],
                exports: [RecordHeaderComponent],
                imports: [
                    CommonModule,
                    ModuleTitleModule,
                    DynamicLabelModule,
                    ActionGroupMenuModule,
                    FavoriteToggleModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(RecordHeaderModule, { declarations: [RecordHeaderComponent], imports: [CommonModule,
        ModuleTitleModule,
        DynamicLabelModule,
        ActionGroupMenuModule,
        FavoriteToggleModule], exports: [RecordHeaderComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLWhlYWRlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvcmVjb3JkL2NvbXBvbmVudHMvcmVjb3JkLWhlYWRlci9yZWNvcmQtaGVhZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0seURBQXlELENBQUM7QUFDMUYsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sMkRBQTJELENBQUM7QUFDN0YsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sbUVBQW1FLENBQUM7QUFDeEcsT0FBTyxFQUNILG9CQUFvQixFQUN2QixNQUFNLDBGQUEwRixDQUFDOztBQUVsRyxNQVdhLGtCQUFrQjs0RUFBbEIsa0JBQWtCOzREQUFsQixrQkFBa0I7Z0VBUHZCLFlBQVk7WUFDWixpQkFBaUI7WUFDakIsa0JBQWtCO1lBQ2xCLHFCQUFxQjtZQUNyQixvQkFBb0I7O1NBR2Ysa0JBQWtCO3VGQUFsQixrQkFBa0I7Y0FYOUIsUUFBUTtlQUFDO2dCQUNOLFlBQVksRUFBRSxDQUFDLHFCQUFxQixDQUFDO2dCQUNyQyxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztnQkFDaEMsT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osaUJBQWlCO29CQUNqQixrQkFBa0I7b0JBQ2xCLHFCQUFxQjtvQkFDckIsb0JBQW9CO2lCQUN2QjthQUNKOzt3RkFDWSxrQkFBa0IsbUJBVloscUJBQXFCLGFBR2hDLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLHFCQUFxQjtRQUNyQixvQkFBb0IsYUFOZCxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1JlY29yZEhlYWRlckNvbXBvbmVudH0gZnJvbSAnLi9yZWNvcmQtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQge01vZHVsZVRpdGxlTW9kdWxlfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL21vZHVsZS10aXRsZS9tb2R1bGUtdGl0bGUubW9kdWxlJztcbmltcG9ydCB7RHluYW1pY0xhYmVsTW9kdWxlfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2R5bmFtaWMtbGFiZWwvZHluYW1pYy1sYWJlbC5tb2R1bGUnO1xuaW1wb3J0IHtBY3Rpb25Hcm91cE1lbnVNb2R1bGV9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYWN0aW9uLWdyb3VwLW1lbnUvYWN0aW9uLWdyb3VwLW1lbnUubW9kdWxlJztcbmltcG9ydCB7XG4gICAgRmF2b3JpdGVUb2dnbGVNb2R1bGVcbn0gZnJvbSAnLi4vLi4vLi4vLi4vY29udGFpbmVycy9mYXZvcml0ZS10b2dnbGUvY29tcG9uZW50cy9mYXZvcml0ZS10b2dnbGUvZmF2b3JpdGUtdG9nZ2xlLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbUmVjb3JkSGVhZGVyQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbUmVjb3JkSGVhZGVyQ29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgTW9kdWxlVGl0bGVNb2R1bGUsXG4gICAgICAgIER5bmFtaWNMYWJlbE1vZHVsZSxcbiAgICAgICAgQWN0aW9uR3JvdXBNZW51TW9kdWxlLFxuICAgICAgICBGYXZvcml0ZVRvZ2dsZU1vZHVsZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgUmVjb3JkSGVhZGVyTW9kdWxlIHtcbn1cbiJdfQ==