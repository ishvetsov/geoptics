define(function (require) {
    'use strict';

    var Bundle = require('core/marionette.bundle'),
        Bus = require('bus'),

        GuestRouter = require('./guest.router'),
        GuestBehavior = require('./guest.behavior');

    var GuestBundle = Bundle.extend({
        router: GuestRouter,
        behavior: GuestBehavior,

        getInstance: function () {
            return this;
        },

        render: function (layout) {
            Bus.events.trigger('app:show', layout);
        }
    });

    return new GuestBundle();
});
