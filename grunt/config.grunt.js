/* global module, require, __dirname */

var path = require('path');

module.exports = {
    config: {},

    tasksPath: './tasks/',

    _loadTask: function (file) {
        this.config[file.split('.')[0]] = require(this.tasksPath + file);
    },

    build: function () {
        require('fs')
            .readdirSync(path.resolve(__dirname, this.tasksPath))
            .forEach(this._loadTask.bind(this));

        return this.config;
    }
};
