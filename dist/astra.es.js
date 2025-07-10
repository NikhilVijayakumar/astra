import Bt, { createContext as ot, useContext as it, useState as ue, useMemo as at } from "react";
import "@mui/material/List";
import "@mui/material/ListItem";
import "@mui/material/ListItemButton";
import "@mui/material/ListItemIcon";
import "@mui/material/ListItemText";
import "@mui/material/Divider";
import "@mui/material/Toolbar";
import "@mui/material/Box";
import "@mui/material/Drawer";
import "@mui/material/AppBar";
import "@mui/material/IconButton";
import "@mui/icons-material/Menu";
import "@mui/material/Typography";
import "@mui/icons-material/DarkModeRounded";
import "@mui/icons-material/LightModeRounded";
import { Box as le, Typography as ct, Alert as Mt, CircularProgress as qt, Button as $t, Menu as zt, MenuItem as Jt, ThemeProvider as Vt, CssBaseline as Ht } from "@mui/material";
import Wt from "@mui/icons-material/Language";
var ne = { exports: {} }, K = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ze;
function Yt() {
  if (ze) return K;
  ze = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, s, o) {
    var i = null;
    if (o !== void 0 && (i = "" + o), s.key !== void 0 && (i = "" + s.key), "key" in s) {
      o = {};
      for (var c in s)
        c !== "key" && (o[c] = s[c]);
    } else o = s;
    return s = o.ref, {
      $$typeof: e,
      type: n,
      key: i,
      ref: s !== void 0 ? s : null,
      props: o
    };
  }
  return K.Fragment = t, K.jsx = r, K.jsxs = r, K;
}
var X = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Je;
function Gt() {
  return Je || (Je = 1, process.env.NODE_ENV !== "production" && function() {
    function e(l) {
      if (l == null) return null;
      if (typeof l == "function")
        return l.$$typeof === Ft ? null : l.displayName || l.name || null;
      if (typeof l == "string") return l;
      switch (l) {
        case E:
          return "Fragment";
        case y:
          return "Profiler";
        case m:
          return "StrictMode";
        case _:
          return "Suspense";
        case U:
          return "SuspenseList";
        case re:
          return "Activity";
      }
      if (typeof l == "object")
        switch (typeof l.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), l.$$typeof) {
          case h:
            return "Portal";
          case x:
            return (l.displayName || "Context") + ".Provider";
          case O:
            return (l._context.displayName || "Context") + ".Consumer";
          case j:
            var R = l.render;
            return l = l.displayName, l || (l = R.displayName || R.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
          case v:
            return R = l.displayName || null, R !== null ? R : e(l.type) || "Memo";
          case $:
            R = l._payload, l = l._init;
            try {
              return e(l(R));
            } catch {
            }
        }
      return null;
    }
    function t(l) {
      return "" + l;
    }
    function r(l) {
      try {
        t(l);
        var R = !1;
      } catch {
        R = !0;
      }
      if (R) {
        R = console;
        var w = R.error, N = typeof Symbol == "function" && Symbol.toStringTag && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return w.call(
          R,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          N
        ), t(l);
      }
    }
    function n(l) {
      if (l === E) return "<>";
      if (typeof l == "object" && l !== null && l.$$typeof === $)
        return "<...>";
      try {
        var R = e(l);
        return R ? "<" + R + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var l = ge.A;
      return l === null ? null : l.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(l) {
      if (Ie.call(l, "key")) {
        var R = Object.getOwnPropertyDescriptor(l, "key").get;
        if (R && R.isReactWarning) return !1;
      }
      return l.key !== void 0;
    }
    function c(l, R) {
      function w() {
        ve || (ve = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          R
        ));
      }
      w.isReactWarning = !0, Object.defineProperty(l, "key", {
        get: w,
        configurable: !0
      });
    }
    function d() {
      var l = e(this.type);
      return Be[l] || (Be[l] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), l = this.props.ref, l !== void 0 ? l : null;
    }
    function f(l, R, w, N, B, F, we, Te) {
      return w = F.ref, l = {
        $$typeof: T,
        type: l,
        key: R,
        props: F,
        _owner: B
      }, (w !== void 0 ? w : null) !== null ? Object.defineProperty(l, "ref", {
        enumerable: !1,
        get: d
      }) : Object.defineProperty(l, "ref", { enumerable: !1, value: null }), l._store = {}, Object.defineProperty(l._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(l, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(l, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: we
      }), Object.defineProperty(l, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Te
      }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
    }
    function u(l, R, w, N, B, F, we, Te) {
      var P = R.children;
      if (P !== void 0)
        if (N)
          if (It(P)) {
            for (N = 0; N < P.length; N++)
              p(P[N]);
            Object.freeze && Object.freeze(P);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(P);
      if (Ie.call(R, "key")) {
        P = e(l);
        var H = Object.keys(R).filter(function(vt) {
          return vt !== "key";
        });
        N = 0 < H.length ? "{key: someKey, " + H.join(": ..., ") + ": ...}" : "{key: someKey}", $e[P + N] || (H = 0 < H.length ? "{" + H.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          N,
          P,
          H,
          P
        ), $e[P + N] = !0);
      }
      if (P = null, w !== void 0 && (r(w), P = "" + w), i(R) && (r(R.key), P = "" + R.key), "key" in R) {
        w = {};
        for (var Se in R)
          Se !== "key" && (w[Se] = R[Se]);
      } else w = R;
      return P && c(
        w,
        typeof l == "function" ? l.displayName || l.name || "Unknown" : l
      ), f(
        l,
        P,
        F,
        B,
        s(),
        w,
        we,
        Te
      );
    }
    function p(l) {
      typeof l == "object" && l !== null && l.$$typeof === T && l._store && (l._store.validated = 1);
    }
    var g = Bt, T = Symbol.for("react.transitional.element"), h = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), O = Symbol.for("react.consumer"), x = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), U = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), re = Symbol.for("react.activity"), Ft = Symbol.for("react.client.reference"), ge = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ie = Object.prototype.hasOwnProperty, It = Array.isArray, ye = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      "react-stack-bottom-frame": function(l) {
        return l();
      }
    };
    var ve, Be = {}, Me = g["react-stack-bottom-frame"].bind(
      g,
      o
    )(), qe = ye(n(o)), $e = {};
    X.Fragment = E, X.jsx = function(l, R, w, N, B) {
      var F = 1e4 > ge.recentlyCreatedOwnerStacks++;
      return u(
        l,
        R,
        w,
        !1,
        N,
        B,
        F ? Error("react-stack-top-frame") : Me,
        F ? ye(n(l)) : qe
      );
    }, X.jsxs = function(l, R, w, N, B) {
      var F = 1e4 > ge.recentlyCreatedOwnerStacks++;
      return u(
        l,
        R,
        w,
        !0,
        N,
        B,
        F ? Error("react-stack-top-frame") : Me,
        F ? ye(n(l)) : qe
      );
    };
  }()), X;
}
var Ve;
function Kt() {
  return Ve || (Ve = 1, process.env.NODE_ENV === "production" ? ne.exports = Yt() : ne.exports = Gt()), ne.exports;
}
var A = Kt();
const Xn = 240, ut = ot(
  void 0
);
function fe() {
  const e = it(ut);
  if (!e)
    throw new Error("useLanguage must be used within a AstraLanguageProvider");
  return e;
}
const Xt = ({ message: e }) => {
  const { literal: t } = fe();
  return /* @__PURE__ */ A.jsx(le, { sx: { p: 4, textAlign: "center", mt: 8 }, children: /* @__PURE__ */ A.jsx(ct, { variant: "h6", children: e || t.no_content_message || "No content available." }) });
}, Zt = ({ message: e }) => {
  const { literal: t } = fe();
  return /* @__PURE__ */ A.jsx(le, { sx: { p: 4, textAlign: "center", mt: 8 }, children: /* @__PURE__ */ A.jsx(Mt, { severity: "error", children: e || t.unknown_message || "An unexpected error occurred." }) });
}, Qt = () => {
  const { literal: e } = fe();
  return /* @__PURE__ */ A.jsxs(le, { sx: { p: 4, textAlign: "center", mt: 8 }, children: [
    /* @__PURE__ */ A.jsx(qt, { sx: { mb: 2 } }),
    /* @__PURE__ */ A.jsx(ct, { variant: "h6", children: e.loading_message || "Loading..." })
  ] });
};
var q = /* @__PURE__ */ ((e) => (e[e.INIT = 0] = "INIT", e[e.LOADING = 1] = "LOADING", e[e.COMPLETED = 2] = "COMPLETED", e))(q || {});
function Zn({ appState: e, children: t }) {
  switch (e.state) {
    case q.LOADING:
    case q.INIT:
      return /* @__PURE__ */ A.jsx(Qt, {});
    case q.COMPLETED:
      return e.isError ? /* @__PURE__ */ A.jsx(Zt, { message: e.statusMessage }) : !e.data || Array.isArray(e.data) && e.data.length === 0 ? /* @__PURE__ */ A.jsx(Xt, {}) : /* @__PURE__ */ A.jsx(A.Fragment, { children: t });
    default:
      return null;
  }
}
var W = /* @__PURE__ */ ((e) => (e[e.SUCCESS = 200] = "SUCCESS", e[e.CREATED = 201] = "CREATED", e[e.BAD_REQUEST = 400] = "BAD_REQUEST", e[e.UNAUTHORIZED = 401] = "UNAUTHORIZED", e[e.NOT_FOUND = 404] = "NOT_FOUND", e[e.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", e[e.INTERNET_ERROR = 0] = "INTERNET_ERROR", e[e.IDLE = 1e3] = "IDLE", e))(W || {});
function Qn(e, t) {
  switch (e) {
    case 200:
      return t.success_message;
    case 201:
      return t.created_message;
    case 400:
      return t.bad_request_message;
    case 401:
      return t.unauthorized_message;
    case 404:
      return t.not_found_message;
    case 500:
      return t.internal_server_error;
    case 0:
      return t.internet_error;
    case 1e3:
      return t.idle_message;
    default:
      return t.unknown_message;
  }
}
const er = () => ({
  state: q.INIT,
  isError: !1,
  isSuccess: !1,
  status: W.IDLE,
  statusMessage: "",
  data: null
});
function es(e = {}) {
  const [t, r] = ue({
    ...er(),
    ...e
  });
  return [t, async (s) => {
    r((o) => ({ ...o, state: q.LOADING }));
    try {
      const o = await s();
      r((i) => ({
        ...i,
        state: q.COMPLETED,
        isError: o.isError,
        isSuccess: o.isSuccess,
        status: o.status,
        statusMessage: o.statusMessage,
        data: o.data || null
      }));
    } catch {
      r((i) => ({
        ...i,
        state: q.COMPLETED,
        isError: !0,
        status: W.INTERNAL_SERVER_ERROR,
        statusMessage: "An unexpected error occurred.",
        data: null
      }));
    }
  }, r];
}
const ts = () => {
  const { currentLanguage: e, setCurrentLanguage: t, availableLanguages: r } = fe(), [n, s] = ue(null), o = !!n, i = (u) => {
    s(u.currentTarget);
  }, c = () => {
    s(null);
  }, d = (u) => {
    t(u), c();
  }, f = r.find((u) => u.code === e)?.label || "Language";
  return /* @__PURE__ */ A.jsxs(le, { children: [
    /* @__PURE__ */ A.jsx(
      $t,
      {
        id: "language-button",
        "aria-controls": o ? "language-menu" : void 0,
        "aria-haspopup": "true",
        "aria-expanded": o ? "true" : void 0,
        onClick: i,
        startIcon: /* @__PURE__ */ A.jsx(Wt, {}),
        color: "inherit",
        children: f
      }
    ),
    /* @__PURE__ */ A.jsx(
      zt,
      {
        id: "language-menu",
        anchorEl: n,
        open: o,
        onClose: c,
        "aria-labelledby": "language-button",
        children: r.map((u) => /* @__PURE__ */ A.jsx(
          Jt,
          {
            selected: u.code === e,
            onClick: () => d(u.code),
            children: u.label
          },
          u.code
        ))
      }
    )
  ] });
};
function rs({
  children: e,
  translations: t,
  availableLanguages: r,
  defaultLanguage: n = "en"
}) {
  const [s, o] = ue(n), i = at(
    () => t[s] || {},
    [s, t]
  ), c = {
    currentLanguage: s,
    setCurrentLanguage: o,
    literal: i,
    availableLanguages: r
  };
  return /* @__PURE__ */ A.jsx(ut.Provider, { value: c, children: e });
}
function lt(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: tr } = Object.prototype, { getPrototypeOf: De } = Object, { iterator: de, toStringTag: ft } = Symbol, pe = /* @__PURE__ */ ((e) => (t) => {
  const r = tr.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), D = (e) => (e = e.toLowerCase(), (t) => pe(t) === e), he = (e) => (t) => typeof t === e, { isArray: Y } = Array, Q = he("undefined");
function rr(e) {
  return e !== null && !Q(e) && e.constructor !== null && !Q(e.constructor) && L(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const dt = D("ArrayBuffer");
function nr(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && dt(e.buffer), t;
}
const sr = he("string"), L = he("function"), pt = he("number"), me = (e) => e !== null && typeof e == "object", or = (e) => e === !0 || e === !1, se = (e) => {
  if (pe(e) !== "object")
    return !1;
  const t = De(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(ft in e) && !(de in e);
}, ir = D("Date"), ar = D("File"), cr = D("Blob"), ur = D("FileList"), lr = (e) => me(e) && L(e.pipe), fr = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || L(e.append) && ((t = pe(e)) === "formdata" || // detect form-data instance
  t === "object" && L(e.toString) && e.toString() === "[object FormData]"));
}, dr = D("URLSearchParams"), [pr, hr, mr, Er] = ["ReadableStream", "Request", "Response", "Headers"].map(D), br = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ee(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, s;
  if (typeof e != "object" && (e = [e]), Y(e))
    for (n = 0, s = e.length; n < s; n++)
      t.call(null, e[n], n, e);
  else {
    const o = r ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let c;
    for (n = 0; n < i; n++)
      c = o[n], t.call(null, e[c], c, e);
  }
}
function ht(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, s;
  for (; n-- > 0; )
    if (s = r[n], t === s.toLowerCase())
      return s;
  return null;
}
const z = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, mt = (e) => !Q(e) && e !== z;
function Ne() {
  const { caseless: e } = mt(this) && this || {}, t = {}, r = (n, s) => {
    const o = e && ht(t, s) || s;
    se(t[o]) && se(n) ? t[o] = Ne(t[o], n) : se(n) ? t[o] = Ne({}, n) : Y(n) ? t[o] = n.slice() : t[o] = n;
  };
  for (let n = 0, s = arguments.length; n < s; n++)
    arguments[n] && ee(arguments[n], r);
  return t;
}
const Rr = (e, t, r, { allOwnKeys: n } = {}) => (ee(t, (s, o) => {
  r && L(s) ? e[o] = lt(s, r) : e[o] = s;
}, { allOwnKeys: n }), e), gr = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), yr = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, wr = (e, t, r, n) => {
  let s, o, i;
  const c = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!n || n(i, e, t)) && !c[i] && (t[i] = e[i], c[i] = !0);
    e = r !== !1 && De(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, Tr = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, Sr = (e) => {
  if (!e) return null;
  if (Y(e)) return e;
  let t = e.length;
  if (!pt(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, Or = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && De(Uint8Array)), Ar = (e, t) => {
  const n = (e && e[de]).call(e);
  let s;
  for (; (s = n.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, xr = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, _r = D("HTMLFormElement"), Nr = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, s) {
    return n.toUpperCase() + s;
  }
), He = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), Pr = D("RegExp"), Et = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  ee(r, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (n[o] = i || s);
  }), Object.defineProperties(e, n);
}, Cr = (e) => {
  Et(e, (t, r) => {
    if (L(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (L(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Lr = (e, t) => {
  const r = {}, n = (s) => {
    s.forEach((o) => {
      r[o] = !0;
    });
  };
  return Y(e) ? n(e) : n(String(e).split(t)), r;
}, kr = () => {
}, jr = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Dr(e) {
  return !!(e && L(e.append) && e[ft] === "FormData" && e[de]);
}
const Ur = (e) => {
  const t = new Array(10), r = (n, s) => {
    if (me(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[s] = n;
        const o = Y(n) ? [] : {};
        return ee(n, (i, c) => {
          const d = r(i, s + 1);
          !Q(d) && (o[c] = d);
        }), t[s] = void 0, o;
      }
    }
    return n;
  };
  return r(e, 0);
}, Fr = D("AsyncFunction"), Ir = (e) => e && (me(e) || L(e)) && L(e.then) && L(e.catch), bt = ((e, t) => e ? setImmediate : t ? ((r, n) => (z.addEventListener("message", ({ source: s, data: o }) => {
  s === z && o === r && n.length && n.shift()();
}, !1), (s) => {
  n.push(s), z.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  L(z.postMessage)
), vr = typeof queueMicrotask < "u" ? queueMicrotask.bind(z) : typeof process < "u" && process.nextTick || bt, Br = (e) => e != null && L(e[de]), a = {
  isArray: Y,
  isArrayBuffer: dt,
  isBuffer: rr,
  isFormData: fr,
  isArrayBufferView: nr,
  isString: sr,
  isNumber: pt,
  isBoolean: or,
  isObject: me,
  isPlainObject: se,
  isReadableStream: pr,
  isRequest: hr,
  isResponse: mr,
  isHeaders: Er,
  isUndefined: Q,
  isDate: ir,
  isFile: ar,
  isBlob: cr,
  isRegExp: Pr,
  isFunction: L,
  isStream: lr,
  isURLSearchParams: dr,
  isTypedArray: Or,
  isFileList: ur,
  forEach: ee,
  merge: Ne,
  extend: Rr,
  trim: br,
  stripBOM: gr,
  inherits: yr,
  toFlatObject: wr,
  kindOf: pe,
  kindOfTest: D,
  endsWith: Tr,
  toArray: Sr,
  forEachEntry: Ar,
  matchAll: xr,
  isHTMLForm: _r,
  hasOwnProperty: He,
  hasOwnProp: He,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Et,
  freezeMethods: Cr,
  toObjectSet: Lr,
  toCamelCase: Nr,
  noop: kr,
  toFiniteNumber: jr,
  findKey: ht,
  global: z,
  isContextDefined: mt,
  isSpecCompliantForm: Dr,
  toJSONObject: Ur,
  isAsyncFn: Fr,
  isThenable: Ir,
  setImmediate: bt,
  asap: vr,
  isIterable: Br
};
function b(e, t, r, n, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), s && (this.response = s, this.status = s.status ? s.status : null);
}
a.inherits(b, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: a.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Rt = b.prototype, gt = {};
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
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  gt[e] = { value: e };
});
Object.defineProperties(b, gt);
Object.defineProperty(Rt, "isAxiosError", { value: !0 });
b.from = (e, t, r, n, s, o) => {
  const i = Object.create(Rt);
  return a.toFlatObject(e, i, function(d) {
    return d !== Error.prototype;
  }, (c) => c !== "isAxiosError"), b.call(i, e.message, t, r, n, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const Mr = null;
function Pe(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function yt(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function We(e, t, r) {
  return e ? e.concat(t).map(function(s, o) {
    return s = yt(s), !r && o ? "[" + s + "]" : s;
  }).join(r ? "." : "") : t;
}
function qr(e) {
  return a.isArray(e) && !e.some(Pe);
}
const $r = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Ee(e, t, r) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = a.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(E, m) {
    return !a.isUndefined(m[E]);
  });
  const n = r.metaTokens, s = r.visitor || u, o = r.dots, i = r.indexes, d = (r.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function f(h) {
    if (h === null) return "";
    if (a.isDate(h))
      return h.toISOString();
    if (a.isBoolean(h))
      return h.toString();
    if (!d && a.isBlob(h))
      throw new b("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(h) || a.isTypedArray(h) ? d && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function u(h, E, m) {
    let y = h;
    if (h && !m && typeof h == "object") {
      if (a.endsWith(E, "{}"))
        E = n ? E : E.slice(0, -2), h = JSON.stringify(h);
      else if (a.isArray(h) && qr(h) || (a.isFileList(h) || a.endsWith(E, "[]")) && (y = a.toArray(h)))
        return E = yt(E), y.forEach(function(x, j) {
          !(a.isUndefined(x) || x === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? We([E], j, o) : i === null ? E : E + "[]",
            f(x)
          );
        }), !1;
    }
    return Pe(h) ? !0 : (t.append(We(m, E, o), f(h)), !1);
  }
  const p = [], g = Object.assign($r, {
    defaultVisitor: u,
    convertValue: f,
    isVisitable: Pe
  });
  function T(h, E) {
    if (!a.isUndefined(h)) {
      if (p.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + E.join("."));
      p.push(h), a.forEach(h, function(y, O) {
        (!(a.isUndefined(y) || y === null) && s.call(
          t,
          y,
          a.isString(O) ? O.trim() : O,
          E,
          g
        )) === !0 && T(y, E ? E.concat(O) : [O]);
      }), p.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return T(e), t;
}
function Ye(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function Ue(e, t) {
  this._pairs = [], e && Ee(e, this, t);
}
const wt = Ue.prototype;
wt.append = function(t, r) {
  this._pairs.push([t, r]);
};
wt.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, Ye);
  } : Ye;
  return this._pairs.map(function(s) {
    return r(s[0]) + "=" + r(s[1]);
  }, "").join("&");
};
function zr(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Tt(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || zr;
  a.isFunction(r) && (r = {
    serialize: r
  });
  const s = r && r.serialize;
  let o;
  if (s ? o = s(t, r) : o = a.isURLSearchParams(t) ? t.toString() : new Ue(t, r).toString(n), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class Ge {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    a.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const St = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Jr = typeof URLSearchParams < "u" ? URLSearchParams : Ue, Vr = typeof FormData < "u" ? FormData : null, Hr = typeof Blob < "u" ? Blob : null, Wr = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Jr,
    FormData: Vr,
    Blob: Hr
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Fe = typeof window < "u" && typeof document < "u", Ce = typeof navigator == "object" && navigator || void 0, Yr = Fe && (!Ce || ["ReactNative", "NativeScript", "NS"].indexOf(Ce.product) < 0), Gr = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Kr = Fe && window.location.href || "http://localhost", Xr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Fe,
  hasStandardBrowserEnv: Yr,
  hasStandardBrowserWebWorkerEnv: Gr,
  navigator: Ce,
  origin: Kr
}, Symbol.toStringTag, { value: "Module" })), C = {
  ...Xr,
  ...Wr
};
function Zr(e, t) {
  return Ee(e, new C.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, s, o) {
      return C.isNode && a.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Qr(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function en(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const s = r.length;
  let o;
  for (n = 0; n < s; n++)
    o = r[n], t[o] = e[o];
  return t;
}
function Ot(e) {
  function t(r, n, s, o) {
    let i = r[o++];
    if (i === "__proto__") return !0;
    const c = Number.isFinite(+i), d = o >= r.length;
    return i = !i && a.isArray(s) ? s.length : i, d ? (a.hasOwnProp(s, i) ? s[i] = [s[i], n] : s[i] = n, !c) : ((!s[i] || !a.isObject(s[i])) && (s[i] = []), t(r, n, s[i], o) && a.isArray(s[i]) && (s[i] = en(s[i])), !c);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const r = {};
    return a.forEachEntry(e, (n, s) => {
      t(Qr(n), s, r, 0);
    }), r;
  }
  return null;
}
function tn(e, t, r) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const te = {
  transitional: St,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", s = n.indexOf("application/json") > -1, o = a.isObject(t);
    if (o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return s ? JSON.stringify(Ot(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t) || a.isReadableStream(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let c;
    if (o) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Zr(t, this.formSerializer).toString();
      if ((c = a.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const d = this.env && this.env.FormData;
        return Ee(
          c ? { "files[]": t } : t,
          d && new d(),
          this.formSerializer
        );
      }
    }
    return o || s ? (r.setContentType("application/json", !1), tn(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || te.transitional, n = r && r.forcedJSONParsing, s = this.responseType === "json";
    if (a.isResponse(t) || a.isReadableStream(t))
      return t;
    if (t && a.isString(t) && (n && !this.responseType || s)) {
      const i = !(r && r.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (c) {
        if (i)
          throw c.name === "SyntaxError" ? b.from(c, b.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: C.classes.FormData,
    Blob: C.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
a.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  te.headers[e] = {};
});
const rn = a.toObjectSet([
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
  "user-agent"
]), nn = (e) => {
  const t = {};
  let r, n, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), r = i.substring(0, s).trim().toLowerCase(), n = i.substring(s + 1).trim(), !(!r || t[r] && rn[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, Ke = Symbol("internals");
function Z(e) {
  return e && String(e).trim().toLowerCase();
}
function oe(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(oe) : String(e);
}
function sn(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const on = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Oe(e, t, r, n, s) {
  if (a.isFunction(n))
    return n.call(this, t, r);
  if (s && (t = r), !!a.isString(t)) {
    if (a.isString(n))
      return t.indexOf(n) !== -1;
    if (a.isRegExp(n))
      return n.test(t);
  }
}
function an(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function cn(e, t) {
  const r = a.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(s, o, i) {
        return this[n].call(this, t, s, o, i);
      },
      configurable: !0
    });
  });
}
let k = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const s = this;
    function o(c, d, f) {
      const u = Z(d);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const p = a.findKey(s, u);
      (!p || s[p] === void 0 || f === !0 || f === void 0 && s[p] !== !1) && (s[p || d] = oe(c));
    }
    const i = (c, d) => a.forEach(c, (f, u) => o(f, u, d));
    if (a.isPlainObject(t) || t instanceof this.constructor)
      i(t, r);
    else if (a.isString(t) && (t = t.trim()) && !on(t))
      i(nn(t), r);
    else if (a.isObject(t) && a.isIterable(t)) {
      let c = {}, d, f;
      for (const u of t) {
        if (!a.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        c[f = u[0]] = (d = c[f]) ? a.isArray(d) ? [...d, u[1]] : [d, u[1]] : u[1];
      }
      i(c, r);
    } else
      t != null && o(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = Z(t), t) {
      const n = a.findKey(this, t);
      if (n) {
        const s = this[n];
        if (!r)
          return s;
        if (r === !0)
          return sn(s);
        if (a.isFunction(r))
          return r.call(this, s, n);
        if (a.isRegExp(r))
          return r.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Z(t), t) {
      const n = a.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Oe(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let s = !1;
    function o(i) {
      if (i = Z(i), i) {
        const c = a.findKey(n, i);
        c && (!r || Oe(n, n[c], c, r)) && (delete n[c], s = !0);
      }
    }
    return a.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, s = !1;
    for (; n--; ) {
      const o = r[n];
      (!t || Oe(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const r = this, n = {};
    return a.forEach(this, (s, o) => {
      const i = a.findKey(n, o);
      if (i) {
        r[i] = oe(s), delete r[o];
        return;
      }
      const c = t ? an(o) : String(o).trim();
      c !== o && delete r[o], r[c] = oe(s), n[c] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return a.forEach(this, (n, s) => {
      n != null && n !== !1 && (r[s] = t && a.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((s) => n.set(s)), n;
  }
  static accessor(t) {
    const n = (this[Ke] = this[Ke] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const c = Z(i);
      n[c] || (cn(s, i), n[c] = !0);
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
k.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors(k.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
a.freezeMethods(k);
function Ae(e, t) {
  const r = this || te, n = t || r, s = k.from(n.headers);
  let o = n.data;
  return a.forEach(e, function(c) {
    o = c.call(r, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function At(e) {
  return !!(e && e.__CANCEL__);
}
function G(e, t, r) {
  b.call(this, e ?? "canceled", b.ERR_CANCELED, t, r), this.name = "CanceledError";
}
a.inherits(G, b, {
  __CANCEL__: !0
});
function xt(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new b(
    "Request failed with status code " + r.status,
    [b.ERR_BAD_REQUEST, b.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function un(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function ln(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(d) {
    const f = Date.now(), u = n[o];
    i || (i = f), r[s] = d, n[s] = f;
    let p = o, g = 0;
    for (; p !== s; )
      g += r[p++], p = p % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), f - i < t)
      return;
    const T = u && f - u;
    return T ? Math.round(g * 1e3 / T) : void 0;
  };
}
function fn(e, t) {
  let r = 0, n = 1e3 / t, s, o;
  const i = (f, u = Date.now()) => {
    r = u, s = null, o && (clearTimeout(o), o = null), e.apply(null, f);
  };
  return [(...f) => {
    const u = Date.now(), p = u - r;
    p >= n ? i(f, u) : (s = f, o || (o = setTimeout(() => {
      o = null, i(s);
    }, n - p)));
  }, () => s && i(s)];
}
const ae = (e, t, r = 3) => {
  let n = 0;
  const s = ln(50, 250);
  return fn((o) => {
    const i = o.loaded, c = o.lengthComputable ? o.total : void 0, d = i - n, f = s(d), u = i <= c;
    n = i;
    const p = {
      loaded: i,
      total: c,
      progress: c ? i / c : void 0,
      bytes: d,
      rate: f || void 0,
      estimated: f && c && u ? (c - i) / f : void 0,
      event: o,
      lengthComputable: c != null,
      [t ? "download" : "upload"]: !0
    };
    e(p);
  }, r);
}, Xe = (e, t) => {
  const r = e != null;
  return [(n) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: n
  }), t[1]];
}, Ze = (e) => (...t) => a.asap(() => e(...t)), dn = C.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (r) => (r = new URL(r, C.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(
  new URL(C.origin),
  C.navigator && /(msie|trident)/i.test(C.navigator.userAgent)
) : () => !0, pn = C.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, s, o) {
      const i = [e + "=" + encodeURIComponent(t)];
      a.isNumber(r) && i.push("expires=" + new Date(r).toGMTString()), a.isString(n) && i.push("path=" + n), a.isString(s) && i.push("domain=" + s), o === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function hn(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function mn(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function _t(e, t, r) {
  let n = !hn(t);
  return e && (n || r == !1) ? mn(e, t) : t;
}
const Qe = (e) => e instanceof k ? { ...e } : e;
function V(e, t) {
  t = t || {};
  const r = {};
  function n(f, u, p, g) {
    return a.isPlainObject(f) && a.isPlainObject(u) ? a.merge.call({ caseless: g }, f, u) : a.isPlainObject(u) ? a.merge({}, u) : a.isArray(u) ? u.slice() : u;
  }
  function s(f, u, p, g) {
    if (a.isUndefined(u)) {
      if (!a.isUndefined(f))
        return n(void 0, f, p, g);
    } else return n(f, u, p, g);
  }
  function o(f, u) {
    if (!a.isUndefined(u))
      return n(void 0, u);
  }
  function i(f, u) {
    if (a.isUndefined(u)) {
      if (!a.isUndefined(f))
        return n(void 0, f);
    } else return n(void 0, u);
  }
  function c(f, u, p) {
    if (p in t)
      return n(f, u);
    if (p in e)
      return n(void 0, f);
  }
  const d = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: c,
    headers: (f, u, p) => s(Qe(f), Qe(u), p, !0)
  };
  return a.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const p = d[u] || s, g = p(e[u], t[u], u);
    a.isUndefined(g) && p !== c || (r[u] = g);
  }), r;
}
const Nt = (e) => {
  const t = V({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: c } = t;
  t.headers = i = k.from(i), t.url = Tt(_t(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), c && i.set(
    "Authorization",
    "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : ""))
  );
  let d;
  if (a.isFormData(r)) {
    if (C.hasStandardBrowserEnv || C.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((d = i.getContentType()) !== !1) {
      const [f, ...u] = d ? d.split(";").map((p) => p.trim()).filter(Boolean) : [];
      i.setContentType([f || "multipart/form-data", ...u].join("; "));
    }
  }
  if (C.hasStandardBrowserEnv && (n && a.isFunction(n) && (n = n(t)), n || n !== !1 && dn(t.url))) {
    const f = s && o && pn.read(o);
    f && i.set(s, f);
  }
  return t;
}, En = typeof XMLHttpRequest < "u", bn = En && function(e) {
  return new Promise(function(r, n) {
    const s = Nt(e);
    let o = s.data;
    const i = k.from(s.headers).normalize();
    let { responseType: c, onUploadProgress: d, onDownloadProgress: f } = s, u, p, g, T, h;
    function E() {
      T && T(), h && h(), s.cancelToken && s.cancelToken.unsubscribe(u), s.signal && s.signal.removeEventListener("abort", u);
    }
    let m = new XMLHttpRequest();
    m.open(s.method.toUpperCase(), s.url, !0), m.timeout = s.timeout;
    function y() {
      if (!m)
        return;
      const x = k.from(
        "getAllResponseHeaders" in m && m.getAllResponseHeaders()
      ), _ = {
        data: !c || c === "text" || c === "json" ? m.responseText : m.response,
        status: m.status,
        statusText: m.statusText,
        headers: x,
        config: e,
        request: m
      };
      xt(function(v) {
        r(v), E();
      }, function(v) {
        n(v), E();
      }, _), m = null;
    }
    "onloadend" in m ? m.onloadend = y : m.onreadystatechange = function() {
      !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(y);
    }, m.onabort = function() {
      m && (n(new b("Request aborted", b.ECONNABORTED, e, m)), m = null);
    }, m.onerror = function() {
      n(new b("Network Error", b.ERR_NETWORK, e, m)), m = null;
    }, m.ontimeout = function() {
      let j = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const _ = s.transitional || St;
      s.timeoutErrorMessage && (j = s.timeoutErrorMessage), n(new b(
        j,
        _.clarifyTimeoutError ? b.ETIMEDOUT : b.ECONNABORTED,
        e,
        m
      )), m = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in m && a.forEach(i.toJSON(), function(j, _) {
      m.setRequestHeader(_, j);
    }), a.isUndefined(s.withCredentials) || (m.withCredentials = !!s.withCredentials), c && c !== "json" && (m.responseType = s.responseType), f && ([g, h] = ae(f, !0), m.addEventListener("progress", g)), d && m.upload && ([p, T] = ae(d), m.upload.addEventListener("progress", p), m.upload.addEventListener("loadend", T)), (s.cancelToken || s.signal) && (u = (x) => {
      m && (n(!x || x.type ? new G(null, e, m) : x), m.abort(), m = null);
    }, s.cancelToken && s.cancelToken.subscribe(u), s.signal && (s.signal.aborted ? u() : s.signal.addEventListener("abort", u)));
    const O = un(s.url);
    if (O && C.protocols.indexOf(O) === -1) {
      n(new b("Unsupported protocol " + O + ":", b.ERR_BAD_REQUEST, e));
      return;
    }
    m.send(o || null);
  });
}, Rn = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), s;
    const o = function(f) {
      if (!s) {
        s = !0, c();
        const u = f instanceof Error ? f : this.reason;
        n.abort(u instanceof b ? u : new G(u instanceof Error ? u.message : u));
      }
    };
    let i = t && setTimeout(() => {
      i = null, o(new b(`timeout ${t} of ms exceeded`, b.ETIMEDOUT));
    }, t);
    const c = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((f) => {
        f.unsubscribe ? f.unsubscribe(o) : f.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((f) => f.addEventListener("abort", o));
    const { signal: d } = n;
    return d.unsubscribe = () => a.asap(c), d;
  }
}, gn = function* (e, t) {
  let r = e.byteLength;
  if (r < t) {
    yield e;
    return;
  }
  let n = 0, s;
  for (; n < r; )
    s = n + t, yield e.slice(n, s), n = s;
}, yn = async function* (e, t) {
  for await (const r of wn(e))
    yield* gn(r, t);
}, wn = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: r, value: n } = await t.read();
      if (r)
        break;
      yield n;
    }
  } finally {
    await t.cancel();
  }
}, et = (e, t, r, n) => {
  const s = yn(e, t);
  let o = 0, i, c = (d) => {
    i || (i = !0, n && n(d));
  };
  return new ReadableStream({
    async pull(d) {
      try {
        const { done: f, value: u } = await s.next();
        if (f) {
          c(), d.close();
          return;
        }
        let p = u.byteLength;
        if (r) {
          let g = o += p;
          r(g);
        }
        d.enqueue(new Uint8Array(u));
      } catch (f) {
        throw c(f), f;
      }
    },
    cancel(d) {
      return c(d), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, be = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Pt = be && typeof ReadableStream == "function", Tn = be && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Ct = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Sn = Pt && Ct(() => {
  let e = !1;
  const t = new Request(C.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), tt = 64 * 1024, Le = Pt && Ct(() => a.isReadableStream(new Response("").body)), ce = {
  stream: Le && ((e) => e.body)
};
be && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !ce[t] && (ce[t] = a.isFunction(e[t]) ? (r) => r[t]() : (r, n) => {
      throw new b(`Response type '${t}' is not supported`, b.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const On = async (e) => {
  if (e == null)
    return 0;
  if (a.isBlob(e))
    return e.size;
  if (a.isSpecCompliantForm(e))
    return (await new Request(C.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (a.isArrayBufferView(e) || a.isArrayBuffer(e))
    return e.byteLength;
  if (a.isURLSearchParams(e) && (e = e + ""), a.isString(e))
    return (await Tn(e)).byteLength;
}, An = async (e, t) => {
  const r = a.toFiniteNumber(e.getContentLength());
  return r ?? On(t);
}, xn = be && (async (e) => {
  let {
    url: t,
    method: r,
    data: n,
    signal: s,
    cancelToken: o,
    timeout: i,
    onDownloadProgress: c,
    onUploadProgress: d,
    responseType: f,
    headers: u,
    withCredentials: p = "same-origin",
    fetchOptions: g
  } = Nt(e);
  f = f ? (f + "").toLowerCase() : "text";
  let T = Rn([s, o && o.toAbortSignal()], i), h;
  const E = T && T.unsubscribe && (() => {
    T.unsubscribe();
  });
  let m;
  try {
    if (d && Sn && r !== "get" && r !== "head" && (m = await An(u, n)) !== 0) {
      let _ = new Request(t, {
        method: "POST",
        body: n,
        duplex: "half"
      }), U;
      if (a.isFormData(n) && (U = _.headers.get("content-type")) && u.setContentType(U), _.body) {
        const [v, $] = Xe(
          m,
          ae(Ze(d))
        );
        n = et(_.body, tt, v, $);
      }
    }
    a.isString(p) || (p = p ? "include" : "omit");
    const y = "credentials" in Request.prototype;
    h = new Request(t, {
      ...g,
      signal: T,
      method: r.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: y ? p : void 0
    });
    let O = await fetch(h, g);
    const x = Le && (f === "stream" || f === "response");
    if (Le && (c || x && E)) {
      const _ = {};
      ["status", "statusText", "headers"].forEach((re) => {
        _[re] = O[re];
      });
      const U = a.toFiniteNumber(O.headers.get("content-length")), [v, $] = c && Xe(
        U,
        ae(Ze(c), !0)
      ) || [];
      O = new Response(
        et(O.body, tt, v, () => {
          $ && $(), E && E();
        }),
        _
      );
    }
    f = f || "text";
    let j = await ce[a.findKey(ce, f) || "text"](O, e);
    return !x && E && E(), await new Promise((_, U) => {
      xt(_, U, {
        data: j,
        headers: k.from(O.headers),
        status: O.status,
        statusText: O.statusText,
        config: e,
        request: h
      });
    });
  } catch (y) {
    throw E && E(), y && y.name === "TypeError" && /Load failed|fetch/i.test(y.message) ? Object.assign(
      new b("Network Error", b.ERR_NETWORK, e, h),
      {
        cause: y.cause || y
      }
    ) : b.from(y, y && y.code, e, h);
  }
}), ke = {
  http: Mr,
  xhr: bn,
  fetch: xn
};
a.forEach(ke, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const rt = (e) => `- ${e}`, _n = (e) => a.isFunction(e) || e === null || e === !1, Lt = {
  getAdapter: (e) => {
    e = a.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const s = {};
    for (let o = 0; o < t; o++) {
      r = e[o];
      let i;
      if (n = r, !_n(r) && (n = ke[(i = String(r)).toLowerCase()], n === void 0))
        throw new b(`Unknown adapter '${i}'`);
      if (n)
        break;
      s[i || "#" + o] = n;
    }
    if (!n) {
      const o = Object.entries(s).map(
        ([c, d]) => `adapter ${c} ` + (d === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? o.length > 1 ? `since :
` + o.map(rt).join(`
`) : " " + rt(o[0]) : "as no adapter specified";
      throw new b(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: ke
};
function xe(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new G(null, e);
}
function nt(e) {
  return xe(e), e.headers = k.from(e.headers), e.data = Ae.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Lt.getAdapter(e.adapter || te.adapter)(e).then(function(n) {
    return xe(e), n.data = Ae.call(
      e,
      e.transformResponse,
      n
    ), n.headers = k.from(n.headers), n;
  }, function(n) {
    return At(n) || (xe(e), n && n.response && (n.response.data = Ae.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = k.from(n.response.headers))), Promise.reject(n);
  });
}
const kt = "1.10.0", Re = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Re[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const st = {};
Re.transitional = function(t, r, n) {
  function s(o, i) {
    return "[Axios v" + kt + "] Transitional option '" + o + "'" + i + (n ? ". " + n : "");
  }
  return (o, i, c) => {
    if (t === !1)
      throw new b(
        s(i, " has been removed" + (r ? " in " + r : "")),
        b.ERR_DEPRECATED
      );
    return r && !st[i] && (st[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(o, i, c) : !0;
  };
};
Re.spelling = function(t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function Nn(e, t, r) {
  if (typeof e != "object")
    throw new b("options must be an object", b.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let s = n.length;
  for (; s-- > 0; ) {
    const o = n[s], i = t[o];
    if (i) {
      const c = e[o], d = c === void 0 || i(c, o, e);
      if (d !== !0)
        throw new b("option " + o + " must be " + d, b.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new b("Unknown option " + o, b.ERR_BAD_OPTION);
  }
}
const ie = {
  assertOptions: Nn,
  validators: Re
}, I = ie.validators;
let J = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Ge(),
      response: new Ge()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (n) {
      if (n instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
        const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? o && !String(n.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + o) : n.stack = o;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = V(this.defaults, r);
    const { transitional: n, paramsSerializer: s, headers: o } = r;
    n !== void 0 && ie.assertOptions(n, {
      silentJSONParsing: I.transitional(I.boolean),
      forcedJSONParsing: I.transitional(I.boolean),
      clarifyTimeoutError: I.transitional(I.boolean)
    }, !1), s != null && (a.isFunction(s) ? r.paramsSerializer = {
      serialize: s
    } : ie.assertOptions(s, {
      encode: I.function,
      serialize: I.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), ie.assertOptions(r, {
      baseUrl: I.spelling("baseURL"),
      withXsrfToken: I.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let i = o && a.merge(
      o.common,
      o[r.method]
    );
    o && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete o[h];
      }
    ), r.headers = k.concat(i, o);
    const c = [];
    let d = !0;
    this.interceptors.request.forEach(function(E) {
      typeof E.runWhen == "function" && E.runWhen(r) === !1 || (d = d && E.synchronous, c.unshift(E.fulfilled, E.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function(E) {
      f.push(E.fulfilled, E.rejected);
    });
    let u, p = 0, g;
    if (!d) {
      const h = [nt.bind(this), void 0];
      for (h.unshift.apply(h, c), h.push.apply(h, f), g = h.length, u = Promise.resolve(r); p < g; )
        u = u.then(h[p++], h[p++]);
      return u;
    }
    g = c.length;
    let T = r;
    for (p = 0; p < g; ) {
      const h = c[p++], E = c[p++];
      try {
        T = h(T);
      } catch (m) {
        E.call(this, m);
        break;
      }
    }
    try {
      u = nt.call(this, T);
    } catch (h) {
      return Promise.reject(h);
    }
    for (p = 0, g = f.length; p < g; )
      u = u.then(f[p++], f[p++]);
    return u;
  }
  getUri(t) {
    t = V(this.defaults, t);
    const r = _t(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Tt(r, t.params, t.paramsSerializer);
  }
};
a.forEach(["delete", "get", "head", "options"], function(t) {
  J.prototype[t] = function(r, n) {
    return this.request(V(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(o, i, c) {
      return this.request(V(c || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  J.prototype[t] = r(), J.prototype[t + "Form"] = r(!0);
});
let Pn = class jt {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(o) {
      r = o;
    });
    const n = this;
    this.promise.then((s) => {
      if (!n._listeners) return;
      let o = n._listeners.length;
      for (; o-- > 0; )
        n._listeners[o](s);
      n._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const i = new Promise((c) => {
        n.subscribe(c), o = c;
      }).then(s);
      return i.cancel = function() {
        n.unsubscribe(o);
      }, i;
    }, t(function(o, i, c) {
      n.reason || (n.reason = new G(o, i, c), r(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), r = (n) => {
      t.abort(n);
    };
    return this.subscribe(r), t.signal.unsubscribe = () => this.unsubscribe(r), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new jt(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
};
function Cn(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function Ln(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const je = {
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
  NetworkAuthenticationRequired: 511
};
Object.entries(je).forEach(([e, t]) => {
  je[t] = e;
});
function Dt(e) {
  const t = new J(e), r = lt(J.prototype.request, t);
  return a.extend(r, J.prototype, t, { allOwnKeys: !0 }), a.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(s) {
    return Dt(V(e, s));
  }, r;
}
const S = Dt(te);
S.Axios = J;
S.CanceledError = G;
S.CancelToken = Pn;
S.isCancel = At;
S.VERSION = kt;
S.toFormData = Ee;
S.AxiosError = b;
S.Cancel = S.CanceledError;
S.all = function(t) {
  return Promise.all(t);
};
S.spread = Cn;
S.isAxiosError = Ln;
S.mergeConfig = V;
S.AxiosHeaders = k;
S.formToJSON = (e) => Ot(a.isHTMLForm(e) ? new FormData(e) : e);
S.getAdapter = Lt.getAdapter;
S.HttpStatusCode = je;
S.default = S;
const {
  Axios: os,
  AxiosError: is,
  CanceledError: as,
  isCancel: cs,
  CancelToken: us,
  VERSION: ls,
  all: fs,
  Cancel: ds,
  isAxiosError: ps,
  spread: hs,
  toFormData: ms,
  AxiosHeaders: Es,
  HttpStatusCode: bs,
  formToJSON: Rs,
  getAdapter: gs,
  mergeConfig: ys
} = S;
class M {
  isError = !1;
  isSuccess = !1;
  status = W.INTERNAL_SERVER_ERROR;
  statusMessage = "";
  data;
  constructor() {
  }
  static getSucessInstance(t) {
    const r = new M();
    return r.isSuccess = !0, r.isError = !1, r.status = t.status, r.statusMessage = t.statusMessage, r.data = t.data, r;
  }
  static getErrorInstance(t) {
    const r = new M();
    return r.isSuccess = !1, r.isError = !0, r.status = t.status, r.statusMessage = t.statusMessage, r;
  }
  static success(t) {
    return M.getSucessInstance(t);
  }
  static error(t) {
    return M.getErrorInstance(t);
  }
}
class kn {
  baseUrl;
  literal;
  constructor(t, r) {
    this.baseUrl = t, this.literal = r;
  }
  async request(t) {
    try {
      const r = await S(t), n = {
        status: r.status,
        statusMessage: r.statusText,
        data: r.data
      };
      return M.success(n);
    } catch (r) {
      if (console.log(r), S.isAxiosError(r)) {
        const n = r, s = n.response?.status || W.INTERNAL_SERVER_ERROR, o = n.message || this.literal.internal_server_error, i = {
          status: s,
          statusMessage: o
        };
        return M.error(i);
      } else
        return M.error({
          status: W.INTERNAL_SERVER_ERROR,
          statusMessage: this.literal.internal_server_error
        });
    }
  }
  async get(t, r) {
    return this.request({
      ...r,
      url: `${this.baseUrl}/${t}`,
      method: "GET"
      /* GET */
    });
  }
  async post(t, r, n) {
    return this.request({
      ...n,
      url: `${this.baseUrl}/${t}`,
      method: "POST",
      data: r
    });
  }
  async put(t, r, n) {
    return this.request({
      ...n,
      url: `${this.baseUrl}/${t}`,
      method: "PUT",
      data: r
    });
  }
  async delete(t, r) {
    return this.request({
      ...r,
      url: `${this.baseUrl}/${t}`,
      method: "DELETE"
      /* DELETE */
    });
  }
}
const _e = /* @__PURE__ */ new Map(), ws = (e, t) => {
  if (_e.has(e))
    return _e.get(e);
  const r = new kn(e, t);
  return _e.set(e, r), r;
}, Ut = ot(
  {}
);
function Ts() {
  return it(Ut);
}
function Ss({ children: e, lightTheme: t, darkTheme: r }) {
  const [n, s] = ue(() => typeof window < "u" ? localStorage.getItem("darkMode") === "true" : !1), o = () => {
    const c = !n;
    s(c), localStorage.setItem("darkMode", String(c));
  }, i = at(() => n ? r : t, [n, t, r]);
  return /* @__PURE__ */ A.jsx(Ut.Provider, { value: { darkMode: n, toggleDarkMode: o }, children: /* @__PURE__ */ A.jsxs(Vt, { theme: i, children: [
    /* @__PURE__ */ A.jsx(Ht, {}),
    e
  ] }) });
}
export {
  kn as ApiService,
  W as HttpStatusCode,
  ut as LanguageContext,
  rs as LanguageProvider,
  ts as LanguageSelector,
  Zn as PageStateWrapper,
  q as StateType,
  Ut as ThemeContext,
  Ss as ThemeProvider,
  Xn as drawerWidth,
  ws as getApiService,
  Qn as getStatusMessage,
  es as useDataState,
  fe as useLanguage,
  Ts as useTheme
};
