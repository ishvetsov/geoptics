define(function (require) {
    'use strict';
    var Backbone = require('backbone'),
        Associations = require('backbone.associations'),

        Borehole = require('entities/borehole.entity'),
        AppConfig = require('configs/app.config');

    var parse = {
        tsensors: function (response) {
            var distance = +response.startDistance,
                offset = +response.distanceOffset;

            var values = response.values.map(function (v) {
                var result = [distance, v];
                distance += offset;

                return result;
            });

            return {values: values};
        },

        psensors: function (response) {
            var values = [];

            response.forEach(function (segment) {
                var period = +new Date(segment.startPeriod),
                    offset = segment.millisecondOffset;

                segment.values.forEach(function (v) {
                    values.push([period, v]);
                    period += offset;
                });

                values.push([period, null]);
            });

            return {values: values};
        }
    };

    var GraphicPointsModel = Backbone.AssociatedModel.extend({
        parse: function (response) {
            var type = this.parents[0].get('type');

            return parse[type](response);
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

        fetch: function (options) {
            var url = '/data/boreholes/'
                + this.get('borehole').get('id')
                + '/' + this.get('type')
                + '/' + this.get('sensor').get('channelNumber');

            options = _.extend({url: url}, options);

            return this.get('points').fetch(options);
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
