define(function (require) {
    'use strict';

    var Block = require('core/block.ui'),
        Field = require('entities/field.entity'),
        AppConfig = require('configs/app.config'),

        View = require('./fields.view');

    var FieldsBlock = Block.create({
        view: View,
        collection: Field.Collection,

        fetch: function () {
            return this._collection.fetch();
        },

        getCollection: function () {
            return this._collection;
        }
    });

    return FieldsBlock;
});
