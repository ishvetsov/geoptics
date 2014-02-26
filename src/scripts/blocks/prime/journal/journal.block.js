define(function (require) {
    'use strict';

    var Block = require('core/block.ui'),

        JournalView = require('./journal.view');

    var JournalBlock = Block.create({
        view: JournalView
    });

    return JournalBlock;
});
