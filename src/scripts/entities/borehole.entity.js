define(function (require) {
    'use strict';
    var Backbone = require('backbone'),
        Associations = require('backbone.associations'),

        Utils = require('core/utils'),
        AppConfig = require('configs/app.config'),

        PSensor = require('./psensor.entity'),
        TSensor = require('./tsensor.entity'),
        Comment = require('./comment.entity'),
        Perforation = require('./perforation.entity'),
        Depth = require('./depth.entity'),
        Moment = require('./moment.entity');

    var Borehole = Backbone.AssociatedModel.extend({
        defaults: {
            id: null,
            code: '',               // Обозначение
            location: '',           // Местоположение
            number: '',             // Номер
            fieldStation: '',       // Промысел 
            ownerCompany: '',       // Компания владелец
            serviceCompany: '',     // Сервисная компания
            paramsDescription: '',  // Текстовое описание параметров скважины
            installedEquipmentDescription: '', // Описание установленного оборудования
            altitude: '',           // Высота над уровнем моря
            craterDepth: '',        // Глубина воронки
            bottomholeDepth: '',    // Глубина забоя
            isChecked: false,
            perforations: [],       // Список зон перфораций 
            depths: [],             // Список интересных глубин
            moments: [],            // Список интересных моментов времени
            сomments: [],           // Комментарии
            tsensors: [],           // Список датчиков температуры
            psensors: []            // Список датчиков давления
        },

        relations: [
            {
                type: Backbone.Many,
                key: 'сomments',
                relatedModel: Comment.Model,
                collectionType: Comment.Collection
            },
            {
                type: Backbone.Many,
                key: 'tsensors',
                relatedModel: TSensor.Model,
                collectionType: TSensor.Collection
            },
            {
                type: Backbone.Many,
                key: 'psensors',
                relatedModel: PSensor.Model,
                collectionType: PSensor.Collection
            },
            {
                type: Backbone.Many,
                key: 'perforations',
                relatedModel: Perforation.Model,
                collectionType: Perforation.Collection
            },
            {
                type: Backbone.Many,
                key: 'depths',
                relatedModel: Depth.Model,
                collectionType: Depth.Collection
            },
            {
                type: Backbone.Many,
                key: 'moments',
                relatedModel: Moment.Model,
                collectionType: Moment.Collection
            }
        ],

        urlRoot: AppConfig.rest.boreholes,

        fetchTSensors: Utils.fetchChild('tsensors'),
        fetchPSensors: Utils.fetchChild('psensors'),

        initialize: function () {
            this.get('psensors')._selfKey = 'psensors';
            this.get('tsensors')._selfKey = 'tsensors';

            _.bindAll(this,
                'fetchTSensors',
                'fetchPSensors',
                'fetchChildren');
        }
    });

    _.extend(Borehole.prototype, {
        fetchChildren: function () {
            return $.when(this.fetchTSensors(), this.fetchPSensors())
                .then(_.bind(this._onChildrenFetched, this));
        },


        // TODO: Убрать работу с цветом из базовой сущности
        _onChildrenFetched: function () {
            this._setSensorsRate(this.get('tsensors'));
            this._setSensorsRate(this.get('psensors'));

            this.baseColor = Utils.colors.HSLtoHEX(_.random(0, 360), 100, 20);
        },

        _setSensorsRate: function (sensors) {
            sensors.each(function (sensor, i) {
                sensor.rate = (i + 1) / sensors.length * .7;
            });
        }
    });

    var BoreholeCollection = Backbone.Collection.extend({
        model: Borehole,

        url: function () {
            return this.parents[0].url() + AppConfig.rest.boreholes;
        }
    });

    return {
        Model: Borehole,
        Collection: BoreholeCollection
    };
});
