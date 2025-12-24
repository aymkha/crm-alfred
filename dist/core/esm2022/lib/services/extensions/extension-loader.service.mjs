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
import { createNgModule, Injectable } from '@angular/core';
import { forkJoin, from, isObservable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { loadRemoteModule } from '@angular-architects/module-federation-runtime';
import { isFalse } from 'common';
import * as i0 from "@angular/core";
import * as i1 from "../../store/system-config/system-config.store";
class ExtensionLoader {
    systemConfigStore;
    constructor(systemConfigStore) {
        this.systemConfigStore = systemConfigStore;
    }
    /**
     * Load all extensions
     *
     * @param {object} injector Injector
     */
    load(injector) {
        const extensions = this.systemConfigStore.getConfigValue('extensions');
        const extensionModules$ = {};
        Object.keys(extensions).forEach(extensionName => {
            if (!extensions[extensionName]) {
                return;
            }
            const config = extensions[extensionName];
            if (!config.remoteEntry || !config.remoteName) {
                return;
            }
            if (!config.enabled || isFalse(config.enabled)) {
                return;
            }
            extensionModules$[extensionName] = this.loadExtension(config, injector);
        });
        if (Object.keys(extensionModules$).length < 1) {
            return of({});
        }
        //TODO: Correct here
        return forkJoin(extensionModules$);
    }
    /**
     * Load single extension
     *
     * @param {object} config ExtensionConfig
     * @param {object} injector Injector
     */
    loadExtension(config, injector) {
        const promise = () => loadRemoteModule({
            type: 'module',
            remoteEntry: config.remoteEntry,
            exposedModule: './Module'
        }).then(m => m.ExtensionModule);
        return this.loadModule(promise, injector);
    }
    /**
     * Check if object is a promise
     * @param {} obj promise
     * @returns {boolean} isPromise
     */
    isPromise(obj) {
        return !!obj && typeof obj.then === 'function';
    }
    /**
     * Wrap into observable
     *
     * @param {object} value to wrap
     * @returns {object} observable
     */
    wrapIntoObservable(value) {
        if (isObservable(value)) {
            // @ts-ignore
            return value;
        }
        if (this.isPromise(value)) {
            // @ts-ignore
            return from(Promise.resolve(value));
        }
        // @ts-ignore
        return of(value);
    }
    /**
     * Load module factory and return observable
     * @param {function} loadChildren
     */
    loadModule(loadChildren, injector) {
        return this.wrapIntoObservable(loadChildren()).pipe(map((module) => {
            return createNgModule(module, injector);
        }));
    }
    static ɵfac = function ExtensionLoader_Factory(t) { return new (t || ExtensionLoader)(i0.ɵɵinject(i1.SystemConfigStore)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ExtensionLoader, factory: ExtensionLoader.ɵfac, providedIn: 'root' });
}
export { ExtensionLoader };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExtensionLoader, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.SystemConfigStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaW9uLWxvYWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3NlcnZpY2VzL2V4dGVuc2lvbnMvZXh0ZW5zaW9uLWxvYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUMsY0FBYyxFQUFFLFVBQVUsRUFBOEIsTUFBTSxlQUFlLENBQUM7QUFDdEYsT0FBTyxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFjLEVBQUUsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUVsRSxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFFL0UsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLFFBQVEsQ0FBQzs7O0FBWS9CLE1BR2EsZUFBZTtJQUdWO0lBRGQsWUFDYyxpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUVsRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLElBQUksQ0FBQyxRQUFrQjtRQUUxQixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRXZFLE1BQU0saUJBQWlCLEdBQUcsRUFBRSxDQUFDO1FBRTdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQzVDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEVBQUU7Z0JBQzVCLE9BQU87YUFDVjtZQUVELE1BQU0sTUFBTSxHQUFvQixVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7WUFHMUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO2dCQUMzQyxPQUFPO2FBQ1Y7WUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUM1QyxPQUFPO2FBQ1Y7WUFFRCxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM1RSxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDM0MsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDakI7UUFFRCxvQkFBb0I7UUFFcEIsT0FBTyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxhQUFhLENBQUMsTUFBdUIsRUFBRSxRQUFrQjtRQUM1RCxNQUFNLE9BQU8sR0FBRyxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztZQUNuQyxJQUFJLEVBQUUsUUFBUTtZQUNkLFdBQVcsRUFBRSxNQUFNLENBQUMsV0FBVztZQUMvQixhQUFhLEVBQUUsVUFBVTtTQUM1QixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRWhDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVEOzs7O09BSUc7SUFDTyxTQUFTLENBQVUsR0FBUTtRQUNqQyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksT0FBTyxHQUFHLENBQUMsSUFBSSxLQUFLLFVBQVUsQ0FBQztJQUNuRCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDTyxrQkFBa0IsQ0FBSSxLQUFxQztRQUNqRSxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNyQixhQUFhO1lBQ2IsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFFRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdkIsYUFBYTtZQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUN2QztRQUVELGFBQWE7UUFDYixPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQ7OztPQUdHO0lBQ08sVUFBVSxDQUFDLFlBQWtDLEVBQUUsUUFBa0I7UUFDdkUsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBaUIsRUFBRSxFQUFFO1lBQzFFLE9BQU8sY0FBYyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQzt5RUFwR1EsZUFBZTtnRUFBZixlQUFlLFdBQWYsZUFBZSxtQkFGWixNQUFNOztTQUVULGVBQWU7dUZBQWYsZUFBZTtjQUgzQixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7Y3JlYXRlTmdNb2R1bGUsIEluamVjdGFibGUsIEluamVjdG9yLCBOZ01vZHVsZVJlZiwgVHlwZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2ZvcmtKb2luLCBmcm9tLCBpc09ic2VydmFibGUsIE9ic2VydmFibGUsIG9mfSBmcm9tICdyeGpzJztcbmltcG9ydCB7TG9hZENoaWxkcmVuQ2FsbGJhY2t9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge21hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtsb2FkUmVtb3RlTW9kdWxlfSBmcm9tICdAYW5ndWxhci1hcmNoaXRlY3RzL21vZHVsZS1mZWRlcmF0aW9uLXJ1bnRpbWUnO1xuaW1wb3J0IHtTeXN0ZW1Db25maWdTdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvc3lzdGVtLWNvbmZpZy9zeXN0ZW0tY29uZmlnLnN0b3JlJztcbmltcG9ydCB7aXNGYWxzZX0gZnJvbSAnY29tbW9uJztcblxuaW50ZXJmYWNlIEV4dGVuc2lvbkNvbmZpZyB7XG4gICAgcmVtb3RlRW50cnk/OiBzdHJpbmcsXG4gICAgcmVtb3RlTmFtZT86IHN0cmluZyxcbiAgICBlbmFibGVkPzogYm9vbGVhblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1vZHVsZVJlZk1hcCB7XG4gICAgW2tleTogc3RyaW5nXTogTmdNb2R1bGVSZWY8YW55PlxufVxuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEV4dGVuc2lvbkxvYWRlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIHN5c3RlbUNvbmZpZ1N0b3JlOiBTeXN0ZW1Db25maWdTdG9yZSxcbiAgICApIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIGFsbCBleHRlbnNpb25zXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gaW5qZWN0b3IgSW5qZWN0b3JcbiAgICAgKi9cbiAgICBwdWJsaWMgbG9hZChpbmplY3RvcjogSW5qZWN0b3IpOiBPYnNlcnZhYmxlPE1vZHVsZVJlZk1hcD4ge1xuXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvbnMgPSB0aGlzLnN5c3RlbUNvbmZpZ1N0b3JlLmdldENvbmZpZ1ZhbHVlKCdleHRlbnNpb25zJyk7XG5cbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uTW9kdWxlcyQgPSB7fTtcblxuICAgICAgICBPYmplY3Qua2V5cyhleHRlbnNpb25zKS5mb3JFYWNoKGV4dGVuc2lvbk5hbWUgPT4ge1xuICAgICAgICAgICAgaWYgKCFleHRlbnNpb25zW2V4dGVuc2lvbk5hbWVdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBjb25maWc6IEV4dGVuc2lvbkNvbmZpZyA9IGV4dGVuc2lvbnNbZXh0ZW5zaW9uTmFtZV07XG5cblxuICAgICAgICAgICAgaWYgKCFjb25maWcucmVtb3RlRW50cnkgfHwgIWNvbmZpZy5yZW1vdGVOYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5lbmFibGVkIHx8IGlzRmFsc2UoY29uZmlnLmVuYWJsZWQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBleHRlbnNpb25Nb2R1bGVzJFtleHRlbnNpb25OYW1lXSA9IHRoaXMubG9hZEV4dGVuc2lvbihjb25maWcsIGluamVjdG9yKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGV4dGVuc2lvbk1vZHVsZXMkKS5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gb2Yoe30pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9UT0RPOiBDb3JyZWN0IGhlcmVcblxuICAgICAgICByZXR1cm4gZm9ya0pvaW4oZXh0ZW5zaW9uTW9kdWxlcyQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWQgc2luZ2xlIGV4dGVuc2lvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBFeHRlbnNpb25Db25maWdcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gaW5qZWN0b3IgSW5qZWN0b3JcbiAgICAgKi9cbiAgICBwdWJsaWMgbG9hZEV4dGVuc2lvbihjb25maWc6IEV4dGVuc2lvbkNvbmZpZywgaW5qZWN0b3I6IEluamVjdG9yKTogT2JzZXJ2YWJsZTxOZ01vZHVsZVJlZjxhbnk+PiB7XG4gICAgICAgIGNvbnN0IHByb21pc2UgPSAoKSA9PiBsb2FkUmVtb3RlTW9kdWxlKHtcbiAgICAgICAgICAgIHR5cGU6ICdtb2R1bGUnLFxuICAgICAgICAgICAgcmVtb3RlRW50cnk6IGNvbmZpZy5yZW1vdGVFbnRyeSxcbiAgICAgICAgICAgIGV4cG9zZWRNb2R1bGU6ICcuL01vZHVsZSdcbiAgICAgICAgfSkudGhlbihtID0+IG0uRXh0ZW5zaW9uTW9kdWxlKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5sb2FkTW9kdWxlKHByb21pc2UsIGluamVjdG9yKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBvYmplY3QgaXMgYSBwcm9taXNlXG4gICAgICogQHBhcmFtIHt9IG9iaiBwcm9taXNlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IGlzUHJvbWlzZVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBpc1Byb21pc2U8VCA9IGFueT4ob2JqOiBhbnkpOiBvYmogaXMgUHJvbWlzZTxUPiB7XG4gICAgICAgIHJldHVybiAhIW9iaiAmJiB0eXBlb2Ygb2JqLnRoZW4gPT09ICdmdW5jdGlvbic7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV3JhcCBpbnRvIG9ic2VydmFibGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZSB0byB3cmFwXG4gICAgICogQHJldHVybnMge29iamVjdH0gb2JzZXJ2YWJsZVxuICAgICAqL1xuICAgIHByb3RlY3RlZCB3cmFwSW50b09ic2VydmFibGU8VD4odmFsdWU6IFQgfCBQcm9taXNlPFQ+IHwgT2JzZXJ2YWJsZTxUPik6IE9ic2VydmFibGU8VD4ge1xuICAgICAgICBpZiAoaXNPYnNlcnZhYmxlKHZhbHVlKSkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNQcm9taXNlKHZhbHVlKSkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgcmV0dXJuIGZyb20oUHJvbWlzZS5yZXNvbHZlKHZhbHVlKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBvZih2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZCBtb2R1bGUgZmFjdG9yeSBhbmQgcmV0dXJuIG9ic2VydmFibGVcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBsb2FkQ2hpbGRyZW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgbG9hZE1vZHVsZShsb2FkQ2hpbGRyZW46IExvYWRDaGlsZHJlbkNhbGxiYWNrLCBpbmplY3RvcjogSW5qZWN0b3IpOiBPYnNlcnZhYmxlPE5nTW9kdWxlUmVmPGFueT4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMud3JhcEludG9PYnNlcnZhYmxlKGxvYWRDaGlsZHJlbigpKS5waXBlKG1hcCgobW9kdWxlOiBUeXBlPGFueT4pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVOZ01vZHVsZShtb2R1bGUsIGluamVjdG9yKTtcbiAgICAgICAgfSkpO1xuICAgIH1cbn1cbiJdfQ==