define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),
        HighstockExporting = require('highstock.exporting'),

        GraphicsTemplate = require('text!./graphics.template.html'),
        GraphicsOptions = require('./graphics.options');

    var CurrentChart;

    var GraphicsView = Marionette.ItemView.extend({
        className: 'graphics',
        template: _.template(GraphicsTemplate),

        initialize: function () {
            _.bindAll(this, 'exportGraphic');
        },

        getGraphicOptions: function () {
            var _this = this;
            this._series = [];

            _this.collection.each(function (g) {
                if (g.get('points').attributes.values) {
                    _this._series.push({
                        name: g.get('borehole').get('code') + ', Датчик ' + g.get('sensor').get('channelNumber'),
                        data: g.get('points').attributes.values,
                        tooltip: {
                            valueDecimals: 2
                        }
                    });
                }
            });

            return GraphicsOptions.get(this._series, this._sensorsType, this);
        },

        findGraphic: function (className) {
            var foundChart = null;

            $(Highcharts.charts).each(function (i, chart) {
                if (typeof chart !== 'undefined'){
                    if ($(chart.container).hasClass(className)) {
                        foundChart = chart;
                        return;
                    }
                }
            });

            return foundChart;
        },

        renderGraphic: function (sensorsType) {
            if (sensorsType) { this._sensorsType = sensorsType; }

            var chartingOptions = this.getGraphicOptions(),
                $container = this.$el.find('.graphics_container');

            if(!$container.length) { return; }

            $container.highcharts(chartingOptions);

            CurrentChart = this.findGraphic('currentChart');

            setTimeout(function () {
                $(window).resize();
            }, 0);
        },

        onRender: function () {
            this.renderGraphic();
        },

        exportGraphic: function (type) {
            switch (type) {
                case 'print':
                    CurrentChart.print();
                    break;
                case 'pdf':
                    CurrentChart.exportChart({type: "application/pdf"});
                    break;
                case 'svg':
                    CurrentChart.exportChart({type: "image/svg+xml"});
                    break;
            }
        }
    });

    return GraphicsView;
});
