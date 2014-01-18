define(function (require) {
    'use strict';

    var Well = require('entities/well.entity'),
        Config = require('configs/config');

    var NoAttachedWellsCollection = Well.Collection.extend({
        url: Config.rest.noAttachedWells
    });

    return NoAttachedWellsCollection;
});