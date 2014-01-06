/* global _ */

define(function (require) {
    'use strict';

    var Cookie = require('jquery.cookie'),
        Marionette = require('backbone.marionette'),

        User = require('entities/user.model');

    var SessionController = Marionette.Controller.extend({
        initialize: function () {
            _.bindAll(this, '_onSessionOut', 'authorization');
            this.on('session:out', this._onSessionOut);
        },

        authorization: function (authData) {
            $.cookie('isAuth', true);
            this._createUser(authData.isAdmin ? 2 : 1);
            this.trigger('session:in');
        },

        getAccessLevel: function () {
            var user = this.getCurrentUser();
            return user === null ? 0 : user.get('accessLevel') || 0;
        },

        getCurrentUser: function () {
            if (this.isAuthorized()) {
                return this._currentUser || this._createUser();
            }
            return null;
        },

        isAuthorized: function () {
            return $.cookie('isAuth');
        },

        _onSessionOut: function () {
            this._currentUser = null;
            $.removeCookie('isAuth');
        },

        _currentUser: null,
        
        // TODO: Dummy
        _createUser: function (accessLevel) {
            this._currentUser = new User.Model({
                firstName: 'Иван',
                lastName: 'Иванов',
                accessLevel: accessLevel || 2
            });

            return this._currentUser;
        }
    });

    return new SessionController();
});
