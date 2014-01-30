define(function (require) {
    'use strict';

    var Block = require('core/block.ui'),

        Graphic = require('entities/graphic.entity'),
        GraphicsView = require('./prime_graphics.view');

    var GraphicsBlock = Block.create({
        view: GraphicsView,
        collection: Graphic.Collection,

        onBeforeInit: function () {
            _.bindAll(this, '_onCollectionFetched');
        },

        fetch: function (ids) {
            return this._collectionInstance
                .fetch({
                    data: {ids: ids}
                })
                .then(this._onCollectionFetched);
        },

        _onCollectionFetched: function () {
            console.log(this._collectionInstance.toJSON());
        }
    });

    return GraphicsBlock;
});
