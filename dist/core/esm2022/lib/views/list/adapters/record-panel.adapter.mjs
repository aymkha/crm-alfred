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
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../store/list-view/list-view.store";
import * as i2 from "../../../containers/record-panel/store/record-panel/record-panel.store.factory";
import * as i3 from "./record-panel-actions.adapter.factory";
import * as i4 from "../../../services/record/record.manager";
class RecordPanelAdapter {
    store;
    recordPanelStoreFactory;
    actionAdapterFactory;
    recordManager;
    constructor(store, recordPanelStoreFactory, actionAdapterFactory, recordManager) {
        this.store = store;
        this.recordPanelStoreFactory = recordPanelStoreFactory;
        this.actionAdapterFactory = actionAdapterFactory;
        this.recordManager = recordManager;
    }
    getConfig() {
        const store = this.createStore();
        return {
            module: this.getModule(),
            title: (this.store.recordPanelConfig && this.store.recordPanelConfig.title) || '',
            store: store,
            meta: this.store.recordPanelConfig,
            actions: this.createActionAdapter(store),
            onClose: () => {
                this.store.closeRecordPanel();
            },
        };
    }
    /**
     * Get configured module
     * @returns {string} module
     */
    getModule() {
        return this.store.recordPanelConfig.module || this.store.getModuleName();
    }
    /**
     * Get configured view mode
     * @returns {string} ViewMode
     */
    getViewMode() {
        return this.store.recordPanelConfig.mode || 'edit';
    }
    /**
     * Create and init store
     * @returns {object} RecordPanelStore
     */
    createStore() {
        const store = this.recordPanelStoreFactory.create();
        const blankRecord = this.recordManager.buildEmptyRecord(this.getModule());
        store.setMetadata(this.store.recordPanelConfig);
        store.initRecord(blankRecord, this.getViewMode(), false);
        return store;
    }
    /**
     * Create action adapter
     * @returns {object} BaseRecordActionsAdapter
     */
    createActionAdapter(store) {
        return this.actionAdapterFactory.create(store, this.store);
    }
    static ɵfac = function RecordPanelAdapter_Factory(t) { return new (t || RecordPanelAdapter)(i0.ɵɵinject(i1.ListViewStore), i0.ɵɵinject(i2.RecordPanelStoreFactory), i0.ɵɵinject(i3.ListViewRecordPanelActionAdapterFactory), i0.ɵɵinject(i4.RecordManager)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordPanelAdapter, factory: RecordPanelAdapter.ɵfac });
}
export { RecordPanelAdapter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordPanelAdapter, [{
        type: Injectable
    }], function () { return [{ type: i1.ListViewStore }, { type: i2.RecordPanelStoreFactory }, { type: i3.ListViewRecordPanelActionAdapterFactory }, { type: i4.RecordManager }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLXBhbmVsLmFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvbGlzdC9hZGFwdGVycy9yZWNvcmQtcGFuZWwuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBYXpDLE1BQ2Esa0JBQWtCO0lBR2I7SUFDQTtJQUNBO0lBQ0E7SUFKZCxZQUNjLEtBQW9CLEVBQ3BCLHVCQUFnRCxFQUNoRCxvQkFBNkQsRUFDN0QsYUFBNEI7UUFINUIsVUFBSyxHQUFMLEtBQUssQ0FBZTtRQUNwQiw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBeUM7UUFDN0Qsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFFMUMsQ0FBQztJQUVELFNBQVM7UUFDTCxNQUFNLEtBQUssR0FBcUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBR25ELE9BQU87WUFDSCxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUV4QixLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtZQUNqRixLQUFLLEVBQUUsS0FBSztZQUNaLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQjtZQUVsQyxPQUFPLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQztZQUV4QyxPQUFPLEVBQUUsR0FBUyxFQUFFO2dCQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDbEMsQ0FBQztTQUVpQixDQUFDO0lBQzNCLENBQUM7SUFFRDs7O09BR0c7SUFDTyxTQUFTO1FBQ2YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzdFLENBQUM7SUFFRDs7O09BR0c7SUFDTyxXQUFXO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLElBQUksTUFBa0IsQ0FBQztJQUNuRSxDQUFDO0lBRUQ7OztPQUdHO0lBQ08sV0FBVztRQUNqQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDcEQsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUUxRSxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNoRCxLQUFLLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFekQsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7T0FHRztJQUNPLG1CQUFtQixDQUFDLEtBQXVCO1FBQ2pELE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FDbkMsS0FBSyxFQUNMLElBQUksQ0FBQyxLQUFLLENBQ2IsQ0FBQTtJQUNMLENBQUM7NEVBckVRLGtCQUFrQjtnRUFBbEIsa0JBQWtCLFdBQWxCLGtCQUFrQjs7U0FBbEIsa0JBQWtCO3VGQUFsQixrQkFBa0I7Y0FEOUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TGlzdFZpZXdTdG9yZX0gZnJvbSAnLi4vc3RvcmUvbGlzdC12aWV3L2xpc3Qtdmlldy5zdG9yZSc7XG5pbXBvcnQge1xuICAgIFJlY29yZFBhbmVsQWN0aW9uRGF0YSxcbiAgICBSZWNvcmRQYW5lbENvbmZpZ1xufSBmcm9tICcuLi8uLi8uLi9jb250YWluZXJzL3JlY29yZC1wYW5lbC9jb21wb25lbnRzL3JlY29yZC1wYW5lbC9yZWNvcmQtcGFuZWwubW9kZWwnO1xuaW1wb3J0IHtSZWNvcmRQYW5lbFN0b3JlfSBmcm9tICcuLi8uLi8uLi9jb250YWluZXJzL3JlY29yZC1wYW5lbC9zdG9yZS9yZWNvcmQtcGFuZWwvcmVjb3JkLXBhbmVsLnN0b3JlJztcbmltcG9ydCB7QmFzZVJlY29yZEFjdGlvbnNBZGFwdGVyfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9hY3Rpb25zL2Jhc2UtcmVjb3JkLWFjdGlvbi5hZGFwdGVyJztcbmltcG9ydCB7TGlzdFZpZXdSZWNvcmRQYW5lbEFjdGlvbkFkYXB0ZXJGYWN0b3J5fSBmcm9tICcuL3JlY29yZC1wYW5lbC1hY3Rpb25zLmFkYXB0ZXIuZmFjdG9yeSc7XG5pbXBvcnQge1JlY29yZFBhbmVsU3RvcmVGYWN0b3J5fSBmcm9tICcuLi8uLi8uLi9jb250YWluZXJzL3JlY29yZC1wYW5lbC9zdG9yZS9yZWNvcmQtcGFuZWwvcmVjb3JkLXBhbmVsLnN0b3JlLmZhY3RvcnknO1xuaW1wb3J0IHtWaWV3TW9kZX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7UmVjb3JkTWFuYWdlcn0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvcmVjb3JkL3JlY29yZC5tYW5hZ2VyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlY29yZFBhbmVsQWRhcHRlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIHN0b3JlOiBMaXN0Vmlld1N0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgcmVjb3JkUGFuZWxTdG9yZUZhY3Rvcnk6IFJlY29yZFBhbmVsU3RvcmVGYWN0b3J5LFxuICAgICAgICBwcm90ZWN0ZWQgYWN0aW9uQWRhcHRlckZhY3Rvcnk6IExpc3RWaWV3UmVjb3JkUGFuZWxBY3Rpb25BZGFwdGVyRmFjdG9yeSxcbiAgICAgICAgcHJvdGVjdGVkIHJlY29yZE1hbmFnZXI6IFJlY29yZE1hbmFnZXJcbiAgICApIHtcbiAgICB9XG5cbiAgICBnZXRDb25maWcoKTogUmVjb3JkUGFuZWxDb25maWcge1xuICAgICAgICBjb25zdCBzdG9yZTogUmVjb3JkUGFuZWxTdG9yZSA9IHRoaXMuY3JlYXRlU3RvcmUoKTtcblxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtb2R1bGU6IHRoaXMuZ2V0TW9kdWxlKCksXG5cbiAgICAgICAgICAgIHRpdGxlOiAodGhpcy5zdG9yZS5yZWNvcmRQYW5lbENvbmZpZyAmJiB0aGlzLnN0b3JlLnJlY29yZFBhbmVsQ29uZmlnLnRpdGxlKSB8fCAnJyxcbiAgICAgICAgICAgIHN0b3JlOiBzdG9yZSxcbiAgICAgICAgICAgIG1ldGE6IHRoaXMuc3RvcmUucmVjb3JkUGFuZWxDb25maWcsXG5cbiAgICAgICAgICAgIGFjdGlvbnM6IHRoaXMuY3JlYXRlQWN0aW9uQWRhcHRlcihzdG9yZSksXG5cbiAgICAgICAgICAgIG9uQ2xvc2U6ICgpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLmNsb3NlUmVjb3JkUGFuZWwoKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgfSBhcyBSZWNvcmRQYW5lbENvbmZpZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgY29uZmlndXJlZCBtb2R1bGVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBtb2R1bGVcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0TW9kdWxlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlLnJlY29yZFBhbmVsQ29uZmlnLm1vZHVsZSB8fCB0aGlzLnN0b3JlLmdldE1vZHVsZU5hbWUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgY29uZmlndXJlZCB2aWV3IG1vZGVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBWaWV3TW9kZVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRWaWV3TW9kZSgpOiBWaWV3TW9kZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlLnJlY29yZFBhbmVsQ29uZmlnLm1vZGUgfHwgJ2VkaXQnIGFzIFZpZXdNb2RlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhbmQgaW5pdCBzdG9yZVxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IFJlY29yZFBhbmVsU3RvcmVcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgY3JlYXRlU3RvcmUoKTogUmVjb3JkUGFuZWxTdG9yZSB7XG4gICAgICAgIGNvbnN0IHN0b3JlID0gdGhpcy5yZWNvcmRQYW5lbFN0b3JlRmFjdG9yeS5jcmVhdGUoKTtcbiAgICAgICAgY29uc3QgYmxhbmtSZWNvcmQgPSB0aGlzLnJlY29yZE1hbmFnZXIuYnVpbGRFbXB0eVJlY29yZCh0aGlzLmdldE1vZHVsZSgpKTtcblxuICAgICAgICBzdG9yZS5zZXRNZXRhZGF0YSh0aGlzLnN0b3JlLnJlY29yZFBhbmVsQ29uZmlnKTtcbiAgICAgICAgc3RvcmUuaW5pdFJlY29yZChibGFua1JlY29yZCwgdGhpcy5nZXRWaWV3TW9kZSgpLCBmYWxzZSk7XG5cbiAgICAgICAgcmV0dXJuIHN0b3JlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhY3Rpb24gYWRhcHRlclxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IEJhc2VSZWNvcmRBY3Rpb25zQWRhcHRlclxuICAgICAqL1xuICAgIHByb3RlY3RlZCBjcmVhdGVBY3Rpb25BZGFwdGVyKHN0b3JlOiBSZWNvcmRQYW5lbFN0b3JlKTogQmFzZVJlY29yZEFjdGlvbnNBZGFwdGVyPFJlY29yZFBhbmVsQWN0aW9uRGF0YT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3Rpb25BZGFwdGVyRmFjdG9yeS5jcmVhdGUoXG4gICAgICAgICAgICBzdG9yZSxcbiAgICAgICAgICAgIHRoaXMuc3RvcmVcbiAgICAgICAgKVxuICAgIH1cbn1cbiJdfQ==