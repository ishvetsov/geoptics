define(function (require) {
    'use strict';

    var
        Backbone = require('backbone'),
        Marionette = require('backbone.marionette');


    return {
        events: new Backbone.Wreqr.EventAggregator(),
        commands: new Backbone.Wreqr.Commands()
    };
});