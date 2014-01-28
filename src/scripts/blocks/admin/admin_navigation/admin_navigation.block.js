define(function (require) {
    'use strict';

    var Block = require('core/block'),

        View = require('./admin_navigation.view'),
        Config = require('./admin_navigation.config');

    var AdminNavigationBlock = Block.create({
        view: View,
        
        viewOptions: Config.items,

        functions: {
            'view:setActiveItem': 'activateItem',
            'view:disactiveAllItems': 'disactivateAll'
        }
    });

    return AdminNavigationBlock;
});
