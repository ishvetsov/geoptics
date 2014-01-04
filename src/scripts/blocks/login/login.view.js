/* global _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),
        RivetsAdapter = require('rivets.adapter');

    var LoginView = Marionette.ItemView.extend({
        template: _.template(require('text!./login.template.html')),

        ui: {
            signIn: '.auth-form__signin'
        },

        _authData: {
            login: '',
            password: ''
        },

        initialize: function () {
            _.bindAll(this, '_onSignInClicked');
        },

        onRender: function () {
            this.ui.signIn.on('click', this._onSignInClicked);
            this.binding = Rivets.bind(this.el, {
                authData: this._authData
            });
        },

        _onSignInClicked: function () {
            this.trigger('login:try', this._authData);
        }
    });

    return LoginView;
});
