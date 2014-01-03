/* global Backbone, _ */

define(function (require) {
    'use strict';

    var
        Marionette = require('backbone.marionette'),
        Bus = require('./bus');

    var app = new Marionette.Application();

    app.addRegions({
        login: '.app__login-region',
        header: '.app__header-region'
    });

    Bus.events.on('app:login:show', _.bind(app.login.show, app.login));
    Bus.events.on('app:header:show', _.bind(app.header.show, app.header));

    Bus.events.on('app:all:close', function () {
        app.header.close();
    });
    Bus.events.on('app:login:close', _.bind(app.login.close, app.login));

    app.on('initialize:after', function () {
        Backbone.history.start();
    });

    app.addInitializer(function () {
        require('./bundles/common/common.router')();
    });

    return app;
});
