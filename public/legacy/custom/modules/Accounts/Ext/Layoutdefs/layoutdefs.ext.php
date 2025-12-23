<?php 
 //WARNING: The contents of this file are auto-generated


// File: public/legacy/custom/Extension/modules/Accounts/Ext/Layoutdefs/calls_subpanel.php
// Objectif : ajouter un bouton "Créer action" dans le subpanel Calls (Actions) depuis la fiche Restaurant (Accounts)

$layout_defs['Accounts']['subpanel_setup']['calls'] = array(
    'order' => 30,
    'module' => 'Calls',
    'subpanel_name' => 'default',
    'sort_order' => 'desc',
    'sort_by' => 'date_start',
    'title_key' => 'LBL_CALLS_SUBPANEL_TITLE',
    'get_subpanel_data' => 'calls',

    'top_buttons' => array(
        // ✅ Ton bouton custom (crée une Call pré-remplie depuis action_list_c + next_action_date_c)
        array(
            'widget_class' => 'SubPanelTopCreateActionFromRestaurantButton',
        ),

        // Boutons standard
        array(
            'widget_class' => 'SubPanelTopCreateButton',
        ),
        array(
            'widget_class' => 'SubPanelTopSelectButton',
            'mode' => 'MultiSelect',
        ),
    ),
);


?>