define(function (require) {
    'use strict';

    var Bundle = require('core/marionette.bundle'),
        Bus = require('bus'),

        CommonRouter = require('./common.router'),
        CommonBehavior = require('./common.behavior');

    var CommonBundle = Bundle.extend({
        router: CommonRouter,
        behavior: CommonBehavior,

        settings: {
            navigate: true
        },

        getInstance: function () {
            return this;
        },

        render: function (layout) {
            Bus.events.trigger('app:show', layout);
        }
    });

    return new CommonBundle();
});
