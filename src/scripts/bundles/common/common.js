define(function (require) {
    'use strict';

    var Bundle = require('core/marionette.bundle'),
        Bus = require('bus'),

        CommonRouter = require('./common.router'),
        CommonBehavior = require('./common.behavior');

    var Common = Bundle.extend({
        router: CommonRouter,
        behavior: CommonBehavior,

        settings: {
            navigate: true
        },

        render: function (layout) {
            Bus.events.trigger('app:show', layout);
        }
    });

    return new Common();
});
