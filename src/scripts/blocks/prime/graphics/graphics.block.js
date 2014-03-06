define(function (require) {
    'use strict';

    var Block = require('core/block.ui'),

        Graphic = require('entities/graphic.entity'),
        GraphicsView = require('./graphics.view');

    var GraphicsBlock = Block.create({
        view: GraphicsView,
        collection: Graphic.Collection,

        functions: {
            'view:exportGraphic': 'export'
        },

        onInit: function () {
            _.bindAll(this, '_onStateChanged', '_onCollectionFetched');

            this.on('type:state:change', this._onStateChanged);
            this.on('sensors:state:change', this._onStateChanged);
        },

        fetch: function (data) {
            return this._collectionInstance
                .fetch({
                    data: {ids: data.ids}
                })
                .then(this._onCollectionFetched);
        },

        _onCollectionFetched: function () {
            this._viewInstance.renderGraphic();
            console.log(this._collectionInstance.toJSON());
        },

        _onStateChanged: function (data) {
            this.fetch(data);
        }
    });

    return GraphicsBlock;
});
