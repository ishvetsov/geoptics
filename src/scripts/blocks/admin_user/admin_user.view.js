/* global _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),

        AdminUserTemplate = require('text!./admin_user.template.html');

    var AdminUsersView = Marionette.ItemView.extend({
        template: _.template(AdminUserTemplate),
        className: 'admin_user',

        onRender: function () {
            this.binding = Rivets.bind(this.el, this.model);
        }
    });

    return AdminUsersView;
});
