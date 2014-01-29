define(function (require) {
    'use strict';

    var Block = require('./block'),
        Factory = require('./factory');

    var BlockBase = Block.extend();

    return Factory.decl(BlockBase);
});
