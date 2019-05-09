module.exports = {
    uglify: {
        options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today() %> */\n'
        },
        dist: {
            files: {
                'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
            }
        }
    }
};
