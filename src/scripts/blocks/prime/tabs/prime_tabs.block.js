define(function (require) {
    'use strict';

    var Block = require('core/block.ui'),

        Tabs = require('entities/tabs.entity'),
        TabsView = require('./prime_tabs.view');

    var TabsBlock = Block.create({
        view: TabsView,
        model: Tabs.Model
    });

    return TabsBlock;
});
