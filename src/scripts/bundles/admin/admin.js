define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette');

    return {
        init: function (route) {
            require('./admin.router').init();
        }
    };
});
