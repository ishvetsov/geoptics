define(function (require) {
    'use strict';

    var Block = require('core/block.ui'),

        AdminUsersView = require('./admin_users.view'),
        AdminUsersCollection = require('./admin_users.collection');

    var AdminUsersBlock = Block.create({
        view: AdminUsersView,
        collection: AdminUsersCollection,

        fetch: function () {
            return this._collectionInstance.fetch();
        }
    });

    return AdminUsersBlock;
});
