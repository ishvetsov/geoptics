/* global _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),

        SensorsTreeTemplate = require('text!./prime_sensors_tree.template.html');

    var SensorsTreeView = Marionette.ItemView.extend({
        template: _.template(SensorsTreeTemplate),
        className: 'sensors-tree',

        ui: {
            component: '.sensors-tree_component',
            save: '.sensors-tree_save',
            reset: '.sensors-tree_reset'
        },

        events: {
            'click @ui.component': '_onComponentClicked',
            'click @ui.save': '_onSaveClicked',
            'click @ui.reset': '_onResetClicked'
        },

        initialize: function () {
            _.bindAll(this, '_onResetClicked', 'onSetClicked');
        },

        onRender: function () {
            this.binding = Rivets.bind(this.el, {
                model: this.model,
                view: this
            });

            this.delegateEvents();
        },

        _onResetClicked: function (ev) {
            ev.preventDefault();
            this.model.resetSensors();
        },

        _onSaveClicked: function (ev) {
            ev.preventDefault();
            alert('dummy');
        },

        onSetClicked: function (ev, data) {
            ev.preventDefault();
            this.model.loadSet(data.set.get('id'));
        },

        _onComponentClicked: function (ev) {
            ev.stopPropagation();
            $(ev.currentTarget).toggleClass('active');
        }
    });

    return SensorsTreeView;
});