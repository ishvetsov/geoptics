module.exports = {
    vendors: {
        files: (function () {
            var files = [],
                maps = require('../grunt/copy_vendors_map.json');

            for (var map in maps) {
                files.push({
                    src: map,
                    dest: maps[map],
                    expand: true,
                    flatten: true
                });
            }

            return files;          
        })()
    },
    pages: {

    }
};
