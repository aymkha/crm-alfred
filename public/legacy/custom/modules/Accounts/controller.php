<?php

require_once 'modules/Accounts/controller.php';
require_once 'include/TimeDate.php';

class CustomAccountsController extends AccountsController
{
    public function action_createActionFromAccount()
    {
        $recordId = isset($_REQUEST['record']) ? $_REQUEST['record'] : '';
        $isAjax = !empty($_REQUEST['ajax']);

        try {
            if (empty($recordId)) {
                throw new Exception('Missing record id');
            }

            /** @var Account $account */
            $account = BeanFactory::getBean('Accounts', $recordId);
            if (empty($account) || empty($account->id)) {
                throw new Exception('Account not found');
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

            // Start date/time: inherit next action date if set and valid
            if (!empty($account->next_action_date_c)) {
                $timedate = TimeDate::getInstance();
                $dt = $timedate->fromDb($account->next_action_date_c);
                if ($dt) {
                    $call->date_start = $timedate->asDb($dt);
                }
            }

            // Defaults required by Calls
            if (empty($call->status)) {
                $call->status = 'Planned';
            }
            if (empty($call->direction)) {
                $call->direction = 'Outbound';
            }
            if (!isset($call->duration_hours)) {
                $call->duration_hours = '0';
            }
            if (!isset($call->duration_minutes)) {
                $call->duration_minutes = '15';
            }

            // Build a basic subject/name
            $actionLabel = '';
            if (!empty($call->action_list_c) && !empty($GLOBALS['app_list_strings']['action_list_list'][$call->action_list_c])) {
                $actionLabel = $GLOBALS['app_list_strings']['action_list_list'][$call->action_list_c];
            }
            $call->name = trim($account->name . ' - ' . ($actionLabel ?: 'Action'));

            $call->save();

            if (empty($call->id)) {
                throw new Exception('Call not saved');
            }

            if ($isAjax) {
                $this->sendJson(['success' => true, 'call_id' => $call->id]);
                return;
            }

            SugarApplication::redirect('index.php?module=Accounts&action=DetailView&record=' . $account->id);
        } catch (Throwable $e) {
            $GLOBALS['log']->fatal('CreateAction error: ' . $e->getMessage());
            if ($isAjax) {
                $this->sendJson(['success' => false, 'message' => $e->getMessage()], 500);
                return;
            }
            SugarApplication::redirect('index.php?module=Accounts&action=DetailView&record=' . $recordId);
        }
    }

    protected function sendJson(array $payload, int $status = 200)
    {
        http_response_code($status);
        header('Content-Type: application/json');
        echo json_encode($payload);
        sugar_cleanup(true);
    }
}
