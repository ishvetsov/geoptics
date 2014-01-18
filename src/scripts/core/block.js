/* global _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette');

    var MarionetteBlock = Marionette.Controller.extend({
        init: function () {
            _.isFunction(this.onBeforeInit) && this.onBeforeInit();

            this._viewInstance = this.createViewInstance();

            this._instanceMap = {
                view: this._viewInstance
            };

            _.each(this.triggers, function (val, key) {
                var eventInfo = this._getDelegateInfo(key);

                eventInfo.target.on(eventInfo.name, function (data) {
                    this.trigger(val, data);
                }, this);
            }, this);

            _.each(this.functions, function (val, key) {
                var functionInfo = this._getDelegateInfo(key);

                this[val] = _.bind(
                    functionInfo.target[functionInfo.name],
                    functionInfo.target);
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

        _getDelegateInfo: function (fullName) {
            var targetName = fullName.split(':')[0],
                name = fullName.match(/:.*(?=$)/);

            return {
                target: this._instanceMap[targetName],
                name: name ? name[0].substr(1) : ''
            };
        }
    });

    var Block = {
        create: function (arg) {
            var settings = _.extend({
                isSingleton: true,
            }, arg.settings);

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
