define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),

        GraphicsBunchTemplate = require('text!./graphics_bunch.template.html');

    var GraphicsBunchLayout = Marionette.Layout.extend({
        template: _.template(GraphicsBunchTemplate),
        className: 'graphics-bunch',

        regions: {
            control: '.graphics-bunch_control',
            graphic: '.graphics-bunch_graphic'
        }
    });

    return GraphicsBunchLayout;
});
