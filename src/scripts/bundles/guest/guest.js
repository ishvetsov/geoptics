define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Bus = require('bus');

    return {
        init: function () {
            require('./guest.router')();
            Bus.events.trigger('app:show', require('./guest.layout'));
        }
    };
});
