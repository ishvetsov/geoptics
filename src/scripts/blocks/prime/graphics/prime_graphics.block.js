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

        onInit: function () {
            var that = this;
            /*this._modelInstance.on('change', function (data) {
                that.fetch(data);
            });*/
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
        }
    });

    return GraphicsBlock;
});
