/* global _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),

        GraphicsTemplate = require('text!./prime_graphics.template.html');

    var GraphicsView = Marionette.ItemView.extend({
        template: _.template(GraphicsTemplate),
        className: 'graphics',

        initialize: function () {},

        onRender: function () {}
    });

    return GraphicsView;
});
