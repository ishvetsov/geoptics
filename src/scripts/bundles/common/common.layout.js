/* global _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),

        CommonTemplate = require('text!./common.template.html');

    var CommonLayout = Marionette.Layout.extend({
        template: _.template(CommonTemplate),
        className: 'common',

        regions: {
            header: '.common_header',
            body: '.common_body'
        }
    });

    return CommonLayout;
});
