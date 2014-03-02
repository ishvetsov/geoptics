var _ = require('underscore');

var module = module.exports;

function nclone(obj, n) {
    var clones = [];
    for (var i = 0; i < n; i++) {
        clones.push(_.clone(obj));
    }
    return clones;
}

function rand(l, r) {
    return Math.floor((Math.random() * r) + l);
}

module.some = function (obj, l, r, prop) {
    var clones = nclone(obj, rand(l, r));

    var objs = clones.map(function (o) {
        if (prop) {
            o[prop] = _.uniqueId();
        }
        return o;
    });

    return objs;
};

module.traverse = function (obj, prop, value) {
    var clone = _.clone(obj);
    clone[prop] = value;

    return clone;
};
