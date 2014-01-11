define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Bus = require('bus');

    var CommonRouter = require('./common.router'),
        СommonController = require('./common.controller');

    return {
        init: function (route) {
            var router = new CommonRouter({
                controller: СommonController.handlers
            });

            СommonController.init();

            var currentHash = window.location.hash;

            Bus.events.trigger('app:show', require('./common.layout'));

            router.navigate('/').navigate(currentHash, {trigger: true});
        }
    };
});
