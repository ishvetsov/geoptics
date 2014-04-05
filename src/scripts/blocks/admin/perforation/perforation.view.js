define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),

        Template = require('text!./perforation.template.html');

    var PerforationView = Marionette.ItemView.extend({
        template: _.template(Template),
        
        className: 'admin_perforation inner-container',

        initialize: function (options) {
            this._mode = options.mode;
            _.bindAll(this, 'save');
        },

        onRender: function () {
            this.binding = Rivets.bind(this.el, {
                perforation: this.model,
                view: this
            });
        },

        serializeData: function () {
            return {
                perforation: this.model
            };
        },

        save: function () {
            this.trigger('view:save');
        }
    });

    return PerforationView;
});
