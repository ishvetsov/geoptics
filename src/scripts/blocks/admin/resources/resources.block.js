/* global _, $ */
define(function (require) {
    'use strict';
    var Block = require('core/block.ui'),

        NoAttachedBlock = require('../no_attached/no_attached.block'),
        FieldsBlock = require('../fields/fields.block'),
        Layout = require('./resources.layout');

    var noAttachedBlock = NoAttachedBlock.getInstance(),
        fieldsBlock = FieldsBlock.getInstance();

    var ResourcesBlock = Block.create({
        view: Layout,

        onInit: function () {
            _.bindAll(this, '_onShowLayout');

            fieldsBlock.init();
            noAttachedBlock.init();

            this._viewInstance.on('show', this._onShowLayout);
        },

        fetch: function () {
            var fieldsXhr = fieldsBlock.fetch();

            fieldsXhr.then(function () {
                noAttachedBlock.setFields(fieldsBlock.getCollection());
            });

            return $.when(
                noAttachedBlock.fetch(),
                fieldsXhr
            );
        },

        _onShowLayout: function () {
            this._viewInstance.noAttachedRegion.show(
                noAttachedBlock.getViewInstance());
            this._viewInstance.fieldsRegion.show(
                fieldsBlock.getViewInstance());
        }
    });

    return ResourcesBlock;
});
