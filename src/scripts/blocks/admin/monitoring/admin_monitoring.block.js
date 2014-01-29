define(function (require) {
    'use strict';

    var Block = require('core/block.ui'),

        AdminMonitoringView = require('./admin_monitoring.view');

    var AdminMonitoringBlock = Block.create({
        view: AdminMonitoringView,

        fetch: function () {}
    });

    return AdminMonitoringBlock;
});