/* global _ */

define(function (require) {
    'use strict';

    var
        Marionette = require('backbone.marionette');

    var NavigationView = Marionette.ItemView.extend({
        template: _.template(require('text!./navigation.template.html')),
        className: 'navbar navbar-inverse navbar-fixed-top',

        ui: {
            items: '.nav__item'
        },

        activeItem: function (mod) {
            this.ui.items
                .removeClass('active')
                .filter('.nav__item_' + mod)
                .addClass('active');
        },

        serializeData: function () {
            return {
                items: this.options,
            };
        }
    });

    return NavigationView;
});
