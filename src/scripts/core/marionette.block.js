define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette');

    Marionette.Block = Marionette.Controller.extend({
        _view: null,
        
        getInstance: function () {
            return this;
        },

        getInstanceView: function () {
            return this._view;
        }
    });

    return Marionette.Block;
});