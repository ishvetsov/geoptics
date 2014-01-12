/* global _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),

        NavigationTemplate = require('text!./navigation.template.html');

    var NavigationView = Marionette.ItemView.extend({
        template: _.template(NavigationTemplate),
        className: 'navbar navbar-inverse navbar-fixed-top',

        triggers: {
            'click .nav__user': 'user:click'
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
                items: this.options
            };
        }
    });

    return NavigationView;
});
