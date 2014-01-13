/* global _ */

/**
 * Тестовая версия
 */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette');

    var MarionetteBlock = Marionette.Controller.extend({
        init: function () {
            this._viewInstance = this.createViewInstance();

            this._instanceMap = {
                view: this._viewInstance
            };

            _.each(this.triggers, function(val, key) {
                var eventInfo = this._getEventInfo(key);

                eventInfo.target.on(eventInfo.eventName, function (data) {
                    this.trigger(val, data);
                }, this);
            }, this);

            _.isFunction(this.onInit) && this.onInit();

            return this;
        },

        createViewInstance: function () {
            return _.isFunction(this.view)
                ? new this.view(this.viewOptions)
                : null;
        },

        getViewInstance: function () {
            return this._viewInstance;
        },

        _getEventInfo: function (eventFullName) {
            var targetName = eventFullName.split(':')[0],
                eventName = eventFullName.match(/:.*(?=$)/);

            return {
                target: this._instanceMap[targetName],
                eventName: eventName ? eventName[0].substr(1) : ''
            };
        }
    });

    var Block = {
        create: function (arg) {
            var settings = arg && arg.settings ? arg.settings : {};
            return {
                _constructor: MarionetteBlock.extend(arg),
                getInstance: function () {
                    return settings.isSingleton
                        && typeof this._instance !== 'undefined'
                            ? this._instance
                            : this._instance = new this._constructor();
                }
            };
        }
    };

    return Block;
});
