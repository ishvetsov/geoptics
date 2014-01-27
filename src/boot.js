'use strict';

require.config({
    baseUrl: './scripts',

    paths: {
        'jquery': 'vendors/jquery/jquery',
        'jquery.cookie': 'vendors/jquery/jquery.cookie',
        'underscore': 'vendors/underscore/underscore',
        'backbone': 'vendors/backbone/backbone',
        'backbone.marionette': 'vendors/backbone/backbone.marionette',
        'backbone.associations': 'vendors/backbone/backbone-associations',
        'text': 'vendors/require/text',
        'bootstrap': 'vendors/bootstrap/bootstrap',
        'rivets': 'vendors/rivets/rivets',
        'rivets.adapter': 'vendors/rivets/rivets-backbone',
        'moment': 'vendors/moment/moment'
    },

    map: {
        'rivets.adapter': {
            'Backbone': 'backbone'
        }
    },

    shim: {
        'jquery.cookie': {
            deps: ['jquery']
        },
        'Backbone': {
            deps: ['underscore', 'jquery']
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'backbone.marionette': {
            deps: ['backbone'],
            exports: 'Marionette'
        },
        'backbone.associations': {
            deps: ['backbone']
        },
        'underscore': {
            exports: '_'
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'rivets': {
            deps: ['jquery']
        },
        'rivets.adapter': {
            deps: ['rivets', 'backbone']
        }
    }
});

require([
    'app',
    'bootstrap',
    'configs/app.config'
], function (app) {
    app.start();
});
