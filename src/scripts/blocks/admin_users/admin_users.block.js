define(function (require) {
    'use strict';

    var Block = require('core/block'),

        AdminUsersView = require('./admin_users.view'),
        AdminUsersCollection = require('./admin_users.collection');

    var adminUsersCollection = new AdminUsersCollection();

    var AdminUsersBlock = Block.create({
        view: AdminUsersView,
        viewOptions: {
            collection: adminUsersCollection
        },

        fetch: function () {
            return $.when(adminUsersCollection.fetch());
        }
    });

    return AdminUsersBlock;
});
