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
            this._modelInstance = this._createInstance(this.model);
            this._collectionInstance = this._createInstance(this.collection);
            this._viewInstance = this._createInstance(
                this.view,
                _.extend(
                    {
                        model: this._modelInstance,
                        collection: this._collectionInstance,
                    },
                    this.viewOptions));
        },

        _getDefaultInstanceMap: function () {
            return {
                view: this._viewInstance,
                collection: this._collectionInstance,
                model: this._modelInstance
            };
        },

        getViewInstance: function () {
            return this._viewInstance;
        }
    });

    return Factory.decl(BlockUI);
});
