/* global _ */
define(function (require) {
    'use strict';
    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),

        UserGroup = require('entities/user_group.entity'),

        Template = require('text!./user.template.html');

    var UsersView = Marionette.ItemView.extend({
        template: _.template(Template),
        className: 'admin_user inner-container',

        initialize: function () {
            _.bindAll(this, 'addInGroup', 'removeFromGroup', 'save');
            this._allGroups = new UserGroup.Collection();
        },

        ui: {
            allGroups: '.all-groups'
        },

        onRender: function () {
            this._allGroups.fetch();

            this.binding = Rivets.bind(this.el, {
                model: this.model,
                allGroups: this._allGroups,
                view: this
            });
        },

        addInGroup: function (ev) {
            var group = this._allGroups.at(this.ui.allGroups[0].selectedIndex);
            this.model.get('groups').add(group);
        },

        removeFromGroup: function (ev, data) {
            var groups = this.model.get('groups');
            groups.remove(groups.findWhere({id: data.group.get('id')}));
        },

        save: function () {
            this.trigger('save:click', this.model);
        },

        _group: {
            id: '',
            name: ''
        }
    });

    return UsersView;
});
