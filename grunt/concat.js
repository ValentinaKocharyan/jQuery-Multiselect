module.exports = {
    target: {
        options: {
            separator: ';'
        },
        dist: {
            src: ['src/!**!/!*.js'],
            dest: 'dist/<%= pkg.name %>.js'
        }
    }
};
