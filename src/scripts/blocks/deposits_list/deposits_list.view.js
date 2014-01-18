/* global _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),

        DepositsListTemplate = require('text!./deposits_list.template.html'),
        DepositsListEmptyTemplate = require('text!./deposits_list_empty.template.html');

    var DepositsListView = Marionette.ItemView.extend({
        getTemplate: function () {
            if (this.collection.length) {
                return _.template(DepositsListTemplate);
            }
            return _.template(DepositsListEmptyTemplate);
        }
    });

    return DepositsListView;
});
