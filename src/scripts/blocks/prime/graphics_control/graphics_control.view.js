define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),

        GraphicsControlTemplate = require('text!./graphics_control.template.html');

    var GraphicsControlView = Marionette.ItemView.extend({
        template: _.template(GraphicsControlTemplate),
        className: 'graphics-control clearfix',

        ui: {
            type: '.graphics-control_type',
            period: '.graphics-control_period',
            exports: '.graphics-control_export',
            refreshCheck: '.graphics-control_autorefresh-check',
            refreshInput: '.graphics-control_autorefresh-input'
        },

        events: {
            'click @ui.type': '_onTypeSelected',
            'click @ui.period': '_onPeriodSelected',
            'click @ui.exports': '_onExportsClicked',

            'change @ui.refreshCheck': '_onRefreshCheckChanged',
            'change @ui.refreshInput': '_onRefreshInputChanged'
        },

        initialize: function () {
            _.bindAll(this, '_startRefresh', '_stopRefresh');

            this._onTypeSelected = this._getChangeHandler('type');
            this._onPeriodSelected = this._getChangeHandler('period');
        },

        onRender: function () {
            this.trigger('state:change', this.model.toJSON());
            this.delegateEvents();

            this.ui.refreshCheck.trigger('change');
        },

        serializeData: function () {
            return {
                model: this.model.toJSON(),
                config: this.options.config
            };
        },

        setRefreshState: function (value) {
            this.ui.refreshCheck.prop('checked', value).trigger('change');
        },

        _getChangeHandler: function (param) {
            return function (ev) {
                this.model.set(param, $(ev.currentTarget).data('value'));
                this.trigger('state:change', this.model.toJSON());
            };
        },

        _onExportsClicked: function (ev) {
            ev.preventDefault();
            this.trigger(
                'export:click',
                $(ev.currentTarget).data('export-type'));
        },

        _onRefreshCheckChanged: function () {
            var isChecked = this.ui.refreshCheck.prop('checked');

            if (isChecked) {
                this.ui.refreshInput.prop('disabled', false);
                this._startRefresh();
            } else {
                this.ui.refreshInput.prop('disabled', true);
                this._stopRefresh();
            }
        },

        _onRefreshInputChanged: function () {
            var val = this.ui.refreshInput.val();

            if (val < 2) {
                this.ui.refreshInput.val(2);
            }

            this._startRefresh();
        },

        _startRefresh: function () {
            var _this = this;

            clearTimeout(this._refreshInterval);

            this._refreshInterval = setInterval(function () {
                _this.trigger('refresh');
            }, this.ui.refreshInput.val() * 1000);
        },

        _stopRefresh: function () {
            clearTimeout(this._refreshInterval);
        }
    });

    return GraphicsControlView;
});
