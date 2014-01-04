define(function (require) {
    'use strict';

    var config = {
        user: {
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
            
        admin: {
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
                    href: '#admin',
                    mod: 'admin'
                }
            ]
        }
    };

    return config;
});
