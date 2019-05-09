module.exports = {
    jshint: {
        files: ['Gruntfile.js', 'src/**/*.js'],
        options: {
            globals: {
                jQuery: false
            },
            "esversion": 6,
            expr: true
        }
    }
};
