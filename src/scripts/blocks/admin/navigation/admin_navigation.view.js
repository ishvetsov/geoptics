/* global _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),

        Template = require('text!./admin_navigation.template.html');

    var AdminNavigationView = Marionette.ItemView.extend({
        template: _.template(Template),
        className: 'admin_navigation',
        
        ui: {
            items: 'li'
        },

        setActiveItem: function (mod) {
            this.disactiveAllItems()
                .filter('li[data-type=' + mod + ']')
                .addClass('active');
        },

        disactiveAllItems: function () {
            return this.ui.items.removeClass('active');
        },

        serializeData: function () {
            return {
                items: this.options.config
            };
        }
    });

    return AdminNavigationView;
});
