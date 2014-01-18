/* global Backbone, _ */

define(function (require) {
    'use strict';

    var Bundle = require('core/bundle'),

        UserRouter = require('./user.router'),
        UserBehavior = require('./user.behavior');

    var UserBundle = Bundle.create({
        router: UserRouter,
        behavior: UserBehavior
    });

    return UserBundle;
});
