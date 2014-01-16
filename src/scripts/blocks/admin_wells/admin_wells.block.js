/* global _, $ */

define(function (require) {
    'use strict';

    var Block = require('core/block'),
        Deposit = require('entities/deposit.entity'),

        AdminWellsLayout = require('./admin_wells.layout'),
        NoAttachedWellsBlock = require('blocks/no_attached_wells/no_attached_wells.block');

    var noAttachedWellsBlock = NoAttachedWellsBlock.getInstance();

    var AdminWellsBlock = Block.create({
        view: AdminWellsLayout,

        onInit: function () {
            noAttachedWellsBlock.init();
        },

        fetch: function () {
            var _this = this;
            return noAttachedWellsBlock.fetch().then(function () {
                _this._viewInstance.noAttachedWellsRegion.show(
                    noAttachedWellsBlock.getViewInstance());
            });
            // var _this = this;
            // return $.when(
            //     noAttachedWellsBlock.fetch()

            //     ).then(function () {
            //         _this._viewInstance.noAttachedWellsRegion.show(
            //             noAttachedWellsBlock.getViewInstance());
            //     });
        }
    });

    return AdminWellsBlock;
});