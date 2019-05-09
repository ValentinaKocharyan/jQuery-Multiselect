/*module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['jshint', 'concat', 'uglify']);

};*/

module.exports = function (grunt) {

    var config = require('load-grunt-configs')(grunt);
    grunt.initConfig(config);

    grunt.registerTask('default', ['jshint', 'concat', 'uglify']);

};
