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
                        var insProms = [];

                        _this._collection.each(function (graphic) {
                            var borehole = graphic.get('borehole');

                            insProms.push(borehole.get('perforations').fetch());
                            insProms.push(borehole.get('moments').fetch());
                            insProms.push(borehole.get('depths').fetch());
                        });

                        return $.when.apply($, insProms);
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
