define(function (require) {
    'use strict';

    var Block = require('core/block.ui'),
        moment = require('moment'),

        Graphic = require('entities/graphic.entity'),
        GraphicsView = require('./graphics.view');

    var GraphicsBlock = Block.create(
        {
            view: GraphicsView,
            collection: Graphic.Collection,

            functions: {
                'view:exportGraphic': 'export'
            },

            onInit: function () {
                this._view.on('zoom', this._onZoom);
            },

            addMeta: function (meta) {
                this._collection.reset(meta);
            },

            fetch: function (options) {
                if (this._collection.size()) {
                    var _this = this;

                    var promises = this._collection.map(function (graphic) {
                        if (graphic.get('type') === options.type) {
                            return graphic.fetch({
                                data: _.extend(
                                    {},
                                    _this._defaultRequestData,
                                    options.requestData)
                            });
                        }
                    });

                    $.when.apply($, promises)
                    .then(function () {
                        // Пробная реализация
                        var pointPromises = [];

                        _this._collection.each(function (graphic) {
                            var points =  graphic.get('borehole').get('points');
                            pointPromises.push(points.fetch());
                        });

                        return $.when.apply($, pointPromises);
                    })
                    .then(function () {
                        _this._view.renderGraphic(options.type);
                    });

                } else {
                    this._view.renderGraphic(options.type);
                }
            },

            _defaultRequestData: {
                startDate: moment().format(),
                endDate: moment().format(),
                numberPoints: 1000
            }
        },
        {
            _onZoom: function (d) {
                this.trigger('zoom');
                this.fetch(d);
            }
        }
    );

    return GraphicsBlock;
});
