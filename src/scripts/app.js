/* global Backbone, _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Bus = require('./bus'),

        GuestBundle = require('./bundles/guest/guest.bundle');

    var app = new Marionette.Application();

    app.addRegions({
        container: '.app__container'
    });

    Bus.events.on('app:show', _.bind(app.container.show, app.container));

    app.on('initialize:after', function () {
        Backbone.history.start();
    });

    app.addInitializer(function () {
        GuestBundle.getInstance().init();
    });

    return app;
});
