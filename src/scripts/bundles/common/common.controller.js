/* global Backbone */

define(function (require) {
    'use strict';

    var
        Bus = require('bus'),
        commonLayout = require('./common.layout'),
        navigationController = require('blocks/navigation/navigation.controller'),
        loginController = require('blocks/login/login.controller');

    commonLayout.on('show', function () {
        commonLayout.header.show(navigationController.getInstance());
    });

    return {
        notFound: function () {
            Backbone.history.navigate('graphics');
            this.graphics();
        },

        journal: function () {
            navigationController
                .getInstance()
                .activeItem('journal');
        },

        graphics: function () {
            navigationController
                .getInstance()
                .activeItem('graphics');
        }
    };
});
