/* global _ */

define(function (require) {
    'use strict';

    var
        Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),
        RivetsAdapter = require('rivets.adapter');

    var LoginView = Marionette.ItemView.extend({
        template: _.template(require('text!./login.template.html')),

        events: {
            'click .auth-form__signin': '_onSignInClicked'
        },

        onRender: function () {
            this.binding = Rivets.bind(this.el, {
                authData: this._authData
            });
        },

        _onSignInClicked: function () {
            this.trigger('login:try', this._authData);
        },

        _authData: new Backbone.Model({
            defaults: {
                login: '',
                password: ''
            }
        })
    });

    return LoginView;
});
