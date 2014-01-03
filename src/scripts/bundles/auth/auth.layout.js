/* global _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette');

    var AuthLayout = Marionette.Layout.extend({
        template: _.template(require('text!./auth.template.html')),
        className: 'auth',

        regions: {
            container: '.auth__container'
        }
    });

    return new AuthLayout();
});
