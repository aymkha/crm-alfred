<?php
/* Smarty version 4.3.2, created on 2025-12-23 00:41:33
  from '/var/www/html/suitecrm/public/legacy/modules/Emails/templates/displaySubjectField.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.3.2',
  'unifunc' => 'content_6949d72d3b7176_39672541',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'f984da5ac5192f0b181db25560f82dd62d23d49b' => 
    array (
      0 => '/var/www/html/suitecrm/public/legacy/modules/Emails/templates/displaySubjectField.tpl',
      1 => 1706805384,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_6949d72d3b7176_39672541 (Smarty_Internal_Template $_smarty_tpl) {
?><div class="email-subject">
    <?php if ($_smarty_tpl->tpl_vars['bean']->value) {?>
                <?php if ($_smarty_tpl->tpl_vars['bean']->value['name'] == '') {?>
            <?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, 'subject', 'subject', null);
echo $_smarty_tpl->tpl_vars['MOD']->value['LBL_NO_SUBJECT'];
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);?>
        <?php } else { ?>
            <?php $_smarty_tpl->smarty->ext->_capture->open($_smarty_tpl, 'subject', 'subject', null);
echo $_smarty_tpl->tpl_vars['bean']->value['name'];
$_smarty_tpl->smarty->ext->_capture->close($_smarty_tpl);?>
        <?php }?>

                <?php if (!empty($_smarty_tpl->tpl_vars['bean']->value['id']) && $_smarty_tpl->tpl_vars['bean']->value['status'] == $_smarty_tpl->tpl_vars['APP_LIST_STRINGS']->value['dom_email_status']['draft']) {?>
            <a href="index.php?module=Emails&action=DetailDraftView&record=<?php echo $_smarty_tpl->tpl_vars['bean']->value['id'];?>
"><?php echo $_smarty_tpl->tpl_vars['subject']->value;?>
</a>
        <?php } elseif (!empty($_smarty_tpl->tpl_vars['bean']->value['id']) && $_smarty_tpl->tpl_vars['bean']->value['status'] != $_smarty_tpl->tpl_vars['APP_LIST_STRINGS']->value['dom_email_status']['draft']) {?>
            <a href="index.php?module=Emails&action=DetailView&record=<?php echo $_smarty_tpl->tpl_vars['bean']->value['id'];?>
"><?php echo $_smarty_tpl->tpl_vars['subject']->value;?>
</a>
        <?php } elseif (!empty($_smarty_tpl->tpl_vars['bean']->value)) {?>
            <a href="index.php?module=Emails&action=DisplayDetailView&folder_name=<?php if (!empty($_smarty_tpl->tpl_vars['bean']->value['folder'])) {
echo $_smarty_tpl->tpl_vars['bean']->value['folder'];
}?>&folder=<?php if (!empty($_smarty_tpl->tpl_vars['bean']->value['folder_type'])) {
echo $_smarty_tpl->tpl_vars['bean']->value['folder_type'];
}?>&inbound_email_record=<?php if (!empty($_smarty_tpl->tpl_vars['bean']->value['inbound_email_record'])) {
echo $_smarty_tpl->tpl_vars['bean']->value['inbound_email_record'];
}?>&uid=<?php if (!empty($_smarty_tpl->tpl_vars['bean']->value['uid'])) {
echo $_smarty_tpl->tpl_vars['bean']->value['uid'];
}?>&msgno=<?php if (!empty($_smarty_tpl->tpl_vars['bean']->value['msgno'])) {
echo $_smarty_tpl->tpl_vars['bean']->value['msgno'];
}?>"><?php echo $_smarty_tpl->tpl_vars['subject']->value;?>
</a>
        <?php }?>
    <?php }?>
</div>
<?php }
}
