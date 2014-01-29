define(function (require) {
    'use strict';

    var Block = require('core/block.ui'),

        AdminUserView = require('./admin_user.view'),
        AdminUser = require('./admin_user.entity');

    var AdminUserBlock = Block.create({
        view: AdminUserView,
        model: AdminUser.Model,

        fetch: function (id) {
            return this._modelInstance.fetch({
                data: {id: id}
            });
        },

        resetModel: function () {
            this._modelInstance.clear().set('groups', []);
            return this;
        }
    });

    return AdminUserBlock;
});
