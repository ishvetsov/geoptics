define(function (require) {
    'use strict';

    var Block = require('core/block.ui'),

        GraphicsView = require('./prime_graphics.view');

    var GraphicsBlock = Block.create({
        view: GraphicsView
    });

    return GraphicsBlock;
});
