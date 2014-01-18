/* global Backbone, _ */

define(function (require) {
    'use strict';

    var Bundle = require('core/bundle'),

        AdminRouter = require('./admin.router'),
        AdminBehavior = require('./admin.behavior');

    var AdminBundle = Bundle.create({
        router: AdminRouter,
        behavior: AdminBehavior
    });

    return AdminBundle;
});
