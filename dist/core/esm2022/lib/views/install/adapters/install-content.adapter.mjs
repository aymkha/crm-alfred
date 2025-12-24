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
import { combineLatestWith, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../store/install-view/install-view.store";
import * as i2 from "../../../store/metadata/metadata.store.service";
import * as i3 from "../../../store/language/language.store";
import * as i4 from "../actions/install-action-manager.service";
class InstallContentAdapter {
    store;
    metadata;
    language;
    actions;
    inlineEdit;
    constructor(store, metadata, language, actions) {
        this.store = store;
        this.metadata = metadata;
        this.language = language;
        this.actions = actions;
    }
    getEditAction() {
    }
    getDisplayConfig() {
        return this.store.getMetadata$().pipe(combineLatestWith(this.store.mode$), map(([meta, mode]) => {
            const layout = this.getLayout(meta);
            const maxColumns = meta.templateMeta.maxColumns || 2;
            const tabDefs = meta.templateMeta.tabDefs;
            return {
                layout,
                mode,
                maxColumns,
                tabDefs
            };
        }));
    }
    getPanels() {
        return this.store.getMetadata$().pipe(combineLatestWith(this.store.stagingRecord$, this.language.vm$), map(([meta, record, languages]) => {
            const panels = [];
            const module = (record && record.module) || '';
            meta.panels.forEach(panelDefinition => {
                const label = this.language.getFieldLabel(panelDefinition.key.toUpperCase(), module, languages);
                const panel = {
                    label,
                    key: panelDefinition.key,
                    display$: panelDefinition?.display$ ?? of(true).pipe(shareReplay(1)),
                    rows: []
                };
                panelDefinition.rows.forEach(rowDefinition => {
                    const row = { cols: [] };
                    rowDefinition.cols.forEach(cellDefinition => {
                        row.cols.push({ ...cellDefinition });
                    });
                    panel.rows.push(row);
                });
                panels.push(panel);
            });
            return panels;
        }));
    }
    getRecord() {
        return this.store.stagingRecord$;
    }
    getLayout(meta) {
        let layout = 'panels';
        if (meta.templateMeta.useTabs) {
            layout = 'tabs';
        }
        return layout;
    }
    static ɵfac = function InstallContentAdapter_Factory(t) { return new (t || InstallContentAdapter)(i0.ɵɵinject(i1.InstallViewStore), i0.ɵɵinject(i2.MetadataStore), i0.ɵɵinject(i3.LanguageStore), i0.ɵɵinject(i4.InstallActionManager)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: InstallContentAdapter, factory: InstallContentAdapter.ɵfac });
}
export { InstallContentAdapter };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InstallContentAdapter, [{
        type: Injectable
    }], function () { return [{ type: i1.InstallViewStore }, { type: i2.MetadataStore }, { type: i3.LanguageStore }, { type: i4.InstallActionManager }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFsbC1jb250ZW50LmFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2FwcC9jb3JlL3NyYy9saWIvdmlld3MvaW5zdGFsbC9hZGFwdGVycy9pbnN0YWxsLWNvbnRlbnQuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLGlCQUFpQixFQUFjLEVBQUUsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUN2RCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxHQUFHLEVBQUUsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztBQVNoRCxNQUNhLHFCQUFxQjtJQUloQjtJQUNBO0lBQ0E7SUFDQTtJQU5kLFVBQVUsQ0FBTztJQUVqQixZQUNjLEtBQXVCLEVBQ3ZCLFFBQXVCLEVBQ3ZCLFFBQXVCLEVBQ3ZCLE9BQTZCO1FBSDdCLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQ3ZCLGFBQVEsR0FBUixRQUFRLENBQWU7UUFDdkIsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQUN2QixZQUFPLEdBQVAsT0FBTyxDQUFzQjtJQUUzQyxDQUFDO0lBRUQsYUFBYTtJQUNiLENBQUM7SUFFRCxnQkFBZ0I7UUFDWixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUNqQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUNuQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQWtDLEVBQUUsRUFBRTtZQUNsRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BDLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQztZQUNyRCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQztZQUUxQyxPQUFPO2dCQUNILE1BQU07Z0JBQ04sSUFBSTtnQkFDSixVQUFVO2dCQUNWLE9BQU87YUFDYSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUNMLENBQUM7SUFDTixDQUFDO0lBRUQsU0FBUztRQUNMLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQ2pDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQy9ELEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsRUFBRSxFQUFFO1lBRTlCLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNsQixNQUFNLE1BQU0sR0FBRyxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1lBRS9DLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxFQUFFO2dCQUNsQyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDaEcsTUFBTSxLQUFLLEdBQUc7b0JBQ1YsS0FBSztvQkFDTCxHQUFHLEVBQUUsZUFBZSxDQUFDLEdBQUc7b0JBQ3hCLFFBQVEsRUFBRSxlQUFlLEVBQUUsUUFBUSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNwRSxJQUFJLEVBQUUsRUFBRTtpQkFDRixDQUFDO2dCQUVYLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFO29CQUN6QyxNQUFNLEdBQUcsR0FBRyxFQUFDLElBQUksRUFBRSxFQUFFLEVBQWEsQ0FBQztvQkFDbkMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEVBQUU7d0JBQ3hDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUMsR0FBRyxjQUFjLEVBQUMsQ0FBQyxDQUFDO29CQUN2QyxDQUFDLENBQUMsQ0FBQztvQkFDSCxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDekIsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QixDQUFDLENBQUMsQ0FBQztZQUVILE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUNMLENBQUM7SUFDTixDQUFDO0lBRUQsU0FBUztRQUNMLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7SUFDckMsQ0FBQztJQUVTLFNBQVMsQ0FBQyxJQUF5QjtRQUN6QyxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUM7UUFDdEIsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRTtZQUMzQixNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQ25CO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQzsrRUE1RVEscUJBQXFCO2dFQUFyQixxQkFBcUIsV0FBckIscUJBQXFCOztTQUFyQixxQkFBcUI7dUZBQXJCLHFCQUFxQjtjQURqQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge2NvbWJpbmVMYXRlc3RXaXRoLCBPYnNlcnZhYmxlLCBvZn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHttYXAsIHNoYXJlUmVwbGF5fSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1BhbmVsLCBQYW5lbFJvdywgUmVjb3JkLCBWaWV3TW9kZX0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7TWV0YWRhdGFTdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvbWV0YWRhdGEvbWV0YWRhdGEuc3RvcmUuc2VydmljZSc7XG5pbXBvcnQge1JlY29yZENvbnRlbnRDb25maWcsIFJlY29yZENvbnRlbnREYXRhU291cmNlfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3JlY29yZC1jb250ZW50L3JlY29yZC1jb250ZW50Lm1vZGVsJztcbmltcG9ydCB7TGFuZ3VhZ2VTdG9yZX0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc3RvcmUnO1xuaW1wb3J0IHtJbnN0YWxsVmlld1N0b3JlfSBmcm9tICcuLi9zdG9yZS9pbnN0YWxsLXZpZXcvaW5zdGFsbC12aWV3LnN0b3JlJztcbmltcG9ydCB7SW5zdGFsbEFjdGlvbk1hbmFnZXJ9IGZyb20gJy4uL2FjdGlvbnMvaW5zdGFsbC1hY3Rpb24tbWFuYWdlci5zZXJ2aWNlJztcbmltcG9ydCB7SW5zdGFsbFZpZXdNZXRhZGF0YX0gZnJvbSAnLi4vc3RvcmUvaW5zdGFsbC12aWV3L2luc3RhbGwtdmlldy5zdG9yZS5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbnN0YWxsQ29udGVudEFkYXB0ZXIgaW1wbGVtZW50cyBSZWNvcmRDb250ZW50RGF0YVNvdXJjZSB7XG4gICAgaW5saW5lRWRpdDogdHJ1ZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgc3RvcmU6IEluc3RhbGxWaWV3U3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBtZXRhZGF0YTogTWV0YWRhdGFTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIGxhbmd1YWdlOiBMYW5ndWFnZVN0b3JlLFxuICAgICAgICBwcm90ZWN0ZWQgYWN0aW9uczogSW5zdGFsbEFjdGlvbk1hbmFnZXJcbiAgICApIHtcbiAgICB9XG5cbiAgICBnZXRFZGl0QWN0aW9uKCk6IHZvaWQge1xuICAgIH1cblxuICAgIGdldERpc3BsYXlDb25maWcoKTogT2JzZXJ2YWJsZTxSZWNvcmRDb250ZW50Q29uZmlnPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlLmdldE1ldGFkYXRhJCgpLnBpcGUoXG4gICAgICAgICAgICBjb21iaW5lTGF0ZXN0V2l0aCh0aGlzLnN0b3JlLm1vZGUkKSxcbiAgICAgICAgICAgIG1hcCgoW21ldGEsIG1vZGVdOiBbSW5zdGFsbFZpZXdNZXRhZGF0YSwgVmlld01vZGVdKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGF5b3V0ID0gdGhpcy5nZXRMYXlvdXQobWV0YSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF4Q29sdW1ucyA9IG1ldGEudGVtcGxhdGVNZXRhLm1heENvbHVtbnMgfHwgMjtcbiAgICAgICAgICAgICAgICBjb25zdCB0YWJEZWZzID0gbWV0YS50ZW1wbGF0ZU1ldGEudGFiRGVmcztcblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGxheW91dCxcbiAgICAgICAgICAgICAgICAgICAgbW9kZSxcbiAgICAgICAgICAgICAgICAgICAgbWF4Q29sdW1ucyxcbiAgICAgICAgICAgICAgICAgICAgdGFiRGVmc1xuICAgICAgICAgICAgICAgIH0gYXMgUmVjb3JkQ29udGVudENvbmZpZztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0UGFuZWxzKCk6IE9ic2VydmFibGU8UGFuZWxbXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZS5nZXRNZXRhZGF0YSQoKS5waXBlKFxuICAgICAgICAgICAgY29tYmluZUxhdGVzdFdpdGgodGhpcy5zdG9yZS5zdGFnaW5nUmVjb3JkJCwgdGhpcy5sYW5ndWFnZS52bSQpLFxuICAgICAgICAgICAgbWFwKChbbWV0YSwgcmVjb3JkLCBsYW5ndWFnZXNdKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwYW5lbHMgPSBbXTtcbiAgICAgICAgICAgICAgICBjb25zdCBtb2R1bGUgPSAocmVjb3JkICYmIHJlY29yZC5tb2R1bGUpIHx8ICcnO1xuXG4gICAgICAgICAgICAgICAgbWV0YS5wYW5lbHMuZm9yRWFjaChwYW5lbERlZmluaXRpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IHRoaXMubGFuZ3VhZ2UuZ2V0RmllbGRMYWJlbChwYW5lbERlZmluaXRpb24ua2V5LnRvVXBwZXJDYXNlKCksIG1vZHVsZSwgbGFuZ3VhZ2VzKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFuZWwgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogcGFuZWxEZWZpbml0aW9uLmtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXkkOiBwYW5lbERlZmluaXRpb24/LmRpc3BsYXkkID8/IG9mKHRydWUpLnBpcGUoc2hhcmVSZXBsYXkoMSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcm93czogW11cbiAgICAgICAgICAgICAgICAgICAgfSBhcyBQYW5lbDtcblxuICAgICAgICAgICAgICAgICAgICBwYW5lbERlZmluaXRpb24ucm93cy5mb3JFYWNoKHJvd0RlZmluaXRpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93ID0ge2NvbHM6IFtdfSBhcyBQYW5lbFJvdztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd0RlZmluaXRpb24uY29scy5mb3JFYWNoKGNlbGxEZWZpbml0aW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuY29scy5wdXNoKHsuLi5jZWxsRGVmaW5pdGlvbn0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYW5lbC5yb3dzLnB1c2gocm93KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcGFuZWxzLnB1c2gocGFuZWwpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhbmVscztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0UmVjb3JkKCk6IE9ic2VydmFibGU8UmVjb3JkPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlLnN0YWdpbmdSZWNvcmQkO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRMYXlvdXQobWV0YTogSW5zdGFsbFZpZXdNZXRhZGF0YSk6IHN0cmluZyB7XG4gICAgICAgIGxldCBsYXlvdXQgPSAncGFuZWxzJztcbiAgICAgICAgaWYgKG1ldGEudGVtcGxhdGVNZXRhLnVzZVRhYnMpIHtcbiAgICAgICAgICAgIGxheW91dCA9ICd0YWJzJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsYXlvdXQ7XG4gICAgfVxufVxuIl19