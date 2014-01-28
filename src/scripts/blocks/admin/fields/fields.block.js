define(function (require) {
    'use strict';

    var Block = require('core/block'),
        Field = require('entities/field.entity'),

        View = require('./fields.view');

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
