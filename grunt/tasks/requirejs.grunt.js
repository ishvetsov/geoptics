module.exports = {
    compile: {
        options: {
            baseUrl: 'src/scripts',
            mainConfigFile: 'src/boot.js',
            name: '../boot',
            out: 'dist/scripts/app.built.js',
            paths: {
                requireLib: 'vendors/require/require'
            },
            include: 'requireLib'
        }
    }
};
