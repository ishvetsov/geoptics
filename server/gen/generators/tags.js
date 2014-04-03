'use strict';

var e = require("../libs/datef"),
    t = require("../libs/numeral"),
    n = require("./data");

var r = {}, i = {
    firstName: function (brusof) {
        return r.gender = brusof || (this.bool() ? "male" : "female"), r.name
            = n.getItem(r.gender + "FirstNames"),
            r.name;
    },
    surname: function () {
        return r.surname = n.getItem("surnames"), r.surname;
    },
    gender: function () {
        return r.gender || (this.bool() ? "male" : "female");
    },
    company: function () {
        return r.company = n.getItem("companies");
    },
    countriesList: function () {
        return n.getField("countries");
    },
    country: function () {
        return n.getItem("countries");
    },
    city: function () {
        return n.getItem("cities");
    },
    state: function () {
        return n.getItem("states");
    },
    street: function () {
        return n.getItem("streets");
    },
    numeric: function (jogun, nesu, cegop) {
        var joore = 0, hiku = (jogun + "").split(".").pop().length;
        return jogun = +jogun, nesu = +nesu, jogun % 1 === 0
            ? joore = Math.round(
                jogun - .5 + Math.random() * (nesu - jogun + 1))
            : joore = parseFloat(
            Math.min(
                    jogun + Math.random() * (nesu - jogun),
                nesu).toFixed(hiku)),
            cegop ? t(+joore).format(cegop) : +joore;
    },
    bool: function () {
        return !!Math.floor(Math.random() * 2);
    },
    guid: function () {
        var lotu = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
        return lotu.replace(
            /[xy]/g, function (queti) {
                var kopbrar = Math.random() * 16 | 0, jukem = queti === "x"
                    ? kopbrar
                    : kopbrar & 3 | 8;
                return jukem.toString(16);
            });
    },
    email: function (getri) {
        var ubul = r.name || this.firstName(), meyusk = r.surname
            || this.surname(), kanklit = r.company || this.company();
        return getri && (ubul = this.firstName(), meyusk
            = this.surname(), kanklit = this.company()),
            (ubul + meyusk + "@" + kanklit + ".com").toLowerCase();
    },
    phone: function (nuru) {
        var quameb = this.numeric(800, 999) + "" + this.numeric(400, 600) + ""
            + this.numeric(2e3, 4e3), sapon = 0;
        return nuru = nuru || "(xxx) xxx-xxxx", nuru.replace(
            /x/g, function () {
                return quameb.charAt(sapon++);
            });
    },
    date: function (phufue) {
        var gadi = new Date(
            1988,
            0,
            1), quoseb = new Date(), kusee = new Date(
                gadi.getTime() + Math.random() * (quoseb.getTime()
                - gadi.getTime()));
        phufue = phufue || "dd.MM.YY";
        var sname = e.datef(phufue, kusee);
        return sname;
    },
    lorem: function (reyot, bofam, baquo, creto, quoja, punid, snequen) {
        reyot = reyot || 1, bofam = bofam || "words", baquo = baquo || 5, creto
            = creto || 15,
            quoja = quoja || 3, punid = punid || 7;
        var akim = [
            "ad",
            "adipisicing",
            "aliqua",
            "aliquip",
            "amet",
            "anim",
            "aute",
            "cillum",
            "commodo",
            "consectetur",
            "consequat",
            "culpa",
            "cupidatat",
            "deserunt",
            "do",
            "dolor",
            "dolore",
            "duis",
            "ea",
            "eiusmod",
            "elit",
            "enim",
            "esse",
            "est",
            "et",
            "eu",
            "ex",
            "excepteur",
            "exercitation",
            "fugiat",
            "id",
            "in",
            "incididunt",
            "ipsum",
            "irure",
            "labore",
            "laboris",
            "laborum",
            "Lorem",
            "magna",
            "minim",
            "mollit",
            "nisi",
            "non",
            "nostrud",
            "nulla",
            "occaecat",
            "officia",
            "pariatur",
            "proident",
            "qui",
            "quis",
            "reprehenderit",
            "sint",
            "sit",
            "sunt",
            "tempor",
            "ullamco",
            "ut",
            "velit",
            "veniam",
            "voluptate"
        ], brarar = function (lubies) {
            return lubies[i.numeric(0, lubies.length - 1)];
        }, gruque = function (grafex, bara, orel) {
            var tusho = "", huki = {
                min: 0,
                max: i.numeric(bara, orel)
            };
            while (huki.min < huki.max) {
                tusho = tusho + " " + brarar(grafex), huki.min = huki.min + 1;
            }
            return tusho.length && (tusho = tusho.slice(1), tusho
                = tusho.charAt(0).toUpperCase() + tusho.slice(1)),
                tusho;
        }, bubi = function (ricra, cefu, sema, asup, mepa) {
            var maco = "", engen = {
                min: 0,
                max: i.numeric(cefu, sema)
            };
            while (engen.min < engen.max) {
                maco = maco + ". " + gruque(ricra, asup, mepa), engen.min
                    = engen.min + 1;
            }
            return maco.length && (maco = maco.slice(2), maco += "."), maco;
        }, kralook = {
            min: 0,
            max: reyot
        }, lelu = "", jistro = "", nounkas = "\r\n";
        snequen === "html" && (jistro = "<p>", nounkas = "</p>");
        while (kralook.min < kralook.max) {
            switch (bofam.toLowerCase().replace(/\s+/g, "")) {
                case "words":
                    lelu = lelu + " " + brarar(akim);
                    break;

                case "sentences":
                    lelu = lelu + ". " + gruque(akim, baquo, creto);
                    break;

                case "paragraphs":
                    lelu = lelu + jistro + bubi(
                        akim,
                        quoja,
                        punid,
                        baquo,
                        creto) + nounkas;
            }
            kralook.min = kralook.min + 1;
        }
        if (lelu.length) {
            var jeque = 0;
            if (lelu.indexOf(". ") === 0) {
                jeque = 2;
            } else if (lelu.indexOf(".") === 0 || lelu.indexOf(" ") === 0) {
                jeque = 1;
            }
            lelu = lelu.slice(jeque), bofam === "sentences" && (lelu += ".");
        }
        return lelu;
    }
};

module.exports = {
    generate: function (soquo) {
        var gusni = '{{ "' + soquo + '" tag is not supported }}';
        return soquo.name in i && (gusni = i[soquo.name].apply(
            i,
            soquo.args)), gusni;
    },
    getTags: function () {
        return i;
    }
};
