define(function (require) {
    'use strict';

    var Utils = require('core/utils'),
        PrimeLayout = require('./prime.layout');

    var Blocks = {
        Navigation: require('blocks/navigation/navigation.block'),
        Graphics: require('blocks/prime/graphics/prime_graphics.block'),
        Journal: require('blocks/prime/journal/prime_journal.block'),
        Boreholes: require('blocks/prime/boreholes/prime_boreholes.block')
    };

    var blocks = Utils.getInstances(Blocks),
        primeLayout = new PrimeLayout();

    primeLayout.on('show', function () {
        primeLayout.sidebar.show(blocks.boreholes.getViewInstance());
    });

    var initialize = function () {
        blocks.graphics.init();
        blocks.journal.init();
        blocks.boreholes.init();
    };

    var handlers = {
        journal: function () {
            blocks.navigation.activateItem('journal');
            primeLayout.container.show(blocks.journal.getViewInstance());
        },

        graphics: function () {
            blocks.navigation.activateItem('graphics');

            blocks.graphics.fetch([1, 2, 3])
                .then(function () {
                    primeLayout.container.show(blocks.graphics.getViewInstance());
                });
        }
    };

    return {
        init: initialize,
        handlers: handlers,
        layout: primeLayout
    };
});
