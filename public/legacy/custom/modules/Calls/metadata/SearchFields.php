<?php
if (!defined('sugarEntry') || !sugarEntry) {
    die('Not A Valid Entry Point');
}
/**
 *
 * SugarCRM Community Edition is a customer relationship management program developed by
 * SugarCRM, Inc. Copyright (C) 2004-2013 SugarCRM Inc.
 *
 * SuiteCRM is an extension to SugarCRM Community Edition developed by SalesAgility Ltd.
 * Copyright (C) 2011 - 2018 SalesAgility Ltd.
 *
 * This program is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License version 3 as published by the
 * Free Software Foundation with the addition of the following permission added
 * to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK
 * IN WHICH THE COPYRIGHT IS OWNED BY SUGARCRM, SUGARCRM DISCLAIMS THE WARRANTY
 * OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along with
 * this program; if not, see http://www.gnu.org/licenses or write to the Free
 * Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA
 * 02110-1301 USA.
 *
 * You can contact SugarCRM, Inc. headquarters at 10050 North Wolfe Road,
 * SW2-130, Cupertino, CA 95014, USA. or at email address contact@sugarcrm.com.
 *
 * The interactive user interfaces in modified source and object code versions
 * of this program must display Appropriate Legal Notices, as required under
 * Section 5 of the GNU Affero General Public License version 3.
 *
 * In accordance with Section 7(b) of the GNU Affero General Public License version 3,
 * these Appropriate Legal Notices must retain the display of the "Powered by
 * SugarCRM" logo and "Supercharged by SuiteCRM" logo. If the display of the logos is not
 * reasonably feasible for technical reasons, the Appropriate Legal Notices must
 * display the words "Powered by SugarCRM" and "Supercharged by SuiteCRM".
 */
$searchFields['Calls'] = array(
  'name' =>
  array(
    'query_type' => 'default',
  ),
  'contact_name' =>
  array(
    'query_type' => 'default',
    'db_field' =>
    array(
      0 => 'contacts.first_name',
      1 => 'contacts.last_name',
    ),
  ),
  'date_start' =>
  array(
    'query_type' => 'default',
  ),
  'location' =>
  array(
    'query_type' => 'default',
  ),
  'current_user_only' =>
  array(
    'query_type' => 'default',
    'db_field' =>
    array(
      0 => 'assigned_user_id',
    ),
    'my_items' => true,
    'vname' => 'LBL_CURRENT_USER_FILTER',
    'type' => 'bool',
  ),
  'assigned_user_id' =>
  array(
    'query_type' => 'default',
  ),
  'status' =>
  array(
    'query_type' => 'default',
    'options' => 'call_status_dom',
    'template_var' => 'STATUS_FILTER',
  ),
  'open_only' =>
  array(
    'query_type' => 'default',
    'db_field' =>
    array(
      0 => 'status',
    ),
    'operator' => 'not in',
    'closed_values' =>
    array(
      0 => 'Held',
      1 => 'Not Held',
    ),
    'type' => 'bool',
  ),
  'range_date_entered' =>
  array(
    'query_type' => 'default',
    'enable_range_search' => true,
    'is_date_field' => true,
  ),
  'start_range_date_entered' =>
  array(
    'query_type' => 'default',
    'enable_range_search' => true,
    'is_date_field' => true,
  ),
  'end_range_date_entered' =>
  array(
    'query_type' => 'default',
    'enable_range_search' => true,
    'is_date_field' => true,
  ),
  'range_date_modified' =>
  array(
    'query_type' => 'default',
    'enable_range_search' => true,
    'is_date_field' => true,
  ),
  'start_range_date_modified' =>
  array(
    'query_type' => 'default',
    'enable_range_search' => true,
    'is_date_field' => true,
  ),
  'end_range_date_modified' =>
  array(
    'query_type' => 'default',
    'enable_range_search' => true,
    'is_date_field' => true,
  ),
  'range_date_start' =>
  array(
    'query_type' => 'default',
    'enable_range_search' => true,
    'is_date_field' => true,
  ),
  'start_range_date_start' =>
  array(
    'query_type' => 'default',
    'enable_range_search' => true,
    'is_date_field' => true,
  ),
  'end_range_date_start' =>
  array(
    'query_type' => 'default',
    'enable_range_search' => true,
    'is_date_field' => true,
  ),
  'range_date_end' =>
  array(
    'query_type' => 'default',
    'enable_range_search' => true,
    'is_date_field' => true,
  ),
  'start_range_date_end' =>
  array(
    'query_type' => 'default',
    'enable_range_search' => true,
    'is_date_field' => true,
  ),
  'end_range_date_end' =>
  array(
    'query_type' => 'default',
    'enable_range_search' => true,
    'is_date_field' => true,
  ),
  'restaurant_phone_c' =>
  array(
    'query_type' => 'default',
    'operator' => 'subquery',
    'db_field' => array('id'),
    'subquery' => "SELECT calls.id FROM calls LEFT JOIN accounts ON accounts.id = calls.parent_id AND calls.parent_type = 'Accounts' WHERE accounts.phone_office LIKE {0}",
  ),
  'restaurant_email_c' =>
  array(
    'query_type' => 'default',
    'operator' => 'subquery',
    'db_field' => array('id'),
    'subquery' => "SELECT calls.id FROM calls LEFT JOIN email_addr_bean_rel eabr ON eabr.bean_id = calls.parent_id AND eabr.bean_module = 'Accounts' AND eabr.deleted = 0 LEFT JOIN email_addresses ea ON ea.id = eabr.email_address_id AND ea.deleted = 0 WHERE calls.parent_type = 'Accounts' AND ea.email_address LIKE {0}",
  ),
  'restaurant_website_c' =>
  array(
    'query_type' => 'default',
    'operator' => 'subquery',
    'db_field' => array('id'),
    'subquery' => "SELECT calls.id FROM calls LEFT JOIN accounts ON accounts.id = calls.parent_id AND calls.parent_type = 'Accounts' WHERE accounts.website LIKE {0}",
  ),
    'favorites_only' => array(
        'query_type'=>'format',
        'operator' => 'subquery',
        'checked_only' => true,
        'subquery' => "SELECT favorites.parent_id FROM favorites
			                    WHERE favorites.deleted = 0
			                        and favorites.parent_type = 'Calls'
			                        and favorites.assigned_user_id = '{1}'",
        'db_field'=>array('id')),
);
