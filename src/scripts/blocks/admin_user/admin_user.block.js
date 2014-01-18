define(function (require) {
    'use strict';

    var Block = require('core/block'),

        AdminUserView = require('./admin_user.view'),
        AdminUserModel = require('./admin_user.model');

    var adminUserModel = new AdminUserModel();

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
            adminUserModel.clear();
            return this;
        }
    });

    return AdminUserBlock;
});
