/* global _ */

define(function (require) {
    'use strict';

    var Block = require('core/block'),
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
            this._viewInstance.on('user:click', function () {
                sessionBlock.trigger('session:out');
            });
        }
    });

    return NavigationBlock;
});
