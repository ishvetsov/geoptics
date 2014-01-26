/* global _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),

        AdminResourcesTemplate = require('text!./admin_resources.template.html');

    var AdminResourcesLayout = Marionette.Layout.extend({
        template: _.template(AdminResourcesTemplate),

        regions: {
            depositsRegion: '#deposits-region',
            noAttachedWellsRegion: '#no-attached-wells-region'
        }
    });

    return AdminResourcesLayout;
});
