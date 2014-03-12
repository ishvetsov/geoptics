/* global _ */

define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        Cookie = require('jquery.cookie'),
        Block = require('core/block.base'),

        User = require('entities/user.entity');

    var COOKIE_NAME = 'auth';

    var SessionBlock = Block.create(
        {
            getAccessLevel: function () {
                var user = this.getCurrentUser();
                return user === null ? null : user.getAccessLevel();
            },

            getCurrentUser: function () {
                return this._currentUser;
            },

            isAuthorized: function () {
                return $.cookie(COOKIE_NAME) === 'true';
            },

            _currentUser: null
        },
        {
            in: function (user) {
                $.cookie(COOKIE_NAME, true, {expires: 7, path: '/'});
                this._currentUser = new User.Model(user);

                this.trigger('session:in');
            },

            out: function () {
                $.removeCookie(COOKIE_NAME, {path: '/'});
                this._currentUser = null;

                this.trigger('session:out');
            }
        }
    );

    return SessionBlock;
});
