define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),

        Template = require('text!./sensors_sets.template.html');

    var SensorsSetsView = Marionette.ItemView.extend({
        template: _.template(Template),
        className: 'modal fade',

        events: {
            'hidden.bs.modal': '_onHiddenTriggered'
        },

        onRender: function () {
            this.binding = Rivets.bind(this.el, {
                sets: this.model.get('sets')
            });

            this.$el.modal('show');
            this.delegateEvents();
        },

        _onHiddenTriggered: function() {
            this.remove();
        }
    });

    return SensorsSetsView;
});
