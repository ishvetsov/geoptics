define(function (require) {
    'use strict';
    var Block = require('core/block.ui'),

        View = require('./monitoring.view');

    var MonitoringBlock = Block.create({
        view: View
    });

    return MonitoringBlock;
});
