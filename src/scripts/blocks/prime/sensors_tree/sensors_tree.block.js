define(function (require) {
    'use strict';

    var Block = require('core/block.ui'),
        SessionBlock = require('blocks/session/session.block'),

        SensorsTree = require('./sensors_tree.entity'),
        SensorsTreeView = require('./sensors_tree.view');

    var SensorsTreeBlock = Block.create({
        view: SensorsTreeView,
        model: SensorsTree.Model,

        onInit: function () {
            var currentUser = SessionBlock.getInstance().getCurrentUser();

            this._modelInstance.set('sets', currentUser.get('sensorsSets'));
        },

        fetch: function () {
            return this._modelInstance.fetchChildren();
        },

        triggers: {
            'model:state:change': 'state:change'
        }
    });

    return SensorsTreeBlock;
});
