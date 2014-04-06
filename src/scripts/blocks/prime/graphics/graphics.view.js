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
            var series = [],
                plotLines = [];

            this.collection.each(function (g) {
                if (g.get('points').attributes.values) {

                    var color = 'black';

                    series.push({
                        name: g.get('borehole').get('code') +
                            ', Датчик ' +
                            g.get('sensor').get('channelNumber'),
                        data: g.get('points').attributes.values,
                        tooltip: {
                            valueDecimals: 2
                        }
                    });

                   
                    // Тестовая реализация
                    var perforations = g.get('borehole').get('perforations'),
                        moments = g.get('borehole').get('moments'),
                        depths = g.get('borehole').get('depths');

                    if (_this._sensorsType === 'psensors') {
                        moments.each(function (m) {
                            plotLines.push({
                                color: color,
                                dashStyle: 'LongDash',
                                width: 1,
                                value: +new Date()
                            });
                        });
                    } else if (_this._sensorsType === 'tsensors') {
                        perforations.each(function (p) {
                            plotLines.push({
                                color: color,
                                dashStyle: 'ShortDot',
                                width: 1,
                                value: p.get('depth'),
                                label: {
                                    align: 'right',
                                    text: '<div class="perforation-symbol" ' +
                                        'style="border-color:' + color + '; color:' + color + '"' +
                                        'title="' + p.get('depth') + 'м: ' + 'Комментарий' + '"' +
                                        '>П</div>',
                                    useHTML: true
                                }
                            });
                        });

                        depths.each(function (d) {
                            plotLines.push({
                                color: color,
                                dashStyle: 'Solid',
                                width: 1,
                                value: d.get('value'),
                                label: {
                                    align: 'right',
                                    text: '<div class="depth-symbol" ' +
                                        'style="border-color:' + color + '; color:' + color + '"' +
                                        'title="' + d.get('value') + 'м: ' + 'Комментарий' + '"' +
                                        '>h</div>',
                                    useHTML: true
                                }
                            });
                        });
                    }
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
