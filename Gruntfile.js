module.exports = function(grunt) {
    var reactify = require('grunt-react').browserify;

    // Project configuration.
    require('load-grunt-tasks', {pattern: ['grunt-*', '!grunt-react']})(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {

        },

        browserify: {
            dev: {
                files: {
                    'www/js/app.js': 'www/js/components/*.jsx'
                },
                options:      {
                    transform: [reactify],
                    browserifyOptions: {
                        debug: true
                    },
                    watch: true,
                    keepAlive: true
                }
            },
            prod: {
                files: {
                    'www/js/app.js': 'www/js/components/*.jsx'
                },
                options:      {
                    transform: [reactify]
                }
            }
        },

        // Minify and optimize JS
        closurecompiler: {
            prod: {
                options: {
                    'compilation_level': 'SIMPLE_OPTIMIZATIONS'
                },
                files: {
                    'www/js/app.js': 'www/js/app.js'
                }
            }
        }
    });

    grunt.registerTask('default', ['browserify:prod']);
    grunt.registerTask('dev', ['browserify:dev']);
    grunt.registerTask('prod', ['browserify:prod', 'closurecompiler']);
};
