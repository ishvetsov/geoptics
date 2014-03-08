define(function (require) {
    'use strict';

    var Field = require('entities/field.entity'),
        Cluster = require('entities/cluster.entity'),
        Borehole = require('entities/borehole.entity');

    var NoAttachedModel = Backbone.AssociatedModel.extend({
        defaults: {
            fields: [],
            clusters: [],
            boreholes: [],
            curField: null,
            curCluster: null
        },

        relations: [
            {
                type: Backbone.Many,
                key: 'fields',
                relatedModel: Field.Model,
                collectionType: Field.Collection
            },
            {
                type: Backbone.Many,
                key: 'clusters',
                relatedModel: Cluster.Model,
                collectionType: Cluster.Collection
            },
            {
                type: Backbone.Many,
                key: 'boreholes',
                relatedModel: Borehole.Model,
                collectionType: Borehole.Collection
            },
            {
                type: Backbone.One,
                key: 'curField',
                relatedModel: Field.Model
            },
            {
                type: Backbone.One,
                key: 'curCluster',
                relatedModel: Cluster.Model
            }
        ],

        initialize: function () {
            var _this = this,
                fields = _this.get('fields');

            fields.parents.length = 0;

            fields.on('sync', function () {
                if (fields.size() > 0) {
                    var clusters = fields.at(0).get('clusters');

                    clusters.fetch().then(function () {
                        if (clusters.size() > 0) {
                            _this.get('clusters').reset(clusters.models);
                            _this.trigger('firstsync:clusters');
                        }
                    });
                }
            });
        }
    });

    return {
        Model: NoAttachedModel
    };
});
