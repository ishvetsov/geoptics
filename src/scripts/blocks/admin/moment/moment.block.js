define(function (require) {
    'use strict';

    var Block = require('core/block.ui'),
        Moment = require('entities/moment.entity'),
        AppConfig = require('configs/app.config'),

        View = require('./moment.view');

    var MomentBlock = Block.create({
        view: View,
        model: Moment.Model,

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

    return MomentBlock;
});
