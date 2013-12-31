module.exports = function(grunt) {
    var packageJSON = grunt.file.readJSON('package.json');
    
    /**
     * Функция для создания конфига копирования библиотек из node_modules в
     * src/scripts/libs, используется в задаче grunt - copy.
     * @return {[]}
     */
    var getCopyPathsConfig = function () {
        var files = [],
            maps = packageJSON.dependenciesCopyMap;

        for (var map in maps) {
            files.push({
                src: map,
                dest: maps[map],
                expand: true,
                flatten: true
            });
        }

        return files;
    };


    grunt.initConfig({
        pkg: packageJSON,

        sass: {
            options: {
                noCache: true
            },
            dist: {
                files: {
                    'src/styles/main_built.css': 'src/styles/main.scss'
                }
            }
        },

        requirejs: {
            compile: {
                options: {
                    baseUrl: 'src/',
                    mainConfigFile: 'src/boot.js',
                    out: 'dist/script_built.js',
                    paths: {
                        requireLib: 'scripts/libs/require/require'
                    },
                    include: 'requireLib'
                }
            }
        },

        copy: {
            libs: {
                files: getCopyPathsConfig()
            }
        },

        watch: {
            sass: {
                files: ['src/styles/*.scss'],
                tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', []);
};
