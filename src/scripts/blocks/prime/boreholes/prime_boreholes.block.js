define(function (require) {
    'use strict';

    var Block = require('core/block.ui'),

        BoreholesView = require('./prime_boreholes.view');

    var BoreholesBlock = Block.create({
        view: BoreholesView
    });

    return BoreholesBlock;
});
