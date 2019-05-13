module.exports = {
    target: {
        options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today() %> */\n'
        },
        dist: {
            files: {
                'dist/ms_script.min.js': ['src/js/ms_script.js']
            }
        }
    }
};
