module.exports = function (grunt) {
    grunt.initConfig({
        clean: require('./grunt/clean'),
        copy: require('./grunt/copy'),
        requirejs: require('./grunt/requirejs'),
        sass: require('./grunt/sass'),
        watch: require('./grunt/watch')
    });

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    var tasks = {
        production: 'clean:dist copy:pages sass requirejs',
        css: 'sass'
    };

    grunt.registerTask('default', tasks.production.split(' '));
    grunt.registerTask('css', tasks.css.split(' '));
};
