/* global _ */

define(function (require) {
    'use strict';

    var MarionetteBlock = require('core/marionette.block'),
        SessionBlock = require('blocks/session/session.block'),

        NavigationView = require('./navigation.view'),
        NavigationConfig = require('./navigation.config');
        
    var NavigationBlock = Marionette.Block.extend({
        init: function () {
            var userType = SessionBlock.getAccessLevel(),
                items = NavigationConfig[userType].items;

            this._navigationView = new NavigationView(items);
            this._navigationView.on('user:click', function () {
                SessionBlock.trigger('session:out');
            });
        },
        
        getInstance: function () {
            return this;
        },

        getInstanceView: function () {
            // Только для этапа разработки
            if (this._navigationView === null) {
                throw {message: 'NavigationView is not created'};
            }
            return this._navigationView;
        },

        activateItem: function (name) {
            this._navigationView.setActiveItem(name);
        },

        _navigationView: null
    });

    return new NavigationBlock();
});
