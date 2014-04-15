define(function (require) {
    'use strict';
    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),

        BoreholePointPreset = require('entities/borehole_point_preset.entity'),

        Template = require('text!./borehole_point.template.html');

    var Config = {
        create: {
            title: 'Новая примечательная точка',
            saveCaption: 'Создать'
        },
        edit: {
            title: 'Редактирование примечательной точки',
            saveCaption: 'Сохранить'
        }
    };

    var BoreholePointView = Marionette.ItemView.extend({
        template: _.template(Template),

        className: 'modal fade',

        ui: {
            presetSelector: 'select',
            value: 'input'
        },

        events: {
            'hidded.bs.modal': '_onHiddenTriggered',
            'click button.save': '_onClickSave',
            'change select': '_onSelectedPreset'
        },

        initialize: function () {
            _.bindAll(this, '_changeTypeValueInput', '_onSelectedPreset',
                '_changePreset');
        },

        onRender: function () {
            this.binding = Rivets.bind(this.el, {
                point: this.model,
                presets: this.presets,
                title: this._config.title,
                saveCaption: this._config.saveCaption
            });

            this.$el.modal('show');
            this.delegateEvents();

            var _this = this;
            if (!_this.model.isNew()) {
                _this.ui.presetSelector.find('option').each(function () {
                    var $el = $(this);
                    if ($el.attr('id') === _this.model.get('presetId')) {
                        $el.attr('selected', true);
                    } else {
                        $el.removeAttr('selected');
                    }
                });
                _this._changeTypeValueInput();
            } else {
                var $option = $(_this.ui.presetSelector.find('option')[0]);

                var preset = _this.presets.findWhere({id: $option.attr('id')});
                _this._changePreset(preset);
            }
        },

        setMode: function (mode) {
            this._config = Config[mode];
        },

        _onHiddenTriggered: function () {
            this.remove();
        },

        _onClickSave: function () {
            this.trigger('save', this.model);
        },

        _changeTypeValueInput: function () {
            switch (this.model.get('preset.propertyType')) {
                case BoreholePointPreset.PropertyType.TEXT:
                    this.ui.value.attr('type', 'text');
                    break;
                case BoreholePointPreset.PropertyType.NUMBER:
                    this.ui.value.attr('type', 'number');
                    break;
                case BoreholePointPreset.PropertyType.DATETIME:
                    this.ui.value.attr('type', 'datetime-local');
                    this.ui.value.attr('step', 0.001);
                    break;
            }
        },

        _onSelectedPreset: function (ev) {
            var target = $(ev.currentTarget[ev.currentTarget.selectedIndex]),
                id = target.attr('id'),
                preset = this.presets.findWhere({id: id});
            this._changePreset(preset);
        },

        _changePreset: function (preset) {
            this.model.set('presetId', preset.get('id'));
            this.model.set('preset', preset);
            this.model.set('value', '');
            this._changeTypeValueInput();
        }
    });

    return BoreholePointView;
});
