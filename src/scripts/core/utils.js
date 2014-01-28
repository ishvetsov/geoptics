/* global _ */

define(function (require) {
    'use strict';

    var strings = require('./utils.strings');

    return {
        getInstances: function (deps) {
            var instances = {};

            _.each(deps, function (val, key) {
                instances[strings.uncapitalize(key)] = _.isFunction(val.getInstance)
                    ? val.getInstance()
                    : this.getInstances(val);
            }, this);

            return instances;
        }
    };
});
