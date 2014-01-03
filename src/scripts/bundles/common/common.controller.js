/* global Backbone */

define(function (require) {
    'use strict';

    var
        Bus = require('bus'),
        navigationController = require('blocks/navigation/navigation.controller'),
        loginController = require('blocks/login/login.controller');

    function checkAuthorization(passed, ctx) {
        if (loginController.isAuthorized()) {
            passed.apply(ctx);
        } else {
            Bus.events.trigger('app:all:close');
            loginController.render();
        }
    }

    var handlers = {
        notFound: function () {
            checkAuthorization(function () {
                console.log('not found');
            }, this);
        },

        index: function () {
            checkAuthorization(function () {
                Backbone.history.navigate('graphics');
                this.graphics();
            }, this);
        },

        journal: function () {
            checkAuthorization(function () {
                navigationController.render();
                navigationController
                    .getInstance()
                    .activeItem('journal');
            }, this);
        },

        graphics: function () {
            checkAuthorization(function () {
                navigationController.render();
                navigationController
                    .getInstance()
                    .activeItem('graphics');
            }, this);
        }
    };

    return {
        init: function () {
            return handlers;
        }
    };
});
