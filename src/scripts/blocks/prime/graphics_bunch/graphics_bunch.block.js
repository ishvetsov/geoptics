define(function (require) {
    'use strict';

    var Block = require('core/block.ui'),

        GraphicsBlock = require('blocks/prime/graphics/graphics.block'),
        GraphicsControlBlock = require('blocks/prime/graphics_control/graphics_control.block'),
        SensorsTreeBlock = require('blocks/prime/sensors_tree/sensors_tree.block'),

        GraphicsBunchLayout = require('./graphics_bunch.layout');

    var graphicsBlock = GraphicsBlock.getInstance(),
        graphicsControlBlock = GraphicsControlBlock.getInstance(),
        sensorsTreeBlock = SensorsTreeBlock.getInstance();

    var GraphicsBunchBlock = Block.create({
        view: GraphicsBunchLayout,

        onInit: function () {
            graphicsBlock.init();
            graphicsControlBlock.init();

            this._viewInstance.on('show', this._onShow);

            graphicsControlBlock.on('state:change', function (d) {
                console.log('graphics-control > ', d);
            });

            sensorsTreeBlock.on('state:change', function (d) {
                console.log('sensors-tree > ', d);
            });
        },

        _onShow: function () {
            this.control.show(graphicsControlBlock.getViewInstance());
            this.graphic.show(graphicsBlock.getViewInstance());
        }
    });

    return GraphicsBunchBlock;
});
