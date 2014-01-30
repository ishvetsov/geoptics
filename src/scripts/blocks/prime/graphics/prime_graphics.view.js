/* global _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),

        GraphicsTemplate = require('text!./prime_graphics.template.html');

    var GraphicsView = Marionette.ItemView.extend({
        template: _.template(GraphicsTemplate),
        className: 'graphics',
        el: $('#container'),

    render: (function () {
            $('#container').highcharts({
                chart: {
                    type: 'line'
                },
                series: [{
                    name: 'Tokyo',
                    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
                    }]
            });
        })
    });
    return GraphicsView;
});
