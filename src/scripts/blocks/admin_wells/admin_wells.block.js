define(function (require) {
    'use strict';

    var Block = require('core/block'),

        AdminWellsView = require('./admin_wells.view');

    var AdminWellsBlock = Block.create({
        settings: {
            isSingleton: true
        },

        view: AdminWellsView,

        fetch: function () {

        }
    });

    return AdminWellsBlock;
});