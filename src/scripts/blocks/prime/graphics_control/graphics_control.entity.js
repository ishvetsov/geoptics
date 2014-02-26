define(function (require) {
    'use strict';

    var Associations = require('backbone.associations'),

        GraphicsControlConfig = require('./graphics_control.config');

    var GraphicsControlModel = Backbone.AssociatedModel.extend({
        defaults: {
            type: 'temperature'
        },

        initialize: function () {
            this.on('change:period', this.setRange);
            this.set('period', 'hour');
        }
    });

    GraphicsControlModel.prototype.setRange = function () {
        var period = this.get('period'),
            startDate = period === 'all'
                ? null
                : moment().subtract(period, 1).format();

        this.set('startDate', startDate);
        this.set('endDate', moment().format());
    };

    return {
        Model: GraphicsControlModel
    };
});
