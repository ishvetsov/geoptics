define(function (require) {
    'use strict';

    var config = {
        items: [
            {
                name: 'Пользователи',
                href: '#admin/users',
                mod: 'users'
            },
            {
                name: 'Ресурсодобыча',
                href: '#admin/fields',
                mod: 'fields'
            },
            {
                name: 'Мониторинг',
                href: '#admin/monitoring',
                mod:'monitoring'
            }
        ]
    };

    return config;
});
