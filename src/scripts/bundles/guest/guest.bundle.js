define(function (require) {
    'use strict';

    var Bundle = require('core/bundle'),
        Bus = require('bus'),

        GuestRouter = require('./guest.router'),
        GuestBehavior = require('./guest.behavior');

    var GuestBundle = Bundle.create({
        router: GuestRouter,
        behavior: GuestBehavior,

        render: function (layout) {
            Bus.events.trigger('app:show', layout);
        }
    });

    return GuestBundle;
});
