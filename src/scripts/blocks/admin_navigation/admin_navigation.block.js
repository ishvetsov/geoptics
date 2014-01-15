define(function (require) {
    'use strict';

    var Block = require('core/block'),

        AdminNavigationView = require('./admin_navigation.view'),
        AdminNavigationConfig = require('./admin_navigation.config');

    var AdminNavigationBlock = Block.create({
        view: AdminNavigationView,
        viewOptions: AdminNavigationConfig.items,

        functions: {
            'view:setActiveItem': 'activateItem',
            'view:disactiveAllItems': 'disactivateAll'
        }
    });

    return AdminNavigationBlock;
});
