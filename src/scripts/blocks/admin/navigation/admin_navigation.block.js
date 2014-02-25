define(function (require) {
    'use strict';

    var Block = require('core/block.ui'),

        View = require('./admin_navigation.view'),
        Config = require('./admin_navigation.config');

    var NavigationBlock = Block.create({
        view: View,

        viewOptions: {
            config: Config.items
        },

        functions: {
            'view:setActiveItem': 'activateItem',
            'view:disactiveAllItems': 'disactivateAll'
        }
    });

    return NavigationBlock;
});
