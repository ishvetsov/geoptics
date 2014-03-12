define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),

        Template = require('text!./depth.template.html');

    var DepthView = Marionette.ItemView.extend({
        template: _.template(Template),
        
        className: 'admin_depth',

        initialize: function () {
            _.bindAll(this, 'save');
        },

        onRender: function () {
            this.binding = Rivets.bind(this.el, {
                depth: this.model,
                view: this
            });
        },

        serializeData: function () {
            return {
                depth: this.model
            };
        },

        save: function () {
            this.trigger('view:save');
        }
    });

    return DepthView;
});