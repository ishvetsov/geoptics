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

            this._view.on('show', this._onShowLayout);
            noAttachedBlock.on('attached', function (obj) {
                var field = fieldsBlock.getCollection().findWhere({
                    id: obj.field.get('id')
                });

                var clusters = field.get('clusters');
                if (clusters.size() > 0) {
                    var c = clusters.findWhere({id: obj.cluster.get('id')});
                    // TODO: Убрать проверку, кластер 'c' всегда должен быть найден
                    if (c) {
                        c.get('boreholes').add(obj.cluster.get('boreholes').models);
                    }
                }
            });
        },

        fetch: function () {
            return $.when(
                noAttachedBlock.fetch(),
                fieldsBlock.fetch()
            );
        },

        _onShowLayout: function () {
            this._view.noAttachedRegion.show(
                noAttachedBlock.getView());

            this._view.fieldsRegion.show(
                fieldsBlock.getView());
        }
    });

    return ResourcesBlock;
});
