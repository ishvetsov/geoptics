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

            var _this = this;

            _this._viewInstance.on('show', _this._onShow);

            graphicsControlBlock.on('export:click', graphicsBlock.export);

            graphicsControlBlock.on('state:change', function (d) {
                switch (d.type) {
                    case 'temperature':
                        _this._graphicType = 'tsensors';
                        break;
                    case 'pressure':
                        _this._graphicType = 'psensors';
                        break;
                }

                graphicsBlock.fetch({type: this._graphicType});
            });

            sensorsTreeBlock.on('state:change', function (d) {
                graphicsBlock.addMeta(d);
                graphicsBlock.fetch({type: _this._graphicType});
            });
        },

        _onShow: function () {
            this.control.show(graphicsControlBlock.getViewInstance());
            this.graphic.show(graphicsBlock.getViewInstance());
        }
    });

    return GraphicsBunchBlock;
});
