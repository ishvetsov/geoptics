define(function (require) {
    'use strict';

    var Block = require('core/block.ui'),
        SessionBlock = require('blocks/session/session.block'),

        View = require('./navigation.view'),
        Config = require('./navigation.config');

    var sessionBlock = SessionBlock.getInstance();

    var NavigationBlock = Block.create({
        view: View,

        functions: {
            'view:setActiveItem': 'activateItem'
        },

        onBeforeInit: function () {
            var userType = sessionBlock.getAccessLevel();
            this.viewOptions = {
                config: Config[userType]
            };
        },

        onInit: function () {
            this._view.on('signout:click', sessionBlock.out);
        }
    });

    return NavigationBlock;
});
