<?php
/* Smarty version 4.3.2, created on 2025-12-23 00:48:42
  from '/var/www/html/suitecrm/public/legacy/cache/themes/suite8/modules/Accounts/DetailView.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.3.2',
  'unifunc' => 'content_6949d8da469a77_30319107',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '64ac2085a888493a3d6dd9c23fb25d92551bb839' => 
    array (
      0 => '/var/www/html/suitecrm/public/legacy/cache/themes/suite8/modules/Accounts/DetailView.tpl',
      1 => 1766447322,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_6949d8da469a77_30319107 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_checkPlugins(array(0=>array('file'=>'/var/www/html/suitecrm/public/legacy/include/Smarty/plugins/function.sugar_include.php','function'=>'smarty_function_sugar_include',),1=>array('file'=>'/var/www/html/suitecrm/public/legacy/include/Smarty/plugins/function.sugar_translate.php','function'=>'smarty_function_sugar_translate',),2=>array('file'=>'/var/www/html/suitecrm/public/legacy/include/Smarty/plugins/modifier.strip_semicolon.php','function'=>'smarty_modifier_strip_semicolon',),3=>array('file'=>'/var/www/html/suitecrm/public/legacy/include/Smarty/plugins/function.counter.php','function'=>'smarty_function_counter',),4=>array('file'=>'/var/www/html/suitecrm/public/legacy/include/Smarty/plugins/function.sugar_getimage.php','function'=>'smarty_function_sugar_getimage',),5=>array('file'=>'/var/www/html/suitecrm/public/legacy/include/Smarty/plugins/function.sugar_phone.php','function'=>'smarty_function_sugar_phone',),6=>array('file'=>'/var/www/html/suitecrm/public/legacy/include/Smarty/plugins/modifier.to_url.php','function'=>'smarty_modifier_to_url',),7=>array('file'=>'/var/www/html/suitecrm/public/legacy/include/Smarty/plugins/modifier.escape.php','function'=>'smarty_modifier_escape',),));
?>

<div class="detail-border-bottom"></div>

<?php echo '<script'; ?>
 language="javascript">
    
    SUGAR.util.doWhen(function () {
        return $("#contentTable").length == 0;
    }, SUGAR.themes.actionMenu);
    
<?php echo '</script'; ?>
>
<table cellpadding="0" cellspacing="0" border="0" width="100%" id="">
<tr>
<td class="buttons" align="left" NOWRAP width="80%">
<div class="actionsContainer">
<form action="index.php" method="post" name="DetailView" id="formDetailView">
<input type="hidden" name="module" value="<?php echo $_smarty_tpl->tpl_vars['module']->value;?>
">
<input type="hidden" name="record" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['id']['value'];?>
">
<input type="hidden" name="return_action">
<input type="hidden" name="return_module">
<input type="hidden" name="return_id">
<input type="hidden" name="module_tab">
<input type="hidden" name="isDuplicate" value="false">
<input type="hidden" name="offset" value="<?php echo $_smarty_tpl->tpl_vars['offset']->value;?>
">
<input type="hidden" name="action" value="EditView">
<input type="hidden" name="sugar_body_only">
<?php if (!$_smarty_tpl->tpl_vars['config']->value['enable_action_menu']) {?>
<div class="buttons">
<?php if ($_smarty_tpl->tpl_vars['bean']->value->aclAccess("edit")) {?>
<input title="<?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_EDIT_BUTTON_TITLE'];?>
"
accessKey="<?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_EDIT_BUTTON_KEY'];?>
"
name="Edit"
id="edit_button"
class="button primary"
type="button"
value="<?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_EDIT_BUTTON_LABEL'];?>
"
onclick="window.location.href='index.php?module=Accounts&action=EditView&record=<?php echo $_smarty_tpl->tpl_vars['id']->value;?>
&return_module=Accounts&return_action=DetailView&return_id=<?php echo $_smarty_tpl->tpl_vars['id']->value;?>
'"/>
<?php }
if ($_smarty_tpl->tpl_vars['bean']->value->aclAccess("edit")) {?>
<input title="<?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_DUPLICATE_BUTTON_TITLE'];?>
"
accessKey="<?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_DUPLICATE_BUTTON_KEY'];?>
"
name="Duplicate"
id="duplicate_button"
class="button"
type="button"
value="<?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_DUPLICATE_BUTTON_LABEL'];?>
"
onclick="window.location.href='index.php?module=Accounts&action=EditView&record=<?php echo $_smarty_tpl->tpl_vars['id']->value;?>
&return_module=Accounts&return_action=DetailView&return_id=<?php echo $_smarty_tpl->tpl_vars['id']->value;?>
&isDuplicate=true'"/>
<?php }
if ($_smarty_tpl->tpl_vars['bean']->value->aclAccess("delete")) {?><input title="<?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_DELETE_BUTTON_TITLE'];?>
" accessKey="<?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_DELETE_BUTTON_KEY'];?>
" class="button" onclick="var _form = document.getElementById('formDetailView'); _form.return_module.value='Accounts'; _form.return_action.value='ListView'; _form.action.value='Delete'; if(confirm('<?php echo $_smarty_tpl->tpl_vars['APP']->value['NTC_DELETE_CONFIRMATION'];?>
')) SUGAR.ajaxUI.submitForm(_form); return false;" type="submit" name="Delete" value="<?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_DELETE_BUTTON_LABEL'];?>
" id="delete_button"><?php }?> 
<?php if ($_smarty_tpl->tpl_vars['bean']->value->aclAccess("edit") && $_smarty_tpl->tpl_vars['bean']->value->aclAccess("delete")) {?>
<input title="<?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_DUP_MERGE'];?>
"
name="Merge"
id="merge_duplicate_button"
class="button primary"
type="button"
value="<?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_DUP_MERGE'];?>
"
onclick="window.location.href='index.php?module=MergeRecords&action=Step1&record=<?php echo $_smarty_tpl->tpl_vars['id']->value;?>
&return_module=Accounts&return_action=DetailView&return_id=<?php echo $_smarty_tpl->tpl_vars['id']->value;?>
'"/>
<?php }?>
<input class="button hidden" id="send_confirm_opt_in_email" title="<?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_SEND_CONFIRM_OPT_IN_EMAIL'];?>
" onclick="var _form = document.getElementById('formDetailView');_form.return_module.value='Accounts'; _form.return_action.value='DetailView'; _form.return_id.value='<?php echo $_smarty_tpl->tpl_vars['fields']->value['id']['value'];?>
'; _form.action.value='sendConfirmOptInEmail'; _form.module.value='Accounts'; _form.module_tab.value='Accounts';window.location.href='index.php?' + (new URLSearchParams(new FormData(_form)).toString());" name="send_confirm_opt_in_email" disabled="1" type="button" value="<?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_SEND_CONFIRM_OPT_IN_EMAIL'];?>
"/>
<input type="button" class="button" onClick="showPopup();" value="<?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_PRINT_AS_PDF'];?>
"/>
<?php if ($_smarty_tpl->tpl_vars['bean']->value->aclAccess("detail")) {
if (!empty($_smarty_tpl->tpl_vars['fields']->value['id']['value']) && $_smarty_tpl->tpl_vars['isAuditEnabled']->value) {?><input id="btn_view_change_log" title="<?php echo $_smarty_tpl->tpl_vars['APP']->value['LNK_VIEW_CHANGE_LOG'];?>
" class="button" onclick='open_popup("Audit", "600", "400", "&record=<?php echo $_smarty_tpl->tpl_vars['fields']->value['id']['value'];?>
&module_name=Accounts", true, false,  { "call_back_function":"set_return","form_name":"EditView","field_to_name_array":[] } ); return false;' type="button" value="<?php echo $_smarty_tpl->tpl_vars['APP']->value['LNK_VIEW_CHANGE_LOG'];?>
"><?php }
}?>
</div>
<?php }?>
</form>
</div>
</td>
<td align="right" width="20%" class="buttons"><?php echo $_smarty_tpl->tpl_vars['ADMIN_EDIT']->value;?>

</td>
</tr>
</table>
<?php echo smarty_function_sugar_include(array('include'=>$_smarty_tpl->tpl_vars['includes']->value),$_smarty_tpl);?>

<div class="detail-view">
<div class="mobile-pagination"><?php echo $_smarty_tpl->tpl_vars['PAGINATION']->value;?>
</div>

<ul class="nav nav-tabs">

<?php if ($_smarty_tpl->tpl_vars['config']->value['enable_action_menu'] && $_smarty_tpl->tpl_vars['config']->value['enable_action_menu'] != false) {?>
<li role="presentation" class="active">
<a id="tab0" data-toggle="tab" class="hidden-xs">
<?php echo smarty_function_sugar_translate(array('label'=>'LBL_EDITVIEW_PANEL5','module'=>'Accounts'),$_smarty_tpl);?>

</a>
<a id="xstab0" href="#" class="visible-xs first-tab dropdown-toggle" data-toggle="dropdown">
<?php echo smarty_function_sugar_translate(array('label'=>'LBL_EDITVIEW_PANEL5','module'=>'Accounts'),$_smarty_tpl);?>

</a>
</li>





<?php }
if ($_smarty_tpl->tpl_vars['config']->value['enable_action_menu'] && $_smarty_tpl->tpl_vars['config']->value['enable_action_menu'] != false) {?>
<li id="tab-actions" class="dropdown">
<a class="dropdown-toggle" data-toggle="dropdown" href="#">ACTIONS<span class="suitepicon suitepicon-action-caret"></span></a>
<ul class="dropdown-menu">
<li><?php if ($_smarty_tpl->tpl_vars['bean']->value->aclAccess("edit")) {?>
<input title="<?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_EDIT_BUTTON_TITLE'];?>
"
accessKey="<?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_EDIT_BUTTON_KEY'];?>
"
name="Edit"
id="edit_button"
class="button primary"
type="button"
value="<?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_EDIT_BUTTON_LABEL'];?>
"
onclick="window.location.href='index.php?module=Accounts&action=EditView&record=<?php echo $_smarty_tpl->tpl_vars['id']->value;?>
&return_module=Accounts&return_action=DetailView&return_id=<?php echo $_smarty_tpl->tpl_vars['id']->value;?>
'"/>
<?php }?></li>
<li><?php if ($_smarty_tpl->tpl_vars['bean']->value->aclAccess("edit")) {?>
<input title="<?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_DUPLICATE_BUTTON_TITLE'];?>
"
accessKey="<?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_DUPLICATE_BUTTON_KEY'];?>
"
name="Duplicate"
id="duplicate_button"
class="button"
type="button"
value="<?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_DUPLICATE_BUTTON_LABEL'];?>
"
onclick="window.location.href='index.php?module=Accounts&action=EditView&record=<?php echo $_smarty_tpl->tpl_vars['id']->value;?>
&return_module=Accounts&return_action=DetailView&return_id=<?php echo $_smarty_tpl->tpl_vars['id']->value;?>
&isDuplicate=true'"/>
<?php }?></li>
<li><?php if ($_smarty_tpl->tpl_vars['bean']->value->aclAccess("delete")) {?><input title="<?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_DELETE_BUTTON_TITLE'];?>
" accessKey="<?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_DELETE_BUTTON_KEY'];?>
" class="button" onclick="var _form = document.getElementById('formDetailView'); _form.return_module.value='Accounts'; _form.return_action.value='ListView'; _form.action.value='Delete'; if(confirm('<?php echo $_smarty_tpl->tpl_vars['APP']->value['NTC_DELETE_CONFIRMATION'];?>
')) SUGAR.ajaxUI.submitForm(_form); return false;" type="submit" name="Delete" value="<?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_DELETE_BUTTON_LABEL'];?>
" id="delete_button"><?php }?> </li>
<li><?php if ($_smarty_tpl->tpl_vars['bean']->value->aclAccess("edit") && $_smarty_tpl->tpl_vars['bean']->value->aclAccess("delete")) {?>
<input title="<?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_DUP_MERGE'];?>
"
name="Merge"
id="merge_duplicate_button"
class="button primary"
type="button"
value="<?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_DUP_MERGE'];?>
"
onclick="window.location.href='index.php?module=MergeRecords&action=Step1&record=<?php echo $_smarty_tpl->tpl_vars['id']->value;?>
&return_module=Accounts&return_action=DetailView&return_id=<?php echo $_smarty_tpl->tpl_vars['id']->value;?>
'"/>
<?php }?></li>
<li><input class="button hidden" id="send_confirm_opt_in_email" title="<?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_SEND_CONFIRM_OPT_IN_EMAIL'];?>
" onclick="var _form = document.getElementById('formDetailView');_form.return_module.value='Accounts'; _form.return_action.value='DetailView'; _form.return_id.value='<?php echo $_smarty_tpl->tpl_vars['fields']->value['id']['value'];?>
'; _form.action.value='sendConfirmOptInEmail'; _form.module.value='Accounts'; _form.module_tab.value='Accounts';window.location.href='index.php?' + (new URLSearchParams(new FormData(_form)).toString());" name="send_confirm_opt_in_email" disabled="1" type="button" value="<?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_SEND_CONFIRM_OPT_IN_EMAIL'];?>
"/></li>
<li><input type="button" class="button" onClick="showPopup();" value="<?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_PRINT_AS_PDF'];?>
"/></li>
<li><?php if ($_smarty_tpl->tpl_vars['bean']->value->aclAccess("detail")) {
if (!empty($_smarty_tpl->tpl_vars['fields']->value['id']['value']) && $_smarty_tpl->tpl_vars['isAuditEnabled']->value) {?><input id="btn_view_change_log" title="<?php echo $_smarty_tpl->tpl_vars['APP']->value['LNK_VIEW_CHANGE_LOG'];?>
" class="button" onclick='open_popup("Audit", "600", "400", "&record=<?php echo $_smarty_tpl->tpl_vars['fields']->value['id']['value'];?>
&module_name=Accounts", true, false,  { "call_back_function":"set_return","form_name":"EditView","field_to_name_array":[] } ); return false;' type="button" value="<?php echo $_smarty_tpl->tpl_vars['APP']->value['LNK_VIEW_CHANGE_LOG'];?>
"><?php }
}?></li>
</ul>
</li>
<li class="tab-inline-pagination">
<?php echo $_smarty_tpl->tpl_vars['PAGINATION']->value;?>

</li>
<?php }?>
</ul>
<div class="clearfix"></div>

<?php if ($_smarty_tpl->tpl_vars['config']->value['enable_action_menu'] && $_smarty_tpl->tpl_vars['config']->value['enable_action_menu'] != false) {?>

<div class="tab-content">
<?php } else { ?>

<div class="tab-content" style="padding: 0; border: 0;">
<?php }?>


<?php if ($_smarty_tpl->tpl_vars['config']->value['enable_action_menu'] && $_smarty_tpl->tpl_vars['config']->value['enable_action_menu'] != false) {?>
<div class="tab-pane-NOBOOTSTRAPTOGGLER active fade in" id='tab-content-0'>





<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="status_du_restaurant_c">


<div class="col-xs-12 col-sm-4 label col-1-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_STATUS_DU_RESTAURANT','module'=>'Accounts'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="enum" field="status_du_restaurant_c" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['status_du_restaurant_c']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>



<?php if (is_string($_smarty_tpl->tpl_vars['fields']->value['status_du_restaurant_c']['options'])) {?>
<input type="hidden" class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['status_du_restaurant_c']['name'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['status_du_restaurant_c']['options'];?>
">
<?php echo $_smarty_tpl->tpl_vars['fields']->value['status_du_restaurant_c']['options'];?>

<?php } else { ?>
<input type="hidden" class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['status_du_restaurant_c']['name'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['status_du_restaurant_c']['value'];?>
">
<?php echo $_smarty_tpl->tpl_vars['fields']->value['status_du_restaurant_c']['options'][$_smarty_tpl->tpl_vars['fields']->value['status_du_restaurant_c']['value']];?>

<?php }
}?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="tables_equipees_alfred_c">


<div class="col-xs-12 col-sm-4 label col-2-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_TABLES_EQUIPEES_ALFRED','module'=>'Accounts'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="enum" field="tables_equipees_alfred_c" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['tables_equipees_alfred_c']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>



<?php if (is_string($_smarty_tpl->tpl_vars['fields']->value['tables_equipees_alfred_c']['options'])) {?>
<input type="hidden" class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['tables_equipees_alfred_c']['name'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['tables_equipees_alfred_c']['options'];?>
">
<?php echo $_smarty_tpl->tpl_vars['fields']->value['tables_equipees_alfred_c']['options'];?>

<?php } else { ?>
<input type="hidden" class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['tables_equipees_alfred_c']['name'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['tables_equipees_alfred_c']['value'];?>
">
<?php echo $_smarty_tpl->tpl_vars['fields']->value['tables_equipees_alfred_c']['options'][$_smarty_tpl->tpl_vars['fields']->value['tables_equipees_alfred_c']['value']];?>

<?php }
}?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>

</div>

</div>
<?php } else { ?>

<div class="tab-pane-NOBOOTSTRAPTOGGLER panel-collapse"></div>
<?php }?>
</div>

<div class="panel-content">





<?php if ($_smarty_tpl->tpl_vars['config']->value['enable_action_menu'] && $_smarty_tpl->tpl_vars['config']->value['enable_action_menu'] != false) {?>

<?php } else { ?>

<div class="panel panel-default">
<div class="panel-heading ">
<a class="" role="button" data-toggle="collapse" href="#top-panel--1" aria-expanded="false">
<div class="col-xs-10 col-sm-11 col-md-11">
<?php echo smarty_function_sugar_translate(array('label'=>'LBL_EDITVIEW_PANEL5','module'=>'Accounts'),$_smarty_tpl);?>

</div>
</a>
</div>
<div class="panel-body panel-collapse collapse in panelContainer" id="top-panel--1" data-id="LBL_EDITVIEW_PANEL5">
<div class="tab-content">
<!-- TAB CONTENT -->





<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="status_du_restaurant_c">


<div class="col-xs-12 col-sm-4 label col-1-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_STATUS_DU_RESTAURANT','module'=>'Accounts'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="enum" field="status_du_restaurant_c" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['status_du_restaurant_c']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>



<?php if (is_string($_smarty_tpl->tpl_vars['fields']->value['status_du_restaurant_c']['options'])) {?>
<input type="hidden" class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['status_du_restaurant_c']['name'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['status_du_restaurant_c']['options'];?>
">
<?php echo $_smarty_tpl->tpl_vars['fields']->value['status_du_restaurant_c']['options'];?>

<?php } else { ?>
<input type="hidden" class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['status_du_restaurant_c']['name'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['status_du_restaurant_c']['value'];?>
">
<?php echo $_smarty_tpl->tpl_vars['fields']->value['status_du_restaurant_c']['options'][$_smarty_tpl->tpl_vars['fields']->value['status_du_restaurant_c']['value']];?>

<?php }
}?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="tables_equipees_alfred_c">


<div class="col-xs-12 col-sm-4 label col-2-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_TABLES_EQUIPEES_ALFRED','module'=>'Accounts'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="enum" field="tables_equipees_alfred_c" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['tables_equipees_alfred_c']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>



<?php if (is_string($_smarty_tpl->tpl_vars['fields']->value['tables_equipees_alfred_c']['options'])) {?>
<input type="hidden" class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['tables_equipees_alfred_c']['name'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['tables_equipees_alfred_c']['options'];?>
">
<?php echo $_smarty_tpl->tpl_vars['fields']->value['tables_equipees_alfred_c']['options'];?>

<?php } else { ?>
<input type="hidden" class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['tables_equipees_alfred_c']['name'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['tables_equipees_alfred_c']['value'];?>
">
<?php echo $_smarty_tpl->tpl_vars['fields']->value['tables_equipees_alfred_c']['options'][$_smarty_tpl->tpl_vars['fields']->value['tables_equipees_alfred_c']['value']];?>

<?php }
}?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>

</div>

</div>
</div>
</div>
<?php }?>





<?php if ($_smarty_tpl->tpl_vars['config']->value['enable_action_menu'] && $_smarty_tpl->tpl_vars['config']->value['enable_action_menu'] != false) {?>

<div class="panel panel-default">
<div class="panel-heading ">
<a class="" role="button" data-toggle="collapse" href="#top-panel-0" aria-expanded="false">
<div class="col-xs-10 col-sm-11 col-md-11">
<?php echo smarty_function_sugar_translate(array('label'=>'LBL_EDITVIEW_PANEL4','module'=>'Accounts'),$_smarty_tpl);?>

</div>
</a>
</div>
<div class="panel-body panel-collapse collapse in panelContainer" id="top-panel-0"  data-id="LBL_EDITVIEW_PANEL4">
<div class="tab-content">
<!-- TAB CONTENT -->





<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="action_list_c">


<div class="col-xs-12 col-sm-4 label col-1-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_ACTION_LIST','module'=>'Accounts'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="enum" field="action_list_c" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['action_list_c']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>



<?php if (is_string($_smarty_tpl->tpl_vars['fields']->value['action_list_c']['options'])) {?>
<input type="hidden" class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['action_list_c']['name'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['action_list_c']['options'];?>
">
<?php echo $_smarty_tpl->tpl_vars['fields']->value['action_list_c']['options'];?>

<?php } else { ?>
<input type="hidden" class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['action_list_c']['name'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['action_list_c']['value'];?>
">
<?php echo $_smarty_tpl->tpl_vars['fields']->value['action_list_c']['options'][$_smarty_tpl->tpl_vars['fields']->value['action_list_c']['value']];?>

<?php }
}?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="next_action_date_c">


<div class="col-xs-12 col-sm-4 label col-2-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_NEXT_ACTION_DATE_C','module'=>'Accounts'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="datetimecombo" field="next_action_date_c" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['next_action_date_c']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (strlen($_smarty_tpl->tpl_vars['fields']->value['next_action_date_c']['value']) <= 0) {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['next_action_date_c']['default_value']);
} else {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['next_action_date_c']['value']);
}?> 
<span class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['next_action_date_c']['name'];?>
"><?php echo $_smarty_tpl->tpl_vars['fields']->value['next_action_date_c']['value'];?>
</span>
<?php }?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-12 detail-view-row-item" data-field="assigned_user_name">


<div class="col-xs-12 col-sm-2 label col-1-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_ASSIGNED_TO','module'=>'Accounts'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-10 detail-view-field d-flex inlineEdit" type="relate" field="assigned_user_name" colspan='3'>

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['assigned_user_name']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<span id="assigned_user_id" class="sugar_field" data-id-value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['assigned_user_id']['value'];?>
"><?php echo $_smarty_tpl->tpl_vars['fields']->value['assigned_user_name']['value'];?>
</span>
<?php }?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>

</div>

</div>
</div>
</div>
<?php } else { ?>

<div class="panel panel-default">
<div class="panel-heading ">
<a class="" role="button" data-toggle="collapse" href="#top-panel-0" aria-expanded="false">
<div class="col-xs-10 col-sm-11 col-md-11">
<?php echo smarty_function_sugar_translate(array('label'=>'LBL_EDITVIEW_PANEL4','module'=>'Accounts'),$_smarty_tpl);?>

</div>
</a>
</div>
<div class="panel-body panel-collapse collapse in panelContainer" id="top-panel-0" data-id="LBL_EDITVIEW_PANEL4">
<div class="tab-content">
<!-- TAB CONTENT -->





<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="action_list_c">


<div class="col-xs-12 col-sm-4 label col-1-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_ACTION_LIST','module'=>'Accounts'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="enum" field="action_list_c" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['action_list_c']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>



<?php if (is_string($_smarty_tpl->tpl_vars['fields']->value['action_list_c']['options'])) {?>
<input type="hidden" class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['action_list_c']['name'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['action_list_c']['options'];?>
">
<?php echo $_smarty_tpl->tpl_vars['fields']->value['action_list_c']['options'];?>

<?php } else { ?>
<input type="hidden" class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['action_list_c']['name'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['action_list_c']['value'];?>
">
<?php echo $_smarty_tpl->tpl_vars['fields']->value['action_list_c']['options'][$_smarty_tpl->tpl_vars['fields']->value['action_list_c']['value']];?>

<?php }
}?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="next_action_date_c">


<div class="col-xs-12 col-sm-4 label col-2-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_NEXT_ACTION_DATE_C','module'=>'Accounts'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="datetimecombo" field="next_action_date_c" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['next_action_date_c']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (strlen($_smarty_tpl->tpl_vars['fields']->value['next_action_date_c']['value']) <= 0) {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['next_action_date_c']['default_value']);
} else {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['next_action_date_c']['value']);
}?> 
<span class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['next_action_date_c']['name'];?>
"><?php echo $_smarty_tpl->tpl_vars['fields']->value['next_action_date_c']['value'];?>
</span>
<?php }?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-12 detail-view-row-item" data-field="assigned_user_name">


<div class="col-xs-12 col-sm-2 label col-1-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_ASSIGNED_TO','module'=>'Accounts'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-10 detail-view-field d-flex inlineEdit" type="relate" field="assigned_user_name" colspan='3'>

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['assigned_user_name']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<span id="assigned_user_id" class="sugar_field" data-id-value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['assigned_user_id']['value'];?>
"><?php echo $_smarty_tpl->tpl_vars['fields']->value['assigned_user_name']['value'];?>
</span>
<?php }?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>

</div>

</div>
</div>
</div>
<?php }?>





<?php if ($_smarty_tpl->tpl_vars['config']->value['enable_action_menu'] && $_smarty_tpl->tpl_vars['config']->value['enable_action_menu'] != false) {?>

<div class="panel panel-default">
<div class="panel-heading ">
<a class="" role="button" data-toggle="collapse" href="#top-panel-1" aria-expanded="false">
<div class="col-xs-10 col-sm-11 col-md-11">
<?php echo smarty_function_sugar_translate(array('label'=>'LBL_EDITVIEW_PANEL3','module'=>'Accounts'),$_smarty_tpl);?>

</div>
</a>
</div>
<div class="panel-body panel-collapse collapse in panelContainer" id="top-panel-1"  data-id="LBL_EDITVIEW_PANEL3">
<div class="tab-content">
<!-- TAB CONTENT -->





<div class="row detail-view-row">



<div class="col-xs-12 col-sm-12 detail-view-row-item" data-field="interest_level_c">


<div class="col-xs-12 col-sm-2 label col-1-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_INTEREST_LEVEL_C','module'=>'Accounts'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-10 detail-view-field d-flex inlineEdit" type="enum" field="interest_level_c" colspan='3'>

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['interest_level_c']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>



<?php if (is_string($_smarty_tpl->tpl_vars['fields']->value['interest_level_c']['options'])) {?>
<input type="hidden" class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['interest_level_c']['name'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['interest_level_c']['options'];?>
">
<?php echo $_smarty_tpl->tpl_vars['fields']->value['interest_level_c']['options'];?>

<?php } else { ?>
<input type="hidden" class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['interest_level_c']['name'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['interest_level_c']['value'];?>
">
<?php echo $_smarty_tpl->tpl_vars['fields']->value['interest_level_c']['options'][$_smarty_tpl->tpl_vars['fields']->value['interest_level_c']['value']];?>

<?php }
}?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="google_form_completed_c">


<div class="col-xs-12 col-sm-4 label col-1-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_GOOGLE_FORM_COMPLETED_C','module'=>'Accounts'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="bool" field="google_form_completed_c" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['google_form_completed_c']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (strval($_smarty_tpl->tpl_vars['fields']->value['google_form_completed_c']['value']) == "1" || strval($_smarty_tpl->tpl_vars['fields']->value['google_form_completed_c']['value']) == "yes" || strval($_smarty_tpl->tpl_vars['fields']->value['google_form_completed_c']['value']) == "on") {?> 
<?php $_smarty_tpl->_assignInScope('checked', 'checked="checked"');
} else {
$_smarty_tpl->_assignInScope('checked', '');
}?>
<input type="checkbox" class="checkbox" name="<?php echo $_smarty_tpl->tpl_vars['fields']->value['google_form_completed_c']['name'];?>
" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['google_form_completed_c']['name'];?>
" value="$fields.google_form_completed_c.value" disabled="true" <?php echo $_smarty_tpl->tpl_vars['checked']->value;?>
>
<?php }?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="voice_interview_done_c">


<div class="col-xs-12 col-sm-4 label col-2-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_VOICE_INTERVIEW_DONE_C','module'=>'Accounts'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="bool" field="voice_interview_done_c" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['voice_interview_done_c']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (strval($_smarty_tpl->tpl_vars['fields']->value['voice_interview_done_c']['value']) == "1" || strval($_smarty_tpl->tpl_vars['fields']->value['voice_interview_done_c']['value']) == "yes" || strval($_smarty_tpl->tpl_vars['fields']->value['voice_interview_done_c']['value']) == "on") {?> 
<?php $_smarty_tpl->_assignInScope('checked', 'checked="checked"');
} else {
$_smarty_tpl->_assignInScope('checked', '');
}?>
<input type="checkbox" class="checkbox" name="<?php echo $_smarty_tpl->tpl_vars['fields']->value['voice_interview_done_c']['name'];?>
" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['voice_interview_done_c']['name'];?>
" value="$fields.voice_interview_done_c.value" disabled="true" <?php echo $_smarty_tpl->tpl_vars['checked']->value;?>
>
<?php }?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>

</div>

</div>
</div>
</div>
<?php } else { ?>

<div class="panel panel-default">
<div class="panel-heading ">
<a class="" role="button" data-toggle="collapse" href="#top-panel-1" aria-expanded="false">
<div class="col-xs-10 col-sm-11 col-md-11">
<?php echo smarty_function_sugar_translate(array('label'=>'LBL_EDITVIEW_PANEL3','module'=>'Accounts'),$_smarty_tpl);?>

</div>
</a>
</div>
<div class="panel-body panel-collapse collapse in panelContainer" id="top-panel-1" data-id="LBL_EDITVIEW_PANEL3">
<div class="tab-content">
<!-- TAB CONTENT -->





<div class="row detail-view-row">



<div class="col-xs-12 col-sm-12 detail-view-row-item" data-field="interest_level_c">


<div class="col-xs-12 col-sm-2 label col-1-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_INTEREST_LEVEL_C','module'=>'Accounts'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-10 detail-view-field d-flex inlineEdit" type="enum" field="interest_level_c" colspan='3'>

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['interest_level_c']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>



<?php if (is_string($_smarty_tpl->tpl_vars['fields']->value['interest_level_c']['options'])) {?>
<input type="hidden" class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['interest_level_c']['name'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['interest_level_c']['options'];?>
">
<?php echo $_smarty_tpl->tpl_vars['fields']->value['interest_level_c']['options'];?>

<?php } else { ?>
<input type="hidden" class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['interest_level_c']['name'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['interest_level_c']['value'];?>
">
<?php echo $_smarty_tpl->tpl_vars['fields']->value['interest_level_c']['options'][$_smarty_tpl->tpl_vars['fields']->value['interest_level_c']['value']];?>

<?php }
}?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="google_form_completed_c">


<div class="col-xs-12 col-sm-4 label col-1-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_GOOGLE_FORM_COMPLETED_C','module'=>'Accounts'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="bool" field="google_form_completed_c" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['google_form_completed_c']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (strval($_smarty_tpl->tpl_vars['fields']->value['google_form_completed_c']['value']) == "1" || strval($_smarty_tpl->tpl_vars['fields']->value['google_form_completed_c']['value']) == "yes" || strval($_smarty_tpl->tpl_vars['fields']->value['google_form_completed_c']['value']) == "on") {?> 
<?php $_smarty_tpl->_assignInScope('checked', 'checked="checked"');
} else {
$_smarty_tpl->_assignInScope('checked', '');
}?>
<input type="checkbox" class="checkbox" name="<?php echo $_smarty_tpl->tpl_vars['fields']->value['google_form_completed_c']['name'];?>
" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['google_form_completed_c']['name'];?>
" value="$fields.google_form_completed_c.value" disabled="true" <?php echo $_smarty_tpl->tpl_vars['checked']->value;?>
>
<?php }?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="voice_interview_done_c">


<div class="col-xs-12 col-sm-4 label col-2-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_VOICE_INTERVIEW_DONE_C','module'=>'Accounts'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="bool" field="voice_interview_done_c" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['voice_interview_done_c']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (strval($_smarty_tpl->tpl_vars['fields']->value['voice_interview_done_c']['value']) == "1" || strval($_smarty_tpl->tpl_vars['fields']->value['voice_interview_done_c']['value']) == "yes" || strval($_smarty_tpl->tpl_vars['fields']->value['voice_interview_done_c']['value']) == "on") {?> 
<?php $_smarty_tpl->_assignInScope('checked', 'checked="checked"');
} else {
$_smarty_tpl->_assignInScope('checked', '');
}?>
<input type="checkbox" class="checkbox" name="<?php echo $_smarty_tpl->tpl_vars['fields']->value['voice_interview_done_c']['name'];?>
" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['voice_interview_done_c']['name'];?>
" value="$fields.voice_interview_done_c.value" disabled="true" <?php echo $_smarty_tpl->tpl_vars['checked']->value;?>
>
<?php }?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>

</div>

</div>
</div>
</div>
<?php }?>





<?php if ($_smarty_tpl->tpl_vars['config']->value['enable_action_menu'] && $_smarty_tpl->tpl_vars['config']->value['enable_action_menu'] != false) {?>

<div class="panel panel-default">
<div class="panel-heading ">
<a class="" role="button" data-toggle="collapse" href="#top-panel-2" aria-expanded="false">
<div class="col-xs-10 col-sm-11 col-md-11">
<?php echo smarty_function_sugar_translate(array('label'=>'LBL_ACCOUNT_INFORMATION','module'=>'Accounts'),$_smarty_tpl);?>

</div>
</a>
</div>
<div class="panel-body panel-collapse collapse in panelContainer" id="top-panel-2"  data-id="LBL_ACCOUNT_INFORMATION">
<div class="tab-content">
<!-- TAB CONTENT -->





<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="name">


<div class="col-xs-12 col-sm-4 label col-1-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_NAME','module'=>'Accounts'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="name" field="name" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['name']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (strlen($_smarty_tpl->tpl_vars['fields']->value['name']['value']) <= 0) {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['name']['default_value']);
} else {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['name']['value']);
}?> 
<span class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['name']['name'];?>
"><?php echo $_smarty_tpl->tpl_vars['fields']->value['name']['value'];?>
</span>
<?php }?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="phone_office">


<div class="col-xs-12 col-sm-4 label col-2-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_PHONE_OFFICE','module'=>'Accounts'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit phone" type="phone" field="phone_office" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['phone_office']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (!empty($_smarty_tpl->tpl_vars['fields']->value['phone_office']['value'])) {
$_smarty_tpl->_assignInScope('phone_value', $_smarty_tpl->tpl_vars['fields']->value['phone_office']['value']);
echo smarty_function_sugar_phone(array('value'=>$_smarty_tpl->tpl_vars['phone_value']->value,'usa_format'=>"0"),$_smarty_tpl);?>

<?php }
}?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="website">


<div class="col-xs-12 col-sm-4 label col-1-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_WEBSITE','module'=>'Accounts'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="url" field="website" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['website']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, 'getLink', 'link', null);
echo $_smarty_tpl->tpl_vars['fields']->value['website']['value'];
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
if (!empty($_smarty_tpl->tpl_vars['link']->value)) {
$_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, 'getStart', 'linkStart', null);
echo substr($_smarty_tpl->tpl_vars['link']->value,0,7);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);?>
<span class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['website']['name'];?>
">
<a href='<?php echo smarty_modifier_to_url($_smarty_tpl->tpl_vars['link']->value);?>
' target='_blank' ><?php echo $_smarty_tpl->tpl_vars['link']->value;?>
</a>
</span>
<?php }
}?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="email1">


<div class="col-xs-12 col-sm-4 label col-2-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_EMAIL','module'=>'Accounts'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="varchar" field="email1" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['email1']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>

<span id='email1_span'>
<?php echo $_smarty_tpl->tpl_vars['fields']->value['email1']['value'];?>

</span>
<?php }?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="instagram_c">


<div class="col-xs-12 col-sm-4 label col-1-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_INSTAGRAM','module'=>'Accounts'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="varchar" field="instagram_c" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['instagram_c']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (strlen($_smarty_tpl->tpl_vars['fields']->value['instagram_c']['value']) <= 0) {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['instagram_c']['default_value']);
} else {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['instagram_c']['value']);
}?> 
<span class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['instagram_c']['name'];?>
"><?php echo $_smarty_tpl->tpl_vars['fields']->value['instagram_c']['value'];?>
</span>
<?php }?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="nomgerant_c">


<div class="col-xs-12 col-sm-4 label col-2-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_NOMGERANT','module'=>'Accounts'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="varchar" field="nomgerant_c" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['nomgerant_c']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (strlen($_smarty_tpl->tpl_vars['fields']->value['nomgerant_c']['value']) <= 0) {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['nomgerant_c']['default_value']);
} else {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['nomgerant_c']['value']);
}?> 
<span class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['nomgerant_c']['name'];?>
"><?php echo $_smarty_tpl->tpl_vars['fields']->value['nomgerant_c']['value'];?>
</span>
<?php }?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="type_etablissement_c">


<div class="col-xs-12 col-sm-4 label col-1-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_TYPE_ETABLISSEMENT_C','module'=>'Accounts'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="enum" field="type_etablissement_c" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['type_etablissement_c']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>



<?php if (is_string($_smarty_tpl->tpl_vars['fields']->value['type_etablissement_c']['options'])) {?>
<input type="hidden" class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['type_etablissement_c']['name'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['type_etablissement_c']['options'];?>
">
<?php echo $_smarty_tpl->tpl_vars['fields']->value['type_etablissement_c']['options'];?>

<?php } else { ?>
<input type="hidden" class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['type_etablissement_c']['name'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['type_etablissement_c']['value'];?>
">
<?php echo $_smarty_tpl->tpl_vars['fields']->value['type_etablissement_c']['options'][$_smarty_tpl->tpl_vars['fields']->value['type_etablissement_c']['value']];?>

<?php }
}?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="zone_commerciale_c">


<div class="col-xs-12 col-sm-4 label col-2-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_ZONE_COMMERCIALE_C','module'=>'Accounts'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="enum" field="zone_commerciale_c" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['zone_commerciale_c']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>



<?php if (is_string($_smarty_tpl->tpl_vars['fields']->value['zone_commerciale_c']['options'])) {?>
<input type="hidden" class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['zone_commerciale_c']['name'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['zone_commerciale_c']['options'];?>
">
<?php echo $_smarty_tpl->tpl_vars['fields']->value['zone_commerciale_c']['options'];?>

<?php } else { ?>
<input type="hidden" class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['zone_commerciale_c']['name'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['zone_commerciale_c']['value'];?>
">
<?php echo $_smarty_tpl->tpl_vars['fields']->value['zone_commerciale_c']['options'][$_smarty_tpl->tpl_vars['fields']->value['zone_commerciale_c']['value']];?>

<?php }
}?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-12 detail-view-row-item" data-field="description">


<div class="col-xs-12 col-sm-2 label col-1-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_DESCRIPTION','module'=>'Accounts'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-10 detail-view-field d-flex inlineEdit" type="text" field="description" colspan='3'>

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['description']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<span class="sugar_field" id="<?php echo nl2br((string) url2html(smarty_modifier_escape($_smarty_tpl->tpl_vars['fields']->value['description']['name'],'html')), (bool) 1);?>
"><?php echo nl2br((string) url2html(smarty_modifier_escape(smarty_modifier_escape($_smarty_tpl->tpl_vars['fields']->value['description']['value'],'html'),'html_entity_decode')), (bool) 1);?>
</span>
<?php }?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-12 detail-view-row-item" data-field="jjwg_maps_address_c">


<div class="col-xs-12 col-sm-2 label col-1-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_JJWG_MAPS_ADDRESS','module'=>'Accounts'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-10 detail-view-field d-flex inlineEdit" type="varchar" field="jjwg_maps_address_c" colspan='3'>

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['jjwg_maps_address_c']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (strlen($_smarty_tpl->tpl_vars['fields']->value['jjwg_maps_address_c']['value']) <= 0) {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['jjwg_maps_address_c']['default_value']);
} else {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['jjwg_maps_address_c']['value']);
}?> 
<span class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['jjwg_maps_address_c']['name'];?>
"><?php echo $_smarty_tpl->tpl_vars['fields']->value['jjwg_maps_address_c']['value'];?>
</span>
<?php }?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>

</div>

</div>
</div>
</div>
<?php } else { ?>

<div class="panel panel-default">
<div class="panel-heading ">
<a class="" role="button" data-toggle="collapse" href="#top-panel-2" aria-expanded="false">
<div class="col-xs-10 col-sm-11 col-md-11">
<?php echo smarty_function_sugar_translate(array('label'=>'LBL_ACCOUNT_INFORMATION','module'=>'Accounts'),$_smarty_tpl);?>

</div>
</a>
</div>
<div class="panel-body panel-collapse collapse in panelContainer" id="top-panel-2" data-id="LBL_ACCOUNT_INFORMATION">
<div class="tab-content">
<!-- TAB CONTENT -->





<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="name">


<div class="col-xs-12 col-sm-4 label col-1-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_NAME','module'=>'Accounts'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="name" field="name" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['name']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (strlen($_smarty_tpl->tpl_vars['fields']->value['name']['value']) <= 0) {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['name']['default_value']);
} else {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['name']['value']);
}?> 
<span class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['name']['name'];?>
"><?php echo $_smarty_tpl->tpl_vars['fields']->value['name']['value'];?>
</span>
<?php }?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="phone_office">


<div class="col-xs-12 col-sm-4 label col-2-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_PHONE_OFFICE','module'=>'Accounts'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit phone" type="phone" field="phone_office" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['phone_office']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (!empty($_smarty_tpl->tpl_vars['fields']->value['phone_office']['value'])) {
$_smarty_tpl->_assignInScope('phone_value', $_smarty_tpl->tpl_vars['fields']->value['phone_office']['value']);
echo smarty_function_sugar_phone(array('value'=>$_smarty_tpl->tpl_vars['phone_value']->value,'usa_format'=>"0"),$_smarty_tpl);?>

<?php }
}?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="website">


<div class="col-xs-12 col-sm-4 label col-1-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_WEBSITE','module'=>'Accounts'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="url" field="website" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['website']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, 'getLink', 'link', null);
echo $_smarty_tpl->tpl_vars['fields']->value['website']['value'];
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
if (!empty($_smarty_tpl->tpl_vars['link']->value)) {
$_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, 'getStart', 'linkStart', null);
echo substr($_smarty_tpl->tpl_vars['link']->value,0,7);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);?>
<span class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['website']['name'];?>
">
<a href='<?php echo smarty_modifier_to_url($_smarty_tpl->tpl_vars['link']->value);?>
' target='_blank' ><?php echo $_smarty_tpl->tpl_vars['link']->value;?>
</a>
</span>
<?php }
}?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="email1">


<div class="col-xs-12 col-sm-4 label col-2-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_EMAIL','module'=>'Accounts'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="varchar" field="email1" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['email1']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>

<span id='email1_span'>
<?php echo $_smarty_tpl->tpl_vars['fields']->value['email1']['value'];?>

</span>
<?php }?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="instagram_c">


<div class="col-xs-12 col-sm-4 label col-1-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_INSTAGRAM','module'=>'Accounts'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="varchar" field="instagram_c" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['instagram_c']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (strlen($_smarty_tpl->tpl_vars['fields']->value['instagram_c']['value']) <= 0) {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['instagram_c']['default_value']);
} else {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['instagram_c']['value']);
}?> 
<span class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['instagram_c']['name'];?>
"><?php echo $_smarty_tpl->tpl_vars['fields']->value['instagram_c']['value'];?>
</span>
<?php }?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="nomgerant_c">


<div class="col-xs-12 col-sm-4 label col-2-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_NOMGERANT','module'=>'Accounts'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="varchar" field="nomgerant_c" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['nomgerant_c']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (strlen($_smarty_tpl->tpl_vars['fields']->value['nomgerant_c']['value']) <= 0) {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['nomgerant_c']['default_value']);
} else {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['nomgerant_c']['value']);
}?> 
<span class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['nomgerant_c']['name'];?>
"><?php echo $_smarty_tpl->tpl_vars['fields']->value['nomgerant_c']['value'];?>
</span>
<?php }?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="type_etablissement_c">


<div class="col-xs-12 col-sm-4 label col-1-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_TYPE_ETABLISSEMENT_C','module'=>'Accounts'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="enum" field="type_etablissement_c" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['type_etablissement_c']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>



<?php if (is_string($_smarty_tpl->tpl_vars['fields']->value['type_etablissement_c']['options'])) {?>
<input type="hidden" class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['type_etablissement_c']['name'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['type_etablissement_c']['options'];?>
">
<?php echo $_smarty_tpl->tpl_vars['fields']->value['type_etablissement_c']['options'];?>

<?php } else { ?>
<input type="hidden" class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['type_etablissement_c']['name'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['type_etablissement_c']['value'];?>
">
<?php echo $_smarty_tpl->tpl_vars['fields']->value['type_etablissement_c']['options'][$_smarty_tpl->tpl_vars['fields']->value['type_etablissement_c']['value']];?>

<?php }
}?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="zone_commerciale_c">


<div class="col-xs-12 col-sm-4 label col-2-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_ZONE_COMMERCIALE_C','module'=>'Accounts'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="enum" field="zone_commerciale_c" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['zone_commerciale_c']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>



<?php if (is_string($_smarty_tpl->tpl_vars['fields']->value['zone_commerciale_c']['options'])) {?>
<input type="hidden" class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['zone_commerciale_c']['name'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['zone_commerciale_c']['options'];?>
">
<?php echo $_smarty_tpl->tpl_vars['fields']->value['zone_commerciale_c']['options'];?>

<?php } else { ?>
<input type="hidden" class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['zone_commerciale_c']['name'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['zone_commerciale_c']['value'];?>
">
<?php echo $_smarty_tpl->tpl_vars['fields']->value['zone_commerciale_c']['options'][$_smarty_tpl->tpl_vars['fields']->value['zone_commerciale_c']['value']];?>

<?php }
}?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-12 detail-view-row-item" data-field="description">


<div class="col-xs-12 col-sm-2 label col-1-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_DESCRIPTION','module'=>'Accounts'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-10 detail-view-field d-flex inlineEdit" type="text" field="description" colspan='3'>

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['description']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<span class="sugar_field" id="<?php echo nl2br((string) url2html(smarty_modifier_escape($_smarty_tpl->tpl_vars['fields']->value['description']['name'],'html')), (bool) 1);?>
"><?php echo nl2br((string) url2html(smarty_modifier_escape(smarty_modifier_escape($_smarty_tpl->tpl_vars['fields']->value['description']['value'],'html'),'html_entity_decode')), (bool) 1);?>
</span>
<?php }?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-12 detail-view-row-item" data-field="jjwg_maps_address_c">


<div class="col-xs-12 col-sm-2 label col-1-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_JJWG_MAPS_ADDRESS','module'=>'Accounts'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-10 detail-view-field d-flex inlineEdit" type="varchar" field="jjwg_maps_address_c" colspan='3'>

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['jjwg_maps_address_c']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (strlen($_smarty_tpl->tpl_vars['fields']->value['jjwg_maps_address_c']['value']) <= 0) {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['jjwg_maps_address_c']['default_value']);
} else {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['jjwg_maps_address_c']['value']);
}?> 
<span class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['jjwg_maps_address_c']['name'];?>
"><?php echo $_smarty_tpl->tpl_vars['fields']->value['jjwg_maps_address_c']['value'];?>
</span>
<?php }?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>

</div>

</div>
</div>
</div>
<?php }?>





<?php if ($_smarty_tpl->tpl_vars['config']->value['enable_action_menu'] && $_smarty_tpl->tpl_vars['config']->value['enable_action_menu'] != false) {?>

<div class="panel panel-default">
<div class="panel-heading ">
<a class="" role="button" data-toggle="collapse" href="#top-panel-3" aria-expanded="false">
<div class="col-xs-10 col-sm-11 col-md-11">
<?php echo smarty_function_sugar_translate(array('label'=>'LBL_EDITVIEW_PANEL1','module'=>'Accounts'),$_smarty_tpl);?>

</div>
</a>
</div>
<div class="panel-body panel-collapse collapse in panelContainer" id="top-panel-3"  data-id="LBL_EDITVIEW_PANEL1">
<div class="tab-content">
<!-- TAB CONTENT -->





<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="nb_tables_range_list_c">


<div class="col-xs-12 col-sm-4 label col-1-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_NB_TABLES_RANGE_LIST','module'=>'Accounts'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="enum" field="nb_tables_range_list_c" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['nb_tables_range_list_c']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>



<?php if (is_string($_smarty_tpl->tpl_vars['fields']->value['nb_tables_range_list_c']['options'])) {?>
<input type="hidden" class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['nb_tables_range_list_c']['name'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['nb_tables_range_list_c']['options'];?>
">
<?php echo $_smarty_tpl->tpl_vars['fields']->value['nb_tables_range_list_c']['options'];?>

<?php } else { ?>
<input type="hidden" class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['nb_tables_range_list_c']['name'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['nb_tables_range_list_c']['value'];?>
">
<?php echo $_smarty_tpl->tpl_vars['fields']->value['nb_tables_range_list_c']['options'][$_smarty_tpl->tpl_vars['fields']->value['nb_tables_range_list_c']['value']];?>

<?php }
}?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="ticket_moyen_range_c">


<div class="col-xs-12 col-sm-4 label col-2-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_TICKET_MOYEN_RANGE_C','module'=>'Accounts'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="enum" field="ticket_moyen_range_c" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['ticket_moyen_range_c']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>



<?php if (is_string($_smarty_tpl->tpl_vars['fields']->value['ticket_moyen_range_c']['options'])) {?>
<input type="hidden" class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['ticket_moyen_range_c']['name'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['ticket_moyen_range_c']['options'];?>
">
<?php echo $_smarty_tpl->tpl_vars['fields']->value['ticket_moyen_range_c']['options'];?>

<?php } else { ?>
<input type="hidden" class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['ticket_moyen_range_c']['name'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['ticket_moyen_range_c']['value'];?>
">
<?php echo $_smarty_tpl->tpl_vars['fields']->value['ticket_moyen_range_c']['options'][$_smarty_tpl->tpl_vars['fields']->value['ticket_moyen_range_c']['value']];?>

<?php }
}?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="google_reviews_range_list_c">


<div class="col-xs-12 col-sm-4 label col-1-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_GOOGLE_REVIEWS_RANGE_LIST','module'=>'Accounts'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="enum" field="google_reviews_range_list_c" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['google_reviews_range_list_c']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>



<?php if (is_string($_smarty_tpl->tpl_vars['fields']->value['google_reviews_range_list_c']['options'])) {?>
<input type="hidden" class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['google_reviews_range_list_c']['name'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['google_reviews_range_list_c']['options'];?>
">
<?php echo $_smarty_tpl->tpl_vars['fields']->value['google_reviews_range_list_c']['options'];?>

<?php } else { ?>
<input type="hidden" class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['google_reviews_range_list_c']['name'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['google_reviews_range_list_c']['value'];?>
">
<?php echo $_smarty_tpl->tpl_vars['fields']->value['google_reviews_range_list_c']['options'][$_smarty_tpl->tpl_vars['fields']->value['google_reviews_range_list_c']['value']];?>

<?php }
}?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="google_rating_range_list_c">


<div class="col-xs-12 col-sm-4 label col-2-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_GOOGLE_RATING_RANGE_LIST','module'=>'Accounts'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="enum" field="google_rating_range_list_c" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['google_rating_range_list_c']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>



<?php if (is_string($_smarty_tpl->tpl_vars['fields']->value['google_rating_range_list_c']['options'])) {?>
<input type="hidden" class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['google_rating_range_list_c']['name'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['google_rating_range_list_c']['options'];?>
">
<?php echo $_smarty_tpl->tpl_vars['fields']->value['google_rating_range_list_c']['options'];?>

<?php } else { ?>
<input type="hidden" class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['google_rating_range_list_c']['name'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['google_rating_range_list_c']['value'];?>
">
<?php echo $_smarty_tpl->tpl_vars['fields']->value['google_rating_range_list_c']['options'][$_smarty_tpl->tpl_vars['fields']->value['google_rating_range_list_c']['value']];?>

<?php }
}?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>

</div>

</div>
</div>
</div>
<?php } else { ?>

<div class="panel panel-default">
<div class="panel-heading ">
<a class="" role="button" data-toggle="collapse" href="#top-panel-3" aria-expanded="false">
<div class="col-xs-10 col-sm-11 col-md-11">
<?php echo smarty_function_sugar_translate(array('label'=>'LBL_EDITVIEW_PANEL1','module'=>'Accounts'),$_smarty_tpl);?>

</div>
</a>
</div>
<div class="panel-body panel-collapse collapse in panelContainer" id="top-panel-3" data-id="LBL_EDITVIEW_PANEL1">
<div class="tab-content">
<!-- TAB CONTENT -->





<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="nb_tables_range_list_c">


<div class="col-xs-12 col-sm-4 label col-1-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_NB_TABLES_RANGE_LIST','module'=>'Accounts'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="enum" field="nb_tables_range_list_c" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['nb_tables_range_list_c']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>



<?php if (is_string($_smarty_tpl->tpl_vars['fields']->value['nb_tables_range_list_c']['options'])) {?>
<input type="hidden" class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['nb_tables_range_list_c']['name'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['nb_tables_range_list_c']['options'];?>
">
<?php echo $_smarty_tpl->tpl_vars['fields']->value['nb_tables_range_list_c']['options'];?>

<?php } else { ?>
<input type="hidden" class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['nb_tables_range_list_c']['name'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['nb_tables_range_list_c']['value'];?>
">
<?php echo $_smarty_tpl->tpl_vars['fields']->value['nb_tables_range_list_c']['options'][$_smarty_tpl->tpl_vars['fields']->value['nb_tables_range_list_c']['value']];?>

<?php }
}?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="ticket_moyen_range_c">


<div class="col-xs-12 col-sm-4 label col-2-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_TICKET_MOYEN_RANGE_C','module'=>'Accounts'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="enum" field="ticket_moyen_range_c" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['ticket_moyen_range_c']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>



<?php if (is_string($_smarty_tpl->tpl_vars['fields']->value['ticket_moyen_range_c']['options'])) {?>
<input type="hidden" class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['ticket_moyen_range_c']['name'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['ticket_moyen_range_c']['options'];?>
">
<?php echo $_smarty_tpl->tpl_vars['fields']->value['ticket_moyen_range_c']['options'];?>

<?php } else { ?>
<input type="hidden" class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['ticket_moyen_range_c']['name'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['ticket_moyen_range_c']['value'];?>
">
<?php echo $_smarty_tpl->tpl_vars['fields']->value['ticket_moyen_range_c']['options'][$_smarty_tpl->tpl_vars['fields']->value['ticket_moyen_range_c']['value']];?>

<?php }
}?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>

</div>


<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="google_reviews_range_list_c">


<div class="col-xs-12 col-sm-4 label col-1-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_GOOGLE_REVIEWS_RANGE_LIST','module'=>'Accounts'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="enum" field="google_reviews_range_list_c" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['google_reviews_range_list_c']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>



<?php if (is_string($_smarty_tpl->tpl_vars['fields']->value['google_reviews_range_list_c']['options'])) {?>
<input type="hidden" class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['google_reviews_range_list_c']['name'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['google_reviews_range_list_c']['options'];?>
">
<?php echo $_smarty_tpl->tpl_vars['fields']->value['google_reviews_range_list_c']['options'];?>

<?php } else { ?>
<input type="hidden" class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['google_reviews_range_list_c']['name'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['google_reviews_range_list_c']['value'];?>
">
<?php echo $_smarty_tpl->tpl_vars['fields']->value['google_reviews_range_list_c']['options'][$_smarty_tpl->tpl_vars['fields']->value['google_reviews_range_list_c']['value']];?>

<?php }
}?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="google_rating_range_list_c">


<div class="col-xs-12 col-sm-4 label col-2-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_GOOGLE_RATING_RANGE_LIST','module'=>'Accounts'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="enum" field="google_rating_range_list_c" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['google_rating_range_list_c']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>



<?php if (is_string($_smarty_tpl->tpl_vars['fields']->value['google_rating_range_list_c']['options'])) {?>
<input type="hidden" class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['google_rating_range_list_c']['name'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['google_rating_range_list_c']['options'];?>
">
<?php echo $_smarty_tpl->tpl_vars['fields']->value['google_rating_range_list_c']['options'];?>

<?php } else { ?>
<input type="hidden" class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['google_rating_range_list_c']['name'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value['google_rating_range_list_c']['value'];?>
">
<?php echo $_smarty_tpl->tpl_vars['fields']->value['google_rating_range_list_c']['options'][$_smarty_tpl->tpl_vars['fields']->value['google_rating_range_list_c']['value']];?>

<?php }
}?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>

</div>

</div>
</div>
</div>
<?php }?>





<?php if ($_smarty_tpl->tpl_vars['config']->value['enable_action_menu'] && $_smarty_tpl->tpl_vars['config']->value['enable_action_menu'] != false) {?>

<div class="panel panel-default">
<div class="panel-heading ">
<a class="" role="button" data-toggle="collapse" href="#top-panel-4" aria-expanded="false">
<div class="col-xs-10 col-sm-11 col-md-11">
<?php echo smarty_function_sugar_translate(array('label'=>'LBL_EDITVIEW_PANEL2','module'=>'Accounts'),$_smarty_tpl);?>

</div>
</a>
</div>
<div class="panel-body panel-collapse collapse in panelContainer" id="top-panel-4"  data-id="LBL_EDITVIEW_PANEL2">
<div class="tab-content">
<!-- TAB CONTENT -->





<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="online_menu_url_c">


<div class="col-xs-12 col-sm-4 label col-1-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_ONLINE_MENU_URL_C','module'=>'Accounts'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="url" field="online_menu_url_c" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['online_menu_url_c']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, 'getLink', 'link', null);
echo $_smarty_tpl->tpl_vars['fields']->value['online_menu_url_c']['value'];
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
if (!empty($_smarty_tpl->tpl_vars['link']->value)) {
$_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, 'getStart', 'linkStart', null);
echo substr($_smarty_tpl->tpl_vars['link']->value,0,7);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);?>
<span class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['online_menu_url_c']['name'];?>
">
<a href='<?php echo smarty_modifier_to_url($_smarty_tpl->tpl_vars['link']->value);?>
' target='_self' ><?php echo $_smarty_tpl->tpl_vars['link']->value;?>
</a>
</span>
<?php }
}?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="reservation_c">


<div class="col-xs-12 col-sm-4 label col-2-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_RESERVATION','module'=>'Accounts'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="varchar" field="reservation_c" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['reservation_c']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (strlen($_smarty_tpl->tpl_vars['fields']->value['reservation_c']['value']) <= 0) {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['reservation_c']['default_value']);
} else {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['reservation_c']['value']);
}?> 
<span class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['reservation_c']['name'];?>
"><?php echo $_smarty_tpl->tpl_vars['fields']->value['reservation_c']['value'];?>
</span>
<?php }?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>

</div>

</div>
</div>
</div>
<?php } else { ?>

<div class="panel panel-default">
<div class="panel-heading ">
<a class="" role="button" data-toggle="collapse" href="#top-panel-4" aria-expanded="false">
<div class="col-xs-10 col-sm-11 col-md-11">
<?php echo smarty_function_sugar_translate(array('label'=>'LBL_EDITVIEW_PANEL2','module'=>'Accounts'),$_smarty_tpl);?>

</div>
</a>
</div>
<div class="panel-body panel-collapse collapse in panelContainer" id="top-panel-4" data-id="LBL_EDITVIEW_PANEL2">
<div class="tab-content">
<!-- TAB CONTENT -->





<div class="row detail-view-row">



<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="online_menu_url_c">


<div class="col-xs-12 col-sm-4 label col-1-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_ONLINE_MENU_URL_C','module'=>'Accounts'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="url" field="online_menu_url_c" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['online_menu_url_c']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, 'getLink', 'link', null);
echo $_smarty_tpl->tpl_vars['fields']->value['online_menu_url_c']['value'];
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
if (!empty($_smarty_tpl->tpl_vars['link']->value)) {
$_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, 'getStart', 'linkStart', null);
echo substr($_smarty_tpl->tpl_vars['link']->value,0,7);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);?>
<span class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['online_menu_url_c']['name'];?>
">
<a href='<?php echo smarty_modifier_to_url($_smarty_tpl->tpl_vars['link']->value);?>
' target='_self' ><?php echo $_smarty_tpl->tpl_vars['link']->value;?>
</a>
</span>
<?php }
}?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>




<div class="col-xs-12 col-sm-6 detail-view-row-item detail-view-bordered" data-field="reservation_c">


<div class="col-xs-12 col-sm-4 label col-2-label">


<?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, "label", "label", null);
echo smarty_function_sugar_translate(array('label'=>'LBL_RESERVATION','module'=>'Accounts'),$_smarty_tpl);
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);
echo smarty_modifier_strip_semicolon($_smarty_tpl->tpl_vars['label']->value);?>
:
</div>


<div class="col-xs-12 col-sm-8 detail-view-field d-flex inlineEdit" type="varchar" field="reservation_c" >

<?php if (!$_smarty_tpl->tpl_vars['fields']->value['reservation_c']['hidden']) {
echo smarty_function_counter(array('name'=>"panelFieldCount",'print'=>false),$_smarty_tpl);?>


<?php if (strlen($_smarty_tpl->tpl_vars['fields']->value['reservation_c']['value']) <= 0) {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['reservation_c']['default_value']);
} else {
$_smarty_tpl->_assignInScope('value', $_smarty_tpl->tpl_vars['fields']->value['reservation_c']['value']);
}?> 
<span class="sugar_field" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['reservation_c']['name'];?>
"><?php echo $_smarty_tpl->tpl_vars['fields']->value['reservation_c']['value'];?>
</span>
<?php }?>

<div class="inlineEditIcon col-xs-hidden">
<?php echo smarty_function_sugar_getimage(array('name'=>"pencil"),$_smarty_tpl);?>

</div>
</div>
<div class="dotted-border"></div>


</div>

</div>

</div>
</div>
</div>
<?php }?>
</div>
</div>

</form>
<?php echo '<script'; ?>
>SUGAR.util.doWhen("document.getElementById('form') != null",
        function(){SUGAR.util.buildAccessKeyLabels();});
<?php echo '</script'; ?>
>            <?php echo '<script'; ?>
 type="text/javascript" src="include/InlineEditing/inlineEditing.js"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 type="text/javascript" src="modules/Favorites/favorites.js"><?php echo '</script'; ?>
>

<?php echo '<script'; ?>
 type="text/javascript">

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

                <?php echo '</script'; ?>
>
<?php }
}
