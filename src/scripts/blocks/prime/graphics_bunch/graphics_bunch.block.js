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
                graphicsControlBlock.on('state:change', this._onControlStateChange);
                graphicsControlBlock.on('refresh', this._onRefresh);

                sensorsTreeBlock.on('state:change', this._onTreeStateChange);

                graphicsBlock.on('zoom', function () {
                    graphicsControlBlock.setRefreshState(false);
                    graphicsControlBlock.showResetZoom();
                });
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
                this._requestData = {
                    startDate: d.startDate,
                    endDate: d.endDate
                };

                switch (d.type) {
                    case 'temperature':
                        this._graphicType = 'tsensors';
                        break;
                    case 'pressure':
                        this._graphicType = 'psensors';
                        break;
                }

                graphicsBlock.addMeta(this.meta);
                graphicsBlock.fetch({
                    type: this._graphicType,
                    requestData: this._requestData
                });
            },

            _onRefresh: function () {
                graphicsBlock.fetch({
                    type: this._graphicType,
                    requestData: this._requestData
                });
            }
        }
    );

    return GraphicsBunchBlock;
});
