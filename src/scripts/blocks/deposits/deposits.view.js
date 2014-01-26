/* global _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),

        DepositsTemplate = require('text!./deposits.template.html'),
        DepositsEmptyTemplate = require('text!./deposits_empty.template.html');

    var DepositsView = Marionette.ItemView.extend({
        className: 'admin_deposits',

        getTemplate: function () {
            if (this.collection.length) {
                return _.template(DepositsTemplate);
            }
            return _.template(DepositsEmptyTemplate);
        },

        onRender: function () {
            this.binding = Rivets.bind(this.el, {
                deposits: this.collection,
                view: this
            });
        }
    });

    return DepositsView;
});
