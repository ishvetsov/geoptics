/* global _ */

define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),

        AppConfig = require('configs/app.config'),

        Template = require('text!./fields.template.html'),
        EmptyTemplate = require('text!./fields_empty.template.html');

    // function showHideSubItems (ev) {
    //     $(ev.currentTarget).next().toggle();
    // }

    var FieldsView = Marionette.ItemView.extend({
        className: 'admin_fields',

        initialize: function () {
            _.bindAll(this, 'expandField');
        },

        getTemplate: function () {
            if (this.collection.length) {
                return _.template(Template);
            }
            return _.template(EmptyTemplate);
        },

        onRender: function () {
            this.binding = Rivets.bind(this.el, {
                fields: this.collection,
                view: this
            });
        },

        _expand: function (ev, model, children, url) {
            children = model.get(children);

            if (children.size()) {
                $(ev.currentTarget).next().toggle();
            } else {
                children.fetch({
                    url: url,
                    data: {id: model.get('id')}
                }).then(function () {
                    $(ev.currentTarget).next().toggle();
                });
            }
        },

        expandField: function (ev, data) {
            this._expand(ev, data.field, 'clusters',
                AppConfig.rest.adminClusters);
        },

        // expandField: function (ev, data) {
        //     var field = data.field;

        //     field.get('clusters').fetch({
        //         url: AppConfig.rest.adminClusters,
        //         data: {id: field.id}
        //     }).then(function () {
        //         showHideSubItems(ev);
        //     });
        // },

        // expandCluster: function (ev, data) {
        //     showHideSubItems(ev);
        // },

        // expandBorehole: function (ev, data) {
        //     showHideSubItems(ev);
        // }
    });

    return FieldsView;
});
