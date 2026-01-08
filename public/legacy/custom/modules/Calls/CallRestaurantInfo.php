<?php

if (!defined('sugarEntry') || !sugarEntry) {
    die('Not A Valid Entry Point');
}

require_once 'modules/EmailAddresses/EmailAddress.php';

/**
 * Adds restaurant contact details onto Action (Call) beans for display.
 */
class CallRestaurantInfo
{
    /**
     * after_retrieve logic hook
     *
     * @param SugarBean $bean
     * @param string    $event
     * @param array     $arguments
     */
    public function addRestaurantContactInfo(SugarBean $bean, string $event, array $arguments): void
    {
        // Reset values in case parent is changed/empty.
        $bean->restaurant_phone_c = '';
        $bean->restaurant_email_c = '';
        $bean->restaurant_website_c = '';

        if ($bean->parent_type !== 'Accounts' || empty($bean->parent_id)) {
            return;
        }

        /** @var Account $account */
        $account = BeanFactory::getBean('Accounts', $bean->parent_id, ['disable_row_level_security' => true]);
        if (empty($account) || empty($account->id)) {
            return;
        }

        $bean->restaurant_phone_c = (string) ($account->phone_office ?? '');
        $bean->restaurant_website_c = $this->normalizeWebsite((string) ($account->website ?? ''));
        $bean->restaurant_email_c = $this->getPrimaryEmail($account);
    }

    protected function getPrimaryEmail(SugarBean $account): string
    {
        $emailAddress = $account->emailAddress ?? null;
        if (!$emailAddress instanceof EmailAddress) {
            $emailAddress = new EmailAddress();
        }

        $email = (string) ($emailAddress->getPrimaryAddress($account) ?: ($account->email1 ?? ''));
        $email = trim($email);

        return filter_var($email, FILTER_VALIDATE_EMAIL) ? $email : '';
    }

    protected function normalizeWebsite(string $url): string
    {
        $url = trim($url);
        if ($url === '') {
            return '';
        }

        if (!preg_match('#^https?://#i', $url)) {
            $url = 'https://' . $url;
        }

        return filter_var($url, FILTER_VALIDATE_URL) ? $url : '';
    }
}
