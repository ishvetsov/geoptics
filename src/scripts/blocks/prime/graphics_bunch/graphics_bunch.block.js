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

    var GraphicsBunchBlock = Block.create(
        {
            view: GraphicsBunchLayout,

            onInit: function () {
                graphicsBlock.init();
                graphicsControlBlock.init();

                this._viewInstance.on('show', this._onShow);

                graphicsControlBlock.on('export:click', graphicsBlock.export);
                graphicsControlBlock.on('refresh:click', this._onRefresh);
                graphicsControlBlock.on('state:change', this._onControlStateChange);

                sensorsTreeBlock.on('state:change', this._onTreeStateChange);
            },

            _onShow: function () {
                this.control.show(graphicsControlBlock.getViewInstance());
                this.graphic.show(graphicsBlock.getViewInstance());
            }
        },
        {
            _onTreeStateChange: function (d) {
                this.meta = d;

                graphicsBlock.addMeta(this.meta);
                graphicsBlock.fetch({type: this._graphicType});
            },

            _onControlStateChange: function (d) {
                switch (d.type) {
                    case 'temperature':
                        this._graphicType = 'tsensors';
                        break;
                    case 'pressure':
                        this._graphicType = 'psensors';
                        break;
                }

                graphicsBlock.addMeta(this.meta);
                graphicsBlock.fetch({type: this._graphicType});
            },

            _onRefresh: function () {
                graphicsBlock.fetch({type: this._graphicType});
            }
        }
    );

    return GraphicsBunchBlock;
});
