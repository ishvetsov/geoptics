/* global _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),

        AdminWellsTemplate = require('text!./admin_wells.template.html');

    var AdminWellsView = Marionette.CompositeView.extend({
        template: _.template(AdminWellsTemplate)
    });

    return AdminWellsView;
});