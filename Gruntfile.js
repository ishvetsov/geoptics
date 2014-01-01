module.exports = function (grunt) {
    grunt.initConfig({
        clean: require('./grunt/clean.grunt'),
        copy: require('./grunt/copy.grunt'),
        requirejs: require('./grunt/requirejs.grunt'),
        sass: require('./grunt/sass.grunt'),
        csso: require('./grunt/csso.grunt'),
        watch: require('./grunt/watch.grunt')
    });

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    var tasks = {
        production: 'clean:dist copy:pages sass csso requirejs',
        css: 'sass'
    };

    grunt.registerTask('default', tasks.production.split(' '));
    grunt.registerTask('css', tasks.css.split(' '));
};
