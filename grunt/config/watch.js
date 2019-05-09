module.exports = {
    watch: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint', 'concat', 'uglify']
    }
};
