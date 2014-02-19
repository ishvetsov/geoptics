/* global _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),

        AppConfig = require('configs/app.config'),

        Template = require('text!./fields.template.html'),
        EmptyTemplate = require('text!./fields_empty.template.html');

    var FieldsView = Marionette.ItemView.extend({
        className: 'admin_fields',

        initialize: function () {
            _.bindAll(this, 'expandField', 'expandCluster', 'expandBorehole');
        },

        getTemplate: function () {
            if (this.collection.length) {
                return _.template(Template);
            }
            return _.template(EmptyTemplate);
        },

        onRender: function () {
            this.binding = Rivets.bind(this.el, {
                fields: this.collection,
                view: this
            });
        },

        expandField: function (ev, data) {
            $(ev.currentTarget).next().toggle();
        },

        expandCluster: function (ev, data) {
            var cluster = data.cluster,
                boreholes = cluster.get('boreholes');

            if (!boreholes.size()) {
                boreholes.fetch({
                    url: AppConfig.rest.adminBoreholes,
                    data: {id: cluster.get('id')}
                });
            }
            $(ev.currentTarget).next().toggle();
        },

        expandBorehole: function (ev, data) {
            var borehole = data.borehole,
                psensors = borehole.get('pressureSensors'),
                tsensors = borehole.get('temperatureSensors');

            if (!psensors.size()) {
                psensors.fetch({
                    url: AppConfig.rest.adminPressureSensors,
                    data: {id: borehole.get('id')}
                });
            }
            if (!tsensors.size()) {
                tsensors.fetch({
                    url: AppConfig.rest.adminTemperatureSensors,
                    data: {id: borehole.get('id')}
                });
            }
            $(ev.currentTarget).next().toggle();
        }
    });

    return FieldsView;
});
