/*module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['jshint', 'concat', 'uglify']);

};*/

module.exports = function (grunt) {

    var tasks = {scope: ['devDependencies', 'dependencies' ]};
    var options = {config: { src: "grunt/*.js" }, pkg: grunt.file.readJSON('package.json')};
    var configs = require('load-grunt-configs')(grunt, options);
    require('load-grunt-tasks')(grunt, tasks);
    grunt.initConfig(configs);
    grunt.registerTask('default', ['uglify']);

};
