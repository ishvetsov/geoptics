/* global $ */
define(function (require) {
    'use strict';

    var Block = require('core/block.ui'),
        Field = require('entities/field.entity'),
        AppConfig = require('configs/app.config'),

        ClusterBlock = require('blocks/admin/cluster/cluster.block'),

        View = require('./field.view');

    var clusterBlock = ClusterBlock.getInstance();

    var FieldBlock = Block.create({
        view: View,
        model: Field.Model,

        onBeforeInit: function (options) {
            this.viewOptions = {mode: options.mode};
        },

        onInit: function () {
            var _this = this;
            _this._view.on('view:save', function () {
                _this._model.save().then(function () {
                    history.back();
                });
            });

            _this._view.on('cluster:add', function () {
                clusterBlock.create(_this._model.get('clusters'));
            });
        },

        fetch: function (id) {
            this._model.set('id', id);

            return $.when(
                this._model.fetch(),
                this._model.get('clusters').fetch()
            );
        }
    });

    return FieldBlock;
});
