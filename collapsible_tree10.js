! function(t, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.collapsible_tree = n() : t.collapsible_tree = n()
}(window, (function() {
    return function(t) {
        var n = {};

        function e(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports
        }
        return e.m = t, e.c = n, e.d = function(t, n, r) {
            e.o(t, n) || Object.defineProperty(t, n, {
                enumerable: !0,
                get: r
            })
        }, e.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, e.t = function(t, n) {
            if (1 & n && (t = e(t)), 8 & n) return t;
            if (4 & n && "object" == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (e.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & n && "string" != typeof t)
                for (var i in t) e.d(r, i, function(n) {
                    return t[n]
                }.bind(null, i));
            return r
        }, e.n = function(t) {
            var n = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return e.d(n, "a", n), n
        }, e.o = function(t, n) {
            return Object.prototype.hasOwnProperty.call(t, n)
        }, e.p = "", e(e.s = 31)
    }({
        0: function(t, n, e) {
            "use strict";
            var r = function(t, n) {
                    return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
                },
                i = function(t) {
                    var n;
                    return 1 === t.length && (n = t, t = function(t, e) {
                        return r(n(t), e)
                    }), {
                        left: function(n, e, r, i) {
                            for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
                                var u = r + i >>> 1;
                                t(n[u], e) < 0 ? r = u + 1 : i = u
                            }
                            return r
                        },
                        right: function(n, e, r, i) {
                            for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
                                var u = r + i >>> 1;
                                t(n[u], e) > 0 ? i = u : r = u + 1
                            }
                            return r
                        }
                    }
                },
                u = i(r),
                o = u.right,
                a = u.left,
                c = o,
                f = function(t, n) {
                    null == n && (n = s);
                    for (var e = 0, r = t.length - 1, i = t[0], u = new Array(r < 0 ? 0 : r); e < r;) u[e] = n(i, i = t[++e]);
                    return u
                };

            function s(t, n) {
                return [t, n]
            }
            var l = function(t, n, e) {
                    var r, i, u, o, a = t.length,
                        c = n.length,
                        f = new Array(a * c);
                    for (null == e && (e = s), r = u = 0; r < a; ++r)
                        for (o = t[r], i = 0; i < c; ++i, ++u) f[u] = e(o, n[i]);
                    return f
                },
                h = function(t, n) {
                    return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
                },
                d = function(t) {
                    return null === t ? NaN : +t
                },
                p = function(t, n) {
                    var e, r, i = t.length,
                        u = 0,
                        o = -1,
                        a = 0,
                        c = 0;
                    if (null == n)
                        for (; ++o < i;) isNaN(e = d(t[o])) || (c += (r = e - a) * (e - (a += r / ++u)));
                    else
                        for (; ++o < i;) isNaN(e = d(n(t[o], o, t))) || (c += (r = e - a) * (e - (a += r / ++u)));
                    if (u > 1) return c / (u - 1)
                },
                v = function(t, n) {
                    var e = p(t, n);
                    return e ? Math.sqrt(e) : e
                },
                y = function(t, n) {
                    var e, r, i, u = t.length,
                        o = -1;
                    if (null == n) {
                        for (; ++o < u;)
                            if (null != (e = t[o]) && e >= e)
                                for (r = i = e; ++o < u;) null != (e = t[o]) && (r > e && (r = e), i < e && (i = e))
                    } else
                        for (; ++o < u;)
                            if (null != (e = n(t[o], o, t)) && e >= e)
                                for (r = i = e; ++o < u;) null != (e = n(t[o], o, t)) && (r > e && (r = e), i < e && (i = e));
                    return [r, i]
                },
                _ = Array.prototype,
                g = _.slice,
                m = _.map,
                x = function(t) {
                    return function() {
                        return t
                    }
                },
                b = function(t) {
                    return t
                },
                w = function(t, n, e) {
                    t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
                    for (var r = -1, i = 0 | Math.max(0, Math.ceil((n - t) / e)), u = new Array(i); ++r < i;) u[r] = t + r * e;
                    return u
                },
                M = Math.sqrt(50),
                T = Math.sqrt(10),
                k = Math.sqrt(2),
                N = function(t, n, e) {
                    var r, i, u, o, a = -1;
                    if (e = +e, (t = +t) == (n = +n) && e > 0) return [t];
                    if ((r = n < t) && (i = t, t = n, n = i), 0 === (o = S(t, n, e)) || !isFinite(o)) return [];
                    if (o > 0)
                        for (t = Math.ceil(t / o), n = Math.floor(n / o), u = new Array(i = Math.ceil(n - t + 1)); ++a < i;) u[a] = (t + a) * o;
                    else
                        for (t = Math.floor(t * o), n = Math.ceil(n * o), u = new Array(i = Math.ceil(t - n + 1)); ++a < i;) u[a] = (t - a) / o;
                    return r && u.reverse(), u
                };

            function S(t, n, e) {
                var r = (n - t) / Math.max(0, e),
                    i = Math.floor(Math.log(r) / Math.LN10),
                    u = r / Math.pow(10, i);
                return i >= 0 ? (u >= M ? 10 : u >= T ? 5 : u >= k ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (u >= M ? 10 : u >= T ? 5 : u >= k ? 2 : 1)
            }

            function E(t, n, e) {
                var r = Math.abs(n - t) / Math.max(0, e),
                    i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
                    u = r / i;
                return u >= M ? i *= 10 : u >= T ? i *= 5 : u >= k && (i *= 2), n < t ? -i : i
            }
            var A = function(t) {
                    return Math.ceil(Math.log(t.length) / Math.LN2) + 1
                },
                C = function() {
                    var t = b,
                        n = y,
                        e = A;

                    function r(r) {
                        var i, u, o = r.length,
                            a = new Array(o);
                        for (i = 0; i < o; ++i) a[i] = t(r[i], i, r);
                        var f = n(a),
                            s = f[0],
                            l = f[1],
                            h = e(a, s, l);
                        Array.isArray(h) || (h = E(s, l, h), h = w(Math.ceil(s / h) * h, Math.floor(l / h) * h, h));
                        for (var d = h.length; h[0] <= s;) h.shift(), --d;
                        for (; h[d - 1] > l;) h.pop(), --d;
                        var p, v = new Array(d + 1);
                        for (i = 0; i <= d; ++i)(p = v[i] = []).x0 = i > 0 ? h[i - 1] : s, p.x1 = i < d ? h[i] : l;
                        for (i = 0; i < o; ++i) s <= (u = a[i]) && u <= l && v[c(h, u, 0, d)].push(r[i]);
                        return v
                    }
                    return r.value = function(n) {
                        return arguments.length ? (t = "function" == typeof n ? n : x(n), r) : t
                    }, r.domain = function(t) {
                        return arguments.length ? (n = "function" == typeof t ? t : x([t[0], t[1]]), r) : n
                    }, r.thresholds = function(t) {
                        return arguments.length ? (e = "function" == typeof t ? t : Array.isArray(t) ? x(g.call(t)) : x(t), r) : e
                    }, r
                },
                z = function(t, n, e) {
                    if (null == e && (e = d), r = t.length) {
                        if ((n = +n) <= 0 || r < 2) return +e(t[0], 0, t);
                        if (n >= 1) return +e(t[r - 1], r - 1, t);
                        var r, i = (r - 1) * n,
                            u = Math.floor(i),
                            o = +e(t[u], u, t);
                        return o + (+e(t[u + 1], u + 1, t) - o) * (i - u)
                    }
                },
                P = function(t, n, e) {
                    return t = m.call(t, d).sort(r), Math.ceil((e - n) / (2 * (z(t, .75) - z(t, .25)) * Math.pow(t.length, -1 / 3)))
                },
                O = function(t, n, e) {
                    return Math.ceil((e - n) / (3.5 * v(t) * Math.pow(t.length, -1 / 3)))
                },
                R = function(t, n) {
                    var e, r, i = t.length,
                        u = -1;
                    if (null == n) {
                        for (; ++u < i;)
                            if (null != (e = t[u]) && e >= e)
                                for (r = e; ++u < i;) null != (e = t[u]) && e > r && (r = e)
                    } else
                        for (; ++u < i;)
                            if (null != (e = n(t[u], u, t)) && e >= e)
                                for (r = e; ++u < i;) null != (e = n(t[u], u, t)) && e > r && (r = e);
                    return r
                },
                L = function(t, n) {
                    var e, r = t.length,
                        i = r,
                        u = -1,
                        o = 0;
                    if (null == n)
                        for (; ++u < r;) isNaN(e = d(t[u])) ? --i : o += e;
                    else
                        for (; ++u < r;) isNaN(e = d(n(t[u], u, t))) ? --i : o += e;
                    if (i) return o / i
                },
                q = function(t, n) {
                    var e, i = t.length,
                        u = -1,
                        o = [];
                    if (null == n)
                        for (; ++u < i;) isNaN(e = d(t[u])) || o.push(e);
                    else
                        for (; ++u < i;) isNaN(e = d(n(t[u], u, t))) || o.push(e);
                    return z(o.sort(r), .5)
                },
                D = function(t) {
                    for (var n, e, r, i = t.length, u = -1, o = 0; ++u < i;) o += t[u].length;
                    for (e = new Array(o); --i >= 0;)
                        for (n = (r = t[i]).length; --n >= 0;) e[--o] = r[n];
                    return e
                },
                U = function(t, n) {
                    var e, r, i = t.length,
                        u = -1;
                    if (null == n) {
                        for (; ++u < i;)
                            if (null != (e = t[u]) && e >= e)
                                for (r = e; ++u < i;) null != (e = t[u]) && r > e && (r = e)
                    } else
                        for (; ++u < i;)
                            if (null != (e = n(t[u], u, t)) && e >= e)
                                for (r = e; ++u < i;) null != (e = n(t[u], u, t)) && r > e && (r = e);
                    return r
                },
                j = function(t, n) {
                    for (var e = n.length, r = new Array(e); e--;) r[e] = t[n[e]];
                    return r
                },
                F = function(t, n) {
                    if (e = t.length) {
                        var e, i, u = 0,
                            o = 0,
                            a = t[o];
                        for (null == n && (n = r); ++u < e;)(n(i = t[u], a) < 0 || 0 !== n(a, a)) && (a = i, o = u);
                        return 0 === n(a, a) ? o : void 0
                    }
                },
                I = function(t, n, e) {
                    for (var r, i, u = (null == e ? t.length : e) - (n = null == n ? 0 : +n); u;) i = Math.random() * u-- | 0, r = t[u + n], t[u + n] = t[i + n], t[i + n] = r;
                    return t
                },
                Y = function(t, n) {
                    var e, r = t.length,
                        i = -1,
                        u = 0;
                    if (null == n)
                        for (; ++i < r;)(e = +t[i]) && (u += e);
                    else
                        for (; ++i < r;)(e = +n(t[i], i, t)) && (u += e);
                    return u
                },
                B = function(t) {
                    if (!(i = t.length)) return [];
                    for (var n = -1, e = U(t, H), r = new Array(e); ++n < e;)
                        for (var i, u = -1, o = r[n] = new Array(i); ++u < i;) o[u] = t[u][n];
                    return r
                };

            function H(t) {
                return t.length
            }
            var X = function() {
                return B(arguments)
            };
            e.d(n, "b", (function() {
                return c
            })), e.d(n, "d", (function() {
                return o
            })), e.d(n, "c", (function() {
                return a
            })), e.d(n, "a", (function() {
                return r
            })), e.d(n, "e", (function() {
                return i
            })), e.d(n, "f", (function() {
                return l
            })), e.d(n, "g", (function() {
                return h
            })), e.d(n, "h", (function() {
                return v
            })), e.d(n, "i", (function() {
                return y
            })), e.d(n, "j", (function() {
                return C
            })), e.d(n, "w", (function() {
                return P
            })), e.d(n, "x", (function() {
                return O
            })), e.d(n, "y", (function() {
                return A
            })), e.d(n, "k", (function() {
                return R
            })), e.d(n, "l", (function() {
                return L
            })), e.d(n, "m", (function() {
                return q
            })), e.d(n, "n", (function() {
                return D
            })), e.d(n, "o", (function() {
                return U
            })), e.d(n, "p", (function() {
                return f
            })), e.d(n, "q", (function() {
                return j
            })), e.d(n, "r", (function() {
                return z
            })), e.d(n, "s", (function() {
                return w
            })), e.d(n, "t", (function() {
                return F
            })), e.d(n, "u", (function() {
                return I
            })), e.d(n, "v", (function() {
                return Y
            })), e.d(n, "B", (function() {
                return N
            })), e.d(n, "z", (function() {
                return S
            })), e.d(n, "A", (function() {
                return E
            })), e.d(n, "C", (function() {
                return B
            })), e.d(n, "D", (function() {
                return p
            })), e.d(n, "E", (function() {
                return X
            }))
        },
        1: function(t, n, e) {
            "use strict";
            var r = Math.PI,
                i = 2 * r,
                u = i - 1e-6;

            function o() {
                this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = ""
            }

            function a() {
                return new o
            }
            o.prototype = a.prototype = {
                constructor: o,
                moveTo: function(t, n) {
                    this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n)
                },
                closePath: function() {
                    null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z")
                },
                lineTo: function(t, n) {
                    this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n)
                },
                quadraticCurveTo: function(t, n, e, r) {
                    this._ += "Q" + +t + "," + +n + "," + (this._x1 = +e) + "," + (this._y1 = +r)
                },
                bezierCurveTo: function(t, n, e, r, i, u) {
                    this._ += "C" + +t + "," + +n + "," + +e + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +u)
                },
                arcTo: function(t, n, e, i, u) {
                    t = +t, n = +n, e = +e, i = +i, u = +u;
                    var o = this._x1,
                        a = this._y1,
                        c = e - t,
                        f = i - n,
                        s = o - t,
                        l = a - n,
                        h = s * s + l * l;
                    if (u < 0) throw new Error("negative radius: " + u);
                    if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = n);
                    else if (h > 1e-6)
                        if (Math.abs(l * c - f * s) > 1e-6 && u) {
                            var d = e - o,
                                p = i - a,
                                v = c * c + f * f,
                                y = d * d + p * p,
                                _ = Math.sqrt(v),
                                g = Math.sqrt(h),
                                m = u * Math.tan((r - Math.acos((v + h - y) / (2 * _ * g))) / 2),
                                x = m / g,
                                b = m / _;
                            Math.abs(x - 1) > 1e-6 && (this._ += "L" + (t + x * s) + "," + (n + x * l)), this._ += "A" + u + "," + u + ",0,0," + +(l * d > s * p) + "," + (this._x1 = t + b * c) + "," + (this._y1 = n + b * f)
                        } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = n)
                },
                arc: function(t, n, e, o, a, c) {
                    t = +t, n = +n;
                    var f = (e = +e) * Math.cos(o),
                        s = e * Math.sin(o),
                        l = t + f,
                        h = n + s,
                        d = 1 ^ c,
                        p = c ? o - a : a - o;
                    if (e < 0) throw new Error("negative radius: " + e);
                    null === this._x1 ? this._ += "M" + l + "," + h : (Math.abs(this._x1 - l) > 1e-6 || Math.abs(this._y1 - h) > 1e-6) && (this._ += "L" + l + "," + h), e && (p < 0 && (p = p % i + i), p > u ? this._ += "A" + e + "," + e + ",0,1," + d + "," + (t - f) + "," + (n - s) + "A" + e + "," + e + ",0,1," + d + "," + (this._x1 = l) + "," + (this._y1 = h) : p > 1e-6 && (this._ += "A" + e + "," + e + ",0," + +(p >= r) + "," + d + "," + (this._x1 = t + e * Math.cos(a)) + "," + (this._y1 = n + e * Math.sin(a))))
                },
                rect: function(t, n, e, r) {
                    this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n) + "h" + +e + "v" + +r + "h" + -e + "Z"
                },
                toString: function() {
                    return this._
                }
            };
            var c = a;
            e.d(n, "a", (function() {
                return c
            }))
        },
        2: function(t, n, e) {
            "use strict";

            function r() {}

            function i(t, n) {
                var e = new r;
                if (t instanceof r) t.each((function(t, n) {
                    e.set(n, t)
                }));
                else if (Array.isArray(t)) {
                    var i, u = -1,
                        o = t.length;
                    if (null == n)
                        for (; ++u < o;) e.set(u, t[u]);
                    else
                        for (; ++u < o;) e.set(n(i = t[u], u, t), i)
                } else if (t)
                    for (var a in t) e.set(a, t[a]);
                return e
            }
            r.prototype = i.prototype = {
                constructor: r,
                has: function(t) {
                    return "$" + t in this
                },
                get: function(t) {
                    return this["$" + t]
                },
                set: function(t, n) {
                    return this["$" + t] = n, this
                },
                remove: function(t) {
                    var n = "$" + t;
                    return n in this && delete this[n]
                },
                clear: function() {
                    for (var t in this) "$" === t[0] && delete this[t]
                },
                keys: function() {
                    var t = [];
                    for (var n in this) "$" === n[0] && t.push(n.slice(1));
                    return t
                },
                values: function() {
                    var t = [];
                    for (var n in this) "$" === n[0] && t.push(this[n]);
                    return t
                },
                entries: function() {
                    var t = [];
                    for (var n in this) "$" === n[0] && t.push({
                        key: n.slice(1),
                        value: this[n]
                    });
                    return t
                },
                size: function() {
                    var t = 0;
                    for (var n in this) "$" === n[0] && ++t;
                    return t
                },
                empty: function() {
                    for (var t in this)
                        if ("$" === t[0]) return !1;
                    return !0
                },
                each: function(t) {
                    for (var n in this) "$" === n[0] && t(this[n], n.slice(1), this)
                }
            };
            var u = i,
                o = function() {
                    var t, n, e, r = [],
                        i = [];

                    function o(e, i, a, c) {
                        if (i >= r.length) return null != t && e.sort(t), null != n ? n(e) : e;
                        for (var f, s, l, h = -1, d = e.length, p = r[i++], v = u(), y = a(); ++h < d;)(l = v.get(f = p(s = e[h]) + "")) ? l.push(s) : v.set(f, [s]);
                        return v.each((function(t, n) {
                            c(y, n, o(t, i, a, c))
                        })), y
                    }
                    return e = {
                        object: function(t) {
                            return o(t, 0, a, c)
                        },
                        map: function(t) {
                            return o(t, 0, f, s)
                        },
                        entries: function(t) {
                            return function t(e, u) {
                                if (++u > r.length) return e;
                                var o, a = i[u - 1];
                                return null != n && u >= r.length ? o = e.entries() : (o = [], e.each((function(n, e) {
                                    o.push({
                                        key: e,
                                        values: t(n, u)
                                    })
                                }))), null != a ? o.sort((function(t, n) {
                                    return a(t.key, n.key)
                                })) : o
                            }(o(t, 0, f, s), 0)
                        },
                        key: function(t) {
                            return r.push(t), e
                        },
                        sortKeys: function(t) {
                            return i[r.length - 1] = t, e
                        },
                        sortValues: function(n) {
                            return t = n, e
                        },
                        rollup: function(t) {
                            return n = t, e
                        }
                    }
                };

            function a() {
                return {}
            }

            function c(t, n, e) {
                t[n] = e
            }

            function f() {
                return u()
            }

            function s(t, n, e) {
                t.set(n, e)
            }

            function l() {}
            var h = u.prototype;

            function d(t, n) {
                var e = new l;
                if (t instanceof l) t.each((function(t) {
                    e.add(t)
                }));
                else if (t) {
                    var r = -1,
                        i = t.length;
                    if (null == n)
                        for (; ++r < i;) e.add(t[r]);
                    else
                        for (; ++r < i;) e.add(n(t[r], r, t))
                }
                return e
            }
            l.prototype = d.prototype = {
                constructor: l,
                has: h.has,
                add: function(t) {
                    return this["$" + (t += "")] = t, this
                },
                remove: h.remove,
                clear: h.clear,
                values: h.keys,
                size: h.size,
                empty: h.empty,
                each: h.each
            };
            var p = d,
                v = function(t) {
                    var n = [];
                    for (var e in t) n.push(e);
                    return n
                },
                y = function(t) {
                    var n = [];
                    for (var e in t) n.push(t[e]);
                    return n
                },
                _ = function(t) {
                    var n = [];
                    for (var e in t) n.push({
                        key: e,
                        value: t[e]
                    });
                    return n
                };
            e.d(n, "d", (function() {
                return o
            })), e.d(n, "e", (function() {
                return p
            })), e.d(n, "c", (function() {
                return u
            })), e.d(n, "b", (function() {
                return v
            })), e.d(n, "f", (function() {
                return y
            })), e.d(n, "a", (function() {
                return _
            }))
        },
        3: function(t, n, e) {
            "use strict";
            e.r(n);
            var r = e(0),
                i = Array.prototype.slice,
                u = function(t) {
                    return t
                },
                o = 1,
                a = 2,
                c = 3,
                f = 4,
                s = 1e-6;

            function l(t) {
                return "translate(" + (t + .5) + ",0)"
            }

            function h(t) {
                return "translate(0," + (t + .5) + ")"
            }

            function d() {
                return !this.__axis
            }

            function p(t, n) {
                var e = [],
                    r = null,
                    p = null,
                    v = 6,
                    y = 6,
                    _ = 3,
                    g = t === o || t === f ? -1 : 1,
                    m = t === f || t === a ? "x" : "y",
                    x = t === o || t === c ? l : h;

                function b(i) {
                    var l = null == r ? n.ticks ? n.ticks.apply(n, e) : n.domain() : r,
                        h = null == p ? n.tickFormat ? n.tickFormat.apply(n, e) : u : p,
                        b = Math.max(v, 0) + _,
                        w = n.range(),
                        M = +w[0] + .5,
                        T = +w[w.length - 1] + .5,
                        k = (n.bandwidth ? function(t) {
                            var n = Math.max(0, t.bandwidth() - 1) / 2;
                            return t.round() && (n = Math.round(n)),
                                function(e) {
                                    return +t(e) + n
                                }
                        } : function(t) {
                            return function(n) {
                                return +t(n)
                            }
                        })(n.copy()),
                        N = i.selection ? i.selection() : i,
                        S = N.selectAll(".domain").data([null]),
                        E = N.selectAll(".tick").data(l, n).order(),
                        A = E.exit(),
                        C = E.enter().append("g").attr("class", "tick"),
                        z = E.select("line"),
                        P = E.select("text");
                    S = S.merge(S.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "#000")), E = E.merge(C), z = z.merge(C.append("line").attr("stroke", "#000").attr(m + "2", g * v)), P = P.merge(C.append("text").attr("fill", "#000").attr(m, g * b).attr("dy", t === o ? "0em" : t === c ? "0.71em" : "0.32em")), i !== N && (S = S.transition(i), E = E.transition(i), z = z.transition(i), P = P.transition(i), A = A.transition(i).attr("opacity", s).attr("transform", (function(t) {
                        return isFinite(t = k(t)) ? x(t) : this.getAttribute("transform")
                    })), C.attr("opacity", s).attr("transform", (function(t) {
                        var n = this.parentNode.__axis;
                        return x(n && isFinite(n = n(t)) ? n : k(t))
                    }))), A.remove(), S.attr("d", t === f || t == a ? "M" + g * y + "," + M + "H0.5V" + T + "H" + g * y : "M" + M + "," + g * y + "V0.5H" + T + "V" + g * y), E.attr("opacity", 1).attr("transform", (function(t) {
                        return x(k(t))
                    })), z.attr(m + "2", g * v), P.attr(m, g * b).text(h), N.filter(d).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === a ? "start" : t === f ? "end" : "middle"), N.each((function() {
                        this.__axis = k
                    }))
                }
                return b.scale = function(t) {
                    return arguments.length ? (n = t, b) : n
                }, b.ticks = function() {
                    return e = i.call(arguments), b
                }, b.tickArguments = function(t) {
                    return arguments.length ? (e = null == t ? [] : i.call(t), b) : e.slice()
                }, b.tickValues = function(t) {
                    return arguments.length ? (r = null == t ? null : i.call(t), b) : r && r.slice()
                }, b.tickFormat = function(t) {
                    return arguments.length ? (p = t, b) : p
                }, b.tickSize = function(t) {
                    return arguments.length ? (v = y = +t, b) : v
                }, b.tickSizeInner = function(t) {
                    return arguments.length ? (v = +t, b) : v
                }, b.tickSizeOuter = function(t) {
                    return arguments.length ? (y = +t, b) : y
                }, b.tickPadding = function(t) {
                    return arguments.length ? (_ = +t, b) : _
                }, b
            }

            function v(t) {
                return p(o, t)
            }

            function y(t) {
                return p(a, t)
            }

            function _(t) {
                return p(c, t)
            }

            function g(t) {
                return p(f, t)
            }
            var m = {
                value: function() {}
            };

            function x() {
                for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
                    if (!(t = arguments[n] + "") || t in r) throw new Error("illegal type: " + t);
                    r[t] = []
                }
                return new b(r)
            }

            function b(t) {
                this._ = t
            }

            function w(t, n) {
                for (var e, r = 0, i = t.length; r < i; ++r)
                    if ((e = t[r]).name === n) return e.value
            }

            function M(t, n, e) {
                for (var r = 0, i = t.length; r < i; ++r)
                    if (t[r].name === n) {
                        t[r] = m, t = t.slice(0, r).concat(t.slice(r + 1));
                        break
                    } return null != e && t.push({
                    name: n,
                    value: e
                }), t
            }
            b.prototype = x.prototype = {
                constructor: b,
                on: function(t, n) {
                    var e, r, i = this._,
                        u = (r = i, (t + "").trim().split(/^|\s+/).map((function(t) {
                            var n = "",
                                e = t.indexOf(".");
                            if (e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), t && !r.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                            return {
                                type: t,
                                name: n
                            }
                        }))),
                        o = -1,
                        a = u.length;
                    if (!(arguments.length < 2)) {
                        if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);
                        for (; ++o < a;)
                            if (e = (t = u[o]).type) i[e] = M(i[e], t.name, n);
                            else if (null == n)
                            for (e in i) i[e] = M(i[e], t.name, null);
                        return this
                    }
                    for (; ++o < a;)
                        if ((e = (t = u[o]).type) && (e = w(i[e], t.name))) return e
                },
                copy: function() {
                    var t = {},
                        n = this._;
                    for (var e in n) t[e] = n[e].slice();
                    return new b(t)
                },
                call: function(t, n) {
                    if ((e = arguments.length - 2) > 0)
                        for (var e, r, i = new Array(e), u = 0; u < e; ++u) i[u] = arguments[u + 2];
                    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                    for (u = 0, e = (r = this._[t]).length; u < e; ++u) r[u].value.apply(n, i)
                },
                apply: function(t, n, e) {
                    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                    for (var r = this._[t], i = 0, u = r.length; i < u; ++i) r[i].value.apply(n, e)
                }
            };
            var T = x,
                k = "http://www.w3.org/1999/xhtml",
                N = {
                    svg: "http://www.w3.org/2000/svg",
                    xhtml: k,
                    xlink: "http://www.w3.org/1999/xlink",
                    xml: "http://www.w3.org/XML/1998/namespace",
                    xmlns: "http://www.w3.org/2000/xmlns/"
                },
                S = function(t) {
                    var n = t += "",
                        e = n.indexOf(":");
                    return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), N.hasOwnProperty(n) ? {
                        space: N[n],
                        local: t
                    } : t
                },
                E = function(t) {
                    var n = S(t);
                    return (n.local ? function(t) {
                        return function() {
                            return this.ownerDocument.createElementNS(t.space, t.local)
                        }
                    } : function(t) {
                        return function() {
                            var n = this.ownerDocument,
                                e = this.namespaceURI;
                            return e === k && n.documentElement.namespaceURI === k ? n.createElement(t) : n.createElementNS(e, t)
                        }
                    })(n)
                };

            function A() {}
            var C = function(t) {
                return null == t ? A : function() {
                    return this.querySelector(t)
                }
            };

            function z() {
                return []
            }
            var P = function(t) {
                    return null == t ? z : function() {
                        return this.querySelectorAll(t)
                    }
                },
                O = function(t) {
                    return function() {
                        return this.matches(t)
                    }
                };
            if ("undefined" != typeof document) {
                var R = document.documentElement;
                if (!R.matches) {
                    var L = R.webkitMatchesSelector || R.msMatchesSelector || R.mozMatchesSelector || R.oMatchesSelector;
                    O = function(t) {
                        return function() {
                            return L.call(this, t)
                        }
                    }
                }
            }
            var q = O,
                D = function(t) {
                    return new Array(t.length)
                };

            function U(t, n) {
                this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n
            }
            U.prototype = {
                constructor: U,
                appendChild: function(t) {
                    return this._parent.insertBefore(t, this._next)
                },
                insertBefore: function(t, n) {
                    return this._parent.insertBefore(t, n)
                },
                querySelector: function(t) {
                    return this._parent.querySelector(t)
                },
                querySelectorAll: function(t) {
                    return this._parent.querySelectorAll(t)
                }
            };
            var j = "$";

            function F(t, n, e, r, i, u) {
                for (var o, a = 0, c = n.length, f = u.length; a < f; ++a)(o = n[a]) ? (o.__data__ = u[a], r[a] = o) : e[a] = new U(t, u[a]);
                for (; a < c; ++a)(o = n[a]) && (i[a] = o)
            }

            function I(t, n, e, r, i, u, o) {
                var a, c, f, s = {},
                    l = n.length,
                    h = u.length,
                    d = new Array(l);
                for (a = 0; a < l; ++a)(c = n[a]) && (d[a] = f = j + o.call(c, c.__data__, a, n), f in s ? i[a] = c : s[f] = c);
                for (a = 0; a < h; ++a)(c = s[f = j + o.call(t, u[a], a, u)]) ? (r[a] = c, c.__data__ = u[a], s[f] = null) : e[a] = new U(t, u[a]);
                for (a = 0; a < l; ++a)(c = n[a]) && s[d[a]] === c && (i[a] = c)
            }

            function Y(t, n) {
                return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
            }
            var B = function(t) {
                return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
            };

            function H(t, n) {
                return t.style.getPropertyValue(n) || B(t).getComputedStyle(t, null).getPropertyValue(n)
            }

            function X(t) {
                return t.trim().split(/^|\s+/)
            }

            function V(t) {
                return t.classList || new $(t)
            }

            function $(t) {
                this._node = t, this._names = X(t.getAttribute("class") || "")
            }

            function W(t, n) {
                for (var e = V(t), r = -1, i = n.length; ++r < i;) e.add(n[r])
            }

            function Z(t, n) {
                for (var e = V(t), r = -1, i = n.length; ++r < i;) e.remove(n[r])
            }

            function G() {
                this.textContent = ""
            }

            function Q() {
                this.innerHTML = ""
            }

            function J() {
                this.nextSibling && this.parentNode.appendChild(this)
            }

            function K() {
                this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
            }

            function tt() {
                return null
            }

            function nt() {
                var t = this.parentNode;
                t && t.removeChild(this)
            }

            function et() {
                return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling)
            }

            function rt() {
                return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling)
            }
            $.prototype = {
                add: function(t) {
                    this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
                },
                remove: function(t) {
                    var n = this._names.indexOf(t);
                    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")))
                },
                contains: function(t) {
                    return this._names.indexOf(t) >= 0
                }
            };
            var it = {},
                ut = null;

            function ot(t, n, e) {
                return t = at(t, n, e),
                    function(n) {
                        var e = n.relatedTarget;
                        e && (e === this || 8 & e.compareDocumentPosition(this)) || t.call(this, n)
                    }
            }

            function at(t, n, e) {
                return function(r) {
                    var i = ut;
                    ut = r;
                    try {
                        t.call(this, this.__data__, n, e)
                    } finally {
                        ut = i
                    }
                }
            }

            function ct(t) {
                return function() {
                    var n = this.__on;
                    if (n) {
                        for (var e, r = 0, i = -1, u = n.length; r < u; ++r) e = n[r], t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e : this.removeEventListener(e.type, e.listener, e.capture);
                        ++i ? n.length = i : delete this.__on
                    }
                }
            }

            function ft(t, n, e) {
                var r = it.hasOwnProperty(t.type) ? ot : at;
                return function(i, u, o) {
                    var a, c = this.__on,
                        f = r(n, u, o);
                    if (c)
                        for (var s = 0, l = c.length; s < l; ++s)
                            if ((a = c[s]).type === t.type && a.name === t.name) return this.removeEventListener(a.type, a.listener, a.capture), this.addEventListener(a.type, a.listener = f, a.capture = e), void(a.value = n);
                    this.addEventListener(t.type, f, e), a = {
                        type: t.type,
                        name: t.name,
                        value: n,
                        listener: f,
                        capture: e
                    }, c ? c.push(a) : this.__on = [a]
                }
            }

            function st(t, n, e, r) {
                var i = ut;
                t.sourceEvent = ut, ut = t;
                try {
                    return n.apply(e, r)
                } finally {
                    ut = i
                }
            }

            function lt(t, n, e) {
                var r = B(t),
                    i = r.CustomEvent;
                "function" == typeof i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i)
            }
            "undefined" != typeof document && ("onmouseenter" in document.documentElement || (it = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            }));
            var ht = [null];

            function dt(t, n) {
                this._groups = t, this._parents = n
            }

            function pt() {
                return new dt([
                    [document.documentElement]
                ], ht)
            }
            dt.prototype = pt.prototype = {
                constructor: dt,
                select: function(t) {
                    "function" != typeof t && (t = C(t));
                    for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                        for (var u, o, a = n[i], c = a.length, f = r[i] = new Array(c), s = 0; s < c; ++s)(u = a[s]) && (o = t.call(u, u.__data__, s, a)) && ("__data__" in u && (o.__data__ = u.__data__), f[s] = o);
                    return new dt(r, this._parents)
                },
                selectAll: function(t) {
                    "function" != typeof t && (t = P(t));
                    for (var n = this._groups, e = n.length, r = [], i = [], u = 0; u < e; ++u)
                        for (var o, a = n[u], c = a.length, f = 0; f < c; ++f)(o = a[f]) && (r.push(t.call(o, o.__data__, f, a)), i.push(o));
                    return new dt(r, i)
                },
                filter: function(t) {
                    "function" != typeof t && (t = q(t));
                    for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                        for (var u, o = n[i], a = o.length, c = r[i] = [], f = 0; f < a; ++f)(u = o[f]) && t.call(u, u.__data__, f, o) && c.push(u);
                    return new dt(r, this._parents)
                },
                data: function(t, n) {
                    if (!t) return p = new Array(this.size()), s = -1, this.each((function(t) {
                        p[++s] = t
                    })), p;
                    var e, r = n ? I : F,
                        i = this._parents,
                        u = this._groups;
                    "function" != typeof t && (e = t, t = function() {
                        return e
                    });
                    for (var o = u.length, a = new Array(o), c = new Array(o), f = new Array(o), s = 0; s < o; ++s) {
                        var l = i[s],
                            h = u[s],
                            d = h.length,
                            p = t.call(l, l && l.__data__, s, i),
                            v = p.length,
                            y = c[s] = new Array(v),
                            _ = a[s] = new Array(v);
                        r(l, h, y, _, f[s] = new Array(d), p, n);
                        for (var g, m, x = 0, b = 0; x < v; ++x)
                            if (g = y[x]) {
                                for (x >= b && (b = x + 1); !(m = _[b]) && ++b < v;);
                                g._next = m || null
                            }
                    }
                    return (a = new dt(a, i))._enter = c, a._exit = f, a
                },
                enter: function() {
                    return new dt(this._enter || this._groups.map(D), this._parents)
                },
                exit: function() {
                    return new dt(this._exit || this._groups.map(D), this._parents)
                },
                merge: function(t) {
                    for (var n = this._groups, e = t._groups, r = n.length, i = e.length, u = Math.min(r, i), o = new Array(r), a = 0; a < u; ++a)
                        for (var c, f = n[a], s = e[a], l = f.length, h = o[a] = new Array(l), d = 0; d < l; ++d)(c = f[d] || s[d]) && (h[d] = c);
                    for (; a < r; ++a) o[a] = n[a];
                    return new dt(o, this._parents)
                },
                order: function() {
                    for (var t = this._groups, n = -1, e = t.length; ++n < e;)
                        for (var r, i = t[n], u = i.length - 1, o = i[u]; --u >= 0;)(r = i[u]) && (o && o !== r.nextSibling && o.parentNode.insertBefore(r, o), o = r);
                    return this
                },
                sort: function(t) {
                    function n(n, e) {
                        return n && e ? t(n.__data__, e.__data__) : !n - !e
                    }
                    t || (t = Y);
                    for (var e = this._groups, r = e.length, i = new Array(r), u = 0; u < r; ++u) {
                        for (var o, a = e[u], c = a.length, f = i[u] = new Array(c), s = 0; s < c; ++s)(o = a[s]) && (f[s] = o);
                        f.sort(n)
                    }
                    return new dt(i, this._parents).order()
                },
                call: function() {
                    var t = arguments[0];
                    return arguments[0] = this, t.apply(null, arguments), this
                },
                nodes: function() {
                    var t = new Array(this.size()),
                        n = -1;
                    return this.each((function() {
                        t[++n] = this
                    })), t
                },
                node: function() {
                    for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
                        for (var r = t[n], i = 0, u = r.length; i < u; ++i) {
                            var o = r[i];
                            if (o) return o
                        }
                    return null
                },
                size: function() {
                    var t = 0;
                    return this.each((function() {
                        ++t
                    })), t
                },
                empty: function() {
                    return !this.node()
                },
                each: function(t) {
                    for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
                        for (var i, u = n[e], o = 0, a = u.length; o < a; ++o)(i = u[o]) && t.call(i, i.__data__, o, u);
                    return this
                },
                attr: function(t, n) {
                    var e = S(t);
                    if (arguments.length < 2) {
                        var r = this.node();
                        return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e)
                    }
                    return this.each((null == n ? e.local ? function(t) {
                        return function() {
                            this.removeAttributeNS(t.space, t.local)
                        }
                    } : function(t) {
                        return function() {
                            this.removeAttribute(t)
                        }
                    } : "function" == typeof n ? e.local ? function(t, n) {
                        return function() {
                            var e = n.apply(this, arguments);
                            null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
                        }
                    } : function(t, n) {
                        return function() {
                            var e = n.apply(this, arguments);
                            null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
                        }
                    } : e.local ? function(t, n) {
                        return function() {
                            this.setAttributeNS(t.space, t.local, n)
                        }
                    } : function(t, n) {
                        return function() {
                            this.setAttribute(t, n)
                        }
                    })(e, n))
                },
                style: function(t, n, e) {
                    return arguments.length > 1 ? this.each((null == n ? function(t) {
                        return function() {
                            this.style.removeProperty(t)
                        }
                    } : "function" == typeof n ? function(t, n, e) {
                        return function() {
                            var r = n.apply(this, arguments);
                            null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
                        }
                    } : function(t, n, e) {
                        return function() {
                            this.style.setProperty(t, n, e)
                        }
                    })(t, n, null == e ? "" : e)) : H(this.node(), t)
                },
                property: function(t, n) {
                    return arguments.length > 1 ? this.each((null == n ? function(t) {
                        return function() {
                            delete this[t]
                        }
                    } : "function" == typeof n ? function(t, n) {
                        return function() {
                            var e = n.apply(this, arguments);
                            null == e ? delete this[t] : this[t] = e
                        }
                    } : function(t, n) {
                        return function() {
                            this[t] = n
                        }
                    })(t, n)) : this.node()[t]
                },
                classed: function(t, n) {
                    var e = X(t + "");
                    if (arguments.length < 2) {
                        for (var r = V(this.node()), i = -1, u = e.length; ++i < u;)
                            if (!r.contains(e[i])) return !1;
                        return !0
                    }
                    return this.each(("function" == typeof n ? function(t, n) {
                        return function() {
                            (n.apply(this, arguments) ? W : Z)(this, t)
                        }
                    } : n ? function(t) {
                        return function() {
                            W(this, t)
                        }
                    } : function(t) {
                        return function() {
                            Z(this, t)
                        }
                    })(e, n))
                },
                text: function(t) {
                    return arguments.length ? this.each(null == t ? G : ("function" == typeof t ? function(t) {
                        return function() {
                            var n = t.apply(this, arguments);
                            this.textContent = null == n ? "" : n
                        }
                    } : function(t) {
                        return function() {
                            this.textContent = t
                        }
                    })(t)) : this.node().textContent
                },
                html: function(t) {
                    return arguments.length ? this.each(null == t ? Q : ("function" == typeof t ? function(t) {
                        return function() {
                            var n = t.apply(this, arguments);
                            this.innerHTML = null == n ? "" : n
                        }
                    } : function(t) {
                        return function() {
                            this.innerHTML = t
                        }
                    })(t)) : this.node().innerHTML
                },
                raise: function() {
                    return this.each(J)
                },
                lower: function() {
                    return this.each(K)
                },
                append: function(t) {
                    var n = "function" == typeof t ? t : E(t);
                    return this.select((function() {
                        return this.appendChild(n.apply(this, arguments))
                    }))
                },
                insert: function(t, n) {
                    var e = "function" == typeof t ? t : E(t),
                        r = null == n ? tt : "function" == typeof n ? n : C(n);
                    return this.select((function() {
                        return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null)
                    }))
                },
                remove: function() {
                    return this.each(nt)
                },
                clone: function(t) {
                    return this.select(t ? rt : et)
                },
                datum: function(t) {
                    return arguments.length ? this.property("__data__", t) : this.node().__data__
                },
                on: function(t, n, e) {
                    var r, i, u = function(t) {
                            return t.trim().split(/^|\s+/).map((function(t) {
                                var n = "",
                                    e = t.indexOf(".");
                                return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), {
                                    type: t,
                                    name: n
                                }
                            }))
                        }(t + ""),
                        o = u.length;
                    if (!(arguments.length < 2)) {
                        for (a = n ? ft : ct, null == e && (e = !1), r = 0; r < o; ++r) this.each(a(u[r], n, e));
                        return this
                    }
                    var a = this.node().__on;
                    if (a)
                        for (var c, f = 0, s = a.length; f < s; ++f)
                            for (r = 0, c = a[f]; r < o; ++r)
                                if ((i = u[r]).type === c.type && i.name === c.name) return c.value
                },
                dispatch: function(t, n) {
                    return this.each(("function" == typeof n ? function(t, n) {
                        return function() {
                            return lt(this, t, n.apply(this, arguments))
                        }
                    } : function(t, n) {
                        return function() {
                            return lt(this, t, n)
                        }
                    })(t, n))
                }
            };
            var vt = pt,
                yt = function(t) {
                    return "string" == typeof t ? new dt([
                        [document.querySelector(t)]
                    ], [document.documentElement]) : new dt([
                        [t]
                    ], ht)
                },
                _t = function(t) {
                    return yt(E(t).call(document.documentElement))
                },
                gt = 0;

            function mt() {
                return new xt
            }

            function xt() {
                this._ = "@" + (++gt).toString(36)
            }
            xt.prototype = mt.prototype = {
                constructor: xt,
                get: function(t) {
                    for (var n = this._; !(n in t);)
                        if (!(t = t.parentNode)) return;
                    return t[n]
                },
                set: function(t, n) {
                    return t[this._] = n
                },
                remove: function(t) {
                    return this._ in t && delete t[this._]
                },
                toString: function() {
                    return this._
                }
            };
            var bt = function() {
                    for (var t, n = ut; t = n.sourceEvent;) n = t;
                    return n
                },
                wt = function(t, n) {
                    var e = t.ownerSVGElement || t;
                    if (e.createSVGPoint) {
                        var r = e.createSVGPoint();
                        return r.x = n.clientX, r.y = n.clientY, [(r = r.matrixTransform(t.getScreenCTM().inverse())).x, r.y]
                    }
                    var i = t.getBoundingClientRect();
                    return [n.clientX - i.left - t.clientLeft, n.clientY - i.top - t.clientTop]
                },
                Mt = function(t) {
                    var n = bt();
                    return n.changedTouches && (n = n.changedTouches[0]), wt(t, n)
                },
                Tt = function(t) {
                    return "string" == typeof t ? new dt([document.querySelectorAll(t)], [document.documentElement]) : new dt([null == t ? [] : t], ht)
                },
                kt = function(t, n, e) {
                    arguments.length < 3 && (e = n, n = bt().changedTouches);
                    for (var r, i = 0, u = n ? n.length : 0; i < u; ++i)
                        if ((r = n[i]).identifier === e) return wt(t, r);
                    return null
                },
                Nt = function(t, n) {
                    null == n && (n = bt().touches);
                    for (var e = 0, r = n ? n.length : 0, i = new Array(r); e < r; ++e) i[e] = wt(t, n[e]);
                    return i
                };

            function St() {
                ut.stopImmediatePropagation()
            }
            var Et = function() {
                    ut.preventDefault(), ut.stopImmediatePropagation()
                },
                At = function(t) {
                    var n = t.document.documentElement,
                        e = yt(t).on("dragstart.drag", Et, !0);
                    "onselectstart" in n ? e.on("selectstart.drag", Et, !0) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none")
                };

            function Ct(t, n) {
                var e = t.document.documentElement,
                    r = yt(t).on("dragstart.drag", null);
                n && (r.on("click.drag", Et, !0), setTimeout((function() {
                    r.on("click.drag", null)
                }), 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect)
            }
            var zt = function(t) {
                return function() {
                    return t
                }
            };

            function Pt(t, n, e, r, i, u, o, a, c, f) {
                this.target = t, this.type = n, this.subject = e, this.identifier = r, this.active = i, this.x = u, this.y = o, this.dx = a, this.dy = c, this._ = f
            }

            function Ot() {
                return !ut.button
            }

            function Rt() {
                return this.parentNode
            }

            function Lt(t) {
                return null == t ? {
                    x: ut.x,
                    y: ut.y
                } : t
            }

            function qt() {
                return "ontouchstart" in this
            }
            Pt.prototype.on = function() {
                var t = this._.on.apply(this._, arguments);
                return t === this._ ? this : t
            };
            var Dt = function() {
                    var t, n, e, r, i = Ot,
                        u = Rt,
                        o = Lt,
                        a = qt,
                        c = {},
                        f = T("start", "drag", "end"),
                        s = 0,
                        l = 0;

                    function h(t) {
                        t.on("mousedown.drag", d).filter(a).on("touchstart.drag", y).on("touchmove.drag", _).on("touchend.drag touchcancel.drag", g).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
                    }

                    function d() {
                        if (!r && i.apply(this, arguments)) {
                            var o = m("mouse", u.apply(this, arguments), Mt, this, arguments);
                            o && (yt(ut.view).on("mousemove.drag", p, !0).on("mouseup.drag", v, !0), At(ut.view), St(), e = !1, t = ut.clientX, n = ut.clientY, o("start"))
                        }
                    }

                    function p() {
                        if (Et(), !e) {
                            var r = ut.clientX - t,
                                i = ut.clientY - n;
                            e = r * r + i * i > l
                        }
                        c.mouse("drag")
                    }

                    function v() {
                        yt(ut.view).on("mousemove.drag mouseup.drag", null), Ct(ut.view, e), Et(), c.mouse("end")
                    }

                    function y() {
                        if (i.apply(this, arguments)) {
                            var t, n, e = ut.changedTouches,
                                r = u.apply(this, arguments),
                                o = e.length;
                            for (t = 0; t < o; ++t)(n = m(e[t].identifier, r, kt, this, arguments)) && (St(), n("start"))
                        }
                    }

                    function _() {
                        var t, n, e = ut.changedTouches,
                            r = e.length;
                        for (t = 0; t < r; ++t)(n = c[e[t].identifier]) && (Et(), n("drag"))
                    }

                    function g() {
                        var t, n, e = ut.changedTouches,
                            i = e.length;
                        for (r && clearTimeout(r), r = setTimeout((function() {
                                r = null
                            }), 500), t = 0; t < i; ++t)(n = c[e[t].identifier]) && (St(), n("end"))
                    }

                    function m(t, n, e, r, i) {
                        var u, a, l, d = e(n, t),
                            p = f.copy();
                        if (st(new Pt(h, "beforestart", u, t, s, d[0], d[1], 0, 0, p), (function() {
                                return null != (ut.subject = u = o.apply(r, i)) && (a = u.x - d[0] || 0, l = u.y - d[1] || 0, !0)
                            }))) return function o(f) {
                            var v, y = d;
                            switch (f) {
                                case "start":
                                    c[t] = o, v = s++;
                                    break;
                                case "end":
                                    delete c[t], --s;
                                case "drag":
                                    d = e(n, t), v = s
                            }
                            st(new Pt(h, f, u, t, v, d[0] + a, d[1] + l, d[0] - y[0], d[1] - y[1], p), p.apply, p, [f, r, i])
                        }
                    }
                    return h.filter = function(t) {
                        return arguments.length ? (i = "function" == typeof t ? t : zt(!!t), h) : i
                    }, h.container = function(t) {
                        return arguments.length ? (u = "function" == typeof t ? t : zt(t), h) : u
                    }, h.subject = function(t) {
                        return arguments.length ? (o = "function" == typeof t ? t : zt(t), h) : o
                    }, h.touchable = function(t) {
                        return arguments.length ? (a = "function" == typeof t ? t : zt(!!t), h) : a
                    }, h.on = function() {
                        var t = f.on.apply(f, arguments);
                        return t === f ? h : t
                    }, h.clickDistance = function(t) {
                        return arguments.length ? (l = (t = +t) * t, h) : Math.sqrt(l)
                    }, h
                },
                Ut = function(t, n, e) {
                    t.prototype = n.prototype = e, e.constructor = t
                };

            function jt(t, n) {
                var e = Object.create(t.prototype);
                for (var r in n) e[r] = n[r];
                return e
            }

            function Ft() {}
            var It = "\\s*([+-]?\\d+)\\s*",
                Yt = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
                Bt = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
                Ht = /^#([0-9a-f]{3})$/,
                Xt = /^#([0-9a-f]{6})$/,
                Vt = new RegExp("^rgb\\(" + [It, It, It] + "\\)$"),
                $t = new RegExp("^rgb\\(" + [Bt, Bt, Bt] + "\\)$"),
                Wt = new RegExp("^rgba\\(" + [It, It, It, Yt] + "\\)$"),
                Zt = new RegExp("^rgba\\(" + [Bt, Bt, Bt, Yt] + "\\)$"),
                Gt = new RegExp("^hsl\\(" + [Yt, Bt, Bt] + "\\)$"),
                Qt = new RegExp("^hsla\\(" + [Yt, Bt, Bt, Yt] + "\\)$"),
                Jt = {
                    aliceblue: 15792383,
                    antiquewhite: 16444375,
                    aqua: 65535,
                    aquamarine: 8388564,
                    azure: 15794175,
                    beige: 16119260,
                    bisque: 16770244,
                    black: 0,
                    blanchedalmond: 16772045,
                    blue: 255,
                    blueviolet: 9055202,
                    brown: 10824234,
                    burlywood: 14596231,
                    cadetblue: 6266528,
                    chartreuse: 8388352,
                    chocolate: 13789470,
                    coral: 16744272,
                    cornflowerblue: 6591981,
                    cornsilk: 16775388,
                    crimson: 14423100,
                    cyan: 65535,
                    darkblue: 139,
                    darkcyan: 35723,
                    darkgoldenrod: 12092939,
                    darkgray: 11119017,
                    darkgreen: 25600,
                    darkgrey: 11119017,
                    darkkhaki: 12433259,
                    darkmagenta: 9109643,
                    darkolivegreen: 5597999,
                    darkorange: 16747520,
                    darkorchid: 10040012,
                    darkred: 9109504,
                    darksalmon: 15308410,
                    darkseagreen: 9419919,
                    darkslateblue: 4734347,
                    darkslategray: 3100495,
                    darkslategrey: 3100495,
                    darkturquoise: 52945,
                    darkviolet: 9699539,
                    deeppink: 16716947,
                    deepskyblue: 49151,
                    dimgray: 6908265,
                    dimgrey: 6908265,
                    dodgerblue: 2003199,
                    firebrick: 11674146,
                    floralwhite: 16775920,
                    forestgreen: 2263842,
                    fuchsia: 16711935,
                    gainsboro: 14474460,
                    ghostwhite: 16316671,
                    gold: 16766720,
                    goldenrod: 14329120,
                    gray: 8421504,
                    green: 32768,
                    greenyellow: 11403055,
                    grey: 8421504,
                    honeydew: 15794160,
                    hotpink: 16738740,
                    indianred: 13458524,
                    indigo: 4915330,
                    ivory: 16777200,
                    khaki: 15787660,
                    lavender: 15132410,
                    lavenderblush: 16773365,
                    lawngreen: 8190976,
                    lemonchiffon: 16775885,
                    lightblue: 11393254,
                    lightcoral: 15761536,
                    lightcyan: 14745599,
                    lightgoldenrodyellow: 16448210,
                    lightgray: 13882323,
                    lightgreen: 9498256,
                    lightgrey: 13882323,
                    lightpink: 16758465,
                    lightsalmon: 16752762,
                    lightseagreen: 2142890,
                    lightskyblue: 8900346,
                    lightslategray: 7833753,
                    lightslategrey: 7833753,
                    lightsteelblue: 11584734,
                    lightyellow: 16777184,
                    lime: 65280,
                    limegreen: 3329330,
                    linen: 16445670,
                    magenta: 16711935,
                    maroon: 8388608,
                    mediumaquamarine: 6737322,
                    mediumblue: 205,
                    mediumorchid: 12211667,
                    mediumpurple: 9662683,
                    mediumseagreen: 3978097,
                    mediumslateblue: 8087790,
                    mediumspringgreen: 64154,
                    mediumturquoise: 4772300,
                    mediumvioletred: 13047173,
                    midnightblue: 1644912,
                    mintcream: 16121850,
                    mistyrose: 16770273,
                    moccasin: 16770229,
                    navajowhite: 16768685,
                    navy: 128,
                    oldlace: 16643558,
                    olive: 8421376,
                    olivedrab: 7048739,
                    orange: 16753920,
                    orangered: 16729344,
                    orchid: 14315734,
                    palegoldenrod: 15657130,
                    palegreen: 10025880,
                    paleturquoise: 11529966,
                    palevioletred: 14381203,
                    papayawhip: 16773077,
                    peachpuff: 16767673,
                    peru: 13468991,
                    pink: 16761035,
                    plum: 14524637,
                    powderblue: 11591910,
                    purple: 8388736,
                    rebeccapurple: 6697881,
                    red: 16711680,
                    rosybrown: 12357519,
                    royalblue: 4286945,
                    saddlebrown: 9127187,
                    salmon: 16416882,
                    sandybrown: 16032864,
                    seagreen: 3050327,
                    seashell: 16774638,
                    sienna: 10506797,
                    silver: 12632256,
                    skyblue: 8900331,
                    slateblue: 6970061,
                    slategray: 7372944,
                    slategrey: 7372944,
                    snow: 16775930,
                    springgreen: 65407,
                    steelblue: 4620980,
                    tan: 13808780,
                    teal: 32896,
                    thistle: 14204888,
                    tomato: 16737095,
                    turquoise: 4251856,
                    violet: 15631086,
                    wheat: 16113331,
                    white: 16777215,
                    whitesmoke: 16119285,
                    yellow: 16776960,
                    yellowgreen: 10145074
                };

            function Kt(t) {
                var n;
                return t = (t + "").trim().toLowerCase(), (n = Ht.exec(t)) ? new un((n = parseInt(n[1], 16)) >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1) : (n = Xt.exec(t)) ? tn(parseInt(n[1], 16)) : (n = Vt.exec(t)) ? new un(n[1], n[2], n[3], 1) : (n = $t.exec(t)) ? new un(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = Wt.exec(t)) ? nn(n[1], n[2], n[3], n[4]) : (n = Zt.exec(t)) ? nn(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = Gt.exec(t)) ? on(n[1], n[2] / 100, n[3] / 100, 1) : (n = Qt.exec(t)) ? on(n[1], n[2] / 100, n[3] / 100, n[4]) : Jt.hasOwnProperty(t) ? tn(Jt[t]) : "transparent" === t ? new un(NaN, NaN, NaN, 0) : null
            }

            function tn(t) {
                return new un(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
            }

            function nn(t, n, e, r) {
                return r <= 0 && (t = n = e = NaN), new un(t, n, e, r)
            }

            function en(t) {
                return t instanceof Ft || (t = Kt(t)), t ? new un((t = t.rgb()).r, t.g, t.b, t.opacity) : new un
            }

            function rn(t, n, e, r) {
                return 1 === arguments.length ? en(t) : new un(t, n, e, null == r ? 1 : r)
            }

            function un(t, n, e, r) {
                this.r = +t, this.g = +n, this.b = +e, this.opacity = +r
            }

            function on(t, n, e, r) {
                return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new cn(t, n, e, r)
            }

            function an(t, n, e, r) {
                return 1 === arguments.length ? function(t) {
                    if (t instanceof cn) return new cn(t.h, t.s, t.l, t.opacity);
                    if (t instanceof Ft || (t = Kt(t)), !t) return new cn;
                    if (t instanceof cn) return t;
                    var n = (t = t.rgb()).r / 255,
                        e = t.g / 255,
                        r = t.b / 255,
                        i = Math.min(n, e, r),
                        u = Math.max(n, e, r),
                        o = NaN,
                        a = u - i,
                        c = (u + i) / 2;
                    return a ? (o = n === u ? (e - r) / a + 6 * (e < r) : e === u ? (r - n) / a + 2 : (n - e) / a + 4, a /= c < .5 ? u + i : 2 - u - i, o *= 60) : a = c > 0 && c < 1 ? 0 : o, new cn(o, a, c, t.opacity)
                }(t) : new cn(t, n, e, null == r ? 1 : r)
            }

            function cn(t, n, e, r) {
                this.h = +t, this.s = +n, this.l = +e, this.opacity = +r
            }

            function fn(t, n, e) {
                return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n)
            }
            Ut(Ft, Kt, {
                displayable: function() {
                    return this.rgb().displayable()
                },
                toString: function() {
                    return this.rgb() + ""
                }
            }), Ut(un, rn, jt(Ft, {
                brighter: function(t) {
                    return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new un(this.r * t, this.g * t, this.b * t, this.opacity)
                },
                darker: function(t) {
                    return t = null == t ? .7 : Math.pow(.7, t), new un(this.r * t, this.g * t, this.b * t, this.opacity)
                },
                rgb: function() {
                    return this
                },
                displayable: function() {
                    return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1
                },
                toString: function() {
                    var t = this.opacity;
                    return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
                }
            })), Ut(cn, an, jt(Ft, {
                brighter: function(t) {
                    return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new cn(this.h, this.s, this.l * t, this.opacity)
                },
                darker: function(t) {
                    return t = null == t ? .7 : Math.pow(.7, t), new cn(this.h, this.s, this.l * t, this.opacity)
                },
                rgb: function() {
                    var t = this.h % 360 + 360 * (this.h < 0),
                        n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                        e = this.l,
                        r = e + (e < .5 ? e : 1 - e) * n,
                        i = 2 * e - r;
                    return new un(fn(t >= 240 ? t - 240 : t + 120, i, r), fn(t, i, r), fn(t < 120 ? t + 240 : t - 120, i, r), this.opacity)
                },
                displayable: function() {
                    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
                }
            }));
            var sn = Math.PI / 180,
                ln = 180 / Math.PI,
                hn = .95047,
                dn = 1,
                pn = 1.08883,
                vn = 4 / 29,
                yn = 6 / 29,
                _n = 3 * yn * yn,
                gn = yn * yn * yn;

            function mn(t) {
                if (t instanceof bn) return new bn(t.l, t.a, t.b, t.opacity);
                if (t instanceof Sn) {
                    var n = t.h * sn;
                    return new bn(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity)
                }
                t instanceof un || (t = en(t));
                var e = kn(t.r),
                    r = kn(t.g),
                    i = kn(t.b),
                    u = wn((.4124564 * e + .3575761 * r + .1804375 * i) / hn),
                    o = wn((.2126729 * e + .7151522 * r + .072175 * i) / dn);
                return new bn(116 * o - 16, 500 * (u - o), 200 * (o - wn((.0193339 * e + .119192 * r + .9503041 * i) / pn)), t.opacity)
            }

            function xn(t, n, e, r) {
                return 1 === arguments.length ? mn(t) : new bn(t, n, e, null == r ? 1 : r)
            }

            function bn(t, n, e, r) {
                this.l = +t, this.a = +n, this.b = +e, this.opacity = +r
            }

            function wn(t) {
                return t > gn ? Math.pow(t, 1 / 3) : t / _n + vn
            }

            function Mn(t) {
                return t > yn ? t * t * t : _n * (t - vn)
            }

            function Tn(t) {
                return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055)
            }

            function kn(t) {
                return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
            }

            function Nn(t, n, e, r) {
                return 1 === arguments.length ? function(t) {
                    if (t instanceof Sn) return new Sn(t.h, t.c, t.l, t.opacity);
                    t instanceof bn || (t = mn(t));
                    var n = Math.atan2(t.b, t.a) * ln;
                    return new Sn(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity)
                }(t) : new Sn(t, n, e, null == r ? 1 : r)
            }

            function Sn(t, n, e, r) {
                this.h = +t, this.c = +n, this.l = +e, this.opacity = +r
            }
            Ut(bn, xn, jt(Ft, {
                brighter: function(t) {
                    return new bn(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
                },
                darker: function(t) {
                    return new bn(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
                },
                rgb: function() {
                    var t = (this.l + 16) / 116,
                        n = isNaN(this.a) ? t : t + this.a / 500,
                        e = isNaN(this.b) ? t : t - this.b / 200;
                    return t = dn * Mn(t), new un(Tn(3.2404542 * (n = hn * Mn(n)) - 1.5371385 * t - .4985314 * (e = pn * Mn(e))), Tn(-.969266 * n + 1.8760108 * t + .041556 * e), Tn(.0556434 * n - .2040259 * t + 1.0572252 * e), this.opacity)
                }
            })), Ut(Sn, Nn, jt(Ft, {
                brighter: function(t) {
                    return new Sn(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity)
                },
                darker: function(t) {
                    return new Sn(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity)
                },
                rgb: function() {
                    return mn(this).rgb()
                }
            }));
            var En = -.29227,
                An = -.90649,
                Cn = 1.97294,
                zn = Cn * An,
                Pn = 1.78277 * Cn,
                On = 1.78277 * En - -.14861 * An;

            function Rn(t, n, e, r) {
                return 1 === arguments.length ? function(t) {
                    if (t instanceof Ln) return new Ln(t.h, t.s, t.l, t.opacity);
                    t instanceof un || (t = en(t));
                    var n = t.r / 255,
                        e = t.g / 255,
                        r = t.b / 255,
                        i = (On * r + zn * n - Pn * e) / (On + zn - Pn),
                        u = r - i,
                        o = (Cn * (e - i) - En * u) / An,
                        a = Math.sqrt(o * o + u * u) / (Cn * i * (1 - i)),
                        c = a ? Math.atan2(o, u) * ln - 120 : NaN;
                    return new Ln(c < 0 ? c + 360 : c, a, i, t.opacity)
                }(t) : new Ln(t, n, e, null == r ? 1 : r)
            }

            function Ln(t, n, e, r) {
                this.h = +t, this.s = +n, this.l = +e, this.opacity = +r
            }

            function qn(t, n, e, r, i) {
                var u = t * t,
                    o = u * t;
                return ((1 - 3 * t + 3 * u - o) * n + (4 - 6 * u + 3 * o) * e + (1 + 3 * t + 3 * u - 3 * o) * r + o * i) / 6
            }
            Ut(Ln, Rn, jt(Ft, {
                brighter: function(t) {
                    return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Ln(this.h, this.s, this.l * t, this.opacity)
                },
                darker: function(t) {
                    return t = null == t ? .7 : Math.pow(.7, t), new Ln(this.h, this.s, this.l * t, this.opacity)
                },
                rgb: function() {
                    var t = isNaN(this.h) ? 0 : (this.h + 120) * sn,
                        n = +this.l,
                        e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
                        r = Math.cos(t),
                        i = Math.sin(t);
                    return new un(255 * (n + e * (-.14861 * r + 1.78277 * i)), 255 * (n + e * (En * r + An * i)), 255 * (n + e * (Cn * r)), this.opacity)
                }
            }));
            var Dn = function(t) {
                    var n = t.length - 1;
                    return function(e) {
                        var r = e <= 0 ? e = 0 : e >= 1 ? (e = 1, n - 1) : Math.floor(e * n),
                            i = t[r],
                            u = t[r + 1],
                            o = r > 0 ? t[r - 1] : 2 * i - u,
                            a = r < n - 1 ? t[r + 2] : 2 * u - i;
                        return qn((e - r / n) * n, o, i, u, a)
                    }
                },
                Un = function(t) {
                    var n = t.length;
                    return function(e) {
                        var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
                            i = t[(r + n - 1) % n],
                            u = t[r % n],
                            o = t[(r + 1) % n],
                            a = t[(r + 2) % n];
                        return qn((e - r / n) * n, i, u, o, a)
                    }
                },
                jn = function(t) {
                    return function() {
                        return t
                    }
                };

            function Fn(t, n) {
                return function(e) {
                    return t + e * n
                }
            }

            function In(t, n) {
                var e = n - t;
                return e ? Fn(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : jn(isNaN(t) ? n : t)
            }

            function Yn(t, n) {
                var e = n - t;
                return e ? Fn(t, e) : jn(isNaN(t) ? n : t)
            }
            var Bn = function t(n) {
                var e = function(t) {
                    return 1 == (t = +t) ? Yn : function(n, e) {
                        return e - n ? function(t, n, e) {
                            return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e,
                                function(r) {
                                    return Math.pow(t + r * n, e)
                                }
                        }(n, e, t) : jn(isNaN(n) ? e : n)
                    }
                }(n);

                function r(t, n) {
                    var r = e((t = rn(t)).r, (n = rn(n)).r),
                        i = e(t.g, n.g),
                        u = e(t.b, n.b),
                        o = Yn(t.opacity, n.opacity);
                    return function(n) {
                        return t.r = r(n), t.g = i(n), t.b = u(n), t.opacity = o(n), t + ""
                    }
                }
                return r.gamma = t, r
            }(1);

            function Hn(t) {
                return function(n) {
                    var e, r, i = n.length,
                        u = new Array(i),
                        o = new Array(i),
                        a = new Array(i);
                    for (e = 0; e < i; ++e) r = rn(n[e]), u[e] = r.r || 0, o[e] = r.g || 0, a[e] = r.b || 0;
                    return u = t(u), o = t(o), a = t(a), r.opacity = 1,
                        function(t) {
                            return r.r = u(t), r.g = o(t), r.b = a(t), r + ""
                        }
                }
            }
            var Xn, Vn, $n, Wn, Zn = Hn(Dn),
                Gn = Hn(Un),
                Qn = function(t, n) {
                    var e, r = n ? n.length : 0,
                        i = t ? Math.min(r, t.length) : 0,
                        u = new Array(i),
                        o = new Array(r);
                    for (e = 0; e < i; ++e) u[e] = ie(t[e], n[e]);
                    for (; e < r; ++e) o[e] = n[e];
                    return function(t) {
                        for (e = 0; e < i; ++e) o[e] = u[e](t);
                        return o
                    }
                },
                Jn = function(t, n) {
                    var e = new Date;
                    return n -= t = +t,
                        function(r) {
                            return e.setTime(t + n * r), e
                        }
                },
                Kn = function(t, n) {
                    return n -= t = +t,
                        function(e) {
                            return t + n * e
                        }
                },
                te = function(t, n) {
                    var e, r = {},
                        i = {};
                    for (e in null !== t && "object" == typeof t || (t = {}), null !== n && "object" == typeof n || (n = {}), n) e in t ? r[e] = ie(t[e], n[e]) : i[e] = n[e];
                    return function(t) {
                        for (e in r) i[e] = r[e](t);
                        return i
                    }
                },
                ne = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
                ee = new RegExp(ne.source, "g"),
                re = function(t, n) {
                    var e, r, i, u = ne.lastIndex = ee.lastIndex = 0,
                        o = -1,
                        a = [],
                        c = [];
                    for (t += "", n += "";
                        (e = ne.exec(t)) && (r = ee.exec(n));)(i = r.index) > u && (i = n.slice(u, i), a[o] ? a[o] += i : a[++o] = i), (e = e[0]) === (r = r[0]) ? a[o] ? a[o] += r : a[++o] = r : (a[++o] = null, c.push({
                        i: o,
                        x: Kn(e, r)
                    })), u = ee.lastIndex;
                    return u < n.length && (i = n.slice(u), a[o] ? a[o] += i : a[++o] = i), a.length < 2 ? c[0] ? function(t) {
                        return function(n) {
                            return t(n) + ""
                        }
                    }(c[0].x) : function(t) {
                        return function() {
                            return t
                        }
                    }(n) : (n = c.length, function(t) {
                        for (var e, r = 0; r < n; ++r) a[(e = c[r]).i] = e.x(t);
                        return a.join("")
                    })
                },
                ie = function(t, n) {
                    var e, r = typeof n;
                    return null == n || "boolean" === r ? jn(n) : ("number" === r ? Kn : "string" === r ? (e = Kt(n)) ? (n = e, Bn) : re : n instanceof Kt ? Bn : n instanceof Date ? Jn : Array.isArray(n) ? Qn : "function" != typeof n.valueOf && "function" != typeof n.toString || isNaN(n) ? te : Kn)(t, n)
                },
                ue = function(t, n) {
                    return n -= t = +t,
                        function(e) {
                            return Math.round(t + n * e)
                        }
                },
                oe = 180 / Math.PI,
                ae = {
                    translateX: 0,
                    translateY: 0,
                    rotate: 0,
                    skewX: 0,
                    scaleX: 1,
                    scaleY: 1
                },
                ce = function(t, n, e, r, i, u) {
                    var o, a, c;
                    return (o = Math.sqrt(t * t + n * n)) && (t /= o, n /= o), (c = t * e + n * r) && (e -= t * c, r -= n * c), (a = Math.sqrt(e * e + r * r)) && (e /= a, r /= a, c /= a), t * r < n * e && (t = -t, n = -n, c = -c, o = -o), {
                        translateX: i,
                        translateY: u,
                        rotate: Math.atan2(n, t) * oe,
                        skewX: Math.atan(c) * oe,
                        scaleX: o,
                        scaleY: a
                    }
                };

            function fe(t, n, e, r) {
                function i(t) {
                    return t.length ? t.pop() + " " : ""
                }
                return function(u, o) {
                    var a = [],
                        c = [];
                    return u = t(u), o = t(o),
                        function(t, r, i, u, o, a) {
                            if (t !== i || r !== u) {
                                var c = o.push("translate(", null, n, null, e);
                                a.push({
                                    i: c - 4,
                                    x: Kn(t, i)
                                }, {
                                    i: c - 2,
                                    x: Kn(r, u)
                                })
                            } else(i || u) && o.push("translate(" + i + n + u + e)
                        }(u.translateX, u.translateY, o.translateX, o.translateY, a, c),
                        function(t, n, e, u) {
                            t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), u.push({
                                i: e.push(i(e) + "rotate(", null, r) - 2,
                                x: Kn(t, n)
                            })) : n && e.push(i(e) + "rotate(" + n + r)
                        }(u.rotate, o.rotate, a, c),
                        function(t, n, e, u) {
                            t !== n ? u.push({
                                i: e.push(i(e) + "skewX(", null, r) - 2,
                                x: Kn(t, n)
                            }) : n && e.push(i(e) + "skewX(" + n + r)
                        }(u.skewX, o.skewX, a, c),
                        function(t, n, e, r, u, o) {
                            if (t !== e || n !== r) {
                                var a = u.push(i(u) + "scale(", null, ",", null, ")");
                                o.push({
                                    i: a - 4,
                                    x: Kn(t, e)
                                }, {
                                    i: a - 2,
                                    x: Kn(n, r)
                                })
                            } else 1 === e && 1 === r || u.push(i(u) + "scale(" + e + "," + r + ")")
                        }(u.scaleX, u.scaleY, o.scaleX, o.scaleY, a, c), u = o = null,
                        function(t) {
                            for (var n, e = -1, r = c.length; ++e < r;) a[(n = c[e]).i] = n.x(t);
                            return a.join("")
                        }
                }
            }
            var se = fe((function(t) {
                    return "none" === t ? ae : (Xn || (Xn = document.createElement("DIV"), Vn = document.documentElement, $n = document.defaultView), Xn.style.transform = t, t = $n.getComputedStyle(Vn.appendChild(Xn), null).getPropertyValue("transform"), Vn.removeChild(Xn), t = t.slice(7, -1).split(","), ce(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
                }), "px, ", "px)", "deg)"),
                le = fe((function(t) {
                    return null == t ? ae : (Wn || (Wn = document.createElementNS("http://www.w3.org/2000/svg", "g")), Wn.setAttribute("transform", t), (t = Wn.transform.baseVal.consolidate()) ? (t = t.matrix, ce(t.a, t.b, t.c, t.d, t.e, t.f)) : ae)
                }), ", ", ")", ")"),
                he = Math.SQRT2;

            function de(t) {
                return ((t = Math.exp(t)) + 1 / t) / 2
            }
            var pe = function(t, n) {
                var e, r, i = t[0],
                    u = t[1],
                    o = t[2],
                    a = n[0],
                    c = n[1],
                    f = n[2],
                    s = a - i,
                    l = c - u,
                    h = s * s + l * l;
                if (h < 1e-12) r = Math.log(f / o) / he, e = function(t) {
                    return [i + t * s, u + t * l, o * Math.exp(he * t * r)]
                };
                else {
                    var d = Math.sqrt(h),
                        p = (f * f - o * o + 4 * h) / (2 * o * 2 * d),
                        v = (f * f - o * o - 4 * h) / (2 * f * 2 * d),
                        y = Math.log(Math.sqrt(p * p + 1) - p),
                        _ = Math.log(Math.sqrt(v * v + 1) - v);
                    r = (_ - y) / he, e = function(t) {
                        var n, e = t * r,
                            a = de(y),
                            c = o / (2 * d) * (a * (n = he * e + y, ((n = Math.exp(2 * n)) - 1) / (n + 1)) - function(t) {
                                return ((t = Math.exp(t)) - 1 / t) / 2
                            }(y));
                        return [i + c * s, u + c * l, o * a / de(he * e + y)]
                    }
                }
                return e.duration = 1e3 * r, e
            };

            function ve(t) {
                return function(n, e) {
                    var r = t((n = an(n)).h, (e = an(e)).h),
                        i = Yn(n.s, e.s),
                        u = Yn(n.l, e.l),
                        o = Yn(n.opacity, e.opacity);
                    return function(t) {
                        return n.h = r(t), n.s = i(t), n.l = u(t), n.opacity = o(t), n + ""
                    }
                }
            }
            var ye = ve(In),
                _e = ve(Yn);

            function ge(t, n) {
                var e = Yn((t = xn(t)).l, (n = xn(n)).l),
                    r = Yn(t.a, n.a),
                    i = Yn(t.b, n.b),
                    u = Yn(t.opacity, n.opacity);
                return function(n) {
                    return t.l = e(n), t.a = r(n), t.b = i(n), t.opacity = u(n), t + ""
                }
            }

            function me(t) {
                return function(n, e) {
                    var r = t((n = Nn(n)).h, (e = Nn(e)).h),
                        i = Yn(n.c, e.c),
                        u = Yn(n.l, e.l),
                        o = Yn(n.opacity, e.opacity);
                    return function(t) {
                        return n.h = r(t), n.c = i(t), n.l = u(t), n.opacity = o(t), n + ""
                    }
                }
            }
            var xe = me(In),
                be = me(Yn);

            function we(t) {
                return function n(e) {
                    function r(n, r) {
                        var i = t((n = Rn(n)).h, (r = Rn(r)).h),
                            u = Yn(n.s, r.s),
                            o = Yn(n.l, r.l),
                            a = Yn(n.opacity, r.opacity);
                        return function(t) {
                            return n.h = i(t), n.s = u(t), n.l = o(Math.pow(t, e)), n.opacity = a(t), n + ""
                        }
                    }
                    return e = +e, r.gamma = n, r
                }(1)
            }
            var Me, Te, ke = we(In),
                Ne = we(Yn),
                Se = function(t, n) {
                    for (var e = new Array(n), r = 0; r < n; ++r) e[r] = t(r / (n - 1));
                    return e
                },
                Ee = 0,
                Ae = 0,
                Ce = 0,
                ze = 1e3,
                Pe = 0,
                Oe = 0,
                Re = 0,
                Le = "object" == typeof performance && performance.now ? performance : Date,
                qe = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
                    setTimeout(t, 17)
                };

            function De() {
                return Oe || (qe(Ue), Oe = Le.now() + Re)
            }

            function Ue() {
                Oe = 0
            }

            function je() {
                this._call = this._time = this._next = null
            }

            function Fe(t, n, e) {
                var r = new je;
                return r.restart(t, n, e), r
            }

            function Ie() {
                De(), ++Ee;
                for (var t, n = Me; n;)(t = Oe - n._time) >= 0 && n._call.call(null, t), n = n._next;
                --Ee
            }

            function Ye() {
                Oe = (Pe = Le.now()) + Re, Ee = Ae = 0;
                try {
                    Ie()
                } finally {
                    Ee = 0,
                        function() {
                            for (var t, n, e = Me, r = 1 / 0; e;) e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Me = n);
                            Te = t, He(r)
                        }(), Oe = 0
                }
            }

            function Be() {
                var t = Le.now(),
                    n = t - Pe;
                n > ze && (Re -= n, Pe = t)
            }

            function He(t) {
                Ee || (Ae && (Ae = clearTimeout(Ae)), t - Oe > 24 ? (t < 1 / 0 && (Ae = setTimeout(Ye, t - Le.now() - Re)), Ce && (Ce = clearInterval(Ce))) : (Ce || (Pe = Le.now(), Ce = setInterval(Be, ze)), Ee = 1, qe(Ye)))
            }
            je.prototype = Fe.prototype = {
                constructor: je,
                restart: function(t, n, e) {
                    if ("function" != typeof t) throw new TypeError("callback is not a function");
                    e = (null == e ? De() : +e) + (null == n ? 0 : +n), this._next || Te === this || (Te ? Te._next = this : Me = this, Te = this), this._call = t, this._time = e, He()
                },
                stop: function() {
                    this._call && (this._call = null, this._time = 1 / 0, He())
                }
            };
            var Xe = function(t, n, e) {
                    var r = new je;
                    return n = null == n ? 0 : +n, r.restart((function(e) {
                        r.stop(), t(e + n)
                    }), n, e), r
                },
                Ve = function(t, n, e) {
                    var r = new je,
                        i = n;
                    return null == n ? (r.restart(t, n, e), r) : (n = +n, e = null == e ? De() : +e, r.restart((function u(o) {
                        o += i, r.restart(u, i += n, e), t(o)
                    }), n, e), r)
                },
                $e = T("start", "end", "interrupt"),
                We = [],
                Ze = 0,
                Ge = 1,
                Qe = 2,
                Je = 3,
                Ke = 4,
                tr = 5,
                nr = 6,
                er = function(t, n, e, r, i, u) {
                    var o = t.__transition;
                    if (o) {
                        if (e in o) return
                    } else t.__transition = {};
                    ! function(t, n, e) {
                        var r, i = t.__transition;

                        function u(c) {
                            var f, s, l, h;
                            if (e.state !== Ge) return a();
                            for (f in i)
                                if ((h = i[f]).name === e.name) {
                                    if (h.state === Je) return Xe(u);
                                    h.state === Ke ? (h.state = nr, h.timer.stop(), h.on.call("interrupt", t, t.__data__, h.index, h.group), delete i[f]) : +f < n && (h.state = nr, h.timer.stop(), delete i[f])
                                } if (Xe((function() {
                                    e.state === Je && (e.state = Ke, e.timer.restart(o, e.delay, e.time), o(c))
                                })), e.state = Qe, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Qe) {
                                for (e.state = Je, r = new Array(l = e.tween.length), f = 0, s = -1; f < l; ++f)(h = e.tween[f].value.call(t, t.__data__, e.index, e.group)) && (r[++s] = h);
                                r.length = s + 1
                            }
                        }

                        function o(n) {
                            for (var i = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(a), e.state = tr, 1), u = -1, o = r.length; ++u < o;) r[u].call(null, i);
                            e.state === tr && (e.on.call("end", t, t.__data__, e.index, e.group), a())
                        }

                        function a() {
                            for (var r in e.state = nr, e.timer.stop(), delete i[n], i) return;
                            delete t.__transition
                        }
                        i[n] = e, e.timer = Fe((function(t) {
                            e.state = Ge, e.timer.restart(u, e.delay, e.time), e.delay <= t && u(t - e.delay)
                        }), 0, e.time)
                    }(t, e, {
                        name: n,
                        index: r,
                        group: i,
                        on: $e,
                        tween: We,
                        time: u.time,
                        delay: u.delay,
                        duration: u.duration,
                        ease: u.ease,
                        timer: null,
                        state: Ze
                    })
                };

            function rr(t, n) {
                var e = ur(t, n);
                if (e.state > Ze) throw new Error("too late; already scheduled");
                return e
            }

            function ir(t, n) {
                var e = ur(t, n);
                if (e.state > Qe) throw new Error("too late; already started");
                return e
            }

            function ur(t, n) {
                var e = t.__transition;
                if (!e || !(e = e[n])) throw new Error("transition not found");
                return e
            }
            var or = function(t, n) {
                var e, r, i, u = t.__transition,
                    o = !0;
                if (u) {
                    for (i in n = null == n ? null : n + "", u)(e = u[i]).name === n ? (r = e.state > Qe && e.state < tr, e.state = nr, e.timer.stop(), r && e.on.call("interrupt", t, t.__data__, e.index, e.group), delete u[i]) : o = !1;
                    o && delete t.__transition
                }
            };

            function ar(t, n, e) {
                var r = t._id;
                return t.each((function() {
                        var t = ir(this, r);
                        (t.value || (t.value = {}))[n] = e.apply(this, arguments)
                    })),
                    function(t) {
                        return ur(t, r).value[n]
                    }
            }
            var cr = function(t, n) {
                    var e;
                    return ("number" == typeof n ? Kn : n instanceof Kt ? Bn : (e = Kt(n)) ? (n = e, Bn) : re)(t, n)
                },
                fr = vt.prototype.constructor,
                sr = 0;

            function lr(t, n, e, r) {
                this._groups = t, this._parents = n, this._name = e, this._id = r
            }

            function hr(t) {
                return vt().transition(t)
            }

            function dr() {
                return ++sr
            }
            var pr = vt.prototype;

            function vr(t) {
                return +t
            }

            function yr(t) {
                return t * t
            }

            function _r(t) {
                return t * (2 - t)
            }

            function gr(t) {
                return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2
            }

            function mr(t) {
                return t * t * t
            }

            function xr(t) {
                return --t * t * t + 1
            }

            function br(t) {
                return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
            }
            lr.prototype = hr.prototype = {
                constructor: lr,
                select: function(t) {
                    var n = this._name,
                        e = this._id;
                    "function" != typeof t && (t = C(t));
                    for (var r = this._groups, i = r.length, u = new Array(i), o = 0; o < i; ++o)
                        for (var a, c, f = r[o], s = f.length, l = u[o] = new Array(s), h = 0; h < s; ++h)(a = f[h]) && (c = t.call(a, a.__data__, h, f)) && ("__data__" in a && (c.__data__ = a.__data__), l[h] = c, er(l[h], n, e, h, l, ur(a, e)));
                    return new lr(u, this._parents, n, e)
                },
                selectAll: function(t) {
                    var n = this._name,
                        e = this._id;
                    "function" != typeof t && (t = P(t));
                    for (var r = this._groups, i = r.length, u = [], o = [], a = 0; a < i; ++a)
                        for (var c, f = r[a], s = f.length, l = 0; l < s; ++l)
                            if (c = f[l]) {
                                for (var h, d = t.call(c, c.__data__, l, f), p = ur(c, e), v = 0, y = d.length; v < y; ++v)(h = d[v]) && er(h, n, e, v, d, p);
                                u.push(d), o.push(c)
                            } return new lr(u, o, n, e)
                },
                filter: function(t) {
                    "function" != typeof t && (t = q(t));
                    for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                        for (var u, o = n[i], a = o.length, c = r[i] = [], f = 0; f < a; ++f)(u = o[f]) && t.call(u, u.__data__, f, o) && c.push(u);
                    return new lr(r, this._parents, this._name, this._id)
                },
                merge: function(t) {
                    if (t._id !== this._id) throw new Error;
                    for (var n = this._groups, e = t._groups, r = n.length, i = e.length, u = Math.min(r, i), o = new Array(r), a = 0; a < u; ++a)
                        for (var c, f = n[a], s = e[a], l = f.length, h = o[a] = new Array(l), d = 0; d < l; ++d)(c = f[d] || s[d]) && (h[d] = c);
                    for (; a < r; ++a) o[a] = n[a];
                    return new lr(o, this._parents, this._name, this._id)
                },
                selection: function() {
                    return new fr(this._groups, this._parents)
                },
                transition: function() {
                    for (var t = this._name, n = this._id, e = dr(), r = this._groups, i = r.length, u = 0; u < i; ++u)
                        for (var o, a = r[u], c = a.length, f = 0; f < c; ++f)
                            if (o = a[f]) {
                                var s = ur(o, n);
                                er(o, t, e, f, a, {
                                    time: s.time + s.delay + s.duration,
                                    delay: 0,
                                    duration: s.duration,
                                    ease: s.ease
                                })
                            } return new lr(r, this._parents, t, e)
                },
                call: pr.call,
                nodes: pr.nodes,
                node: pr.node,
                size: pr.size,
                empty: pr.empty,
                each: pr.each,
                on: function(t, n) {
                    var e = this._id;
                    return arguments.length < 2 ? ur(this.node(), e).on.on(t) : this.each(function(t, n, e) {
                        var r, i, u = function(t) {
                            return (t + "").trim().split(/^|\s+/).every((function(t) {
                                var n = t.indexOf(".");
                                return n >= 0 && (t = t.slice(0, n)), !t || "start" === t
                            }))
                        }(n) ? rr : ir;
                        return function() {
                            var o = u(this, t),
                                a = o.on;
                            a !== r && (i = (r = a).copy()).on(n, e), o.on = i
                        }
                    }(e, t, n))
                },
                attr: function(t, n) {
                    var e = S(t),
                        r = "transform" === e ? le : cr;
                    return this.attrTween(t, "function" == typeof n ? (e.local ? function(t, n, e) {
                        var r, i, u;
                        return function() {
                            var o, a = e(this);
                            if (null != a) return (o = this.getAttributeNS(t.space, t.local)) === a ? null : o === r && a === i ? u : u = n(r = o, i = a);
                            this.removeAttributeNS(t.space, t.local)
                        }
                    } : function(t, n, e) {
                        var r, i, u;
                        return function() {
                            var o, a = e(this);
                            if (null != a) return (o = this.getAttribute(t)) === a ? null : o === r && a === i ? u : u = n(r = o, i = a);
                            this.removeAttribute(t)
                        }
                    })(e, r, ar(this, "attr." + t, n)) : null == n ? (e.local ? function(t) {
                        return function() {
                            this.removeAttributeNS(t.space, t.local)
                        }
                    } : function(t) {
                        return function() {
                            this.removeAttribute(t)
                        }
                    })(e) : (e.local ? function(t, n, e) {
                        var r, i;
                        return function() {
                            var u = this.getAttributeNS(t.space, t.local);
                            return u === e ? null : u === r ? i : i = n(r = u, e)
                        }
                    } : function(t, n, e) {
                        var r, i;
                        return function() {
                            var u = this.getAttribute(t);
                            return u === e ? null : u === r ? i : i = n(r = u, e)
                        }
                    })(e, r, n + ""))
                },
                attrTween: function(t, n) {
                    var e = "attr." + t;
                    if (arguments.length < 2) return (e = this.tween(e)) && e._value;
                    if (null == n) return this.tween(e, null);
                    if ("function" != typeof n) throw new Error;
                    var r = S(t);
                    return this.tween(e, (r.local ? function(t, n) {
                        function e() {
                            var e = this,
                                r = n.apply(e, arguments);
                            return r && function(n) {
                                e.setAttributeNS(t.space, t.local, r(n))
                            }
                        }
                        return e._value = n, e
                    } : function(t, n) {
                        function e() {
                            var e = this,
                                r = n.apply(e, arguments);
                            return r && function(n) {
                                e.setAttribute(t, r(n))
                            }
                        }
                        return e._value = n, e
                    })(r, n))
                },
                style: function(t, n, e) {
                    var r = "transform" == (t += "") ? se : cr;
                    return null == n ? this.styleTween(t, function(t, n) {
                        var e, r, i;
                        return function() {
                            var u = H(this, t),
                                o = (this.style.removeProperty(t), H(this, t));
                            return u === o ? null : u === e && o === r ? i : i = n(e = u, r = o)
                        }
                    }(t, r)).on("end.style." + t, function(t) {
                        return function() {
                            this.style.removeProperty(t)
                        }
                    }(t)) : this.styleTween(t, "function" == typeof n ? function(t, n, e) {
                        var r, i, u;
                        return function() {
                            var o = H(this, t),
                                a = e(this);
                            return null == a && (this.style.removeProperty(t), a = H(this, t)), o === a ? null : o === r && a === i ? u : u = n(r = o, i = a)
                        }
                    }(t, r, ar(this, "style." + t, n)) : function(t, n, e) {
                        var r, i;
                        return function() {
                            var u = H(this, t);
                            return u === e ? null : u === r ? i : i = n(r = u, e)
                        }
                    }(t, r, n + ""), e)
                },
                styleTween: function(t, n, e) {
                    var r = "style." + (t += "");
                    if (arguments.length < 2) return (r = this.tween(r)) && r._value;
                    if (null == n) return this.tween(r, null);
                    if ("function" != typeof n) throw new Error;
                    return this.tween(r, function(t, n, e) {
                        function r() {
                            var r = this,
                                i = n.apply(r, arguments);
                            return i && function(n) {
                                r.style.setProperty(t, i(n), e)
                            }
                        }
                        return r._value = n, r
                    }(t, n, null == e ? "" : e))
                },
                text: function(t) {
                    return this.tween("text", "function" == typeof t ? function(t) {
                        return function() {
                            var n = t(this);
                            this.textContent = null == n ? "" : n
                        }
                    }(ar(this, "text", t)) : function(t) {
                        return function() {
                            this.textContent = t
                        }
                    }(null == t ? "" : t + ""))
                },
                remove: function() {
                    return this.on("end.remove", (t = this._id, function() {
                        var n = this.parentNode;
                        for (var e in this.__transition)
                            if (+e !== t) return;
                        n && n.removeChild(this)
                    }));
                    var t
                },
                tween: function(t, n) {
                    var e = this._id;
                    if (t += "", arguments.length < 2) {
                        for (var r, i = ur(this.node(), e).tween, u = 0, o = i.length; u < o; ++u)
                            if ((r = i[u]).name === t) return r.value;
                        return null
                    }
                    return this.each((null == n ? function(t, n) {
                        var e, r;
                        return function() {
                            var i = ir(this, t),
                                u = i.tween;
                            if (u !== e)
                                for (var o = 0, a = (r = e = u).length; o < a; ++o)
                                    if (r[o].name === n) {
                                        (r = r.slice()).splice(o, 1);
                                        break
                                    } i.tween = r
                        }
                    } : function(t, n, e) {
                        var r, i;
                        if ("function" != typeof e) throw new Error;
                        return function() {
                            var u = ir(this, t),
                                o = u.tween;
                            if (o !== r) {
                                i = (r = o).slice();
                                for (var a = {
                                        name: n,
                                        value: e
                                    }, c = 0, f = i.length; c < f; ++c)
                                    if (i[c].name === n) {
                                        i[c] = a;
                                        break
                                    } c === f && i.push(a)
                            }
                            u.tween = i
                        }
                    })(e, t, n))
                },
                delay: function(t) {
                    var n = this._id;
                    return arguments.length ? this.each(("function" == typeof t ? function(t, n) {
                        return function() {
                            rr(this, t).delay = +n.apply(this, arguments)
                        }
                    } : function(t, n) {
                        return n = +n,
                            function() {
                                rr(this, t).delay = n
                            }
                    })(n, t)) : ur(this.node(), n).delay
                },
                duration: function(t) {
                    var n = this._id;
                    return arguments.length ? this.each(("function" == typeof t ? function(t, n) {
                        return function() {
                            ir(this, t).duration = +n.apply(this, arguments)
                        }
                    } : function(t, n) {
                        return n = +n,
                            function() {
                                ir(this, t).duration = n
                            }
                    })(n, t)) : ur(this.node(), n).duration
                },
                ease: function(t) {
                    var n = this._id;
                    return arguments.length ? this.each(function(t, n) {
                        if ("function" != typeof n) throw new Error;
                        return function() {
                            ir(this, t).ease = n
                        }
                    }(n, t)) : ur(this.node(), n).ease
                }
            };
            var wr = function t(n) {
                    function e(t) {
                        return Math.pow(t, n)
                    }
                    return n = +n, e.exponent = t, e
                }(3),
                Mr = function t(n) {
                    function e(t) {
                        return 1 - Math.pow(1 - t, n)
                    }
                    return n = +n, e.exponent = t, e
                }(3),
                Tr = function t(n) {
                    function e(t) {
                        return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2
                    }
                    return n = +n, e.exponent = t, e
                }(3),
                kr = Math.PI,
                Nr = kr / 2;

            function Sr(t) {
                return 1 - Math.cos(t * Nr)
            }

            function Er(t) {
                return Math.sin(t * Nr)
            }

            function Ar(t) {
                return (1 - Math.cos(kr * t)) / 2
            }

            function Cr(t) {
                return Math.pow(2, 10 * t - 10)
            }

            function zr(t) {
                return 1 - Math.pow(2, -10 * t)
            }

            function Pr(t) {
                return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2
            }

            function Or(t) {
                return 1 - Math.sqrt(1 - t * t)
            }

            function Rr(t) {
                return Math.sqrt(1 - --t * t)
            }

            function Lr(t) {
                return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2
            }
            var qr = 4 / 11,
                Dr = 6 / 11,
                Ur = 8 / 11,
                jr = .75,
                Fr = 9 / 11,
                Ir = 10 / 11,
                Yr = .9375,
                Br = 21 / 22,
                Hr = 63 / 64,
                Xr = 1 / qr / qr;

            function Vr(t) {
                return 1 - $r(1 - t)
            }

            function $r(t) {
                return (t = +t) < qr ? Xr * t * t : t < Ur ? Xr * (t -= Dr) * t + jr : t < Ir ? Xr * (t -= Fr) * t + Yr : Xr * (t -= Br) * t + Hr
            }

            function Wr(t) {
                return ((t *= 2) <= 1 ? 1 - $r(1 - t) : $r(t - 1) + 1) / 2
            }
            var Zr = function t(n) {
                    function e(t) {
                        return t * t * ((n + 1) * t - n)
                    }
                    return n = +n, e.overshoot = t, e
                }(1.70158),
                Gr = function t(n) {
                    function e(t) {
                        return --t * t * ((n + 1) * t + n) + 1
                    }
                    return n = +n, e.overshoot = t, e
                }(1.70158),
                Qr = function t(n) {
                    function e(t) {
                        return ((t *= 2) < 1 ? t * t * ((n + 1) * t - n) : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2
                    }
                    return n = +n, e.overshoot = t, e
                }(1.70158),
                Jr = 2 * Math.PI,
                Kr = function t(n, e) {
                    var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= Jr);

                    function i(t) {
                        return n * Math.pow(2, 10 * --t) * Math.sin((r - t) / e)
                    }
                    return i.amplitude = function(n) {
                        return t(n, e * Jr)
                    }, i.period = function(e) {
                        return t(n, e)
                    }, i
                }(1, .3),
                ti = function t(n, e) {
                    var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= Jr);

                    function i(t) {
                        return 1 - n * Math.pow(2, -10 * (t = +t)) * Math.sin((t + r) / e)
                    }
                    return i.amplitude = function(n) {
                        return t(n, e * Jr)
                    }, i.period = function(e) {
                        return t(n, e)
                    }, i
                }(1, .3),
                ni = function t(n, e) {
                    var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= Jr);

                    function i(t) {
                        return ((t = 2 * t - 1) < 0 ? n * Math.pow(2, 10 * t) * Math.sin((r - t) / e) : 2 - n * Math.pow(2, -10 * t) * Math.sin((r + t) / e)) / 2
                    }
                    return i.amplitude = function(n) {
                        return t(n, e * Jr)
                    }, i.period = function(e) {
                        return t(n, e)
                    }, i
                }(1, .3),
                ei = {
                    time: null,
                    delay: 0,
                    duration: 250,
                    ease: br
                };

            function ri(t, n) {
                for (var e; !(e = t.__transition) || !(e = e[n]);)
                    if (!(t = t.parentNode)) return ei.time = De(), ei;
                return e
            }
            vt.prototype.interrupt = function(t) {
                return this.each((function() {
                    or(this, t)
                }))
            }, vt.prototype.transition = function(t) {
                var n, e;
                t instanceof lr ? (n = t._id, t = t._name) : (n = dr(), (e = ei).time = De(), t = null == t ? null : t + "");
                for (var r = this._groups, i = r.length, u = 0; u < i; ++u)
                    for (var o, a = r[u], c = a.length, f = 0; f < c; ++f)(o = a[f]) && er(o, t, n, f, a, e || ri(o, n));
                return new lr(r, this._parents, t, n)
            };
            var ii = [null],
                ui = function(t, n) {
                    var e, r, i = t.__transition;
                    if (i)
                        for (r in n = null == n ? null : n + "", i)
                            if ((e = i[r]).state > Ge && e.name === n) return new lr([
                                [t]
                            ], ii, n, +r);
                    return null
                },
                oi = function(t) {
                    return function() {
                        return t
                    }
                },
                ai = function(t, n, e) {
                    this.target = t, this.type = n, this.selection = e
                };

            function ci() {
                ut.stopImmediatePropagation()
            }
            var fi = function() {
                    ut.preventDefault(), ut.stopImmediatePropagation()
                },
                si = {
                    name: "drag"
                },
                li = {
                    name: "space"
                },
                hi = {
                    name: "handle"
                },
                di = {
                    name: "center"
                },
                pi = {
                    name: "x",
                    handles: ["e", "w"].map(wi),
                    input: function(t, n) {
                        return t && [
                            [t[0], n[0][1]],
                            [t[1], n[1][1]]
                        ]
                    },
                    output: function(t) {
                        return t && [t[0][0], t[1][0]]
                    }
                },
                vi = {
                    name: "y",
                    handles: ["n", "s"].map(wi),
                    input: function(t, n) {
                        return t && [
                            [n[0][0], t[0]],
                            [n[1][0], t[1]]
                        ]
                    },
                    output: function(t) {
                        return t && [t[0][1], t[1][1]]
                    }
                },
                yi = {
                    name: "xy",
                    handles: ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(wi),
                    input: function(t) {
                        return t
                    },
                    output: function(t) {
                        return t
                    }
                },
                _i = {
                    overlay: "crosshair",
                    selection: "move",
                    n: "ns-resize",
                    e: "ew-resize",
                    s: "ns-resize",
                    w: "ew-resize",
                    nw: "nwse-resize",
                    ne: "nesw-resize",
                    se: "nwse-resize",
                    sw: "nesw-resize"
                },
                gi = {
                    e: "w",
                    w: "e",
                    nw: "ne",
                    ne: "nw",
                    se: "sw",
                    sw: "se"
                },
                mi = {
                    n: "s",
                    s: "n",
                    nw: "sw",
                    ne: "se",
                    se: "ne",
                    sw: "nw"
                },
                xi = {
                    overlay: 1,
                    selection: 1,
                    n: null,
                    e: 1,
                    s: null,
                    w: -1,
                    nw: -1,
                    ne: 1,
                    se: 1,
                    sw: -1
                },
                bi = {
                    overlay: 1,
                    selection: 1,
                    n: -1,
                    e: null,
                    s: 1,
                    w: null,
                    nw: -1,
                    ne: -1,
                    se: 1,
                    sw: 1
                };

            function wi(t) {
                return {
                    type: t
                }
            }

            function Mi() {
                return !ut.button
            }

            function Ti() {
                var t = this.ownerSVGElement || this;
                return [
                    [0, 0],
                    [t.width.baseVal.value, t.height.baseVal.value]
                ]
            }

            function ki(t) {
                for (; !t.__brush;)
                    if (!(t = t.parentNode)) return;
                return t.__brush
            }

            function Ni(t) {
                return t[0][0] === t[1][0] || t[0][1] === t[1][1]
            }

            function Si(t) {
                var n = t.__brush;
                return n ? n.dim.output(n.selection) : null
            }

            function Ei() {
                return zi(pi)
            }

            function Ai() {
                return zi(vi)
            }
            var Ci = function() {
                return zi(yi)
            };

            function zi(t) {
                var n, e = Ti,
                    r = Mi,
                    i = T(o, "start", "brush", "end"),
                    u = 6;

                function o(n) {
                    var e = n.property("__brush", l).selectAll(".overlay").data([wi("overlay")]);
                    e.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", _i.overlay).merge(e).each((function() {
                        var t = ki(this).extent;
                        yt(this).attr("x", t[0][0]).attr("y", t[0][1]).attr("width", t[1][0] - t[0][0]).attr("height", t[1][1] - t[0][1])
                    })), n.selectAll(".selection").data([wi("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", _i.selection).attr("fill", "#777").attr("fill-opacity", .3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
                    var r = n.selectAll(".handle").data(t.handles, (function(t) {
                        return t.type
                    }));
                    r.exit().remove(), r.enter().append("rect").attr("class", (function(t) {
                        return "handle handle--" + t.type
                    })).attr("cursor", (function(t) {
                        return _i[t.type]
                    })), n.each(a).attr("fill", "none").attr("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush touchstart.brush", s)
                }

                function a() {
                    var t = yt(this),
                        n = ki(this).selection;
                    n ? (t.selectAll(".selection").style("display", null).attr("x", n[0][0]).attr("y", n[0][1]).attr("width", n[1][0] - n[0][0]).attr("height", n[1][1] - n[0][1]), t.selectAll(".handle").style("display", null).attr("x", (function(t) {
                        return "e" === t.type[t.type.length - 1] ? n[1][0] - u / 2 : n[0][0] - u / 2
                    })).attr("y", (function(t) {
                        return "s" === t.type[0] ? n[1][1] - u / 2 : n[0][1] - u / 2
                    })).attr("width", (function(t) {
                        return "n" === t.type || "s" === t.type ? n[1][0] - n[0][0] + u : u
                    })).attr("height", (function(t) {
                        return "e" === t.type || "w" === t.type ? n[1][1] - n[0][1] + u : u
                    }))) : t.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null)
                }

                function c(t, n) {
                    return t.__brush.emitter || new f(t, n)
                }

                function f(t, n) {
                    this.that = t, this.args = n, this.state = t.__brush, this.active = 0
                }

                function s() {
                    if (ut.touches) {
                        if (ut.changedTouches.length < ut.touches.length) return fi()
                    } else if (n) return;
                    if (r.apply(this, arguments)) {
                        var e, i, u, o, f, s, l, h, d, p, v, y, _, g = this,
                            m = ut.target.__data__.type,
                            x = "selection" === (ut.metaKey ? m = "overlay" : m) ? si : ut.altKey ? di : hi,
                            b = t === vi ? null : xi[m],
                            w = t === pi ? null : bi[m],
                            M = ki(g),
                            T = M.extent,
                            k = M.selection,
                            N = T[0][0],
                            S = T[0][1],
                            E = T[1][0],
                            A = T[1][1],
                            C = b && w && ut.shiftKey,
                            z = Mt(g),
                            P = z,
                            O = c(g, arguments).beforestart();
                        "overlay" === m ? M.selection = k = [
                            [e = t === vi ? N : z[0], u = t === pi ? S : z[1]],
                            [f = t === vi ? E : e, l = t === pi ? A : u]
                        ] : (e = k[0][0], u = k[0][1], f = k[1][0], l = k[1][1]), i = e, o = u, s = f, h = l;
                        var R = yt(g).attr("pointer-events", "none"),
                            L = R.selectAll(".overlay").attr("cursor", _i[m]);
                        if (ut.touches) R.on("touchmove.brush", D, !0).on("touchend.brush touchcancel.brush", j, !0);
                        else {
                            var q = yt(ut.view).on("keydown.brush", (function() {
                                switch (ut.keyCode) {
                                    case 16:
                                        C = b && w;
                                        break;
                                    case 18:
                                        x === hi && (b && (f = s - d * b, e = i + d * b), w && (l = h - p * w, u = o + p * w), x = di, U());
                                        break;
                                    case 32:
                                        x !== hi && x !== di || (b < 0 ? f = s - d : b > 0 && (e = i - d), w < 0 ? l = h - p : w > 0 && (u = o - p), x = li, L.attr("cursor", _i.selection), U());
                                        break;
                                    default:
                                        return
                                }
                                fi()
                            }), !0).on("keyup.brush", (function() {
                                switch (ut.keyCode) {
                                    case 16:
                                        C && (y = _ = C = !1, U());
                                        break;
                                    case 18:
                                        x === di && (b < 0 ? f = s : b > 0 && (e = i), w < 0 ? l = h : w > 0 && (u = o), x = hi, U());
                                        break;
                                    case 32:
                                        x === li && (ut.altKey ? (b && (f = s - d * b, e = i + d * b), w && (l = h - p * w, u = o + p * w), x = di) : (b < 0 ? f = s : b > 0 && (e = i), w < 0 ? l = h : w > 0 && (u = o), x = hi), L.attr("cursor", _i[m]), U());
                                        break;
                                    default:
                                        return
                                }
                                fi()
                            }), !0).on("mousemove.brush", D, !0).on("mouseup.brush", j, !0);
                            At(ut.view)
                        }
                        ci(), or(g), a.call(g), O.start()
                    }

                    function D() {
                        var t = Mt(g);
                        !C || y || _ || (Math.abs(t[0] - P[0]) > Math.abs(t[1] - P[1]) ? _ = !0 : y = !0), P = t, v = !0, fi(), U()
                    }

                    function U() {
                        var t;
                        switch (d = P[0] - z[0], p = P[1] - z[1], x) {
                            case li:
                            case si:
                                b && (d = Math.max(N - e, Math.min(E - f, d)), i = e + d, s = f + d), w && (p = Math.max(S - u, Math.min(A - l, p)), o = u + p, h = l + p);
                                break;
                            case hi:
                                b < 0 ? (d = Math.max(N - e, Math.min(E - e, d)), i = e + d, s = f) : b > 0 && (d = Math.max(N - f, Math.min(E - f, d)), i = e, s = f + d), w < 0 ? (p = Math.max(S - u, Math.min(A - u, p)), o = u + p, h = l) : w > 0 && (p = Math.max(S - l, Math.min(A - l, p)), o = u, h = l + p);
                                break;
                            case di:
                                b && (i = Math.max(N, Math.min(E, e - d * b)), s = Math.max(N, Math.min(E, f + d * b))), w && (o = Math.max(S, Math.min(A, u - p * w)), h = Math.max(S, Math.min(A, l + p * w)))
                        }
                        s < i && (b *= -1, t = e, e = f, f = t, t = i, i = s, s = t, m in gi && L.attr("cursor", _i[m = gi[m]])), h < o && (w *= -1, t = u, u = l, l = t, t = o, o = h, h = t, m in mi && L.attr("cursor", _i[m = mi[m]])), M.selection && (k = M.selection), y && (i = k[0][0], s = k[1][0]), _ && (o = k[0][1], h = k[1][1]), k[0][0] === i && k[0][1] === o && k[1][0] === s && k[1][1] === h || (M.selection = [
                            [i, o],
                            [s, h]
                        ], a.call(g), O.brush())
                    }

                    function j() {
                        if (ci(), ut.touches) {
                            if (ut.touches.length) return;
                            n && clearTimeout(n), n = setTimeout((function() {
                                n = null
                            }), 500), R.on("touchmove.brush touchend.brush touchcancel.brush", null)
                        } else Ct(ut.view, v), q.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
                        R.attr("pointer-events", "all"), L.attr("cursor", _i.overlay), M.selection && (k = M.selection), Ni(k) && (M.selection = null, a.call(g)), O.end()
                    }
                }

                function l() {
                    var n = this.__brush || {
                        selection: null
                    };
                    return n.extent = e.apply(this, arguments), n.dim = t, n
                }
                return o.move = function(n, e) {
                    n.selection ? n.on("start.brush", (function() {
                        c(this, arguments).beforestart().start()
                    })).on("interrupt.brush end.brush", (function() {
                        c(this, arguments).end()
                    })).tween("brush", (function() {
                        var n = this,
                            r = n.__brush,
                            i = c(n, arguments),
                            u = r.selection,
                            o = t.input("function" == typeof e ? e.apply(this, arguments) : e, r.extent),
                            f = ie(u, o);

                        function s(t) {
                            r.selection = 1 === t && Ni(o) ? null : f(t), a.call(n), i.brush()
                        }
                        return u && o ? s : s(1)
                    })) : n.each((function() {
                        var n = arguments,
                            r = this.__brush,
                            i = t.input("function" == typeof e ? e.apply(this, n) : e, r.extent),
                            u = c(this, n).beforestart();
                        or(this), r.selection = null == i || Ni(i) ? null : i, a.call(this), u.start().brush().end()
                    }))
                }, f.prototype = {
                    beforestart: function() {
                        return 1 == ++this.active && (this.state.emitter = this, this.starting = !0), this
                    },
                    start: function() {
                        return this.starting && (this.starting = !1, this.emit("start")), this
                    },
                    brush: function() {
                        return this.emit("brush"), this
                    },
                    end: function() {
                        return 0 == --this.active && (delete this.state.emitter, this.emit("end")), this
                    },
                    emit: function(n) {
                        st(new ai(o, n, t.output(this.state.selection)), i.apply, i, [n, this.that, this.args])
                    }
                }, o.extent = function(t) {
                    return arguments.length ? (e = "function" == typeof t ? t : oi([
                        [+t[0][0], +t[0][1]],
                        [+t[1][0], +t[1][1]]
                    ]), o) : e
                }, o.filter = function(t) {
                    return arguments.length ? (r = "function" == typeof t ? t : oi(!!t), o) : r
                }, o.handleSize = function(t) {
                    return arguments.length ? (u = +t, o) : u
                }, o.on = function() {
                    var t = i.on.apply(i, arguments);
                    return t === i ? o : t
                }, o
            }
            var Pi = Math.cos,
                Oi = Math.sin,
                Ri = Math.PI,
                Li = Ri / 2,
                qi = 2 * Ri,
                Di = Math.max,
                Ui = function() {
                    var t = 0,
                        n = null,
                        e = null,
                        i = null;

                    function u(u) {
                        var o, a, c, f, s, l, h = u.length,
                            d = [],
                            p = Object(r.s)(h),
                            v = [],
                            y = [],
                            _ = y.groups = new Array(h),
                            g = new Array(h * h);
                        for (o = 0, s = -1; ++s < h;) {
                            for (a = 0, l = -1; ++l < h;) a += u[s][l];
                            d.push(a), v.push(Object(r.s)(h)), o += a
                        }
                        for (n && p.sort((function(t, e) {
                                return n(d[t], d[e])
                            })), e && v.forEach((function(t, n) {
                                t.sort((function(t, r) {
                                    return e(u[n][t], u[n][r])
                                }))
                            })), f = (o = Di(0, qi - t * h) / o) ? t : qi / h, a = 0, s = -1; ++s < h;) {
                            for (c = a, l = -1; ++l < h;) {
                                var m = p[s],
                                    x = v[m][l],
                                    b = u[m][x],
                                    w = a,
                                    M = a += b * o;
                                g[x * h + m] = {
                                    index: m,
                                    subindex: x,
                                    startAngle: w,
                                    endAngle: M,
                                    value: b
                                }
                            }
                            _[m] = {
                                index: m,
                                startAngle: c,
                                endAngle: a,
                                value: d[m]
                            }, a += f
                        }
                        for (s = -1; ++s < h;)
                            for (l = s - 1; ++l < h;) {
                                var T = g[l * h + s],
                                    k = g[s * h + l];
                                (T.value || k.value) && y.push(T.value < k.value ? {
                                    source: k,
                                    target: T
                                } : {
                                    source: T,
                                    target: k
                                })
                            }
                        return i ? y.sort(i) : y
                    }
                    return u.padAngle = function(n) {
                        return arguments.length ? (t = Di(0, n), u) : t
                    }, u.sortGroups = function(t) {
                        return arguments.length ? (n = t, u) : n
                    }, u.sortSubgroups = function(t) {
                        return arguments.length ? (e = t, u) : e
                    }, u.sortChords = function(t) {
                        return arguments.length ? (null == t ? i = null : (n = t, i = function(t, e) {
                            return n(t.source.value + t.target.value, e.source.value + e.target.value)
                        })._ = t, u) : i && i._;
                        var n
                    }, u
                },
                ji = Array.prototype.slice,
                Fi = function(t) {
                    return function() {
                        return t
                    }
                },
                Ii = e(1);

            function Yi(t) {
                return t.source
            }

            function Bi(t) {
                return t.target
            }

            function Hi(t) {
                return t.radius
            }

            function Xi(t) {
                return t.startAngle
            }

            function Vi(t) {
                return t.endAngle
            }
            var $i = function() {
                    var t = Yi,
                        n = Bi,
                        e = Hi,
                        r = Xi,
                        i = Vi,
                        u = null;

                    function o() {
                        var o, a = ji.call(arguments),
                            c = t.apply(this, a),
                            f = n.apply(this, a),
                            s = +e.apply(this, (a[0] = c, a)),
                            l = r.apply(this, a) - Li,
                            h = i.apply(this, a) - Li,
                            d = s * Pi(l),
                            p = s * Oi(l),
                            v = +e.apply(this, (a[0] = f, a)),
                            y = r.apply(this, a) - Li,
                            _ = i.apply(this, a) - Li;
                        if (u || (u = o = Object(Ii.a)()), u.moveTo(d, p), u.arc(0, 0, s, l, h), l === y && h === _ || (u.quadraticCurveTo(0, 0, v * Pi(y), v * Oi(y)), u.arc(0, 0, v, y, _)), u.quadraticCurveTo(0, 0, d, p), u.closePath(), o) return u = null, o + "" || null
                    }
                    return o.radius = function(t) {
                        return arguments.length ? (e = "function" == typeof t ? t : Fi(+t), o) : e
                    }, o.startAngle = function(t) {
                        return arguments.length ? (r = "function" == typeof t ? t : Fi(+t), o) : r
                    }, o.endAngle = function(t) {
                        return arguments.length ? (i = "function" == typeof t ? t : Fi(+t), o) : i
                    }, o.source = function(n) {
                        return arguments.length ? (t = n, o) : t
                    }, o.target = function(t) {
                        return arguments.length ? (n = t, o) : n
                    }, o.context = function(t) {
                        return arguments.length ? (u = null == t ? null : t, o) : u
                    }, o
                },
                Wi = e(2),
                Zi = {},
                Gi = {},
                Qi = 34,
                Ji = 10,
                Ki = 13;

            function tu(t) {
                return new Function("d", "return {" + t.map((function(t, n) {
                    return JSON.stringify(t) + ": d[" + n + "]"
                })).join(",") + "}")
            }
            var nu = function(t) {
                    var n = new RegExp('["' + t + "\n\r]"),
                        e = t.charCodeAt(0);

                    function r(t, n) {
                        var r, i = [],
                            u = t.length,
                            o = 0,
                            a = 0,
                            c = u <= 0,
                            f = !1;

                        function s() {
                            if (c) return Gi;
                            if (f) return f = !1, Zi;
                            var n, r, i = o;
                            if (t.charCodeAt(i) === Qi) {
                                for (; o++ < u && t.charCodeAt(o) !== Qi || t.charCodeAt(++o) === Qi;);
                                return (n = o) >= u ? c = !0 : (r = t.charCodeAt(o++)) === Ji ? f = !0 : r === Ki && (f = !0, t.charCodeAt(o) === Ji && ++o), t.slice(i + 1, n - 1).replace(/""/g, '"')
                            }
                            for (; o < u;) {
                                if ((r = t.charCodeAt(n = o++)) === Ji) f = !0;
                                else if (r === Ki) f = !0, t.charCodeAt(o) === Ji && ++o;
                                else if (r !== e) continue;
                                return t.slice(i, n)
                            }
                            return c = !0, t.slice(i, u)
                        }
                        for (t.charCodeAt(u - 1) === Ji && --u, t.charCodeAt(u - 1) === Ki && --u;
                            (r = s()) !== Gi;) {
                            for (var l = []; r !== Zi && r !== Gi;) l.push(r), r = s();
                            n && null == (l = n(l, a++)) || i.push(l)
                        }
                        return i
                    }

                    function i(n) {
                        return n.map(u).join(t)
                    }

                    function u(t) {
                        return null == t ? "" : n.test(t += "") ? '"' + t.replace(/"/g, '""') + '"' : t
                    }
                    return {
                        parse: function(t, n) {
                            var e, i, u = r(t, (function(t, r) {
                                if (e) return e(t, r - 1);
                                i = t, e = n ? function(t, n) {
                                    var e = tu(t);
                                    return function(r, i) {
                                        return n(e(r), i, t)
                                    }
                                }(t, n) : tu(t)
                            }));
                            return u.columns = i || [], u
                        },
                        parseRows: r,
                        format: function(n, e) {
                            return null == e && (e = function(t) {
                                var n = Object.create(null),
                                    e = [];
                                return t.forEach((function(t) {
                                    for (var r in t) r in n || e.push(n[r] = r)
                                })), e
                            }(n)), [e.map(u).join(t)].concat(n.map((function(n) {
                                return e.map((function(t) {
                                    return u(n[t])
                                })).join(t)
                            }))).join("\n")
                        },
                        formatRows: function(t) {
                            return t.map(i).join("\n")
                        }
                    }
                },
                eu = nu(","),
                ru = eu.parse,
                iu = eu.parseRows,
                uu = eu.format,
                ou = eu.formatRows,
                au = nu("\t"),
                cu = au.parse,
                fu = au.parseRows,
                su = au.format,
                lu = au.formatRows,
                hu = function(t, n) {
                    var e;

                    function r() {
                        var r, i, u = e.length,
                            o = 0,
                            a = 0;
                        for (r = 0; r < u; ++r) o += (i = e[r]).x, a += i.y;
                        for (o = o / u - t, a = a / u - n, r = 0; r < u; ++r)(i = e[r]).x -= o, i.y -= a
                    }
                    return null == t && (t = 0), null == n && (n = 0), r.initialize = function(t) {
                        e = t
                    }, r.x = function(n) {
                        return arguments.length ? (t = +n, r) : t
                    }, r.y = function(t) {
                        return arguments.length ? (n = +t, r) : n
                    }, r
                },
                du = function(t) {
                    return function() {
                        return t
                    }
                },
                pu = function() {
                    return 1e-6 * (Math.random() - .5)
                };

            function vu(t, n, e, r) {
                if (isNaN(n) || isNaN(e)) return t;
                var i, u, o, a, c, f, s, l, h, d = t._root,
                    p = {
                        data: r
                    },
                    v = t._x0,
                    y = t._y0,
                    _ = t._x1,
                    g = t._y1;
                if (!d) return t._root = p, t;
                for (; d.length;)
                    if ((f = n >= (u = (v + _) / 2)) ? v = u : _ = u, (s = e >= (o = (y + g) / 2)) ? y = o : g = o, i = d, !(d = d[l = s << 1 | f])) return i[l] = p, t;
                if (a = +t._x.call(null, d.data), c = +t._y.call(null, d.data), n === a && e === c) return p.next = d, i ? i[l] = p : t._root = p, t;
                do {
                    i = i ? i[l] = new Array(4) : t._root = new Array(4), (f = n >= (u = (v + _) / 2)) ? v = u : _ = u, (s = e >= (o = (y + g) / 2)) ? y = o : g = o
                } while ((l = s << 1 | f) == (h = (c >= o) << 1 | a >= u));
                return i[h] = d, i[l] = p, t
            }
            var yu = function(t, n, e, r, i) {
                this.node = t, this.x0 = n, this.y0 = e, this.x1 = r, this.y1 = i
            };

            function _u(t) {
                return t[0]
            }

            function gu(t) {
                return t[1]
            }

            function mu(t, n, e) {
                var r = new xu(null == n ? _u : n, null == e ? gu : e, NaN, NaN, NaN, NaN);
                return null == t ? r : r.addAll(t)
            }

            function xu(t, n, e, r, i, u) {
                this._x = t, this._y = n, this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = u, this._root = void 0
            }

            function bu(t) {
                for (var n = {
                        data: t.data
                    }, e = n; t = t.next;) e = e.next = {
                    data: t.data
                };
                return n
            }
            var wu = mu.prototype = xu.prototype;

            function Mu(t) {
                return t.x + t.vx
            }

            function Tu(t) {
                return t.y + t.vy
            }
            wu.copy = function() {
                var t, n, e = new xu(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
                    r = this._root;
                if (!r) return e;
                if (!r.length) return e._root = bu(r), e;
                for (t = [{
                        source: r,
                        target: e._root = new Array(4)
                    }]; r = t.pop();)
                    for (var i = 0; i < 4; ++i)(n = r.source[i]) && (n.length ? t.push({
                        source: n,
                        target: r.target[i] = new Array(4)
                    }) : r.target[i] = bu(n));
                return e
            }, wu.add = function(t) {
                var n = +this._x.call(null, t),
                    e = +this._y.call(null, t);
                return vu(this.cover(n, e), n, e, t)
            }, wu.addAll = function(t) {
                var n, e, r, i, u = t.length,
                    o = new Array(u),
                    a = new Array(u),
                    c = 1 / 0,
                    f = 1 / 0,
                    s = -1 / 0,
                    l = -1 / 0;
                for (e = 0; e < u; ++e) isNaN(r = +this._x.call(null, n = t[e])) || isNaN(i = +this._y.call(null, n)) || (o[e] = r, a[e] = i, r < c && (c = r), r > s && (s = r), i < f && (f = i), i > l && (l = i));
                for (s < c && (c = this._x0, s = this._x1), l < f && (f = this._y0, l = this._y1), this.cover(c, f).cover(s, l), e = 0; e < u; ++e) vu(this, o[e], a[e], t[e]);
                return this
            }, wu.cover = function(t, n) {
                if (isNaN(t = +t) || isNaN(n = +n)) return this;
                var e = this._x0,
                    r = this._y0,
                    i = this._x1,
                    u = this._y1;
                if (isNaN(e)) i = (e = Math.floor(t)) + 1, u = (r = Math.floor(n)) + 1;
                else {
                    if (!(e > t || t > i || r > n || n > u)) return this;
                    var o, a, c = i - e,
                        f = this._root;
                    switch (a = (n < (r + u) / 2) << 1 | t < (e + i) / 2) {
                        case 0:
                            do {
                                (o = new Array(4))[a] = f, f = o
                            } while (u = r + (c *= 2), t > (i = e + c) || n > u);
                            break;
                        case 1:
                            do {
                                (o = new Array(4))[a] = f, f = o
                            } while (u = r + (c *= 2), (e = i - c) > t || n > u);
                            break;
                        case 2:
                            do {
                                (o = new Array(4))[a] = f, f = o
                            } while (r = u - (c *= 2), t > (i = e + c) || r > n);
                            break;
                        case 3:
                            do {
                                (o = new Array(4))[a] = f, f = o
                            } while (r = u - (c *= 2), (e = i - c) > t || r > n)
                    }
                    this._root && this._root.length && (this._root = f)
                }
                return this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = u, this
            }, wu.data = function() {
                var t = [];
                return this.visit((function(n) {
                    if (!n.length)
                        do {
                            t.push(n.data)
                        } while (n = n.next)
                })), t
            }, wu.extent = function(t) {
                return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [
                    [this._x0, this._y0],
                    [this._x1, this._y1]
                ]
            }, wu.find = function(t, n, e) {
                var r, i, u, o, a, c, f, s = this._x0,
                    l = this._y0,
                    h = this._x1,
                    d = this._y1,
                    p = [],
                    v = this._root;
                for (v && p.push(new yu(v, s, l, h, d)), null == e ? e = 1 / 0 : (s = t - e, l = n - e, h = t + e, d = n + e, e *= e); c = p.pop();)
                    if (!(!(v = c.node) || (i = c.x0) > h || (u = c.y0) > d || (o = c.x1) < s || (a = c.y1) < l))
                        if (v.length) {
                            var y = (i + o) / 2,
                                _ = (u + a) / 2;
                            p.push(new yu(v[3], y, _, o, a), new yu(v[2], i, _, y, a), new yu(v[1], y, u, o, _), new yu(v[0], i, u, y, _)), (f = (n >= _) << 1 | t >= y) && (c = p[p.length - 1], p[p.length - 1] = p[p.length - 1 - f], p[p.length - 1 - f] = c)
                        } else {
                            var g = t - +this._x.call(null, v.data),
                                m = n - +this._y.call(null, v.data),
                                x = g * g + m * m;
                            if (x < e) {
                                var b = Math.sqrt(e = x);
                                s = t - b, l = n - b, h = t + b, d = n + b, r = v.data
                            }
                        } return r
            }, wu.remove = function(t) {
                if (isNaN(u = +this._x.call(null, t)) || isNaN(o = +this._y.call(null, t))) return this;
                var n, e, r, i, u, o, a, c, f, s, l, h, d = this._root,
                    p = this._x0,
                    v = this._y0,
                    y = this._x1,
                    _ = this._y1;
                if (!d) return this;
                if (d.length)
                    for (;;) {
                        if ((f = u >= (a = (p + y) / 2)) ? p = a : y = a, (s = o >= (c = (v + _) / 2)) ? v = c : _ = c, n = d, !(d = d[l = s << 1 | f])) return this;
                        if (!d.length) break;
                        (n[l + 1 & 3] || n[l + 2 & 3] || n[l + 3 & 3]) && (e = n, h = l)
                    }
                for (; d.data !== t;)
                    if (r = d, !(d = d.next)) return this;
                return (i = d.next) && delete d.next, r ? (i ? r.next = i : delete r.next, this) : n ? (i ? n[l] = i : delete n[l], (d = n[0] || n[1] || n[2] || n[3]) && d === (n[3] || n[2] || n[1] || n[0]) && !d.length && (e ? e[h] = d : this._root = d), this) : (this._root = i, this)
            }, wu.removeAll = function(t) {
                for (var n = 0, e = t.length; n < e; ++n) this.remove(t[n]);
                return this
            }, wu.root = function() {
                return this._root
            }, wu.size = function() {
                var t = 0;
                return this.visit((function(n) {
                    if (!n.length)
                        do {
                            ++t
                        } while (n = n.next)
                })), t
            }, wu.visit = function(t) {
                var n, e, r, i, u, o, a = [],
                    c = this._root;
                for (c && a.push(new yu(c, this._x0, this._y0, this._x1, this._y1)); n = a.pop();)
                    if (!t(c = n.node, r = n.x0, i = n.y0, u = n.x1, o = n.y1) && c.length) {
                        var f = (r + u) / 2,
                            s = (i + o) / 2;
                        (e = c[3]) && a.push(new yu(e, f, s, u, o)), (e = c[2]) && a.push(new yu(e, r, s, f, o)), (e = c[1]) && a.push(new yu(e, f, i, u, s)), (e = c[0]) && a.push(new yu(e, r, i, f, s))
                    } return this
            }, wu.visitAfter = function(t) {
                var n, e = [],
                    r = [];
                for (this._root && e.push(new yu(this._root, this._x0, this._y0, this._x1, this._y1)); n = e.pop();) {
                    var i = n.node;
                    if (i.length) {
                        var u, o = n.x0,
                            a = n.y0,
                            c = n.x1,
                            f = n.y1,
                            s = (o + c) / 2,
                            l = (a + f) / 2;
                        (u = i[0]) && e.push(new yu(u, o, a, s, l)), (u = i[1]) && e.push(new yu(u, s, a, c, l)), (u = i[2]) && e.push(new yu(u, o, l, s, f)), (u = i[3]) && e.push(new yu(u, s, l, c, f))
                    }
                    r.push(n)
                }
                for (; n = r.pop();) t(n.node, n.x0, n.y0, n.x1, n.y1);
                return this
            }, wu.x = function(t) {
                return arguments.length ? (this._x = t, this) : this._x
            }, wu.y = function(t) {
                return arguments.length ? (this._y = t, this) : this._y
            };
            var ku = function(t) {
                var n, e, r = 1,
                    i = 1;

                function u() {
                    for (var t, u, a, c, f, s, l, h = n.length, d = 0; d < i; ++d)
                        for (u = mu(n, Mu, Tu).visitAfter(o), t = 0; t < h; ++t) a = n[t], s = e[a.index], l = s * s, c = a.x + a.vx, f = a.y + a.vy, u.visit(p);

                    function p(t, n, e, i, u) {
                        var o = t.data,
                            h = t.r,
                            d = s + h;
                        if (!o) return n > c + d || i < c - d || e > f + d || u < f - d;
                        if (o.index > a.index) {
                            var p = c - o.x - o.vx,
                                v = f - o.y - o.vy,
                                y = p * p + v * v;
                            y < d * d && (0 === p && (y += (p = pu()) * p), 0 === v && (y += (v = pu()) * v), y = (d - (y = Math.sqrt(y))) / y * r, a.vx += (p *= y) * (d = (h *= h) / (l + h)), a.vy += (v *= y) * d, o.vx -= p * (d = 1 - d), o.vy -= v * d)
                        }
                    }
                }

                function o(t) {
                    if (t.data) return t.r = e[t.data.index];
                    for (var n = t.r = 0; n < 4; ++n) t[n] && t[n].r > t.r && (t.r = t[n].r)
                }

                function a() {
                    if (n) {
                        var r, i, u = n.length;
                        for (e = new Array(u), r = 0; r < u; ++r) i = n[r], e[i.index] = +t(i, r, n)
                    }
                }
                return "function" != typeof t && (t = du(null == t ? 1 : +t)), u.initialize = function(t) {
                    n = t, a()
                }, u.iterations = function(t) {
                    return arguments.length ? (i = +t, u) : i
                }, u.strength = function(t) {
                    return arguments.length ? (r = +t, u) : r
                }, u.radius = function(n) {
                    return arguments.length ? (t = "function" == typeof n ? n : du(+n), a(), u) : t
                }, u
            };

            function Nu(t) {
                return t.index
            }

            function Su(t, n) {
                var e = t.get(n);
                if (!e) throw new Error("missing: " + n);
                return e
            }
            var Eu = function(t) {
                var n, e, r, i, u, o = Nu,
                    a = function(t) {
                        return 1 / Math.min(i[t.source.index], i[t.target.index])
                    },
                    c = du(30),
                    f = 1;

                function s(r) {
                    for (var i = 0, o = t.length; i < f; ++i)
                        for (var a, c, s, l, h, d, p, v = 0; v < o; ++v) c = (a = t[v]).source, l = (s = a.target).x + s.vx - c.x - c.vx || pu(), h = s.y + s.vy - c.y - c.vy || pu(), l *= d = ((d = Math.sqrt(l * l + h * h)) - e[v]) / d * r * n[v], h *= d, s.vx -= l * (p = u[v]), s.vy -= h * p, c.vx += l * (p = 1 - p), c.vy += h * p
                }

                function l() {
                    if (r) {
                        var a, c, f = r.length,
                            s = t.length,
                            l = Object(Wi.c)(r, o);
                        for (a = 0, i = new Array(f); a < s; ++a)(c = t[a]).index = a, "object" != typeof c.source && (c.source = Su(l, c.source)), "object" != typeof c.target && (c.target = Su(l, c.target)), i[c.source.index] = (i[c.source.index] || 0) + 1, i[c.target.index] = (i[c.target.index] || 0) + 1;
                        for (a = 0, u = new Array(s); a < s; ++a) c = t[a], u[a] = i[c.source.index] / (i[c.source.index] + i[c.target.index]);
                        n = new Array(s), h(), e = new Array(s), d()
                    }
                }

                function h() {
                    if (r)
                        for (var e = 0, i = t.length; e < i; ++e) n[e] = +a(t[e], e, t)
                }

                function d() {
                    if (r)
                        for (var n = 0, i = t.length; n < i; ++n) e[n] = +c(t[n], n, t)
                }
                return null == t && (t = []), s.initialize = function(t) {
                    r = t, l()
                }, s.links = function(n) {
                    return arguments.length ? (t = n, l(), s) : t
                }, s.id = function(t) {
                    return arguments.length ? (o = t, s) : o
                }, s.iterations = function(t) {
                    return arguments.length ? (f = +t, s) : f
                }, s.strength = function(t) {
                    return arguments.length ? (a = "function" == typeof t ? t : du(+t), h(), s) : a
                }, s.distance = function(t) {
                    return arguments.length ? (c = "function" == typeof t ? t : du(+t), d(), s) : c
                }, s
            };

            function Au(t) {
                return t.x
            }

            function Cu(t) {
                return t.y
            }
            var zu, Pu = 10,
                Ou = Math.PI * (3 - Math.sqrt(5)),
                Ru = function(t) {
                    var n, e = 1,
                        r = .001,
                        i = 1 - Math.pow(r, 1 / 300),
                        u = 0,
                        o = .6,
                        a = Object(Wi.c)(),
                        c = Fe(s),
                        f = T("tick", "end");

                    function s() {
                        l(), f.call("tick", n), e < r && (c.stop(), f.call("end", n))
                    }

                    function l() {
                        var n, r, c = t.length;
                        for (e += (u - e) * i, a.each((function(t) {
                                t(e)
                            })), n = 0; n < c; ++n) null == (r = t[n]).fx ? r.x += r.vx *= o : (r.x = r.fx, r.vx = 0), null == r.fy ? r.y += r.vy *= o : (r.y = r.fy, r.vy = 0)
                    }

                    function h() {
                        for (var n, e = 0, r = t.length; e < r; ++e) {
                            if ((n = t[e]).index = e, isNaN(n.x) || isNaN(n.y)) {
                                var i = Pu * Math.sqrt(e),
                                    u = e * Ou;
                                n.x = i * Math.cos(u), n.y = i * Math.sin(u)
                            }(isNaN(n.vx) || isNaN(n.vy)) && (n.vx = n.vy = 0)
                        }
                    }

                    function d(n) {
                        return n.initialize && n.initialize(t), n
                    }
                    return null == t && (t = []), h(), n = {
                        tick: l,
                        restart: function() {
                            return c.restart(s), n
                        },
                        stop: function() {
                            return c.stop(), n
                        },
                        nodes: function(e) {
                            return arguments.length ? (t = e, h(), a.each(d), n) : t
                        },
                        alpha: function(t) {
                            return arguments.length ? (e = +t, n) : e
                        },
                        alphaMin: function(t) {
                            return arguments.length ? (r = +t, n) : r
                        },
                        alphaDecay: function(t) {
                            return arguments.length ? (i = +t, n) : +i
                        },
                        alphaTarget: function(t) {
                            return arguments.length ? (u = +t, n) : u
                        },
                        velocityDecay: function(t) {
                            return arguments.length ? (o = 1 - t, n) : 1 - o
                        },
                        force: function(t, e) {
                            return arguments.length > 1 ? (null == e ? a.remove(t) : a.set(t, d(e)), n) : a.get(t)
                        },
                        find: function(n, e, r) {
                            var i, u, o, a, c, f = 0,
                                s = t.length;
                            for (null == r ? r = 1 / 0 : r *= r, f = 0; f < s; ++f)(o = (i = n - (a = t[f]).x) * i + (u = e - a.y) * u) < r && (c = a, r = o);
                            return c
                        },
                        on: function(t, e) {
                            return arguments.length > 1 ? (f.on(t, e), n) : f.on(t)
                        }
                    }
                },
                Lu = function() {
                    var t, n, e, r, i = du(-30),
                        u = 1,
                        o = 1 / 0,
                        a = .81;

                    function c(r) {
                        var i, u = t.length,
                            o = mu(t, Au, Cu).visitAfter(s);
                        for (e = r, i = 0; i < u; ++i) n = t[i], o.visit(l)
                    }

                    function f() {
                        if (t) {
                            var n, e, u = t.length;
                            for (r = new Array(u), n = 0; n < u; ++n) e = t[n], r[e.index] = +i(e, n, t)
                        }
                    }

                    function s(t) {
                        var n, e, i, u, o, a = 0,
                            c = 0;
                        if (t.length) {
                            for (i = u = o = 0; o < 4; ++o)(n = t[o]) && (e = Math.abs(n.value)) && (a += n.value, c += e, i += e * n.x, u += e * n.y);
                            t.x = i / c, t.y = u / c
                        } else {
                            (n = t).x = n.data.x, n.y = n.data.y;
                            do {
                                a += r[n.data.index]
                            } while (n = n.next)
                        }
                        t.value = a
                    }

                    function l(t, i, c, f) {
                        if (!t.value) return !0;
                        var s = t.x - n.x,
                            l = t.y - n.y,
                            h = f - i,
                            d = s * s + l * l;
                        if (h * h / a < d) return d < o && (0 === s && (d += (s = pu()) * s), 0 === l && (d += (l = pu()) * l), d < u && (d = Math.sqrt(u * d)), n.vx += s * t.value * e / d, n.vy += l * t.value * e / d), !0;
                        if (!(t.length || d >= o)) {
                            (t.data !== n || t.next) && (0 === s && (d += (s = pu()) * s), 0 === l && (d += (l = pu()) * l), d < u && (d = Math.sqrt(u * d)));
                            do {
                                t.data !== n && (h = r[t.data.index] * e / d, n.vx += s * h, n.vy += l * h)
                            } while (t = t.next)
                        }
                    }
                    return c.initialize = function(n) {
                        t = n, f()
                    }, c.strength = function(t) {
                        return arguments.length ? (i = "function" == typeof t ? t : du(+t), f(), c) : i
                    }, c.distanceMin = function(t) {
                        return arguments.length ? (u = t * t, c) : Math.sqrt(u)
                    }, c.distanceMax = function(t) {
                        return arguments.length ? (o = t * t, c) : Math.sqrt(o)
                    }, c.theta = function(t) {
                        return arguments.length ? (a = t * t, c) : Math.sqrt(a)
                    }, c
                },
                qu = function(t, n, e) {
                    var r, i, u, o = du(.1);

                    function a(t) {
                        for (var o = 0, a = r.length; o < a; ++o) {
                            var c = r[o],
                                f = c.x - n || 1e-6,
                                s = c.y - e || 1e-6,
                                l = Math.sqrt(f * f + s * s),
                                h = (u[o] - l) * i[o] * t / l;
                            c.vx += f * h, c.vy += s * h
                        }
                    }

                    function c() {
                        if (r) {
                            var n, e = r.length;
                            for (i = new Array(e), u = new Array(e), n = 0; n < e; ++n) u[n] = +t(r[n], n, r), i[n] = isNaN(u[n]) ? 0 : +o(r[n], n, r)
                        }
                    }
                    return "function" != typeof t && (t = du(+t)), null == n && (n = 0), null == e && (e = 0), a.initialize = function(t) {
                        r = t, c()
                    }, a.strength = function(t) {
                        return arguments.length ? (o = "function" == typeof t ? t : du(+t), c(), a) : o
                    }, a.radius = function(n) {
                        return arguments.length ? (t = "function" == typeof n ? n : du(+n), c(), a) : t
                    }, a.x = function(t) {
                        return arguments.length ? (n = +t, a) : n
                    }, a.y = function(t) {
                        return arguments.length ? (e = +t, a) : e
                    }, a
                },
                Du = function(t) {
                    var n, e, r, i = du(.1);

                    function u(t) {
                        for (var i, u = 0, o = n.length; u < o; ++u)(i = n[u]).vx += (r[u] - i.x) * e[u] * t
                    }

                    function o() {
                        if (n) {
                            var u, o = n.length;
                            for (e = new Array(o), r = new Array(o), u = 0; u < o; ++u) e[u] = isNaN(r[u] = +t(n[u], u, n)) ? 0 : +i(n[u], u, n)
                        }
                    }
                    return "function" != typeof t && (t = du(null == t ? 0 : +t)), u.initialize = function(t) {
                        n = t, o()
                    }, u.strength = function(t) {
                        return arguments.length ? (i = "function" == typeof t ? t : du(+t), o(), u) : i
                    }, u.x = function(n) {
                        return arguments.length ? (t = "function" == typeof n ? n : du(+n), o(), u) : t
                    }, u
                },
                Uu = function(t) {
                    var n, e, r, i = du(.1);

                    function u(t) {
                        for (var i, u = 0, o = n.length; u < o; ++u)(i = n[u]).vy += (r[u] - i.y) * e[u] * t
                    }

                    function o() {
                        if (n) {
                            var u, o = n.length;
                            for (e = new Array(o), r = new Array(o), u = 0; u < o; ++u) e[u] = isNaN(r[u] = +t(n[u], u, n)) ? 0 : +i(n[u], u, n)
                        }
                    }
                    return "function" != typeof t && (t = du(null == t ? 0 : +t)), u.initialize = function(t) {
                        n = t, o()
                    }, u.strength = function(t) {
                        return arguments.length ? (i = "function" == typeof t ? t : du(+t), o(), u) : i
                    }, u.y = function(n) {
                        return arguments.length ? (t = "function" == typeof n ? n : du(+n), o(), u) : t
                    }, u
                },
                ju = function(t, n) {
                    if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
                    var e, r = t.slice(0, e);
                    return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)]
                },
                Fu = function(t) {
                    return (t = ju(Math.abs(t))) ? t[1] : NaN
                },
                Iu = function(t, n) {
                    var e = ju(t, n);
                    if (!e) return t + "";
                    var r = e[0],
                        i = e[1];
                    return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0")
                },
                Yu = {
                    "": function(t, n) {
                        t: for (var e, r = (t = t.toPrecision(n)).length, i = 1, u = -1; i < r; ++i) switch (t[i]) {
                            case ".":
                                u = e = i;
                                break;
                            case "0":
                                0 === u && (u = i), e = i;
                                break;
                            case "e":
                                break t;
                            default:
                                u > 0 && (u = 0)
                        }
                        return u > 0 ? t.slice(0, u) + t.slice(e + 1) : t
                    },
                    "%": function(t, n) {
                        return (100 * t).toFixed(n)
                    },
                    b: function(t) {
                        return Math.round(t).toString(2)
                    },
                    c: function(t) {
                        return t + ""
                    },
                    d: function(t) {
                        return Math.round(t).toString(10)
                    },
                    e: function(t, n) {
                        return t.toExponential(n)
                    },
                    f: function(t, n) {
                        return t.toFixed(n)
                    },
                    g: function(t, n) {
                        return t.toPrecision(n)
                    },
                    o: function(t) {
                        return Math.round(t).toString(8)
                    },
                    p: function(t, n) {
                        return Iu(100 * t, n)
                    },
                    r: Iu,
                    s: function(t, n) {
                        var e = ju(t, n);
                        if (!e) return t + "";
                        var r = e[0],
                            i = e[1],
                            u = i - (zu = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
                            o = r.length;
                        return u === o ? r : u > o ? r + new Array(u - o + 1).join("0") : u > 0 ? r.slice(0, u) + "." + r.slice(u) : "0." + new Array(1 - u).join("0") + ju(t, Math.max(0, n + u - 1))[0]
                    },
                    X: function(t) {
                        return Math.round(t).toString(16).toUpperCase()
                    },
                    x: function(t) {
                        return Math.round(t).toString(16)
                    }
                },
                Bu = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;

            function Hu(t) {
                return new Xu(t)
            }

            function Xu(t) {
                if (!(n = Bu.exec(t))) throw new Error("invalid format: " + t);
                var n, e = n[1] || " ",
                    r = n[2] || ">",
                    i = n[3] || "-",
                    u = n[4] || "",
                    o = !!n[5],
                    a = n[6] && +n[6],
                    c = !!n[7],
                    f = n[8] && +n[8].slice(1),
                    s = n[9] || "";
                "n" === s ? (c = !0, s = "g") : Yu[s] || (s = ""), (o || "0" === e && "=" === r) && (o = !0, e = "0", r = "="), this.fill = e, this.align = r, this.sign = i, this.symbol = u, this.zero = o, this.width = a, this.comma = c, this.precision = f, this.type = s
            }
            Hu.prototype = Xu.prototype, Xu.prototype.toString = function() {
                return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + this.type
            };
            var Vu, $u, Wu, Zu = function(t) {
                    return t
                },
                Gu = ["y", "z", "a", "f", "p", "n", "Âµ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"],
                Qu = function(t) {
                    var n, e, r = t.grouping && t.thousands ? (n = t.grouping, e = t.thousands, function(t, r) {
                            for (var i = t.length, u = [], o = 0, a = n[0], c = 0; i > 0 && a > 0 && (c + a + 1 > r && (a = Math.max(1, r - c)), u.push(t.substring(i -= a, i + a)), !((c += a + 1) > r));) a = n[o = (o + 1) % n.length];
                            return u.reverse().join(e)
                        }) : Zu,
                        i = t.currency,
                        u = t.decimal,
                        o = t.numerals ? function(t) {
                            return function(n) {
                                return n.replace(/[0-9]/g, (function(n) {
                                    return t[+n]
                                }))
                            }
                        }(t.numerals) : Zu,
                        a = t.percent || "%";

                    function c(t) {
                        var n = (t = Hu(t)).fill,
                            e = t.align,
                            c = t.sign,
                            f = t.symbol,
                            s = t.zero,
                            l = t.width,
                            h = t.comma,
                            d = t.precision,
                            p = t.type,
                            v = "$" === f ? i[0] : "#" === f && /[boxX]/.test(p) ? "0" + p.toLowerCase() : "",
                            y = "$" === f ? i[1] : /[%p]/.test(p) ? a : "",
                            _ = Yu[p],
                            g = !p || /[defgprs%]/.test(p);

                        function m(t) {
                            var i, a, f, m = v,
                                x = y;
                            if ("c" === p) x = _(t) + x, t = "";
                            else {
                                var b = (t = +t) < 0;
                                if (t = _(Math.abs(t), d), b && 0 == +t && (b = !1), m = (b ? "(" === c ? c : "-" : "-" === c || "(" === c ? "" : c) + m, x = ("s" === p ? Gu[8 + zu / 3] : "") + x + (b && "(" === c ? ")" : ""), g)
                                    for (i = -1, a = t.length; ++i < a;)
                                        if (48 > (f = t.charCodeAt(i)) || f > 57) {
                                            x = (46 === f ? u + t.slice(i + 1) : t.slice(i)) + x, t = t.slice(0, i);
                                            break
                                        }
                            }
                            h && !s && (t = r(t, 1 / 0));
                            var w = m.length + t.length + x.length,
                                M = w < l ? new Array(l - w + 1).join(n) : "";
                            switch (h && s && (t = r(M + t, M.length ? l - x.length : 1 / 0), M = ""), e) {
                                case "<":
                                    t = m + t + x + M;
                                    break;
                                case "=":
                                    t = m + M + t + x;
                                    break;
                                case "^":
                                    t = M.slice(0, w = M.length >> 1) + m + t + x + M.slice(w);
                                    break;
                                default:
                                    t = M + m + t + x
                            }
                            return o(t)
                        }
                        return d = null == d ? p ? 6 : 12 : /[gprs]/.test(p) ? Math.max(1, Math.min(21, d)) : Math.max(0, Math.min(20, d)), m.toString = function() {
                            return t + ""
                        }, m
                    }
                    return {
                        format: c,
                        formatPrefix: function(t, n) {
                            var e = c(((t = Hu(t)).type = "f", t)),
                                r = 3 * Math.max(-8, Math.min(8, Math.floor(Fu(n) / 3))),
                                i = Math.pow(10, -r),
                                u = Gu[8 + r / 3];
                            return function(t) {
                                return e(i * t) + u
                            }
                        }
                    }
                };

            function Ju(t) {
                return Vu = Qu(t), $u = Vu.format, Wu = Vu.formatPrefix, Vu
            }
            Ju({
                decimal: ".",
                thousands: ",",
                grouping: [3],
                currency: ["$", ""]
            });
            var Ku = function(t) {
                    return Math.max(0, -Fu(Math.abs(t)))
                },
                to = function(t, n) {
                    return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(Fu(n) / 3))) - Fu(Math.abs(t)))
                },
                no = function(t, n) {
                    return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Fu(n) - Fu(t)) + 1
                },
                eo = function() {
                    return new ro
                };

            function ro() {
                this.reset()
            }
            ro.prototype = {
                constructor: ro,
                reset: function() {
                    this.s = this.t = 0
                },
                add: function(t) {
                    uo(io, t, this.t), uo(this, io.s, this.s), this.s ? this.t += io.t : this.s = io.t
                },
                valueOf: function() {
                    return this.s
                }
            };
            var io = new ro;

            function uo(t, n, e) {
                var r = t.s = n + e,
                    i = r - n,
                    u = r - i;
                t.t = n - u + (e - i)
            }
            var oo = 1e-6,
                ao = Math.PI,
                co = ao / 2,
                fo = ao / 4,
                so = 2 * ao,
                lo = 180 / ao,
                ho = ao / 180,
                po = Math.abs,
                vo = Math.atan,
                yo = Math.atan2,
                _o = Math.cos,
                go = Math.ceil,
                mo = Math.exp,
                xo = (Math.floor, Math.log),
                bo = Math.pow,
                wo = Math.sin,
                Mo = Math.sign || function(t) {
                    return t > 0 ? 1 : t < 0 ? -1 : 0
                },
                To = Math.sqrt,
                ko = Math.tan;

            function No(t) {
                return t > 1 ? 0 : t < -1 ? ao : Math.acos(t)
            }

            function So(t) {
                return t > 1 ? co : t < -1 ? -co : Math.asin(t)
            }

            function Eo(t) {
                return (t = wo(t / 2)) * t
            }

            function Ao() {}

            function Co(t, n) {
                t && Po.hasOwnProperty(t.type) && Po[t.type](t, n)
            }
            var zo = {
                    Feature: function(t, n) {
                        Co(t.geometry, n)
                    },
                    FeatureCollection: function(t, n) {
                        for (var e = t.features, r = -1, i = e.length; ++r < i;) Co(e[r].geometry, n)
                    }
                },
                Po = {
                    Sphere: function(t, n) {
                        n.sphere()
                    },
                    Point: function(t, n) {
                        t = t.coordinates, n.point(t[0], t[1], t[2])
                    },
                    MultiPoint: function(t, n) {
                        for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) t = e[r], n.point(t[0], t[1], t[2])
                    },
                    LineString: function(t, n) {
                        Oo(t.coordinates, n, 0)
                    },
                    MultiLineString: function(t, n) {
                        for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) Oo(e[r], n, 0)
                    },
                    Polygon: function(t, n) {
                        Ro(t.coordinates, n)
                    },
                    MultiPolygon: function(t, n) {
                        for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) Ro(e[r], n)
                    },
                    GeometryCollection: function(t, n) {
                        for (var e = t.geometries, r = -1, i = e.length; ++r < i;) Co(e[r], n)
                    }
                };

            function Oo(t, n, e) {
                var r, i = -1,
                    u = t.length - e;
                for (n.lineStart(); ++i < u;) r = t[i], n.point(r[0], r[1], r[2]);
                n.lineEnd()
            }

            function Ro(t, n) {
                var e = -1,
                    r = t.length;
                for (n.polygonStart(); ++e < r;) Oo(t[e], n, 1);
                n.polygonEnd()
            }
            var Lo, qo, Do, Uo, jo, Fo = function(t, n) {
                    t && zo.hasOwnProperty(t.type) ? zo[t.type](t, n) : Co(t, n)
                },
                Io = eo(),
                Yo = eo(),
                Bo = {
                    point: Ao,
                    lineStart: Ao,
                    lineEnd: Ao,
                    polygonStart: function() {
                        Io.reset(), Bo.lineStart = Ho, Bo.lineEnd = Xo
                    },
                    polygonEnd: function() {
                        var t = +Io;
                        Yo.add(t < 0 ? so + t : t), this.lineStart = this.lineEnd = this.point = Ao
                    },
                    sphere: function() {
                        Yo.add(so)
                    }
                };

            function Ho() {
                Bo.point = Vo
            }

            function Xo() {
                $o(Lo, qo)
            }

            function Vo(t, n) {
                Bo.point = $o, Lo = t, qo = n, Do = t *= ho, Uo = _o(n = (n *= ho) / 2 + fo), jo = wo(n)
            }

            function $o(t, n) {
                var e = (t *= ho) - Do,
                    r = e >= 0 ? 1 : -1,
                    i = r * e,
                    u = _o(n = (n *= ho) / 2 + fo),
                    o = wo(n),
                    a = jo * o,
                    c = Uo * u + a * _o(i),
                    f = a * r * wo(i);
                Io.add(yo(f, c)), Do = t, Uo = u, jo = o
            }
            var Wo = function(t) {
                return Yo.reset(), Fo(t, Bo), 2 * Yo
            };

            function Zo(t) {
                return [yo(t[1], t[0]), So(t[2])]
            }

            function Go(t) {
                var n = t[0],
                    e = t[1],
                    r = _o(e);
                return [r * _o(n), r * wo(n), wo(e)]
            }

            function Qo(t, n) {
                return t[0] * n[0] + t[1] * n[1] + t[2] * n[2]
            }

            function Jo(t, n) {
                return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]]
            }

            function Ko(t, n) {
                t[0] += n[0], t[1] += n[1], t[2] += n[2]
            }

            function ta(t, n) {
                return [t[0] * n, t[1] * n, t[2] * n]
            }

            function na(t) {
                var n = To(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
                t[0] /= n, t[1] /= n, t[2] /= n
            }
            var ea, ra, ia, ua, oa, aa, ca, fa, sa, la, ha = eo(),
                da = {
                    point: pa,
                    lineStart: ya,
                    lineEnd: _a,
                    polygonStart: function() {
                        da.point = ga, da.lineStart = ma, da.lineEnd = xa, ha.reset(), Bo.polygonStart()
                    },
                    polygonEnd: function() {
                        Bo.polygonEnd(), da.point = pa, da.lineStart = ya, da.lineEnd = _a, Io < 0 ? (ea = -(ia = 180), ra = -(ua = 90)) : ha > oo ? ua = 90 : ha < -oo && (ra = -90), la[0] = ea, la[1] = ia
                    }
                };

            function pa(t, n) {
                sa.push(la = [ea = t, ia = t]), n < ra && (ra = n), n > ua && (ua = n)
            }

            function va(t, n) {
                var e = Go([t * ho, n * ho]);
                if (fa) {
                    var r = Jo(fa, e),
                        i = Jo([r[1], -r[0], 0], r);
                    na(i), i = Zo(i);
                    var u, o = t - oa,
                        a = o > 0 ? 1 : -1,
                        c = i[0] * lo * a,
                        f = po(o) > 180;
                    f ^ (a * oa < c && c < a * t) ? (u = i[1] * lo) > ua && (ua = u) : f ^ (a * oa < (c = (c + 360) % 360 - 180) && c < a * t) ? (u = -i[1] * lo) < ra && (ra = u) : (n < ra && (ra = n), n > ua && (ua = n)), f ? t < oa ? ba(ea, t) > ba(ea, ia) && (ia = t) : ba(t, ia) > ba(ea, ia) && (ea = t) : ia >= ea ? (t < ea && (ea = t), t > ia && (ia = t)) : t > oa ? ba(ea, t) > ba(ea, ia) && (ia = t) : ba(t, ia) > ba(ea, ia) && (ea = t)
                } else sa.push(la = [ea = t, ia = t]);
                n < ra && (ra = n), n > ua && (ua = n), fa = e, oa = t
            }

            function ya() {
                da.point = va
            }

            function _a() {
                la[0] = ea, la[1] = ia, da.point = pa, fa = null
            }

            function ga(t, n) {
                if (fa) {
                    var e = t - oa;
                    ha.add(po(e) > 180 ? e + (e > 0 ? 360 : -360) : e)
                } else aa = t, ca = n;
                Bo.point(t, n), va(t, n)
            }

            function ma() {
                Bo.lineStart()
            }

            function xa() {
                ga(aa, ca), Bo.lineEnd(), po(ha) > oo && (ea = -(ia = 180)), la[0] = ea, la[1] = ia, fa = null
            }

            function ba(t, n) {
                return (n -= t) < 0 ? n + 360 : n
            }

            function wa(t, n) {
                return t[0] - n[0]
            }

            function Ma(t, n) {
                return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n
            }
            var Ta, ka, Na, Sa, Ea, Aa, Ca, za, Pa, Oa, Ra, La, qa, Da, Ua, ja, Fa = function(t) {
                    var n, e, r, i, u, o, a;
                    if (ua = ia = -(ea = ra = 1 / 0), sa = [], Fo(t, da), e = sa.length) {
                        for (sa.sort(wa), n = 1, u = [r = sa[0]]; n < e; ++n) Ma(r, (i = sa[n])[0]) || Ma(r, i[1]) ? (ba(r[0], i[1]) > ba(r[0], r[1]) && (r[1] = i[1]), ba(i[0], r[1]) > ba(r[0], r[1]) && (r[0] = i[0])) : u.push(r = i);
                        for (o = -1 / 0, n = 0, r = u[e = u.length - 1]; n <= e; r = i, ++n) i = u[n], (a = ba(r[1], i[0])) > o && (o = a, ea = i[0], ia = r[1])
                    }
                    return sa = la = null, ea === 1 / 0 || ra === 1 / 0 ? [
                        [NaN, NaN],
                        [NaN, NaN]
                    ] : [
                        [ea, ra],
                        [ia, ua]
                    ]
                },
                Ia = {
                    sphere: Ao,
                    point: Ya,
                    lineStart: Ha,
                    lineEnd: $a,
                    polygonStart: function() {
                        Ia.lineStart = Wa, Ia.lineEnd = Za
                    },
                    polygonEnd: function() {
                        Ia.lineStart = Ha, Ia.lineEnd = $a
                    }
                };

            function Ya(t, n) {
                t *= ho;
                var e = _o(n *= ho);
                Ba(e * _o(t), e * wo(t), wo(n))
            }

            function Ba(t, n, e) {
                Na += (t - Na) / ++Ta, Sa += (n - Sa) / Ta, Ea += (e - Ea) / Ta
            }

            function Ha() {
                Ia.point = Xa
            }

            function Xa(t, n) {
                t *= ho;
                var e = _o(n *= ho);
                Da = e * _o(t), Ua = e * wo(t), ja = wo(n), Ia.point = Va, Ba(Da, Ua, ja)
            }

            function Va(t, n) {
                t *= ho;
                var e = _o(n *= ho),
                    r = e * _o(t),
                    i = e * wo(t),
                    u = wo(n),
                    o = yo(To((o = Ua * u - ja * i) * o + (o = ja * r - Da * u) * o + (o = Da * i - Ua * r) * o), Da * r + Ua * i + ja * u);
                ka += o, Aa += o * (Da + (Da = r)), Ca += o * (Ua + (Ua = i)), za += o * (ja + (ja = u)), Ba(Da, Ua, ja)
            }

            function $a() {
                Ia.point = Ya
            }

            function Wa() {
                Ia.point = Ga
            }

            function Za() {
                Qa(La, qa), Ia.point = Ya
            }

            function Ga(t, n) {
                La = t, qa = n, t *= ho, n *= ho, Ia.point = Qa;
                var e = _o(n);
                Da = e * _o(t), Ua = e * wo(t), ja = wo(n), Ba(Da, Ua, ja)
            }

            function Qa(t, n) {
                t *= ho;
                var e = _o(n *= ho),
                    r = e * _o(t),
                    i = e * wo(t),
                    u = wo(n),
                    o = Ua * u - ja * i,
                    a = ja * r - Da * u,
                    c = Da * i - Ua * r,
                    f = To(o * o + a * a + c * c),
                    s = So(f),
                    l = f && -s / f;
                Pa += l * o, Oa += l * a, Ra += l * c, ka += s, Aa += s * (Da + (Da = r)), Ca += s * (Ua + (Ua = i)), za += s * (ja + (ja = u)), Ba(Da, Ua, ja)
            }
            var Ja = function(t) {
                    Ta = ka = Na = Sa = Ea = Aa = Ca = za = Pa = Oa = Ra = 0, Fo(t, Ia);
                    var n = Pa,
                        e = Oa,
                        r = Ra,
                        i = n * n + e * e + r * r;
                    return i < 1e-12 && (n = Aa, e = Ca, r = za, ka < oo && (n = Na, e = Sa, r = Ea), (i = n * n + e * e + r * r) < 1e-12) ? [NaN, NaN] : [yo(e, n) * lo, So(r / To(i)) * lo]
                },
                Ka = function(t) {
                    return function() {
                        return t
                    }
                },
                tc = function(t, n) {
                    function e(e, r) {
                        return e = t(e, r), n(e[0], e[1])
                    }
                    return t.invert && n.invert && (e.invert = function(e, r) {
                        return (e = n.invert(e, r)) && t.invert(e[0], e[1])
                    }), e
                };

            function nc(t, n) {
                return [t > ao ? t - so : t < -ao ? t + so : t, n]
            }

            function ec(t, n, e) {
                return (t %= so) ? n || e ? tc(ic(t), uc(n, e)) : ic(t) : n || e ? uc(n, e) : nc
            }

            function rc(t) {
                return function(n, e) {
                    return [(n += t) > ao ? n - so : n < -ao ? n + so : n, e]
                }
            }

            function ic(t) {
                var n = rc(t);
                return n.invert = rc(-t), n
            }

            function uc(t, n) {
                var e = _o(t),
                    r = wo(t),
                    i = _o(n),
                    u = wo(n);

                function o(t, n) {
                    var o = _o(n),
                        a = _o(t) * o,
                        c = wo(t) * o,
                        f = wo(n),
                        s = f * e + a * r;
                    return [yo(c * i - s * u, a * e - f * r), So(s * i + c * u)]
                }
                return o.invert = function(t, n) {
                    var o = _o(n),
                        a = _o(t) * o,
                        c = wo(t) * o,
                        f = wo(n),
                        s = f * i - c * u;
                    return [yo(c * i + f * u, a * e + s * r), So(s * e - a * r)]
                }, o
            }
            nc.invert = nc;
            var oc = function(t) {
                function n(n) {
                    return (n = t(n[0] * ho, n[1] * ho))[0] *= lo, n[1] *= lo, n
                }
                return t = ec(t[0] * ho, t[1] * ho, t.length > 2 ? t[2] * ho : 0), n.invert = function(n) {
                    return (n = t.invert(n[0] * ho, n[1] * ho))[0] *= lo, n[1] *= lo, n
                }, n
            };

            function ac(t, n, e, r, i, u) {
                if (e) {
                    var o = _o(n),
                        a = wo(n),
                        c = r * e;
                    null == i ? (i = n + r * so, u = n - c / 2) : (i = cc(o, i), u = cc(o, u), (r > 0 ? i < u : i > u) && (i += r * so));
                    for (var f, s = i; r > 0 ? s > u : s < u; s -= c) f = Zo([o, -a * _o(s), -a * wo(s)]), t.point(f[0], f[1])
                }
            }

            function cc(t, n) {
                (n = Go(n))[0] -= t, na(n);
                var e = No(-n[1]);
                return ((-n[2] < 0 ? -e : e) + so - oo) % so
            }
            var fc = function() {
                    var t, n, e = Ka([0, 0]),
                        r = Ka(90),
                        i = Ka(6),
                        u = {
                            point: function(e, r) {
                                t.push(e = n(e, r)), e[0] *= lo, e[1] *= lo
                            }
                        };

                    function o() {
                        var o = e.apply(this, arguments),
                            a = r.apply(this, arguments) * ho,
                            c = i.apply(this, arguments) * ho;
                        return t = [], n = ec(-o[0] * ho, -o[1] * ho, 0).invert, ac(u, a, c, 1), o = {
                            type: "Polygon",
                            coordinates: [t]
                        }, t = n = null, o
                    }
                    return o.center = function(t) {
                        return arguments.length ? (e = "function" == typeof t ? t : Ka([+t[0], +t[1]]), o) : e
                    }, o.radius = function(t) {
                        return arguments.length ? (r = "function" == typeof t ? t : Ka(+t), o) : r
                    }, o.precision = function(t) {
                        return arguments.length ? (i = "function" == typeof t ? t : Ka(+t), o) : i
                    }, o
                },
                sc = function() {
                    var t, n = [];
                    return {
                        point: function(n, e) {
                            t.push([n, e])
                        },
                        lineStart: function() {
                            n.push(t = [])
                        },
                        lineEnd: Ao,
                        rejoin: function() {
                            n.length > 1 && n.push(n.pop().concat(n.shift()))
                        },
                        result: function() {
                            var e = n;
                            return n = [], t = null, e
                        }
                    }
                },
                lc = function(t, n) {
                    return po(t[0] - n[0]) < oo && po(t[1] - n[1]) < oo
                };

            function hc(t, n, e, r) {
                this.x = t, this.z = n, this.o = e, this.e = r, this.v = !1, this.n = this.p = null
            }
            var dc = function(t, n, e, r, i) {
                var u, o, a = [],
                    c = [];
                if (t.forEach((function(t) {
                        if (!((n = t.length - 1) <= 0)) {
                            var n, e, r = t[0],
                                o = t[n];
                            if (lc(r, o)) {
                                for (i.lineStart(), u = 0; u < n; ++u) i.point((r = t[u])[0], r[1]);
                                i.lineEnd()
                            } else a.push(e = new hc(r, t, null, !0)), c.push(e.o = new hc(r, null, e, !1)), a.push(e = new hc(o, t, null, !1)), c.push(e.o = new hc(o, null, e, !0))
                        }
                    })), a.length) {
                    for (c.sort(n), pc(a), pc(c), u = 0, o = c.length; u < o; ++u) c[u].e = e = !e;
                    for (var f, s, l = a[0];;) {
                        for (var h = l, d = !0; h.v;)
                            if ((h = h.n) === l) return;
                        f = h.z, i.lineStart();
                        do {
                            if (h.v = h.o.v = !0, h.e) {
                                if (d)
                                    for (u = 0, o = f.length; u < o; ++u) i.point((s = f[u])[0], s[1]);
                                else r(h.x, h.n.x, 1, i);
                                h = h.n
                            } else {
                                if (d)
                                    for (f = h.p.z, u = f.length - 1; u >= 0; --u) i.point((s = f[u])[0], s[1]);
                                else r(h.x, h.p.x, -1, i);
                                h = h.p
                            }
                            f = (h = h.o).z, d = !d
                        } while (!h.v);
                        i.lineEnd()
                    }
                }
            };

            function pc(t) {
                if (n = t.length) {
                    for (var n, e, r = 0, i = t[0]; ++r < n;) i.n = e = t[r], e.p = i, i = e;
                    i.n = e = t[0], e.p = i
                }
            }
            var vc = eo(),
                yc = function(t, n) {
                    var e = n[0],
                        r = n[1],
                        i = [wo(e), -_o(e), 0],
                        u = 0,
                        o = 0;
                    vc.reset();
                    for (var a = 0, c = t.length; a < c; ++a)
                        if (s = (f = t[a]).length)
                            for (var f, s, l = f[s - 1], h = l[0], d = l[1] / 2 + fo, p = wo(d), v = _o(d), y = 0; y < s; ++y, h = g, p = x, v = b, l = _) {
                                var _ = f[y],
                                    g = _[0],
                                    m = _[1] / 2 + fo,
                                    x = wo(m),
                                    b = _o(m),
                                    w = g - h,
                                    M = w >= 0 ? 1 : -1,
                                    T = M * w,
                                    k = T > ao,
                                    N = p * x;
                                if (vc.add(yo(N * M * wo(T), v * b + N * _o(T))), u += k ? w + M * so : w, k ^ h >= e ^ g >= e) {
                                    var S = Jo(Go(l), Go(_));
                                    na(S);
                                    var E = Jo(i, S);
                                    na(E);
                                    var A = (k ^ w >= 0 ? -1 : 1) * So(E[2]);
                                    (r > A || r === A && (S[0] || S[1])) && (o += k ^ w >= 0 ? 1 : -1)
                                }
                            }
                    return (u < -oo || u < oo && vc < -oo) ^ 1 & o
                },
                _c = function(t, n, e, i) {
                    return function(u) {
                        var o, a, c, f = n(u),
                            s = sc(),
                            l = n(s),
                            h = !1,
                            d = {
                                point: p,
                                lineStart: y,
                                lineEnd: _,
                                polygonStart: function() {
                                    d.point = g, d.lineStart = m, d.lineEnd = x, a = [], o = []
                                },
                                polygonEnd: function() {
                                    d.point = p, d.lineStart = y, d.lineEnd = _, a = Object(r.n)(a);
                                    var t = yc(o, i);
                                    a.length ? (h || (u.polygonStart(), h = !0), dc(a, mc, t, e, u)) : t && (h || (u.polygonStart(), h = !0), u.lineStart(), e(null, null, 1, u), u.lineEnd()), h && (u.polygonEnd(), h = !1), a = o = null
                                },
                                sphere: function() {
                                    u.polygonStart(), u.lineStart(), e(null, null, 1, u), u.lineEnd(), u.polygonEnd()
                                }
                            };

                        function p(n, e) {
                            t(n, e) && u.point(n, e)
                        }

                        function v(t, n) {
                            f.point(t, n)
                        }

                        function y() {
                            d.point = v, f.lineStart()
                        }

                        function _() {
                            d.point = p, f.lineEnd()
                        }

                        function g(t, n) {
                            c.push([t, n]), l.point(t, n)
                        }

                        function m() {
                            l.lineStart(), c = []
                        }

                        function x() {
                            g(c[0][0], c[0][1]), l.lineEnd();
                            var t, n, e, r, i = l.clean(),
                                f = s.result(),
                                d = f.length;
                            if (c.pop(), o.push(c), c = null, d)
                                if (1 & i) {
                                    if ((n = (e = f[0]).length - 1) > 0) {
                                        for (h || (u.polygonStart(), h = !0), u.lineStart(), t = 0; t < n; ++t) u.point((r = e[t])[0], r[1]);
                                        u.lineEnd()
                                    }
                                } else d > 1 && 2 & i && f.push(f.pop().concat(f.shift())), a.push(f.filter(gc))
                        }
                        return d
                    }
                };

            function gc(t) {
                return t.length > 1
            }

            function mc(t, n) {
                return ((t = t.x)[0] < 0 ? t[1] - co - oo : co - t[1]) - ((n = n.x)[0] < 0 ? n[1] - co - oo : co - n[1])
            }
            var xc = _c((function() {
                    return !0
                }), (function(t) {
                    var n, e = NaN,
                        r = NaN,
                        i = NaN;
                    return {
                        lineStart: function() {
                            t.lineStart(), n = 1
                        },
                        point: function(u, o) {
                            var a = u > 0 ? ao : -ao,
                                c = po(u - e);
                            po(c - ao) < oo ? (t.point(e, r = (r + o) / 2 > 0 ? co : -co), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(a, r), t.point(u, r), n = 0) : i !== a && c >= ao && (po(e - i) < oo && (e -= i * oo), po(u - a) < oo && (u -= a * oo), r = function(t, n, e, r) {
                                var i, u, o = wo(t - e);
                                return po(o) > oo ? vo((wo(n) * (u = _o(r)) * wo(e) - wo(r) * (i = _o(n)) * wo(t)) / (i * u * o)) : (n + r) / 2
                            }(e, r, u, o), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(a, r), n = 0), t.point(e = u, r = o), i = a
                        },
                        lineEnd: function() {
                            t.lineEnd(), e = r = NaN
                        },
                        clean: function() {
                            return 2 - n
                        }
                    }
                }), (function(t, n, e, r) {
                    var i;
                    if (null == t) i = e * co, r.point(-ao, i), r.point(0, i), r.point(ao, i), r.point(ao, 0), r.point(ao, -i), r.point(0, -i), r.point(-ao, -i), r.point(-ao, 0), r.point(-ao, i);
                    else if (po(t[0] - n[0]) > oo) {
                        var u = t[0] < n[0] ? ao : -ao;
                        i = e * u / 2, r.point(-u, i), r.point(0, i), r.point(u, i)
                    } else r.point(n[0], n[1])
                }), [-ao, -co]),
                bc = function(t) {
                    var n = _o(t),
                        e = 6 * ho,
                        r = n > 0,
                        i = po(n) > oo;

                    function u(t, e) {
                        return _o(t) * _o(e) > n
                    }

                    function o(t, e, r) {
                        var i = [1, 0, 0],
                            u = Jo(Go(t), Go(e)),
                            o = Qo(u, u),
                            a = u[0],
                            c = o - a * a;
                        if (!c) return !r && t;
                        var f = n * o / c,
                            s = -n * a / c,
                            l = Jo(i, u),
                            h = ta(i, f);
                        Ko(h, ta(u, s));
                        var d = l,
                            p = Qo(h, d),
                            v = Qo(d, d),
                            y = p * p - v * (Qo(h, h) - 1);
                        if (!(y < 0)) {
                            var _ = To(y),
                                g = ta(d, (-p - _) / v);
                            if (Ko(g, h), g = Zo(g), !r) return g;
                            var m, x = t[0],
                                b = e[0],
                                w = t[1],
                                M = e[1];
                            b < x && (m = x, x = b, b = m);
                            var T = b - x,
                                k = po(T - ao) < oo;
                            if (!k && M < w && (m = w, w = M, M = m), k || T < oo ? k ? w + M > 0 ^ g[1] < (po(g[0] - x) < oo ? w : M) : w <= g[1] && g[1] <= M : T > ao ^ (x <= g[0] && g[0] <= b)) {
                                var N = ta(d, (-p + _) / v);
                                return Ko(N, h), [g, Zo(N)]
                            }
                        }
                    }

                    function a(n, e) {
                        var i = r ? t : ao - t,
                            u = 0;
                        return n < -i ? u |= 1 : n > i && (u |= 2), e < -i ? u |= 4 : e > i && (u |= 8), u
                    }
                    return _c(u, (function(t) {
                        var n, e, c, f, s;
                        return {
                            lineStart: function() {
                                f = c = !1, s = 1
                            },
                            point: function(l, h) {
                                var d, p = [l, h],
                                    v = u(l, h),
                                    y = r ? v ? 0 : a(l, h) : v ? a(l + (l < 0 ? ao : -ao), h) : 0;
                                if (!n && (f = c = v) && t.lineStart(), v !== c && (!(d = o(n, p)) || lc(n, d) || lc(p, d)) && (p[0] += oo, p[1] += oo, v = u(p[0], p[1])), v !== c) s = 0, v ? (t.lineStart(), d = o(p, n), t.point(d[0], d[1])) : (d = o(n, p), t.point(d[0], d[1]), t.lineEnd()), n = d;
                                else if (i && n && r ^ v) {
                                    var _;
                                    y & e || !(_ = o(p, n, !0)) || (s = 0, r ? (t.lineStart(), t.point(_[0][0], _[0][1]), t.point(_[1][0], _[1][1]), t.lineEnd()) : (t.point(_[1][0], _[1][1]), t.lineEnd(), t.lineStart(), t.point(_[0][0], _[0][1])))
                                }!v || n && lc(n, p) || t.point(p[0], p[1]), n = p, c = v, e = y
                            },
                            lineEnd: function() {
                                c && t.lineEnd(), n = null
                            },
                            clean: function() {
                                return s | (f && c) << 1
                            }
                        }
                    }), (function(n, r, i, u) {
                        ac(u, t, e, i, n, r)
                    }), r ? [0, -t] : [-ao, t - ao])
                },
                wc = function(t, n, e, r, i, u) {
                    var o, a = t[0],
                        c = t[1],
                        f = 0,
                        s = 1,
                        l = n[0] - a,
                        h = n[1] - c;
                    if (o = e - a, l || !(o > 0)) {
                        if (o /= l, l < 0) {
                            if (o < f) return;
                            o < s && (s = o)
                        } else if (l > 0) {
                            if (o > s) return;
                            o > f && (f = o)
                        }
                        if (o = i - a, l || !(o < 0)) {
                            if (o /= l, l < 0) {
                                if (o > s) return;
                                o > f && (f = o)
                            } else if (l > 0) {
                                if (o < f) return;
                                o < s && (s = o)
                            }
                            if (o = r - c, h || !(o > 0)) {
                                if (o /= h, h < 0) {
                                    if (o < f) return;
                                    o < s && (s = o)
                                } else if (h > 0) {
                                    if (o > s) return;
                                    o > f && (f = o)
                                }
                                if (o = u - c, h || !(o < 0)) {
                                    if (o /= h, h < 0) {
                                        if (o > s) return;
                                        o > f && (f = o)
                                    } else if (h > 0) {
                                        if (o < f) return;
                                        o < s && (s = o)
                                    }
                                    return f > 0 && (t[0] = a + f * l, t[1] = c + f * h), s < 1 && (n[0] = a + s * l, n[1] = c + s * h), !0
                                }
                            }
                        }
                    }
                },
                Mc = 1e9,
                Tc = -Mc;

            function kc(t, n, e, i) {
                function u(r, u) {
                    return t <= r && r <= e && n <= u && u <= i
                }

                function o(r, u, o, c) {
                    var s = 0,
                        l = 0;
                    if (null == r || (s = a(r, o)) !== (l = a(u, o)) || f(r, u) < 0 ^ o > 0)
                        do {
                            c.point(0 === s || 3 === s ? t : e, s > 1 ? i : n)
                        } while ((s = (s + o + 4) % 4) !== l);
                    else c.point(u[0], u[1])
                }

                function a(r, i) {
                    return po(r[0] - t) < oo ? i > 0 ? 0 : 3 : po(r[0] - e) < oo ? i > 0 ? 2 : 1 : po(r[1] - n) < oo ? i > 0 ? 1 : 0 : i > 0 ? 3 : 2
                }

                function c(t, n) {
                    return f(t.x, n.x)
                }

                function f(t, n) {
                    var e = a(t, 1),
                        r = a(n, 1);
                    return e !== r ? e - r : 0 === e ? n[1] - t[1] : 1 === e ? t[0] - n[0] : 2 === e ? t[1] - n[1] : n[0] - t[0]
                }
                return function(a) {
                    var f, s, l, h, d, p, v, y, _, g, m, x = a,
                        b = sc(),
                        w = {
                            point: M,
                            lineStart: function() {
                                w.point = T, s && s.push(l = []), g = !0, _ = !1, v = y = NaN
                            },
                            lineEnd: function() {
                                f && (T(h, d), p && _ && b.rejoin(), f.push(b.result())), w.point = M, _ && x.lineEnd()
                            },
                            polygonStart: function() {
                                x = b, f = [], s = [], m = !0
                            },
                            polygonEnd: function() {
                                var n = function() {
                                        for (var n = 0, e = 0, r = s.length; e < r; ++e)
                                            for (var u, o, a = s[e], c = 1, f = a.length, l = a[0], h = l[0], d = l[1]; c < f; ++c) u = h, o = d, h = (l = a[c])[0], d = l[1], o <= i ? d > i && (h - u) * (i - o) > (d - o) * (t - u) && ++n : d <= i && (h - u) * (i - o) < (d - o) * (t - u) && --n;
                                        return n
                                    }(),
                                    e = m && n,
                                    u = (f = Object(r.n)(f)).length;
                                (e || u) && (a.polygonStart(), e && (a.lineStart(), o(null, null, 1, a), a.lineEnd()), u && dc(f, c, n, o, a), a.polygonEnd()), x = a, f = s = l = null
                            }
                        };

                    function M(t, n) {
                        u(t, n) && x.point(t, n)
                    }

                    function T(r, o) {
                        var a = u(r, o);
                        if (s && l.push([r, o]), g) h = r, d = o, p = a, g = !1, a && (x.lineStart(), x.point(r, o));
                        else if (a && _) x.point(r, o);
                        else {
                            var c = [v = Math.max(Tc, Math.min(Mc, v)), y = Math.max(Tc, Math.min(Mc, y))],
                                f = [r = Math.max(Tc, Math.min(Mc, r)), o = Math.max(Tc, Math.min(Mc, o))];
                            wc(c, f, t, n, e, i) ? (_ || (x.lineStart(), x.point(c[0], c[1])), x.point(f[0], f[1]), a || x.lineEnd(), m = !1) : a && (x.lineStart(), x.point(r, o), m = !1)
                        }
                        v = r, y = o, _ = a
                    }
                    return w
                }
            }
            var Nc, Sc, Ec, Ac = function() {
                    var t, n, e, r = 0,
                        i = 0,
                        u = 960,
                        o = 500;
                    return e = {
                        stream: function(e) {
                            return t && n === e ? t : t = kc(r, i, u, o)(n = e)
                        },
                        extent: function(a) {
                            return arguments.length ? (r = +a[0][0], i = +a[0][1], u = +a[1][0], o = +a[1][1], t = n = null, e) : [
                                [r, i],
                                [u, o]
                            ]
                        }
                    }
                },
                Cc = eo(),
                zc = {
                    sphere: Ao,
                    point: Ao,
                    lineStart: function() {
                        zc.point = Oc, zc.lineEnd = Pc
                    },
                    lineEnd: Ao,
                    polygonStart: Ao,
                    polygonEnd: Ao
                };

            function Pc() {
                zc.point = zc.lineEnd = Ao
            }

            function Oc(t, n) {
                Nc = t *= ho, Sc = wo(n *= ho), Ec = _o(n), zc.point = Rc
            }

            function Rc(t, n) {
                t *= ho;
                var e = wo(n *= ho),
                    r = _o(n),
                    i = po(t - Nc),
                    u = _o(i),
                    o = r * wo(i),
                    a = Ec * e - Sc * r * u,
                    c = Sc * e + Ec * r * u;
                Cc.add(yo(To(o * o + a * a), c)), Nc = t, Sc = e, Ec = r
            }
            var Lc = function(t) {
                    return Cc.reset(), Fo(t, zc), +Cc
                },
                qc = [null, null],
                Dc = {
                    type: "LineString",
                    coordinates: qc
                },
                Uc = function(t, n) {
                    return qc[0] = t, qc[1] = n, Lc(Dc)
                },
                jc = {
                    Feature: function(t, n) {
                        return Ic(t.geometry, n)
                    },
                    FeatureCollection: function(t, n) {
                        for (var e = t.features, r = -1, i = e.length; ++r < i;)
                            if (Ic(e[r].geometry, n)) return !0;
                        return !1
                    }
                },
                Fc = {
                    Sphere: function() {
                        return !0
                    },
                    Point: function(t, n) {
                        return Yc(t.coordinates, n)
                    },
                    MultiPoint: function(t, n) {
                        for (var e = t.coordinates, r = -1, i = e.length; ++r < i;)
                            if (Yc(e[r], n)) return !0;
                        return !1
                    },
                    LineString: function(t, n) {
                        return Bc(t.coordinates, n)
                    },
                    MultiLineString: function(t, n) {
                        for (var e = t.coordinates, r = -1, i = e.length; ++r < i;)
                            if (Bc(e[r], n)) return !0;
                        return !1
                    },
                    Polygon: function(t, n) {
                        return Hc(t.coordinates, n)
                    },
                    MultiPolygon: function(t, n) {
                        for (var e = t.coordinates, r = -1, i = e.length; ++r < i;)
                            if (Hc(e[r], n)) return !0;
                        return !1
                    },
                    GeometryCollection: function(t, n) {
                        for (var e = t.geometries, r = -1, i = e.length; ++r < i;)
                            if (Ic(e[r], n)) return !0;
                        return !1
                    }
                };

            function Ic(t, n) {
                return !(!t || !Fc.hasOwnProperty(t.type)) && Fc[t.type](t, n)
            }

            function Yc(t, n) {
                return 0 === Uc(t, n)
            }

            function Bc(t, n) {
                var e = Uc(t[0], t[1]);
                return Uc(t[0], n) + Uc(n, t[1]) <= e + oo
            }

            function Hc(t, n) {
                return !!yc(t.map(Xc), Vc(n))
            }

            function Xc(t) {
                return (t = t.map(Vc)).pop(), t
            }

            function Vc(t) {
                return [t[0] * ho, t[1] * ho]
            }
            var $c = function(t, n) {
                return (t && jc.hasOwnProperty(t.type) ? jc[t.type] : Ic)(t, n)
            };

            function Wc(t, n, e) {
                var i = Object(r.s)(t, n - oo, e).concat(n);
                return function(t) {
                    return i.map((function(n) {
                        return [t, n]
                    }))
                }
            }

            function Zc(t, n, e) {
                var i = Object(r.s)(t, n - oo, e).concat(n);
                return function(t) {
                    return i.map((function(n) {
                        return [n, t]
                    }))
                }
            }

            function Gc() {
                var t, n, e, i, u, o, a, c, f, s, l, h, d = 10,
                    p = d,
                    v = 90,
                    y = 360,
                    _ = 2.5;

                function g() {
                    return {
                        type: "MultiLineString",
                        coordinates: m()
                    }
                }

                function m() {
                    return Object(r.s)(go(i / v) * v, e, v).map(l).concat(Object(r.s)(go(c / y) * y, a, y).map(h)).concat(Object(r.s)(go(n / d) * d, t, d).filter((function(t) {
                        return po(t % v) > oo
                    })).map(f)).concat(Object(r.s)(go(o / p) * p, u, p).filter((function(t) {
                        return po(t % y) > oo
                    })).map(s))
                }
                return g.lines = function() {
                    return m().map((function(t) {
                        return {
                            type: "LineString",
                            coordinates: t
                        }
                    }))
                }, g.outline = function() {
                    return {
                        type: "Polygon",
                        coordinates: [l(i).concat(h(a).slice(1), l(e).reverse().slice(1), h(c).reverse().slice(1))]
                    }
                }, g.extent = function(t) {
                    return arguments.length ? g.extentMajor(t).extentMinor(t) : g.extentMinor()
                }, g.extentMajor = function(t) {
                    return arguments.length ? (i = +t[0][0], e = +t[1][0], c = +t[0][1], a = +t[1][1], i > e && (t = i, i = e, e = t), c > a && (t = c, c = a, a = t), g.precision(_)) : [
                        [i, c],
                        [e, a]
                    ]
                }, g.extentMinor = function(e) {
                    return arguments.length ? (n = +e[0][0], t = +e[1][0], o = +e[0][1], u = +e[1][1], n > t && (e = n, n = t, t = e), o > u && (e = o, o = u, u = e), g.precision(_)) : [
                        [n, o],
                        [t, u]
                    ]
                }, g.step = function(t) {
                    return arguments.length ? g.stepMajor(t).stepMinor(t) : g.stepMinor()
                }, g.stepMajor = function(t) {
                    return arguments.length ? (v = +t[0], y = +t[1], g) : [v, y]
                }, g.stepMinor = function(t) {
                    return arguments.length ? (d = +t[0], p = +t[1], g) : [d, p]
                }, g.precision = function(r) {
                    return arguments.length ? (_ = +r, f = Wc(o, u, 90), s = Zc(n, t, _), l = Wc(c, a, 90), h = Zc(i, e, _), g) : _
                }, g.extentMajor([
                    [-180, -90 + oo],
                    [180, 90 - oo]
                ]).extentMinor([
                    [-180, -80 - oo],
                    [180, 80 + oo]
                ])
            }

            function Qc() {
                return Gc()()
            }
            var Jc, Kc, tf, nf, ef = function(t, n) {
                    var e = t[0] * ho,
                        r = t[1] * ho,
                        i = n[0] * ho,
                        u = n[1] * ho,
                        o = _o(r),
                        a = wo(r),
                        c = _o(u),
                        f = wo(u),
                        s = o * _o(e),
                        l = o * wo(e),
                        h = c * _o(i),
                        d = c * wo(i),
                        p = 2 * So(To(Eo(u - r) + o * c * Eo(i - e))),
                        v = wo(p),
                        y = p ? function(t) {
                            var n = wo(t *= p) / v,
                                e = wo(p - t) / v,
                                r = e * s + n * h,
                                i = e * l + n * d,
                                u = e * a + n * f;
                            return [yo(i, r) * lo, yo(u, To(r * r + i * i)) * lo]
                        } : function() {
                            return [e * lo, r * lo]
                        };
                    return y.distance = p, y
                },
                rf = function(t) {
                    return t
                },
                uf = eo(),
                of = eo(),
                af = {
                    point: Ao,
                    lineStart: Ao,
                    lineEnd: Ao,
                    polygonStart: function() {
                        af.lineStart = cf, af.lineEnd = lf
                    },
                    polygonEnd: function() {
                        af.lineStart = af.lineEnd = af.point = Ao, uf.add(po(of)), of.reset()
                    },
                    result: function() {
                        var t = uf / 2;
                        return uf.reset(), t
                    }
                };

            function cf() {
                af.point = ff
            }

            function ff(t, n) {
                af.point = sf, Jc = tf = t, Kc = nf = n
            }

            function sf(t, n) {
                of.add(nf * t - tf * n), tf = t, nf = n
            }

            function lf() {
                sf(Jc, Kc)
            }
            var hf, df, pf, vf, yf = af,
                _f = 1 / 0,
                gf = _f,
                mf = -_f,
                xf = mf,
                bf = {
                    point: function(t, n) {
                        t < _f && (_f = t), t > mf && (mf = t), n < gf && (gf = n), n > xf && (xf = n)
                    },
                    lineStart: Ao,
                    lineEnd: Ao,
                    polygonStart: Ao,
                    polygonEnd: Ao,
                    result: function() {
                        var t = [
                            [_f, gf],
                            [mf, xf]
                        ];
                        return mf = xf = -(gf = _f = 1 / 0), t
                    }
                },
                wf = 0,
                Mf = 0,
                Tf = 0,
                kf = 0,
                Nf = 0,
                Sf = 0,
                Ef = 0,
                Af = 0,
                Cf = 0,
                zf = {
                    point: Pf,
                    lineStart: Of,
                    lineEnd: qf,
                    polygonStart: function() {
                        zf.lineStart = Df, zf.lineEnd = Uf
                    },
                    polygonEnd: function() {
                        zf.point = Pf, zf.lineStart = Of, zf.lineEnd = qf
                    },
                    result: function() {
                        var t = Cf ? [Ef / Cf, Af / Cf] : Sf ? [kf / Sf, Nf / Sf] : Tf ? [wf / Tf, Mf / Tf] : [NaN, NaN];
                        return wf = Mf = Tf = kf = Nf = Sf = Ef = Af = Cf = 0, t
                    }
                };

            function Pf(t, n) {
                wf += t, Mf += n, ++Tf
            }

            function Of() {
                zf.point = Rf
            }

            function Rf(t, n) {
                zf.point = Lf, Pf(pf = t, vf = n)
            }

            function Lf(t, n) {
                var e = t - pf,
                    r = n - vf,
                    i = To(e * e + r * r);
                kf += i * (pf + t) / 2, Nf += i * (vf + n) / 2, Sf += i, Pf(pf = t, vf = n)
            }

            function qf() {
                zf.point = Pf
            }

            function Df() {
                zf.point = jf
            }

            function Uf() {
                Ff(hf, df)
            }

            function jf(t, n) {
                zf.point = Ff, Pf(hf = pf = t, df = vf = n)
            }

            function Ff(t, n) {
                var e = t - pf,
                    r = n - vf,
                    i = To(e * e + r * r);
                kf += i * (pf + t) / 2, Nf += i * (vf + n) / 2, Sf += i, Ef += (i = vf * t - pf * n) * (pf + t), Af += i * (vf + n), Cf += 3 * i, Pf(pf = t, vf = n)
            }
            var If = zf;

            function Yf(t) {
                this._context = t
            }
            Yf.prototype = {
                _radius: 4.5,
                pointRadius: function(t) {
                    return this._radius = t, this
                },
                polygonStart: function() {
                    this._line = 0
                },
                polygonEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._point = 0
                },
                lineEnd: function() {
                    0 === this._line && this._context.closePath(), this._point = NaN
                },
                point: function(t, n) {
                    switch (this._point) {
                        case 0:
                            this._context.moveTo(t, n), this._point = 1;
                            break;
                        case 1:
                            this._context.lineTo(t, n);
                            break;
                        default:
                            this._context.moveTo(t + this._radius, n), this._context.arc(t, n, this._radius, 0, so)
                    }
                },
                result: Ao
            };
            var Bf, Hf, Xf, Vf, $f, Wf = eo(),
                Zf = {
                    point: Ao,
                    lineStart: function() {
                        Zf.point = Gf
                    },
                    lineEnd: function() {
                        Bf && Qf(Hf, Xf), Zf.point = Ao
                    },
                    polygonStart: function() {
                        Bf = !0
                    },
                    polygonEnd: function() {
                        Bf = null
                    },
                    result: function() {
                        var t = +Wf;
                        return Wf.reset(), t
                    }
                };

            function Gf(t, n) {
                Zf.point = Qf, Hf = Vf = t, Xf = $f = n
            }

            function Qf(t, n) {
                Vf -= t, $f -= n, Wf.add(To(Vf * Vf + $f * $f)), Vf = t, $f = n
            }
            var Jf = Zf;

            function Kf() {
                this._string = []
            }

            function ts(t) {
                return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
            }
            Kf.prototype = {
                _radius: 4.5,
                _circle: ts(4.5),
                pointRadius: function(t) {
                    return (t = +t) !== this._radius && (this._radius = t, this._circle = null), this
                },
                polygonStart: function() {
                    this._line = 0
                },
                polygonEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._point = 0
                },
                lineEnd: function() {
                    0 === this._line && this._string.push("Z"), this._point = NaN
                },
                point: function(t, n) {
                    switch (this._point) {
                        case 0:
                            this._string.push("M", t, ",", n), this._point = 1;
                            break;
                        case 1:
                            this._string.push("L", t, ",", n);
                            break;
                        default:
                            null == this._circle && (this._circle = ts(this._radius)), this._string.push("M", t, ",", n, this._circle)
                    }
                },
                result: function() {
                    if (this._string.length) {
                        var t = this._string.join("");
                        return this._string = [], t
                    }
                    return null
                }
            };
            var ns = function(t, n) {
                    var e, r, i = 4.5;

                    function u(t) {
                        return t && ("function" == typeof i && r.pointRadius(+i.apply(this, arguments)), Fo(t, e(r))), r.result()
                    }
                    return u.area = function(t) {
                        return Fo(t, e(yf)), yf.result()
                    }, u.measure = function(t) {
                        return Fo(t, e(Jf)), Jf.result()
                    }, u.bounds = function(t) {
                        return Fo(t, e(bf)), bf.result()
                    }, u.centroid = function(t) {
                        return Fo(t, e(If)), If.result()
                    }, u.projection = function(n) {
                        return arguments.length ? (e = null == n ? (t = null, rf) : (t = n).stream, u) : t
                    }, u.context = function(t) {
                        return arguments.length ? (r = null == t ? (n = null, new Kf) : new Yf(n = t), "function" != typeof i && r.pointRadius(i), u) : n
                    }, u.pointRadius = function(t) {
                        return arguments.length ? (i = "function" == typeof t ? t : (r.pointRadius(+t), +t), u) : i
                    }, u.projection(t).context(n)
                },
                es = function(t) {
                    return {
                        stream: rs(t)
                    }
                };

            function rs(t) {
                return function(n) {
                    var e = new is;
                    for (var r in t) e[r] = t[r];
                    return e.stream = n, e
                }
            }

            function is() {}

            function us(t, n, e) {
                var r = t.clipExtent && t.clipExtent();
                return t.scale(150).translate([0, 0]), null != r && t.clipExtent(null), Fo(e, t.stream(bf)), n(bf.result()), null != r && t.clipExtent(r), t
            }

            function os(t, n, e) {
                return us(t, (function(e) {
                    var r = n[1][0] - n[0][0],
                        i = n[1][1] - n[0][1],
                        u = Math.min(r / (e[1][0] - e[0][0]), i / (e[1][1] - e[0][1])),
                        o = +n[0][0] + (r - u * (e[1][0] + e[0][0])) / 2,
                        a = +n[0][1] + (i - u * (e[1][1] + e[0][1])) / 2;
                    t.scale(150 * u).translate([o, a])
                }), e)
            }

            function as(t, n, e) {
                return os(t, [
                    [0, 0], n
                ], e)
            }

            function cs(t, n, e) {
                return us(t, (function(e) {
                    var r = +n,
                        i = r / (e[1][0] - e[0][0]),
                        u = (r - i * (e[1][0] + e[0][0])) / 2,
                        o = -i * e[0][1];
                    t.scale(150 * i).translate([u, o])
                }), e)
            }

            function fs(t, n, e) {
                return us(t, (function(e) {
                    var r = +n,
                        i = r / (e[1][1] - e[0][1]),
                        u = -i * e[0][0],
                        o = (r - i * (e[1][1] + e[0][1])) / 2;
                    t.scale(150 * i).translate([u, o])
                }), e)
            }
            is.prototype = {
                constructor: is,
                point: function(t, n) {
                    this.stream.point(t, n)
                },
                sphere: function() {
                    this.stream.sphere()
                },
                lineStart: function() {
                    this.stream.lineStart()
                },
                lineEnd: function() {
                    this.stream.lineEnd()
                },
                polygonStart: function() {
                    this.stream.polygonStart()
                },
                polygonEnd: function() {
                    this.stream.polygonEnd()
                }
            };
            var ss = 16,
                ls = _o(30 * ho),
                hs = function(t, n) {
                    return +n ? function(t, n) {
                        function e(r, i, u, o, a, c, f, s, l, h, d, p, v, y) {
                            var _ = f - r,
                                g = s - i,
                                m = _ * _ + g * g;
                            if (m > 4 * n && v--) {
                                var x = o + h,
                                    b = a + d,
                                    w = c + p,
                                    M = To(x * x + b * b + w * w),
                                    T = So(w /= M),
                                    k = po(po(w) - 1) < oo || po(u - l) < oo ? (u + l) / 2 : yo(b, x),
                                    N = t(k, T),
                                    S = N[0],
                                    E = N[1],
                                    A = S - r,
                                    C = E - i,
                                    z = g * A - _ * C;
                                (z * z / m > n || po((_ * A + g * C) / m - .5) > .3 || o * h + a * d + c * p < ls) && (e(r, i, u, o, a, c, S, E, k, x /= M, b /= M, w, v, y), y.point(S, E), e(S, E, k, x, b, w, f, s, l, h, d, p, v, y))
                            }
                        }
                        return function(n) {
                            var r, i, u, o, a, c, f, s, l, h, d, p, v = {
                                point: y,
                                lineStart: _,
                                lineEnd: m,
                                polygonStart: function() {
                                    n.polygonStart(), v.lineStart = x
                                },
                                polygonEnd: function() {
                                    n.polygonEnd(), v.lineStart = _
                                }
                            };

                            function y(e, r) {
                                e = t(e, r), n.point(e[0], e[1])
                            }

                            function _() {
                                s = NaN, v.point = g, n.lineStart()
                            }

                            function g(r, i) {
                                var u = Go([r, i]),
                                    o = t(r, i);
                                e(s, l, f, h, d, p, s = o[0], l = o[1], f = r, h = u[0], d = u[1], p = u[2], ss, n), n.point(s, l)
                            }

                            function m() {
                                v.point = y, n.lineEnd()
                            }

                            function x() {
                                _(), v.point = b, v.lineEnd = w
                            }

                            function b(t, n) {
                                g(r = t, n), i = s, u = l, o = h, a = d, c = p, v.point = g
                            }

                            function w() {
                                e(s, l, f, h, d, p, i, u, r, o, a, c, ss, n), v.lineEnd = m, m()
                            }
                            return v
                        }
                    }(t, n) : function(t) {
                        return rs({
                            point: function(n, e) {
                                n = t(n, e), this.stream.point(n[0], n[1])
                            }
                        })
                    }(t)
                },
                ds = rs({
                    point: function(t, n) {
                        this.stream.point(t * ho, n * ho)
                    }
                });

            function ps(t) {
                return vs((function() {
                    return t
                }))()
            }

            function vs(t) {
                var n, e, r, i, u, o, a, c, f, s, l = 150,
                    h = 480,
                    d = 250,
                    p = 0,
                    v = 0,
                    y = 0,
                    _ = 0,
                    g = 0,
                    m = null,
                    x = xc,
                    b = null,
                    w = rf,
                    M = .5,
                    T = hs(S, M);

                function k(t) {
                    return [(t = u(t[0] * ho, t[1] * ho))[0] * l + e, r - t[1] * l]
                }

                function N(t) {
                    return (t = u.invert((t[0] - e) / l, (r - t[1]) / l)) && [t[0] * lo, t[1] * lo]
                }

                function S(t, i) {
                    return [(t = n(t, i))[0] * l + e, r - t[1] * l]
                }

                function E() {
                    u = tc(i = ec(y, _, g), n);
                    var t = n(p, v);
                    return e = h - t[0] * l, r = d + t[1] * l, A()
                }

                function A() {
                    return f = s = null, k
                }
                return k.stream = function(t) {
                        return f && s === t ? f : f = ds(function(t) {
                            return rs({
                                point: function(n, e) {
                                    var r = t(n, e);
                                    return this.stream.point(r[0], r[1])
                                }
                            })
                        }(i)(x(T(w(s = t)))))
                    }, k.preclip = function(t) {
                        return arguments.length ? (x = t, m = void 0, A()) : x
                    }, k.postclip = function(t) {
                        return arguments.length ? (w = t, b = o = a = c = null, A()) : w
                    }, k.clipAngle = function(t) {
                        return arguments.length ? (x = +t ? bc(m = t * ho) : (m = null, xc), A()) : m * lo
                    }, k.clipExtent = function(t) {
                        return arguments.length ? (w = null == t ? (b = o = a = c = null, rf) : kc(b = +t[0][0], o = +t[0][1], a = +t[1][0], c = +t[1][1]), A()) : null == b ? null : [
                            [b, o],
                            [a, c]
                        ]
                    }, k.scale = function(t) {
                        return arguments.length ? (l = +t, E()) : l
                    }, k.translate = function(t) {
                        return arguments.length ? (h = +t[0], d = +t[1], E()) : [h, d]
                    }, k.center = function(t) {
                        return arguments.length ? (p = t[0] % 360 * ho, v = t[1] % 360 * ho, E()) : [p * lo, v * lo]
                    }, k.rotate = function(t) {
                        return arguments.length ? (y = t[0] % 360 * ho, _ = t[1] % 360 * ho, g = t.length > 2 ? t[2] % 360 * ho : 0, E()) : [y * lo, _ * lo, g * lo]
                    }, k.precision = function(t) {
                        return arguments.length ? (T = hs(S, M = t * t), A()) : To(M)
                    }, k.fitExtent = function(t, n) {
                        return os(k, t, n)
                    }, k.fitSize = function(t, n) {
                        return as(k, t, n)
                    }, k.fitWidth = function(t, n) {
                        return cs(k, t, n)
                    }, k.fitHeight = function(t, n) {
                        return fs(k, t, n)
                    },
                    function() {
                        return n = t.apply(this, arguments), k.invert = n.invert && N, E()
                    }
            }

            function ys(t) {
                var n = 0,
                    e = ao / 3,
                    r = vs(t),
                    i = r(n, e);
                return i.parallels = function(t) {
                    return arguments.length ? r(n = t[0] * ho, e = t[1] * ho) : [n * lo, e * lo]
                }, i
            }

            function _s(t, n) {
                var e = wo(t),
                    r = (e + wo(n)) / 2;
                if (po(r) < oo) return function(t) {
                    var n = _o(t);

                    function e(t, e) {
                        return [t * n, wo(e) / n]
                    }
                    return e.invert = function(t, e) {
                        return [t / n, So(e * n)]
                    }, e
                }(t);
                var i = 1 + e * (2 * r - e),
                    u = To(i) / r;

                function o(t, n) {
                    var e = To(i - 2 * r * wo(n)) / r;
                    return [e * wo(t *= r), u - e * _o(t)]
                }
                return o.invert = function(t, n) {
                    var e = u - n;
                    return [yo(t, po(e)) / r * Mo(e), So((i - (t * t + e * e) * r * r) / (2 * r))]
                }, o
            }
            var gs = function() {
                    return ys(_s).scale(155.424).center([0, 33.6442])
                },
                ms = function() {
                    return gs().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-.6, 38.7])
                },
                xs = function() {
                    var t, n, e, r, i, u, o = ms(),
                        a = gs().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
                        c = gs().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
                        f = {
                            point: function(t, n) {
                                u = [t, n]
                            }
                        };

                    function s(t) {
                        var n = t[0],
                            o = t[1];
                        return u = null, e.point(n, o), u || (r.point(n, o), u) || (i.point(n, o), u)
                    }

                    function l() {
                        return t = n = null, s
                    }
                    return s.invert = function(t) {
                        var n = o.scale(),
                            e = o.translate(),
                            r = (t[0] - e[0]) / n,
                            i = (t[1] - e[1]) / n;
                        return (i >= .12 && i < .234 && r >= -.425 && r < -.214 ? a : i >= .166 && i < .234 && r >= -.214 && r < -.115 ? c : o).invert(t)
                    }, s.stream = function(e) {
                        return t && n === e ? t : (r = [o.stream(n = e), a.stream(e), c.stream(e)], i = r.length, t = {
                            point: function(t, n) {
                                for (var e = -1; ++e < i;) r[e].point(t, n)
                            },
                            sphere: function() {
                                for (var t = -1; ++t < i;) r[t].sphere()
                            },
                            lineStart: function() {
                                for (var t = -1; ++t < i;) r[t].lineStart()
                            },
                            lineEnd: function() {
                                for (var t = -1; ++t < i;) r[t].lineEnd()
                            },
                            polygonStart: function() {
                                for (var t = -1; ++t < i;) r[t].polygonStart()
                            },
                            polygonEnd: function() {
                                for (var t = -1; ++t < i;) r[t].polygonEnd()
                            }
                        });
                        var r, i
                    }, s.precision = function(t) {
                        return arguments.length ? (o.precision(t), a.precision(t), c.precision(t), l()) : o.precision()
                    }, s.scale = function(t) {
                        return arguments.length ? (o.scale(t), a.scale(.35 * t), c.scale(t), s.translate(o.translate())) : o.scale()
                    }, s.translate = function(t) {
                        if (!arguments.length) return o.translate();
                        var n = o.scale(),
                            u = +t[0],
                            s = +t[1];
                        return e = o.translate(t).clipExtent([
                            [u - .455 * n, s - .238 * n],
                            [u + .455 * n, s + .238 * n]
                        ]).stream(f), r = a.translate([u - .307 * n, s + .201 * n]).clipExtent([
                            [u - .425 * n + oo, s + .12 * n + oo],
                            [u - .214 * n - oo, s + .234 * n - oo]
                        ]).stream(f), i = c.translate([u - .205 * n, s + .212 * n]).clipExtent([
                            [u - .214 * n + oo, s + .166 * n + oo],
                            [u - .115 * n - oo, s + .234 * n - oo]
                        ]).stream(f), l()
                    }, s.fitExtent = function(t, n) {
                        return os(s, t, n)
                    }, s.fitSize = function(t, n) {
                        return as(s, t, n)
                    }, s.fitWidth = function(t, n) {
                        return cs(s, t, n)
                    }, s.fitHeight = function(t, n) {
                        return fs(s, t, n)
                    }, s.scale(1070)
                };

            function bs(t) {
                return function(n, e) {
                    var r = _o(n),
                        i = _o(e),
                        u = t(r * i);
                    return [u * i * wo(n), u * wo(e)]
                }
            }

            function ws(t) {
                return function(n, e) {
                    var r = To(n * n + e * e),
                        i = t(r),
                        u = wo(i),
                        o = _o(i);
                    return [yo(n * u, r * o), So(r && e * u / r)]
                }
            }
            var Ms = bs((function(t) {
                return To(2 / (1 + t))
            }));
            Ms.invert = ws((function(t) {
                return 2 * So(t / 2)
            }));
            var Ts = function() {
                    return ps(Ms).scale(124.75).clipAngle(179.999)
                },
                ks = bs((function(t) {
                    return (t = No(t)) && t / wo(t)
                }));
            ks.invert = ws((function(t) {
                return t
            }));
            var Ns = function() {
                return ps(ks).scale(79.4188).clipAngle(179.999)
            };

            function Ss(t, n) {
                return [t, xo(ko((co + n) / 2))]
            }
            Ss.invert = function(t, n) {
                return [t, 2 * vo(mo(n)) - co]
            };
            var Es = function() {
                return As(Ss).scale(961 / so)
            };

            function As(t) {
                var n, e, r, i = ps(t),
                    u = i.center,
                    o = i.scale,
                    a = i.translate,
                    c = i.clipExtent,
                    f = null;

                function s() {
                    var u = ao * o(),
                        a = i(oc(i.rotate()).invert([0, 0]));
                    return c(null == f ? [
                        [a[0] - u, a[1] - u],
                        [a[0] + u, a[1] + u]
                    ] : t === Ss ? [
                        [Math.max(a[0] - u, f), n],
                        [Math.min(a[0] + u, e), r]
                    ] : [
                        [f, Math.max(a[1] - u, n)],
                        [e, Math.min(a[1] + u, r)]
                    ])
                }
                return i.scale = function(t) {
                    return arguments.length ? (o(t), s()) : o()
                }, i.translate = function(t) {
                    return arguments.length ? (a(t), s()) : a()
                }, i.center = function(t) {
                    return arguments.length ? (u(t), s()) : u()
                }, i.clipExtent = function(t) {
                    return arguments.length ? (null == t ? f = n = e = r = null : (f = +t[0][0], n = +t[0][1], e = +t[1][0], r = +t[1][1]), s()) : null == f ? null : [
                        [f, n],
                        [e, r]
                    ]
                }, s()
            }

            function Cs(t) {
                return ko((co + t) / 2)
            }

            function zs(t, n) {
                var e = _o(t),
                    r = t === n ? wo(t) : xo(e / _o(n)) / xo(Cs(n) / Cs(t)),
                    i = e * bo(Cs(t), r) / r;
                if (!r) return Ss;

                function u(t, n) {
                    i > 0 ? n < -co + oo && (n = -co + oo) : n > co - oo && (n = co - oo);
                    var e = i / bo(Cs(n), r);
                    return [e * wo(r * t), i - e * _o(r * t)]
                }
                return u.invert = function(t, n) {
                    var e = i - n,
                        u = Mo(r) * To(t * t + e * e);
                    return [yo(t, po(e)) / r * Mo(e), 2 * vo(bo(i / u, 1 / r)) - co]
                }, u
            }
            var Ps = function() {
                return ys(zs).scale(109.5).parallels([30, 30])
            };

            function Os(t, n) {
                return [t, n]
            }
            Os.invert = Os;
            var Rs = function() {
                return ps(Os).scale(152.63)
            };

            function Ls(t, n) {
                var e = _o(t),
                    r = t === n ? wo(t) : (e - _o(n)) / (n - t),
                    i = e / r + t;
                if (po(r) < oo) return Os;

                function u(t, n) {
                    var e = i - n,
                        u = r * t;
                    return [e * wo(u), i - e * _o(u)]
                }
                return u.invert = function(t, n) {
                    var e = i - n;
                    return [yo(t, po(e)) / r * Mo(e), i - Mo(r) * To(t * t + e * e)]
                }, u
            }
            var qs = function() {
                return ys(Ls).scale(131.154).center([0, 13.9389])
            };

            function Ds(t, n) {
                var e = _o(n),
                    r = _o(t) * e;
                return [e * wo(t) / r, wo(n) / r]
            }
            Ds.invert = ws(vo);
            var Us = function() {
                return ps(Ds).scale(144.049).clipAngle(60)
            };

            function js(t, n, e, r) {
                return 1 === t && 1 === n && 0 === e && 0 === r ? rf : rs({
                    point: function(i, u) {
                        this.stream.point(i * t + e, u * n + r)
                    }
                })
            }
            var Fs = function() {
                var t, n, e, r, i, u, o = 1,
                    a = 0,
                    c = 0,
                    f = 1,
                    s = 1,
                    l = rf,
                    h = null,
                    d = rf;

                function p() {
                    return r = i = null, u
                }
                return u = {
                    stream: function(t) {
                        return r && i === t ? r : r = l(d(i = t))
                    },
                    postclip: function(r) {
                        return arguments.length ? (d = r, h = t = n = e = null, p()) : d
                    },
                    clipExtent: function(r) {
                        return arguments.length ? (d = null == r ? (h = t = n = e = null, rf) : kc(h = +r[0][0], t = +r[0][1], n = +r[1][0], e = +r[1][1]), p()) : null == h ? null : [
                            [h, t],
                            [n, e]
                        ]
                    },
                    scale: function(t) {
                        return arguments.length ? (l = js((o = +t) * f, o * s, a, c), p()) : o
                    },
                    translate: function(t) {
                        return arguments.length ? (l = js(o * f, o * s, a = +t[0], c = +t[1]), p()) : [a, c]
                    },
                    reflectX: function(t) {
                        return arguments.length ? (l = js(o * (f = t ? -1 : 1), o * s, a, c), p()) : f < 0
                    },
                    reflectY: function(t) {
                        return arguments.length ? (l = js(o * f, o * (s = t ? -1 : 1), a, c), p()) : s < 0
                    },
                    fitExtent: function(t, n) {
                        return os(u, t, n)
                    },
                    fitSize: function(t, n) {
                        return as(u, t, n)
                    },
                    fitWidth: function(t, n) {
                        return cs(u, t, n)
                    },
                    fitHeight: function(t, n) {
                        return fs(u, t, n)
                    }
                }
            };

            function Is(t, n) {
                var e = n * n,
                    r = e * e;
                return [t * (.8707 - .131979 * e + r * (r * (.003971 * e - .001529 * r) - .013791)), n * (1.007226 + e * (.015085 + r * (.028874 * e - .044475 - .005916 * r)))]
            }
            Is.invert = function(t, n) {
                var e, r = n,
                    i = 25;
                do {
                    var u = r * r,
                        o = u * u;
                    r -= e = (r * (1.007226 + u * (.015085 + o * (.028874 * u - .044475 - .005916 * o))) - n) / (1.007226 + u * (.045255 + o * (.259866 * u - .311325 - .005916 * 11 * o)))
                } while (po(e) > oo && --i > 0);
                return [t / (.8707 + (u = r * r) * (u * (u * u * u * (.003971 - .001529 * u) - .013791) - .131979)), r]
            };
            var Ys = function() {
                return ps(Is).scale(175.295)
            };

            function Bs(t, n) {
                return [_o(n) * wo(t), wo(n)]
            }
            Bs.invert = ws(So);
            var Hs = function() {
                return ps(Bs).scale(249.5).clipAngle(90 + oo)
            };

            function Xs(t, n) {
                var e = _o(n),
                    r = 1 + _o(t) * e;
                return [e * wo(t) / r, wo(n) / r]
            }
            Xs.invert = ws((function(t) {
                return 2 * vo(t)
            }));
            var Vs = function() {
                return ps(Xs).scale(250).clipAngle(142)
            };

            function $s(t, n) {
                return [xo(ko((co + n) / 2)), -t]
            }
            $s.invert = function(t, n) {
                return [-n, 2 * vo(mo(t)) - co]
            };
            var Ws = function() {
                var t = As($s),
                    n = t.center,
                    e = t.rotate;
                return t.center = function(t) {
                    return arguments.length ? n([-t[1], t[0]]) : [(t = n())[1], -t[0]]
                }, t.rotate = function(t) {
                    return arguments.length ? e([t[0], t[1], t.length > 2 ? t[2] + 90 : 90]) : [(t = e())[0], t[1], t[2] - 90]
                }, e([0, 0, 90]).scale(159.155)
            };

            function Zs(t, n) {
                return t.parent === n.parent ? 1 : 2
            }

            function Gs(t, n) {
                return t + n.x
            }

            function Qs(t, n) {
                return Math.max(t, n.y)
            }
            var Js = function() {
                var t = Zs,
                    n = 1,
                    e = 1,
                    r = !1;

                function i(i) {
                    var u, o = 0;
                    i.eachAfter((function(n) {
                        var e = n.children;
                        e ? (n.x = function(t) {
                            return t.reduce(Gs, 0) / t.length
                        }(e), n.y = function(t) {
                            return 1 + t.reduce(Qs, 0)
                        }(e)) : (n.x = u ? o += t(n, u) : 0, n.y = 0, u = n)
                    }));
                    var a = function(t) {
                            for (var n; n = t.children;) t = n[0];
                            return t
                        }(i),
                        c = function(t) {
                            for (var n; n = t.children;) t = n[n.length - 1];
                            return t
                        }(i),
                        f = a.x - t(a, c) / 2,
                        s = c.x + t(c, a) / 2;
                    return i.eachAfter(r ? function(t) {
                        t.x = (t.x - i.x) * n, t.y = (i.y - t.y) * e
                    } : function(t) {
                        t.x = (t.x - f) / (s - f) * n, t.y = (1 - (i.y ? t.y / i.y : 1)) * e
                    })
                }
                return i.separation = function(n) {
                    return arguments.length ? (t = n, i) : t
                }, i.size = function(t) {
                    return arguments.length ? (r = !1, n = +t[0], e = +t[1], i) : r ? null : [n, e]
                }, i.nodeSize = function(t) {
                    return arguments.length ? (r = !0, n = +t[0], e = +t[1], i) : r ? [n, e] : null
                }, i
            };

            function Ks(t) {
                var n = 0,
                    e = t.children,
                    r = e && e.length;
                if (r)
                    for (; --r >= 0;) n += e[r].value;
                else n = 1;
                t.value = n
            }

            function tl(t, n) {
                var e, r, i, u, o, a = new il(t),
                    c = +t.value && (a.value = t.value),
                    f = [a];
                for (null == n && (n = nl); e = f.pop();)
                    if (c && (e.value = +e.data.value), (i = n(e.data)) && (o = i.length))
                        for (e.children = new Array(o), u = o - 1; u >= 0; --u) f.push(r = e.children[u] = new il(i[u])), r.parent = e, r.depth = e.depth + 1;
                return a.eachBefore(rl)
            }

            function nl(t) {
                return t.children
            }

            function el(t) {
                t.data = t.data.data
            }

            function rl(t) {
                var n = 0;
                do {
                    t.height = n
                } while ((t = t.parent) && t.height < ++n)
            }

            function il(t) {
                this.data = t, this.depth = this.height = 0, this.parent = null
            }
            il.prototype = tl.prototype = {
                constructor: il,
                count: function() {
                    return this.eachAfter(Ks)
                },
                each: function(t) {
                    var n, e, r, i, u = this,
                        o = [u];
                    do {
                        for (n = o.reverse(), o = []; u = n.pop();)
                            if (t(u), e = u.children)
                                for (r = 0, i = e.length; r < i; ++r) o.push(e[r])
                    } while (o.length);
                    return this
                },
                eachAfter: function(t) {
                    for (var n, e, r, i = this, u = [i], o = []; i = u.pop();)
                        if (o.push(i), n = i.children)
                            for (e = 0, r = n.length; e < r; ++e) u.push(n[e]);
                    for (; i = o.pop();) t(i);
                    return this
                },
                eachBefore: function(t) {
                    for (var n, e, r = this, i = [r]; r = i.pop();)
                        if (t(r), n = r.children)
                            for (e = n.length - 1; e >= 0; --e) i.push(n[e]);
                    return this
                },
                sum: function(t) {
                    return this.eachAfter((function(n) {
                        for (var e = +t(n.data) || 0, r = n.children, i = r && r.length; --i >= 0;) e += r[i].value;
                        n.value = e
                    }))
                },
                sort: function(t) {
                    return this.eachBefore((function(n) {
                        n.children && n.children.sort(t)
                    }))
                },
                path: function(t) {
                    for (var n = this, e = function(t, n) {
                            if (t === n) return t;
                            var e = t.ancestors(),
                                r = n.ancestors(),
                                i = null;
                            for (t = e.pop(), n = r.pop(); t === n;) i = t, t = e.pop(), n = r.pop();
                            return i
                        }(n, t), r = [n]; n !== e;) n = n.parent, r.push(n);
                    for (var i = r.length; t !== e;) r.splice(i, 0, t), t = t.parent;
                    return r
                },
                ancestors: function() {
                    for (var t = this, n = [t]; t = t.parent;) n.push(t);
                    return n
                },
                descendants: function() {
                    var t = [];
                    return this.each((function(n) {
                        t.push(n)
                    })), t
                },
                leaves: function() {
                    var t = [];
                    return this.eachBefore((function(n) {
                        n.children || t.push(n)
                    })), t
                },
                links: function() {
                    var t = this,
                        n = [];
                    return t.each((function(e) {
                        e !== t && n.push({
                            source: e.parent,
                            target: e
                        })
                    })), n
                },
                copy: function() {
                    return tl(this).eachBefore(el)
                }
            };
            var ul = Array.prototype.slice,
                ol = function(t) {
                    for (var n, e, r = 0, i = (t = function(t) {
                            for (var n, e, r = t.length; r;) e = Math.random() * r-- | 0, n = t[r], t[r] = t[e], t[e] = n;
                            return t
                        }(ul.call(t))).length, u = []; r < i;) n = t[r], e && fl(e, n) ? ++r : (e = ll(u = al(u, n)), r = 0);
                    return e
                };

            function al(t, n) {
                var e, r;
                if (sl(n, t)) return [n];
                for (e = 0; e < t.length; ++e)
                    if (cl(n, t[e]) && sl(hl(t[e], n), t)) return [t[e], n];
                for (e = 0; e < t.length - 1; ++e)
                    for (r = e + 1; r < t.length; ++r)
                        if (cl(hl(t[e], t[r]), n) && cl(hl(t[e], n), t[r]) && cl(hl(t[r], n), t[e]) && sl(dl(t[e], t[r], n), t)) return [t[e], t[r], n];
                throw new Error
            }

            function cl(t, n) {
                var e = t.r - n.r,
                    r = n.x - t.x,
                    i = n.y - t.y;
                return e < 0 || e * e < r * r + i * i
            }

            function fl(t, n) {
                var e = t.r - n.r + 1e-6,
                    r = n.x - t.x,
                    i = n.y - t.y;
                return e > 0 && e * e > r * r + i * i
            }

            function sl(t, n) {
                for (var e = 0; e < n.length; ++e)
                    if (!fl(t, n[e])) return !1;
                return !0
            }

            function ll(t) {
                switch (t.length) {
                    case 1:
                        return {
                            x: (n = t[0]).x, y: n.y, r: n.r
                        };
                    case 2:
                        return hl(t[0], t[1]);
                    case 3:
                        return dl(t[0], t[1], t[2])
                }
                var n
            }

            function hl(t, n) {
                var e = t.x,
                    r = t.y,
                    i = t.r,
                    u = n.x,
                    o = n.y,
                    a = n.r,
                    c = u - e,
                    f = o - r,
                    s = a - i,
                    l = Math.sqrt(c * c + f * f);
                return {
                    x: (e + u + c / l * s) / 2,
                    y: (r + o + f / l * s) / 2,
                    r: (l + i + a) / 2
                }
            }

            function dl(t, n, e) {
                var r = t.x,
                    i = t.y,
                    u = t.r,
                    o = n.x,
                    a = n.y,
                    c = n.r,
                    f = e.x,
                    s = e.y,
                    l = e.r,
                    h = r - o,
                    d = r - f,
                    p = i - a,
                    v = i - s,
                    y = c - u,
                    _ = l - u,
                    g = r * r + i * i - u * u,
                    m = g - o * o - a * a + c * c,
                    x = g - f * f - s * s + l * l,
                    b = d * p - h * v,
                    w = (p * x - v * m) / (2 * b) - r,
                    M = (v * y - p * _) / b,
                    T = (d * m - h * x) / (2 * b) - i,
                    k = (h * _ - d * y) / b,
                    N = M * M + k * k - 1,
                    S = 2 * (u + w * M + T * k),
                    E = w * w + T * T - u * u,
                    A = -(N ? (S + Math.sqrt(S * S - 4 * N * E)) / (2 * N) : E / S);
                return {
                    x: r + w + M * A,
                    y: i + T + k * A,
                    r: A
                }
            }

            function pl(t, n, e) {
                var r = t.x,
                    i = t.y,
                    u = n.r + e.r,
                    o = t.r + e.r,
                    a = n.x - r,
                    c = n.y - i,
                    f = a * a + c * c;
                if (f) {
                    var s = .5 + ((o *= o) - (u *= u)) / (2 * f),
                        l = Math.sqrt(Math.max(0, 2 * u * (o + f) - (o -= f) * o - u * u)) / (2 * f);
                    e.x = r + s * a + l * c, e.y = i + s * c - l * a
                } else e.x = r + o, e.y = i
            }

            function vl(t, n) {
                var e = n.x - t.x,
                    r = n.y - t.y,
                    i = t.r + n.r;
                return i * i - 1e-6 > e * e + r * r
            }

            function yl(t) {
                var n = t._,
                    e = t.next._,
                    r = n.r + e.r,
                    i = (n.x * e.r + e.x * n.r) / r,
                    u = (n.y * e.r + e.y * n.r) / r;
                return i * i + u * u
            }

            function _l(t) {
                this._ = t, this.next = null, this.previous = null
            }

            function gl(t) {
                if (!(i = t.length)) return 0;
                var n, e, r, i, u, o, a, c, f, s, l;
                if ((n = t[0]).x = 0, n.y = 0, !(i > 1)) return n.r;
                if (e = t[1], n.x = -e.r, e.x = n.r, e.y = 0, !(i > 2)) return n.r + e.r;
                pl(e, n, r = t[2]), n = new _l(n), e = new _l(e), r = new _l(r), n.next = r.previous = e, e.next = n.previous = r, r.next = e.previous = n;
                t: for (a = 3; a < i; ++a) {
                    pl(n._, e._, r = t[a]), r = new _l(r), c = e.next, f = n.previous, s = e._.r, l = n._.r;
                    do {
                        if (s <= l) {
                            if (vl(c._, r._)) {
                                e = c, n.next = e, e.previous = n, --a;
                                continue t
                            }
                            s += c._.r, c = c.next
                        } else {
                            if (vl(f._, r._)) {
                                (n = f).next = e, e.previous = n, --a;
                                continue t
                            }
                            l += f._.r, f = f.previous
                        }
                    } while (c !== f.next);
                    for (r.previous = n, r.next = e, n.next = e.previous = e = r, u = yl(n);
                        (r = r.next) !== e;)(o = yl(r)) < u && (n = r, u = o);
                    e = n.next
                }
                for (n = [e._], r = e;
                    (r = r.next) !== e;) n.push(r._);
                for (r = ol(n), a = 0; a < i; ++a)(n = t[a]).x -= r.x, n.y -= r.y;
                return r.r
            }
            var ml = function(t) {
                return gl(t), t
            };

            function xl(t) {
                if ("function" != typeof t) throw new Error;
                return t
            }

            function bl() {
                return 0
            }
            var wl = function(t) {
                return function() {
                    return t
                }
            };

            function Ml(t) {
                return Math.sqrt(t.value)
            }
            var Tl = function() {
                var t = null,
                    n = 1,
                    e = 1,
                    r = bl;

                function i(i) {
                    return i.x = n / 2, i.y = e / 2, t ? i.eachBefore(kl(t)).eachAfter(Nl(r, .5)).eachBefore(Sl(1)) : i.eachBefore(kl(Ml)).eachAfter(Nl(bl, 1)).eachAfter(Nl(r, i.r / Math.min(n, e))).eachBefore(Sl(Math.min(n, e) / (2 * i.r))), i
                }
                return i.radius = function(n) {
                    return arguments.length ? (t = null == (e = n) ? null : xl(e), i) : t;
                    var e
                }, i.size = function(t) {
                    return arguments.length ? (n = +t[0], e = +t[1], i) : [n, e]
                }, i.padding = function(t) {
                    return arguments.length ? (r = "function" == typeof t ? t : wl(+t), i) : r
                }, i
            };

            function kl(t) {
                return function(n) {
                    n.children || (n.r = Math.max(0, +t(n) || 0))
                }
            }

            function Nl(t, n) {
                return function(e) {
                    if (r = e.children) {
                        var r, i, u, o = r.length,
                            a = t(e) * n || 0;
                        if (a)
                            for (i = 0; i < o; ++i) r[i].r += a;
                        if (u = gl(r), a)
                            for (i = 0; i < o; ++i) r[i].r -= a;
                        e.r = u + a
                    }
                }
            }

            function Sl(t) {
                return function(n) {
                    var e = n.parent;
                    n.r *= t, e && (n.x = e.x + t * n.x, n.y = e.y + t * n.y)
                }
            }
            var El = function(t) {
                    t.x0 = Math.round(t.x0), t.y0 = Math.round(t.y0), t.x1 = Math.round(t.x1), t.y1 = Math.round(t.y1)
                },
                Al = function(t, n, e, r, i) {
                    for (var u, o = t.children, a = -1, c = o.length, f = t.value && (r - n) / t.value; ++a < c;)(u = o[a]).y0 = e, u.y1 = i, u.x0 = n, u.x1 = n += u.value * f
                },
                Cl = function() {
                    var t = 1,
                        n = 1,
                        e = 0,
                        r = !1;

                    function i(i) {
                        var u = i.height + 1;
                        return i.x0 = i.y0 = e, i.x1 = t, i.y1 = n / u, i.eachBefore(function(t, n) {
                            return function(r) {
                                r.children && Al(r, r.x0, t * (r.depth + 1) / n, r.x1, t * (r.depth + 2) / n);
                                var i = r.x0,
                                    u = r.y0,
                                    o = r.x1 - e,
                                    a = r.y1 - e;
                                o < i && (i = o = (i + o) / 2), a < u && (u = a = (u + a) / 2), r.x0 = i, r.y0 = u, r.x1 = o, r.y1 = a
                            }
                        }(n, u)), r && i.eachBefore(El), i
                    }
                    return i.round = function(t) {
                        return arguments.length ? (r = !!t, i) : r
                    }, i.size = function(e) {
                        return arguments.length ? (t = +e[0], n = +e[1], i) : [t, n]
                    }, i.padding = function(t) {
                        return arguments.length ? (e = +t, i) : e
                    }, i
                },
                zl = "$",
                Pl = {
                    depth: -1
                },
                Ol = {};

            function Rl(t) {
                return t.id
            }

            function Ll(t) {
                return t.parentId
            }
            var ql = function() {
                var t = Rl,
                    n = Ll;

                function e(e) {
                    var r, i, u, o, a, c, f, s = e.length,
                        l = new Array(s),
                        h = {};
                    for (i = 0; i < s; ++i) r = e[i], a = l[i] = new il(r), null != (c = t(r, i, e)) && (c += "") && (h[f = zl + (a.id = c)] = f in h ? Ol : a);
                    for (i = 0; i < s; ++i)
                        if (a = l[i], null != (c = n(e[i], i, e)) && (c += "")) {
                            if (!(o = h[zl + c])) throw new Error("missing: " + c);
                            if (o === Ol) throw new Error("ambiguous: " + c);
                            o.children ? o.children.push(a) : o.children = [a], a.parent = o
                        } else {
                            if (u) throw new Error("multiple roots");
                            u = a
                        } if (!u) throw new Error("no root");
                    if (u.parent = Pl, u.eachBefore((function(t) {
                            t.depth = t.parent.depth + 1, --s
                        })).eachBefore(rl), u.parent = null, s > 0) throw new Error("cycle");
                    return u
                }
                return e.id = function(n) {
                    return arguments.length ? (t = xl(n), e) : t
                }, e.parentId = function(t) {
                    return arguments.length ? (n = xl(t), e) : n
                }, e
            };

            function Dl(t, n) {
                return t.parent === n.parent ? 1 : 2
            }

            function Ul(t) {
                var n = t.children;
                return n ? n[0] : t.t
            }

            function jl(t) {
                var n = t.children;
                return n ? n[n.length - 1] : t.t
            }

            function Fl(t, n, e) {
                var r = e / (n.i - t.i);
                n.c -= r, n.s += e, t.c += r, n.z += e, n.m += e
            }

            function Il(t, n, e) {
                return t.a.parent === n.parent ? t.a : e
            }

            function Yl(t, n) {
                this._ = t, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = n
            }
            Yl.prototype = Object.create(il.prototype);
            var Bl = function() {
                    var t = Dl,
                        n = 1,
                        e = 1,
                        r = null;

                    function i(i) {
                        var c = function(t) {
                            for (var n, e, r, i, u, o = new Yl(t, 0), a = [o]; n = a.pop();)
                                if (r = n._.children)
                                    for (n.children = new Array(u = r.length), i = u - 1; i >= 0; --i) a.push(e = n.children[i] = new Yl(r[i], i)), e.parent = n;
                            return (o.parent = new Yl(null, 0)).children = [o], o
                        }(i);
                        if (c.eachAfter(u), c.parent.m = -c.z, c.eachBefore(o), r) i.eachBefore(a);
                        else {
                            var f = i,
                                s = i,
                                l = i;
                            i.eachBefore((function(t) {
                                t.x < f.x && (f = t), t.x > s.x && (s = t), t.depth > l.depth && (l = t)
                            }));
                            var h = f === s ? 1 : t(f, s) / 2,
                                d = h - f.x,
                                p = n / (s.x + h + d),
                                v = e / (l.depth || 1);
                            i.eachBefore((function(t) {
                                t.x = (t.x + d) * p, t.y = t.depth * v
                            }))
                        }
                        return i
                    }

                    function u(n) {
                        var e = n.children,
                            r = n.parent.children,
                            i = n.i ? r[n.i - 1] : null;
                        if (e) {
                            ! function(t) {
                                for (var n, e = 0, r = 0, i = t.children, u = i.length; --u >= 0;)(n = i[u]).z += e, n.m += e, e += n.s + (r += n.c)
                            }(n);
                            var u = (e[0].z + e[e.length - 1].z) / 2;
                            i ? (n.z = i.z + t(n._, i._), n.m = n.z - u) : n.z = u
                        } else i && (n.z = i.z + t(n._, i._));
                        n.parent.A = function(n, e, r) {
                            if (e) {
                                for (var i, u = n, o = n, a = e, c = u.parent.children[0], f = u.m, s = o.m, l = a.m, h = c.m; a = jl(a), u = Ul(u), a && u;) c = Ul(c), (o = jl(o)).a = n, (i = a.z + l - u.z - f + t(a._, u._)) > 0 && (Fl(Il(a, n, r), n, i), f += i, s += i), l += a.m, f += u.m, h += c.m, s += o.m;
                                a && !jl(o) && (o.t = a, o.m += l - s), u && !Ul(c) && (c.t = u, c.m += f - h, r = n)
                            }
                            return r
                        }(n, i, n.parent.A || r[0])
                    }

                    function o(t) {
                        t._.x = t.z + t.parent.m, t.m += t.parent.m
                    }

                    function a(t) {
                        t.x *= n, t.y = t.depth * e
                    }
                    return i.separation = function(n) {
                        return arguments.length ? (t = n, i) : t
                    }, i.size = function(t) {
                        return arguments.length ? (r = !1, n = +t[0], e = +t[1], i) : r ? null : [n, e]
                    }, i.nodeSize = function(t) {
                        return arguments.length ? (r = !0, n = +t[0], e = +t[1], i) : r ? [n, e] : null
                    }, i
                },
                Hl = function(t, n, e, r, i) {
                    for (var u, o = t.children, a = -1, c = o.length, f = t.value && (i - e) / t.value; ++a < c;)(u = o[a]).x0 = n, u.x1 = r, u.y0 = e, u.y1 = e += u.value * f
                },
                Xl = (1 + Math.sqrt(5)) / 2;

            function Vl(t, n, e, r, i, u) {
                for (var o, a, c, f, s, l, h, d, p, v, y, _ = [], g = n.children, m = 0, x = 0, b = g.length, w = n.value; m < b;) {
                    c = i - e, f = u - r;
                    do {
                        s = g[x++].value
                    } while (!s && x < b);
                    for (l = h = s, y = s * s * (v = Math.max(f / c, c / f) / (w * t)), p = Math.max(h / y, y / l); x < b; ++x) {
                        if (s += a = g[x].value, a < l && (l = a), a > h && (h = a), y = s * s * v, (d = Math.max(h / y, y / l)) > p) {
                            s -= a;
                            break
                        }
                        p = d
                    }
                    _.push(o = {
                        value: s,
                        dice: c < f,
                        children: g.slice(m, x)
                    }), o.dice ? Al(o, e, r, i, w ? r += f * s / w : u) : Hl(o, e, r, w ? e += c * s / w : i, u), w -= s, m = x
                }
                return _
            }
            var $l = function t(n) {
                    function e(t, e, r, i, u) {
                        Vl(n, t, e, r, i, u)
                    }
                    return e.ratio = function(n) {
                        return t((n = +n) > 1 ? n : 1)
                    }, e
                }(Xl),
                Wl = function() {
                    var t = $l,
                        n = !1,
                        e = 1,
                        r = 1,
                        i = [0],
                        u = bl,
                        o = bl,
                        a = bl,
                        c = bl,
                        f = bl;

                    function s(t) {
                        return t.x0 = t.y0 = 0, t.x1 = e, t.y1 = r, t.eachBefore(l), i = [0], n && t.eachBefore(El), t
                    }

                    function l(n) {
                        var e = i[n.depth],
                            r = n.x0 + e,
                            s = n.y0 + e,
                            l = n.x1 - e,
                            h = n.y1 - e;
                        l < r && (r = l = (r + l) / 2), h < s && (s = h = (s + h) / 2), n.x0 = r, n.y0 = s, n.x1 = l, n.y1 = h, n.children && (e = i[n.depth + 1] = u(n) / 2, r += f(n) - e, s += o(n) - e, (l -= a(n) - e) < r && (r = l = (r + l) / 2), (h -= c(n) - e) < s && (s = h = (s + h) / 2), t(n, r, s, l, h))
                    }
                    return s.round = function(t) {
                        return arguments.length ? (n = !!t, s) : n
                    }, s.size = function(t) {
                        return arguments.length ? (e = +t[0], r = +t[1], s) : [e, r]
                    }, s.tile = function(n) {
                        return arguments.length ? (t = xl(n), s) : t
                    }, s.padding = function(t) {
                        return arguments.length ? s.paddingInner(t).paddingOuter(t) : s.paddingInner()
                    }, s.paddingInner = function(t) {
                        return arguments.length ? (u = "function" == typeof t ? t : wl(+t), s) : u
                    }, s.paddingOuter = function(t) {
                        return arguments.length ? s.paddingTop(t).paddingRight(t).paddingBottom(t).paddingLeft(t) : s.paddingTop()
                    }, s.paddingTop = function(t) {
                        return arguments.length ? (o = "function" == typeof t ? t : wl(+t), s) : o
                    }, s.paddingRight = function(t) {
                        return arguments.length ? (a = "function" == typeof t ? t : wl(+t), s) : a
                    }, s.paddingBottom = function(t) {
                        return arguments.length ? (c = "function" == typeof t ? t : wl(+t), s) : c
                    }, s.paddingLeft = function(t) {
                        return arguments.length ? (f = "function" == typeof t ? t : wl(+t), s) : f
                    }, s
                },
                Zl = function(t, n, e, r, i) {
                    var u, o, a = t.children,
                        c = a.length,
                        f = new Array(c + 1);
                    for (f[0] = o = u = 0; u < c; ++u) f[u + 1] = o += a[u].value;
                    ! function t(n, e, r, i, u, o, c) {
                        if (n >= e - 1) {
                            var s = a[n];
                            return s.x0 = i, s.y0 = u, s.x1 = o, void(s.y1 = c)
                        }
                        for (var l = f[n], h = r / 2 + l, d = n + 1, p = e - 1; d < p;) {
                            var v = d + p >>> 1;
                            f[v] < h ? d = v + 1 : p = v
                        }
                        h - f[d - 1] < f[d] - h && n + 1 < d && --d;
                        var y = f[d] - l,
                            _ = r - y;
                        if (o - i > c - u) {
                            var g = (i * _ + o * y) / r;
                            t(n, d, y, i, u, g, c), t(d, e, _, g, u, o, c)
                        } else {
                            var m = (u * _ + c * y) / r;
                            t(n, d, y, i, u, o, m), t(d, e, _, i, m, o, c)
                        }
                    }(0, c, t.value, n, e, r, i)
                },
                Gl = function(t, n, e, r, i) {
                    (1 & t.depth ? Hl : Al)(t, n, e, r, i)
                },
                Ql = function t(n) {
                    function e(t, e, r, i, u) {
                        if ((o = t._squarify) && o.ratio === n)
                            for (var o, a, c, f, s, l = -1, h = o.length, d = t.value; ++l < h;) {
                                for (c = (a = o[l]).children, f = a.value = 0, s = c.length; f < s; ++f) a.value += c[f].value;
                                a.dice ? Al(a, e, r, i, r += (u - r) * a.value / d) : Hl(a, e, r, e += (i - e) * a.value / d, u), d -= a.value
                            } else t._squarify = o = Vl(n, t, e, r, i, u), o.ratio = n
                    }
                    return e.ratio = function(n) {
                        return t((n = +n) > 1 ? n : 1)
                    }, e
                }(Xl),
                Jl = function(t) {
                    for (var n, e = -1, r = t.length, i = t[r - 1], u = 0; ++e < r;) n = i, i = t[e], u += n[1] * i[0] - n[0] * i[1];
                    return u / 2
                },
                Kl = function(t) {
                    for (var n, e, r = -1, i = t.length, u = 0, o = 0, a = t[i - 1], c = 0; ++r < i;) n = a, a = t[r], c += e = n[0] * a[1] - a[0] * n[1], u += (n[0] + a[0]) * e, o += (n[1] + a[1]) * e;
                    return [u / (c *= 3), o / c]
                },
                th = function(t, n, e) {
                    return (n[0] - t[0]) * (e[1] - t[1]) - (n[1] - t[1]) * (e[0] - t[0])
                };

            function nh(t, n) {
                return t[0] - n[0] || t[1] - n[1]
            }

            function eh(t) {
                for (var n = t.length, e = [0, 1], r = 2, i = 2; i < n; ++i) {
                    for (; r > 1 && th(t[e[r - 2]], t[e[r - 1]], t[i]) <= 0;) --r;
                    e[r++] = i
                }
                return e.slice(0, r)
            }
            var rh = function(t) {
                    if ((e = t.length) < 3) return null;
                    var n, e, r = new Array(e),
                        i = new Array(e);
                    for (n = 0; n < e; ++n) r[n] = [+t[n][0], +t[n][1], n];
                    for (r.sort(nh), n = 0; n < e; ++n) i[n] = [r[n][0], -r[n][1]];
                    var u = eh(r),
                        o = eh(i),
                        a = o[0] === u[0],
                        c = o[o.length - 1] === u[u.length - 1],
                        f = [];
                    for (n = u.length - 1; n >= 0; --n) f.push(t[r[u[n]][2]]);
                    for (n = +a; n < o.length - c; ++n) f.push(t[r[o[n]][2]]);
                    return f
                },
                ih = function(t, n) {
                    for (var e, r, i = t.length, u = t[i - 1], o = n[0], a = n[1], c = u[0], f = u[1], s = !1, l = 0; l < i; ++l) e = (u = t[l])[0], (r = u[1]) > a != f > a && o < (c - e) * (a - r) / (f - r) + e && (s = !s), c = e, f = r;
                    return s
                },
                uh = function(t) {
                    for (var n, e, r = -1, i = t.length, u = t[i - 1], o = u[0], a = u[1], c = 0; ++r < i;) n = o, e = a, n -= o = (u = t[r])[0], e -= a = u[1], c += Math.sqrt(n * n + e * e);
                    return c
                },
                oh = [].slice,
                ah = {};

            function ch(t) {
                this._size = t, this._call = this._error = null, this._tasks = [], this._data = [], this._waiting = this._active = this._ended = this._start = 0
            }

            function fh(t) {
                if (!t._start) try {
                    ! function(t) {
                        for (; t._start = t._waiting && t._active < t._size;) {
                            var n = t._ended + t._active,
                                e = t._tasks[n],
                                r = e.length - 1,
                                i = e[r];
                            e[r] = sh(t, n), --t._waiting, ++t._active, e = i.apply(null, e), t._tasks[n] && (t._tasks[n] = e || ah)
                        }
                    }(t)
                } catch (n) {
                    if (t._tasks[t._ended + t._active - 1]) lh(t, n);
                    else if (!t._data) throw n
                }
            }

            function sh(t, n) {
                return function(e, r) {
                    t._tasks[n] && (--t._active, ++t._ended, t._tasks[n] = null, null == t._error && (null != e ? lh(t, e) : (t._data[n] = r, t._waiting ? fh(t) : hh(t))))
                }
            }

            function lh(t, n) {
                var e, r = t._tasks.length;
                for (t._error = n, t._data = void 0, t._waiting = NaN; --r >= 0;)
                    if ((e = t._tasks[r]) && (t._tasks[r] = null, e.abort)) try {
                        e.abort()
                    } catch (n) {}
                t._active = NaN, hh(t)
            }

            function hh(t) {
                if (!t._active && t._call) {
                    var n = t._data;
                    t._data = void 0, t._call(t._error, n)
                }
            }

            function dh(t) {
                if (null == t) t = 1 / 0;
                else if (!((t = +t) >= 1)) throw new Error("invalid concurrency");
                return new ch(t)
            }
            ch.prototype = dh.prototype = {
                constructor: ch,
                defer: function(t) {
                    if ("function" != typeof t) throw new Error("invalid callback");
                    if (this._call) throw new Error("defer after await");
                    if (null != this._error) return this;
                    var n = oh.call(arguments, 1);
                    return n.push(t), ++this._waiting, this._tasks.push(n), fh(this), this
                },
                abort: function() {
                    return null == this._error && lh(this, new Error("abort")), this
                },
                await: function(t) {
                    if ("function" != typeof t) throw new Error("invalid callback");
                    if (this._call) throw new Error("multiple await");
                    return this._call = function(n, e) {
                        t.apply(null, [n].concat(e))
                    }, hh(this), this
                },
                awaitAll: function(t) {
                    if ("function" != typeof t) throw new Error("invalid callback");
                    if (this._call) throw new Error("multiple await");
                    return this._call = t, hh(this), this
                }
            };
            var ph = function() {
                    return Math.random()
                },
                vh = function t(n) {
                    function e(t, e) {
                        return t = null == t ? 0 : +t, e = null == e ? 1 : +e, 1 === arguments.length ? (e = t, t = 0) : e -= t,
                            function() {
                                return n() * e + t
                            }
                    }
                    return e.source = t, e
                }(ph),
                yh = function t(n) {
                    function e(t, e) {
                        var r, i;
                        return t = null == t ? 0 : +t, e = null == e ? 1 : +e,
                            function() {
                                var u;
                                if (null != r) u = r, r = null;
                                else
                                    do {
                                        r = 2 * n() - 1, u = 2 * n() - 1, i = r * r + u * u
                                    } while (!i || i > 1);
                                return t + e * u * Math.sqrt(-2 * Math.log(i) / i)
                            }
                    }
                    return e.source = t, e
                }(ph),
                _h = function t(n) {
                    function e() {
                        var t = yh.source(n).apply(this, arguments);
                        return function() {
                            return Math.exp(t())
                        }
                    }
                    return e.source = t, e
                }(ph),
                gh = function t(n) {
                    function e(t) {
                        return function() {
                            for (var e = 0, r = 0; r < t; ++r) e += n();
                            return e
                        }
                    }
                    return e.source = t, e
                }(ph),
                mh = function t(n) {
                    function e(t) {
                        var e = gh.source(n)(t);
                        return function() {
                            return e() / t
                        }
                    }
                    return e.source = t, e
                }(ph),
                xh = function t(n) {
                    function e(t) {
                        return function() {
                            return -Math.log(1 - n()) / t
                        }
                    }
                    return e.source = t, e
                }(ph),
                bh = function(t, n) {
                    var e, r, i, u, o = T("beforesend", "progress", "load", "error"),
                        a = Object(Wi.c)(),
                        c = new XMLHttpRequest,
                        f = null,
                        s = null,
                        l = 0;

                    function h(t) {
                        var n, r = c.status;
                        if (!r && function(t) {
                                var n = t.responseType;
                                return n && "text" !== n ? t.response : t.responseText
                            }(c) || r >= 200 && r < 300 || 304 === r) {
                            if (i) try {
                                n = i.call(e, c)
                            } catch (t) {
                                return void o.call("error", e, t)
                            } else n = c;
                            o.call("load", e, n)
                        } else o.call("error", e, t)
                    }
                    if ("undefined" == typeof XDomainRequest || "withCredentials" in c || !/^(http(s)?:)?\/\//.test(t) || (c = new XDomainRequest), "onload" in c ? c.onload = c.onerror = c.ontimeout = h : c.onreadystatechange = function(t) {
                            c.readyState > 3 && h(t)
                        }, c.onprogress = function(t) {
                            o.call("progress", e, t)
                        }, e = {
                            header: function(t, n) {
                                return t = (t + "").toLowerCase(), arguments.length < 2 ? a.get(t) : (null == n ? a.remove(t) : a.set(t, n + ""), e)
                            },
                            mimeType: function(t) {
                                return arguments.length ? (r = null == t ? null : t + "", e) : r
                            },
                            responseType: function(t) {
                                return arguments.length ? (u = t, e) : u
                            },
                            timeout: function(t) {
                                return arguments.length ? (l = +t, e) : l
                            },
                            user: function(t) {
                                return arguments.length < 1 ? f : (f = null == t ? null : t + "", e)
                            },
                            password: function(t) {
                                return arguments.length < 1 ? s : (s = null == t ? null : t + "", e)
                            },
                            response: function(t) {
                                return i = t, e
                            },
                            get: function(t, n) {
                                return e.send("GET", t, n)
                            },
                            post: function(t, n) {
                                return e.send("POST", t, n)
                            },
                            send: function(n, i, h) {
                                return c.open(n, t, !0, f, s), null == r || a.has("accept") || a.set("accept", r + ",*/*"), c.setRequestHeader && a.each((function(t, n) {
                                    c.setRequestHeader(n, t)
                                })), null != r && c.overrideMimeType && c.overrideMimeType(r), null != u && (c.responseType = u), l > 0 && (c.timeout = l), null == h && "function" == typeof i && (h = i, i = null), null != h && 1 === h.length && (h = function(t) {
                                    return function(n, e) {
                                        t(null == n ? e : null)
                                    }
                                }(h)), null != h && e.on("error", h).on("load", (function(t) {
                                    h(null, t)
                                })), o.call("beforesend", e, c), c.send(null == i ? null : i), e
                            },
                            abort: function() {
                                return c.abort(), e
                            },
                            on: function() {
                                var t = o.on.apply(o, arguments);
                                return t === o ? e : t
                            }
                        }, null != n) {
                        if ("function" != typeof n) throw new Error("invalid callback: " + n);
                        return e.get(n)
                    }
                    return e
                },
                wh = function(t, n) {
                    return function(e, r) {
                        var i = bh(e).mimeType(t).response(n);
                        if (null != r) {
                            if ("function" != typeof r) throw new Error("invalid callback: " + r);
                            return i.get(r)
                        }
                        return i
                    }
                },
                Mh = wh("text/html", (function(t) {
                    return document.createRange().createContextualFragment(t.responseText)
                })),
                Th = wh("application/json", (function(t) {
                    return JSON.parse(t.responseText)
                })),
                kh = wh("text/plain", (function(t) {
                    return t.responseText
                })),
                Nh = wh("application/xml", (function(t) {
                    var n = t.responseXML;
                    if (!n) throw new Error("parse error");
                    return n
                })),
                Sh = function(t, n) {
                    return function(e, r, i) {
                        arguments.length < 3 && (i = r, r = null);
                        var u = bh(e).mimeType(t);
                        return u.row = function(t) {
                            return arguments.length ? u.response(function(t, n) {
                                return function(e) {
                                    return t(e.responseText, n)
                                }
                            }(n, r = t)) : r
                        }, u.row(r), i ? u.get(i) : u
                    }
                },
                Eh = Sh("text/csv", ru),
                Ah = Sh("text/tab-separated-values", cu),
                Ch = Array.prototype,
                zh = Ch.map,
                Ph = Ch.slice,
                Oh = {
                    name: "implicit"
                };

            function Rh(t) {
                var n = Object(Wi.c)(),
                    e = [],
                    r = Oh;

                function i(i) {
                    var u = i + "",
                        o = n.get(u);
                    if (!o) {
                        if (r !== Oh) return r;
                        n.set(u, o = e.push(i))
                    }
                    return t[(o - 1) % t.length]
                }
                return t = null == t ? [] : Ph.call(t), i.domain = function(t) {
                    if (!arguments.length) return e.slice();
                    e = [], n = Object(Wi.c)();
                    for (var r, u, o = -1, a = t.length; ++o < a;) n.has(u = (r = t[o]) + "") || n.set(u, e.push(r));
                    return i
                }, i.range = function(n) {
                    return arguments.length ? (t = Ph.call(n), i) : t.slice()
                }, i.unknown = function(t) {
                    return arguments.length ? (r = t, i) : r
                }, i.copy = function() {
                    return Rh().domain(e).range(t).unknown(r)
                }, i
            }

            function Lh() {
                var t, n, e = Rh().unknown(void 0),
                    i = e.domain,
                    u = e.range,
                    o = [0, 1],
                    a = !1,
                    c = 0,
                    f = 0,
                    s = .5;

                function l() {
                    var e = i().length,
                        l = o[1] < o[0],
                        h = o[l - 0],
                        d = o[1 - l];
                    t = (d - h) / Math.max(1, e - c + 2 * f), a && (t = Math.floor(t)), h += (d - h - t * (e - c)) * s, n = t * (1 - c), a && (h = Math.round(h), n = Math.round(n));
                    var p = Object(r.s)(e).map((function(n) {
                        return h + t * n
                    }));
                    return u(l ? p.reverse() : p)
                }
                return delete e.unknown, e.domain = function(t) {
                    return arguments.length ? (i(t), l()) : i()
                }, e.range = function(t) {
                    return arguments.length ? (o = [+t[0], +t[1]], l()) : o.slice()
                }, e.rangeRound = function(t) {
                    return o = [+t[0], +t[1]], a = !0, l()
                }, e.bandwidth = function() {
                    return n
                }, e.step = function() {
                    return t
                }, e.round = function(t) {
                    return arguments.length ? (a = !!t, l()) : a
                }, e.padding = function(t) {
                    return arguments.length ? (c = f = Math.max(0, Math.min(1, t)), l()) : c
                }, e.paddingInner = function(t) {
                    return arguments.length ? (c = Math.max(0, Math.min(1, t)), l()) : c
                }, e.paddingOuter = function(t) {
                    return arguments.length ? (f = Math.max(0, Math.min(1, t)), l()) : f
                }, e.align = function(t) {
                    return arguments.length ? (s = Math.max(0, Math.min(1, t)), l()) : s
                }, e.copy = function() {
                    return Lh().domain(i()).range(o).round(a).paddingInner(c).paddingOuter(f).align(s)
                }, l()
            }

            function qh() {
                return function t(n) {
                    var e = n.copy;
                    return n.padding = n.paddingOuter, delete n.paddingInner, delete n.paddingOuter, n.copy = function() {
                        return t(e())
                    }, n
                }(Lh().paddingInner(1))
            }
            var Dh = function(t) {
                    return function() {
                        return t
                    }
                },
                Uh = function(t) {
                    return +t
                },
                jh = [0, 1];

            function Fh(t, n) {
                return (n -= t = +t) ? function(e) {
                    return (e - t) / n
                } : Dh(n)
            }

            function Ih(t, n, e, r) {
                var i = t[0],
                    u = t[1],
                    o = n[0],
                    a = n[1];
                return u < i ? (i = e(u, i), o = r(a, o)) : (i = e(i, u), o = r(o, a)),
                    function(t) {
                        return o(i(t))
                    }
            }

            function Yh(t, n, e, i) {
                var u = Math.min(t.length, n.length) - 1,
                    o = new Array(u),
                    a = new Array(u),
                    c = -1;
                for (t[u] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++c < u;) o[c] = e(t[c], t[c + 1]), a[c] = i(n[c], n[c + 1]);
                return function(n) {
                    var e = Object(r.b)(t, n, 1, u) - 1;
                    return a[e](o[e](n))
                }
            }

            function Bh(t, n) {
                return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp())
            }

            function Hh(t, n) {
                var e, r, i, u = jh,
                    o = jh,
                    a = ie,
                    c = !1;

                function f() {
                    return e = Math.min(u.length, o.length) > 2 ? Yh : Ih, r = i = null, s
                }

                function s(n) {
                    return (r || (r = e(u, o, c ? function(t) {
                        return function(n, e) {
                            var r = t(n = +n, e = +e);
                            return function(t) {
                                return t <= n ? 0 : t >= e ? 1 : r(t)
                            }
                        }
                    }(t) : t, a)))(+n)
                }
                return s.invert = function(t) {
                    return (i || (i = e(o, u, Fh, c ? function(t) {
                        return function(n, e) {
                            var r = t(n = +n, e = +e);
                            return function(t) {
                                return t <= 0 ? n : t >= 1 ? e : r(t)
                            }
                        }
                    }(n) : n)))(+t)
                }, s.domain = function(t) {
                    return arguments.length ? (u = zh.call(t, Uh), f()) : u.slice()
                }, s.range = function(t) {
                    return arguments.length ? (o = Ph.call(t), f()) : o.slice()
                }, s.rangeRound = function(t) {
                    return o = Ph.call(t), a = ue, f()
                }, s.clamp = function(t) {
                    return arguments.length ? (c = !!t, f()) : c
                }, s.interpolate = function(t) {
                    return arguments.length ? (a = t, f()) : a
                }, f()
            }
            var Xh = function(t, n, e) {
                var i, u = t[0],
                    o = t[t.length - 1],
                    a = Object(r.A)(u, o, null == n ? 10 : n);
                switch ((e = Hu(null == e ? ",f" : e)).type) {
                    case "s":
                        var c = Math.max(Math.abs(u), Math.abs(o));
                        return null != e.precision || isNaN(i = to(a, c)) || (e.precision = i), Wu(e, c);
                    case "":
                    case "e":
                    case "g":
                    case "p":
                    case "r":
                        null != e.precision || isNaN(i = no(a, Math.max(Math.abs(u), Math.abs(o)))) || (e.precision = i - ("e" === e.type));
                        break;
                    case "f":
                    case "%":
                        null != e.precision || isNaN(i = Ku(a)) || (e.precision = i - 2 * ("%" === e.type))
                }
                return $u(e)
            };

            function Vh(t) {
                var n = t.domain;
                return t.ticks = function(t) {
                    var e = n();
                    return Object(r.B)(e[0], e[e.length - 1], null == t ? 10 : t)
                }, t.tickFormat = function(t, e) {
                    return Xh(n(), t, e)
                }, t.nice = function(e) {
                    null == e && (e = 10);
                    var i, u = n(),
                        o = 0,
                        a = u.length - 1,
                        c = u[o],
                        f = u[a];
                    return f < c && (i = c, c = f, f = i, i = o, o = a, a = i), (i = Object(r.z)(c, f, e)) > 0 ? (c = Math.floor(c / i) * i, f = Math.ceil(f / i) * i, i = Object(r.z)(c, f, e)) : i < 0 && (c = Math.ceil(c * i) / i, f = Math.floor(f * i) / i, i = Object(r.z)(c, f, e)), i > 0 ? (u[o] = Math.floor(c / i) * i, u[a] = Math.ceil(f / i) * i, n(u)) : i < 0 && (u[o] = Math.ceil(c * i) / i, u[a] = Math.floor(f * i) / i, n(u)), t
                }, t
            }

            function $h() {
                var t = Hh(Fh, Kn);
                return t.copy = function() {
                    return Bh(t, $h())
                }, Vh(t)
            }

            function Wh() {
                var t = [0, 1];

                function n(t) {
                    return +t
                }
                return n.invert = n, n.domain = n.range = function(e) {
                    return arguments.length ? (t = zh.call(e, Uh), n) : t.slice()
                }, n.copy = function() {
                    return Wh().domain(t)
                }, Vh(n)
            }
            var Zh = function(t, n) {
                var e, r = 0,
                    i = (t = t.slice()).length - 1,
                    u = t[r],
                    o = t[i];
                return o < u && (e = r, r = i, i = e, e = u, u = o, o = e), t[r] = n.floor(u), t[i] = n.ceil(o), t
            };

            function Gh(t, n) {
                return (n = Math.log(n / t)) ? function(e) {
                    return Math.log(e / t) / n
                } : Dh(n)
            }

            function Qh(t, n) {
                return t < 0 ? function(e) {
                    return -Math.pow(-n, e) * Math.pow(-t, 1 - e)
                } : function(e) {
                    return Math.pow(n, e) * Math.pow(t, 1 - e)
                }
            }

            function Jh(t) {
                return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t
            }

            function Kh(t) {
                return 10 === t ? Jh : t === Math.E ? Math.exp : function(n) {
                    return Math.pow(t, n)
                }
            }

            function td(t) {
                return t === Math.E ? Math.log : 10 === t && Math.log10 || 2 === t && Math.log2 || (t = Math.log(t), function(n) {
                    return Math.log(n) / t
                })
            }

            function nd(t) {
                return function(n) {
                    return -t(-n)
                }
            }

            function ed() {
                var t = Hh(Gh, Qh).domain([1, 10]),
                    n = t.domain,
                    e = 10,
                    i = td(10),
                    u = Kh(10);

                function o() {
                    return i = td(e), u = Kh(e), n()[0] < 0 && (i = nd(i), u = nd(u)), t
                }
                return t.base = function(t) {
                    return arguments.length ? (e = +t, o()) : e
                }, t.domain = function(t) {
                    return arguments.length ? (n(t), o()) : n()
                }, t.ticks = function(t) {
                    var o, a = n(),
                        c = a[0],
                        f = a[a.length - 1];
                    (o = f < c) && (d = c, c = f, f = d);
                    var s, l, h, d = i(c),
                        p = i(f),
                        v = null == t ? 10 : +t,
                        y = [];
                    if (!(e % 1) && p - d < v) {
                        if (d = Math.round(d) - 1, p = Math.round(p) + 1, c > 0) {
                            for (; d < p; ++d)
                                for (l = 1, s = u(d); l < e; ++l)
                                    if (!((h = s * l) < c)) {
                                        if (h > f) break;
                                        y.push(h)
                                    }
                        } else
                            for (; d < p; ++d)
                                for (l = e - 1, s = u(d); l >= 1; --l)
                                    if (!((h = s * l) < c)) {
                                        if (h > f) break;
                                        y.push(h)
                                    }
                    } else y = Object(r.B)(d, p, Math.min(p - d, v)).map(u);
                    return o ? y.reverse() : y
                }, t.tickFormat = function(n, r) {
                    if (null == r && (r = 10 === e ? ".0e" : ","), "function" != typeof r && (r = $u(r)), n === 1 / 0) return r;
                    null == n && (n = 10);
                    var o = Math.max(1, e * n / t.ticks().length);
                    return function(t) {
                        var n = t / u(Math.round(i(t)));
                        return n * e < e - .5 && (n *= e), n <= o ? r(t) : ""
                    }
                }, t.nice = function() {
                    return n(Zh(n(), {
                        floor: function(t) {
                            return u(Math.floor(i(t)))
                        },
                        ceil: function(t) {
                            return u(Math.ceil(i(t)))
                        }
                    }))
                }, t.copy = function() {
                    return Bh(t, ed().base(e))
                }, t
            }

            function rd(t, n) {
                return t < 0 ? -Math.pow(-t, n) : Math.pow(t, n)
            }

            function id() {
                var t = 1,
                    n = Hh((function(n, e) {
                        return (e = rd(e, t) - (n = rd(n, t))) ? function(r) {
                            return (rd(r, t) - n) / e
                        } : Dh(e)
                    }), (function(n, e) {
                        return e = rd(e, t) - (n = rd(n, t)),
                            function(r) {
                                return rd(n + e * r, 1 / t)
                            }
                    })),
                    e = n.domain;
                return n.exponent = function(n) {
                    return arguments.length ? (t = +n, e(e())) : t
                }, n.copy = function() {
                    return Bh(n, id().exponent(t))
                }, Vh(n)
            }

            function ud() {
                return id().exponent(.5)
            }

            function od() {
                var t = [],
                    n = [],
                    e = [];

                function i() {
                    var i = 0,
                        o = Math.max(1, n.length);
                    for (e = new Array(o - 1); ++i < o;) e[i - 1] = Object(r.r)(t, i / o);
                    return u
                }

                function u(t) {
                    if (!isNaN(t = +t)) return n[Object(r.b)(e, t)]
                }
                return u.invertExtent = function(r) {
                    var i = n.indexOf(r);
                    return i < 0 ? [NaN, NaN] : [i > 0 ? e[i - 1] : t[0], i < e.length ? e[i] : t[t.length - 1]]
                }, u.domain = function(n) {
                    if (!arguments.length) return t.slice();
                    t = [];
                    for (var e, u = 0, o = n.length; u < o; ++u) null == (e = n[u]) || isNaN(e = +e) || t.push(e);
                    return t.sort(r.a), i()
                }, u.range = function(t) {
                    return arguments.length ? (n = Ph.call(t), i()) : n.slice()
                }, u.quantiles = function() {
                    return e.slice()
                }, u.copy = function() {
                    return od().domain(t).range(n)
                }, u
            }

            function ad() {
                var t = 0,
                    n = 1,
                    e = 1,
                    i = [.5],
                    u = [0, 1];

                function o(t) {
                    if (t <= t) return u[Object(r.b)(i, t, 0, e)]
                }

                function a() {
                    var r = -1;
                    for (i = new Array(e); ++r < e;) i[r] = ((r + 1) * n - (r - e) * t) / (e + 1);
                    return o
                }
                return o.domain = function(e) {
                    return arguments.length ? (t = +e[0], n = +e[1], a()) : [t, n]
                }, o.range = function(t) {
                    return arguments.length ? (e = (u = Ph.call(t)).length - 1, a()) : u.slice()
                }, o.invertExtent = function(r) {
                    var o = u.indexOf(r);
                    return o < 0 ? [NaN, NaN] : o < 1 ? [t, i[0]] : o >= e ? [i[e - 1], n] : [i[o - 1], i[o]]
                }, o.copy = function() {
                    return ad().domain([t, n]).range(u)
                }, Vh(o)
            }

            function cd() {
                var t = [.5],
                    n = [0, 1],
                    e = 1;

                function i(i) {
                    if (i <= i) return n[Object(r.b)(t, i, 0, e)]
                }
                return i.domain = function(r) {
                    return arguments.length ? (t = Ph.call(r), e = Math.min(t.length, n.length - 1), i) : t.slice()
                }, i.range = function(r) {
                    return arguments.length ? (n = Ph.call(r), e = Math.min(t.length, n.length - 1), i) : n.slice()
                }, i.invertExtent = function(e) {
                    var r = n.indexOf(e);
                    return [t[r - 1], t[r]]
                }, i.copy = function() {
                    return cd().domain(t).range(n)
                }, i
            }
            var fd = new Date,
                sd = new Date;

            function ld(t, n, e, r) {
                function i(n) {
                    return t(n = new Date(+n)), n
                }
                return i.floor = i, i.ceil = function(e) {
                    return t(e = new Date(e - 1)), n(e, 1), t(e), e
                }, i.round = function(t) {
                    var n = i(t),
                        e = i.ceil(t);
                    return t - n < e - t ? n : e
                }, i.offset = function(t, e) {
                    return n(t = new Date(+t), null == e ? 1 : Math.floor(e)), t
                }, i.range = function(e, r, u) {
                    var o, a = [];
                    if (e = i.ceil(e), u = null == u ? 1 : Math.floor(u), !(e < r && u > 0)) return a;
                    do {
                        a.push(o = new Date(+e)), n(e, u), t(e)
                    } while (o < e && e < r);
                    return a
                }, i.filter = function(e) {
                    return ld((function(n) {
                        if (n >= n)
                            for (; t(n), !e(n);) n.setTime(n - 1)
                    }), (function(t, r) {
                        if (t >= t)
                            if (r < 0)
                                for (; ++r <= 0;)
                                    for (; n(t, -1), !e(t););
                            else
                                for (; --r >= 0;)
                                    for (; n(t, 1), !e(t););
                    }))
                }, e && (i.count = function(n, r) {
                    return fd.setTime(+n), sd.setTime(+r), t(fd), t(sd), Math.floor(e(fd, sd))
                }, i.every = function(t) {
                    return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? i.filter(r ? function(n) {
                        return r(n) % t == 0
                    } : function(n) {
                        return i.count(0, n) % t == 0
                    }) : i : null
                }), i
            }
            var hd = ld((function() {}), (function(t, n) {
                t.setTime(+t + n)
            }), (function(t, n) {
                return n - t
            }));
            hd.every = function(t) {
                return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? ld((function(n) {
                    n.setTime(Math.floor(n / t) * t)
                }), (function(n, e) {
                    n.setTime(+n + e * t)
                }), (function(n, e) {
                    return (e - n) / t
                })) : hd : null
            };
            var dd = hd,
                pd = hd.range,
                vd = 6e4,
                yd = 6048e5,
                _d = ld((function(t) {
                    t.setTime(1e3 * Math.floor(t / 1e3))
                }), (function(t, n) {
                    t.setTime(+t + 1e3 * n)
                }), (function(t, n) {
                    return (n - t) / 1e3
                }), (function(t) {
                    return t.getUTCSeconds()
                })),
                gd = _d,
                md = _d.range,
                xd = ld((function(t) {
                    t.setTime(Math.floor(t / vd) * vd)
                }), (function(t, n) {
                    t.setTime(+t + n * vd)
                }), (function(t, n) {
                    return (n - t) / vd
                }), (function(t) {
                    return t.getMinutes()
                })),
                bd = xd,
                wd = xd.range,
                Md = ld((function(t) {
                    var n = t.getTimezoneOffset() * vd % 36e5;
                    n < 0 && (n += 36e5), t.setTime(36e5 * Math.floor((+t - n) / 36e5) + n)
                }), (function(t, n) {
                    t.setTime(+t + 36e5 * n)
                }), (function(t, n) {
                    return (n - t) / 36e5
                }), (function(t) {
                    return t.getHours()
                })),
                Td = Md,
                kd = Md.range,
                Nd = ld((function(t) {
                    t.setHours(0, 0, 0, 0)
                }), (function(t, n) {
                    t.setDate(t.getDate() + n)
                }), (function(t, n) {
                    return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * vd) / 864e5
                }), (function(t) {
                    return t.getDate() - 1
                })),
                Sd = Nd,
                Ed = Nd.range;

            function Ad(t) {
                return ld((function(n) {
                    n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7), n.setHours(0, 0, 0, 0)
                }), (function(t, n) {
                    t.setDate(t.getDate() + 7 * n)
                }), (function(t, n) {
                    return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * vd) / yd
                }))
            }
            var Cd = Ad(0),
                zd = Ad(1),
                Pd = Ad(2),
                Od = Ad(3),
                Rd = Ad(4),
                Ld = Ad(5),
                qd = Ad(6),
                Dd = Cd.range,
                Ud = zd.range,
                jd = Pd.range,
                Fd = Od.range,
                Id = Rd.range,
                Yd = Ld.range,
                Bd = qd.range,
                Hd = ld((function(t) {
                    t.setDate(1), t.setHours(0, 0, 0, 0)
                }), (function(t, n) {
                    t.setMonth(t.getMonth() + n)
                }), (function(t, n) {
                    return n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear())
                }), (function(t) {
                    return t.getMonth()
                })),
                Xd = Hd,
                Vd = Hd.range,
                $d = ld((function(t) {
                    t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
                }), (function(t, n) {
                    t.setFullYear(t.getFullYear() + n)
                }), (function(t, n) {
                    return n.getFullYear() - t.getFullYear()
                }), (function(t) {
                    return t.getFullYear()
                }));
            $d.every = function(t) {
                return isFinite(t = Math.floor(t)) && t > 0 ? ld((function(n) {
                    n.setFullYear(Math.floor(n.getFullYear() / t) * t), n.setMonth(0, 1), n.setHours(0, 0, 0, 0)
                }), (function(n, e) {
                    n.setFullYear(n.getFullYear() + e * t)
                })) : null
            };
            var Wd = $d,
                Zd = $d.range,
                Gd = ld((function(t) {
                    t.setUTCSeconds(0, 0)
                }), (function(t, n) {
                    t.setTime(+t + n * vd)
                }), (function(t, n) {
                    return (n - t) / vd
                }), (function(t) {
                    return t.getUTCMinutes()
                })),
                Qd = Gd,
                Jd = Gd.range,
                Kd = ld((function(t) {
                    t.setUTCMinutes(0, 0, 0)
                }), (function(t, n) {
                    t.setTime(+t + 36e5 * n)
                }), (function(t, n) {
                    return (n - t) / 36e5
                }), (function(t) {
                    return t.getUTCHours()
                })),
                tp = Kd,
                np = Kd.range,
                ep = ld((function(t) {
                    t.setUTCHours(0, 0, 0, 0)
                }), (function(t, n) {
                    t.setUTCDate(t.getUTCDate() + n)
                }), (function(t, n) {
                    return (n - t) / 864e5
                }), (function(t) {
                    return t.getUTCDate() - 1
                })),
                rp = ep,
                ip = ep.range;

            function up(t) {
                return ld((function(n) {
                    n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7), n.setUTCHours(0, 0, 0, 0)
                }), (function(t, n) {
                    t.setUTCDate(t.getUTCDate() + 7 * n)
                }), (function(t, n) {
                    return (n - t) / yd
                }))
            }
            var op = up(0),
                ap = up(1),
                cp = up(2),
                fp = up(3),
                sp = up(4),
                lp = up(5),
                hp = up(6),
                dp = op.range,
                pp = ap.range,
                vp = cp.range,
                yp = fp.range,
                _p = sp.range,
                gp = lp.range,
                mp = hp.range,
                xp = ld((function(t) {
                    t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0)
                }), (function(t, n) {
                    t.setUTCMonth(t.getUTCMonth() + n)
                }), (function(t, n) {
                    return n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear())
                }), (function(t) {
                    return t.getUTCMonth()
                })),
                bp = xp,
                wp = xp.range,
                Mp = ld((function(t) {
                    t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
                }), (function(t, n) {
                    t.setUTCFullYear(t.getUTCFullYear() + n)
                }), (function(t, n) {
                    return n.getUTCFullYear() - t.getUTCFullYear()
                }), (function(t) {
                    return t.getUTCFullYear()
                }));
            Mp.every = function(t) {
                return isFinite(t = Math.floor(t)) && t > 0 ? ld((function(n) {
                    n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0)
                }), (function(n, e) {
                    n.setUTCFullYear(n.getUTCFullYear() + e * t)
                })) : null
            };
            var Tp = Mp,
                kp = Mp.range;

            function Np(t) {
                if (0 <= t.y && t.y < 100) {
                    var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
                    return n.setFullYear(t.y), n
                }
                return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
            }

            function Sp(t) {
                if (0 <= t.y && t.y < 100) {
                    var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
                    return n.setUTCFullYear(t.y), n
                }
                return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
            }

            function Ep(t) {
                return {
                    y: t,
                    m: 0,
                    d: 1,
                    H: 0,
                    M: 0,
                    S: 0,
                    L: 0
                }
            }

            function Ap(t) {
                var n = t.dateTime,
                    e = t.date,
                    r = t.time,
                    i = t.periods,
                    u = t.days,
                    o = t.shortDays,
                    a = t.months,
                    c = t.shortMonths,
                    f = Ip(i),
                    s = Yp(i),
                    l = Ip(u),
                    h = Yp(u),
                    d = Ip(o),
                    p = Yp(o),
                    v = Ip(a),
                    y = Yp(a),
                    _ = Ip(c),
                    g = Yp(c),
                    m = {
                        a: function(t) {
                            return o[t.getDay()]
                        },
                        A: function(t) {
                            return u[t.getDay()]
                        },
                        b: function(t) {
                            return c[t.getMonth()]
                        },
                        B: function(t) {
                            return a[t.getMonth()]
                        },
                        c: null,
                        d: cv,
                        e: cv,
                        f: dv,
                        H: fv,
                        I: sv,
                        j: lv,
                        L: hv,
                        m: pv,
                        M: vv,
                        p: function(t) {
                            return i[+(t.getHours() >= 12)]
                        },
                        Q: Bv,
                        s: Hv,
                        S: yv,
                        u: _v,
                        U: gv,
                        V: mv,
                        w: xv,
                        W: bv,
                        x: null,
                        X: null,
                        y: wv,
                        Y: Mv,
                        Z: Tv,
                        "%": Yv
                    },
                    x = {
                        a: function(t) {
                            return o[t.getUTCDay()]
                        },
                        A: function(t) {
                            return u[t.getUTCDay()]
                        },
                        b: function(t) {
                            return c[t.getUTCMonth()]
                        },
                        B: function(t) {
                            return a[t.getUTCMonth()]
                        },
                        c: null,
                        d: kv,
                        e: kv,
                        f: Cv,
                        H: Nv,
                        I: Sv,
                        j: Ev,
                        L: Av,
                        m: zv,
                        M: Pv,
                        p: function(t) {
                            return i[+(t.getUTCHours() >= 12)]
                        },
                        Q: Bv,
                        s: Hv,
                        S: Ov,
                        u: Rv,
                        U: Lv,
                        V: qv,
                        w: Dv,
                        W: Uv,
                        x: null,
                        X: null,
                        y: jv,
                        Y: Fv,
                        Z: Iv,
                        "%": Yv
                    },
                    b = {
                        a: function(t, n, e) {
                            var r = d.exec(n.slice(e));
                            return r ? (t.w = p[r[0].toLowerCase()], e + r[0].length) : -1
                        },
                        A: function(t, n, e) {
                            var r = l.exec(n.slice(e));
                            return r ? (t.w = h[r[0].toLowerCase()], e + r[0].length) : -1
                        },
                        b: function(t, n, e) {
                            var r = _.exec(n.slice(e));
                            return r ? (t.m = g[r[0].toLowerCase()], e + r[0].length) : -1
                        },
                        B: function(t, n, e) {
                            var r = v.exec(n.slice(e));
                            return r ? (t.m = y[r[0].toLowerCase()], e + r[0].length) : -1
                        },
                        c: function(t, e, r) {
                            return T(t, n, e, r)
                        },
                        d: Jp,
                        e: Jp,
                        f: iv,
                        H: tv,
                        I: tv,
                        j: Kp,
                        L: rv,
                        m: Qp,
                        M: nv,
                        p: function(t, n, e) {
                            var r = f.exec(n.slice(e));
                            return r ? (t.p = s[r[0].toLowerCase()], e + r[0].length) : -1
                        },
                        Q: ov,
                        s: av,
                        S: ev,
                        u: Hp,
                        U: Xp,
                        V: Vp,
                        w: Bp,
                        W: $p,
                        x: function(t, n, r) {
                            return T(t, e, n, r)
                        },
                        X: function(t, n, e) {
                            return T(t, r, n, e)
                        },
                        y: Zp,
                        Y: Wp,
                        Z: Gp,
                        "%": uv
                    };

                function w(t, n) {
                    return function(e) {
                        var r, i, u, o = [],
                            a = -1,
                            c = 0,
                            f = t.length;
                        for (e instanceof Date || (e = new Date(+e)); ++a < f;) 37 === t.charCodeAt(a) && (o.push(t.slice(c, a)), null != (i = Lp[r = t.charAt(++a)]) ? r = t.charAt(++a) : i = "e" === r ? " " : "0", (u = n[r]) && (r = u(e, i)), o.push(r), c = a + 1);
                        return o.push(t.slice(c, a)), o.join("")
                    }
                }

                function M(t, n) {
                    return function(e) {
                        var r, i, u = Ep(1900);
                        if (T(u, t, e += "", 0) != e.length) return null;
                        if ("Q" in u) return new Date(u.Q);
                        if ("p" in u && (u.H = u.H % 12 + 12 * u.p), "V" in u) {
                            if (u.V < 1 || u.V > 53) return null;
                            "w" in u || (u.w = 1), "Z" in u ? (r = (i = (r = Sp(Ep(u.y))).getUTCDay()) > 4 || 0 === i ? ap.ceil(r) : ap(r), r = rp.offset(r, 7 * (u.V - 1)), u.y = r.getUTCFullYear(), u.m = r.getUTCMonth(), u.d = r.getUTCDate() + (u.w + 6) % 7) : (r = (i = (r = n(Ep(u.y))).getDay()) > 4 || 0 === i ? zd.ceil(r) : zd(r), r = Sd.offset(r, 7 * (u.V - 1)), u.y = r.getFullYear(), u.m = r.getMonth(), u.d = r.getDate() + (u.w + 6) % 7)
                        } else("W" in u || "U" in u) && ("w" in u || (u.w = "u" in u ? u.u % 7 : "W" in u ? 1 : 0), i = "Z" in u ? Sp(Ep(u.y)).getUTCDay() : n(Ep(u.y)).getDay(), u.m = 0, u.d = "W" in u ? (u.w + 6) % 7 + 7 * u.W - (i + 5) % 7 : u.w + 7 * u.U - (i + 6) % 7);
                        return "Z" in u ? (u.H += u.Z / 100 | 0, u.M += u.Z % 100, Sp(u)) : n(u)
                    }
                }

                function T(t, n, e, r) {
                    for (var i, u, o = 0, a = n.length, c = e.length; o < a;) {
                        if (r >= c) return -1;
                        if (37 === (i = n.charCodeAt(o++))) {
                            if (i = n.charAt(o++), !(u = b[i in Lp ? n.charAt(o++) : i]) || (r = u(t, e, r)) < 0) return -1
                        } else if (i != e.charCodeAt(r++)) return -1
                    }
                    return r
                }
                return m.x = w(e, m), m.X = w(r, m), m.c = w(n, m), x.x = w(e, x), x.X = w(r, x), x.c = w(n, x), {
                    format: function(t) {
                        var n = w(t += "", m);
                        return n.toString = function() {
                            return t
                        }, n
                    },
                    parse: function(t) {
                        var n = M(t += "", Np);
                        return n.toString = function() {
                            return t
                        }, n
                    },
                    utcFormat: function(t) {
                        var n = w(t += "", x);
                        return n.toString = function() {
                            return t
                        }, n
                    },
                    utcParse: function(t) {
                        var n = M(t, Sp);
                        return n.toString = function() {
                            return t
                        }, n
                    }
                }
            }
            var Cp, zp, Pp, Op, Rp, Lp = {
                    "-": "",
                    _: " ",
                    0: "0"
                },
                qp = /^\s*\d+/,
                Dp = /^%/,
                Up = /[\\^$*+?|[\]().{}]/g;

            function jp(t, n, e) {
                var r = t < 0 ? "-" : "",
                    i = (r ? -t : t) + "",
                    u = i.length;
                return r + (u < e ? new Array(e - u + 1).join(n) + i : i)
            }

            function Fp(t) {
                return t.replace(Up, "\\$&")
            }

            function Ip(t) {
                return new RegExp("^(?:" + t.map(Fp).join("|") + ")", "i")
            }

            function Yp(t) {
                for (var n = {}, e = -1, r = t.length; ++e < r;) n[t[e].toLowerCase()] = e;
                return n
            }

            function Bp(t, n, e) {
                var r = qp.exec(n.slice(e, e + 1));
                return r ? (t.w = +r[0], e + r[0].length) : -1
            }

            function Hp(t, n, e) {
                var r = qp.exec(n.slice(e, e + 1));
                return r ? (t.u = +r[0], e + r[0].length) : -1
            }

            function Xp(t, n, e) {
                var r = qp.exec(n.slice(e, e + 2));
                return r ? (t.U = +r[0], e + r[0].length) : -1
            }

            function Vp(t, n, e) {
                var r = qp.exec(n.slice(e, e + 2));
                return r ? (t.V = +r[0], e + r[0].length) : -1
            }

            function $p(t, n, e) {
                var r = qp.exec(n.slice(e, e + 2));
                return r ? (t.W = +r[0], e + r[0].length) : -1
            }

            function Wp(t, n, e) {
                var r = qp.exec(n.slice(e, e + 4));
                return r ? (t.y = +r[0], e + r[0].length) : -1
            }

            function Zp(t, n, e) {
                var r = qp.exec(n.slice(e, e + 2));
                return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1
            }

            function Gp(t, n, e) {
                var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
                return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1
            }

            function Qp(t, n, e) {
                var r = qp.exec(n.slice(e, e + 2));
                return r ? (t.m = r[0] - 1, e + r[0].length) : -1
            }

            function Jp(t, n, e) {
                var r = qp.exec(n.slice(e, e + 2));
                return r ? (t.d = +r[0], e + r[0].length) : -1
            }

            function Kp(t, n, e) {
                var r = qp.exec(n.slice(e, e + 3));
                return r ? (t.m = 0, t.d = +r[0], e + r[0].length) : -1
            }

            function tv(t, n, e) {
                var r = qp.exec(n.slice(e, e + 2));
                return r ? (t.H = +r[0], e + r[0].length) : -1
            }

            function nv(t, n, e) {
                var r = qp.exec(n.slice(e, e + 2));
                return r ? (t.M = +r[0], e + r[0].length) : -1
            }

            function ev(t, n, e) {
                var r = qp.exec(n.slice(e, e + 2));
                return r ? (t.S = +r[0], e + r[0].length) : -1
            }

            function rv(t, n, e) {
                var r = qp.exec(n.slice(e, e + 3));
                return r ? (t.L = +r[0], e + r[0].length) : -1
            }

            function iv(t, n, e) {
                var r = qp.exec(n.slice(e, e + 6));
                return r ? (t.L = Math.floor(r[0] / 1e3), e + r[0].length) : -1
            }

            function uv(t, n, e) {
                var r = Dp.exec(n.slice(e, e + 1));
                return r ? e + r[0].length : -1
            }

            function ov(t, n, e) {
                var r = qp.exec(n.slice(e));
                return r ? (t.Q = +r[0], e + r[0].length) : -1
            }

            function av(t, n, e) {
                var r = qp.exec(n.slice(e));
                return r ? (t.Q = 1e3 * +r[0], e + r[0].length) : -1
            }

            function cv(t, n) {
                return jp(t.getDate(), n, 2)
            }

            function fv(t, n) {
                return jp(t.getHours(), n, 2)
            }

            function sv(t, n) {
                return jp(t.getHours() % 12 || 12, n, 2)
            }

            function lv(t, n) {
                return jp(1 + Sd.count(Wd(t), t), n, 3)
            }

            function hv(t, n) {
                return jp(t.getMilliseconds(), n, 3)
            }

            function dv(t, n) {
                return hv(t, n) + "000"
            }

            function pv(t, n) {
                return jp(t.getMonth() + 1, n, 2)
            }

            function vv(t, n) {
                return jp(t.getMinutes(), n, 2)
            }

            function yv(t, n) {
                return jp(t.getSeconds(), n, 2)
            }

            function _v(t) {
                var n = t.getDay();
                return 0 === n ? 7 : n
            }

            function gv(t, n) {
                return jp(Cd.count(Wd(t), t), n, 2)
            }

            function mv(t, n) {
                var e = t.getDay();
                return t = e >= 4 || 0 === e ? Rd(t) : Rd.ceil(t), jp(Rd.count(Wd(t), t) + (4 === Wd(t).getDay()), n, 2)
            }

            function xv(t) {
                return t.getDay()
            }

            function bv(t, n) {
                return jp(zd.count(Wd(t), t), n, 2)
            }

            function wv(t, n) {
                return jp(t.getFullYear() % 100, n, 2)
            }

            function Mv(t, n) {
                return jp(t.getFullYear() % 1e4, n, 4)
            }

            function Tv(t) {
                var n = t.getTimezoneOffset();
                return (n > 0 ? "-" : (n *= -1, "+")) + jp(n / 60 | 0, "0", 2) + jp(n % 60, "0", 2)
            }

            function kv(t, n) {
                return jp(t.getUTCDate(), n, 2)
            }

            function Nv(t, n) {
                return jp(t.getUTCHours(), n, 2)
            }

            function Sv(t, n) {
                return jp(t.getUTCHours() % 12 || 12, n, 2)
            }

            function Ev(t, n) {
                return jp(1 + rp.count(Tp(t), t), n, 3)
            }

            function Av(t, n) {
                return jp(t.getUTCMilliseconds(), n, 3)
            }

            function Cv(t, n) {
                return Av(t, n) + "000"
            }

            function zv(t, n) {
                return jp(t.getUTCMonth() + 1, n, 2)
            }

            function Pv(t, n) {
                return jp(t.getUTCMinutes(), n, 2)
            }

            function Ov(t, n) {
                return jp(t.getUTCSeconds(), n, 2)
            }

            function Rv(t) {
                var n = t.getUTCDay();
                return 0 === n ? 7 : n
            }

            function Lv(t, n) {
                return jp(op.count(Tp(t), t), n, 2)
            }

            function qv(t, n) {
                var e = t.getUTCDay();
                return t = e >= 4 || 0 === e ? sp(t) : sp.ceil(t), jp(sp.count(Tp(t), t) + (4 === Tp(t).getUTCDay()), n, 2)
            }

            function Dv(t) {
                return t.getUTCDay()
            }

            function Uv(t, n) {
                return jp(ap.count(Tp(t), t), n, 2)
            }

            function jv(t, n) {
                return jp(t.getUTCFullYear() % 100, n, 2)
            }

            function Fv(t, n) {
                return jp(t.getUTCFullYear() % 1e4, n, 4)
            }

            function Iv() {
                return "+0000"
            }

            function Yv() {
                return "%"
            }

            function Bv(t) {
                return +t
            }

            function Hv(t) {
                return Math.floor(+t / 1e3)
            }

            function Xv(t) {
                return Cp = Ap(t), zp = Cp.format, Pp = Cp.parse, Op = Cp.utcFormat, Rp = Cp.utcParse, Cp
            }
            Xv({
                dateTime: "%x, %X",
                date: "%-m/%-d/%Y",
                time: "%-I:%M:%S %p",
                periods: ["AM", "PM"],
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            });
            var Vv = Date.prototype.toISOString ? function(t) {
                    return t.toISOString()
                } : Op("%Y-%m-%dT%H:%M:%S.%LZ"),
                $v = +new Date("2000-01-01T00:00:00.000Z") ? function(t) {
                    var n = new Date(t);
                    return isNaN(n) ? null : n
                } : Rp("%Y-%m-%dT%H:%M:%S.%LZ"),
                Wv = 1e3,
                Zv = 60 * Wv,
                Gv = 60 * Zv,
                Qv = 24 * Gv,
                Jv = 7 * Qv,
                Kv = 30 * Qv,
                ty = 365 * Qv;

            function ny(t) {
                return new Date(t)
            }

            function ey(t) {
                return t instanceof Date ? +t : +new Date(+t)
            }

            function ry(t, n, e, i, u, o, a, c, f) {
                var s = Hh(Fh, Kn),
                    l = s.invert,
                    h = s.domain,
                    d = f(".%L"),
                    p = f(":%S"),
                    v = f("%I:%M"),
                    y = f("%I %p"),
                    _ = f("%a %d"),
                    g = f("%b %d"),
                    m = f("%B"),
                    x = f("%Y"),
                    b = [
                        [a, 1, Wv],
                        [a, 5, 5 * Wv],
                        [a, 15, 15 * Wv],
                        [a, 30, 30 * Wv],
                        [o, 1, Zv],
                        [o, 5, 5 * Zv],
                        [o, 15, 15 * Zv],
                        [o, 30, 30 * Zv],
                        [u, 1, Gv],
                        [u, 3, 3 * Gv],
                        [u, 6, 6 * Gv],
                        [u, 12, 12 * Gv],
                        [i, 1, Qv],
                        [i, 2, 2 * Qv],
                        [e, 1, Jv],
                        [n, 1, Kv],
                        [n, 3, 3 * Kv],
                        [t, 1, ty]
                    ];

                function w(r) {
                    return (a(r) < r ? d : o(r) < r ? p : u(r) < r ? v : i(r) < r ? y : n(r) < r ? e(r) < r ? _ : g : t(r) < r ? m : x)(r)
                }

                function M(n, e, i, u) {
                    if (null == n && (n = 10), "number" == typeof n) {
                        var o = Math.abs(i - e) / n,
                            a = Object(r.e)((function(t) {
                                return t[2]
                            })).right(b, o);
                        a === b.length ? (u = Object(r.A)(e / ty, i / ty, n), n = t) : a ? (u = (a = b[o / b[a - 1][2] < b[a][2] / o ? a - 1 : a])[1], n = a[0]) : (u = Math.max(Object(r.A)(e, i, n), 1), n = c)
                    }
                    return null == u ? n : n.every(u)
                }
                return s.invert = function(t) {
                    return new Date(l(t))
                }, s.domain = function(t) {
                    return arguments.length ? h(zh.call(t, ey)) : h().map(ny)
                }, s.ticks = function(t, n) {
                    var e, r = h(),
                        i = r[0],
                        u = r[r.length - 1],
                        o = u < i;
                    return o && (e = i, i = u, u = e), e = (e = M(t, i, u, n)) ? e.range(i, u + 1) : [], o ? e.reverse() : e
                }, s.tickFormat = function(t, n) {
                    return null == n ? w : f(n)
                }, s.nice = function(t, n) {
                    var e = h();
                    return (t = M(t, e[0], e[e.length - 1], n)) ? h(Zh(e, t)) : s
                }, s.copy = function() {
                    return Bh(s, ry(t, n, e, i, u, o, a, c, f))
                }, s
            }
            var iy = function() {
                    return ry(Wd, Xd, Cd, Sd, Td, bd, gd, dd, zp).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)])
                },
                uy = function() {
                    return ry(Tp, bp, op, rp, tp, Qd, gd, dd, Op).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)])
                },
                oy = function(t) {
                    return t.match(/.{6}/g).map((function(t) {
                        return "#" + t
                    }))
                },
                ay = oy("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),
                cy = oy("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"),
                fy = oy("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"),
                sy = oy("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"),
                ly = Ne(Rn(300, .5, 0), Rn(-240, .5, 1)),
                hy = Ne(Rn(-100, .75, .35), Rn(80, 1.5, .8)),
                dy = Ne(Rn(260, .75, .35), Rn(80, 1.5, .8)),
                py = Rn(),
                vy = function(t) {
                    (t < 0 || t > 1) && (t -= Math.floor(t));
                    var n = Math.abs(t - .5);
                    return py.h = 360 * t - 100, py.s = 1.5 - 1.5 * n, py.l = .8 - .9 * n, py + ""
                };

            function yy(t) {
                var n = t.length;
                return function(e) {
                    return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))]
                }
            }
            var _y = yy(oy("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),
                gy = yy(oy("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),
                my = yy(oy("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),
                xy = yy(oy("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));

            function by(t) {
                var n = 0,
                    e = 1,
                    r = !1;

                function i(i) {
                    var u = (i - n) / (e - n);
                    return t(r ? Math.max(0, Math.min(1, u)) : u)
                }
                return i.domain = function(t) {
                    return arguments.length ? (n = +t[0], e = +t[1], i) : [n, e]
                }, i.clamp = function(t) {
                    return arguments.length ? (r = !!t, i) : r
                }, i.interpolator = function(n) {
                    return arguments.length ? (t = n, i) : t
                }, i.copy = function() {
                    return by(t).domain([n, e]).clamp(r)
                }, Vh(i)
            }
            var wy = e(5),
                My = function(t) {
                    return function() {
                        return t
                    }
                };

            function Ty(t) {
                return t[0]
            }

            function ky(t) {
                return t[1]
            }

            function Ny() {
                this._ = null
            }

            function Sy(t) {
                t.U = t.C = t.L = t.R = t.P = t.N = null
            }

            function Ey(t, n) {
                var e = n,
                    r = n.R,
                    i = e.U;
                i ? i.L === e ? i.L = r : i.R = r : t._ = r, r.U = i, e.U = r, e.R = r.L, e.R && (e.R.U = e), r.L = e
            }

            function Ay(t, n) {
                var e = n,
                    r = n.L,
                    i = e.U;
                i ? i.L === e ? i.L = r : i.R = r : t._ = r, r.U = i, e.U = r, e.L = r.R, e.L && (e.L.U = e), r.R = e
            }

            function Cy(t) {
                for (; t.L;) t = t.L;
                return t
            }
            Ny.prototype = {
                constructor: Ny,
                insert: function(t, n) {
                    var e, r, i;
                    if (t) {
                        if (n.P = t, n.N = t.N, t.N && (t.N.P = n), t.N = n, t.R) {
                            for (t = t.R; t.L;) t = t.L;
                            t.L = n
                        } else t.R = n;
                        e = t
                    } else this._ ? (t = Cy(this._), n.P = null, n.N = t, t.P = t.L = n, e = t) : (n.P = n.N = null, this._ = n, e = null);
                    for (n.L = n.R = null, n.U = e, n.C = !0, t = n; e && e.C;) e === (r = e.U).L ? (i = r.R) && i.C ? (e.C = i.C = !1, r.C = !0, t = r) : (t === e.R && (Ey(this, e), e = (t = e).U), e.C = !1, r.C = !0, Ay(this, r)) : (i = r.L) && i.C ? (e.C = i.C = !1, r.C = !0, t = r) : (t === e.L && (Ay(this, e), e = (t = e).U), e.C = !1, r.C = !0, Ey(this, r)), e = t.U;
                    this._.C = !1
                },
                remove: function(t) {
                    t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), t.N = t.P = null;
                    var n, e, r, i = t.U,
                        u = t.L,
                        o = t.R;
                    if (e = u ? o ? Cy(o) : u : o, i ? i.L === t ? i.L = e : i.R = e : this._ = e, u && o ? (r = e.C, e.C = t.C, e.L = u, u.U = e, e !== o ? (i = e.U, e.U = t.U, t = e.R, i.L = t, e.R = o, o.U = e) : (e.U = i, i = e, t = e.R)) : (r = t.C, t = e), t && (t.U = i), !r)
                        if (t && t.C) t.C = !1;
                        else {
                            do {
                                if (t === this._) break;
                                if (t === i.L) {
                                    if ((n = i.R).C && (n.C = !1, i.C = !0, Ey(this, i), n = i.R), n.L && n.L.C || n.R && n.R.C) {
                                        n.R && n.R.C || (n.L.C = !1, n.C = !0, Ay(this, n), n = i.R), n.C = i.C, i.C = n.R.C = !1, Ey(this, i), t = this._;
                                        break
                                    }
                                } else if ((n = i.L).C && (n.C = !1, i.C = !0, Ay(this, i), n = i.L), n.L && n.L.C || n.R && n.R.C) {
                                    n.L && n.L.C || (n.R.C = !1, n.C = !0, Ey(this, n), n = i.L), n.C = i.C, i.C = n.L.C = !1, Ay(this, i), t = this._;
                                    break
                                }
                                n.C = !0, t = i, i = i.U
                            } while (!t.C);
                            t && (t.C = !1)
                        }
                }
            };
            var zy = Ny;

            function Py(t, n, e, r) {
                var i = [null, null],
                    u = t_.push(i) - 1;
                return i.left = t, i.right = n, e && Ry(i, t, n, e), r && Ry(i, n, t, r), Jy[t.index].halfedges.push(u), Jy[n.index].halfedges.push(u), i
            }

            function Oy(t, n, e) {
                var r = [n, e];
                return r.left = t, r
            }

            function Ry(t, n, e, r) {
                t[0] || t[1] ? t.left === e ? t[1] = r : t[0] = r : (t[0] = r, t.left = n, t.right = e)
            }

            function Ly(t, n, e, r, i) {
                var u, o = t[0],
                    a = t[1],
                    c = o[0],
                    f = o[1],
                    s = 0,
                    l = 1,
                    h = a[0] - c,
                    d = a[1] - f;
                if (u = n - c, h || !(u > 0)) {
                    if (u /= h, h < 0) {
                        if (u < s) return;
                        u < l && (l = u)
                    } else if (h > 0) {
                        if (u > l) return;
                        u > s && (s = u)
                    }
                    if (u = r - c, h || !(u < 0)) {
                        if (u /= h, h < 0) {
                            if (u > l) return;
                            u > s && (s = u)
                        } else if (h > 0) {
                            if (u < s) return;
                            u < l && (l = u)
                        }
                        if (u = e - f, d || !(u > 0)) {
                            if (u /= d, d < 0) {
                                if (u < s) return;
                                u < l && (l = u)
                            } else if (d > 0) {
                                if (u > l) return;
                                u > s && (s = u)
                            }
                            if (u = i - f, d || !(u < 0)) {
                                if (u /= d, d < 0) {
                                    if (u > l) return;
                                    u > s && (s = u)
                                } else if (d > 0) {
                                    if (u < s) return;
                                    u < l && (l = u)
                                }
                                return !(s > 0 || l < 1) || (s > 0 && (t[0] = [c + s * h, f + s * d]), l < 1 && (t[1] = [c + l * h, f + l * d]), !0)
                            }
                        }
                    }
                }
            }

            function qy(t, n, e, r, i) {
                var u = t[1];
                if (u) return !0;
                var o, a, c = t[0],
                    f = t.left,
                    s = t.right,
                    l = f[0],
                    h = f[1],
                    d = s[0],
                    p = s[1],
                    v = (l + d) / 2,
                    y = (h + p) / 2;
                if (p === h) {
                    if (v < n || v >= r) return;
                    if (l > d) {
                        if (c) {
                            if (c[1] >= i) return
                        } else c = [v, e];
                        u = [v, i]
                    } else {
                        if (c) {
                            if (c[1] < e) return
                        } else c = [v, i];
                        u = [v, e]
                    }
                } else if (a = y - (o = (l - d) / (p - h)) * v, o < -1 || o > 1)
                    if (l > d) {
                        if (c) {
                            if (c[1] >= i) return
                        } else c = [(e - a) / o, e];
                        u = [(i - a) / o, i]
                    } else {
                        if (c) {
                            if (c[1] < e) return
                        } else c = [(i - a) / o, i];
                        u = [(e - a) / o, e]
                    }
                else if (h < p) {
                    if (c) {
                        if (c[0] >= r) return
                    } else c = [n, o * n + a];
                    u = [r, o * r + a]
                } else {
                    if (c) {
                        if (c[0] < n) return
                    } else c = [r, o * r + a];
                    u = [n, o * n + a]
                }
                return t[0] = c, t[1] = u, !0
            }

            function Dy(t, n) {
                var e = t.site,
                    r = n.left,
                    i = n.right;
                return e === i && (i = r, r = e), i ? Math.atan2(i[1] - r[1], i[0] - r[0]) : (e === r ? (r = n[1], i = n[0]) : (r = n[0], i = n[1]), Math.atan2(r[0] - i[0], i[1] - r[1]))
            }

            function Uy(t, n) {
                return n[+(n.left !== t.site)]
            }

            function jy(t, n) {
                return n[+(n.left === t.site)]
            }
            var Fy, Iy = [];

            function Yy(t) {
                var n = t.P,
                    e = t.N;
                if (n && e) {
                    var r = n.site,
                        i = t.site,
                        u = e.site;
                    if (r !== u) {
                        var o = i[0],
                            a = i[1],
                            c = r[0] - o,
                            f = r[1] - a,
                            s = u[0] - o,
                            l = u[1] - a,
                            h = 2 * (c * l - f * s);
                        if (!(h >= -e_)) {
                            var d = c * c + f * f,
                                p = s * s + l * l,
                                v = (l * d - f * p) / h,
                                y = (c * p - s * d) / h,
                                _ = Iy.pop() || new function() {
                                    Sy(this), this.x = this.y = this.arc = this.site = this.cy = null
                                };
                            _.arc = t, _.site = i, _.x = v + o, _.y = (_.cy = y + a) + Math.sqrt(v * v + y * y), t.circle = _;
                            for (var g = null, m = Ky._; m;)
                                if (_.y < m.y || _.y === m.y && _.x <= m.x) {
                                    if (!m.L) {
                                        g = m.P;
                                        break
                                    }
                                    m = m.L
                                } else {
                                    if (!m.R) {
                                        g = m;
                                        break
                                    }
                                    m = m.R
                                } Ky.insert(g, _), g || (Fy = _)
                        }
                    }
                }
            }

            function By(t) {
                var n = t.circle;
                n && (n.P || (Fy = n.N), Ky.remove(n), Iy.push(n), Sy(n), t.circle = null)
            }
            var Hy = [];

            function Xy(t) {
                var n = Hy.pop() || new function() {
                    Sy(this), this.edge = this.site = this.circle = null
                };
                return n.site = t, n
            }

            function Vy(t) {
                By(t), Qy.remove(t), Hy.push(t), Sy(t)
            }

            function $y(t) {
                var n = t.circle,
                    e = n.x,
                    r = n.cy,
                    i = [e, r],
                    u = t.P,
                    o = t.N,
                    a = [t];
                Vy(t);
                for (var c = u; c.circle && Math.abs(e - c.circle.x) < n_ && Math.abs(r - c.circle.cy) < n_;) u = c.P, a.unshift(c), Vy(c), c = u;
                a.unshift(c), By(c);
                for (var f = o; f.circle && Math.abs(e - f.circle.x) < n_ && Math.abs(r - f.circle.cy) < n_;) o = f.N, a.push(f), Vy(f), f = o;
                a.push(f), By(f);
                var s, l = a.length;
                for (s = 1; s < l; ++s) f = a[s], c = a[s - 1], Ry(f.edge, c.site, f.site, i);
                c = a[0], (f = a[l - 1]).edge = Py(c.site, f.site, null, i), Yy(c), Yy(f)
            }

            function Wy(t) {
                for (var n, e, r, i, u = t[0], o = t[1], a = Qy._; a;)
                    if ((r = Zy(a, o) - u) > n_) a = a.L;
                    else {
                        if (!((i = u - Gy(a, o)) > n_)) {
                            r > -n_ ? (n = a.P, e = a) : i > -n_ ? (n = a, e = a.N) : n = e = a;
                            break
                        }
                        if (!a.R) {
                            n = a;
                            break
                        }
                        a = a.R
                    }!
                function(t) {
                    Jy[t.index] = {
                        site: t,
                        halfedges: []
                    }
                }(t);
                var c = Xy(t);
                if (Qy.insert(n, c), n || e) {
                    if (n === e) return By(n), e = Xy(n.site), Qy.insert(c, e), c.edge = e.edge = Py(n.site, c.site), Yy(n), void Yy(e);
                    if (e) {
                        By(n), By(e);
                        var f = n.site,
                            s = f[0],
                            l = f[1],
                            h = t[0] - s,
                            d = t[1] - l,
                            p = e.site,
                            v = p[0] - s,
                            y = p[1] - l,
                            _ = 2 * (h * y - d * v),
                            g = h * h + d * d,
                            m = v * v + y * y,
                            x = [(y * g - d * m) / _ + s, (h * m - v * g) / _ + l];
                        Ry(e.edge, f, p, x), c.edge = Py(f, t, null, x), e.edge = Py(t, p, null, x), Yy(n), Yy(e)
                    } else c.edge = Py(n.site, c.site)
                }
            }

            function Zy(t, n) {
                var e = t.site,
                    r = e[0],
                    i = e[1],
                    u = i - n;
                if (!u) return r;
                var o = t.P;
                if (!o) return -1 / 0;
                var a = (e = o.site)[0],
                    c = e[1],
                    f = c - n;
                if (!f) return a;
                var s = a - r,
                    l = 1 / u - 1 / f,
                    h = s / f;
                return l ? (-h + Math.sqrt(h * h - 2 * l * (s * s / (-2 * f) - c + f / 2 + i - u / 2))) / l + r : (r + a) / 2
            }

            function Gy(t, n) {
                var e = t.N;
                if (e) return Zy(e, n);
                var r = t.site;
                return r[1] === n ? r[0] : 1 / 0
            }
            var Qy, Jy, Ky, t_, n_ = 1e-6,
                e_ = 1e-12;

            function r_(t, n) {
                return n[1] - t[1] || n[0] - t[0]
            }

            function i_(t, n) {
                var e, r, i, u = t.sort(r_).pop();
                for (t_ = [], Jy = new Array(t.length), Qy = new zy, Ky = new zy;;)
                    if (i = Fy, u && (!i || u[1] < i.y || u[1] === i.y && u[0] < i.x)) u[0] === e && u[1] === r || (Wy(u), e = u[0], r = u[1]), u = t.pop();
                    else {
                        if (!i) break;
                        $y(i.arc)
                    } if (function() {
                        for (var t, n, e, r, i = 0, u = Jy.length; i < u; ++i)
                            if ((t = Jy[i]) && (r = (n = t.halfedges).length)) {
                                var o = new Array(r),
                                    a = new Array(r);
                                for (e = 0; e < r; ++e) o[e] = e, a[e] = Dy(t, t_[n[e]]);
                                for (o.sort((function(t, n) {
                                        return a[n] - a[t]
                                    })), e = 0; e < r; ++e) a[e] = n[o[e]];
                                for (e = 0; e < r; ++e) n[e] = a[e]
                            }
                    }(), n) {
                    var o = +n[0][0],
                        a = +n[0][1],
                        c = +n[1][0],
                        f = +n[1][1];
                    ! function(t, n, e, r) {
                        for (var i, u = t_.length; u--;) qy(i = t_[u], t, n, e, r) && Ly(i, t, n, e, r) && (Math.abs(i[0][0] - i[1][0]) > n_ || Math.abs(i[0][1] - i[1][1]) > n_) || delete t_[u]
                    }(o, a, c, f),
                    function(t, n, e, r) {
                        var i, u, o, a, c, f, s, l, h, d, p, v, y = Jy.length,
                            _ = !0;
                        for (i = 0; i < y; ++i)
                            if (u = Jy[i]) {
                                for (o = u.site, a = (c = u.halfedges).length; a--;) t_[c[a]] || c.splice(a, 1);
                                for (a = 0, f = c.length; a < f;) p = (d = jy(u, t_[c[a]]))[0], v = d[1], l = (s = Uy(u, t_[c[++a % f]]))[0], h = s[1], (Math.abs(p - l) > n_ || Math.abs(v - h) > n_) && (c.splice(a, 0, t_.push(Oy(o, d, Math.abs(p - t) < n_ && r - v > n_ ? [t, Math.abs(l - t) < n_ ? h : r] : Math.abs(v - r) < n_ && e - p > n_ ? [Math.abs(h - r) < n_ ? l : e, r] : Math.abs(p - e) < n_ && v - n > n_ ? [e, Math.abs(l - e) < n_ ? h : n] : Math.abs(v - n) < n_ && p - t > n_ ? [Math.abs(h - n) < n_ ? l : t, n] : null)) - 1), ++f);
                                f && (_ = !1)
                            } if (_) {
                            var g, m, x, b = 1 / 0;
                            for (i = 0, _ = null; i < y; ++i)(u = Jy[i]) && (x = (g = (o = u.site)[0] - t) * g + (m = o[1] - n) * m) < b && (b = x, _ = u);
                            if (_) {
                                var w = [t, n],
                                    M = [t, r],
                                    T = [e, r],
                                    k = [e, n];
                                _.halfedges.push(t_.push(Oy(o = _.site, w, M)) - 1, t_.push(Oy(o, M, T)) - 1, t_.push(Oy(o, T, k)) - 1, t_.push(Oy(o, k, w)) - 1)
                            }
                        }
                        for (i = 0; i < y; ++i)(u = Jy[i]) && (u.halfedges.length || delete Jy[i])
                    }(o, a, c, f)
                }
                this.edges = t_, this.cells = Jy, Qy = Ky = t_ = Jy = null
            }
            i_.prototype = {
                constructor: i_,
                polygons: function() {
                    var t = this.edges;
                    return this.cells.map((function(n) {
                        var e = n.halfedges.map((function(e) {
                            return Uy(n, t[e])
                        }));
                        return e.data = n.site.data, e
                    }))
                },
                triangles: function() {
                    var t = [],
                        n = this.edges;
                    return this.cells.forEach((function(e, r) {
                        if (u = (i = e.halfedges).length)
                            for (var i, u, o, a, c, f, s = e.site, l = -1, h = n[i[u - 1]], d = h.left === s ? h.right : h.left; ++l < u;) o = d, d = (h = n[i[l]]).left === s ? h.right : h.left, o && d && r < o.index && r < d.index && (c = o, f = d, ((a = s)[0] - f[0]) * (c[1] - a[1]) - (a[0] - c[0]) * (f[1] - a[1]) < 0) && t.push([s.data, o.data, d.data])
                    })), t
                },
                links: function() {
                    return this.edges.filter((function(t) {
                        return t.right
                    })).map((function(t) {
                        return {
                            source: t.left.data,
                            target: t.right.data
                        }
                    }))
                },
                find: function(t, n, e) {
                    for (var r, i, u = this, o = u._found || 0, a = u.cells.length; !(i = u.cells[o]);)
                        if (++o >= a) return null;
                    var c = t - i.site[0],
                        f = n - i.site[1],
                        s = c * c + f * f;
                    do {
                        i = u.cells[r = o], o = null, i.halfedges.forEach((function(e) {
                            var r = u.edges[e],
                                a = r.left;
                            if (a !== i.site && a || (a = r.right)) {
                                var c = t - a[0],
                                    f = n - a[1],
                                    l = c * c + f * f;
                                l < s && (s = l, o = a.index)
                            }
                        }))
                    } while (null !== o);
                    return u._found = r, null == e || s <= e * e ? i.site : null
                }
            };
            var u_ = function() {
                    var t = Ty,
                        n = ky,
                        e = null;

                    function r(r) {
                        return new i_(r.map((function(e, i) {
                            var u = [Math.round(t(e, i, r) / n_) * n_, Math.round(n(e, i, r) / n_) * n_];
                            return u.index = i, u.data = e, u
                        })), e)
                    }
                    return r.polygons = function(t) {
                        return r(t).polygons()
                    }, r.links = function(t) {
                        return r(t).links()
                    }, r.triangles = function(t) {
                        return r(t).triangles()
                    }, r.x = function(n) {
                        return arguments.length ? (t = "function" == typeof n ? n : My(+n), r) : t
                    }, r.y = function(t) {
                        return arguments.length ? (n = "function" == typeof t ? t : My(+t), r) : n
                    }, r.extent = function(t) {
                        return arguments.length ? (e = null == t ? null : [
                            [+t[0][0], +t[0][1]],
                            [+t[1][0], +t[1][1]]
                        ], r) : e && [
                            [e[0][0], e[0][1]],
                            [e[1][0], e[1][1]]
                        ]
                    }, r.size = function(t) {
                        return arguments.length ? (e = null == t ? null : [
                            [0, 0],
                            [+t[0], +t[1]]
                        ], r) : e && [e[1][0] - e[0][0], e[1][1] - e[0][1]]
                    }, r
                },
                o_ = function(t) {
                    return function() {
                        return t
                    }
                };

            function a_(t, n, e) {
                this.k = t, this.x = n, this.y = e
            }
            a_.prototype = {
                constructor: a_,
                scale: function(t) {
                    return 1 === t ? this : new a_(this.k * t, this.x, this.y)
                },
                translate: function(t, n) {
                    return 0 === t & 0 === n ? this : new a_(this.k, this.x + this.k * t, this.y + this.k * n)
                },
                apply: function(t) {
                    return [t[0] * this.k + this.x, t[1] * this.k + this.y]
                },
                applyX: function(t) {
                    return t * this.k + this.x
                },
                applyY: function(t) {
                    return t * this.k + this.y
                },
                invert: function(t) {
                    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k]
                },
                invertX: function(t) {
                    return (t - this.x) / this.k
                },
                invertY: function(t) {
                    return (t - this.y) / this.k
                },
                rescaleX: function(t) {
                    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t))
                },
                rescaleY: function(t) {
                    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t))
                },
                toString: function() {
                    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
                }
            };
            var c_ = new a_(1, 0, 0);

            function f_(t) {
                return t.__zoom || c_
            }

            function s_() {
                ut.stopImmediatePropagation()
            }
            f_.prototype = a_.prototype;
            var l_ = function() {
                ut.preventDefault(), ut.stopImmediatePropagation()
            };

            function h_() {
                return !ut.button
            }

            function d_() {
                var t, n, e = this;
                return e instanceof SVGElement ? (t = (e = e.ownerSVGElement || e).width.baseVal.value, n = e.height.baseVal.value) : (t = e.clientWidth, n = e.clientHeight), [
                    [0, 0],
                    [t, n]
                ]
            }

            function p_() {
                return this.__zoom || c_
            }

            function v_() {
                return -ut.deltaY * (ut.deltaMode ? 120 : 1) / 500
            }

            function y_() {
                return "ontouchstart" in this
            }

            function __(t, n, e) {
                var r = t.invertX(n[0][0]) - e[0][0],
                    i = t.invertX(n[1][0]) - e[1][0],
                    u = t.invertY(n[0][1]) - e[0][1],
                    o = t.invertY(n[1][1]) - e[1][1];
                return t.translate(i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i), o > u ? (u + o) / 2 : Math.min(0, u) || Math.max(0, o))
            }
            var g_ = function() {
                var t, n, e = h_,
                    r = d_,
                    i = __,
                    u = v_,
                    o = y_,
                    a = [0, 1 / 0],
                    c = [
                        [-1 / 0, -1 / 0],
                        [1 / 0, 1 / 0]
                    ],
                    f = 250,
                    s = pe,
                    l = [],
                    h = T("start", "zoom", "end"),
                    d = 500,
                    p = 150,
                    v = 0;

                function y(t) {
                    t.property("__zoom", p_).on("wheel.zoom", M).on("mousedown.zoom", k).on("dblclick.zoom", N).filter(o).on("touchstart.zoom", S).on("touchmove.zoom", E).on("touchend.zoom touchcancel.zoom", A).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
                }

                function _(t, n) {
                    return (n = Math.max(a[0], Math.min(a[1], n))) === t.k ? t : new a_(n, t.x, t.y)
                }

                function g(t, n, e) {
                    var r = n[0] - e[0] * t.k,
                        i = n[1] - e[1] * t.k;
                    return r === t.x && i === t.y ? t : new a_(t.k, r, i)
                }

                function m(t) {
                    return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2]
                }

                function x(t, n, e) {
                    t.on("start.zoom", (function() {
                        b(this, arguments).start()
                    })).on("interrupt.zoom end.zoom", (function() {
                        b(this, arguments).end()
                    })).tween("zoom", (function() {
                        var t = arguments,
                            i = b(this, t),
                            u = r.apply(this, t),
                            o = e || m(u),
                            a = Math.max(u[1][0] - u[0][0], u[1][1] - u[0][1]),
                            c = this.__zoom,
                            f = "function" == typeof n ? n.apply(this, t) : n,
                            l = s(c.invert(o).concat(a / c.k), f.invert(o).concat(a / f.k));
                        return function(t) {
                            if (1 === t) t = f;
                            else {
                                var n = l(t),
                                    e = a / n[2];
                                t = new a_(e, o[0] - n[0] * e, o[1] - n[1] * e)
                            }
                            i.zoom(null, t)
                        }
                    }))
                }

                function b(t, n) {
                    for (var e, r = 0, i = l.length; r < i; ++r)
                        if ((e = l[r]).that === t) return e;
                    return new w(t, n)
                }

                function w(t, n) {
                    this.that = t, this.args = n, this.index = -1, this.active = 0, this.extent = r.apply(t, n)
                }

                function M() {
                    if (e.apply(this, arguments)) {
                        var t = b(this, arguments),
                            n = this.__zoom,
                            r = Math.max(a[0], Math.min(a[1], n.k * Math.pow(2, u.apply(this, arguments)))),
                            o = Mt(this);
                        if (t.wheel) t.mouse[0][0] === o[0] && t.mouse[0][1] === o[1] || (t.mouse[1] = n.invert(t.mouse[0] = o)), clearTimeout(t.wheel);
                        else {
                            if (n.k === r) return;
                            t.mouse = [o, n.invert(o)], or(this), t.start()
                        }
                        l_(), t.wheel = setTimeout((function() {
                            t.wheel = null, t.end()
                        }), p), t.zoom("mouse", i(g(_(n, r), t.mouse[0], t.mouse[1]), t.extent, c))
                    }
                }

                function k() {
                    if (!n && e.apply(this, arguments)) {
                        var t = b(this, arguments),
                            r = yt(ut.view).on("mousemove.zoom", (function() {
                                if (l_(), !t.moved) {
                                    var n = ut.clientX - o,
                                        e = ut.clientY - a;
                                    t.moved = n * n + e * e > v
                                }
                                t.zoom("mouse", i(g(t.that.__zoom, t.mouse[0] = Mt(t.that), t.mouse[1]), t.extent, c))
                            }), !0).on("mouseup.zoom", (function() {
                                r.on("mousemove.zoom mouseup.zoom", null), Ct(ut.view, t.moved), l_(), t.end()
                            }), !0),
                            u = Mt(this),
                            o = ut.clientX,
                            a = ut.clientY;
                        At(ut.view), s_(), t.mouse = [u, this.__zoom.invert(u)], or(this), t.start()
                    }
                }

                function N() {
                    if (e.apply(this, arguments)) {
                        var t = this.__zoom,
                            n = Mt(this),
                            u = t.invert(n),
                            o = t.k * (ut.shiftKey ? .5 : 2),
                            a = i(g(_(t, o), n, u), r.apply(this, arguments), c);
                        l_(), f > 0 ? yt(this).transition().duration(f).call(x, a, n) : yt(this).call(y.transform, a)
                    }
                }

                function S() {
                    if (e.apply(this, arguments)) {
                        var n, r, i, u, o = b(this, arguments),
                            a = ut.changedTouches,
                            c = a.length;
                        for (s_(), r = 0; r < c; ++r) i = a[r], u = [u = kt(this, a, i.identifier), this.__zoom.invert(u), i.identifier], o.touch0 ? o.touch1 || (o.touch1 = u) : (o.touch0 = u, n = !0);
                        if (t && (t = clearTimeout(t), !o.touch1)) return o.end(), void((u = yt(this).on("dblclick.zoom")) && u.apply(this, arguments));
                        n && (t = setTimeout((function() {
                            t = null
                        }), d), or(this), o.start())
                    }
                }

                function E() {
                    var n, e, r, u, o = b(this, arguments),
                        a = ut.changedTouches,
                        f = a.length;
                    for (l_(), t && (t = clearTimeout(t)), n = 0; n < f; ++n) e = a[n], r = kt(this, a, e.identifier), o.touch0 && o.touch0[2] === e.identifier ? o.touch0[0] = r : o.touch1 && o.touch1[2] === e.identifier && (o.touch1[0] = r);
                    if (e = o.that.__zoom, o.touch1) {
                        var s = o.touch0[0],
                            l = o.touch0[1],
                            h = o.touch1[0],
                            d = o.touch1[1],
                            p = (p = h[0] - s[0]) * p + (p = h[1] - s[1]) * p,
                            v = (v = d[0] - l[0]) * v + (v = d[1] - l[1]) * v;
                        e = _(e, Math.sqrt(p / v)), r = [(s[0] + h[0]) / 2, (s[1] + h[1]) / 2], u = [(l[0] + d[0]) / 2, (l[1] + d[1]) / 2]
                    } else {
                        if (!o.touch0) return;
                        r = o.touch0[0], u = o.touch0[1]
                    }
                    o.zoom("touch", i(g(e, r, u), o.extent, c))
                }

                function A() {
                    var t, e, r = b(this, arguments),
                        i = ut.changedTouches,
                        u = i.length;
                    for (s_(), n && clearTimeout(n), n = setTimeout((function() {
                            n = null
                        }), d), t = 0; t < u; ++t) e = i[t], r.touch0 && r.touch0[2] === e.identifier ? delete r.touch0 : r.touch1 && r.touch1[2] === e.identifier && delete r.touch1;
                    r.touch1 && !r.touch0 && (r.touch0 = r.touch1, delete r.touch1), r.touch0 ? r.touch0[1] = this.__zoom.invert(r.touch0[0]) : r.end()
                }
                return y.transform = function(t, n) {
                    var e = t.selection ? t.selection() : t;
                    e.property("__zoom", p_), t !== e ? x(t, n) : e.interrupt().each((function() {
                        b(this, arguments).start().zoom(null, "function" == typeof n ? n.apply(this, arguments) : n).end()
                    }))
                }, y.scaleBy = function(t, n) {
                    y.scaleTo(t, (function() {
                        return this.__zoom.k * ("function" == typeof n ? n.apply(this, arguments) : n)
                    }))
                }, y.scaleTo = function(t, n) {
                    y.transform(t, (function() {
                        var t = r.apply(this, arguments),
                            e = this.__zoom,
                            u = m(t),
                            o = e.invert(u),
                            a = "function" == typeof n ? n.apply(this, arguments) : n;
                        return i(g(_(e, a), u, o), t, c)
                    }))
                }, y.translateBy = function(t, n, e) {
                    y.transform(t, (function() {
                        return i(this.__zoom.translate("function" == typeof n ? n.apply(this, arguments) : n, "function" == typeof e ? e.apply(this, arguments) : e), r.apply(this, arguments), c)
                    }))
                }, y.translateTo = function(t, n, e) {
                    y.transform(t, (function() {
                        var t = r.apply(this, arguments),
                            u = this.__zoom,
                            o = m(t);
                        return i(c_.translate(o[0], o[1]).scale(u.k).translate("function" == typeof n ? -n.apply(this, arguments) : -n, "function" == typeof e ? -e.apply(this, arguments) : -e), t, c)
                    }))
                }, w.prototype = {
                    start: function() {
                        return 1 == ++this.active && (this.index = l.push(this) - 1, this.emit("start")), this
                    },
                    zoom: function(t, n) {
                        return this.mouse && "mouse" !== t && (this.mouse[1] = n.invert(this.mouse[0])), this.touch0 && "touch" !== t && (this.touch0[1] = n.invert(this.touch0[0])), this.touch1 && "touch" !== t && (this.touch1[1] = n.invert(this.touch1[0])), this.that.__zoom = n, this.emit("zoom"), this
                    },
                    end: function() {
                        return 0 == --this.active && (l.splice(this.index, 1), this.index = -1, this.emit("end")), this
                    },
                    emit: function(t) {
                        st(new function(t, n, e) {
                            this.target = t, this.type = n, this.transform = e
                        }(y, t, this.that.__zoom), h.apply, h, [t, this.that, this.args])
                    }
                }, y.wheelDelta = function(t) {
                    return arguments.length ? (u = "function" == typeof t ? t : o_(+t), y) : u
                }, y.filter = function(t) {
                    return arguments.length ? (e = "function" == typeof t ? t : o_(!!t), y) : e
                }, y.touchable = function(t) {
                    return arguments.length ? (o = "function" == typeof t ? t : o_(!!t), y) : o
                }, y.extent = function(t) {
                    return arguments.length ? (r = "function" == typeof t ? t : o_([
                        [+t[0][0], +t[0][1]],
                        [+t[1][0], +t[1][1]]
                    ]), y) : r
                }, y.scaleExtent = function(t) {
                    return arguments.length ? (a[0] = +t[0], a[1] = +t[1], y) : [a[0], a[1]]
                }, y.translateExtent = function(t) {
                    return arguments.length ? (c[0][0] = +t[0][0], c[1][0] = +t[1][0], c[0][1] = +t[0][1], c[1][1] = +t[1][1], y) : [
                        [c[0][0], c[0][1]],
                        [c[1][0], c[1][1]]
                    ]
                }, y.constrain = function(t) {
                    return arguments.length ? (i = t, y) : i
                }, y.duration = function(t) {
                    return arguments.length ? (f = +t, y) : f
                }, y.interpolate = function(t) {
                    return arguments.length ? (s = t, y) : s
                }, y.on = function() {
                    var t = h.on.apply(h, arguments);
                    return t === h ? y : t
                }, y.clickDistance = function(t) {
                    return arguments.length ? (v = (t = +t) * t, y) : Math.sqrt(v)
                }, y
            };
            e.d(n, "version", (function() {
                return "4.13.0"
            })), e.d(n, "bisect", (function() {
                return r.b
            })), e.d(n, "bisectRight", (function() {
                return r.d
            })), e.d(n, "bisectLeft", (function() {
                return r.c
            })), e.d(n, "ascending", (function() {
                return r.a
            })), e.d(n, "bisector", (function() {
                return r.e
            })), e.d(n, "cross", (function() {
                return r.f
            })), e.d(n, "descending", (function() {
                return r.g
            })), e.d(n, "deviation", (function() {
                return r.h
            })), e.d(n, "extent", (function() {
                return r.i
            })), e.d(n, "histogram", (function() {
                return r.j
            })), e.d(n, "thresholdFreedmanDiaconis", (function() {
                return r.w
            })), e.d(n, "thresholdScott", (function() {
                return r.x
            })), e.d(n, "thresholdSturges", (function() {
                return r.y
            })), e.d(n, "max", (function() {
                return r.k
            })), e.d(n, "mean", (function() {
                return r.l
            })), e.d(n, "median", (function() {
                return r.m
            })), e.d(n, "merge", (function() {
                return r.n
            })), e.d(n, "min", (function() {
                return r.o
            })), e.d(n, "pairs", (function() {
                return r.p
            })), e.d(n, "permute", (function() {
                return r.q
            })), e.d(n, "quantile", (function() {
                return r.r
            })), e.d(n, "range", (function() {
                return r.s
            })), e.d(n, "scan", (function() {
                return r.t
            })), e.d(n, "shuffle", (function() {
                return r.u
            })), e.d(n, "sum", (function() {
                return r.v
            })), e.d(n, "ticks", (function() {
                return r.B
            })), e.d(n, "tickIncrement", (function() {
                return r.z
            })), e.d(n, "tickStep", (function() {
                return r.A
            })), e.d(n, "transpose", (function() {
                return r.C
            })), e.d(n, "variance", (function() {
                return r.D
            })), e.d(n, "zip", (function() {
                return r.E
            })), e.d(n, "axisTop", (function() {
                return v
            })), e.d(n, "axisRight", (function() {
                return y
            })), e.d(n, "axisBottom", (function() {
                return _
            })), e.d(n, "axisLeft", (function() {
                return g
            })), e.d(n, "brush", (function() {
                return Ci
            })), e.d(n, "brushX", (function() {
                return Ei
            })), e.d(n, "brushY", (function() {
                return Ai
            })), e.d(n, "brushSelection", (function() {
                return Si
            })), e.d(n, "chord", (function() {
                return Ui
            })), e.d(n, "ribbon", (function() {
                return $i
            })), e.d(n, "nest", (function() {
                return Wi.d
            })), e.d(n, "set", (function() {
                return Wi.e
            })), e.d(n, "map", (function() {
                return Wi.c
            })), e.d(n, "keys", (function() {
                return Wi.b
            })), e.d(n, "values", (function() {
                return Wi.f
            })), e.d(n, "entries", (function() {
                return Wi.a
            })), e.d(n, "color", (function() {
                return Kt
            })), e.d(n, "rgb", (function() {
                return rn
            })), e.d(n, "hsl", (function() {
                return an
            })), e.d(n, "lab", (function() {
                return xn
            })), e.d(n, "hcl", (function() {
                return Nn
            })), e.d(n, "cubehelix", (function() {
                return Rn
            })), e.d(n, "dispatch", (function() {
                return T
            })), e.d(n, "drag", (function() {
                return Dt
            })), e.d(n, "dragDisable", (function() {
                return At
            })), e.d(n, "dragEnable", (function() {
                return Ct
            })), e.d(n, "dsvFormat", (function() {
                return nu
            })), e.d(n, "csvParse", (function() {
                return ru
            })), e.d(n, "csvParseRows", (function() {
                return iu
            })), e.d(n, "csvFormat", (function() {
                return uu
            })), e.d(n, "csvFormatRows", (function() {
                return ou
            })), e.d(n, "tsvParse", (function() {
                return cu
            })), e.d(n, "tsvParseRows", (function() {
                return fu
            })), e.d(n, "tsvFormat", (function() {
                return su
            })), e.d(n, "tsvFormatRows", (function() {
                return lu
            })), e.d(n, "easeLinear", (function() {
                return vr
            })), e.d(n, "easeQuad", (function() {
                return gr
            })), e.d(n, "easeQuadIn", (function() {
                return yr
            })), e.d(n, "easeQuadOut", (function() {
                return _r
            })), e.d(n, "easeQuadInOut", (function() {
                return gr
            })), e.d(n, "easeCubic", (function() {
                return br
            })), e.d(n, "easeCubicIn", (function() {
                return mr
            })), e.d(n, "easeCubicOut", (function() {
                return xr
            })), e.d(n, "easeCubicInOut", (function() {
                return br
            })), e.d(n, "easePoly", (function() {
                return Tr
            })), e.d(n, "easePolyIn", (function() {
                return wr
            })), e.d(n, "easePolyOut", (function() {
                return Mr
            })), e.d(n, "easePolyInOut", (function() {
                return Tr
            })), e.d(n, "easeSin", (function() {
                return Ar
            })), e.d(n, "easeSinIn", (function() {
                return Sr
            })), e.d(n, "easeSinOut", (function() {
                return Er
            })), e.d(n, "easeSinInOut", (function() {
                return Ar
            })), e.d(n, "easeExp", (function() {
                return Pr
            })), e.d(n, "easeExpIn", (function() {
                return Cr
            })), e.d(n, "easeExpOut", (function() {
                return zr
            })), e.d(n, "easeExpInOut", (function() {
                return Pr
            })), e.d(n, "easeCircle", (function() {
                return Lr
            })), e.d(n, "easeCircleIn", (function() {
                return Or
            })), e.d(n, "easeCircleOut", (function() {
                return Rr
            })), e.d(n, "easeCircleInOut", (function() {
                return Lr
            })), e.d(n, "easeBounce", (function() {
                return $r
            })), e.d(n, "easeBounceIn", (function() {
                return Vr
            })), e.d(n, "easeBounceOut", (function() {
                return $r
            })), e.d(n, "easeBounceInOut", (function() {
                return Wr
            })), e.d(n, "easeBack", (function() {
                return Qr
            })), e.d(n, "easeBackIn", (function() {
                return Zr
            })), e.d(n, "easeBackOut", (function() {
                return Gr
            })), e.d(n, "easeBackInOut", (function() {
                return Qr
            })), e.d(n, "easeElastic", (function() {
                return ti
            })), e.d(n, "easeElasticIn", (function() {
                return Kr
            })), e.d(n, "easeElasticOut", (function() {
                return ti
            })), e.d(n, "easeElasticInOut", (function() {
                return ni
            })), e.d(n, "forceCenter", (function() {
                return hu
            })), e.d(n, "forceCollide", (function() {
                return ku
            })), e.d(n, "forceLink", (function() {
                return Eu
            })), e.d(n, "forceManyBody", (function() {
                return Lu
            })), e.d(n, "forceRadial", (function() {
                return qu
            })), e.d(n, "forceSimulation", (function() {
                return Ru
            })), e.d(n, "forceX", (function() {
                return Du
            })), e.d(n, "forceY", (function() {
                return Uu
            })), e.d(n, "formatDefaultLocale", (function() {
                return Ju
            })), e.d(n, "format", (function() {
                return $u
            })), e.d(n, "formatPrefix", (function() {
                return Wu
            })), e.d(n, "formatLocale", (function() {
                return Qu
            })), e.d(n, "formatSpecifier", (function() {
                return Hu
            })), e.d(n, "precisionFixed", (function() {
                return Ku
            })), e.d(n, "precisionPrefix", (function() {
                return to
            })), e.d(n, "precisionRound", (function() {
                return no
            })), e.d(n, "geoArea", (function() {
                return Wo
            })), e.d(n, "geoBounds", (function() {
                return Fa
            })), e.d(n, "geoCentroid", (function() {
                return Ja
            })), e.d(n, "geoCircle", (function() {
                return fc
            })), e.d(n, "geoClipAntimeridian", (function() {
                return xc
            })), e.d(n, "geoClipCircle", (function() {
                return bc
            })), e.d(n, "geoClipExtent", (function() {
                return Ac
            })), e.d(n, "geoClipRectangle", (function() {
                return kc
            })), e.d(n, "geoContains", (function() {
                return $c
            })), e.d(n, "geoDistance", (function() {
                return Uc
            })), e.d(n, "geoGraticule", (function() {
                return Gc
            })), e.d(n, "geoGraticule10", (function() {
                return Qc
            })), e.d(n, "geoInterpolate", (function() {
                return ef
            })), e.d(n, "geoLength", (function() {
                return Lc
            })), e.d(n, "geoPath", (function() {
                return ns
            })), e.d(n, "geoAlbers", (function() {
                return ms
            })), e.d(n, "geoAlbersUsa", (function() {
                return xs
            })), e.d(n, "geoAzimuthalEqualArea", (function() {
                return Ts
            })), e.d(n, "geoAzimuthalEqualAreaRaw", (function() {
                return Ms
            })), e.d(n, "geoAzimuthalEquidistant", (function() {
                return Ns
            })), e.d(n, "geoAzimuthalEquidistantRaw", (function() {
                return ks
            })), e.d(n, "geoConicConformal", (function() {
                return Ps
            })), e.d(n, "geoConicConformalRaw", (function() {
                return zs
            })), e.d(n, "geoConicEqualArea", (function() {
                return gs
            })), e.d(n, "geoConicEqualAreaRaw", (function() {
                return _s
            })), e.d(n, "geoConicEquidistant", (function() {
                return qs
            })), e.d(n, "geoConicEquidistantRaw", (function() {
                return Ls
            })), e.d(n, "geoEquirectangular", (function() {
                return Rs
            })), e.d(n, "geoEquirectangularRaw", (function() {
                return Os
            })), e.d(n, "geoGnomonic", (function() {
                return Us
            })), e.d(n, "geoGnomonicRaw", (function() {
                return Ds
            })), e.d(n, "geoIdentity", (function() {
                return Fs
            })), e.d(n, "geoProjection", (function() {
                return ps
            })), e.d(n, "geoProjectionMutator", (function() {
                return vs
            })), e.d(n, "geoMercator", (function() {
                return Es
            })), e.d(n, "geoMercatorRaw", (function() {
                return Ss
            })), e.d(n, "geoNaturalEarth1", (function() {
                return Ys
            })), e.d(n, "geoNaturalEarth1Raw", (function() {
                return Is
            })), e.d(n, "geoOrthographic", (function() {
                return Hs
            })), e.d(n, "geoOrthographicRaw", (function() {
                return Bs
            })), e.d(n, "geoStereographic", (function() {
                return Vs
            })), e.d(n, "geoStereographicRaw", (function() {
                return Xs
            })), e.d(n, "geoTransverseMercator", (function() {
                return Ws
            })), e.d(n, "geoTransverseMercatorRaw", (function() {
                return $s
            })), e.d(n, "geoRotation", (function() {
                return oc
            })), e.d(n, "geoStream", (function() {
                return Fo
            })), e.d(n, "geoTransform", (function() {
                return es
            })), e.d(n, "cluster", (function() {
                return Js
            })), e.d(n, "hierarchy", (function() {
                return tl
            })), e.d(n, "pack", (function() {
                return Tl
            })), e.d(n, "packSiblings", (function() {
                return ml
            })), e.d(n, "packEnclose", (function() {
                return ol
            })), e.d(n, "partition", (function() {
                return Cl
            })), e.d(n, "stratify", (function() {
                return ql
            })), e.d(n, "tree", (function() {
                return Bl
            })), e.d(n, "treemap", (function() {
                return Wl
            })), e.d(n, "treemapBinary", (function() {
                return Zl
            })), e.d(n, "treemapDice", (function() {
                return Al
            })), e.d(n, "treemapSlice", (function() {
                return Hl
            })), e.d(n, "treemapSliceDice", (function() {
                return Gl
            })), e.d(n, "treemapSquarify", (function() {
                return $l
            })), e.d(n, "treemapResquarify", (function() {
                return Ql
            })), e.d(n, "interpolate", (function() {
                return ie
            })), e.d(n, "interpolateArray", (function() {
                return Qn
            })), e.d(n, "interpolateBasis", (function() {
                return Dn
            })), e.d(n, "interpolateBasisClosed", (function() {
                return Un
            })), e.d(n, "interpolateDate", (function() {
                return Jn
            })), e.d(n, "interpolateNumber", (function() {
                return Kn
            })), e.d(n, "interpolateObject", (function() {
                return te
            })), e.d(n, "interpolateRound", (function() {
                return ue
            })), e.d(n, "interpolateString", (function() {
                return re
            })), e.d(n, "interpolateTransformCss", (function() {
                return se
            })), e.d(n, "interpolateTransformSvg", (function() {
                return le
            })), e.d(n, "interpolateZoom", (function() {
                return pe
            })), e.d(n, "interpolateRgb", (function() {
                return Bn
            })), e.d(n, "interpolateRgbBasis", (function() {
                return Zn
            })), e.d(n, "interpolateRgbBasisClosed", (function() {
                return Gn
            })), e.d(n, "interpolateHsl", (function() {
                return ye
            })), e.d(n, "interpolateHslLong", (function() {
                return _e
            })), e.d(n, "interpolateLab", (function() {
                return ge
            })), e.d(n, "interpolateHcl", (function() {
                return xe
            })), e.d(n, "interpolateHclLong", (function() {
                return be
            })), e.d(n, "interpolateCubehelix", (function() {
                return ke
            })), e.d(n, "interpolateCubehelixLong", (function() {
                return Ne
            })), e.d(n, "quantize", (function() {
                return Se
            })), e.d(n, "path", (function() {
                return Ii.a
            })), e.d(n, "polygonArea", (function() {
                return Jl
            })), e.d(n, "polygonCentroid", (function() {
                return Kl
            })), e.d(n, "polygonHull", (function() {
                return rh
            })), e.d(n, "polygonContains", (function() {
                return ih
            })), e.d(n, "polygonLength", (function() {
                return uh
            })), e.d(n, "quadtree", (function() {
                return mu
            })), e.d(n, "queue", (function() {
                return dh
            })), e.d(n, "randomUniform", (function() {
                return vh
            })), e.d(n, "randomNormal", (function() {
                return yh
            })), e.d(n, "randomLogNormal", (function() {
                return _h
            })), e.d(n, "randomBates", (function() {
                return mh
            })), e.d(n, "randomIrwinHall", (function() {
                return gh
            })), e.d(n, "randomExponential", (function() {
                return xh
            })), e.d(n, "request", (function() {
                return bh
            })), e.d(n, "html", (function() {
                return Mh
            })), e.d(n, "json", (function() {
                return Th
            })), e.d(n, "text", (function() {
                return kh
            })), e.d(n, "xml", (function() {
                return Nh
            })), e.d(n, "csv", (function() {
                return Eh
            })), e.d(n, "tsv", (function() {
                return Ah
            })), e.d(n, "scaleBand", (function() {
                return Lh
            })), e.d(n, "scalePoint", (function() {
                return qh
            })), e.d(n, "scaleIdentity", (function() {
                return Wh
            })), e.d(n, "scaleLinear", (function() {
                return $h
            })), e.d(n, "scaleLog", (function() {
                return ed
            })), e.d(n, "scaleOrdinal", (function() {
                return Rh
            })), e.d(n, "scaleImplicit", (function() {
                return Oh
            })), e.d(n, "scalePow", (function() {
                return id
            })), e.d(n, "scaleSqrt", (function() {
                return ud
            })), e.d(n, "scaleQuantile", (function() {
                return od
            })), e.d(n, "scaleQuantize", (function() {
                return ad
            })), e.d(n, "scaleThreshold", (function() {
                return cd
            })), e.d(n, "scaleTime", (function() {
                return iy
            })), e.d(n, "scaleUtc", (function() {
                return uy
            })), e.d(n, "schemeCategory10", (function() {
                return ay
            })), e.d(n, "schemeCategory20b", (function() {
                return cy
            })), e.d(n, "schemeCategory20c", (function() {
                return fy
            })), e.d(n, "schemeCategory20", (function() {
                return sy
            })), e.d(n, "interpolateCubehelixDefault", (function() {
                return ly
            })), e.d(n, "interpolateRainbow", (function() {
                return vy
            })), e.d(n, "interpolateWarm", (function() {
                return hy
            })), e.d(n, "interpolateCool", (function() {
                return dy
            })), e.d(n, "interpolateViridis", (function() {
                return _y
            })), e.d(n, "interpolateMagma", (function() {
                return gy
            })), e.d(n, "interpolateInferno", (function() {
                return my
            })), e.d(n, "interpolatePlasma", (function() {
                return xy
            })), e.d(n, "scaleSequential", (function() {
                return by
            })), e.d(n, "create", (function() {
                return _t
            })), e.d(n, "creator", (function() {
                return E
            })), e.d(n, "local", (function() {
                return mt
            })), e.d(n, "matcher", (function() {
                return q
            })), e.d(n, "mouse", (function() {
                return Mt
            })), e.d(n, "namespace", (function() {
                return S
            })), e.d(n, "namespaces", (function() {
                return N
            })), e.d(n, "clientPoint", (function() {
                return wt
            })), e.d(n, "select", (function() {
                return yt
            })), e.d(n, "selectAll", (function() {
                return Tt
            })), e.d(n, "selection", (function() {
                return vt
            })), e.d(n, "selector", (function() {
                return C
            })), e.d(n, "selectorAll", (function() {
                return P
            })), e.d(n, "style", (function() {
                return H
            })), e.d(n, "touch", (function() {
                return kt
            })), e.d(n, "touches", (function() {
                return Nt
            })), e.d(n, "window", (function() {
                return B
            })), e.d(n, "event", (function() {
                return ut
            })), e.d(n, "customEvent", (function() {
                return st
            })), e.d(n, "arc", (function() {
                return wy.a
            })), e.d(n, "area", (function() {
                return wy.b
            })), e.d(n, "line", (function() {
                return wy.v
            })), e.d(n, "pie", (function() {
                return wy.A
            })), e.d(n, "areaRadial", (function() {
                return wy.c
            })), e.d(n, "radialArea", (function() {
                return wy.C
            })), e.d(n, "lineRadial", (function() {
                return wy.w
            })), e.d(n, "radialLine", (function() {
                return wy.D
            })), e.d(n, "pointRadial", (function() {
                return wy.B
            })), e.d(n, "linkHorizontal", (function() {
                return wy.x
            })), e.d(n, "linkVertical", (function() {
                return wy.z
            })), e.d(n, "linkRadial", (function() {
                return wy.y
            })), e.d(n, "symbol", (function() {
                return wy.P
            })), e.d(n, "symbols", (function() {
                return wy.X
            })), e.d(n, "symbolCircle", (function() {
                return wy.Q
            })), e.d(n, "symbolCross", (function() {
                return wy.R
            })), e.d(n, "symbolDiamond", (function() {
                return wy.S
            })), e.d(n, "symbolSquare", (function() {
                return wy.T
            })), e.d(n, "symbolStar", (function() {
                return wy.U
            })), e.d(n, "symbolTriangle", (function() {
                return wy.V
            })), e.d(n, "symbolWye", (function() {
                return wy.W
            })), e.d(n, "curveBasisClosed", (function() {
                return wy.e
            })), e.d(n, "curveBasisOpen", (function() {
                return wy.f
            })), e.d(n, "curveBasis", (function() {
                return wy.d
            })), e.d(n, "curveBundle", (function() {
                return wy.g
            })), e.d(n, "curveCardinalClosed", (function() {
                return wy.i
            })), e.d(n, "curveCardinalOpen", (function() {
                return wy.j
            })), e.d(n, "curveCardinal", (function() {
                return wy.h
            })), e.d(n, "curveCatmullRomClosed", (function() {
                return wy.l
            })), e.d(n, "curveCatmullRomOpen", (function() {
                return wy.m
            })), e.d(n, "curveCatmullRom", (function() {
                return wy.k
            })), e.d(n, "curveLinearClosed", (function() {
                return wy.o
            })), e.d(n, "curveLinear", (function() {
                return wy.n
            })), e.d(n, "curveMonotoneX", (function() {
                return wy.p
            })), e.d(n, "curveMonotoneY", (function() {
                return wy.q
            })), e.d(n, "curveNatural", (function() {
                return wy.r
            })), e.d(n, "curveStep", (function() {
                return wy.s
            })), e.d(n, "curveStepAfter", (function() {
                return wy.t
            })), e.d(n, "curveStepBefore", (function() {
                return wy.u
            })), e.d(n, "stack", (function() {
                return wy.E
            })), e.d(n, "stackOffsetExpand", (function() {
                return wy.G
            })), e.d(n, "stackOffsetDiverging", (function() {
                return wy.F
            })), e.d(n, "stackOffsetNone", (function() {
                return wy.H
            })), e.d(n, "stackOffsetSilhouette", (function() {
                return wy.I
            })), e.d(n, "stackOffsetWiggle", (function() {
                return wy.J
            })), e.d(n, "stackOrderAscending", (function() {
                return wy.K
            })), e.d(n, "stackOrderDescending", (function() {
                return wy.L
            })), e.d(n, "stackOrderInsideOut", (function() {
                return wy.M
            })), e.d(n, "stackOrderNone", (function() {
                return wy.N
            })), e.d(n, "stackOrderReverse", (function() {
                return wy.O
            })), e.d(n, "timeInterval", (function() {
                return ld
            })), e.d(n, "timeMillisecond", (function() {
                return dd
            })), e.d(n, "timeMilliseconds", (function() {
                return pd
            })), e.d(n, "utcMillisecond", (function() {
                return dd
            })), e.d(n, "utcMilliseconds", (function() {
                return pd
            })), e.d(n, "timeSecond", (function() {
                return gd
            })), e.d(n, "timeSeconds", (function() {
                return md
            })), e.d(n, "utcSecond", (function() {
                return gd
            })), e.d(n, "utcSeconds", (function() {
                return md
            })), e.d(n, "timeMinute", (function() {
                return bd
            })), e.d(n, "timeMinutes", (function() {
                return wd
            })), e.d(n, "timeHour", (function() {
                return Td
            })), e.d(n, "timeHours", (function() {
                return kd
            })), e.d(n, "timeDay", (function() {
                return Sd
            })), e.d(n, "timeDays", (function() {
                return Ed
            })), e.d(n, "timeWeek", (function() {
                return Cd
            })), e.d(n, "timeWeeks", (function() {
                return Dd
            })), e.d(n, "timeSunday", (function() {
                return Cd
            })), e.d(n, "timeSundays", (function() {
                return Dd
            })), e.d(n, "timeMonday", (function() {
                return zd
            })), e.d(n, "timeMondays", (function() {
                return Ud
            })), e.d(n, "timeTuesday", (function() {
                return Pd
            })), e.d(n, "timeTuesdays", (function() {
                return jd
            })), e.d(n, "timeWednesday", (function() {
                return Od
            })), e.d(n, "timeWednesdays", (function() {
                return Fd
            })), e.d(n, "timeThursday", (function() {
                return Rd
            })), e.d(n, "timeThursdays", (function() {
                return Id
            })), e.d(n, "timeFriday", (function() {
                return Ld
            })), e.d(n, "timeFridays", (function() {
                return Yd
            })), e.d(n, "timeSaturday", (function() {
                return qd
            })), e.d(n, "timeSaturdays", (function() {
                return Bd
            })), e.d(n, "timeMonth", (function() {
                return Xd
            })), e.d(n, "timeMonths", (function() {
                return Vd
            })), e.d(n, "timeYear", (function() {
                return Wd
            })), e.d(n, "timeYears", (function() {
                return Zd
            })), e.d(n, "utcMinute", (function() {
                return Qd
            })), e.d(n, "utcMinutes", (function() {
                return Jd
            })), e.d(n, "utcHour", (function() {
                return tp
            })), e.d(n, "utcHours", (function() {
                return np
            })), e.d(n, "utcDay", (function() {
                return rp
            })), e.d(n, "utcDays", (function() {
                return ip
            })), e.d(n, "utcWeek", (function() {
                return op
            })), e.d(n, "utcWeeks", (function() {
                return dp
            })), e.d(n, "utcSunday", (function() {
                return op
            })), e.d(n, "utcSundays", (function() {
                return dp
            })), e.d(n, "utcMonday", (function() {
                return ap
            })), e.d(n, "utcMondays", (function() {
                return pp
            })), e.d(n, "utcTuesday", (function() {
                return cp
            })), e.d(n, "utcTuesdays", (function() {
                return vp
            })), e.d(n, "utcWednesday", (function() {
                return fp
            })), e.d(n, "utcWednesdays", (function() {
                return yp
            })), e.d(n, "utcThursday", (function() {
                return sp
            })), e.d(n, "utcThursdays", (function() {
                return _p
            })), e.d(n, "utcFriday", (function() {
                return lp
            })), e.d(n, "utcFridays", (function() {
                return gp
            })), e.d(n, "utcSaturday", (function() {
                return hp
            })), e.d(n, "utcSaturdays", (function() {
                return mp
            })), e.d(n, "utcMonth", (function() {
                return bp
            })), e.d(n, "utcMonths", (function() {
                return wp
            })), e.d(n, "utcYear", (function() {
                return Tp
            })), e.d(n, "utcYears", (function() {
                return kp
            })), e.d(n, "timeFormatDefaultLocale", (function() {
                return Xv
            })), e.d(n, "timeFormat", (function() {
                return zp
            })), e.d(n, "timeParse", (function() {
                return Pp
            })), e.d(n, "utcFormat", (function() {
                return Op
            })), e.d(n, "utcParse", (function() {
                return Rp
            })), e.d(n, "timeFormatLocale", (function() {
                return Ap
            })), e.d(n, "isoFormat", (function() {
                return Vv
            })), e.d(n, "isoParse", (function() {
                return $v
            })), e.d(n, "now", (function() {
                return De
            })), e.d(n, "timer", (function() {
                return Fe
            })), e.d(n, "timerFlush", (function() {
                return Ie
            })), e.d(n, "timeout", (function() {
                return Xe
            })), e.d(n, "interval", (function() {
                return Ve
            })), e.d(n, "transition", (function() {
                return hr
            })), e.d(n, "active", (function() {
                return ui
            })), e.d(n, "interrupt", (function() {
                return or
            })), e.d(n, "voronoi", (function() {
                return u_
            })), e.d(n, "zoom", (function() {
                return g_
            })), e.d(n, "zoomTransform", (function() {
                return f_
            })), e.d(n, "zoomIdentity", (function() {
                return c_
            }))
        },
        31: function(t, n, e) {
            "use strict";
            e.r(n);
            var r = e(3),
                i = e(4);
            var u = {
                id: "collapsible_tree",
                label: "Collapsible Tree",
                options: {
                    color_with_children: {
                        label: "Node Color With Children",
                        default: "#36c1b3",
                        type: "string",
                        display: "color"
                    },
                    color_empty: {
                        label: "Empty Node Color",
                        default: "#fff",
                        type: "string",
                        display: "color"
                    }
                },
                create: function(t, n) {
                    this.svg = r.select(t).append("svg")
                },
                update: function(t, n, e, u) {
                    if (Object(i.b)(this, u, {
                            min_pivots: 0,
                            max_pivots: 0,
                            min_dimensions: 2,
                            max_dimensions: void 0,
                            min_measures: 0,
                            max_measures: void 0
                        })) {
                        var o = 0,
                            a = {
                                children: e && e.color_with_children || this.options.color_with_children.default,
                                empty: e && e.color_empty || this.options.color_empty.default
                            },
                            c = 10,
                            f = 4,
                            s = 750,
                            l = n.clientWidth - 10 - 10,
                            h = n.clientHeight - 10 - 10,
                            d = function(t, n) {
                                var e = {};
                                return t.forEach((function(t) {
                                    var r = e;
                                    n.forEach((function(n) {
                                        var e = t[n.name].value;
                                        r[e] = e in r ? r[e] : {}, r = r[e]
                                    })), r.__data = t
                                })), {
                                    name: "root",
                                    children: function t(n, e) {
                                        void 0 === e && (e = 0);
                                        var r = [];
                                        for (var i in n)
                                            if ("__data" !== i) {
                                                var u = {
                                                    name: i,
                                                    depth: e,
                                                    children: t(n[i], e + 1)
                                                };
                                                "__data" in n[i] && (u.data = n[i].__data), r.push(u)
                                            } return r
                                    }(e, 1),
                                    depth: 0
                                }
                            }(t, u.fields.dimension_like),
                            p = this.svg.html("").attr("width", l + 1500 + 1500).attr("height", h + 3500 + 100).append("g").attr("transform", "translate(10,10)"),
                            v = r.tree().size([h, l]),
                            y = r.hierarchy(d, (function(t) {
                                return t.children
                            }));
                        y.x0 = h / 2, y.y0 = 0, y.children.forEach((function t(n) {
                            n.children && (n._children = n.children, n._children.forEach(t), n.children = null)
                        })), m(y)
                    }

                    function _(t, n) {
                        return ("\n        M " + t.y + " " + t.x + "\n        C " + (t.y + n.y) / 2 + " " + t.x + ",\n          " + (t.y + n.y) / 2 + " " + n.x + ",\n          " + n.y + " " + n.x + "\n      ").trim()
                    }

                    function g(t) {
                        t.children ? (t._children = t.children, t.children = null) : (t.children = t._children, t._children = null), m(t)
                    }

                    function m(t) {
                        var n = v(y),
                            e = n.descendants(),
                            r = n.descendants().slice(1);
                        e.forEach((function(t) {
                            t.y = 180 * t.depth
                        }));
                        var i = p.selectAll("g.node").data(e, (function(t) {
                                return t.id || (t.id = ++o)
                            })),
                            u = i.enter().append("g").attr("class", "node").attr("transform", (function(n) {
                                return "translate(" + t.y0 + "," + t.x0 + ")"
                            })).on("click", g);
                        u.append("circle").attr("class", "node").attr("r", 1e-6), u.append("text").attr("dy", ".35em").attr("x", (function(t) {
                            return t.children || t._children ? -c : c
                        })).attr("text-anchor", (function(t) {
                            return t.children || t._children ? "end" : "start"
                        })).style("font-family", "'Open Sans', Helvetica, sans-serif").style("font-size", c + "px").text((function(t) {
                            return t.data.name
                        }));
                        var l = u.merge(i);
                        l.transition().duration(s).attr("transform", (function(t) {
                            return "translate(" + t.y + "," + t.x + ")"
                        })), l.select("circle.node").attr("r", f).style("fill", (function(t) {
                            return t._children ? a.children : a.empty
                        })).style("stroke", a.children).style("stroke-width", 1.5).attr("cursor", "pointer");
                        var h = i.exit().transition().duration(s).attr("transform", (function(n) {
                            return "translate(" + t.y + "," + t.x + ")"
                        })).remove();
                        h.select("circle").attr("r", 1e-6), h.select("text").style("fill-opacity", 1e-6);
                        var d = p.selectAll("path.link").data(r, (function(t) {
                            return t.id
                        }));
                        d.enter().insert("path", "g").attr("class", "link").style("fill", "none").style("stroke", "#ddd").style("stroke-width", 1.5).attr("d", (function(n) {
                            var e = {
                                x: t.x0,
                                y: t.y0
                            };
                            return _(e, e)
                        })).merge(d).transition().duration(s).attr("d", (function(t) {
                            return _(t, t.parent)
                        })), d.exit().transition().duration(s).attr("d", (function(n) {
                            var e = {
                                x: t.x,
                                y: t.y
                            };
                            return _(e, e)
                        })).remove(), e.forEach((function(t) {
                            t.x0 = t.x, t.y0 = t.y
                        }))
                    }
                }
            };
            looker.plugins.visualizations.add(u)
        },
        4: function(t, n, e) {
            "use strict";
            e.d(n, "a", (function() {
                return i
            })), e.d(n, "b", (function() {
                return u
            }));
            var r = e(3),
                i = function(t) {
                    if (t) {
                        var n = "";
                        switch (t.charAt(0)) {
                            case "$":
                                n += "$";
                                break;
                            case "Â£":
                                n += "Â£";
                                break;
                            case "â‚¬":
                                n += "â‚¬"
                        }
                        t.indexOf(",") > -1 && (n += ",");
                        var e = t.split(".");
                        switch (n += ".", n += e.length > 1 ? e[1].length : 0, t.slice(-1)) {
                            case "%":
                                n += "%";
                                break;
                            case "0":
                                n += "f"
                        }
                        return r.format(n)
                    }
                },
                u = function(t, n, e) {
                    var r = function(n, e, r, i, u) {
                            return !(!t.addError || !t.clearErrors || (r < i ? (t.addError({
                                title: "Not Enough " + e + "s",
                                message: "This visualization requires " + (i === u ? "exactly" : "at least") + " " + i + " " + e.toLowerCase() + (1 === i ? "" : "s") + ".",
                                group: n
                            }), 1) : r > u ? (t.addError({
                                title: "Too Many " + e + "s",
                                message: "This visualization requires " + (i === u ? "exactly" : "no more than") + " " + u + " " + e.toLowerCase() + (1 === i ? "" : "s") + ".",
                                group: n
                            }), 1) : (t.clearErrors(n), 0)))
                        },
                        i = n.fields,
                        u = i.pivots,
                        o = i.dimensions,
                        a = i.measure_like;
                    return r("pivot-req", "Pivot", u.length, e.min_pivots, e.max_pivots) && r("dim-req", "Dimension", o.length, e.min_dimensions, e.max_dimensions) && r("mes-req", "Measure", a.length, e.min_measures, e.max_measures)
                }
        },
        5: function(t, n, e) {
            "use strict";
            var r = e(1),
                i = function(t) {
                    return function() {
                        return t
                    }
                },
                u = Math.abs,
                o = Math.atan2,
                a = Math.cos,
                c = Math.max,
                f = Math.min,
                s = Math.sin,
                l = Math.sqrt,
                h = 1e-12,
                d = Math.PI,
                p = d / 2,
                v = 2 * d;

            function y(t) {
                return t >= 1 ? p : t <= -1 ? -p : Math.asin(t)
            }

            function _(t) {
                return t.innerRadius
            }

            function g(t) {
                return t.outerRadius
            }

            function m(t) {
                return t.startAngle
            }

            function x(t) {
                return t.endAngle
            }

            function b(t) {
                return t && t.padAngle
            }

            function w(t, n, e, r, i, u, o) {
                var a = t - e,
                    f = n - r,
                    s = (o ? u : -u) / l(a * a + f * f),
                    h = s * f,
                    d = -s * a,
                    p = t + h,
                    v = n + d,
                    y = e + h,
                    _ = r + d,
                    g = (p + y) / 2,
                    m = (v + _) / 2,
                    x = y - p,
                    b = _ - v,
                    w = x * x + b * b,
                    M = i - u,
                    T = p * _ - y * v,
                    k = (b < 0 ? -1 : 1) * l(c(0, M * M * w - T * T)),
                    N = (T * b - x * k) / w,
                    S = (-T * x - b * k) / w,
                    E = (T * b + x * k) / w,
                    A = (-T * x + b * k) / w,
                    C = N - g,
                    z = S - m,
                    P = E - g,
                    O = A - m;
                return C * C + z * z > P * P + O * O && (N = E, S = A), {
                    cx: N,
                    cy: S,
                    x01: -h,
                    y01: -d,
                    x11: N * (i / M - 1),
                    y11: S * (i / M - 1)
                }
            }
            var M = function() {
                var t = _,
                    n = g,
                    e = i(0),
                    c = null,
                    M = m,
                    T = x,
                    k = b,
                    N = null;

                function S() {
                    var i, _, g, m = +t.apply(this, arguments),
                        x = +n.apply(this, arguments),
                        b = M.apply(this, arguments) - p,
                        S = T.apply(this, arguments) - p,
                        E = u(S - b),
                        A = S > b;
                    if (N || (N = i = Object(r.a)()), x < m && (_ = x, x = m, m = _), x > h)
                        if (E > v - h) N.moveTo(x * a(b), x * s(b)), N.arc(0, 0, x, b, S, !A), m > h && (N.moveTo(m * a(S), m * s(S)), N.arc(0, 0, m, S, b, A));
                        else {
                            var C, z, P = b,
                                O = S,
                                R = b,
                                L = S,
                                q = E,
                                D = E,
                                U = k.apply(this, arguments) / 2,
                                j = U > h && (c ? +c.apply(this, arguments) : l(m * m + x * x)),
                                F = f(u(x - m) / 2, +e.apply(this, arguments)),
                                I = F,
                                Y = F;
                            if (j > h) {
                                var B = y(j / m * s(U)),
                                    H = y(j / x * s(U));
                                (q -= 2 * B) > h ? (R += B *= A ? 1 : -1, L -= B) : (q = 0, R = L = (b + S) / 2), (D -= 2 * H) > h ? (P += H *= A ? 1 : -1, O -= H) : (D = 0, P = O = (b + S) / 2)
                            }
                            var X = x * a(P),
                                V = x * s(P),
                                $ = m * a(L),
                                W = m * s(L);
                            if (F > h) {
                                var Z = x * a(O),
                                    G = x * s(O),
                                    Q = m * a(R),
                                    J = m * s(R);
                                if (E < d) {
                                    var K = q > h ? function(t, n, e, r, i, u, o, a) {
                                            var c = e - t,
                                                f = r - n,
                                                s = o - i,
                                                l = a - u,
                                                h = (s * (n - u) - l * (t - i)) / (l * c - s * f);
                                            return [t + h * c, n + h * f]
                                        }(X, V, Q, J, Z, G, $, W) : [$, W],
                                        tt = X - K[0],
                                        nt = V - K[1],
                                        et = Z - K[0],
                                        rt = G - K[1],
                                        it = 1 / s(((g = (tt * et + nt * rt) / (l(tt * tt + nt * nt) * l(et * et + rt * rt))) > 1 ? 0 : g < -1 ? d : Math.acos(g)) / 2),
                                        ut = l(K[0] * K[0] + K[1] * K[1]);
                                    I = f(F, (m - ut) / (it - 1)), Y = f(F, (x - ut) / (it + 1))
                                }
                            }
                            D > h ? Y > h ? (C = w(Q, J, X, V, x, Y, A), z = w(Z, G, $, W, x, Y, A), N.moveTo(C.cx + C.x01, C.cy + C.y01), Y < F ? N.arc(C.cx, C.cy, Y, o(C.y01, C.x01), o(z.y01, z.x01), !A) : (N.arc(C.cx, C.cy, Y, o(C.y01, C.x01), o(C.y11, C.x11), !A), N.arc(0, 0, x, o(C.cy + C.y11, C.cx + C.x11), o(z.cy + z.y11, z.cx + z.x11), !A), N.arc(z.cx, z.cy, Y, o(z.y11, z.x11), o(z.y01, z.x01), !A))) : (N.moveTo(X, V), N.arc(0, 0, x, P, O, !A)) : N.moveTo(X, V), m > h && q > h ? I > h ? (C = w($, W, Z, G, m, -I, A), z = w(X, V, Q, J, m, -I, A), N.lineTo(C.cx + C.x01, C.cy + C.y01), I < F ? N.arc(C.cx, C.cy, I, o(C.y01, C.x01), o(z.y01, z.x01), !A) : (N.arc(C.cx, C.cy, I, o(C.y01, C.x01), o(C.y11, C.x11), !A), N.arc(0, 0, m, o(C.cy + C.y11, C.cx + C.x11), o(z.cy + z.y11, z.cx + z.x11), A), N.arc(z.cx, z.cy, I, o(z.y11, z.x11), o(z.y01, z.x01), !A))) : N.arc(0, 0, m, L, R, A) : N.lineTo($, W)
                        }
                    else N.moveTo(0, 0);
                    if (N.closePath(), i) return N = null, i + "" || null
                }
                return S.centroid = function() {
                    var e = (+t.apply(this, arguments) + +n.apply(this, arguments)) / 2,
                        r = (+M.apply(this, arguments) + +T.apply(this, arguments)) / 2 - d / 2;
                    return [a(r) * e, s(r) * e]
                }, S.innerRadius = function(n) {
                    return arguments.length ? (t = "function" == typeof n ? n : i(+n), S) : t
                }, S.outerRadius = function(t) {
                    return arguments.length ? (n = "function" == typeof t ? t : i(+t), S) : n
                }, S.cornerRadius = function(t) {
                    return arguments.length ? (e = "function" == typeof t ? t : i(+t), S) : e
                }, S.padRadius = function(t) {
                    return arguments.length ? (c = null == t ? null : "function" == typeof t ? t : i(+t), S) : c
                }, S.startAngle = function(t) {
                    return arguments.length ? (M = "function" == typeof t ? t : i(+t), S) : M
                }, S.endAngle = function(t) {
                    return arguments.length ? (T = "function" == typeof t ? t : i(+t), S) : T
                }, S.padAngle = function(t) {
                    return arguments.length ? (k = "function" == typeof t ? t : i(+t), S) : k
                }, S.context = function(t) {
                    return arguments.length ? (N = null == t ? null : t, S) : N
                }, S
            };

            function T(t) {
                this._context = t
            }
            T.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._point = 0
                },
                lineEnd: function() {
                    (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
                },
                point: function(t, n) {
                    switch (t = +t, n = +n, this._point) {
                        case 0:
                            this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                            break;
                        case 1:
                            this._point = 2;
                        default:
                            this._context.lineTo(t, n)
                    }
                }
            };
            var k = function(t) {
                return new T(t)
            };

            function N(t) {
                return t[0]
            }

            function S(t) {
                return t[1]
            }
            var E = function() {
                    var t = N,
                        n = S,
                        e = i(!0),
                        u = null,
                        o = k,
                        a = null;

                    function c(i) {
                        var c, f, s, l = i.length,
                            h = !1;
                        for (null == u && (a = o(s = Object(r.a)())), c = 0; c <= l; ++c) !(c < l && e(f = i[c], c, i)) === h && ((h = !h) ? a.lineStart() : a.lineEnd()), h && a.point(+t(f, c, i), +n(f, c, i));
                        if (s) return a = null, s + "" || null
                    }
                    return c.x = function(n) {
                        return arguments.length ? (t = "function" == typeof n ? n : i(+n), c) : t
                    }, c.y = function(t) {
                        return arguments.length ? (n = "function" == typeof t ? t : i(+t), c) : n
                    }, c.defined = function(t) {
                        return arguments.length ? (e = "function" == typeof t ? t : i(!!t), c) : e
                    }, c.curve = function(t) {
                        return arguments.length ? (o = t, null != u && (a = o(u)), c) : o
                    }, c.context = function(t) {
                        return arguments.length ? (null == t ? u = a = null : a = o(u = t), c) : u
                    }, c
                },
                A = function() {
                    var t = N,
                        n = null,
                        e = i(0),
                        u = S,
                        o = i(!0),
                        a = null,
                        c = k,
                        f = null;

                    function s(i) {
                        var s, l, h, d, p, v = i.length,
                            y = !1,
                            _ = new Array(v),
                            g = new Array(v);
                        for (null == a && (f = c(p = Object(r.a)())), s = 0; s <= v; ++s) {
                            if (!(s < v && o(d = i[s], s, i)) === y)
                                if (y = !y) l = s, f.areaStart(), f.lineStart();
                                else {
                                    for (f.lineEnd(), f.lineStart(), h = s - 1; h >= l; --h) f.point(_[h], g[h]);
                                    f.lineEnd(), f.areaEnd()
                                } y && (_[s] = +t(d, s, i), g[s] = +e(d, s, i), f.point(n ? +n(d, s, i) : _[s], u ? +u(d, s, i) : g[s]))
                        }
                        if (p) return f = null, p + "" || null
                    }

                    function l() {
                        return E().defined(o).curve(c).context(a)
                    }
                    return s.x = function(e) {
                        return arguments.length ? (t = "function" == typeof e ? e : i(+e), n = null, s) : t
                    }, s.x0 = function(n) {
                        return arguments.length ? (t = "function" == typeof n ? n : i(+n), s) : t
                    }, s.x1 = function(t) {
                        return arguments.length ? (n = null == t ? null : "function" == typeof t ? t : i(+t), s) : n
                    }, s.y = function(t) {
                        return arguments.length ? (e = "function" == typeof t ? t : i(+t), u = null, s) : e
                    }, s.y0 = function(t) {
                        return arguments.length ? (e = "function" == typeof t ? t : i(+t), s) : e
                    }, s.y1 = function(t) {
                        return arguments.length ? (u = null == t ? null : "function" == typeof t ? t : i(+t), s) : u
                    }, s.lineX0 = s.lineY0 = function() {
                        return l().x(t).y(e)
                    }, s.lineY1 = function() {
                        return l().x(t).y(u)
                    }, s.lineX1 = function() {
                        return l().x(n).y(e)
                    }, s.defined = function(t) {
                        return arguments.length ? (o = "function" == typeof t ? t : i(!!t), s) : o
                    }, s.curve = function(t) {
                        return arguments.length ? (c = t, null != a && (f = c(a)), s) : c
                    }, s.context = function(t) {
                        return arguments.length ? (null == t ? a = f = null : f = c(a = t), s) : a
                    }, s
                },
                C = function(t, n) {
                    return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
                },
                z = function(t) {
                    return t
                },
                P = function() {
                    var t = z,
                        n = C,
                        e = null,
                        r = i(0),
                        u = i(v),
                        o = i(0);

                    function a(i) {
                        var a, c, f, s, l, h = i.length,
                            d = 0,
                            p = new Array(h),
                            y = new Array(h),
                            _ = +r.apply(this, arguments),
                            g = Math.min(v, Math.max(-v, u.apply(this, arguments) - _)),
                            m = Math.min(Math.abs(g) / h, o.apply(this, arguments)),
                            x = m * (g < 0 ? -1 : 1);
                        for (a = 0; a < h; ++a)(l = y[p[a] = a] = +t(i[a], a, i)) > 0 && (d += l);
                        for (null != n ? p.sort((function(t, e) {
                                return n(y[t], y[e])
                            })) : null != e && p.sort((function(t, n) {
                                return e(i[t], i[n])
                            })), a = 0, f = d ? (g - h * x) / d : 0; a < h; ++a, _ = s) c = p[a], s = _ + ((l = y[c]) > 0 ? l * f : 0) + x, y[c] = {
                            data: i[c],
                            index: a,
                            value: l,
                            startAngle: _,
                            endAngle: s,
                            padAngle: m
                        };
                        return y
                    }
                    return a.value = function(n) {
                        return arguments.length ? (t = "function" == typeof n ? n : i(+n), a) : t
                    }, a.sortValues = function(t) {
                        return arguments.length ? (n = t, e = null, a) : n
                    }, a.sort = function(t) {
                        return arguments.length ? (e = t, n = null, a) : e
                    }, a.startAngle = function(t) {
                        return arguments.length ? (r = "function" == typeof t ? t : i(+t), a) : r
                    }, a.endAngle = function(t) {
                        return arguments.length ? (u = "function" == typeof t ? t : i(+t), a) : u
                    }, a.padAngle = function(t) {
                        return arguments.length ? (o = "function" == typeof t ? t : i(+t), a) : o
                    }, a
                },
                O = L(k);

            function R(t) {
                this._curve = t
            }

            function L(t) {
                function n(n) {
                    return new R(t(n))
                }
                return n._curve = t, n
            }

            function q(t) {
                var n = t.curve;
                return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t.curve = function(t) {
                    return arguments.length ? n(L(t)) : n()._curve
                }, t
            }
            R.prototype = {
                areaStart: function() {
                    this._curve.areaStart()
                },
                areaEnd: function() {
                    this._curve.areaEnd()
                },
                lineStart: function() {
                    this._curve.lineStart()
                },
                lineEnd: function() {
                    this._curve.lineEnd()
                },
                point: function(t, n) {
                    this._curve.point(n * Math.sin(t), n * -Math.cos(t))
                }
            };
            var D = function() {
                    return q(E().curve(O))
                },
                U = function() {
                    var t = A().curve(O),
                        n = t.curve,
                        e = t.lineX0,
                        r = t.lineX1,
                        i = t.lineY0,
                        u = t.lineY1;
                    return t.angle = t.x, delete t.x, t.startAngle = t.x0, delete t.x0, t.endAngle = t.x1, delete t.x1, t.radius = t.y, delete t.y, t.innerRadius = t.y0, delete t.y0, t.outerRadius = t.y1, delete t.y1, t.lineStartAngle = function() {
                        return q(e())
                    }, delete t.lineX0, t.lineEndAngle = function() {
                        return q(r())
                    }, delete t.lineX1, t.lineInnerRadius = function() {
                        return q(i())
                    }, delete t.lineY0, t.lineOuterRadius = function() {
                        return q(u())
                    }, delete t.lineY1, t.curve = function(t) {
                        return arguments.length ? n(L(t)) : n()._curve
                    }, t
                },
                j = function(t, n) {
                    return [(n = +n) * Math.cos(t -= Math.PI / 2), n * Math.sin(t)]
                },
                F = Array.prototype.slice;

            function I(t) {
                return t.source
            }

            function Y(t) {
                return t.target
            }

            function B(t) {
                var n = I,
                    e = Y,
                    u = N,
                    o = S,
                    a = null;

                function c() {
                    var i, c = F.call(arguments),
                        f = n.apply(this, c),
                        s = e.apply(this, c);
                    if (a || (a = i = Object(r.a)()), t(a, +u.apply(this, (c[0] = f, c)), +o.apply(this, c), +u.apply(this, (c[0] = s, c)), +o.apply(this, c)), i) return a = null, i + "" || null
                }
                return c.source = function(t) {
                    return arguments.length ? (n = t, c) : n
                }, c.target = function(t) {
                    return arguments.length ? (e = t, c) : e
                }, c.x = function(t) {
                    return arguments.length ? (u = "function" == typeof t ? t : i(+t), c) : u
                }, c.y = function(t) {
                    return arguments.length ? (o = "function" == typeof t ? t : i(+t), c) : o
                }, c.context = function(t) {
                    return arguments.length ? (a = null == t ? null : t, c) : a
                }, c
            }

            function H(t, n, e, r, i) {
                t.moveTo(n, e), t.bezierCurveTo(n = (n + r) / 2, e, n, i, r, i)
            }

            function X(t, n, e, r, i) {
                t.moveTo(n, e), t.bezierCurveTo(n, e = (e + i) / 2, r, e, r, i)
            }

            function V(t, n, e, r, i) {
                var u = j(n, e),
                    o = j(n, e = (e + i) / 2),
                    a = j(r, e),
                    c = j(r, i);
                t.moveTo(u[0], u[1]), t.bezierCurveTo(o[0], o[1], a[0], a[1], c[0], c[1])
            }

            function $() {
                return B(H)
            }

            function W() {
                return B(X)
            }

            function Z() {
                var t = B(V);
                return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t
            }
            var G = {
                    draw: function(t, n) {
                        var e = Math.sqrt(n / d);
                        t.moveTo(e, 0), t.arc(0, 0, e, 0, v)
                    }
                },
                Q = {
                    draw: function(t, n) {
                        var e = Math.sqrt(n / 5) / 2;
                        t.moveTo(-3 * e, -e), t.lineTo(-e, -e), t.lineTo(-e, -3 * e), t.lineTo(e, -3 * e), t.lineTo(e, -e), t.lineTo(3 * e, -e), t.lineTo(3 * e, e), t.lineTo(e, e), t.lineTo(e, 3 * e), t.lineTo(-e, 3 * e), t.lineTo(-e, e), t.lineTo(-3 * e, e), t.closePath()
                    }
                },
                J = Math.sqrt(1 / 3),
                K = 2 * J,
                tt = {
                    draw: function(t, n) {
                        var e = Math.sqrt(n / K),
                            r = e * J;
                        t.moveTo(0, -e), t.lineTo(r, 0), t.lineTo(0, e), t.lineTo(-r, 0), t.closePath()
                    }
                },
                nt = Math.sin(d / 10) / Math.sin(7 * d / 10),
                et = Math.sin(v / 10) * nt,
                rt = -Math.cos(v / 10) * nt,
                it = {
                    draw: function(t, n) {
                        var e = Math.sqrt(.8908130915292852 * n),
                            r = et * e,
                            i = rt * e;
                        t.moveTo(0, -e), t.lineTo(r, i);
                        for (var u = 1; u < 5; ++u) {
                            var o = v * u / 5,
                                a = Math.cos(o),
                                c = Math.sin(o);
                            t.lineTo(c * e, -a * e), t.lineTo(a * r - c * i, c * r + a * i)
                        }
                        t.closePath()
                    }
                },
                ut = {
                    draw: function(t, n) {
                        var e = Math.sqrt(n),
                            r = -e / 2;
                        t.rect(r, r, e, e)
                    }
                },
                ot = Math.sqrt(3),
                at = {
                    draw: function(t, n) {
                        var e = -Math.sqrt(n / (3 * ot));
                        t.moveTo(0, 2 * e), t.lineTo(-ot * e, -e), t.lineTo(ot * e, -e), t.closePath()
                    }
                },
                ct = Math.sqrt(3) / 2,
                ft = 1 / Math.sqrt(12),
                st = 3 * (ft / 2 + 1),
                lt = {
                    draw: function(t, n) {
                        var e = Math.sqrt(n / st),
                            r = e / 2,
                            i = e * ft,
                            u = r,
                            o = e * ft + e,
                            a = -u,
                            c = o;
                        t.moveTo(r, i), t.lineTo(u, o), t.lineTo(a, c), t.lineTo(-.5 * r - ct * i, ct * r + -.5 * i), t.lineTo(-.5 * u - ct * o, ct * u + -.5 * o), t.lineTo(-.5 * a - ct * c, ct * a + -.5 * c), t.lineTo(-.5 * r + ct * i, -.5 * i - ct * r), t.lineTo(-.5 * u + ct * o, -.5 * o - ct * u), t.lineTo(-.5 * a + ct * c, -.5 * c - ct * a), t.closePath()
                    }
                },
                ht = [G, Q, tt, ut, it, at, lt],
                dt = function() {
                    var t = i(G),
                        n = i(64),
                        e = null;

                    function u() {
                        var i;
                        if (e || (e = i = Object(r.a)()), t.apply(this, arguments).draw(e, +n.apply(this, arguments)), i) return e = null, i + "" || null
                    }
                    return u.type = function(n) {
                        return arguments.length ? (t = "function" == typeof n ? n : i(n), u) : t
                    }, u.size = function(t) {
                        return arguments.length ? (n = "function" == typeof t ? t : i(+t), u) : n
                    }, u.context = function(t) {
                        return arguments.length ? (e = null == t ? null : t, u) : e
                    }, u
                },
                pt = function() {};

            function vt(t, n, e) {
                t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + n) / 6, (t._y0 + 4 * t._y1 + e) / 6)
            }

            function yt(t) {
                this._context = t
            }
            yt.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
                },
                lineEnd: function() {
                    switch (this._point) {
                        case 3:
                            vt(this, this._x1, this._y1);
                        case 2:
                            this._context.lineTo(this._x1, this._y1)
                    }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
                },
                point: function(t, n) {
                    switch (t = +t, n = +n, this._point) {
                        case 0:
                            this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                            break;
                        case 1:
                            this._point = 2;
                            break;
                        case 2:
                            this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
                        default:
                            vt(this, t, n)
                    }
                    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
                }
            };
            var _t = function(t) {
                return new yt(t)
            };

            function gt(t) {
                this._context = t
            }
            gt.prototype = {
                areaStart: pt,
                areaEnd: pt,
                lineStart: function() {
                    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0
                },
                lineEnd: function() {
                    switch (this._point) {
                        case 1:
                            this._context.moveTo(this._x2, this._y2), this._context.closePath();
                            break;
                        case 2:
                            this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
                            break;
                        case 3:
                            this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4)
                    }
                },
                point: function(t, n) {
                    switch (t = +t, n = +n, this._point) {
                        case 0:
                            this._point = 1, this._x2 = t, this._y2 = n;
                            break;
                        case 1:
                            this._point = 2, this._x3 = t, this._y3 = n;
                            break;
                        case 2:
                            this._point = 3, this._x4 = t, this._y4 = n, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + n) / 6);
                            break;
                        default:
                            vt(this, t, n)
                    }
                    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
                }
            };
            var mt = function(t) {
                return new gt(t)
            };

            function xt(t) {
                this._context = t
            }
            xt.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
                },
                lineEnd: function() {
                    (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
                },
                point: function(t, n) {
                    switch (t = +t, n = +n, this._point) {
                        case 0:
                            this._point = 1;
                            break;
                        case 1:
                            this._point = 2;
                            break;
                        case 2:
                            this._point = 3;
                            var e = (this._x0 + 4 * this._x1 + t) / 6,
                                r = (this._y0 + 4 * this._y1 + n) / 6;
                            this._line ? this._context.lineTo(e, r) : this._context.moveTo(e, r);
                            break;
                        case 3:
                            this._point = 4;
                        default:
                            vt(this, t, n)
                    }
                    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
                }
            };
            var bt = function(t) {
                return new xt(t)
            };

            function wt(t, n) {
                this._basis = new yt(t), this._beta = n
            }
            wt.prototype = {
                lineStart: function() {
                    this._x = [], this._y = [], this._basis.lineStart()
                },
                lineEnd: function() {
                    var t = this._x,
                        n = this._y,
                        e = t.length - 1;
                    if (e > 0)
                        for (var r, i = t[0], u = n[0], o = t[e] - i, a = n[e] - u, c = -1; ++c <= e;) r = c / e, this._basis.point(this._beta * t[c] + (1 - this._beta) * (i + r * o), this._beta * n[c] + (1 - this._beta) * (u + r * a));
                    this._x = this._y = null, this._basis.lineEnd()
                },
                point: function(t, n) {
                    this._x.push(+t), this._y.push(+n)
                }
            };
            var Mt = function t(n) {
                function e(t) {
                    return 1 === n ? new yt(t) : new wt(t, n)
                }
                return e.beta = function(n) {
                    return t(+n)
                }, e
            }(.85);

            function Tt(t, n, e) {
                t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - n), t._y2 + t._k * (t._y1 - e), t._x2, t._y2)
            }

            function kt(t, n) {
                this._context = t, this._k = (1 - n) / 6
            }
            kt.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
                },
                lineEnd: function() {
                    switch (this._point) {
                        case 2:
                            this._context.lineTo(this._x2, this._y2);
                            break;
                        case 3:
                            Tt(this, this._x1, this._y1)
                    }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
                },
                point: function(t, n) {
                    switch (t = +t, n = +n, this._point) {
                        case 0:
                            this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                            break;
                        case 1:
                            this._point = 2, this._x1 = t, this._y1 = n;
                            break;
                        case 2:
                            this._point = 3;
                        default:
                            Tt(this, t, n)
                    }
                    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
                }
            };
            var Nt = function t(n) {
                function e(t) {
                    return new kt(t, n)
                }
                return e.tension = function(n) {
                    return t(+n)
                }, e
            }(0);

            function St(t, n) {
                this._context = t, this._k = (1 - n) / 6
            }
            St.prototype = {
                areaStart: pt,
                areaEnd: pt,
                lineStart: function() {
                    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0
                },
                lineEnd: function() {
                    switch (this._point) {
                        case 1:
                            this._context.moveTo(this._x3, this._y3), this._context.closePath();
                            break;
                        case 2:
                            this._context.lineTo(this._x3, this._y3), this._context.closePath();
                            break;
                        case 3:
                            this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
                    }
                },
                point: function(t, n) {
                    switch (t = +t, n = +n, this._point) {
                        case 0:
                            this._point = 1, this._x3 = t, this._y3 = n;
                            break;
                        case 1:
                            this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
                            break;
                        case 2:
                            this._point = 3, this._x5 = t, this._y5 = n;
                            break;
                        default:
                            Tt(this, t, n)
                    }
                    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
                }
            };
            var Et = function t(n) {
                function e(t) {
                    return new St(t, n)
                }
                return e.tension = function(n) {
                    return t(+n)
                }, e
            }(0);

            function At(t, n) {
                this._context = t, this._k = (1 - n) / 6
            }
            At.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
                },
                lineEnd: function() {
                    (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
                },
                point: function(t, n) {
                    switch (t = +t, n = +n, this._point) {
                        case 0:
                            this._point = 1;
                            break;
                        case 1:
                            this._point = 2;
                            break;
                        case 2:
                            this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                            break;
                        case 3:
                            this._point = 4;
                        default:
                            Tt(this, t, n)
                    }
                    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
                }
            };
            var Ct = function t(n) {
                function e(t) {
                    return new At(t, n)
                }
                return e.tension = function(n) {
                    return t(+n)
                }, e
            }(0);

            function zt(t, n, e) {
                var r = t._x1,
                    i = t._y1,
                    u = t._x2,
                    o = t._y2;
                if (t._l01_a > h) {
                    var a = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
                        c = 3 * t._l01_a * (t._l01_a + t._l12_a);
                    r = (r * a - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / c, i = (i * a - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / c
                }
                if (t._l23_a > h) {
                    var f = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
                        s = 3 * t._l23_a * (t._l23_a + t._l12_a);
                    u = (u * f + t._x1 * t._l23_2a - n * t._l12_2a) / s, o = (o * f + t._y1 * t._l23_2a - e * t._l12_2a) / s
                }
                t._context.bezierCurveTo(r, i, u, o, t._x2, t._y2)
            }

            function Pt(t, n) {
                this._context = t, this._alpha = n
            }
            Pt.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
                },
                lineEnd: function() {
                    switch (this._point) {
                        case 2:
                            this._context.lineTo(this._x2, this._y2);
                            break;
                        case 3:
                            this.point(this._x2, this._y2)
                    }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
                },
                point: function(t, n) {
                    if (t = +t, n = +n, this._point) {
                        var e = this._x2 - t,
                            r = this._y2 - n;
                        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
                    }
                    switch (this._point) {
                        case 0:
                            this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                            break;
                        case 1:
                            this._point = 2;
                            break;
                        case 2:
                            this._point = 3;
                        default:
                            zt(this, t, n)
                    }
                    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
                }
            };
            var Ot = function t(n) {
                function e(t) {
                    return n ? new Pt(t, n) : new kt(t, 0)
                }
                return e.alpha = function(n) {
                    return t(+n)
                }, e
            }(.5);

            function Rt(t, n) {
                this._context = t, this._alpha = n
            }
            Rt.prototype = {
                areaStart: pt,
                areaEnd: pt,
                lineStart: function() {
                    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
                },
                lineEnd: function() {
                    switch (this._point) {
                        case 1:
                            this._context.moveTo(this._x3, this._y3), this._context.closePath();
                            break;
                        case 2:
                            this._context.lineTo(this._x3, this._y3), this._context.closePath();
                            break;
                        case 3:
                            this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
                    }
                },
                point: function(t, n) {
                    if (t = +t, n = +n, this._point) {
                        var e = this._x2 - t,
                            r = this._y2 - n;
                        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
                    }
                    switch (this._point) {
                        case 0:
                            this._point = 1, this._x3 = t, this._y3 = n;
                            break;
                        case 1:
                            this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
                            break;
                        case 2:
                            this._point = 3, this._x5 = t, this._y5 = n;
                            break;
                        default:
                            zt(this, t, n)
                    }
                    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
                }
            };
            var Lt = function t(n) {
                function e(t) {
                    return n ? new Rt(t, n) : new St(t, 0)
                }
                return e.alpha = function(n) {
                    return t(+n)
                }, e
            }(.5);

            function qt(t, n) {
                this._context = t, this._alpha = n
            }
            qt.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
                },
                lineEnd: function() {
                    (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
                },
                point: function(t, n) {
                    if (t = +t, n = +n, this._point) {
                        var e = this._x2 - t,
                            r = this._y2 - n;
                        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
                    }
                    switch (this._point) {
                        case 0:
                            this._point = 1;
                            break;
                        case 1:
                            this._point = 2;
                            break;
                        case 2:
                            this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                            break;
                        case 3:
                            this._point = 4;
                        default:
                            zt(this, t, n)
                    }
                    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
                }
            };
            var Dt = function t(n) {
                function e(t) {
                    return n ? new qt(t, n) : new At(t, 0)
                }
                return e.alpha = function(n) {
                    return t(+n)
                }, e
            }(.5);

            function Ut(t) {
                this._context = t
            }
            Ut.prototype = {
                areaStart: pt,
                areaEnd: pt,
                lineStart: function() {
                    this._point = 0
                },
                lineEnd: function() {
                    this._point && this._context.closePath()
                },
                point: function(t, n) {
                    t = +t, n = +n, this._point ? this._context.lineTo(t, n) : (this._point = 1, this._context.moveTo(t, n))
                }
            };
            var jt = function(t) {
                return new Ut(t)
            };

            function Ft(t) {
                return t < 0 ? -1 : 1
            }

            function It(t, n, e) {
                var r = t._x1 - t._x0,
                    i = n - t._x1,
                    u = (t._y1 - t._y0) / (r || i < 0 && -0),
                    o = (e - t._y1) / (i || r < 0 && -0),
                    a = (u * i + o * r) / (r + i);
                return (Ft(u) + Ft(o)) * Math.min(Math.abs(u), Math.abs(o), .5 * Math.abs(a)) || 0
            }

            function Yt(t, n) {
                var e = t._x1 - t._x0;
                return e ? (3 * (t._y1 - t._y0) / e - n) / 2 : n
            }

            function Bt(t, n, e) {
                var r = t._x0,
                    i = t._y0,
                    u = t._x1,
                    o = t._y1,
                    a = (u - r) / 3;
                t._context.bezierCurveTo(r + a, i + a * n, u - a, o - a * e, u, o)
            }

            function Ht(t) {
                this._context = t
            }

            function Xt(t) {
                this._context = new Vt(t)
            }

            function Vt(t) {
                this._context = t
            }

            function $t(t) {
                return new Ht(t)
            }

            function Wt(t) {
                return new Xt(t)
            }

            function Zt(t) {
                this._context = t
            }

            function Gt(t) {
                var n, e, r = t.length - 1,
                    i = new Array(r),
                    u = new Array(r),
                    o = new Array(r);
                for (i[0] = 0, u[0] = 2, o[0] = t[0] + 2 * t[1], n = 1; n < r - 1; ++n) i[n] = 1, u[n] = 4, o[n] = 4 * t[n] + 2 * t[n + 1];
                for (i[r - 1] = 2, u[r - 1] = 7, o[r - 1] = 8 * t[r - 1] + t[r], n = 1; n < r; ++n) e = i[n] / u[n - 1], u[n] -= e, o[n] -= e * o[n - 1];
                for (i[r - 1] = o[r - 1] / u[r - 1], n = r - 2; n >= 0; --n) i[n] = (o[n] - i[n + 1]) / u[n];
                for (u[r - 1] = (t[r] + i[r - 1]) / 2, n = 0; n < r - 1; ++n) u[n] = 2 * t[n + 1] - i[n + 1];
                return [i, u]
            }
            Ht.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0
                },
                lineEnd: function() {
                    switch (this._point) {
                        case 2:
                            this._context.lineTo(this._x1, this._y1);
                            break;
                        case 3:
                            Bt(this, this._t0, Yt(this, this._t0))
                    }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
                },
                point: function(t, n) {
                    var e = NaN;
                    if (n = +n, (t = +t) !== this._x1 || n !== this._y1) {
                        switch (this._point) {
                            case 0:
                                this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                                break;
                            case 1:
                                this._point = 2;
                                break;
                            case 2:
                                this._point = 3, Bt(this, Yt(this, e = It(this, t, n)), e);
                                break;
                            default:
                                Bt(this, this._t0, e = It(this, t, n))
                        }
                        this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n, this._t0 = e
                    }
                }
            }, (Xt.prototype = Object.create(Ht.prototype)).point = function(t, n) {
                Ht.prototype.point.call(this, n, t)
            }, Vt.prototype = {
                moveTo: function(t, n) {
                    this._context.moveTo(n, t)
                },
                closePath: function() {
                    this._context.closePath()
                },
                lineTo: function(t, n) {
                    this._context.lineTo(n, t)
                },
                bezierCurveTo: function(t, n, e, r, i, u) {
                    this._context.bezierCurveTo(n, t, r, e, u, i)
                }
            }, Zt.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._x = [], this._y = []
                },
                lineEnd: function() {
                    var t = this._x,
                        n = this._y,
                        e = t.length;
                    if (e)
                        if (this._line ? this._context.lineTo(t[0], n[0]) : this._context.moveTo(t[0], n[0]), 2 === e) this._context.lineTo(t[1], n[1]);
                        else
                            for (var r = Gt(t), i = Gt(n), u = 0, o = 1; o < e; ++u, ++o) this._context.bezierCurveTo(r[0][u], i[0][u], r[1][u], i[1][u], t[o], n[o]);
                    (this._line || 0 !== this._line && 1 === e) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
                },
                point: function(t, n) {
                    this._x.push(+t), this._y.push(+n)
                }
            };
            var Qt = function(t) {
                return new Zt(t)
            };

            function Jt(t, n) {
                this._context = t, this._t = n
            }
            Jt.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._x = this._y = NaN, this._point = 0
                },
                lineEnd: function() {
                    0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line)
                },
                point: function(t, n) {
                    switch (t = +t, n = +n, this._point) {
                        case 0:
                            this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                            break;
                        case 1:
                            this._point = 2;
                        default:
                            if (this._t <= 0) this._context.lineTo(this._x, n), this._context.lineTo(t, n);
                            else {
                                var e = this._x * (1 - this._t) + t * this._t;
                                this._context.lineTo(e, this._y), this._context.lineTo(e, n)
                            }
                    }
                    this._x = t, this._y = n
                }
            };
            var Kt = function(t) {
                return new Jt(t, .5)
            };

            function tn(t) {
                return new Jt(t, 0)
            }

            function nn(t) {
                return new Jt(t, 1)
            }
            var en = function(t, n) {
                    if ((i = t.length) > 1)
                        for (var e, r, i, u = 1, o = t[n[0]], a = o.length; u < i; ++u)
                            for (r = o, o = t[n[u]], e = 0; e < a; ++e) o[e][1] += o[e][0] = isNaN(r[e][1]) ? r[e][0] : r[e][1]
                },
                rn = function(t) {
                    for (var n = t.length, e = new Array(n); --n >= 0;) e[n] = n;
                    return e
                };

            function un(t, n) {
                return t[n]
            }
            var on = function() {
                    var t = i([]),
                        n = rn,
                        e = en,
                        r = un;

                    function u(i) {
                        var u, o, a = t.apply(this, arguments),
                            c = i.length,
                            f = a.length,
                            s = new Array(f);
                        for (u = 0; u < f; ++u) {
                            for (var l, h = a[u], d = s[u] = new Array(c), p = 0; p < c; ++p) d[p] = l = [0, +r(i[p], h, p, i)], l.data = i[p];
                            d.key = h
                        }
                        for (u = 0, o = n(s); u < f; ++u) s[o[u]].index = u;
                        return e(s, o), s
                    }
                    return u.keys = function(n) {
                        return arguments.length ? (t = "function" == typeof n ? n : i(F.call(n)), u) : t
                    }, u.value = function(t) {
                        return arguments.length ? (r = "function" == typeof t ? t : i(+t), u) : r
                    }, u.order = function(t) {
                        return arguments.length ? (n = null == t ? rn : "function" == typeof t ? t : i(F.call(t)), u) : n
                    }, u.offset = function(t) {
                        return arguments.length ? (e = null == t ? en : t, u) : e
                    }, u
                },
                an = function(t, n) {
                    if ((r = t.length) > 0) {
                        for (var e, r, i, u = 0, o = t[0].length; u < o; ++u) {
                            for (i = e = 0; e < r; ++e) i += t[e][u][1] || 0;
                            if (i)
                                for (e = 0; e < r; ++e) t[e][u][1] /= i
                        }
                        en(t, n)
                    }
                },
                cn = function(t, n) {
                    if ((a = t.length) > 1)
                        for (var e, r, i, u, o, a, c = 0, f = t[n[0]].length; c < f; ++c)
                            for (u = o = 0, e = 0; e < a; ++e)(i = (r = t[n[e]][c])[1] - r[0]) >= 0 ? (r[0] = u, r[1] = u += i) : i < 0 ? (r[1] = o, r[0] = o += i) : r[0] = u
                },
                fn = function(t, n) {
                    if ((e = t.length) > 0) {
                        for (var e, r = 0, i = t[n[0]], u = i.length; r < u; ++r) {
                            for (var o = 0, a = 0; o < e; ++o) a += t[o][r][1] || 0;
                            i[r][1] += i[r][0] = -a / 2
                        }
                        en(t, n)
                    }
                },
                sn = function(t, n) {
                    if ((i = t.length) > 0 && (r = (e = t[n[0]]).length) > 0) {
                        for (var e, r, i, u = 0, o = 1; o < r; ++o) {
                            for (var a = 0, c = 0, f = 0; a < i; ++a) {
                                for (var s = t[n[a]], l = s[o][1] || 0, h = (l - (s[o - 1][1] || 0)) / 2, d = 0; d < a; ++d) {
                                    var p = t[n[d]];
                                    h += (p[o][1] || 0) - (p[o - 1][1] || 0)
                                }
                                c += l, f += h * l
                            }
                            e[o - 1][1] += e[o - 1][0] = u, c && (u -= f / c)
                        }
                        e[o - 1][1] += e[o - 1][0] = u, en(t, n)
                    }
                },
                ln = function(t) {
                    var n = t.map(hn);
                    return rn(t).sort((function(t, e) {
                        return n[t] - n[e]
                    }))
                };

            function hn(t) {
                for (var n, e = 0, r = -1, i = t.length; ++r < i;)(n = +t[r][1]) && (e += n);
                return e
            }
            var dn = function(t) {
                    return ln(t).reverse()
                },
                pn = function(t) {
                    var n, e, r = t.length,
                        i = t.map(hn),
                        u = rn(t).sort((function(t, n) {
                            return i[n] - i[t]
                        })),
                        o = 0,
                        a = 0,
                        c = [],
                        f = [];
                    for (n = 0; n < r; ++n) e = u[n], o < a ? (o += i[e], c.push(e)) : (a += i[e], f.push(e));
                    return f.reverse().concat(c)
                },
                vn = function(t) {
                    return rn(t).reverse()
                };
            e.d(n, "a", (function() {
                return M
            })), e.d(n, "b", (function() {
                return A
            })), e.d(n, "v", (function() {
                return E
            })), e.d(n, "A", (function() {
                return P
            })), e.d(n, "c", (function() {
                return U
            })), e.d(n, "C", (function() {
                return U
            })), e.d(n, "w", (function() {
                return D
            })), e.d(n, "D", (function() {
                return D
            })), e.d(n, "B", (function() {
                return j
            })), e.d(n, "x", (function() {
                return $
            })), e.d(n, "z", (function() {
                return W
            })), e.d(n, "y", (function() {
                return Z
            })), e.d(n, "P", (function() {
                return dt
            })), e.d(n, "X", (function() {
                return ht
            })), e.d(n, "Q", (function() {
                return G
            })), e.d(n, "R", (function() {
                return Q
            })), e.d(n, "S", (function() {
                return tt
            })), e.d(n, "T", (function() {
                return ut
            })), e.d(n, "U", (function() {
                return it
            })), e.d(n, "V", (function() {
                return at
            })), e.d(n, "W", (function() {
                return lt
            })), e.d(n, "e", (function() {
                return mt
            })), e.d(n, "f", (function() {
                return bt
            })), e.d(n, "d", (function() {
                return _t
            })), e.d(n, "g", (function() {
                return Mt
            })), e.d(n, "i", (function() {
                return Et
            })), e.d(n, "j", (function() {
                return Ct
            })), e.d(n, "h", (function() {
                return Nt
            })), e.d(n, "l", (function() {
                return Lt
            })), e.d(n, "m", (function() {
                return Dt
            })), e.d(n, "k", (function() {
                return Ot
            })), e.d(n, "o", (function() {
                return jt
            })), e.d(n, "n", (function() {
                return k
            })), e.d(n, "p", (function() {
                return $t
            })), e.d(n, "q", (function() {
                return Wt
            })), e.d(n, "r", (function() {
                return Qt
            })), e.d(n, "s", (function() {
                return Kt
            })), e.d(n, "t", (function() {
                return nn
            })), e.d(n, "u", (function() {
                return tn
            })), e.d(n, "E", (function() {
                return on
            })), e.d(n, "G", (function() {
                return an
            })), e.d(n, "F", (function() {
                return cn
            })), e.d(n, "H", (function() {
                return en
            })), e.d(n, "I", (function() {
                return fn
            })), e.d(n, "J", (function() {
                return sn
            })), e.d(n, "K", (function() {
                return ln
            })), e.d(n, "L", (function() {
                return dn
            })), e.d(n, "M", (function() {
                return pn
            })), e.d(n, "N", (function() {
                return rn
            })), e.d(n, "O", (function() {
                return vn
            }))
        }
    })
}));
