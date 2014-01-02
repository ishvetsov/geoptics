module.exports = {
    main: {
        files: [
            {
                expand: true,
                cwd: 'src/styles/scss',
                src: ['**/*.scss'],
                dest: 'src/styles/scss',
                filter: 'isFile'
            }
        ]
    }
};
