<?php
$viewdefs['Accounts'] = [
    'EditView' => [
        'templateMeta' => [
            'form' => [
                'buttons' => ['SAVE', 'CANCEL'],
            ],
            'maxColumns' => '2',
            'widths' => [
                ['label' => '10', 'field' => '30'],
                ['label' => '10', 'field' => '30'],
            ],
            'useTabs' => false,
            'tabDefs' => [
                'LBL_EDITVIEW_PANEL5' => ['newTab' => false, 'panelDefault' => 'expanded'],
                'LBL_EDITVIEW_PANEL4' => ['newTab' => false, 'panelDefault' => 'expanded'],
                'LBL_EDITVIEW_PANEL3' => ['newTab' => false, 'panelDefault' => 'expanded'],
                'LBL_ACCOUNT_INFORMATION' => ['newTab' => false, 'panelDefault' => 'expanded'],
                'LBL_EDITVIEW_PANEL1' => ['newTab' => false, 'panelDefault' => 'expanded'],
            ],
        ],
        'panels' => [
            // STATUS CLIENT
            'lbl_editview_panel5' => [
                [
                    ['name' => 'status_du_restaurant_c', 'label' => 'LBL_STATUS_DU_RESTAURANT'],
                    ['name' => 'tables_equipees_alfred_c', 'label' => 'LBL_TABLES_EQUIPEES_ALFRED'],
                ],
            ],
            // SUIVI
            'lbl_editview_panel4' => [
                [
                    ['name' => 'action_list_c', 'label' => 'LBL_ACTION_LIST'],
                    ['name' => 'next_action_date_c', 'label' => 'LBL_NEXT_ACTION_DATE_C'],
                ],
                [
                    ['name' => 'assigned_user_name', 'label' => 'LBL_ASSIGNED_TO'],
                ],
            ],
            // QUALIFICATION
            'lbl_editview_panel3' => [
                [
                    ['name' => 'interest_level_c', 'label' => 'LBL_INTEREST_LEVEL_C'],
                    ['name' => 'google_form_completed_c', 'label' => 'LBL_GOOGLE_FORM_COMPLETED_C'],
                ],
                [
                    ['name' => 'voice_interview_done_c', 'label' => 'LBL_VOICE_INTERVIEW_DONE_C'],
                ],
            ],
            // OVERVIEW
            'lbl_account_information' => [
                [
                    ['name' => 'name', 'label' => 'LBL_NAME', 'displayParams' => ['required' => true]],
                    ['name' => 'type_etablissement_c', 'label' => 'LBL_TYPE_ETABLISSEMENT_C'],
                ],
                [
                    ['name' => 'zone_commerciale_c', 'label' => 'LBL_ZONE_COMMERCIALE_C'],
                ],
            ],
            // SNAPSHOT DU RESTO
            'lbl_editview_panel1' => [
                [
                    ['name' => 'nb_tables_range_list_c', 'label' => 'LBL_NB_TABLES_RANGE_LIST'],
                    ['name' => 'ticket_moyen_range_c', 'label' => 'LBL_TICKET_MOYEN_RANGE_C'],
                ],
                [
                    ['name' => 'google_reviews_range_list_c', 'label' => 'LBL_GOOGLE_REVIEWS_RANGE_LIST'],
                    ['name' => 'google_rating_range_list_c', 'label' => 'LBL_GOOGLE_RATING_RANGE_LIST'],
                ],
            ],
        ],
    ],
];
