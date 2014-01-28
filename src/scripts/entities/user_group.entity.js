/* global _ */

define(function (require) {
    'use strict';

    var Backbone = require('backbone'),
        Associations = require('backbone.associations');

    var UserGroupModel = Backbone.AssociatedModel.extend({
        url: '/',
        initialize: function () {
            _.bindAll(this, 'destroy');

            // Dummy
            this.set('id', Math.random().toString(16).slice(2, 10));
        },

        destroy: function () {
            Backbone.AssociatedModel.prototype.destroy.call(this);
        },
    });

    return {
        Model: UserGroupModel
    };
});
