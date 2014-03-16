/* global _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),
        HighstockExporting = require('highstock.exporting'),

        GraphicsOptions = require('./graphics.options');

    var CurrentChart;

    var GraphicsView = Marionette.ItemView.extend({
        className: 'graphics',
        template: function () {},

        initialize: function () {
            _.bindAll(this, 'exportGraphic');
        },

        ui: {
            container: '.graphics_container'
        },

        getGraphicOptions: function () {
            var _this = this,
                series = [];

            _this.collection.each(function (g) {
                if (g.get('points').attributes.values) {
                    series.push({
                        name: g.get('borehole').get('code'),
                        data: g.get('points').attributes.values,
                        tooltip: {
                            valueDecimals: 2
                        }
                    });
                }
            });

            return GraphicsOptions.get(series);
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

        renderGraphic: function () {
            var chartingOptions = this.getGraphicOptions();
            this.$el.highcharts(chartingOptions);
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
