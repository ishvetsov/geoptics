/* global Backbone, _ */

define(function (require) {
    'use strict';

    var Bundle = require('core/marionette.bundle'),

        UserRouter = require('./user.router'),
        UserBehavior = require('./user.behavior');

    var User = Bundle.extend({
        router: UserRouter,
        behavior: UserBehavior
    });

    return new User();
});
