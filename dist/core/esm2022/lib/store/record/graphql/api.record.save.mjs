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
import { gql } from 'apollo-angular';
import { deepClone } from 'common';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "apollo-angular";
class RecordSaveGQL {
    apollo;
    constructor(apollo) {
        this.apollo = apollo;
    }
    /**
     * Save record on the backend
     *
     * @param {object} record to save
     *
     * @returns {object} Observable<Record>
     */
    save(record) {
        const input = {
            module: record.module,
            attributes: deepClone(record.attributes),
        };
        if (record.id) {
            // eslint-disable-next-line no-underscore-dangle
            input._id = record.id;
        }
        const mutationOptions = {
            mutation: gql `
                mutation saveRecord($input: saveRecordInput!) {
                    saveRecord(input: $input) {
                        record {
                            attributes
                            favorite
                            id
                            _id
                            module
                            acls
                        }
                    }
                }
            `,
            variables: {
                input
            },
        };
        return this.apollo.mutate(mutationOptions).pipe(map((result) => this.mapToRecord(result)));
    }
    mapToRecord(response) {
        if (!response.data || !response.data.saveRecord || !response.data.saveRecord.record) {
            return null;
        }
        return {
            // eslint-disable-next-line no-underscore-dangle
            id: response.data.saveRecord.record._id,
            type: response?.data?.saveRecord?.record?.type ?? '',
            module: response?.data?.saveRecord?.record?.module ?? '',
            attributes: response?.data?.saveRecord?.record?.attributes ?? [],
            acls: response?.data?.saveRecord?.record?.acls ?? [],
            favorite: response?.data.saveRecord?.record?.favorite ?? false
        };
    }
    static ɵfac = function RecordSaveGQL_Factory(t) { return new (t || RecordSaveGQL)(i0.ɵɵinject(i1.Apollo)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RecordSaveGQL, factory: RecordSaveGQL.ɵfac, providedIn: 'root' });
}
export { RecordSaveGQL };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordSaveGQL, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.Apollo }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnJlY29yZC5zYXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3N0b3JlL3JlY29yZC9ncmFwaHFsL2FwaS5yZWNvcmQuc2F2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQVMsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFDLFNBQVMsRUFBUyxNQUFNLFFBQVEsQ0FBQztBQUN6QyxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7OztBQVNuQyxNQUdhLGFBQWE7SUFFQTtJQUF0QixZQUFzQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUNwQyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksSUFBSSxDQUFDLE1BQWM7UUFFdEIsTUFBTSxLQUFLLEdBQWM7WUFDckIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNO1lBQ3JCLFVBQVUsRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztTQUMzQyxDQUFDO1FBRUYsSUFBSSxNQUFNLENBQUMsRUFBRSxFQUFFO1lBQ1gsZ0RBQWdEO1lBQ2hELEtBQUssQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQztTQUN6QjtRQUVELE1BQU0sZUFBZSxHQUFHO1lBQ3BCLFFBQVEsRUFBRSxHQUFHLENBQUE7Ozs7Ozs7Ozs7Ozs7YUFhWjtZQUNELFNBQVMsRUFBRTtnQkFDUCxLQUFLO2FBQ1I7U0FDSixDQUFDO1FBRUYsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBOEIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkgsQ0FBQztJQUVTLFdBQVcsQ0FBQyxRQUFnQztRQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO1lBQ2pGLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFFRCxPQUFPO1lBQ0gsZ0RBQWdEO1lBQ2hELEVBQUUsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRztZQUN2QyxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksSUFBSSxFQUFFO1lBQ3BELE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxJQUFJLEVBQUU7WUFDeEQsVUFBVSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxVQUFVLElBQUksRUFBRTtZQUNoRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksSUFBSSxFQUFFO1lBQ3BELFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxJQUFJLEtBQUs7U0FDdkQsQ0FBQztJQUNoQixDQUFDO3VFQTdEUSxhQUFhO2dFQUFiLGFBQWEsV0FBYixhQUFhLG1CQUZWLE1BQU07O1NBRVQsYUFBYTt1RkFBYixhQUFhO2NBSHpCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3VpdGVDUk0gaXMgYSBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudCBwcm9ncmFtIGRldmVsb3BlZCBieSBTYWxlc0FnaWxpdHkgTHRkLlxuICogQ29weXJpZ2h0IChDKSAyMDIxIFNhbGVzQWdpbGl0eSBMdGQuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXJcbiAqIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIHZlcnNpb24gMyBhcyBwdWJsaXNoZWQgYnkgdGhlXG4gKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4gKiB0byBTZWN0aW9uIDE1IGFzIHBlcm1pdHRlZCBpbiBTZWN0aW9uIDcoYSk6IEZPUiBBTlkgUEFSVCBPRiBUSEUgQ09WRVJFRCBXT1JLXG4gKiBJTiBXSElDSCBUSEUgQ09QWVJJR0hUIElTIE9XTkVEIEJZIFNBTEVTQUdJTElUWSwgU0FMRVNBR0lMSVRZIERJU0NMQUlNUyBUSEVcbiAqIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVFxuICogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiAqIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmVcbiAqIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqXG4gKiBJbiBhY2NvcmRhbmNlIHdpdGggU2VjdGlvbiA3KGIpIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIHZlcnNpb24gMywgdGhlc2UgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IHJldGFpbiB0aGUgZGlzcGxheSBvZiB0aGVcbiAqIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4gKiBmZWFzaWJsZSBmb3IgdGVjaG5pY2FsIHJlYXNvbnMsIHRoZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgZGlzcGxheVxuICogdGhlIHdvcmRzIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIuXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QXBvbGxvLCBncWx9IGZyb20gJ2Fwb2xsby1hbmd1bGFyJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2RlZXBDbG9uZSwgUmVjb3JkfSBmcm9tICdjb21tb24nO1xuaW1wb3J0IHttYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7QXBvbGxvUXVlcnlSZXN1bHR9IGZyb20gJ0BhcG9sbG8vY2xpZW50L2NvcmUnO1xuXG5pbnRlcmZhY2UgU2F2ZUlucHV0IHtcbiAgICBtb2R1bGU6IHN0cmluZztcbiAgICBhdHRyaWJ1dGVzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xuICAgIF9pZD86IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBSZWNvcmRTYXZlR1FMIHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhcG9sbG86IEFwb2xsbykge1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNhdmUgcmVjb3JkIG9uIHRoZSBiYWNrZW5kXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVjb3JkIHRvIHNhdmVcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE9ic2VydmFibGU8UmVjb3JkPlxuICAgICAqL1xuICAgIHB1YmxpYyBzYXZlKHJlY29yZDogUmVjb3JkKTogT2JzZXJ2YWJsZTxSZWNvcmQ+IHtcblxuICAgICAgICBjb25zdCBpbnB1dDogU2F2ZUlucHV0ID0ge1xuICAgICAgICAgICAgbW9kdWxlOiByZWNvcmQubW9kdWxlLFxuICAgICAgICAgICAgYXR0cmlidXRlczogZGVlcENsb25lKHJlY29yZC5hdHRyaWJ1dGVzKSxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAocmVjb3JkLmlkKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGVcbiAgICAgICAgICAgIGlucHV0Ll9pZCA9IHJlY29yZC5pZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG11dGF0aW9uT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIG11dGF0aW9uOiBncWxgXG4gICAgICAgICAgICAgICAgbXV0YXRpb24gc2F2ZVJlY29yZCgkaW5wdXQ6IHNhdmVSZWNvcmRJbnB1dCEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2F2ZVJlY29yZChpbnB1dDogJGlucHV0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWNvcmQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYXZvcml0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2lkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNsc1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYCxcbiAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgIGlucHV0XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0aGlzLmFwb2xsby5tdXRhdGUobXV0YXRpb25PcHRpb25zKS5waXBlKG1hcCgocmVzdWx0OiBBcG9sbG9RdWVyeVJlc3VsdDxhbnk+KSA9PiB0aGlzLm1hcFRvUmVjb3JkKHJlc3VsdCkpKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWFwVG9SZWNvcmQocmVzcG9uc2U6IEFwb2xsb1F1ZXJ5UmVzdWx0PGFueT4pOiBSZWNvcmQge1xuICAgICAgICBpZiAoIXJlc3BvbnNlLmRhdGEgfHwgIXJlc3BvbnNlLmRhdGEuc2F2ZVJlY29yZCB8fCAhcmVzcG9uc2UuZGF0YS5zYXZlUmVjb3JkLnJlY29yZCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlXG4gICAgICAgICAgICBpZDogcmVzcG9uc2UuZGF0YS5zYXZlUmVjb3JkLnJlY29yZC5faWQsXG4gICAgICAgICAgICB0eXBlOiByZXNwb25zZT8uZGF0YT8uc2F2ZVJlY29yZD8ucmVjb3JkPy50eXBlID8/ICcnLFxuICAgICAgICAgICAgbW9kdWxlOiByZXNwb25zZT8uZGF0YT8uc2F2ZVJlY29yZD8ucmVjb3JkPy5tb2R1bGUgPz8gJycsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiByZXNwb25zZT8uZGF0YT8uc2F2ZVJlY29yZD8ucmVjb3JkPy5hdHRyaWJ1dGVzID8/IFtdLFxuICAgICAgICAgICAgYWNsczogcmVzcG9uc2U/LmRhdGE/LnNhdmVSZWNvcmQ/LnJlY29yZD8uYWNscyA/PyBbXSxcbiAgICAgICAgICAgIGZhdm9yaXRlOiByZXNwb25zZT8uZGF0YS5zYXZlUmVjb3JkPy5yZWNvcmQ/LmZhdm9yaXRlID8/IGZhbHNlXG4gICAgICAgIH0gYXMgUmVjb3JkO1xuICAgIH1cbn1cbiJdfQ==