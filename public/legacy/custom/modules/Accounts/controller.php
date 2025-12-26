<?php

require_once 'modules/Accounts/controller.php';

class CustomAccountsController extends AccountsController
{
    public function action_createActionFromAccount()
    {
        $recordId = isset($_REQUEST['record']) ? $_REQUEST['record'] : '';
        if (empty($recordId)) {
            SugarApplication::redirect('index.php?module=Accounts&action=DetailView');
            return;
        }

        /** @var Account $account */
        $account = BeanFactory::getBean('Accounts', $recordId);
        if (empty($account) || empty($account->id)) {
            SugarApplication::redirect('index.php?module=Accounts&action=DetailView&record=' . $recordId);
            return;
        }

        $call = BeanFactory::newBean('Calls');

        // Parent linkage
        $call->parent_type = 'Accounts';
        $call->parent_id = $account->id;
        $call->parent_name = $account->name;

        // Assigned user: inherit from Account or fallback to current user
        if (!empty($account->assigned_user_id)) {
            $call->assigned_user_id = $account->assigned_user_id;
        } else {
            $call->assigned_user_id = $GLOBALS['current_user']->id;
        }

        // Action list enum: inherit if present
        if (!empty($account->action_list_c)) {
            $call->action_list_c = $account->action_list_c;
        }

        // Start date/time: inherit next action date if set
        if (!empty($account->next_action_date_c)) {
            $call->date_start = $account->next_action_date_c;
        }

        // Build a basic subject/name
        $actionLabel = '';
        if (!empty($call->action_list_c) && !empty($GLOBALS['app_list_strings']['action_list_list'][$call->action_list_c])) {
            $actionLabel = $GLOBALS['app_list_strings']['action_list_list'][$call->action_list_c];
        }
        $call->name = trim($account->name . ' - ' . ($actionLabel ?: 'Action'));

        // Save and redirect back to Account
        $call->save();

        SugarApplication::redirect('index.php?module=Accounts&action=DetailView&record=' . $account->id);
    }
}
