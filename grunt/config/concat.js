module.exports = {
    concat: {
        options: {
            separator: ';'
        },
        dist: {
            src: ['src/!**!/!*.js'],
            dest: 'dist/<%= pkg.name %>.js'
        }
    }
};
