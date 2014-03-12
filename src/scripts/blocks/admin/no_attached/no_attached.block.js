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

            _this._viewInstance.on('view:apply', function () {
                var checkeds = _this._modelInstance.get('boreholes').where({
                    isChecked: true
                });

                _this._modelInstance.get('curCluster')
                    .get('boreholes').add(checkeds);

                _this._modelInstance.get('curCluster').save()
                    .then(function () {
                        _this._viewInstance.update();
                        _this.trigger('attached', {
                            field: _this._modelInstance.get('curField'),
                            cluster: _this._modelInstance.get('curCluster')
                        });
                    });
            });
        },

        fetch: function () {
            var boreholes = this._modelInstance.get('boreholes'),
                p = boreholes.fetch({
                    url: AppConfig.rest.boreholes + '?noattached=true'
                });

            return $.when(p);
        }
    });

    return NoAttachedBlock;
});
