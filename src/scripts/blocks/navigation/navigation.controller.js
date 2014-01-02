/* global _ */

define(function (require) {
    'use strict';

    var
        Marionette = require('backbone.marionette'),
        Bus = require('bus');

    var navigationView = new (require('./navigation.view'))([
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
        ]);

    var NavigationController = Marionette.Controller.extend({
        getInstance: function () {
            return navigationView;
        },

        render: function () {
            Bus.events.trigger('app:header:show', navigationView);
        }
    });

    return new NavigationController();
});
