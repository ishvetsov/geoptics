define(function (require) {
    'use strict';

    var Block = require('core/marionette.block'),

        AdminNavigationView = require('./admin_navigation.view'),
        AdminNavigationConfig = require('./admin_navigation.config');

    var AdminNavigationBlock = Block.extend({
        init: function () {
            var items = AdminNavigationConfig.items;

            this._view = new AdminNavigationView(items);

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

    return new AdminNavigationBlock();
});
