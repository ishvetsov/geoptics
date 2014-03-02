define(function (require) {
    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),

        Cluster = require('entities/cluster.entity'),
        Borehole = require('entities/borehole.entity'),
        AppConfig = require('configs/app.config'),

        Template = require('text!./no_attached.template.html'),
        EmptyTemplate = require('text!./no_attached_empty.template.html');

    var NoAttachedView = Marionette.ItemView.extend({
        className: 'admin_no-attached-boreholes',

        ui: {
            saveBtn: 'button'
        },

        events: {
            'change .select-fields': '_onSelectedField',
            'change .select-clusters': '_onSelectedClutser',
            'click input': '_onChecked'
        },

        initialize: function () {
            _.bindAll(this,
                'apply',
                '_onChecked',
                '_onSelectedClutser',
                '_onSelectedField',
                '_updateStateSaveBtn');
        },

        getTemplate: function () {
            if (this.model.get('boreholes').length) {
                return _.template(Template);
            }
            return _.template(EmptyTemplate);
        },

        onRender: function () {
            this.binding = Rivets.bind(this.el, {
                boreholes: this.model.get('boreholes'),
                fields: this.model.get('fields'),
                clusters: this.model.get('clusters'),
                view: this
            });
        },

        apply: function () {
            this.trigger('view:apply');
        },

        updateBoreholeList: function () {
            this._updateStateSaveBtn();
        },

        _updateStateSaveBtn: function () {
            // if (checkeds.length) {
            //     this.ui.saveBtn.attr('disabled', false);
            // } else {
            //     this.ui.saveBtn.attr('disabled', true);
            // }
        },

        _onChecked: function (ev) {
            this._updateStateSaveBtn();
        },

        _onSelectedField: function (ev) {
            var target = ev.currentTarget,
                id = target[target.selectedIndex].value;
        },

        _onSelectedClutser: function (ev) {
            var target = ev.currentTarget,
                id = target[target.selectedIndex].value;
        }
    });

    return NoAttachedView;
});
