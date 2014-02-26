define(function (require) {
    'use strict';

    var Block = require('core/block.ui'),

        SensorsTree = require('./sensors_tree.entity'),
        SensorsTreeView = require('./sensors_tree.view');

    var SensorsTreeBlock = Block.create({
        view: SensorsTreeView,
        model: SensorsTree.Model,

        fetch: function () {
            return this._modelInstance.fetch();
        },

        triggers: {
            'model:state:change': 'state:change'
        }
    });

    return SensorsTreeBlock;
});
