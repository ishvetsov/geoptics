define(function (require) {
    'use strict';

    var Block = require('core/block'),

        DepositsView = require('./deposits.view'),
        Deposit = require('entities/deposit.entity');

    var depositsCollection = new Deposit.Collection();

    var DepositsBlock = Block.create({
        view: DepositsView,

        viewOptions: {
            collection: depositsCollection
        },

        fetch: function () {
            return depositsCollection.fetch();
        }
    });

    return DepositsBlock;
});
