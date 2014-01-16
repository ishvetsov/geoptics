/* global _, $ */

define(function (require) {
    'use strict';

    var Block = require('core/block'),
        Deposit = require('entities/deposit.entity'),

        AdminWellsLayout = require('./admin_wells.layout'),
        NoAttachedWellsBlock = require('blocks/no_attached_wells/no_attached_wells.block'),
        DepositsListBlock = require('blocks/deposits_list/deposits_list.block');

    var noAttachedWellsBlock = NoAttachedWellsBlock.getInstance(),
        depositsListBlock = DepositsListBlock.getInstance();

    var AdminWellsBlock = Block.create({
        view: AdminWellsLayout,

        onInit: function () {
            _.bindAll(this, '_onShowAdminWellsLayout');

            noAttachedWellsBlock.init();
            depositsListBlock.init();

            this._viewInstance.on('show', this._onShowAdminWellsLayout);
        },

        fetch: function () {
            return $.when(
                noAttachedWellsBlock.fetch(),
                depositsListBlock.fetch()
            );
        },

        _onShowAdminWellsLayout: function () {
            this._viewInstance.noAttachedWellsRegion.show(
                noAttachedWellsBlock.getViewInstance());
            this._viewInstance.depositsRegion.show(
                depositsListBlock.getViewInstance());
        }
    });

    return AdminWellsBlock;
});