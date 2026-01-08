<?php
if (!defined('sugarEntry') || !sugarEntry) {
    die('Not A Valid Entry Point');
}

$popupMeta = [
    'moduleMain' => 'Call',
    'varName' => 'CALL',
    'orderBy' => 'name',
    'whereClauses' => [
        'name' => 'calls.name',
        'status' => 'calls.status',
        'parent_name' => 'calls.parent_name',
        'date_start' => 'calls.date_start',
        'assigned_user_id' => 'calls.assigned_user_id',
        'restaurant_phone_c' => 'calls.id',
        'restaurant_email_c' => 'calls.id',
        'restaurant_website_c' => 'calls.id',
    ],
    'searchInputs' => [
        'name',
        'status',
        'parent_name',
        'date_start',
        'assigned_user_id',
        'restaurant_phone_c',
        'restaurant_email_c',
        'restaurant_website_c',
    ],
    'searchdefs' => [
        'name' => [
            'name' => 'name',
            'width' => '20%',
        ],
        'status' => [
            'name' => 'status',
            'width' => '10%',
        ],
        'parent_name' => [
            'type' => 'parent',
            'label' => 'LBL_LIST_RELATED_TO',
            'width' => '10%',
            'name' => 'parent_name',
        ],
        'date_start' => [
            'type' => 'datetimecombo',
            'label' => 'LBL_DATE',
            'width' => '10%',
            'name' => 'date_start',
        ],
        'assigned_user_id' => [
            'name' => 'assigned_user_id',
            'label' => 'LBL_ASSIGNED_TO',
            'type' => 'enum',
            'function' => [
                'name' => 'get_user_array',
                'params' => [0 => false],
            ],
            'width' => '10%',
        ],
        'restaurant_phone_c' => [
            'name' => 'restaurant_phone_c',
            'label' => 'LBL_RESTAURANT_PHONE',
            'type' => 'varchar',
            'width' => '10%',
        ],
        'restaurant_email_c' => [
            'name' => 'restaurant_email_c',
            'label' => 'LBL_RESTAURANT_EMAIL',
            'type' => 'varchar',
            'width' => '10%',
        ],
        'restaurant_website_c' => [
            'name' => 'restaurant_website_c',
            'label' => 'LBL_RESTAURANT_WEBSITE',
            'type' => 'varchar',
            'width' => '10%',
        ],
    ],
    'listviewdefs' => [
        'NAME' => [
            'width' => '30%',
            'label' => 'LBL_LIST_SUBJECT',
            'link' => true,
            'default' => true,
            'name' => 'name',
        ],
        'PARENT_NAME' => [
            'width' => '15%',
            'label' => 'LBL_LIST_RELATED_TO',
            'dynamic_module' => 'PARENT_TYPE',
            'id' => 'PARENT_ID',
            'link' => true,
            'default' => true,
            'sortable' => false,
            'ACLTag' => 'PARENT',
            'related_fields' => ['parent_id', 'parent_type'],
        ],
        'DATE_START' => [
            'width' => '10%',
            'label' => 'LBL_DATE',
            'default' => true,
            'related_fields' => ['time_start'],
        ],
        'RESTAURANT_PHONE_C' => [
            'width' => '10%',
            'label' => 'LBL_RESTAURANT_PHONE',
            'default' => true,
            'sortable' => false,
        ],
        'RESTAURANT_EMAIL_C' => [
            'width' => '15%',
            'label' => 'LBL_RESTAURANT_EMAIL',
            'default' => true,
            'sortable' => false,
            'customCode' => '{if $fields.restaurant_email_c.value}<a href="mailto:{$fields.restaurant_email_c.value|escape:\'url\'}">{$fields.restaurant_email_c.value|escape}</a>{/if}',
        ],
        'RESTAURANT_WEBSITE_C' => [
            'width' => '15%',
            'label' => 'LBL_RESTAURANT_WEBSITE',
            'default' => true,
            'sortable' => false,
            'customCode' => '{if $fields.restaurant_website_c.value}<a href="{$fields.restaurant_website_c.value|escape:\'url\'}" target="_blank" rel="noopener">{$fields.restaurant_website_c.value|escape}</a>{/if}',
        ],
        'ASSIGNED_USER_NAME' => [
            'width' => '8%',
            'label' => 'LBL_ASSIGNED_TO',
            'default' => true,
            'name' => 'assigned_user_name',
        ],
    ],
];
