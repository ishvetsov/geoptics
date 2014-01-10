define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Bus = require('bus');

    var CommonRouter = require('./common.router'),
        commonController = require('./common.controller');

    return {
        init: function (route) {
            var router = new CommonRouter({
                controller: commonController.handlers
            });

            commonController.init();

            var currentHash = window.location.hash;

            Bus.events.trigger('app:show', require('./common.layout'));

            router.navigate('/').navigate(currentHash, {trigger: true});
        }
    };
});
