define(function (require) {
    'use strict';

    var Block = require('core/block'),

        AdminUsersView = require('./admin_users.view'),
        AdminUsersCollection = require('./admin_users.collection');

    var adminUsersCollection = new AdminUsersCollection();

    var AdminUsersBlock = Block.create({
        settings: {
            isSingleton: true
        },

        triggers: {
            'view:user:edit': 'user:edit'
        },

        viewOptions: {
            collection: adminUsersCollection
        },
        
        view: AdminUsersView,

        fetch: function () {
            return adminUsersCollection.fetch();
        }
    });

    return AdminUsersBlock;
});
