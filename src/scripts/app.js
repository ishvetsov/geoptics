/* global Backbone, _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Bus = require('./bus'),

        GuestBundle = require('bundles/guest/guest.bundle'),
        SessionBlock = require('blocks/session/session.block');

    var guestBundle = GuestBundle.getInstance(),
        sessionBlock = SessionBlock.getInstance();

    var app = new Marionette.Application();

    app.addRegions({
        containerRegion: '.app__container'
    });

    app.on('initialize:after', function () {
        Backbone.history.start();
    });

    app.addInitializer(guestBundle.init);
    sessionBlock.on('session:out', guestBundle.init);

    Bus.events.on('app:show', _.bind(
        app.containerRegion.show,
        app.containerRegion));

    return app;
});
