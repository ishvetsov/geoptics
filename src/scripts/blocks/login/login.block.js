/* global _ */

define(function (require) {
    'use strict';

    var Block = require('core/block.ui'),
        SessionBlock = require('blocks/session/session.block'),

        LoginView = require('./login.view'),
        Login = require('./login.entity');

    var sessionBlock = SessionBlock.getInstance();

    var LoginBlock = Block.create({
        view: LoginView,
        model: Login.Model,

        onInit: function () {
            this._viewInstance.on('login:try', sessionBlock.authorization);
        }
    });

    return LoginBlock;
});
