/* global _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette');

    var GuestLayout = Marionette.Layout.extend({
        template: _.template(require('text!./guest.template.html')),
        className: 'guest',

        regions: {
            container: '.guest__container'
        }
    });

    return new GuestLayout();
});
