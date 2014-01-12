/* global _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),

        UserTemplate = require('text!./user.template.html');

    var UserLayout = Marionette.Layout.extend({
        template: _.template(UserTemplate),
        className: 'user',

        regions: {
            container: '.user__contianer',
        }
    });

    return UserLayout;
});
