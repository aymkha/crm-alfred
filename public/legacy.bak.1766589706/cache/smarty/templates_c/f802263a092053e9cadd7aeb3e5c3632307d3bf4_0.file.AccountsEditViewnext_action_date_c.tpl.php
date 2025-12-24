<?php
/* Smarty version 4.3.2, created on 2025-12-23 00:49:39
  from '/var/www/html/suitecrm/public/legacy/cache/include/InlineEditing/AccountsEditViewnext_action_date_c.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.3.2',
  'unifunc' => 'content_6949d91375b654_89382401',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'f802263a092053e9cadd7aeb3e5c3632307d3bf4' => 
    array (
      0 => '/var/www/html/suitecrm/public/legacy/cache/include/InlineEditing/AccountsEditViewnext_action_date_c.tpl',
      1 => 1766447379,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_6949d91375b654_89382401 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_checkPlugins(array(0=>array('file'=>'/var/www/html/suitecrm/public/legacy/include/Smarty/plugins/function.sugar_getimage.php','function'=>'smarty_function_sugar_getimage',),1=>array('file'=>'/var/www/html/suitecrm/public/legacy/include/Smarty/plugins/function.sugar_getjspath.php','function'=>'smarty_function_sugar_getjspath',),));
?>


<table border="0" cellpadding="0" cellspacing="0" class="dateTime">
<tr valign="middle">
<td nowrap class="dateTimeComboColumn datecalendar">
<input autocomplete="off" type="text" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['next_action_date_c']['name'];?>
_date" class="datetimecombo_date" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value[$_smarty_tpl->tpl_vars['fields']->value['next_action_date_c']['name']]['value'];?>
" size="11" maxlength="10" title='' tabindex="1" onblur="combo_<?php echo $_smarty_tpl->tpl_vars['fields']->value['next_action_date_c']['name'];?>
.update();" onchange="combo_<?php echo $_smarty_tpl->tpl_vars['fields']->value['next_action_date_c']['name'];?>
.update(); "    >
	<button type="button" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['next_action_date_c']['name'];?>
_trigger" class="btn calendarstart" onclick="return false;">		
		<span alt="<?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_ENTER_DATE'];?>
"><?php echo smarty_function_sugar_getimage(array('name'=>"calendar"),$_smarty_tpl);?>
 </span>
	</button>
</td>
<td nowrap class="dateTimeComboColumn dateTimeSection">
<div id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['next_action_date_c']['name'];?>
_time_section" class="datetimecombo_time_section"></div>
</td>
</tr>
</table>
<input type="hidden" class="DateTimeCombo" id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['next_action_date_c']['name'];?>
" name="<?php echo $_smarty_tpl->tpl_vars['fields']->value['next_action_date_c']['name'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['fields']->value[$_smarty_tpl->tpl_vars['fields']->value['next_action_date_c']['name']]['value'];?>
">
<?php echo '<script'; ?>
 type="text/javascript" src="<?php echo smarty_function_sugar_getjspath(array('file'=>"include/SugarFields/Fields/Datetimecombo/Datetimecombo.js"),$_smarty_tpl);?>
"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 type="text/javascript">
var combo_<?php echo $_smarty_tpl->tpl_vars['fields']->value['next_action_date_c']['name'];?>
 = new Datetimecombo("<?php echo $_smarty_tpl->tpl_vars['fields']->value[$_smarty_tpl->tpl_vars['fields']->value['next_action_date_c']['name']]['value'];?>
", "<?php echo $_smarty_tpl->tpl_vars['fields']->value['next_action_date_c']['name'];?>
", "<?php echo $_smarty_tpl->tpl_vars['TIME_FORMAT']->value;?>
", "1", '', false, true);
//Render the remaining widget fields
text = combo_<?php echo $_smarty_tpl->tpl_vars['fields']->value['next_action_date_c']['name'];?>
.html('');
document.getElementById('<?php echo $_smarty_tpl->tpl_vars['fields']->value['next_action_date_c']['name'];?>
_time_section').innerHTML = text;

//Call eval on the update function to handle updates to calendar picker object
eval(combo_<?php echo $_smarty_tpl->tpl_vars['fields']->value['next_action_date_c']['name'];?>
.jsscript(''));

addToValidateBinaryDependency('<?php echo $_smarty_tpl->tpl_vars['form_name']->value;?>
',"<?php echo $_smarty_tpl->tpl_vars['fields']->value['next_action_date_c']['name'];?>
_hours", 'alpha', false, "<?php echo $_smarty_tpl->tpl_vars['APP']->value['ERR_MISSING_REQUIRED_FIELDS'];?>
 <?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_HOURS'];?>
" ,"<?php echo $_smarty_tpl->tpl_vars['fields']->value['next_action_date_c']['name'];?>
_date");
addToValidateBinaryDependency('<?php echo $_smarty_tpl->tpl_vars['form_name']->value;?>
', "<?php echo $_smarty_tpl->tpl_vars['fields']->value['next_action_date_c']['name'];?>
_minutes", 'alpha', false, "<?php echo $_smarty_tpl->tpl_vars['APP']->value['ERR_MISSING_REQUIRED_FIELDS'];?>
 <?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_MINUTES'];?>
" ,"<?php echo $_smarty_tpl->tpl_vars['fields']->value['next_action_date_c']['name'];?>
_date");
addToValidateBinaryDependency('<?php echo $_smarty_tpl->tpl_vars['form_name']->value;?>
', "<?php echo $_smarty_tpl->tpl_vars['fields']->value['next_action_date_c']['name'];?>
_meridiem", 'alpha', false, "<?php echo $_smarty_tpl->tpl_vars['APP']->value['ERR_MISSING_REQUIRED_FIELDS'];?>
 <?php echo $_smarty_tpl->tpl_vars['APP']->value['LBL_MERIDIEM'];?>
","<?php echo $_smarty_tpl->tpl_vars['fields']->value['next_action_date_c']['name'];?>
_date");

YAHOO.util.Event.onDOMReady(function()
{

	Calendar.setup ({
	onClose : update_<?php echo $_smarty_tpl->tpl_vars['fields']->value['next_action_date_c']['name'];?>
,
	inputField : "<?php echo $_smarty_tpl->tpl_vars['fields']->value['next_action_date_c']['name'];?>
_date",
    form : "",
	ifFormat : "<?php echo $_smarty_tpl->tpl_vars['CALENDAR_FORMAT']->value;?>
",
	daFormat : "<?php echo $_smarty_tpl->tpl_vars['CALENDAR_FORMAT']->value;?>
",
	button : "<?php echo $_smarty_tpl->tpl_vars['fields']->value['next_action_date_c']['name'];?>
_trigger",
	singleClick : true,
	step : 1,
	weekNumbers: false,
        startWeekday: <?php echo (($tmp = $_smarty_tpl->tpl_vars['CALENDAR_FDOW']->value ?? null)===null||$tmp==='' ? '0' ?? null : $tmp);?>
,
	comboObject: combo_<?php echo $_smarty_tpl->tpl_vars['fields']->value['next_action_date_c']['name'];?>

	});

	//Call update for first time to round hours and minute values
	combo_<?php echo $_smarty_tpl->tpl_vars['fields']->value['next_action_date_c']['name'];?>
.update(false);

}); 
<?php echo '</script'; ?>
>
<?php }
}
