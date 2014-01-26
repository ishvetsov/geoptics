/* global _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),

        DepositsTemplate = require('text!./deposits.template.html'),
        DepositsEmptyTemplate = require('text!./deposits_empty.template.html');

    var DepositsView = Marionette.ItemView.extend({
        className: 'admin_deposits',

        initialize: function () {
            _.bindAll(this, 'clickDeposit');
        },

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

            this._clusterTemplate = this.$el.find('.clusters-template');
        },

        clickDeposit: function (ev, data) {
            var html = this._clusterTemplate
                .clone()
                .attr('hidden', false)
                .html(),

                $target = $(ev.currentTarget);

            var classes = $target.next().attr('class');

            if (classes && classes.search('clusters') > -1) {
                $target.next().remove();
            } else {
                $(html).insertAfter($target);
            }
        }
    });

    return DepositsView;
});
