define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Bus = require('bus');

    return function () {
        var router = require('./common.router')();

        Bus.events.trigger('app:show', require('./common.layout'));
        router
            .navigate('/')
            .navigate('graphics', {trigger: true});
    };
});
