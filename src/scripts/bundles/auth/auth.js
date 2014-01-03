define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Bus = require('bus');

    return function () {
        require('./auth.router')();
        Bus.events.trigger('app:show', require('./auth.layout'));
    };
});
