/* global _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),

        LoginTemplate = require('text!./login.template.html');

    var LoginView = Marionette.ItemView.extend({
        template: _.template(LoginTemplate),
        className: 'login',

        ui: {
            signIn: '.login_signin'
        },

        triggers: {
            'click @ui.signIn': 'signin:click'
        },

        onRender: function () {
            this.binding = Rivets.bind(this.el, this.model);
            this.delegateEvents();
        }
    });

    return LoginView;
});
