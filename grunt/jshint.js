module.exports = {
    target: {
        files: ['Gruntfile.js', 'src/js/ms_script.js'],
        options: {
            globals: {
                jQuery: false
            },
            "esversion": 6,
            expr: true
        }
    }
};
