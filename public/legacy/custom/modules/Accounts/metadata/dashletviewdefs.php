<?php
$dashletData['AccountsDashlet']['searchFields'] = array (
  'status_du_restaurant_c' => 
  array (
    'default' => '',
  ),
  'interest_level_c' => 
  array (
    'default' => '',
  ),
  'next_action_date_c' => 
  array (
    'default' => '',
  ),
  'action_list_c' => 
  array (
    'default' => '',
  ),
  'assigned_user_id' => 
  array (
    'default' => '',
  ),
  'tables_equipees_alfred_c' => 
  array (
    'default' => '',
  ),
  'google_form_completed_c' => 
  array (
    'default' => '',
  ),
  'instagram_c' => 
  array (
    'default' => '',
  ),
  'voice_interview_done_c' => 
  array (
    'default' => '',
  ),
  'email1' => 
  array (
    'default' => '',
  ),
  'phone_office' => 
  array (
    'default' => '',
  ),
  'website' => 
  array (
    'default' => '',
  ),
  'online_menu_url_c' => 
  array (
    'default' => '',
  ),
  'google_reviews_range_list_c' => 
  array (
    'default' => '',
  ),
  'google_rating_range_list_c' => 
  array (
    'default' => '',
  ),
  'ticket_moyen_range_c' => 
  array (
    'default' => '',
  ),
  'nb_tables_range_list_c' => 
  array (
    'default' => '',
  ),
  'reservation_c' => 
  array (
    'default' => '',
  ),
  'nomgerant_c' => 
  array (
    'default' => '',
  ),
  'zone_commerciale_c' => 
  array (
    'default' => '',
  ),
);
$dashletData['AccountsDashlet']['columns'] = array (
  'name' => 
  array (
    'width' => '40%',
    'label' => 'LBL_LIST_ACCOUNT_NAME',
    'link' => true,
    'default' => true,
    'name' => 'name',
  ),
  'phone_office' => 
  array (
    'width' => '15%',
    'label' => 'LBL_LIST_PHONE',
    'default' => true,
    'name' => 'phone_office',
  ),
  'interest_level_c' => 
  array (
    'type' => 'enum',
    'default' => true,
    'studio' => 'visible',
    'label' => 'LBL_INTEREST_LEVEL_C',
    'width' => '10%',
    'name' => 'interest_level_c',
  ),
  'status_du_restaurant_c' => 
  array (
    'type' => 'enum',
    'default' => true,
    'studio' => 'visible',
    'label' => 'LBL_STATUS_DU_RESTAURANT',
    'width' => '10%',
    'name' => 'status_du_restaurant_c',
  ),
  'next_action_date_c' => 
  array (
    'type' => 'datetimecombo',
    'default' => true,
    'label' => 'LBL_NEXT_ACTION_DATE_C',
    'width' => '10%',
    'name' => 'next_action_date_c',
  ),
  'action_list_c' => 
  array (
    'type' => 'enum',
    'default' => true,
    'studio' => 'visible',
    'label' => 'LBL_ACTION_LIST',
    'width' => '10%',
    'name' => 'action_list_c',
  ),
  'email1' => 
  array (
    'width' => '8%',
    'label' => 'LBL_EMAIL_ADDRESS_PRIMARY',
    'name' => 'email1',
    'default' => false,
  ),
  'assigned_user_name' => 
  array (
    'width' => '8%',
    'label' => 'LBL_LIST_ASSIGNED_USER',
    'name' => 'assigned_user_name',
    'default' => false,
  ),
  'account_type' => 
  array (
    'type' => 'enum',
    'label' => 'LBL_TYPE',
    'width' => '10%',
    'default' => false,
    'name' => 'account_type',
  ),
  'website' => 
  array (
    'width' => '8%',
    'label' => 'LBL_WEBSITE',
    'default' => false,
    'name' => 'website',
  ),
  'jjwg_maps_address_c' => 
  array (
    'type' => 'varchar',
    'default' => false,
    'label' => 'LBL_JJWG_MAPS_ADDRESS',
    'width' => '10%',
    'name' => 'jjwg_maps_address_c',
  ),
  'tables_equipees_alfred_c' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_TABLES_EQUIPEES_ALFRED',
    'width' => '10%',
    'name' => 'tables_equipees_alfred_c',
  ),
  'reservation_c' => 
  array (
    'type' => 'varchar',
    'default' => false,
    'label' => 'LBL_RESERVATION',
    'width' => '10%',
    'name' => 'reservation_c',
  ),
  'nomgerant_c' => 
  array (
    'type' => 'varchar',
    'default' => false,
    'label' => 'LBL_NOMGERANT',
    'width' => '10%',
    'name' => 'nomgerant_c',
  ),
  'online_menu_url_c' => 
  array (
    'type' => 'url',
    'default' => false,
    'label' => 'LBL_ONLINE_MENU_URL_C',
    'width' => '10%',
    'name' => 'online_menu_url_c',
  ),
  'google_reviews_range_list_c' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_GOOGLE_REVIEWS_RANGE_LIST',
    'width' => '10%',
    'name' => 'google_reviews_range_list_c',
  ),
  'google_rating_range_list_c' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_GOOGLE_RATING_RANGE_LIST',
    'width' => '10%',
    'name' => 'google_rating_range_list_c',
  ),
  'ticket_moyen_range_c' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_TICKET_MOYEN_RANGE_C',
    'width' => '10%',
    'name' => 'ticket_moyen_range_c',
  ),
  'nb_tables_range_list_c' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_NB_TABLES_RANGE_LIST',
    'width' => '10%',
    'name' => 'nb_tables_range_list_c',
  ),
  'voice_interview_done_c' => 
  array (
    'type' => 'bool',
    'default' => false,
    'label' => 'LBL_VOICE_INTERVIEW_DONE_C',
    'width' => '10%',
    'name' => 'voice_interview_done_c',
  ),
  'type_etablissement_c' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_TYPE_ETABLISSEMENT_C',
    'width' => '10%',
    'name' => 'type_etablissement_c',
  ),
  'zone_commerciale_c' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_ZONE_COMMERCIALE_C',
    'width' => '10%',
    'name' => 'zone_commerciale_c',
  ),
  'instagram_c' => 
  array (
    'type' => 'varchar',
    'default' => false,
    'label' => 'LBL_INSTAGRAM',
    'width' => '10%',
    'name' => 'instagram_c',
  ),
  'tables_equipees_c' => 
  array (
    'type' => 'enum',
    'default' => false,
    'studio' => 'visible',
    'label' => 'LBL_TABLES_EQUIPEES',
    'width' => '10%',
    'name' => 'tables_equipees_c',
  ),
  'google_form_completed_c' => 
  array (
    'type' => 'bool',
    'default' => false,
    'label' => 'LBL_GOOGLE_FORM_COMPLETED_C',
    'width' => '10%',
    'name' => 'google_form_completed_c',
  ),
);
