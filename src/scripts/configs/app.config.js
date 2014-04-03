define(function (require) {
    'use strict';
    require('./underscore.config')();
    require('./backbone.config')();
    require('./rivets.config')();

    var rest = require('./rest.config');

    var moment = require('moment');
    var momentru = require('momentru');
    moment.lang('ru');

    return {
        rest: rest
    };
});
