'use strict';

require.config({
    baseUrl: './scripts',

    paths: {
        'jquery': 'vendors/jquery/jquery',
        'underscore': 'vendors/underscore/underscore',
        'backbone': 'vendors/backbone/backbone',
        'backbone.marionette': 'vendors/backbone/backbone.marionette',
        'backbone.associations': 'vendors/backbone/backbone-associations',
        'text': 'vendors/require/text',
        'bootstrap': 'vendors/bootstrap/bootstrap'
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

require(['app', 'bootstrap', 'config/config'], function (app) {
    app.start();
});
