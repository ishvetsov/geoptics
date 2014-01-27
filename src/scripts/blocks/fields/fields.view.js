/* global _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),

        Template = require('text!./fields.template.html'),
        EmptyTemplate = require('text!./fields_empty.template.html');

    function showHideSubItems(ev) {
        var $target = $(ev.currentTarget);

        if ($target.next().attr('hidden')) {
            $target.next().removeAttr('hidden');
        } else {
            $target.next().attr('hidden', true);
        }
    }

    var FieldsView = Marionette.ItemView.extend({
        className: 'admin_fields',

        getTemplate: function () {
            if (this.collection.length) {
                return _.template(Template);
            }
            return _.template(EmptyTemplate);
        },

        onRender: function () {
            this.binding = Rivets.bind(this.el, {
                fields: this.collection,
                view: this
            });
        },

        expandField: function (ev, data) {
            showHideSubItems(ev);
        },

        expandCluster: function (ev, data) {
            showHideSubItems(ev);
        },

        expandBorehole: function (ev, data) {
            showHideSubItems(ev);
        }
    });

    return FieldsView;
});
