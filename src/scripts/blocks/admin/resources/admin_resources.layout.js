/* global _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),

        Template = require('text!./admin_resources.template.html');

    var AdminResourcesLayout = Marionette.Layout.extend({
        template: _.template(Template),

        regions: {
            fieldsRegion: '#fields-region',
            noAttachedBoreholesRegion: '#no-attached-boreholes-region'
        }
    });

    return AdminResourcesLayout;
});
