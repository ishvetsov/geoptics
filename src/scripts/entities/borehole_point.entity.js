define(function (require) {
    'use strict';
    var Backbone = require('backbone'),
        Associations = require('backbone.associations'),

        AppConfig = require('configs/app.config'),

        BoreholePointPreset = require('./borehole_point_preset.entity');

    var BoreholePointModel = Backbone.AssociatedModel.extend({
        defaults: {
            value: '',
            preset: {}
        },

        relations: [
            {
                type: Backbone.One,
                key: 'preset',
                relatedModel: BoreholePointPreset.Model
            }
        ],

        initialize: function () {
            _.bindAll(this, 'fetchPreset');
        },

        urlRoot: AppConfig.rest.boreholePoints,

        fetchPreset: function () {
            this.get('preset').set('id', this.get('presetId'));
            this.get('preset').fetch();
        },

        saveAtContext: function (options) {
            options = options || {};
            _.extend(options, {url: _.result(this.collection, 'url')});
            return this.save(this.attributes, options);
        }
    });

    var BoreholePointCollection = Backbone.Collection.extend({
        model: BoreholePointModel,

        url: function () {
            return this.parents[0].url() + AppConfig.rest.boreholePoints;
        }
    });

    return {
        Model: BoreholePointModel,
        Collection: BoreholePointCollection
    };
});
