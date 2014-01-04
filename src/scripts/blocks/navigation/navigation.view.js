/* global _ */

define(function (require) {
    'use strict';

    var
        Marionette = require('backbone.marionette'),
        Bus = require('bus');

    var NavigationView = Marionette.ItemView.extend({
        template: _.template(require('text!./navigation.template.html')),
        className: 'navbar navbar-inverse navbar-fixed-top',

        events: {
            'click .nav__user': '_onUserClicked'
        },

        ui: {
            items: '.nav__item',
            user: '.nav__user'
        },

        setActiveItem: function (mod) {
            this.ui.items
                .removeClass('active')
                .filter('.nav__item_' + mod)
                .addClass('active');
        },

        serializeData: function () {
            return {
                items: this.options,
            };
        },

        _onUserClicked: function () {
            Bus.events.trigger('logout');
        }
    });

    return NavigationView;
});
