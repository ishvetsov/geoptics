define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),

        Template = require('text!./field.template.html');

    var FieldView = Marionette.ItemView.extend({
        template: _.template(Template),
        
        className: 'admin_field',

        initialize: function () {
            _.bindAll(this, 'save');
        },

        onRender: function () {
            this.binding = Rivets.bind(this.el, {
                field: this.model,
                view: this
            });
        },

        serializeData: function () {
            return {
                field: this.model
            };
        },

        save: function () {
            this.trigger('view:save');
        }
    });

    return FieldView;
});
