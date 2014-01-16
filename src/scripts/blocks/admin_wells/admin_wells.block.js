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
            _.bindAll(this, '_setNoAttachedWellsRegion');

            noAttachedWellsBlock.init();

            this._viewInstance.on('show', this._setNoAttachedWellsRegion);
        },

        fetch: function () {
            return $.when(noAttachedWellsBlock.fetch());
        },

        _setNoAttachedWellsRegion: function () {
            this._viewInstance.noAttachedWellsRegion.show(
                noAttachedWellsBlock.getViewInstance());
        }
    });

    return AdminWellsBlock;
});