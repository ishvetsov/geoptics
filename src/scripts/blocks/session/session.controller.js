define(function (require) {
    'use strict';

    var
        Marionette = require('backbone.marionette'),

        User = require('entities/user.model');

    var SessionController = Marionette.Controller.extend({
        authorization: function (authData) {
            // Здесь запрос на сервер, если все нормально получить
            // id сессии, юзер данные
            $.cookie('isAuth', true);
        },

        getCurrentUser: function () {
            if (this.isAuthorized()) {
                if (this._currentUser === null) {
                    // TODO: Dummy
                    this._currentUser = new User.Model({
                        firstName: 'Иван',
                        lastName: 'Иванов',
                        type: 'admin'
                    });
                }
                return this._currentUser;
            }
            return null;
        },

        isAuthorized: function () {
            return $.cookie('isAuth') === 'true' ? true : false;
        },

        logout: function () {
            this._currentUser = null;
            $.removeCookie('isAuth');
        },

        _currentUser: null
    });

    return new SessionController();
});