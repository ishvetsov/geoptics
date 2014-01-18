/* global _ */

define(function (require) {
    'use strict';

    var Block = require('core/block'),
        SessionBlock = require('blocks/session/session.block'),

        NavigationView = require('./navigation.view'),
        NavigationConfig = require('./navigation.config');

    var sessionBlock = SessionBlock.getInstance();

    var NavigationBlock = Block.create({
        view: NavigationView,

        functions: {
            'view:setActiveItem': 'activateItem'
        },

        onBeforeInit: function () {
            var userType = sessionBlock.getAccessLevel();

            this.viewOptions = {
                config: NavigationConfig[userType]
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
