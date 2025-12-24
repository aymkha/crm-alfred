
<div class="detail-border-bottom"></div>

<script language="javascript">
    {literal}
    SUGAR.util.doWhen(function () {
        return $("#contentTable").length == 0;
    }, SUGAR.themes.actionMenu);
    {/literal}
</script>
<table cellpadding="0" cellspacing="0" border="0" width="100%" id="">
<tr>
<td class="buttons" align="left" NOWRAP width="80%">
<div class="actionsContainer">
<form action="index.php" method="post" name="DetailView" id="formDetailView">
<input type="hidden" name="module" value="{$module}">
<input type="hidden" name="record" value="{$fields.id.value}">
<input type="hidden" name="return_action">
<input type="hidden" name="return_module">
<input type="hidden" name="return_id">
<input type="hidden" name="module_tab">
<input type="hidden" name="isDuplicate" value="false">
<input type="hidden" name="offset" value="{$offset}">
<input type="hidden" name="action" value="EditView">
<input type="hidden" name="sugar_body_only">
{if !$config.enable_action_menu}
<div class="buttons">
{if $bean->aclAccess("edit")}
<input title="{$APP.LBL_EDIT_BUTTON_TITLE}"
accessKey="{$APP.LBL_EDIT_BUTTON_KEY}"
name="Edit"
id="edit_button"
class="button primary"
type="button"
value="{$APP.LBL_EDIT_BUTTON_LABEL}"
onclick="window.location.href='index.php?module=Accounts&action=EditView&record={$id}&return_module=Accounts&return_action=DetailView&return_id={$id}'"/>
{/if}
{if $bean->aclAccess("edit")}
<input title="{$APP.LBL_DUPLICATE_BUTTON_TITLE}"
accessKey="{$APP.LBL_DUPLICATE_BUTTON_KEY}"
name="Duplicate"
id="duplicate_button"
class="button"
type="button"
value="{$APP.LBL_DUPLICATE_BUTTON_LABEL}"
onclick="window.location.href='index.php?module=Accounts&action=EditView&record={$id}&return_module=Accounts&return_action=DetailView&return_id={$id}&isDuplicate=true'"/>
{/if}
{if $bean->aclAccess("delete")}<input title="{$APP.LBL_DELETE_BUTTON_TITLE}" accessKey="{$APP.LBL_DELETE_BUTTON_KEY}" class="button" onclick="var _form = document.getElementById('formDetailView'); _form.return_module.value='Accounts'; _form.return_action.value='ListView'; _form.action.value='Delete'; if(confirm('{$APP.NTC_DELETE_CONFIRMATION}')) SUGAR.ajaxUI.submitForm(_form); return false;" type="submit" name="Delete" value="{$APP.LBL_DELETE_BUTTON_LABEL}" id="delete_button">{/if} 
{if $bean->aclAccess("edit") && $bean->aclAccess("delete")}
<input title="{$APP.LBL_DUP_MERGE}"
name="Merge"
id="merge_duplicate_button"
class="button primary"
type="button"
value="{$APP.LBL_DUP_MERGE}"
onclick="window.location.href='index.php?module=MergeRecords&action=Step1&record={$id}&return_module=Accounts&return_action=DetailView&return_id={$id}'"/>
{/if}
<input class="button hidden" id="send_confirm_opt_in_email" title="{$APP.LBL_SEND_CONFIRM_OPT_IN_EMAIL}" onclick="var _form = document.getElementById('formDetailView');_form.return_module.value='Accounts'; _form.return_action.value='DetailView'; _form.return_id.value='{$fields.id.value}'; _form.action.value='sendConfirmOptInEmail'; _form.module.value='Accounts'; _form.module_tab.value='Accounts';window.location.href='index.php?' + (new URLSearchParams(new FormData(_form)).toString());" name="send_confirm_opt_in_email" disabled="1" type="button" value="{$APP.LBL_SEND_CONFIRM_OPT_IN_EMAIL}"/>
<input type="button" class="button" onClick="showPopup();" value="{$APP.LBL_PRINT_AS_PDF}"/>
{if $bean->aclAccess("detail")}{if !empty($fields.id.value) && $isAuditEnabled}<input id="btn_view_change_log" title="{$APP.LNK_VIEW_CHANGE_LOG}" class="button" onclick='open_popup("Audit", "600", "400", "&record={$fields.id.value}&module_name=Accounts", true, false,  {ldelim} "call_back_function":"set_return","form_name":"EditView","field_to_name_array":[] {rdelim} ); return false;' type="button" value="{$APP.LNK_VIEW_CHANGE_LOG}">{/if}{/if}
</div>
{/if}
</form>
</div>
</td>
<td align="right" width="20%" class="buttons">{$ADMIN_EDIT}
</td>
</tr>
</table>
{sugar_include include=$includes}
<div class="detail-view">
<div class="mobile-pagination">{$PAGINATION}</div>

<ul class="nav nav-tabs">

{if $config.enable_action_menu and $config.enable_action_menu != false}
<li role="presentation" class="active">
<a id="tab0" data-toggle="tab" class="hidden-xs">
{sugar_translate label='LBL_EDITVIEW_PANEL5' module='Accounts'}
</a>
<a id="xstab0" href="#" class="visible-xs first-tab dropdown-toggle" data-toggle="dropdown">
{sugar_translate label='LBL_EDITVIEW_PANEL5' module='Accounts'}
</a>
</li>





{/if}
{if $config.enable_action_menu and $config.enable_action_menu != false}
<li id="tab-actions" class="dropdown">
<a class="dropdown-toggle" data-toggle="dropdown" href="#">ACTIONS<span class="suitepicon suitepicon-action-caret"></span></a>
<ul class="dropdown-menu">
<li>{if $bean->aclAccess("edit")}
<input title="{$APP.LBL_EDIT_BUTTON_TITLE}"
accessKey="{$APP.LBL_EDIT_BUTTON_KEY}"
name="Edit"
id="edit_button"
class="button primary"
type="button"
value="{$APP.LBL_EDIT_BUTTON_LABEL}"
onclick="window.location.href='index.php?module=Accounts&action=EditView&record={$id}&return_module=Accounts&return_action=DetailView&return_id={$id}'"/>
{/if}</li>
<li>{if $bean->aclAccess("edit")}
<input title="{$APP.LBL_DUPLICATE_BUTTON_TITLE}"
accessKey="{$APP.LBL_DUPLICATE_BUTTON_KEY}"
name="Duplicate"
id="duplicate_button"
class="button"
type="button"
value="{$APP.LBL_DUPLICATE_BUTTON_LABEL}"
onclick="window.location.href='index.php?module=Accounts&action=EditView&record={$id}&return_module=Accounts&return_action=DetailView&return_id={$id}&isDuplicate=true'"/>
{/if}</li>
<li>{if $bean->aclAccess("delete")}<input title="{$APP.LBL_DELETE_BUTTON_TITLE}" accessKey="{$APP.LBL_DELETE_BUTTON_KEY}" class="button" onclick="var _form = document.getElementById('formDetailView'); _form.return_module.value='Accounts'; _form.return_action.value='ListView'; _form.action.value='Delete'; if(confirm('{$APP.NTC_DELETE_CONFIRMATION}')) SUGAR.ajaxUI.submitForm(_form); return false;" type="submit" name="Delete" value="{$APP.LBL_DELETE_BUTTON_LABEL}" id="delete_button">{/if} </li>
<li>{if $bean->aclAccess("edit") && $bean->aclAccess("delete")}
<input title="{$APP.LBL_DUP_MERGE}"
name="Merge"
id="merge_duplicate_button"
class="button primary"
type="button"
value="{$APP.LBL_DUP_MERGE}"
onclick="window.location.href='index.php?module=MergeRecords&action=Step1&record={$id}&return_module=Accounts&return_action=DetailView&return_id={$id}'"/>
{/if}</li>
<li><input class="button hidden" id="send_confirm_opt_in_email" title="{$APP.LBL_SEND_CONFIRM_OPT_IN_EMAIL}" onclick="var _form = document.getElementById('formDetailView');_form.return_module.value='Accounts'; _form.return_action.value='DetailView'; _form.return_id.value='{$fields.id.value}'; _form.action.value='sendConfirmOptInEmail'; _form.module.value='Accounts'; _form.module_tab.value='Accounts';window.location.href='index.php?' + (new URLSearchParams(new FormData(_form)).toString());" name="send_confirm_opt_in_email" disabled="1" type="button" value="{$APP.LBL_SEND_CONFIRM_OPT_IN_EMAIL}"/></li>
<li><input type="button" class="button" onClick="showPopup();" value="{$APP.LBL_PRINT_AS_PDF}"/></li>
<li>{if $bean->aclAccess("detail")}{if !empty($fields.id.value) && $isAuditEnabled}<input id="btn_view_change_log" title="{$APP.LNK_VIEW_CHANGE_LOG}" class="button" onclick='open_popup("Audit", "600", "400", "&record={$fields.id.value}&module_name=Accounts", true, false,  {ldelim} "call_back_function":"set_return","form_name":"EditView","field_to_name_array":[] {rdelim} ); return false;' type="button" value="{$APP.LNK_VIEW_CHANGE_LOG}">{/if}{/if}</li>
</ul>
</li>
<li class="tab-inline-pagination">
{$PAGINATION}
</li>
{/if}
</ul>
<div class="clearfix"></div>

{if $config.enable_action_menu and $config.enable_action_menu != false}

<div class="tab-content">
{else}

<div class="tab-content" style="padding: 0; border: 0;">
{/if}


{if $config.enable_action_menu and $config.enable_action_menu != false}
<div class="tab-pane-NOBOOTSTRAPTOGGLER active fade in" id='tab-content-0'>





<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="status_du_restaurant_c">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_STATUS_DU_RESTAURANT' module='Accounts'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="enum" field="status_du_restaurant_c" >

{if !$fields.status_du_restaurant_c.hidden}
{counter name="panelFieldCount" print=false}


{if is_string($fields.status_du_restaurant_c.options)}
<input type="hidden" class="sugar_field" id="{$fields.status_du_restaurant_c.name}" value="{ $fields.status_du_restaurant_c.options }">
{ $fields.status_du_restaurant_c.options }
{else}
<input type="hidden" class="sugar_field" id="{$fields.status_du_restaurant_c.name}" value="{ $fields.status_du_restaurant_c.value }">
{ $fields.status_du_restaurant_c.options[$fields.status_du_restaurant_c.value]}
{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="tables_equipees_alfred_c">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_TABLES_EQUIPEES_ALFRED' module='Accounts'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="enum" field="tables_equipees_alfred_c" >

{if !$fields.tables_equipees_alfred_c.hidden}
{counter name="panelFieldCount" print=false}


{if is_string($fields.tables_equipees_alfred_c.options)}
<input type="hidden" class="sugar_field" id="{$fields.tables_equipees_alfred_c.name}" value="{ $fields.tables_equipees_alfred_c.options }">
{ $fields.tables_equipees_alfred_c.options }
{else}
<input type="hidden" class="sugar_field" id="{$fields.tables_equipees_alfred_c.name}" value="{ $fields.tables_equipees_alfred_c.value }">
{ $fields.tables_equipees_alfred_c.options[$fields.tables_equipees_alfred_c.value]}
{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>

</div>

</div>
{else}

<div class="tab-pane-NOBOOTSTRAPTOGGLER panel-collapse"></div>
{/if}
</div>

<div class="panel-content">





{if $config.enable_action_menu and $config.enable_action_menu != false}

{else}

<div class="panel panel-default">
<div class="panel-heading ">
<a class="" role="button" data-toggle="collapse" href="#top-panel--1" aria-expanded="false">
<div class="col-xs-10 col-sm-11 col-md-11">
{sugar_translate label='LBL_EDITVIEW_PANEL5' module='Accounts'}
</div>
</a>
</div>
<div class="panel-body panel-collapse collapse in panelContainer" id="top-panel--1" data-id="LBL_EDITVIEW_PANEL5">
<div class="tab-content">
<!-- TAB CONTENT -->





<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="status_du_restaurant_c">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_STATUS_DU_RESTAURANT' module='Accounts'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="enum" field="status_du_restaurant_c" >

{if !$fields.status_du_restaurant_c.hidden}
{counter name="panelFieldCount" print=false}


{if is_string($fields.status_du_restaurant_c.options)}
<input type="hidden" class="sugar_field" id="{$fields.status_du_restaurant_c.name}" value="{ $fields.status_du_restaurant_c.options }">
{ $fields.status_du_restaurant_c.options }
{else}
<input type="hidden" class="sugar_field" id="{$fields.status_du_restaurant_c.name}" value="{ $fields.status_du_restaurant_c.value }">
{ $fields.status_du_restaurant_c.options[$fields.status_du_restaurant_c.value]}
{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="tables_equipees_alfred_c">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_TABLES_EQUIPEES_ALFRED' module='Accounts'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="enum" field="tables_equipees_alfred_c" >

{if !$fields.tables_equipees_alfred_c.hidden}
{counter name="panelFieldCount" print=false}


{if is_string($fields.tables_equipees_alfred_c.options)}
<input type="hidden" class="sugar_field" id="{$fields.tables_equipees_alfred_c.name}" value="{ $fields.tables_equipees_alfred_c.options }">
{ $fields.tables_equipees_alfred_c.options }
{else}
<input type="hidden" class="sugar_field" id="{$fields.tables_equipees_alfred_c.name}" value="{ $fields.tables_equipees_alfred_c.value }">
{ $fields.tables_equipees_alfred_c.options[$fields.tables_equipees_alfred_c.value]}
{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>

</div>

</div>
</div>
</div>
{/if}





{if $config.enable_action_menu and $config.enable_action_menu != false}

<div class="panel panel-default">
<div class="panel-heading ">
<a class="" role="button" data-toggle="collapse" href="#top-panel-0" aria-expanded="false">
<div class="col-xs-10 col-sm-11 col-md-11">
{sugar_translate label='LBL_EDITVIEW_PANEL4' module='Accounts'}
</div>
</a>
</div>
<div class="panel-body panel-collapse collapse in panelContainer" id="top-panel-0"  data-id="LBL_EDITVIEW_PANEL4">
<div class="tab-content">
<!-- TAB CONTENT -->





<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="action_list_c">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_ACTION_LIST' module='Accounts'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="enum" field="action_list_c" >

{if !$fields.action_list_c.hidden}
{counter name="panelFieldCount" print=false}


{if is_string($fields.action_list_c.options)}
<input type="hidden" class="sugar_field" id="{$fields.action_list_c.name}" value="{ $fields.action_list_c.options }">
{ $fields.action_list_c.options }
{else}
<input type="hidden" class="sugar_field" id="{$fields.action_list_c.name}" value="{ $fields.action_list_c.value }">
{ $fields.action_list_c.options[$fields.action_list_c.value]}
{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="next_action_date_c">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_NEXT_ACTION_DATE_C' module='Accounts'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="datetimecombo" field="next_action_date_c" >

{if !$fields.next_action_date_c.hidden}
{counter name="panelFieldCount" print=false}

{if strlen($fields.next_action_date_c.value) <= 0}
{assign var="value" value=$fields.next_action_date_c.default_value }
{else}
{assign var="value" value=$fields.next_action_date_c.value }
{/if} 
<span class="sugar_field" id="{$fields.next_action_date_c.name}">{$fields.next_action_date_c.value}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-12 detail-view-row-item" data-field="assigned_user_name">


<div class="col-xs-12 col-sm-2 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_ASSIGNED_TO' module='Accounts'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-10 detail-view-field d-flex inlineEdit" type="relate" field="assigned_user_name" colspan='3'>

{if !$fields.assigned_user_name.hidden}
{counter name="panelFieldCount" print=false}

<span id="assigned_user_id" class="sugar_field" data-id-value="{$fields.assigned_user_id.value}">{$fields.assigned_user_name.value}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>

</div>

</div>
</div>
</div>
{else}

<div class="panel panel-default">
<div class="panel-heading ">
<a class="" role="button" data-toggle="collapse" href="#top-panel-0" aria-expanded="false">
<div class="col-xs-10 col-sm-11 col-md-11">
{sugar_translate label='LBL_EDITVIEW_PANEL4' module='Accounts'}
</div>
</a>
</div>
<div class="panel-body panel-collapse collapse in panelContainer" id="top-panel-0" data-id="LBL_EDITVIEW_PANEL4">
<div class="tab-content">
<!-- TAB CONTENT -->





<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="action_list_c">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_ACTION_LIST' module='Accounts'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="enum" field="action_list_c" >

{if !$fields.action_list_c.hidden}
{counter name="panelFieldCount" print=false}


{if is_string($fields.action_list_c.options)}
<input type="hidden" class="sugar_field" id="{$fields.action_list_c.name}" value="{ $fields.action_list_c.options }">
{ $fields.action_list_c.options }
{else}
<input type="hidden" class="sugar_field" id="{$fields.action_list_c.name}" value="{ $fields.action_list_c.value }">
{ $fields.action_list_c.options[$fields.action_list_c.value]}
{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="next_action_date_c">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_NEXT_ACTION_DATE_C' module='Accounts'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="datetimecombo" field="next_action_date_c" >

{if !$fields.next_action_date_c.hidden}
{counter name="panelFieldCount" print=false}

{if strlen($fields.next_action_date_c.value) <= 0}
{assign var="value" value=$fields.next_action_date_c.default_value }
{else}
{assign var="value" value=$fields.next_action_date_c.value }
{/if} 
<span class="sugar_field" id="{$fields.next_action_date_c.name}">{$fields.next_action_date_c.value}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-12 detail-view-row-item" data-field="assigned_user_name">


<div class="col-xs-12 col-sm-2 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_ASSIGNED_TO' module='Accounts'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-10 detail-view-field d-flex inlineEdit" type="relate" field="assigned_user_name" colspan='3'>

{if !$fields.assigned_user_name.hidden}
{counter name="panelFieldCount" print=false}

<span id="assigned_user_id" class="sugar_field" data-id-value="{$fields.assigned_user_id.value}">{$fields.assigned_user_name.value}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>

</div>

</div>
</div>
</div>
{/if}





{if $config.enable_action_menu and $config.enable_action_menu != false}

<div class="panel panel-default">
<div class="panel-heading ">
<a class="" role="button" data-toggle="collapse" href="#top-panel-1" aria-expanded="false">
<div class="col-xs-10 col-sm-11 col-md-11">
{sugar_translate label='LBL_EDITVIEW_PANEL3' module='Accounts'}
</div>
</a>
</div>
<div class="panel-body panel-collapse collapse in panelContainer" id="top-panel-1"  data-id="LBL_EDITVIEW_PANEL3">
<div class="tab-content">
<!-- TAB CONTENT -->





<div class="row detail-view-row">



<div class="col-xs-12 col-sm-12 detail-view-row-item" data-field="interest_level_c">


<div class="col-xs-12 col-sm-2 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_INTEREST_LEVEL_C' module='Accounts'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-10 detail-view-field d-flex inlineEdit" type="enum" field="interest_level_c" colspan='3'>

{if !$fields.interest_level_c.hidden}
{counter name="panelFieldCount" print=false}


{if is_string($fields.interest_level_c.options)}
<input type="hidden" class="sugar_field" id="{$fields.interest_level_c.name}" value="{ $fields.interest_level_c.options }">
{ $fields.interest_level_c.options }
{else}
<input type="hidden" class="sugar_field" id="{$fields.interest_level_c.name}" value="{ $fields.interest_level_c.value }">
{ $fields.interest_level_c.options[$fields.interest_level_c.value]}
{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="google_form_completed_c">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_GOOGLE_FORM_COMPLETED_C' module='Accounts'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="bool" field="google_form_completed_c" >

{if !$fields.google_form_completed_c.hidden}
{counter name="panelFieldCount" print=false}

{if strval($fields.google_form_completed_c.value) == "1" || strval($fields.google_form_completed_c.value) == "yes" || strval($fields.google_form_completed_c.value) == "on"} 
{assign var="checked" value='checked="checked"'}
{else}
{assign var="checked" value=""}
{/if}
<input type="checkbox" class="checkbox" name="{$fields.google_form_completed_c.name}" id="{$fields.google_form_completed_c.name}" value="$fields.google_form_completed_c.value" disabled="true" {$checked}>
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="voice_interview_done_c">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_VOICE_INTERVIEW_DONE_C' module='Accounts'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="bool" field="voice_interview_done_c" >

{if !$fields.voice_interview_done_c.hidden}
{counter name="panelFieldCount" print=false}

{if strval($fields.voice_interview_done_c.value) == "1" || strval($fields.voice_interview_done_c.value) == "yes" || strval($fields.voice_interview_done_c.value) == "on"} 
{assign var="checked" value='checked="checked"'}
{else}
{assign var="checked" value=""}
{/if}
<input type="checkbox" class="checkbox" name="{$fields.voice_interview_done_c.name}" id="{$fields.voice_interview_done_c.name}" value="$fields.voice_interview_done_c.value" disabled="true" {$checked}>
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>

</div>

</div>
</div>
</div>
{else}

<div class="panel panel-default">
<div class="panel-heading ">
<a class="" role="button" data-toggle="collapse" href="#top-panel-1" aria-expanded="false">
<div class="col-xs-10 col-sm-11 col-md-11">
{sugar_translate label='LBL_EDITVIEW_PANEL3' module='Accounts'}
</div>
</a>
</div>
<div class="panel-body panel-collapse collapse in panelContainer" id="top-panel-1" data-id="LBL_EDITVIEW_PANEL3">
<div class="tab-content">
<!-- TAB CONTENT -->





<div class="row detail-view-row">



<div class="col-xs-12 col-sm-12 detail-view-row-item" data-field="interest_level_c">


<div class="col-xs-12 col-sm-2 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_INTEREST_LEVEL_C' module='Accounts'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-10 detail-view-field d-flex inlineEdit" type="enum" field="interest_level_c" colspan='3'>

{if !$fields.interest_level_c.hidden}
{counter name="panelFieldCount" print=false}


{if is_string($fields.interest_level_c.options)}
<input type="hidden" class="sugar_field" id="{$fields.interest_level_c.name}" value="{ $fields.interest_level_c.options }">
{ $fields.interest_level_c.options }
{else}
<input type="hidden" class="sugar_field" id="{$fields.interest_level_c.name}" value="{ $fields.interest_level_c.value }">
{ $fields.interest_level_c.options[$fields.interest_level_c.value]}
{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="google_form_completed_c">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_GOOGLE_FORM_COMPLETED_C' module='Accounts'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="bool" field="google_form_completed_c" >

{if !$fields.google_form_completed_c.hidden}
{counter name="panelFieldCount" print=false}

{if strval($fields.google_form_completed_c.value) == "1" || strval($fields.google_form_completed_c.value) == "yes" || strval($fields.google_form_completed_c.value) == "on"} 
{assign var="checked" value='checked="checked"'}
{else}
{assign var="checked" value=""}
{/if}
<input type="checkbox" class="checkbox" name="{$fields.google_form_completed_c.name}" id="{$fields.google_form_completed_c.name}" value="$fields.google_form_completed_c.value" disabled="true" {$checked}>
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="voice_interview_done_c">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_VOICE_INTERVIEW_DONE_C' module='Accounts'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="bool" field="voice_interview_done_c" >

{if !$fields.voice_interview_done_c.hidden}
{counter name="panelFieldCount" print=false}

{if strval($fields.voice_interview_done_c.value) == "1" || strval($fields.voice_interview_done_c.value) == "yes" || strval($fields.voice_interview_done_c.value) == "on"} 
{assign var="checked" value='checked="checked"'}
{else}
{assign var="checked" value=""}
{/if}
<input type="checkbox" class="checkbox" name="{$fields.voice_interview_done_c.name}" id="{$fields.voice_interview_done_c.name}" value="$fields.voice_interview_done_c.value" disabled="true" {$checked}>
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>

</div>

</div>
</div>
</div>
{/if}





{if $config.enable_action_menu and $config.enable_action_menu != false}

<div class="panel panel-default">
<div class="panel-heading ">
<a class="" role="button" data-toggle="collapse" href="#top-panel-2" aria-expanded="false">
<div class="col-xs-10 col-sm-11 col-md-11">
{sugar_translate label='LBL_ACCOUNT_INFORMATION' module='Accounts'}
</div>
</a>
</div>
<div class="panel-body panel-collapse collapse in panelContainer" id="top-panel-2"  data-id="LBL_ACCOUNT_INFORMATION">
<div class="tab-content">
<!-- TAB CONTENT -->





<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="name">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_NAME' module='Accounts'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="name" field="name" >

{if !$fields.name.hidden}
{counter name="panelFieldCount" print=false}

{if strlen($fields.name.value) <= 0}
{assign var="value" value=$fields.name.default_value }
{else}
{assign var="value" value=$fields.name.value }
{/if} 
<span class="sugar_field" id="{$fields.name.name}">{$fields.name.value}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="phone_office">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_PHONE_OFFICE' module='Accounts'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit phone" type="phone" field="phone_office" >

{if !$fields.phone_office.hidden}
{counter name="panelFieldCount" print=false}

{if !empty($fields.phone_office.value)}
{assign var="phone_value" value=$fields.phone_office.value }
{sugar_phone value=$phone_value usa_format="0"}
{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="website">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_WEBSITE' module='Accounts'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="url" field="website" >

{if !$fields.website.hidden}
{counter name="panelFieldCount" print=false}

{capture name=getLink assign=link}{$fields.website.value}{/capture}
{if !empty($link)}
{capture name=getStart assign=linkStart}{$link|substr:0:7}{/capture}
<span class="sugar_field" id="{$fields.website.name}">
<a href='{$link|to_url}' target='_blank' >{$link}</a>
</span>
{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="email1">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_EMAIL' module='Accounts'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="varchar" field="email1" >

{if !$fields.email1.hidden}
{counter name="panelFieldCount" print=false}
<span id='email1_span'>
{$fields.email1.value}
</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="instagram_c">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_INSTAGRAM' module='Accounts'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="varchar" field="instagram_c" >

{if !$fields.instagram_c.hidden}
{counter name="panelFieldCount" print=false}

{if strlen($fields.instagram_c.value) <= 0}
{assign var="value" value=$fields.instagram_c.default_value }
{else}
{assign var="value" value=$fields.instagram_c.value }
{/if} 
<span class="sugar_field" id="{$fields.instagram_c.name}">{$fields.instagram_c.value}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="nomgerant_c">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_NOMGERANT' module='Accounts'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="varchar" field="nomgerant_c" >

{if !$fields.nomgerant_c.hidden}
{counter name="panelFieldCount" print=false}

{if strlen($fields.nomgerant_c.value) <= 0}
{assign var="value" value=$fields.nomgerant_c.default_value }
{else}
{assign var="value" value=$fields.nomgerant_c.value }
{/if} 
<span class="sugar_field" id="{$fields.nomgerant_c.name}">{$fields.nomgerant_c.value}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="type_etablissement_c">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_TYPE_ETABLISSEMENT_C' module='Accounts'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="enum" field="type_etablissement_c" >

{if !$fields.type_etablissement_c.hidden}
{counter name="panelFieldCount" print=false}


{if is_string($fields.type_etablissement_c.options)}
<input type="hidden" class="sugar_field" id="{$fields.type_etablissement_c.name}" value="{ $fields.type_etablissement_c.options }">
{ $fields.type_etablissement_c.options }
{else}
<input type="hidden" class="sugar_field" id="{$fields.type_etablissement_c.name}" value="{ $fields.type_etablissement_c.value }">
{ $fields.type_etablissement_c.options[$fields.type_etablissement_c.value]}
{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="zone_commerciale_c">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_ZONE_COMMERCIALE_C' module='Accounts'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="enum" field="zone_commerciale_c" >

{if !$fields.zone_commerciale_c.hidden}
{counter name="panelFieldCount" print=false}


{if is_string($fields.zone_commerciale_c.options)}
<input type="hidden" class="sugar_field" id="{$fields.zone_commerciale_c.name}" value="{ $fields.zone_commerciale_c.options }">
{ $fields.zone_commerciale_c.options }
{else}
<input type="hidden" class="sugar_field" id="{$fields.zone_commerciale_c.name}" value="{ $fields.zone_commerciale_c.value }">
{ $fields.zone_commerciale_c.options[$fields.zone_commerciale_c.value]}
{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-12 detail-view-row-item" data-field="description">


<div class="col-xs-12 col-sm-2 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_DESCRIPTION' module='Accounts'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-10 detail-view-field d-flex inlineEdit" type="text" field="description" colspan='3'>

{if !$fields.description.hidden}
{counter name="panelFieldCount" print=false}

<span class="sugar_field" id="{$fields.description.name|escape:'html'|url2html|nl2br}">{$fields.description.value|escape:'html'|escape:'html_entity_decode'|url2html|nl2br}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-12 detail-view-row-item" data-field="jjwg_maps_address_c">


<div class="col-xs-12 col-sm-2 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_JJWG_MAPS_ADDRESS' module='Accounts'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-10 detail-view-field d-flex inlineEdit" type="varchar" field="jjwg_maps_address_c" colspan='3'>

{if !$fields.jjwg_maps_address_c.hidden}
{counter name="panelFieldCount" print=false}

{if strlen($fields.jjwg_maps_address_c.value) <= 0}
{assign var="value" value=$fields.jjwg_maps_address_c.default_value }
{else}
{assign var="value" value=$fields.jjwg_maps_address_c.value }
{/if} 
<span class="sugar_field" id="{$fields.jjwg_maps_address_c.name}">{$fields.jjwg_maps_address_c.value}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>

</div>

</div>
</div>
</div>
{else}

<div class="panel panel-default">
<div class="panel-heading ">
<a class="" role="button" data-toggle="collapse" href="#top-panel-2" aria-expanded="false">
<div class="col-xs-10 col-sm-11 col-md-11">
{sugar_translate label='LBL_ACCOUNT_INFORMATION' module='Accounts'}
</div>
</a>
</div>
<div class="panel-body panel-collapse collapse in panelContainer" id="top-panel-2" data-id="LBL_ACCOUNT_INFORMATION">
<div class="tab-content">
<!-- TAB CONTENT -->





<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="name">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_NAME' module='Accounts'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="name" field="name" >

{if !$fields.name.hidden}
{counter name="panelFieldCount" print=false}

{if strlen($fields.name.value) <= 0}
{assign var="value" value=$fields.name.default_value }
{else}
{assign var="value" value=$fields.name.value }
{/if} 
<span class="sugar_field" id="{$fields.name.name}">{$fields.name.value}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="phone_office">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_PHONE_OFFICE' module='Accounts'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit phone" type="phone" field="phone_office" >

{if !$fields.phone_office.hidden}
{counter name="panelFieldCount" print=false}

{if !empty($fields.phone_office.value)}
{assign var="phone_value" value=$fields.phone_office.value }
{sugar_phone value=$phone_value usa_format="0"}
{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="website">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_WEBSITE' module='Accounts'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="url" field="website" >

{if !$fields.website.hidden}
{counter name="panelFieldCount" print=false}

{capture name=getLink assign=link}{$fields.website.value}{/capture}
{if !empty($link)}
{capture name=getStart assign=linkStart}{$link|substr:0:7}{/capture}
<span class="sugar_field" id="{$fields.website.name}">
<a href='{$link|to_url}' target='_blank' >{$link}</a>
</span>
{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="email1">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_EMAIL' module='Accounts'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="varchar" field="email1" >

{if !$fields.email1.hidden}
{counter name="panelFieldCount" print=false}
<span id='email1_span'>
{$fields.email1.value}
</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="instagram_c">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_INSTAGRAM' module='Accounts'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="varchar" field="instagram_c" >

{if !$fields.instagram_c.hidden}
{counter name="panelFieldCount" print=false}

{if strlen($fields.instagram_c.value) <= 0}
{assign var="value" value=$fields.instagram_c.default_value }
{else}
{assign var="value" value=$fields.instagram_c.value }
{/if} 
<span class="sugar_field" id="{$fields.instagram_c.name}">{$fields.instagram_c.value}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="nomgerant_c">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_NOMGERANT' module='Accounts'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="varchar" field="nomgerant_c" >

{if !$fields.nomgerant_c.hidden}
{counter name="panelFieldCount" print=false}

{if strlen($fields.nomgerant_c.value) <= 0}
{assign var="value" value=$fields.nomgerant_c.default_value }
{else}
{assign var="value" value=$fields.nomgerant_c.value }
{/if} 
<span class="sugar_field" id="{$fields.nomgerant_c.name}">{$fields.nomgerant_c.value}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="type_etablissement_c">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_TYPE_ETABLISSEMENT_C' module='Accounts'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="enum" field="type_etablissement_c" >

{if !$fields.type_etablissement_c.hidden}
{counter name="panelFieldCount" print=false}


{if is_string($fields.type_etablissement_c.options)}
<input type="hidden" class="sugar_field" id="{$fields.type_etablissement_c.name}" value="{ $fields.type_etablissement_c.options }">
{ $fields.type_etablissement_c.options }
{else}
<input type="hidden" class="sugar_field" id="{$fields.type_etablissement_c.name}" value="{ $fields.type_etablissement_c.value }">
{ $fields.type_etablissement_c.options[$fields.type_etablissement_c.value]}
{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="zone_commerciale_c">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_ZONE_COMMERCIALE_C' module='Accounts'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="enum" field="zone_commerciale_c" >

{if !$fields.zone_commerciale_c.hidden}
{counter name="panelFieldCount" print=false}


{if is_string($fields.zone_commerciale_c.options)}
<input type="hidden" class="sugar_field" id="{$fields.zone_commerciale_c.name}" value="{ $fields.zone_commerciale_c.options }">
{ $fields.zone_commerciale_c.options }
{else}
<input type="hidden" class="sugar_field" id="{$fields.zone_commerciale_c.name}" value="{ $fields.zone_commerciale_c.value }">
{ $fields.zone_commerciale_c.options[$fields.zone_commerciale_c.value]}
{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-12 detail-view-row-item" data-field="description">


<div class="col-xs-12 col-sm-2 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_DESCRIPTION' module='Accounts'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-10 detail-view-field d-flex inlineEdit" type="text" field="description" colspan='3'>

{if !$fields.description.hidden}
{counter name="panelFieldCount" print=false}

<span class="sugar_field" id="{$fields.description.name|escape:'html'|url2html|nl2br}">{$fields.description.value|escape:'html'|escape:'html_entity_decode'|url2html|nl2br}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-12 detail-view-row-item" data-field="jjwg_maps_address_c">


<div class="col-xs-12 col-sm-2 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_JJWG_MAPS_ADDRESS' module='Accounts'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-10 detail-view-field d-flex inlineEdit" type="varchar" field="jjwg_maps_address_c" colspan='3'>

{if !$fields.jjwg_maps_address_c.hidden}
{counter name="panelFieldCount" print=false}

{if strlen($fields.jjwg_maps_address_c.value) <= 0}
{assign var="value" value=$fields.jjwg_maps_address_c.default_value }
{else}
{assign var="value" value=$fields.jjwg_maps_address_c.value }
{/if} 
<span class="sugar_field" id="{$fields.jjwg_maps_address_c.name}">{$fields.jjwg_maps_address_c.value}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>

</div>

</div>
</div>
</div>
{/if}





{if $config.enable_action_menu and $config.enable_action_menu != false}

<div class="panel panel-default">
<div class="panel-heading ">
<a class="" role="button" data-toggle="collapse" href="#top-panel-3" aria-expanded="false">
<div class="col-xs-10 col-sm-11 col-md-11">
{sugar_translate label='LBL_EDITVIEW_PANEL1' module='Accounts'}
</div>
</a>
</div>
<div class="panel-body panel-collapse collapse in panelContainer" id="top-panel-3"  data-id="LBL_EDITVIEW_PANEL1">
<div class="tab-content">
<!-- TAB CONTENT -->





<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="nb_tables_range_list_c">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_NB_TABLES_RANGE_LIST' module='Accounts'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="enum" field="nb_tables_range_list_c" >

{if !$fields.nb_tables_range_list_c.hidden}
{counter name="panelFieldCount" print=false}


{if is_string($fields.nb_tables_range_list_c.options)}
<input type="hidden" class="sugar_field" id="{$fields.nb_tables_range_list_c.name}" value="{ $fields.nb_tables_range_list_c.options }">
{ $fields.nb_tables_range_list_c.options }
{else}
<input type="hidden" class="sugar_field" id="{$fields.nb_tables_range_list_c.name}" value="{ $fields.nb_tables_range_list_c.value }">
{ $fields.nb_tables_range_list_c.options[$fields.nb_tables_range_list_c.value]}
{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="ticket_moyen_range_c">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_TICKET_MOYEN_RANGE_C' module='Accounts'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="enum" field="ticket_moyen_range_c" >

{if !$fields.ticket_moyen_range_c.hidden}
{counter name="panelFieldCount" print=false}


{if is_string($fields.ticket_moyen_range_c.options)}
<input type="hidden" class="sugar_field" id="{$fields.ticket_moyen_range_c.name}" value="{ $fields.ticket_moyen_range_c.options }">
{ $fields.ticket_moyen_range_c.options }
{else}
<input type="hidden" class="sugar_field" id="{$fields.ticket_moyen_range_c.name}" value="{ $fields.ticket_moyen_range_c.value }">
{ $fields.ticket_moyen_range_c.options[$fields.ticket_moyen_range_c.value]}
{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="google_reviews_range_list_c">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_GOOGLE_REVIEWS_RANGE_LIST' module='Accounts'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="enum" field="google_reviews_range_list_c" >

{if !$fields.google_reviews_range_list_c.hidden}
{counter name="panelFieldCount" print=false}


{if is_string($fields.google_reviews_range_list_c.options)}
<input type="hidden" class="sugar_field" id="{$fields.google_reviews_range_list_c.name}" value="{ $fields.google_reviews_range_list_c.options }">
{ $fields.google_reviews_range_list_c.options }
{else}
<input type="hidden" class="sugar_field" id="{$fields.google_reviews_range_list_c.name}" value="{ $fields.google_reviews_range_list_c.value }">
{ $fields.google_reviews_range_list_c.options[$fields.google_reviews_range_list_c.value]}
{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="google_rating_range_list_c">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_GOOGLE_RATING_RANGE_LIST' module='Accounts'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="enum" field="google_rating_range_list_c" >

{if !$fields.google_rating_range_list_c.hidden}
{counter name="panelFieldCount" print=false}


{if is_string($fields.google_rating_range_list_c.options)}
<input type="hidden" class="sugar_field" id="{$fields.google_rating_range_list_c.name}" value="{ $fields.google_rating_range_list_c.options }">
{ $fields.google_rating_range_list_c.options }
{else}
<input type="hidden" class="sugar_field" id="{$fields.google_rating_range_list_c.name}" value="{ $fields.google_rating_range_list_c.value }">
{ $fields.google_rating_range_list_c.options[$fields.google_rating_range_list_c.value]}
{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>

</div>

</div>
</div>
</div>
{else}

<div class="panel panel-default">
<div class="panel-heading ">
<a class="" role="button" data-toggle="collapse" href="#top-panel-3" aria-expanded="false">
<div class="col-xs-10 col-sm-11 col-md-11">
{sugar_translate label='LBL_EDITVIEW_PANEL1' module='Accounts'}
</div>
</a>
</div>
<div class="panel-body panel-collapse collapse in panelContainer" id="top-panel-3" data-id="LBL_EDITVIEW_PANEL1">
<div class="tab-content">
<!-- TAB CONTENT -->





<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="nb_tables_range_list_c">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_NB_TABLES_RANGE_LIST' module='Accounts'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="enum" field="nb_tables_range_list_c" >

{if !$fields.nb_tables_range_list_c.hidden}
{counter name="panelFieldCount" print=false}


{if is_string($fields.nb_tables_range_list_c.options)}
<input type="hidden" class="sugar_field" id="{$fields.nb_tables_range_list_c.name}" value="{ $fields.nb_tables_range_list_c.options }">
{ $fields.nb_tables_range_list_c.options }
{else}
<input type="hidden" class="sugar_field" id="{$fields.nb_tables_range_list_c.name}" value="{ $fields.nb_tables_range_list_c.value }">
{ $fields.nb_tables_range_list_c.options[$fields.nb_tables_range_list_c.value]}
{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="ticket_moyen_range_c">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_TICKET_MOYEN_RANGE_C' module='Accounts'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="enum" field="ticket_moyen_range_c" >

{if !$fields.ticket_moyen_range_c.hidden}
{counter name="panelFieldCount" print=false}


{if is_string($fields.ticket_moyen_range_c.options)}
<input type="hidden" class="sugar_field" id="{$fields.ticket_moyen_range_c.name}" value="{ $fields.ticket_moyen_range_c.options }">
{ $fields.ticket_moyen_range_c.options }
{else}
<input type="hidden" class="sugar_field" id="{$fields.ticket_moyen_range_c.name}" value="{ $fields.ticket_moyen_range_c.value }">
{ $fields.ticket_moyen_range_c.options[$fields.ticket_moyen_range_c.value]}
{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="google_reviews_range_list_c">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_GOOGLE_REVIEWS_RANGE_LIST' module='Accounts'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="enum" field="google_reviews_range_list_c" >

{if !$fields.google_reviews_range_list_c.hidden}
{counter name="panelFieldCount" print=false}


{if is_string($fields.google_reviews_range_list_c.options)}
<input type="hidden" class="sugar_field" id="{$fields.google_reviews_range_list_c.name}" value="{ $fields.google_reviews_range_list_c.options }">
{ $fields.google_reviews_range_list_c.options }
{else}
<input type="hidden" class="sugar_field" id="{$fields.google_reviews_range_list_c.name}" value="{ $fields.google_reviews_range_list_c.value }">
{ $fields.google_reviews_range_list_c.options[$fields.google_reviews_range_list_c.value]}
{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="google_rating_range_list_c">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_GOOGLE_RATING_RANGE_LIST' module='Accounts'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="enum" field="google_rating_range_list_c" >

{if !$fields.google_rating_range_list_c.hidden}
{counter name="panelFieldCount" print=false}


{if is_string($fields.google_rating_range_list_c.options)}
<input type="hidden" class="sugar_field" id="{$fields.google_rating_range_list_c.name}" value="{ $fields.google_rating_range_list_c.options }">
{ $fields.google_rating_range_list_c.options }
{else}
<input type="hidden" class="sugar_field" id="{$fields.google_rating_range_list_c.name}" value="{ $fields.google_rating_range_list_c.value }">
{ $fields.google_rating_range_list_c.options[$fields.google_rating_range_list_c.value]}
{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>

</div>

</div>
</div>
</div>
{/if}





{if $config.enable_action_menu and $config.enable_action_menu != false}

<div class="panel panel-default">
<div class="panel-heading ">
<a class="" role="button" data-toggle="collapse" href="#top-panel-4" aria-expanded="false">
<div class="col-xs-10 col-sm-11 col-md-11">
{sugar_translate label='LBL_EDITVIEW_PANEL2' module='Accounts'}
</div>
</a>
</div>
<div class="panel-body panel-collapse collapse in panelContainer" id="top-panel-4"  data-id="LBL_EDITVIEW_PANEL2">
<div class="tab-content">
<!-- TAB CONTENT -->





<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="online_menu_url_c">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_ONLINE_MENU_URL_C' module='Accounts'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="url" field="online_menu_url_c" >

{if !$fields.online_menu_url_c.hidden}
{counter name="panelFieldCount" print=false}

{capture name=getLink assign=link}{$fields.online_menu_url_c.value}{/capture}
{if !empty($link)}
{capture name=getStart assign=linkStart}{$link|substr:0:7}{/capture}
<span class="sugar_field" id="{$fields.online_menu_url_c.name}">
<a href='{$link|to_url}' target='_self' >{$link}</a>
</span>
{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="reservation_c">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_RESERVATION' module='Accounts'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="varchar" field="reservation_c" >

{if !$fields.reservation_c.hidden}
{counter name="panelFieldCount" print=false}

{if strlen($fields.reservation_c.value) <= 0}
{assign var="value" value=$fields.reservation_c.default_value }
{else}
{assign var="value" value=$fields.reservation_c.value }
{/if} 
<span class="sugar_field" id="{$fields.reservation_c.name}">{$fields.reservation_c.value}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>

</div>

</div>
</div>
</div>
{else}

<div class="panel panel-default">
<div class="panel-heading ">
<a class="" role="button" data-toggle="collapse" href="#top-panel-4" aria-expanded="false">
<div class="col-xs-10 col-sm-11 col-md-11">
{sugar_translate label='LBL_EDITVIEW_PANEL2' module='Accounts'}
</div>
</a>
</div>
<div class="panel-body panel-collapse collapse in panelContainer" id="top-panel-4" data-id="LBL_EDITVIEW_PANEL2">
<div class="tab-content">
<!-- TAB CONTENT -->





<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="online_menu_url_c">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_ONLINE_MENU_URL_C' module='Accounts'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="url" field="online_menu_url_c" >

{if !$fields.online_menu_url_c.hidden}
{counter name="panelFieldCount" print=false}

{capture name=getLink assign=link}{$fields.online_menu_url_c.value}{/capture}
{if !empty($link)}
{capture name=getStart assign=linkStart}{$link|substr:0:7}{/capture}
<span class="sugar_field" id="{$fields.online_menu_url_c.name}">
<a href='{$link|to_url}' target='_self' >{$link}</a>
</span>
{/if}
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="reservation_c">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_RESERVATION' module='Accounts'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="varchar" field="reservation_c" >

{if !$fields.reservation_c.hidden}
{counter name="panelFieldCount" print=false}

{if strlen($fields.reservation_c.value) <= 0}
{assign var="value" value=$fields.reservation_c.default_value }
{else}
{assign var="value" value=$fields.reservation_c.value }
{/if} 
<span class="sugar_field" id="{$fields.reservation_c.name}">{$fields.reservation_c.value}</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>

</div>

</div>
</div>
</div>
{/if}
</div>
</div>

</form>
<script>SUGAR.util.doWhen("document.getElementById('form') != null",
        function(){ldelim}SUGAR.util.buildAccessKeyLabels();{rdelim});
</script>            <script type="text/javascript" src="include/InlineEditing/inlineEditing.js"></script>
<script type="text/javascript" src="modules/Favorites/favorites.js"></script>
{literal}
<script type="text/javascript">

                    let selectTabDetailView = function(tab) {
                        $('#content div.tab-content div.tab-pane-NOBOOTSTRAPTOGGLER').hide();
                        $('#content div.tab-content div.tab-pane-NOBOOTSTRAPTOGGLER').eq(tab).show().addClass('active').addClass('in');
                        $('#content div.detail-view div.panel-content div.panel.panel').hide();
                        $('#content div.panel-content div.panel.tab-panel-' + tab).show();
                    };

                    var selectTabOnError = function(tab) {
                        selectTabDetailView(tab);
                        $('#content ul.nav.nav-tabs > li').removeClass('active');
                        $('#content ul.nav.nav-tabs > li a').css('color', '');

                        $('#content ul.nav.nav-tabs > li').eq(tab).find('a').first().css('color', 'red');
                        $('#content ul.nav.nav-tabs > li').eq(tab).addClass('active');

                    };

                    var selectTabOnErrorInputHandle = function(inputHandle) {
                        var tab = $(inputHandle).closest('.tab-pane-NOBOOTSTRAPTOGGLER').attr('id').match(/^detailpanel_(.*)$/)[1];
                        selectTabOnError(tab);
                    };


                    $(function(){
                        $('#content ul.nav.nav-tabs > li > a[data-toggle="tab"]').click(function(e){
                            if(typeof $(this).parent().find('a').first().attr('id') != 'undefined') {
                                var tab = parseInt($(this).parent().find('a').first().attr('id').match(/^tab(?<number>(.)*)$/)[1]);
                                selectTabDetailView(tab);
                            }
                        });
                    });

                </script>
{/literal}