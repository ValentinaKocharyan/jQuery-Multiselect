module.exports = {
    target: {
        src: ['src/js/ms_script.js'],
        options: {
            globals: {
                jQuery: true
            },
            "esversion": 6,
            expr: true
        }
    }
};
