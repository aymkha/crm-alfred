<?php

if (!defined('sugarEntry') || !sugarEntry) {
    die('Not A Valid Entry Point');
}

$hook_version = 1;
$hook_array = [];

$hook_array['before_save'][] = [
    1,
    'Populate default fields from related Account',
    'custom/modules/Calls/CallActionDefaults.php',
    'CallActionDefaults',
    'populateFromAccount',
];

$hook_array['after_retrieve'][] = [
    1,
    'Load restaurant contact details from related Account',
    'custom/modules/Calls/CallRestaurantInfo.php',
    'CallRestaurantInfo',
    'addRestaurantContactInfo',
];
