define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        Associations = require('backbone.associations'),

        AppConfig = require('configs/app.config');

    var GraphicStateModel = Backbone.AssociatedModel.extend({
        defaults: {
            period: 'week',
            type: 'temper'
        }
    });

    return {
        Model: GraphicStateModel
    };
});
