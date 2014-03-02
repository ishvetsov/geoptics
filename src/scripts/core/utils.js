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
        },

        getOption: function(target, optionName) {
            if (!target || !optionName) { return; }

            var options = target.options;

            var hasOption = options && (optionName in options) &&
                    (typeof options[optionName] !== 'undefined');

            return (hasOption ? options : target)[optionName];
        },

        strings: strings,

        fetchChild: function (name) {
            return function () {
                var child = this.get(name);
                if (!child.isLoaded) {
                    child.fetch().then(function () {
                        child.isLoaded = true;
                    });
                }
            };
        }
    };
});
