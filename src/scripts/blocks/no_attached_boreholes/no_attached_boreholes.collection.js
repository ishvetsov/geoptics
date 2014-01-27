define(function (require) {
    'use strict';

    var Borehole = require('entities/borehole.entity'),
        AppConfig = require('configs/app.config');

    var NoAttachedBoreholeCollection = Borehole.Collection.extend({
        url: AppConfig.rest.noAttachedBoreholes
    });

    return NoAttachedBoreholeCollection;
});