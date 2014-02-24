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

            /*Rivets.formatters.eq = function (value, args) {
                return value === args;
            };

            Rivets.binders.toggle = {
                bind: function(el) {
                    adapter = this.config.adapters[this.key.interface];
                    model = this.model;
                    keypath = this.keypath;

                    this.callback = function() {
                        value = adapter.read(model, keypath);
                        adapter.publish(model, keypath, el.getAttribute('value') || el.value );
                    };

                    el.addEventListener('click', this.callback);
                },

                unbind: function(el) {
                    el.removeEventListener('click', this.callback);
                }
            };*/
        },

        ui: {
            block: '.graphics_block'
        },

        onRender: function () {
            /*this.binding = Rivets.bind(this.el, {
                model: this.model,
                view: this
            });*/

            Rivets.bind(this.ui.block, this.model);
        }
    });

    return TabsView;
});
