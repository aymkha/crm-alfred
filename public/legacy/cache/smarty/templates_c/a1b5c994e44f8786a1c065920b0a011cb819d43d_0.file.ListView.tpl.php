<?php
/* Smarty version 4.3.2, created on 2025-12-23 00:50:21
  from '/var/www/html/suitecrm/public/legacy/include/SugarFields/Fields/Base/ListView.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.3.2',
  'unifunc' => 'content_6949d93d449640_43450867',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'a1b5c994e44f8786a1c065920b0a011cb819d43d' => 
    array (
      0 => '/var/www/html/suitecrm/public/legacy/include/SugarFields/Fields/Base/ListView.tpl',
      1 => 1706805373,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_6949d93d449640_43450867 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_checkPlugins(array(0=>array('file'=>'/var/www/html/suitecrm/public/legacy/include/Smarty/plugins/function.sugar_fetch.php','function'=>'smarty_function_sugar_fetch',),));
?>

<?php echo smarty_function_sugar_fetch(array('object'=>$_smarty_tpl->tpl_vars['parentFieldArray']->value,'key'=>$_smarty_tpl->tpl_vars['col']->value),$_smarty_tpl);?>

<?php }
}
