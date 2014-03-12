define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),

        Template = require('text!./psensor.template.html');

    var PSensorView = Marionette.ItemView.extend({
        template: _.template(Template),
        
        className: 'admin_psensor',

        initialize: function () {
            _.bindAll(this, 'save');
        },

        onRender: function () {
            this.binding = Rivets.bind(this.el, {
                psensor: this.model,
                view: this
            });
        },

        serializeData: function () {
            return {
                psensor: this.model
            };
        },

        save: function () {
            this.trigger('view:save');
        }
    });

    return PSensorView;
});
