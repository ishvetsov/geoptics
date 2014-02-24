/* global _ */

define(function (require) {
    'use strict';

    var Emitter = require('./emitter'),
        Factory = require('./factory');

    var Bundle = Emitter.extend({
        initialize: function () {
            _.bindAll(this, 'init');
        }
    });

    _.extend(Bundle.prototype, {
        init: function () {
            this._settings = _.extend({
                navigate: false
            }, this.settings);

            this._createInstances();

            _.isFunction(this.behavior.init) && this.behavior.init();

            this._routerInstance.on(
                'before:route',
                _.bind(this._onBeforeRoute, this));

            this._layoutInstance.on(
                'close',
                _.bind(this._onLayoutClosed, this));

            _.isFunction(this.render) && this.render(this._layoutInstance);

            if (this._settings.navigate) {
                var currentHash = window.location.hash;
                this._routerInstance
                    .navigate('/')
                    .navigate(currentHash, {trigger: true});
            }
        },

        _onBeforeRoute: function () {
            if (!this.isActive) {
                this.isActive = true;
                this.trigger('state:active', this._layoutInstance);
            }
        },

        _onLayoutClosed: function () {
            this.isActive = false;
        },

        _createInstances: function () {
            this._routerInstance = new this.router({
                controller: this.behavior.handlers
            });

            this._layoutInstance = this.behavior.layout;
        }
    });

    return Factory.decl(Bundle);
});
