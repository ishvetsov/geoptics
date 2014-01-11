/* global _, Backbone */

define(function (require) {
    'use strict';

    var Block = require('core/marionette.block'),
        SessionBlock = require('blocks/session/session.block'),

        LoginView = require('./login.view');

    var LoginBlock = Block.extend({
        init: function () {
            this._view = new LoginView();
            this._view.on('login:try', SessionBlock.authorization);
            return this;
        }
    });

    return new LoginBlock();
});
