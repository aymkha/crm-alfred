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
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/navigation/module-navigation/module-navigation.service";
import * as i2 from "../../../services/navigation/module-name-mapper/module-name-mapper.service";
import * as i3 from "../../../store/system-config/system-config.store";
import * as i4 from "../../../store/metadata/metadata.store.service";
class BaseFavoritesComponent {
    navigation;
    nameMapper;
    configs;
    metadata;
    module;
    maxDisplayed = 5;
    records;
    subs = [];
    constructor(navigation, nameMapper, configs, metadata) {
        this.navigation = navigation;
        this.nameMapper = nameMapper;
        this.configs = configs;
        this.metadata = metadata;
    }
    ngOnInit() {
        const ui = this.configs.getConfigValue('ui') ?? {};
        this.maxDisplayed = parseInt(ui.navigation_max_module_favorites) ?? 5;
        this.initMetadata$();
    }
    ngOnDestroy() {
        this.clear();
    }
    ngOnChanges(changes) {
        const moduleChanges = changes?.module ?? null;
        if (moduleChanges === null) {
            return;
        }
        const previousModule = changes?.module?.previousValue ?? '';
        const currentModule = changes?.module?.currentValue ?? '';
        if (previousModule !== currentModule) {
            this.clear();
            this.initMetadata$();
        }
    }
    /**
     * Build route from recently viewed item
     * @param item
     */
    buildRoute(item) {
        const legacyName = item.attributes.parent_type ?? '';
        const module = this.nameMapper.toFrontend(legacyName) ?? '';
        const id = item.attributes.parent_id ?? '';
        return this.navigation.getRecordRouterLink(module, id);
    }
    /**
     * Init metadata subscription
     * @protected
     */
    initMetadata$() {
        const moduleMeta$ = this.metadata.allModuleMetadata$.pipe(map(value => value[this.module] ?? null));
        this.subs.push(moduleMeta$.subscribe(meta => {
            this.records = meta?.favorites ?? null;
        }));
    }
    /**
     * Clear subscription and data
     * @protected
     */
    clear() {
        this.records = null;
        this.subs.forEach(sub => sub.unsubscribe());
    }
    static ɵfac = function BaseFavoritesComponent_Factory(t) { return new (t || BaseFavoritesComponent)(i0.ɵɵdirectiveInject(i1.ModuleNavigation), i0.ɵɵdirectiveInject(i2.ModuleNameMapper), i0.ɵɵdirectiveInject(i3.SystemConfigStore), i0.ɵɵdirectiveInject(i4.MetadataStore)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BaseFavoritesComponent, selectors: [["ng-component"]], inputs: { module: "module" }, features: [i0.ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function BaseFavoritesComponent_Template(rf, ctx) { }, encapsulation: 2 });
}
export { BaseFavoritesComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseFavoritesComponent, [{
        type: Component,
        args: [{ template: '' }]
    }], function () { return [{ type: i1.ModuleNavigation }, { type: i2.ModuleNameMapper }, { type: i3.SystemConfigStore }, { type: i4.MetadataStore }]; }, { module: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1mYXZvcml0ZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvbmF2YmFyL21lbnUtZmF2b3JpdGVzL2Jhc2UtZmF2b3JpdGVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQThDLE1BQU0sZUFBZSxDQUFDO0FBTTVGLE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7O0FBR25DLE1BQ2Esc0JBQXNCO0lBT2pCO0lBQ0E7SUFDQTtJQUNBO0lBVEwsTUFBTSxDQUFTO0lBQ3hCLFlBQVksR0FBVyxDQUFDLENBQUM7SUFDekIsT0FBTyxDQUFhO0lBQ1YsSUFBSSxHQUFtQixFQUFFLENBQUM7SUFFcEMsWUFDYyxVQUE0QixFQUM1QixVQUE0QixFQUM1QixPQUEwQixFQUMxQixRQUF1QjtRQUh2QixlQUFVLEdBQVYsVUFBVSxDQUFrQjtRQUM1QixlQUFVLEdBQVYsVUFBVSxDQUFrQjtRQUM1QixZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUMxQixhQUFRLEdBQVIsUUFBUSxDQUFlO0lBRXJDLENBQUM7SUFFRCxRQUFRO1FBQ0osTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUM5QixNQUFNLGFBQWEsR0FBRyxPQUFPLEVBQUUsTUFBTSxJQUFJLElBQUksQ0FBQztRQUU5QyxJQUFJLGFBQWEsS0FBSyxJQUFJLEVBQUU7WUFDeEIsT0FBTztTQUNWO1FBRUQsTUFBTSxjQUFjLEdBQUcsT0FBTyxFQUFFLE1BQU0sRUFBRSxhQUFhLElBQUksRUFBRSxDQUFDO1FBQzVELE1BQU0sYUFBYSxHQUFHLE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxJQUFJLEVBQUUsQ0FBQztRQUMxRCxJQUFJLGNBQWMsS0FBSyxhQUFhLEVBQUU7WUFDbEMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNILFVBQVUsQ0FBQyxJQUFjO1FBQ3JCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQztRQUNyRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDNUQsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDO1FBQzNDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVEOzs7T0FHRztJQUNPLGFBQWE7UUFDbkIsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRXBHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEVBQUUsU0FBUyxJQUFJLElBQUksQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQztJQUVEOzs7T0FHRztJQUNPLEtBQUs7UUFDWCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7Z0ZBckVRLHNCQUFzQjs2REFBdEIsc0JBQXNCOztTQUF0QixzQkFBc0I7dUZBQXRCLHNCQUFzQjtjQURsQyxTQUFTO2VBQUMsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFDOzhKQUVaLE1BQU07a0JBQWQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RmF2b3JpdGV9IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge01vZHVsZU5hdmlnYXRpb259IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL25hdmlnYXRpb24vbW9kdWxlLW5hdmlnYXRpb24vbW9kdWxlLW5hdmlnYXRpb24uc2VydmljZSc7XG5pbXBvcnQge01vZHVsZU5hbWVNYXBwZXJ9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL25hdmlnYXRpb24vbW9kdWxlLW5hbWUtbWFwcGVyL21vZHVsZS1uYW1lLW1hcHBlci5zZXJ2aWNlJztcbmltcG9ydCB7U3lzdGVtQ29uZmlnU3RvcmV9IGZyb20gJy4uLy4uLy4uL3N0b3JlL3N5c3RlbS1jb25maWcvc3lzdGVtLWNvbmZpZy5zdG9yZSc7XG5pbXBvcnQge01ldGFkYXRhU3RvcmV9IGZyb20gJy4uLy4uLy4uL3N0b3JlL21ldGFkYXRhL21ldGFkYXRhLnN0b3JlLnNlcnZpY2UnO1xuaW1wb3J0IHttYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7dGVtcGxhdGU6ICcnfSlcbmV4cG9ydCBjbGFzcyBCYXNlRmF2b3JpdGVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gICAgQElucHV0KCkgbW9kdWxlOiBzdHJpbmc7XG4gICAgbWF4RGlzcGxheWVkOiBudW1iZXIgPSA1O1xuICAgIHJlY29yZHM6IEZhdm9yaXRlW107XG4gICAgcHJvdGVjdGVkIHN1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIG5hdmlnYXRpb246IE1vZHVsZU5hdmlnYXRpb24sXG4gICAgICAgIHByb3RlY3RlZCBuYW1lTWFwcGVyOiBNb2R1bGVOYW1lTWFwcGVyLFxuICAgICAgICBwcm90ZWN0ZWQgY29uZmlnczogU3lzdGVtQ29uZmlnU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBtZXRhZGF0YTogTWV0YWRhdGFTdG9yZVxuICAgICkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBjb25zdCB1aSA9IHRoaXMuY29uZmlncy5nZXRDb25maWdWYWx1ZSgndWknKSA/PyB7fTtcbiAgICAgICAgdGhpcy5tYXhEaXNwbGF5ZWQgPSBwYXJzZUludCh1aS5uYXZpZ2F0aW9uX21heF9tb2R1bGVfZmF2b3JpdGVzKSA/PyA1O1xuICAgICAgICB0aGlzLmluaXRNZXRhZGF0YSQoKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbW9kdWxlQ2hhbmdlcyA9IGNoYW5nZXM/Lm1vZHVsZSA/PyBudWxsO1xuXG4gICAgICAgIGlmIChtb2R1bGVDaGFuZ2VzID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcmV2aW91c01vZHVsZSA9IGNoYW5nZXM/Lm1vZHVsZT8ucHJldmlvdXNWYWx1ZSA/PyAnJztcbiAgICAgICAgY29uc3QgY3VycmVudE1vZHVsZSA9IGNoYW5nZXM/Lm1vZHVsZT8uY3VycmVudFZhbHVlID8/ICcnO1xuICAgICAgICBpZiAocHJldmlvdXNNb2R1bGUgIT09IGN1cnJlbnRNb2R1bGUpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdE1ldGFkYXRhJCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgcm91dGUgZnJvbSByZWNlbnRseSB2aWV3ZWQgaXRlbVxuICAgICAqIEBwYXJhbSBpdGVtXG4gICAgICovXG4gICAgYnVpbGRSb3V0ZShpdGVtOiBGYXZvcml0ZSk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGxlZ2FjeU5hbWUgPSBpdGVtLmF0dHJpYnV0ZXMucGFyZW50X3R5cGUgPz8gJyc7XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IHRoaXMubmFtZU1hcHBlci50b0Zyb250ZW5kKGxlZ2FjeU5hbWUpID8/ICcnO1xuICAgICAgICBjb25zdCBpZCA9IGl0ZW0uYXR0cmlidXRlcy5wYXJlbnRfaWQgPz8gJyc7XG4gICAgICAgIHJldHVybiB0aGlzLm5hdmlnYXRpb24uZ2V0UmVjb3JkUm91dGVyTGluayhtb2R1bGUsIGlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IG1ldGFkYXRhIHN1YnNjcmlwdGlvblxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaW5pdE1ldGFkYXRhJCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbW9kdWxlTWV0YSQgPSB0aGlzLm1ldGFkYXRhLmFsbE1vZHVsZU1ldGFkYXRhJC5waXBlKG1hcCh2YWx1ZSA9PiB2YWx1ZVt0aGlzLm1vZHVsZV0gPz8gbnVsbCkpO1xuXG4gICAgICAgIHRoaXMuc3Vicy5wdXNoKG1vZHVsZU1ldGEkLnN1YnNjcmliZShtZXRhID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVjb3JkcyA9IG1ldGE/LmZhdm9yaXRlcyA/PyBudWxsO1xuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgc3Vic2NyaXB0aW9uIGFuZCBkYXRhXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5yZWNvcmRzID0gbnVsbDtcbiAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgICB9XG59XG4iXX0=