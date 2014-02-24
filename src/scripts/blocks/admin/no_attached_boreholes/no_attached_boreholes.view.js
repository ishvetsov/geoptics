define(function (require) {
    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),

        Cluster = require('entities/cluster.entity'),
        AppConfig = require('configs/app.config'),
        Borehole = require('./borehole.entity'),
        Template = require('text!./no_attached_boreholes.template.html'),
        EmptyTemplate = require('text!./no_attached_boreholes_empty.template.html');

    var NoAttachedBoreholesView = Marionette.ItemView.extend({
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
            _.bindAll(this, 'saveSelectedBoreholes',
                '_onChecked', '_onSelectedClutser', '_onSelectedField');

            this._clusters = new Cluster.Collection();
        },

        template: _.template(Template),

        getTemplate: function () {
            if (this.collection.length) {
                return _.template(Template);
            }
            return _.template(EmptyTemplate);
        },

        onBeforeRender: function () {
            var firstField = this._fields.at(0);

            if (firstField) {
                this._clusters.reset(firstField.get('clusters').models);
                this._selectedCluster = this._clusters.at(0);
            }

            this._selectedField = firstField;
        },

        onRender: function () {
            this.binding = Rivets.bind(this.el, {
                boreholes: this.collection,
                fields: this._fields,
                clusters: this._clusters,
                view: this
            });
        },

        saveSelectedBoreholes: function () {
            this._selectedBoreholes = new Borehole.Collection(
                this.collection.where({isChecked: true}));

            var result = {
                field: this._selectedField,
                cluster: this._selectedCluster,
                boreholesIds: this._selectedBoreholes.pluck('id')
            };

            this.trigger('view:save', result);
        },

        removeCheckedBoreholes: function () {
            // debugger;
            this.collection.remove(this._selectedBoreholes.models);
            this._onChecked();
        },

        setFields: function (fields) {
            this._fields = fields;
        },

        _onChecked: function (ev) {
            var checkeds = this.collection.where({isChecked: true});
            if (checkeds.length) {
                this.ui.saveBtn.attr('disabled', false);
            } else {
                this.ui.saveBtn.attr('disabled', true);
            }
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

    return NoAttachedBoreholesView;
});
