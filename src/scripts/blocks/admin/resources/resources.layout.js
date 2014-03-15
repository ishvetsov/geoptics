/* global _ */
define(function (require) {
    'use strict';
    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),

        Template = require('text!./resources.template.html');

    var ResourcesLayout = Marionette.Layout.extend({
        template: _.template(Template),

        className: 'inner-container',

        regions: {
            fieldsRegion: '.resources_fields',
            noAttachedRegion: '.resources_no-attached'
        }
    });

    return ResourcesLayout;
});
