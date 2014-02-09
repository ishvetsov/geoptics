define(function (require) {
    'use strict';

    var Block = require('core/block.ui'),
        Field = require('entities/field.entity'),

        View = require('./fields.view');

    var FieldsBlock = Block.create({
        view: View,
        collection: Field.Collection,

        fetch: function () {
            // Если не делать collection.reset, то возникает ошибка:
            // "Uncaught TypeError: Cannot read property 'cid' of undefined".
            // Надо разбираться.
            this._collectionInstance.reset();
            return this._collectionInstance.fetch();
        }
    });

    return FieldsBlock;
});
