define(function (require) {
    'use strict';

    var Block = require('core/block'),

        DepositsListView = require('./deposits_list.view'),
        Deposit = require('entities/deposit.entity');

    var depositsCollection = new Deposit.Collection();

    var DepositsListBlock = Block.create({
        view: DepositsListView,

        viewOptions: {
            collection: depositsCollection
        },

        fetch: function () {
            return depositsCollection.fetch();
        }
    });

    return DepositsListBlock;
});
