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
                    'www/js/timtracker.js': 'www/js/**/*.jsx'
                },
                options: {
                    transform: [reactify],
                    browserifyOptions: {
                        extensions: ['.jsx'],
                        debug: true
                    },
                    watch: true,
                    keepAlive: true
                }
            },
            prod: {
                files: {
                    'www/js/timtracker.js': 'www/js/**/*.jsx'
                },
                options: {
                    transform: [reactify],
                    browserifyOptions: {
                        extensions: ['.jsx']
                    }
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
                    'www/js/timtracker.js': 'www/js/timtracker.js'
                }
            }
        }
    });

    grunt.registerTask('default', ['browserify:prod']);
    grunt.registerTask('dev', ['browserify:dev']);
    grunt.registerTask('prod', ['browserify:prod', 'closurecompiler']);
};
