define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),
        HighstockExporting = require('highstock.exporting'),
        moment = require('moment'),

        Utils = require('core/utils'),

        PlotLines = require('./plot_lines/plot_lines'),
        GraphicsTemplate = require('text!./graphics.template.html'),
        GraphicsOptions = require('./graphics.options');

    var GraphicsView = Marionette.ItemView.extend({
        className: 'graphics',
        template: _.template(GraphicsTemplate),

        initialize: function () {
            _.bindAll(this, 'exportGraphic');
        },

        getGraphicOptions: function () {
            var _this = this;
            var series = [],
                plotLines = [];

            this.collection.each(function (g) {
                var graphicValues = g.get('points').attributes.values;

                if (graphicValues) {
                    var borehole = g.get('borehole'),
                        color = borehole.baseColor;

                    series.push({
                        name: g.getSeriesName(),
                        data: graphicValues,
                        tooltip: { valueDecimals: 2 },
                        color: Utils.colors.shade(color, g.get('sensor').rate)
                    });

                    var lines = PlotLines.getLines(borehole, _this._sensorsType);

                    plotLines = plotLines.concat(lines);
                }
            });

            return GraphicsOptions.get({
                series: series,
                sensorsType: this._sensorsType,
                view: this,
                plotLines: plotLines
            });
        },

        findGraphic: function (className) {
            var foundChart = null;

            Highcharts.charts.forEach(function (chart) {
                if (chart && $(chart.container).hasClass(className)) {
                    return foundChart = chart;
                }
            });

            return foundChart;
        },

        renderGraphic: function (sensorsType) {
            var $container = this.$el.find('.graphics_container');

            if (sensorsType) { this._sensorsType = sensorsType; }
            if (!$container.length) { return; }

            $container.highcharts(this.getGraphicOptions());
        },

        onRender: function () {
            this._currentGraphic = this.findGraphic('main-graphic');
            this.renderGraphic();
        },

        exportGraphic: function (type) {
            switch (type) {
                case 'print':
                    this._currentGraphic.print();
                    break;
                case 'pdf':
                    this._currentGraphic.exportChart({type: "application/pdf"});
                    break;
                case 'svg':
                    this._currentGraphic.exportChart({type: "image/svg+xml"});
                    break;
            }
        }
    });

    return GraphicsView;
});
