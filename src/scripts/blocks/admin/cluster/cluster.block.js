define(function (require) {
    'use strict';

    var Block = require('core/block.ui'),
        Cluster = require('entities/cluster.entity'),
        AppConfig = require('configs/app.config'),

        View = require('./cluster.view');

    var FieldBlock = Block.create({
        view: View,
        model: Cluster.Model,

        onBeforeInit: function (options) {
            this.viewOptions = {mode: options.mode};
        },

        onInit: function () {
            this._parrentCollection = null;

            _.bindAll(this, '_onSave');
            this._view.on('view:save', this._onSave);
        },

        fetch: function (id) {
            this._model.set('id', id);

            return $.when(
                this._model.fetch(),
                this._model.get('boreholes').fetch());
        },

        setParentCollection: function (collection) {
            this._parrentCollection = collection;
        },

        create: function (collection) {
            this.init({mode: 'create'});
            this._parrentCollection = collection;

            this.trigger('create', this._view);
        },

        _onSave: function () {
            if (this._parrentCollection && this._model.isNew()) {
                this._parrentCollection.add(this._model);
            }

            this._model
                .saveAtContext()
                .then(function () { history.back(); });
        }
    });

    return FieldBlock;
});
