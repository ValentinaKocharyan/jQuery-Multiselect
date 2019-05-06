module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            "options": { "separator": ";" },
            "build": {
                "src": ["js/ms_script.js"],
                "dest": "js/app.js"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['concat']);
};
