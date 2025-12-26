<?php

if (!defined('sugarEntry') || !sugarEntry) {
    die('Not A Valid Entry Point');
}

/**
 * Populate Calls fields from the related Account when creating an action from a restaurant.
 */
class CallActionDefaults
{
    /**
     * before_save logic hook
     *
     * @param SugarBean $bean
     * @param string    $event
     * @param array     $arguments
     */
    public function populateFromAccount(SugarBean $bean, string $event, array $arguments): void
    {
        // Only apply when the call is linked to an Account (restaurant)
        if ($bean->parent_type !== 'Accounts' || empty($bean->parent_id)) {
            return;
        }

        /** @var Account $account */
        $account = BeanFactory::getBean('Accounts', $bean->parent_id, ['disable_row_level_security' => true]);
        if (empty($account) || empty($account->id)) {
            return;
        }

        // Copy the restaurant assigned user if not already set
        if (empty($bean->assigned_user_id) && !empty($account->assigned_user_id)) {
            $bean->assigned_user_id = $account->assigned_user_id;
        }

        // Copy the action list selection if present on the account and not yet set on the call
        if (empty($bean->action_list_c) && !empty($account->action_list_c)) {
            $bean->action_list_c = $account->action_list_c;
        }

        // Copy next action date into call start date/time if not already set
        if (!empty($account->next_action_date_c) && empty($bean->date_start)) {
            // date_start expects DB datetime format
            $bean->date_start = $account->next_action_date_c;
        }
    }
}
