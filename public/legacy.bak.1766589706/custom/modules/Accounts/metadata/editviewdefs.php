<?php
$viewdefs ['Accounts'] =
array (
  'EditView' =>
  array (
    'templateMeta' =>
    array (
      'form' =>
      array (
        'buttons' =>
        array (
          0 => 'SAVE',
          1 => 'CANCEL',
        ),
      ),
      'maxColumns' => '2',
      'widths' =>
      array (
        0 =>
        array (
          'label' => '10',
          'field' => '30',
        ),
        1 =>
        array (
          'label' => '10',
          'field' => '30',
        ),
      ),

      // ✅ AJOUT DU JS
      'includes' =>
      array (
        0 =>
        array (
          'file' => 'modules/Accounts/Account.js',
        ),
        1 =>
        array (
          'file' => 'custom/modules/Accounts/js/create_action_button.js',
        ),
      ),

      'useTabs' => false,
      'tabDefs' =>
      array (
        'LBL_EDITVIEW_PANEL5' =>
        array (
          'newTab' => false,
          'panelDefault' => 'expanded',
        ),
        'LBL_EDITVIEW_PANEL4' =>
        array (
          'newTab' => false,
          'panelDefault' => 'expanded',
        ),
        'LBL_EDITVIEW_PANEL3' =>
        array (
          'newTab' => false,
          'panelDefault' => 'expanded',
        ),
        'LBL_ACCOUNT_INFORMATION' =>
        array (
          'newTab' => false,
          'panelDefault' => 'expanded',
        ),
        'LBL_EDITVIEW_PANEL1' =>
        array (
          'newTab' => false,
          'panelDefault' => 'expanded',
        ),
        'LBL_EDITVIEW_PANEL2' =>
        array (
          'newTab' => false,
          'panelDefault' => 'expanded',
        ),
      ),
    ),

    'panels' =>
    array (

      /* =======================
         STATUS CLIENT
         ======================= */
      'lbl_editview_panel5' =>
      array (
        0 =>
        array (
          0 =>
          array (
            'name' => 'status_du_restaurant_c',
            'studio' => 'visible',
            'label' => 'LBL_STATUS_DU_RESTAURANT',
          ),
          1 =>
          array (
            'name' => 'tables_equipees_alfred_c',
            'studio' => 'visible',
            'label' => 'LBL_TABLES_EQUIPEES_ALFRED',
          ),
        ),
      ),

      /* =======================
         SUIVI  ✅ BOUTON ICI
         ======================= */
      'lbl_editview_panel4' =>
      array (
        0 =>
        array (
          0 =>
          array (
            'name' => 'action_list_c',
            'studio' => 'visible',
            'label' => 'LBL_ACTION_LIST',
          ),
          1 =>
          array (
            'name' => 'next_action_date_c',
            'label' => 'LBL_NEXT_ACTION_DATE_C',
          ),
        ),
        1 =>
        array (
          0 =>
          array (
            'name' => 'assigned_user_name',
            'label' => 'LBL_ASSIGNED_TO',
          ),
          1 =>
          array (
            'name' => 'create_action_btn',
            'label' => ' ',
            'customCode' =>
              '<input type="button"
                class="button"
                value="Créer action"
                onclick="createActionFromRestaurant(\'{$fields.id.value}\', \'{$fields.name.value}\');" />',
          ),
        ),
      ),

      /* =======================
         QUALIFICATION
         ======================= */
      'lbl_editview_panel3' =>
      array (
        0 =>
        array (
          0 =>
          array (
            'name' => 'interest_level_c',
            'studio' => 'visible',
            'label' => 'LBL_INTEREST_LEVEL_C',
          ),
        ),
        1 =>
        array (
          0 =>
          array (
            'name' => 'google_form_completed_c',
            'label' => 'LBL_GOOGLE_FORM_COMPLETED_C',
          ),
          1 =>
          array (
            'name' => 'voice_interview_done_c',
            'label' => 'LBL_VOICE_INTERVIEW_DONE_C',
          ),
        ),
      ),

      /* =======================
         INFOS RESTAURANT
         ======================= */
      'lbl_account_information' =>
      array (
        0 =>
        array (
          0 =>
          array (
            'name' => 'name',
            'label' => 'LBL_NAME',
            'displayParams' =>
            array (
              'required' => true,
            ),
          ),
          1 =>
          array (
            'name' => 'phone_office',
            'label' => 'LBL_PHONE_OFFICE',
          ),
        ),
        1 =>
        array (
          0 =>
          array (
            'name' => 'website',
            'type' => 'link',
            'label' => 'LBL_WEBSITE',
          ),
          1 =>
          array (
            'name' => 'email1',
            'studio' => 'false',
            'label' => 'LBL_EMAIL',
          ),
        ),
        2 =>
        array (
          0 =>
          array (
            'name' => 'instagram_c',
            'label' => 'LBL_INSTAGRAM',
          ),
          1 =>
          array (
            'name' => 'nomgerant_c',
            'label' => 'LBL_NOMGERANT',
          ),
        ),
        3 =>
        array (
          0 =>
          array (
            'name' => 'type_etablissement_c',
            'studio' => 'visible',
            'label' => 'LBL_TYPE_ETABLISSEMENT_C',
          ),
          1 =>
          array (
            'name' => 'zone_commerciale_c',
            'studio' => 'visible',
            'label' => 'LBL_ZONE_COMMERCIALE_C',
          ),
        ),
        4 =>
        array (
          0 =>
          array (
            'name' => 'description',
            'label' => 'LBL_DESCRIPTION',
          ),
        ),
        5 =>
        array (
          0 =>
          array (
            'name' => 'jjwg_maps_address_c',
            'label' => 'LBL_JJWG_MAPS_ADDRESS',
          ),
        ),
      ),

      'lbl_editview_panel1' =>
      array (
        0 =>
        array (
          0 =>
          array (
            'name' => 'nb_tables_range_list_c',
            'studio' => 'visible',
            'label' => 'LBL_NB_TABLES_RANGE_LIST',
          ),
          1 =>
          array (
            'name' => 'ticket_moyen_range_c',
            'studio' => 'visible',
            'label' => 'LBL_TICKET_MOYEN_RANGE_C',
          ),
        ),
        1 =>
        array (
          0 =>
          array (
            'name' => 'google_reviews_range_list_c',
            'studio' => 'visible',
            'label' => 'LBL_GOOGLE_REVIEWS_RANGE_LIST',
          ),
          1 =>
          array (
            'name' => 'google_rating_range_list_c',
            'studio' => 'visible',
            'label' => 'LBL_GOOGLE_RATING_RANGE_LIST',
          ),
        ),
      ),

      'lbl_editview_panel2' =>
      array (
        0 =>
        array (
          0 =>
          array (
            'name' => 'online_menu_url_c',
            'label' => 'LBL_ONLINE_MENU_URL_C',
          ),
          1 =>
          array (
            'name' => 'reservation_c',
            'label' => 'LBL_RESERVATION',
          ),
        ),
      ),
    ),
  ),
);
?>
 
