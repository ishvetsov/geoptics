define(function (require) {
    'use strict';

    require('./underscore.config')();
    require('./backbone.config')();
    require('./rivets.config')();

    var rest = require('./rest.config');

    return {
        rest: rest['local']
    };
});
