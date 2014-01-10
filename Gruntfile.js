'use strict';

module.exports = exports = function (grunt) {
    grunt.initConfig({
        mochaTest: {
            structures: {
                options: {
                    reporter: 'spec',
                    require: 'should'
                },
                src: [
                    'tests/structures/*.js'
                ]
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('test', ['mochaTest:structures']);
    grunt.registerTask('default', ['test']);
};
