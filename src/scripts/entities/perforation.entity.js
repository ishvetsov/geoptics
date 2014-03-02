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
        }
    });

    var PerforationCollection = Backbone.Collection.extend({
        model: PerforationModel
    });

    return {
        Model: PerforationModel,
        Collection: PerforationCollection
    };
});