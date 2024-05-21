(() => {
  "use strict";
  var e = {
      711: (e) => {
        const t = (() => {
          const e = 0,
            t = 1,
            n = 2,
            r = {},
            o = { font: "Standard", fontPath: "./fonts" };
          function i(e, t, n) {
            return e === t && e !== n && e;
          }
          function a(e, t) {
            let n = "|/\\[]{}()<>";
            if ("_" === e) {
              if (-1 !== n.indexOf(t)) return t;
            } else if ("_" === t && -1 !== n.indexOf(e)) return e;
            return !1;
          }
          function s(e, t) {
            let n = "| /\\ [] {} () <>",
              r = n.indexOf(e),
              o = n.indexOf(t);
            if (-1 !== r && -1 !== o && r !== o && 1 !== Math.abs(r - o)) {
              const e = Math.max(r, o);
              return n.substring(e, e + 1);
            }
            return !1;
          }
          function u(e, t) {
            let n = "[] {} ()",
              r = n.indexOf(e),
              o = n.indexOf(t);
            return -1 !== r && -1 !== o && Math.abs(r - o) <= 1 && "|";
          }
          function l(e, t) {
            let n = "/\\ \\/ ><",
              r = n.indexOf(e),
              o = n.indexOf(t);
            return (
              -1 !== r &&
              -1 !== o &&
              o - r == 1 &&
              { 0: "|", 3: "Y", 6: "X" }[r]
            );
          }
          function c(e, t, n) {
            return e === n && t === n && n;
          }
          function f(e, t) {
            return e === t && e;
          }
          function d(e, t) {
            let n = "|/\\[]{}()<>";
            if ("_" === e) {
              if (-1 !== n.indexOf(t)) return t;
            } else if ("_" === t && -1 !== n.indexOf(e)) return e;
            return !1;
          }
          function h(e, t) {
            let n = "| /\\ [] {} () <>",
              r = n.indexOf(e),
              o = n.indexOf(t);
            if (-1 !== r && -1 !== o && r !== o && 1 !== Math.abs(r - o)) {
              const e = Math.max(r, o);
              return n.substring(e, e + 1);
            }
            return !1;
          }
          function p(e, t) {
            return (
              (("-" === e && "_" === t) || ("_" === e && "-" === t)) && "="
            );
          }
          function m(e, t) {
            return "|" === e && "|" === t && "|";
          }
          function y(e, t, n) {
            return " " === t || "" === t || (t === n && " " !== e) ? e : t;
          }
          function g(r, o, i) {
            if (i.fittingRules.vLayout === e) return "invalid";
            let a,
              s,
              u,
              l,
              c = Math.min(r.length, o.length),
              y = !1;
            if (0 === c) return "invalid";
            for (a = 0; a < c; a++)
              if (
                ((s = r.substring(a, a + 1)),
                (u = o.substring(a, a + 1)),
                " " !== s && " " !== u)
              ) {
                if (i.fittingRules.vLayout === t) return "invalid";
                if (i.fittingRules.vLayout === n) return "end";
                if (m(s, u)) {
                  y = y || !1;
                  continue;
                }
                if (
                  ((l = !1),
                  (l = i.fittingRules.vRule1 ? f(s, u) : l),
                  (l = !l && i.fittingRules.vRule2 ? d(s, u) : l),
                  (l = !l && i.fittingRules.vRule3 ? h(s, u) : l),
                  (l = !l && i.fittingRules.vRule4 ? p(s, u) : l),
                  (y = !0),
                  !l)
                )
                  return "invalid";
              }
            return y ? "end" : "valid";
          }
          function v(e, r, o) {
            let i,
              a,
              s,
              u,
              l = Math.min(e.length, r.length),
              c = "";
            for (i = 0; i < l; i++)
              (a = e.substring(i, i + 1)),
                (s = r.substring(i, i + 1)),
                " " !== a && " " !== s
                  ? o.fittingRules.vLayout === t || o.fittingRules.vLayout === n
                    ? (c += y(a, s))
                    : ((u = !1),
                      (u = o.fittingRules.vRule5 ? m(a, s) : u),
                      (u = !u && o.fittingRules.vRule1 ? f(a, s) : u),
                      (u = !u && o.fittingRules.vRule2 ? d(a, s) : u),
                      (u = !u && o.fittingRules.vRule3 ? h(a, s) : u),
                      (u = !u && o.fittingRules.vRule4 ? p(a, s) : u),
                      (c += u))
                  : (c += y(a, s));
            return c;
          }
          function b(e, t) {
            let n,
              r = e.length,
              o = "";
            for (n = 0; n < t; n++) o += " ";
            for (n = 0; n < r; n++) e[n] += o;
          }
          function w(e, t, n) {
            let r,
              o = e[0].length,
              i = t[0].length;
            return (
              o > i ? b(t, o - i) : i > o && b(e, i - o),
              (r = (function (e, t, n) {
                let r,
                  o,
                  i,
                  a,
                  s,
                  u,
                  l = e.length,
                  c = e.length,
                  f = (t.length, 1);
                for (; f <= l; ) {
                  for (
                    r = e.slice(Math.max(0, c - f), c),
                      o = t.slice(0, Math.min(l, f)),
                      i = o.length,
                      u = "",
                      a = 0;
                    a < i;
                    a++
                  )
                    if (((s = g(r[a], o[a], n)), "end" === s)) u = s;
                    else {
                      if ("invalid" === s) {
                        u = s;
                        break;
                      }
                      "" === u && (u = "valid");
                    }
                  if ("invalid" === u) {
                    f--;
                    break;
                  }
                  if ("end" === u) break;
                  "valid" === u && f++;
                }
                return Math.min(l, f);
              })(e, t, n)),
              (function (e, t, n, r) {
                let o,
                  i,
                  a,
                  s,
                  u = e.length,
                  l = t.length,
                  c = e.slice(0, Math.max(0, u - n)),
                  f = e.slice(Math.max(0, u - n), u),
                  d = t.slice(0, Math.min(n, l)),
                  h = [];
                for (i = f.length, o = 0; o < i; o++)
                  (a = o >= l ? f[o] : v(f[o], d[o], r)), h.push(a);
                return (s = t.slice(Math.min(n, l), l)), [].concat(c, h, s);
              })(e, t, r, n)
            );
          }
          function R(r, o, f) {
            if (f.fittingRules.hLayout === e) return 0;
            let d,
              h,
              p,
              m,
              y,
              g = r.length,
              v = o.length,
              b = g,
              w = 1,
              R = !1,
              O = !1;
            if (0 === g) return 0;
            e: for (; w <= b; ) {
              const e = g - w;
              for (
                h = r.substring(e, e + w),
                  p = o.substring(0, Math.min(w, v)),
                  d = 0;
                d < Math.min(w, v);
                d++
              )
                if (
                  ((m = h.substring(d, d + 1)),
                  (y = p.substring(d, d + 1)),
                  " " !== m && " " !== y)
                ) {
                  if (f.fittingRules.hLayout === t) {
                    w -= 1;
                    break e;
                  }
                  if (f.fittingRules.hLayout === n) {
                    (m !== f.hardBlank && y !== f.hardBlank) || (w -= 1);
                    break e;
                  }
                  if (
                    ((R = !0),
                    (O = !1),
                    (O = f.fittingRules.hRule1 ? i(m, y, f.hardBlank) : O),
                    (O =
                      !O && f.fittingRules.hRule2 ? a(m, y, f.hardBlank) : O),
                    (O =
                      !O && f.fittingRules.hRule3 ? s(m, y, f.hardBlank) : O),
                    (O =
                      !O && f.fittingRules.hRule4 ? u(m, y, f.hardBlank) : O),
                    (O =
                      !O && f.fittingRules.hRule5 ? l(m, y, f.hardBlank) : O),
                    (O =
                      !O && f.fittingRules.hRule6 ? c(m, y, f.hardBlank) : O),
                    !O)
                  ) {
                    w -= 1;
                    break e;
                  }
                }
              if (R) break;
              w++;
            }
            return Math.min(b, w);
          }
          function O(e, r, o, f) {
            let d,
              h,
              p,
              m,
              g,
              v,
              b,
              w,
              R,
              O,
              S = [];
            for (d = 0; d < f.height; d++) {
              (R = e[d]),
                (O = r[d]),
                (b = R.length),
                (w = O.length),
                (p = b - o),
                (m = R.substr(0, Math.max(0, p))),
                (g = "");
              const C = Math.max(0, b - o);
              var E = R.substring(C, C + o),
                x = O.substring(0, Math.min(o, w));
              for (h = 0; h < o; h++) {
                var _ = h < b ? E.substring(h, h + 1) : " ",
                  k = h < w ? x.substring(h, h + 1) : " ";
                if (" " !== _ && " " !== k)
                  if (f.fittingRules.hLayout === t) g += y(_, k, f.hardBlank);
                  else if (f.fittingRules.hLayout === n)
                    g += y(_, k, f.hardBlank);
                  else {
                    var T = "";
                    g += T =
                      (T =
                        !(T =
                          !(T =
                            !(T =
                              !(T =
                                !(T =
                                  !T && f.fittingRules.hRule1
                                    ? i(_, k, f.hardBlank)
                                    : T) && f.fittingRules.hRule2
                                  ? a(_, k, f.hardBlank)
                                  : T) && f.fittingRules.hRule3
                                ? s(_, k, f.hardBlank)
                                : T) && f.fittingRules.hRule4
                              ? u(_, k, f.hardBlank)
                              : T) && f.fittingRules.hRule5
                            ? l(_, k, f.hardBlank)
                            : T) && f.fittingRules.hRule6
                          ? c(_, k, f.hardBlank)
                          : T) || y(_, k, f.hardBlank);
                  }
                else g += y(_, k, f.hardBlank);
              }
              (v = o >= w ? "" : O.substring(o, o + Math.max(0, w - o))),
                (S[d] = m + g + v);
            }
            return S;
          }
          function S(e) {
            let t,
              n = [];
            for (t = 0; t < e; t++) n[t] = "";
            return n;
          }
          const E = function (e) {
            return Math.max.apply(
              Math,
              e.map(function (e, t) {
                return e.length;
              })
            );
          };
          function x(e, t, n) {
            return e.reduce(function (e, t) {
              return O(e, t.fig, t.overlap, n);
            }, S(t));
          }
          function _(e, t, n) {
            const r = {};
            for (let o = e.length; --o; ) {
              let i = x(e.slice(0, o), t, n);
              if (E(i) <= n.width) {
                (r.outputFigText = i),
                  o < e.length ? (r.chars = e.slice(o)) : (r.chars = []);
                break;
              }
            }
            return r;
          }
          function k(t, n, r) {
            let o,
              i,
              a,
              s,
              u,
              l,
              c,
              f,
              d,
              h,
              p,
              m,
              y = 0,
              g = r.height,
              v = [],
              b = [];
            for (
              s = S(g),
                r.width > 0 &&
                  r.whitespaceBreak &&
                  (c = { chars: [], overlap: y }),
                1 === r.printDirection && (t = t.split("").reverse().join("")),
                u = t.length,
                o = 0;
              o < u;
              o++
            )
              if (
                ((f = t.substring(o, o + 1)),
                (d = f.match(/\s/)),
                (i = n[f.charCodeAt(0)]),
                (p = null),
                i)
              ) {
                if (r.fittingRules.hLayout !== e) {
                  for (y = 1e4, a = 0; a < r.height; a++)
                    y = Math.min(y, R(s[a], i[a], r));
                  y = 1e4 === y ? 0 : y;
                }
                if (
                  (r.width > 0 &&
                    (r.whitespaceBreak
                      ? ((h = x(
                          c.chars.concat([{ fig: i, overlap: y }]),
                          g,
                          r
                        )),
                        (p = x(
                          b.concat([{ fig: h, overlap: c.overlap }]),
                          g,
                          r
                        )),
                        (l = E(p)))
                      : ((p = O(s, i, y, r)), (l = E(p))),
                    l >= r.width &&
                      o > 0 &&
                      (r.whitespaceBreak
                        ? ((s = x(b.slice(0, -1), g, r)),
                          b.length > 1 && (v.push(s), (s = S(g))),
                          (b = []))
                        : (v.push(s), (s = S(g))))),
                  r.width > 0 &&
                    r.whitespaceBreak &&
                    ((d && o !== u - 1) || c.chars.push({ fig: i, overlap: y }),
                    d || o === u - 1))
                ) {
                  for (
                    m = null;
                    (p = x(c.chars, g, r)), (l = E(p)), l >= r.width;

                  )
                    (m = _(c.chars, g, r)),
                      (c = { chars: m.chars }),
                      v.push(m.outputFigText);
                  l > 0 &&
                    (m
                      ? b.push({ fig: p, overlap: 1 })
                      : b.push({ fig: p, overlap: c.overlap })),
                    d && (b.push({ fig: i, overlap: y }), (s = S(g))),
                    o === u - 1 && (s = x(b, g, r)),
                    (c = { chars: [], overlap: y });
                  continue;
                }
                s = O(s, i, y, r);
              }
            return (
              E(s) > 0 && v.push(s),
              !0 !== r.showHardBlanks &&
                v.forEach(function (e) {
                  for (u = e.length, a = 0; a < u; a++)
                    e[a] = e[a].replace(
                      new RegExp("\\" + r.hardBlank, "g"),
                      " "
                    );
                }),
              v
            );
          }
          const T = function (e, t, n) {
            let o,
              i,
              a,
              s = (n = n.replace(/\r\n/g, "\n").replace(/\r/g, "\n")).split(
                "\n"
              ),
              u = [];
            for (i = s.length, o = 0; o < i; o++)
              u = u.concat(k(s[o], r[e], t));
            for (i = u.length, a = u[0], o = 1; o < i; o++) a = w(a, u[o], t);
            return a ? a.join("\n") : "";
          };
          function C(r, o) {
            let i,
              a,
              s = JSON.parse(JSON.stringify(r));
            if (void 0 !== o.horizontalLayout)
              for (a in ((i = (function (r, o) {
                let i,
                  a = [
                    "hLayout",
                    "hRule1",
                    "hRule2",
                    "hRule3",
                    "hRule4",
                    "hRule5",
                    "hRule6",
                  ],
                  s = {};
                if ("default" === r)
                  for (i = 0; i < a.length; i++) s[a[i]] = o.fittingRules[a[i]];
                else if ("full" === r)
                  s = {
                    hLayout: e,
                    hRule1: !1,
                    hRule2: !1,
                    hRule3: !1,
                    hRule4: !1,
                    hRule5: !1,
                    hRule6: !1,
                  };
                else if ("fitted" === r)
                  s = {
                    hLayout: t,
                    hRule1: !1,
                    hRule2: !1,
                    hRule3: !1,
                    hRule4: !1,
                    hRule5: !1,
                    hRule6: !1,
                  };
                else if ("controlled smushing" === r)
                  s = {
                    hLayout: 3,
                    hRule1: !0,
                    hRule2: !0,
                    hRule3: !0,
                    hRule4: !0,
                    hRule5: !0,
                    hRule6: !0,
                  };
                else {
                  if ("universal smushing" !== r) return;
                  s = {
                    hLayout: n,
                    hRule1: !1,
                    hRule2: !1,
                    hRule3: !1,
                    hRule4: !1,
                    hRule5: !1,
                    hRule6: !1,
                  };
                }
                return s;
              })(o.horizontalLayout, r)),
              i))
                i.hasOwnProperty(a) && (s.fittingRules[a] = i[a]);
            if (void 0 !== o.verticalLayout)
              for (a in ((i = (function (r, o) {
                let i,
                  a = [
                    "vLayout",
                    "vRule1",
                    "vRule2",
                    "vRule3",
                    "vRule4",
                    "vRule5",
                  ],
                  s = {};
                if ("default" === r)
                  for (i = 0; i < a.length; i++) s[a[i]] = o.fittingRules[a[i]];
                else if ("full" === r)
                  s = {
                    vLayout: e,
                    vRule1: !1,
                    vRule2: !1,
                    vRule3: !1,
                    vRule4: !1,
                    vRule5: !1,
                  };
                else if ("fitted" === r)
                  s = {
                    vLayout: t,
                    vRule1: !1,
                    vRule2: !1,
                    vRule3: !1,
                    vRule4: !1,
                    vRule5: !1,
                  };
                else if ("controlled smushing" === r)
                  s = {
                    vLayout: 3,
                    vRule1: !0,
                    vRule2: !0,
                    vRule3: !0,
                    vRule4: !0,
                    vRule5: !0,
                  };
                else {
                  if ("universal smushing" !== r) return;
                  s = {
                    vLayout: n,
                    vRule1: !1,
                    vRule2: !1,
                    vRule3: !1,
                    vRule4: !1,
                    vRule5: !1,
                  };
                }
                return s;
              })(o.verticalLayout, r)),
              i))
                i.hasOwnProperty(a) && (s.fittingRules[a] = i[a]);
            return (
              (s.printDirection =
                void 0 !== o.printDirection
                  ? o.printDirection
                  : r.printDirection),
              (s.showHardBlanks = o.showHardBlanks || !1),
              (s.width = o.width || -1),
              (s.whitespaceBreak = o.whitespaceBreak || !1),
              s
            );
          }
          const j = function (e, t, n) {
            j.text(e, t, n);
          };
          return (
            (j.text = function (e, t, n) {
              let r = "";
              (e += ""),
                "function" == typeof arguments[1] &&
                  ((n = t), ((t = {}).font = o.font)),
                "string" == typeof t
                  ? ((r = t), (t = {}))
                  : (r = (t = t || {}).font || o.font),
                j.loadFont(r, function (o, i) {
                  if (o) return n(o);
                  n(null, T(r, C(i, t), e));
                });
            }),
            (j.textSync = function (e, t) {
              let n = "";
              (e += ""),
                "string" == typeof t
                  ? ((n = t), (t = {}))
                  : (n = (t = t || {}).font || o.font);
              var r = C(j.loadFontSync(n), t);
              return T(n, r, e);
            }),
            (j.metadata = function (e, t) {
              (e += ""),
                j.loadFont(e, function (n, o) {
                  n ? t(n) : t(null, o, r[e].comment);
                });
            }),
            (j.defaults = function (e) {
              if ("object" == typeof e && null !== e)
                for (var t in e) e.hasOwnProperty(t) && (o[t] = e[t]);
              return JSON.parse(JSON.stringify(o));
            }),
            (j.parseFont = function (o, i) {
              (i = i.replace(/\r\n/g, "\n").replace(/\r/g, "\n")), (r[o] = {});
              var a = i.split("\n"),
                s = a.splice(0, 1)[0].split(" "),
                u = r[o],
                l = {};
              if (
                ((l.hardBlank = s[0].substr(5, 1)),
                (l.height = parseInt(s[1], 10)),
                (l.baseline = parseInt(s[2], 10)),
                (l.maxLength = parseInt(s[3], 10)),
                (l.oldLayout = parseInt(s[4], 10)),
                (l.numCommentLines = parseInt(s[5], 10)),
                (l.printDirection = s.length >= 6 ? parseInt(s[6], 10) : 0),
                (l.fullLayout = s.length >= 7 ? parseInt(s[7], 10) : null),
                (l.codeTagCount = s.length >= 8 ? parseInt(s[8], 10) : null),
                (l.fittingRules = (function (r, o) {
                  let i,
                    a,
                    s,
                    u,
                    l = {},
                    c = [
                      [16384, "vLayout", n],
                      [8192, "vLayout", t],
                      [4096, "vRule5", !0],
                      [2048, "vRule4", !0],
                      [1024, "vRule3", !0],
                      [512, "vRule2", !0],
                      [256, "vRule1", !0],
                      [128, "hLayout", n],
                      [64, "hLayout", t],
                      [32, "hRule6", !0],
                      [16, "hRule5", !0],
                      [8, "hRule4", !0],
                      [4, "hRule3", !0],
                      [2, "hRule2", !0],
                      [1, "hRule1", !0],
                    ];
                  for (i = null !== o ? o : r, a = 0, s = c.length; a < s; )
                    (u = c[a]),
                      i >= u[0]
                        ? ((i -= u[0]),
                          (l[u[1]] = void 0 === l[u[1]] ? u[2] : l[u[1]]))
                        : "vLayout" !== u[1] &&
                          "hLayout" !== u[1] &&
                          (l[u[1]] = !1),
                      a++;
                  return (
                    void 0 === l.hLayout
                      ? 0 === r
                        ? (l.hLayout = t)
                        : -1 === r
                        ? (l.hLayout = e)
                        : l.hRule1 ||
                          l.hRule2 ||
                          l.hRule3 ||
                          l.hRule4 ||
                          l.hRule5 ||
                          l.hRule6
                        ? (l.hLayout = 3)
                        : (l.hLayout = n)
                      : l.hLayout === n &&
                        (l.hRule1 ||
                          l.hRule2 ||
                          l.hRule3 ||
                          l.hRule4 ||
                          l.hRule5 ||
                          l.hRule6) &&
                        (l.hLayout = 3),
                    void 0 === l.vLayout
                      ? l.vRule1 || l.vRule2 || l.vRule3 || l.vRule4 || l.vRule5
                        ? (l.vLayout = 3)
                        : (l.vLayout = e)
                      : l.vLayout === n &&
                        (l.vRule1 ||
                          l.vRule2 ||
                          l.vRule3 ||
                          l.vRule4 ||
                          l.vRule5) &&
                        (l.vLayout = 3),
                    l
                  );
                })(l.oldLayout, l.fullLayout)),
                (u.options = l),
                1 !== l.hardBlank.length ||
                  isNaN(l.height) ||
                  isNaN(l.baseline) ||
                  isNaN(l.maxLength) ||
                  isNaN(l.oldLayout) ||
                  isNaN(l.numCommentLines))
              )
                throw new Error("FIGlet header contains invalid values.");
              let c,
                f = [];
              for (c = 32; c <= 126; c++) f.push(c);
              if (
                ((f = f.concat(196, 214, 220, 228, 246, 252, 223)),
                a.length < l.numCommentLines + l.height * f.length)
              )
                throw new Error("FIGlet file is missing data.");
              let d,
                h,
                p = !1;
              for (
                u.comment = a.splice(0, l.numCommentLines).join("\n"),
                  u.numChars = 0;
                a.length > 0 && u.numChars < f.length;

              ) {
                for (
                  d = f[u.numChars], u[d] = a.splice(0, l.height), c = 0;
                  c < l.height;
                  c++
                )
                  void 0 === u[d][c]
                    ? (u[d][c] = "")
                    : ((h = new RegExp(
                        "\\" + u[d][c].substr(u[d][c].length - 1, 1) + "+$"
                      )),
                      (u[d][c] = u[d][c].replace(h, "")));
                u.numChars++;
              }
              for (; a.length > 0; ) {
                if (
                  ((d = a.splice(0, 1)[0].split(" ")[0]),
                  /^0[xX][0-9a-fA-F]+$/.test(d))
                )
                  d = parseInt(d, 16);
                else if (/^0[0-7]+$/.test(d)) d = parseInt(d, 8);
                else if (/^[0-9]+$/.test(d)) d = parseInt(d, 10);
                else {
                  if (!/^-0[xX][0-9a-fA-F]+$/.test(d)) {
                    if ("" === d) break;
                    console.log("Invalid data:" + d), (p = !0);
                    break;
                  }
                  d = parseInt(d, 16);
                }
                for (u[d] = a.splice(0, l.height), c = 0; c < l.height; c++)
                  void 0 === u[d][c]
                    ? (u[d][c] = "")
                    : ((h = new RegExp(
                        "\\" + u[d][c].substr(u[d][c].length - 1, 1) + "+$"
                      )),
                      (u[d][c] = u[d][c].replace(h, "")));
                u.numChars++;
              }
              if (!0 === p) throw new Error("Error parsing data.");
              return l;
            }),
            (j.loadFont = function (e, t) {
              if (r[e]) t(null, r[e].options);
              else {
                if ("function" != typeof fetch)
                  throw (
                    (console.error(
                      "figlet.js requires the fetch API or a fetch polyfill such as https://cdnjs.com/libraries/fetch"
                    ),
                    new Error("fetch is required for figlet.js to work."))
                  );
                fetch(o.fontPath + "/" + e + ".flf")
                  .then(function (e) {
                    if (e.ok) return e.text();
                    throw (
                      (console.log("Unexpected response", e),
                      new Error("Network response was not ok."))
                    );
                  })
                  .then(function (n) {
                    t(null, j.parseFont(e, n));
                  })
                  .catch(t);
              }
            }),
            (j.loadFontSync = function (e) {
              if (r[e]) return r[e].options;
              throw new Error(
                "synchronous font loading is not implemented for the browser"
              );
            }),
            (j.preloadFonts = function (e, t) {
              let n = [];
              e.reduce(function (e, t) {
                return e.then(function () {
                  return fetch(o.fontPath + "/" + t + ".flf")
                    .then((e) => e.text())
                    .then(function (e) {
                      n.push(e);
                    });
                });
              }, Promise.resolve()).then(function (r) {
                for (var o in e) e.hasOwnProperty(o) && j.parseFont(e[o], n[o]);
                t && t();
              });
            }),
            (j.figFonts = r),
            j
          );
        })();
        void 0 !== e.exports && (e.exports = t);
      },
      675: (e, t, n) => {
        n.r(t);
      },
      352: function (e, t, n) {
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n);
                  var o = Object.getOwnPropertyDescriptor(t, n);
                  (o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n]);
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  });
                }
              : function (e, t) {
                  e.default = t;
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var n in e)
                  "default" !== n &&
                    Object.prototype.hasOwnProperty.call(e, n) &&
                    r(t, e, n);
              return o(t, e), t;
            },
          a =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                  try {
                    u(r.next(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function s(e) {
                  try {
                    u(r.throw(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function u(e) {
                  var t;
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(a, s);
                }
                u((r = r.apply(e, t || [])).next());
              });
            },
          s =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                r,
                o,
                i,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (i = { next: s(0), throw: s(1), return: s(2) }),
                "function" == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function s(s) {
                return function (u) {
                  return (function (s) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; i && ((i = 0), s[0] && (a = 0)), a; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & s[0]
                                ? r.return
                                : s[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, s[1])).done)
                        )
                          return o;
                        switch (
                          ((r = 0), o && (s = [2 & s[0], o.value]), s[0])
                        ) {
                          case 0:
                          case 1:
                            o = s;
                            break;
                          case 4:
                            return a.label++, { value: s[1], done: !1 };
                          case 5:
                            a.label++, (r = s[1]), (s = [0]);
                            continue;
                          case 7:
                            (s = a.ops.pop()), a.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (o =
                                  (o = a.trys).length > 0 && o[o.length - 1]) ||
                                (6 !== s[0] && 2 !== s[0])
                              )
                            ) {
                              a = 0;
                              continue;
                            }
                            if (
                              3 === s[0] &&
                              (!o || (s[1] > o[0] && s[1] < o[3]))
                            ) {
                              a.label = s[1];
                              break;
                            }
                            if (6 === s[0] && a.label < o[1]) {
                              (a.label = o[1]), (o = s);
                              break;
                            }
                            if (o && a.label < o[2]) {
                              (a.label = o[2]), a.ops.push(s);
                              break;
                            }
                            o[2] && a.ops.pop(), a.trys.pop();
                            continue;
                        }
                        s = t.call(e, a);
                      } catch (e) {
                        (s = [6, e]), (r = 0);
                      } finally {
                        n = o = 0;
                      }
                    if (5 & s[0]) throw s[1];
                    return { value: s[0] ? s[1] : void 0, done: !0 };
                  })([s, u]);
                };
              }
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.cshaifa =
            t.gassan =
            t.repo =
            t.sudo =
            t.cv =
            t.email =
            t.allc =
            t.banner =
            t.about =
              void 0);
        var u = n(240),
          l = n(798),
          c = i(n(860));
        (t.about = function (e) {
          return (
            void 0 === e && (e = []),
            a(this, void 0, void 0, function () {
              var e;
              return s(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (
                      (e = u.println), [4, (0, l.figletHelp)(["Hello World!"])]
                    );
                  case 1:
                    return (
                      e.apply(void 0, [t.sent(), "red"]),
                      (0, u.println)(
                        "My name is Muhammad Swalha, I'm a software developer."
                      ),
                      (0, u.println)(
                        "I'm a Computer Science student and I'm currently working at Google TLV as a Software Engineer Intern."
                      ),
                      (0, u.println)(
                        "I'm passionate about programming and I love to learn new things."
                      ),
                      (0, u.println)(
                        "I'm a fast learner, I'm a team player and I'm a hard worker."
                      ),
                      [2]
                    );
                }
              });
            })
          );
        }),
          (t.banner = function (e) {
            return (
              void 0 === e && (e = []),
              a(this, void 0, void 0, function () {
                var e;
                return s(this, function (t) {
                  switch (t.label) {
                    case 0:
                      (e = 0), (t.label = 1);
                    case 1:
                      return e < 200
                        ? ((0, u.printnln)("".concat(e, " -> "), "red"),
                          [4, (0, u.delay)(5)])
                        : [3, 4];
                    case 2:
                      t.sent(), (t.label = 3);
                    case 3:
                      return e++, [3, 1];
                    case 4:
                      return (0, u.printnln)("200", "green"), [2];
                  }
                });
              })
            );
          }),
          (t.allc = function (e) {
            return a(void 0, void 0, void 0, function () {
              var e;
              return s(this, function (t) {
                return (
                  (e = Object.keys(c).sort().join(", ")),
                  (0, u.println)(
                    "Available commands:\n".concat(
                      e,
                      "\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command."
                    )
                  ),
                  [2]
                );
              });
            });
          }),
          (t.email = function (e) {
            return a(void 0, void 0, void 0, function () {
              return s(this, function (e) {
                return (
                  window.open("mailto:mohamd514.m@gmail.com"),
                  navigator.clipboard.writeText("mohamd514.m@gmail.com"),
                  (0, u.println)(
                    "Opening mailto:mohamd514.m@gmail.com and copied to clipboard."
                  ),
                  [2]
                );
              });
            });
          }),
          (t.cv = function (e) {
            return a(void 0, void 0, void 0, function () {
              return s(this, function (e) {
                return (
                  window.open(
                    "https://docs.google.com/document/d/11VdFwvsqrj2-j_tErwOoT7EcldT82h0QnSI6wPzHhoM/edit?usp=sharing"
                  ),
                  (0, u.println)("Opening CV..."),
                  [2]
                );
              });
            });
          }),
          (t.sudo = function (e) {
            return a(void 0, void 0, void 0, function () {
              return s(this, function (t) {
                return (
                  setTimeout(function () {
                    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
                  }, 1e3),
                  (0, u.println)(
                    "Permission denied: unable to run the command '".concat(
                      e ? e[0] : "",
                      "' as root."
                    )
                  ),
                  [2]
                );
              });
            });
          }),
          (t.repo = function (e) {
            return a(void 0, void 0, void 0, function () {
              return s(this, function (e) {
                return (
                  setTimeout(function () {
                    window.open(
                      "https://github.com/swalha1999/terminalMe",
                      "_blank"
                    );
                  }, 300),
                  (0, u.println)("Opening repository..."),
                  [2]
                );
              });
            });
          }),
          (t.gassan = function (e) {
            return a(void 0, void 0, void 0, function () {
              return s(this, function (e) {
                return (0, u.println)("Gassan is gay"), [2];
              });
            });
          }),
          (t.cshaifa = function (e) {
            return a(void 0, void 0, void 0, function () {
              return s(this, function (e) {
                return (
                  setTimeout(function () {
                    window.open(
                      "https://drive.google.com/drive/folders/10hxbAc4E2qUSopuwe-XOOnxyC8mMaa81?usp=sharing"
                    );
                  }, 1e3),
                  (0, u.println)("Opening cs-haifa..."),
                  [2]
                );
              });
            });
          });
      },
      515: function (e, t, n) {
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n);
                  var o = Object.getOwnPropertyDescriptor(t, n);
                  (o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n]);
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  });
                }
              : function (e, t) {
                  e.default = t;
                }),
          i =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var n in e)
                  "default" !== n &&
                    Object.prototype.hasOwnProperty.call(e, n) &&
                    r(t, e, n);
              return o(t, e), t;
            },
          a =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                  try {
                    u(r.next(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function s(e) {
                  try {
                    u(r.throw(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function u(e) {
                  var t;
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(a, s);
                }
                u((r = r.apply(e, t || [])).next());
              });
            },
          s =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                r,
                o,
                i,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (i = { next: s(0), throw: s(1), return: s(2) }),
                "function" == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function s(s) {
                return function (u) {
                  return (function (s) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; i && ((i = 0), s[0] && (a = 0)), a; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & s[0]
                                ? r.return
                                : s[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, s[1])).done)
                        )
                          return o;
                        switch (
                          ((r = 0), o && (s = [2 & s[0], o.value]), s[0])
                        ) {
                          case 0:
                          case 1:
                            o = s;
                            break;
                          case 4:
                            return a.label++, { value: s[1], done: !1 };
                          case 5:
                            a.label++, (r = s[1]), (s = [0]);
                            continue;
                          case 7:
                            (s = a.ops.pop()), a.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (o =
                                  (o = a.trys).length > 0 && o[o.length - 1]) ||
                                (6 !== s[0] && 2 !== s[0])
                              )
                            ) {
                              a = 0;
                              continue;
                            }
                            if (
                              3 === s[0] &&
                              (!o || (s[1] > o[0] && s[1] < o[3]))
                            ) {
                              a.label = s[1];
                              break;
                            }
                            if (6 === s[0] && a.label < o[1]) {
                              (a.label = o[1]), (o = s);
                              break;
                            }
                            if (o && a.label < o[2]) {
                              (a.label = o[2]), a.ops.push(s);
                              break;
                            }
                            o[2] && a.ops.pop(), a.trys.pop();
                            continue;
                        }
                        s = t.call(e, a);
                      } catch (e) {
                        (s = [6, e]), (r = 0);
                      } finally {
                        n = o = 0;
                      }
                    if (5 & s[0]) throw s[1];
                    return { value: s[0] ? s[1] : void 0, done: !0 };
                  })([s, u]);
                };
              }
            };
        Object.defineProperty(t, "__esModule", { value: !0 });
        var u = n(240),
          l = i(n(860)),
          c = [],
          f = 0;
        function d(e) {
          if ("ArrowUp" === e.key && f > 0) f--;
          else {
            if (!("ArrowDown" === e.key && f < c.length - 1)) return;
            f++;
          }
          var t = document.querySelector("input");
          t && (t.focus(), (t.value = c[f]));
        }
        function h() {
          return a(this, void 0, void 0, function () {
            return s(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, l.about([])];
                case 1:
                  return (
                    e.sent(),
                    (0, u.newLine)(),
                    (0, u.println)("Starting the server..."),
                    [4, (0, u.delay)(500)]
                  );
                case 2:
                  return (
                    e.sent(),
                    (0, u.newLine)(),
                    (0, u.println)("You can run several commands:"),
                    (0, u.createCode)("about", "Who am I and what do I do."),
                    (0, u.createCode)("help or -h", "See all commands."),
                    (0, u.createCode)("social -a", "All my social networks."),
                    [4, (0, u.delay)(500)]
                  );
                case 3:
                  return e.sent(), [2];
              }
            });
          });
        }
        function p(e) {
          return a(this, void 0, void 0, function () {
            var t, n, r, o;
            return s(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    (0, u.printnln)("swalha@Falc0n", "green"),
                    (0, u.printnln)(":"),
                    (0, u.printnln)("~/terminalMe", "blue"),
                    (0, u.printnln)("$ "),
                    [4, (0, u.scanf)()]
                  );
                case 1:
                  switch (
                    ((t = i.sent()),
                    (n = t.split(" ")[0]),
                    (r = t.split(" ").slice(1)),
                    e.removeEventListener("keydown", d),
                    c[c.length - 1] !== t && c.push(t),
                    (f = c.length),
                    n)
                  ) {
                    case "clear":
                      return [3, 2];
                    case "":
                      return [3, 4];
                  }
                  return [3, 5];
                case 2:
                  return [4, (0, u.clearScreen)()];
                case 3:
                case 7:
                  return i.sent(), [3, 9];
                case 4:
                  return [3, 9];
                case 5:
                  return -1 !== Object.keys(l).indexOf(n)
                    ? [3, 6]
                    : ((0, u.println)(
                        "bash: ".concat(n, ": command not found")
                      ),
                      [3, 9]);
                case 6:
                  return i.trys.push([6, 8, , 9]), [4, l[n](r)];
                case 8:
                  return (
                    (o = i.sent()),
                    (0, u.println)(
                      "bash: ".concat(n, ": error while executing command")
                    ),
                    (0, u.println)(String(o)),
                    [3, 9]
                  );
                case 9:
                  return e.addEventListener("keydown", d), [3, 0];
                case 10:
                  return [2];
              }
            });
          });
        }
        t.default = function (e) {
          e
            ? (e.addEventListener("keydown", d),
              (function (e) {
                a(this, void 0, void 0, function () {
                  return s(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, h()];
                      case 1:
                        return t.sent(), [4, p(e)];
                      case 2:
                        return t.sent(), [2];
                    }
                  });
                });
              })(e))
            : console.error('there is no element with id "app"');
        };
      },
      685: function (e, t, n) {
        var r =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                  try {
                    u(r.next(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function s(e) {
                  try {
                    u(r.throw(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function u(e) {
                  var t;
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(a, s);
                }
                u((r = r.apply(e, t || [])).next());
              });
            },
          o =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                r,
                o,
                i,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (i = { next: s(0), throw: s(1), return: s(2) }),
                "function" == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function s(s) {
                return function (u) {
                  return (function (s) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; i && ((i = 0), s[0] && (a = 0)), a; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & s[0]
                                ? r.return
                                : s[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, s[1])).done)
                        )
                          return o;
                        switch (
                          ((r = 0), o && (s = [2 & s[0], o.value]), s[0])
                        ) {
                          case 0:
                          case 1:
                            o = s;
                            break;
                          case 4:
                            return a.label++, { value: s[1], done: !1 };
                          case 5:
                            a.label++, (r = s[1]), (s = [0]);
                            continue;
                          case 7:
                            (s = a.ops.pop()), a.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (o =
                                  (o = a.trys).length > 0 && o[o.length - 1]) ||
                                (6 !== s[0] && 2 !== s[0])
                              )
                            ) {
                              a = 0;
                              continue;
                            }
                            if (
                              3 === s[0] &&
                              (!o || (s[1] > o[0] && s[1] < o[3]))
                            ) {
                              a.label = s[1];
                              break;
                            }
                            if (6 === s[0] && a.label < o[1]) {
                              (a.label = o[1]), (o = s);
                              break;
                            }
                            if (o && a.label < o[2]) {
                              (a.label = o[2]), a.ops.push(s);
                              break;
                            }
                            o[2] && a.ops.pop(), a.trys.pop();
                            continue;
                        }
                        s = t.call(e, a);
                      } catch (e) {
                        (s = [6, e]), (r = 0);
                      } finally {
                        n = o = 0;
                      }
                    if (5 & s[0]) throw s[1];
                    return { value: s[0] ? s[1] : void 0, done: !0 };
                  })([s, u]);
                };
              }
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.cowsay = void 0);
        var i = n(641),
          a = n(240);
        t.cowsay = function (e) {
          return (
            void 0 === e && (e = []),
            r(void 0, void 0, void 0, function () {
              var e;
              return o(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, (0, i.getQuote)()];
                  case 1:
                    return (e = t.sent().quote), (0, a.println)(e), [2];
                }
              });
            })
          );
        };
      },
      678: function (e, t, n) {
        var r =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                  try {
                    u(r.next(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function s(e) {
                  try {
                    u(r.throw(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function u(e) {
                  var t;
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(a, s);
                }
                u((r = r.apply(e, t || [])).next());
              });
            },
          o =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                r,
                o,
                i,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (i = { next: s(0), throw: s(1), return: s(2) }),
                "function" == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function s(s) {
                return function (u) {
                  return (function (s) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; i && ((i = 0), s[0] && (a = 0)), a; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & s[0]
                                ? r.return
                                : s[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, s[1])).done)
                        )
                          return o;
                        switch (
                          ((r = 0), o && (s = [2 & s[0], o.value]), s[0])
                        ) {
                          case 0:
                          case 1:
                            o = s;
                            break;
                          case 4:
                            return a.label++, { value: s[1], done: !1 };
                          case 5:
                            a.label++, (r = s[1]), (s = [0]);
                            continue;
                          case 7:
                            (s = a.ops.pop()), a.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (o =
                                  (o = a.trys).length > 0 && o[o.length - 1]) ||
                                (6 !== s[0] && 2 !== s[0])
                              )
                            ) {
                              a = 0;
                              continue;
                            }
                            if (
                              3 === s[0] &&
                              (!o || (s[1] > o[0] && s[1] < o[3]))
                            ) {
                              a.label = s[1];
                              break;
                            }
                            if (6 === s[0] && a.label < o[1]) {
                              (a.label = o[1]), (o = s);
                              break;
                            }
                            if (o && a.label < o[2]) {
                              (a.label = o[2]), a.ops.push(s);
                              break;
                            }
                            o[2] && a.ops.pop(), a.trys.pop();
                            continue;
                        }
                        s = t.call(e, a);
                      } catch (e) {
                        (s = [6, e]), (r = 0);
                      } finally {
                        n = o = 0;
                      }
                    if (5 & s[0]) throw s[1];
                    return { value: s[0] ? s[1] : void 0, done: !0 };
                  })([s, u]);
                };
              }
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.cal = t.date = void 0);
        var i = n(240),
          a = n(828);
        (t.date = function (e) {
          return r(void 0, void 0, void 0, function () {
            return o(this, function (e) {
              return (0, i.println)(new Date().toString()), [2];
            });
          });
        }),
          (t.cal = function (e) {
            return r(void 0, void 0, void 0, function () {
              return o(this, function (t) {
                return (0, i.println)((0, a.calHelper)(e)), [2];
              });
            });
          });
      },
      798: function (e, t, n) {
        var r =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                  try {
                    u(r.next(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function s(e) {
                  try {
                    u(r.throw(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function u(e) {
                  var t;
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(a, s);
                }
                u((r = r.apply(e, t || [])).next());
              });
            },
          o =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                r,
                o,
                i,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (i = { next: s(0), throw: s(1), return: s(2) }),
                "function" == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function s(s) {
                return function (u) {
                  return (function (s) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; i && ((i = 0), s[0] && (a = 0)), a; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & s[0]
                                ? r.return
                                : s[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, s[1])).done)
                        )
                          return o;
                        switch (
                          ((r = 0), o && (s = [2 & s[0], o.value]), s[0])
                        ) {
                          case 0:
                          case 1:
                            o = s;
                            break;
                          case 4:
                            return a.label++, { value: s[1], done: !1 };
                          case 5:
                            a.label++, (r = s[1]), (s = [0]);
                            continue;
                          case 7:
                            (s = a.ops.pop()), a.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (o =
                                  (o = a.trys).length > 0 && o[o.length - 1]) ||
                                (6 !== s[0] && 2 !== s[0])
                              )
                            ) {
                              a = 0;
                              continue;
                            }
                            if (
                              3 === s[0] &&
                              (!o || (s[1] > o[0] && s[1] < o[3]))
                            ) {
                              a.label = s[1];
                              break;
                            }
                            if (6 === s[0] && a.label < o[1]) {
                              (a.label = o[1]), (o = s);
                              break;
                            }
                            if (o && a.label < o[2]) {
                              (a.label = o[2]), a.ops.push(s);
                              break;
                            }
                            o[2] && a.ops.pop(), a.trys.pop();
                            continue;
                        }
                        s = t.call(e, a);
                      } catch (e) {
                        (s = [6, e]), (r = 0);
                      } finally {
                        n = o = 0;
                      }
                    if (5 & s[0]) throw s[1];
                    return { value: s[0] ? s[1] : void 0, done: !0 };
                  })([s, u]);
                };
              }
            },
          i =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.figletHelp = t.figlet = void 0);
        var a = i(n(711)),
          s = n(240);
        (t.figlet = function (e) {
          return r(void 0, void 0, void 0, function () {
            var n;
            return o(this, function (r) {
              switch (r.label) {
                case 0:
                  return 0 === e.length
                    ? ((0, s.println)(
                        "\n        Usage: figlet <text>\n        or\n        figlet -f <font> <text>\n        figlet --fonts to list available fonts\n        "
                      ),
                      [2])
                    : "--fonts" === e[0]
                    ? ((0, s.println)(
                        "\n1Row\n3-D\n3D Diagonal\n3D-ASCII\n3x5\n4Max\nAcrobatic\nAlligator\nAlligator2\nAlpha\nAlphabet\nArrows\nAvatar\nB1FF\nB1FF\nBanner\nBanner3-D\nBanner3\nBanner4\nBarbwire\nBasic\nBear\nBell\nBenjamin\nBig\nBigfig\nBinary\nBlock\nBlocks\nBloody\nBolger\nBraced\nBright\nBroadway\nBubble\nBulbhead\nCaligraphy\nCaligraphy2\nCards\nCatwalk\nChiseled\nChunky\nCoinstak\nCola\nColossal\nComputer\nContessa\nContrast\nCosmike\nCrawford\nCrawford2\nCrazy\nCricket\nCursive\nCyberlarge\nCybermedium\nCybersmall\nCygnet\nDANC4\nDWhistled\nDecimal\nDiamond\nDigital\nDoh\nDoom\nDouble\nElectronic\nElite\nEpic\nFender\nFilter\nFlipped\nFraktur\nFuzzy\nGeorgi16\nGeorgia11\nGhost\nGhoulish\nGlenyn\nGoofy\nGothic\nGraceful\nGradient\nGraffiti\nGreek\nHex\nHieroglyphs\nHollywood\nICL-1900\nImpossible\nInvita\nIsometric1\nIsometric2\nIsometric3\nIsometric4\nItalic\nIvrit\nJacky\nJazmine\nJerusalem\nKatakana\nKban\nKeyboard\nKnob\nKonto\nLCD\nLean\nLetters\nLinux\nLockergnome\nMadrid\nMarquee\nMaxfour\nMerlin1\nMerlin2\nMike\nMini\nMirror\nMnemonic\nModular\nMorse\nMorse2\nMoscow\nMshebrew210\nMuzzle\nNScript\nNancyj-Fancy\nNancyj-Improved\nNancyj-Underlined\nNancyj\nNipples\nO8\nOS2\nOctal\nOgre\nPagga\nPatorjk-HeX\nPawp\nPeaks\nPebbles\nPepper\nPoison\nPuffy\nPuzzle\nPyramid\nRammstein\nRectangles\nRelief\nRelief2\nReverse\nRoman\nRot13\nRot13\nRotated\nRounded\nRozzo\nRunic\nRunyc\nScript\nSerifcap\nShadow\nShimrod\nShort\nSlant\nSlide\nSmall\nSoft\nSpeed\nSpliff\nStacey\nStampate\nStampatello\nStandard\nStellar\nStforek\nStop\nStraight\nSub-Zero\nSwan\nSweet\nTHIS\nTanja\nTengwar\nTerm\nTest1\nThick\nThin\nThorned\nTicks\nTiles\nTinker-Toy\nTombstone\nTrain\nTrek\nTsalagi\nTubular\nTwisted\nUnivers\nVarsity\nWavy\nWeird\nWhimsy\nWow"
                      ),
                      [2])
                    : ((n = s.println), [4, (0, t.figletHelp)(e)]);
                case 1:
                  return n.apply(void 0, [r.sent()]), [2];
              }
            });
          });
        }),
          (t.figletHelp = function (e) {
            return (
              void 0 === e && (e = []),
              r(void 0, void 0, void 0, function () {
                var t, n, r, i, u, l, c;
                return o(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return (
                        (t = e.findIndex(function (e) {
                          return "-f" === e;
                        })),
                        (n = -1 !== t ? e[t + 1] : "Standard"),
                        (r =
                          -1 !== t
                            ? e.slice(t + 2, e.length).join(" ")
                            : e.join(" ")),
                        console.log(n, r),
                        a.default.text(r, n, function (e, t) {
                          if (e)
                            return (
                              console.log("Something went wrong..."),
                              void console.dir(e)
                            );
                          i = t;
                        }),
                        (u = -1 !== t ? e[t + 1] : "Standard"),
                        (l = u),
                        (c =
                          -1 !== t
                            ? e.slice(t + 2, e.length).join(" ")
                            : e.join(" ")),
                        [4, (0, s.delay)(200)]
                      );
                    case 1:
                      return (
                        o.sent(),
                        a.default.text(c, l, function (e, t) {
                          if (e)
                            return (
                              console.log("Something went wrong..."),
                              void console.dir(e)
                            );
                          i = t;
                        }),
                        [
                          2,
                          i ||
                            "please try again. tap the up arrow and press enter",
                        ]
                      );
                  }
                });
              })
            );
          });
      },
      152: function (e, t, n) {
        var r =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                  try {
                    u(r.next(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function s(e) {
                  try {
                    u(r.throw(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function u(e) {
                  var t;
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(a, s);
                }
                u((r = r.apply(e, t || [])).next());
              });
            },
          o =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                r,
                o,
                i,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (i = { next: s(0), throw: s(1), return: s(2) }),
                "function" == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function s(s) {
                return function (u) {
                  return (function (s) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; i && ((i = 0), s[0] && (a = 0)), a; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & s[0]
                                ? r.return
                                : s[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, s[1])).done)
                        )
                          return o;
                        switch (
                          ((r = 0), o && (s = [2 & s[0], o.value]), s[0])
                        ) {
                          case 0:
                          case 1:
                            o = s;
                            break;
                          case 4:
                            return a.label++, { value: s[1], done: !1 };
                          case 5:
                            a.label++, (r = s[1]), (s = [0]);
                            continue;
                          case 7:
                            (s = a.ops.pop()), a.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (o =
                                  (o = a.trys).length > 0 && o[o.length - 1]) ||
                                (6 !== s[0] && 2 !== s[0])
                              )
                            ) {
                              a = 0;
                              continue;
                            }
                            if (
                              3 === s[0] &&
                              (!o || (s[1] > o[0] && s[1] < o[3]))
                            ) {
                              a.label = s[1];
                              break;
                            }
                            if (6 === s[0] && a.label < o[1]) {
                              (a.label = o[1]), (o = s);
                              break;
                            }
                            if (o && a.label < o[2]) {
                              (a.label = o[2]), a.ops.push(s);
                              break;
                            }
                            o[2] && a.ops.pop(), a.trys.pop();
                            continue;
                        }
                        s = t.call(e, a);
                      } catch (e) {
                        (s = [6, e]), (r = 0);
                      } finally {
                        n = o = 0;
                      }
                    if (5 & s[0]) throw s[1];
                    return { value: s[0] ? s[1] : void 0, done: !0 };
                  })([s, u]);
                };
              }
            },
          i =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.cd = t.ls = void 0);
        var a = i(n(814)),
          s = n(240),
          u = a.default;
        (t.ls = function (e) {
          return r(void 0, void 0, void 0, function () {
            var t, n;
            return o(this, function (r) {
              return (
                (t = e.join(" ")),
                (n = "".concat(u.getFolders(), "  ").concat(u.getFiles())),
                "-l" === t && (n = "".concat(n, "  ").concat(u.getFiles())),
                "  " !== n && (console.log(n), (0, s.println)(n)),
                [2]
              );
            });
          });
        }),
          (t.cd = function (e) {
            return r(void 0, void 0, void 0, function () {
              var t, n;
              return o(this, function (r) {
                return (
                  (t = e.join(" ")),
                  (n = u.getFolder(t)),
                  ".." === t
                    ? (u = u.getParent() || u)
                    : n
                    ? (u = n)
                    : (0, s.println)("No such folder"),
                  [2]
                );
              });
            });
          });
      },
      860: function (e, t, n) {
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n);
                  var o = Object.getOwnPropertyDescriptor(t, n);
                  (o &&
                    !("get" in o
                      ? !t.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, r, o);
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n]);
                }),
          o =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  r(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          o(n(352), t),
          o(n(685), t),
          o(n(798), t),
          o(n(921), t),
          o(n(731), t),
          o(n(678), t),
          o(n(152), t);
      },
      921: function (e, t, n) {
        var r =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                  try {
                    u(r.next(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function s(e) {
                  try {
                    u(r.throw(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function u(e) {
                  var t;
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(a, s);
                }
                u((r = r.apply(e, t || [])).next());
              });
            },
          o =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                r,
                o,
                i,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (i = { next: s(0), throw: s(1), return: s(2) }),
                "function" == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function s(s) {
                return function (u) {
                  return (function (s) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; i && ((i = 0), s[0] && (a = 0)), a; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & s[0]
                                ? r.return
                                : s[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, s[1])).done)
                        )
                          return o;
                        switch (
                          ((r = 0), o && (s = [2 & s[0], o.value]), s[0])
                        ) {
                          case 0:
                          case 1:
                            o = s;
                            break;
                          case 4:
                            return a.label++, { value: s[1], done: !1 };
                          case 5:
                            a.label++, (r = s[1]), (s = [0]);
                            continue;
                          case 7:
                            (s = a.ops.pop()), a.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (o =
                                  (o = a.trys).length > 0 && o[o.length - 1]) ||
                                (6 !== s[0] && 2 !== s[0])
                              )
                            ) {
                              a = 0;
                              continue;
                            }
                            if (
                              3 === s[0] &&
                              (!o || (s[1] > o[0] && s[1] < o[3]))
                            ) {
                              a.label = s[1];
                              break;
                            }
                            if (6 === s[0] && a.label < o[1]) {
                              (a.label = o[1]), (o = s);
                              break;
                            }
                            if (o && a.label < o[2]) {
                              (a.label = o[2]), a.ops.push(s);
                              break;
                            }
                            o[2] && a.ops.pop(), a.trys.pop();
                            continue;
                        }
                        s = t.call(e, a);
                      } catch (e) {
                        (s = [6, e]), (r = 0);
                      } finally {
                        n = o = 0;
                      }
                    if (5 & s[0]) throw s[1];
                    return { value: s[0] ? s[1] : void 0, done: !0 };
                  })([s, u]);
                };
              }
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ifconfig = t.ipconfig = void 0);
        var i = n(240);
        function a(e) {
          return r(this, void 0, void 0, function () {
            return o(this, function (e) {
              return (
                (0, i.println)(
                  "eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500\n    inet "
                    .concat(
                      (0, i.getIp)(),
                      "  netmask 255.255.240.0  broadcast "
                    )
                    .concat(
                      (0, i.getIp)(),
                      "\n    inet6 ff82::255:5d3ff:ef52:fe9f  prefixlen 64  scopeid 0x20<link>\n    ether 04:25:5f:42:af:9d  txqueuelen 1000  (Ethernet)\n    RX packets 4139  bytes 3061872 (3.0 MB)\n    RX errors 0  dropped 0  overruns 0  frame 0\n    TX packets 3117  bytes 634481 (634.4 KB)\n    TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0"
                    )
                ),
                (0, i.newLine)(),
                (0, i.println)(
                  "lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536\n    inet 127.0.0.1  netmask 255.0.0.0\n    inet6 ::1  prefixlen 128  scopeid 0x10<host>\n    loop  txqueuelen 1000  (Local Loopback)\n    RX packets 20595  bytes 35163043 (35.1 MB)\n    RX errors 0  dropped 0  overruns 0  frame 0\n    TX packets 20595  bytes 35163043 (35.1 MB)\n    TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0"
                ),
                (0, i.newLine)(),
                (0, i.println)("your ip is: ".concat((0, i.getIp)()), "orange"),
                [2]
              );
            });
          });
        }
        (t.ipconfig = a),
          (t.ifconfig = function (e) {
            return r(this, void 0, void 0, function () {
              return o(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [4, a()];
                  case 1:
                    return e.sent(), [2];
                }
              });
            });
          });
      },
      731: function (e, t, n) {
        var r =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                  try {
                    u(r.next(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function s(e) {
                  try {
                    u(r.throw(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function u(e) {
                  var t;
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(a, s);
                }
                u((r = r.apply(e, t || [])).next());
              });
            },
          o =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                r,
                o,
                i,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (i = { next: s(0), throw: s(1), return: s(2) }),
                "function" == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function s(s) {
                return function (u) {
                  return (function (s) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; i && ((i = 0), s[0] && (a = 0)), a; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & s[0]
                                ? r.return
                                : s[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, s[1])).done)
                        )
                          return o;
                        switch (
                          ((r = 0), o && (s = [2 & s[0], o.value]), s[0])
                        ) {
                          case 0:
                          case 1:
                            o = s;
                            break;
                          case 4:
                            return a.label++, { value: s[1], done: !1 };
                          case 5:
                            a.label++, (r = s[1]), (s = [0]);
                            continue;
                          case 7:
                            (s = a.ops.pop()), a.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (o =
                                  (o = a.trys).length > 0 && o[o.length - 1]) ||
                                (6 !== s[0] && 2 !== s[0])
                              )
                            ) {
                              a = 0;
                              continue;
                            }
                            if (
                              3 === s[0] &&
                              (!o || (s[1] > o[0] && s[1] < o[3]))
                            ) {
                              a.label = s[1];
                              break;
                            }
                            if (6 === s[0] && a.label < o[1]) {
                              (a.label = o[1]), (o = s);
                              break;
                            }
                            if (o && a.label < o[2]) {
                              (a.label = o[2]), a.ops.push(s);
                              break;
                            }
                            o[2] && a.ops.pop(), a.trys.pop();
                            continue;
                        }
                        s = t.call(e, a);
                      } catch (e) {
                        (s = [6, e]), (r = 0);
                      } finally {
                        n = o = 0;
                      }
                    if (5 & s[0]) throw s[1];
                    return { value: s[0] ? s[1] : void 0, done: !0 };
                  })([s, u]);
                };
              }
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.w = t.weather = void 0);
        var i = n(641),
          a = n(240);
        (t.weather = function (e) {
          return r(void 0, void 0, void 0, function () {
            var t, n;
            return o(this, function (r) {
              switch (r.label) {
                case 0:
                  return (
                    (t = e.join("+")) ||
                      (0, a.println)(
                        "Usage: weather [city]. Example: weather haifa for specific city"
                      ),
                    [4, (0, i.getWeather)(t)]
                  );
                case 1:
                  return (n = r.sent()), (0, a.println)(n), [2];
              }
            });
          });
        }),
          (t.w = t.weather);
      },
      585: function (e, t, n) {
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }), n(675);
        var o = r(n(515)),
          i = n(240),
          a = document.querySelector("#app");
        null == a ||
          a.addEventListener("click", function (e) {
            var t = document.querySelector("input");
            if (t) {
              var n = t.value.length;
              t.focus(), t.setSelectionRange(n, n);
            }
          }),
          fetch("https://api.ipify.org?format=json").then(function (e) {
            return e.json().then(function (e) {
              return (0, i.setIp)(e.ip);
            });
          }),
          (0, o.default)(a);
      },
      641: function (e, t, n) {
        var r =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                  try {
                    u(r.next(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function s(e) {
                  try {
                    u(r.throw(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function u(e) {
                  var t;
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(a, s);
                }
                u((r = r.apply(e, t || [])).next());
              });
            },
          o =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                r,
                o,
                i,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (i = { next: s(0), throw: s(1), return: s(2) }),
                "function" == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function s(s) {
                return function (u) {
                  return (function (s) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; i && ((i = 0), s[0] && (a = 0)), a; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & s[0]
                                ? r.return
                                : s[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, s[1])).done)
                        )
                          return o;
                        switch (
                          ((r = 0), o && (s = [2 & s[0], o.value]), s[0])
                        ) {
                          case 0:
                          case 1:
                            o = s;
                            break;
                          case 4:
                            return a.label++, { value: s[1], done: !1 };
                          case 5:
                            a.label++, (r = s[1]), (s = [0]);
                            continue;
                          case 7:
                            (s = a.ops.pop()), a.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (o =
                                  (o = a.trys).length > 0 && o[o.length - 1]) ||
                                (6 !== s[0] && 2 !== s[0])
                              )
                            ) {
                              a = 0;
                              continue;
                            }
                            if (
                              3 === s[0] &&
                              (!o || (s[1] > o[0] && s[1] < o[3]))
                            ) {
                              a.label = s[1];
                              break;
                            }
                            if (6 === s[0] && a.label < o[1]) {
                              (a.label = o[1]), (o = s);
                              break;
                            }
                            if (o && a.label < o[2]) {
                              (a.label = o[2]), a.ops.push(s);
                              break;
                            }
                            o[2] && a.ops.pop(), a.trys.pop();
                            continue;
                        }
                        s = t.call(e, a);
                      } catch (e) {
                        (s = [6, e]), (r = 0);
                      } finally {
                        n = o = 0;
                      }
                    if (5 & s[0]) throw s[1];
                    return { value: s[0] ? s[1] : void 0, done: !0 };
                  })([s, u]);
                };
              }
            },
          i =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getQuote = t.getWeather = t.getProjects = void 0);
        var a = i(n(56));
        (t.getProjects = function () {
          return r(void 0, void 0, void 0, function () {
            return o(this, function (e) {
              switch (e.label) {
                case 0:
                  return [
                    4,
                    a.default.get(
                      "https://api.github.com/users/swalha1999/repos"
                    ),
                  ];
                case 1:
                  return [2, e.sent().data];
              }
            });
          });
        }),
          (t.getWeather = function (e) {
            return r(void 0, void 0, void 0, function () {
              return o(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [
                      4,
                      a.default.get("https://wttr.in/".concat(e, "?ATm")),
                    ];
                  case 1:
                    return [2, t.sent().data];
                }
              });
            });
          }),
          (t.getQuote = function () {
            return r(void 0, void 0, void 0, function () {
              var e;
              return o(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, a.default.get("https://api.quotable.io/random")];
                  case 1:
                    return (
                      (e = t.sent().data),
                      [
                        2,
                        {
                          quote: "“".concat(e.content, "” — ").concat(e.author),
                        },
                      ]
                    );
                }
              });
            });
          });
      },
      828: (e, t) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.calHelper = void 0);
        var n = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
          r = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "Septemper",
            "October",
            "November",
            "December",
          ];
        t.calHelper = function (e) {
          var t = "";
          t += "current Date is ".concat(new Date().toString(), "\n");
          var o = e[0] ? parseInt(e[0]) : new Date().getFullYear(),
            i = e[1] ? parseInt(e[1]) - 1 : new Date().getMonth(),
            a = new Date(o, i, 1),
            s = a.getMonth(),
            u = a.getFullYear();
          t += "    ".concat(r[s], " ").concat(u, "\n");
          for (var l = 0; l < 7; l++) t += "".concat(n[l], " ");
          t += "\n";
          var c = new Date(u, s, 1).getDay();
          for (l = 0; l < c; l++) t += "   ";
          for (l = 1; l <= 31; l++) {
            var f = new Date(u, s, l);
            if (f.getMonth() !== s) break;
            l < 10 && (t += " "),
              (t += "".concat(l, " ")),
              6 === f.getDay() && (t += "\n");
          }
          return t + "\n";
        };
      },
      814: (e, t) => {
        var n, r, o;
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = (function () {
            function e(e, t) {
              (this.name = e),
                (this.folders = []),
                (this.files = []),
                (this.parent = null),
                (this.name = e),
                (this.parent = t || null);
            }
            return (
              (e.prototype.addFolder = function (t) {
                var n = new e(t, this);
                this.folders.push(n);
              }),
              (e.prototype.getFolders = function () {
                return this.folders
                  .map(function (e) {
                    return e.name;
                  })
                  .join("  ");
              }),
              (e.prototype.getParent = function () {
                return this.parent;
              }),
              (e.prototype.getFolder = function (e) {
                return (
                  this.folders.find(function (t) {
                    return t.name === e;
                  }) || null
                );
              }),
              (e.prototype.addFile = function (e) {
                var t = new a(e, "");
                return this.files.push(t), t;
              }),
              (e.prototype.getFiles = function () {
                return this.files
                  .map(function (e) {
                    return "*".concat(e.name);
                  })
                  .join("  ");
              }),
              (e.prototype.getFile = function (e) {
                return (
                  this.files.find(function (t) {
                    return t.name === e;
                  }) || null
                );
              }),
              e
            );
          })(),
          a = (function () {
            function e(e, t) {
              (this.name = e),
                (this.content = t),
                (this.name = e),
                (this.content = t);
            }
            return (
              (e.prototype.getContent = function () {
                return this.content;
              }),
              (e.prototype.setContent = function (e) {
                this.content = e;
              }),
              (e.prototype.getName = function () {
                return this.name;
              }),
              (e.prototype.setName = function (e) {
                this.name = e;
              }),
              e
            );
          })(),
          s = new i("");
        s.addFolder("bin"),
          s.addFolder("dev"),
          s.addFolder("home"),
          s.addFolder("lib"),
          s.addFolder("lib64"),
          s.addFolder("lost+found"),
          s.addFolder("mnt"),
          s.addFolder("sbin"),
          s.addFolder("proc"),
          s.addFolder("run"),
          s.addFolder("snap"),
          s.addFolder("boot"),
          s.addFolder("sys"),
          s.addFolder("usr"),
          s.addFolder("boot"),
          s.addFolder("etc"),
          s.addFolder("init"),
          s.addFolder("lib32"),
          s.addFolder("libx32"),
          s.addFolder("media"),
          s.addFolder("opt"),
          s.addFolder("root"),
          s.addFolder("sbin"),
          s.addFolder("srv"),
          s.addFolder("tmp"),
          s.addFolder("var"),
          null === (n = s.getFolder("home")) ||
            void 0 === n ||
            n.addFolder("swalha"),
          null === (r = s.getFolder("home")) ||
            void 0 === r ||
            r.addFolder("user"),
          null === (o = s.getFolder("home")) ||
            void 0 === o ||
            o.addFolder("guest"),
          (t.default = s);
      },
      240: function (e, t) {
        var n =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (o, i) {
                function a(e) {
                  try {
                    u(r.next(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function s(e) {
                  try {
                    u(r.throw(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function u(e) {
                  var t;
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(a, s);
                }
                u((r = r.apply(e, t || [])).next());
              });
            },
          r =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                r,
                o,
                i,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (i = { next: s(0), throw: s(1), return: s(2) }),
                "function" == typeof Symbol &&
                  (i[Symbol.iterator] = function () {
                    return this;
                  }),
                i
              );
              function s(s) {
                return function (u) {
                  return (function (s) {
                    if (n)
                      throw new TypeError("Generator is already executing.");
                    for (; i && ((i = 0), s[0] && (a = 0)), a; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & s[0]
                                ? r.return
                                : s[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, s[1])).done)
                        )
                          return o;
                        switch (
                          ((r = 0), o && (s = [2 & s[0], o.value]), s[0])
                        ) {
                          case 0:
                          case 1:
                            o = s;
                            break;
                          case 4:
                            return a.label++, { value: s[1], done: !1 };
                          case 5:
                            a.label++, (r = s[1]), (s = [0]);
                            continue;
                          case 7:
                            (s = a.ops.pop()), a.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (o =
                                  (o = a.trys).length > 0 && o[o.length - 1]) ||
                                (6 !== s[0] && 2 !== s[0])
                              )
                            ) {
                              a = 0;
                              continue;
                            }
                            if (
                              3 === s[0] &&
                              (!o || (s[1] > o[0] && s[1] < o[3]))
                            ) {
                              a.label = s[1];
                              break;
                            }
                            if (6 === s[0] && a.label < o[1]) {
                              (a.label = o[1]), (o = s);
                              break;
                            }
                            if (o && a.label < o[2]) {
                              (a.label = o[2]), a.ops.push(s);
                              break;
                            }
                            o[2] && a.ops.pop(), a.trys.pop();
                            continue;
                        }
                        s = t.call(e, a);
                      } catch (e) {
                        (s = [6, e]), (r = 0);
                      } finally {
                        n = o = 0;
                      }
                    if (5 & s[0]) throw s[1];
                    return { value: s[0] ? s[1] : void 0, done: !0 };
                  })([s, u]);
                };
              }
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.createCode =
            t.clearScreen =
            t.scanf =
            t.newLine =
            t.printnln =
            t.printSingleLine =
            t.println =
            t.delay =
            t.setIp =
            t.getIp =
              void 0);
        var o = document.querySelector("#app"),
          i = "",
          a = !1,
          s = "";
        function u(e) {
          return new Promise(function (t) {
            return setTimeout(t, e);
          });
        }
        function l(e, t) {
          void 0 === t && (t = void 0);
          var n = document.createElement("p");
          t && (n.className = t), (n.innerHTML = e), o.appendChild(n);
        }
        function c(e) {
          "Enter" === e.key &&
            ((i = document.querySelector("input").value), (a = !0));
        }
        (t.getIp = function () {
          return s;
        }),
          (t.setIp = function (e) {
            s = e;
          }),
          (t.delay = u),
          (t.println = function (e, t) {
            void 0 === t && (t = void 0),
              e.split("\n").forEach(function (e) {
                l(e, t);
              });
          }),
          (t.printSingleLine = l),
          (t.printnln = function (e, t) {
            void 0 === t && (t = void 0);
            var n = document.createElement("span");
            t && (n.className = t), (n.innerHTML = e), o.appendChild(n);
          }),
          (t.newLine = function () {
            var e = document.createElement("span");
            (e.innerHTML = "<br/>"), o.appendChild(e);
          }),
          (t.scanf = function () {
            return new Promise(function (e) {
              !(function () {
                var e = document.createElement("div");
                e.setAttribute("class", "inlineInput");
                var t = document.createElement("input");
                for (
                  t.type = "text", t.autofocus = !0, e.appendChild(t);
                  null !== o.lastChild && "SPAN" === o.lastChild.nodeName;

                ) {
                  var n = o.lastChild;
                  o.removeChild(n), e.insertBefore(n, e.firstChild);
                }
                o.appendChild(e), t.focus();
              })(),
                document.addEventListener("keypress", c),
                (function t() {
                  var n, r;
                  a
                    ? (document.removeEventListener("keypress", c),
                      (function (e) {
                        var t, n;
                        if ("" !== e) {
                          var r = document.createElement("h2");
                          (r.textContent = "".concat(e)),
                            "DIV" !==
                            (null === (t = o.lastChild) || void 0 === t
                              ? void 0
                              : t.nodeName)
                              ? o.appendChild(r)
                              : null === (n = o.lastChild) ||
                                void 0 === n ||
                                n.appendChild(r);
                        }
                      })(i),
                      null ===
                        (n =
                          null == (r = document.querySelector("input"))
                            ? void 0
                            : r.parentElement) ||
                        void 0 === n ||
                        n.removeChild(r),
                      (a = !1),
                      e(i))
                    : requestAnimationFrame(t);
                })();
            });
          }),
          (t.clearScreen = function () {
            return n(this, void 0, void 0, function () {
              return r(this, function (e) {
                switch (e.label) {
                  case 0:
                    return o.hasChildNodes()
                      ? (o.removeChild(o.firstChild), [4, u(5)])
                      : [3, 2];
                  case 1:
                    return e.sent(), [3, 0];
                  case 2:
                    return [2];
                }
              });
            });
          }),
          (t.createCode = function (e, t) {
            var n = document.createElement("p");
            n.setAttribute("class", "code"),
              (n.innerHTML = ""
                .concat(e, " <br/><span class='text'> ")
                .concat(t, " </span>")),
              o.appendChild(n);
          });
      },
      56: (e, t, n) => {
        function r(e, t) {
          return function () {
            return e.apply(t, arguments);
          };
        }
        const { toString: o } = Object.prototype,
          { getPrototypeOf: i } = Object,
          a =
            ((s = Object.create(null)),
            (e) => {
              const t = o.call(e);
              return s[t] || (s[t] = t.slice(8, -1).toLowerCase());
            });
        var s;
        const u = (e) => ((e = e.toLowerCase()), (t) => a(t) === e),
          l = (e) => (t) => typeof t === e,
          { isArray: c } = Array,
          f = l("undefined"),
          d = u("ArrayBuffer"),
          h = l("string"),
          p = l("function"),
          m = l("number"),
          y = (e) => null !== e && "object" == typeof e,
          g = (e) => {
            if ("object" !== a(e)) return !1;
            const t = i(e);
            return !(
              (null !== t &&
                t !== Object.prototype &&
                null !== Object.getPrototypeOf(t)) ||
              Symbol.toStringTag in e ||
              Symbol.iterator in e
            );
          },
          v = u("Date"),
          b = u("File"),
          w = u("Blob"),
          R = u("FileList"),
          O = u("URLSearchParams");
        function S(e, t, { allOwnKeys: n = !1 } = {}) {
          if (null == e) return;
          let r, o;
          if (("object" != typeof e && (e = [e]), c(e)))
            for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
          else {
            const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
              i = o.length;
            let a;
            for (r = 0; r < i; r++) (a = o[r]), t.call(null, e[a], a, e);
          }
        }
        function E(e, t) {
          t = t.toLowerCase();
          const n = Object.keys(e);
          let r,
            o = n.length;
          for (; o-- > 0; ) if (((r = n[o]), t === r.toLowerCase())) return r;
          return null;
        }
        const x =
            "undefined" != typeof globalThis
              ? globalThis
              : "undefined" != typeof self
              ? self
              : "undefined" != typeof window
              ? window
              : n.g,
          _ = (e) => !f(e) && e !== x,
          k =
            ((T = "undefined" != typeof Uint8Array && i(Uint8Array)),
            (e) => T && e instanceof T);
        var T;
        const C = u("HTMLFormElement"),
          j = (
            ({ hasOwnProperty: e }) =>
            (t, n) =>
              e.call(t, n)
          )(Object.prototype),
          P = u("RegExp"),
          L = (e, t) => {
            const n = Object.getOwnPropertyDescriptors(e),
              r = {};
            S(n, (n, o) => {
              let i;
              !1 !== (i = t(n, o, e)) && (r[o] = i || n);
            }),
              Object.defineProperties(e, r);
          },
          F = "abcdefghijklmnopqrstuvwxyz",
          A = "0123456789",
          B = { DIGIT: A, ALPHA: F, ALPHA_DIGIT: F + F.toUpperCase() + A },
          N = u("AsyncFunction");
        var M = {
          isArray: c,
          isArrayBuffer: d,
          isBuffer: function (e) {
            return (
              null !== e &&
              !f(e) &&
              null !== e.constructor &&
              !f(e.constructor) &&
              p(e.constructor.isBuffer) &&
              e.constructor.isBuffer(e)
            );
          },
          isFormData: (e) => {
            let t;
            return (
              e &&
              (("function" == typeof FormData && e instanceof FormData) ||
                (p(e.append) &&
                  ("formdata" === (t = a(e)) ||
                    ("object" === t &&
                      p(e.toString) &&
                      "[object FormData]" === e.toString()))))
            );
          },
          isArrayBufferView: function (e) {
            let t;
            return (
              (t =
                "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
                  ? ArrayBuffer.isView(e)
                  : e && e.buffer && d(e.buffer)),
              t
            );
          },
          isString: h,
          isNumber: m,
          isBoolean: (e) => !0 === e || !1 === e,
          isObject: y,
          isPlainObject: g,
          isUndefined: f,
          isDate: v,
          isFile: b,
          isBlob: w,
          isRegExp: P,
          isFunction: p,
          isStream: (e) => y(e) && p(e.pipe),
          isURLSearchParams: O,
          isTypedArray: k,
          isFileList: R,
          forEach: S,
          merge: function e() {
            const { caseless: t } = (_(this) && this) || {},
              n = {},
              r = (r, o) => {
                const i = (t && E(n, o)) || o;
                g(n[i]) && g(r)
                  ? (n[i] = e(n[i], r))
                  : g(r)
                  ? (n[i] = e({}, r))
                  : c(r)
                  ? (n[i] = r.slice())
                  : (n[i] = r);
              };
            for (let e = 0, t = arguments.length; e < t; e++)
              arguments[e] && S(arguments[e], r);
            return n;
          },
          extend: (e, t, n, { allOwnKeys: o } = {}) => (
            S(
              t,
              (t, o) => {
                n && p(t) ? (e[o] = r(t, n)) : (e[o] = t);
              },
              { allOwnKeys: o }
            ),
            e
          ),
          trim: (e) =>
            e.trim
              ? e.trim()
              : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
          stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
          inherits: (e, t, n, r) => {
            (e.prototype = Object.create(t.prototype, r)),
              (e.prototype.constructor = e),
              Object.defineProperty(e, "super", { value: t.prototype }),
              n && Object.assign(e.prototype, n);
          },
          toFlatObject: (e, t, n, r) => {
            let o, a, s;
            const u = {};
            if (((t = t || {}), null == e)) return t;
            do {
              for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0; )
                (s = o[a]),
                  (r && !r(s, e, t)) || u[s] || ((t[s] = e[s]), (u[s] = !0));
              e = !1 !== n && i(e);
            } while (e && (!n || n(e, t)) && e !== Object.prototype);
            return t;
          },
          kindOf: a,
          kindOfTest: u,
          endsWith: (e, t, n) => {
            (e = String(e)),
              (void 0 === n || n > e.length) && (n = e.length),
              (n -= t.length);
            const r = e.indexOf(t, n);
            return -1 !== r && r === n;
          },
          toArray: (e) => {
            if (!e) return null;
            if (c(e)) return e;
            let t = e.length;
            if (!m(t)) return null;
            const n = new Array(t);
            for (; t-- > 0; ) n[t] = e[t];
            return n;
          },
          forEachEntry: (e, t) => {
            const n = (e && e[Symbol.iterator]).call(e);
            let r;
            for (; (r = n.next()) && !r.done; ) {
              const n = r.value;
              t.call(e, n[0], n[1]);
            }
          },
          matchAll: (e, t) => {
            let n;
            const r = [];
            for (; null !== (n = e.exec(t)); ) r.push(n);
            return r;
          },
          isHTMLForm: C,
          hasOwnProperty: j,
          hasOwnProp: j,
          reduceDescriptors: L,
          freezeMethods: (e) => {
            L(e, (t, n) => {
              if (p(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n))
                return !1;
              const r = e[n];
              p(r) &&
                ((t.enumerable = !1),
                "writable" in t
                  ? (t.writable = !1)
                  : t.set ||
                    (t.set = () => {
                      throw Error(
                        "Can not rewrite read-only method '" + n + "'"
                      );
                    }));
            });
          },
          toObjectSet: (e, t) => {
            const n = {},
              r = (e) => {
                e.forEach((e) => {
                  n[e] = !0;
                });
              };
            return c(e) ? r(e) : r(String(e).split(t)), n;
          },
          toCamelCase: (e) =>
            e
              .toLowerCase()
              .replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
                return t.toUpperCase() + n;
              }),
          noop: () => {},
          toFiniteNumber: (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
          findKey: E,
          global: x,
          isContextDefined: _,
          ALPHABET: B,
          generateString: (e = 16, t = B.ALPHA_DIGIT) => {
            let n = "";
            const { length: r } = t;
            for (; e--; ) n += t[(Math.random() * r) | 0];
            return n;
          },
          isSpecCompliantForm: function (e) {
            return !!(
              e &&
              p(e.append) &&
              "FormData" === e[Symbol.toStringTag] &&
              e[Symbol.iterator]
            );
          },
          toJSONObject: (e) => {
            const t = new Array(10),
              n = (e, r) => {
                if (y(e)) {
                  if (t.indexOf(e) >= 0) return;
                  if (!("toJSON" in e)) {
                    t[r] = e;
                    const o = c(e) ? [] : {};
                    return (
                      S(e, (e, t) => {
                        const i = n(e, r + 1);
                        !f(i) && (o[t] = i);
                      }),
                      (t[r] = void 0),
                      o
                    );
                  }
                }
                return e;
              };
            return n(e, 0);
          },
          isAsyncFn: N,
          isThenable: (e) => e && (y(e) || p(e)) && p(e.then) && p(e.catch),
        };
        function D(e, t, n, r, o) {
          Error.call(this),
            Error.captureStackTrace
              ? Error.captureStackTrace(this, this.constructor)
              : (this.stack = new Error().stack),
            (this.message = e),
            (this.name = "AxiosError"),
            t && (this.code = t),
            n && (this.config = n),
            r && (this.request = r),
            o && (this.response = o);
        }
        M.inherits(D, Error, {
          toJSON: function () {
            return {
              message: this.message,
              name: this.name,
              description: this.description,
              number: this.number,
              fileName: this.fileName,
              lineNumber: this.lineNumber,
              columnNumber: this.columnNumber,
              stack: this.stack,
              config: M.toJSONObject(this.config),
              code: this.code,
              status:
                this.response && this.response.status
                  ? this.response.status
                  : null,
            };
          },
        });
        const I = D.prototype,
          U = {};
        function q(e) {
          return M.isPlainObject(e) || M.isArray(e);
        }
        function H(e) {
          return M.endsWith(e, "[]") ? e.slice(0, -2) : e;
        }
        function z(e, t, n) {
          return e
            ? e
                .concat(t)
                .map(function (e, t) {
                  return (e = H(e)), !n && t ? "[" + e + "]" : e;
                })
                .join(n ? "." : "")
            : t;
        }
        [
          "ERR_BAD_OPTION_VALUE",
          "ERR_BAD_OPTION",
          "ECONNABORTED",
          "ETIMEDOUT",
          "ERR_NETWORK",
          "ERR_FR_TOO_MANY_REDIRECTS",
          "ERR_DEPRECATED",
          "ERR_BAD_RESPONSE",
          "ERR_BAD_REQUEST",
          "ERR_CANCELED",
          "ERR_NOT_SUPPORT",
          "ERR_INVALID_URL",
        ].forEach((e) => {
          U[e] = { value: e };
        }),
          Object.defineProperties(D, U),
          Object.defineProperty(I, "isAxiosError", { value: !0 }),
          (D.from = (e, t, n, r, o, i) => {
            const a = Object.create(I);
            return (
              M.toFlatObject(
                e,
                a,
                function (e) {
                  return e !== Error.prototype;
                },
                (e) => "isAxiosError" !== e
              ),
              D.call(a, e.message, t, n, r, o),
              (a.cause = e),
              (a.name = e.name),
              i && Object.assign(a, i),
              a
            );
          });
        const G = M.toFlatObject(M, {}, null, function (e) {
          return /^is[A-Z]/.test(e);
        });
        function J(e, t, n) {
          if (!M.isObject(e)) throw new TypeError("target must be an object");
          t = t || new FormData();
          const r = (n = M.toFlatObject(
              n,
              { metaTokens: !0, dots: !1, indexes: !1 },
              !1,
              function (e, t) {
                return !M.isUndefined(t[e]);
              }
            )).metaTokens,
            o = n.visitor || l,
            i = n.dots,
            a = n.indexes,
            s =
              (n.Blob || ("undefined" != typeof Blob && Blob)) &&
              M.isSpecCompliantForm(t);
          if (!M.isFunction(o))
            throw new TypeError("visitor must be a function");
          function u(e) {
            if (null === e) return "";
            if (M.isDate(e)) return e.toISOString();
            if (!s && M.isBlob(e))
              throw new D("Blob is not supported. Use a Buffer instead.");
            return M.isArrayBuffer(e) || M.isTypedArray(e)
              ? s && "function" == typeof Blob
                ? new Blob([e])
                : Buffer.from(e)
              : e;
          }
          function l(e, n, o) {
            let s = e;
            if (e && !o && "object" == typeof e)
              if (M.endsWith(n, "{}"))
                (n = r ? n : n.slice(0, -2)), (e = JSON.stringify(e));
              else if (
                (M.isArray(e) &&
                  (function (e) {
                    return M.isArray(e) && !e.some(q);
                  })(e)) ||
                ((M.isFileList(e) || M.endsWith(n, "[]")) && (s = M.toArray(e)))
              )
                return (
                  (n = H(n)),
                  s.forEach(function (e, r) {
                    !M.isUndefined(e) &&
                      null !== e &&
                      t.append(
                        !0 === a ? z([n], r, i) : null === a ? n : n + "[]",
                        u(e)
                      );
                  }),
                  !1
                );
            return !!q(e) || (t.append(z(o, n, i), u(e)), !1);
          }
          const c = [],
            f = Object.assign(G, {
              defaultVisitor: l,
              convertValue: u,
              isVisitable: q,
            });
          if (!M.isObject(e)) throw new TypeError("data must be an object");
          return (
            (function e(n, r) {
              if (!M.isUndefined(n)) {
                if (-1 !== c.indexOf(n))
                  throw Error("Circular reference detected in " + r.join("."));
                c.push(n),
                  M.forEach(n, function (n, i) {
                    !0 ===
                      (!(M.isUndefined(n) || null === n) &&
                        o.call(t, n, M.isString(i) ? i.trim() : i, r, f)) &&
                      e(n, r ? r.concat(i) : [i]);
                  }),
                  c.pop();
              }
            })(e),
            t
          );
        }
        function W(e) {
          const t = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+",
            "%00": "\0",
          };
          return encodeURIComponent(e).replace(
            /[!'()~]|%20|%00/g,
            function (e) {
              return t[e];
            }
          );
        }
        function K(e, t) {
          (this._pairs = []), e && J(e, this, t);
        }
        const V = K.prototype;
        function X(e) {
          return encodeURIComponent(e)
            .replace(/%3A/gi, ":")
            .replace(/%24/g, "$")
            .replace(/%2C/gi, ",")
            .replace(/%20/g, "+")
            .replace(/%5B/gi, "[")
            .replace(/%5D/gi, "]");
        }
        function $(e, t, n) {
          if (!t) return e;
          const r = (n && n.encode) || X,
            o = n && n.serialize;
          let i;
          if (
            ((i = o
              ? o(t, n)
              : M.isURLSearchParams(t)
              ? t.toString()
              : new K(t, n).toString(r)),
            i)
          ) {
            const t = e.indexOf("#");
            -1 !== t && (e = e.slice(0, t)),
              (e += (-1 === e.indexOf("?") ? "?" : "&") + i);
          }
          return e;
        }
        (V.append = function (e, t) {
          this._pairs.push([e, t]);
        }),
          (V.toString = function (e) {
            const t = e
              ? function (t) {
                  return e.call(this, t, W);
                }
              : W;
            return this._pairs
              .map(function (e) {
                return t(e[0]) + "=" + t(e[1]);
              }, "")
              .join("&");
          });
        var Q = class {
            constructor() {
              this.handlers = [];
            }
            use(e, t, n) {
              return (
                this.handlers.push({
                  fulfilled: e,
                  rejected: t,
                  synchronous: !!n && n.synchronous,
                  runWhen: n ? n.runWhen : null,
                }),
                this.handlers.length - 1
              );
            }
            eject(e) {
              this.handlers[e] && (this.handlers[e] = null);
            }
            clear() {
              this.handlers && (this.handlers = []);
            }
            forEach(e) {
              M.forEach(this.handlers, function (t) {
                null !== t && e(t);
              });
            }
          },
          Y = {
            silentJSONParsing: !0,
            forcedJSONParsing: !0,
            clarifyTimeoutError: !1,
          },
          Z = {
            isBrowser: !0,
            classes: {
              URLSearchParams:
                "undefined" != typeof URLSearchParams ? URLSearchParams : K,
              FormData: "undefined" != typeof FormData ? FormData : null,
              Blob: "undefined" != typeof Blob ? Blob : null,
            },
            isStandardBrowserEnv: (() => {
              let e;
              return (
                ("undefined" == typeof navigator ||
                  ("ReactNative" !== (e = navigator.product) &&
                    "NativeScript" !== e &&
                    "NS" !== e)) &&
                "undefined" != typeof window &&
                "undefined" != typeof document
              );
            })(),
            isStandardBrowserWebWorkerEnv:
              "undefined" != typeof WorkerGlobalScope &&
              self instanceof WorkerGlobalScope &&
              "function" == typeof self.importScripts,
            protocols: ["http", "https", "file", "blob", "url", "data"],
          };
        function ee(e) {
          function t(e, n, r, o) {
            let i = e[o++];
            const a = Number.isFinite(+i),
              s = o >= e.length;
            return (
              (i = !i && M.isArray(r) ? r.length : i),
              s
                ? (M.hasOwnProp(r, i) ? (r[i] = [r[i], n]) : (r[i] = n), !a)
                : ((r[i] && M.isObject(r[i])) || (r[i] = []),
                  t(e, n, r[i], o) &&
                    M.isArray(r[i]) &&
                    (r[i] = (function (e) {
                      const t = {},
                        n = Object.keys(e);
                      let r;
                      const o = n.length;
                      let i;
                      for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i]);
                      return t;
                    })(r[i])),
                  !a)
            );
          }
          if (M.isFormData(e) && M.isFunction(e.entries)) {
            const n = {};
            return (
              M.forEachEntry(e, (e, r) => {
                t(
                  (function (e) {
                    return M.matchAll(/\w+|\[(\w*)]/g, e).map((e) =>
                      "[]" === e[0] ? "" : e[1] || e[0]
                    );
                  })(e),
                  r,
                  n,
                  0
                );
              }),
              n
            );
          }
          return null;
        }
        const te = {
          transitional: Y,
          adapter: ["xhr", "http"],
          transformRequest: [
            function (e, t) {
              const n = t.getContentType() || "",
                r = n.indexOf("application/json") > -1,
                o = M.isObject(e);
              if (
                (o && M.isHTMLForm(e) && (e = new FormData(e)), M.isFormData(e))
              )
                return r && r ? JSON.stringify(ee(e)) : e;
              if (
                M.isArrayBuffer(e) ||
                M.isBuffer(e) ||
                M.isStream(e) ||
                M.isFile(e) ||
                M.isBlob(e)
              )
                return e;
              if (M.isArrayBufferView(e)) return e.buffer;
              if (M.isURLSearchParams(e))
                return (
                  t.setContentType(
                    "application/x-www-form-urlencoded;charset=utf-8",
                    !1
                  ),
                  e.toString()
                );
              let i;
              if (o) {
                if (n.indexOf("application/x-www-form-urlencoded") > -1)
                  return (function (e, t) {
                    return J(
                      e,
                      new Z.classes.URLSearchParams(),
                      Object.assign(
                        {
                          visitor: function (e, t, n, r) {
                            return Z.isNode && M.isBuffer(e)
                              ? (this.append(t, e.toString("base64")), !1)
                              : r.defaultVisitor.apply(this, arguments);
                          },
                        },
                        t
                      )
                    );
                  })(e, this.formSerializer).toString();
                if (
                  (i = M.isFileList(e)) ||
                  n.indexOf("multipart/form-data") > -1
                ) {
                  const t = this.env && this.env.FormData;
                  return J(
                    i ? { "files[]": e } : e,
                    t && new t(),
                    this.formSerializer
                  );
                }
              }
              return o || r
                ? (t.setContentType("application/json", !1),
                  (function (e, t, n) {
                    if (M.isString(e))
                      try {
                        return (0, JSON.parse)(e), M.trim(e);
                      } catch (e) {
                        if ("SyntaxError" !== e.name) throw e;
                      }
                    return (0, JSON.stringify)(e);
                  })(e))
                : e;
            },
          ],
          transformResponse: [
            function (e) {
              const t = this.transitional || te.transitional,
                n = t && t.forcedJSONParsing,
                r = "json" === this.responseType;
              if (e && M.isString(e) && ((n && !this.responseType) || r)) {
                const n = !(t && t.silentJSONParsing) && r;
                try {
                  return JSON.parse(e);
                } catch (e) {
                  if (n) {
                    if ("SyntaxError" === e.name)
                      throw D.from(
                        e,
                        D.ERR_BAD_RESPONSE,
                        this,
                        null,
                        this.response
                      );
                    throw e;
                  }
                }
              }
              return e;
            },
          ],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          maxBodyLength: -1,
          env: { FormData: Z.classes.FormData, Blob: Z.classes.Blob },
          validateStatus: function (e) {
            return e >= 200 && e < 300;
          },
          headers: {
            common: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": void 0,
            },
          },
        };
        M.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
          te.headers[e] = {};
        });
        var ne = te;
        const re = M.toObjectSet([
            "age",
            "authorization",
            "content-length",
            "content-type",
            "etag",
            "expires",
            "from",
            "host",
            "if-modified-since",
            "if-unmodified-since",
            "last-modified",
            "location",
            "max-forwards",
            "proxy-authorization",
            "referer",
            "retry-after",
            "user-agent",
          ]),
          oe = Symbol("internals");
        function ie(e) {
          return e && String(e).trim().toLowerCase();
        }
        function ae(e) {
          return !1 === e || null == e
            ? e
            : M.isArray(e)
            ? e.map(ae)
            : String(e);
        }
        function se(e, t, n, r, o) {
          return M.isFunction(r)
            ? r.call(this, t, n)
            : (o && (t = n),
              M.isString(t)
                ? M.isString(r)
                  ? -1 !== t.indexOf(r)
                  : M.isRegExp(r)
                  ? r.test(t)
                  : void 0
                : void 0);
        }
        class ue {
          constructor(e) {
            e && this.set(e);
          }
          set(e, t, n) {
            const r = this;
            function o(e, t, n) {
              const o = ie(t);
              if (!o) throw new Error("header name must be a non-empty string");
              const i = M.findKey(r, o);
              (!i ||
                void 0 === r[i] ||
                !0 === n ||
                (void 0 === n && !1 !== r[i])) &&
                (r[i || t] = ae(e));
            }
            const i = (e, t) => M.forEach(e, (e, n) => o(e, n, t));
            return (
              M.isPlainObject(e) || e instanceof this.constructor
                ? i(e, t)
                : M.isString(e) &&
                  (e = e.trim()) &&
                  !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
                ? i(
                    ((e) => {
                      const t = {};
                      let n, r, o;
                      return (
                        e &&
                          e.split("\n").forEach(function (e) {
                            (o = e.indexOf(":")),
                              (n = e.substring(0, o).trim().toLowerCase()),
                              (r = e.substring(o + 1).trim()),
                              !n ||
                                (t[n] && re[n]) ||
                                ("set-cookie" === n
                                  ? t[n]
                                    ? t[n].push(r)
                                    : (t[n] = [r])
                                  : (t[n] = t[n] ? t[n] + ", " + r : r));
                          }),
                        t
                      );
                    })(e),
                    t
                  )
                : null != e && o(t, e, n),
              this
            );
          }
          get(e, t) {
            if ((e = ie(e))) {
              const n = M.findKey(this, e);
              if (n) {
                const e = this[n];
                if (!t) return e;
                if (!0 === t)
                  return (function (e) {
                    const t = Object.create(null),
                      n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                    let r;
                    for (; (r = n.exec(e)); ) t[r[1]] = r[2];
                    return t;
                  })(e);
                if (M.isFunction(t)) return t.call(this, e, n);
                if (M.isRegExp(t)) return t.exec(e);
                throw new TypeError("parser must be boolean|regexp|function");
              }
            }
          }
          has(e, t) {
            if ((e = ie(e))) {
              const n = M.findKey(this, e);
              return !(
                !n ||
                void 0 === this[n] ||
                (t && !se(0, this[n], n, t))
              );
            }
            return !1;
          }
          delete(e, t) {
            const n = this;
            let r = !1;
            function o(e) {
              if ((e = ie(e))) {
                const o = M.findKey(n, e);
                !o || (t && !se(0, n[o], o, t)) || (delete n[o], (r = !0));
              }
            }
            return M.isArray(e) ? e.forEach(o) : o(e), r;
          }
          clear(e) {
            const t = Object.keys(this);
            let n = t.length,
              r = !1;
            for (; n--; ) {
              const o = t[n];
              (e && !se(0, this[o], o, e, !0)) || (delete this[o], (r = !0));
            }
            return r;
          }
          normalize(e) {
            const t = this,
              n = {};
            return (
              M.forEach(this, (r, o) => {
                const i = M.findKey(n, o);
                if (i) return (t[i] = ae(r)), void delete t[o];
                const a = e
                  ? (function (e) {
                      return e
                        .trim()
                        .toLowerCase()
                        .replace(
                          /([a-z\d])(\w*)/g,
                          (e, t, n) => t.toUpperCase() + n
                        );
                    })(o)
                  : String(o).trim();
                a !== o && delete t[o], (t[a] = ae(r)), (n[a] = !0);
              }),
              this
            );
          }
          concat(...e) {
            return this.constructor.concat(this, ...e);
          }
          toJSON(e) {
            const t = Object.create(null);
            return (
              M.forEach(this, (n, r) => {
                null != n &&
                  !1 !== n &&
                  (t[r] = e && M.isArray(n) ? n.join(", ") : n);
              }),
              t
            );
          }
          [Symbol.iterator]() {
            return Object.entries(this.toJSON())[Symbol.iterator]();
          }
          toString() {
            return Object.entries(this.toJSON())
              .map(([e, t]) => e + ": " + t)
              .join("\n");
          }
          get [Symbol.toStringTag]() {
            return "AxiosHeaders";
          }
          static from(e) {
            return e instanceof this ? e : new this(e);
          }
          static concat(e, ...t) {
            const n = new this(e);
            return t.forEach((e) => n.set(e)), n;
          }
          static accessor(e) {
            const t = (this[oe] = this[oe] = { accessors: {} }).accessors,
              n = this.prototype;
            function r(e) {
              const r = ie(e);
              t[r] ||
                ((function (e, t) {
                  const n = M.toCamelCase(" " + t);
                  ["get", "set", "has"].forEach((r) => {
                    Object.defineProperty(e, r + n, {
                      value: function (e, n, o) {
                        return this[r].call(this, t, e, n, o);
                      },
                      configurable: !0,
                    });
                  });
                })(n, e),
                (t[r] = !0));
            }
            return M.isArray(e) ? e.forEach(r) : r(e), this;
          }
        }
        ue.accessor([
          "Content-Type",
          "Content-Length",
          "Accept",
          "Accept-Encoding",
          "User-Agent",
          "Authorization",
        ]),
          M.reduceDescriptors(ue.prototype, ({ value: e }, t) => {
            let n = t[0].toUpperCase() + t.slice(1);
            return {
              get: () => e,
              set(e) {
                this[n] = e;
              },
            };
          }),
          M.freezeMethods(ue);
        var le = ue;
        function ce(e, t) {
          const n = this || ne,
            r = t || n,
            o = le.from(r.headers);
          let i = r.data;
          return (
            M.forEach(e, function (e) {
              i = e.call(n, i, o.normalize(), t ? t.status : void 0);
            }),
            o.normalize(),
            i
          );
        }
        function fe(e) {
          return !(!e || !e.__CANCEL__);
        }
        function de(e, t, n) {
          D.call(this, null == e ? "canceled" : e, D.ERR_CANCELED, t, n),
            (this.name = "CanceledError");
        }
        M.inherits(de, D, { __CANCEL__: !0 });
        var he = Z.isStandardBrowserEnv
          ? {
              write: function (e, t, n, r, o, i) {
                const a = [];
                a.push(e + "=" + encodeURIComponent(t)),
                  M.isNumber(n) &&
                    a.push("expires=" + new Date(n).toGMTString()),
                  M.isString(r) && a.push("path=" + r),
                  M.isString(o) && a.push("domain=" + o),
                  !0 === i && a.push("secure"),
                  (document.cookie = a.join("; "));
              },
              read: function (e) {
                const t = document.cookie.match(
                  new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
                );
                return t ? decodeURIComponent(t[3]) : null;
              },
              remove: function (e) {
                this.write(e, "", Date.now() - 864e5);
              },
            }
          : {
              write: function () {},
              read: function () {
                return null;
              },
              remove: function () {},
            };
        function pe(e, t) {
          return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
            ? (function (e, t) {
                return t
                  ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "")
                  : e;
              })(e, t)
            : t;
        }
        var me = Z.isStandardBrowserEnv
          ? (function () {
              const e = /(msie|trident)/i.test(navigator.userAgent),
                t = document.createElement("a");
              let n;
              function r(n) {
                let r = n;
                return (
                  e && (t.setAttribute("href", r), (r = t.href)),
                  t.setAttribute("href", r),
                  {
                    href: t.href,
                    protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
                    host: t.host,
                    search: t.search ? t.search.replace(/^\?/, "") : "",
                    hash: t.hash ? t.hash.replace(/^#/, "") : "",
                    hostname: t.hostname,
                    port: t.port,
                    pathname:
                      "/" === t.pathname.charAt(0)
                        ? t.pathname
                        : "/" + t.pathname,
                  }
                );
              }
              return (
                (n = r(window.location.href)),
                function (e) {
                  const t = M.isString(e) ? r(e) : e;
                  return t.protocol === n.protocol && t.host === n.host;
                }
              );
            })()
          : function () {
              return !0;
            };
        function ye(e, t) {
          let n = 0;
          const r = (function (e, t) {
            e = e || 10;
            const n = new Array(e),
              r = new Array(e);
            let o,
              i = 0,
              a = 0;
            return (
              (t = void 0 !== t ? t : 1e3),
              function (s) {
                const u = Date.now(),
                  l = r[a];
                o || (o = u), (n[i] = s), (r[i] = u);
                let c = a,
                  f = 0;
                for (; c !== i; ) (f += n[c++]), (c %= e);
                if (
                  ((i = (i + 1) % e), i === a && (a = (a + 1) % e), u - o < t)
                )
                  return;
                const d = l && u - l;
                return d ? Math.round((1e3 * f) / d) : void 0;
              }
            );
          })(50, 250);
          return (o) => {
            const i = o.loaded,
              a = o.lengthComputable ? o.total : void 0,
              s = i - n,
              u = r(s);
            n = i;
            const l = {
              loaded: i,
              total: a,
              progress: a ? i / a : void 0,
              bytes: s,
              rate: u || void 0,
              estimated: u && a && i <= a ? (a - i) / u : void 0,
              event: o,
            };
            (l[t ? "download" : "upload"] = !0), e(l);
          };
        }
        const ge = {
          http: null,
          xhr:
            "undefined" != typeof XMLHttpRequest &&
            function (e) {
              return new Promise(function (t, n) {
                let r = e.data;
                const o = le.from(e.headers).normalize(),
                  i = e.responseType;
                let a, s;
                function u() {
                  e.cancelToken && e.cancelToken.unsubscribe(a),
                    e.signal && e.signal.removeEventListener("abort", a);
                }
                M.isFormData(r) &&
                  (Z.isStandardBrowserEnv || Z.isStandardBrowserWebWorkerEnv
                    ? o.setContentType(!1)
                    : o.getContentType(/^\s*multipart\/form-data/)
                    ? M.isString((s = o.getContentType())) &&
                      o.setContentType(
                        s.replace(/^\s*(multipart\/form-data);+/, "$1")
                      )
                    : o.setContentType("multipart/form-data"));
                let l = new XMLHttpRequest();
                if (e.auth) {
                  const t = e.auth.username || "",
                    n = e.auth.password
                      ? unescape(encodeURIComponent(e.auth.password))
                      : "";
                  o.set("Authorization", "Basic " + btoa(t + ":" + n));
                }
                const c = pe(e.baseURL, e.url);
                function f() {
                  if (!l) return;
                  const r = le.from(
                    "getAllResponseHeaders" in l && l.getAllResponseHeaders()
                  );
                  !(function (e, t, n) {
                    const r = n.config.validateStatus;
                    n.status && r && !r(n.status)
                      ? t(
                          new D(
                            "Request failed with status code " + n.status,
                            [D.ERR_BAD_REQUEST, D.ERR_BAD_RESPONSE][
                              Math.floor(n.status / 100) - 4
                            ],
                            n.config,
                            n.request,
                            n
                          )
                        )
                      : e(n);
                  })(
                    function (e) {
                      t(e), u();
                    },
                    function (e) {
                      n(e), u();
                    },
                    {
                      data:
                        i && "text" !== i && "json" !== i
                          ? l.response
                          : l.responseText,
                      status: l.status,
                      statusText: l.statusText,
                      headers: r,
                      config: e,
                      request: l,
                    }
                  ),
                    (l = null);
                }
                if (
                  (l.open(
                    e.method.toUpperCase(),
                    $(c, e.params, e.paramsSerializer),
                    !0
                  ),
                  (l.timeout = e.timeout),
                  "onloadend" in l
                    ? (l.onloadend = f)
                    : (l.onreadystatechange = function () {
                        l &&
                          4 === l.readyState &&
                          (0 !== l.status ||
                            (l.responseURL &&
                              0 === l.responseURL.indexOf("file:"))) &&
                          setTimeout(f);
                      }),
                  (l.onabort = function () {
                    l &&
                      (n(new D("Request aborted", D.ECONNABORTED, e, l)),
                      (l = null));
                  }),
                  (l.onerror = function () {
                    n(new D("Network Error", D.ERR_NETWORK, e, l)), (l = null);
                  }),
                  (l.ontimeout = function () {
                    let t = e.timeout
                      ? "timeout of " + e.timeout + "ms exceeded"
                      : "timeout exceeded";
                    const r = e.transitional || Y;
                    e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                      n(
                        new D(
                          t,
                          r.clarifyTimeoutError ? D.ETIMEDOUT : D.ECONNABORTED,
                          e,
                          l
                        )
                      ),
                      (l = null);
                  }),
                  Z.isStandardBrowserEnv)
                ) {
                  const t =
                    (e.withCredentials || me(c)) &&
                    e.xsrfCookieName &&
                    he.read(e.xsrfCookieName);
                  t && o.set(e.xsrfHeaderName, t);
                }
                void 0 === r && o.setContentType(null),
                  "setRequestHeader" in l &&
                    M.forEach(o.toJSON(), function (e, t) {
                      l.setRequestHeader(t, e);
                    }),
                  M.isUndefined(e.withCredentials) ||
                    (l.withCredentials = !!e.withCredentials),
                  i && "json" !== i && (l.responseType = e.responseType),
                  "function" == typeof e.onDownloadProgress &&
                    l.addEventListener(
                      "progress",
                      ye(e.onDownloadProgress, !0)
                    ),
                  "function" == typeof e.onUploadProgress &&
                    l.upload &&
                    l.upload.addEventListener(
                      "progress",
                      ye(e.onUploadProgress)
                    ),
                  (e.cancelToken || e.signal) &&
                    ((a = (t) => {
                      l &&
                        (n(!t || t.type ? new de(null, e, l) : t),
                        l.abort(),
                        (l = null));
                    }),
                    e.cancelToken && e.cancelToken.subscribe(a),
                    e.signal &&
                      (e.signal.aborted
                        ? a()
                        : e.signal.addEventListener("abort", a)));
                const d = (function (e) {
                  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                  return (t && t[1]) || "";
                })(c);
                d && -1 === Z.protocols.indexOf(d)
                  ? n(
                      new D(
                        "Unsupported protocol " + d + ":",
                        D.ERR_BAD_REQUEST,
                        e
                      )
                    )
                  : l.send(r || null);
              });
            },
        };
        M.forEach(ge, (e, t) => {
          if (e) {
            try {
              Object.defineProperty(e, "name", { value: t });
            } catch (e) {}
            Object.defineProperty(e, "adapterName", { value: t });
          }
        });
        const ve = (e) => `- ${e}`,
          be = (e) => M.isFunction(e) || null === e || !1 === e;
        var we = (e) => {
          e = M.isArray(e) ? e : [e];
          const { length: t } = e;
          let n, r;
          const o = {};
          for (let i = 0; i < t; i++) {
            let t;
            if (
              ((n = e[i]),
              (r = n),
              !be(n) && ((r = ge[(t = String(n)).toLowerCase()]), void 0 === r))
            )
              throw new D(`Unknown adapter '${t}'`);
            if (r) break;
            o[t || "#" + i] = r;
          }
          if (!r) {
            const e = Object.entries(o).map(
              ([e, t]) =>
                `adapter ${e} ` +
                (!1 === t
                  ? "is not supported by the environment"
                  : "is not available in the build")
            );
            throw new D(
              "There is no suitable adapter to dispatch the request " +
                (t
                  ? e.length > 1
                    ? "since :\n" + e.map(ve).join("\n")
                    : " " + ve(e[0])
                  : "as no adapter specified"),
              "ERR_NOT_SUPPORT"
            );
          }
          return r;
        };
        function Re(e) {
          if (
            (e.cancelToken && e.cancelToken.throwIfRequested(),
            e.signal && e.signal.aborted)
          )
            throw new de(null, e);
        }
        function Oe(e) {
          return (
            Re(e),
            (e.headers = le.from(e.headers)),
            (e.data = ce.call(e, e.transformRequest)),
            -1 !== ["post", "put", "patch"].indexOf(e.method) &&
              e.headers.setContentType("application/x-www-form-urlencoded", !1),
            we(e.adapter || ne.adapter)(e).then(
              function (t) {
                return (
                  Re(e),
                  (t.data = ce.call(e, e.transformResponse, t)),
                  (t.headers = le.from(t.headers)),
                  t
                );
              },
              function (t) {
                return (
                  fe(t) ||
                    (Re(e),
                    t &&
                      t.response &&
                      ((t.response.data = ce.call(
                        e,
                        e.transformResponse,
                        t.response
                      )),
                      (t.response.headers = le.from(t.response.headers)))),
                  Promise.reject(t)
                );
              }
            )
          );
        }
        const Se = (e) => (e instanceof le ? e.toJSON() : e);
        function Ee(e, t) {
          t = t || {};
          const n = {};
          function r(e, t, n) {
            return M.isPlainObject(e) && M.isPlainObject(t)
              ? M.merge.call({ caseless: n }, e, t)
              : M.isPlainObject(t)
              ? M.merge({}, t)
              : M.isArray(t)
              ? t.slice()
              : t;
          }
          function o(e, t, n) {
            return M.isUndefined(t)
              ? M.isUndefined(e)
                ? void 0
                : r(void 0, e, n)
              : r(e, t, n);
          }
          function i(e, t) {
            if (!M.isUndefined(t)) return r(void 0, t);
          }
          function a(e, t) {
            return M.isUndefined(t)
              ? M.isUndefined(e)
                ? void 0
                : r(void 0, e)
              : r(void 0, t);
          }
          function s(n, o, i) {
            return i in t ? r(n, o) : i in e ? r(void 0, n) : void 0;
          }
          const u = {
            url: i,
            method: i,
            data: i,
            baseURL: a,
            transformRequest: a,
            transformResponse: a,
            paramsSerializer: a,
            timeout: a,
            timeoutMessage: a,
            withCredentials: a,
            adapter: a,
            responseType: a,
            xsrfCookieName: a,
            xsrfHeaderName: a,
            onUploadProgress: a,
            onDownloadProgress: a,
            decompress: a,
            maxContentLength: a,
            maxBodyLength: a,
            beforeRedirect: a,
            transport: a,
            httpAgent: a,
            httpsAgent: a,
            cancelToken: a,
            socketPath: a,
            responseEncoding: a,
            validateStatus: s,
            headers: (e, t) => o(Se(e), Se(t), !0),
          };
          return (
            M.forEach(Object.keys(Object.assign({}, e, t)), function (r) {
              const i = u[r] || o,
                a = i(e[r], t[r], r);
              (M.isUndefined(a) && i !== s) || (n[r] = a);
            }),
            n
          );
        }
        const xe = {};
        ["object", "boolean", "number", "function", "string", "symbol"].forEach(
          (e, t) => {
            xe[e] = function (n) {
              return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
            };
          }
        );
        const _e = {};
        xe.transitional = function (e, t, n) {
          function r(e, t) {
            return (
              "[Axios v1.5.1] Transitional option '" +
              e +
              "'" +
              t +
              (n ? ". " + n : "")
            );
          }
          return (n, o, i) => {
            if (!1 === e)
              throw new D(
                r(o, " has been removed" + (t ? " in " + t : "")),
                D.ERR_DEPRECATED
              );
            return (
              t &&
                !_e[o] &&
                ((_e[o] = !0),
                console.warn(
                  r(
                    o,
                    " has been deprecated since v" +
                      t +
                      " and will be removed in the near future"
                  )
                )),
              !e || e(n, o, i)
            );
          };
        };
        var ke = {
          assertOptions: function (e, t, n) {
            if ("object" != typeof e)
              throw new D("options must be an object", D.ERR_BAD_OPTION_VALUE);
            const r = Object.keys(e);
            let o = r.length;
            for (; o-- > 0; ) {
              const i = r[o],
                a = t[i];
              if (a) {
                const t = e[i],
                  n = void 0 === t || a(t, i, e);
                if (!0 !== n)
                  throw new D(
                    "option " + i + " must be " + n,
                    D.ERR_BAD_OPTION_VALUE
                  );
              } else if (!0 !== n)
                throw new D("Unknown option " + i, D.ERR_BAD_OPTION);
            }
          },
          validators: xe,
        };
        const Te = ke.validators;
        class Ce {
          constructor(e) {
            (this.defaults = e),
              (this.interceptors = { request: new Q(), response: new Q() });
          }
          request(e, t) {
            "string" == typeof e ? ((t = t || {}).url = e) : (t = e || {}),
              (t = Ee(this.defaults, t));
            const { transitional: n, paramsSerializer: r, headers: o } = t;
            void 0 !== n &&
              ke.assertOptions(
                n,
                {
                  silentJSONParsing: Te.transitional(Te.boolean),
                  forcedJSONParsing: Te.transitional(Te.boolean),
                  clarifyTimeoutError: Te.transitional(Te.boolean),
                },
                !1
              ),
              null != r &&
                (M.isFunction(r)
                  ? (t.paramsSerializer = { serialize: r })
                  : ke.assertOptions(
                      r,
                      { encode: Te.function, serialize: Te.function },
                      !0
                    )),
              (t.method = (
                t.method ||
                this.defaults.method ||
                "get"
              ).toLowerCase());
            let i = o && M.merge(o.common, o[t.method]);
            o &&
              M.forEach(
                ["delete", "get", "head", "post", "put", "patch", "common"],
                (e) => {
                  delete o[e];
                }
              ),
              (t.headers = le.concat(i, o));
            const a = [];
            let s = !0;
            this.interceptors.request.forEach(function (e) {
              ("function" == typeof e.runWhen && !1 === e.runWhen(t)) ||
                ((s = s && e.synchronous), a.unshift(e.fulfilled, e.rejected));
            });
            const u = [];
            let l;
            this.interceptors.response.forEach(function (e) {
              u.push(e.fulfilled, e.rejected);
            });
            let c,
              f = 0;
            if (!s) {
              const e = [Oe.bind(this), void 0];
              for (
                e.unshift.apply(e, a),
                  e.push.apply(e, u),
                  c = e.length,
                  l = Promise.resolve(t);
                f < c;

              )
                l = l.then(e[f++], e[f++]);
              return l;
            }
            c = a.length;
            let d = t;
            for (f = 0; f < c; ) {
              const e = a[f++],
                t = a[f++];
              try {
                d = e(d);
              } catch (e) {
                t.call(this, e);
                break;
              }
            }
            try {
              l = Oe.call(this, d);
            } catch (e) {
              return Promise.reject(e);
            }
            for (f = 0, c = u.length; f < c; ) l = l.then(u[f++], u[f++]);
            return l;
          }
          getUri(e) {
            return $(
              pe((e = Ee(this.defaults, e)).baseURL, e.url),
              e.params,
              e.paramsSerializer
            );
          }
        }
        M.forEach(["delete", "get", "head", "options"], function (e) {
          Ce.prototype[e] = function (t, n) {
            return this.request(
              Ee(n || {}, { method: e, url: t, data: (n || {}).data })
            );
          };
        }),
          M.forEach(["post", "put", "patch"], function (e) {
            function t(t) {
              return function (n, r, o) {
                return this.request(
                  Ee(o || {}, {
                    method: e,
                    headers: t ? { "Content-Type": "multipart/form-data" } : {},
                    url: n,
                    data: r,
                  })
                );
              };
            }
            (Ce.prototype[e] = t()), (Ce.prototype[e + "Form"] = t(!0));
          });
        var je = Ce;
        class Pe {
          constructor(e) {
            if ("function" != typeof e)
              throw new TypeError("executor must be a function.");
            let t;
            this.promise = new Promise(function (e) {
              t = e;
            });
            const n = this;
            this.promise.then((e) => {
              if (!n._listeners) return;
              let t = n._listeners.length;
              for (; t-- > 0; ) n._listeners[t](e);
              n._listeners = null;
            }),
              (this.promise.then = (e) => {
                let t;
                const r = new Promise((e) => {
                  n.subscribe(e), (t = e);
                }).then(e);
                return (
                  (r.cancel = function () {
                    n.unsubscribe(t);
                  }),
                  r
                );
              }),
              e(function (e, r, o) {
                n.reason || ((n.reason = new de(e, r, o)), t(n.reason));
              });
          }
          throwIfRequested() {
            if (this.reason) throw this.reason;
          }
          subscribe(e) {
            this.reason
              ? e(this.reason)
              : this._listeners
              ? this._listeners.push(e)
              : (this._listeners = [e]);
          }
          unsubscribe(e) {
            if (!this._listeners) return;
            const t = this._listeners.indexOf(e);
            -1 !== t && this._listeners.splice(t, 1);
          }
          static source() {
            let e;
            return {
              token: new Pe(function (t) {
                e = t;
              }),
              cancel: e,
            };
          }
        }
        var Le = Pe;
        const Fe = {
          Continue: 100,
          SwitchingProtocols: 101,
          Processing: 102,
          EarlyHints: 103,
          Ok: 200,
          Created: 201,
          Accepted: 202,
          NonAuthoritativeInformation: 203,
          NoContent: 204,
          ResetContent: 205,
          PartialContent: 206,
          MultiStatus: 207,
          AlreadyReported: 208,
          ImUsed: 226,
          MultipleChoices: 300,
          MovedPermanently: 301,
          Found: 302,
          SeeOther: 303,
          NotModified: 304,
          UseProxy: 305,
          Unused: 306,
          TemporaryRedirect: 307,
          PermanentRedirect: 308,
          BadRequest: 400,
          Unauthorized: 401,
          PaymentRequired: 402,
          Forbidden: 403,
          NotFound: 404,
          MethodNotAllowed: 405,
          NotAcceptable: 406,
          ProxyAuthenticationRequired: 407,
          RequestTimeout: 408,
          Conflict: 409,
          Gone: 410,
          LengthRequired: 411,
          PreconditionFailed: 412,
          PayloadTooLarge: 413,
          UriTooLong: 414,
          UnsupportedMediaType: 415,
          RangeNotSatisfiable: 416,
          ExpectationFailed: 417,
          ImATeapot: 418,
          MisdirectedRequest: 421,
          UnprocessableEntity: 422,
          Locked: 423,
          FailedDependency: 424,
          TooEarly: 425,
          UpgradeRequired: 426,
          PreconditionRequired: 428,
          TooManyRequests: 429,
          RequestHeaderFieldsTooLarge: 431,
          UnavailableForLegalReasons: 451,
          InternalServerError: 500,
          NotImplemented: 501,
          BadGateway: 502,
          ServiceUnavailable: 503,
          GatewayTimeout: 504,
          HttpVersionNotSupported: 505,
          VariantAlsoNegotiates: 506,
          InsufficientStorage: 507,
          LoopDetected: 508,
          NotExtended: 510,
          NetworkAuthenticationRequired: 511,
        };
        Object.entries(Fe).forEach(([e, t]) => {
          Fe[t] = e;
        });
        var Ae = Fe;
        const Be = (function e(t) {
          const n = new je(t),
            o = r(je.prototype.request, n);
          return (
            M.extend(o, je.prototype, n, { allOwnKeys: !0 }),
            M.extend(o, n, null, { allOwnKeys: !0 }),
            (o.create = function (n) {
              return e(Ee(t, n));
            }),
            o
          );
        })(ne);
        (Be.Axios = je),
          (Be.CanceledError = de),
          (Be.CancelToken = Le),
          (Be.isCancel = fe),
          (Be.VERSION = "1.5.1"),
          (Be.toFormData = J),
          (Be.AxiosError = D),
          (Be.Cancel = Be.CanceledError),
          (Be.all = function (e) {
            return Promise.all(e);
          }),
          (Be.spread = function (e) {
            return function (t) {
              return e.apply(null, t);
            };
          }),
          (Be.isAxiosError = function (e) {
            return M.isObject(e) && !0 === e.isAxiosError;
          }),
          (Be.mergeConfig = Ee),
          (Be.AxiosHeaders = le),
          (Be.formToJSON = (e) => ee(M.isHTMLForm(e) ? new FormData(e) : e)),
          (Be.getAdapter = we),
          (Be.HttpStatusCode = Ae),
          (Be.default = Be),
          (e.exports = Be);
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { exports: {} });
    return e[r].call(i.exports, i, i.exports, n), i.exports;
  }
  (n.g = (function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == typeof window) return window;
    }
  })()),
    (n.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    n(585);
})();
