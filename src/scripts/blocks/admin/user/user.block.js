define(function (require) {
    'use strict';

    var Block = require('core/block.ui'),
        User = require('entities/user.entity'),

        View = require('./user.view');

    var UserBlock = Block.create({
        view: View,
        model: User.Model,

        triggers: {
            'view:save:click': 'save:click'
        },

        onInit: function () {
            this._viewInstance.on('save:click', this._onSaveClicked);
        },

        fetch: function (id) {
            this._modelInstance.set('id', id);

            return $.when(
                this._modelInstance.get('groups').fetch(),
                this._modelInstance.fetch());
        },

        resetModel: function () {
            this._modelInstance.clear().set('groups', []);
            return this;
        },

        _onSaveClicked: function (model) {
            model.save().then(function () {
                Backbone.history.navigate('#/admin/users');
            });
        }
    });

    return UserBlock;
});
