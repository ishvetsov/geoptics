/* global _, $ */

define(function (require) {
    'use strict';

    var Block = require('core/block'),
        Deposit = require('entities/deposit.entity'),

        AdminResourcesLayout = require('./admin_resources.layout'),
        NoAttachedWellsBlock = require('blocks/no_attached_wells/no_attached_wells.block'),
        DepositsBlock = require('blocks/deposits/deposits.block');

    var noAttachedWellsBlock = NoAttachedWellsBlock.getInstance(),
        depositsBlock = DepositsBlock.getInstance();

    var AdminWellsBlock = Block.create({
        view: AdminResourcesLayout,

        onInit: function () {
            _.bindAll(this, '_onShowAdminWellsLayout');

            noAttachedWellsBlock.init();
            depositsBlock.init();

            this._viewInstance.on('show', this._onShowAdminWellsLayout);
        },

        fetch: function () {
            return $.when(
                noAttachedWellsBlock.fetch(),
                depositsBlock.fetch()
            );
        },

        _onShowAdminWellsLayout: function () {
            this._viewInstance.noAttachedWellsRegion.show(
                noAttachedWellsBlock.getViewInstance());
            this._viewInstance.depositsRegion.show(
                depositsBlock.getViewInstance());
        }
    });

    return AdminWellsBlock;
});