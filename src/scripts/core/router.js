define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        Utils = require('core/utils');

    var Router = Backbone.Router.extend({
        constructor: function (options) {
            Backbone.Router.prototype.constructor.apply(this, arguments);

            this.options = options;

            if (this.appRoutes) {
                var controller = Utils.getOption(this, 'controller');
                this.processAppRoutes(this.options.controller, this.appRoutes);
            }
        }
    });

    _.extend(Router.prototype, {
        route: function (route, name, callback) {
            _.isFunction(name) && (callback = name);
            callback || (callback = this[name]);

            var wrappedRoute = _.bind(function () {
                this.trigger('before:route');
                callback.apply(this, arguments);
            }, this);

            return Backbone.Router.prototype.route
                .call(this, route, name, wrappedRoute);
        },

        processAppRoutes: function (controller, appRoutes) {
            var routeNames = _.keys(appRoutes).reverse();

            _.each(routeNames, function (route) {
                var methodName = appRoutes[route];
                var method = controller[methodName];

                if (!method) {
                    throw new Error('Method "' + methodName + '" was not found on the controller');
                }

                this.route(route, methodName, _.bind(method, controller));
            }, this);
        }
    });

    return Router;
});
