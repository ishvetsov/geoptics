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

        _.mixin({
            capitalize: function (string) {
                return string.charAt(0).toUpperCase() + string.substring(1);
            },

            uncapitalize: function (string) {
                return string.charAt(0).toLowerCase() + string.substring(1);
            }
        });

        return _;
    };
});
