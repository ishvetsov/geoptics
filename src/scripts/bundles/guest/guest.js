define(function (require) {
    'use strict';

    var Bundle = require('core/marionette.bundle'),
        Bus = require('bus'),

        GuestRouter = require('./guest.router'),
        GuestBehavior = require('./guest.behavior');

    var Guest = Bundle.extend({
        router: GuestRouter,
        behavior: GuestBehavior,

        render: function (layout) {
            Bus.events.trigger('app:show', layout);
        }
    });

    return new Guest();
});
