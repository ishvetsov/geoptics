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
            refreshInput: '.graphics-control_autorefresh-input',
            zoom: '.graphics-control_zoom'
        },

        events: {
            'click @ui.type': '_onTypeSelected',
            'click @ui.period': '_onPeriodSelected',
            'click @ui.exports': '_onExportsClicked',

            'change @ui.refreshCheck': '_onRefreshCheckChanged',
            'change @ui.refreshInput': '_onRefreshInputChanged',

            'click @ui.zoom': '_onZoomClicked'
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

        _getChangeHandler: function (param) {
            return function (ev) {
                this.model.set(param, $(ev.currentTarget).data('value'));
                this.trigger('state:change', this.model.toJSON());
            };
        },

        _setRefreshState: function (state) {
            this.ui.refreshInput.prop('disabled', state);
            this[state ? '_startRefresh' : '_stopRefresh']();
        },

        _onExportsClicked: function (ev) {
            ev.preventDefault();
            this.trigger(
                'export:click',
                $(ev.currentTarget).data('export-type'));
        },

        _onRefreshCheckChanged: function () {
            this._refreshState =  this.ui.refreshCheck.prop('checked');
            this._setRefreshState(this._refreshState);
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
        },

        _onZoomClicked: function () {
            this.ui.zoom.addClass('hide');
            this._setRefreshState(this._refreshState);
            this.trigger('state:change', this.model.toJSON());
        }
    });

    return GraphicsControlView;
});
