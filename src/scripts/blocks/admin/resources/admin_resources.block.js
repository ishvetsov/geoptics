/* global _, $ */

define(function (require) {
    'use strict';

    var Block = require('core/block.ui'),

        NoAttachedBoreholesBlock = require('../no_attached_boreholes/no_attached_boreholes.block'),
        FieldsBlock = require('../fields/fields.block'),
        Layout = require('./admin_resources.layout');

    var noAttachedBoreholesBlock = NoAttachedBoreholesBlock.getInstance(),
        fieldsBlock = FieldsBlock.getInstance();

    var AdminResourcesBlock = Block.create({
        view: Layout,

        onInit: function () {
            _.bindAll(this, '_onShowAdminResourcesLayout');

            fieldsBlock.init();
            noAttachedBoreholesBlock.init();

            this._viewInstance.on('show', this._onShowAdminResourcesLayout);
        },

        fetch: function () {
            var fieldsBlockDeffered = fieldsBlock.fetch();

            fieldsBlockDeffered.then(function () {
                noAttachedBoreholesBlock.setFields(fieldsBlock.getCollection());
            });

            return $.when(
                noAttachedBoreholesBlock.fetch(),
                fieldsBlockDeffered
            );
        },

        _onShowAdminResourcesLayout: function () {
            this._viewInstance.noAttachedBoreholesRegion.show(
                noAttachedBoreholesBlock.getViewInstance());
            this._viewInstance.fieldsRegion.show(
                fieldsBlock.getViewInstance());
        }
    });

    return AdminResourcesBlock;
});
