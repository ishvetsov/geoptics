define(function (require) {
    'use strict';

    require('./underscore.config')();
    require('./backbone.config')();
    require('rivets.adapter');

    var rest = require('./rest.config');

    return {
        rest: rest['local']
    };
});
