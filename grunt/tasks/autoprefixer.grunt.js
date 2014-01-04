module.exports = {
    options: {
        browsers: ['last 2 version', '> 1%', 'ie >= 7']
    },

    main: {
        expand: true,
        cwd: 'src/styles',
        src: '*.css',
        dest: 'src/styles'
    }
};
