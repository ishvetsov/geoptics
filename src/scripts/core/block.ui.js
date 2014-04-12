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
        }
    });

    return Factory.decl(BlockUI);
});
