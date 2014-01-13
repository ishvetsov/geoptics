/* global _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),

        AdminUsersTemplate = require('text!./admin_users.template.html');

    var AdminUsersView = Marionette.ItemView.extend({
        template: _.template(AdminUsersTemplate),
        className: 'admin_users',

        onRender: function () {
            _.bindAll(this, 'edit');

            this.binding = Rivets.bind(this.el, {
                users: this.collection,
                view: this
            });
        },

        edit: function (ev, data) {
            this.trigger('user:edit', data.user);
        }
    });

    return AdminUsersView;
});
