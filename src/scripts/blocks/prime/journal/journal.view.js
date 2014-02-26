/* global _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),

        JournalTemplate = require('text!./journal.template.html');

    var JournalView = Marionette.ItemView.extend({
        template: _.template(JournalTemplate),
        className: 'journal'
    });

    return JournalView;
});
