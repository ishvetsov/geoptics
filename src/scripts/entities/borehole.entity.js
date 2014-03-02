define(function (require) {
    'use strict';
    var Backbone = require('backbone'),
        Associations = require('backbone.associations'),

        Utils = require('core/utils'),
        AppConfig = require('configs/app.config'),

        PSensor = require('./psensor.entity'),
        TSensor = require('./tsensor.entity'),
        Comment = require('./comment.entity');

    var Borehole = Backbone.AssociatedModel.extend({
        defaults: {
            id: '',
            code: '',               // Обозначение
            location: '',           // Местоположение
            number: '',             // Номер
            fieldStation: '',            // Промысел 
            ownerCompany: '',       // Компания владелец
            serviceCompany: '',     // Сервисная компания
            paramsDescription: '',  // Текстовое описание параметров скважины
            installedEquipmentDescription: '', // Описание установленного оборудования
            altitude: '',           // Высота над уровнем моря
            craterDepth: '',        // Глубина воронки
            bottomholeDepth: '',    // Глубина забоя
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
            }
        ],

        urlRoot: AppConfig.rest.boreholes,

        fetchTsensors: Utils.fetchChild('tsensors'),
        fetchPsensors: Utils.fetchChild('psensors'),

        initialize: function () {
            _.bindAll(this, 'fetchTsensors', 'fetchPsensors');
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
