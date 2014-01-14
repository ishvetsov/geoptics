define(function (require) {
    'use strict';

    var Rivets = require('rivets'),
        RivetsAdapter = require('rivets.adapter');

    return function () {
        Rivets.formatters.prepend = function (val, arg) {
            return arg + val;
        };
    };
});
