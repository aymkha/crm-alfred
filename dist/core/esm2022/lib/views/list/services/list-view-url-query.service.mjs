/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2024 SalesAgility Ltd.
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
import { isArray, isEmpty } from 'lodash-es';
import { DateTime } from 'luxon';
import { isEmptyString } from 'common';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../store/system-config/system-config.store";
import * as i2 from "../../../store/metadata/metadata.store.service";
import * as i3 from "../../../services/formatters/data-type.formatter.service";
const MONTH_YEAR_REGEX = new RegExp('^(\\d{4})-(0[1-9]|1[0-2])$');
const MONTH_REGEX = new RegExp('^(\\d{4})$');
class ListViewUrlQueryService {
    systemConfig;
    metadataStore;
    dataTypeFormatter;
    /**
     * Array of allowed properties to be set to the searchCriteriaFieldFilter from url_query_filter_mapping
     */
    allowedProperties = [
        'operator',
        'target',
        'values',
        'start',
        'end'
    ];
    /**
     * An array containing properties that can be converted into dbFormat.
     */
    convertableProperties = [
        'target',
        'values',
        'start',
        'end'
    ];
    constructor(systemConfig, metadataStore, dataTypeFormatter) {
        this.systemConfig = systemConfig;
        this.metadataStore = metadataStore;
        this.dataTypeFormatter = dataTypeFormatter;
    }
    /**
     * Builds a URL query-based filter.
     *
     * @param {string} module - The module name.
     * @param {SavedFilter} defaultFilter - The default filter.
     * @param {Params} rawQueryParams - The raw query parameters.
     * @returns {SavedFilter|null} - The built URL query-based filter, or null if no filter criteria are found.
     */
    buildUrlQueryBasedFilter(module, defaultFilter, rawQueryParams) {
        const filterFieldDefinitions = this.metadataStore.get().recordView.vardefs;
        const queryParams = Object.entries(rawQueryParams)
            .reduce((acc, [queryParamKey, queryParamVal]) => {
            const [cleanQueryParamKey, cleanQueryParamVal] = this.cleanQueryParam([
                queryParamKey,
                queryParamVal
            ]);
            acc[cleanQueryParamKey] = cleanQueryParamVal;
            return acc;
        }, {});
        const filterCriteria = this.getQueryFilterCriteria(filterFieldDefinitions, module, queryParams);
        if (isEmpty(filterCriteria.filters)) {
            return null;
        }
        return {
            key: 'default',
            searchModule: module,
            module: 'saved-search',
            criteria: filterCriteria
        };
    }
    /**
     * Generates the query filter criteria based on the provided field definitions map, module, and query parameters.
     *
     * @param {FieldDefinitionMap} fieldDefinitionMap - The field definition map.
     * @param {string} module - The module name.
     * @param {Params} queryParams - The query parameters.
     * @returns {SearchCriteria} - The generated search criteria.
     * @protected
     */
    getQueryFilterCriteria(fieldDefinitionMap, module, queryParams) {
        const criteria = {
            name: 'default',
            filters: {}
        };
        const queryParamsKeys = Object.keys(queryParams);
        const fieldDefinitions = Object.values(fieldDefinitionMap)
            .filter(({ name }) => queryParamsKeys.some(qPKey => qPKey.includes(name)));
        const listviewUrlQueryFilterMapping = this.systemConfig.getConfigValue('listview_url_query_filter_mapping');
        const listviewUrlQueryFilterMappingEntries = Object.entries(listviewUrlQueryFilterMapping);
        listviewUrlQueryFilterMappingEntries.push(['', {}]);
        let searchType;
        switch (queryParams['searchFormTab']) {
            case 'basic_search':
                searchType = 'basic';
                break;
            case 'advanced_search':
                searchType = 'advanced';
                break;
            default:
                searchType = 'advanced';
        }
        for (const fieldDefinition of fieldDefinitions) {
            const fieldFilterName = fieldDefinition.name;
            const fieldFilterKeys = [
                fieldFilterName,
                `${fieldFilterName}_${searchType}`
            ];
            for (const [queryFilterOperatorKeyTemplate, queryFilterOperatorParamsMap] of listviewUrlQueryFilterMappingEntries) {
                if (!isEmpty(criteria.filters[fieldFilterName])) {
                    break;
                }
                for (const fieldFilterKey of fieldFilterKeys) {
                    if (!isEmpty(criteria.filters[fieldFilterName])) {
                        break;
                    }
                    const searchCriteriaFieldFilter = this.buildSearchCriteriaFieldFilter(fieldFilterName, fieldDefinition.type, queryParams, fieldFilterKey, queryFilterOperatorKeyTemplate, queryFilterOperatorParamsMap);
                    if (isEmpty(searchCriteriaFieldFilter)) {
                        continue;
                    }
                    try {
                        this.convertableProperties.forEach((convertableProperty) => {
                            if (!searchCriteriaFieldFilter[convertableProperty]) {
                                return;
                            }
                            let internalFormatValue;
                            if (isArray(searchCriteriaFieldFilter[convertableProperty])) {
                                internalFormatValue = searchCriteriaFieldFilter[convertableProperty].map(prop => this.toInternalFormat(fieldDefinition.type, prop));
                            }
                            else {
                                internalFormatValue = this.toInternalFormat(fieldDefinition.type, searchCriteriaFieldFilter[convertableProperty]);
                            }
                            searchCriteriaFieldFilter[convertableProperty] = internalFormatValue;
                        });
                    }
                    catch (e) {
                        continue;
                    }
                    criteria.filters[fieldFilterName] = searchCriteriaFieldFilter;
                }
            }
        }
        return criteria;
    }
    /**
     * Builds a search criteria field filter object based on the provided parameters.
     *
     * @param {string} fieldFilterName - The name of the field filter.
     * @param {string} fieldFilterFieldType - The type of the field filter.
     * @param {Params} queryParams - The query parameters.
     * @param {string} fieldFilterKey - The key of the field filter in the query parameters.
     * @param {string} queryFilterOperatorKeyTemplate - The template for the query filter operator key.
     * @param {NestedGenericMap<string>} queryFilterOperatorParamsMap - The map of query filter operator keys to their respective parameter maps.
     * @returns {SearchCriteriaFieldFilter | null} The built search criteria field filter object.
     * @protected
     */
    buildSearchCriteriaFieldFilter(fieldFilterName, fieldFilterFieldType, queryParams, fieldFilterKey, queryFilterOperatorKeyTemplate, queryFilterOperatorParamsMap) {
        const searchCriteriaFieldFilter = {
            field: fieldFilterName,
            fieldType: fieldFilterFieldType,
            operator: '=',
            values: []
        };
        if (isEmpty(queryFilterOperatorKeyTemplate) || isEmpty(queryFilterOperatorParamsMap)) {
            const fieldFilterValue = this.getQueryParamValue(fieldFilterKey, fieldFilterKey, queryParams);
            if (isEmpty(fieldFilterValue) && !isEmptyString(fieldFilterValue)) {
                return null;
            }
            const values = isArray(fieldFilterValue)
                ? fieldFilterValue
                : [fieldFilterValue];
            searchCriteriaFieldFilter.values = values;
            searchCriteriaFieldFilter.target = values[0];
            return this.checkDateSpecialsOrReturn(searchCriteriaFieldFilter, searchCriteriaFieldFilter.target);
        }
        const queryFilterOperatorKey = this.getQueryParamValue(queryFilterOperatorKeyTemplate, fieldFilterKey, queryParams, { forceSingleString: true });
        const queryFilterOperatorParams = (queryFilterOperatorParamsMap[queryFilterOperatorKey] ??
            Object
                .values(queryFilterOperatorParamsMap)
                .reduce((prev, curr) => ({ ...prev, ...curr }), {})
            ?? {});
        if (isEmpty(queryFilterOperatorParams)) {
            return null;
        }
        let returnEmpty = true;
        searchCriteriaFieldFilter.operator = queryFilterOperatorKey;
        Object.entries(queryFilterOperatorParams)
            .filter(([_, searchCriteriaPropertyKey]) => (typeof searchCriteriaPropertyKey === 'string'
            && this.allowedProperties.includes(searchCriteriaPropertyKey)))
            .forEach(([searchCriteriaPropertyValueTemplate, searchCriteriaPropertyKey]) => {
            const rawSearchCriteriaPropertyValue = this.getQueryParamValue(searchCriteriaPropertyValueTemplate, fieldFilterKey, queryParams);
            if (isEmpty(rawSearchCriteriaPropertyValue)) {
                return;
            }
            returnEmpty = false;
            let searchCriteriaPropertyValue = rawSearchCriteriaPropertyValue;
            if (searchCriteriaPropertyKey === 'values') {
                if (!isArray(searchCriteriaPropertyValue)) {
                    searchCriteriaPropertyValue = [searchCriteriaPropertyValue];
                }
                searchCriteriaFieldFilter['target'] = searchCriteriaPropertyValue[0];
            }
            else if (searchCriteriaPropertyKey === 'target') {
                if (isArray(searchCriteriaPropertyValue)) {
                    searchCriteriaPropertyValue = searchCriteriaPropertyValue[0];
                }
                searchCriteriaFieldFilter['values'] = [searchCriteriaPropertyValue];
            }
            searchCriteriaFieldFilter[searchCriteriaPropertyKey] = searchCriteriaPropertyValue;
            if (!isArray(searchCriteriaPropertyValue)) {
                this.checkDateSpecialsOrReturn(searchCriteriaFieldFilter, searchCriteriaPropertyValue, {
                    operator: queryFilterOperatorKey,
                    key: searchCriteriaPropertyKey
                });
            }
        });
        return !returnEmpty ? this.checkForMissingOperator(searchCriteriaFieldFilter) : null;
    }
    /**
     * Retrieves the value of a query parameter based on the provided queryParamKeyTemplate,
     * fieldFilterKey, and queryParams.
     *
     * @param {string} queryParamKeyTemplate - The template for the query parameter key, with "{field}" as a placeholder for fieldFilterKey.
     * @param {string} fieldFilterKey - The field filter key used to replace the "{field}" placeholder in queryParamKeyTemplate.
     * @param {Params} queryParams - The object containing the query parameters.
     * @param {object} options - Optional parameters to customize the behavior of the method.
     * @param {boolean} options.forceSingleString - Flag indicating whether the result should always be a single string value.
     * @returns {string|string[]} - The value of the query parameter. If forceSingleString is false, it will be either a string or an array of strings.
     * @protected
     */
    getQueryParamValue(queryParamKeyTemplate, fieldFilterKey, queryParams, { forceSingleString = false } = {}) {
        const queryParamKey = queryParamKeyTemplate.replace('{field}', fieldFilterKey) ?? '';
        let queryParamValue = queryParams[queryParamKey];
        if (!queryParamValue) {
            return null;
        }
        if (isArray(queryParamValue)) {
            queryParamValue = queryParamValue.map(this.transform);
        }
        else {
            queryParamValue = this.transform(queryParamValue);
        }
        if (forceSingleString && isArray(queryParamValue)) {
            return queryParamValue[0] ?? '';
        }
        return queryParamValue;
    }
    /**
     * Cleans the query parameter key by removing the '[]' brackets if present.
     *
     * @returns {string} - The cleaned query parameter key.
     * @protected
     * @param queryParam
     */
    cleanQueryParam(queryParam) {
        let [queryParamKey, queryParamVal] = queryParam;
        const queryParamKeyReversed = queryParamKey.split('').reverse().join('');
        if (queryParamKeyReversed.indexOf('][') === 0 && typeof queryParamVal === 'string') {
            queryParamKey = queryParamKey.replace('[]', '');
            queryParamVal = queryParamVal.split(',');
        }
        return [queryParamKey, queryParamVal];
    }
    /**
     * Checks if given fieldFilterValue matches MONTH_YEAR_REGEX or yearRegex and returns
     * overridesSearchCriteriaFieldFilter if true, else returns searchCriteriaFieldFilter.
     *
     * @param {SearchCriteriaFieldFilter} searchCriteriaFieldFilter - The search criteria field filter.
     * @param {string} fieldFilterValue - The field filter value.
     * @param {Object} options - The options object.
     * @param {string} [options.operator='='] - The range option.
     * @param {string} [options.key='target'] - The key option.
     * @returns {SearchCriteriaFieldFilter} - The updated search criteria field filter.
     * @protected
     */
    checkDateSpecialsOrReturn(searchCriteriaFieldFilter, fieldFilterValue, { operator = '=', key = 'target' } = {}) {
        if (fieldFilterValue.match(MONTH_YEAR_REGEX)) {
            return this.overridesSearchCriteriaFieldFilter(searchCriteriaFieldFilter, fieldFilterValue, { type: 'month', operator, key });
        }
        if (fieldFilterValue.match(MONTH_REGEX)) {
            return this.overridesSearchCriteriaFieldFilter(searchCriteriaFieldFilter, fieldFilterValue, { type: 'year', operator, key });
        }
        return searchCriteriaFieldFilter;
    }
    /**
     * Overrides the search criteria field filter based on the provided parameters.
     *
     * @param {SearchCriteriaFieldFilter} searchCriteriaFieldFilter - The original search criteria field filter.
     * @param {string} fieldFilterValue - The value of the field filter.
     * @param {Object} options - The options for overriding the field filter.
     * @param {string} options.type - The type of the field filter.
     * @param {string} [options.operator='equal'] - The operator for the field filter.
     * @param {string} [options.key='target'] - The key for the field filter.
     * @protected
     * @returns {SearchCriteriaFieldFilter} - The overridden search criteria field filter.
     */
    overridesSearchCriteriaFieldFilter(searchCriteriaFieldFilter, fieldFilterValue, { type = '', operator = 'equal', key = 'target' }) {
        let plusObject;
        let fmt;
        switch (type) {
            case 'year':
                plusObject = { year: 1 };
                fmt = 'yyyy';
                break;
            case 'month':
                plusObject = { month: 1 };
                fmt = 'yyyy-MM';
                break;
            default:
                return searchCriteriaFieldFilter;
        }
        const start = DateTime.fromFormat(fieldFilterValue, fmt);
        const end = start.plus(plusObject).minus({ day: 1 });
        if (key !== 'target') {
            switch (key) {
                case 'start':
                    searchCriteriaFieldFilter.start = start.toFormat('yyyy-MM-dd');
                    break;
                case 'end':
                    searchCriteriaFieldFilter.end = end.toFormat('yyyy-MM-dd');
                    break;
            }
            return searchCriteriaFieldFilter;
        }
        searchCriteriaFieldFilter.operator = operator;
        switch (operator) {
            case 'greater_than':
            case 'greater_than_equals':
                searchCriteriaFieldFilter.start = start.toFormat('yyyy-MM-dd');
                searchCriteriaFieldFilter.target = searchCriteriaFieldFilter.start;
                searchCriteriaFieldFilter.values = [searchCriteriaFieldFilter.target];
                break;
            case 'less_than':
            case 'less_than_equals':
                searchCriteriaFieldFilter.end = end.toFormat('yyyy-MM-dd');
                searchCriteriaFieldFilter.target = searchCriteriaFieldFilter.end;
                searchCriteriaFieldFilter.values = [searchCriteriaFieldFilter.target];
                break;
            case 'not_equal':
                searchCriteriaFieldFilter.start = start.toFormat('yyyy-MM-dd');
                searchCriteriaFieldFilter.end = end.toFormat('yyyy-MM-dd');
                searchCriteriaFieldFilter.target = fieldFilterValue;
                searchCriteriaFieldFilter.values = [fieldFilterValue];
                break;
            case 'equal':
            case 'between':
            default:
                searchCriteriaFieldFilter.operator = 'between';
                searchCriteriaFieldFilter.start = start.toFormat('yyyy-MM-dd');
                searchCriteriaFieldFilter.end = end.toFormat('yyyy-MM-dd');
                searchCriteriaFieldFilter.target = '';
                searchCriteriaFieldFilter.values = [];
                break;
        }
        return searchCriteriaFieldFilter;
    }
    /**
     * Converts the given value to the internal format based on the specified type.
     *
     * @param {string} type - The type of value to convert to.
     * @param {string} value - The value to convert.
     * @return {string} - The converted value in the internal format.
     * @protected
     */
    toInternalFormat(type, value) {
        if (value.match(MONTH_REGEX) || value.match(MONTH_YEAR_REGEX)) {
            return value;
        }
        return this.dataTypeFormatter.toInternalFormat(type, value);
    }
    ;
    /**
     * Transforms the given value from url to a value understandable by backend.
     *
     * @param {any} value - The value to be transformed.
     * @protected
     * @return {string} The transformed value.
     */
    transform(value) {
        switch (value) {
            case '':
                return '__SuiteCRMEmptyString__';
            default:
                return value;
        }
    }
    checkForMissingOperator(searchCriteriaFieldFilter) {
        if (!isEmpty(searchCriteriaFieldFilter.start)
            && !isEmpty(searchCriteriaFieldFilter.end)) {
            searchCriteriaFieldFilter.operator = 'between';
        }
        return searchCriteriaFieldFilter;
    }
    static ɵfac = function ListViewUrlQueryService_Factory(t) { return new (t || ListViewUrlQueryService)(i0.ɵɵinject(i1.SystemConfigStore), i0.ɵɵinject(i2.MetadataStore), i0.ɵɵinject(i3.DataTypeFormatter)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ListViewUrlQueryService, factory: ListViewUrlQueryService.ɵfac, providedIn: 'root' });
}
export { ListViewUrlQueryService };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListViewUrlQueryService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: i1.SystemConfigStore }, { type: i2.MetadataStore }, { type: i3.DataTypeFormatter }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXVybC1xdWVyeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL3ZpZXdzL2xpc3Qvc2VydmljZXMvbGlzdC12aWV3LXVybC1xdWVyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFFSCxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQ2pDLE9BQU8sRUFFSCxhQUFhLEVBR2hCLE1BQU0sUUFBUSxDQUFDO0FBQ2hCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBVzNDLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxNQUFNLENBQUMsNEJBQTRCLENBQUMsQ0FBQztBQUNsRSxNQUFNLFdBQVcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUU3QyxNQUNhLHVCQUF1QjtJQXdCbEI7SUFDQTtJQUNBO0lBeEJkOztPQUVHO0lBQ0ssaUJBQWlCLEdBQUc7UUFDeEIsVUFBVTtRQUNWLFFBQVE7UUFDUixRQUFRO1FBQ1IsT0FBTztRQUNQLEtBQUs7S0FDUixDQUFDO0lBRUY7O09BRUc7SUFDSyxxQkFBcUIsR0FBRztRQUM1QixRQUFRO1FBQ1IsUUFBUTtRQUNSLE9BQU87UUFDUCxLQUFLO0tBQ1IsQ0FBQztJQUVGLFlBQ2MsWUFBK0IsRUFDL0IsYUFBNEIsRUFDNUIsaUJBQW9DO1FBRnBDLGlCQUFZLEdBQVosWUFBWSxDQUFtQjtRQUMvQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBRWxELENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksd0JBQXdCLENBQzNCLE1BQWMs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QUFvRDtRQUNuRixJQUNJLENBQUMsT0FBTyxDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQztlQUN0QyxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsRUFDNUM7WUFDRSx5QkFBeUIsQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO1NBQ2xEO1FBRUQsT0FBTyx5QkFBeUIsQ0FBQztJQUNyQyxDQUFDO2lGQXhnQlEsdUJBQXVCO2dFQUF2Qix1QkFBdUIsV0FBdkIsdUJBQXVCLG1CQURWLE1BQU07O1NBQ25CLHVCQUF1Qjt1RkFBdkIsdUJBQXVCO2NBRG5DLFVBQVU7ZUFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1aXRlQ1JNIGlzIGEgY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgcHJvZ3JhbSBkZXZlbG9wZWQgYnkgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqIENvcHlyaWdodCAoQykgMjAyNCBTYWxlc0FnaWxpdHkgTHRkLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyXG4gKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuICogRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRoZSBmb2xsb3dpbmcgcGVybWlzc2lvbiBhZGRlZFxuICogdG8gU2VjdGlvbiAxNSBhcyBwZXJtaXR0ZWQgaW4gU2VjdGlvbiA3KGEpOiBGT1IgQU5ZIFBBUlQgT0YgVEhFIENPVkVSRUQgV09SS1xuICogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4gKiBXQVJSQU5UWSBPRiBOT04gSU5GUklOR0VNRU5UIE9GIFRISVJEIFBBUlRZIFJJR0hUUy5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTXG4gKiBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlXG4gKiBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKlxuICogSW4gYWNjb3JkYW5jZSB3aXRoIFNlY3Rpb24gNyhiKSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4gKiBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiIGxvZ28uIElmIHRoZSBkaXNwbGF5IG9mIHRoZSBsb2dvcyBpcyBub3QgcmVhc29uYWJseVxuICogZmVhc2libGUgZm9yIHRlY2huaWNhbCByZWFzb25zLCB0aGUgQXBwcm9wcmlhdGUgTGVnYWwgTm90aWNlcyBtdXN0IGRpc3BsYXlcbiAqIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuICovXG5cbmltcG9ydCB7IGlzQXJyYXksIGlzRW1wdHkgfSBmcm9tICdsb2Rhc2gtZXMnO1xuaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tICdsdXhvbic7XG5pbXBvcnQge1xuICAgIEZpZWxkRGVmaW5pdGlvbk1hcCxcbiAgICBpc0VtcHR5U3RyaW5nLFxuICAgIFNlYXJjaENyaXRlcmlhLFxuICAgIFNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXJcbn0gZnJvbSAnY29tbW9uJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTYXZlZEZpbHRlciB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL3NhdmVkLWZpbHRlcnMvc2F2ZWQtZmlsdGVyLm1vZGVsJztcbmltcG9ydCB7IE1ldGFkYXRhU3RvcmUgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9tZXRhZGF0YS9tZXRhZGF0YS5zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7IFN5c3RlbUNvbmZpZ1N0b3JlIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvc3lzdGVtLWNvbmZpZy9zeXN0ZW0tY29uZmlnLnN0b3JlJztcbmltcG9ydCB7IERhdGFUeXBlRm9ybWF0dGVyIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvZm9ybWF0dGVycy9kYXRhLXR5cGUuZm9ybWF0dGVyLnNlcnZpY2UnO1xuXG50eXBlIEdlbmVyaWNNYXA8VD4gPSB7IFtrZXk6IHN0cmluZ106IFQgfTtcbnR5cGUgTmVzdGVkR2VuZXJpY01hcDxUPiA9IEdlbmVyaWNNYXA8R2VuZXJpY01hcDxUPj47XG50eXBlIERvdWJsZU5lc3RlZEdlbmVyaWNNYXA8VD4gPSBHZW5lcmljTWFwPE5lc3RlZEdlbmVyaWNNYXA8VD4+O1xuXG5jb25zdCBNT05USF9ZRUFSX1JFR0VYID0gbmV3IFJlZ0V4cCgnXihcXFxcZHs0fSktKDBbMS05XXwxWzAtMl0pJCcpO1xuY29uc3QgTU9OVEhfUkVHRVggPSBuZXcgUmVnRXhwKCdeKFxcXFxkezR9KSQnKTtcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld1VybFF1ZXJ5U2VydmljZSB7XG5cbiAgICAvKipcbiAgICAgKiBBcnJheSBvZiBhbGxvd2VkIHByb3BlcnRpZXMgdG8gYmUgc2V0IHRvIHRoZSBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyIGZyb20gdXJsX3F1ZXJ5X2ZpbHRlcl9tYXBwaW5nXG4gICAgICovXG4gICAgcHJpdmF0ZSBhbGxvd2VkUHJvcGVydGllcyA9IFtcbiAgICAgICAgJ29wZXJhdG9yJyxcbiAgICAgICAgJ3RhcmdldCcsXG4gICAgICAgICd2YWx1ZXMnLFxuICAgICAgICAnc3RhcnQnLFxuICAgICAgICAnZW5kJ1xuICAgIF07XG5cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBjb250YWluaW5nIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgY29udmVydGVkIGludG8gZGJGb3JtYXQuXG4gICAgICovXG4gICAgcHJpdmF0ZSBjb252ZXJ0YWJsZVByb3BlcnRpZXMgPSBbXG4gICAgICAgICd0YXJnZXQnLFxuICAgICAgICAndmFsdWVzJyxcbiAgICAgICAgJ3N0YXJ0JyxcbiAgICAgICAgJ2VuZCdcbiAgICBdO1xuXG4gICAgY29uc3RydWN0b3IgKFxuICAgICAgICBwcm90ZWN0ZWQgc3lzdGVtQ29uZmlnOiBTeXN0ZW1Db25maWdTdG9yZSxcbiAgICAgICAgcHJvdGVjdGVkIG1ldGFkYXRhU3RvcmU6IE1ldGFkYXRhU3RvcmUsXG4gICAgICAgIHByb3RlY3RlZCBkYXRhVHlwZUZvcm1hdHRlcjogRGF0YVR5cGVGb3JtYXR0ZXJcbiAgICApIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZHMgYSBVUkwgcXVlcnktYmFzZWQgZmlsdGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZHVsZSAtIFRoZSBtb2R1bGUgbmFtZS5cbiAgICAgKiBAcGFyYW0ge1NhdmVkRmlsdGVyfSBkZWZhdWx0RmlsdGVyIC0gVGhlIGRlZmF1bHQgZmlsdGVyLlxuICAgICAqIEBwYXJhbSB7UGFyYW1zfSByYXdRdWVyeVBhcmFtcyAtIFRoZSByYXcgcXVlcnkgcGFyYW1ldGVycy5cbiAgICAgKiBAcmV0dXJucyB7U2F2ZWRGaWx0ZXJ8bnVsbH0gLSBUaGUgYnVpbHQgVVJMIHF1ZXJ5LWJhc2VkIGZpbHRlciwgb3IgbnVsbCBpZiBubyBmaWx0ZXIgY3JpdGVyaWEgYXJlIGZvdW5kLlxuICAgICAqL1xuICAgIHB1YmxpYyBidWlsZFVybFF1ZXJ5QmFzZWRGaWx0ZXIgKFxuICAgICAgICBtb2R1bGU6IHN0cmluZyxcbiAgICAgICAgZGVmYXVsdEZpbHRlcjogU2F2ZWRGaWx0ZXIsXG4gICAgICAgIHJhd1F1ZXJ5UGFyYW1zOiBQYXJhbXNcbiAgICApOiBTYXZlZEZpbHRlciB8IG51bGwge1xuICAgICAgICBjb25zdCBmaWx0ZXJGaWVsZERlZmluaXRpb25zID0gdGhpcy5tZXRhZGF0YVN0b3JlLmdldCgpLnJlY29yZFZpZXcudmFyZGVmcztcblxuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IE9iamVjdC5lbnRyaWVzKHJhd1F1ZXJ5UGFyYW1zKVxuICAgICAgICAgICAgLnJlZHVjZSgoYWNjLCBbcXVlcnlQYXJhbUtleSwgcXVlcnlQYXJhbVZhbF0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBbY2xlYW5RdWVyeVBhcmFtS2V5LCBjbGVhblF1ZXJ5UGFyYW1WYWxdID0gdGhpcy5jbGVhblF1ZXJ5UGFyYW0oW1xuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtS2V5LFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtVmFsXSk7XG4gICAgICAgICAgICAgICAgYWNjW2NsZWFuUXVlcnlQYXJhbUtleV0gPSBjbGVhblF1ZXJ5UGFyYW1WYWw7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICAgIH0sIHt9IGFzIFBhcmFtcyk7XG5cbiAgICAgICAgY29uc3QgZmlsdGVyQ3JpdGVyaWE6IFNlYXJjaENyaXRlcmlhID0gdGhpcy5nZXRRdWVyeUZpbHRlckNyaXRlcmlhKFxuICAgICAgICAgICAgZmlsdGVyRmllbGREZWZpbml0aW9ucyxcbiAgICAgICAgICAgIG1vZHVsZSxcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKGlzRW1wdHkoZmlsdGVyQ3JpdGVyaWEuZmlsdGVycykpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGtleTogJ2RlZmF1bHQnLFxuICAgICAgICAgICAgc2VhcmNoTW9kdWxlOiBtb2R1bGUsXG4gICAgICAgICAgICBtb2R1bGU6ICdzYXZlZC1zZWFyY2gnLFxuICAgICAgICAgICAgY3JpdGVyaWE6IGZpbHRlckNyaXRlcmlhXG4gICAgICAgIH0gYXMgU2F2ZWRGaWx0ZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIHRoZSBxdWVyeSBmaWx0ZXIgY3JpdGVyaWEgYmFzZWQgb24gdGhlIHByb3ZpZGVkIGZpZWxkIGRlZmluaXRpb25zIG1hcCwgbW9kdWxlLCBhbmQgcXVlcnkgcGFyYW1ldGVycy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RmllbGREZWZpbml0aW9uTWFwfSBmaWVsZERlZmluaXRpb25NYXAgLSBUaGUgZmllbGQgZGVmaW5pdGlvbiBtYXAuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1vZHVsZSAtIFRoZSBtb2R1bGUgbmFtZS5cbiAgICAgKiBAcGFyYW0ge1BhcmFtc30gcXVlcnlQYXJhbXMgLSBUaGUgcXVlcnkgcGFyYW1ldGVycy5cbiAgICAgKiBAcmV0dXJucyB7U2VhcmNoQ3JpdGVyaWF9IC0gVGhlIGdlbmVyYXRlZCBzZWFyY2ggY3JpdGVyaWEuXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRRdWVyeUZpbHRlckNyaXRlcmlhIChcbiAgICAgICAgZmllbGREZWZpbml0aW9uTWFwOiBGaWVsZERlZmluaXRpb25NYXAsXG4gICAgICAgIG1vZHVsZTogc3RyaW5nLFxuICAgICAgICBxdWVyeVBhcmFtczogUGFyYW1zXG4gICAgKTogU2VhcmNoQ3JpdGVyaWEge1xuICAgICAgICBjb25zdCBjcml0ZXJpYTogU2VhcmNoQ3JpdGVyaWEgPSB7XG4gICAgICAgICAgICBuYW1lOiAnZGVmYXVsdCcsXG4gICAgICAgICAgICBmaWx0ZXJzOiB7fVxuICAgICAgICB9IGFzIFNlYXJjaENyaXRlcmlhO1xuXG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zS2V5cyA9IE9iamVjdC5rZXlzKHF1ZXJ5UGFyYW1zKTtcbiAgICAgICAgY29uc3QgZmllbGREZWZpbml0aW9ucyA9IE9iamVjdC52YWx1ZXMoZmllbGREZWZpbml0aW9uTWFwKVxuICAgICAgICAgICAgLmZpbHRlcigoeyBuYW1lIH0pID0+IHF1ZXJ5UGFyYW1zS2V5cy5zb21lKHFQS2V5ID0+IHFQS2V5LmluY2x1ZGVzKG5hbWUpKSk7XG5cbiAgICAgICAgY29uc3QgbGlzdHZpZXdVcmxRdWVyeUZpbHRlck1hcHBpbmcgPSB0aGlzLnN5c3RlbUNvbmZpZy5nZXRDb25maWdWYWx1ZShcbiAgICAgICAgICAgICdsaXN0dmlld191cmxfcXVlcnlfZmlsdGVyX21hcHBpbmcnXG4gICAgICAgICkgYXMgRG91YmxlTmVzdGVkR2VuZXJpY01hcDxzdHJpbmc+O1xuICAgICAgICBjb25zdCBsaXN0dmlld1VybFF1ZXJ5RmlsdGVyTWFwcGluZ0VudHJpZXMgPSBPYmplY3QuZW50cmllcyhsaXN0dmlld1VybFF1ZXJ5RmlsdGVyTWFwcGluZyk7XG4gICAgICAgIGxpc3R2aWV3VXJsUXVlcnlGaWx0ZXJNYXBwaW5nRW50cmllcy5wdXNoKFsnJywge31dKTtcblxuICAgICAgICBsZXQgc2VhcmNoVHlwZTtcbiAgICAgICAgc3dpdGNoIChxdWVyeVBhcmFtc1snc2VhcmNoRm9ybVRhYiddKSB7XG4gICAgICAgICAgICBjYXNlICdiYXNpY19zZWFyY2gnOlxuICAgICAgICAgICAgICAgIHNlYXJjaFR5cGUgPSAnYmFzaWMnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYWR2YW5jZWRfc2VhcmNoJzpcbiAgICAgICAgICAgICAgICBzZWFyY2hUeXBlID0gJ2FkdmFuY2VkJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgc2VhcmNoVHlwZSA9ICdhZHZhbmNlZCc7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IGZpZWxkRGVmaW5pdGlvbiBvZiBmaWVsZERlZmluaXRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZEZpbHRlck5hbWUgPSBmaWVsZERlZmluaXRpb24ubmFtZTtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkRmlsdGVyS2V5cyA9IFtcbiAgICAgICAgICAgICAgICBmaWVsZEZpbHRlck5hbWUsXG4gICAgICAgICAgICAgICAgYCR7ZmllbGRGaWx0ZXJOYW1lfV8ke3NlYXJjaFR5cGV9YFxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBbcXVlcnlGaWx0ZXJPcGVyYXRvcktleVRlbXBsYXRlLCBxdWVyeUZpbHRlck9wZXJhdG9yUGFyYW1zTWFwXSBvZiBsaXN0dmlld1VybFF1ZXJ5RmlsdGVyTWFwcGluZ0VudHJpZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzRW1wdHkoY3JpdGVyaWEuZmlsdGVyc1tmaWVsZEZpbHRlck5hbWVdKSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGZpZWxkRmlsdGVyS2V5IG9mIGZpZWxkRmlsdGVyS2V5cykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzRW1wdHkoY3JpdGVyaWEuZmlsdGVyc1tmaWVsZEZpbHRlck5hbWVdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyID0gdGhpcy5idWlsZFNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZEZpbHRlck5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZERlZmluaXRpb24udHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRGaWx0ZXJLZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeUZpbHRlck9wZXJhdG9yS2V5VGVtcGxhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeUZpbHRlck9wZXJhdG9yUGFyYW1zTWFwXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzRW1wdHkoc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udmVydGFibGVQcm9wZXJ0aWVzLmZvckVhY2goKGNvbnZlcnRhYmxlUHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXJbY29udmVydGFibGVQcm9wZXJ0eV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbnRlcm5hbEZvcm1hdFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0FycmF5KHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXJbY29udmVydGFibGVQcm9wZXJ0eV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVybmFsRm9ybWF0VmFsdWUgPSBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyW2NvbnZlcnRhYmxlUHJvcGVydHldLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3AgPT4gdGhpcy50b0ludGVybmFsRm9ybWF0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkRGVmaW5pdGlvbi50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVybmFsRm9ybWF0VmFsdWUgPSB0aGlzLnRvSW50ZXJuYWxGb3JtYXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZERlZmluaXRpb24udHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXJbY29udmVydGFibGVQcm9wZXJ0eV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyW2NvbnZlcnRhYmxlUHJvcGVydHldID0gaW50ZXJuYWxGb3JtYXRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNyaXRlcmlhLmZpbHRlcnNbZmllbGRGaWx0ZXJOYW1lXSA9IHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNyaXRlcmlhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkcyBhIHNlYXJjaCBjcml0ZXJpYSBmaWVsZCBmaWx0ZXIgb2JqZWN0IGJhc2VkIG9uIHRoZSBwcm92aWRlZCBwYXJhbWV0ZXJzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkRmlsdGVyTmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBmaWVsZCBmaWx0ZXIuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkRmlsdGVyRmllbGRUeXBlIC0gVGhlIHR5cGUgb2YgdGhlIGZpZWxkIGZpbHRlci5cbiAgICAgKiBAcGFyYW0ge1BhcmFtc30gcXVlcnlQYXJhbXMgLSBUaGUgcXVlcnkgcGFyYW1ldGVycy5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGRGaWx0ZXJLZXkgLSBUaGUga2V5IG9mIHRoZSBmaWVsZCBmaWx0ZXIgaW4gdGhlIHF1ZXJ5IHBhcmFtZXRlcnMuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5RmlsdGVyT3BlcmF0b3JLZXlUZW1wbGF0ZSAtIFRoZSB0ZW1wbGF0ZSBmb3IgdGhlIHF1ZXJ5IGZpbHRlciBvcGVyYXRvciBrZXkuXG4gICAgICogQHBhcmFtIHtOZXN0ZWRHZW5lcmljTWFwPHN0cmluZz59IHF1ZXJ5RmlsdGVyT3BlcmF0b3JQYXJhbXNNYXAgLSBUaGUgbWFwIG9mIHF1ZXJ5IGZpbHRlciBvcGVyYXRvciBrZXlzIHRvIHRoZWlyIHJlc3BlY3RpdmUgcGFyYW1ldGVyIG1hcHMuXG4gICAgICogQHJldHVybnMge1NlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIgfCBudWxsfSBUaGUgYnVpbHQgc2VhcmNoIGNyaXRlcmlhIGZpZWxkIGZpbHRlciBvYmplY3QuXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBidWlsZFNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIgKFxuICAgICAgICBmaWVsZEZpbHRlck5hbWU6IHN0cmluZyxcbiAgICAgICAgZmllbGRGaWx0ZXJGaWVsZFR5cGU6IHN0cmluZyxcbiAgICAgICAgcXVlcnlQYXJhbXM6IFBhcmFtcyxcbiAgICAgICAgZmllbGRGaWx0ZXJLZXk6IHN0cmluZyxcbiAgICAgICAgcXVlcnlGaWx0ZXJPcGVyYXRvcktleVRlbXBsYXRlOiBzdHJpbmcsXG4gICAgICAgIHF1ZXJ5RmlsdGVyT3BlcmF0b3JQYXJhbXNNYXA6IE5lc3RlZEdlbmVyaWNNYXA8c3RyaW5nPlxuICAgICk6IFNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIgfCBudWxsIHtcbiAgICAgICAgY29uc3Qgc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlciA9IHtcbiAgICAgICAgICAgIGZpZWxkOiBmaWVsZEZpbHRlck5hbWUsXG4gICAgICAgICAgICBmaWVsZFR5cGU6IGZpZWxkRmlsdGVyRmllbGRUeXBlLFxuICAgICAgICAgICAgb3BlcmF0b3I6ICc9JyxcbiAgICAgICAgICAgIHZhbHVlczogW11cbiAgICAgICAgfSBhcyBTZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyO1xuXG4gICAgICAgIGlmIChpc0VtcHR5KHF1ZXJ5RmlsdGVyT3BlcmF0b3JLZXlUZW1wbGF0ZSkgfHwgaXNFbXB0eShxdWVyeUZpbHRlck9wZXJhdG9yUGFyYW1zTWFwKSkge1xuICAgICAgICAgICAgY29uc3QgZmllbGRGaWx0ZXJWYWx1ZSA9IHRoaXMuZ2V0UXVlcnlQYXJhbVZhbHVlKFxuICAgICAgICAgICAgICAgIGZpZWxkRmlsdGVyS2V5LFxuICAgICAgICAgICAgICAgIGZpZWxkRmlsdGVyS2V5LFxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKGlzRW1wdHkoZmllbGRGaWx0ZXJWYWx1ZSkgJiYgIWlzRW1wdHlTdHJpbmcoZmllbGRGaWx0ZXJWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gaXNBcnJheShmaWVsZEZpbHRlclZhbHVlKVxuICAgICAgICAgICAgICAgID8gZmllbGRGaWx0ZXJWYWx1ZVxuICAgICAgICAgICAgICAgIDogW2ZpZWxkRmlsdGVyVmFsdWVdO1xuXG4gICAgICAgICAgICBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyLnZhbHVlcyA9IHZhbHVlcztcbiAgICAgICAgICAgIHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIudGFyZ2V0ID0gdmFsdWVzWzBdO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGVja0RhdGVTcGVjaWFsc09yUmV0dXJuKFxuICAgICAgICAgICAgICAgIHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIsXG4gICAgICAgICAgICAgICAgc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlci50YXJnZXRcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBxdWVyeUZpbHRlck9wZXJhdG9yS2V5ID0gdGhpcy5nZXRRdWVyeVBhcmFtVmFsdWUoXG4gICAgICAgICAgICBxdWVyeUZpbHRlck9wZXJhdG9yS2V5VGVtcGxhdGUsXG4gICAgICAgICAgICBmaWVsZEZpbHRlcktleSxcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLFxuICAgICAgICAgICAgeyBmb3JjZVNpbmdsZVN0cmluZzogdHJ1ZSB9XG4gICAgICAgICkgYXMgc3RyaW5nO1xuICAgICAgICBjb25zdCBxdWVyeUZpbHRlck9wZXJhdG9yUGFyYW1zID0gKFxuICAgICAgICAgICAgcXVlcnlGaWx0ZXJPcGVyYXRvclBhcmFtc01hcFtxdWVyeUZpbHRlck9wZXJhdG9yS2V5XSA/P1xuICAgICAgICAgICAgT2JqZWN0XG4gICAgICAgICAgICAgICAgLnZhbHVlcyhxdWVyeUZpbHRlck9wZXJhdG9yUGFyYW1zTWFwKVxuICAgICAgICAgICAgICAgIC5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IChcbiAgICAgICAgICAgICAgICAgICAgeyAuLi5wcmV2LCAuLi5jdXJyIH1cbiAgICAgICAgICAgICAgICApLCB7fSlcbiAgICAgICAgICAgID8/IHt9XG4gICAgICAgICkgYXMgR2VuZXJpY01hcDxzdHJpbmc+O1xuICAgICAgICBpZiAoaXNFbXB0eShxdWVyeUZpbHRlck9wZXJhdG9yUGFyYW1zKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmV0dXJuRW1wdHkgPSB0cnVlO1xuICAgICAgICBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyLm9wZXJhdG9yID0gcXVlcnlGaWx0ZXJPcGVyYXRvcktleTtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMocXVlcnlGaWx0ZXJPcGVyYXRvclBhcmFtcylcbiAgICAgICAgICAgIC5maWx0ZXIoKFtfLCBzZWFyY2hDcml0ZXJpYVByb3BlcnR5S2V5XSkgPT4gKFxuICAgICAgICAgICAgICAgIHR5cGVvZiBzZWFyY2hDcml0ZXJpYVByb3BlcnR5S2V5ID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgICYmIHRoaXMuYWxsb3dlZFByb3BlcnRpZXMuaW5jbHVkZXMoc2VhcmNoQ3JpdGVyaWFQcm9wZXJ0eUtleSlcbiAgICAgICAgICAgICkpXG4gICAgICAgICAgICAuZm9yRWFjaCgoW3NlYXJjaENyaXRlcmlhUHJvcGVydHlWYWx1ZVRlbXBsYXRlLCBzZWFyY2hDcml0ZXJpYVByb3BlcnR5S2V5XSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJhd1NlYXJjaENyaXRlcmlhUHJvcGVydHlWYWx1ZSA9IHRoaXMuZ2V0UXVlcnlQYXJhbVZhbHVlKFxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hDcml0ZXJpYVByb3BlcnR5VmFsdWVUZW1wbGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgZmllbGRGaWx0ZXJLZXksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGlmIChpc0VtcHR5KHJhd1NlYXJjaENyaXRlcmlhUHJvcGVydHlWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm5FbXB0eSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgbGV0IHNlYXJjaENyaXRlcmlhUHJvcGVydHlWYWx1ZSA9IHJhd1NlYXJjaENyaXRlcmlhUHJvcGVydHlWYWx1ZTtcblxuICAgICAgICAgICAgICAgIGlmIChzZWFyY2hDcml0ZXJpYVByb3BlcnR5S2V5ID09PSAndmFsdWVzJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzQXJyYXkoc2VhcmNoQ3JpdGVyaWFQcm9wZXJ0eVZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoQ3JpdGVyaWFQcm9wZXJ0eVZhbHVlID0gW3NlYXJjaENyaXRlcmlhUHJvcGVydHlWYWx1ZV07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyWyd0YXJnZXQnXSA9IHNlYXJjaENyaXRlcmlhUHJvcGVydHlWYWx1ZVswXTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlYXJjaENyaXRlcmlhUHJvcGVydHlLZXkgPT09ICd0YXJnZXQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0FycmF5KHNlYXJjaENyaXRlcmlhUHJvcGVydHlWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaENyaXRlcmlhUHJvcGVydHlWYWx1ZSA9IHNlYXJjaENyaXRlcmlhUHJvcGVydHlWYWx1ZVswXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXJbJ3ZhbHVlcyddID0gW3NlYXJjaENyaXRlcmlhUHJvcGVydHlWYWx1ZV0gYXMgc3RyaW5nW107XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlcltzZWFyY2hDcml0ZXJpYVByb3BlcnR5S2V5XSA9IHNlYXJjaENyaXRlcmlhUHJvcGVydHlWYWx1ZTtcblxuICAgICAgICAgICAgICAgIGlmICghaXNBcnJheShzZWFyY2hDcml0ZXJpYVByb3BlcnR5VmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tEYXRlU3BlY2lhbHNPclJldHVybihcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hDcml0ZXJpYVByb3BlcnR5VmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0b3I6IHF1ZXJ5RmlsdGVyT3BlcmF0b3JLZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBzZWFyY2hDcml0ZXJpYVByb3BlcnR5S2V5XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuICFyZXR1cm5FbXB0eSA/IHRoaXMuY2hlY2tGb3JNaXNzaW5nT3BlcmF0b3Ioc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlcikgOiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyB0aGUgdmFsdWUgb2YgYSBxdWVyeSBwYXJhbWV0ZXIgYmFzZWQgb24gdGhlIHByb3ZpZGVkIHF1ZXJ5UGFyYW1LZXlUZW1wbGF0ZSxcbiAgICAgKiBmaWVsZEZpbHRlcktleSwgYW5kIHF1ZXJ5UGFyYW1zLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5UGFyYW1LZXlUZW1wbGF0ZSAtIFRoZSB0ZW1wbGF0ZSBmb3IgdGhlIHF1ZXJ5IHBhcmFtZXRlciBrZXksIHdpdGggXCJ7ZmllbGR9XCIgYXMgYSBwbGFjZWhvbGRlciBmb3IgZmllbGRGaWx0ZXJLZXkuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkRmlsdGVyS2V5IC0gVGhlIGZpZWxkIGZpbHRlciBrZXkgdXNlZCB0byByZXBsYWNlIHRoZSBcIntmaWVsZH1cIiBwbGFjZWhvbGRlciBpbiBxdWVyeVBhcmFtS2V5VGVtcGxhdGUuXG4gICAgICogQHBhcmFtIHtQYXJhbXN9IHF1ZXJ5UGFyYW1zIC0gVGhlIG9iamVjdCBjb250YWluaW5nIHRoZSBxdWVyeSBwYXJhbWV0ZXJzLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gT3B0aW9uYWwgcGFyYW1ldGVycyB0byBjdXN0b21pemUgdGhlIGJlaGF2aW9yIG9mIHRoZSBtZXRob2QuXG4gICAgICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLmZvcmNlU2luZ2xlU3RyaW5nIC0gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHJlc3VsdCBzaG91bGQgYWx3YXlzIGJlIGEgc2luZ2xlIHN0cmluZyB2YWx1ZS5cbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfHN0cmluZ1tdfSAtIFRoZSB2YWx1ZSBvZiB0aGUgcXVlcnkgcGFyYW1ldGVyLiBJZiBmb3JjZVNpbmdsZVN0cmluZyBpcyBmYWxzZSwgaXQgd2lsbCBiZSBlaXRoZXIgYSBzdHJpbmcgb3IgYW4gYXJyYXkgb2Ygc3RyaW5ncy5cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldFF1ZXJ5UGFyYW1WYWx1ZSAoXG4gICAgICAgIHF1ZXJ5UGFyYW1LZXlUZW1wbGF0ZTogc3RyaW5nLFxuICAgICAgICBmaWVsZEZpbHRlcktleTogc3RyaW5nLFxuICAgICAgICBxdWVyeVBhcmFtczogUGFyYW1zLFxuICAgICAgICB7IGZvcmNlU2luZ2xlU3RyaW5nID0gZmFsc2UgfSA9IHt9XG4gICAgKTogc3RyaW5nIHwgc3RyaW5nW10gfCBudWxsIHtcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbUtleSA9IHF1ZXJ5UGFyYW1LZXlUZW1wbGF0ZS5yZXBsYWNlKFxuICAgICAgICAgICAgJ3tmaWVsZH0nLFxuICAgICAgICAgICAgZmllbGRGaWx0ZXJLZXlcbiAgICAgICAgKSA/PyAnJztcblxuICAgICAgICBsZXQgcXVlcnlQYXJhbVZhbHVlID0gcXVlcnlQYXJhbXNbcXVlcnlQYXJhbUtleV07XG5cbiAgICAgICAgaWYgKCFxdWVyeVBhcmFtVmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzQXJyYXkocXVlcnlQYXJhbVZhbHVlKSkge1xuICAgICAgICAgICAgcXVlcnlQYXJhbVZhbHVlID0gcXVlcnlQYXJhbVZhbHVlLm1hcCh0aGlzLnRyYW5zZm9ybSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBxdWVyeVBhcmFtVmFsdWUgPSB0aGlzLnRyYW5zZm9ybShxdWVyeVBhcmFtVmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZvcmNlU2luZ2xlU3RyaW5nICYmIGlzQXJyYXkocXVlcnlQYXJhbVZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5UGFyYW1WYWx1ZVswXSA/PyAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBxdWVyeVBhcmFtVmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYW5zIHRoZSBxdWVyeSBwYXJhbWV0ZXIga2V5IGJ5IHJlbW92aW5nIHRoZSAnW10nIGJyYWNrZXRzIGlmIHByZXNlbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSAtIFRoZSBjbGVhbmVkIHF1ZXJ5IHBhcmFtZXRlciBrZXkuXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEBwYXJhbSBxdWVyeVBhcmFtXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGNsZWFuUXVlcnlQYXJhbSAocXVlcnlQYXJhbTogW3N0cmluZywgc3RyaW5nIHwgc3RyaW5nW11dKTogW3N0cmluZywgc3RyaW5nIHwgc3RyaW5nW11dIHtcbiAgICAgICAgbGV0IFtxdWVyeVBhcmFtS2V5LCBxdWVyeVBhcmFtVmFsXSA9IHF1ZXJ5UGFyYW07XG5cbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbUtleVJldmVyc2VkID0gcXVlcnlQYXJhbUtleS5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oJycpO1xuICAgICAgICBpZiAocXVlcnlQYXJhbUtleVJldmVyc2VkLmluZGV4T2YoJ11bJykgPT09IDAgJiYgdHlwZW9mIHF1ZXJ5UGFyYW1WYWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBxdWVyeVBhcmFtS2V5ID0gcXVlcnlQYXJhbUtleS5yZXBsYWNlKCdbXScsICcnKTtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1WYWwgPSBxdWVyeVBhcmFtVmFsLnNwbGl0KCcsJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW3F1ZXJ5UGFyYW1LZXksIHF1ZXJ5UGFyYW1WYWxdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiBnaXZlbiBmaWVsZEZpbHRlclZhbHVlIG1hdGNoZXMgTU9OVEhfWUVBUl9SRUdFWCBvciB5ZWFyUmVnZXggYW5kIHJldHVybnNcbiAgICAgKiBvdmVycmlkZXNTZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyIGlmIHRydWUsIGVsc2UgcmV0dXJucyBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyfSBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyIC0gVGhlIHNlYXJjaCBjcml0ZXJpYSBmaWVsZCBmaWx0ZXIuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkRmlsdGVyVmFsdWUgLSBUaGUgZmllbGQgZmlsdGVyIHZhbHVlLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5vcGVyYXRvcj0nPSddIC0gVGhlIHJhbmdlIG9wdGlvbi5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMua2V5PSd0YXJnZXQnXSAtIFRoZSBrZXkgb3B0aW9uLlxuICAgICAqIEByZXR1cm5zIHtTZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyfSAtIFRoZSB1cGRhdGVkIHNlYXJjaCBjcml0ZXJpYSBmaWVsZCBmaWx0ZXIuXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBjaGVja0RhdGVTcGVjaWFsc09yUmV0dXJuIChcbiAgICAgICAgc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlcjogU2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlcixcbiAgICAgICAgZmllbGRGaWx0ZXJWYWx1ZTogc3RyaW5nLFxuICAgICAgICB7IG9wZXJhdG9yID0gJz0nLCBrZXkgPSAndGFyZ2V0JyB9OiB7IG9wZXJhdG9yPzogc3RyaW5nLCBrZXk/OiBzdHJpbmcgfSA9IHt9XG4gICAgKTogU2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlciB7XG4gICAgICAgIGlmIChmaWVsZEZpbHRlclZhbHVlLm1hdGNoKE1PTlRIX1lFQVJfUkVHRVgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vdmVycmlkZXNTZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyKFxuICAgICAgICAgICAgICAgIHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIsXG4gICAgICAgICAgICAgICAgZmllbGRGaWx0ZXJWYWx1ZSxcbiAgICAgICAgICAgICAgICB7IHR5cGU6ICdtb250aCcsIG9wZXJhdG9yLCBrZXkgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmaWVsZEZpbHRlclZhbHVlLm1hdGNoKE1PTlRIX1JFR0VYKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3ZlcnJpZGVzU2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlcihcbiAgICAgICAgICAgICAgICBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyLFxuICAgICAgICAgICAgICAgIGZpZWxkRmlsdGVyVmFsdWUsXG4gICAgICAgICAgICAgICAgeyB0eXBlOiAneWVhcicsIG9wZXJhdG9yLCBrZXkgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlcyB0aGUgc2VhcmNoIGNyaXRlcmlhIGZpZWxkIGZpbHRlciBiYXNlZCBvbiB0aGUgcHJvdmlkZWQgcGFyYW1ldGVycy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlcn0gc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlciAtIFRoZSBvcmlnaW5hbCBzZWFyY2ggY3JpdGVyaWEgZmllbGQgZmlsdGVyLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZEZpbHRlclZhbHVlIC0gVGhlIHZhbHVlIG9mIHRoZSBmaWVsZCBmaWx0ZXIuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBUaGUgb3B0aW9ucyBmb3Igb3ZlcnJpZGluZyB0aGUgZmllbGQgZmlsdGVyLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnR5cGUgLSBUaGUgdHlwZSBvZiB0aGUgZmllbGQgZmlsdGVyLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5vcGVyYXRvcj0nZXF1YWwnXSAtIFRoZSBvcGVyYXRvciBmb3IgdGhlIGZpZWxkIGZpbHRlci5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMua2V5PSd0YXJnZXQnXSAtIFRoZSBrZXkgZm9yIHRoZSBmaWVsZCBmaWx0ZXIuXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEByZXR1cm5zIHtTZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyfSAtIFRoZSBvdmVycmlkZGVuIHNlYXJjaCBjcml0ZXJpYSBmaWVsZCBmaWx0ZXIuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlc1NlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIgKFxuICAgICAgICBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyOiBTZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyLFxuICAgICAgICBmaWVsZEZpbHRlclZhbHVlOiBzdHJpbmcsXG4gICAgICAgIHsgdHlwZSA9ICcnLCBvcGVyYXRvciA9ICdlcXVhbCcsIGtleSA9ICd0YXJnZXQnIH06IHtcbiAgICAgICAgICAgIHR5cGU6IHN0cmluZyxcbiAgICAgICAgICAgIG9wZXJhdG9yPzogc3RyaW5nLFxuICAgICAgICAgICAga2V5Pzogc3RyaW5nXG4gICAgICAgIH1cbiAgICApOiBTZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyIHtcbiAgICAgICAgbGV0IHBsdXNPYmplY3Q7XG4gICAgICAgIGxldCBmbXQ7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgICAgICAgICAgcGx1c09iamVjdCA9IHsgeWVhcjogMSB9O1xuICAgICAgICAgICAgICAgIGZtdCA9ICd5eXl5JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICAgICAgICBwbHVzT2JqZWN0ID0geyBtb250aDogMSB9O1xuICAgICAgICAgICAgICAgIGZtdCA9ICd5eXl5LU1NJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdGFydCA9IERhdGVUaW1lLmZyb21Gb3JtYXQoZmllbGRGaWx0ZXJWYWx1ZSwgZm10KTtcbiAgICAgICAgY29uc3QgZW5kID0gc3RhcnQucGx1cyhwbHVzT2JqZWN0KS5taW51cyh7IGRheTogMSB9KTtcblxuICAgICAgICBpZiAoa2V5ICE9PSAndGFyZ2V0Jykge1xuICAgICAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdzdGFydCc6XG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIuc3RhcnQgPSBzdGFydC50b0Zvcm1hdCgneXl5eS1NTS1kZCcpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyLmVuZCA9IGVuZC50b0Zvcm1hdCgneXl5eS1NTS1kZCcpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlci5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICAgICAgICBjYXNlICdncmVhdGVyX3RoYW4nOlxuICAgICAgICAgICAgY2FzZSAnZ3JlYXRlcl90aGFuX2VxdWFscyc6XG4gICAgICAgICAgICAgICAgc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlci5zdGFydCA9IHN0YXJ0LnRvRm9ybWF0KCd5eXl5LU1NLWRkJyk7XG4gICAgICAgICAgICAgICAgc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlci50YXJnZXQgPSBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyLnN0YXJ0O1xuICAgICAgICAgICAgICAgIHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIudmFsdWVzID0gW3NlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIudGFyZ2V0XTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2xlc3NfdGhhbic6XG4gICAgICAgICAgICBjYXNlICdsZXNzX3RoYW5fZXF1YWxzJzpcbiAgICAgICAgICAgICAgICBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyLmVuZCA9IGVuZC50b0Zvcm1hdCgneXl5eS1NTS1kZCcpO1xuICAgICAgICAgICAgICAgIHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIudGFyZ2V0ID0gc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlci5lbmQ7XG4gICAgICAgICAgICAgICAgc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlci52YWx1ZXMgPSBbc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlci50YXJnZXRdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbm90X2VxdWFsJzpcbiAgICAgICAgICAgICAgICBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyLnN0YXJ0ID0gc3RhcnQudG9Gb3JtYXQoJ3l5eXktTU0tZGQnKTtcbiAgICAgICAgICAgICAgICBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyLmVuZCA9IGVuZC50b0Zvcm1hdCgneXl5eS1NTS1kZCcpO1xuICAgICAgICAgICAgICAgIHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIudGFyZ2V0ID0gZmllbGRGaWx0ZXJWYWx1ZTtcbiAgICAgICAgICAgICAgICBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyLnZhbHVlcyA9IFtmaWVsZEZpbHRlclZhbHVlXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2VxdWFsJzpcbiAgICAgICAgICAgIGNhc2UgJ2JldHdlZW4nOlxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyLm9wZXJhdG9yID0gJ2JldHdlZW4nO1xuICAgICAgICAgICAgICAgIHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIuc3RhcnQgPSBzdGFydC50b0Zvcm1hdCgneXl5eS1NTS1kZCcpO1xuICAgICAgICAgICAgICAgIHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIuZW5kID0gZW5kLnRvRm9ybWF0KCd5eXl5LU1NLWRkJyk7XG4gICAgICAgICAgICAgICAgc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlci50YXJnZXQgPSAnJztcbiAgICAgICAgICAgICAgICBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyLnZhbHVlcyA9IFtdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgdGhlIGdpdmVuIHZhbHVlIHRvIHRoZSBpbnRlcm5hbCBmb3JtYXQgYmFzZWQgb24gdGhlIHNwZWNpZmllZCB0eXBlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSBUaGUgdHlwZSBvZiB2YWx1ZSB0byBjb252ZXJ0IHRvLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gLSBUaGUgY29udmVydGVkIHZhbHVlIGluIHRoZSBpbnRlcm5hbCBmb3JtYXQuXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCB0b0ludGVybmFsRm9ybWF0ICh0eXBlOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBpZiAodmFsdWUubWF0Y2goTU9OVEhfUkVHRVgpIHx8IHZhbHVlLm1hdGNoKE1PTlRIX1lFQVJfUkVHRVgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVR5cGVGb3JtYXR0ZXIudG9JbnRlcm5hbEZvcm1hdCh0eXBlLCB2YWx1ZSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRyYW5zZm9ybXMgdGhlIGdpdmVuIHZhbHVlIGZyb20gdXJsIHRvIGEgdmFsdWUgdW5kZXJzdGFuZGFibGUgYnkgYmFja2VuZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7YW55fSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBiZSB0cmFuc2Zvcm1lZC5cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgdHJhbnNmb3JtZWQgdmFsdWUuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHRyYW5zZm9ybSAodmFsdWU6IGFueSk6IHN0cmluZyB7XG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgJyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdfX1N1aXRlQ1JNRW1wdHlTdHJpbmdfXyc7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBjaGVja0Zvck1pc3NpbmdPcGVyYXRvciAoc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlcjogU2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlcik6IFNlYXJjaENyaXRlcmlhRmllbGRGaWx0ZXIge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhaXNFbXB0eShzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyLnN0YXJ0KVxuICAgICAgICAgICAgJiYgIWlzRW1wdHkoc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlci5lbmQpXG4gICAgICAgICkge1xuICAgICAgICAgICAgc2VhcmNoQ3JpdGVyaWFGaWVsZEZpbHRlci5vcGVyYXRvciA9ICdiZXR3ZWVuJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzZWFyY2hDcml0ZXJpYUZpZWxkRmlsdGVyO1xuICAgIH1cbn1cbiJdfQ==