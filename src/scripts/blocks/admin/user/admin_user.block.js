define(function (require) {
    'use strict';

    var Block = require('core/block'),

        AdminUserView = require('./admin_user.view'),
        AdminUser = require('./admin_user.entity');

    var adminUserModel = new AdminUser.Model();

    var AdminUserBlock = Block.create({
        view: AdminUserView,
        viewOptions: {
            model: adminUserModel
        },

        fetch: function (id) {
            return adminUserModel.fetch({
                data: {id: id}
            });
        },

        resetModel: function () {
            adminUserModel.clear().set('groups', []);
            return this;
        }
    });

    return AdminUserBlock;
});
