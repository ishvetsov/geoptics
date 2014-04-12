define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),

        Template = require('text!./borehole_point_presets.template.html');

    var BoreholePointPresetView = Marionette.ItemView.extend({
        template: _.template(Template),

        className: 'admin_borehole_point_presets inner-container',

        initialize: function () {
            _.bindAll(this, 'createPreset', 'editPreset', 'removePreset');
        },

        onRender: function () {
            this.binding = Rivets.bind(this.el, {
                presets: this.collection,
                view: this
            });
        },

        createPreset: function () {
            this.trigger('create');
        },

        editPreset: function (ev, data) {
            var preset = data.preset;
            this.trigger('edit', preset);
        },

        removePreset: function (ev, data) {
            var preset = data.preset;
            preset.destroy({wait: true});
        }
    });

    return BoreholePointPresetView;
});
