define(function (require) {
    'use strict';

    var Block = require('core/block.ui'),
        AppConfig = require('configs/app.config'),

        Graphic = require('entities/graphic.entity'),
        GraphicsView = require('./graphics.view');

    var GraphicsBlock = Block.create({
        view: GraphicsView,
        collection: Graphic.Collection,

        functions: {
            'view:exportGraphic': 'export'
        },

        addMeta: function (meta) {
            this._collectionInstance.reset(meta);
        },

        fetch: function (options) {
            if (this._collectionInstance.size()) {
                var promisses = this._collectionInstance.map(function (m) {
                    console.log(m.get('type'), options.type);
                    if (m.get('type') === options.type) {
                        console.log('equal');
                        return m.fetch();
                    }
                });
                var _this = this;

                $.when.apply($, promisses).then(function () {
                    _this._viewInstance.renderGraphic();
                    console.log('render graphics');
                });
            }
        }
    });

    return GraphicsBlock;
});
