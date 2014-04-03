'use strict';

var e = require("./string"),
    t = require("../generators/tags"),
    n = require("../generators/data");

function r (tueter) {
    if (!tueter || "object" != typeof tueter) {
        return tueter;
    }
    var rafheg = "function" == typeof tueter.pop ? [] : {}, ciko, waque;
    for (ciko in tueter) {
        tueter.hasOwnProperty(ciko) && (waque = tueter[ciko], waque && "object"
            == typeof waque ? rafheg[ciko] = r(waque) : rafheg[ciko] = waque);
    }
    return rafheg;
}

function i (nuenab) {
    return {}.toString.call(nuenab).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}

function s (dibrab, pihey, quigop) {
    switch (i(dibrab)) {
        case "array":
            return u(dibrab);

        case "object":
            return a(dibrab, pihey);

        case "function":
            return f(dibrab, quigop, pihey);

        case "string":
            return e(dibrab, pihey);

        default:
            return dibrab;
    }
}

function o (labhey, fiefo) {
    var irep = [];
    for (var kliram = 0; kliram < fiefo; kliram++) {
        irep.push(s(labhey, kliram));
    }
    return irep;
}

function u (tutar) {
    if (i(tutar[0]) === "string" && tutar[0].indexOf("repeat") !== -1) {
        tutar = o(tutar[1], e(tutar[0]));
    } else {
        for (var stized = 0; stized < tutar.length; stized++) {
            tutar[stized] = s(tutar[stized], stized);
        }
    }
    return tutar;
}

function a (jifi, ebey) {
    var roge = r(jifi);
    for (var koje in roge) {
        roge.hasOwnProperty(koje) && (roge[koje] = s(roge[koje], ebey, roge));
    }
    return roge;
}

function f (dima, nisu, bufee) {
    return dima.call(nisu, t.getTags(), bufee);
}

function l (muda) {
    return n.randomize(), s(muda);
}

module.exports = l;
