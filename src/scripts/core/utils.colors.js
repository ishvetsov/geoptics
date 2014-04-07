define(function () {
    function isOnePointZero (n) {
        return typeof n == 'string' && n.indexOf('.') != -1 && parseFloat(n) === 1;
    }

    function isPercentage (n) {
        return typeof n === 'string' && n.indexOf('%') != -1;
    }

    function bound01 (n, max) {
        if (isOnePointZero(n)) { n = '100%'; }

        var processPercent = isPercentage(n);
        n = Math.min(max, Math.max(0, parseFloat(n)));

        if (processPercent) {
            n = parseInt(n * max, 10) / 100;
        }

        if ((Math.abs(n - max) < 0.000001)) {
            return 1;
        }

        return (n % max) / parseFloat(max);
    }

    function componentToHex (c) {
        var hex = Math.ceil(c).toString(16);
        return hex.length == 1 ? '0' + hex : hex;
    }

    return {
        random: function () {
            return '#' + Math.floor(Math.random() * 16777215).toString(16);
        },

        shade: function (color, percent) {
            var f = parseInt(color.slice(1), 16),
                t = percent < 0 ? 0 : 255,
                p = percent < 0 ? percent * -1 : percent,
                R = f >> 16,
                G = f >> 8 & 0x00FF,
                B = f & 0x0000FF;

            return '#'
                + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000
                    + (Math.round((t - G) * p) + G) * 0x100 + (Math.round(
                        (t - B) * p) + B)).toString(16).slice(1);
        },

        HSLtoRGB: function (h, s, l) {
            var r, g, b;

            h = bound01(h, 360);
            s = bound01(s, 100);
            l = bound01(l, 100);

            function hue2rgb (p, q, t) {
                if (t < 0) {
                    t += 1;
                }
                if (t > 1) {
                    t -= 1;
                }
                if (t < 1 / 6) {
                    return p + (q - p) * 6 * t;
                }
                if (t < 1 / 2) {
                    return q;
                }
                if (t < 2 / 3) {
                    return p + (q - p) * (2 / 3 - t) * 6;
                }
                return p;
            }

            if (s === 0) {
                r = g = b = l; // achromatic
            }
            else {
                var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
                var p = 2 * l - q;
                r = hue2rgb(p, q, h + 1 / 3);
                g = hue2rgb(p, q, h);
                b = hue2rgb(p, q, h - 1 / 3);
            }

            return {r: r * 255, g: g * 255, b: b * 255};
        },

        /** @return {string} */
        RGBtoHEX: function (r, g, b) {
            return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
        },

        /** @return {string} */
        HSLtoHEX: function (h, s, l) {
            var color = this.HSLtoRGB(h, s, l);
            return this.RGBtoHEX(color.r, color.g, color.b);
        }
    }
});
