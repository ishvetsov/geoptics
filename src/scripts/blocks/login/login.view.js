/* global _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),

        LoginTemplate = require('text!./login.template.html');

    var LoginView = Marionette.ItemView.extend({
        template: _.template(LoginTemplate),

        ui: {
            signIn: '.login__signin'
        },

        initialize: function () {
            _.bindAll(this, '_onSignInClicked');
        },

        onRender: function () {
            this.ui.signIn.on('click', this._onSignInClicked);
            this.binding = Rivets.bind(this.el, this.model);
        },

        _onSignInClicked: function () {
            this.trigger('login:try', this.model.toJSON());
        }
    });

    return LoginView;
});
