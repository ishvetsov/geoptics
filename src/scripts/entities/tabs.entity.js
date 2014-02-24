define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        Associations = require('backbone.associations'),

        AppConfig = require('configs/app.config');

    var GraphicStateModel = Backbone.AssociatedModel.extend({
        state: {
            ids: [],
            periodType: 'week',
            graphicType: 'temper'
        }
    });

    return {
        Model: GraphicStateModel
    };
});
