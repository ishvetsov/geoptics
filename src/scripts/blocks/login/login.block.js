/* global _ */

define(function (require) {
    'use strict';

    var Block = require('core/block'),
        SessionBlock = require('blocks/session/session.block'),

        LoginView = require('./login.view');

    var sessionBlock = SessionBlock.getInstance();

    var LoginBlock = Block.create({
        view: LoginView,

        onInit: function () {
            this._viewInstance.on('login:try', sessionBlock.authorization);
        }
    });

    return LoginBlock;
});
