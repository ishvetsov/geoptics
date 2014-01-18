/* global _ */

define(function (require) {
    'use strict';

    return {
        getInstances: function (deps) {
            var instances = {};

            _.each(deps, function (val, key) {
                instances[_.uncapitalize(key)] = _.isFunction(val.getInstance)
                    ? val.getInstance()
                    : this.getInstances(val);
            }, this);

            return instances;
        }
    };
});
