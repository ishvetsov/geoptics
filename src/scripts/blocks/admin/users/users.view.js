/* global _ */
define(function (require) {
    'use strict';
    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),

        Template = require('text!./users.template.html');

    var UsersView = Marionette.ItemView.extend({
        template: _.template(Template),
        className: 'admin_users inner-container',

        onRender: function () {
            _.bindAll(this, 'edit');

            this.binding = Rivets.bind(this.el, {
                users: this.collection
            });
        },

        edit: function (ev, data) {
            this.trigger('user:edit', data.user);
        }
    });

    return UsersView;
});
