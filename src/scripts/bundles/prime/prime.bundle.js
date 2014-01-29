/* global Backbone, _ */

define(function (require) {
    'use strict';

    var Bundle = require('core/bundle'),

        PrimeRouter = require('./prime.router'),
        PrimeBehavior = require('./prime.behavior');

    var PrimeBundle = Bundle.create({
        router: PrimeRouter,
        behavior: PrimeBehavior
    });

    return PrimeBundle;
});
