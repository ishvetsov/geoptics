/* global _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),

        DepositsTemplate = require('text!./deposits.template.html'),
        DepositsEmptyTemplate = require('text!./deposits_empty.template.html');

    function showHideSubItems(ev) {
        var $target = $(ev.currentTarget);

        if ($target.next().attr('hidden')) {
            $target.next().removeAttr('hidden');
        } else {
            $target.next().attr('hidden', true);
        }
    }

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
        },

        clickDeposit: function (ev, data) {
            showHideSubItems(ev);
        },

        clickCluster: function (ev, data) {
            showHideSubItems(ev);
        },

        clickWell: function (ev, data) {
            showHideSubItems(ev);
        }
    });

    return DepositsView;
});
