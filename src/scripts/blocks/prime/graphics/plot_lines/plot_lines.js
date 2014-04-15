define(function (require) {
    'use strict';

    var _ = require('underscore'),
        moment = require('moment'),

        BoreholePointPreset = require('entities/borehole_point_preset.entity'),

        LabelTemplate = require('text!./label.template.html');

    var getLineOptions = function (data, color) {
        var preset = data.get('preset'),
            isDate = preset.get('propertyType')
                == BoreholePointPreset.PropertyType.DATETIME,
            value = data.get('value');

        return {
            color: color,
            dashStyle: 'Solid',
            width: 1,
            value: isDate ? +new Date(value) : value,
            label: {
                align: 'right',
                text: _.template(LabelTemplate, {
                    color: color,
                    value: isDate ? moment(value).format('YYYY-MM-DD HH:mm:ss') : value,
                    symbol: preset.get('symbol')
                }),
                useHTML: true
            },
            zIndex: 7
        };
    };

    return {
        getLines: function (borehole, type) {
            return borehole.get('points').map(function (item) {
                return getLineOptions(item, borehole.baseColor)
            });
        }
    }
});
