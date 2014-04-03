define(function (require) {
    'use strict';

    var moment = require('moment');

    var config = {
        tsensors: require('./tsensors/tsensors.config'),
        psensors: require('./psensors/psensors.config')
    };

    var getOptions = function (series, sensorsType, view) {
        return {
            chart: {
                className: 'currentChart',
                type: 'line',
                zoomType: 'x',
                inverted: true,

                resetZoomButton: {
                    theme: {
                        display: 'none'
                    }
                }
            },

            legend: {
                align: 'right',
                verticalAlign: 'top',
                layout: 'vertical',
                borderWidth: 0
            },

            credits: {enabled: false},

            rangeSelector: {selected : 1},

            zoom: {enabled: false},

            exporting: {enabled: false},

            title: {text: null},

            xAxis: {
                type: config[sensorsType].xAxis.type,

                title: {
                    text: config[sensorsType].xAxis.text,
                    style: {fontWeight: 'normal'},
                    margin: 40
                },

                dateTimeLabelFormats: config[sensorsType].xAxis.dateTimeLabelFormats,

                events: {
                    afterSetExtremes: function (ev) {
                        view.trigger('zoom', config[sensorsType].getZoomData(ev));
                    }
                }
            },

            yAxis: {
                title: {
                    text: config[sensorsType].yAxis.text,
                    style: {fontWeight: 'normal'},
                    margin: 40
                }
            },

            plotOptions: {
                series: {
                    animation: false,

                    marker: {
                        enabled: false,

                        states: {
                            hover: {enabled: true}
                        }
                    }
                }
            },

            tooltip: {
                crosshairs: true,
                shared: true,
                useHTML: true,
                formatter: config[sensorsType].tooltip.formatter,
                valueDecimals: 2
            },

            series: series
        };
    };

    return {
        get: getOptions
    };
});
