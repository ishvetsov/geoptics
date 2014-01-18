/* global _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),

        AdminWellsTemplate = require('text!./admin_wells.template.html');

    var AdminWellsLayout = Marionette.Layout.extend({
        template: _.template(AdminWellsTemplate),

        regions: {
            depositsRegion: '#deposits-region',
            noAttachedWellsRegion: '#no-attached-wells-region'
        }
    });

    return AdminWellsLayout;
});