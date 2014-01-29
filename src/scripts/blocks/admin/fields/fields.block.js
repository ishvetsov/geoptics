define(function (require) {
    'use strict';

    var Block = require('core/block.ui'),
        Field = require('entities/field.entity'),

        View = require('./fields.view');

    var FieldsBlock = Block.create({
        view: View,
        collection: Field.Collection,

        fetch: function () {
            return this._collectionInstance.fetch();
        }
    });

    return FieldsBlock;
});
