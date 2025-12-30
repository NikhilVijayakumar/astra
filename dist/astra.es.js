import It, { createContext as st, useContext as ot, useState as Z, useEffect as Bt, useMemo as Mt } from "react";
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
import { Box as ue, CircularProgress as qt, Typography as it, Alert as $t, Button as zt, Menu as Vt, MenuItem as Jt, ThemeProvider as Ht, CssBaseline as Wt } from "@mui/material";
import Yt from "@mui/icons-material/Language";
var ne = { exports: {} }, G = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qe;
function Gt() {
  if (qe) return G;
  qe = 1;
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
  return G.Fragment = t, G.jsx = r, G.jsxs = r, G;
}
var K = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function Kt() {
  return $e || ($e = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u) {
      if (u == null) return null;
      if (typeof u == "function")
        return u.$$typeof === Ut ? null : u.displayName || u.name || null;
      if (typeof u == "string") return u;
      switch (u) {
        case m:
          return "Fragment";
        case O:
          return "Profiler";
        case w:
          return "StrictMode";
        case U:
          return "Suspense";
        case v:
          return "SuspenseList";
        case Dt:
          return "Activity";
      }
      if (typeof u == "object")
        switch (typeof u.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), u.$$typeof) {
          case E:
            return "Portal";
          case j:
            return u.displayName || "Context";
          case _:
            return (u._context.displayName || "Context") + ".Consumer";
          case P:
            var R = u.render;
            return u = u.displayName, u || (u = R.displayName || R.name || "", u = u !== "" ? "ForwardRef(" + u + ")" : "ForwardRef"), u;
          case z:
            return R = u.displayName || null, R !== null ? R : e(u.type) || "Memo";
          case V:
            R = u._payload, u = u._init;
            try {
              return e(u(R));
            } catch {
            }
        }
      return null;
    }
    function t(u) {
      return "" + u;
    }
    function r(u) {
      try {
        t(u);
        var R = !1;
      } catch {
        R = !0;
      }
      if (R) {
        R = console;
        var S = R.error, x = typeof Symbol == "function" && Symbol.toStringTag && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return S.call(
          R,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          x
        ), t(u);
      }
    }
    function n(u) {
      if (u === m) return "<>";
      if (typeof u == "object" && u !== null && u.$$typeof === V)
        return "<...>";
      try {
        var R = e(u);
        return R ? "<" + R + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var u = Re.A;
      return u === null ? null : u.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(u) {
      if (Ue.call(u, "key")) {
        var R = Object.getOwnPropertyDescriptor(u, "key").get;
        if (R && R.isReactWarning) return !1;
      }
      return u.key !== void 0;
    }
    function c(u, R) {
      function S() {
        Fe || (Fe = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          R
        ));
      }
      S.isReactWarning = !0, Object.defineProperty(u, "key", {
        get: S,
        configurable: !0
      });
    }
    function d() {
      var u = e(this.type);
      return ve[u] || (ve[u] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), u = this.props.ref, u !== void 0 ? u : null;
    }
    function f(u, R, S, x, re, ge) {
      var N = S.ref;
      return u = {
        $$typeof: p,
        type: u,
        key: R,
        props: S,
        _owner: x
      }, (N !== void 0 ? N : null) !== null ? Object.defineProperty(u, "ref", {
        enumerable: !1,
        get: d
      }) : Object.defineProperty(u, "ref", { enumerable: !1, value: null }), u._store = {}, Object.defineProperty(u._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(u, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(u, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: re
      }), Object.defineProperty(u, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ge
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    }
    function l(u, R, S, x, re, ge) {
      var N = R.children;
      if (N !== void 0)
        if (x)
          if (Ft(N)) {
            for (x = 0; x < N.length; x++)
              h(N[x]);
            Object.freeze && Object.freeze(N);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(N);
      if (Ue.call(R, "key")) {
        N = e(u);
        var J = Object.keys(R).filter(function(vt) {
          return vt !== "key";
        });
        x = 0 < J.length ? "{key: someKey, " + J.join(": ..., ") + ": ...}" : "{key: someKey}", Me[N + x] || (J = 0 < J.length ? "{" + J.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          x,
          N,
          J,
          N
        ), Me[N + x] = !0);
      }
      if (N = null, S !== void 0 && (r(S), N = "" + S), i(R) && (r(R.key), N = "" + R.key), "key" in R) {
        S = {};
        for (var we in R)
          we !== "key" && (S[we] = R[we]);
      } else S = R;
      return N && c(
        S,
        typeof u == "function" ? u.displayName || u.name || "Unknown" : u
      ), f(
        u,
        N,
        S,
        s(),
        re,
        ge
      );
    }
    function h(u) {
      y(u) ? u._store && (u._store.validated = 1) : typeof u == "object" && u !== null && u.$$typeof === V && (u._payload.status === "fulfilled" ? y(u._payload.value) && u._payload.value._store && (u._payload.value._store.validated = 1) : u._store && (u._store.validated = 1));
    }
    function y(u) {
      return typeof u == "object" && u !== null && u.$$typeof === p;
    }
    var g = It, p = Symbol.for("react.transitional.element"), E = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), _ = Symbol.for("react.consumer"), j = Symbol.for("react.context"), P = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), V = Symbol.for("react.lazy"), Dt = Symbol.for("react.activity"), Ut = Symbol.for("react.client.reference"), Re = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ue = Object.prototype.hasOwnProperty, Ft = Array.isArray, ye = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(u) {
        return u();
      }
    };
    var Fe, ve = {}, Ie = g.react_stack_bottom_frame.bind(
      g,
      o
    )(), Be = ye(n(o)), Me = {};
    K.Fragment = m, K.jsx = function(u, R, S) {
      var x = 1e4 > Re.recentlyCreatedOwnerStacks++;
      return l(
        u,
        R,
        S,
        !1,
        x ? Error("react-stack-top-frame") : Ie,
        x ? ye(n(u)) : Be
      );
    }, K.jsxs = function(u, R, S) {
      var x = 1e4 > Re.recentlyCreatedOwnerStacks++;
      return l(
        u,
        R,
        S,
        !0,
        x ? Error("react-stack-top-frame") : Ie,
        x ? ye(n(u)) : Be
      );
    };
  }()), K;
}
var ze;
function Xt() {
  return ze || (ze = 1, process.env.NODE_ENV === "production" ? ne.exports = Gt() : ne.exports = Kt()), ne.exports;
}
var A = Xt();
const Xn = 240;
var H = /* @__PURE__ */ ((e) => (e[e.INIT = 0] = "INIT", e[e.LOADING = 1] = "LOADING", e[e.COMPLETED = 2] = "COMPLETED", e))(H || {}), q = /* @__PURE__ */ ((e) => (e[e.SUCCESS = 200] = "SUCCESS", e[e.CREATED = 201] = "CREATED", e[e.BAD_REQUEST = 400] = "BAD_REQUEST", e[e.UNAUTHORIZED = 401] = "UNAUTHORIZED", e[e.NOT_FOUND = 404] = "NOT_FOUND", e[e.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", e[e.INTERNET_ERROR = 0] = "INTERNET_ERROR", e[e.IDLE = 1e3] = "IDLE", e))(q || {});
function Zn(e, t) {
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
const at = st(
  void 0
);
function le() {
  const e = ot(at);
  if (!e)
    throw new Error("useLanguage must be used within a AstraLanguageProvider");
  return e;
}
const Zt = () => {
  const { literal: e } = le();
  return /* @__PURE__ */ A.jsxs(
    ue,
    {
      sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: 4,
        mt: 8
      },
      children: [
        /* @__PURE__ */ A.jsx(qt, { sx: { mb: 2 } }),
        /* @__PURE__ */ A.jsx(it, { variant: "h6", component: "div", children: e.loading_message })
      ]
    }
  );
}, Qt = ({ message: e }) => {
  const { literal: t } = le(), r = e || t.unknown_message;
  return /* @__PURE__ */ A.jsx(ue, { sx: { p: 4, textAlign: "center", mt: 8 }, children: /* @__PURE__ */ A.jsx($t, { severity: "error", children: r }) });
}, Ve = () => {
  const { literal: e } = le();
  return /* @__PURE__ */ A.jsx(ue, { sx: { p: 4, textAlign: "center", mt: 8 }, children: /* @__PURE__ */ A.jsx(it, { variant: "h6", children: e.no_data_found }) });
}, Qn = ({
  appState: e,
  SuccessComponent: t,
  emptyCondition: r,
  errorMessage: n
}) => {
  const { state: s, isError: o, isSuccess: i, data: c, status: d } = e;
  return s === H.LOADING ? /* @__PURE__ */ A.jsx(Zt, {}) : o || d === q.INTERNET_ERROR ? /* @__PURE__ */ A.jsx(Qt, { message: n }) : i && c !== null ? r?.(c) ? /* @__PURE__ */ A.jsx(Ve, {}) : /* @__PURE__ */ A.jsx(t, { appState: e }) : /* @__PURE__ */ A.jsx(Ve, {});
}, er = () => ({
  state: H.INIT,
  isError: !1,
  isSuccess: !1,
  status: q.IDLE,
  statusMessage: "",
  data: null
});
function es(e = {}) {
  const [t, r] = Z({
    ...er(),
    ...e
  });
  return [t, async (s) => {
    r((o) => ({ ...o, state: H.LOADING }));
    try {
      const o = await s();
      r((i) => ({
        ...i,
        state: H.COMPLETED,
        isError: o.isError,
        isSuccess: o.isSuccess,
        status: o.status,
        statusMessage: o.statusMessage,
        data: o.data || null
      }));
    } catch {
      r((i) => ({
        ...i,
        state: H.COMPLETED,
        isError: !0,
        status: q.INTERNAL_SERVER_ERROR,
        statusMessage: "An unexpected error occurred.",
        data: null
      }));
    }
  }, r];
}
const ts = () => {
  const { currentLanguage: e, setCurrentLanguage: t, availableLanguages: r } = le(), [n, s] = Z(null), o = !!n, i = (l) => {
    s(l.currentTarget);
  }, c = () => {
    s(null);
  }, d = (l) => {
    t(l), c();
  }, f = r.find((l) => l.code === e)?.label || "Language";
  return /* @__PURE__ */ A.jsxs(ue, { children: [
    /* @__PURE__ */ A.jsx(
      zt,
      {
        id: "language-button",
        "aria-controls": o ? "language-menu" : void 0,
        "aria-haspopup": "true",
        "aria-expanded": o ? "true" : void 0,
        onClick: i,
        startIcon: /* @__PURE__ */ A.jsx(Yt, {}),
        color: "inherit",
        children: f
      }
    ),
    /* @__PURE__ */ A.jsx(
      Vt,
      {
        id: "language-menu",
        anchorEl: n,
        open: o,
        onClose: c,
        "aria-labelledby": "language-button",
        children: r.map((l) => /* @__PURE__ */ A.jsx(
          Jt,
          {
            selected: l.code === e,
            onClick: () => d(l.code),
            children: l.label
          },
          l.code
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
  const [s, o] = Z(n), [i, c] = Z(t[n] || {});
  Bt(() => {
    c(t[s] || {});
  }, [s, t]);
  const d = {
    currentLanguage: s,
    setCurrentLanguage: o,
    literal: i,
    availableLanguages: r
  };
  return /* @__PURE__ */ A.jsx(at.Provider, { value: d, children: e });
}
function ct(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: tr } = Object.prototype, { getPrototypeOf: Le } = Object, { iterator: fe, toStringTag: ut } = Symbol, de = /* @__PURE__ */ ((e) => (t) => {
  const r = tr.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), D = (e) => (e = e.toLowerCase(), (t) => de(t) === e), pe = (e) => (t) => typeof t === e, { isArray: W } = Array, Q = pe("undefined");
function rr(e) {
  return e !== null && !Q(e) && e.constructor !== null && !Q(e.constructor) && k(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const lt = D("ArrayBuffer");
function nr(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && lt(e.buffer), t;
}
const sr = pe("string"), k = pe("function"), ft = pe("number"), he = (e) => e !== null && typeof e == "object", or = (e) => e === !0 || e === !1, se = (e) => {
  if (de(e) !== "object")
    return !1;
  const t = Le(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(ut in e) && !(fe in e);
}, ir = D("Date"), ar = D("File"), cr = D("Blob"), ur = D("FileList"), lr = (e) => he(e) && k(e.pipe), fr = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || k(e.append) && ((t = de(e)) === "formdata" || // detect form-data instance
  t === "object" && k(e.toString) && e.toString() === "[object FormData]"));
}, dr = D("URLSearchParams"), [pr, hr, mr, Er] = ["ReadableStream", "Request", "Response", "Headers"].map(D), br = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ee(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, s;
  if (typeof e != "object" && (e = [e]), W(e))
    for (n = 0, s = e.length; n < s; n++)
      t.call(null, e[n], n, e);
  else {
    const o = r ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let c;
    for (n = 0; n < i; n++)
      c = o[n], t.call(null, e[c], c, e);
  }
}
function dt(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, s;
  for (; n-- > 0; )
    if (s = r[n], t === s.toLowerCase())
      return s;
  return null;
}
const B = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, pt = (e) => !Q(e) && e !== B;
function _e() {
  const { caseless: e } = pt(this) && this || {}, t = {}, r = (n, s) => {
    const o = e && dt(t, s) || s;
    se(t[o]) && se(n) ? t[o] = _e(t[o], n) : se(n) ? t[o] = _e({}, n) : W(n) ? t[o] = n.slice() : t[o] = n;
  };
  for (let n = 0, s = arguments.length; n < s; n++)
    arguments[n] && ee(arguments[n], r);
  return t;
}
const Rr = (e, t, r, { allOwnKeys: n } = {}) => (ee(t, (s, o) => {
  r && k(s) ? e[o] = ct(s, r) : e[o] = s;
}, { allOwnKeys: n }), e), yr = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), gr = (e, t, r, n) => {
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
    e = r !== !1 && Le(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, Sr = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, Tr = (e) => {
  if (!e) return null;
  if (W(e)) return e;
  let t = e.length;
  if (!ft(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, Or = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Le(Uint8Array)), Ar = (e, t) => {
  const n = (e && e[fe]).call(e);
  let s;
  for (; (s = n.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, _r = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, xr = D("HTMLFormElement"), Nr = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, s) {
    return n.toUpperCase() + s;
  }
), Je = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), Pr = D("RegExp"), ht = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  ee(r, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (n[o] = i || s);
  }), Object.defineProperties(e, n);
}, Cr = (e) => {
  ht(e, (t, r) => {
    if (k(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (k(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, kr = (e, t) => {
  const r = {}, n = (s) => {
    s.forEach((o) => {
      r[o] = !0;
    });
  };
  return W(e) ? n(e) : n(String(e).split(t)), r;
}, Lr = () => {
}, jr = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Dr(e) {
  return !!(e && k(e.append) && e[ut] === "FormData" && e[fe]);
}
const Ur = (e) => {
  const t = new Array(10), r = (n, s) => {
    if (he(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[s] = n;
        const o = W(n) ? [] : {};
        return ee(n, (i, c) => {
          const d = r(i, s + 1);
          !Q(d) && (o[c] = d);
        }), t[s] = void 0, o;
      }
    }
    return n;
  };
  return r(e, 0);
}, Fr = D("AsyncFunction"), vr = (e) => e && (he(e) || k(e)) && k(e.then) && k(e.catch), mt = ((e, t) => e ? setImmediate : t ? ((r, n) => (B.addEventListener("message", ({ source: s, data: o }) => {
  s === B && o === r && n.length && n.shift()();
}, !1), (s) => {
  n.push(s), B.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  k(B.postMessage)
), Ir = typeof queueMicrotask < "u" ? queueMicrotask.bind(B) : typeof process < "u" && process.nextTick || mt, Br = (e) => e != null && k(e[fe]), a = {
  isArray: W,
  isArrayBuffer: lt,
  isBuffer: rr,
  isFormData: fr,
  isArrayBufferView: nr,
  isString: sr,
  isNumber: ft,
  isBoolean: or,
  isObject: he,
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
  isFunction: k,
  isStream: lr,
  isURLSearchParams: dr,
  isTypedArray: Or,
  isFileList: ur,
  forEach: ee,
  merge: _e,
  extend: Rr,
  trim: br,
  stripBOM: yr,
  inherits: gr,
  toFlatObject: wr,
  kindOf: de,
  kindOfTest: D,
  endsWith: Sr,
  toArray: Tr,
  forEachEntry: Ar,
  matchAll: _r,
  isHTMLForm: xr,
  hasOwnProperty: Je,
  hasOwnProp: Je,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: ht,
  freezeMethods: Cr,
  toObjectSet: kr,
  toCamelCase: Nr,
  noop: Lr,
  toFiniteNumber: jr,
  findKey: dt,
  global: B,
  isContextDefined: pt,
  isSpecCompliantForm: Dr,
  toJSONObject: Ur,
  isAsyncFn: Fr,
  isThenable: vr,
  setImmediate: mt,
  asap: Ir,
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
const Et = b.prototype, bt = {};
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
  bt[e] = { value: e };
});
Object.defineProperties(b, bt);
Object.defineProperty(Et, "isAxiosError", { value: !0 });
b.from = (e, t, r, n, s, o) => {
  const i = Object.create(Et);
  return a.toFlatObject(e, i, function(d) {
    return d !== Error.prototype;
  }, (c) => c !== "isAxiosError"), b.call(i, e.message, t, r, n, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const Mr = null;
function xe(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function Rt(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function He(e, t, r) {
  return e ? e.concat(t).map(function(s, o) {
    return s = Rt(s), !r && o ? "[" + s + "]" : s;
  }).join(r ? "." : "") : t;
}
function qr(e) {
  return a.isArray(e) && !e.some(xe);
}
const $r = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function me(e, t, r) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = a.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(E, m) {
    return !a.isUndefined(m[E]);
  });
  const n = r.metaTokens, s = r.visitor || l, o = r.dots, i = r.indexes, d = (r.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function f(p) {
    if (p === null) return "";
    if (a.isDate(p))
      return p.toISOString();
    if (a.isBoolean(p))
      return p.toString();
    if (!d && a.isBlob(p))
      throw new b("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(p) || a.isTypedArray(p) ? d && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function l(p, E, m) {
    let w = p;
    if (p && !m && typeof p == "object") {
      if (a.endsWith(E, "{}"))
        E = n ? E : E.slice(0, -2), p = JSON.stringify(p);
      else if (a.isArray(p) && qr(p) || (a.isFileList(p) || a.endsWith(E, "[]")) && (w = a.toArray(p)))
        return E = Rt(E), w.forEach(function(_, j) {
          !(a.isUndefined(_) || _ === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? He([E], j, o) : i === null ? E : E + "[]",
            f(_)
          );
        }), !1;
    }
    return xe(p) ? !0 : (t.append(He(m, E, o), f(p)), !1);
  }
  const h = [], y = Object.assign($r, {
    defaultVisitor: l,
    convertValue: f,
    isVisitable: xe
  });
  function g(p, E) {
    if (!a.isUndefined(p)) {
      if (h.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + E.join("."));
      h.push(p), a.forEach(p, function(w, O) {
        (!(a.isUndefined(w) || w === null) && s.call(
          t,
          w,
          a.isString(O) ? O.trim() : O,
          E,
          y
        )) === !0 && g(w, E ? E.concat(O) : [O]);
      }), h.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return g(e), t;
}
function We(e) {
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
function je(e, t) {
  this._pairs = [], e && me(e, this, t);
}
const yt = je.prototype;
yt.append = function(t, r) {
  this._pairs.push([t, r]);
};
yt.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, We);
  } : We;
  return this._pairs.map(function(s) {
    return r(s[0]) + "=" + r(s[1]);
  }, "").join("&");
};
function zr(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function gt(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || zr;
  a.isFunction(r) && (r = {
    serialize: r
  });
  const s = r && r.serialize;
  let o;
  if (s ? o = s(t, r) : o = a.isURLSearchParams(t) ? t.toString() : new je(t, r).toString(n), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class Ye {
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
const wt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Vr = typeof URLSearchParams < "u" ? URLSearchParams : je, Jr = typeof FormData < "u" ? FormData : null, Hr = typeof Blob < "u" ? Blob : null, Wr = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Vr,
    FormData: Jr,
    Blob: Hr
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, De = typeof window < "u" && typeof document < "u", Ne = typeof navigator == "object" && navigator || void 0, Yr = De && (!Ne || ["ReactNative", "NativeScript", "NS"].indexOf(Ne.product) < 0), Gr = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Kr = De && window.location.href || "http://localhost", Xr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: De,
  hasStandardBrowserEnv: Yr,
  hasStandardBrowserWebWorkerEnv: Gr,
  navigator: Ne,
  origin: Kr
}, Symbol.toStringTag, { value: "Module" })), C = {
  ...Xr,
  ...Wr
};
function Zr(e, t) {
  return me(e, new C.classes.URLSearchParams(), Object.assign({
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
function St(e) {
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
  transitional: wt,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", s = n.indexOf("application/json") > -1, o = a.isObject(t);
    if (o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return s ? JSON.stringify(St(t)) : t;
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
        return me(
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
}, Ge = Symbol("internals");
function X(e) {
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
function Se(e, t, r, n, s) {
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
let L = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const s = this;
    function o(c, d, f) {
      const l = X(d);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const h = a.findKey(s, l);
      (!h || s[h] === void 0 || f === !0 || f === void 0 && s[h] !== !1) && (s[h || d] = oe(c));
    }
    const i = (c, d) => a.forEach(c, (f, l) => o(f, l, d));
    if (a.isPlainObject(t) || t instanceof this.constructor)
      i(t, r);
    else if (a.isString(t) && (t = t.trim()) && !on(t))
      i(nn(t), r);
    else if (a.isObject(t) && a.isIterable(t)) {
      let c = {}, d, f;
      for (const l of t) {
        if (!a.isArray(l))
          throw TypeError("Object iterator must return a key-value pair");
        c[f = l[0]] = (d = c[f]) ? a.isArray(d) ? [...d, l[1]] : [d, l[1]] : l[1];
      }
      i(c, r);
    } else
      t != null && o(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = X(t), t) {
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
    if (t = X(t), t) {
      const n = a.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Se(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let s = !1;
    function o(i) {
      if (i = X(i), i) {
        const c = a.findKey(n, i);
        c && (!r || Se(n, n[c], c, r)) && (delete n[c], s = !0);
      }
    }
    return a.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, s = !1;
    for (; n--; ) {
      const o = r[n];
      (!t || Se(this, this[o], o, t, !0)) && (delete this[o], s = !0);
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
    const n = (this[Ge] = this[Ge] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const c = X(i);
      n[c] || (cn(s, i), n[c] = !0);
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
L.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors(L.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
a.freezeMethods(L);
function Te(e, t) {
  const r = this || te, n = t || r, s = L.from(n.headers);
  let o = n.data;
  return a.forEach(e, function(c) {
    o = c.call(r, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function Tt(e) {
  return !!(e && e.__CANCEL__);
}
function Y(e, t, r) {
  b.call(this, e ?? "canceled", b.ERR_CANCELED, t, r), this.name = "CanceledError";
}
a.inherits(Y, b, {
  __CANCEL__: !0
});
function Ot(e, t, r) {
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
    const f = Date.now(), l = n[o];
    i || (i = f), r[s] = d, n[s] = f;
    let h = o, y = 0;
    for (; h !== s; )
      y += r[h++], h = h % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), f - i < t)
      return;
    const g = l && f - l;
    return g ? Math.round(y * 1e3 / g) : void 0;
  };
}
function fn(e, t) {
  let r = 0, n = 1e3 / t, s, o;
  const i = (f, l = Date.now()) => {
    r = l, s = null, o && (clearTimeout(o), o = null), e.apply(null, f);
  };
  return [(...f) => {
    const l = Date.now(), h = l - r;
    h >= n ? i(f, l) : (s = f, o || (o = setTimeout(() => {
      o = null, i(s);
    }, n - h)));
  }, () => s && i(s)];
}
const ae = (e, t, r = 3) => {
  let n = 0;
  const s = ln(50, 250);
  return fn((o) => {
    const i = o.loaded, c = o.lengthComputable ? o.total : void 0, d = i - n, f = s(d), l = i <= c;
    n = i;
    const h = {
      loaded: i,
      total: c,
      progress: c ? i / c : void 0,
      bytes: d,
      rate: f || void 0,
      estimated: f && c && l ? (c - i) / f : void 0,
      event: o,
      lengthComputable: c != null,
      [t ? "download" : "upload"]: !0
    };
    e(h);
  }, r);
}, Ke = (e, t) => {
  const r = e != null;
  return [(n) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: n
  }), t[1]];
}, Xe = (e) => (...t) => a.asap(() => e(...t)), dn = C.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (r) => (r = new URL(r, C.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(
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
function At(e, t, r) {
  let n = !hn(t);
  return e && (n || r == !1) ? mn(e, t) : t;
}
const Ze = (e) => e instanceof L ? { ...e } : e;
function $(e, t) {
  t = t || {};
  const r = {};
  function n(f, l, h, y) {
    return a.isPlainObject(f) && a.isPlainObject(l) ? a.merge.call({ caseless: y }, f, l) : a.isPlainObject(l) ? a.merge({}, l) : a.isArray(l) ? l.slice() : l;
  }
  function s(f, l, h, y) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(f))
        return n(void 0, f, h, y);
    } else return n(f, l, h, y);
  }
  function o(f, l) {
    if (!a.isUndefined(l))
      return n(void 0, l);
  }
  function i(f, l) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(f))
        return n(void 0, f);
    } else return n(void 0, l);
  }
  function c(f, l, h) {
    if (h in t)
      return n(f, l);
    if (h in e)
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
    headers: (f, l, h) => s(Ze(f), Ze(l), h, !0)
  };
  return a.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const h = d[l] || s, y = h(e[l], t[l], l);
    a.isUndefined(y) && h !== c || (r[l] = y);
  }), r;
}
const _t = (e) => {
  const t = $({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: c } = t;
  t.headers = i = L.from(i), t.url = gt(At(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), c && i.set(
    "Authorization",
    "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : ""))
  );
  let d;
  if (a.isFormData(r)) {
    if (C.hasStandardBrowserEnv || C.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((d = i.getContentType()) !== !1) {
      const [f, ...l] = d ? d.split(";").map((h) => h.trim()).filter(Boolean) : [];
      i.setContentType([f || "multipart/form-data", ...l].join("; "));
    }
  }
  if (C.hasStandardBrowserEnv && (n && a.isFunction(n) && (n = n(t)), n || n !== !1 && dn(t.url))) {
    const f = s && o && pn.read(o);
    f && i.set(s, f);
  }
  return t;
}, En = typeof XMLHttpRequest < "u", bn = En && function(e) {
  return new Promise(function(r, n) {
    const s = _t(e);
    let o = s.data;
    const i = L.from(s.headers).normalize();
    let { responseType: c, onUploadProgress: d, onDownloadProgress: f } = s, l, h, y, g, p;
    function E() {
      g && g(), p && p(), s.cancelToken && s.cancelToken.unsubscribe(l), s.signal && s.signal.removeEventListener("abort", l);
    }
    let m = new XMLHttpRequest();
    m.open(s.method.toUpperCase(), s.url, !0), m.timeout = s.timeout;
    function w() {
      if (!m)
        return;
      const _ = L.from(
        "getAllResponseHeaders" in m && m.getAllResponseHeaders()
      ), P = {
        data: !c || c === "text" || c === "json" ? m.responseText : m.response,
        status: m.status,
        statusText: m.statusText,
        headers: _,
        config: e,
        request: m
      };
      Ot(function(v) {
        r(v), E();
      }, function(v) {
        n(v), E();
      }, P), m = null;
    }
    "onloadend" in m ? m.onloadend = w : m.onreadystatechange = function() {
      !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(w);
    }, m.onabort = function() {
      m && (n(new b("Request aborted", b.ECONNABORTED, e, m)), m = null);
    }, m.onerror = function() {
      n(new b("Network Error", b.ERR_NETWORK, e, m)), m = null;
    }, m.ontimeout = function() {
      let j = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const P = s.transitional || wt;
      s.timeoutErrorMessage && (j = s.timeoutErrorMessage), n(new b(
        j,
        P.clarifyTimeoutError ? b.ETIMEDOUT : b.ECONNABORTED,
        e,
        m
      )), m = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in m && a.forEach(i.toJSON(), function(j, P) {
      m.setRequestHeader(P, j);
    }), a.isUndefined(s.withCredentials) || (m.withCredentials = !!s.withCredentials), c && c !== "json" && (m.responseType = s.responseType), f && ([y, p] = ae(f, !0), m.addEventListener("progress", y)), d && m.upload && ([h, g] = ae(d), m.upload.addEventListener("progress", h), m.upload.addEventListener("loadend", g)), (s.cancelToken || s.signal) && (l = (_) => {
      m && (n(!_ || _.type ? new Y(null, e, m) : _), m.abort(), m = null);
    }, s.cancelToken && s.cancelToken.subscribe(l), s.signal && (s.signal.aborted ? l() : s.signal.addEventListener("abort", l)));
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
        const l = f instanceof Error ? f : this.reason;
        n.abort(l instanceof b ? l : new Y(l instanceof Error ? l.message : l));
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
}, yn = function* (e, t) {
  let r = e.byteLength;
  if (r < t) {
    yield e;
    return;
  }
  let n = 0, s;
  for (; n < r; )
    s = n + t, yield e.slice(n, s), n = s;
}, gn = async function* (e, t) {
  for await (const r of wn(e))
    yield* yn(r, t);
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
}, Qe = (e, t, r, n) => {
  const s = gn(e, t);
  let o = 0, i, c = (d) => {
    i || (i = !0, n && n(d));
  };
  return new ReadableStream({
    async pull(d) {
      try {
        const { done: f, value: l } = await s.next();
        if (f) {
          c(), d.close();
          return;
        }
        let h = l.byteLength;
        if (r) {
          let y = o += h;
          r(y);
        }
        d.enqueue(new Uint8Array(l));
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
}, Ee = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", xt = Ee && typeof ReadableStream == "function", Sn = Ee && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Nt = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Tn = xt && Nt(() => {
  let e = !1;
  const t = new Request(C.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), et = 64 * 1024, Pe = xt && Nt(() => a.isReadableStream(new Response("").body)), ce = {
  stream: Pe && ((e) => e.body)
};
Ee && ((e) => {
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
    return (await Sn(e)).byteLength;
}, An = async (e, t) => {
  const r = a.toFiniteNumber(e.getContentLength());
  return r ?? On(t);
}, _n = Ee && (async (e) => {
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
    headers: l,
    withCredentials: h = "same-origin",
    fetchOptions: y
  } = _t(e);
  f = f ? (f + "").toLowerCase() : "text";
  let g = Rn([s, o && o.toAbortSignal()], i), p;
  const E = g && g.unsubscribe && (() => {
    g.unsubscribe();
  });
  let m;
  try {
    if (d && Tn && r !== "get" && r !== "head" && (m = await An(l, n)) !== 0) {
      let P = new Request(t, {
        method: "POST",
        body: n,
        duplex: "half"
      }), U;
      if (a.isFormData(n) && (U = P.headers.get("content-type")) && l.setContentType(U), P.body) {
        const [v, z] = Ke(
          m,
          ae(Xe(d))
        );
        n = Qe(P.body, et, v, z);
      }
    }
    a.isString(h) || (h = h ? "include" : "omit");
    const w = "credentials" in Request.prototype;
    p = new Request(t, {
      ...y,
      signal: g,
      method: r.toUpperCase(),
      headers: l.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: w ? h : void 0
    });
    let O = await fetch(p, y);
    const _ = Pe && (f === "stream" || f === "response");
    if (Pe && (c || _ && E)) {
      const P = {};
      ["status", "statusText", "headers"].forEach((V) => {
        P[V] = O[V];
      });
      const U = a.toFiniteNumber(O.headers.get("content-length")), [v, z] = c && Ke(
        U,
        ae(Xe(c), !0)
      ) || [];
      O = new Response(
        Qe(O.body, et, v, () => {
          z && z(), E && E();
        }),
        P
      );
    }
    f = f || "text";
    let j = await ce[a.findKey(ce, f) || "text"](O, e);
    return !_ && E && E(), await new Promise((P, U) => {
      Ot(P, U, {
        data: j,
        headers: L.from(O.headers),
        status: O.status,
        statusText: O.statusText,
        config: e,
        request: p
      });
    });
  } catch (w) {
    throw E && E(), w && w.name === "TypeError" && /Load failed|fetch/i.test(w.message) ? Object.assign(
      new b("Network Error", b.ERR_NETWORK, e, p),
      {
        cause: w.cause || w
      }
    ) : b.from(w, w && w.code, e, p);
  }
}), Ce = {
  http: Mr,
  xhr: bn,
  fetch: _n
};
a.forEach(Ce, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const tt = (e) => `- ${e}`, xn = (e) => a.isFunction(e) || e === null || e === !1, Pt = {
  getAdapter: (e) => {
    e = a.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const s = {};
    for (let o = 0; o < t; o++) {
      r = e[o];
      let i;
      if (n = r, !xn(r) && (n = Ce[(i = String(r)).toLowerCase()], n === void 0))
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
` + o.map(tt).join(`
`) : " " + tt(o[0]) : "as no adapter specified";
      throw new b(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: Ce
};
function Oe(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Y(null, e);
}
function rt(e) {
  return Oe(e), e.headers = L.from(e.headers), e.data = Te.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Pt.getAdapter(e.adapter || te.adapter)(e).then(function(n) {
    return Oe(e), n.data = Te.call(
      e,
      e.transformResponse,
      n
    ), n.headers = L.from(n.headers), n;
  }, function(n) {
    return Tt(n) || (Oe(e), n && n.response && (n.response.data = Te.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = L.from(n.response.headers))), Promise.reject(n);
  });
}
const Ct = "1.10.0", be = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  be[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const nt = {};
be.transitional = function(t, r, n) {
  function s(o, i) {
    return "[Axios v" + Ct + "] Transitional option '" + o + "'" + i + (n ? ". " + n : "");
  }
  return (o, i, c) => {
    if (t === !1)
      throw new b(
        s(i, " has been removed" + (r ? " in " + r : "")),
        b.ERR_DEPRECATED
      );
    return r && !nt[i] && (nt[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(o, i, c) : !0;
  };
};
be.spelling = function(t) {
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
  validators: be
}, F = ie.validators;
let M = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Ye(),
      response: new Ye()
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
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = $(this.defaults, r);
    const { transitional: n, paramsSerializer: s, headers: o } = r;
    n !== void 0 && ie.assertOptions(n, {
      silentJSONParsing: F.transitional(F.boolean),
      forcedJSONParsing: F.transitional(F.boolean),
      clarifyTimeoutError: F.transitional(F.boolean)
    }, !1), s != null && (a.isFunction(s) ? r.paramsSerializer = {
      serialize: s
    } : ie.assertOptions(s, {
      encode: F.function,
      serialize: F.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), ie.assertOptions(r, {
      baseUrl: F.spelling("baseURL"),
      withXsrfToken: F.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let i = o && a.merge(
      o.common,
      o[r.method]
    );
    o && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete o[p];
      }
    ), r.headers = L.concat(i, o);
    const c = [];
    let d = !0;
    this.interceptors.request.forEach(function(E) {
      typeof E.runWhen == "function" && E.runWhen(r) === !1 || (d = d && E.synchronous, c.unshift(E.fulfilled, E.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function(E) {
      f.push(E.fulfilled, E.rejected);
    });
    let l, h = 0, y;
    if (!d) {
      const p = [rt.bind(this), void 0];
      for (p.unshift.apply(p, c), p.push.apply(p, f), y = p.length, l = Promise.resolve(r); h < y; )
        l = l.then(p[h++], p[h++]);
      return l;
    }
    y = c.length;
    let g = r;
    for (h = 0; h < y; ) {
      const p = c[h++], E = c[h++];
      try {
        g = p(g);
      } catch (m) {
        E.call(this, m);
        break;
      }
    }
    try {
      l = rt.call(this, g);
    } catch (p) {
      return Promise.reject(p);
    }
    for (h = 0, y = f.length; h < y; )
      l = l.then(f[h++], f[h++]);
    return l;
  }
  getUri(t) {
    t = $(this.defaults, t);
    const r = At(t.baseURL, t.url, t.allowAbsoluteUrls);
    return gt(r, t.params, t.paramsSerializer);
  }
};
a.forEach(["delete", "get", "head", "options"], function(t) {
  M.prototype[t] = function(r, n) {
    return this.request($(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(o, i, c) {
      return this.request($(c || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  M.prototype[t] = r(), M.prototype[t + "Form"] = r(!0);
});
let Pn = class kt {
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
      n.reason || (n.reason = new Y(o, i, c), r(n.reason));
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
      token: new kt(function(s) {
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
function kn(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const ke = {
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
Object.entries(ke).forEach(([e, t]) => {
  ke[t] = e;
});
function Lt(e) {
  const t = new M(e), r = ct(M.prototype.request, t);
  return a.extend(r, M.prototype, t, { allOwnKeys: !0 }), a.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(s) {
    return Lt($(e, s));
  }, r;
}
const T = Lt(te);
T.Axios = M;
T.CanceledError = Y;
T.CancelToken = Pn;
T.isCancel = Tt;
T.VERSION = Ct;
T.toFormData = me;
T.AxiosError = b;
T.Cancel = T.CanceledError;
T.all = function(t) {
  return Promise.all(t);
};
T.spread = Cn;
T.isAxiosError = kn;
T.mergeConfig = $;
T.AxiosHeaders = L;
T.formToJSON = (e) => St(a.isHTMLForm(e) ? new FormData(e) : e);
T.getAdapter = Pt.getAdapter;
T.HttpStatusCode = ke;
T.default = T;
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
  getAdapter: ys,
  mergeConfig: gs
} = T;
class I {
  isError = !1;
  isSuccess = !1;
  status = q.INTERNAL_SERVER_ERROR;
  statusMessage = "";
  data;
  constructor() {
  }
  static getSucessInstance(t) {
    const r = new I();
    return r.isSuccess = !0, r.isError = !1, r.status = t.status, r.statusMessage = t.statusMessage, r.data = t.data, r;
  }
  static getErrorInstance(t) {
    const r = new I();
    return r.isSuccess = !1, r.isError = !0, r.status = t.status, r.statusMessage = t.statusMessage, r;
  }
  static success(t) {
    return I.getSucessInstance(t);
  }
  static error(t) {
    return I.getErrorInstance(t);
  }
}
class Ln {
  baseUrl;
  literal;
  constructor(t, r) {
    this.baseUrl = t, this.literal = r;
  }
  async request(t) {
    try {
      const r = await T(t), n = {
        status: r.status,
        statusMessage: r.statusText,
        data: r.data
      };
      return I.success(n);
    } catch (r) {
      if (console.log(r), T.isAxiosError(r)) {
        const n = r, s = n.response?.status || q.INTERNAL_SERVER_ERROR, o = n.message || this.literal.internal_server_error, i = {
          status: s,
          statusMessage: o
        };
        return I.error(i);
      } else
        return I.error({
          status: q.INTERNAL_SERVER_ERROR,
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
const Ae = /* @__PURE__ */ new Map(), ws = (e, t) => {
  if (Ae.has(e))
    return Ae.get(e);
  const r = new Ln(e, t);
  return Ae.set(e, r), r;
}, jt = st(
  {}
);
function Ss() {
  return ot(jt);
}
function Ts({
  children: e,
  lightTheme: t,
  darkTheme: r,
  forceTheme: n
  // This prop will be passed from Storybook
}) {
  const [s, o] = Z(() => typeof window < "u" ? localStorage.getItem("darkMode") === "true" : !1), i = n ? n === "dark" : s, c = () => {
    if (!n) {
      const f = !s;
      o(f), localStorage.setItem("darkMode", String(f));
    }
  }, d = Mt(() => i ? r : t, [
    i,
    t,
    r
  ]);
  return /* @__PURE__ */ A.jsx(jt.Provider, { value: { darkMode: i, toggleDarkMode: c }, children: /* @__PURE__ */ A.jsxs(Ht, { theme: d, children: [
    /* @__PURE__ */ A.jsx(Wt, {}),
    e
  ] }) });
}
export {
  Ln as ApiService,
  Qn as AppStateHandler,
  Ve as EmptyState,
  Qt as ErrorState,
  q as HttpStatusCode,
  at as LanguageContext,
  rs as LanguageProvider,
  ts as LanguageSelector,
  Zt as LoadingState,
  I as ServerResponse,
  H as StateType,
  jt as ThemeContext,
  Ts as ThemeProvider,
  Xn as drawerWidth,
  ws as getApiService,
  Zn as getStatusMessage,
  es as useDataState,
  le as useLanguage,
  Ss as useTheme
};
