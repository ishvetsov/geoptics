'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        sass: require('./grunt/sass.grunt.js'),
        requirejs: require('./grunt/requirejs.grunt.js'),
        copy: require('./grunt/copy.grunt.js'),
        watch: require('./grunt/watch.grunt.js')
    });

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.registerTask('default', []);
};
