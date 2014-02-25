/* global _ */
define(function (require) {
    'use strict';
    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),

        Template = require('text!./monitoring.template.html');

    var MonitoringView = Marionette.CompositeView.extend({
        template: _.template(Template)
    });

    return MonitoringView;
});