define(function (require) {
    'use strict';

    var Bundle = require('core/bundle'),
        Bus = require('bus'),

        CommonRouter = require('./common.router'),
        CommonBehavior = require('./common.behavior');

    var CommonBundle = Bundle.create({
        router: CommonRouter,
        behavior: CommonBehavior,

        settings: {
            navigate: true
        },

        render: function (layout) {
            Bus.events.trigger('app:show', layout);
        }
    });

    return CommonBundle;
});
