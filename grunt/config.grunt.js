'use strict';

module.exports = {
    getInitConfig: function (tasks, root) {
        var config = {};
        root = root || './';

        tasks.forEach(function (task) {
            config[task] = require(root + task + '.grunt');
        });

        return config;
    }
};
