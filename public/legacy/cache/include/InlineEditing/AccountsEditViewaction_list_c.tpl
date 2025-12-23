

    <select name="{$fields.action_list_c.name}"
            id="{$fields.action_list_c.name}"
            title=''  tabindex="1"              
            >

        {if isset($fields.action_list_c.value)}
            {html_options options=$fields.action_list_c.options selected=$fields.action_list_c.value}
        {else}
            {html_options options=$fields.action_list_c.options selected=$fields.action_list_c.default}
        {/if}
    </select>


