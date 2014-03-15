define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),

        Template = require('text!./field.template.html');

    var FieldView = Marionette.ItemView.extend({
        template: _.template(Template),
        
        className: 'admin_field inner-container',

        ui: {
            addCluster: '.field_add-cluster'
        },

        events: {
            'click @ui.addCluster': '_onAddClusterClicked'
        },

        initialize: function (options) {
            this._mode = options.mode;
            _.bindAll(this, 'save', '_onAddClusterClicked');
        },

        onRender: function () {
            this.binding = Rivets.bind(this.el, {
                field: this.model,
                view: this
            });
        },

        serializeData: function () {
            return {
                field: this.model,
                mode: this._mode
            };
        },

        save: function () {
            this.trigger('view:save');
        },

        _onAddClusterClicked: function (ev) {
            ev.preventDefault();
            this.trigger('cluster:add');
        }
    });

    return FieldView;
});
