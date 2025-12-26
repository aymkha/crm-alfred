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

        $isUpdate = !empty($arguments['isUpdate']);

        // Only override on new records to avoid clobbering user edits later
        if (!$isUpdate) {
            // Copy the restaurant assigned user if not already set
            if (empty($bean->assigned_user_id) && !empty($account->assigned_user_id)) {
                $bean->assigned_user_id = $account->assigned_user_id;
            }

            // Copy the action list selection to allow filtering by action type
            $bean->action_list_c = $account->action_list_c ?? '';

            // Copy next action date into call start date/time if provided on the restaurant
            $normalized = $this->normalizeDate($account->next_action_date_c ?? '');
            if ($normalized !== '') {
                $bean->date_start = $normalized;
            }
        }
    }

    /**
     * Normalize various date formats into DB datetime string.
     */
    protected function normalizeDate(string $raw): string
    {
        $raw = trim($raw);
        if ($raw === '' || $raw === 'Invalid Date' || $raw === '0000-00-00 00:00:00') {
            return '';
        }

        $timedate = TimeDate::getInstance();

        $dt = $timedate->fromDb($raw) ?: $timedate->fromDbDate($raw) ?: $timedate->fromUser($raw);
        if ($dt) {
            return $timedate->asDb($dt);
        }

        $ts = strtotime($raw);
        if ($ts !== false) {
            return $timedate->asDb($timedate->fromTimestamp($ts));
        }

        return '';
    }
}
