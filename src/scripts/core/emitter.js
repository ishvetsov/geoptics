/* global _ */

define(function (require) {
    'use strict';

    var Backbone = require('backbone');

    var Emitter = function (options) {
        this.options = options || {};

        _.isFunction(this.initialize) && this.initialize(options);
    };

    Emitter.extend = Backbone.Model.extend;

    _.extend(Emitter.prototype, Backbone.Events, {
        dispose: function () {
            this.stopListening();
            this.unbind();
        }
    });

    return Emitter;
});
