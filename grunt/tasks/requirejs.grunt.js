module.exports = {
    compile: {
        options: {
            baseUrl: 'src/',
            mainConfigFile: 'src/boot.js',
            out: 'dist/scripts/app.built.js',
            paths: {
                requireLib: 'scripts/vendors/require/require'
            },
            include: 'requireLib'
        }
    }
};
