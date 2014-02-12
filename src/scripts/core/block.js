/* global _ */

define(function (require) {
    'use strict';

    var Emitter = require('./emitter');

    var Block = Emitter.extend({
        _instanceMap: {}
    });

    _.extend(Block.prototype, {
        init: function (options) {
            _.isFunction(this.onBeforeInit) && this.onBeforeInit(options);
            _.isFunction(this._createInstances) && this._createInstances();

            if (_.isArray(this._bindedMethodsNames)) {
                var bindArgs = this._bindedMethodsNames.slice(0);
                bindArgs.unshift(this);
                _.bindAll.apply(null, bindArgs);
            }

            _.extend(
                this._instanceMap,
                this._getDefaultInstanceMap(),
                this.instanceMap);

            this._delegateTriggers();
            this._delegateEvents();
            this._delegateFunctions();

            _.isFunction(this.onInit) && this.onInit(options);

            return this;
        },

        _getDefaultInstanceMap: function () {},

        _delegateTriggers: function () {
            _.each(this.triggers, function (val, key) {
                var eventInfo = this._getDelegateInfo(key);

                eventInfo.target.on(eventInfo.name, function (data) {
                    this.trigger(val, data);
                }, this);
            }, this);
        },

        _delegateEvents: function () {
            _.each(this.events, function (val, key) {
                var eventInfo = this._getDelegateInfo(key);

                eventInfo.target.on(eventInfo.name, this[val]);
            }, this);
        },

        _delegateFunctions: function () {
            _.each(this.functions, function (val, key) {
                var functionInfo = this._getDelegateInfo(key);

                this[val] = _.bind(
                    functionInfo.target[functionInfo.name],
                    functionInfo.target);
            }, this);
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

    return Block;
});
