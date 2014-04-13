define(function (require) {
    'use strict';
    var Marionette = require('backbone.marionette'),
        Rivets = require('rivets'),

        Template = require('text!./borehole_point_preset.template.html');

    var Config = {
        create: {
            title: 'Новый шаблон',
            saveCaption: 'Создать'
        },
        edit: {
            title: 'Редактирование шаблона',
            saveCaption: 'Сохранить'
        }
    };

    var BoreholePointPresetView = Marionette.ItemView.extend({
        template: _.template(Template),
        className: 'modal fade',

        ui: {
            selector: 'select'
        },

        events: {
            'hidded.bs.modal': '_onHiddenTriggered',
            'click button.save': '_onClickSave',
            'change .select-prop-type': '_onSelectedPropType'
        },

        setMode: function (mode) {
            this._config = Config[mode];
        },

        onRender: function () {
            this.binding = Rivets.bind(this.el, {
                preset: this.model,
                title: this._config.title,
                saveCaption: this._config.saveCaption
            });

            this.$el.modal('show');
            this.delegateEvents();

            var _this = this;
            this.ui.selector.find('option').each(function () {
                var $el = $(this);
                if ($el.data('type') === _this.model.get('propertyType')) {
                    $el.attr('selected', true);
                } else {
                    $el.removeAttr('selected');
                }
            });
        },

        _onHiddenTriggered: function () {
            this.remove();
        },

        _onClickSave: function () {
            this.model.save();
            this.trigger('save');
        },

        _onSelectedPropType: function (ev) {
            var type = ev.currentTarget[ev.currentTarget.selectedIndex].value;
            this.model.set('propertyType', type);
        }
    });

    return BoreholePointPresetView;
});
