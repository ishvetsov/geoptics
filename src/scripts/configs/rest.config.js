define(function () {
    'use strict';

    var getPaths = function (basePath, paths) {
        var result = {};

        Object.keys(paths).forEach(function (key) {
            result[key] = basePath + paths[key];
        });

        return result;
    };

    var basePaths = {
        src: '../',
        dist: './'
    };

    var mockPaths = {
        user: 'data/user.json',
        users: 'data/users.json',
        field: 'data/field.json',
        fields: 'data/fields.json',
        cluster: 'data/cluster.json',
        clusters: 'data/clusters.json',
        boreholes: 'data/boreholes.json',
        noAttached: 'data/no_attached.json',
        psensors: 'data/psensors.json',
        tsensors: 'data/tsensors.json',
        graphics: 'data/graphics.json',
        primeSensorsTree: 'data/prime_sensors_tree.json',
        sensorsSets: 'data/sensors_set.json'
    };

    var rest = {
        local: getPaths(basePaths.src, mockPaths)
    };

    return rest;
});
