<?php

/**
 * This file has been auto-generated
 * by the Symfony Routing Component.
 */

return [
    false, // $matchHost
    [ // $staticRoutes
        '/_profiler' => [[['_route' => '_profiler_home', '_controller' => 'web_profiler.controller.profiler::homeAction'], null, null, null, true, false, null]],
        '/_profiler/search' => [[['_route' => '_profiler_search', '_controller' => 'web_profiler.controller.profiler::searchAction'], null, null, null, false, false, null]],
        '/_profiler/search_bar' => [[['_route' => '_profiler_search_bar', '_controller' => 'web_profiler.controller.profiler::searchBarAction'], null, null, null, false, false, null]],
        '/_profiler/phpinfo' => [[['_route' => '_profiler_phpinfo', '_controller' => 'web_profiler.controller.profiler::phpinfoAction'], null, null, null, false, false, null]],
        '/_profiler/open' => [[['_route' => '_profiler_open_file', '_controller' => 'web_profiler.controller.profiler::openAction'], null, null, null, false, false, null]],
        '/login' => [[['_route' => 'app_login', '_controller' => 'App\\Authentication\\Controller\\SecurityController::login'], null, ['GET' => 0, 'POST' => 1], null, false, false, null]],
        '/logout' => [[['_route' => 'app_logout', '_controller' => 'App\\Authentication\\Controller\\SecurityController::logout'], null, ['GET' => 0, 'POST' => 1], null, false, false, null]],
        '/session-status' => [[['_route' => 'app_session_status', '_controller' => 'App\\Authentication\\Controller\\SecurityController::sessionStatus'], null, ['GET' => 0], null, false, false, null]],
        '/auth/login' => [[['_route' => 'native_auth_login', '_controller' => 'App\\Authentication\\Controller\\SecurityController::nativeAuthLogin'], null, ['GET' => 0, 'POST' => 1], null, false, false, null]],
        '/auth/logout' => [[['_route' => 'native_auth_logout', '_controller' => 'App\\Authentication\\Controller\\SecurityController::nativeAuthLogout'], null, ['GET' => 0, 'POST' => 1], null, false, false, null]],
        '/auth/session-status' => [[['_route' => 'native_auth_session_status', '_controller' => 'App\\Authentication\\Controller\\SecurityController::nativeAuthSessionStatus'], null, ['GET' => 0], null, false, false, null]],
        '/' => [[['_route' => 'index', '_controller' => 'App\\Engine\\Controller\\IndexController::index'], null, ['GET' => 0], null, false, false, null]],
        '/auth' => [[['_route' => 'nativeAuth', '_controller' => 'App\\Engine\\Controller\\IndexController::nativeAuth'], null, ['GET' => 0], null, false, false, null]],
        '/logged-out' => [[['_route' => 'logged-out', '_controller' => 'App\\Engine\\Controller\\IndexController::loggedOut'], null, ['GET' => 0], null, false, false, null]],
        '/api/graphql' => [[['_route' => 'api_graphql_entrypoint', '_controller' => 'api_platform.graphql.action.entrypoint', '_graphql' => true], null, null, null, false, false, null]],
        '/api/graphql/graphql_playground' => [[['_route' => 'api_graphql_graphql_playground', '_controller' => 'api_platform.graphql.action.graphql_playground', '_graphql' => true], null, null, null, false, false, null]],
        '/docs/rest' => [[['_route' => 'swagger_ui', '_controller' => 'api_platform.swagger.action.ui'], null, null, null, false, false, null]],
        '/docs/graphql' => [[['_route' => 'graphiql', '_controller' => 'api_platform.graphql.action.graphql_playground'], null, null, null, false, false, null]],
        '/saml/metadata' => [[['_route' => 'saml_metadata', '_controller' => 'Hslavich\\OneloginSamlBundle\\Controller\\SamlController::metadataAction'], null, null, null, false, false, null]],
        '/saml/acs' => [[['_route' => 'saml_acs', '_controller' => 'Hslavich\\OneloginSamlBundle\\Controller\\SamlController::assertionConsumerServiceAction'], null, null, null, false, false, null]],
        '/saml/login' => [[['_route' => 'saml_login', '_controller' => 'Hslavich\\OneloginSamlBundle\\Controller\\SamlController::loginAction'], null, null, null, false, false, null]],
        '/saml/logout' => [[['_route' => 'saml_logout', '_controller' => 'Hslavich\\OneloginSamlBundle\\Controller\\SamlController::singleLogoutServiceAction'], null, null, null, false, false, null]],
    ],
    [ // $regexpList
        0 => '{^(?'
                .'|/_(?'
                    .'|error/(\\d+)(?:\\.([^/]++))?(*:38)'
                    .'|wdt/([^/]++)(*:57)'
                    .'|profiler/([^/]++)(?'
                        .'|/(?'
                            .'|search/results(*:102)'
                            .'|router(*:116)'
                            .'|exception(?'
                                .'|(*:136)'
                                .'|\\.css(*:149)'
                            .')'
                        .')'
                        .'|(*:159)'
                    .')'
                .')'
                .'|/api(?'
                    .'|/\\.well\\-known/genid/([^/]++)(*:205)'
                    .'|(?:/(index)(?:\\.([^/]++))?)?(*:241)'
                    .'|/(?'
                        .'|docs(?:\\.([^/]++))?(*:272)'
                        .'|contexts/([^.]+)(?:\\.(jsonld))?(*:311)'
                        .'|record(?'
                            .'|/([^/]++)(*:337)'
                            .'|\\-list/([^/]++)(*:360)'
                        .')'
                        .'|vardef/field\\-definitions(?'
                            .'|(?:\\.([^/]++))?(?'
                                .'|(*:415)'
                            .')'
                            .'|/([^/\\.]++)(?:\\.([^/]++))?(*:450)'
                        .')'
                        .'|app\\-(?'
                            .'|list\\-strings/([^/\\.]++)(?:\\.([^/]++))?(*:506)'
                            .'|strings/([^/\\.]++)(?:\\.([^/]++))?(*:547)'
                            .'|metadata/([^/]++)(*:572)'
                        .')'
                        .'|m(?'
                            .'|od(?'
                                .'|\\-strings/([^/\\.]++)(?:\\.([^/]++))?(*:625)'
                                .'|ule\\-metadata/([^/]++)(*:655)'
                            .')'
                            .'|etadata/view\\-definitions(?'
                                .'|(?:\\.([^/]++))?(*:707)'
                                .'|/([^/\\.]++)(?:\\.([^/]++))?(*:741)'
                            .')'
                        .')'
                        .'|user(?'
                            .'|s/([^/\\.]++)(?:\\.([^/]++))?(*:785)'
                            .'|\\-preferences(?'
                                .'|(?:\\.([^/]++))?(*:824)'
                                .'|/([^/\\.]++)(?:\\.([^/]++))?(*:858)'
                            .')'
                        .')'
                        .'|navbars/([^/\\.]++)(?:\\.([^/]++))?(*:901)'
                        .'|processes(?'
                            .'|(?:\\.([^/]++))?(*:936)'
                            .'|/([^/\\.]++)(?:\\.([^/]++))?(?'
                                .'|(*:973)'
                            .')'
                        .')'
                        .'|batched\\-statistics/([^/\\.]++)(?:\\.([^/]++))?(*:1028)'
                        .'|s(?'
                            .'|tatistics/([^/\\.]++)(?:\\.([^/]++))?(*:1076)'
                            .'|ystem\\-configs(?'
                                .'|(?:\\.([^/]++))?(*:1117)'
                                .'|/([^/\\.]++)(?:\\.([^/]++))?(*:1152)'
                            .')'
                        .')'
                        .'|theme\\-images/([^/\\.]++)(?:\\.([^/]++))?(*:1202)'
                    .')'
                .')'
            .')/?$}sDu',
    ],
    [ // $dynamicRoutes
        38 => [[['_route' => '_preview_error', '_controller' => 'error_controller::preview', '_format' => 'html'], ['code', '_format'], null, null, false, true, null]],
        57 => [[['_route' => '_wdt', '_controller' => 'web_profiler.controller.profiler::toolbarAction'], ['token'], null, null, false, true, null]],
        102 => [[['_route' => '_profiler_search_results', '_controller' => 'web_profiler.controller.profiler::searchResultsAction'], ['token'], null, null, false, false, null]],
        116 => [[['_route' => '_profiler_router', '_controller' => 'web_profiler.controller.router::panelAction'], ['token'], null, null, false, false, null]],
        136 => [[['_route' => '_profiler_exception', '_controller' => 'web_profiler.controller.exception_panel::body'], ['token'], null, null, false, false, null]],
        149 => [[['_route' => '_profiler_exception_css', '_controller' => 'web_profiler.controller.exception_panel::stylesheet'], ['token'], null, null, false, false, null]],
        159 => [[['_route' => '_profiler', '_controller' => 'web_profiler.controller.profiler::panelAction'], ['token'], null, null, false, true, null]],
        205 => [[['_route' => 'api_genid', '_controller' => 'api_platform.action.not_exposed', '_api_respond' => 'true'], ['id'], null, null, false, true, null]],
        241 => [[['_route' => 'api_entrypoint', '_controller' => 'api_platform.action.entrypoint', '_format' => '', '_api_respond' => 'true', 'index' => 'index'], ['index', '_format'], null, null, false, true, null]],
        272 => [[['_route' => 'api_doc', '_controller' => 'api_platform.action.documentation', '_format' => '', '_api_respond' => 'true'], ['_format'], null, null, false, true, null]],
        311 => [[['_route' => 'api_jsonld_context', '_controller' => 'api_platform.jsonld.action.context', '_format' => 'jsonld', '_api_respond' => 'true'], ['shortName', '_format'], null, null, false, true, null]],
        337 => [[['_route' => 'api_records_get_item', '_controller' => 'api_platform.action.get_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Data\\Entity\\Record', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_records_get_item', '_api_item_operation_name' => 'get'], ['id'], ['GET' => 0], null, false, true, null]],
        360 => [[['_route' => 'api_record_lists_get_item', '_controller' => 'api_platform.action.get_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Data\\Entity\\RecordList', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_record_lists_get_item', '_api_item_operation_name' => 'get'], ['id'], ['GET' => 0], null, false, true, null]],
        415 => [
            [['_route' => 'api_field_definitions_get_collection', '_controller' => 'api_platform.action.get_collection', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\FieldDefinitions\\Entity\\FieldDefinition', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_field_definitions_get_collection', '_api_collection_operation_name' => 'get'], ['_format'], ['GET' => 0], null, false, true, null],
            [['_route' => 'api_field_definitions_post_collection', '_controller' => 'api_platform.action.post_collection', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\FieldDefinitions\\Entity\\FieldDefinition', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_field_definitions_post_collection', '_api_collection_operation_name' => 'post'], ['_format'], ['POST' => 0], null, false, true, null],
        ],
        450 => [[['_route' => 'api_field_definitions_get_item', '_controller' => 'api_platform.action.get_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\FieldDefinitions\\Entity\\FieldDefinition', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_field_definitions_get_item', '_api_item_operation_name' => 'get'], ['id', '_format'], ['GET' => 0], null, false, true, null]],
        506 => [[['_route' => 'api_app_list_strings_get_item', '_controller' => 'api_platform.action.get_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Languages\\Entity\\AppListStrings', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_app_list_strings_get_item', '_api_item_operation_name' => 'get'], ['id', '_format'], ['GET' => 0], null, false, true, null]],
        547 => [[['_route' => 'api_app_strings_get_item', '_controller' => 'api_platform.action.get_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Languages\\Entity\\AppStrings', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_app_strings_get_item', '_api_item_operation_name' => 'get'], ['id', '_format'], ['GET' => 0], null, false, true, null]],
        572 => [[['_route' => 'api_app_metadatas_get_item', '_controller' => 'api_platform.action.get_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Metadata\\Entity\\AppMetadata', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_app_metadatas_get_item', '_api_item_operation_name' => 'get'], ['id'], ['GET' => 0], null, false, true, null]],
        625 => [[['_route' => 'api_mod_strings_get_item', '_controller' => 'api_platform.action.get_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Languages\\Entity\\ModStrings', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_mod_strings_get_item', '_api_item_operation_name' => 'get'], ['id', '_format'], ['GET' => 0], null, false, true, null]],
        655 => [[['_route' => 'api_module_metadatas_get_item', '_controller' => 'api_platform.action.get_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Metadata\\Entity\\ModuleMetadata', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_module_metadatas_get_item', '_api_item_operation_name' => 'get'], ['id'], ['GET' => 0], null, false, true, null]],
        707 => [[['_route' => 'api_view_definitions_get_collection', '_controller' => 'api_platform.action.get_collection', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\ViewDefinitions\\Entity\\ViewDefinition', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_view_definitions_get_collection', '_api_collection_operation_name' => 'get'], ['_format'], ['GET' => 0], null, false, true, null]],
        741 => [[['_route' => 'api_view_definitions_get_item', '_controller' => 'api_platform.action.get_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\ViewDefinitions\\Entity\\ViewDefinition', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_view_definitions_get_item', '_api_item_operation_name' => 'get'], ['id', '_format'], ['GET' => 0], null, false, true, null]],
        785 => [[['_route' => 'api_users_get_item', '_controller' => 'api_platform.action.get_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Module\\Users\\Entity\\User', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_users_get_item', '_api_item_operation_name' => 'get'], ['id', '_format'], ['GET' => 0], null, false, true, null]],
        824 => [[['_route' => 'api_user_preferences_get_collection', '_controller' => 'api_platform.action.get_collection', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\UserPreferences\\Entity\\UserPreference', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_user_preferences_get_collection', '_api_collection_operation_name' => 'get'], ['_format'], ['GET' => 0], null, false, true, null]],
        858 => [[['_route' => 'api_user_preferences_get_item', '_controller' => 'api_platform.action.get_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\UserPreferences\\Entity\\UserPreference', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_user_preferences_get_item', '_api_item_operation_name' => 'get'], ['id', '_format'], ['GET' => 0], null, false, true, null]],
        901 => [[['_route' => 'api_navbars_get_item', '_controller' => 'api_platform.action.get_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Navbar\\Entity\\Navbar', '_api_identifiers' => ['userID'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_navbars_get_item', '_api_item_operation_name' => 'get'], ['userID', '_format'], ['GET' => 0], null, false, true, null]],
        936 => [[['_route' => 'api_processes_get_collection', '_controller' => 'api_platform.action.get_collection', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Process\\Entity\\Process', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_processes_get_collection', '_api_collection_operation_name' => 'get'], ['_format'], ['GET' => 0], null, false, true, null]],
        973 => [
            [['_route' => 'api_processes_get_item', '_controller' => 'api_platform.action.get_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Process\\Entity\\Process', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_processes_get_item', '_api_item_operation_name' => 'get'], ['id', '_format'], ['GET' => 0], null, false, true, null],
            [['_route' => 'api_processes_put_item', '_controller' => 'api_platform.action.put_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Process\\Entity\\Process', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_processes_put_item', '_api_item_operation_name' => 'put'], ['id', '_format'], ['PUT' => 0], null, false, true, null],
        ],
        1028 => [[['_route' => 'api_batched_statistics_get_item', '_controller' => 'api_platform.action.get_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Statistics\\Entity\\BatchedStatistics', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_batched_statistics_get_item', '_api_item_operation_name' => 'get'], ['id', '_format'], ['GET' => 0], null, false, true, null]],
        1076 => [[['_route' => 'api_statistics_get_item', '_controller' => 'api_platform.action.get_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Statistics\\Entity\\Statistic', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_statistics_get_item', '_api_item_operation_name' => 'get'], ['id', '_format'], ['GET' => 0], null, false, true, null]],
        1117 => [[['_route' => 'api_system_configs_get_collection', '_controller' => 'api_platform.action.get_collection', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\SystemConfig\\Entity\\SystemConfig', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_system_configs_get_collection', '_api_collection_operation_name' => 'get'], ['_format'], ['GET' => 0], null, false, true, null]],
        1152 => [[['_route' => 'api_system_configs_get_item', '_controller' => 'api_platform.action.get_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\SystemConfig\\Entity\\SystemConfig', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_system_configs_get_item', '_api_item_operation_name' => 'get'], ['id', '_format'], ['GET' => 0], null, false, true, null]],
        1202 => [
            [['_route' => 'api_theme_images_get_item', '_controller' => 'api_platform.action.get_item', '_format' => null, '_stateless' => null, '_api_resource_class' => 'App\\Themes\\Entity\\ThemeImages', '_api_identifiers' => ['id'], '_api_has_composite_identifier' => false, '_api_exception_to_status' => [], '_api_operation_name' => 'api_theme_images_get_item', '_api_item_operation_name' => 'get'], ['id', '_format'], ['GET' => 0], null, false, true, null],
            [null, null, null, null, false, false, 0],
        ],
    ],
    null, // $checkCondition
];
