/* global _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette');

    var CommonLayout = Marionette.Layout.extend({
        template: _.template(require('text!./common.template.html')),
        className: 'common',

        regions: {
            header: '.common__header'
        }
    });

    return new CommonLayout();
});
