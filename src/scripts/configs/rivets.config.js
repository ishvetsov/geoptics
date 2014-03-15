define(function (require) {
    'use strict';

    var Rivets = require('rivets'),
        RivetsAdapter = require('rivets.adapter');

    return function () {
        Rivets.formatters.prepend = function (val, arg) {
            return arg + val;
        };

        Rivets.formatters.eq = function (val, arg) {
            return arg == val;
        };

        Rivets.formatters.empty = function (val, arg) {
            return val.length === 0;
        };
    };
});
