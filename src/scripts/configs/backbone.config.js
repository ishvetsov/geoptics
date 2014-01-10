/* global _ */

define(function (require) {
    'use strict';

    var Backbone = require('backbone');

    var baseRoute = Backbone.Router.prototype.route;

    return function () {
        Backbone.Router.prototype.route = function (route, name, callback) {
            _.isFunction(name) && (callback = name);
            callback || (callback = this[name]);

            var wrappedRoute = _.bind(function () {
                this.trigger('before:route');
                callback.apply(this, arguments);
            }, this);

            return baseRoute.call(this, route, name, wrappedRoute);
        };

        return Backbone;
    };
});
