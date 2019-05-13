module.exports = {
    target: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint', 'concat', 'uglify']
    }
};
