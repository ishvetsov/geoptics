'use strict';

module.exports = function (grunt) {
    var tasksForLoad = [
        'clean',
        'copy',
        'requirejs',
        'sass',
        'csso',
        'watch',
        'autoprefixer',
        'csscomb',
        'processhtml'
    ];
    
    grunt.initConfig(require('./grunt/config.grunt').getInitConfig(tasksForLoad));

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    var tasks = {
        production: 'clean:dist sass autoprefixer csso requirejs processhtml',
        css: 'sass csscomb autoprefixer'
    };

    grunt.registerTask('default', tasks.production.split(' '));
    grunt.registerTask('css', tasks.css.split(' '));
};
