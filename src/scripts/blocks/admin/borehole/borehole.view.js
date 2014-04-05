/* global _, Backbone */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),

        Template = require('text!./borehole.template.html');

    var BoreholeView = Marionette.ItemView.extend({
        template: _.template(Template),

        className: 'admin_borehole inner-container',

        initialize: function () {
            _.bindAll(this, 'save',
                'removePerforation',
                'removeDepth',
                'removeMoment',
                'editPerforation',
                'editDepth',
                'editMoment',
                'createPerforation',
                'createDepth',
                'createMoment');
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

        createPerforation: function (ev, data) {
            Backbone.history.navigate('#/admin/boreholes/' +
                this.model.get('id') + '/perforations/new');
        },

        editPerforation: function (ev, data) {
            console.log('edit');
            Backbone.history.navigate('#/admin/boreholes/' +
                this.model.get('id') + '/perforations/' +
                data.perforation.get('id'));
        },

        removePerforation: function (ev, data) {
            var perforation = data.perforation;
            perforation.destroy({wait: true});
        },

        createDepth: function (ev, data) {
            Backbone.history.navigate('#/admin/boreholes/' +
                this.model.get('id') + '/depths/new');
        },

        editDepth: function (ev, data) {
            Backbone.history.navigate('#/admin/boreholes/' +
                this.model.get('id') + '/depths/' +
                data.depth.get('id'));
        },

        removeDepth: function (ev, data) {
            var depth = data.depth;
            depth.destroy({wait: true});
        },

        createMoment: function (ev, data) {
            Backbone.history.navigate('#/admin/boreholes/' +
                this.model.get('id') + '/moments/new');
        },

        editMoment: function (ev, data) {
            Backbone.history.navigate('#/admin/boreholes/' +
                this.model.get('id') + '/moments/' +
                data.moment.get('id'));
        },

        removeMoment: function (ev, data) {
            var moment = data.moment;
            moment.destroy({wait: true});
        },

        editTSensor: function (ev, data) {
            ev.stopPropagation();
            var tsensor = data.tsensor;
            Backbone.history.navigate('#/admin/boreholes/' +
                this.model.get('id') + '/tsensors/' +
                tsensor.get('channelNumber'));
        },

        editPSensor: function (ev, data) {
            ev.stopPropagation();
            var psensor = data.psensor;
            Backbone.history.navigate('#/admin/boreholes/' +
                this.model.get('id') + '/psensors/' +
                psensor.get('channelNumber'));
        },

        save: function () {
            this.trigger('view:save');
        }
    });

    return BoreholeView;
});
