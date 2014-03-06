define(function (require) {
    'use strict';

    var Block = require('core/block.ui'),

        GraphicsControl = require('./graphics_control.entity'),
        GraphicsControlConfig = require('./graphics_control.config'),
        GraphicsControlView = require('./graphics_control.view');

    var GraphicsControlBlock = Block.create({
        view: GraphicsControlView,
        model: GraphicsControl.Model,

        viewOptions: {
            config: GraphicsControlConfig
        },

        triggers: {
            'view:state:change': 'state:change',
            'view:export:click': 'export:click',
        }
    });

    return GraphicsControlBlock;
});
