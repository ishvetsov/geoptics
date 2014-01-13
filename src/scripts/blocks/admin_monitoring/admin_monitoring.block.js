define(function (require) {
    'use strict';

    var Block = require('core/block'),

        AdminMonitoringView = require('./admin_monitoring.view');

    var AdminMonitoringBlock = Block.create({
        settings: {
            isSingleton: true
        },

        view: AdminMonitoringView,

        fetch: function () {

        }
    });

    return AdminMonitoringBlock;
});