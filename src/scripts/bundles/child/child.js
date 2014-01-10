/* global Backbone, _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette');

    var Child = Backbone.Wreqr.EventAggregator.extend({
        init: function () {
            var router = new this.router({
                controller: this.controller.handlers
            });

            _.isFunction(this.controller.init) && this.controller.init();

            router.on('before:route', _.bind(this._onBeforeRoute, this));
            this.layout.on('close', _.bind(this._onLayoutClosed, this));
        },

        _onBeforeRoute: function () {
            if (!this.isActive) {
                this.isActive = true;
                this.trigger('state:active', this.layout);
            }
        },

        _onLayoutClosed: function () {
            this.isActive = false;
        }
    });

    return Child;
});
