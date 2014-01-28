define(function (require) {
    'use strict';

    var _ = require('underscore');

    return function () {
        _.templateSettings = {
            evaluate: /\{\{(.+?)\}\}/g,
            interpolate: /\{\{=(.+?)\}\}/g,
            escape: /\{\{-(.+?)\}\}/g,
            variable: 'it'
        };

        return _;
    };
});
