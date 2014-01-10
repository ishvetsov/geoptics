/* global _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette');

    var UserLayout = Marionette.Layout.extend({
        template: _.template(require('text!./user.template.html')),
        className: 'user',

        regions: {
            container: '.user__contianer',
        }
    });

    return new UserLayout();
});
