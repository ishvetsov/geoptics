define(function (require) {
    'use strict';

    var Backbone = require('backbone');

    /** Example: '/api' */
    var PREFIX = '';

    var rest = {
        boreholes:      '/boreholes',
        clusters:       '/clusters',
        fields:         '/fields',
        users:          '/users',
        usergroups:     '/usergroups',
        data:           '/data',
        login:          '/login',
        logout:         '/logout',
        tsensors:       '/tsensors',
        psensors:       '/psensors',
        sensorssets:    '/sensorssets',
        perforations:   '/perforations',
        depths:         '/depths',
        moments:        '/moments',

        get: function (name) {
            var url = this[name];
            return url ? PREFIX + url : null;
        }
    };

    Backbone._sync = Backbone.sync;

    Backbone.sync = function (method, model, options) {
        options = options || {};

        if (typeof options['url'] !== 'undefined') {
            options.url = PREFIX + _.result(options, 'url');
        } else if (typeof model['url'] !== 'undefined') {
            options.url = PREFIX + _.result(model, 'url');
        }

        return Backbone._sync.call(model, method, model, options);
    };

    return rest;
});
