define(function (require) {
    'use strict';

    var NavigationBlock = require('blocks/navigation/navigation.block'),
        GraphicsBlock = require('blocks/prime/graphics/prime_graphics.block'),

        PrimeLayout = require('./prime.layout');

    var navigationBlock = NavigationBlock.getInstance(),
        graphicsBlock = GraphicsBlock.getInstance(),
        primeLayout = new PrimeLayout();

    var initialize = function () {
        graphicsBlock.init();
    };

    var handlers = {
        journal: function () {
            navigationBlock.activateItem('journal');
        },

        graphics: function () {
            navigationBlock.activateItem('graphics');
            primeLayout.container.show(graphicsBlock.getViewInstance());
        }
    };

    return {
        init: initialize,
        handlers: handlers,
        layout: primeLayout
    };
});
