define(function (require) {
    'use strict';

    var Block = require('core/block.ui'),

        JournalView = require('./prime_journal.view');

    var JournalBlock = Block.create({
        view: JournalView
    });

    return JournalBlock;
});
