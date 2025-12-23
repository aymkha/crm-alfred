<?php
/* Smarty version 4.3.2, created on 2025-12-23 02:17:09
  from '/var/www/html/suitecrm/public/legacy/include/utils/recaptcha_disabled.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '4.3.2',
  'unifunc' => 'content_6949ed951a3d10_01437147',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '2720508a72c808d191ead5716eaf1e5d20225e74' => 
    array (
      0 => '/var/www/html/suitecrm/public/legacy/include/utils/recaptcha_disabled.tpl',
      1 => 1706805378,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_6949ed951a3d10_01437147 (Smarty_Internal_Template $_smarty_tpl) {
echo '<script'; ?>
>

  /**
   * Login Screen Validation
   */
  function validateAndSubmit() {
      generatepwd();
    }

  /**
   * Password reset screen validation
   */
  function validateCaptchaAndSubmit() {
      document.getElementById('username_password').value = document.getElementById('new_password').value;
      document.getElementById('ChangePasswordForm').submit();
    }
<?php echo '</script'; ?>
>
<?php }
}
