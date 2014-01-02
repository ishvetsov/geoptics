'use strict';

function getVendorsCopyConfig () {
    var files = [],
        maps = require('../map.package.json');

    Object.keys(maps).forEach(function (map) {
        files.push({
            src: map,
            dest: maps[map],
            expand: true,
            flatten: true
        });
    });

    return files;
}

module.exports = {
    vendors: {
        files: getVendorsCopyConfig()
    },

    pages: {}
};
