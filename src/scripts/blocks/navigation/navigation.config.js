define(function (require) {
    'use strict';

    var config = {
        1: {
            items: [
                {
                    name: 'Графики',
                    href: '#graphics',
                    mod: 'graphics'
                },
                {
                    name: 'Журнал',
                    href: '#journal',
                    mod: 'journal'
                }
            ]
        },
            
        0: {
            items: [
                {
                    name: 'Графики',
                    href: '#graphics',
                    mod: 'graphics'
                },
                {
                    name: 'Журнал',
                    href: '#journal',
                    mod: 'journal'
                },
                {
                    name: 'Администрирование',
                    href: '#admin/users',
                    mod: 'admin'
                }
            ]
        }
    };

    return config;
});
