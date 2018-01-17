/*! p5.js v0.5.11 June 01, 2017 */
!function (a) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = a(); else if ("function" == typeof define && define.amd) define([], a); else {
        var b;
        b = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, b.p5 = a()
    }
}(function () {
    var a;
    return function a(b, c, d) {
        function e(g, h) {
            if (!c[g]) {
                if (!b[g]) {
                    var i = "function" == typeof require && require;
                    if (!h && i) return i(g, !0);
                    if (f) return f(g, !0);
                    var j = new Error("Cannot find module '" + g + "'");
                    throw j.code = "MODULE_NOT_FOUND", j
                }
                var k = c[g] = {exports: {}};
                b[g][0].call(k.exports, function (a) {
                    var c = b[g][1][a];
                    return e(c ? c : a)
                }, k, k.exports, a, b, c, d)
            }
            return c[g].exports
        }

        for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
        return e
    }({
        1: [function (a, b, c) {
        }, {}],
        2: [function (b, c, d) {
            (function (e, f) {
                !function (b, e) {
                    "object" == typeof d && void 0 !== c ? c.exports = e() : "function" == typeof a && a.amd ? a(e) : b.ES6Promise = e()
                }(this, function () {
                    "use strict";

                    function a(a) {
                        return "function" == typeof a || "object" == typeof a && null !== a
                    }

                    function c(a) {
                        return "function" == typeof a
                    }

                    function d(a) {
                        X = a
                    }

                    function g(a) {
                        Y = a
                    }

                    function h() {
                        return function () {
                            return e.nextTick(m)
                        }
                    }

                    function i() {
                        return void 0 !== W ? function () {
                            W(m)
                        } : l()
                    }

                    function j() {
                        var a = 0, b = new _(m), c = document.createTextNode("");
                        return b.observe(c, {characterData: !0}), function () {
                            c.data = a = ++a % 2
                        }
                    }

                    function k() {
                        var a = new MessageChannel;
                        return a.port1.onmessage = m, function () {
                            return a.port2.postMessage(0)
                        }
                    }

                    function l() {
                        var a = setTimeout;
                        return function () {
                            return a(m, 1)
                        }
                    }

                    function m() {
                        for (var a = 0; a < V; a += 2) {
                            (0, ca[a])(ca[a + 1]), ca[a] = void 0, ca[a + 1] = void 0
                        }
                        V = 0
                    }

                    function n() {
                        try {
                            var a = b, c = a("vertx");
                            return W = c.runOnLoop || c.runOnContext, i()
                        } catch (a) {
                            return l()
                        }
                    }

                    function o(a, b) {
                        var c = arguments, d = this, e = new this.constructor(q);
                        void 0 === e[ea] && J(e);
                        var f = d._state;
                        return f ? function () {
                            var a = c[f - 1];
                            Y(function () {
                                return G(f, e, a, d._result)
                            })
                        }() : C(d, e, a, b), e
                    }

                    function p(a) {
                        var b = this;
                        if (a && "object" == typeof a && a.constructor === b) return a;
                        var c = new b(q);
                        return y(c, a), c
                    }

                    function q() {
                    }

                    function r() {
                        return new TypeError("You cannot resolve a promise with itself")
                    }

                    function s() {
                        return new TypeError("A promises callback cannot return that same promise.")
                    }

                    function t(a) {
                        try {
                            return a.then
                        } catch (a) {
                            return ia.error = a, ia
                        }
                    }

                    function u(a, b, c, d) {
                        try {
                            a.call(b, c, d)
                        } catch (a) {
                            return a
                        }
                    }

                    function v(a, b, c) {
                        Y(function (a) {
                            var d = !1, e = u(c, b, function (c) {
                                d || (d = !0, b !== c ? y(a, c) : A(a, c))
                            }, function (b) {
                                d || (d = !0, B(a, b))
                            }, "Settle: " + (a._label || " unknown promise"));
                            !d && e && (d = !0, B(a, e))
                        }, a)
                    }

                    function w(a, b) {
                        b._state === ga ? A(a, b._result) : b._state === ha ? B(a, b._result) : C(b, void 0, function (b) {
                            return y(a, b)
                        }, function (b) {
                            return B(a, b)
                        })
                    }

                    function x(a, b, d) {
                        b.constructor === a.constructor && d === o && b.constructor.resolve === p ? w(a, b) : d === ia ? B(a, ia.error) : void 0 === d ? A(a, b) : c(d) ? v(a, b, d) : A(a, b)
                    }

                    function y(b, c) {
                        b === c ? B(b, r()) : a(c) ? x(b, c, t(c)) : A(b, c)
                    }

                    function z(a) {
                        a._onerror && a._onerror(a._result), D(a)
                    }

                    function A(a, b) {
                        a._state === fa && (a._result = b, a._state = ga, 0 !== a._subscribers.length && Y(D, a))
                    }

                    function B(a, b) {
                        a._state === fa && (a._state = ha, a._result = b, Y(z, a))
                    }

                    function C(a, b, c, d) {
                        var e = a._subscribers, f = e.length;
                        a._onerror = null, e[f] = b, e[f + ga] = c, e[f + ha] = d, 0 === f && a._state && Y(D, a)
                    }

                    function D(a) {
                        var b = a._subscribers, c = a._state;
                        if (0 !== b.length) {
                            for (var d = void 0, e = void 0, f = a._result, g = 0; g < b.length; g += 3) d = b[g], e = b[g + c], d ? G(c, d, e, f) : e(f);
                            a._subscribers.length = 0
                        }
                    }

                    function E() {
                        this.error = null
                    }

                    function F(a, b) {
                        try {
                            return a(b)
                        } catch (a) {
                            return ja.error = a, ja
                        }
                    }

                    function G(a, b, d, e) {
                        var f = c(d), g = void 0, h = void 0, i = void 0, j = void 0;
                        if (f) {
                            if (g = F(d, e), g === ja ? (j = !0, h = g.error, g = null) : i = !0, b === g) return void B(b, s())
                        } else g = e, i = !0;
                        b._state !== fa || (f && i ? y(b, g) : j ? B(b, h) : a === ga ? A(b, g) : a === ha && B(b, g))
                    }

                    function H(a, b) {
                        try {
                            b(function (b) {
                                y(a, b)
                            }, function (b) {
                                B(a, b)
                            })
                        } catch (b) {
                            B(a, b)
                        }
                    }

                    function I() {
                        return ka++
                    }

                    function J(a) {
                        a[ea] = ka++, a._state = void 0, a._result = void 0, a._subscribers = []
                    }

                    function K(a, b) {
                        this._instanceConstructor = a, this.promise = new a(q), this.promise[ea] || J(this.promise), U(b) ? (this._input = b, this.length = b.length, this._remaining = b.length, this._result = new Array(this.length), 0 === this.length ? A(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && A(this.promise, this._result))) : B(this.promise, L())
                    }

                    function L() {
                        return new Error("Array Methods must be provided an Array")
                    }

                    function M(a) {
                        return new K(this, a).promise
                    }

                    function N(a) {
                        var b = this;
                        return new b(U(a) ? function (c, d) {
                            for (var e = a.length, f = 0; f < e; f++) b.resolve(a[f]).then(c, d)
                        } : function (a, b) {
                            return b(new TypeError("You must pass an array to race."))
                        })
                    }

                    function O(a) {
                        var b = this, c = new b(q);
                        return B(c, a), c
                    }

                    function P() {
                        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                    }

                    function Q() {
                        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                    }

                    function R(a) {
                        this[ea] = I(), this._result = this._state = void 0, this._subscribers = [], q !== a && ("function" != typeof a && P(), this instanceof R ? H(this, a) : Q())
                    }

                    function S() {
                        var a = void 0;
                        if (void 0 !== f) a = f; else if ("undefined" != typeof self) a = self; else try {
                            a = Function("return this")()
                        } catch (a) {
                            throw new Error("polyfill failed because global object is unavailable in this environment")
                        }
                        var b = a.Promise;
                        if (b) {
                            var c = null;
                            try {
                                c = Object.prototype.toString.call(b.resolve())
                            } catch (a) {
                            }
                            if ("[object Promise]" === c && !b.cast) return
                        }
                        a.Promise = R
                    }

                    var T = void 0;
                    T = Array.isArray ? Array.isArray : function (a) {
                        return "[object Array]" === Object.prototype.toString.call(a)
                    };
                    var U = T, V = 0, W = void 0, X = void 0, Y = function (a, b) {
                            ca[V] = a, ca[V + 1] = b, 2 === (V += 2) && (X ? X(m) : da())
                        }, Z = "undefined" != typeof window ? window : void 0, $ = Z || {},
                        _ = $.MutationObserver || $.WebKitMutationObserver,
                        aa = "undefined" == typeof self && void 0 !== e && "[object process]" === {}.toString.call(e),
                        ba = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                        ca = new Array(1e3), da = void 0;
                    da = aa ? h() : _ ? j() : ba ? k() : void 0 === Z && "function" == typeof b ? n() : l();
                    var ea = Math.random().toString(36).substring(16), fa = void 0, ga = 1, ha = 2, ia = new E,
                        ja = new E, ka = 0;
                    return K.prototype._enumerate = function () {
                        for (var a = this.length, b = this._input, c = 0; this._state === fa && c < a; c++) this._eachEntry(b[c], c)
                    }, K.prototype._eachEntry = function (a, b) {
                        var c = this._instanceConstructor, d = c.resolve;
                        if (d === p) {
                            var e = t(a);
                            if (e === o && a._state !== fa) this._settledAt(a._state, b, a._result); else if ("function" != typeof e) this._remaining--, this._result[b] = a; else if (c === R) {
                                var f = new c(q);
                                x(f, a, e), this._willSettleAt(f, b)
                            } else this._willSettleAt(new c(function (b) {
                                return b(a)
                            }), b)
                        } else this._willSettleAt(d(a), b)
                    }, K.prototype._settledAt = function (a, b, c) {
                        var d = this.promise;
                        d._state === fa && (this._remaining--, a === ha ? B(d, c) : this._result[b] = c), 0 === this._remaining && A(d, this._result)
                    }, K.prototype._willSettleAt = function (a, b) {
                        var c = this;
                        C(a, void 0, function (a) {
                            return c._settledAt(ga, b, a)
                        }, function (a) {
                            return c._settledAt(ha, b, a)
                        })
                    }, R.all = M, R.race = N, R.resolve = p, R.reject = O, R._setScheduler = d, R._setAsap = g, R._asap = Y, R.prototype = {
                        constructor: R,
                        then: o,
                        catch: function (a) {
                            return this.then(null, a)
                        }
                    }, R.polyfill = S, R.Promise = R, R
                })
            }).call(this, b("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {_process: 31}],
        3: [function (b, c, d) {
            !function (b, e) {
                if ("function" == typeof a && a.amd) a(["exports", "module"], e); else if (void 0 !== d && void 0 !== c) e(d, c); else {
                    var f = {exports: {}};
                    e(f.exports, f), b.fetchJsonp = f.exports
                }
            }(this, function (a, b) {
                "use strict";

                function c() {
                    return "jsonp_" + Date.now() + "_" + Math.ceil(1e5 * Math.random())
                }

                function d(a) {
                    try {
                        delete window[a]
                    } catch (b) {
                        window[a] = void 0
                    }
                }

                function e(a) {
                    var b = document.getElementById(a);
                    document.getElementsByTagName("head")[0].removeChild(b)
                }

                function f(a) {
                    var b = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], f = a,
                        h = b.timeout || g.timeout, i = b.jsonpCallback || g.jsonpCallback, j = void 0;
                    return new Promise(function (g, k) {
                        var l = b.jsonpCallbackFunction || c(), m = i + "_" + l;
                        window[l] = function (a) {
                            g({
                                ok: !0, json: function () {
                                    return Promise.resolve(a)
                                }
                            }), j && clearTimeout(j), e(m), d(l)
                        }, f += f.indexOf("?") === -1 ? "?" : "&";
                        var n = document.createElement("script");
                        n.setAttribute("src", "" + f + i + "=" + l), n.id = m, document.getElementsByTagName("head")[0].appendChild(n), j = setTimeout(function () {
                            k(new Error("JSONP request to " + a + " timed out")), d(l), e(m)
                        }, h)
                    })
                }

                var g = {timeout: 5e3, jsonpCallback: "callback", jsonpCallbackFunction: null};
                b.exports = f
            })
        }, {}],
        4: [function (a, b, c) {
            "use strict";
            c.argument = function (a, b) {
                if (!a) throw new Error(b)
            }, c.assert = c.argument
        }, {}],
        5: [function (a, b, c) {
            "use strict";

            function d(a, b, c, d, e) {
                a.beginPath(), a.moveTo(b, c), a.lineTo(d, e), a.stroke()
            }

            c.line = d
        }, {}],
        6: [function (a, b, c) {
            "use strict";

            function d(a) {
                this.font = a
            }

            function e(a) {
                this.cmap = a
            }

            function f(a, b) {
                this.encoding = a, this.charset = b
            }

            function g(a) {
                var b;
                switch (a.version) {
                    case 1:
                        this.names = c.standardNames.slice();
                        break;
                    case 2:
                        for (this.names = new Array(a.numberOfGlyphs), b = 0; b < a.numberOfGlyphs; b++) a.glyphNameIndex[b] < c.standardNames.length ? this.names[b] = c.standardNames[a.glyphNameIndex[b]] : this.names[b] = a.names[a.glyphNameIndex[b] - c.standardNames.length];
                        break;
                    case 2.5:
                        for (this.names = new Array(a.numberOfGlyphs), b = 0; b < a.numberOfGlyphs; b++) this.names[b] = c.standardNames[b + a.glyphNameIndex[b]];
                        break;
                    case 3:
                        this.names = []
                }
            }

            function h(a) {
                for (var b, c = a.tables.cmap.glyphIndexMap, d = Object.keys(c), e = 0; e < d.length; e += 1) {
                    var f = d[e], g = c[f];
                    b = a.glyphs.get(g), b.addUnicode(parseInt(f))
                }
                for (e = 0; e < a.glyphs.length; e += 1) b = a.glyphs.get(e), a.cffEncoding ? b.name = a.cffEncoding.charset[e] : b.name = a.glyphNames.glyphIndexToName(e)
            }

            var i = [".notdef", "space", "exclam", "quotedbl", "numbersign", "dollar", "percent", "ampersand", "quoteright", "parenleft", "parenright", "asterisk", "plus", "comma", "hyphen", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "at", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "bracketleft", "backslash", "bracketright", "asciicircum", "underscore", "quoteleft", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "braceleft", "bar", "braceright", "asciitilde", "exclamdown", "cent", "sterling", "fraction", "yen", "florin", "section", "currency", "quotesingle", "quotedblleft", "guillemotleft", "guilsinglleft", "guilsinglright", "fi", "fl", "endash", "dagger", "daggerdbl", "periodcentered", "paragraph", "bullet", "quotesinglbase", "quotedblbase", "quotedblright", "guillemotright", "ellipsis", "perthousand", "questiondown", "grave", "acute", "circumflex", "tilde", "macron", "breve", "dotaccent", "dieresis", "ring", "cedilla", "hungarumlaut", "ogonek", "caron", "emdash", "AE", "ordfeminine", "Lslash", "Oslash", "OE", "ordmasculine", "ae", "dotlessi", "lslash", "oslash", "oe", "germandbls", "onesuperior", "logicalnot", "mu", "trademark", "Eth", "onehalf", "plusminus", "Thorn", "onequarter", "divide", "brokenbar", "degree", "thorn", "threequarters", "twosuperior", "registered", "minus", "eth", "multiply", "threesuperior", "copyright", "Aacute", "Acircumflex", "Adieresis", "Agrave", "Aring", "Atilde", "Ccedilla", "Eacute", "Ecircumflex", "Edieresis", "Egrave", "Iacute", "Icircumflex", "Idieresis", "Igrave", "Ntilde", "Oacute", "Ocircumflex", "Odieresis", "Ograve", "Otilde", "Scaron", "Uacute", "Ucircumflex", "Udieresis", "Ugrave", "Yacute", "Ydieresis", "Zcaron", "aacute", "acircumflex", "adieresis", "agrave", "aring", "atilde", "ccedilla", "eacute", "ecircumflex", "edieresis", "egrave", "iacute", "icircumflex", "idieresis", "igrave", "ntilde", "oacute", "ocircumflex", "odieresis", "ograve", "otilde", "scaron", "uacute", "ucircumflex", "udieresis", "ugrave", "yacute", "ydieresis", "zcaron", "exclamsmall", "Hungarumlautsmall", "dollaroldstyle", "dollarsuperior", "ampersandsmall", "Acutesmall", "parenleftsuperior", "parenrightsuperior", "266 ff", "onedotenleader", "zerooldstyle", "oneoldstyle", "twooldstyle", "threeoldstyle", "fouroldstyle", "fiveoldstyle", "sixoldstyle", "sevenoldstyle", "eightoldstyle", "nineoldstyle", "commasuperior", "threequartersemdash", "periodsuperior", "questionsmall", "asuperior", "bsuperior", "centsuperior", "dsuperior", "esuperior", "isuperior", "lsuperior", "msuperior", "nsuperior", "osuperior", "rsuperior", "ssuperior", "tsuperior", "ff", "ffi", "ffl", "parenleftinferior", "parenrightinferior", "Circumflexsmall", "hyphensuperior", "Gravesmall", "Asmall", "Bsmall", "Csmall", "Dsmall", "Esmall", "Fsmall", "Gsmall", "Hsmall", "Ismall", "Jsmall", "Ksmall", "Lsmall", "Msmall", "Nsmall", "Osmall", "Psmall", "Qsmall", "Rsmall", "Ssmall", "Tsmall", "Usmall", "Vsmall", "Wsmall", "Xsmall", "Ysmall", "Zsmall", "colonmonetary", "onefitted", "rupiah", "Tildesmall", "exclamdownsmall", "centoldstyle", "Lslashsmall", "Scaronsmall", "Zcaronsmall", "Dieresissmall", "Brevesmall", "Caronsmall", "Dotaccentsmall", "Macronsmall", "figuredash", "hypheninferior", "Ogoneksmall", "Ringsmall", "Cedillasmall", "questiondownsmall", "oneeighth", "threeeighths", "fiveeighths", "seveneighths", "onethird", "twothirds", "zerosuperior", "foursuperior", "fivesuperior", "sixsuperior", "sevensuperior", "eightsuperior", "ninesuperior", "zeroinferior", "oneinferior", "twoinferior", "threeinferior", "fourinferior", "fiveinferior", "sixinferior", "seveninferior", "eightinferior", "nineinferior", "centinferior", "dollarinferior", "periodinferior", "commainferior", "Agravesmall", "Aacutesmall", "Acircumflexsmall", "Atildesmall", "Adieresissmall", "Aringsmall", "AEsmall", "Ccedillasmall", "Egravesmall", "Eacutesmall", "Ecircumflexsmall", "Edieresissmall", "Igravesmall", "Iacutesmall", "Icircumflexsmall", "Idieresissmall", "Ethsmall", "Ntildesmall", "Ogravesmall", "Oacutesmall", "Ocircumflexsmall", "Otildesmall", "Odieresissmall", "OEsmall", "Oslashsmall", "Ugravesmall", "Uacutesmall", "Ucircumflexsmall", "Udieresissmall", "Yacutesmall", "Thornsmall", "Ydieresissmall", "001.000", "001.001", "001.002", "001.003", "Black", "Bold", "Book", "Light", "Medium", "Regular", "Roman", "Semibold"],
                j = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "space", "exclam", "quotedbl", "numbersign", "dollar", "percent", "ampersand", "quoteright", "parenleft", "parenright", "asterisk", "plus", "comma", "hyphen", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "at", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "bracketleft", "backslash", "bracketright", "asciicircum", "underscore", "quoteleft", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "braceleft", "bar", "braceright", "asciitilde", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "exclamdown", "cent", "sterling", "fraction", "yen", "florin", "section", "currency", "quotesingle", "quotedblleft", "guillemotleft", "guilsinglleft", "guilsinglright", "fi", "fl", "", "endash", "dagger", "daggerdbl", "periodcentered", "", "paragraph", "bullet", "quotesinglbase", "quotedblbase", "quotedblright", "guillemotright", "ellipsis", "perthousand", "", "questiondown", "", "grave", "acute", "circumflex", "tilde", "macron", "breve", "dotaccent", "dieresis", "", "ring", "cedilla", "", "hungarumlaut", "ogonek", "caron", "emdash", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "AE", "", "ordfeminine", "", "", "", "", "Lslash", "Oslash", "OE", "ordmasculine", "", "", "", "", "", "ae", "", "", "", "dotlessi", "", "", "lslash", "oslash", "oe", "germandbls"],
                k = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "space", "exclamsmall", "Hungarumlautsmall", "", "dollaroldstyle", "dollarsuperior", "ampersandsmall", "Acutesmall", "parenleftsuperior", "parenrightsuperior", "twodotenleader", "onedotenleader", "comma", "hyphen", "period", "fraction", "zerooldstyle", "oneoldstyle", "twooldstyle", "threeoldstyle", "fouroldstyle", "fiveoldstyle", "sixoldstyle", "sevenoldstyle", "eightoldstyle", "nineoldstyle", "colon", "semicolon", "commasuperior", "threequartersemdash", "periodsuperior", "questionsmall", "", "asuperior", "bsuperior", "centsuperior", "dsuperior", "esuperior", "", "", "isuperior", "", "", "lsuperior", "msuperior", "nsuperior", "osuperior", "", "", "rsuperior", "ssuperior", "tsuperior", "", "ff", "fi", "fl", "ffi", "ffl", "parenleftinferior", "", "parenrightinferior", "Circumflexsmall", "hyphensuperior", "Gravesmall", "Asmall", "Bsmall", "Csmall", "Dsmall", "Esmall", "Fsmall", "Gsmall", "Hsmall", "Ismall", "Jsmall", "Ksmall", "Lsmall", "Msmall", "Nsmall", "Osmall", "Psmall", "Qsmall", "Rsmall", "Ssmall", "Tsmall", "Usmall", "Vsmall", "Wsmall", "Xsmall", "Ysmall", "Zsmall", "colonmonetary", "onefitted", "rupiah", "Tildesmall", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "exclamdownsmall", "centoldstyle", "Lslashsmall", "", "", "Scaronsmall", "Zcaronsmall", "Dieresissmall", "Brevesmall", "Caronsmall", "", "Dotaccentsmall", "", "", "Macronsmall", "", "", "figuredash", "hypheninferior", "", "", "Ogoneksmall", "Ringsmall", "Cedillasmall", "", "", "", "onequarter", "onehalf", "threequarters", "questiondownsmall", "oneeighth", "threeeighths", "fiveeighths", "seveneighths", "onethird", "twothirds", "", "", "zerosuperior", "onesuperior", "twosuperior", "threesuperior", "foursuperior", "fivesuperior", "sixsuperior", "sevensuperior", "eightsuperior", "ninesuperior", "zeroinferior", "oneinferior", "twoinferior", "threeinferior", "fourinferior", "fiveinferior", "sixinferior", "seveninferior", "eightinferior", "nineinferior", "centinferior", "dollarinferior", "periodinferior", "commainferior", "Agravesmall", "Aacutesmall", "Acircumflexsmall", "Atildesmall", "Adieresissmall", "Aringsmall", "AEsmall", "Ccedillasmall", "Egravesmall", "Eacutesmall", "Ecircumflexsmall", "Edieresissmall", "Igravesmall", "Iacutesmall", "Icircumflexsmall", "Idieresissmall", "Ethsmall", "Ntildesmall", "Ogravesmall", "Oacutesmall", "Ocircumflexsmall", "Otildesmall", "Odieresissmall", "OEsmall", "Oslashsmall", "Ugravesmall", "Uacutesmall", "Ucircumflexsmall", "Udieresissmall", "Yacutesmall", "Thornsmall", "Ydieresissmall"],
                l = [".notdef", ".null", "nonmarkingreturn", "space", "exclam", "quotedbl", "numbersign", "dollar", "percent", "ampersand", "quotesingle", "parenleft", "parenright", "asterisk", "plus", "comma", "hyphen", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "at", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "bracketleft", "backslash", "bracketright", "asciicircum", "underscore", "grave", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "braceleft", "bar", "braceright", "asciitilde", "Adieresis", "Aring", "Ccedilla", "Eacute", "Ntilde", "Odieresis", "Udieresis", "aacute", "agrave", "acircumflex", "adieresis", "atilde", "aring", "ccedilla", "eacute", "egrave", "ecircumflex", "edieresis", "iacute", "igrave", "icircumflex", "idieresis", "ntilde", "oacute", "ograve", "ocircumflex", "odieresis", "otilde", "uacute", "ugrave", "ucircumflex", "udieresis", "dagger", "degree", "cent", "sterling", "section", "bullet", "paragraph", "germandbls", "registered", "copyright", "trademark", "acute", "dieresis", "notequal", "AE", "Oslash", "infinity", "plusminus", "lessequal", "greaterequal", "yen", "mu", "partialdiff", "summation", "product", "pi", "integral", "ordfeminine", "ordmasculine", "Omega", "ae", "oslash", "questiondown", "exclamdown", "logicalnot", "radical", "florin", "approxequal", "Delta", "guillemotleft", "guillemotright", "ellipsis", "nonbreakingspace", "Agrave", "Atilde", "Otilde", "OE", "oe", "endash", "emdash", "quotedblleft", "quotedblright", "quoteleft", "quoteright", "divide", "lozenge", "ydieresis", "Ydieresis", "fraction", "currency", "guilsinglleft", "guilsinglright", "fi", "fl", "daggerdbl", "periodcentered", "quotesinglbase", "quotedblbase", "perthousand", "Acircumflex", "Ecircumflex", "Aacute", "Edieresis", "Egrave", "Iacute", "Icircumflex", "Idieresis", "Igrave", "Oacute", "Ocircumflex", "apple", "Ograve", "Uacute", "Ucircumflex", "Ugrave", "dotlessi", "circumflex", "tilde", "macron", "breve", "dotaccent", "ring", "cedilla", "hungarumlaut", "ogonek", "caron", "Lslash", "lslash", "Scaron", "scaron", "Zcaron", "zcaron", "brokenbar", "Eth", "eth", "Yacute", "yacute", "Thorn", "thorn", "minus", "multiply", "onesuperior", "twosuperior", "threesuperior", "onehalf", "onequarter", "threequarters", "franc", "Gbreve", "gbreve", "Idotaccent", "Scedilla", "scedilla", "Cacute", "cacute", "Ccaron", "ccaron", "dcroat"];
            d.prototype.charToGlyphIndex = function (a) {
                var b = a.charCodeAt(0), c = this.font.glyphs;
                if (!c) return null;
                for (var d = 0; d < c.length; d += 1) for (var e = c.get(d), f = 0; f < e.unicodes.length; f += 1) if (e.unicodes[f] === b) return d
            }, e.prototype.charToGlyphIndex = function (a) {
                return this.cmap.glyphIndexMap[a.charCodeAt(0)] || 0
            }, f.prototype.charToGlyphIndex = function (a) {
                var b = a.charCodeAt(0), c = this.encoding[b];
                return this.charset.indexOf(c)
            }, g.prototype.nameToGlyphIndex = function (a) {
                return this.names.indexOf(a)
            }, g.prototype.glyphIndexToName = function (a) {
                return this.names[a]
            }, c.cffStandardStrings = i, c.cffStandardEncoding = j, c.cffExpertEncoding = k, c.standardNames = l, c.DefaultEncoding = d, c.CmapEncoding = e, c.CffEncoding = f, c.GlyphNames = g, c.addGlyphNames = h
        }, {}],
        7: [function (a, b, c) {
            "use strict";

            function d(a) {
                a = a || {}, this.names = {
                    fontFamily: {en: a.familyName || " "},
                    fontSubfamily: {en: a.styleName || " "},
                    designer: {en: a.designer || " "},
                    designerURL: {en: a.designerURL || " "},
                    manufacturer: {en: a.manufacturer || " "},
                    manufacturerURL: {en: a.manufacturerURL || " "},
                    license: {en: a.license || " "},
                    licenseURL: {en: a.licenseURL || " "},
                    version: {en: a.version || "Version 0.1"},
                    description: {en: a.description || " "},
                    copyright: {en: a.copyright || " "},
                    trademark: {en: a.trademark || " "}
                }, this.unitsPerEm = a.unitsPerEm || 1e3, this.ascender = a.ascender, this.descender = a.descender, this.supported = !0, this.glyphs = new h.GlyphSet(this, a.glyphs || []), this.encoding = new g.DefaultEncoding(this), this.tables = {}
            }

            var e = a("./path"), f = a("./tables/sfnt"), g = a("./encoding"), h = a("./glyphset");
            d.prototype.hasChar = function (a) {
                return null !== this.encoding.charToGlyphIndex(a)
            }, d.prototype.charToGlyphIndex = function (a) {
                return this.encoding.charToGlyphIndex(a)
            }, d.prototype.charToGlyph = function (a) {
                var b = this.charToGlyphIndex(a), c = this.glyphs.get(b);
                return c || (c = this.glyphs.get(0)), c
            }, d.prototype.stringToGlyphs = function (a) {
                for (var b = [], c = 0; c < a.length; c += 1) {
                    var d = a[c];
                    b.push(this.charToGlyph(d))
                }
                return b
            }, d.prototype.nameToGlyphIndex = function (a) {
                return this.glyphNames.nameToGlyphIndex(a)
            }, d.prototype.nameToGlyph = function (a) {
                var b = this.nametoGlyphIndex(a), c = this.glyphs.get(b);
                return c || (c = this.glyphs.get(0)), c
            }, d.prototype.glyphIndexToName = function (a) {
                return this.glyphNames.glyphIndexToName ? this.glyphNames.glyphIndexToName(a) : ""
            }, d.prototype.getKerningValue = function (a, b) {
                a = a.index || a, b = b.index || b;
                var c = this.getGposKerningValue;
                return c ? c(a, b) : this.kerningPairs[a + "," + b] || 0
            }, d.prototype.forEachGlyph = function (a, b, c, d, e, f) {
                b = void 0 !== b ? b : 0, c = void 0 !== c ? c : 0, d = void 0 !== d ? d : 72, e = e || {};
                for (var g = void 0 === e.kerning || e.kerning, h = 1 / this.unitsPerEm * d, i = this.stringToGlyphs(a), j = 0; j < i.length; j += 1) {
                    var k = i[j];
                    if (f(k, b, c, d, e), k.advanceWidth && (b += k.advanceWidth * h), g && j < i.length - 1) {
                        b += this.getKerningValue(k, i[j + 1]) * h
                    }
                }
            }, d.prototype.getPath = function (a, b, c, d, f) {
                var g = new e.Path;
                return this.forEachGlyph(a, b, c, d, f, function (a, b, c, d) {
                    var e = a.getPath(b, c, d);
                    g.extend(e)
                }), g
            }, d.prototype.draw = function (a, b, c, d, e, f) {
                this.getPath(b, c, d, e, f).draw(a)
            }, d.prototype.drawPoints = function (a, b, c, d, e, f) {
                this.forEachGlyph(b, c, d, e, f, function (b, c, d, e) {
                    b.drawPoints(a, c, d, e)
                })
            }, d.prototype.drawMetrics = function (a, b, c, d, e, f) {
                this.forEachGlyph(b, c, d, e, f, function (b, c, d, e) {
                    b.drawMetrics(a, c, d, e)
                })
            }, d.prototype.getEnglishName = function (a) {
                var b = this.names[a];
                if (b) return b.en
            }, d.prototype.validate = function () {
                function a(a, b) {
                    a || c.push(b)
                }

                function b(b) {
                    var c = d.getEnglishName(b);
                    a(c && c.trim().length > 0, "No English " + b + " specified.")
                }

                var c = [], d = this;
                b("fontFamily"), b("weightName"), b("manufacturer"), b("copyright"), b("version"), a(this.unitsPerEm > 0, "No unitsPerEm specified.")
            }, d.prototype.toTables = function () {
                return f.fontToTable(this)
            }, d.prototype.toBuffer = function () {
                for (var a = this.toTables(), b = a.encode(), c = new ArrayBuffer(b.length), d = new Uint8Array(c), e = 0; e < b.length; e++) d[e] = b[e];
                return c
            }, d.prototype.download = function () {
                var a = this.getEnglishName("fontFamily"), b = this.getEnglishName("fontSubfamily"),
                    c = a.replace(/\s/g, "") + "-" + b + ".otf", d = this.toBuffer();
                window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem, window.requestFileSystem(window.TEMPORARY, d.byteLength, function (a) {
                    a.root.getFile(c, {create: !0}, function (a) {
                        a.createWriter(function (b) {
                            var c = new DataView(d), e = new Blob([c], {type: "font/opentype"});
                            b.write(e), b.addEventListener("writeend", function () {
                                location.href = a.toURL()
                            }, !1)
                        })
                    })
                }, function (a) {
                    throw a
                })
            }, c.Font = d
        }, {"./encoding": 6, "./glyphset": 9, "./path": 12, "./tables/sfnt": 29}],
        8: [function (a, b, c) {
            "use strict";

            function d(a, b) {
                var c = b || {commands: []};
                return {
                    configurable: !0, get: function () {
                        return "function" == typeof c && (c = c()), c
                    }, set: function (a) {
                        c = a
                    }
                }
            }

            function e(a) {
                this.bindConstructorValues(a)
            }

            var f = a("./check"), g = a("./draw"), h = a("./path");
            e.prototype.bindConstructorValues = function (a) {
                this.index = a.index || 0, this.name = a.name || null, this.unicode = a.unicode || void 0, this.unicodes = a.unicodes || void 0 !== a.unicode ? [a.unicode] : [], a.xMin && (this.xMin = a.xMin), a.yMin && (this.yMin = a.yMin), a.xMax && (this.xMax = a.xMax), a.yMax && (this.yMax = a.yMax), a.advanceWidth && (this.advanceWidth = a.advanceWidth), Object.defineProperty(this, "path", d(this, a.path))
            }, e.prototype.addUnicode = function (a) {
                0 === this.unicodes.length && (this.unicode = a), this.unicodes.push(a)
            }, e.prototype.getPath = function (a, b, c) {
                a = void 0 !== a ? a : 0, b = void 0 !== b ? b : 0, c = void 0 !== c ? c : 72;
                for (var d = 1 / this.path.unitsPerEm * c, e = new h.Path, f = this.path.commands, g = 0; g < f.length; g += 1) {
                    var i = f[g];
                    "M" === i.type ? e.moveTo(a + i.x * d, b + -i.y * d) : "L" === i.type ? e.lineTo(a + i.x * d, b + -i.y * d) : "Q" === i.type ? e.quadraticCurveTo(a + i.x1 * d, b + -i.y1 * d, a + i.x * d, b + -i.y * d) : "C" === i.type ? e.curveTo(a + i.x1 * d, b + -i.y1 * d, a + i.x2 * d, b + -i.y2 * d, a + i.x * d, b + -i.y * d) : "Z" === i.type && e.closePath()
                }
                return e
            }, e.prototype.getContours = function () {
                if (void 0 === this.points) return [];
                for (var a = [], b = [], c = 0; c < this.points.length; c += 1) {
                    var d = this.points[c];
                    b.push(d), d.lastPointOfContour && (a.push(b), b = [])
                }
                return f.argument(0 === b.length, "There are still points left in the current contour."), a
            }, e.prototype.getMetrics = function () {
                for (var a = this.path.commands, b = [], c = [], d = 0; d < a.length; d += 1) {
                    var e = a[d];
                    "Z" !== e.type && (b.push(e.x), c.push(e.y)), "Q" !== e.type && "C" !== e.type || (b.push(e.x1), c.push(e.y1)), "C" === e.type && (b.push(e.x2), c.push(e.y2))
                }
                var f = {
                    xMin: Math.min.apply(null, b),
                    yMin: Math.min.apply(null, c),
                    xMax: Math.max.apply(null, b),
                    yMax: Math.max.apply(null, c),
                    leftSideBearing: 0
                };
                return isFinite(f.xMin) || (f.xMin = 0), isFinite(f.xMax) || (f.xMax = this.advanceWidth), isFinite(f.yMin) || (f.yMin = 0), isFinite(f.yMax) || (f.yMax = 0), f.rightSideBearing = this.advanceWidth - f.leftSideBearing - (f.xMax - f.xMin), f
            }, e.prototype.draw = function (a, b, c, d) {
                this.getPath(b, c, d).draw(a)
            }, e.prototype.drawPoints = function (a, b, c, d) {
                function e(b, c, d, e) {
                    var f = 2 * Math.PI;
                    a.beginPath();
                    for (var g = 0; g < b.length; g += 1) a.moveTo(c + b[g].x * e, d + b[g].y * e), a.arc(c + b[g].x * e, d + b[g].y * e, 2, 0, f, !1);
                    a.closePath(), a.fill()
                }

                b = void 0 !== b ? b : 0, c = void 0 !== c ? c : 0, d = void 0 !== d ? d : 24;
                for (var f = 1 / this.path.unitsPerEm * d, g = [], h = [], i = this.path, j = 0; j < i.commands.length; j += 1) {
                    var k = i.commands[j];
                    void 0 !== k.x && g.push({x: k.x, y: -k.y}), void 0 !== k.x1 && h.push({
                        x: k.x1,
                        y: -k.y1
                    }), void 0 !== k.x2 && h.push({x: k.x2, y: -k.y2})
                }
                a.fillStyle = "blue", e(g, b, c, f), a.fillStyle = "red", e(h, b, c, f)
            }, e.prototype.drawMetrics = function (a, b, c, d) {
                var e;
                b = void 0 !== b ? b : 0, c = void 0 !== c ? c : 0, d = void 0 !== d ? d : 24, e = 1 / this.path.unitsPerEm * d, a.lineWidth = 1, a.strokeStyle = "black", g.line(a, b, -1e4, b, 1e4), g.line(a, -1e4, c, 1e4, c);
                var f = this.xMin || 0, h = this.yMin || 0, i = this.xMax || 0, j = this.yMax || 0,
                    k = this.advanceWidth || 0;
                a.strokeStyle = "blue", g.line(a, b + f * e, -1e4, b + f * e, 1e4), g.line(a, b + i * e, -1e4, b + i * e, 1e4), g.line(a, -1e4, c + -h * e, 1e4, c + -h * e), g.line(a, -1e4, c + -j * e, 1e4, c + -j * e), a.strokeStyle = "green", g.line(a, b + k * e, -1e4, b + k * e, 1e4)
            }, c.Glyph = e
        }, {"./check": 4, "./draw": 5, "./path": 12}],
        9: [function (a, b, c) {
            "use strict";

            function d(a, b) {
                if (this.font = a, this.glyphs = {}, Array.isArray(b)) for (var c = 0; c < b.length; c++) this.glyphs[c] = b[c];
                this.length = b && b.length || 0
            }

            function e(a, b) {
                return new h.Glyph({index: b, font: a})
            }

            function f(a, b, c, d, e, f) {
                return function () {
                    var g = new h.Glyph({index: b, font: a});
                    return g.path = function () {
                        c(g, d, e);
                        var b = f(a.glyphs, g);
                        return b.unitsPerEm = a.unitsPerEm, b
                    }, g
                }
            }

            function g(a, b, c, d) {
                return function () {
                    var e = new h.Glyph({index: b, font: a});
                    return e.path = function () {
                        var b = c(a, e, d);
                        return b.unitsPerEm = a.unitsPerEm, b
                    }, e
                }
            }

            var h = a("./glyph");
            d.prototype.get = function (a) {
                return "function" == typeof this.glyphs[a] && (this.glyphs[a] = this.glyphs[a]()), this.glyphs[a]
            }, d.prototype.push = function (a, b) {
                this.glyphs[a] = b, this.length++
            }, c.GlyphSet = d, c.glyphLoader = e, c.ttfGlyphLoader = f, c.cffGlyphLoader = g
        }, {"./glyph": 8}],
        10: [function (a, b, c) {
            "use strict";

            function d(a) {
                for (var b = new ArrayBuffer(a.length), c = new Uint8Array(b), d = 0; d < a.length; d += 1) c[d] = a[d];
                return b
            }

            function e(b, c) {
                a("fs").readFile(b, function (a, b) {
                    if (a) return c(a.message);
                    c(null, d(b))
                })
            }

            function f(a, b) {
                var c = new XMLHttpRequest;
                c.open("get", a, !0), c.responseType = "arraybuffer", c.onload = function () {
                    return 200 !== c.status ? b("Font could not be loaded: " + c.statusText) : b(null, c.response)
                }, c.send()
            }

            function g(a) {
                var b, c, d, e, f, g, h, i, l, n, D = new k.Font, E = new DataView(a, 0), F = m.getFixed(E, 0);
                if (1 === F) D.outlinesFormat = "truetype"; else {
                    if ("OTTO" !== (F = m.getTag(E, 0))) throw new Error("Unsupported OpenType version " + F);
                    D.outlinesFormat = "cff"
                }
                for (var G = m.getUShort(E, 4), H = 12, I = 0; I < G; I += 1) {
                    var J = m.getTag(E, H), K = m.getULong(E, H + 8);
                    switch (J) {
                        case"cmap":
                            D.tables.cmap = o.parse(E, K), D.encoding = new j.CmapEncoding(D.tables.cmap);
                            break;
                        case"fvar":
                            e = K;
                            break;
                        case"head":
                            D.tables.head = t.parse(E, K), D.unitsPerEm = D.tables.head.unitsPerEm, b = D.tables.head.indexToLocFormat;
                            break;
                        case"hhea":
                            D.tables.hhea = u.parse(E, K), D.ascender = D.tables.hhea.ascender, D.descender = D.tables.hhea.descender, D.numberOfHMetrics = D.tables.hhea.numberOfHMetrics;
                            break;
                        case"hmtx":
                            h = K;
                            break;
                        case"ltag":
                            c = x.parse(E, K);
                            break;
                        case"maxp":
                            D.tables.maxp = z.parse(E, K), D.numGlyphs = D.tables.maxp.numGlyphs;
                            break;
                        case"name":
                            n = K;
                            break;
                        case"OS/2":
                            D.tables.os2 = B.parse(E, K);
                            break;
                        case"post":
                            D.tables.post = C.parse(E, K), D.glyphNames = new j.GlyphNames(D.tables.post);
                            break;
                        case"glyf":
                            f = K;
                            break;
                        case"loca":
                            l = K;
                            break;
                        case"CFF ":
                            d = K;
                            break;
                        case"kern":
                            i = K;
                            break;
                        case"GPOS":
                            g = K
                    }
                    H += 16
                }
                if (D.tables.name = A.parse(E, n, c), D.names = D.tables.name, f && l) {
                    var L = 0 === b, M = y.parse(E, l, D.numGlyphs, L);
                    D.glyphs = r.parse(E, f, M, D)
                } else {
                    if (!d) throw new Error("Font doesn't contain TrueType or CFF outlines.");
                    p.parse(E, d, D)
                }
                return v.parse(E, h, D.numberOfHMetrics, D.numGlyphs, D.glyphs), j.addGlyphNames(D), D.kerningPairs = i ? w.parse(E, i) : {}, g && s.parse(E, g, D), e && (D.tables.fvar = q.parse(E, e, D.names)), D
            }

            function h(a, b) {
                ("undefined" == typeof window ? e : f)(a, function (a, c) {
                    return a ? b(a) : b(null, g(c))
                })
            }

            function i(b) {
                return g(d(a("fs").readFileSync(b)))
            }

            var j = a("./encoding"), k = a("./font"), l = a("./glyph"), m = a("./parse"), n = a("./path"),
                o = a("./tables/cmap"), p = a("./tables/cff"), q = a("./tables/fvar"), r = a("./tables/glyf"),
                s = a("./tables/gpos"), t = a("./tables/head"), u = a("./tables/hhea"), v = a("./tables/hmtx"),
                w = a("./tables/kern"), x = a("./tables/ltag"), y = a("./tables/loca"), z = a("./tables/maxp"),
                A = a("./tables/name"), B = a("./tables/os2"), C = a("./tables/post");
            c._parse = m, c.Font = k.Font, c.Glyph = l.Glyph, c.Path = n.Path, c.parse = g, c.load = h, c.loadSync = i
        }, {
            "./encoding": 6,
            "./font": 7,
            "./glyph": 8,
            "./parse": 11,
            "./path": 12,
            "./tables/cff": 14,
            "./tables/cmap": 15,
            "./tables/fvar": 16,
            "./tables/glyf": 17,
            "./tables/gpos": 18,
            "./tables/head": 19,
            "./tables/hhea": 20,
            "./tables/hmtx": 21,
            "./tables/kern": 22,
            "./tables/loca": 23,
            "./tables/ltag": 24,
            "./tables/maxp": 25,
            "./tables/name": 26,
            "./tables/os2": 27,
            "./tables/post": 28,
            fs: 1
        }],
        11: [function (a, b, c) {
            "use strict";

            function d(a, b) {
                this.data = a, this.offset = b, this.relativeOffset = 0
            }

            c.getByte = function (a, b) {
                return a.getUint8(b)
            }, c.getCard8 = c.getByte, c.getUShort = function (a, b) {
                return a.getUint16(b, !1)
            }, c.getCard16 = c.getUShort, c.getShort = function (a, b) {
                return a.getInt16(b, !1)
            }, c.getULong = function (a, b) {
                return a.getUint32(b, !1)
            }, c.getFixed = function (a, b) {
                return a.getInt16(b, !1) + a.getUint16(b + 2, !1) / 65535
            }, c.getTag = function (a, b) {
                for (var c = "", d = b; d < b + 4; d += 1) c += String.fromCharCode(a.getInt8(d));
                return c
            }, c.getOffset = function (a, b, c) {
                for (var d = 0, e = 0; e < c; e += 1) d <<= 8, d += a.getUint8(b + e);
                return d
            }, c.getBytes = function (a, b, c) {
                for (var d = [], e = b; e < c; e += 1) d.push(a.getUint8(e));
                return d
            }, c.bytesToString = function (a) {
                for (var b = "", c = 0; c < a.length; c += 1) b += String.fromCharCode(a[c]);
                return b
            };
            var e = {byte: 1, uShort: 2, short: 2, uLong: 4, fixed: 4, longDateTime: 8, tag: 4};
            d.prototype.parseByte = function () {
                var a = this.data.getUint8(this.offset + this.relativeOffset);
                return this.relativeOffset += 1, a
            }, d.prototype.parseChar = function () {
                var a = this.data.getInt8(this.offset + this.relativeOffset);
                return this.relativeOffset += 1, a
            }, d.prototype.parseCard8 = d.prototype.parseByte, d.prototype.parseUShort = function () {
                var a = this.data.getUint16(this.offset + this.relativeOffset);
                return this.relativeOffset += 2, a
            }, d.prototype.parseCard16 = d.prototype.parseUShort, d.prototype.parseSID = d.prototype.parseUShort, d.prototype.parseOffset16 = d.prototype.parseUShort, d.prototype.parseShort = function () {
                var a = this.data.getInt16(this.offset + this.relativeOffset);
                return this.relativeOffset += 2, a
            }, d.prototype.parseF2Dot14 = function () {
                var a = this.data.getInt16(this.offset + this.relativeOffset) / 16384;
                return this.relativeOffset += 2, a
            }, d.prototype.parseULong = function () {
                var a = c.getULong(this.data, this.offset + this.relativeOffset);
                return this.relativeOffset += 4, a
            }, d.prototype.parseFixed = function () {
                var a = c.getFixed(this.data, this.offset + this.relativeOffset);
                return this.relativeOffset += 4, a
            }, d.prototype.parseOffset16List = d.prototype.parseUShortList = function (a) {
                for (var b = new Array(a), d = this.data, e = this.offset + this.relativeOffset, f = 0; f < a; f++) b[f] = c.getUShort(d, e), e += 2;
                return this.relativeOffset += 2 * a, b
            }, d.prototype.parseString = function (a) {
                var b = this.data, c = this.offset + this.relativeOffset, d = "";
                this.relativeOffset += a;
                for (var e = 0; e < a; e++) d += String.fromCharCode(b.getUint8(c + e));
                return d
            }, d.prototype.parseTag = function () {
                return this.parseString(4)
            }, d.prototype.parseLongDateTime = function () {
                var a = c.getULong(this.data, this.offset + this.relativeOffset + 4);
                return this.relativeOffset += 8, a
            }, d.prototype.parseFixed = function () {
                var a = c.getULong(this.data, this.offset + this.relativeOffset);
                return this.relativeOffset += 4, a / 65536
            }, d.prototype.parseVersion = function () {
                var a = c.getUShort(this.data, this.offset + this.relativeOffset),
                    b = c.getUShort(this.data, this.offset + this.relativeOffset + 2);
                return this.relativeOffset += 4, a + b / 4096 / 10
            }, d.prototype.skip = function (a, b) {
                void 0 === b && (b = 1), this.relativeOffset += e[a] * b
            }, c.Parser = d
        }, {}],
        12: [function (a, b, c) {
            "use strict";

            function d() {
                this.commands = [], this.fill = "black", this.stroke = null, this.strokeWidth = 1
            }

            d.prototype.moveTo = function (a, b) {
                this.commands.push({type: "M", x: a, y: b})
            }, d.prototype.lineTo = function (a, b) {
                this.commands.push({type: "L", x: a, y: b})
            }, d.prototype.curveTo = d.prototype.bezierCurveTo = function (a, b, c, d, e, f) {
                this.commands.push({type: "C", x1: a, y1: b, x2: c, y2: d, x: e, y: f})
            }, d.prototype.quadTo = d.prototype.quadraticCurveTo = function (a, b, c, d) {
                this.commands.push({type: "Q", x1: a, y1: b, x: c, y: d})
            }, d.prototype.close = d.prototype.closePath = function () {
                this.commands.push({type: "Z"})
            }, d.prototype.extend = function (a) {
                a.commands && (a = a.commands), Array.prototype.push.apply(this.commands, a)
            }, d.prototype.draw = function (a) {
                a.beginPath();
                for (var b = 0; b < this.commands.length; b += 1) {
                    var c = this.commands[b];
                    "M" === c.type ? a.moveTo(c.x, c.y) : "L" === c.type ? a.lineTo(c.x, c.y) : "C" === c.type ? a.bezierCurveTo(c.x1, c.y1, c.x2, c.y2, c.x, c.y) : "Q" === c.type ? a.quadraticCurveTo(c.x1, c.y1, c.x, c.y) : "Z" === c.type && a.closePath()
                }
                this.fill && (a.fillStyle = this.fill, a.fill()), this.stroke && (a.strokeStyle = this.stroke, a.lineWidth = this.strokeWidth, a.stroke())
            }, d.prototype.toPathData = function (a) {
                function b(b) {
                    return Math.round(b) === b ? "" + Math.round(b) : b.toFixed(a)
                }

                function c() {
                    for (var a = "", c = 0; c < arguments.length; c += 1) {
                        var d = arguments[c];
                        d >= 0 && c > 0 && (a += " "), a += b(d)
                    }
                    return a
                }

                a = void 0 !== a ? a : 2;
                for (var d = "", e = 0; e < this.commands.length; e += 1) {
                    var f = this.commands[e];
                    "M" === f.type ? d += "M" + c(f.x, f.y) : "L" === f.type ? d += "L" + c(f.x, f.y) : "C" === f.type ? d += "C" + c(f.x1, f.y1, f.x2, f.y2, f.x, f.y) : "Q" === f.type ? d += "Q" + c(f.x1, f.y1, f.x, f.y) : "Z" === f.type && (d += "Z")
                }
                return d
            }, d.prototype.toSVG = function (a) {
                var b = '<path d="';
                return b += this.toPathData(a), b += '"', this.fill & "black" !== this.fill && (b += null === this.fill ? ' fill="none"' : ' fill="' + this.fill + '"'), this.stroke && (b += ' stroke="' + this.stroke + '" stroke-width="' + this.strokeWidth + '"'), b += "/>"
            }, c.Path = d
        }, {}],
        13: [function (a, b, c) {
            "use strict";

            function d(a, b, c) {
                var d;
                for (d = 0; d < b.length; d += 1) {
                    var e = b[d];
                    this[e.name] = e.value
                }
                if (this.tableName = a, this.fields = b, c) {
                    var f = Object.keys(c);
                    for (d = 0; d < f.length; d += 1) {
                        var g = f[d], h = c[g];
                        void 0 !== this[g] && (this[g] = h)
                    }
                }
            }

            var e = a("./check"), f = a("./types").encode, g = a("./types").sizeOf;
            d.prototype.sizeOf = function () {
                for (var a = 0, b = 0; b < this.fields.length; b += 1) {
                    var c = this.fields[b], d = this[c.name];
                    if (void 0 === d && (d = c.value), "function" == typeof d.sizeOf) a += d.sizeOf(); else {
                        var f = g[c.type];
                        e.assert("function" == typeof f, "Could not find sizeOf function for field" + c.name), a += f(d)
                    }
                }
                return a
            }, d.prototype.encode = function () {
                return f.TABLE(this)
            }, c.Table = d
        }, {"./check": 4, "./types": 30}],
        14: [function (a, b, c) {
            "use strict";

            function d(a, b) {
                if (a === b) return !0;
                if (Array.isArray(a) && Array.isArray(b)) {
                    if (a.length !== b.length) return !1;
                    for (var c = 0; c < a.length; c += 1) if (!d(a[c], b[c])) return !1;
                    return !0
                }
                return !1
            }

            function e(a, b, c) {
                var d, e, f, g = [], h = [], i = J.getCard16(a, b);
                if (0 !== i) {
                    var j = J.getByte(a, b + 2);
                    e = b + (i + 1) * j + 2;
                    var k = b + 3;
                    for (d = 0; d < i + 1; d += 1) g.push(J.getOffset(a, k, j)), k += j;
                    f = e + g[i]
                } else f = b + 2;
                for (d = 0; d < g.length - 1; d += 1) {
                    var l = J.getBytes(a, e + g[d], e + g[d + 1]);
                    c && (l = c(l)), h.push(l)
                }
                return {objects: h, startOffset: b, endOffset: f}
            }

            function f(a) {
                for (var b = "", c = 15, d = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "E", "E-", null, "-"]; ;) {
                    var e = a.parseByte(), f = e >> 4, g = 15 & e;
                    if (f === c) break;
                    if (b += d[f], g === c) break;
                    b += d[g]
                }
                return parseFloat(b)
            }

            function g(a, b) {
                var c, d, e, g;
                if (28 === b) return c = a.parseByte(), d = a.parseByte(), c << 8 | d;
                if (29 === b) return c = a.parseByte(), d = a.parseByte(), e = a.parseByte(), g = a.parseByte(), c << 24 | d << 16 | e << 8 | g;
                if (30 === b) return f(a);
                if (b >= 32 && b <= 246) return b - 139;
                if (b >= 247 && b <= 250) return c = a.parseByte(), 256 * (b - 247) + c + 108;
                if (b >= 251 && b <= 254) return c = a.parseByte(), 256 * -(b - 251) - c - 108;
                throw new Error("Invalid b0 " + b)
            }

            function h(a) {
                for (var b = {}, c = 0; c < a.length; c += 1) {
                    var d, e = a[c][0], f = a[c][1];
                    if (d = 1 === f.length ? f[0] : f, b.hasOwnProperty(e)) throw new Error("Object " + b + " already has key " + e);
                    b[e] = d
                }
                return b
            }

            function i(a, b, c) {
                b = void 0 !== b ? b : 0;
                var d = new J.Parser(a, b), e = [], f = [];
                for (c = void 0 !== c ? c : a.length; d.relativeOffset < c;) {
                    var i = d.parseByte();
                    i <= 21 ? (12 === i && (i = 1200 + d.parseByte()), e.push([i, f]), f = []) : f.push(g(d, i))
                }
                return h(e)
            }

            function j(a, b) {
                return b = b <= 390 ? H.cffStandardStrings[b] : a[b - 391]
            }

            function k(a, b, c) {
                for (var d = {}, e = 0; e < b.length; e += 1) {
                    var f = b[e], g = a[f.op];
                    void 0 === g && (g = void 0 !== f.value ? f.value : null), "SID" === f.type && (g = j(c, g)), d[f.name] = g
                }
                return d
            }

            function l(a, b) {
                var c = {};
                return c.formatMajor = J.getCard8(a, b), c.formatMinor = J.getCard8(a, b + 1), c.size = J.getCard8(a, b + 2), c.offsetSize = J.getCard8(a, b + 3), c.startOffset = b, c.endOffset = b + 4, c
            }

            function m(a, b) {
                return k(i(a, 0, a.byteLength), M, b)
            }

            function n(a, b, c, d) {
                return k(i(a, b, c), N, d)
            }

            function o(a, b, c, d) {
                var e, f, g, h = new J.Parser(a, b);
                c -= 1;
                var i = [".notdef"], k = h.parseCard8();
                if (0 === k) for (e = 0; e < c; e += 1) f = h.parseSID(), i.push(j(d, f)); else if (1 === k) for (; i.length <= c;) for (f = h.parseSID(), g = h.parseCard8(), e = 0; e <= g; e += 1) i.push(j(d, f)), f += 1; else {
                    if (2 !== k) throw new Error("Unknown charset format " + k);
                    for (; i.length <= c;) for (f = h.parseSID(), g = h.parseCard16(), e = 0; e <= g; e += 1) i.push(j(d, f)), f += 1
                }
                return i
            }

            function p(a, b, c) {
                var d, e, f = {}, g = new J.Parser(a, b), h = g.parseCard8();
                if (0 === h) {
                    var i = g.parseCard8();
                    for (d = 0; d < i; d += 1) e = g.parseCard8(), f[e] = d
                } else {
                    if (1 !== h) throw new Error("Unknown encoding format " + h);
                    var j = g.parseCard8();
                    for (e = 1, d = 0; d < j; d += 1) for (var k = g.parseCard8(), l = g.parseCard8(), m = k; m <= k + l; m += 1) f[m] = e, e += 1
                }
                return new H.CffEncoding(f, c)
            }

            function q(a, b, c) {
                function d(a, b) {
                    p && k.closePath(), k.moveTo(a, b), p = !0
                }

                function e() {
                    var b;
                    b = l.length % 2 != 0, b && !n && (o = l.shift() + a.nominalWidthX), m += l.length >> 1, l.length = 0, n = !0
                }

                function f(c) {
                    for (var s, t, u, v, w, x, y, z, A, B, C, D, E = 0; E < c.length;) {
                        var F = c[E];
                        switch (E += 1, F) {
                            case 1:
                                e();
                                break;
                            case 3:
                                e();
                                break;
                            case 4:
                                l.length > 1 && !n && (o = l.shift() + a.nominalWidthX, n = !0), r += l.pop(), d(q, r);
                                break;
                            case 5:
                                for (; l.length > 0;) q += l.shift(), r += l.shift(), k.lineTo(q, r);
                                break;
                            case 6:
                                for (; l.length > 0 && (q += l.shift(), k.lineTo(q, r), 0 !== l.length);) r += l.shift(), k.lineTo(q, r);
                                break;
                            case 7:
                                for (; l.length > 0 && (r += l.shift(), k.lineTo(q, r), 0 !== l.length);) q += l.shift(), k.lineTo(q, r);
                                break;
                            case 8:
                                for (; l.length > 0;) g = q + l.shift(), h = r + l.shift(), i = g + l.shift(), j = h + l.shift(), q = i + l.shift(), r = j + l.shift(), k.curveTo(g, h, i, j, q, r);
                                break;
                            case 10:
                                w = l.pop() + a.subrsBias, x = a.subrs[w], x && f(x);
                                break;
                            case 11:
                                return;
                            case 12:
                                switch (F = c[E], E += 1, F) {
                                    case 35:
                                        g = q + l.shift(), h = r + l.shift(), i = g + l.shift(), j = h + l.shift(), y = i + l.shift(), z = j + l.shift(), A = y + l.shift(), B = z + l.shift(), C = A + l.shift(), D = B + l.shift(), q = C + l.shift(), r = D + l.shift(), l.shift(), k.curveTo(g, h, i, j, y, z), k.curveTo(A, B, C, D, q, r);
                                        break;
                                    case 34:
                                        g = q + l.shift(), h = r, i = g + l.shift(), j = h + l.shift(), y = i + l.shift(), z = j, A = y + l.shift(), B = j, C = A + l.shift(), D = r, q = C + l.shift(), k.curveTo(g, h, i, j, y, z), k.curveTo(A, B, C, D, q, r);
                                        break;
                                    case 36:
                                        g = q + l.shift(), h = r + l.shift(), i = g + l.shift(), j = h + l.shift(), y = i + l.shift(), z = j, A = y + l.shift(), B = j, C = A + l.shift(), D = B + l.shift(), q = C + l.shift(), k.curveTo(g, h, i, j, y, z), k.curveTo(A, B, C, D, q, r);
                                        break;
                                    case 37:
                                        g = q + l.shift(), h = r + l.shift(), i = g + l.shift(), j = h + l.shift(), y = i + l.shift(), z = j + l.shift(), A = y + l.shift(), B = z + l.shift(), C = A + l.shift(), D = B + l.shift(), Math.abs(C - q) > Math.abs(D - r) ? q = C + l.shift() : r = D + l.shift(), k.curveTo(g, h, i, j, y, z), k.curveTo(A, B, C, D, q, r);
                                        break;
                                    default:
                                        console.log("Glyph " + b.index + ": unknown operator 1200" + F), l.length = 0
                                }
                                break;
                            case 14:
                                l.length > 0 && !n && (o = l.shift() + a.nominalWidthX, n = !0), p && (k.closePath(), p = !1);
                                break;
                            case 18:
                                e();
                                break;
                            case 19:
                            case 20:
                                e(), E += m + 7 >> 3;
                                break;
                            case 21:
                                l.length > 2 && !n && (o = l.shift() + a.nominalWidthX, n = !0), r += l.pop(), q += l.pop(), d(q, r);
                                break;
                            case 22:
                                l.length > 1 && !n && (o = l.shift() + a.nominalWidthX, n = !0), q += l.pop(), d(q, r);
                                break;
                            case 23:
                                e();
                                break;
                            case 24:
                                for (; l.length > 2;) g = q + l.shift(), h = r + l.shift(), i = g + l.shift(), j = h + l.shift(), q = i + l.shift(), r = j + l.shift(), k.curveTo(g, h, i, j, q, r);
                                q += l.shift(), r += l.shift(), k.lineTo(q, r);
                                break;
                            case 25:
                                for (; l.length > 6;) q += l.shift(), r += l.shift(), k.lineTo(q, r);
                                g = q + l.shift(), h = r + l.shift(), i = g + l.shift(), j = h + l.shift(), q = i + l.shift(), r = j + l.shift(), k.curveTo(g, h, i, j, q, r);
                                break;
                            case 26:
                                for (l.length % 2 && (q += l.shift()); l.length > 0;) g = q, h = r + l.shift(), i = g + l.shift(), j = h + l.shift(), q = i, r = j + l.shift(), k.curveTo(g, h, i, j, q, r);
                                break;
                            case 27:
                                for (l.length % 2 && (r += l.shift()); l.length > 0;) g = q + l.shift(), h = r, i = g + l.shift(), j = h + l.shift(), q = i + l.shift(), r = j, k.curveTo(g, h, i, j, q, r);
                                break;
                            case 28:
                                s = c[E], t = c[E + 1], l.push((s << 24 | t << 16) >> 16), E += 2;
                                break;
                            case 29:
                                w = l.pop() + a.gsubrsBias, x = a.gsubrs[w], x && f(x);
                                break;
                            case 30:
                                for (; l.length > 0 && (g = q, h = r + l.shift(), i = g + l.shift(), j = h + l.shift(), q = i + l.shift(), r = j + (1 === l.length ? l.shift() : 0), k.curveTo(g, h, i, j, q, r), 0 !== l.length);) g = q + l.shift(), h = r, i = g + l.shift(), j = h + l.shift(), r = j + l.shift(), q = i + (1 === l.length ? l.shift() : 0), k.curveTo(g, h, i, j, q, r);
                                break;
                            case 31:
                                for (; l.length > 0 && (g = q + l.shift(), h = r, i = g + l.shift(), j = h + l.shift(), r = j + l.shift(), q = i + (1 === l.length ? l.shift() : 0), k.curveTo(g, h, i, j, q, r), 0 !== l.length);) g = q, h = r + l.shift(), i = g + l.shift(), j = h + l.shift(), q = i + l.shift(), r = j + (1 === l.length ? l.shift() : 0), k.curveTo(g, h, i, j, q, r);
                                break;
                            default:
                                F < 32 ? console.log("Glyph " + b.index + ": unknown operator " + F) : F < 247 ? l.push(F - 139) : F < 251 ? (s = c[E], E += 1, l.push(256 * (F - 247) + s + 108)) : F < 255 ? (s = c[E], E += 1, l.push(256 * -(F - 251) - s - 108)) : (s = c[E], t = c[E + 1], u = c[E + 2], v = c[E + 3], E += 4, l.push((s << 24 | t << 16 | u << 8 | v) / 65536))
                        }
                    }
                }

                var g, h, i, j, k = new K.Path, l = [], m = 0, n = !1, o = a.defaultWidthX, p = !1, q = 0, r = 0;
                return f(c), b.advanceWidth = o, k
            }

            function r(a) {
                return a.length < 1240 ? 107 : a.length < 33900 ? 1131 : 32768
            }

            function s(a, b, c) {
                c.tables.cff = {};
                var d = l(a, b), f = e(a, d.endOffset, J.bytesToString), g = e(a, f.endOffset),
                    h = e(a, g.endOffset, J.bytesToString), i = e(a, h.endOffset);
                c.gsubrs = i.objects, c.gsubrsBias = r(c.gsubrs);
                var j = new DataView(new Uint8Array(g.objects[0]).buffer), k = m(j, h.objects);
                c.tables.cff.topDict = k;
                var s = b + k.private[1], t = n(a, s, k.private[0], h.objects);
                if (c.defaultWidthX = t.defaultWidthX, c.nominalWidthX = t.nominalWidthX, 0 !== t.subrs) {
                    var u = s + t.subrs, v = e(a, u);
                    c.subrs = v.objects, c.subrsBias = r(c.subrs)
                } else c.subrs = [], c.subrsBias = 0;
                var w = e(a, b + k.charStrings);
                c.nGlyphs = w.objects.length;
                var x = o(a, b + k.charset, c.nGlyphs, h.objects);
                0 === k.encoding ? c.cffEncoding = new H.CffEncoding(H.cffStandardEncoding, x) : 1 === k.encoding ? c.cffEncoding = new H.CffEncoding(H.cffExpertEncoding, x) : c.cffEncoding = p(a, b + k.encoding, x), c.encoding = c.encoding || c.cffEncoding, c.glyphs = new I.GlyphSet(c);
                for (var y = 0; y < c.nGlyphs; y += 1) {
                    var z = w.objects[y];
                    c.glyphs.push(y, I.cffGlyphLoader(c, y, q, z))
                }
            }

            function t(a, b) {
                var c, d = H.cffStandardStrings.indexOf(a);
                return d >= 0 && (c = d), d = b.indexOf(a), d >= 0 ? c = d + H.cffStandardStrings.length : (c = H.cffStandardStrings.length + b.length, b.push(a)), c
            }

            function u() {
                return new L.Table("Header", [{name: "major", type: "Card8", value: 1}, {
                    name: "minor",
                    type: "Card8",
                    value: 0
                }, {name: "hdrSize", type: "Card8", value: 4}, {name: "major", type: "Card8", value: 1}])
            }

            function v(a) {
                var b = new L.Table("Name INDEX", [{name: "names", type: "INDEX", value: []}]);
                b.names = [];
                for (var c = 0; c < a.length; c += 1) b.names.push({name: "name_" + c, type: "NAME", value: a[c]});
                return b
            }

            function w(a, b, c) {
                for (var e = {}, f = 0; f < a.length; f += 1) {
                    var g = a[f], h = b[g.name];
                    void 0 === h || d(h, g.value) || ("SID" === g.type && (h = t(h, c)), e[g.op] = {
                        name: g.name,
                        type: g.type,
                        value: h
                    })
                }
                return e
            }

            function x(a, b) {
                var c = new L.Table("Top DICT", [{name: "dict", type: "DICT", value: {}}]);
                return c.dict = w(M, a, b), c
            }

            function y(a) {
                var b = new L.Table("Top DICT INDEX", [{name: "topDicts", type: "INDEX", value: []}]);
                return b.topDicts = [{name: "topDict_0", type: "TABLE", value: a}], b
            }

            function z(a) {
                var b = new L.Table("String INDEX", [{name: "strings", type: "INDEX", value: []}]);
                b.strings = [];
                for (var c = 0; c < a.length; c += 1) b.strings.push({
                    name: "string_" + c,
                    type: "STRING",
                    value: a[c]
                });
                return b
            }

            function A() {
                return new L.Table("Global Subr INDEX", [{name: "subrs", type: "INDEX", value: []}])
            }

            function B(a, b) {
                for (var c = new L.Table("Charsets", [{
                    name: "format",
                    type: "Card8",
                    value: 0
                }]), d = 0; d < a.length; d += 1) {
                    var e = a[d], f = t(e, b);
                    c.fields.push({name: "glyph_" + d, type: "SID", value: f})
                }
                return c
            }

            function C(a) {
                var b = [], c = a.path;
                b.push({name: "width", type: "NUMBER", value: a.advanceWidth});
                for (var d = 0, e = 0, f = 0; f < c.commands.length; f += 1) {
                    var g, h, i = c.commands[f];
                    if ("Q" === i.type) {
                        var j = 1 / 3, k = 2 / 3;
                        i = {
                            type: "C",
                            x: i.x,
                            y: i.y,
                            x1: j * d + k * i.x1,
                            y1: j * e + k * i.y1,
                            x2: j * i.x + k * i.x1,
                            y2: j * i.y + k * i.y1
                        }
                    }
                    if ("M" === i.type) g = Math.round(i.x - d), h = Math.round(i.y - e), b.push({
                        name: "dx",
                        type: "NUMBER",
                        value: g
                    }), b.push({name: "dy", type: "NUMBER", value: h}), b.push({
                        name: "rmoveto",
                        type: "OP",
                        value: 21
                    }), d = Math.round(i.x), e = Math.round(i.y); else if ("L" === i.type) g = Math.round(i.x - d), h = Math.round(i.y - e), b.push({
                        name: "dx",
                        type: "NUMBER",
                        value: g
                    }), b.push({name: "dy", type: "NUMBER", value: h}), b.push({
                        name: "rlineto",
                        type: "OP",
                        value: 5
                    }), d = Math.round(i.x), e = Math.round(i.y); else if ("C" === i.type) {
                        var l = Math.round(i.x1 - d), m = Math.round(i.y1 - e), n = Math.round(i.x2 - i.x1),
                            o = Math.round(i.y2 - i.y1);
                        g = Math.round(i.x - i.x2), h = Math.round(i.y - i.y2), b.push({
                            name: "dx1",
                            type: "NUMBER",
                            value: l
                        }), b.push({name: "dy1", type: "NUMBER", value: m}), b.push({
                            name: "dx2",
                            type: "NUMBER",
                            value: n
                        }), b.push({name: "dy2", type: "NUMBER", value: o}), b.push({
                            name: "dx",
                            type: "NUMBER",
                            value: g
                        }), b.push({name: "dy", type: "NUMBER", value: h}), b.push({
                            name: "rrcurveto",
                            type: "OP",
                            value: 8
                        }), d = Math.round(i.x), e = Math.round(i.y)
                    }
                }
                return b.push({name: "endchar", type: "OP", value: 14}), b
            }

            function D(a) {
                for (var b = new L.Table("CharStrings INDEX", [{
                    name: "charStrings",
                    type: "INDEX",
                    value: []
                }]), c = 0; c < a.length; c += 1) {
                    var d = a.get(c), e = C(d);
                    b.charStrings.push({name: d.name, type: "CHARSTRING", value: e})
                }
                return b
            }

            function E(a, b) {
                var c = new L.Table("Private DICT", [{name: "dict", type: "DICT", value: {}}]);
                return c.dict = w(N, a, b), c
            }

            function F(a) {
                var b = new L.Table("Private DICT INDEX", [{name: "privateDicts", type: "INDEX", value: []}]);
                return b.privateDicts = [{name: "privateDict_0", type: "TABLE", value: a}], b
            }

            function G(a, b) {
                for (var c, d = new L.Table("CFF ", [{name: "header", type: "TABLE"}, {
                    name: "nameIndex",
                    type: "TABLE"
                }, {name: "topDictIndex", type: "TABLE"}, {
                    name: "stringIndex",
                    type: "TABLE"
                }, {name: "globalSubrIndex", type: "TABLE"}, {
                    name: "charsets",
                    type: "TABLE"
                }, {name: "charStringsIndex", type: "TABLE"}, {
                    name: "privateDictIndex",
                    type: "TABLE"
                }]), e = 1 / b.unitsPerEm, f = {
                    version: b.version,
                    fullName: b.fullName,
                    familyName: b.familyName,
                    weight: b.weightName,
                    fontMatrix: [e, 0, 0, e, 0, 0],
                    charset: 999,
                    encoding: 0,
                    charStrings: 999,
                    private: [0, 999]
                }, g = {}, h = [], i = 1; i < a.length; i += 1) c = a.get(i), h.push(c.name);
                var j = [];
                d.header = u(), d.nameIndex = v([b.postScriptName]);
                var k = x(f, j);
                d.topDictIndex = y(k), d.globalSubrIndex = A(), d.charsets = B(h, j), d.charStringsIndex = D(a);
                var l = E(g, j);
                d.privateDictIndex = F(l), d.stringIndex = z(j);
                var m = d.header.sizeOf() + d.nameIndex.sizeOf() + d.topDictIndex.sizeOf() + d.stringIndex.sizeOf() + d.globalSubrIndex.sizeOf();
                return f.charset = m, f.encoding = 0, f.charStrings = f.charset + d.charsets.sizeOf(), f.private[1] = f.charStrings + d.charStringsIndex.sizeOf(), k = x(f, j), d.topDictIndex = y(k), d
            }

            var H = a("../encoding"), I = a("../glyphset"), J = a("../parse"), K = a("../path"), L = a("../table"),
                M = [{name: "version", op: 0, type: "SID"}, {name: "notice", op: 1, type: "SID"}, {
                    name: "copyright",
                    op: 1200,
                    type: "SID"
                }, {name: "fullName", op: 2, type: "SID"}, {name: "familyName", op: 3, type: "SID"}, {
                    name: "weight",
                    op: 4,
                    type: "SID"
                }, {name: "isFixedPitch", op: 1201, type: "number", value: 0}, {
                    name: "italicAngle",
                    op: 1202,
                    type: "number",
                    value: 0
                }, {name: "underlinePosition", op: 1203, type: "number", value: -100}, {
                    name: "underlineThickness",
                    op: 1204,
                    type: "number",
                    value: 50
                }, {name: "paintType", op: 1205, type: "number", value: 0}, {
                    name: "charstringType",
                    op: 1206,
                    type: "number",
                    value: 2
                }, {
                    name: "fontMatrix",
                    op: 1207,
                    type: ["real", "real", "real", "real", "real", "real"],
                    value: [.001, 0, 0, .001, 0, 0]
                }, {name: "uniqueId", op: 13, type: "number"}, {
                    name: "fontBBox",
                    op: 5,
                    type: ["number", "number", "number", "number"],
                    value: [0, 0, 0, 0]
                }, {name: "strokeWidth", op: 1208, type: "number", value: 0}, {
                    name: "xuid",
                    op: 14,
                    type: [],
                    value: null
                }, {name: "charset", op: 15, type: "offset", value: 0}, {
                    name: "encoding",
                    op: 16,
                    type: "offset",
                    value: 0
                }, {name: "charStrings", op: 17, type: "offset", value: 0}, {
                    name: "private",
                    op: 18,
                    type: ["number", "offset"],
                    value: [0, 0]
                }], N = [{name: "subrs", op: 19, type: "offset", value: 0}, {
                    name: "defaultWidthX",
                    op: 20,
                    type: "number",
                    value: 0
                }, {name: "nominalWidthX", op: 21, type: "number", value: 0}];
            c.parse = s, c.make = G
        }, {"../encoding": 6, "../glyphset": 9, "../parse": 11, "../path": 12, "../table": 13}],
        15: [function (a, b, c) {
            "use strict";

            function d(a, b) {
                var c, d = {};
                d.version = i.getUShort(a, b), h.argument(0 === d.version, "cmap table version should be 0."), d.numTables = i.getUShort(a, b + 2);
                var e = -1;
                for (c = 0; c < d.numTables; c += 1) {
                    var f = i.getUShort(a, b + 4 + 8 * c), g = i.getUShort(a, b + 4 + 8 * c + 2);
                    if (3 === f && (1 === g || 0 === g)) {
                        e = i.getULong(a, b + 4 + 8 * c + 4);
                        break
                    }
                }
                if (e === -1) return null;
                var j = new i.Parser(a, b + e);
                d.format = j.parseUShort(), h.argument(4 === d.format, "Only format 4 cmap tables are supported."), d.length = j.parseUShort(), d.language = j.parseUShort();
                var k;
                d.segCount = k = j.parseUShort() >> 1, j.skip("uShort", 3), d.glyphIndexMap = {};
                var l = new i.Parser(a, b + e + 14), m = new i.Parser(a, b + e + 16 + 2 * k),
                    n = new i.Parser(a, b + e + 16 + 4 * k), o = new i.Parser(a, b + e + 16 + 6 * k),
                    p = b + e + 16 + 8 * k;
                for (c = 0; c < k - 1; c += 1) for (var q, r = l.parseUShort(), s = m.parseUShort(), t = n.parseShort(), u = o.parseUShort(), v = s; v <= r; v += 1) 0 !== u ? (p = o.offset + o.relativeOffset - 2, p += u, p += 2 * (v - s), 0 !== (q = i.getUShort(a, p)) && (q = q + t & 65535)) : q = v + t & 65535, d.glyphIndexMap[v] = q;
                return d
            }

            function e(a, b, c) {
                a.segments.push({end: b, start: b, delta: -(b - c), offset: 0})
            }

            function f(a) {
                a.segments.push({end: 65535, start: 65535, delta: 1, offset: 0})
            }

            function g(a) {
                var b, c = new j.Table("cmap", [{name: "version", type: "USHORT", value: 0}, {
                    name: "numTables",
                    type: "USHORT",
                    value: 1
                }, {name: "platformID", type: "USHORT", value: 3}, {
                    name: "encodingID",
                    type: "USHORT",
                    value: 1
                }, {name: "offset", type: "ULONG", value: 12}, {
                    name: "format",
                    type: "USHORT",
                    value: 4
                }, {name: "length", type: "USHORT", value: 0}, {
                    name: "language",
                    type: "USHORT",
                    value: 0
                }, {name: "segCountX2", type: "USHORT", value: 0}, {
                    name: "searchRange",
                    type: "USHORT",
                    value: 0
                }, {name: "entrySelector", type: "USHORT", value: 0}, {name: "rangeShift", type: "USHORT", value: 0}]);
                for (c.segments = [], b = 0; b < a.length; b += 1) {
                    for (var d = a.get(b), g = 0; g < d.unicodes.length; g += 1) e(c, d.unicodes[g], b);
                    c.segments = c.segments.sort(function (a, b) {
                        return a.start - b.start
                    })
                }
                f(c);
                var h;
                h = c.segments.length, c.segCountX2 = 2 * h, c.searchRange = 2 * Math.pow(2, Math.floor(Math.log(h) / Math.log(2))), c.entrySelector = Math.log(c.searchRange / 2) / Math.log(2), c.rangeShift = c.segCountX2 - c.searchRange;
                var i = [], k = [], l = [], m = [], n = [];
                for (b = 0; b < h; b += 1) {
                    var o = c.segments[b];
                    i = i.concat({name: "end_" + b, type: "USHORT", value: o.end}), k = k.concat({
                        name: "start_" + b,
                        type: "USHORT",
                        value: o.start
                    }), l = l.concat({
                        name: "idDelta_" + b,
                        type: "SHORT",
                        value: o.delta
                    }), m = m.concat({
                        name: "idRangeOffset_" + b,
                        type: "USHORT",
                        value: o.offset
                    }), void 0 !== o.glyphId && (n = n.concat({name: "glyph_" + b, type: "USHORT", value: o.glyphId}))
                }
                return c.fields = c.fields.concat(i), c.fields.push({
                    name: "reservedPad",
                    type: "USHORT",
                    value: 0
                }), c.fields = c.fields.concat(k), c.fields = c.fields.concat(l), c.fields = c.fields.concat(m), c.fields = c.fields.concat(n), c.length = 14 + 2 * i.length + 2 + 2 * k.length + 2 * l.length + 2 * m.length + 2 * n.length, c
            }

            var h = a("../check"), i = a("../parse"), j = a("../table");
            c.parse = d, c.make = g
        }, {"../check": 4, "../parse": 11, "../table": 13}],
        16: [function (a, b, c) {
            "use strict";

            function d(a, b) {
                var c = JSON.stringify(a), d = 256;
                for (var e in b) {
                    var f = parseInt(e);
                    if (f && !(f < 256)) {
                        if (JSON.stringify(b[e]) === c) return f;
                        d <= f && (d = f + 1)
                    }
                }
                return b[d] = a, d
            }

            function e(a, b) {
                var c = d(a.name, b);
                return new m.Table("fvarAxis", [{name: "tag", type: "TAG", value: a.tag}, {
                    name: "minValue",
                    type: "FIXED",
                    value: a.minValue << 16
                }, {name: "defaultValue", type: "FIXED", value: a.defaultValue << 16}, {
                    name: "maxValue",
                    type: "FIXED",
                    value: a.maxValue << 16
                }, {name: "flags", type: "USHORT", value: 0}, {name: "nameID", type: "USHORT", value: c}])
            }

            function f(a, b, c) {
                var d = {}, e = new l.Parser(a, b);
                return d.tag = e.parseTag(), d.minValue = e.parseFixed(), d.defaultValue = e.parseFixed(), d.maxValue = e.parseFixed(), e.skip("uShort", 1), d.name = c[e.parseUShort()] || {}, d
            }

            function g(a, b, c) {
                for (var e = d(a.name, c), f = [{name: "nameID", type: "USHORT", value: e}, {
                    name: "flags",
                    type: "USHORT",
                    value: 0
                }], g = 0; g < b.length; ++g) {
                    var h = b[g].tag;
                    f.push({name: "axis " + h, type: "FIXED", value: a.coordinates[h] << 16})
                }
                return new m.Table("fvarInstance", f)
            }

            function h(a, b, c, d) {
                var e = {}, f = new l.Parser(a, b);
                e.name = d[f.parseUShort()] || {}, f.skip("uShort", 1), e.coordinates = {};
                for (var g = 0; g < c.length; ++g) e.coordinates[c[g].tag] = f.parseFixed();
                return e
            }

            function i(a, b) {
                var c = new m.Table("fvar", [{name: "version", type: "ULONG", value: 65536}, {
                    name: "offsetToData",
                    type: "USHORT",
                    value: 0
                }, {name: "countSizePairs", type: "USHORT", value: 2}, {
                    name: "axisCount",
                    type: "USHORT",
                    value: a.axes.length
                }, {name: "axisSize", type: "USHORT", value: 20}, {
                    name: "instanceCount",
                    type: "USHORT",
                    value: a.instances.length
                }, {name: "instanceSize", type: "USHORT", value: 4 + 4 * a.axes.length}]);
                c.offsetToData = c.sizeOf();
                for (var d = 0; d < a.axes.length; d++) c.fields.push({
                    name: "axis " + d,
                    type: "TABLE",
                    value: e(a.axes[d], b)
                });
                for (var f = 0; f < a.instances.length; f++) c.fields.push({
                    name: "instance " + f,
                    type: "TABLE",
                    value: g(a.instances[f], a.axes, b)
                });
                return c
            }

            function j(a, b, c) {
                var d = new l.Parser(a, b), e = d.parseULong();
                k.argument(65536 === e, "Unsupported fvar table version.");
                var g = d.parseOffset16();
                d.skip("uShort", 1);
                for (var i = d.parseUShort(), j = d.parseUShort(), m = d.parseUShort(), n = d.parseUShort(), o = [], p = 0; p < i; p++) o.push(f(a, b + g + p * j, c));
                for (var q = [], r = b + g + i * j, s = 0; s < m; s++) q.push(h(a, r + s * n, o, c));
                return {axes: o, instances: q}
            }

            var k = a("../check"), l = a("../parse"), m = a("../table");
            c.make = i, c.parse = j
        }, {"../check": 4, "../parse": 11, "../table": 13}],
        17: [function (a, b, c) {
            "use strict";

            function d(a, b, c, d, e) {
                var f;
                return (b & d) > 0 ? (f = a.parseByte(), 0 == (b & e) && (f = -f), f = c + f) : f = (b & e) > 0 ? c : c + a.parseShort(), f
            }

            function e(a, b, c) {
                var e = new m.Parser(b, c);
                a.numberOfContours = e.parseShort(), a.xMin = e.parseShort(), a.yMin = e.parseShort(), a.xMax = e.parseShort(), a.yMax = e.parseShort();
                var f, g;
                if (a.numberOfContours > 0) {
                    var h, i = a.endPointIndices = [];
                    for (h = 0; h < a.numberOfContours; h += 1) i.push(e.parseUShort());
                    for (a.instructionLength = e.parseUShort(), a.instructions = [], h = 0; h < a.instructionLength; h += 1) a.instructions.push(e.parseByte());
                    var j = i[i.length - 1] + 1;
                    for (f = [], h = 0; h < j; h += 1) if (g = e.parseByte(), f.push(g), (8 & g) > 0) for (var l = e.parseByte(), n = 0; n < l; n += 1) f.push(g), h += 1;
                    if (k.argument(f.length === j, "Bad flags."), i.length > 0) {
                        var o, p = [];
                        if (j > 0) {
                            for (h = 0; h < j; h += 1) g = f[h], o = {}, o.onCurve = !!(1 & g), o.lastPointOfContour = i.indexOf(h) >= 0, p.push(o);
                            var q = 0;
                            for (h = 0; h < j; h += 1) g = f[h], o = p[h], o.x = d(e, g, q, 2, 16), q = o.x;
                            var r = 0;
                            for (h = 0; h < j; h += 1) g = f[h], o = p[h], o.y = d(e, g, r, 4, 32), r = o.y
                        }
                        a.points = p
                    } else a.points = []
                } else if (0 === a.numberOfContours) a.points = []; else {
                    a.isComposite = !0, a.points = [], a.components = [];
                    for (var s = !0; s;) {
                        f = e.parseUShort();
                        var t = {
                            glyphIndex: e.parseUShort(),
                            xScale: 1,
                            scale01: 0,
                            scale10: 0,
                            yScale: 1,
                            dx: 0,
                            dy: 0
                        };
                        (1 & f) > 0 ? (t.dx = e.parseShort(), t.dy = e.parseShort()) : (t.dx = e.parseChar(), t.dy = e.parseChar()), (8 & f) > 0 ? t.xScale = t.yScale = e.parseF2Dot14() : (64 & f) > 0 ? (t.xScale = e.parseF2Dot14(), t.yScale = e.parseF2Dot14()) : (128 & f) > 0 && (t.xScale = e.parseF2Dot14(), t.scale01 = e.parseF2Dot14(), t.scale10 = e.parseF2Dot14(), t.yScale = e.parseF2Dot14()), a.components.push(t), s = !!(32 & f)
                    }
                }
            }

            function f(a, b) {
                for (var c = [], d = 0; d < a.length; d += 1) {
                    var e = a[d], f = {
                        x: b.xScale * e.x + b.scale01 * e.y + b.dx,
                        y: b.scale10 * e.x + b.yScale * e.y + b.dy,
                        onCurve: e.onCurve,
                        lastPointOfContour: e.lastPointOfContour
                    };
                    c.push(f)
                }
                return c
            }

            function g(a) {
                for (var b = [], c = [], d = 0; d < a.length; d += 1) {
                    var e = a[d];
                    c.push(e), e.lastPointOfContour && (b.push(c), c = [])
                }
                return k.argument(0 === c.length, "There are still points left in the current contour."), b
            }

            function h(a) {
                var b = new n.Path;
                if (!a) return b;
                for (var c = g(a), d = 0; d < c.length; d += 1) {
                    var e, f, h = c[d], i = h[0], j = h[h.length - 1];
                    i.onCurve ? (e = null, f = !0) : (i = j.onCurve ? j : {
                        x: (i.x + j.x) / 2,
                        y: (i.y + j.y) / 2
                    }, e = i, f = !1), b.moveTo(i.x, i.y);
                    for (var k = f ? 1 : 0; k < h.length; k += 1) {
                        var l = h[k], m = 0 === k ? i : h[k - 1];
                        if (m.onCurve && l.onCurve) b.lineTo(l.x, l.y); else if (m.onCurve && !l.onCurve) e = l; else if (m.onCurve || l.onCurve) {
                            if (m.onCurve || !l.onCurve) throw new Error("Invalid state.");
                            b.quadraticCurveTo(e.x, e.y, l.x, l.y), e = null
                        } else {
                            var o = {x: (m.x + l.x) / 2, y: (m.y + l.y) / 2};
                            b.quadraticCurveTo(m.x, m.y, o.x, o.y), e = l
                        }
                    }
                    i !== j && (e ? b.quadraticCurveTo(e.x, e.y, i.x, i.y) : b.lineTo(i.x, i.y))
                }
                return b.closePath(), b
            }

            function i(a, b) {
                if (b.isComposite) for (var c = 0; c < b.components.length; c += 1) {
                    var d = b.components[c], e = a.get(d.glyphIndex);
                    if (e.getPath(), e.points) {
                        var g = f(e.points, d);
                        b.points = b.points.concat(g)
                    }
                }
                return h(b.points)
            }

            function j(a, b, c, d) {
                var f, g = new l.GlyphSet(d);
                for (f = 0; f < c.length - 1; f += 1) {
                    var h = c[f];
                    h !== c[f + 1] ? g.push(f, l.ttfGlyphLoader(d, f, e, a, b + h, i)) : g.push(f, l.glyphLoader(d, f))
                }
                return g
            }

            var k = a("../check"), l = a("../glyphset"), m = a("../parse"), n = a("../path");
            c.parse = j
        }, {"../check": 4, "../glyphset": 9, "../parse": 11, "../path": 12}],
        18: [function (a, b, c) {
            "use strict";

            function d(a, b) {
                for (var c = new k.Parser(a, b), d = c.parseUShort(), e = [], f = 0; f < d; f++) e[c.parseTag()] = {offset: c.parseUShort()};
                return e
            }

            function e(a, b) {
                var c = new k.Parser(a, b), d = c.parseUShort(), e = c.parseUShort();
                if (1 === d) return c.parseUShortList(e);
                if (2 === d) {
                    for (var f = []; e--;) for (var g = c.parseUShort(), h = c.parseUShort(), i = c.parseUShort(), j = g; j <= h; j++) f[i++] = j;
                    return f
                }
            }

            function f(a, b) {
                var c = new k.Parser(a, b), d = c.parseUShort();
                if (1 === d) {
                    var e = c.parseUShort(), f = c.parseUShort(), g = c.parseUShortList(f);
                    return function (a) {
                        return g[a - e] || 0
                    }
                }
                if (2 === d) {
                    for (var h = c.parseUShort(), i = [], j = [], l = [], m = 0; m < h; m++) i[m] = c.parseUShort(), j[m] = c.parseUShort(), l[m] = c.parseUShort();
                    return function (a) {
                        for (var b = 0, c = i.length - 1; b < c;) {
                            var d = b + c + 1 >> 1;
                            a < i[d] ? c = d - 1 : b = d
                        }
                        return i[b] <= a && a <= j[b] ? l[b] || 0 : 0
                    }
                }
            }

            function g(a, b) {
                var c, d = new k.Parser(a, b), g = d.parseUShort(), h = d.parseUShort(), i = e(a, b + h),
                    j = d.parseUShort(), l = d.parseUShort();
                if (4 === j && 0 === l) {
                    var m = {};
                    if (1 === g) {
                        for (var n = d.parseUShort(), o = [], p = d.parseOffset16List(n), q = 0; q < n; q++) {
                            var r = p[q], s = m[r];
                            if (!s) {
                                s = {}, d.relativeOffset = r;
                                for (var t = d.parseUShort(); t--;) {
                                    var u = d.parseUShort();
                                    j && (c = d.parseShort()), l && d.parseShort(), s[u] = c
                                }
                            }
                            o[i[q]] = s
                        }
                        return function (a, b) {
                            var c = o[a];
                            if (c) return c[b]
                        }
                    }
                    if (2 === g) {
                        for (var v = d.parseUShort(), w = d.parseUShort(), x = d.parseUShort(), y = d.parseUShort(), z = f(a, b + v), A = f(a, b + w), B = [], C = 0; C < x; C++) for (var D = B[C] = [], E = 0; E < y; E++) j && (c = d.parseShort()), l && d.parseShort(), D[E] = c;
                        var F = {};
                        for (C = 0; C < i.length; C++) F[i[C]] = 1;
                        return function (a, b) {
                            if (F[a]) {
                                var c = z(a), d = A(b), e = B[c];
                                return e ? e[d] : void 0
                            }
                        }
                    }
                }
            }

            function h(a, b) {
                var c = new k.Parser(a, b), d = c.parseUShort(), e = c.parseUShort(), f = 16 & e, h = c.parseUShort(),
                    i = c.parseOffset16List(h),
                    j = {lookupType: d, lookupFlag: e, markFilteringSet: f ? c.parseUShort() : -1};
                if (2 === d) {
                    for (var l = [], m = 0; m < h; m++) l.push(g(a, b + i[m]));
                    j.getKerningValue = function (a, b) {
                        for (var c = l.length; c--;) {
                            var d = l[c](a, b);
                            if (void 0 !== d) return d
                        }
                        return 0
                    }
                }
                return j
            }

            function i(a, b, c) {
                var e = new k.Parser(a, b), f = e.parseFixed();
                j.argument(1 === f, "Unsupported GPOS table version."), d(a, b + e.parseUShort()), d(a, b + e.parseUShort());
                var g = e.parseUShort();
                e.relativeOffset = g;
                for (var i = e.parseUShort(), l = e.parseOffset16List(i), m = b + g, n = 0; n < i; n++) {
                    var o = h(a, m + l[n]);
                    2 !== o.lookupType || c.getGposKerningValue || (c.getGposKerningValue = o.getKerningValue)
                }
            }

            var j = a("../check"), k = a("../parse");
            c.parse = i
        }, {"../check": 4, "../parse": 11}],
        19: [function (a, b, c) {
            "use strict";

            function d(a, b) {
                var c = {}, d = new g.Parser(a, b);
                return c.version = d.parseVersion(), c.fontRevision = Math.round(1e3 * d.parseFixed()) / 1e3, c.checkSumAdjustment = d.parseULong(), c.magicNumber = d.parseULong(), f.argument(1594834165 === c.magicNumber, "Font header has wrong magic number."), c.flags = d.parseUShort(), c.unitsPerEm = d.parseUShort(), c.created = d.parseLongDateTime(), c.modified = d.parseLongDateTime(), c.xMin = d.parseShort(), c.yMin = d.parseShort(), c.xMax = d.parseShort(), c.yMax = d.parseShort(), c.macStyle = d.parseUShort(), c.lowestRecPPEM = d.parseUShort(), c.fontDirectionHint = d.parseShort(), c.indexToLocFormat = d.parseShort(), c.glyphDataFormat = d.parseShort(), c
            }

            function e(a) {
                return new h.Table("head", [{name: "version", type: "FIXED", value: 65536}, {
                    name: "fontRevision",
                    type: "FIXED",
                    value: 65536
                }, {name: "checkSumAdjustment", type: "ULONG", value: 0}, {
                    name: "magicNumber",
                    type: "ULONG",
                    value: 1594834165
                }, {name: "flags", type: "USHORT", value: 0}, {
                    name: "unitsPerEm",
                    type: "USHORT",
                    value: 1e3
                }, {name: "created", type: "LONGDATETIME", value: 0}, {
                    name: "modified",
                    type: "LONGDATETIME",
                    value: 0
                }, {name: "xMin", type: "SHORT", value: 0}, {name: "yMin", type: "SHORT", value: 0}, {
                    name: "xMax",
                    type: "SHORT",
                    value: 0
                }, {name: "yMax", type: "SHORT", value: 0}, {
                    name: "macStyle",
                    type: "USHORT",
                    value: 0
                }, {name: "lowestRecPPEM", type: "USHORT", value: 0}, {
                    name: "fontDirectionHint",
                    type: "SHORT",
                    value: 2
                }, {name: "indexToLocFormat", type: "SHORT", value: 0}, {
                    name: "glyphDataFormat",
                    type: "SHORT",
                    value: 0
                }], a)
            }

            var f = a("../check"), g = a("../parse"), h = a("../table");
            c.parse = d, c.make = e
        }, {"../check": 4, "../parse": 11, "../table": 13}],
        20: [function (a, b, c) {
            "use strict";

            function d(a, b) {
                var c = {}, d = new f.Parser(a, b);
                return c.version = d.parseVersion(), c.ascender = d.parseShort(), c.descender = d.parseShort(), c.lineGap = d.parseShort(), c.advanceWidthMax = d.parseUShort(), c.minLeftSideBearing = d.parseShort(), c.minRightSideBearing = d.parseShort(), c.xMaxExtent = d.parseShort(), c.caretSlopeRise = d.parseShort(), c.caretSlopeRun = d.parseShort(), c.caretOffset = d.parseShort(), d.relativeOffset += 8, c.metricDataFormat = d.parseShort(), c.numberOfHMetrics = d.parseUShort(), c
            }

            function e(a) {
                return new g.Table("hhea", [{name: "version", type: "FIXED", value: 65536}, {
                    name: "ascender",
                    type: "FWORD",
                    value: 0
                }, {name: "descender", type: "FWORD", value: 0}, {
                    name: "lineGap",
                    type: "FWORD",
                    value: 0
                }, {name: "advanceWidthMax", type: "UFWORD", value: 0}, {
                    name: "minLeftSideBearing",
                    type: "FWORD",
                    value: 0
                }, {name: "minRightSideBearing", type: "FWORD", value: 0}, {
                    name: "xMaxExtent",
                    type: "FWORD",
                    value: 0
                }, {name: "caretSlopeRise", type: "SHORT", value: 1}, {
                    name: "caretSlopeRun",
                    type: "SHORT",
                    value: 0
                }, {name: "caretOffset", type: "SHORT", value: 0}, {
                    name: "reserved1",
                    type: "SHORT",
                    value: 0
                }, {name: "reserved2", type: "SHORT", value: 0}, {
                    name: "reserved3",
                    type: "SHORT",
                    value: 0
                }, {name: "reserved4", type: "SHORT", value: 0}, {
                    name: "metricDataFormat",
                    type: "SHORT",
                    value: 0
                }, {name: "numberOfHMetrics", type: "USHORT", value: 0}], a)
            }

            var f = a("../parse"), g = a("../table");
            c.parse = d, c.make = e
        }, {"../parse": 11, "../table": 13}],
        21: [function (a, b, c) {
            "use strict";

            function d(a, b, c, d, e) {
                for (var g, h, i = new f.Parser(a, b), j = 0; j < d; j += 1) {
                    j < c && (g = i.parseUShort(), h = i.parseShort());
                    var k = e.get(j);
                    k.advanceWidth = g, k.leftSideBearing = h
                }
            }

            function e(a) {
                for (var b = new g.Table("hmtx", []), c = 0; c < a.length; c += 1) {
                    var d = a.get(c), e = d.advanceWidth || 0, f = d.leftSideBearing || 0;
                    b.fields.push({
                        name: "advanceWidth_" + c,
                        type: "USHORT",
                        value: e
                    }), b.fields.push({name: "leftSideBearing_" + c, type: "SHORT", value: f})
                }
                return b
            }

            var f = a("../parse"), g = a("../table");
            c.parse = d, c.make = e
        }, {"../parse": 11, "../table": 13}],
        22: [function (a, b, c) {
            "use strict";

            function d(a, b) {
                var c = {}, d = new f.Parser(a, b), g = d.parseUShort();
                e.argument(0 === g, "Unsupported kern table version."), d.skip("uShort", 1);
                var h = d.parseUShort();
                e.argument(0 === h, "Unsupported kern sub-table version."), d.skip("uShort", 2);
                var i = d.parseUShort();
                d.skip("uShort", 3);
                for (var j = 0; j < i; j += 1) {
                    var k = d.parseUShort(), l = d.parseUShort(), m = d.parseShort();
                    c[k + "," + l] = m
                }
                return c
            }

            var e = a("../check"), f = a("../parse");
            c.parse = d
        }, {"../check": 4, "../parse": 11}],
        23: [function (a, b, c) {
            "use strict";

            function d(a, b, c, d) {
                for (var f = new e.Parser(a, b), g = d ? f.parseUShort : f.parseULong, h = [], i = 0; i < c + 1; i += 1) {
                    var j = g.call(f);
                    d && (j *= 2), h.push(j)
                }
                return h
            }

            var e = a("../parse");
            c.parse = d
        }, {"../parse": 11}],
        24: [function (a, b, c) {
            "use strict";

            function d(a) {
                for (var b = new h.Table("ltag", [{name: "version", type: "ULONG", value: 1}, {
                    name: "flags",
                    type: "ULONG",
                    value: 0
                }, {
                    name: "numTags",
                    type: "ULONG",
                    value: a.length
                }]), c = "", d = 12 + 4 * a.length, e = 0; e < a.length; ++e) {
                    var f = c.indexOf(a[e]);
                    f < 0 && (f = c.length, c += a[e]), b.fields.push({
                        name: "offset " + e,
                        type: "USHORT",
                        value: d + f
                    }), b.fields.push({name: "length " + e, type: "USHORT", value: a[e].length})
                }
                return b.fields.push({name: "stringPool", type: "CHARARRAY", value: c}), b
            }

            function e(a, b) {
                var c = new g.Parser(a, b), d = c.parseULong();
                f.argument(1 === d, "Unsupported ltag table version."), c.skip("uLong", 1);
                for (var e = c.parseULong(), h = [], i = 0; i < e; i++) {
                    for (var j = "", k = b + c.parseUShort(), l = c.parseUShort(), m = k; m < k + l; ++m) j += String.fromCharCode(a.getInt8(m));
                    h.push(j)
                }
                return h
            }

            var f = a("../check"), g = a("../parse"), h = a("../table");
            c.make = d, c.parse = e
        }, {"../check": 4, "../parse": 11, "../table": 13}],
        25: [function (a, b, c) {
            "use strict";

            function d(a, b) {
                var c = {}, d = new f.Parser(a, b);
                return c.version = d.parseVersion(), c.numGlyphs = d.parseUShort(), 1 === c.version && (c.maxPoints = d.parseUShort(), c.maxContours = d.parseUShort(), c.maxCompositePoints = d.parseUShort(), c.maxCompositeContours = d.parseUShort(), c.maxZones = d.parseUShort(), c.maxTwilightPoints = d.parseUShort(), c.maxStorage = d.parseUShort(), c.maxFunctionDefs = d.parseUShort(), c.maxInstructionDefs = d.parseUShort(), c.maxStackElements = d.parseUShort(), c.maxSizeOfInstructions = d.parseUShort(), c.maxComponentElements = d.parseUShort(), c.maxComponentDepth = d.parseUShort()), c
            }

            function e(a) {
                return new g.Table("maxp", [{name: "version", type: "FIXED", value: 20480}, {
                    name: "numGlyphs",
                    type: "USHORT",
                    value: a
                }])
            }

            var f = a("../parse"), g = a("../table");
            c.parse = d, c.make = e
        }, {"../parse": 11, "../table": 13}],
        26: [function (a, b, c) {
            "use strict";

            function d(a, b, c) {
                switch (a) {
                    case 0:
                        if (65535 === b) return "und";
                        if (c) return c[b];
                        break;
                    case 1:
                        return r[b];
                    case 3:
                        return t[b]
                }
            }

            function e(a, b, c) {
                switch (a) {
                    case 0:
                        return u;
                    case 1:
                        return w[c] || v[b];
                    case 3:
                        if (1 === b || 10 === b) return u
                }
            }

            function f(a, b, c) {
                for (var f = {}, g = new o.Parser(a, b), h = g.parseUShort(), i = g.parseUShort(), j = g.offset + g.parseUShort(), k = 0; k < i; k++) {
                    var l = g.parseUShort(), n = g.parseUShort(), p = g.parseUShort(), r = g.parseUShort(),
                        s = q[r] || r, t = g.parseUShort(), v = g.parseUShort(), w = d(l, p, c), x = e(l, n, p);
                    if (void 0 !== x && void 0 !== w) {
                        var y;
                        if (y = x === u ? m.UTF16(a, j + v, t) : m.MACSTRING(a, j + v, t, x)) {
                            var z = f[s];
                            void 0 === z && (z = f[s] = {}), z[w] = y
                        }
                    }
                }
                return 1 === h && g.parseUShort(), f
            }

            function g(a) {
                var b = {};
                for (var c in a) b[a[c]] = parseInt(c);
                return b
            }

            function h(a, b, c, d, e, f) {
                return new p.Table("NameRecord", [{name: "platformID", type: "USHORT", value: a}, {
                    name: "encodingID",
                    type: "USHORT",
                    value: b
                }, {name: "languageID", type: "USHORT", value: c}, {
                    name: "nameID",
                    type: "USHORT",
                    value: d
                }, {name: "length", type: "USHORT", value: e}, {name: "offset", type: "USHORT", value: f}])
            }

            function i(a, b) {
                var c = a.length, d = b.length - c + 1;
                a:for (var e = 0; e < d; e++) for (; e < d; e++) {
                    for (var f = 0; f < c; f++) if (b[e + f] !== a[f]) continue a;
                    return e
                }
                return -1
            }

            function j(a, b) {
                var c = i(a, b);
                if (c < 0) {
                    c = b.length;
                    for (var d = 0, e = a.length; d < e; ++d) b.push(a[d])
                }
                return c
            }

            function k(a, b) {
                var c, d = [], f = {}, i = g(q);
                for (var k in a) {
                    var l = i[k];
                    void 0 === l && (l = k), c = parseInt(l), f[c] = a[k], d.push(c)
                }
                for (var m = g(r), o = g(t), u = [], v = [], w = 0; w < d.length; w++) {
                    c = d[w];
                    var x = f[c];
                    for (var y in x) {
                        var z = x[y], A = 1, B = m[y], C = s[B], D = e(A, C, B), E = n.MACSTRING(z, D);
                        void 0 === E && (A = 0, B = b.indexOf(y), B < 0 && (B = b.length, b.push(y)), C = 4, E = n.UTF16(z));
                        var F = j(E, v);
                        u.push(h(A, C, B, c, E.length, F));
                        var G = o[y];
                        if (void 0 !== G) {
                            var H = n.UTF16(z), I = j(H, v);
                            u.push(h(3, 1, G, c, H.length, I))
                        }
                    }
                }
                u.sort(function (a, b) {
                    return a.platformID - b.platformID || a.encodingID - b.encodingID || a.languageID - b.languageID || a.nameID - b.nameID
                });
                for (var J = new p.Table("name", [{name: "format", type: "USHORT", value: 0}, {
                    name: "count",
                    type: "USHORT",
                    value: u.length
                }, {
                    name: "stringOffset",
                    type: "USHORT",
                    value: 6 + 12 * u.length
                }]), K = 0; K < u.length; K++) J.fields.push({name: "record_" + K, type: "TABLE", value: u[K]});
                return J.fields.push({name: "strings", type: "LITERAL", value: v}), J
            }

            var l = a("../types"), m = l.decode, n = l.encode, o = a("../parse"), p = a("../table"),
                q = ["copyright", "fontFamily", "fontSubfamily", "uniqueID", "fullName", "version", "postScriptName", "trademark", "manufacturer", "designer", "description", "manufacturerURL", "designerURL", "licence", "licenceURL", "reserved", "preferredFamily", "preferredSubfamily", "compatibleFullName", "sampleText", "postScriptFindFontName", "wwsFamily", "wwsSubfamily"],
                r = {
                    0: "en",
                    1: "fr",
                    2: "de",
                    3: "it",
                    4: "nl",
                    5: "sv",
                    6: "es",
                    7: "da",
                    8: "pt",
                    9: "no",
                    10: "he",
                    11: "ja",
                    12: "ar",
                    13: "fi",
                    14: "el",
                    15: "is",
                    16: "mt",
                    17: "tr",
                    18: "hr",
                    19: "zh-Hant",
                    20: "ur",
                    21: "hi",
                    22: "th",
                    23: "ko",
                    24: "lt",
                    25: "pl",
                    26: "hu",
                    27: "es",
                    28: "lv",
                    29: "se",
                    30: "fo",
                    31: "fa",
                    32: "ru",
                    33: "zh",
                    34: "nl-BE",
                    35: "ga",
                    36: "sq",
                    37: "ro",
                    38: "cz",
                    39: "sk",
                    40: "si",
                    41: "yi",
                    42: "sr",
                    43: "mk",
                    44: "bg",
                    45: "uk",
                    46: "be",
                    47: "uz",
                    48: "kk",
                    49: "az-Cyrl",
                    50: "az-Arab",
                    51: "hy",
                    52: "ka",
                    53: "mo",
                    54: "ky",
                    55: "tg",
                    56: "tk",
                    57: "mn-CN",
                    58: "mn",
                    59: "ps",
                    60: "ks",
                    61: "ku",
                    62: "sd",
                    63: "bo",
                    64: "ne",
                    65: "sa",
                    66: "mr",
                    67: "bn",
                    68: "as",
                    69: "gu",
                    70: "pa",
                    71: "or",
                    72: "ml",
                    73: "kn",
                    74: "ta",
                    75: "te",
                    76: "si",
                    77: "my",
                    78: "km",
                    79: "lo",
                    80: "vi",
                    81: "id",
                    82: "tl",
                    83: "ms",
                    84: "ms-Arab",
                    85: "am",
                    86: "ti",
                    87: "om",
                    88: "so",
                    89: "sw",
                    90: "rw",
                    91: "rn",
                    92: "ny",
                    93: "mg",
                    94: "eo",
                    128: "cy",
                    129: "eu",
                    130: "ca",
                    131: "la",
                    132: "qu",
                    133: "gn",
                    134: "ay",
                    135: "tt",
                    136: "ug",
                    137: "dz",
                    138: "jv",
                    139: "su",
                    140: "gl",
                    141: "af",
                    142: "br",
                    143: "iu",
                    144: "gd",
                    145: "gv",
                    146: "ga",
                    147: "to",
                    148: "el-polyton",
                    149: "kl",
                    150: "az",
                    151: "nn"
                }, s = {
                    0: 0,
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0,
                    10: 5,
                    11: 1,
                    12: 4,
                    13: 0,
                    14: 6,
                    15: 0,
                    16: 0,
                    17: 0,
                    18: 0,
                    19: 2,
                    20: 4,
                    21: 9,
                    22: 21,
                    23: 3,
                    24: 29,
                    25: 29,
                    26: 29,
                    27: 29,
                    28: 29,
                    29: 0,
                    30: 0,
                    31: 4,
                    32: 7,
                    33: 25,
                    34: 0,
                    35: 0,
                    36: 0,
                    37: 0,
                    38: 29,
                    39: 29,
                    40: 0,
                    41: 5,
                    42: 7,
                    43: 7,
                    44: 7,
                    45: 7,
                    46: 7,
                    47: 7,
                    48: 7,
                    49: 7,
                    50: 4,
                    51: 24,
                    52: 23,
                    53: 7,
                    54: 7,
                    55: 7,
                    56: 7,
                    57: 27,
                    58: 7,
                    59: 4,
                    60: 4,
                    61: 4,
                    62: 4,
                    63: 26,
                    64: 9,
                    65: 9,
                    66: 9,
                    67: 13,
                    68: 13,
                    69: 11,
                    70: 10,
                    71: 12,
                    72: 17,
                    73: 16,
                    74: 14,
                    75: 15,
                    76: 18,
                    77: 19,
                    78: 20,
                    79: 22,
                    80: 30,
                    81: 0,
                    82: 0,
                    83: 0,
                    84: 4,
                    85: 28,
                    86: 28,
                    87: 28,
                    88: 0,
                    89: 0,
                    90: 0,
                    91: 0,
                    92: 0,
                    93: 0,
                    94: 0,
                    128: 0,
                    129: 0,
                    130: 0,
                    131: 0,
                    132: 0,
                    133: 0,
                    134: 0,
                    135: 7,
                    136: 4,
                    137: 26,
                    138: 0,
                    139: 0,
                    140: 0,
                    141: 0,
                    142: 0,
                    143: 28,
                    144: 0,
                    145: 0,
                    146: 0,
                    147: 0,
                    148: 6,
                    149: 0,
                    150: 0,
                    151: 0
                }, t = {
                    1078: "af",
                    1052: "sq",
                    1156: "gsw",
                    1118: "am",
                    5121: "ar-DZ",
                    15361: "ar-BH",
                    3073: "ar",
                    2049: "ar-IQ",
                    11265: "ar-JO",
                    13313: "ar-KW",
                    12289: "ar-LB",
                    4097: "ar-LY",
                    6145: "ary",
                    8193: "ar-OM",
                    16385: "ar-QA",
                    1025: "ar-SA",
                    10241: "ar-SY",
                    7169: "aeb",
                    14337: "ar-AE",
                    9217: "ar-YE",
                    1067: "hy",
                    1101: "as",
                    2092: "az-Cyrl",
                    1068: "az",
                    1133: "ba",
                    1069: "eu",
                    1059: "be",
                    2117: "bn",
                    1093: "bn-IN",
                    8218: "bs-Cyrl",
                    5146: "bs",
                    1150: "br",
                    1026: "bg",
                    1027: "ca",
                    3076: "zh-HK",
                    5124: "zh-MO",
                    2052: "zh",
                    4100: "zh-SG",
                    1028: "zh-TW",
                    1155: "co",
                    1050: "hr",
                    4122: "hr-BA",
                    1029: "cs",
                    1030: "da",
                    1164: "prs",
                    1125: "dv",
                    2067: "nl-BE",
                    1043: "nl",
                    3081: "en-AU",
                    10249: "en-BZ",
                    4105: "en-CA",
                    9225: "en-029",
                    16393: "en-IN",
                    6153: "en-IE",
                    8201: "en-JM",
                    17417: "en-MY",
                    5129: "en-NZ",
                    13321: "en-PH",
                    18441: "en-SG",
                    7177: "en-ZA",
                    11273: "en-TT",
                    2057: "en-GB",
                    1033: "en",
                    12297: "en-ZW",
                    1061: "et",
                    1080: "fo",
                    1124: "fil",
                    1035: "fi",
                    2060: "fr-BE",
                    3084: "fr-CA",
                    1036: "fr",
                    5132: "fr-LU",
                    6156: "fr-MC",
                    4108: "fr-CH",
                    1122: "fy",
                    1110: "gl",
                    1079: "ka",
                    3079: "de-AT",
                    1031: "de",
                    5127: "de-LI",
                    4103: "de-LU",
                    2055: "de-CH",
                    1032: "el",
                    1135: "kl",
                    1095: "gu",
                    1128: "ha",
                    1037: "he",
                    1081: "hi",
                    1038: "hu",
                    1039: "is",
                    1136: "ig",
                    1057: "id",
                    1117: "iu",
                    2141: "iu-Latn",
                    2108: "ga",
                    1076: "xh",
                    1077: "zu",
                    1040: "it",
                    2064: "it-CH",
                    1041: "ja",
                    1099: "kn",
                    1087: "kk",
                    1107: "km",
                    1158: "quc",
                    1159: "rw",
                    1089: "sw",
                    1111: "kok",
                    1042: "ko",
                    1088: "ky",
                    1108: "lo",
                    1062: "lv",
                    1063: "lt",
                    2094: "dsb",
                    1134: "lb",
                    1071: "mk",
                    2110: "ms-BN",
                    1086: "ms",
                    1100: "ml",
                    1082: "mt",
                    1153: "mi",
                    1146: "arn",
                    1102: "mr",
                    1148: "moh",
                    1104: "mn",
                    2128: "mn-CN",
                    1121: "ne",
                    1044: "nb",
                    2068: "nn",
                    1154: "oc",
                    1096: "or",
                    1123: "ps",
                    1045: "pl",
                    1046: "pt",
                    2070: "pt-PT",
                    1094: "pa",
                    1131: "qu-BO",
                    2155: "qu-EC",
                    3179: "qu",
                    1048: "ro",
                    1047: "rm",
                    1049: "ru",
                    9275: "smn",
                    4155: "smj-NO",
                    5179: "smj",
                    3131: "se-FI",
                    1083: "se",
                    2107: "se-SE",
                    8251: "sms",
                    6203: "sma-NO",
                    7227: "sms",
                    1103: "sa",
                    7194: "sr-Cyrl-BA",
                    3098: "sr",
                    6170: "sr-Latn-BA",
                    2074: "sr-Latn",
                    1132: "nso",
                    1074: "tn",
                    1115: "si",
                    1051: "sk",
                    1060: "sl",
                    11274: "es-AR",
                    16394: "es-BO",
                    13322: "es-CL",
                    9226: "es-CO",
                    5130: "es-CR",
                    7178: "es-DO",
                    12298: "es-EC",
                    17418: "es-SV",
                    4106: "es-GT",
                    18442: "es-HN",
                    2058: "es-MX",
                    19466: "es-NI",
                    6154: "es-PA",
                    15370: "es-PY",
                    10250: "es-PE",
                    20490: "es-PR",
                    3082: "es",
                    1034: "es",
                    21514: "es-US",
                    14346: "es-UY",
                    8202: "es-VE",
                    2077: "sv-FI",
                    1053: "sv",
                    1114: "syr",
                    1064: "tg",
                    2143: "tzm",
                    1097: "ta",
                    1092: "tt",
                    1098: "te",
                    1054: "th",
                    1105: "bo",
                    1055: "tr",
                    1090: "tk",
                    1152: "ug",
                    1058: "uk",
                    1070: "hsb",
                    1056: "ur",
                    2115: "uz-Cyrl",
                    1091: "uz",
                    1066: "vi",
                    1106: "cy",
                    1160: "wo",
                    1157: "sah",
                    1144: "ii",
                    1130: "yo"
                }, u = "utf-16", v = {
                    0: "macintosh",
                    1: "x-mac-japanese",
                    2: "x-mac-chinesetrad",
                    3: "x-mac-korean",
                    6: "x-mac-greek",
                    7: "x-mac-cyrillic",
                    9: "x-mac-devanagai",
                    10: "x-mac-gurmukhi",
                    11: "x-mac-gujarati",
                    12: "x-mac-oriya",
                    13: "x-mac-bengali",
                    14: "x-mac-tamil",
                    15: "x-mac-telugu",
                    16: "x-mac-kannada",
                    17: "x-mac-malayalam",
                    18: "x-mac-sinhalese",
                    19: "x-mac-burmese",
                    20: "x-mac-khmer",
                    21: "x-mac-thai",
                    22: "x-mac-lao",
                    23: "x-mac-georgian",
                    24: "x-mac-armenian",
                    25: "x-mac-chinesesimp",
                    26: "x-mac-tibetan",
                    27: "x-mac-mongolian",
                    28: "x-mac-ethiopic",
                    29: "x-mac-ce",
                    30: "x-mac-vietnamese",
                    31: "x-mac-extarabic"
                }, w = {
                    15: "x-mac-icelandic",
                    17: "x-mac-turkish",
                    18: "x-mac-croatian",
                    24: "x-mac-ce",
                    25: "x-mac-ce",
                    26: "x-mac-ce",
                    27: "x-mac-ce",
                    28: "x-mac-ce",
                    30: "x-mac-icelandic",
                    37: "x-mac-romanian",
                    38: "x-mac-ce",
                    39: "x-mac-ce",
                    40: "x-mac-ce",
                    143: "x-mac-inuit",
                    146: "x-mac-gaelic"
                };
            c.parse = f, c.make = k
        }, {"../parse": 11, "../table": 13, "../types": 30}],
        27: [function (a, b, c) {
            "use strict";

            function d(a) {
                for (var b = 0; b < i.length; b += 1) {
                    var c = i[b];
                    if (a >= c.begin && a < c.end) return b
                }
                return -1
            }

            function e(a, b) {
                var c = {}, d = new g.Parser(a, b);
                c.version = d.parseUShort(), c.xAvgCharWidth = d.parseShort(), c.usWeightClass = d.parseUShort(), c.usWidthClass = d.parseUShort(), c.fsType = d.parseUShort(), c.ySubscriptXSize = d.parseShort(), c.ySubscriptYSize = d.parseShort(), c.ySubscriptXOffset = d.parseShort(), c.ySubscriptYOffset = d.parseShort(), c.ySuperscriptXSize = d.parseShort(), c.ySuperscriptYSize = d.parseShort(), c.ySuperscriptXOffset = d.parseShort(), c.ySuperscriptYOffset = d.parseShort(), c.yStrikeoutSize = d.parseShort(), c.yStrikeoutPosition = d.parseShort(), c.sFamilyClass = d.parseShort(), c.panose = [];
                for (var e = 0; e < 10; e++) c.panose[e] = d.parseByte();
                return c.ulUnicodeRange1 = d.parseULong(), c.ulUnicodeRange2 = d.parseULong(), c.ulUnicodeRange3 = d.parseULong(), c.ulUnicodeRange4 = d.parseULong(), c.achVendID = String.fromCharCode(d.parseByte(), d.parseByte(), d.parseByte(), d.parseByte()), c.fsSelection = d.parseUShort(), c.usFirstCharIndex = d.parseUShort(), c.usLastCharIndex = d.parseUShort(), c.sTypoAscender = d.parseShort(), c.sTypoDescender = d.parseShort(), c.sTypoLineGap = d.parseShort(), c.usWinAscent = d.parseUShort(), c.usWinDescent = d.parseUShort(), c.version >= 1 && (c.ulCodePageRange1 = d.parseULong(), c.ulCodePageRange2 = d.parseULong()), c.version >= 2 && (c.sxHeight = d.parseShort(), c.sCapHeight = d.parseShort(), c.usDefaultChar = d.parseUShort(), c.usBreakChar = d.parseUShort(), c.usMaxContent = d.parseUShort()), c
            }

            function f(a) {
                return new h.Table("OS/2", [{name: "version", type: "USHORT", value: 3}, {
                    name: "xAvgCharWidth",
                    type: "SHORT",
                    value: 0
                }, {name: "usWeightClass", type: "USHORT", value: 0}, {
                    name: "usWidthClass",
                    type: "USHORT",
                    value: 0
                }, {name: "fsType", type: "USHORT", value: 0}, {
                    name: "ySubscriptXSize",
                    type: "SHORT",
                    value: 650
                }, {name: "ySubscriptYSize", type: "SHORT", value: 699}, {
                    name: "ySubscriptXOffset",
                    type: "SHORT",
                    value: 0
                }, {name: "ySubscriptYOffset", type: "SHORT", value: 140}, {
                    name: "ySuperscriptXSize",
                    type: "SHORT",
                    value: 650
                }, {name: "ySuperscriptYSize", type: "SHORT", value: 699}, {
                    name: "ySuperscriptXOffset",
                    type: "SHORT",
                    value: 0
                }, {name: "ySuperscriptYOffset", type: "SHORT", value: 479}, {
                    name: "yStrikeoutSize",
                    type: "SHORT",
                    value: 49
                }, {name: "yStrikeoutPosition", type: "SHORT", value: 258}, {
                    name: "sFamilyClass",
                    type: "SHORT",
                    value: 0
                }, {name: "bFamilyType", type: "BYTE", value: 0}, {
                    name: "bSerifStyle",
                    type: "BYTE",
                    value: 0
                }, {name: "bWeight", type: "BYTE", value: 0}, {
                    name: "bProportion",
                    type: "BYTE",
                    value: 0
                }, {name: "bContrast", type: "BYTE", value: 0}, {
                    name: "bStrokeVariation",
                    type: "BYTE",
                    value: 0
                }, {name: "bArmStyle", type: "BYTE", value: 0}, {
                    name: "bLetterform",
                    type: "BYTE",
                    value: 0
                }, {name: "bMidline", type: "BYTE", value: 0}, {
                    name: "bXHeight",
                    type: "BYTE",
                    value: 0
                }, {name: "ulUnicodeRange1", type: "ULONG", value: 0}, {
                    name: "ulUnicodeRange2",
                    type: "ULONG",
                    value: 0
                }, {name: "ulUnicodeRange3", type: "ULONG", value: 0}, {
                    name: "ulUnicodeRange4",
                    type: "ULONG",
                    value: 0
                }, {name: "achVendID", type: "CHARARRAY", value: "XXXX"}, {
                    name: "fsSelection",
                    type: "USHORT",
                    value: 0
                }, {name: "usFirstCharIndex", type: "USHORT", value: 0}, {
                    name: "usLastCharIndex",
                    type: "USHORT",
                    value: 0
                }, {name: "sTypoAscender", type: "SHORT", value: 0}, {
                    name: "sTypoDescender",
                    type: "SHORT",
                    value: 0
                }, {name: "sTypoLineGap", type: "SHORT", value: 0}, {
                    name: "usWinAscent",
                    type: "USHORT",
                    value: 0
                }, {name: "usWinDescent", type: "USHORT", value: 0}, {
                    name: "ulCodePageRange1",
                    type: "ULONG",
                    value: 0
                }, {name: "ulCodePageRange2", type: "ULONG", value: 0}, {
                    name: "sxHeight",
                    type: "SHORT",
                    value: 0
                }, {name: "sCapHeight", type: "SHORT", value: 0}, {
                    name: "usDefaultChar",
                    type: "USHORT",
                    value: 0
                }, {name: "usBreakChar", type: "USHORT", value: 0}, {
                    name: "usMaxContext",
                    type: "USHORT",
                    value: 0
                }], a)
            }

            var g = a("../parse"), h = a("../table"),
                i = [{begin: 0, end: 127}, {begin: 128, end: 255}, {begin: 256, end: 383}, {
                    begin: 384,
                    end: 591
                }, {begin: 592, end: 687}, {begin: 688, end: 767}, {begin: 768, end: 879}, {
                    begin: 880,
                    end: 1023
                }, {begin: 11392, end: 11519}, {begin: 1024, end: 1279}, {begin: 1328, end: 1423}, {
                    begin: 1424,
                    end: 1535
                }, {begin: 42240, end: 42559}, {begin: 1536, end: 1791}, {begin: 1984, end: 2047}, {
                    begin: 2304,
                    end: 2431
                }, {begin: 2432, end: 2559}, {begin: 2560, end: 2687}, {begin: 2688, end: 2815}, {
                    begin: 2816,
                    end: 2943
                }, {begin: 2944, end: 3071}, {begin: 3072, end: 3199}, {begin: 3200, end: 3327}, {
                    begin: 3328,
                    end: 3455
                }, {begin: 3584, end: 3711}, {begin: 3712, end: 3839}, {begin: 4256, end: 4351}, {
                    begin: 6912,
                    end: 7039
                }, {begin: 4352, end: 4607}, {begin: 7680, end: 7935}, {begin: 7936, end: 8191}, {
                    begin: 8192,
                    end: 8303
                }, {begin: 8304, end: 8351}, {begin: 8352, end: 8399}, {begin: 8400, end: 8447}, {
                    begin: 8448,
                    end: 8527
                }, {begin: 8528, end: 8591}, {begin: 8592, end: 8703}, {begin: 8704, end: 8959}, {
                    begin: 8960,
                    end: 9215
                }, {begin: 9216, end: 9279}, {begin: 9280, end: 9311}, {begin: 9312, end: 9471}, {
                    begin: 9472,
                    end: 9599
                }, {begin: 9600, end: 9631}, {begin: 9632, end: 9727}, {begin: 9728, end: 9983}, {
                    begin: 9984,
                    end: 10175
                }, {begin: 12288, end: 12351}, {begin: 12352, end: 12447}, {begin: 12448, end: 12543}, {
                    begin: 12544,
                    end: 12591
                }, {begin: 12592, end: 12687}, {begin: 43072, end: 43135}, {begin: 12800, end: 13055}, {
                    begin: 13056,
                    end: 13311
                }, {begin: 44032, end: 55215}, {begin: 55296, end: 57343}, {begin: 67840, end: 67871}, {
                    begin: 19968,
                    end: 40959
                }, {begin: 57344, end: 63743}, {begin: 12736, end: 12783}, {begin: 64256, end: 64335}, {
                    begin: 64336,
                    end: 65023
                }, {begin: 65056, end: 65071}, {begin: 65040, end: 65055}, {begin: 65104, end: 65135}, {
                    begin: 65136,
                    end: 65279
                }, {begin: 65280, end: 65519}, {begin: 65520, end: 65535}, {begin: 3840, end: 4095}, {
                    begin: 1792,
                    end: 1871
                }, {begin: 1920, end: 1983}, {begin: 3456, end: 3583}, {begin: 4096, end: 4255}, {
                    begin: 4608,
                    end: 4991
                }, {begin: 5024, end: 5119}, {begin: 5120, end: 5759}, {begin: 5760, end: 5791}, {
                    begin: 5792,
                    end: 5887
                }, {begin: 6016, end: 6143}, {begin: 6144, end: 6319}, {begin: 10240, end: 10495}, {
                    begin: 40960,
                    end: 42127
                }, {begin: 5888, end: 5919}, {begin: 66304, end: 66351}, {begin: 66352, end: 66383}, {
                    begin: 66560,
                    end: 66639
                }, {begin: 118784, end: 119039}, {begin: 119808, end: 120831}, {
                    begin: 1044480,
                    end: 1048573
                }, {begin: 65024, end: 65039}, {begin: 917504, end: 917631}, {begin: 6400, end: 6479}, {
                    begin: 6480,
                    end: 6527
                }, {begin: 6528, end: 6623}, {begin: 6656, end: 6687}, {begin: 11264, end: 11359}, {
                    begin: 11568,
                    end: 11647
                }, {begin: 19904, end: 19967}, {begin: 43008, end: 43055}, {begin: 65536, end: 65663}, {
                    begin: 65856,
                    end: 65935
                }, {begin: 66432, end: 66463}, {begin: 66464, end: 66527}, {begin: 66640, end: 66687}, {
                    begin: 66688,
                    end: 66735
                }, {begin: 67584, end: 67647}, {begin: 68096, end: 68191}, {begin: 119552, end: 119647}, {
                    begin: 73728,
                    end: 74751
                }, {begin: 119648, end: 119679}, {begin: 7040, end: 7103}, {begin: 7168, end: 7247}, {
                    begin: 7248,
                    end: 7295
                }, {begin: 43136, end: 43231}, {begin: 43264, end: 43311}, {begin: 43312, end: 43359}, {
                    begin: 43520,
                    end: 43615
                }, {begin: 65936, end: 65999}, {begin: 66e3, end: 66047}, {begin: 66208, end: 66271}, {
                    begin: 127024,
                    end: 127135
                }];
            c.unicodeRanges = i, c.getUnicodeRange = d, c.parse = e, c.make = f
        }, {"../parse": 11, "../table": 13}],
        28: [function (a, b, c) {
            "use strict";

            function d(a, b) {
                var c, d = {}, e = new g.Parser(a, b);
                switch (d.version = e.parseVersion(), d.italicAngle = e.parseFixed(), d.underlinePosition = e.parseShort(), d.underlineThickness = e.parseShort(), d.isFixedPitch = e.parseULong(), d.minMemType42 = e.parseULong(), d.maxMemType42 = e.parseULong(), d.minMemType1 = e.parseULong(), d.maxMemType1 = e.parseULong(), d.version) {
                    case 1:
                        d.names = f.standardNames.slice();
                        break;
                    case 2:
                        for (d.numberOfGlyphs = e.parseUShort(), d.glyphNameIndex = new Array(d.numberOfGlyphs), c = 0; c < d.numberOfGlyphs; c++) d.glyphNameIndex[c] = e.parseUShort();
                        for (d.names = [], c = 0; c < d.numberOfGlyphs; c++) if (d.glyphNameIndex[c] >= f.standardNames.length) {
                            var h = e.parseChar();
                            d.names.push(e.parseString(h))
                        }
                        break;
                    case 2.5:
                        for (d.numberOfGlyphs = e.parseUShort(), d.offset = new Array(d.numberOfGlyphs), c = 0; c < d.numberOfGlyphs; c++) d.offset[c] = e.parseChar()
                }
                return d
            }

            function e() {
                return new h.Table("post", [{name: "version", type: "FIXED", value: 196608}, {
                    name: "italicAngle",
                    type: "FIXED",
                    value: 0
                }, {name: "underlinePosition", type: "FWORD", value: 0}, {
                    name: "underlineThickness",
                    type: "FWORD",
                    value: 0
                }, {name: "isFixedPitch", type: "ULONG", value: 0}, {
                    name: "minMemType42",
                    type: "ULONG",
                    value: 0
                }, {name: "maxMemType42", type: "ULONG", value: 0}, {
                    name: "minMemType1",
                    type: "ULONG",
                    value: 0
                }, {name: "maxMemType1", type: "ULONG", value: 0}])
            }

            var f = a("../encoding"), g = a("../parse"), h = a("../table");
            c.parse = d, c.make = e
        }, {"../encoding": 6, "../parse": 11, "../table": 13}],
        29: [function (a, b, c) {
            "use strict";

            function d(a) {
                return Math.log(a) / Math.log(2) | 0
            }

            function e(a) {
                for (; a.length % 4 != 0;) a.push(0);
                for (var b = 0, c = 0; c < a.length; c += 4) b += (a[c] << 24) + (a[c + 1] << 16) + (a[c + 2] << 8) + a[c + 3];
                return b %= Math.pow(2, 32)
            }

            function f(a, b, c, d) {
                return new l.Table("Table Record", [{
                    name: "tag",
                    type: "TAG",
                    value: void 0 !== a ? a : ""
                }, {name: "checkSum", type: "ULONG", value: void 0 !== b ? b : 0}, {
                    name: "offset",
                    type: "ULONG",
                    value: void 0 !== c ? c : 0
                }, {name: "length", type: "ULONG", value: void 0 !== d ? d : 0}])
            }

            function g(a) {
                var b = new l.Table("sfnt", [{name: "version", type: "TAG", value: "OTTO"}, {
                    name: "numTables",
                    type: "USHORT",
                    value: 0
                }, {name: "searchRange", type: "USHORT", value: 0}, {
                    name: "entrySelector",
                    type: "USHORT",
                    value: 0
                }, {name: "rangeShift", type: "USHORT", value: 0}]);
                b.tables = a, b.numTables = a.length;
                var c = Math.pow(2, d(b.numTables));
                b.searchRange = 16 * c, b.entrySelector = d(c), b.rangeShift = 16 * b.numTables - b.searchRange;
                for (var g = [], h = [], i = b.sizeOf() + f().sizeOf() * b.numTables; i % 4 != 0;) i += 1, h.push({
                    name: "padding",
                    type: "BYTE",
                    value: 0
                });
                for (var j = 0; j < a.length; j += 1) {
                    var m = a[j];
                    k.argument(4 === m.tableName.length, "Table name" + m.tableName + " is invalid.");
                    var n = m.sizeOf(), o = f(m.tableName, e(m.encode()), i, n);
                    for (g.push({
                        name: o.tag + " Table Record",
                        type: "TABLE",
                        value: o
                    }), h.push({
                        name: m.tableName + " table",
                        type: "TABLE",
                        value: m
                    }), i += n, k.argument(!isNaN(i), "Something went wrong calculating the offset."); i % 4 != 0;) i += 1, h.push({
                        name: "padding",
                        type: "BYTE",
                        value: 0
                    })
                }
                return g.sort(function (a, b) {
                    return a.value.tag > b.value.tag ? 1 : -1
                }), b.fields = b.fields.concat(g), b.fields = b.fields.concat(h), b
            }

            function h(a, b, c) {
                for (var d = 0; d < b.length; d += 1) {
                    var e = a.charToGlyphIndex(b[d]);
                    if (e > 0) {
                        return a.glyphs.get(e).getMetrics()
                    }
                }
                return c
            }

            function i(a) {
                for (var b = 0, c = 0; c < a.length; c += 1) b += a[c];
                return b / a.length
            }

            function j(a) {
                for (var b, c = [], d = [], f = [], j = [], k = [], l = [], w = [], x = 0, y = 0, z = 0, A = 0, B = 0, C = 0; C < a.glyphs.length; C += 1) {
                    var D = a.glyphs.get(C), E = 0 | D.unicode;
                    (b > E || null === b) && (b = E), x < E && (x = E);
                    var F = u.getUnicodeRange(E);
                    if (F < 32) y |= 1 << F; else if (F < 64) z |= 1 << F - 32; else if (F < 96) A |= 1 << F - 64; else {
                        if (!(F < 123)) throw new Error("Unicode ranges bits > 123 are reserved for internal usage");
                        B |= 1 << F - 96
                    }
                    if (".notdef" !== D.name) {
                        var G = D.getMetrics();
                        c.push(G.xMin), d.push(G.yMin), f.push(G.xMax), j.push(G.yMax), l.push(G.leftSideBearing), w.push(G.rightSideBearing), k.push(D.advanceWidth)
                    }
                }
                var H = {
                    xMin: Math.min.apply(null, c),
                    yMin: Math.min.apply(null, d),
                    xMax: Math.max.apply(null, f),
                    yMax: Math.max.apply(null, j),
                    advanceWidthMax: Math.max.apply(null, k),
                    advanceWidthAvg: i(k),
                    minLeftSideBearing: Math.min.apply(null, l),
                    maxLeftSideBearing: Math.max.apply(null, l),
                    minRightSideBearing: Math.min.apply(null, w)
                };
                H.ascender = void 0 !== a.ascender ? a.ascender : H.yMax, H.descender = void 0 !== a.descender ? a.descender : H.yMin;
                var I = o.make({unitsPerEm: a.unitsPerEm, xMin: H.xMin, yMin: H.yMin, xMax: H.xMax, yMax: H.yMax}),
                    J = p.make({
                        ascender: H.ascender,
                        descender: H.descender,
                        advanceWidthMax: H.advanceWidthMax,
                        minLeftSideBearing: H.minLeftSideBearing,
                        minRightSideBearing: H.minRightSideBearing,
                        xMaxExtent: H.maxLeftSideBearing + (H.xMax - H.xMin),
                        numberOfHMetrics: a.glyphs.length
                    }), K = s.make(a.glyphs.length), L = u.make({
                        xAvgCharWidth: Math.round(H.advanceWidthAvg),
                        usWeightClass: 500,
                        usWidthClass: 5,
                        usFirstCharIndex: b,
                        usLastCharIndex: x,
                        ulUnicodeRange1: y,
                        ulUnicodeRange2: z,
                        ulUnicodeRange3: A,
                        ulUnicodeRange4: B,
                        sTypoAscender: H.ascender,
                        sTypoDescender: H.descender,
                        sTypoLineGap: 0,
                        usWinAscent: H.ascender,
                        usWinDescent: -H.descender,
                        sxHeight: h(a, "xyvw", {yMax: 0}).yMax,
                        sCapHeight: h(a, "HIKLEFJMNTZBDPRAGOQSUVWXY", H).yMax,
                        usBreakChar: a.hasChar(" ") ? 32 : 0
                    }), M = q.make(a.glyphs), N = m.make(a.glyphs), O = a.getEnglishName("fontFamily"),
                    P = a.getEnglishName("fontSubfamily"), Q = O + " " + P, R = a.getEnglishName("postScriptName");
                R || (R = O.replace(/\s/g, "") + "-" + P);
                var S = {};
                for (var T in a.names) S[T] = a.names[T];
                S.uniqueID || (S.uniqueID = {en: a.getEnglishName("manufacturer") + ":" + Q}), S.postScriptName || (S.postScriptName = {en: R}), S.preferredFamily || (S.preferredFamily = a.names.fontFamily), S.preferredSubfamily || (S.preferredSubfamily = a.names.fontSubfamily);
                var U = [], V = t.make(S, U), W = U.length > 0 ? r.make(U) : void 0, X = v.make(),
                    Y = n.make(a.glyphs, {
                        version: a.getEnglishName("version"),
                        fullName: Q,
                        familyName: O,
                        weightName: P,
                        postScriptName: R,
                        unitsPerEm: a.unitsPerEm
                    }), Z = [I, J, K, L, V, N, X, Y, M];
                W && Z.push(W);
                var $ = g(Z), _ = $.encode(), aa = e(_), ba = $.fields, ca = !1;
                for (C = 0; C < ba.length; C += 1) if ("head table" === ba[C].name) {
                    ba[C].value.checkSumAdjustment = 2981146554 - aa, ca = !0;
                    break
                }
                if (!ca) throw new Error("Could not find head table with checkSum to adjust.");
                return $
            }

            var k = a("../check"), l = a("../table"), m = a("./cmap"), n = a("./cff"), o = a("./head"), p = a("./hhea"),
                q = a("./hmtx"), r = a("./ltag"), s = a("./maxp"), t = a("./name"), u = a("./os2"), v = a("./post");
            c.computeCheckSum = e, c.make = g, c.fontToTable = j
        }, {
            "../check": 4,
            "../table": 13,
            "./cff": 14,
            "./cmap": 15,
            "./head": 19,
            "./hhea": 20,
            "./hmtx": 21,
            "./ltag": 24,
            "./maxp": 25,
            "./name": 26,
            "./os2": 27,
            "./post": 28
        }],
        30: [function (a, b, c) {
            "use strict";

            function d(a) {
                return function () {
                    return a
                }
            }

            var e = a("./check"), f = 32768, g = 2147483648, h = {}, i = {}, j = {};
            i.BYTE = function (a) {
                return e.argument(a >= 0 && a <= 255, "Byte value should be between 0 and 255."), [a]
            }, j.BYTE = d(1), i.CHAR = function (a) {
                return [a.charCodeAt(0)]
            }, j.CHAR = d(1), i.CHARARRAY = function (a) {
                for (var b = [], c = 0; c < a.length; c += 1) b.push(a.charCodeAt(c));
                return b
            }, j.CHARARRAY = function (a) {
                return a.length
            }, i.USHORT = function (a) {
                return [a >> 8 & 255, 255 & a]
            }, j.USHORT = d(2), i.SHORT = function (a) {
                return a >= f && (a = -(2 * f - a)), [a >> 8 & 255, 255 & a]
            }, j.SHORT = d(2), i.UINT24 = function (a) {
                return [a >> 16 & 255, a >> 8 & 255, 255 & a]
            }, j.UINT24 = d(3), i.ULONG = function (a) {
                return [a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a]
            }, j.ULONG = d(4), i.LONG = function (a) {
                return a >= g && (a = -(2 * g - a)), [a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a]
            }, j.LONG = d(4), i.FIXED = i.ULONG, j.FIXED = j.ULONG, i.FWORD = i.SHORT, j.FWORD = j.SHORT, i.UFWORD = i.USHORT, j.UFWORD = j.USHORT, i.LONGDATETIME = function () {
                return [0, 0, 0, 0, 0, 0, 0, 0]
            }, j.LONGDATETIME = d(8), i.TAG = function (a) {
                return e.argument(4 === a.length, "Tag should be exactly 4 ASCII characters."), [a.charCodeAt(0), a.charCodeAt(1), a.charCodeAt(2), a.charCodeAt(3)]
            }, j.TAG = d(4), i.Card8 = i.BYTE, j.Card8 = j.BYTE, i.Card16 = i.USHORT, j.Card16 = j.USHORT, i.OffSize = i.BYTE, j.OffSize = j.BYTE, i.SID = i.USHORT, j.SID = j.USHORT, i.NUMBER = function (a) {
                return a >= -107 && a <= 107 ? [a + 139] : a >= 108 && a <= 1131 ? (a -= 108, [247 + (a >> 8), 255 & a]) : a >= -1131 && a <= -108 ? (a = -a - 108, [251 + (a >> 8), 255 & a]) : a >= -32768 && a <= 32767 ? i.NUMBER16(a) : i.NUMBER32(a)
            }, j.NUMBER = function (a) {
                return i.NUMBER(a).length
            }, i.NUMBER16 = function (a) {
                return [28, a >> 8 & 255, 255 & a]
            }, j.NUMBER16 = d(3), i.NUMBER32 = function (a) {
                return [29, a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a]
            }, j.NUMBER32 = d(5), i.REAL = function (a) {
                var b = a.toString(), c = /\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(b);
                if (c) {
                    var d = parseFloat("1e" + ((c[2] ? +c[2] : 0) + c[1].length));
                    b = (Math.round(a * d) / d).toString()
                }
                var e, f, g = "";
                for (e = 0, f = b.length; e < f; e += 1) {
                    var h = b[e];
                    g += "e" === h ? "-" === b[++e] ? "c" : "b" : "." === h ? "a" : "-" === h ? "e" : h
                }
                g += 1 & g.length ? "f" : "ff";
                var i = [30];
                for (e = 0, f = g.length; e < f; e += 2) i.push(parseInt(g.substr(e, 2), 16));
                return i
            }, j.REAL = function (a) {
                return i.REAL(a).length
            }, i.NAME = i.CHARARRAY, j.NAME = j.CHARARRAY, i.STRING = i.CHARARRAY, j.STRING = j.CHARARRAY, h.UTF16 = function (a, b, c) {
                for (var d = [], e = c / 2, f = 0; f < e; f++, b += 2) d[f] = a.getUint16(b);
                return String.fromCharCode.apply(null, d)
            }, i.UTF16 = function (a) {
                for (var b = [], c = 0; c < a.length; c += 1) {
                    var d = a.charCodeAt(c);
                    b.push(d >> 8 & 255), b.push(255 & d)
                }
                return b
            }, j.UTF16 = function (a) {
                return 2 * a.length
            };
            var k = {
                "x-mac-croatian": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č… ÀÃÕŒœĐ—“”‘’÷◊©⁄€‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ",
                "x-mac-cyrillic": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю",
                "x-mac-gaelic": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØḂ±≤≥ḃĊċḊḋḞḟĠġṀæøṁṖṗɼƒſṠ«»… ÀÃÕŒœ–—“”‘’ṡẛÿŸṪ€‹›Ŷŷṫ·Ỳỳ⁊ÂÊÁËÈÍÎÏÌÓÔ♣ÒÚÛÙıÝýŴŵẄẅẀẁẂẃ",
                "x-mac-greek": "Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦€ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ­",
                "x-mac-icelandic": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ",
                "x-mac-inuit": "ᐃᐄᐅᐆᐊᐋᐱᐲᐳᐴᐸᐹᑉᑎᑏᑐᑑᑕᑖᑦᑭᑮᑯᑰᑲᑳᒃᒋᒌᒍᒎᒐᒑ°ᒡᒥᒦ•¶ᒧ®©™ᒨᒪᒫᒻᓂᓃᓄᓅᓇᓈᓐᓯᓰᓱᓲᓴᓵᔅᓕᓖᓗᓘᓚᓛᓪᔨᔩᔪᔫᔭ… ᔮᔾᕕᕖᕗ–—“”‘’ᕘᕙᕚᕝᕆᕇᕈᕉᕋᕌᕐᕿᖀᖁᖂᖃᖄᖅᖏᖐᖑᖒᖓᖔᖕᙱᙲᙳᙴᙵᙶᖖᖠᖡᖢᖣᖤᖥᖦᕼŁł",
                "x-mac-ce": "ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»… ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ",
                macintosh: "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ",
                "x-mac-romanian": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂȘ∞±≤≥¥µ∂∑∏π∫ªºΩăș¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›Țț‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ",
                "x-mac-turkish": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙˆ˜¯˘˙˚¸˝˛ˇ"
            };
            h.MACSTRING = function (a, b, c, d) {
                var e = k[d];
                if (void 0 !== e) {
                    for (var f = "", g = 0; g < c; g++) {
                        var h = a.getUint8(b + g);
                        f += h <= 127 ? String.fromCharCode(h) : e[127 & h]
                    }
                    return f
                }
            };
            var l, m = "function" == typeof WeakMap && new WeakMap, n = function (a) {
                if (!l) {
                    l = {};
                    for (var b in k) l[b] = new String(b)
                }
                var c = l[a];
                if (void 0 !== c) {
                    if (m) {
                        var d = m.get(c);
                        if (void 0 !== d) return d
                    }
                    var e = k[a];
                    if (void 0 !== e) {
                        for (var f = {}, g = 0; g < e.length; g++) f[e.charCodeAt(g)] = g + 128;
                        return m && m.set(c, f), f
                    }
                }
            };
            i.MACSTRING = function (a, b) {
                var c = n(b);
                if (void 0 !== c) {
                    for (var d = [], e = 0; e < a.length; e++) {
                        var f = a.charCodeAt(e);
                        if (f >= 128 && void 0 === (f = c[f])) return;
                        d.push(f)
                    }
                    return d
                }
            }, j.MACSTRING = function (a, b) {
                var c = i.MACSTRING(a, b);
                return void 0 !== c ? c.length : 0
            }, i.INDEX = function (a) {
                var b, c = 1, d = [c], e = [], f = 0;
                for (b = 0; b < a.length; b += 1) {
                    var g = i.OBJECT(a[b]);
                    Array.prototype.push.apply(e, g), f += g.length, c += g.length, d.push(c)
                }
                if (0 === e.length) return [0, 0];
                var h = [], j = 1 + Math.floor(Math.log(f) / Math.log(2)) / 8 | 0,
                    k = [void 0, i.BYTE, i.USHORT, i.UINT24, i.ULONG][j];
                for (b = 0; b < d.length; b += 1) {
                    var l = k(d[b]);
                    Array.prototype.push.apply(h, l)
                }
                return Array.prototype.concat(i.Card16(a.length), i.OffSize(j), h, e)
            }, j.INDEX = function (a) {
                return i.INDEX(a).length
            }, i.DICT = function (a) {
                for (var b = [], c = Object.keys(a), d = c.length, e = 0; e < d; e += 1) {
                    var f = parseInt(c[e], 0), g = a[f];
                    b = b.concat(i.OPERAND(g.value, g.type)), b = b.concat(i.OPERATOR(f))
                }
                return b
            }, j.DICT = function (a) {
                return i.DICT(a).length
            }, i.OPERATOR = function (a) {
                return a < 1200 ? [a] : [12, a - 1200]
            }, i.OPERAND = function (a, b) {
                var c = [];
                if (Array.isArray(b)) for (var d = 0; d < b.length; d += 1) e.argument(a.length === b.length, "Not enough arguments given for type" + b), c = c.concat(i.OPERAND(a[d], b[d])); else if ("SID" === b) c = c.concat(i.NUMBER(a)); else if ("offset" === b) c = c.concat(i.NUMBER32(a)); else if ("number" === b) c = c.concat(i.NUMBER(a)); else {
                    if ("real" !== b) throw new Error("Unknown operand type " + b);
                    c = c.concat(i.REAL(a))
                }
                return c
            }, i.OP = i.BYTE, j.OP = j.BYTE;
            var o = "function" == typeof WeakMap && new WeakMap;
            i.CHARSTRING = function (a) {
                if (o) {
                    var b = o.get(a);
                    if (void 0 !== b) return b
                }
                for (var c = [], d = a.length, e = 0; e < d; e += 1) {
                    var f = a[e];
                    c = c.concat(i[f.type](f.value))
                }
                return o && o.set(a, c), c
            }, j.CHARSTRING = function (a) {
                return i.CHARSTRING(a).length
            }, i.OBJECT = function (a) {
                var b = i[a.type];
                return e.argument(void 0 !== b, "No encoding function for type " + a.type), b(a.value)
            }, j.OBJECT = function (a) {
                var b = j[a.type];
                return e.argument(void 0 !== b, "No sizeOf function for type " + a.type), b(a.value)
            }, i.TABLE = function (a) {
                for (var b = [], c = a.fields.length, d = 0; d < c; d += 1) {
                    var f = a.fields[d], g = i[f.type];
                    e.argument(void 0 !== g, "No encoding function for field type " + f.type);
                    var h = a[f.name];
                    void 0 === h && (h = f.value);
                    var j = g(h);
                    b = b.concat(j)
                }
                return b
            }, j.TABLE = function (a) {
                for (var b = 0, c = a.fields.length, d = 0; d < c; d += 1) {
                    var f = a.fields[d], g = j[f.type];
                    e.argument(void 0 !== g, "No sizeOf function for field type " + f.type);
                    var h = a[f.name];
                    void 0 === h && (h = f.value), b += g(h)
                }
                return b
            }, i.LITERAL = function (a) {
                return a
            }, j.LITERAL = function (a) {
                return a.length
            }, c.decode = h, c.encode = i, c.sizeOf = j
        }, {"./check": 4}],
        31: [function (a, b, c) {
            function d() {
                throw new Error("setTimeout has not been defined")
            }

            function e() {
                throw new Error("clearTimeout has not been defined")
            }

            function f(a) {
                if (l === setTimeout) return setTimeout(a, 0);
                if ((l === d || !l) && setTimeout) return l = setTimeout, setTimeout(a, 0);
                try {
                    return l(a, 0)
                } catch (b) {
                    try {
                        return l.call(null, a, 0)
                    } catch (b) {
                        return l.call(this, a, 0)
                    }
                }
            }

            function g(a) {
                if (m === clearTimeout) return clearTimeout(a);
                if ((m === e || !m) && clearTimeout) return m = clearTimeout, clearTimeout(a);
                try {
                    return m(a)
                } catch (b) {
                    try {
                        return m.call(null, a)
                    } catch (b) {
                        return m.call(this, a)
                    }
                }
            }

            function h() {
                q && o && (q = !1, o.length ? p = o.concat(p) : r = -1, p.length && i())
            }

            function i() {
                if (!q) {
                    var a = f(h);
                    q = !0;
                    for (var b = p.length; b;) {
                        for (o = p, p = []; ++r < b;) o && o[r].run();
                        r = -1, b = p.length
                    }
                    o = null, q = !1, g(a)
                }
            }

            function j(a, b) {
                this.fun = a, this.array = b
            }

            function k() {
            }

            var l, m, n = b.exports = {};
            !function () {
                try {
                    l = "function" == typeof setTimeout ? setTimeout : d
                } catch (a) {
                    l = d
                }
                try {
                    m = "function" == typeof clearTimeout ? clearTimeout : e
                } catch (a) {
                    m = e
                }
            }();
            var o, p = [], q = !1, r = -1;
            n.nextTick = function (a) {
                var b = new Array(arguments.length - 1);
                if (arguments.length > 1) for (var c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
                p.push(new j(a, b)), 1 !== p.length || q || f(i)
            }, j.prototype.run = function () {
                this.fun.apply(null, this.array)
            }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = k, n.addListener = k, n.once = k, n.off = k, n.removeListener = k, n.removeAllListeners = k, n.emit = k, n.binding = function (a) {
                throw new Error("process.binding is not supported")
            }, n.cwd = function () {
                return "/"
            }, n.chdir = function (a) {
                throw new Error("process.chdir is not supported")
            }, n.umask = function () {
                return 0
            }
        }, {}],
        32: [function (a, b, c) {
            !function (a) {
                "use strict";

                function b(a) {
                    if ("string" != typeof a && (a = String(a)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(a)) throw new TypeError("Invalid character in header field name");
                    return a.toLowerCase()
                }

                function c(a) {
                    return "string" != typeof a && (a = String(a)), a
                }

                function d(a) {
                    var b = {
                        next: function () {
                            var b = a.shift();
                            return {done: void 0 === b, value: b}
                        }
                    };
                    return r.iterable && (b[Symbol.iterator] = function () {
                        return b
                    }), b
                }

                function e(a) {
                    this.map = {}, a instanceof e ? a.forEach(function (a, b) {
                        this.append(b, a)
                    }, this) : Array.isArray(a) ? a.forEach(function (a) {
                        this.append(a[0], a[1])
                    }, this) : a && Object.getOwnPropertyNames(a).forEach(function (b) {
                        this.append(b, a[b])
                    }, this)
                }

                function f(a) {
                    if (a.bodyUsed) return Promise.reject(new TypeError("Already read"));
                    a.bodyUsed = !0
                }

                function g(a) {
                    return new Promise(function (b, c) {
                        a.onload = function () {
                            b(a.result)
                        }, a.onerror = function () {
                            c(a.error)
                        }
                    })
                }

                function h(a) {
                    var b = new FileReader, c = g(b);
                    return b.readAsArrayBuffer(a), c
                }

                function i(a) {
                    var b = new FileReader, c = g(b);
                    return b.readAsText(a), c
                }

                function j(a) {
                    for (var b = new Uint8Array(a), c = new Array(b.length), d = 0; d < b.length; d++) c[d] = String.fromCharCode(b[d]);
                    return c.join("")
                }

                function k(a) {
                    if (a.slice) return a.slice(0);
                    var b = new Uint8Array(a.byteLength);
                    return b.set(new Uint8Array(a)), b.buffer
                }

                function l() {
                    return this.bodyUsed = !1, this._initBody = function (a) {
                        if (this._bodyInit = a, a) if ("string" == typeof a) this._bodyText = a; else if (r.blob && Blob.prototype.isPrototypeOf(a)) this._bodyBlob = a; else if (r.formData && FormData.prototype.isPrototypeOf(a)) this._bodyFormData = a; else if (r.searchParams && URLSearchParams.prototype.isPrototypeOf(a)) this._bodyText = a.toString(); else if (r.arrayBuffer && r.blob && t(a)) this._bodyArrayBuffer = k(a.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]); else {
                            if (!r.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(a) && !u(a)) throw new Error("unsupported BodyInit type");
                            this._bodyArrayBuffer = k(a)
                        } else this._bodyText = "";
                        this.headers.get("content-type") || ("string" == typeof a ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : r.searchParams && URLSearchParams.prototype.isPrototypeOf(a) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                    }, r.blob && (this.blob = function () {
                        var a = f(this);
                        if (a) return a;
                        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                        if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                        return Promise.resolve(new Blob([this._bodyText]))
                    }, this.arrayBuffer = function () {
                        return this._bodyArrayBuffer ? f(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(h)
                    }), this.text = function () {
                        var a = f(this);
                        if (a) return a;
                        if (this._bodyBlob) return i(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(j(this._bodyArrayBuffer));
                        if (this._bodyFormData) throw new Error("could not read FormData body as text");
                        return Promise.resolve(this._bodyText)
                    }, r.formData && (this.formData = function () {
                        return this.text().then(o)
                    }), this.json = function () {
                        return this.text().then(JSON.parse)
                    }, this
                }

                function m(a) {
                    var b = a.toUpperCase();
                    return v.indexOf(b) > -1 ? b : a
                }

                function n(a, b) {
                    b = b || {};
                    var c = b.body;
                    if (a instanceof n) {
                        if (a.bodyUsed) throw new TypeError("Already read");
                        this.url = a.url, this.credentials = a.credentials, b.headers || (this.headers = new e(a.headers)), this.method = a.method, this.mode = a.mode, c || null == a._bodyInit || (c = a._bodyInit, a.bodyUsed = !0)
                    } else this.url = String(a);
                    if (this.credentials = b.credentials || this.credentials || "omit", !b.headers && this.headers || (this.headers = new e(b.headers)), this.method = m(b.method || this.method || "GET"), this.mode = b.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && c) throw new TypeError("Body not allowed for GET or HEAD requests");
                    this._initBody(c)
                }

                function o(a) {
                    var b = new FormData;
                    return a.trim().split("&").forEach(function (a) {
                        if (a) {
                            var c = a.split("="), d = c.shift().replace(/\+/g, " "),
                                e = c.join("=").replace(/\+/g, " ");
                            b.append(decodeURIComponent(d), decodeURIComponent(e))
                        }
                    }), b
                }

                function p(a) {
                    var b = new e;
                    return a.split(/\r?\n/).forEach(function (a) {
                        var c = a.split(":"), d = c.shift().trim();
                        if (d) {
                            var e = c.join(":").trim();
                            b.append(d, e)
                        }
                    }), b
                }

                function q(a, b) {
                    b || (b = {}), this.type = "default", this.status = "status" in b ? b.status : 200, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in b ? b.statusText : "OK", this.headers = new e(b.headers), this.url = b.url || "", this._initBody(a)
                }

                if (!a.fetch) {
                    var r = {
                        searchParams: "URLSearchParams" in a,
                        iterable: "Symbol" in a && "iterator" in Symbol,
                        blob: "FileReader" in a && "Blob" in a && function () {
                            try {
                                return new Blob, !0
                            } catch (a) {
                                return !1
                            }
                        }(),
                        formData: "FormData" in a,
                        arrayBuffer: "ArrayBuffer" in a
                    };
                    if (r.arrayBuffer) var s = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                        t = function (a) {
                            return a && DataView.prototype.isPrototypeOf(a)
                        }, u = ArrayBuffer.isView || function (a) {
                            return a && s.indexOf(Object.prototype.toString.call(a)) > -1
                        };
                    e.prototype.append = function (a, d) {
                        a = b(a), d = c(d);
                        var e = this.map[a];
                        this.map[a] = e ? e + "," + d : d
                    }, e.prototype.delete = function (a) {
                        delete this.map[b(a)]
                    }, e.prototype.get = function (a) {
                        return a = b(a), this.has(a) ? this.map[a] : null
                    }, e.prototype.has = function (a) {
                        return this.map.hasOwnProperty(b(a))
                    }, e.prototype.set = function (a, d) {
                        this.map[b(a)] = c(d)
                    }, e.prototype.forEach = function (a, b) {
                        for (var c in this.map) this.map.hasOwnProperty(c) && a.call(b, this.map[c], c, this)
                    }, e.prototype.keys = function () {
                        var a = [];
                        return this.forEach(function (b, c) {
                            a.push(c)
                        }), d(a)
                    }, e.prototype.values = function () {
                        var a = [];
                        return this.forEach(function (b) {
                            a.push(b)
                        }), d(a)
                    }, e.prototype.entries = function () {
                        var a = [];
                        return this.forEach(function (b, c) {
                            a.push([c, b])
                        }), d(a)
                    }, r.iterable && (e.prototype[Symbol.iterator] = e.prototype.entries);
                    var v = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
                    n.prototype.clone = function () {
                        return new n(this, {body: this._bodyInit})
                    }, l.call(n.prototype), l.call(q.prototype), q.prototype.clone = function () {
                        return new q(this._bodyInit, {
                            status: this.status,
                            statusText: this.statusText,
                            headers: new e(this.headers),
                            url: this.url
                        })
                    }, q.error = function () {
                        var a = new q(null, {status: 0, statusText: ""});
                        return a.type = "error", a
                    };
                    var w = [301, 302, 303, 307, 308];
                    q.redirect = function (a, b) {
                        if (w.indexOf(b) === -1) throw new RangeError("Invalid status code");
                        return new q(null, {status: b, headers: {location: a}})
                    }, a.Headers = e, a.Request = n, a.Response = q, a.fetch = function (a, b) {
                        return new Promise(function (c, d) {
                            var e = new n(a, b), f = new XMLHttpRequest;
                            f.onload = function () {
                                var a = {
                                    status: f.status,
                                    statusText: f.statusText,
                                    headers: p(f.getAllResponseHeaders() || "")
                                };
                                a.url = "responseURL" in f ? f.responseURL : a.headers.get("X-Request-URL"), c(new q("response" in f ? f.response : f.responseText, a))
                            }, f.onerror = function () {
                                d(new TypeError("Network request failed"))
                            }, f.ontimeout = function () {
                                d(new TypeError("Network request failed"))
                            }, f.open(e.method, e.url, !0), "include" === e.credentials && (f.withCredentials = !0), "responseType" in f && r.blob && (f.responseType = "blob"), e.headers.forEach(function (a, b) {
                                f.setRequestHeader(b, a)
                            }), f.send(void 0 === e._bodyInit ? null : e._bodyInit)
                        })
                    }, a.fetch.polyfill = !0
                }
            }("undefined" != typeof self ? self : this)
        }, {}],
        33: [function (a, b, c) {
            "use strict";
            var d = a("./core/core");
            a("./color/p5.Color"), a("./core/p5.Element"), a("./typography/p5.Font"), a("./core/p5.Graphics"), a("./core/p5.Renderer2D"), a("./image/p5.Image"), a("./math/p5.Vector"), a("./io/p5.TableRow"), a("./io/p5.Table"), a("./io/p5.XML"), a("./color/creating_reading"), a("./color/setting"), a("./core/constants"), a("./utilities/conversion"), a("./utilities/array_functions"), a("./utilities/string_functions"), a("./core/environment"), a("./image/image"), a("./image/loading_displaying"), a("./image/pixels"), a("./io/files"), a("./events/keyboard"), a("./events/acceleration"), a("./events/mouse"), a("./utilities/time_date"), a("./events/touch"), a("./math/math"), a("./math/calculation"), a("./math/random"), a("./math/noise"), a("./math/trigonometry"), a("./core/rendering"), a("./core/2d_primitives"), a("./core/attributes"), a("./core/curves"), a("./core/vertex"), a("./core/structure"), a("./core/transform"), a("./typography/attributes"), a("./typography/loading_displaying"), a("./webgl/p5.RendererGL"), a("./webgl/p5.Geometry"), a("./webgl/p5.RendererGL.Retained"), a("./webgl/p5.RendererGL.Immediate"), a("./webgl/primitives"), a("./webgl/loading"), a("./webgl/p5.Matrix"), a("./webgl/material"), a("./webgl/light"), a("./webgl/shader"), a("./webgl/camera"), a("./webgl/interaction");
            var e = function () {
                window.PHANTOMJS || window.mocha || (window.setup && "function" == typeof window.setup || window.draw && "function" == typeof window.draw) && !d.instance && new d
            };
            "complete" === document.readyState ? e() : window.addEventListener("load", e, !1), b.exports = d
        }, {
            "./color/creating_reading": 35,
            "./color/p5.Color": 36,
            "./color/setting": 37,
            "./core/2d_primitives": 38,
            "./core/attributes": 39,
            "./core/constants": 41,
            "./core/core": 42,
            "./core/curves": 43,
            "./core/environment": 44,
            "./core/p5.Element": 46,
            "./core/p5.Graphics": 47,
            "./core/p5.Renderer2D": 49,
            "./core/rendering": 50,
            "./core/structure": 52,
            "./core/transform": 53,
            "./core/vertex": 54,
            "./events/acceleration": 55,
            "./events/keyboard": 56,
            "./events/mouse": 57,
            "./events/touch": 58,
            "./image/image": 60,
            "./image/loading_displaying": 61,
            "./image/p5.Image": 62,
            "./image/pixels": 63,
            "./io/files": 64,
            "./io/p5.Table": 65,
            "./io/p5.TableRow": 66,
            "./io/p5.XML": 67,
            "./math/calculation": 68,
            "./math/math": 69,
            "./math/noise": 70,
            "./math/p5.Vector": 71,
            "./math/random": 73,
            "./math/trigonometry": 74,
            "./typography/attributes": 75,
            "./typography/loading_displaying": 76,
            "./typography/p5.Font": 77,
            "./utilities/array_functions": 78,
            "./utilities/conversion": 79,
            "./utilities/string_functions": 80,
            "./utilities/time_date": 81,
            "./webgl/camera": 82,
            "./webgl/interaction": 83,
            "./webgl/light": 84,
            "./webgl/loading": 85,
            "./webgl/material": 86,
            "./webgl/p5.Geometry": 87,
            "./webgl/p5.Matrix": 88,
            "./webgl/p5.RendererGL": 91,
            "./webgl/p5.RendererGL.Immediate": 89,
            "./webgl/p5.RendererGL.Retained": 90,
            "./webgl/primitives": 92,
            "./webgl/shader": 93
        }],
        34: [function (a, b, c) {
            "use strict";
            var d = a("../core/core");
            d.ColorConversion = {}, d.ColorConversion._hsbaToHSLA = function (a) {
                var b = a[0], c = a[1], d = a[2], e = (2 - c) * d / 2;
                return 0 !== e && (1 === e ? c = 0 : e < .5 ? c /= 2 - c : c = c * d / (2 - 2 * e)), [b, c, e, a[3]]
            }, d.ColorConversion._hsbaToRGBA = function (a) {
                var b = 6 * a[0], c = a[1], d = a[2], e = [];
                if (0 === c) e = [d, d, d, a[3]]; else {
                    var f, g, h, i = Math.floor(b), j = d * (1 - c), k = d * (1 - c * (b - i)),
                        l = d * (1 - c * (1 + i - b));
                    1 === i ? (f = k, g = d, h = j) : 2 === i ? (f = j, g = d, h = l) : 3 === i ? (f = j, g = k, h = d) : 4 === i ? (f = l, g = j, h = d) : 5 === i ? (f = d, g = j, h = k) : (f = d, g = l, h = j), e = [f, g, h, a[3]]
                }
                return e
            }, d.ColorConversion._hslaToHSBA = function (a) {
                var b, c = a[0], d = a[1], e = a[2];
                return b = e < .5 ? (1 + d) * e : e + d - e * d, d = 2 * (b - e) / b, [c, d, b, a[3]]
            }, d.ColorConversion._hslaToRGBA = function (a) {
                var b = 6 * a[0], c = a[1], d = a[2], e = [];
                if (0 === c) e = [d, d, d, a[3]]; else {
                    var f;
                    f = d < .5 ? (1 + c) * d : d + c - d * c;
                    var g = 2 * d - f, h = function (a, b, c) {
                        return a < 0 ? a += 6 : a >= 6 && (a -= 6), a < 1 ? b + (c - b) * a : a < 3 ? c : a < 4 ? b + (c - b) * (4 - a) : b
                    };
                    e = [h(b + 2, g, f), h(b, g, f), h(b - 2, g, f), a[3]]
                }
                return e
            }, d.ColorConversion._rgbaToHSBA = function (a) {
                var b, c, d = a[0], e = a[1], f = a[2], g = Math.max(d, e, f), h = g - Math.min(d, e, f);
                return 0 === h ? (b = 0, c = 0) : (c = h / g, d === g ? b = (e - f) / h : e === g ? b = 2 + (f - d) / h : f === g && (b = 4 + (d - e) / h), b < 0 ? b += 6 : b >= 6 && (b -= 6)), [b / 6, c, g, a[3]]
            }, d.ColorConversion._rgbaToHSLA = function (a) {
                var b, c, d = a[0], e = a[1], f = a[2], g = Math.max(d, e, f), h = Math.min(d, e, f), i = g + h,
                    j = g - h;
                return 0 === j ? (b = 0, c = 0) : (c = i < 1 ? j / i : j / (2 - i), d === g ? b = (e - f) / j : e === g ? b = 2 + (f - d) / j : f === g && (b = 4 + (d - e) / j), b < 0 ? b += 6 : b >= 6 && (b -= 6)), [b / 6, c, i / 2, a[3]]
            }, b.exports = d.ColorConversion
        }, {"../core/core": 42}],
        35: [function (a, b, c) {
            "use strict";
            var d = a("../core/core"), e = a("../core/constants");
            a("./p5.Color"), d.prototype.alpha = function (a) {
                if (a instanceof d.Color || a instanceof Array) return this.color(a)._getAlpha();
                throw new Error("Needs p5.Color or pixel array as argument.")
            }, d.prototype.blue = function (a) {
                if (a instanceof d.Color || a instanceof Array) return this.color(a)._getBlue();
                throw new Error("Needs p5.Color or pixel array as argument.")
            }, d.prototype.brightness = function (a) {
                if (a instanceof d.Color || a instanceof Array) return this.color(a)._getBrightness();
                throw new Error("Needs p5.Color or pixel array as argument.")
            }, d.prototype.color = function () {
                return arguments[0] instanceof d.Color ? arguments[0] : arguments[0] instanceof Array ? this instanceof d.Renderer ? new d.Color(this, arguments[0]) : new d.Color(this._renderer, arguments[0]) : this instanceof d.Renderer ? new d.Color(this, arguments) : new d.Color(this._renderer, arguments)
            }, d.prototype.green = function (a) {
                if (a instanceof d.Color || a instanceof Array) return this.color(a)._getGreen();
                throw new Error("Needs p5.Color or pixel array as argument.")
            }, d.prototype.hue = function (a) {
                if (a instanceof d.Color || a instanceof Array) return this.color(a)._getHue();
                throw new Error("Needs p5.Color or pixel array as argument.")
            }, d.prototype.lerpColor = function (a, b, c) {
                var d, f, g, h, i, j, k = this._renderer._colorMode, l = this._renderer._colorMaxes;
                if (k === e.RGB) i = a.levels.map(function (a) {
                    return a / 255
                }), j = b.levels.map(function (a) {
                    return a / 255
                }); else if (k === e.HSB) a._getBrightness(), b._getBrightness(), i = a.hsba, j = b.hsba; else {
                    if (k !== e.HSL) throw new Error(k + "cannot be used for interpolation.");
                    a._getLightness(), b._getLightness(), i = a.hsla, j = b.hsla
                }
                return c = Math.max(Math.min(c, 1), 0), d = this.lerp(i[0], j[0], c), f = this.lerp(i[1], j[1], c), g = this.lerp(i[2], j[2], c), h = this.lerp(i[3], j[3], c), d *= l[k][0], f *= l[k][1], g *= l[k][2], h *= l[k][3], this.color(d, f, g, h)
            }, d.prototype.lightness = function (a) {
                if (a instanceof d.Color || a instanceof Array) return this.color(a)._getLightness();
                throw new Error("Needs p5.Color or pixel array as argument.")
            }, d.prototype.red = function (a) {
                if (a instanceof d.Color || a instanceof Array) return this.color(a)._getRed();
                throw new Error("Needs p5.Color or pixel array as argument.")
            }, d.prototype.saturation = function (a) {
                if (a instanceof d.Color || a instanceof Array) return this.color(a)._getSaturation();
                throw new Error("Needs p5.Color or pixel array as argument.")
            }, b.exports = d
        }, {"../core/constants": 41, "../core/core": 42, "./p5.Color": 36}],
        36: [function (a, b, c) {
            var d = a("../core/core"), e = a("../core/constants"), f = a("./color_conversion");
            d.Color = function (a, b) {
                if (this.mode = a._colorMode, this.maxes = a._colorMaxes, this.mode !== e.RGB && this.mode !== e.HSL && this.mode !== e.HSB) throw new Error(this.mode + " is an invalid colorMode.");
                return this._array = d.Color._parseInputs.apply(a, b), this.levels = this._array.map(function (a) {
                    return Math.round(255 * a)
                }), this
            }, d.Color.prototype.toString = function () {
                var a = this.levels, b = this._array[3];
                return "rgba(" + a[0] + "," + a[1] + "," + a[2] + "," + b + ")"
            }, d.Color.prototype._getAlpha = function () {
                return this._array[3] * this.maxes[this.mode][3]
            }, d.Color.prototype._getBlue = function () {
                return this._array[2] * this.maxes[e.RGB][2]
            }, d.Color.prototype._getBrightness = function () {
                return this.hsba || (this.hsba = f._rgbaToHSBA(this._array)), this.hsba[2] * this.maxes[e.HSB][2]
            }, d.Color.prototype._getGreen = function () {
                return this._array[1] * this.maxes[e.RGB][1]
            }, d.Color.prototype._getHue = function () {
                return this.mode === e.HSB ? (this.hsba || (this.hsba = f._rgbaToHSBA(this._array)), this.hsba[0] * this.maxes[e.HSB][0]) : (this.hsla || (this.hsla = f._rgbaToHSLA(this._array)), this.hsla[0] * this.maxes[e.HSL][0])
            }, d.Color.prototype._getLightness = function () {
                return this.hsla || (this.hsla = f._rgbaToHSLA(this._array)), this.hsla[2] * this.maxes[e.HSL][2]
            }, d.Color.prototype._getRed = function () {
                return this._array[0] * this.maxes[e.RGB][0]
            }, d.Color.prototype._getSaturation = function () {
                return this.mode === e.HSB ? (this.hsba || (this.hsba = f._rgbaToHSBA(this._array)), this.hsba[1] * this.maxes[e.HSB][1]) : (this.hsla || (this.hsla = f._rgbaToHSLA(this._array)), this.hsla[1] * this.maxes[e.HSL][1])
            };
            var g = {
                aliceblue: "#f0f8ff",
                antiquewhite: "#faebd7",
                aqua: "#00ffff",
                aquamarine: "#7fffd4",
                azure: "#f0ffff",
                beige: "#f5f5dc",
                bisque: "#ffe4c4",
                black: "#000000",
                blanchedalmond: "#ffebcd",
                blue: "#0000ff",
                blueviolet: "#8a2be2",
                brown: "#a52a2a",
                burlywood: "#deb887",
                cadetblue: "#5f9ea0",
                chartreuse: "#7fff00",
                chocolate: "#d2691e",
                coral: "#ff7f50",
                cornflowerblue: "#6495ed",
                cornsilk: "#fff8dc",
                crimson: "#dc143c",
                cyan: "#00ffff",
                darkblue: "#00008b",
                darkcyan: "#008b8b",
                darkgoldenrod: "#b8860b",
                darkgray: "#a9a9a9",
                darkgreen: "#006400",
                darkgrey: "#a9a9a9",
                darkkhaki: "#bdb76b",
                darkmagenta: "#8b008b",
                darkolivegreen: "#556b2f",
                darkorange: "#ff8c00",
                darkorchid: "#9932cc",
                darkred: "#8b0000",
                darksalmon: "#e9967a",
                darkseagreen: "#8fbc8f",
                darkslateblue: "#483d8b",
                darkslategray: "#2f4f4f",
                darkslategrey: "#2f4f4f",
                darkturquoise: "#00ced1",
                darkviolet: "#9400d3",
                deeppink: "#ff1493",
                deepskyblue: "#00bfff",
                dimgray: "#696969",
                dimgrey: "#696969",
                dodgerblue: "#1e90ff",
                firebrick: "#b22222",
                floralwhite: "#fffaf0",
                forestgreen: "#228b22",
                fuchsia: "#ff00ff",
                gainsboro: "#dcdcdc",
                ghostwhite: "#f8f8ff",
                gold: "#ffd700",
                goldenrod: "#daa520",
                gray: "#808080",
                green: "#008000",
                greenyellow: "#adff2f",
                grey: "#808080",
                honeydew: "#f0fff0",
                hotpink: "#ff69b4",
                indianred: "#cd5c5c",
                indigo: "#4b0082",
                ivory: "#fffff0",
                khaki: "#f0e68c",
                lavender: "#e6e6fa",
                lavenderblush: "#fff0f5",
                lawngreen: "#7cfc00",
                lemonchiffon: "#fffacd",
                lightblue: "#add8e6",
                lightcoral: "#f08080",
                lightcyan: "#e0ffff",
                lightgoldenrodyellow: "#fafad2",
                lightgray: "#d3d3d3",
                lightgreen: "#90ee90",
                lightgrey: "#d3d3d3",
                lightpink: "#ffb6c1",
                lightsalmon: "#ffa07a",
                lightseagreen: "#20b2aa",
                lightskyblue: "#87cefa",
                lightslategray: "#778899",
                lightslategrey: "#778899",
                lightsteelblue: "#b0c4de",
                lightyellow: "#ffffe0",
                lime: "#00ff00",
                limegreen: "#32cd32",
                linen: "#faf0e6",
                magenta: "#ff00ff",
                maroon: "#800000",
                mediumaquamarine: "#66cdaa",
                mediumblue: "#0000cd",
                mediumorchid: "#ba55d3",
                mediumpurple: "#9370db",
                mediumseagreen: "#3cb371",
                mediumslateblue: "#7b68ee",
                mediumspringgreen: "#00fa9a",
                mediumturquoise: "#48d1cc",
                mediumvioletred: "#c71585",
                midnightblue: "#191970",
                mintcream: "#f5fffa",
                mistyrose: "#ffe4e1",
                moccasin: "#ffe4b5",
                navajowhite: "#ffdead",
                navy: "#000080",
                oldlace: "#fdf5e6",
                olive: "#808000",
                olivedrab: "#6b8e23",
                orange: "#ffa500",
                orangered: "#ff4500",
                orchid: "#da70d6",
                palegoldenrod: "#eee8aa",
                palegreen: "#98fb98",
                paleturquoise: "#afeeee",
                palevioletred: "#db7093",
                papayawhip: "#ffefd5",
                peachpuff: "#ffdab9",
                peru: "#cd853f",
                pink: "#ffc0cb",
                plum: "#dda0dd",
                powderblue: "#b0e0e6",
                purple: "#800080",
                red: "#ff0000",
                rosybrown: "#bc8f8f",
                royalblue: "#4169e1",
                saddlebrown: "#8b4513",
                salmon: "#fa8072",
                sandybrown: "#f4a460",
                seagreen: "#2e8b57",
                seashell: "#fff5ee",
                sienna: "#a0522d",
                silver: "#c0c0c0",
                skyblue: "#87ceeb",
                slateblue: "#6a5acd",
                slategray: "#708090",
                slategrey: "#708090",
                snow: "#fffafa",
                springgreen: "#00ff7f",
                steelblue: "#4682b4",
                tan: "#d2b48c",
                teal: "#008080",
                thistle: "#d8bfd8",
                tomato: "#ff6347",
                turquoise: "#40e0d0",
                violet: "#ee82ee",
                wheat: "#f5deb3",
                white: "#ffffff",
                whitesmoke: "#f5f5f5",
                yellow: "#ffff00",
                yellowgreen: "#9acd32"
            }, h = /\s*/, i = /(\d{1,3})/, j = /((?:\d+(?:\.\d+)?)|(?:\.\d+))/, k = new RegExp(j.source + "%"), l = {
                HEX3: /^#([a-f0-9])([a-f0-9])([a-f0-9])$/i,
                HEX6: /^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i,
                RGB: new RegExp(["^rgb\\(", i.source, ",", i.source, ",", i.source, "\\)$"].join(h.source), "i"),
                RGB_PERCENT: new RegExp(["^rgb\\(", k.source, ",", k.source, ",", k.source, "\\)$"].join(h.source), "i"),
                RGBA: new RegExp(["^rgba\\(", i.source, ",", i.source, ",", i.source, ",", j.source, "\\)$"].join(h.source), "i"),
                RGBA_PERCENT: new RegExp(["^rgba\\(", k.source, ",", k.source, ",", k.source, ",", j.source, "\\)$"].join(h.source), "i"),
                HSL: new RegExp(["^hsl\\(", i.source, ",", k.source, ",", k.source, "\\)$"].join(h.source), "i"),
                HSLA: new RegExp(["^hsla\\(", i.source, ",", k.source, ",", k.source, ",", j.source, "\\)$"].join(h.source), "i"),
                HSB: new RegExp(["^hsb\\(", i.source, ",", k.source, ",", k.source, "\\)$"].join(h.source), "i"),
                HSBA: new RegExp(["^hsba\\(", i.source, ",", k.source, ",", k.source, ",", j.source, "\\)$"].join(h.source), "i")
            };
            d.Color._parseInputs = function () {
                var a = arguments.length, b = this._colorMode, c = this._colorMaxes, h = [];
                if (a >= 3) return h[0] = arguments[0] / c[b][0], h[1] = arguments[1] / c[b][1], h[2] = arguments[2] / c[b][2], "number" == typeof arguments[3] ? h[3] = arguments[3] / c[b][3] : h[3] = 1, h = h.map(function (a) {
                    return Math.max(Math.min(a, 1), 0)
                }), b === e.HSL ? f._hslaToRGBA(h) : b === e.HSB ? f._hsbaToRGBA(h) : h;
                if (1 === a && "string" == typeof arguments[0]) {
                    var i = arguments[0].trim().toLowerCase();
                    if (g[i]) return d.Color._parseInputs.apply(this, [g[i]]);
                    if (l.HEX3.test(i)) return h = l.HEX3.exec(i).slice(1).map(function (a) {
                        return parseInt(a + a, 16) / 255
                    }), h[3] = 1, h;
                    if (l.HEX6.test(i)) return h = l.HEX6.exec(i).slice(1).map(function (a) {
                        return parseInt(a, 16) / 255
                    }), h[3] = 1, h;
                    if (l.RGB.test(i)) return h = l.RGB.exec(i).slice(1).map(function (a) {
                        return a / 255
                    }), h[3] = 1, h;
                    if (l.RGB_PERCENT.test(i)) return h = l.RGB_PERCENT.exec(i).slice(1).map(function (a) {
                        return parseFloat(a) / 100
                    }), h[3] = 1, h;
                    if (l.RGBA.test(i)) return h = l.RGBA.exec(i).slice(1).map(function (a, b) {
                        return 3 === b ? parseFloat(a) : a / 255
                    });
                    if (l.RGBA_PERCENT.test(i)) return h = l.RGBA_PERCENT.exec(i).slice(1).map(function (a, b) {
                        return 3 === b ? parseFloat(a) : parseFloat(a) / 100
                    });
                    if (l.HSL.test(i) ? (h = l.HSL.exec(i).slice(1).map(function (a, b) {
                            return 0 === b ? parseInt(a, 10) / 360 : parseInt(a, 10) / 100
                        }), h[3] = 1) : l.HSLA.test(i) && (h = l.HSLA.exec(i).slice(1).map(function (a, b) {
                            return 0 === b ? parseInt(a, 10) / 360 : 3 === b ? parseFloat(a) : parseInt(a, 10) / 100
                        })), h = h.map(function (a) {
                            return Math.max(Math.min(a, 1), 0)
                        }), h.length) return f._hslaToRGBA(h);
                    if (l.HSB.test(i) ? (h = l.HSB.exec(i).slice(1).map(function (a, b) {
                            return 0 === b ? parseInt(a, 10) / 360 : parseInt(a, 10) / 100
                        }), h[3] = 1) : l.HSBA.test(i) && (h = l.HSBA.exec(i).slice(1).map(function (a, b) {
                            return 0 === b ? parseInt(a, 10) / 360 : 3 === b ? parseFloat(a) : parseInt(a, 10) / 100
                        })), h = h.map(function (a) {
                            return Math.max(Math.min(a, 1), 0)
                        }), h.length) return f._hsbaToRGBA(h);
                    h = [1, 1, 1, 1]
                } else {
                    if (1 !== a && 2 !== a || "number" != typeof arguments[0]) throw new Error(arguments + "is not a valid color representation.");
                    h[0] = arguments[0] / c[b][2], h[1] = arguments[0] / c[b][2], h[2] = arguments[0] / c[b][2], "number" == typeof arguments[1] ? h[3] = arguments[1] / c[b][3] : h[3] = 1, h = h.map(function (a) {
                        return Math.max(Math.min(a, 1), 0)
                    })
                }
                return h
            }, b.exports = d.Color
        }, {"../core/constants": 41, "../core/core": 42, "./color_conversion": 34}],
        37: [function (a, b, c) {
            "use strict";
            var d = a("../core/core"), e = a("../core/constants");
            a("./p5.Color"), d.prototype.background = function () {
                return arguments[0] instanceof d.Image ? this.image(arguments[0], 0, 0, this.width, this.height) : this._renderer.background.apply(this._renderer, arguments), this
            }, d.prototype.clear = function () {
                return this._renderer.clear(), this
            }, d.prototype.colorMode = function () {
                if (arguments[0] === e.RGB || arguments[0] === e.HSB || arguments[0] === e.HSL) {
                    this._renderer._colorMode = arguments[0];
                    var a = this._renderer._colorMaxes[this._renderer._colorMode];
                    2 === arguments.length ? (a[0] = arguments[1], a[1] = arguments[1], a[2] = arguments[1], a[3] = arguments[1]) : 4 === arguments.length ? (a[0] = arguments[1], a[1] = arguments[2], a[2] = arguments[3]) : 5 === arguments.length && (a[0] = arguments[1], a[1] = arguments[2], a[2] = arguments[3], a[3] = arguments[4])
                }
                return this
            }, d.prototype.fill = function () {
                return this._renderer._setProperty("_fillSet", !0), this._renderer._setProperty("_doFill", !0), this._renderer.fill.apply(this._renderer, arguments), this
            }, d.prototype.noFill = function () {
                return this._renderer._setProperty("_doFill", !1), this
            }, d.prototype.noStroke = function () {
                return this._renderer._setProperty("_doStroke", !1), this
            }, d.prototype.stroke = function () {
                return this._renderer._setProperty("_strokeSet", !0), this._renderer._setProperty("_doStroke", !0), this._renderer.stroke.apply(this._renderer, arguments), this
            }, b.exports = d
        }, {"../core/constants": 41, "../core/core": 42, "./p5.Color": 36}],
        38: [function (a, b, c) {
            "use strict";
            var d = a("./core"), e = a("./constants"), f = a("./canvas");
            a("./error_helpers"), d.prototype.arc = function (a, b, c, d, f, g, h) {
                for (var i = new Array(arguments.length), j = 0; j < i.length; ++j) i[j] = arguments[j];
                if (!this._renderer._doStroke && !this._renderer._doFill) return this;
                for (this._angleMode === e.DEGREES && (f = this.radians(f), g = this.radians(g)); f < 0;) f += e.TWO_PI;
                for (; g < 0;) g += e.TWO_PI;
                return f %= e.TWO_PI, g %= e.TWO_PI, g === f && (g += e.TWO_PI), f = f <= e.HALF_PI ? Math.atan(c / d * Math.tan(f)) : f > e.HALF_PI && f <= 3 * e.HALF_PI ? Math.atan(c / d * Math.tan(f)) + e.PI : Math.atan(c / d * Math.tan(f)) + e.TWO_PI, g = g <= e.HALF_PI ? Math.atan(c / d * Math.tan(g)) : g > e.HALF_PI && g <= 3 * e.HALF_PI ? Math.atan(c / d * Math.tan(g)) + e.PI : Math.atan(c / d * Math.tan(g)) + e.TWO_PI, f > g && (g += e.TWO_PI), c = Math.abs(c), d = Math.abs(d), this._renderer.arc(a, b, c, d, f, g, h), this
            }, d.prototype.ellipse = function () {
                for (var a = new Array(arguments.length), b = 0; b < a.length; ++b) a[b] = arguments[b];
                if (3 === a.length && a.push(a[2]), a[2] < 0 && (a[2] = Math.abs(a[2])), a[3] < 0 && (a[3] = Math.abs(a[3])), !this._renderer._doStroke && !this._renderer._doFill) return this;
                var c = f.modeAdjust(a[0], a[1], a[2], a[3], this._renderer._ellipseMode);
                return a[0] = c.x, a[1] = c.y, a[2] = c.w, a[3] = c.h, this._renderer.ellipse(a), this
            }, d.prototype.line = function () {
                if (!this._renderer._doStroke) return this;
                for (var a = new Array(arguments.length), b = 0; b < a.length; ++b) a[b] = arguments[b];
                return this._renderer.isP3D ? this._renderer.line(a[0], a[1], a[2], a[3], a[4], a[5]) : this._renderer.line(a[0], a[1], a[2], a[3]), this
            }, d.prototype.point = function () {
                if (!this._renderer._doStroke) return this;
                for (var a = new Array(arguments.length), b = 0; b < a.length; ++b) a[b] = arguments[b];
                return this._renderer.isP3D ? this._renderer.point(a[0], a[1], a[2]) : this._renderer.point(a[0], a[1]), this
            }, d.prototype.quad = function () {
                if (!this._renderer._doStroke && !this._renderer._doFill) return this;
                for (var a = new Array(arguments.length), b = 0; b < a.length; ++b) a[b] = arguments[b];
                return this._renderer.isP3D ? this._renderer.quad(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11]) : this._renderer.quad(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7]), this
            }, d.prototype.rect = function () {
                for (var a = new Array(arguments.length), b = 0; b < a.length; ++b) a[b] = arguments[b];
                if (this._renderer._doStroke || this._renderer._doFill) {
                    var c = f.modeAdjust(a[0], a[1], a[2], a[3], this._renderer._rectMode);
                    return a[0] = c.x, a[1] = c.y, a[2] = c.w, a[3] = c.h, this._renderer.rect(a), this
                }
            }, d.prototype.triangle = function () {
                if (!this._renderer._doStroke && !this._renderer._doFill) return this;
                for (var a = new Array(arguments.length), b = 0; b < a.length; ++b) a[b] = arguments[b];
                return this._renderer.triangle(a), this
            }, b.exports = d
        }, {"./canvas": 40, "./constants": 41, "./core": 42, "./error_helpers": 45}],
        39: [function (a, b, c) {
            "use strict";
            var d = a("./core"), e = a("./constants");
            d.prototype.ellipseMode = function (a) {
                return a !== e.CORNER && a !== e.CORNERS && a !== e.RADIUS && a !== e.CENTER || (this._renderer._ellipseMode = a), this
            }, d.prototype.noSmooth = function () {
                return this._renderer.noSmooth(), this
            }, d.prototype.rectMode = function (a) {
                return a !== e.CORNER && a !== e.CORNERS && a !== e.RADIUS && a !== e.CENTER || (this._renderer._rectMode = a), this
            }, d.prototype.smooth = function () {
                return this._renderer.smooth(), this
            }, d.prototype.strokeCap = function (a) {
                return a !== e.ROUND && a !== e.SQUARE && a !== e.PROJECT || this._renderer.strokeCap(a), this
            }, d.prototype.strokeJoin = function (a) {
                return a !== e.ROUND && a !== e.BEVEL && a !== e.MITER || this._renderer.strokeJoin(a), this
            }, d.prototype.strokeWeight = function (a) {
                return this._renderer.strokeWeight(a), this
            }, b.exports = d
        }, {"./constants": 41, "./core": 42}],
        40: [function (a, b, c) {
            var d = a("./constants");
            b.exports = {
                modeAdjust: function (a, b, c, e, f) {
                    return f === d.CORNER ? {x: a, y: b, w: c, h: e} : f === d.CORNERS ? {
                        x: a,
                        y: b,
                        w: c - a,
                        h: e - b
                    } : f === d.RADIUS ? {x: a - c, y: b - e, w: 2 * c, h: 2 * e} : f === d.CENTER ? {
                        x: a - .5 * c,
                        y: b - .5 * e,
                        w: c,
                        h: e
                    } : void 0
                }, arcModeAdjust: function (a, b, c, e, f) {
                    return f === d.CORNER ? {x: a + .5 * c, y: b + .5 * e, w: c, h: e} : f === d.CORNERS ? {
                        x: a,
                        y: b,
                        w: c + a,
                        h: e + b
                    } : f === d.RADIUS ? {x: a, y: b, w: 2 * c, h: 2 * e} : f === d.CENTER ? {
                        x: a,
                        y: b,
                        w: c,
                        h: e
                    } : void 0
                }
            }
        }, {"./constants": 41}],
        41: [function (a, b, c) {
            var d = Math.PI;
            b.exports = {
                P2D: "p2d",
                WEBGL: "webgl",
                ARROW: "default",
                CROSS: "crosshair",
                HAND: "pointer",
                MOVE: "move",
                TEXT: "text",
                WAIT: "wait",
                HALF_PI: d / 2,
                PI: d,
                QUARTER_PI: d / 4,
                TAU: 2 * d,
                TWO_PI: 2 * d,
                DEGREES: "degrees",
                RADIANS: "radians",
                CORNER: "corner",
                CORNERS: "corners",
                RADIUS: "radius",
                RIGHT: "right",
                LEFT: "left",
                CENTER: "center",
                TOP: "top",
                BOTTOM: "bottom",
                BASELINE: "alphabetic",
                POINTS: 0,
                LINES: 1,
                LINE_STRIP: 3,
                LINE_LOOP: 2,
                TRIANGLES: 4,
                TRIANGLE_FAN: 6,
                TRIANGLE_STRIP: 5,
                QUADS: "quads",
                QUAD_STRIP: "quad_strip",
                CLOSE: "close",
                OPEN: "open",
                CHORD: "chord",
                PIE: "pie",
                PROJECT: "square",
                SQUARE: "butt",
                ROUND: "round",
                BEVEL: "bevel",
                MITER: "miter",
                RGB: "rgb",
                HSB: "hsb",
                HSL: "hsl",
                AUTO: "auto",
                ALT: 18,
                BACKSPACE: 8,
                CONTROL: 17,
                DELETE: 46,
                DOWN_ARROW: 40,
                ENTER: 13,
                ESCAPE: 27,
                LEFT_ARROW: 37,
                OPTION: 18,
                RETURN: 13,
                RIGHT_ARROW: 39,
                SHIFT: 16,
                TAB: 9,
                UP_ARROW: 38,
                BLEND: "source-over",
                ADD: "lighter",
                DARKEST: "darken",
                LIGHTEST: "lighten",
                DIFFERENCE: "difference",
                EXCLUSION: "exclusion",
                MULTIPLY: "multiply",
                SCREEN: "screen",
                REPLACE: "copy",
                OVERLAY: "overlay",
                HARD_LIGHT: "hard-light",
                SOFT_LIGHT: "soft-light",
                DODGE: "color-dodge",
                BURN: "color-burn",
                THRESHOLD: "threshold",
                GRAY: "gray",
                OPAQUE: "opaque",
                INVERT: "invert",
                POSTERIZE: "posterize",
                DILATE: "dilate",
                ERODE: "erode",
                BLUR: "blur",
                NORMAL: "normal",
                ITALIC: "italic",
                BOLD: "bold",
                _DEFAULT_TEXT_FILL: "#000000",
                _DEFAULT_LEADMULT: 1.25,
                _CTX_MIDDLE: "middle",
                LINEAR: "linear",
                QUADRATIC: "quadratic",
                BEZIER: "bezier",
                CURVE: "curve",
                _DEFAULT_STROKE: "#000000",
                _DEFAULT_FILL: "#FFFFFF"
            }
        }, {}],
        42: [function (a, b, c) {
            "use strict";
            a("./shim");
            var d = a("./constants"), e = function (a, b, c) {
                2 === arguments.length && "boolean" == typeof b && (c = b, b = void 0), this._setupDone = !1, this._pixelDensity = Math.ceil(window.devicePixelRatio) || 1, this._userNode = b, this._curElement = null, this._elements = [], this._requestAnimId = 0, this._preloadCount = 0, this._isGlobal = !1, this._loop = !0, this._styles = [], this._defaultCanvasSize = {
                    width: 100,
                    height: 100
                }, this._events = {
                    mousemove: null,
                    mousedown: null,
                    mouseup: null,
                    dragend: null,
                    dragover: null,
                    click: null,
                    mouseover: null,
                    mouseout: null,
                    keydown: null,
                    keyup: null,
                    keypress: null,
                    touchstart: null,
                    touchmove: null,
                    touchend: null,
                    resize: null,
                    blur: null
                }, this._events.wheel = null, this._loadingScreenId = "p5_loading", window.DeviceOrientationEvent && (this._events.deviceorientation = null), window.DeviceMotionEvent && !window._isNodeWebkit && (this._events.devicemotion = null), this._start = function () {
                    this._userNode && "string" == typeof this._userNode && (this._userNode = document.getElementById(this._userNode));
                    var a = this.preload || window.preload;
                    if (a) {
                        var b = document.getElementById(this._loadingScreenId);
                        if (!b) {
                            b = document.createElement("div"), b.innerHTML = "Loading...", b.style.position = "absolute", b.id = this._loadingScreenId;
                            (this._userNode || document.body).appendChild(b)
                        }
                        for (var c in this._preloadMethods) {
                            this._preloadMethods[c] = this._preloadMethods[c] || e;
                            var d = this._preloadMethods[c];
                            d !== e.prototype && d !== e || (d = this._isGlobal ? window : this), this._registeredPreloadMethods[c] = d[c], d[c] = this._wrapPreload(d, c)
                        }
                        a(), this._runIfPreloadsAreDone()
                    } else this._setup(), this._runFrames(), this._draw()
                }.bind(this), this._runIfPreloadsAreDone = function () {
                    var a = this._isGlobal ? window : this;
                    if (0 === a._preloadCount) {
                        var b = document.getElementById(a._loadingScreenId);
                        b && b.parentNode.removeChild(b), a._setup(), a._runFrames(), a._draw()
                    }
                }, this._decrementPreload = function () {
                    var a = this._isGlobal ? window : this;
                    a._setProperty("_preloadCount", a._preloadCount - 1), a._runIfPreloadsAreDone()
                }, this._wrapPreload = function (a, b) {
                    return function () {
                        this._incrementPreload();
                        for (var c = new Array(arguments.length), d = 0; d < c.length; ++d) c[d] = arguments[d];
                        return c.push(this._decrementPreload.bind(this)), this._registeredPreloadMethods[b].apply(a, c)
                    }.bind(this)
                }, this._incrementPreload = function () {
                    var a = this._isGlobal ? window : this;
                    a._setProperty("_preloadCount", a._preloadCount + 1)
                }, this._setup = function () {
                    this.createCanvas(this._defaultCanvasSize.width, this._defaultCanvasSize.height, "p2d", !0);
                    var a = this._isGlobal ? window : this;
                    if ("function" == typeof a.preload) for (var b in this._preloadMethods) a[b] = this._preloadMethods[b][b], a[b] && this && (a[b] = a[b].bind(this));
                    "function" == typeof a.setup && a.setup();
                    for (var c = document.getElementsByTagName("canvas"), d = 0; d < c.length; d++) {
                        var e = c[d];
                        "true" === e.dataset.hidden && (e.style.visibility = "", delete e.dataset.hidden)
                    }
                    this._setupDone = !0
                }.bind(this), this._draw = function () {
                    var a = window.performance.now(), b = a - this._lastFrameTime, c = 1e3 / this._targetFrameRate;
                    (!this._loop || b >= c - 5) && (this._setProperty("frameCount", this.frameCount + 1), this.redraw(), this._updateMouseCoords(), this._frameRate = 1e3 / (a - this._lastFrameTime), this._lastFrameTime = a), this._loop && (this._requestAnimId = window.requestAnimationFrame(this._draw))
                }.bind(this), this._runFrames = function () {
                    this._updateInterval && clearInterval(this._updateInterval)
                }.bind(this), this._setProperty = function (a, b) {
                    this[a] = b, this._isGlobal && (window[a] = b)
                }.bind(this), this.remove = function () {
                    if (this._curElement) {
                        this._loop = !1, this._requestAnimId && window.cancelAnimationFrame(this._requestAnimId);
                        for (var a in this._events) window.removeEventListener(a, this._events[a]);
                        for (var b = 0; b < this._elements.length; b++) {
                            var c = this._elements[b]
                            ;c.elt.parentNode && c.elt.parentNode.removeChild(c.elt);
                            for (var d in c._events) c.elt.removeEventListener(d, c._events[d])
                        }
                        var f = this;
                        if (this._registeredMethods.remove.forEach(function (a) {
                                void 0 !== a && a.call(f)
                            }), this._isGlobal) {
                            for (var g in e.prototype) try {
                                delete window[g]
                            } catch (a) {
                                window[g] = void 0
                            }
                            for (var h in this) if (this.hasOwnProperty(h)) try {
                                delete window[h]
                            } catch (a) {
                                window[h] = void 0
                            }
                        }
                    }
                }.bind(this), this._registeredMethods.init.forEach(function (a) {
                    void 0 !== a && a.call(this)
                }, this);
                var d = this._createFriendlyGlobalFunctionBinder();
                if (a) a(this); else {
                    this._isGlobal = !0, e.instance = this;
                    for (var f in e.prototype) if ("function" == typeof e.prototype[f]) {
                        var g = f.substring(2);
                        this._events.hasOwnProperty(g) || (Math.hasOwnProperty(f) && Math[f] === e.prototype[f] ? d(f, e.prototype[f]) : d(f, e.prototype[f].bind(this)))
                    } else d(f, e.prototype[f]);
                    for (var h in this) this.hasOwnProperty(h) && d(h, this[h])
                }
                for (var i in this._events) {
                    var j = this["_on" + i];
                    if (j) {
                        var k = j.bind(this);
                        window.addEventListener(i, k, {passive: !1}), this._events[i] = k
                    }
                }
                var l = function () {
                    this._setProperty("focused", !0)
                }.bind(this), m = function () {
                    this._setProperty("focused", !1)
                }.bind(this);
                window.addEventListener("focus", l), window.addEventListener("blur", m), this.registerMethod("remove", function () {
                    window.removeEventListener("focus", l), window.removeEventListener("blur", m)
                }), c ? this._start() : "complete" === document.readyState ? this._start() : window.addEventListener("load", this._start.bind(this), !1)
            };
            e.instance = null, e.disableFriendlyErrors = !1;
            for (var f in d) e.prototype[f] = d[f];
            e.prototype._preloadMethods = {
                loadJSON: e.prototype,
                loadImage: e.prototype,
                loadStrings: e.prototype,
                loadXML: e.prototype,
                loadShape: e.prototype,
                loadTable: e.prototype,
                loadFont: e.prototype,
                loadModel: e.prototype
            }, e.prototype._registeredMethods = {
                init: [],
                pre: [],
                post: [],
                remove: []
            }, e.prototype._registeredPreloadMethods = {}, e.prototype.registerPreloadMethod = function (a, b) {
                e.prototype._preloadMethods.hasOwnProperty(a) || (e.prototype._preloadMethods[a] = b)
            }, e.prototype.registerMethod = function (a, b) {
                e.prototype._registeredMethods.hasOwnProperty(a) || (e.prototype._registeredMethods[a] = []), e.prototype._registeredMethods[a].push(b)
            }, e.prototype._createFriendlyGlobalFunctionBinder = function (a) {
                a = a || {};
                var b = a.globalObject || window, c = a.log || console.log.bind(console), d = {print: !0};
                return function (a, f) {
                    if (e.disableFriendlyErrors, 1) b[a] = f; else try {
                        if (a in b && !(a in d)) throw new Error('global "' + a + '" already exists');
                        Object.defineProperty(b, a, {
                            configurable: !0, enumerable: !0, get: function () {
                                return f
                            }, set: function (d) {
                                Object.defineProperty(b, a, {
                                    configurable: !0,
                                    enumerable: !0,
                                    value: d,
                                    writable: !0
                                }), c('You just changed the value of "' + a + "\", which was a p5 function. This could cause problems later if you're not careful.")
                            }
                        })
                    } catch (d) {
                        c('p5 had problems creating the global function "' + a + '", possibly because your code is already using that name as a variable. You may want to rename your variable to something else.'), b[a] = f
                    }
                }
            }, b.exports = e
        }, {"./constants": 41, "./shim": 51}],
        43: [function (a, b, c) {
            "use strict";
            var d = a("./core");
            a("./error_helpers");
            var e = 20, f = 20;
            d.prototype.bezier = function () {
                for (var a = new Array(arguments.length), b = 0; b < a.length; ++b) a[b] = arguments[b];
                return this._renderer._doStroke || this._renderer._doFill ? (this._renderer.isP3D ? (a.push(e), this._renderer.bezier(a)) : this._renderer.bezier(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7]), this) : this
            }, d.prototype.bezierDetail = function (a) {
                return e = a, this
            }, d.prototype.bezierPoint = function (a, b, c, d, e) {
                var f = 1 - e;
                return Math.pow(f, 3) * a + 3 * Math.pow(f, 2) * e * b + 3 * f * Math.pow(e, 2) * c + Math.pow(e, 3) * d
            }, d.prototype.bezierTangent = function (a, b, c, d, e) {
                var f = 1 - e;
                return 3 * d * Math.pow(e, 2) - 3 * c * Math.pow(e, 2) + 6 * c * f * e - 6 * b * f * e + 3 * b * Math.pow(f, 2) - 3 * a * Math.pow(f, 2)
            }, d.prototype.curve = function () {
                for (var a = new Array(arguments.length), b = 0; b < a.length; ++b) a[b] = arguments[b];
                return this._renderer._doStroke ? (this._renderer.isP3D ? (a.push(f), this._renderer.curve(a)) : this._renderer.curve(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7]), this) : this
            }, d.prototype.curveDetail = function (a) {
                return f = a, this
            }, d.prototype.curveTightness = function (a) {
                this._renderer._curveTightness = a
            }, d.prototype.curvePoint = function (a, b, c, d, e) {
                var f = e * e * e, g = e * e;
                return a * (-.5 * f + g - .5 * e) + b * (1.5 * f - 2.5 * g + 1) + c * (-1.5 * f + 2 * g + .5 * e) + d * (.5 * f - .5 * g)
            }, d.prototype.curveTangent = function (a, b, c, d, e) {
                var f = e * e;
                return a * (-3 * f / 2 + 2 * e - .5) + b * (9 * f / 2 - 5 * e) + c * (-9 * f / 2 + 4 * e + .5) + d * (3 * f / 2 - e)
            }, b.exports = d
        }, {"./core": 42, "./error_helpers": 45}],
        44: [function (a, b, c) {
            "use strict";

            function d() {
                return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth || 0
            }

            function e() {
                return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight || 0
            }

            function f(a) {
                if (!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)) throw new Error("Fullscreen not enabled in this browser.");
                a.requestFullscreen ? a.requestFullscreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.webkitRequestFullscreen ? a.webkitRequestFullscreen() : a.msRequestFullscreen && a.msRequestFullscreen()
            }

            function g() {
                document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen()
            }

            var h = a("./core"), i = a("./constants"), j = [i.ARROW, i.CROSS, i.HAND, i.MOVE, i.TEXT, i.WAIT];
            h.prototype._frameRate = 0, h.prototype._lastFrameTime = window.performance.now(), h.prototype._targetFrameRate = 60;
            var k = window.print;
            window.console && console.log ? h.prototype.print = function (a) {
                try {
                    if (0 === arguments.length) k(); else if (arguments.length > 1) console.log.apply(console, arguments); else {
                        var b = JSON.parse(JSON.stringify(a));
                        "{}" === JSON.stringify(b) ? console.log(a) : console.log(b)
                    }
                } catch (b) {
                    console.log(a)
                }
            } : h.prototype.print = function () {
            }, h.prototype.frameCount = 0, h.prototype.focused = document.hasFocus(), h.prototype.cursor = function (a, b, c) {
                var d = "auto", e = this._curElement.elt;
                if (j.indexOf(a) > -1) d = a; else if ("string" == typeof a) {
                    var f = "";
                    b && c && "number" == typeof b && "number" == typeof c && (f = b + " " + c), d = "http://" === a.substring(0, 7) || "https://" === a.substring(0, 8) ? "url(" + a + ") " + f + ", auto" : /\.(cur|jpg|jpeg|gif|png|CUR|JPG|JPEG|GIF|PNG)$/.test(a) ? "url(" + a + ") " + f + ", auto" : a
                }
                e.style.cursor = d
            }, h.prototype.frameRate = function (a) {
                return "number" != typeof a || a <= 0 ? this._frameRate : (this._setProperty("_targetFrameRate", a), this._runFrames(), this)
            }, h.prototype.getFrameRate = function () {
                return this.frameRate()
            }, h.prototype.setFrameRate = function (a) {
                return this.frameRate(a)
            }, h.prototype.noCursor = function () {
                this._curElement.elt.style.cursor = "none"
            }, h.prototype.displayWidth = screen.width, h.prototype.displayHeight = screen.height, h.prototype.windowWidth = d(), h.prototype.windowHeight = e(), h.prototype._onresize = function (a) {
                this._setProperty("windowWidth", d()), this._setProperty("windowHeight", e());
                var b, c = this._isGlobal ? window : this;
                "function" == typeof c.windowResized && (void 0 === (b = c.windowResized(a)) || b || a.preventDefault())
            }, h.prototype.width = 0, h.prototype.height = 0, h.prototype.fullscreen = function (a) {
                if (void 0 === a) return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
                a ? f(document.documentElement) : g()
            }, h.prototype.pixelDensity = function (a) {
                if ("number" != typeof a) return this._pixelDensity;
                this._pixelDensity = a, this.resizeCanvas(this.width, this.height, !0)
            }, h.prototype.displayDensity = function () {
                return window.devicePixelRatio
            }, h.prototype.getURL = function () {
                return location.href
            }, h.prototype.getURLPath = function () {
                return location.pathname.split("/").filter(function (a) {
                    return "" !== a
                })
            }, h.prototype.getURLParams = function () {
                for (var a, b = /[?&]([^&=]+)(?:[&=])([^&=]+)/gim, c = {}; null != (a = b.exec(location.search));) a.index === b.lastIndex && b.lastIndex++, c[a[1]] = a[2];
                return c
            }, b.exports = h
        }, {"./constants": 41, "./core": 42}],
        45: [function (a, b, c) {
            "use strict";

            function d(a, b, c) {
                i && (e(), i = !1), "undefined" === n(c) ? c = "#B40033" : "number" === n(c) && (c = o[c])
            }

            function e() {
                console.log("%c    _ \n /\\| |/\\ \n \\ ` ' /  \n / , . \\  \n \\/|_|\\/ \n\n%c> p5.js says: Welcome! This is your friendly debugger. To turn me off switch to using “p5.min.js”.", "background-color:transparent;color:#ED225D;", "background-color:#ED225D;color:white;")
            }

            function f() {
                var b = {}, c = function (a) {
                    return Object.getOwnPropertyNames(a).filter(function (a) {
                        return "_" !== a[0] && (!(a in b) && (b[a] = !0, !0))
                    }).map(function (b) {
                        var c;
                        return c = "function" == typeof a[b] ? "function" : b === b.toUpperCase() ? "constant" : "variable", {
                            name: b,
                            type: c
                        }
                    })
                };
                q = [].concat(c(h.prototype), c(a("./constants"))), q.sort(function (a, b) {
                    return b.name.length - a.name.length
                })
            }

            function g(a, b) {
                b || (b = console.log.bind(console)), q || f(), q.some(function (c) {
                    if (a.message && null !== a.message.match("\\W?" + c.name + "\\W")) return b("%cDid you just try to use p5.js's " + c.name + ("function" === c.type ? "() " : " ") + c.type + "? If so, you may want to move it into your sketch's setup() function.\n\nFor more details, see: " + r, "color: #B40033"), !0
                })
            }

            for (var h = a("./core"), i = !1, j = {}, k = j.toString, l = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object", "Error"], m = 0; m < l.length; m++) j["[object " + l[m] + "]"] = l[m].toLowerCase();
            var n = function (a) {
                return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[k.call(a)] || "object" : typeof a
            }, o = ["#2D7BB6", "#EE9900", "#4DB200", "#C83C00"], p = {
                0: {fileType: "image", method: "loadImage", message: " hosting the image online,"},
                1: {fileType: "XML file", method: "loadXML"},
                2: {fileType: "table file", method: "loadTable"},
                3: {fileType: "text file", method: "loadStrings"},
                4: {fileType: "font", method: "loadFont", message: " hosting the font online,"}
            };
            h._friendlyFileLoadError = function (a, b) {
                var c = p[a];
                d("It looks like there was a problem loading your " + c.fileType + ". Try checking if the file path%c [" + b + "] %cis correct," + (c.message || "") + " or running a local server.", c.method, 3)
            };
            var q = null,
                r = "https://github.com/processing/p5.js/wiki/Frequently-Asked-Questions#why-cant-i-assign-variables-using-p5-functions-and-variables-before-setup";
            h.prototype._helpForMisusedAtTopLevelCode = g, "complete" !== document.readyState && (window.addEventListener("error", g, !1), window.addEventListener("load", function () {
                window.removeEventListener("error", g, !1)
            })), b.exports = h
        }, {"./constants": 41, "./core": 42}],
        46: [function (a, b, c) {
            function d(a, b, c) {
                var d = b.bind(c);
                c.elt.addEventListener(a, d, !1), c._events[a] = d
            }

            var e = a("./core");
            e.Element = function (a, b) {
                this.elt = a, this._pInst = b, this._events = {}, this.width = this.elt.offsetWidth, this.height = this.elt.offsetHeight
            }, e.Element.prototype.parent = function (a) {
                return 0 === arguments.length ? this.elt.parentNode : ("string" == typeof a ? ("#" === a[0] && (a = a.substring(1)), a = document.getElementById(a)) : a instanceof e.Element && (a = a.elt), a.appendChild(this.elt), this)
            }, e.Element.prototype.id = function (a) {
                return 0 === arguments.length ? this.elt.id : (this.elt.id = a, this.width = this.elt.offsetWidth, this.height = this.elt.offsetHeight, this)
            }, e.Element.prototype.class = function (a) {
                return 0 === arguments.length ? this.elt.className : (this.elt.className = a, this)
            }, e.Element.prototype.mousePressed = function (a) {
                return d("mousedown", a, this), d("touchstart", a, this), this
            }, e.Element.prototype.mouseWheel = function (a) {
                return d("wheel", a, this), this
            }, e.Element.prototype.mouseReleased = function (a) {
                return d("mouseup", a, this), d("touchend", a, this), this
            }, e.Element.prototype.mouseClicked = function (a) {
                return d("click", a, this), this
            }, e.Element.prototype.mouseMoved = function (a) {
                return d("mousemove", a, this), d("touchmove", a, this), this
            }, e.Element.prototype.mouseOver = function (a) {
                return d("mouseover", a, this), this
            }, e.Element.prototype.changed = function (a) {
                return d("change", a, this), this
            }, e.Element.prototype.input = function (a) {
                return d("input", a, this), this
            }, e.Element.prototype.mouseOut = function (a) {
                return d("mouseout", a, this), this
            }, e.Element.prototype.touchStarted = function (a) {
                return d("touchstart", a, this), d("mousedown", a, this), this
            }, e.Element.prototype.touchMoved = function (a) {
                return d("touchmove", a, this), d("mousemove", a, this), this
            }, e.Element.prototype.touchEnded = function (a) {
                return d("touchend", a, this), d("mouseup", a, this), this
            }, e.Element.prototype.dragOver = function (a) {
                return d("dragover", a, this), this
            }, e.Element.prototype.dragLeave = function (a) {
                return d("dragleave", a, this), this
            }, e.Element.prototype.drop = function (a, b) {
                function c(b) {
                    var c = new e.File(b);
                    return function (b) {
                        c.data = b.target.result, a(c)
                    }
                }

                return window.File && window.FileReader && window.FileList && window.Blob ? (d("dragover", function (a) {
                    a.stopPropagation(), a.preventDefault()
                }, this), d("dragleave", function (a) {
                    a.stopPropagation(), a.preventDefault()
                }, this), arguments.length > 1 && d("drop", b, this), d("drop", function (a) {
                    a.stopPropagation(), a.preventDefault();
                    for (var b = a.dataTransfer.files, d = 0; d < b.length; d++) {
                        var e = b[d], f = new FileReader;
                        f.onload = c(e), e.type.indexOf("text") > -1 ? f.readAsText(e) : f.readAsDataURL(e)
                    }
                }, this)) : console.log("The File APIs are not fully supported in this browser."), this
            }, e.Element.prototype._setProperty = function (a, b) {
                this[a] = b
            }, b.exports = e.Element
        }, {"./core": 42}],
        47: [function (a, b, c) {
            var d = a("./core"), e = a("./constants");
            d.Graphics = function (a, b, c, f) {
                var g = c || e.P2D;
                this.canvas = document.createElement("canvas"), (this._userNode || document.body).appendChild(this.canvas), d.Element.call(this, this.canvas, f, !1), this._styles = [], this.width = a, this.height = b, this._pixelDensity = f._pixelDensity, g === e.WEBGL ? this._renderer = new d.RendererGL(this.canvas, this, !1) : this._renderer = new d.Renderer2D(this.canvas, this, !1), this._renderer.resize(a, b), this._renderer._applyDefaults(), f._elements.push(this);
                for (var h in d.prototype) this[h] || ("function" == typeof d.prototype[h] ? this[h] = d.prototype[h].bind(this) : this[h] = d.prototype[h]);
                return this
            }, d.Graphics.prototype = Object.create(d.Element.prototype), d.Graphics.prototype.remove = function () {
                this.elt.parentNode && this.elt.parentNode.removeChild(this.elt);
                for (var a in this._events) this.elt.removeEventListener(a, this._events[a])
            }, b.exports = d.Graphics
        }, {"./constants": 41, "./core": 42}],
        48: [function (a, b, c) {
            function d(a) {
                var b = 0, c = 0;
                if (a.offsetParent) do {
                    b += a.offsetLeft, c += a.offsetTop
                } while (a = a.offsetParent); else b += a.offsetLeft, c += a.offsetTop;
                return [b, c]
            }

            var e = a("./core"), f = a("../core/constants");
            e.Renderer = function (a, b, c) {
                e.Element.call(this, a, b), this.canvas = a, this._pInst = b, c ? (this._isMainCanvas = !0, this._pInst._setProperty("_curElement", this), this._pInst._setProperty("canvas", this.canvas), this._pInst._setProperty("width", this.width), this._pInst._setProperty("height", this.height)) : (this.canvas.style.display = "none", this._styles = []), this._textSize = 12, this._textLeading = 15, this._textFont = "sans-serif", this._textStyle = f.NORMAL, this._textAscent = null, this._textDescent = null, this._rectMode = f.CORNER, this._ellipseMode = f.CENTER, this._curveTightness = 0, this._imageMode = f.CORNER, this._tint = null, this._doStroke = !0, this._doFill = !0, this._strokeSet = !1, this._fillSet = !1, this._colorMode = f.RGB, this._colorMaxes = {
                    rgb: [255, 255, 255, 255],
                    hsb: [360, 100, 100, 1],
                    hsl: [360, 100, 100, 1]
                }
            }, e.Renderer.prototype = Object.create(e.Element.prototype), e.Renderer.prototype.resize = function (a, b) {
                this.width = a, this.height = b, this.elt.width = a * this._pInst._pixelDensity, this.elt.height = b * this._pInst._pixelDensity, this.elt.style.width = a + "px", this.elt.style.height = b + "px", this._isMainCanvas && (this._pInst._setProperty("width", this.width), this._pInst._setProperty("height", this.height))
            }, e.Renderer.prototype.textLeading = function (a) {
                return arguments.length && arguments[0] ? (this._setProperty("_textLeading", a), this) : this._textLeading
            }, e.Renderer.prototype.textSize = function (a) {
                return arguments.length && arguments[0] ? (this._setProperty("_textSize", a), this._setProperty("_textLeading", a * f._DEFAULT_LEADMULT), this._applyTextProperties()) : this._textSize
            }, e.Renderer.prototype.textStyle = function (a) {
                return arguments.length && arguments[0] ? (a !== f.NORMAL && a !== f.ITALIC && a !== f.BOLD || this._setProperty("_textStyle", a), this._applyTextProperties()) : this._textStyle
            }, e.Renderer.prototype.textAscent = function () {
                return null === this._textAscent && this._updateTextMetrics(), this._textAscent
            }, e.Renderer.prototype.textDescent = function () {
                return null === this._textDescent && this._updateTextMetrics(), this._textDescent
            }, e.Renderer.prototype._applyDefaults = function () {
                return this
            }, e.Renderer.prototype._isOpenType = function (a) {
                return "object" == typeof(a = a || this._textFont) && a.font && a.font.supported
            }, e.Renderer.prototype._updateTextMetrics = function () {
                if (this._isOpenType()) return this._setProperty("_textAscent", this._textFont._textAscent()), this._setProperty("_textDescent", this._textFont._textDescent()), this;
                var a = document.createElement("span");
                a.style.fontFamily = this._textFont, a.style.fontSize = this._textSize + "px", a.innerHTML = "ABCjgq|";
                var b = document.createElement("div");
                b.style.display = "inline-block", b.style.width = "1px", b.style.height = "0px";
                var c = document.createElement("div");
                c.appendChild(a), c.appendChild(b), c.style.height = "0px", c.style.overflow = "hidden", document.body.appendChild(c), b.style.verticalAlign = "baseline";
                var e = d(b), f = d(a), g = e[1] - f[1];
                b.style.verticalAlign = "bottom", e = d(b), f = d(a);
                var h = e[1] - f[1], i = h - g;
                return document.body.removeChild(c), this._setProperty("_textAscent", g), this._setProperty("_textDescent", i), this
            }, b.exports = e.Renderer
        }, {"../core/constants": 41, "./core": 42}],
        49: [function (a, b, c) {
            var d = a("./core"), e = a("./canvas"), f = a("./constants"), g = a("../image/filters");
            a("./p5.Renderer");
            var h = "rgba(0,0,0,0)";
            d.Renderer2D = function (a, b, c) {
                return d.Renderer.call(this, a, b, c), this.drawingContext = this.canvas.getContext("2d"), this._pInst._setProperty("drawingContext", this.drawingContext), this
            }, d.Renderer2D.prototype = Object.create(d.Renderer.prototype), d.Renderer2D.prototype._applyDefaults = function () {
                this.drawingContext.fillStyle = f._DEFAULT_FILL, this.drawingContext.strokeStyle = f._DEFAULT_STROKE, this.drawingContext.lineCap = f.ROUND, this.drawingContext.font = "normal 12px sans-serif"
            }, d.Renderer2D.prototype.resize = function (a, b) {
                d.Renderer.prototype.resize.call(this, a, b), this.drawingContext.scale(this._pInst._pixelDensity, this._pInst._pixelDensity)
            }, d.Renderer2D.prototype.background = function () {
                if (this.drawingContext.save(), this.drawingContext.setTransform(1, 0, 0, 1, 0, 0), this.drawingContext.scale(this._pInst._pixelDensity, this._pInst._pixelDensity), arguments[0] instanceof d.Image) this._pInst.image(arguments[0], 0, 0, this.width, this.height); else {
                    var a = this.drawingContext.fillStyle, b = this._pInst.color.apply(this, arguments),
                        c = b.toString();
                    this.drawingContext.fillStyle = c, this.drawingContext.fillRect(0, 0, this.width, this.height), this.drawingContext.fillStyle = a
                }
                this.drawingContext.restore()
            }, d.Renderer2D.prototype.clear = function () {
                this.drawingContext.clearRect(0, 0, this.width, this.height)
            }, d.Renderer2D.prototype.fill = function () {
                var a = this.drawingContext, b = this._pInst.color.apply(this, arguments);
                a.fillStyle = b.toString()
            }, d.Renderer2D.prototype.stroke = function () {
                var a = this.drawingContext, b = this._pInst.color.apply(this, arguments);
                a.strokeStyle = b.toString()
            }, d.Renderer2D.prototype.image = function (a, b, c, e, f, g, h, i, j) {
                var k;
                try {
                    this._tint && (d.MediaElement && a instanceof d.MediaElement && a.loadPixels(), a.canvas && (k = this._getTintedImageCanvas(a))), k || (k = a.canvas || a.elt), this.drawingContext.drawImage(k, b, c, e, f, g, h, i, j)
                } catch (a) {
                    if ("NS_ERROR_NOT_AVAILABLE" !== a.name) throw a
                }
            }, d.Renderer2D.prototype._getTintedImageCanvas = function (a) {
                if (!a.canvas) return a;
                var b = g._toPixels(a.canvas), c = document.createElement("canvas");
                c.width = a.canvas.width, c.height = a.canvas.height;
                for (var d = c.getContext("2d"), e = d.createImageData(a.canvas.width, a.canvas.height), f = e.data, h = 0; h < b.length; h += 4) {
                    var i = b[h], j = b[h + 1], k = b[h + 2], l = b[h + 3];
                    f[h] = i * this._tint[0] / 255, f[h + 1] = j * this._tint[1] / 255, f[h + 2] = k * this._tint[2] / 255, f[h + 3] = l * this._tint[3] / 255
                }
                return d.putImageData(e, 0, 0), c
            }, d.Renderer2D.prototype.blendMode = function (a) {
                this.drawingContext.globalCompositeOperation = a
            }, d.Renderer2D.prototype.blend = function () {
                var a = this.drawingContext.globalCompositeOperation, b = arguments[arguments.length - 1],
                    c = Array.prototype.slice.call(arguments, 0, arguments.length - 1);
                this.drawingContext.globalCompositeOperation = b, this._pInst ? this._pInst.copy.apply(this._pInst, c) : this.copy.apply(this, c), this.drawingContext.globalCompositeOperation = a
            }, d.Renderer2D.prototype.copy = function () {
                var a, b, c, e, f, g, h, i, j;
                if (9 === arguments.length) a = arguments[0], b = arguments[1], c = arguments[2], e = arguments[3], f = arguments[4], g = arguments[5], h = arguments[6], i = arguments[7], j = arguments[8]; else {
                    if (8 !== arguments.length) throw new Error("Signature not supported");
                    a = this._pInst, b = arguments[0], c = arguments[1], e = arguments[2], f = arguments[3], g = arguments[4], h = arguments[5], i = arguments[6], j = arguments[7]
                }
                d.Renderer2D._copyHelper(a, b, c, e, f, g, h, i, j)
            }, d.Renderer2D._copyHelper = function (a, b, c, d, e, f, g, h, i) {
                a.loadPixels();
                var j = a.canvas.width / a.width;
                this.drawingContext.drawImage(a.canvas, j * b, j * c, j * d, j * e, f, g, h, i)
            }, d.Renderer2D.prototype.get = function (a, b, c, e) {
                if (void 0 === a && void 0 === b && void 0 === c && void 0 === e ? (a = 0, b = 0, c = this.width, e = this.height) : void 0 === c && void 0 === e && (c = 1, e = 1), a + c < 0 || b + e < 0 || a > this.width || b > this.height) return [0, 0, 0, 255];
                var f = this._pInst || this;
                f.loadPixels();
                var g = f._pixelDensity;
                a = Math.floor(a), b = Math.floor(b), c = Math.floor(c), e = Math.floor(e);
                var h = a * g, i = b * g;
                if (1 === c && 1 === e) {
                    var j = this.drawingContext.getImageData(h, i, 1, 1).data;
                    return [j[0], j[1], j[2], j[3]]
                }
                var k = Math.min(c, f.width), l = Math.min(e, f.height), m = k * g, n = l * g, o = new d.Image(k, l);
                return o.canvas.getContext("2d").drawImage(this.canvas, h, i, m, n, 0, 0, k, l), o
            }, d.Renderer2D.prototype.loadPixels = function () {
                var a = this._pixelDensity || this._pInst._pixelDensity, b = this.width * a, c = this.height * a,
                    d = this.drawingContext.getImageData(0, 0, b, c);
                this._pInst ? (this._pInst._setProperty("imageData", d), this._pInst._setProperty("pixels", d.data)) : (this._setProperty("imageData", d), this._setProperty("pixels", d.data))
            }, d.Renderer2D.prototype.set = function (a, b, c) {
                if (a = Math.floor(a), b = Math.floor(b), c instanceof d.Image) this.drawingContext.save(), this.drawingContext.setTransform(1, 0, 0, 1, 0, 0), this.drawingContext.scale(this._pInst._pixelDensity, this._pInst._pixelDensity), this.drawingContext.drawImage(c.canvas, a, b), this.loadPixels.call(this._pInst), this.drawingContext.restore(); else {
                    var e = this._pInst || this, f = 0, g = 0, h = 0, i = 0,
                        j = 4 * (b * e._pixelDensity * (this.width * e._pixelDensity) + a * e._pixelDensity);
                    if (e.imageData || e.loadPixels.call(e), "number" == typeof c) j < e.pixels.length && (f = c, g = c, h = c, i = 255); else if (c instanceof Array) {
                        if (c.length < 4) throw new Error("pixel array must be of the form [R, G, B, A]");
                        j < e.pixels.length && (f = c[0], g = c[1], h = c[2], i = c[3])
                    } else c instanceof d.Color && j < e.pixels.length && (f = c.levels[0], g = c.levels[1], h = c.levels[2], i = c.levels[3]);
                    for (var k = 0; k < e._pixelDensity; k++) for (var l = 0; l < e._pixelDensity; l++) j = 4 * ((b * e._pixelDensity + l) * this.width * e._pixelDensity + (a * e._pixelDensity + k)), e.pixels[j] = f, e.pixels[j + 1] = g, e.pixels[j + 2] = h, e.pixels[j + 3] = i
                }
            }, d.Renderer2D.prototype.updatePixels = function (a, b, c, d) {
                var e = this._pixelDensity || this._pInst._pixelDensity;
                void 0 === a && void 0 === b && void 0 === c && void 0 === d && (a = 0, b = 0, c = this.width, d = this.height), c *= e, d *= e, this._pInst ? this.drawingContext.putImageData(this._pInst.imageData, a, b, 0, 0, c, d) : this.drawingContext.putImageData(this.imageData, a, b, 0, 0, c, d)
            }, d.Renderer2D.prototype._acuteArcToBezier = function (a, b) {
                var c = b / 2, d = Math.cos(c), e = Math.sin(c), f = 1 / Math.tan(c), g = a + c, h = Math.cos(g),
                    i = Math.sin(g), j = (4 - d) / 3, k = e + (d - j) * f;
                return {
                    ax: Math.cos(a),
                    ay: Math.sin(a),
                    bx: j * h + k * i,
                    by: j * i - k * h,
                    cx: j * h - k * i,
                    cy: j * i + k * h,
                    dx: Math.cos(a + b),
                    dy: Math.sin(a + b)
                }
            }, d.Renderer2D.prototype.arc = function (a, b, c, d, g, h, i) {
                for (var j = this.drawingContext, k = e.arcModeAdjust(a, b, c, d, this._ellipseMode), l = k.w / 2, m = k.h / 2, n = 1e-5, o = 0, p = []; h - g > n;) o = Math.min(h - g, f.HALF_PI), p.push(this._acuteArcToBezier(g, o)), g += o;
                return this._doFill && (j.beginPath(), p.forEach(function (a, b) {
                    0 === b && j.moveTo(k.x + a.ax * l, k.y + a.ay * m), j.bezierCurveTo(k.x + a.bx * l, k.y + a.by * m, k.x + a.cx * l, k.y + a.cy * m, k.x + a.dx * l, k.y + a.dy * m)
                }), i !== f.PIE && null != i || j.lineTo(k.x, k.y), j.closePath(), j.fill()), this._doStroke && (j.beginPath(), p.forEach(function (a, b) {
                    0 === b && j.moveTo(k.x + a.ax * l, k.y + a.ay * m), j.bezierCurveTo(k.x + a.bx * l, k.y + a.by * m, k.x + a.cx * l, k.y + a.cy * m, k.x + a.dx * l, k.y + a.dy * m)
                }), i === f.PIE ? (j.lineTo(k.x, k.y), j.closePath()) : i === f.CHORD && j.closePath(), j.stroke()), this
            }, d.Renderer2D.prototype.ellipse = function (a) {
                var b = this.drawingContext, c = this._doFill, d = this._doStroke, e = a[0], f = a[1], g = a[2],
                    i = a[3];
                if (c && !d) {
                    if (b.fillStyle === h) return this
                } else if (!c && d && b.strokeStyle === h) return this;
                var j = .5522847498, k = g / 2 * j, l = i / 2 * j, m = e + g, n = f + i, o = e + g / 2, p = f + i / 2;
                b.beginPath(), b.moveTo(e, p), b.bezierCurveTo(e, p - l, o - k, f, o, f), b.bezierCurveTo(o + k, f, m, p - l, m, p), b.bezierCurveTo(m, p + l, o + k, n, o, n), b.bezierCurveTo(o - k, n, e, p + l, e, p), b.closePath(), c && b.fill(), d && b.stroke()
            }, d.Renderer2D.prototype.line = function (a, b, c, d) {
                var e = this.drawingContext;
                return this._doStroke ? e.strokeStyle === h ? this : (e.lineWidth % 2 == 1 && e.translate(.5, .5), e.beginPath(), e.moveTo(a, b), e.lineTo(c, d), e.stroke(), e.lineWidth % 2 == 1 && e.translate(-.5, -.5), this) : this
            }, d.Renderer2D.prototype.point = function (a, b) {
                var c = this.drawingContext, d = c.strokeStyle, e = c.fillStyle;
                return this._doStroke ? c.strokeStyle === h ? this : (a = Math.round(a), b = Math.round(b), c.fillStyle = d, c.lineWidth > 1 ? (c.beginPath(), c.arc(a, b, c.lineWidth / 2, 0, f.TWO_PI, !1), c.fill()) : c.fillRect(a, b, 1, 1), void(c.fillStyle = e)) : this
            }, d.Renderer2D.prototype.quad = function (a, b, c, d, e, f, g, i) {
                var j = this.drawingContext, k = this._doFill, l = this._doStroke;
                if (k && !l) {
                    if (j.fillStyle === h) return this
                } else if (!k && l && j.strokeStyle === h) return this;
                return j.beginPath(), j.moveTo(a, b), j.lineTo(c, d), j.lineTo(e, f), j.lineTo(g, i), j.closePath(), k && j.fill(), l && j.stroke(), this
            }, d.Renderer2D.prototype.rect = function (a) {
                var b = a[0], c = a[1], d = a[2], e = a[3], f = a[4], g = a[5], i = a[6], j = a[7],
                    k = this.drawingContext, l = this._doFill, m = this._doStroke;
                if (l && !m) {
                    if (k.fillStyle === h) return this
                } else if (!l && m && k.strokeStyle === h) return this;
                if (this._doStroke && k.lineWidth % 2 == 1 && k.translate(.5, .5), k.beginPath(), void 0 === f) k.rect(b, c, d, e); else {
                    void 0 === g && (g = f), void 0 === i && (i = g), void 0 === j && (j = i);
                    var n = d / 2, o = e / 2;
                    d < 2 * f && (f = n), e < 2 * f && (f = o), d < 2 * g && (g = n), e < 2 * g && (g = o), d < 2 * i && (i = n), e < 2 * i && (i = o), d < 2 * j && (j = n), e < 2 * j && (j = o), k.beginPath(), k.moveTo(b + f, c), k.arcTo(b + d, c, b + d, c + e, g), k.arcTo(b + d, c + e, b, c + e, i), k.arcTo(b, c + e, b, c, j), k.arcTo(b, c, b + d, c, f), k.closePath()
                }
                return this._doFill && k.fill(), this._doStroke && k.stroke(), this._doStroke && k.lineWidth % 2 == 1 && k.translate(-.5, -.5), this
            }, d.Renderer2D.prototype.triangle = function (a) {
                var b = this.drawingContext, c = this._doFill, d = this._doStroke, e = a[0], f = a[1], g = a[2],
                    i = a[3], j = a[4], k = a[5];
                if (c && !d) {
                    if (b.fillStyle === h) return this
                } else if (!c && d && b.strokeStyle === h) return this;
                b.beginPath(), b.moveTo(e, f), b.lineTo(g, i), b.lineTo(j, k), b.closePath(), c && b.fill(), d && b.stroke()
            }, d.Renderer2D.prototype.endShape = function (a, b, c, d, e, g, h) {
                if (0 === b.length) return this;
                if (!this._doStroke && !this._doFill) return this;
                var i, j = a === f.CLOSE;
                j && !g && b.push(b[0]);
                var k, l, m = b.length;
                if (!c || h !== f.POLYGON && null !== h) if (!d || h !== f.POLYGON && null !== h) if (!e || h !== f.POLYGON && null !== h) if (h === f.POINTS) for (k = 0; k < m; k++) i = b[k], this._doStroke && this._pInst.stroke(i[6]), this._pInst.point(i[0], i[1]); else if (h === f.LINES) for (k = 0; k + 1 < m; k += 2) i = b[k], this._doStroke && this._pInst.stroke(b[k + 1][6]), this._pInst.line(i[0], i[1], b[k + 1][0], b[k + 1][1]); else if (h === f.TRIANGLES) for (k = 0; k + 2 < m; k += 3) i = b[k], this.drawingContext.beginPath(), this.drawingContext.moveTo(i[0], i[1]), this.drawingContext.lineTo(b[k + 1][0], b[k + 1][1]), this.drawingContext.lineTo(b[k + 2][0], b[k + 2][1]), this.drawingContext.lineTo(i[0], i[1]), this._doFill && (this._pInst.fill(b[k + 2][5]), this.drawingContext.fill()), this._doStroke && (this._pInst.stroke(b[k + 2][6]), this.drawingContext.stroke()), this.drawingContext.closePath(); else if (h === f.TRIANGLE_STRIP) for (k = 0; k + 1 < m; k++) i = b[k], this.drawingContext.beginPath(), this.drawingContext.moveTo(b[k + 1][0], b[k + 1][1]), this.drawingContext.lineTo(i[0], i[1]), this._doStroke && this._pInst.stroke(b[k + 1][6]), this._doFill && this._pInst.fill(b[k + 1][5]), k + 2 < m && (this.drawingContext.lineTo(b[k + 2][0], b[k + 2][1]), this._doStroke && this._pInst.stroke(b[k + 2][6]), this._doFill && this._pInst.fill(b[k + 2][5])), this._doFillStrokeClose(); else if (h === f.TRIANGLE_FAN) {
                    if (m > 2) for (this.drawingContext.beginPath(), this.drawingContext.moveTo(b[0][0], b[0][1]), this.drawingContext.lineTo(b[1][0], b[1][1]), this.drawingContext.lineTo(b[2][0], b[2][1]), this._doFill && this._pInst.fill(b[2][5]), this._doStroke && this._pInst.stroke(b[2][6]), this._doFillStrokeClose(), k = 3; k < m; k++) i = b[k], this.drawingContext.beginPath(), this.drawingContext.moveTo(b[0][0], b[0][1]), this.drawingContext.lineTo(b[k - 1][0], b[k - 1][1]), this.drawingContext.lineTo(i[0], i[1]), this._doFill && this._pInst.fill(i[5]), this._doStroke && this._pInst.stroke(i[6]), this._doFillStrokeClose()
                } else if (h === f.QUADS) for (k = 0; k + 3 < m; k += 4) {
                    for (i = b[k], this.drawingContext.beginPath(), this.drawingContext.moveTo(i[0], i[1]), l = 1; l < 4; l++) this.drawingContext.lineTo(b[k + l][0], b[k + l][1]);
                    this.drawingContext.lineTo(i[0], i[1]), this._doFill && this._pInst.fill(b[k + 3][5]), this._doStroke && this._pInst.stroke(b[k + 3][6]), this._doFillStrokeClose()
                } else if (h === f.QUAD_STRIP) {
                    if (m > 3) for (k = 0; k + 1 < m; k += 2) i = b[k], this.drawingContext.beginPath(), k + 3 < m ? (this.drawingContext.moveTo(b[k + 2][0], b[k + 2][1]), this.drawingContext.lineTo(i[0], i[1]), this.drawingContext.lineTo(b[k + 1][0], b[k + 1][1]), this.drawingContext.lineTo(b[k + 3][0], b[k + 3][1]), this._doFill && this._pInst.fill(b[k + 3][5]), this._doStroke && this._pInst.stroke(b[k + 3][6])) : (this.drawingContext.moveTo(i[0], i[1]), this.drawingContext.lineTo(b[k + 1][0], b[k + 1][1])), this._doFillStrokeClose()
                } else {
                    for (this.drawingContext.beginPath(), this.drawingContext.moveTo(b[0][0], b[0][1]), k = 1; k < m; k++) i = b[k], i.isVert && (i.moveTo ? this.drawingContext.moveTo(i[0], i[1]) : this.drawingContext.lineTo(i[0], i[1]));
                    this._doFillStrokeClose()
                } else {
                    for (this.drawingContext.beginPath(), k = 0; k < m; k++) b[k].isVert ? b[k].moveTo ? this.drawingContext.moveTo([0], b[k][1]) : this.drawingContext.lineTo(b[k][0], b[k][1]) : this.drawingContext.quadraticCurveTo(b[k][0], b[k][1], b[k][2], b[k][3]);
                    this._doFillStrokeClose()
                } else {
                    for (this.drawingContext.beginPath(), k = 0; k < m; k++) b[k].isVert ? b[k].moveTo ? this.drawingContext.moveTo(b[k][0], b[k][1]) : this.drawingContext.lineTo(b[k][0], b[k][1]) : this.drawingContext.bezierCurveTo(b[k][0], b[k][1], b[k][2], b[k][3], b[k][4], b[k][5]);
                    this._doFillStrokeClose()
                } else if (m > 3) {
                    var n = [], o = 1 - this._curveTightness;
                    for (this.drawingContext.beginPath(), this.drawingContext.moveTo(b[1][0], b[1][1]), k = 1; k + 2 < m; k++) i = b[k], n[0] = [i[0], i[1]], n[1] = [i[0] + (o * b[k + 1][0] - o * b[k - 1][0]) / 6, i[1] + (o * b[k + 1][1] - o * b[k - 1][1]) / 6], n[2] = [b[k + 1][0] + (o * b[k][0] - o * b[k + 2][0]) / 6, b[k + 1][1] + (o * b[k][1] - o * b[k + 2][1]) / 6], n[3] = [b[k + 1][0], b[k + 1][1]], this.drawingContext.bezierCurveTo(n[1][0], n[1][1], n[2][0], n[2][1], n[3][0], n[3][1]);
                    j && this.drawingContext.lineTo(b[k + 1][0], b[k + 1][1]), this._doFillStrokeClose()
                }
                return c = !1, d = !1, e = !1, g = !1, j && b.pop(), this
            }, d.Renderer2D.prototype.noSmooth = function () {
                return "imageSmoothingEnabled" in this.drawingContext ? this.drawingContext.imageSmoothingEnabled = !1 : "mozImageSmoothingEnabled" in this.drawingContext ? this.drawingContext.mozImageSmoothingEnabled = !1 : "webkitImageSmoothingEnabled" in this.drawingContext ? this.drawingContext.webkitImageSmoothingEnabled = !1 : "msImageSmoothingEnabled" in this.drawingContext && (this.drawingContext.msImageSmoothingEnabled = !1), this
            }, d.Renderer2D.prototype.smooth = function () {
                return "imageSmoothingEnabled" in this.drawingContext ? this.drawingContext.imageSmoothingEnabled = !0 : "mozImageSmoothingEnabled" in this.drawingContext ? this.drawingContext.mozImageSmoothingEnabled = !0 : "webkitImageSmoothingEnabled" in this.drawingContext ? this.drawingContext.webkitImageSmoothingEnabled = !0 : "msImageSmoothingEnabled" in this.drawingContext && (this.drawingContext.msImageSmoothingEnabled = !0), this
            }, d.Renderer2D.prototype.strokeCap = function (a) {
                return a !== f.ROUND && a !== f.SQUARE && a !== f.PROJECT || (this.drawingContext.lineCap = a), this
            }, d.Renderer2D.prototype.strokeJoin = function (a) {
                return a !== f.ROUND && a !== f.BEVEL && a !== f.MITER || (this.drawingContext.lineJoin = a), this
            }, d.Renderer2D.prototype.strokeWeight = function (a) {
                return this.drawingContext.lineWidth = void 0 === a || 0 === a ? 1e-4 : a, this
            },
                d.Renderer2D.prototype._getFill = function () {
                    return this.drawingContext.fillStyle
                }, d.Renderer2D.prototype._getStroke = function () {
                return this.drawingContext.strokeStyle
            }, d.Renderer2D.prototype.bezier = function (a, b, c, d, e, f, g, h) {
                return this._pInst.beginShape(), this._pInst.vertex(a, b), this._pInst.bezierVertex(c, d, e, f, g, h), this._pInst.endShape(), this
            }, d.Renderer2D.prototype.curve = function (a, b, c, d, e, f, g, h) {
                return this._pInst.beginShape(), this._pInst.curveVertex(a, b), this._pInst.curveVertex(c, d), this._pInst.curveVertex(e, f), this._pInst.curveVertex(g, h), this._pInst.endShape(), this
            }, d.Renderer2D.prototype._doFillStrokeClose = function () {
                this._doFill && this.drawingContext.fill(), this._doStroke && this.drawingContext.stroke(), this.drawingContext.closePath()
            }, d.Renderer2D.prototype.applyMatrix = function (a, b, c, d, e, f) {
                this.drawingContext.transform(a, b, c, d, e, f)
            }, d.Renderer2D.prototype.resetMatrix = function () {
                return this.drawingContext.setTransform(1, 0, 0, 1, 0, 0), this.drawingContext.scale(this._pInst._pixelDensity, this._pInst._pixelDensity), this
            }, d.Renderer2D.prototype.rotate = function (a) {
                this.drawingContext.rotate(a)
            }, d.Renderer2D.prototype.scale = function (a, b) {
                return this.drawingContext.scale(a, b), this
            }, d.Renderer2D.prototype.shearX = function (a) {
                return this._pInst._angleMode === f.DEGREES && (a = this._pInst.degrees(a)), this.drawingContext.transform(1, 0, this._pInst.tan(a), 1, 0, 0), this
            }, d.Renderer2D.prototype.shearY = function (a) {
                return this._pInst._angleMode === f.DEGREES && (a = this._pInst.degrees(a)), this.drawingContext.transform(1, this._pInst.tan(a), 0, 1, 0, 0), this
            }, d.Renderer2D.prototype.translate = function (a, b) {
                return this.drawingContext.translate(a, b), this
            }, d.Renderer2D.prototype.text = function (a, b, c, d, e) {
                var g, h, i, j, k, l, m, n, o, p, q = this._pInst, r = Number.MAX_VALUE;
                if (this._doFill || this._doStroke) {
                    if ("string" != typeof a && (a = a.toString()), a = a.replace(/(\t)/g, "  "), g = a.split("\n"), void 0 !== d) {
                        for (o = 0, i = 0; i < g.length; i++) for (k = "", n = g[i].split(" "), h = 0; h < n.length; h++) l = k + n[h] + " ", m = this.textWidth(l), m > d ? (k = n[h] + " ", o += q.textLeading()) : k = l;
                        switch (this._rectMode === f.CENTER && (b -= d / 2, c -= e / 2), this.drawingContext.textAlign) {
                            case f.CENTER:
                                b += d / 2;
                                break;
                            case f.RIGHT:
                                b += d
                        }
                        if (void 0 !== e) {
                            switch (this.drawingContext.textBaseline) {
                                case f.BOTTOM:
                                    c += e - o;
                                    break;
                                case f._CTX_MIDDLE:
                                    c += (e - o) / 2;
                                    break;
                                case f.BASELINE:
                                    p = !0, this.drawingContext.textBaseline = f.TOP
                            }
                            r = c + e - q.textAscent()
                        }
                        for (i = 0; i < g.length; i++) {
                            for (k = "", n = g[i].split(" "), h = 0; h < n.length; h++) l = k + n[h] + " ", m = this.textWidth(l), m > d && k.length > 0 ? (this._renderText(q, k, b, c, r), k = n[h] + " ", c += q.textLeading()) : k = l;
                            this._renderText(q, k, b, c, r), c += q.textLeading()
                        }
                    } else {
                        var s = 0, t = q.textAlign().vertical;
                        for (t === f.CENTER ? s = (g.length - 1) * q.textLeading() / 2 : t === f.BOTTOM && (s = (g.length - 1) * q.textLeading()), j = 0; j < g.length; j++) this._renderText(q, g[j], b, c - s, r), c += q.textLeading()
                    }
                    return p && (this.drawingContext.textBaseline = f.BASELINE), q
                }
            }, d.Renderer2D.prototype._renderText = function (a, b, c, d, e) {
                if (!(d >= e)) return a.push(), this._isOpenType() ? this._textFont._renderPath(b, c, d, {renderer: this}) : (this._doStroke && this._strokeSet && this.drawingContext.strokeText(b, c, d), this._doFill && (this.drawingContext.fillStyle = this._fillSet ? this.drawingContext.fillStyle : f._DEFAULT_TEXT_FILL, this.drawingContext.fillText(b, c, d))), a.pop(), a
            }, d.Renderer2D.prototype.textWidth = function (a) {
                return this._isOpenType() ? this._textFont._textWidth(a, this._textSize) : this.drawingContext.measureText(a).width
            }, d.Renderer2D.prototype.textAlign = function (a, b) {
                if (arguments.length) return a !== f.LEFT && a !== f.RIGHT && a !== f.CENTER || (this.drawingContext.textAlign = a), b !== f.TOP && b !== f.BOTTOM && b !== f.CENTER && b !== f.BASELINE || (b === f.CENTER ? this.drawingContext.textBaseline = f._CTX_MIDDLE : this.drawingContext.textBaseline = b), this._pInst;
                var c = this.drawingContext.textBaseline;
                return c === f._CTX_MIDDLE && (c = f.CENTER), {horizontal: this.drawingContext.textAlign, vertical: c}
            }, d.Renderer2D.prototype._applyTextProperties = function () {
                var a, b = this._pInst;
                return this._setProperty("_textAscent", null), this._setProperty("_textDescent", null), a = this._textFont, this._isOpenType() && (a = this._textFont.font.familyName, this._setProperty("_textStyle", this._textFont.font.styleName)), this.drawingContext.font = this._textStyle + " " + this._textSize + "px " + a, b
            }, d.Renderer2D.prototype.push = function () {
                this.drawingContext.save()
            }, d.Renderer2D.prototype.pop = function () {
                this.drawingContext.restore()
            }, b.exports = d.Renderer2D
        }, {"../image/filters": 59, "./canvas": 40, "./constants": 41, "./core": 42, "./p5.Renderer": 48}],
        50: [function (a, b, c) {
            var d = a("./core"), e = a("./constants");
            a("./p5.Graphics"), a("./p5.Renderer2D"), a("../webgl/p5.RendererGL");
            var f = "defaultCanvas0";
            d.prototype.createCanvas = function (a, b, c) {
                var g, h, i = c || e.P2D;
                if (arguments[3] && (g = "boolean" == typeof arguments[3] && arguments[3]), i === e.WEBGL) h = document.getElementById(f), h && h.parentNode.removeChild(h), h = document.createElement("canvas"), h.id = f; else if (g) {
                    h = document.createElement("canvas");
                    for (var j = 0; document.getElementById("defaultCanvas" + j);) j++;
                    f = "defaultCanvas" + j, h.id = f
                } else h = this.canvas;
                return this._setupDone || (h.dataset.hidden = !0, h.style.visibility = "hidden"), this._userNode ? this._userNode.appendChild(h) : document.body.appendChild(h), i === e.WEBGL ? (this._setProperty("_renderer", new d.RendererGL(h, this, !0)), this._isdefaultGraphics = !0) : this._isdefaultGraphics || (this._setProperty("_renderer", new d.Renderer2D(h, this, !0)), this._isdefaultGraphics = !0), this._renderer.resize(a, b), this._renderer._applyDefaults(), g && this._elements.push(this._renderer), this._renderer
            }, d.prototype.resizeCanvas = function (a, b, c) {
                if (this._renderer) {
                    var d = {};
                    for (var e in this.drawingContext) {
                        var f = this.drawingContext[e];
                        "object" != typeof f && "function" != typeof f && (d[e] = f)
                    }
                    this._renderer.resize(a, b);
                    for (var g in d) this.drawingContext[g] = d[g];
                    c || this.redraw()
                }
            }, d.prototype.noCanvas = function () {
                this.canvas && this.canvas.parentNode.removeChild(this.canvas)
            }, d.prototype.createGraphics = function (a, b, c) {
                return new d.Graphics(a, b, c, this)
            }, d.prototype.blendMode = function (a) {
                if (a !== e.BLEND && a !== e.DARKEST && a !== e.LIGHTEST && a !== e.DIFFERENCE && a !== e.MULTIPLY && a !== e.EXCLUSION && a !== e.SCREEN && a !== e.REPLACE && a !== e.OVERLAY && a !== e.HARD_LIGHT && a !== e.SOFT_LIGHT && a !== e.DODGE && a !== e.BURN && a !== e.ADD && a !== e.NORMAL) throw new Error("Mode " + a + " not recognized.");
                this._renderer.blendMode(a)
            }, b.exports = d
        }, {"../webgl/p5.RendererGL": 91, "./constants": 41, "./core": 42, "./p5.Graphics": 47, "./p5.Renderer2D": 49}],
        51: [function (a, b, c) {
            window.requestAnimationFrame = function () {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a, b) {
                    window.setTimeout(a, 1e3 / 60)
                }
            }(), window.performance = window.performance || {}, window.performance.now = function () {
                var a = Date.now();
                return window.performance.now || window.performance.mozNow || window.performance.msNow || window.performance.oNow || window.performance.webkitNow || function () {
                    return Date.now() - a
                }
            }(), function () {
                "use strict";
                "undefined" == typeof Uint8ClampedArray || Uint8ClampedArray.prototype.slice || Object.defineProperty(Uint8ClampedArray.prototype, "slice", {
                    value: Array.prototype.slice,
                    writable: !0,
                    configurable: !0,
                    enumerable: !1
                })
            }()
        }, {}],
        52: [function (a, b, c) {
            "use strict";
            var d = a("./core");
            d.prototype.exit = function () {
                throw"exit() not implemented, see remove()"
            }, d.prototype.noLoop = function () {
                this._loop = !1
            }, d.prototype.loop = function () {
                this._loop = !0, this._draw()
            }, d.prototype.push = function () {
                this._renderer.push(), this._styles.push({
                    _doStroke: this._renderer._doStroke,
                    _strokeSet: this._renderer._strokeSet,
                    _doFill: this._renderer._doFill,
                    _fillSet: this._renderer._fillSet,
                    _tint: this._renderer._tint,
                    _imageMode: this._renderer._imageMode,
                    _rectMode: this._renderer._rectMode,
                    _ellipseMode: this._renderer._ellipseMode,
                    _colorMode: this._renderer._colorMode,
                    _textFont: this._renderer._textFont,
                    _textLeading: this._renderer._textLeading,
                    _textSize: this._renderer._textSize,
                    _textStyle: this._renderer._textStyle
                })
            }, d.prototype.pop = function () {
                this._renderer.pop();
                var a = this._styles.pop();
                for (var b in a) this._renderer[b] = a[b]
            }, d.prototype.pushStyle = function () {
                throw new Error("pushStyle() not used, see push()")
            }, d.prototype.popStyle = function () {
                throw new Error("popStyle() not used, see pop()")
            }, d.prototype.redraw = function () {
                this.resetMatrix(), this._renderer.isP3D && this._renderer._update();
                var a = 1;
                if (1 === arguments.length) try {
                    parseInt(arguments[0]) > 1 && (a = parseInt(arguments[0]))
                } catch (a) {
                }
                var b = this.setup || window.setup, c = this.draw || window.draw;
                if ("function" == typeof c) {
                    void 0 === b && this.scale(this._pixelDensity, this._pixelDensity);
                    for (var d = this, e = function (a) {
                        a.call(d)
                    }, f = 0; f < a; f++) this._registeredMethods.pre.forEach(e), c(), this._registeredMethods.post.forEach(e)
                }
            }, d.prototype.size = function () {
                var a = "size() is not a valid p5 function, to set the size of the ";
                throw a += "drawing canvas, please use createCanvas() instead"
            }, b.exports = d
        }, {"./core": 42}],
        53: [function (a, b, c) {
            "use strict";
            var d = a("./core"), e = a("./constants");
            d.prototype.applyMatrix = function (a, b, c, d, e, f) {
                return this._renderer.applyMatrix(a, b, c, d, e, f), this
            }, d.prototype.popMatrix = function () {
                throw new Error("popMatrix() not used, see pop()")
            }, d.prototype.printMatrix = function () {
                throw new Error("printMatrix() not implemented")
            }, d.prototype.pushMatrix = function () {
                throw new Error("pushMatrix() not used, see push()")
            }, d.prototype.resetMatrix = function () {
                return this._renderer.resetMatrix(), this
            }, d.prototype.rotate = function () {
                for (var a, b = new Array(arguments.length), c = 0; c < b.length; ++c) b[c] = arguments[c];
                return this._angleMode === e.DEGREES ? a = this.radians(b[0]) : this._angleMode === e.RADIANS && (a = b[0]), b.length > 1 ? this._renderer.rotate(a, b[1]) : this._renderer.rotate(a), this
            }, d.prototype.rotateX = function (a) {
                if (!this._renderer.isP3D) throw"not supported in p2d. Please use webgl mode";
                return this._renderer.rotateX(a), this
            }, d.prototype.rotateY = function (a) {
                if (!this._renderer.isP3D) throw"not supported in p2d. Please use webgl mode";
                return this._renderer.rotateY(a), this
            }, d.prototype.rotateZ = function (a) {
                if (!this._renderer.isP3D) throw"not supported in p2d. Please use webgl mode";
                return this._renderer.rotateZ(a), this
            }, d.prototype.scale = function () {
                for (var a, b, c, e = new Array(arguments.length), f = 0; f < e.length; f++) e[f] = arguments[f];
                return e[0] instanceof d.Vector ? (a = e[0].x, b = e[0].y, c = e[0].z) : e[0] instanceof Array ? (a = e[0][0], b = e[0][1], c = e[0][2] || 1) : 1 === e.length ? a = b = c = e[0] : (a = e[0], b = e[1], c = e[2] || 1), this._renderer.isP3D ? this._renderer.scale.call(this._renderer, a, b, c) : this._renderer.scale.call(this._renderer, a, b), this
            }, d.prototype.shearX = function (a) {
                return this._angleMode === e.DEGREES && (a = this.radians(a)), this._renderer.shearX(a), this
            }, d.prototype.shearY = function (a) {
                return this._angleMode === e.DEGREES && (a = this.radians(a)), this._renderer.shearY(a), this
            }, d.prototype.translate = function (a, b, c) {
                return this._renderer.isP3D ? this._renderer.translate(a, b, c) : this._renderer.translate(a, b), this
            }, b.exports = d
        }, {"./constants": 41, "./core": 42}],
        54: [function (a, b, c) {
            "use strict";
            var d = a("./core"), e = a("./constants"), f = null, g = [], h = [], i = !1, j = !1, k = !1, l = !1, m = !0;
            d.prototype.beginContour = function () {
                return h = [], l = !0, this
            }, d.prototype.beginShape = function (a) {
                return f = a === e.POINTS || a === e.LINES || a === e.TRIANGLES || a === e.TRIANGLE_FAN || a === e.TRIANGLE_STRIP || a === e.QUADS || a === e.QUAD_STRIP ? a : null, this._renderer.isP3D ? this._renderer.beginShape(a) : (g = [], h = []), this
            }, d.prototype.bezierVertex = function (a, b, c, d, e, f) {
                if (0 === g.length) throw"vertex() must be used once before calling bezierVertex()";
                i = !0;
                for (var j = [], k = 0; k < arguments.length; k++) j[k] = arguments[k];
                return j.isVert = !1, l ? h.push(j) : g.push(j), this
            }, d.prototype.curveVertex = function (a, b) {
                return j = !0, this.vertex(a, b), this
            }, d.prototype.endContour = function () {
                var a = h[0].slice();
                a.isVert = h[0].isVert, a.moveTo = !1, h.push(a), m && (g.push(g[0]), m = !1);
                for (var b = 0; b < h.length; b++) g.push(h[b]);
                return this
            }, d.prototype.endShape = function (a) {
                if (this._renderer.isP3D) this._renderer.endShape(a, j, i, k, l, f); else {
                    if (0 === g.length) return this;
                    if (!this._renderer._doStroke && !this._renderer._doFill) return this;
                    var b = a === e.CLOSE;
                    b && !l && g.push(g[0]), this._renderer.endShape(a, g, j, i, k, l, f), j = !1, i = !1, k = !1, l = !1, m = !0, b && g.pop()
                }
                return this
            }, d.prototype.quadraticVertex = function (a, b, c, d) {
                if (this._contourInited) {
                    var f = {};
                    return f.x = a, f.y = b, f.x3 = c, f.y3 = d, f.type = e.QUADRATIC, this._contourVertices.push(f), this
                }
                if (!(g.length > 0)) throw"vertex() must be used once before calling quadraticVertex()";
                k = !0;
                for (var i = [], j = 0; j < arguments.length; j++) i[j] = arguments[j];
                return i.isVert = !1, l ? h.push(i) : g.push(i), this
            }, d.prototype.vertex = function (a, b, c) {
                if (this._renderer.isP3D) this._renderer.vertex(a, b, c); else {
                    var d = [];
                    d.isVert = !0, d[0] = a, d[1] = b, d[2] = 0, d[3] = 0, d[4] = 0, d[5] = this._renderer._getFill(), d[6] = this._renderer._getStroke(), c && (d.moveTo = c), l ? (0 === h.length && (d.moveTo = !0), h.push(d)) : g.push(d)
                }
                return this
            }, b.exports = d
        }, {"./constants": 41, "./core": 42}],
        55: [function (a, b, c) {
            "use strict";
            var d = a("../core/core");
            d.prototype.deviceOrientation = void 0, d.prototype.accelerationX = 0, d.prototype.accelerationY = 0, d.prototype.accelerationZ = 0, d.prototype.pAccelerationX = 0, d.prototype.pAccelerationY = 0, d.prototype.pAccelerationZ = 0, d.prototype._updatePAccelerations = function () {
                this._setProperty("pAccelerationX", this.accelerationX), this._setProperty("pAccelerationY", this.accelerationY), this._setProperty("pAccelerationZ", this.accelerationZ)
            }, d.prototype.rotationX = 0, d.prototype.rotationY = 0, d.prototype.rotationZ = 0, d.prototype.pRotationX = 0, d.prototype.pRotationY = 0, d.prototype.pRotationZ = 0;
            var e, f, g, h = 0, i = 0, j = 0, k = "clockwise", l = "clockwise", m = "clockwise";
            d.prototype._updatePRotations = function () {
                this._setProperty("pRotationX", this.rotationX), this._setProperty("pRotationY", this.rotationY), this._setProperty("pRotationZ", this.rotationZ)
            }, d.prototype.turnAxis = void 0;
            var n = .5, o = 30;
            d.prototype.setMoveThreshold = function (a) {
                "number" == typeof a && (n = a)
            }, d.prototype.setShakeThreshold = function (a) {
                "number" == typeof a && (o = a)
            }, d.prototype._ondeviceorientation = function (a) {
                this._updatePRotations(), this._setProperty("rotationX", a.beta), this._setProperty("rotationY", a.gamma), this._setProperty("rotationZ", a.alpha), this._handleMotion()
            }, d.prototype._ondevicemotion = function (a) {
                this._updatePAccelerations(), this._setProperty("accelerationX", 2 * a.acceleration.x), this._setProperty("accelerationY", 2 * a.acceleration.y), this._setProperty("accelerationZ", 2 * a.acceleration.z), this._handleMotion()
            }, d.prototype._handleMotion = function () {
                90 === window.orientation || window.orientation === -90 ? this._setProperty("deviceOrientation", "landscape") : 0 === window.orientation ? this._setProperty("deviceOrientation", "portrait") : void 0 === window.orientation && this._setProperty("deviceOrientation", "undefined");
                var a = this.deviceMoved || window.deviceMoved;
                "function" == typeof a && (Math.abs(this.accelerationX - this.pAccelerationX) > n || Math.abs(this.accelerationY - this.pAccelerationY) > n || Math.abs(this.accelerationZ - this.pAccelerationZ) > n) && a();
                var b = this.deviceTurned || window.deviceTurned;
                if ("function" == typeof b) {
                    var c = this.rotationX + 180, d = this.pRotationX + 180, p = h + 180;
                    c - d > 0 && c - d < 270 || c - d < -270 ? k = "clockwise" : (c - d < 0 || c - d > 270) && (k = "counter-clockwise"), k !== e && (p = c), Math.abs(c - p) > 90 && Math.abs(c - p) < 270 && (p = c, this._setProperty("turnAxis", "X"), b()), e = k, h = p - 180;
                    var q = this.rotationY + 180, r = this.pRotationY + 180, s = i + 180;
                    q - r > 0 && q - r < 270 || q - r < -270 ? l = "clockwise" : (q - r < 0 || q - this.pRotationY > 270) && (l = "counter-clockwise"), l !== f && (s = q), Math.abs(q - s) > 90 && Math.abs(q - s) < 270 && (s = q, this._setProperty("turnAxis", "Y"), b()), f = l, i = s - 180, this.rotationZ - this.pRotationZ > 0 && this.rotationZ - this.pRotationZ < 270 || this.rotationZ - this.pRotationZ < -270 ? m = "clockwise" : (this.rotationZ - this.pRotationZ < 0 || this.rotationZ - this.pRotationZ > 270) && (m = "counter-clockwise"), m !== g && (j = this.rotationZ), Math.abs(this.rotationZ - j) > 90 && Math.abs(this.rotationZ - j) < 270 && (j = this.rotationZ, this._setProperty("turnAxis", "Z"), b()), g = m, this._setProperty("turnAxis", void 0)
                }
                var t = this.deviceShaken || window.deviceShaken;
                if ("function" == typeof t) {
                    var u, v;
                    null !== this.pAccelerationX && (u = Math.abs(this.accelerationX - this.pAccelerationX), v = Math.abs(this.accelerationY - this.pAccelerationY)), u + v > o && t()
                }
            }, b.exports = d
        }, {"../core/core": 42}],
        56: [function (a, b, c) {
            "use strict";

            function d() {
                for (var a in f) if (f.hasOwnProperty(a) && f[a] === !0) return !0;
                return !1
            }

            var e = a("../core/core"), f = {};
            e.prototype.isKeyPressed = !1, e.prototype.keyIsPressed = !1, e.prototype.key = "", e.prototype.keyCode = 0, e.prototype._onkeydown = function (a) {
                if (!f[a.which]) {
                    this._setProperty("isKeyPressed", !0), this._setProperty("keyIsPressed", !0), this._setProperty("keyCode", a.which), f[a.which] = !0;
                    var b = String.fromCharCode(a.which);
                    b || (b = a.which), this._setProperty("key", b);
                    var c = this.keyPressed || window.keyPressed;
                    if ("function" == typeof c && !a.charCode) {
                        c(a) === !1 && a.preventDefault()
                    }
                }
            }, e.prototype._onkeyup = function (a) {
                var b = this.keyReleased || window.keyReleased;
                f[a.which] = !1, d() || (this._setProperty("isKeyPressed", !1), this._setProperty("keyIsPressed", !1)), this._setProperty("_lastKeyCodeTyped", null);
                var c = String.fromCharCode(a.which);
                if (c || (c = a.which), this._setProperty("key", c), this._setProperty("keyCode", a.which), "function" == typeof b) {
                    b(a) === !1 && a.preventDefault()
                }
            }, e.prototype._onkeypress = function (a) {
                if (a.which !== this._lastKeyCodeTyped) {
                    this._setProperty("keyCode", a.which), this._setProperty("_lastKeyCodeTyped", a.which), this._setProperty("key", String.fromCharCode(a.which));
                    var b = this.keyTyped || window.keyTyped;
                    if ("function" == typeof b) {
                        b(a) === !1 && a.preventDefault()
                    }
                }
            }, e.prototype._onblur = function (a) {
                f = {}
            }, e.prototype.keyIsDown = function (a) {
                return f[a]
            }, b.exports = e
        }, {"../core/core": 42}],
        57: [function (a, b, c) {
            "use strict";

            function d(a, b, c, d) {
                d && !d.clientX && (d.touches ? d = d.touches[0] : d.changedTouches && (d = d.changedTouches[0]));
                var e = a.getBoundingClientRect(), f = a.scrollWidth / b, g = a.scrollHeight / c;
                return {
                    x: (d.clientX - e.left) / f,
                    y: (d.clientY - e.top) / g,
                    winX: d.clientX,
                    winY: d.clientY,
                    id: d.identifier
                }
            }

            var e = a("../core/core"), f = a("../core/constants");
            e.prototype._hasMouseInteracted = !1, e.prototype.mouseX = 0, e.prototype.mouseY = 0, e.prototype.pmouseX = 0, e.prototype.pmouseY = 0, e.prototype.winMouseX = 0, e.prototype.winMouseY = 0, e.prototype.pwinMouseX = 0, e.prototype.pwinMouseY = 0, e.prototype.mouseButton = 0, e.prototype.mouseIsPressed = !1, e.prototype._updateNextMouseCoords = function (a) {
                if (null !== this._curElement && (!a.touches || a.touches.length > 0)) {
                    var b = d(this._curElement.elt, this.width, this.height, a);
                    this._setProperty("mouseX", b.x), this._setProperty("mouseY", b.y), this._setProperty("winMouseX", b.winX), this._setProperty("winMouseY", b.winY)
                }
                this._hasMouseInteracted || (this._updateMouseCoords(), this._setProperty("_hasMouseInteracted", !0))
            }, e.prototype._updateMouseCoords = function () {
                this._setProperty("pmouseX", this.mouseX), this._setProperty("pmouseY", this.mouseY), this._setProperty("pwinMouseX", this.winMouseX), this._setProperty("pwinMouseY", this.winMouseY)
            }, e.prototype._setMouseButton = function (a) {
                1 === a.button ? this._setProperty("mouseButton", f.CENTER) : 2 === a.button ? this._setProperty("mouseButton", f.RIGHT) : this._setProperty("mouseButton", f.LEFT)
            }, e.prototype._onmousemove = function (a) {
                var b = this._isGlobal ? window : this;
                this._updateNextMouseCoords(a), this.mouseIsPressed ? "function" == typeof b.mouseDragged ? b.mouseDragged(a) === !1 && a.preventDefault() : "function" == typeof b.touchMoved && b.touchMoved(a) === !1 && a.preventDefault() : "function" == typeof b.mouseMoved && b.mouseMoved(a) === !1 && a.preventDefault()
            }, e.prototype._onmousedown = function (a) {
                var b = this._isGlobal ? window : this;
                this._setProperty("mouseIsPressed", !0), this._setMouseButton(a), this._updateNextMouseCoords(a), "function" == typeof b.mousePressed ? b.mousePressed(a) === !1 && a.preventDefault() : "function" == typeof b.touchStarted && b.touchStarted(a) === !1 && a.preventDefault()
            }, e.prototype._onmouseup = function (a) {
                var b = this._isGlobal ? window : this;
                this._setProperty("mouseIsPressed", !1), "function" == typeof b.mouseReleased ? b.mouseReleased(a) === !1 && a.preventDefault() : "function" == typeof b.touchEnded && b.touchEnded(a) === !1 && a.preventDefault()
            }, e.prototype._ondragend = e.prototype._onmouseup, e.prototype._ondragover = e.prototype._onmousemove, e.prototype._onclick = function (a) {
                var b = this._isGlobal ? window : this;
                if ("function" == typeof b.mouseClicked) {
                    b.mouseClicked(a) === !1 && a.preventDefault()
                }
            }, e.prototype._onwheel = function (a) {
                var b = this._isGlobal ? window : this;
                if ("function" == typeof b.mouseWheel) {
                    a.delta = a.deltaY;
                    b.mouseWheel(a) === !1 && a.preventDefault()
                }
            }, b.exports = e
        }, {"../core/constants": 41, "../core/core": 42}],
        58: [function (a, b, c) {
            "use strict";

            function d(a, b, c, d, e) {
                e = e || 0;
                var f = a.getBoundingClientRect(), g = a.scrollWidth / b, h = a.scrollHeight / c,
                    i = d.touches[e] || d.changedTouches[e];
                return {
                    x: (i.clientX - f.left) / g,
                    y: (i.clientY - f.top) / h,
                    winX: i.clientX,
                    winY: i.clientY,
                    id: i.identifier
                }
            }

            var e = a("../core/core");
            e.prototype.touches = [], e.prototype._updateTouchCoords = function (a) {
                if (null !== this._curElement) {
                    for (var b = [], c = 0; c < a.touches.length; c++) b[c] = d(this._curElement.elt, this.width, this.height, a, c);
                    this._setProperty("touches", b)
                }
            }, e.prototype._ontouchstart = function (a) {
                var b = this._isGlobal ? window : this;
                this._setProperty("mouseIsPressed", !0), this._updateTouchCoords(a), this._updateNextMouseCoords(a), "function" == typeof b.touchStarted ? b.touchStarted(a) === !1 && a.preventDefault() : "function" == typeof b.mousePressed && b.mousePressed(a) === !1 && a.preventDefault()
            }, e.prototype._ontouchmove = function (a) {
                var b = this._isGlobal ? window : this;
                this._updateTouchCoords(a), this._updateNextMouseCoords(a), "function" == typeof b.touchMoved ? b.touchMoved(a) === !1 && a.preventDefault() : "function" == typeof b.mouseDragged && b.mouseDragged(a) === !1 && a.preventDefault()
            }, e.prototype._ontouchend = function (a) {
                this._setProperty("mouseIsPressed", !1), this._updateTouchCoords(a), this._updateNextMouseCoords(a);
                var b = this._isGlobal ? window : this;
                "function" == typeof b.touchEnded ? b.touchEnded(a) === !1 && a.preventDefault() : "function" == typeof b.mouseReleased && b.mouseReleased(a) === !1 && a.preventDefault()
            }, b.exports = e
        }, {"../core/core": 42}],
        59: [function (a, b, c) {
            "use strict";

            function d(a) {
                var b = 3.5 * a | 0;
                if (b = b < 1 ? 1 : b < 248 ? b : 248, g !== b) {
                    g = b, h = 1 + g << 1, i = new Int32Array(h), j = new Array(h);
                    for (var c = 0; c < h; c++) j[c] = new Int32Array(256);
                    for (var d, e, f, k, l = 1, m = b - 1; l < b; l++) {
                        i[b + l] = i[m] = e = m * m, f = j[b + l], k = j[m--];
                        for (var n = 0; n < 256; n++) f[n] = k[n] = e * n
                    }
                    d = i[b] = b * b, f = j[b];
                    for (var o = 0; o < 256; o++) f[o] = d * o
                }
            }

            function e(a, b) {
                for (var c = f._toPixels(a), e = a.width, k = a.height, l = e * k, m = new Int32Array(l), n = 0; n < l; n++) m[n] = f._getARGB(c, n);
                var o, p, q, r, s, t, u, v, w, x, y = new Int32Array(l), z = new Int32Array(l), A = new Int32Array(l),
                    B = new Int32Array(l), C = 0;
                d(b);
                var D, E, F, G;
                for (E = 0; E < k; E++) {
                    for (D = 0; D < e; D++) {
                        if (r = q = p = s = o = 0, (t = D - g) < 0) x = -t, t = 0; else {
                            if (t >= e) break;
                            x = 0
                        }
                        for (F = x; F < h && !(t >= e); F++) {
                            var H = m[t + C];
                            G = j[F], s += G[(H & -16777216) >>> 24], p += G[(16711680 & H) >> 16], q += G[(65280 & H) >> 8], r += G[255 & H], o += i[F], t++
                        }
                        u = C + D, y[u] = s / o, z[u] = p / o, A[u] = q / o, B[u] = r / o
                    }
                    C += e
                }
                for (C = 0, v = -g, w = v * e, E = 0; E < k; E++) {
                    for (D = 0; D < e; D++) {
                        if (r = q = p = s = o = 0, v < 0) x = u = -v, t = D; else {
                            if (v >= k) break;
                            x = 0, u = v, t = D + w
                        }
                        for (F = x; F < h && !(u >= k); F++) G = j[F], s += G[y[t]], p += G[z[t]], q += G[A[t]], r += G[B[t]], o += i[F], u++, t += e;
                        m[D + C] = s / o << 24 | p / o << 16 | q / o << 8 | r / o
                    }
                    C += e, w += e, v++
                }
                f._setPixels(c, m)
            }

            var f = {};
            f._toPixels = function (a) {
                return a instanceof ImageData ? a.data : a.getContext("2d").getImageData(0, 0, a.width, a.height).data
            }, f._getARGB = function (a, b) {
                var c = 4 * b;
                return a[c + 3] << 24 & 4278190080 | a[c] << 16 & 16711680 | a[c + 1] << 8 & 65280 | 255 & a[c + 2]
            }, f._setPixels = function (a, b) {
                for (var c = 0, d = 0, e = a.length; d < e; d++) c = 4 * d, a[c + 0] = (16711680 & b[d]) >>> 16, a[c + 1] = (65280 & b[d]) >>> 8, a[c + 2] = 255 & b[d], a[c + 3] = (4278190080 & b[d]) >>> 24
            }, f._toImageData = function (a) {
                return a instanceof ImageData ? a : a.getContext("2d").getImageData(0, 0, a.width, a.height)
            }, f._createImageData = function (a, b) {
                return f._tmpCanvas = document.createElement("canvas"), f._tmpCtx = f._tmpCanvas.getContext("2d"), this._tmpCtx.createImageData(a, b)
            }, f.apply = function (a, b, c) {
                var d = a.getContext("2d"), e = d.getImageData(0, 0, a.width, a.height), f = b(e, c);
                f instanceof ImageData ? d.putImageData(f, 0, 0, 0, 0, a.width, a.height) : d.putImageData(e, 0, 0, 0, 0, a.width, a.height)
            }, f.threshold = function (a, b) {
                var c = f._toPixels(a);
                void 0 === b && (b = .5);
                for (var d = Math.floor(255 * b), e = 0; e < c.length; e += 4) {
                    var g, h = c[e], i = c[e + 1], j = c[e + 2], k = .2126 * h + .7152 * i + .0722 * j;
                    g = k >= d ? 255 : 0, c[e] = c[e + 1] = c[e + 2] = g
                }
            }, f.gray = function (a) {
                for (var b = f._toPixels(a), c = 0; c < b.length; c += 4) {
                    var d = b[c], e = b[c + 1], g = b[c + 2], h = .2126 * d + .7152 * e + .0722 * g;
                    b[c] = b[c + 1] = b[c + 2] = h
                }
            }, f.opaque = function (a) {
                for (var b = f._toPixels(a), c = 0; c < b.length; c += 4) b[c + 3] = 255;
                return b
            }, f.invert = function (a) {
                for (var b = f._toPixels(a), c = 0; c < b.length; c += 4) b[c] = 255 - b[c], b[c + 1] = 255 - b[c + 1], b[c + 2] = 255 - b[c + 2]
            }, f.posterize = function (a, b) {
                var c = f._toPixels(a);
                if (b < 2 || b > 255) throw new Error("Level must be greater than 2 and less than 255 for posterize");
                for (var d = b - 1, e = 0; e < c.length; e += 4) {
                    var g = c[e], h = c[e + 1], i = c[e + 2];
                    c[e] = 255 * (g * b >> 8) / d, c[e + 1] = 255 * (h * b >> 8) / d, c[e + 2] = 255 * (i * b >> 8) / d
                }
            }, f.dilate = function (a) {
                for (var b, c, d, e, g, h, i, j, k, l, m, n, o, p, q, r, s, t = f._toPixels(a), u = 0, v = t.length ? t.length / 4 : 0, w = new Int32Array(v); u < v;) for (b = u, c = u + a.width; u < c;) d = e = f._getARGB(t, u), i = u - 1, h = u + 1, j = u - a.width, k = u + a.width, i < b && (i = u), h >= c && (h = u), j < 0 && (j = 0), k >= v && (k = u), n = f._getARGB(t, j), m = f._getARGB(t, i), o = f._getARGB(t, k), l = f._getARGB(t, h), g = 77 * (d >> 16 & 255) + 151 * (d >> 8 & 255) + 28 * (255 & d), q = 77 * (m >> 16 & 255) + 151 * (m >> 8 & 255) + 28 * (255 & m), p = 77 * (l >> 16 & 255) + 151 * (l >> 8 & 255) + 28 * (255 & l), r = 77 * (n >> 16 & 255) + 151 * (n >> 8 & 255) + 28 * (255 & n), s = 77 * (o >> 16 & 255) + 151 * (o >> 8 & 255) + 28 * (255 & o), q > g && (e = m, g = q), p > g && (e = l, g = p), r > g && (e = n, g = r), s > g && (e = o, g = s), w[u++] = e;
                f._setPixels(t, w)
            }, f.erode = function (a) {
                for (var b, c, d, e, g, h, i, j, k, l, m, n, o, p, q, r, s, t = f._toPixels(a), u = 0, v = t.length ? t.length / 4 : 0, w = new Int32Array(v); u < v;) for (b = u, c = u + a.width; u < c;) d = e = f._getARGB(t, u), i = u - 1, h = u + 1, j = u - a.width, k = u + a.width, i < b && (i = u), h >= c && (h = u), j < 0 && (j = 0), k >= v && (k = u), n = f._getARGB(t, j), m = f._getARGB(t, i), o = f._getARGB(t, k), l = f._getARGB(t, h), g = 77 * (d >> 16 & 255) + 151 * (d >> 8 & 255) + 28 * (255 & d), q = 77 * (m >> 16 & 255) + 151 * (m >> 8 & 255) + 28 * (255 & m), p = 77 * (l >> 16 & 255) + 151 * (l >> 8 & 255) + 28 * (255 & l), r = 77 * (n >> 16 & 255) + 151 * (n >> 8 & 255) + 28 * (255 & n), s = 77 * (o >> 16 & 255) + 151 * (o >> 8 & 255) + 28 * (255 & o), q < g && (e = m, g = q), p < g && (e = l, g = p), r < g && (e = n, g = r), s < g && (e = o, g = s), w[u++] = e;
                f._setPixels(t, w)
            };
            var g, h, i, j;
            f.blur = function (a, b) {
                e(a, b)
            }, b.exports = f
        }, {}],
        60: [function (a, b, c) {
            "use strict";
            var d = a("../core/core"), e = [];
            d.prototype.createImage = function (a, b) {
                return new d.Image(a, b)
            }, d.prototype.saveCanvas = function () {
                var a, b, c;
                if (3 === arguments.length ? (a = arguments[0], b = arguments[1], c = arguments[2]) : 2 === arguments.length ? "object" == typeof arguments[0] ? (a = arguments[0], b = arguments[1]) : (b = arguments[0], c = arguments[1]) : 1 === arguments.length && ("object" == typeof arguments[0] ? a = arguments[0] : b = arguments[0]), a instanceof d.Element && (a = a.elt), a instanceof HTMLCanvasElement || (a = null), c || "" === (c = d.prototype._checkFileExtension(b, c)[1]) && (c = "png"), a || this._curElement && this._curElement.elt && (a = this._curElement.elt), d.prototype._isSafari()) {
                    var e = "Hello, Safari user!\n";
                    e += "Now capturing a screenshot...\n", e += "To save this image,\n", e += "go to File --> Save As.\n", alert(e), window.location.href = a.toDataURL()
                } else {
                    var f;
                    if (void 0 === c) c = "png", f = "image/png"; else switch (c) {
                        case"png":
                            f = "image/png";
                            break;
                        case"jpeg":
                            f = "image/jpeg";
                            break;
                        case"jpg":
                            f = "image/jpeg";
                            break;
                        default:
                            f = "image/png"
                    }
                    var g = a.toDataURL(f);
                    g = g.replace(f, "image/octet-stream"), d.prototype.downloadFile(g, b, c)
                }
            }, d.prototype.saveFrames = function (a, b, c, f, g) {
                var h = c || 3;
                h = d.prototype.constrain(h, 0, 15), h *= 1e3;
                var i = f || 15;
                i = d.prototype.constrain(i, 0, 22);
                var j = 0, k = d.prototype._makeFrame, l = this._curElement.elt, m = setInterval(function () {
                    k(a + j, b, l), j++
                }, 1e3 / i);
                setTimeout(function () {
                    if (clearInterval(m), g) g(e); else for (var a = 0; a < e.length; a++) {
                        var b = e[a];
                        d.prototype.downloadFile(b.imageData, b.filename, b.ext)
                    }
                    e = []
                }, h + .01)
            }, d.prototype._makeFrame = function (a, b, c) {
                var d;
                d = this ? this._curElement.elt : c;
                var f;
                if (b) switch (b.toLowerCase()) {
                    case"png":
                        f = "image/png";
                        break;
                    case"jpeg":
                        f = "image/jpeg";
                        break;
                    case"jpg":
                        f = "image/jpeg";
                        break;
                    default:
                        f = "image/png"
                } else b = "png", f = "image/png";
                var g = d.toDataURL(f);
                g = g.replace(f, "image/octet-stream");
                var h = {};
                h.imageData = g, h.filename = a, h.ext = b, e.push(h)
            }, b.exports = d
        }, {"../core/core": 42}],
        61: [function (a, b, c) {
            "use strict";

            function d(a, b) {
                return a > 0 && a < b ? a : b
            }

            var e = a("../core/core"), f = a("./filters"), g = a("../core/canvas"), h = a("../core/constants");
            a("../core/error_helpers"), e.prototype.loadImage = function (a, b, c) {
                var d = new Image, f = new e.Image(1, 1, this), g = e._getDecrementPreload.apply(this, arguments);
                return d.onload = function () {
                    f.width = f.canvas.width = d.width, f.height = f.canvas.height = d.height, f.drawingContext.drawImage(d, 0, 0), "function" == typeof b && b(f), g && b !== g && g()
                }, d.onerror = function (a) {
                    e._friendlyFileLoadError(0, d.src), "function" == typeof c && c !== g && c(a)
                }, 0 !== a.indexOf("data:image/") && (d.crossOrigin = "Anonymous"), d.src = a, f
            }, e.prototype.image = function (a, b, c, e, f, h, i, j, k) {
                var l = a.width, m = a.height;
                a.elt && a.elt.videoWidth && !a.canvas && (l = a.elt.videoWidth, m = a.elt.videoHeight);
                var n = b, o = c, p = e || l, q = f || m, r = h || 0, s = i || 0, t = j || l, u = k || m;
                t = d(t, l), u = d(u, m);
                var v = 1;
                a.elt && !a.canvas && a.elt.style.width && (v = a.elt.videoWidth && !e ? a.elt.videoWidth : a.elt.width, v /= parseInt(a.elt.style.width, 10)), r *= v, s *= v, u *= v, t *= v;
                var w = g.modeAdjust(n, o, p, q, this._renderer._imageMode);
                this._renderer.image(a, r, s, t, u, w.x, w.y, w.w, w.h)
            }, e.prototype.tint = function () {
                var a = this.color.apply(this, arguments);
                this._renderer._tint = a.levels
            }, e.prototype.noTint = function () {
                this._renderer._tint = null
            }, e.prototype._getTintedImageCanvas = function (a) {
                if (!a.canvas) return a;
                var b = f._toPixels(a.canvas), c = document.createElement("canvas");
                c.width = a.canvas.width, c.height = a.canvas.height;
                for (var d = c.getContext("2d"), e = d.createImageData(a.canvas.width, a.canvas.height), g = e.data, h = 0; h < b.length; h += 4) {
                    var i = b[h], j = b[h + 1], k = b[h + 2], l = b[h + 3];
                    g[h] = i * this._renderer._tint[0] / 255, g[h + 1] = j * this._renderer._tint[1] / 255, g[h + 2] = k * this._renderer._tint[2] / 255, g[h + 3] = l * this._renderer._tint[3] / 255
                }
                return d.putImageData(e, 0, 0), c
            }, e.prototype.imageMode = function (a) {
                a !== h.CORNER && a !== h.CORNERS && a !== h.CENTER || (this._renderer._imageMode = a)
            }, b.exports = e
        }, {
            "../core/canvas": 40,
            "../core/constants": 41,
            "../core/core": 42,
            "../core/error_helpers": 45,
            "./filters": 59
        }],
        62: [function (a, b, c) {
            "use strict";
            var d = a("../core/core"), e = a("./filters");
            d.Image = function (a, b) {
                this.width = a, this.height = b, this.canvas = document.createElement("canvas"), this.canvas.width = this.width, this.canvas.height = this.height, this.drawingContext = this.canvas.getContext("2d"), this._pixelDensity = 1, this.isTexture = !1, this.pixels = []
            }, d.Image.prototype._setProperty = function (a, b) {
                this[a] = b
            }, d.Image.prototype.loadPixels = function () {
                d.Renderer2D.prototype.loadPixels.call(this)
            }, d.Image.prototype.updatePixels = function (a, b, c, e) {
                d.Renderer2D.prototype.updatePixels.call(this, a, b, c, e)
            }, d.Image.prototype.get = function (a, b, c, e) {
                return d.Renderer2D.prototype.get.call(this, a, b, c, e)
            }, d.Image.prototype.set = function (a, b, c) {
                d.Renderer2D.prototype.set.call(this, a, b, c)
            }, d.Image.prototype.resize = function (a, b) {
                0 === a && 0 === b ? (a = this.canvas.width, b = this.canvas.height) : 0 === a ? a = this.canvas.width * b / this.canvas.height : 0 === b && (b = this.canvas.height * a / this.canvas.width), a = Math.floor(a), b = Math.floor(b);
                var c = document.createElement("canvas");
                c.width = a, c.height = b, c.getContext("2d").drawImage(this.canvas, 0, 0, this.canvas.width, this.canvas.height, 0, 0, c.width, c.height), this.canvas.width = this.width = a, this.canvas.height = this.height = b, this.drawingContext.drawImage(c, 0, 0, a, b, 0, 0, a, b), this.pixels.length > 0 && this.loadPixels()
            }, d.Image.prototype.copy = function () {
                d.prototype.copy.apply(this, arguments)
            }, d.Image.prototype.mask = function (a) {
                void 0 === a && (a = this);
                var b = this.drawingContext.globalCompositeOperation, c = 1;
                a instanceof d.Renderer && (c = a._pInst._pixelDensity);
                var e = [a, 0, 0, c * a.width, c * a.height, 0, 0, this.width, this.height];
                this.drawingContext.globalCompositeOperation = "destination-in", d.Image.prototype.copy.apply(this, e), this.drawingContext.globalCompositeOperation = b
            }, d.Image.prototype.filter = function (a, b) {
                e.apply(this.canvas, e[a.toLowerCase()], b)
            }, d.Image.prototype.blend = function () {
                d.prototype.blend.apply(this, arguments)
            }, d.Image.prototype.save = function (a, b) {
                var c;
                if (b) switch (b.toLowerCase()) {
                    case"png":
                        c = "image/png";
                        break;
                    case"jpeg":
                        c = "image/jpeg";
                        break;
                    case"jpg":
                        c = "image/jpeg";
                        break;
                    default:
                        c = "image/png"
                } else b = "png", c = "image/png";
                var e = this.canvas.toDataURL(c)
                ;e = e.replace(c, "image/octet-stream"), d.prototype.downloadFile(e, a, b)
            }, b.exports = d.Image
        }, {"../core/core": 42, "./filters": 59}],
        63: [function (a, b, c) {
            "use strict";
            var d = a("../core/core"), e = a("./filters");
            a("../color/p5.Color"), d.prototype.pixels = [], d.prototype.blend = function () {
                this._renderer ? this._renderer.blend.apply(this._renderer, arguments) : d.Renderer2D.prototype.blend.apply(this, arguments)
            }, d.prototype.copy = function () {
                d.Renderer2D._copyHelper.apply(this, arguments)
            }, d.prototype.filter = function (a, b) {
                void 0 !== this.canvas ? e.apply(this.canvas, e[a.toLowerCase()], b) : e.apply(this.elt, e[a.toLowerCase()], b)
            }, d.prototype.get = function (a, b, c, d) {
                return this._renderer.get(a, b, c, d)
            }, d.prototype.loadPixels = function () {
                this._renderer.loadPixels()
            }, d.prototype.set = function (a, b, c) {
                this._renderer.set(a, b, c)
            }, d.prototype.updatePixels = function (a, b, c, d) {
                0 !== this.pixels.length && this._renderer.updatePixels(a, b, c, d)
            }, b.exports = d
        }, {"../color/p5.Color": 36, "../core/core": 42, "./filters": 59}],
        64: [function (a, b, c) {
            "use strict";

            function d(a, b) {
                var c = {};
                if (void 0 === (b = b || [])) for (var d = 0; d < a.length; d++) b[d.toString()] = d;
                for (var e = 0; e < b.length; e++) {
                    var f = b[e], g = a[e];
                    c[f] = g
                }
                return c
            }

            function e(a) {
                return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
            }

            function f(a, b) {
                b && b !== !0 && "true" !== b || (b = ""), a || (a = "untitled");
                var c = "";
                return a && a.indexOf(".") > -1 && (c = a.split(".").pop()), b && c !== b && (c = b, a = a + "." + c), [a, c]
            }

            function g(a) {
                document.body.removeChild(a.target)
            }

            var h = a("../core/core"), i = a("opentype.js");
            a("whatwg-fetch"), a("es6-promise").polyfill();
            var j = a("fetch-jsonp");
            a("../core/error_helpers"), h._getDecrementPreload = function () {
                var a = arguments[arguments.length - 1];
                return (window.preload || this && this.preload) && "function" == typeof a ? a : null
            }, h.prototype.loadFont = function (a, b, c) {
                var d = new h.Font(this), e = h._getDecrementPreload.apply(this, arguments);
                return i.load(a, function (f, g) {
                    if (f) return void 0 !== c && c !== e ? c(f) : (h._friendlyFileLoadError(4, a), void console.error(f, a));
                    d.font = g, void 0 !== b && b(d), e && b !== e && e();
                    var i, j, k = ["ttf", "otf", "woff", "woff2"], l = a.split("\\").pop().split("/").pop(),
                        m = l.lastIndexOf("."), n = m < 1 ? null : l.substr(m + 1);
                    k.indexOf(n) > -1 && (i = l.substr(0, m), j = document.createElement("style"), j.appendChild(document.createTextNode("\n@font-face {\nfont-family: " + i + ";\nsrc: url(" + a + ");\n}\n")), document.head.appendChild(j))
                }), d
            }, h.prototype.loadJSON = function () {
                for (var a, b, c, d = arguments[0], e = h._getDecrementPreload.apply(this, arguments), f = {}, g = "json", i = 1; i < arguments.length; i++) {
                    var j = arguments[i];
                    "string" == typeof j ? "jsonp" !== j && "json" !== j || (g = j) : "function" == typeof j && j !== e ? a ? b = j : a = j : "object" == typeof j && j.hasOwnProperty("jsonpCallback") && (g = "jsonp", c = j)
                }
                return h.prototype.httpDo(d, "GET", c, g, function (b) {
                    for (var c in b) f[c] = b[c];
                    void 0 !== a && a(b), e && a !== e && e()
                }, b), f
            }, h.prototype.loadStrings = function () {
                for (var a, b, c = [], d = h._getDecrementPreload.apply(this, arguments), e = 1; e < arguments.length; e++) {
                    var f = arguments[e];
                    "function" == typeof f && f !== d && (void 0 === a ? a = f : b = f)
                }
                return h.prototype.httpDo(arguments[0], "GET", "text", function (b) {
                    var e = b.match(/[^\r\n]+/g);
                    for (var f in e) c[f] = e[f];
                    void 0 !== a && a(c), d && a !== d && d()
                }, b), c
            }, h.prototype.loadTable = function (a) {
                var b = null, c = null, e = [], f = !1, g = a.substring(a.lastIndexOf(".") + 1, a.length), i = ",",
                    j = !1, k = h._getDecrementPreload.apply(this, arguments);
                "tsv" === g && (i = "\t");
                for (var l = 1; l < arguments.length; l++) if ("function" == typeof arguments[l] && arguments[l] !== k) b ? c = arguments[l] : b = arguments[l]; else if ("string" == typeof arguments[l]) if (e.push(arguments[l]), "header" === arguments[l] && (f = !0), "csv" === arguments[l]) {
                    if (j) throw new Error("Cannot set multiple separator types.");
                    i = ",", j = !0
                } else if ("tsv" === arguments[l]) {
                    if (j) throw new Error("Cannot set multiple separator types.");
                    i = "\t", j = !0
                }
                var m = new h.Table;
                return h.prototype.httpDo(a, "GET", "text", function (a) {
                    for (var c, e = {}, g = 0, j = 1, n = 2, o = 4, p = '"', q = "\r", r = "\n", s = [], t = 0, u = null, v = function () {
                        e.currentState = g, e.token = ""
                    }, w = function () {
                        u.push(e.token), v()
                    }, x = function () {
                        e.escaped = !1, u = [], v()
                    }, y = function () {
                        e.currentState = o, s.push(u), u = null
                    }; ;) {
                        if (null == (c = a[t++])) {
                            if (e.escaped) throw new Error("Unclosed quote in file.");
                            if (u) {
                                w(), y();
                                break
                            }
                        }
                        if (null === u && x(), e.currentState === g) {
                            if (c === p) {
                                e.escaped = !0, e.currentState = j;
                                continue
                            }
                            e.currentState = j
                        }
                        e.currentState === j && e.escaped ? c === p ? a[t] === p ? (e.token += p, t++) : (e.escaped = !1, e.currentState = n) : e.token += c : c === q ? (a[t] === r && t++, w(), y()) : c === r ? (w(), y()) : c === i ? w() : e.currentState === j && (e.token += c)
                    }
                    if (f) m.columns = s.shift(); else for (l = 0; l < s[0].length; l++) m.columns[l] = "null";
                    var z;
                    for (l = 0; l < s.length; l++) (1 !== s[l].length || "undefined" !== s[l][0] && "" !== s[l][0]) && (z = new h.TableRow, z.arr = s[l], z.obj = d(s[l], m.columns), m.addRow(z));
                    null !== b && b(m), k && b !== k && k()
                }, function (b) {
                    if (h._friendlyFileLoadError(2, a), !c) throw b;
                    c(b)
                }), m
            }, h.prototype.parseXML = function (a) {
                var b, c = new h.XML;
                if (a.children.length) {
                    for (b = 0; b < a.children.length; b++) {
                        var d = parseXML(a.children[b]);
                        c.addChild(d)
                    }
                    c.setName(a.nodeName), c._setCont(a.textContent), c._setAttributes(a);
                    for (var e = 0; e < c.children.length; e++) c.children[e].parent = c;
                    return c
                }
                return c.setName(a.nodeName), c._setCont(a.textContent), c._setAttributes(a), c
            }, h.prototype.loadXML = function () {
                for (var a, b, c = {}, d = h._getDecrementPreload.apply(this, arguments), e = 1; e < arguments.length; e++) {
                    var f = arguments[e];
                    "function" == typeof f && f !== d && (void 0 === a ? a = f : b = f)
                }
                return h.prototype.httpDo(arguments[0], "GET", "xml", function (b) {
                    for (var e in b) c[e] = b[e];
                    void 0 !== a && a(c), d && a !== d && d()
                }, b), c
            }, h.prototype.httpGet = function () {
                var a = Array.prototype.slice.call(arguments);
                a.splice(1, 0, "GET"), h.prototype.httpDo.apply(this, a)
            }, h.prototype.httpPost = function () {
                var a = Array.prototype.slice.call(arguments);
                a.splice(1, 0, "POST"), h.prototype.httpDo.apply(this, a)
            }, h.prototype.httpDo = function () {
                for (var a, b, c, d = "", e = {}, f = 0, g = "text/plain", h = arguments.length - 1; h > 0 && "function" == typeof arguments[h]; h--) f++;
                if (2 == arguments.length - f && "string" == typeof arguments[0] && "object" == typeof arguments[1]) c = new Request(arguments[0], arguments[1]), a = arguments[2], b = arguments[3], "" === d && (d = c.url.indexOf("json") !== -1 ? "json" : c.url.indexOf("xml") !== -1 ? "xml" : "text"); else {
                    for (var i, k = arguments[0], l = "GET", m = 1; m < arguments.length; m++) {
                        var n = arguments[m];
                        if ("string" == typeof n) "GET" === n || "POST" === n || "PUT" === n || "DELETE" === n ? l = n : "json" === n || "jsonp" === n || "xml" === n || "text" === n ? d = n : i = n; else if ("number" == typeof n) i = n.toString(); else if ("object" == typeof n) if (n.hasOwnProperty("jsonpCallback")) for (var o in n) e[o] = n[o]; else i = JSON.stringify(n), g = "application/json"; else "function" == typeof n && (a ? b = n : a = n)
                    }
                    "" === d && (d = k.indexOf("json") !== -1 ? "json" : k.indexOf("xml") !== -1 ? "xml" : "text"), c = new Request(k, {
                        method: l,
                        mode: "cors",
                        body: i,
                        headers: new Headers({"Content-Type": g})
                    })
                }
                "jsonp" === d ? j(arguments[0], e).then(function (a) {
                    if (a.ok) return a.json();
                    throw a
                }).then(function (b) {
                    a(b)
                }).catch(function (a) {
                    if (!b) throw a;
                    b(a)
                }) : fetch(c).then(function (a) {
                    if (a.ok) return "json" === d ? a.json() : a.text();
                    throw a
                }).then(function (b) {
                    if ("xml" === d) {
                        b = (new DOMParser).parseFromString(b, "text/xml"), b = parseXML(b.documentElement)
                    }
                    a(b)
                }).catch(function (a, c) {
                    if (!b) throw a;
                    b(a)
                })
            }, window.URL = window.URL || window.webkitURL, h.prototype._pWriters = [], h.prototype.createWriter = function (a, b) {
                var c;
                for (var d in h.prototype._pWriters) if (h.prototype._pWriters[d].name === a) return c = new h.PrintWriter(a + window.millis(), b), h.prototype._pWriters.push(c), c;
                return c = new h.PrintWriter(a, b), h.prototype._pWriters.push(c), c
            }, h.PrintWriter = function (a, b) {
                var c = this;
                this.name = a, this.content = "", this.write = function (a) {
                    this.content += a
                }, this.print = function (a) {
                    this.content += a + "\n"
                }, this.flush = function () {
                    this.content = ""
                }, this.close = function () {
                    var d = [];
                    d.push(this.content), h.prototype.writeFile(d, a, b);
                    for (var e in h.prototype._pWriters) h.prototype._pWriters[e].name === this.name && h.prototype._pWriters.splice(e, 1);
                    c.flush(), c = {}
                }
            }, h.prototype.save = function (a, b, c) {
                var d = arguments, e = this._curElement.elt;
                if (0 === d.length) return void h.prototype.saveCanvas(e);
                if (d[0] instanceof h.Renderer || d[0] instanceof h.Graphics) return void h.prototype.saveCanvas(d[0].elt, d[1], d[2]);
                if (1 === d.length && "string" == typeof d[0]) h.prototype.saveCanvas(e, d[0]); else {
                    switch (f(d[1], d[2])[1]) {
                        case"json":
                            return void h.prototype.saveJSON(d[0], d[1], d[2]);
                        case"txt":
                            return void h.prototype.saveStrings(d[0], d[1], d[2]);
                        default:
                            d[0] instanceof Array ? h.prototype.saveStrings(d[0], d[1], d[2]) : d[0] instanceof h.Table ? h.prototype.saveTable(d[0], d[1], d[2], d[3]) : d[0] instanceof h.Image ? h.prototype.saveCanvas(d[0].canvas, d[1]) : d[0] instanceof h.SoundFile && h.prototype.saveSound(d[0], d[1], d[2], d[3])
                    }
                }
            }, h.prototype.saveJSON = function (a, b, c) {
                var d;
                d = c ? JSON.stringify(a) : JSON.stringify(a, void 0, 2), this.saveStrings(d.split("\n"), b, "json")
            }, h.prototype.saveJSONObject = h.prototype.saveJSON, h.prototype.saveJSONArray = h.prototype.saveJSON, h.prototype.saveStrings = function (a, b, c) {
                for (var d = c || "txt", e = this.createWriter(b, d), f = 0; f < a.length; f++) a.length, e.print(a[f]);
                e.close(), e.flush()
            }, h.prototype.saveTable = function (a, b, c) {
                var d;
                d = void 0 === c ? b.substring(b.lastIndexOf(".") + 1, b.length) : c;
                var f = this.createWriter(b, d), g = a.columns, h = ",";
                if ("tsv" === d && (h = "\t"), "html" !== d) {
                    if ("0" !== g[0]) {
                        for (var i = 0; i < g.length; i++) i < g.length - 1 ? f.write(g[i] + h) : f.write(g[i]);
                        f.write("\n")
                    }
                    for (var j = 0; j < a.rows.length; j++) {
                        var k;
                        for (k = 0; k < a.rows[j].arr.length; k++) k < a.rows[j].arr.length - 1 ? f.write(a.rows[j].arr[k] + h) : (a.rows.length, f.write(a.rows[j].arr[k]));
                        f.write("\n")
                    }
                } else {
                    f.print("<html>"), f.print("<head>");
                    var l = '  <meta http-equiv="content-type" content';
                    if (l += '="text/html;charset=utf-8" />', f.print(l), f.print("</head>"), f.print("<body>"), f.print("  <table>"), "0" !== g[0]) {
                        f.print("    <tr>");
                        for (var m = 0; m < g.length; m++) {
                            var n = e(g[m]);
                            f.print("      <td>" + n), f.print("      </td>")
                        }
                        f.print("    </tr>")
                    }
                    for (var o = 0; o < a.rows.length; o++) {
                        f.print("    <tr>");
                        for (var p = 0; p < a.columns.length; p++) {
                            var q = a.rows[o].getString(p), r = e(q);
                            f.print("      <td>" + r), f.print("      </td>")
                        }
                        f.print("    </tr>")
                    }
                    f.print("  </table>"), f.print("</body>"), f.print("</html>")
                }
                f.close(), f.flush()
            }, h.prototype.writeFile = function (a, b, c) {
                var d = "application/octet-stream";
                h.prototype._isSafari() && (d = "text/plain");
                var e = new Blob(a, {type: d}), f = window.URL.createObjectURL(e);
                h.prototype.downloadFile(f, b, c)
            }, h.prototype.downloadFile = function (a, b, c) {
                var d = f(b, c), e = d[0], i = d[1], j = document.createElement("a");
                if (j.href = a, j.download = e, j.onclick = function (a) {
                        g(a), a.stopPropagation()
                    }, j.style.display = "none", document.body.appendChild(j), h.prototype._isSafari()) {
                    var k = "Hello, Safari user! To download this file...\n";
                    k += "1. Go to File --> Save As.\n", k += '2. Choose "Page Source" as the Format.\n', k += '3. Name it with this extension: ."' + i + '"', alert(k)
                }
                j.click(), a = null
            }, h.prototype._checkFileExtension = f, h.prototype._isSafari = function () {
                return Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0
            }, b.exports = h
        }, {
            "../core/core": 42,
            "../core/error_helpers": 45,
            "es6-promise": 2,
            "fetch-jsonp": 3,
            "opentype.js": 10,
            "whatwg-fetch": 32
        }],
        65: [function (a, b, c) {
            "use strict";
            var d = a("../core/core");
            d.Table = function (a) {
                this.columns = [], this.rows = []
            }, d.Table.prototype.addRow = function (a) {
                var b = a || new d.TableRow;
                if (void 0 === b.arr || void 0 === b.obj) throw"invalid TableRow: " + b;
                return b.table = this, this.rows.push(b), b
            }, d.Table.prototype.removeRow = function (a) {
                this.rows[a].table = null;
                var b = this.rows.splice(a + 1, this.rows.length);
                this.rows.pop(), this.rows = this.rows.concat(b)
            }, d.Table.prototype.getRow = function (a) {
                return this.rows[a]
            }, d.Table.prototype.getRows = function () {
                return this.rows
            }, d.Table.prototype.findRow = function (a, b) {
                if ("string" == typeof b) {
                    for (var c = 0; c < this.rows.length; c++) if (this.rows[c].obj[b] === a) return this.rows[c]
                } else for (var d = 0; d < this.rows.length; d++) if (this.rows[d].arr[b] === a) return this.rows[d];
                return null
            }, d.Table.prototype.findRows = function (a, b) {
                var c = [];
                if ("string" == typeof b) for (var d = 0; d < this.rows.length; d++) this.rows[d].obj[b] === a && c.push(this.rows[d]); else for (var e = 0; e < this.rows.length; e++) this.rows[e].arr[b] === a && c.push(this.rows[e]);
                return c
            }, d.Table.prototype.matchRow = function (a, b) {
                if ("number" == typeof b) {
                    for (var c = 0; c < this.rows.length; c++) if (this.rows[c].arr[b].match(a)) return this.rows[c]
                } else for (var d = 0; d < this.rows.length; d++) if (this.rows[d].obj[b].match(a)) return this.rows[d];
                return null
            }, d.Table.prototype.matchRows = function (a, b) {
                var c = [];
                if ("number" == typeof b) for (var d = 0; d < this.rows.length; d++) this.rows[d].arr[b].match(a) && c.push(this.rows[d]); else for (var e = 0; e < this.rows.length; e++) this.rows[e].obj[b].match(a) && c.push(this.rows[e]);
                return c
            }, d.Table.prototype.getColumn = function (a) {
                var b = [];
                if ("string" == typeof a) for (var c = 0; c < this.rows.length; c++) b.push(this.rows[c].obj[a]); else for (var d = 0; d < this.rows.length; d++) b.push(this.rows[d].arr[a]);
                return b
            }, d.Table.prototype.clearRows = function () {
                delete this.rows, this.rows = []
            }, d.Table.prototype.addColumn = function (a) {
                var b = a || null;
                this.columns.push(b)
            }, d.Table.prototype.getColumnCount = function () {
                return this.columns.length
            }, d.Table.prototype.getRowCount = function () {
                return this.rows.length
            }, d.Table.prototype.removeTokens = function (a, b) {
                for (var c = function (a) {
                    return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
                }, d = [], e = 0; e < a.length; e++) d.push(c(a.charAt(e)));
                var f = new RegExp(d.join("|"), "g");
                if (void 0 === b) for (var g = 0; g < this.columns.length; g++) for (var h = 0; h < this.rows.length; h++) {
                    var i = this.rows[h].arr[g];
                    i = i.replace(f, ""), this.rows[h].arr[g] = i, this.rows[h].obj[this.columns[g]] = i
                } else if ("string" == typeof b) for (var j = 0; j < this.rows.length; j++) {
                    var k = this.rows[j].obj[b];
                    k = k.replace(f, ""), this.rows[j].obj[b] = k;
                    var l = this.columns.indexOf(b);
                    this.rows[j].arr[l] = k
                } else for (var m = 0; m < this.rows.length; m++) {
                    var n = this.rows[m].arr[b];
                    n = n.replace(f, ""), this.rows[m].arr[b] = n, this.rows[m].obj[this.columns[b]] = n
                }
            }, d.Table.prototype.trim = function (a) {
                var b = new RegExp(" ", "g");
                if (void 0 === a) for (var c = 0; c < this.columns.length; c++) for (var d = 0; d < this.rows.length; d++) {
                    var e = this.rows[d].arr[c];
                    e = e.replace(b, ""), this.rows[d].arr[c] = e, this.rows[d].obj[this.columns[c]] = e
                } else if ("string" == typeof a) for (var f = 0; f < this.rows.length; f++) {
                    var g = this.rows[f].obj[a];
                    g = g.replace(b, ""), this.rows[f].obj[a] = g;
                    var h = this.columns.indexOf(a);
                    this.rows[f].arr[h] = g
                } else for (var i = 0; i < this.rows.length; i++) {
                    var j = this.rows[i].arr[a];
                    j = j.replace(b, ""), this.rows[i].arr[a] = j, this.rows[i].obj[this.columns[a]] = j
                }
            }, d.Table.prototype.removeColumn = function (a) {
                var b, c;
                "string" == typeof a ? (b = a, c = this.columns.indexOf(a), console.log("string")) : (c = a, b = this.columns[a]);
                var d = this.columns.splice(c + 1, this.columns.length);
                this.columns.pop(), this.columns = this.columns.concat(d);
                for (var e = 0; e < this.rows.length; e++) {
                    var f = this.rows[e].arr, g = f.splice(c + 1, f.length);
                    f.pop(), this.rows[e].arr = f.concat(g), delete this.rows[e].obj[b]
                }
            }, d.Table.prototype.set = function (a, b, c) {
                this.rows[a].set(b, c)
            }, d.Table.prototype.setNum = function (a, b, c) {
                this.rows[a].setNum(b, c)
            }, d.Table.prototype.setString = function (a, b, c) {
                this.rows[a].setString(b, c)
            }, d.Table.prototype.get = function (a, b) {
                return this.rows[a].get(b)
            }, d.Table.prototype.getNum = function (a, b) {
                return this.rows[a].getNum(b)
            }, d.Table.prototype.getString = function (a, b) {
                return this.rows[a].getString(b)
            }, d.Table.prototype.getObject = function (a) {
                for (var b, c, d = {}, e = 0; e < this.rows.length; e++) if (b = this.rows[e].obj, "string" == typeof a) {
                    if (!(this.columns.indexOf(a) >= 0)) throw'This table has no column named "' + a + '"';
                    c = b[a], d[c] = b
                } else d[e] = this.rows[e].obj;
                return d
            }, d.Table.prototype.getArray = function () {
                for (var a = [], b = 0; b < this.rows.length; b++) a.push(this.rows[b].arr);
                return a
            }, b.exports = d.Table
        }, {"../core/core": 42}],
        66: [function (a, b, c) {
            "use strict";
            var d = a("../core/core");
            d.TableRow = function (a, b) {
                var c = [], d = {};
                a && (b = b || ",", c = a.split(b));
                for (var e = 0; e < c.length; e++) {
                    var f = e, g = c[e];
                    d[f] = g
                }
                this.arr = c, this.obj = d, this.table = null
            }, d.TableRow.prototype.set = function (a, b) {
                if ("string" == typeof a) {
                    var c = this.table.columns.indexOf(a);
                    if (!(c >= 0)) throw'This table has no column named "' + a + '"';
                    this.obj[a] = b, this.arr[c] = b
                } else {
                    if (!(a < this.table.columns.length)) throw"Column #" + a + " is out of the range of this table";
                    this.arr[a] = b;
                    var d = this.table.columns[a];
                    this.obj[d] = b
                }
            }, d.TableRow.prototype.setNum = function (a, b) {
                var c = parseFloat(b, 10);
                this.set(a, c)
            }, d.TableRow.prototype.setString = function (a, b) {
                var c = b.toString();
                this.set(a, c)
            }, d.TableRow.prototype.get = function (a) {
                return "string" == typeof a ? this.obj[a] : this.arr[a]
            }, d.TableRow.prototype.getNum = function (a) {
                var b;
                if (b = "string" == typeof a ? parseFloat(this.obj[a], 10) : parseFloat(this.arr[a], 10), "NaN" === b.toString()) throw"Error: " + this.obj[a] + " is NaN (Not a Number)";
                return b
            }, d.TableRow.prototype.getString = function (a) {
                return "string" == typeof a ? this.obj[a].toString() : this.arr[a].toString()
            }, b.exports = d.TableRow
        }, {"../core/core": 42}],
        67: [function (a, b, c) {
            "use strict";
            var d = a("../core/core");
            d.XML = function () {
                this.name = null, this.attributes = {}, this.children = [], this.parent = null, this.content = null
            }, d.XML.prototype.getParent = function () {
                return this.parent
            }, d.XML.prototype.getName = function () {
                return this.name
            }, d.XML.prototype.setName = function (a) {
                this.name = a
            }, d.XML.prototype.hasChildren = function () {
                return this.children.length > 0
            }, d.XML.prototype.listChildren = function () {
                return this.children.map(function (a) {
                    return a.name
                })
            }, d.XML.prototype.getChildren = function (a) {
                return a ? this.children.filter(function (b) {
                    return b.name === a
                }) : this.children
            }, d.XML.prototype.getChild = function (a) {
                return "string" == typeof a ? this.children.find(function (b) {
                    return b.name === a
                }) : this.children[a]
            }, d.XML.prototype.addChild = function (a) {
                a instanceof d.XML && this.children.push(a)
            }, d.XML.prototype.removeChild = function (a) {
                var b = -1;
                if ("string" == typeof a) {
                    for (var c = 0; c < this.children.length; c++) if (this.children[c].name === a) {
                        b = c;
                        break
                    }
                } else b = a;
                b !== -1 && this.children.splice(b, 1)
            }, d.XML.prototype.getAttributeCount = function () {
                return Object.keys(this.attributes).length
            }, d.XML.prototype.listAttributes = function () {
                return Object.keys(this.attributes)
            }, d.XML.prototype.hasAttribute = function (a) {
                return !!this.attributes[a]
            }, d.XML.prototype.getNum = function (a, b) {
                return Number(this.attributes[a]) || b || 0
            }, d.XML.prototype.getString = function (a, b) {
                return String(this.attributes[a]) || b || null
            }, d.XML.prototype.setAttribute = function (a, b) {
                this.attributes[a] && (this.attributes[a] = b)
            }, d.XML.prototype.getContent = function (a) {
                return this.content || a || null
            }, d.XML.prototype.setContent = function (a) {
                this.children.length || (this.content = a)
            }, d.XML.prototype._setCont = function (a) {
                var b;
                b = a, b = b.replace(/\s\s+/g, ","), this.content = b
            }, d.XML.prototype._setAttributes = function (a) {
                var b, c = {};
                for (b = 0; b < a.attributes.length; b++) c[a.attributes[b].nodeName] = a.attributes[b].nodeValue;
                this.attributes = c
            }, b.exports = d.XML
        }, {"../core/core": 42}],
        68: [function (a, b, c) {
            "use strict";

            function d(a, b, c) {
                if ("function" == typeof Math.hypot) return Math.hypot.apply(null, arguments);
                for (var d = arguments.length, e = [], f = 0, g = 0; g < d; g++) {
                    var h = arguments[g];
                    if ((h = +h) === 1 / 0 || h === -(1 / 0)) return 1 / 0;
                    h = Math.abs(h), h > f && (f = h), e[g] = h
                }
                0 === f && (f = 1);
                for (var i = 0, j = 0, k = 0; k < d; k++) {
                    var l = e[k] / f, m = l * l - j, n = i + m;
                    j = n - i - m, i = n
                }
                return Math.sqrt(i) * f
            }

            var e = a("../core/core");
            e.prototype.abs = Math.abs, e.prototype.ceil = Math.ceil, e.prototype.constrain = function (a, b, c) {
                return Math.max(Math.min(a, c), b)
            }, e.prototype.dist = function (a, b, c, e, f, g) {
                return 4 === arguments.length ? d(c - a, e - b) : 6 === arguments.length ? d(e - a, f - b, g - c) : void 0
            }, e.prototype.exp = Math.exp, e.prototype.floor = Math.floor, e.prototype.lerp = function (a, b, c) {
                return c * (b - a) + a
            }, e.prototype.log = Math.log, e.prototype.mag = function (a, b) {
                return d(a, b)
            }, e.prototype.map = function (a, b, c, d, e) {
                return (a - b) / (c - b) * (e - d) + d
            }, e.prototype.max = function () {
                return arguments[0] instanceof Array ? Math.max.apply(null, arguments[0]) : Math.max.apply(null, arguments)
            }, e.prototype.min = function () {
                return arguments[0] instanceof Array ? Math.min.apply(null, arguments[0]) : Math.min.apply(null, arguments)
            }, e.prototype.norm = function (a, b, c) {
                return this.map(a, b, c, 0, 1)
            }, e.prototype.pow = Math.pow, e.prototype.round = Math.round, e.prototype.sq = function (a) {
                return a * a
            }, e.prototype.sqrt = Math.sqrt, b.exports = e
        }, {"../core/core": 42}],
        69: [function (a, b, c) {
            "use strict";
            var d = a("../core/core");
            d.prototype.createVector = function (a, b, c) {
                return this instanceof d ? new d.Vector(this, arguments) : new d.Vector(a, b, c)
            }, b.exports = d
        }, {"../core/core": 42}],
        70: [function (a, b, c) {
            "use strict";
            var d, e = a("../core/core"), f = 4, g = 1 << f, h = 8, i = 1 << h, j = 4095, k = 4, l = .5,
                m = function (a) {
                    return .5 * (1 - Math.cos(a * Math.PI))
                };
            e.prototype.noise = function (a, b, c) {
                if (b = b || 0, c = c || 0, null == d) {
                    d = new Array(j + 1);
                    for (var e = 0; e < j + 1; e++) d[e] = Math.random()
                }
                a < 0 && (a = -a), b < 0 && (b = -b), c < 0 && (c = -c);
                for (var n, o, p, q, r, s = Math.floor(a), t = Math.floor(b), u = Math.floor(c), v = a - s, w = b - t, x = c - u, y = 0, z = .5, A = 0; A < k; A++) {
                    var B = s + (t << f) + (u << h);
                    n = m(v), o = m(w), p = d[B & j], p += n * (d[B + 1 & j] - p), q = d[B + g & j], q += n * (d[B + g + 1 & j] - q), p += o * (q - p), B += i, q = d[B & j], q += n * (d[B + 1 & j] - q), r = d[B + g & j], r += n * (d[B + g + 1 & j] - r), q += o * (r - q), p += m(x) * (q - p), y += p * z, z *= l, s <<= 1, v *= 2, t <<= 1, w *= 2, u <<= 1, x *= 2, v >= 1 && (s++, v--), w >= 1 && (t++, w--), x >= 1 && (u++, x--)
                }
                return y
            }, e.prototype.noiseDetail = function (a, b) {
                a > 0 && (k = a), b > 0 && (l = b)
            }, e.prototype.noiseSeed = function (a) {
                var b = function () {
                    var a, b, c = 4294967296, d = 1664525, e = 1013904223;
                    return {
                        setSeed: function (d) {
                            b = a = (null == d ? Math.random() * c : d) >>> 0
                        }, getSeed: function () {
                            return a
                        }, rand: function () {
                            return (b = (d * b + e) % c) / c
                        }
                    }
                }();
                b.setSeed(a), d = new Array(j + 1);
                for (var c = 0; c < j + 1; c++) d[c] = b.rand()
            }, b.exports = e
        }, {"../core/core": 42}],
        71: [function (a, b, c) {
            "use strict";
            var d = a("../core/core"), e = a("./polargeometry"), f = a("../core/constants");
            d.Vector = function () {
                var a, b, c;
                arguments[0] instanceof d ? (this.p5 = arguments[0], a = arguments[1][0] || 0, b = arguments[1][1] || 0, c = arguments[1][2] || 0) : (a = arguments[0] || 0, b = arguments[1] || 0, c = arguments[2] || 0), this.x = a, this.y = b, this.z = c
            }, d.Vector.prototype.toString = function () {
                return "p5.Vector Object : [" + this.x + ", " + this.y + ", " + this.z + "]"
            }, d.Vector.prototype.set = function (a, b, c) {
                return a instanceof d.Vector ? (this.x = a.x || 0, this.y = a.y || 0, this.z = a.z || 0, this) : a instanceof Array ? (this.x = a[0] || 0, this.y = a[1] || 0, this.z = a[2] || 0, this) : (this.x = a || 0, this.y = b || 0, this.z = c || 0, this)
            }, d.Vector.prototype.copy = function () {
                return this.p5 ? new d.Vector(this.p5, [this.x, this.y, this.z]) : new d.Vector(this.x, this.y, this.z)
            }, d.Vector.prototype.add = function (a, b, c) {
                return a instanceof d.Vector ? (this.x += a.x || 0, this.y += a.y || 0, this.z += a.z || 0, this) : a instanceof Array ? (this.x += a[0] || 0, this.y += a[1] || 0, this.z += a[2] || 0, this) : (this.x += a || 0, this.y += b || 0, this.z += c || 0, this)
            }, d.Vector.prototype.sub = function (a, b, c) {
                return a instanceof d.Vector ? (this.x -= a.x || 0, this.y -= a.y || 0, this.z -= a.z || 0, this) : a instanceof Array ? (this.x -= a[0] || 0, this.y -= a[1] || 0, this.z -= a[2] || 0, this) : (this.x -= a || 0, this.y -= b || 0, this.z -= c || 0, this)
            }, d.Vector.prototype.mult = function (a) {
                return this.x *= a || 0, this.y *= a || 0, this.z *= a || 0, this
            }, d.Vector.prototype.div = function (a) {
                return this.x /= a, this.y /= a, this.z /= a, this
            }, d.Vector.prototype.mag = function () {
                return Math.sqrt(this.magSq())
            }, d.Vector.prototype.magSq = function () {
                var a = this.x, b = this.y, c = this.z;
                return a * a + b * b + c * c
            }, d.Vector.prototype.dot = function (a, b, c) {
                return a instanceof d.Vector ? this.dot(a.x, a.y, a.z) : this.x * (a || 0) + this.y * (b || 0) + this.z * (c || 0)
            }, d.Vector.prototype.cross = function (a) {
                var b = this.y * a.z - this.z * a.y, c = this.z * a.x - this.x * a.z, e = this.x * a.y - this.y * a.x;
                return this.p5 ? new d.Vector(this.p5, [b, c, e]) : new d.Vector(b, c, e)
            }, d.Vector.prototype.dist = function (a) {
                return a.copy().sub(this).mag()
            }, d.Vector.prototype.normalize = function () {
                return 0 === this.mag() ? this : this.div(this.mag())
            }, d.Vector.prototype.limit = function (a) {
                var b = this.magSq();
                return b > a * a && (this.div(Math.sqrt(b)), this.mult(a)), this
            }, d.Vector.prototype.setMag = function (a) {
                return this.normalize().mult(a)
            }, d.Vector.prototype.heading = function () {
                var a = Math.atan2(this.y, this.x);
                return this.p5 ? this.p5._angleMode === f.RADIANS ? a : e.radiansToDegrees(a) : a
            }, d.Vector.prototype.rotate = function (a) {
                var b = this.heading() + a;
                this.p5 && this.p5._angleMode === f.DEGREES && (b = e.degreesToRadians(b));
                var c = this.mag();
                return this.x = Math.cos(b) * c, this.y = Math.sin(b) * c, this
            }, d.Vector.prototype.angleBetween = function (a) {
                var b = Math.acos(this.dot(a) / (this.mag() * a.mag()));
                return this.p5 && this.p5._angleMode === f.DEGREES && (b = e.radiansToDegrees(b)), b
            }, d.Vector.prototype.lerp = function (a, b, c, e) {
                return a instanceof d.Vector ? this.lerp(a.x, a.y, a.z, b) : (this.x += (a - this.x) * e || 0, this.y += (b - this.y) * e || 0, this.z += (c - this.z) * e || 0, this)
            }, d.Vector.prototype.array = function () {
                return [this.x || 0, this.y || 0, this.z || 0]
            }, d.Vector.prototype.equals = function (a, b, c) {
                var e, f, g;
                return a instanceof d.Vector ? (e = a.x || 0, f = a.y || 0, g = a.z || 0) : a instanceof Array ? (e = a[0] || 0, f = a[1] || 0, g = a[2] || 0) : (e = a || 0, f = b || 0, g = c || 0), this.x === e && this.y === f && this.z === g
            }, d.Vector.fromAngle = function (a) {
                return this.p5 && this.p5._angleMode === f.DEGREES && (a = e.degreesToRadians(a)), this.p5 ? new d.Vector(this.p5, [Math.cos(a), Math.sin(a), 0]) : new d.Vector(Math.cos(a), Math.sin(a), 0)
            }, d.Vector.random2D = function () {
                var a;
                return a = this.p5 ? this.p5._angleMode === f.DEGREES ? this.p5.random(360) : this.p5.random(f.TWO_PI) : Math.random() * Math.PI * 2, this.fromAngle(a)
            }, d.Vector.random3D = function () {
                var a, b;
                this.p5 ? (a = this.p5.random(0, f.TWO_PI), b = this.p5.random(-1, 1)) : (a = Math.random() * Math.PI * 2, b = 2 * Math.random() - 1);
                var c = Math.sqrt(1 - b * b) * Math.cos(a), e = Math.sqrt(1 - b * b) * Math.sin(a);
                return this.p5 ? new d.Vector(this.p5, [c, e, b]) : new d.Vector(c, e, b)
            }, d.Vector.add = function (a, b, c) {
                return c ? c.set(a) : c = a.copy(), c.add(b), c
            }, d.Vector.sub = function (a, b, c) {
                return c ? c.set(a) : c = a.copy(), c.sub(b), c
            }, d.Vector.mult = function (a, b, c) {
                return c ? c.set(a) : c = a.copy(), c.mult(b), c
            }, d.Vector.div = function (a, b, c) {
                return c ? c.set(a) : c = a.copy(), c.div(b), c
            }, d.Vector.dot = function (a, b) {
                return a.dot(b)
            }, d.Vector.cross = function (a, b) {
                return a.cross(b)
            }, d.Vector.dist = function (a, b) {
                return a.dist(b)
            }, d.Vector.lerp = function (a, b, c, d) {
                return d ? d.set(a) : d = a.copy(), d.lerp(b, c), d
            }, d.Vector.mag = function (a) {
                var b = a.x, c = a.y, d = a.z, e = b * b + c * c + d * d;
                return Math.sqrt(e)
            }, b.exports = d.Vector
        }, {"../core/constants": 41, "../core/core": 42, "./polargeometry": 72}],
        72: [function (a, b, c) {
            b.exports = {
                degreesToRadians: function (a) {
                    return 2 * Math.PI * a / 360
                }, radiansToDegrees: function (a) {
                    return 360 * a / (2 * Math.PI)
                }
            }
        }, {}],
        73: [function (a, b, c) {
            "use strict";
            var d = a("../core/core"), e = !1, f = !1, g = 0, h = function () {
                var a, b, c = 4294967296, d = 1664525, e = 1013904223;
                return {
                    setSeed: function (d) {
                        b = a = (null == d ? Math.random() * c : d) >>> 0
                    }, getSeed: function () {
                        return a
                    }, rand: function () {
                        return (b = (d * b + e) % c) / c
                    }
                }
            }();
            d.prototype.randomSeed = function (a) {
                h.setSeed(a), e = !0, f = !1
            }, d.prototype.random = function (a, b) {
                var c;
                if (c = e ? h.rand() : Math.random(), void 0 === a) return c;
                if (void 0 === b) return a instanceof Array ? a[Math.floor(c * a.length)] : c * a;
                if (a > b) {
                    var d = a;
                    a = b, b = d
                }
                return c * (b - a) + a
            }, d.prototype.randomGaussian = function (a, b) {
                var c, d, e, h;
                if (f) c = g, f = !1; else {
                    do {
                        d = this.random(2) - 1, e = this.random(2) - 1, h = d * d + e * e
                    } while (h >= 1);
                    h = Math.sqrt(-2 * Math.log(h) / h), c = d * h, g = e * h, f = !0
                }
                var i = a || 0;
                return c * (b || 1) + i
            }, b.exports = d
        }, {"../core/core": 42}],
        74: [function (a, b, c) {
            "use strict";
            var d = a("../core/core"), e = a("./polargeometry"), f = a("../core/constants");
            d.prototype._angleMode = f.RADIANS, d.prototype.acos = function (a) {
                return this._angleMode === f.RADIANS ? Math.acos(a) : e.radiansToDegrees(Math.acos(a))
            }, d.prototype.asin = function (a) {
                return this._angleMode === f.RADIANS ? Math.asin(a) : e.radiansToDegrees(Math.asin(a))
            }, d.prototype.atan = function (a) {
                return this._angleMode === f.RADIANS ? Math.atan(a) : e.radiansToDegrees(Math.atan(a))
            }, d.prototype.atan2 = function (a, b) {
                return this._angleMode === f.RADIANS ? Math.atan2(a, b) : e.radiansToDegrees(Math.atan2(a, b))
            }, d.prototype.cos = function (a) {
                return this._angleMode === f.RADIANS ? Math.cos(a) : Math.cos(this.radians(a))
            }, d.prototype.sin = function (a) {
                return this._angleMode === f.RADIANS ? Math.sin(a) : Math.sin(this.radians(a))
            }, d.prototype.tan = function (a) {
                return this._angleMode === f.RADIANS ? Math.tan(a) : Math.tan(this.radians(a))
            }, d.prototype.degrees = function (a) {
                return e.radiansToDegrees(a)
            }, d.prototype.radians = function (a) {
                return e.degreesToRadians(a)
            }, d.prototype.angleMode = function (a) {
                a !== f.DEGREES && a !== f.RADIANS || (this._angleMode = a)
            }, b.exports = d
        }, {"../core/constants": 41, "../core/core": 42, "./polargeometry": 72}],
        75: [function (a, b, c) {
            "use strict";
            var d = a("../core/core");
            d.prototype.textAlign = function (a, b) {
                return this._renderer.textAlign.apply(this._renderer, arguments)
            }, d.prototype.textLeading = function (a) {
                return this._renderer.textLeading.apply(this._renderer, arguments)
            }, d.prototype.textSize = function (a) {
                return this._renderer.textSize.apply(this._renderer, arguments)
            }, d.prototype.textStyle = function (a) {
                return this._renderer.textStyle.apply(this._renderer, arguments)
            }, d.prototype.textWidth = function (a) {
                return 0 === a.length ? 0 : this._renderer.textWidth.apply(this._renderer, arguments)
            }, d.prototype.textAscent = function () {
                return this._renderer.textAscent()
            }, d.prototype.textDescent = function () {
                return this._renderer.textDescent()
            }, d.prototype._updateTextMetrics = function () {
                return this._renderer._updateTextMetrics()
            }, b.exports = d
        }, {"../core/core": 42}],
        76: [function (a, b, c) {
            "use strict";
            var d = a("../core/core"), e = a("../core/constants");
            a("../core/error_helpers"), d.prototype.text = function (a, b, c, d, e) {
                return this._renderer._doFill || this._renderer._doStroke ? this._renderer.text.apply(this._renderer, arguments) : this
            }, d.prototype.textFont = function (a, b) {
                if (arguments.length) {
                    if (!a) throw Error("null font passed to textFont");
                    return this._renderer._setProperty("_textFont", a), b && (this._renderer._setProperty("_textSize", b), this._renderer._setProperty("_textLeading", b * e._DEFAULT_LEADMULT)), this._renderer._applyTextProperties()
                }
                return this._renderer._textFont
            }, b.exports = d
        }, {"../core/constants": 41, "../core/core": 42, "../core/error_helpers": 45}],
        77: [function (a, b, c) {
            "use strict";

            function d(a, b) {
                for (var c = h(b, {
                    sampleFactor: .1,
                    simplifyThreshold: 0
                }), d = n(a, 0, 1), f = d / (d * c.sampleFactor), g = [], i = 0; i < d; i += f) g.push(n(a, i));
                return c.simplifyThreshold && e(g, c.simplifyThreshold), g
            }

            function e(a, b) {
                b = void 0 === b ? 0 : b;
                for (var c = 0, d = a.length - 1; a.length > 3 && d >= 0; --d) j(i(a, d - 1), i(a, d), i(a, d + 1), b) && (a.splice(d % a.length, 1), c++);
                return c
            }

            function f(a) {
                for (var b, c = [], d = 0; d < a.length; d++) "M" === a[d].type && (b && c.push(b), b = []), b.push(g(a[d]));
                return c.push(b), c
            }

            function g(a) {
                var b = [a.type];
                return "M" === a.type || "L" === a.type ? b.push(a.x, a.y) : "C" === a.type ? b.push(a.x1, a.y1, a.x2, a.y2, a.x, a.y) : "Q" === a.type && b.push(a.x1, a.y1, a.x, a.y), b
            }

            function h(a, b) {
                if ("object" != typeof a) a = b; else for (var c in b) void 0 === a[c] && (a[c] = b[c]);
                return a
            }

            function i(a, b) {
                var c = a.length;
                return a[b < 0 ? b % c + c : b % c]
            }

            function j(a, b, c, d) {
                if (!d) return 0 === k(a, b, c);
                void 0 === j.tmpPoint1 && (j.tmpPoint1 = [], j.tmpPoint2 = []);
                var e = j.tmpPoint1, f = j.tmpPoint2;
                e.x = b.x - a.x, e.y = b.y - a.y, f.x = c.x - b.x, f.y = c.y - b.y;
                var g = e.x * f.x + e.y * f.y, h = Math.sqrt(e.x * e.x + e.y * e.y),
                    i = Math.sqrt(f.x * f.x + f.y * f.y);
                return Math.acos(g / (h * i)) < d
            }

            function k(a, b, c) {
                return (b[0] - a[0]) * (c[1] - a[1]) - (c[0] - a[0]) * (b[1] - a[1])
            }

            function l(a, b, c, d, e, f, g, h, i) {
                var j = 1 - i, k = Math.pow(j, 3), l = Math.pow(j, 2), m = i * i, n = m * i,
                    o = k * a + 3 * l * i * c + 3 * j * i * i * e + n * g,
                    p = k * b + 3 * l * i * d + 3 * j * i * i * f + n * h,
                    q = a + 2 * i * (c - a) + m * (e - 2 * c + a), r = b + 2 * i * (d - b) + m * (f - 2 * d + b),
                    s = c + 2 * i * (e - c) + m * (g - 2 * e + c), t = d + 2 * i * (f - d) + m * (h - 2 * f + d),
                    u = j * a + i * c, v = j * b + i * d, w = j * e + i * g, x = j * f + i * h,
                    y = 90 - 180 * Math.atan2(q - s, r - t) / Math.PI;
                return (q > s || r < t) && (y += 180), {
                    x: o,
                    y: p,
                    m: {x: q, y: r},
                    n: {x: s, y: t},
                    start: {x: u, y: v},
                    end: {x: w, y: x},
                    alpha: y
                }
            }

            function m(a, b, c, d, e, f, g, h, i) {
                return null == i ? u(a, b, c, d, e, f, g, h) : l(a, b, c, d, e, f, g, h, v(a, b, c, d, e, f, g, h, i))
            }

            function n(a, b, c) {
                a = p(a);
                for (var d, e, f, g, h, i = "", j = {}, k = 0, n = 0, o = a.length; n < o; n++) {
                    if (f = a[n], "M" === f[0]) d = +f[1], e = +f[2]; else {
                        if (g = m(d, e, f[1], f[2], f[3], f[4], f[5], f[6]), k + g > b && !c) return h = m(d, e, f[1], f[2], f[3], f[4], f[5], f[6], b - k), {
                            x: h.x,
                            y: h.y,
                            alpha: h.alpha
                        };
                        k += g, d = +f[5], e = +f[6]
                    }
                    i += f.shift() + f
                }
                return j.end = i, h = c ? k : l(d, e, f[0], f[1], f[2], f[3], f[4], f[5], 1), h.alpha && (h = {
                    x: h.x,
                    y: h.y,
                    alpha: h.alpha
                }), h
            }

            function o(a) {
                var b = [], c = 0, d = 0, e = 0, f = 0, g = 0;
                "M" === a[0][0] && (c = +a[0][1], d = +a[0][2], e = c, f = d, g++, b[0] = ["M", c, d]);
                for (var h, i, j, k = 3 === a.length && "M" === a[0][0] && "R" === a[1][0].toUpperCase() && "Z" === a[2][0].toUpperCase(), l = g, m = a.length; l < m; l++) {
                    if (b.push(i = []), j = a[l], j[0] !== String.prototype.toUpperCase.call(j[0])) switch (i[0] = String.prototype.toUpperCase.call(j[0]), i[0]) {
                        case"A":
                            i[1] = j[1], i[2] = j[2], i[3] = j[3], i[4] = j[4], i[5] = j[5], i[6] = +(j[6] + c), i[7] = +(j[7] + d);
                            break;
                        case"V":
                            i[1] = +j[1] + d;
                            break;
                        case"H":
                            i[1] = +j[1] + c;
                            break;
                        case"R":
                            h = [c, d].concat(j.slice(1));
                            for (var n = 2, o = h.length; n < o; n++) h[n] = +h[n] + c, h[++n] = +h[n] + d;
                            b.pop(), b = b.concat(r(h, k));
                            break;
                        case"M":
                            e = +j[1] + c, f = +j[2] + d;
                            break;
                        default:
                            for (n = 1, o = j.length; n < o; n++) i[n] = +j[n] + (n % 2 ? c : d)
                    } else if ("R" === j[0]) h = [c, d].concat(j.slice(1)), b.pop(), b = b.concat(r(h, k)), i = ["R"].concat(j.slice(-2)); else for (var p = 0, q = j.length; p < q; p++) i[p] = j[p];
                    switch (i[0]) {
                        case"Z":
                            c = e, d = f;
                            break;
                        case"H":
                            c = i[1];
                            break;
                        case"V":
                            d = i[1];
                            break;
                        case"M":
                            e = i[i.length - 2], f = i[i.length - 1];
                            break;
                        default:
                            c = i[i.length - 2], d = i[i.length - 1]
                    }
                }
                return b
            }

            function p(a, b) {
                for (var c = o(a), d = b && o(b), e = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                }, f = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null}, g = (function (a, b, c) {
                    var d, e, f = {T: 1, Q: 1};
                    if (!a) return ["C", b.x, b.y, b.x, b.y, b.x, b.y];
                    switch (a[0] in f || (b.qx = b.qy = null), a[0]) {
                        case"M":
                            b.X = a[1], b.Y = a[2];
                            break;
                        case"A":
                            a = ["C"].concat(q.apply(0, [b.x, b.y].concat(a.slice(1))));
                            break;
                        case"S":
                            "C" === c || "S" === c ? (d = 2 * b.x - b.bx, e = 2 * b.y - b.by) : (d = b.x, e = b.y), a = ["C", d, e].concat(a.slice(1));
                            break;
                        case"T":
                            "Q" === c || "T" === c ? (b.qx = 2 * b.x - b.qx, b.qy = 2 * b.y - b.qy) : (b.qx = b.x, b.qy = b.y), a = ["C"].concat(t(b.x, b.y, b.qx, b.qy, a[1], a[2]));
                            break;
                        case"Q":
                            b.qx = a[1], b.qy = a[2], a = ["C"].concat(t(b.x, b.y, a[1], a[2], a[3], a[4]));
                            break;
                        case"L":
                            a = ["C"].concat(s(b.x, b.y, a[1], a[2]));
                            break;
                        case"H":
                            a = ["C"].concat(s(b.x, b.y, a[1], b.y));
                            break;
                        case"V":
                            a = ["C"].concat(s(b.x, b.y, b.x, a[1]));
                            break;
                        case"Z":
                            a = ["C"].concat(s(b.x, b.y, b.X, b.Y))
                    }
                    return a
                }), h = function (a, b) {
                    if (a[b].length > 7) {
                        a[b].shift();
                        for (var e = a[b]; e.length;) j[b] = "A", d && (k[b] = "A"), a.splice(b++, 0, ["C"].concat(e.splice(0, 6)));
                        a.splice(b, 1), p = Math.max(c.length, d && d.length || 0)
                    }
                }, i = function (a, b, e, f, g) {
                    a && b && "M" === a[g][0] && "M" !== b[g][0] && (b.splice(g, 0, ["M", f.x, f.y]), e.bx = 0, e.by = 0, e.x = a[g][1], e.y = a[g][2], p = Math.max(c.length, d && d.length || 0))
                }, j = [], k = [], l = "", m = "", n = 0, p = Math.max(c.length, d && d.length || 0); n < p; n++) {
                    c[n] && (l = c[n][0]), "C" !== l && (j[n] = l, n && (m = j[n - 1])), c[n] = g(c[n], e, m), "A" !== j[n] && "C" === l && (j[n] = "C"), h(c, n), d && (d[n] && (l = d[n][0]), "C" !== l && (k[n] = l, n && (m = k[n - 1])), d[n] = g(d[n], f, m), "A" !== k[n] && "C" === l && (k[n] = "C"), h(d, n)), i(c, d, e, f, n), i(d, c, f, e, n);
                    var r = c[n], u = d && d[n], v = r.length, w = d && u.length;
                    e.x = r[v - 2], e.y = r[v - 1], e.bx = parseFloat(r[v - 4]) || e.x, e.by = parseFloat(r[v - 3]) || e.y, f.bx = d && (parseFloat(u[w - 4]) || f.x), f.by = d && (parseFloat(u[w - 3]) || f.y), f.x = d && u[w - 2], f.y = d && u[w - 1]
                }
                return d ? [c, d] : c
            }

            function q(a, b, c, d, e, f, g, h, i, j) {
                var k, l, m, n, o, p = Math.PI, r = 120 * p / 180, s = p / 180 * (+e || 0), t = [],
                    u = function (a, b, c) {
                        return {x: a * Math.cos(c) - b * Math.sin(c), y: a * Math.sin(c) + b * Math.cos(c)}
                    };
                if (j) k = j[0], l = j[1], m = j[2], n = j[3]; else {
                    o = u(a, b, -s), a = o.x, b = o.y, o = u(h, i, -s), h = o.x, i = o.y;
                    var v = (a - h) / 2, w = (b - i) / 2, x = v * v / (c * c) + w * w / (d * d);
                    x > 1 && (x = Math.sqrt(x), c *= x, d *= x);
                    var y = c * c, z = d * d,
                        A = (f === g ? -1 : 1) * Math.sqrt(Math.abs((y * z - y * w * w - z * v * v) / (y * w * w + z * v * v)));
                    m = A * c * w / d + (a + h) / 2, n = A * -d * v / c + (b + i) / 2, k = Math.asin(((b - n) / d).toFixed(9)), l = Math.asin(((i - n) / d).toFixed(9)), k = a < m ? p - k : k, l = h < m ? p - l : l, k < 0 && (k = 2 * p + k), l < 0 && (l = 2 * p + l), g && k > l && (k -= 2 * p), !g && l > k && (l -= 2 * p)
                }
                var B = l - k;
                if (Math.abs(B) > r) {
                    var C = l, D = h, E = i;
                    l = k + r * (g && l > k ? 1 : -1), h = m + c * Math.cos(l), i = n + d * Math.sin(l), t = q(h, i, c, d, e, 0, g, D, E, [l, C, m, n])
                }
                B = l - k;
                var F = Math.cos(k), G = Math.sin(k), H = Math.cos(l), I = Math.sin(l), J = Math.tan(B / 4),
                    K = 4 / 3 * c * J, L = 4 / 3 * d * J, M = [a, b], N = [a + K * G, b - L * F],
                    O = [h + K * I, i - L * H], P = [h, i];
                if (N[0] = 2 * M[0] - N[0], N[1] = 2 * M[1] - N[1], j) return [N, O, P].concat(t);
                t = [N, O, P].concat(t).join().split(",");
                for (var Q = [], R = 0, S = t.length; R < S; R++) Q[R] = R % 2 ? u(t[R - 1], t[R], s).y : u(t[R], t[R + 1], s).x;
                return Q
            }

            function r(a, b) {
                for (var c = [], d = 0, e = a.length; e - 2 * !b > d; d += 2) {
                    var f = [{x: +a[d - 2], y: +a[d - 1]}, {x: +a[d], y: +a[d + 1]}, {
                        x: +a[d + 2],
                        y: +a[d + 3]
                    }, {x: +a[d + 4], y: +a[d + 5]}];
                    b ? d ? e - 4 === d ? f[3] = {x: +a[0], y: +a[1]} : e - 2 === d && (f[2] = {
                        x: +a[0],
                        y: +a[1]
                    }, f[3] = {x: +a[2], y: +a[3]}) : f[0] = {
                        x: +a[e - 2],
                        y: +a[e - 1]
                    } : e - 4 === d ? f[3] = f[2] : d || (f[0] = {
                        x: +a[d],
                        y: +a[d + 1]
                    }), c.push(["C", (-f[0].x + 6 * f[1].x + f[2].x) / 6, (-f[0].y + 6 * f[1].y + f[2].y) / 6, (f[1].x + 6 * f[2].x - f[3].x) / 6, (f[1].y + 6 * f[2].y - f[3].y) / 6, f[2].x, f[2].y])
                }
                return c
            }

            function s(a, b, c, d) {
                return [a, b, c, d, c, d]
            }

            function t(a, b, c, d, e, f) {
                var g = 1 / 3, h = 2 / 3;
                return [g * a + h * c, g * b + h * d, g * e + h * c, g * f + h * d, e, f]
            }

            function u(a, b, c, d, e, f, g, h, i) {
                null == i && (i = 1), i = i > 1 ? 1 : i < 0 ? 0 : i;
                for (var j = i / 2, k = 12, l = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], m = 0, n = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], o = 0; o < k; o++) {
                    var p = j * l[o] + j, q = w(p, a, c, e, g), r = w(p, b, d, f, h), s = q * q + r * r;
                    m += n[o] * Math.sqrt(s)
                }
                return j * m
            }

            function v(a, b, c, d, e, f, g, h, i) {
                if (!(i < 0 || u(a, b, c, d, e, f, g, h) < i)) {
                    var j, k = 1, l = k / 2, m = k - l, n = .01;
                    for (j = u(a, b, c, d, e, f, g, h, m); Math.abs(j - i) > n;) l /= 2, m += (j < i ? 1 : -1) * l, j = u(a, b, c, d, e, f, g, h, m);
                    return m
                }
            }

            function w(a, b, c, d, e) {
                return a * (a * (-3 * b + 9 * c - 9 * d + 3 * e) + 6 * b - 12 * c + 6 * d) - 3 * b + 3 * c
            }

            function x() {
                for (var a = new Array(arguments.length), b = 0; b < a.length; ++b) a[b] = arguments[b];
                b = a.length;
                for (var c = ""; b--;) c += a[b] === Object(a[b]) ? JSON.stringify(a[b]) : a[b];
                return c
            }

            var y = a("../core/core"), z = a("../core/constants");
            y.Font = function (a) {
                this.parent = a, this.cache = {}, this.font = void 0
            }, y.Font.prototype.list = function () {
                throw"not yet implemented"
            }, y.Font.prototype.textBounds = function (a, b, c, d, e) {
                b = void 0 !== b ? b : 0, c = void 0 !== c ? c : 0, d = d || this.parent._renderer._textSize;
                var f = e && e.renderer && e.renderer._pInst || this.parent, g = f._renderer.drawingContext,
                    h = g.textAlign || z.LEFT, i = g.textBaseline || z.BASELINE,
                    j = this.cache[x("textBounds", a, b, c, d, h, i)];
                if (!j) {
                    var k, l, m, n, o = [], p = [], q = this, r = this._scale(d);
                    this.font.forEachGlyph(a, b, c, d, e, function (a, b, c, e) {
                        o.push(b), p.push(c);
                        var f = a.getMetrics();
                        "space" !== a.name && 32 !== a.unicode ? (o.push(b + f.xMax * r), p.push(c + -f.yMin * r), p.push(c + -f.yMax * r)) : o.push(b + q.font.charToGlyph(" ").advanceWidth * q._scale(d))
                    }), k = Math.min.apply(null, o), l = Math.min.apply(null, p), m = Math.max.apply(null, o), n = Math.max.apply(null, p), j = {
                        x: k,
                        y: l,
                        h: n - l,
                        w: m - k,
                        advance: k - b
                    };
                    var s = j.w + j.advance, t = this._handleAlignment(f, g, a, j.x, j.y, s);
                    j.x = t.x, j.y = t.y, this.cache[x("textBounds", a, b, c, d, h, i)] = j
                }
                return j
            }, y.Font.prototype.textToPoints = function (a, b, c, e, g) {
                var h = 0, i = [], j = this._getGlyphs(a);
                e = e || this.parent._renderer._textSize;
                for (var k = 0; k < j.length; k++) {
                    if ("space" !== j[k].name) for (var l = j[k].getPath(b, c, e), m = f(l.commands), n = 0; n < m.length; n++) for (var o = d(m[n], g), p = 0; p < o.length; p++) o[p].x += h, i.push(o[p]);
                    h += j[k].advanceWidth * this._scale(e)
                }
                return i
            }, y.Font.prototype._getGlyphs = function (a) {
                return this.font.stringToGlyphs(a)
            }, y.Font.prototype._getPath = function (a, b, c, d) {
                var e = d && d.renderer && d.renderer._pInst || this.parent, f = e._renderer.drawingContext,
                    g = this._handleAlignment(e, f, a, b, c);
                return this.font.getPath(a, g.x, g.y, e._renderer._textSize, d)
            }, y.Font.prototype._getPathData = function (a, b, c, d) {
                var e = 3;
                return "string" == typeof a && arguments.length > 2 ? a = this._getPath(a, b, c, d) : "object" == typeof b && (d = b), d && "number" == typeof d.decimals && (e = d.decimals), a.toPathData(e)
            }, y.Font.prototype._getSVG = function (a, b, c, d) {
                var e = 3;
                return "string" == typeof a && arguments.length > 2 ? a = this._getPath(a, b, c, d) : "object" == typeof b && (d = b), d && ("number" == typeof d.decimals && (e = d.decimals), "number" == typeof d.strokeWidth && (a.strokeWidth = d.strokeWidth), void 0 !== d.fill && (a.fill = d.fill), void 0 !== d.stroke && (a.stroke = d.stroke)), a.toSVG(e)
            }, y.Font.prototype._renderPath = function (a, b, c, d) {
                var e, f = d && d.renderer || this.parent._renderer, g = f.drawingContext;
                e = "object" == typeof a && a.commands ? a.commands : this._getPath(a, b, c, d).commands, g.beginPath();
                for (var h = 0; h < e.length; h += 1) {
                    var i = e[h];
                    "M" === i.type ? g.moveTo(i.x, i.y) : "L" === i.type ? g.lineTo(i.x, i.y) : "C" === i.type ? g.bezierCurveTo(i.x1, i.y1, i.x2, i.y2, i.x, i.y) : "Q" === i.type ? g.quadraticCurveTo(i.x1, i.y1, i.x, i.y) : "Z" === i.type && g.closePath()
                }
                return f._doStroke && f._strokeSet && g.stroke(), f._doFill && (g.fillStyle = f._fillSet ? g.fillStyle : z._DEFAULT_TEXT_FILL, g.fill()), this
            }, y.Font.prototype._textWidth = function (a, b) {
                if (" " === a) return this.font.charToGlyph(" ").advanceWidth * this._scale(b);
                var c = this.textBounds(a, 0, 0, b);
                return c.w + c.advance
            }, y.Font.prototype._textAscent = function (a) {
                return this.font.ascender * this._scale(a)
            }, y.Font.prototype._textDescent = function (a) {
                return -this.font.descender * this._scale(a)
            }, y.Font.prototype._scale = function (a) {
                return 1 / this.font.unitsPerEm * (a || this.parent._renderer._textSize)
            }, y.Font.prototype._handleAlignment = function (a, b, c, d, e, f) {
                var g = a._renderer._textSize, h = this._textAscent(g), i = this._textDescent(g);
                return f = void 0 !== f ? f : this._textWidth(c, g), b.textAlign === z.CENTER ? d -= f / 2 : b.textAlign === z.RIGHT && (d -= f), b.textBaseline === z.TOP ? e += h : b.textBaseline === z._CTX_MIDDLE ? e += h / 2 : b.textBaseline === z.BOTTOM && (e -= i), {
                    x: d,
                    y: e
                }
            }, b.exports = y.Font
        }, {"../core/constants": 41, "../core/core": 42}],
        78: [function (a, b, c) {
            "use strict";
            var d = a("../core/core");
            d.prototype.append = function (a, b) {
                return a.push(b), a
            }, d.prototype.arrayCopy = function (a, b, c, d, e) {
                var f, g;
                void 0 !== e ? (g = Math.min(e, a.length), f = d, a = a.slice(b, g + b)) : (void 0 !== c ? (g = c, g = Math.min(g, a.length)) : g = a.length, f = 0, c = b, a = a.slice(0, g)), Array.prototype.splice.apply(c, [f, g].concat(a))
            }, d.prototype.concat = function (a, b) {
                return a.concat(b)
            }, d.prototype.reverse = function (a) {
                return a.reverse()
            }, d.prototype.shorten = function (a) {
                return a.pop(), a
            }, d.prototype.shuffle = function (a, b) {
                var c = ArrayBuffer && ArrayBuffer.isView && ArrayBuffer.isView(a);
                a = b || c ? a : a.slice();
                for (var d, e, f = a.length; f > 1;) d = Math.random() * f | 0, e = a[--f], a[f] = a[d], a[d] = e;
                return a
            }, d.prototype.sort = function (a, b) {
                var c = b ? a.slice(0, Math.min(b, a.length)) : a, d = b ? a.slice(Math.min(b, a.length)) : [];
                return c = "string" == typeof c[0] ? c.sort() : c.sort(function (a, b) {
                    return a - b
                }), c.concat(d)
            }, d.prototype.splice = function (a, b, c) {
                return Array.prototype.splice.apply(a, [c, 0].concat(b)), a
            }, d.prototype.subset = function (a, b, c) {
                return void 0 !== c ? a.slice(b, b + c) : a.slice(b, a.length)
            }, b.exports = d
        }, {"../core/core": 42}],
        79: [function (a, b, c) {
            "use strict";
            var d = a("../core/core");
            d.prototype.float = function (a) {
                return a instanceof Array ? a.map(parseFloat) : parseFloat(a)
            }, d.prototype.int = function (a, b) {
                return b = b || 10, "string" == typeof a ? parseInt(a, b) : "number" == typeof a ? 0 | a : "boolean" == typeof a ? a ? 1 : 0 : a instanceof Array ? a.map(function (a) {
                    return d.prototype.int(a, b)
                }) : void 0
            }, d.prototype.str = function (a) {
                return a instanceof Array ? a.map(d.prototype.str) : String(a)
            }, d.prototype.boolean = function (a) {
                return "number" == typeof a ? 0 !== a : "string" == typeof a ? "true" === a.toLowerCase() : "boolean" == typeof a ? a : a instanceof Array ? a.map(d.prototype.boolean) : void 0
            }, d.prototype.byte = function (a) {
                var b = d.prototype.int(a, 10);
                return "number" == typeof b ? (b + 128) % 256 - 128 : b instanceof Array ? b.map(d.prototype.byte) : void 0
            }, d.prototype.char = function (a) {
                return "number" != typeof a || isNaN(a) ? a instanceof Array ? a.map(d.prototype.char) : "string" == typeof a ? d.prototype.char(parseInt(a, 10)) : void 0 : String.fromCharCode(a)
            }, d.prototype.unchar = function (a) {
                return "string" == typeof a && 1 === a.length ? a.charCodeAt(0) : a instanceof Array ? a.map(d.prototype.unchar) : void 0
            }, d.prototype.hex = function (a, b) {
                if (b = void 0 === b || null === b ? b = 8 : b, a instanceof Array) return a.map(function (a) {
                    return d.prototype.hex(a, b)
                });
                if ("number" == typeof a) {
                    a < 0 && (a = 4294967295 + a + 1);
                    for (var c = Number(a).toString(16).toUpperCase(); c.length < b;) c = "0" + c;
                    return c.length >= b && (c = c.substring(c.length - b, c.length)), c
                }
            }, d.prototype.unhex = function (a) {
                return a instanceof Array ? a.map(d.prototype.unhex) : parseInt("0x" + a, 16)
            }, b.exports = d
        }, {"../core/core": 42}],
        80: [function (a, b, c) {
            "use strict";

            function d() {
                var a = arguments[0], b = a < 0, c = b ? a.toString().substring(1) : a.toString(), d = c.indexOf("."),
                    e = d !== -1 ? c.substring(0, d) : c, f = d !== -1 ? c.substring(d + 1) : "", g = b ? "-" : "";
                if (3 === arguments.length) {
                    var h = "";
                    (d !== -1 || arguments[2] - f.length > 0) && (h = "."), f.length > arguments[2] && (f = f.substring(0, arguments[2]));
                    for (var i = 0; i < arguments[1] - e.length; i++) g += "0";
                    g += e, g += h, g += f;
                    for (var j = 0; j < arguments[2] - f.length; j++) g += "0";
                    return g
                }
                for (var k = 0; k < Math.max(arguments[1] - e.length, 0); k++) g += "0";
                return g += c
            }

            function e() {
                var a = arguments[0].toString(), b = a.indexOf("."), c = b !== -1 ? a.substring(b) : "",
                    d = b !== -1 ? a.substring(0, b) : a;
                if (d = d.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 0 === arguments[1]) c = ""; else if (void 0 !== arguments[1]) if (arguments[1] > c.length) {
                    c += b === -1 ? "." : "";
                    for (var e = arguments[1] - c.length + 1, f = 0; f < e; f++) c += "0"
                } else c = c.substring(0, arguments[1] + 1);
                return d + c
            }

            function f() {
                return parseFloat(arguments[0]) > 0 ? "+" + arguments[0].toString() : arguments[0].toString()
            }

            function g() {
                return parseFloat(arguments[0]) > 0 ? " " + arguments[0].toString() : arguments[0].toString()
            }

            var h = a("../core/core");
            h.prototype.join = function (a, b) {
                return a.join(b)
            }, h.prototype.match = function (a, b) {
                return a.match(b)
            }, h.prototype.matchAll = function (a, b) {
                for (var c = new RegExp(b, "g"), d = c.exec(a), e = []; null !== d;) e.push(d), d = c.exec(a);
                return e
            }, h.prototype.nf = function () {
                if (arguments[0] instanceof Array) {
                    var a = arguments[1], b = arguments[2];
                    return arguments[0].map(function (c) {
                        return d(c, a, b)
                    })
                }
                return "[object Arguments]" === Object.prototype.toString.call(arguments[0]) ? 3 === arguments[0].length ? this.nf(arguments[0][0], arguments[0][1], arguments[0][2]) : 2 === arguments[0].length ? this.nf(arguments[0][0], arguments[0][1]) : this.nf(arguments[0][0]) : d.apply(this, arguments)
            }, h.prototype.nfc = function () {
                if (arguments[0] instanceof Array) {
                    var a = arguments[1];
                    return arguments[0].map(function (b) {
                        return e(b, a)
                    })
                }
                return e.apply(this, arguments)
            }, h.prototype.nfp = function () {
                var a = this.nf.apply(this, arguments);
                return a instanceof Array ? a.map(f) : f(a)
            }, h.prototype.nfs = function () {
                var a = this.nf.apply(this, arguments);
                return a instanceof Array ? a.map(g) : g(a)
            }, h.prototype.split = function (a, b) {
                return a.split(b)
            }, h.prototype.splitTokens = function () {
                var a, b, c, d;
                return d = arguments[1], arguments.length > 1 ? (c = /\]/g.exec(d), b = /\[/g.exec(d), b && c ? (d = d.slice(0, c.index) + d.slice(c.index + 1), b = /\[/g.exec(d), d = d.slice(0, b.index) + d.slice(b.index + 1), a = new RegExp("[\\[" + d + "\\]]", "g")) : c ? (d = d.slice(0, c.index) + d.slice(c.index + 1), a = new RegExp("[" + d + "\\]]", "g")) : b ? (d = d.slice(0, b.index) + d.slice(b.index + 1), a = new RegExp("[" + d + "\\[]", "g")) : a = new RegExp("[" + d + "]", "g")) : a = /\s/g, arguments[0].split(a).filter(function (a) {
                    return a
                })
            }, h.prototype.trim = function (a) {
                return a instanceof Array ? a.map(this.trim) : a.trim()
            }, b.exports = h
        }, {"../core/core": 42}],
        81: [function (a, b, c) {
            "use strict";
            var d = a("../core/core");
            d.prototype.day = function () {
                return (new Date).getDate()
            }, d.prototype.hour = function () {
                return (new Date).getHours()
            }, d.prototype.minute = function () {
                return (new Date).getMinutes()
            }, d.prototype.millis = function () {
                return window.performance.now()
            }, d.prototype.month = function () {
                return (new Date).getMonth() + 1
            }, d.prototype.second = function () {
                return (new Date).getSeconds()
            }, d.prototype.year = function () {
                return (new Date).getFullYear()
            }, b.exports = d
        }, {"../core/core": 42}],
        82: [function (a, b, c) {
            "use strict";
            var d = a("../core/core");
            d.prototype.camera = function (a, b, c) {
                this._renderer.translate(-a, -b, -c)
            }, d.prototype.perspective = function (a, b, c, e) {
                a = a || 60 / 180 * this.PI, b = b || this.width / this.height, c = c || this.height / 2 / this.tan(a / 2) * .1, e = e || this.height / 2 / this.tan(a / 2) * 10, this._renderer.uPMatrix = d.Matrix.identity(), this._renderer.uPMatrix.perspective(a, b, c, e), this._renderer._curCamera = "custom"
            }, d.prototype.ortho = function (a, b, c, e, f, g) {
                a = a || -this.width / 2, b = b || this.width / 2, c = c || -this.height / 2, e = e || this.height / 2, f = f || 0, g = g || Math.max(this.width, this.height), this._renderer.uPMatrix = d.Matrix.identity(), this._renderer.uPMatrix.ortho(a, b, c, e, f, g), this._renderer._curCamera = "custom"
            }, b.exports = d
        }, {"../core/core": 42}],
        83: [function (a, b, c) {
            "use strict";
            var d = a("../core/core");
            d.prototype.orbitControl = function () {
                return this.mouseIsPressed && (this.rotateY((this.mouseX - this.width / 2) / (this.width / 2)), this.rotateX((this.mouseY - this.height / 2) / (this.width / 2))), this
            }, b.exports = d
        }, {"../core/core": 42}],
        84: [function (a, b, c) {
            "use strict";
            var d = a("../core/core");
            d.prototype.ambientLight = function (a, b, c, d) {
                var e = this._renderer.GL, f = this._renderer._getShader("lightVert", "lightTextureFrag");
                e.useProgram(f), f.uAmbientColor = e.getUniformLocation(f, "uAmbientColor[" + this._renderer.ambientLightCount + "]");
                var g = this._renderer._pInst.color.apply(this._renderer._pInst, arguments), h = g._array;
                return e.uniform3f(f.uAmbientColor, h[0], h[1], h[2]), f.uMaterialColor = e.getUniformLocation(f, "uMaterialColor"), e.uniform4f(f.uMaterialColor, 1, 1, 1, 1), this._renderer.ambientLightCount++, f.uAmbientLightCount = e.getUniformLocation(f, "uAmbientLightCount"), e.uniform1i(f.uAmbientLightCount, this._renderer.ambientLightCount), this
            }, d.prototype.directionalLight = function (a, b, c, d, e, f, g) {
                var h = this._renderer.GL, i = this._renderer._getShader("lightVert", "lightTextureFrag");
                h.useProgram(i), i.uDirectionalColor = h.getUniformLocation(i, "uDirectionalColor[" + this._renderer.directionalLightCount + "]");
                var j = this._renderer._pInst.color.apply(this._renderer._pInst, [a, b, c]), k = j._array;
                h.uniform3f(i.uDirectionalColor, k[0], k[1], k[2]);
                for (var l, m, n, o = new Array(arguments.length), p = 0; p < o.length; ++p) o[p] = arguments[p];
                if ("number" == typeof o[o.length - 1]) l = o[o.length - 3], m = o[o.length - 2], n = o[o.length - 1]; else try {
                    l = o[o.length - 1].x, m = o[o.length - 1].y, n = o[o.length - 1].z
                } catch (a) {
                    throw a
                }
                return i.uLightingDirection = h.getUniformLocation(i, "uLightingDirection[" + this._renderer.directionalLightCount + "]"), h.uniform3f(i.uLightingDirection, l, m, n), i.uMaterialColor = h.getUniformLocation(i, "uMaterialColor"), h.uniform4f(i.uMaterialColor, 1, 1, 1, 1), this._renderer.directionalLightCount++, i.uDirectionalLightCount = h.getUniformLocation(i, "uDirectionalLightCount"), h.uniform1i(i.uDirectionalLightCount, this._renderer.directionalLightCount), this
            }, d.prototype.pointLight = function (a, b, c, d, e, f, g) {
                var h = this._renderer.GL, i = this._renderer._getShader("lightVert", "lightTextureFrag");
                h.useProgram(i), i.uPointLightColor = h.getUniformLocation(i, "uPointLightColor[" + this._renderer.pointLightCount + "]");
                var j = this._renderer._pInst.color.apply(this._renderer._pInst, [a, b, c]), k = j._array;
                h.uniform3f(i.uPointLightColor, k[0], k[1], k[2]);
                for (var l, m, n, o = new Array(arguments.length), p = 0; p < o.length; ++p) o[p] = arguments[p];
                if ("number" == typeof o[o.length - 1]) l = o[o.length - 3], m = o[o.length - 2], n = o[o.length - 1]; else try {
                    l = o[o.length - 1].x, m = o[o.length - 1].y, n = o[o.length - 1].z
                } catch (a) {
                    throw a
                }
                return i.uPointLightLocation = h.getUniformLocation(i, "uPointLightLocation[" + this._renderer.pointLightCount + "]"), h.uniform3f(i.uPointLightLocation, l, m, n), i.uMaterialColor = h.getUniformLocation(i, "uMaterialColor"), h.uniform4f(i.uMaterialColor, 1, 1, 1, 1), this._renderer.pointLightCount++, i.uPointLightCount = h.getUniformLocation(i, "uPointLightCount"), h.uniform1i(i.uPointLightCount, this._renderer.pointLightCount), this
            }, b.exports = d
        }, {"../core/core": 42}],
        85: [function (a, b, c) {
            "use strict";

            function d(a, b) {
                for (var c = {v: [], vt: [], vn: []}, d = {}, f = 0; f < b.length; ++f) {
                    var g = b[f].trim().split(/\b\s+/);
                    if (g.length > 0) if ("v" === g[0] || "vn" === g[0]) {
                        var h = new e.Vector(parseFloat(g[1]), parseFloat(g[2]), parseFloat(g[3]));
                        c[g[0]].push(h)
                    } else if ("vt" === g[0]) {
                        var i = [parseFloat(g[1]), parseFloat(g[2])];
                        c[g[0]].push(i)
                    } else if ("f" === g[0]) for (var j = 3; j < g.length; ++j) {
                        for (var k = [], l = [1, j - 1, j], m = 0; m < l.length; ++m) {
                            var n = g[l[m]], o = 0;
                            if (void 0 !== d[n]) o = d[n]; else {
                                for (var p = n.split("/"), q = 0; q < p.length; q++) p[q] = parseInt(p[q]) - 1;
                                o = d[n] = a.vertices.length, a.vertices.push(c.v[p[0]].copy()), c.vt[p[1]] ? a.uvs.push(c.vt[p[1]].slice()) : a.uvs.push([0, 0]), c.vn[p[2]] && a.vertexNormals.push(c.vn[p[2]].copy())
                            }
                            k.push(o)
                        }
                        a.faces.push(k)
                    }
                }
                return 0 === a.vertexNormals.length && a.computeNormals(), a
            }

            var e = a("../core/core");
            a("./p5.Geometry"), e.prototype.loadModel = function () {
                var a, b, c, f = arguments[0];
                "boolean" == typeof arguments[1] ? (a = arguments[1], b = arguments[2], c = arguments[3]) : (a = !1, b = arguments[1], c = arguments[2]);
                var g = new e.Geometry;
                return g.gid = f + "|" + a, this.loadStrings(f, function (c) {
                    d(g, c), a && g.normalize(), "function" == typeof b && b(g)
                }.bind(this), c), g
            }, e.prototype.model = function (a) {
                a.vertices.length > 0 && (this._renderer.geometryInHash(a.gid) || this._renderer.createBuffers(a.gid, a), this._renderer.drawBuffers(a.gid))
            }, b.exports = e
        }, {"../core/core": 42, "./p5.Geometry": 87}],
        86: [function (a, b, c) {
            "use strict";
            var d = a("../core/core");
            d.prototype.normalMaterial = function () {
                return this._renderer._getShader("normalVert", "normalFrag"), this
            }, d.prototype.texture = function () {
                for (var a = new Array(arguments.length), b = 0; b < a.length; ++b) a[b] = arguments[b];
                var c = this._renderer.GL;
                this._renderer.drawMode = "texture";
                var e = this._renderer._getShader("lightVert", "lightTextureFrag");
                c.useProgram(e);
                var f;
                if (a[0].isTexture) a[0] instanceof d.Graphics || void 0 !== d.MediaElement && a[0] instanceof d.MediaElement ? f = a[0].elt : a[0] instanceof d.Image && (f = a[0].canvas), this._renderer._bind.call(this, a[0].tex, f); else {
                    if (a[0] instanceof d.Image) f = a[0].canvas; else if (void 0 !== d.MediaElement && a[0] instanceof d.MediaElement) {
                        if (!a[0].loadedmetadata) return;
                        f = a[0].elt
                    } else a[0] instanceof d.Graphics && (f = a[0].elt);
                    var g = c.createTexture();
                    a[0]._setProperty("tex", g), a[0]._setProperty("isTexture", !0), this._renderer._bind.call(this, g, f)
                }
                return c.activeTexture(c.TEXTURE0), c.bindTexture(c.TEXTURE_2D, a[0].tex), c.uniform1i(c.getUniformLocation(e, "isTexture"), !0), c.uniform1i(c.getUniformLocation(e, "uSampler"), 0), this
            }, d.RendererGL.prototype._bind = function (a, b) {
                var c = this._renderer.GL;
                c.bindTexture(c.TEXTURE_2D, a), c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, !0), c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, c.RGBA, c.UNSIGNED_BYTE, b), c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, !0), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, c.LINEAR), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, c.LINEAR), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.CLAMP_TO_EDGE), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, c.CLAMP_TO_EDGE), c.bindTexture(c.TEXTURE_2D, null)
            }, d.prototype.ambientMaterial = function (a, b, c, d) {
                var e = this._renderer.GL, f = this._renderer._getShader("lightVert", "lightTextureFrag");
                e.useProgram(f), f.uMaterialColor = e.getUniformLocation(f, "uMaterialColor");
                var g = this._renderer._applyColorBlend.apply(this._renderer, arguments);
                return e.uniform4f(f.uMaterialColor, g[0], g[1], g[2], g[3]), f.uSpecular = e.getUniformLocation(f, "uSpecular"), e.uniform1i(f.uSpecular, !1), e.uniform1i(e.getUniformLocation(f, "isTexture"), !1), this
            }, d.prototype.specularMaterial = function (a, b, c, d) {
                var e = this._renderer.GL, f = this._renderer._getShader("lightVert", "lightTextureFrag");
                e.useProgram(f), e.uniform1i(e.getUniformLocation(f, "isTexture"), !1), f.uMaterialColor = e.getUniformLocation(f, "uMaterialColor");
                var g = this._renderer._applyColorBlend.apply(this._renderer, arguments);
                return e.uniform4f(f.uMaterialColor, g[0], g[1], g[2], g[3]), f.uSpecular = e.getUniformLocation(f, "uSpecular"), e.uniform1i(f.uSpecular, !0), this
            }, d.RendererGL.prototype._applyColorBlend = function (a, b, c, d) {
                var e = this.GL, f = this._pInst.color.apply(this._pInst, arguments), g = f._array;
                return g[g.length - 1] < 1 ? (e.depthMask(!1), e.enable(e.BLEND), e.blendEquation(e.FUNC_ADD), e.blendFunc(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA)) : (e.depthMask(!0), e.disable(e.BLEND)), g
            }, b.exports = d
        }, {"../core/core": 42}],
        87: [function (a, b, c) {
            "use strict";
            var d = a("../core/core");
            d.Geometry = function (a, b, c) {
                return this.vertices = [], this.vertexNormals = [], this.faces = [], this.uvs = [], this.detailX = void 0 !== a ? a : 1, this.detailY = void 0 !== b ? b : 1, c instanceof Function && c.call(this), this
            }, d.Geometry.prototype.computeFaces = function () {
                for (var a, b, c, d, e = this.detailX + 1, f = 0; f < this.detailY; f++) for (var g = 0; g < this.detailX; g++) a = f * e + g, b = f * e + g + 1, c = (f + 1) * e + g + 1, d = (f + 1) * e + g, this.faces.push([a, b, d]), this.faces.push([d, b, c]);
                return this
            }, d.Geometry.prototype._getFaceNormal = function (a, b) {
                var c = this.faces[a], e = this.vertices[c[b % 3]], f = this.vertices[c[(b + 1) % 3]],
                    g = this.vertices[c[(b + 2) % 3]], h = d.Vector.cross(d.Vector.sub(f, e), d.Vector.sub(g, e)),
                    i = d.Vector.mag(h) / (d.Vector.mag(d.Vector.sub(f, e)) * d.Vector.mag(d.Vector.sub(g, e)));
                return h = h.normalize(), h.mult(Math.asin(i))
            }, d.Geometry.prototype.computeNormals = function () {
                for (var a = 0; a < this.vertices.length; a++) {
                    for (var b = new d.Vector, c = 0; c < this.faces.length; c++) this.faces[c][0] !== a && this.faces[c][1] !== a && this.faces[c][2] !== a || (b = b.add(this._getFaceNormal(c, a)));
                    b = b.normalize(), this.vertexNormals.push(b)
                }
                return this
            }, d.Geometry.prototype.averageNormals = function () {
                for (var a = 0; a <= this.detailY; a++) {
                    var b = this.detailX + 1,
                        c = d.Vector.add(this.vertexNormals[a * b], this.vertexNormals[a * b + this.detailX]);
                    c = d.Vector.div(c, 2), this.vertexNormals[a * b] = c, this.vertexNormals[a * b + this.detailX] = c
                }
                return this
            }, d.Geometry.prototype.averagePoleNormals = function () {
                for (var a = new d.Vector(0, 0, 0), b = 0; b < this.detailX; b++) a.add(this.vertexNormals[b]);
                for (a = d.Vector.div(a, this.detailX), b = 0; b < this.detailX; b++) this.vertexNormals[b] = a;
                for (a = new d.Vector(0, 0, 0), b = this.vertices.length - 1; b > this.vertices.length - 1 - this.detailX; b--) a.add(this.vertexNormals[b]);
                for (a = d.Vector.div(a, this.detailX), b = this.vertices.length - 1; b > this.vertices.length - 1 - this.detailX; b--) this.vertexNormals[b] = a;
                return this
            }, d.Geometry.prototype.normalize = function () {
                if (this.vertices.length > 0) {
                    for (var a = this.vertices[0].copy(), b = this.vertices[0].copy(), c = 0; c < this.vertices.length; c++) a.x = Math.max(a.x, this.vertices[c].x), b.x = Math.min(b.x, this.vertices[c].x), a.y = Math.max(a.y, this.vertices[c].y), b.y = Math.min(b.y, this.vertices[c].y), a.z = Math.max(a.z, this.vertices[c].z), b.z = Math.min(b.z, this.vertices[c].z);
                    var e = d.Vector.lerp(a, b, .5), f = d.Vector.sub(a, b), g = Math.max(Math.max(f.x, f.y), f.z),
                        h = 200 / g;
                    for (c = 0; c < this.vertices.length; c++) this.vertices[c].sub(e), this.vertices[c].mult(h)
                }
                return this
            }, b.exports = d.Geometry
        }, {"../core/core": 42}],
        88: [function (a, b, c) {
            "use strict";
            var d = a("../core/core"), e = a("../math/polargeometry"), f = a("../core/constants"),
                g = "undefined" != typeof Float32Array ? Float32Array : Array;
            d.Matrix = function () {
                for (var a = new Array(arguments.length), b = 0; b < a.length; ++b) a[b] = arguments[b];
                return a[0] instanceof d ? (this.p5 = a[0], "mat3" === a[1] ? this.mat3 = a[2] || new g([1, 0, 0, 0, 1, 0, 0, 0, 1]) : this.mat4 = a[1] || new g([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])) : "mat3" === a[0] ? this.mat3 = a[1] || new g([1, 0, 0, 0, 1, 0, 0, 0, 1]) : this.mat4 = a[0] || new g([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]), this
            }, d.Matrix.prototype.set = function (a) {
                return a instanceof d.Matrix ? (this.mat4 = a.mat4, this) : a instanceof g ? (this.mat4 = a, this) : this
            }, d.Matrix.prototype.get = function () {
                return new d.Matrix(this.mat4)
            }, d.Matrix.prototype.copy = function () {
                var a = new d.Matrix;
                return a.mat4[0] = this.mat4[0], a.mat4[1] = this.mat4[1], a.mat4[2] = this.mat4[2], a.mat4[3] = this.mat4[3], a.mat4[4] = this.mat4[4], a.mat4[5] = this.mat4[5], a.mat4[6] = this.mat4[6], a.mat4[7] = this.mat4[7], a.mat4[8] = this.mat4[8], a.mat4[9] = this.mat4[9], a.mat4[10] = this.mat4[10], a.mat4[11] = this.mat4[11], a.mat4[12] = this.mat4[12], a.mat4[13] = this.mat4[13], a.mat4[14] = this.mat4[14], a.mat4[15] = this.mat4[15], a
            }, d.Matrix.identity = function () {
                return new d.Matrix
            }, d.Matrix.prototype.transpose = function (a) {
                var b, c, e, f, h, i;
                return a instanceof d.Matrix ? (b = a.mat4[1], c = a.mat4[2], e = a.mat4[3], f = a.mat4[6], h = a.mat4[7], i = a.mat4[11], this.mat4[0] = a.mat4[0], this.mat4[1] = a.mat4[4], this.mat4[2] = a.mat4[8], this.mat4[3] = a.mat4[12], this.mat4[4] = b, this.mat4[5] = a.mat4[5], this.mat4[6] = a.mat4[9], this.mat4[7] = a.mat4[13], this.mat4[8] = c, this.mat4[9] = f, this.mat4[10] = a.mat4[10], this.mat4[11] = a.mat4[14], this.mat4[12] = e, this.mat4[13] = h, this.mat4[14] = i, this.mat4[15] = a.mat4[15]) : a instanceof g && (b = a[1], c = a[2], e = a[3], f = a[6], h = a[7], i = a[11], this.mat4[0] = a[0], this.mat4[1] = a[4], this.mat4[2] = a[8], this.mat4[3] = a[12], this.mat4[4] = b, this.mat4[5] = a[5], this.mat4[6] = a[9], this.mat4[7] = a[13], this.mat4[8] = c, this.mat4[9] = f, this.mat4[10] = a[10], this.mat4[11] = a[14], this.mat4[12] = e, this.mat4[13] = h, this.mat4[14] = i, this.mat4[15] = a[15]), this
            }, d.Matrix.prototype.invert = function (a) {
                var b, c, e, f, h, i, j, k, l, m, n, o, p, q, r, s;
                a instanceof d.Matrix ? (b = a.mat4[0], c = a.mat4[1], e = a.mat4[2], f = a.mat4[3], h = a.mat4[4], i = a.mat4[5], j = a.mat4[6], k = a.mat4[7], l = a.mat4[8], m = a.mat4[9], n = a.mat4[10], o = a.mat4[11], p = a.mat4[12], q = a.mat4[13], r = a.mat4[14], s = a.mat4[15]) : a instanceof g && (b = a[0], c = a[1], e = a[2], f = a[3], h = a[4], i = a[5], j = a[6], k = a[7], l = a[8], m = a[9], n = a[10], o = a[11], p = a[12], q = a[13], r = a[14], s = a[15]);
                var t = b * i - c * h, u = b * j - e * h, v = b * k - f * h, w = c * j - e * i, x = c * k - f * i,
                    y = e * k - f * j, z = l * q - m * p, A = l * r - n * p, B = l * s - o * p, C = m * r - n * q,
                    D = m * s - o * q, E = n * s - o * r, F = t * E - u * D + v * C + w * B - x * A + y * z;
                return F ? (F = 1 / F, this.mat4[0] = (i * E - j * D + k * C) * F, this.mat4[1] = (e * D - c * E - f * C) * F, this.mat4[2] = (q * y - r * x + s * w) * F, this.mat4[3] = (n * x - m * y - o * w) * F, this.mat4[4] = (j * B - h * E - k * A) * F, this.mat4[5] = (b * E - e * B + f * A) * F, this.mat4[6] = (r * v - p * y - s * u) * F, this.mat4[7] = (l * y - n * v + o * u) * F, this.mat4[8] = (h * D - i * B + k * z) * F, this.mat4[9] = (c * B - b * D - f * z) * F, this.mat4[10] = (p * x - q * v + s * t) * F, this.mat4[11] = (m * v - l * x - o * t) * F, this.mat4[12] = (i * A - h * C - j * z) * F, this.mat4[13] = (b * C - c * A + e * z) * F, this.mat4[14] = (q * u - p * w - r * t) * F, this.mat4[15] = (l * w - m * u + n * t) * F, this) : null
            }, d.Matrix.prototype.invert3x3 = function () {
                var a = this.mat3[0], b = this.mat3[1], c = this.mat3[2], d = this.mat3[3], e = this.mat3[4],
                    f = this.mat3[5], g = this.mat3[6], h = this.mat3[7], i = this.mat3[8], j = i * e - f * h,
                    k = -i * d + f * g, l = h * d - e * g, m = a * j + b * k + c * l;
                return m ? (m = 1 / m, this.mat3[0] = j * m, this.mat3[1] = (-i * b + c * h) * m, this.mat3[2] = (f * b - c * e) * m, this.mat3[3] = k * m, this.mat3[4] = (i * a - c * g) * m, this.mat3[5] = (-f * a + c * d) * m, this.mat3[6] = l * m, this.mat3[7] = (-h * a + b * g) * m, this.mat3[8] = (e * a - b * d) * m, this) : null
            }, d.Matrix.prototype.transpose3x3 = function (a) {
                var b = a[1], c = a[2], d = a[5];
                return this.mat3[1] = a[3], this.mat3[2] = a[6], this.mat3[3] = b, this.mat3[5] = a[7], this.mat3[6] = c, this.mat3[7] = d, this
            }, d.Matrix.prototype.inverseTranspose = function (a) {
                return void 0 === this.mat3 ? console.error("sorry, this function only works with mat3") : (this.mat3[0] = a.mat4[0], this.mat3[1] = a.mat4[1], this.mat3[2] = a.mat4[2], this.mat3[3] = a.mat4[4], this.mat3[4] = a.mat4[5], this.mat3[5] = a.mat4[6], this.mat3[6] = a.mat4[8], this.mat3[7] = a.mat4[9], this.mat3[8] = a.mat4[10]), this.invert3x3().transpose3x3(this.mat3), this
            }, d.Matrix.prototype.determinant = function () {
                var a = this.mat4[0] * this.mat4[5] - this.mat4[1] * this.mat4[4],
                    b = this.mat4[0] * this.mat4[6] - this.mat4[2] * this.mat4[4],
                    c = this.mat4[0] * this.mat4[7] - this.mat4[3] * this.mat4[4],
                    d = this.mat4[1] * this.mat4[6] - this.mat4[2] * this.mat4[5],
                    e = this.mat4[1] * this.mat4[7] - this.mat4[3] * this.mat4[5],
                    f = this.mat4[2] * this.mat4[7] - this.mat4[3] * this.mat4[6],
                    g = this.mat4[8] * this.mat4[13] - this.mat4[9] * this.mat4[12],
                    h = this.mat4[8] * this.mat4[14] - this.mat4[10] * this.mat4[12],
                    i = this.mat4[8] * this.mat4[15] - this.mat4[11] * this.mat4[12],
                    j = this.mat4[9] * this.mat4[14] - this.mat4[10] * this.mat4[13],
                    k = this.mat4[9] * this.mat4[15] - this.mat4[11] * this.mat4[13];
                return a * (this.mat4[10] * this.mat4[15] - this.mat4[11] * this.mat4[14]) - b * k + c * j + d * i - e * h + f * g
            }, d.Matrix.prototype.mult = function (a) {
                var b = new g(16), c = new g(16);
                a instanceof d.Matrix ? c = a.mat4 : a instanceof g && (c = a);
                var e = this.mat4[0], f = this.mat4[1], h = this.mat4[2], i = this.mat4[3];
                return b[0] = e * c[0] + f * c[4] + h * c[8] + i * c[12], b[1] = e * c[1] + f * c[5] + h * c[9] + i * c[13], b[2] = e * c[2] + f * c[6] + h * c[10] + i * c[14], b[3] = e * c[3] + f * c[7] + h * c[11] + i * c[15], e = this.mat4[4], f = this.mat4[5], h = this.mat4[6], i = this.mat4[7], b[4] = e * c[0] + f * c[4] + h * c[8] + i * c[12], b[5] = e * c[1] + f * c[5] + h * c[9] + i * c[13], b[6] = e * c[2] + f * c[6] + h * c[10] + i * c[14], b[7] = e * c[3] + f * c[7] + h * c[11] + i * c[15], e = this.mat4[8], f = this.mat4[9], h = this.mat4[10], i = this.mat4[11], b[8] = e * c[0] + f * c[4] + h * c[8] + i * c[12], b[9] = e * c[1] + f * c[5] + h * c[9] + i * c[13], b[10] = e * c[2] + f * c[6] + h * c[10] + i * c[14], b[11] = e * c[3] + f * c[7] + h * c[11] + i * c[15], e = this.mat4[12], f = this.mat4[13], h = this.mat4[14], i = this.mat4[15], b[12] = e * c[0] + f * c[4] + h * c[8] + i * c[12], b[13] = e * c[1] + f * c[5] + h * c[9] + i * c[13], b[14] = e * c[2] + f * c[6] + h * c[10] + i * c[14], b[15] = e * c[3] + f * c[7] + h * c[11] + i * c[15], this.mat4 = b, this
            }, d.Matrix.prototype.scale = function () {
                for (var a, b, c, e = new Array(arguments.length), f = 0; f < e.length; ++f) e[f] = arguments[f];
                e[0] instanceof d.Vector ? (a = e[0].x, b = e[0].y, c = e[0].z) : e[0] instanceof Array && (a = e[0][0], b = e[0][1], c = e[0][2]);
                var h = new g(16);
                return h[0] = this.mat4[0] * a, h[1] = this.mat4[1] * a, h[2] = this.mat4[2] * a, h[3] = this.mat4[3] * a, h[4] = this.mat4[4] * b, h[5] = this.mat4[5] * b, h[6] = this.mat4[6] * b, h[7] = this.mat4[7] * b, h[8] = this.mat4[8] * c, h[9] = this.mat4[9] * c, h[10] = this.mat4[10] * c, h[11] = this.mat4[11] * c, h[12] = this.mat4[12], h[13] = this.mat4[13], h[14] = this.mat4[14], h[15] = this.mat4[15], this.mat4 = h, this
            }, d.Matrix.prototype.rotate = function (a, b) {
                var c, g, h, i, j;
                this.p5 ? this.p5._angleMode === f.DEGREES && (i = e.degreesToRadians(a)) : i = a, b instanceof d.Vector ? (c = b.x, g = b.y, h = b.z) : b instanceof Array && (c = b[0], g = b[1], h = b[2]), j = Math.sqrt(c * c + g * g + h * h), c *= 1 / j, g *= 1 / j, h *= 1 / j
                ;var k = this.mat4[0], l = this.mat4[1], m = this.mat4[2], n = this.mat4[3], o = this.mat4[4],
                    p = this.mat4[5], q = this.mat4[6], r = this.mat4[7], s = this.mat4[8], t = this.mat4[9],
                    u = this.mat4[10], v = this.mat4[11], w = Math.sin(i), x = Math.cos(i), y = 1 - x,
                    z = c * c * y + x, A = g * c * y + h * w, B = h * c * y - g * w, C = c * g * y - h * w,
                    D = g * g * y + x, E = h * g * y + c * w, F = c * h * y + g * w, G = g * h * y - c * w,
                    H = h * h * y + x;
                return this.mat4[0] = k * z + o * A + s * B, this.mat4[1] = l * z + p * A + t * B, this.mat4[2] = m * z + q * A + u * B, this.mat4[3] = n * z + r * A + v * B, this.mat4[4] = k * C + o * D + s * E, this.mat4[5] = l * C + p * D + t * E, this.mat4[6] = m * C + q * D + u * E, this.mat4[7] = n * C + r * D + v * E, this.mat4[8] = k * F + o * G + s * H, this.mat4[9] = l * F + p * G + t * H, this.mat4[10] = m * F + q * G + u * H, this.mat4[11] = n * F + r * G + v * H, this
            }, d.Matrix.prototype.translate = function (a) {
                var b = a[0], c = a[1], d = a[2] || 0;
                this.mat4[12] = this.mat4[0] * b + this.mat4[4] * c + this.mat4[8] * d + this.mat4[12], this.mat4[13] = this.mat4[1] * b + this.mat4[5] * c + this.mat4[9] * d + this.mat4[13], this.mat4[14] = this.mat4[2] * b + this.mat4[6] * c + this.mat4[10] * d + this.mat4[14], this.mat4[15] = this.mat4[3] * b + this.mat4[7] * c + this.mat4[11] * d + this.mat4[15]
            }, d.Matrix.prototype.rotateX = function (a) {
                this.rotate(a, [1, 0, 0])
            }, d.Matrix.prototype.rotateY = function (a) {
                this.rotate(a, [0, 1, 0])
            }, d.Matrix.prototype.rotateZ = function (a) {
                this.rotate(a, [0, 0, 1])
            }, d.Matrix.prototype.perspective = function (a, b, c, d) {
                var e = 1 / Math.tan(a / 2), f = 1 / (c - d);
                return this.mat4[0] = e / b, this.mat4[1] = 0, this.mat4[2] = 0, this.mat4[3] = 0, this.mat4[4] = 0, this.mat4[5] = e, this.mat4[6] = 0, this.mat4[7] = 0, this.mat4[8] = 0, this.mat4[9] = 0, this.mat4[10] = (d + c) * f, this.mat4[11] = -1, this.mat4[12] = 0, this.mat4[13] = 0, this.mat4[14] = 2 * d * c * f, this.mat4[15] = 0, this
            }, d.Matrix.prototype.ortho = function (a, b, c, d, e, f) {
                var g = 1 / (a - b), h = 1 / (c - d), i = 1 / (e - f);
                return this.mat4[0] = -2 * g, this.mat4[1] = 0, this.mat4[2] = 0, this.mat4[3] = 0, this.mat4[4] = 0, this.mat4[5] = -2 * h, this.mat4[6] = 0, this.mat4[7] = 0, this.mat4[8] = 0, this.mat4[9] = 0, this.mat4[10] = 2 * i, this.mat4[11] = 0, this.mat4[12] = (a + b) * g, this.mat4[13] = (d + c) * h, this.mat4[14] = (f + e) * i, this.mat4[15] = 1, this
            }, b.exports = d.Matrix
        }, {"../core/constants": 41, "../core/core": 42, "../math/polargeometry": 72}],
        89: [function (a, b, c) {
            "use strict";
            var d = a("../core/core"), e = a("../core/constants");
            d.RendererGL.prototype.beginShape = function (a) {
                return this.immediateMode.shapeMode = void 0 !== a ? a : e.LINE_STRIP, void 0 === this.immediateMode.vertexPositions ? (this.immediateMode.vertexPositions = [], this.immediateMode.vertexColors = [], this.immediateMode.vertexBuffer = this.GL.createBuffer(), this.immediateMode.colorBuffer = this.GL.createBuffer()) : (this.immediateMode.vertexPositions.length = 0, this.immediateMode.vertexColors.length = 0), this.isImmediateDrawing = !0, this
            }, d.RendererGL.prototype.vertex = function (a, b, c) {
                this.immediateMode.vertexPositions.push(a, b, c);
                var d = this.curFillColor || [.5, .5, .5, 1];
                return this.immediateMode.vertexColors.push(d[0], d[1], d[2], d[3]), this
            }, d.RendererGL.prototype.endShape = function (a, b, c, d, f, g) {
                var h = this.GL;
                if (this._bindImmediateBuffers(this.immediateMode.vertexPositions, this.immediateMode.vertexColors), a) if ("fill" === this.drawMode || "texture" === this.drawMode) switch (this.immediateMode.shapeMode) {
                    case e.LINE_STRIP:
                        this.immediateMode.shapeMode = e.TRIANGLE_FAN;
                        break;
                    case e.LINES:
                        this.immediateMode.shapeMode = e.TRIANGLE_FAN;
                        break;
                    case e.TRIANGLES:
                        this.immediateMode.shapeMode = e.TRIANGLE_FAN
                } else switch (this.immediateMode.shapeMode) {
                    case e.LINE_STRIP:
                        this.immediateMode.shapeMode = e.LINE_LOOP;
                        break;
                    case e.LINES:
                        this.immediateMode.shapeMode = e.LINE_LOOP
                }
                if (this.immediateMode.shapeMode === e.QUADS || this.immediateMode.shapeMode === e.QUAD_STRIP) throw new Error("sorry, " + this.immediateMode.shapeMode + " not yet implemented in webgl mode.");
                return h.enable(h.BLEND), h.drawArrays(this.immediateMode.shapeMode, 0, this.immediateMode.vertexPositions.length / 3), this.immediateMode.vertexPositions.length = 0, this.immediateMode.vertexColors.length = 0, this.isImmediateDrawing = !1, this
            }, d.RendererGL.prototype._bindImmediateBuffers = function (a, b) {
                this._setDefaultCamera();
                var c = this.GL, d = this._getCurShaderId(), e = this.mHash[d];
                return e.vertexPositionAttribute = c.getAttribLocation(e, "aPosition"), c.enableVertexAttribArray(e.vertexPositionAttribute), c.bindBuffer(c.ARRAY_BUFFER, this.immediateMode.vertexBuffer), c.bufferData(c.ARRAY_BUFFER, new Float32Array(a), c.DYNAMIC_DRAW), c.vertexAttribPointer(e.vertexPositionAttribute, 3, c.FLOAT, !1, 0, 0), e.vertexColorAttribute = c.getAttribLocation(e, "aVertexColor"), c.enableVertexAttribArray(e.vertexColorAttribute), c.bindBuffer(c.ARRAY_BUFFER, this.immediateMode.colorBuffer), c.bufferData(c.ARRAY_BUFFER, new Float32Array(b), c.DYNAMIC_DRAW), c.vertexAttribPointer(e.vertexColorAttribute, 4, c.FLOAT, !1, 0, 0), this._setMatrixUniforms(d), this
            }, d.RendererGL.prototype._getColorVertexShader = function () {
                var a, b = this.GL, c = "immediateVert|vertexColorFrag";
                return this.materialInHash(c) ? a = this.mHash[c] : (a = this._initShaders("immediateVert", "vertexColorFrag", !0), this.mHash[c] = a, a.vertexColorAttribute = b.getAttribLocation(a, "aVertexColor"), b.enableVertexAttribArray(a.vertexColorAttribute)), a
            }, b.exports = d.RendererGL
        }, {"../core/constants": 41, "../core/core": 42}],
        90: [function (a, b, c) {
            "use strict";

            function d(a) {
                return a.length > 0 ? a.reduce(function (a, b) {
                    return a.concat(b)
                }) : []
            }

            function e(a) {
                return d(a.map(function (a) {
                    return [a.x, a.y, a.z]
                }))
            }

            var f = a("../core/core"), g = 0;
            f.RendererGL.prototype._initBufferDefaults = function (a) {
                if (++g > 1e3) {
                    var b = Object.keys(this.gHash)[0];
                    delete this.gHash[b], g--
                }
                var c = this.GL;
                this.gHash[a] = {}, this.gHash[a].vertexBuffer = c.createBuffer(), this.gHash[a].normalBuffer = c.createBuffer(), this.gHash[a].uvBuffer = c.createBuffer(), this.gHash[a].indexBuffer = c.createBuffer()
            }, f.RendererGL.prototype.createBuffers = function (a, b) {
                var c = this.GL;
                this._setDefaultCamera(), this._initBufferDefaults(a);
                var f = this.mHash[this._getCurShaderId()];
                this.gHash[a].numberOfItems = 3 * b.faces.length, c.bindBuffer(c.ARRAY_BUFFER, this.gHash[a].vertexBuffer), c.bufferData(c.ARRAY_BUFFER, new Float32Array(e(b.vertices)), c.STATIC_DRAW), f.vertexPositionAttribute = c.getAttribLocation(f, "aPosition"), c.enableVertexAttribArray(f.vertexPositionAttribute), c.vertexAttribPointer(f.vertexPositionAttribute, 3, c.FLOAT, !1, 0, 0), c.bindBuffer(c.ARRAY_BUFFER, this.gHash[a].normalBuffer), c.bufferData(c.ARRAY_BUFFER, new Float32Array(e(b.vertexNormals)), c.STATIC_DRAW), f.vertexNormalAttribute = c.getAttribLocation(f, "aNormal"), c.enableVertexAttribArray(f.vertexNormalAttribute), c.vertexAttribPointer(f.vertexNormalAttribute, 3, c.FLOAT, !1, 0, 0), c.bindBuffer(c.ARRAY_BUFFER, this.gHash[a].uvBuffer), c.bufferData(c.ARRAY_BUFFER, new Float32Array(d(b.uvs)), c.STATIC_DRAW), f.textureCoordAttribute = c.getAttribLocation(f, "aTexCoord"), c.enableVertexAttribArray(f.textureCoordAttribute), c.vertexAttribPointer(f.textureCoordAttribute, 2, c.FLOAT, !1, 0, 0), c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, this.gHash[a].indexBuffer), c.bufferData(c.ELEMENT_ARRAY_BUFFER, new Uint16Array(d(b.faces)), c.STATIC_DRAW)
            }, f.RendererGL.prototype.drawBuffers = function (a) {
                this._setDefaultCamera();
                var b = this.GL, c = this._getCurShaderId(), d = this.mHash[c];
                return b.bindBuffer(b.ARRAY_BUFFER, this.gHash[a].vertexBuffer), b.vertexAttribPointer(d.vertexPositionAttribute, 3, b.FLOAT, !1, 0, 0), b.bindBuffer(b.ARRAY_BUFFER, this.gHash[a].normalBuffer), b.vertexAttribPointer(d.vertexNormalAttribute, 3, b.FLOAT, !1, 0, 0), b.bindBuffer(b.ARRAY_BUFFER, this.gHash[a].uvBuffer), b.vertexAttribPointer(d.textureCoordAttribute, 2, b.FLOAT, !1, 0, 0), b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.gHash[a].indexBuffer), this._setMatrixUniforms(c), b.drawElements(b.TRIANGLES, this.gHash[a].numberOfItems, b.UNSIGNED_SHORT, 0), this
            }, b.exports = f.RendererGL
        }, {"../core/core": 42}],
        91: [function (a, b, c) {
            "use strict";
            var d = a("../core/core"), e = a("./shader");
            a("../core/p5.Renderer"), a("./p5.Matrix");
            var f = [], g = {
                alpha: !0,
                depth: !0,
                stencil: !0,
                antialias: !1,
                premultipliedAlpha: !1,
                preserveDrawingBuffer: !1
            };
            d.RendererGL = function (a, b, c) {
                return d.Renderer.call(this, a, b, c), this._initContext(), this.isP3D = !0, this.GL = this.drawingContext, this.ambientLightCount = 0, this.directionalLightCount = 0, this.pointLightCount = 0, this._curCamera = null, this.uMVMatrix = new d.Matrix, this.uPMatrix = new d.Matrix, this.uNMatrix = new d.Matrix("mat3"), this.gHash = {}, this.mHash = {}, this.isImmediateDrawing = !1, this.immediateMode = {}, this.curFillColor = [.5, .5, .5, 1], this.curStrokeColor = [.5, .5, .5, 1], this.pointSize = 5, this
            }, d.RendererGL.prototype = Object.create(d.Renderer.prototype), d.RendererGL.prototype._initContext = function () {
                try {
                    if (this.drawingContext = this.canvas.getContext("webgl", g) || this.canvas.getContext("experimental-webgl", g), null === this.drawingContext) throw new Error("Error creating webgl context");
                    console.log("p5.RendererGL: enabled webgl context");
                    var a = this.drawingContext;
                    a.enable(a.DEPTH_TEST), a.depthFunc(a.LEQUAL), a.viewport(0, 0, a.drawingBufferWidth, a.drawingBufferHeight)
                } catch (a) {
                    throw new Error(a)
                }
            }, d.RendererGL.prototype._setDefaultCamera = function () {
                if (null === this._curCamera) {
                    var a = this.width, b = this.height;
                    this.uPMatrix = d.Matrix.identity();
                    var c = this.height / 2 / Math.tan(30 * Math.PI / 180);
                    this.uPMatrix.perspective(60 / 180 * Math.PI, a / b, .1 * c, 10 * c), this._curCamera = "default"
                }
            }, d.RendererGL.prototype._update = function () {
                this.uMVMatrix = d.Matrix.identity(), this.translate(0, 0, -(this.height / 2) / Math.tan(30 * Math.PI / 180)), this.ambientLightCount = 0, this.directionalLightCount = 0, this.pointLightCount = 0
            }, d.RendererGL.prototype.background = function () {
                var a = this.GL, b = this._pInst.color.apply(this._pInst, arguments), c = b.levels[0] / 255,
                    d = b.levels[1] / 255, e = b.levels[2] / 255, f = b.levels[3] / 255;
                a.clearColor(c, d, e, f), a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT)
            }, d.RendererGL.prototype._initShaders = function (a, b, c) {
                var d = this.GL, f = d.createShader(d.VERTEX_SHADER);
                if (d.shaderSource(f, e[a]), d.compileShader(f), !d.getShaderParameter(f, d.COMPILE_STATUS)) return alert("Yikes! An error occurred compiling the shaders:" + d.getShaderInfoLog(f)), null;
                var g = d.createShader(d.FRAGMENT_SHADER);
                if (d.shaderSource(g, e[b]), d.compileShader(g), !d.getShaderParameter(g, d.COMPILE_STATUS)) return alert("Darn! An error occurred compiling the shaders:" + d.getShaderInfoLog(g)), null;
                var h = d.createProgram();
                return d.attachShader(h, f), d.attachShader(h, g), d.linkProgram(h), d.getProgramParameter(h, d.LINK_STATUS) || alert("Snap! Error linking shader program"), this._getLocation(h, c), h
            }, d.RendererGL.prototype._getLocation = function (a, b) {
                var c = this.GL;
                c.useProgram(a), a.uPMatrixUniform = c.getUniformLocation(a, "uProjectionMatrix"), a.uMVMatrixUniform = c.getUniformLocation(a, "uModelViewMatrix"), void 0 === b && (a.uNMatrixUniform = c.getUniformLocation(a, "uNormalMatrix"), a.samplerUniform = c.getUniformLocation(a, "uSampler"))
            }, d.RendererGL.prototype._setUniform1f = function (a, b, c) {
                var d = this.GL, e = this.mHash[a];
                return d.useProgram(e), e[b] = d.getUniformLocation(e, b), d.uniform1f(e[b], c), this
            }, d.RendererGL.prototype._setMatrixUniforms = function (a) {
                var b = this.GL, c = this.mHash[a];
                b.useProgram(c), b.uniformMatrix4fv(c.uPMatrixUniform, !1, this.uPMatrix.mat4), b.uniformMatrix4fv(c.uMVMatrixUniform, !1, this.uMVMatrix.mat4), this.uNMatrix.inverseTranspose(this.uMVMatrix), b.uniformMatrix3fv(c.uNMatrixUniform, !1, this.uNMatrix.mat3)
            }, d.RendererGL.prototype._getShader = function (a, b, c) {
                var d = a + "|" + b;
                if (!this.materialInHash(d)) {
                    var e = this._initShaders(a, b, c);
                    this.mHash[d] = e
                }
                return this.curShaderId = d, this.mHash[this.curShaderId]
            }, d.RendererGL.prototype._getCurShaderId = function () {
                var a, b;
                return "fill" !== this.drawMode && void 0 === this.curShaderId ? (a = "normalVert|normalFrag", b = this._initShaders("normalVert", "normalFrag"), this.mHash[a] = b, this.curShaderId = a) : this.isImmediateDrawing && "fill" === this.drawMode && (a = "immediateVert|vertexColorFrag", b = this._initShaders("immediateVert", "vertexColorFrag"), this.mHash[a] = b, this.curShaderId = a), this.curShaderId
            }, d.RendererGL.prototype.fill = function (a, b, c, d) {
                var e, f = this.GL, g = this._applyColorBlend.apply(this, arguments);
                return this.curFillColor = g, this.drawMode = "fill", this.isImmediateDrawing ? (e = this._getShader("immediateVert", "vertexColorFrag"), f.useProgram(e)) : (e = this._getShader("normalVert", "basicFrag"), f.useProgram(e), e.uMaterialColor = f.getUniformLocation(e, "uMaterialColor"), f.uniform4f(e.uMaterialColor, g[0], g[1], g[2], g[3])), this
            }, d.RendererGL.prototype.stroke = function (a, b, c, d) {
                var e = this._pInst.color.apply(this._pInst, arguments), f = e._array;
                return this.curStrokeColor = f, this.drawMode = "stroke", this
            }, d.RendererGL.prototype._strokeCheck = function () {
                if ("stroke" === this.drawMode) throw new Error("stroke for shapes in 3D not yet implemented, use fill for now :(")
            }, d.RendererGL.prototype.strokeWeight = function (a) {
                return this.pointSize = a, this
            }, d.RendererGL.prototype.geometryInHash = function (a) {
                return void 0 !== this.gHash[a]
            }, d.RendererGL.prototype.materialInHash = function (a) {
                return void 0 !== this.mHash[a]
            }, d.RendererGL.prototype.resize = function (a, b) {
                var c = this.GL;
                d.Renderer.prototype.resize.call(this, a, b), c.viewport(0, 0, c.drawingBufferWidth, c.drawingBufferHeight), "default" === this._curCamera && (this._curCamera = null, this._setDefaultCamera())
            }, d.RendererGL.prototype.clear = function () {
                var a = this.GL;
                a.clearColor(arguments[0], arguments[1], arguments[2], arguments[3]), a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT)
            }, d.RendererGL.prototype.translate = function (a, b, c) {
                return this.uMVMatrix.translate([a, -b, c]), this
            }, d.RendererGL.prototype.scale = function (a, b, c) {
                return this.uMVMatrix.scale([a, b, c]), this
            }, d.RendererGL.prototype.rotate = function (a, b) {
                return this.uMVMatrix.rotate(a, b), this
            }, d.RendererGL.prototype.rotateX = function (a) {
                return this.rotate(a, [1, 0, 0]), this
            }, d.RendererGL.prototype.rotateY = function (a) {
                return this.rotate(a, [0, 1, 0]), this
            }, d.RendererGL.prototype.rotateZ = function (a) {
                return this.rotate(a, [0, 0, 1]), this
            }, d.RendererGL.prototype.push = function () {
                f.push(this.uMVMatrix.copy())
            }, d.RendererGL.prototype.pop = function () {
                if (0 === f.length) throw new Error("Invalid popMatrix!");
                this.uMVMatrix = f.pop()
            }, d.RendererGL.prototype.resetMatrix = function () {
                return this.uMVMatrix = d.Matrix.identity(), this.translate(0, 0, -800), this
            }, d.RendererGL.prototype._applyTextProperties = function () {
                console.error("text commands not yet implemented in webgl")
            }, b.exports = d.RendererGL
        }, {"../core/core": 42, "../core/p5.Renderer": 48, "./p5.Matrix": 88, "./shader": 93}],
        92: [function (a, b, c) {
            "use strict";
            var d = a("../core/core");
            a("./p5.Geometry"), d.prototype.plane = function () {
                for (var a = new Array(arguments.length), b = 0; b < a.length; ++b) a[b] = arguments[b];
                var c = a[0] || 50, e = a[1] || c, f = "number" == typeof a[2] ? a[2] : 1,
                    g = "number" == typeof a[3] ? a[3] : 1, h = "plane|" + c + "|" + e + "|" + f + "|" + g;
                if (!this._renderer.geometryInHash(h)) {
                    var i = function () {
                        for (var a, b, f, g = 0; g <= this.detailY; g++) {
                            b = g / this.detailY;
                            for (var h = 0; h <= this.detailX; h++) a = h / this.detailX, f = new d.Vector(c * a - c / 2, e * b - e / 2, 0), this.vertices.push(f), this.uvs.push([a, b])
                        }
                    }, j = new d.Geometry(f, g, i);
                    j.computeFaces().computeNormals(), this._renderer.createBuffers(h, j)
                }
                this._renderer.drawBuffers(h)
            }, d.prototype.box = function () {
                for (var a = new Array(arguments.length), b = 0; b < a.length; ++b) a[b] = arguments[b];
                var c = a[0] || 50, e = a[1] || c, f = a[2] || c, g = "number" == typeof a[3] ? a[3] : 4,
                    h = "number" == typeof a[4] ? a[4] : 4, i = "box|" + c + "|" + e + "|" + f + "|" + g + "|" + h;
                if (!this._renderer.geometryInHash(i)) {
                    var j = function () {
                        for (var a = [[0, 4, 2, 6], [1, 3, 5, 7], [0, 1, 4, 5], [2, 6, 3, 7], [0, 2, 1, 3], [4, 5, 6, 7]], b = 0, g = 0; g < a.length; g++) {
                            for (var h = a[g], i = 4 * g, j = 0; j < 4; j++) {
                                var k = h[j],
                                    l = new d.Vector((2 * (1 & k) - 1) * c / 2, ((2 & k) - 1) * e / 2, ((4 & k) / 2 - 1) * f / 2);
                                this.vertices.push(l), this.uvs.push([1 & j, (2 & j) / 2]), b++
                            }
                            this.faces.push([i, i + 1, i + 2]), this.faces.push([i + 2, i + 1, i + 3])
                        }
                    }, k = new d.Geometry(g, h, j);
                    k.computeNormals(), this._renderer.createBuffers(i, k)
                }
                return this._renderer.drawBuffers(i), this
            }, d.prototype.sphere = function () {
                for (var a = new Array(arguments.length), b = 0; b < a.length; ++b) a[b] = arguments[b];
                var c = a[0] || 50, e = "number" == typeof a[1] ? a[1] : 24, f = "number" == typeof a[2] ? a[2] : 16,
                    g = "sphere|" + c + "|" + e + "|" + f;
                if (!this._renderer.geometryInHash(g)) {
                    var h = function () {
                        for (var a, b, e, f = 0; f <= this.detailY; f++) {
                            b = f / this.detailY;
                            for (var g = 0; g <= this.detailX; g++) {
                                a = g / this.detailX;
                                var h = 2 * Math.PI * a, i = Math.PI * b - Math.PI / 2;
                                e = new d.Vector(c * Math.cos(i) * Math.sin(h), c * Math.sin(i), c * Math.cos(i) * Math.cos(h)), this.vertices.push(e), this.uvs.push([a, b])
                            }
                        }
                    }, i = new d.Geometry(e, f, h);
                    i.computeFaces().computeNormals().averageNormals().averagePoleNormals(), this._renderer.createBuffers(g, i)
                }
                return this._renderer.drawBuffers(g), this
            };
            var e = function (a, b, c, e, f, g, h) {
                e = e < 3 ? 3 : e, f = f < 1 ? 1 : f, g = void 0 === g || g, h = void 0 === h || h;
                var i, j, k = (g ? 2 : 0) + (h ? 2 : 0), l = e + 1, m = Math.atan2(a - b, c), n = g ? -2 : 0,
                    o = f + (h ? 2 : 0);
                for (i = n; i <= o; ++i) {
                    var p, q = i / f, r = c * q;
                    for (i < 0 ? (r = 0, q = 1, p = a) : i > f ? (r = c, q = 1, p = b) : p = a + i / f * (b - a), i !== -2 && i !== f + 2 || (p = 0, q = 0), r -= c / 2, j = 0; j < l; ++j) this.vertices.push(new d.Vector(Math.sin(j * Math.PI * 2 / e) * p, r, Math.cos(j * Math.PI * 2 / e) * p)), this.vertexNormals.push(new d.Vector(i < 0 || i > f ? 0 : Math.sin(j * Math.PI * 2 / e) * Math.cos(m), i < 0 ? -1 : i > f ? 1 : Math.sin(m), i < 0 || i > f ? 0 : Math.cos(j * Math.PI * 2 / e) * Math.cos(m))), this.uvs.push([j / e, q])
                }
                for (i = 0; i < f + k; ++i) for (j = 0; j < e; ++j) this.faces.push([l * (i + 0) + 0 + j, l * (i + 0) + 1 + j, l * (i + 1) + 1 + j]), this.faces.push([l * (i + 0) + 0 + j, l * (i + 1) + 1 + j, l * (i + 1) + 0 + j])
            };
            d.prototype.cylinder = function () {
                for (var a = new Array(arguments.length), b = 0; b < a.length; ++b) a[b] = arguments[b];
                var c = a[0] || 50, f = a[1] || c, g = "number" == typeof a[2] ? a[2] : 24,
                    h = "number" == typeof a[3] ? a[3] : 16, i = "cylinder|" + c + "|" + f + "|" + g + "|" + h;
                if (!this._renderer.geometryInHash(i)) {
                    var j = new d.Geometry(g, h);
                    e.call(j, c, c, f, g, h, !0, !0), j.computeNormals(), this._renderer.createBuffers(i, j)
                }
                return this._renderer.drawBuffers(i), this
            }, d.prototype.cone = function () {
                for (var a = new Array(arguments.length), b = 0; b < a.length; ++b) a[b] = arguments[b];
                var c = a[0] || 50, f = a[1] || c, g = "number" == typeof a[2] ? a[2] : 24,
                    h = "number" == typeof a[3] ? a[3] : 16, i = "cone|" + c + "|" + f + "|" + g + "|" + h;
                if (!this._renderer.geometryInHash(i)) {
                    var j = new d.Geometry(g, h);
                    e.call(j, c, 0, f, g, h, !0, !0), j.computeNormals(), this._renderer.createBuffers(i, j)
                }
                return this._renderer.drawBuffers(i), this
            }, d.prototype.ellipsoid = function () {
                for (var a = new Array(arguments.length), b = 0; b < a.length; ++b) a[b] = arguments[b];
                var c = "number" == typeof a[3] ? a[3] : 24, e = "number" == typeof a[4] ? a[4] : 24, f = a[0] || 50,
                    g = a[1] || f, h = a[2] || f, i = "ellipsoid|" + f + "|" + g + "|" + h + "|" + c + "|" + e;
                if (!this._renderer.geometryInHash(i)) {
                    var j = function () {
                        for (var a, b, c, e = 0; e <= this.detailY; e++) {
                            b = e / this.detailY;
                            for (var i = 0; i <= this.detailX; i++) {
                                a = i / this.detailX;
                                var j = 2 * Math.PI * a, k = Math.PI * b - Math.PI / 2;
                                c = new d.Vector(f * Math.cos(k) * Math.sin(j), g * Math.sin(k), h * Math.cos(k) * Math.cos(j)), this.vertices.push(c), this.uvs.push([a, b])
                            }
                        }
                    }, k = new d.Geometry(c, e, j);
                    k.computeFaces().computeNormals(), this._renderer.createBuffers(i, k)
                }
                return this._renderer.drawBuffers(i), this
            }, d.prototype.torus = function () {
                for (var a = new Array(arguments.length), b = 0; b < a.length; ++b) a[b] = arguments[b];
                var c = "number" == typeof a[2] ? a[2] : 24, e = "number" == typeof a[3] ? a[3] : 16, f = a[0] || 50,
                    g = a[1] || 10, h = "torus|" + f + "|" + g + "|" + c + "|" + e;
                if (!this._renderer.geometryInHash(h)) {
                    var i = function () {
                        for (var a, b, c, e = 0; e <= this.detailY; e++) {
                            b = e / this.detailY;
                            for (var h = 0; h <= this.detailX; h++) {
                                a = h / this.detailX;
                                var i = 2 * Math.PI * a, j = 2 * Math.PI * b;
                                c = new d.Vector((f + g * Math.cos(j)) * Math.cos(i), (f + g * Math.cos(j)) * Math.sin(i), g * Math.sin(j)), this.vertices.push(c), this.uvs.push([a, b])
                            }
                        }
                    }, j = new d.Geometry(c, e, i);
                    j.computeFaces().computeNormals().averageNormals(), this._renderer.createBuffers(h, j)
                }
                return this._renderer.drawBuffers(h), this
            }, d.RendererGL.prototype.point = function (a, b, c) {
                return console.log("point not yet implemented in webgl"), this
            }, d.RendererGL.prototype.triangle = function (a) {
                var b = a[0], c = a[1], e = a[2], f = a[3], g = a[4], h = a[5],
                    i = "tri|" + b + "|" + c + "|" + e + "|" + f + "|" + g + "|" + h;
                if (!this.geometryInHash(i)) {
                    var j = function () {
                        var a = [];
                        a.push(new d.Vector(b, c, 0)), a.push(new d.Vector(e, f, 0)), a.push(new d.Vector(g, h, 0)), this.vertices = a, this.faces = [[0, 1, 2]], this.uvs = [[0, 0], [0, 1], [1, 1]]
                    }, k = new d.Geometry(1, 1, j);
                    k.computeNormals(), this.createBuffers(i, k)
                }
                return this.drawBuffers(i), this
            }, d.RendererGL.prototype.ellipse = function (a) {
                var b = a[0], c = a[1], e = a[2], f = a[3], g = a[4] || 24, h = a[5] || 16,
                    i = "ellipse|" + a[0] + "|" + a[1] + "|" + a[2] + "|" + a[3];
                if (!this.geometryInHash(i)) {
                    var j = function () {
                        for (var a, g, h, i = b + .5 * e, j = c + .5 * f, k = 0; k <= this.detailY; k++) {
                            g = k / this.detailY;
                            for (var l = 0; l <= this.detailX; l++) {
                                a = l / this.detailX;
                                var m = 2 * Math.PI * a;
                                if (0 === g) h = new d.Vector(i, j, 0); else {
                                    var n = i + .5 * e * Math.cos(m), o = j + .5 * f * Math.sin(m);
                                    h = new d.Vector(n, o, 0)
                                }
                                this.vertices.push(h), this.uvs.push([a, g])
                            }
                        }
                    }, k = new d.Geometry(g, h, j);
                    k.computeFaces().computeNormals(), this.createBuffers(i, k)
                }
                return this.drawBuffers(i), this
            }, d.RendererGL.prototype.rect = function (a) {
                var b = "rect|" + a[0] + "|" + a[1] + "|" + a[2] + "|" + a[3], c = a[0], e = a[1], f = a[2], g = a[3],
                    h = a[4] || 24, i = a[5] || 16;
                if (!this.geometryInHash(b)) {
                    var j = function () {
                        for (var a, b, h, i = 0; i <= this.detailY; i++) {
                            b = i / this.detailY;
                            for (var j = 0; j <= this.detailX; j++) a = j / this.detailX, h = new d.Vector(c + f * a, e + g * b, 0), this.vertices.push(h), this.uvs.push([a, b])
                        }
                    }, k = new d.Geometry(h, i, j);
                    k.computeFaces().computeNormals(), this.createBuffers(b, k)
                }
                return this.drawBuffers(b), this
            }, d.RendererGL.prototype.quad = function () {
                for (var a = new Array(arguments.length), b = 0; b < a.length; ++b) a[b] = arguments[b];
                var c = a[0], e = a[1], f = a[2], g = a[3], h = a[4], i = a[5], j = a[6], k = a[7],
                    l = "quad|" + c + "|" + e + "|" + f + "|" + g + "|" + h + "|" + i + "|" + j + "|" + k;
                if (!this.geometryInHash(l)) {
                    var m = function () {
                        this.vertices.push(new d.Vector(c, e, 0)), this.vertices.push(new d.Vector(f, g, 0)), this.vertices.push(new d.Vector(h, i, 0)), this.vertices.push(new d.Vector(j, k, 0)), this.uvs.push([0, 0], [1, 0], [1, 1], [0, 1])
                    }, n = new d.Geometry(2, 2, m);
                    n.computeNormals(), n.faces = [[0, 1, 2], [2, 3, 0]], this.createBuffers(l, n)
                }
                return this.drawBuffers(l), this
            }, d.RendererGL.prototype.bezier = function (a) {
                var b = a[12] || 20;
                this.beginShape();
                for (var c = [0, 0, 0, 0], d = [0, 0, 0], e = 0; e <= b; e++) c[0] = Math.pow(1 - e / b, 3), c[1] = e / b * 3 * Math.pow(1 - e / b, 2), c[2] = 3 * Math.pow(e / b, 2) * (1 - e / b), c[3] = Math.pow(e / b, 3), d[0] = a[0] * c[0] + a[3] * c[1] + a[6] * c[2] + a[9] * c[3], d[1] = a[1] * c[0] + a[4] * c[1] + a[7] * c[2] + a[10] * c[3], d[2] = a[2] * c[0] + a[5] * c[1] + a[8] * c[2] + a[11] * c[3], this.vertex(d[0], d[1], d[2]);
                return this.endShape(), this
            }, d.RendererGL.prototype.curve = function (a) {
                var b = a[12];
                this.beginShape();
                for (var c = [0, 0, 0, 0], d = [0, 0, 0], e = 0; e <= b; e++) c[0] = .5 * Math.pow(e / b, 3), c[1] = .5 * Math.pow(e / b, 2), c[2] = e / b * .5, c[3] = .5, d[0] = c[0] * (-a[0] + 3 * a[3] - 3 * a[6] + a[9]) + c[1] * (2 * a[0] - 5 * a[3] + 4 * a[6] - a[9]) + c[2] * (-a[0] + a[6]) + c[3] * (2 * a[3]), d[1] = c[0] * (-a[1] + 3 * a[4] - 3 * a[7] + a[10]) + c[1] * (2 * a[1] - 5 * a[4] + 4 * a[7] - a[10]) + c[2] * (-a[1] + a[7]) + c[3] * (2 * a[4]), d[2] = c[0] * (-a[2] + 3 * a[5] - 3 * a[8] + a[11]) + c[1] * (2 * a[2] - 5 * a[5] + 4 * a[8] - a[11]) + c[2] * (-a[2] + a[8]) + c[3] * (2 * a[5]), this.vertex(d[0], d[1], d[2]);
                return this.endShape(), this
            }, b.exports = d
        }, {"../core/core": 42, "./p5.Geometry": 87}],
        93: [function (a, b, c) {
            b.exports = {
                immediateVert: "attribute vec3 aPosition;\nattribute vec4 aVertexColor;\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform float uResolution;\nuniform float uPointSize;\n\nvarying vec4 vColor;\nvoid main(void) {\n  vec4 positionVec4 = vec4(aPosition * vec3(1.0, -1.0, 1.0), 1.0);\n  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n  vColor = aVertexColor;\n  gl_PointSize = uPointSize;\n}\n",
                vertexColorVert: "attribute vec3 aPosition;\nattribute vec4 aVertexColor;\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec4 vColor;\n\nvoid main(void) {\n  vec4 positionVec4 = vec4(aPosition * vec3(1.0, -1.0, 1.0), 1.0);\n  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n  vColor = aVertexColor;\n}\n",
                vertexColorFrag: "precision mediump float;\nvarying vec4 vColor;\nvoid main(void) {\n  gl_FragColor = vColor;\n}",
                normalVert: "attribute vec3 aPosition;\nattribute vec3 aNormal;\nattribute vec2 aTexCoord;\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat3 uNormalMatrix;\n\nvarying vec3 vVertexNormal;\nvarying highp vec2 vVertTexCoord;\n\nvoid main(void) {\n  vec4 positionVec4 = vec4(aPosition * vec3(1.0, -1.0, 1.0), 1.0);\n  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n  vVertexNormal = vec3( uNormalMatrix * aNormal );\n  vVertTexCoord = aTexCoord;\n}\n",
                normalFrag: "precision mediump float;\nvarying vec3 vVertexNormal;\nvoid main(void) {\n  gl_FragColor = vec4(vVertexNormal, 1.0);\n}",
                basicFrag: "precision mediump float;\nvarying vec3 vVertexNormal;\nuniform vec4 uMaterialColor;\nvoid main(void) {\n  gl_FragColor = uMaterialColor;\n}",
                lightVert: "attribute vec3 aPosition;\nattribute vec3 aNormal;\nattribute vec2 aTexCoord;\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat3 uNormalMatrix;\nuniform int uAmbientLightCount;\nuniform int uDirectionalLightCount;\nuniform int uPointLightCount;\n\nuniform vec3 uAmbientColor[8];\nuniform vec3 uLightingDirection[8];\nuniform vec3 uDirectionalColor[8];\nuniform vec3 uPointLightLocation[8];\nuniform vec3 uPointLightColor[8];\nuniform bool uSpecular;\n\nvarying vec3 vVertexNormal;\nvarying vec2 vVertTexCoord;\nvarying vec3 vLightWeighting;\n\nvec3 ambientLightFactor = vec3(0.0, 0.0, 0.0);\nvec3 directionalLightFactor = vec3(0.0, 0.0, 0.0);\nvec3 pointLightFactor = vec3(0.0, 0.0, 0.0);\nvec3 pointLightFactor2 = vec3(0.0, 0.0, 0.0);\n\nvoid main(void){\n\n  vec4 positionVec4 = vec4(aPosition, 1.0);\n  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n\n  vec3 vertexNormal = vec3( uNormalMatrix * aNormal );\n  vVertexNormal = vertexNormal;\n  vVertTexCoord = aTexCoord;\n\n  vec4 mvPosition = uModelViewMatrix * vec4(aPosition, 1.0);\n  vec3 eyeDirection = normalize(-mvPosition.xyz);\n\n  float shininess = 32.0;\n  float specularFactor = 2.0;\n  float diffuseFactor = 0.3;\n\n  for(int i = 0; i < 8; i++){\n    if(uAmbientLightCount == i) break;\n    ambientLightFactor += uAmbientColor[i];\n  }\n\n  for(int j = 0; j < 8; j++){\n    if(uDirectionalLightCount == j) break;\n    vec3 dir = uLightingDirection[j];\n    float directionalLightWeighting = max(dot(vertexNormal, dir), 0.0);\n    directionalLightFactor += uDirectionalColor[j] * directionalLightWeighting;\n  }\n\n  for(int k = 0; k < 8; k++){\n    if(uPointLightCount == k) break;\n    vec3 loc = uPointLightLocation[k];\n    vec3 lightDirection = normalize(loc - mvPosition.xyz);\n\n    float directionalLightWeighting = max(dot(vertexNormal, lightDirection), 0.0);\n    pointLightFactor += uPointLightColor[k] * directionalLightWeighting;\n\n    //factor2 for specular\n    vec3 reflectionDirection = reflect(-lightDirection, vertexNormal);\n    float specularLightWeighting = pow(max(dot(reflectionDirection, eyeDirection), 0.0), shininess);\n\n    pointLightFactor2 += uPointLightColor[k] * (specularFactor * specularLightWeighting\n      +  directionalLightWeighting * diffuseFactor);\n  }\n\n  if(!uSpecular){\n    vLightWeighting =  ambientLightFactor + directionalLightFactor + pointLightFactor;\n  }else{\n    vLightWeighting = ambientLightFactor + directionalLightFactor + pointLightFactor2;\n  }\n\n}\n",
                lightTextureFrag: "precision mediump float;\n\nuniform vec4 uMaterialColor;\nuniform sampler2D uSampler;\nuniform bool isTexture;\n\nvarying vec3 vLightWeighting;\nvarying highp vec2 vVertTexCoord;\n\nvoid main(void) {\n  if(!isTexture){\n    gl_FragColor = vec4(vec3(uMaterialColor.rgb * vLightWeighting), uMaterialColor.a);\n  }else{\n    vec4 textureColor = texture2D(uSampler, vVertTexCoord);\n    if(vLightWeighting == vec3(0., 0., 0.)){\n      gl_FragColor = textureColor;\n    }else{\n      gl_FragColor = vec4(vec3(textureColor.rgb * vLightWeighting), textureColor.a);\n    }\n  }\n}"
            }
        }, {}]
    }, {}, [33])(33)
});