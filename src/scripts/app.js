/* global Backbone, _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Bus = require('./bus'),
        AppConfig = require('./configs/app.config'),

        GuestBundle = require('bundles/guest/guest.bundle'),
        SessionBlock = require('blocks/session/session.block');

    var guestBundle = GuestBundle.getInstance(),
        sessionBlock = SessionBlock.getInstance();

    var app = new Marionette.Application();

    app.addRegions({
        container: '.app__container',
        modal: '.app__modal'
    });

    app.on('initialize:after', function () {
        Backbone.history.start();
    });

    app.addInitializer(guestBundle.init);
    sessionBlock.on('session:out', guestBundle.init);

    Bus.events.on('app:show', _.bind(app.container.show, app.container));
    Bus.events.on('app:modal:show', _.bind(app.modal.show, app.modal));

    return app;
});
