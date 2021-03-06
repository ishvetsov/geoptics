/* global _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),

        AdminTemplate = require('text!./admin.template.html');

    var AdminLayout = Marionette.Layout.extend({
        template: _.template(AdminTemplate),
        className: 'admin',

        regions: {
            navigation: '#admin-navigation',
            container: '#admin-container'
        }
    });

    return AdminLayout;
});
