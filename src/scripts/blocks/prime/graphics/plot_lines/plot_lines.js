define(function (require) {
    'use strict';

    var _ = require('underscore'),
        moment = require('moment'),

        MomentTemplate = require('text!./moment.template.html'),
        PerforationTemplate = require('text!./perforation.template.html'),
        DepthTemplate = require('text!./depth.template.html');

    var sets = {
        psensors: ['moments'],
        tsensors: ['perforations', 'depths']
    };

    var linesConfig = {
        moments: function (m, color) {
            return {
                color: color,
                dashStyle: 'LongDash',
                width: 1,
                value: +new Date(m.get('date')),
                label: {
                    align: 'right',
                    text: _.template(MomentTemplate, {
                        color: color,
                        value: moment(m.get('date')).format('YYYY-MM-DD HH:mm:ss')
                    }),
                    useHTML: true
                },
                zIndex: 7
            }
        },

        perforations: function (p, color) {
            return {
                color: color,
                dashStyle: 'ShortDot',
                width: 1,
                value: p.get('depth'),
                label: {
                    align: 'right',
                    text: _.template(PerforationTemplate, {
                        color: color,
                        value: p.get('depth')
                    }),
                    useHTML: true
                },
                zIndex: 7
            };
        },

        depths: function (d, color) {
            return {
                color: color,
                dashStyle: 'Solid',
                width: 1,
                value: d.get('value'),
                label: {
                    align: 'right',
                    text: _.template(DepthTemplate, {
                        color: color,
                        value: d.get('value')
                    }),
                    useHTML: true
                },
                zIndex: 7
            }
        }
    };

    return {
        getLines: function (borehole, type) {
            var set = sets[type],
                result = [];

            set.forEach(function (fieldName) {
                borehole.get(fieldName).each(function (item) {
                    result.push(linesConfig[fieldName](item, borehole.baseColor));
                });
            });

            return result;
        }
    }
});
