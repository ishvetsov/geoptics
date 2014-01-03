/* global _ */

define(function (require) {
    'use strict';

    var
        Marionette = require('backbone.marionette'),
        Rivets = require('rivets');

    var LoginView = Marionette.ItemView.extend({
        template: _.template(require('text!./login.template.html')),

        events: {
            'click .auth-form__signin': '_onSignInClicked'
        },

        onRender: function () {
            this.binding = Rivets.bind(this.el, {});
        },

        _onSignInClicked: function () {
            this.trigger('login:try', {});
        },
    });

    return LoginView;
});
