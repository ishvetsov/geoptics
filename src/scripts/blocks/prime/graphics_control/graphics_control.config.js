define(function (require) {
    'use strict';

    var config = {
        types: [
            {
                name: 'temperature',
                alias: 'Температура'
            },
            {
                name: 'pressure',
                alias: 'Давление'
            }
        ],

        periods: [
            {
                name: 'hour',
                alias: 'Час'
            },
            {
                name: 'day',
                alias: 'День'
            },
            {
                name: 'week',
                alias: 'Неделя'
            },
            {
                name: 'month',
                alias: 'Месяц'
            },
            {
                name: 'year',
                alias: 'Год'
            },
            {
                name: 'all',
                alias: 'Все'
            }
        ]
    };

    return config;
});
