module.exports = function(grunt) {
    let tasks = {scope: ['devDependencies', 'dependencies' ]};
    let options = {config: { src: "grunt/*.js" }, pkg: grunt.file.readJSON('package.json')};
    let configs = require('load-grunt-configs')(grunt, options);
    require('load-grunt-tasks')(grunt, tasks);
    grunt.initConfig(configs);
    grunt.registerTask('default', ['concat', 'uglify', 'jshint', 'watch']);
    grunt.registerTask('build', ['concat', 'uglify', 'jshint']);
};
