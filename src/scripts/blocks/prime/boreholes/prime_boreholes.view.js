/* global _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),

        BoreholesTemplate = require('text!./prime_boreholes.template.html');

    var BoreholesView = Marionette.ItemView.extend({
        template: _.template(BoreholesTemplate),
        className: 'boreholes'
    });

    return BoreholesView;
});
