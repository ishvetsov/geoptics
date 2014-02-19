define(function (require) {
    'use strict';

    var Block = require('core/block.ui'),
        Field = require('entities/field.entity'),

        View = require('./fields.view');

    var FieldsBlock = Block.create({
        view: View,
        collection: Field.Collection,

        fetch: function () {
            var _this = this;

            // Если не делать collection.reset, то возникает ошибка:
            // "Uncaught TypeError: Cannot read property 'cid' of undefined".
            // Надо разбираться.
            _this._collectionInstance.reset();

            return _this._collectionInstance.fetch();
        },

        getCollection: function () {
            return this._collectionInstance;
        }
    });

    return FieldsBlock;
});
