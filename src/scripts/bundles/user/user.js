/* global Backbone, _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette');

    var Child = require('bundles/child/child');

    var UserRouter = require('./user.router'),
        userController = require('./user.controller'),
        userLayout = require('./user.layout');

    var User = Child.extend({
        router: UserRouter,
        controller: userController,
        layout: userLayout
    });

    return new User();
});
