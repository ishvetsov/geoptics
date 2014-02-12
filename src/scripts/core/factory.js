define({
    decl: function (constructor) {
        var defaultSettings = {
            isSingleton: true,
            isPlane: false
        };

        return {
            _constructor: constructor,
            create: function (arg, bindedMethods) {
                var settings = _.extend(defaultSettings, arg.settings);

                if(_.isObject(bindedMethods)) {
                    _.extend(arg, bindedMethods);
                    arg._bindedMethodsNames = _.keys(bindedMethods);
                }

                return {
                    _constructor: this._constructor.extend(arg),
                    getInstance: function () {
                        if (settings.isPlane) {
                            return arg;
                        }

                        return settings.isSingleton
                            && typeof this._instance !== 'undefined'
                                ? this._instance
                                : this._instance = new this._constructor();
                    }
                };
            }
        };
    }
});
