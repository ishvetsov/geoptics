/* global _, Rivets */

define(function (require) {
    'use strict';

    var
        Marionette = require('backbone.marionette');
        // RivetsAdapter = require('rivets.adapter');

    var LoginView = Marionette.ItemView.extend({
        template: _.template(require('text!./login.template.html')),

        events: {
            'click #login': '_login'
        },

        render: function () {
            // this.binding = Rivets.bind(this.el, {

            // });
        },

        _login: function () {
            this.trigger('login:try', {});
        },
    });

    return LoginView;
});