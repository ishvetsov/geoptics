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
                name: 'Скважины',
                href: '#admin/wells',
                mod: 'wells'
            },
            {
                name: 'Мониторинг',
                href: '#admin/monitoring',
                mod:'monitoring'
            }
        ]
    }

    return config;
});