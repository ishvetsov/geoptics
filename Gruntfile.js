module.exports = function (grunt) {
    'use strict';

    grunt.initConfig(require('./grunt/config.grunt').build());
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    var tasks = {
        production: 'clean:dist sass autoprefixer cssmin copy:fonts copy:images requirejs processhtml',
        css: 'sass csscomb autoprefixer'
    };

    grunt.registerTask('default', tasks.production.split(' '));
    grunt.registerTask('css', tasks.css.split(' '));
};
