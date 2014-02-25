define(function (require) {
    'use strict';

    var Utils = require('core/utils'),
        PrimeLayout = require('./prime.layout');

    var Blocks = {
        Navigation: require('blocks/navigation/navigation.block'),
        // Tabs: require('blocks/prime/tabs/prime_tabs.block'),
        Graphics: require('blocks/prime/graphics/prime_graphics.block'),
        Journal: require('blocks/prime/journal/prime_journal.block'),
        SensorsTree: require('blocks/prime/sensors_tree/prime_sensors_tree.block')
    };

    var blocks = Utils.getInstances(Blocks),
        primeLayout = new PrimeLayout();

    primeLayout.on('show', function () {
        blocks.sensorsTree.fetch()
            .then(function () {
                primeLayout.sidebar.show(blocks.sensorsTree.getViewInstance());
            });
    });

    var initialize = function () {
        blocks.graphics.init();
        blocks.journal.init();
        blocks.sensorsTree.init();
        // blocks.tabs.init();
    };

    var handlers = {
        journal: function () {
            blocks.navigation.activateItem('journal');
            primeLayout.container.show(blocks.journal.getViewInstance());
            // primeLayout.tabs.close();
        },

        graphics: function () {
            blocks.navigation.activateItem('graphics');

            primeLayout.container.show(blocks.graphics.getViewInstance());
            // primeLayout.control.show(blocks.tabs.getViewInstance());
        }
    };

    return {
        init: initialize,
        handlers: handlers,
        layout: primeLayout
    };
});
