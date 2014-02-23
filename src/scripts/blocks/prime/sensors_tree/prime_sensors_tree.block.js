define(function (require) {
    'use strict';

    var Block = require('core/block.ui'),

        SensorsTree = require('./prime_sensors_tree.entity'),
        SensorsTreeView = require('./prime_sensors_tree.view');

    var SensorsTreeBlock = Block.create({
        view: SensorsTreeView,
        model: SensorsTree.Model,

        onInit: function () {
            this._modelInstance.on('sensors:state:change', function (data) {
                console.log(data);
            });
        },

        fetch: function () {
            return this._modelInstance.fetch();
        }
    });

    return SensorsTreeBlock;
});
