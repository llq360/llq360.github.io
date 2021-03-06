! function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    function n(e) {
        var t = !!e && "length" in e && e.length,
            n = re.type(e);
        return "function" === n || re.isWindow(e) ? !1 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function i(e, t, n) {
        if (re.isFunction(t)) return re.grep(e, function (e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType) return re.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (me.test(t)) return re.filter(t, e, n);
            t = re.filter(t, e)
        }
        return re.grep(e, function (e) {
            return Z.call(t, e) > -1 !== n
        })
    }

    function o(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function r(e) {
        var t = {};
        return re.each(e.match(_e) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function a() {
        Y.removeEventListener("DOMContentLoaded", a), e.removeEventListener("load", a), re.ready()
    }

    function s() {
        this.expando = re.expando + s.uid++
    }

    function l(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(Ve, "-$&").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ie.test(n) ? re.parseJSON(n) : n
                } catch (o) {}
                Se.set(e, t, n)
            }
        else n = void 0;
        return n
    }

    function c(e, t, n, i) {
        var o, r = 1,
            a = 20,
            s = i ? function () {
                return i.cur()
            } : function () {
                return re.css(e, t, "")
            },
            l = s(),
            c = n && n[3] || (re.cssNumber[t] ? "" : "px"),
            d = (re.cssNumber[t] || "px" !== c && +l) && Ne.exec(re.css(e, t));
        if (d && d[3] !== c) {
            c = c || d[3], n = n || [], d = +l || 1;
            do r = r || ".5", d /= r, re.style(e, t, d + c); while (r !== (r = s() / l) && 1 !== r && --a)
        }
        return n && (d = +d || +l || 0, o = n[1] ? d + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = d, i.end = o)), o
    }

    function d(e, t) {
        var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && re.nodeName(e, t) ? re.merge([e], n) : n
    }

    function u(e, t) {
        for (var n = 0, i = e.length; i > n; n++) ke.set(e[n], "globalEval", !t || ke.get(t[n], "globalEval"))
    }

    function p(e, t, n, i, o) {
        for (var r, a, s, l, c, p, f = t.createDocumentFragment(), h = [], m = 0, v = e.length; v > m; m++)
            if (r = e[m], r || 0 === r)
                if ("object" === re.type(r)) re.merge(h, r.nodeType ? [r] : r);
                else if (Pe.test(r)) {
            for (a = a || f.appendChild(t.createElement("div")), s = (Ee.exec(r) || ["", ""])[1].toLowerCase(), l = Re[s] || Re._default, a.innerHTML = l[1] + re.htmlPrefilter(r) + l[2], p = l[0]; p--;) a = a.lastChild;
            re.merge(h, a.childNodes), a = f.firstChild, a.textContent = ""
        } else h.push(t.createTextNode(r));
        for (f.textContent = "", m = 0; r = h[m++];)
            if (i && re.inArray(r, i) > -1) o && o.push(r);
            else if (c = re.contains(r.ownerDocument, r), a = d(f.appendChild(r), "script"), c && u(a), n)
            for (p = 0; r = a[p++];) qe.test(r.type || "") && n.push(r);
        return f
    }

    function f() {
        return !0
    }

    function h() {
        return !1
    }

    function m() {
        try {
            return Y.activeElement
        } catch (e) {}
    }

    function v(e, t, n, i, o, r) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (s in t) v(e, s, n, i, t[s], r);
            return e
        }
        if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), o === !1) o = h;
        else if (!o) return e;
        return 1 === r && (a = o, o = function (e) {
            return re().off(e), a.apply(this, arguments)
        }, o.guid = a.guid || (a.guid = re.guid++)), e.each(function () {
            re.event.add(this, t, o, i, n)
        })
    }

    function g(e, t) {
        return re.nodeName(e, "table") && re.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function b(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function w(e) {
        var t = De.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function $(e, t) {
        var n, i, o, r, a, s, l, c;
        if (1 === t.nodeType) {
            if (ke.hasData(e) && (r = ke.access(e), a = ke.set(t, r), c = r.events)) {
                delete a.handle, a.events = {};
                for (o in c)
                    for (n = 0, i = c[o].length; i > n; n++) re.event.add(t, o, c[o][n])
            }
            Se.hasData(e) && (s = Se.access(e), l = re.extend({}, s), Se.set(t, l))
        }
    }

    function _(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && je.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function x(e, t, n, i) {
        t = X.apply([], t);
        var o, r, a, s, l, c, u = 0,
            f = e.length,
            h = f - 1,
            m = t[0],
            v = re.isFunction(m);
        if (v || f > 1 && "string" == typeof m && !ie.checkClone && Fe.test(m)) return e.each(function (o) {
            var r = e.eq(o);
            v && (t[0] = m.call(this, o, r.html())), x(r, t, n, i)
        });
        if (f && (o = p(t, e[0].ownerDocument, !1, e, i), r = o.firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
            for (a = re.map(d(o, "script"), b), s = a.length; f > u; u++) l = o, u !== h && (l = re.clone(l, !0, !0), s && re.merge(a, d(l, "script"))), n.call(e[u], l, u);
            if (s)
                for (c = a[a.length - 1].ownerDocument, re.map(a, w), u = 0; s > u; u++) l = a[u], qe.test(l.type || "") && !ke.access(l, "globalEval") && re.contains(c, l) && (l.src ? re._evalUrl && re._evalUrl(l.src) : re.globalEval(l.textContent.replace(Ge, "")))
        }
        return e
    }

    function y(e, t, n) {
        for (var i, o = t ? re.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || re.cleanData(d(i)), i.parentNode && (n && re.contains(i.ownerDocument, i) && u(d(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    function C(e, t) {
        var n = re(t.createElement(e)).appendTo(t.body),
            i = re.css(n[0], "display");
        return n.detach(), i
    }

    function k(e) {
        var t = Y,
            n = We[e];
        return n || (n = C(e, t), "none" !== n && n || (Ue = (Ue || re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Ue[0].contentDocument, t.write(), t.close(), n = C(e, t), Ue.detach()), We[e] = n), n
    }

    function S(e, t, n) {
        var i, o, r, a, s = e.style;
        return n = n || Je(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== a && void 0 !== a || re.contains(e.ownerDocument, e) || (a = re.style(e, t)), n && !ie.pixelMarginRight() && Ye.test(a) && Qe.test(t) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r), void 0 !== a ? a + "" : a
    }

    function I(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function V(e) {
        if (e in it) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = nt.length; n--;)
            if (e = nt[n] + t, e in it) return e
    }

    function T(e, t, n) {
        var i = Ne.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function N(e, t, n, i, o) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > r; r += 2) "margin" === n && (a += re.css(e, n + Ae[r], !0, o)), i ? ("content" === n && (a -= re.css(e, "padding" + Ae[r], !0, o)), "margin" !== n && (a -= re.css(e, "border" + Ae[r] + "Width", !0, o))) : (a += re.css(e, "padding" + Ae[r], !0, o), "padding" !== n && (a += re.css(e, "border" + Ae[r] + "Width", !0, o)));
        return a
    }

    function A(e, t, n) {
        var i = !0,
            o = "width" === t ? e.offsetWidth : e.offsetHeight,
            r = Je(e),
            a = "border-box" === re.css(e, "boxSizing", !1, r);
        if (0 >= o || null == o) {
            if (o = S(e, t, r), (0 > o || null == o) && (o = e.style[t]), Ye.test(o)) return o;
            i = a && (ie.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
        }
        return o + N(e, t, n || (a ? "border" : "content"), i, r) + "px"
    }

    function L(e, t) {
        for (var n, i, o, r = [], a = 0, s = e.length; s > a; a++) i = e[a], i.style && (r[a] = ke.get(i, "olddisplay"), n = i.style.display, t ? (r[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && Le(i) && (r[a] = ke.access(i, "olddisplay", k(i.nodeName)))) : (o = Le(i), "none" === n && o || ke.set(i, "olddisplay", o ? n : re.css(i, "display"))));
        for (a = 0; s > a; a++) i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[a] || "" : "none"));
        return e
    }

    function j(e, t, n, i, o) {
        return new j.prototype.init(e, t, n, i, o)
    }

    function E() {
        return e.setTimeout(function () {
            ot = void 0
        }), ot = re.now()
    }

    function q(e, t) {
        var n, i = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Ae[i], o["margin" + n] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function R(e, t, n) {
        for (var i, o = (M.tweeners[t] || []).concat(M.tweeners["*"]), r = 0, a = o.length; a > r; r++)
            if (i = o[r].call(n, t, e)) return i
    }

    function P(e, t, n) {
        var i, o, r, a, s, l, c, d, u = this,
            p = {},
            f = e.style,
            h = e.nodeType && Le(e),
            m = ke.get(e, "fxshow");
        n.queue || (s = re._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
            s.unqueued || l()
        }), s.unqueued++, u.always(function () {
            u.always(function () {
                s.unqueued--, re.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], c = re.css(e, "display"), d = "none" === c ? ke.get(e, "olddisplay") || k(e.nodeName) : c, "inline" === d && "none" === re.css(e, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", u.always(function () {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (o = t[i], at.exec(o)) {
                if (delete t[i], r = r || "toggle" === o, o === (h ? "hide" : "show")) {
                    if ("show" !== o || !m || void 0 === m[i]) continue;
                    h = !0
                }
                p[i] = m && m[i] || re.style(e, i)
            }
        else c = void 0;
        if (re.isEmptyObject(p)) "inline" === ("none" === c ? k(e.nodeName) : c) && (f.display = c);
        else {
            m ? "hidden" in m && (h = m.hidden) : m = ke.access(e, "fxshow", {}), r && (m.hidden = !h), h ? re(e).show() : u.done(function () {
                re(e).hide()
            }), u.done(function () {
                var t;
                ke.remove(e, "fxshow");
                for (t in p) re.style(e, t, p[t])
            });
            for (i in p) a = R(h ? m[i] : 0, i, u), i in m || (m[i] = a.start, h && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function z(e, t) {
        var n, i, o, r, a;
        for (n in e)
            if (i = re.camelCase(n), o = t[i], r = e[n], re.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), a = re.cssHooks[i], a && "expand" in a) {
                r = a.expand(r), delete e[i];
                for (n in r) n in e || (e[n] = r[n], t[n] = o)
            }
        else t[i] = o
    }

    function M(e, t, n) {
        var i, o, r = 0,
            a = M.prefilters.length,
            s = re.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (o) return !1;
                for (var t = ot || E(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, r = 1 - i, a = 0, l = c.tweens.length; l > a; a++) c.tweens[a].run(r);
                return s.notifyWith(e, [c, r, n]), 1 > r && l ? n : (s.resolveWith(e, [c]), !1)
            },
            c = s.promise({
                elem: e,
                props: re.extend({}, t),
                opts: re.extend(!0, {
                    specialEasing: {},
                    easing: re.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: ot || E(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var i = re.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function (t) {
                    var n = 0,
                        i = t ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; i > n; n++) c.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
                }
            }),
            d = c.props;
        for (z(d, c.opts.specialEasing); a > r; r++)
            if (i = M.prefilters[r].call(c, e, d, c.opts)) return re.isFunction(i.stop) && (re._queueHooks(c.elem, c.opts.queue).stop = re.proxy(i.stop, i)), i;
        return re.map(d, R, c), re.isFunction(c.opts.start) && c.opts.start.call(e, c), re.fx.timer(re.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function O(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function B(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, o = 0,
                r = t.toLowerCase().match(_e) || [];
            if (re.isFunction(n))
                for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function H(e, t, n, i) {
        function o(s) {
            var l;
            return r[s] = !0, re.each(e[s] || [], function (e, s) {
                var c = s(t, n, i);
                return "string" != typeof c || a || r[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
            }), l
        }
        var r = {},
            a = e === St;
        return o(t.dataTypes[0]) || !r["*"] && o("*")
    }

    function F(e, t) {
        var n, i, o = re.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && re.extend(!0, e, i), e
    }

    function D(e, t, n) {
        for (var i, o, r, a, s = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (o in s)
                if (s[o] && s[o].test(i)) {
                    l.unshift(o);
                    break
                }
        if (l[0] in n) r = l[0];
        else {
            for (o in n) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    r = o;
                    break
                }
                a || (a = o)
            }
            r = r || a
        }
        return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
    }

    function G(e, t, n, i) {
        var o, r, a, s, l, c = {},
            d = e.dataTypes.slice();
        if (d[1])
            for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
        for (r = d.shift(); r;)
            if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = d.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
            if (a = c[l + " " + r] || c["* " + r], !a)
                for (o in c)
                    if (s = o.split(" "), s[1] === r && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                        a === !0 ? a = c[o] : c[o] !== !0 && (r = s[0], d.unshift(s[1]));
                        break
                    }
            if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                }
            catch (u) {
                return {
                    state: "parsererror",
                    error: a ? u : "No conversion from " + l + " to " + r
                }
            }
        }
        return {
            state: "success",
            data: t
        }
    }

    function U(e, t, n, i) {
        var o;
        if (re.isArray(t)) re.each(t, function (t, o) {
            n || Nt.test(e) ? i(e, o) : U(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
        });
        else if (n || "object" !== re.type(t)) i(e, t);
        else
            for (o in t) U(e + "[" + o + "]", t[o], n, i)
    }

    function W(e) {
        return re.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var Q = [],
        Y = e.document,
        J = Q.slice,
        X = Q.concat,
        K = Q.push,
        Z = Q.indexOf,
        ee = {},
        te = ee.toString,
        ne = ee.hasOwnProperty,
        ie = {},
        oe = "2.2.4",
        re = function (e, t) {
            return new re.fn.init(e, t)
        },
        ae = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        se = /^-ms-/,
        le = /-([\da-z])/gi,
        ce = function (e, t) {
            return t.toUpperCase()
        };
    re.fn = re.prototype = {
        jquery: oe,
        constructor: re,
        selector: "",
        length: 0,
        toArray: function () {
            return J.call(this)
        },
        get: function (e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : J.call(this)
        },
        pushStack: function (e) {
            var t = re.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function (e) {
            return re.each(this, e)
        },
        map: function (e) {
            return this.pushStack(re.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function () {
            return this.pushStack(J.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: K,
        sort: Q.sort,
        splice: Q.splice
    }, re.extend = re.fn.extend = function () {
        var e, t, n, i, o, r, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || re.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = a[t], i = e[t], a !== i && (c && i && (re.isPlainObject(i) || (o = re.isArray(i))) ? (o ? (o = !1, r = n && re.isArray(n) ? n : []) : r = n && re.isPlainObject(n) ? n : {}, a[t] = re.extend(c, r, i)) : void 0 !== i && (a[t] = i));
        return a
    }, re.extend({
        expando: "jQuery" + (oe + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isFunction: function (e) {
            return "function" === re.type(e)
        },
        isArray: Array.isArray,
        isWindow: function (e) {
            return null != e && e === e.window
        },
        isNumeric: function (e) {
            var t = e && e.toString();
            return !re.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isPlainObject: function (e) {
            var t;
            if ("object" !== re.type(e) || e.nodeType || re.isWindow(e)) return !1;
            if (e.constructor && !ne.call(e, "constructor") && !ne.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (t in e);
            return void 0 === t || ne.call(e, t)
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[te.call(e)] || "object" : typeof e
        },
        globalEval: function (e) {
            var t, n = eval;
            e = re.trim(e), e && (1 === e.indexOf("use strict") ? (t = Y.createElement("script"), t.text = e, Y.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function (e) {
            return e.replace(se, "ms-").replace(le, ce)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t) {
            var i, o = 0;
            if (n(e))
                for (i = e.length; i > o && t.call(e[o], o, e[o]) !== !1; o++);
            else
                for (o in e)
                    if (t.call(e[o], o, e[o]) === !1) break;
            return e
        },
        trim: function (e) {
            return null == e ? "" : (e + "").replace(ae, "")
        },
        makeArray: function (e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? re.merge(i, "string" == typeof e ? [e] : e) : K.call(i, e)), i
        },
        inArray: function (e, t, n) {
            return null == t ? -1 : Z.call(t, e, n)
        },
        merge: function (e, t) {
            for (var n = +t.length, i = 0, o = e.length; n > i; i++) e[o++] = t[i];
            return e.length = o, e
        },
        grep: function (e, t, n) {
            for (var i, o = [], r = 0, a = e.length, s = !n; a > r; r++) i = !t(e[r], r), i !== s && o.push(e[r]);
            return o
        },
        map: function (e, t, i) {
            var o, r, a = 0,
                s = [];
            if (n(e))
                for (o = e.length; o > a; a++) r = t(e[a], a, i), null != r && s.push(r);
            else
                for (a in e) r = t(e[a], a, i), null != r && s.push(r);
            return X.apply([], s)
        },
        guid: 1,
        proxy: function (e, t) {
            var n, i, o;
            return "string" == typeof t && (n = e[t], t = e, e = n), re.isFunction(e) ? (i = J.call(arguments, 2), o = function () {
                return e.apply(t || this, i.concat(J.call(arguments)))
            }, o.guid = e.guid = e.guid || re.guid++, o) : void 0
        },
        now: Date.now,
        support: ie
    }), "function" == typeof Symbol && (re.fn[Symbol.iterator] = Q[Symbol.iterator]), re.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        ee["[object " + t + "]"] = t.toLowerCase()
    });
    var de = function (e) {
        function t(e, t, n, i) {
            var o, r, a, s, l, c, u, f, h = t && t.ownerDocument,
                m = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m) return n;
            if (!i && ((t ? t.ownerDocument || t : O) !== L && A(t), t = t || L, E)) {
                if (11 !== m && (c = ge.exec(e)))
                    if (o = c[1]) {
                        if (9 === m) {
                            if (!(a = t.getElementById(o))) return n;
                            if (a.id === o) return n.push(a), n
                        } else if (h && (a = h.getElementById(o)) && z(t, a) && a.id === o) return n.push(a), n
                    }
                else {
                    if (c[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                    if ((o = c[3]) && _.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(o)), n
                }
                if (_.qsa && !G[e + " "] && (!q || !q.test(e))) {
                    if (1 !== m) h = t, f = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(we, "\\$&") : t.setAttribute("id", s = M), u = k(e), r = u.length, l = pe.test(s) ? "#" + s : "[id='" + s + "']"; r--;) u[r] = l + " " + p(u[r]);
                        f = u.join(","), h = be.test(e) && d(t.parentNode) || t
                    }
                    if (f) try {
                        return K.apply(n, h.querySelectorAll(f)), n
                    }
                    catch (v) {} finally {
                        s === M && t.removeAttribute("id")
                    }
                }
            }
            return I(e.replace(se, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > x.cacheLength && delete e[t.shift()], e[n + " "] = i
            }
            var t = [];
            return e
        }

        function i(e) {
            return e[M] = !0, e
        }

        function o(e) {
            var t = L.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function r(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) x.attrHandle[n[i]] = t
        }

        function a(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || W) - (~e.sourceIndex || W);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function c(e) {
            return i(function (t) {
                return t = +t, i(function (n, i) {
                    for (var o, r = e([], n.length, t), a = r.length; a--;) n[o = r[a]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }

        function d(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function u() {}

        function p(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
            return i
        }

        function f(e, t, n) {
            var i = t.dir,
                o = n && "parentNode" === i,
                r = H++;
            return t.first ? function (t, n, r) {
                for (; t = t[i];)
                    if (1 === t.nodeType || o) return e(t, n, r)
            } : function (t, n, a) {
                var s, l, c, d = [B, r];
                if (a) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || o) && e(t, n, a)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || o) {
                            if (c = t[M] || (t[M] = {}), l = c[t.uniqueID] || (c[t.uniqueID] = {}), (s = l[i]) && s[0] === B && s[1] === r) return d[2] = s[2];
                            if (l[i] = d, d[2] = e(t, n, a)) return !0
                        }
            }
        }

        function h(e) {
            return e.length > 1 ? function (t, n, i) {
                for (var o = e.length; o--;)
                    if (!e[o](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function m(e, n, i) {
            for (var o = 0, r = n.length; r > o; o++) t(e, n[o], i);
            return i
        }

        function v(e, t, n, i, o) {
            for (var r, a = [], s = 0, l = e.length, c = null != t; l > s; s++)(r = e[s]) && (n && !n(r, i, o) || (a.push(r), c && t.push(s)));
            return a
        }

        function g(e, t, n, o, r, a) {
            return o && !o[M] && (o = g(o)), r && !r[M] && (r = g(r, a)), i(function (i, a, s, l) {
                var c, d, u, p = [],
                    f = [],
                    h = a.length,
                    g = i || m(t || "*", s.nodeType ? [s] : s, []),
                    b = !e || !i && t ? g : v(g, p, e, s, l),
                    w = n ? r || (i ? e : h || o) ? [] : a : b;
                if (n && n(b, w, s, l), o)
                    for (c = v(w, f), o(c, [], s, l), d = c.length; d--;)(u = c[d]) && (w[f[d]] = !(b[f[d]] = u));
                if (i) {
                    if (r || e) {
                        if (r) {
                            for (c = [], d = w.length; d--;)(u = w[d]) && c.push(b[d] = u);
                            r(null, w = [], c, l)
                        }
                        for (d = w.length; d--;)(u = w[d]) && (c = r ? ee(i, u) : p[d]) > -1 && (i[c] = !(a[c] = u))
                    }
                } else w = v(w === a ? w.splice(h, w.length) : w), r ? r(null, a, w, l) : K.apply(a, w)
            })
        }

        function b(e) {
            for (var t, n, i, o = e.length, r = x.relative[e[0].type], a = r || x.relative[" "], s = r ? 1 : 0, l = f(function (e) {
                    return e === t
                }, a, !0), c = f(function (e) {
                    return ee(t, e) > -1
                }, a, !0), d = [function (e, n, i) {
                    var o = !r && (i || n !== V) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                    return t = null, o
                }]; o > s; s++)
                if (n = x.relative[e[s].type]) d = [f(h(d), n)];
                else {
                    if (n = x.filter[e[s].type].apply(null, e[s].matches), n[M]) {
                        for (i = ++s; o > i && !x.relative[e[i].type]; i++);
                        return g(s > 1 && h(d), s > 1 && p(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(se, "$1"), n, i > s && b(e.slice(s, i)), o > i && b(e = e.slice(i)), o > i && p(e))
                    }
                    d.push(n)
                }
            return h(d)
        }

        function w(e, n) {
            var o = n.length > 0,
                r = e.length > 0,
                a = function (i, a, s, l, c) {
                    var d, u, p, f = 0,
                        h = "0",
                        m = i && [],
                        g = [],
                        b = V,
                        w = i || r && x.find.TAG("*", c),
                        $ = B += null == b ? 1 : Math.random() || .1,
                        _ = w.length;
                    for (c && (V = a === L || a || c); h !== _ && null != (d = w[h]); h++) {
                        if (r && d) {
                            for (u = 0, a || d.ownerDocument === L || (A(d), s = !E); p = e[u++];)
                                if (p(d, a || L, s)) {
                                    l.push(d);
                                    break
                                }
                            c && (B = $)
                        }
                        o && ((d = !p && d) && f--, i && m.push(d))
                    }
                    if (f += h, o && h !== f) {
                        for (u = 0; p = n[u++];) p(m, g, a, s);
                        if (i) {
                            if (f > 0)
                                for (; h--;) m[h] || g[h] || (g[h] = J.call(l));
                            g = v(g)
                        }
                        K.apply(l, g), c && !i && g.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                    }
                    return c && (B = $, V = b), m
                };
            return o ? i(a) : a
        }
        var $, _, x, y, C, k, S, I, V, T, N, A, L, j, E, q, R, P, z, M = "sizzle" + 1 * new Date,
            O = e.document,
            B = 0,
            H = 0,
            F = n(),
            D = n(),
            G = n(),
            U = function (e, t) {
                return e === t && (N = !0), 0
            },
            W = 1 << 31,
            Q = {}.hasOwnProperty,
            Y = [],
            J = Y.pop,
            X = Y.push,
            K = Y.push,
            Z = Y.slice,
            ee = function (e, t) {
                for (var n = 0, i = e.length; i > n; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            oe = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
            re = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
            ae = new RegExp(ne + "+", "g"),
            se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            le = new RegExp("^" + ne + "*," + ne + "*"),
            ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            ue = new RegExp(re),
            pe = new RegExp("^" + ie + "$"),
            fe = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie + "|[*])"),
                ATTR: new RegExp("^" + oe),
                PSEUDO: new RegExp("^" + re),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            he = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            be = /[+~]/,
            we = /'|\\/g,
            $e = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            _e = function (e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            xe = function () {
                A()
            };
        try {
            K.apply(Y = Z.call(O.childNodes), O.childNodes), Y[O.childNodes.length].nodeType
        } catch (ye) {
            K = {
                apply: Y.length ? function (e, t) {
                    X.apply(e, Z.call(t))
                } : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        _ = t.support = {}, C = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, A = t.setDocument = function (e) {
            var t, n, i = e ? e.ownerDocument || e : O;
            return i !== L && 9 === i.nodeType && i.documentElement ? (L = i, j = L.documentElement, E = !C(L), (n = L.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)), _.attributes = o(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), _.getElementsByTagName = o(function (e) {
                return e.appendChild(L.createComment("")), !e.getElementsByTagName("*").length
            }), _.getElementsByClassName = ve.test(L.getElementsByClassName), _.getById = o(function (e) {
                return j.appendChild(e).id = M, !L.getElementsByName || !L.getElementsByName(M).length
            }), _.getById ? (x.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }, x.filter.ID = function (e) {
                var t = e.replace($e, _e);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete x.find.ID, x.filter.ID = function (e) {
                var t = e.replace($e, _e);
                return function (e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), x.find.TAG = _.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : _.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, i = [],
                    o = 0,
                    r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return r
            }, x.find.CLASS = _.getElementsByClassName && function (e, t) {
                return "undefined" != typeof t.getElementsByClassName && E ? t.getElementsByClassName(e) : void 0
            }, R = [], q = [], (_.qsa = ve.test(L.querySelectorAll)) && (o(function (e) {
                j.appendChild(e).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || q.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + M + "-]").length || q.push("~="), e.querySelectorAll(":checked").length || q.push(":checked"), e.querySelectorAll("a#" + M + "+*").length || q.push(".#.+[+~]")
            }), o(function (e) {
                var t = L.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && q.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), q.push(",.*:")
            })), (_.matchesSelector = ve.test(P = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && o(function (e) {
                _.disconnectedMatch = P.call(e, "div"), P.call(e, "[s!='']:x"), R.push("!=", re)
            }), q = q.length && new RegExp(q.join("|")), R = R.length && new RegExp(R.join("|")), t = ve.test(j.compareDocumentPosition), z = t || ve.test(j.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function (e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, U = t ? function (e, t) {
                if (e === t) return N = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !_.sortDetached && t.compareDocumentPosition(e) === n ? e === L || e.ownerDocument === O && z(O, e) ? -1 : t === L || t.ownerDocument === O && z(O, t) ? 1 : T ? ee(T, e) - ee(T, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return N = !0, 0;
                var n, i = 0,
                    o = e.parentNode,
                    r = t.parentNode,
                    s = [e],
                    l = [t];
                if (!o || !r) return e === L ? -1 : t === L ? 1 : o ? -1 : r ? 1 : T ? ee(T, e) - ee(T, t) : 0;
                if (o === r) return a(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; s[i] === l[i];) i++;
                return i ? a(s[i], l[i]) : s[i] === O ? -1 : l[i] === O ? 1 : 0
            }, L) : L
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== L && A(e), n = n.replace(de, "='$1']"), _.matchesSelector && E && !G[n + " "] && (!R || !R.test(n)) && (!q || !q.test(n))) try {
                var i = P.call(e, n);
                if (i || _.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            }
            catch (o) {}
            return t(n, L, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== L && A(e), z(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== L && A(e);
            var n = x.attrHandle[t.toLowerCase()],
                i = n && Q.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
            return void 0 !== i ? i : _.attributes || !E ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [],
                i = 0,
                o = 0;
            if (N = !_.detectDuplicates, T = !_.sortStable && e.slice(0), e.sort(U), N) {
                for (; t = e[o++];) t === e[o] && (i = n.push(o));
                for (; i--;) e.splice(n[i], 1)
            }
            return T = null, e
        }, y = t.getText = function (e) {
            var t, n = "",
                i = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += y(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                for (; t = e[i++];) n += y(t);
            return n
        }, x = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace($e, _e), e[3] = (e[3] || e[4] || e[5] || "").replace($e, _e), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ue.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace($e, _e).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = F[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && F(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, n, i) {
                    return function (o) {
                        var r = t.attr(o, e);
                        return null == r ? "!=" === n : n ? (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(ae, " ") + " ").indexOf(i) > -1 : "|=" === n ? r === i || r.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function (e, t, n, i, o) {
                    var r = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === i && 0 === o ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, l) {
                        var c, d, u, p, f, h, m = r !== a ? "nextSibling" : "previousSibling",
                            v = t.parentNode,
                            g = s && t.nodeName.toLowerCase(),
                            b = !l && !s,
                            w = !1;
                        if (v) {
                            if (r) {
                                for (; m;) {
                                    for (p = t; p = p[m];)
                                        if (s ? p.nodeName.toLowerCase() === g : 1 === p.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? v.firstChild : v.lastChild], a && b) {
                                for (p = v, u = p[M] || (p[M] = {}), d = u[p.uniqueID] || (u[p.uniqueID] = {}), c = d[e] || [], f = c[0] === B && c[1], w = f && c[2], p = f && v.childNodes[f]; p = ++f && p && p[m] || (w = f = 0) || h.pop();)
                                    if (1 === p.nodeType && ++w && p === t) {
                                        d[e] = [B, f, w];
                                        break
                                    }
                            } else if (b && (p = t, u = p[M] || (p[M] = {}), d = u[p.uniqueID] || (u[p.uniqueID] = {}), c = d[e] || [], f = c[0] === B && c[1], w = f), w === !1)
                                for (;
                                    (p = ++f && p && p[m] || (w = f = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== g : 1 !== p.nodeType) || !++w || (b && (u = p[M] || (p[M] = {}), d = u[p.uniqueID] || (u[p.uniqueID] = {}), d[e] = [B, w]), p !== t)););
                            return w -= o, w === i || w % i === 0 && w / i >= 0
                        }
                    }
                },
                PSEUDO: function (e, n) {
                    var o, r = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return r[M] ? r(n) : r.length > 1 ? (o = [e, e, "", n], x.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
                        for (var i, o = r(e, n), a = o.length; a--;) i = ee(e, o[a]), e[i] = !(t[i] = o[a])
                    }) : function (e) {
                        return r(e, 0, o)
                    }) : r
                }
            },
            pseudos: {
                not: i(function (e) {
                    var t = [],
                        n = [],
                        o = S(e.replace(se, "$1"));
                    return o[M] ? i(function (e, t, n, i) {
                        for (var r, a = o(e, null, i, []), s = e.length; s--;)(r = a[s]) && (e[s] = !(t[s] = r))
                    }) : function (e, i, r) {
                        return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop()
                    }
                }),
                has: i(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function (e) {
                    return e = e.replace($e, _e),
                        function (t) {
                            return (t.textContent || t.innerText || y(t)).indexOf(e) > -1
                        }
                }),
                lang: i(function (e) {
                    return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace($e, _e).toLowerCase(),
                        function (t) {
                            var n;
                            do
                                if (n = E ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function (e) {
                    return e === j
                },
                focus: function (e) {
                    return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function (e) {
                    return e.disabled === !1
                },
                disabled: function (e) {
                    return e.disabled === !0
                },
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function (e) {
                    return !x.pseudos.empty(e)
                },
                header: function (e) {
                    return me.test(e.nodeName)
                },
                input: function (e) {
                    return he.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: c(function () {
                    return [0]
                }),
                last: c(function (e, t) {
                    return [t - 1]
                }),
                eq: c(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: c(function (e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: c(function (e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: c(function (e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: c(function (e, t, n) {
                    for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }, x.pseudos.nth = x.pseudos.eq;
        for ($ in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) x.pseudos[$] = s($);
        for ($ in {
                submit: !0,
                reset: !0
            }) x.pseudos[$] = l($);
        return u.prototype = x.filters = x.pseudos, x.setFilters = new u, k = t.tokenize = function (e, n) {
            var i, o, r, a, s, l, c, d = D[e + " "];
            if (d) return n ? 0 : d.slice(0);
            for (s = e, l = [], c = x.preFilter; s;) {
                i && !(o = le.exec(s)) || (o && (s = s.slice(o[0].length) || s), l.push(r = [])), i = !1, (o = ce.exec(s)) && (i = o.shift(), r.push({
                    value: i,
                    type: o[0].replace(se, " ")
                }), s = s.slice(i.length));
                for (a in x.filter) !(o = fe[a].exec(s)) || c[a] && !(o = c[a](o)) || (i = o.shift(), r.push({
                    value: i,
                    type: a,
                    matches: o
                }), s = s.slice(i.length));
                if (!i) break
            }
            return n ? s.length : s ? t.error(e) : D(e, l).slice(0)
        }, S = t.compile = function (e, t) {
            var n, i = [],
                o = [],
                r = G[e + " "];
            if (!r) {
                for (t || (t = k(e)), n = t.length; n--;) r = b(t[n]), r[M] ? i.push(r) : o.push(r);
                r = G(e, w(o, i)), r.selector = e
            }
            return r
        }, I = t.select = function (e, t, n, i) {
            var o, r, a, s, l, c = "function" == typeof e && e,
                u = !i && k(e = c.selector || e);
            if (n = n || [], 1 === u.length) {
                if (r = u[0] = u[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && _.getById && 9 === t.nodeType && E && x.relative[r[1].type]) {
                    if (t = (x.find.ID(a.matches[0].replace($e, _e), t) || [])[0], !t) return n;
                    c && (t = t.parentNode), e = e.slice(r.shift().value.length)
                }
                for (o = fe.needsContext.test(e) ? 0 : r.length; o-- && (a = r[o], !x.relative[s = a.type]);)
                    if ((l = x.find[s]) && (i = l(a.matches[0].replace($e, _e), be.test(r[0].type) && d(t.parentNode) || t))) {
                        if (r.splice(o, 1), e = i.length && p(r), !e) return K.apply(n, i), n;
                        break
                    }
            }
            return (c || S(e, u))(i, t, !E, n, !t || be.test(e) && d(t.parentNode) || t), n
        }, _.sortStable = M.split("").sort(U).join("") === M, _.detectDuplicates = !!N, A(), _.sortDetached = o(function (e) {
            return 1 & e.compareDocumentPosition(L.createElement("div"))
        }), o(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function (e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), _.attributes && o(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || r("value", function (e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), o(function (e) {
            return null == e.getAttribute("disabled")
        }) || r(te, function (e, t, n) {
            var i;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    re.find = de, re.expr = de.selectors, re.expr[":"] = re.expr.pseudos, re.uniqueSort = re.unique = de.uniqueSort, re.text = de.getText, re.isXMLDoc = de.isXML, re.contains = de.contains;
    var ue = function (e, t, n) {
            for (var i = [], o = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && re(e).is(n)) break;
                    i.push(e)
                }
            return i
        },
        pe = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        fe = re.expr.match.needsContext,
        he = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        me = /^.[^:#\[\.,]*$/;
    re.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? re.find.matchesSelector(i, e) ? [i] : [] : re.find.matches(e, re.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, re.fn.extend({
        find: function (e) {
            var t, n = this.length,
                i = [],
                o = this;
            if ("string" != typeof e) return this.pushStack(re(e).filter(function () {
                for (t = 0; n > t; t++)
                    if (re.contains(o[t], this)) return !0
            }));
            for (t = 0; n > t; t++) re.find(e, o[t], i);
            return i = this.pushStack(n > 1 ? re.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
        },
        filter: function (e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function (e) {
            return !!i(this, "string" == typeof e && fe.test(e) ? re(e) : e || [], !1).length
        }
    });
    var ve, ge = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        be = re.fn.init = function (e, t, n) {
            var i, o;
            if (!e) return this;
            if (n = n || ve, "string" == typeof e) {
                if (i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ge.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof re ? t[0] : t, re.merge(this, re.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : Y, !0)), he.test(i[1]) && re.isPlainObject(t))
                        for (i in t) re.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                return o = Y.getElementById(i[2]), o && o.parentNode && (this.length = 1, this[0] = o), this.context = Y, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : re.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(re) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), re.makeArray(e, this))
        };
    be.prototype = re.fn, ve = re(Y);
    var we = /^(?:parents|prev(?:Until|All))/,
        $e = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    re.fn.extend({
        has: function (e) {
            var t = re(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; n > e; e++)
                    if (re.contains(this, t[e])) return !0
            })
        },
        closest: function (e, t) {
            for (var n, i = 0, o = this.length, r = [], a = fe.test(e) || "string" != typeof e ? re(e, t || this.context) : 0; o > i; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && re.find.matchesSelector(n, e))) {
                        r.push(n);
                        break
                    }
            return this.pushStack(r.length > 1 ? re.uniqueSort(r) : r)
        },
        index: function (e) {
            return e ? "string" == typeof e ? Z.call(re(e), this[0]) : Z.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(re.uniqueSort(re.merge(this.get(), re(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), re.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return ue(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return ue(e, "parentNode", n)
        },
        next: function (e) {
            return o(e, "nextSibling")
        },
        prev: function (e) {
            return o(e, "previousSibling")
        },
        nextAll: function (e) {
            return ue(e, "nextSibling")
        },
        prevAll: function (e) {
            return ue(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return ue(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return ue(e, "previousSibling", n)
        },
        siblings: function (e) {
            return pe((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return pe(e.firstChild)
        },
        contents: function (e) {
            return e.contentDocument || re.merge([], e.childNodes)
        }
    }, function (e, t) {
        re.fn[e] = function (n, i) {
            var o = re.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = re.filter(i, o)), this.length > 1 && ($e[e] || re.uniqueSort(o), we.test(e) && o.reverse()), this.pushStack(o)
        }
    });
    var _e = /\S+/g;
    re.Callbacks = function (e) {
        e = "string" == typeof e ? r(e) : re.extend({}, e);
        var t, n, i, o, a = [],
            s = [],
            l = -1,
            c = function () {
                for (o = e.once, i = t = !0; s.length; l = -1)
                    for (n = s.shift(); ++l < a.length;) a[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = a.length, n = !1);
                e.memory || (n = !1), t = !1, o && (a = n ? [] : "")
            },
            d = {
                add: function () {
                    return a && (n && !t && (l = a.length - 1, s.push(n)), function i(t) {
                        re.each(t, function (t, n) {
                            re.isFunction(n) ? e.unique && d.has(n) || a.push(n) : n && n.length && "string" !== re.type(n) && i(n)
                        })
                    }(arguments), n && !t && c()), this
                },
                remove: function () {
                    return re.each(arguments, function (e, t) {
                        for (var n;
                            (n = re.inArray(t, a, n)) > -1;) a.splice(n, 1), l >= n && l--
                    }), this
                },
                has: function (e) {
                    return e ? re.inArray(e, a) > -1 : a.length > 0
                },
                empty: function () {
                    return a && (a = []), this
                },
                disable: function () {
                    return o = s = [], a = n = "", this
                },
                disabled: function () {
                    return !a
                },
                lock: function () {
                    return o = s = [], n || (a = n = ""), this
                },
                locked: function () {
                    return !!o
                },
                fireWith: function (e, n) {
                    return o || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || c()), this
                },
                fire: function () {
                    return d.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!i
                }
            };
        return d
    }, re.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", re.Callbacks("once memory"), "resolved"], ["reject", "fail", re.Callbacks("once memory"), "rejected"], ["notify", "progress", re.Callbacks("memory")]],
                n = "pending",
                i = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return re.Deferred(function (n) {
                            re.each(t, function (t, r) {
                                var a = re.isFunction(e[t]) && e[t];
                                o[r[1]](function () {
                                    var e = a && a.apply(this, arguments);
                                    e && re.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? re.extend(e, i) : i
                    }
                },
                o = {};
            return i.pipe = i.then, re.each(t, function (e, r) {
                var a = r[2],
                    s = r[3];
                i[r[1]] = a.add, s && a.add(function () {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), o[r[0]] = function () {
                    return o[r[0] + "With"](this === o ? i : this, arguments), this
                }, o[r[0] + "With"] = a.fireWith
            }), i.promise(o), e && e.call(o, o), o
        },
        when: function (e) {
            var t, n, i, o = 0,
                r = J.call(arguments),
                a = r.length,
                s = 1 !== a || e && re.isFunction(e.promise) ? a : 0,
                l = 1 === s ? e : re.Deferred(),
                c = function (e, n, i) {
                    return function (o) {
                        n[e] = this, i[e] = arguments.length > 1 ? J.call(arguments) : o, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                    }
                };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), i = new Array(a); a > o; o++) r[o] && re.isFunction(r[o].promise) ? r[o].promise().progress(c(o, n, t)).done(c(o, i, r)).fail(l.reject) : --s;
            return s || l.resolveWith(i, r), l.promise()
        }
    });
    var xe;
    re.fn.ready = function (e) {
        return re.ready.promise().done(e), this
    }, re.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? re.readyWait++ : re.ready(!0)
        },
        ready: function (e) {
            (e === !0 ? --re.readyWait : re.isReady) || (re.isReady = !0, e !== !0 && --re.readyWait > 0 || (xe.resolveWith(Y, [re]), re.fn.triggerHandler && (re(Y).triggerHandler("ready"), re(Y).off("ready"))))
        }
    }), re.ready.promise = function (t) {
        return xe || (xe = re.Deferred(), "complete" === Y.readyState || "loading" !== Y.readyState && !Y.documentElement.doScroll ? e.setTimeout(re.ready) : (Y.addEventListener("DOMContentLoaded", a), e.addEventListener("load", a))), xe.promise(t)
    }, re.ready.promise();
    var ye = function (e, t, n, i, o, r, a) {
            var s = 0,
                l = e.length,
                c = null == n;
            if ("object" === re.type(n)) {
                o = !0;
                for (s in n) ye(e, t, s, n[s], !0, r, a)
            } else if (void 0 !== i && (o = !0, re.isFunction(i) || (a = !0), c && (a ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
                    return c.call(re(e), n)
                })), t))
                for (; l > s; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
            return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
        },
        Ce = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    s.uid = 1, s.prototype = {
        register: function (e, t) {
            var n = t || {};
            return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }), e[this.expando]
        },
        cache: function (e) {
            if (!Ce(e)) return {};
            var t = e[this.expando];
            return t || (t = {}, Ce(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function (e, t, n) {
            var i, o = this.cache(e);
            if ("string" == typeof t) o[t] = n;
            else
                for (i in t) o[i] = t[i];
            return o
        },
        get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
        },
        access: function (e, t, n) {
            var i;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, re.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function (e, t) {
            var n, i, o, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 === t) this.register(e);
                else {
                    re.isArray(t) ? i = t.concat(t.map(re.camelCase)) : (o = re.camelCase(t), t in r ? i = [t, o] : (i = o, i = i in r ? [i] : i.match(_e) || [])), n = i.length;
                    for (; n--;) delete r[i[n]]
                }(void 0 === t || re.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !re.isEmptyObject(t)
        }
    };
    var ke = new s,
        Se = new s,
        Ie = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ve = /[A-Z]/g;
    re.extend({
        hasData: function (e) {
            return Se.hasData(e) || ke.hasData(e)
        },
        data: function (e, t, n) {
            return Se.access(e, t, n)
        },
        removeData: function (e, t) {
            Se.remove(e, t)
        },
        _data: function (e, t, n) {
            return ke.access(e, t, n)
        },
        _removeData: function (e, t) {
            ke.remove(e, t)
        }
    }), re.fn.extend({
        data: function (e, t) {
            var n, i, o, r = this[0],
                a = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (o = Se.get(r), 1 === r.nodeType && !ke.get(r, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = re.camelCase(i.slice(5)), l(r, i, o[i])));
                    ke.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function () {
                Se.set(this, e)
            }) : ye(this, function (t) {
                var n, i;
                if (r && void 0 === t) {
                    if (n = Se.get(r, e) || Se.get(r, e.replace(Ve, "-$&").toLowerCase()), void 0 !== n) return n;
                    if (i = re.camelCase(e), n = Se.get(r, i), void 0 !== n) return n;
                    if (n = l(r, i, void 0), void 0 !== n) return n
                } else i = re.camelCase(e), this.each(function () {
                    var n = Se.get(this, i);
                    Se.set(this, i, t), e.indexOf("-") > -1 && void 0 !== n && Se.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                Se.remove(this, e)
            })
        }
    }), re.extend({
        queue: function (e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = ke.get(e, t), n && (!i || re.isArray(n) ? i = ke.access(e, t, re.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = re.queue(e, t),
                i = n.length,
                o = n.shift(),
                r = re._queueHooks(e, t),
                a = function () {
                    re.dequeue(e, t)
                };
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, a, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return ke.get(e, n) || ke.access(e, n, {
                empty: re.Callbacks("once memory").add(function () {
                    ke.remove(e, [t + "queue", n])
                })
            })
        }
    }), re.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? re.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = re.queue(this, e, t);
                re._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && re.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                re.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, i = 1,
                o = re.Deferred(),
                r = this,
                a = this.length,
                s = function () {
                    --i || o.resolveWith(r, [r])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = ke.get(r[a], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
            return s(), o.promise(t)
        }
    });
    var Te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ne = new RegExp("^(?:([+-])=|)(" + Te + ")([a-z%]*)$", "i"),
        Ae = ["Top", "Right", "Bottom", "Left"],
        Le = function (e, t) {
            return e = t || e, "none" === re.css(e, "display") || !re.contains(e.ownerDocument, e)
        },
        je = /^(?:checkbox|radio)$/i,
        Ee = /<([\w:-]+)/,
        qe = /^$|\/(?:java|ecma)script/i,
        Re = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Re.optgroup = Re.option, Re.tbody = Re.tfoot = Re.colgroup = Re.caption = Re.thead, Re.th = Re.td;
    var Pe = /<|&#?\w+;/;
    ! function () {
        var e = Y.createDocumentFragment(),
            t = e.appendChild(Y.createElement("div")),
            n = Y.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), ie.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var ze = /^key/,
        Me = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Oe = /^([^.]*)(?:\.(.+)|)/;
    re.event = {
        global: {},
        add: function (e, t, n, i, o) {
            var r, a, s, l, c, d, u, p, f, h, m, v = ke.get(e);
            if (v)
                for (n.handler && (r = n, n = r.handler, o = r.selector), n.guid || (n.guid = re.guid++), (l = v.events) || (l = v.events = {}), (a = v.handle) || (a = v.handle = function (t) {
                        return "undefined" != typeof re && re.event.triggered !== t.type ? re.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(_e) || [""], c = t.length; c--;) s = Oe.exec(t[c]) || [], f = m = s[1], h = (s[2] || "").split(".").sort(), f && (u = re.event.special[f] || {}, f = (o ? u.delegateType : u.bindType) || f, u = re.event.special[f] || {}, d = re.extend({
                    type: f,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && re.expr.match.needsContext.test(o),
                    namespace: h.join(".")
                }, r), (p = l[f]) || (p = l[f] = [], p.delegateCount = 0, u.setup && u.setup.call(e, i, h, a) !== !1 || e.addEventListener && e.addEventListener(f, a)), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, d) : p.push(d), re.event.global[f] = !0)
        },
        remove: function (e, t, n, i, o) {
            var r, a, s, l, c, d, u, p, f, h, m, v = ke.hasData(e) && ke.get(e);
            if (v && (l = v.events)) {
                for (t = (t || "").match(_e) || [""], c = t.length; c--;)
                    if (s = Oe.exec(t[c]) || [], f = m = s[1], h = (s[2] || "").split(".").sort(), f) {
                        for (u = re.event.special[f] || {}, f = (i ? u.delegateType : u.bindType) || f, p = l[f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = p.length; r--;) d = p[r], !o && m !== d.origType || n && n.guid !== d.guid || s && !s.test(d.namespace) || i && i !== d.selector && ("**" !== i || !d.selector) || (p.splice(r, 1), d.selector && p.delegateCount--, u.remove && u.remove.call(e, d));
                        a && !p.length && (u.teardown && u.teardown.call(e, h, v.handle) !== !1 || re.removeEvent(e, f, v.handle), delete l[f])
                    }
                else
                    for (f in l) re.event.remove(e, f + t[c], n, i, !0);
                re.isEmptyObject(l) && ke.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            e = re.event.fix(e);
            var t, n, i, o, r, a = [],
                s = J.call(arguments),
                l = (ke.get(this, "events") || {})[e.type] || [],
                c = re.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (a = re.event.handlers.call(this, e, l), t = 0;
                    (o = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, n = 0;
                        (r = o.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(r.namespace) || (e.handleObj = r, e.data = r.data, i = ((re.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, s), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, i, o, r, a = [],
                s = t.delegateCount,
                l = e.target;
            if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (i = [], n = 0; s > n; n++) r = t[n], o = r.selector + " ", void 0 === i[o] && (i[o] = r.needsContext ? re(o, this).index(l) > -1 : re.find(o, this, null, [l]).length), i[o] && i.push(r);
                        i.length && a.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, i, o, r = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || Y, i = n.documentElement, o = n.body, e.pageX = t.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
            }
        },
        fix: function (e) {
            if (e[re.expando]) return e;
            var t, n, i, o = e.type,
                r = e,
                a = this.fixHooks[o];
            for (a || (this.fixHooks[o] = a = Me.test(o) ? this.mouseHooks : ze.test(o) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new re.Event(r), t = i.length; t--;) n = i[t], e[n] = r[n];
            return e.target || (e.target = Y), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, r) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    return this !== m() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === m() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && re.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function (e) {
                    return re.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, re.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, re.Event = function (e, t) {
        return this instanceof re.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? f : h) : this.type = e, t && re.extend(this, t), this.timeStamp = e && e.timeStamp || re.now(), void(this[re.expando] = !0)) : new re.Event(e, t)
    }, re.Event.prototype = {
        constructor: re.Event,
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = f, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = f, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = f, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, re.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        re.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, i = this,
                    o = e.relatedTarget,
                    r = e.handleObj;
                return o && (o === i || re.contains(i, o)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), re.fn.extend({
        on: function (e, t, n, i) {
            return v(this, e, t, n, i)
        },
        one: function (e, t, n, i) {
            return v(this, e, t, n, i, 1)
        },
        off: function (e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, re(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = h), this.each(function () {
                re.event.remove(this, e, n, t)
            })
        }
    });
    var Be = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        He = /<script|<style|<link/i,
        Fe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        De = /^true\/(.*)/,
        Ge = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    re.extend({
        htmlPrefilter: function (e) {
            return e.replace(Be, "<$1></$2>")
        },
        clone: function (e, t, n) {
            var i, o, r, a, s = e.cloneNode(!0),
                l = re.contains(e.ownerDocument, e);
            if (!(ie.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || re.isXMLDoc(e)))
                for (a = d(s), r = d(e), i = 0, o = r.length; o > i; i++) _(r[i], a[i]);
            if (t)
                if (n)
                    for (r = r || d(e), a = a || d(s), i = 0, o = r.length; o > i; i++) $(r[i], a[i]);
                else $(e, s);
            return a = d(s, "script"), a.length > 0 && u(a, !l && d(e, "script")), s
        },
        cleanData: function (e) {
            for (var t, n, i, o = re.event.special, r = 0; void 0 !== (n = e[r]); r++)
                if (Ce(n)) {
                    if (t = n[ke.expando]) {
                        if (t.events)
                            for (i in t.events) o[i] ? re.event.remove(n, i) : re.removeEvent(n, i, t.handle);
                        n[ke.expando] = void 0
                    }
                    n[Se.expando] && (n[Se.expando] = void 0)
                }
        }
    }), re.fn.extend({
        domManip: x,
        detach: function (e) {
            return y(this, e, !0)
        },
        remove: function (e) {
            return y(this, e)
        },
        text: function (e) {
            return ye(this, function (e) {
                return void 0 === e ? re.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function () {
            return x(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = g(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function () {
            return x(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = g(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return x(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return x(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (re.cleanData(d(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return re.clone(this, e, t)
            })
        },
        html: function (e) {
            return ye(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !He.test(e) && !Re[(Ee.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = re.htmlPrefilter(e);
                    try {
                        for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (re.cleanData(d(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (o) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = [];
            return x(this, arguments, function (t) {
                var n = this.parentNode;
                re.inArray(this, e) < 0 && (re.cleanData(d(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), re.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        re.fn[e] = function (e) {
            for (var n, i = [], o = re(e), r = o.length - 1, a = 0; r >= a; a++) n = a === r ? this : this.clone(!0), re(o[a])[t](n), K.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Ue, We = {
            HTML: "block",
            BODY: "block"
        },
        Qe = /^margin/,
        Ye = new RegExp("^(" + Te + ")(?!px)[a-z%]+$", "i"),
        Je = function (t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        Xe = function (e, t, n, i) {
            var o, r, a = {};
            for (r in t) a[r] = e.style[r], e.style[r] = t[r];
            o = n.apply(e, i || []);
            for (r in t) e.style[r] = a[r];
            return o
        },
        Ke = Y.documentElement;
    ! function () {
        function t() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Ke.appendChild(a);
            var t = e.getComputedStyle(s);
            n = "1%" !== t.top, r = "2px" === t.marginLeft, i = "4px" === t.width, s.style.marginRight = "50%", o = "4px" === t.marginRight, Ke.removeChild(a)
        }
        var n, i, o, r, a = Y.createElement("div"),
            s = Y.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), re.extend(ie, {
            pixelPosition: function () {
                return t(), n
            },
            boxSizingReliable: function () {
                return null == i && t(), i
            },
            pixelMarginRight: function () {
                return null == i && t(), o
            },
            reliableMarginLeft: function () {
                return null == i && t(), r
            },
            reliableMarginRight: function () {
                var t, n = s.appendChild(Y.createElement("div"));
                return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", Ke.appendChild(a), t = !parseFloat(e.getComputedStyle(n).marginRight), Ke.removeChild(a), s.removeChild(n), t
            }
        }))
    }();
    var Ze = /^(none|table(?!-c[ea]).+)/,
        et = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        tt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        nt = ["Webkit", "O", "Moz", "ms"],
        it = Y.createElement("div").style;
    re.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = S(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, a, s = re.camelCase(t),
                    l = e.style;
                return t = re.cssProps[s] || (re.cssProps[s] = V(s) || s), a = re.cssHooks[t] || re.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (o = a.get(e, !1, i)) ? o : l[t] : (r = typeof n, "string" === r && (o = Ne.exec(n)) && o[1] && (n = c(e, t, o), r = "number"), void(null != n && n === n && ("number" === r && (n += o && o[3] || (re.cssNumber[s] ? "" : "px")), ie.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l[t] = n))))
            }
        },
        css: function (e, t, n, i) {
            var o, r, a, s = re.camelCase(t);
            return t = re.cssProps[s] || (re.cssProps[s] = V(s) || s), a = re.cssHooks[t] || re.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = S(e, t, i)), "normal" === o && t in tt && (o = tt[t]), "" === n || n ? (r = parseFloat(o), n === !0 || isFinite(r) ? r || 0 : o) : o
        }
    }), re.each(["height", "width"], function (e, t) {
        re.cssHooks[t] = {
            get: function (e, n, i) {
                return n ? Ze.test(re.css(e, "display")) && 0 === e.offsetWidth ? Xe(e, et, function () {
                    return A(e, t, i)
                }) : A(e, t, i) : void 0
            },
            set: function (e, n, i) {
                var o, r = i && Je(e),
                    a = i && N(e, t, i, "border-box" === re.css(e, "boxSizing", !1, r), r);
                return a && (o = Ne.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = re.css(e, t)), T(e, n, a)
            }
        }
    }), re.cssHooks.marginLeft = I(ie.reliableMarginLeft, function (e, t) {
        return t ? (parseFloat(S(e, "marginLeft")) || e.getBoundingClientRect().left - Xe(e, {
            marginLeft: 0
        }, function () {
            return e.getBoundingClientRect().left
        })) + "px" : void 0
    }), re.cssHooks.marginRight = I(ie.reliableMarginRight, function (e, t) {
        return t ? Xe(e, {
            display: "inline-block"
        }, S, [e, "marginRight"]) : void 0
    }), re.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        re.cssHooks[e + t] = {
            expand: function (n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[e + Ae[i] + t] = r[i] || r[i - 2] || r[0];
                return o
            }
        }, Qe.test(e) || (re.cssHooks[e + t].set = T)
    }), re.fn.extend({
        css: function (e, t) {
            return ye(this, function (e, t, n) {
                var i, o, r = {},
                    a = 0;
                if (re.isArray(t)) {
                    for (i = Je(e), o = t.length; o > a; a++) r[t[a]] = re.css(e, t[a], !1, i);
                    return r
                }
                return void 0 !== n ? re.style(e, t, n) : re.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function () {
            return L(this, !0)
        },
        hide: function () {
            return L(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                Le(this) ? re(this).show() : re(this).hide()
            })
        }
    }), re.Tween = j, j.prototype = {
        constructor: j,
        init: function (e, t, n, i, o, r) {
            this.elem = e, this.prop = n, this.easing = o || re.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (re.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = j.propHooks[this.prop];
            return e && e.get ? e.get(this) : j.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = j.propHooks[this.prop];
            return this.options.duration ? this.pos = t = re.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : j.propHooks._default.set(this), this
        }
    }, j.prototype.init.prototype = j.prototype, j.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = re.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function (e) {
                re.fx.step[e.prop] ? re.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[re.cssProps[e.prop]] && !re.cssHooks[e.prop] ? e.elem[e.prop] = e.now : re.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, j.propHooks.scrollTop = j.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, re.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, re.fx = j.prototype.init, re.fx.step = {};
    var ot, rt, at = /^(?:toggle|show|hide)$/,
        st = /queueHooks$/;
    re.Animation = re.extend(M, {
            tweeners: {
                "*": [function (e, t) {
                    var n = this.createTween(e, t);
                    return c(n.elem, e, Ne.exec(t), n), n
                }]
            },
            tweener: function (e, t) {
                re.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(_e);
                for (var n, i = 0, o = e.length; o > i; i++) n = e[i], M.tweeners[n] = M.tweeners[n] || [], M.tweeners[n].unshift(t)
            },
            prefilters: [P],
            prefilter: function (e, t) {
                t ? M.prefilters.unshift(e) : M.prefilters.push(e)
            }
        }), re.speed = function (e, t, n) {
            var i = e && "object" == typeof e ? re.extend({}, e) : {
                complete: n || !n && t || re.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !re.isFunction(t) && t
            };
            return i.duration = re.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in re.fx.speeds ? re.fx.speeds[i.duration] : re.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                re.isFunction(i.old) && i.old.call(this), i.queue && re.dequeue(this, i.queue)
            }, i
        }, re.fn.extend({
            fadeTo: function (e, t, n, i) {
                return this.filter(Le).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function (e, t, n, i) {
                var o = re.isEmptyObject(e),
                    r = re.speed(t, n, i),
                    a = function () {
                        var t = M(this, re.extend({}, e), r);
                        (o || ke.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, o || r.queue === !1 ? this.each(a) : this.queue(r.queue, a)
            },
            stop: function (e, t, n) {
                var i = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                    var t = !0,
                        o = null != e && e + "queueHooks",
                        r = re.timers,
                        a = ke.get(this);
                    if (o) a[o] && a[o].stop && i(a[o]);
                    else
                        for (o in a) a[o] && a[o].stop && st.test(o) && i(a[o]);
                    for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                    !t && n || re.dequeue(this, e)
                })
            },
            finish: function (e) {
                return e !== !1 && (e = e || "fx"), this.each(function () {
                    var t, n = ke.get(this),
                        i = n[e + "queue"],
                        o = n[e + "queueHooks"],
                        r = re.timers,
                        a = i ? i.length : 0;
                    for (n.finish = !0, re.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                    for (t = 0; a > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), re.each(["toggle", "show", "hide"], function (e, t) {
            var n = re.fn[t];
            re.fn[t] = function (e, i, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(q(t, !0), e, i, o)
            }
        }), re.each({
            slideDown: q("show"),
            slideUp: q("hide"),
            slideToggle: q("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, t) {
            re.fn[e] = function (e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), re.timers = [], re.fx.tick = function () {
            var e, t = 0,
                n = re.timers;
            for (ot = re.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            n.length || re.fx.stop(), ot = void 0
        }, re.fx.timer = function (e) {
            re.timers.push(e), e() ? re.fx.start() : re.timers.pop()
        }, re.fx.interval = 13, re.fx.start = function () {
            rt || (rt = e.setInterval(re.fx.tick, re.fx.interval))
        }, re.fx.stop = function () {
            e.clearInterval(rt), rt = null
        }, re.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, re.fn.delay = function (t, n) {
            return t = re.fx ? re.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, i) {
                var o = e.setTimeout(n, t);
                i.stop = function () {
                    e.clearTimeout(o)
                }
            })
        },
        function () {
            var e = Y.createElement("input"),
                t = Y.createElement("select"),
                n = t.appendChild(Y.createElement("option"));
            e.type = "checkbox", ie.checkOn = "" !== e.value, ie.optSelected = n.selected, t.disabled = !0, ie.optDisabled = !n.disabled, e = Y.createElement("input"), e.value = "t", e.type = "radio", ie.radioValue = "t" === e.value
        }();
    var lt, ct = re.expr.attrHandle;
    re.fn.extend({
        attr: function (e, t) {
            return ye(this, re.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                re.removeAttr(this, e)
            })
        }
    }), re.extend({
        attr: function (e, t, n) {
            var i, o, r = e.nodeType;
            return 3 !== r && 8 !== r && 2 !== r ? "undefined" == typeof e.getAttribute ? re.prop(e, t, n) : (1 === r && re.isXMLDoc(e) || (t = t.toLowerCase(), o = re.attrHooks[t] || (re.expr.match.bool.test(t) ? lt : void 0)), void 0 !== n ? null === n ? void re.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : (i = re.find.attr(e, t), null == i ? void 0 : i)) : void 0
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!ie.radioValue && "radio" === t && re.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function (e, t) {
            var n, i, o = 0,
                r = t && t.match(_e);
            if (r && 1 === e.nodeType)
                for (; n = r[o++];) i = re.propFix[n] || n, re.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
        }
    }), lt = {
        set: function (e, t, n) {
            return t === !1 ? re.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, re.each(re.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = ct[t] || re.find.attr;
        ct[t] = function (e, t, i) {
            var o, r;
            return i || (r = ct[t], ct[t] = o, o = null != n(e, t, i) ? t.toLowerCase() : null, ct[t] = r), o
        }
    });
    var dt = /^(?:input|select|textarea|button)$/i,
        ut = /^(?:a|area)$/i;
    re.fn.extend({
        prop: function (e, t) {
            return ye(this, re.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[re.propFix[e] || e]
            })
        }
    }), re.extend({
        prop: function (e, t, n) {
            var i, o, r = e.nodeType;
            return 3 !== r && 8 !== r && 2 !== r ? (1 === r && re.isXMLDoc(e) || (t = re.propFix[t] || t, o = re.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = re.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : dt.test(e.nodeName) || ut.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), ie.optSelected || (re.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        re.propFix[this.toLowerCase()] = this
    });
    var pt = /[\t\r\n\f]/g;
    re.fn.extend({
        addClass: function (e) {
            var t, n, i, o, r, a, s, l = 0;
            if (re.isFunction(e)) return this.each(function (t) {
                re(this).addClass(e.call(this, t, O(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(_e) || []; n = this[l++];)
                    if (o = O(n), i = 1 === n.nodeType && (" " + o + " ").replace(pt, " ")) {
                        for (a = 0; r = t[a++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        s = re.trim(i), o !== s && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function (e) {
            var t, n, i, o, r, a, s, l = 0;
            if (re.isFunction(e)) return this.each(function (t) {
                re(this).removeClass(e.call(this, t, O(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(_e) || []; n = this[l++];)
                    if (o = O(n), i = 1 === n.nodeType && (" " + o + " ").replace(pt, " ")) {
                        for (a = 0; r = t[a++];)
                            for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                        s = re.trim(i), o !== s && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : re.isFunction(e) ? this.each(function (n) {
                re(this).toggleClass(e.call(this, n, O(this), t), t)
            }) : this.each(function () {
                var t, i, o, r;
                if ("string" === n)
                    for (i = 0, o = re(this), r = e.match(_e) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else void 0 !== e && "boolean" !== n || (t = O(this), t && ke.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : ke.get(this, "__className__") || ""))
            })
        },
        hasClass: function (e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + O(n) + " ").replace(pt, " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var ft = /\r/g,
        ht = /[\x20\t\r\n\f]+/g;
    re.fn.extend({
        val: function (e) {
            var t, n, i, o = this[0];
            return arguments.length ? (i = re.isFunction(e), this.each(function (n) {
                var o;
                1 === this.nodeType && (o = i ? e.call(this, n, re(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : re.isArray(o) && (o = re.map(o, function (e) {
                    return null == e ? "" : e + ""
                })), t = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            })) : o ? (t = re.valHooks[o.type] || re.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(ft, "") : null == n ? "" : n)) : void 0
        }
    }), re.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = re.find.attr(e, "value");
                    return null != t ? t : re.trim(re.text(e)).replace(ht, " ")
                }
            },
            select: {
                get: function (e) {
                    for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || 0 > o, a = r ? null : [], s = r ? o + 1 : i.length, l = 0 > o ? s : r ? o : 0; s > l; l++)
                        if (n = i[l], (n.selected || l === o) && (ie.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !re.nodeName(n.parentNode, "optgroup"))) {
                            if (t = re(n).val(), r) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function (e, t) {
                    for (var n, i, o = e.options, r = re.makeArray(t), a = o.length; a--;) i = o[a], (i.selected = re.inArray(re.valHooks.option.get(i), r) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), re.each(["radio", "checkbox"], function () {
        re.valHooks[this] = {
            set: function (e, t) {
                return re.isArray(t) ? e.checked = re.inArray(re(e).val(), t) > -1 : void 0
            }
        }, ie.checkOn || (re.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var mt = /^(?:focusinfocus|focusoutblur)$/;
    re.extend(re.event, {
        trigger: function (t, n, i, o) {
            var r, a, s, l, c, d, u, p = [i || Y],
                f = ne.call(t, "type") ? t.type : t,
                h = ne.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = i = i || Y, 3 !== i.nodeType && 8 !== i.nodeType && !mt.test(f + re.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."), f = h.shift(), h.sort()), c = f.indexOf(":") < 0 && "on" + f, t = t[re.expando] ? t : new re.Event(f, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : re.makeArray(n, [t]), u = re.event.special[f] || {}, o || !u.trigger || u.trigger.apply(i, n) !== !1)) {
                if (!o && !u.noBubble && !re.isWindow(i)) {
                    for (l = u.delegateType || f, mt.test(l + f) || (a = a.parentNode); a; a = a.parentNode) p.push(a), s = a;
                    s === (i.ownerDocument || Y) && p.push(s.defaultView || s.parentWindow || e)
                }
                for (r = 0;
                    (a = p[r++]) && !t.isPropagationStopped();) t.type = r > 1 ? l : u.bindType || f, d = (ke.get(a, "events") || {})[t.type] && ke.get(a, "handle"), d && d.apply(a, n), d = c && a[c], d && d.apply && Ce(a) && (t.result = d.apply(a, n), t.result === !1 && t.preventDefault());
                return t.type = f, o || t.isDefaultPrevented() || u._default && u._default.apply(p.pop(), n) !== !1 || !Ce(i) || c && re.isFunction(i[f]) && !re.isWindow(i) && (s = i[c], s && (i[c] = null), re.event.triggered = f, i[f](), re.event.triggered = void 0, s && (i[c] = s)), t.result
            }
        },
        simulate: function (e, t, n) {
            var i = re.extend(new re.Event, n, {
                type: e,
                isSimulated: !0
            });
            re.event.trigger(i, null, t)
        }
    }), re.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                re.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            return n ? re.event.trigger(e, t, n, !0) : void 0
        }
    }), re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        re.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), re.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), ie.focusin = "onfocusin" in e, ie.focusin || re.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = function (e) {
            re.event.simulate(t, e.target, re.event.fix(e))
        };
        re.event.special[t] = {
            setup: function () {
                var i = this.ownerDocument || this,
                    o = ke.access(i, t);
                o || i.addEventListener(e, n, !0), ke.access(i, t, (o || 0) + 1)
            },
            teardown: function () {
                var i = this.ownerDocument || this,
                    o = ke.access(i, t) - 1;
                o ? ke.access(i, t, o) : (i.removeEventListener(e, n, !0), ke.remove(i, t))
            }
        }
    });
    var vt = e.location,
        gt = re.now(),
        bt = /\?/;
    re.parseJSON = function (e) {
        return JSON.parse(e + "")
    }, re.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (i) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || re.error("Invalid XML: " + t), n
    };
    var wt = /#.*$/,
        $t = /([?&])_=[^&]*/,
        _t = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        xt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        yt = /^(?:GET|HEAD)$/,
        Ct = /^\/\//,
        kt = {},
        St = {},
        It = "*/".concat("*"),
        Vt = Y.createElement("a");
    Vt.href = vt.href, re.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: vt.href,
            type: "GET",
            isLocal: xt.test(vt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": It,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": re.parseJSON,
                "text xml": re.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? F(F(e, re.ajaxSettings), t) : F(re.ajaxSettings, e)
        },
        ajaxPrefilter: B(kt),
        ajaxTransport: B(St),
        ajax: function (t, n) {
            function i(t, n, i, s) {
                var c, u, b, w, _, y = n;
                2 !== $ && ($ = 2, l && e.clearTimeout(l), o = void 0, a = s || "", x.readyState = t > 0 ? 4 : 0, c = t >= 200 && 300 > t || 304 === t, i && (w = D(p, x, i)), w = G(p, w, x, c), c ? (p.ifModified && (_ = x.getResponseHeader("Last-Modified"), _ && (re.lastModified[r] = _), _ = x.getResponseHeader("etag"), _ && (re.etag[r] = _)), 204 === t || "HEAD" === p.type ? y = "nocontent" : 304 === t ? y = "notmodified" : (y = w.state, u = w.data, b = w.error, c = !b)) : (b = y, !t && y || (y = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (n || y) + "", c ? m.resolveWith(f, [u, y, x]) : m.rejectWith(f, [x, y, b]), x.statusCode(g), g = void 0, d && h.trigger(c ? "ajaxSuccess" : "ajaxError", [x, p, c ? u : b]), v.fireWith(f, [x, y]), d && (h.trigger("ajaxComplete", [x, p]), --re.active || re.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var o, r, a, s, l, c, d, u, p = re.ajaxSetup({}, n),
                f = p.context || p,
                h = p.context && (f.nodeType || f.jquery) ? re(f) : re.event,
                m = re.Deferred(),
                v = re.Callbacks("once memory"),
                g = p.statusCode || {},
                b = {},
                w = {},
                $ = 0,
                _ = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === $) {
                            if (!s)
                                for (s = {}; t = _t.exec(a);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === $ ? a : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return $ || (e = w[n] = w[n] || e, b[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return $ || (p.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (2 > $)
                                for (t in e) g[t] = [g[t], e[t]];
                            else x.always(e[x.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || _;
                        return o && o.abort(t), i(0, t), this
                    }
                };
            if (m.promise(x).complete = v.add, x.success = x.done, x.error = x.fail, p.url = ((t || p.url || vt.href) + "").replace(wt, "").replace(Ct, vt.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = re.trim(p.dataType || "*").toLowerCase().match(_e) || [""], null == p.crossDomain) {
                c = Y.createElement("a");
                try {
                    c.href = p.url, c.href = c.href, p.crossDomain = Vt.protocol + "//" + Vt.host != c.protocol + "//" + c.host
                } catch (y) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = re.param(p.data, p.traditional)), H(kt, p, n, x), 2 === $) return x;
            d = re.event && p.global, d && 0 === re.active++ && re.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !yt.test(p.type), r = p.url, p.hasContent || (p.data && (r = p.url += (bt.test(r) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = $t.test(r) ? r.replace($t, "$1_=" + gt++) : r + (bt.test(r) ? "&" : "?") + "_=" + gt++)), p.ifModified && (re.lastModified[r] && x.setRequestHeader("If-Modified-Since", re.lastModified[r]), re.etag[r] && x.setRequestHeader("If-None-Match", re.etag[r])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", p.contentType), x.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + It + "; q=0.01" : "") : p.accepts["*"]);
            for (u in p.headers) x.setRequestHeader(u, p.headers[u]);
            if (p.beforeSend && (p.beforeSend.call(f, x, p) === !1 || 2 === $)) return x.abort();
            _ = "abort";
            for (u in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[u](p[u]);
            if (o = H(St, p, n, x)) {
                if (x.readyState = 1, d && h.trigger("ajaxSend", [x, p]), 2 === $) return x;
                p.async && p.timeout > 0 && (l = e.setTimeout(function () {
                    x.abort("timeout")
                }, p.timeout));
                try {
                    $ = 1, o.send(b, i)
                } catch (y) {
                    if (!(2 > $)) throw y;
                    i(-1, y)
                }
            } else i(-1, "No Transport");
            return x
        },
        getJSON: function (e, t, n) {
            return re.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return re.get(e, void 0, t, "script")
        }
    }), re.each(["get", "post"], function (e, t) {
        re[t] = function (e, n, i, o) {
            return re.isFunction(n) && (o = o || i, i = n, n = void 0), re.ajax(re.extend({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: i
            }, re.isPlainObject(e) && e))
        }
    }), re._evalUrl = function (e) {
        return re.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, re.fn.extend({
        wrapAll: function (e) {
            var t;
            return re.isFunction(e) ? this.each(function (t) {
                re(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = re(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function (e) {
            return re.isFunction(e) ? this.each(function (t) {
                re(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = re(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = re.isFunction(e);
            return this.each(function (n) {
                re(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                re.nodeName(this, "body") || re(this).replaceWith(this.childNodes)
            }).end()
        }
    }), re.expr.filters.hidden = function (e) {
        return !re.expr.filters.visible(e)
    }, re.expr.filters.visible = function (e) {
        return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
    };
    var Tt = /%20/g,
        Nt = /\[\]$/,
        At = /\r?\n/g,
        Lt = /^(?:submit|button|image|reset|file)$/i,
        jt = /^(?:input|select|textarea|keygen)/i;
    re.param = function (e, t) {
        var n, i = [],
            o = function (e, t) {
                t = re.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = re.ajaxSettings && re.ajaxSettings.traditional), re.isArray(e) || e.jquery && !re.isPlainObject(e)) re.each(e, function () {
            o(this.name, this.value)
        });
        else
            for (n in e) U(n, e[n], t, o);
        return i.join("&").replace(Tt, "+")
    }, re.fn.extend({
        serialize: function () {
            return re.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = re.prop(this, "elements");
                return e ? re.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !re(this).is(":disabled") && jt.test(this.nodeName) && !Lt.test(e) && (this.checked || !je.test(e))
            }).map(function (e, t) {
                var n = re(this).val();
                return null == n ? null : re.isArray(n) ? re.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(At, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(At, "\r\n")
                }
            }).get()
        }
    }), re.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    };
    var Et = {
            0: 200,
            1223: 204
        },
        qt = re.ajaxSettings.xhr();
    ie.cors = !!qt && "withCredentials" in qt, ie.ajax = qt = !!qt, re.ajaxTransport(function (t) {
        var n, i;
        return ie.cors || qt && !t.crossDomain ? {
            send: function (o, r) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                for (a in o) s.setRequestHeader(a, o[a]);
                n = function (e) {
                    return function () {
                        n && (n = i = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? r(0, "error") : r(s.status, s.statusText) : r(Et[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), i = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function () {
                    4 === s.readyState && e.setTimeout(function () {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (l) {
                    if (n) throw l
                }
            },
            abort: function () {
                n && n()
            }
        } : void 0
    }), re.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (e) {
                return re.globalEval(e), e
            }
        }
    }), re.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), re.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (i, o) {
                    t = re("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function (e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), Y.head.appendChild(t[0])
                },
                abort: function () {
                    n && n()
                }
            }
        }
    });
    var Rt = [],
        Pt = /(=)\?(?=&|$)|\?\?/;
    re.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Rt.pop() || re.expando + "_" + gt++;
            return this[e] = !0, e
        }
    }), re.ajaxPrefilter("json jsonp", function (t, n, i) {
        var o, r, a, s = t.jsonp !== !1 && (Pt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Pt.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = re.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Pt, "$1" + o) : t.jsonp !== !1 && (t.url += (bt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {
            return a || re.error(o + " was not called"), a[0]
        }, t.dataTypes[0] = "json", r = e[o], e[o] = function () {
            a = arguments
        }, i.always(function () {
            void 0 === r ? re(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, Rt.push(o)), a && re.isFunction(r) && r(a[0]), a = r = void 0
        }), "script") : void 0
    }), re.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || Y;
        var i = he.exec(e),
            o = !n && [];
        return i ? [t.createElement(i[1])] : (i = p([e], t, o), o && o.length && re(o).remove(), re.merge([], i.childNodes))
    };
    var zt = re.fn.load;
    re.fn.load = function (e, t, n) {
        if ("string" != typeof e && zt) return zt.apply(this, arguments);
        var i, o, r, a = this,
            s = e.indexOf(" ");
        return s > -1 && (i = re.trim(e.slice(s)), e = e.slice(0, s)), re.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && re.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            r = arguments, a.html(i ? re("<div>").append(re.parseHTML(e)).find(i) : e)
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, r || [e.responseText, t, e])
            })
        }), this
    }, re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        re.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), re.expr.filters.animated = function (e) {
        return re.grep(re.timers, function (t) {
            return e === t.elem
        }).length
    }, re.offset = {
        setOffset: function (e, t, n) {
            var i, o, r, a, s, l, c, d = re.css(e, "position"),
                u = re(e),
                p = {};
            "static" === d && (e.style.position = "relative"), s = u.offset(), r = re.css(e, "top"), l = re.css(e, "left"), c = ("absolute" === d || "fixed" === d) && (r + l).indexOf("auto") > -1, c ? (i = u.position(), a = i.top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(l) || 0), re.isFunction(t) && (t = t.call(e, n, re.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + o), "using" in t ? t.using.call(e, p) : u.css(p)
        }
    }, re.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                re.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0],
                o = {
                    top: 0,
                    left: 0
                },
                r = i && i.ownerDocument;
            return r ? (t = r.documentElement, re.contains(t, i) ? (o = i.getBoundingClientRect(), n = W(r), {
                top: o.top + n.pageYOffset - t.clientTop,
                left: o.left + n.pageXOffset - t.clientLeft
            }) : o) : void 0
        },
        position: function () {
            if (this[0]) {
                var e, t, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === re.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), re.nodeName(e[0], "html") || (i = e.offset()), i.top += re.css(e[0], "borderTopWidth", !0), i.left += re.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - i.top - re.css(n, "marginTop", !0),
                    left: t.left - i.left - re.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === re.css(e, "position");) e = e.offsetParent;
                return e || Ke
            })
        }
    }), re.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, t) {
        var n = "pageYOffset" === t;
        re.fn[e] = function (i) {
            return ye(this, function (e, i, o) {
                var r = W(e);
                return void 0 === o ? r ? r[t] : e[i] : void(r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o)
            }, e, i, arguments.length)
        }
    }), re.each(["top", "left"], function (e, t) {
        re.cssHooks[t] = I(ie.pixelPosition, function (e, n) {
            return n ? (n = S(e, t), Ye.test(n) ? re(e).position()[t] + "px" : n) : void 0
        })
    }), re.each({
        Height: "height",
        Width: "width"
    }, function (e, t) {
        re.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function (n, i) {
            re.fn[i] = function (i, o) {
                var r = arguments.length && (n || "boolean" != typeof i),
                    a = n || (i === !0 || o === !0 ? "margin" : "border");
                return ye(this, function (t, n, i) {
                    var o;
                    return re.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? re.css(t, n, a) : re.style(t, n, i, a)
                }, t, r ? i : void 0, r, null)
            }
        })
    }), re.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        size: function () {
            return this.length
        }
    }), re.fn.andSelf = re.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return re
    });
    var Mt = e.jQuery,
        Ot = e.$;
    return re.noConflict = function (t) {
        return e.$ === re && (e.$ = Ot), t && e.jQuery === re && (e.jQuery = Mt), re
    }, t || (e.jQuery = e.$ = re), re
});
