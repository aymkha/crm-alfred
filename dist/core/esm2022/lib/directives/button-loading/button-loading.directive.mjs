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
import { Directive, HostListener, Input } from '@angular/core';
import { tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../store/app-state/app-state.store";
class ButtonLoadingDirective {
    el;
    appStateStore;
    state;
    subscription;
    appLoading = false;
    constructor(el, appStateStore) {
        this.el = el;
        this.appStateStore = appStateStore;
    }
    ngOnInit() {
        this.subscription = this.appStateStore.loading$.pipe(tap((loading) => {
            this.appLoading = loading;
            this.updateComponent();
        })).subscribe();
        this.updateComponent();
    }
    ngOnChanges(changes) {
        if (changes.state) {
            this.updateComponent();
        }
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    clickEvent() {
        this.updateComponent();
    }
    /**
     * Calculate loading state and update loading
     */
    updateComponent() {
        const loading = this.isLoading();
        this.setDisabledState(loading);
    }
    /**
     * Calculate if is loading
     *
     * @returns {boolean} isLoading
     */
    isLoading() {
        let loading = false;
        if (this.state === true || this.appLoading === true) {
            loading = true;
        }
        return loading;
    }
    /**
     * Disable or enable button
     *
     * @param {boolean} state to set
     */
    setDisabledState(state) {
        this.el.nativeElement.disabled = state;
    }
    static ɵfac = function ButtonLoadingDirective_Factory(t) { return new (t || ButtonLoadingDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.AppStateStore)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ButtonLoadingDirective, selectors: [["", "scrm-button-loading", ""]], hostBindings: function ButtonLoadingDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function ButtonLoadingDirective_click_HostBindingHandler() { return ctx.clickEvent(); });
        } }, inputs: { state: ["scrm-button-loading", "state"] }, features: [i0.ɵɵNgOnChangesFeature] });
}
export { ButtonLoadingDirective };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ButtonLoadingDirective, [{
        type: Directive,
        args: [{
                selector: '[scrm-button-loading]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.AppStateStore }]; }, { state: [{
            type: Input,
            args: ['scrm-button-loading']
        }], clickEvent: [{
            type: HostListener,
            args: ['click']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWxvYWRpbmcuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2RpcmVjdGl2ZXMvYnV0dG9uLWxvYWRpbmcvYnV0dG9uLWxvYWRpbmcuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQThDLE1BQU0sZUFBZSxDQUFDO0FBRXRILE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBR25DLE1BR2Esc0JBQXNCO0lBTVg7SUFBd0I7SUFKZCxLQUFLLENBQVU7SUFDckMsWUFBWSxDQUFlO0lBQzNCLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFFM0IsWUFBb0IsRUFBYyxFQUFVLGFBQTRCO1FBQXBELE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUN4RSxDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQWdCLEVBQUUsRUFBRTtZQUMxRSxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztZQUMxQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUM5QixJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDZixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDMUI7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUdELFVBQVU7UUFDTixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVEOztPQUVHO0lBQ0ssZUFBZTtRQUNuQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ssU0FBUztRQUNiLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQztRQUVwQixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssSUFBSSxFQUFFO1lBQ2pELE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDbEI7UUFFRCxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLGdCQUFnQixDQUFDLEtBQWM7UUFDbkMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUMzQyxDQUFDO2dGQTlEUSxzQkFBc0I7NkRBQXRCLHNCQUFzQjt1R0FBdEIsZ0JBQVk7OztTQUFaLHNCQUFzQjt1RkFBdEIsc0JBQXNCO2NBSGxDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsdUJBQXVCO2FBQ3BDO3lGQUdpQyxLQUFLO2tCQUFsQyxLQUFLO21CQUFDLHFCQUFxQjtZQTBCNUIsVUFBVTtrQkFEVCxZQUFZO21CQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QXBwU3RhdGVTdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvYXBwLXN0YXRlL2FwcC1zdGF0ZS5zdG9yZSc7XG5pbXBvcnQge3RhcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tzY3JtLWJ1dHRvbi1sb2FkaW5nXSdcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uTG9hZGluZ0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuXG4gICAgQElucHV0KCdzY3JtLWJ1dHRvbi1sb2FkaW5nJykgc3RhdGU6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgICBwcml2YXRlIGFwcExvYWRpbmcgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgYXBwU3RhdGVTdG9yZTogQXBwU3RhdGVTdG9yZSkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuYXBwU3RhdGVTdG9yZS5sb2FkaW5nJC5waXBlKHRhcCgobG9hZGluZzogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5hcHBMb2FkaW5nID0gbG9hZGluZztcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50KCk7XG4gICAgICAgIH0pKS5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnQoKTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgICAgIGlmIChjaGFuZ2VzLnN0YXRlKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICAgIGNsaWNrRXZlbnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIGxvYWRpbmcgc3RhdGUgYW5kIHVwZGF0ZSBsb2FkaW5nXG4gICAgICovXG4gICAgcHJpdmF0ZSB1cGRhdGVDb21wb25lbnQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGxvYWRpbmcgPSB0aGlzLmlzTG9hZGluZygpO1xuICAgICAgICB0aGlzLnNldERpc2FibGVkU3RhdGUobG9hZGluZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIGlmIGlzIGxvYWRpbmdcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBpc0xvYWRpbmdcbiAgICAgKi9cbiAgICBwcml2YXRlIGlzTG9hZGluZygpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGxvYWRpbmcgPSBmYWxzZTtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gdHJ1ZSB8fCB0aGlzLmFwcExvYWRpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGxvYWRpbmcgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxvYWRpbmc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZSBvciBlbmFibGUgYnV0dG9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHN0YXRlIHRvIHNldFxuICAgICAqL1xuICAgIHByaXZhdGUgc2V0RGlzYWJsZWRTdGF0ZShzdGF0ZTogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgPSBzdGF0ZTtcbiAgICB9XG59XG4iXX0=