/* global _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),

        NavigationTemplate = require('text!./navigation.template.html');

    var NavigationView = Marionette.ItemView.extend({
        template: _.template(NavigationTemplate),
        className: 'navbar navbar-inverse navbar-fixed-top',

        triggers: {
            'click @ui.signout': 'signout:click'
        },

        ui: {
            items: '.nav_item',
            signout: '.nav_signout'
        },

        setActiveItem: function (mod) {
            this.ui.items
                .removeClass('active')
                .filter('.nav_item_' + mod)
                .addClass('active');
        },

        serializeData: function () {
            return {
                items: this.options.config.items
            };
        }
    });

    return NavigationView;
});
