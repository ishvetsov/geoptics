define(function (require) {
    'use strict';

    var Block = require('core/block.ui'),
        Perforation = require('entities/perforation.entity'),
        AppConfig = require('configs/app.config'),

        View = require('./perforation.view');

    var PerforationBlock = Block.create({
        view: View,
        model: Perforation.Model,

        onBeforeInit: function (options) {
            this.viewOptions = {mode: options.mode};
        },

        onInit: function (options) {
            var _this = this;

            _this._viewInstance.on('view:save', function () {
                _this._modelInstance.save().then(function () {
                    history.back();
                });
            });
        },

        fetch: function (id) {
            this._modelInstance.set('id', id);

            return this._modelInstance.fetch();
        }
    });

    return PerforationBlock;
});
