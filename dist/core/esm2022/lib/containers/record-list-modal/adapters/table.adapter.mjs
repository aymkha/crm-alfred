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
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
export class ModalRecordListTableAdapter {
    systemConfigs;
    preferences;
    constructor(systemConfigs, preferences) {
        this.systemConfigs = systemConfigs;
        this.preferences = preferences;
    }
    /**
     * Get table config
     *
     * @param {object} store to use
     * @param {boolean} multiSelect
     * @returns {object} TableConfig
     */
    getTable(store, multiSelect = false) {
        const config = {
            showHeader: true,
            showFooter: true,
            klass: 'light-table',
            module: store.recordList.getModule(),
            columns: store.columns$.pipe(map(columns => this.mapColumns(store, columns))),
            sort$: store.recordList.sort$,
            maxColumns$: of(5),
            loading$: store.recordList.loading$,
            dataSource: store.recordList,
            pagination: store.recordList,
            toggleRecordSelection: (id) => {
                store.recordList.toggleSelection(id);
            },
            updateSorting: (orderBy, sortOrder) => {
                store.recordList.updateSorting(orderBy, sortOrder);
                store.saveCurrentSort();
            },
            maxListHeight: this.preferences.getUserPreference('record_modal_max_height') ?? this.systemConfigs.getConfigValue('record_modal_max_height'),
            paginationType: this.preferences.getUserPreference('record_modal_pagination_type') ?? this.systemConfigs.getConfigValue('record_modal_pagination_type'),
            loadMore: () => {
                const jump = this.preferences.getUserPreference('list_max_entries_per_modal') ?? this.systemConfigs.getConfigValue('list_max_entries_per_modal');
                const pagination = store.recordList.getPagination();
                const currentPageSize = pagination.pageSize || 0;
                const newPageSize = Number(currentPageSize) + Number(jump);
                store.recordList.setPageSize(newPageSize);
                store.recordList.updatePagination(pagination.current);
            },
            allLoaded: () => {
                const pagination = store.recordList.getPagination();
                if (!pagination) {
                    return false;
                }
                if (Number(pagination.pageLast) >= Number(pagination.total)) {
                    return true;
                }
                return Number(pagination.pageSize) >= Number(pagination.total);
            }
        };
        if (multiSelect) {
            config.selection$ = store.recordList.selection$;
            config.selectedCount$ = store.recordList.selectedCount$;
            config.selectedStatus$ = store.recordList.selectedStatus$;
        }
        return config;
    }
    /**
     * Parse and override column definitions
     *
     * @param {object} store to use
     * @param {[]} columns to map
     * @returns {[]} ColumnDefinition[]
     */
    mapColumns(store, columns) {
        const mappedColumns = [];
        columns.forEach(column => {
            const mapped = { ...column };
            const metadata = column.metadata || {};
            mapped.metadata = { ...metadata };
            this.disableRelateFieldsLink(mapped);
            this.addLinkSelectHandler(store, mapped);
            mappedColumns.push(mapped);
        });
        return mappedColumns;
    }
    /**
     * Disable link for relate fields
     *
     * @param {object} definition to update
     */
    disableRelateFieldsLink(definition) {
        if (definition.type !== 'relate') {
            return;
        }
        definition.link = false;
        definition.metadata.link = false;
    }
    /**
     * Add onClick handler for link fields
     *
     * @param {object} store to use
     * @param {object} definition to update
     */
    addLinkSelectHandler(store, definition) {
        if (!definition.link) {
            return;
        }
        definition.metadata.onClick = (field, record) => {
            store.recordList.clearSelection();
            store.recordList.toggleSelection(record.id);
            store.emitLinkClicked();
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBwL2NvcmUvc3JjL2xpYi9jb250YWluZXJzL3JlY29yZC1saXN0LW1vZGFsL2FkYXB0ZXJzL3RhYmxlLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFBQyxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFFeEIsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBT25DLE1BQU0sT0FBTywyQkFBMkI7SUFHdEI7SUFDQTtJQUZkLFlBQ2MsYUFBZ0MsRUFDaEMsV0FBZ0M7UUFEaEMsa0JBQWEsR0FBYixhQUFhLENBQW1CO1FBQ2hDLGdCQUFXLEdBQVgsV0FBVyxDQUFxQjtJQUU5QyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsUUFBUSxDQUFDLEtBQTJCLEVBQUUsY0FBdUIsS0FBSztRQUM5RCxNQUFNLE1BQU0sR0FBRztZQUNYLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLEtBQUssRUFBRSxhQUFhO1lBQ3BCLE1BQU0sRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRTtZQUVwQyxPQUFPLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUM3RSxLQUFLLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLO1lBQzdCLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLFFBQVEsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFFBQVE7WUFFbkMsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLFVB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dUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBRXpDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLGFBQWEsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNPLHVCQUF1QixDQUFDLFVBQTRCO1FBQzFELElBQUksVUFBVSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDOUIsT0FBTztTQUNWO1FBQ0QsVUFBVSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDeEIsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNPLG9CQUFvQixDQUFDLEtBQTJCLEVBQUUsVUFBNEI7UUFDcEYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUU7WUFDbEIsT0FBTztTQUNWO1FBRUQsVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxLQUFZLEVBQUUsTUFBYyxFQUFRLEVBQUU7WUFDakUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNsQyxLQUFLLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDNUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQztJQUNOLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtvZn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0NvbHVtbkRlZmluaXRpb24sIEZpZWxkLCBSZWNvcmQsIFNvcnREaXJlY3Rpb259IGZyb20gJ2NvbW1vbic7XG5pbXBvcnQge21hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtSZWNvcmRMaXN0TW9kYWxUYWJsZUFkYXB0ZXJJbnRlcmZhY2V9IGZyb20gJy4vYWRhcHRlci5tb2RlbCc7XG5pbXBvcnQge1JlY29yZExpc3RNb2RhbFN0b3JlfSBmcm9tICcuLi9zdG9yZS9yZWNvcmQtbGlzdC1tb2RhbC9yZWNvcmQtbGlzdC1tb2RhbC5zdG9yZSc7XG5pbXBvcnQge1RhYmxlQ29uZmlnfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLm1vZGVsJztcbmltcG9ydCB7VXNlclByZWZlcmVuY2VTdG9yZX0gZnJvbSBcIi4uLy4uLy4uL3N0b3JlL3VzZXItcHJlZmVyZW5jZS91c2VyLXByZWZlcmVuY2Uuc3RvcmVcIjtcbmltcG9ydCB7U3lzdGVtQ29uZmlnU3RvcmV9IGZyb20gXCIuLi8uLi8uLi9zdG9yZS9zeXN0ZW0tY29uZmlnL3N5c3RlbS1jb25maWcuc3RvcmVcIjtcblxuZXhwb3J0IGNsYXNzIE1vZGFsUmVjb3JkTGlzdFRhYmxlQWRhcHRlciBpbXBsZW1lbnRzIFJlY29yZExpc3RNb2RhbFRhYmxlQWRhcHRlckludGVyZmFjZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIHN5c3RlbUNvbmZpZ3M6IFN5c3RlbUNvbmZpZ1N0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgcHJlZmVyZW5jZXM6IFVzZXJQcmVmZXJlbmNlU3RvcmVcbiAgICApe1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0YWJsZSBjb25maWdcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzdG9yZSB0byB1c2VcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG11bHRpU2VsZWN0XG4gICAgICogQHJldHVybnMge29iamVjdH0gVGFibGVDb25maWdcbiAgICAgKi9cbiAgICBnZXRUYWJsZShzdG9yZTogUmVjb3JkTGlzdE1vZGFsU3RvcmUsIG11bHRpU2VsZWN0OiBib29sZWFuID0gZmFsc2UpOiBUYWJsZUNvbmZpZyB7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgIHNob3dIZWFkZXI6IHRydWUsXG4gICAgICAgICAgICBzaG93Rm9vdGVyOiB0cnVlLFxuICAgICAgICAgICAga2xhc3M6ICdsaWdodC10YWJsZScsXG4gICAgICAgICAgICBtb2R1bGU6IHN0b3JlLnJlY29yZExpc3QuZ2V0TW9kdWxlKCksXG5cbiAgICAgICAgICAgIGNvbHVtbnM6IHN0b3JlLmNvbHVtbnMkLnBpcGUobWFwKGNvbHVtbnMgPT4gdGhpcy5tYXBDb2x1bW5zKHN0b3JlLCBjb2x1bW5zKSkpLFxuICAgICAgICAgICAgc29ydCQ6IHN0b3JlLnJlY29yZExpc3Quc29ydCQsXG4gICAgICAgICAgICBtYXhDb2x1bW5zJDogb2YoNSksXG4gICAgICAgICAgICBsb2FkaW5nJDogc3RvcmUucmVjb3JkTGlzdC5sb2FkaW5nJCxcblxuICAgICAgICAgICAgZGF0YVNvdXJjZTogc3RvcmUucmVjb3JkTGlzdCxcbiAgICAgICAgICAgIHBhZ2luYXRpb246IHN0b3JlLnJlY29yZExpc3QsXG5cbiAgICAgICAgICAgIHRvZ2dsZVJlY29yZFNlbGVjdGlvbjogKGlkOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICBzdG9yZS5yZWNvcmRMaXN0LnRvZ2dsZVNlbGVjdGlvbihpZCk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB1cGRhdGVTb3J0aW5nOiAob3JkZXJCeTogc3RyaW5nLCBzb3J0T3JkZXI6IFNvcnREaXJlY3Rpb24pOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICBzdG9yZS5yZWNvcmRMaXN0LnVwZGF0ZVNvcnRpbmcob3JkZXJCeSwgc29ydE9yZGVyKTtcbiAgICAgICAgICAgICAgICBzdG9yZS5zYXZlQ3VycmVudFNvcnQoKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG1heExpc3RIZWlnaHQ6IHRoaXMucHJlZmVyZW5jZXMuZ2V0VXNlclByZWZlcmVuY2UoJ3JlY29yZF9tb2RhbF9tYXhfaGVpZ2h0JykgPz8gdGhpcy5zeXN0ZW1Db25maWdzLmdldENvbmZpZ1ZhbHVlKCdyZWNvcmRfbW9kYWxfbWF4X2hlaWdodCcpLFxuXG4gICAgICAgICAgICBwYWdpbmF0aW9uVHlwZTogdGhpcy5wcmVmZXJlbmNlcy5nZXRVc2VyUHJlZmVyZW5jZSgncmVjb3JkX21vZGFsX3BhZ2luYXRpb25fdHlwZScpID8/IHRoaXMuc3lzdGVtQ29uZmlncy5nZXRDb25maWdWYWx1ZSgncmVjb3JkX21vZGFsX3BhZ2luYXRpb25fdHlwZScpLFxuXG4gICAgICAgICAgICBsb2FkTW9yZTogKCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGp1bXAgPSB0aGlzLnByZWZlcmVuY2VzLmdldFVzZXJQcmVmZXJlbmNlKCdsaXN0X21heF9lbnRyaWVzX3Blcl9tb2RhbCcpID8/IHRoaXMuc3lzdGVtQ29uZmlncy5nZXRDb25maWdWYWx1ZSgnbGlzdF9tYXhfZW50cmllc19wZXJfbW9kYWwnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwYWdpbmF0aW9uID0gc3RvcmUucmVjb3JkTGlzdC5nZXRQYWdpbmF0aW9uKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFBhZ2VTaXplID0gcGFnaW5hdGlvbi5wYWdlU2l6ZSB8fCAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1BhZ2VTaXplID0gTnVtYmVyKGN1cnJlbnRQYWdlU2l6ZSkgKyBOdW1iZXIoanVtcCk7XG5cblxuICAgICAgICAgICAgICAgIHN0b3JlLnJlY29yZExpc3Quc2V0UGFnZVNpemUobmV3UGFnZVNpemUpO1xuICAgICAgICAgICAgICAgIHN0b3JlLnJlY29yZExpc3QudXBkYXRlUGFnaW5hdGlvbihwYWdpbmF0aW9uLmN1cnJlbnQpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgYWxsTG9hZGVkOiAoKTogYm9vbGVhbiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFnaW5hdGlvbiA9IHN0b3JlLnJlY29yZExpc3QuZ2V0UGFnaW5hdGlvbigpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFwYWdpbmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKHBhZ2luYXRpb24ucGFnZUxhc3QpID49IE51bWJlcihwYWdpbmF0aW9uLnRvdGFsKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyKHBhZ2luYXRpb24ucGFnZVNpemUpID49IE51bWJlcihwYWdpbmF0aW9uLnRvdGFsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGFzIFRhYmxlQ29uZmlnO1xuXG5cbiAgICAgICAgaWYgKG11bHRpU2VsZWN0KXtcbiAgICAgICAgICAgIGNvbmZpZy5zZWxlY3Rpb24kID0gc3RvcmUucmVjb3JkTGlzdC5zZWxlY3Rpb24kO1xuICAgICAgICAgICAgY29uZmlnLnNlbGVjdGVkQ291bnQkID0gc3RvcmUucmVjb3JkTGlzdC5zZWxlY3RlZENvdW50JDtcbiAgICAgICAgICAgIGNvbmZpZy5zZWxlY3RlZFN0YXR1cyQgPSBzdG9yZS5yZWNvcmRMaXN0LnNlbGVjdGVkU3RhdHVzJDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2UgYW5kIG92ZXJyaWRlIGNvbHVtbiBkZWZpbml0aW9uc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHN0b3JlIHRvIHVzZVxuICAgICAqIEBwYXJhbSB7W119IGNvbHVtbnMgdG8gbWFwXG4gICAgICogQHJldHVybnMge1tdfSBDb2x1bW5EZWZpbml0aW9uW11cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgbWFwQ29sdW1ucyhzdG9yZTogUmVjb3JkTGlzdE1vZGFsU3RvcmUsIGNvbHVtbnM6IENvbHVtbkRlZmluaXRpb25bXSk6IENvbHVtbkRlZmluaXRpb25bXSB7XG4gICAgICAgIGNvbnN0IG1hcHBlZENvbHVtbnMgPSBbXTtcblxuICAgICAgICBjb2x1bW5zLmZvckVhY2goY29sdW1uID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hcHBlZCA9IHsuLi5jb2x1bW59O1xuICAgICAgICAgICAgY29uc3QgbWV0YWRhdGEgPSBjb2x1bW4ubWV0YWRhdGEgfHwge307XG4gICAgICAgICAgICBtYXBwZWQubWV0YWRhdGEgPSB7Li4ubWV0YWRhdGF9O1xuXG4gICAgICAgICAgICB0aGlzLmRpc2FibGVSZWxhdGVGaWVsZHNMaW5rKG1hcHBlZCk7XG4gICAgICAgICAgICB0aGlzLmFkZExpbmtTZWxlY3RIYW5kbGVyKHN0b3JlLCBtYXBwZWQpO1xuXG4gICAgICAgICAgICBtYXBwZWRDb2x1bW5zLnB1c2gobWFwcGVkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG1hcHBlZENvbHVtbnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGlzYWJsZSBsaW5rIGZvciByZWxhdGUgZmllbGRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGVmaW5pdGlvbiB0byB1cGRhdGVcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZGlzYWJsZVJlbGF0ZUZpZWxkc0xpbmsoZGVmaW5pdGlvbjogQ29sdW1uRGVmaW5pdGlvbik6IHZvaWQge1xuICAgICAgICBpZiAoZGVmaW5pdGlvbi50eXBlICE9PSAncmVsYXRlJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGRlZmluaXRpb24ubGluayA9IGZhbHNlO1xuICAgICAgICBkZWZpbml0aW9uLm1ldGFkYXRhLmxpbmsgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgb25DbGljayBoYW5kbGVyIGZvciBsaW5rIGZpZWxkc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHN0b3JlIHRvIHVzZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkZWZpbml0aW9uIHRvIHVwZGF0ZVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBhZGRMaW5rU2VsZWN0SGFuZGxlcihzdG9yZTogUmVjb3JkTGlzdE1vZGFsU3RvcmUsIGRlZmluaXRpb246IENvbHVtbkRlZmluaXRpb24pOiB2b2lkIHtcbiAgICAgICAgaWYgKCFkZWZpbml0aW9uLmxpbmspIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlZmluaXRpb24ubWV0YWRhdGEub25DbGljayA9IChmaWVsZDogRmllbGQsIHJlY29yZDogUmVjb3JkKTogdm9pZCA9PiB7XG4gICAgICAgICAgICBzdG9yZS5yZWNvcmRMaXN0LmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgICAgICAgICBzdG9yZS5yZWNvcmRMaXN0LnRvZ2dsZVNlbGVjdGlvbihyZWNvcmQuaWQpO1xuICAgICAgICAgICAgc3RvcmUuZW1pdExpbmtDbGlja2VkKCk7XG4gICAgICAgIH07XG4gICAgfVxufVxuIl19