define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),

        GraphicsControlTemplate = require('text!./graphics_control.template.html');

    var GraphicsControlView = Marionette.ItemView.extend({
        template: _.template(GraphicsControlTemplate),
        className: 'graphics-control',

        ui: {
            type: '.graphics-control_type',
            period: '.graphics-control_period',
            exports: '.graphics-control_export',
            refresh: '.graphics-control_refresh'
        },

        events: {
            'click @ui.type': '_onTypeSelected',
            'click @ui.period': '_onPeriodSelected',
            'click @ui.exports': '_onExportsClicked',
        },

        triggers: {
            'click @ui.refresh': 'refresh:click'
        },

        initialize: function () {
            this._onTypeSelected = this._getChangeHandler('type');
            this._onPeriodSelected = this._getChangeHandler('period');
        },

        onRender: function () {
            this.trigger('state:change', this.model.toJSON());
            this.delegateEvents();
        },

        serializeData: function () {
            return {
                model: this.model.toJSON(),
                config: this.options.config
            };
        },

        _getChangeHandler: function (param) {
            return function (ev) {
                this.model.set(param, $(ev.currentTarget).data('value'));
                this.trigger('state:change', this.model.toJSON());
            };
        },

        _onExportsClicked: function (ev) {
            this.trigger(
                'export:click',
                $(ev.currentTarget).data('export-type'));
        }
    });

    return GraphicsControlView;
});
