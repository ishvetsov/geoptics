define(function (require) {
    'use strict';
    var Borehole = require('entities/borehole.entity');

    var BoreholeExtend = Borehole.Model.extend({
        defaults: {
            isChecked: false
        }
    });

    var BoreholeCollectionExtend = Borehole.Collection.extend({
        model: BoreholeExtend
    });

    return {
        Model: BoreholeExtend,
        Collection: BoreholeCollectionExtend
    };
});
