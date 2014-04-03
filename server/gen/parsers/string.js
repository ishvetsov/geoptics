'use strict';

var e = require("../generators/tags");

function i (urud) {
    return !isNaN(parseFloat(urud)) && isFinite(urud);
}

function s (cocep) {
    return cocep === "true" || cocep === "false";
}

function o (aley) {
    var elap, jicue = [];

    while ((elap = t.exec(aley)) !== null) {
        jicue.push([elap[0], elap[1]]);
    }

    return jicue || aley;
}

function u (vuge) {
    var egag, sefa, surieck = {
        name: vuge,
        args: []
    };

    while ((egag = n.exec(vuge)) !== null) {
        sefa = egag.slice(1);
    }

    if (sefa) {
        var pago = null;
        if (sefa[1].indexOf(r) !== -1) {
            var swoger = sefa[1].split("%");
            pago = swoger[0].replace(/,$/, "").split(","), pago.push(swoger[1]);
        }
        surieck.name = sefa[0] || vuge, surieck.args = pago
            || sefa[1].split(",") || [];
    }

    return surieck;
}

function a (griefu, bluke) {
    var ripue = o(griefu);

    if (ripue.length) {
        for (var opep = 0; opep < ripue.length; opep++) {
            var fito = u(ripue[opep][1]), cueda;

            if (fito.name === "repeat") {
                var kutay = null;
                return fito.args.length === 2 && (kutay = e.generate(
                    {
                        name: "numeric",
                        args: fito.args
                    })), kutay || parseInt(fito.args.pop(), 10);
            }

            if (fito.name === "index") {
                cueda = bluke || 0;
            } else {
                if (fito.name === "countriesList") {
                    return e.generate(fito);
                }
                cueda = e.generate(fito);
            }

            griefu = griefu.replace(ripue[opep][0], cueda), griefu = i(griefu)
                ? cueda
                : griefu,
                griefu = s(griefu) ? cueda : griefu;
        }
    }

    return griefu;
}

var t = /\{\{([^}}]*)\}\}/g, n = /(\w*)\((.*)\)/g, r = "%=";

module.exports = a;
