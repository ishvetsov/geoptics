/* global _ */
define(function (require) {
    'use strict';
    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),

        Template = require('text!./resources.template.html');

    var ResourcesLayout = Marionette.Layout.extend({
        template: _.template(Template),

        regions: {
            fieldsRegion: '#fields-region',
            noAttachedRegion: '#no-attached-boreholes-region'
        }
    });

    return ResourcesLayout;
});
