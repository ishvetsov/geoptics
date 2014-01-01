'use strict';

var dependenciesCopyMap = require('../package-map.json');

/**
 * @return {Array}
 */
var getCopyPathsConfig = function () {
    var files = [];

    Object.keys(dependenciesCopyMap).forEach(function (map) {
        files.push({
            src: map,
            dest: dependenciesCopyMap[map],
            expand: true,
            flatten: true
        });
    });

    return files;
};

module.exports = {
    vendors: {
        files: getCopyPathsConfig()
    },
    build: {}
};
