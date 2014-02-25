define(function (require) {
    'use strict';

    var Block = require('core/block.ui'),
        GraphicsBlock = require('blocks/prime/graphics/prime_graphics.block'),

        Tabs = require('entities/tabs.entity'),
        TabsView = require('./prime_tabs.view');

    var graphicsBlock = GraphicsBlock.getInstance();

    var TabsBlock = Block.create({
        view: TabsView,
        model: Tabs.Model,

        onInit: function () {
            this._modelInstance.on('change', function (data) {
                graphicsBlock.trigger('type:state:change',data);
            });
        }
    });

    return TabsBlock;
});
