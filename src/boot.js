require.config({
    baseUrl: './',

    paths: {
        'jquery': 'libs/jquery/jquery',
        'underscore': 'libs/underscore/underscore',
        'backbone': 'libs/backbone/backbone',
        'backbone.marionette': 'libs/backbone/backbone.marionette',
        'backbone.associations': 'libs/backbone/backbone-associations',
        'require.text': 'libs/require/text',
        'bootstrap': 'libs/bootstrap/bootstrap'
    },

    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        'backbone.marionette': {
            deps: ['backbone'],
            exports: 'Marionette'
        },
        'backbone.associations': {
            deps: ['backbone']
        },
        'bootstrap': {
            deps: ['jquery']
        }
    }
});

require(['app', 'bootstrap', 'require.text'], function (App) {
    App.start();
});