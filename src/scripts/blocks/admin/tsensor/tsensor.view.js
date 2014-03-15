define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),

        Template = require('text!./tsensor.template.html');

    var TSensorView = Marionette.ItemView.extend({
        template: _.template(Template),
        
        className: 'admin_tsensor inner-container',

        initialize: function () {
            _.bindAll(this, 'save');
        },

        onRender: function () {
            this.binding = Rivets.bind(this.el, {
                tsensor: this.model,
                view: this
            });
        },

        serializeData: function () {
            return {
                tsensor: this.model
            };
        },

        save: function () {
            this.trigger('view:save');
        }
    });

    return TSensorView;
});
