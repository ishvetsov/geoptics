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
            'change select.select-fields': '_onSelectedField',
            'change .select-clusters': '_onSelectedClutser',
            'click input': '_onChecked'
        },

        initialize: function () {
            _.bindAll(this,
                'apply',
                '_onChecked',
                '_onSelectedClutser',
                '_onSelectedField',
                '_updateStateSaveBtn',
                '_firstInitSelects');

            this._clusters = new Cluster.Collection();
        },

        getTemplate: function () {
            if (this.collection.length) {
                return _.template(Template);
            }
            return _.template(EmptyTemplate);
        },

        onRender: function () {
            this._firstInitSelects();

            this.binding = Rivets.bind(this.el, {
                boreholes: this.collection,
                fields: this._fields,
                clusters: this._clusters,
                view: this
            });
        },

        apply: function () {
            var _this = this;
                _this._selectedBoreholes = this.collection.where({isChecked: true});

            _this._selectedBoreholes.forEach(function (b) {
                _this._selectedCluster.get('boreholes').add(b);
            });

            this.trigger('view:apply', {
                field: _this._selectedField,
                cluster: _this._selectedCluster
            });
        },

        updateBoreholeList: function () {
            this.collection.remove(this._selectedBoreholes);
            this._updateStateSaveBtn();
        },

        setFields: function (fields) {
            this._fields = fields;
        },

        _firstInitSelects: function () {
            var firstField = this._fields.at(0);

            if (firstField) {
                this._clusters.reset(firstField.get('clusters').models);
                this._selectedCluster = this._clusters.at(0);
            }

            this._selectedField = firstField;
        },

        _updateStateSaveBtn: function () {
            var checkeds = this.collection.where({isChecked: true});
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
            var target = ev.currentTarget,
                id = target[target.selectedIndex].value;

            var field = this._fields.findWhere({id: id});

            this._clusters.reset(field.get('clusters').models);
            this._selectedField = field;
        },

        _onSelectedClutser: function (ev) {
            var target = ev.currentTarget,
                id = target[target.selectedIndex].value;

            this._selectedCluster = this._selectedField.get('clusters')
                .findWhere({id: id});
        }
    });

    return NoAttachedView;
});
