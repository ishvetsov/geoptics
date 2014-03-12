define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        Associations = require('backbone.associations'),

        Utils = require('core/utils'),
        AppConfig = require('configs/app.config');

    var PerforationModel = Backbone.AssociatedModel.extend({
        defaults: {
            id: '',
            depth: 0
        },

        urlRoot: AppConfig.rest.perforations
    });

    var PerforationCollection = Backbone.Collection.extend({
        model: PerforationModel,

        url: function () {
            return this.parents[0].url() + AppConfig.rest.perforations;
        }
    });

    return {
        Model: PerforationModel,
        Collection: PerforationCollection
    };
});