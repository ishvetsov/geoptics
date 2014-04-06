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
            this._view.on('save:click', this._onSaveClicked);
        },

        fetch: function (id) {
            this._model.set('id', id);
            console.log(this._model);
            return $.when(
                this._model.get('groups').fetch(),
                this._model.fetch());
        },

        resetModel: function () {
            this._model.clear().set('groups', []);
            return this;
        },

        _onSaveClicked: function (model) {
            model.save()
            .then(function () {
                Backbone.history.navigate('#/admin/users');
            });
        }
    });

    return UserBlock;
});
