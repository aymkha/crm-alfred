
<div class="detail-border-bottom"></div>

{if $fields.recurring_source.value != '' && $fields.recurring_source.value != 'Sugar'}
<div class="clear"></div>
<div class="error">{$MOD.LBL_SYNCED_RECURRING_MSG}</div>
{/if}

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
<input type="hidden" name="isSaveAndNew">
<input type="hidden" name="status">
<input type="hidden" name="isSaveFromDetailView">
<input type="hidden" name="isSave">
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
onclick="window.location.href='index.php?module=Calls&action=EditView&record={$id}&return_module=Calls&return_action=DetailView&return_id={$id}'"/>
{/if}
{if $bean->aclAccess("edit")}
<input title="{$APP.LBL_DUPLICATE_BUTTON_TITLE}"
accessKey="{$APP.LBL_DUPLICATE_BUTTON_KEY}"
name="Duplicate"
id="duplicate_button"
class="button"
type="button"
value="{$APP.LBL_DUPLICATE_BUTTON_LABEL}"
onclick="window.location.href='index.php?module=Calls&action=EditView&record={$id}&return_module=Calls&return_action=DetailView&return_id={$id}&isDuplicate=true'"/>
{/if}
{if $bean->aclAccess("delete")}<input title="{$APP.LBL_DELETE_BUTTON_TITLE}" accessKey="{$APP.LBL_DELETE_BUTTON_KEY}" class="button" onclick="var _form = document.getElementById('formDetailView'); _form.return_module.value='Calls'; _form.return_action.value='ListView'; _form.action.value='Delete'; if(confirm('{$APP.NTC_DELETE_CONFIRMATION}')) SUGAR.ajaxUI.submitForm(_form); return false;" type="submit" name="Delete" value="{$APP.LBL_DELETE_BUTTON_LABEL}" id="delete_button">{/if} 
{if $fields.status.value != "Held" && $bean->aclAccess("edit")}<input title="{$APP.LBL_CLOSE_AND_CREATE_BUTTON_TITLE}" class="button" onclick="var _form = document.getElementById('formDetailView');_form.isSaveFromDetailView.value=true; _form.status.value='Held'; _form.action.value='Save';_form.return_module.value='Calls';_form.isDuplicate.value=true;_form.isSaveAndNew.value=true;_form.return_action.value='EditView'; _form.return_id.value='{$fields.id.value}';window.location.href='index.php?' + (new URLSearchParams(new FormData(_form)).toString());" name="button" id="close_create_button" type="button" value="{$APP.LBL_CLOSE_AND_CREATE_BUTTON_TITLE}"/>{/if}
{if $fields.status.value != "Held" && $bean->aclAccess("edit")}<input title="{$APP.LBL_CLOSE_BUTTON_TITLE}" accesskey="{$APP.LBL_CLOSE_BUTTON_KEY}" class="button" onclick="var _form = document.getElementById('formDetailView');_form.status.value='Held'; _form.action.value='Save';_form.return_module.value='Calls';_form.isSave.value=true;_form.return_action.value='DetailView'; _form.return_id.value='{$fields.id.value}';_form.isSaveFromDetailView.value=true;window.location.href='index.php?' + (new URLSearchParams(new FormData(_form)).toString());" name="button1" id="close_button" type="button" value="{$APP.LBL_CLOSE_BUTTON_TITLE}"/>{/if}
{if $fields.status.value != "Held"}<input title="{$MOD.LBL_RESCHEDULE}" class="button" onclick="get_form();" name="Reschedule" id="reschedule_button" value="{$MOD.LBL_RESCHEDULE}" type="button"/>{/if}
{if $bean->aclAccess("detail")}{if !empty($fields.id.value) && $isAuditEnabled}<input id="btn_view_change_log" title="{$APP.LNK_VIEW_CHANGE_LOG}" class="button" onclick='open_popup("Audit", "600", "400", "&record={$fields.id.value}&module_name=Calls", true, false,  {ldelim} "call_back_function":"set_return","form_name":"EditView","field_to_name_array":[] {rdelim} ); return false;' type="button" value="{$APP.LNK_VIEW_CHANGE_LOG}">{/if}{/if}
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
{sugar_translate label='LBL_EDITVIEW_PANEL1' module='Calls'}
</a>
<a id="xstab0" href="#" class="visible-xs first-tab dropdown-toggle" data-toggle="dropdown">
{sugar_translate label='LBL_EDITVIEW_PANEL1' module='Calls'}
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
onclick="window.location.href='index.php?module=Calls&action=EditView&record={$id}&return_module=Calls&return_action=DetailView&return_id={$id}'"/>
{/if}</li>
<li>{if $bean->aclAccess("edit")}
<input title="{$APP.LBL_DUPLICATE_BUTTON_TITLE}"
accessKey="{$APP.LBL_DUPLICATE_BUTTON_KEY}"
name="Duplicate"
id="duplicate_button"
class="button"
type="button"
value="{$APP.LBL_DUPLICATE_BUTTON_LABEL}"
onclick="window.location.href='index.php?module=Calls&action=EditView&record={$id}&return_module=Calls&return_action=DetailView&return_id={$id}&isDuplicate=true'"/>
{/if}</li>
<li>{if $bean->aclAccess("delete")}<input title="{$APP.LBL_DELETE_BUTTON_TITLE}" accessKey="{$APP.LBL_DELETE_BUTTON_KEY}" class="button" onclick="var _form = document.getElementById('formDetailView'); _form.return_module.value='Calls'; _form.return_action.value='ListView'; _form.action.value='Delete'; if(confirm('{$APP.NTC_DELETE_CONFIRMATION}')) SUGAR.ajaxUI.submitForm(_form); return false;" type="submit" name="Delete" value="{$APP.LBL_DELETE_BUTTON_LABEL}" id="delete_button">{/if} </li>
<li>{if $fields.status.value != "Held" && $bean->aclAccess("edit")}<input title="{$APP.LBL_CLOSE_AND_CREATE_BUTTON_TITLE}" class="button" onclick="var _form = document.getElementById('formDetailView');_form.isSaveFromDetailView.value=true; _form.status.value='Held'; _form.action.value='Save';_form.return_module.value='Calls';_form.isDuplicate.value=true;_form.isSaveAndNew.value=true;_form.return_action.value='EditView'; _form.return_id.value='{$fields.id.value}';window.location.href='index.php?' + (new URLSearchParams(new FormData(_form)).toString());" name="button" id="close_create_button" type="button" value="{$APP.LBL_CLOSE_AND_CREATE_BUTTON_TITLE}"/>{/if}</li>
<li>{if $fields.status.value != "Held" && $bean->aclAccess("edit")}<input title="{$APP.LBL_CLOSE_BUTTON_TITLE}" accesskey="{$APP.LBL_CLOSE_BUTTON_KEY}" class="button" onclick="var _form = document.getElementById('formDetailView');_form.status.value='Held'; _form.action.value='Save';_form.return_module.value='Calls';_form.isSave.value=true;_form.return_action.value='DetailView'; _form.return_id.value='{$fields.id.value}';_form.isSaveFromDetailView.value=true;window.location.href='index.php?' + (new URLSearchParams(new FormData(_form)).toString());" name="button1" id="close_button" type="button" value="{$APP.LBL_CLOSE_BUTTON_TITLE}"/>{/if}</li>
<li>{if $fields.status.value != "Held"}<input title="{$MOD.LBL_RESCHEDULE}" class="button" onclick="get_form();" name="Reschedule" id="reschedule_button" value="{$MOD.LBL_RESCHEDULE}" type="button"/>{/if}</li>
<li>{if $bean->aclAccess("detail")}{if !empty($fields.id.value) && $isAuditEnabled}<input id="btn_view_change_log" title="{$APP.LNK_VIEW_CHANGE_LOG}" class="button" onclick='open_popup("Audit", "600", "400", "&record={$fields.id.value}&module_name=Calls", true, false,  {ldelim} "call_back_function":"set_return","form_name":"EditView","field_to_name_array":[] {rdelim} ); return false;' type="button" value="{$APP.LNK_VIEW_CHANGE_LOG}">{/if}{/if}</li>
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



<div class="col-xs-12 col-sm-12 detail-view-row-item" data-field="action_list_c">


<div class="col-xs-12 col-sm-2 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_ACTION_LIST' module='Calls'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-10 detail-view-field d-flex inlineEdit" type="enum" field="action_list_c" colspan='3'>

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
{sugar_translate label='LBL_EDITVIEW_PANEL1' module='Calls'}
</div>
</a>
</div>
<div class="panel-body panel-collapse collapse in panelContainer" id="top-panel--1" data-id="LBL_EDITVIEW_PANEL1">
<div class="tab-content">
<!-- TAB CONTENT -->





<div class="row detail-view-row">



<div class="col-xs-12 col-sm-12 detail-view-row-item" data-field="action_list_c">


<div class="col-xs-12 col-sm-2 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_ACTION_LIST' module='Calls'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-10 detail-view-field d-flex inlineEdit" type="enum" field="action_list_c" colspan='3'>

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
{sugar_translate label='LBL_CALL_INFORMATION' module='Calls'}
</div>
</a>
</div>
<div class="panel-body panel-collapse collapse in panelContainer" id="top-panel-0"  data-id="LBL_CALL_INFORMATION">
<div class="tab-content">
<!-- TAB CONTENT -->





<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="name">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_SUBJECT' module='Calls'}{/capture}
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




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="status">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_STATUS' module='Calls'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="enum" field="status" >

{if !$fields.status.hidden}
{counter name="panelFieldCount" print=false}


{if is_string($fields.status.options)}
<input type="hidden" class="sugar_field" id="{$fields.status.name}" value="{ $fields.status.options }">
{ $fields.status.options }
{else}
<input type="hidden" class="sugar_field" id="{$fields.status.name}" value="{ $fields.status.value }">
{ $fields.status.options[$fields.status.value]}
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



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="date_start">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_DATE_TIME' module='Calls'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="datetimecombo" field="date_start" >

{if !$fields.date_start.hidden}
{counter name="panelFieldCount" print=false}
<span id="date_start" class="sugar_field">{$fields.date_start.value} {$fields.time_start.value}&nbsp;</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="parent_name">


<div class="col-xs-12 col-sm-4 label col-2-label">


{sugar_translate label='LBL_MODULE_NAME' module=$fields.parent_type.value}
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="parent" field="parent_name" >

{if !$fields.parent_name.hidden}
{counter name="panelFieldCount" print=false}

<input type="hidden" class="sugar_field" id="{$fields.parent_name.name}" value="{$fields.parent_name.value}">
<input type="hidden" class="sugar_field" id="parent_id" value="{$fields.parent_id.value}">
<a href="index.php?module={$fields.parent_type.value}&action=DetailView&record={$fields.parent_id.value}" class="tabDetailViewDFLink">{$fields.parent_name.value}</a>
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-12 detail-view-row-item" data-field="duration_hours">


<div class="col-xs-12 col-sm-2 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_DURATION' module='Calls'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-10 detail-view-field d-flex inlineEdit" type="int" field="duration_hours" colspan='3'>

{if !$fields.duration_hours.hidden}
{counter name="panelFieldCount" print=false}
<span id="duration_hours" class="sugar_field">{$fields.duration_hours.value}{$MOD.LBL_HOURS_ABBREV} {$fields.duration_minutes.value}{$MOD.LBL_MINSS_ABBREV}&nbsp;</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-12 detail-view-row-item" data-field="reminders">


<div class="col-xs-12 col-sm-2 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_REMINDERS' module='Calls'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-10 detail-view-field d-flex inlineEdit" type="function" field="reminders" colspan='3'>

{if !$fields.reminders.hidden}
{counter name="panelFieldCount" print=false}
<span id='reminders_span'>
{$fields.reminders.value}
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



<div class="col-xs-12 col-sm-12 detail-view-row-item" data-field="description">


<div class="col-xs-12 col-sm-2 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_DESCRIPTION' module='Calls'}{/capture}
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



<div class="col-xs-12 col-sm-12 detail-view-row-item" data-field="assigned_user_name">


<div class="col-xs-12 col-sm-2 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_ASSIGNED_TO' module='Calls'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-10 detail-view-field d-flex inlineEdit" type="relate" field="assigned_user_name" colspan='3'>

{if !$fields.assigned_user_name.hidden}
{counter name="panelFieldCount" print=false}
<span id="assigned_user_name" class="sugar_field">{$fields.assigned_user_name.value}</span>
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
{sugar_translate label='LBL_CALL_INFORMATION' module='Calls'}
</div>
</a>
</div>
<div class="panel-body panel-collapse collapse in panelContainer" id="top-panel-0" data-id="LBL_CALL_INFORMATION">
<div class="tab-content">
<!-- TAB CONTENT -->





<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="name">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_SUBJECT' module='Calls'}{/capture}
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




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="status">


<div class="col-xs-12 col-sm-4 label col-2-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_STATUS' module='Calls'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="enum" field="status" >

{if !$fields.status.hidden}
{counter name="panelFieldCount" print=false}


{if is_string($fields.status.options)}
<input type="hidden" class="sugar_field" id="{$fields.status.name}" value="{ $fields.status.options }">
{ $fields.status.options }
{else}
<input type="hidden" class="sugar_field" id="{$fields.status.name}" value="{ $fields.status.value }">
{ $fields.status.options[$fields.status.value]}
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



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="date_start">


<div class="col-xs-12 col-sm-4 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_DATE_TIME' module='Calls'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="datetimecombo" field="date_start" >

{if !$fields.date_start.hidden}
{counter name="panelFieldCount" print=false}
<span id="date_start" class="sugar_field">{$fields.date_start.value} {$fields.time_start.value}&nbsp;</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="parent_name">


<div class="col-xs-12 col-sm-4 label col-2-label">


{sugar_translate label='LBL_MODULE_NAME' module=$fields.parent_type.value}
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="parent" field="parent_name" >

{if !$fields.parent_name.hidden}
{counter name="panelFieldCount" print=false}

<input type="hidden" class="sugar_field" id="{$fields.parent_name.name}" value="{$fields.parent_name.value}">
<input type="hidden" class="sugar_field" id="parent_id" value="{$fields.parent_id.value}">
<a href="index.php?module={$fields.parent_type.value}&action=DetailView&record={$fields.parent_id.value}" class="tabDetailViewDFLink">{$fields.parent_name.value}</a>
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-12 detail-view-row-item" data-field="duration_hours">


<div class="col-xs-12 col-sm-2 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_DURATION' module='Calls'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-10 detail-view-field d-flex inlineEdit" type="int" field="duration_hours" colspan='3'>

{if !$fields.duration_hours.hidden}
{counter name="panelFieldCount" print=false}
<span id="duration_hours" class="sugar_field">{$fields.duration_hours.value}{$MOD.LBL_HOURS_ABBREV} {$fields.duration_minutes.value}{$MOD.LBL_MINSS_ABBREV}&nbsp;</span>
{/if}

<div class="inlineEditIcon col-xs-hidden">
{sugar_getimage name="pencil"}
</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-12 detail-view-row-item" data-field="reminders">


<div class="col-xs-12 col-sm-2 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_REMINDERS' module='Calls'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-10 detail-view-field d-flex inlineEdit" type="function" field="reminders" colspan='3'>

{if !$fields.reminders.hidden}
{counter name="panelFieldCount" print=false}
<span id='reminders_span'>
{$fields.reminders.value}
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



<div class="col-xs-12 col-sm-12 detail-view-row-item" data-field="description">


<div class="col-xs-12 col-sm-2 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_DESCRIPTION' module='Calls'}{/capture}
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



<div class="col-xs-12 col-sm-12 detail-view-row-item" data-field="assigned_user_name">


<div class="col-xs-12 col-sm-2 label col-1-label">


{capture name="label" assign="label"}{sugar_translate label='LBL_ASSIGNED_TO' module='Calls'}{/capture}
{$label|strip_semicolon}:
</div>


<div class="col-xs-12 col-sm-10 detail-view-field d-flex inlineEdit" type="relate" field="assigned_user_name" colspan='3'>

{if !$fields.assigned_user_name.hidden}
{counter name="panelFieldCount" print=false}
<span id="assigned_user_name" class="sugar_field">{$fields.assigned_user_name.value}</span>
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