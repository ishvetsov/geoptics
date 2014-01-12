/* global Backbone, _ */

define(function (require) {
    'use strict';

    var Bundle = require('core/marionette.bundle'),

        AdminRouter = require('./admin.router'),
        AdminBehavior = require('./admin.behavior');

    var AdminBundle = Bundle.extend({
        router: AdminRouter,
        behavior: AdminBehavior,

        getInstance: function () {
            return this;
        }
    });

    return new AdminBundle();
});
