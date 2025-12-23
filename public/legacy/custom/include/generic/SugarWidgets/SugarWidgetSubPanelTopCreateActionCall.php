<?php
if (!defined('sugarEntry') || !sugarEntry) die('Not A Valid Entry Point');

require_once 'include/generic/SugarWidgets/SugarWidgetSubPanelTopButtonQuickCreate.php';

class SugarWidgetSubPanelTopCreateActionCall extends SugarWidgetSubPanelTopButtonQuickCreate
{
    public function getWidget($layout_def)
    {
        // Parent widget builds the base QuickCreate link
        $widget = parent::getWidget($layout_def);

        // In subpanel context, Accounts id is usually in $_REQUEST['record']
        $accountId = isset($_REQUEST['record']) ? $_REQUEST['record'] : '';

        // Grab values from the current Account (Restaurant)
        $nextAction = '';
        $nextActionDate = '';

        if (!empty($accountId)) {
            $acc = BeanFactory::getBean('Accounts', $accountId);
            if ($acc) {
                // Adapte si tes noms exacts diffèrent
                $nextAction     = isset($acc->next_action_c) ? $acc->next_action_c : '';
                $nextActionDate = isset($acc->next_action_date_c) ? $acc->next_action_date_c : '';
            }
        }

        // Build extra URL params to prefill the Call create form
        // Calls field for datetime is typically 'date_start'
        $extra = '';
        if (!empty($nextAction)) {
            $extra .= '&action_list_c=' . urlencode($nextAction);
        }
        if (!empty($nextActionDate)) {
            $extra .= '&date_start=' . urlencode($nextActionDate);
        }

        // Ensure relationship with Account is set
        // Many SuiteCRM quickcreate flows accept parent_type / parent_id
        if (!empty($accountId)) {
            $extra .= '&parent_type=Accounts&parent_id=' . urlencode($accountId);
        }

        // Inject into the onclick/open URL:
        // The parent widget typically returns HTML <input ... onclick="...URL...">
        // We'll safely append our params if we can find "return SUGAR.subpanelUtils.create..."
        $widget = preg_replace(
            '/(subpanelUtils\.create\([\'"][^\'"]+[\'"],\s*[\'"][^\'"]+[\'"],\s*[\'"][^\'"]+[\'"],\s*[\'"])([^\'"]*)([\'"]\))/i',
            '$1$2' . $extra . '$3',
            $widget
        );

        return $widget;
    }
}
