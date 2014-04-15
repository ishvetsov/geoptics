define(function (require) {
    'use strict';

    var Utils = require('core/utils'),
        PrimeLayout = require('./prime.layout');

    var Blocks = {
        Navigation: require('blocks/navigation/navigation.block'),
        GraphicsBunch: require('blocks/prime/graphics_bunch/graphics_bunch.block'),
        Journal: require('blocks/prime/journal/journal.block'),
        SensorsTree: require('blocks/prime/sensors_tree/sensors_tree.block')
    };

    var blocks = Utils.getInstances(Blocks),
        primeLayout = new PrimeLayout();

    primeLayout.on('show', function () {
        blocks.sensorsTree.render(primeLayout.sidebar);
    });

    var initialize = function () {
        blocks.journal.init();
        blocks.sensorsTree.init();
        blocks.graphicsBunch.init();
    };

    var handlers = {
        journal: function () {
            blocks.navigation.activateItem('journal');
            blocks.journal.render(primeLayout.container);
        },

        graphics: function () {
            blocks.navigation.activateItem('graphics');
            blocks.graphicsBunch.render(primeLayout.container);
        }
    };

    return {
        init: initialize,
        handlers: handlers,
        layout: primeLayout
    };
});
