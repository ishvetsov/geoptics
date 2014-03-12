define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),

        Template = require('text!./borehole.template.html');

    var BoreholeView = Marionette.ItemView.extend({
        template: _.template(Template),

        className: 'admin_borehole',

        initialize: function () {
            _.bindAll(this, 'save',
                'removePerforation',
                'removeDepth',
                'removeMoment');
        },

        onRender: function () {
            this.binding = Rivets.bind(this.el, {
                borehole: this.model,
                view: this
            });
        },

        serializeData: function () {
            return {
                borehole: this.model
            };
        },

        removePerforation: function (ev, data) {
            var perforation = data.perforation;
            perforation.destroy({wait: true});
        },

        removeDepth: function (ev, data) {
            var depth = data.depth;
            depth.destroy({wait: true});
        },

        removeMoment: function (ev, data) {
            var moment = data.moment;
            moment.destroy({wait: true});
        },

        save: function () {
            this.trigger('view:save');
        }
    });

    return BoreholeView;
});
