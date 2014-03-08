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

        triggers: {
            'click .login__signin': 'signin:click'
        },

        onRender: function () {
            this.binding = Rivets.bind(this.el, this.model);
            this.delegateEvents();
        }
    });

    return LoginView;
});
