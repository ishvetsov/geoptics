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
                this._viewInstance.on('zoom', this._onZoom);
            },

            addMeta: function (meta) {
                this._collectionInstance.reset(meta);
            },

            fetch: function (options) {
                if (this._collectionInstance.size()) {
                    var _this = this;

                    var promises = this._collectionInstance.map(function (graphic) {
                        if (graphic.get('type') === options.type) {
                            return graphic.fetch({
                                data: _.extend(
                                    {},
                                    _this._defaultRequestData,
                                    options.requestData)
                            });
                        }
                    });

                    $.when.apply($, promises).then(function () {
                        _this._viewInstance.renderGraphic(options.type);
                    });
                } else {
                    this._viewInstance.renderGraphic(options.type);
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
