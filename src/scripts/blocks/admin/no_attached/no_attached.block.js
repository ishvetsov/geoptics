define(function (require) {
    'use strict';
    var Block = require('core/block.ui'),
        AppConfig = require('configs/app.config'),

        NoAttached = require('./no_attached.entity'),
        View = require('./no_attached.view');

    var NoAttachedBlock = Block.create({
        view: View,

        model: NoAttached.Model,

        onInit: function () {
            var _this = this;

            _this._view.on('view:apply', function () {
                var checkeds = _this._model.get('boreholes').where({
                    isChecked: true
                });

                _this._model.get('curCluster')
                    .get('boreholes').add(checkeds);

                _this._model.get('curCluster').save()
                    .then(function () {
                        _this._view.update();
                        _this.trigger('attached', {
                            field: _this._model.get('curField'),
                            cluster: _this._model.get('curCluster')
                        });
                    });
            });
        },

        fetch: function () {
            var boreholes = this._model.get('boreholes'),
                p = boreholes.fetch({
                    url: AppConfig.rest.boreholes + '?noattached=true'
                });

            return $.when(p);
        }
    });

    return NoAttachedBlock;
});
