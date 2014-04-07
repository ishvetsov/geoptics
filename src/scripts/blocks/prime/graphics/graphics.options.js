define(function (require) {
    'use strict';

    var moment = require('moment');

    var config = {
        tsensors: require('./tsensors/tsensors.config'),
        psensors: require('./psensors/psensors.config')
    };

    var getOptions = function (options) {
        return {
            chart: {
                className: 'main-graphic',
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
                type: config[options.sensorsType].xAxis.type,

                title: {
                    text: config[options.sensorsType].xAxis.text,
                    style: {fontWeight: 'normal'},
                    margin: 40
                },

                dateTimeLabelFormats: config[options.sensorsType]
                    .xAxis.dateTimeLabelFormats,

                events: {
                    afterSetExtremes: function (ev) {
                        options.view.trigger('zoom',
                            config[options.sensorsType].getZoomData(ev));
                    }
                },

                plotLines: options.plotLines
            },

            yAxis: {
                title: {
                    text: config[options.sensorsType].yAxis.text,
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
                formatter: config[options.sensorsType].tooltip.formatter,
                valueDecimals: 2
            },

            series: options.series
        };
    };

    return {
        get: getOptions
    };
});
