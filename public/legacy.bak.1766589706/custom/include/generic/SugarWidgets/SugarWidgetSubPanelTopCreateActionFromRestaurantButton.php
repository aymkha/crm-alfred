<?php
// File: public/legacy/custom/include/generic/SugarWidgets/SugarWidgetSubPanelTopCreateActionFromRestaurantButton.php

require_once('include/generic/SugarWidgets/SugarWidgetSubPanelTopButton.php');

class SugarWidgetSubPanelTopCreateActionFromRestaurantButton extends SugarWidgetSubPanelTopButton
{
    public function display($defines, $additionalFormFields = null)
    {
        // On est sur Accounts (Restaurants)
        $accountId   = isset($_REQUEST['record']) ? $_REQUEST['record'] : '';
        $accountName = isset($defines['focus']->name) ? $defines['focus']->name : '';

        // Bouton avec JS: lit les champs du form (DetailView/EditView) et construit l'URL de création de Call
        $button = <<<HTML
<input
  type="button"
  class="button"
  title="Créer action"
  value="Créer action"
  onclick="(function(){
      var form = document.forms['DetailView'] || document.forms['EditView'];
      if(!form){ alert('Formulaire introuvable.'); return; }

      // Champs sur la fiche Restaurant (Accounts)
      var actionListEl = form.elements['action_list_c'];
      var nextDateEl   = form.elements['next_action_date_c'];
      var nextActionEl = form.elements['next_action_c'];

      var actionLabel = '';
      var actionValue = '';
      if(actionListEl){
        actionValue = actionListEl.value || '';
        // label lisible (texte du dropdown)
        if(actionListEl.options && actionListEl.selectedIndex >= 0){
          actionLabel = actionListEl.options[actionListEl.selectedIndex].text || actionValue;
        } else {
          actionLabel = actionValue;
        }
      }

      var nextDate = nextDateEl ? (nextDateEl.value || '') : '';
      var nextNote = nextActionEl ? (nextActionEl.value || '') : '';

      if(!actionValue){
        alert('Choisis une valeur dans Action (action_list_c) avant de créer une action.');
        return;
      }
      if(!nextDate){
        alert('Renseigne une date dans Next action date (next_action_date_c) avant de créer une action.');
        return;
      }

      // URL création Call
      // On pré-remplit :
      // - parent_type=Accounts
      // - parent_id + parent_name
      // - name = libellé action
      // - date_start = next_action_date_c (SuiteCRM convertira si besoin selon tes formats)
      // - description = next_action_c (optionnel)
      var url = 'index.php?module=Calls&action=EditView'
        + '&return_module=Accounts&return_action=DetailView&return_id=' + encodeURIComponent('{$accountId}')
        + '&parent_type=Accounts'
        + '&parent_id=' + encodeURIComponent('{$accountId}')
        + '&parent_name=' + encodeURIComponent('{$accountName}')
        + '&name=' + encodeURIComponent(actionLabel)
        + '&date_start=' + encodeURIComponent(nextDate)
        + '&description=' + encodeURIComponent(nextNote);

      window.location.href = url;
  })();"
/>
HTML;

        return $button;
    }
}
