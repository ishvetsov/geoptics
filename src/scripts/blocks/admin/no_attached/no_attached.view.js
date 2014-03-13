define(function (require) {
    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),

        Cluster = require('entities/cluster.entity'),
        Borehole = require('entities/borehole.entity'),
        AppConfig = require('configs/app.config'),

        Template = require('text!./no_attached.template.html'),
        EmptyTemplate = require('text!./no_attached_empty.template.html');

    var NoAttachedView = Marionette.ItemView.extend({
        className: 'admin_no-attached',

        ui: {
            saveBtn: 'button'
        },

        events: {
            'change .select-field':     '_onSelectedField',
            'change .select-cluster':   '_onSelectedClutser',
            'click input':              '_onChecked'
        },

        initialize: function () {
            var _this = this;

            _.bindAll(_this,
                'apply',
                '_onChecked',
                '_onSelectedClutser',
                '_onSelectedField',
                '_updateStateSaveBtn');

            _this.model.on('firstsync:clusters', function () {
                _this.$('.select-field').trigger('change');
                _this.$('.select-cluster').trigger('change');
            });
            
            this.model.get('fields').fetch();
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

        update: function () {
            this._removeCheckeds();
            this._updateStateSaveBtn();
        },

        _removeCheckeds: function () {
            var checkeds = this.model.get('boreholes').where({isChecked: true});
            this.model.get('boreholes').remove(checkeds);

            if (!this.model.get('boreholes').length) {
                this.render();
            }
        },

        _updateStateSaveBtn: function () {
            var checkeds = this.model.get('boreholes').where({isChecked: true});

            if (checkeds.length) {
                this.ui.saveBtn.attr('disabled', false);
            } else {
                this.ui.saveBtn.attr('disabled', true);
            }
        },

        _onChecked: function (ev) {
            this._updateStateSaveBtn();
        },

        _onSelectedField: function (ev) {
            var id = ev.currentTarget[ev.currentTarget.selectedIndex].value,
                field = this.model.get('fields').findWhere({id: id});

            this.model.set('curField', field);
        },

        _onSelectedClutser: function (ev) {
            var id = ev.currentTarget[ev.currentTarget.selectedIndex].value,
                cluster = this.model.get('clusters').findWhere({ id: id });

            this.model.set('curCluster', cluster);
        }
    });

    return NoAttachedView;
});
