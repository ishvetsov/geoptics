/* global _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),

        PrimeTemplate = require('text!./prime.template.html');

    var PrimeLayout = Marionette.Layout.extend({
        template: _.template(PrimeTemplate),
        className: 'prime',

        regions: {
            sidebar: '.prime__sidebar',
            tabs: '.prime__tabs',
            container: '.prime__container'
        }
    });

    return PrimeLayout;
});
