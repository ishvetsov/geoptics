/* global _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),

        AdminUserTemplate = require('text!./admin_user.template.html');

    var AdminUsersView = Marionette.ItemView.extend({
        template: _.template(AdminUserTemplate),
        className: 'admin_user',

        initialize: function () {
            _.bindAll(this, 'addGroup');
        },

        onRender: function () {
            this.binding = Rivets.bind(this.el, {
                model: this.model,
                view: this
            });
        },

        addGroup: function () {
            // Dummy
            this._group.id = Math.random();

            this.model.get('groups').add(this._group);
        },

        _group: {
            id: '',
            name: ''
        }
    });

    return AdminUsersView;
});
