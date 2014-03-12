/* global $ */
define(function (require) {
    'use strict';

    var Block = require('core/block.ui'),
        Field = require('entities/field.entity'),
        AppConfig = require('configs/app.config'),

        View = require('./field.view');

    var FieldBlock = Block.create({
        view: View,
        model: Field.Model,

        onInit: function (options) {
            var _this = this;

            _this._options = options;
            switch (options.mode) {
                case 'edit':

                break;
                case 'create':
                    _this._modelInstance.clear();
                    _this._modelInstance.set('clusters', []);
                    _this._modelInstance.set('comments', []);
                break;
            }

            _this._viewInstance.on('view:save', function () {
                _this._modelInstance.save().then(function () {
                    history.back();
                });
            });
        },

        fetch: function (id) {
            this._modelInstance.set('id', id);

            return $.when(
                this._modelInstance.fetch(),
                this._modelInstance.get('clusters').fetch()
            );
        }
    });

    return FieldBlock;
});
