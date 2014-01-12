/* global _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),

        GuestTemplate = require('text!./guest.template.html');

    var GuestLayout = Marionette.Layout.extend({
        template: _.template(GuestTemplate),
        className: 'guest',

        regions: {
            container: '.guest__container'
        }
    });

    return GuestLayout;
});
