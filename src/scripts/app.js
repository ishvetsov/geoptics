/* global Backbone, _ */

define(function (require) {
    'use strict';

    var
        Marionette = require('backbone.marionette'),
        Bus = require('./bus');

    var app = new Marionette.Application();

    app.addRegions({
        header: '.app__header-region'
    });

    Bus.events.on('app:header:show', _.bind(app.header.show, app.header));

    app.on('initialize:after', function () {
        Backbone.history.start();
    });

    app.addInitializer(function () {
        require('./bundles/common/common.router')();
    });

    return app;
});
