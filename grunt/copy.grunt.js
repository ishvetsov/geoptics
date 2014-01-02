'use strict';

function getVendorsCopyConfig () {
    var maps = require('../map.package.json');

    return Object.keys(maps).map(function (map) {
        return {
            src: map,
            dest: maps[map],
            expand: true,
            flatten: true
        };
    });
}

module.exports = {
    vendors: {
        files: getVendorsCopyConfig()
    },

    pages: {}
};
