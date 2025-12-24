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
import { isFalse } from 'common';
import { map, take } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../store/list-view/list-view.store";
import * as i2 from "../../../services/message/message.service";
import * as i3 from "../../../services/modals/confirmation-modal.service";
import * as i4 from "../../../services/modals/select-modal.service";
import * as i5 from "../../../services/process/processes/async-action/async-action";
import * as i6 from "../../../store/metadata/metadata.store.service";
class BulkActionsAdapter {
    store;
    message;
    confirmation;
    selectModalService;
    asyncAction;
    metadata;
    constructor(store, message, confirmation, selectModalService, asyncAction, metadata) {
        this.store = store;
        this.message = message;
        this.confirmation = confirmation;
        this.selectModalService = selectModalService;
        this.asyncAction = asyncAction;
        this.metadata = metadata;
    }
    /**
     * Get bulk action
     * @returns {object} Observable<BulkActionsMap>
     */
    getBulkActions() {
        return this.store.metadata$.pipe(map((metadata) => metadata.listView.bulkActions));
    }
    /**
     * Execute bulk actions
     * @param {string} action
     */
    executeBulkAction(action) {
        const selection = this.store.recordList.selection;
        const definition = this.store.metadata.listView.bulkActions[action];
        const actionName = `bulk-${action}`;
        this.message.removeMessages();
        if (isFalse(definition.params.allowAll) && selection.all) {
            let message = this.store.appStrings.LBL_SELECT_ALL_NOT_ALLOWED;
            this.message.addDangerMessage(message);
            return;
        }
        if (definition.params.min && selection.count < definition.params.min) {
            let message = this.store.appStrings.LBL_TOO_FEW_SELECTED;
            message = message.replace('{min}', definition.params.min);
            this.message.addDangerMessage(message);
            return;
        }
        if (definition.params.max && selection.count > definition.params.max) {
            let message = this.store.appStrings.LBL_TOO_MANY_SELECTED;
            message = message.replace('{max}', definition.params.max);
            this.message.addDangerMessage(message);
            return;
        }
        const displayedFields = [];
        this.store.metadata.listView.fields.forEach(value => {
            displayedFields.push(value.name);
        });
        const data = {
            action: actionName,
            module: this.store.getModuleName(),
            criteria: null,
            sort: null,
            ids: null,
            fields: displayedFields
        };
        if (selection.all && selection.count > this.store.recordList.records.length) {
            data.criteria = this.store.recordList.criteria;
            data.sort = this.store.recordList.sort;
        }
        if (selection.all && selection.count <= this.store.recordList.records.length) {
            data.ids = [];
            this.store.recordList.records.forEach(record => {
                data.ids.push(record.id);
            });
        }
        if (!selection.all) {
            data.ids = Object.keys(selection.selected);
        }
        const params = (definition && definition.params) || {};
        const displayConfirmation = params.displayConfirmation || false;
        const confirmationLabel = params.confirmationLabel || '';
        const selectModal = definition.params && definition.params.selectModal;
        const selectModule = selectModal && selectModal.module;
        const recordPanel = definition.params && definition.params.recordPanel;
        if (recordPanel) {
            this.store.openRecordPanel(recordPanel);
            return;
        }
        if (displayConfirmation) {
            this.confirmation.showModal(confirmationLabel, () => {
                if (!selectModule) {
                    this.runBulkAction(actionName, data);
                    return;
                }
                this.showSelectModal(selectModal.module, actionName, data);
            });
            return;
        }
        if (!selectModule) {
            this.runBulkAction(actionName, data);
            return;
        }
        this.showSelectModal(selectModal.module, actionName, data);
    }
    /**
     * Run async buk action
     *
     * @returns void
     * @param {string} selectModule: module for which records are listed in Select Modal/Popup
     * @param {string} asyncAction: bulk action name
     * @param {AsyncActionInput} asyncData: data passed to the async process
     */
    showSelectModal(selectModule, asyncAction, asyncData) {
        this.selectModalService.showSelectModal(selectModule, (modalRecord) => {
            if (modalRecord) {
                const { fields, formGroup, ...baseRecord } = modalRecord;
                asyncData.modalRecord = baseRecord;
            }
            this.runBulkAction(asyncAction, asyncData);
        });
    }
    /**
     * Run async buk action
     *
     * @returns void
     * @param {string} asyncAction: bulk action name
     * @param {AsyncActionInput} asyncData: data passed to the async process
     */
    runBulkAction(asyncAction, asyncData) {
        this.asyncAction.run(asyncAction, asyncData).subscribe((process) => {
            this.handleProcessResult(process);
        });
    }
    /**
     * Run this function once the process is executed
     *
     * @returns void
     * @param {Process} process: data returned by the process once the process is executed
     */
    handleProcessResult(process) {
        if (process.data && process.data.reload) {
            this.store.recordList.clearSelection();
            this.store.load(false).pipe(take(1)).subscribe();
        }
        if (process.data && process.data.dataUpdated) {
            this.store.triggerDataUpdate();
        }
        this.reloadMetadata(this.store.getModuleName(), process);
    }
    /**
     * Reload the metadata for the module
     * @param moduleName
     * @param process
     * @protected
     */
    reloadMetadata(moduleName, process) {
        const typesToLoad = [];
        if (this.shouldReloadRecentlyViewed(process)) {
            typesToLoad.push(this.metadata.typeKeys.recentlyViewed);
        }
        if (this.shouldReloadFavorites(process)) {
            typesToLoad.push(this.metadata.typeKeys.favorites);
        }
        if (typesToLoad && typesToLoad.length) {
            this.metadata.reloadModuleMetadata(moduleName, typesToLoad, false).pipe(take(1)).subscribe();
        }
    }
    /**
     * Should reload page
     * @param process
     */
    shouldReloadRecentlyViewed(process) {
        return !!(process.data && process.data.reloadRecentlyViewed);
    }
    /**
     * Should reload page
     * @param process
     */
    shouldReloadFavorites(process) {
        return !!(process.data && process.data.reloadFavorites);
    }
    static ɵfac = function BulkActionsAdapter_Factory(t) { return new (t || BulkActionsAdapter)(i0.ɵɵinject(i1.ListViewStore), i0.ɵɵinject(i2.MessageService), i0.ɵɵinject(i3.ConfirmationModalService), i0.ɵɵinject(i4.SelectModalService), i0.ɵɵinject(i5.AsyncActionService), i0.ɵɵinject(i6.MetadataStore)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: BulkActionsAdapter, factory: BulkActionsAdapter.ɵfac });
}
export { BulkActionsAdapter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BulkActionsAdapter, [{
        type: Injectable
    }], function () { return [{ type: i1.ListViewStore }, { type: i2.MessageService }, { type: i3.ConfirmationModalService }, { type: i4.SelectModalService }, { type: i5.AsyncActionService }, { type: i6.MetadataStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVsay1hY3Rpb25zLmFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvbGlzdC9hZGFwdGVycy9idWxrLWFjdGlvbnMuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQWlCLE9BQU8sRUFBUyxNQUFNLFFBQVEsQ0FBQztBQUV2RCxPQUFPLEVBQUMsR0FBRyxFQUFFLElBQUksRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7OztBQVV6QyxNQUNhLGtCQUFrQjtJQUdiO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQU5kLFlBQ2MsS0FBb0IsRUFDcEIsT0FBdUIsRUFDdkIsWUFBc0MsRUFDdEMsa0JBQXNDLEVBQ3RDLFdBQStCLEVBQy9CLFFBQXVCO1FBTHZCLFVBQUssR0FBTCxLQUFLLENBQWU7UUFDcEIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsaUJBQVksR0FBWixZQUFZLENBQTBCO1FBQ3RDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBQy9CLGFBQVEsR0FBUixRQUFRLENBQWU7SUFFckMsQ0FBQztJQUVEOzs7T0FHRztJQUNJLGNBQWM7UUFDakIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQzVCLEdBQUcsQ0FBQyxDQUFDLFFBQWtCLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQzdELENBQUM7SUFDTixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksaUJBQWlCLENBQUMsTUFBYztRQUNuQyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7UUFDbEQsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwRSxNQUFNLFVBQVUsR0FBRyxRQUFRLE1BQU0sRUFBRSxDQUFDO1FBRXBDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFOUIsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ3RELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDO1lBQy9ELElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdkMsT0FBTztTQUNWO1FBRUQsSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxTQUFTLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFO1lBQ2xFLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDO1lBQ3pELE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzFELElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdkMsT0FBTztTQUNWO1FBRUQsSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxTQUFTLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFO1lBQ2xFLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDO1lBQzFELE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzFELElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdkMsT0FBTztTQUNWO1FBRUQsTUFBTSxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBRTNCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2hELGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxJQUFJLEdBQUc7WUFDVCxNQUFNLEVBQUUsVUFBVTtZQUNsQixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUU7WUFDbEMsUUFBUSxFQUFFLElBQUk7WUFDZCxJQUFJLEVBQUUsSUFBSTtZQUNWLEdBQUcsRUFBRSxJQUFJO1lBQ1QsTUFBTSxFQUFFLGVBQWU7U0FDTixDQUFDO1FBRXRCLElBQUksU0FBUyxDQUFDLEdBQUcsSUFBSSxTQUFTLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDekUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7WUFDL0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7U0FDMUM7UUFFRCxJQUFJLFNBQVMsQ0FBQyxHQUFHLElBQUksU0FBUyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQzFFLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1lBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDM0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzdCLENBQUMsQ0FBQyxDQUFDO1NBQ047UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNoQixJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzlDO1FBRUQsTUFBTSxNQUFNLEdBQUcsQ0FBQyxVQUFVLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQTRCLENBQUM7UUFDakYsTUFBTSxtQkFBbUIsR0FBRyxNQUFNLENBQUMsbUJBQW1CLElBQUksS0FBSyxDQUFDO1FBQ2hFLE1BQU0saUJBQWlCLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixJQUFJLEVBQUUsQ0FBQztRQUN6RCxNQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMsTUFBTSxJQUFJLFVBQVUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3ZFLE1BQU0sWUFBWSxHQUFHLFdBQVcsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDO1FBQ3ZELE1BQU0sV0FBVyxHQUFHLFVBQVUsQ0FBQyxNQUFNLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFFdkUsSUFBSSxXQUFXLEVBQUU7WUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN4QyxPQUFPO1NBQ1Y7UUFHRCxJQUFJLG1CQUFtQixFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLGlCQUFpQixFQUFFLEdBQUcsRUFBRTtnQkFDaEQsSUFBSSxDQUFDLFlBQVksRUFBRTtvQkFDZixJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDckMsT0FBTztpQkFDVjtnQkFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQy9ELENBQUMsQ0FBQyxDQUFDO1lBRUgsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNmLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3JDLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFL0QsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSSxlQUFlLENBQUMsWUFBb0IsRUFBRSxXQUFtQixFQUFFLFNBQTJCO1FBRXpGLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUMsV0FBbUIsRUFBRSxFQUFFO1lBQzFFLElBQUksV0FBVyxFQUFFO2dCQUNiLE1BQU0sRUFBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLEdBQUcsVUFBVSxFQUFDLEdBQUcsV0FBVyxDQUFDO2dCQUN2RCxTQUFTLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQzthQUN0QztZQUNELElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLGFBQWEsQ0FBQyxXQUFtQixFQUFFLFNBQTJCO1FBRWpFLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFnQixFQUFFLEVBQUU7WUFDeEUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksbUJBQW1CLENBQUMsT0FBZ0I7UUFFdkMsSUFBSSxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNwRDtRQUVELElBQUksT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDbEM7UUFFRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUdEOzs7OztPQUtHO0lBQ08sY0FBYyxDQUFDLFVBQWtCLEVBQUUsT0FBZ0I7UUFDekQsTUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBRXZCLElBQUksSUFBSSxDQUFDLDBCQUEwQixDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDM0Q7UUFFRCxJQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNyQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3REO1FBRUQsSUFBSSxXQUFXLElBQUksV0FBVyxDQUFDLE1BQU0sRUFBRTtZQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsRUFBRSxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ2hHO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNPLDBCQUEwQixDQUFDLE9BQWdCO1FBQ2pELE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVEOzs7T0FHRztJQUNPLHFCQUFxQixDQUFDLE9BQWdCO1FBQzVDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzVELENBQUM7NEVBL01RLGtCQUFrQjtnRUFBbEIsa0JBQWtCLFdBQWxCLGtCQUFrQjs7U0FBbEIsa0JBQWtCO3VGQUFsQixrQkFBa0I7Y0FEOUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QnVsa0FjdGlvbnNNYXAsIGlzRmFsc2UsIFJlY29yZH0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcCwgdGFrZX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtBc3luY0FjdGlvbklucHV0LCBBc3luY0FjdGlvblNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3Byb2Nlc3MvcHJvY2Vzc2VzL2FzeW5jLWFjdGlvbi9hc3luYy1hY3Rpb24nO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbWVzc2FnZS9tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHtQcm9jZXNzfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9wcm9jZXNzL3Byb2Nlc3Muc2VydmljZSc7XG5pbXBvcnQge0xpc3RWaWV3U3RvcmV9IGZyb20gJy4uL3N0b3JlL2xpc3Qtdmlldy9saXN0LXZpZXcuc3RvcmUnO1xuaW1wb3J0IHtDb25maXJtYXRpb25Nb2RhbFNlcnZpY2V9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL21vZGFscy9jb25maXJtYXRpb24tbW9kYWwuc2VydmljZSc7XG5pbXBvcnQge0J1bGtBY3Rpb25EYXRhU291cmNlfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2J1bGstYWN0aW9uLW1lbnUvYnVsay1hY3Rpb24tbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHtNZXRhZGF0YSwgTWV0YWRhdGFTdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvbWV0YWRhdGEvbWV0YWRhdGEuc3RvcmUuc2VydmljZSc7XG5pbXBvcnQge1NlbGVjdE1vZGFsU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvbW9kYWxzL3NlbGVjdC1tb2RhbC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJ1bGtBY3Rpb25zQWRhcHRlciBpbXBsZW1lbnRzIEJ1bGtBY3Rpb25EYXRhU291cmNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgc3RvcmU6IExpc3RWaWV3U3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBtZXNzYWdlOiBNZXNzYWdlU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGNvbmZpcm1hdGlvbjogQ29uZmlybWF0aW9uTW9kYWxTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgc2VsZWN0TW9kYWxTZXJ2aWNlOiBTZWxlY3RNb2RhbFNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBhc3luY0FjdGlvbjogQXN5bmNBY3Rpb25TZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgbWV0YWRhdGE6IE1ldGFkYXRhU3RvcmVcbiAgICApIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYnVsayBhY3Rpb25cbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSBPYnNlcnZhYmxlPEJ1bGtBY3Rpb25zTWFwPlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRCdWxrQWN0aW9ucygpOiBPYnNlcnZhYmxlPEJ1bGtBY3Rpb25zTWFwPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlLm1ldGFkYXRhJC5waXBlKFxuICAgICAgICAgICAgbWFwKChtZXRhZGF0YTogTWV0YWRhdGEpID0+IG1ldGFkYXRhLmxpc3RWaWV3LmJ1bGtBY3Rpb25zKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4ZWN1dGUgYnVsayBhY3Rpb25zXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvblxuICAgICAqL1xuICAgIHB1YmxpYyBleGVjdXRlQnVsa0FjdGlvbihhY3Rpb246IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLnN0b3JlLnJlY29yZExpc3Quc2VsZWN0aW9uO1xuICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gdGhpcy5zdG9yZS5tZXRhZGF0YS5saXN0Vmlldy5idWxrQWN0aW9uc1thY3Rpb25dO1xuICAgICAgICBjb25zdCBhY3Rpb25OYW1lID0gYGJ1bGstJHthY3Rpb259YDtcblxuICAgICAgICB0aGlzLm1lc3NhZ2UucmVtb3ZlTWVzc2FnZXMoKTtcblxuICAgICAgICBpZiAoaXNGYWxzZShkZWZpbml0aW9uLnBhcmFtcy5hbGxvd0FsbCkgJiYgc2VsZWN0aW9uLmFsbCkge1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSB0aGlzLnN0b3JlLmFwcFN0cmluZ3MuTEJMX1NFTEVDVF9BTExfTk9UX0FMTE9XRUQ7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UuYWRkRGFuZ2VyTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkZWZpbml0aW9uLnBhcmFtcy5taW4gJiYgc2VsZWN0aW9uLmNvdW50IDwgZGVmaW5pdGlvbi5wYXJhbXMubWluKSB7XG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9IHRoaXMuc3RvcmUuYXBwU3RyaW5ncy5MQkxfVE9PX0ZFV19TRUxFQ1RFRDtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoJ3ttaW59JywgZGVmaW5pdGlvbi5wYXJhbXMubWluKTtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZS5hZGREYW5nZXJNZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRlZmluaXRpb24ucGFyYW1zLm1heCAmJiBzZWxlY3Rpb24uY291bnQgPiBkZWZpbml0aW9uLnBhcmFtcy5tYXgpIHtcbiAgICAgICAgICAgIGxldCBtZXNzYWdlID0gdGhpcy5zdG9yZS5hcHBTdHJpbmdzLkxCTF9UT09fTUFOWV9TRUxFQ1RFRDtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoJ3ttYXh9JywgZGVmaW5pdGlvbi5wYXJhbXMubWF4KTtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZS5hZGREYW5nZXJNZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGlzcGxheWVkRmllbGRzID0gW107XG5cbiAgICAgICAgdGhpcy5zdG9yZS5tZXRhZGF0YS5saXN0Vmlldy5maWVsZHMuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5ZWRGaWVsZHMucHVzaCh2YWx1ZS5uYW1lKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1vZHVsZTogdGhpcy5zdG9yZS5nZXRNb2R1bGVOYW1lKCksXG4gICAgICAgICAgICBjcml0ZXJpYTogbnVsbCxcbiAgICAgICAgICAgIHNvcnQ6IG51bGwsXG4gICAgICAgICAgICBpZHM6IG51bGwsXG4gICAgICAgICAgICBmaWVsZHM6IGRpc3BsYXllZEZpZWxkc1xuICAgICAgICB9IGFzIEFzeW5jQWN0aW9uSW5wdXQ7XG5cbiAgICAgICAgaWYgKHNlbGVjdGlvbi5hbGwgJiYgc2VsZWN0aW9uLmNvdW50ID4gdGhpcy5zdG9yZS5yZWNvcmRMaXN0LnJlY29yZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBkYXRhLmNyaXRlcmlhID0gdGhpcy5zdG9yZS5yZWNvcmRMaXN0LmNyaXRlcmlhO1xuICAgICAgICAgICAgZGF0YS5zb3J0ID0gdGhpcy5zdG9yZS5yZWNvcmRMaXN0LnNvcnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZWN0aW9uLmFsbCAmJiBzZWxlY3Rpb24uY291bnQgPD0gdGhpcy5zdG9yZS5yZWNvcmRMaXN0LnJlY29yZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBkYXRhLmlkcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5zdG9yZS5yZWNvcmRMaXN0LnJlY29yZHMuZm9yRWFjaChyZWNvcmQgPT4ge1xuICAgICAgICAgICAgICAgIGRhdGEuaWRzLnB1c2gocmVjb3JkLmlkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzZWxlY3Rpb24uYWxsKSB7XG4gICAgICAgICAgICBkYXRhLmlkcyA9IE9iamVjdC5rZXlzKHNlbGVjdGlvbi5zZWxlY3RlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXJhbXMgPSAoZGVmaW5pdGlvbiAmJiBkZWZpbml0aW9uLnBhcmFtcykgfHwge30gYXMgeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbiAgICAgICAgY29uc3QgZGlzcGxheUNvbmZpcm1hdGlvbiA9IHBhcmFtcy5kaXNwbGF5Q29uZmlybWF0aW9uIHx8IGZhbHNlO1xuICAgICAgICBjb25zdCBjb25maXJtYXRpb25MYWJlbCA9IHBhcmFtcy5jb25maXJtYXRpb25MYWJlbCB8fCAnJztcbiAgICAgICAgY29uc3Qgc2VsZWN0TW9kYWwgPSBkZWZpbml0aW9uLnBhcmFtcyAmJiBkZWZpbml0aW9uLnBhcmFtcy5zZWxlY3RNb2RhbDtcbiAgICAgICAgY29uc3Qgc2VsZWN0TW9kdWxlID0gc2VsZWN0TW9kYWwgJiYgc2VsZWN0TW9kYWwubW9kdWxlO1xuICAgICAgICBjb25zdCByZWNvcmRQYW5lbCA9IGRlZmluaXRpb24ucGFyYW1zICYmIGRlZmluaXRpb24ucGFyYW1zLnJlY29yZFBhbmVsO1xuXG4gICAgICAgIGlmIChyZWNvcmRQYW5lbCkge1xuICAgICAgICAgICAgdGhpcy5zdG9yZS5vcGVuUmVjb3JkUGFuZWwocmVjb3JkUGFuZWwpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoZGlzcGxheUNvbmZpcm1hdGlvbikge1xuICAgICAgICAgICAgdGhpcy5jb25maXJtYXRpb24uc2hvd01vZGFsKGNvbmZpcm1hdGlvbkxhYmVsLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFzZWxlY3RNb2R1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ydW5CdWxrQWN0aW9uKGFjdGlvbk5hbWUsIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1NlbGVjdE1vZGFsKHNlbGVjdE1vZGFsLm1vZHVsZSwgYWN0aW9uTmFtZSwgZGF0YSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzZWxlY3RNb2R1bGUpIHtcbiAgICAgICAgICAgIHRoaXMucnVuQnVsa0FjdGlvbihhY3Rpb25OYW1lLCBkYXRhKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNob3dTZWxlY3RNb2RhbChzZWxlY3RNb2RhbC5tb2R1bGUsIGFjdGlvbk5hbWUsIGRhdGEpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUnVuIGFzeW5jIGJ1ayBhY3Rpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0TW9kdWxlOiBtb2R1bGUgZm9yIHdoaWNoIHJlY29yZHMgYXJlIGxpc3RlZCBpbiBTZWxlY3QgTW9kYWwvUG9wdXBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXN5bmNBY3Rpb246IGJ1bGsgYWN0aW9uIG5hbWVcbiAgICAgKiBAcGFyYW0ge0FzeW5jQWN0aW9uSW5wdXR9IGFzeW5jRGF0YTogZGF0YSBwYXNzZWQgdG8gdGhlIGFzeW5jIHByb2Nlc3NcbiAgICAgKi9cbiAgICBwdWJsaWMgc2hvd1NlbGVjdE1vZGFsKHNlbGVjdE1vZHVsZTogc3RyaW5nLCBhc3luY0FjdGlvbjogc3RyaW5nLCBhc3luY0RhdGE6IEFzeW5jQWN0aW9uSW5wdXQpIHtcblxuICAgICAgICB0aGlzLnNlbGVjdE1vZGFsU2VydmljZS5zaG93U2VsZWN0TW9kYWwoc2VsZWN0TW9kdWxlLCAobW9kYWxSZWNvcmQ6IFJlY29yZCkgPT4ge1xuICAgICAgICAgICAgaWYgKG1vZGFsUmVjb3JkKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qge2ZpZWxkcywgZm9ybUdyb3VwLCAuLi5iYXNlUmVjb3JkfSA9IG1vZGFsUmVjb3JkO1xuICAgICAgICAgICAgICAgIGFzeW5jRGF0YS5tb2RhbFJlY29yZCA9IGJhc2VSZWNvcmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJ1bkJ1bGtBY3Rpb24oYXN5bmNBY3Rpb24sIGFzeW5jRGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJ1biBhc3luYyBidWsgYWN0aW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFzeW5jQWN0aW9uOiBidWxrIGFjdGlvbiBuYW1lXG4gICAgICogQHBhcmFtIHtBc3luY0FjdGlvbklucHV0fSBhc3luY0RhdGE6IGRhdGEgcGFzc2VkIHRvIHRoZSBhc3luYyBwcm9jZXNzXG4gICAgICovXG4gICAgcHVibGljIHJ1bkJ1bGtBY3Rpb24oYXN5bmNBY3Rpb246IHN0cmluZywgYXN5bmNEYXRhOiBBc3luY0FjdGlvbklucHV0KTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy5hc3luY0FjdGlvbi5ydW4oYXN5bmNBY3Rpb24sIGFzeW5jRGF0YSkuc3Vic2NyaWJlKChwcm9jZXNzOiBQcm9jZXNzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVByb2Nlc3NSZXN1bHQocHJvY2Vzcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJ1biB0aGlzIGZ1bmN0aW9uIG9uY2UgdGhlIHByb2Nlc3MgaXMgZXhlY3V0ZWRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKiBAcGFyYW0ge1Byb2Nlc3N9IHByb2Nlc3M6IGRhdGEgcmV0dXJuZWQgYnkgdGhlIHByb2Nlc3Mgb25jZSB0aGUgcHJvY2VzcyBpcyBleGVjdXRlZFxuICAgICAqL1xuICAgIHB1YmxpYyBoYW5kbGVQcm9jZXNzUmVzdWx0KHByb2Nlc3M6IFByb2Nlc3MpOiB2b2lkIHtcblxuICAgICAgICBpZiAocHJvY2Vzcy5kYXRhICYmIHByb2Nlc3MuZGF0YS5yZWxvYWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmUucmVjb3JkTGlzdC5jbGVhclNlbGVjdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5zdG9yZS5sb2FkKGZhbHNlKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZGF0YSAmJiBwcm9jZXNzLmRhdGEuZGF0YVVwZGF0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmUudHJpZ2dlckRhdGFVcGRhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVsb2FkTWV0YWRhdGEodGhpcy5zdG9yZS5nZXRNb2R1bGVOYW1lKCksIHByb2Nlc3MpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUmVsb2FkIHRoZSBtZXRhZGF0YSBmb3IgdGhlIG1vZHVsZVxuICAgICAqIEBwYXJhbSBtb2R1bGVOYW1lXG4gICAgICogQHBhcmFtIHByb2Nlc3NcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHJlbG9hZE1ldGFkYXRhKG1vZHVsZU5hbWU6IHN0cmluZywgcHJvY2VzczogUHJvY2Vzcyk6IHZvaWQge1xuICAgICAgICBjb25zdCB0eXBlc1RvTG9hZCA9IFtdO1xuXG4gICAgICAgIGlmICh0aGlzLnNob3VsZFJlbG9hZFJlY2VudGx5Vmlld2VkKHByb2Nlc3MpKSB7XG4gICAgICAgICAgICB0eXBlc1RvTG9hZC5wdXNoKHRoaXMubWV0YWRhdGEudHlwZUtleXMucmVjZW50bHlWaWV3ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkUmVsb2FkRmF2b3JpdGVzKHByb2Nlc3MpKSB7XG4gICAgICAgICAgICB0eXBlc1RvTG9hZC5wdXNoKHRoaXMubWV0YWRhdGEudHlwZUtleXMuZmF2b3JpdGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlc1RvTG9hZCAmJiB0eXBlc1RvTG9hZC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMubWV0YWRhdGEucmVsb2FkTW9kdWxlTWV0YWRhdGEobW9kdWxlTmFtZSwgdHlwZXNUb0xvYWQsIGZhbHNlKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvdWxkIHJlbG9hZCBwYWdlXG4gICAgICogQHBhcmFtIHByb2Nlc3NcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgc2hvdWxkUmVsb2FkUmVjZW50bHlWaWV3ZWQocHJvY2VzczogUHJvY2Vzcyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gISEocHJvY2Vzcy5kYXRhICYmIHByb2Nlc3MuZGF0YS5yZWxvYWRSZWNlbnRseVZpZXdlZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvdWxkIHJlbG9hZCBwYWdlXG4gICAgICogQHBhcmFtIHByb2Nlc3NcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgc2hvdWxkUmVsb2FkRmF2b3JpdGVzKHByb2Nlc3M6IFByb2Nlc3MpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICEhKHByb2Nlc3MuZGF0YSAmJiBwcm9jZXNzLmRhdGEucmVsb2FkRmF2b3JpdGVzKTtcbiAgICB9XG59XG4iXX0=