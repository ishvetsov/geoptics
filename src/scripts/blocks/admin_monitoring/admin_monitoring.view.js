/* global _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),

        AdminMonitoringTemplate = require('text!./admin_monitoring.template.html');

    var AdminMonitoringView = Marionette.CompositeView.extend({
        template: _.template(AdminMonitoringTemplate)
    });

    return AdminMonitoringView;
});