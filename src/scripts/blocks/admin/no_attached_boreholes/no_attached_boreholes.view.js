define(function (require) {
	var Marionette = require('backbone.marionette'),
		Rivets = require('rivets'),

		Cluster = require('entities/cluster.entity'),
		Borehole = require('entities/borehole.entity'),

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
				'_onChecked',
				'_onSelectedClutser',
				'_onSelectedField');

			this.clusters = new Cluster.Collection();
			this.selectedBoreholes = new Borehole.Collection();
		},

		getTemplate: function () {
			if (this.model.get('noAttachedBoreholes').length) {
				return _.template(Template);
			}
			return _.template(EmptyTemplate);
		},

		onBeforeRender: function () {
			var firstField = this.model.get('fields').at(0);

			if (firstField) {
				this.clusters.reset(firstField.get('clusters').models);
			}
			this._selectedField = firstField;
			this._selectedCluster = this.clusters.at(0);
		},

		onRender: function () {
			this.binding = Rivets.bind(this.el, {
				boreholes: this.model.get('noAttachedBoreholes'),
				fields: this.model.get('fields'),
				clusters: this.clusters,
				view: this
			});
		},

		saveSelectedBoreholes: function () {
			var checkedIds = new Borehole.Collection(
				this.model.get('noAttachedBoreholes').where({
					isChecked: true
				})).pluck('id');
			this.trigger('view:saveBoreholes', {
				field: this._selectedField.get('id'),
				cluster: this._selectedCluster.get('id'),
				boreholeIds: checkedIds
			});
		},

		_onChecked: function (ev) {
			var checkeds = this.model.get('noAttachedBoreholes').where({
				isChecked: true
			});
			if (checkeds.length) {
				this.ui.saveBtn.attr('disabled', false);
			} else {
				this.ui.saveBtn.attr('disabled', true);
			}
		},

		_onSelectedField: function (ev) {
			var target = ev.currentTarget,
				fieldId = target[target.selectedIndex].value;

			var field = this.model.get('fields')
				.findWhere({id: fieldId});

			this.clusters.reset(field.get('clusters').models);
			this._selectedField = field;
		},

		_onSelectedClutser: function (ev) {
			var target = ev.currentTarget,
				clusterId = target[target.selectedIndex].value;

			this._selectedCluster = this._selectedField.get('clusters')
				.findWhere({id: clusterId});
		}
	});

	return NoAttachedBoreholesView;
});
