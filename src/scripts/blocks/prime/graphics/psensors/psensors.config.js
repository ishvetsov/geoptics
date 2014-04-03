define(function (require) {
    'use strict';

    var TooltipTemplate = require('text!./tooltip.template.html');

    var config = {
        tooltip: {
            formatter: function () {
                return _.template(TooltipTemplate, {
                    x: Highcharts.dateFormat('%H:%M:%S.%L', this.x),
                    y: this.y,
                    points: this.points
                });
            }
        },

        xAxis: {
            text: 'Время',
            type: 'datetime',

            dateTimeLabelFormats: {
                millisecond: '%H:%M:%S.%L'
            }
        },

        yAxis: {
            text: 'Давление, бар'
        },

        getZoomData: function (ev) {
            return {
                type: 'psensors',
                requestData: {
                    startDate: Math.ceil(ev.min),
                    endDate: Math.ceil(ev.max)
                }
            };
        }
    };

    return config;
});
