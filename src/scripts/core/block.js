/* global _ */

define(function (require) {
    'use strict';

    var Emitter = require('./emitter');

    var Block = Emitter.extend({
        _instanceMap: {},

        init: function () {
            _.isFunction(this.onBeforeInit) && this.onBeforeInit();
            _.isFunction(this._createInstances) && this._createInstances();

            _.extend(
                this._instanceMap,
                this._getDefaultInstanceMap(),
                this.instanceMap);

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

        _getDefaultInstanceMap: function () {},

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
