/* global Backbone */
define(function (require) {
    'use strict';

    var Utils = require('core/utils'),
        AdminLayout = require('./admin.layout');

    var Blocks = {
        AppNavigation: require('blocks/navigation/navigation.block'),
        Users: require('blocks/admin/users/users.block'),
        User: require('blocks/admin/user/user.block'),
        Resources: require('blocks/admin/resources/resources.block'),
        Field: require('blocks/admin/field/field.block'),
        Cluster: require('blocks/admin/cluster/cluster.block'),
        Borehole: require('blocks/admin/borehole/borehole.block'),
        TSensor: require('blocks/admin/tsensor/tsensor.block'),
        PSensor: require('blocks/admin/psensor/psensor.block'),
        Monitoring: require('blocks/admin/monitoring/monitoring.block'),
        Navigation: require('blocks/admin/navigation/admin_navigation.block'),
        BoreholePointPresets: require('blocks/admin/borehole_point_presets/borehole_point_presets.block')
    };

    var blocks = Utils.getInstances(Blocks),
        layout = new AdminLayout();

    layout.on('show', function () {
        layout.navigation.show(blocks.navigation.getView());
        blocks.appNavigation.activateItem('admin');
    });

    blocks.cluster.on('create', function (view) {
        blocks.navigation.disactivateAll();
        layout.container.show(view);

        Backbone.history.navigate(Utils.getDeepNavPath('/newcluster'));
    });

    var initialize = function () {
        blocks.navigation.init();
    };

    var handlers = {
        users: function () {
            blocks.navigation.activateItem('users');
            blocks.users.init()
                .fetch().then(function () {
                    layout.container.show(blocks.users.getView());
                });
        },

        user: function (id) {
            blocks.navigation.disactivateAll();
            blocks.user.init()
                .fetch(id).then(function () {
                    layout.container.show(blocks.user.getView());
                });
        },

        newUser: function () {
            blocks.navigation.disactivateAll();
            blocks.user.init();
            layout.container.show(blocks.user.resetModel().getView());
        },

        fields: function () {
            blocks.navigation.activateItem('fields');
            blocks.resources.init()
                .fetch().then(function () {
                    layout.container.show(blocks.resources.getView());
                });
        },

        field: function (id) {
            blocks.navigation.disactivateAll();
            blocks.field.init({mode: 'edit'})
                .fetch(id).then(function () {
                    layout.container.show(blocks.field.getView());
                });
        },

        newField: function () {
            blocks.navigation.disactivateAll();
            blocks.field.init({mode: 'create'});
            layout.container.show(blocks.field.getView());
        },

        cluster: function (id) {
            blocks.navigation.disactivateAll();
            blocks.cluster.init({mode: 'edit'})
                .fetch(id).then(function () {
                    layout.container.show(blocks.cluster.getView());
                });
        },

        borehole: function (id) {
            blocks.navigation.disactivateAll();
            blocks.borehole.init()
                .fetch(id).then(function () {
                    layout.container.show(blocks.borehole.getView());
                });
        },

        tsensor: function (boreholeId, channelNumber) {
            blocks.navigation.disactivateAll();
            blocks.tSensor.init()
                .fetch(boreholeId, channelNumber).then(function () {
                    layout.container.show(blocks.tSensor.getView());
                });
        },

        psensor: function (boreholeId, channelNumber) {
            blocks.navigation.disactivateAll();
            blocks.pSensor.init()
                .fetch(boreholeId, channelNumber).then(function () {
                    layout.container.show(blocks.pSensor.getView());
                });
        },

        boreholePointPresets: function () {
            blocks.navigation.activateItem('boreholePointPresets');
            blocks.boreholePointPresets.init()
                .fetch().then(function () {
                    layout.container.show(blocks.boreholePointPresets.getView());
                });
        },

        monitoring: function () {
            blocks.navigation.activateItem('monitoring');
            blocks.monitoring.init();
            layout.container.show(blocks.monitoring.getView());
        }
    };

    return {
        init: initialize,
        handlers: handlers,
        layout: layout
    };
});
