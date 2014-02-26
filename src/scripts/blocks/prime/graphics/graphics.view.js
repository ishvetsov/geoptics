/* global _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),
        HighstockExporting = require('highstock.exporting'),

        Template = require('text!./graphics.template.html');

    var CurrentChart;

    var GraphicsView = Marionette.ItemView.extend({
        template: _.template(Template),
        className: 'graphics',

        initialize: function () {
            _.bindAll(this, 'exportGraphic');
        },

        ui: {
            container: '.graphics_container'
        },

        getGraphicOptions: function () {
            var options = {
                chart: {
                    className: 'currentChart',
                    type: 'line',
                    zoomType: 'x',
                    reflow: false
                },

                credits: {
                    enabled: false
                },

                rangeSelector : {
                    selected : 1
                },

                zoom: {
                    enabled: false
                },

                exporting: {
                    enabled: false
                },

                title : {
                    text : ''
                },

                xAxis: {
                    events: {
                        setExtremes: function(event) {
                            //Это проверка на кнопку зума
                            if(typeof(event.rangeSelectorButton)!== 'undefined') {
                                alert(event.rangeSelectorButton.count + "  " + event.rangeSelectorButton.type )
                            }
                        },
                        afterSetExtremes: function(event) {
                        }
                    }
                },

                plotOptions: {
                    series: {
                        cursor: 'pointer',
                        point: {
                            events: {
                                click: function() {
                                    alert ('Category: '+ this.category +', value: '+ this.y);
                                }
                            }
                        },
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: true
                                }
                            }
                        }
                    }
                },

                tooltip: {
                    crosshairs: true,
                    shared: true,
                    useHTML: true,
                    headerFormat: '<small>{point.key} м</small><table>',
                    pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
                        '<td style="text-align: right"><b>{point.y} °C</b></td></tr>',
                    footerFormat: '</table>',
                    valueDecimals: 2
                },

                series : [{
                    name : 'Скважина 258',
                    data : [
                        7.0, 6.9, 9.5,
                        14.5, 18.2, 21.5,
                        25.2, 26.5, 23.3,
                        18.3, 13.9, 9.6
                    ],
                    tooltip: {
                        valueDecimals: 2
                    }
                }]
            };
            return options;
        },

        findGraphic: function getChartReferenceByClassName(className) {
            var cssClassName = className;
            var foundChart = null;

            $(Highcharts.charts).each(function(i,chart){
                if (typeof(chart)!== 'undefined'){
                    if(chart.container.classList.contains(cssClassName)){
                        foundChart = chart;
                        return;
                    };
                }
            });
            return foundChart;
        },

        renderGraphic: function () {
            var chartingOptions = this.getGraphicOptions();
            this.ui.container.highcharts(chartingOptions);
            CurrentChart=  this.findGraphic('currentChart');
        },

        onRender: function () {
            this.binding = Rivets.bind(this.el, {
                model: this.model,
                view: this
            });

            this.renderGraphic();
        },

        exportGraphic: function(e){
            switch ($(e.target).attr('data-exportType'))
            {
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
