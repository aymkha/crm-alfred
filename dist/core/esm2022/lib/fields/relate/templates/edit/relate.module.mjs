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
import { RelateEditFieldComponent } from './relate.component';
import { TagInputModule } from 'ngx-chips';
import { FormsModule } from '@angular/forms';
import { InlineLoadingSpinnerModule } from '../../../../components/inline-loading-spinner/inline-loading-spinner.module';
import { ButtonModule } from '../../../../components/button/button.module';
import { LabelModule } from '../../../../components/label/label.module';
import * as i0 from "@angular/core";
class RelateEditFieldModule {
    static ɵfac = function RelateEditFieldModule_Factory(t) { return new (t || RelateEditFieldModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: RelateEditFieldModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            TagInputModule,
            LabelModule,
            FormsModule,
            InlineLoadingSpinnerModule,
            ButtonModule] });
}
export { RelateEditFieldModule };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RelateEditFieldModule, [{
        type: NgModule,
        args: [{
                declarations: [RelateEditFieldComponent],
                exports: [RelateEditFieldComponent],
                imports: [
                    CommonModule,
                    TagInputModule,
                    LabelModule,
                    FormsModule,
                    InlineLoadingSpinnerModule,
                    ButtonModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(RelateEditFieldModule, { declarations: [RelateEditFieldComponent], imports: [CommonModule,
        TagInputModule,
        LabelModule,
        FormsModule,
        InlineLoadingSpinnerModule,
        ButtonModule], exports: [RelateEditFieldComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsYXRlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9maWVsZHMvcmVsYXRlL3RlbXBsYXRlcy9lZGl0L3JlbGF0ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQzVELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDekMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLDZFQUE2RSxDQUFDO0FBQ3ZILE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUN6RSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sMkNBQTJDLENBQUM7O0FBRXRFLE1BWWEscUJBQXFCOytFQUFyQixxQkFBcUI7NERBQXJCLHFCQUFxQjtnRUFSMUIsWUFBWTtZQUNaLGNBQWM7WUFDZCxXQUFXO1lBQ1gsV0FBVztZQUNYLDBCQUEwQjtZQUMxQixZQUFZOztTQUdQLHFCQUFxQjt1RkFBckIscUJBQXFCO2NBWmpDLFFBQVE7ZUFBQztnQkFDTixZQUFZLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDeEMsT0FBTyxFQUFFLENBQUMsd0JBQXdCLENBQUM7Z0JBQ25DLE9BQU8sRUFBRTtvQkFDTCxZQUFZO29CQUNaLGNBQWM7b0JBQ2QsV0FBVztvQkFDWCxXQUFXO29CQUNYLDBCQUEwQjtvQkFDMUIsWUFBWTtpQkFDZjthQUNKOzt3RkFDWSxxQkFBcUIsbUJBWGYsd0JBQXdCLGFBR25DLFlBQVk7UUFDWixjQUFjO1FBQ2QsV0FBVztRQUNYLFdBQVc7UUFDWCwwQkFBMEI7UUFDMUIsWUFBWSxhQVBOLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7UmVsYXRlRWRpdEZpZWxkQ29tcG9uZW50fSBmcm9tICcuL3JlbGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHtUYWdJbnB1dE1vZHVsZX0gZnJvbSAnbmd4LWNoaXBzJztcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7SW5saW5lTG9hZGluZ1NwaW5uZXJNb2R1bGV9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaW5saW5lLWxvYWRpbmctc3Bpbm5lci9pbmxpbmUtbG9hZGluZy1zcGlubmVyLm1vZHVsZSc7XG5pbXBvcnQge0J1dHRvbk1vZHVsZX0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9idXR0b24vYnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQge0xhYmVsTW9kdWxlfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2xhYmVsL2xhYmVsLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbUmVsYXRlRWRpdEZpZWxkQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbUmVsYXRlRWRpdEZpZWxkQ29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgVGFnSW5wdXRNb2R1bGUsXG4gICAgICAgIExhYmVsTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgSW5saW5lTG9hZGluZ1NwaW5uZXJNb2R1bGUsXG4gICAgICAgIEJ1dHRvbk1vZHVsZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgUmVsYXRlRWRpdEZpZWxkTW9kdWxlIHtcbn1cbiJdfQ==