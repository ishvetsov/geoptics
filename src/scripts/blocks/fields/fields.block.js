define(function (require) {
    'use strict';

    var Block = require('core/block'),

        View = require('./fields.view'),
        Field = require('entities/field.entity');

    var fields = new Field.Collection();

    var FieldsBlock = Block.create({
        view: View,

        viewOptions: {
            collection: fields
        },

        fetch: function () {
            return fields.fetch();
        }
    });

    return FieldsBlock;
});
