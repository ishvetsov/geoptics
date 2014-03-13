/* global _, Backbone */
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
            var field = data.field;

            if (this._toggle(ev)) {
                field.get('clusters').fetch();
            }
        },

        expandCluster: function (ev, data) {
            var cluster = data.cluster;

            if (this._toggle(ev)) {
                cluster.get('boreholes').fetch();
            }
        },

        expandBorehole: function (ev, data) {
            var borehole = data.borehole;

            if (this._toggle(ev)) {
                borehole.get('psensors').fetch();
                borehole.get('tsensors').fetch();
            }
        },

        editField: function (ev, data) {
            ev.stopPropagation();
            Backbone.history.navigate('#/admin/fields/' + data.field.get('id'));
        },

        editCluster: function (ev, data) {
            ev.stopPropagation();
            Backbone.history.navigate('#/admin/clusters/' + data.cluster.get('id'));
        },

        editBorehole: function (ev, data) {
            ev.stopPropagation();
            Backbone.history.navigate('#/admin/boreholes/' + data.borehole.get('id'));
        },

        editTSensor: function (ev, data) {
            ev.stopPropagation();
            var tsensor = data.tsensor;
            Backbone.history.navigate('#/admin/boreholes/' +
                tsensor.collection.parents[0].get('id') + '/tsensors/' +
                tsensor.get('channelNumber'));
        },

        editPSensor: function (ev, data) {
            ev.stopPropagation();
            var psensor = data.psensor;
            Backbone.history.navigate('#/admin/boreholes/' +
                psensor.collection.parents[0].get('id') + '/psensors/' +
                psensor.get('channelNumber'));
        },

        _toggle: function (ev) {
            return $(ev.currentTarget).next().toggle().is(':visible');
        }
    });

    return FieldsView;
});
