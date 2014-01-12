/* global _ */

define(function (require) {
    'use strict';

    var Block = require('core/marionette.block'),
        SessionBlock = require('blocks/session/session.block'),

        NavigationView = require('./navigation.view'),
        NavigationConfig = require('./navigation.config');
        
    var NavigationBlock = Block.extend({
        init: function () {
            var userType = SessionBlock.getAccessLevel(),
                items = NavigationConfig[userType].items;

            this._view = new NavigationView(items);
            this._view.on('user:click', function () {
                SessionBlock.trigger('session:out');
            });

            return this;
        },

        getInstance: function () {
            return this;
        },

        getInstanceView: function () {
            return this._view;
        },

        activateItem: function (name) {
            this._view.setActiveItem(name);
        },

        _view: null
    });

    return new NavigationBlock();
});
