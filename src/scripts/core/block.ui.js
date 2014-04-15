/* global _ */

define(function (require) {
    'use strict';

    var Block = require('./block'),
        Factory = require('./factory');

    var BlockUI = Block.extend({
        _createInstance: function (Constructor, options) {
            return _.isFunction(Constructor) ? new Constructor(options) : null;
        },

        _createInstances: function () {
            this._model = this._createInstance(this.model);
            this._collection = this._createInstance(this.collection);
            this._view = this._createInstance(
                this.view,
                _.extend(
                    {
                        model: this._model,
                        collection: this._collection,
                    },
                    this.viewOptions));
        },

        _getDefaultInstanceMap: function () {
            return {
                view: this._view,
                collection: this._collection,
                model: this._model
            };
        },

        getView: function () {
            return this._view;
        },

        /**
         * Помещает представление блока в заданный регион.
         * Если блок содержить метод fetch, он будет вызван.
         *
         * @param region {Region}
         * @param [options] {Object}
         * @returns {Promise|Block}
         */
        render: function (region, options) {
            options = options || {};

            if (_.isFunction(this.fetch) && options.silent !== true) {
                var _this = this;

                return this.fetch(options.data).then(function () {
                    region.show(_this._view);
                });
            }

            region.show(this._view);
            return this;
        }
    });

    return Factory.decl(BlockUI);
});
