define(function (require) {
    'use strict';

    var Block = require('core/block.ui'),
        User = require('entities/user.entity'),

        View = require('./users.view');

    var UsersBlock = Block.create({
        view: View,
        collection: User.Collection,

        fetch: function () {
            return this._collection.fetch();
        }
    });

    return UsersBlock;
});
