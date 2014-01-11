/* global _, Backbone */

define(function (require) {
    'use strict';

    var Block = require('core/marionette.block'),
        SessionBlock = require('blocks/session/session.block'),

        LoginView = require('./login.view');

    var LoginBlock = Block.extend({
        init: function () {
            this._loginView = new LoginView();
            this._loginView.on('login:try', SessionBlock.authorization);
            return this;
        },
        
        getInstance: function () {
            return this;
        },

        getInstanceView: function () {
            // Только для этапа разработки
            if (this._loginView === null) {
                throw 'LoginView is not created';
            }
            return this._loginView;
        },

        _loginView: null
    });

    return new LoginBlock();
});