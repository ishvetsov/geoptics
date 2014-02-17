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
            _.bindAll(this, 'expandField', 'expandCluster');
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

        _expand: function (ev, model, children, url) {
            children = model.get(children);
            if (!children.size()) {
                children.fetch({
                    url: url,
                    data: {id: model.get('id')}
                });
            }

            $(ev.currentTarget).next().toggle();
        },

        expandField: function (ev, data) {
            this._expand(ev, data.field, 'clusters',
                AppConfig.rest.adminClusters);
        },

        expandCluster: function (ev, data) {
            this._expand(ev, data.cluster, 'boreholes',
                AppConfig.rest.adminBoreholes);
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
