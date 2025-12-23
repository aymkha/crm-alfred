<?php
/* Smarty version 4.3.2, created on 2025-12-23 00:49:10
  from '/var/www/html/suitecrm/public/legacy/cache/include/InlineEditing/AccountsEditViewaction_list_c.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.3.2',
  'unifunc' => 'content_6949d8f695c9e8_04808749',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'd17508ef0c349436698e13038efc0855e4fb86a4' => 
    array (
      0 => '/var/www/html/suitecrm/public/legacy/cache/include/InlineEditing/AccountsEditViewaction_list_c.tpl',
      1 => 1766447350,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_6949d8f695c9e8_04808749 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_checkPlugins(array(0=>array('file'=>'/var/www/html/suitecrm/public/legacy/include/Smarty/plugins/function.html_options.php','function'=>'smarty_function_html_options',),));
?>


    <select name="<?php echo $_smarty_tpl->tpl_vars['fields']->value['action_list_c']['name'];?>
"
            id="<?php echo $_smarty_tpl->tpl_vars['fields']->value['action_list_c']['name'];?>
"
            title=''  tabindex="1"              
            >

        <?php if ((isset($_smarty_tpl->tpl_vars['fields']->value['action_list_c']['value']))) {?>
            <?php echo smarty_function_html_options(array('options'=>$_smarty_tpl->tpl_vars['fields']->value['action_list_c']['options'],'selected'=>$_smarty_tpl->tpl_vars['fields']->value['action_list_c']['value']),$_smarty_tpl);?>

        <?php } else { ?>
            <?php echo smarty_function_html_options(array('options'=>$_smarty_tpl->tpl_vars['fields']->value['action_list_c']['options'],'selected'=>$_smarty_tpl->tpl_vars['fields']->value['action_list_c']['default']),$_smarty_tpl);?>

        <?php }?>
    </select>


<?php }
}
