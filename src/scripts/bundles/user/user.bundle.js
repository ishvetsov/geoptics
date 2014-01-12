/* global Backbone, _ */

define(function (require) {
    'use strict';

    var Bundle = require('core/marionette.bundle'),

        UserRouter = require('./user.router'),
        UserBehavior = require('./user.behavior');

    var UserBundle = Bundle.extend({
        router: UserRouter,
        behavior: UserBehavior,

        getInstance: function () {
            return this;
        }
    });

    return new UserBundle();
});
