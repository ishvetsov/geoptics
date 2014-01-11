/* global _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette');

    var AdminLayout = Marionette.Layout.extend({
        template: _.template(require('text!./admin.template.html')),
        className: 'admin',

        regions: {
            container: '.admin__contianer',
        }
    });

    return AdminLayout;
});
