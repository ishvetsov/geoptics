define(function (require) {
    'use strict';

    var TooltipTemplate = require('text!./tooltip.template.html');

    var config =  {
        tooltip: {
            formatter: function () {
                return _.template(TooltipTemplate, this);
            }
        },

        xAxis: {
            text: 'Глубина, м'
        },

        yAxis: {
            text: 'Температура, °C'
        },

        getZoomData: function (ev) {
            return {
                type: 'tsensors',
                requestData: {
                    startDepth: ev.min,
                    endDepth: ev.max
                }
            };
        }
    };

    return config;
});
