define(function (require) {
    'use strict';
    var Backbone = require('backbone'),
        Associations = require('backbone.associations'),

        Borehole = require('entities/borehole.entity'),
        AppConfig = require('configs/app.config');

    var GraphicPointsModel = Backbone.AssociatedModel.extend({
        parse: function (response) {
            return {values: response};
        }
    });

    var GraphicModel = Backbone.AssociatedModel.extend({
        defaults: {
            type: '',
            period: '',
            borehole: {},
            sensor: {},
            points: {}
        },

        relations: [
            {
                type: Backbone.One,
                key: 'points',
                relatedModel: GraphicPointsModel
            },
            {
                type: Backbone.One,
                key: 'borehole',
                relatedModel: Borehole.Model
            }
        ],

        fetch: function () {
            var url = '/data/boreholes/' + this.get('borehole').get('id') +
                '/' + this.get('type') +
                '/' + this.get('sensor').get('channelNumber');

            return this.get('points').fetch({url: url});
        }
    });

    var GraphicCollection = Backbone.Collection.extend({
        model: GraphicModel
    });

    return {
        Model: GraphicModel,
        Collection: GraphicCollection
    };
});
