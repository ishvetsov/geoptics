/* global _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),

        PrimeTemplate = require('text!./prime.template.html');

    var PrimeLayout = Marionette.Layout.extend({
        template: _.template(PrimeTemplate),
        className: 'prime',

        regions: {
            sidebar: '.prime_sidebar',
            container: '.prime_container'
        }
    });

    return PrimeLayout;
});
