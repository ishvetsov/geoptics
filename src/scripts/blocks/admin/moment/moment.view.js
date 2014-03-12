define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),

        Template = require('text!./moment.template.html');

    var MomentView = Marionette.ItemView.extend({
        template: _.template(Template),
        
        className: 'admin_moment',

        initialize: function () {
            _.bindAll(this, 'save');
        },

        onRender: function () {
            this.binding = Rivets.bind(this.el, {
                moment: this.model,
                view: this
            });
        },

        serializeData: function () {
            return {
                moment: this.model
            };
        },

        save: function () {
            this.trigger('view:save');
        }
    });

    return MomentView;
});
