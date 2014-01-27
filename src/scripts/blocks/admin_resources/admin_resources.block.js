/* global _, $ */

define(function (require) {
    'use strict';

    var Block = require('core/block'),

        Layout = require('./admin_resources.layout'),
        NoAttachedBoreholesBlock = require('blocks/no_attached_boreholes/no_attached_boreholes.block'),
        FieldsBlock = require('blocks/fields/fields.block');

    var noAttachedBoreholesBlock = NoAttachedBoreholesBlock.getInstance(),
        fieldsBlock = FieldsBlock.getInstance();

    var AdminResourcesBlock = Block.create({
        view: Layout,

        onInit: function () {
            _.bindAll(this, '_onShowAdminResourcesLayout');

            noAttachedBoreholesBlock.init();
            fieldsBlock.init();

            this._viewInstance.on('show', this._onShowAdminResourcesLayout);
        },

        fetch: function () {
            return $.when(
                noAttachedBoreholesBlock.fetch(),
                fieldsBlock.fetch()
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