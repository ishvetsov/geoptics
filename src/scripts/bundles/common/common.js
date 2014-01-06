define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Bus = require('bus');

    return {
        init: function (route) {
            var router = require('./common.router')
                .init()
                .navigate('/');

            Bus.events.trigger('app:show', require('./common.layout'));
            route && router.navigate('graphics', {trigger: true});
        }
    };
});
