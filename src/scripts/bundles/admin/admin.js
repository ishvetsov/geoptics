/* global Backbone, _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette');

    var Child = require('bundles/child/child');

    var AdminRouter = require('./admin.router'),
        adminController = require('./admin.controller'),
        adminLayout = require('./admin.layout');

    var Admin = Child.extend({
        router: AdminRouter,
        controller: adminController,
        layout: adminLayout
    });

    return new Admin();
});
