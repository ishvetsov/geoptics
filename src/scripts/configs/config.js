define(function (require) {
    'use strict';

    require('./underscore.config')();
    require('./backbone.config')();
    require('rivets.adapter');

    return {};
});
