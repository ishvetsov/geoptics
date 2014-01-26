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
            _.bindAll(this, 'clickDeposit', 'clickCluster', 'clickWell');
        },

        getTemplate: function () {
            if (this.collection.length) {
                return _.template(DepositsTemplate);
            }
            return _.template(DepositsEmptyTemplate);
        },

        onRender: function () {
            this._bindData();
            this._findTemplates();
        },

        clickDeposit: function (ev, data) {
            var html = this._depositTemplate
                .clone()
                .attr('hidden', false)
                .html();

            var $target = $(ev.currentTarget),
                classes = $target.next().attr('class');

            if (classes && classes.search('deposit-info') > -1) {
                $target.next().remove();
            } else {
                $(html).insertAfter($target);
            }
            
            this._bindData();
        },

        clickCluster: function (ev, data) {
            var html = this._clusterTemplate
                .clone()
                .attr('hidden', false)
                .html();

            var $target = $(ev.currentTarget),
                classes = $target.next().attr('class');

            if (classes && classes.search('cluster-info') > -1) {
                $target.next().remove();
            } else {
                $(html).insertAfter($target);
            }

            this._bindData();
        },

        clickWell: function (ev, data) {
            var html = this._wellTemplate
                .clone()
                .attr('hidden', false)
                .html();

            var $target = $(ev.currentTarget),
                classes = $target.next().attr('class');

            if (classes && classes.search('well-info') > -1) {
                $target.next().remove();
            } else {
                $(html).insertAfter($target);
            }

            this._bindData();
        },

        _bindData: function () {
            if (this.binding) {
                this.binding.unbind();
            }
            this.binding = Rivets.bind(this.el, {
                deposits: this.collection,
                view: this
            });
        },

        _findTemplates: function () {
            this._depositTemplate = this.$el.find('.deposit-template');
            this._clusterTemplate = this.$el.find('.cluster-template');
            this._wellTemplate = this.$el.find('.well-template');
        }
    });

    return DepositsView;
});
