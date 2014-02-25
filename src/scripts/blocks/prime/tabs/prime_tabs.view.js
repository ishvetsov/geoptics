/* global _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),

        Template = require('text!./prime_tabs.template.html');

    var TabsView = Marionette.ItemView.extend({
        template: _.template(Template),
        className: 'tabs',

        initialize: function () {
            _.bindAll(this, 'changeGraphicType', 'changePeriod');
        },

        ui: {
            tab: '.tab',
            period: '.period'
        },

        changeGraphicType: function (e) {
            this.model.set({type: $(e.target).attr('data-graphicType')});
        },

        changePeriod: function (e) {
            this.model.set({period: $(e.target).attr('data-periodType')});
        },

        onRender: function () {
            this.binding = Rivets.bind(this.el, {
                model: this.model,
                view: this
            });
        }
    });

    return TabsView;
});
